---
id: thm-rcbd-treatment-contrast-f-law
kind: theorem
title: Exact Gaussian F law for RCBD treatment contrasts
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-randomized-complete-block-design
  - def-finite-randomized-treatment-assignment-model
  - def-axiom-of-choice
  - def-statistic-and-estimator
  - def-student-t-and-f-laws
  - lem-rcbd-nested-contrast-model-and-projection
  - thm-gaussian-linear-model-qr-and-exact-t-f-pivots
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
    - title: "Gary W. Oehlert, A First Course in Design and Analysis of Experiments, Chapter 13 §13.2.2"
      url: "https://users.stat.umn.edu/~gary/book/fcdae.pdf"
---

## Statement

Assume the Axiom of Choice. Let $t,b\ge2$ and fix the RCBD cell layout. Let
$$Y_{ij}=\mu+\tau_i+\beta_j+\epsilon_{ij},\qquad \sum_i\tau_i=0,\quad \sum_j\beta_j=0,$$
where, conditional on the realized assignment, the errors are independent
$N(0,\sigma^2)$ variables with $\sigma^2>0$. The assignment law alone does
not imply these Gaussian, independence, equal-variance, or additivity
assumptions. Let $C\in\mathbb R^{q\times t}$ have rank $q$,
$1\le q\le t-1$, and $C\mathbf1_t=0$. Define $W_U,W_R(C)$ and their
residual sums of squares as in
[[lem-rcbd-nested-contrast-model-and-projection]], and put
$\nu=(t-1)(b-1)>0$. For the null $C\tau=0$, the statistic
$$\widetilde F_C(Y)=\begin{cases}\displaystyle\frac{b(C\bar Y)^T(CC^T)^{-1}(C\bar Y)/q}{RSS_U/\nu},&RSS_U>0,\\0,&RSS_U=0,\end{cases}$$
where $\bar Y=(\bar Y_{1\cdot},\ldots,\bar Y_{t\cdot})^T$, has the central
Fisher law $F_{q,\nu}$ ([[def-student-t-and-f-laws]]). In particular, the
usual all-treatment-equal test has $q=t-1$. This is model-based exact
inference conditional on the design, not a consequence of assignment
randomization alone.

The data space is $\mathbb R^{tb}$ with its Borel sigma-algebra; the model
above is the fixed-design Gaussian experiment for the realized RCBD layout.

## Facts & Assumptions

**Given:** The additive RCBD model, conditional independent $N(0,\sigma^2)$ cell errors, $t,b\ge2$, a full-row-rank contrast matrix $C$ with $C\mathbf1_t=0$, AC, and the null $C\tau=0$.

[A1] AC is required by the Gaussian nested-model theorem used below, through its standard-normal construction and orthogonal-invariance argument ([[def-axiom-of-choice]]).

[F1] For nested mean spaces $W_R\subset W_U$ of dimensions $p-q$ and $p$, with $p<n$ and independent $N(0,\sigma^2)$ errors, the nested Gaussian linear-model theorem gives $(RSS_R-RSS_U)/q$ divided by $RSS_U/(n-p)$ the $F_{q,n-p}$ law when the mean lies in $W_R$ ([[thm-gaussian-linear-model-qr-and-exact-t-f-pivots]]).

[F2] For this balanced RCBD, the full and restricted spaces have dimensions $t+b-1$ and $t+b-1-q$, the residual degrees of freedom are $(t-1)(b-1)$, and $RSS_R-RSS_U=b(C\bar Y)^T(CC^T)^{-1}(C\bar Y)$ ([[lem-rcbd-nested-contrast-model-and-projection]]).

[F3] The F law is the ratio of independent positive-degree chi-square variables divided by their degrees of freedom, with the statistic defined as zero on a zero-denominator set ([[def-student-t-and-f-laws]]).

[F4] A statistic is a measurable map from the experiment's data space to its target measurable space ([[def-statistic-and-estimator]]).

[F5] The finite assignment model holds the treatment schedule fixed and supplies only its specified assignment law; it does not supply an error distribution ([[def-finite-randomized-treatment-assignment-model]]).

## Proof

1.1 By [F2], $W_R(C)\subset W_U$, $p=\dim W_U=t+b-1$, $q=\dim W_U-\dim W_R(C)$, and $n=tb$. Since $t,b\ge2$, $n-p=tb-t-b+1=(t-1)(b-1)=\nu>0$, and $q\le t-1\le p$. Under $C\tau=0$, the mean array $(\mu+\tau_i+\beta_j)_{ij}$ belongs to $W_R(C)$. Thus the nested-space, positive-degree, and null-mean hypotheses of [F1] hold. [given, F1, F2, algebra]

2.1 Applying [F1] gives the piecewise nested-model statistic $\{(RSS_R-RSS_U)/q\}/\{RSS_U/\nu\}$ the law $F_{q,\nu}$, with its value set to zero when $RSS_U=0$. The finite assignment law [F5] supplies no normal-error assumption; Gaussianity here is separately imposed in the Given. AC is used exactly through [A1] and [F1]. [A1, F1, F5, step 1.1]

3.1 By [F2], the numerator reduction is $b(C\bar Y)^T(CC^T)^{-1}(C\bar Y)$, so the statistic in the Statement is the same piecewise ratio. Its numerator and residual sum of squares are continuous functions of the data, and the ratio with the stated zero-denominator branch is Borel measurable; hence it is a statistic by [F4]. [F2, F4, step 2.1, algebra]

4.1 Since $q,\nu>0$, [F3] defines the named central law and step 3.1 is the piecewise nested-model ratio from [F1]. It therefore has law $F_{q,\nu}$, as claimed. [F1, F3, step 3.1] ∎