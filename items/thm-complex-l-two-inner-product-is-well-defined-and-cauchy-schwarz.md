---
id: thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz
kind: theorem
title: "The complex $L^2$ pairing is well-defined and satisfies Cauchy–Schwarz"
status: published
origin: pipeline
landmark: false
deps: [def-complex-l-two-inner-product, thm-complex-holder-minkowski-and-the-quotient-norm, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-the-lebesgue-integral-respects-almost-everywhere-equality, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, lem-complex-conjugation-and-modulus-laws, def-integrable-real-and-complex-functions-and-their-integrals]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "Verify the form directly and expand the squared distance to a scalar multiple."
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "\u00a710.2, Theorem 10.4 and p=2 discussion, pp.285\u2013286; equality proof is the local quadratic expansion. Teschl (10.5), p.282, conjugates the first variable; this scaffold reverses that convention as required by MT-16c."
---

## Statement

On every measure space the pairing $\langle f,g\rangle=\int f\overline g$ on complex $L^2$ is representative-independent, linear in the first variable, conjugate-linear in the second, conjugate symmetric and positive definite, with $\langle f,f\rangle=\|f\|_2^2$. Moreover,
$$|\langle f,g\rangle|\le\|f\|_2\|g\|_2.$$
If $g\ne0$ as a class, equality holds iff $f=cg$ a.e. for some $c\in\mathbb C$. If $g=0$, equality holds for every $f$.

For each finite $m\ge0$, the same conclusions hold on tuples $F=(f_j)_{j<m}$, with pairing $B(F,G)=\sum_{j<m}\langle f_j,g_j\rangle$ and $\|F\|^2=\sum_{j<m}\|f_j\|_2^2$. For $G\ne0$, equality means $f_j=cg_j$ a.e. for every $j$, with one common scalar $c$.

## Facts & Assumptions

**Given:** A measure space and complex $L^2$ classes; for the tuple assertion a fixed finite tuple length $m\ge0$.

[F1] The representative expression is $\int f\overline g$ ([[def-complex-l-two-inner-product]]).

[F2] Hölder gives integrability of $L^2$ products; the quotient norm vanishes exactly on the zero class ([[thm-complex-holder-minkowski-and-the-quotient-norm]]).

[F3] Complex integration is linear on integrable functions ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F4] A.e.-equal integrable functions have equal integrals ([[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]).

[F5] A nonnegative integral is zero iff its integrand is zero a.e. ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

[F6] Conjugation distributes over sums and products, and $z\overline z=|z|^2$ ([[lem-complex-conjugation-and-modulus-laws]]).

[F7] The complex integral is the integral of the real part plus i times the integral of the imaginary part ([[def-integrable-real-and-complex-functions-and-their-integrals]]).

## Proof

**Proof technique:** Verify the form directly and expand the squared distance to a scalar multiple.

1.1 F2 makes $f\overline g$ integrable. Replacing $f,g$ by a.e.-equal representatives changes their product only on the union of the two measurable null disagreement sets. F4 therefore leaves the integral in F1 unchanged. This proves representative independence. [F1, F2, F4]

1.2 For an integrable $h=u+iv$, F7 gives $\int\overline h=\int u-i\int v=\overline{\int h}$. Hence F6 implies $\langle g,f\rangle=\overline{\langle f,g\rangle}$. F3 applied to $(af+bk)\overline g$ gives $\langle af+bk,g\rangle=a\langle f,g\rangle+b\langle k,g\rangle$, and applied to $f\overline{ag+bk}=\overline a f\overline g+\overline b f\overline k$ gives conjugate-linearity in the second variable. All products are integrable by F2. [F1, F2, F3, F6, F7]

1.3 F6 gives $\langle f,f\rangle=\int|f|^2=\|f\|_2^2\ge0$. By F5 this number is zero iff $|f|^2=0$ a.e., which is equivalent to $f=0$ as a class. Thus the form is positive definite and its norm is exactly the modulus $L^2$ norm. [F1, F2, F5, F6]

2.1 For $g\ne0$ put $a=\langle f,g\rangle$, $b=\|g\|_2^2>0$ and $c=a/b$. Sesquilinearity yields $\|f-cg\|_2^2=\|f\|_2^2-\overline c a-c\overline a+|c|^2b=\|f\|_2^2-|a|^2/b$. Nonnegativity proves $|a|^2\le\|f\|_2^2b$, hence Cauchy–Schwarz. Equality implies $\|f-cg\|_2=0$, so $f=cg$ a.e. Conversely, if $f=dg$ a.e., then $\langle f,g\rangle=db$ and $\|f\|_2=|d|\|g\|_2$, giving equality. For $g=0$, both sides of the inequality are zero for every $f$. [F2, step 1.2, step 1.3]

3.1 Finite summation preserves the linearity and symmetry identities. Also $B(F,F)=\sum_{j<m}\|f_j\|_2^2\ge0$, and a finite sum of nonnegative reals is zero iff every summand is zero; step 1.3 then gives definiteness. For $G\ne0$, set $c=B(F,G)/B(G,G)$. Expanding the finite sum using step 1.2 gives $\|F-cG\|^2=\|F\|^2-|B(F,G)|^2/\|G\|^2$. Nonnegativity gives $|B(F,G)|\le\|F\|\|G\|$. The expansion $\|F+G\|^2=\|F\|^2+2\operatorname{Re}B(F,G)+\|G\|^2\le(\|F\|+\|G\|)^2$ gives the triangle inequality; scalar homogeneity follows by scaling each squared component norm. Thus this square root is indeed a norm. As above, equality in Cauchy–Schwarz is equivalent to each $f_j-cg_j$ having norm zero, with this same $c$ for all $j$; conversely a common scalar multiple gives equality by homogeneity. For $G=0$ both sides are zero. If $m=0$, the tuple space has just its zero element and all sums are zero, so the same axioms and zero case apply. [F2, step 1.2, step 1.3, step 2.1] ∎
