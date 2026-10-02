---
id: ex-periodic-chain-has-cesaro-but-not-ordinary-convergence
kind: example
title: "A periodic chain has Cesaro but not ordinary convergence"
status: published
origin: pipeline
landmark: false
deps:
  - def-axiom-of-choice
  - def-transition-matrix-and-n-step-transition-probabilities
  - lem-matrix-chapman-kolmogorov-equations
  - def-accessibility-communication-and-irreducibility
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-period-of-a-state
  - def-aperiodic-chain
  - thm-positive-recurrence-and-stationary-probability-for-irreducible-countable-chains
  - thm-cesaro-convergence-for-irreducible-positive-recurrent-chains
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

Assume AC ([[def-axiom-of-choice]]). On the two-point state space $E=\{0,1\}$
let $p$ be the deterministic alternation

$$p=\begin{pmatrix}0&1\\1&0\end{pmatrix}, \qquad\text{so}\qquad p^{(n)}=\begin{cases}I,&n\text{ even},\\ p,&n\text{ odd},\end{cases}$$

with invariant probability $\pi=(1/2,1/2)$. Then the Cesàro laws from any
starting state converge,

$$\frac1n\sum_{k=0}^{n-1}p^{(k)}(x,\cdot)\ \longrightarrow\ \pi \qquad\text{for }x\in\{0,1\},$$

while the ordinary-time transition probability $p^{(n)}(0,0)$ alternates
between $1$ and $0$ and therefore does not converge. The chain has period two,
so it is not aperiodic, and the failure is exactly the one that aperiodicity
rules out.

## Facts & Assumptions

**Given:** AC; the state space $E=\{0,1\}$; the matrix $p(0,1)=p(1,0)=1$ with $p(0,0)=p(1,1)=0$; and $\pi=(1/2,1/2)$.

[A1] Every family of nonempty sets has a choice function; AC is assumed and is used through the positive-recurrence supplier [F6] and the Cesàro supplier [F8]. ([[def-axiom-of-choice]])

[F1] For a countable probability kernel, $p(x,y)=K(x,\{y\})$ and $p^{(n)}(x,y)=K^n(x,\{y\})$ for $n\in\mathbb N_0$, with $p^{(0)}(x,y)=\mathbf 1_{\{x=y\}}$ and $\sum_yp^{(n)}(x,y)=1$. ([[def-transition-matrix-and-n-step-transition-probabilities]])

[F2] For $r,s\ge0$, $p^{(r+s)}(x,z)=\sum_{w\in E}p^{(r)}(x,w)p^{(s)}(w,z)$. ([[lem-matrix-chapman-kolmogorov-equations]])

[F3] $x\to y$ means $p^{(n)}(x,y)>0$ for some $n\ge0$; states communicate when each is accessible from the other, and the chain is irreducible when every pair communicates. ([[def-accessibility-communication-and-irreducibility]])

[F4] On a countable state space a probability vector $\pi$ is invariant exactly when $\pi(y)=\sum_{x\in E}\pi(x)p(x,y)$ for every $y\in E$. ([[def-invariant-and-stationary-distribution-for-a-markov-kernel]])

[F5] $R_x=\{n\ge1:p^{(n)}(x,x)>0\}$ is the positive return set, and when it is nonempty $d(x)$ is the greatest positive integer dividing every element of $R_x$. ([[def-period-of-a-state]])

[F6] Assume AC. For an irreducible countable chain, existence of an invariant probability is equivalent to positive recurrence of every state. ([[thm-positive-recurrence-and-stationary-probability-for-irreducible-countable-chains]])

[F7] For an irreducible chain the state periods $d(x)$ agree, the common value is positive and is called $\operatorname{per}(p)$, and the chain is aperiodic when $\operatorname{per}(p)=1$. ([[def-aperiodic-chain]])

[F8] Assume AC. For an irreducible positive-recurrent $p$ on countable $E$ with invariant probability $\pi$, $\frac1n\sum_{k=0}^{n-1}p^{(k)}(x,y)\to\pi(y)$ for all $x,y\in E$. ([[thm-cesaro-convergence-for-irreducible-positive-recurrent-chains]])

## Verification

**Given:** AC; $E=\{0,1\}$; the matrix $p(0,1)=p(1,0)=1$, $p(0,0)=p(1,1)=0$; and $\pi=(1/2,1/2)$.

