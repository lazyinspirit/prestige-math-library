---
id: ex-factorization-of-a-rational-function
kind: example
title: "Inner-outer factorization of a rational function with one interior zero"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [thm-inner-outer-factorisation-hardy-space, def-inner-singular-inner-and-outer-functions, def-blaschke-product, thm-blaschke-product-boundary-values-and-zeros, lem-outer-function-properties, ex-outer-function-with-prescribed-boundary-modulus, def-unit-disc-upper-half-plane-and-blaschke-factor, thm-complex-polynomials-and-rational-functions-are-holomorphic, lem-complex-conjugation-and-modulus-laws]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. B. Garnett, Bounded Analytic Functions, revised first edition, Chapter II §5, Corollary 5.7"
      url: "https://dokumen.pub/bounded-analytic-functions-0387336214-9780387336213.html"
      locator: "printed p. 71: uniqueness of the decomposition $f=CBSF$ and the fact that finite Blaschke products occur exactly for rational inner factors."
    - title: "R. K. Srivastava, Lecture Notes on Hardy Spaces (MA650, IIT Guwahati), §5.10, Theorem 5.32-5.33"
      url: "https://fac.iitg.ac.in/rksri/MA650%20Advanced%20Hardy%20Spaces%20Notes.pdf"
      locator: "printed pp. 42-47: the canonical factorization and the equality characterization for outer functions."
---

## Example

Fix $a\in\mathbb D$, $a\ne0$, and put
$$f(z):=\frac{z-a}{1-\overline a z}\cdot\frac{1+z}{2}.$$
Then $f$ is a rational function holomorphic on a neighbourhood of
$\overline{\mathbb D}$; its only zero in $\mathbb D$ is $a$ (simple), its only
pole is $1/\overline a$ outside the closed disc, and
$|f^*|=\frac{|1+\zeta|}{2}$ on $\mathbb T$. In the normalized inner-outer
factorization of [[thm-inner-outer-factorisation-hardy-space]] one has
$$B=b_a,\qquad \mu=0\ \ (S_\mu=1),\qquad F(z)=\frac{1+z}{2},\qquad \lambda=-\frac{a}{|a|},$$
because $\frac{z-a}{1-\overline az}=-\frac{a}{|a|}\,b_a(z)$ and $F$ is outer
with $F(0)=\frac12>0$ and $|F^*|=\frac{|1+\zeta|}{2}$. Thus $f=\lambda\,B\,F$,
a pure Blaschke-times-outer factorization with trivial singular factor, and
$\|f\|_{H^\infty}=1$, while $\|B\|_{H^\infty}=1$ and $\|F\|_{H^\infty}=1$.

## Facts & Assumptions

**Given:** A point $a\in\mathbb D$, $a\ne0$, and the rational function $f(z)=\frac{z-a}{1-\overline az}\cdot\frac{1+z}{2}$.

[F1] The Blaschke factor $\varphi_a(z)=\frac{a-z}{1-\overline az}$ is holomorphic on a neighbourhood of $\overline{\mathbb D}$, $\varphi_a$ is a biholomorphic self-map of $\mathbb D$ with $\varphi_a(a)=0$ and $|\varphi_a(\zeta)|=1$ for $\zeta\in\mathbb T$; the normalized factor is $b_a=\frac{\overline a}{|a|}\varphi_a$, so $\frac{z-a}{1-\overline az}=-\frac{a}{|a|}b_a(z)$ because $|a|/\overline a=a/|a|$ ([[def-blaschke-product]], [[def-unit-disc-upper-half-plane-and-blaschke-factor]], [[thm-blaschke-product-boundary-values-and-zeros]], [[lem-complex-conjugation-and-modulus-laws]]).

