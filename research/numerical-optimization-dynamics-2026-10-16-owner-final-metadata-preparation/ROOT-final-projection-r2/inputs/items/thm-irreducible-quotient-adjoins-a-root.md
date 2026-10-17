---
id: thm-irreducible-quotient-adjoins-a-root
kind: theorem
title: '$F[x]/(p)$ for monic irreducible $p$ is a field extension containing the root $x+(p)$ with unique reduced representatives'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-field-extension-generated-subfields-and-simple-extension, thm-polynomial-quotient-is-a-field-iff-irreducible, thm-polynomial-division-algorithm-over-a-field, thm-universal-property-of-a-polynomial-ring]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "T. Judson, Abstract Algebra: Theory and Applications, Extension Fields"
      url: "https://judsonbooks.org/aata-files/aata-html/fields-section-extension-fields.html"
pipeline_run: frontier-11
---

## Statement

Let $p\in F[x]$ be monic and irreducible, and put
$K=F[x]/(p)$ and $a=x+(p)$. Then $K$ is a field extension of $F$, $p(a)=0$,
and every element of $K$ has a unique representative $r$ with
$\deg r<\deg p$ (with $r=0$ allowed). In particular, if $\deg p=n$, every
element is uniquely
$$c_0+c_1a+\cdots+c_{n-1}a^{n-1},\qquad c_j\in F.$$

## Facts & Assumptions

**Given:** A field $F$ and a monic irreducible polynomial $p\in F[x]$.

[F1] For nonconstant $p\in F[x]$, the quotient $F[x]/(p)$ is a field if and only if $p$ is irreducible ([[thm-polynomial-quotient-is-a-field-iff-irreducible]]).

[F2] If $g\ne0$ in $F[x]$, each $f\in F[x]$ has unique $q,r$ with $f=qg+r$ and either $r=0$ or $\deg r<\deg g$ ([[thm-polynomial-division-algorithm-over-a-field]]).

[F3] Evaluation at an element is the unique homomorphism extending the coefficient map and sending $x$ to that element ([[thm-universal-property-of-a-polynomial-ring]]).

[F4] A field extension identifies the base field with an injectively embedded subfield ([[def-field-extension-generated-subfields-and-simple-extension]]).

## Proof

**Proof technique:** direct.

1.1 Irreducibility makes $p$ nonconstant, and [F1] makes $K$ a field. [F1]

1.2 The constant-class map $F\to K$ is injective: if a constant $c$ lies in $(p)$, then $c=qp$; uniqueness in [F2], comparing $c=0p+c$ with $c=qp+0$, forces $c=0$. [F2]

1.3 In $K$, $p(a)=p(x)+(p)=0$ by the quotient arithmetic; equivalently this is evaluation at $a$ from [F3]. [F3, algebra]

1.4 By [F2], write $f=qp+r$ with $r=0$ or $\deg r<\deg p$; hence $f+(p)=r+(p)$, so every class has a reduced representative. [F2]

2.1 Thus the constant-class map supplies the field extension $K/F$. [F4, step 1.1, step 1.2]

2.2 If two reduced representatives $r,s$ give the same class, then $r-s=qp$. Applying uniqueness in [F2] to $r-s$ shows $q=0$ and $r=s$. [F2, step 1.4]

3.1 Writing the unique reduced polynomial coefficientwise yields the displayed unique expression; when $n=1$ it consists only of $c_0$, and the zero class is represented by the zero polynomial. [step 1.4, step 2.2, algebra] ∎
