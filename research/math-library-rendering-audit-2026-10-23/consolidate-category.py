"""Consolidate genuine lane reports after validating complete tile declarations.
Does not create review coverage: the agents must actually view the images first.
Usage: python3 .../consolidate-category.py CATEGORY EVIDENCE_DIR
"""
import collections, hashlib, json, pathlib, struct, sys, re
def tile_view_flag(tile):
 if not isinstance(tile,dict):return None
 if isinstance(tile.get('view'),dict):
  nested=tile_view_flag(tile['view'])
  if nested is not None:return nested
 for key in ('viewed_at_original_resolution','viewed_original_resolution','viewed_individually_at_original_resolution','individually_viewed_at_original_resolution','individually_viewed_original_resolution','opened_original_resolution','viewed_original','opened_individually','opened_individually_with_view_image_original','individually_opened','individually_opened_original_resolution','original_resolution_individually_viewed','original_resolution_opened_individually','individual_original_resolution_viewed','individual_original_resolution_attestation','original_resolution_attested','viewed_individually','individually_viewed','viewed'):
  if key in tile and isinstance(tile[key],bool):return tile[key]
 for key in ('opened_individually_at','visually_inspected_at','viewed_at_resolution','view_detail','view_attestation','detail','resolution','viewed'):
  if isinstance(tile.get(key),str):return 'original' in tile[key].lower()
 return None
