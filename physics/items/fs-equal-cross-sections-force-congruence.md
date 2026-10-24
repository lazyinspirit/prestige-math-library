---
id: fs-equal-cross-sections-force-congruence
kind: false-statement
title: 'FALSE: solids with equal parallel cross-sectional areas are congruent'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-cavalieri-principle-for-jordan-content, def-isometry-and-metric-embedding, def-metric-bounded-diameter]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "Sigurd Angenent, Math 221 lecture notes, Chapter 8 §3.3"
      url: "https://people.math.wisc.edu/~angenent/Free-Lecture-Notes/free221.pdf"
pipeline_run: null
---

## Statement

**False claim:** if two bounded solids have equal areas in every pair of parallel horizontal sections, then the solids are congruent.

## Facts & Assumptions

**Given:** The boxes $E=[0,1]^3$ and $F=[0,2]\times[0,1/2]\times[0,1]$.

[F1] If two bounded Jordan sets have Jordan sections outside content-zero exceptional parameter sets and their ordinary sectional contents agree away from those sets, then the two sets have equal content ([[cor-cavalieri-principle-for-jordan-content]]).

[F2] An isometry is a bijection preserving every pairwise distance ([[def-isometry-and-metric-embedding]]).

## Refutation

**Proof technique:** direct.

1.1 At each height $z\in[0,1]$, both boxes have a rectangular section of area $1$; outside that range both sections are empty. Thus [F1] gives equal volume. [given, F1, algebra]

1.2 The diameters are $\sqrt3$ for $E$ and $\sqrt{2^2+(1/2)^2+1^2}=\sqrt{21}/2$ for $F$. Since these are unequal and [F2] makes every isometry preserve diameter, the boxes are not congruent. [F2, algebra]

2.1 Hence equal parallel cross-sectional areas determine equal volume here but do not force congruence. [step 1.1, step 1.2] ∎
