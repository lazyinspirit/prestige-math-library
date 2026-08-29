---
id: ex-conjugacy-in-a-free-group-by-cyclic-reduction
kind: example
title: "Conjugacy in a free group by cyclic reduction"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-conjugacy-problem-for-a-finitely-generated-group, thm-conjugacy-of-cyclically-reduced-words]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Alexei Myasnikov and Vladimir Shpilrain, Combinatorics over Free Groups"
      url: "https://web.stevens.edu/algebraic/alexeim/Teaching/Group%20Theory%20627/Sections/book/ALLBOOK.pdf"
pipeline_run: null
---

## Example

In the free group on $a,b$, the cyclically reduced words $aba^{-1}b^{-1}$ and
$ba^{-1}b^{-1}a$ are conjugate.

## Facts & Assumptions

**Given:** The conjugacy problem asks whether two words represent conjugate elements.

[L1] In a free group, two cyclically reduced words are conjugate if and only if one is a cyclic permutation of the other. ([[thm-conjugacy-of-cyclically-reduced-words]])

## Verification

**Proof technique:** direct.

1.1 The word $ba^{-1}b^{-1}a$ is obtained from $aba^{-1}b^{-1}$ by moving the initial letter $a$ to the end. So it is a cyclic permutation of the first word. [given]

2.1 Both words are cyclically reduced, and [L1] therefore makes them conjugate in the free group. [L1, step 1.1] ∎
