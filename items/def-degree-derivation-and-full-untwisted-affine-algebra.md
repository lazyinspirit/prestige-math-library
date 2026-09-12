---
id: def-degree-derivation-and-full-untwisted-affine-algebra
kind: definition
title: Degree derivation and full untwisted affine algebra
deps: ["def-untwisted-affine-central-extension"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Kleshchev, Lectures on Infinite Dimensional Lie Algebras, Sections 7.1-7.2
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Introduction to Kac-Moody Groups and Lie Algebras, Definition 12.2.3
        and Fact 12.2.7
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
status: draft
origin: pipeline
---

## Definition

On [[def-untwisted-affine-central-extension]] define $D(x_m)=mx_m$ and $D(c)=0$, extending linearly. For two modes the loop component of $D[x_m,y_n]$ is $(m+n)[x,y]_{m+n}$, the same as that of $[Dx_m,y_n]+[x_m,Dy_n]$. The latter's central coefficient is $(m+n)m\delta_{m,-n}B(x,y)=0$, while $D$ kills the former's central term. Thus $D$ is a derivation; the cases involving $c$ vanish directly.

The **full untwisted affine algebra** is
$$\widehat{\mathfrak g}=\overline{L\mathfrak g}\oplus\mathbb Cd,$$
where $d$ is a new basis vector, with bracket
$$[u+ad,v+bd]=[u,v]+aD(v)-bD(u).$$
In particular $[d,x_m]=mx_m$, $[d,c]=0$ and $[d,d]=0$. Jacobi with no $d$ is the central-extension identity; with one $d$ it is precisely the derivation identity just checked; with two $d$ the terms $D^2(u)$ cancel; with three $d$ it is zero. Multilinearity proves Jacobi generally. This is an algebraic semidirect extension; both $u$ and $v$ have finite Laurent support. No AC is needed.
