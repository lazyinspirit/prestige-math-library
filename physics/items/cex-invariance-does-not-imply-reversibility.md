---
id: cex-invariance-does-not-imply-reversibility
kind: counterexample
title: "An invariant law need not be reversible"
status: published
origin: pipeline
landmark: false
deps:
  - def-axiom-of-choice
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-reversible-measure-and-detailed-balance
  - thm-time-reversal-of-a-stationary-markov-chain
  - lem-detailed-balance-implies-invariance
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
proof_strategy: direct
---

## Statement refuted

An invariant probability need not be reversible. The deterministic directed
three-cycle on $\{0,1,2\}$ with $p(i,i+1)=1$ (indices modulo $3$) has the
uniform law $\pi=(1/3,1/3,1/3)$ as an invariant probability, but detailed
balance fails at every directed edge
([[def-reversible-measure-and-detailed-balance]]), and the reversed kernel
runs around the cycle in the opposite direction
([[thm-time-reversal-of-a-stationary-markov-chain]]).

## Facts & Assumptions

**Given:** The state space $E=\{0,1,2\}$ with indices taken modulo $3$, the matrix $p(i,i+1)=1$ with all other entries zero, and $\pi=(1/3,1/3,1/3)$.

[A1] Every family of nonempty sets has a choice function; AC is assumed and is used exactly through the reverse-kernel theorem [F3], whose statement assumes it. ([[def-axiom-of-choice]])

[F1] A probability vector $\pi$ is invariant for a countable transition matrix exactly when $\pi(y)=\sum_{x\in E}\pi(x)p(x,y)$ for every $y\in E$. ([[def-invariant-and-stationary-distribution-for-a-markov-kernel]])

[F2] A state measure $\mu$ satisfies detailed balance when $\mu(x)p(x,y)=\mu(y)p(y,x)$ for all $x,y$; it is a reversible probability distribution when additionally its total mass is one. ([[def-reversible-measure-and-detailed-balance]])

[F3] For a stationary countable chain with law $\pi$, the reverse kernel on $E_+=\{x:\pi(x)>0\}$ is $p_*(x,y)=\pi(y)p(y,x)/\pi(x)$, and detailed balance for $\pi$ and $p$ is equivalent to $p_*=p$ on $E_+$. ([[thm-time-reversal-of-a-stationary-markov-chain]])

## Counterexample

**Given:** $E=\{0,1,2\}$ and $p(i,i+1)=1$ with all other entries zero.

**Proof technique:** compute invariance and detailed balance directly, then identify the reverse kernel by the reversal formula.

1.1 The matrix $p$ is a transition matrix, since each row has the single entry $1$ and all other entries $0$; and $\pi$ is invariant: for each $y$ there is exactly one predecessor $x=y-1$ with $p(x,y)=1$, so $\sum_x\pi(x)p(x,y)=\frac13=\pi(y)$, which is the criterion of [F1]. [F1, given]

2.1 Detailed balance fails for $\pi$: for the directed edge $0\to1$, $\pi(0)p(0,1)=\frac13\cdot1=\frac13$, while $\pi(1)p(1,0)=\frac13\cdot0=0$, so the two sides differ; by [F2] the invariant probability $\pi$ is not a reversible probability distribution. [F2, step 1.1, given]

2.2 The reverse kernel of [F3] is well defined because $E_+=\{x:\pi(x)>0\}=E$: $p_*(x,y)=\frac{\pi(y)p(y,x)}{\pi(x)}=p(y,x)$, so $p_*(i,i-1)=1$ for every $i$ and all other entries vanish; the reversed chain is the deterministic cycle running in the opposite direction. [F3, step 1.1, given]

3.1 The equivalence in [F3] gives a second proof of nonreversibility: $p_*(1,0)=1$ while $p(1,0)=0$, so $p_*\ne p$ on $E_+$ and detailed balance fails; both computations agree. [F3, step 2.1, step 2.2, given]

4.1 Boundary and scope cases: the two-state deterministic cycle with $p(0,1)=p(1,0)=1$ is reversible, since $\frac12\cdot1=\frac12\cdot1$; hence three states is the minimal size for a deterministic cycle that refutes the implication, and the example is sharp in that respect; the uniform law remains invariant for the reversed kernel $p_*$, so reversing does not lose stationarity; the diagonal entries $p(i,i)=0$ satisfy detailed balance trivially in the sense $0=0$; steps 1.1–2.1 are finite computations on the given data and use no choice principle, while steps 2.2–3.1 spend the axiom [A1] exactly through the reverse-kernel theorem [F3], whose statement assumes Choice; and the example refutes only the implication "invariant $\Rightarrow$ reversible", not the converse, which is [[lem-detailed-balance-implies-invariance]]. [A1, F1, F2, F3, step 3.1, given] ∎
