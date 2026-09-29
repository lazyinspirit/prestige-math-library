---
id: lem-laplace-fundamental-kernel-is-locally-integrable
kind: lemma
title: Local integrability of the Laplace fundamental kernel
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (2014)"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: §2.6.1, printed p.33
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript)"
      url: https://web.archive.org/web/20250601000000id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf
      locator: §5.3 equations (5.25)–(5.26), printed pp.117–118
status: draft
origin: pipeline
proof_strategy: direct
deps: [def-laplace-fundamental-solution-with-positive-minus-laplacian-sign, def-regular-distribution-from-a-locally-integrable-function, def-countable-choice, lem-euclidean-balls-have-positive-finite-lebesgue-measure, lem-euclidean-chart-measure-agrees-with-polar-surface-measure, prop-countable-subsets-of-rn-are-lebesgue-null, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-compact-subset-is-closed-and-bounded, thm-borel-sets-are-lebesgue-measurable, thm-locally-integrable-functions-embed-in-distributions, thm-polar-coordinates-formula-for-lebesgue-measure]
---

## Statement

Assume Countable Choice and $n\ge2$. The normalized Laplace kernel $\Phi$ is
locally integrable on $\mathbb R^n$: its singularity is $\log|x|$ for $n=2$
and $|x|^{2-n}$ for $n\ge3$. It therefore defines a regular distribution.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$ and let $n\ge2$. Write
$\omega_{n-1}=|S^{n-1}|$ in the chart/polar convention and take the normalized
kernel from [[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]].

[A1] Countable Choice, written $\mathrm{AC}_\omega$, says every sequence of
nonempty sets has a choice function. ([[def-countable-choice]]).

[F1] For $n\ge3$, $\Phi(x)=|x|^{2-n}/((n-2)\omega_{n-1})$; for $n=2$,
$\Phi(x)=-(2\pi)^{-1}\log|x|$, for $x\ne0$.
([[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]]).

[F2] Polar integration gives the integral of a nonnegative Borel function as
the radial integral against $r^{n-1}\,dr\,d\sigma$.
([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F3] The chart surface measure equals the polar measure and
$\omega_{n-1}=n|B_1|$. ([[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]).

[F4] Every Euclidean ball of positive radius has positive finite Lebesgue
measure. ([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]).

[F5] The nonnegative integral is monotone under pointwise order.
([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F6] Every compact subset of a metric space is closed and bounded.
([[thm-compact-subset-is-closed-and-bounded]]).

[F7] Every Borel subset of $\mathbb R^n$ is Lebesgue measurable under Countable
Choice. ([[thm-borel-sets-are-lebesgue-measurable]]).

[F8] A locally integrable function defines the regular functional
$\langle u_\Phi,\varphi\rangle=\int\Phi\varphi$, which depends only on its
almost-everywhere class. ([[def-regular-distribution-from-a-locally-integrable-function]]).

[F9] Under Countable Choice, the regular-functional map from
$L^1_{\mathrm{loc}}$ modulo almost-everywhere equality takes values in
$\mathcal D'$. ([[thm-locally-integrable-functions-embed-in-distributions]]).

[F10] Under Countable Choice, every singleton in $\mathbb R^n$ is Lebesgue
null. ([[prop-countable-subsets-of-rn-are-lebesgue-null]]).

[F11] The kernel's value at zero may be assigned arbitrarily; the resulting
measurable function is interpreted through its locally integrable class.
([[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]]).

## Proof

**Proof technique:** direct.

1.1 By [F3] and [F4], $\omega_{n-1}=n|B_1|$ is positive and finite in every stated dimension. [F3, F4]

2.1 For $n\ge3$ and any $R>0$, assign the finite value $0$ to the kernel at the pole as permitted by [F11]; then $|\Phi|\mathbf 1_{B_R}$ is Borel. Apply [F2] and use [F1] and $\sigma(S^{n-1})=\omega_{n-1}$ from [F3] to obtain $$\int_{B_R}|\Phi(x)|\,dx=\frac{1}{(n-2)\omega_{n-1}}\int_0^R r^{n-1}r^{2-n}\,\omega_{n-1}\,dr=\frac{R^2}{2(n-2)}<\infty.$$ [F1, F2, F3, F11, step 1.1]

2.2 For $n=2$ and any $R>0$, again assign $\Phi(0)=0$ as permitted by [F11]. By [F1]–[F3] and step 1.1, $$\int_{B_R}|\Phi(x)|\,dx=\frac{\omega_1}{2\pi}\int_0^Rr|\log r|\,dr.$$ If $0<R\le1$, the radial integral is $-\frac{R^2}{2}\log R+\frac{R^2}{4}$; if $R\ge1$, splitting at $1$ gives $\frac{R^2}{2}\log R-\frac{R^2}{4}+\frac12$. Both values are finite, including at $R=1$, and the prefactor is finite by step 1.1. [F1, F2, F3, F11, step 1.1, cases, algebra]

3.1 Let $K\subset\mathbb R^n$ be compact. By [F6], $K$ is closed and bounded, hence Borel and Lebesgue measurable by [F7]; boundedness and the Euclidean triangle inequality give a centered ball $B_R$ containing $K$. By [F5] and steps 2.1–2.2, $\int_K|\Phi|\le\int_{B_R}|\Phi|<\infty$ (and the empty $K$ has integral zero). Since [F1] and [F11] make $\Phi$ measurable, this is $\Phi\in L^1_{\mathrm{loc}}(\mathbb R^n)$ by [F8]'s definition. [F1, F5, F6, F7, F8, step 2.1, step 2.2, algebra]

4.1 The regular functional in [F8] is therefore well-defined; [F9], under [A1], proves it is a distribution. The pole value changes only a singleton, which is null by [F10], and the radial integrals prove finiteness at the improper endpoint $r=0$ and every finite outer radius $R>0$. The claim assumes $n\ge2$; it makes no global-integrability assertion at $R=\infty$, and Countable Choice is used only through the named polar, surface-measure, ball-measure, Borel-measurability, singleton-null, and embedding interfaces, not full AC. [A1, F2, F3, F4, F7, F8, F9, F10, F11, step 2.1, step 2.2, step 3.1, cases] ∎

## Source notes

Hunter §2.6.1, printed p.33, states local integrability of the normalized
fundamental solution after giving its radial formula; the same passage notes
that second derivatives, with size $|x|^{-n}$, are not locally integrable.
Teschl §5.3 equations (5.25)–(5.26), printed pp.117–118, likewise records
$\Phi\in L^1_{\mathrm{loc}}$ and the different behavior of its second
derivatives. The present proof computes the kernel's radial integrals rather
than using the source's stated conclusion. The preceding kernel definition
also contains this local integrability calculation because it must make the
kernel extension meaningful before the current dependency level; this lemma
retains its separate promised result and supplies the explicit distribution
interface.
