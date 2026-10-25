---
id: def-complex-haar-lp-spaces-and-compactly-supported-functions
kind: definition
title: "Complex Haar L^p spaces and compactly supported functions"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-integrable-real-and-complex-functions-and-their-integrals, def-l-p-space-as-a-quotient-by-null-functions, def-compact-support-c-c-and-c-zero-on-an-lch-space, def-left-haar-integral-and-left-haar-measure]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Lynn Loomis, An Introduction to Abstract Harmonic Analysis, §§30–31"
      url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
      locator: "§§30A–30B and 31A–31E, printed pp. 115–125"
    - title: "Emmanuel Kowalski, Representation Theory of Groups, §§5.2–5.3"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§§5.2–5.3, printed pp. 212–230"
verification:
  audited: 2026-09-27
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Definition

Let $X$ be an LCH space with a fixed Radon measure $\mu$, and write
$C_c(X;\mathbb C)$ for the space of continuous complex-valued functions of
compact support ([[def-compact-support-c-c-and-c-zero-on-an-lch-space]]). A
complex-valued function on $X$ is **measurable** when its real and imaginary
parts are measurable, and it is **integrable** when its modulus is integrable
([[def-integrable-real-and-complex-functions-and-their-integrals]]). For
$p\in\{1,2\}$ the space $L^p(X,\mu;\mathbb C)$ consists of the almost-everywhere
equivalence classes of measurable complex functions $f$ with
$$\|f\|_p:=\Bigl(\int_X|f|^p\,d\mu\Bigr)^{1/p}<\infty ,$$
the quotient and class notation being those of
[[def-l-p-space-as-a-quotient-by-null-functions]]. The **modulus** $|f|$ of a
complex measurable function is measurable and depends only on the class of $f$
up to a null set, so $\|\cdot\|_p$ is well defined on classes; on classes it is
the norm of a complex normed space, and
$L^1(X,\mu;\mathbb C)$ and $L^2(X,\mu;\mathbb C)$ are the complex Lebesgue
spaces used on this page.

Let now $G$ be an LCH group with a fixed left Haar measure $\mu$
([[def-left-haar-integral-and-left-haar-measure]]). Then
$C_c(G):=C_c(G;\mathbb C)$ and
$$L^p(G):=L^p(G,\mu;\mathbb C)\qquad(p\in\{1,2\}),$$
suppressing the measure from the notation; the Haar measure is kept fixed
throughout the page, so no ambiguity arises. The subscript is written
$\|f\|_1$ and $\|f\|_2$ for the two norms.

## Remarks

- **Every $C_c$ function lies in both spaces.** If $f\in C_c(G)$ then
  $|f|$ is bounded on the compact set $\operatorname{supp}f$ and this set has
  finite $\mu$-measure, so $\int|f|\,d\mu<\infty$ and
  $\int|f|^2\,d\mu<\infty$; the class of $f$ in $L^p(G)$ is therefore defined
  for $p=1,2$.
- **Why the complex spaces are defined locally.** The quotient construction of
  [[def-l-p-space-as-a-quotient-by-null-functions]] is stated for real-valued
  functions and its norm theory is developed there for that case; the present
  definition fixes the complex version and its notation before convolution and
  the regular representations use it. No additional choice is needed here once
  $\mu$ is fixed.
- **Finiteness of the Haar measure on compact sets.** The integrability just
  claimed uses that a left Haar measure is finite on compact sets, which is part
  of the definition of a Radon measure recorded in
  [[def-left-haar-integral-and-left-haar-measure]].
