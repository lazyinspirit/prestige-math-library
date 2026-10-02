---
id: thm-logarithmic-capacity-equals-transfinite-diameter
kind: theorem
title: "Fekete–Szegő equality of logarithmic capacity, transfinite diameter, and Chebyshev constant"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-axiom-of-choice
  - def-chebyshev-constant-compact-set
  - def-complex-polynomial-degree-and-monic
  - def-countable-choice
  - def-dirac-measure
  - def-fekete-points-and-transfinite-diameter
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-integral-of-a-nonnegative-simple-function
  - def-logarithmic-capacity-compact-set
  - def-logarithmic-potential-and-energy
  - def-metric-compactness
  - def-nonnegative-lebesgue-integral
  - def-nonnegative-weighted-sum-of-measures
  - def-probability-measure
  - def-product-measure-on-sigma-finite-spaces
  - def-real-exponential-function-and-e
  - def-weak-convergence-of-borel-probability-measures
  - cor-differentiable-implies-continuous
  - cor-exponential-is-a-bijection-onto-positive-reals
  - cor-power-series-sums-are-continuous
  - lem-algebra-of-continuous-real-maps-on-a-space
  - lem-complex-conjugation-and-modulus-laws
  - lem-fekete-diameters-decrease
  - lem-limsup-monotone-comparison
  - lem-monic-polynomial-capacity-lower-bound
  - lem-power-monotone
  - lem-probability-laws-on-a-compact-metric-space-have-weakly-convergent-subsequences
  - prop-closure-properties-of-measurable-functions-used-by-the-integral
  - prop-dirac-measure-is-a-probability-measure
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - thm-algebra-of-continuous-functions
  - thm-algebra-of-limits
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-composition-of-continuous-functions
  - thm-equilibrium-measure-existence-and-uniqueness
  - thm-extreme-value-metric
  - thm-finite-products-of-compact-spaces
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-heine-cantor-metric
  - thm-increasing-simple-approximation-of-a-nonnegative-measurable-function
  - thm-logarithm-derivative-and-integral
  - thm-monotone-convergence-for-the-integral
  - thm-natural-logarithm-laws
  - thm-nonnegative-weighted-sums-of-measures
  - thm-nth-roots-exist
  - thm-product-universal-property
  - thm-real-power-laws
  - thm-real-stone-weierstrass-for-compact-metric-spaces
  - thm-sequential-criterion-for-continuity
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "E. B. Saff, Logarithmic Potential Theory with Applications to Approximation Theory, §1"
      url: "https://arxiv.org/pdf/1010.3760"
      locator: "§1, Theorems 1.9 and 1.18, printed pp. 172–178"
    - title: "B. Khoruzhenko, LTCC Potential Theory notes, §5"
      url: "https://maths.qmul.ac.uk/~boris/potential_th_notes.pdf"
      locator: "§5, Fekete points, transfinite diameter and the Chebyshev constant, PDF pp. 40–44"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let
$K\subseteq\mathbb C$ be compact, with the Fekete diameters $\delta_n(K)$ and
transfinite diameter $\tau(K)$ of [[def-fekete-points-and-transfinite-diameter]],
the extremal norms $t_n(K)$ and Chebyshev constant $\operatorname{cheb}(K)$ of
[[def-chebyshev-constant-compact-set]], and the Robin constant $V_K$ and
logarithmic capacity $\operatorname{cap}(K)$ of
[[def-logarithmic-capacity-compact-set]]. Then

$$\operatorname{cap}(K)=\tau(K)=\operatorname{cheb}(K).$$

If $K$ is infinite, then for every sequence $(z^{(n)})_{n\ge2}$ of $n$-point
Fekete tuples of $K$, with associated monic Fekete polynomials
$F_n(Z)=\prod_{j=1}^n(Z-z^{(n)}_j)$,

$$\lim_{n\to\infty}\|F_n\|_K^{1/n}=\operatorname{cheb}(K)=\operatorname{cap}(K).$$

If $\operatorname{cap}(K)>0$, then the empirical probability measures
$\nu_n=\frac1n\sum_{j=1}^n\delta_{z^{(n)}_j}$ formed from any such sequence of
Fekete tuples converge weakly to the unique equilibrium measure $\mu_K$ of $K$
([[def-weak-convergence-of-borel-probability-measures]],
[[thm-equilibrium-measure-existence-and-uniqueness]]); moreover, for every
nonempty compact $L\subseteq\mathbb C\setminus K$,

$$\sup_{z\in L}\bigl||F_n(z)|^{1/n}-\exp(-U^{\mu_K}(z))\bigr|\longrightarrow0\qquad(n\to\infty),$$

where $U^{\mu_K}$ is the logarithmic potential of
[[def-logarithmic-potential-and-energy]]. Uniform convergence on the empty
compact set is vacuous; the displayed supremum is asserted only for nonempty
$L$.

