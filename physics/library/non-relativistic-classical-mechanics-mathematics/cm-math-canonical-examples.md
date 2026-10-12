---
page: cm-math-canonical-examples
title: Cm Math Canonical — Examples
status: draft
items: []
examples:
  - ex-cm-free-particle-hamilton-jacobi-complete-integral
  - ex-cm-linear-shear-generating-function
  - ex-cm-cylinder-shift-obstruction-checks
  - ex-cm-flow-derivative-of-the-isotropic-oscillator
requires:
  - cm-math-canonical
---

The companion page to [[cm-math-canonical]] records explicit worked checks for
its canonical-calculus and Hamilton-Jacobi results. Everything here is
mathematics: the examples carry `domain: mathematics`, depend only on the
mathematical items of the parent page and on mathematical suppliers, and make
no physical or empirical claim.

[[ex-cm-free-particle-hamilton-jacobi-complete-integral]] checks the free
particle Hamiltonian $H=p^2/(2m)$: the family
$S=q\alpha-t\alpha^2/(2m)$ solves the Hamilton-Jacobi equation, has
$S_{q\alpha}=1$, produces the characteristics $q(t)=\beta+t\alpha/m$ with
momentum $p=\alpha$, and satisfies $dq\wedge dp=d\beta\wedge d\alpha$.
[[ex-cm-linear-shear-generating-function]] takes the second-kind
$S(q,P)=qP+\lambda q^2/2$, generates the shear $(q,p)\mapsto(q,p-\lambda q)$,
and verifies the matrix test $D\Psi^{\mathsf T}J\,D\Psi=J$ by direct
multiplication. [[ex-cm-cylinder-shift-obstruction-checks]] specialises the
cylinder-shift proposition to $a=1$: it records the loop integral $1$ that
makes $d\theta_C$ non-exact, the generating function
$S=\theta P-\theta$ on a chart, and the global failure of any single-valued
generating function. [[ex-cm-flow-derivative-of-the-isotropic-oscillator]]
computes the flow of $X_H$ for $H=(p^2+q^2)/2$, differentiates it to
verify $Y'=J\,\mathrm{Hess}\,H\,Y$, and checks $Y^{\mathsf T}JY=J$ and
$\det Y=1$ explicitly.
