---
id: ex-csm-frontier-product-overlap-explosion
kind: example
title: Product-law overlap explosion
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 1
domain: mathematics
library: physics
deps:
  - thm-csm-frontier-partition-ratio-overlap
dependency_roles:
  thm-csm-frontier-partition-ratio-overlap: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 9 §9.1"
      url: "https://artowen.su.domains/mc/Ch-var-is.pdf"
      locator: "Chapter 9 §9.1, printed pp. 3–5 (PDF pp. 3–5): support conditions and the weighted-sample variance identity used as a comparison for the local product calculation."
    - title: "Xiao-Li Meng and Wing Hung Wong, Simulating Ratios of Normalizing Constants via a Simple Identity: A Theoretical Exploration"
      url: "https://www3.stat.sinica.edu.tw/statistica/oldpdf/a6n43.pdf"
      locator: "§§2–3, printed pp. 834–837 (PDF pp. 4–6): overlap between target/reference laws and relative mean-square error under independent draws. The exact product-law identity and finite bound are proved here."
---

## Example

Let $\mathsf S$ be a finite nonempty set and let $p_0,p_1:\mathsf S\to(0,1]$ be distinct strictly positive probability mass functions, so $\sum_{s\in\mathsf S}p_i(s)=1$ for $i=0,1$. For strictly positive probability mass functions $\nu,\mu:\mathsf T\to(0,1]$ on any finite nonempty set $\mathsf T$ (so $\sum_{x\in\mathsf T}\nu(x)=\sum_{x\in\mathsf T}\mu(x)=1$), define $\chi^2(\nu\Vert\mu)=\sum_{x\in\mathsf T}\mu(x)(\nu(x)/\mu(x)-1)^2$. For each integer $m\geq1$, define $\pi_i^{(m)}:\mathsf S^m\to(0,1]$ by $\pi_i^{(m)}(x_1,\ldots,x_m):=\prod_{j=1}^m p_i(x_j)$; these are the positive product probability mass functions. Then

$$1+\chi^2(\pi_1^{(m)}\Vert\pi_0^{(m)})=\left(1+\chi^2(p_1\Vert p_0)\right)^m.$$

On a probability space $(\Omega,\mathcal F,\mathbb P)$, let $X_1,\ldots,X_N:\Omega\to(\mathsf S^m,\mathcal P(\mathsf S^m))$ be independent random variables with common law $\pi_0^{(m)}$, where $N\geq1$. Define the one-stage raw-ratio estimator $\widehat r=N^{-1}\sum_{j=1}^N\pi_1^{(m)}(X_j)/\pi_0^{(m)}(X_j)$. Its relative variance is $\big((1+\chi^2(p_1\Vert p_0))^m-1\big)/N$. Since $p_0\ne p_1$, keeping this relative variance at most a fixed $\varepsilon>0$ requires $N\geq((1+\chi^2(p_1\Vert p_0))^m-1)/\varepsilon$, an exponential sample-size bound for this one-stage estimator.

## Example references

[[thm-csm-frontier-partition-ratio-overlap]]

## Facts & Assumptions

**Given:** A finite nonempty alphabet $\mathsf S$, distinct strictly positive probability mass functions $p_0,p_1$, integers $m,N\geq1$, a tolerance $\varepsilon>0$, and the product laws in the Example.

[F1] [[thm-csm-frontier-partition-ratio-overlap]]: for finite positive weights and $N$ independent draws with common reference law, the relative variance of the raw-weight partition-ratio estimator is $\chi^2(\pi_1\Vert\pi_0)/N$.

## Verification

**Given:** [F1] and the finite product laws in the Example.

1.1 For $x=(x_1,\ldots,x_m)\in\mathsf S^m$, the likelihood ratio is $\pi_1^{(m)}(x)/\pi_0^{(m)}(x)=\prod_{j=1}^m p_1(x_j)/p_0(x_j)$. Factoring the finite sum gives $1+\chi^2(\pi_1^{(m)}\Vert\pi_0^{(m)})=\sum_x\pi_0^{(m)}(x)(\pi_1^{(m)}(x)/\pi_0^{(m)}(x))^2=\left(\sum_{s\in\mathsf S}p_0(s)(p_1(s)/p_0(s))^2\right)^m=(1+\chi^2(p_1\Vert p_0))^m$. [given, algebra]

2.1 Because $p_0\ne p_1$ and $p_0(s)>0$ at every $s$, at least one term in $\sum_s p_0(s)(p_1(s)/p_0(s)-1)^2$ is positive, so $\rho:=1+\chi^2(p_1\Vert p_0)>1$. Applying [F1] with $N$ draws gives relative variance $(\rho^m-1)/N$; the bound $(\rho^m-1)/N\leq\varepsilon$ forces $N\geq(\rho^m-1)/\varepsilon$. This establishes exponential growth for the stated one-stage estimator and makes no cost claim for bridge or other methods. [F1, given, step 1.1, algebra] ∎
