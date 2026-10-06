---
id: "lem-elliptic-form-is-well-defined-and-bounded"
kind: "lemma"
title: "The elliptic form is well defined and bounded on $H^1$"
status: published
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 1
deps:
  - "def-complex-lp-and-euclidean-test-function-conventions"
  - "def-countable-choice"
  - "def-essential-supremum-with-respect-to-a-measure"
  - "def-l-infinity-on-a-measure-space"
  - "def-l-p-space-as-a-quotient-by-null-functions"
  - "def-measurable-function-between-measurable-spaces"
  - "def-sobolev-space-wkp-and-its-norm"
  - "def-uniformly-elliptic-divergence-form-operator"
  - "lem-weak-derivative-is-independent-of-lp-representatives"
  - "thm-cauchy-schwarz-and-the-euclidean-norm"
  - "thm-complex-holder-minkowski-and-the-quotient-norm"
  - "thm-generalized-holder-inequality-for-products"
  - "thm-holder-inequality-for-integrals"
  - "thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§4.7, the estimate (4.24) $|a(u,v)|\\le C_2\\|u\\|_{H^1_0}\\|v\\|_{H^1_0}$ with the displayed term-by-term bound, printed pp. 103–104"
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "§5.1, the coefficient hypotheses $a^{jk},b^j,c\\in L^\\infty(U)$ for the weak generalized Poisson equation, printed p. 101"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§10.2, the boundedness estimate (10.43) $|a(v,u)|\\le C\\|v\\|\\|u\\|$ from coefficient bounds, printed p. 234"
---

## Statement

Assume Countable Choice. Let $L$ and $a$ be as in [[def-uniformly-elliptic-divergence-form-operator]] with coefficient bounds $M_a,M_b,M_c$ (measurability and essential boundedness only; uniform ellipticity is not needed for this lemma). Then every term of
$$a(u,v)=\int_\Omega\Big(a^{ij}D_ju\overline{D_iv}+b^iD_iu\overline{v}+cu\overline{v}\Big)dx$$
is absolutely convergent for $u,v\in H^1(\Omega)$, the value depends only on the $H^1$ classes, and $a$ is a bounded sesquilinear form on $H^1(\Omega)$ with
$$|a(u,v)|\le (nM_a+nM_b+M_c)\|u\|_{H^1}\|v\|_{H^1}.$$
The same bound holds for the restriction of $a$ to $H^1_0(\Omega)$. The listed coefficient exponents are the whole hypothesis: no extra integrability of products is assumed.

## Facts & Assumptions

**Given:** Countable Choice; an open $\Omega\subseteq\mathbb R^n$, $n\ge1$; coefficients $a^{ij},b^i,c:\Omega\to\mathbb K$ measurable and essentially bounded with $|a^{ij}|\le M_a$, $|b^i|\le M_b$, $|c|\le M_c$ almost everywhere; and classes $u,v\in H^1(\Omega)=W^{1,2}(\Omega;\mathbb K)$ with weak derivatives $D_ju,D_iv$.

[F1] Coefficient hypotheses: each coefficient is a measurable, essentially bounded class with the stated a.e. bounds; the divergence-form operator and its form are those of [[def-uniformly-elliptic-divergence-form-operator]] ([[def-essential-supremum-with-respect-to-a-measure]], [[def-l-infinity-on-a-measure-space]], [[def-measurable-function-between-measurable-spaces]]).

[F2] Sobolev norms: for $w\in H^1(\Omega)$ the classes $w$ and $D_jw$ are in $L^2(\Omega)$, $\|w\|_{L^2}\le\|w\|_{H^1}$ and $\|D_jw\|_{L^2}\le\|w\|_{H^1}$, and $H^1(\Omega)$ is the a.e. quotient with quotient $L^2$ norms ([[def-sobolev-space-wkp-and-its-norm]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]]).

[F3] Weak derivatives depend only on the Sobolev class, and products of measurable classes are measurable and change, as integrands, only on null sets when representatives change ([[lem-weak-derivative-is-independent-of-lp-representatives]], [[def-complex-lp-and-euclidean-test-function-conventions]]).

