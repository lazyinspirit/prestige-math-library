---
id: thm-calderon-zygmund-operators-map-linfinity-to-bmo
kind: theorem
title: "Calderon-Zygmund operators map L-infinity to BMO"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [def-bmo-seminorm-and-quotient-by-constants, def-calderon-zygmund-kernel-and-principal-value-operator, def-standard-holder-calderon-zygmund-kernel, lem-holder-cz-kernels-satisfy-hormander-cancellation, def-l-p-space-as-a-quotient-by-null-functions, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-dominated-convergence, cor-cauchy-schwarz-inequality-for-l-two, def-multidimensional-rectangle-and-volume, thm-locally-integrable-functions-embed-in-distributions, def-countable-choice, thm-polar-coordinates-formula-for-lebesgue-measure, def-polar-surface-measure-on-the-unit-sphere, lem-null-sets-in-rn-closed-under-subsets-and-countable-unions, cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Proposition 7.7 and (7.11) (the local/far decomposition with the kernel difference and the $L^2$ bound), printed p. 32"
    - title: "Terence Tao, Math 247A Lecture Notes 4 (UCLA, Fall 2006)"
      url: "https://www.math.ucla.edu/~tao/247a.1.06f/notes4.pdf"
      locator: "Proposition 3.4 and its proof (the localisation $Tf=T(f\\mathbf 1_{2B})+T(f\\mathbf 1_{\\mathbb R^d\\setminus2B})$ with the constant $c_B$), printed p. 12"
---

## Statement

Assume Countable Choice. Let $T$ be a Calderon-Zygmund operator with kernel $k$
in the sense of [[def-calderon-zygmund-kernel-and-principal-value-operator]]: $k$
satisfies the annular size bound with constant $A_1$ and Hormander's condition
with constant $A_2$, $T$ is $L^2$-bounded with norm $B$ and satisfies the
off-support representation (3) of that definition. Assume moreover that $k$ is
standard $\delta$-Holder with constant $A_2'$ for some $0<\delta\le1$
([[def-standard-holder-calderon-zygmund-kernel]]). Fix
$\lambda_n:=1+4\sqrt n$, chosen so that
$|a-y|\ge2\sqrt n\,\ell(Q)\ge2|x-a|$ whenever $x,a\in Q$ and
$y\notin\lambda_nQ$. For a cube $Q$ and a point $a\in Q$ put, for $x\in Q$,
$(Tb)_Q(x):=T(b\mathbf 1_{\lambda_nQ})(x)+\int_{\mathbb R^n\setminus\lambda_nQ}\bigl[k(x-y)-k(a-y)\bigr]b(y)\,dy$,
where $\lambda_nQ$ is the concentric cube with side length $\lambda_n\ell(Q)$
and $b\in L^\infty(\mathbb R^n)$. Then: (i) the tail integral converges
absolutely for every $x\in Q$; (ii) for nested cubes $Q\subseteq R$ the
difference $(Tb)_Q-(Tb)_R$ is almost everywhere constant on $Q$, so the
localisations define a class $Tb\in\mathrm{BMO}(\mathbb R^n)/\mathbb C$; (iii)
$\|Tb\|_{\mathrm{BMO}}\le C_{n,\delta}(A_2'+B)\|b\|_{L^\infty}$; and (iv) if in
addition $b\in L^2(\mathbb R^n)$, then the class $Tb$ is the class of the $L^2$
function $Tb$ defined by the operator, modulo constants.

## Facts & Assumptions

**Given:** Countable Choice, a Calderon-Zygmund operator $T$ with kernel $k$ and constants $A_1,A_2,B$, standard $\delta$-Holder with constant $A_2'$, a bounded function $b\in L^\infty(\mathbb R^n)$, cubes $Q\subseteq R$ and points $x,a\in Q$.

[F1] The kernel satisfies $\sup_{R>0}\int_{R\le|x|\le2R}|k(x)|\,dx\le A_1$ and $\sup_{v\ne0}\int_{|z|\ge2|v|}|k(z-v)-k(z)|\,dz\le A_2$; $T$ is $L^2$-bounded with norm $B$ and, for every compactly supported $f\in L^2$, $Tf(x)=\int_{\mathbb R^n}k(x-y)f(y)\,dy$ for almost every $x\notin\operatorname{supp}f$, the integral converging absolutely ([[def-calderon-zygmund-kernel-and-principal-value-operator]]).

[F2] The kernel is standard $\delta$-Holder with constant $A_2'$: $|k(z-v)-k(z)|\le A_2'|v|^\delta|z|^{-n-\delta}$ whenever $|z|\ge2|v|>0$ ([[def-standard-holder-calderon-zygmund-kernel]]).

[F3] A cube of side length $\ell$ has diameter at most $\sqrt n\,\ell$: its points lie in an axis-parallel box with side lengths $\ell$, so coordinatewise $|x_i-a_i|\le\ell$ and $|x-a|\le\sqrt n\,\ell$; the concentric cube of side $\lambda\ell$ has volume $\lambda^n$ times the volume, and containment of cubes is preserved under concentric dilation ([[def-multidimensional-rectangle-and-volume]]).

[F4] The Cauchy-Schwarz inequality gives $\int_E|fg|\le\|f\|_{L^2(E)}\|g\|_{L^2(E)}$ on a finite-measure set $E$, and $L^2$ is the quotient of measurable functions modulo almost-everywhere equality, with $\|f\|_2=(\int|f|^2)^{1/2}$ ([[cor-cauchy-schwarz-inequality-for-l-two]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F5] Polar coordinates: for Borel measurable $F\ge0$, $\int_{\mathbb R^n}F\,dx=\int_0^\infty\int_{S^{n-1}}F(r\omega)r^{n-1}\,d\sigma(\omega)\,dr$, with $\sigma$ the finite Borel surface measure on $S^{n-1}$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[def-polar-surface-measure-on-the-unit-sphere]]).

[F6] Fubini applies to $L^1$ functions on products of $\sigma$-finite measure spaces, and dominated convergence applies to pointwise convergent measurable functions dominated by one integrable function ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-dominated-convergence]]).

