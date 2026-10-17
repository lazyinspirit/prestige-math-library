---
id: lem-emg-gauss-finite-chain
kind: lemma
title: "Gauss charge and finite-chain flux balance"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
deps:
  - def-countable-choice
  - def-emg-lorentzian-forms
  - def-gr-metric-volume-form-and-current-flux
  - lem-emg-maxwell-current-forms
  - thm-gr-density-divergence-and-finite-chain-flux
  - thm-stokes-theorem-for-smooth-singular-chains
dependency_roles:
  def-countable-choice: mathematical-premise
  def-emg-lorentzian-forms: mathematical-premise
  def-gr-metric-volume-form-and-current-flux: mathematical-premise
  lem-emg-maxwell-current-forms: mathematical-premise
  thm-gr-density-divergence-and-finite-chain-flux: mathematical-premise
  thm-stokes-theorem-for-smooth-singular-chains: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes, section 3.2.5"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S3.html"
      locator: "Section 3.2.5, electric charge, the sourced form equation, Stokes flux formula (3.115), and charge change through a timelike side boundary."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
      locator: "Chapter 1, equations (1.91)–(1.94), closure, Hodge-form Maxwell equation and duality; chapter 4, equations (4.24)–(4.29), curved-spacetime form equations."
---

## Statement

Let $(M,g,N,o)$ be the smooth oriented and time-oriented Lorentzian
four-manifold of [[def-emg-lorentzian-forms]], let
$F\in\Omega^2(M)$ and $j\in\Gamma(TM)$ be smooth, and fix constants
$c,\mu_0>0$. Assume
$dF=0$ and $\nabla_aF^{ab}=-\mu_0j^b$, equivalently
$d(\star_gF)=\mu_0\iota_j\mathrm{vol}_g$ by
[[lem-emg-maxwell-current-forms]]. A finite smooth singular $k$-chain means
a finite formal real linear combination of smooth singular $k$-simplices,
with the boundary operation of
[[def-gr-metric-volume-form-and-current-flux]] and
[[thm-stokes-theorem-for-smooth-singular-chains]].

For a finite smooth singular three-chain $\Sigma$, define its charge by

$$Q(\Sigma):=\frac1c\int_\Sigma\iota_j\mathrm{vol}_g.$$

Then:

**(a) Gauss charge formula.** For every such $\Sigma$,

$$Q(\Sigma)=\frac{1}{\mu_0c}\int_{\partial\Sigma}\star_gF.$$

Consequently, if $\partial\Sigma=0$, then $Q(\Sigma)=0$. This is the
compact-cycle neutrality constraint for a smooth everywhere-defined sourced
field.

**(b) Bounding-surface restriction.** For every finite smooth singular
three-chain $V$, the magnetic flux through its boundary vanishes:

$$\int_{\partial V}F=0.$$

The equation $dF=0$ does not imply that the flux through every closed
two-cycle is zero; this item gives a zero-flux conclusion only when the cycle
is the boundary of a finite smooth chain in the field domain. Likewise, the
electric flux formula in (a) identifies charge with flux only for a bounding
surface.

**(c) Charge balance.** If a finite smooth singular four-chain $C$ satisfies
$\partial C=\Sigma_2-\Sigma_1+B$ for three-chains
$\Sigma_1,\Sigma_2,B$, then

$$Q(\Sigma_2)-Q(\Sigma_1)=-Q(B).$$

Equal charge on the two slices therefore requires zero net side flux. No
asymptotic charge or flux at infinity is asserted; noncompact limits require
separate convergence and boundary-flux hypotheses.

## Facts & Assumptions

**Given:** A smooth oriented Lorentzian four-manifold, smooth $F$ and $j$,
positive constants $c,\mu_0$, the two Maxwell equations in the Statement,
and finite smooth singular chains of the indicated degrees.

[F1] [[lem-emg-maxwell-current-forms]] proves
$d(\star_gF)=\mu_0\iota_j\mathrm{vol}_g$ and
$\nabla_aj^a=0$ from the displayed sourced equation. These are conditional
mathematical consequences of the specified equation.

[F2] A smooth singular $k$-simplex extends smoothly to a neighbourhood of the
standard simplex, chains are finite formal sums with signed face boundary,
and for every such chain $c$ and smooth form $\omega$,
$\int_c d\omega=\int_{\partial c}\omega$
([[def-gr-metric-volume-form-and-current-flux]],
[[thm-stokes-theorem-for-smooth-singular-chains]]).

[F3] The flux of a smooth current $j$ through a three-chain is
$\Phi_j(\Sigma)=\int_\Sigma\iota_j\mathrm{vol}_g$ and for a finite
four-chain $C$,
$\Phi_j(\partial C)=\int_C(\nabla_aj^a)\mathrm{vol}_g$
([[def-gr-metric-volume-form-and-current-flux]],
[[thm-gr-density-divergence-and-finite-chain-flux]]).

[F4] The inherited smooth tangent-bundle conventions use
$\mathrm{AC}_\omega$, whose exact statement is that every countable family of
nonempty sets has a choice function ([[def-countable-choice]]). The finite
chain and integration arguments add no further choice.

[A1] The equations $dF=0$ and
$\nabla_aF^{ab}=-\mu_0j^b$ are hypotheses on the entire chain domain.
$F,j$ are smooth there; no distributional, punctured-source, limiting-at-
infinity or empirical premise is assumed.

## Proof

**Given:** [F1]–[F4] and [A1].

1.1 By [F1], $d(\star_gF)=\mu_0\iota_j\mathrm{vol}_g$. Integrate this
three-form over the finite smooth singular three-chain $\Sigma$. By [F2],
$\int_\Sigma d(\star_gF)=\int_{\partial\Sigma}\star_gF$, so
$\mu_0\int_\Sigma\iota_j\mathrm{vol}_g=\int_{\partial\Sigma}\star_gF$.
Divide by $\mu_0c>0$ and use the definition of $Q$ to obtain (a)'s formula.
The chain $\Sigma$ was fixed arbitrarily, and no family of chains is selected,
as [F4] records. [F1, F2, F4, given, algebra]

1.2 Let $V$ be a finite smooth singular three-chain. Apply [F2] to the
two-form $F$ on $V$ and use [A1]:
$\int_{\partial V}F=\int_VdF=0$. This proves (b) for bounding surfaces;
the argument supplies no primitive or flux statement for a nonbounding
cycle. [given, F2, A1, algebra]

2.1 If $\partial\Sigma=0$, the right side of step 1.1 is the integral over
the zero two-chain, which is zero by finite additivity in [F2]. Hence
$Q(\Sigma)=0$. This conclusion uses a cycle, not merely a closed surface
whose homology class is unspecified. [given, step 1.1, F2, algebra]

3.1 For the four-chain $C$, [F1] gives $\nabla_aj^a=0$ throughout its domain.
By [F3],
$\Phi_j(\partial C)=\int_C(\nabla_aj^a)\mathrm{vol}_g=0$. Additivity of
the finite-chain integral and
$\partial C=\Sigma_2-\Sigma_1+B$ give
$\Phi_j(\Sigma_2)-\Phi_j(\Sigma_1)+\Phi_j(B)=0$. Divide by $c>0$ and apply
the definition of $Q$ to obtain (c). The proof integrates only finite smooth
chains, so no boundary-at-infinity term is present. [given, F1, F3, algebra] ∎

## Remarks

The finite-chain hypotheses are essential to the stated argument. On a
noncompact spatial domain, charge conservation requires specified convergence
of slice integrals and an explicit treatment of limiting side flux; neither
follows from the local differential equation alone.
