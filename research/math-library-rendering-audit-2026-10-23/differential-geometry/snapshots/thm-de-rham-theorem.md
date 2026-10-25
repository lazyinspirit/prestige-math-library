---
id: "thm-de-rham-theorem"
kind: "theorem"
title: "The de Rham theorem"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["cor-de-rham-vector-space-comparison-with-continuous-singular-cohomology","lem-de-rham-integration-respects-wedge-and-cup-in-cohomology","def-singular-cohomology-ring","thm-singular-cohomology-is-graded-commutative","def-countable-choice","def-de-rham-cohomology-ring","lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary","prop-differential-forms-form-a-graded-commutative-algebra"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Peter S. Park, Proof of de Rham's Theorem
      url: https://people.math.harvard.edu/~pspark/derham.pdf
    - title: Joel W. Robbin, The de Rham Theorem
      url: https://people.math.wisc.edu/~jwrobbin/751dir/deRham.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
landmark: true
proof_strategy: "direct"
---

## Statement

Assume $\mathrm{AC}_\omega$. For every finite-dimensional Hausdorff second-countable smooth manifold $M$, possibly with boundary, integration on smooth simplices followed by the inverse of restriction from continuous to smooth singular cohomology gives a natural isomorphism of unital graded real algebras
$$J_M:H^*_{\mathrm{dR}}(M)\xrightarrow{\cong}H^*_{\mathrm{sing}}(M;\mathbb R).$$
The source product is wedge of form classes, the target product is the front/back singular cup product, and both stars denote direct sums of the homogeneous groups. Naturality is for smooth maps. No compactness assumption is imposed.

## Facts & Assumptions

[F1] [[cor-de-rham-vector-space-comparison-with-continuous-singular-cohomology]] gives the natural degreewise linear isomorphism $J_M=r_M^{-1}I_M$ under countable choice, where $r_M$ is restriction to smooth simplices.

[F2] [[lem-de-rham-integration-respects-wedge-and-cup-in-cohomology]] proves $I_M(ab)=I_M(a)\smile I_M(b)$ in smooth singular cohomology, with an explicit natural cochain homotopy and quotient descent, without choice.

[F3] [[def-singular-cohomology-ring]] gives the continuous singular graded algebra, its front/back product and its constant-vertex unit. The same formulas and associativity calculation apply to the smooth cochains.

[F4] [[thm-singular-cohomology-is-graded-commutative]] proves the target sign $a\smile b=(-1)^{pq}b\smile a$ on homogeneous classes.

[F5] [[def-countable-choice]] is the choice assumption used by [F1].

[F6] [[def-de-rham-cohomology-ring]] defines the boundaryless de Rham graded algebra by wedge classes and unit $[1]$.

[F7] [[lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary]] supplies the boundary form complex, derivative, wedge and pullback operations.

[F8] [[prop-differential-forms-form-a-graded-commutative-algebra]] gives the pointwise associative and graded-commutative wedge identities used also in the boundary-chart extension of [F7].

## Proof

**Given:** $M$ as stated and $\mathrm{AC}_\omega$. Write $I,r,J$ for its three comparison maps.

1.1 The source product descends by [F2], including the explicit simultaneous representative-change formula in its proof. The associative and graded-commutative wedge identities of [F8] hold pointwise in boundary charts by restricting their Euclidean extensions, as permitted in [F7]. They therefore descend to the quotient; the constant function $1$ is closed and is a wedge unit. Thus [F6] extends to the boundary convention with exactly the same product and unit. Finite sums of homogeneous classes multiply into the direct sum by finite distributivity. The continuous target is the algebra of [F3]. [F2, F3, F6, F7, F8, given]

1.2 Restriction respects cup already on cochains. Indeed, for continuous cochains $u$ of degree $p$ and $v$ of degree $q$, evaluation on a smooth $(p+q)$-simplex gives $$r(u\smile v)(\sigma)=u(\sigma[0,\ldots,p])v(\sigma[p,\ldots,p+q])=((ru)\smile(rv))(\sigma).$$ Every displayed face is smooth. Restriction also sends the constant-vertex cochain of value one to the same smooth cochain, so it preserves the unit. These identities descend to classes by [F3] and its smooth version. [F1, F2, F3]

2.1 For homogeneous source classes $a,b$, equations [F1], [F2] and step 1.2 give $$r(J(ab))=I(ab)=I(a)\smile I(b)=r(J(a))\smile r(J(b))=r(J(a)\smile J(b)).$$ The map $r$ is injective by [F1], so $J(ab)=J(a)\smile J(b)$. Integration of the constant function one on a vertex is one; hence $I([1])=r(\mathbf1)$ and injectivity gives $J([1])=\mathbf1$. Degreewise linearity and finite distributivity now make $J$ a unital graded real-algebra homomorphism on the direct sum. [F1, F2, F3, step 1.1, step 1.2]

3.1 The degreewise inverses in [F1] take a finite list of homogeneous components to a finite list, so their direct sum is the inverse of $J$. Its multiplicativity also follows directly: writing any $x,y$ in the target as $J(a),J(b)$ gives $J^{-1}(xy)=J^{-1}(J(ab))=ab$, and the same argument preserves the unit. The resulting isomorphism is natural by the actual smooth-map naturality in [F1]. For homogeneous degrees $p,q$, the source wedge sign from step 1.1 and the target cup sign from [F4] coincide; only the cohomology product, not the cochain cup, is asserted graded commutative. [F1, F4, step 1.1, step 2.1]

4.1 The empty manifold gives the zero unital algebra on both sides, with $1=0$. A point and degree zero use the vertex-unit calculation; degree one, top degree and negative zero groups are included in [F1]. No finite-support condition on components is imposed in degree zero: the unit assigns one to every vertex even on a disconnected manifold. Smooth degenerate simplices were retained in [F2] and step 1.2. The only choice assumption is [F5] inherited by the degreewise bijectivity in [F1]; the multiplication, unit and cancellation calculations add no selections. Thus neither compactness nor full AC has entered the theorem. [F1, F2, F3, F5, step 1.2, step 2.1, step 3.1] ∎
