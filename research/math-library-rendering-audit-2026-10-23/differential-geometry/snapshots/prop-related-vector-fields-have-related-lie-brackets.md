---
id: prop-related-vector-fields-have-related-lie-brackets
kind: proposition
title: "Related vector fields have related Lie brackets"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-f-relatedness-is-equivalent-to-the-derivation-intertwining-law, thm-vector-fields-form-a-lie-algebra]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-10-maintenance-receipts.jsonl (prop-related-vector-fields-have-related-lie-brackets). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

If smooth vector fields $X_1,X_2$ on $M$ are respectively $F$-related to smooth
vector fields $Y_1,Y_2$ on $N$, then $[X_1,X_2]$ is $F$-related to $[Y_1,Y_2]$.

## Facts & Assumptions

**Given:** A smooth map $F:M\to N$, vector fields $X_1,X_2$ on $M$, and vector fields $Y_1,Y_2$ on $N$ with each $X_i$ $F$-related to $Y_i$.

[L1] $F$-relatedness is equivalent to the intertwining identity on smooth functions ([[prop-f-relatedness-is-equivalent-to-the-derivation-intertwining-law]]).

[L2] The commutator of smooth vector fields is again a smooth vector field ([[thm-vector-fields-form-a-lie-algebra]]).


## Proof

**Proof technique:** direct.

1.1 For every $f\in C^\infty(N)$, [L1] gives $$ X_2(f\circ F)=(Y_2f)\circ F \quad\text{and}\quad X_1(f\circ F)=(Y_1f)\circ F. $$ [L1, given]

2.1 Apply $X_1$ to the first identity and $X_2$ to the second. Using [L1] again on the resulting target functions yields $$ X_1X_2(f\circ F)=(Y_1Y_2f)\circ F, \qquad X_2X_1(f\circ F)=(Y_2Y_1f)\circ F. $$ [L1, step 1.1]

3.1 Subtracting the identities in step 2.1 gives $$ [X_1,X_2](f\circ F)=([Y_1,Y_2]f)\circ F $$ for every smooth $f$ on $N$. By [L2] both brackets are smooth vector fields, and [L1] identifies this identity as their $F$-relatedness. [L1, L2, step 2.1]

4.1 Therefore related vector fields have related Lie brackets. [step 3.1] ∎
