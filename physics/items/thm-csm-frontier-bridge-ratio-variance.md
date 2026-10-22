---
id: thm-csm-frontier-bridge-ratio-variance
kind: theorem
title: Mean and relative second moment of independent bridge ratios
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 2
domain: mathematics
library: physics
deps:
  - alg-csm-frontier-independent-bridge-ratios
  - thm-csm-frontier-partition-ratio-overlap
dependency_roles:
  alg-csm-frontier-independent-bridge-ratios: mathematical-premise
  thm-csm-frontier-partition-ratio-overlap: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 10 §10.9, Bridge, Umbrella and Path Sampling"
      url: "https://artowen.su.domains/mc/Ch-var-adv.pdf"
      locator: "Chapter 10 §10.9, printed pp. 39–45 (PDF pp. 39–45): bridge and path estimates of normalizing-constant ratios and the requirement for intermediate overlap. The theorem here proves an exact finite independent-stage formula for its simpler raw-ratio procedure."
    - title: "Xiao-Li Meng and Wing Hung Wong, Simulating Ratios of Normalizing Constants via a Simple Identity: A Theoretical Exploration"
      url: "https://www3.stat.sinica.edu.tw/statistica/oldpdf/a6n43.pdf"
      locator: "§§2–3, printed pp. 834–837 (PDF pp. 4–6): bridge identities and independent-draw relative-error analysis. Their ratio-estimator variance is first-order/asymptotic; no such ratio approximation is used in this finite proof."
---

## Statement

Let $\mathsf X$ be a finite nonempty set, let $K\geq1$, and let $w_0,\ldots,w_K:\mathsf X\to(0,\infty)$ be finite positive weights. For each $k$, set $Z_k=\sum_{x\in\mathsf X}w_k(x)$ and $\pi_k(x)=w_k(x)/Z_k$. For strictly positive probability mass functions $\nu,\mu:\mathsf T\to(0,1]$ on any finite nonempty set $\mathsf T$ (so $\sum_{x\in\mathsf T}\nu(x)=\sum_{x\in\mathsf T}\mu(x)=1$), define $\chi^2(\nu\Vert\mu)=\sum_{x\in\mathsf T}\mu(x)(\nu(x)/\mu(x)-1)^2$. On a common probability space $(\Omega,\mathcal F,\mathbb P)$, let $X_{k,j}:\Omega\to(\mathsf X,\mathcal P(\mathsf X))$ for $0\le k<K$ and $1\le j\le n_k$ be mutually independent random variables with $\mathbb P(X_{k,j}=x)=\pi_k(x)$ for each $x\in\mathsf X$, where $n_k\geq1$; these are the supplied stage samples in alg-csm-frontier-independent-bridge-ratios. Then

$$\mathbb E[\widehat R]=\frac{Z_K}{Z_0},\qquad \frac{\mathbb E[\widehat R^2]}{(Z_K/Z_0)^2}=\prod_{k=0}^{K-1}\left(1+\frac{\chi^2(\pi_{k+1}\Vert\pi_k)}{n_k}\right).$$

Consequently, $\operatorname{Var}(\widehat R)/(Z_K/Z_0)^2$ is the displayed product minus $1$. This is an exact finite-sample result under independent exact draws; it gives no claim for reused trajectories, approximate Gibbs draws, or adaptively selected bridges.

## Statement references

[[alg-csm-frontier-independent-bridge-ratios]]

[[thm-csm-frontier-partition-ratio-overlap]]

## Facts & Assumptions

**Given:** The finite positive weights, stage laws, sample counts, and mutually independent stage samples in the Statement.

[F1] [[thm-csm-frontier-partition-ratio-overlap]]: for a finite positive pair of weights and $n_k$ independent draws with common law $\pi_k$, the adjacent raw-ratio sample mean has mean $Z_{k+1}/Z_k$ and relative variance $\chi^2(\pi_{k+1}\Vert\pi_k)/n_k$.

[F2] [[alg-csm-frontier-independent-bridge-ratios]]: the procedure returns the product of those adjacent sample means and requires all draws across stages to be mutually independent.

## Proof

**Given:** [F1], [F2], and the finite positive weights and mutually independent stage samples.

1.1 For each $k$, apply [F1] to $(w_k,w_{k+1})$ and the $n_k$ independent samples with common law $\pi_k$. With $r_k=Z_{k+1}/Z_k$, the stage mean $\overline R_k$ satisfies $\mathbb E[\overline R_k]=r_k$ and $\operatorname{Var}(\overline R_k)/r_k^2=\chi^2(\pi_{k+1}\Vert\pi_k)/n_k$. Since $\mathbb E[\overline R_k^2]=\operatorname{Var}(\overline R_k)+(\mathbb E[\overline R_k])^2$, it follows that $\mathbb E[\overline R_k^2]/r_k^2=1+\chi^2(\pi_{k+1}\Vert\pi_k)/n_k$. All moments are finite because $\mathsf X$ is finite and the weights are positive and finite. [F1, given, algebra]

2.1 Write $B_k=(X_{k,1},\ldots,X_{k,n_k})\in\mathsf X^{n_k}$. The blocks are independent finite-valued random elements, and $\overline R_k$ is a function of $B_k$. If $\mu_k(b)=\mathbb P(B_k=b)$, then for any functions $G_k$ of the respective blocks, independence and finite summation give $$\mathbb E\left[\prod_{k=0}^{K-1}G_k(B_k)\right]=\sum_{b_0\in\mathsf X^{n_0},\ldots,b_{K-1}\in\mathsf X^{n_{K-1}}}\prod_{k=0}^{K-1}\mu_k(b_k)G_k(b_k)=\prod_{k=0}^{K-1}\mathbb E[G_k(B_k)].$$ Apply this first with $G_k=\overline R_k$ and then with $G_k=\overline R_k^2$. Thus $\mathbb E[\widehat R]=\prod_k\mathbb E[\overline R_k]=\prod_k(Z_{k+1}/Z_k)=Z_K/Z_0$, while $\mathbb E[\widehat R^2]/(Z_K/Z_0)^2=\prod_k\mathbb E[\overline R_k^2]/r_k^2$. Substitution from step 1.1 gives the stated product, and subtracting one yields the relative variance. [F1, F2, given, step 1.1, algebra] ∎
