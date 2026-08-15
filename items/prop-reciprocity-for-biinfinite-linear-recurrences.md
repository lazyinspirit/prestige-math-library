---
id: prop-reciprocity-for-biinfinite-linear-recurrences
kind: proposition
title: "For a bi-infinite linear recurrence over $K$, the two half-series satisfy $F_+(x)=-F_-(x^{-1})$ in $K(x)$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-linear-recurrence-iff-rational-generating-function, cor-rational-function-field-as-a-fraction-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. P. Stanley, Enumerative Combinatorics, vol. 1, 2nd ed., Proposition 4.2.3 and Corollary 4.2.4"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
pipeline_run: null
---

## Statement

Let $K$ be a field, let $d\ge1$, and let $f:\mathbb Z\to K$ satisfy

$$f(n+d)+c_1f(n+d-1)+\cdots+c_df(n)=0\qquad(n\in\mathbb Z),$$

where $c_d\ne0$. Put

$$F_+(x)=\sum_{n\ge0}f(n)x^n,\qquad F_-(x)=\sum_{n\ge1}f(-n)x^n.$$

Both series are rational, and in the rational function field $K(x)$,

$$F_+(x)=-F_-(x^{-1}).$$

More precisely, write $F_+=P/Q$ with $Q=1+c_1x+\cdots+c_dx^d$, $P=\sum_{j<d}\beta_jx^j$, and $P\ne0$. If

$$r=\min\{n\ge0:f(n)\ne0\},\qquad s=\min\{n\ge1:f(-n)\ne0\},$$

then $r=\min\{j\ge0:\beta_j\ne0\}$ and $f(r)=\beta_r$, while $s=d-\deg P$ and $f(-s)=-c_d^{-1}\beta_{d-s}$. Finally,

$$F_+(x)=\pm x^{r-s}F_+(x^{-1})$$

holds exactly when $f(n)=\mp f(-n+r-s)$ for every $n\in\mathbb Z$. If $P=0$, the recurrence and $c_d\ne0$ force $f=0$, so the main identity holds and the minima are intentionally left undefined.

## Facts & Assumptions

**Given:** A field $K$ and a bi-infinite order-$d$ recurrence with nonzero trailing coefficient.

[L1] An eventual recurrence has a rational generating function, and a recurrence from zero with reciprocal denominator $Q$ gives a numerator of degree below $d$ ([[thm-linear-recurrence-iff-rational-generating-function]]).

[L2] The fraction field of $K[x]$ is the rational function field $K(x)=\{P/Q: P,Q\in K[x],\ Q\ne0\}$ ([[cor-rational-function-field-as-a-fraction-field]]).

## Proof

**Proof technique:** direct.

1.1 Applying [L1] to the positive half gives $F_+=P/Q$ with $\deg P<d$, and applying it to the reversed negative half gives rationality of $F_-$. [given, L1]

2.1 In the vector space of all formal sums $\sum_{n\in\mathbb Z}a_nx^n$, multiplication by the polynomial $Q$ is coefficientwise finite. The recurrence says $Q\sum_{n\in\mathbb Z}f(n)x^n=0$, so linearity gives $Q(x)\sum_{n\ge1}f(-n)x^{-n}=-Q(x)F_+(x)=-P(x)$. [given, step 1.1, algebra]

2.2 The lowest nonzero coefficient of $P/Q$ equals the lowest nonzero coefficient of $P$, because $Q(0)=1$; hence the positive minimum is $r=\min\{j:\beta_j\ne0\}$ and $f(r)=\beta_r$. [step 1.1, algebra]

3.1 Substitute $x^{-1}$ for $x$ in step 2.1 and interpret both quotients in [L2]; this gives $F_+(x)=-F_-(x^{-1})$ in $K(x)$, not as an equality of formal power series. [step 2.1, L2, algebra]

4.1 Rewriting $-P(x^{-1})/Q(x^{-1})$ as $-c_d^{-1}x^{d}P(x^{-1})/(1+c_d^{-1}c_{d-1}x+\cdots+c_d^{-1}x^d)$ shows that its first nonzero term has degree $s=d-\deg P$ and coefficient $-c_d^{-1}\beta_{d-s}$, proving the negative-side clauses. [step 3.1, algebra]

5.1 Apply the main identity to replace $F_+(x^{-1})$ by $-F_-(x)$; coefficient comparison then shows that $F_+(x)=\pm x^{r-s}F_+(x^{-1})$ is equivalent to $f(n)=\mp f(-n+r-s)$ for every integer $n$. [step 3.1, step 2.2, step 4.1, algebra]

6.1 If $P=0$, then $F_+=0$, so $f(n)=0$ for $n\ge0$; solving the recurrence backwards using $c_d\ne0$ gives $f(n)=0$ for all $n\in\mathbb Z$, and the main identity remains valid. [step 1.1, given] ∎
