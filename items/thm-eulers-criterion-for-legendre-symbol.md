---
id: thm-eulers-criterion-for-legendre-symbol
kind: theorem
title: 'Euler''s criterion: $(a/p)\equiv a^{(p-1)/2}\pmod p$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-legendre-symbol, thm-eulers-criterion-for-binomial-congruences, cor-primitive-roots-modulo-prime, cor-totient-at-one-and-at-a-prime, thm-fermats-little-theorem, thm-root-bound-for-polynomials-over-a-domain, thm-z-mod-p-is-a-field, lem-field-is-a-commutative-ring, lem-prime-not-dividing-is-coprime]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "H. Hackman, Elementary Number Theory, Chapter D, Section D.I"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "W. Stein, Elementary Number Theory, Section 4.2"
      url: "https://wstein.org/ent/ent.pdf"
    - title: "A. Gorodnik, Number Theory, Lecture 9, Theorem 1.5"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture9.pdf"
pipeline_run: null
---

## Statement

For every integer $a$ and odd prime $p$,

$$\left(\frac ap\right)\equiv a^{(p-1)/2}\pmod p.$$

## Facts & Assumptions

**Given:** An integer $a$ and an odd prime $p$.

[L1] The Legendre symbol is $0$ when $p\mid a$, $1$ when $a$ is a quadratic residue modulo $p$, and $-1$ when $a$ is a quadratic nonresidue ([[def-legendre-symbol]]).

[L2] If $n\ge1$ admits a primitive root, $\gcd(a,n)=1$, $m\ge1$, and $d=\gcd(m,\varphi(n))$, then $x^m\equiv a\pmod n$ is soluble exactly when $a^{\varphi(n)/d}\equiv1\pmod n$ ([[thm-eulers-criterion-for-binomial-congruences]]).

[L3] Every prime admits a primitive root modulo that prime ([[cor-primitive-roots-modulo-prime]]).

[L4] For every prime $p$, $\varphi(p)=p-1$ ([[cor-totient-at-one-and-at-a-prime]]).

[L5] If $p\nmid a$, then $a^{p-1}\equiv1\pmod p$ ([[thm-fermats-little-theorem]]).

[L6] For every prime $p$, the quotient $\mathbb Z/p$ is a field ([[thm-z-mod-p-is-a-field]]).

[L7] Every field is an integral domain ([[lem-field-is-a-commutative-ring]]).

[L8] A nonzero polynomial of degree $n$ over an integral domain has at most $n$ distinct roots ([[thm-root-bound-for-polynomials-over-a-domain]]).

[L9] If $p\nmid a$, then $p$ and $a$ are coprime ([[lem-prime-not-dividing-is-coprime]]).

## Proof

**Proof technique:** direct.

1.1 If $p\mid a$, then [L1] gives $(a/p)=0$, while $(p-1)/2\ge1$ and hence $a^{(p-1)/2}\equiv0\pmod p$. The criterion holds in this case. [L1, given, algebra]

1.2 Suppose $p\nmid a$. By [L9], $\gcd(a,p)=1$; [L3] and [L4] specialise [L2] with $m=2$ and $d=2$. Thus $a$ is a square modulo $p$ exactly when $a^{(p-1)/2}\equiv1\pmod p$. [L1, L2, L3, L4, L9, algebra]

1.3 Put $y=[a^{(p-1)/2}]_p$. By [L5], $y^2=[1]_p$. Facts [L6] and [L7] make $\mathbb Z/p$ an integral domain, and [L8] says that the degree-two polynomial $X^2-1$ has at most two roots there. The two distinct roots $[1]_p$ and $[-1]_p$ already exist because $p$ is odd, so $y$ is one of them. [L5, L6, L7, L8, algebra]

2.1 In the unit case, step 1.2 gives $y=[1]_p$ exactly for a quadratic residue; otherwise step 1.3 forces $y=[-1]_p$. These are precisely the two values prescribed by [L1]. Combining this with step 1.1 proves the congruence for every integer $a$. [L1, step 1.1, step 1.2, step 1.3] ∎