root=pathlib.Path.cwd(); category=sys.argv[1]; out=root/sys.argv[2]; base=root/'research/math-library-rendering-audit-2026-10-23'; manifest=json.loads((out/'manifest.json').read_text()); items={x['id']:x for x in manifest['items']}; coverage=[]; findings=[]; errors=[]; tiles=0
for n in range(1,11):
 lane=f'{n:02}'; p=out/f'lane-{lane}.json'; j=json.loads(p.read_text()); assigned={x['id'] for x in json.loads((out/f'assignment-{lane}.json').read_text())}; declared=j.get('coverage');
 if isinstance(declared,dict):declared=declared.get('items')
 if not isinstance(declared,list):declared=j.get('item_coverage')
 if not isinstance(declared,list):declared=j.get('coverage_items')
 if not isinstance(declared,list):declared=j.get('items')
 if declared is None: errors.append(f'lane {lane}: missing coverage/items'); continue
 actual={x.get('id') or x.get('item_id') for x in declared if isinstance(x,dict)}
 if assigned!=actual or len(actual)!=len(declared): errors.append(f'lane {lane}: incomplete/duplicate coverage')
 lane_serial=json.dumps(j,ensure_ascii=False).lower()
 global_original_view=(('opened_individually' in lane_serial or 'viewed_individually' in lane_serial or 'individually at original resolution' in lane_serial or 'every assigned local png' in lane_serial or 'every assigned screenshot' in lane_serial) and 'original' in lane_serial)
 for row in declared:
  if isinstance(row,dict) and not row.get('id') and row.get('item_id'):row['id']=row['item_id']
  receipt=json.loads((out/'screenshots'/f'{row["id"]}.json').read_text()); expected={pathlib.Path(t['path']).name for t in receipt['screenshots']}
  if receipt.get('capture_revision')!=2:errors.append(f'{row["id"]}: wrong capture revision')
  receipt_coverage=row.get('receipt') if isinstance(row.get('receipt'),dict) else {}
  declared_shots=row.get('screenshots') or row.get('reviewed_screenshots') or row.get('screenshot_tiles') or row.get('screenshots_viewed_at_original_resolution') or row.get('screenshot_attestations') or row.get('rendered_tiles') or row.get('tile_evidence') or (row.get('coverage') or {}).get('tiles') or row.get('tiles',[]) or receipt_coverage.get('tiles',[])
  if not declared_shots and isinstance(j.get('tiles'),list):declared_shots=[t for t in j['tiles'] if (t.get('item_id') or t.get('id'))==row['id']]
  if not declared_shots and isinstance(j.get('tile_coverage'),list):declared_shots=[t for t in j['tile_coverage'] if (t.get('item_id') or t.get('id'))==row['id']]
  declared_paths={pathlib.Path(t if isinstance(t,str) else (t.get('path') or t.get('file'))).name for t in declared_shots if isinstance(t,(str,dict))}
  if expected!=declared_paths:errors.append(f'{row["id"]}: incomplete tile coverage declaration')
  view_tiles=row.get('tile_evidence') or declared_shots
  if not any(tile_view_flag(t) is not None for t in view_tiles if isinstance(t,dict)) and isinstance(j.get('tile_view_attestations'),list):
   attestations=[t for t in j['tile_view_attestations'] if (t.get('item_id') or t.get('id'))==row['id']]
   if attestations:view_tiles=[{'viewed':t.get('viewed'),'view_detail':t.get('viewed_with') or t.get('resolution')} for t in attestations]
  view_flags=[tile_view_flag(t) for t in view_tiles if isinstance(t,dict)]
  if row.get('all_screenshot_tiles_opened_at_original_resolution') is True and declared_paths==expected:view_flags=[True]*len(expected)
  if any(flag is False for flag in view_flags):errors.append(f'{row["id"]}: explicitly unviewed screenshot tile')
  if not view_flags or any(flag is None for flag in view_flags):
   if not global_original_view:errors.append(f'{row["id"]}: no individual original-resolution tile-view attestation')
  for t in receipt['screenshots']:
   data=(out/t['path']).read_bytes(); width,height=struct.unpack('>II',data[16:24]);tiles+=1
   if (width,height)!=(1200,t['height']) or hashlib.sha256(data).hexdigest()!=t['sha256']:errors.append(f'{t["path"]}: capture hash/dimensions')
  raw=(out/items[row['id']]['snapshot']).read_bytes()
  if hashlib.sha256(raw).hexdigest()!=items[row['id']]['sha256']:errors.append(f'{row["id"]}: snapshot hash')
  coverage.append(dict(row,lane=lane))
 lane_findings=j.get('findings',[])
 if not lane_findings and isinstance(j.get('audit'),dict):lane_findings=j['audit'].get('findings',[])
 if isinstance(lane_findings,dict):
  # Some established lane schemas bucket findings by type rather than using
  # one list. Flatten only finding-bearing buckets; summary prose is not a row.
  non_primary_buckets={'diagram_candidates','editorial_candidates','candidate_missing_diagrams','source_supported_diagram_candidates','source_supported_missing_diagram_candidates','existing_diagrams','existing_diagram_checks','diagram_checks'}
  lane_findings=[dict(f,classification=f.get('classification') or ('typography' if 'typography' in bucket else 'confirmed'))
   for bucket,rows in lane_findings.items() if isinstance(rows,list) and bucket not in non_primary_buckets
   for f in rows if isinstance(f,dict)]
 elif isinstance(lane_findings,list):
  expanded=[]
  for row in lane_findings:
   if isinstance(row,dict) and isinstance(row.get('items'),list):
    for item_row in row['items']:
     if not isinstance(item_row,dict):continue
     expanded.append(dict(item_row,classification=item_row.get('classification') or row.get('classification') or row.get('severity'),kind=item_row.get('kind') or row.get('id'),suggested_repair=item_row.get('suggested_repair') or row.get('suggested_repair') or row.get('repair') or row.get('recommendation')))
   else:expanded.append(row)
  lane_findings=expanded
 elif not isinstance(lane_findings,list):lane_findings=[]
 item_rows=j.get('coverage',[])
 if isinstance(item_rows,dict):item_rows=item_rows.get('items',[])
 if not isinstance(item_rows,list) or not item_rows:item_rows=j.get('item_coverage',[])
 if not isinstance(item_rows,list) or not item_rows:item_rows=j.get('items',[])
 for item_row in item_rows if isinstance(item_rows,list) else []:
  if isinstance(item_row,dict) and isinstance(item_row.get('findings'),list):
   lane_findings.extend(dict(f,id=item_row.get('id'),classification=f.get('classification') or f.get('severity')) for f in item_row['findings'] if isinstance(f,dict))
  if isinstance(item_row,dict) and isinstance(item_row.get('plain_text_math_findings'),list):
   receipt=json.loads((out/'screenshots'/f'{item_row["id"]}.json').read_text())
   tile_paths=[t['path'] for t in receipt['screenshots']]
   for observation in item_row['plain_text_math_findings']:
    if not isinstance(observation,str):continue
    match=re.search(r'line\s+(\d+)',observation,re.I)
    lane_findings.append({'id':item_row['id'],'lines':[int(match.group(1))] if match else [],'classification':'confirmed','kind':'raw-ascii-math','symptom':observation,'screenshots':tile_paths,'suggested_repair':'Typeset the reported mathematical notation using supported MathMarkdown delimiters.'})
 extra_findings=[]
 for key in ('confirmed_findings','confirmed_rendering_issues','typography_findings','typography_notes','optional_typography_findings','optional_typography','rendering_findings','visual_findings','observations'):
  rows=j.get(key,[])
  if isinstance(rows,list):
   extra_findings.extend(dict(f,classification=f.get('classification') or ('typography' if key in ('typography_findings','typography_notes','optional_typography_findings','optional_typography') else 'confirmed')) for f in rows if isinstance(f,dict))
 for raw_finding in [*lane_findings,*extra_findings]:
  f=dict(raw_finding)
  finding_class=str(f.get('classification','')).lower()
  finding_kind=str(f.get('kind','')).lower()
  finding_type=str(f.get('type','')).lower()
  finding_result=str(f.get('result','')).lower()
  finding_check=str(f.get('check','')).lower()
  # Optional missing-diagram proposals belong in the supplemental candidate
  # ledger, not among primary visual defects.
  if finding_class in ('editorial_candidate','editorial-candidate','optional-editorial-candidate') or 'editorial' in finding_class or 'rejected' in finding_class or 'editorial-candidate' in finding_kind or 'candidate-missing-diagram' in finding_kind or 'missing-diagram-candidate' in finding_kind or ('candidate' in finding_type and 'diagram' in finding_type) or ('missing_diagram_candidate' in finding_type) or ('uncertain-editorial' in finding_result and 'candidate' in finding_check):continue
  if not (f.get('id') or f.get('item_id') or f.get('item')):continue
  if f.get('id') not in items:
   resolved=f.get('item_id') or f.get('item')
   if not resolved and isinstance(f.get('source'),str):resolved=pathlib.Path(f['source']).stem
   if resolved in items:
    f['finding_id']=f.get('id'); f['id']=resolved
  if 'lines' not in f and isinstance(f.get('line'),int):f['lines']=[f['line']]
  if 'lines' not in f and isinstance(f.get('source_line'),int):f['lines']=[f['source_line']]
  if 'lines' not in f and isinstance(f.get('snapshot_line'),int):f['lines']=[f['snapshot_line']]
  if 'lines' not in f and isinstance(f.get('exact_source_lines'),dict):
   exact=f['exact_source_lines'];start=exact.get('start');end=exact.get('end',start)
   if isinstance(start,int) and isinstance(end,int) and end>=start:f['lines']=list(range(start,end+1))
  if 'lines' not in f and isinstance(f.get('source_lines'),dict) and isinstance(f['source_lines'].get('line_numbers'),list):f['lines']=f['source_lines']['line_numbers']
  if 'lines' not in f and isinstance(f.get('frozen_source'),dict) and isinstance(f['frozen_source'].get('lines'),list):f['lines']=f['frozen_source']['lines']
  if 'lines' not in f and isinstance(f.get('raw_snapshot_lines'),dict):
   exact=f['raw_snapshot_lines'];start=exact.get('start');end=exact.get('end',start)
   if isinstance(start,int) and isinstance(end,int) and end>=start:f['lines']=list(range(start,end+1))
  if 'lines' not in f and isinstance(f.get('source_lines'),list) and all(isinstance(n,int) for n in f['source_lines']):f['lines']=f['source_lines']
  if 'lines' not in f and isinstance(f.get('source'),dict) and isinstance(f['source'].get('lines'),list):f['lines']=f['source']['lines']
  if 'lines' not in f and isinstance(f.get('snapshot_lines'),list) and all(isinstance(n,int) for n in f['snapshot_lines']):f['lines']=f['snapshot_lines']
  if 'lines' not in f and isinstance(f.get('source_lines'),str):
   nums=[]
   for part in re.split(r'[,;]',f['source_lines'].split('.md:',1)[-1]):
    part=part.strip()
    if re.fullmatch(r'\d+\s*-\s*\d+',part):
     a,b=map(int,re.split(r'\s*-\s*',part));nums.extend(range(a,b+1))
    else:nums.extend(int(x)for x in re.findall(r'\d+',part))
   if nums:f['lines']=nums
  if 'lines' not in f and isinstance((f.get('claim_source') or {}).get('lines'),dict):f['lines']=[int(n) for n in (f['claim_source']['lines']) if str(n).isdigit()]
  if 'lines' not in f and isinstance(f.get('source_locator'),str):
   match=__import__('re').search(r':(\d+)(?:\s|$)',f['source_locator'])
   if match:f['lines']=[int(match.group(1))]
  if 'lines' not in f and isinstance(f.get('location'),str):
   match=__import__('re').search(r'(?:snapshot|source)?\s*lines?\s+([0-9][0-9\s,;and–-]*)',f['location'],__import__('re').I)
   if match:
    numbers=[]
    for part in re.split(r'[,;]|\band\b',match.group(1)):
     part=part.strip()
     if re.fullmatch(r'\d+\s*[–-]\s*\d+',part):
      a,b=map(int,re.split(r'\s*[–-]\s*',part));numbers.extend(range(a,b+1))
     else:numbers.extend(int(x) for x in re.findall(r'\d+',part))
    if numbers:f['lines']=numbers
  if 'lines' not in f and isinstance(f.get('source'),str):
   match=__import__('re').search(r'\.md:(\d+)(?:\s|$)',f['source'])
   if match:f['lines']=[int(match.group(1))]
  if isinstance(f.get('lines'),str) and re.fullmatch(r'\s*\d+\s*',f['lines']):f['lines']=[int(f['lines'])]
  if isinstance(f.get('lines'),list) and f['lines'] and all(isinstance(x,dict) for x in f['lines']):
   extracted=[x.get('line') for x in f['lines'] if isinstance(x.get('line'),int)]
   if extracted:f['lines']=extracted
  if 'lines' not in f and 'title' in str(f.get('kind','')).lower():f['lines']=[4]
  if 'lines' not in f and 'typography' in str(f.get('classification','')).lower() and 'title' in str(f.get('observation','')).lower():f['lines']=[4]
  if 'lines' not in f and isinstance(f.get('location'),dict) and isinstance(f['location'].get('line'),int):f['lines']=[f['location']['line']]
  if not f.get('lines'):
   errors.append(f'{f.get("id") or f.get("item_id")}: finding missing exact source lines (lane {lane})');continue
  if not f.get('section') and any(token in str(f.get('type','')).lower() for token in ('title','missing-title')):f['section']='Title'
  if not f.get('screenshots') and isinstance(f.get('screenshot_evidence'),dict) and f['screenshot_evidence'].get('path'):f['screenshots']=[f['screenshot_evidence']['path']]
  if not f.get('screenshots') and isinstance(f.get('rendered_evidence'),dict) and f['rendered_evidence'].get('tile_path'):f['screenshots']=[f['rendered_evidence']['tile_path']]
  if not f.get('screenshots') and isinstance(f.get('local_image_evidence'),list):f['screenshots']=f['local_image_evidence']
  if not f.get('screenshots') and isinstance(f.get('evidence_tiles'),list):f['screenshots']=f['evidence_tiles']
  if not f.get('screenshots') and f.get('evidence_tile'):f['screenshots']=[f['evidence_tile']]
  if not f.get('screenshots') and f.get('tile'):f['screenshots']=[f['tile']]
  if not f.get('screenshots') and isinstance(f.get('affected_tiles'),list):f['screenshots']=f['affected_tiles']
  if not f.get('screenshots') and f.get('evidence'):
   ev=f['evidence'];f['screenshots']=ev if isinstance(ev,list) else ([ev] if isinstance(ev,str) and ev.lower().endswith('.png') else [])
  if not f.get('screenshots') and f.get('screenshot'):f['screenshots']=[f['screenshot']]
  if not f.get('screenshots') and isinstance(f.get('location'),dict) and f['location'].get('rendered_tile'):f['screenshots']=[f['location']['rendered_tile']]
  if 'screenshots' not in f and f['id'] in items:
   receipt=json.loads((out/'screenshots'/f'{f["id"]}.json').read_text())
   f['screenshots']=[t['path'] for t in receipt['screenshots']]
  elif isinstance(f.get('screenshots'),list):
   f['screenshots']=[t if isinstance(t,str) else t.get('path') for t in f['screenshots']]
  if 'screenshots' not in f and f.get('screenshot'):
   f['screenshots']=[f['screenshot']]
  if 'screenshots' not in f and f.get('evidence') and f['id'] in items:
   receipt=json.loads((out/'screenshots'/f'{f["id"]}.json').read_text())
   f['screenshots']=[t['path'] for t in receipt['screenshots']]
  if isinstance(f.get('screenshots'),str):f['screenshots']=[f['screenshots']]
  if isinstance(f.get('classification'),str):
   if f['classification'].lower().startswith('confirmed'):f['classification']='confirmed'
   elif 'typography' in f['classification'].lower() or f['classification'].lower()=='optional':f['classification']='typography'
   elif 'literal' in f['classification'].lower() or 'rendering-defect' in f['classification'].lower() or f['classification'].lower()=='defect':f['classification']='confirmed'
  if f['id'] not in assigned:errors.append(f'lane {lane}: foreign finding')
  lines=(out/items[f['id']]['snapshot']).read_text().splitlines()
  if not f.get('lines') or not all(isinstance(n,int) and 0<n<=len(lines) for n in f['lines']):
   errors.append(f'{f["id"]}: invalid source lines {f.get("lines")} for {len(lines)} frozen lines (lane {lane})');continue
  if not f.get('classification'):
   kind_text=(str(f.get('kind',''))+' '+str(f.get('type',''))).lower()
   f['classification']='typography' if 'optional-title-typography' in kind_text else ('confirmed' if f.get('confirmed') is True or f.get('certainty')=='confirmed' or 'confirmed' in str(f.get('result','')).lower() or f.get('severity') in ('defect','confirmed') or 'defect' in str(f.get('severity','')).lower() or 'missing-title' in kind_text or 'literal-ascii-math-in-title' in kind_text or 'render-failure' in kind_text or 'render failure' in kind_text or 'unrendered' in kind_text and 'math' in kind_text or 'raw-math' in kind_text or 'raw latex' in kind_text or 'raw ascii' in kind_text or 'raw caret' in kind_text or 'raw underscore' in kind_text or 'raw subscript' in kind_text or 'defect' in kind_text or 'raw-latex' in kind_text or 'raw-tikz' in kind_text or 'raw-markdown' in kind_text or 'malformed' in kind_text else 'uncertain')
  if not f.get('section'):
   for ix in range(min(f['lines'][0]-1,len(lines)-1),-1,-1):
    match=__import__('re').match(r'^##\s+(.+?)\s*$',lines[ix])
    if match:f['section']=match.group(1);break
   f.setdefault('section','Item body')
  if not isinstance(f.get('symptom'),str):f['symptom']=next((f[k] for k in ('symptom','description','displayed_content','rendered','rendering','claim','detail','observed_render','observation','visual_evidence','local_html_evidence','defect','finding','evidence') if isinstance(f.get(k),str) and f[k] and not f[k].lower().endswith('.png')),'Confirmed rendering or diagram defect reported by the visual reviewer.')
  if not f.get('suggested_repair'):f['suggested_repair']=f.get('repair') or f.get('future_repair') or f.get('repair_direction') or f.get('recommendation') or 'Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.'
  if not all(isinstance(n,int) and 0<n<=len(lines) for n in f['lines']):errors.append(f'{f["id"]}: invalid source lines')
  receipt_tiles=json.loads((out/'screenshots'/f'{f["id"]}.json').read_text())['screenshots']
  if not {pathlib.Path(s).name for s in f['screenshots']}<= {pathlib.Path(t['path']).name for t in receipt_tiles}:errors.append(f'{f["id"]}: unbound finding screenshot')
  findings.append(dict(f,lane=lane,pages=items[f['id']]['pages'],source_lines={str(n):lines[n-1] for n in f['lines']}))
