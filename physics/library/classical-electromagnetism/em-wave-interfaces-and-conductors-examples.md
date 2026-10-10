---
page: em-wave-interfaces-and-conductors-examples
title: "Wave interfaces and conductors — Examples"
status: draft
library: physics
items: []
examples:
  - ex-em-skin-depth-approximation-example
  - ex-em-brewster-angle-example
  - ex-em-evanescent-flux-example
---

The three worked cases are deterministic computations of the interface and
conducting-medium model with declared, non-measured parameters. The first
checks the good-conductor skin-depth bounds at the declared ratio
$\varepsilon\omega/\sigma=3/25$ with exact identities and bounded remainders,
and records the exclusion of $\sigma=0$ from the finite-depth approximation.
The second evaluates the equal-permeability Brewster configuration $n_1=1$,
$n_2=3/2$: the unique Brewster angle with $\tan\theta_B=3/2$, the vanishing TM
amplitude with $t_p=1$, and the surviving TE reflection $r_s=-5/13$ with
$R_s+T_s=1$ exactly. The third treats total internal reflection with
$n_1=3/2$, $n_2=1$ at $\sin\theta_i=4/5$: the unit-modulus reflection factor
with its explicit phase, the evanescent transmitted field with decay factor
$e^{-\sqrt{11}/5}$ per distance $c/\omega$, the vanishing normal averaged flux
and the positive tangential averaged flux. Each example states its own
hypotheses, reports no measurement and asserts no empirical claim.
