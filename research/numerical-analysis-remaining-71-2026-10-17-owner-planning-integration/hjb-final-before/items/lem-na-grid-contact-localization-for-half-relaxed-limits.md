---
id: lem-na-grid-contact-localization-for-half-relaxed-limits
kind: lemma
title: Localization of strict half-relaxed contacts to periodic mesh nodes
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: [def-na-periodic-grid-and-tensor-multilinear-interpolation, lem-na-multilinear-interpolation-positive-and-second-order-accurate, def-half-relaxed-limits, def-countable-choice, thm-euclidean-semicontinuous-extreme-value-theorem, thm-heine-borel-rn, def-metric-compactness, lem-finite-set-has-max]
justified_by: []
aliases: []
dependency_level: 3
proof_strategy: direct
axiom_base: Countable Choice is used only to select near-recovery points; the compact-annulus exclusion uses finite subcovers and no sequence selection.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Michael G. Crandall, Hitoshi Ishii, and Pierre-Louis Lions, User's guide to viscosity solutions of second order partial differential equations"
      url: https://arxiv.org/pdf/math/9207212
      locator: "§6, half-relaxed limits; Appendix A strict-contact and approximation arguments, printed pp. 34–35 and 56–63."
    - title: "Guy Barles and Panagiotis E. Souganidis, Convergence of approximation schemes for fully nonlinear second order equations"
      url: https://benjaminmoll.com/wp-content/uploads/2021/04/barles-souganidis.pdf
      locator: "§2 proof of Theorem 2.1, strict contact and mesh-maximizer localization, printed pp. 275–276."
verification:
  precheck: pass
---

## Statement

Let $V_k$ be locally bounded periodic interpolant extensions of finite nodal
arrays on grids with $h_k\to0$ and time steps $\tau_k\to0$. Regard this
sequence as the family $V_\epsilon=V_k$ when
$(k+1)^{-1}<\epsilon\le k^{-1}$, and form its upper and lower half-relaxed
limits as in
[[def-half-relaxed-limits]]. If $\overline V-\phi$ has a strict local maximum
at an interior point $z_0=(x_0,t_0)$ for a smooth test $\phi$, then there are
mesh indices $k_m\to\infty$ and grid points $z_m=(x_{i_m},t_{n_m})\to z_0$
such that $V_{k_m}(z_m)-\phi(z_m)\to\overline V(z_0)-\phi(z_0)$ and $z_m$ is
a local maximum of the corresponding nodal values minus $\phi$ on a fixed
closed space-time ball. The lower half-relaxed limit has the dual strict
minimum property. The proof uses Countable Choice only for sequential recovery
from the set-defined half-relaxed limit.

## Facts & Assumptions

**Given:** The locally bounded family and interpolant extensions of the
statement, a strict local contact, and the half-relaxed limits.

[F1] The upper half-relaxed limit is the infimum over radii of local suprema,
and Countable Choice gives a sequence of near-recovery pairs; the lower limit
has the dual property ([[def-half-relaxed-limits]], [[def-countable-choice]]).

[F2] A tensor interpolant is a convex combination of the nodal values in its
cell, whose vertices are within $\sqrt d\,h_{\max}$ in a periodic lift
([[def-na-periodic-grid-and-tensor-multilinear-interpolation]],
[[lem-na-multilinear-interpolation-positive-and-second-order-accurate]]).

[F3] A closed bounded Euclidean set is compact and every open cover of a
compact metric space has a finite subcover
([[thm-heine-borel-rn]], [[def-metric-compactness]]). Upper semicontinuous
functions attain maxima on compact sets; lower semicontinuous ones attain
minima ([[thm-euclidean-semicontinuous-extreme-value-theorem]]). A nonempty
finite set of real values also attains its extrema
([[lem-finite-set-has-max]]).

[A1] Countable Choice is used only for the countable near-recovery selections
in the proof ([[def-countable-choice]]).

## Proof

1.1 Choose a closed ball $K$ about $z_0$ contained in the open cylinder where the contact is strict. For any smaller radius $r>0$, the annulus $K\setminus B_r(z_0)$ is compact by [F3]; upper semicontinuity of $\overline V-\phi$ makes its maximum strictly less than $\overline V(z_0)-\phi(z_0)$. Denote the positive gap by $g_r$. The lower contact case gives the corresponding positive gap above the strict minimum. [F3, given, algebra]

