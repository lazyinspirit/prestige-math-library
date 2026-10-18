---
id: def-mixed-characteristic-wave-curve
kind: definition
title: "Mixed local wave curve for a genuinely nonlinear or linearly degenerate family"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-local-rarefaction-curve
  - lem-local-characteristic-shock-curve
  - lem-linearly-degenerate-characteristic-contact
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Alberto Bressan, Hyperbolic Conservation Laws: An Illustrated Tutorial"
      url: "https://yulia-petrova.github.io/teaching/shocks/Bressan-tutorial.pdf"
      locator: "§§3.3–3.4, printed pp. 24–28: shock, rarefaction, contact, and mixed wave curves"
---

## Definition

Fix a local characteristic family on a neighborhood where it is either
genuinely nonlinear with constant sign $d_i=D\lambda_i\,r_i\ne0$, or linearly
degenerate. For a genuinely nonlinear family define
$$\Psi_i(\sigma;u)=\begin{cases}R_i(\sigma;u),&\sigma d_i>0,\\S_i(\sigma;u),&\sigma d_i<0,\\u,&\sigma=0.\end{cases}$$
where $R_i$ is the local rarefaction curve and $S_i$ the local shock curve of
[[lem-local-characteristic-shock-curve]]. For a linearly degenerate family set
$\Psi_i(\sigma;u)=R_i(\sigma;u)$ for either sign; its nonzero-strength wave is
the contact of [[lem-linearly-degenerate-characteristic-contact]]. The
parameter $\sigma$ is local and is restricted so the entire curve stays in the
chosen neighborhood.
