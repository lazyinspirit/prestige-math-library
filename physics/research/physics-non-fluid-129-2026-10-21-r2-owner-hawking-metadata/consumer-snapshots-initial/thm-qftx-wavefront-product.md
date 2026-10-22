---
id: thm-qftx-wavefront-product
kind: theorem
title: Product and pullback under wavefront transversality
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 4
deps:
  - def-qftx-distributions-on-smooth-manifolds
  - def-qftx-wavefront-hadamard
  - lem-qftx-wavefront-chart-invariance
  - def-countable-choice
  - lem-compactly-supported-distributions-extend-to-smooth-functions
  - thm-local-finite-order-characterization-of-distributions
  - thm-fourier-transform-of-a-compactly-supported-distribution-is-a-smooth-polynomially-bounded-multiplier
  - thm-fourier-inversion-on-schwartz-space
  - lem-schwartz-parameter-pairing-and-integral-interchange
  - thm-tensor-product-distributions-and-iterated-pairings
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - lem-test-function-cutoffs-and-euclidean-localization
dependency_roles:
  def-qftx-distributions-on-smooth-manifolds: mathematical-premise
  def-qftx-wavefront-hadamard: mathematical-premise
  lem-qftx-wavefront-chart-invariance: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-compactly-supported-distributions-extend-to-smooth-functions: mathematical-premise
  thm-local-finite-order-characterization-of-distributions: mathematical-premise
  thm-fourier-transform-of-a-compactly-supported-distribution-is-a-smooth-polynomially-bounded-multiplier: mathematical-premise
  thm-fourier-inversion-on-schwartz-space: mathematical-premise
  lem-schwartz-parameter-pairing-and-integral-interchange: mathematical-premise
  thm-tensor-product-distributions-and-iterated-pairings: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Romeo Brunetti and Klaus Fredenhagen, Microlocal analysis and interacting quantum field theories: renormalization on physical backgrounds"
      url: https://arxiv.org/pdf/math-ph/9903028
      locator: Full 38-page paper, printed pp. 7–9, Section 2.1, wavefront definition, Hadamard relation, and criterion M1; the Fourier-convolution proof is supplied locally.
    - title: Klaus Fredenhagen and Katarzyna Rejzner, Perturbative algebraic quantum field theory, Appendix A
      url: https://arxiv.org/html/1208.1428
      locator: Full-text Appendix A.6–A.7 and the discussion following Theorem A.7; the pullback proof outline and diagonal criterion are expanded locally.
verification:
  precheck: pending
---

## Statement

Let $u\in\mathcal D'(M)$, where $M$ is a smooth manifold. For a smooth map $f:N\to M$, define its nonzero conormal set by
$$ N_f=\{(f(x),\eta)\in T^*M\setminus0: df_x^T\eta=0\}. $$
If $\operatorname{WF}(u)\cap N_f=\varnothing$, there is a distributional pullback $f^*u\in\mathcal D'(N)$ and
$$ \operatorname{WF}(f^*u)\subseteq \{(x,df_x^T\eta):(f(x),\eta)\in\operatorname{WF}(u)\}. $$
For $u,v\in\mathcal D'(M)$, if there is no nonzero covector $\eta$ with both $(x,\eta)\in\operatorname{WF}(u)$ and $(x,-\eta)\in\operatorname{WF}(v)$ at the same $x$, their product is defined by $uv=\Delta^*(u\otimes v)$, where $\Delta(x)=(x,x)$. It agrees with pointwise multiplication when $u,v$ are smooth and satisfies
$$ \operatorname{WF}(uv)\subseteq \{(x,\eta+\zeta):(x,\eta)\in\operatorname{WF}(u)\cup0_M,\ (x,\zeta)\in\operatorname{WF}(v)\cup0_M,\ \eta+\zeta\ne0\}. $$
Here $0_M$ is the zero section. If $\pi:X\times Y\to X$ is a coordinate projection, $\nu$ is a smooth positive density on $Y$, and $t\in\mathcal E'(X\times Y)$, define $\pi_{*,\nu}t$ by
$$ \langle \pi_{*,\nu}t,\omega\rangle =\left\langle t,\chi(\pi^*\omega\otimes\nu)\right\rangle, $$
where $\omega$ is a compactly supported test density on $X$ and $\chi$ is a compact cutoff equal to one near $\operatorname{supp}t$. This pushforward is independent of $\chi$, compactly supported, and
$$ \operatorname{WF}(\pi_{*,\nu}t)\subseteq \{(x,\eta):\text{ for some }y,\ (x,y;\eta,0)\in\operatorname{WF}(t)\}. $$
The pullback condition is a local transversality requirement; this theorem does not define an arbitrary restriction of a singular kernel to a diagonal where the condition fails.

