---
id: lem-derived-hall-moduli-spaces-and-convolution-are-finite
kind: lemma
title: "Derived Hall moduli types are locally finite and the input span is proper"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-toen-locally-finite-dg-category
  - def-locally-finite-homotopy-type
  - lem-perfect-dg-modules-have-finite-total-ext
  - def-toen-derived-hall-algebra
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Bertrand Toën, Derived Hall algebras, arXiv:math/0501343v4, §3, Lemma 3.2"
      url: "https://arxiv.org/pdf/math/0501343v4"
---

## Statement

For a locally finite dg-enhancement $\mathcal T$, the moduli homotopy types $X^{(0)}$, $X^{(1)}$, and $X^{(2)}$ of [[def-toen-derived-hall-algebra]] are locally finite. The map $s\times t:X^{(1)}\to X^{(0)}\times X^{(0)}$ is proper on components. Consequently the pull-push expression defining $\mathcal{DH}(\mathcal T)$ is a well-defined product on finite-support functions.

## Facts & Assumptions

**Given:** A locally finite dg-enhancement $\mathcal T$ and its perfect-module, arrow, and composable-pair homotopy types.

[F1] For every pair of perfect modules $a,b$, the total graded space $\bigoplus_i\operatorname{Ext}^i_{\mathcal T}(a,b)$ is finite-dimensional ([[lem-perfect-dg-modules-have-finite-total-ext]]).

[F2] The core of a perfect-module category has $\pi_1$ the automorphism group and, for $i>1$, $\pi_i$ the group $\operatorname{Ext}^{1-i}(a,a)$. Mapping spaces between perfect modules are obtained from their derived Hom complexes, with $\pi_j\operatorname{Map}(a,b)=\operatorname{Ext}^{-j}_{\mathcal T}(a,b)$ for $j\ge0$ ([[def-toen-locally-finite-dg-category]]).

[F3] $X^{(1)}$ and $X^{(2)}$ are the cores of the objectwise homotopy theories of arrows and composable pairs; $s(u)$ is the source and $t(u)$ its homotopy cofiber ([[def-toen-derived-hall-algebra]]).

[F4] A locally finite homotopy type has finite homotopy groups and each based homotopy group sequence vanishes above some degree; finite-support functions use the homotopy-fiber weights ([[def-locally-finite-homotopy-type]]).

## Proof

1.1 Fix a perfect module $a$. The based loop space of $X^{(0)}$ at $a$ is the equivalence component of $\operatorname{Map}(a,a)$. Its components are $\operatorname{Aut}(a)$, a subset of the finite vector space $\operatorname{Ext}^0(a,a)$, and for $i>1$, [F2] gives $\pi_i(X^{(0)},a)=\operatorname{Ext}^{1-i}(a,a)$. These groups are finite by [F1] and vanish in high degrees, so $X^{(0)}$ is locally finite. [F1, F2]

1.2 Fix perfect modules $a,b$. A point of the homotopy fiber of $s\times t$ over $(a,b)$ is an arrow with source identified with $a$ and homotopy cofiber identified with $b$. Its connected components are distinguished triangles $a\to z\to b\to a[1]$ with both endpoints identified; the connecting map classifies the component in $\operatorname{Hom}_{\mathcal D(\mathcal T)}(b,a[1])=\operatorname{Ext}^1(b,a)$. The latter is finite by [F1], so this fiber has finitely many components and $s\times t$ is proper on components. [F1, F3]

2.1 For arrows and composable pairs, the derived mapping complexes are finite homotopy limits of finite sums of the complexes $\mathrm{RHom}(a,b)$ between their finitely many entries. By [F1], each such complex has finite-dimensional cohomology in a finite degree range. A finite direct sum or homotopy fiber of these complexes again has finite-dimensional cohomology in a finite degree range. The same loop-space calculation as in step 1.1 therefore shows that $X^{(1)}$ and $X^{(2)}$ are locally finite. [F1, F2, F3, step 1.1]

3.1 By [F4], pullback along $s\times t$ preserves finite support, and pushforward along $c$ sends a finite-support function to a finite-support function. The homotopy groups of every fiber used in the pushforward are finite and eventually zero by steps 1.1–1.2, so each weight is a finite rational number. Thus the convolution in [[def-toen-derived-hall-algebra]] is a well-defined finite-support function. [F3, F4, step 1.1, step 2.1, step 1.2] ∎
