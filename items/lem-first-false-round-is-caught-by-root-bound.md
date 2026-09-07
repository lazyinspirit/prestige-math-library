---
id: lem-first-false-round-is-caught-by-root-bound
kind: lemma
title: "A false sum-check claim rarely becomes true"
status: draft
origin: pipeline
deps: [def-sum-check-instance-and-protocol, thm-root-bound-for-polynomials-over-a-domain]
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

At any round $i\in\{1,\ldots,n\}$ of sum-check, condition on a reached past transcript of positive probability for which $C_{i-1}\ne S_{i-1}$. If the next message fails its format or consistency check it is rejected. Otherwise, conditioned also on the prover's fixed message, the probability that the updated claim becomes true is at most $\min(1,d_i/|F|)$. The same upper bound holds after averaging over a randomized choice of message. Fresh verifier randomness is drawn after the message.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] The current true value is S_{i-1}, the honest message is q_i, and a fresh uniform r_i is drawn only after h_i is fixed ([[def-sum-check-instance-and-protocol]]).

[F2] A nonzero polynomial of degree m over an integral domain has at most m distinct roots in that domain ([[thm-root-bound-for-polynomials-over-a-domain]]).

## Proof

1.1 Let $q_i(T)$ be the true partial sum at the fixed prefix. Its degree is at most $d_i$ because specialization and addition preserve degree upper bounds, and $q_i(0)+q_i(1)=S_{i-1}$. Any well-formed consistent $h_i$ instead has $h_i(0)+h_i(1)=C_{i-1}\ne S_{i-1}$, so $h_i-q_i$ is a nonzero formal polynomial of degree at most $d_i$. Messages failing these checks reject immediately. [F1, given, algebra]

2.1 A field is an integral domain, since $ab=0$ with $a\ne0$ implies $b=a^{-1}ab=0$. Apply the root bound to $h_i-q_i$: it has at most $d_i$ roots in $F$. The next scalar is true precisely if $h_i(r_i)=q_i(r_i)$, because $S_i=q_i(r_i)$. The fresh $r_i$ is uniform even after conditioning on the fixed message, so this probability is at most $\min(1,d_i/|F|)$. [F1, F2, step 1.1, algebra]

3.1 The bound holds for each allowed message, so averaging its conditional probability over any prover randomness preserves it. If $d_i=0$, the nonzero difference is constant and the probability is zero; if $d_i\geq|F|$, the cap at one is merely trivial. The argument includes $i=n$, $n=1$, characteristic two, and challenges $0,1$. A false updated claim need not be detected in this round; only its becoming true is the exceptional event bounded here. [step 2.1, algebra] ∎
