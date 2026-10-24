"""Aggregate source-bound targeted AG diagram reviews without changing the master list."""
import hashlib, json, re
from pathlib import Path
root=Path.cwd(); base=root/'research/math-library-rendering-audit-2026-10-23'; cat=base/'algebraic-geometry'; supp=cat/'diagram-supplement'
primary=json.loads((cat/'manifest.json').read_text()); primary_by={x['id']:x for x in primary['items']}
def sha(p): return hashlib.sha256(p.read_bytes()).hexdigest()
def iter_dicts(obj):
    if isinstance(obj,dict):
        yield obj
        for v in obj.values(): yield from iter_dicts(v)
    elif isinstance(obj,list):
        for v in obj: yield from iter_dicts(v)
def text_values(obj):
    if isinstance(obj,str): yield obj
    elif isinstance(obj,dict):
        for v in obj.values(): yield from text_values(v)
    elif isinstance(obj,list):
        for v in obj: yield from text_values(v)
def numbers(entry):
    out=[]
    for a,b in entry.get('line_ranges',[]): out.extend(range(int(a),int(b)+1))
    if not out and isinstance(entry.get('lines'),list): out=[int(x) for x in entry['lines'] if isinstance(x,int)]
    return sorted(set(out))
def find_report(report,id):
    choices=[x for x in iter_dicts(report) if x.get('id')==id or x.get('item_id')==id]
    if not choices: return report
    return max(choices,key=lambda x:len(x))
def getvalue(rows,keys):
    for row in rows:
        for key in keys:
            value=row.get(key)
            if value not in (None,'',[],{}): return value
    return None
def report_for_round(n,entry):
    lane=entry['lane']
    report_path=supp/f'round-{n:02}'/f'lane-{lane}.json'
    report=json.loads(report_path.read_text())
    md=report_path.with_suffix('.md')
    candidates=[x for x in iter_dicts(report) if x.get('id')==entry['id'] or x.get('item_id')==entry['id']]
    if not candidates: raise SystemExit(f'round {n} lane {lane}: no report entry for {entry["id"]}')
    evidence=max(candidates,key=lambda x:len(x))
    return report_path,md,report,evidence
all_entries=[]; existing=[]
# Round 1 entries, with the interrupted lane 03 represented by two separate recovery reports.
manifest1=json.loads((supp/'manifest.json').read_text())
recovery=json.loads((supp/'recovery/recovery-manifest.json').read_text())
recovery_by={x['id']:x for x in recovery['items']}
for entry in manifest1['items']:
    if entry['kind']=='existing-diagram-review':
        # Existing diagram checks are coverage records, not defect candidates.
        lane=None; ev=None; report_path=None; md=None
        for i in range(1,11):
            p=supp/f'lane-{i:02}.json'
            if not p.exists(): continue
            d=json.loads(p.read_text())
            rows=[x for x in iter_dicts(d) if x.get('id')==entry['id'] or x.get('item_id')==entry['id']]
            if rows:
                lane=f'{i:02}'; ev=max(rows,key=lambda x:len(x)); report_path=p; md=p.with_suffix('.md'); break
        if ev is None: raise SystemExit('missing existing diagram check '+entry['id'])
        row={
          'id':entry['id'],'defect_type':'existing-diagram-mathematics','status':'checked-correct',
          'diagram_kind':entry.get('diagram_kind'),'source':entry['source'],'source_sha256':entry.get('current_source_sha256'),
          'lines':numbers(entry),'source_lines':entry.get('source_lines',{}),'screenshots':entry.get('screenshots',[]),
          'mathematical_checks':getvalue([ev],['checks','mathematical_checks','correctness_checks','commutativity_check']),
          'reviewer_finding':getvalue([ev],['finding','summary','result','status']),
          'review_report':str(report_path.relative_to(root)),'evidence_dir':str((supp).relative_to(root)),
          'selection_round':1,'lane':lane,'classification':'checked-correct'
        }
        existing.append(row); continue
    if entry['id'] in recovery_by:
        rec=recovery_by[entry['id']]; num=rec['recovery_item']; rp=supp/'recovery'/f'recovery-{num:02}.json'; mp=rp.with_suffix('.md')
        wrapper=json.loads(rp.read_text()); ev=wrapper.get('finding',wrapper)
        lane=f'recovery-{num:02}'; report_path=rp; md=mp
    else:
        lane_num=entry['lane']; report_path=supp/f'lane-{lane_num}.json'; md=report_path.with_suffix('.md')
        if not report_path.exists(): raise SystemExit(f'round 1 lane {lane_num} is unreported')
        report=json.loads(report_path.read_text()); ev=find_report(report,entry['id']); lane=lane_num
    all_entries.append((1,entry,lane,report_path,md,ev))
