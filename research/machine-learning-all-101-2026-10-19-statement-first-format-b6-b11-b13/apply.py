#!/usr/bin/env python3
"""Root-only header/reference transaction. Prepared but NOT executed by delegate.
Prevalidate all exact bytes and preservation invariants, archive all preimages,
prepare all replacements, recheck every CAS, then use atomic file replacements.
On a caught failure, restore only already-applied files still matching our bytes.
"""
import pathlib,json,sys,hashlib,re,collections,datetime,os,tempfile
if sys.argv[1:]!=['--apply']:raise SystemExit('No mutation. Root must explicitly invoke --apply after concrete packet review.')
BASE=pathlib.Path(__file__).resolve().parent;ROOT=BASE.parents[1]
d=json.loads((BASE/'proposals.json').read_text());prepared=[]
def digest(x):return hashlib.sha256(x).hexdigest()
def parts(t):
 m=re.match(r'\A---\n.*?\n---\n',t,re.S);assert m;return t[:m.end()],t[m.end():]
def sections(t):
 body=parts(t)[1];ms=list(re.finditer(r'^## (.+)\n',body,re.M));return [(m.group(1),body[m.end():ms[i+1].start() if i+1<len(ms) else len(body)]) for i,m in enumerate(ms)]
def proofparts(t):return [(h,b) for h,b in sections(t) if h in ['Proof','Refutation','Verification','Counterexample']]
def paragraphs(t):return collections.Counter(p.strip() for p in re.sub(r'^## .+\n','',parts(t)[1],flags=re.M).strip().split('\n\n') if p.strip())
assert len(d['proposals'])==17 and len({r['path'] for r in d['proposals']})==17
for row in d['proposals']:
 assert row['path'].startswith('items/') and row['path'].endswith('.md')
 p=ROOT/row['path'];q=ROOT/row['proposed'];assert p.is_file() and q.is_file() and not p.is_symlink() and not q.is_symlink()
 before=p.read_bytes();after=q.read_bytes();assert digest(before)==row['before_raw_sha256'] and digest(after)==row['proposed_raw_sha256']
 text=before.decode();new=after.decode();expected=text
 for op in row['operations']:
  if op['type'] in ['heading-rename','reference-paragraph-split']:
   assert expected.count(op['old'])==1;expected=expected.replace(op['old'],op['replacement'],1)
  elif op['type']=='reference-block-relocation':
   block=op['block'];assert expected.endswith(block) and expected.count(block)==1;prefix=expected[:-len(block)];anchor=op['before_heading'];assert prefix.count(anchor)==1;at=prefix.index(anchor);expected=prefix[:at]+block.rstrip('\n')+'\n\n'+prefix[at:]
  else:raise AssertionError('Unrecognized normalization operation')
 assert expected==new and parts(text)[0]==parts(new)[0]
 old_claims={('Statement' if h=='Statement refuted' else h):b for h,b in sections(text) if h in ['Statement','Statement refuted','Example','Definition']}
 new_claims={h:b for h,b in sections(new) if h in ['Statement','Example','Definition']};assert old_claims==new_claims and proofparts(text)==proofparts(new)
 oldp=paragraphs(text);newp=paragraphs(new)
 for op in row['operations']:
  if op['type']=='reference-paragraph-split':oldp.subtract([op['old']]);newp.subtract(op['replacement'].split('\n\n'))
 assert +oldp==+newp,'All original nonheading mathematical/citation paragraphs must survive'
 prepared.append((p,before,after))
# All inputs, proposals and preservation invariants passed BEFORE any archive/write.
stamp=datetime.datetime.now(datetime.timezone.utc).strftime('%Y%m%dT%H%M%S%fZ');archive=BASE/('root-apply-'+stamp);assert not archive.exists();archive.mkdir()
for p,before,after in prepared:
 out=archive/'before'/p.relative_to(ROOT);out.parent.mkdir(parents=True,exist_ok=True);out.write_bytes(before)
for p,before,after in prepared:assert p.read_bytes()==before and not p.is_symlink()
temps={};applied=[]
try:
 for p,before,after in prepared:
  fd,tmp=tempfile.mkstemp(prefix='.'+p.name+'.statement-first-',dir=p.parent)
  with os.fdopen(fd,'wb') as f:f.write(after);f.flush();os.fsync(f.fileno())
  temps[p]=tmp
 # No source mutation before every prepared temp and every current guard is revalidated.
 for p,before,after in prepared:assert p.read_bytes()==before and not p.is_symlink()
 for p,before,after in prepared:
  assert p.read_bytes()==before;os.replace(temps.pop(p),p);applied.append((p,before,after))
 for p,before,after in prepared:assert p.read_bytes()==after
except BaseException:
 rollback=[]
 for p,before,after in reversed(applied):
  if p.read_bytes()!=after:rollback.append({'path':str(p.relative_to(ROOT)),'status':'foreign-change-not-overwritten'});continue
  fd,tmp=tempfile.mkstemp(prefix='.'+p.name+'.rollback-',dir=p.parent)
  with os.fdopen(fd,'wb') as f:f.write(before);f.flush();os.fsync(f.fileno())
  os.replace(tmp,p);rollback.append({'path':str(p.relative_to(ROOT)),'status':'restored-original'})
 (archive/'rollback.json').write_text(json.dumps(rollback,indent=2)+'\n');raise
finally:
 for tmp in temps.values():
  if os.path.exists(tmp):os.unlink(tmp)
receipt={'version':1,'kind':'root-header-reference-format-normalization','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'native_review_credit':False,'math_cycles_reopened':False,'frontmatter_and_complete_math_claim_proof_bytes_preserved':True,'files':[{'path':str(p.relative_to(ROOT)),'before_raw_sha256':digest(before),'after_raw_sha256':digest(after),'before_file':str((archive/'before'/p.relative_to(ROOT)).relative_to(ROOT))} for p,before,after in prepared]}
(archive/'receipt.json').write_text(json.dumps(receipt,indent=2)+'\n');print(json.dumps({'formatted_sources':len(prepared),'receipt':str((archive/'receipt.json').relative_to(ROOT)),'remaining':'Root exact-current full-scope preparation, source currency/recertification and ordinary native gates.'},indent=2))
