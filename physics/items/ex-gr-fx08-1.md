---
id: ex-gr-fx08-1
kind: example
title: "Wave energy and black-hole perturbation interfaces — model 1"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 5
physical_scope: "A conditional scalar mode-trace calculation of the stationary Kerr horizon flux sign; it proves no global scattering or amplification result."
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - def-countable-choice
  - def-gr-fx-kerr-horizon-mode
  - lem-gr-fx-kerr-horizon-modal-flux
dependency_roles:
  def-countable-choice: mathematical-premise
  def-gr-fx-kerr-horizon-mode: mathematical-premise
  lem-gr-fx-kerr-horizon-modal-flux: mathematical-premise
sources:
  references:
    - title: "M. Dafermos and I. Rodnianski, Lectures on black holes and linear waves, arXiv:0811.0354v1 (2008), §§5.2.1–5.2.3, PDF pp. 59–61"
      url: "https://arxiv.org/pdf/0811.0354"
    - title: "H. S. Reall, Black Holes (Part III lecture notes, 15 March 2024), §§7.3–7.4, 7.6 and 9.1, PDF pp. 94–96, 102–103 and 113–114"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/black_holes_lectures_2024.pdf"
verification:
  precheck: pass
---

## Example

Let $0<|a|<M$ and let $\Omega_H\neq0$ be the Kerr horizon angular velocity.
Choose an integer $m$ with $m\Omega_H>0$ and set
$\omega=m\Omega_H/2$. Conditional on a nonzero smooth scalar horizon mode
trace $u$ on an open mode domain $P$ with these parameters, and on a smooth
real scalar field $\psi$ defined on a neighborhood of $P$ in the regular
extension with $\psi|_P=\operatorname{Re}u$, at each point whose
full stationary integral-curve segment of length $2\pi/\omega$ remains in $P$ its
shifted horizon frequency is
$\widetilde\omega=-m\Omega_H/2<0$ and its time-averaged stationary horizon
flux density is nonpositive, is zero at trace nodes, and is strictly negative
wherever the trace is nonzero. On every compact smooth spacelike cut patch $D$
whose full stationary integral-curve segments remain in the mode domain and which meets
its nonzero set, its integrated averaged flux is
$\mathcal F_D=-(m\Omega_H)^2\int_D|u|^2d\mu_D/8<0$. This is the local mode-trace sign
calculation in the superradiant frequency range. It does not construct a
global wave solution or establish a scattering amplification factor.

## Example references

[[def-gr-fx-kerr-horizon-mode]]

[[lem-gr-fx-kerr-horizon-modal-flux]]

## Facts & Assumptions

**Given:** The Kerr parameters and a nonzero smooth mode trace with $m\Omega_H>0$ and $\omega=m\Omega_H/2$.

[F1] [[def-gr-fx-kerr-horizon-mode]]: $\widetilde\omega=\omega-m\Omega_H$ for a smooth joint mode of $T$ and $\Phi$.

[F2] [[lem-gr-fx-kerr-horizon-modal-flux]]: for a nonzero smooth mode trace with $\omega>0$, the averaged stationary horizon flux density is $\tfrac12\omega\widetilde\omega|u|^2$.

[A1] $\mathrm{AC}_\omega$ is the only choice principle inherited through the Kerr horizon definitions ([[def-countable-choice]]).

[A2] A nonzero smooth horizon mode trace with these parameters is assumed for this example, together with a smooth real scalar field $\psi$ on a neighborhood of its mode domain whose restriction is $\operatorname{Re}u$. For each compact cut patch $D$ used below, its mode domain contains the full stationary integral-curve segment of length $2\pi/\omega$ from every point of $D$; this item does not establish the trace's existence as a global solution of $\Box_g\psi=0$.

## Verification

1.1 The chosen frequency satisfies $\omega=m\Omega_H/2>0$ and $\widetilde\omega=\omega-m\Omega_H=-m\Omega_H/2<0$. [given, A1, A2, F1, algebra]

2.1 The horizon-flux identity [F2] gives $\langle Q(\chi,T)\rangle_T=\tfrac12\omega\widetilde\omega|u|^2=-(m\Omega_H)^2|u|^2/8$. This is nonpositive at every point, zero at nodes and strictly negative where $u\ne0$; being a nonzero mode does not exclude nodes. [given, A2, F2, step 1.1, algebra]

3.1 For a compact smooth spacelike cut patch $D$ whose stationary integral-curve segments remain in the mode domain and which meets the nonzero set, [F2] proves $\int_D|u|^2d\mu_D>0$ and finiteness of that integral. Integrating step 2.1 therefore gives $\mathcal F_D=-(m\Omega_H)^2\int_D|u|^2d\mu_D/8<0$. At any nonzero mode point whose full period integral-curve segment remains in the mode domain, such a sufficiently small patch is supplied by the local cut construction in [F2]. The conclusion remains conditional on the given trace, without a global wave or scattering existence claim. [given, A2, F2, step 2.1, algebra] ∎