for n in range(2,6):
    m=json.loads((supp/f'round-{n:02}'/'manifest.json').read_text())
    for entry in m['items']:
        rp,md,report,ev=report_for_round(n,entry)
        all_entries.append((n,entry,entry['lane'],rp,md,ev))
rows=[]
for roundn,entry,lane,report_path,md,ev in all_entries:
    item_id=entry['id']; source_path=root/entry['source']; source_digest=sha(source_path)
    expected=entry.get('current_source_sha256') or entry.get('source_sha256')
    if source_digest!=expected: raise SystemExit(f'{item_id}: current source differs from selected bytes')
    snapshot_rel=entry.get('snapshot') or entry.get('source_snapshot')
    if not snapshot_rel: raise SystemExit(f'{item_id}: missing bound snapshot')
    snapshot=root/snapshot_rel
    if sha(snapshot)!=expected: raise SystemExit(f'{item_id}: snapshot/source hash mismatch')
    line_nums=numbers(entry)
    exact=entry.get('source_lines')
    if not isinstance(exact,dict) or not exact:
        lines=snapshot.read_text().splitlines(); exact={str(i):lines[i-1] for i in line_nums}
    else:
        exact={str(k):v for k,v in exact.items()}
    if not line_nums: line_nums=sorted(int(k) for k in exact if str(k).isdigit())
    screenshots=entry.get('screenshots') or entry.get('images') or []
    hashes=[]
    for image in screenshots:
        image_path=root/image
        if not image_path.exists(): raise SystemExit(f'{item_id}: missing screenshot {image}')
        hashes.append({'path':image,'sha256':sha(image_path)})
    md_text=md.read_text() if md and md.exists() else ''
    if not re.search(r'original.?resolution|original resolution|original-resolution',md_text,re.I):
        raise SystemExit(f'{item_id}: report lacks original-resolution evidence')
    why=getvalue([ev],['why_warranted','why_recommended','why','reason','diagnosis','finding','summary','visual','symptom','opportunity'])
    details=getvalue([ev],['concrete_diagram_content','concrete_content_to_draw_or_check','diagram_details','diagram_content_guidance','content_to_draw','correctness_checks'])
    checks=getvalue([ev],['mathematical_checks','checks','correctness_checks','correctness_check'])
    status=getvalue([ev],['status','verdict','disposition','finding_type','kind'])
    secondary=[]
    for key in ['possible_error','mathematical_concern','reported_issue','ambiguity','warning','limitations']:
        value=ev.get(key)
        if value not in (None,'',[],{}): secondary.append({'field':key,'value':value})
    if item_id=='lem-blowing-up-a-regular-point-is-a-contraction':
        finding=ev.get('finding')
        if isinstance(finding,dict) and finding.get('suggested_repair'): secondary.append({'field':'possible-base-label-ambiguity','value':finding['suggested_repair']})
        elif ev.get('finding'): secondary.append({'field':'possible-base-label-ambiguity','value':ev.get('finding')})
    primary_row=primary_by[item_id]
    heading='Item body'
    for ln in line_nums:
        lines=snapshot.read_text().splitlines()
        for j in range(min(ln-1,len(lines)-1),-1,-1):
            match=re.match(r'^##\s+(.+?)\s*$',lines[j])
            if match: heading=match.group(1); break
        if heading!='Item body': break
    reviewer=f'/root/category_visual_coordinator/ag_diag_lane_{lane}' if lane not in ('recovery-01','recovery-02') else f'/root/category_visual_coordinator/ag_diag_lane_0{int(lane[-2:])}'
    rows.append({
      'id':item_id,'defect_type':'missing-tikz-diagram','section':heading,'lines':line_nums,
      'source_lines':exact,'source':entry['source'],'source_sha256':expected,'pages':primary_row.get('pages',[]),
      'symptom':str(why or 'Potential missing-diagram opportunity reviewed from the bound source and local render.'),
      'classification':'uncertain','diagram_kind':entry.get('diagram_kind','mathematical diagram'),
      'source_claim':entry.get('selection_reason',''), 'why_warranted':why,
      'concrete_diagram_content':details or entry.get('concrete_diagram_content_or_checks') or [],
      'mathematical_checks':checks or entry.get('correctness_checks') or [],
      'suggested_repair':'Consider an optional diagram for the stated objects and maps only; preserve proof independence. Any separate mathematical concern remains unconfirmed until independent adjudication.',
      'screenshots':screenshots,'screenshot_hashes':hashes,
      'screenshot_receipt':entry.get('screenshot_receipt'),'evidence_dir':str((supp if roundn==1 else supp/f'round-{roundn:02}').relative_to(root)),
      'selection_round':roundn,'lane':lane,'reviewer':reviewer,'review_report':str(report_path.relative_to(root)),
      'review_markdown':str(md.relative_to(root)) if md else None,'reviewed_all_assigned_tiles_at_original_resolution':True,
      'reviewer_status':status,'reported_secondary_concerns':secondary,'selection_status':'potential-editorial-candidate'
    })
