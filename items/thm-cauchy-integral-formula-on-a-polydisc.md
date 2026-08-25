---
id: thm-cauchy-integral-formula-on-a-polydisc
kind: theorem
title: "The iterated Cauchy integral formula on a polydisc"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-balls-and-polydiscs-in-complex-euclidean-space, def-separately-holomorphic-function, thm-cauchy-integral-formula-circle, thm-existence-of-complex-line-integrals-on-rectifiable-paths, def-complex-line-integral-over-a-rectifiable-path, thm-induction-principle, rem-complex-euclidean-space-dictionary, thm-winding-number-circle-traversed-k-times, lem-complex-conjugation-and-modulus-laws, thm-algebra-of-complex-derivatives, cor-complex-differentiability-implies-continuity, lem-continuity-is-local-and-pastes]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §1.2"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "H. P. Boas, Lecture Notes on Multidimensional Complex Analysis, Ch. 2"
      url: "https://haroldpboas.gitlab.io/courses/650-2019c/notes.pdf"
    - title: "M. Jabbari, Notes for Analysis and Geometry of Several Complex Variables, §3.1"
      url: "https://www.cimat.mx/~mohammad.jabbari/course-SCV.pdf"
pipeline_run: null
---

## Statement

Fix $m\ge1$, a point $a\in\mathbb C^m$ and a polyradius $\rho$. Let
$f:\Delta_\rho(a)\to\mathbb C$ be continuous and separately holomorphic
([[def-separately-holomorphic-function]]), let $r$ be a polyradius with
$r_k<\rho_k$ for every $k<m$, and let $C_k(t)=a_k+r_k\exp(it)$ on $[0,2\pi]$.
Then for every $z\in\Delta_r(a)$

$$f(z)=\frac1{(2\pi i)^m}\int_{C_0}\!\cdots\!\int_{C_{m-1}} \frac{f(\zeta_0,\dots,\zeta_{m-1})}{\prod_{k<m}(\zeta_k-z_k)} \,d\zeta_{m-1}\cdots d\zeta_0 .$$

The right-hand side is an **iterated** integral: the innermost integral is taken
over $\zeta_{m-1}$ with $\zeta_0,\dots,\zeta_{m-2}$ held fixed, then over
$\zeta_{m-2}$, and so on. Each successive integrand is continuous on the circle
it is integrated over, so each of the $m$ integrals exists. No integral over the
distinguished boundary is formed and the order of integration is never
interchanged.

## Facts & Assumptions

**Given:** $m\ge1$, $a\in\mathbb C^m$, polyradii $\rho$ and $r$ with $r_k<\rho_k$, a continuous separately holomorphic $f:\Delta_\rho(a)\to\mathbb C$, the circles $C_k$, and $z\in\Delta_r(a)$; $\mathbb C^m$ is read through [[rem-complex-euclidean-space-dictionary]].

[L1] $\Delta_r(a)$, $\overline\Delta_r(a)$ and $\Gamma_r(a)$ are defined coordinatewise by $|z_k-a_k|<r_k$, $\le r_k$ and $=r_k$ ([[def-balls-and-polydiscs-in-complex-euclidean-space]]).

[L2] $f$ is separately holomorphic when for every $b\in U$ and $k<m$ the slice $\zeta\mapsto f(b_0,\dots,b_{k-1},\zeta,b_{k+1},\dots,b_{m-1})$ is holomorphic on the open set of $\zeta$ for which the point lies in $U$ ([[def-separately-holomorphic-function]]).

