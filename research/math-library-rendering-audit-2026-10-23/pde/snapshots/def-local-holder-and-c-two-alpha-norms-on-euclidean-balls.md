---
id: def-local-holder-and-c-two-alpha-norms-on-euclidean-balls
kind: definition
title: Local Hölder and scaled C-two-alpha norms on balls
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
proof_strategy: direct
deps: [def-ck-and-multi-index-notation-in-several-variables, def-euclidean-spheres-and-closed-balls]
sources:
  references:
    - title: "Armin Schikorra, Partial Differential Equations I & II (2025)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§8.1, printed pp. 139–142, Hölder seminorms and scaled Schauder norms on balls"
verification:
  audited: 2026-10-02
---

## Definition

Let $n\ge1$ be an integer and $0<\alpha<1$, let $B_r(a)=\{x\in\mathbb R^n:|x-a|<r\}$ be a Euclidean ball of
radius $r>0$, and let $f:B_r(a)\to\mathbb R$ or $\mathbb C$. Put
$$[f]_{0,\alpha;B_r(a)}:=\sup\Bigl\{\frac{|f(x)-f(y)|}{|x-y|^\alpha}:\ x,y\in B_r(a),\ x\ne y\Bigr\},\qquad \|f\|_{\infty;B_r(a)}:=\sup_{x\in B_r(a)}|f(x)|,$$
$$\|f\|^*_{0,\alpha;B_r(a)}:=\|f\|_{\infty;B_r(a)}+r^\alpha[f]_{0,\alpha;B_r(a)}.$$
Both displayed quantities take values in $[0,+\infty]$, so a norm can be
$+\infty$; we say that $f$ is $\alpha$-Hölder on $B_r(a)$ when
$[f]_{0,\alpha;B_r(a)}<\infty$.

For $u\in C^2(B_r(a))$, a multi-index $\gamma$, and $j=|\gamma|\le2$, write
$D^\gamma u$ for the partial derivative of
[[def-ck-and-multi-index-notation-in-several-variables]] in its displayed
canonical order, and set
$$\|u\|^*_{2,\alpha;B_r(a)}:=\sum_{j=0}^{2}r^j\max_{|\gamma|=j}\ \sup_{x\in B_r(a)}|D^\gamma u(x)|+r^{2+\alpha}\max_{|\gamma|=2}[D^\gamma u]_{0,\alpha;B_r(a)},$$
where the inner maximum runs over the finitely many multi-indices with the
stated order and the $j=0$ term is $\sup_{B_r(a)}|u|$. We write
$C^{2,\alpha}(B_r(a))$ for the functions $u\in C^2(B_r(a))$ for which this
quantity is finite.

## Remarks

- **Scaling.** If $r>0$, $a\in\mathbb R^n$, and $v(z):=u(a+rz)$ on $B_1(0)$,
  then $D^\gamma v(z)=r^{|\gamma|}D^\gamma u(a+rz)$ and therefore
  $$\|v\|^*_{2,\alpha;B_1(0)}=\|u\|^*_{2,\alpha;B_r(a)},\qquad \|v\|^*_{0,\alpha;B_1(0)}=\|u\|^*_{0,\alpha;B_r(a)}.$$
  The factors $r^j$ and $r^{2+\alpha}$ are exactly what makes the two sides
  equal: the norm is computed from the radius of the ball it is taken over,
  while each derivative of $v$ carries the extra factor $r^{j}$.
- **Local, not global.** These are interior ball quantities. They are read off
  the open ball $B_r(a)$ alone and say nothing about the boundary; in
  particular no boundary Schauder seminorm, no global $C^{2,\alpha}$ scale and
  no extension of $u$ beyond $B_r(a)$ are defined here.
- **Finiteness.** $\|u\|^*_{2,\alpha;B_r(a)}<\infty$ holds exactly when $u$,
  its first derivative field and its second derivative field are bounded on
  $B_r(a)$ and every second partial derivative is $\alpha$-Hölder there. No
  third derivative is involved. A finite $\|f\|^*_{0,\alpha;B_r(a)}$ makes $f$
  bounded; whether a continuous extension to the closed ball exists is a
  separate question, not part of this definition.
- The two seminorms with subscript $0,\alpha$ are used for Hölder sources in
  the Poincaré-style interior estimate of this page, while
  $\|\cdot\|^*_{2,\alpha}$ is the quantity estimated there.
