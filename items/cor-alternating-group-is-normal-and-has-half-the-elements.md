---
id: cor-alternating-group-is-normal-and-has-half-the-elements
kind: corollary
title: '$A_n$ is normal in $S_n$; for $n\ge2$, $2\,|A_n|=n!$, while $A_n=S_n$ for $n=0,1$'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-alternating-group, thm-sign-is-a-homomorphism,
       thm-image-subgroup-and-kernel-normal, thm-number-of-bijections-of-a-finite-set,
       def-factorial-and-falling-factorial, thm-sum-rule, def-finite-cardinality]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'T. W. Judson, Abstract Algebra: Theory and Applications, §5.1, Theorem 5.7 and Proposition 5.8'
      url: 'https://judsonbooks.org/aata-files/aata-20140815.pdf'
pipeline_run: null
---

## Statement

For every natural $n$, $A_n$ is a normal subgroup of $S_n$. If $n\ge2$, then
$2|A_n|=n!$. If $n=0$ or $n=1$, then $A_n=S_n$.

## Facts & Assumptions

**Given:** A natural $n$, the sign homomorphism on $S_n$, and the alternating group $A_n$.

[L1] $A_n$ is the kernel of sign ([[def-alternating-group]]).

[L2] The kernel of every group homomorphism is a normal subgroup ([[thm-image-subgroup-and-kernel-normal]]).

[L3] The symmetric group of an $n$-element set has $n!$ elements ([[thm-number-of-bijections-of-a-finite-set]]).

[L4] Sign is a homomorphism whose image is $\{+1,-1\}$ exactly when $n\ge2$, and is $\{1\}$ for $n=0,1$ ([[thm-sign-is-a-homomorphism]]).

[L5] The cardinality of a disjoint union of two finite sets is the sum of their cardinalities ([[thm-sum-rule]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], $A_n$ is a normal subgroup of $S_n$. [given, L1, L2]

2.1 Suppose $n\ge2$. By [L4], choose $\tau\in S_n$ with $\operatorname{sgn}(\tau)=-1$. Left multiplication $\sigma\mapsto\tau\sigma$ is a bijection from the even fibre of sign to the odd fibre, with inverse left multiplication by $\tau^{-1}$, because [L4] gives $\operatorname{sgn}(\tau\sigma)=-\operatorname{sgn}(\sigma)$. [step 1.1, L1, L4]

3.1 The even and odd fibres are disjoint and have union $S_n$, and step 2.1 gives them equal finite cardinality. Thus [L5] and [L3] give $n!=|S_n|=|A_n|+|A_n|=2|A_n|$. [step 2.1, L1, L3, L5]

4.1 If $n=0$ or $n=1$, [L4] says that sign has image $\{1\}$, so its kernel is all of $S_n$ and $A_n=S_n$. [step 3.1, L1, L4] ∎
