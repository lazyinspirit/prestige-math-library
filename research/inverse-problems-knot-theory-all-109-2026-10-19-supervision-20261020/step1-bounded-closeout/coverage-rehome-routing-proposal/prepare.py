"""Prepare only: root owns guarded application; no source/body/hash/gate work."""
import copy,json
from pathlib import Path
root=Path.cwd();run='inverse-problems-knot-theory-all-109-2026-10-19';out=Path(__file__).resolve().parent
homes={}
for f in (root/'research').glob(run+'-batch-*.pages.json'):
 b=int(f.name.split('-batch-')[1].split('.')[0])
 for p in json.loads(f.read_text()):
  for x in p.get('items',[]):
   i=x if isinstance(x,str) else x['id']
   if i in homes:raise RuntimeError('duplicate original home '+i)
   homes[i]={'batch':b,'page':p['id']}
assert len(homes)==1471
moves=json.loads(Path('/tmp/prestige-page-rehome-proposal.json').read_text())['moves']
for m in moves:assert homes[m['id']]=={'batch':m['to_batch'],'page':m['to_page']}
ids={m['id'] for m in moves};batches=[91,92,94,95,100];before={};docs={};plans=[]
for b in batches:
 rel=f'research/{run}-batch-{b}.coverage.json';text=(root/rel).read_text();before[b]=json.loads(text);docs[b]=json.loads(text)
 (out/'before').mkdir(exist_ok=True);(out/'proposed').mkdir(exist_ok=True)
 (out/'before'/Path(rel).name).write_text(text)
source_routes=[]
for b in [94,95,100]:
 for pi,p in enumerate(before[b]['pages']):
  for si,s in enumerate(p.get('sources',[])):
   selected=[(ci,c) for ci,c in enumerate(s.get('contents',[])) if isinstance(c,dict) and c.get('item') in ids]
   if selected:source_routes.append((b,pi,si,s,selected))
for b,pi,si,s,selected in source_routes:
 grouped={}
 for ci,c in selected:
  h=homes[c['item']];grouped.setdefault((h['batch'],h['page']),[]).append((ci,c))
  old=docs[b]['pages'][pi]['sources'][si]['contents'][ci]
  old.update(disposition='deferred',destination=h['page'],reason=f"The existing scaffold {c['item']} was rehomed to {h['page']} (batch {h['batch']}); this exact harvested heading, {c['name']}, is retained here as a routed historical entry and copied to the actual new owner without changing its source or reading scope.",rehome_previous_disposition=c['disposition'])
  plans.append({'item':c['item'],'name':c['name'],'source_url':s['url'],'from':{'batch':b,'page':before[b]['pages'][pi]['page'],'pointer':f'/pages/{pi}/sources/{si}/contents/{ci}'},'to':h,'original_disposition':c['disposition']})
 for (tb,tp),cs in grouped.items():
  dest=next(p for p in docs[tb]['pages'] if p['page']==tp);same=[x for x in dest['sources'] if x.get('url')==s.get('url')]
  if len(same)>1:raise RuntimeError('ambiguous exact URL destination source')
  provenance={'from_file':f'research/{run}-batch-{b}.coverage.json','from_page':before[b]['pages'][pi]['page'],'from_source_pointer':f'/pages/{pi}/sources/{si}','original_source_treatment':copy.deepcopy(s),'scope':'Existing recorded source treatment, locator and full-text/fetch stamps transferred by identity only. No new source reading, acceptance or proof coverage.'}
  if same:
   ds=same[0];ds.setdefault('rehome_transferred_source_treatments',[]).append(provenance)
   if s.get('locator') and s['locator']!=ds.get('locator'):
    ds.setdefault('rehome_recorded_locator_history',[]).append({'from_batch':b,'locator':s['locator']})
    ds['locator']=ds.get('locator','')+f"; additional already-recorded treatment from batch {b}: "+s['locator']
  else:
   ds=copy.deepcopy(s);ds['contents']=[];ds['items']=[];ds['rehome_transferred_source_treatments']=[provenance];dest['sources'].append(ds)
  for ci,c in cs:
   if not any(x.get('name')==c['name'] and x.get('item')==c['item'] and x.get('disposition')==c['disposition'] for x in ds.get('contents',[]) if isinstance(x,dict)):
    ds.setdefault('contents',[]).append(copy.deepcopy(c))
   if 'items' in ds and c['item'] not in ds['items']:ds['items'].append(c['item'])
references=[]
for b in [94,95,100]:
 for pi,p in enumerate(before[b]['pages']):
  for si,s in enumerate(p.get('sources',[])):
   moved=[i for i in s.get('items',[]) if i in ids]
   if not moved:continue
   old=docs[b]['pages'][pi]['sources'][si];old['items']=[i for i in s['items'] if i not in ids];old['rehome_original_item_associations']=s['items'];old['rehome_item_reference_routes']={i:homes[i] for i in moved}
   for i in moved:
    h=homes[i];dp=next(p for p in docs[h['batch']]['pages'] if p['page']==h['page']);ds=next((x for x in dp['sources'] if x['url']==s['url']),None)
    if ds is not None:
     ds.setdefault('items',[])
     if i not in ds['items']:ds['items'].append(i)
    references.append({'item':i,'source_url':s['url'],'from_batch':b,'to':h,'added_to_existing_destination_source':ds is not None,'scope':'Existing source-level association only; explicit actual-home route preserved, no new source/contents row or reading claim invented.'})
for b,d in docs.items():
 (out/'proposed'/f'{run}-batch-{b}.coverage.json').write_text(json.dumps(d,indent=2)+'\n')
report={'run':run,'scope':'Root-only guarded coverage routing proposal after approved existing-item rehomes; no canonical writes by author','current_manifest_items':len(homes),'coverage_files':batches,'routes':plans,'source_item_references_rehomed':references,'content_rows_transferred':len(plans),'previously_included_unknown_rows_routed':sum(p['original_disposition']=='included' for p in plans),'previously_inline_rows_routed':sum(p['original_disposition']=='inline' for p in plans),'moved_items_without_existing_named_contents':[i for i in ids if i not in {p['item'] for p in plans}],'limits':['No new harvest headings/results or item identities invented.','No new full-text reading or stamp scope claimed; original source records and all fetch/reading stamps preserved verbatim in transfer history.','Exact same-URL sources merged, not counted as extra independent treatments.','Old harvest headings retained as deferred routes naming actual new page; destination copies preserve original included/inline disposition.','Two moves have source item-list references but no named contents rows; no fake rows invented for them.','No hashes, gates, validators, canonical writes or readiness mutations. Root applies separately.']}
(out/'report.json').write_text(json.dumps(report,indent=2)+'\n')
print(json.dumps({k:report[k] for k in ['coverage_files','content_rows_transferred','previously_included_unknown_rows_routed','previously_inline_rows_routed','moved_items_without_existing_named_contents']},indent=2))
