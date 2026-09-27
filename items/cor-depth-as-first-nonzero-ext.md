---
id: cor-depth-as-first-nonzero-ext
title: Depth as the first nonzero Ext degree
kind: corollary
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-depth-with-respect-to-an-ideal, thm-nakayama-lemma, lem-ext-depth-zero-identifies-annihilated-elements, lem-regular-element-exists-by-prime-avoidance, thm-long-exact-ext-sequence-in-the-second-variable]
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
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-02-maintenance-receipts.jsonl (cor-depth-as-first-nonzero-ext). No independent judge or whole-closure certification.
    delegated_by: owner
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $R$ be Noetherian, let $M$ be finite, and let $I$ lie in the Jacobson
radical. Then
$$\operatorname{depth}_I(M)= \inf\{i\ge0:\operatorname{Ext}^i_R(R/I,M)\ne0\},$$
where the infimum of the empty set is $\infty$.

## Facts & Assumptions

**Given:** The Axiom of Choice and the ring, module, and ideal in the statement.

[F1] Nakayama's lemma gives $IM=M\Rightarrow M=0$ for finite $M$ and $I\subseteq J(R)$ ([[thm-nakayama-lemma]]). Degree-zero Ext is $(0:_M I)$ ([[lem-ext-depth-zero-identifies-annihilated-elements]]).

[L1] When $M\ne0$ and $IM\ne M$, the regular-element criterion and finite prime avoidance give an $M$-regular $x\in I$ if no associated prime of $M$ contains $I$ ([[lem-regular-element-exists-by-prime-avoidance]]). Short exact sequences give the long exact Ext sequence ([[thm-long-exact-ext-sequence-in-the-second-variable]]).

## Proof

**Proof technique:** direct.

1.1 If $IM=M$, [F1] makes $M=0$. Its depth is infinite by definition and every displayed Ext group vanishes. Hence assume $M\ne0$ and $IM\ne M$. Write $E^i(T)=\operatorname{Ext}^i_R(R/I,T)$ and $d=\inf\{i:E^i(M)\ne0\}$. If $d=0$, a nonzero element of $E^0(M)=(0:_M I)$ is killed by every $x\in I$, so no $M$-regular element exists in $I$ and depth is zero. [F1, given]

1.2 Suppose $d>0$, allowing $d=\infty$. Then $E^0(M)=0$. If an associated prime $\mathfrak p=\operatorname{Ann}_R(m)$ contained $I$, its nonzero associated element $m$ would belong to $(0:_M I)$, a contradiction. By [L1], choose an $M$-regular $x\in I$ and put $Q=M/xM\ne0$. Applying $E^*(-)$ to $0\to M\xrightarrow{x}M\to Q\to0$, multiplication by $x$ on each $E^i(M)$ is zero because $x$ annihilates $R/I$. Thus $0\to E^i(M)\to E^i(Q)\to E^{i+1}(M)\to0$ is exact for every $i\ge0$. If $d<\infty$, the first nonzero degree for $Q$ is $d-1$; if $d=\infty$, every $E^i(Q)$ vanishes. [F1, L1]

2.1 Induct on finite $d$. The case $d=0$ is step 1.1. For $d>0$, step 1.2 and induction give an $M/xM$-regular sequence of length $d-1$, so prepending $x$ gives an $M$-regular sequence of length $d$. Conversely, for any $M$-regular first element $y\in I$, the same argument gives first nonzero Ext degree $d-1$ on $M/yM$; induction bounds every sequence beginning with $y$ by $d$. Therefore $\operatorname{depth}_I(M)=d$. If $d=\infty$, step 1.2 applies successively to every nonzero quotient and keeps all its Ext groups zero; finite induction constructs regular sequences of every length. Their supremum, hence depth, is $\infty$. [step 1.1, step 1.2] ∎
