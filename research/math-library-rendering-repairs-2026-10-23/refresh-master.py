"""Refresh the single user-facing report from preserved visual evidence and real Sol reports."""
import json,pathlib,datetime,re,hashlib,os
root=pathlib.Path.cwd();research=root/'research';base=research/'math-library-rendering-audit-2026-10-23';repair=research/'math-library-rendering-repairs-2026-10-23';q=json.loads((base/'category-queue.json').read_text());rq=json.loads((repair/'queue.json').read_text());byid={e['id']:e for e in rq['entries']};visual=json.loads((repair/'visual-confirmations.json').read_text()) if (repair/'visual-confirmations.json').exists() else {};done=sum(c['status']=='complete' for c in q['categories'])
def image_link(evidence,path):
 p=pathlib.Path(path)
 absolute=p if p.is_absolute()else(root/p if p.parts and p.parts[0]=='research'else evidence/p)
 return str(absolute.relative_to(research))
def current_guard(id):
 raw=(root/'items'/f'{id}.md').read_text();m=re.match(r'^---\n([\s\S]*?)\n---\n([\s\S]*)$',raw)
 normalized=raw if not m else re.sub(r'^verification:(?:\n(?:[ \t]+.*\n?)*|[^\n]*\n?)','',m[1],flags=re.M)+'\n---\n'+m[2]
 return hashlib.sha256(normalized.encode()).hexdigest()
def current_receipt(id):
 p=repair/'receipts'/f'{id}.json'
 return p.exists() and json.loads(p.read_text())['content_sha256']==current_guard(id)
def current_visual(id):
 return id in visual and visual[id].get('content_sha256')==current_guard(id)
rendered_findings=set()
def finding_key(id,f):
 return (id,f.get('section'),tuple(f.get('lines',[])),f.get('defect_type'))
def prose(value):
 return value if isinstance(value,str)else json.dumps(value,ensure_ascii=False)
def queued_image_link(entry,f,evidence,path):
 # Some forward candidate ledgers live in diagram-supplement while retaining
 # category-relative screenshot paths. Resolve only the original category image,
 # checking its preserved digest when one is supplied; never use an after-image.
 p=pathlib.Path(path)
 candidates=[root/path]if p.parts and p.parts[0]=='research'else[evidence/path,root/entry.get('inspection_dir','research')/path]
 if evidence.name=='diagram-supplement':candidates.append(evidence.parent/path)
 expected=f.get('screenshot_sha256',{}).get(path)if isinstance(f.get('screenshot_sha256',{}),dict)else None
 if not expected:
  expected=next((x.get('sha256')for x in f.get('screenshot_hashes',[])if x.get('path')==path),None)
 for candidate in candidates:
  if candidate.is_file()and(not expected or hashlib.sha256(candidate.read_bytes()).hexdigest()==expected):return str(candidate.relative_to(research))
 raise ValueError(f'No authenticated original screenshot for {entry["id"]}: {path}')
