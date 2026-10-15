---
id: def-inclusion-covariance-difference
kind: definition
title: Inclusion-covariance difference
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-finite-population-and-sampling-design
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Shalabh, Sampling Theory, Chapter 7: Varying Probability Sampling, PDF pp. 25–27"
      url: "https://home.iitk.ac.in/~shalab/sampling/chapter7-sampling-varying-probability-sampling.pdf"
    - title: "John J. Borkowski, Horvitz–Thompson Estimators, STAT 446 Lecture 6, §6.2, printed pp. 141–143"
      url: "https://math.montana.edu/jobo/st446/documents/ho6.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15

---

## Definition

Let $(U,y)$ be a finite population with a sampling design as in
[[def-finite-population-and-sampling-design]]. For each ordered pair
$(i,j)\in U\times U$, the **inclusion-covariance difference** is
$$\Delta_{ij}:=\pi_{ij}-\pi_i\pi_j,$$
where $\pi_i$ is the probability that unit $i$ is included and $\pi_{ij}$ is
the probability that both $i$ and $j$ are included. The supplier convention
$\pi_{ii}=\pi_i$ gives $\Delta_{ii}=\pi_i(1-\pi_i)$.
