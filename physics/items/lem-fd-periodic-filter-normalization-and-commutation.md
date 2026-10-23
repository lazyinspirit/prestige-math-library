---
id: lem-fd-periodic-filter-normalization-and-commutation
kind: lemma
title: Normalization, periodization, and derivative commutation for the positive fluid filter
status: published
origin: pipeline
domain: mathematics
dependency_level: 2
deps:
  - def-countable-choice
  - def-fd-positive-convolution-fluid-filter
  - cor-change-of-variables-for-compactly-supported-functions
  - thm-differentiation-under-the-integral-sign-on-a-compact-rectangle
  - thm-riemann-fubini-on-product-rectangles
  - thm-multidimensional-integral-properties
  - thm-multidimensional-riemann-criterion
  - thm-heine-borel-rn
  - thm-heine-cantor-metric
  - def-multidimensional-darboux-sums
  - def-multidimensional-grid-partition
  - lem-finite-sum-laws
  - cor-archimedean-reciprocal
dependency_roles:
  def-countable-choice: mathematical-premise
  def-fd-positive-convolution-fluid-filter: mathematical-premise
  cor-change-of-variables-for-compactly-supported-functions: mathematical-premise
  thm-differentiation-under-the-integral-sign-on-a-compact-rectangle: mathematical-premise
  thm-riemann-fubini-on-product-rectangles: mathematical-premise
  thm-multidimensional-integral-properties: mathematical-premise
  thm-multidimensional-riemann-criterion: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-heine-cantor-metric: mathematical-premise
  def-multidimensional-darboux-sums: mathematical-premise
  def-multidimensional-grid-partition: mathematical-premise
  lem-finite-sum-laws: mathematical-premise
  cor-archimedean-reciprocal: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "University of Washington, ME 544, Large-Eddy Simulation lecture notes, 8 May 2018"
      url: "https://courses.washington.edu/mengr544/handouts/hd-les.pdf"
    - title: "Gregory L. Eyink, The ‘Multifractal Model’ of Turbulence and A Priori Estimates in Large-Eddy Simulation, I. Subgrid Flux and Locality of Energy Transfer, arXiv:chao-dyn/9602018v1"
      url: "https://arxiv.org/pdf/chao-dyn/9602018"
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---
## Statement

Assume the Axiom of Countable Choice required by the normalized periodic torus convention. Let $d\in\{1,2,3\}$, $L>0$, $\mathbb T_L^d=(\mathbb R/L\mathbb Z)^d$, and $d\mu_L=L^{-d}dx$. Let $K:\mathbb R^d\to[0,\infty)$ be smooth, supported in a compact subset of $B_1(0)$, with $\int K(s)\,ds=1$, and let $0<\ell<L/2$. Define $G_\ell(r)=\sum_{n\in\mathbb Z^d}\ell^{-d}K((r+Ln)/\ell)$ and $\overline q_\ell(x)=\int_{\mathbb T_L^d}G_\ell(r)q(x-r)\,dx$. The locally finite sum defining $G_\ell$ is smooth, nonnegative, and $L$-periodic, and $\int_{\mathbb T_L^d}G_\ell(r)\,dx=1$. For every smooth periodic finite-dimensional field $q$, the filter also has the Euclidean representation

$$\overline q_\ell(x,t)=\int_{\mathbb R^d}K(s)q(x-\ell s,t)\,ds,$$

where $q$ on the right is its periodic lift. If $I\subseteq\mathbb R$ is open and each component of $q:I\times\mathbb T_L^d\to\mathbb R^m$ and of its time derivative has continuous spatial derivatives of every order, then the filtered field has the same regularity and, for every spatial multi-index $\beta$,

$$\partial_x^\beta\overline q_\ell=\overline{\partial_x^\beta q}_\ell,\qquad \partial_t\partial_x^\beta\overline q_\ell=\overline{\partial_t\partial_x^\beta q}_\ell.$$

For every $\gamma>0$, the kernel moments

$$M_\gamma:=\int_{\mathbb R^d}K(s)|s|^\gamma\,ds,\qquad N_\gamma:=\max_{1\le j\le d}\int_{\mathbb R^d}|\partial_jK(s)|\,|s|^\gamma\,ds$$

