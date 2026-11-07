---
dependency_level: 10
id: lem-dynamical-probability-invariance-and-green-normalization
kind: lemma
title: "Invariance and resultant normalization of the dynamical probability"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - lem-dynamical-potential-is-potential-of-a-probability-measure
  - lem-positive-berkovich-potentials-determined-by-classical-values
  - lem-berkovich-log-kernel-positive-energy-and-uniqueness
  - lem-dynamical-green-pullback-at-classical-points
  - lem-rational-map-continuous-action-on-berkovich-projective-line
  - lem-berkovich-dynamical-green-kernel-continuous-extension
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Matthew Baker, A Finiteness Theorem for Canonical Heights Attached to Rational Maps over Function Fields, Theorem3.14 and AppendixA, normalization argument; finite-tree adaptation"
      url: "https://arxiv.org/pdf/math/0601046v2"
    - title: "Robert Rumely and Matthew Baker, Analysis and dynamics on the Berkovich projective line, §7.5 and §7.7"
      url: "https://arxiv.org/pdf/math/0407433v1"
verification: {}
---
## Statement

Assume the Axiom of Choice. Let $L$ be complete, algebraically closed, nontrivially nonarchimedean and have a countable dense subfield. Let $\phi$ have degree $d\ge2$, let $F$ be a lift, and let $\mu$ be a probability representing its continuous potential by $u_\mu=q_F(o)-q_F$ with $J=-\log\delta$ and Gauss root $o$. Then $\phi_*\mu=\mu$ and the resultant-normalized Green kernel satisfies
$$\int g_\phi(x,y)\,d\mu(x)=0\qquad(y\in X).$$
Moreover it has the exact normalized form
$$g_\phi(x,y)=J(x,y)-u_\mu(x)-u_\mu(y)+\int u_\mu\,d\mu.$$
Thus for every regular Borel probability $\nu$, $\iint g_\phi\,d\nu\,d\nu\ge0$, with equality exactly for $\nu=\mu$. No analytic multiplicities over nonclassical targets are used.

## Statement references

[[def-axiom-of-choice]]

[[lem-dynamical-potential-is-potential-of-a-probability-measure]]

## Facts & Assumptions

**Given:** The field, map, lift, root, kernel and representing probability in the statement. Write $q=q_F$, $c=\log|R_F|/(d(d-1))$.

[F1] There exists a regular probability $\mu$ with finite continuous potential $u_\mu=q(o)-q$. ([[lem-dynamical-potential-is-potential-of-a-probability-measure]])

[F2] A positive probability whose potential agrees with a continuous function on classical points agrees with it everywhere; finite continuous potentials determine probabilities uniquely and satisfy the rooted energy principle. ([[lem-positive-berkovich-potentials-determined-by-classical-values]], [[lem-berkovich-log-kernel-positive-energy-and-uniqueness]])

[F3] At every classical target $y$, the Green pullback identity holds for all analytic sources, and the map on the compactification is continuous. ([[lem-dynamical-green-pullback-at-classical-points]], [[lem-rational-map-continuous-action-on-berkovich-projective-line]])

[F4] $g_\phi(x,y)=J(x,y)+q(x)+q(y)-c$, with $q$ bounded continuous, $g$ bounded below and continuous in each extended-real slice. ([[lem-berkovich-dynamical-green-kernel-continuous-extension]])

[F5] Tonelli applies to nonnegative kernels on finite probability products in this compact metrizable setting. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

[A1] Full Choice is inherited from the measure and compactification constructions. ([[def-axiom-of-choice]])

## Proof

1.1 By [F1] and [F4], for every $y$ the kernel is integrable in $x$ against $\mu$, and
$$\int g_\phi(x,y)\,d\mu(x)=u_\mu(y)+\int q\,d\mu+q(y)-c=q(o)+\int q\,d\mu-c=:C.$$
This is a finite real constant, since $u_\mu$ and $q$ are bounded. [F1, F4, algebra]

1.2 Let $\nu=\phi_*\mu$. It is a regular probability: for a Borel set $B$, compact subsets $K$ of $\phi^{-1}(B)$ approximate its $\mu$ mass by regularity, and $\phi(K)\subset B$ is compact with $\nu(\phi K)\ge\mu(K)$; inner regularity follows. Finite total mass then gives outer regularity by taking complements of compact subsets of the complement. Integrate [F3] at a classical target $y$. The $d$ right-hand kernel integrals all equal $C$ by step1.1, so
$$\int g_\phi(z,y)\,d\nu(z)=dC.$$
All terms are integrable: bounded-below kernels can first be shifted to be nonnegative, and the finite right side then proves finiteness of the left side. [F1, F3, F4, step 1.1, algebra]

2.1 Expanding the last identity with [F4] shows on classical $y$ that
$$u_\nu(y)=dC-q(y)-\int q\,d\nu+c.$$
The right side is a continuous real function on all of $X$, so [F2] proves this equality everywhere. At $y=o$, the left side is zero because $J(o,z)=0$. Thus the constant on the right is $q(o)$, and $u_\nu=q(o)-q=u_\mu$. Uniqueness in [F2] gives $\nu=\mu$. Comparing step1.2 with step1.1 at any classical target now gives $dC=C$, hence $C=0$. This proves invariance and the normalization. [F1, F2, F4, step 1.1, step 1.2, algebra]

2.2 The identity $C=0$ gives $c=q(o)+\int q\,d\mu$. Therefore
$$\int u_\mu\,d\mu=q(o)-\int q\,d\mu=2q(o)-c.$$
Substitute $q=q(o)-u_\mu$ in [F4] to obtain the stated normalized kernel form. Its double integral against $\nu$ is exactly the rooted energy functional of [F2], so is nonnegative and vanishes only at $\mu$. The two bounded potential terms are integrable; the nonnegative $J$ term is handled by [F5], so this statement is meaningful also for infinite energy. [F2, F4, F5, step 2.1, algebra] ∎