## Statement references

[[def-qftx-distributions-on-smooth-manifolds]]

[[def-qftx-wavefront-hadamard]]

[[thm-tensor-product-distributions-and-iterated-pairings]]

## Facts & Assumptions

**Given:** Smooth manifolds $M,N$, distributions $u,v$, and a smooth map $f:N\to M$. Assume $\mathrm{AC}_\omega$.

[A1] Assume only Countable Choice $\mathrm{AC}_\omega$ for the Schwartz Fourier inversion and absolutely integrable parameter-pairing clauses below ([[def-countable-choice]]).

[F1] Distributions on a manifold are continuous linear functionals on compactly supported smooth densities; compactly supported ones act after cutoff extension ([[def-qftx-distributions-on-smooth-manifolds]], [[lem-compactly-supported-distributions-extend-to-smooth-functions]]).

[F2] The wavefront definition is chart-independent, closed and conic; empty wavefront is equivalent to smoothness, and smooth diffeomorphisms transport it by the cotangent map ([[def-qftx-wavefront-hadamard]], [[lem-qftx-wavefront-chart-invariance]]).

[F3] Compactly supported distributions have finite-order bounds and smooth polynomially bounded localized Fourier transforms ([[thm-local-finite-order-characterization-of-distributions]], [[thm-fourier-transform-of-a-compactly-supported-distribution-is-a-smooth-polynomially-bounded-multiplier]]).

[F4] Fourier inversion uses the $2\pi$ convention and $\mathrm{AC}_\omega$; absolutely integrable Schwartz-parameter families may be passed through tempered pairings ([[thm-fourier-inversion-on-schwartz-space]], [[lem-schwartz-parameter-pairing-and-integral-interchange]]).

[F5] Tensor products of distributions exist with associative iterated pairings and product-test Fourier transforms factor in the two coordinate blocks ([[thm-tensor-product-distributions-and-iterated-pairings]]).

[F6] The $L^1$ Fubini theorem applies to the absolutely integrable Fourier-convolution integrands under $\mathrm{AC}_\omega$ ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F7] Compact subsets of charts admit cutoffs equal to one on neighborhoods ([[lem-test-function-cutoffs-and-euclidean-localization]]).

## Proof

**Given:** [A1] and [F1]–[F7].

1.1 In a pair of coordinate charts, localize compactly supported $u$ and $v$. By [F5], the localized tensor transform factors as $\widehat{u\otimes v}(\xi,\zeta)=\widehat u(\xi)\widehat v(\zeta)$. If both covectors are regular, each factor decreases faster than every power on a conic neighborhood; if only one is singular, the other factor still supplies rapid decay in that block. The finite-order bounds [F3] control the remaining factor polynomially. Thus $\operatorname{WF}(u\otimes v)\subseteq(\operatorname{WF}(u)\times\operatorname{WF}(v))\cup(\operatorname{WF}(u)\times0_M)\cup(0_M\times\operatorname{WF}(v))$. Finite chart covers and cutoffs [F7] give the same inclusion on manifolds. [A1, F1, F3, F5, F7, algebra]

