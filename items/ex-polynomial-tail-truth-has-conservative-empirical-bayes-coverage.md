---
id: ex-polynomial-tail-truth-has-conservative-empirical-bayes-coverage
kind: example
title: "A power-law truth lies in the polished-tail class"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-adaptive-empirical-bayes-gaussian-sequence-procedure
  - def-axiom-of-choice
  - def-gaussian-sequence-hyperrectangle-class
  - def-polished-tail-class-for-gaussian-sequence
  - thm-adaptive-empirical-bayes-credible-ball-conservative-coverage-on-polished-tails
justified_by: []
proof_strategy: direct
axiom_use: "The coverage conclusion inherits the AC-based product Gaussian model from the cited theorem; the deterministic tail comparison itself is choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Botond Szabó, Aad van der Vaart and Harry van Zanten, Frequentist coverage of adaptive nonparametric Bayesian credible sets, Annals of Statistics 43(4) (2015)"
      url: "https://arxiv.org/pdf/1310.4489v5"
      locator: "Definition 3.2 and Theorem 3.6, printed pp. 10 and 12–13 (PDF pp. 11 and 13–14); power-tail polished sequences and conservative coverage."
---

## Example

Fix $\beta>0$, $M>0$, and $\rho\ge2$. Set
$\theta_{0,1}=0$ and
$\theta_{0,i}=\sqrt M\,i^{-1/2-\beta}$ for $i\ge2$. Let $N_0=2$ and
$L_0=(2\beta+1)/(1-\rho^{-2\beta})$. Then
$\theta_0\in\Theta_\beta(M)\cap
\Theta_{\mathrm{pt}}(L_0,N_0,\rho)$. Consequently, under the hypotheses of
[[thm-adaptive-empirical-bayes-credible-ball-conservative-coverage-on-polished-tails]],
an admissible sufficiently large inflation gives conservative frequentist
coverage tending to one for this truth.

## Facts & Assumptions

**Given:** $\beta>0$, $M>0$, $\rho\ge2$, and the sequence in the Example.

[F1] Membership in $\Theta_\beta(M)$ means
$\sup_i i^{1+2\beta}\theta_i^2\le M$.
[[def-gaussian-sequence-hyperrectangle-class]]

[F2] Membership in $\Theta_{\mathrm{pt}}(L_0,N_0,\rho)$ means
$\sum_{i=N}^\infty\theta_i^2\le
L_0\sum_{i=N}^{\lfloor\rho N\rfloor}\theta_i^2$ for every integer
$N\ge N_0$. [[def-polished-tail-class-for-gaussian-sequence]]

[F3] For a truth in this polished-tail class with $\theta_{0,1}=0$, the
source theorem gives an inflation $L$ with frequentist coverage tending to
one. [[thm-adaptive-empirical-bayes-credible-ball-conservative-coverage-on-polished-tails]]

## Verification

1.1 The sequence is square summable because $\sum_{i=2}^\infty i^{-1-2\beta}\le 1+\int_1^\infty x^{-1-2\beta}\,dx<\infty$. For every $i\ge2$, $i^{1+2\beta}\theta_{0,i}^2=M$, and the first coordinate is zero. Thus [F1] holds. [F1, given, algebra]

1.2 For $N\ge2$, monotonicity of $x^{-1-2\beta}$ gives $\sum_{i=N}^{\infty}i^{-1-2\beta} \le N^{-1-2\beta}+\int_N^\infty x^{-1-2\beta}\,dx \le \left(1+\frac1{2\beta}\right)N^{-2\beta}$ and $\sum_{i=N}^{\lfloor\rho N\rfloor}i^{-1-2\beta} \ge\int_N^{\lfloor\rho N\rfloor+1}x^{-1-2\beta}\,dx \ge\frac{1-\rho^{-2\beta}}{2\beta}N^{-2\beta}.$ Multiplying by $M$ shows that the tail-to-block ratio is at most $(2\beta+1)/(1-\rho^{-2\beta})=L_0$, so [F2] holds. [F2, given, algebra]

2.1 The truth has $\theta_{0,1}=0$ and satisfies [F2], so the theorem [F3] supplies a sufficiently large inflation for which its frequentist coverage tends to one. [F3, step 1.2] ∎
