from pathlib import Path
import json,re,hashlib,yaml,datetime
R='numerical-optimization-dynamics-2026-10-16';B=Path(__file__).resolve().parent;M=B.parent/'metadata-proposal-r1';plan=json.loads((M/'plan.json').read_text());allreports=[];nonliteral=[];manifestreports=[];legacy=[]
selected={Path(x['path']).stem for x in json.loads((B.parent/'proposal-r1/combined-exact-selection.json').read_text())['files'] if x['path'].startswith('items/')}
def source(id):return Path('items/'+id+'.md').read_text()
def mdsection(s,name):
 m=re.search(r'^## '+re.escape(name)+r'\s*\n([\s\S]*?)(?=^## |\Z)',s,re.M);return m[1].strip() if m else None

def actualproof(s):
 m=re.search(r'^## (?:Proof|Verification|Counterexample)\s*\n([\s\S]*?)(?=^## |\Z)',s,re.M)
 if not m:return []
 result=[]
 for step in re.finditer(r'^(\d+\.\d+)\s+([\s\S]*?)(?=^\d+\.\d+\s|\Z)',m[1],re.M):
  paragraph=step[2].strip();end=re.search(r'\[([^\[\]]+)\]\s*(?:∎)?\s*$',paragraph)
  result.append({'step':step[1],'full_actual_paragraph':paragraph,'actual_claim':paragraph[:end.start()].strip() if end else None,'actual_tag_list':[x.strip() for x in end[1].split(',')] if end else None})
 return result

def diffpaths(a,b,path=()):
 if isinstance(a,dict) and isinstance(b,dict):
  for k in sorted(a.keys()|b.keys()):
   if k not in a:yield path+(k,),None,b[k]
   elif k not in b:yield path+(k,),a[k],None
   else:yield from diffpaths(a[k],b[k],path+(k,))
 elif a!=b:yield path,a,b

for target in plan['targets']:
 p=target['path'];before=json.loads(Path(target['before']).read_text());after=json.loads(Path(target['proposed']).read_text())
 if p.endswith('.proof-contracts.json'):
  for id,c in after['contracts'].items():
   actual=actualproof(source(id));rows={x['step']:x for x in c.get('derivations',[])};checks=[]
   for para in actual:
    row=rows.get(para['step']);checks.append({**para,'proposed_derivation':row,'full_claim_literal_equal':bool(row and row.get('claim')==para['actual_claim']),'complete_input_tags_equal':bool(row and row.get('inputs')==para['actual_tag_list'])})
   fullsteps=set(rows)=={x['step'] for x in actual};cit=[]
   for x in c.get('citations',[]):
    full=mdsection(source(x['source']),x['source_section']);uses=[a['step'] for a in actual if x['fact'] in (a['actual_tag_list'] or [])]
    cit.append({'fact':x['fact'],'source':x['source'],'source_section':x['source_section'],'full_actual_supplier_section':full,'full_proposed_quote':x['quote'],'full_section_literal_equal':full==x['quote'],'actual_tag_uses':uses,'proposed_uses':x.get('uses',[]),'uses_equal':uses==x.get('uses',[])})
   ischanged=id in selected
   row={'contract_file':p,'item':id,'owner_projection_subject':ischanged,'complete_actual_step_set_equal':fullsteps,'proof_paragraphs_and_tags':checks,'supplier_sections':cit,'all_claims_and_tags_literal':fullsteps and all(x['full_claim_literal_equal'] and x['complete_input_tags_equal'] for x in checks),'all_supplier_sections_literal':all(x['full_section_literal_equal'] for x in cit),'all_citation_uses_literal':all(x['uses_equal'] for x in cit)}
   allreports.append(row)
   if not ischanged and not(row['all_claims_and_tags_literal'] and row['all_supplier_sections_literal'] and row['all_citation_uses_literal']):legacy.append({'contract_file':p,'item':id,'scope':'Untouched existing metadata differs literally from current source; this includes preexisting paraphrases and may include other native repair changes. Such literal differences are not automatically mathematical defects. The b58/b70 payload preserves these unaffected fields except its changed-supplier quote mirrors.','full_actual_steps_match':row['all_claims_and_tags_literal'],'full_supplier_quotes_match':row['all_supplier_sections_literal'],'citation_uses_match':row['all_citation_uses_literal']})
  for path,a,b in diffpaths(before,after):
   if any(k in path for k in ['boundaries','risk_review','risk','scope']) or (len(path)>=3 and path[0]=='contracts' and isinstance(b,dict) and 'risk_review' in b):
    nonliteral.append({'target':p,'field_path':list(path),'old':a,'proposed':b,'classification':'Owner-authored boundary/review or new proof-contract structure, not a literal supplier quote. Actual source/proof links and limits are recorded in the metadata payload.'})
 elif p.endswith('.pages.json'):
  for page in after:
   ids=[x['id'] for x in page['items']];carrier=Path('library')/page['category']/(page['id']+'.md');h=yaml.safe_load(carrier.read_text().split('---',2)[1]);expected=h.get('items' if page['kind']=='A' else 'examples',[])
   rows=[]
   for row in page['items']:
    if row['id'] in selected:
     front=yaml.safe_load(source(row['id']).split('---',2)[1]);rows.append({'item':row['id'],'manifest_deps':row.get('deps',[]),'full_actual_source_deps':front.get('deps',[]),'deps_literal_equal':row.get('deps',[])==front.get('deps',[]),'title_literal_equal':row['title']==front['title'],'kind_literal_equal':row['kind']==front['kind'],'dependency_level_present':'dependency_level' in row})
   manifestreports.append({'manifest':p,'page':page['id'],'manifest_full_item_ids':ids,'actual_carrier_full_item_ids':expected,'full_ids_literal_equal':ids==expected,'changed_rows':rows})
 elif p.endswith('.coverage.json'):
  for page in after['pages']:
   for src in page['sources']:
    for content in src['contents']:
     id=content.get('item','')
     if id in ['lem-bracketing-zoom-finite-budget-checked-return','lem-inexact-newton-krylov-finite-budget-checked-return']:
      h=yaml.safe_load(source(id).split('---',2)[1]);nonliteral.append({'target':p,'classification':'Owner-authored honest source-context coverage row; not an external identical-theorem/read/fetch assertion.','item':id,'coverage_row':content,'coverage_source_url':src['url'],'actual_source_provenance':h['provenance'],'actual_source_references':h['sources']['references'],'same_actual_source_url':any(x['url']==src['url'] for x in h['sources']['references'])})