text='''# Math library LaTeX/TikZ defects and diagram candidates

The visual scan covered **one category at a time**, with ten fresh GPT-6-Luna agents at high reasoning effort per category. Independent adjudication and repairs run in parallel, using **one fresh GPT-6.1-Sol agent at medium effort per flagged item**. All work uses the local repository and local browser images; no agent visits the live website.

The original read-only findings remain preserved. The owner subsequently authorized repairing confirmed LaTeX and TikZ defects. Each finding below retains its original symptom and frozen source evidence, followed by its defect type and current adjudication/repair disposition. Optional typography and rejected reports remain visible for future reference. Publication statuses are frozen: no promotion, demotion, publication or unpublication is permitted. Ordinary rendering repairs preserve underlying claims, hypotheses and rigorous proofs. A confirmed diagram-related mathematical correction is recorded explicitly and requires source/report-bound root acceptance; publication status remains fixed. Diagram candidates now include warranted new explanatory figures and questionable diagram mathematics; adjudicators check the actual maps, identities, signs, orientations and combinatorics. This does not grant a new whole-item proof audit or native build/audit acceptance.

Local Chromium previews use the actual application ItemBody/MathMarkdown, wikilink resolver, KaTeX and TikZ renderer with local CSS/fonts. They cover item titles and complete bodies, including proofs, internal references, diagrams and opened Scratch; separate navigation, dependency graphs and metadata bibliography widgets are excluded. Revision-1 Fourier images were truncated and do not count: every Fourier item was recaptured and reviewed at corrected revision 2. Source scans and parser diagnostics alone never supply visual coverage. The finite initial inventory contains 50 categories and 38,395 category-item memberships, including authored draft and published placements; unplaced items and unbuilt future categories are outside those inventories.

'''
reports={e['id']:json.loads((repair/'adjudications'/f"{e['id']}.json").read_text()) for e in rq['entries'] if (repair/'adjudications'/f"{e['id']}.json").exists()}
changed_ids=[id for id,report in reports.items() if report.get('changed')]
closed=done==50 and len(reports)==len(rq['entries']) and all(e['status'] in ['adjudicated','ready-for-receipt-refresh'] and not any(e.get(k) for k in ['followup_pending','continuation_pending','mathematical_correction_acceptance_pending']) for e in rq['entries']) and all(current_receipt(id) and current_visual(id) for id in changed_ids)
if closed:
 text+=f'Completed visual categories: **{done}/50**. All **{len(rq["entries"])} flagged carriers** have independent final adjudications: **{len(changed_ids)} changed**, **{len(reports)-len(changed_ids)} unchanged**. Every changed carrier has a current local repair receipt and source-bound visual confirmation of its changed regions. Rejected findings, editorial limitations and retained pre-existing issues are recorded below. Publication statuses remain unchanged.\n\n'
else:
 text+=f'Completed visual categories: **{done}/50**. Repair/adjudication results below are incremental; unprocessed findings are explicitly pending.\n\n'
if closed:
 closeout_files=[('Original scan intake reconciliation','root-original-scan-intake-reconciliation-20261024.json'),('Final publication status, protected metadata, receipt and visual integrity','root-final-1853-closeout-integrity-20261024.json'),('Final changed-region coverage inventory','supervisor2-final1853-coverage-inventory.json')]
 text+='## Closeout evidence\n\n'
 for label,name in closeout_files:
  if (repair/name).exists():text+=f'- [{label}](math-library-rendering-repairs-2026-10-23/{name}).\n'
 text+='\n'
