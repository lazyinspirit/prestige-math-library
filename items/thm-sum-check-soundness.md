---
id: thm-sum-check-soundness
kind: theorem
title: "Adaptive-prover soundness of sum-check"
status: draft
origin: pipeline
deps: [lem-first-false-round-is-caught-by-root-bound]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct calculation
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Justin Thaler, Proofs, Arguments, and Zero-Knowledge (2023), Proposition 4.1 non-inductive proof, pp.36\u201337"
      url: "https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf"
---

## Statement

Fix a sum-check instance over a finite field $F$, with $n\geq1$, trusted individual bounds $d_1,\ldots,d_n$, trusted evaluation, and false initial claim $H\ne\sum_b g(b)$. For every adaptive prover strategy the acceptance probability is at most
$$\min\left(1,\frac{\sum_{i=1}^n d_i}{|F|}\right).$$
In particular it is at most $nd/|F|$ if all $d_i\leq d$. A randomized prover is allowed; its coins are independent of future verifier challenges.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] At each reached false-claim prefix, invalid messages reject and the probability that the next scalar becomes true is at most min(1,d_i/|F|), also for randomized messages ([[lem-first-false-round-is-caught-by-root-bound]]).

## Proof

1.1 Let $B_i$ be the event that the protocol reaches round $i$ with all earlier scalar claims false, passes that round’s message checks, and its updated scalar claim becomes true. For each positive-probability prefix with those earlier claims false, the one-round lemma bounds the conditional probability of this transition by $d_i/|F|$. Averaging over prefixes (and messages) gives $\Pr(B_i)\leq d_i/|F|$. [F1, given]

2.1 Acceptance forces the final scalar claim to equal the trusted value $g(r)$, hence to be true. The initial claim is false. There is therefore a first transition from false to true, so acceptance is contained in $\bigcup_{i=1}^n B_i$. Pointwise, the indicator of this union is at most the sum of its event indicators; averaging gives acceptance probability at most $\sum_i d_i/|F|$. This requires no independence between the $B_i$. [step 1.1, given, algebra]

3.1 Probabilities are also at most one, giving the stated cap, and $\sum_i d_i\leq nd$ gives the uniform-degree bound. The reasoning works for $n=1$ and for zero degree bounds (all-zero bounds force zero acceptance of a false claim). Randomized adaptive strategies were already covered by conditional averaging. [step 1.1, step 2.1, algebra] ∎
