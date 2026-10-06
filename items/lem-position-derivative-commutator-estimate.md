---
id: lem-position-derivative-commutator-estimate
kind: lemma
title: 'The coordinate inequality $\|x_jf\|_2\|D_jf\|_2\ge\frac12\|f\|_2^2$'
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps:
  - def-complex-lp-and-euclidean-test-function-conventions
  - def-countable-choice
  - def-sobolev-space-wkp-and-its-norm
  - lem-complex-lp-completeness-density-and-inner-product
  - lem-schwartz-cutoffs-from-the-standard-smooth-step
  - lem-sobolev-integration-by-parts-for-dual-exponents
  - lem-weak-leibniz-rule-with-a-smooth-factor
  - thm-dominated-convergence
  - thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces
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
    - title: "Calder Sheagren, Uncertainty Principles with Fourier Analysis (University of Chicago REU 2017, author PDF)"
      url: "https://math.uchicago.edu/~may/REU2017/REUPapers/Sheagren.pdf"
      locator: "§3, equations (3.8)–(3.12), pp. 5–8"
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes (arXiv:0903.3845)"
      url: "https://arxiv.org/pdf/0903.3845"
      locator: "Remark 24.6, pp. 145–146"
---

## Statement

Assume Countable Choice. Let $n\ge1$, $j\in\{1,\dots,n\}$ and
$f\in H^1(\mathbb R^n;\mathbb C)$ with $xf\in L^2(\mathbb R^n;\mathbb C^n)$.
Here $H^1=W^{1,2}$ under the regular-distribution identification of
[[thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]], and
$D_jf\in L^2$ denotes the weak partial derivative. Then
$$\|x_jf\|_2\,\|D_jf\|_2\ge \tfrac12\|f\|_2^2.$$
By the Fourier characterization of $H^1$, this is the coordinate estimate
on the natural domain where both $|x|f$ and $|\xi|\widehat f$ lie in $L^2$.
Both sides vanish when $f=0$; for nonzero $f$ the right side is positive.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $j\in\{1,\dots,n\}$, and
$f\in H^1(\mathbb R^n;\mathbb C)$ with $xf\in L^2(\mathbb R^n;\mathbb C^n)$.

[A1] Countable Choice is the assumption carried by the Sobolev and compact-support integration-by-parts interfaces below ([[def-countable-choice]]).

[F1] The Fourier characterization identifies $H^1$ with $W^{1,2}$ under the
regular-distribution embedding, so each weak derivative $D_kf$ belongs to
$L^2$; its Fourier-side weight is $\langle\xi\rangle\widehat f$
([[thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]]).

[F2] There is a real smooth cutoff $\chi$ with $0\le\chi\le1$, $\chi=1$ on
$|x|\le1$, $\chi=0$ on $|x|\ge2$, and
$D_j(\chi(x/R))=R^{-1}(D_j\chi)(x/R)$
([[lem-schwartz-cutoffs-from-the-standard-smooth-step]]).

[F3] For $u\in W^{1,2}$ and a smooth multiplier $\rho$ with bounded
derivatives, $\rho u\in W^{1,2}$ and
$D_j(\rho u)=(D_j\rho)u+\rho D_ju$
([[lem-weak-leibniz-rule-with-a-smooth-factor]]).

[F4] If $u,v\in W^{1,2}(\mathbb R^n)$ and one factor is compactly supported as
an almost-everywhere class, then
$\int uD_jv=-\int vD_ju$
([[lem-sobolev-integration-by-parts-for-dual-exponents]]).

[F5] Complex $L^2$ satisfies Cauchy–Schwarz, so the product of two $L^2$
functions is integrable
([[lem-complex-lp-completeness-density-and-inner-product]]).

[F6] If integrable functions converge almost everywhere under a common
integrable majorant, their integrals converge
([[thm-dominated-convergence]]).

[F7] The Sobolev test identity is bilinear and does not conjugate its test
function ([[def-sobolev-space-wkp-and-its-norm]],
[[def-complex-lp-and-euclidean-test-function-conventions]]).

## Proof

**Proof technique:** cutoff integration by parts, followed by vanishing $L^2$ tails.

1.1 Since $f\in H^1=W^{1,2}$ by [F1], each weak derivative $D_kf$ lies in $L^2$. Conjugating the bilinear weak-derivative test identity for $f$ shows that $\overline f\in W^{1,2}$ and $D_k\overline f=\overline{D_kf}$: for each $\phi\in C_c^\infty$, apply the identity to $\overline\phi$ and conjugate it. [A1, F1, F7, given]

2.1 For $R\ge1$ set $\chi_R(x)=\chi(x/R)$ and $\rho_R(x)=x_j\chi_R(x)$. By [F2], $\rho_R\in C_c^\infty$; by [F3] and step 1.1, $v_R:=\rho_R\overline f$ belongs to $W^{1,2}$ and is compactly supported, with $$D_jv_R=(\chi_R+x_jD_j\chi_R)\overline f+x_j\chi_R\overline{D_jf}.$$ Applying [F4] to $u=f$ and $v=v_R$ gives $$\int fD_jv_R=-\int v_RD_jf,$$ hence $$\int\chi_R|f|^2+\int x_jD_j\chi_R|f|^2=-2\operatorname{Re}\int x_j\chi_R\overline fD_jf.$$ The last identity uses that $\chi_R$ and $x_j$ are real-valued, so the two derivative terms are complex conjugates. [F2, F3, F4, step 1.1, given]

3.1 Let $R\to\infty$ through positive integers. We have $\chi_R(x)\to1$ pointwise and $0\le\chi_R\le1$, so dominated convergence [F6] gives $\int\chi_R|f|^2\to\|f\|_2^2$. The derivative $D_j\chi_R$ vanishes unless $R\le|x|\le2R$, and $|x_jD_j\chi_R|\le2\|D_j\chi\|_\infty$ there by [F2]; for every fixed $x$ this factor is eventually zero. Since $|f|^2\in L^1$, [F6] gives $\int x_jD_j\chi_R|f|^2\to0$. Finally, $x_j\overline fD_jf\in L^1$ by [F5], because $x_jf,D_jf\in L^2$; dominated convergence with $|\chi_R|\le1$ yields $$\|f\|_2^2=-2\operatorname{Re}\int x_j\overline fD_jf.$$ [F2, F5, F6, step 2.1]

4.1 By [F5] and $|\operatorname{Re}z|\le|z|$, $$\|f\|_2^2\le2\int|x_jf|\,|D_jf|\le2\|x_jf\|_2\|D_jf\|_2.$$ Dividing by $2$ proves the inequality. If $f=0$ both sides vanish; if $f\ne0$ the lower bound is positive. [F5, step 3.1] ∎
