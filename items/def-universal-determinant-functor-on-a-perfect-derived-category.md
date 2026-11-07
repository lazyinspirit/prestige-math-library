---
id: def-universal-determinant-functor-on-a-perfect-derived-category
kind: definition
title: Determinant Functors and Their Universal K0 and K1 Groups
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-applicable
proof_strategy: not-applicable
deps:
  - def-perfect-complex-over-a-ring
  - def-triangulated-category
verification:
  precheck: n/a
sources:
  references:
    - title: "Breuning, Determinant Functors on Triangulated Categories, Definition 3.1 and §§4.2–4.3"
      url: "https://arxiv.org/pdf/math/0610435"
    - title: "Breuning, Determinants of Perfect Complexes and Euler Characteristics in Relative K0-Groups, §§2–3"
      url: "https://arxiv.org/pdf/0812.1556"
---

## Definition

Let $R$ be a unital associative ring and let $T$ be a small triangulated category, such as a small skeleton of $D_{\mathrm{perf}}(R)$. A **Picard category** is a nonempty symmetric monoidal category in which every morphism is an isomorphism and tensoring with any object is an equivalence. A **determinant functor** $g=(g_1,g_2):T\to\mathcal P$ consists of a functor $g_1:T_{\mathrm{iso}}\to\mathcal P$ and, for every distinguished triangle $\Delta:X\to Y\to Z\to X[1]$, an isomorphism $g_2(\Delta):g_1(Y)\xrightarrow{\sim}g_1(X)\otimes g_1(Z)$ satisfying naturality under isomorphisms of distinguished triangles, associativity for every octahedral diagram using the associativity isomorphism of $\mathcal P$, and commutativity for the two split triangles of $X\oplus Y$.

A **universal determinant functor** on $T$ is a Picard category $\mathcal W(T)$ with a determinant functor $g_T:T\to\mathcal W(T)$ such that, for every Picard category $\mathcal P$, composition induces an equivalence $\operatorname{Hom}_{\otimes}(\mathcal W(T),\mathcal P)\simeq\operatorname{det}(T,\mathcal P)$ between monoidal functors and determinant functors. When such a functor exists, define $K_i^{\det}(T)=\pi_i(\mathcal W(T))$ for $i=0,1$, where $\pi_0$ is the group of isomorphism classes under tensor product and $\pi_1$ is the automorphism group of the unit object. The universal determinant functor is unique up to monoidal equivalence, so these groups are independent of its choice.

## Definition references

[Breuning, *Determinant Functors on Triangulated Categories*, Definition 3.1 and §§4.2–4.3](https://arxiv.org/pdf/math/0610435)

[Breuning, *Determinants of Perfect Complexes and Euler Characteristics in Relative K0-Groups*, §§2–3](https://arxiv.org/pdf/0812.1556)
