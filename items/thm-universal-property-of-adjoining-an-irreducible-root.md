---
id: thm-universal-property-of-adjoining-an-irreducible-root
kind: theorem
title: 'Universal property of adjoining a root of an irreducible polynomial'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-irreducible-quotient-adjoins-a-root, thm-quotient-ring-universal-property, thm-universal-property-of-a-polynomial-ring]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: frontier-11
---

## Statement

Let $p\in F[x]$ be monic and irreducible, let $K=F[x]/(p)$, and put
$a=x+(p)$. If $L/F$ is a field extension and $b\in L$ satisfies $p(b)=0$,
there is a unique field homomorphism
$$\varphi:K\longrightarrow L$$
that fixes $F$ and sends $a$ to $b$. Its image is $F[b]$.

## Facts & Assumptions

**Given:** The fields and roots appearing in the statement.

[F1] Evaluation gives the unique homomorphism $F[x]\to L$ fixing $F$ and sending $x$ to $b$ ([[thm-universal-property-of-a-polynomial-ring]]).

[F2] A homomorphism $R\to S$ whose kernel contains an ideal $I$ factors uniquely through $R/I$ ([[thm-quotient-ring-universal-property]]).

[F3] $K$ is a field extension, $p(a)=0$, and every element of $K$ is a polynomial in $a$ ([[thm-irreducible-quotient-adjoins-a-root]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], evaluation at $b$ is a homomorphism $\operatorname{ev}_b:F[x]\to L$ fixing $F$. [F1]

2.1 Since $p(b)=0$, the ideal $(p)$ lies in $\ker(\operatorname{ev}_b)$; [F2] therefore gives a unique homomorphism $\varphi:K\to L$ with $\varphi(f+(p))=f(b)$. [F2, step 1.1]

3.1 The formula fixes constant classes and sends $a=x+(p)$ to $b$; its image is exactly the set $F[b]$ of polynomial values. [F3, step 2.1, algebra]

3.2 Because [F3] makes $K$ a field and $\varphi(1)=1$, its kernel is not all of $K$ and hence is zero; thus $\varphi$ is a field homomorphism. [F3, step 2.1, algebra]

4.1 Any homomorphism fixing $F$ and sending $a$ to $b$ sends every $f(a)$ to $f(b)$; since every element is such an $f(a)$ by [F3], it equals $\varphi$. [F3, step 3.1] ∎
