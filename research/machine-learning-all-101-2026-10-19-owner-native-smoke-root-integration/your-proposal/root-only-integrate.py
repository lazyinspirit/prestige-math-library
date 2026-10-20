#!/usr/bin/env python3
"""ROOT ONLY: preflight, explicitly seal reviewed plan, then serialized apply.
No fixture callback, gate, engine, rehash or certification is invoked.
"""
from pathlib import Path
import argparse,json,hashlib,re,copy,subprocess,os,tempfile,datetime,stat
BASE=Path(__file__).resolve().parent;ROOT=BASE.parents[2];RUN='machine-learning-all-101-2026-10-19'
sha=lambda b:hashlib.sha256(b).hexdigest()
def unique_object(pairs):
 out={}
 for k,v in pairs:
  if k in out:raise ValueError('duplicate JSON key '+k)
  out[k]=v
 return out
def parse(raw):return json.loads(raw,object_pairs_hook=unique_object)
def relative(p):
 q=Path(p);assert not q.is_absolute() and '..' not in q.parts,str(p)
 out=ROOT/q;assert out.resolve().is_relative_to(ROOT.resolve()),str(p);return out
def raw(p):return relative(p).read_bytes()
def load(p):return parse(raw(p))
def span(text,keys,start=0):
 dec=json.JSONDecoder();i=start
 while text[i].isspace():i+=1
 assert text[i]=='{','object path expected';i+=1
 while True:
  while text[i].isspace() or text[i]==',':i+=1
  if text[i]=='}':raise KeyError(keys)
  key,n=dec.raw_decode(text[i:]);assert isinstance(key,str);i+=n
  while text[i].isspace():i+=1
  assert text[i]==':';i+=1
  while text[i].isspace():i+=1
  value,n=dec.raw_decode(text[i:]);end=i+n
  if key==keys[0]:return (i,end) if len(keys)==1 else span(text,keys[1:],i)
  i=end

def prepare(plan):
 assert plan['inventory']['fixture_modules']==10 and len(plan['modules'])==10
 assert len(plan['operations'])==144 and sum(len(o['before']) for o in plan['operations'])==169
 assert sum(len(o['after']) for o in plan['operations'])==169
 for p,d in plan['inputs'].items():assert sha(raw(p))==d,'changed staged input '+p
 for g in plan['source_guards']:assert sha(raw(g['target']))==g['sha256'],'changed current source '+g['target']
 for g in plan['legacy_registry_context']:assert sha(raw(g['target']))==g['sha256'],'changed legacy registry family '+g['target']
 ops=[]
 for m in plan['modules']+plan['support_files']:
  candidate=raw(m['candidate']);assert sha(candidate)==m['candidate_sha256'],'candidate revision '+m['candidate']
  target=relative(m['target']);assert not target.exists() and not target.is_symlink(),'create-only target '+m['target'];ops.append((m['target'],None,candidate,0o644))
 byfile={}
 for o in plan['operations']:byfile.setdefault(o['target'],[]).append(o)
 for target,rows in byfile.items():
  before=raw(target);current=parse(before);expected=copy.deepcopy(current);text=before.decode()
  for o in rows:
   id=o['path'][1];assert id in current['scope'],'out of scope '+id
   assert current['contracts'][id]['finite_smoke']==o['before'],'finite_smoke CAS '+id
   assert len(o['before'])==len(o['after'])>0,'dropped obligation '+id
   source=raw(o['source']).decode()
   for entry in o['after']:assert isinstance(entry.get('asserts'),str) and entry['asserts'] in source,'current exact excerpt '+id
   a,z=span(text,o['path']);assert parse(text[a:z])==o['before']
   line=text.rfind('\n',0,a)+1;indent=len(text[line:])-len(text[line:].lstrip(' '));replacement=json.dumps(o['after'],ensure_ascii=False,indent=2).replace('\n','\n'+' '*indent)
   updated=text[:a]+replacement+text[z:];assert updated[:a]==text[:a] and updated[a+len(replacement):]==text[z:];text=updated
   expected['contracts'][id]['finite_smoke']=o['after']
  assert parse(text)==expected,'unrelated field changed '+target
  ops.append((target,before,text.encode(),stat.S_IMODE(relative(target).stat().st_mode)))
 # Enumerate the exact current full-run obligation inventory; no empty or omitted selection.
 count=0;current_rows={}
 for batch in range(1,102):
  d=load(f'research/{RUN}-batch-{batch}.proof-contracts.json')
  for id,c in d['contracts'].items():
   entries=c.get('finite_smoke') or []
   if entries:current_rows[(batch,id)]=entries;count+=len(entries)
 assert count==170,'current obligation count changed'
 owned={(int(o['target'].split('-batch-')[1].split('.')[0]),o['path'][1]) for o in plan['operations']}
 legacy=plan['inventory']['existing_untouched_legacy_obligations'];assert len(legacy)==1
 l=legacy[0];assert current_rows[(l['batch'],l['id'])]==[l['row']]
 assert set(current_rows)-owned=={(l['batch'],l['id'])},'extra/missing current obligation selection'
 assert l['row']['asserts'] in raw(l['source']).decode()
 caspath=plan['registry_cas_file'];assert sha(raw(caspath))==plan['registry_cas_sha256'];cas=load(caspath);before=raw(cas['target']);assert sha(before)==cas['observed_raw_sha256'],'current registry revision';text=before.decode()
 for e in cas['edits']:assert text.count(e['before'])==1,'unique centralized registry anchor';text=text.replace(e['before'],e['after'],1)
 assert len(cas['edits'])==2
 ops.append((cas['target'],before,text.encode(),stat.S_IMODE(relative(cas['target']).stat().st_mode)))
 assert len({p for p,_,_,_ in ops})==len(ops)
 assert sha(raw(plan['selftest_map']['path']))==plan['selftest_map']['sha256']
 mapcheck=BASE/'check-staged-maps.mjs';assert sha(mapcheck.read_bytes())==plan['mechanical_helper_sha256']
 r=subprocess.run(['node',str(mapcheck),str(BASE/'normalized-plan.json')],cwd=ROOT,capture_output=True,text=True);assert r.returncode==0,r.stdout+r.stderr;inventory=parse(r.stdout);assert inventory['callbacks_executed']==0
 return ops,inventory

