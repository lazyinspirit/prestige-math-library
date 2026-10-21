---
id: lem-isotropic-minimum-norm-risk-components
kind: lemma
title: Separate isotropic ridgeless risk into limiting bias and variance
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 10
deps:
  - lem-ridgeless-risk-decomposition
  - lem-zero-signal-isotropic-risk-limit
  - thm-isotropic-ridgeless-risk-across-interpolation-threshold
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Hastie, Montanari, Rosset and Tibshirani, Surprises in High-Dimensional Ridgeless Least Squares Interpolation"
      url: "https://arxiv.org/pdf/1903.08560"
      locator: "Theorem 1 and Section 3.2 bias/variance context; local finite-fourth-moment component limits follow from actual proved risk suppliers."
---

## Statement

Under the hypotheses and notation of the isotropic ridgeless risk theorem, put
$S_n=X_n^{\mathsf T}X_n/n$,
$$B_n:=\|(I_{p_n}-X_n^+X_n)\beta_n\|_2^2,\qquad V_n:=\frac{\sigma^2}{n}\operatorname{tr}(S_n^+).$$
Then almost surely, if $0<\gamma<1$,
$$B_n\longrightarrow0,\qquad V_n\longrightarrow\frac{\sigma^2\gamma}{1-\gamma},$$
and if $\gamma>1$,
$$B_n\longrightarrow r^2\left(1-\frac1\gamma\right),\qquad V_n\longrightarrow\frac{\sigma^2}{\gamma-1}.$$

## Statement references

[[lem-ridgeless-risk-decomposition]]

[[lem-zero-signal-isotropic-risk-limit]]

[[thm-isotropic-ridgeless-risk-across-interpolation-threshold]]

## Facts & Assumptions

**Given:** The model, parameters, and risk notation in the Statement.

[F1] The exact conditional risk is $\mathcal R_n=B_n+V_n$
([[lem-ridgeless-risk-decomposition]]).

[F2] For zero signal, the risk equals $V_n$ and has the limits stated in the
zero-signal lemma ([[lem-zero-signal-isotropic-risk-limit]]).

[F3] The total risk has the two limits in the isotropic ridgeless risk theorem
([[thm-isotropic-ridgeless-risk-across-interpolation-threshold]]).

## Proof

1.1 By [F1], for every $n$ the risk decomposes exactly as $\mathcal R_n=B_n+V_n$. For the zero signal the bias term is zero, so the zero-signal risk is exactly this same design-dependent $V_n$; [F2] therefore gives the almost-sure limits of $V_n$. [F1, F2, algebra]

2.1 If $\gamma<1$, [F3] and [F2] give the same limit for $\mathcal R_n$ and $V_n$, so their difference $B_n$ tends to zero. If $\gamma>1$, subtracting $\sigma^2/(\gamma-1)$, the limit of $V_n$ in [F2], from the total-risk limit in [F3] leaves $r^2(1-1/\gamma)$ for $B_n$. The probability-one events in [F2] and [F3] may be intersected. [F2, F3, step 1.1, algebra] ∎ 