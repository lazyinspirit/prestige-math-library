---
dependency_level: 9
id: lem-dynamical-potential-is-potential-of-a-probability-measure
kind: lemma
title: "The dynamical potential is represented by a probability measure"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-tychonoff
  - lem-positive-c-zero-functionals-have-finite-regular-representing-measures
  - lem-homogeneous-polynomial-pair-has-finite-tree-probability-potential
  - lem-berkovich-rooted-tree-finite-retractions-and-laplacian
  - lem-berkovich-dynamical-green-kernel-continuous-extension
  - thm-monotone-convergence-for-the-integral
  - lem-closed-interval-compactness-from-completeness
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Robert Rumely and Matthew Baker, Analysis and dynamics on the Berkovich projective line, §§3.2–3.3 and §7.5, local finite-tree reconstruction"
      url: "https://arxiv.org/pdf/math/0407433v1"
verification: {}
---
## Statement

Assume the Axiom of Choice. Let $L$ be complete, algebraically closed and nontrivially nonarchimedean, let $F$ be a nondegenerate homogeneous degree-$d$ lift with $d\ge2$, and let $q_F$ be its continuous potential on $X=\mathbb P^{1,\mathrm{an}}_L$. With Gauss root $o$ and $J=-\log\delta$, there exists a regular Borel probability $\mu$ such that
$$u_\mu(x):=\int_X J(x,y)\,d\mu(y)=q_F(o)-q_F(x)\qquad(x\in X).$$
In particular this potential is finite and continuous and $\mu$ has no atoms at classical points. This assertion does not yet claim the resultant-normalized Green integral is zero or that $\mu$ is invariant.

## Statement references

[[def-axiom-of-choice]]

[[lem-berkovich-dynamical-green-kernel-continuous-extension]]

## Facts & Assumptions

**Given:** The field, map, lift, root and kernel in the statement.

[F1] Each homogeneous iterate gives a discrete probability $\mu_n$ with $u_{\mu_n}(x)=Q_n(o)-Q_n(x)$, where $Q_n=d^{-n}\log\max(|F_1^{\circ n}|,|F_2^{\circ n}|)$ in unit charts. These $Q_n$ converge uniformly to $q_F$. ([[lem-homogeneous-polynomial-pair-has-finite-tree-probability-potential]], [[lem-berkovich-dynamical-green-kernel-continuous-extension]])

[F2] The projective line is compact Hausdorff, and $J(x,\cdot)$ is bounded continuous for nonclassical $x$. The kernel is common root-path length. ([[lem-berkovich-rooted-tree-finite-retractions-and-laplacian]], [[lem-berkovich-dynamical-green-kernel-continuous-extension]])

[F3] Under Dependent Choice, a bounded positive functional on $C_0$ of a locally compact Hausdorff space has a finite regular representing measure with mass equal to its norm. ([[lem-positive-c-zero-functionals-have-finite-regular-representing-measures]])

[F4] Closed bounded real intervals are compact, and products of compact spaces are compact under Choice. Increasing nonnegative measurable functions may be integrated by monotone convergence. ([[lem-closed-interval-compactness-from-completeness]], [[thm-tychonoff]], [[thm-monotone-convergence-for-the-integral]])

[A1] Full Choice supplies the compact product and implies the Dependent Choice needed in [F3]. ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]])

## Proof

1.1 Regard each probability $\mu_n$ as the positive norm-one functional $\Lambda_n(f)=\int f\,d\mu_n$ on the real space $C(X)$. Place these functionals in the product $P=\prod_{f\in C(X)}[-\|f\|_\infty,\|f\|_\infty]$. By [F4] and [A1] this product is compact. Linearity, positivity on each nonnegative $f$, and $\Lambda(1)=1$ are closed coordinate conditions; hence their intersection is a compact set containing all $\Lambda_n$. The closures of the tails of this sequence have the finite-intersection property, so have a common point $\Lambda$. It is bounded, positive, linear and has norm1. By [F3], since compact Hausdorff $X$ is locally compact and $C_0(X)=C(X)$, it is integration against a regular Borel probability $\mu$. This uses a compact-product cluster point, not sequential compactness. [F2, F3, F4, A1, algebra]

1.2 For every nonclassical $x$, the test function $J(x,\cdot)$ belongs to $C(X)$ by [F2]. By [F1], its values under $\Lambda_n$ tend to $q_F(o)-q_F(x)$. A cluster point of all sequence tails has the same coordinate limit, so $u_\mu(x)=q_F(o)-q_F(x)$ at every nonclassical point. [F1, F2, step 1.1, algebra]

2.1 For a classical point $a$, let $x_t$ be its ancestor at root depth $t$, represented by radius $e^{-t}$ in its unit chart. By the common-path formula in [F2], $J(x_t,y)=\min(t,J(a,y))$ for every $y$, increasing to $J(a,y)$ as $t\to\infty$. These bounded continuous functions are measurable, so [F4] gives $u_\mu(a)=\lim_{m\to\infty}u_\mu(x_m)$. On the other hand $x_m\to a$ in the seminorm topology, and $q_F$ is continuous by [F1]. Step1.2 therefore gives $u_\mu(a)=q_F(o)-q_F(a)$ as well. The right side is continuous and finite on all of $X$. If $\mu\{a\}>0$, the value $J(a,a)=+\infty$ would force $u_\mu(a)=+\infty$, a contradiction. This proves the final claims. [F1, F2, F4, step 1.2, algebra] ∎