text+='## Defect types\n\nTypes include missing-tikz-diagram and questionable-tikz-mathematics, as well as missing math delimiters, raw TeX in titles or reference labels, plain-text renderer labels, unsupported commands, unbalanced delimiters, malformed environments, TikZ compilation failures, TikZ clipping/overlap, optional typography, and specific other causes established by an adjudicator. A visible raw notation report can be rejected after independent inspection.\n\n'
text+='## Category progress\n\n| Category | Items | Visual scan |\n| --- | ---: | --- |\n'+''.join(f'| {c["title"]} | {c.get("actual_item_count",c["item_count"])} | {c["status"]} |\n' for c in q['categories'])+'\n'
for c in q['categories']:
 if c['status']!='complete':
  if c['status']=='in-progress':text+=f'## {c["title"]}\n\nVisual inspection in progress.\n\n'
  continue
 out=root/c['evidence_dir'];rel=str(out.relative_to(research));receipt=json.loads((out/'category-review-receipt.json').read_text());findings=json.loads((out/'combined-findings.json').read_text());manifest=json.loads((out/'manifest.json').read_text());items={e['id']:e for e in manifest['items']}
 text+=f'## {c["title"]}\n\nVisual review: **{receipt["item_count"]} items / {receipt["page_count"]} pages / {receipt["tile_count"]} image tiles**. Initial findings: '+', '.join(f'{v} {k}'for k,v in receipt['classifications'].items())+f'. [Coverage]({rel}/combined-coverage.json) · [Inspection receipt]({rel}/category-review-receipt.json) · [Manifest]({rel}/manifest.json).\n\n'
 for n,f in enumerate(findings,1):
  rendered_findings.add(finding_key(f['id'],f))
  text+=f'### {c["category"]} {n:03}: `{f["id"]}`\n\n';entry=byid.get(f['id']);a=None;ad=None
  if entry:
   ap=repair/'adjudications'/f'{f["id"]}.json'
   if ap.exists():
    ad=json.loads(ap.read_text());indexes=[i for i,x in enumerate(entry['findings']) if x.get('section')==f.get('section') and x.get('lines',[])==f.get('lines',[])]
    if indexes:a=next((v for v in ad['findings'] if v.get('original_finding_index')==indexes[0]),None)
  text+='- Original classification: **'+f['classification']+'**.\n'
  if a:
   text+='- Defect type: **'+a['defect_type']+'**.\n';status=a.get('status','adjudicated')
   if a['verdict']=='not-a-defect':status='rejected after independent adjudication; no repair required'
   elif a['verdict']=='uncertain':status='uncertain; further work required'
   elif ad.get('changed'):
    rec=repair/'receipts'/f'{f["id"]}.json'
    if current_receipt(f['id']):status='repair applied; local format/render checks passed; '+('visually confirmed' if current_visual(f['id']) else 'visual confirmation pending')
    else:status='repair applied; local validation pending'
   text+='- Adjudication/status: **'+status+'**. '+a['reason']+'\n'
   text+='- Action: '+a.get('action','None recorded')+'\n'
   text+=f'- Independent reviewer: `{ad.get("agent",entry.get("adjudicator"))}` (`gpt-6.1-sol`, medium); [report](math-library-rendering-repairs-2026-10-23/adjudications/{f["id"]}.json).\n'
   if (repair/'receipts'/f'{f["id"]}.json').exists():text+=f'- Repair evidence: [receipt](math-library-rendering-repairs-2026-10-23/receipts/{f["id"]}.json).\n'
   if current_visual(f['id']):
    text+='- After image: '+', '.join(f'[tile]({s})'for s in visual[f['id']]['screenshots'])+'.\n'
  else:text+='- Defect type and adjudication: **pending independent Sol review**.\n'
  text+=f'- Original location: **{f["section"]}**, source lines '+', '.join(str(x)for x in f['lines'])+'.\n'
  text+='- Pages: '+', '.join(f'`{x}`'for x in f['pages'])+'.\n'
  text+='- Original visible symptom: '+f['symptom']+'\n'
  text+='- Original suggested repair: '+f['suggested_repair']+'\n'
  text+='- Before image evidence: '+', '.join(f'[tile {pathlib.Path(s).stem.rsplit("--",1)[-1]}]({queued_image_link(entry or {"id":f["id"],"inspection_dir":str(out)},f,out,s)})'for s in f['screenshots'])+f'; [frozen source]({rel}/{items[f["id"]]["snapshot"]}).\n\n'
  text+='Exact frozen source lines:\n\n```text\n'+'\n'.join(f'{k}: {v}'for k,v in f['source_lines'].items())+'\n```\n\n'
