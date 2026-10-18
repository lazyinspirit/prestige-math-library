---
id: thm-pchip-third-order-away-from-extrema
kind: theorem
title: PCHIP has third-order value accuracy on uniform nonstationary grids
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [alg-pchip-slope-selection, lem-pchip-slope-selection-well-defined, def-piecewise-cubic-hermite-interpolant, thm-piecewise-cubic-hermite-interpolant-properties, lem-pchip-slopes-second-order-uniform-grid, lem-taylor-integral-remainder, def-continuity-and-derivative-on-real-interval, cor-boundedness-theorem-r, thm-heine-borel-r, thm-extreme-value-r, lem-real-and-complex-modulus-rules]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "F. N. Fritsch and J. Butland, A Method for Constructing Local Monotone Piecewise Cubic Interpolants, SIAM Journal on Scientific and Statistical Computing 5 (1984), pp. 300–304"
      url: https://anthonylloyd.github.io/public/interp/pchip/A_method_for_constructing_local_monotone_picewise_cubic_interpolants_fritsch1984.pdf
    - title: "Carl R. de Boor, A Practical Guide to Splines, revised edition, Chapter IV, pp. 39–40"
      url: https://djvu.online/file/W5YE3VGOgt1Ml
---

## Statement

Let $f$ be $C^3$ on an open interval containing $[a,b]$, with $|f'(x)|\ge c>0$ on $[a,b]$. On uniform grids $x_j=a+jh$, $j=0,\ldots,N$, $N\ge2$, let $P_h$ be the PCHIP interpolant to the values $f(x_j)$. There are constants $C,h_0>0$, depending only on $f$, $c$, and $[a,b]$, such that for every $h<h_0$,
$$\max_{x\in[a,b]}|P_h(x)-f(x)|\le Ch^3.$$
The assertion is limited to uniform grids and intervals on which the derivative stays bounded away from zero; it makes no third-order claim at an extremum.

## Facts & Assumptions

**Given:** The stated $C^3$ function, its nonvanishing derivative bound, and the uniform samples used by the PCHIP algorithm.

[F1] [[alg-pchip-slope-selection]]: PCHIP uses the prescribed nodal values and selected slopes in the cubic Hermite formula.

[F2] [[lem-pchip-slope-selection-well-defined]]: those slopes and pieces are finite and well-defined.

[F3] [[def-piecewise-cubic-hermite-interpolant]]: on a cell the Hermite formula is the linear combination of $H_{00},H_{01},H_{10},H_{11}$ with value and slope data.

[F4] [[thm-piecewise-cubic-hermite-interpolant-properties]]: each Hermite piece interpolates its endpoint values and slopes; the resulting interpolant is $C^1$ on the closed interval (with one-sided endpoint derivatives); and each piece reproduces any cubic polynomial from its endpoint values and derivatives.

[F5] [[lem-pchip-slopes-second-order-uniform-grid]]: for all sufficiently fine uniform grids, every PCHIP nodal slope differs from $f'(x_j)$ by at most $C_s h^2$ for a constant $C_s$ independent of the cell.

[F6] [[lem-taylor-integral-remainder]]: the degree-two Taylor polynomial of a $C^3$ function has remainder at most $M h^3/6$ on a cell of width $h$ when $|f'''|\le M$ there. Applied to $f'$ with degree one, the same theorem bounds its remainder by $Mh^2/2$.

[F7] [[def-continuity-and-derivative-on-real-interval]]: $C^3$ on an open interval means the derivatives through order three exist and are continuous there.

[F8] [[cor-boundedness-theorem-r]]: a continuous real function on a compact subset of $\mathbb R$ is bounded there.

[F9] [[thm-heine-borel-r]]: every closed interval $[u,v]$ with $u\le v$ is compact.

[F10] [[thm-extreme-value-r]]: a continuous real function on a nonempty compact subset of $\mathbb R$ attains its maximum and minimum.

[F11] [[lem-real-and-complex-modulus-rules]]: the real triangle inequality; applying it twice gives $\bigl||u|-|v|\bigr|\le |u-v|$.

## Proof
1.1 The admissible uniform grid has $x_0<\cdots<x_N$, so $a<b$ and $[a,b]$ is compact by [F9]. By [F7] and [F8], choose $M\ge0$ with $|f'''|\le M$ on $[a,b]$. Fix a cell $[x_i,x_i+h]$ and let $T_2$ be the degree-two Taylor polynomial of $f$ at $x_i$. By [F6], the residual $r=f-T_2$ satisfies $r(x_i)=r'(x_i)=0$, $|r(x_i+h)|\le Mh^3/6$, and $|r'(x_i+h)|\le Mh^2/2$; the derivative bound is [F6] applied to $f'$ with degree one. [F6, F7, F8, F9, given]

1.2 Let $H$ be the exact-derivative Hermite piece for $f$ on this cell. The PCHIP piece $P_h$ and $H$ have identical endpoint values. By [F3], their difference is $h(m_i-f'(x_i))H_{10}(t)+h(m_{i+1}-f'(x_i+h))H_{11}(t)$. Since [F2] guarantees these PCHIP slopes are defined and $|H_{10}(t)|=t(1-t)^2\le1$, $|H_{11}(t)|\le1$, [F5] gives $|P_h(x)-H(x)|\le2C_sh^3$ for every $x$ in the cell. [F1, F2, F3, F5, given, algebra]

2.1 For this exact-derivative Hermite piece $H$, linearity of the formula [F3] and reproduction [F4] give $H=T_2+H_r$, where $H_r(t)=r(x_i+h)H_{01}(t)+hr'(x_i+h)H_{11}(t)$. On $0\le t\le1$, $|H_{01}(t)|=t^2(3-2t)\le1$ and $|H_{11}(t)|=t^2(1-t)\le1$, so $|H_r(t)|\le(1/6+1/2)Mh^3=2Mh^3/3$. Together with $|r(x)|\le Mh^3/6$ from step 1.1, this yields $|H(x)-f(x)|\le5Mh^3/6$ for every $x$ in the cell. [F3, F4, step 1.1, algebra]

3.1 Combining steps 2.1 and 1.2 gives $|P_h(x)-f(x)|\le(5M/6+2C_s)h^3$ for every $x\in[a,b]$, since the cells cover the interval. The constants do not depend on $i$ or $N$; put $C=5M/6+2C_s$. To justify the maximum in the statement, admissibility of the grid for [F1] gives $x_0<\cdots<x_N$, so $a<b$. By [F4], $P_h$ is $C^1$ and hence continuous on $[a,b]$; by [F7], $f$ is continuous there. Set $E(x)=|P_h(x)-f(x)|$. For $x,z\in[a,b]$, applying the triangle inequality twice gives $\bigl||P_h(x)-f(x)|-|P_h(z)-f(z)|\bigr|\le |(P_h(x)-f(x))-(P_h(z)-f(z))|\le |P_h(x)-P_h(z)|+|f(x)-f(z)|$, so $E$ is continuous on $[a,b]$. By [F9], $[a,b]$ is compact, and it is nonempty; [F10] therefore gives a point where $E$ attains its maximum. The pointwise bound just proved bounds that maximum by $Ch^3$. [step 2.1, step 1.2, F1, F4, F7, F9, F10, F11, algebra] ∎
