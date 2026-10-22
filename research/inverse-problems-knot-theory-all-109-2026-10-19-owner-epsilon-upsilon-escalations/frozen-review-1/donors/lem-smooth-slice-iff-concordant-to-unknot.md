---
id: lem-smooth-slice-iff-concordant-to-unknot
kind: lemma
title: "Smooth sliceness is equivalent to concordance to the unknot"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-smooth-knot-concordance
  - def-locally-flat-proper-surface-and-concordance-collars
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-knot-connected-sum-and-prime-knot
  - def-euclidean-spheres-and-closed-balls
  - def-countable-choice
  - thm-isotopy-extension
dependency_level: 2
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Charles Livingston, A Survey of Classical Knot Concordance, Handbook of Knot Theory, Chapter 7"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§2.1, Definition 2.1 and Theorem 2.2, printed pp.322–323"
    - title: "Arunima Ray, Slice Knots and Knot Concordance, Winter Braids Lecture Notes 8"
      url: "https://numdam.org/item/10.5802/wbln.39.pdf"
      locator: "§3, Proposition 3.2 and Exercise △9, printed pp.10–11 and 23"
---

## Statement

Assume the Axiom of Countable Choice. A smooth oriented knot in the standard oriented three-sphere bounds a smooth properly embedded disk in the unit four-ball $B^4=\{x\in\mathbb R^4:\lVert x\rVert^2\le1\}$ if and only if it is smoothly concordant to the standard unknot.

## Statement references

[[def-smooth-knot-concordance|Smooth concordance and its endpoint orientation convention]]

[[def-knot-connected-sum-and-prime-knot|The standard unknot]]

[[def-euclidean-spheres-and-closed-balls|The unit Euclidean four-ball]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a smooth oriented knot $K\subset S^3$, and one of the two asserted geometric objects.

[F1] A smooth concordance is a proper smooth annulus in $S^3\times I$ with product collars and oriented boundary $-K_0\times\{0\}\sqcup K_1\times\{1\}$. ([[def-smooth-knot-concordance]])

[F2] A smooth proper surface has smooth boundary charts and product collars; removing an interior disk from a disk leaves a smooth annulus. ([[def-locally-flat-proper-surface-and-concordance-collars]])

[F3] The standard unknot bounds its standard disk in the standard four-ball. ([[def-knot-connected-sum-and-prime-knot]])

[F4] Under $\mathrm{AC}_\omega$, an isotopy of compact smooth embeddings into $\mathbb R^4$ extends to an ambient isotopy supported in any prescribed neighborhood of its track. ([[thm-isotopy-extension]])

[A1] The Axiom of Countable Choice is the sequence-choice principle in [F4]. ([[def-countable-choice]])

## Proof

**Given:** $\mathrm{AC}_\omega$, $K$, and either a smooth slice disk or a smooth concordance between $K$ and the standard unknot.

1.1 Suppose first that a smooth proper disk $D\subset B^4$ has boundary $K$. Choose an interior point $p\in D$ and a sufficiently small round four-ball $E$ about $p$ contained in $\operatorname{int}B^4$. In orthonormal coordinates at $p$, the local graph theorem writes $D$ as $z=g(u)$ over a disk in its tangent plane, with $g(0)=0$ and $Dg(0)=0$. For small radius $R$, the function $r\mapsto r^2+g(r\theta)^2$ has derivative $2r+O(r^3)>0$ for every unit direction $\theta$ and $0<r\le R$. Hence $D\cap\partial E$ is one radial graph over the tangent circle. Replacing $g$ by $\lambda g$, $0\le\lambda\le1$, and solving the same strictly increasing radial equation gives an isotopy on $\partial E$ to the equatorial circle. Thus $D\cap\partial E$ is the unknot. The family of round balls moving the center of $E$ to $0$ along a path in $\operatorname{int}B^4$ is an isotopy of compact embeddings supported in $\operatorname{int}B^4$; apply [F4] to extend it. Hence $B^4\setminus\operatorname{int}E$ is diffeomorphic, with boundary collars, to the standard shell $S^3\times I$. Removing $\operatorname{int}(D\cap E)$ from $D$ gives an annulus in that shell with boundary $K$ and an unknot. [F2, F4, A1, given, construct]

1.2 Conversely, suppose $K$ is smoothly concordant to the standard unknot. Reverse the interval coordinate if needed so the unknot is the lower boundary. Glue a standard four-ball along the lower $S^3$ end of $S^3\times I$. The union is a standard four-ball with an added boundary collar: explicitly, the collar extends the radial coordinate of the unit ball from radius $1$ to radius $2$, and radial rescaling identifies it with the unit ball. Cap the lower unknot boundary of the annulus by the standard disk from [F3]. The annulus and cap meet in matching product collars, so their union is a smooth properly embedded disk with boundary $K$. [F1, F3, given, construct]

2.1 The product collars at the two boundary circles identify the annulus from step 1.1 with a smooth concordance, after orienting it so the lower boundary is the negative of its induced knot orientation and the upper boundary is positive. If necessary, reverse the interval coordinate to place the unknot at the lower end; a half-turn of the standard round circle about a diameter is an orientation-preserving ambient rotation that reverses its circle orientation, so the endpoint still has the standard oriented unknot type. Reversing the annulus orientation when required gives the boundary convention in [F1]. Therefore $K$ is smoothly concordant to the standard unknot. [F1, step 1.1, construct]

3.1 Steps 1.1 and 2.1 prove that a smooth slice disk gives smooth concordance to the unknot, and step 1.2 proves the converse. [step 1.1, step 2.1, step 1.2] ∎

## Sources

[[def-smooth-knot-concordance]]

[[thm-isotopy-extension]]
