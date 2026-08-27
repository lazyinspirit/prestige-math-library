---
id: cor-irreducible-real-polynomial-has-degree-one-or-even-degree
kind: corollary
title: "An irreducible polynomial over $\\mathbb R$ has degree $1$ or an even degree"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-odd-degree-real-polynomial-has-a-real-root, cor-factor-theorem-over-a-commutative-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Applications of Galois Theory, Theorem 2.1"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/galoisappn.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Chapter 5"
      url: "https://web.archive.org/web/20170516190815if_/http://www.jmilne.org:80/math/CourseNotes/FT.pdf"
pipeline_run: frontier-20
---

## Statement

If $f \in \mathbb R[x]$ is irreducible, then $\deg f = 1$ or $\deg f$ is even.

## Facts & Assumptions

**Given:** An irreducible polynomial $f \in \mathbb R[x]$.

[L1] Every odd-degree real polynomial has a real root ([[thm-odd-degree-real-polynomial-has-a-real-root]]).

[L2] For a commutative ring $R$, an element $a \in R$, and a polynomial $p \in R[x]$, one has $p(a)=0$ if and only if $x-a$ divides $p$ ([[cor-factor-theorem-over-a-commutative-ring]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $\deg f$ is odd. Then [L1] gives $a \in \mathbb R$ with $f(a)=0$. [given, L1]

2.1 By [L2], the linear polynomial $x-a$ divides $f$. Since $f$ is irreducible and $x-a$ is nonconstant, this forces $f$ to be associated to $x-a$, so $\deg f=1$. [step 1.1, L2, algebra]

3.1 Therefore an irreducible real polynomial can have odd degree only in the linear case. If it is not linear, its degree is not odd and hence is even. [step 2.1, algebra] ∎
