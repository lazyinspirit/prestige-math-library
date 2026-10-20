---
id: lem-budgeted-verifier-generation-termination-and-calls
kind: lemma
title: "Budgeted verifier generation terminates with bounded response and selection calls"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps:
  - alg-budgeted-verifier-guided-generation
  - def-verifier-and-generation-protocol
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the finite-response draws and exact evaluators are supplied."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "DeepSeek-AI, DeepSeek-R1, §2.3.3 (rejection-sampling background; finite call bounds proved locally)"
      url: "https://arxiv.org/pdf/2501.12948v1"
---

## Statement

For every input of budgeted verifier-guided generation, with integer $N\ge1$ and its supplied terminating exact operations, rejection search terminates with the first verifier-accepted response and status `accepted`, or with `failure` and no response exactly when all $N$ responses are rejected. It uses at most $N$ response draws and at most $N$ verifier evaluations. For a complete presampled tuple $(y_1,\ldots,y_N)$, it succeeds exactly when at least one $A_q(y_i)=1$.

Best-of-$N$ terminates after exactly $N$ response draws and can return the stipulated least maximizer using $N$ score evaluations, at most $N-1$ score comparisons and at most $N-1$ tie-order comparisons. It returns status `selected` and makes no correctness or verifier-acceptance assertion. Both modes therefore use finitely many supplied calls and have finite total cost equal to their finite bookkeeping cost plus the sum of actual finite per-call costs. The draw-count and output conclusions hold for every realized response tuple; independence is needed only for probabilistic calculations that separately assume it.

## Statement references

[[alg-budgeted-verifier-guided-generation]]: gives the two modes, stopping instructions and supplied-operation model.

## Facts & Assumptions

**Given:** A fixed prompt, finite nonempty response set, its policy law, binary verifier, finite real scores, strict total tie order, integer $N\ge1$, and the supplied terminating calls in the algorithm input.

[F1] [[alg-budgeted-verifier-guided-generation]]: rejection checks the current draw, stops at its first acceptance, and otherwise stops after draw $N$; best-of-$N$ draws exactly $N$ candidates and returns the least score maximizer.

[F2] [[def-verifier-and-generation-protocol]]: verifier values are binary, scores are finite reals, and the tie relation is a strict total order on the finite response set.

## Proof

1.1 In rejection mode, after $i<N$ rejected draws the procedure either accepts the next response or advances its counter to $i+1$. Each draw and verifier evaluation terminates by the supplied-call assumption. Thus no more than $N$ such pairs of calls occur. If one is accepted, the stop rule returns the first such response; if none is accepted, it stops after the $N$th rejection with failure. For a presampled tuple this is exactly the event that some verifier value is one. [given, F1, F2, induction, algebra]

1.2 In best-of-$N$, initialize a running best response with the first draw and its score. For each further candidate, compare its score with the running maximum, replace the running best on a strict increase, and on equality keep the lesser response in the supplied tie order. Induction on the scanned prefix shows the running best is its least score maximizer. Repeated identical responses cause no ambiguity: when two responses are equal, retaining either occurrence returns the same response. [given, F1, F2, induction, construct]

2.1 After the finite scan in step 1.2, the result is the stipulated least maximizer. There were $N$ draws and score evaluations and only $N-1$ scan steps, with at most one score comparison and one tie-order comparison each. Rejection has the bounds in step 1.1. All other bookkeeping traverses finite lists; summing the finitely many supplied finite call costs proves finite total cost and termination in both modes. No pointwise step uses independence or equates the verifier with correctness. [given, F1, step 1.1, step 1.2, algebra] ∎
