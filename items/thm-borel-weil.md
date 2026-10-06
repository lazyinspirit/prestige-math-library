---
id: thm-borel-weil
kind: theorem
title: The Borel-Weil theorem
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps:
- lem-sections-of-an-associated-line-bundle-as-equivariant-functions
- prop-left-translation-makes-line-bundle-cohomology-a-g-module
- lem-a-nonzero-dominant-section-is-determined-on-the-big-cell
- lem-the-borel-weil-section-extends-from-the-big-cell-to-the-flag-variety
- lem-lowest-weight-space-is-the-nilradical-invariant-line
- lem-rank-one-cohomology-shifts-across-a-simple-wall
- lem-a-regular-weight-has-a-unique-dominant-dot-translate
- thm-weyls-complete-reducibility-theorem
- thm-highest-weight-classification-of-finite-dimensional-irreducible-representations
- prop-highest-weight-of-the-dual-representation
- thm-serre-duality-smooth-projective-variety-locally-free-sheaves
- thm-semisimple-flag-variety-smooth-projective
- def-weyl-vector-rho
- prop-weyl-vector-is-the-sum-of-fundamental-weights
- def-integral-dominant-and-strictly-dominant-weights
- def-dot-action-facets-and-single-wall-translation-data
- prop-weyl-length-equals-positive-root-inversion-number
- def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Jacob Lurie, A Proof of the Borel-Weil-Bott Theorem"
      url: "https://www.math.harvard.edu/~lurie/papers/bwb.pdf"
      locator: "Printed pp. 1-2, Theorem 2 and its proof: H^0 is at most one-dimensional in the U'-invariants, the big-cell function supplies existence, and the lowest weight is read off"
    - title: "Joshua Ng (Hoi Hei Jan Sum), The Borel-Weil-Bott Theorem (Chicago REU 2015)"
      url: "https://math.uchicago.edu/~may/REU2015/REUPapers/Ng.pdf"
      locator: "Theorem 5.3 and its proof, printed pp. 9-11: the realisation of irreducible representations as sections of the associated bundle"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\lambda\in X^*(T)$.
If $\lambda$ is not dominant integral then $H^0(X,\mathcal L_\lambda)=0$. If
$\lambda$ is dominant integral then
$H^0(X,\mathcal L_\lambda)\cong L(\lambda)^*$ as $\mathfrak g$-modules, and
$H^i(X,\mathcal L_\lambda)=0$ for every $i>0$.

## Facts & Assumptions

**Given:** The Axiom of Choice, the group $G$, its Borel $B$, the flag variety $X=G/B$ of dimension $N=|\Phi^+|$, a weight $\lambda\in X^*(T)$ and the equivariant line bundle $\mathcal L_\lambda$.

[F1] The function space $F_\lambda=\{f\in\mathcal O(G):f(gb)=\lambda(b)f(g)\}$ is identified with $H^0(X,\mathcal L_\lambda)$; it is a finite-dimensional $\mathfrak g$-module for the derived left translation action $(x\cdot f)(g)=\frac{d}{dt}\big|_{0}f(\exp(-tx)g)$, and annihilation by every $x\in\mathfrak n^-$ is equivalent to invariance under left translation by the whole group $U^-$ ([[lem-sections-of-an-associated-line-bundle-as-equivariant-functions]], [[prop-left-translation-makes-line-bundle-cohomology-a-g-module]], [[lem-a-nonzero-dominant-section-is-determined-on-the-big-cell]]).

[F2] The space of $U^-$-invariant functions in $F_\lambda$ has dimension at most $1$ and, when nonzero, consists of the weight-$(-\lambda)$ line for the torus action; moreover $f$ is determined by $f(1)$ on this space ([[lem-a-nonzero-dominant-section-is-determined-on-the-big-cell]]).

[F3] For every dominant integral $\mu$ the subspace of $\mathfrak n^-$-invariants of the finite-dimensional irreducible module $L(\mu)$ equals its lowest weight space $L(\mu)_{w_0\mu}$ and is one-dimensional ([[lem-lowest-weight-space-is-the-nilradical-invariant-line]]).

[F4] Every finite-dimensional $\mathfrak g$-module is completely reducible, and the finite-dimensional irreducible modules are exactly the $L(\mu)$ with $\mu$ dominant integral; the dual $L(\lambda)^*$ of $L(\lambda)$ is irreducible of highest weight $-w_0\lambda$ ([[thm-weyls-complete-reducibility-theorem]], [[thm-highest-weight-classification-of-finite-dimensional-irreducible-representations]], [[prop-highest-weight-of-the-dual-representation]]).

[F5] If $\lambda$ is dominant integral, then there is a regular function $v\in\mathcal O(G)$ with $v(gb)=\lambda(b)v(g)$ and $v(1)=1$; in particular $F_\lambda\ne0$ ([[lem-the-borel-weil-section-extends-from-the-big-cell-to-the-flag-variety]]).

