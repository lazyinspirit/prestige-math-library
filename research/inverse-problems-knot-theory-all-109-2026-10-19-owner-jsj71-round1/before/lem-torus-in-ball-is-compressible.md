---
id: lem-torus-in-ball-is-compressible
kind: lemma
title: "Every embedded torus in a ball is compressible"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-incompressibility-seifert-fibration-and-jsj-system
  - thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations
  - thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds
  - thm-seifert-van-kampen
  - thm-normal-form-for-free-products-with-amalgamation
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Assumes full AC through the finite-compatible-triangulation supplier."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "§1.1, Alexander's theorem and irreducibility; §3.1, Loop Theorem, printed pp.1–2 and 45–48"
    - title: "Ryan Budney, JSJ-decompositions of knot and link complements in the 3-sphere"
      url: "https://arxiv.org/pdf/math/0506523"
      locator: "§1, incompressible tori and irreducible pieces, PDF pp.2–4"
---

## Statement

Assume full AC. Let $B$ be a compact piecewise linear $3$-ball with a finite compatible triangulation, and let $T\subset\operatorname{int}B$ be a two-sided embedded torus. Then $T$ has a properly embedded compressing disk in $B$.

## Statement references

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*, §1.1 and §3.1](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

[Ryan Budney, *JSJ-decompositions of knot and link complements in the 3-sphere*](https://arxiv.org/pdf/math/0506523)

## Facts & Assumptions

**Given:** Full AC, a finite triangulated $3$-ball $B$ and a two-sided embedded torus $T$ in its interior.

[A1] Full AC is the axiom that every set-indexed family of nonempty sets has a choice function ([[def-axiom-of-choice]], Definition).

[F1] A two-sided surface separates locally, and a compressing disk is a disk with essential boundary on the surface ([[def-incompressibility-seifert-fibration-and-jsj-system]], Definition).

[F2] A noninjective map of a connected boundary subsurface into a compact orientable finitely triangulated $3$-manifold gives a compressing disk ([[thm-loop-theorem-for-finitely-triangulated-orientable-pl-three-manifolds]], Statement); compact pieces with corners admit finite compatible triangulations ([[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]], Statement).

[F3] Van Kampen gives the pushout group for two pieces glued along a connected boundary torus ([[thm-seifert-van-kampen]], Statement), and the amalgam normal form theorem embeds the torus group when both side maps are injective ([[thm-normal-form-for-free-products-with-amalgamation]], Statement).

## Proof

1.1 The torus $T$ separates $B$. Otherwise a path in the connected complement joining its two local sides, closed by a short transverse arc, would produce a loop meeting $T$ once modulo $2$; this contradicts $H_2(B;\mathbb Z_2)=0$, since intersection with a closed surface depends only on its homology class. Let $W_1,W_2$ be the two closures after cutting along $T$. [F1, given, algebra]

1.2 If both maps $\pi_1(T)\to\pi_1(W_i)$ were injective, collar neighbourhoods and [F3] would express $\pi_1(B)$ as the amalgamated product $\pi_1(W_1)*_{\pi_1(T)}\pi_1(W_2)$ with $\pi_1(T)\cong\mathbb Z^2$ embedded by normal form. This is impossible because $\pi_1(B)=1$. Hence one side map has nontrivial kernel. [F3, step 1.1, algebra]

2.1 Triangulate the cut pieces compatibly by [F2]. Apply the Loop Theorem to the side with nontrivial kernel, using its boundary copy of $T$ as the connected boundary subsurface. The resulting properly embedded disk has boundary essential in $T$ and interior disjoint from $T$, so it is a compressing disk in $B$. [A1, F2, step 1.2, construct] ∎
