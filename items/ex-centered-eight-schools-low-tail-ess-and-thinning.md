---
id: ex-centered-eight-schools-low-tail-ess-and-thinning
kind: example
title: Centered eight-schools runs show small R-hat with low tail ESS
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-axiom-of-choice
  - alg-rank-normalized-folded-split-rhat
  - alg-bulk-effective-sample-size
  - alg-tail-effective-sample-size
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Aki Vehtari et al., Rank-normalization, folding, and localization, §5.2"
      url: https://arxiv.org/pdf/1903.08008v5
    - title: "Vehtari et al., author-maintained online appendix, Appendix D"
      url: https://avehtari.github.io/rhat_ess/rhat_ess.html
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
axiom_use: "The reported rank-normalized R-hat and ESS outputs inherit the full Axiom of Choice through their standard-normal score interface; the simulation observations themselves are recorded as source evidence."
---

## Example

The following are empirical simulation results reported by Vehtari et al. for
the centered eight-schools funnel model; they are not theorem guarantees. In a
100-times-longer centered run, the reported $\widehat R$ for the hierarchical
scale $\tau$ was $1.00$, with bulk ESS $1880$ and tail ESS $426$, while the
sampler reported $9955$ divergent transitions. The source reports that the
chains still had trouble exploring small $\tau$ values and that the estimates
could not be trusted. In a separate centered run thinned by $200$, the reported
$\widehat R$ was again $1.00$ and tail ESS was $1718$, but the posterior mean
was more than three reported Monte Carlo standard errors from the non-centered
reference. The source classifies the thinning result as an empirical failure of
these finite diagnostics to reveal the sampling problem, not as a universal
statement about thinning.

## Empirical evidence

The first set of values is from the author-maintained online appendix,
Appendix D, “Centered parameterization with very long chains.” The second is
from “Centered parameterization with very long chains and thinning,” also in
Appendix D. The main paper's §5.2 reports the related centered eight-schools
simulation and its difficulties exploring small $\tau$. These observations
illustrate why the reported $1.01$ and $400$ recommendations are not universal
cutoffs and why source simulations must remain empirical evidence.
