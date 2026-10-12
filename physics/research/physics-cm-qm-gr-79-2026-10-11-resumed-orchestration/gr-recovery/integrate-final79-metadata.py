from pathlib import Path
import json,hashlib,datetime,copy,re
run='physics-cm-qm-gr-79-2026-10-11';root=Path('.');out=Path('research')/(run+'-resumed-orchestration/gr-recovery');base=Path('research')/(run+'-resumed-orchestration/metadata/gr79-prerequisite-home-proposals/final-settled29/final-owner-resolved-current/current-sidecars');idx=json.loads((base/'index.json').read_text());backup=out/'before-final79-metadata';backup.mkdir(exist_ok=True)
def h(p):return hashlib.sha256(Path(p).read_bytes()).hexdigest()
package=base.parent
guards=json.loads((package/'aggregate-rawguards.json').read_text())['guards']+json.loads((package/'delivery-payload-guards.json').read_text())['research_payload_guards']
for g in guards:
 assert h(g['path'])==g['raw_sha256'],('changed source/sidecar guard',g['path'])
proposals=[json.loads(Path(x['proposal']).read_text()) for x in idx['stable_proposals']];consumers=[json.loads(Path(x['proposal']).read_text()) for x in idx.get('current_manifest_owned_old_quote_consumer_proposals',[])];docs={};changes=[]
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
corrections={
 'lem-gr-data-fixing-immersion-is-embedding':'Statement and steps 1.2 and 5.1: if the initial surface is empty, any nonempty development would have a maximal timelike geodesic required to meet that surface, a contradiction. Both developments are therefore empty and embedding and uniqueness are vacuous. For a specified point, step 1.2 supplies an actual crossing seed.',
 'lem-gr-development-quotient-dense-set':'Statement and steps 1.1 and 4.1: if the initial surface is empty, every development and the quotient are empty by the Cauchy geodesic condition; all density claims are vacuous. Otherwise the fixed dense initial subset and each member flow provide the actual seeds, including the zero-translation case.',
 'lem-gr-universal-development':'Statement and steps 1.1, 6.1 and 8.1: the assumed existence of a development makes the coding family nonempty, but does not assert a nonempty quotient. If the initial surface is empty, every member and the quotient are empty by their Cauchy condition; the empty basis, field and embeddings satisfy the conclusions vacuously.'}
for p in proposals:
 cp=p['contract'].get('patch')
 if cp and 'boundaries' in cp['field_patches']:
  for r in cp['field_patches']['boundaries']['after']:
   for k in ['evidence','reason']:
    if k in r:
     r[k]=re.sub(r'^PROPOSED;[^.]*\.\s*','Owning current proof and boundary review, cycle 1/cap 2. ',r[k])
   if r['case']=='empty' and p['id'] in corrections:r['evidence']='Owning current proof and boundary review, cycle 1/cap 2. '+corrections[p['id']]
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
  row=doc(c['path'])['contracts'][p['id']];assert row.get('derivations')==delta['before'];row['derivations']=copy.deepcopy(delta['after'])
levels=json.loads((package/'current-routing-level-requires-proposals.json').read_text())['dependency_level_deltas']
textdocs={}
def textdoc(path):
 if path not in textdocs:
  q=backup/Path(path).name
  if not q.exists():q.write_bytes(Path(path).read_bytes())
  textdocs[path]=Path(path).read_text()
 return textdocs[path]
for l in levels:
 path=l['carrier_guard']['path'];before=l['level_field_delta']['carrier']['before'];after=l['level_field_delta']['carrier']['after'];t=textdoc(path);t,n=re.subn(r'(?m)^dependency_level: '+str(before)+r'$', 'dependency_level: '+str(after),t);assert n==1; textdocs[path]=t
 page=one(doc(l['manifest_guard']['path']),{'id':l['manifest_selector']['page']});row=one(page['items'],{'id':l['id']});assert row['dependency_level']==l['level_field_delta']['manifest']['before'];row['dependency_level']=l['level_field_delta']['manifest']['after']
for r in json.loads((package/'minimal-requires-proposals.json').read_text())['page_proposals']:
 page=one(doc(r['manifest_guard']['path']),{'id':r['page']});assert page['requires']==r['manifest_field_delta']['before'];page['requires']=r['manifest_field_delta']['after']
 path=r['page_guard']['path'];t=textdoc(path);t,n=re.subn(r'(?m)^requires:.*(?:\n[ \t]+[^\n]*)*', 'requires: ['+', '.join(r['page_field_delta']['after'])+']',t,count=1);assert n==1; textdocs[path]=t
for path,t in textdocs.items():Path(path).write_text(t)
for path,d in docs.items():Path(path).write_text(json.dumps(d,indent=2,ensure_ascii=False)+'\n')
report={'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'cycle':1,'cap':2,'scope':'Guarded current4 geometric prerequisites exact sidecar synchronization after owning local proof reconstruction; crossdep statuses remain pending, native holds preserved, no gate/audit acceptance','guard_count':len(guards),'boundary_empty_corrections':corrections,'dependency_level_changes':len(levels),'changes':changes,'old_quote_consumers':[x['id'] for x in consumers],'files':[{'path':p,'before_raw_sha256':h(backup/Path(p).name),'after_raw_sha256':h(p)} for p in docs]};(out/'final79-metadata-integration.json').write_text(json.dumps(report,indent=2)+'\n');print('Integrated',len(proposals),'item sidecar patches;',len(docs),'files; crossdeps pending; native holds untouched')