The Axiom of Choice is used through Countable Choice for selecting one Fekete
tuple for each $n$, through the weak sequential compactness of probability laws
on the compact set $K$, and through the equilibrium theory invoked by
[[lem-monic-polynomial-capacity-lower-bound]] and
[[thm-equilibrium-measure-existence-and-uniqueness]]; the estimate of the
truncated kernel and the Fekete–Chebyshev comparison are otherwise choice-free.

## Facts & Assumptions

**Given:** a compact set $K\subseteq\mathbb C$, the Axiom of Choice, and the conventions of [[def-fekete-points-and-transfinite-diameter]], [[def-chebyshev-constant-compact-set]], [[def-logarithmic-potential-and-energy]] and [[def-logarithmic-capacity-compact-set]].

[F1] For nonempty compact $K$ and $n\ge2$ the map $D_n(z_1,\dots,z_n)=\prod_{1\le i<j\le n}|z_i-z_j|$ attains its maximum on the nonempty compact $K^n$, the $n$-th Fekete diameter is $\delta_n(K)=\bigl(\max_{K^n}D_n\bigr)^{2/[n(n-1)]}\in[0,\infty)$, tuples attaining the maximum are the Fekete tuples, the associated polynomial $F_n(Z)=\prod_{j=1}^n(Z-z_j)$ is monic of degree $n$ ([[def-complex-polynomial-degree-and-monic]]), and $\tau(K)=\inf_{n\ge2}\delta_n(K)\in[0,\infty)$ with the convention $\tau(\varnothing)=0$ ([[def-fekete-points-and-transfinite-diameter]]).

[F2] For nonempty compact $K$ one has $\delta_{n+1}(K)\le\delta_n(K)$ for every $n\ge2$, and the sequence converges with $\tau(K)=\lim_{n\to\infty}\delta_n(K)$ ([[lem-fekete-diameters-decrease]]).

[F3] For nonempty compact $K$ one has $\|p\|_K=\sup_{z\in K}|p(z)|\in[0,\infty)$ for every polynomial $p$, each $t_n(K)=\inf\{\|p\|_K:p\text{ monic of degree }n\}$ is a real number with $0\le t_n(K)<\infty$, and $\operatorname{cheb}(K)=\inf_{n\ge1}t_n(K)^{1/n}\in[0,\infty)$ with the convention $\operatorname{cheb}(\varnothing)=0$ ([[def-chebyshev-constant-compact-set]]).

[F4] For finite positive Borel measures of compact support the kernel is $k(z,w)=\log\frac1{|z-w|}$ with diagonal value $k(w,w)=+\infty$, $U^\mu(z)=\int k(z,w)\,d\mu(w)\in(-\infty,+\infty]$ and, for $R>\operatorname{diam}(\operatorname{supp}\mu)$ and $k_R:=k+\log R\ge0$ on $\operatorname{supp}\mu\times\operatorname{supp}\mu$, the logarithmic energy is $I(\mu)=\iint k_R\,d\mu\,d\mu-\mu(\mathbb C)^2\log R\in(-\infty,+\infty]$, independent of the admissible $R$; the mixed energy $I(\mu,\nu)=\iint k_R\,d\mu\,d\nu-\mu(\mathbb C)\nu(\mathbb C)\log R$ is symmetric ([[def-logarithmic-potential-and-energy]]).

[F5] For nonempty compact $K$ the Robin constant is $V_K=\inf_{\mu\in P(K)}I(\mu)\in(-\infty,+\infty]$, where $P(K)$ is the set of Borel probability measures on $K$, and $\operatorname{cap}(K)=e^{-V_K}$ if $V_K<+\infty$ and $\operatorname{cap}(K)=0$ if $V_K=+\infty$, so $\operatorname{cap}(K)>0$ is equivalent to $V_K<+\infty$; the convention is $\operatorname{cap}(\varnothing)=0$ ([[def-logarithmic-capacity-compact-set]]).

[F6] Assume the Axiom of Choice. For nonempty compact $K$ and every monic complex polynomial $p$ of degree $n\ge1$ one has $\|p\|_K\ge\operatorname{cap}(K)^n$, and consequently $\operatorname{cap}(K)\le\operatorname{cheb}(K)$ ([[lem-monic-polynomial-capacity-lower-bound]]).

[F7] The Dirac set function $\delta_a$ is a Borel probability measure ([[def-dirac-measure]], [[prop-dirac-measure-is-a-probability-measure]]), and finite nonnegative weighted sums of measures are measures with $(\sum_jc_j\mu_j)(E)=\sum_jc_j\mu_j(E)$ for every measurable $E$ ([[def-nonnegative-weighted-sum-of-measures]], [[thm-nonnegative-weighted-sums-of-measures]]).

