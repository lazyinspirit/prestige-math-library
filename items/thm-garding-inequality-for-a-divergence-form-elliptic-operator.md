---
id: thm-garding-inequality-for-a-divergence-form-elliptic-operator
kind: theorem
title: "Garding's inequality for a divergence-form elliptic operator"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps: [def-complex-conjugate-real-imaginary-part-and-modulus, def-complex-lp-and-euclidean-test-function-conventions, def-countable-choice, def-essential-supremum-with-respect-to-a-measure, def-hk-and-hk-zero-notation, def-l-infinity-on-a-measure-space, def-sobolev-space-wkp-and-its-norm, def-uniformly-elliptic-divergence-form-operator, def-wkp-zero-as-a-sobolev-closure, lem-elliptic-form-is-well-defined-and-bounded, thm-holder-inequality-for-integrals, thm-young-inequality-real-exponents, def-l-p-space-as-a-quotient-by-null-functions, thm-cauchy-schwarz-in-an-inner-product-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: 'John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page notes)'
      url: 'https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf'
      locator: 'Section 4.7, Theorem 4.21 and equation (4.23), printed pp. 104-105 (read in full)'
    - title: 'Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, complete 392 pages)'
      url: 'https://web.archive.org/web/20250324094647id_/https://www.math.univie.ac.at/~gerald/ftp/book-pde/pde.pdf'
      locator: 'Section 10.2, the elliptic estimate and Garding inequality (10.44)-(10.47), printed pp. 234-235 (read in full)'
    - title: 'Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)'
      url: 'https://math.stanford.edu/~lms/lecs-on-pde.pdf'
      locator: 'Lecture 7, coercivity and Garding inequality, printed pp. 72-75 (read in full)'
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice (CC) ([[def-countable-choice]]) for the Sobolev and Lebesgue interfaces used by [[def-uniformly-elliptic-divergence-form-operator]] and [[lem-elliptic-form-is-well-defined-and-bounded]]. Let $\Omega\subseteq\mathbb R^n$ be open, $n\ge1$, $\mathbb K\in\{\mathbb R,\mathbb C\}$, and let $L$ and its sesquilinear form $a$ be as in [[def-uniformly-elliptic-divergence-form-operator]], with ellipticity constant $\theta>0$ and coefficient bounds $M_a,M_b,M_c$. Then every $u\in H^1(\Omega)$ satisfies
$$\operatorname{Re}a(u,u)\ \ge\ \frac{\theta}{2}\|Du\|_{L^2(\Omega)}^2-\Big(\frac{nM_b^2}{2\theta}+M_c\Big)\|u\|_{L^2(\Omega)}^2,$$
and consequently, with the explicit constants $\alpha:=\theta/2$ and $\beta:=\theta/2+nM_b^2/(2\theta)+M_c$,
$$\operatorname{Re}a(u,u)\ \ge\ \alpha\|u\|_{H^1(\Omega)}^2-\beta\|u\|_{L^2(\Omega)}^2 .$$
Both inequalities restrict to $u\in H^1_0(\Omega)$. No Poincare inequality, no boundedness of $\Omega$ and no symmetry of $a$ is used; the constants are explicit and are not claimed to be optimal.

## Facts & Assumptions

**Given:** Countable Choice; an open set $\Omega\subseteq\mathbb R^n$, $n\ge1$; $\mathbb K\in\{\mathbb R,\mathbb C\}$; a uniformly elliptic divergence-form operator $L$ and its form $a$ with ellipticity constant $\theta>0$ and coefficient bounds $M_a,M_b,M_c$; and $u\in H^1(\Omega)$ (or $u\in H^1_0(\Omega)$).

[F1] Coefficients and form: $a^{ij},b^i,c$ are measurable and essentially bounded with $|a^{ij}|\le M_a$, $|b^i|\le M_b$, $|c|\le M_c$ almost everywhere, the uniform ellipticity condition $\operatorname{Re}\bigl(\sum_{i,j}a^{ij}(x)\xi_j\overline{\xi_i}\bigr)\ge\theta|\xi|^2$ holds for almost every $x$ and all $\xi\in\mathbb C^n$, and $a(u,u)=\int_\Omega\bigl(a^{ij}D_ju\overline{D_iu}+b^iD_iu\overline u+cu\overline u\bigr)dx$ ([[def-uniformly-elliptic-divergence-form-operator]], [[def-essential-supremum-with-respect-to-a-measure]], [[def-l-infinity-on-a-measure-space]]).

[F2] The three integrals in [F1] are absolutely convergent for $u\in H^1(\Omega)$, so the real part of $a(u,u)$ is the sum of the real parts of the three integrals ([[lem-elliptic-form-is-well-defined-and-bounded]], [[def-complex-lp-and-euclidean-test-function-conventions]]).

[F3] Holder and the coefficient bounds: for measurable functions with $|b^i|\le M_b$, $|c|\le M_c$ almost everywhere, $\bigl|\int_\Omega b^iD_iu\overline u\,dx\bigr|\le M_b\|D_iu\|_{L^2}\|u\|_{L^2}$ and $\bigl|\int_\Omega c|u|^2\,dx\bigr|\le M_c\|u\|_{L^2}^2$ ([[thm-holder-inequality-for-integrals]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F4] For real $r,s\ge0$ and $\theta>0$, Young's inequality with $p=q=2$ gives $\sqrt n\,M_b\,rs\le\frac{\theta}{2}r^2+\frac{nM_b^2}{2\theta}s^2$ ([[thm-young-inequality-real-exponents]]).

[F5] Norm identity: on $H^1(\Omega)$ and on its subspace $H^1_0(\Omega)$ the norm satisfies $\|u\|_{H^1}^2=\|u\|_{L^2}^2+\|Du\|_{L^2}^2$, where $|Du|^2=\sum_{i=1}^n|D_iu|^2$ ([[def-sobolev-space-wkp-and-its-norm]], [[def-hk-and-hk-zero-notation]], [[def-wkp-zero-as-a-sobolev-closure]]).

[F6] Finite-index Cauchy--Schwarz is [[thm-cauchy-schwarz-in-an-inner-product-space]] applied to $(\|D_i u\|_2)_{i=1}^n$ and $(1)_{i=1}^n$ in Euclidean space. Elementary inequalities $|z|\ge\operatorname{Re}z$ and $|z|\ge|\operatorname{Re}z|$ for complex $z$, and $\|Du\|_{L^2}^2=\int_\Omega|Du|^2$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]], [[def-complex-lp-and-euclidean-test-function-conventions]]).

