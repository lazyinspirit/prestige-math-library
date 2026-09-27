---
id: lem-l1-convolution-norm-inequality
kind: lemma
title: "Submultiplicativity of convolution in the L1 norm"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-convolution-preserves-cc-and-is-associative, def-compactly-supported-convolution-on-a-group, lem-compactly-supported-kernels-admit-commuting-radon-integrals, def-left-haar-integral-and-left-haar-measure, def-complex-haar-lp-spaces-and-compactly-supported-functions, thm-integral-triangle-inequality, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Lynn Loomis, An Introduction to Abstract Harmonic Analysis, §§30–31"
      url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
      locator: "§31A–31E, printed pp. 119–125"
    - title: "Emmanuel Kowalski, Representation Theory of Groups, §§5.2–5.3"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§5.3, printed pp. 225–230"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Assume AC. For $f,g\in C_c(G)$ on an LCH group $G$ with fixed left Haar measure,
$$\|f\ast g\|_1\le\|f\|_1\,\|g\|_1 ,$$
the norms being those of [[def-complex-haar-lp-spaces-and-compactly-supported-functions]].

## Facts & Assumptions
**Given:** An LCH group $G$, a left Haar measure $\mu$, and $f,g\in C_c(G)$ complex-valued of compact support.

[F1] $(f\ast g)(x)=\int_Gf(y)g(y^{-1}x)\,d\mu(y)$ with $f\ast g\in C_c(G)$ under AC ([[def-compactly-supported-convolution-on-a-group]], [[lem-convolution-preserves-cc-and-is-associative]]).

[F2] Assume AC. For a continuous compactly supported real kernel on a product of LCH spaces the partial integrals are continuous and compactly supported and the iterated integrals commute; the complex case obeys the same identity ([[lem-compactly-supported-kernels-admit-commuting-radon-integrals]]).

[F3] The measure $\mu$ is left invariant, that is $\int_GH(ax)\,d\mu(x)=\int_GH(x)\,d\mu(x)$ for $\mu$-integrable $H$ and $a\in G$ ([[def-left-haar-integral-and-left-haar-measure]]).

[F4] $\|f\|_1=\int_G|f|\,d\mu$ and $|f|$ is continuous of compact support when $f$ is ([[def-complex-haar-lp-spaces-and-compactly-supported-functions]]).

[F5] The integral satisfies $|\int_GF\,d\mu|\le\int_G|F|\,d\mu$ for integrable complex $F$ ([[thm-integral-triangle-inequality]]).

[A1] AC is assumed in the choice-function form of the cited definition ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 For $x\in G$, [F5] applied to the integrable function $y\mapsto f(y)g(y^{-1}x)$ gives $|(f\ast g)(x)|\le\int_G|f(y)|\,|g(y^{-1}x)|\,d\mu(y)$. [F1, F5]

1.2 The kernel $H(x,y):=|f(y)|\,|g(y^{-1}x)|$ is real, nonnegative, continuous, and compactly supported: it is a product of continuous functions, and $H(x,y)\ne0$ forces $y\in\operatorname{supp}f$ and $x\in\operatorname{supp}f\cdot\operatorname{supp}g$, a compact set. [F2, F4]

1.3 For each $y\in G$ left invariance [F3] applied to $H_y(x):=|g(y^{-1}x)|$ gives $\int_GH(x,y)\,d\mu(x)=|f(y)|\int_G|g(y^{-1}x)|\,d\mu(x)=|f(y)|\int_G|g(w)|\,d\mu(w)=|f(y)|\,\|g\|_1$. [F3, F4]

2.1 Integrating step 1.2 over $y$ for each $x$ and then over $x$, the iterated integral $\int_G\int_GH(x,y)\,d\mu(y)\,d\mu(x)$ exists and, by [F2] under [A1], equals the reverse iterated integral $\int_G\int_GH(x,y)\,d\mu(x)\,d\mu(y)$. [A1, F2, step 1.2]

3.1 Chaining steps 1.1, 2.1 and 1.3, $\|f\ast g\|_1=\int_G|(f\ast g)(x)|\,d\mu(x)\le\int_G\int_GH(x,y)\,d\mu(y)\,d\mu(x)=\int_G\int_GH(x,y)\,d\mu(x)\,d\mu(y)=\|g\|_1\int_G|f(y)|\,d\mu(y)=\|f\|_1\|g\|_1$. ∎ [F4, step 1.1, step 2.1, step 1.3]
