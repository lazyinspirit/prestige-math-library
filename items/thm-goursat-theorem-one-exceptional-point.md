---
id: thm-goursat-theorem-one-exceptional-point
kind: theorem
title: "Goursat's triangle theorem remains valid for a continuous function holomorphic away from one point"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-oriented-complex-triangle-and-boundary, thm-goursat-triangle-theorem, cor-ml-estimate-for-complex-line-integrals, prop-reversal-and-concatenation-of-complex-line-integrals]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 2, Theorem 1.4"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb C$ be open, let $p\in U$, and let $f:U\to\mathbb C$ be continuous and holomorphic on $U\setminus\{p\}$. If the filled triangle $T=\Delta[a,b,c]$ of [[def-oriented-complex-triangle-and-boundary]] is contained in $U$, then

$$\int_{\partial T}f(z)\,dz=0.$$

The exceptional point may lie outside, inside, or on the boundary of $T$.

## Facts & Assumptions

**Given:** An open set $U$, a point $p\in U$, a continuous function $f:U\to\mathbb C$ holomorphic away from $p$, and a filled triangle $T\subseteq U$.

[L1] Goursat's triangle theorem gives zero boundary integral when the function is holomorphic on an open set containing the filled triangle ([[thm-goursat-triangle-theorem]]).

[L2] Reversing a contour negates its integral and concatenating compatible contours adds their integrals ([[prop-reversal-and-concatenation-of-complex-line-integrals]]).

[L3] The ML estimate bounds an integral by a uniform bound on the integrand times the contour length ([[cor-ml-estimate-for-complex-line-integrals]]).

## Proof

**Proof technique:** direct.

1.1 If $p\notin T$, then $T\subseteq U\setminus\{p\}$; this punctured set is open because every $z\ne p$ has the ball $B(z,|z-p|/2)$ inside it, so [L1] applies. If $T$ is degenerate, order its distinct collinear vertices along their common line and split each directed edge at the intervening vertices; every resulting subsegment occurs equally often in both orientations, so [L2] gives zero. [given, L1, L2]

1.2 It remains to treat a nondegenerate triangle $\Delta[p,u,v]$ having $p$ as a vertex. For $0<t<1$, put $u_t=p+t(u-p)$ and $v_t=p+t(v-p)$. The triangles $\Delta[u_t,u,v]$ and $\Delta[u_t,v,v_t]$ lie in $\Delta[p,u,v]$ and avoid $p$, so [L1] makes their boundary integrals zero; adding their boundaries and cancelling opposite internal edges by [L2] gives $I_f[p,u,v]=I_f[p,u_t,v_t]$. [L1, L2]

2.1 Continuity at $p$ gives a neighborhood on which $|f|\le |f(p)|+1$. For all sufficiently small $t>0$, the small triangle lies in that neighborhood, has perimeter $tP(\Delta[p,u,v])$, and [L3] gives $|I_f[p,u_t,v_t]|\le(|f(p)|+1)tP(\Delta[p,u,v])$. [step 1.2, L3]

3.1 Letting $t$ be arbitrarily small in steps 1.2 and 2.1 forces $I_f[p,u,v]=0$, so every triangle having $p$ as a vertex has zero boundary integral. [step 1.2, step 2.1, algebra]

4.1 If $p\in T$, the three filled triangles $\Delta[p,a,b]$, $\Delta[p,b,c]$, and $\Delta[p,c,a]$ cover $T$ with compatible orientations; their internal edges cancel by [L2], leaving $\partial T$. Their integrals vanish by steps 1.1 and 3.1, so $I_f(T)=0$. Together with the case $p\notin T$ from step 1.1, this proves the claim for every position of $p$. [step 1.1, step 3.1, L2] ∎
