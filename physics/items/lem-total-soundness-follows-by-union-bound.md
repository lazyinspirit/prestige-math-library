---
id: lem-total-soundness-follows-by-union-bound
kind: lemma
title: "Total TQBF soundness by the first repaired claim"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-first-false-claim-survives-with-root-bound-probability, lem-efficient-prime-field-for-a-polynomial-soundness-budget, def-shamir-protocol-for-tqbf, lem-ordered-arithmetization-evaluates-to-the-truth-value]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct calculation
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "A. Shen, IP = PSPACE: Simplified Proof, JACM 39(4) 1992, pp. 878–880"
      url: "https://users.cs.fiu.edu/~giri/teach/5420/f01/IP_Pspace2.pdf"
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §8.5.3, author-hosted draft"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Let $\Phi$ be a false closed prenex quantified Boolean formula, with $n$ variables, matrix length $L$, and the parameters $T=n(n+3)/2$, $D=\max\{L,2\}$ and prime $p$ of its Shamir protocol. Then for every prover strategy the probability that the verifier of [[def-shamir-protocol-for-tqbf]] accepts is at most $2TD/p$, which is less than $1/6$ and hence at most $1/3$. A randomized prover is allowed, its coins being independent of the verifier's future challenges.

## Facts & Assumptions

**Given:** A false closed prenex quantified Boolean formula $\Phi$, its Shamir protocol, and an arbitrary prover strategy.

[A1] The rounds run for $t=T,T-1,\dots,1$; in each round the verifier assigns its freshly drawn challenge to the active variable of the round's node, so the sequence of points depends on the verifier's random tape alone and not on the prover's messages; after the last round the verifier accepts exactly when the current claim equals the matrix value $b$ at the current point ([[def-shamir-protocol-for-tqbf]]).

[A2] For each round $t$, conditional on a reached prefix with $c_t\ne G_t(\sigma_t)$ and on a fixed message passing the round's check, the probability that the updated claim equals the true predecessor value is at most $2D/p$ ([[lem-first-false-claim-survives-with-root-bound-probability]]).

[A3] If $T\ge1$, the prime satisfies $p>12TD$ by [[lem-efficient-prime-field-for-a-polynomial-soundness-budget]]; if $T=0$, the protocol sets $p=3>12TD=0$ ([[def-shamir-protocol-for-tqbf]]).

[A4] The final stage constant $G_T$ equals the truth value of $\Phi$, embedded in $F$ as $0$ or $1$, and the initial stage polynomial is $G_0=b$; for the false $\Phi$ this gives $G_T=0\ne1$ ([[lem-ordered-arithmetization-evaluates-to-the-truth-value]]).



**Proof technique:** direct calculation.

## Proof

1.1 Because the point sequence follows the fixed round schedule from the verifier's random tape alone by [A1], the points are well defined for every prover; the stage polynomials $G_t$ depend only on variables that the schedule has already assigned when round $t$ begins, so the true values $v_t:=G_t(\sigma_t)$ are well-defined random variables on the verifier's tape, and $v_T=G_T=0$. [A1, A4, given]

2.1 The run begins with the claim $c_T=1$; by step 1.1 the initial claim is false, that is $c_T\ne v_T$, and this holds pointwise for every random tape and every prover. [step 1.1, A1, given]

2.2 For $t=1,\dots,T$ let $B_t$ be the event that the run reaches round $t$ with $c_t\ne v_t$, that the round's message passes its check, and that $c_{t-1}=v_{t-1}$. By [A2] the conditional probability of the transition, given any such reached prefix and any fixed message passing the check, is at most $2D/p$; averaging over the reached prefixes and over the prover's randomization gives $\Pr[B_t]\le 2D/p$. [step 1.1, A2, algebra]

3.1 If the verifier accepts, every check passed and the terminal test $c_0=b(\sigma_0)$ holds; since $G_0=b$ by [A4], this says $c_0=v_0$. Together with step 2.1 this forces the claim to pass from false to true at some round, so the acceptance event is contained in $\bigcup_{t=1}^{T}B_t$. Pointwise the indicator of this union is at most the sum of the indicators, and averaging gives $\Pr[\text{accept}]\le\sum_t\Pr[B_t]\le T\cdot 2D/p=2TD/p$. [step 2.1, step 2.2, A1, A4, algebra]

4.1 By [A3] we have $2TD/p<2/12=1/6$, and $1/6<1/3$, so the acceptance probability of every prover on the false input $\Phi$ is at most $1/3$. If $n=0$ then $T=0$, there are no rounds, the terminal test compares $1$ with $G_0=G_T=0$ and fails, and the acceptance probability $0$ equals the bound $2TD/p$; if a prover randomizes, its coins are fixed before the challenge that decides $B_t$ and the averaging of step 2.2 already covers it. [step 3.1, A3, A4, algebra] ∎
