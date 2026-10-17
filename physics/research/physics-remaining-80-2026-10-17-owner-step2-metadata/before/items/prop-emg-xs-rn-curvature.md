---
id: prop-emg-xs-rn-curvature
kind: proposition
title: RN curvature invariants and the C2 extension obstruction
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 7
deps:
  - lem-emg-xs-rn-tensor-identities
  - def-emg-causal-solution-and-horizon-vocabulary
dependency_roles:
  lem-emg-xs-rn-tensor-identities: mathematical-premise
  def-emg-causal-solution-and-horizon-vocabulary: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, equations (7.106)-(7.112), printed pp. 201-202 (PDF pp. 207-208): the RN source-free equations and two-form"
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Section 2.1-2.2, printed pp. 4-11 (PDF pp. 5-12): RN seed and exact electrovac verification"
physical_scope: null
---


## Statement

On the dyonic RN datum with real length parameters $M,q_e,q_m$, let
$Q^2=q_e^2+q_m^2$ and $r>0$, $f(r)\ne0$. Then the scalar curvature is
$S=0$, while
$$\operatorname{Ric}_{ab}\operatorname{Ric}^{ab}=\frac{4Q^4}{r^8},\qquad R_{abcd}R^{abcd}=\frac{48M^2}{r^6}-\frac{96MQ^2}{r^7}+\frac{56Q^4}{r^8}.$$
If $Q\ne0$, the Ricci-square diverges as $r\downarrow0$; if $Q=0$ and
$M\ne0$, the Kretschmann scalar diverges there. Consequently no $C^2$
nondegenerate metric extension can add an approached $r=0$ point in either
case. For $M=Q=0$ the metric is flat and these invariants give no obstruction.
No distributional source at $r=0$ is asserted.

## Facts & Assumptions

**Given:** The RN datum on a positive-radius open set excluding the roots of $f$.

[F1] [[lem-emg-xs-rn-tensor-identities]]: $S=0$,
$\operatorname{Ric}_{ab}\operatorname{Ric}^{ab}=4Q^4/r^8$, and
$R_{abcd}R^{abcd}=48M^2/r^6-96MQ^2/r^7+56Q^4/r^8$.

[F2] [[def-emg-causal-solution-and-horizon-vocabulary]] clause (e): a
$C^2$ nondegenerate extension is an isometric smooth open embedding into a
four-manifold with a $C^2$ Lorentz metric of the same signature; an approached
added point is a limit $j(x_n)\to p\notin j(U)$. An unbounded polynomial
complete curvature contraction along that sequence obstructs the approach.


[A1] $r>0$, $M,q_e,q_m\in\mathbb R$. For the obstruction claim, take any
sequence $x_n$ in the stated RN model domain with $r(x_n)\downarrow0$ and test
whether an extension realizes that approach.

## Proof


1.1 The scalar curvature and both polynomial invariants are the exact identities in [F1]. If $Q\ne0$, then $4Q^4/r^8\to+\infty$ as $r\downarrow0$; if $Q=0$ and $M\ne0$, then $48M^2/r^6\to+\infty$. [F1, A1, algebra]

2.1 If $M=Q=0$, then $f=1$ and the metric is the flat product metric while $\mathcal F=0$; the displayed invariants vanish. This is the remaining parameter case, so the divergence alternatives in step 1.1 are exhaustive. [A1, step 1.1, algebra]

3.1 Suppose, for contradiction, that a $C^2$ nondegenerate extension $(\widetilde M,\widetilde g,j)$ and an added point $p\notin j(U)$ realize the approach of a sequence from [A1], so $j(x_n)\to p$. This is exactly the setup in [F2]. By step 1.1 one of the two polynomial complete curvature contractions diverges along that sequence in the corresponding charge case, contradicting the obstruction criterion in [F2]. Hence no such extension realizes the approach. This does not create a point source or assert geodesic incompleteness. [F2, step 1.1, A1, algebra] ∎

## Remarks

The domain excludes $f=0$. This proposition makes no claim about extensions
across a coordinate root, maximality, horizons, or any physical realization.

