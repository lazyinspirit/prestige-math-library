---
id: cex-recurrence-is-not-a-property-shared-by-different-communicating-classes
kind: counterexample
title: "Different classes can have different recurrence types"
status: published
origin: pipeline
deps:
  - def-accessibility-communication-and-irreducibility
  - def-recurrent-and-transient-state
  - def-hitting-return-and-visit-times
  - def-transition-matrix-and-n-step-transition-probabilities
  - lem-matrix-chapman-kolmogorov-equations
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
      locator: "§5.3, Theorem 5.3.2 and complete proof, printed pp. 282–283/PDF pp. 289–290, proves recurrence propagation along positive accessibility; Example 5.3.6, printed p. 283/PDF p. 290, gives an analogous absorbing-zero/transient-positive-state witness. Durrett does not give the exact two-state matrix below; that finite witness is verified directly."
provenance:
  statement: ai-altered
  proof: ai-altered
---

## Statement refuted

The false assertion is that recurrence or transience must be shared by all states in a Markov chain, including states in different communicating classes.

## Facts & Assumptions

**Given:** The two-state space $E=\{0,1\}$ and transition matrix
$$p(0,0)=1,\quad p(0,1)=0,\quad p(1,0)=\tfrac12,\quad p(1,1)=\tfrac12.$$

[F1] States communicate exactly when each is accessible from the other, and $x\to y$ means $p^{(n)}(x,y)>0$ for some $n\ge0$. ([[def-accessibility-communication-and-irreducibility]])

[F2] The zero-step matrix is $p^{(0)}(x,y)=\mathbf 1_{\{x=y\}}$. ([[def-transition-matrix-and-n-step-transition-probabilities]])

[F3] The matrix powers satisfy $p^{(m+n)}(x,y)=\sum_{z\in E}p^{(m)}(x,z)p^{(n)}(z,y)$ for $m,n\ge0$. ([[lem-matrix-chapman-kolmogorov-equations]])

[F4] The positive return time is $T_x^+=\inf\{n\ge1:X_n=x\}$. ([[def-hitting-return-and-visit-times]])

[F5] State $x$ is recurrent if $\mathbb P_x(T_x^+<\infty)=1$ and transient if this probability is less than one. ([[def-recurrent-and-transient-state]])

## Counterexample

1.1 The entries of $p$ are nonnegative and its two row sums are $1+0=1$ and $\tfrac12+\tfrac12=1$, so the displayed table is a stochastic matrix. [given]

1.2 The row from $0$ is concentrated at $0$. By induction using [F3], $p^{(n)}(0,0)=1$ and $p^{(n)}(0,1)=0$ for every $n\ge0$. Meanwhile $p^{(1)}(1,0)=\tfrac12>0$, so $1\to0$ but $0\not\to1$. By [F1] and the zero-step identity [F2], the communication relation on these two states is equality; hence its two communicating classes are $\{0\}$ and $\{1\}$. [F1, F2, F3, given]

1.3 From state $0$, the chain stays at $0$ at every step because $p(0,0)=1$. Thus $T_0^+=1$ almost surely and $\mathbb P_0(T_0^+<\infty)=1$; state $0$ is recurrent by [F5]. [F4, F5, given]

1.4 From state $1$, $T_1^+=1$ on the first-step transition to $1$, which has probability $\tfrac12$. On the other first-step transition, $X_1=0$ and the chain then stays at $0$, so $T_1^+=\infty$. Hence $\mathbb P_1(T_1^+<\infty)=\tfrac12<1$, and state $1$ is transient by [F4, F5, given]. This verifies the claimed difference in recurrence type across the two distinct classes. [F4, F5, given]

2.1 The witness has two states, so the empty-space and one-state cases cannot arise here. The zero transition $p(0,1)=0$ is essential to the class separation, and the absorbing row at $0$ supplies the no-return branch from $1$. The return time starts at $n=1$, so the initial visit at time zero is not counted. The computation uses only the explicit finite transition table and no choice function; it proves a one-way counterexample, not an iff statement. [F1, F2, F4, F5, step 1.2, step 1.3, step 1.4, given] ∎
