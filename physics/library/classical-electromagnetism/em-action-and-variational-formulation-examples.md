---
page: em-action-and-variational-formulation-examples
title: "Alternative action formulation — Examples"
status: draft
items: []
examples: [ex-em-stationary-not-minimum,
           ex-em-compact-variation-example]
---

**Objective.** The companion collects two exact computations inside the
smooth finite-region action model of the A page: the saddle witness that
separates stationarity from minimality, and the explicit compact variation
and gauge-source sign checks on the box region. Both are computations in the
declared model, not claims about physical fields, measurements or existence.

**Stationary does not mean minimal.** On the coordinate box $U=(-1,1)^4$ with
no source, the example computes the physical form
$\tfrac12\int_{U_t}(\varepsilon_0|E|^2-|B|^2/\mu_0)dt\,d^3x$ of the action,
shows that $A=0$ is stationary, exhibits a compact variation with
$E=c\nabla_x\theta$, $B=0$ and strictly positive action, and exhibits a
fixed-support family $h^{(N)}$ with exact norms $\int|E|^2/c^2\,d\lambda=C_E/N$
and $\int|B|^2d\lambda=C_BN+C_3/N$, $C_B>0$, whose action
$(2c\mu_0)^{-1}\bigl((C_E-C_3)/N-C_BN\bigr)$ becomes negative for one
sufficiently large $N$ ([[ex-em-stationary-not-minimum]]). Rescalings of the
two fixed directions keep their signs and have arbitrarily small magnitude,
and they tend to zero in the usual fixed-support and LF test-function
topologies; hence every usual neighbourhood of zero contains configurations
of both signs of the action, and the stationary zero is neither a local
minimum nor a local maximum. The source treatment that ties the sign of the
quadratic term to a minimum requirement is therefore not adopted with the
framework's normalisation.

**Compact variation and gauge-source sign.** On the same box, the example
verifies that the source-free zero field and the constant-field potential
$A_0=x^1$ are stationary, the latter with the boundary-free cancellation of
its first variation computed by the one-variable fundamental theorem and
Fubini ([[ex-em-compact-variation-example]]). For the signed source model
$j^0=c\rho(x^0)$, $j^i=0$ with a nonzero nonnegative compact bump $\rho$ and
locally monotone compact gauge cutoffs $\varphi_\pm=(2\pm u)\zeta$ with
$\zeta=1$ on the source support, the exact gauge difference is
$\pm(\int\rho)(\int\psi)$, strictly of both signs, and the integration-by-parts
form reproduces the same value; a source that is constant on the whole
neighbourhood is conserved and every compact gauge difference vanishes. The
witnesses use explicitly overlapping supports and no globally monotone
compact function.


Both examples are exact substitutions and one-dimensional integration
arguments in the declared finite-region model; they assert no existence of
sources or fields, no numerical values of the constants and no global gauge
statement.
