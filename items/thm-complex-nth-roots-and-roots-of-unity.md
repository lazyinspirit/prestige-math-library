---
id: thm-complex-nth-roots-and-roots-of-unity
kind: theorem
title: "The $n$-th roots of a complex number and the $n$ distinct roots of unity for every $n\\ge1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-polar-form-with-unique-principal-argument, cor-complex-de-moivre-formula, thm-kernel-and-fibres-of-complex-exponential, thm-nth-roots-exist, def-canonical-natural, def-complex-integer-powers]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I: Complex Numbers and the Complex Exponential"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
pipeline_run: null
---

## Statement

Write $\iota_{\mathbb R}:\mathbb N\to\mathbb R$ for the canonical-natural map of [[def-canonical-natural]]. If $n\in\mathbb N$ with $n\ge1$ and $z=re^{i\theta}\ne0$, its $n$ distinct roots are
$$r^{1/n}\exp\!\left(i\frac{\theta+2\pi\iota_{\mathbb R}(k)}{\iota_{\mathbb R}(n)}\right),\qquad k\in\mathbb N,\quad 0\le k<n.$$
For $z=0$, the only $n$th root is $0$. Thus the $n$th roots of unity are precisely $\exp\!\left(i\frac{2\pi\iota_{\mathbb R}(k)}{\iota_{\mathbb R}(n)}\right)$ for $k\in\mathbb N$ with $0\le k<n$. The conventions and prerequisite facts used below are recorded in [[thm-polar-form-with-unique-principal-argument]], [[cor-complex-de-moivre-formula]], [[thm-kernel-and-fibres-of-complex-exponential]], [[thm-nth-roots-exist]], [[def-canonical-natural]], [[def-complex-integer-powers]].

## Facts & Assumptions

**Given:** $n\in\mathbb N$ with $n\ge1$ and $z\in\mathbb C$.

## Proof

**Proof technique:** constructive.

1.1 For $z\ne0$, construct each listed candidate from the positive real $n$th root of $r$; de Moivre verifies it. [construct]

1.2 The kernel theorem shows two listed candidates coincide only when their indices are equal modulo $n$. [given]

2.1 Conversely polar form and the same kernel calculation force every root onto the list; the $z=0$ case is immediate. [discharge-construct] ∎