[F4] Estimates: for real measurable $f,g$ Hölder gives $\int|fg|\le\|f\|_p\|g\|_{p'}$ for conjugate exponents, and the general product inequality gives $fg\in L^r$ with $\|fg\|_r\le\|f\|_p\|g\|_q$ when $1/r=1/p+1/q$; the complex forms are the componentwise ones of [[thm-complex-holder-minkowski-and-the-quotient-norm]]; for real vectors Cauchy--Schwarz gives $\sum_{j=1}^n|x_j|\le\sqrt n\,\bigl(\sum_{j=1}^n|x_j|^2\bigr)^{1/2}$ ([[thm-holder-inequality-for-integrals]], [[thm-generalized-holder-inequality-for-products]], [[thm-cauchy-schwarz-and-the-euclidean-norm]]).





## Proof

1.1 Every integrand is measurable and bounded a.e. by a product of $L^2$ classes: the products $a^{ij}D_ju\overline{D_iv}$, $b^iD_iu\overline v$ and $cu\overline v$ are measurable by [F1] and [F3], since products of measurable functions are measurable and representatives agree a.e.; the a.e. coefficient bounds turn each of them into an a.e. dominated multiple of a product of two $L^2$ classes, e.g. $|a^{ij}D_ju\overline{D_iv}|\le M_a|D_ju||D_iv|$ off a null set. [F1, F3]

1.2 Principal part: for almost every $x$, Cauchy--Schwarz in $\mathbb R^n$ applied to the vectors $(|D_ju(x)|)_j$ and $(1,\dots,1)$, together with $|a^{ij}(x)|\le M_a$, gives $$|a^{ij}(x)D_ju(x)\overline{D_iv(x)}|\le nM_a|Du(x)|\,|Dv(x)|,$$ where $|Du|=\bigl(\sum_j|D_ju|^2\bigr)^{1/2}$. Hence $\int_\Omega|a^{ij}D_ju\overline{D_iv}|\,dx\le nM_a\|Du\|_{L^2}\|Dv\|_{L^2}$ by H\"older with exponent $2$, so the principal term converges absolutely. [F1, F2, F4]

1.3 Drift part: summing the coefficientwise bounds and applying H\"older to each $|D_iu||v|$ gives $\sum_{i=1}^n\int_\Omega|b^iD_iu\overline v|\,dx\le M_b\sum_{i=1}^n\|D_iu\|_{L^2}\|v\|_{L^2}\le nM_b\|Du\|_{L^2}\|v\|_{L^2}$, since $\|D_iu\|_{L^2}\le\|Du\|_{L^2}$; the drift term is absolutely convergent. [F1, F2, F4]

1.4 Reaction part: $\int_\Omega|cu\overline v|\,dx\le M_c\|u\|_{L^2}\|v\|_{L^2}$ by H\"older. [F1, F2, F4]

2.1 Bound: adding the three estimates and using $\|Dw\|_{L^2}\le\|w\|_{H^1}$ and $\|w\|_{L^2}\le\|w\|_{H^1}$ for $w=u$ and $w=v$ gives $|a(u,v)|\le nM_a\|u\|_{H^1}\|v\|_{H^1}+nM_b\|u\|_{H^1}\|v\|_{H^1}+M_c\|u\|_{H^1}\|v\|_{H^1}=(nM_a+nM_b+M_c)\|u\|_{H^1}\|v\|_{H^1}$, so $a$ is a bounded form on $H^1(\Omega)$. [F2, step 1.2, step 1.3, step 1.4, algebra]

3.1 Class independence and sesquilinearity: replacing $u$, $v$ or any coefficient by another representative alters each integrand only on a null set, hence leaves every integral unchanged; in particular the two $L^2$ and weak-derivative slots depend only on the classes, and the value is finite by steps 1.2--2.1. Linearity in $u$ and conjugate-linearity in $v$ hold termwise: the principal and drift terms are linear in the $u$-slot and conjugate-linear in the $v$-slot, and the reaction term is linear in $u$ and conjugate-linear in $v$, with the finite sum of absolutely convergent integrals linear separately in each slot. So $a$ is a well-defined bounded sesquilinear form on $H^1(\Omega)$; on the subspace $H^1_0(\Omega)$ the same estimate holds with the restricted norm. [F3, step 2.1] ∎ 