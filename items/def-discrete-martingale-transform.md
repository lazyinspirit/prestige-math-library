---
id: "def-discrete-martingale-transform"
kind: "definition"
title: "Discrete martingale transform"
deps: ["def-adapted-and-integrable-stochastic-process", "def-predictable-discrete-time-process", "thm-linearity-of-the-lebesgue-integral-on-l-one", "thm-arithmetic-and-lattice-operations-preserve-measurability", "prop-order-and-scalar-rules-for-the-nonnegative-integral", "cor-integral-over-a-null-set-vanishes"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
status: published
origin: "pipeline"
---

## Definition

Let $X$ be an adapted integrable real process [[def-adapted-and-integrable-stochastic-process]] and let $H$ be finite real predictable [[def-predictable-discrete-time-process]]. Provided
$$E|H_k(X_k-X_{k-1})|<\infty\qquad(k\ge1),$$
define the **discrete transform** by
$$(H\mathbin\cdot X)_0=0,\qquad (H\mathbin\cdot X)_n=\sum_{k=1}^nH_k(X_k-X_{k-1})\quad(n\ge1).$$
For a martingale integrator this is its **martingale transform**. The product-integrability condition is part of the domain.

The finite-integral facts used here can be recovered without the published simple-display gap. Augment every finite disjoint display of a nonnegative simple function by the complement of its displayed sets with coefficient $0$. Intersections of two augmented displays partition the whole space, and equality of the functions forces equal coefficients on every nonempty cell. Finite additivity and $0\cdot(+\infty)=0$ prove representation independence. Common refinements give simple monotonicity and additivity; homogeneity is direct for scalar $0$ and termwise for a positive scalar. Taking suprema over simple minorants, using increasing simple approximations and the sets $\{f_j\ge cs\}$ for $0<c<1$, gives monotone convergence and nonnegative additivity. Positive/negative and real/imaginary decompositions then give finite $L^1$ linearity.

The two factors of the $k$th summand are $\mathcal F_k$-measurable because $\mathcal F_{k-1}\subseteq\mathcal F_k$. Measurable arithmetic [[thm-arithmetic-and-lattice-operations-preserve-measurability]] makes the product measurable; it is integrable by hypothesis. Every finite sum is therefore $\mathcal F_n$-measurable and integrable by the locally reconstructed linearity (the unaffected remainder of [[thm-linearity-of-the-lebesgue-integral-on-l-one]] gives the same calculation). At zero the sum is empty and equals zero.

A useful sufficient condition is $|H_k|\le C_k$ a.s. with deterministic $0\le C_k<\infty$, separately at each time. On the complement of its measurable null failure set,
$$|H_k(X_k-X_{k-1})|\le C_k(|X_k|+|X_{k-1}|).$$
The integral on the failure set is zero by [[cor-integral-over-a-null-set-vanishes]]; the locally reconstructed monotonicity, positive homogeneity and finite linearity give
$$E|H_k(X_k-X_{k-1})|\le C_k(E|X_k|+E|X_{k-1}|)<\infty.$$
No uniform bound in time is needed. Changing measurable representatives at finitely many relevant times changes a finite sum only on the finite union of their measurable null discrepancy sets. Outside the stipulated domain the same algebraic sum may be finite pointwise but is not an integrable transform. These finite arithmetic and integral arguments are choice-free.
