---
id: fs-cook-levin-enumerates-all-branches
kind: false-statement
title: "FALSE: the Cook-Levin reduction enumerates all nondeterministic branches"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-bounded-computation-tableau, lem-cook-levin-formula-is-satisfiable-iff-acceptance-occurs]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT 18.404J / 6.840J, Lecture 16: Cook-Levin Theorem"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/8212b19fc5a34f500ca6acf03a3a7d74_MIT18_404f20_lec16.pdf"
---

## Statement

The Cook-Levin reduction works by explicitly enumerating every nondeterministic
branch of the machine.

## Facts & Assumptions

**Given:** The Cook-Levin tableau encoding.

[L1] A bounded computation tableau records one computation branch of the machine, not the whole branch tree, by [[def-bounded-computation-tableau]].

[L2] The Cook-Levin formula is satisfiable exactly when at least one accepting tableau exists, by [[lem-cook-levin-formula-is-satisfiable-iff-acceptance-occurs]].

## Refutation

**Proof technique:** direct.

1.1 By [L1], one satisfying assignment describes one tableau, hence one branch. There is no requirement that the encoding simultaneously list all other branches. [L1, given]

2.1 By [L2], the reduction asks only whether some accepting tableau exists. Existence of one accepting branch is enough, so explicit enumeration of every branch is unnecessary. Therefore the statement is false. [L2, step 1.1] ∎

