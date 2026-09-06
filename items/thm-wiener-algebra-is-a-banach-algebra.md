---
id: thm-wiener-algebra-is-a-banach-algebra
kind: theorem
title: "The Wiener algebra is a unital commutative Banach algebra"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-wiener-algebra-of-the-circle, lem-absolutely-summable-fourier-coefficients-give-uniform-convergence]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes, Definition 4.1 and Theorem 4.2"
      url: "https://arxiv.org/pdf/0903.3845"
---

## Statement

Assume the Axiom of Countable Choice. Under pointwise operations on the continuous representatives, $A(\mathbb T)$ is a commutative unital Banach algebra. Its unit is $e_0=1$, and
$$\|fg\|_A\le\|f\|_A\|g\|_A.$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, functions $f,g\in A(\mathbb T)$, and their absolutely summable coefficient sequences.

[L1] Every $\ell^1$ coefficient sequence has the continuous uniform synthesis stated in [[lem-absolutely-summable-fourier-coefficients-give-uniform-convergence]].

## Proof

**Proof technique:** direct.

1.1 For finite Fourier sums, multiplying and collecting equal frequencies gives $\widehat{fg}(n)=\sum_k\widehat f(k)\widehat g(n-k)$. [given, algebra]

2.1 Truncate both coefficient series. By [L1] the truncations converge uniformly, and their convolution coefficients converge in $\ell^1$ because $\ell^1*\ell^1\subseteq\ell^1$; thus the formula in step 1.1 holds for $f,g$. [L1, step 1.1, algebra]

3.1 Tonelli's theorem for the nonnegative double series gives $$\|fg\|_A\le\sum_{n,k}|\widehat f(k)||\widehat g(n-k)|=\|f\|_A\|g\|_A.$$ [step 2.1, algebra]

4.1 The coefficient map is an isometric bijection from $A(\mathbb T)$ to $\ell^1(\mathbb Z)$ by [L1]; completeness, commutativity, and the unit therefore follow from those of $\ell^1$ and $\delta_0$. [L1, step 3.1, algebra] ∎