are finite.

## Statement references

[[def-fd-positive-convolution-fluid-filter]]

[[def-countable-choice|Countable Choice axiom]]

[[cor-change-of-variables-for-compactly-supported-functions]]

[[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]]

[[thm-riemann-fubini-on-product-rectangles]]

[University of Washington, ME 544, *Large-Eddy Simulation* lecture notes, §2, printed pp. 5–6, filter definition and commutation conditions](https://courses.washington.edu/mengr544/handouts/hd-les.pdf)

[Gregory L. Eyink, *The ‘Multifractal Model’ of Turbulence and A Priori Estimates in Large-Eddy Simulation*, §II, printed pp. 5–7, increment covariance and filter-moment estimates](https://arxiv.org/pdf/chao-dyn/9602018)

## Facts & Assumptions

**Given:** Countable Choice and the parameters and fields in the statement, with $d\in\{1,2,3\}$, $L>0$, $0<\ell<L/2$, and $K$ smooth, nonnegative, compactly supported in $B_1(0)$, and of mass one.

[A1] Adopt Countable Choice: every countable family of nonempty sets has a choice function ([[def-countable-choice]]); the Fourier-Sobolev torus convention is stated and proved under this axiom.

[F1] [[def-fd-positive-convolution-fluid-filter]]: $G_\ell(r)=\sum_{n\in\mathbb Z^d}\ell^{-d}K((r+Ln)/\ell)$ and $\overline q_\ell(x)=\int_{\mathbb T_L^d}G_\ell(r)q(x-r)\,dx$.

[F2] [[cor-change-of-variables-for-compactly-supported-functions]]: let $n\ge1$, let $V\subseteq\mathbb R^n$ be open, and let $g:V\to\mathbb R^n$ be injective and $C^1$ with invertible derivative throughout $V$. If $f:\mathbb R^n\to\mathbb R$ is compactly supported Riemann integrable and $\operatorname{supp}f\subseteq g(V)$, then the function equal to $f(g(s))|\det Dg(s)|$ on $V$ and zero outside $V$ is compactly supported Riemann integrable, and its integral over $\mathbb R^n$ equals $\int_{\mathbb R^n}f$.

[F3] [[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]]: if the integrand and its parameter derivative extend continuously to a compact rectangle, then the derivative of its one-dimensional Riemann integral is the integral of that derivative.

[F4] [[thm-riemann-fubini-on-product-rectangles]]: an integrable function on a product rectangle with integrable sections has equal multiple and iterated Riemann integrals.

[F5] [[thm-multidimensional-integral-properties]]: the multidimensional Riemann integral is linear and order preserving, and $|\int f|\le\int|f|$ for integrable $f$.

[F6] [[thm-multidimensional-riemann-criterion]]: a bounded function on a nondegenerate rectangle is Riemann integrable when its Darboux gaps can be made arbitrarily small.

[F7] [[thm-heine-borel-rn]]: closed boxes in $\mathbb R^d$ are compact.

[F8] [[thm-heine-cantor-metric]]: a continuous function on a compact metric space is uniformly continuous.

[F9] [[def-multidimensional-darboux-sums]]: the Darboux gap is the finite sum of each cell's oscillation multiplied by its volume; [[def-multidimensional-grid-partition]]: the cells cover the box and their volumes sum to its volume; [[lem-finite-sum-laws]]: finite sums preserve inequalities.

[F10] [[cor-archimedean-reciprocal]]: for each $\eta>0$ there is $N\ge1$ with $1/N<\eta$, so a compact box admits uniform grids of arbitrarily small mesh.

## Proof

1.1 For $r$ in a bounded period cell, a nonzero summand requires $|r+Ln|<\ell<L/2$. Only finitely many integer vectors $n$ meet this bound, uniformly on the cell, so the sum is locally finite there; all its derivatives are locally finite sums as well. Replacing $r$ by $r+Lm$ and reindexing $n$ by $n-m$ proves periodicity, and each summand is nonnegative. [A1, F1, given, algebra]

1.2 Every continuous integrand used below is supported in a fixed nondegenerate compact box $Q$ (enlarge the support box if necessary). By [F7] and [F8], it is bounded and uniformly continuous on $Q$. Write $V=\operatorname{vol}(Q)>0$ and let $\delta>0$ be a uniform-continuity radius for tolerance $\varepsilon/(2V)$. Choose $N\ge1$ with $1/N<\delta/(2R\sqrt d)$ by [F10], where $2R$ is the side length of a box containing $Q$, and divide each side into $N$ equal parts. Each cell's Euclidean diameter is at most $2R\sqrt d/N<\delta$, so each cell oscillation is below that tolerance. By [F9], the Darboux gap is at most $(\varepsilon/(2V))\sum_i\operatorname{vol}(Q_i)=\varepsilon/2<\varepsilon$; the criterion [F6] makes the integrand Riemann integrable. This applies componentwise to the compactly supported kernel factors and their products with the periodic field and its derivatives. [F6, F7, F8, F9, F10, given]

2.1 Choose the centered closed period cell $Q=[-L/2,L/2]^d$. For $r\in Q$ and $n\in\mathbb Z^d\setminus\{0\}$, one coordinate of $r+Ln$ has absolute value at least $L/2>\ell$, so its kernel summand is zero. Thus on $Q$ the periodized kernel is $f(r)=\ell^{-d}K(r/\ell)$, whose support $\ell\operatorname{supp}K$ is compactly contained in $B_\ell(0)\subset\operatorname{int}Q$. Its period-cell integral is therefore its integral over $\mathbb R^d$. Step 1.2 gives compact-support Riemann integrability. Apply [F2] on the open domain $V=\mathbb R^d$ with $g(s)=\ell s$. This map is a global $C^1$ diffeomorphism with image $\mathbb R^d$, $|\det Dg|=\ell^d$, and hence $\operatorname{supp}f\subseteq g(V)$; zero extension outside $V$ is vacuous. The transformed integrand is $K(s)$, giving $\int_{\mathbb T_L^d}G_\ell=\int_{\mathbb R^d}K=1$. [F2, F5, step 1.1, step 1.2]

2.2 For $\gamma>0$, the functions $K(s)|s|^\gamma$ and $|\partial_jK(s)|\,|s|^\gamma$ are continuous, bounded, and compactly supported. Step 1.2 makes them Riemann integrable, and their integrals are finite by boundedness on a compact box; the finite maximum over $j$ is finite as well. [F5, step 1.2]

3.1 With the additional smooth periodic factor $q(x-r,t)$, the centered-cell argument in step 2.1 identifies the convolution with $\int_{\mathbb R^d}f_{x,t}(y)\,dy$, where $f_{x,t}(y)=\ell^{-d}K(y/\ell)q(x-y,t)$, componentwise. Each such integrand has support contained in the same compact set $\ell\operatorname{supp}K$ and is Riemann integrable by step 1.2. Apply [F2] with the same global dilation $g(s)=\ell s$ on $V=\mathbb R^d$; its image contains this support, its derivative is invertible, and zero extension outside $V$ is vacuous. The transformed integrand is $K(s)q(x-\ell s,t)$, proving the stated Euclidean representation. [F1, F2, F5, step 1.1, step 1.2, step 2.1]

4.1 On a compact time interval inside $I$ and a compact parameter interval for any coordinate $x_j$, the Euclidean representation has a continuous integrand and continuous parameter derivative on the fixed compact support box of $K$. By [F4] the multiple integral is an iterated integral; applying [F3] to each one-dimensional factor and then [F4] again passes $\partial_t$ and $\partial_{x_j}$ through the integral. Repeating this argument for each spatial derivative gives the stated multi-index identities and continuous derivatives. [F3, F4, step 1.2, step 3.1]

5.1 Steps 1.1–4.1 establish the kernel, convolution, derivative, and moment claims. [step 1.1, step 2.1, step 3.1, step 4.1, step 2.2] ∎

## Remarks

The scale change $x=Ly$ sends normalized Haar measure on $\mathbb T_L^d$ to normalized Haar measure on the unit torus. In particular, $L=2\pi$ gives the current $x=2\pi y$ Fourier convention. The lemma is a smooth periodic statement; it does not assert a commutator estimate for spatially varying filters or boundary-truncated kernels.
