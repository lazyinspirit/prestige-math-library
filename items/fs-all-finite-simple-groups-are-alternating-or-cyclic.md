---
id: fs-all-finite-simple-groups-are-alternating-or-cyclic
kind: false-statement
title: "All finite simple groups are alternating or cyclic"
status: draft
origin: pipeline
deps: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Stephen D. Smith, CFSG—A User’s Manual"
      url: https://homepages.math.uic.edu/~smiths/talkv.pdf
proof_strategy: direct
verification:
  precheck: pass
---

## Statement

Every finite simple group is cyclic or alternating.

## Facts & Assumptions

**Given:** Use the simple Lie-type group $\operatorname{PSL}(2,7)$ from the cited CFSG family table.

[L1] Smith's CFSG family table records $\operatorname{PSL}(2,7)$ as a finite simple group of Lie type.

## Refutation

**Proof technique:** direct.

1.1 This group has order $168$.  It is nonabelian, so it is not cyclic.  It is not alternating: $|A_5|=60$, $|A_6|=360$, and $|A_n|\ge360$ for $n\ge6$. [L1, given, algebra]

2.1 Hence a finite simple group can be neither cyclic nor alternating. [step 1.1, contradiction] ∎
