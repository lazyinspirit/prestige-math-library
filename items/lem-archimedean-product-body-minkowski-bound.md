---
id: lem-archimedean-product-body-minkowski-bound
kind: lemma
title: Archimedean product-body bound for a full lattice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-full-euclidean-lattice-and-covolume
  - def-number-field
  - def-minkowski-embedding-of-a-number-field
  - def-archimedean-embeddings-and-number-field-signature
  - thm-covolume-of-an-ideal-lattice
  - thm-minkowski-convex-body-theorem
  - cor-minkowski-convex-body-theorem-at-equality
  - def-absolute-norm-of-an-ideal
  - thm-ring-of-integers-and-ideals-are-full-lattices
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "H. W. Lenstra Jr., Algorithms in Algebraic Number Theory, §6.1"
      url: "https://arxiv.org/pdf/math/9204234"
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $K$ be a number field with signature $(r_1,r_2)$ and degree $n=r_1+2r_2$. Let $L$ be a full lattice in the unscaled space $\mathbb R^{r_1}\times\mathbb C^{r_2}$, viewed as $\mathbb R^n$, with covolume $c_L>0$. Put $t>0$ with $t^n=(4/\pi)^{r_2}c_L$. Then $L$ contains a nonzero point whose every real coordinate has absolute value at most $t$ and every complex coordinate has modulus at most $t$.

## Statement references

[Lenstra, §6.1](https://arxiv.org/pdf/math/9204234)

## Facts & Assumptions

**Given:** The Axiom of Choice, the number field signature, and the full lattice and covolume in the Statement.

[A1] The Axiom of Choice is assumed in the Minkowski convex-body theorem at equality ([[def-axiom-of-choice]], [[cor-minkowski-convex-body-theorem-at-equality]]).

[F1] A compact, convex, centrally symmetric body of volume at least $2^n$ times the covolume of a full lattice contains a nonzero lattice point ([[cor-minkowski-convex-body-theorem-at-equality]]).

## Proof



1.1 Let $C_t$ be the product of the intervals $[-t,t]$ in the $r_1$ real coordinates and the closed radius-$t$ disks in the $r_2$ complex coordinates. It is compact, convex, and centrally symmetric. Its real volume is $2^{r_1}\pi^{r_2}t^{r_1+2r_2}=2^{r_1}\pi^{r_2}(4/\pi)^{r_2}c_L=2^n c_L$. [given, A1, algebra]

2.1 Apply [F1] to $C_t$ and $L$. The resulting nonzero lattice point lies in every interval and disk used to define $C_t$, so it has the asserted coordinate bounds. [F1, step 1.1] ∎

