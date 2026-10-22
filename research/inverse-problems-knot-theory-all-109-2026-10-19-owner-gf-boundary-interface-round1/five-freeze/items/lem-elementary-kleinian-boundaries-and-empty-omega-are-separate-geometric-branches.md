---
id: lem-elementary-kleinian-boundaries-and-empty-omega-are-separate-geometric-branches
kind: lemma
title: Elementary Kleinian boundaries and empty discontinuity are separate geometric branches
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-local-thin-components-of-torsion-free-kleinian-quotients
  - lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients
  - lem-pared-cylinder-axioms-force-negative-boundary-and-full-peripheral-centralizers
  - thm-liouville-bounded-entire-function
justified_by: []
proof_strategy: direct
axiom_use: AC is inherited from the model and topological suppliers. The extra group classification, quotient maps and cusp matching are finite explicit calculations.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Curtis T. McMullen, Iteration on Teichmuller space
      url: https://people.math.harvard.edu/~ctm/papers/home/text/papers/iter/iter.pdf
      locator: Section3.1, printed434–436; the elementary and empty-boundary cases are calculated directly below rather than included in stable finite-area surface factors.
    - title: Michael Kapovich, Hyperbolic Manifolds and Discrete Groups
      url: https://www.math.ucdavis.edu/~kapovich/RFG/book.pdf
      locator: Sections4.12–4.13 and the model normal forms; local elementary classification is supplied by the actual named proof and the quotient calculations below.
---

## Statement

Assume AC. Let $\Gamma\le\mathrm{PSL}_2(\mathbb C)$ be discrete and torsion-free. If its limit set has at most two points, then, up to Möbius conjugation, exactly one of the following descriptions applies:

- $\Gamma=1$, its discontinuity domain is the whole sphere, and its conformal boundary is the sphere.
- $\Gamma=\langle z\mapsto az\rangle$, $|a|>1$, its discontinuity domain is $\mathbb C^*$, and its conformal boundary is the complex torus $\mathbb C/(2\pi i\mathbb Z+\log a\mathbb Z)$.
- $\Gamma$ is the rank-one translation group $z\mapsto z+n\omega$, $\omega\ne0$, its discontinuity domain is $\mathbb C$, and its conformal boundary is $\mathbb C^*$ via $\exp(2\pi iz/\omega)$.
- $\Gamma$ is a rank-two translation lattice, its discontinuity domain is $\mathbb C$, and its conformal boundary is the corresponding complex torus.

None of these discontinuity components is a proper quasidisk with a nonempty opposite disk. The rank-one parabolic example has an incompressible conformal boundary, but that boundary is an unstable twice-punctured sphere, not a cofinite hyperbolic surface. The loxodromic cyclic example has a noninjective boundary fundamental-group map, with meridian kernel $\mathbb Z$. The rank-two parabolic boundary map is injective.

For a connected pared model satisfying the hypotheses of the negative-boundary/peripheral-centralizer lemma, an orientation-preserving marking that is a homotopy equivalence of pairs and restricts to a homotopy equivalence from the interior of $\partial_0M$ onto the conformal boundary excludes every elementary case except the ball with trivial group. The solid torus with only a longitudinal annulus designated as $P$ does NOT satisfy that model's all-torus-boundary clause. Annular products arising earlier in a hierarchy therefore require their own base treatment before being called models with all those hypotheses.

Primitive rank-one parabolic cusp matchings have an explicit local realization: either isomorphism between two full cyclic translation stabilizers is induced by an affine Möbius map and its hyperbolic extension. This assertion concerns those local cusp charts, not discreteness or topology of a global amalgam or HNN gluing. It makes no such assertion for arbitrary loxodromic multipliers or arbitrary marked rank-two lattices.

Separately, for ANY nonelementary geometrically finite group in the finite-volume-of-a-positive-radius-convex-neighborhood sense, empty discontinuity means that its hyperbolic quotient has finite TOTAL volume. Its conformal-boundary product is empty and is represented by a point, without introducing any surface uniformizer.

## Facts & Assumptions

**Given:** The discrete torsion-free group, and, where specified, the actual marked pared model or geometric-finiteness hypothesis.

[F1] The affine and diagonal computations in [[lem-local-thin-components-of-torsion-free-kleinian-quotients]], Proof3.1–4.1, exclude elliptics, classify discrete torsion-free fixed-point stabilizers and give translation ranks one or two. Those computations have no finite-volume premise.

[F2] The upper half-space and sphere compactification and Möbius action are explicit in [[lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients]]. In particular an affine map $z\mapsto\alpha z+\beta$ extends as $(z,Y)\mapsto(\alpha z+\beta,|\alpha|Y)$.

[F3] The actual pared cylinder and all-torus-boundary axioms imply either the ball with empty $P$, or strictly negative Euler characteristic for every component of $\partial_0M$. They also make each annular cusp generator primitive in its full stabilizer. [[lem-pared-cylinder-axioms-force-negative-boundary-and-full-peripheral-centralizers]]

[F4] A bounded entire function is constant by [[thm-liouville-bounded-entire-function]], whose Cauchy-estimate proof applies on circles of every radius.

[A1] Full choice is [[def-axiom-of-choice]].

## Proof

