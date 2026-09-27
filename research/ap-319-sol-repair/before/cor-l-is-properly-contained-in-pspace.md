---
id: cor-l-is-properly-contained-in-pspace
kind: corollary
title: "L is properly contained in PSPACE"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-read-only-workspace-space-hierarchy, lem-read-only-workspace-simulates-in-all-tapes-space, def-pspace-and-npspace]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, Definition 4.5"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

With $L:=\mathrm{DWORKSPACE}(\lceil\log_2(n+2)\rceil)$,
$$ L\subsetneq PSPACE. $$

## Facts & Assumptions

**Given:** $f(n)=\lceil\log_2(n+2)\rceil$ and $g(n)=n$.

## Proof

**Proof technique:** direct.

1.1 The local hierarchy applies to $f,g$, yielding a language in $\mathrm{DWORKSPACE}(n)\setminus L$. [given, construct]

2.1 The bridge puts that language in $\mathrm{DSPACE}(2n)$, hence in PSPACE. Since every $L$ computation is also polynomial all-tapes space, this proves the proper containment. [step 1.1] ∎
