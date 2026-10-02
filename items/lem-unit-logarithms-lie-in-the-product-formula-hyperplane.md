---
id: lem-unit-logarithms-lie-in-the-product-formula-hyperplane
kind: lemma
title: Unit logarithms lie in the trace-zero hyperplane
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-archimedean-embeddings-and-number-field-signature
  - def-axiom-of-choice
  - def-fractional-ideal
  - def-logarithmic-unit-embedding
  - def-natural-logarithm
  - def-prime-ideal-valuations-on-fractional-ideals
  - lem-algebraic-integer-is-a-unit-iff-norm-is-plus-or-minus-one
  - lem-complex-conjugation-and-modulus-laws
  - thm-field-norm-and-trace-by-embeddings
  - thm-natural-logarithm-laws
  - thm-product-formula-for-number-fields
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 5 p.87: L(U) is contained in H, using the doubled complex coordinates."
    - title: "Andrew V. Sutherland, MIT 18.785 Lecture 15: Dirichlet's Unit Theorem (Fall 2021)"
      url: "https://math.mit.edu/classes/18.785/2021fa/LectureNotes15.pdf"
      locator: "§15.2 pp.5-6: T(Log x)=log N(x), and units have normalized norm 1."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let
$H=\{(x_i)\in\mathbb R^{r_1+r_2}:\sum_i x_i=0\}$. Then
$\lambda(\mathcal O_K^\times)\subseteq H$; that is, the coordinate sum of
$\lambda(u)$ is $\log|N_{K/\mathbb Q}(u)|$, which vanishes for every unit.

## Facts & Assumptions

**Given:** The Axiom of Choice, a number field $K$ of signature $(r_1,r_2)$
with its logarithmic embedding $\lambda$
([[def-logarithmic-unit-embedding]]), and a unit $u\in\mathcal O_K^\times$.

[F1] The logarithmic embedding is
$\lambda(x)=(\log|\sigma_1x|,\dots,\log|\sigma_{r_1}x|,2\log|\tau_1x|,\dots,2\log|\tau_{r_2}x|)$
on $K^{\times}$, where $\sigma_1,\dots,\sigma_{r_1}$ are the real embeddings
and $\tau_1,\dots,\tau_{r_2}$ one embedding from each complex conjugate pair
([[def-logarithmic-unit-embedding]],
[[def-archimedean-embeddings-and-number-field-signature]]).

[F2] For $x\in K^{\times}$ the product formula reads
$\prod_v|x|_v=1$, where the finite absolute values are
$|x|_{\mathfrak p}=N\mathfrak p^{-v_{\mathfrak p}(x)}$ with
$v_{\mathfrak p}(x)=v_{\mathfrak p}((x))$ the valuation of the principal
fractional ideal, and the archimedean ones are
$|x|_{\sigma}=|\sigma(x)|$ and $|x|_{\tau}=|\tau(x)|^{2}$
([[thm-product-formula-for-number-fields]],
[[def-prime-ideal-valuations-on-fractional-ideals]],
[[def-fractional-ideal]]).

[F3] For $u\in\mathcal O_K$ the element $u$ is a unit if and only if
$N_{K/\mathbb Q}(u)=\pm1$
([[lem-algebraic-integer-is-a-unit-iff-norm-is-plus-or-minus-one]]).

[F4] The modulus of a complex number is nonnegative and vanishes only at $0$,
and satisfies $|zw|=|z|\,|w|$
([[lem-complex-conjugation-and-modulus-laws]]).

[F5] For $x,y>0$ the natural logarithm satisfies
$\log(xy)=\log x+\log y$ and $\log 1=0$
([[thm-natural-logarithm-laws]], [[def-natural-logarithm]]).

[F6] For a finite separable extension such as $K/\mathbb Q$ the norm is the
product of the images under the $[K:\mathbb Q]$ embeddings $K\to\mathbb C$
([[thm-field-norm-and-trace-by-embeddings]]).

[A1] The Axiom of Choice is assumed; its only use in this argument is the
AC-qualified product formula [F2]
([[def-axiom-of-choice]]).

## Proof

**Proof technique:** a unit has valuation zero at every finite prime, so the
product formula collapses to its archimedean part; taking logarithms turns that
product into the coordinate sum of $\lambda(u)$.

1.1 The principal fractional ideal of the unit $u$ is $(u)=\mathcal O_K$, so $v_{\mathfrak p}(u)=v_{\mathfrak p}((u))=0$ for every nonzero prime $\mathfrak p$, and the normalized finite absolute value $|u|_{\mathfrak p}=N\mathfrak p^{-v_{\mathfrak p}(u)}$ equals $1$ at every finite place. [F2, given]

1.2 Every modulus $|\sigma_iu|$ and $|\tau_ju|$ is strictly positive: the embeddings are injective field homomorphisms, $u\ne0$, and a nonzero complex number has positive modulus. [F4, given]

1.3 Since $u$ is a unit, $N_{K/\mathbb Q}(u)=\pm1$ and therefore $|N_{K/\mathbb Q}(u)|=1$. [F3, given]

2.1 For $x=u$ the product formula gives $\prod_v|u|_v=1$; by step 1.1 every finite factor equals $1$, so the archimedean factors satisfy $\bigl(\prod_{i=1}^{r_1}|\sigma_iu|\bigr)\bigl(\prod_{j=1}^{r_2}|\tau_ju|^{2}\bigr)=1$. [F2, step 1.1]

3.1 Applying the logarithm to the identity of step 2.1 yields $\sum_{i=1}^{r_1}\log|\sigma_iu|+\sum_{j=1}^{r_2}\log|\tau_ju|^{2}=\log 1=0$; since $\log(a^{2})=2\log a$ for $a>0$ by step 1.2, the left-hand side equals $\sum_k\lambda(u)_k$, the coordinate sum of $\lambda(u)$; hence this coordinate sum is $0$ and $\lambda(u)\in H$. [F1, F5, step 2.1, step 1.2]

4.1 The same coordinate sum equals $\log|N_{K/\mathbb Q}(u)|$: the embedding formula [F6] gives $|N_{K/\mathbb Q}(u)|=\bigl(\prod_i|\sigma_iu|\bigr)\bigl(\prod_j|\tau_ju|^{2}\bigr)$, whose logarithm is the sum of step 3.1, and by step 1.3 this is $\log 1=0$. [F5, F6, step 1.3, step 3.1]

5.1 As $u\in\mathcal O_K^\times$ was arbitrary, $\lambda(\mathcal O_K^\times)\subseteq H$; the only Choice used is [A1] through the AC-qualified product formula, the remaining computations being evaluations of norms, moduli and logarithms. [A1, step 3.1, step 4.1] ∎
