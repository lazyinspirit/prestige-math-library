---
id: thm-covariate-shift-importance-weighting
kind: theorem
title: "Importance weighting under covariate shift"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-likelihood-density
  - def-source-target-distributions-and-shift
  - lem-covariate-shift-joint-law-density
  - lem-population-and-empirical-risk-are-measurable
  - thm-likelihood-ratio-change-of-measure
justified_by: []
proof_strategy: direct
axiom_use: "AC is used to select the input-marginal Radon-Nikodym density through the likelihood-density definition and its Radon-Nikodym suppliers. The change-of-measure theorem is applied only under its stated AC and absolute-continuity hypotheses; no stronger choice principle is used."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Masashi Sugiyama, Learning under Non-stationarity: Covariate Shift Adaptation by Importance Weighting, Handbook of Computational Statistics, 2nd ed., Chapter 31 (2012), §3.1"
      url: "https://www.ms.k.u-tokyo.ac.jp/sugi/2012/CSAreview.pdf"
    - title: "Yishay Mansour, Mehryar Mohri, and Afshin Rostamizadeh, Domain Adaptation: Learning Bounds and Algorithms, arXiv:0902.3430v3, §§2–3"
      url: "https://arxiv.org/pdf/0902.3430v3"
---

## Statement

Assume AC. Let $P_S,P_T$ be source and target joint laws under covariate shift, with input marginals $\mu_S,\mu_T$ and common conditional label kernel $K$. Let $w$ be a nonnegative measurable representative of $d\mu_T/d\mu_S$. For any measurable predictor $h$ and nonnegative product-measurable loss $\ell$, if the weighted source loss is integrable, then
$$R_T(h)=\int_{\mathsf X\times\mathsf Y}\ell(h(x),y)\,P_T(d(x,y))=\int_{\mathsf X\times\mathsf Y}w(x)\ell(h(x),y)\,P_S(d(x,y))<+\infty.$$

## Statement references

[Sugiyama, §3.1, book pp. 930–931](https://www.ms.k.u-tokyo.ac.jp/sugi/2012/CSAreview.pdf): the importance-weighting identity for a shared conditional label law.

[Mansour, Mohri, and Rostamizadeh, §2, arXiv version 3, pp. 2–3](https://arxiv.org/pdf/0902.3430v3): domain risks and arbitrary measurable loss notation.

## Facts & Assumptions

**Given:** AC; source and target joint laws under covariate shift; a measurable predictor $h$; a nonnegative product-measurable loss $\ell$; and $\int w(x)\ell(h(x),y)\,P_S(d(x,y))<+\infty$.

[A1] [[def-axiom-of-choice]]: AC is assumed for the Radon-Nikodym representatives used by the likelihood-density and change-of-measure suppliers.

[F1] [[def-source-target-distributions-and-shift]]: under covariate shift, $\mu_T\ll\mu_S$ and the source and target conditional label kernels agree $\mu_T$-almost everywhere.

[F2] [[def-likelihood-density]]: in the two-law experiment dominated by $\mu_S$, AC supplies a nonnegative measurable representative $w$ of $d\mu_T/d\mu_S$.

[F3] [[lem-covariate-shift-joint-law-density]]: $P_T\ll P_S$, with nonnegative likelihood-ratio representative $r(x,y)=w(x)$ on the joint space.

[F4] [[lem-population-and-empirical-risk-are-measurable]]: in a supervised prediction problem, a measurable predictor in the predictor class induces a product-measurable loss function.

[F5] [[thm-likelihood-ratio-change-of-measure]]: under AC and absolute continuity, $\int g\,dP_T=\int gr\,dP_S$ for every nonnegative measurable $g$.


## Proof

1.1 Set $g_h(x,y):=\ell(h(x),y)$. For each $D\in\{S,T\}$, the given measurable spaces, joint law $P_D$, measurable predictor $h$, and product-measurable loss $\ell$ form a supervised prediction problem with predictor class $\{h\}$. Since $h\in\{h\}$, the hypotheses of [F4] hold and $g_h$ is product-measurable. It is nonnegative, so both integrals in the claim are defined as extended nonnegative integrals. [F4, given]

2.1 By [F1] and [F2], the covariate-shift hypotheses hold and $w$ is an available input-marginal density. The joint-law lemma [F3] identifies the joint density as $r(x,y)=w(x)$. Apply [F5] to $g_h$ to obtain $\int g_h\,dP_T=\int g_h r\,dP_S=\int w(x)\ell(h(x),y)\,dP_S$. The assumed integrability makes this common value finite, proving the stated identity. [A1, F1, F2, F3, F5, given, algebra] ∎