[F2] Outer functions: an outer function with prescribed boundary modulus $H$ and positive value at the origin is unique; $(1+z)/2$ is outer because $\log|(1+z)/2|=P[\log|(1+\zeta)/2|]$, the computation of the preceding example with $\zeta$ replaced by $-\zeta$, and $(1+z)/2$ is holomorphic and zero-free on $\mathbb D$ with $(1+0)/2=1/2>0$ and $|(1+\zeta)/2|=|1+\zeta|/2$ on $\mathbb T$ ([[ex-outer-function-with-prescribed-boundary-modulus]], [[lem-outer-function-properties]], [[def-inner-singular-inner-and-outer-functions]]).

[F3] The rational function $f$ is holomorphic on a neighbourhood of $\overline{\mathbb D}$: the denominator $1-\overline az$ does not vanish for $|z|\le1$ because $|\overline az|\le|a|<1$; the numerator $z-a$ vanishes exactly at $z=a\in\mathbb D$; and the second factor $(1+z)/2$ vanishes at $z=-1\notin\mathbb D$ and is nonzero on $\mathbb D$ ([[thm-complex-polynomials-and-rational-functions-are-holomorphic]]).

[F4] The normalized inner-outer factorization $f=\lambda BS_\mu F$ of [[thm-inner-outer-factorisation-hardy-space]] is unique in the normalized sense, with $B$ determined by the zeros of $f$, $F$ the unique outer function with $F(0)>0$ and $|F^*|=|f^*|$ a.e., and $S_\mu$ with $S_\mu(0)>0$.

## Verification

1.1 Basic properties of $f$. By [F3], $f$ is rational and holomorphic on a neighbourhood of $\overline{\mathbb D}$; its only zero in $\mathbb D$ is the simple zero $a$ of the first factor (the second factor $(1+z)/2$ has its zero at $-1\notin\mathbb D$), and its only pole is at $z=1/\overline a$, which lies outside the closed disc because $|1/\overline a|=1/|a|>1$. [given, F3, algebra]

2.1 Boundary modulus. On $\mathbb T$, $|\varphi_a(\zeta)|=1$ by [F1] and $|1+\zeta|$ is the modulus of the second numerator, so $|f^*(\zeta)|=1\cdot\frac{|1+\zeta|}{2}=\frac{|1+\zeta|}{2}$. [step 1.1, F1, algebra]

3.1 The factors. Write $f=\bigl(-\frac{a}{|a|}b_a\bigr)\cdot\frac{1+z}{2}$ by [F1]. The first factor is a unimodular constant times the Blaschke factor $b_a$, and the second factor $F(z):=\frac{1+z}{2}$ is outer with $F(0)=\frac12>0$ and $|F^*|=\frac{|1+\zeta|}{2}=|f^*|$ by [F2] and step 2.1; in particular $F$ is the unique outer function with these normalizations by [F4]. Hence the normalized factorization is $f=\lambda\,B\,S_\mu\,F$ with $\lambda=-\frac{a}{|a|}$, $B=b_a$ and trivial singular factor $\mu=0$, $S_\mu=1$: the quotient $f/(BF)=\lambda$ is constant of modulus $1$, as the uniqueness clause of [F4] requires. [step 2.1, F1, F2, F4, algebra]

4.1 Norms. For $z\in\mathbb D$ one has $|b_a(z)|\le1$ and $|1+z|\le2$, so $|f(z)|=|b_a(z)|\,\frac{|1+z|}{2}\le1$; and $\|B\|_{H^\infty}=1$, $\|F\|_{H^\infty}=\sup_{z\in\mathbb D}\frac{|1+z|}{2}=1$, with both suprema approached as $z\to-1$, where also $|b_a(z)|\to|b_a(-1)|=1$. Hence $\|f\|_{H^\infty}=1=\|B\|_{H^\infty}\|F\|_{H^\infty}$, consistent with the general bound $\|f\|_\infty\le\|B\|_\infty\|S_\mu\|_\infty\|F\|_\infty$. [step 3.1, F1, algebra] ∎
