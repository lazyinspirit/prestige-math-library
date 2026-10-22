---
id: lem-gr-fx-differentiation-under-finite-chain-integral
kind: lemma
title: Differentiation of a smooth family of finite-chain integrals
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - def-smooth-singular-chain-and-cochain-complexes
  - def-integral-of-a-form-over-a-smooth-singular-simplex
  - def-riemann-integral-over-a-jordan-set
  - def-multidimensional-darboux-integral
  - def-multidimensional-rectangle-and-volume
  - thm-heine-borel-rn
  - thm-heine-cantor-metric
  - thm-newton-leibniz-with-interior-derivative
dependency_roles:
  def-smooth-singular-chain-and-cochain-complexes: mathematical-premise
  def-integral-of-a-form-over-a-smooth-singular-simplex: mathematical-premise
  def-riemann-integral-over-a-jordan-set: mathematical-premise
  def-multidimensional-darboux-integral: mathematical-premise
  def-multidimensional-rectangle-and-volume: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-heine-cantor-metric: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
verification:
  precheck: pending
sources:
  references:
  - title: Peter S. Park, Proof of de Rham's Theorem
    url: https://people.math.harvard.edu/~pspark/derham.pdf
    locator: 'Indirect source via the actually used local def-smooth-singular-chain-and-cochain-complexes and def-integral-of-a-form-over-a-smooth-singular-simplex:
      finite chains and simplex pullback integrals. The compact-parameter differentiation lemma is reconstructed
      locally, not attributed to this source.'
  - title: J. Lebl, Basic Analysis, Jordan Measurable Sets
    url: https://www.jirka.org/ra/html/sec_jordansets.html
    locator: 'Indirect source via the actually used local def-riemann-integral-over-a-jordan-set: zero-extension
      convention on compact simplex domains. Parameter differentiation and its uniform estimate are proved here.'
  - title: 'J. Lebl, Basic Analysis, Section 5.3: Fundamental Theorem of Calculus'
    url: https://www.jirka.org/ra/html/sec_ftc.html
    locator: Section 5.3, inherited source pointer of the actually used local thm-newton-leibniz-with-interior-derivative.
      This item applies its endpoint-increment identity to parameter difference quotients; no separate full-text
      source reading is asserted.
---

## Statement

Let $P$ be a finite-dimensional smooth manifold, let $M$ be an oriented smooth
four-manifold, and let $\Sigma$ be a fixed finite oriented smooth singular
three-chain in $M$. Let $\alpha_p$ be a smooth parameter-dependent
spacetime three-form, and assume that for every simplex in $\Sigma$ its
pullback coefficient is jointly smooth in the parameter coordinates and the
standard simplex coordinates. Define
$$I(p):=\int_\Sigma\alpha_p.$$
Then $I$ is smooth and, for every $v\in T_pP$,
$$d_PI_p(v)=\int_\Sigma d_P\alpha_p(v).$$

## Facts & Assumptions

**Given:** The finite chain $\Sigma$, the smooth family $\alpha_p$, and the
stated joint smoothness of its pullback coefficients.

[F1] A smooth singular chain is a finite real linear combination of smooth
singular simplices. [[def-smooth-singular-chain-and-cochain-complexes]]

[F2] The integral over a smooth three-simplex is the Jordan Riemann integral
of its pullback coefficient on the standard simplex domain
$T_3=\{z\in\mathbb R^3:z_i\ge0,\ z_1+z_2+z_3\le1\}$.
[[def-integral-of-a-form-over-a-smooth-singular-simplex]]

[F3] Integration over a bounded Jordan set is defined by extending the
integrand by zero to a bounded containing rectangle and integrating there.
[[def-riemann-integral-over-a-jordan-set]]

[F4] On a rectangle, the Darboux integral is the common value of the
supremum of lower grid sums and infimum of upper grid sums; common refinements
preserve the integral criterion. [[def-multidimensional-darboux-integral]]

