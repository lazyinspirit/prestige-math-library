---
id: lem-cm-difference-operator-and-domain-loss-bound
kind: lemma
title: The difference operator $\Delta_h=\Psi_h^*-\mathrm{id}$ loses a controlled domain margin and is bounded by $C_dM|h|/b$
status: published
origin: pipeline
domain: mathematics
dependency_level: 8
deps:
- def-cm-analytic-splitting-data-and-exact-splitting-map
- lem-cm-exact-splitting-map-preserves-the-complex-canonical-form
- lem-cm-complex-analytic-flow-existence-and-holomorphy
- lem-cm-cauchy-formula-and-power-series-on-polydiscs
- lem-cm-holomorphic-map-calculus
- def-cm-complex-phase-domains-and-holomorphic-maps
- def-cm-phase-domain-and-standard-symplectic-two-form
- thm-chain-rule-for-total-derivatives
- def-total-derivative-in-euclidean-space
- def-directional-and-partial-derivatives
- def-metric-ball
- def-metric-topology
- thm-heine-borel-rn
- thm-extreme-value-metric
- def-ck-euclidean-maps-and-diffeomorphisms
dependency_roles:
  def-cm-analytic-splitting-data-and-exact-splitting-map: mathematical-premise
  lem-cm-exact-splitting-map-preserves-the-complex-canonical-form: mathematical-premise
  lem-cm-complex-analytic-flow-existence-and-holomorphy: mathematical-premise
  lem-cm-cauchy-formula-and-power-series-on-polydiscs: mathematical-premise
  lem-cm-holomorphic-map-calculus: mathematical-premise
  def-cm-complex-phase-domains-and-holomorphic-maps: mathematical-premise
  def-cm-phase-domain-and-standard-symplectic-two-form: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-metric-ball: mathematical-premise
  def-metric-topology: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: 'E. Hairer, Geometric Numerical Integration (TU Munchen 2010), Lecture 3 ''Backward error analysis'', Section 1: the difference operator and the modified equation of a one-step method, printed pages 1-3'
    url: https://www.unige.ch/~hairer/poly_geoint/week3.pdf
  - title: 'J. Lebl, Tasty Bits of Several Complex Variables, Chapter 1, Section 1.2: Cauchy estimates on polydiscs and the mean value bound for holomorphic functions, printed pages 18-23'
    url: https://www.jirka.org/scv/scv.pdf
verification:
  precheck: pass
---

## Statement

Let $d\ge1$ and let $(U,U_\rho,\tilde A,\tilde B,M,K,\delta,\Psi_h)$ be analytic splitting data as in [[def-cm-analytic-splitting-data-and-exact-splitting-map]], with complexified form and bracket as in [[def-cm-complex-phase-domains-and-holomorphic-maps]]. For $r>0$ put $D(r):=\{\zeta\in\mathbb C^{2d}:\operatorname{dist}(\zeta,\overline U)<r\}$.

There is a constant $C_0=C_0(d)\ge1$ such that for every integer $N\ge2$, with

$$b:=\frac{\rho}{8N},\qquad r_N:=\frac{\rho}{C_0MN},\qquad q:=\frac{C_dM|h|}{b},$$

the following holds for every complex $h$ with $0<|h|\le r_N$. Write $D_k:=D(\rho/2-2bk)$ for $0\le k\le N$; then $D_0=D(\rho/2)$, $D_N=D(\rho/4)\supseteq K$, and $D_N\subseteq D_k\subseteq D_0$ for $k\le N$. Define the **difference operator**

$$\Delta_hf:=f\circ\Psi_h-f$$

for functions $f$ holomorphic on $D_{k-1}$, where the composition is read on $D_k$. Then:

1. **Domain control.** For every $k=1,\dots,N$ the map $\Psi_h$ is holomorphic on $D_k$, maps $D_k$ into $D_{k-1}$, and satisfies $\lVert\Psi_h(Z)-Z\rVert\le2M|h|\le b$ for all $Z\in D_k$.
2. **Single-step bound.** If $f$ is holomorphic on $D_{k-1}$ with $|f|\le F$ there, then $\Delta_hf$ is holomorphic on $D_k$ and
 $$\lvert\Delta_hf(Z)\rvert\le\frac{C_dM|h|}{b}\,F\qquad(Z\in D_k),$$
 with $C_d:=4d^2$.
