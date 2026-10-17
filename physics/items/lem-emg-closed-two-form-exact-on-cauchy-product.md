---
id: lem-emg-closed-two-form-exact-on-cauchy-product
kind: lemma
title: "Closed two-forms agreeing on a Cauchy slice differ by an exact form"
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 0
proof_strategy: direct
deps:
  - def-countable-choice
  - def-dependent-choice
  - def-de-rham-cohomology
  - def-gr-smooth-lorentzian-objects
  - def-gr-spacelike-hypersurfaces-and-cauchy-sets
  - lem-emg-lorentz-hodge-calculus
  - thm-gr-smooth-cauchy-temporal-splitting
  - thm-smooth-inverse-function-theorem-on-manifolds
dependency_roles:
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-de-rham-cohomology: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  thm-gr-smooth-cauchy-temporal-splitting: mathematical-premise
  thm-smooth-inverse-function-theorem-on-manifolds: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Victor Guillemin and Peter Haine, Differential Forms, MIT 18.952 text (2019), §2.6, Theorem 2.6.15 and Exercise 2.6.iv, printed pp. 64–66"
      url: "https://math.mit.edu/classes/18.952/2019SP/18.952_book_2019.pdf"
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Assume $\mathrm{AC}_\omega$ and Dependent Choice. Let $(M,g,N)$ be a smooth
time-oriented globally hyperbolic Lorentzian four-manifold, and let
$i:\Sigma\hookrightarrow M$ be a smooth spacelike Cauchy embedding. If
$F,\bar F\in\Omega^2(M)$ are smooth closed two-forms with
$i^*F=i^*\bar F$, then $F-\bar F$ is exact: there is a smooth
$\alpha\in\Omega^1(M)$ such that $d\alpha=F-\bar F$.

Here a closed form has zero exterior derivative, and exactness means being the
exterior derivative of a globally defined smooth form, as in
[[def-de-rham-cohomology]].

## Facts & Assumptions

**Given:** The globally hyperbolic Lorentzian manifold, Cauchy embedding, two
closed forms, and the two stated choice principles.

[F1] [[def-gr-smooth-lorentzian-objects]] and
[[thm-gr-smooth-cauchy-temporal-splitting]]: the spacetime is smooth and
time-oriented; under Countable Choice and Dependent Choice it has a smooth
temporal function $T$ and a complete future-directed timelike flow $\Phi_t$
with $T(\Phi_t(p))=T(p)+t$. The published temporal-splitting carrier has
verification precheck pending; this proof uses its exact stated flow
interface conditionally and does not certify that supplier.

[F2] [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]]: a Cauchy embedding
meets every inextendible causal curve at exactly one parameter value, and the
induced metric on its spacelike image is positive definite.

[F3] [[lem-emg-lorentz-hodge-calculus]]: the exterior derivative has the
coordinate formula $d\omega=(k+1)\partial_{[a_0}\omega_{a_1\ldots a_k]}$ on
$k$-forms, and $d^2=0$.

[F4] [[def-de-rham-cohomology]]: a smooth form is exact precisely when it is
$d\alpha$ for a globally defined smooth form of one lower degree.

[L1] [[thm-smooth-inverse-function-theorem-on-manifolds]]: a smooth map with
invertible differential at a point is a diffeomorphism on sufficiently small
neighborhoods of that point.

[A1] [[def-countable-choice]] and [[def-dependent-choice]] are the only choice
principles assumed.

## Proof

**Given:** The data in the Statement.

1.1 Let $X$ and $\Phi_t$ be the complete timelike field and its flow from [F1],
and define $\Psi:\mathbb R\times\Sigma\to M$ by
$\Psi(t,x)=\Phi_t(i(x))$. Since $T(\Phi_t(p))=T(p)+t$, each orbit has no
endpoint at either infinite end and is an inextendible timelike curve. Thus
[F2] makes its intersection with $i(\Sigma)$ unique. Hence $\Psi$ is
surjective and injective: if two images agree, their points lie on the same
orbit, their slice intersections agree, and the flow times agree because the
temporal function increases at unit rate along $X$. The flow is smooth, so
$\Psi$ is smooth. If
$d\Psi_{(t,x)}(a\partial_t+V)=0$, applying $d\Phi_{-t}$ gives
$aX_{i(x)}+d i_x(V)=0$. The first vector is timelike when $a\ne0$, while the
second is tangent to a spacelike hypersurface; therefore $a=0$ and $V=0$.
Thus $d\Psi$ is an isomorphism, and [L1] shows that $\Psi$ is a local
diffeomorphism. Its bijectivity makes it a global diffeomorphism, with
$\Psi(0,x)=i(x)$. [given, A1, F1, F2, L1, algebra, construct]

2.1 Pull back $G:=F-\bar F$ to the product and write its unique time/spatial
decomposition as $\widetilde G:=\Psi^*G=dt\wedge\eta_t+\beta_t$, where
$\eta_t$ is a smooth family of spatial one-forms and $\beta_t$ a smooth
family of spatial two-forms on $\Sigma$. Pullback commutes with $d$: in local
coordinates the first-derivative terms in $d(\Psi^*G)$ are the pullback of
$dG$, while the second derivatives of $\Psi$ cancel in pairs because mixed
partials commute and $G$ is antisymmetric. Since $dG=0$ by hypothesis and
[F3], the product-coordinate formula for $d\widetilde G$ gives
$\partial_t\beta_t=d_\Sigma\eta_t$. The slice equality implies $\beta_0=0$.
Define the spatial one-form $\widetilde\alpha_t:=\int_0^t\eta_s\,ds$ and
give $\widetilde\alpha$ zero $dt$ component. The integral of a smooth
parameter family is smooth, and direct differentiation gives
$d\widetilde\alpha=dt\wedge\eta_t+d_\Sigma\widetilde\alpha_t
=dt\wedge\eta_t+\int_0^t d_\Sigma\eta_s\,ds
=dt\wedge\eta_t+\beta_t=\widetilde G$. [step 1.1, F3, algebra,
construct]

3.1 Set $\alpha:=(\Psi^{-1})^*\widetilde\alpha$. The same coordinate
pullback identity gives $d\alpha=G=F-\bar F$. By [F4], this is exact on the
whole spacetime, not merely on coordinate neighborhoods. [step 1.1, step 2.1,
F4, algebra] ∎

