---
id: def-witt-algebra
kind: definition
title: Witt algebra of Laurent polynomial vector fields
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-lie-algebra-over-a-field]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Christophe Nozaradan, Introduction to Vertex Algebras, §2.7.1
      url: https://arxiv.org/pdf/0809.1380
    - title: Antony Wassermann, Kac–Moody and Virasoro Algebras, Chapter III §1
      url: https://arxiv.org/pdf/1004.1287
---

## Definition

Let $R=\mathbb C[z,z^{-1}]$ be the algebra of finite Laurent polynomials. Define $\operatorname{Der}_{\mathbb C}(R)$ as the vector space of complex-linear maps $D:R\to R$ satisfying the Leibniz rule $D(fg)=D(f)g+fD(g)$. Let $\partial_z$ be the linear map with $\partial_z(z^q)=qz^{q-1}$ for all $q\in\mathbb Z$. For each $m\in\mathbb Z$, set $d_m=-z^{m+1}\partial_z$. The **Witt algebra** $W$ is the complex span of the $d_m$ inside $\operatorname{Der}_{\mathbb C}(R)$, with bracket the commutator of derivations. The modes are indexed by all integers; all linear combinations in $W$ are finite, and no completion is intended.

## Facts & Assumptions

**Given:** The Laurent-polynomial algebra $R$ and the displayed derivations $d_m$.

[F1] [[def-lie-algebra-over-a-field]]: a Lie algebra over $\mathbb C$ is a complex vector space with an alternating bilinear bracket satisfying Jacobi.

## Proof

1.1 For $a,b\in\mathbb Z$, $\partial_z(z^{a+b})=(a+b)z^{a+b-1}=\partial_z(z^a)z^b+z^a\partial_z(z^b)$, so linearity and bilinearity prove the Leibniz rule on all Laurent polynomials. Multiplying a derivation by $-z^{m+1}$ preserves the Leibniz rule because $R$ is commutative; hence each $d_m$ belongs to $\operatorname{Der}_{\mathbb C}(R)$. For every $q\in\mathbb Z$, $d_m(z^q)=-qz^{m+q}$, so $d_md_n(z^q)=q(n+q)z^{m+n+q}$ and $d_nd_m(z^q)=q(m+q)z^{m+n+q}$. Therefore $[d_m,d_n](z^q)=q(n-m)z^{m+n+q}=(m-n)d_{m+n}(z^q)$. Since Laurent monomials span $R$, this proves $[d_m,d_n]=(m-n)d_{m+n}$ and closure of $W$ under the commutator. [given, algebra]

1.2 If a finite relation $\sum_m a_md_m=0$ holds, applying it to $z$ gives $-\sum_m a_mz^{m+1}=0$. Distinct Laurent monomials are linearly independent in $R$, so every $a_m=0$; thus the $d_m$ form a basis of $W$. [given, algebra]

2.1 For endomorphisms $A,B,C$ of any vector space, the commutator is alternating, and expanding $[A,[B,C]]+[B,[C,A]]+[C,[A,B]]$ cancels each of the six triple compositions with its negative. Thus the commutator bracket satisfies [F1] on $\operatorname{End}_{\mathbb C}(R)$; by the closure in step 1.1, its restriction makes $W$ a Lie algebra. [F1, step 1.1, algebra] ∎
