---
id: prop-emg-xs-kn-invariants
kind: proposition
title: Kerr-Newman Maxwell and Ricci invariants
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - lem-emg-xs-kn-rational-calculus
  - def-emg-causal-solution-and-horizon-vocabulary
dependency_roles:
  lem-emg-xs-kn-rational-calculus: mathematical-premise
  def-emg-causal-solution-and-horizon-vocabulary: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Sections 2.1-2.2, printed pp. 4-11 (PDF pp. 5-12): KN metric and Maxwell field"
    - title: S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, equations (7.114)-(7.116), printed p. 207 (PDF p. 214): rotating metric; equation (7.129), printed p. 210 (PDF p. 217): excluded ring locus"
physical_scope: null
---


## Statement

For the electric Kerr-Newman datum with real parameters $M,a,q$ on
$\Sigma>0$, $\Delta\ne0$, $0<\theta<\pi$, its scalar curvature is zero and
$$\mathcal F_{ab}\mathcal F^{ab} =-\frac{2q^2(r^4-6a^2r^2\cos^2\theta+a^4\cos^4\theta)}{\Sigma^4}, \qquad \operatorname{Ric}_{ab}\operatorname{Ric}^{ab}=\frac{4q^4}{\Sigma^4}.$$
If $q\ne0$, the Ricci-square diverges as $\Sigma\to0$; hence no $C^2$
nondegenerate metric extension can add a point approached with $\Sigma\to0$.
When $a\ne0$, the excluded set $r=0,\theta=\pi/2$ maps under the oblate
coordinate map to the ring $X^2+Y^2=a^2,\ Z=0$. If $q=0$, these charged
invariants give no obstruction; no vacuum Kerr Weyl-singularity claim is
made.

## Facts & Assumptions

**Given:** The exact KN datum with $\Sigma>0$ and $\Delta\ne0$.

[F1] [[lem-emg-xs-kn-rational-calculus]]: the exact rational calculation
returns scalar curvature zero, Ricci-square $4q^4/\Sigma^4$, and the displayed
Maxwell scalar.

[F2] [[def-emg-causal-solution-and-horizon-vocabulary]] clause (e): a
$C^2$ nondegenerate extension is an isometric smooth open embedding into a
four-manifold with a $C^2$ Lorentz metric of the same signature; an approached
added point is a limit $j(x_n)\to p\notin j(U)$. An unbounded polynomial
complete curvature contraction along that sequence obstructs the approach.

[A1] $q\ne0$. For the obstruction claim, take any sequence $x_n$ in the
stated KN chart domain with $\Sigma(x_n)\to0$ and test whether an extension
realizes that approach.

## Proof

1.1 The coordinate entries and inverse in [F1] give the exact contraction
$\mathcal F_{ab}\mathcal F^{ab}=2(B_m^2-E^2)$ with the algebraic abbreviations
$$E=\frac{q(r^2-a^2y^2)}{\Sigma^2},\qquad B_m=\frac{2qar y}{\Sigma^2},\qquad y=\cos\theta.$$
Expanding
$(r^2-a^2y^2)^2-4a^2r^2y^2
=r^4-6a^2r^2y^2+a^4y^4$
gives the field scalar in [F1]. The same exact rational output gives $S=0$
and $\operatorname{Ric}_{ab}\operatorname{Ric}^{ab}=4q^4/\Sigma^4$.
[F1, algebra]

1.2 Under [A1], $4q^4/\Sigma(x_n)^4\to+\infty$. Suppose, for contradiction,
that a $C^2$ nondegenerate extension $(\widetilde M,\widetilde g,j)$ and an
added point $p\notin j(U)$ realize this approach, so $j(x_n)\to p$ as in
[F2]. The diverging Ricci-square is a polynomial complete curvature
contraction from [F1], contradicting [F2]. If $q=0$, the displayed
Ricci-square vanishes and this argument gives no obstruction. [A1, F1, F2,
algebra]

2.1 For $a\ne0$, define
$$X=\sqrt{r^2+a^2}\sin\theta\cos\phi,\quad Y=\sqrt{r^2+a^2}\sin\theta\sin\phi,\quad Z=r\cos\theta.$$
At $r=0$, $\theta=\pi/2$, these satisfy $X^2+Y^2=a^2$ and $Z=0$, the ring.
This map labels the excluded locus only; it is not asserted to be an injective
coordinate chart through the disk. [A1, algebra] ∎

## Remarks

No regular charged source on the ring, maximal extension, or global
singularity theorem follows from this invariant calculation.

