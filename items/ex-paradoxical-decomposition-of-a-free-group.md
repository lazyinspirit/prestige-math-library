---
id: ex-paradoxical-decomposition-of-a-free-group
kind: example
title: "A paradoxical decomposition of a free group of rank two"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [def-paradoxical-decomposition-of-a-group, thm-free-group-of-rank-two-is-nonamenable]
justified_by: []
aliases: []
landmark: false
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references: []
---

## Example

The free group $F(a,b)$ admits a paradoxical decomposition.

## Facts & Assumptions

**Given:** The free group $F(a,b)$.

[L1] Paradoxical decompositions are the translated finite partitions from
[[def-paradoxical-decomposition-of-a-group]].

[L2] The rank-two free group is nonamenable
([[thm-free-group-of-rank-two-is-nonamenable]]).

## Verification

**Proof technique:** direct.

1.1 For $x\in\{a,a^{-1},b,b^{-1}\}$ let $W(x)$ be the set of nonempty reduced words beginning with $x$, and put $P=\{a^n:n\ge0\}$ and $P_+=\{a^n:n\ge1\}$. Define $A_1=W(a)\setminus P_+$, $A_2=W(a^{-1})\cup P$, $B_1=W(b)$, and $B_2=W(b^{-1})$. [L2, given, construct]

2.1 The four sets in step 1.1 are pairwise disjoint and partition $F(a,b)$: the nonidentity reduced words have one of the four possible first letters, and $P_+$ has been moved from $W(a)$ into the piece containing the identity. [step 1.1, algebra]

3.1 Reduction of the first letter gives $aW(a^{-1})=F(a,b)\setminus W(a)$ and $aP=P_+$, hence $F(a,b)=A_1\sqcup aA_2$. Similarly $bW(b^{-1})=F(a,b)\setminus W(b)$, hence $F(a,b)=B_1\sqcup bB_2$. Therefore the pieces in step 1.1 with translators $e,a,e,b$ satisfy [L1] and form a paradoxical decomposition. [L1, step 1.1, step 2.1, algebra] ∎
