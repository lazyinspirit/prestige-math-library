---
id: "lem-normal-domain-implies-r-one"
kind: "lemma"
title: "normal domain implies r one"
deps: ["def-serre-r-k-and-s-k-conditions", "thm-height-one-localisation-of-normal-noetherian-domain-is-dvr", "thm-one-dimensional-regular-local-rings-are-dvrs"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "10.157.4 forward implication"
      url: "https://stacks.math.columbia.edu/tag/031O"
provenance:
  statement: literature-derived
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

Every commutative Noetherian integrally closed domain satisfies $(R_1)$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[def-serre-r-k-and-s-k-conditions]]: For a commutative Noetherian ring $R$ and an integer $j\ge0$, condition $(R_j)$ means that $R_{\mathfrak p}$ is regular whenever $\operatorname{ht}\mathfrak p\le j$. Condition $(S_j)$ means that $\operatorname{depth}R_{\mathfrak p}\ge\min\{j,\dim R_{\mathfrak p}\}$ for every prime $\mathfrak p$. A finite module $M$ satisfies $(S_j)$ if $\operatorname{depth}_{R_{\mathfrak p}}M_{\mathfrak p}\ge\min\{j,\dim\operatorname{Supp}_{R_{\mathfrak p}}M_{\mathfrak p}\}$ for every prime in its support. Outside the support the condition is vacuous, consistent with depth of the zero module being $+\infty$ and the empty support having no nonnegative dimension. Thus the zero module satisfies all $(S_j)$ conditions, and the zero ring satisfies both families vacuously.

[F2] [[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]]: Let $R$ be a Noetherian integrally closed domain, and let $\mathfrak p$ be a prime ideal of height $1$. Then the localisation $R_{\mathfrak p}$ is a discrete valuation ring.

[F3] [[thm-one-dimensional-regular-local-rings-are-dvrs]]: A nonzero Noetherian local ring of dimension one is regular if and only if it is a discrete valuation ring. Fields are excluded from the term DVR.

## Proof

1.1 A height-one localization is a DVR by the normal-domain height-one theorem, and therefore regular by the DVR equivalence. [F2, F3]

2.1 The only height-zero prime of a domain is $(0)$; its localization is the fraction field, which is regular. These two cases give the definition of $(R_1)$, including a field, which has no height-one primes. [F1, step 1.1, algebra] ∎