[F8] For Borel probability measures on a metric space, $\nu_n\Rightarrow\nu$ means $\int f\,d\nu_n\to\int f\,d\nu$ for every bounded continuous real function $f$ ([[def-weak-convergence-of-borel-probability-measures]]).

[F9] Assume the Axiom of Choice. Every sequence of Borel probability laws on a compact metric space has a subsequence converging weakly to a Borel probability on that space ([[lem-probability-laws-on-a-compact-metric-space-have-weakly-convergent-subsequences]]).

[F10] Assume the Axiom of Choice. Every nonempty compact $K$ with $\operatorname{cap}(K)>0$ has exactly one equilibrium measure $\mu_K\in P(K)$, and it satisfies $I(\mu_K)=V_K=\inf_{P(K)}I<+\infty$ ([[thm-equilibrium-measure-existence-and-uniqueness]]).

[F11] A unital point-separating subalgebra of $C(K,\mathbb R)$ on a nonempty compact metric space $K$ is uniformly dense ([[thm-real-stone-weierstrass-for-compact-metric-spaces]]).

[F12] For a Borel probability measure $\nu$ on $K$ and bounded Borel functions $f,h$ on $K$, the iterated integral factorizes: $\iint f(z)h(w)\,d\nu(z)\,d\nu(w)=\bigl(\int f\,d\nu\bigr)\bigl(\int h\,d\nu\bigr)$; this is Tonelli's identity for the product measure $\nu\otimes d\nu$ ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[def-product-measure-on-sigma-finite-spaces]]) together with the Fubini theorem for the bounded integrand ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F13] If $0\le f_M\uparrow f$ pointwise with the $f_M$ measurable, then $\int f_M\,d\mu\uparrow\int f\,d\mu$ ([[thm-monotone-convergence-for-the-integral]]).

[F14] Every $a\ge0$ has a unique nonnegative $n$-th root $a^{1/n}$, and for $x,y\ge0$ one has $(xy)^{1/n}=x^{1/n}y^{1/n}$ and $x\le y$ implies $x^{1/n}\le y^{1/n}$: $x^{1/n}y^{1/n}$ and $y^{1/n}$ are nonnegative with $n$-th powers $xy$ and $y$, and $t\mapsto t^n$ is injective on $\{t\ge0\}$ ([[thm-nth-roots-exist]], [[lem-power-monotone]]).

[F15] Sums, products and quotients of convergent real sequences converge to the corresponding combination ([[thm-algebra-of-limits]]); if $x_k\le y_k$ for all sufficiently large $k$ then $\limsup_kx_k\le\limsup_ky_k$ ([[lem-limsup-monotone-comparison]]).

[F16] The Axiom of Choice implies Dependent Choice, which implies Countable Choice ([[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]]).

[F17] A continuous real function on a nonempty compact metric space attains its maximum and its minimum ([[thm-extreme-value-metric]]); every open cover of a compact metric space has a finite subcover ([[def-metric-compactness]]); a finite product of nonempty compact spaces is compact ([[thm-finite-products-of-compact-spaces]]).

[F18] A continuous map from a compact metric space to a metric space is uniformly continuous ([[thm-heine-cantor-metric]]).

[F19] The modulus is multiplicative, $|zw|=|z||w|$, subadditive, $|z+w|\le|z|+|w|$, and definite on $\mathbb C$ ([[lem-complex-conjugation-and-modulus-laws]]); the natural logarithm satisfies $\log(xy)=\log x+\log y$ and $\log(\exp u)=u$ ([[thm-natural-logarithm-laws]]) and is continuous on $(0,\infty)$ because it is differentiable there with $\log'=1/x$ ([[thm-logarithm-derivative-and-integral]], [[cor-differentiable-implies-continuous]], [[thm-sequential-criterion-for-continuity]]); the real exponential is continuous, $\exp:\mathbb R\to(0,\infty)$ is a bijection with inverse $\log$, and $a^u=\exp(u\log a)$ for $a>0$ ([[cor-power-series-sums-are-continuous]], [[def-real-exponential-function-and-e]], [[cor-exponential-is-a-bijection-onto-positive-reals]], [[thm-real-power-laws]]); sums, products, reciprocals of nonvanishing continuous functions and composites of continuous functions are continuous ([[thm-algebra-of-continuous-functions]], [[thm-composition-of-continuous-functions]]).

[F20] Every nonnegative measurable function is the increasing pointwise limit of a sequence of nonnegative simple measurable functions ([[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]]).

