from pathlib import Path
import json,hashlib,datetime,copy,re
run='physics-cm-qm-gr-79-2026-10-11';root=Path('.');out=Path('research')/(run+'-resumed-orchestration/gr-recovery');base=Path('research')/(run+'-resumed-orchestration/metadata/final-scalar3-deltas/current-deltas');idx=json.loads((base/'index.json').read_text());backup=out/'before-scalar3-sidecars';backup.mkdir(exist_ok=True)
def h(p):return hashlib.sha256(Path(p).read_bytes()).hexdigest()
for g in idx['input_guards']:
 assert h(g['path'])==g['raw_sha256'],('changed source/sidecar guard',g['path'])
proposals=[json.loads(Path(x['proposal']).read_text()) for x in idx['stable_proposals']];consumers=[json.loads(Path(x['proposal']).read_text()) for x in idx['current_manifest_owned_old_quote_consumer_proposals']];docs={};changes=[]
def doc(p):
 if p not in docs:
  path=Path(p);q=backup/path.name
  if not q.exists():q.write_bytes(path.read_bytes())
  docs[p]=json.loads(path.read_text())
 return docs[p]
def patch(row,fields):
 for k,v in fields.items():
  assert row.get(k)==v.get('before'),('changed selected field',k)
  if v.get('after') is None and v.get('delete',False):row.pop(k,None)
  else:row[k]=copy.deepcopy(v['after'])
def one(rows,selector):
 found=[r for r in rows if all(r.get(k)==v for k,v in selector.items())];assert len(found)==1,('nonunique selector',selector,len(found));return found[0]
for p in proposals:
 m=p['manifest'];page=one(doc(m['path']),{'id':m['selector']['page']});row=one(page['items'],{'id':p['id']});assert row==m['before'];patch(row,m['field_patches']);changes.append({'id':p['id'],'manifest_fields':list(m['field_patches'])})
 c=p['contract'];cp=c.get('patch')
 if cp:
  row=doc(c['path'])['contracts'][p['id']];assert row==cp['before'];patch(row,cp['field_patches'])
  mapped={r['step'] for r in row['derivations']};row['routine_steps']=[r for r in row.get('routine_steps',[]) if r.get('step') not in mapped]
 for o in p.get('coverage',{}).get('operations',[]):
  d=doc(p['coverage']['path']);sel=o['selector'];pg=one(d['pages'],{'page':sel['page']});source=one(pg['sources'],{'url':sel['source_url'],'title':sel['source_title']});row=one(source['contents'],{'name':sel['entry_name'],'item':sel['item']});assert row==o['before'];patch(row,o['field_patches'])
 for o in p.get('crossdeps',{}).get('operations',[]):
  rows=doc(p['crossdeps']['path']);a=o['action']
  if a=='append-absent-exact-edge':assert not any(all(r.get(k)==v for k,v in o['selector'].items()) for r in rows);rows.append(copy.deepcopy(o['after']))
  else:
   row=one(rows,o['selector']);assert row==o['before']
   if a=='remove-exact-row':rows.remove(row)
   else:assert a=='replace-exact-row-fields';patch(row,o['field_patches'])
for p in consumers:
 c=p['contract'];print('consumer patch',p['id'],list(c))
 # consumer-only proposals supply exact citation-entry operations.
 for o in c.get('citation_patches',[]):
  row=doc(c['path'])['contracts'][p['id']];citation=row['citations'][o['selector']['old_index']];assert citation==o['before'];patch(citation,o['field_patches'])
 delta=c.get('current_derivation_field_delta')
 if delta:
  row=doc(c['path'])['contracts'][p['id']];patch(row,delta)
for path,d in docs.items():Path(path).write_text(json.dumps(d,indent=2,ensure_ascii=False)+'\n')
report={'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'cycle':1,'cap':2,'scope':'Guarded current4 scalar/compactness exact sidecar synchronization after owning local proof reconstruction; crossdep statuses remain pending, native holds preserved, no gate/audit acceptance','guard_count':len(idx['input_guards']),'changes':changes,'old_quote_consumers':[x['id'] for x in consumers],'files':[{'path':p,'before_raw_sha256':h(backup/Path(p).name),'after_raw_sha256':h(p)} for p in docs]};(out/'scalar3-sidecar-integration.json').write_text(json.dumps(report,indent=2)+'\n');print('Integrated',len(proposals),'item sidecar patches;',len(docs),'files; crossdeps pending; native holds untouched')
