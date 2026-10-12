---
page: qm-math-intervals-and-contacts-examples
title: Qm Math Intervals And Contacts — Examples
status: draft
items: []
requires:
  - qm-math-intervals-and-contacts
  - qm-math-oscillator
examples:
  - ex-nrqm-intervals-contacts-dirichlet-momentum-failure
  - ex-nrqm-intervals-contacts-separated-box-degeneracy
  - ex-nrqm-intervals-contacts-attractive-contact-energy
---

The companion page to [[qm-math-intervals-and-contacts]] records three
explicit mathematical checks behind its boundary, degeneracy and contact
results. All three items are mathematics: they carry `domain: mathematics`,
depend only on the items of the parent page and on mathematical suppliers, and
make no physical or empirical claim.

[[ex-nrqm-intervals-contacts-dirichlet-momentum-failure]] exhibits the failure
of the Dirichlet problem for a first-order operator: on $L^2(0,L)$ the
operator $T=-iD$ with $D(T)=\{u\in H^1:u^*(0)=u^*(L)=0\}$ is densely defined
and symmetric but not self-adjoint, its adjoint is $-iD$ on all of
$H^1(0,L)$ with no boundary condition, its deficiency vectors are
$e^{\mp x}$, and the self-adjoint extensions of $T$ are exactly the
twisted-periodic operators $P_\theta$ of the parent page; no extension keeps
the two Dirichlet conditions.

[[ex-nrqm-intervals-contacts-separated-box-degeneracy]] separates variables on
the square $(0,L)^2$: the products
$e_{nm}(x,y)=\frac2L\sin(n\pi x/L)\sin(m\pi y/L)$ form a complete orthonormal
family, the diagonal operator with eigenvalues
$\mu_{nm}=\pi^2(n^2+m^2)/L^2$ is self-adjoint, and the level
$5\pi^2/L^2$ has the exactly two-dimensional eigenspace
$\mathbb Ce_{12}\oplus\mathbb Ce_{21}$. The degeneracy comes precisely from the
separated product structure, in contrast with the simple one-dimensional
Robin spectrum of the parent page.

[[ex-nrqm-intervals-contacts-attractive-contact-energy]] verifies the contact
bound state concretely: for $\alpha=-1$ the normalised
$\psi(x)=2^{-1/2}e^{-|x|/2}$ lies in the domain of $A_{-1}$, satisfies the
interface condition, and obeys $A_{-1}\psi=-\frac14\psi$; the general
statement, the uniqueness of the negative eigenvalue and the conditional
scaling $E_H=-mg^2/(2\hbar^2)$ are those of the parent page.