supp_path=base/'diagram-supplemental-queue.json'
if supp_path.exists():
 supp=json.loads(supp_path.read_text());text+='## Targeted diagram review\n\nRetrospective review is limited to high-likelihood constructions and existing diagrams, beginning with algebraic geometry. It does not repeat all previously scanned items. Forward scans include this scope. Potential missing figures remain candidates until independently adjudicated.\n\n'
 text+='| Category | Mode | Status |\n| --- | --- | --- |\n'+''.join(f'| {x["title"]} | {x["mode"]} | {x["status"]} |\n'for x in supp['category_order'] if x['status']!='not-scheduled')+'\n'
 for c in supp['category_order']:
  if c['status']not in ['complete','in-progress']or not c.get('evidence_dir'):continue
  so=root/c['evidence_dir'];fp=so/'combined-findings.json'
  text+=f'### {c["title"]}: supplemental diagram candidates\n\n'
  if not fp.exists():text+='Targeted review is in progress; no completed supplemental findings are claimed yet.\n\n';continue
  sf=json.loads(fp.read_text());sf=sf['findings']if isinstance(sf,dict)else sf
  for n,f in enumerate(sf,1):
   rendered_findings.add(finding_key(f['id'],f))
   evidence=root/f.get('evidence_dir',c['evidence_dir']);rel=str(evidence.relative_to(research));entry=byid.get(f['id']);ap=repair/'adjudications'/f'{f["id"]}.json';ad=json.loads(ap.read_text())if ap.exists()else None;a=None
   if ad and entry:
    indexes=[i for i,x in enumerate(entry['findings'])if x.get('section')==f.get('section')and x.get('lines',[])==f.get('lines',[])and x.get('defect_type')==f.get('defect_type')]
    if indexes:a=next((x for x in ad['findings']if x.get('original_finding_index')==indexes[0]),None)
   text+=f'#### {c["category"]} diagram {n:03}: `{f["id"]}`\n\n'
   text+='- Candidate/type: **'+f.get('defect_type','missing-tikz-diagram')+'**; original classification **'+f['classification']+'**.\n'
   text+='- Mathematical reason: '+f['symptom']+'\n- Proposed content/check: '+f['suggested_repair']+'\n'
   if a:
    status=a.get('status','adjudicated')
    if a['verdict']=='not-a-defect':status='not warranted / no confirmed defect; no repair required'
    elif ad.get('changed'):status='repair or drawing applied; '+('local checks passed; '+('visually confirmed'if current_visual(f['id'])else'visual confirmation pending')if current_receipt(f['id'])else'local validation pending')
    text+='- Independent verdict/status: **'+a['verdict']+' / '+status+'**. '+a['reason']+'\n'
    text+=f'- Reviewer: `{ad["agent"]}`; [adjudication](math-library-rendering-repairs-2026-10-23/adjudications/{f["id"]}.json).\n'
    if current_receipt(f['id']):text+=f'- [Local repair evidence](math-library-rendering-repairs-2026-10-23/receipts/{f["id"]}.json).\n'
   else:text+='- Independent adjudication: **pending**.\n'
   text+='- Source locations: **'+f['section']+'**, lines '+', '.join(str(n)for n in f['lines'])+'.\n'
   text+='- Local evidence: '+', '.join(f'[tile]({queued_image_link(entry or {"id":f["id"],"inspection_dir":str(evidence)},f,evidence,x)})'for x in f['screenshots'])+'.\n\n'
   if f.get('source_lines'):text+='```text\n'+'\n'.join(f'{k}: {v}'for k,v in f['source_lines'].items())+'\n```\n\n'