# Every actual proof paragraph and full supplier section is retained in this audit, including unchanged legacy rows.
(B/'full-proof-and-supplier-exactness.json').write_text(json.dumps(allreports,ensure_ascii=False,indent=2)+'\n');(B/'manifest-exactness.json').write_text(json.dumps(manifestreports,ensure_ascii=False,indent=2)+'\n');(B/'nonliteral-metadata-changes.json').write_text(json.dumps(nonliteral,ensure_ascii=False,indent=2)+'\n');(B/'existing-native-projection-differences.json').write_text(json.dumps(legacy,ensure_ascii=False,indent=2)+'\n')
source_stale=[x['path'] for x in plan['raw_guards'] if Path(x['path']).read_bytes()!=Path(x['raw']).read_bytes()];target_stale=[x['path'] for x in plan['targets'] if Path(x['path']).read_bytes()!=Path(x['before']).read_bytes()];ours=[x for x in allreports if x['owner_projection_subject']]
summary={'status':'READONLY_EXACTNESS_REPORT','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'metadata_applied':False,'stale_source_guards':source_stale,'stale_metadata_target_guards':target_stale,'all_proposed_contract_rows':len(allreports),'b58_b70_projection_proof_subjects':len(ours),'projection_mismatches':[{'item':x['item'],'steps':x['all_claims_and_tags_literal'],'quotes':x['all_supplier_sections_literal'],'uses':x['all_citation_uses_literal']} for x in ours if not(x['all_claims_and_tags_literal'] and x['all_supplier_sections_literal'] and x['all_citation_uses_literal'])],'existing_unprojected_native_rows_with_differences':legacy,'all_manifest_item_lists_literal':all(x['full_ids_literal_equal'] for x in manifestreports),'all_changed_manifest_dependencies_literal':all(y['deps_literal_equal'] for x in manifestreports for y in x['changed_rows']),'nonliteral_change_groups':len(nonliteral),'new_level_note':'Both new draft rows deliberately omit dependency_level; root must assign actual levels, no guessed level or recertification included.','reports':['full-proof-and-supplier-exactness.json','manifest-exactness.json','nonliteral-metadata-changes.json','existing-native-projection-differences.json'],'no_new_external_reading':'Coverage additions map the already source-backed local procedures to their locally proved budget consequences, with ai-altered Statement / ai-generated proof and explicit no-identical-external-theorem qualification.'}
(B/'summary.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2)+'\n');print(json.dumps({k:v for k,v in summary.items() if k not in ['existing_unprojected_native_rows_with_differences']},indent=2));print('Legacy differing rows',len(legacy))