[F5] A rectangle has finite volume, and cutting one coordinate interval
preserves total volume. [[def-multidimensional-rectangle-and-volume]]

[F6] A closed bounded subset of Euclidean space is compact.
[[thm-heine-borel-rn]]

[F7] A continuous function on a compact metric space is uniformly
continuous. [[thm-heine-cantor-metric]]

[F8] For a continuously differentiable function on a closed interval, the
integral of its derivative is the endpoint increment.
[[thm-newton-leibniz-with-interior-derivative]]

## Proof

**Given:** As in [F1]–[F8].

1.1 First consider integration on one simplex, using the zero extension in [F3] to a bounded nondegenerate rectangle $Q$. The Darboux definitions [F4] give linearity: for integrable $u,w$, choose grid partitions whose upper-minus lower sums for each are arbitrarily small, take a common refinement, and use $\inf(u+w)\ge\inf u+\inf w$ and $\sup(u+w)\le\sup u+\sup w$ on each cell. The upper-minus-lower gap for $u+w$ is therefore bounded by the sum of the chosen gaps, so $u+w$ is integrable. Its lower and upper integrals are squeezed between the sums of the lower integrals of $u,w$ and the sums of their upper integrals; letting the gaps tend to zero gives $\int_Q(u+w)=\int_Qu+\int_Qw$. For a scalar $c>0$, upper and lower sums scale by $c$; for $c<0$ they exchange after scaling, giving $\int_Q(cu)=c\int_Qu$, and $c=0$ gives zero. Also, if $|u|\le\varepsilon$ on $Q$, each lower sum is at least $-\varepsilon\operatorname{vol}(Q)$ and each upper sum at most $\varepsilon\operatorname{vol}(Q)$, since cell volumes add to $\operatorname{vol}(Q)$ by [F5]. Thus $|\int_\sigma u|\le\varepsilon\operatorname{vol}(Q)$ for an integrable function on the simplex bounded by $\varepsilon$. [F3, F4, F5]

1.2 Fix a parameter chart and a point $p$. For one simplex $\sigma$ write $\sigma^*\alpha_p=f(p,z)\,dz_1\wedge dz_2\wedge dz_3$ on $T_3$. Choose a closed parameter rectangle $R$ around $p$ inside the chart. The displayed inequalities defining $T_3$ make it closed and bounded, hence compact by [F6]; [F2] identifies it as the integration domain. The product $R\times T_3$ is a closed bounded Euclidean set, hence compact by [F6], so $\partial_a f$ is uniformly continuous there by [F7]. For a small nonzero increment $h$ in coordinate $p^a$, [F8] gives $$\frac{f(p+he_a,z)-f(p,z)}{h}-\partial_af(p,z) =\frac1h\int_0^h\bigl(\partial_af(p+se_a,z)-\partial_af(p,z)\bigr)\,ds.$$ Uniform continuity makes the right side tend uniformly to zero on $T_3$ as $h\to0$. By step 1.1, the integral of this error tends to zero. Linearity therefore gives $$\partial_a\int_\sigma f(p,z)\,dz=\int_\sigma\partial_af(p,z)\,dz.$$ Applying the same argument to every parameter derivative of $f$ proves that all parameter partial derivatives of the simplex integral exist and are integrals of the corresponding derivatives. They are continuous: on a compact parameter rectangle, uniform continuity of each next derivative and step 1.1 bound the change in its integral by the uniform coefficient change times $\operatorname{vol}(Q)$. Hence this simplex integral is smooth. [F2, F6, F7, F8, step 1.1]

2.1 By [F1], $\Sigma$ is a finite linear combination of such simplices. Linearity from step 1.1 makes $I$ the corresponding finite linear combination of their smooth integrals and gives the asserted derivative formula for every parameter coordinate. Linearity in the tangent vector then gives the formula for every $v\in T_pP$. [F1, step 1.1, step 1.2] ∎

## Remarks

The chain is fixed and finite, and the parameter manifold is finite
dimensional. No infinite-chain convergence or infinite-dimensional field
space structure is part of the lemma.
