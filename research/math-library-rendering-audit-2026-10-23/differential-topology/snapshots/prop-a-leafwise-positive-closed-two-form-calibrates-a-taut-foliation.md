---
id: prop-a-leafwise-positive-closed-two-form-calibrates-a-taut-foliation
kind: proposition
title: A leafwise positive closed two-form calibrates a taut foliation
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
- def-taut-codimension-one-foliation
- def-dead-end-component
- lem-a-foliation-is-taut-if-and-only-if-it-has-no-dead-end-component
- def-oriented-smooth-manifold-and-oriented-chart
- def-induced-orientation-on-a-hypersurface-from-a-coorientation
- def-induced-boundary-orientation
- prop-boundary-orientation-is-independent-of-the-outward-vector-field
- thm-general-stokes-theorem
- prop-positive-compactly-supported-top-forms-have-positive-integral
- def-volume-form-on-an-oriented-manifold
- prop-integration-over-an-oriented-embedded-submanifold
- def-countable-choice-principle-for-foliation-pair
- thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric
- prop-first-variation-of-volume-for-a-normal-variation
- def-mean-curvature-vector
- thm-compactly-supported-vector-fields-are-complete
- lem-manifold-bump-for-a-compact-set-inside-an-open-set
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 14
verification:
  precheck: pass
sources:
  scraped: []
  references:
  - title: Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs; complete
      author-hosted PDF)
    url: https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf
    locator: §4.5, Definition 4.30 and Theorem 4.31 with proof, printed pp. 158-159
  - title: 'Samuel Ranz, Approximately Holomorphic Techniques in Foliations: A Simple Proof of Novikov''s Theorem
      (PhD thesis, Universidad Autonoma de Madrid, 2024; complete PDF)'
    url: https://www.icmat.es/Thesis/2024/Tesis_Samuel_Ranz.pdf
    locator: §2.1, Proposition 2.3, printed pp. 32-36
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$. Let $M$ be a closed oriented $3$-manifold, let $F$ be a co-oriented codimension-one foliation of $M$ (oriented by the rule that the leaf orientation followed by the co-orientation is the orientation of $M$), and let $\theta$ be a closed $2$-form on $M$ positive on $TF$: $\theta_p(v,w)>0$ for every positively oriented basis $(v,w)$ of $T_pF$. Then $F$ is taut. Moreover there is a smooth Riemannian metric making $\ker\theta$ orthogonal to $TF$, for which $\theta$ has comass one and restricts to each leaf's area form. Thus it calibrates every leaf and every leaf is minimal for that metric.

## Facts & Assumptions

**Given:** A closed oriented three-manifold $M$ with a co-oriented codimension-one foliation $F$ and a closed $2$-form $\theta$ positive on the leaves.

[F1] A transversely oriented foliation of a compact manifold is taut if and only if it has no dead-end component; a dead-end component $N$ has compact closure whose boundary is a finite union of compact leaves, with the co-orientation pointing inwards along every boundary leaf ([[lem-a-foliation-is-taut-if-and-only-if-it-has-no-dead-end-component]], [[def-dead-end-component]], [[def-taut-codimension-one-foliation]]).

[F2] The orientation of a leaf induced from the co-orientation and the ambient orientation, and the outward-normal-first induced boundary orientation of a manifold with boundary, are independent of the chosen outward vector field ([[def-induced-orientation-on-a-hypersurface-from-a-coorientation]], [[def-induced-boundary-orientation]], [[prop-boundary-orientation-is-independent-of-the-outward-vector-field]]).

[F3] Stokes' theorem relates the integral of the exterior derivative over an oriented compact manifold with boundary to the boundary integral ([[thm-general-stokes-theorem]]), integration over an oriented embedded submanifold is defined leafwise ([[prop-integration-over-an-oriented-embedded-submanifold]]), and a positive top form with compact support on an oriented manifold has positive integral ([[prop-positive-compactly-supported-top-forms-have-positive-integral]], [[def-volume-form-on-an-oriented-manifold]]).

