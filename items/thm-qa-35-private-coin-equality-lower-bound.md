---
id: thm-qa-35-private-coin-equality-lower-bound
kind: theorem
title: "Private-coin SMP equality requires Ω(√n) bits"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps: ["def-qa-35-equality-promise", "def-qa-35-finite-communication-protocol", "lem-qa-35-private-coin-error-reduction", "lem-qa-35-identity-matrix-packing"]
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all distributions, sums, bases, and selection sets are finite."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ilan Newman and Mario Szegedy, Public vs. Private Coin Flips in One Round Communication Games"
      url: https://dl.acm.org/doi/10.1145/237814.238004
      locator: "§4.1–4.2, PDF pp.4–9, matrix packing theorem and complete proof."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 16 §§16.1 and 16.6, PDF pp.147–153; private/public-coin SMP and equality lower-bound context (§16.1), quantum fingerprint construction and SWAP-test analysis (§16.6)."
---

## Statement

For a classical simultaneous-message Equality protocol on n-bit inputs, with independent private randomness, no shared resource, and worst-case error at most 1/3, let c be the maximum of the two senders’ worst-case message lengths. For the fixed odd t used in the proof, c+1≥sqrt(n/(60 ln 2))/t; consequently the total communication is Ω(√n).

## Facts & Assumptions

**Given:** A classical private-coin SMP protocol for Equality on $n\ge1$ bits, with no shared resource, worst-case error at most $1/3$, and maximum sender message length $c$ bits.

[F1] [[lem-qa-35-private-coin-error-reduction]]: For every odd $t$, $t$ independent repetitions and majority have error at most $e^{-t/48}$ and each sender sends at most $t(c+1)$ bits after fixed-length encoding.

[F2] [[lem-qa-35-identity-matrix-packing]]: If row-stochastic $N\times m$ matrices $A,B$ and an $m\times m$ matrix $M\in[0,1]^{m\times m}$ have diagonal entries of $AMB^{\mathsf T}$ at least $0.99$ and off-diagonal entries at most $0.01$, then $N\le e^{60(\ln m)^2}$ for $m\ge2$.

## Proof

**Proof technique:** reduction to the finite matrix-packing lemma.

1.1 Choose any fixed odd integer $t>48\ln400$. By [F1], repetition gives error less than $1/400$. Each sender's repeated transcript takes at most $2^{t(c+1)}$ possible values. Let $N=2^n$ and $m=2^{t(c+1)}$; define row $x$ of $A$ and row $y$ of $B$ as the probability distributions of Alice's and Bob's transcript, padding unused message labels with zeroes. Independence of their private random tapes makes the joint transcript law the product $A_x(i)B_y(j)$. Let $M_{ij}$ be the referee's acceptance probability on transcript pair $(i,j)$; then $M\in[0,1]^{m\times m}$ and $(AMB^{\mathsf T})_{xy}$ is the acceptance probability on $(x,y)$. [given, F1, construct]

2.1 Repeated-protocol correctness gives diagonal acceptance at least $399/400>0.99$ and off-diagonal acceptance at most $1/400<0.01$. Apply [F2] to obtain $2^n\le\exp(60(t(c+1)\ln2)^2)$. Taking logarithms and rearranging yields $c+1\ge\frac1t\sqrt{\frac{n}{60\ln2}}.$ Since $t$ is a fixed constant, $c=\Omega(\sqrt n)$ as $n\to\infty$, and the total communication is at least $c$. The proof uses only finite message distributions and finite conditioning; it invokes no choice axiom. [step 1.1, F1, F2, algebra] ∎
