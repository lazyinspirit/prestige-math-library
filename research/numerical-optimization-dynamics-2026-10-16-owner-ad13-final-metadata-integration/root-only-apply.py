#!/usr/bin/env python3
"""Default read-only preview. Only root may use --apply-root-reviewed after exact review."""
from pathlib import Path
from datetime import datetime,timezone
import json,sys,os,tempfile
D=Path(__file__).resolve().parent;ROOT=D.parent.parent
P=D/'packet-v2';cfg=json.loads((P/'config.json').read_text())
assert sys.argv[1:] in ([],['--preview'],['--apply-root-reviewed'])
def guard():
 for p in cfg['guard_paths']:
  assert (ROOT/p).read_bytes()==(P/'guards'/p).read_bytes(),'STALE actual source/metadata/evidence; refuse overwrite: '+p
 for p in cfg['write_paths']:
  assert (ROOT/p).read_bytes()==(P/'before'/p).read_bytes(),'STALE target before bytes: '+p
guard()
print(json.dumps({'mode':'root-reviewed-apply' if sys.argv[1:]==['--apply-root-reviewed'] else 'read-only-preview','write_paths':cfg['write_paths'],'full_byte_guards':len(cfg['guard_paths']),'new_items':cfg['additions'],'root_review_boundary_drafts_required':True,'source_dependency_level_followup':'Root reconciles missing new96source labels through normal metadata process; this packet makes no mathematical item edits.','no_independent_review_native_acceptance_or_gate':True},indent=2))
if sys.argv[1:]!=['--apply-root-reviewed']:raise SystemExit(0)
A=D/('root-applied-'+datetime.now(timezone.utc).strftime('%Y%m%dT%H%M%S%fZ'));(A/'before').mkdir(parents=True);(A/'final').mkdir();temps=[]
try:
 for p in cfg['write_paths']:
  target=ROOT/p;before=A/'before'/p;before.parent.mkdir(parents=True,exist_ok=True);before.write_bytes(target.read_bytes())
  data=(P/'proposed'/p).read_bytes();fd,tmp=tempfile.mkstemp(prefix=target.name+'.root-metadata-',dir=target.parent)
  with os.fdopen(fd,'wb') as out:out.write(data)
  os.chmod(tmp,target.stat().st_mode & 0o777);temps.append((p,Path(tmp),data))
 guard()
 for p,tmp,data in temps:
  assert (ROOT/p).read_bytes()==(P/'before'/p).read_bytes(),'Concurrent target change; stop before overwrite: '+p
  os.replace(tmp,ROOT/p);f=A/'final'/p;f.parent.mkdir(parents=True,exist_ok=True);f.write_bytes(data)
 (A/'completion.json').write_text(json.dumps({'root_executed_exact_current_metadata_projection':True,'write_paths':cfg['write_paths'],'raw_source_evidence_guards':len(cfg['guard_paths']),'no_new_review_native_acceptance_gate_or_recertification':True},indent=2)+'\n')
 print(A/'completion.json')
finally:
 for _,tmp,_ in temps:
  if tmp.exists():tmp.unlink()
