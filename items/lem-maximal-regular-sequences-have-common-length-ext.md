---
id: lem-maximal-regular-sequences-have-common-length-ext
title: Maximal regular sequences have a common Ext length
kind: lemma
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-regular-sequence-on-a-module, def-associated-prime-of-a-module, thm-nakayama-lemma, lem-maximal-regular-sequence-stops-at-associated-prime, lem-ext-depth-zero-identifies-annihilated-elements, thm-long-exact-ext-sequence-in-the-second-variable]
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
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-02-maintenance-receipts.jsonl (lem-maximal-regular-sequences-have-common-length-ext). No independent judge or whole-closure certification.
    delegated_by: owner
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $R$ be Noetherian, let $M\ne0$ be finite, and let $I$ lie in the Jacobson
radical with $IM\ne M$. Every maximal $M$-regular sequence in $I$ has length
$$\min\{i\ge0:\operatorname{Ext}^i_R(R/I,M)\ne0\},$$
so all such sequences have the same length.

## Facts & Assumptions

**Given:** The Axiom of Choice, the data in the statement, and a maximal $M$-regular sequence $\mathbf x=(x_1,\ldots,x_r)$ in $I$.

[F1] An $M$-regular sequence has each multiplication map injective and a nonzero terminal quotient ([[def-regular-sequence-on-a-module]]). Under AC, Nakayama makes $IQ\ne Q$ for a nonzero finite quotient $Q$ when $I$ is in the Jacobson radical ([[thm-nakayama-lemma]]).

[L1] Under AC, a maximal regular sequence with $IQ\ne Q$ stops at an associated prime containing $I$ ([[lem-maximal-regular-sequence-stops-at-associated-prime]]). An associated prime is the annihilator of a nonzero module element ([[def-associated-prime-of-a-module]]).

[L2] Degree-zero Ext is $\operatorname{Hom}_R(R/I,Q)\cong(0:_QI)$ ([[lem-ext-depth-zero-identifies-annihilated-elements]]). A short exact sequence of second-variable modules gives a long exact Ext sequence ([[thm-long-exact-ext-sequence-in-the-second-variable]]).

## Proof

**Proof technique:** direct.

1.1 Put $M_j=M/(x_1,\ldots,x_j)M$ for $0\le j\le r$, so $M_0=M$ and $Q=M_r$. By [F1], $Q$ is nonzero and finite, and $IQ\ne Q$. Maximality and [L1] give a prime $\mathfrak p\in\operatorname{Ass}_R(Q)$ containing $I$. By the definition in [L1], some nonzero $q\in Q$ has $\operatorname{Ann}_R(q)=\mathfrak p$, hence $Iq=0$. Therefore $E^0(Q):=\operatorname{Ext}^0_R(R/I,Q)\cong(0:_QI)$ is nonzero. [F1, L1, L2]

1.2 For $1\le j\le r$, regularity gives $0\to M_{j-1}\xrightarrow{x_j}M_{j-1}\to M_j\to0$. Write $E^i(T)=\operatorname{Ext}^i_R(R/I,T)$. Since $x_j\in I$ annihilates $R/I$, multiplication by $x_j$ on every $E^i(M_{j-1})$ is zero. The long exact sequence of [L2] therefore yields, for each $i\ge0$, a short exact sequence $0\to E^i(M_{j-1})\to E^i(M_j)\to E^{i+1}(M_{j-1})\to0$. Moreover $E^0(M_{j-1})=(0:_{M_{j-1}}I)=0$: an $I$-annihilated element is killed by the injective multiplication map $x_j$. [F1, L2]

2.1 Suppose the first nonzero $E^i(M_j)$ occurs in degree $d_j$. Starting with $E^0(M_{j-1})=0$, the sequences in step 1.2 show inductively that $E^i(M_{j-1})=0$ for $0\le i\le d_j$, and at $i=d_j$ give $E^{d_j+1}(M_{j-1})\cong E^{d_j}(M_j)\ne0$. Thus the first nonzero degree rises by one when moving backwards across $x_j$. Step 1.1 gives $d_r=0$; repeating this finite argument for $j=r,r-1,\ldots,1$ gives $d_0=r$. Hence the displayed Ext minimum equals the length of every maximal sequence, so all have the same length. [step 1.1, step 1.2] ∎
