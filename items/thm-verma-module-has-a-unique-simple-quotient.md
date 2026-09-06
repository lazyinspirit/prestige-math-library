---
id: thm-verma-module-has-a-unique-simple-quotient
kind: theorem
title: "A Verma module has a unique simple quotient"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-sum-of-all-proper-submodules-of-a-verma-module-is-proper]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Pavel Etingof, Lie Groups and Lie Algebras I & II, Proposition 25.12"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
---

## Statement

The proper submodule $J(\lambda)$ which is the sum of all proper submodules is
the unique maximal submodule of $M(\lambda)$.  The quotient
$L(\lambda):=M(\lambda)/J(\lambda)$ is simple and is its unique simple
quotient.

## Facts & Assumptions

**Given:** Properness of $J(\lambda)$ from [[lem-sum-of-all-proper-submodules-of-a-verma-module-is-proper]].

## Proof

**Proof technique:** direct.

1.1 Every proper submodule is contained in $J(\lambda)$ by its definition, so $J(\lambda)$ is maximal and unique among proper maximal submodules. [given, algebra]

2.1 A submodule of $M(\lambda)/J(\lambda)$ lifts to a submodule containing $J(\lambda)$; it is either $J(\lambda)$ or all of $M(\lambda)$.  Thus the quotient is simple, and the kernel of any simple quotient is a maximal submodule, necessarily $J(\lambda)$. [given, algebra] ∎
