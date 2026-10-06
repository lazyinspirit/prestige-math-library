---
id: ex-right-translation-semigroup-on-lp
kind: example
title: "The right-translation semigroup on Lp has the weak derivative as generator"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps:
  - thm-complex-lp-completeness-and-almost-everywhere-subsequences
  - thm-riesz-fischer-completeness-of-l-p
  - def-strongly-continuous-semigroup
  - def-infinitesimal-generator-of-a-c-zero-semigroup
  - thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-weak-derivative-of-a-locally-integrable-function
  - def-sobolev-space-wkp-and-its-norm
  - thm-meyers-serrin-density-on-an-arbitrary-open-set
  - thm-dominated-convergence
  - def-translation-of-a-function-on-rn
  - lem-classical-derivatives-are-weak-derivatives
  - thm-holder-inequality-for-integrals
  - thm-locally-integrable-functions-embed-in-distributions
  - def-countable-choice
  - lem-average-convergence-of-a-continuous-banach-valued-function
  - thm-bounded-linear-maps-commute-with-bochner-integration
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - def-conjugate-exponents
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: "Chapter I Section 4.c, translation semigroups, printed pp. 33-36"
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: "Chapter II Section 2, Example 2.13 and its generator, printed pp. 65-68"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 11 Section 11.3, Example 11.2, printed pp. 256-258"
verification:
  precheck: pass
---

## Example

Assume Countable Choice ([[def-countable-choice]]). Let $1\le p<\infty$ and $X=L^p(\mathbb R)$ ([[def-l-p-space-as-a-quotient-by-null-functions]]). For $t\ge0$ and $f\in X$ define $(T(t)f)(s):=f(s+t)$ (the right translation, represented on the a.e. class by [[def-translation-of-a-function-on-rn]]). Then $(T(t))_{t\ge0}$ is a strongly continuous semigroup of isometries on $X$ (each $T(t)$ has norm $1$), and its generator is $$Af=f'\quad\text{with}\quad D(A)=W^{1,p}(\mathbb R)=\{f\in L^p(\mathbb R):\ f'\in L^p(\mathbb R)\},$$ the derivative being the weak derivative ([[def-weak-derivative-of-a-locally-integrable-function]], [[def-sobolev-space-wkp-and-its-norm]]). Moreover $\|\frac{T(h)f-f}{h}-f'\|_p\to0$ for every $f\in W^{1,p}(\mathbb R)$.

## Verification

**Given:** Countable Choice; $1\le p<\infty$; $X=L^p(\mathbb R)$; $(T(t)f)(s)=f(s+t)$ for $t\ge0$; $f\in X$; for $f\in W^{1,p}(\mathbb R)$ the weak derivative is written $f'$.

[F1] $L^p(\mathbb R;\mathbb R)$ is Banach under Countable Choice by [[thm-riesz-fischer-completeness-of-l-p]]; for complex classes use [[thm-complex-lp-completeness-and-almost-everywhere-subsequences]]. $T(t)=\tau_{-t}$ in the translation convention of [[def-translation-of-a-function-on-rn]]; each $T(t)$ is linear, and the family is a strongly continuous semigroup of isometries: the functional equation is immediate and strong continuity at $0$ is the published translation-continuity theorem for $1\le p<\infty$, which assumes Countable Choice ([[thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-countable-choice]]).

[F2] Weak derivative: $v$ represents $D^1f$ exactly when $\int_{\mathbb R}f\varphi'=-\int_{\mathbb R}v\varphi$ for every $\varphi\in C_c^\infty(\mathbb R)$, and $W^{1,p}(\mathbb R)$ consists of the $L^p$ classes with $f'\in L^p$ ([[def-weak-derivative-of-a-locally-integrable-function]], [[def-sobolev-space-wkp-and-its-norm]]).

