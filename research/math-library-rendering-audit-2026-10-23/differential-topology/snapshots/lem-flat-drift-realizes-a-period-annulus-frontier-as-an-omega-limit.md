---
id: lem-flat-drift-realizes-a-period-annulus-frontier-as-an-omega-limit
kind: lemma
title: "A flat transverse drift realizes the period-annulus frontier as an omega-limit set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-c2-first-integral-period-annuli-have-c2-products, thm-heine-borel-rn, lem-c1-euclidean-maximal-flow-with-c2-upgrade]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 5
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
      locator: "§7.1-7.3 (omega-limit sets and planar flows); the explicit flat band perturbation is supplied locally"
---

## Statement

Let $X$ be a $C^1$ planar vector field on an open neighborhood of a compact
disk $D$, and let $\Psi:S^1\times(0,1)\to A\subseteq\operatorname{int}D$ be a
given $C^2$ leaf product as supplied by
[[lem-c2-first-integral-period-annuli-have-c2-products]], with
$X=a(s,\theta)\partial_\theta$ and a positive $C^1$ coefficient $a$. Assume the
periodic curves $C_s=\Psi(S^1\times\{s\})$ bound nested Jordan domains $D_s$
and that $\Gamma=\partial\bigcup_{0<s<1}\operatorname{int}(D_s)$ is compact.
Then there is a $C^1$ vector field $Y$ on a neighborhood of $D$ that equals $X$
on $\Gamma$ and off an outer subannulus and has a positive orbit $y$ with
$\omega_Y^+(y)=\Gamma$. The construction uses no choice principle.

## Facts & Assumptions

**Given:** A $C^1$ planar field $X$ near a compact disk $D$, a $C^2$ leaf product $\Psi:S^1\times(0,1)\to A\subseteq\operatorname{int}D$ with $X=a(s,\theta)\partial_\theta$ and $a>0$ of class $C^1$, nested Jordan domains $D_s$ bounded by $C_s=\Psi(S^1\times\{s\})$, and the compact frontier $\Gamma=\partial\bigcup_{0<s<1}\operatorname{int}(D_s)$.

[F1] The product $\Psi$ is a $C^2$ diffeomorphism onto $A$ with $C^2$ inverse, and $W:=\Psi_*\partial_s$ is a $C^1$ field on $A$ transverse to $X$ ([[lem-c2-first-integral-period-annuli-have-c2-products]]).

[F2] Closed and bounded subsets of $\mathbb R^2$ are compact; a nested decreasing family of nonempty compact subsets has nonempty intersection; a continuous real function on a nonempty compact set attains its maximum and minimum ([[thm-heine-borel-rn]]).

[F3] A $C^1$ Euclidean field has a unique maximal flow that is jointly $C^1$, each regular point has a $C^1$ flow box, and a trajectory remaining in a compact subset of the domain has no finite maximal endpoint ([[lem-c1-euclidean-maximal-flow-with-c2-upgrade]]).

## Proof

**Proof technique:** direct.

1.1 Set $\Omega_s=\operatorname{int}D_s$ and $\Omega=\bigcup_{0<s<1}\Omega_s$, so that $\Gamma=\partial\Omega$; strict nesting gives $\operatorname{cl}\Omega_s\subseteq\Omega_t$ and $C_s\subseteq\Omega_t$ for $s<t$, and the sets $T_r=\operatorname{cl}\bigcup_{s\ge r}C_s$ are nonempty compact subsets of $D$ decreasing in $r$, so their tail intersection $K_\infty$ lies in $\operatorname{cl}\Omega$, meets no $\Omega_t$ because a ball about a point of $\Omega_t$ is avoided by all $C_s$ with $s>t$, and therefore lies in $\Gamma$; if arbitrarily late $C_s$ had points at distance at least $\epsilon$ from $\Gamma$ the nested compact sets $T_r\cap\{\operatorname{dist}(\cdot,\Gamma)\ge\epsilon\}$ would have a common point, so $\sup_{x\in C_s}\operatorname{dist}(x,\Gamma)\to0$ by [F2], while conversely for fixed $p\in\Gamma$ and $\epsilon>0$ a point $x\in\Omega\cap B_{\epsilon/2}(p)$ and an index $t$ with $x\in\Omega_t$ force every $C_s$ with $s>t$ to meet the segment from $x$ to $p$, and a finite cover of the compact $\Gamma$ by such balls makes $\Gamma$ everywhere within $\epsilon$ of $C_s$; hence $C_s\to\Gamma$ in Hausdorff distance and $\Gamma\subseteq\operatorname{cl}A$. [given, F1, F2]

