from pathlib import Path
import json,re,yaml
r=Path('physics');out=r/'research/physics-cm-qm-gr-79-2026-10-11-qm-composites-repair';changed=set(json.loads((out/'changed.json').read_text()))
def read(i): return (r/'items'/f'{i}.md').read_text()
def write(i,s): (r/'items'/f'{i}.md').write_text(s);changed.add(i)
def dep(s,d):
 if d not in yaml.safe_load(re.split(r'^---\s*$',s,flags=re.M)[1])['deps']:s=s.replace('deps: [','deps: ['+d+', ',1).replace('dependency_roles:\n','dependency_roles:\n  '+d+': mathematical-premise\n',1)
 return s
i='lem-nrqm-composites-density-and-scalar-spectral-probability';s=read(i)
s=s.replace('If $(u_n)_{n\\ge1}$ is an orthonormal family','If $(u_n)_{n\\in J}$ is a finite or countable orthonormal family, with $J$ a finite initial segment of the positive integers or all positive integers,')
s=s.replace('then the series $\\rho:=','then the sum $\\rho:=',1).replace('when an eigenspace has dimension at least two','when a positive eigenspace has dimension at least two')
s=s.replace('so it converges in operator norm to a trace-class operator $\\rho$ with $\\|\\rho\\|_1\\le\\sum_nw_n=1$ by [F1]','and its trace norms sum to one by [F1]. Completeness of trace class [F2] therefore makes its partial sums converge in trace norm to a trace-class operator $\\rho$ with $\\|\\rho\\|_1\\le1$; this also gives operator-norm convergence')
s=s.replace(r'$T_{u_n,u_n}E(B)=T_{E(B)u_n,u_n}$',r'$T_{u_n,u_n}E(B)=T_{u_n,E(B)u_n}$')
s=s.replace(r'\operatorname{tr}(T_{E(B)u_n,u_n})=\sum_nw_n\langle E(B)u_n,u_n\rangle',r'\operatorname{tr}(T_{u_n,E(B)u_n})=\sum_nw_n\langle u_n,E(B)u_n\rangle')
s=s.replace('eigenvalues $w_n>0$ enumerated by [F3]','eigenvalues $w_n>0$ indexed by a finite initial segment or the positive integers as appropriate and enumerated by [F3]')
s=s.replace('listing the vectors of all these bases in one sequence','using Countable Choice to select the finite bases and listing their vectors in a finite or countable sequence')
s=s.replace('and [F4] gives $\\operatorname{tr}\\rho=\\sum_nw_n=\\|\\rho\\|_1=1$.','and [F4] gives $\\operatorname{tr}\\rho=\\sum_nw_n=\\|\\rho\\|_1=1$. Their rank-one trace norms sum to one by [F1], so the partial sums also converge in trace norm by completeness [F2]; that limit equals $\\rho$ because both limits agree in operator norm.')
s=s.replace('[given, F1, F3, F4, algebra]','[given, F1, F2, F3, F4, choose, algebra]',1)
write(i,s)
i='lem-nrqm-composites-nuclear-bounded-cyclicity';s=dep(read(i),'thm-hilbert-adjoint-properties')
s=s.replace('[F5] The Hilbert adjoint satisfies','[F5] Bounded adjoints obey $\\|B^*\\|=\\|B\\|$ ([[thm-hilbert-adjoint-properties]]). The Hilbert adjoint satisfies')
a=s.index('4.1 [Cyclicity');s=s[:a]+r'''4.1 [Right multiplication and cyclicity] By step 1.1, $T_nB=\sum_{j\le n}T_{u_j,B^*v_j}$, and $\sum_j\|u_j\|\|B^*v_j\|\le\|B\|\sum_j\|u_j\|\|v_j\|<\infty$ by [F5]. Exactly as in step 2.1, trace-norm completeness gives convergence of this series to $TB$, since its operator-norm limit is $TB$. Trace continuity and the rank-one trace formula therefore give $\operatorname{tr}(TB)=\sum_j\langle u_j,B^*v_j\rangle$ with absolute convergence. Each summand equals $\langle Bu_j,v_j\rangle$ by the adjoint identity, so step 3.1 gives $\operatorname{tr}(TB)=\operatorname{tr}(BT)$ for the original arbitrary nuclear representation. Every trace-class operator has such a representation by [F2]; the stated rank-one trace identity is [F1]. Only bounded multipliers were used. [step 1.1, step 2.1, step 3.1, F1, F2, F3, F4, F5, algebra] ∎
'''
write(i,s)
i='lem-nrqm-composites-countable-kraus-normalization';s=dep(read(i),'lem-nuclear-series-characterizes-trace-norm')
a=s.index('3.1 [Linear extension]');b=s.index('\n\n4.1',a)
s=s[:a]+r'''3.1 [Linear extension by nuclear convergence] For rank-one input, $M_aT_{u,v}M_a^*=T_{M_au,M_av}$ by [F2]. Step 1.1 and Cauchy–Schwarz give $\sum_a\|M_au\|\|M_av\|\le\|u\|\|v\|$. Thus for a nuclear input $T=\sum_jT_{u_j,v_j}$ the double series of Kraus rank-one images is absolutely summable in trace norm, with total norm at most $\sum_j\|u_j\|\|v_j\|$. Its sum is the trace-norm limit of $\Phi_N(T)=\sum_{a\le N}M_aTM_a^*$, by interchanging absolutely convergent sums and the bounded two-sided ideal action. This limit depends only on $T$, so defines a linear map $\Phi$ extending the positive-input map of step 2.1. Taking the nuclear infimum ([[lem-nuclear-series-characterizes-trace-norm]]) gives the bound $\|\Phi(T)\|_1\le\|T\|_1$ for every input. For rank-one inputs, the trace sum is $\sum_a\langle M_au,M_av\rangle=\langle u,v\rangle$, by strong completeness and the adjoint identity; extending through the absolutely convergent nuclear sum proves $\operatorname{tr}\Phi(T)=\operatorname{tr}T$. The positive trace-class operators linearly span trace class by the self-adjoint real/imaginary and positive/negative spectral decompositions in [F4], so no other linear extension agreeing with step 2.1 is possible. [step 1.1, step 2.1, F2, F3, F4, algebra]'''+s[b:]
write(i,s)
i='lem-nrqm-composites-general-trace-class-instrument-and-effect-duality';s=read(i)
s=s.replace('because both factors are positive.','because the positive spectral rank-one expansion of $J_B(T_{x,x})$ expresses this trace as a sum of nonnegative numbers $w_n\\langle Au_n,u_n\\rangle$.')
a=s.index('5.1 [Probabilities]');s=s[:a]+r'''5.1 [Probabilities] For a density operator $\rho=\sum_nw_nT_{u_n,u_n}$, step 2.1 gives $p(B)=\operatorname{tr}(J_B(\rho))=\operatorname{tr}(\rho F_B)=\sum_nw_n\langle F_Bu_n,u_n\rangle$. Since $0\le F_B\le I$, each diagonal term lies in $[0,1]$ and $\sum_nw_n=1$, so $p(B)\in[0,1]$. Trace-norm additivity of $J$ and trace continuity imply countable additivity of $p$, and $p(X)=1$ by trace preservation. Positivity and normalization of $J_B(\rho)/p(B)$ hold precisely when $p(B)>0$. Whether the prescribed instrument is experimentally realized remains a separate model assumption. [step 2.1, step 3.1, F1, F2, F4, algebra] ∎
'''
write(i,s)
i='lem-nrqm-composites-finite-naimark-compression';s=read(i)
s=s.replace('a finite POVM on $H$: effects with $\\sum_aF_a=I$','a finite POVM on $H$: a finite family of bounded self-adjoint operators $0\\le F_a\\le I$ with $\\sum_aF_a=I$')
write(i,s)
(out/'changed.json').write_text(json.dumps(sorted(changed),indent=2)+'\n')