[F3] Test functions lie in $L^{p'}$ for the Hölder conjugate exponent $p'$, and $|\int h\varphi|\le\|h\|_p\|\varphi\|_{p'}$ ([[def-conjugate-exponents]], [[thm-holder-inequality-for-integrals]]).

[F4] Dominated convergence: pointwise convergence plus domination by one integrable function gives convergence of the integrals ([[thm-dominated-convergence]]); Lebesgue measure and measurability are translation invariant, so $\int h(s+t)\,ds=\int h(s)\,ds$ for integrable $h$ ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

[F5] The Bochner integral of a continuous $L^p$-valued curve is defined, the norm inequality bounds it, $\Lambda_\varphi(h):=\int h\varphi$ is bounded linear on $L^p$ and therefore commutes with Bochner integrals, and averages of continuous curves converge to their endpoint values ([[lem-average-convergence-of-a-continuous-banach-valued-function]], [[thm-bounded-linear-maps-commute-with-bochner-integration]]); Fubini applies to the absolutely integrable products below ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F6] The embedding of $L^1_{\mathrm{loc}}(\mathbb R)$ into distributions is injective on almost-everywhere classes: a locally integrable function pairing to zero against every test function vanishes almost everywhere ([[thm-locally-integrable-functions-embed-in-distributions]], which assumes Countable Choice).

[F7] The generator is defined by right difference quotients ([[def-infinitesimal-generator-of-a-c-zero-semigroup]], [[def-strongly-continuous-semigroup]]).


**Proof technique:** direct: identify the difference quotients with averages of translates of the weak derivative, then identify the generator in both directions by test-function pairings.

1.1 $T$ is a strongly continuous semigroup of isometries: $T(t)$ is linear, $T(t+s)f=T(t)T(s)f$ and $T(0)=I$ hold pointwise, $\|T(t)f\|_p=\|f\|_p$ because translation preserves the integral of $|f|^p$ [F4], and $T(t)f\to f$ in $L^p$ as $t\downarrow0$ by [F1]. [F1, F4]

1.2 Let $f\in W^{1,p}(\mathbb R)$ and $h>0$. The curve $u\mapsto\tau_{-u}f'$ is continuous from $[0,h]$ to $L^p$ by [F1], so $M_h:=\frac1h\int_0^h\tau_{-u}f'\,du\in L^p$ is defined by [F5], and $\|M_h-f'\|_p\le\sup_{0\le u\le h}\|\tau_{-u}f'-f'\|_p\to0$ as $h\downarrow0$. [F1, F5]

1.3 For $f\in W^{1,p}$ and $h>0$ the difference quotient $q_h:=\frac{T(h)f-f}{h}\in L^p$ equals $M_h$ almost everywhere. Indeed, for every $\varphi\in C_c^\infty(\mathbb R)$, translation invariance [F4] gives $\int_{\mathbb R}q_h\varphi=\frac1h\bigl(\int_{\mathbb R}f(s)\varphi(s-h)\,ds-\int_{\mathbb R}f(s)\varphi(s)\,ds\bigr)=\frac1h\int_{\mathbb R}f(s)\bigl(\varphi(s-h)-\varphi(s)\bigr)ds$; writing $\varphi(s-h)-\varphi(s)=-\int_0^h\varphi'(s-u)\,du$ and applying Fubini [F5] and the weak-derivative identity of [F2] with the test function $\varphi(\cdot-u)$, $\int_{\mathbb R}q_h\varphi=-\frac1h\int_0^h\int_{\mathbb R}f(s)\varphi'(s-u)\,ds\,du=\frac1h\int_0^h\int_{\mathbb R}f'(s)\varphi(s-u)\,ds\,du=\frac1h\int_0^h\Lambda_\varphi(\tau_{-u}f')\,du$; by [F5] this equals $\Lambda_\varphi(M_h)=\int_{\mathbb R}M_h\varphi$. Two $L^p$ functions with the same pairing with every test function coincide almost everywhere by [F6]. [F2, F4, F5, F6]

2.1 Therefore $\bigl\|\frac{T(h)f-f}{h}-f'\bigr\|_p=\|M_h-f'\|_p\to0$ as $h\downarrow0$ for every $f\in W^{1,p}(\mathbb R)$; by the definition of the generator [F7], $W^{1,p}(\mathbb R)\subseteq D(A)$ and $Af=f'$ for $f\in W^{1,p}(\mathbb R)$. [F7, step 1.2, step 1.3]

2.2 Conversely, suppose $f\in D(A)$, so that $q_h\to g$ in $L^p$ for some $g$. For every $\varphi\in C_c^\infty(\mathbb R)$, $|\int(q_h-g)\varphi|\le\|q_h-g\|_p\|\varphi\|_{p'}\to0$ by [F3], so $\int g\varphi=\lim_h\int q_h\varphi$. On the other hand the identity of [step 1.3] (which used only $f\in L^p$) gives $\int q_h\varphi=\frac1h\int f(s)(\varphi(s-h)-\varphi(s))ds$, and for $0<h\le1$ the integrand is supported in a fixed compact interval $K$ and bounded there by $|f|\sup_K|\varphi'|$, whose integral over $K$ is finite because $f\in L^p(K)\subseteq L^1(K)$; since $\frac{\varphi(s-h)-\varphi(s)}{h}\to-\varphi'(s)$ pointwise, dominated convergence [F4] gives $\int g\varphi=-\int f\varphi'$ for every test function $\varphi$. By the definition of the weak derivative [F2], $g$ is the weak derivative of $f$, so $f\in W^{1,p}(\mathbb R)$ and $g=f'$ almost everywhere. [F2, F3, F4, step 1.3]

3.1 Combining [step 2.1] and [step 2.2], the generator of the right-translation semigroup is $Af=f'$ with $D(A)=W^{1,p}(\mathbb R)$, and the difference quotients converge to $f'$ in $L^p$ for every $f\in W^{1,p}(\mathbb R)$; the semigroup is strongly continuous by [step 1.1]. The verification assumes Countable Choice, inherited from the translation-continuity and distribution-embedding inputs. [F1, F6, step 1.1, step 2.1, step 2.2] ∎
