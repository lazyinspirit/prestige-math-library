from pathlib import Path
import re,json,yaml,shutil,hashlib
r=Path('physics');o=r/'research/physics-cm-qm-gr-79-2026-10-11-qm-composites-repair';backup=o/'before-materialized';backup.mkdir(exist_ok=True)
s=json.load(open(r/'.physics-autopilot/physics-cm-qm-gr-79-2026-10-11/state.json'));assert s['paused'] is True
for n in [37,42]:assert s['dispatches'][f'1-scaffold:batch-{n}']['endedAt'] and s['dispatches'][f'1-scaffold:batch-{n}']['lastExitOk']
ids=[v['id'] for v in json.load(open(o/'materialized-consumer-review.json'))['items']]
for i in ids:
 p=r/'items'/(i+'.md');assert not (backup/p.name).exists();shutil.copy2(p,backup/p.name)
frozen={p.stem:hashlib.sha256(p.read_bytes()).hexdigest() for p in (r/'items').glob('*nrqm-composites*.md')}
(o/'materialized-frozen-suppliers.json').write_text(json.dumps(frozen,indent=2)+'\n')
def read(i):return (r/'items'/(i+'.md')).read_text()
def write(i,s):(r/'items'/(i+'.md')).write_text(s)
def dep(s,d):
 f=yaml.safe_load(re.split(r'^---\s*$',s,flags=re.M)[1])
 if d not in f['deps']:s=s.replace('deps: [','deps: ['+d+', ',1).replace('dependency_roles:\n','dependency_roles:\n  '+d+': mathematical-premise\n',1)
 return s
