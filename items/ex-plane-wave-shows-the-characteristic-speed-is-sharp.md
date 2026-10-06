---
id: ex-plane-wave-shows-the-characteristic-speed-is-sharp
kind: example
title: "Plane-wave support translates at the characteristic speed"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps: [thm-finite-propagation-speed-for-the-wave-equation, def-wave-equation-cauchy-data-and-wave-speed, thm-chain-rule-for-total-derivatives, def-support-and-compactly-supported-riemann-integral-in-rn, def-directional-and-partial-derivatives, def-laplacian-of-a-c2-function, def-euclidean-inner-product, def-jacobian-matrix-and-gradient, thm-extreme-value-metric]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§2.1.B, printed pp. 36-38: running wave solutions $u=f(x\\cdot\\omega-ct)$"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§4.4, printed pp. 88-90, (4.23)-(4.27): the wave equation on the line and travelling profiles"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

Let $n\ge1$, $c>0$, let $\omega\in\mathbb R^n$ be a unit vector and let
$F\in C^2(\mathbb R)$ have compact nonempty support. Put

$$u(x,t):=F(\omega\cdot x-ct)\qquad(x\in\mathbb R^n,\ t\in\mathbb R).$$

Then $u$ is a classical solution of $\Box_cu=0$
([[def-wave-equation-cauchy-data-and-wave-speed]]), and for every $t$ its
support is exactly the closed set

$$\operatorname{supp}u(\cdot,t)=\{x\in\mathbb R^n:\omega\cdot x-ct\in\operatorname{supp}F\}$$

([[def-support-and-compactly-supported-riemann-integral-in-rn]]), which is the
translate $\operatorname{supp}u(\cdot,0)+ct\,\omega$ of the initial support.
Consequently the disturbance travels with velocity $c\,\omega$: its two
bounding hyperplanes (the front and the back of the plane wave) advance with
speed exactly $c$ along $\omega$. This exhibits the characteristic speed $c$ as
an attained speed and not merely an upper bound, in contrast with the general
estimate of [[thm-finite-propagation-speed-for-the-wave-equation]]. The
support need not be compact when $n\ge2$: the support is unbounded in transverse directions; for $n=1$ it is compact and may be disconnected. The support equals its enclosing slab only if $\operatorname{supp}F$ is an interval.

## Facts & Assumptions

**Given:** $n\ge1$, $c>0$, a unit vector $\omega\in\mathbb R^n$, a function $F\in C^2(\mathbb R)$ with compact nonempty support, and $u(x,t)=F(\omega\cdot x-ct)$; write $\ell(x,t):=\omega\cdot x-ct$ and $A:=\{s\in\mathbb R:F(s)\ne0\}$, so that $\operatorname{supp}F=\overline A$.

[F1] Chain rule: $D(G\circ H)(a)=DG(H(a))\circ DH(a)$ for composable totally differentiable maps. ([[thm-chain-rule-for-total-derivatives]])

[F2] The support of $f:\mathbb R^n\to\mathbb R$ is $\operatorname{supp}f=\overline{\{x:f(x)\ne0\}}$, and $f$ is compactly supported when that closure is compact. ([[def-support-and-compactly-supported-riemann-integral-in-rn]])

[F3] The wave operator of speed $c$ is $\Box_c=\partial_t^2-c^2\Delta$, with $\Delta=\operatorname{div}\nabla$ the Laplacian. ([[def-wave-equation-cauchy-data-and-wave-speed]], [[def-laplacian-of-a-c2-function]])

[F4] Partial and directional derivatives are the ordinary one-variable derivatives of the line maps $t\mapsto f(a+tv)$; the Euclidean gradient is $(\partial_0f,\ldots,\partial_{n-1}f)$. ([[def-directional-and-partial-derivatives]], [[def-jacobian-matrix-and-gradient]])

[F5] A continuous real function on a nonempty compact metric space attains its maximum and minimum. ([[thm-extreme-value-metric]])

## Verification

1.1 The profile solves the wave equation: by [F1] and [F4], $u_t=-cF'(\ell)$, $u_{tt}=c^2F''(\ell)$, $\partial_iu=\omega_iF'(\ell)$ and $\partial_i\partial_iu=\omega_i^2F''(\ell)$ for every spatial index $i$, so $\Delta u=\bigl(\sum_i\omega_i^2\bigr)F''(\ell)=F''(\ell)$ because $|\omega|=1$; hence $\Box_cu=u_{tt}-c^2\Delta u=c^2F''(\ell)-c^2F''(\ell)=0$ on $\mathbb R^n\times\mathbb R$ [F3], and $u$ is a classical solution with all second derivatives continuous. [given, F1, F3, F4, algebra]

2.1 The support identity: for every $x$ one has $u(x,t)\ne0$ exactly when $\ell(x,t)\in A$, so $\operatorname{supp}u(\cdot,t)=\overline{\{x:\ell(x,t)\in A\}}$ [F2]; since $x\mapsto\ell(x,t)$ is continuous, the set $\{x:\ell(x,t)\in\operatorname{supp}F\}=\{x:\ell(x,t)\in\overline A\}$ is closed and contains $\{x:\ell(x,t)\in A\}$, whence the closure is contained in it; conversely, if $\ell(x,t)\in\operatorname{supp}F$, then for every $\varepsilon>0$ closure supplies $s\in A$ with $|s-\ell(x,t)|<\varepsilon$; the point $x_s:=x+(s-\ell(x,t))\omega$ satisfies $|x_s-x|<\varepsilon$ and $u(x_s,t)=F(s)\ne0$. Every neighbourhood of $x$ therefore meets the nonzero set, so $x$ is in its closure. Therefore $\operatorname{supp}u(\cdot,t)=\{x:\omega\cdot x-ct\in\operatorname{supp}F\}$. [step 1.1, F2, algebra]

3.1 Translation and speed: the identity $\omega\cdot(x+ct\omega)=\omega\cdot x+ct$ gives $\operatorname{supp}u(\cdot,t)=\operatorname{supp}u(\cdot,0)+ct\omega$ directly from step 2.1; writing $a:=\min\operatorname{supp}F$ and $b:=\max\operatorname{supp}F$, both attained by [F5] applied to the identity on the nonempty compact $\operatorname{supp}F$, the support is contained in the closed slab $\{a+ct\le\omega\cdot x\le b+ct\}$ with $a<b$ (continuity and a nonzero value imply that the support contains an interval); the two bounding hyperplanes therefore translate by $ct\omega$, so each moves with velocity $c\omega$ and speed exactly $c$ along the direction $\omega$, and the support meets both bounding hyperplanes because $a,b\in\operatorname{supp}F$. [given, step 2.1, algebra, F5] ∎

For $n=1$ the enclosing slab is the interval described by $a+ct\le\omega x\le b+ct$, and its front and back endpoints move with velocity $c\omega$; for $n\ge2$ the same hyperplanes bound the unbounded slab, and the statement is about the direction of propagation $\omega$ and not about compact support at time $t$. The statement of [[thm-finite-propagation-speed-for-the-wave-equation]] only gives the upper bound, which this family attains.