[F7] Countable unions of Lebesgue-null sets are Lebesgue-null, and Countable Choice permits the countably many selections made below ([[lem-null-sets-in-rn-closed-under-subsets-and-countable-unions]], [[def-countable-choice]]).

[F8] The seminorm is $\|u\|_{\mathrm{BMO}}=\sup_Q|Q|^{-1}\int_Q|u-u_Q|$, and the quotient $\mathrm{BMO}(\mathbb R^n)/\mathbb C$ identifies functions differing by an almost-everywhere constant ([[def-bmo-seminorm-and-quotient-by-constants]]).

[F9] If a sequence converges in $L^2$, it has a subsequence of measurable representatives converging almost everywhere to a representative of the limit under Countable Choice ([[cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences]]).

## Proof

**Proof technique:** direct.

1.1 The local term obeys $|Q|^{-1}\int_Q|T(b\mathbf 1_{\lambda_nQ})|\le|Q|^{-1/2}\|T(b\mathbf 1_{\lambda_nQ})\|_2\le|Q|^{-1/2}B\|b\mathbf 1_{\lambda_nQ}\|_2\le|Q|^{-1/2}B\|b\|_{L^\infty}|\lambda_nQ|^{1/2}=\lambda_n^{n/2}B\|b\|_{L^\infty}$, by Cauchy-Schwarz [F4], the $L^2$ bound [F1] and $|\lambda_nQ|=\lambda_n^n|Q|$ [F3]. [F1, F3, F4]

1.2 For $x,a\in Q$ one has $|x-a|\le\sqrt n\,\ell(Q)$; for $y\notin\lambda_nQ$ the coordinatewise distance from $a$ to the complement of the concentric cube $\lambda_nQ$ is at least $\tfrac{\lambda_n-1}{2}\ell(Q)=2\sqrt n\,\ell(Q)$, so $|a-y|\ge2\sqrt n\,\ell(Q)\ge2|x-a|$; and if $Q\subseteq R$, $a\in Q\subseteq R$ and $y\notin\lambda_nR$, the same computation with $\ell(R)$ gives $|a-y|\ge2\sqrt n\,\ell(R)\ge2|x-a|$. [F3]

