---
id: def-convolution-of-a-tempered-distribution-with-a-schwartz-function
kind: definition
title: Convolution of a tempered distribution with a schwartz function
status: draft
origin: pipeline
deps: [def-tempered-distribution, thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
      url: "https://web.archive.org/web/20250519141924if_/https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      locator: "Equation (11.31) and item (5), p. 127"
    - title: "Radu Gelca, Functional Analysis"
      url: "https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf"
      locator: "Definition preceding Theorem 8.4.4, p. 130"
---

## Definition

For $u\in\mathcal S'(\mathbb R^n)$ and
$\varphi\in\mathcal S(\mathbb R^n)$, define the scalar function

$$(u*\varphi)(x)=\langle u_y,\varphi(x-y)\rangle, \qquad x\in\mathbb R^n.$$

For each fixed $x$, the function $y\mapsto\varphi(x-y)$ is the reflection and
translation of a Schwartz function, hence remains in $\mathcal S$ by
[[thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space]].
The pairing with [[def-tempered-distribution|$u$]] is therefore defined.  This
definition initially produces only a scalar function; its smoothness,
derivative identities, polynomial growth, and regular-tempered interpretation
are proved later.  If $u=0$ or $\varphi=0$, the convolution is the zero
function.  No convolution of two arbitrary tempered distributions is defined,
and no choice axiom is used.
