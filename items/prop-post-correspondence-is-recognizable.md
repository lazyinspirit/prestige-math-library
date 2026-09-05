---
id: prop-post-correspondence-is-recognizable
kind: proposition
title: "The Post correspondence problem is recognizable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-post-correspondence-problem]
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
    - title: "John Watrous, Introduction to the Theory of Computing"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.pdf"
---

## Statement

The language of PCP instances that have a match is recognizable.

## Facts & Assumptions

**Given:** A PCP instance $$ (u_1,v_1),\dots,(u_n,v_n). $$

[L1] A yes-instance of PCP is exactly a nonempty finite index sequence $i_1,\dots,i_k$ with $$ u_{i_1}\cdots u_{i_k}=v_{i_1}\cdots v_{i_k}, $$ by [[def-post-correspondence-problem]].

## Proof

**Proof technique:** direct.

1.1 Enumerate all nonempty finite sequences over $\{1,\dots,n\}$ in length-lexicographic order: $$ (1),(2),\dots,(n),(1,1),(1,2),\dots. $$ For each sequence $\sigma=(i_1,\dots,i_k)$, compute the two concatenations $u_{i_1}\cdots u_{i_k}$ and $v_{i_1}\cdots v_{i_k}$ and compare them. [L1, given, construct]

2.1 If the instance has a match, [L1] supplies some witnessing sequence $\sigma$, and the enumeration from step 1.1 eventually reaches it and accepts. If the instance has no match, every tested sequence fails and the search runs forever. [L1, step 1.1]

3.1 Therefore there is a Turing machine that accepts exactly the PCP yes-instances, so PCP is recognizable. [step 2.1] ∎