[F21] For a nonnegative simple measurable function $s=\sum_kc_k\chi_{E_k}$ in pairwise disjoint representation and a measure $\mu$, the simple integral is $\int s\,d\mu=\sum_kc_k\mu(E_k)$ and coincides with the nonnegative Lebesgue integral of $s$ ([[def-integral-of-a-nonnegative-simple-function]], [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]); the nonnegative Lebesgue integral of a measurable $h\ge0$ is the supremum of the integrals of its nonnegative simple minorants and is monotone in $h$ ([[def-nonnegative-lebesgue-integral]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]); positive and negative parts of a measurable real function are measurable, and a real or complex measurable function is integrable exactly when its modulus has finite integral, its integral being computed from positive and negative parts, and then from real and imaginary parts ([[prop-closure-properties-of-measurable-functions-used-by-the-integral]], [[def-integrable-real-and-complex-functions-and-their-integrals]]).

[F22] A continuous real function on a metric space is Borel measurable, and for a Borel probability $\mu$ and a bounded continuous real $f$ one has $\int|f|\,d\mu\le\|f\|_\infty\mu(X)<\infty$ ([[def-weak-convergence-of-borel-probability-measures]]); a map into a product of topological spaces is continuous exactly when its components are ([[thm-product-universal-property]]), so the insertion maps $w\mapsto(a,w)$ and $z\mapsto(z,b)$ and their composites with continuous functions are continuous, as are finite sums, products, moduli, maxima and minima of continuous real functions ([[lem-algebra-of-continuous-real-maps-on-a-space]]); in particular every slice of a continuous $g$ on $K\times K$, and every finite sum of such slices, is continuous.



## Proof

**Proof technique:** direct.

1.1 Let $K\subseteq\mathbb C$ be compact and assume the Axiom of Choice. If $K=\varnothing$, then $\operatorname{cap}(K)=\tau(K)=\operatorname{cheb}(K)=0$ by their empty-set conventions [F1, F3, F5], so the capacity equality holds; the norm and Fekete-sequence assertions require $K$ infinite or $\operatorname{cap}(K)>0$, respectively. For the remaining proof assume $K\ne\varnothing$, so that $t_n(K)$ and $V_K$ are defined as well as $\delta_n(K)$, $\tau(K)$, $\operatorname{cheb}(K)$ and $\operatorname{cap}(K)$. [given, F1, F3, F5]

1.2 For every $n\ge2$ the set of $n$-point Fekete tuples of $K$ is nonempty by [F1]; the Axiom of Choice yields Countable Choice by [F16], so select a sequence $(z^{(n)})_{n\ge2}$ with $z^{(n)}=(z^{(n)}_1,\dots,z^{(n)}_n)$ an $n$-point Fekete tuple of $K$, and write $F_n(Z)=\prod_{j=1}^n(Z-z^{(n)}_j)$, a monic polynomial of degree $n$ by [F1], with $\|F_n\|_K=\max_{z\in K}|F_n(z)|\in[0,\infty)$ by [F3]. [F1, F3, F16, choose]

1.3 For every nonempty compact metric space $X$, points $z_1,\dots,z_n\in X$ and continuous $f:X\to\mathbb R$, the finite weighted sum $\nu:=\frac1n\sum_{j=1}^n\delta_{z_j}$ is a Borel probability measure on $X$ by [F7] and satisfies $\int f\,d\nu=\frac1n\sum_{j=1}^nf(z_j)$; consequently, for every continuous $g:K\times K\to\mathbb R$, the iterated integral against $\nu_n:=\frac1n\sum_{j=1}^n\delta_{z^{(n)}_j}$ evaluates as $\iint g\,d\nu_n\,d\nu_n=\frac1{n^2}\sum_{i=1}^n\sum_{j=1}^ng(z^{(n)}_i,z^{(n)}_j)$. Indeed, for every nonnegative measurable $h$ on $X$ one has $\int h\,d\nu=\frac1n\sum_{j=1}^nh(z_j)$: for a nonnegative simple measurable $s=\sum_kc_k\chi_{E_k}$ in pairwise disjoint representation, the defining formula $\nu(E)=\frac1n\sum_j\delta_{z_j}(E)$ of [F7] and the simple integral of [F21] give $\int s\,d\nu=\sum_kc_k\nu(E_k)=\frac1n\sum_j\sum_kc_k\chi_{E_k}(z_j)=\frac1n\sum_js(z_j)$, and for general $h\ge0$ the increasing simple approximations $s_m\uparrow h$ of [F20] together with [F13] and [F15] give $\int h\,d\nu=\lim_m\int s_m\,d\nu=\lim_m\frac1n\sum_js_m(z_j)=\frac1n\sum_jh(z_j)$; a continuous real $f$ is bounded by [F17] and Borel measurable by [F22], so $\int|f|\,d\nu\le\|f\|_\infty\nu(X)=\|f\|_\infty<+\infty$ by [F22] and $f$ is $\nu$-integrable by [F21]; its positive and negative parts are nonnegative bounded Borel by [F21], so $\int f\,d\nu=\int f^+\,d\nu-\int f^-\,d\nu=\frac1n\sum_jf^+(z_j)-\frac1n\sum_jf^-(z_j)=\frac1n\sum_jf(z_j)$; finally the slices $w\mapsto g(z^{(n)}_i,w)$ and $z\mapsto g(z,z^{(n)}_j)$ of the continuous $g$, and the finite sum $z\mapsto\frac1n\sum_{j=1}^ng(z,z^{(n)}_j)$, are continuous by [F22], so this formula applied on the compact metric space $K$ to the continuous functions $w\mapsto g(z^{(n)}_i,w)$ and $z\mapsto\frac1n\sum_{j=1}^ng(z,z^{(n)}_j)$ gives $\int g(z^{(n)}_i,w)\,d\nu_n(w)=\frac1n\sum_jg(z^{(n)}_i,z^{(n)}_j)$ for each $i$ and hence $\iint g\,d\nu_n\,d\nu_n=\frac1n\sum_i\frac1n\sum_jg(z^{(n)}_i,z^{(n)}_j)$. [given, F7, F13, F15, F17, F20, F21, F22]

