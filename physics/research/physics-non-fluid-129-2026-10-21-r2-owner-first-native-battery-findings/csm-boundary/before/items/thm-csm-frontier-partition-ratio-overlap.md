---
id: thm-csm-frontier-partition-ratio-overlap
kind: theorem
title: Finite partition-ratio estimator and overlap variance
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 0
domain: mathematics
library: physics
deps:
  - alg-importance-sampling
  - thm-ordinary-importance-sampling-finite-variance-under-weighted-second-moment
dependency_roles:
  alg-importance-sampling: mathematical-premise
  thm-ordinary-importance-sampling-finite-variance-under-weighted-second-moment: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 9 §9.1, Theorem 9.1 and equations (9.3)–(9.4)"
      url: "https://artowen.su.domains/mc/Ch-var-is.pdf"
      locator: "Chapter 9 §9.1, printed pp. 3–5 (PDF pp. 3–5): support condition, weighted sample mean, and its unbiasedness and finite-variance formula. §9.2, printed pp. 8–9, distinguishes the unknown-normalizer ratio estimator."
    - title: "Xiao-Li Meng and Wing Hung Wong, Simulating Ratios of Normalizing Constants via a Simple Identity: A Theoretical Exploration"
      url: "https://www3.stat.sinica.edu.tw/statistica/oldpdf/a6n43.pdf"
      locator: "§§1–3, printed pp. 831–837 (PDF pp. 1–6): normalizing-constant ratios, common-support identity, independent draws, and relative-error analysis. Their ratio-estimator asymptotics are not imported as this finite IID theorem."
---

## Statement

Let $\mathsf X$ be a finite nonempty set equipped with counting measure. For $a\in\{0,1\}$, let $w_a:\mathsf X\to(0,\infty)$ be a finite positive weight, define $Z_a=\sum_{x\in\mathsf X}w_a(x)$, and define the probability mass function $\pi_a(x)=w_a(x)/Z_a$. For an integer $n\geq1$, let $X_1,\ldots,X_n$ be independent random variables with common law $\pi_0$. Define $R(x)=w_1(x)/w_0(x)$, $\widehat r_n=n^{-1}\sum_{j=1}^nR(X_j)$, and $\chi^2(\pi_1\Vert\pi_0)=\sum_{x\in\mathsf X}\pi_0(x)(\pi_1(x)/\pi_0(x)-1)^2$. Then

$$\mathbb E_{\pi_0}[\widehat r_n]=\frac{Z_1}{Z_0},\qquad \frac{\operatorname{Var}_{\pi_0}(\widehat r_n)}{(Z_1/Z_0)^2}=\frac{\chi^2(\pi_1\Vert\pi_0)}{n}.$$

The estimator uses only the finite raw-weight ratios $w_1(X_j)/w_0(X_j)$; the partition sums define the target ratio and probability laws but are not inputs to its computation.

## Statement references

[[alg-importance-sampling]]

[[thm-ordinary-importance-sampling-finite-variance-under-weighted-second-moment]]

## Facts & Assumptions

**Given:** The finite nonempty state set, strictly positive finite weights $w_0,w_1$, their finite normalizing sums $Z_0,Z_1$, and independent samples $X_j\sim\pi_0$.

[F1] [[alg-importance-sampling]]: for an unnormalized target $\tilde p$, proposal density $q$, integrand $f$, and target normalizer $Z_p$, the weighted value is $f\tilde p/(Z_pq)$ on $q>0$ and zero otherwise. Its support and integrability conditions are explicit, and its normalizing constant $Z_p$ is a known input to that algorithm.

[F2] [[thm-ordinary-importance-sampling-finite-variance-under-weighted-second-moment]]: under the ordinary importance-sampling hypotheses and finite weighted second moment, the finite-sample variance is the variance of one weighted value divided by $n$; the finite-sample conclusion is choice-free.

## Proof

**Given:** [F1], [F2], and the finite positive weights and IID $\pi_0$ sample in the Statement.

1.1 Put $R=w_1/w_0$. Finite summation gives $\mathbb E_{\pi_0}R=\sum_x(w_0(x)/Z_0)(w_1(x)/w_0(x))=Z_1/Z_0$. Since $w_0(x),w_1(x)>0$ on every point of $\mathsf X$, the formal ordinary-importance-sampling setup with counting measure, $\tilde p=w_1$, $q=\pi_0$, $f\equiv1$, and $Z_p=Z_1$ has full support and finite weighted second moment. Its weighted value is $Y=(Z_0/Z_1)R=\pi_1/\pi_0$, and finite summation gives $\mathbb E_{\pi_0}Y=(Z_0/Z_1)\mathbb E_{\pi_0}R=1$. Here $Z_1$ is used only to identify this mathematical random variable; it is not supplied to or computed by the raw-weight ratio estimator. [F1, given, algebra]

2.1 Apply [F2] to this formal weighted variable with mean $1$ from step 1.1. It gives $\operatorname{Var}(\overline Y_n)=n^{-1}(\mathbb E_{\pi_0}[Y^2]-1)$. Since $\overline Y_n=(Z_0/Z_1)\widehat r_n$, rescaling gives $\operatorname{Var}(\widehat r_n)/(Z_1/Z_0)^2=n^{-1}(\sum_x\pi_0(x)(\pi_1(x)/\pi_0(x))^2-1)$. [F2, given, step 1.1, algebra]

3.1 The probability masses sum to one, so expanding the square gives $\chi^2(\pi_1\Vert\pi_0)=\sum_x\pi_0(x)(\pi_1(x)/\pi_0(x))^2-2\sum_x\pi_1(x)+\sum_x\pi_0(x)=\sum_x\pi_0(x)(\pi_1(x)/\pi_0(x))^2-1$. Substitution into step 2.1 proves the variance identity. [given, step 2.1, algebra] ∎

## Remarks

The proof uses the ordinary importance-sampling variance identity only after symbolically normalizing the target. It does not treat the ordinary importance-sampling algorithm, whose contract requires a known target normalizer, as a procedure for computing an unknown partition ratio.
