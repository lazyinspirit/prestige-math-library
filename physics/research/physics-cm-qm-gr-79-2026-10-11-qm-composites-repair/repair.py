from pathlib import Path
import json,re,yaml,shutil
r=Path('physics'); out=r/'research/physics-cm-qm-gr-79-2026-10-11-qm-composites-repair'; (out/'before').mkdir(exist_ok=True)
mp=json.loads((out/'id-map.json').read_text()); changed=set()
def read(i):
 p=r/'items'/f'{i}.md'
 if not (out/'before'/p.name).exists(): shutil.copy2(p,out/'before'/p.name)
 return p.read_text()
def write(i,s): (r/'items'/f'{i}.md').write_text(s); changed.add(i)
def section(s,name,text): return s[:s.index('## '+name)]+text
for old,i in mp.items():
 s=read(i)
 if '\naliases:' not in s: s=s.replace('\nkind:',f'\naliases: [{old}]\nkind:',1)
 write(i,s)
i='lem-nrqm-composites-rank-one-operator-calculus'; s=read(i)
s=s.replace('and every finite-rank operator is compact and hence trace class; in particular every rank-one operator is trace class','and every bounded finite-rank operator is compact')
s=s.replace('compact, and trace class [F1]; its one-term nuclear representation','compact [F1]; its one-term nuclear representation')
s=s.replace('and [F2] gives $\\|T_{u,v}\\|_1','and [F2] first establishes trace class and gives $\\|T_{u,v}\\|_1')
s=s.replace('by [F1] and step 1.1','by [F5] and step 1.1').replace('[step 1.1, F1, F2, algebra]','[step 1.1, F1, F2, F5, algebra]')
s=s.replace(r'\langle x,v\rangle Sx=T_{Su,v}x',r'\langle x,v\rangle Su=T_{Su,v}x')
s=s.replace('Topics in Real and Functional Analysis (2019), §3.6 pp. 97-104','Topics in Real and Functional Analysis (November 17, 2017), §3.6, Lemmas 3.27–3.29, printed pp. 96–98')
write(i,s)
i='lem-nrqm-composites-bounded-tensor-maps';s=read(i)
a=s.index('(b) For bounded'); b=s.index('\n\n(c)',a)
s=s[:a]+r'''(b) For Hilbert spaces $H'',K''$ and bounded $S':H''\to H$, $T':K''\to K$, one has $(S\otimes T)(S'\otimes T')=(SS')\otimes(TT')$. In particular, for endomorphisms $S:H\to H$, $T:K\to K$, the endomorphisms $S\otimes I_K$ and $I_H\otimes T$ commute and their composite is $S\otimes T$.'''+s[b:]
s=s.replace("$S\\in\\mathcal B(H,H')$, $T\\in\\mathcal B(K,K')$; the completions", "$S\\in\\mathcal B(H,H')$, $T\\in\\mathcal B(K,K')$; in (b), composable $S':H''\\to H$, $T':K''\\to K$; the completions")
write(i,s)
i='thm-nrqm-composites-finite-partial-trace-and-schmidt';s=read(i)
s=s.replace(r'\sum_{j=1}^n(I_V\otimes\varphi_j)\circ R\circ(I_V\otimes\iota_j)',r'\sum_{j=1}^n\varphi_j\circ R\circ\iota_j')
s=s.replace(r'\sum_{j=1}^n(I\otimes\varphi_j)R(I\otimes\iota_j)',r'\sum_{j=1}^n\varphi_jR\iota_j').replace(r'$(I\otimes\varphi_j)$',r'$\varphi_j$')
a=s.index('3.1 [Schmidt expansion]');b=s.index('\n\n4.1',a)
s=s[:a]+r'''3.1 [Schmidt expansion with the complex convention] Apply [F3] to the coefficient map $C$: there are orthonormal right singular vectors $q_r\in W$ and left singular vectors $v_r\in V$ such that $Cf_j=\sum_rs_r\langle f_j,q_r\rangle v_r$. Define $u_r:=\sum_j\langle f_j,q_r\rangle f_j$, the coordinate conjugate of $q_r$ in the fixed basis $(f_j)$. The coordinate conjugation reverses inner products, so $\langle u_r,u_t\rangle=\overline{\langle q_r,q_t\rangle}=\delta_{rt}$. Substituting the formula for $Cf_j$ into $\Psi=\sum_jCf_j\otimes f_j$ gives $\Psi=\sum_rs_rv_r\otimes u_r$. Thus the claimed Schmidt expansion holds, with singular values $s_r$ of $C$. Changing the factor bases changes the coefficient matrix by unitary matrices (with transpose rather than adjoint on the second factor); hence the singular values remain unchanged. Orthogonality of the elementary Schmidt products gives $\|\Psi\|^2=\sum_rs_r^2$. [step 2.2, F1, F3, algebra]'''+s[b:]
write(i,s)
i='lem-nrqm-composites-separable-partial-trace';s=read(i)
newdeps=['lem-nrqm-composites-bounded-tensor-maps','thm-separable-hilbert-space-has-a-countable-orthonormal-basis','thm-cauchy-schwarz-in-an-inner-product-space']
for d in newdeps:
 if d not in yaml.safe_load(re.split(r'^---\s*$',s,flags=re.M)[1])['deps']:
  s=s.replace('deps: [','deps: ['+d+', ',1).replace('dependency_roles:\n','dependency_roles:\n  '+d+': mathematical-premise\n',1)
