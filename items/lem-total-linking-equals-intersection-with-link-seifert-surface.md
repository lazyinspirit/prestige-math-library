---
id: lem-total-linking-equals-intersection-with-link-seifert-surface
kind: lemma
title: Total linking is intersection with a spanning surface for a link
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold
  - def-one-variable-alexander-module-of-an-oriented-link
  - prop-the-first-hurewicz-map-in-degree-one-is-abelianization
  - thm-transversality-homotopy-theorem
  - prop-relative-transversality-preserves-a-map-on-a-closed-good-region
  - thm-relative-whitney-approximation-for-manifold-valued-maps
  - thm-choice-implies-dependent-implies-countable-choice
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Dale Rolfsen, Knots and Links
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf
      locator: §8.A, printed pp. 200–203, linking and Seifert-form conventions; the link case is proved directly here by Alexander duality and local meridian intersection.
---
## Statement

Assume full AC. Let $L=K_1\cup\cdots\cup K_r\subset S^3$ be a nonempty smooth oriented link, let $F$ be a compact smooth oriented embedded surface with oriented boundary $L$, and put $X=S^3\setminus L$. For each component $K_i$, let $\mu_i$ be the positive meridian, oriented as the boundary of a small normal disk so that a positive tangent to $K_i$ followed by the disk's positive basis gives the ambient orientation. Alexander duality identifies $H_1(X;\mathbb Z)$ with the free abelian group on $[\mu_1],\ldots,[\mu_r]$. Define the total-linking homomorphism $\varphi:H_1(X;\mathbb Z)\to\mathbb Z$ by $\varphi(\sum_i m_i[\mu_i])=\sum_i m_i$. If a smooth oriented loop $J\subset X$ is transverse to the interior of $F$, define its signed intersection number $J\cdot F$ by counting $+1$ when $J$ crosses from the negative to the positive side of the oriented normal of $F$ and $-1$ for the reverse crossing. Then $J\cdot F=\varphi([J])$.

## Statement references

[[def-one-variable-alexander-module-of-an-oriented-link|Alexander-duality coordinates and the total-linking homomorphism]]

## Facts & Assumptions

**Given:** Full AC, a nonempty smooth oriented link $L$, a compact oriented spanning surface $F$ with boundary $L$, and a smooth loop $J$ in $X=S^3\setminus L$ transverse to the interior of $F$.

[A1] Full AC is the ambient choice hypothesis for the Alexander-duality convention. [[def-axiom-of-choice]]

[F1] The link complement $X$ is connected, and Alexander duality identifies $H_1(X;\mathbb Z)$ with $\mathbb Z^r$ on the positive meridian basis; total linking is the sum of the component coordinates. [[lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold]], [[def-one-variable-alexander-module-of-an-oriented-link]]

[F2] Under full AC, relative Whitney approximation smooths continuous maps that are already smooth near a closed set while fixing a smaller neighbourhood of that set; full AC implies its $\mathrm{AC}_\omega$ hypothesis by [[thm-choice-implies-dependent-implies-countable-choice]]. Reparametrizing a loop to be constant near its basepoint, or a homotopy to be constant on endpoint collars, creates such a region. Relative transversality then makes the map transverse to $\operatorname{Int}F$ while fixing a smaller collar. The submanifold $\operatorname{Int}F=F\setminus L$ is closed in $X$. [[thm-relative-whitney-approximation-for-manifold-valued-maps]], [[thm-transversality-homotopy-theorem]], [[prop-relative-transversality-preserves-a-map-on-a-closed-good-region]]

[F3] The degree-one Hurewicz map sends $\pi_1(X,x_0)$ onto $H_1(X;\mathbb Z)$ and factors through abelianization. [[prop-the-first-hurewicz-map-in-degree-one-is-abelianization]]

## Proof

**Given:** Full AC, $L$, $F$, $X$, $J$, and the conventions of the Statement.

1.1 Choose a basepoint $x_0\in X\setminus F$, which exists on a local side of any interior point of $F$. Represent any class of $\pi_1(X,x_0)$ by a continuous based loop, reparametrize it to be constant near the basepoint, and apply relative Whitney approximation followed by relative transversality from [F2]. This gives a smooth based representative transverse to $\operatorname{Int}F$, still constant near $x_0$. Define $I_F$ on that class to be its signed intersection count. If two such loops are homotopic in $X$, reparametrize the homotopy to be constant on endpoint collars. It is then smooth on a neighbourhood of the closed collars, so [F2] smooths it relative to a smaller collar and makes it transverse to $\operatorname{Int}F$. The inverse image of $\operatorname{Int}F$ is a compact oriented one-manifold in the homotopy annulus; it is compact because the annulus image is disjoint from $L=\partial F$. Orient it using the orientations of the annulus and the normal of $F$. Its oriented boundary signs at the two ends are the intersection signs of the endpoint loops with opposite signs on the two boundary circles. The total signed boundary count is zero, so the endpoint intersection counts agree. Concatenation adds counts, hence $I_F:\pi_1(X,x_0)\to\mathbb Z$ is a homomorphism. [A1, F1, F2, given, construct]

1.2 Near a point of $K_i$, choose oriented local coordinates $(x,y,z)$ in which $K_i$ is the $x$-axis and $F$ is the half-plane $y\ge0$, $z=0$. The boundary orientation and the stated positive-meridian convention make $(x,y,z)$ ambient-positive. The small positive meridian crosses this half-plane exactly once, at $(0,\rho,0)$ for some $\rho>0$, in the $+z$ direction. Thus $\overline I_F([\mu_i])=1$ for every $i$. [F1, given, construct]

2.1 By [F3], this homomorphism factors through a homomorphism $\overline I_F:H_1(X;\mathbb Z)\to\mathbb Z$. The signed intersection convention in the Statement agrees with this induced map on the class represented by $J$. [F3, step 1.1, algebra]

3.1 By [F1], the classes $[\mu_i]$ form a basis of $H_1(X;\mathbb Z)$. The homomorphisms $\overline I_F$ and $\varphi$ agree on every basis element by step 1.2 and [F1], so they are equal. Evaluating this equality on $[J]$ gives $J\cdot F=\varphi([J])$. [F1, step 2.1, step 1.2, algebra] ∎

