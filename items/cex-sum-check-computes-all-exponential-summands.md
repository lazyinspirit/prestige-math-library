---
id: cex-sum-check-computes-all-exponential-summands
kind: counterexample
title: "One point evaluation for an exponentially large cube"
status: published
origin: pipeline
deps: [def-sum-check-instance-and-protocol, lem-sum-check-verifier-is-polynomial-time-given-point-evaluation, thm-sum-check-soundness]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct calculation
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Justin Thaler, Proofs, Arguments, and Zero-Knowledge (2023), \u00a74.1 protocol and resource analysis pp.33\u201338"
      url: "https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf"
---

## Statement refuted

The assertion that a sum-check verifier must evaluate $g$ separately at every Boolean vertex is false. For $n\geq1$, take $g(X_1,\ldots,X_n)=\prod_iX_i$ over a supplied finite field, with individual bounds $d_i=1$. Its cube sum is one although the cube has $2^n$ points. The verifier uses $O(n)$ field work, including one evaluation of $g$ with at most $n$ multiplications. False initial claims have acceptance probability at most $\min(1,n/|F|)$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] The verifier checks coefficient messages round by round and evaluates g at the terminal challenge point ([[def-sum-check-instance-and-protocol]]).

[F2] Verifier field work is O(D) plus a single terminal point evaluation with D=sum_i(d_i+1) ([[lem-sum-check-verifier-is-polynomial-time-given-point-evaluation]]).

[F3] The false-claim acceptance probability is at most min(1,sum_i d_i/|F|) ([[thm-sum-check-soundness]]).

## Counterexample

1.1 At the all-one vertex the product equals one, and at every other Boolean vertex a zero coordinate makes it zero. Hence the cube sum is one. There are two independent choices per coordinate, giving $2^n$ vertices, also when $n=1$. [given, algebra]

1.2 The specified protocol uses one terminal evaluation. Implement it by multiplying the $n$ supplied coordinates starting from one, at a cost of at most $n$ multiplications. Here $D=\sum_i(1+1)=2n$, so the resource lemma bounds all verifier field work, including this evaluation, by $O(n)$. Zeros among the challenge coordinates simply make the product zero, without any division. [F1, F2, algebra]

2.1 The soundness theorem gives the stated false-claim bound from $\sum_i d_i=n$, including the cap at one when the field is small. Thus the verifier does not need $2^n$ separate evaluations of $g$. The claim concerns verifier work with a supplied evaluator and imposes no general efficiency assertion on the prover. [F3, step 1.1, step 1.2, algebra] ∎
