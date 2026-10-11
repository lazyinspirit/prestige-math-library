from pathlib import Path
import hashlib,json,re
r=Path('research/frontier-44-special-representation-examples-28-six-step-owner-escalation-repairs/cyclotomic_isomorphism');h=json.loads((r/'current-hashes.json').read_text())
for name in h:
 p=Path(name);assert hashlib.sha256(p.read_bytes()).hexdigest()==h[name];s=p.read_text().replace('arXiv:0808.2032v3','arXiv:0808.2032v4')
 if p.stem=='lem-cyclotomic-hecke-intertwiners-and-local-power-series':
  s=s.replace(r'Put $D_r=(S_r-1)/(u_r-u_{r+1})$.',r'Put $D_r f=(S_rf-f)/(u_r-u_{r+1})$; every inverse dot difference in an operator formula acts by multiplication on the left unless explicitly included in a right coefficient.')
 if p.stem=='lem-cyclotomic-klr-block-satisfies-the-hecke-relations':
  a=s.index('## Proof');b=s.index('## Remarks');body=s[a:b]
  parts=re.split(r'\n(?=\d+\.\d+ )',body);intro=parts[0];d={x.split(' ',1)[0]:x for x in parts[1:]}
  order=['1.1','2.1','3.1','2.2','3.2','4.1','5.1'];mapping={'2.2':'4.1','3.2':'5.1','4.1':'6.1','5.1':'7.1'}
  body=intro+'\n'+'\n'.join(d[x] for x in order)
  body=re.sub(r'(?<![\d.])(?:2\.2|3\.2|4\.1|5\.1)(?![\d.])',lambda m:mapping[m[0]],body)
  body=body.replace('[F1, F2, step 1.1, construct]','[F1, F2, step 2.1, step 3.1, construct]')
  body=body.replace('Steps 1.1–1.3 and 2.1 produce','Steps 1.1, 2.1, 3.1 and 4.1 produce')
  s=s[:a]+body+s[b:]
 p.write_text(s);h[name]=hashlib.sha256(p.read_bytes()).hexdigest()
(r/'current-hashes.json').write_text(json.dumps(h,indent=2)+'\n')
