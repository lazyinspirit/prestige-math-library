---
id: lem-oriented-product-torus-same-generator-strip-index-is-even
kind: lemma
title: "A same-generator strip between oriented product tori has even real index"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - lem-geometric-strip-linearization-frame-and-fredholm-index
proof_strategy: direct
axiom_use: "Countable Choice only through the actual strip normal-form/index theorem. Orientations of the finitely many circle factors require only finite choices."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds, §3.2"
      url: "https://arxiv.org/pdf/math/0101206"
---

## Statement

Assume Countable Choice. Let $L_0,L_1$ be oriented totally real submanifolds of real dimension $m\ge1$. Consider an actual smooth fixed-end strip operator satisfying the geometric strip normal-form theorem: its bundle has complex rank $m$, its horizontal boundary bundles are the pulled-back tangent bundles of $L_0,L_1$, and the operator has Cauchy–Riemann symbol and exact expression $\partial_s+i\partial_t$ in product-integrable end charts. Suppose both ends converge to the same transverse generator $x\in L_0\cap L_1$ and use the same generator chart, taking the boundary tangent planes to $\mathbb R^m,i\mathbb R^m$.

Then its actual real Fredholm index before source translation is even. In particular no such operator has index one. This applies to the Heegaard product tori: each can be oriented globally by orienting its finitely many labeled circle factors. It does not exclude index-two same-generator strips and does not assume a domain Euler or relative Maslov grading formula.

## Statement references

[[def-countable-choice]]

[[lem-geometric-strip-linearization-frame-and-fredholm-index]]

## Facts & Assumptions

**Given:** Countable Choice, the actual operator with the stated end normal forms, oriented boundary manifolds, and the same generator and end frame at both ends.

[F1] The actual strip normal-form construction produces real boundary frame comparison signs $\sigma_0,\sigma_1$, chooses $p\in\{0,1\}$ with $\sigma_0(-1)^p=\sigma_1$, and absorbs a complex determinant winding $k\in\mathbb Z$ in the upper angle. Its resulting angle integer is $\ell=p-2k$ and the actual real index is $-\ell$ ([[lem-geometric-strip-linearization-frame-and-fredholm-index]], real-frame, winding-absorption and Fredholm-index proof paragraphs).

## Proof

1.1 Orient $u(\cdot,j)^*TL_j$ by the given global orientation of $L_j$. Each boundary path compactifies to a loop based at $x$. The starting lower real basis is the one obtained from the chosen generator frame on $\mathbb R^m$, and the starting upper basis is its image on $i\mathbb R^m$. Either basis may agree or disagree with its global manifold orientation, but that agreement sign is the same at both endpoints because both are the same point with the same chart. A continuously transported real basis cannot change its agreement sign with an oriented bundle. Its terminal comparison with the identical generator basis therefore has positive determinant. In the construction of [F1] this proves $\sigma_0=\sigma_1=+1$. No choice of orientations of the two manifolds relative to each other is required. [F1, given, algebra]

2.1 The parity equation in [F1] now gives $p=0$, so $\ell=-2k$ and $\operatorname{ind}_{\mathbb R}P=-\ell=2k$. This is the actual real Fredholm index computed there, before any translation quotient; it is consequently even and cannot equal one. No nullhomotopy of either boundary loop has been assumed: orientability, rather than contractibility of those loops, supplied their determinant signs. [F1, step 1.1, algebra]

3.1 For a product Heegaard torus, the quotient map from the ordered product of its labeled disjoint circles to the symmetric product is injective: an unordered tuple has exactly one point on each of those disjoint circles. The inverse ordering is smooth in the ordinary off-diagonal product charts. Thus the torus is diffeomorphic to the finite ordered product of circles. Orienting each circle, a finite choice, gives a global product orientation. Apply steps 1.1–2.1 to these two oriented tori. The proof supplies no restriction on an even index such as two. [step 1.1, step 2.1, given, construct, algebra] ∎
