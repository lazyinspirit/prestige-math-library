---
id: lem-translation-estimate-for-w-one-p-functions
kind: lemma
title: "The translation estimate for $W^{1,p}$ functions on $\\mathbb R^n$"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, def-sobolev-space-wkp-and-its-norm, def-weak-derivative-of-a-locally-integrable-function, def-l-p-space-as-a-quotient-by-null-functions, def-translation-of-a-function-on-rn, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, thm-minkowski-integral-inequality, def-countable-choice, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 3, the estimate in the proof of Theorem 3.44, step (2), displayed before the mollification-rate claim, printed p. 86"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Lemma 9.10 and its use in the proof of Theorem 9.31, printed pp. 217-218"
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Display (3.17) in the proof of Theorem 3.45, printed p. 74"
---

## Statement

Assume the Axiom of Choice. Let $n\ge1$, $1\le p<\infty$,
$\mathbb K\in\{\mathbb R,\mathbb C\}$ and $u\in W^{1,p}(\mathbb R^n;\mathbb K)$.
For $h\in\mathbb R^n$ let $\tau_hu:=u(\cdot-h)$, read on almost-everywhere
classes. Then $\tau_hu\in W^{1,p}(\mathbb R^n)$ with
$D_j(\tau_hu)=\tau_hD_ju$, and
$$\|\tau_hu-u\|_{L^p(\mathbb R^n)}\le|h|\,\|Du\|_{L^p(\mathbb R^n)},$$
where $|Du|=(\sum_{j=1}^n|D_ju|^2)^{1/2}$ and $|h|$ is the Euclidean norm of
$h$. The estimate is a statement about classes and does not depend on the
chosen representatives.

## Facts & Assumptions

**Given:** the Axiom of Choice, $n\ge1$, $1\le p<\infty$, a scalar field $\mathbb K\in\{\mathbb R,\mathbb C\}$, a class $u\in W^{1,p}(\mathbb R^n;\mathbb K)$ and a vector $h\in\mathbb R^n$.

[F1] *Smooth density in $W^{1,p}(\mathbb R^n)$.* Under Countable Choice, for every $u\in W^{1,p}(\mathbb R^n;\mathbb K)$ there are $\varphi_m\in C_c^\infty(\mathbb R^n;\mathbb K)$ with $\|\varphi_m-u\|_{W^{1,p}}\to0$; Countable Choice is supplied by the assumed Axiom of Choice. ([[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]], [[def-countable-choice]])

[F2] *Fundamental theorem of calculus.* For a smooth function $\varphi$, $\varphi(x-h)-\varphi(x)=-\int_0^1D\varphi(x-th)\cdot h\,dt$, with the complex-valued identity read componentwise. ([[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]])

[F3] *Minkowski and translation isometry.* Minkowski's integral inequality applies to the $t$-integral on $[0,1]$, and Lebesgue translation invariance gives $\|w(\cdot-th)\|_p=\|w\|_p$ for every $w\in L^p$. ([[thm-minkowski-integral-inequality]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]], [[def-l-p-space-as-a-quotient-by-null-functions]])

[F4] *Vector gradient norm.* The $L^p$ norm of the Euclidean magnitude $|Du|=(\sum_i|D_iu|^2)^{1/2}$ is equivalent, with constants depending only on $n,p$, to the finite sum of the component $L^p$ norms used in [[def-sobolev-space-wkp-and-its-norm]]. Indeed $|D_i u|\le|Du|\le\sum_i|D_i u|$, so Minkowski bounds $\||Du|\|_p$ above by $\sum_i\|D_i u\|_p$. Also $\bigl||Du_m|-|Du|\bigr|\le|D(u_m-u)|\le\sum_i|D_i(u_m-u)|$, which proves convergence in $L^p$ when $u_m\to u$ in $W^{1,p}$. ([[def-sobolev-space-wkp-and-its-norm]])

[F5] *Weak derivatives.* A locally integrable function $v$ has weak $\partial_j$-derivative $w$ when $\int v\,\partial_j\psi=-\int w\psi$ for every $\psi\in C_c^\infty(\mathbb R^n)$; if $v,w\in L^p$, this places $v$ in $W^{1,p}$ in that coordinate. ([[def-weak-derivative-of-a-locally-integrable-function]], [[def-sobolev-space-wkp-and-its-norm]])

## Proof

**Proof technique:** Prove the estimate for smooth approximants along line segments, then use density to pass to the $W^{1,p}$ limit. Identify the translated weak derivatives by testing against compactly supported smooth functions.

1.1 By [F1] and Countable Choice, choose $\varphi_m\in C_c^\infty(\mathbb R^n;\mathbb K)$ with $\|\varphi_m-u\|_{W^{1,p}}\to0$. For a smooth $\varphi$ the fundamental theorem [F2] gives $$\varphi(x-h)-\varphi(x)=-\int_0^1D\varphi(x-th)\cdot h\,dt.$$ By Cauchy--Schwarz and [F3], $$\|\tau_h\varphi-\varphi\|_p\le |h|\int_0^1\||D\varphi|(\cdot-th)\|_p\,dt=|h|\|D\varphi\|_p.$$ [F1, F2, F3, given]

1.2 For each coordinate $j$ and $\psi\in C_c^\infty(\mathbb R^n)$, the change of variables $y=x-h$ and the weak-derivative identity for $u$ give $$\int_{\mathbb R^n}(\tau_hu)(x)\,\partial_j\psi(x)\,dx=\int_{\mathbb R^n}u(y)\,\partial_j\psi(y+h)\,dy=-\int_{\mathbb R^n}D_ju(y)\,\psi(y+h)\,dy=-\int_{\mathbb R^n}(\tau_hD_ju)(x)\,\psi(x)\,dx.$$ By [F3], $\tau_hD_ju\in L^p$, so [F5] proves $\tau_hu\in W^{1,p}$ and $D_j(\tau_hu)=\tau_hD_ju$. Translation acts on almost-everywhere classes because it preserves null sets; hence both the derivative identity and the estimate are representative-independent. [F3, F5, given]

2.1 The convergence $\varphi_m\to u$ in $W^{1,p}$ gives $\|\varphi_m-u\|_p\to0$ and, by [F4], $\||D\varphi_m|-|Du|\|_p\to0$. Translation is an $L^p$ isometry by [F3], so $$\bigl|\|\tau_hu-u\|_p-\|\tau_h\varphi_m-\varphi_m\|_p\bigr|\le2\|u-\varphi_m\|_p.$$ Letting $m\to\infty$ in the inequality of step 1.1 proves $\|\tau_hu-u\|_p\le|h|\|Du\|_p$. [F3, F4, step 1.1]

3.1 If $h=0$ the estimate is equality. For every $h$ the preceding argument proves the stated estimate and translated derivative identity, with all expressions depending only on the classes in $L^p$. [step 2.1, step 1.2] ∎