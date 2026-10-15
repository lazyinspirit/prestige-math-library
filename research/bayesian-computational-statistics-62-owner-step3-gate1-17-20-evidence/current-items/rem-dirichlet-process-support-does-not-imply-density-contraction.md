---
id: rem-dirichlet-process-support-does-not-imply-density-contraction
kind: remark
title: "Finite-partition conjugacy gives no density-contraction theorem"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 7
deps:
  - def-dirichlet-process
  - thm-existence-of-dirichlet-process-by-normalized-gamma-poisson-random-measure
  - thm-dirichlet-process-posterior-update
  - def-axiom-of-choice
justified_by: []
axiom_use: "The referenced normalized-gamma existence and posterior results assume full AC."
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Subhashis Ghosal and Aad van der Vaart, Posterior convergence rates of Dirichlet mixtures at smooth densities, 2007, Section 7"
      url: "https://arxiv.org/pdf/0708.1885"
    - title: "Thomas S. Ferguson, A Bayesian Analysis of Some Nonparametric Problems, 1973, Section 3"
      url: "https://users.wpi.edu/~balnan/Ferguson1973.pdf"
---

## Remarks

The normalized-gamma construction and finite-partition posterior update
state no topology on $\mathcal P(\mathsf X)$ and specify no density model.
They therefore establish neither a weak-support theorem nor density-posterior
consistency or contraction. A weak-support claim requires a specified topology
and an argument that the prior assigns positive mass to each neighborhood in
question. A density-posterior consistency or contraction claim additionally
requires a specified sampling model and truth class, plus its own proof under
the relevant model-specific hypotheses. For example, the finite-dimensional
prior-mass bound in Ghosal--van der Vaart is one ingredient in a separate
mixture analysis, not a consequence of the conjugate update alone.
