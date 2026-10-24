---
id: def-loggamma-right-halfplane-branch
kind: definition
title: Log-Gamma branch on the right half-plane
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-euler-gamma-function, def-euler-mascheroni-constant, def-complex-logarithms-principal-logarithm-and-complex-powers]
justified_by: [lem-loggamma-series-convergence-and-gamma-identity]
forward_refs: []
aliases: []
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: DLMF, §5.8(ii), Weierstrass product
      url: https://dlmf.nist.gov/5.8
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §§2 and 3
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
dependency_level: 0
---

## Definition

On $\operatorname{Re}z>0$, define

$$\ell_+(z)=-\operatorname{Log}z-\gamma_Ez+ \sum_{n=1}^{\infty}\left(\frac zn-\operatorname{Log}\left(1+\frac zn\right)\right).$$

Here $\operatorname{Log}$ is the principal logarithm from
[[def-complex-logarithms-principal-logarithm-and-complex-powers]], and
$\gamma_E$ denotes Euler's constant $\gamma$ from
[[def-euler-mascheroni-constant]]. Both $z$ and $1+z/n$ lie in the
principal-logarithm domain. The local uniform convergence of this series
and the identity $e^{\ell_+(z)}=\Gamma(z)$ are established by
[[lem-loggamma-series-convergence-and-gamma-identity]].
