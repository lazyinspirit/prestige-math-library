---
id: ex-exact-wishart-trace-and-asymptotic-covariance-lrt-differ
kind: example
title: The exact Wishart trace and covariance likelihood ratio are different statistics
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-multivariate-normal-sample-model-and-statistics
  - thm-covariance-likelihood-ratio-asymptotic-chi-square
  - thm-wishart-trace-statistic-is-chi-square
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Arak Mathai, Serge Provost, and Hans J. Haubold, Multivariate Statistical Analysis in the Real and Complex Domains, Chapter 5 §5.5, PDF pp. 47–66"
      url: "https://link.springer.com/content/pdf/10.1007/978-3-030-95864-0_5.pdf"
    - title: "Soumendu Mukherjee, Multivariate Analysis 2021, Lecture 7, PDF pp. 1–4"
      url: "https://soumendu041.gitlab.io/teaching/courses/mva2021/lectures/scribes/lec-7.pdf"
    - title: "Peter D. Hoff, Multivariate Statistical Analysis, Duke STA 832 lecture notes, relevant sections in Chapters 4 and 7"
      url: "https://www2.stat.duke.edu/~pdh10/Teaching/832/Materials/notes.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Example

Take $p=1$, $n=4$, $\Sigma_0=1$, and the observed sample
$$\left(\sqrt{3/2},-\sqrt{3/2},0,0\right).$$
The exact covariance trace statistic and the covariance likelihood-ratio statistic have different values on this observation. The trace statistic has an exact $\chi^2_3$ law under the null, whereas the likelihood-ratio result in [[thm-covariance-likelihood-ratio-asymptotic-chi-square]] gives only an asymptotic $\chi^2_1$ calibration. This example does not assert a finite-sample law for the likelihood ratio.

## Facts & Assumptions

**Given:** The displayed one-dimensional sample, $n=4$, and null variance $\Sigma_0=1$.

[F1] For observations $x_i$, $\bar x=n^{-1}\sum_i x_i$, $R=\sum_i(x_i-\bar x)^2$, $S=R/(n-1)$, and $M=R/n$. [[def-multivariate-normal-sample-model-and-statistics]]

[F2] The null likelihood-ratio statistic is $n\{\operatorname{tr}(\Sigma_0^{-1}M)-\log\det(\Sigma_0^{-1/2}M\Sigma_0^{-1/2})-p\}$; its chi-square result is asymptotic with $p$ fixed. [[thm-covariance-likelihood-ratio-asymptotic-chi-square]]

[F3] Under the null, $\operatorname{tr}(\Sigma_0^{-1}(n-1)S)\sim\chi^2_{p(n-1)}$, including when the scatter is singular. [[thm-wishart-trace-statistic-is-chi-square]]

## Verification

1.1 The sample has mean $0$, so its centered sum of squares is $R=3/2+3/2=3$. Thus $S=R/3=1$ and $M=R/4=3/4$ by [F1]. [given, F1, algebra]

2.1 Since $p=1$ and $\Sigma_0=1$, the trace statistic is $(n-1)S=3$, consistent with its $\chi^2_{1\cdot3}=\chi^2_3$ null law [F3]. Substituting $M=3/4$ in [F2] gives the observed likelihood-ratio value $$4\left(\frac34-\log\frac34-1\right)=4\left(\log\frac43-\frac14\right)\approx0.1507.$$ This is not the trace value $3$. [F2, F3, step 1.1, algebra]

3.1 The calculations show two different finite-sample statistics and their distinct calibrations; the fact that one observed value is $0.1507$ makes no claim about the likelihood-ratio statistic's null distribution at $n=4$. The asymptotic qualification in [F2] remains necessary. [F2, step 2.1] ∎

