---
page: qm-math-coulomb-examples
title: Qm Math Coulomb — Examples
status: draft
items: []
requires:
  - qm-math-coulomb
  - qm-math-orbital-and-spin
  - qm-math-composites
examples:
  - ex-nrqm-coulomb-hydrogen-ground-normalization
  - ex-nrqm-coulomb-no-full-discrete-eigenbasis
  - ex-nrqm-coulomb-relative-versus-total-bound-state
---

The companion page to [[qm-math-coulomb]] records three explicit mathematical
checks behind its normalisation, completeness and two-body results. All three
items are mathematics: they carry `domain: mathematics`, depend only on the
items of the parent page and on mathematical suppliers, and make no physical
or empirical claim.

[[ex-nrqm-coulomb-hydrogen-ground-normalization]] re-verifies by elementary
one-variable integration that $(\gamma^3/8\pi)^{1/2}e^{-r/a_0}$ has unit
$L^2$ norm, that it is an eigenvector of $C$ with eigenvalue $-\gamma^2/4$ by
direct differentiation of $e^{-r/a_0}$, and that the radial law
$4r^2a_0^{-3}e^{-2r/a_0}$ integrates to $1$ with mean $3a_0/2$; the constants
agree with the $L_0^{(1)}=1$ special case of the general Laguerre solution.

[[ex-nrqm-coulomb-no-full-discrete-eigenbasis]] exhibits a concrete vector
$\psi=g(r)Y_{00}(\Omega)/r$, with $g$ compactly supported and
$\int\varphi_0(1,r)g(r)dr=1$, whose spectral measure has positive mass on
$(0,\infty)$ by the explicit density of the parent page; hence the bound
states alone do not span $L^2(\mathbb R^3)$ and the nonnegative continuous
spectral projection is indispensable.

[[ex-nrqm-coulomb-relative-versus-total-bound-state]] compares the relative
and total operators: the product vector $\varphi\otimes u_1$ of a
centre-of-mass test function with the relative ground state satisfies
$(T_R\otimes I+I\otimes C_\mu)\Psi=E_1\Psi+(T_R\varphi)\otimes u_1$, so it is
not an eigenvector and its energy lies strictly above the bottom $E_1$ of the
two-body spectrum; the relative bound energy is a threshold of the total
continuous spectrum, not an eigenvalue.