s=s.replace('## Proof',r'''[F4] Algebraic tensors are dense in the completed product, with the orthogonal coordinate norm formula; a closed span of a given countable sequence has a finite/countable orthonormal basis by Gram–Schmidt. Bounded tensor maps extend and satisfy the adjoint and norm identities; Cauchy–Schwarz bounds scalar coefficient sums ([[lem-nrqm-composites-hilbert-tensor-construction]], [[thm-separable-hilbert-space-has-a-countable-orthonormal-basis]], [[lem-nrqm-composites-bounded-tensor-maps]], [[thm-cauchy-schwarz-in-an-inner-product-space]]).

## Proof''')
a=s.index('2.1 [Extension');b=s.index('\n\n3.1',a)
s=s[:a]+r'''1.2 [Arbitrary rank-one vectors] Fix $w,z\in H\widehat\otimes K$. By density and Countable Choice choose sequences of finite algebraic tensors converging to these two vectors; collect their countably many second-factor vectors and let $K_0$ be their closed linear span. Finite rational complex combinations form an explicit dense sequence in $K_0$, so [F4] provides a finite/countable orthonormal basis $(f_b)$ of $K_0$. The maps taking $\sum_i u_i\otimes v_i$ to $\sum_i\langle v_i,f_b\rangle u_i$ have norm at most one by orthogonal coordinates and extend to the completion. Their values $w_b,z_b\in H$ satisfy $w=\sum_bw_b\otimes f_b$, $z=\sum_bz_b\otimes f_b$ and $\sum_b\|w_b\|^2=\|w\|^2$, $\sum_b\|z_b\|^2=\|z\|^2$: the finite-coordinate projections are contractions, converge on algebraic tensors in $H\odot K_0$, and hence converge on its closure, which contains $w,z$. Define $Q(w,z):=\sum_bT_{w_b,z_b}$. By [F1], [F2] and Cauchy–Schwarz, this converges in trace norm and $\|Q(w,z)\|_1\le\sum_b\|w_b\|\|z_b\|\le\|w\|\|z\|$. Finite-coordinate truncations and step 1.1 give $\operatorname{tr}(Q(w,z)A)=\langle(A\otimes I)w,z\rangle=\operatorname{tr}(T_{w,z}(A\otimes I))$; rank-one trace-norm continuity and bounded tensor maps [F4] pass this identity to limits. The identity uniquely determines $Q(w,z)$ by [F3], so it is independent of the supports, basis and approximants, is sesquilinear in $w,z$, and agrees with the elementary assignment. [step 1.1, F1, F2, F3, F4, choose, construct, algebra]

2.1 [Extension to trace class] For a nuclear representation $T=\sum_jT_{w_j,z_j}$, define $\operatorname{Tr}_KT:=\sum_jQ(w_j,z_j)$. Step 1.2 and [F2] give trace-norm convergence and the bound $\|\operatorname{Tr}_KT\|_1\le\inf\sum_j\|w_j\|\|z_j\|=\|T\|_1$. The defining trace pairing follows by summing that of step 1.2, using trace-norm continuity and $\|A\otimes I\|\le\|A\|$. If two nuclear representations are used, both images have the same pairings against every bounded $A$, and their difference vanishes by [F3]. Thus the definition is independent of representation. The same uniqueness proves linearity, since the sum and scalar multiple of images satisfy the pairing for the sum and scalar multiple of inputs. This proves (a) and the elementary formula (c). [step 1.2, F1, F2, F3, F4, algebra]'''+s[b:]
a=s.index('3.1 [Positivity');b=s.index('\n\n4.1',a)
s=s[:a]+r'''3.1 [Positivity and trace preservation] Step 1.2 gives $Q(w,w)=\sum_bT_{w_b,w_b}\ge0$, since $\langle T_{w_b,w_b}x,x\rangle=|\langle x,w_b\rangle|^2\ge0$ and trace-norm convergence implies operator-norm convergence. Every positive trace-class input has a positive spectral rank-one expansion by [[lem-nrqm-composites-density-and-scalar-spectral-probability]]; the same proof applies when its trace is not one, by scaling when nonzero, and the zero input is immediate. The bounded map of step 2.1 carries its partial sums to positive sums of these $Q(w,w)$ and thus carries its limit to a positive operator. Taking $A=I_H$ in the defining pairing gives $\operatorname{tr}\operatorname{Tr}_KT=\operatorname{tr}T$. Hence density operators map to density operators. [step 1.2, step 2.1, F1, F2, algebra]'''+s[b:]
write(i,s)
i='lem-nrqm-composites-countable-kraus-isometric-dilation';s=read(i)
s=s.replace(r'$W^*(\xi\otimes e_{a,r})=M_{a,r}\xi$',r'$W^*(\xi\otimes e_{a,r})=M_{a,r}^*\xi$')
a=s.index('4.1 [Partial-trace');s=s[:a]+r'''4.1 [Partial-trace recovery by truncations] For $x,y\in H$ and a finite rectangle $D$ of index pairs put $w_D:=\sum_{(a,r)\in D}M_{a,r}x\otimes e_{a,r}$ and $z_D:=\sum_{(a,r)\in D}M_{a,r}y\otimes e_{a,r}$. Then $w_D\to Wx$, $z_D\to Wy$ by step 1.1, and rank-one trace-norm continuity gives $T_{w_D,z_D}\to T_{Wx,Wy}=WT_{x,y}W^*$. For each finite rectangle the elementary formula [F3] gives $\operatorname{Tr}_{\ell^2}T_{w_D,z_D}=\sum_{(a,r)\in D}T_{M_{a,r}x,M_{a,r}y}$; Cauchy–Schwarz and [F1] give $\sum_{a,r}\|M_{a,r}x\|\|M_{a,r}y\|\le\|x\|\|y\|$, so these diagonal terms converge absolutely in trace norm. Taking limits using [F3] proves the Kraus formula on rank-one inputs. Both sides are bounded linear maps on trace class: the left side by the two-sided ideal bound for $W,W^*$ and [F3], and the right side by nuclear expansion and the preceding rank-one bound. Finite rank-one sums are trace-norm dense by the nuclear characterization in [[lem-nrqm-composites-nuclear-bounded-cyclicity]], so the identity extends to every trace-class input and equals the map of [[lem-nrqm-composites-countable-kraus-normalization]]. [step 1.1, step 3.1, F1, F3, F4, algebra] ∎
'''
write(i,s)
(out/'changed.json').write_text(json.dumps(sorted(changed),indent=2)+'\n')
