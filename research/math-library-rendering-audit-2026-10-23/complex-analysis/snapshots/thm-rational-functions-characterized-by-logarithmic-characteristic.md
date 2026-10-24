---
id: thm-rational-functions-characterized-by-logarithmic-characteristic
kind: theorem
title: "Rational functions are exactly those with logarithmic characteristic"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-nevanlinna-characteristic-elementary-laws, prop-nevanlinna-order-agrees-with-entire-maximum-modulus-order, def-nevanlinna-counting-proximity-and-characteristic, cor-cauchy-estimates-taylor-coefficients, thm-nevanlinna-quantities-well-defined, thm-pole-characterizations, thm-taylor-expansion-holomorphic-function, thm-well-ordering-principle]
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
    - title: "Alexandre Eremenko, Lectures on Nevanlinna Theory, §2, Exercise 1"
      url: "https://www.math.purdue.edu/~eremenko/dvi/weizmann.pdf"
    - title: "Goldberg–Ostrovskii, Value Distribution of Meromorphic Functions, Ch. 1 §6, Theorem 6.1 and Corollary (6.26); §7, Theorem 7.1"
      url: "https://www.math.purdue.edu/~eremenko/dvi/GOmainfile.pdf"
pipeline_run: null
---

## Statement

Let $f$ be a nonconstant meromorphic function on $\mathbb C$. Then $f$ is
rational if and only if
$$T(r,f)=O(\log r)\qquad(r\to\infty).$$
More precisely, if $f$ is rational of degree $d\ge1$, then
$$T(r,f)=d\log r+O(1)\qquad(r\to\infty),$$
for the normalized chordal characteristic.

## Facts & Assumptions

**Given:** A nonconstant meromorphic $f$ on $\mathbb C$, with characteristic, closed-disc pole counts, and local pole orders as defined in the cited items.

[F1] $T(r,h)=m(r,\infty;h)+N(r,\infty;h)$ ([[def-nevanlinna-counting-proximity-and-characteristic]]).

[F2] The integrated pole count is $$N(r,\infty;h)=n(0,\infty;h)\log r+\int_0^r\frac{n(t,\infty;h)-n(0,\infty;h)}{t}\,dt$$ ([[def-nevanlinna-counting-proximity-and-characteristic]]).

[F3] If $R$ is a fixed rational map of degree $d\ge1$ and $h$ is nonconstant meromorphic, then $T(r,R(h))=dT(r,h)+O_{R,h}(1)$ ([[thm-nevanlinna-characteristic-elementary-laws]]).

[F4] For meromorphic $u,v$ and $r\to\infty$, $T(r,uv)\le T(r,u)+T(r,v)+O(1)$ ([[thm-nevanlinna-characteristic-elementary-laws]]).

[F5] The count $n(r,a;h)$ is finite for each bounded disc ([[thm-nevanlinna-quantities-well-defined]]).

[F6] At a pole of order $m$, the finite nonzero principal part ends in a nonzero $c_{-m}(z-a)^{-m}$ term; in particular its pole order is $m$ ([[thm-pole-characterizations]]).

[F7] For an entire $g$ and $0<r<R$, $$T_0(r,g)\le\log^+M(r,g)\le\frac{R+r}{R-r}T_0(R,g),$$ where $T_0=m_0+N(\cdot,\infty;g)$ and $m_0(r,g)=(2\pi)^{-1}\int_0^{2\pi}\log^+|g(re^{it})|\,dt$ ([[prop-nevanlinna-order-agrees-with-entire-maximum-modulus-order]]).

[F8] If $M$ bounds $|g|$ on $|z|=r$, each Taylor coefficient $a_n$ of $g$ at $0$ satisfies $|a_n|\le M/r^n$ ([[cor-cauchy-estimates-taylor-coefficients]]).

[F9] An entire function equals its Taylor series at $0$ throughout $\mathbb C$ ([[thm-taylor-expansion-holomorphic-function]]).

[F10] $\delta(w,\infty)=\delta(\infty,w)=1/\sqrt{1+|w|^2}$, so the integrand of $m(r,\infty;h)$ is $\tfrac12\log(1+|h|^2)$ ([[def-nevanlinna-counting-proximity-and-characteristic]]).

