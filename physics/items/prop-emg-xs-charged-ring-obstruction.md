---
id: prop-emg-xs-charged-ring-obstruction
kind: proposition
title: Charged KN ring regularity obstruction
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 4
deps:
  - prop-emg-xs-kn-invariants
  - def-emg-causal-solution-and-horizon-vocabulary
  - def-emg-explicit-power-regimes
dependency_roles:
  prop-emg-xs-kn-invariants: mathematical-premise
  def-emg-causal-solution-and-horizon-vocabulary: mathematical-premise
  def-emg-explicit-power-regimes: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Section 3.2, equations (3.17) and oblate-coordinate discussion: the ring locus; the source interpretation is not imported."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019"
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, Kerr-Newman ring-singularity discussion after equation (7.128); the conditional curvature argument is given here."
---

## Statement

For the electric KN datum with real $M,a,q$ and $q\ne0$, let
$\mathcal U$ be its Boyer-Lindquist domain $\Sigma>0$, $\Delta\ne0$,
$0<\theta<\pi$. Suppose a sequence $x_n\in\mathcal U$ and a proposed
$C^2$ Lorentzian extension $(\widetilde M,\widetilde g)$ are given, with a
smooth isometric embedding $j:\mathcal U\to\widetilde M$ onto an open
subset, $j(x_n)\to p\in\widetilde M$, and $\Sigma(x_n)\to0$.
Then no such extension exists. When $a\ne0$, the limiting coordinate locus
$r=0$, $\theta=\pi/2$ maps under
$$X=\sqrt{r^2+a^2}\sin\theta\cos\phi,\quad Y=\sqrt{r^2+a^2}\sin\theta\sin\phi,\quad Z=r\cos\theta$$
to $X^2+Y^2=a^2$, $Z=0$. When $q=0$, this charged Ricci-invariant
argument yields no obstruction and makes no vacuum Kerr claim.

## Facts & Assumptions

**Given:** The Boyer-Lindquist KN domain and an extension sequence satisfying
the assumptions in the Statement.

[F1] [[prop-emg-xs-kn-invariants]]: the current batch-21 draft states
$\operatorname{Ric}_{ab}\operatorname{Ric}^{ab}=4q^4/\Sigma^4$ on its
specified BL domain and supplies that identity by its exact rational
calculation. That carrier is still a draft with an unaccepted proof; the
identity is used conditionally, not promoted to an established result.

[F2] [[def-emg-explicit-power-regimes]]: a positive real has a unique
positive square root.

[L1] [[def-emg-causal-solution-and-horizon-vocabulary]], Definition (e): an approached $C^2$ nondegenerate metric extension has continuous polynomial curvature contractions. A divergent contraction along the specified approaching sequence precludes that extension. No completeness or source interpretation is part of this interface.

[A1] $q\ne0$. The embedding in the Statement preserves the metric on the
original domain, and the sequence approaches $p$ while $\Sigma$ tends to
zero. The parameters and $r$ have length units; angles are dimensionless.

## Proof

1.1 By the exact current interface [F1], along the sequence
$$\operatorname{Ric}_{ab}\operatorname{Ric}^{ab}(x_n) =\frac{4q^4}{\Sigma(x_n)^4}.$$
Since $q\ne0$, the numerator is a fixed positive number and
$\Sigma(x_n)>0$ tends to zero, so these scalar values tend to $+\infty$.
Isometry makes the same scalar values those of $\widetilde g$ at
$j(x_n)$. [F1, A1, algebra]

2.1 A $C^2$ nondegenerate metric has continuous inverse coefficients and
continuous curvature coefficients: the inverse is a continuous matrix
inverse, Christoffel symbols use the first derivatives of the metric and
its inverse, and curvature uses their first derivatives and products.
Therefore the contraction $\widetilde{\operatorname{Ric}}_{ab}
\widetilde{\operatorname{Ric}}^{ab}$ is continuous near $p$ and has a finite
value there. Since $j(x_n)\to p$, continuity forces its values along
that sequence to converge to the finite value at $p$, contradicting the divergence established in the first step. Thus the proposed extension cannot contain this approached point,
conditional on [F1]. [F1, L1, step 1.1, algebra]

3.1 If $a\ne0$, then $\Sigma=r^2+a^2\cos^2\theta$ is the sum of two
nonnegative terms. Along the stated sequence, $\Sigma\to0$ forces each term
to tend to zero because $0\le r^2\le\Sigma$ and
$0\le a^2\cos^2\theta\le\Sigma$. Thus $r\to0$ and $\cos\theta\to0$.
With $0<\theta<\pi$, this gives $\theta\to\pi/2$. At the limiting
coordinate locus $r=0$, $\theta=\pi/2$ the map in the Statement gives
$X=|a|\cos\phi$, $Y=|a|\sin\phi$, and $Z=0$, hence
$X^2+Y^2=a^2$, $Z=0$. This labels the limiting locus as a ring, without
asserting the map is a chart through the disk. If $q=0$, [F1]'s invariant
is zero wherever defined, so step 1.1 supplies no divergence argument.
[F1, F2, A1, step 1.1, algebra] ∎
## Remarks

The claim is conditional on the exact invariant identity of the batch-21
draft and the current exact extension-obstruction vocabulary. It neither creates
a distributional source nor proves geodesic incompleteness. For $q=0$, a
separate Weyl-invariant argument would be needed for a vacuum Kerr claim.
