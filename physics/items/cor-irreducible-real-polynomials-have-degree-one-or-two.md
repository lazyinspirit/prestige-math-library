---
id: cor-irreducible-real-polynomials-have-degree-one-or-two
kind: corollary
title: "An irreducible polynomial in $\\mathbb R[x]$ has degree $1$ or $2$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-the-complex-numbers-are-algebraically-closed, lem-nonreal-roots-of-a-real-polynomial-occur-in-conjugate-pairs, thm-evaluation-kernel-and-minimal-polynomial]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Chapter 5"
      url: "https://web.archive.org/web/20170516190815if_/http://www.jmilne.org:80/math/CourseNotes/FT.pdf"
pipeline_run: frontier-20
---

## Statement

If $f \in \mathbb R[x]$ is irreducible, then $\deg f = 1$ or $\deg f = 2$.

## Facts & Assumptions

**Given:** An irreducible polynomial $f \in \mathbb R[x]$.

[L1] The field $\mathbb C$ is algebraically closed, so every nonconstant polynomial in $\mathbb C[x]$ has a complex root ([[thm-the-complex-numbers-are-algebraically-closed]]).

[L2] A nonreal root of a real polynomial comes with its complex conjugate ([[lem-nonreal-roots-of-a-real-polynomial-occur-in-conjugate-pairs]]).

[L3] The minimal polynomial of an algebraic element divides every polynomial that vanishes at that element ([[thm-evaluation-kernel-and-minimal-polynomial]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], choose a root $z \in \mathbb C$ of $f$. If $z \in \mathbb R$, then the minimal polynomial of $z$ over $\mathbb R$ is $x-z$, and [L3] makes $x-z$ divide $f$. Since $f$ is irreducible, this forces $\deg f=1$. [L1, L3, choose]

2.1 Suppose instead that $z \notin \mathbb R$. Then [L2] gives $f(\overline z)=0$. Put $$ q(x):=(x-z)(x-\overline z)=x^2-(z+\overline z)x+z\overline z \in \mathbb R[x]. $$ Because $q(z)=0$, fact [L3] makes the minimal polynomial of $z$ over $\mathbb R$ divide $q$ and also divide $f$. Since $f$ is irreducible, that minimal polynomial is associated to $f$, so $$ \deg f \le \deg q = 2. $$ The degree cannot be $1$ in the nonreal case, hence $\deg f=2$. [L2, L3, step 1.1, algebra]

3.1 The real-root and nonreal-root cases are exhaustive, so every irreducible polynomial in $\mathbb R[x]$ has degree $1$ or $2$. [step 1.1, step 2.1] ∎
