---
id: ex-ip-diffusion-two-mode-finite-sample-weights
kind: example
title: Exact iid samples estimate two-mode posterior weights
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: []
justified_by: []
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
axiom_use: No choice axiom is used; the two-point law and finite sample are explicit.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Let $b>0$, $0<w<1$, and let the two-mode posterior be $\pi_w=w\delta_{-b}+(1-w)\delta_b$ on $\mathbb R$. From $M\ge1$ independent exact posterior draws $X_1,\ldots,X_M$, define $\widehat w=M^{-1}\sum_i\mathbf 1\{X_i=-b\}$ and $\widehat\pi_M=\widehat w\delta_{-b}+(1-\widehat w)\delta_b$. The one-Wasserstein error and the probability that at least one posterior mode is absent from the sample are
$$W_1(\widehat\pi_M,\pi_w)=2b|\widehat w-w|,\qquad P\{\widehat w\in\{0,1\}\}=(1-w)^M+w^M,$$
and $E W_1(\widehat\pi_M,\pi_w)\le2b\sqrt{w(1-w)/M}$.

## Example references

[[ex-ip-ideal-score-error-allows-unbounded-euler-wasserstein|The finite-compute posterior-fidelity question, with score and time-discretization errors set to zero.]]

## Facts & Assumptions

**Given:** $b>0$, $0<w<1$, $M\ge1$, posterior $\pi_w=w\delta_{-b}+(1-w)\delta_b$, and independent draws $X_i\sim\pi_w$.

[A1] $W_1$ is the infimum of $E|X-X'|$ over couplings of the two probability measures.

## Verification

1.1 Put $\widehat w=M^{-1}\sum_i\mathbf 1\{X_i=-b\}$. In any coupling of $\widehat\pi_M$ and $\pi_w$, mass $\min\{\widehat w,w\}$ at $-b$ and $\min\{1-\widehat w,1-w\}$ at $b$ can be matched at zero cost; the remaining mass is $|\widehat w-w|$ and must move between the atoms, a distance $2b$. This coupling is feasible and no coupling can move less unmatched mass, so it is optimal and gives $W_1=2b|\widehat w-w|$. [given, A1, construct]

2.1 The count $M\widehat w$ is binomial $(M,w)$, so $E\widehat w=w$ and $\operatorname{Var}(\widehat w)=w(1-w)/M$. Cauchy–Schwarz gives $E|\widehat w-w|\le\sqrt{w(1-w)/M}$; step 1.1 yields the expected Wasserstein bound. The event of missing $-b$ has probability $(1-w)^M$, and the event of missing $b$ has probability $w^M$; for $M\ge1$ these events are disjoint, giving the displayed miss probability. [given, step 1.1, algebra] ∎