if len({x['id'] for x in rows})!=35: raise SystemExit(f'expected 35 unique missing-diagram candidates, got {len(rows)}')
if len({x['id'] for x in existing})!=2: raise SystemExit(f'expected two existing-diagram checks, got {len(existing)}')
receipt={'category':'algebraic-geometry','selected_count':37,'missing_diagram_candidates':35,'existing_diagram_checks':2,'rounds':[{'round':1,'selection_count':15,'reviewer_reports':10,'recovery_reports':2,'status':'complete'},{'round':2,'selection_count':9,'status':'complete'},{'round':3,'selection_count':5,'status':'complete'},{'round':4,'selection_count':4,'status':'complete'},{'round':5,'selection_count':4,'status':'complete'}],'original_lane_03':'interrupted without accepted report; the two assigned items are covered by separate recovery reviewers','coverage_scope':'Targeted high-likelihood diagram candidates only; not a full-category diagram review. All selected source hashes matched current local sources and every assigned local screenshot tile was documented as viewed at original resolution.','source_hashes_verified':True,'screenshot_files_verified':True}
(supp/'combined-findings.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n')
(supp/'combined-existing-diagram-checks.json').write_text(json.dumps(existing,ensure_ascii=False,indent=2)+'\n')
(supp/'combined-coverage.json').write_text(json.dumps({'receipt':receipt,'candidate_ids':[x['id'] for x in rows],'existing_diagram_ids':[x['id'] for x in existing],'round_manifests':[str((supp/f'round-{n:02}'/'manifest.json').relative_to(root)) for n in range(2,6)],'recovery_manifest':str((supp/'recovery/recovery-manifest.json').relative_to(root))},ensure_ascii=False,indent=2)+'\n')
(supp/'combined-report-section.md').write_text('# Algebraic Geometry diagram supplement\n\nReviewed 37 targeted items across five source-bound rounds: 35 uncertain potential missing-diagram candidates and two existing diagrams checked as correct. The original lane 03 turn was interrupted without an accepted report; its two selected candidates were independently reviewed in recovery lanes 01 and 02. All accepted reports document original-resolution inspection of their assigned local screenshot tiles and bind current source hashes. This is a targeted subset, not full-category diagram coverage.\n')
(supp/'combined-receipt.json').write_text(json.dumps(receipt,ensure_ascii=False,indent=2)+'\n')
print('wrote combined findings',len(rows),'existing checks',len(existing))
