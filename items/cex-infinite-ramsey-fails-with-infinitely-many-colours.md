---
id: cex-infinite-ramsey-fails-with-infinitely-many-colours
kind: counterexample
title: "Infinite Ramsey fails with infinitely many colours: colour $\\{i,j\\}$ by $\\min\\{i,j\\}$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-infinite-ramsey-on-the-naturals]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "I. B. Leader, Ramsey Theory, Theorem 4 and canonical left-dependent colouring"
      url: "https://www.dpmms.cam.ac.uk/~par31/notes/ramsey.pdf"
pipeline_run: null
---

## Statement refuted

The finite-colour hypothesis in [[thm-infinite-ramsey-on-the-naturals]] may be omitted for pair colourings.

## Facts & Assumptions

**Given:** The colouring $c:[\mathbb N]^2\to\mathbb N$ defined by $c(\{i,j\})=\min\{i,j\}$.

[L1] Every finite colouring of $[\mathbb N]^k$ has an infinite monochromatic set, in ZF ([[thm-infinite-ramsey-on-the-naturals]]).

## Counterexample

**Proof technique:** constructive.

1.1 Every natural $i$ occurs as $c(\{i,i+1\})=i$, so this colouring genuinely has infinitely many colours. [construct]

2.1 If $a<b<c$, then $c(\{a,b\})=a$ while $c(\{b,c\})=b$, and these colours differ. Hence no set of size at least three is monochromatic, in particular no infinite set is. This refutes the proposed extension and leaves [L1]'s finite-colour conclusion untouched. [step 1.1, L1, discharge-construct] ∎

