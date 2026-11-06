---
id: thm-gts-r4-05b-wendl-generic-one-parameter-regularity-for-somewhere-injective-curves
kind: theorem
title: Wendl generic one-parameter regularity for somewhere-injective curves
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
dependency_level: 9
deps:
  - lem-gts-closed-surface-real-cauchy-riemann-fredholm-index-and-adjoint
  - lem-gts-local-domain-slices-and-compact-simple-curve-exhaustion
  - thm-baire-category-for-complete-metric-spaces
  - def-gts-symplectic-and-almost-complex-curve-data
  - def-axiom-of-choice
  - def-nowhere-dense-meagre-and-residual-subsets
  - def-fredholm-maps-and-regular-values-on-countable-banach-manifolds
  - thm-sard-smale-residual-regular-values-for-fredholm-maps
  - thm-inverse-function-theorem-for-banach-spaces
  - thm-implicit-function-theorem-for-banach-spaces
  - thm-gts-fredholm-and-generic-transversality-for-simple-curves
dependency_roles:
  lem-gts-closed-surface-real-cauchy-riemann-fredholm-index-and-adjoint: mathematical-premise
  lem-gts-local-domain-slices-and-compact-simple-curve-exhaustion: mathematical-premise
  thm-baire-category-for-complete-metric-spaces: mathematical-premise
  def-gts-symplectic-and-almost-complex-curve-data: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-nowhere-dense-meagre-and-residual-subsets: mathematical-premise
  def-fredholm-maps-and-regular-values-on-countable-banach-manifolds: mathematical-premise
  thm-sard-smale-residual-regular-values-for-fredholm-maps: mathematical-premise
  thm-inverse-function-theorem-for-banach-spaces: mathematical-premise
  thm-implicit-function-theorem-for-banach-spaces: mathematical-premise
  thm-gts-fredholm-and-generic-transversality-for-simple-curves: mathematical-premise
axiom_use: The full Axiom of Choice is assumed through Sard–Smale; no weaker choice strength is claimed.
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Chris Wendl, Lectures on Holomorphic Curves in Symplectic and Contact Geometry, version 3.2
      url: https://arxiv.org/pdf/1011.1690v2
      locator: Theorem 4.12 and §4.4, printed pp. 143–155 and 160–161
    - title: Stephen Smale, An Infinite Dimensional Version of Sard's Theorem
      url: https://people.math.harvard.edu/~dafr/M392C-2018-MorseTheory/Readings/Smale.pdf
      locator: Theorem 1.3; exact imported theorem and proof are linked below
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume the full Axiom of Choice. Let $M$ be closed with a smooth path of symplectic forms $\omega_s$, and suppose compatible endpoint data $J_0,J_1$ are regular in Wendl's fixed-$J$ sense. A residual subset of compatible paths $J_s$ has a parametrized somewhere-injective curve moduli space that is a smooth finite-dimensional manifold with boundary $\{0\}\times\mathcal M^*(J_0)\sqcup\{1\}\times\mathcal M^*(J_1)$. Near a genus-$g$, $m$-marked, class-$A$ curve its dimension is the fixed-$J$ virtual dimension plus one, with that virtual dimension as specified in the preceding theorem. This conclusion asserts regularity and boundary structure only, not compactness.

## Statement references

[[thm-gts-fredholm-and-generic-transversality-for-simple-curves]]

[[lem-gts-local-domain-slices-and-compact-simple-curve-exhaustion]]

## Facts & Assumptions

**Given:** Full AC, the closed target, smooth symplectic path, and fixed compatible regular endpoint data in the Statement. Paths have these exact endpoint values and the smooth compact-open topology. Curve moduli use the unparametrized, connected-source and distinct ordered-marking convention of the preceding theorem.

[F1] The complete preceding theorem proves the closed-curve Fredholm/index and compatible-variation universal surjectivity arguments. Its finite target-variation proof works at any one parameter value. [[thm-gts-fredholm-and-generic-transversality-for-simple-curves]] [[lem-gts-closed-surface-real-cauchy-riemann-fredholm-index-and-adjoint]]

