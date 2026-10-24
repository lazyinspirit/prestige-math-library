---
id: lem-maximal-regular-sequence-stops-at-associated-prime
title: A maximal regular sequence stops at an associated prime
kind: lemma
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-regular-sequence-on-a-module, cor-depth-zero-iff-ideal-contained-in-an-associated-prime]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-01-receipts.jsonl (lem-maximal-regular-sequence-stops-at-associated-prime). No independent judge or whole-closure certification.
    delegated_by: owner
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

Let $R$ be Noetherian, let $M$ be finite, let $I$ be an ideal, and let
$\mathbf x=(x_1,\ldots,x_r)$ be an $M$-regular sequence in $I$. Put
$Q=M/(\mathbf x)M$ and assume $IQ\ne Q$. Then $\mathbf x$ is maximal among
regular sequences in $I$ if and only if $I\subseteq\mathfrak p$ for some
$\mathfrak p\in\operatorname{Ass}_R(Q)$.

## Facts & Assumptions

**Given:** the Axiom of Choice and the data and terminal quotient in the statement.

[L1] Under Choice, depth zero of a nonzero finite module with $IQ\ne Q$ is equivalent to $I$ lying in an associated prime ([[cor-depth-zero-iff-ideal-contained-in-an-associated-prime]]).

## Proof

**Proof technique:** direct.

1.1 The sequence can be extended in $I$ exactly when $I$ contains a nonzerodivisor on $Q$ whose quotient is nonzero. If such an element $y$ had $Q/yQ=0$, then $Q=yQ\subseteq IQ$, contrary to $IQ\ne Q$. [given, algebra]

2.1 Thus maximality is equivalent to $\operatorname{depth}_I(Q)=0$. By [L1], this is exactly the displayed containment. [L1, step 1.1] ∎
