---
id: ex-ip-score-coverage-baseline-gaussian-sequence
kind: example
title: Exact Gaussian credible-ball coverage with a score-error budget of zero
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
axiom_use: No choice axiom is used; all distributions are finite-dimensional and explicit.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Let $n\ge1$, $\sigma,\tau>0$, and $0<\gamma<1$. Given a scalar truth $\theta\in\mathbb R$, observe independent $Y_i\sim N(\theta,\sigma^2)$, $i=1,\ldots,n$, and use the proper prior $\theta\sim N(0,\tau^2)$. Write $\bar Y=n^{-1}\sum_iY_i$, $v_n=(\tau^{-2}+n\sigma^{-2})^{-1}$, $a_n=v_n n\sigma^{-2}$, and $z_\gamma=\Phi^{-1}(1-\gamma/2)$, where $\Phi$ is the standard normal cumulative distribution function. The exact posterior is $N(a_n\bar Y,v_n)$ and its central $(1-\gamma)$ credible interval is $C_n(\bar Y)=[a_n\bar Y-z_\gamma\sqrt{v_n},a_n\bar Y+z_\gamma\sqrt{v_n}]$. Its frequentist coverage at truth $\theta$ is
$$P_\theta\{\theta\in C_n(\bar Y)\}=\Phi\!\left(\frac{z_\gamma\sqrt{v_n}+(1-a_n)\theta}{a_n\sigma/\sqrt n}\right)-\Phi\!\left(\frac{-z_\gamma\sqrt{v_n}+(1-a_n)\theta}{a_n\sigma/\sqrt n}\right).$$

## Example references

[[op-ip-calibration-under-score-and-solver-error|The calibration frontier whose exact-computation baseline is isolated here.]]

## Facts & Assumptions

**Given:** The normal observation model, the proper $N(0,\tau^2)$ prior, the posterior credible interval, $n\ge1$, $\sigma,\tau>0$, and $0<\gamma<1$ from the Example.

[A1] The likelihood is proportional to $\exp(-\frac{1}{2\sigma^2}\sum_{i=1}^n(Y_i-\theta)^2)$ and the prior density is proportional to $\exp(-\theta^2/(2\tau^2))$.

[A2] $\Phi(t)=P(Z\le t)$ for $Z\sim N(0,1)$, and $z_\gamma$ is its $(1-\gamma/2)$ quantile.

## Verification

1.1 Multiplying the likelihood by the prior and completing the square in $\theta$ gives posterior precision $\tau^{-2}+n\sigma^{-2}$ and posterior mean $(\tau^{-2}+n\sigma^{-2})^{-1}n\sigma^{-2}\bar Y=a_n\bar Y$. Thus the posterior variance is $v_n$ and the stated interval has posterior mass $1-\gamma$. [given, A1, A2, algebra]

2.1 Under the fixed truth $\theta$, $a_n\bar Y-\theta$ is normal with mean $-(1-a_n)\theta$ and standard deviation $a_n\sigma/\sqrt n$. The event $\theta\in C_n(\bar Y)$ is exactly $-z_\gamma\sqrt{v_n}\le a_n\bar Y-\theta\le z_\gamma\sqrt{v_n}$; standardizing the two endpoints gives the displayed difference of normal cumulative probabilities. [given, A1, A2, step 1.1, algebra] ∎
