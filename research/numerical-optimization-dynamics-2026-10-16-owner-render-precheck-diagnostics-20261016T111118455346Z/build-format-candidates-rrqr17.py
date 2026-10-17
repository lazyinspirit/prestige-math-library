from pathlib import Path
import json,re,hashlib
b=Path('research/numerical-optimization-dynamics-2026-10-16-owner-render-precheck-diagnostics-20261016T111118455346Z')
r=json.load(open(b/'rendercheck.stdout.json'));pc=json.load(open(b/'precheck.stdout.json'));targets={x['file']for x in r['errors']}|{x['file']for x in pc['results']if x['status']in ['fail','repair']};rows=[]
for p in sorted(targets):
 before=Path(p).read_text();s=before;changes=[]
 if any(x['file']==p and x['code']=='multiline-display'for x in r['errors']):
  def display(m):
   inner=m.group(1)
   if '\n'not in inner.strip():return m[0]
   changes.append('Join display math internal hard breaks with spaces; preserve all TeX tokens')
   return '$$'+re.sub(r'\s*\n\s*',' ',inner).strip()+'$$'
  s=re.sub(r'\$\$([\s\S]*?)\$\$',display,s)
 if p.endswith('alg-adaptive-euler-maruyama-on-predictable-grid.md'):s=s.replace(r'\texttt{current_time}',r'\texttt{current\_time}');changes.append('Escape texttt underscore')
 if p.endswith('thm-sylvester-unique-solvability-spectral-separation.md'):s=s.replace(r'\sigma(A)=\{t_{ii}}',r'\sigma(A)=\{t_{ii}\}');changes.append('Escape closing set brace to match opening set delimiter')
 if any(x['file']==p and x['status']in['fail','repair']for x in pc['results']):
  # One actual proof-like section per failed source, verified before generation.
  m=re.search(r'^## (Proof|Refutation|Counterexample|Verification)\s*\n',s,re.M);assert m
  end=re.search(r'^## ',s[m.end():],re.M);stop=m.end()+end.start()if end else len(s)
  body=s[m.end():stop]
  # Preserve paragraph contents; join physical hard breaks only inside each numbered argument.
  pieces=re.split(r'(?m)(?=^\d+\.\d+\s)',body);new=[]
  for part in pieces:
   if re.match(r'^\d+\.\d+\s',part):
    new.append(re.sub(r'\s*\n\s*',' ',part).rstrip()+'\n\n')
   else:new.append(part)
  joined=''.join(new)
  if joined!=body:changes.append('Join complete existing numbered proof paragraphs onto physical lines')
  s=s[:m.end()]+joined+s[stop:]
 if p.endswith('lem-arc-length-polyline-interpolation-error.md'):
  s=s.replace('[ih,s]',r'\lbrack ih,s\rbrack').replace('[ih,(i+1)h]',r'\lbrack ih,(i+1)h\rbrack');changes.append('Use TeX interval delimiters to prevent mathematical ih from being parsed as induction hypothesis tag')
 if p.endswith('thm-block-ldl-star-residual-with-actual-growth.md'):
  old='[F1, F2, F3, step 3.1, step 5.1, induction, algebra] ∎';assert s.count(old)==1;s=s.replace(old,'[F1, F2, F3, step 3.1, step 5.1, induction, discharge-induction, algebra] ∎');changes.append('Add final discharge-induction tag to existing completed stored-multiplier induction')
 if p.endswith('thm-continuous-flow-log-density-equation.md'):
  assert '∎'not in s;s=s.rstrip()+' ∎\n';changes.append('Append missing final QED to complete endpoint identity conclusion')
 for folder,text in [('before',before),('proposed',s)]:
  f=b/folder/p;f.parent.mkdir(parents=True,exist_ok=True);f.write_text(text)
 rows.append({'path':p,'before_raw_sha256':hashlib.sha256(before.encode()).hexdigest(),'initial_format_changes':changes})
(b/'candidate-inventory.json').write_text(json.dumps(rows,indent=2)+'\n')
print(len(rows))
