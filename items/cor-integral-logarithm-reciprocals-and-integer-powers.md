---
id: cor-integral-logarithm-reciprocals-and-integer-powers
kind: corollary
title: "L(1/x)=-L(x), L(x^n)=nL(x), and in particular L(2^n)=nL(2)"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-integral-logarithm-product-law,
       cor-integral-logarithm-is-strictly-increasing, def-integer-power,
       thm-induction-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "OpenStax, Calculus Volume 1, Section 6.7"
      url: "https://openstax.org/books/calculus-volume-1/pages/6-7-integrals-exponential-functions-and-logarithms"
pipeline_run: null
---

## Statement

For $x>0$,

$$L(1/x)=-L(x).$$

For every integer $m$,

$$L(x^m)=mL(x),$$

and in particular $L(2^m)=mL(2)$. Moreover, $L(2)>0$.

## Facts & Assumptions

**Given:** $x>0$ and an integer exponent $m$.

[L1] $L(xy)=L(x)+L(y)$ for positive $x,y$
([[thm-integral-logarithm-product-law]]).

[L2] $L$ is strictly increasing on $(0,\infty)$
([[cor-integral-logarithm-is-strictly-increasing]]).

[F1] Natural powers are defined recursively by $x^0=1$ and
$x^{n+1}=x^nx$; negative integer powers are reciprocal positive powers
([[def-integer-power]]).

[L3] A property holding at $0$ and inherited from $n$ to $n+1$ holds for
every natural number ([[thm-induction-principle]]).

## Proof

**Proof technique:** direct.

1.1 Setting both inputs equal to $1$ in [L1] gives $L(1)=2L(1)$, hence $L(1)=0$. Applying [L1] to $x(1/x)=1$ then gives $L(1/x)=-L(x)$. [L1, algebra]
2.1 For natural $n$, the identity $L(x^n)=nL(x)$ holds at $n=0$ because $x^0=1$ and $L(1)=0$. If it holds at $n$, then $$ L(x^{n+1})=L(x^nx)=L(x^n)+L(x)=(n+1)L(x). $$ [step 1.1, F1, L1, algebra]
2.2 Since $2>1$ and $L(1)=0$, strict increase gives $L(2)>0$. [step 1.1, L2, algebra]
3.1 Induction [L3] proves the power identity for every natural exponent. [step 2.1, L3]
4.1 If $m<0$, write $m=-n$ with $n>0$. Then $x^m=1/x^n$, so steps 1.1 and 3.1 give $L(x^m)=-L(x^n)=-nL(x)=mL(x)$. Thus the formula holds for every integer. [F1, step 1.1, step 3.1, algebra]
5.1 Substitute $x=2$ in step 4.1, together with the natural and zero cases, to obtain $L(2^m)=mL(2)$ for every integer $m$. [step 3.1, step 4.1, step 2.2] ∎
