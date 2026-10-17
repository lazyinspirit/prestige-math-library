from pathlib import Path
import hashlib,json,difflib
B=Path(__file__).resolve().parent;P58=Path('research/numerical-optimization-dynamics-2026-10-16-owner-step2-b58/proposal-r1');changes={}
def load(id):return Path('items/'+id+'.md').read_text()
def put(id,s):changes['items/'+id+'.md']=s
def rep(s,a,b):
 assert a in s,a
 return s.replace(a,b,1)
id='def-wolfe-and-strong-wolfe-conditions';s=(P58/'proposed/items'/ (id+'.md')).read_text();s=rep(s,'  - thm-chain-rule-for-total-derivatives\n','  - thm-chain-rule-for-total-derivatives\n  - thm-total-derivative-computes-directional-and-partial-derivatives\n  - thm-cauchy-schwarz-and-the-euclidean-norm\n');s=rep(s,'including $0$, the chain rule gives\n',r'''including $0$, the chain rule gives $\phi'(t)=Df(x+tp)p$.
By [[thm-total-derivative-computes-directional-and-partial-derivatives]],
the matrix of $Df$ is the Jacobian, whose scalar-field row is the transpose
of the gradient. Hence
''');s=rep(s,'The Cauchy–Schwarz\ninequality ensures', 'The Cauchy–Schwarz\ninequality [[thm-cauchy-schwarz-and-the-euclidean-norm]] ensures');put(id,s)
id='alg-nonlinear-conjugate-gradient-methods';s=load(id);s=rep(s,'The FR convergence statement below applies only to a run that obtains a strong Wolfe step at every iteration. The safeguarded PR+ convergence statement applies only to an infinite run of successful strong Wolfe steps.', 'The FR and safeguarded PR+ convergence statements concern infinite sequences following the respective recurrences and direction rules above, with a successful strong Wolfe update at every index; they do not concern an infinite execution of this finite-$K$ procedure. Each finite execution can realize only a prefix of such a sequence.');put(id,s)
id='thm-fletcher-reeves-liminf-gradient-under-strong-wolfe';s=load(id);s=rep(s,'Consider an infinite FR run of [[alg-nonlinear-conjugate-gradient-methods]] with',r'''Consider an infinite sequence following the FR recurrence
$d_0=-g_0$, $d_k=-g_k+(\|g_k\|_2^2/\|g_{k-1}\|_2^2)d_{k-1}$
from [[alg-nonlinear-conjugate-gradient-methods]], with''');s=rep(s,'The conclusion is a liminf statement;', 'This is a theorem about the infinite recurrence and successful updates, not\nan infinite execution of the finite-$K$ algorithm. The conclusion is a liminf statement;');put(id,s)
id='thm-safeguarded-pr-plus-gradient-norms-converge';s=load(id);s=rep(s,'Consider an infinite run of the safeguarded PR+ method in [[alg-nonlinear-conjugate-gradient-methods]], with every gradient nonzero and every accepted step a strong Wolfe step with $0<c_1<c_2<1/2$.',r'''Consider an infinite sequence following the PR+ coefficient recurrence and
candidate-or-restart direction selection of
[[alg-nonlinear-conjugate-gradient-methods]], with its fixed $\sigma,C>0$,
$d_0=-g_0$, every gradient nonzero, feasible updates
$x_{k+1}=x_k+t_kd_k$, and every $t_k$ a strong Wolfe step with
$0<c_1<c_2<1/2$.''');s=rep(s,'This claim is conditional on successful line searches at every iteration.', 'This claim concerns the infinite recurrence with successful updates at every\nindex, not an infinite execution of the finite-$K$ algorithm.');s=rep(s,'an infinite successful safeguarded PR+ run','an infinite successful safeguarded PR+ recurrence sequence');s=rep(s,'every search direction has descent angle at least $\\delta_{\\rm PR}$','every search direction has descent-angle cosine at least $\\delta_{\\rm PR}$');put(id,s)
id='thm-fr-and-raw-prplus-exact-line-search-match-linear-cg';s=load(id);s=rep(s,'  - def-euclidean-inner-product\n','  - def-euclidean-inner-product\n  - def-wolfe-and-strong-wolfe-conditions\n');s=rep(s,'## Proof\n',r'''[F6] [[def-wolfe-and-strong-wolfe-conditions]]: strong Wolfe requires Armijo decrease and an absolute directional-derivative bound, with $0<c_1<c_2<1/2$.

## Proof
''');s=rep(s,'Hence the next iterates and residuals agree.',r'''At this minimizer, $\phi'(t_k)=g_k^Td_k+t_kd_k^TAd_k=0$, so the strong curvature test holds. Also
$\phi(t_k)=\phi(0)+\tfrac12t_k g_k^Td_k\le\phi(0)+c_1t_k g_k^Td_k$
because $t_k g_k^Td_k<0$ and $c_1<1/2$. Thus [F6] and the exact-model branch accept this step; the same calculation applies at every preceding common minimizer invoked in step 1.2, starting with step 1.1, so the induction uses actual accepted steps. Hence the next iterates and residuals agree.''');s=rep(s,'[F2, F4, step 1.1, step 1.2, step 2.1, algebra]','[given, F2, F4, F6, step 1.1, step 1.2, step 2.1, algebra]');put(id,s)
id='ex-spd-quadratic-nonlinear-cg-matches-linear-cg';s=load(id);s=rep(s,'An exact-line-search FR run reaches',r'''Use exact-SPD-quadratic mode with outer budget $K\ge2$ and
$c_1=1/10$, $c_2=1/4$. An exact-line-search FR run reaches''');put(id,s)
id='ex-rosenbrock-fr-prplus-trace';s=load(id);s=rep(s,'  - alg-nonlinear-conjugate-gradient-methods\n','  - alg-nonlinear-conjugate-gradient-methods\n  - alg-bracketing-zoom-strong-wolfe-search\n');start=s.index('## Example');s=s[:start]+r'''## Example

For the Rosenbrock function $f(x,y)=(1-x)^2+100(y-x^2)^2$, take $x_0=(-6/5,1)$ and $d_0=-g_0$. With $c_1=1/1000$, $c_2=49/100$, bounded search budgets $E\ge1$, $Z\ge10$, and outer budget $K\ge2$, the first accepted step is $t_0=1/1024$. Its FR and PR+ coefficients differ. The PR+ candidate ascends, so the safeguarded method restarts; for definiteness take $\sigma=1/2$ and $C=2$.

## Facts & Assumptions

**Given:** The function, start and parameters in the Example, with exact arithmetic.

[F1] [[alg-nonlinear-conjugate-gradient-methods]]: $d_0=-g_0$; FR uses $\beta_0^{\rm FR}=\|g_1\|_2^2/\|g_0\|_2^2$, whereas the PR+ candidate uses $\beta_0^{\rm PR+}=\max\{0,g_1^T(g_1-g_0)/\|g_0\|_2^2\}$; a failed descent or norm test resets it to $-g_1$.

[F2] [[def-wolfe-and-strong-wolfe-conditions]]: strong Wolfe requires Armijo decrease and $|\phi'(t)|\le c_2|\phi'(0)|$.

[F3] [[alg-bracketing-zoom-strong-wolfe-search]]: the first expansion trial is $1$; an Armijo failure calls zoom with endpoints $(0,1)$, whose midpoint trials halve the positive endpoint while the same failure persists.

## Verification

**Given:** The objective, initial point and budgets of the Example.

1.1 Differentiation gives $g_0=(-1078/5,-88)$, $d_0=(1078/5,88)$, $f(x_0)=121/5$, and $\phi'(0)=-G_0$ with $G_0=1{,}355{,}684/25=54{,}227.36$. At a parameter $t$, write $u=-6/5+(1078/5)t$, $v=1+88t$, and $r=v-u^2$. Then $\phi(t)=(1-u)^2+100r^2$ and $\phi'(t)=(-400ur+2(u-1))(1078/5)+200r(88)$. [given, F1, algebra]

1.2 Exact substitution into step 1.1 gives the following integer lower bounds for $\phi(2^{-j})$:

| $j$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| lower bound | 210482437168 | 12810991198 | 758614013 | 42388850 | 2078788 | 72456 | 543 | 211 | 149 | 35 |

Each lower bound exceeds $121/5$, whereas every positive-trial Armijo right side is below $121/5$. Thus the initial trial fails Armijo and the first nine zoom trials fail it as well. By [F3], $a=0$ remains fixed and the tenth zoom trial is $t_0=2^{-10}=1/1024$. [given, F3, step 1.1, algebra]

2.1 At this trial, $x_1=(-2533/2560,139/128)$ and $r=700711/6553600$. Exactly,
$$f(x_1)=\frac{438182241277}{85899345920}<\frac{511}{100},\qquad
 g_1=\left(\frac{1608013539}{41943040},\frac{700711}{32768}\right),\qquad
 h:=g_1^Td_0=\frac{1064039515121}{104857600}.$$
The Armijo right side is $121/5-G_0/(1000\cdot1024)>24$, so Armijo holds. Also $0<h<10148<26571< (49/100)G_0=26571.4064$, so strong curvature holds. The search therefore returns this tenth midpoint. [given, F2, F3, step 1.1, step 1.2, algebra]

3.1 Put $G_1=\|g_1\|_2^2=3390155233212910921/1759218604441600$. Because $g_0=-d_0$ and $h>0$, the coefficients are $\beta_0^{\rm FR}=G_1/G_0$ and $\beta_0^{\rm PR+}=(G_1+h)/G_0>\beta_0^{\rm FR}$. The FR direction is $-g_1+(G_1/G_0)d_0$; the PR+ candidate is $d_1^{\rm cand}=-g_1+((G_1+h)/G_0)d_0$. Exact values in step 2.1 give $1927<G_1<1928$, $10147<h<10148$, and $54227<G_0<54228$. Hence
$$g_1^Td_1^{\rm cand}=-G_1+\frac{(G_1+h)h}{G_0}>-1928+\frac{(1927+10147)10147}{54228}>331>0.$$
It fails the descent safeguard for every $\sigma>0$. Thus the actual selected PR+ direction is $d_1=-g_1$ and its restart flag is true; the ascending candidate is not the selected direction. [given, F1, step 2.1, algebra]

4.1 For comparison, the originally displayed trial $\widehat t=1/1000$ is also a mathematically valid strong Wolfe step, but is not an output of this dyadic search. It gives $\widehat x=(-2461/2500,136/125)$, $\widehat r=743479/6250000$, $f(\widehat x)=5.35291158000896$, $\widehat g=(42.8715665664,23.791328)$, and $\widehat h=\widehat g^Td_0=11336.74661571584$. Its Armijo bound is $24.14577264$ and $|\widehat h|<11400<26571.4064$, verifying both inequalities directly. With $\widehat G=\|\widehat g\|_2^2$, its distinct coefficients are $\widehat G/G_0$ and $(\widehat G+\widehat h)/G_0$; these describe the hypothetical accepted update at $\widehat t$, rather than the actual bounded-search trace above. [given, F1, F2, step 1.1, algebra] ∎
''';put(id,s)
p='library/numerical-optimization-inverse-problems-and-uncertainty-quantification/nonlinear-conjugate-gradient-methods.md';s=Path(p).read_text();s=rep(s,'Strong Wolfe steps yield a strict FR descent bound and only the claimed gradient liminf result.', 'For infinite sequences following the stated recurrence and successful strong Wolfe updates, the FR descent bound yields only the claimed gradient liminf result.');s=rep(s,'The PR+ safeguard supplies a uniform angle bound and full gradient-norm convergence.', 'For such infinite successful recurrence sequences, the PR+ safeguard supplies a uniform angle bound and full gradient-norm convergence. These convergence statements do not assert an infinite execution of the finite-budget procedure.');changes[p]=s
rows=[]
for p,s in changes.items():
 old=Path(p).read_text()
 for pre,data in [('before',old),('proposed',s)]:
  q=B/pre/p;q.parent.mkdir(parents=True,exist_ok=True);q.write_text(data)
 q=B/'diffs'/Path(p).name;q.parent.mkdir(exist_ok=True);q.write_text(''.join(difflib.unified_diff(old.splitlines(True),s.splitlines(True),fromfile=p,tofile=p)))
 rows.append({'path':p,'before_sha256':hashlib.sha256(old.encode()).hexdigest(),'proposed_sha256':hashlib.sha256(s.encode()).hexdigest()})
(B/'proposal.json').write_text(json.dumps({'status':'READONLY_NOT_APPLIED','cycle':1,'files':rows,'shared_Wolfe_definition':'Merged with b58 proposal-r1; replaces only that shared path. Preserve all other b58 proposals and r2 refinements.','canonical_writes':False,'gates_run':False},indent=2)+'\n')
print('8 proposed paths; shared Wolfe merged, no canonical edits')
