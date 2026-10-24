---
id: def-aperiodic-chain
kind: definition
title: "Aperiodic irreducible chain"
status: published
origin: pipeline
deps:
  - def-accessibility-communication-and-irreducibility
  - def-transition-matrix-and-n-step-transition-probabilities
  - lem-matrix-chapman-kolmogorov-equations
  - def-period-of-a-state
  - lem-period-is-constant-on-a-communicating-class
proof_strategy: direct
landmark: false
sources:
  references:
    - title: "Levin, Peres and Wilmer, Markov Chains and Mixing Times, second edition"
      url: "https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf"
      locator: "§1.3, Irreducibility and Aperiodicity, printed pp. 7–8/PDF pp. 23–24: after Lemma 1.6 the source defines the chain period as the common state period and calls it aperiodic when that period is 1. The section is in the finite-state chapter; this item applies the same convention to countable E after locally verifying positive returns and using the countable-state period lemma."
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  audited: 2026-09-30
---

## Definition

Let $p$ be an irreducible transition matrix on a nonempty countable state space $E$. The periods $d(x)$ are independent of $x$ by [[lem-period-is-constant-on-a-communicating-class]], and the verification below shows their common value is positive. Define the **period of the chain** by $\operatorname{per}(p):=d(x)$ for any $x\in E$. The chain is **aperiodic** when $\operatorname{per}(p)=1$.

## Facts & Assumptions

**Given:** A nonempty countable state space $E$ and an irreducible transition matrix $p$ on $E$.

[F1] Every transition-matrix power has a stochastic row: $\sum_{y\in E}p^{(n)}(x,y)=1$. ([[def-transition-matrix-and-n-step-transition-probabilities]])

[F2] The zero-step matrix is $p^{(0)}(x,y)=\mathbf1_{\{x=y\}}$. ([[def-transition-matrix-and-n-step-transition-probabilities]])

[F3] Irreducibility means every pair of states communicates. ([[def-accessibility-communication-and-irreducibility]])

[F4] Accessibility is witnessed by a finite $n\in\mathbb N_0$ with $p^{(n)}(x,y)>0$. ([[def-accessibility-communication-and-irreducibility]])

[F5] The positive return set is $R_x=\{n\ge1:p^{(n)}(x,x)>0\}$; if it is nonempty, $d(x)$ is its greatest common positive divisor, while $d(x)=0$ if $R_x=\varnothing$. ([[def-period-of-a-state]])

[F6] For $r,s\ge0$, $p^{(r+s)}(x,z)=\sum_{w\in E}p^{(r)}(x,w)p^{(s)}(w,z)$. ([[lem-matrix-chapman-kolmogorov-equations]])

[F7] Communicating states have equal periods, including the convention that a state with no positive return has period zero. ([[lem-period-is-constant-on-a-communicating-class]])

## Verification

**Proof technique:** verify that the common state period exists and is positive, then use it to define aperiodicity.

1.1 For each $x\in E$, $R_x$ is nonempty. If $E=\{x\}$, [F1] gives $p(x,x)=1$, so $p^{(1)}(x,x)>0$. If $E$ has at least two states, fix an arbitrary $x$ and take $y\ne x$; by [F3]–[F4], there are $r,s\in\mathbb N_0$ with $p^{(r)}(x,y)>0$ and $p^{(s)}(y,x)>0$. Since $x\ne y$, [F2] forces $r,s\ge1$, and [F6] gives $p^{(r+s)}(x,x)\ge p^{(r)}(x,y)p^{(s)}(y,x)>0$. Thus $d(x)$ is a positive integer by [F5] in either case. [F1, F2, F3, F4, F5, F6, given]

2.1 For any $x,y\in E$, irreducibility [F3] makes them communicate, so [F7] gives $d(x)=d(y)$. Step 1.1 shows this common value is positive. It is therefore independent of the chosen state and defines $\operatorname{per}(p)$; declaring aperiodicity by the condition $\operatorname{per}(p)=1$ is well-defined. [F3, F5, F7, step 1.1, given]

3.1 The empty state space is excluded in the definition because no state period could be chosen as a common value. For a one-state chain, step 1.1 gives period one and hence aperiodicity. On a deterministic cycle of length $k\ge1$, label the states $x_0,\ldots,x_{k-1}$ and let the transition from $x_j$ go to $x_{(j+1)\bmod k}$ with probability one. Iteration gives $p^{(n)}(x_j,x_j)=1$ when $k$ divides $n$ and zero otherwise, so positive return times are precisely the positive multiples of $k$ and the period is $k$; a one-state absorbing chain is the case $k=1$. The return set begins at $n=1$, so $p^{(0)}(x,x)=1$ does not make every chain aperiodic. The proof uses only fixed-pair routes and finite row sums, with no choice function or AC. This is a definition, not an iff theorem. [F1, F2, F3, F5, F6, F7, step 1.1, step 2.1, given] ∎
