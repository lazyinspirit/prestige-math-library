---
id: ex-annihilator-colon-ideals-in-a-cyclic-module
kind: example
title: "Colon ideals in $k[x,y]/(x^2,xy)$ recover its associated primes"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-associated-primes-of-a-cyclic-module-are-primes-of-element-annihilators-modulo-ideal]
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §19"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §18 examples"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
---

## Example

Let $R=k[x,y]$ and $I=(x^2,xy)$. Then
$$
\operatorname{Ass}_R(R/I)=\{(x),(x,y)\}.
$$

## Facts & Assumptions

**Given:** A field $k$, the polynomial ring $R=k[x,y]$, and the ideal $I=(x^2,xy)$.

[L1] For a cyclic quotient, associated primes are exactly the prime colon ideals $(I:r)$ with $r \notin I$ ([[cor-associated-primes-of-a-cyclic-module-are-primes-of-element-annihilators-modulo-ideal]]).

## Verification

**Proof technique:** direct.

1.1 Let $\bar x=x+I$. Then $f\bar x=0$ exactly when $fx \in (x^2,xy)=x(x,y)$, that is, exactly when $f \in (x,y)$. Hence $$ \operatorname{Ann}_R(\bar x)=(I:x)=(x,y). $$ [L1, given, algebra]

2.1 Let $\bar y=y+I$. Then $f\bar y=0$ exactly when $fy \in (x^2,xy)=x(x,y)$. Because $x$ and $y$ are relatively prime in $k[x,y]$, this happens exactly when $x$ divides $f$. Thus $$ \operatorname{Ann}_R(\bar y)=(I:y)=(x). $$ Both ideals are prime. [L1, step 1.1, algebra]

3.1 Every class in $R/I$ has a unique representative $g(y)+cx$ with $g(y)\in k[y]$ and $c\in k$, because $x^2=xy=0$ modulo $I$. Let $r=g(y)+cx\notin I$. If $g=0$, then $c\ne0$ and $(I:r)=(x,y)$ by step 1.1. Assume $g\ne0$. For $a(y)+dx\in R/I$, multiplication gives $$ (a(y)+dx)(g(y)+cx)=a(y)g(y)+(a(0)c+d g(0))x. $$ If this vanishes, then $a(y)g(y)=0$ in the domain $k[y]$, so $a=0$. Thus $(I:r)=(x)$ when $g(0)=0$, while $(I:r)=I$ when $g(0)\ne0$. The ideal $I$ is not prime because $x^2\in I$ but $x\notin I$. Hence the only prime colon ideals are $(x)$ and $(x,y)$. [step 1.1, step 2.1, algebra]

4.1 By [L1] and step 3.1, the associated primes of $R/I$ are exactly $(x)$ and $(x,y)$. [L1, step 3.1] ∎
