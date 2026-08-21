---
id: cex-generating-family-without-pi-system
kind: counterexample
title: "Two four-point probability measures agree on a generating family that is not a pi-system"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-measure-uniqueness-on-a-sigma-finite-pi-system, def-probability-measure, def-generated-sigma-algebra, def-pi-system]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "D. Pollard, A User's Guide to Measure Theoretic Probability, §10, Example 42"
      url: "https://web.archive.org/web/20210415110203if_/http://www.stat.yale.edu/~pollard/Courses/600.spring2011/Handouts/Extract-from-UGMTP.pdf"
pipeline_run: null
---

## Statement refuted

Agreement on a family that merely generates the sigma-algebra does not determine a measure. Intersection closure in the pi-system uniqueness theorem is essential.

## Facts & Assumptions

**Given:** The four-point set $X=\{NW,NE,SW,SE\}$ and the family $\mathcal G$ consisting of $X$, the north and south rows, and the west and east columns.

[L1] A probability measure is a measure with total mass $1$ ([[def-probability-measure]]).

[L2] The generated sigma-algebra is the smallest sigma-algebra containing the generating family ([[def-generated-sigma-algebra]]).

[L3] A pi-system is closed under intersections ([[def-pi-system]]), and the uniqueness theorem requires agreement on a generating pi-system with a finite-measure exhaustion ([[thm-measure-uniqueness-on-a-sigma-finite-pi-system]]).

## Counterexample

**Proof technique:** direct.

1.1 Give $\mu$ masses $(1/2,0,0,1/2)$ at $(NW,NE,SW,SE)$ and give $\nu$ masses $(0,1/2,1/2,0)$. Finite summation over subsets defines probability measures on $\mathcal P(X)$. [given, L1]

1.2 Intersecting rows with columns produces every singleton, so $\sigma_X(\mathcal G)=\mathcal P(X)$; a singleton intersection is absent from $\mathcal G$, so $\mathcal G$ is not a pi-system. The constant sequence $X,X,\ldots$ is an increasing finite-measure exhaustion lying in $\mathcal G$. [given, L1, L2, L3]

2.1 Every row and column contains exactly one $\mu$-atom and one $\nu$-atom of mass $1/2$, and both measures give $X$ mass $1$, so the measures agree on $\mathcal G$. [given, step 1.1, algebra]

3.1 The measures are unequal because $\mu(\{NW\})=1/2$ and $\nu(\{NW\})=0$, despite steps 2.1 and 1.2. The family satisfies the generating and finite-measure exhaustion hypotheses and violates the pi-system hypothesis of [L3]. [step 1.1, step 2.1, step 1.2, L3] ∎
