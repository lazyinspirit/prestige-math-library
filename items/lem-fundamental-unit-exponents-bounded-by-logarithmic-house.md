---
id: lem-fundamental-unit-exponents-bounded-by-logarithmic-house
kind: lemma
title: "Fundamental-unit exponents are bounded by the logarithmic house"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-number-field
  - def-archimedean-embeddings-and-number-field-signature
  - def-fundamental-units
  - def-s-integers-and-s-units-of-a-number-field
  - def-axiom-of-choice
  - def-roots-of-unity-in-a-field
  - thm-product-formula-for-number-fields
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jan-Hendrik Evertse, Diophantine Equations (2017 author notes), Lemma 5.9"
      url: "https://pub.math.leidenuniv.nl/~evertsejh/dio17-5.pdf"
verification: {}
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $K$ be a number field of degree $d$ and signature $(r_1,r_2)$, and fix a system of fundamental units $\epsilon_1,\ldots,\epsilon_r$ with $r=r_1+r_2-1$. If
$$u=\zeta\epsilon_1^{b_1}\cdots\epsilon_r^{b_r},\qquad \zeta\in\mu(K),\quad b_j\in\mathbb Z,$$
define the **house** of $u$ by
$$M(u):=\max_{\sigma:K\hookrightarrow\mathbb C}|\sigma(u)|,$$
where the maximum ranges over all $d$ embeddings, including both members of each complex-conjugate pair. There is a constant $C>0$, depending only on $K$ and the chosen fundamental units, such that
$$\max_{1\le j\le r}|b_j|\le C\log M(u).$$
When $r=0$, the left-hand maximum over the empty set is defined to be $0$.

## Statement references

[[def-number-field]]

[[def-archimedean-embeddings-and-number-field-signature]]

[[def-fundamental-units]]

[[def-axiom-of-choice]]

[[def-roots-of-unity-in-a-field]]

[[thm-product-formula-for-number-fields]]

[Evertse, *Diophantine Equations*, Chapter 5, Lemma 5.9](https://pub.math.leidenuniv.nl/~evertsejh/dio17-5.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice, a number field $K$ of degree $d$ and signature $(r_1,r_2)$, a system of fundamental units, and a unit $u$ with the stated decomposition.

[A1] The number-field product formula is used under AC. ([[def-axiom-of-choice]], [[thm-product-formula-for-number-fields]])

[F1] The $d=r_1+2r_2$ embeddings consist of $r_1$ real embeddings and $r_2$ complex-conjugate pairs. ([[def-archimedean-embeddings-and-number-field-signature]])

[F2] The logarithmic images of the chosen fundamental units are a real-linearly independent basis of the unit logarithm lattice, and every unit has a unique expression as a root of unity times integer powers of those units. ([[def-fundamental-units]])

[F3] Every root of unity has modulus $1$ under every complex embedding, since an embedding carries $\zeta^n=1$ to $\sigma(\zeta)^n=1$. ([[def-roots-of-unity-in-a-field]])

[F4] For a unit $u$, the product of $|\sigma(u)|$ over all $d$ embeddings is $1$, because its finite-place absolute values are all $1$. ([[def-s-integers-and-s-units-of-a-number-field]], [[thm-product-formula-for-number-fields]])

## Proof


1.1 If $r=0$, the claimed bound is $0\le C\log M(u)$ and $M(u)\ge1$ by [F4]. Suppose $r>0$. Form the $d\times r$ real matrix $L$ with entries $L_{ij}=\log|\sigma_i(\epsilon_j)|$. By [F1] the rows for a complex-conjugate pair are duplicates of one weighted logarithmic coordinate, so the map from the $r$-dimensional unit logarithm hyperplane to all $d$ embedding coordinates is injective; [F2] therefore gives $\operatorname{rank}_{\mathbb R}L=r$. Select $r$ row indices $i_1,\ldots,i_r$ for which the square matrix $L_I$ is invertible, and put $C_0=\max_k\sum_{q=1}^r|(L_I^{-1})_{kq}|$. [given, F1, F2, F4, choose]

1.2 By [F4], $\prod_{i=1}^d|\sigma_i(u)|=1$, so $M(u)\ge1$. For each $i$, the other $d-1$ factors are at most $M(u)$, hence $|\sigma_i(u)|\ge M(u)^{-(d-1)}$; also $|\sigma_i(u)|\le M(u)$. Therefore $|\log|\sigma_i(u)||\le(d-1)\log M(u)$. [given, F1, F4, algebra]

2.1 Taking logarithms of the absolute values in the decomposition of $u$ removes $\zeta$ by [F3] and yields $(\log|\sigma_{i_q}(u)|)_{q=1}^r=L_I(b_1,\ldots,b_r)^{\mathsf T}$. Hence $\max_j|b_j|\le C_0\max_q|\log|\sigma_{i_q}(u)||$. [given, F2, F3, step 1.1, algebra]

3.1 Combining steps 2.1 and 1.2 gives $\max_j|b_j|\le C_0(d-1)\log M(u)$. Taking $C=C_0(d-1)$ proves the claim. [step 2.1, step 1.2] ∎