[F2] Actual local quotient charts, including nonstable domains and smooth finite-parameter families, and the countable compact exhaustion with uniform first-derivative and injectivity bounds are supplied locally. [[lem-gts-local-domain-slices-and-compact-simple-curve-exhaustion]]

[F3] The arbitrary-Banach inverse/implicit theorems on the actual kernel complement, Sard–Smale for countable-base smooth finite-dimensional projections, and Baire category are the exact local analytic tools. [[thm-inverse-function-theorem-for-banach-spaces]] [[thm-implicit-function-theorem-for-banach-spaces]] [[thm-sard-smale-residual-regular-values-for-fredholm-maps]] [[thm-baire-category-for-complete-metric-spaces]] [[def-fredholm-maps-and-regular-values-on-countable-banach-manifolds]] [[def-nowhere-dense-meagre-and-residual-subsets]] [[def-axiom-of-choice]]

## Proof

1.1 The compatible path space is nonempty. Put $h_i=\omega_i(\cdot,J_i\cdot)$ and interpolate the positive metrics by $h_s=(1-s)h_0+sh_1$. Define the $h_s$-skew invertible map $A_s$ by $h_s(A_sv,w)=\omega_s(v,w)$ and set $J_s^{\mathrm{ref}}=A_s(-A_s^2)^{-1/2}$. The positive square root commutes with $A_s$, so this squares to $-I$. Writing $B_s=(-A_s^2)^{1/2}$ gives $\omega_s(v,J_s^{\mathrm{ref}}w)=h_s(B_sv,w)>0$, and the same identity gives compatibility. The matrix inverse square root is smooth; for example its convergent formula $(2/\pi)\int_0^\infty(t^2I-A_s^2)^{-1}dt$ differentiates uniformly on compact target/parameter sets, using a positive uniform spectral lower bound. At the two endpoints $A_i=J_i$ and $B_i=I$, giving precisely $J_0,J_1$. Around any compatible path, compatible Cayley charts identify nearby fixed-endpoint paths with an open set in the complete Fréchet space of smooth symmetric anticommuting sections vanishing at both endpoints. This space is locally Baire by [F3]. [given, F1, F3, construct, algebra]

2.1 Use [F2]'s actual source/map slices and include $s\in[0,1]$ as an additional variable in $F(s,j,u,J_{[0,1]})=\bar\partial_{j,J_s}u$. At an interior value $s_0$, the annihilator argument of [F1] selects finitely many compatible tangent variations $Y_\nu$ near an injective image point. Extend each variation smoothly in $s$ BEFORE applying a parameter bump: on its small target support choose a smooth family of $\omega_s$-unitary frames for $(TM,J_s)$ agreeing with its chosen frame at $s_0$, and use the same symmetric complex-antilinear matrix coefficients in those frames. Local Gram–Schmidt supplies these frames after shrinking the parameter interval. Thus $Y_\nu(s)$ anticommutes with $J_s$ and is symmetric for $\omega_s(\cdot,J_s\cdot)$ at every supported $s$. Multiply by a smooth bump supported inside $(0,1)$ and equal to one at $s_0$, retaining compact target support. The finite symplectic-conjugation formula $S_{s,t}=\exp(\tfrac12J_s\sum_\nu t_\nu Y_\nu(s))$, $J_{s,t}=S_{s,t}J_sS_{s,t}^{-1}$, therefore preserves BOTH endpoint structures and compatibility with each $\omega_s$, and has precisely the required variations at $s_0$. Thus the universal derivative in $(s,j,u,t)$ is onto near that curve. At an endpoint, the fixed-$J_i$ vertical derivative in $(j,u)$ is already onto by hypothesis, so the universal derivative is onto there without changing the endpoint. The vertical parameterized index is $I+1$, where $I$ is the displayed fixed-$J$ dimension in the preceding theorem; adding one free real parameter adds one to the Fredholm index, and the index is unchanged along the smooth complex-bundle family. [F1, F2, given, step 1.1, construct, algebra]

