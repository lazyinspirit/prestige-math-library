---
id: cex-full-dual-of-infinite-group-algebra-has-no-algebraic-coproduct
kind: counterexample
title: "The full dual of an infinite group algebra has no transpose coproduct"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 1
deps:
  - def-hh-finite-dual-of-an-associative-algebra
  - def-hh-scalar-and-tensor-conventions
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "Kalle Kytölä, Introduction to Hopf algebras and representations, lecture notes, §§4.3–4.4"
      url: "https://math.aalto.fi/~kkytola/files_KK/lectures_files_KK/Hopf-lecture_notes.pdf"
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych and Victor Ostrik, Tensor Categories, §7.14"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement refuted

For every algebra $A$ over a field, transposing multiplication gives a coproduct $A^*\to A^*\otimes A^*$ on the full linear dual, where the tensor product is algebraic.

## Facts & Assumptions

**Given:** An infinite group $G$, the group algebra $H=kG$, its full linear dual $H^*$, and the algebraic tensor product. Refute the claimed algebraic coproduct by a row-rank argument.

[F1] [[def-hh-scalar-and-tensor-conventions]]: every element of an algebraic tensor product is a finite sum of elementary tensors.

[F2] [[def-hh-finite-dual-of-an-associative-algebra]]: the restricted dual $A^\circ$ consists of functionals factoring through finite-dimensional quotient algebras.

[A1] The elements of $G$ form a linearly independent basis of $kG$, and $\delta_e$ is the function equal to $1$ at the identity and $0$ elsewhere.

## Refutation


1.1 Every linear functional on the free vector space $kG$ is determined by arbitrary values on the basis $G$, so $H^*=\operatorname{Hom}_k(H,k)$ identifies with all functions $G\to k$. The standard maps $\Delta(g)=g\otimes g$, $\varepsilon(g)=1$ and $S(g)=g^{-1}$ make $kG$ a Hopf algebra: the coproduct is multiplicative on basis products, coassociative and counital on each group element, and the two antipode products equal $e$. Multiplication $\mu:H\otimes H\to H$ therefore has transpose $\mu^*:H^*\to(H\otimes H)^*$, and $\mu^*(\delta_e)(a,b)=\delta_e(ab)$. [given, A1, construct]

1.2 Suppose $\mu^*(\delta_e)$ came from a tensor $\sum_{i=1}^n F_i\otimes G_i\in H^*\otimes H^*$. For each fixed $a\in G$, its row function of $b$ would be $\sum_{i=1}^nF_i(a)G_i(b)$, hence all row functions would lie in the finite-dimensional span of $G_1,\ldots,G_n$. [given, F1, algebra]

2.1 The actual row at $a$ is $b\mapsto\delta_e(ab)=\mathbf1_{b=a^{-1}}$, the point mass at $a^{-1}$. As $a$ ranges over infinite $G$, these are infinitely many distinct point masses; any finite subfamily is linearly independent by evaluation at its respective support point. Their span is therefore infinite-dimensional, contradicting step 1.2. Thus $\mu^*(\delta_e)\notin H^*\otimes H^*$ and the asserted full-dual coproduct does not exist in the algebraic tensor category. This does not rule out the restricted dual $H^\circ$ of [F2]. [A1, F2, step 1.2, algebra] ∎
