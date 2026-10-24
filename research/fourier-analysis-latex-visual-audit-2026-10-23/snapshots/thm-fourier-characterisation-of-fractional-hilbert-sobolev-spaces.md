---
id: thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces
kind: theorem
title: "Real-order H^s as weighted Fourier distributions"
status: published
origin: pipeline
deps:
  - thm-bessel-potential-space-has-the-weighted-tempered-distribution-characterisation
  - def-real-order-bessel-potential-sobolev-space
  - thm-bessel-potential-completions-embed-in-tempered-distributions
  - lem-japanese-bracket-powers-preserve-schwartz-space
  - lem-smooth-polynomially-bounded-multipliers-on-schwartz-space
  - def-regular-distribution-from-a-locally-integrable-function
  - def-countable-choice
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  audited: 2026-09-30
sources:
  references:
    - title: "Semyon Dyatlov, Lecture Notes for 18.155, current revision"
      url: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
      locator: "§12.1.2, Definition 12.3, equations (12.4)-(12.5), printed p. 140 (weighted norm and inhomogeneous H^s; the completion bridge is proved locally in batch 12)"
    - title: "Mark Williams, Notes on Harmonic Analysis"
      url: https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf
      locator: "§6.2, Definition 6.5, printed p. 25 (p=2 specialization of the inhomogeneous weighted norm; the source's general Lp machinery is not imported)"
---

## Statement

Assume Countable Choice, let $n\ge1$ and $s\in\mathbb R$, and let
$H^s(\mathbb R^n)$ be the real-order Bessel-potential completion of
[[def-real-order-bessel-potential-sobolev-space]] with its canonical embedding
$E_s:H^s(\mathbb R^n)\to\mathcal S'(\mathbb R^n)$
([[thm-bessel-potential-completions-embed-in-tempered-distributions]]). Write
$\langle\xi\rangle=(1+|\xi|^2)^{1/2}$ for the Japanese bracket, $\mathcal F$
for the negative-sign $2\pi$-normalized Fourier transform, and
$u_g(\phi)=\int_{\mathbb R^n}g(\xi)\phi(\xi)\,d\xi$ for the regular tempered
distribution of $g\in L^1_{\mathrm{loc}}(\mathbb R^n)$. Define
$$\mathcal W_s=\bigl\{u\in\mathcal S'(\mathbb R^n):\langle\xi\rangle^s\mathcal Fu=u_g \text{ in }\mathcal S'(\mathbb R^n)\text{ for some }g\in L^2(\mathbb R^n)\bigr\}.$$
Then:

1. The canonical embedding restricts to a bijection
   $E_s:H^s(\mathbb R^n)\to\mathcal W_s$. Thus, after identifying a completion
   class with its image under $E_s$, $H^s(\mathbb R^n)$ is **exactly** the set
   of tempered distributions whose bracket-weighted Fourier transform is the
   regular distribution of an $L^2$ class, and that class $g$ is unique.
2. The norm identity is exact:
$$\|U\|_{H^s}=\|g\|_2=\bigl\|\langle\xi\rangle^s\mathcal F(E_sU)\bigr\|_2 \qquad(U\in H^s),$$
   where the last expression means the $L^2$ norm of the unique density $g$ of
   the distributional product $\langle\xi\rangle^s\mathcal F(E_sU)$, and the
   defining completion norm $q_s(\phi)=\|\langle\xi\rangle^s\widehat\phi\|_2$
   of [[def-real-order-bessel-potential-sobolev-space]] is not renormalized.
3. The product $\langle\xi\rangle^s\mathcal Fu$ is distributional
   multiplication of $\mathcal Fu$ by the smooth polynomially bounded bracket
   weight, not an a priori pointwise product; and $H^s$ elements are completion
   classes, not initially assumed to be functions.

Nothing here replaces the bracket weight by the Laplacian weight
$(1+4\pi^2|\xi|^2)^{s/2}$, and no pointwise value of $g$ at an individual
frequency is asserted before $g$ is obtained from the defining condition.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $s\in\mathbb R$, the Japanese bracket $\langle\xi\rangle\ge1$, and the canonical embedding $E_s:H^s(\mathbb R^n)\to\mathcal S'(\mathbb R^n)$.

[A1] Countable Choice permits one selection from each nonempty set in a countable family ([[def-countable-choice]]).

[F1] For every $n\ge1$ and $s\in\mathbb R$, with $M_s=\{u\in\mathcal S'(\mathbb R^n):\langle\xi\rangle^s\mathcal Fu=u_g$ in $\mathcal S'(\mathbb R^n)$ for some $g\in L^2(\mathbb R^n)\}$, the canonical embedding $E_s$ restricts to a bijection $E_s:H^s(\mathbb R^n)\to M_s$; the class $g$ is unique; and if $u=E_sU$ corresponds to $g$, then $\|U\|_{H^s}=\|g\|_2$. The product is multiplication of a tempered distribution by the smooth bracket multiplier ([[thm-bessel-potential-space-has-the-weighted-tempered-distribution-characterisation]]).

