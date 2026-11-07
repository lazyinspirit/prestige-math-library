---
id: def-holomorphic-eigenform-hyperbolic-mass-measure
kind: definition
title: "Hyperbolic Mass Measure of a Holomorphic Eigenform"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-normalized-full-level-holomorphic-hecke-eigenform
  - def-petersson-inner-product-on-congruence-forms
  - def-congruence-modular-form-with-nebentypus
  - def-modular-group-action-on-the-upper-half-plane
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "R. Holowinsky and K. Soundararajan, Mass Equidistribution for Hecke Eigenforms"
      url: "https://arxiv.org/pdf/0809.1636v1"
      locator: "Introduction, printed pp. 2–3: invariant mass measure, Petersson normalization and test-function formulation."
    - title: "J. S. Milne, Modular Functions and Modular Forms, version 1.31"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Chapter 5, printed pp. 76–77: Petersson inner product and invariance under the weight-k slash action."
---

## Definition

Let $\mathbb H=\{x+iy:y>0\}$, let $\Gamma=SL_2(\mathbb Z)$ act on $\mathbb H$ by $\begin{pmatrix}a&b\\c&d\end{pmatrix}z=(az+b)/(cz+d)$, and put $X=\Gamma\backslash\mathbb H$. Write $dA=dx\,dy/y^2$ for hyperbolic area. If $k\ge2$ is even and $f(z)=\sum_{n\ge1}a_f(n)e^{2\pi inz}$ is a nonzero full-level holomorphic cusp form with $a_f(1)=1$ and $T_nf=a_f(n)f$ for every $n\ge1$, define its **hyperbolic mass measure** on $X$ by
$$
d\mu_f(z)=\frac{|f(z)|^2y^k}{\langle f,f\rangle_{1,k}}\,dA(z),
\qquad
\langle f,f\rangle_{1,k}=\int_X|f(z)|^2y^k\,dA(z).
$$
The density is \(\Gamma\)-invariant by the weight-\(k\) transformation law. The Petersson norm in the denominator is finite and strictly positive for nonzero cusp forms, so \(\mu_f\) is a probability measure; it is unchanged when \(f\) is multiplied by a nonzero scalar.

## Definition references

[[def-normalized-full-level-holomorphic-hecke-eigenform]]

[[def-petersson-inner-product-on-congruence-forms]]

[[def-congruence-modular-form-with-nebentypus]]

[[def-modular-group-action-on-the-upper-half-plane]]

[Holowinsky–Soundararajan, *Mass Equidistribution for Hecke Eigenforms*, Introduction](https://arxiv.org/pdf/0809.1636v1)

[Milne, *Modular Functions and Modular Forms*, Chapter 5](https://www.jmilne.org/math/CourseNotes/MF.pdf)

## Facts & Assumptions

**Given:** An even integer $k\ge2$ and a nonzero full-level holomorphic cusp form $f$ of weight $k$.

[F1] [[def-normalized-full-level-holomorphic-hecke-eigenform]]: $f$ is a nonzero cusp form with Fourier coefficients $a_f(n)$, $a_f(1)=1$, and $T_nf=a_f(n)f$ for every $n\ge1$.

[F2] [[def-congruence-modular-form-with-nebentypus]]: At level one and trivial character, $f(\gamma z)=(cz+d)^kf(z)$ for every $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in SL_2(\mathbb Z)$.

[F3] [[def-modular-group-action-on-the-upper-half-plane]]: $\operatorname{Im}(\gamma z)=\operatorname{Im}(z)/|cz+d|^2$ for $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in SL_2(\mathbb R)$.

[F4] [[def-petersson-inner-product-on-congruence-forms]]: The hyperbolic area form is invariant, and the Petersson norm is the integral of $|f(z)|^2y^k$ over a fundamental region; it is finite and strictly positive for nonzero cusp forms.

## Proof

1.1 For $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in SL_2(\mathbb Z)$, [F2]–[F3] give
$$|f(\gamma z)|^2\operatorname{Im}(\gamma z)^k=|cz+d|^{2k}|f(z)|^2\frac{y^k}{|cz+d|^{2k}}=|f(z)|^2y^k.$$
Together with area invariance [F4], this proves that the numerator density descends to $X$. [F2, F3, F4, given, algebra]

2.1 By [F4], the denominator $\langle f,f\rangle_{1,k}$ is finite and strictly positive and equals the integral of the numerator over $X$. Dividing by this value makes $\mu_f(X)=1$, so the descended measure is a probability measure. [F4, step 1.1, given, algebra]

3.1 If $f$ is replaced by $cf$ with $c\in\mathbb C\setminus\{0\}$, the numerator density and the Petersson norm are both multiplied by $|c|^2$. Their ratio is unchanged, proving scalar invariance. [F4, given, algebra] ∎
