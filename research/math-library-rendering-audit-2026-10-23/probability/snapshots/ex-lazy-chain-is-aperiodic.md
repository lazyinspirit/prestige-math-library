---
id: ex-lazy-chain-is-aperiodic
kind: example
title: "Laziness makes an irreducible chain aperiodic"
status: published
origin: pipeline
deps:
  - def-aperiodic-chain
  - def-period-of-a-state
  - def-accessibility-communication-and-irreducibility
  - def-transition-matrix-and-n-step-transition-probabilities
  - lem-matrix-chapman-kolmogorov-equations
  - def-nonnegative-extended-series
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
    - title: "Levin, Peres and Wilmer, Markov Chains and Mixing Times, second edition"
      url: "https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf"
      locator: "§1.3, Irreducibility and Aperiodicity: irreducibility and period definitions, Lemma 1.6, the lazification paragraph and Example 1.8, printed pp. 7–8/PDF pp. 22–23 (official PDF parser lines 782–888). The section is in the finite-state introduction: it defines Q=(I+P)/2, notes Q(x,x)>0 for all x, and calls the irreducible lazy chain aperiodic; Example 1.8 checks the lazy cycle. This item locally proves stochasticity, accessibility preservation, and the all-state period-one claim for nonempty at most countable E."
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Example

Let $E$ be a nonempty at most countable state space and let $p$ be an irreducible transition matrix on $E$. Define the identity matrix by $I(x,y)=\mathbf 1_{\{x=y\}}$ and put $q=(I+p)/2$, entrywise. Then $q$ is an irreducible aperiodic transition matrix on $E$.

The finite-state discussion in Levin–Peres–Wilmer §1.3 motivates this lazification: the identity contribution gives every state a positive one-step self-loop. The countable-state argument below checks directly that $q$ is stochastic, preserves every positive accessibility route, and has period one at every state.

## Verification

**Given:** A nonempty at most countable set $E$ and an irreducible transition matrix $p$ on $E$.

[F1] Transition-matrix iterates have nonnegative entries and stochastic rows; in particular, each row sums to one. ([[def-transition-matrix-and-n-step-transition-probabilities]])

[F2] For any countable transition matrix $s$ and $m,n\ge0$, $s^{(m+n)}(x,y)=\sum_{z\in E}s^{(m)}(x,z)s^{(n)}(z,y)$. ([[lem-matrix-chapman-kolmogorov-equations]])

[F3] Accessibility means $x\to y$ exactly when $p^{(n)}(x,y)>0$ for some $n\in\mathbb N_0$; irreducibility means every ordered pair is accessible. ([[def-accessibility-communication-and-irreducibility]])

[F4] The positive return set is $R_x=\{n\ge1:p^{(n)}(x,x)>0\}$, and when nonempty the state period is its greatest common positive divisor. ([[def-period-of-a-state]])

[F5] For an irreducible transition matrix on a nonempty countable state space, the chain is aperiodic when its common state period is one. ([[def-aperiodic-chain]])

[F6] A nonnegative countable sum is the supremum of its finite partial sums; termwise inequalities and multiplication by a fixed positive constant therefore preserve the corresponding sum inequality. ([[def-nonnegative-extended-series]])

[F7] The n-step entries are $p^{(n)}(x,y)=K^n(x,\{y\})$, with $p^{(0)}(x,y)=\mathbf1_{\{x=y\}}$. ([[def-transition-matrix-and-n-step-transition-probabilities]])

**Proof technique:** prove the lazy matrix is stochastic, compare its powers with those of the original matrix, and use the added one-step returns.

1.1 For every $x,y\in E$, $q(x,y)=\tfrac12\mathbf1_{\{x=y\}}+\tfrac12p(x,y)\ge0$ and $\sum_{y\in E}q(x,y)=\tfrac12\sum_y\mathbf1_{\{x=y\}}+\tfrac12\sum_yp(x,y)=\tfrac12+\tfrac12=1$ by [F1]. Thus $q$ is a transition matrix. [F1, F6, given]

2.1 For each $x\in E$, $q(x,x)=\tfrac12+\tfrac12p(x,x)\ge\tfrac12>0$. Hence $q^{(1)}(x,x)>0$, so $1\in R_x(q)$ by [F4]; the only positive integer dividing $1$ is $1$, and therefore $d_q(x)=1$ for every state. [F1, F4, step 1.1, given]

2.2 For every $n\in\mathbb N_0$ and $x,y\in E$, $q^{(n)}(x,y)\ge2^{-n}p^{(n)}(x,y)$. This is equality for $n=0$ by [F7]. If it holds at $n$, then $q(z,y)\ge\tfrac12p(z,y)$ and Chapman–Kolmogorov [F2] give $q^{(n+1)}(x,y)=\sum_zq^{(n)}(x,z)q(z,y)\ge2^{-(n+1)}\sum_zp^{(n)}(x,z)p(z,y)=2^{-(n+1)}p^{(n+1)}(x,y)$; the sum comparison follows from [F6]. Induction proves the bound. [F2, F6, F7, step 1.1, given]

3.1 Fix any ordered pair $x,y\in E$. By irreducibility and [F3], some $n\ge0$ satisfies $p^{(n)}(x,y)>0$. If $x=y$ and $n=0$, then $q^{(0)}(x,x)=1$; otherwise step 2.2 gives $q^{(n)}(x,y)\ge2^{-n}p^{(n)}(x,y)>0$. Thus every ordered pair is accessible for $q$, so $q$ is irreducible. [F3, step 2.2, given]

4.1 The empty space is excluded by the nonempty hypothesis. If $E$ has one state, [F1] forces its sole entry to be $1$, and step 2.1 gives period one. Zero entries of $p$ are allowed: off-diagonal zeros remain zero in $q$, while each originally positive entry stays positive by step 2.2; deterministic cycles also gain the positive one-step return from step 2.1. The period uses positive return times $n\ge1$, so the identity at $n=0$ is not the reason for period one. There is no boundary or endpoint parameter in this matrix statement. The proof uses only pointwise matrix arithmetic and a finite induction, so it requires no choice function or AC; the claim is not an iff statement. [F1, F4, step 1.1, step 2.1, step 2.2, step 3.1, given]

5.1 Step 3.1 proves that $q$ is irreducible, and step 2.1 proves that every one of its state periods equals $1$. Thus the periods are common and the chain has period one; by [F5], $q$ is aperiodic. [F5, step 2.1, step 3.1, step 4.1, given] ∎