**Proof technique:** compute all powers of $p$ from the two-step identity, check irreducibility and invariance, transfer to positive recurrence, read off the period, and evaluate the ordinary and Cesàro averages explicitly.

1.1 The matrix $p$ is a transition matrix: both entries of each row are $0$ or $1$ and each row sums to one. Multiplying once, $p^2=I$, so by [F2] an induction gives $p^{(2m)}=I$ and $p^{(2m+1)}=p$ for every $m\ge0$; in particular $p^{(n)}(0,0)=1$ for even $n$ and $p^{(n)}(0,0)=0$ for odd $n\ge1$, while $p^{(n)}(0,\cdot)=\delta_0$ for even $n$ and $\delta_1$ for odd $n$. [F1, F2, algebra]

2.1 The chain is irreducible: $p(0,1)=1>0$ and $p(1,0)=1>0$ by step 1.1, so $0\to1$ and $1\to0$, and each state is accessible from itself with a zero-step path; by [F3] every pair communicates. [F3, step 1.1]

2.2 The law $\pi$ is invariant: $\sum_x\pi(x)p(x,0)=\pi(1)p(1,0)=\frac12=\pi(0)$ and $\sum_x\pi(x)p(x,1)=\pi(0)p(0,1)=\frac12=\pi(1)$, which is the criterion of [F4]. [F4, step 1.1, given]

2.3 Ordinary convergence fails at the level of a single transition probability: by step 1.1 the diagonal sequence $p^{(n)}(0,0)$ equals $1$ at even $n$ and $0$ at odd $n$, so it alternates and does not converge as $n\to\infty$; correspondingly the laws $p^{(n)}(0,\cdot)$ alternate between the two point masses $\delta_0$ and $\delta_1$ and do not converge. [F1, step 1.1]

3.1 Positive recurrence: the chain is irreducible by step 2.1 and has the invariant probability $\pi$ by step 2.2, so [F6] gives that every state is positive recurrent; in particular the hypotheses of the Cesàro supplier [F8] are met. [F6, step 2.1, step 2.2]

3.2 The chain is not aperiodic: by step 1.1 the positive return set of [F5] is $R_0=\{2,4,6,\dots\}$, whose greatest common divisor is $2$, so $d(0)=2$; the periods agree on the irreducible chain by [F7], so $\operatorname{per}(p)=2\ne1$ and $p$ is not aperiodic. [F5, F7, step 1.1, step 2.1]

4.1 Cesàro convergence: step 1.1 gives $p^{(k)}=I$ for even $k$ and $p^{(k)}=p$ for odd $k$, so for even $n=2m$ the average is $\frac1{2m}\sum_{k=0}^{2m-1}p^{(k)}=\frac1{2m}\,m(I+p)=\frac12(I+p)$, and for odd $n=2m+1$ it is $\frac{m(I+p)+I}{2m+1}\to\frac12(I+p)$; the matrix $\frac12(I+p)$ has both rows equal to $(1/2,1/2)=\pi$. Hence $\frac1n\sum_{k=0}^{n-1}p^{(k)}(x,\cdot)\to\pi$ for each starting state $x$, which is the displayed Cesàro assertion; since the chain is irreducible and positive recurrent with invariant $\pi$ by steps 2.1, 2.2 and 3.1, this is exactly the conclusion of the general supplier [F8]. [F8, step 1.1, step 2.2, step 3.1, algebra]

5.1 Boundary and scope cases: the identity at $n=0$ is included and is consistent with $p^{(0)}(0,0)=1$, so the alternation starts with the value $1$; the two-state chain is the smallest deterministic cycle and the period is exactly two, so the example exhibits the necessity of aperiodicity rather than a failure of irreducibility or of existence of $\pi$; the Cesàro average equals $\pi$ exactly for every even $n$ and converges otherwise, so no aperiodicity is needed for the averaged statement, and the example claims no converse implication in the other direction; the state space is finite, all sums are finite, and no limit is interchanged with an infinite sum; the two hypotheses needed by [F8], irreducibility and positive recurrence, are verified at steps 2.1 and 3.1 and the invariant law at step 2.2, while the matrices themselves are determined by the fixed data; and AC [A1] is spent exactly on the general suppliers [F6] and [F8], the direct computations of steps 1.1–4.1 being choice-free. [A1, F6, F8, step 3.2, step 2.3, step 4.1, given] ∎
