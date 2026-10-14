---
id: cex-nadaraya-watson-design-gradient-and-boundary-bias
kind: counterexample
title: Nadaraya–Watson bias from design gradients and boundaries
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-measure-with-density
  - def-nadaraya-watson-estimator
  - def-regression-target-version
  - thm-nadaraya-watson-population-bias
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Whitney K. Newey, Nonparametric and Semiparametric Estimation, MIT course notes"
      url: "https://ocw.mit.edu/courses/14-385-nonlinear-econometric-analysis-fall-2007/655fcef1b4192f40d80edea3c1dd85ce_notes_nonsemi.pdf"
    - title: "Ryan Tibshirani, Nonparametric Regression: Nearest Neighbors and Kernels"
      url: "https://www.stat.berkeley.edu/~ryantibs/statlearn-s24/lectures/nn_kernels.pdf"
---

## Statement refuted

Symmetry of the kernel alone makes the population Nadaraya–Watson smoother
reproduce every affine regression function exactly in the interior and keeps
its bias of order $h^2$ at a support boundary.

## Facts & Assumptions

**Given:** The two models below and $K(u)=\tfrac12\mathbf1_{\{|u|\le1\}}$, which is symmetric, nonnegative, normalized, and has $\mu_2=1/3$.

[F1] Under its stated interior hypotheses, [[thm-nadaraya-watson-population-bias]] identifies the population smoother by the kernel-weighted ratio and gives the interior expansion used in step 1.1.

[F2] The regression target is a chosen version of $\mathbb E[Y\mid\sigma(X)]$. [[def-regression-target-version]].

[F3] A density $f$ defines the measure $f\,d\lambda$ by $(f\,d\lambda)(A)=\int_A f\,d\lambda$. [[def-measure-with-density]].

[A1] In the interior model, $f(t)=(1+t)/2$ on $[-1,1]$ and $Y=X$. Choose the regular conditional law $Q(t,dy)=\delta_t(dy)$ for every $t\in\mathbb R$, giving the pointwise version $m(t)=t$; also $f'(0)/f(0)=1$.

[A2] In the boundary model, $X$ is uniform on $[0,1]$, $Y=X$, and the prediction point is the support boundary $x=0$. Choose the regular conditional law $Q(t,dy)=\delta_t(dy)$ for every $t\in\mathbb R$, giving the pointwise version $m(t)=t$.

[A3] AC is inherited through the chosen versions of the regression target [[def-axiom-of-choice]]; the finite integrations use no choice.

## Counterexample

1.1 In the interior model, $f(-hu)=(1-hu)/2$ and $m(-hu)=-hu$. Evenness gives $\int K(u)u\,du=0$, while $\int K(u)u^2\,du=1/3$. Hence the denominator is $1/2$ and the numerator is $h^2/6$, so their ratio is $h^2/3$. The planned interior formula gives the same nonzero design-gradient term $\tfrac12h^2(1/3)(2m'(0)f'(0)/f(0))=h^2/3$. [given, F1, F2, F3, A1, algebra]

1.2 In the boundary model, define the population kernel-weighted response mean by $\widetilde m_h(0)=\mathbb E[K(-X/h)Y]/\mathbb E[K(-X/h)]$. By [A2] and [F3], it equals $\int_0^1K(-t/h)t\,dt/\int_0^1K(-t/h)\,dt$. Here $K(-t/h)=1/2$ exactly for $0\le t\le h$ and is zero for $h<t\le1$; hence the denominator is $h/2$ and the numerator is $h^2/4$, yielding $\widetilde m_h(0)=h/2$. [given, F2, F3, A2, algebra]

2.1 The first ratio is not $m(0)$ despite affine $m$, and the second has a nonzero coefficient of $h$, not $h^2$. Both contradict the refuted assertion. [given, step 1.1, step 1.2, A3, algebra] ∎
