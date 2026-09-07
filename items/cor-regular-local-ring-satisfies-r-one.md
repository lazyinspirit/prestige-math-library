---
id: "cor-regular-local-ring-satisfies-r-one"
kind: "corollary"
title: "regular local ring satisfies r one"
deps: ["def-serre-r-k-and-s-k-conditions", "cor-localisations-of-regular-local-rings-are-regular", "thm-one-dimensional-regular-local-rings-are-dvrs", "lem-embedding-dimension-is-minimal-maximal-ideal-generator-number"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "10.157.5, R1 implication"
      url: "https://stacks.math.columbia.edu/tag/031O"
provenance:
  statement: literature-derived
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

Every regular local ring satisfies $(R_1)$. Its height-zero localizations are fields, and its height-one localizations are DVRs.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[def-serre-r-k-and-s-k-conditions]]: For a commutative Noetherian ring $R$ and an integer $j\ge0$, condition $(R_j)$ means that $R_{\mathfrak p}$ is regular whenever $\operatorname{ht}\mathfrak p\le j$. Condition $(S_j)$ means that $\operatorname{depth}R_{\mathfrak p}\ge\min\{j,\dim R_{\mathfrak p}\}$ for every prime $\mathfrak p$. A finite module $M$ satisfies $(S_j)$ if $\operatorname{depth}_{R_{\mathfrak p}}M_{\mathfrak p}\ge\min\{j,\dim\operatorname{Supp}_{R_{\mathfrak p}}M_{\mathfrak p}\}$ for every prime in its support. Outside the support the condition is vacuous, consistent with depth of the zero module being $+\infty$ and the empty support having no nonnegative dimension. Thus the zero module satisfies all $(S_j)$ conditions, and the zero ring satisfies both families vacuously.

[F2] [[cor-localisations-of-regular-local-rings-are-regular]]: Every prime localization $R_{\mathfrak p}$ of a regular local ring $R$ is regular, and $\operatorname{edim}R_{\mathfrak p}=\operatorname{ht}\mathfrak p$.

[F3] [[thm-one-dimensional-regular-local-rings-are-dvrs]]: A nonzero Noetherian local ring of dimension one is regular if and only if it is a discrete valuation ring. Fields are excluded from the term DVR.

[F4] [[lem-embedding-dimension-is-minimal-maximal-ideal-generator-number]]: For a nonzero Noetherian local ring $(R,\mathfrak m,k)$, $\operatorname{edim}R$ is the least number of generators of $\mathfrak m$.

## Proof

1.1 Every prime localization is regular, and its dimension is the height of the prime. Thus at all heights at most one it is regular, which is precisely $(R_1)$. [F2, F1]

2.1 At height one the DVR equivalence applies. At height zero regularity makes the cotangent space zero; the generator-number formula makes the maximal ideal zero, hence the local ring is a field. [F3, F2, F4, step 1.1] ∎
