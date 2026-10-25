---
id: ex-prompt-reward-offset-leaves-policy-unchanged
kind: example
title: A prompt-only reward offset leaves Bradley–Terry comparisons and policy unchanged
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-bradley-terry-preference-model
  - def-kl-regularized-policy-improvement
  - thm-finite-action-gibbs-policy-optimum
justified_by: []
proof_strategy: direct
verification: {}
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Rafael Rafailov et al., Direct Preference Optimization: Your Language Model is Secretly a Reward Model, arXiv:2305.18290v3 (2024)"
      url: "https://arxiv.org/pdf/2305.18290v3"
    - title: "Purdue course lecture notes, Preference Optimization (PrefOpt)"
      url: "https://www.cs.purdue.edu/homes/ribeirob/courses/Spring2026/lectures/18-pref-opt/PrefOpt.html"
---

## Example

For a fixed prompt $x$, let $Y_x$ be finite and nonempty, let $q_x$ be a probability vector with $q_x(y)>0$ for every $y\in Y_x$, let $\beta>0$, and let $r_x:Y_x\to\mathbb R$. For any constant $c_x\in\mathbb R$, set $r'_x(y)=r_x(y)+c_x$ for every $y\in Y_x$. Then every Bradley–Terry comparison probability at $x$ and the unique Gibbs-optimal policy on $Y_x$ are unchanged.

## Example references

[[def-bradley-terry-preference-model|Finite Bradley–Terry preference model]]: comparison probabilities depend on reward differences for a fixed prompt.

[[def-kl-regularized-policy-improvement|Finite KL-regularized policy improvement]]: defines the finite objective being optimized.

[[thm-finite-action-gibbs-policy-optimum|Finite-action Gibbs policy theorem]]: supplies the normalized policy formula.

[Rafailov et al., §5.1 and Theorem 1](https://arxiv.org/pdf/2305.18290v3)

[Purdue PrefOpt course notes, §2 and §3e](https://www.cs.purdue.edu/homes/ribeirob/courses/Spring2026/lectures/18-pref-opt/PrefOpt.html)

## Facts & Assumptions

**Given:** A finite response set $Y_x$, full-support reference $q_x$, positive $\beta$, reward $r_x$, and constant $c_x$.

[F1] [[def-bradley-terry-preference-model]]: $\Pr(a\succ b\mid x)=\sigma(r_x(a)-r_x(b))$ for distinct responses.

[F2] [[def-kl-regularized-policy-improvement]]: the finite objective is $F_{q_x,r_x,\beta}(p)=\sum_y p_y r_x(y)-\beta D(p\|q_x)$.

[F3] [[thm-finite-action-gibbs-policy-optimum]]: the Gibbs policy has unnormalized weights $q_x(y)e^{r_x(y)/\beta}$ and partition sum $Z_x$.

## Verification

1.1 For any distinct $a,b\in Y_x$, $r'_x(a)-r'_x(b)=(r_x(a)+c_x)-(r_x(b)+c_x)=r_x(a)-r_x(b)$. [F1, given, algebra]

2.1 The objective being optimized is the one in [F2], and [F3] gives its normalized weights. The shifted unnormalized weight is $q_x(y)e^{r'_x(y)/\beta}=e^{c_x/\beta}q_x(y)e^{r_x(y)/\beta}$, so $Z'_x=e^{c_x/\beta}Z_x$. Dividing each shifted weight by $Z'_x$ cancels the common factor and gives $p_x^{*'}(y)=p_x^*(y)$ for every $y$. [F2, F3, given, algebra] ∎
