---
page: qm-math-orbital-and-spin-examples
title: Qm Math Orbital And Spin — Examples
status: draft
items: []
requires:
  - qm-math-orbital-and-spin
  - qm-math-composites
examples:
  - ex-nrqm-orbital-and-spin-example-spin-singlet-chsh
  - ex-nrqm-orbital-and-spin-example-coupled-triplet-and-singlet
  - ex-nrqm-orbital-and-spin-example-orbital-core-commutators
---

The companion page to [[qm-math-orbital-and-spin]] records three explicit
finite-dimensional checks behind its spin and orbital results. All three items
are mathematics: they carry `domain: mathematics`, depend only on the items of
the parent page and on mathematical suppliers, and make no physical or
empirical claim.

[[ex-nrqm-orbital-and-spin-example-spin-singlet-chsh]] computes the singlet
correlations through [[prop-nrqm-orbital-and-spin-finite-spin-matrices]] and
[[thm-nrqm-orbital-and-spin-tsirelson-bound]]: for
$\Psi=(e_+\otimes e_--e_-\otimes e_+)/\sqrt2$ one has
$\langle(\sigma_i\otimes\sigma_j)\Psi,\Psi\rangle=-\delta_{ij}$, hence
$\langle(\sigma_a\otimes\sigma_b)\Psi,\Psi\rangle=-a\cdot b$ for unit
$a,b\in\mathbb R^3$; with the planar settings $a_0=e_1$, $a_1=e_2$,
$b_0=(e_1+e_2)/\sqrt2$, $b_1=(e_1-e_2)/\sqrt2$ the CHSH combination of the
four correlations equals $-2\sqrt2$, attaining the bound, and since
$2\sqrt2>2$ these four numbers admit no common-outcome $\pm1$ realization by
the CHSH inequality for that explicitly specified model.

[[ex-nrqm-orbital-and-spin-example-coupled-triplet-and-singlet]] writes out
the $\frac12\otimes\frac12$ Clebsch-Gordan basis:
$e_+\otimes e_+$, $(e_+\otimes e_-+e_-\otimes e_+)/\sqrt2$, $e_-\otimes e_-$
span the triplet with $J^{\mathrm{tot}}_z$-weights $1,0,-1$ and
$J^{\mathrm{tot}\,2}=2$, the singlet $(e_+\otimes e_--e_-\otimes
e_+)/\sqrt2$ is annihilated by all three $J^{\mathrm{tot}}_i$, the four
vectors form an orthonormal basis, and the ladders
$J^{\mathrm{tot}}_+w_{1,1}=0$, $J^{\mathrm{tot}}_+w_{1,0}=\sqrt2w_{1,1}$,
$J^{\mathrm{tot}}_+w_{1,-1}=\sqrt2w_{1,0}$ realize the spin-$1$ model on the
triplet, matching the decomposition
$V\otimes V=W_1\oplus W_0$ of
[[thm-nrqm-orbital-and-spin-tensor-spin-composition]].

[[ex-nrqm-orbital-and-spin-example-orbital-core-commutators]] verifies on
the three-dimensional block $V_1$ of
[[thm-nrqm-orbital-and-spin-orbital-self-adjoint-generators]] that the
normalized coordinate harmonics $v_m=Y_{1,m}$ satisfy $L_3v_m=\hbar
mv_m$, $L_+v_1=0$, $L_+v_0=\sqrt2\hbar v_1$, $L_+v_{-1}=\sqrt2\hbar v_0$,
$[L_1,L_2]=i\hbar L_3$ and $L_1^2+L_2^2+L_3^2=2\hbar^2$ on $V_1$ (the last
equalling $\hbar^2A$ there, with $A|_{V_1}=2\,\mathrm{id}$ by
[[thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain]]), and that
$e_m\mapsto v_m$ is a unitary equivalence of the orbital degree-one block
with the spin-$1$ model of
[[prop-nrqm-orbital-and-spin-finite-spin-matrices]].

All three are finite matrix computations inside two- or three-dimensional
spaces; none of them turns these mathematical identities into a statement
about nature.
