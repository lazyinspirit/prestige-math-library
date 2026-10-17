from pathlib import Path
import re,json
B=Path(__file__).resolve().parents[2];i='ex-emgmath-ml-b06';p=B/'items'/f'{i}.md';s=p.read_text()
for dep in ['thm-algebra-of-derivatives','thm-continuous-implies-integrable','thm-newton-leibniz-with-interior-derivative','thm-monotonicity-of-the-integral']:
 s=s.replace('deps:\n','deps:\n  - '+dep+'\n',1).replace('dependency_roles:\n','dependency_roles:\n  '+dep+': mathematical-premise\n',1)
old='[A1] $0<\\delta';assert old in s;s=s.replace(old,r'[F3] The product and quotient differentiation rules hold for differentiable real functions where the denominator is nonzero ([[thm-algebra-of-derivatives]]).'+ '\n\n'+r'[F4] Continuous real functions on a compact interval are Riemann integrable ([[thm-continuous-implies-integrable]]). If a function is continuous on $[u,v]$, differentiable inside, and its derivative has an integrable extension, Newton--Leibniz gives its endpoint difference ([[thm-newton-leibniz-with-interior-derivative]]). Pointwise order and nonnegativity are preserved by integrals on $u<v$ ([[thm-monotonicity-of-the-integral]]).'+ '\n\n'+old,1)
old=r'The corollary\'s time-component bound'
m=re.search(r'^1\.1 .*?(?=^2\.1 )',s,re.S|re.M);assert m
replacement=r'''1.1 Put $z=\delta h_0$. Since $r^2+b^2\ge b^2$ and both square roots are positive, $0<h_0\le1$ and $0<z\le\delta$. By the metric formula in [F1], $g_{00}=-(1+z)^{-2}$, so the time-component discrepancy is $|(1+z)^{-2}-1+2z|$. [given, F1, A1, algebra]

1.2 Define $f(u):=(1+u)^{-2}-1+2u$ for $u\ge0$. Twice applying the quotient/product rules [F3] gives $f(0)=f'(0)=0$ and $f''(u)=6(1+u)^{-4}$, between $0$ and $6$. For fixed $z>0$, set $G_z(u):=(z-u)f'(u)+f(u)$ on $[0,z]$. It is continuous with continuous derivative $G_z'(u)=(z-u)f''(u)$, which is integrable by [F4]. Newton--Leibniz [F4] gives
$$f(z)=G_z(z)-G_z(0)=\int_0^z(z-u)f''(u)\,du.$$
The integrand lies between $0$ and $6(z-u)$, both continuous comparison functions. Integral monotonicity [F4], and Newton--Leibniz for the polynomial primitive $6zu-3u^2$, give $0\le f(z)\le3z^2$. Thus the discrepancy in step 1.1 is at most $3z^2\le3\delta^2$; [A1] further gives $3\delta^2\le3/100$. At $z=0$ the same sharper comparison is zero by direct evaluation, without applying the nondegenerate-interval theorem. [given, F3, F4, A1, step 1.1, algebra]

'''
s=s[:m.start()]+replacement+s[m.end():];s=s.replace('Applying [A1] yields the three numerical bounds in the Example. [step 1.1, F1, A1, algebra]','Applying [A1] and combining with step 1.2 yields the three numerical bounds in the Example. [step 1.1, step 1.2, F1, A1, algebra]');p.write_text(s)
# Only this exact original entry changes; native central-worldline clauses remain untouched.
w=B/'research/physics-remaining-80-2026-10-17-batch-17.proof-contracts.json';d=json.loads(w.read_text());e=d['contracts'][i];proof=s.split('## Verification\n')[1];entries=[];old={x['step']:x for x in e['derivations']}
for m in re.finditer(r'^(\d+\.\d+) (.*?)(?=^\d+\.\d+ |^## |\Z)',proof,re.S|re.M):
 num=m.group(1);claim=m.group(2).strip();refs=[]
 for br in re.findall(r'\[([^\[\]]+)\]',claim):
  for v in br.split(','):
   v=v.strip()
   if re.fullmatch(r'(?:[FAL]\d+|step \d+\.\d+|given|algebra|construct)',v)and v not in refs:refs.append(v)
 row=old.get(num,{'id':'step-'+num.replace('.','-'),'step':num});row['inputs']=refs;row['claim']=re.sub(r'\s*\[[^\[\]]+\](?:\s*∎)?\s*$','',claim).strip();entries.append(row)
e['derivations']=entries
for fact,source in [('F3','thm-algebra-of-derivatives'),('F4','thm-continuous-implies-integrable'),('F4','thm-newton-leibniz-with-interior-derivative'),('F4','thm-monotonicity-of-the-integral')]:
 t=(B/'items'/f'{source}.md').read_text();quote=re.search(r'^## Statement\s*\n(.*?)(?=^## |\Z)',t,re.S|re.M).group(1).strip()
 if source=='thm-algebra-of-derivatives':quote=quote.split('Each claim')[0].strip()
 if source=='thm-monotonicity-of-the-integral':quote=quote.split('**Equality')[0].strip()
 e['citations'].append({'fact':fact,'source':source,'source_section':'Statement','quote':quote,'uses':['1.2']})
w.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