1.2 By [F1] and [A1], select pairs $(k_m,y_m)$ with $k_m\to\infty$, $y_m\to z_0$, and $V_{k_m}(y_m)-\phi(y_m)\to \overline V(z_0)-\phi(z_0)$. The interpolated value $V_{k_m}(y_m)$ is a convex combination of the nodal values in its cell by [F2], so at least one cell vertex has value no smaller. Choose the first such vertex in the lexicographic order on its binary cell label $\epsilon\in\{0,1\}^d$, where at the first differing coordinate $0$ precedes $1$. Its spatial distance from $y_m$ is at most $\sqrt d\,h_{k_m}$; the piecewise-constant time extension has a grid time within $\tau_{k_m}$. Thus the selected nodal points converge to $z_0$. Continuity of $\phi$ makes the nodal $V-\phi$ values at least the recovery values minus a quantity tending to zero, so their lower limit is at least the upper contact value. [F1, F2, A1, choose]

2.1 For all sufficiently large $m$, maximize the finite nonempty set of nodal values $U_i^n-\phi(x_i,t_n)$ inside $K$ and take its lexicographically first maximizing tuple $(i,n)$, comparing integer coordinates in displayed order and putting the smaller first differing coordinate first. A maximizer exists by [F3]; its value is at least the recovery value from step 1.2. Fix $r>0$ and let $A_r=K\setminus B_r(z_0)$. The strict gap $g_r$ from step 1.1 holds on $A_r$. For every $z\in A_r$, the set-based definition [F1] supplies a positive radius on which $V_\epsilon(y)\le\overline V(z)+g_r/8$ whenever both $\epsilon$ and $|y-z|$ are smaller than that radius. Continuity of $\phi$ and density of the positive rationals allow the following predicate on pairs $(z,q)$: $P_r(z,q)$ means $V_\epsilon(y)\le\overline V(z)+g_r/8$ for every $0<\epsilon<q$ and $|y-z|<q$, and $|\phi(y)-\phi(z)|<g_r/8$ for every $|y-z|<q$. The family $$\mathcal U_r=\{B(z,q/2):z\in A_r,\ q\in\mathbb Q_{>0},\ P_r(z,q)\}$$ is an open cover of $A_r$: for each center some real radius works by the relaxed-limit definition and continuity, and a smaller rational radius also works. This is the set of all qualifying rational pairs, not a choice of one radius for each $z$. By [F3] it has a finite subcover; let $q_*>0$ be the least radius in that finite subcover. Whenever $\epsilon<q_*$ and $y\in A_r$, a covering center gives $$V_\epsilon(y)-\phi(y)\le\overline V(z)-\phi(z)+g_r/4 \le\overline V(z_0)-\phi(z_0)-3g_r/4.$$ The recovery value in step 1.2 is eventually larger than this bound, so no maximizer on the grid in $K$ lies in $A_r$. Since this holds for every $r>0$, the maximizing nodes converge to $z_0$. Their values have lower limit at least the contact value by step 1.2; the upper-limit definition [F1], applied at these nodes, gives upper limit at most the same value. Thus their values converge to the upper half-relaxed contact value. [F1, F3, step 1.1, step 1.2, algebra]

3.1 For the lower half-relaxed limit, [F1] and [A1] select near-recovery pairs with values approaching $\underline V(z_0)$. Convex interpolation supplies a cell vertex with value no larger than the interpolated value; take the first such vertex in the binary-cell lexicographic order. Minimize over the finite grid points in $K$ and take the lexicographically first minimizer. Fix $r>0$ and use the strict lower-contact gap $g_r$ from step 1.1 on $A_r$. For each $z\in A_r$, the set-defined lower limit gives a positive radius on which $V_\epsilon(y)\ge\underline V(z)-g_r/8$ whenever both $\epsilon$ and $|y-z|$ are smaller than that radius. Define $P^-_r(z,q)$ to mean this bound holds for every $0<\epsilon<q$ and $|y-z|<q$, and $|\phi(y)-\phi(z)|<g_r/8$ for every $|y-z|<q$. The family of all $B(z,q/2)$ with $z\in A_r$, rational $q>0$, and $P^-_r(z,q)$ covers $A_r$; as in step 2.1, it uses all qualifying pairs rather than a pointwise choice. A finite subcover from [F3] has least radius $q_*>0$, so every sufficiently fine approximation at every $y\in A_r$ satisfies $$V_\epsilon(y)-\phi(y)\ge\underline V(z)-\phi(z)-g_r/4\ge\underline V(z_0)-\phi(z_0)+3g_r/4.$$ The lower recovery values from the selected vertex tend to $\underline V(z_0)-\phi(z_0)$; hence no minimizing node lies in $A_r$ once the mesh is sufficiently fine. As this holds for each $r>0$, the minimizing nodes approach $z_0$. Their upper limit is at most the recovery contact value, while the set-defined lower limit [F1] gives lower limit at least that value, so they converge to it. This proves the dual statement. [F1, F2, F3, A1, step 1.1, step 2.1, choose] ∎