1.1 If the limit set is empty, a nonidentity element would be parabolic or loxodromic by [F1], and its iterates would already give one or two limit points. Thus the group is trivial. If the limit set is a singleton, every group element fixes it, and a nonidentity element cannot be loxodromic, since its two fixed points are orbital limits. Normalize the point to infinity; [F1] gives a discrete rank-one or rank-two translation lattice. If the limit set has two points, every group element preserves that pair. An element interchanging them is conjugate to $z\mapsto c/z$ and has order two, so is excluded. All elements fix each endpoint and are diagonal. The discrete torsion-free diagonal argument of [F1] gives an infinite cyclic group, whose generator can be inverted to have $|a|>1$. These alternatives give all listed normal forms without assuming finite generation. [F1, F2, given, construct, algebra]

2.1 The limit sets of the displayed forms are respectively empty, $\{0,\infty\}$ and $\{\infty\}$, directly from their iterates and properness on the complement. Their discontinuity domains are therefore the indicated sphere, punctured plane and plane. In the cyclic loxodromic case use $z=e^w$: the covering $\mathbb C\to\mathbb C^*/\langle a\rangle$ has deck translations $2\pi i$ and one logarithm of $a$. Their real-linear independence follows from $\operatorname{Re}\log a=\log|a|>0$, and their lattice quotient is a complex torus. A different logarithm gives the same lattice. For rank-one translations, $z\mapsto\exp(2\pi iz/\omega)$ has exactly the given translation fibers and is locally biholomorphic, proving the quotient is $\mathbb C^*$. The rank-two quotient is its defining translation torus. All actions are free on their discontinuity domains. [F1, F2, step 1.1, construct, algebra]

2.2 For primitive generators $T_\omega,T_{\omega'}$, an isomorphism sends $T_\omega$ to $T_{\omega'}^\epsilon$, $\epsilon\in\{1,-1\}$. The affine map $A(z)=(\epsilon\omega'/\omega)z+\beta$ satisfies $AT_\omega A^{-1}=T_{\omega'}^\epsilon$ by subtraction of its two affine values. Its extension in [F2] sends the horoball $Y>T$ to $Y>|\omega'/\omega|T$ and gives the actual isometry of the marked rank-one cusp quotients and their collars. Thus no finite-area annulus or opposite disk is needed for this local matching. Loxodromic multipliers are conjugacy invariants, and rank-two translation lattices must be related by a complex similarity for such an affine realization; no arbitrary gluing of those data was inferred. [F2, F3, step 1.1, given, construct, algebra]

3.1 In the loxodromic case the boundary fundamental group has basis $2\pi i,\log a$, and its map to $\Gamma$ sends $m(2\pi i)+n\log a$ to $a^n$. Its kernel is the nontrivial meridian subgroup $2\pi i\mathbb Z$, so the boundary is not $\pi_1$-injective. For the two parabolic cases $\mathbb C$ is the simply connected cover, so the boundary group maps isomorphically to the full translation group. In particular $\langle z\mapsto z+1\rangle$ is a genuine elementary example with incompressible conformal boundary $\mathbb C^*$. That boundary has a compactification by two points and Euler characteristic zero. Its universal conformal cover is $\mathbb C$, not a disk: a conformal equivalence to the disk would give a bounded nonconstant entire function, contradicting [F4]. Thus it cannot be a cofinite disk-hyperbolic model. None of the displayed domains is a quasidisk, since its boundary has zero, one or two points instead of a Jordan circle; their closures also leave no opposite disk. [F1, F2, F4, step 1.1, step 2.1, construct, algebra]

4.1 Apply [F3] to a putative marked pared model. In the nonball case every nonempty component of $\partial_0M$ has negative Euler characteristic, while each elementary conformal boundary above is connected and has nonnegative Euler characteristic. A boundary homotopy equivalence must match components and preserve their finite CW Euler characteristics; replacing the interior of a compact collared surface by a smaller compact collar core is a homotopy equivalence. Hence it cannot match any of these elementary boundaries. If $\partial_0M$ is empty, it cannot be homotopy equivalent to a nonempty elementary conformal boundary either. In the ball case [F3] gives $P=\varnothing$ and trivial fundamental group, and [F2]'s compactified ball gives its trivial-group realization. A solid torus with a longitudinal annular $P$ has its torus boundary only partly in $P$, so it is not a counterexample to the all-torus-boundary model premise. This distinguishes the elementary example of step3.1 from the correct full model. [F2, F3, step 2.1, step 3.1, given, construct, algebra]

5.1 Finally suppose $\Omega=\varnothing$ in the nonelementary geometrically finite case. Its limit set is the whole sphere, whose closed hyperbolic convex hull is all of $\mathbb H^3$: every model point lies on a complete geodesic joining two ideal points. Therefore every positive-radius convex-hull neighborhood is $\mathbb H^3$ itself, and the defining finite-volume hypothesis is exactly finite total quotient volume. There are no conformal-boundary components to uniformize, so its empty product is a point. Elementary groups were already shown to have nonempty discontinuity. This proves the distinct branches and local realizations while leaving every global gluing and nonelementary quasidisk obligation explicit. [A1, F2, step 1.1, step 2.1, given, construct, algebra] ∎
