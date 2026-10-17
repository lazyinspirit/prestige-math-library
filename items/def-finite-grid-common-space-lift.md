---
id: def-finite-grid-common-space-lift
kind: definition
title: "Finite-grid restriction, reconstruction, and common-space lift"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-common-space-linear-scheme-interface, def-bounded-linear-operator]
justified_by: []
aliases: []
landmark: false
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods, Chapter 4, §4.2"
      url: "https://people.maths.ox.ac.uk/trefethen/4all.pdf"
    - title: "R. J. LeVeque, AMath 585–6 Notes, Chapter 12, §§12.1–12.5.1"
      url: "https://usermanual.wiki/Document/LeVequeFiniteDiff.545303893.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Definition

Let $(X,U,D,(\tau_\nu))$ be a common-space IVP interface from
[[def-common-space-linear-scheme-interface]]. A **finite grid space**
$G_\nu$ is a normed vector space spanned by a possibly empty finite list over the same field
$\mathbb K$. A grid realization consists, for each $\nu$, of bounded linear
maps
$$P_\nu:X\to G_\nu,\qquad R_\nu:G_\nu\to X,\qquad Q_\nu:G_\nu\to G_\nu,$$
where bounded linearity is in the sense of [[def-bounded-linear-operator]],
such that $P_\nu R_\nu=I_{G_\nu}$ and
$$U(\tau_\nu)(\ker P_\nu)\subseteq\ker P_\nu,\qquad \ker P_\nu:=\{x\in X:P_\nu x=0\}.$$
Here $P_\nu$ is restriction to grid data, $R_\nu$ reconstructs grid data in
$X$, and $Q_\nu$ is the one-step grid update.

The **common-space lift** of the grid update is
$$S_\nu:=R_\nu Q_\nu P_\nu+U(\tau_\nu)(I_X-R_\nu P_\nu).$$
The first summand advances the reconstructed grid component; the second
continues the exact semigroup on the complementary component. The lift is
bounded because all factors are bounded. More explicitly, if $c_P,c_R,c_Q$
bound $P_\nu,R_\nu,Q_\nu$ and $c_U$ bounds $U(\tau_\nu)$, then
$$\|S_\nu x\|\le\bigl(c_Rc_Qc_P+c_U(1+c_Rc_P)\bigr)\|x\|$$
by the factor bounds and the triangle inequality. This finite bound proves
that $S_\nu$ is bounded. The invariance hypothesis on $\ker P_\nu$ is used
later to identify the lift's powers when comparing grid and common-space
stability. This definition is an analysis interface; it does not assert
that evaluating the complementary semigroup is part of a finite-grid
implementation.
