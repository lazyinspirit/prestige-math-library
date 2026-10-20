---
id: thm-independent-generation-success-and-verifier-error
kind: theorem
title: "Independent generation success and verifier false-acceptance bounds"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - def-verifier-and-generation-protocol
  - alg-budgeted-verifier-guided-generation
  - lem-budgeted-verifier-generation-termination-and-calls
  - def-probability-measure
  - def-finite-sum
  - def-independent-random-elements
  - def-independent-sigma-algebras-and-events
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "DeepSeek-AI, DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning, original arXiv v1"
      url: "https://arxiv.org/pdf/2501.12948v1"
      locator: "§2.3.3, rejection sampling and retaining verifier-correct responses; the finite probability bounds are proved locally."

---

## Statement

Fix a prompt $q$, a budget $N\ge1$, and the finite response law, correctness predicate, and verifier from the generation protocol. In part 1, $Y_1,\ldots,Y_N$ are independent draws from that law and $p:=\Pr(C_q(Y_1)=1)$ is their common one-draw correctness probability. Parts 2 and 3 state their own sampling hypotheses.

1. If $A_q=C_q$, rejection search returns an accepted response with probability $1-(1-p)^N$.

2. For any rule that selects one of these $N$ candidates and reports it as accepted only when its verifier value is $1$, if each draw satisfies $\Pr(A_q(Y_i)=1,\ C_q(Y_i)=0)\le\epsilon$, then the probability of outputting an accepted but incorrect response is at most $N\epsilon$. This bound does not require independent draws.

3. For an adaptive sampler, let $p\in[0,1]$. Suppose that for every $i\le N$ and every positive-probability history $h=(Y_1,\ldots,Y_{i-1})$ with no earlier correct response, the conditional probability of correctness at draw $i$ is at least $p$. Then the probability of no correct response in the first $N$ draws is at most $(1-p)^N$.

## Statement references

[[def-verifier-and-generation-protocol|Finite response law, correctness predicate, and verifier.]]
 
[[alg-budgeted-verifier-guided-generation|Rejection search returns the first verifier-accepted sample, or failure after the budget.]]
 
[DeepSeek-AI, *DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning*](https://arxiv.org/pdf/2501.12948v1).

## Facts & Assumptions

**Given:** The finite response law, correctness predicate $C_q$, verifier $A_q$, and budget $N$. Part 1 assumes independent policy draws; part 2 assumes only the stated per-draw false-acceptance bounds; part 3 assumes the stated adaptive conditional-success bounds.

[F1] [[def-verifier-and-generation-protocol]]: at fixed $q$, the response set is finite, its mass function is normalized, and $C_q,A_q$ take values in $\{0,1\}$.

[F2] [[alg-budgeted-verifier-guided-generation]] [[lem-budgeted-verifier-generation-termination-and-calls]]: rejection search returns the first sample with $A_q=1$ or fails after at most $N$ draws.

[F3] [[def-probability-measure]]: probabilities are measures of total mass one, hence are additive on disjoint events and subadditive on finite unions.

[F4] [[def-independent-random-elements]] and [[def-independent-sigma-algebras-and-events]]: independent draws generate independent sigma-algebras; for events $E_i$ determined by distinct draws, $\Pr(\bigcap_i E_i)=\prod_i\Pr(E_i)$.

[F5] [[def-finite-sum]]: finite sums are defined by recursion, including sums over the finite history list.

[A1] In part 3, $p\in[0,1]$ and for each positive-probability no-success history $h$ at draw $i$, $\Pr(C_q(Y_i)=1\mid h)\ge p$. For finite histories, this conditional probability is $\Pr(C_q(Y_i)=1,\ h)/\Pr(h)$.

## Proof

**Given:** The Statement hypotheses, including the finite sample space of at most $N$ responses.

1.1 Under $A_q=C_q$, rejection search succeeds exactly on the event $\bigcup_{i=1}^N\{C_q(Y_i)=1\}$. Its complement is the intersection of the $N$ failure events. By independence [F4], that complement has probability $(1-p)^N$, so the success probability is $1-(1-p)^N$. [given, F1, F2, F3, F4, algebra]

1.2 Let $F_i$ be the event that the first $i$ adaptive responses are all incorrect, with $F_0$ the whole sample space. Enumerate the finite response histories lexicographically using the fixed response list in [F1], and partition $F_{i-1}$ into its positive-probability histories $h$. By [A1], each satisfies $\Pr(C_q(Y_i)=0\mid h)\le1-p$, so finite additivity gives $\Pr(F_i)=\sum_{h\subseteq F_{i-1}}\Pr(h)\Pr(C_q(Y_i)=0\mid h)\le(1-p)\Pr(F_{i-1})$. Induction from $\Pr(F_0)=1$ yields $\Pr(F_N)\le(1-p)^N$. [given, A1, F1, F3, F5, algebra]

2.1 For each draw let $B_i=\{A_q(Y_i)=1,\ C_q(Y_i)=0\}$. Any accepted incorrect output selected from the $N$ candidates lies in $\bigcup_{i=1}^{N}B_i$. For every outcome, $\mathbf1_{\cup_iB_i}\le\sum_{i=1}^{N}\mathbf1_{B_i}$; summing this pointwise inequality against the nonnegative finite outcome masses gives $\Pr(\bigcup_iB_i)\le\sum_{i=1}^{N}\Pr(B_i)\le N\epsilon$. Thus the false-acceptance probability is at most $N\epsilon$. No factorization or independence is used in this step. [given, F1, F3, F5, algebra] ∎
