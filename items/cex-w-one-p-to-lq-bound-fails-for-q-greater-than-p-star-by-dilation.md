---
id: cex-w-one-p-to-lq-bound-fails-for-q-greater-than-p-star-by-dilation
kind: counterexample
title: "The $W^{1,p}\\to L^q$ bound fails for $q>p^{*}$ by dilation"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [def-sobolev-conjugate-exponent, def-l-p-space-as-a-quotient-by-null-functions, thm-linear-change-of-variables-for-lebesgue-measure, cor-euclidean-closed-balls-and-spheres-are-compact, thm-chain-rule-for-total-derivatives, lem-euclidean-bump-for-a-compact-set-inside-an-open-set, def-countable-choice, def-sobolev-space-wkp-and-its-norm, cor-vector-valued-ftc-and-lipschitz-bound]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 3 §3.1, the moral after the dilation computation, printed pp. 61-62."
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Chapter 3, Exercise 3.24, printed p. 78, for the critical concentration family; the present computation proves the larger-q failure."
---

## Statement refuted

Assume Countable Choice ([[def-countable-choice]]). Let $n\ge2$, $1\le p<n$ and $q>p^{*}=\frac{np}{n-p}$. The assertion that there is a finite constant $C$ with
$$\|u\|_{L^q(\mathbb R^n)}\le C\|Du\|_{L^p(\mathbb R^n)}\qquad\text{for every }u\in C_c^\infty(\mathbb R^n)$$
is false. The stronger full-norm assertion $\|u\|_{L^q}\le C\|u\|_{W^{1,p}}$ also fails for this family, so the exponent $p^{*}$ is sharp for both estimates.

## Facts & Assumptions

**Given:** Countable Choice; $n\ge2$; $1\le p<n$; a fixed nonzero $\varphi\in C_c^\infty(B(0,1))$; and $0<\lambda\le1$.

[F1] The Sobolev conjugate satisfies $\frac1{p^{*}}=\frac1p-\frac1n$, so for finite $q>p^{*}$ one has $\frac1q<\frac1p-\frac1n$; the case $q=\infty$ is treated separately with $1/q=0$ ([[def-sobolev-conjugate-exponent]]).

[F2] An invertible linear map scales Lebesgue measure by $|\det|$, so for $a>0$ the substitution $y=x/a$ gives $\int_{\mathbb R^n}g(x/a)\,dx=a^n\int_{\mathbb R^n}g(y)\,dy$; an $L^q$ class is determined by its values almost everywhere ([[thm-linear-change-of-variables-for-lebesgue-measure]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F3] The closed unit ball is compact, so a continuous function on it is bounded and the support of $\varphi$ is compact ([[cor-euclidean-closed-balls-and-spheres-are-compact]]).

[F4] A nonzero smooth bump in $B(0,1)$ exists ([[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]]); its gradient scales by the chain rule ([[thm-chain-rule-for-total-derivatives]]). Its gradient norm is positive: otherwise continuity gives zero gradient everywhere, the fundamental theorem along segments makes it constant, and compact support makes it zero ([[cor-vector-valued-ftc-and-lipschitz-bound]]).

## Counterexample

**Proof technique:** direct.

1.1 The norm scalings. For $0<\lambda\le1$ put $\varphi_\lambda(x):=\varphi(x/\lambda)$, so $\varphi_\lambda\in C_c^\infty(B(0,\lambda))\setminus\{0\}$. If $q<\infty$, substituting $y=x/\lambda$ and using [F2] gives $\|\varphi_\lambda\|_{L^q}^q=\lambda^n\|\varphi\|_{L^q}^q$, hence $\|\varphi_\lambda\|_{L^q}=\lambda^{n/q}\|\varphi\|_{L^q}>0$. If $q=\infty$, then for each $t>0$, [F2] gives $\lambda_n(\{|\varphi_\lambda|>t\})=\lambda^n\lambda_n(\{|\varphi|>t\})$, so $\|\varphi_\lambda\|_{L^\infty}=\|\varphi\|_{L^\infty}>0$. In either case $D\varphi_\lambda(x)=\lambda^{-1}(D\varphi)(x/\lambda)$ and $\|D\varphi_\lambda\|_{L^p}=\lambda^{n/p-1}\|D\varphi\|_{L^p}>0$; the support statement uses [F3]. [F2, F3, F4, given, algebra]

2.1 The ratio diverges above $p^{*}$. For finite $q>p^{*}$, dividing the two scalings of step 1.1 gives $\|\varphi_\lambda\|_{L^q}/\|D\varphi_\lambda\|_{L^p}=\lambda^{\,1+n/q-n/p}\|\varphi\|_{L^q}/\|D\varphi\|_{L^p}$; the exponent is negative exactly when $\frac1q<\frac1p-\frac1n=\frac1{p^{*}}$ by [F1], so this ratio tends to $+\infty$. For $q=\infty$, step 1.1 gives $\|\varphi_\lambda\|_{L^\infty}/\|D\varphi_\lambda\|_{L^p}=\lambda^{1-n/p}\|\varphi\|_{L^\infty}/\|D\varphi\|_{L^p}\to+\infty$ because $p<n$. In either case any finite $C$ satisfying the proposed inequality for every compactly supported smooth $u$ would have to dominate this unbounded ratio, which is impossible. Also $\|\varphi_\lambda\|_{W^{1,p}}^p=\lambda^n\|\varphi\|_p^p+\lambda^{n-p}\sum_i\|D_i\varphi\|_p^p\le\lambda^{n-p}(\|\varphi\|_p^p+\sum_i\|D_i\varphi\|_p^p)$ for $\lambda\le1$. Thus the full-norm ratio has the same divergent lower bound $c\lambda^{1+n/q-n/p}$, with $1/q=0$ for $q=\infty$. Both bounds fail for every $q>p^{*}$. [F1, step 1.1, given, algebra] ∎

## Source notes

The dilation computation is Kinnunen's, printed pp. 61-62, and Laugesen's sharpness discussion, printed pp. 65-66; the counterexample is the standard concentrated-bump family.