1.4 If $K$ is finite, say $K=\{a_1,\dots,a_m\}$ with $m\ge1$, then for every $n\ge m$ the polynomial $G_n(Z):=Z^{n-m}\prod_{k=1}^m(Z-a_k)$ is monic of degree $n$ and vanishes on $K$, so $t_n(K)=0$ by [F3]; the infimum defining $\operatorname{cheb}(K)$ is therefore $0$, and $\operatorname{cheb}(K)=0\le\tau(K)$ because $\tau(K)\ge0$ by [F1]. [F1, F3, algebra]

1.5 Assume for the rest of this phase that $K$ is infinite, and fix $n\ge2$. Then $\delta_n(K)>0$: since $K$ contains $n$ distinct points, the tuple of those points has $D_n>0$, so the maximum in [F1] is positive. [F1, given, algebra]

1.6 For every $z\in K$ the $(n+1)$-tuple $(z,z^{(n)}_1,\dots,z^{(n)}_n)$ satisfies $D_{n+1}(z,z^{(n)}_1,\dots,z^{(n)}_n)=|F_n(z)|\,D_n(z^{(n)}_1,\dots,z^{(n)}_n)$, because the pairs not involving $z$ reproduce the Vandermonde product of $z^{(n)}$ and the pairs involving $z$ reproduce $|F_n(z)|=\prod_j|z-z^{(n)}_j|$ by the multiplicativity in [F19]; equivalently $D_{n+1}(z,z^{(n)})=|F_n(z)|\,\delta_n(K)^{\binom n2}$ by [F1]. [F1, F19, algebra]

1.7 Since $F_n$ is monic of degree $n$, [F1] and [F3] give $t_n(K)\le\|F_n\|_K$ and $\operatorname{cheb}(K)\le t_n(K)^{1/n}\le\|F_n\|_K^{1/n}$ for every $n\ge2$; hence $\operatorname{cheb}(K)\le\liminf_n\|F_n\|_K^{1/n}$ by [F15]. [F1, F3, F15, algebra]

1.8 If $K=\varnothing$ then $\operatorname{cap}(K)=0=\operatorname{cheb}(K)$ by the conventions of [F3] and [F5]; if $K\ne\varnothing$, [F6] gives $\operatorname{cap}(K)\le\operatorname{cheb}(K)$. Thus $\operatorname{cap}(K)\le\operatorname{cheb}(K)$ for every compact $K$. [F3, F5, F6]

1.9 The finite sums $\sum_if_i(z)h_i(w)$ of continuous real functions on $K$ form a unital subalgebra of $C(K\times K,\mathbb R)$ that separates points, so they are uniformly dense in $C(K\times K,\mathbb R)$ by [F11], since $K\times K$ is a nonempty compact metric space by [F17]. [F11, F17, algebra]

1.10 Fix $R>\operatorname{diam}K$ and $M>0$ and put $g_M:=\min(M,k_R)$ on $K\times K$. By [F4] the function $k_R=k+\log R$ is nonnegative on $K\times K$ with diagonal value $+\infty$, so $g_M$ is continuous, $0\le g_M\le M$, $g_M\le k_R$, and $g_M(z,z)=M$ for every $z\in K$. [F4, F19, algebra]

1.11 Let $L\subseteq\mathbb C\setminus K$ be nonempty and compact. The kernel $k$ is continuous on $L\times K$ and uniformly continuous there. Indeed $(z,w)\mapsto|z-w|$ is continuous and never vanishes on $L\times K$, because $L\cap K=\varnothing$, so by [F17] its modulus attains a minimum $m>0$ on the nonempty compact set $L\times K$; the functions $|z-w|\mapsto\frac1{|z-w|}$ and $t\mapsto\log t$ are continuous on their domains and composition preserves continuity by [F19], so $k=-\log|z-w|$ is continuous on $L\times K$; uniform continuity follows from [F18]. [F17, F18, F19, algebra]

