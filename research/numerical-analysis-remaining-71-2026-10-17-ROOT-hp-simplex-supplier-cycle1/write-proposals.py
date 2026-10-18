from pathlib import Path
import json
root=Path(__file__).parent
out=root/'proposed-items';out.mkdir(exist_ok=True)
S='https://www.math.purdue.edu/~shen7/sp_intro12/book.pdf'
J='https://jschoeberl.github.io/iFEM/pversion/hpfem.html'
proposals=[]
def add(id,kind,title,deps,body,src=S):
 front={'id':id,'kind':kind,'title':title,'status':'draft','origin':'pipeline','pipeline_run':'numerical-analysis-remaining-71-2026-10-17','deps':deps,'justified_by':[],'proof_strategy':'direct','provenance':{'statement':'ai-altered','proof':'ai-altered'},'sources':{'references':[{'title':'Shen–Tang, Spectral and High-Order Methods, §1.8' if src==S else 'Schöberl, p-version FEM, §30.4.2','url':src}]}}
 # JSON is valid YAML. These are proposed carriers, without acceptance or level metadata.
 (out/(id+'.md')).write_text('---\n'+json.dumps(front,indent=2)+'\n---\n\n'+body.strip()+'\n')
 proposals.append({'id':id,'kind':kind,'title':title,'deps':deps,'proposed_path':str(out/(id+'.md')),'disposition':'proposed-complete-local-proof-requires-owner-review'})
