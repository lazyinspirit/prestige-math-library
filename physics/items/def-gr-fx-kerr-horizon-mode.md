---
id: def-gr-fx-kerr-horizon-mode
kind: definition
title: "Kerr horizon mode and shifted horizon frequency"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
physical_scope: "A local mathematical definition of a scalar mode trace on a regular subextremal Kerr future horizon; it asserts no global wave solution, scattering state, or amplification."
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-countable-choice
  - def-gr-fx-kerr-exterior
  - prop-gr-fx-kerr-horizon-generator
dependency_roles:
  def-countable-choice: mathematical-premise
  def-gr-fx-kerr-exterior: mathematical-premise
  prop-gr-fx-kerr-horizon-generator: mathematical-premise
sources:
  references:
    - title: "M. Dafermos and I. Rodnianski, Lectures on black holes and linear waves, arXiv:0811.0354v1 (2008), §§5.1 and 5.2.1–5.2.3, PDF pp. 56–61"
      url: "https://arxiv.org/pdf/0811.0354"
    - title: "H. S. Reall, Black Holes (Part III lecture notes, 15 March 2024), §§7.3–7.4 and 9.1, PDF pp. 94–96 and 113–114"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/black_holes_lectures_2024.pdf"
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Definition

Assume $\mathrm{AC}_\omega$. Let $M>0$, $0<|a|<M$, and use the length
coordinates of the subextremal Kerr datum. Use the smooth ingoing extension
with its proved compatible time orientation
$\overline N=\partial_v-(2Mr/\Sigma)\partial_r$ from
[[prop-gr-fx-kerr-horizon-generator]]. Set
$H^+:=\{r=r_+\}$ and let $P\subset H^+$ be a smooth open patch in the
hypersurface topology. Let $T$ and $\Phi$ be the stationary and axial Killing
fields restricted to $P$, and let
$\chi:=T+\Omega_H\Phi$ with
$\Omega_H:=a/(r_+^2+a^2)$ be the future null generator there; the supplier
proves $g(\chi,\overline N)=-1$ on $H^+$. A smooth
complex scalar $u\in C^\infty(P,\mathbb C)$ is an $(\omega,m)$ **horizon
mode** when $\omega\in\mathbb R$, $m\in\mathbb Z$, and

$$Tu=-i\omega u,\qquad \Phi u=im u.$$

Its **shifted horizon frequency** is
$\widetilde\omega:=\omega-m\Omega_H$. By linearity of $\chi$, every such
mode satisfies $\chi u=-i\widetilde\omega u$. The parameter $\omega$ has
units reciprocal to the Kerr time coordinate, $m$ is dimensionless, and
$\Omega_H$ has the same units as $\omega$. This is a local definition of
mode data only; it does not assert that a nonzero mode extends to a global
solution of the wave equation.

## Definition references

[[def-countable-choice]]

[[def-gr-fx-kerr-exterior]]

[[prop-gr-fx-kerr-horizon-generator]]