2.1 The tuple $(z,z^{(n)})$ lies in $K^{n+1}$, so [F1] bounds its $D_{n+1}$ by $\delta_{n+1}(K)^{\binom{n+1}2}$; dividing step 1.6 by $\delta_n(K)^{\binom n2}>0$ (step 1.5) and taking the supremum over $z\in K$ gives $\|F_n\|_K\le\delta_{n+1}(K)^{\binom{n+1}2}\delta_n(K)^{-\binom n2}$; taking nonnegative $n$-th roots by [F14] and using $\delta_{n+1}(K)\le\delta_n(K)$ from [F2] gives $\|F_n\|_K^{1/n}\le(\delta_{n+1}(K)/\delta_n(K))^{n/2}\sqrt{\delta_{n+1}(K)\delta_n(K)}\le\delta_n(K)$. [step 1.6, F1, F2, F14, algebra]

2.2 Assume $\tau(K)>0$ for this phase. Then $\delta_n(K)\ge\tau(K)>0$ for every $n\ge2$ by [F1], so no Fekete tuple of step 1.2 has a repeated entry and the sum $E_n:=\sum_{i<j}k(z^{(n)}_i,z^{(n)}_j)=\binom n2\log\frac1{\delta_n(K)}$ is finite by [F4]; moreover $\log\frac1{\delta_n(K)}\to\log\frac1{\tau(K)}$, since $\delta_n(K)\to\tau(K)>0$ and $t\mapsto\log\frac1t$ is continuous on $(0,\infty)$ by [F19]. [step 1.2, F1, F4, F19, algebra]

2.3 Put $\nu_n:=\frac1n\sum_{j=1}^n\delta_{z^{(n)}_j}\in P(K)$ for $n\ge2$; these are Borel probability measures on $K$ by [F7], so by [F9], whose Axiom of Choice hypothesis is part of the Given, there are a strictly increasing sequence $n_k$ and a measure $\hat\nu\in P(K)$ with $\nu_{n_k}\Rightarrow\hat\nu$. [step 1.2, F7, F8, F9, choose]

3.1 Since $\delta_n(K)\to\tau(K)$ by [F2], step 2.1 and [F15] give $\limsup_{n\to\infty}\|F_n\|_K^{1/n}\le\tau(K)$. [step 2.1, F2, F15]

3.2 For a finite sum $h=\sum_if_ih_i$ and every Borel probability $\nu$ on $K$, [F12] factorizes the iterated integral, $\iint h\,d\nu\,d\nu=\sum_i\bigl(\int f_i\,d\nu\bigr)\bigl(\int h_i\,d\nu\bigr)$; applying this to $\nu=\nu_{n_k}$ and to $\nu=\hat\nu$ and using the weak convergence of step 2.3 gives $\iint h\,d\nu_{n_k}d\nu_{n_k}\to\iint h\,d\hat\nu\,d\hat\nu$. [step 2.3, step 1.9, F8, F12, algebra]

3.3 For every $n\ge2$, step 1.3 with $g=g_M$ applied to the Fekete tuple $z^{(n)}$, the diagonal values $g_M(z^{(n)}_i,z^{(n)}_i)=M$ of step 1.10, the bound $g_M\le k_R$ off the diagonal and the Fekete identity $\sum_{i<j}k_R(z^{(n)}_i,z^{(n)}_j)=\binom n2\bigl(\log\frac1{\delta_n(K)}+\log R\bigr)$ of step 2.2 give $\iint g_M\,d\nu_n\,d\nu_n\le\frac1{n^2}\bigl(2\binom n2\log\frac1{\delta_n(K)}+2\binom n2\log R+nM\bigr)=\frac{n-1}{n}\bigl(\log\frac1{\delta_n(K)}+\log R\bigr)+\frac Mn$. [step 1.3, step 2.2, step 1.10, F4, algebra]

3.4 Assume $\operatorname{cap}(K)>0$ and let $L\subseteq\mathbb C\setminus K$ be nonempty and compact. For $z\notin K$ and $n\ge2$ one has $|F_n(z)|=\prod_j|z-z^{(n)}_j|>0$ by [F19], so the potential of $\nu_n$ from step 2.3 is $U^{\nu_n}(z)=\frac1n\sum_j\log\frac1{|z-z^{(n)}_j|}=\frac1n\log\frac1{|F_n(z)|}$ by [F4], step 1.3 and the product law for the logarithm in [F19]; hence $|F_n(z)|^{1/n}=\exp\bigl(-U^{\nu_n}(z)\bigr)$ by the identity $a^{1/n}=\exp\bigl(\frac1n\log a\bigr)$ and the inverse relation between $\exp$ and $\log$ recorded in [F19]. [step 1.3, step 2.3, F4, F19, algebra]

