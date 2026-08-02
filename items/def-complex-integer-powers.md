---
id: def-complex-integer-powers
kind: definition
title: "Integer powers in the complex field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-complex-numbers-form-a-field, thm-recursion, def-integers, lem-nat-embeds-int]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I: Complex Numbers and the Complex Exponential"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
pipeline_run: null
---

## Definition

Fix $z\in\mathbb C$. Apply [[thm-recursion]] to the set $\mathbb C$, the
initial value $1$, and the function $w\mapsto wz$. This defines the natural
powers uniquely by
$$
z^0=1,\qquad z^{n+1}=z^nz\quad(n\in\mathbb N).
$$

Let $\jmath\colon\mathbb N\to\mathbb Z$ be the embedding of
[[lem-nat-embeds-int]]. For an integer $r\ge0$, that lemma gives a unique
$n\in\mathbb N$ with $r=\jmath(n)$; define $z^r:=z^n$. If $r<0$ and $z\ne0$,
there is a unique $n\in\mathbb N$ with $n\ge1$ and $-r=\jmath(n)$; define
$$
z^r:=(z^n)^{-1}.
$$
The inverse exists because $\mathbb C$ is a field by
[[thm-complex-numbers-form-a-field]]. Thus nonnegative integer powers are
defined for every $z$, while negative integer powers are defined exactly when
$z\ne0$; in particular $0^0=1$ and no negative power of $0$ is defined. The
integer and its unique natural representative are never conflated.