images=r'''For clarity put $q=(e_+\otimes e_-+e_-\otimes e_+)/\sqrt2$ and $d_\pm=(e_+\otimes e_+\pm e_-\otimes e_-)/\sqrt2$. Direct Pauli actions give $(\sigma_x\otimes\sigma_y)\Psi=-iq$, $(\sigma_y\otimes\sigma_x)\Psi=iq$, $(\sigma_x\otimes\sigma_z)\Psi=-d_+$, $(\sigma_z\otimes\sigma_x)\Psi=d_+$, $(\sigma_y\otimes\sigma_z)\Psi=id_-$ and $(\sigma_z\otimes\sigma_y)\Psi=-id_-$. Each of $q,d_+,d_-$ is orthogonal to $\Psi$ by the elementary product-basis pairings, so every off-diagonal correlation is zero. '''
i='thm-nrqm-orbital-and-spin-symmetric-power-su2-representation';s=read(i)
# Keep S_n for the permutation group; use a distinct symbol for the subspace.
s=s.replace('S_n',r'\mathcal S_n')
s=s.replace(r'\pi\in\mathcal S_n',r'\pi\in S_n').replace(r'\pi\in \mathcal S_n',r'\pi\in S_n')
s=s.replace(r'symmetric group\n$\mathcal S_n$',r'symmetric group\n$S_n$')
s=s.replace('symmetric group\n$\\mathcal S_n$', 'symmetric group\n$S_n$')
s=s.replace(r'are self-adjoint, satisfy $[J_z,J_\pm]',r'have self-adjoint $J_x,J_y,J_z$ and $J_-=J_+^*$, satisfy $[J_z,J_\pm]')
s=dep(s,'thm-sine-and-cosine-addition-formulas')
s=s.replace('[F7] Sine and cosine are differentiable', '[F7] The sine and cosine addition identities hold ([[thm-sine-and-cosine-addition-formulas]]). Sine and cosine are differentiable')
write(i,s)
i='thm-nrqm-orbital-and-spin-tensor-spin-composition';s=read(i)
s=s.replace(r'\}=\max\bigl(0,\ \min(s,M+t)-\max(-s,M-t)+1\bigr)',r'\}=\begin{cases}\max\bigl(0,\ \min(s,M+t)-\max(-s,M-t)+1\bigr),&M-(s+t)\in\mathbb Z,\\0,&M-(s+t)\notin\mathbb Z.\end{cases}')
s=s.replace(r'this number equals $1$ for $|s-t|\le M\le s+t$ and $0$ otherwise',r'this number equals $1$ when $M-(s+t)\in\mathbb Z$ and $|s-t|\le M\le s+t$, and equals $0$ otherwise')
s=s.replace('the displayed closed form for $N(M)$ follows by counting the integer interval',r'all sums $m+n$ lie in $s+t+\mathbb Z$, so $N(M)=0$ off that lattice. On the lattice, the interval endpoints lie in the same unit-spaced lattice $L_s$; the displayed closed form follows by counting the interval')
s=s.replace('and otherwise contributes one element per integer','and otherwise contributes one element per unit lattice step')
a=s.index('2.2 [The differing count]');b=s.index('\n\n3.1',a)
s=s[:a]+r'''2.2 [The parity-qualified difference] Restrict now to $M\ge0$. If $M-(s+t)\notin\mathbb Z$, neither $M$ nor $M+1$ is a weight and both counts are zero by step 1.2. On the compatible lattice, exchange the factors if necessary to suppose $s\ge t$. Counting the interval in step 1.2 gives $N(M)=\min(2t+1,s+t-M+1)$ for $0\le M\le s+t$, and $N(M)=0$ for $M>s+t$. Therefore $N(M)-N(M+1)=0$ on the plateau $0\le M<s-t$, equals one for $s-t\le M\le s+t$, and is zero above $s+t$, including the upper endpoint where $N(s+t)=1$ and $N(s+t+1)=0$. Restoring factor symmetry gives precisely the admissible lattice points in $[|s-t|,s+t]$. [step 1.2, F1, algebra]'''+s[b:]
s=s.replace(r'which by step 2.2 is $1$ for $|s-t|\le M\le s+t$ and $0$ otherwise',r'which by step 2.2 is $1$ precisely for $M\in\{|s-t|,|s-t|+1,\ldots,s+t\}$ and $0$ otherwise')
s=s.replace(r'$\#\{\nu:j_\nu\ge j\}$',r'$\#\{\nu:j_\nu-j\in\mathbb Z,\ j_\nu\ge j\}$').replace(r'$\#\{\nu:j_\nu>j\}$',r'$\#\{\nu:j_\nu-j\in\mathbb Z,\ j_\nu>j\}$')
s=s.replace('a block with parameter $j_\\nu\\ge j\\ge0$ contributes exactly one eigenvector', 'a block with parameter $j_\\nu\\ge j\\ge0$ and $j_\\nu-j\\in\\mathbb Z$ contributes exactly one eigenvector')
s=s.replace(r'and $J^{\mathrm{tot}}_ze^{(s)}_m=me^{(s)}_m$',r'and $J^{(s)}_ze^{(s)}_m=me^{(s)}_m$')
s=s.replace('[F2] For bounded operators', '[F2] All tensor identities below follow directly on the finite product basis, requiring no choice of an ambient Hilbert basis. For bounded operators')
write(i,s)
i='thm-nrqm-orbital-and-spin-tsirelson-bound';s=read(i)
a=s.index('while for $i\\ne j$ the two elementary tensors');b=s.index('therefore $\\langle',a)
s=s[:a]+images+s[b:]
s=s.replace(r'so $\|A_i\|=\|B_j\|=1$',r'so $\|A_i\|,\|B_j\|\le1$ (with equality on nonzero factor spaces)')
s=s.replace(r'$\|A_0A_1\|\le\|A_0\|\|A_1\|=1$',r'$\|A_0A_1\|\le\|A_0\|\|A_1\|\le1$')
write(i,s)
i='ex-nrqm-orbital-and-spin-example-coupled-triplet-and-singlet';s=read(i)
a=s.index(r'$J^{\mathrm{tot}}_zw_{1,0}=');b=s.index(r'; and $J^{\mathrm{tot}}_zw_{1,-1}',a)
s=s[:a]+r'''$J^{\mathrm{tot}}_z(e_+\otimes e_-)=(\tfrac12-\tfrac12)e_+\otimes e_-=0$ and $J^{\mathrm{tot}}_z(e_-\otimes e_+)=(-\tfrac12+\tfrac12)e_-\otimes e_+=0$, so $J^{\mathrm{tot}}_zw_{1,0}=0$'''+s[b:]
s=s.replace(r'$J^{\mathrm{tot}\,2}w_{1,1}=0+1+1=2w_{1,1}$',r'$J^{\mathrm{tot}\,2}w_{1,1}=(0+1^2+1)w_{1,1}=2w_{1,1}$')
write(i,s)
i='ex-nrqm-orbital-and-spin-example-spin-singlet-chsh';s=read(i)
a=s.index('the nine tensors');b=s.index(' ([[lem-nrqm-composites-hilbert-tensor-construction]]',a)
s=s[:a]+r'the four elementary tensors $e_\pm\otimes e_\pm$ form an orthonormal basis'+s[b:]
a=s.index('For $i\\ne j$, each of');b=s.index('Therefore $\\langle',a)
s=s[:a]+images+s[b:]
write(i,s)
i='thm-nrqm-magnetic-and-detection-conserved-spectral-probability-laws';s=read(i)
s=s.replace(r'\bigl(K+\frac{i\hbar n}{t}\bigr)^{-1}',r'\bigl(K-\frac{i\hbar n}{t}\bigr)^{-1}')
write(i,s)
i='thm-nrqm-magnetic-and-detection-coherent-versus-mixed-bin-laws';s=read(i)
s=dep(s,'cor-cauchy-schwarz-inequality-for-l-two')
a=s.index('In particular, if $a\\perp b$');b=s.index('\n\n(d)',a)
s=s[:a]+r'''Equality $p_{\mathrm{coh}}(B)=p_{\mathrm{mix}}(B)$ for every measurable bin holds exactly when $2\operatorname{Re}(a\overline b)=c(D)(|a|^2+|b|^2)$ almost everywhere. In particular, if $a\perp b$ then $c(D)=0$ and the signed difference is $c(B)$, so orthogonality alone does not imply equality on each bin. If $b=a$ then equality holds on every bin. Coherence of the preparation changes the bin law according to the amplitudes and their actual normalization.'''+s[b:]
s=s.replace('If $B\\in\\mathcal A$ has finite measure and','The reduced weight $\\rho=\\operatorname{Tr}_KT_{\\Psi,\\Psi}$ is defined even when $\\Psi=0$, with $\\operatorname{tr}\\rho=\\|\\Psi\\|^2$. If $\\Psi\\ne0$, $B\\in\\mathcal A$ has finite measure and')
s=s.replace('reduced weight $\\rho=\\operatorname{Tr}_KT_{\\Psi,\\Psi}$ is','reduced weight $\\rho$ is')
s=s.replace('the marker overlap contracts the cross\nterm, which vanishes identically', 'the marker overlap bounds the complex cross coefficient in modulus (its phase may rotate the real interference contribution); that contribution vanishes identically')
s=s.replace('leaving the incoherent\nweight.','leaving the incoherent\nweight. If $\\Psi=0$, no normalized law is defined.')
s=s.replace('[[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]], [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]','[[cor-cauchy-schwarz-inequality-for-l-two]], [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]], [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]')
a=s.index('If $a\\perp b$ then $c\\equiv0$');b=s.index(' If $b=a$',a)
s=s[:a]+r'''The signed difference is the integral over $B$ of the integrable real function $[2\operatorname{Re}(a\overline b)-c(D)(|a|^2+|b|^2)]/[2(1+c(D))]$. Its integral vanishes on every measurable bin exactly when this density is zero almost everywhere: otherwise one of its positive or negative level sets has a strictly signed integral. This proves the stated all-bin criterion. If $a\perp b$, only $c(D)=0$ follows, giving difference $c(B)$. For example $a=1$, $b=e^{2\pi ix}$ on $[0,1)$ are orthogonal unit vectors, but the real cross density $\cos(2\pi x)$ does not vanish on every bin.'''+s[b:]
s=s.replace('The contraction $|\\langle e_1,e_2\\rangle|\\le1$ is [F3];','The bound $|\\langle e_1,e_2\\rangle|\\le1$ bounds the complex cross coefficient by $|\\alpha\\beta|$, while its phase need not contract the real interference part; this is [F3]. When $\\Psi=0$, the raw weight remains defined and has zero trace, so normalization is omitted;')
write(i,s)
i='ex-nrqm-magnetic-and-detection-finite-dark-bin-probability';s=read(i).replace(r'\frac{2\pi^2}',r'\frac{4\pi^2}');write(i,s)
i='thm-nrqm-magnetic-and-detection-conditional-stern-gerlach-force';s=read(i)
for d in ['thm-tonelli-theorem-for-sigma-finite-product-spaces','lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group']:s=dep(s,d)
s=s.replace(r'$\int_{\mathbb R\setminus N}|u_0^+(x_1)|^2\,dx_1=0$',r'$\int_{\mathbb R\setminus N}\eta_+(x_1)\,dx_1=0$, where $\eta_+(x_1):=\int_{\mathbb R^2}|u_0^+(x_1,x_2,x_3)|^2\,dx_2\,dx_3$ is the first-coordinate marginal density')
s=s.replace('an absolutely convergent integral of a real-valued function odd in $\\xi_1$, hence a real number','an absolutely convergent integral of a real-valued function, hence a real number (Cauchy–Schwarz bounds it by $\\|P_xw\\|_2\\|K_0w\\|_2$; no parity of $|\\mathcal F_2w|^2$ is assumed)')
s=s.replace('## Proof',r'''[F9] For self-adjoint $K$, the spectral unitary group preserves $D(K)$, commutes with $K$ there and has derivative $-iK/\hbar$ for initial vectors in $D(K)$. Tonelli on the sigma-finite product $\mathbb R\times\mathbb R^2$ defines the nonnegative marginal $\eta_+$ and gives $\int\eta_+=\|u_0^+\|_2^2$ ([[lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

## Proof''')
a=s.index('2.2 [Applying the Ehrenfest identity]');b=s.index('\n\n3.1',a)
s=s[:a]+r'''2.2 [Graph differentiability for the full stated domain] For $w\in W^{2,2}$, the Fourier inequality $\xi_1^2\le1+|\xi|^4$ and Plancherel [F5] give $\|P_xw\|\le C(\|K_0w\|+\|w\|)$. Since $K_\pm=K_0+V_\pm$ with bounded $V_\pm$, it follows componentwise that $\|P_xu\|\le C'(\|Ku\|+\|u\|)$ on $D(K)$, so $P_x$ is continuous from the $K$ graph norm into $\mathcal H$. If $u_0\in D(K^2)$, [F9] applied both to $u_0$ and to $Ku_0\in D(K)$ makes $u(t)=U(t)u_0$ and $Ku(t)=U(t)Ku_0$ continuously differentiable in $\mathcal H$, with derivatives $-iKu(t)/\hbar$ and $-iK^2u(t)/\hbar$. Thus $u(t)$ is $C^1$ in the $K$ graph norm, and applying the graph-continuous map $P_x$ yields $\frac d{dt}P_xu(t)=-iP_xKu(t)/\hbar$. The domain inclusions $u(t),Ku(t)\in D(K)\subseteq D(P_x)$ therefore meet [F4], which gives $f(t)=\langle P_xu(t),u(t)\rangle\in C^1$ and $f'(t)=-2\operatorname{Im}\langle P_xu(t),Ku(t)\rangle/\hbar$ without weakening $D(K^2)$. [given, step 1.1, F1, F4, F5, F9, algebra]'''+s[b:]
a=s.index('4.1 [Constant-gradient preparation]');b=s.index('\n\n5.1',a)
s=s[:a]+r'''4.1 [Constant-gradient preparation in three dimensions] Under (c), $u_0=(u_0^+,0)$ and the marginal $\eta_+(x_1)$ of [F9] satisfies $\int\eta_+=\|u_0\|^2=1$ and vanishes in integral off $N$. Tonelli and boundedness of $B_z'$ give $\langle S_zB_z'(Q_x)u_0,u_0\rangle=\frac\hbar2\int_{\mathbb R}B_z'(x_1)\eta_+(x_1)dx_1=\frac\hbar2G\int_N\eta_+=\frac\hbar2G$. By step 3.1 at preparation time $t=0$, $f'(0)=\gamma_s\hbar G/2$. The general force formula retains the later-time dependence of the marginal and field gradient. [given, step 3.1, F9, algebra]'''+s[b:]
write(i,s)
print('Applied nine focused consumer repairs; batch35 suppliers untouched')