2.1 The tail integral converges absolutely for every $x\in Q$. If $x=a$, its integrand is zero. Otherwise, by [F2] and step 1.2, $|k(x-y)-k(a-y)|\le A_2'|x-a|^\delta|a-y|^{-n-\delta}\le A_2'(\sqrt n\,\ell(Q))^\delta|a-y|^{-n-\delta}$ for $y\notin\lambda_nQ$, and by [F5] the tail power integral is $\int_{\mathbb R^n\setminus\lambda_nQ}|a-y|^{-n-\delta}dy\le\int_{|z|\ge2\sqrt n\ell(Q)}|z|^{-n-\delta}dz=\sigma(S^{n-1})\delta^{-1}(2\sqrt n\,\ell(Q))^{-\delta}$. Hence $\bigl|\int_{\mathbb R^n\setminus\lambda_nQ}[k(x-y)-k(a-y)]b(y)\,dy\bigr|\le A_2'\sigma(S^{n-1})\delta^{-1}2^{-\delta}\|b\|_{L^\infty}$, a bound independent of $x$ and $Q$; this is (i), and the tail is a bounded measurable function of $x$: [F2] implies continuity of $k$ away from zero, while its displayed bound gives an integrable majorant uniformly on $Q$, so dominated convergence gives continuity of the tail there. [F2, F5, step 1.2, algebra]

2.2 Nested consistency. Let $Q\subseteq R$ be cubes with points $a_Q\in Q$ and $a_R\in R$, and let $x\in Q$. Since $\lambda_nQ\subseteq\lambda_nR$, splitting the complement of $\lambda_nQ$ into $\lambda_nR\setminus\lambda_nQ$ and $\mathbb R^n\setminus\lambda_nR$ and using linearity of $T$ gives $(Tb)_Q(x)-(Tb)_R(x)=-T(b\mathbf 1_{\lambda_nR\setminus\lambda_nQ})(x)+\int_{\lambda_nR\setminus\lambda_nQ}[k(x-y)-k(a_Q-y)]b(y)\,dy+\int_{\mathbb R^n\setminus\lambda_nR}[k(a_R-y)-k(a_Q-y)]b(y)\,dy$. The function $b\mathbf 1_{\lambda_nR\setminus\lambda_nQ}$ is compactly supported $L^2$ with support disjoint from $Q$, so the off-support representation [F1] gives $T(b\mathbf 1_{\lambda_nR\setminus\lambda_nQ})(x)=\int_{\lambda_nR\setminus\lambda_nQ}k(x-y)b(y)\,dy$ for almost every $x\in Q$; the first integral over $\lambda_nR\setminus\lambda_nQ$ converges absolutely because that region lies in a bounded annulus about $a_Q$ on which the annular bound of [F1] controls $k$. If $a_R=a_Q$, the last integral is zero; otherwise it converges absolutely by Hormander's condition [F1] applied at centre $a_R$ with nonzero translation $v=a_R-a_Q$, since $|a_R-y|\ge2\sqrt n\,\ell(R)\ge2|a_R-a_Q|$ for $y\notin\lambda_nR$ by step 1.2. The resulting expression is independent of $x$, so $(Tb)_Q-(Tb)_R$ is almost everywhere constant on $Q$, which is (ii). [F1, step 1.2, algebra]

3.1 Combining steps 1.1 and 2.1, $|Q|^{-1}\int_Q|(Tb)_Q|\le(\lambda_n^{n/2}B+A_2'\sigma(S^{n-1})\delta^{-1}2^{-\delta})\|b\|_{L^\infty}$ for every cube $Q$, hence by the optimal-constant bound of [F8] with $c=0$ the mean oscillation of $(Tb)_Q$ over $Q$ is at most $2(\lambda_n^{n/2}B+A_2'\sigma(S^{n-1})\delta^{-1}2^{-\delta})\|b\|_{L^\infty}$. [step 1.1, step 2.1, F8, algebra]

3.2 Coherence and gluing. If $Q_1,Q_2$ are cubes, choose a cube $R$ containing both; step 2.2 shows that each $(Tb)_{Q_i}-(Tb)_R$ is constant almost everywhere on $Q_i$, so $(Tb)_{Q_1}-(Tb)_{Q_2}$ is constant almost everywhere on $Q_1\cap Q_2$. Let $Q_k=[-k,k]^n$ for $k\ge1$ and choose representatives of the countably many localisations, which Countable Choice permits [F7]. Define constants $c_k$ inductively by $c_1=0$ and $c_{k+1}=c_k-\bigl[(Tb)_{Q_{k+1}}-(Tb)_{Q_k}\bigr]$, the bracket being the constant of step 2.2 on $Q_k$; then $u_k:=(Tb)_{Q_k}+c_k$ satisfies $u_{k+1}=u_k$ almost everywhere on $Q_k$. Removing the countable union of the exceptional null sets, which is null by [F7], define $u(x):=u_k(x)$ for $x\in Q_k$ outside that null set, and set $u=0$ on the null set; this is well defined and locally integrable, and for every cube $Q$, choosing $k$ with $Q\subseteq Q_k$, the function $u-(Tb)_Q=[u-(Tb)_{Q_k}]+[(Tb)_{Q_k}-(Tb)_Q]$ is almost everywhere constant on $Q$ by the construction and step 2.2. Two such global representatives differ by constants on the nested $Q_k$; these constants agree on their positive-measure overlaps, so the global class is unique. Linearity follows from linearity of each localisation and this uniqueness. [step 2.2, F7]

