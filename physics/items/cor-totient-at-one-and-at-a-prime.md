---
id: cor-totient-at-one-and-at-a-prime
kind: corollary
title: "$\\varphi(1)=1$, and $\\varphi(p)=p-1$ for every prime $p$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-unit-criterion-modulo-n, def-prime, lem-prime-not-dividing-is-coprime, thm-standard-representatives-modulo-n, def-finite-cardinality, thm-subset-of-a-finite-set, def-unit-group-modulo-n-and-euler-totient]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Mathematics LibreTexts, Euler's phi Function"
      url: "https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Yet_Another_Introductory_Number_Theory_Textbook_-_Cryptology_Emphasis_%28Poritz%29/02%3A_Congruences/2.05%3A_Euler%27s__%CF%95__Function"
    - title: "UW Oshkosh, Number Theory Notes 3"
      url: "https://www.uwosh.edu/faculty_staff/pennistd/ntn3.pdf"
pipeline_run: null
---

## Statement

Euler's totient satisfies $\varphi(1)=1$. If $p$ is prime
([[def-prime]]), then

$$\varphi(p)=p-1.$$

## Facts & Assumptions

**Given:** A prime integer $p$.

[F1] $\varphi(n)$ is the cardinality of the unit group of $\mathbb Z/n$ for positive $n$, and a class is a unit exactly when its representative is coprime to $n$ ([[def-unit-group-modulo-n-and-euler-totient]], [[thm-unit-criterion-modulo-n]]).

[L1] For a prime $p$, if $p\nmid a$ then $\gcd(p,a)=1$ ([[lem-prime-not-dividing-is-coprime]]).

[L2] The standard representatives modulo a positive $n$ are the unique integers $r$ with $0\le r<n$, and there are $n$ of them ([[thm-standard-representatives-modulo-n]], [[def-finite-cardinality]]).

[L3] A subset of a finite set is finite ([[thm-subset-of-a-finite-set]]).

[F2] A prime integer satisfies $p>1$ ([[def-prime]]).

## Proof

**Proof technique:** direct.

1.1 Modulo $1$ there is one class, and it is the multiplicative identity, hence a unit. Therefore $\varphi(1)=1$. [F1, L2]

1.2 Let $0\le r<p$. If $r=0$, then $p\mid r$, so $[r]_p$ is not a unit by the unit criterion. If $r>0$, then $p\nmid r$: otherwise $r=pk$ with $p>0$ and $r>0$, forcing $k\ge1$ and $r\ge p$, contrary to $r<p$. [F1, F2, L2, algebra]

2.1 For $0<r<p$, [L1] gives $\gcd(p,r)=1$, hence $\gcd(r,p)=1$, so $[r]_p$ is a unit by the unit criterion. Thus the units are exactly the classes with representatives $1,2,\ldots,p-1$. [step 1.2, F1, L1]

3.1 Translation by $1$ is a bijection from the natural $p-1$ onto the representatives $r$ with $0<r<p$. Hence that finite set, and therefore the unit group, has cardinality $p-1$. [step 2.1, L2, L3, algebra]

4.1 By [F1] and step 3.1, $\varphi(p)=p-1$; together with step 1.1 this proves both clauses. [step 1.1, step 3.1, F1] ∎
