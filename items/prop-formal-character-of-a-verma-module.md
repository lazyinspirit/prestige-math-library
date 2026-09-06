---
id: prop-formal-character-of-a-verma-module
kind: proposition
title: "The formal character of a Verma module"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-pbw-model-of-a-verma-module, prop-weights-of-a-verma-module-lie-below-lambda]
proof_strategy: direct
verification:
  audited: 2026-09-06
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, §15.1"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
---

## Statement

In the completion consisting of series supported in finite unions of downward
$Q^+$-cones,

$$\operatorname{ch}M(\lambda)=e^\lambda\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})^{-1}.$$

## Facts & Assumptions

**Given:** The PBW weight basis and finite-dimensional weight spaces from [[thm-pbw-model-of-a-verma-module]] and [[prop-weights-of-a-verma-module-lie-below-lambda]].

## Proof

**Proof technique:** direct.

1.1 For each positive root, its PBW exponent contributes the geometric series $1+e^{-\alpha}+e^{-2\alpha}+\cdots$. [given, algebra]

2.1 Multiplying the finitely many root series and then multiplying by $e^\lambda$ counts precisely the PBW monomials of each weight.  Each coefficient is finite by the fixed-$\beta$ finiteness in the given weight-space result, so the product belongs to the stated completion. [given, algebra] ∎
