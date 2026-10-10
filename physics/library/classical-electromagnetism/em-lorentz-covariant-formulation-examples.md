---
page: em-lorentz-covariant-formulation-examples
title: "Lorentz covariant formulation — Examples"
status: draft
items: []
examples: [ex-em-boosted-fields-example, ex-em-constant-field-trajectory]
---

**Objective.** This companion collects the two leaf computations of
[[em-lorentz-covariant-formulation]]: one substitution into the boost law of
the fields, and one closed-form trajectory in a uniform electric field
together with the quantified failure of the unscoped Newtonian extrapolation.
Both are exact conditional computations for the prescribed fields of the
framework; neither reports a measurement, identifies a source or claims
empirical support.

The first example starts from the constant fields $E\equiv E_0e_2$, $B\equiv0$,
checks that they solve the source-free smooth Maxwell branch, and applies the
axis-boost components to obtain $E'=\gamma E_0e_2$ and
$B'=-\gamma\beta E_0e_3/c$: a purely electric uniform field acquires a magnetic
component in the boosted description. The two invariants are checked directly,
$|B'|^2-|E'|^2/c^2=-E_0^2/c^2=|B|^2-|E|^2/c^2$ and $E'\cdot B'=0=E\cdot B$,
and at $\beta=0$ the formulas reduce to the identity
([[ex-em-boosted-fields-example]]).

For $h=qE_0/(mc)\ne0$, the second example verifies the exact closed-form solution
$p(t)=qE_0t\,e_1$, $v(t)=cht/\sqrt{1+h^2t^2}\,e_1$ and
$r(t)=r_0+\tfrac ch(\sqrt{1+h^2t^2}-1)e_1$ of the adopted
coupling in the prescribed field $E\equiv E_0e_1$, $B\equiv0$
([[ex-em-constant-field-trajectory]]). The curve is a future timelike
$C^\infty$ solution with $|v(t)|<c$ at every finite time and $|v(t)|\to c$ as
$t\to\pm\infty$; the force and power identities and the covariant equation of
motion are checked componentwise, the work-energy identity is recorded, and the
separate branch $h=0$, $q=0$ has $r\equiv r_0$, $v\equiv0$, $p\equiv0$ and limiting
speed zero. For $h\ne0$, the comparison with the
unscoped Newtonian prediction $v_N=hct\,e_1$ is quantified: the two agree only
to first order in $|ht|$, $|v_N|$ exceeds $c$ exactly for $|ht|>1$ whereas the
exact solution remains subluminal at every finite time, and the explicit
special-model bounds $|v-v_N|\le c|ht|^3/2$ and
$|r-r_N|\le\frac{c}{8|h|}|ht|^4$ hold. These are comparisons internal to the
stated special solution; they are not a general trajectory-stability
consequence of the covariant force theorem. For $h=0$, the exact and Newtonian
trajectories and velocities coincide, and the formulas dividing by $h$ or $|h|$
are not used.
