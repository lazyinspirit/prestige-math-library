---
id: thm-hankel-representation-for-reciprocal-gamma
kind: theorem
title: "Hankel's representation for reciprocal Gamma"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-hankel-contour-and-power-branch,
       thm-euler-reflection-formula,
       thm-gamma-meromorphic-continuation]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 6 §2"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
pipeline_run: null
---

## Statement

For every $z\in\mathbb C$,

$$\frac{1}{\Gamma(z)}=\frac{1}{2\pi i}\int_H e^t t^{-z}\,dt,$$

where $H$ is the Hankel contour and $t^{-z}$ uses the principal branch on
$\mathbb C\setminus(-\infty,0]$. The integral converges absolutely for
$0<\operatorname{Re}z<1$ and then extends meromorphically to all $z$.

## Facts & Assumptions

**Given:** The Hankel contour and the principal branch.

[L1] The reflection formula gives $\Gamma(z)\Gamma(1-z)=\pi/\sin(\pi z)$ ([[thm-euler-reflection-formula]]).

[L2] Gamma already has a meromorphic continuation to all of $\mathbb C$ ([[thm-gamma-meromorphic-continuation]]).

[L3] The Hankel contour and the branch $t^{-z}$ are fixed as in [[def-hankel-contour-and-power-branch]].

## Proof

**Proof technique:** direct.

1.1 First assume $0<\operatorname{Re}z<1$. On the small circle about $0$, the integrand has size $O(r^{-\operatorname{Re}z})$, so the circular contribution tends to $0$ as $r\downarrow0$. On the two rays, $e^t$ decays exponentially as $t=-x$ with $x\to+\infty$, so the contour integral converges absolutely. [given, L3, algebra]

2.1 Along the upper and lower sides of the cut, one has $(-x\pm i0)^{-z}=e^{\mp\pi iz}x^{-z}$. With the orientation from [L3], the lower ray contributes $e^{\pi iz}\int_0^\infty e^{-x}x^{-z}\,dx$ and the upper ray contributes $-e^{-\pi iz}\int_0^\infty e^{-x}x^{-z}\,dx$. Therefore step 1.1 yields $$\int_H e^t t^{-z}\,dt =\left(e^{\pi iz}-e^{-\pi iz}\right)\int_0^\infty e^{-x}x^{-z}\,dx =2i\sin(\pi z)\Gamma(1-z).$$ [step 1.1, L3, algebra]

3.1 Using [L1], the right-hand side of step 2.1 equals $2\pi i/\Gamma(z)$ on $0<\operatorname{Re}z<1$. Hence the displayed integral formula holds on that strip. Both sides are meromorphic in $z$, and [L2] extends the identity to all of $\mathbb C$. [step 2.1, L1, L2, algebra] ∎
