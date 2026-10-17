from pathlib import Path
import json,re
old=Path('research/numerical-optimization-dynamics-2026-10-16-owner-render-precheck-diagnostics-20261016T111118455346Z');b=Path(__file__).resolve().parent
phase=json.load(open(b/'phase-preservation-review.json'));initial={x['path']:x for x in json.load(open(old/'candidate-precheck-normalization.json'))};changes=[];audit=[];outside=[]
# One match consumes the entire original explicit reference, including Oxford comma lists/ranges.
ref=re.compile(r'(steps?\s+)(\d+\.\d+(?:(?:\s*,\s*(?:and\s+)?|\s+and\s+|\s*&\s*|\s*[–—-]\s*)\d+\.\d+)*)',re.I)
for row in phase:
 p=row['path'];mapping=row['old_to_final_step_labels'];lines=initial[p]['remaps'][0]['old'];ids=[x.split()[0]for x in lines];records=[]
 def apply(text,locus):
  def sub(m):
   token=m.group(2)
   def rangerm(q):
    a,z=q[1],q[2]
    if a not in mapping or z not in mapping:raise Exception('unknown range '+p+':'+q[0])
    named=[mapping[x]for x in ids[ids.index(a):ids.index(z)+1]]
    if not named:raise Exception('reverse range')
    return ' and '.join(named)if len(named)==2 else ', '.join(named[:-1])+', and '+named[-1]if len(named)>1 else named[0]
   bits=re.split(r'(\d+\.\d+\s*[–—-]\s*\d+\.\d+)',token);mapped=[]
   for bit in bits:
    q=re.fullmatch(r'(\d+\.\d+)\s*[–—-]\s*(\d+\.\d+)',bit)
    if q:mapped.append(rangerm(q))
    else:
     def label(z):
      if z[0] not in mapping:raise Exception('unknown explicit step '+p+':'+z[0])
      return mapping[z[0]]
     mapped.append(re.sub(r'\d+\.\d+',label,bit))
   new=m[1]+''.join(mapped);records.append({'locus':locus,'original':m[0],'final':new,'original_known_labels':re.findall(r'\d+\.\d+',token)});return new
  text=ref.sub(sub,text)
  # Bare proof-tag references are known step IDs too; do not alter decimal math/constants.
  def tag(m):
   tokens=m[1].split(',');has=False
   for i,t in enumerate(tokens):
    if re.fullmatch(r'\s*\d+\.\d+\s*',t) and t.strip()in mapping:tokens[i]=t.replace(t.strip(),mapping[t.strip()]);has=True
   return '['+','.join(tokens)+']'if has else m[0]
  return re.sub(r'\[([^\[\]\n]+)\](?=\s*(?:∎)?\s*$)',tag,text)
 s=(b/'proposed'/p).read_text();h=re.search(r'^## (Proof|Refutation|Verification|Counterexample)\s*\n',s,re.M);start=h.end();e=re.search(r'^## ',s[start:],re.M);stop=start+e.start()if e else len(s);body=s[start:stop];first=re.search(r'^\d+\.\d+\s',body,re.M).start()
 final_order=[x.split()[0]for x in body.splitlines()if re.match(r'^\d+\.\d+\s',x)];regenerated={}
 for line in lines:
  oldid=line.split()[0];newid=mapping[oldid];text=apply(line,'proof '+oldid+' -> '+newid);text=re.sub(r'^\d+\.\d+',newid,text);regenerated[newid]=text
 assert set(final_order)==set(regenerated)
 prefix=s[:start]
 if p.endswith('lem-hermitian-block-ldl-kernel-roundoff-and-reconstruction-residual.md'):
  prefix=prefix.replace('The proof, Step 3.1, of [[lem-rounded-linear-and-normal-residual-certificates]]','The proof, Step 2.1, of [[lem-rounded-linear-and-normal-residual-certificates]]')
  records.append({'locus':'before-proof supplier citation','original':'Step 2.1','final':'Step 2.1','external_supplier':'lem-rounded-linear-and-normal-residual-certificates','reason':'actual unchanged supplier Proof2.1; local label map does not apply'})
 suffix=apply(s[stop:],'after-proof (manual own-step context review required)')
 new=prefix+body[:first]+'\n\n'.join(regenerated[i]for i in final_order)+'\n\n'+suffix
 if new!=s:changes.append({'path':p,'v1_to_v2_changed':True})
 (b/'proposed'/p).write_text(new);audit.append({'path':p,'mapping':mapping,'references_rebuilt_once_from_original':records,'original_paragraph_count':len(lines),'final_paragraph_count':len(final_order)})
 outside.extend({'path':p,**x}for x in records if 'proof 'not in x['locus'])
(b/'direct-original-reference-audit.json').write_text(json.dumps(audit,indent=2)+'\n');(b/'v1-to-v2-affected.json').write_text(json.dumps(changes,indent=2)+'\n');(b/'outside-proof-own-step-references.json').write_text(json.dumps(outside,indent=2)+'\n');print('rebuilt',len(audit),'v1changed',len(changes),'outside',len(outside))
