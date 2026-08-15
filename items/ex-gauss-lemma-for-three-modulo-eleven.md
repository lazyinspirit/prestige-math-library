---
id: ex-gauss-lemma-for-three-modulo-eleven
kind: example
title: "The signed half-system for $3$ modulo $11$ gives $(3/11)=1$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-gauss-half-system-permutation, thm-gauss-quadratic-residue-lemma]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "H. Hackman, Elementary Number Theory, Chapter D, Section D.IV"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Example

For $p=11$ and $a=3$, the signed half-system is

$$3,-5,-2,1,4.$$

There are two negative signs, so Gauss's lemma gives $(3/11)=1$.

## Facts & Assumptions

**Given:** The odd prime $11$, multiplier $3$, and the half-system $1,2,3,4,5$.

[L1] Multiplication by a unit modulo an odd prime reduces the half-system to unique signed representatives whose absolute values permute the half-system ([[lem-gauss-half-system-permutation]]).

[L2] If $N(a,p)$ counts the least positive residues of $aj$ that exceed $p/2$ for $1\le j\le(p-1)/2$, then $(a/p)=(-1)^{N(a,p)}$ ([[thm-gauss-quadratic-residue-lemma]]).

## Verification

**Proof technique:** direct.

1.1 The products $3,6,9,12,15$ reduce modulo $11$ to the signed representatives $3,-5,-2,1,4$. [L1, given, algebra]

2.1 Their absolute values are $3,5,2,1,4$, a permutation of $1,2,3,4,5$ as [L1] requires, and exactly two signs are negative. [L1, step 1.1]

3.1 Fact [L2] gives $(3/11)=(-1)^2=1$. [L2, step 2.1] ∎
