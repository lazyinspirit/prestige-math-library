---
id: lem-sobolev-norm-is-well-defined-and-definite
kind: lemma
title: The Sobolev norm descends to equivalence classes
status: published
origin: pipeline
deps:
  - def-sobolev-space-wkp-and-its-norm
  - lem-weak-derivative-linearity-locality-and-commutation
  - lem-weak-derivative-is-independent-of-lp-representatives
  - lem-weak-derivatives-are-unique-almost-everywhere
  - thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space
  - thm-complex-holder-minkowski-and-the-quotient-norm
  - thm-minkowski-inequality-for-integrals
  - def-countable-choice
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: Juha Kinnunen, Sobolev Spaces (Aalto University, 2026)
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Chapter 1 §1.2, Definition 1.8 and Remarks 1.9(1)–(3), printed pp. 4–6; finite-p sum, p-infinity sum and equivalent maximum, D^0u=u, and almost-everywhere identification.
    - title: John K. Hunter, Notes on Partial Differential Equations (2014)
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: Chapter 3 §3.5, Definition 3.23, printed pp. 58–59; finite-p formula, p-infinity maximum, and almost-everywhere identification.
---

## Statement

Assume Countable Choice for the weak-derivative uniqueness interface. Let
$\Omega\subseteq\mathbb R^n$ be open, $n\ge1$, $k\in\mathbb N_0$, and
$1\le p\le\infty$. For either real or complex scalars, the displayed
$W^{k,p}(\Omega)$ formula from
[[def-sobolev-space-wkp-and-its-norm]] is independent of the representatives
of its Sobolev and derivative classes and defines a norm: it is finite,
absolutely homogeneous, subadditive, and zero exactly on the zero $L^p$ class.
This holds at $p=1$ and $p=\infty$, and when $k=0$.

If $\Omega=\varnothing$, the only class is zero and the formula is zero.

## Sources

- Juha Kinnunen, *Sobolev Spaces*, Chapter 1 §1.2, Definition 1.8 and
  Remarks 1.9(1)–(3), printed pp. 4–6. Kinnunen uses the finite-$p$ sum and
  the sum of derivative norms for $p=\infty$, then notes that the maximum is
  an equivalent $p=\infty$ norm. The present definition uses that maximum.
- John K. Hunter, *Notes on Partial Differential Equations*, Chapter 3 §3.5,
  Definition 3.23, printed pp. 58–59. Hunter states the finite-$p$ formula,
  the $p=\infty$ maximum, and the almost-everywhere identification.
  These sources state the conventional formulas; the quotient and norm-axiom
  checks needed here are proved below.

## Facts & Assumptions

**Given:** Countable Choice, an open $\Omega\subseteq\mathbb R^n$ with
$n\ge1$, $k\in\mathbb N_0$, $1\le p\le\infty$, and real or complex
$W^{k,p}(\Omega)$ classes.

[F1] The index set $\mathcal A_k=\{\alpha\in\mathbb N_0^n:|\alpha|\le k\}$
is finite and nonempty; $D^0u=u$; and the Sobolev formula is the finite-$p$
sum or the $p=\infty$ maximum over this set
([[def-sobolev-space-wkp-and-its-norm]]).

[F2] The weak-derivative property is invariant under almost-everywhere
changes to both its input and value classes ([[lem-weak-derivative-is-independent-of-lp-representatives]]).

[F3] Under Countable Choice, each locally integrable weak derivative is
unique as an almost-everywhere class
([[lem-weak-derivatives-are-unique-almost-everywhere]]).

[F4] Weak differentiation is complex-linear wherever the derivatives exist
([[lem-weak-derivative-linearity-locality-and-commutation]]).

[F5] The real $L^p$ quotient norm is well defined and gives a norm for every
$1\le p\le\infty$
([[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]]).

[F6] For complex $L^p$ classes, the quotient norm is well defined, homogeneous,
separating, and satisfies Minkowski for every $1\le p\le\infty$
([[thm-complex-holder-minkowski-and-the-quotient-norm]]).

[F7] Real integral Minkowski holds on any measure space for $1\le p<\infty$;
in particular it applies to a finite set with counting measure
([[thm-minkowski-inequality-for-integrals]]).