[F6] For $\mu=\lambda+\rho$ dominant and regular, there is a reduced expression $w_0=s_{i_N}\cdots s_{i_1}$ whose partial products $w_j=s_{i_j}\cdots s_{i_1}$ satisfy $N(w_j\mu)=j$ and end at the strictly antidominant weight $w_0\mu$; consequently, with $\lambda_j=w_j\cdot\lambda$, the simple reflection used at step $j$ satisfies $\langle\lambda_j,\alpha_{i_{j+1}}^\vee\rangle\ge0$ ([[lem-a-regular-weight-has-a-unique-dominant-dot-translate]]).

[F7] If $\langle\nu,\alpha^\vee\rangle\ge-1$ for a simple root $\alpha$, then $H^i(X,\mathcal L_\nu)\cong H^{i+1}(X,\mathcal L_{s_\alpha\cdot\nu})$ for all $i\ge0$ ([[lem-rank-one-cohomology-shifts-across-a-simple-wall]]).

[F8] $X$ is smooth projective of pure dimension $N=|\Phi^+|$ and $\mathcal L_\lambda$ is locally free, so $H^q(X,\mathcal L_\lambda)=0$ for all $q>N$, and each $H^q$ is finite-dimensional ([[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]], [[thm-semisimple-flag-variety-smooth-projective]], [[prop-left-translation-makes-line-bundle-cohomology-a-g-module]]).

[F9] A dominant weight pairs nonnegatively with every positive root. A weight $\nu$ is dominant if and only if $-w_0\nu$ is dominant: if $\nu$ is dominant then $w_0\nu$ is antidominant, so $-w_0\nu$ is dominant, and conversely if $-w_0\nu$ is dominant then $w_0(-w_0\nu)=-\nu$ is antidominant, so $\nu$ is dominant ([[def-integral-dominant-and-strictly-dominant-weights]], [[def-dot-action-facets-and-single-wall-translation-data]], [[prop-weyl-length-equals-positive-root-inversion-number]]).

## Proof

1.1 By [F1], $F_\lambda$ is a finite-dimensional $\mathfrak g$-module. If it is nonzero, complete reducibility [F4] gives $F_\lambda\cong\bigoplus_{j=1}^k L(\mu_j)$ with each $\mu_j$ dominant integral. By [F3] its $\mathfrak n^-$-invariants have dimension $k$, while [F1]–[F2] identify them with the at-most-one-dimensional $U^-$-invariant space. Thus $k=1$, and comparison of the invariant weights gives $w_0\mu_1=-\lambda$. The root-sign property of $w_0$ gives $w_0^{-1}=w_0$ and makes $-w_0$ preserve dominant integral weights by [F9]; therefore $\lambda=-w_0\mu_1$ is dominant integral. Now [F4] applies to $L(\lambda)^*$, identifying it with $L(-w_0\lambda)=L(\mu_1)\cong F_\lambda$. [F1, F2, F3, F4, F9, given, algebra]

2.1 Suppose $\lambda$ is dominant integral. By [F5], $F_\lambda\ne0$, so step 1.1 gives $F_\lambda\cong L(\lambda)^*$; this proves the second clause for $H^0$. Conversely, if $F_\lambda\ne0$ for an arbitrary weight $\lambda$, step 1.1 shows that $\lambda$ is dominant integral, so for non-dominant $\lambda$ one has $H^0(X,\mathcal L_\lambda)=F_\lambda=0$. [F5, step 1.1, algebra]

3.1 It remains to prove $H^i(X,\mathcal L_\lambda)=0$ for $i>0$ when $\lambda$ is dominant integral, which is the case in which step 2.1 has settled $H^0$. Put $\mu=\lambda+\rho$, which is dominant and regular, and use the reduced expression $w_0=s_{i_N}\cdots s_{i_1}$ and partial products $w_j$ of [F6], with $\lambda_j=w_j\cdot\lambda$, so that $\lambda_j+\rho=w_j\mu$. At the step passing from $j$ to $j+1$ the construction of [F6] chooses the simple reflection $s_{i_{j+1}}$ with $\langle w_j\mu,\alpha_{i_{j+1}}^\vee\rangle>0$ (the reflection increases the count $N$ by one), so $\langle\lambda_j,\alpha_{i_{j+1}}^\vee\rangle=\langle w_j\mu,\alpha_{i_{j+1}}^\vee\rangle-1\ge0\ge-1$ by [F6]; hence [F7] gives $H^i(X,\mathcal L_{\lambda_j})\cong H^{i+1}(X,\mathcal L_{\lambda_{j+1}})$ for all $i\ge0$. Composing the $N$ isomorphisms gives $H^i(X,\mathcal L_\lambda)\cong H^{i+N}(X,\mathcal L_{w_0\cdot\lambda})$ for all $i\ge0$. For $i>0$ one has $i+N>N=\dim X$, so $H^{i+N}(X,\mathcal L_{w_0\cdot\lambda})=0$ by [F8]. Therefore $H^i(X,\mathcal L_\lambda)=0$ for every $i>0$, completing the proof of the second clause. [F6, F7, F8, step 2.1, algebra] ∎ 