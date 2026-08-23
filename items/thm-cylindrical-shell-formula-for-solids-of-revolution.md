---
id: thm-cylindrical-shell-formula-for-solids-of-revolution
kind: theorem
title: 'The cylindrical-shell formula for a solid of revolution about the $y$-axis'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-solid-of-revolution-about-a-coordinate-axis, thm-solid-between-continuous-graphs-fubini-formula, cor-disc-jordan-content-is-pi-r-squared, thm-jordan-boundary-criterion, lem-metrics-on-rn, lem-continuity-is-local-and-pastes, thm-heine-cantor-metric, thm-multidimensional-integral-properties, thm-multidimensional-darboux-equals-riemann, lem-finite-jordan-cover-sum-bounds, thm-extreme-value-metric, cor-jordan-content-finite-additivity, thm-heine-borel-rn]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "Sigurd Angenent, Math 221 lecture notes, Chapter 8 §5"
      url: "https://people.math.wisc.edu/~angenent/Free-Lecture-Notes/free221.pdf"
pipeline_run: null
---

## Statement

Let $0\le a\le b$ and let $f:[a,b]\to[0,\infty)$ be continuous. Revolve the region $\{(x,y):a\le x\le b,0\le y\le f(x)\}$ about the $y$-axis. The resulting solid is compact and Jordan measurable. Its volume is $2\pi\int_a^b x f(x)\,dx$.

## Facts & Assumptions

**Given:** The stated radial interval, profile, and solid $S_y(f)$ of [[def-solid-of-revolution-about-a-coordinate-axis]].

[F1] A solid under a continuous graph over a compact Jordan base is compact and Jordan measurable, and its volume is the integral of the height over the base ([[thm-solid-between-continuous-graphs-fubini-formula]]).

[F2] A closed disc of radius $r\ge0$ has Jordan content $\pi r^2$ ([[cor-disc-jordan-content-is-pi-r-squared]]).

[F3] A continuous map from a compact metric space is uniformly continuous ([[thm-heine-cantor-metric]]).

[F4] Tagged grid sums converge to the multidimensional integral of an integrable bounded function ([[thm-multidimensional-darboux-equals-riemann]]).

[F5] If integrable functions satisfy $u\le v$, then their multidimensional integrals satisfy $\int u\le\int v$ ([[thm-multidimensional-integral-properties]]).

[F6] A bounded set is Jordan measurable if and only if its boundary has content zero ([[thm-jordan-boundary-criterion]]).

[F7] The Euclidean distance is $d_2(u,v)=\|u-v\|_2$ and satisfies the metric triangle inequality ([[lem-metrics-on-rn]]).

[F8] A composite of continuous maps is continuous ([[lem-continuity-is-local-and-pastes]]).

[F9] For a bounded nonnegative integrable function on a Jordan set, a finite Jordan cover with upper bounds gives an upper integral bound, while an interior-disjoint Jordan subfamily with lower bounds gives a lower integral bound ([[lem-finite-jordan-cover-sum-bounds]]).

[F10] A continuous real function on a nonempty compact metric space attains a finite minimum and maximum ([[thm-extreme-value-metric]]).

[F11] If bounded Jordan sets meet in a content-zero set, the content of their union is the sum of their contents ([[cor-jordan-content-finite-additivity]]).

[F12] A Euclidean set is compact if and only if it is closed and bounded ([[thm-heine-borel-rn]]).

## Proof

**Proof technique:** direct.

1.1 Let $A:=\{(x,z):a\le\lVert(x,z)\rVert_2\le b\}$ and $h(x,z):=f(\lVert(x,z)\rVert_2)$. The annulus is closed and bounded, hence compact by [F12], and its boundary lies in the two circle boundaries of closed discs; [F2] and [F6] make those circles content zero and then make $A$ Jordan measurable. The triangle inequality in [F7], applied in both orders, gives $|\|u\|_2-\|v\|_2|\le\|u-v\|_2$, so the norm is continuous; [F8] then makes $h$ continuous. Fact [F1] applied between the graphs $0$ and $h$ identifies the resulting solid with $S_y(f)$ and its volume with $\int_Ah$. [given, F1, F2, F6, F7, F8, F12, construct, algebra]

2.1 If $a=b$, the annulus $A$ is the boundary circle of the closed disc of radius $a$, so [F2] and [F6] give it content zero. Fact [F10] bounds $h$ on $A$, and the single-set upper bound in [F9], which transfers the rectangle monotonicity of [F5] to Jordan-set integrals, gives $0\le\int_Ah\le(\max_Ah)\operatorname{cont}(A)=0$. The integral $2\pi\int_a^bxf(x)\,dx$ is also zero, so the theorem holds in this case. Henceforth assume $a<b$. [step 1.1, F2, F5, F6, F9, F10, cases]

3.1 For a partition $a=r_0<\cdots<r_N=b$, let $A_i$ be the closed subannulus with radii $r_i,r_{i+1}$, and let $m_i,M_i$ be the minimum and maximum of $f$ on $[r_i,r_{i+1}]$, which exist by [F10]. Fact [F2], the boundary criterion [F6], and additivity [F11] give $\operatorname{cont}(A_i)=\pi(r_{i+1}^2-r_i^2)$. The $A_i$ cover $A$ and have pairwise disjoint interiors, so [F9] bounds $\int_Ah$ between $\sum_i m_i\pi(r_{i+1}^2-r_i^2)$ and $\sum_i M_i\pi(r_{i+1}^2-r_i^2)$. [step 1.1, step 2.1, F2, F6, F9, F10, F11, algebra]

4.1 Uniform continuity from [F3] makes $\max_i(M_i-m_i)$ tend to zero with the mesh. Hence the difference between the upper and lower annular sums in step 3.1 is at most $\pi(b^2-a^2)\max_i(M_i-m_i)$ and tends to zero. [step 3.1, F3]

5.1 Since $r_{i+1}^2-r_i^2=(r_i+r_{i+1})(r_{i+1}-r_i)$, each annular sum differs by a vanishing mesh error from a tagged Riemann sum for $2\pi x f(x)$. By [F4], steps 3.1 and 4.1 therefore squeeze $\int_Ah$ to $2\pi\int_a^bxf(x)\,dx$. Together with step 2.1, the argument permits $a=0$, zeros of $f$, and $a=b$. [step 2.1, step 3.1, step 4.1, F4, algebra] ∎