[F11] Every nonempty subset of $\mathbb N$ has a least element ([[thm-well-ordering-principle]]), used for the first integer radius with pole count at least $M$.

## Proof

**Proof technique:** The rational-composition law proves the forward direction. For the reverse, first bound the pole count, then cancel the finite pole divisor and use the entire maximum-modulus estimate and Cauchy inequalities.

1.1 The identity function $z\mapsto z$ is entire and has no poles, so [F1, F10] give its characteristic $T(r,z)=\frac12\log(1+r^2)=\log r+O(1)$. If $f$ is rational of degree $d\ge1$, applying [F3] to the composition of $f$ with the identity function gives $T(r,f)=dT(r,z)+O(1)=d\log r+O(1)$, proving the forward implication and the degree formula. [F1, F3, F10, algebra]

1.2 Suppose $T(r,f)=O(\log r)$, and choose $A\ge0$, $r_0\ge1$ so $T(r,f)\le A\log r$ for every $r\ge r_0$; by [F1, F10], the integrand defining $m(r,\infty;f)$ is nonnegative, hence $N(r,\infty;f)\le T(r,f)\le A\log r$ for $r\ge r_0$. [F1, F10, algebra]

2.1 Let $n_0=n(0,\infty;f)$, finite by [F5], and suppose there are infinitely many poles; since each bounded-disc count is finite by [F5], $n(k,\infty;f)$ is unbounded over positive integers $k$. Choose an integer $M>\max\{A,n_0\}$ and an integer $s>r_0$, and let $R_M$ be the least integer $k\ge s$ with $n(k,\infty;f)\ge M$; it exists by unboundedness and well-ordering. For $R\ge R_M$, closed-disc monotonicity gives $n(t,\infty;f)\ge M$ on $[R_M,R]$ and $n(t,\infty;f)\ge n_0$ everywhere, so [F2] yields $N(R,\infty;f)\ge n_0\log R+(M-n_0)\log(R/R_M)=M\log R-(M-n_0)\log R_M$. This contradicts step 1.2 as $R\to\infty$ because $M>A$, proving that $f$ has finitely many poles. [F2, F5, F11, step 1.2, algebra]

3.1 List the finite poles as $p_1,\ldots,p_s$ with orders $m_1,\ldots,m_s$, and set $q(z)=\prod_{j=1}^s(z-p_j)^{m_j}$, taking $q=1$ for the empty pole set; at each $p_j$, [F6] gives the exact pole order, so the corresponding zero of $q$ cancels it and $g=qf$ extends holomorphically there, making $g$ entire. [F5, F6, step 2.1, algebra]

4.1 Put $D=\sum_jm_j$ and $C_q=\prod_j(1+|p_j|)^{m_j}$, with $D=0$, $C_q=1$ for the empty product; for $r\ge1$ and $|z|=r$, $|q(z)|\le C_qr^D$, so [F1, F10] and $\frac12\log(1+|w|^2)\le\log^+|w|+\frac12\log2$ give $T(r,q)=O(\log r)$. The product law [F4] applied to $g=qf$ and step 1.2 give $T(r,g)=O(\log r)$. Define $T_0(r,g)=m_0(r,g)+N(r,\infty;g)$ as in [F7]; since $g$ is entire its pole count vanishes, and [F1, F10] give $T_0(r,g)\le T(r,g)=O(\log r)$. [F1, F4, F7, F10, step 1.2, step 3.1, algebra]

5.1 If $g$ is constant then $f=g/q$ is rational; otherwise [F7] with $R=2r$ gives $\log^+M(r,g)\le3T_0(2r,g)=O(\log r)$, hence $M(r,g)\le C_1r^B$ for some $C_1>0$, $B\ge0$ and all large $r$. Write $g(z)=\sum_{n\ge0}a_nz^n$; for every integer $n>B$, [F8] gives $|a_n|\le M(r,g)/r^n\le C_1r^{B-n}\to0$, so $a_n=0$. Thus only finitely many coefficients are nonzero, [F9] makes $g$ a polynomial, and $f=g/q$ is rational. [F7, F8, F9, step 4.1, algebra] ∎
