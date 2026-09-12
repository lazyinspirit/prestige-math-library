---
id: "def-test-function-space-d-of-an-open-set"
kind: "definition"
title: "Test function space d of an open set"
deps: ["def-ck-and-multi-index-notation-in-several-variables"]
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

Let $\Omega\subseteq\mathbb R^n$ be open, with $n\ge1$. A complex-valued function is smooth if its real and imaginary parts are $C^k$ for every finite $k$, in the sense of [[def-ck-and-multi-index-notation-in-several-variables]]. Coordinate derivatives act on these two parts separately. We write $\partial^\alpha$ for the multi-index convention there, and $\partial^0\varphi=\varphi$.

The **test-function space** is $\mathcal D(\Omega)=C_c^\infty(\Omega;\mathbb C)$: its members are smooth functions whose support, the closure in $\Omega$ of their nonzero set, is a compact subset of $\Omega$. Equivalently, the zero extension to $\mathbb R^n$ is smooth with compact support contained in $\Omega$: compactness gives a neighborhood of every boundary point disjoint from the support, where that extension vanishes. Functions are actual functions, not equivalence classes.

Pointwise addition and scalar multiplication make this a complex vector space; the support of a sum lies in the union of the two compact supports. The zero function has empty support. If $\Omega=\varnothing$ there is just the empty function, which is the zero vector. The topology is specified in subsequent definitions. Distribution pairings throughout this page are complex bilinear, with no conjugation on test functions. One may restrict all constructions to real scalars.
