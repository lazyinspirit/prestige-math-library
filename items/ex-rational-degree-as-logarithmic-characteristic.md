---
id: ex-rational-degree-as-logarithmic-characteristic
kind: example
title: "Rational degree appears as logarithmic characteristic"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-nevanlinna-counting-proximity-and-characteristic, thm-nevanlinna-characteristic-elementary-laws, thm-rational-functions-characterized-by-logarithmic-characteristic]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "Alexandre Eremenko, Lectures on Nevanlinna Theory, §2, Exercise 1"
      url: "https://www.math.purdue.edu/~eremenko/dvi/weizmann.pdf"
    - title: "Goldberg–Ostrovskii, Value Distribution of Meromorphic Functions, Ch. 1 §6, Theorem 6.1 and Corollary (6.26)"
      url: "https://www.math.purdue.edu/~eremenko/dvi/GOmainfile.pdf"
pipeline_run: null
---

## Example

Let
$$R(z)=\frac{z^2+1}{z-1}.$$
This is a rational map of degree two. For every $r>1$, its pole count is
$$N(r,\infty;R)=\log r,$$
and its boundary proximity satisfies
$$m(r,\infty;R)=\log r+O(1)\qquad(r\to\infty).$$
Consequently,
$$T(r,R)=2\log r+O(1)\qquad(r\to\infty).$$

## Facts & Assumptions

**Given:** The normalized chordal characteristic and the fixed rational
composition law for meromorphic functions.

[F1] $T(r,f)=m(r,\infty;f)+N(r,\infty;f)$
([[def-nevanlinna-counting-proximity-and-characteristic]]).

[F2] $\delta(w,\infty)=1/\sqrt{1+|w|^2}$, so
$\log(1/\delta(w,\infty))=\tfrac12\log(1+|w|^2)$
([[def-nevanlinna-counting-proximity-and-characteristic]]).

[F3] $n(r,a;f)$ sums local multiplicities on the closed disc $|z|\le r$;
for $a=\infty$ these are pole orders
([[def-nevanlinna-counting-proximity-and-characteristic]]).

[F4] $N(r,a;f)=n(0,a;f)\log r+\int_0^r(n(t,a;f)-n(0,a;f))\,dt/t$
([[def-nevanlinna-counting-proximity-and-characteristic]]).

[F5] If $Q$ is a fixed rational map of degree $d\ge1$ and $h$ is nonconstant
meromorphic, then $T(r,Q(h))=dT(r,h)+O_{Q,h}(1)$
([[thm-nevanlinna-characteristic-elementary-laws]]).

[F6] A rational map of degree $d\ge1$ has
$T(r,f)=d\log r+O(1)$
([[thm-rational-functions-characterized-by-logarithmic-characteristic]]).

## Verification

**Given:** The function $R$ in the example and the definitions and laws above.

1.1 Polynomial division gives $R(z)=z+1+2/(z-1)$. The numerator equals $2$ at $z=1$, so this is the unique pole and it is simple; the numerator and denominator are coprime and their maximum degree is $2$. Also $R(0)=-1$, so $n(0,\infty;R)=0$; then $n(t,\infty;R)=0$ for $t<1$ and $n(t,\infty;R)=1$ for $t\ge1$. By [F3, F4], $N(1,\infty;R)=0$ (the boundary pole has logarithmic weight $\log1=0$), while for every $r>1$, $N(r,\infty;R)=\int_1^r dt/t=\log r$. [F3, F4, algebra]

1.2 For $|z|=r\ge4$, the decomposition gives $|R(z)|\ge r-1-2/(r-1)\ge r/2$ and $|R(z)|\le r+1+2/(r-1)\le2r$. Hence [F2] bounds the pointwise proximity by $\log r-\log2\le\tfrac12\log(1+|R(z)|^2)\le\log r+\tfrac12\log(4+r^{-2})=\log r+O(1)$ uniformly on the circle. Averaging gives $m(r,\infty;R)=\log r+O(1)$. [F2, algebra]

2.1 By [F1] and steps 1.1–1.2, $T(r,R)=2\log r+O(1)$. Also, [F1, F2] give $T(r,z)=\frac12\log(1+r^2)=\log r+O(1)$ because $z$ has no poles and $|z|=r$ on the averaging circle. Since $R$ has degree two, [F5] applied to the identity map gives the same $T(r,R)=2T(r,z)+O(1)$; this agrees with the exact rational degree law [F6]. [F1, F2, F5, F6, step 1.1, step 1.2, algebra] ∎