[F8] Countable Choice is the assertion that every natural-number-indexed
family of nonempty sets has a choice function
([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 The set $\mathcal A_k$ is finite because each coordinate of every $\alpha$ lies in $\{0,\ldots,k\}$, and is nonempty because it contains $0$. By [F1], every derivative class in the formula has finite $L^p$ norm. If $k=0$, then $\mathcal A_0=\{0\}$ and $D^0u=u$, so the expression is exactly $\|u\|_{L^p}$. If $\Omega=\varnothing$, [F1] says the only class is zero and the expression is zero. [F1, given]

1.2 Under Countable Choice [F8], changing representatives of $u$ does not change the weak-derivative property or its value classes by [F2]. If two locally integrable values represent the weak derivative of the same input, [F3] makes them equal almost everywhere. Thus each $D^\alpha u$ is intrinsic as an $L^p$ class, and the real or complex quotient norm in [F5] or [F6] depends only on that class. Hence the formula is independent of all representative choices. [F1, F2, F3, F5, F6, F8, given]

1.3 For $u,v\in W^{k,p}(\Omega)$ and scalars $a,b$ in the chosen field, [F4] gives $D^\alpha(au+bv)=aD^\alpha u+bD^\alpha v$ as weak-derivative classes for every $\alpha\in\mathcal A_k$. The right side is an $L^p$ class by the vector-space properties in [F5] or [F6], so $au+bv\in W^{k,p}(\Omega)$. This covers $a=0$ or $b=0$ directly. Thus the usual operations make $W^{k,p}(\Omega)$ a real or complex vector space. [F1, F4, F5, F6, given]

1.4 For a scalar $c$ and finite $p$, class homogeneity in [F5] or [F6] gives $\|cu\|_{W^{k,p}}^p=\sum_{\alpha\in\mathcal A_k}\|cD^\alpha u\|_{L^p}^p=|c|^p\sum_{\alpha\in\mathcal A_k}\|D^\alpha u\|_{L^p}^p=|c|^p\|u\|_{W^{k,p}}^p$; taking nonnegative $p$th roots proves absolute homogeneity. At $p=\infty$, the maximum formula and $\|cf\|_\infty=|c|\|f\|_\infty$ give the same conclusion. For $c=0$ both formulas give zero directly. [F1, F5, F6, given]

1.5 Suppose $1\le p<\infty$ and put $a_\alpha=\|D^\alpha u\|_{L^p}$, $b_\alpha=\|D^\alpha v\|_{L^p}$. By [F4] and the componentwise $L^p$ triangle inequality in [F5] or [F6], $\|D^\alpha(u+v)\|_{L^p}\le a_\alpha+b_\alpha$ for each $\alpha$. Raising to $p$, summing, and taking the $p$th root bounds $\|u+v\|_{W^{k,p}}$ by $\left(\sum_{\alpha\in\mathcal A_k}(a_\alpha+b_\alpha)^p\right)^{1/p}$. Give the finite set $\mathcal A_k$ its counting measure; the real sequences $(a_\alpha)$ and $(b_\alpha)$ belong to this $L^p$ space, and their norms are the finite sums in [F1]. Applying [F7] yields $\left(\sum_{\alpha\in\mathcal A_k}(a_\alpha+b_\alpha)^p\right)^{1/p}\le\left(\sum_{\alpha\in\mathcal A_k}a_\alpha^p\right)^{1/p}+\left(\sum_{\alpha\in\mathcal A_k}b_\alpha^p\right)^{1/p}=\|u\|_{W^{k,p}}+\|v\|_{W^{k,p}}$. This proves subadditivity also at $p=1$. [F1, F4, F5, F6, F7, given]

1.6 At $p=\infty$, put $a_\alpha=\|D^\alpha u\|_{L^\infty}$ and $b_\alpha=\|D^\alpha v\|_{L^\infty}$. By [F4] and [F5] or [F6], $\|D^\alpha(u+v)\|_{L^\infty}\le a_\alpha+b_\alpha\le\max_{\beta\in\mathcal A_k}a_\beta+\max_{\beta\in\mathcal A_k}b_\beta$. Taking the maximum over $\alpha$ and using [F1] gives $\|u+v\|_{W^{k,\infty}}\le\|u\|_{W^{k,\infty}}+\|v\|_{W^{k,\infty}}$. [F1, F4, F5, F6, given]

2.1 If the Sobolev expression is zero, then at finite $p$ each nonnegative summand is zero, and at $p=\infty$ every component norm is zero. Since $0\in\mathcal A_k$ and $D^0u=u$ by [F1], in either case $\|u\|_{L^p}=0$. The real or complex $L^p$ norm separates its quotient classes by [F5] or [F6], so $u$ is the zero class. Conversely, if $u=0$ as an $L^p$ class, zero is a weak derivative of zero at every order; uniqueness under [F8] and [F3] makes every $D^\alpha u$ the zero class, and [F1] gives $\|u\|_{W^{k,p}}=0$. Together with the homogeneity and triangle inequalities already proved, this establishes the norm and both directions of the zero equivalence for real and complex scalars and all endpoint exponents. [F1, F3, F5, F6, F8, given, step 1.4, step 1.5, step 1.6] ∎