1.2 For a compactly supported test density $\omega$ on $N$, localize $u$ by a cutoff equal to one near $f(\operatorname{supp}\omega)$ and set $T_\omega(\eta):=\int_N e^{2\pi i f(x)\cdot\eta}\omega(x)$. In coordinates define $\langle f^*u,\omega\rangle=\int\widehat u(\eta)T_\omega(\eta)\,d\eta$, where $m=\dim M$. The conormal condition and compactness give a cone $V$ around the directions where $df_x^T\eta$ can vanish, disjoint from the localized wavefront directions of $u$. On $V$, $\widehat u$ is rapidly decreasing and $T_\omega$ is bounded by $\int|\omega|$. On the complementary cone, $|df_x^T\eta|\ge c|\eta|$ on $\operatorname{supp}\omega$ for some $c>0$; repeated integration by parts with the operator $(df_x^T\eta\cdot\nabla_x)/(2\pi i|df_x^T\eta|^2)$ gives $|T_\omega(\eta)|\le C_N(1+|\eta|)^{-N}$ for every $N$. Combining these bounds with [F3] makes the integral absolutely convergent and bounded by finitely many seminorms of $\omega$, so it defines a distribution. For smooth $u$, [F4] and [F6] identify the integral with $\int_Nu(f(x))\omega(x)$. To obtain the wavefront estimate, localize the output at $x_0$ and Fourier transform in $x$; the coefficient is the same double integral with phase $2\pi(f(x)\cdot\eta-x\cdot\xi)$, whose stationary equation is $\xi=df_x^T\eta$. If $(x_0,\xi_0)$ is outside the displayed pullback of $\operatorname{WF}(u)$, choose smaller cones so that either the stationary $\eta$ lies in a regular cone of $u$, or the phase gradient is bounded below by $c(|\eta|+|\xi|)$. The first region is controlled by rapid decay of $\widehat u$; in the second, repeated integration by parts gives arbitrary powers of decay in $|\xi|+|\eta|$. Integrating the polynomial bound from [F3] proves rapid output decay near $\xi_0$. [A1, F1, F3, F4, F6, F7, algebra]

2.1 For the diagonal $\Delta:M\to M\times M$, $d\Delta_x^T(\eta,\zeta)=\eta+\zeta$ and $N_\Delta=\{(x,x;\eta,-\eta):\eta\ne0\}$. By step 1.1, $\operatorname{WF}(u\otimes v)$ can meet $N_\Delta$ only if $(x,\eta)\in\operatorname{WF}(u)$ and $(x,-\eta)\in\operatorname{WF}(v)$ for a common nonzero $\eta$. The hypothesis excludes this, so step 1.2 defines $\Delta^*(u\otimes v)$. When both factors are smooth, the Fourier pullback formula in step 1.2 gives their ordinary pointwise product. [F2, F5, step 1.1, step 1.2, algebra]

3.1 On a compact chart patch, the pullback formula in step 1.2 and the factorization in [F5] give the local Fourier-convolution expression $\widehat{uv}(\xi)=\int\widehat u(\eta)\widehat v(\xi-\eta)\,d\eta$. The no-opposite-covector hypothesis separates the closed conic directions of $\widehat u$ and $\widehat v$ from cancellation. On a compact base patch their unit directions have a positive angular separation, so when both frequencies lie in their singular cones, $|\eta|+|\xi-\eta|\le C|\xi|$. In the tail $|\eta|>2|\xi|$, the two directions are nearly opposite, hence at least one factor is outside its singular cone and is rapidly decreasing; [F3] bounds the other polynomially. The integral is absolutely convergent and has polynomial growth, using [F6]. If $\xi$ lies outside $\operatorname{WF}(u)\cup\operatorname{WF}(v)\cup(\operatorname{WF}(u)+\operatorname{WF}(v))$, choose a smaller cone still outside that union; the same split makes at least one factor rapidly decreasing in every part of the convolution, proving rapid decay there. This proves the displayed wavefront inclusion and shows that the convolution product is exactly the diagonal pullback from step 2.1. Cutoffs from [F7] and coordinate invariance [F2] glue these local products. [A1, F2, F3, F5, F6, F7, step 1.2, step 2.1, algebra]

4.1 For the projection $\pi$ and smooth positive density $\nu$, define $\pi_{*,\nu}t$ by pairing $t$ with $\chi(\pi^*\omega\otimes\nu)$, where $\chi=1$ near $\operatorname{supp}t$. A change of cutoff pairs $t$ with a test density zero near its support, so the value is independent of $\chi$; the support lies in the compact set $\pi(\operatorname{supp}t)$. In a product chart, multiplication by the smooth coefficient of $\nu$ does not enlarge the wavefront set by step 3.1, and the localized Fourier transform in the base variables is the full transform of $\chi t$ evaluated at vertical frequency zero. Therefore rapid decay can fail only if $(x,y;\eta,0)\in\operatorname{WF}(t)$ for some $y$, giving the stated estimate. Finite chart covers and cutoffs [F7] give the manifold statement. [F1, F2, F7, step 3.1, algebra] ∎

## Remarks

For time-ordered kernels whose wavefront set contains diagonal conormal covectors $(x,x;\eta,-\eta)$, the hypothesis in step 2.1 fails on the diagonal. A product away from the diagonal does not by itself define a diagonal restriction; any extension across that singular set requires an additional renormalization construction.
