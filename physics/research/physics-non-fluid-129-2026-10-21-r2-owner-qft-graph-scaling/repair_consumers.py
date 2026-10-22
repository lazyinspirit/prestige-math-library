from pathlib import Path
import re
base=Path('items')
p=base/'thm-qftx-scalar-eg-induction.md';s=p.read_text()
s=s.replace(' Also assume the graphwise product-scaling bound (PB) from [A2] below at every successive product of edge pullbacks and lower-order local counterterms.','')
s=re.sub(r'\n\[A2\].*?\n\n', '\n', s, flags=re.S)
s=s.replace('[A1], [A2] and','[A1] and').replace('A1, A2, ','A1, ')
s=s.replace('each numerical graph distribution extends across the total diagonal in the $4(n-1)$ relative coordinates with its finite scaling degree','each numerical graph distribution has a finite upper scaling bound and extends across the total diagonal in the $4(n-1)$ relative coordinates with its scaling degree')
s=s.replace('has a finite real scaling degree $\\delta_\\Gamma$','has a finite upper scaling bound and scaling degree $\\delta_\\Gamma<+\\infty$')
s=s.replace('every finite graph numerical distribution has finite scaling degree at the remaining total diagonal','every finite graph numerical distribution has a finite upper scaling bound at the remaining total diagonal, from full-center transverse causal block products')
s=s.replace('verification:\n  precheck: pass','verification:\n  precheck: pending')
start=s.index('## Proof\n');end=s.index('## Remarks',start);pr=s[start:end]
head=pr[:pr.index('1.1 ')]
steps={m.group(1):m.group(2).strip() for m in re.finditer(r'(?ms)^(\d+\.\d+) (.*?)(?=^\d+\.\d+ |\Z)',pr)}
order=[('1.1','1.1'),('1.2','1.2'),('1.3','1.3'),('2.1','2.1'),('3.1','2.2'),('4.1','2.3'),('2.2','3.1'),('3.2','3.2'),('4.2','4.1'),('5.1','5.1')]
mp=dict(order)
parts=[]
for old,new in order:
 t=steps[old]
 t=re.sub(r'step (\d+\.\d+)',lambda m:'step '+mp.get(m.group(1),m.group(1)),t)
 if old=='2.2':
  t=t.replace('Apply [F7] to each', 'Apply [F7] to each')
  t=t.replace('The extension has degree $\\delta_\\Gamma$;', 'If $\\delta_\\Gamma=-\\infty$, apply [F7] with any real upper exponent below the relative dimension: the unique extensions for all such exponents agree by [F8], and their arbitrarily low scaling bounds give the same-degree extension. Otherwise [F7] applies with its finite real degree. The extension has degree $\\delta_\\Gamma$;')
  t=t.replace('The finite graph sum yields a full extension $T_n^1$;', 'Apply these extensions to the glued distribution from step 2.3. The finite graph sum yields a full extension $T_n^1$;')
  t=t.replace('field independence is preserved.', 'field independence is preserved. The numerical kernels are translation invariant, so all their wavefront tuples have total covector sum zero, including at the extended diagonals. Multiplication by the smooth compact vertex coefficients and pullback along repeated vertex positions preserve this total sum. Proper pushforward over integrated vertex variables, using [F4], therefore makes each nonzero output derivative tuple avoid the all-future and all-past cones: a nonzero tuple in either cone cannot have zero sum. Thus the output belongs to the stated polynomial microcausal class, with compact support and finite polynomial degree inherited from the finitely many vertex terms.')
  t=t.replace('step 1.3, construct]', 'step 1.3, step 2.3, F4, construct]')
 if old=='4.1':
  t=t.replace('locally finite partition', 'partition').replace('the sum of the corresponding partition functions times $T^I_n$ is locally finite', 'the sum of the corresponding partition functions times $T^I_n$ is locally finite')
 if old=='4.2':
  t=t.replace('the diagonal value $T_n(V,\\ldots,V)$ is unchanged, so covariance and unitarity are preserved.', 'this preserves covariance, field independence and the finite scaling bounds. The following symmetric diagonal correction and its polarization impose unitarity.')
 if old=='5.1':
  t=t.replace('step 4.1]', 'step 4.1]')
 parts.append(new+' '+t)
s=s[:start]+head+'\n\n'.join(parts)+'\n\n'+s[end:];p.write_text(s)
p=base/'prop-qftx-finite-renormalization-composition.md';s=p.read_text()
s=s.replace('Assume the Axiom of Choice and Countable Choice, and the graphwise product-scaling bound (PB) in [A2] for the common free data.','Assume the Axiom of Choice and Countable Choice.')
s=re.sub(r'\n\[A2\].*?\n\n','\n',s,flags=re.S)
s=s.replace('[A1], [A2], two systems','[A1], two systems').replace('By [A2] the conditional existence result [F1] applies to the common free data;', 'The existence result [F1] applies to the common free data;').replace('given, A2, F1','given, F1')
s=s.replace('take the linear local functionals $F_i(\\phi)=\\int f_i(x)\\phi(x)\\,d^4x$;', 'fix arbitrary polynomial jet labels $P_i$ of finite order and take the local functionals $F_i(\\phi)=\\int f_i(x)P_i(j^{s_i}\\phi(x))\\,d^4x$;')
s=s.replace('Thus the residual distribution pairs to zero with every product test', 'For each of the arbitrary fixed polynomial jet labels, the corresponding numerical residual distribution therefore pairs to zero with every product test')
s=s.replace('both systems exist with complete conditional graph extensions','both systems exist with complete graph extensions conditional on the fixed free data')
s=s.replace('verification:\n  precheck: pass','verification:\n  precheck: pending');p.write_text(s)
p=base/'ex-qftx-two-vertex-log.md';s=p.read_text()
s=s.replace('Assume the Axiom of Choice, Countable Choice, and the graphwise product-scaling bound (PB) from [A2] below where the graph is placed in the conditional causal construction.','Assume the Axiom of Choice and Countable Choice.')
s=re.sub(r'\n\[A2\].*?\n\n','\n',s,flags=re.S)
s=s.replace('[A1], [A2] and','[A1] and').replace('under the additional causal-graph hypothesis [A2], the conditional extension theorem [F1] applies at the stated formal order.', 'the causal extension theorem [F1] supplies the separately stated Lorentzian graph construction for admissible scalar free data at the same formal order. The Euclidean calculation uses [F2] and makes no identification of the Euclidean kernel with that Lorentzian graph.').replace('given, A2, F1','given, F1')
s=s.replace('verification:\n  precheck: pass','verification:\n  precheck: pending');p.write_text(s)
