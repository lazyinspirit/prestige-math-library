---
id: ex-independent-gaussian-increments-subgaussian-mixture-confidence-sequence
kind: example
title: Independent Gaussian increments satisfy the conditional proxy
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-conditional-subgaussian-increments
  - lem-gaussian-exponential-mixture-integral
  - lem-conditioning-a-known-variable-and-an-independent-variable
  - def-standard-normal-and-normal-laws
  - thm-subgaussian-mixture-confidence-sequence
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Example

Let $\Theta\subseteq\mathbb R$, let $(\Omega,\mathcal F,(\mathcal F_t)_{t\in\mathbb N_0})$ be a common discrete filtered measurable space, let $(P_\theta)_{\theta\in\Theta}$ be probability laws on it, and let $(X_t)_{t\ge1}$ be a common real-valued process adapted under every $P_\theta$. Under each $P_\theta$, assume the residuals $Y_t^{(\theta)}:=X_t-\theta$ have law $N(0,\tau^2)$ for a known $\tau^2>0$ and, for every $t\ge1$, every Borel $B\subseteq\mathbb R$, and every $A\in\mathcal F_{t-1}$,
$$P_\theta(\{Y_t^{(\theta)}\in B\}\cap A)=P_\theta(Y_t^{(\theta)}\in B)P_\theta(A).$$
Let the reported proxy be any known $\sigma^2\ge\tau^2$, and fix $\rho>0$ and $\alpha\in(0,1)$. The Gaussian-mixture intervals with proxy $\sigma^2$ are a $(1-\alpha)$ confidence sequence for $\theta$.

## Facts & Assumptions

**Given:** Assume AC, $\tau^2>0$, $\sigma^2\ge\tau^2$, $\rho>0$, $\alpha\in(0,1)$, a common discrete filtered measurable space with laws $(P_\theta)_{\theta\in\Theta}$, a common real-valued process $(X_t)$ adapted under every $P_\theta$, and, under each $P_\theta$, residuals $Y_t^{(\theta)}=X_t-\theta\sim N(0,\tau^2)$ satisfying the displayed event-factorization identity for every $t\ge1$, Borel $B$, and $A\in\mathcal F_{t-1}$.

[F1] [[def-standard-normal-and-normal-laws]]: $N(0,\tau^2)$ is the law of an affine scaling of the standard normal law.

[F2] [[lem-gaussian-exponential-mixture-integral]]: for $\rho'>0$, $s\in\mathbb R$, and $v\ge0$, the Gaussian mixture integral equals $\sqrt{\rho'/(v+\rho')}e^{s^2/[2(v+\rho')]}$.

[F3] [[lem-conditioning-a-known-variable-and-an-independent-variable]]: if Borel events of an integrable random variable factor with every event in $\mathcal G$, its conditional expectation given $\mathcal G$ is its unconditional expectation almost surely.

[F4] [[def-conditional-subgaussian-increments]]: conditional sub-Gaussianity requires the conditional mgf bound for every fixed real $\lambda$ at every time.

[F5] [[thm-subgaussian-mixture-confidence-sequence]]: under that conditional proxy at every time and for every $\lambda$, the stated closed intervals cover the true parameter simultaneously with probability at least $1-\alpha$.

[A1] [[def-axiom-of-choice]]: AC is used by the normal-law, conditional-expectation, and confidence-sequence suppliers.

## Verification

1.1 If $\Theta=\varnothing$ the conclusion is vacuous. Otherwise fix $\theta\in\Theta$, $t\ge1$, and $\lambda\in\mathbb R$, and write $Y_t=Y_t^{(\theta)}$. Apply [F2] with $\rho'=1/\tau^2$, $v=0$, and $s=\lambda$. Since $N(0,\tau^2)=N(0,1/\rho')$ by [F1], this gives $\mathbb E e^{\lambda Y_t}=e^{\lambda^2\tau^2/2}$ under $P_\theta$, finite for every real $\lambda$. [given, F1, F2, algebra]

2.1 For the fixed $\theta,t,\lambda$, the map $y\mapsto e^{\lambda y}$ is Borel, so for each Borel $D\subseteq\mathbb R$ its preimage is Borel; the stated factorization for $Y_t^{(\theta)}$ therefore gives the same factorization for $e^{\lambda Y_t}$. This variable is integrable by step 1.1, so [F3] yields $\mathbb E[e^{\lambda Y_t}\mid\mathcal F_{t-1}]=\mathbb E[e^{\lambda Y_t}]$ under $P_\theta$. Since $X_t-\theta=Y_t$, step 1.1 now gives $$\mathbb E_{P_\theta}[e^{\lambda(X_t-\theta)}\mid\mathcal F_{t-1}]=e^{\lambda^2\tau^2/2}\le e^{\lambda^2\sigma^2/2}$$ almost surely. As $t$ and $\lambda$ were arbitrary, [F4] applies for each $\theta$, time, and fixed tuning value. [given, F3, F4, step 1.1]

3.1 For each $\theta$, the common filtered model and adapted process together with the conditional proxy verified in step 2.1 and [A1] meet the hypotheses of [F5]. Therefore the intervals have simultaneous coverage at least $1-\alpha$ under each $P_\theta$. [F5, A1, step 2.1] ∎