def atomic(path,data,mode,create=False):
 fd,tmp=tempfile.mkstemp(prefix='.root-smoke-',dir=path.parent)
 try:
  with os.fdopen(fd,'wb') as f:f.write(data);f.flush();os.fsync(f.fileno())
  os.chmod(tmp,mode)
  if create:os.link(tmp,path);os.unlink(tmp)
  else:os.replace(tmp,path)
 finally:
  if os.path.exists(tmp):os.unlink(tmp)

def main():
 p=argparse.ArgumentParser();p.add_argument('command',choices=['preflight','seal','apply']);p.add_argument('--reviewed-plan-sha256');p.add_argument('--reviewed-driver-sha256');a=p.parse_args();planpath=BASE/'normalized-plan.json';planraw=planpath.read_bytes();plan=parse(planraw);driverhash=sha(Path(__file__).read_bytes());sealpath=BASE/'root-seal.json'
 if a.command in ['seal','apply']:
  if a.command=='seal':assert a.reviewed_plan_sha256==sha(planraw) and a.reviewed_driver_sha256==driverhash,'root must acknowledge exact reviewed plan AND driver digests'
  else:
   seal=parse(sealpath.read_bytes());assert seal['plan_sha256']==sha(planraw) and seal['driver_sha256']==driverhash,'unsealed/revised plan or driver'
 ops,inventory=prepare(plan)
 if a.command=='preflight':print(json.dumps({'writes':0,'prepared_files':len(ops),'arrays':144,'failed_rows':169,'existing_legacy_rows':1,'total_rows':170,'map_check':inventory}));return
 if a.command=='seal':
  seal={'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'plan_sha256':sha(planraw),'driver_sha256':driverhash,'root_review_acknowledged':True,'callbacks_executed':0}
  with sealpath.open('x') as f:json.dump(seal,f,indent=2);f.write('\n')
  print(json.dumps({'sealed':str(sealpath),'actual_source_tool_contract_writes':0}));return
 # Full current preimages are archived before the first actual module/metadata mutation.
 archive=BASE/('root-execution-preimages-'+datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%S.%fZ'));archive.mkdir()
 prior={target:old for target,old,_,_ in ops if old is not None}
 for g in plan['source_guards']:prior.setdefault(g['target'],raw(g['target']))
 for target,data in prior.items():q=archive/target;q.parent.mkdir(parents=True,exist_ok=True);q.write_bytes(data)
 receipt={'plan_sha256':sha(planraw),'driver_sha256':driverhash,'before':{p:sha(d) for p,d in prior.items()},'absent_create_targets':[p for p,o,_,_ in ops if o is None],'candidate_after':{p:sha(n) for p,_,n,_ in ops},'native_gate_credit':False};(archive/'preflight.json').write_text(json.dumps(receipt,indent=2)+'\n')
 # Recheck every source and every whole current write preimage after archiving.
 for g in plan['source_guards']:assert sha(raw(g['target']))==g['sha256'],'source changed before apply'
 for target,old,_,_ in ops:
  q=relative(target);assert (q.read_bytes() if q.exists() else None)==old and not q.is_symlink(),'write preimage changed '+target
 applied=[]
 try:
  for target,old,new,mode in ops:
   q=relative(target);assert (q.read_bytes() if q.exists() else None)==old,'serialized apply race '+target
   atomic(q,new,mode,create=old is None);applied.append((target,old,new,mode))
 except BaseException:
  for target,old,new,mode in reversed(applied):
   q=relative(target);assert q.read_bytes()==new,'rollback race '+target
   if old is None:q.unlink()
   else:atomic(q,old,mode)
  raise
 receipt['applied_files']=len(applied);receipt['actual_after']={p:sha(raw(p)) for p,_,_,_ in ops};(archive/'root-application.json').write_text(json.dumps(receipt,indent=2)+'\n');print(json.dumps({'applied':len(applied),'archive':str(archive),'native_gate_credit':False,'root_next':'Actual native controls, rehashing and certification remain root-owned.'}))
if __name__=='__main__':main()