[F4] Smooth bundle metrics exist; a normal compactly supported variation has first derivative of area $-2\int\langle V,H\rangle$, where $H$ is averaged mean curvature ([[thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric]], [[prop-first-variation-of-volume-for-a-normal-variation]], [[def-mean-curvature-vector]]). Compactly supported ambient fields have flows ([[thm-compactly-supported-vector-fields-are-complete]]), and compact source sets have bumps ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

[F5] The standing assumption is Countable Choice $\mathrm{AC}_\omega$ as recorded for this pair ([[def-countable-choice-principle-for-foliation-pair]]).



**Proof technique:** direct.

## Proof

1.1 Suppose $F$ is not taut. By [F1] there is a dead-end component $N$ whose closure $\overline N$ is a compact oriented three-manifold with boundary a finite union of compact leaves $L_i$ along which the co-orientation points inwards. [F1, given]

1.2 Positivity on $TF$ makes $\theta$ a rank-two form everywhere. Its kernel $K$ is a smooth line bundle transverse to $TF$: if a nonzero tangent vector of a leaf lay in $K$, its contraction with the positive area form $\theta|_{TF}$ would not vanish. Choose a smooth metric $h$ on $TF$ by F4 and write $\theta|_{TF}=a\,\mu_h$ with smooth $a>0$. In dimension two the metric $a h$ has area form $a\mu_h$. Give $K$ any smooth metric and declare $TF\perp K$, obtaining a smooth ambient metric. Since $\theta$ annihilates $K$ and equals the unit area form on $TF$, its value on any unit simple two-vector has absolute value at most one, by the determinant bound for orthogonal projection onto the two-plane $TF$. Equality holds on the oriented unit leaf tangent bivector. This explicitly proves the comass-one calibration assertion; an arbitrary previously chosen transverse line would not have eliminated mixed components of $\theta$. [F4, given, construct, algebra]

2.1 Stokes gives $\sum_i\pm\int_{L_i}\theta=\int_{\overline N}d\theta=0$, because $\theta$ is closed. Each boundary leaf carries the orientation induced from the co-orientation and the orientation of $M$ by [F2]; since the co-orientation points inwards on every boundary component, all signs in the sum coincide, so all integrals $\int_{L_i}\theta$ have the same sign. Each integral is nonzero because $\theta|_{L_i}$ is a positive area form on the compact leaf $L_i$ by the positivity hypothesis, so by [F3] every integral is strictly positive for the induced orientation. Hence the sum cannot vanish, a contradiction; therefore no dead-end component exists and $F$ is taut. [F2, F3, step 1.1]

2.2 Let $D$ be a compact smooth domain in a leaf and vary its immersion by a compactly supported ambient normal field that vanishes near $\partial D$. Stokes applied to the homotopy cylinder gives $\int_D F_t^*\theta=\int_D F_0^*\theta$, because $d\theta=0$ and the cylinder's side is fixed. The comass bound from step 1.2 gives $\operatorname{Area}(F_t|_D)\ge\int_D F_t^*\theta=\operatorname{Area}(F_0|_D)$ for both signs of small $t$. Hence its first derivative is zero. By F4, $\int_D\langle V,H\rangle=0$ for every such normal variation. Locally extend $V=\eta H$, with any nonnegative bump $\eta$ supported in a small embedded leaf chart, to a compactly supported ambient normal field; F4 supplies the flow realizing it. Then $\int\eta|H|^2=0$, so continuity and arbitrary bumps imply $H=0$ everywhere. This proves minimality for every leaf, including noncompact leaves, without importing a calibration-to-minimality theorem. [F3, F4, step 1.2, construct]

3.1 Combining the preceding steps, a closed $2$-form positive on the leaves forces tautness and calibrates the foliation, with every leaf minimal; the argument uses one Stokes computation and finitely many local metric choices, hence only the standing countable choice from [F5]. [F2, F4, F5, step 2.1, step 1.2, step 2.2] ∎
