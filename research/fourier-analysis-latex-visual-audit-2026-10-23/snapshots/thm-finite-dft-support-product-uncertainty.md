---
id: thm-finite-dft-support-product-uncertainty
kind: theorem
title: Finite support-product uncertainty for the unitary DFT
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps:
  - def-counting-inner-product-on-complex-functions-on-z-mod-n
  - def-finite-sum-in-a-commutative-monoid
  - def-integers-modulo-n
  - def-unitary-discrete-fourier-transform-on-z-mod-n
  - lem-complex-conjugation-and-modulus-laws
  - lem-finite-sum-laws
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  - thm-complex-numbers-form-a-field
  - thm-finite-parseval-and-plancherel
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
      locator: "Abstract and §1, pp. 1–2 (the classical product bound with proof)"
---

## Statement

Let $N\ge1$, let $f\in\mathbb C^{\mathbb Z/N\mathbb Z}$ be nonzero and let
$\mathcal F_N$ be the unitary discrete Fourier transform of
[[def-unitary-discrete-fourier-transform-on-z-mod-n]]. Writing
$\operatorname{supp}f:=\{x:f(x)\ne0\}$ and
$\operatorname{supp}\mathcal F_Nf:=\{k:(\mathcal F_Nf)(k)\ne0\}$,
$$|\operatorname{supp}f|\cdot|\operatorname{supp}\mathcal F_Nf|\ge N .$$
At $N=1$ the bound is equality for every nonzero $f$. No convergence or
regularity hypothesis is involved.

## Facts & Assumptions

**Given:** An integer $N\ge1$ and a nonzero $f\in\mathbb C^{\mathbb Z/N\mathbb Z}$, with $S:=\operatorname{supp}f$, $T:=\operatorname{supp}\mathcal F_Nf$, the counting inner product $\langle g,h\rangle=\sum_{x\in\mathbb Z/N}g(x)\overline{h(x)}$ and norm $\|g\|_2^2=\sum_x|g(x)|^2$ of [[def-counting-inner-product-on-complex-functions-on-z-mod-n]], and the unitary transform $(\mathcal F_Ng)(k)=N^{-1/2}\sum_{x=0}^{N-1}g([x]_N)e^{-2\pi ikx/N}$ of [[def-unitary-discrete-fourier-transform-on-z-mod-n]] ([[def-integers-modulo-n]]).

[F1] Finite sums in a commutative monoid are order-independent and linear with respect to scalar multiplication, and satisfy the triangle inequality $|\sum_jz_j|\le\sum_j|z_j|$; the standard rules for real finite sums hold ([[def-finite-sum-in-a-commutative-monoid]], [[lem-finite-sum-laws]]). The complex triangle inequality follows by induction on the number of summands from $|z+w|\le|z|+|w|$ ([[lem-complex-conjugation-and-modulus-laws]]).

[F2] Cauchy–Schwarz for the counting inner product: $|\langle g,h\rangle|\le\|g\|_2\|h\|_2$ ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]], [[def-counting-inner-product-on-complex-functions-on-z-mod-n]]), where $\|g\|_2^2=\langle g,g\rangle=\sum_x|g(x)|^2$.

[F3] Finite Parseval: $\langle\mathcal F_Ng,\mathcal F_Nh\rangle=\langle g,h\rangle$ for all $g,h$; in particular $\|\mathcal F_Ng\|_2=\|g\|_2$ ([[thm-finite-parseval-and-plancherel]]).

[F4] The modulus satisfies $|z|^2=z\overline z\ge0$ and vanishes only at $z=0$; complexes form a field ([[lem-complex-conjugation-and-modulus-laws]], [[thm-complex-numbers-form-a-field]]).

## Proof

**Proof technique:** direct.

1.1 The two supports. Since $f\ne0$ there is a class with $f(x)\ne0$, so $S\ne\varnothing$ and $\|f\|_2^2=\sum_x|f(x)|^2>0$ by [F4]. Applying [F3] with $g=h=f$ and restricting the sum over all classes to the support $T$, $$\sum_{k\in T}|(\mathcal F_Nf)(k)|^2=\|\mathcal F_Nf\|_2^2=\|f\|_2^2>0 ,$$ so $T\ne\varnothing$ as well. [F3, F4, given]

1.2 Pointwise bound on the support of the transform. For $k\in T$, the triangle inequality and the normalisation $N^{-1/2}$ of the transform give $$|(\mathcal F_Nf)(k)|\le N^{-1/2}\sum_{x\in S}|f(x)| ,$$ the sum running only over $S$ because the remaining summands vanish. Cauchy–Schwarz [F2] applied on $\mathbb Z/N\mathbb Z$ to $u(x)=|f(x)|$ and $v(x)=\mathbf1_S(x)$ gives $\sum_{x\in S}|f(x)|=\langle u,v\rangle\le\|u\|_2\|v\|_2=|S|^{1/2}\|f\|_2$. Hence $|(\mathcal F_Nf)(k)|\le N^{-1/2}|S|^{1/2}\|f\|_2$ for every $k\in T$. [F1, F2, given]

2.1 Summing over the support. Squaring the bound of step 1.2 and summing over the $|T|$ classes of $T$ gives $$\|\mathcal F_Nf\|_2^2=\sum_{k\in T}|(\mathcal F_Nf)(k)|^2\le|T|\,N^{-1}|S|\,\|f\|_2^2 .$$ By Parseval [F3] the left side is $\|f\|_2^2$, and step 1.1 gives $\|f\|_2^2>0$, so dividing yields $|S|\,|T|\ge N$. [F1, F3, step 1.1, step 1.2]

3.1 The case $N=1$ and conclusion. If $N=1$ the group $\mathbb Z/1\mathbb Z$ has the single class $[0]$, $N^{-1/2}=1$ and $e^{-2\pi i\cdot0\cdot0}=1$, so $(\mathcal F_Nf)([0])=f([0])$; hence $T=S=\{[0]\}$ for nonzero $f$ and $|S||T|=1=N$, an equality. Together with step 2.1 this proves the claim for every $N\ge1$. [step 2.1, given] ∎
