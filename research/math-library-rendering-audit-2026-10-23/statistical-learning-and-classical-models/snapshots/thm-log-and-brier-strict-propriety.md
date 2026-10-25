---
id: thm-log-and-brier-strict-propriety
kind: theorem
title: "Log and Brier losses are strictly proper"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-proper-scoring-rule
  - def-natural-logarithm
  - thm-logarithm-derivative-and-integral
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Wikipedia contributors, Scoring rule: Definitions; Proper scoring rules; Categorical variables (logarithmic and Brier examples)"
      url: "https://en.wikipedia.org/wiki/Scoring_rule"
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
---

## Statement

For every $K\ge2$ and $p,q\in\Delta_K$, the logarithmic and Brier losses in the definition of finite-label score loss satisfy $\bar S(p,p)\le\bar S(p,q)$, with equality only when $q=p$. The expected logarithmic loss at the truthful forecast is finite, including when some coordinates of $p$ vanish.

## Statement references

[[def-proper-scoring-rule]]: defines the simplex, expected loss, logarithmic loss, Brier loss, and propriety conventions.

[[def-natural-logarithm]]: fixes the natural logarithm used in the logarithmic score.

## Facts & Assumptions

**Given:** An integer $K\ge2$ and $p,q\in\Delta_K$.

[F1] For $p_j=0$, the expected-score term is zero even if the corresponding score is infinite; the logarithmic and Brier losses are the two functions in the definition. [[def-proper-scoring-rule]]

[F2] For $t>0$, $\log t=\int_1^t du/u$ and $\log1=0$. [[thm-logarithm-derivative-and-integral]]

[F3] The expected score is the finite sum $\bar S(p,q)=\sum_jp_jS(q,j)$. [[def-proper-scoring-rule]]

## Proof

1.1 If $t>1$, then $1/u<1$ for $1<u\le t$, so [F2] gives $\log t<t-1$. If $0<t<1$, then $1/u>1$ for $t\le u<1$, so $\log t=-\int_t^1du/u<-(1-t)=t-1$. At $t=1$ equality holds. Therefore $-\log t\ge1-t$ for every $t>0$, with equality exactly at $t=1$. [F2, algebra]

1.2 If $p_j>0$ and $q_j=0$ for some $j$, then [F1] gives $\bar S_{\log}(p,q)=+\infty$, while $\bar S_{\log}(p,p)=-\sum_{j:p_j>0}p_j\log p_j<\infty$ because this is a finite sum of finite terms. Thus propriety is strict in this case. [F1, F3, algebra]

2.1 Otherwise $q_j>0$ for every $j$ with $p_j>0$. The truthful risk is finite, and cancellation on the support of $p$ gives $\bar S_{\log}(p,q)-\bar S_{\log}(p,p)=\sum_{j:p_j>0}p_j\log\frac{p_j}{q_j}.$ Applying step 1.1 to $t=q_j/p_j$ yields $\sum_{j:p_j>0}p_j\log\frac{p_j}{q_j}\ge 1-\sum_{j:p_j>0}q_j\ge0.$ If the displayed difference is zero, both nonnegative gaps in this chain are zero. Equality in step 1.1 then forces $q_j/p_j=1$ on the support of $p$, and the second gap forces $q$ to have no mass outside that support. Hence $q=p$. This proves strict propriety for the logarithmic loss. [F1, F3, step 1.1, algebra]

3.1 Expanding the Brier loss and using $\sum_jp_j=1$ gives $\bar S_{\mathrm B}(p,q)=\sum_iq_i^2-2\sum_ip_iq_i+1,$ whereas $\bar S_{\mathrm B}(p,p)=1-\sum_ip_i^2$. Subtraction yields $\bar S_{\mathrm B}(p,q)-\bar S_{\mathrm B}(p,p)=\sum_i(q_i-p_i)^2\ge0$, with equality exactly when every $q_i=p_i$. Thus the Brier loss is strictly proper as well. [F1, F3, algebra] ∎

## Source notes

The distinct encyclopedia treatment gives the scoring-rule conventions and categorical formulas (with the logarithmic reward negated). Strictness is proved locally from the declared logarithm supplier, rather than imported from a representation theorem. The displayed finite-sum arguments above separately verify the boundary cases $p_j=0$ and $q_j=0$ under this library's nonnegative-loss convention.
