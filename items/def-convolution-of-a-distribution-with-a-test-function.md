---
id: "def-convolution-of-a-distribution-with-a-test-function"
kind: "definition"
title: "Convolution of a distribution with a test function"
deps: ["def-distribution"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
status: published
origin: "pipeline"
---

## Definition

For an integer $n\ge1$, $u\in\mathcal D'(\mathbb R^n)$ as in [[def-distribution]], and $\varphi\in\mathcal D(\mathbb R^n)$, define

$$(u*\varphi)(x)=\langle u(y),\varphi(x-y)\rangle.$$

The variable $y$ is the distribution variable: for fixed $x$, the smooth test $y\mapsto\varphi(x-y)$ has compact support $x-\operatorname{supp}\varphi$. The pairing is complex bilinear, with no conjugation; the displayed test, not the pairing convention itself, includes reflection of $\varphi$.

More generally, if $u\in\mathcal D'(\Omega)$, the same formula is defined on the open set $\{x:x-\operatorname{supp}\varphi\subseteq\Omega\}$. Openness follows by covering the compact set $x-\operatorname{supp}\varphi$ by finitely many balls whose closures lie in $\Omega$, giving a positive translation margin. If $\varphi=0$, its support is empty and the formula defines zero everywhere. The subsequent smoothness theorem proves differentiability and its signs; the definition only pairs legitimate compactly supported tests.
