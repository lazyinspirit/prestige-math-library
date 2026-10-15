---
id: thm-gaussian-contrast-independent-of-orthogonal-residual
kind: theorem
title: A Gaussian contrast is independent of its orthogonal residual
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-polyhedral-selection-event-and-contrast-interval
  - def-axiom-of-choice
  - def-multivariate-normal-law
  - thm-orthogonal-projection-has-independent-chi-square-sums
  - lem-measurable-functions-preserve-independence
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Jason D. Lee, Dennis L. Sun, Yuekai Sun, and Jonathan E. Taylor, Exact Post-Selection Inference, with Application to the Lasso"
      url: "https://arxiv.org/pdf/1311.6238"
---

## Statement

Assume AC. Let $Y\sim N_n(\mu,\sigma^2I_n)$ with known $\sigma>0$, and fix $\eta\ne0$. With $T=\eta^TY$, $P_\eta=\eta\eta^T/\|\eta\|^2$, and $Z=(I_n-P_\eta)Y$ as in [[def-polyhedral-selection-event-and-contrast-interval]], the scalar $T$ and vector $Z$ are independent, and
$$T\sim N(\eta^T\mu,\sigma^2\|\eta\|^2).$$

## Facts & Assumptions

**Given:** AC, $Y\sim N_n(\mu,\sigma^2I_n)$, $\sigma>0$, and $\eta\ne0$.

[A1] The Axiom of Choice is assumed by the multivariate normal law and the Gaussian orthogonal-projection theorem. [[def-axiom-of-choice]]

[F1] A multivariate normal law $N_n(\mu,\Sigma)$ has every linear projection normal with mean $u^T\mu$ and variance $u^T\Sigma u$, and can be realized as $\mu+\Sigma^{1/2}W$ for independent standard normal coordinates in $W$. [[def-multivariate-normal-law]]

[F2] For a standard Gaussian vector $W$ and an orthogonal projection $P$, the vectors $PW$ and $(I_n-P)W$ are independent. [[thm-orthogonal-projection-has-independent-chi-square-sums]]

[F3] Measurable coordinatewise functions of independent random elements remain independent. [[lem-measurable-functions-preserve-independence]]

[F4] $P_\eta,T,Z$ have the definitions and domains stated in the local setup. [[def-polyhedral-selection-event-and-contrast-interval]]

## Proof

1.1 Put $P=P_\eta$. Since $\eta\ne0$, $P^T=P$ and $P^2=P$. For every $y$, $Py=\eta(\eta^Ty)/\|\eta\|^2$ belongs to $\operatorname{span}\{\eta\}$, and $\eta^T(y-Py)=0$, so $y-Py\in(\operatorname{span}\{\eta\})^\perp$. Thus $P$ is the rank-one orthogonal projection onto $\operatorname{span}\{\eta\}$ in [F4]. The conclusion concerns only the joint law of $T,Z$, so by [F1] it suffices to use the realization $Y=\mu+\sigma W$ with $W\sim N_n(0,I_n)$. Apply [F2] to $P$. This use of AC is exactly [A1]. [A1, F1, F2, F4, algebra]

2.1 Because $P\eta=\eta$, $T=\eta^T\mu+\sigma\eta^TPW$, while $Z=(I_n-P)\mu+\sigma(I_n-P)W$. Thus $T$ and $Z$ are measurable functions of the independent vectors $PW$ and $(I_n-P)W$; [F3] makes them independent. [F2, F3, step 1.1, algebra]

3.1 By the linear-projection clause of [F1], $T=\eta^TY$ is normal with mean $\eta^T\mu$ and variance $\eta^T(\sigma^2I_n)\eta=\sigma^2\|\eta\|^2$. AC is inherited from [A1] through the normal-law supplier [F1]. [A1, F1, algebra] ∎