---
title: Whole-space H² regularity from an L² distributional Laplacian
status: draft
research_item: lem-se-author-88d8498c76d6-whole-space-h2
dependency_level: 0
---

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:lem-weak-derivatives-are-polynomial-fourier-multipliers](https://alphabetamath.cc/item/lem-weak-derivatives-are-polynomial-fourier-multipliers)
- [math:thm-plancherel](https://alphabetamath.cc/item/thm-plancherel)
- [math:thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces](https://alphabetamath.cc/item/thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces)
- [math:thm-polynomial-growth-functions-define-tempered-distributions](https://alphabetamath.cc/item/thm-polynomial-growth-functions-define-tempered-distributions)
- [math:thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms](https://alphabetamath.cc/item/thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms)
- [math:lem-smooth-polynomially-bounded-multipliers-on-schwartz-space](https://alphabetamath.cc/item/lem-smooth-polynomially-bounded-multipliers-on-schwartz-space)
- [math:thm-locally-integrable-functions-embed-in-distributions](https://alphabetamath.cc/item/thm-locally-integrable-functions-embed-in-distributions)
- [math:thm-bessel-potential-space-has-the-weighted-tempered-distribution-characterisation](https://alphabetamath.cc/item/thm-bessel-potential-space-has-the-weighted-tempered-distribution-characterisation)
- [math:thm-tempered-distributions-embed-continuously-in-distributions](https://alphabetamath.cc/item/thm-tempered-distributions-embed-continuously-in-distributions)


## Statement

Assume AC. If $v\in L^2(\mathbb R^n)$ and $\Delta v=h\in L^2(\mathbb R^n)$ distributionally, then $v\in H^2(\mathbb R^n)$ and
$$\|v\|_{H^2}\le C_n(\|v\|_2+\|h\|_2).$$
The Fourier transform uses $\widehat{\partial_jv}=2\pi i\xi_j\widehat v$; the weak-derivative $H^2$ norm and the weight $(1+4\pi^2|\xi|^2)$ norm are equivalent, rather than identical.

## Facts & Assumptions

**Given:** The hypotheses and conventions of the Statement.

[F1] Assume the Axiom of Choice [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice); its countable instances supply the choice hypotheses inherited from the Fourier, Sobolev and regular-distribution interfaces below. No additional choice is used in the local computation.

[F2] [math:lem-weak-derivatives-are-polynomial-fourier-multipliers](https://alphabetamath.cc/item/lem-weak-derivatives-are-polynomial-fourier-multipliers) gives $\mathcal F(D^\alpha u)=(2\pi i\xi)^\alpha\mathcal Fu$ for $u\in\mathcal S'(\mathbb R^n)$. Summing the pure second derivatives gives $\mathcal F(\Delta u)=-4\pi^2|\xi|^2\mathcal Fu$. This use does not assume that the individual second derivatives belong to $L^2$.

[F3] [math:thm-plancherel](https://alphabetamath.cc/item/thm-plancherel) gives a unitary transform $\mathcal F_2:L^2\to L^2$, with $\|\mathcal F_2 f\|_2=\|f\|_2$.

[F4] Every $L^2$ class $f$ defines the regular tempered distribution $u_f(\varphi)=\int f\varphi$ by [math:thm-polynomial-growth-functions-define-tempered-distributions](https://alphabetamath.cc/item/thm-polynomial-growth-functions-define-tempered-distributions), and $\mathcal F u_f=u_{\mathcal F_2 f}$ in $\mathcal S'$ by [math:thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms](https://alphabetamath.cc/item/thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms).

[F5] [math:lem-smooth-polynomially-bounded-multipliers-on-schwartz-space](https://alphabetamath.cc/item/lem-smooth-polynomially-bounded-multipliers-on-schwartz-space) defines multiplication by a smooth symbol with polynomially bounded derivatives through $\langle au,\varphi\rangle=\langle u,a\varphi\rangle$. In particular, for a polynomial $a$ and an $L^2$ class $f$, this pairing is $\int af\varphi$, so $a u_f=u_{af}$; the product $af$ is locally integrable because $a$ is bounded on each compact set.

[F6] [math:thm-locally-integrable-functions-embed-in-distributions](https://alphabetamath.cc/item/thm-locally-integrable-functions-embed-in-distributions) makes the regular-distribution map injective modulo almost-everywhere equality on $L^1_{\mathrm{loc}}$. Thus equality of regular distributions implies equality of their locally integrable representatives almost everywhere.

[F7] [math:thm-bessel-potential-space-has-the-weighted-tempered-distribution-characterisation](https://alphabetamath.cc/item/thm-bessel-potential-space-has-the-weighted-tempered-distribution-characterisation) states that $u\in\mathcal S'$ belongs to the canonical image of $H^s$ if and only if $\langle\xi\rangle^s\mathcal Fu=u_g$ for some $g\in L^2$, with $\|E_s^{-1}u\|_{H^s}=\|g\|_2$. Here $\langle\xi\rangle=(1+|\xi|^2)^{1/2}$; the application below is at $s=2$.

[F8] [math:thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces](https://alphabetamath.cc/item/thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces) identifies the canonical image of $H^2$ with the regular distributions of $W^{2,2}$ classes, and compares the weak-derivative norm with $\|\langle\xi\rangle^2\mathcal F_2 f\|_2$ and $\|(1+4\pi^2|\xi|^2)\mathcal F_2 f\|_2$, with constants depending only on $n$.

[F9] [math:thm-tempered-distributions-embed-continuously-in-distributions](https://alphabetamath.cc/item/thm-tempered-distributions-embed-continuously-in-distributions) states that restriction from $\mathcal S'$ to compactly supported tests is injective. Thus equality of two tempered distributions on compactly supported tests is equality in $\mathcal S'$.

## Proof

**Given:** The hypotheses and data in the Statement.

**Goal:** Prove the stated regularity and norm estimate.

1.1 By F4, $v,h$ define tempered distributions $u_v,u_h$. The distributional hypothesis gives $\Delta u_v=u_h$ on compactly supported tests. The left side is tempered by F2, so F9 gives the same equality in $\mathcal S'$. Write $\widehat v=\mathcal F_2v$ and $\widehat h=\mathcal F_2h$. Applying F2, F4 and F5 yields $u_{\widehat h}=-4\pi^2|\xi|^2u_{\widehat v}=u_{-4\pi^2|\xi|^2\widehat v}$ in $\mathcal S'$. [F1, F2, F4, F5, F9, given]

2.1 By F3, $\widehat v,\widehat h\in L^2$. The polynomial multiple $-4\pi^2|\xi|^2\widehat v$ is locally integrable, as in F5, so restriction of step 1.1 to compactly supported tests and F6 give $\widehat h=-4\pi^2|\xi|^2\widehat v$ almost everywhere. In particular $|\xi|^2\widehat v\in L^2$, and F3 gives $\||\xi|^2\widehat v\|_2=(4\pi^2)^{-1}\|h\|_2$. [F3, F5, F6, step 1.1]

3.1 Step 2.1 and F3 give $\|(1+4\pi^2|\xi|^2)\widehat v\|_2\le\|v\|_2+\|h\|_2$. Since $1+|\xi|^2\le1+4\pi^2|\xi|^2$, the class $g=\langle\xi\rangle^2\widehat v$ lies in $L^2$ and satisfies $\|g\|_2\le\|v\|_2+\|h\|_2$. By F4 and F5, $\langle\xi\rangle^2\mathcal Fu_v=u_g$, where the multiplier is the polynomial $1+|\xi|^2$. Applying F7 at $s=2$ therefore gives $u_v=E_2U$ for a unique $U\in H^2$ with $\|U\|_{H^2}=\|g\|_2$. [F3, F4, F5, F7, step 2.1, algebra]

4.1 By F8, the distribution $E_2U=u_v$ is $u_f$ for a class $f\in W^{2,2}$. F6 implies $f=v$ almost everywhere, so $v$ has all weak derivatives through order two in $L^2$. The norm comparison in F8 and step 3.1 give $\|v\|_{W^{2,2}}\le C_n\|g\|_2\le C_n(\|v\|_2+\|h\|_2)$; the Bessel-potential norm of the same class is already bounded in step 3.1. Hence the asserted $H^2$ regularity and estimate hold with either stated equivalent norm. [F6, F8, step 3.1] ∎
