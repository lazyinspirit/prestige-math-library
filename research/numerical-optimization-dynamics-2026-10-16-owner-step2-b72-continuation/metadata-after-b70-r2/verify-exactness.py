from pathlib import Path
import json,re,yaml,hashlib,datetime
B=Path(__file__).resolve().parent;plan=json.loads((B/'plan.json').read_text());errors=[];contracts=[];manifests=[];boundaries=[]
def section(s,n):
 m=re.search(r'^## '+re.escape(n)+r'\s*\n([\s\S]*?)(?=^## |\Z)',s,re.M);return m[1].strip() if m else None

def actual(s):
 body=next((section(s,n) for n in ['Proof','Verification','Counterexample'] if section(s,n) is not None),'');out=[]
 for m in re.finditer(r'^(\d+\.\d+)\s+([\s\S]*?)(?=^\d+\.\d+\s|\Z)',body,re.M):
  p=m[2].strip();end=re.search(r'\[([^\[\]]+)\]\s*∎?\s*$',p);out.append({'step':m[1],'full_actual_paragraph':p,'claim':p[:end.start()].strip() if end else None,'tags':[x.strip() for x in end[1].split(',')] if end else None})
 return out
for target in plan['targets']:
 p=Path(target['path']);before=Path(target['before']);proposed=Path(target['proposed']);
 if p.read_bytes()!=before.read_bytes():errors.append('stale target '+str(p))
 if hashlib.sha256(proposed.read_bytes()).hexdigest()!=target['proposed_sha256']:errors.append('changed payload '+str(p))
 d=json.loads(proposed.read_text())
 if str(p).endswith('.proof-contracts.json'):
  for id,c in d['contracts'].items():
   src=Path('items/'+id+'.md').read_text();steps=actual(src);rows=c.get('derivations',[])+c.get('routine_steps',[]);by={x['step']:x for x in rows};ok=len(rows)==len(by)==len(steps) and set(by)=={x['step'] for x in steps};proof=[]
   for x in steps:
    row=by.get(x['step']);same=bool(row and row['claim']==x['claim'] and row['inputs']==x['tags']);ok=ok and same;proof.append({**x,'proposed_metadata_row':row,'complete_paragraph_claim_and_tag_list_literal_equal':same,'carrier':'routine_steps' if row in c.get('routine_steps',[]) else 'derivations'})
   citations=[]
   for cit in c['citations']:
    full=section(Path('items/'+cit['source']+'.md').read_text(),cit['source_section']);uses=[x['step'] for x in steps if cit['fact'] in (x['tags'] or [])];same=full==cit['quote'] and uses==cit['uses'];ok=ok and same;citations.append({**cit,'full_actual_supplier_section':full,'actual_tag_uses':uses,'full_section_and_uses_literal_equal':same})
   if not ok:errors.append('nonliteral proof/citation '+id)
   contracts.append({'file':str(p),'item':id,'exact':ok,'complete_actual_proof_paragraphs_and_tags':proof,'full_supplier_sections':citations})
   valid={x['step'] for x in steps}
   for row in c.get('boundaries',[]):
    text=row.get('evidence') or row.get('reason') or '';refs=[]
    for m in re.finditer(r'\b[Ss]teps?\s+(\d+\.\d+)(?:[–-](\d+\.\d+))?',text):refs.extend([m[1]]+([m[2]] if m[2] else []))
    bad=[x for x in refs if x not in valid]
    if bad:boundaries.append({'item':id,'case':row['case'],'text':text,'nonexistent_step_references':bad,'scope':'Unchanged boundary prose; not silently rewritten as a source proof or an acceptance.'})
 elif str(p).endswith('.pages.json'):
  for page in d:
   carrier=Path('library')/page['category']/(page['id']+'.md');h=yaml.safe_load(re.split(r'^---\s*$',carrier.read_text(),flags=re.M)[1]);ids=h.get('items' if page['kind']=='A' else 'examples',[]);ok=[x['id'] for x in page['items']]==ids;rows=[]
   for r in page['items']:
    front=yaml.safe_load(re.split(r'^---\s*$',Path('items/'+r['id']+'.md').read_text(),flags=re.M)[1]);same=r['deps']==front.get('deps',[]) and r['kind']==front['kind'] and r['title']==front['title'];ok=ok and same;rows.append({'item':r['id'],'actual_source_deps':front.get('deps',[]),'proposed_manifest_deps':r['deps'],'title_kind_deps_equal':same})
   if not ok:errors.append('manifest '+page['id'])
   manifests.append({'manifest':str(p),'page':page['id'],'full_actual_item_ids':ids,'full_proposed_item_ids':[x['id'] for x in page['items']],'exact':ok,'rows':rows})
for g in plan['raw_guards']:
 if Path(g['path']).read_bytes()!=Path(g['raw']).read_bytes():errors.append('stale source '+g['path'])
# Literal source projection only. Nonliteral owner projections are preserved from the fully archived r2 payload.
nonliteral={'preserved_from_r2':'b70 metadata-proposal-r3 applied before payload','new_nonliteral_operations':json.loads((B/'nonliteral-projections.json').read_text()),'routine_classification':'Existing proof-vs-routine classification and existing row ids preserved. Actual current claim and input tags are transcribed without adding metadata self references.','preserved_unaffected_fields':'Existing risk/reviewer/native-history fields retained. Every changed boundary/source-coverage field or removal of nonexistent proof-phase projection is enumerated in new_nonliteral_operations for root review.','not_performed':'No mathematical source review, source mutation, external reading/fetch, native acceptance, hashes or levels.'}
summary={'status':'READONLY_FULL_LITERAL_EXACTNESS','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'targets':len(plan['targets']),'raw_source_guards':len(plan['raw_guards']),'complete_contract_rows':len(contracts),'all_contract_rows_exact':all(x['exact'] for x in contracts),'all_manifest_rows_exact':all(x['exact'] for x in manifests),'errors':errors,'unchanged_boundary_reference_differences':boundaries,'metadata_applied':False}
(B/'full-exactness.json').write_text(json.dumps({'summary':summary,'contracts':contracts,'manifests':manifests},ensure_ascii=False,indent=2)+'\n');(B/'exactness-summary.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2)+'\n');(B/'nonliteral-operations.json').write_text(json.dumps(nonliteral,ensure_ascii=False,indent=2)+'\n');print(json.dumps(summary,ensure_ascii=False,indent=2))
raise SystemExit(1 if errors else 0)