[F2] $H^s(\mathbb R^n)$ is the normed-space completion of $\mathcal S$ in the positive-definite norm $q_s(\phi)=\|\langle\xi\rangle^s\widehat\phi\|_2$: its elements are Cauchy-sequence classes $[u_j]$ modulo zero limiting distance, $\|[u_j]\|_{H^s}=\lim_jq_s(u_j)$, and the constant-sequence map is the canonical dense linear isometry ([[def-real-order-bessel-potential-sobolev-space]]).

[F3] Weighted Fourier transformation extends to a surjective linear isometry $J_s:H^s(\mathbb R^n)\to L^2(\mathbb R^n)$, $J_s([u_j])=\lim_j\langle\xi\rangle^s\mathcal F(u_j)$, and $E_s([u_j])=\mathcal F^{-1}\bigl(u_{\langle\xi\rangle^{-s}J_s[u_j]}\bigr)$ defines a well-defined continuous linear injection that is independent of the representing Cauchy sequence ([[thm-bessel-potential-completions-embed-in-tempered-distributions]]).

[F4] For real $s$ the multipliers $\langle\xi\rangle^s$ and $\langle\xi\rangle^{-s}$ act continuously and invertibly on $\mathcal S'(\mathbb R^n)$ by transposition, so $\langle\xi\rangle^s\mathcal Fu$ is defined for every tempered distribution $u$ ([[lem-japanese-bracket-powers-preserve-schwartz-space]]).

[F5] Multiplication of a tempered distribution by a smooth polynomially bounded symbol $a$ is $\langle au,\varphi\rangle=\langle u,a\varphi\rangle$; with the regular distribution $\langle u_h,\varphi\rangle=\int h\varphi$ of a locally integrable $h$ ([[def-regular-distribution-from-a-locally-integrable-function]]) the same display with $u=u_h$ gives $a\,u_h=u_{ah}$; the bracket weights $\langle\xi\rangle^{\pm s}$ are such symbols ([[lem-smooth-polynomially-bounded-multipliers-on-schwartz-space]]).

## Proof

**Proof technique:** unfold the two definitions of the same weighted set and transfer the batch-12 bijection, uniqueness and isometry.

1.1 The set displayed in the statement is exactly the set $M_s$ of [F1]: both consist of the tempered $u$ for which $\langle\xi\rangle^s\mathcal Fu=u_g$ for some $g\in L^2$, with the same convention that the product is the distributional multiplication of [F4]; hence $\mathcal W_s=M_s$ as subsets of $\mathcal S'(\mathbb R^n)$. [F1, F4, given]

2.1 For $U\in H^s$ put $g:=J_sU\in L^2$ and $u:=E_sU$. By [F3] and [F1] one has $\mathcal Fu=u_{\langle\xi\rangle^{-s}g}$, and $h:=\langle\xi\rangle^{-s}g$ is locally integrable, so [F5] applied with the smooth symbol $a=\langle\xi\rangle^s$ gives $$\langle\xi\rangle^s\mathcal Fu=\langle\xi\rangle^su_{\langle\xi\rangle^{-s}g} =u_{\langle\xi\rangle^s\langle\xi\rangle^{-s}g}=u_g .$$ Hence the unique $L^2$ class attached to $u$ by [F1] is $g$ itself, and the batch-12 norm identity gives $\|U\|_{H^s}=\|g\|_2=\|\langle\xi\rangle^s\mathcal F(E_sU)\|_2$, the last norm being that of the density $g$ of the product. [F1, F3, F5, step 1.1]

3.1 The case $s=0$ is the instance $\langle\xi\rangle^0=1$: the defining condition becomes $\mathcal Fu=u_g$ for some $g\in L^2$, the norm identity reads $\|U\|_{H^0}=\|\mathcal F(E_0U)\|_2$, and the completion norm is $q_0(\phi)=\|\widehat\phi\|_2$ by [F2]. Nothing in steps 1.1 and 2.1 divides by a vanishing weight or degenerates; the instance is included in the general claims. [F2, step 2.1]

4.1 The bijection. By [F1] the map $E_s:H^s\to M_s$ is a bijection, and by step 1.1 $M_s=\mathcal W_s$; hence the canonical embedding restricts to the bijection $E_s:H^s\to\mathcal W_s$, and uniqueness of the class $g$ is part of [F1]. Reading $E_s$ as the canonical identification, $H^s$ consists exactly of the tempered distributions whose bracket-weighted Fourier transform is a regular $L^2$ distribution, with the exact norm of statement 2. In particular no element of $H^s$ is assumed to be a function, and the product is the distributional multiplication of [F4] rather than a pointwise product. [F1, F4, step 1.1, step 2.1, step 3.1]

5.1 Conclusion. Step 4.1 gives the set identity, the canonical bijection and uniqueness; step 2.1 gives the exact norm; step 3.1 covers $s=0$; and step 1.1 records the distributional-product convention. This proves statements 1-3 for arbitrary $n\ge1$ and $s\in\mathbb R$. Countable Choice is used exactly through the completion, embedding and characterization interfaces [F1]-[F3], which carry it as their hypothesis. [A1, F1, F2, F3, step 1.1, step 2.1, step 3.1, step 4.1] ∎
