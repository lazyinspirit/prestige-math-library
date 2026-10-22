---
id: lem-injective-boundary-seifert-fiber-slopes-are-unique-outside-small-pieces
kind: lemma
title: "Boundary fiber slopes for Seifert pieces with injective boundary"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [def-axiom-of-choice, def-incompressibility-seifert-fibration-and-jsj-system, lem-seifert-fiber-quotient-is-finite-orbifold-free-product, lem-positive-euler-finite-pl-surfaces-are-disks-spheres-or-projective-planes, lem-orientable-small-base-seifert-pieces-have-explicit-solid-torus-and-interval-bundle-models]
justified_by: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the finite Seifert quotient and explicit small-model suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Printed p.20, Lemma 1.15; the proof here uses the explicit finite free-product fiber quotient instead of an assumed family of essential annuli"
---

## Statement

Assume full AC. Let $M$ be a compact connected orientable smooth Seifert-fibered three-manifold with nonempty boundary, other than $T^2\times I$ or the orientable twisted interval bundle over the Klein bottle. On any boundary torus $T$ whose inclusion into $M$ is injective on fundamental groups, every Seifert fibration of $M$ has the same unoriented regular-fiber slope. No family of essential annuli and no irreducibility hypothesis is required.

## Facts & Assumptions

**Given:** Full AC, $M,T$ and the injective boundary inclusion, with the two underlying manifolds excluded in the Statement.

[A1] Full AC is [[def-axiom-of-choice]].

[F1] A Seifert piece with boundary has fiber quotient $F_r*C_{q_1}*\cdots*C_{q_m}$, where $r=1-\chi(B)\ge0$. Its injective boundary tori have unique fiber slopes if $r+m\ge2$, except when $r=0,m=2,q_1=q_2=2$ ([[lem-seifert-fiber-quotient-is-finite-orbifold-free-product]], Statement).

[F2] The base has a finite compatible surface triangulation as in [[lem-seifert-fiber-quotient-is-finite-orbifold-free-product]], Proof 1.1–2.1. A connected finite triangulated surface with boundary and Euler characteristic one is a disk; with Euler characteristic zero it is an annulus or Möbius band ([[lem-positive-euler-finite-pl-surfaces-are-disks-spheres-or-projective-planes]], Statement).

[F3] The disk bases with at most one exceptional point are solid tori; the annulus and Möbius bases without exceptional points and the disk-two-order-two base have underlying manifolds $T^2\times I$ or the orientable twisted Klein-bottle interval bundle ([[lem-orientable-small-base-seifert-pieces-have-explicit-solid-torus-and-interval-bundle-models]], Statement).

[F4] The Seifert and regular-fiber conventions are those of [[def-incompressibility-seifert-fibration-and-jsj-system]].

## Proof

1.1 Fix any one of the Seifert fibrations and its numbers $r,m,q_j$ in [F1]. If $r+m<2$, the possibilities are $(r,m)=(0,0),(0,1),(1,0)$. In the first two cases $\chi(B)=1$, so $B$ is a disk by [F2] and $M$ is a solid torus by [F3]. Its single boundary torus cannot inject on fundamental groups: a homomorphism $\mathbb Z^2\to\mathbb Z$ has a nonzero kernel, since its generator images $a,b$ either both vanish or annihilate the nonzero vector $(b,-a)$. This contradicts the Given inclusion. In the case $(1,0)$ the base has Euler characteristic zero and no exceptional points, so [F2] and [F3] give one of the two excluded manifolds. Finally the exceptional case $r=0,m=2,q_1=q_2=2$ has disk base and gives the excluded twisted Klein-bottle interval bundle. Thus none of these numerical cases can occur. [A1, F1, F2, F3, F4, given, algebra]

2.1 The numerical condition of [F1] is therefore satisfied for the chosen fibration. Its boundary-slope conclusion applies to the injective $T$ and compares that fibration with every other fibration, regardless of the latter's base data. This proves the asserted uniqueness. In particular the argument constructs no hypothetical annulus family and makes no choice of compatible fiber slopes at other boundary components; it proves the intrinsic slope equality at each injective boundary torus separately. [F1, step 1.1] ∎
