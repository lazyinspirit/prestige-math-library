---
page: qm-math-controlled-dynamics-examples
title: Qm Math Controlled Dynamics — Examples
status: published
items: []
requires:
  - qm-math-controlled-dynamics
  - qm-math-orbital-and-spin
  - complex-lp-spaces-and-test-function-conventions
examples:
  - ex-nrqm-controlled-dynamics-gap-closing-failure
  - ex-nrqm-controlled-dynamics-continuum-contribution-in-perturbation
  - ex-nrqm-controlled-dynamics-long-time-rwa-limitation
---

The companion page to [[qm-math-controlled-dynamics]] records three explicit
mathematical checks on its approximation theory. All three items are
mathematics: they carry `domain: mathematics`, depend only on the parent page
and mathematical suppliers, and make no physical or empirical claim.

[[ex-nrqm-controlled-dynamics-gap-closing-failure]] exhibits the two-level
family $H(s)=s\sigma_z$ whose gap closes at $s=0$: the eigenprojection branch is
discontinuous and the adiabatic tracking conclusion fails with norm $1$ for
every slow-time parameter, showing that the uniform-gap hypothesis in
[[thm-nrqm-controlled-dynamics-finite-gapped-adiabatic-estimate]] cannot be
dropped.

[[ex-nrqm-controlled-dynamics-continuum-contribution-in-perturbation]] computes
the second-order perturbation coefficient of a model whose unperturbed spectrum
is an isolated simple eigenvalue plus a continuous band, obtaining a strictly
negative shift produced entirely by the continuous part; a bound-state-only sum
would return $0$, so
[[thm-nrqm-controlled-dynamics-simple-level-reduced-resolvent-coefficients]]
must include all complementary spectral components.

[[ex-nrqm-controlled-dynamics-long-time-rwa-limitation]] evaluates the
rotating-wave error exactly for $A=B=\sigma_z$, $\omega=1$ and finds
$2|\sin(\sin t)|$, which returns the fixed positive value $2|\sin 1|$ at
$t=\pi/2+2\pi n$, proving nondecay in that fixed commuting case. Its separate
noncommuting family has $A_n=0$, fixed $\omega>0$ and
$\|B_n\|/\omega\to0$, yet its propagator error equals $2$ at
$\tau_n=2\pi n/\omega$. That family proves that the finite-time estimate of
[[thm-nrqm-controlled-dynamics-rotating-wave-finite-time-error]] cannot be
replaced by a general uniform-in-time bound tending to zero with
$\|B\|/\omega$.
