---
id: ex-finite-dft-delta-and-constant-extremisers
kind: example
title: Delta and constant functions are finite DFT extremisers
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps:
  - def-counting-inner-product-on-complex-functions-on-z-mod-n
  - def-integers-modulo-n
  - def-rational-power
  - def-unitary-discrete-fourier-transform-on-z-mod-n
  - lem-orthogonality-of-characters-on-a-finite-cyclic-group
  - lem-rational-power-laws
  - thm-complex-numbers-form-a-field
  - thm-finite-dft-support-product-uncertainty
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Michael E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE (author PDF)"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
      locator: "§11, PDF pp. 86–93"
    - title: "Terence Tao, An Uncertainty Principle for Cyclic Groups of Prime Order, Math. Res. Lett. 12 (2005) 121–127 (arXiv:math/0308286)"
      url: "https://arxiv.org/pdf/math/0308286"
      locator: "Abstract and §1, pp. 1–2 (the classical product bound with equality cases)"
---

## Example

Let $N\ge1$, let $\delta_0\in\mathbb C^{\mathbb Z/N\mathbb Z}$ be the delta at
the class of $0$ and let $\mathbf 1$ be the constant function $1$. Then
$$\mathcal F_N\delta_0=N^{-1/2}\mathbf 1,\qquad \mathcal F_N\mathbf 1=N^{1/2}\delta_0 .$$
Hence $|\operatorname{supp}\delta_0|=1=|\operatorname{supp}\mathcal F_N\mathbf 1|$
and $|\operatorname{supp}\mathbf 1|=N=|\operatorname{supp}\mathcal F_N\delta_0|$,
so both functions have support product $N$ and attain equality in
[[thm-finite-dft-support-product-uncertainty]]. At $N=1$ one has
$\delta_0=\mathbf 1$ and the two identities coincide.

## Facts & Assumptions

**Given:** An integer $N\ge1$, the functions
$\delta_0,\mathbf 1\in\mathbb C^{\mathbb Z/N\mathbb Z}$ with
$\delta_0([0])=1$, $\delta_0(x)=0$ for $x\ne[0]$, and $\mathbf 1(x)=1$ for all
$x$, the unitary transform
$(\mathcal F_Nf)(k)=N^{-1/2}\sum_{x=0}^{N-1}f([x]_N)e^{-2\pi ikx/N}$ of
[[def-unitary-discrete-fourier-transform-on-z-mod-n]]
([[def-integers-modulo-n]], [[def-counting-inner-product-on-complex-functions-on-z-mod-n]]).

[F1] Character orthogonality: for $N\ge1$ and $k,\ell\in\mathbb Z$,
$\sum_{x=0}^{N-1}e^{2\pi i(k-\ell)x/N}=N$ when $k\equiv\ell\pmod N$ and $0$
otherwise; at $N=1$ the congruence always holds and the sum is $1$
([[lem-orthogonality-of-characters-on-a-finite-cyclic-group]]).

[F2] Rational powers: $N^{\pm1/2}$ is the positive real number with
$N^{-1/2}N^{1/2}=1$ and $(N^{-1/2})^2=N^{-1}$; the usual power laws hold
([[def-rational-power]], [[lem-rational-power-laws]]), and complex arithmetic
is that of the field $\mathbb C$ ([[thm-complex-numbers-form-a-field]]).

[F3] Finite support-product uncertainty:
$|\operatorname{supp}f|\cdot|\operatorname{supp}\mathcal F_Nf|\ge N$ for every
nonzero $f$, with $\operatorname{supp}f=\{x:f(x)\ne0\}$
([[thm-finite-dft-support-product-uncertainty]]).

## Verification

**Proof technique:** direct.

1.1 The transform of the delta. In the defining sum $(\mathcal F_N\delta_0)(k)=N^{-1/2}\sum_{x=0}^{N-1}\delta_0([x]_N)e^{-2\pi ikx/N}$ every summand with $x\not\equiv0\pmod N$ vanishes by definition of $\delta_0$, and the summand at $x=0$ equals $1$. Hence $(\mathcal F_N\delta_0)(k)=N^{-1/2}$ for every $k$, that is, $\mathcal F_N\delta_0=N^{-1/2}\mathbf 1$. [F2, given]

1.2 The transform of the constant function. For a frequency representative $k\in\mathbb Z$, $(\mathcal F_N\mathbf 1)(k)=N^{-1/2}\sum_{x=0}^{N-1}e^{-2\pi ikx/N}$. Apply [F1] with its first parameter $0$ and second parameter $k$: the sum is $N$ when $k\equiv0\pmod N$ and $0$ otherwise. Hence $(\mathcal F_N\mathbf 1)(k)=N^{-1/2}\cdot N=N^{1/2}$ at $k=[0]$ and $0$ elsewhere, that is, $\mathcal F_N\mathbf 1=N^{1/2}\delta_0$. [F1, F2, given]

2.1 Supports, equality, and the case $N=1$. By step 1.1 the support of $\mathcal F_N\delta_0$ is the support of the constant function $\mathbf 1$, namely all $N$ classes, while $\operatorname{supp}\delta_0=\{[0]\}$ has one element; by step 1.2 the support of $\mathcal F_N\mathbf 1$ is $\{[0]\}$, while $\operatorname{supp}\mathbf 1$ has $N$ elements. Multiplying gives $|\operatorname{supp}\delta_0|\cdot|\operatorname{supp}\mathcal F_N\delta_0|=N$ and $|\operatorname{supp}\mathbf 1|\cdot|\operatorname{supp}\mathcal F_N\mathbf 1|=N$, so both attain the equality case of the bound [F3]. At $N=1$ the group has the single class $[0]$, so $\delta_0=\mathbf 1$ and $N^{-1/2}=N^{1/2}=1$, and the two identities of steps 1.1 and 1.2 coincide. [F2, F3, step 1.1, step 1.2] ∎ 
