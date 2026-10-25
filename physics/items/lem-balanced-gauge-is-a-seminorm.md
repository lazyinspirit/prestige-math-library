---
id: lem-balanced-gauge-is-a-seminorm
kind: lemma
title: The gauge of an absolutely convex absorbing set is a seminorm
status: published
origin: pipeline
deps: [def-absorbing-balanced-and-absolutely-convex-set, def-minkowski-functional, lem-minkowski-functional-is-sublinear]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: Gerald Teschl, Topics in Real and Functional Analysis, Lemma 5.1
      url: https://pdfcoffee.com/topics-in-real-and-functional-analysis-gerald-teschl-pdf-free.html
---

## Statement

If $C$ is absolutely convex and absorbing, then $p_C(\lambda x)=|\lambda|p_C(x)$
for every scalar $\lambda$, and $p_C$ is a seminorm.  It need not be positive
definite.

## Facts & Assumptions

**Given:** An absolutely convex absorbing $C\subseteq X$, $x\in X$, and $\lambda\in\mathbb K$.

[F1] For convex absorbing $C$, $p_C$ is nonnegative, subadditive, and homogeneous for nonnegative real scalars ([[lem-minkowski-functional-is-sublinear]]).

## Proof

**Proof technique:** direct.

1.1 If $\lambda=0$ the assertion follows from [F1]. For $\lambda\ne0$, balancedness gives $(\lambda/|\lambda|)C=C$: one inclusion is balancedness and the reverse follows by applying it to the inverse scalar. [F1, given, algebra]

2.1 Hence $\lambda x\in tC$ exactly when $x\in(t/|\lambda|)C$, so taking infima yields $p_C(\lambda x)=|\lambda|p_C(x)$. Together with [F1] this is precisely the seminorm axioms. [step 1.1, F1, algebra] ∎
