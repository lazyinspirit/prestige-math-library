---
id: ex-unbounded-covariate-shift-weights
kind: example
title: "Covariate-shift weights can be unbounded and integrable"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - def-source-target-distributions-and-shift
  - thm-covariate-shift-importance-weighting
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Masashi Sugiyama, Learning under Non-stationarity: Covariate Shift Adaptation by Importance Weighting, Handbook of Computational Statistics, 2nd ed., Chapter 31 (2012), §§2–3.1"
      url: "https://www.ms.k.u-tokyo.ac.jp/sugi/2012/CSAreview.pdf"
---

## Example

Let $\mathsf X=\mathbb N_{\ge1}$ with the discrete sigma-algebra and $\mathsf Y=\{0,1\}$. Let the source input law have masses $\mu_S(\{n\})=2^{-n}$ and the target input law have masses $\mu_T(\{n\})=n2^{-(n+1)}$ for $n\ge1$. In both domains the label is $0$ with probability one. Use the zero-one loss $\ell(a,y)=\mathbf1_{\{a\ne y\}}$ and the constant classifier $h(n)=1$. The covariate-shift weight is $w(n)=n/2$: it is unbounded, but the weighted loss is integrable and the target risk equals the importance-weighted source risk, both equal to $1$. Thus the exact risk identity holds while the bounded-weight hypothesis in any finite-sample concentration result that requires it fails.

## Example references

[[def-source-target-distributions-and-shift]]: defines source and target joint laws, marginal laws, risks, and covariate shift.

[[thm-covariate-shift-importance-weighting]]: establishes the risk identity when the weighted loss is integrable.

[Sugiyama, §3.1, book pp. 930–931](https://www.ms.k.u-tokyo.ac.jp/sugi/2012/CSAreview.pdf): importance-weighted risk under covariate shift and the distinction between the exact identity and estimation methods.

## Facts & Assumptions

**Given:** The discrete source and target masses, their common deterministic label kernel, the constant classifier $h=1$, and zero-one loss.

[F1] [[def-source-target-distributions-and-shift]]: input marginals are probability measures, and under covariate shift their conditional label kernels agree and $\mu_T\ll\mu_S$.

[F2] [[thm-covariate-shift-importance-weighting]]: for an integrable weighted loss, target risk is its target-input-density-weighted source risk.


## Verification

1.1 For $N\ge1$, $\sum_{n=1}^N2^{-n}=1-2^{-N}$, so the source masses sum to $1$. Also $\sum_{n=1}^N n2^{-n}=2-(N+2)2^{-N}$: this holds at $N=1$, and adding $(N+1)2^{-(N+1)}$ proves the formula at $N+1$. Since $N2^{-N}\to0$, the target masses sum to $\frac12\sum_{n\ge1}n2^{-n}=1$. [given, construct, algebra]

2.1 Every source atom has positive mass, so the only $\mu_S$-null set is empty and $\mu_T\ll\mu_S$. The atomwise ratios satisfy $\mu_T(\{n\})/\mu_S(\{n\})=n/2$, hence $w(n)=n/2$ is a density and $\sup_n w(n)=+\infty$. The two conditional label kernels are identical. [F1, given, step 1.1, algebra]

3.1 The loss of $h(n)=1$ against label $0$ is $1$, hence $R_T(h)=1$. Its weighted source risk is $\sum_{n\ge1}2^{-n}(n/2)=1$ by step 1.1; thus it is finite and equals the target risk. [F2, given, step 1.1, step 2.1] ∎
