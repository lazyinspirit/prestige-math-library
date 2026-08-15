---
id: prop-semidirect-product-is-direct-iff-action-is-trivial
kind: proposition
title: "The canonical semidirect decomposition is an internal direct product if and only if the defining action is trivial"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-canonical-subgroups-of-an-external-semidirect-product, def-external-direct-product-of-groups, def-normal-subgroup]
justified_by: []
aliases: []
landmark: false
proof_strategy: iff
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Semidirect Products"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/semidirect-product.pdf"
pipeline_run: null
---

## Statement

The canonical factors of $N\rtimes_\alpha H$ form an internal direct product if and only if $\alpha_h=\operatorname{id}_N$ for every $h\in H$. In that case $N\rtimes_\alpha H$ is the external direct product $N\times H$.

## Facts & Assumptions

**Given:** An external semidirect product $N\rtimes_\alpha H$ with its canonical factors $\bar N$ and $\bar H$.

[L1] The canonical factors have trivial intersection, multiply to the whole group, and satisfy $(1,h)(n,1)(1,h)^{-1}=(\alpha_h(n),1)$ ([[prop-canonical-subgroups-of-an-external-semidirect-product]]).

[L2] The external direct product has coordinatewise multiplication ([[def-external-direct-product-of-groups]]).

[L3] A subgroup $M\le G$ is normal when $gMg^{-1}=M$ for every $g\in G$ ([[def-normal-subgroup]]).

## Proof

**Proof technique:** iff.

1.1 [reverse] Suppose the action is trivial. The semidirect law becomes $(n,h)(n',h')=(nn',hh')$, which is the direct-product law from [L2]. [L1, L2]

1.2 [forward] Suppose the canonical decomposition is an internal direct product, so $\bar H$ as well as $\bar N$ is normal. For $x\in\bar N$ and $y\in\bar H$, normality gives $xyx^{-1}y^{-1}\in\bar H$ and also $xyx^{-1}y^{-1}=x(yx^{-1}y^{-1})\in\bar N$. Thus this commutator lies in $\bar N\cap\bar H=\{1\}$ by [L1], so $x$ and $y$ commute. [L1, L3, algebra]

2.1 The conjugation formula in [L1] now gives $(\alpha_h(n),1)=(n,1)$ for every $n,h$. Hence every $\alpha_h$ is the identity. [step 1.2, L1] ∎
