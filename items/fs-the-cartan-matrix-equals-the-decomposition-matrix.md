---
id: fs-the-cartan-matrix-equals-the-decomposition-matrix
kind: false-statement
title: "FALSE: the Cartan matrix equals the decomposition matrix"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-cartan-matrix-is-d-transpose-d]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "J. Miquel Martinez, Modular Representation Theory of Finite Groups"
      url: "https://www.uv.es/jomimar8/pdfs/course%20notes.pdf"
    - title: "Tudor Ciurca, Representation Theory"
      url: "https://www.scribd.com/document/951548499/ModRep"
---

## Statement

For every finite group and prime, the Cartan matrix equals the decomposition
matrix.

## Facts & Assumptions

**Given:** The decomposition matrix $D$ and the Cartan matrix $C$.

[L1] The Cartan matrix satisfies $C=D^{\mathsf T}D$
([[thm-cartan-matrix-is-d-transpose-d]]).

## Refutation

**Proof technique:** direct.

1.1 The matrices $D$ and $C$ have different meanings and usually different shapes: rows of $D$ are indexed by ordinary irreducibles, while both rows and columns of $C$ are indexed by Brauer irreducibles. [given]

2.1 If they were always equal, then [L1] would force $D=D^{\mathsf T}D$ for every group. That is impossible in general for a non-square or non-idempotent decomposition matrix. [L1, step 1.1, algebra]

3.1 Hence the statement is false. [step 2.1] ∎
