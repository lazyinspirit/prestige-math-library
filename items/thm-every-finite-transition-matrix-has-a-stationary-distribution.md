---
id: thm-every-finite-transition-matrix-has-a-stationary-distribution
kind: theorem
title: "Every transition matrix on a nonempty finite state space has a stationary distribution"
status: draft
origin: pipeline
landmark: false
deps:
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-transition-matrix-and-n-step-transition-probabilities
  - thm-bolzano-weierstrass
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition, §5.5, existence of stationary distributions by Cesàro averaging"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Aldous–Chewi, Probability Theory, Lectures 13–15"
      url: https://www.stat.berkeley.edu/~aldous/205B/chewi_notes.pdf
---

## Statement

Let $E$ be a nonempty finite set and let $p$ be a transition matrix on $E$
([[def-transition-matrix-and-n-step-transition-probabilities]]). Then $p$ has an
invariant probability distribution
([[def-invariant-and-stationary-distribution-for-a-markov-kernel]]), that is,
some probability vector $\pi$ on $E$ satisfies $\pi p=\pi$. No irreducibility,
aperiodicity or recurrence hypothesis is needed, and the argument uses no
choice principle and no Markov-chain path law.

## Facts & Assumptions

**Given:** A nonempty finite set $E$ and a transition matrix $p$ on $E$, with $E=\{x_1,\ldots,x_n\}$ for some $n\ge1$.

[F1] The entries satisfy $p(x,y)\ge0$ and $\sum_{y\in E}p(x,y)=1$ for every $x\in E$, and the matrix powers are the $n$-step probabilities $p^{(k)}(x,y)$ of the iterated kernel; the finite sums over $E$ are ordinary finite sums. ([[def-transition-matrix-and-n-step-transition-probabilities]])

[F2] On a countable state space with transition matrix $p$, a probability vector $\pi$ is invariant exactly when $\pi(y)=\sum_{x\in E}\pi(x)p(x,y)$ for every $y\in E$; a finite set is countable. ([[def-invariant-and-stationary-distribution-for-a-markov-kernel]])

[F3] Every bounded sequence of reals has a convergent subsequence: there is a strictly increasing $n_j$ and a real $L$ with $x_{n_j}\to L$. ([[thm-bolzano-weierstrass]])

## Proof

**Given:** A nonempty finite set $E=\{x_1,\ldots,x_n\}$ with $n\ge1$ and a transition matrix $p$ on $E$.

**Proof technique:** Cesàro-average a single point mass in the compact finite simplex and pass to a convergent subsequence, using the exact telescoping identity for the drift.

1.1 Fix the state $x_1$ and let $\mu$ be its point mass. For every $N\ge1$ define the row vector
$$\nu_N:=\frac1N\sum_{k=0}^{N-1}\mu p^{(k)},$$
where $p^{(k)}$ is the $k$-th matrix power. Its entries are finite nonnegative sums of products of the entries of $p$, hence $\nu_N(y)\in[0,1]$ for every $y\in E$; and using [F1] twice, $\sum_{y\in E}\nu_N(y)=\frac1N\sum_{k=0}^{N-1}\sum_{y\in E}\mu p^{(k)}(y)=\frac1N\sum_{k=0}^{N-1}1=1$, since a point mass is a probability vector and rows of every $p^{(k)}$ sum to one. So every $\nu_N$ lies in $S:=\{\rho:E\to[0,1]:\sum_y\rho(y)=1\}$. [F1, given]

1.2 For every $N\ge1$ the exact telescoping identity
$$\nu_Np-\nu_N=\frac1N\sum_{k=0}^{N-1}\bigl(\mu p^{(k+1)}-\mu p^{(k)}\bigr)=\frac1N\bigl(\mu p^{(N)}-\mu\bigr)$$
holds coordinatewise as an identity of finite real sums, its entries being differences of numbers in $[0,1]$, so no infinite sum is rearranged. [F1, step 1.1, algebra]

2.1 There is a strictly increasing sequence $N_j$ and a vector $\pi:E\to[0,1]$ such that $\nu_{N_j}(y)\to\pi(y)$ for every $y\in E$. Enumerate $E=\{x_1,\ldots,x_n\}$ and argue by induction on the number $i$ of coordinates already handled: the $i$-th coordinate sequence along the subsequence produced so far is bounded in $[0,1]$, so [F3] supplies a further strictly increasing subsequence on which it converges; after finitely many successive subsequence choices, every coordinate converges. Finite induction on these existential choices requires no choice axiom. [F3, step 1.1, given]

2.2 Consequently $\nu_Np-\nu_N\to0$ coordinatewise as $N\to\infty$: each entry of $\frac1N(\mu p^{(N)}-\mu)$ has absolute value at most $\frac2N$, since every entry of $\mu p^{(N)}$ and of $\mu$ lies in $[0,1]$. [F1, step 1.2, given]

3.1 The limit $\pi$ is a probability vector: $\pi(y)\ge0$ for every $y$ because a limit of nonnegative numbers is nonnegative; and $\sum_{y\in E}\pi(y)=1$ because a finite sum of convergent sequences converges to the sum of the limits, applied to the constant sums $1$ from step 2.1 and step 1.1. [step 2.1, step 1.1, algebra]

3.2 Passing to the subsequence of step 2.1, $\nu_{N_j}\to\pi$ coordinatewise and hence $\nu_{N_j}p\to\pi p$ coordinatewise, because each entry of the finite matrix product is a finite sum $\sum_{y\in E}\nu_{N_j}(y)p(y,z)$ of finitely many convergent sequences. By step 2.2 the left side of $\nu_Np-\nu_N$ tends to $0$ along $N_j$, so $\pi p-\pi=0$, that is, $\pi p=\pi$. [step 2.1, step 2.2, algebra]

4.1 By step 3.1, $\pi$ is a probability vector and by step 3.2 it satisfies $\pi p=\pi$; [F2] then identifies it as an invariant probability distribution for $p$. The state space was required nonempty so that $x_1$ exists; the empty matrix has no probability vector, so $E=\varnothing$ is excluded by the hypothesis. If $n=1$, then $p(x_1,x_1)=1$ and $\pi=\delta_{x_1}$ is invariant, consistent with the construction. The argument uses only finite enumerations, finite sums and the subsequence theorem; no irreducibility, aperiodicity, recurrence, product-space path law or choice principle is used, and the conclusion is a one-way existence assertion rather than an equivalence. [F1, F2, F3, step 3.1, step 3.2, given] ∎
