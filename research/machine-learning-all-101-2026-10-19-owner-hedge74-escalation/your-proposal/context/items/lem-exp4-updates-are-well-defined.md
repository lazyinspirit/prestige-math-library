---
id: lem-exp4-updates-are-well-defined
kind: lemma
title: "Exp4 updates are well-defined, including zero-probability actions"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - alg-exp4
  - def-contextual-bandit-protocol
  - def-real-exponential-function-and-e
  - cor-exponential-reciprocal-and-positivity
  - lem-of-inverse-positive
  - lem-of-sign-rules
  - thm-induction-principle
proof_strategy: induction
axiom_use: "No choice axiom is used. The finite-valued measurable action draws are supplied on the probability space assumed by the algorithm; the proof is a finite pointwise induction."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Lattimore and Szepesvári, Bandit Algorithms, §18.3 Algorithm 11 (Exp4 procedure background)"
      url: "https://tor-lattimore.com/downloads/book/book.pdf"
---

## Statement

For the exact-real Exp4 procedure, take any integers $n\ge1$, $k>1$, $M>1$, any finite real learning rate $\eta>0$, and every oblivious reward/advice instance and supplied measurable draws in its input scope. At every round $t\in[n]$, the expert vector $Q_t$ is a probability vector with strictly positive entries, the action mixture $P_t$ belongs to $\Delta_k$, and $P_{t,i}=0$ implies $E(t)_{m,i}=0$ for every expert $m$. Every action and expert reward estimate is finite; the corresponding estimated losses $1-\widehat X_{t,i}$ and $1-\widetilde X_{t,m}$ are nonnegative. The normalizing denominator is finite and strictly positive, so $Q_{t+1}$ again has strictly positive entries summing to one. The procedure completes its $n$ prescribed rounds and returns all specified outputs.

The zero-quotient convention is retained exactly. These conclusions do not require positive sampling probability for every action, a uniform exploration mixture, a bound on the magnitude of an importance-weighted estimate, or a restriction on the learning rate beyond $\eta>0$.

## Statement references

[[alg-exp4]]

[[def-contextual-bandit-protocol]]

[[cor-exponential-reciprocal-and-positivity]]

[Lattimore and Szepesvári, *Bandit Algorithms*, §18.3 Algorithm 11](https://tor-lattimore.com/downloads/book/book.pdf)

## Facts & Assumptions

**Given:** The full finite-horizon Exp4 inputs in the Statement, using exact real arithmetic and the probability space carrying the algorithm's prescribed finite-valued measurable action draws.

[F1] The input has $n\ge1$, $k>1$, $M>1$, fixed rewards $x_t\in[0,1]^k$, and advice rows with $E(t)_{m,i}\ge0$ and $\sum_i E(t)_{m,i}=1$. The observed reward is $X_t=x_{t,A_t}\in[0,1]$; action draws are measurable, and the pre-action history consists of earlier actions and observed rewards. [[def-contextual-bandit-protocol]]

[F2] The algorithm initializes $Q_{1,m}=1/M$, sets $P_{t,i}=\sum_mQ_{t,m}E(t)_{m,i}$, and uses $\widehat X_{t,i}=1-\widehat L_{t,i}$ with $\widehat L_{t,i}=\mathbf1\{A_t=i\}(1-X_t)/P_{t,i}$ when $P_{t,i}>0$, and $\widehat L_{t,i}=0$ when $P_{t,i}=0$. It sets $\widetilde X_{t,m}=\sum_iE(t)_{m,i}\widehat X_{t,i}$ and normalizes $Q_{t,m}\exp(\eta\widetilde X_{t,m})$ to obtain $Q_{t+1,m}$. [[alg-exp4]]

[F3] The real exponential is finite and strictly positive at every finite real argument. [[def-real-exponential-function-and-e]], [[cor-exponential-reciprocal-and-positivity]]

[F4] Inverses and products of positive real numbers are positive, and positive multiplication preserves inequalities. [[lem-of-inverse-positive]], [[lem-of-sign-rules]]

[F5] Induction propagates a base assertion preserved at each successor through the finite sequence of rounds. [[thm-induction-principle]]

## Proof

1.1 At the first round, $M>1$ makes $1/M$ a finite strictly positive real by [F4]. The $M$ entries sum to one, so $Q_1$ is a strictly positive probability vector. [given, F2, F4, base, algebra]

1.2 Assume $Q_t$ is a strictly positive probability vector at a round $t\le n$. Every $P_{t,i}$ is a finite nonnegative sum. Reordering its finite double sum gives $\sum_iP_{t,i}=\sum_mQ_{t,m}\sum_iE(t)_{m,i}=\sum_mQ_{t,m}=1$. Hence each $P_{t,i}\in[0,1]$ and $P_t\in\Delta_k$. If $P_{t,i}=0$, every term $Q_{t,m}E(t)_{m,i}$ in this nonnegative sum is zero, and strict positivity of $Q_{t,m}$ forces $E(t)_{m,i}=0$ for every $m$. Thus unsupported actions carry no expert advice. [F1, F2, F4, IH, algebra]

2.1 Fix the round's action. Since $0\le X_t\le1$, a supported coordinate has finite nonnegative $\widehat L_{t,i}$ by [F4], while an unsupported coordinate has the defined value zero. Thus every $\widehat X_{t,i}=1-\widehat L_{t,i}$ is finite, with no division by zero. The finite sum defining $\widetilde X_{t,m}$ is also finite. As each advice row sums to one, $\widetilde L_{t,m}:=1-\widetilde X_{t,m}=\sum_iE(t)_{m,i}\widehat L_{t,i}\ge0$. The reasoning uses the zero convention even on null outcomes, so no pointwise undefined quotient is hidden behind a probability-zero claim. [F1, F2, F4, step 1.2, algebra]

3.1 By step 2.1, $\eta\widetilde X_{t,m}$ is a finite real number for every expert. By [F3], every weight $w_m=Q_{t,m}\exp(\eta\widetilde X_{t,m})$ is finite and strictly positive. Since $M$ is finite and nonzero, $Z_t=\sum_mw_m$ is finite and strictly positive. Therefore every $Q_{t+1,m}=w_m/Z_t$ is finite and strictly positive by [F4], and their sum is one. This is the induction step. [F2, F3, F4, step 2.1, IH, algebra]

4.1 By [F5], all stated invariants and finite estimates hold through round $n$, including $Q_{n+1}$. For fixed inputs, $Q_t$ and $P_t$ are functions of the finite past action sequence, and all other round records are functions of that sequence and the current action. The finite measurable action-history partitions therefore make the states and records measurable with finite ranges; in particular $P_t$ is pre-action measurable. There is at least one supported arm at each round because $\sum_iP_{t,i}=1$, and the algorithm's probability space supplies its measurable draw; no sampler construction is being assumed beyond the input contract. Each round performs only finite sums and the prescribed finite evaluations and draw. After exactly $n$ rounds the loop ends and returns $(Q_t,P_t,A_t,X_t,\widehat X_t,\widetilde X_t)_{t=1}^n$ and $Q_{n+1}$. This proves well-definedness and finite-horizon completion without any extra exploration or learning-rate hypothesis. [given, F1, F2, F3, F5, step 1.1, step 1.2, step 2.1, step 3.1, discharge-induction] ∎