4.1 Steps 3.1 and 1.7 give $\operatorname{cheb}(K)\le\tau(K)$ for infinite $K$; with step 1.4 this inequality holds for every compact $K$. [step 1.4, step 3.1, step 1.7]

4.2 Hence for every bounded continuous $g$ on $K\times K$ one has $\iint g\,d\nu_{n_k}d\nu_{n_k}\to\iint g\,d\hat\nu\,d\hat\nu$: given $\varepsilon>0$, step 1.9 supplies a finite sum $h$ with $|g-h|\le\varepsilon$ on $K\times K$, step 3.2 gives convergence of the $h$ integrals, and the triangle inequality bounds the difference of the $g$ integrals by $2\varepsilon+\bigl|\iint h\,d\nu_{n_k}d\nu_{n_k}-\iint h\,d\hat\nu\,d\hat\nu\bigr|$. [step 3.2, F8, algebra]

5.1 Letting $k\to\infty$ in steps 4.2 and 3.3 and using step 2.2 gives $\iint g_M\,d\hat\nu\,d\hat\nu\le\log\frac1{\tau(K)}+\log R$. [step 2.2, step 4.2, step 3.3, F15, algebra]

6.1 As $M\to\infty$ one has $g_M\uparrow k_R$ pointwise, so [F13] applied to the nonnegative functions $g_M$ gives $\iint k_R\,d\hat\nu\,d\hat\nu=\lim_{M\to\infty}\iint g_M\,d\hat\nu\,d\hat\nu\le\log\frac1{\tau(K)}+\log R$; by [F4], whose shift formula applies since $\hat\nu\in P(K)$ has total mass one and support in $K$ with $\operatorname{diam}K<R$, the left side equals $I(\hat\nu)+\log R$, so $I(\hat\nu)\le\log\frac1{\tau(K)}$. [step 5.1, F4, F13, algebra]

7.1 Since $\hat\nu\in P(K)$, the minimality in [F5] gives $V_K\le I(\hat\nu)\le\log\frac1{\tau(K)}<+\infty$; hence $V_K<+\infty$, $\operatorname{cap}(K)=e^{-V_K}>0$ and, by [F19], $\log\frac1{\operatorname{cap}(K)}=V_K\le\log\frac1{\tau(K)}$, that is $\tau(K)\le\operatorname{cap}(K)$. [step 6.1, F5, F19, algebra]

8.1 If $\tau(K)=0$ then steps 4.1 and 1.8 give $\operatorname{cap}(K)\le\operatorname{cheb}(K)\le\tau(K)=0$, while $\operatorname{cap}(K)\ge0$ by [F5]; if $\tau(K)>0$ then step 7.1 gives $\tau(K)\le\operatorname{cap}(K)$ and steps 4.1 and 1.8 give $\operatorname{cap}(K)\le\operatorname{cheb}(K)\le\tau(K)$; in both cases $\operatorname{cap}(K)=\tau(K)=\operatorname{cheb}(K)$. [step 4.1, step 1.8, step 7.1, F5, algebra]

9.1 Assume $\operatorname{cap}(K)>0$. By step 8.1, $\tau(K)=\operatorname{cap}(K)>0$, so the hypotheses of phase 4 hold and the argument of steps 4.2, 3.3, 5.1, 6.1 and 7.1 applies to any subsequence of $(\nu_n)$ in place of $(\nu_{n_k})$, because only the Fekete property of each $z^{(n)}$ and the limit $\log\frac1{\delta_n(K)}\to\log\frac1{\tau(K)}$ of step 2.2 are used: if $\hat\nu\in P(K)$ is a weak limit of a subsequence of $(\nu_n)$, then $I(\hat\nu)\le\log\frac1{\tau(K)}=V_K$ by steps 6.1, 7.1 and 8.1, while $V_K\le I(\hat\nu)$ by [F5]; hence $I(\hat\nu)=V_K$, and the uniqueness part of [F10] gives $\hat\nu=\mu_K$. [step 4.2, step 3.3, step 5.1, step 6.1, step 8.1, F5, F10]

9.2 If $K$ is infinite, then steps 3.1 and 1.7 with step 8.1 give $\operatorname{cheb}(K)\le\liminf_n\|F_n\|_K^{1/n}\le\limsup_n\|F_n\|_K^{1/n}\le\tau(K)=\operatorname{cheb}(K)$, so $\lim_n\|F_n\|_K^{1/n}=\operatorname{cheb}(K)=\operatorname{cap}(K)$; since steps 3.1 and 1.7 use only the Fekete property of each $z^{(n)}$ and the definitions, this limit is the same for every sequence of $n$-point Fekete tuples. [step 3.1, step 1.7, step 8.1, F15]

