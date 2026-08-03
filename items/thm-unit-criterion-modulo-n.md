---
id: thm-unit-criterion-modulo-n
kind: theorem
title: "For $n\\ge1$, $[a]_n$ is a unit if and only if $\\gcd(a,n)=1$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-unit-group-modulo-n-and-euler-totient, thm-bezout-identity, def-common-divisor-and-gcd, def-coprime, lem-coprime-criterion, lem-divisibility-basic]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "K. Conrad, Modular Arithmetic"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/modarithshort.pdf"
    - title: "Mathematics LibreTexts, Euler's phi Function"
      url: "https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Yet_Another_Introductory_Number_Theory_Textbook_-_Cryptology_Emphasis_%28Poritz%29/02%3A_Congruences/2.05%3A_Euler%27s__%CF%95__Function"
    - title: "UW Oshkosh, Number Theory Notes 3"
      url: "https://www.uwosh.edu/faculty_staff/pennistd/ntn3.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$ and $a\in\mathbb Z$. Then $[a]_n$ is a unit of $\mathbb Z/n$
([[def-unit-group-modulo-n-and-euler-totient]]) if and only if

$$\gcd(a,n)=1,$$

that is, if and only if $a$ and $n$ are coprime ([[def-coprime]]). Consequently
the condition $\gcd(a,n)=1$ depends only on the class $[a]_n$.

## Facts & Assumptions

**Given:** A positive integer $n$ and an integer $a$.

[L1] Integers $u,v$ are coprime exactly when $ux+vy=1$ for some integers $x,y$ ([[lem-coprime-criterion]], [[thm-bezout-identity]], [[def-common-divisor-and-gcd]], [[def-coprime]]).

[F1] The class $[a]_n$ is a unit exactly when some $[b]_n$ satisfies $[a]_n[b]_n=[1]_n$ ([[def-unit-group-modulo-n-and-euler-totient]]).

[L2] If an integer divides two integers, it divides every integer linear combination of them ([[lem-divisibility-basic]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $\gcd(a,n)=1$. By [L1], choose integers $x,y$ with $ax+ny=1$. Reducing this equality modulo $n$ gives $[a]_n[x]_n=[1]_n$, so $[a]_n$ is a unit. [L1, F1, choose]

1.2 Conversely, suppose $[a]_n$ is a unit. Choose $b$ with $[a]_n[b]_n=[1]_n$. Then $ab\equiv1\pmod n$, so $ab-1=nq$ for some integer $q$, and $ab+n(-q)=1$. By [L1], $\gcd(a,n)=1$. [F1, L1, choose]

1.3 If $a\equiv a'\pmod n$ and $\gcd(a,n)=1$, write $a'=a+nk$. A Bézout identity $ax+ny=1$ then becomes $a'x+n(y-kx)=1$, so $\gcd(a',n)=1$ by [L1]; symmetry gives the converse. Thus the criterion is representative independent. [L1, L2, algebra]

2.1 Steps 1.1 and 1.2 prove the equivalence, and step 1.3 proves its final representative-independence assertion. [step 1.1, step 1.2, step 1.3] ∎
