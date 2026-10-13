---
page: cm02-forces-initial-data-and-newtonian-flow-examples
title: "Forces, initial data and Newtonian flow — Examples"
status: draft
library: physics
items: []
examples:
  - ex-cm02-force-model-regularity-checks
  - ex-cm02-constant-field-projectile
  - ex-cm02-drag-terminal-velocity
  - cex-cm02-nonunique-flow-for-a-continuous-force
  - cex-cm02-singular-collision-finite-time
requires:
  - cm02-forces-initial-data-and-newtonian-flow
  - fundamental-trigonometric-identities
  - finite-probability-and-the-probabilistic-method
  - monotone-functions-and-discontinuities
  - cm01-framework-quantities-and-geometry
  - cm-math-approximation
---

These examples and counterexamples work the force page on explicit data. The
standing regularity hypotheses of [[post-cm02-force-superposition]] clause
(iii) are checked for the page's three force models
([[ex-cm02-force-model-regularity-checks]]): the uniform-field map is constant
with Lipschitz constant $0$, the drag map is affine with constant $c$, and the
inverse-square map $-k\,x/\lvert x\rvert^{3}$ is locally Lipschitz on every
source-excluding annulus with the explicit constant
$k(r^{-3}+3R^{3}r^{-6})$ and has no continuous extension to the excluded
center, so that the existence, uniqueness and continuation theorems apply to
each model on its stated domain.

Two computations then use the page's theorems on particular motions. The
constant-field projectile ([[ex-cm02-constant-field-projectile]]) specialises
the uniform-force model to a stated launch datum: the trajectory is planar and
parabolic, and the return-to-launch-height time and the level range are
computed from the declared model parameters. The drag model
([[ex-cm02-drag-terminal-velocity]]) yields the explicit global motion under a
constant applied force and the exponential approach of the velocity to the
terminal velocity $v_{\infty}=(m/c)\mathbf g$, with an elementary estimate of
the exponential decay.

The counterexamples probe the hypotheses. Continuity of the force map alone
does not give unique motions: for the unit-mass model with
$F(x)=\lambda\sqrt{\lvert x_{1}\rvert/\ell_*}\,e_{1}$, where
$[\lambda]=\mu\ell\tau^{-2}$ and $[\ell_*]=\ell$, two distinct $C^{2}$ motions pass
through the rest datum, and the map fails exactly the state-local-Lipschitz
clause of the force postulate
([[cex-cm02-nonunique-flow-for-a-continuous-force]]). All-time existence is
not automatic either: in the inverse-square external-potential model the
explicit radial motion $r(t)=r_{0}(1-t/T)^{2/3}$ reaches the excluded center
at the finite time $T$ with unbounded speed, so its maximal interval is
$(-\infty,T)$
([[cex-cm02-singular-collision-finite-time]]); this exhibits the escape
alternative of [[pthm-cm02-continuation]] and confirms that the external-source singularity
exclusion of the configuration domain is essential to the model's hypotheses.
