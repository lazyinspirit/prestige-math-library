---
id: cex-zero-reference-support-breaks-dpo-log-ratio
kind: counterexample
title: Zero reference support makes the DPO reward ratio undefined
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-kl-regularized-policy-improvement
  - thm-dpo-reward-policy-reparameterization
  - def-natural-logarithm
justified_by: []
proof_strategy: direct
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-20}}
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "Rafael Rafailov et al., Direct Preference Optimization: Your Language Model is Secretly a Reward Model, arXiv:2305.18290v3 (2024)"
      url: "https://arxiv.org/pdf/2305.18290v3"
    - title: "Purdue course lecture notes, Preference Optimization (PrefOpt)"
      url: "https://www.cs.purdue.edu/homes/ribeirob/courses/Spring2026/lectures/18-pref-opt/PrefOpt.html"
---

## Statement refuted

The finite reward-policy identity $r(y)=\beta\log(p_y^*/q_y)+\beta\log Z$, where $Z=\sum_{y\in Y}q_y e^{r(y)/\beta}$ and $p^*$ maximizes the extended objective $F_{q,r,\beta}$, remains defined and valid at every response even when the reference probability vector $q$ has zero coordinates.

## Statement references

[[def-kl-regularized-policy-improvement|Finite KL-regularized policy improvement]]: defines the extended finite objective and its support convention.

[[thm-dpo-reward-policy-reparameterization|DPO reward-policy reparameterization]]: states the logarithmic identity under the full-support reference hypothesis.

[[def-natural-logarithm|Natural logarithm]]: defines $\log$ only for positive arguments.

## Facts & Assumptions

**Given:** $Y=\{a,b\}$, $q_a=1$, $q_b=0$, $\beta=1$, $r(a)=0$, and $r(b)=1$.

[F1] [[def-kl-regularized-policy-improvement]]: if $p_y>0$ at a coordinate where $q_y=0$, then $D(p\|q)=+\infty$; if $p$ is supported on $q$, the finite KL sum uses only positive coordinates.

[F2] [[thm-dpo-reward-policy-reparameterization]]: the proved reward-policy formula assumes the reference vector is strictly positive on every response.

[F3] [[def-natural-logarithm]]: the real logarithm has domain $(0,\infty)$.

## Counterexample

1.1 If a probability vector $p$ on $Y$ has $p_b>0$, [F1] gives $D(p\|q)=+\infty$ and hence $F_{q,r,1}(p)=-\infty$, since the reward expectation is finite. If $p_b=0$, then $p=\delta_a$, $D(p\|q)=0$, and $F_{q,r,1}(p)=0$. Thus $p^*=\delta_a$ is the unique maximizer. [F1, given, algebra]

2.1 At response $b$, $p_b^*=q_b=0$, so $p_b^*/q_b$ is the undefined ratio $0/0$ and is not in the domain of the logarithm in [F3]. The stated identity therefore cannot be defined at every response. This example violates the full-support hypothesis of [F2], showing that the identity cannot be extended to zero reference support as stated. [F2, F3, given, step 1.1, algebra] ∎