add('lem-hp-unweighted-legendre-derivative-tail','lemma','An ordinary derivative controls the Legendre tail with a factorial ratio',[
'lem-legendre-weighted-derivative-orthogonality-and-norm','cor-weierstrass-approximation-on-a-closed-interval','lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set','cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives','thm-cauchy-schwarz-in-an-inner-product-space','thm-first-fundamental-theorem-of-calculus-for-l-one','def-axiom-of-choice'],r'''
## Statement

Assume the Axiom of Choice. Write $\Pi_N$ for the ordinary $L^2(-1,1)$ Legendre projection. If $k\ge1$, $N\ge k-1$, and $f\in H^k(-1,1)$, then
$$\|f-\Pi_Nf\|_2\le\left(\frac{(N+1-k)!}{(N+1+k)!}\right)^{1/2}\|f^{(k)}\|_2.$$
For $k=0$ the corresponding estimate is the contraction estimate with factor one. For $n\ge k$, repeated derivative orthogonality is
$$\int_{-1}^1(1-x^2)^kP_n^{(k)}P_m^{(k)}=\frac{2}{2n+1}\frac{(n+k)!}{(n-k)!}\delta_{nm}.$$
No equivalence of coefficient-defined and ordinary Sobolev spaces is assumed.

## Facts & Assumptions

**Given:** Ordinary weak-derivative Sobolev spaces, the integers in the Statement, and the Axiom of Choice.

[F1] [[lem-legendre-weighted-derivative-orthogonality-and-norm]] proves Rodrigues orthogonality, leading degree, and $\|P_n\|_2^2=2/(2n+1)$.

[F2] [[cor-weierstrass-approximation-on-a-closed-interval]] and [[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]] imply polynomial density in $L^2(-1,1)$: approximate first by a smooth compactly supported function and then uniformly by a polynomial.

[F3] [[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]] gives absolutely continuous representatives on the closed interval for each derivative of an $H^k$ input through order $k-1$. The supplier assumes full Choice. Repeated integration by parts against a polynomial whose required endpoint derivatives vanish is therefore valid directly for these ordinary Sobolev inputs.

[F4] [[thm-cauchy-schwarz-in-an-inner-product-space]] gives Bessel's inequality by expanding the nonnegative norm of a vector minus its finite orthogonal projection. [[thm-first-fundamental-theorem-of-calculus-for-l-one]] supplies the one-dimensional Sobolev representatives used in integration by parts.

## Proof

1.1 Set $w_k=(1-x^2)^k$. The polynomial $D^k(w_kD^kP_n)$ has degree $n$. Every derivative of $w_k$ through order $k-1$ vanishes at both endpoints. For a polynomial $q$ of degree below $n$, two sets of $k$ integrations by parts therefore give $\int D^k(w_kD^kP_n)q=\int P_nD^k(w_kD^kq)=0$ by [F1], since the final polynomial has degree at most $\deg q<n$. Its leading coefficient is $(-1)^k(n+k)!/(n-k)!$ times the leading coefficient of $P_n$: differentiating $P_n$ first contributes $n!/(n-k)!$, multiplication by $w_k$ contributes $(-1)^k$, and the final derivative contributes $(n+k)!/n!$. Thus orthogonality and positive norms in [F1] identify $D^k(w_kD^kP_n)=(-1)^k\lambda_{n,k}P_n$, with $\lambda_{n,k}=(n+k)!/(n-k)!$. A further integration by parts gives the derivative-orthogonality formula, including zero derivatives when an index is below $k$. [F1, given, algebra]

2.1 Write $c_n=(f,P_n)/\|P_n\|_2^2$. The absolutely continuous derivative representatives of [F3] and the endpoint vanishing in step 1.1 permit $k$ successive integrations by parts and give $\int w_k f^{(k)}P_n^{(k)}=\lambda_{n,k}c_n\|P_n\|_2^2$. All integrals are finite by Cauchy–Schwarz, since the polynomial factors are bounded and the weak derivatives are in $L^2$. Apply Bessel's inequality [F4] to $w_k^{1/2}f^{(k)}$ and the orthogonal functions $w_k^{1/2}P_n^{(k)}$. It yields $\sum_{n\ge k}\lambda_{n,k}|c_n|^2\|P_n\|_2^2\le\int w_k|f^{(k)}|^2\le\|f^{(k)}\|_2^2$. [F3, F4, step 1.1, algebra]

3.1 Density [F2] and finite-projection minimality imply $\Pi_M f\to f$ in $L^2$: for a polynomial $q$ within $\varepsilon$ and $M\ge\deg q$, projection error is at most $\varepsilon$. Pythagoras then gives $\|f-\Pi_Nf\|_2^2=\sum_{n>N}|c_n|^2\|P_n\|_2^2$. Since $\lambda_{n,k}$ increases with $n\ge k$, step 2.1 bounds this sum by $\lambda_{N+1,k}^{-1}\|f^{(k)}\|_2^2$. Taking square roots proves the factorial estimate. At $k=0$ projection is contractive by the same finite Pythagoras identity. [F1, F2, step 2.1, algebra] ∎
''')
add('thm-hp-triangle-unweighted-smooth-approximation','theorem','Constructive ordinary Sobolev polynomial approximation on triangles',[
'lem-hp-unweighted-legendre-derivative-tail','thm-reference-simplex-sobolev-extension','cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn','thm-bramble-hilbert-on-reference-simplex','lem-smooth-density-on-reference-simplex','lem-shape-regular-affine-simplex-scaling','thm-first-fundamental-theorem-of-calculus-for-l-one','cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives','thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces','thm-cauchy-schwarz-in-an-inner-product-space','def-axiom-of-choice'],r'''
## Statement

Assume the Axiom of Choice. Let $T=\{(x,y):x,y>0,x+y<1\}$, integer $r\ge5$, $p\ge2r-4$, and $n=\lfloor p/2\rfloor$. Put
$$\eta_{n,r}:=\left(\frac{(n-r+3)!}{(n+r-5)!}\right)^{1/2}.$$
There is an explicitly constructed linear map $A_{p,r}:H^r(T)\to\mathbb P_p(T)$ satisfying
$$\|u-A_{p,r}u\|_{H^2(T)}\le C_r\eta_{n,r}|u|_{H^r(T)}.$$
Here $C_r$ is independent of $p$ and is the product of the fixed reference extension norm, the reference moment-projection constant, and the fixed tensor-integration constant proved below. For a shape-regular affine triangle $K$ of diameter $h_K$, the transported map obeys
$$\left(\sum_{j=0}^2h_K^{2j-2}|u-A_{K,p,r}u|_{H^j(K)}^2\right)^{1/2}\le C_{r,\gamma}\eta_{n,r}h_K^{r-1}|u|_{H^r(K)}.$$
In particular, for $p\ge4(r-2)$, $\eta_{n,r}\le(4/p)^{r-4}$. This is a conservative ordinary Sobolev rate with a loss of derivatives; no optimal $p^{-(r-1)}$ rate or useful analytic growth bound for $C_r$ is asserted.

## Facts & Assumptions

**Given:** The reference triangle, $r,p,n$ as above, ordinary $H^r$ regularity, and the Axiom of Choice.

[F1] [[lem-hp-unweighted-legendre-derivative-tail]] gives the factorial $L^2$ tail for an ordinary derivative.

[F2] [[thm-reference-simplex-sobolev-extension]] gives a bounded linear reference extension $E_r:H^r(T)\to H^r(\mathbb R^2)$; let $M_r$ denote its norm.

[F3] [[thm-bramble-hilbert-on-reference-simplex]] gives the unique linear moment polynomial $B_{r-1}u\in\mathbb P_{r-1}$ with $\|u-B_{r-1}u\|_{H^r(T)}\le B_r|u|_{H^r(T)}$.

[F4] [[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]], [[thm-first-fundamental-theorem-of-calculus-for-l-one]], [[thm-cauchy-schwarz-in-an-inner-product-space]], and [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] justify primitives and the tensor norm calculations. [[lem-smooth-density-on-reference-simplex]] and [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]] after the explicit reference extension permit proving the estimates first for smooth functions and then taking Sobolev limits.

[F5] [[lem-shape-regular-affine-simplex-scaling]] controls affine pullbacks, determinants and derivatives. All inherited choice assumptions are included in full Choice.

## Proof

1.1 On $I=(-1,1)$ define $S_nf(x)=f(-1)+(x+1)f'(-1)+\int_{-1}^x(x-t)\Pi_{n-2}f''(t)\,dt$. For $f\in H^2(I)$ both anchored values are well-defined by [F4]. The endpoint estimate $|g(-1)|\le C\|g\|_{H^1(I)}$ follows by writing $g(-1)=g(t)-\int_{-1}^t g'$ and integrating in $t$. Thus $S_n$ is uniformly bounded $H^2(I)\to H^2(I)$: its second derivative is an $L^2$ contraction and the two lower derivatives follow by integrating twice and the endpoint estimates. It reproduces every polynomial of degree at most $n$. If $m=r-2\ge3$, then $(f-S_nf)''=f''-\Pi_{n-2}f''$ and the two anchored lower derivatives of the error vanish. Two primitive estimates give $\|f-S_nf\|_{H^2(I)}\le C\|f''-\Pi_{n-2}f''\|_2\le C\eta_{n,r}\|f^{(m)}\|_2$ by [F1] with derivative order $m-2=r-4$. The constant $C$ is absolute. [F1, F4, given, construct, algebra]

2.1 On $I^2$ apply $S_n$ in both coordinates. For smooth $U$, write $U-S_n^xS_n^yU=(1-S_n^x)U+S_n^x(1-S_n^y)U$. For each $a+b\le2$, the first term is bounded in $\|D_x^aD_y^b\cdot\|_2$ by step 1.1, applied on x sections to $D_y^bU$, by $C\eta_{n,r}\|D_x^mD_y^bU\|_2$. For the second term use the uniform $H^2_x$ bound of step 1.1 and then its error estimate on y sections of $D_x^jU$, $0\le j\le2$. The resulting derivatives are $D_x^jD_y^mU$. Every listed derivative has total order at most $m+2=r$. Fubini and addition over the six derivatives through order two give $\|U-S_n^xS_n^yU\|_{H^2(I^2)}\le C\eta_{n,r}\|U\|_{H^r(I^2)}$, with an absolute tensor constant. Density [F4] extends the operator and inequality to all $H^r(I^2)$. Its image is $\mathbb Q_n$, hence total degree at most $2n\le p$. [F4, step 1.1, algebra]

3.1 Let $b=B_{r-1}u$, $w=u-b$, and $U=(E_rw)|_{I^2}$. Restrict $S_n^xS_n^yU$ to $T\subset I^2$ and set $A_{p,r}u=b+(S_n^xS_n^yU)|_T$. Since $p\ge2r-4\ge r-1$, both summands have total degree at most $p$. Linearity follows from the moment map, extension and finite projections. On $T$, $U=w$, so step 2.1 and [F2]–[F3] give $\|u-A_{p,r}u\|_{H^2(T)}\le C M_rB_r\eta_{n,r}|u|_{H^r(T)}$. This gives the declared constant without any claim on its growth in $r$. [F2, F3, step 2.1, construct, algebra]

4.1 Transport step 3.1 by the affine map to $K$. A derivative of order $j$ of the pulled-back error has norm comparable, with shape-dependent factors, to $h_K^{j-1}|u-A_{K,p,r}u|_{H^j(K)}$, while $|\widehat u|_{H^r(T)}\le C_{r,\gamma}h_K^{r-1}|u|_{H^r(K)}$ by [F5]. This proves the scaled estimate. The factorial quotient in $\eta_{n,r}^2$ is the reciprocal of $2(r-4)$ consecutive positive integers, each at least $n-r+4$; for $p\ge4(r-2)$, $n-r+4\ge p/4$. Taking the square root proves the last rate. [F5, step 3.1, algebra] ∎
''')
add('lem-hp-triangle-degree-uniform-strong-edge-lift','lemma','A degree-uniform polynomial edge lift with the strong edge norm',[
'lem-shape-regular-affine-simplex-scaling','thm-first-fundamental-theorem-of-calculus-for-l-one','thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces','thm-cauchy-schwarz-in-an-inner-product-space','def-countable-choice'],r'''
## Statement

Assume Countable Choice. On $T=\{x,y>0,x+y<1\}$, let $q\in\mathbb P_p([0,1])$ satisfy $q(0)=q(1)=0$. Define the polynomial $R(t)=q(t)/t$ by cancellation at zero and
$$Lq(x,y)=q(x)-xR(1-y).$$
Then $Lq\in\mathbb P_p(T)$, equals $q$ on $y=0$, and vanishes on the other two edges. It satisfies
$$\|Lq\|_{H^1(T)}\le4\|q'\|_{L^2(0,1)},$$
independently of $p$. Permutation of the vertices gives a lift on each edge. For a shape-regular physical triangle $K$ and edge $E$ of length $\ell_E$, its affine transport satisfies
$$|L_Eq|_{H^1(K)}\le C_\gamma\ell_E^{1/2}\|\partial_\tau q\|_{L^2(E)},\qquad \|L_Eq\|_{L^2(K)}\le C_\gamma h_K\ell_E^{1/2}\|\partial_\tau q\|_{L^2(E)}.$$
Consequently every continuous piecewise-polynomial boundary datum of degree at most $p$ has a polynomial extension of degree at most $p$: extend its vertex values affinely and lift its endpoint-zero residual on each edge. Edge degrees may be different. These estimates use the strong $H^1$ edge norm; they do not assert an optimal $H^{1/2}$-trace extension bound.

## Facts & Assumptions

**Given:** The triangle, polynomial $q$, endpoint conditions, and the optional affine physical triangle.

[F1] [[thm-first-fundamental-theorem-of-calculus-for-l-one]], [[thm-cauchy-schwarz-in-an-inner-product-space]], and [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] justify the displayed one-dimensional integral and its elementary norm bounds.

[F2] [[lem-shape-regular-affine-simplex-scaling]] supplies the affine determinant, gradient and edge-length scaling under Countable Choice.

## Proof

1.1 Since $q(0)=0$, division by $t$ leaves a polynomial of degree at most $p-1$. Thus the formula is polynomial of total degree at most $p$; for $p=0$ or $p=1$ the only endpoint-zero polynomial is zero. On $y=0$, $R(1)=q(1)=0$, so $Lq=q$. On $x=0$ it is zero, and on $x=1-y$ its two terms agree. Thus the three traces are exactly as claimed. [given, construct, algebra]

2.1 Put $A=\int_0^1|q'|^2$. The identity $q(t)=\int_0^tq'(s)\,ds$ gives $t|R(t)|^2\le\int_0^t|q'(s)|^2ds$, hence $\int_0^1t|R|^2\le A$. Since $tR'=q'-R$, $\int_0^1t^3|R'|^2\le2\int t|q'|^2+2\int t|R|^2\le4A$. Also $\int_0^1|q|^2\le A$. On a horizontal slice with $t=1-y$, $0<x<t$. Therefore $\|\partial_xLq\|_2^2\le2\int_0^1(1-x)|q'(x)|^2dx+2\int_0^1t|R(t)|^2dt\le4A$, and $\|\partial_yLq\|_2^2=\frac13\int_0^1t^3|R'|^2dt\le4A/3$. Finally $\|Lq\|_2^2\le2\int(1-x)|q(x)|^2dx+\frac23\int t^3|R(t)|^2dt\le8A/3$. The sum is at most $8A<16A$, giving the asserted safe constant four. [F1, step 1.1, algebra]

3.1 Permute reference vertices before applying the construction to lift any chosen edge; there are only six fixed affine permutations, so their finite norm maximum remains independent of degree. Under physical transport, the reference gradient norm controls the physical gradient norm by [F2], and the reference edge derivative norm is $\ell_E^{1/2}\|\partial_\tau q\|_{L^2(E)}$. The physical $L^2$ norm has the additional factor $h_K$. These are the stated bounds. [F2, step 2.1, algebra]

4.1 For continuous polynomial boundary data $g$, let $a$ be its unique affine vertex interpolant. Each $g-a$ edge restriction vanishes at its endpoints and has degree at most $p$ when $p\ge1$. Sum its three lifts and add $a$. Each lift is zero on the other edges by step 1.1, so the extension has exactly trace $g$; its degree is at most $p$. For $p=0$, continuity forces $g$ constant and that constant extends it. This argument permits three different edge degrees, bounded only by the cell degree, with no hidden equal-degree assumption. [step 1.1, step 3.1, construct, algebra] ∎
''',J)
add('lem-hp-simplex-p-explicit-conforming-interpolant','lemma','Constructive varying-degree triangle interpolation in unweighted H1',[
'def-hp-variable-degree-spaces-on-matching-meshes','def-hp-integrated-legendre-projector','lem-hp-triangle-degree-uniform-strong-edge-lift','thm-hp-triangle-unweighted-smooth-approximation','lem-variable-degree-polynomial-spaces-are-h1-conforming','thm-reference-simplex-trace-and-gauss-green','thm-lagrange-point-evaluation-threshold-on-reference-simplex','lem-smooth-density-on-reference-simplex','lem-shape-regular-affine-simplex-scaling','thm-cauchy-schwarz-in-an-inner-product-space','thm-first-fundamental-theorem-of-calculus-for-l-one','cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives','def-axiom-of-choice'],r'''
## Statement

Assume the Axiom of Choice. Let $\mathcal T$ be a finite matching shape-regular affine triangulation in two dimensions, $p_K\ge1$ arbitrary finite integer degrees, and $u$ a continuous function on its closure with $u|_K\in H^2(K)$. For each interior edge let $p_E=\min(p_K,p_{K'})$; on boundary edges let $p_E=p_K$. Set $m_K=\min_{E\subset\partial K}p_E$. There is a constructive linear interpolant $I_{\mathcal T,p}u$ in the conforming space of [[def-hp-variable-degree-spaces-on-matching-meshes]]. It preserves zero boundary traces, and for every $q\in\mathbb P_{m_K}(K)$,
$$|u-I_{\mathcal T,p}u|_{H^1(K)}\le |u-q|_{H^1(K)}+C_\gamma\sum_{E\subset\partial K}\left(\ell_E^{-1/2}\|u-q\|_{L^2(E)}+\ell_E^{1/2}\|\partial_\tau(u-q)\|_{L^2(E)}\right).$$
The same right side, augmented by $h_K^{-1}\|u-q\|_{L^2(K)}$ and multiplied by $C_\gamma$, controls the scaled full norm $h_K^{-1}\|u-I_{\mathcal T,p}u\|_{L^2(K)}+|u-I_{\mathcal T,p}u|_{H^1(K)}$. In particular if integer $r\ge5$, $m_K\ge2r-4$, $n_K=\lfloor m_K/2\rfloor$, and $u|_K\in H^r(K)$, then
$$|u-I_{\mathcal T,p}u|_{H^1(K)}\le C_{r,\gamma}h_K^{r-1}\left(\frac{(n_K-r+3)!}{(n_K+r-5)!}\right)^{1/2}|u|_{H^r(K)}.$$
For $m_K\ge4(r-2)$ the factorial factor is at most $(4/m_K)^{r-4}$. The constants are independent of every degree and of degree ratios; the effective degree $m_K$ records low neighboring trace degrees. This is the selected smooth-data two-dimensional branch. No optimal fractional-trace lift, arbitrary-dimensional result, or optimal Sobolev rate is asserted.

## Facts & Assumptions

**Given:** The triangle mesh, continuous piecewise $H^2$ input, finite degrees $p_K\ge1$, full Choice, and the optional $r$-regularity hypotheses.

[F1] [[def-hp-integrated-legendre-projector]] defines the one-dimensional endpoint-preserving integrated $L^2$ derivative projection. Orthogonal projection is a contraction by Pythagoras and [[thm-cauchy-schwarz-in-an-inner-product-space]]. [[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]] and [[thm-first-fundamental-theorem-of-calculus-for-l-one]] give its endpoint identity for ordinary $H^1$ edge data.

[F2] [[lem-hp-triangle-degree-uniform-strong-edge-lift]] constructs endpoint-zero edge lifts of exactly the required degree and proves their strong edge-norm stability.

[F3] [[thm-hp-triangle-unweighted-smooth-approximation]] proves the scaled ordinary $H^2$ approximation bound with its factorial factor.

[F4] [[thm-reference-simplex-trace-and-gauss-green]] applied to $v$ and its two first derivatives gives the continuous trace map $H^2(K)\to H^1(E)$, with $\partial_\tau(\gamma_Ev)=\gamma_E(\partial_\tau v)$: prove this first for smooth functions and pass to the limit using [[lem-smooth-density-on-reference-simplex]]. [[thm-lagrange-point-evaluation-threshold-on-reference-simplex]] gives unique continuous point values for $H^2$ inputs in dimension two. [[lem-shape-regular-affine-simplex-scaling]] transports all these bounds.

[F5] [[lem-variable-degree-polynomial-spaces-are-h1-conforming]] turns matching polynomial traces into an $H^1$ function in the space of [[def-hp-variable-degree-spaces-on-matching-meshes]].

## Proof

1.1 Orient each geometric edge once and set $g_E=I_{p_E}(u|_E)$ by affine transport of [F1]. Its endpoints equal those of $u$, since derivative projection preserves the constant moment. Thus the three boundary polynomials of a cell meet at its vertices and have degrees at most $p_K$. Choose their polynomial extension by the explicit vertex-plus-three-lifts formula of [F2]. In its affine class modulo $Z_K=\{z\in\mathbb P_{p_K}(K):z|_{\partial K}=0\}$, define $Iu|_K$ by $\int_K\nabla(Iu-u)\cdot\nabla z=0$ for all $z\in Z_K$. This is a finite positive-definite linear system: if the gradient energy of $z$ is zero, $z$ is constant and its zero trace makes it zero. Hence it has a unique solution, including $Z_K=\{0\}$. No infinite basis choice or unproved lifting theorem is used. [F1, F2, given, construct, algebra]

2.1 Both cells meeting an edge use the same polynomial $g_E$, independently of orientation: reversal transports the same derivative-orthogonality characterization with the same two endpoint values. Their traces therefore agree and lie in degree $p_E$. By [F5] the assembled polynomial is conforming. If $u$ has zero trace on a boundary edge, both its endpoint value and derivative are zero, so $g_E=0$ and the interpolant preserves that boundary trace. [F1, F5, step 1.1, algebra]

3.1 For ordinary $H^1(0,1)$ data $f$, $I_jf=f(0)+\int_0^t\Pi_{j-1}f'$ gives $\|(I_jf)'\|_2\le\|f'\|_2$ and $|I_jf(0)|=|f(0)|\le C\|f\|_{H^1}$ by the integrated endpoint estimate. Thus $\|I_jf\|_{H^1}\le C\|f\|_{H^1}$ uniformly for $j\ge1$. If $q\in\mathbb P_{m_K}(K)$, each edge projector reproduces $q|_E$ because $m_K\le p_E$. Write $w=u-q$. The continuous boundary datum $g-q$ is therefore $I_{p_E}(w|_E)$. Subtract its affine vertex interpolant and apply [F2]. The affine piece has gradient norm bounded by the sum of its three vertex magnitudes; the endpoint estimate on any incident edge controls each such magnitude by the strong edge norm of $w$. Combining the three lifts, their endpoint-zero residuals, and the uniform stability just proved produces $c_K\in\mathbb P_{p_K}(K)$ with trace $g-q$ and $|c_K|_{H^1(K)}\le C_\gamma\sum_E(\ell_E^{-1/2}\|w\|_{L^2(E)}+\ell_E^{1/2}\|\partial_\tau w\|_{L^2(E)})$. [F1, F2, F4, step 1.1, algebra]

4.1 The polynomial $q+c_K$ has the prescribed trace, so $q+c_K-Iu\in Z_K$. The energy orthogonality of step 1.1 and Pythagoras give $|u-Iu|_{H^1(K)}\le|u-q-c_K|_{H^1(K)}\le|u-q|_{H^1(K)}+|c_K|_{H^1(K)}$. Insert step 3.1 to get the first estimate. For the second, use $q=A_{K,m_K,r}u$ from [F3]. The trace estimate [F4] bounds the entire right side by $C_\gamma$ times its scaled $H^2$ error. Inserting the factorial bound and its stated power simplification gives the asserted local $h,p,r$ estimate. The scaled full-norm assertion follows as well: put $z=Iu-q-c_K\in Z_K$. On the reference triangle $z(x,y)=\int_0^x\partial_xz(t,y)\,dt$ because its $x=0$ trace vanishes, so Fubini and Cauchy–Schwarz give $\|z\|_2\le C|z|_{H^1}$, and affine scaling gives $\|z\|_{L^2(K)}\le C_\gamma h_K|z|_{H^1(K)}$. Furthermore $|z|_{H^1}\le|Iu-u|_{H^1}+|u-q-c_K|_{H^1}\le2(|u-q|_{H^1}+|c_K|_{H^1})$. The construction in step 3.1 and the full-norm lift bound [F2] also bound $h_K^{-1}\|c_K\|_2$ by the same edge terms. Applying the triangle inequality to $u-Iu=(u-q)-c_K-z$ proves the full-norm assertion; [F3] then bounds it by the same factorial expression in the smooth-data branch. Full Choice enters through [F3] and point-evaluation [F4], rather than through the finite linear system. [F3, F4, step 1.1, step 3.1, algebra] ∎
''',J)
(root/'proposed-inventory.json').write_text(json.dumps({'run':'numerical-analysis-remaining-71-2026-10-17','page':'hp-finite-elements-and-spectral-element-methods','scope':'research-only proposal; no canonical edits or acceptance','new_ids':[p['id'] for p in proposals[:-1]],'replacement_ids':[proposals[-1]['id']],'items':proposals},indent=2)+'\n')