10.1 Consequently $\nu_n\Rightarrow\mu_K$. Indeed, for every bounded continuous real $f$ the sequence $a_n:=\int f\,d\nu_n$ is bounded, and every subsequence of $(a_n)$ has a sub-subsequence converging to $\int f\,d\mu_K$: the corresponding subsequence of $(\nu_n)$ has a weakly convergent sub-subsequence by [F9], and its limit is $\mu_K$ by step 9.1, so the integrals converge by [F8]. A bounded real sequence all of whose subsequences have a sub-subsequence with the same limit $L$ converges to $L$; hence $a_n\to\int f\,d\mu_K$, which is weak convergence. [step 9.1, F8, F9, algebra]

11.1 Let $\varepsilon>0$ and let $\delta>0$ satisfy the uniform continuity of step 1.11 for the tolerance $\varepsilon$. By compactness of $L$ and [F17] there are finitely many $z_1,\dots,z_r\in L$ with $L\subseteq\bigcup_{i\le r}B(z_i,\delta)$; for each $i$ the function $w\mapsto k(z_i,w)$ is bounded and continuous on $K$, so step 10.1 gives $N$ with $\bigl|\int k(z_i,w)\,d(\nu_n-\mu_K)(w)\bigr|<\varepsilon$ for all $n\ge N$ and all $i\le r$. For $z\in L$ choose $i$ with $|z-z_i|<\delta$; then $|U^{\nu_n}(z)-U^{\mu_K}(z)|\le\varepsilon+\varepsilon+\varepsilon$, because the two outer terms are bounded by $\varepsilon$ from the uniform continuity of step 1.11 and the middle term is the displayed integral. [step 10.1, step 1.11, F8, F17, algebra]

12.1 Both $U^{\nu_n}$ and $U^{\mu_K}$ take values in the bounded interval $[-C,C]$, where $C:=\max_{L\times K}|k|<+\infty$ exists by [F17] and [F19]; the exponential is continuous and therefore uniformly continuous on $[-C,C]$ by [F18] and [F19], so step 11.1 gives $\sup_{z\in L}\bigl|\exp(-U^{\nu_n}(z))-\exp(-U^{\mu_K}(z))\bigr|\to0$. [step 11.1, F17, F18, F19, algebra]

13.1 By step 3.4 the left-hand function is $|F_n(z)|^{1/n}$ for $z\in L$, so step 12.1 is exactly the asserted uniform exterior limit $\sup_{z\in L}\bigl||F_n(z)|^{1/n}-\exp(-U^{\mu_K}(z))\bigr|\to0$. [step 3.4, step 12.1]

14.1 Assembly: step 8.1 proves $\operatorname{cap}(K)=\tau(K)=\operatorname{cheb}(K)$ for every compact $K$; step 9.2 proves the Fekete-polynomial norm limit for infinite $K$; step 10.1 proves weak convergence of the empirical measures to $\mu_K$ when $\operatorname{cap}(K)>0$; and step 13.1 proves the uniform exterior limit. [step 8.1, step 10.1, step 9.2, step 13.1] ∎

## Remarks

**The two directions of the equality are different in character.** The inequality $\operatorname{cheb}(K)\le\tau(K)$ is elementary: appending one point to a Fekete tuple compares the monic Fekete polynomial with the Fekete diameters. The reverse comparison $\tau(K)\le\operatorname{cap}(K)$ is where the equilibrium theory enters: a weak limit of the Fekete counting measures has energy at most $\log\frac1{\tau(K)}$, and minimality of $V_K$ forces equality and identifies the limit with $\mu_K$. The inequality $\operatorname{cap}(K)\le\operatorname{cheb}(K)$ of [F6] closes the circle.

**The hypothesis that $K$ is infinite in the norm limit is necessary.** For a finite set $K$ all sufficiently large tuples have a repeated entry, so every tuple is a Fekete tuple once $\delta_n(K)=0$; the monic Fekete polynomial of a tuple that uses only one point of $K$ has norm $>0$ in general, while $\operatorname{cheb}(K)=0$ by step 1.4. Hence the limit statement is asserted only for infinite $K$, where $\delta_n(K)>0$ for every $n$.

**Choice.** Countable Choice selects one Fekete tuple per $n$; Dependent or Countable Choice is derived from the standing Axiom of Choice hypothesis. The weak compactness of [F9], the equilibrium measure of [F10] and the monic bound of [F6] are the only other places where a choice principle is used. Everything else, including the truncation estimate of steps 3.3, 5.1, 6.1 and 7.1 and the finite-net argument of steps 1.11, 11.1 and 12.1, is choice-free.

**Sources.** The equality $\tau=\operatorname{cap}$ and the convergence of the Fekete counting measures are Saff, Theorem 1.9; the comparison with the Chebyshev constant and the exterior limit are Saff, Theorem 1.18; the printed page range is pp. 172–178 of the cited arXiv version.
