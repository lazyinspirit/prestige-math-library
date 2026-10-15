---
id: def-potential-outcomes-under-partial-interference
kind: definition
title: "Finite-population potential outcomes under partial interference"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-finite-randomized-treatment-assignment-model
  - def-finite-probability-space-and-event
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Michael G. Hudgens and M. Elizabeth Halloran, Toward Causal Inference With Interference, §2.1"
      url: "https://www.treatment-effects.com/Hudgens-Halloran-2008.pdf"
    - title: "Graeme Blair, Alexander Coppock, and Macartan Humphreys, Research Design in the Social Sciences, §18.9"
      url: "https://book.declaredesign.org/library/experimental-causal.html"
---

## Definition

Let $\mathcal I$ be a finite set of treatment-assignment units partitioned into $N\ge1$ nonempty groups $\mathcal I_1,\ldots,\mathcal I_N$, with $n_i=|\mathcal I_i|$. Label the members of each group $\mathcal I_i$ by $j=1,\ldots,n_i$. Let $\mathcal Z\subseteq\{0,1\}^{\mathcal I}$ be the nonempty finite set of allowed global assignments in a finite randomized treatment-assignment model ([[def-finite-randomized-treatment-assignment-model]], [[def-finite-probability-space-and-event]]). Write $\mathbf z_i$ for the restriction of $\mathbf z\in\mathcal Z$ to group $i$, and $Z_{ij}$ for unit $j$'s coordinate in its group.

A **fixed finite-population potential-outcome schedule** is a family of real-valued functions $Y_{ij}:\mathcal Z\to\mathbb R$, one for every unit $(i,j)$. The observed outcome at assignment $\mathbf Z$ is $Y_{ij}^{\mathrm{obs}}=Y_{ij}(\mathbf Z)$. The schedule is fixed; only the declared assignment is random. This notation permits arbitrary dependence of $Y_{ij}(\mathbf z)$ on every component of $\mathbf z$.

The schedule satisfies **partial interference** when, for every unit $(i,j)$ and all allowed $\mathbf z,\mathbf z'\in\mathcal Z$, equality of their within-group assignments $\mathbf z_i=\mathbf z'_i$ implies $Y_{ij}(\mathbf z)=Y_{ij}(\mathbf z')$. In that case the common value is well-defined as $Y_{ij}(\mathbf z_i)$: outcomes may depend arbitrarily on assignments within group $i$, but not on assignments outside that group. Partial interference is a substantive model/design restriction, not a consequence of randomization.
