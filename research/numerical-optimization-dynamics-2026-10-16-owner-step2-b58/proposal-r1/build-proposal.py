from pathlib import Path
import json,hashlib,difflib,re
B=Path(__file__).resolve().parent
changes={}
def load(id):return Path('items/'+id+'.md').read_text()
def put(id,s):changes['items/'+id+'.md']=s
def rep(s,a,b):
 assert a in s,a
 return s.replace(a,b,1)
id='def-wolfe-and-strong-wolfe-conditions';s=load(id)
s=rep(s,'Define the feasible ray\n$T_{x,p}:=\\{t\\ge0:x+tp\\in D\\}$ and, for $t\\in T_{x,p}$,\n$\\phi(t):=f(x+tp)$. Wherever $t$ is an interior point of $T_{x,p}$,\nthe chain rule gives',r'''Define the open parameter set $S_{x,p}:=\{t\in\mathbb R:x+tp\in D\}$,
which contains $0$, the feasible ray $T_{x,p}:=S_{x,p}\cap[0,\infty)$,
and $\phi(t):=f(x+tp)$ for $t\in S_{x,p}$. At every $t\in S_{x,p}$,
including $0$, the chain rule gives''')
put(id,s)
id='alg-bracketing-zoom-strong-wolfe-search';s=load(id);s=rep(s,'let $x\\in D$, and let $p\\in\\mathbb R^n$ satisfy\n$\\langle\\nabla f(x),p\\rangle<0$. Fix','let $x\\in D$, and let $p\\in\\mathbb R^n$ be arbitrary. Fix');s=rep(s,'Use the functions\n$\\phi(t)=f(x+tp)$ and $\\phi\'(t)=\\langle\\nabla f(x+tp),p\\rangle$ from','After the direction check passes, use the functions\n$\\phi(t)=f(x+tp)$ and $\\phi\'(t)=\\langle\\nabla f(x+tp),p\\rangle$ from');put(id,s)
id='alg-inexact-newton-krylov-with-descent-safeguard';s=load(id);s=rep(s,r'$v\mapsto(H(x)+\lambda I_nv)$',r'$v\mapsto(H(x)+\lambda I_n)v$');s=rep(s,r'$\bar\eta<1$',r'$0\le\bar\eta<1$');s=rep(s,'`no-descent-direction`, or `line-search-failure`.','`no-descent-direction`, or `line-search-failure`; in the last case also\nreturn the underlying line-search failure cause.');s=rep(s,'return $(x_k,\\texttt{line-search-failure})$ with\n   that failure status.','return $(x_k,\\texttt{line-search-failure},s)$, where $s$ is\n   the returned line-search failure cause.');put(id,s)
id='lem-inexact-newton-error-recurrence-under-lipschitz-jacobian';s=load(id);s=rep(s,'Let $U\\subseteq\\mathbb R^n$ be open,','Let $n\\ge1$, let $U\\subseteq\\mathbb R^n$ be open,');s=rep(s,'closed Euclidean ball $K=\\overline B_2(x_*,R)\\subseteq U$ is convex and','closed Euclidean ball $K=\\overline B_2(x_*,R)\\subseteq U$ with $R>0$ is convex and');put(id,s)
id='thm-inexact-newton-local-forcing-rates';s=load(id);s=rep(s,'Let $U\\subseteq\\mathbb R^n$ be open,','Let $n\\ge1$, let $U\\subseteq\\mathbb R^n$ be open,');s=rep(s,'on a closed ball about $x_*$ contained in $U$.','on a closed ball of positive radius about $x_*$ contained in $U$.');s=rep(s,'For $F=\\nabla f$, $J(x)=\\nabla^2 f(x)$, so the','For $F=\\nabla f$ with $f\\in C^2(U)$ (all ordered partial derivatives\nthrough order two exist and are continuous), $J(x)=\\nabla^2 f(x)$, so the');s=rep(s,'  - def-hessian-and-euclidean-critical-point\n','  - def-hessian-and-euclidean-critical-point\n  - thm-total-derivative-computes-directional-and-partial-derivatives\n  - thm-continuous-partial-derivatives-imply-total-differentiability\n  - thm-symmetry-of-higher-mixed-partials\n');s=rep(s,'## Proof\n',r'''[F4] [[thm-total-derivative-computes-directional-and-partial-derivatives]]: the matrix of a total derivative is the Jacobian, with column $j$ equal to the $j$th partial derivative.

[F5] [[thm-continuous-partial-derivatives-imply-total-differentiability]]: continuous coordinate partial derivatives on an open set give total differentiability.

[F6] [[thm-symmetry-of-higher-mixed-partials]]: for a $C^k$ scalar field, $k\ge2$, every iterated derivative of order $k$ is unchanged by permutations of its coordinate differentiations.

## Proof
''');s=rep(s,'In the specialization $F=\\nabla f$, [F3] identifies $J(x)$ with the Hessian in the stated convention.','In the specialization $F=\\nabla f$ with $f\\in C^2(U)$, each $F_i=\\partial_i f$ has continuous first partials. By [F5] it is totally differentiable, and by [F4] the matrix of $DF$ has entries $J_{ij}=\\partial_j(\\partial_i f)$. By [F6] these equal $\\partial_i(\\partial_j f)$, the entries of the Hessian in [F3]. Thus $J(x)=\\nabla^2f(x)$.');s=rep(s,'[given, F3, step 2.1, algebra] ∎','[given, F3, F4, F5, F6, step 2.1, algebra] ∎');put(id,s)
# Two-dimensional exact Krylov choices are specified rather than presumed.
krylov=r'''Use the deterministic Krylov procedure which, for a two-dimensional operator
$A$ and right-hand side $b$, forms $V=[b\ Ab]$ when $M\ge2$.
If $V$ and $V^TAV$ are invertible, it returns
$p=V(V^TAV)^{-1}V^Tb$ with iteration count $m=2$; otherwise it returns
`no-candidate`. On other input dimensions or budgets below two it returns
`no-candidate`. Its candidate lies in $K_2(A,b)$ by construction.
'''
id='ex-rosenbrock-newton-step-satisfies-strong-wolfe';s=load(id);s=rep(s,'strong Wolfe inequalities, so the bracketing search returns $t=1$.','strong Wolfe inequalities, so the bracketing search returns $t=1$.\n\n'+krylov+r'''Take $M\ge2$, $N\ge1$, $E,Z\ge1$, $J=0$, $\eta_k=\bar\eta=0$,
$\gamma=2$, and $\lambda_0=\lambda_{\max}=1$.
''');s=rep(s,'  - def-euclidean-inner-product\n','  - def-euclidean-inner-product\n  - def-krylov-subspace-of-a-matrix-and-start-vector\n');s=rep(s,'1.2 Solving',r'''1.2 With $b=-g$, direct calculation gives $\det[b\ Hb]=-14221856/5\ne0$ and $\det H=35600\ne0$. Thus $V$ and $V^THV$ are invertible. The specified solver returns $p\in K_2(H,b)$ with $V^T(Hp-b)=0$; since $V$ is invertible, $Hp=b$. Solving''');put(id,s)
id='ex-rosenbrock-indefinite-hessian-requires-descent-safeguard';s=load(id);s=rep(s,'return failure before finding a step.','return failure before finding a step.\n\n'+krylov+r'''Take $M\ge2$, $N\ge1$, $E,Z\ge1$, $\eta_k=\bar\eta=0$,
$\gamma=2$, $c_1=1/10000$, and $c_2=2/5$, with the shift parameters below.
''');s=rep(s,'  - def-euclidean-inner-product\n','  - def-euclidean-inner-product\n  - def-krylov-subspace-of-a-matrix-and-start-vector\n');s=rep(s,'2.1 The unshifted Newton solve',r'''2.1 For $b=-g=(2,-2)$ and either $A=H$ or $A=H+3I_2$, $\det[b\ Ab]=-808\ne0$, and both operators are invertible. Hence the specified projected solver returns the exact solution $Ap=b$ in $K_2(A,b)$, using $m=2\le M$. The unshifted Newton solve''');put(id,s)
id='ex-inexact-newton-forcing-tolerance-cost-and-rate';s=load(id).replace(r'\tau',r'\omega');s=rep(s,'quadratic outer error bound for $0<|x_0|\\le c_2$.',r'''quadratic outer error bound for $0<|x_0|\le c_2$.

For each finite horizon $N\ge1$, let $j_k$ be the least integer with
$\omega^{j_k}\le\eta_k$ on the first $N$ steps of the displayed recurrence,
and choose the single inner budget $M_N\ge\max_{0\le k<N}j_k$.
Use $M=M_N$, $\bar\eta=c_2$, $\sigma=1/2$, $J=0$, $E,Z\ge1$,
$\gamma=2$, and $\lambda_0=\lambda_{\max}=1$.
The deterministic solver on the scalar operator $A=1$ starts at zero and
performs the displayed iteration until $|p+x|\le\tau$, where $\tau$ is its
absolute requested residual tolerance, or until $M$ iterations are used;
it returns that scalar candidate and its iteration count. It returns
`no-candidate` for other operators. For $b=-x\ne0$ and any $m\ge1$,
$K_m(1,b)=\mathbb R$, so every returned candidate meets the Krylov input
contract (and $p^{(0)}=0\in K_0$).
This realizes every finite prefix. The infinite recurrence and its rate
claim do not assert realization by one fixed finite inner budget.
''');s=rep(s,'  - def-hessian-and-euclidean-critical-point\n','  - def-hessian-and-euclidean-critical-point\n  - def-krylov-subspace-of-a-matrix-and-start-vector\n');s=rep(s,'## Verification\n',r'''[F7] [[def-krylov-subspace-of-a-matrix-and-start-vector]]: $K_0(A,b)=\{0\}$ and $K_m(A,b)=\operatorname{span}\{b,Ab,\ldots,A^{m-1}b\}$ for $m\ge1$.

## Verification
''');s=rep(s,'so the required inner iteration count cannot decrease.','so the required inner iteration count cannot decrease. For any finite $N$, all $j_k$ on its first $N$ nonzero iterates are finite, so their finite maximum defines $M_N$. The specified solver therefore reaches its requested residual tolerance before its budget on that prefix, and [F7] verifies its scalar Krylov membership.');s=rep(s,'[given, F6, choose, algebra]','[given, F6, F7, choose, algebra]');put(id,s)
id='ex-trust-region-newton-cauchy-truncated-cg';s=load(id);s=rep(s,'steps coincide and have smaller predicted reduction.','steps coincide and have smaller predicted reduction.\nFor the inexact-Newton call take $M\\ge2$, $N\\ge1$,\n$\\eta_k=\\bar\\eta=0$, $\\sigma=1/2$, $J=0$, $E,Z\\ge1$,\n$\\gamma=2$, and $\\lambda_0=\\lambda_{\\max}=1$; use the deterministic\ntwo-dimensional projected solver specified in step 1.1 with iteration count\n$m=2$, returning `no-candidate` if its two-dimensional basis or projected matrix is singular\nor if $M<2$.');put(id,s)
id='thm-nonlinear-cg-finite-budget-terminates';s=load(id);s=rep(s,'  - alg-bracketing-zoom-strong-wolfe-search\n','  - alg-bracketing-zoom-strong-wolfe-search\n  - lem-bracketing-zoom-finite-budget-checked-return\n');s=s.replace('[F2] [[alg-bracketing-zoom-strong-wolfe-search]]: the expansion loop uses at most $E$ trials.','[F2] [[lem-bracketing-zoom-finite-budget-checked-return]]: a bounded call uses at most $E$ expansion trial evaluations.').replace('[F3] [[alg-bracketing-zoom-strong-wolfe-search]]: a called zoom loop uses at most $Z$ trials.','[F3] [[lem-bracketing-zoom-finite-budget-checked-return]]: at most one zoom call occurs, with at most $Z$ trial evaluations.').replace('[F4] [[alg-bracketing-zoom-strong-wolfe-search]]: each trial evaluates $\\phi(t)$ and $\\phi\'(t)$, and a bounded call returns either a checked step or a failure status.','[F4] [[lem-bracketing-zoom-finite-budget-checked-return]]: each evaluated trial evaluates $\\phi(t)$ and $\\phi\'(t)$, and a bounded call terminates with either a checked positive feasible strong Wolfe step or a failure status.');put(id,s)
# New proved intermediate results, not additional methods.
def new(id,title,deps,body):
 return f'''---\nid: {id}\nkind: lemma\ntitle: "{title}"\nstatus: draft\norigin: pipeline\npipeline_run: numerical-optimization-dynamics-2026-10-16\ndeps:\n'''+''.join('  - '+d+'\n' for d in deps)+'''proof_strategy: direct\nprovenance:\n  statement: ai-generated\n  proof: ai-generated\nverification:\n  precheck: pending\nsources:\n  references: []\n---\n\n'''+body