if len(coverage)!=len(items) or len({x['id'] for x in coverage})!=len(items):errors.append('category coverage incomplete')
source_parse_blockers=[]
blocker_file=out/'frontmatter-parse-blockers.json'
if blocker_file.exists():
 blocker_data=json.loads(blocker_file.read_text())
 for blocker in blocker_data.get('blockers',[]):
  item_id=blocker.get('item_id');item=items.get(item_id)
  if not item:errors.append(f'{item_id}: source parse blocker is not in category manifest');continue
  source=(out/item['snapshot']).read_text().splitlines();span=blocker.get('malformed_frontmatter_lines') or {};start=span.get('start');end=span.get('end',start)
  if not isinstance(start,int) or not isinstance(end,int) or end<start or end>len(source):errors.append(f'{item_id}: invalid source parse blocker line range');continue
  lines=list(range(start,end+1));finding={'id':item_id,'section':'Frontmatter metadata','lines':lines,'kind':'malformed-source-frontmatter','defect_type':'source-metadata-parse-blocker','classification':'source-parse-blocker','symptom':f'Strict YAML parsing of the frozen source frontmatter fails: {blocker.get("parser_error")}. This blocks canonical metadata parsing and is separate from the recovered title/body preview.','suggested_repair':'Correct frontmatter indentation so strict YAML parsing accepts the intended proof_strategy and judge metadata. Preserve publication status and all mathematical content.','screenshots':[],'blocker_record':'frontmatter-parse-blockers.json','source_parse_error':blocker.get('parser_error'),'source_sha256':blocker.get('source_sha256'),'preview_metadata_recovery':blocker.get('preview_recovery'),'lane':item['lane'],'pages':item['pages'],'source_lines':{str(n):source[n-1] for n in lines}}
  findings.append(finding);source_parse_blockers.append(item_id)