2.1 Fix $s_1\in(0,1)$ and set $m(s)=\min_\theta a(s,\theta)>0$, $L(s)=\max_\theta\|\partial_s\Psi(s,\theta)\|$ and $q(s)=\min\{(1-s)^2,(1-s)^2m(s)/(1+L(s))\}$, which are continuous and positive on compact subintervals; with $\tau(s)=\log((1-s_1)/(1-s))$ and the explicit bump $\eta(t)=e^{-1/(1-t^2)}$ for $|t|<1$ and $\eta=0$ otherwise, the functions $\rho_n(s)=\eta(\tau(s)-n-\tfrac12)/\sum_{j\ge0}\eta(\tau(s)-j-\tfrac12)$ form a smooth locally finite partition of $[s_1,1)$ with positive sum, uniformly finite overlap, compact supports in $(0,1)$ and active indices tending to infinity as $s\to1$; for each support the compact set $B_n=\Psi(S^1\times\operatorname{supp}\rho_n)$ is disjoint from $\Gamma$ with positive distance $d_n$, while $q_n=\min_{\operatorname{supp}\rho_n}q>0$ and $M_n=1+\sup_{B_n}(|\rho_nW|+\|D(\rho_nW)\|)<\infty$ are attained finite extrema of continuous functions on nonempty compacta by [F2], so these are uniquely specified real numbers and no sequence of witnesses is selected. [step 1.1, F1, F2]

3.1 With $c_n=2^{-n-1}\min(q_n,d_n/M_n)$ and $b_0=\sum_{n\ge0}c_n\rho_n$ one has $b_0>0$ and $b_0\le q$, while the fields $V_n=c_n\rho_nW$ satisfy $|V_n(z)|\le2^{-n-1}\operatorname{dist}(z,\Gamma)$ and $\|DV_n(z)\|\le2^{-n-1}d_n$ on $B_n$ and vanish elsewhere, because $c_nM_n\le2^{-n-1}d_n$ and points of $B_n$ have distance to $\Gamma$ at least $d_n$; near $\Gamma$ only indices $n\ge N$ contribute for $N$ arbitrarily large, so $V=b_0W$ satisfies $|V(z)|\le2^{-N}\operatorname{dist}(z,\Gamma)$ and $\|DV(z)\|\le2^{-N}\sup_{n\ge N}d_n$, giving $V=o(\operatorname{dist}(z,\Gamma))$ and $DV\to0$ at $\Gamma$; therefore the extension of $V$ by zero across $\Gamma$ is $C^1$ with zero derivative there, and multiplying $b_0$ by one fixed smooth cutoff flat at $s_1$, positive for $s>s_1$ and equal to one near $1$, produces a $C^1$ function $b$ with $0\le b\le q$ that extends the drift by zero across the inner edge. [step 2.1, F2]

4.1 Define $Y=X+b(s)W$ on the outer subannulus $\{s>s_1\}$ and $Y=X$ elsewhere on a neighborhood of $D$; since $b$ is a $C^1$ function of the $C^2$ leaf coordinate $s$ and $W$ is $C^1$, the field $Y$ is $C^1$, agrees with $X$ off the outer subannulus and on $\Gamma$, and in product coordinates reads $Y=a(s,\theta)\partial_\theta+b(s)\partial_s$ with $a>0$ and $b\ge0$, so no new zero is created in the drift region. [step 3.1, F1]

5.1 Let $y$ be the maximal $Y$-trajectory starting at $\Psi(0,s_0)$ with $s_1<s_0<1$: along it $\dot s=b(s)$ and $\dot\theta=a(s,\theta)$, so $s$ increases strictly, $ds/d\theta\le(1-s)^2/(1+L(s))$, and $\int_{s_2}^{s}du/b(u)\ge\int_{s_2}^{s}du/(1-u)^2\to\infty$ as $s\to1$, so $s$ tends to $1$ only at infinite time with $\theta(s)-\theta(s_2)\ge\int_{s_2}^{s}(1+L(u))/(1-u)^2\,du\to\infty$; during each full phase turn starting at parameter $s_k$ the parameter increases by at most one fixed normalization constant times $(1-s_k)^2$, and $\int_{s_k}^{s}L(u)\,du=\int L(s(\theta))(ds/d\theta)\,d\theta\le(1-s_k)^2$ up to the same constant, so the corresponding fixed-phase ambient displacement from the leaf $C_{s_k}$ is bounded by that integral and every complete turn stays uniformly within that distance of the whole reference circle, while every phase is visited during the turn; as $k\to\infty$ the leaves $C_{s_k}$ converge to $\Gamma$ in Hausdorff distance by step 1.1, so every point of $\Gamma$ is a limit of the orbit and the orbit tail approaches $\Gamma$, giving $\omega_Y^+(y)=\Gamma$; the orbit remains in the compact set $\operatorname{cl}\Omega$, never meets $\Gamma$ because $C_s\cap\Gamma=\emptyset$ for all $s<1$, and is defined for all positive times by [F3]. [step 4.1, F1, F3]

6.1 Consequently $Y$ is a $C^1$ field on a neighborhood of $D$ that equals $X$ on $\Gamma$ and off the outer subannulus and has the positive orbit $y$ with $\omega_Y^+(y)=\Gamma$; every selection in the construction was an explicit band function or a uniquely determined extremum of a continuous function on a compact set, so no choice principle is used. [step 5.1] ∎
