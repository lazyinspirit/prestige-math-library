---
id: thm-time-reversal-of-a-stationary-markov-chain
kind: theorem
title: "Time reversal of a stationary Markov chain"
status: draft
origin: pipeline
landmark: false
deps:
  - def-axiom-of-choice
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - thm-invariant-initial-law-makes-the-chain-stationary
  - def-reversible-measure-and-detailed-balance
  - thm-finite-dimensional-laws-of-a-markov-chain
  - cor-canonical-markov-chain-on-path-space
  - def-transition-matrix-and-n-step-transition-probabilities
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition, §5.5–5.6, reversibility and time reversal"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Levin–Peres–Wilmer, Markov Chains and Mixing Times, second edition, §21.3 and Appendix C.1"
      url: https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf
---

## Statement

Assume AC ([[def-axiom-of-choice]]). Let $p$ be a countable transition matrix
([[def-transition-matrix-and-n-step-transition-probabilities]]) with invariant
probability $\pi$ ([[def-invariant-and-stationary-distribution-for-a-markov-kernel]]),
let $X$ be a $p$-chain started in $\pi$ and let $E_+:=\{x\in E:\pi(x)>0\}$.
Define the **reverse kernel** on $E_+$ by

$$p_*(x,y):=\frac{\pi(y)\,p(y,x)}{\pi(x)},\qquad x\in E_+,\ y\in E .$$

Then:

1. $p_*$ extended by $p_*(x,y)=0$ for $y\notin E_+$ is a transition matrix on
   $E_+$, and $\pi$ restricted to $E_+$ is invariant for it; no mass ever
   leaves $E_+$.
2. Every finite path segment of $X$ read backward is distributed as a
   $p_*$-chain started in $\pi$: for every $r\ge1$ and
   $0\le n_0<\cdots<n_r$,
   $$\mathcal L(X_{n_r},\ldots,X_{n_0})=\mathcal L(X^*_0,X^*_{n_r-n_{r-1}},\ldots,X^*_{n_r-n_0}),$$
   where $X^*$ is a stationary $p_*$-chain with initial law $\pi$.
3. Detailed balance for $\pi$ and $p$
   ([[def-reversible-measure-and-detailed-balance]]) is equivalent to
   $p_*(x,y)=p(x,y)$ for all $x,y\in E_+$.
4. Rows at states outside $E_+$ carry no stationary mass and may be chosen
   arbitrarily (for instance all equal to $\delta_{y_0}$ for a fixed
   $y_0\in E_+$) if a kernel on all of $E$ is desired.

## Facts & Assumptions

**Given:** AC, a countable $E$, a transition matrix $p$ with invariant probability $\pi$, a $p$-chain $X$ started in $\pi$, and $E_+=\{x:\pi(x)>0\}$.

[A1] Every family of nonempty sets has a choice function; AC is assumed and is used through the stationary-chain, finite-dimensional-law and chain-construction suppliers [F2], [F3] and [F5]. ([[def-axiom-of-choice]])

[F1] On a countable state space $\pi$ is invariant exactly when $\pi(y)=\sum_{x\in E}\pi(x)p(x,y)$ for every $y\in E$, and rows of $p$ sum to one with $p(x,y)\ge0$. ([[def-invariant-and-stationary-distribution-for-a-markov-kernel]], [[def-transition-matrix-and-n-step-transition-probabilities]])

[F2] If a chain has invariant initial law $\pi$, then every finite-dimensional law is shift-invariant; in particular $X_n$ has law $\pi$ for every $n$. ([[thm-invariant-initial-law-makes-the-chain-stationary]])

[F3] Assume Choice. For a $K$-chain with initial law $\mu$, times $0\le n_0<\cdots<n_r$ and bounded measurable $f_j$, $\mathbb E\prod_{j=0}^rf_j(X_{n_j})=\int_E\mu(dx)\int_EK^{n_0}(x,dx_0)f_0(x_0)\prod_{j=1}^r\int_EK^{n_j-n_{j-1}}(x_{j-1},dx_j)f_j(x_j)$. ([[thm-finite-dimensional-laws-of-a-markov-chain]])

[F4] A state measure $\mu$ satisfies detailed balance for $p$ when $\mu(x)p(x,y)=\mu(y)p(y,x)$ for all $x,y$. ([[def-reversible-measure-and-detailed-balance]])

[F5] Assume Choice. For an initial probability and a probability kernel, a canonical chain exists on the product path space with that initial law and kernel. ([[cor-canonical-markov-chain-on-path-space]])

## Proof

**Given:** AC, a countable $E$, a transition matrix $p$ with invariant probability $\pi$, and a stationary $p$-chain $X$ started in $\pi$.

**Proof technique:** check that the normalized backward transition ratios form a stochastic matrix preserving $\pi$, then verify the reversal by telescoping products of transition probabilities, and read off the detailed-balance equivalence.

1.1 If $x\in E_+$ and $y\notin E_+$ then $p(x,y)=0$: otherwise $\pi(y)=\sum_{z}\pi(z)p(z,y)\ge\pi(x)p(x,y)>0$ by [F1], contradicting $\pi(y)=0$. Hence $\sum_{y\in E_+}p(x,y)=1$ for every $x\in E_+$. [F1, given]