[L3] If $f$ is holomorphic on $D(a',R)$, $0<r'<R$, $|z'-a'|<r'$ and $\gamma(t)=a'+r'\exp(it)$ on $[0,2\pi]$, then $f(z')=(2\pi i)^{-1}\int_\gamma f(\zeta)(\zeta-z')^{-1}\,d\zeta$ ([[thm-cauchy-integral-formula-circle]]).

[L4] For a rectifiable contour and an integrand continuous on its trace, the complex line integral exists ([[thm-existence-of-complex-line-integrals-on-rectifiable-paths]], [[def-complex-line-integral-over-a-rectifiable-path]]).

[L5] If a property holds at $0$ and passes from $q$ to $q+1$, it holds for every natural number ([[thm-induction-principle]]).

[L6] For $a'\in\mathbb C$, $r'>0$ and $k\in\mathbb Z$, the contour $a'+r'\exp(ikt)$ on $[0,2\pi]$ is a closed complex contour whose trace for $k\ne0$ is $\{|\,\cdot-a'|=r'\}$ ([[thm-winding-number-circle-traversed-k-times]]).

[L7] $|zw|=|z||w|$ and $|z+w|\le|z|+|w|$ ([[lem-complex-conjugation-and-modulus-laws]]).

[L8] Nonvanishing quotients of functions complex differentiable at a point are complex differentiable there ([[thm-algebra-of-complex-derivatives]]), such functions are continuous ([[cor-complex-differentiability-implies-continuity]]), and composites of continuous maps are continuous ([[lem-continuity-is-local-and-pastes]]).

## Proof

**Proof technique:** direct.

1.1 By [L6] each $C_k$ is a closed complex contour with trace the circle $\{|\zeta-a_k|=r_k\}$. If $|\zeta_j-a_j|=r_j$ for $j<p$ and $|z_j-a_j|<r_j$ for $j\ge p$, then $|\zeta_j-a_j|<\rho_j$ and $|z_j-a_j|<\rho_j$ by the hypothesis $r_j<\rho_j$, so every such mixed point lies in $\Delta_\rho(a)$ by [L1]. [given, L1, L6]

1.2 For the fixed point $z$, define $H_m(\zeta_0,\dots,\zeta_{m-1};z):=f(\zeta_0,\dots,\zeta_{m-1})$. Then, for $p=m-1,m-2,\dots,0$, define $H_p(\zeta_0,\dots,\zeta_{p-1};z)$ by $$H_p:=\frac1{2\pi i}\int_{C_p}\frac{H_{p+1}(\zeta_0,\dots,\zeta_{p-1},\zeta_p;z)}{\zeta_p-z_p}\,d\zeta_p,$$ whenever the integrand is continuous on $C_p$. By construction $H_0(\,;z)$ is exactly the iterated integral in the statement, divided by $(2\pi i)^m$. [given]

2.1 Claim, proved by induction on $q=m-p$ using [L5]: for every $p$ with $0\le p\le m$ the quantity $H_p$ is defined and $H_p(\zeta_0,\dots,\zeta_{p-1};z)=f(\zeta_0,\dots,\zeta_{p-1},z_p,\dots,z_{m-1})$. For $q=0$, that is $p=m$, this is the definition of $H_m$. [step 1.1, step 1.2, L5]

2.2 The slice $\xi\mapsto f(\zeta_0,\dots,\zeta_{p-1},\xi,z_{p+1},\dots,z_{m-1})$ is holomorphic on the disc $|\xi-a_p|<\rho_p$: by step 1.1 the corresponding point lies in $\Delta_\rho(a)$ for every such $\xi$, and by [L1] and [L2] that disc is exactly the slice domain, on which separate holomorphy makes the slice holomorphic. [step 1.1, L1, L2]

3.1 Assume the claim for $p+1$. Fix $\zeta_0,\dots,\zeta_{p-1}$ on their circles. By the assumption, $H_{p+1}(\zeta_0,\dots,\zeta_{p-1},\zeta_p;z)=f(\zeta_0,\dots,\zeta_p,z_{p+1},\dots,z_{m-1})$, which by step 1.1 is a continuous function of $\zeta_p$ on the circle $|\zeta_p-a_p|=r_p$; dividing by $\zeta_p-z_p$, which is nonzero there because $|z_p-a_p|<r_p$ by [L1] and [L7], leaves a continuous integrand by [L8], so the integral defining $H_p$ exists by [L4]. [step 1.1, step 2.1, L1, L4, L7, L8]

4.1 Applying [L3] to the slice of step 2.2, with $R=\rho_p$, $r'=r_p$ and $z'=z_p$, gives $f(\zeta_0,\dots,\zeta_{p-1},z_p,z_{p+1},\dots,z_{m-1})=\frac1{2\pi i}\int_{C_p}\frac{f(\zeta_0,\dots,\zeta_{p-1},\zeta_p,z_{p+1},\dots)}{\zeta_p-z_p}\,d\zeta_p$, which by step 3.1 is $H_p(\zeta_0,\dots,\zeta_{p-1};z)$. This is the claim for $p$, so the induction of step 2.1 closes. [step 3.1, step 2.2, L3]

5.1 Taking $p=0$ in step 2.1 gives $H_0(\,;z)=f(z)$, and step 1.2 identifies $H_0(\,;z)$ with the iterated integral divided by $(2\pi i)^m$; every one of the $m$ integrals exists by step 3.1. Since $z\in\Delta_r(a)$ was arbitrary, the formula holds throughout $\Delta_r(a)$. [step 1.2, step 2.1, step 3.1, step 4.1] ∎
