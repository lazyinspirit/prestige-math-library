import pathlib,json,hashlib,subprocess,datetime
root=pathlib.Path.cwd();run='advanced-qft-supersymmetry-build-2026-10-23';state=root/'.physics-autopilot'/run;rp=state/'owner-gate-request.json';req=json.loads(rp.read_text());snap=req['snapshot'];assert snap['stages']in [['1-append-drift-2'],['1-append-apply-2']] and snap['scopeKind']=='plan' and not req.get('consumedAt');assert len(snap['items'])==21 and len(snap['pages'])==14
prep=root/'research'/f'{run}-owner-resolution/private-preparation';(prep/('request-'+req['attempt']+'.json')).write_text(json.dumps(req,indent=2)+'\n');start=datetime.datetime.now(datetime.timezone.utc).isoformat();h=lambda p:hashlib.sha256(pathlib.Path(p).read_bytes()).hexdigest()
for x in snap['inputs']:
 p=pathlib.Path(x['path']);assert(h(p)if p.exists()else None)==x['sha256'],('stale request input',str(p))
assert json.loads(rp.read_text())==req
plan=json.loads((root/'research/plan-spec.json').read_text());wanted=set(json.loads((root/f'research/{run}-frontier-append-2/new-pages.json').read_text()));pages=[p for p in plan['pages']if p['id']in wanted];assert len(pages)==14;by={p['id']:p for p in pages};items={i['id']:(p,i)for p in pages for i in p['items']};assert set(items)=={i['id']for i in snap['items']};ordered={i['id']:n for n,i in enumerate(snap['items'])}
for p in pages:
 assert p['library']=='mathematics'and p['category']=='quantum-field-theory-mathematics'and by[p['companion']]['companion']==p['id']and by[p['companion']]['kind']!=p['kind'];assert p['requires']and len(p['requires'])==len(set(p['requires']))and isinstance(p['order'],(int,float))
 for i in p['items']:
  assert i['domain']==i['library']=='mathematics'and i['statement'].strip()and i['title'].strip();assert i['reference'].startswith('items/'+i['id']+'.md');assert i['id'].split('-')[0]=={'definition':'def','lemma':'lem','theorem':'thm','example':'ex'}[i['kind']];assert isinstance(i['deps'],list)and set(i['dependency_roles'])==set(i['deps'])and all(x=='mathematical-premise'for x in i['dependency_roles'].values());assert not(root/'items'/(i['id']+'.md')).exists()and i['provenance']['proof']in ['not-supplied','not-applicable']
  for dep in i['deps']:
   if dep in items:assert ordered[dep]<ordered[i['id']]
manifestPaths=[]
for n in range(7):
 p=prep/(req['attempt']+f'-batch-{n+63}.pages.json');p.write_text(json.dumps(pages[2*n:2*n+2]));manifestPaths.append(str(p))
commands=[['node','tools/physics-support/validate-plan.mjs','research/plan-spec.json','--pages-file',f'research/{run}-frontier-append-2/new-pages.json'],['node','tools/physics-support/content-policy.mjs',*manifestPaths,'--manifest-only','--json']];checks=[]
for n,c in enumerate(commands):
 r=subprocess.run(c,cwd=root,capture_output=True,text=True);p=prep/(req['attempt']+f'-check-{n}.log');p.write_text(r.stdout+r.stderr);assert r.returncode==0,(str(p),r.stdout[-1200:],r.stderr);checks.append({'argv':c,'log':str(p.relative_to(root)),'sha256':h(p)})
for x in snap['inputs']:
 p=pathlib.Path(x['path']);assert(h(p)if p.exists()else None)==x['sha256'],('changed input',str(p))
assert json.loads(rp.read_text())==req;s=json.loads((state/'state.json').read_text());assert not any(not x.get('endedAt')for x in s['dispatches'].values())
ev='Actual post-request fourteen-page/twenty-one-declaration formatting, identity, classification, ownership, reciprocal placement and dependency-order pass. All twenty-one carriers are absent and honestly not-supplied. Actual scoped validate-plan and seven nonempty manifest-only policy checks passed; complete current request inputs rehashed. No empty render pass or scientific acceptance claimed. Full native content/source/gate battery remains required. '+json.dumps(checks,separators=(',',':'));check={'verdict':'pass','evidence':ev};receipt={'version':2,'run':run,'recertificationScope':'formatting-metadata-only','attempt':req['attempt'],'snapshotSha256':snap['sha256'],'reviewer':'/root','writersDrained':True,'writerScopes':[],'reviewStartedAt':start,'reviewedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'items':[{**i,'verdict':'format-metadata-pass','formatting':check,'metadata':check}for i in snap['items']],'planChecks':{'formatting':check,'metadata':check}};tmp=state/'owner-gate-receipt.json.tmp';tmp.write_text(json.dumps(receipt,indent=2)+'\n');tmp.replace(state/'owner-gate-receipt.json');print('Recorded real current formatting/metadata receipt',req['attempt'])