3. **Iterates.** Taking $C_0:=\max\{16,\,128d^2\}$ one has $q\le1/4$ for $|h|\le r_N$, and for every $f$ holomorphic on $D_0$ and every $1\le k\le N$, the iterate $\Delta_h^kf$ is holomorphic on $D_k$ and
 $$\lvert\Delta_h^kf(Z)\rvert\le q^k\,|f|_{D_0}\qquad(Z\in D_k).$$

## Facts & Assumptions

**Given:** The analytic splitting data; $N\ge2$, $b=\rho/(8N)$, the domains $D_k$; the constant $C_d$ of clause 2 (to be produced in the proof).

[F1] Geometric facts about the distance domains ([[def-cm-complex-phase-domains-and-holomorphic-maps]]): $\operatorname{dist}(\cdot,\overline U)$ is $1$-Lipschitz, so $\zeta\in D(r)$ implies $B(\zeta,t)\subseteq D(r+t)$ for every $t>0$, and $D(r)\subseteq D(r')$ for $r\le r'$. Every $Z\in K\subseteq U$ has $\operatorname{dist}(Z,\overline U)=0$, so $K\subseteq D_N$.

[F2] Flow displacement: by [[lem-cm-complex-analytic-flow-existence-and-holomorphy]] clause 1, each of the three flows in $\Psi_h=\varphi_{\tilde A}^{h/2}\circ\varphi_{\tilde B}^{h}\circ\varphi_{\tilde A}^{h/2}$ displaces its argument by at most $M$ times the modulus of its time parameter, provided the argument lies in the appropriate polydisc of radius $s$ with $|t|\le s/(8\cdot2d\cdot M)$; consequently, on the domains used below, $\lVert\Psi_h(Z)-Z\rVert\le(1/2+1+1/2)M|h|=2M|h|$. The composition is holomorphic by [[lem-cm-exact-splitting-map-preserves-the-complex-canonical-form]] and [[lem-cm-holomorphic-map-calculus]] clause 1.

[F3] Cauchy derivative estimates on a polydisc ([[lem-cm-cauchy-formula-and-power-series-on-polydiscs]] clause 3): if $g$ is continuous and separately holomorphic on $\Delta_\rho(a)$, then for $0<s_k<\rho_k$, $|\partial_{z_k}g(a)|\le M(s)/s_k$ with $M(s):=\sup_{\Gamma_s(a)}|g|$; a function holomorphic on an open set is continuous and separately holomorphic there.

[F4] The mean value estimate on a segment: if $g$ is totally differentiable on the segment $[Z,\xi]$ and $|\partial_{z_k}g|\le A$ on it for every $k$, then $|g(\xi)-g(Z)|\le\sum_kA|\xi_k-Z_k|\le\sqrt{2d}\,A\lVert\xi-Z\rVert$; this follows by applying the one-variable mean value estimate to the real coordinate functions along the segment ([[thm-chain-rule-for-total-derivatives]], [[def-total-derivative-in-euclidean-space]], [[def-directional-and-partial-derivatives]]).

[F5] Holomorphy of the pullback and of differences: $f\circ\Psi_h$ is holomorphic on $D_k$ by the chain rule of [[lem-cm-holomorphic-map-calculus]] clause 1, so $\Delta_hf$ is holomorphic there ([[def-cm-complex-phase-domains-and-holomorphic-maps]]).

## Proof

**Proof technique:** direct; verify the margin bookkeeping, bound the increment by Cauchy estimates on slices of the segment, and iterate.

1.1 Margin bookkeeping. Fix $N\ge2$, $k\le N$ and $Z\in D_k$. Since $C_0\ge128d^2$, $|h|\le r_N$ implies both $2M|h|\le b$ and $|h|\le\rho/(64d\sqrt{2d}M)$. Construct the three factors sequentially using polydiscs of radius $s=\rho/(4\sqrt{2d})$ centred at their initial points. The first centre is $Z$. The first flow exists by [F2] and displaces it by at most $M|h|/2$; the second centre is therefore within that distance of $Z$. Inductively, the second flow displaces its own initial point by at most $M|h|$, and the last by at most $M|h|/2$. Thus every intermediate centre and every point along a subflow, with its time parameter running along the segment from zero to that factor's time, lies within the accumulated bound $2M|h|\le b$ of $Z$. At each centre the polydisc has Euclidean radius $\rho/4$, so its distance to $\overline U$ is less than $\rho/2+b+\rho/4\le13\rho/16<\rho$; it lies in $U_\rho$. The flow lemma permits each subtime because $s/(8\cdot2dM)=\rho/(64d\sqrt{2d}M)$. This induction establishes existence and the intermediate bounds without using cancellation in the final displacement. Set $\xi=\Psi_h(Z)$; the triangle inequality gives $\|\xi-Z\|\le2M|h|\le b$. By [F1], $\operatorname{dist}(\xi,\overline U)<\rho/2-2bk+b=\rho/2-2b(k-1)-b$, so $\xi\in D_{k-1}$. The same strict bound holds along the straight segment $[Z,\xi]$, since every such point is within $b$ of $Z$. Consequently the polydisc of radius $b/\sqrt{2d}$ about each point of that segment, including its distinguished boundary, lies in $D_{k-1}$. Composition holomorphy follows from [F2]. This proves clause 1 with the stated constants and margins. [given, F1, F2, algebra]

2.1 Single-step bound. Let $f$ be holomorphic on $D_{k-1}$ with $|f|\le F$. For $Z\in D_k$, $\xi=\Psi_h(Z)$ and $\zeta$ on the segment, [F3] applied at $\zeta$ with the polyradius $(b/\sqrt{2d})\mathbf 1$, whose distinguished boundary lies in $D_{k-1}$ by step 1.1, gives $|\partial_{z_k}f(\zeta)|\le\sqrt{2d}\,F/b$ for every $k$. Hence by [F4], $$\lvert f(\xi)-f(Z)\rvert\le\sqrt{2d}\cdot\sqrt{2d}\cdot\frac{F}{b}\cdot\lVert\xi-Z\rVert\le\frac{2d\,F}{b}\cdot2M|h|,$$ and $\Delta_hf$ is holomorphic on $D_k$ by [F5]. This is clause 2 with $C_d:=4d^2$, which depends only on $d$. [given, step 1.1, F3, F4, F5, algebra]

3.1 Iteration. By induction on $k$: suppose $\Delta_h^{k-1}f$ is holomorphic on $D_{k-1}$ with $|\Delta_h^{k-1}f|\le q^{k-1}|f|_{D_0}$ (true for $k=1$), then step 1.1 shows $\Psi_h(D_k)\subseteq D_{k-1}$, so $\Delta_h^kf=\Delta_h(\Delta_h^{k-1}f)$ is defined and holomorphic on $D_k$ by clause 2, with bound $q\cdot q^{k-1}|f|_{D_0}=q^k|f|_{D_0}$. [given, step 1.1, step 2.1, algebra]

4.1 The factor $q$. With $C_0\ge16$ the constraint $|h|\le r_N$ implies $2M|h|\le\rho/(8N)=b$ and, with the constant $C_d=4d^2$ of step 2.1, $$q=\frac{4d^2M|h|}{b}\le\frac{4d^2M\rho}{C_0MN}\cdot\frac{8N}{\rho}=\frac{32d^2}{C_0}\le\frac14,$$ because $C_0\ge128d^2=32C_d$. This proves clause 3 with $q\le1/4$. [given, step 3.1, algebra]

5.1 Conclusion. Clause 1 is step 1.1, clause 2 is step 2.1, clause 3 is steps 3.1 and 4.1; all constants depend only on $d$, $M$, $\rho$. [step 1.1, step 2.1, step 3.1, step 4.1] ∎

## Remarks

- The loss of margin is exactly $2b=\rho/(4N)$ per application: $N$ applications consume $\rho/4$ of the available $\rho/2$, and the surviving domain $D(\rho/4)$ still contains $K$. The choices $b=\rho/(8N)$ and $r_N=\rho/(C_0MN)$ are conventions fixed once and for all on this page; every later item refers to them.
- The constant $q\le1/4$ is not used beyond the geometric summations; optimising it is irrelevant. No choice principle is used.