4.1 By step 3.2, $u-(Tb)_Q$ is constant almost everywhere on every cube $Q$, so the mean oscillation of $u$ over $Q$ equals that of $(Tb)_Q$; by step 3.1, $|Q|^{-1}\int_Q|u-u_Q|\le2(\lambda_n^{n/2}B+A_2'\sigma(S^{n-1})\delta^{-1}2^{-\delta})\|b\|_{L^\infty}$ for every cube. Hence $u\in\mathrm{BMO}(\mathbb R^n)$ with $\|u\|_{\mathrm{BMO}}\le C_{n,\delta}(A_2'+B)\|b\|_{L^\infty}$ for $C_{n,\delta}:=2\max(\lambda_n^{n/2},\sigma(S^{n-1})\delta^{-1}2^{-\delta})$, and its class modulo constants is the class $Tb$ of the statement, which is (iii). [step 3.1, step 3.2, F8, algebra]

4.2 Suppose $b\in L^2(\mathbb R^n)$; fix a cube $Q$ and $a\in Q$ and write $c:=\mathbb R^n\setminus\lambda_nQ$ and $\Psi(x):=\int_c[k(x-y)-k(a-y)]b(y)\,dy$ for the tail of the localisation. Let $b_N:=b\mathbf 1_{c\cap B(0,N)}$ for $N\ge1$. Each $b_N$ is compactly supported $L^2$ with support disjoint from $Q$, so [F1] gives $Tb_N(x)=\int_c k(x-y)b_N(y)\,dy$ for almost every $x\in Q$; since $b_N\to b\mathbf 1_c$ in $L^2$, boundedness of $T$ gives $Tb_N\to T(b\mathbf 1_c)$ in $L^2$. By [F9] choose a subsequence whose representatives converge almost everywhere to a representative of $T(b\mathbf 1_c)$, and intersect this full-measure set with the full-measure set where the countably many off-support identities hold. For $x=x'$ the kernel difference below is zero. For distinct $x,x'\in Q$ outside the exceptional null set and $y\in c$, one has $|x'-y|\ge2\sqrt n\,\ell(Q)\ge2|x-x'|$ by step 1.2, so $|k(x-y)-k(x'-y)|\le A_2'|x-x'|^\delta|x'-y|^{-n-\delta}$ by [F2]; the function $y\mapsto A_2'|x-x'|^\delta|x'-y|^{-n-\delta}|b(y)|$ is integrable on $c$ by Cauchy-Schwarz [F4] and [F5], so dominated convergence [F6] gives along that subsequence $\lim_j[Tb_{N_j}(x)-Tb_{N_j}(x')]=\int_c[k(x-y)-k(x'-y)]b(y)\,dy=\Psi(x)-\Psi(x')$. Hence $T(b\mathbf 1_c)-\Psi$ has equal values at almost every pair of points of $Q$, so by Fubini [F6] it is almost everywhere constant on $Q$. Since $Tb=T(b\mathbf 1_{\lambda_nQ})+T(b\mathbf 1_c)$ in $L^2$ and $(Tb)_Q=T(b\mathbf 1_{\lambda_nQ})+\Psi$, the difference $Tb-(Tb)_Q$ is almost everywhere constant on $Q$; that is (iv), and it identifies the $L^2$ class of $Tb$ with the localisation class of step 3.2 modulo constants. [F1, F2, F4, F5, F6, F7, F9, step 1.2, step 3.2]

5.1 Steps 2.1, 2.2, 4.1 and 4.2 prove (i), (ii), (iii) and (iv) respectively, and steps 3.1 and 3.2 supply the global representative $u$ used in (iii). The argument uses Countable Choice exactly in the countably many applications of the off-support representation and in the selection of the representatives and subsequence in steps 3.2 and 4.2, and it uses no other choice principle. [step 2.1, step 2.2, step 3.1, step 3.2, step 4.1, step 4.2, F9] ∎
