---
id: ex-integers-modulo-n-as-a-z-module
kind: example
title: 'The residue classes $\mathbb Z/n$ as a $\mathbb Z$-module'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-left-and-right-modules, def-addition-and-multiplication-modulo-n, thm-int-comm-ring, thm-integers-modulo-n-basic-algebra]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "McGerty, Algebra II: Rings and Modules, Section 3"
      url: "https://people.maths.ox.ac.uk/mcgerty/Algebra%20II.pdf"
pipeline_run: null
---

## Example

For $n\ge1$, the additive group of residue classes $\mathbb Z/n$ is a left
$\mathbb Z$-module under

$$r\,[a]_n:=[ra]_n.$$

## Facts & Assumptions

**Given:** An integer $n\ge1$, a scalar $r\in\mathbb Z$, and residue classes
$[a]_n,[b]_n\in\mathbb Z/n$.

[L1] Addition and multiplication of residue classes are representative-independent
([[def-addition-and-multiplication-modulo-n]]).

[L2] The integers form a commutative ring ([[thm-int-comm-ring]]).

[L3] The additive residue classes form an abelian group
([[thm-integers-modulo-n-basic-algebra]]).

[L4] A left module is an abelian group with a unital distributive associative
scalar action ([[def-left-and-right-modules]]).

## Verification

**Proof technique:** direct.

1.1 The displayed action is representative-independent: replacing $a$ by a congruent integer leaves $ra$ congruent modulo $n$. [L1, L2, given]

2.1 Integer distributivity and associativity give $r([a]_n+[b]_n)=r[a+b]_n=[ra+rb]_n=r[a]_n+r[b]_n$, $(r+s)[a]_n=r[a]_n+s[a]_n$, and $(rs)[a]_n=r(s[a]_n)$. [step 1.1, L1, L2, given]

3.1 Finally $1[a]_n=[a]_n$, and [L3] supplies the abelian additive group; therefore the module axioms hold. [step 2.1, L1, L2, L3, L4] ∎
