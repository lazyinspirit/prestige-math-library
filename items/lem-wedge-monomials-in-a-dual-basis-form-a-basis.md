---
id: lem-wedge-monomials-in-a-dual-basis-form-a-basis
kind: lemma
title: "Wedge monomials in a dual basis form a basis"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-exterior-algebra-of-covectors,
       def-linear-basis,
       def-dual-family-associated-to-a-basis]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

Let $e_1,\ldots,e_n$ be a basis of $V$, with dual basis
$e^1,\ldots,e^n$. Then the wedges

$$
e^{i_1}\wedge\cdots\wedge e^{i_k}\qquad (1\le i_1<\cdots<i_k\le n)
$$

form a basis of $\operatorname{Alt}^k(V)$.

## Facts & Assumptions

**Given:** A basis $e_1,\ldots,e_n$ of $V$ and its dual basis $e^1,\ldots,e^n$.

[F1] The degree-$k$ part of the exterior algebra is $\operatorname{Alt}^k(V)$, with wedge product given by alternating tensor multiplication ([[def-exterior-algebra-of-covectors]]).

[L1] Every covector expands in the dual basis, and $e^i(e_j)=\delta^i_j$ ([[def-dual-family-associated-to-a-basis]]).

## Proof
**Proof technique:** direct.

1.1 Let $\omega\in\operatorname{Alt}^k(V)$. Expanding each input vector in the basis and using multilinearity shows that $\omega$ is determined by its values on basis $k$-tuples. Because $\omega$ is alternating, every tuple with a repeated index vanishes and every tuple with distinct indices reduces, up to sign, to one with increasing indices. Thus $\omega$ is a linear combination of the displayed wedges from [F1]. [F1, L1, given, algebra]

2.1 Suppose $\sum_I c_I e^I=0$, where $I=(i_1<\cdots<i_k)$ and $e^I:=e^{i_1}\wedge\cdots\wedge e^{i_k}$. Evaluating at $(e_{j_1},\ldots,e_{j_k})$ with $j_1<\cdots<j_k$, [L1] gives $e^I(e_{j_1},\ldots,e_{j_k})=1$ when $I=(j_1,\ldots,j_k)$ and $0$ otherwise. Hence every $c_I=0$. [L1, step 1.1, algebra]

3.1 Therefore the displayed wedges form a basis of $\operatorname{Alt}^k(V)$. [step 1.1, step 2.1] ∎