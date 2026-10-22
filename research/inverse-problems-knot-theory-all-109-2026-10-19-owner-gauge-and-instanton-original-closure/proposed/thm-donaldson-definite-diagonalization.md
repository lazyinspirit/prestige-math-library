---
id: thm-donaldson-definite-diagonalization
kind: theorem
title: Donaldson diagonalization theorem for positive-definite four-manifolds
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-integral-intersection-lattice-of-a-simply-connected-four-manifold
  - lem-integral-intersection-pairing-is-unimodular
  - def-asd-moduli-fredholm-index-and-lattice-setup
  - def-axiom-of-choice
  - thm-asd-deformation-complex-index-formula
  - lem-asd-regularity-perturbation-and-orientability
  - lem-uhlenbeck-compactness-and-removable-singularities
  - lem-taubes-positive-definite-instanton-existence
  - lem-donaldson-reducible-ends-and-one-instanton-compactification
  - lem-reducible-charge-one-su-two-connections-admit-controlled-projective-links
  - thm-topological-five-bordisms-preserve-ordinary-and-l2-signatures
  - lem-integral-cohomology-ring-of-complex-projective-space-by-splitting
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Simon K. Donaldson, An Application of Gauge Theory to the Topology of 4-Manifolds
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/donaldson.pdf
      locator: Theorem 1, printed p. 280; complete argument §§I.2–I.5, II.1–II.4, III.1–III.4 and Appendix
    - title: Tim Perutz, Lectures on Gauge Theory and Symplectic Geometry
      url: https://web.ma.utexas.edu/users/perutz/GaugeTheory/FullCourse.pdf
      locator: §24, pp. 119–126; independent Seiberg–Witten/Elkies route, comparison only
---

## Statement

Assume full AC. Let $X$ be a compact connected smooth simply connected oriented four-manifold. If its integral intersection form is positive definite, then there is an integral basis of $H_2(X;\mathbb Z)/\operatorname{Tor}$ in which the form is the identity matrix. Equivalently, the integral intersection lattice is isometric to the standard diagonal lattice $\mathbb Z^{b_2(X)}$ with dot product.

## Statement references

[Donaldson, *An Application of Gauge Theory to the Topology of 4-Manifolds*, Theorem 1](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/donaldson.pdf)

[Perutz, *Lectures on Gauge Theory and Symplectic Geometry*, §24](https://web.ma.utexas.edu/users/perutz/GaugeTheory/FullCourse.pdf)

## Facts & Assumptions

[F1] The integral intersection pairing is a symmetric integral unimodular form on the free finite-rank group $H_2(X;\mathbb Z)/\operatorname{Tor}$. [[def-integral-intersection-lattice-of-a-simply-connected-four-manifold]] [[lem-integral-intersection-pairing-is-unimodular]]

[F2] The equation is $F_A^-=0$, with charge $c_2=-1$. Its actual compatible reducible preparation, middle regularization, complete inverse small-instanton end and smooth cut bordism are supplied by [[lem-donaldson-reducible-ends-and-one-instanton-compactification]]. The actual reducible orbits inject into mutually orthogonal unordered integral norm-one pairs, so their number is at most $b_2(X)$. [[lem-reducible-charge-one-su-two-connections-admit-controlled-projective-links]]

[F3] The ordinary signature of the full boundary of an actual compact oriented five-manifold is zero. This follows from the explicitly proved self-annihilating image of restriction in the boundary intersection form; no closed four-dimensional index theorem is used. [[thm-topological-five-bordisms-preserve-ordinary-and-l2-signatures]]

[F4] The integral cohomology ring of $\mathbb{CP}^2$ is $\mathbb Z[x]/(x^3)$, with $x^2$ a generator. Thus its middle form has rank one and signature $1$ or $-1$, according to orientation. [[lem-integral-cohomology-ring-of-complex-projective-space-by-splitting]]

[A1] Full AC is inherited from the gauge, compactness, characteristic-class and duality suppliers. [[def-axiom-of-choice]]

## Proof

**Given:** Full AC and the closed smooth simply connected oriented manifold in the Statement, with positive-definite intersection pairing. Put $b=b_2(X)$.

1.1 **An actual bordism rather than an assumed end.** If $b=0$ the free intersection group has rank zero and its empty integral basis gives the claim. Suppose $b>0$. A charge-minus-one bundle exists: glue a trivial bundle on a ball to the trivial bundle on its complement by the unit-quaternion clutching function on the common three-sphere, with the sign used by the explicit BPST construction in the Taubes proof. Its smooth model connection has $c_2[X]=-1$, by the displayed curvature integral $8\pi^2$ and the fixed sign convention. Apply [F2] on this actual bundle. It gives a compact oriented smooth five-manifold $W$ whose full boundary is $X$ together with $n$ oriented projective-plane links, where $n$ is the actual number of reducible solution orbits. The determinant orientation can be chosen so the $X$ boundary has its given orientation. Closed components of $W$ have empty boundary and do not affect this assertion. [F1, F2, A1, given, construct, algebra]

2.1 **The signed boundary inequality forces enough reducibles.** Positive definiteness makes $\operatorname{sign}(X)=b$. Each projective link has signature $\varepsilon_i\in\{1,-1\}$ by [F4]. Additivity of the intersection form under finite disjoint union and [F3] give $0=b+\sum_{i=1}^n\varepsilon_i$, hence $b\le n$. The actual reducible classification in [F2] gives $n\le b$, since its $n$ distinct unordered norm-one pairs are mutually orthogonal and nonzero. Thus $n=b$ (and the boundary equation also forces every $\varepsilon_i=-1$ for this chosen orientation). No numerical spectral-flow label or prior common sign was assumed. [F1, F2, F3, F4, step 1.1, algebra]

3.1 **The integral basis, not merely a real diagonalization.** Choose one representative $x_i$ from each of these $b$ unordered norm-one pairs in cohomology. They satisfy $x_i\cdot x_j=\delta_{ij}$ by [F2]. Let $L=H^2(X;\mathbb Z)/\operatorname{Tor}$. They are a real basis of $L\otimes\mathbb R$ because they are $b$ nonzero orthogonal vectors. For every $y\in L$, its real-basis expansion is $y=\sum_i(y\cdot x_i)x_i$. Every coefficient is an integer by integrality of [F1], so $y$ belongs to their integral span. Thus these vectors are an integral basis of the full lattice, not a proper finite-index sublattice. Integral Poincare duality identifies this lattice with the homological intersection lattice in [F1]. Transporting this basis gives the asserted identity matrix on $H_2(X;\mathbb Z)/\operatorname{Tor}$. The rank-zero case was already covered, and this proves the original diagonalization conclusion. [F1, F2, step 1.1, step 2.1, construct, algebra] ∎

## Source notes

Donaldson's complete method-of-proof passage on printed280–281 and the full gauge and end argument on284–314 were read. The final argument uses the actual cut bordism and the inequality from its induced, initially unknown projective-link signs. It neither infers inverse gluing from existence nor assumes all norm-one splittings occur in a given bundle. The real-signature input is actual bordism invariance, not the closed Atiyah–Singer signature theorem. The original Statement is unchanged, apart from the already authorized full-AC prefix; the Perutz citation remains comparison context and supplies no step in this proof.
