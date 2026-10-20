---
id: def-h-delta-h-divergence
kind: definition
title: "H-delta-H divergence"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-source-target-distributions-and-shift
  - def-measurable-function-between-measurable-spaces
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Shai Ben-David, John Blitzer, Koby Crammer, Alex Kulesza, Fernando Pereira, and Jennifer Wortman Vaughan, A Theory of Learning from Different Domains, Machine Learning 79 (2010), Definition 3 and Lemma 3"
      url: "https://link.springer.com/content/pdf/10.1007/s10994-009-5152-4.pdf"
    - title: "Yishay Mansour, Mehryar Mohri, and Afshin Rostamizadeh, Domain Adaptation: Learning Bounds and Algorithms, arXiv:0902.3430v3, §3"
      url: "https://arxiv.org/pdf/0902.3430v3"
---

## Definition

Let $(\mathsf X,\Sigma_X)$ be a measurable space, equip $\{0,1\}$ with its discrete sigma-algebra, let $\mu_S$ and $\mu_T$ be probability measures on $\mathsf X$, and let $\mathcal H$ be a nonempty class of measurable classifiers $h:\mathsf X\to\{0,1\}$. For $h,h'\in\mathcal H$, define their measurable disagreement set by
$$A_{h,h'}:=\bigl(h^{-1}(\{0\})\cap h'^{-1}(\{1\})\bigr)\cup\bigl(h^{-1}(\{1\})\cap h'^{-1}(\{0\})\bigr).$$
The **$\mathcal H\Delta\mathcal H$ divergence** of the two input laws is
$$d_{\mathcal H\Delta\mathcal H}(\mu_S,\mu_T):=2\sup_{h,h'\in\mathcal H}\left|\mu_S(A_{h,h'})-\mu_T(A_{h,h'})\right|\in[0,2].$$

## Definition references

[[def-source-target-distributions-and-shift]]: supplies the source and target input marginals $\mu_S$ and $\mu_T$.

[[def-measurable-function-between-measurable-spaces]]: measurability means measurable preimages, so the displayed finite union of intersections is measurable.

[Ben-David et al., Definition 3, Lemma 3, printed pp. 156–157](https://link.springer.com/content/pdf/10.1007/s10994-009-5152-4.pdf): the symmetric-difference hypothesis class and the disagreement-probability bound.

[Mansour, Mohri, and Rostamizadeh, Definition 3 and §3, arXiv version 3, pp. 3–4](https://arxiv.org/pdf/0902.3430v3): the $d_A$ distance with $A=\mathcal H\Delta\mathcal H$ for binary classification.