1.2 The formula $p_*(x,y)=\pi(y)p(y,x)/\pi(x)$ is well defined for $x\in E_+$ because $\pi(x)>0$, and nonnegative; for $x\in E_+$ its row sum is $\sum_{y\in E}p_*(x,y)=\frac1{\pi(x)}\sum_y\pi(y)p(y,x)=\frac{(\pi p)(x)}{\pi(x)}=\frac{\pi(x)}{\pi(x)}=1$, using [F1]; since $\pi(y)=0$ for $y\notin E_+$, the extended entries $p_*(x,y)$ vanish off $E_+$, so $p_*$ is a transition matrix on $E_+$ and no mass leaves $E_+$. [F1, given]

2.1 The probability $\pi$ restricted to $E_+$ is invariant for $p_*$: for $y\in E_+$, $\sum_{x\in E_+}\pi(x)p_*(x,y)=\sum_{x\in E_+}\pi(y)p(y,x)=\pi(y)\sum_{x\in E_+}p(y,x)=\pi(y)$ by step 1.1, while for $y\notin E_+$ both sides vanish; this is precisely invariance in the countable form [F1]. [F1, step 1.1, given]

2.2 Detailed balance equivalence: for $x,y\in E_+$ the identity $\pi(x)p(x,y)=\pi(y)p(y,x)$ is equivalent, after dividing by the positive number $\pi(x)$, to $p(x,y)=\pi(y)p(y,x)/\pi(x)=p_*(x,y)$; if $x\in E_+$ and $y\notin E_+$, then $\pi(x)p(x,y)=0$ by step 1.1 and $\pi(y)p(y,x)=0$ because $\pi(y)=0$. The case $x\notin E_+$, $y\in E_+$ follows by exchanging $x$ and $y$; if both states are outside $E_+$, both weights vanish. Transitions from outside $E_+$ into $E_+$ need not vanish. Hence detailed balance for $\pi$ and $p$ holds for all pairs exactly when $p_*=p$ on $E_+\times E_+$. [F4, step 1.1, given]

3.1 By [F5] construct a $p_*$-chain $X^*$ on $E_+$ with initial law $\pi|_{E_+}$; it is stationary by [F2] and step 2.1. Consecutive-time reversal: for $n\ge0$ and states $x_0,\ldots,x_n\in E_+$, [F3] with $\mu=\pi$ (and indicators) gives $\mathbb P_\pi(X_0=x_0,\ldots,X_n=x_n)=\pi(x_0)\prod_{i=0}^{n-1}p(x_i,x_{i+1})$; reading the same word backward and using the definition of $p_*$, $\pi(x_n)\prod_{i=0}^{n-1}p_*(x_{i+1},x_i)=\pi(x_n)\prod_{i=0}^{n-1}\frac{\pi(x_i)p(x_i,x_{i+1})}{\pi(x_{i+1})}=\pi(x_0)\prod_{i=0}^{n-1}p(x_i,x_{i+1})$ after telescoping cancellation of the $\pi(x_i)$, $i=1,\ldots,n-1$; paths visiting $E\setminus E_+$ have probability zero by step 1.1, so $\mathcal L(X_n,\ldots,X_0)=\mathcal L(X^*_0,\ldots,X^*_n)$ for a stationary $p_*$-chain $X^*$ with initial law $\pi$, by [F3] and step 2.1. [F1, F2, F3, F5, step 1.1, step 2.1, algebra]

4.1 For every $r\ge1$ and $0\le n_0<\cdots<n_r$, step 3.1 at $n=n_r$ gives $\mathcal L(X_{n_r},\ldots,X_0)=\mathcal L(X^*_0,\ldots,X^*_{n_r})$. Taking the coordinates indexed by $0,n_r-n_{r-1},\ldots,n_r-n_0$ on both sides yields the asserted law of $(X_{n_r},\ldots,X_{n_0})$. [step 3.1, given]

5.1 Null rows: since $\pi(x)=0$ for $x\notin E_+$, such a state carries no stationary mass and does not appear in the reversal statements of items 1–3, which only involve paths with positive probability; if a kernel on all of $E$ is wanted, fix $y_0\in E_+$ (the set $E_+$ is nonempty because $\pi$ is a probability) and set $p_*(x,\cdot):=\delta_{y_0}$ for $x\notin E_+$, which is a probability row and leaves every assertion about $E_+$ unchanged. [step 1.2, step 4.1, given]

6.1 Boundary and axiom cases: if $E_+=E$ (the chain is irreducible and positive recurrent, or more generally $\pi$ has full support) then no null rows arise and clause 3 compares the two kernels on all of $E\times E$; if $E$ is a singleton, $p_*=p=1$ and both reversal and detailed balance are trivial; the reversal identity of step 3.1 is symmetric in the two directions and does not presuppose $p_*=p$, so the statement covers nonreversible stationary chains; AC [A1] is used in constructing $X^*$ through [F5], proving its stationarity through [F2], and computing finite-dimensional laws through [F3]; and all products and telescoping cancellations are finite, no infinite sum being rearranged. [A1, F2, F3, F5, step 3.1, step 2.2, given] ∎