id='lem-bracketing-zoom-finite-budget-checked-return'
put(id,new(id,'Bracketing and zoom terminate with a checked step or a failure',['alg-bracketing-zoom-strong-wolfe-search','def-wolfe-and-strong-wolfe-conditions'],r'''## Statement

Under the inputs of [[alg-bracketing-zoom-strong-wolfe-search]], assume all requested in-domain function and gradient evaluations terminate with real values and all prescribed comparisons are exact. The procedure terminates with its specified step or failure status. It makes at most $E$ expansion trial evaluations and at most one zoom call with at most $Z$ trial evaluations, hence at most $E+Z$ evaluated trial points. Each evaluates the objective and directional derivative at that point. Every returned step is positive, feasible, and satisfies both strong Wolfe inequalities. A domain-exit trial is not evaluated. The bound excludes the initial-point data and does not bound arithmetic work or guarantee success when a strong Wolfe step exists.

## Facts & Assumptions

**Given:** The input, evaluation and exact-comparison hypotheses of the Statement.

[F1] [[alg-bracketing-zoom-strong-wolfe-search]]: expansion starts at $a=0,t=1$, doubles $t$ only after setting $a=t$, and returns immediately after a zoom call; zoom uses midpoints and its prescribed endpoint updates, with finite budgets $E,Z$.

[F2] [[def-wolfe-and-strong-wolfe-conditions]]: a positive feasible step in a descent direction is strong Wolfe exactly when it satisfies the Armijo and absolute-curvature inequalities.

## Proof

**Given:** The hypotheses of the Statement.

1.1 The initial direction check either returns failure or establishes $\phi'(0)<0$. Expansion trial parameters are positive: initially $t=1$, and later they are positive doubles. Before each doubling, $0\le a<t$; hence both possible endpoint orders passed to zoom have distinct nonnegative endpoints, at least one positive. [given, F1, induction]

1.2 A midpoint of distinct nonnegative endpoints, at least one positive, is positive and strictly between them. Replacing $b$ by that midpoint preserves distinct nonnegative endpoints. In the other update, replacing $a$ by the midpoint, either retaining $b$ or first replacing $b$ by the old $a$, also preserves those properties. Thus every zoom trial is positive, even with reversed endpoint order. [F1, step 1.1, induction, algebra]

2.1 Before any trial evaluation the domain check either returns failure or verifies feasibility. In expansion, a return of a step occurs only after the Armijo-failure branch was bypassed and the strong curvature test passed. In zoom the same two tests precede every step return. Therefore [F2] and steps 1.1–1.2 prove every returned step has the asserted properties. [F1, F2, step 1.1, step 1.2]

3.1 Each expansion pass either returns, calls zoom and returns its output, or consumes one of at most $E$ passes. Thus at most one zoom is called. Each zoom pass either returns or consumes one of at most $Z$ passes. All evaluations terminate by hypothesis; after exhaustion the specified failure is returned. There are at most $E+Z$ evaluated trial points, with the objective and directional derivative evaluated at each; domain exits consume no trial evaluation. These finite counts prove termination but imply neither an arithmetic-work bound nor successful discovery of an existing step. [given, F1, step 2.1, counting] ∎
'''))
id='lem-inexact-newton-krylov-finite-budget-checked-return'
put(id,new(id,'Safeguarded inexact Newton has a finite checked-return bound',['alg-inexact-newton-krylov-with-descent-safeguard','lem-bracketing-zoom-finite-budget-checked-return'],r'''## Statement

Under the inputs of [[alg-inexact-newton-krylov-with-descent-safeguard]], assume every call of the supplied Krylov procedure terminates within its budget of $M$ inner iterations, all requested in-domain function, gradient and Hessian-action evaluations terminate with real values, and the prescribed comparisons are exact. The algorithm terminates with its specified status, retaining the underlying search failure cause when applicable. Every iterate belongs to $U$. There are at most $N$ accepted updates, $N(J+1)$ Krylov calls, $N(J+1)M$ inner iterations, $N$ line-search calls, and $N(E+Z)$ evaluated line-search trial points. Separately, at most $N+1$ outer-iterate gradient evaluations and $N(J+1)$ recomputed candidate residuals occur. Each residual uses one Hessian action outside the Krylov solver. These counts do not bound the number of Hessian actions used internally by an arbitrary supplied solver, total arithmetic work, or convergence. In exact arithmetic the `no-descent-direction` branch is unreachable under the stated inputs.

## Facts & Assumptions

**Given:** The hypotheses and budgets of the Statement.

[F1] [[alg-inexact-newton-krylov-with-descent-safeguard]]: the outer loop ranges from $0$ through $N$; it returns at a stationary iterate or at $k=N$ before solving, and otherwise makes at most $J+1$ solver attempts, recomputes each candidate residual, checks descent or the fallback, and calls the bounded line search once before an update.

[F2] [[lem-bracketing-zoom-finite-budget-checked-return]]: each line-search call terminates, uses at most $E+Z$ evaluated trial points, and returns only a positive feasible checked strong Wolfe step or a failure status.

## Proof

**Given:** The hypotheses of the Statement.

1.1 Initially $x_0\in U$. At any nonstationary iteration the supplied solver calls and candidate residual evaluations terminate by assumption; the loop has at most $J+1$ attempts. Every accepted candidate satisfies $g_k^Tp<-\sigma\|g_k\|_2\|p\|_2<0$, since a candidate with $p=0$ cannot pass. If none passes, $p=-g_k$ gives $g_k^Tp=-\|g_k\|_2^2<-\sigma\|g_k\|_2^2$ because $g_k\ne0$ and $0<\sigma<1$. Thus a strict descent direction is always available and the fallback failure cannot occur in exact arithmetic. [given, F1, algebra]

1.2 By [F2] the ensuing search terminates. On failure the algorithm returns its last valid iterate, its line-search-failure status and the search cause. On success feasibility of the checked step gives $x_{k+1}\in U$. Induction proves feasibility of every iterate. [F1, F2, step 1.1, induction]

2.1 A solve or update can occur only for $k<N$. Thus at most $N$ updates and searches and $N(J+1)$ solver calls occur; each uses at most $M$ inner iterations. At most one candidate residual is recomputed per call, each by one Hessian action plus the displayed shift and vector arithmetic. By [F2] there are at most $N(E+Z)$ evaluated search trials. The outer loop computes its gradient once per visited index, at most $N+1$ times, separately from line-search gradient evaluations. [given, F1, F2, step 1.2, counting]

3.1 Every inner call and search terminates and every loop has its finite stated bound. Hence the algorithm reaches a specified return no later than its $k=N$ check. Steps 1.1–2.1 prove the asserted statuses, feasibility and counts; they do not specify the internal Hessian-action count of the arbitrary solver or a convergence theorem. [given, F1, step 1.1, step 1.2, step 2.1] ∎
'''))
p='library/numerical-optimization-inverse-problems-and-uncertainty-quantification/nonconvex-line-search-and-inexact-newton-methods.md';s=Path(p).read_text();s=rep(s,'  - alg-bracketing-zoom-strong-wolfe-search\n','  - alg-bracketing-zoom-strong-wolfe-search\n  - lem-bracketing-zoom-finite-budget-checked-return\n');s=rep(s,'  - alg-inexact-newton-krylov-with-descent-safeguard\n','  - alg-inexact-newton-krylov-with-descent-safeguard\n  - lem-inexact-newton-krylov-finite-budget-checked-return\n');changes[p]=s
records=[]
for p,s in changes.items():
 src=Path(p);old=src.read_text() if src.exists() else None
 for prefix,data in [('before',old),('proposed',s)]:
  if data is not None:
   out=B/prefix/p;out.parent.mkdir(parents=True,exist_ok=True);out.write_text(data)
 diff=''.join(difflib.unified_diff((old or '').splitlines(True),s.splitlines(True),fromfile=p,tofile=p))
 out=B/'diffs'/Path(p).name;out.parent.mkdir(exist_ok=True);out.write_text(diff)
 records.append({'path':p,'exists_before':old is not None,'before_sha256':hashlib.sha256(old.encode()).hexdigest() if old is not None else None,'proposed_sha256':hashlib.sha256(s.encode()).hexdigest(),'diff':str(out.relative_to(B))})
(B/'proposal.json').write_text(json.dumps({'status':'READONLY_PROPOSAL_NOT_APPLIED','cycle':1,'files':records,'gates_run':False,'canonical_writes':False},indent=2)+'\n')
print(json.dumps({'files':len(records),'new_items':2,'directory':str(B)}))
