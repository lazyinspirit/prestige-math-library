---
id: def-nested-model-deviance
kind: definition
title: Likelihood deviance for nested models on common support
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-generalized-linear-model
  - lem-glm-product-density
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "MIT 18.650 Statistics for Applications, Lecture 10: GLM likelihood background only; no deviance-diagnostic claim is taken from this source"
      url: "https://ocw.mit.edu/courses/18-650-statistics-for-applications-fall-2016/dff89368051a5feae72b39c6422d0752_MIT18_650F16_GLM.pdf"
    - title: "CMU Advanced Methods for Data Analysis, GLM likelihood background only; no deviance-diagnostic claim is taken from this source"
      url: "https://www.stat.cmu.edu/~ryantibs/advmethods/notes/glm.pdf"
---

## Definition

Fix an observed response vector $y$ for which the component densities are positive throughout both models' parameter sets, and two stated GLMs with the same response family, base support, and log-likelihood function $\ell(\beta;y)$. They are **nested** here only when a stated embedding identifies the fitted parameter set with a subset $\Theta_{\mathrm{fit}}\subseteq\Theta_{\mathrm{sat}}$ of the saturated reference parameter set. Require both sets to be nonempty and both suprema to be finite real numbers. The **likelihood deviance** is

$$D(y)=2\left\{\sup_{\beta\in\Theta_{\mathrm{sat}}}\ell(\beta;y)-\sup_{\beta\in\Theta_{\mathrm{fit}}}\ell(\beta;y)\right\}.$$

The definition makes no claim about deviance residuals, goodness-of-fit diagnostics, or a reference distribution. The two full-text GLM notes cited above support likelihood setup but do not supply a deviance-diagnostics treatment; the nonnegativity result below is proved only from the stated set inclusion.