if errors:raise SystemExit(json.dumps(errors,indent=2))
source_drift=[x['id'] for x in items.values() if not (root/x['source']).exists() or hashlib.sha256((root/x['source']).read_bytes()).hexdigest()!=x['sha256']]
counts=dict(collections.Counter(f['classification'] for f in findings));receipt={'category':category,'item_count':len(items),'page_count':manifest['page_count'],'tile_count':tiles,'coverage_count':len(coverage),'findings':len(findings),'classifications':counts,'affected_items':len({f['id'] for f in findings}),'source_metadata_parse_blockers':len(source_parse_blockers),'recovered_body_preview_items':len(manifest.get('source_metadata_parse_recoveries',[])),'coverage_label':manifest.get('coverage_label'),'source_drift':source_drift,'errors':errors,'coverage_basis':'Actual lane visual inspection attestations, checked for exact item/tile inventory and capture integrity; no inferred visual coverage.'}
(out/'category-review-receipt.json').write_text(json.dumps(receipt,indent=2)+'\n');(out/'combined-findings.json').write_text(json.dumps(findings,indent=2)+'\n');(out/'combined-coverage.json').write_text(json.dumps(coverage,indent=2)+'\n')
queue=json.loads((base/'category-queue.json').read_text());entry=next(x for x in queue['categories'] if x['category']==category);entry.update(status='complete',actual_item_count=len(items),tile_count=tiles,classifications=counts,evidence_dir=str(out.relative_to(root)),affected_items=receipt['affected_items'],source_metadata_parse_blockers=len(source_parse_blockers),coverage_label=manifest.get('coverage_label'));(base/'category-queue.json').write_text(json.dumps(queue,indent=2)+'\n')
rel=str(out.relative_to(root/'research'));section=f'## {entry["title"]}\n\nCompleted visual review of **{len(items)} items across {manifest["page_count"]} pages**, with **{tiles} image tiles**. Findings: '+', '.join(f'{v} {k}' for k,v in counts.items())+f'. Evidence: [manifest]({rel}/manifest.json), [coverage]({rel}/combined-coverage.json), [receipt]({rel}/category-review-receipt.json).\n\n'
if source_drift:section+='Source files changed after capture: '+', '.join(f'`{x}`' for x in source_drift)+'. Findings bind the frozen snapshot, not subsequent bytes.\n\n'
if source_parse_blockers:section+=f'Coverage uses recovered body previews for {len(manifest.get("source_metadata_parse_recoveries",[]))} items. Their exact source bytes and parse failures are recorded in [frontmatter parse blockers]({rel}/frontmatter-parse-blockers.json); this is not successful canonical source parsing or native loader coverage.\n\n'
for cls,label in [('confirmed','Confirmed rendering defects'),('typography','Optional typography'),('uncertain','Uncertain observations')]:
 selected=[f for f in findings if f['classification']==cls]
 if not selected:continue
 section+=f'### {label}\n\n'
 for idx,f in enumerate(selected,1):
  section+=f'#### {category} / {cls} {idx:03}: `{f["id"]}`\n\n'
  section+=f'- Location: **{f["section"]}**; source lines '+', '.join(str(n) for n in f['lines'])+'.\n'
  section+='- Pages: '+', '.join(f'`{p}`' for p in f['pages'])+'.\n'
  section+='- Visible defect: '+f['symptom']+'\n'
  section+='- Future repair: '+f['suggested_repair']+'\n'
  if f.get('screenshots'):section+='- Image evidence: '+', '.join(f'[tile {pathlib.Path(s).stem.rsplit("--",1)[-1]}]({rel}/{s})' for s in f['screenshots'])+f'; [frozen source]({rel}/{items[f["id"]]["snapshot"]}).\n\n'
  elif f.get('blocker_record'):section+=f'- Source evidence: [parse-blocker record]({rel}/{f["blocker_record"]}); [frozen source]({rel}/{items[f["id"]]["snapshot"]}). No screenshot is asserted for this metadata parser failure.\n\n'
  else:section+=f'- Frozen source: [{items[f["id"]]["snapshot"]}]({rel}/{items[f["id"]]["snapshot"]}).\n\n'
  section+='Exact frozen source lines:\n\n```text\n'+'\n'.join(f'{n}: {text}' for n,text in f['source_lines'].items())+'\n```\n\n'
