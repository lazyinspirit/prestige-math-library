---
id: prop-nevanlinna-order-agrees-with-entire-maximum-modulus-order
kind: proposition
title: "Entire-function order agrees with maximum-modulus order"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-order-of-growth-meromorphic-function, thm-poisson-jensen-formula-meromorphic-function, def-nevanlinna-counting-proximity-and-characteristic, thm-taylor-expansion-holomorphic-function, cor-cauchy-estimates-taylor-coefficients, thm-well-ordering-principle]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Goldberg–Ostrovskii, Value Distribution of Meromorphic Functions, Ch. 1 §7, Theorem 7.1; Ch. 2 §1, Theorem 1.3"
      url: "https://www.math.purdue.edu/~eremenko/dvi/GOmainfile.pdf"
---

## Statement

For an entire function $f$, define
$$M(r,f)=\max_{|z|=r}|f(z)|,\qquad m_0(r,f)=\frac1{2\pi}\int_0^{2\pi}\log^+|f(re^{it})|\,dt,\qquad T_0(r,f)=m_0(r,f)+N(r,\infty;f)=m_0(r,f).$$
For every nonconstant entire $f$ and $0<r<R$,
$$T_0(r,f)\le\log^+M(r,f)\le\frac{R+r}{R-r}\,T_0(R,f).$$
Its Nevanlinna order $\rho(f)$ and lower order $\lambda(f)$ from [[def-order-of-growth-meromorphic-function]] agree with
$$\limsup_{r\to\infty}\frac{\log\bigl(\log^+M(r,f)\bigr)}{\log r},\qquad \liminf_{r\to\infty}\frac{\log\bigl(\log^+M(r,f)\bigr)}{\log r},$$
respectively; these limits are taken for sufficiently large $r$ with $\log^+M(r,f)>1$.

## Facts & Assumptions

**Given:** A nonconstant entire $f$ on $\mathbb C$ and the chordal characteristic and order conventions of [[def-nevanlinna-counting-proximity-and-characteristic]] and [[def-order-of-growth-meromorphic-function]].

[F1] $T(r,h)=m(r,\infty;h)+N(r,\infty;h)$, and $m(r,\infty;h)$ is the circular mean of $\tfrac12\log(1+|h|^2)$ ([[def-nevanlinna-counting-proximity-and-characteristic]]).

[F2] The Poisson–Jensen identity on $|z|\le R$ subtracts the zero Green terms and adds the pole Green terms; at a boundary divisor the identity is interpreted by the limit through regular radii ([[thm-poisson-jensen-formula-meromorphic-function]]).

[F3] For nonconstant meromorphic $f$, $T(r,f)>1$ for all sufficiently large $r$ ([[def-order-of-growth-meromorphic-function]]).

[F4] An entire function equals its Taylor series throughout its largest centred disc; for $f$ entire this gives $f(z)=\sum_{n\ge0}a_nz^n$ for every $z\in\mathbb C$ ([[thm-taylor-expansion-holomorphic-function]]).

[F5] If $M$ bounds $|f|$ on $|z|=r$, then each Taylor coefficient $a_n$ satisfies $|a_n|\le M/r^n$ ([[cor-cauchy-estimates-taylor-coefficients]]).

[F6] Every nonempty subset of $\mathbb N$ has a least element ([[thm-well-ordering-principle]]), used to select the first nonzero positive Taylor index.

## Proof

**Proof technique:** Compare the chordal characteristic with $T_0=m_0+N_\infty$, bound the maximum modulus above by Poisson–Jensen, and squeeze both logarithmic limits after setting $R=2r$.

1.1 For every finite $w$, $\log^+|w|\le\tfrac12\log(1+|w|^2)\le\log^+|w|+\tfrac12\log2$. Since an entire function has no poles, [F1] gives $T_0(r,f)=m_0(r,f)$ and $0\le T(r,f)-T_0(r,f)\le c$, where $c=\tfrac12\log2<1$. [F1, algebra]

1.2 By [F4], write $f(z)=\sum_{n\ge0}a_nz^n$ on $\mathbb C$. Since $f$ is nonconstant, let $k\ge1$ be the least index with $a_k\ne0$. Applying [F5] on the radius-$r$ circle, with any larger holomorphy radius such as $2r$, gives $|a_k|\le M(r,f)/r^k$. Thus $M(r,f)\ge|a_k|r^k$ and $\log^+M(r,f)\to\infty$; in particular $\log^+M(r,f)>1$ for all sufficiently large $r$. [F4, F5, F6, given, algebra]

2.1 On $|z|=r$, $\log^+|f(z)|\le\log^+M(r,f)$. Averaging gives $T_0(r,f)=m_0(r,f)\le\log^+M(r,f)$. [F1, step 1.1, algebra]

2.2 Fix $0<r<R$. For $|z|=r$ with $f(z)\ne0$, [F2] and the absence of poles give $\log|f(z)|\le(2\pi)^{-1}\int_0^{2\pi}P_R(z,t)\log^+|f(Re^{it})|\,dt$, since every zero Green term is nonnegative. Indeed $|R^2-\overline b z|^2-R^2|z-b|^2=(R^2-|z|^2)(R^2-|b|^2)>0$, so $G_R(z,b)>0$. Also $0<P_R(z,t)\le(R+|z|)/(R-|z|)\le(R+r)/(R-r)$. If $f(z)=0$, its $\log^+$ is zero, so the same bound for $\log^+|f(z)|$ holds trivially. Taking the supremum over $|z|=r$ yields $\log^+M(r,f)\le\frac{R+r}{R-r}m_0(R,f)=\frac{R+r}{R-r}T_0(R,f)$. For a zero on the outer circle, pass through the boundary-radius limit in [F2]; $m_0(s,f)$ is continuous in $s$ because $f$ is continuous on compact annuli. [F1, F2, step 1.1, algebra]

3.1 Put $L(r)=\log^+M(r,f)$. From steps 2.1–2.2 with $R=2r$, $T_0(r,f)\le L(r)\le3T_0(2r,f)$. By [F3] and step 1.1, $T_0(r,f)\ge T(r,f)-c>1-c>0$ for all sufficiently large $r$, while step 1.2 gives $L(r)>1$ there. Thus the logarithms are defined, $\log T(r,f)-\log T_0(r,f)=O(1)$ by the mean-value bound on $[1-c,\infty)$, and $$\frac{\log T_0(r,f)}{\log r}\le\frac{\log L(r)}{\log r}\le\frac{\log3}{\log r}+\frac{\log T_0(2r,f)}{\log r}.$$ Replacing $r$ by $2r$ leaves both limsup and liminf of $\log T_0(r,f)/\log r$ unchanged because $\log(2r)/\log r\to1$; the additive $\log3/\log r$ and the bounded $\log T-\log T_0$ terms vanish after division by $\log r$. The squeeze proves both asserted order equalities. [F1, F3, step 1.1, step 1.2, step 2.1, step 2.2, algebra] ∎
