---
id: lem-second-order-kernel-convolution-l2-bias-bound
kind: lemma
title: "Second-order kernel convolution has an L² bias bound"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - def-density-target-and-kernel-density-estimator
  - def-sobolev-space-wkp-and-its-norm
  - cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn
  - cor-c-one-change-of-variables-for-l-one-functions
  - thm-holder-inequality-for-integrals
  - thm-chain-rule-for-total-derivatives
  - thm-integration-by-parts
  - thm-ftc-second-part
  - def-countable-choice
  - def-product-measure-on-sigma-finite-spaces
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Whitney K. Newey, Nonparametric and Semiparametric Estimation, MIT OpenCourseWare 14.385, Fall 2007, integrated MSE calculation, PDF pp. 5–7"
      url: "https://ocw.mit.edu/courses/14-385-nonlinear-econometric-analysis-fall-2007/655fcef1b4192f40d80edea3c1dd85ce_notes_nonsemi.pdf"
    - title: "Adrian Bowman and Ludger Evers, Nonparametric Smoothing, APTS 2013–14 course notes, §1.2.1, PDF p. 8"
      url: "https://warwick.ac.uk/fac/sci/statistics/apts/students/resources-1314/ns_notes.pdf"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $f$ be a density version in
$W^{2,2}(\mathbb R^d)$, and let $K$ be a normalized Borel kernel with
$K\in L^1$, $\int u_jK(u)\,du=0$ for every $j$, and
$$M_2(K):=\int_{\mathbb R^d}|K(u)|\,\|u\|^2du<\infty.$$
Define the convolution $S_hf=\int K(u)f(\cdot-hu)du$ as an $L^2$ equivalence
class. With
$$\|D^2f\|_{2,F}^2:=\sum_{j,k=1}^d\|\partial_{jk}f\|_{L^2}^2,$$
one has, for every $h>0$,
$$\|S_hf-f\|_{L^2}\le\frac{h^2}{2}M_2(K)\,\|D^2f\|_{2,F}.$$

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $d\ge1$, a density version $f\in W^{2,2}(\mathbb R^d)$, and a normalized Borel kernel $K$ with the displayed moment conditions.

[A1] The Axiom of Countable Choice, written $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] Under $\mathrm{AC}_\omega$, $W^{2,2}$ consists of $L^2$ classes whose weak partial derivatives through order two are in $L^2$ ([[def-sobolev-space-wkp-and-its-norm]]).

[F2] Under $\mathrm{AC}_\omega$, $C_c^\infty(\mathbb R^d)$ is dense in $W^{2,2}(\mathbb R^d)$: for every $\epsilon>0$ there is a smooth compactly supported $g$ with $\|g-f\|_{W^{2,2}}<\epsilon$ ([[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]]).

[F3] Tonelli interchanges the integrals of nonnegative product-measurable functions on sigma-finite product spaces ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[def-product-measure-on-sigma-finite-spaces]], [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]).

[F4] Under $\mathrm{AC}_\omega$, a $C^1$ diffeomorphism satisfies the change-of-variables formula for integrable functions; translations therefore preserve $L^2$ norms ([[cor-c-one-change-of-variables-for-l-one-functions]]).

[F5] Holder's inequality with exponents $2,2$ gives $|\int ab|^2\le(\int|a|^2)(\int|b|^2)$ when the square integrals are finite ([[thm-holder-inequality-for-integrals]]).

[F6] The total-derivative chain rule differentiates a smooth function along an affine line ([[thm-chain-rule-for-total-derivatives]]).

[F7] Integration by parts and the second fundamental theorem evaluate $\int_0^1(1-t)q''(t)dt=q(1)-q(0)-q'(0)$ for $q\in C^2([0,1])$ ([[thm-integration-by-parts]], [[thm-ftc-second-part]]).

## Proof
1.1 First take $g\in C_c^\infty(\mathbb R^d)$. For each $x,u$, set $q(t)=g(x-thu)$. The chain rule [F6] gives $q'(0)=-h\nabla g(x)\cdot u$ and $q''(t)=h^2u^TD^2g(x-thu)u$. Integration by parts and the second fundamental theorem [F7] give $g(x-hu)=g(x)-h\nabla g(x)\cdot u+ h^2\int_0^1(1-t)\,u^TD^2g(x-thu)u\,dt.$ The first moments are absolutely integrable since $|u_j|\le1+\|u\|^2$ and $K\in L^1$ with $M_2(K)<\infty$. Integrating against $K(u)$ therefore cancels the constant and linear terms by $\int K=1$ and $\int u_jK(u)du=0$. Euclidean Cauchy–Schwarz gives $|u^TD^2g(y)u|\le\|u\|\,\|D^2g(y)u\|\le \|u\|^2\|D^2g(y)\|_F$. Apply Holder [F5] with the finite measure $|K(u)|(1-t)\|u\|^2du\,dt$, whose total mass is $M_2(K)/2$, to obtain $|S_hg(x)-g(x)|^2\le h^4\left(\frac{M_2(K)}2\right) \int_{\mathbb R^d}\!\int_0^1 |K(u)|(1-t)\|u\|^2\|D^2g(x-thu)\|_F^2dt\,du.$ Tonelli [F3] and translation invariance from [F4] then give $\|S_hg-g\|_2^2\le h^4\left(\frac{M_2(K)}2\right)^2 \|D^2g\|_{2,F}^2.$ [given, A1, F3, F4, F5, F6, F7, algebra]

2.1 For every Borel representative $q\in L^2$, the integrand $(x,u)\mapsto K(u)q(x-hu)$ is product-measurable. Holder [F5] and Tonelli [F3] show its defining integral exists absolutely for almost every $x$ and $\|S_hq\|_2^2\le\|K\|_1 \int_{\mathbb R^d}|K(u)|\int_{\mathbb R^d}|q(x-hu)|^2dx\,du =\|K\|_1^2\|q\|_2^2,$ by Holder [F5], Tonelli [F3], and translation invariance [F4]. If two Borel representatives agree almost everywhere, translation invariance makes their translates agree almost everywhere for each $u$; Tonelli [F3] then makes their convolution integrals agree for almost every $x$. Thus $S_h$ is well-defined as an $L^2$ equivalence class on the classes used here. Given $\epsilon>0$, choose $g\in C_c^\infty$ as in [F2]. The finite sum defining $\|D^2(g-f)\|_{2,F}$ is at most $d\|g-f\|_{W^{2,2}}$, so step 1.1 and the operator bound just proved imply $\|S_hf-f\|_2\le(\|K\|_1+1)\epsilon+ \frac{h^2}{2}M_2(K)\big(\|D^2f\|_{2,F}+d\epsilon\big).$ Letting $\epsilon\downarrow0$ proves the asserted bound. [given, A1, F1, F2, F3, F4, F5, step 1.1, algebra] ∎ 
