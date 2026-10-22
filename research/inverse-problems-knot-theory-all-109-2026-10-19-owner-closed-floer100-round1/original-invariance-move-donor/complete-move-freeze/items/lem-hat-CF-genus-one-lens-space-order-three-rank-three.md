---
id: lem-hat-CF-genus-one-lens-space-order-three-rank-three
kind: lemma
title: "The genus-one hat Floer complex of an order-three lens space has rank three"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-hat-heegaard-floer-complex-of-a-closed-three-manifold
  - lem-os-disk-and-polygon-analytic-foundations
  - def-lens-space-surgery-orientation-convention
  - lem-straight-three-intersection-torus-diagram-has-no-nonconstant-disks
  - thm-hat-heegaard-floer-is-a-closed-three-manifold-invariant
  - lem-nearly-symmetric-polygons-have-positive-domains-and-degree-energy-bounds
proof_strategy: direct
axiom_use: "Uses the ACω disk-count and positivity package for the hat complex."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ozsváth and Szabó, On the Heegaard Floer homology of branched double-covers, §3"
      url: "https://arxiv.org/pdf/math/0309170v1"
    - title: "Ozsváth and Szabó, Holomorphic disks and topological invariants for closed three-manifolds, §§3–4"
      url: "https://arxiv.org/pdf/math/0101206"
    - title: "Lipshitz, Heegaard Floer Homologies, §§2–5"
      url: "https://floer.wiki/more/courses/floer-homology/2024/lipshitz_heegaard_floer_homology.pdf"
---

## Statement

Assume the ACω hat Floer disk-count theory for closed three-manifolds. For either orientation of $L(3,1)$, the standard genus-one pointed Heegaard diagram has three intersection generators and its $\widehat{CF}$ differential over $\mathbb F_2$ is zero. Consequently $\widehat{HF}(L(3,1);\mathbb F_2)$ has total rank three.

## Statement references

[[def-hat-heegaard-floer-complex-of-a-closed-three-manifold|Hat Floer generator and differential conventions]]

[[lem-os-disk-and-polygon-analytic-foundations|Analytic disk-count hypotheses]]

[[def-lens-space-surgery-orientation-convention|Lens-space orientation convention]]

[Ozsváth and Szabó, *On the Heegaard Floer homology of branched double-covers*, §3](https://arxiv.org/pdf/math/0309170v1)

[Lipshitz, *Heegaard Floer Homologies*, §§2–5](https://floer.wiki/more/courses/floer-homology/2024/lipshitz_heegaard_floer_homology.pdf)

## Facts & Assumptions

**Given:** The standard genus-one splitting and the stated filling-orientation convention, and Countable Choice.

[F1] In the actual flat torus coordinates the meridians $\alpha=(1,0)$ and $\beta=(1,3\varepsilon)$, $\varepsilon=\pm1$, have exactly three intersections, no nonzero normalized periodic domain, no relative disk between different generators, and only the constant relative class at an equal generator. Its proof is the explicit compact-disk lift and affine contraction in the plane, independently of a holomorphic equation. ([[lem-straight-three-intersection-torus-diagram-has-no-nonconstant-disks]])

[F2] The actual allowed hat data have nonnegative region degrees and energy bounded by a fixed positive linear combination of those degrees. Relative homotopies preserve these degrees, since their boundary stays on the attaching circles, away from each region test point. ([[lem-nearly-symmetric-polygons-have-positive-domains-and-degree-energy-bounds]], [[lem-os-disk-and-polygon-analytic-foundations]])

[F3] The full hat complex and the proved actual move maps identify its homology with the full closed-manifold invariant. The filling convention identifies the unknot-exterior meridian with its preferred longitude $\lambda_U$, and the attached meridian for $L(3,1)$ with $\lambda_U+3\mu_U$. ([[def-hat-heegaard-floer-complex-of-a-closed-three-manifold]], [[thm-hat-heegaard-floer-is-a-closed-three-manifold-invariant]], [[def-lens-space-surgery-orientation-convention]])

## Proof

1.1 Parametrize the splitting torus by $\mathbb R^2/\mathbb Z^2$ with $\lambda_U=(1,0)$ and $\mu_U=(0,1)$. Thus the two compression meridians are $(1,0)$ and $(1,3)$ by [F3]. They give exactly the positive-sign diagram in [F1]. Reversing the oriented splitting gives the negative sign diagram; equivalently conjugate the surface coordinate, retaining the same attaching sets. Both signs have three intersections and zero normalized periodic lattice. They therefore satisfy the corrected full-all-sector admissibility condition, including every empty sector; admissibility is not being inferred from a finite set of realized generators. [F1, F3, given, construct, algebra]

2.1 Take actual allowed generic hat data for either of these literal diagrams. This need not be the flat equation: its prescribed generator charts may be retained. A nonconstant strip would compactify to a relative disk. Distinct endpoints are impossible by [F1]. For equal endpoints the explicit plane contraction of [F1] is a boundary-preserving relative homotopy to the constant map. For each region point q its degree is invariant under this homotopy: the boundary never meets q, so the boundary winding of its small disk, or equivalently the pullback divisor degree, is constant. Every region degree is consequently zero. The ACTUAL positivity and energy inequality in [F2] force zero energy, hence a constant strip. Thus there is no index-one strip for any of these allowed data. At a constant generator its operator is the exact transverse operator of real index zero, as in [F1]; it does not enter the index-one count. This argument does not assume that merely seeing quadrilateral regions excludes arbitrary multiply covered disk domains. [F1, F2, step 1.1, construct, algebra]

3.1 The generator module is therefore $\mathbb F_2^3$ with zero differential. Its homology has total rank three. The actual closed-manifold invariance in [F3] identifies this diagram computation with $\widehat{HF}(L(3,1);\mathbb F_2)$; the negative-sign calculation proves the same for its reversed orientation. No individual Spin-c grading, absolute normalization or correction term has been inferred from this total rank calculation. [F1, F2, F3, step 1.1, step 2.1, algebra] ∎