text+='## Further queued diagram candidates and rendering observations\n\nThese preserved queue findings supplement the category tables and targeted reviews above. They include diagram candidates from forward scans. A candidate is not a confirmed defect; independent verdicts and outstanding work remain explicit.\n\n'
for entry in rq['entries']:
 for index,f in enumerate(entry['findings']):
  key=finding_key(entry['id'],f)
  if key in rendered_findings:continue
  rendered_findings.add(key)
  id=entry['id'];ap=repair/'adjudications'/f'{id}.json';ad=json.loads(ap.read_text())if ap.exists()else None
  a=next((x for x in ad.get('findings',[])if x.get('original_finding_index')==index),None)if ad else None
  evidence=root/f.get('evidence_dir',entry.get('inspection_dir','research'))
  text+=f'### {entry["category"]}: `{id}` — queued finding {index+1}\n\n'
  text+='- Original classification: **'+f.get('classification','candidate / unclassified')+'**.\n'
  text+='- Candidate/defect type: **'+f.get('defect_type',a.get('defect_type','pending independent review')if a else'pending independent review')+'**.\n'
  text+='- Original observation: '+f.get('symptom',f.get('source_claim',f.get('why_warranted','See preserved intake record.')))+'\n'
  proposed=f.get('suggested_repair',f.get('concrete_diagram_content'))
  if proposed:text+='- Proposed repair/content: '+prose(proposed)+'\n'
  if f.get('mathematical_checks'):text+='- Original proposed mathematical checks: '+prose(f['mathematical_checks'])+'\n'
  ready=entry['status']in['adjudicated','ready-for-receipt-refresh']and not any(entry.get(k)for k in['followup_pending','continuation_pending','mathematical_correction_acceptance_pending'])
  if a and ready:
   status='adjudicated'
   if a['verdict']=='not-a-defect':status='rejected / not warranted; no repair required'
   elif a['verdict']=='uncertain':status='uncertain; further work required'
   elif ad.get('changed'):status='repair or drawing applied; '+('local checks passed; '+('visually confirmed'if current_visual(id)else'visual confirmation pending')if current_receipt(id)else'local validation pending')
   text+='- Independent verdict/status: **'+a['verdict']+' / '+status+'**. '+a.get('reason','See report.')+'\n'
   text+='- Action: '+a.get('action','None recorded')+'\n'
  else:text+='- Independent adjudication: **pending / in progress**; queue status `'+entry['status']+'`.\n'
  if ad:text+=f'- Reviewer: `{ad.get("agent",entry.get("adjudicator"))}`; [report](math-library-rendering-repairs-2026-10-23/adjudications/{id}.json).'+(' Report is provisional while owner follow-up or consolidation remains pending.'if not ready else'')+'\n'
  if current_receipt(id):text+=f'- [Local repair evidence](math-library-rendering-repairs-2026-10-23/receipts/{id}.json).\n'
  if current_visual(id):text+='- After images: '+', '.join(f'[tile]({s})'for s in visual[id]['screenshots'])+'.\n'
  text+='- Source locations: '+f.get('section','diagram candidate')+'; lines '+', '.join(str(n)for n in f.get('lines',[]))+'.\n'
  if f.get('pages'):text+='- Pages: '+', '.join(f'`{x}`'for x in f['pages'])+'.\n'
  text+='- Before source: [preserved carrier]('+image_link(root,entry['before_file'])+').\n'
  if f.get('screenshots'):text+='- Original local images: '+', '.join(f'[tile]({queued_image_link(entry,f,evidence,x)})'for x in f['screenshots'])+'.\n'
  if f.get('intake_file'):text+='- [Preserved intake record]('+image_link(root,f['intake_file'])+').\n'
  if f.get('source_lines'):text+='\n```text\n'+'\n'.join(f'{k}: {v}'for k,v in f['source_lines'].items())+'\n```\n'
  text+='\n'
text+='## Further findings discovered by independent item adjudicators\n\nThese additional spans were discovered and assessed by the same independent Sol owner while reviewing its assigned item. They are retained separately from the original Luna flags.\n\n'
for entry in rq['entries']:
 ap=repair/'adjudications'/f'{entry["id"]}.json'
 if not ap.exists():continue
 ad=json.loads(ap.read_text())
 seen_indices=set();additional=[]
 for finding in ad['findings']:
  index=finding.get('original_finding_index')
  if index is None or index in seen_indices:additional.append(finding)
  seen_indices.add(index)
 for n,a in enumerate(additional):
  text+=f'### `{entry["id"]}`: additional finding {n+1}\n\n'
  text+='- Defect type: **'+a['defect_type']+'**.\n- Independent verdict: **'+a['verdict']+'**. '+a['reason']+'\n'
  acceptance=repair/'mathematical-acceptances'/f'{entry["id"]}.json'
  if acceptance.exists():text+=f'- Bounded mathematical-correction acceptance: [root record](math-library-rendering-repairs-2026-10-23/mathematical-acceptances/{entry["id"]}.json); this is not a whole-item proof audit.\n'
  text+='- Action: '+a.get('action','None recorded')+'\n'
  if ad.get('changed'):text+='- Validation: '+('current local checks passed; '+('changed regions visually confirmed'if current_visual(entry['id'])else'visual confirmation pending')if current_receipt(entry['id'])else'current local validation pending')+'.\n'
  text+=f'- Reviewer: `{ad["agent"]}`; [full report](math-library-rendering-repairs-2026-10-23/adjudications/{entry["id"]}.json).\n\n'
