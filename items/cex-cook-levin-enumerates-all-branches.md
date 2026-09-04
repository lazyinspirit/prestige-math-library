---
id: cex-cook-levin-enumerates-all-branches
kind: counterexample
title: "A machine with two branches shows that one satisfying tableau need not encode every branch"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [fs-cook-levin-enumerates-all-branches, def-bounded-computation-tableau, lem-exactly-one-symbol-constraints-have-polynomial-size, lem-start-accept-and-transition-constraints-have-polynomial-size]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT 18.404J / 6.840J, Lecture 16: Cook-Levin Theorem"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/8212b19fc5a34f500ca6acf03a3a7d74_MIT18_404f20_lec16.pdf"
---

## Statement refuted

The Cook-Levin reduction works by explicitly enumerating every nondeterministic
branch of the machine.

## Facts & Assumptions

**Given:** A nondeterministic machine $N$ that, on the empty input, branches immediately into a left branch that accepts in one step and a right branch that rejects in one step.

[L1] A bounded computation tableau records one branch rather than the whole nondeterministic tree, by [[def-bounded-computation-tableau]].

[L2] The false slogan being refuted is the one recorded in [[fs-cook-levin-enumerates-all-branches]].

[L3] The Cook-Levin formula is assembled from one fixed family of cell constraints and from start, accept, and local-window constraints, by [[lem-exactly-one-symbol-constraints-have-polynomial-size]] and [[lem-start-accept-and-transition-constraints-have-polynomial-size]].

## Counterexample

**Proof technique:** direct.

1.1 The formula for $N$ is produced from the fixed constraint families in [L3] by iterating over tableau cells and local windows. This construction never generates either computation branch. [L3, given, construct]

2.1 The left branch has an accepting tableau of constant size, so assigning the tableau variables according to that branch satisfies the formula. By [L1], this assignment encodes only the accepting branch; the rejecting branch is not encoded by it. Together with the branch-free construction in step 1.1, this refutes the enumeration slogan [L2]. [L1, L2, step 1.1, construct] ∎
