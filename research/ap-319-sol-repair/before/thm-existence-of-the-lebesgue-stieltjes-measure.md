---
id: thm-existence-of-the-lebesgue-stieltjes-measure
kind: theorem
title: "Assuming countable choice, a nondecreasing right-continuous function defines a Borel measure on $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-borel-measure-finite-on-compact-sets-on-r, thm-caratheodory-extension-theorem, thm-seven-generators-of-the-borel-sigma-algebra-on-r, thm-stieltjes-interval-set-function-is-a-premeasure, lem-compact-implies-closed-and-bounded-r]
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 1.16"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "John K. Hunter, Measure Theory, Theorem 2.34"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Assume the Axiom of Countable Choice. Let
$F : \mathbb{R} \to \mathbb{R}$ be nondecreasing and right-continuous. Then
there is a Borel measure $\mu_F$ on $\mathbb{R}$, finite on compact sets in the
sense of [[def-borel-measure-finite-on-compact-sets-on-r]], such that

$$\mu_F((a,b]) = F(b) - F(a) \qquad \text{for all } a < b.$$

## Facts & Assumptions

**Given:** Countable choice, a nondecreasing right-continuous function $F : \mathbb{R} \to \mathbb{R}$, and its interval set function $\mu_{0,F}$ on the half-open interval algebra.

[L1] The interval set function $\mu_{0,F}$ is a premeasure on the half-open interval algebra. ([[thm-stieltjes-interval-set-function-is-a-premeasure]])

[L2] Assuming countable choice, a premeasure extends to a measure on the sigma-algebra it generates. ([[thm-caratheodory-extension-theorem]])

[L3] The family of half-open intervals $(a,b]$ with $a < b$ generates the Borel sigma-algebra $\mathcal{B}(\mathbb{R})$. ([[thm-seven-generators-of-the-borel-sigma-algebra-on-r]])

[L4] A compact subset of $\mathbb{R}$ is bounded. ([[lem-compact-implies-closed-and-bounded-r]])

## Proof

**Proof technique:** direct.

1.1 By [L1], $\mu_{0,F}$ is a premeasure, so [L2] gives a measure $\mu$ on the generated sigma-algebra $\sigma(\mathcal{H})$ extending $\mu_{0,F}$. [L1, L2, L3]

By [L3], that sigma-algebra is $\mathcal{B}(\mathbb{R})$, and therefore

$$\mu((a,b]) = \mu_{0,F}((a,b]) = F(b) - F(a)$$

for every $a < b$. [L1, L2, L3]

2.1 Let $K \subseteq \mathbb{R}$ be compact. By [L4] there is $R > 0$ with $K \subseteq [-R,R] \subseteq (-R-1,R]$. [step 1.1, L4, algebra]

So monotonicity and step 1.1 give

$$\mu(K) \le \mu((-R-1,R]) = F(R) - F(-R-1) < +\infty.$$

Thus $\mu$ is finite on compact sets. [step 1.1, L4, algebra]

3.1 The measure $\mu$ of steps 1.1 and 2.1 is therefore a Borel measure on $\mathbb{R}$ finite on compact sets and having the prescribed half-open interval values. [step 1.1, step 2.1]

This is the required $\mu_F$. [step 1.1, step 2.1] ∎
