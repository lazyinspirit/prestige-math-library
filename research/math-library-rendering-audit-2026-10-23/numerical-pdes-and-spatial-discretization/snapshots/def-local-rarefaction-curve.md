---
id: def-local-rarefaction-curve
kind: definition
title: "Local characteristic rarefaction curve"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-hyperbolic-system-and-characteristic-families
  - lem-smooth-simple-characteristic-eigenpairs
  - thm-c2-ode-flow-on-common-tube
  - cor-uniform-picard-lindelof-for-nearby-initial-values
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
      locator: "§3.3, printed pp. 24–26: integral curves of characteristic fields"
    - title: "Randall J. LeVeque, Numerical Methods for Conservation Laws"
      url: "https://tevza.org/home/course/modelling-II_2016/books/Leveque%20-%20Numerical%20Methods%20for%20Conservation%20Laws.pdf"
      locator: "Ch. 8 §8.1, printed pp. 81–82: integral curves"
---

## Definition

On a neighborhood where an eigenvector field $r_i$ is $C^2$, the local
$i$-rarefaction curve through $u_0$ is the unique local solution
$$\frac{dR_i}{d\sigma}(\sigma;u_0)=r_i(R_i(\sigma;u_0)),\qquad R_i(0;u_0)=u_0.$$
The parameter $\sigma$ is the signed integral-curve parameter for the chosen
normalization of $r_i$. Existence on a common small interval for nearby $u_0$
follows from [[cor-uniform-picard-lindelof-for-nearby-initial-values]]; the
$C^2$ flow on a compact local tube follows from
[[thm-c2-ode-flow-on-common-tube]]. No global integral curve is asserted.
