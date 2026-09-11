---
id: "lem-product-rectangle-kernels-are-dense-in-complex-l-two"
kind: "lemma"
title: "Product rectangle kernels are dense in complex l two"
deps: ["lem-finite-rectangle-unions-form-a-generating-algebra", "lem-finite-measure-sets-are-approximable-by-a-generating-algebra", "thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p", "thm-completion-measurable-functions-have-base-measurable-representatives", "thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Axler 10.70 p.314; local generating-algebra proof replaces the last section-quantifier step
      url: https://measure.axler.net/MIRA.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume AC. On the completed product of two finite measure spaces, finite complex linear combinations of rectangle indicators $\mathbf1_E(x)\mathbf1_F(y)$ are dense in complex $L^2$. Consequently a kernel pairing to zero against every rectangle indicator is the zero $L^2$ class.

## Facts & Assumptions

[F1] Finite disjoint rectangle unions form an algebra generating the product sigma-algebra [[lem-finite-rectangle-unions-form-a-generating-algebra]].

[F2] In a finite measure space, every measurable set is approximable in symmetric difference by a generating algebra [[lem-finite-measure-sets-are-approximable-by-a-generating-algebra]].

[F3] Complex finite simple functions are dense in finite-exponent $L^p$ [[thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p]].

[F4] Under countable choice every completion-measurable real function has a base-measurable a.e. representative [[thm-completion-measurable-functions-have-base-measurable-representatives]].

[F5] The complex pairing satisfies Cauchy–Schwarz and induces the $L^2$ norm [[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]].

[F6] AC supplies countable choice [[def-axiom-of-choice]].

## Proof

**Given:** Finite measure spaces $(X,\mathcal A,\mu)$ and $(Y,\mathcal B,\nu)$, a complex kernel $k$ in their completed product $L^2$, and $\varepsilon>0$.

1.1 Apply the representative theorem separately to the real and imaginary parts of $k$. The resulting base-measurable functions equal those components a.e.; their sets of infinite values are base-measurable and null. Replacing their infinite values by zero and combining them gives a finite complex product-measurable representative $k_0$ of $k$. Its norm is unchanged. AC supplies the countable choice required in this step. [F4, F6]

2.1 The uncompleted product has finite mass $\mu(X)\nu(Y)$. On it choose a finite simple function $s=\sum_{j=1}^m c_j\mathbf1_{E_j}$ with $\|k_0-s\|_2<\varepsilon/2$. Terms with zero coefficient may be removed. If no terms remain, the zero rectangle combination already approximates $k$ within $\varepsilon$. [F3, step 1.1]

3.1 Otherwise put $B=\sum_{j=1}^m|c_j|>0$ and $\delta=(\varepsilon/(2B))^2$. By the generating-algebra approximation choose, for each of these finitely many $j$, a finite disjoint rectangle union $R_j$ with $(\mu\otimes\nu)(E_j\mathbin\triangle R_j)<\delta$. Since $\|\mathbf1_{E_j}-\mathbf1_{R_j}\|_2$ is the square root of that measure, the triangle inequality gives $\|s-\sum_jc_j\mathbf1_{R_j}\|_2< B\sqrt\delta=\varepsilon/2$. Each $\mathbf1_{R_j}$ is a finite sum of disjoint rectangle indicators. Combined with step 2.1 this proves density, on the completion as well because the norms of base-measurable functions agree with their completed norms. [F1, F2, F5, step 2.1]

4.1 If $\langle k,\mathbf1_{E\times F}\rangle=0$ for every rectangle, conjugate-linearity gives $\langle k,R\rangle=0$ for every finite complex rectangle combination $R$. For each $\varepsilon>0$ choose such $R$ with $\|k-R\|_2<\varepsilon$ by step 3.1. Then $\|k\|_2^2=|\langle k,k-R\rangle|\le\|k\|_2\varepsilon$. If $\|k\|_2>0$, division and arbitrarily small $\varepsilon$ give a contradiction; thus $k=0$. When either factor has zero total measure, every class is zero and all assertions hold with $R=0$. No exchange of a universal test-function quantifier with an a.e. section quantifier is used. [F5, step 3.1] ∎
