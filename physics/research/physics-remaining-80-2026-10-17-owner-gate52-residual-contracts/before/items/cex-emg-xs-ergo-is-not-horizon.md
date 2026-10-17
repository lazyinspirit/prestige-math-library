---
id: cex-emg-xs-ergo-is-not-horizon
kind: counterexample
title: Equatorial rotating ergosurface differs from horizon
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 9
deps:
  - prop-emg-xs-kn-ergoregion
  - prop-emg-xs-kn-horizon-data
  - def-emg-explicit-power-regimes
dependency_roles:
  prop-emg-xs-kn-ergoregion: mathematical-premise
  prop-emg-xs-kn-horizon-data: mathematical-premise
  def-emg-explicit-power-regimes: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019"
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, equations (7.124)-(7.128): Kerr outer horizon and stationary-limit surface."
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Section 3.3, equations (3.18)-(3.23): KN horizon and ergosurface roots."
---

## Statement refuted

The outer stationary-limit set of the specified asymptotic time-translation
field $T=\partial_v$ is always the same hypersurface as the outer KN Killing
horizon. The example below refutes this universal identification in the
selected ingoing model.

## Facts & Assumptions

**Given:** The selected ingoing KN model with $M>0$, $a\ne0$, and
$M^2>a^2+q^2$, evaluated at the equator.

[F1] [[prop-emg-xs-kn-ergoregion]]: the current A-page proposition computes
$g(T,T)$ and the equatorial stationary-limit radius
$r_E=M+\sqrt{M^2-q^2}$; its terminology is fixed by the current vocabulary Definition.

[F2] [[prop-emg-xs-kn-horizon-data]]: the current A-page proposition gives
the outer root $r_H=M+\sqrt{M^2-a^2-q^2}$ and its null Killing generator;
its proof verifies the current exact horizon vocabulary.

[F3] [[def-emg-explicit-power-regimes]]: the nonnegative square roots in
this example are uniquely defined.

[A1] $a\ne0$ and $M^2>a^2+q^2$ ensure the displayed roots are real, and the
equatorial angle has $\theta=\pi/2$.

## Counterexample

1.1 At $\theta=\pi/2$, the norm in [F1] vanishes when
$r^2-2Mr+q^2=0$. Since
$M^2-q^2=(M^2-a^2-q^2)+a^2>0$, its outer root is the real value
$r_E=M+\sqrt{M^2-q^2}$. [F1, F3, A1, algebra]

2.1 The outer horizon radius in [F2] is
$r_H=M+\sqrt{M^2-a^2-q^2}$. Put
$u=\sqrt{M^2-q^2}$ and $w=\sqrt{M^2-a^2-q^2}$. Then $u,w\ge0$ and
$(u-w)(u+w)=a^2>0$. Since $u+w>0$, we have $u>w$, hence $r_E>r_H$.
Therefore these two level sets
are distinct at the equator, refuting the universal claim. [F2, F3, A1, step 1.1, algebra]

3.1 At the equatorial horizon, [F1] gives
$g(T,T)=a^2/r_H^2>0$, whereas [F2] gives a null horizon generator. Thus
the stationary field itself is spacelike there and is not the horizon
generator. On the rotation axis $\sin\theta=0$ the displayed outer radii
coincide; this is the boundary case and does not restore the universal
claim. The deductions remain conditional on [F1-F2]'s stated interfaces.
[F1, F2, A1, algebra] ∎
## Remarks

This is a mathematical comparison of two level sets for specified fields.
It asserts no observation and no global event-horizon classification.
