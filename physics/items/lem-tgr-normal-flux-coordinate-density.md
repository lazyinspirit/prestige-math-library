---
id: lem-tgr-normal-flux-coordinate-density
kind: lemma
title: "Normal slice charge equals its coordinate density integral"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-countable-choice
  - def-tgr-spacelike-current-slab
dependency_roles:
  def-countable-choice: mathematical-premise
  def-tgr-spacelike-current-slab: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Harvey Reall, Part III General Relativity, University of Cambridge lecture notes, 12 October 2022, §8.7, printed pp. 109–111 (PDF pp. 110–112)"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      locator: "The non-null face flux formula identifies current flux with its unit-normal component times the induced metric volume density. The local block-matrix calculation here supplies the spacelike coordinate-slice specialization."
    - title: "David Tong, General Relativity, University of Cambridge Part III Mathematical Tripos lecture notes, Michaelmas Term 2019, §3.2.4, printed pp. 110–112 (PDF pp. 117–119)"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
      locator: "The divergence-theorem boundary expression uses the induced hypersurface metric density and unit normal. The exact coordinate lapse relation is proved locally here."
---

## Statement

Assume the $\mathrm{AC}_\omega$ convention and the spacelike slab data of
[[def-tgr-spacelike-current-slab]]. For every slice $\Sigma_t$ and every
$C^1$ current $J$ in that definition, its normal flux charge is
$$Q_J(t)=\int_\Omega wJ^0\,d^3x,$$
where $w=\sqrt{|\det(g_{ab})|}$ is the metric density in the supplied chart.

## Facts & Assumptions

**Given:** The coordinate box $K$, positive-definite spatial block
$h_{ij}$, $g^{00}<0$, scalar $\alpha=(-g^{00})^{-1/2}$, future unit normal
$n_a=-\alpha\delta_a^0$, and charge
$Q_J(t)=\int_\Omega -g(J,n)\sqrt{\det h}\,d^3x$.

[A1] The smooth Lorentzian geometry uses the $\mathrm{AC}_\omega$ convention
recorded in [[def-countable-choice]] and
[[def-tgr-spacelike-current-slab]].

[F1] The supplied definition gives $h=(g_{ij})$ positive definite,
$g^{00}<0$, $n_a=-\alpha\delta_a^0$ and the normal-flux definition of
$Q_J(t)$ ([[def-tgr-spacelike-current-slab]]).

## Proof


**Proof technique:** direct block determinant and inverse-matrix calculation.

1.1 In the coordinate basis write the metric matrix as $$G=\begin{pmatrix}g_{00}&b^{\mathsf T}\\ b&h\end{pmatrix},$$ where $b_i=g_{i0}$. Since $h$ is positive definite it is invertible. Subtract $b^{\mathsf T}h^{-1}$ times the lower block rows from the first row; this determinant-preserving operation gives $$\det G=\det(h)\,S,\qquad S:=g_{00}-b^{\mathsf T}h^{-1}b.$$ To identify the inverse entry, solve $Gz=e_0$: the lower equations give $z_{\rm sp}=-h^{-1}bz_0$, and the first equation then gives $Sz_0=1$. Therefore $g^{00}=z_0=S^{-1}$, so $S<0$ by [F1]. [A1, F1, algebra]

2.1 From $S=(g^{00})^{-1}<0$ and the definition of $\alpha$, $\alpha=\sqrt{-S}$. As $\det h>0$, step 1.1 yields $$w=\sqrt{|\det G|}=\sqrt{\det h}\sqrt{-S} =\alpha\sqrt{\det h}.$$ [step 1.1, F1, algebra]

3.1 Lowering the index of $n$ gives $n_a=-\alpha\delta_a^0$ by [F1], hence $-g(J,n)=-J^an_a=\alpha J^0$. Substitute step 2.1 into the defining integrand of $Q_J(t)$ to obtain $$-g(J,n)\sqrt{\det h}=\alpha J^0\sqrt{\det h}=wJ^0.$$ Integrating over $\Omega$ proves the statement. [step 2.1, F1, algebra] ∎

## Remarks

The calculation is restricted to the supplied spacelike coordinate slices.
It makes no assertion that the coordinate component $J^0$ alone is invariant
or that charges from different slicings agree.
