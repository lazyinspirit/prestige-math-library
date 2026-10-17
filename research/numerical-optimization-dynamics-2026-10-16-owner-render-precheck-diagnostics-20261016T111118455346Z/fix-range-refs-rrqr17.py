from pathlib import Path
import json,re
b=Path('research/numerical-optimization-dynamics-2026-10-16-owner-render-precheck-diagnostics-20261016T111118455346Z');rs=json.load(open(b/'candidate-precheck-normalization.json'));repairs=[];reviews=[]
def fp(s):return re.sub(r'\d+\.\d+','#',s)
for row in rs:
 if not row['remaps']:continue
 first=row['remaps'][0]['old'];last=row['remaps'][-1]['new'];ids=[a.split()[0]for a in first];mapping={a:a for a in ids}
 for rd in row['remaps']:
  m={}
  for a in rd['old']:
   hits=[z for z in rd['new']if fp(a)==fp(z)];assert len(hits)==1;m[a.split()[0]]=hits[0].split()[0]
  mapping={k:m[v]for k,v in mapping.items()}
 p=b/'proposed'/row['path'];s=p.read_text();before=s
 for initial in first:
  oldid=initial.split()[0];newid=mapping[oldid]
  # Match this same mathematical paragraph by decimal-insensitive fingerprint.
  matches=[line for line in s.splitlines()if re.match(r'^\d+\.\d+\s',line)and fp(line)==fp(initial)];assert len(matches)==1
  candidate=matches[0];correct=initial
  def refs(m):
   intro=m.group(1);tokens=m.group(2)
   def ran(q):
    a,z=q.group(1),q.group(2)
    if mapping.get(a,a)==a and mapping.get(z,z)==z:return q[0]
    assert a in ids and z in ids and ids.index(a)<=ids.index(z)
    named=[mapping[t]for t in ids[ids.index(a):ids.index(z)+1]]
    return ' and '.join(named)if len(named)==2 else ', '.join(named[:-1])+', and '+named[-1]
   # Range text is generated from final IDs; avoid mapping generated IDs twice.
   pieces=re.split(r'(\d+\.\d+\s*[–—-]\s*\d+\.\d+)',tokens)
   out=[]
   for t in pieces:
    rm=re.fullmatch(r'(\d+\.\d+)\s*[–—-]\s*(\d+\.\d+)',t)
    out.append(ran(rm)if rm else re.sub(r'\d+\.\d+',lambda q:mapping.get(q[0],q[0]),t))
   return intro+''.join(out)
  correct=re.sub(r'(steps?\s+)((?:\d+\.\d+)(?:(?:\s*,\s*|\s+and\s+|\s*&\s*|\s*[–—-]\s*)\d+\.\d+)*)',refs,correct,flags=re.I)
  correct=re.sub(r'^\d+\.\d+',newid,correct)
  if correct!=candidate:
   repairs.append({'path':row['path'],'old_step':oldid,'final_step':newid,'native_candidate':candidate,'corrected_reference_candidate':correct})
   assert s.count(candidate)==1;s=s.replace(candidate,correct)
 if s!=before:
  f=b/'pre-reference-correction'/row['path'];f.parent.mkdir(parents=True,exist_ok=True);f.write_text(before);p.write_text(s)
 reviews.append({'path':row['path'],'old_to_final_step_labels':mapping,'complete_paragraphs_preserved_modulo_step_labels_and_explicit_references':True})
(b/'semantic-step-reference-corrections.json').write_text(json.dumps(repairs,indent=2)+'\n');(b/'phase-preservation-review.json').write_text(json.dumps(reviews,indent=2)+'\n');print('range corrections',len(repairs),'phase maps',len(reviews))
