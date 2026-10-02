---
id: ex-stationary-law-of-a-two-state-chain
kind: example
title: "Stationary law of a two-state chain"
status: published
origin: pipeline
landmark: false
deps:
  - def-axiom-of-choice
  - def-transition-matrix-and-n-step-transition-probabilities
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - thm-every-finite-transition-matrix-has-a-stationary-distribution
  - thm-positive-recurrence-and-stationary-probability-for-irreducible-countable-chains
  - cor-uniqueness-of-the-stationary-distribution-for-an-irreducible-positive-recurrent-chain
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
proof_strategy: direct
---

## Example

Assume AC ([[def-axiom-of-choice]]). Let $0<a,b\le1$ and let

$$P=\begin{pmatrix}1-a&a\\ b&1-b\end{pmatrix}$$

be the transition matrix on $E=\{0,1\}$ with $P(0,1)=a$ and $P(1,0)=b$. Then
the chain is irreducible and its unique stationary law is

$$\pi=\Bigl(\frac{b}{a+b},\ \frac{a}{a+b}\Bigr).$$

The boundary cases $a=1$ or $b=1$ are included; for $a=b=1$ the chain is the
deterministic two-cycle with $\pi=(1/2,1/2)$.

## Facts & Assumptions

**Given:** The two-point state space $E=\{0,1\}$, parameters $0<a,b\le1$, and the displayed matrix $P$.

[A1] Every family of nonempty sets has a choice function; AC is assumed and is used exactly through the positive-recurrence equivalence [F4] and the uniqueness corollary [F5], whose statements assume it. ([[def-axiom-of-choice]])

[F1] A transition matrix has nonnegative entries and rows summing to one. ([[def-transition-matrix-and-n-step-transition-probabilities]])

[F2] A probability vector $\pi$ is invariant exactly when $\pi(y)=\sum_x\pi(x)P(x,y)$ for every state $y$. ([[def-invariant-and-stationary-distribution-for-a-markov-kernel]])

[F3] Every transition matrix on a nonempty finite state space has an invariant probability distribution. ([[thm-every-finite-transition-matrix-has-a-stationary-distribution]])

[F4] Assume AC. For an irreducible countable chain, existence of an invariant probability is equivalent to positive recurrence of every state. ([[thm-positive-recurrence-and-stationary-probability-for-irreducible-countable-chains]])

[F5] Assume AC. An irreducible positive-recurrent countable transition matrix has exactly one invariant probability. ([[cor-uniqueness-of-the-stationary-distribution-for-an-irreducible-positive-recurrent-chain]])

## Verification

**Given:** $0<a,b\le1$ and the matrix $P$ with $P(0,1)=a$, $P(1,0)=b$, $P(0,0)=1-a$, $P(1,1)=1-b$.

**Proof technique:** solve the two stationarity equations, verify the solution, and invoke uniqueness for irreducible positive-recurrent chains.

1.1 The matrix $P$ is a transition matrix: all four entries are nonnegative because $0<a,b\le1$, and each row sums to one, $(1-a)+a=1$ and $b+(1-b)=1$. [F1, given]

1.2 The chain is irreducible: $P(0,1)=a>0$ and $P(1,0)=b>0$, so $0$ and $1$ communicate in one step each way. [given]

1.3 The vector $\pi:=(b/(a+b),a/(a+b))$ is a probability vector: $a+b>0$ and both coordinates are positive, with $\frac{b}{a+b}+\frac{a}{a+b}=1$. [given]

2.1 The vector $\pi$ is invariant. At state $0$: $(\pi P)(0)=\pi(0)(1-a)+\pi(1)b=\pi(0)-a\pi(0)+b\pi(1)$ and $a\pi(0)=ab/(a+b)=b\pi(1)$, so this equals $\pi(0)$; at state $1$: $(\pi P)(1)=\pi(0)a+\pi(1)(1-b)=\pi(1)+\bigl(a\pi(0)-b\pi(1)\bigr)=\pi(1)$. Hence $\pi P=\pi$, which is invariance by [F2]. [F2, step 1.3, algebra]

2.2 Uniqueness: by [F3] the finite chain has an invariant probability, so by the equivalence [F4] the irreducible chain is positive recurrent, and [F5] then gives that it has exactly one invariant probability. [F3, F4, F5, step 1.1, step 1.2, given]

3.1 Combining steps 2.1 and 2.2, the unique stationary law of the chain is $\pi=(b/(a+b),a/(a+b))$. [step 2.1, step 2.2, given]

4.1 Boundary and scope cases: at $a=b=1$ the matrix is $\begin{pmatrix}0&1\\1&0\end{pmatrix}$, the chain alternates deterministically, $\pi=(1/2,1/2)$, and the formula is unaffected by the period; at $a=1$, $b<1$ the matrix has $P(0,1)=1$ and the formula still gives a positive probability vector; if $a$ or $b$ were $0$ the chain would fail to be irreducible and the argument for uniqueness through [F5] would not apply, so the strict positivity of $a$ and $b$ is used exactly in step 1.2; the verification checks both rows of the stationarity equations rather than only the first; and the objects are determined by the two given parameters, so steps 1.1–2.1 are choice-free while the uniqueness argument of step 2.2 spends the axiom [A1] exactly through the AC-carrying suppliers [F4] and [F5], whose statements assume Choice. [A1, F4, F5, step 1.2, step 2.1, given] ∎
