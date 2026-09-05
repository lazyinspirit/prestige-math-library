---
id: thm-modified-pcp-is-undecidable
kind: theorem
title: "The modified Post correspondence problem is undecidable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-computation-history-domino-encoding, def-computable-many-one-reduction, thm-machine-acceptance-is-undecidable, thm-many-one-reductions-transfer-decidability-and-recognizability]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare, Lecture 10: Computation History Method"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/resources/lecture-10-computation-history-method/"
    - title: "John Watrous, Introduction to the Theory of Computing"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.pdf"
---

## Statement

The modified Post correspondence problem is undecidable.

## Facts & Assumptions

**Given:** The language of modified-PCP instances with a match.

[L1] From every machine-input pair $(M,w)$ one can compute a modified-PCP instance $P_{M,w}$ such that $P_{M,w}$ has a match if and only if $M$ accepts $w$, by [[lem-computation-history-domino-encoding]].

[L2] The Turing-machine acceptance problem is undecidable, by [[thm-machine-acceptance-is-undecidable]].

[L3] If $A\le_m B$ and $B$ is decidable, then $A$ is decidable, by [[thm-many-one-reductions-transfer-decidability-and-recognizability]].

## Proof

**Proof technique:** direct.

1.1 Define a map $f$ on coded machine-input pairs by $$ f(\langle M,w\rangle):=P_{M,w}. $$ By [L1], this map is total and computable and satisfies $$ \langle M,w\rangle\in A_{TM}\iff f(\langle M,w\rangle)\in \operatorname{MPCP}. $$ Thus $A_{TM}\le_m\operatorname{MPCP}$. [L1, given, construct]

2.1 If modified PCP were decidable, then [L3] and step 1.1 would imply that $A_{TM}$ is decidable. This contradicts [L2]. [L2, L3, step 1.1, contradiction]

3.1 Therefore modified PCP is undecidable. [step 2.1, discharge-contradiction: a decider for modified PCP would decide $A_{TM}$] ∎
