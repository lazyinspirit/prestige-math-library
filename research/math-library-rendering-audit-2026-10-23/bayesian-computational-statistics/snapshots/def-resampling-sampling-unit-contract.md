---
id: def-resampling-sampling-unit-contract
kind: definition
title: "Sampling units and the resampling-unit contract"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps: [def-statistical-experiment]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Bradley Efron and Robert Tibshirani, The Bootstrap Method for Assessing Statistical Accuracy, Behaviormetrika 12 (1985), §3, pp. 7–12"
      url: "https://link.springer.com/content/pdf/10.2333/bhmk.12.17_1.pdf"
    - title: "B. Efron and R. Tibshirani, The Bootstrap Method for Assessing Statistical Accuracy, Stanford LCS Technical Report 19 / BIO 101 (October 1985; full-text report copy)"
      url: "https://stacks.stanford.edu/file/xv648rw7816/xv648rw7816_LCS-19.pdf"
    - title: "P.B. Stark, Statistics 240 Lecture Notes, Part 8: Resampling Methods, §1.2, PDF pp. 3–7"
      url: "https://www.stat.berkeley.edu/~stark/Teach/S240/Notes/ch8.pdf"
---

## Definition

Let $\mathsf E=((\mathcal X,\mathcal A),\Theta,(P_\theta)_{\theta\in\Theta})$ be a statistical experiment ([[def-statistical-experiment]]) with a declared sampling or assignment mechanism. A **sampling unit** is one indexed unit that the declared mechanism treats as an indivisible draw or assignment object. Its **unit record** contains the complete observed data attached to that unit, including repeated measurements or labels that the analysis keeps together. Examples of sampling units are individuals, matched pairs, clusters, time blocks, and treatment-assignment units.

The declared mechanism also specifies a measurable unit-record space $(\mathcal Z,\mathcal F)$ and represents each unit record as an element of $\mathcal Z$. The record space may be the whole data space or one record-valued component of it; the convention is part of the experiment's sampling or assignment contract.

A **resampling unit** is the complete unit record or predeclared group of records that one draw of a resampling procedure selects. A procedure is **unit-compatible for a stated target** when it declares which records are sampled together and does not split a bundle whose joint sampling or assignment dependence is part of that target's data-generating design. Unit compatibility describes the procedure's input and dependence contract; it does not itself establish exact or asymptotic validity. A validity claim requires a separate theorem with hypotheses matched to the sampling or assignment law, target, and resample-size regime.

The conditional bootstrap law of observed units is a law on resampled data records given the fixed observations. When defined, a Bayesian posterior is instead a conditional law on parameter values under a specified prior and joint parameter-data model. They have different state spaces and are not identified by this definition. In particular, neither law determines the other.