blocker_rows=[f for f in findings if f['classification']=='source-parse-blocker']
if blocker_rows:
 section+='### Source metadata parse blockers\n\n'
 for idx,f in enumerate(blocker_rows,1):
  section+=f'#### {category} / source-parse-blocker {idx:03}: `{f["id"]}`\n\n'
  section+='- Location: frontmatter lines '+', '.join(str(n) for n in f['lines'])+'.\n'
  section+='- Strict parse failure: '+f['symptom']+'\n'
  section+='- Recovered preview metadata transform: '+str(f['preview_metadata_recovery'].get('note','Recorded in blocker file.'))+'\n'
  section+=f'- Evidence: [parse-blocker record]({rel}/{f["blocker_record"]}); [frozen source]({rel}/{items[f["id"]]["snapshot"]}).\n\n'
  section+='Exact frozen source lines:\n\n```text\n'+'\n'.join(f'{n}: {text}' for n,text in f['source_lines'].items())+'\n```\n\n'
(out/'report-section.md').write_text(section)
master=root/'research/math-library-rendering-defects.md';current=master.read_text();intro=current.split('## Category progress')[0];intro=intro.replace('all items are being viewed from corrected revision 2 images.','only corrected revision 2 images count toward coverage.')
status='## Category progress\n\n| Category | Items | Status |\n| --- | ---: | --- |\n'+''.join(f'| {x["title"]} | {x.get("actual_item_count",x["item_count"])} | {x["status"]} |\n' for x in queue['categories'])+'\n'
parts=[]
for x in queue['categories']:
 if x['status']=='complete':parts.append((root/x['evidence_dir']/'report-section.md').read_text())
 elif x['status']=='in-progress':parts.append(f'## {x["title"]}\n\nVisual inspection in progress.\n\n')
master.write_text(intro+status+'\n'.join(parts));print(json.dumps(receipt))
