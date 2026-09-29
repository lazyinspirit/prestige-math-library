---
id: ex-nevanlinna-characteristic-under-target-mobius-map
kind: example
title: "Characteristic under a target Möbius change"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-nevanlinna-counting-proximity-and-characteristic, thm-nevanlinna-first-main-theorem, thm-nevanlinna-characteristic-elementary-laws, thm-zero-order-factorization-holomorphic-function, thm-pole-characterizations]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "Alexandre Eremenko, Lectures on Nevanlinna Theory, §§1–3"
      url: "https://www.math.purdue.edu/~eremenko/dvi/weizmann.pdf"
    - title: "Goldberg–Ostrovskii, Value Distribution of Meromorphic Functions, Ch. 1 §6, equation (6.8)"
      url: "https://www.math.purdue.edu/~eremenko/dvi/GOmainfile.pdf"
---

## Example

Let $f$ be a nonconstant meromorphic function on $\mathbb C$ and let
$a\in\mathbb C$. Define the degree-one map
$$M_a(w)=\frac{1+\overline a w}{w-a},\qquad M_a(\infty)=\overline a.$$
Then
$$\delta(M_a(w),\infty)=\delta(w,a)\qquad(w\in\widehat{\mathbb C}),$$
and
$$T(r,M_a\circ f)=T(r,f)+O_{f,a}(1)\qquad(r\to\infty).$$

## Verification

**Given:** The normalized chordal distance and Nevanlinna characteristic,
the First Main Theorem, the fixed-rational composition law, and the local
zero/pole order facts for meromorphic functions.

[F1] For finite $w,a$,
$\delta(w,a)=|w-a|/(\sqrt{1+|w|^2}\sqrt{1+|a|^2})$;
$\delta(w,\infty)=\delta(\infty,w)=1/\sqrt{1+|w|^2}$ and
$\delta(\infty,\infty)=0$ ([[def-nevanlinna-counting-proximity-and-characteristic]]).

[F2] For nonconstant meromorphic $f$ and finite $a$,
$m(r,a;f)+N(r,a;f)=T(r,f)+C(f,a)$ for every $r>0$
([[thm-nevanlinna-first-main-theorem]]).

[F3] For a fixed rational map $R$ of degree $d\ge1$ and nonconstant
meromorphic $f$, $T(r,R(f))=dT(r,f)+O_{R,f}(1)$ as $r\to\infty$
([[thm-nevanlinna-characteristic-elementary-laws]]).

[F4] A holomorphic function of finite order $m$ at $b$ factors locally as
$(z-b)^m h(z)$ with $h(b)\ne0$
([[thm-zero-order-factorization-holomorphic-function]]).

[F5] At a pole of order $m$, the reciprocal extends holomorphically across
the pole and has a zero of order $m$
([[thm-pole-characterizations]]).

1.1 The numerator and denominator of $M_a$ have determinant $-(1+|a|^2)\ne0$, so $M_a$ is a degree-one Möbius map; also $M_a(a)=\infty$ and the limit at $w=\infty$ is $\overline a$. The identity $M_a(w)=\overline a+(1+|a|^2)/(w-a)$ holds for finite $w\ne a$. [given, algebra]

2.1 For finite $w\ne a$, $|1+\overline a w|^2+|w-a|^2=(1+|a|^2)(1+|w|^2)$, so [F1] gives $\delta(M_a(w),\infty)=|w-a|/\sqrt{(1+|a|^2)(1+|w|^2)}=\delta(w,a)$. At $w=a$, both sides are zero since $M_a(a)=\infty$; at $w=\infty$, $\delta(M_a(\infty),\infty)=1/\sqrt{1+|a|^2}=\delta(\infty,a)$. Thus the pointwise identity holds on the whole sphere, including both endpoints. [F1, step 1.1, algebra]

2.2 Let $F=M_a\circ f$. At a finite point $b$ with $f(b)=a$ of order $m$, [F4] gives $f(z)-a=(z-b)^m h(z)$ with $h(b)\ne0$; the numerator $1+\overline a f(z)$ equals $1+|a|^2\ne0$ at $b$, so $F$ has a pole of order $m$. At a pole $b$ of $f$ of order $m$, [F5] says $1/f$ has a zero of order $m$; since $1/(f-a)=(1/f)/(1-a/f)$ and $1-a/f$ is nonzero at $b$, step 1.1 shows $F=\overline a+(1+|a|^2)/(f-a)$ extends holomorphically and finitely there. At every other point $f$ is finite and different from $a$, so $F$ is finite and holomorphic. Hence the poles of $F$ are exactly the $a$-points of $f$ with the same multiplicities; the closed-disc counts and their integrated versions satisfy $N(r,\infty;F)=N(r,a;f)$ for every $r>0$. [F4, F5, step 1.1, algebra]

3.1 By step 2.1, the integrands defining $m(r,\infty;F)$ and $m(r,a;f)$ are equal at every point of the circle, with the same logarithmic singularity at an $a$-point and the same finite value at a pole of $f$. Therefore $m(r,\infty;F)=m(r,a;f)$ for every $r>0$. [F1, step 2.1, algebra]

4.1 The map $M_a$ has degree one and is invertible, so $F$ is nonconstant; [F3] gives $T(r,F)=T(r,f)+O_{f,a}(1)$. Steps 2.2–3.1 also give $T(r,F)=m(r,a;f)+N(r,a;f)$, and [F2] identifies this sum exactly as $T(r,f)+C(f,a)$. This proves the asserted characteristic estimate and confirms the target count/proximity relation. [F2, F3, step 2.2, step 3.1, algebra] ∎
