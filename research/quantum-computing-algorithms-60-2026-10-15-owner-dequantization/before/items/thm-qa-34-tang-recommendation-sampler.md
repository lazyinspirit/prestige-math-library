---
id: thm-qa-34-tang-recommendation-sampler
kind: theorem
title: Tang's conditional recommendation sampler
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 18
deps:
  - def-qa-34-l2-sample-query-access
  - def-qa-34-end-to-end-error-contract
  - thm-qa-34-adaptive-failure-union-bound
  - def-qa-34-output-and-cost-types
  - def-qa-34-threshold-band-svd-target
  - lem-qa-34-normalized-vector-distribution-tv-bound
  - prop-qa-34-sample-inner-product-estimator
  - alg-qa-34-rejection-sampler-linear-combination
  - thm-qa-34-linear-combination-sampler-correct-and-cost
  - alg-qa-34-modfkv-low-rank-description
  - thm-qa-34-modfkv-low-rank-approximation
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: Ewin Tang, A quantum-inspired classical algorithm for recommendation systems, version 3
      url: https://arxiv.org/pdf/1807.04271v3
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
---

## Statement

Let $A\in\mathbb R^{m\times n}$ have the row/column entry-query and ℓ2-sampling access of [[def-qa-34-l2-sample-query-access]], let $F=\|A\|_F>0$, and fix a row $i$ with $\|D_{i,*}\|_2>0$. Here $D$ is the ModFKV matrix description from [[alg-qa-34-modfkv-low-rank-description]] and its success event is specified by [[thm-qa-34-modfkv-low-rank-approximation]]. Assume
$$0<\sigma\le F,\qquad 0<\epsilon\le\tfrac14\sqrt{\sigma/F},\qquad \epsilon^2\le\eta\le1,\qquad 0<\delta<1.$$
The Tang recommendation procedure outputs a classical sample whose law is within total variation $\epsilon$ (where $d_{\rm TV}(p,q)=\tfrac12\sum_a|p(a)-q(a)|$ as in [[def-qa-34-end-to-end-error-contract]]) of the normalized squared-entry distribution of $D_{i,*}$, with probability at least $1-\delta$. At constant precision its query and arithmetic-time bounds are respectively
$$\widetilde O\!\left(\frac{F^{18}}{\sigma^{18}\epsilon^8\eta^4}\right),\qquad
\widetilde O\!\left(\frac{F^{24}}{\sigma^{24}\epsilon^{12}\eta^6}\right).$$
For the final $\epsilon$ total-variation guarantee, the source's refinement of the row estimate adds a runtime factor $\widetilde O(\|A_{i,*}\|_2^2/\|D_{i,*}\|_2^2)$. Hidden logarithms, access-structure preprocessing, arithmetic precision, and the cost of writing the returned sample remain charged. The result is conditional on this exact input model and does not output $D$ as a full matrix or a full classical amplitude list.

## Proof gap

No complete proof is supplied at this handoff. The vector-distance, inner-product-estimation, and rejection-sampling lemmas have local arguments, but the proof still needs the complete ModFKV low-rank supplier [[thm-qa-34-modfkv-low-rank-approximation]]. It must also make Tang's final geometrically refined row-estimation schedule finite with a stopping rule that justifies the stated $\|A_{i,*}\|_2^2/\|D_{i,*}\|_2^2$ cost, and combine its conditional sampling errors with the ModFKV failure event. The local ModFKV statement is retained with its exact unresolved FKV concentration and threshold-band obligations; neither its statement nor the Tang citation is treated as a completed proof. This theorem is escalated with those claims preserved for owner reconciliation.
