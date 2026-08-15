---
id: thm-fundamental-theorem-of-symmetric-polynomials
kind: theorem
title: "Fundamental theorem of symmetric polynomials: unique expression as a polynomial in $e_1,\\ldots,e_n$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-fundamental-theorem-of-symmetric-polynomials-existence, thm-elementary-symmetric-polynomials-are-algebraically-independent]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Symmetric Polynomials, Section 2"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/symmfunction.pdf"
    - title: "D. Grinberg, An Introduction to Algebraic Combinatorics, Theorem 7.1.16"
      url: "https://arxiv.org/pdf/2506.00738v1"
pipeline_run: null
---

## Statement

For every commutative ring $R$ and every $n\in\mathbb N$, substitution $T_k\mapsto e_k$ is an $R$-algebra isomorphism

$$R[T_1,\ldots,T_n]\longrightarrow R[x_1,\ldots,x_n]^{\operatorname{Sym}_n}.$$

Equivalently, every symmetric polynomial has a unique expression $Q(e_1,\ldots,e_n)$.

## Facts & Assumptions

**Given:** A commutative ring $R$ and a natural number $n$.

[L1] Every symmetric polynomial is $Q(e_1,\ldots,e_n)$ for some polynomial $Q$ ([[thm-fundamental-theorem-of-symmetric-polynomials-existence]]).

[L2] The elementary symmetric polynomials are algebraically independent: $Q(e_1,\ldots,e_n)=0$ implies $Q=0$ ([[thm-elementary-symmetric-polynomials-are-algebraically-independent]]).

## Proof

**Proof technique:** direct.

1.1 Substitution $T_k\mapsto e_k$ defines an $R$-algebra homomorphism whose image lies in the symmetric-polynomial subring. [given, algebra]

1.2 The map is surjective by [L1]. [L1]

1.3 Its kernel is zero by [L2], so it is injective. [L2]

2.1 The substitution map is therefore an isomorphism. Surjectivity gives existence of an expression, and injectivity gives its uniqueness. [step 1.1, step 1.2, step 1.3] ∎
