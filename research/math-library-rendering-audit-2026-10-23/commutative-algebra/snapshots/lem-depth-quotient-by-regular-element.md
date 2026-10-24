---
id: lem-depth-quotient-by-regular-element
title: Depth drops by one after quotienting by a regular element
kind: lemma
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-regular-sequence-on-a-module, cor-depth-as-first-nonzero-ext, thm-long-exact-ext-sequence-in-the-second-variable]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-02-maintenance-receipts.jsonl (lem-depth-quotient-by-regular-element). No independent judge or whole-closure certification.
    delegated_by: owner
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $R$ be Noetherian, let $M$ be finite, let $I$ lie in the Jacobson radical,
and let $x\in I$ be $M$-regular. Then
$$\operatorname{depth}_I(M/xM)=\operatorname{depth}_I(M)-1,$$
with $\infty-1=\infty$.

## Facts & Assumptions

**Given:** The Axiom of Choice and the data and regular element in the statement.

## Proof

**Proof technique:** direct.

1.1 Regularity includes $M/xM\ne0$. Since $x\in I$ acts injectively on $M$, no nonzero element of $M$ is annihilated by $I$. Thus $\operatorname{Ext}^0_R(R/I,M)=0$. [given, algebra]

2.1 Apply $\operatorname{Ext}_R(R/I,-)$ to $0\to M\xrightarrow{x}M\to M/xM\to0$. Multiplication by $x$ on each Ext group is zero because $x$ annihilates $R/I$, so the long exact sequence yields $0\to E^i(M)\to E^i(M/xM)\to E^{i+1}(M)\to0$, where $E^i(T)=\operatorname{Ext}^i_R(R/I,T)$. By step 1.1, the first nonzero Ext degree for $M$ is either a positive integer $d$ or $\infty$. The sequence makes the first degree for $M/xM$ equal $d-1$ when $d$ is finite and $\infty$ when all groups vanish. The Ext characterization gives the displayed depth formula with its stated convention. [step 1.1, algebra] ∎
