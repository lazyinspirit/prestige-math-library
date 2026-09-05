---
id: thm-post-correspondence-is-undecidable
kind: theorem
title: "The Post correspondence problem is undecidable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-modified-pcp-reduces-to-pcp, thm-modified-pcp-is-undecidable, thm-many-one-reductions-transfer-decidability-and-recognizability]
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
    - title: "MIT OpenCourseWare, Lecture 10: Computation History Method"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/resources/lecture-10-computation-history-method/"
    - title: "John Watrous, Introduction to the Theory of Computing"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.pdf"
---

## Statement

The Post correspondence problem is undecidable.

## Facts & Assumptions

**Given:** The language of PCP instances with a match.

[L1] Modified PCP many-one reduces to PCP, by [[lem-modified-pcp-reduces-to-pcp]].

[L2] Modified PCP is undecidable, by [[thm-modified-pcp-is-undecidable]].

[L3] If $A\le_m B$ and $B$ is decidable, then $A$ is decidable, by [[thm-many-one-reductions-transfer-decidability-and-recognizability]].

## Proof

**Proof technique:** direct.

1.1 By [L1], there is a total computable map sending each modified-PCP instance to a PCP instance with the same yes-or-no answer. [L1, given]

2.1 If PCP were decidable, then [L3] and step 1.1 would imply that modified PCP is decidable. This contradicts [L2]. [L2, L3, step 1.1, contradiction]

3.1 Therefore PCP is undecidable. [step 2.1, discharge-contradiction: a decider for PCP would decide modified PCP] ∎