## Proof

**Proof technique:** direct.

1.1 Principal part. Since $Du(x)\in\mathbb C^n$, applying the ellipticity hypothesis with $\xi=Du(x)$ gives $\operatorname{Re}\bigl(a^{ij}(x)D_ju(x)\overline{D_iu(x)}\bigr)\ge\theta|Du(x)|^2$ for almost every $x\in\Omega$, and integration over $\Omega$ yields $$\int_\Omega\operatorname{Re}\bigl(a^{ij}D_ju\overline{D_iu}\bigr)dx\ \ge\ \theta\|Du\|_{L^2}^2 .$$ [F1, F6, algebra]

1.2 Drift term. Pointwise $|b^iD_iu\overline u|\le M_b|D_iu||u|$ almost everywhere, so [F3] gives $\bigl|\int_\Omega b^iD_iu\overline u\,dx\bigr|\le M_b\|D_iu\|_{L^2}\|u\|_{L^2}$ for each $i$. Summing the $n$ terms and applying Cauchy--Schwarz in the index $i$, $\sum_{i=1}^n\|D_iu\|_{L^2}\le\sqrt n\,\|Du\|_{L^2}$, hence $$\Bigl|\int_\Omega b^iD_iu\overline u\,dx\Bigr|\ \le\ \sqrt n\,M_b\,\|Du\|_{L^2}\|u\|_{L^2},$$ and in particular $\operatorname{Re}\int_\Omega b^iD_iu\overline u\,dx\ge-\bigl|\int_\Omega b^iD_iu\overline u\,dx\bigr|\ge-\sqrt n\,M_b\|Du\|_{L^2}\|u\|_{L^2}$. [F1, F3, F6, algebra]

1.3 Reaction term. Since $|cu\overline u|=|c||u|^2\le M_c|u|^2$ almost everywhere, [F3] gives $\bigl|\int_\Omega c|u|^2\,dx\bigr|\le M_c\|u\|_{L^2}^2$, so $\operatorname{Re}\int_\Omega cu\overline u\,dx\ge-M_c\|u\|_{L^2}^2$. [F1, F3, F6, algebra]

2.1 Combine the three terms. By [F2] the real part of $a(u,u)$ is the sum of the three real parts estimated in steps 1.1, 1.2 and 1.3: $$\operatorname{Re}a(u,u)\ \ge\ \theta\|Du\|_{L^2}^2-\sqrt n\,M_b\,\|Du\|_{L^2}\|u\|_{L^2}-M_c\|u\|_{L^2}^2 .$$ [F2, step 1.1, step 1.2, step 1.3, algebra]

3.1 Absorb the drift term. With $r=\|Du\|_{L^2}$ and $s=\|u\|_{L^2}$, [F4] gives $\sqrt n\,M_b\,rs\le\frac{\theta}{2}r^2+\frac{nM_b^2}{2\theta}s^2$, so step 2.1 yields the first displayed inequality $$\operatorname{Re}a(u,u)\ \ge\ \frac{\theta}{2}\|Du\|_{L^2}^2-\Bigl(\frac{nM_b^2}{2\theta}+M_c\Bigr)\|u\|_{L^2}^2 .$$ [F4, step 2.1, algebra]

4.1 Replace the gradient norm using [F5]: $\frac{\theta}{2}\|Du\|_{L^2}^2=\frac{\theta}{2}\|u\|_{H^1}^2-\frac{\theta}{2}\|u\|_{L^2}^2$, so the inequality of step 3.1 becomes $\operatorname{Re}a(u,u)\ge\alpha\|u\|_{H^1}^2-\beta\|u\|_{L^2}^2$ with $\alpha=\theta/2$ and $\beta=\theta/2+nM_b^2/(2\theta)+M_c$; both estimates descend to $u\in H^1_0(\Omega)$ because $H^1_0(\Omega)\subseteq H^1(\Omega)$ and the norms agree, and no Poincare inequality, boundedness of $\Omega$ or symmetry of $a$ entered any step. [F5, step 3.1, given, algebra] ∎ 