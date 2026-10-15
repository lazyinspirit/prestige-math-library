---
id: def-exposure-mapping-under-interference
kind: definition
title: "Exposure mappings and exposure consistency"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-potential-outcomes-under-partial-interference
  - def-finite-randomized-treatment-assignment-model
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Peter M. Aronow and Cyrus Samii, Estimating Average Causal Effects Under General Interference, §§3–4"
      url: "https://arxiv.org/pdf/1305.6156v4"
    - title: "Graeme Blair, Alexander Coppock, and Macartan Humphreys, Research Design in the Social Sciences, §18.10"
      url: "https://book.declaredesign.org/library/experimental-causal.html"
---

## Definition

In the finite-population model of [[def-potential-outcomes-under-partial-interference]], an **exposure mapping** for unit $(i,j)$ is a function $f_{ij}:\mathcal Z_i\to\mathcal D_{ij}$, where $\mathcal Z_i$ is the finite set of allowed assignments to group $i$ and $\mathcal D_{ij}$ is a finite set of exposure labels. At assignment $\mathbf Z$, the unit's exposure is the random label $D_{ij}=f_{ij}(\mathbf Z_i)$. Its design probability is
$$\pi_{ij}(d)=\mathbb P\{f_{ij}(\mathbf Z_i)=d\}=\sum_{\mathbf z\in\mathcal Z:\,f_{ij}(\mathbf z_i)=d}p(\mathbf z),$$
where $p(\mathbf z)=\mathbb P(\mathbf Z=\mathbf z)$ is the declared assignment law.

The mapping is **sufficient for the potential outcome** of unit $(i,j)$ on a set of labels if, whenever $f_{ij}(\mathbf z_i)=f_{ij}(\mathbf z_i')=d$, the fixed outcomes satisfy $Y_{ij}(\mathbf z_i)=Y_{ij}(\mathbf z_i')$. For each label in the image of $f_{ij}$ this condition defines a unique value $Y_{ij}(d)$ equal to the common outcome over its preimage. The observed-outcome consistency identity is then $Y_{ij}^{\mathrm{obs}}=Y_{ij}(D_{ij})$. An exposure-specific finite-population target may include unit $(i,j)$ at label $d$ only when $\pi_{ij}(d)>0$; otherwise its inverse-probability estimator is undefined. Sufficiency is an assumption about the schedule and map, not a consequence of knowing the assignment probabilities.