text+='## Additional observations during repair verification\n\nThese were noticed in local after-images during technical repair verification. They remain distinct from the original category scans; pending source adjudication is explicit. Fixing a supplier title can clear several inherited reference labels.\n\n'
for post in sorted(repair.glob('post-observations-*.json')):
 obs=json.loads(post.read_text());preview=root/obs['preview_manifest'];preview_rel=str(preview.parent.relative_to(research))
 for i,o in enumerate(obs['observations'],1):
  supplier=o['supplier'];entry=byid.get(supplier);ap=repair/'adjudications'/f'{supplier}.json';ad=json.loads(ap.read_text()) if ap.exists() else None
  text+=f'### `{supplier}` via `{o["consumer"]}`\n\n'
  text+='- Observed reference label: `'+o['visible_text'].replace('`','\\`')+'`.\n'
  text+='- Defect type: **raw TeX in inherited reference label; source verdict pending**.\n' if not ad else '- Independent source adjudication: '+', '.join(f'{f["defect_type"]}: {f["verdict"]} / {f.get("status","adjudicated")}' for f in ad['findings'])+'.\n'
  text+='- Observation: '+o['disposition']+'\n'
  text+=f'- Local image: [tile]({image_link(preview.parent,o["tile"])}); [observation record](math-library-rendering-repairs-2026-10-23/{post.name}).\n'
  if ad:text+=f'- Source reviewer: `{ad["agent"]}`; [adjudication](math-library-rendering-repairs-2026-10-23/adjudications/{supplier}.json).\n'
  if (repair/'receipts'/f'{supplier}.json').exists():text+=f'- Current source repair: [local receipt](math-library-rendering-repairs-2026-10-23/receipts/{supplier}.json).\n'
  text+='\n'
text+='## Retained owner disclosures and review limits\n\nThe following are the canonical owners’ recorded limitations and pre-existing observations, preserved with their reports. Some describe an earlier capture or supplier state; the current source-bound after-image confirmations above govern the repaired regions. These disclosures do not assert a new whole-item proof audit or production-route review.\n\n'
for entry in rq['entries']:
 ad=reports.get(entry['id'])
 if not ad or not ad.get('remaining_issues'):continue
 text+=f'- `{entry["id"]}`: '+prose(ad['remaining_issues'])+f' [Owner report](math-library-rendering-repairs-2026-10-23/adjudications/{entry["id"]}.json).\n'
text+='\n'
counter=repair/'root-ca-clipping-counterevidence.json'
if counter.exists():
 text+='## Counterevidence for earlier clipping reports\n\nThese are root observations on two already flagged items; the independent Sol adjudication remains authoritative for their final disposition. Original findings remain preserved above.\n\n'
 for observation in json.loads(counter.read_text())['observations']:
  tile=str(pathlib.Path(observation['screenshot']).relative_to('research'))
  text+=f'- `{observation["id"]}`: '+observation['observation']+f' [Original image]({tile}); [hash-bound observation](math-library-rendering-repairs-2026-10-23/root-ca-clipping-counterevidence.json).\n'
 text+='\n'
p=research/'math-library-rendering-defects.md';temporary=p.with_suffix('.md.tmp-'+str(os.getpid()));temporary.write_text(text);temporary.replace(p);print(f'Refreshed {p}: {done} visual categories; {len(rq["entries"])} queued flagged items')
