---
id: ex-perfect-height-function-on-a-sphere
kind: example
title: "The height function on a sphere is perfect"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-morse-numbers-and-morse-polynomial, def-poincare-polynomial-over-a-field, thm-morse-polynomial-identity, def-perfect-morse-function-over-a-field, cor-homology-of-spheres, def-hessian-of-a-function-at-a-critical-point, def-nondegenerate-critical-point-nullity-index-and-coindex, def-critical-point-and-critical-value-of-a-smooth-function, def-euclidean-spheres-and-closed-balls, def-countable-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct-local-model
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology, Part I Chapter 4 Section 4.4, printed pp. 88-91 (PDF pp. 98-100)"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
    - title: "Liviu Nicolaescu, An Invitation to Morse Theory (2nd ed.), Chapter 2 Section 2.3, printed pp. 46-53 (PDF pp. 56-63)"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
dependency_level: 2
---

## Example

Assume $\mathrm{AC}_\omega$. For $n\ge1$ let
$$h:S^n\to\mathbb R,\qquad h(x)=x_{n+1},$$
be the height function on the unit sphere
([[def-euclidean-spheres-and-closed-balls]]). Its only critical points are the
two poles $\pm e_{n+1}$, nondegenerate of indices $0$ and $n$, so
$$M_h(t)=1+t^n,\qquad \#\operatorname{Crit}(h)=2.$$
Over every field $F$, the homology of spheres gives $b_0(S^n;F)=b_n(S^n;F)=1$
and $b_k(S^n;F)=0$ otherwise, hence
$$P_{S^n,F}(t)=1+t^n=M_h(t):$$ the height function is $F$-perfect for every
$F$, with correction polynomial $Q=0$, and every weak inequality is an equality.
For $n=1$ this is the circle with one minimum and one maximum.

## Facts & Assumptions

**Given:** An integer $n\ge1$, the height function $h(x)=x_{n+1}$ on the unit sphere $S^n$, and a field $F$.

[F1] Critical points, nondegeneracy, index, and the Hessian have the meanings of the local Morse definitions ([[def-critical-point-and-critical-value-of-a-smooth-function]], [[def-nondegenerate-critical-point-nullity-index-and-coindex]], [[def-hessian-of-a-function-at-a-critical-point]]).

[F2] The Morse numbers are $m_k(h)=\#\{p\in\operatorname{Crit}(h):\operatorname{ind}(p)=k\}$ and $M_h(t)=\sum_k m_k(h)t^k$ ([[def-morse-numbers-and-morse-polynomial]]).

[F3] $P_{X,F}(t)=\sum_k\dim_FH_k(X;F)t^k$ is the Poincare polynomial over $F$ and $b_k(X;F)=\dim_FH_k(X;F)$ the $F$-Betti numbers ([[def-poincare-polynomial-over-a-field]]).

[L1] For $n\ge1$, $\widetilde H_k(S^n;G)$ is $G$ for $k=n$ and $0$ otherwise; in particular $H_0(S^n;G)\cong G$. ([[cor-homology-of-spheres]]).

[F4] There is a unique $Q\in\mathbb Z[t]$ with nonnegative coefficients and $M_h(t)=P_{S^n,F}(t)+(1+t)Q(t)$ ([[thm-morse-polynomial-identity]]).

[F5] $h$ is $F$-perfect when $m_k(h)=b_k(S^n;F)$ for all $k$, equivalently when $M_h=P_{S^n,F}$ ([[def-perfect-morse-function-over-a-field]]).

## Verification

**Proof technique:** direct-local-model.

1.1 If $x\in S^n$ is not a pole, put $v:=e_{n+1}-x_{n+1}x$. Then $x\cdot v=x_{n+1}-x_{n+1}(x\cdot x)=0$, so $v\in T_xS^n$, and $dh_x(v)=v_{n+1}=1-x_{n+1}^2\ne0$ because $x_{n+1}^2<1$ off the poles. Hence only the poles can be critical points of $h$. [F1, given, algebra]

2.1 Near the north pole write the upper hemisphere as $u\mapsto(u,\sqrt{1-\|u\|^2})$, so that $h(u)=\sqrt{1-\|u\|^2}=1-\tfrac12\|u\|^2+O(\|u\|^4)$; the Hessian at $u=0$ is $-I_n$, hence the north pole is a nondegenerate critical point of index $n$. Near the south pole write $u\mapsto(u,-\sqrt{1-\|u\|^2})$, so that $h(u)=-\sqrt{1-\|u\|^2}=-1+\tfrac12\|u\|^2+O(\|u\|^4)$; the Hessian at $u=0$ is $I_n$ and the south pole has index $0$. Therefore $\operatorname{Crit}(h)=\{\pm e_{n+1}\}$ and, by [F2], $$M_h(t)=1+t^n,\qquad \#\operatorname{Crit}(h)=2.$$ [F1, F2, step 1.1]

3.1 By [L1] read in unreduced form, $b_0(S^n;F)=b_n(S^n;F)=1$ and $b_k(S^n;F)=0$ for $k\notin\{0,n\}$; hence by [F3] $$P_{S^n,F}(t)=1+t^n=M_h(t).$$ [L1, F3, step 2.1]

4.1 The correction polynomial of the Morse polynomial identity is unique [F4]; since $Q=0$ satisfies $M_h=P_{S^n,F}+(1+t)Q$, the actual correction polynomial is $Q=0$ and $m_k(h)=b_k(S^n;F)$ for every $k$. By [F5] the height function is $F$-perfect, for every field $F$, and every weak inequality $m_k\ge b_k$ is an equality. [F4, F5, step 2.1, step 3.1] ∎

## Remarks

- **Endpoint indices.** The example realizes the extreme indices $0$ and $n$ and shows that the equality case of every inequality occurs simultaneously; it is the simplest perfect Morse function.
- **The case $n=1$.** For the circle the two poles are a minimum and a maximum of indices $0$ and $1$, and $M_h(t)=1+t=P_{S^1,F}(t)$ over every field.