3.1 At an endpoint fix the bounded right inverse of the surjective $(j,u)$ derivative and split its Hilbert domain as its finite-dimensional kernel and the inverse image complement. The derivative on that complement is a bounded isomorphism onto the actual Hilbert equation space. Apply the arbitrary-Banach implicit theorem [F3], with the kernel, $s$ and the finite path-perturbation parameters as the other variables. Its open-parameter hypothesis is legitimate: a smooth coefficient family on the closed interval is locally extendible across an endpoint by the definition of smoothness up to the boundary. More explicitly, near $J_i$ express the family in a Cayley chart of real endomorphisms anticommuting with $J_i$; extend those linear coefficients locally across $s=i$, using a finite target cover and a smooth partition of unity, then apply the Cayley formula. The resulting almost-complex extension agrees with the entire supplied family on its physical side. Compatibility with $\omega_s$ outside $[0,1]$ is not needed for this local equation extension. The implicit theorem now gives smooth open charts with coordinates $(k,s,t)$; intersecting with $s\ge0$ or $1-s\ge0$ gives half-space charts. Their boundary is EXACTLY the endpoint zero set, since its equation and endpoint structure are unchanged for every perturbation parameter. Restricting to a fixed regular path leaves coordinates $(k,s)$ and the asserted endpoint boundary. Interior charts are those of [F2]; its solution-level higher-regularity argument gives smooth overlaps. No curve gluing or compactification is used. [F1, F2, F3, step 2.1, construct, algebra]

4.1 For genericity take [F2]'s countable compact curve families, now also with $s$ in compact $[0,1]$, and let $G_\ell$ consist of paths for which all parameterized curves in the family are regular. Each is open: a sequence of irregular curves for smoothly convergent paths has a smooth subsequential limit in that family; if its $s$ limit is interior, surjectivity persists in the local chart, and if it is an endpoint, endpoint vertical regularity likewise persists. Both contradict irregularity. To prove density near a chosen path, compactness gives finitely many chart neighborhoods. Near its endpoint curves no path perturbation is needed, because their fixed vertical derivatives are onto and remain so nearby. The remaining compact set of curves has $s$ bounded away from the endpoints, after taking those open endpoint neighborhoods. Choose finitely many of the interior bump-supported path variations from step 2.1 covering this remainder. Their union is one finite family of exact compatible fixed-endpoint paths. All nearby curves in the exhaustion family lie in this chart union, by the same sequential compactness argument. Apply [F3] to the projection of its interior universal zero manifolds to the finite parameter space. As in [F1], regular values are exactly regular paths for those curves. Arbitrarily small regular parameters exist. Endpoint curves are regular for every parameter. Thus $G_\ell$ is dense in the full smooth path topology. [F1, F2, F3, step 2.1, step 3.1, construct, algebra]

5.1 Intersect these countably many open dense $G_\ell$, over the source slices and genera, using the local Baire charts in step 1.1. Every somewhere-injective parameterized curve occurs in the exhaustion, so every path in that residual set is regular for all of them. [F2] and step 3.1 give its smooth manifold with the exact endpoint boundary. Its local dimension is $I+1$ by step 2.1; adding free distinct markings adds the same $2m$ already included in $I$, as in [F1]. None of the compact sets used to prove residuality is a compactification of the entire moduli. No global compactness, virtual class, or continuation invariant is asserted. This proves the entire Statement. [F1, F2, F3, step 1.1, step 2.1, step 3.1, step 4.1, construct, algebra] ∎

## Proof status

The endpoint chart, relative path-variation and full smooth-topology residuality arguments are proved above using the same exact local suppliers as the fixed-$J$ theorem. No new global analytic construction is assumed. All analytic suppliers are the actual adopted fixed-$J$ apparatus; the fixed-endpoint relative variations and endpoint half-space charts are constructed explicitly here.
