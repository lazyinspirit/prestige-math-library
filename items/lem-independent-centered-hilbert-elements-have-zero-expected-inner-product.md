---
id: lem-independent-centered-hilbert-elements-have-zero-expected-inner-product
kind: lemma
title: Independent centered Hilbert-valued elements have zero expected inner product
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps: [cor-cauchy-schwarz-for-random-variables, def-bochner-integrable-function, def-expectation-of-a-nonnegative-or-integrable-random-variable, def-independent-random-elements, def-strongly-measurable-banach-valued-function, lem-l2-basis-projections-converge-and-satisfy-parseval, lem-measurable-functions-preserve-independence, thm-bounded-linear-maps-commute-with-bochner-integration, thm-dominated-convergence, thm-factorization-of-expectations-for-independent-variables]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, §2.1, Theorems 2.2–2.4, printed pp.49–51"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Theorem 2.1.12 and proof, §2.1.2, printed pp.48–49"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Statement

Let $H$ be a real Hilbert space with a fixed complete finite or countable
orthonormal basis $(e_k)$. On a probability
space let $U,V$ be independent, strongly measurable and Bochner-integrable
$H$-valued random elements with
$\mathbb E_B U=\mathbb E_B V=0$ and
$\mathbb E\|U\|_H^2,\mathbb E\|V\|_H^2<\infty$. Then
$$\mathbb E\langle U,V\rangle_H=0.$$

## Facts & Assumptions

**Given:** The hypotheses and fixed basis in the Statement.

[F1] Bochner integrability makes the means in the Statement well-defined,
and a bounded linear functional commutes with the Bochner integral; in
particular $\mathbb E\langle U,e_k\rangle_H=
\langle\mathbb E_B U,e_k\rangle_H=0$, and similarly for $V$
([[def-bochner-integrable-function]],
[[thm-bounded-linear-maps-commute-with-bochner-integration]]).

[F2] Measurable scalar functions of independent random elements are
independent ([[def-independent-random-elements]],
[[lem-measurable-functions-preserve-independence]]).

[F3] Expectations of integrable products of independent real random
variables factor ([[thm-factorization-of-expectations-for-independent-variables]]).

[F4] For each vector, the finite orthogonal projections onto the initial
basis spans converge in norm to that vector and are contractions
([[lem-l2-basis-projections-converge-and-satisfy-parseval]]).

[F5] Cauchy--Schwarz makes $\|U\|_H\|V\|_H$ integrable, and dominated
convergence passes expectations through the projection limit
([[cor-cauchy-schwarz-for-random-variables]],
[[thm-dominated-convergence]]).

## Proof

**Given:** The independent centered random elements and basis in the Statement.

1.1 For each $k$, the coordinate variables $U_k=\langle U,e_k\rangle_H$ and $V_k=\langle V,e_k\rangle_H$ are measurable, centered by [F1], and independent by [F2]. Their product is integrable by Cauchy--Schwarz, so [F3] gives $\mathbb E[U_kV_k]=\mathbb E[U_k]\mathbb E[V_k]=0$. Every finite sum $\langle P_NU,P_NV\rangle_H=\sum_{k\le N}U_kV_k$ therefore has expectation zero. [F1, F2, F3, algebra]

2.1 By [F4], $P_NU\to U$ and $P_NV\to V$ almost surely (indeed for every vector in $H$); continuity of the inner product gives $\langle P_NU,P_NV\rangle_H\to\langle U,V\rangle_H$. Since projections are contractions, $$|\langle P_NU,P_NV\rangle_H| \le\|U\|_H\|V\|_H,$$ and this majorant is integrable by [F5]. Dominated convergence [F5] and step 1.1 now yield $\mathbb E\langle U,V\rangle_H=0$. [F4, F5, step 1.1, algebra] ∎