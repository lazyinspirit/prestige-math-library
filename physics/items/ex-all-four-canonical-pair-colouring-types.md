---
id: ex-all-four-canonical-pair-colouring-types
kind: example
title: "Constant, injective, left-dependent, and right-dependent pair colourings all occur on $\\mathbb N$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-canonical-ramsey-theorem-for-pairs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "I. B. Leader, Ramsey Theory, Theorem 4 and following remark"
      url: "https://www.dpmms.cam.ac.uk/~par31/notes/ramsey.pdf"
pipeline_run: null
---

## Example

Every alternative in [[thm-canonical-ramsey-theorem-for-pairs]] is realised on the whole of $\mathbb N$.

## Facts & Assumptions

**Given:** Every unordered pair is written uniquely as $\{i,j\}$ with $i<j$.

[L1] On an infinite subset a pair-colouring is constant, injective, left-dependent, or right-dependent ([[thm-canonical-ramsey-theorem-for-pairs]]).

## Verification

**Proof technique:** direct.

1.1 The formula $c_0(\{i,j\})=0$ is constant. The formula $c_I(\{i,j\})=\{i,j\}$ is injective because equal two-element subsets are the same unordered pair. [L1, construct]

2.1 For $i<j$, set $c_L(\{i,j\})=i$ and $c_R(\{i,j\})=j$. Then $c_L(\{i,j\})=c_L(\{k,l\})$ if and only if $i=k$, and $c_R(\{i,j\})=c_R(\{k,l\})$ if and only if $j=l$. Thus all four mutually distinct equality patterns listed in [L1] occur. [step 1.1, L1] ∎
