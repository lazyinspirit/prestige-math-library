---
id: cor-every-nonconstant-polynomial-has-a-root-in-an-extension
kind: corollary
title: 'Every nonconstant polynomial over a field has a root in some field extension'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-irreducible-quotient-adjoins-a-root, lem-polynomial-factorisation-into-irreducibles]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Judson, Abstract Algebra: Theory and Applications, Extension Fields"
      url: "https://judsonbooks.org/aata-files/aata-html/fields-section-extension-fields.html"
pipeline_run: frontier-11
---

## Statement

Every nonconstant polynomial $f\in F[x]$ has a root in some field extension
of $F$.

## Facts & Assumptions

**Given:** A field $F$ and a nonconstant polynomial $f\in F[x]$.

[F1] Every nonzero nonunit polynomial over a field is a finite product of irreducible polynomials ([[lem-polynomial-factorisation-into-irreducibles]]).

[F2] If $p$ is monic irreducible, then $F[x]/(p)$ is a field extension in which $x+(p)$ is a root of $p$ ([[thm-irreducible-quotient-adjoins-a-root]]).

## Proof

**Proof technique:** direct.

1.1 A nonconstant polynomial is nonzero and not a unit, so [F1] supplies an irreducible factor $q$ of $f$. [F1]

2.1 Divide $q$ by its nonzero leading coefficient to obtain a monic irreducible factor $p$; $(p)=(q)$ and still $p\mid f$. [step 1.1, algebra]

3.1 By [F2], $K=F[x]/(p)$ is a field extension and $a=x+(p)$ satisfies $p(a)=0$. [F2, step 2.1]

4.1 Since $f=ph$ for some $h\in F[x]$, evaluation gives $f(a)=p(a)h(a)=0$. [step 2.1, step 3.1, algebra] ∎
