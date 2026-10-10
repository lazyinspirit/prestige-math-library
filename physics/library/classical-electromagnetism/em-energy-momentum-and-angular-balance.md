---
page: em-energy-momentum-and-angular-balance
title: "Energy momentum angular balance"
status: draft
items: [def-em-vacuum-energy-flux,
        def-em-vacuum-stress-momentum,
        pthm-em-poynting-balance,
        pthm-em-momentum-balance,
        pthm-em-angular-balance,
        pthm-em-coupled-total-conservation]
examples: []
---

**Objective.** This page is the conservation-law layer of the vacuum
electromagnetic framework. It defines the energy and momentum bilinears of the
field, proves the local and fixed-volume energy, momentum and orbital-angular
balances from the adopted smooth Maxwell branch and the adopted continuum
coupling, and records the total conservation statements that become available
once an explicit matter model is supplied. It introduces no new physical
postulate: every theorem is conditional on the two postulates of
[[em-primitives-and-postulates]], and the balance identities are exact
consequences of those equations and the definitions below.

**Field bilinears.** The energy density
$u=\tfrac12(\varepsilon_0\lvert E\rvert^2+\mu_0^{-1}\lvert B\rvert^2)$ and the
Poynting vector $S=\mu_0^{-1}E\times B$ are defined pointwise for fields of
class $C^k$, $k\ge1$, with their regularity, SI units, quadratic character and
the exclusions for locally integrable fields and singular source support
([[def-em-vacuum-energy-flux]]). The momentum density
$g=S/c^2=\varepsilon_0E\times B$, the symmetric Maxwell stress
$\sigma_{ij}=\varepsilon_0(E_iE_j-\tfrac12\delta_{ij}\lvert E\rvert^2)+\mu_0^{-1}(B_iB_j-\tfrac12\delta_{ij}\lvert B\rvert^2)$,
the momentum flux $\Pi=-\sigma$, and the origin-relative orbital angular
momentum density $\ell=x\times g$ with flux tensor $x\times\Pi$ are defined
with their index, sign and origin conventions and units
([[def-em-vacuum-stress-momentum]]); no balance identity is asserted in either
definition.

**Energy balance.** For the smooth branch of the Maxwell postulate with
jointly $C^1$ fields and continuous sources, the local identity
$\partial_tu+\operatorname{div}S=-J\cdot E$ holds. For the fixed-volume form,
assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) and the theorem's
domain and time hypotheses: $\Omega'$ has a finite piecewise $C^1$
presentation, with compact closure contained in $\Omega$, and the time
interval lies inside $I$. Then
$\frac{d}{dt}\int_{\Omega'}u=-\int_{\Omega'}J\cdot E-\oint_{\partial\Omega'}S\cdot n$
([[pthm-em-poynting-balance]]). The work density $J\cdot E$ is read through
clause (ii) of the Lorentz coupling; the boundary flux is retained, and the
weak branch, singular sources and non-integrable products are excluded.

**Momentum and angular balance.** The same hypotheses give the local momentum
identity $\partial_tg+\operatorname{div}\Pi=-f$ with the force density
$f=\rho E+J\times B$, and its fixed-volume traction form
$\frac{d}{dt}\int_{\Omega'}g_i=\oint_{\partial\Omega'}\sigma_{ij}n_j-\int_{\Omega'}f_i$
([[pthm-em-momentum-balance]]). Contracting with the position vector and using
the symmetry of $\Pi$ yields the orbital angular identity
$\partial_t\ell+\operatorname{div}(x\times\Pi)=-x\times f$ and its fixed-volume
form ([[pthm-em-angular-balance]]); the density is orbital, no spin or
intrinsic angular momentum of matter is defined, and the statements are
relative to the fixed origin of the laboratory chart.

**Coupled totals.** If, in addition, a matter model supplies $C^1$ fields
$u_m,S_m,g_m$ and a symmetric $C^1$ $\Pi_m$ satisfying
$\partial_tu_m+\operatorname{div}S_m=J\cdot E$ and
$\partial_tg_m+\operatorname{div}\Pi_m=f$, then the totals
$u_{\mathrm{tot}}=u+u_m$, $g_{\mathrm{tot}}=g+g_m$ and
$\ell_{\mathrm{tot}}=x\times g_{\mathrm{tot}}$ satisfy the local zero-source
identities and the fixed-volume boundary-flux forms
([[pthm-em-coupled-total-conservation]]). The matter balances are additional
assumptions, not consequences of the Maxwell postulates; constancy of a total
holds on an interval exactly when its corresponding net boundary flux vanishes
throughout that interval; a nonzero flux describes exchange that must be tracked
in the chosen system. A worked finite-box ledger for an ideal source-free plane
wave is on the companion page
[[em-energy-momentum-and-angular-balance-examples]].
