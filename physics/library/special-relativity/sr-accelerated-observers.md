---
page: sr-accelerated-observers
title: "Accelerated Observers"
status: published
library: physics
items: [def-sr-proper-acceleration,
        lem-sr-connecting-field-stretching,
        lem-sr-hyperbolic-motion-worldline,
        pthm-sr-guided-ring-sagnac-delay,
        texp-sr-bell-rockets-thread,
        pthm-sr-rindler-horizons-and-radar]
examples: []
---

This page develops accelerated observers in the flat classical model, beginning
with definitions and exact kinematic computations before any physical reading.
The proper acceleration of a $C^2$ future timelike worldline is defined as
$a(\tau)=\sqrt{\eta(A(\tau),A(\tau))}$, well defined because the
four-acceleration is spacelike or zero, with its metre-per-second-squared unit
fixed by the SI conventions; for congruence flow lines with $U=cn$ it satisfies
$A=c^2a_{\mathrm{cg}}$, and the model reads $a$ as an ideal accelerometer
magnitude with no response law, force law or measurement model asserted
([[def-sr-proper-acceleration]]). The explicit uniformly accelerated worldline
is computed next: $z(\tau)=x^{-1}(R\sinh\theta,R\cosh\theta,0,0)$ with
$\theta=\alpha\tau/c$, $R=c^2/\alpha$ has $\eta(U,U)=-c^2$,
$\eta(A,A)=\alpha^2$, chart coordinate speed $c\tanh\theta$, lies in the right
wedge $x^1>|x^0|$, is a Rindler flow line with $A=c^2a_{\mathrm{cg}}$, and
approaches both null planes asymptotically without meeting them
([[lem-sr-hyperbolic-motion-worldline]]).

The material-metric lemma supplies the kinematic content of rigid motion for
$C^1$ future unit timelike fields: the rest form $h=\eta+n^\flat\otimes n^\flat$
induces on an injective $C^2$ immersion $\Phi:J\times B\to A$, with $J$ a
nonempty open interval, $B\subseteq\mathbb R^3$ nonempty and open, and
$\partial_s\Phi=n\circ\Phi$, a $C^1$ positive-definite metric $G_{IJ}$ whose
evolution is $\partial_sG_{IJ}=(L_nh)(e_I,e_J)=2\theta(e_I,e_J)$, whose rest
lengths satisfy $\partial_\tau\ell_I=c\theta(u_I,u_I)\ell_I$, and which is
constant along the flow exactly under Born rigidity $L_nh=0$ on the family's
image, equivalently $\theta=0$ there; the material length is an internal label-space length and is not
identified with a finite endpoint distance on one observer's orthogonal
hyperplane ([[lem-sr-connecting-field-stretching]]). The Rindler page then
separates the chart boundary from the causal horizons: $\Phi$ is a smooth
bijection onto the right wedge with $\rho=0$ excluded, an event can reach a
congruence worldline exactly when $V(q)=q^0-q^1<0$ and can be reached by it
exactly when $U(q)=q^0+q^1>0$, and the coaxial radar round trip has exact
Rindler-time midpoint $\theta_m=\theta_e+|\log(\rho_m/\rho_0)|$, radar distance
$\rho_0|\log(\rho_m/\rho_0)|$ against rest distance $|\rho_m-\rho_0|$, with the
protocol admitting no radar assignment outside $W$; the same criteria hold for
every congruence worldline ([[pthm-sr-rindler-horizons-and-radar]]).

The guided-ring Sagnac theorem is a conditional computation for an ideal rigidly
rotating ring with $|\Omega|R<c$ and an explicitly adopted ideal circular-guide
signal model, not a consequence of the ideal-light postulate: the counter-
propagating guided curves are future null with chart rates $\pm c/R$, the
reunion times of the emitting material point are $2\pi R/(c\mp\Omega R)$, their
chart-time difference is $4\pi\Omega R^2/(c^2-\Omega^2R^2)$ and the detector
proper-time difference is that divided by $\gamma$; the ring rest-line
synchronization holonomy $2\pi\Omega R^2/(c^2-\Omega^2R^2)$ is exactly half the
chart-time difference, the inertial limit $\Omega=0$ and the reversed-rotation
sign are stated, and the ambient rest distribution's Frobenius obstruction is
distinguished from the cylinder's locally integrable rest lines
([[pthm-sr-guided-ring-sagnac-delay]]). The Bell thought experiment closes the
page with a complete conditional deduction for translated rocket worldlines
with $|q'|<c$: all members share the chart velocity $q'$ and acceleration
$q''$ and the constant chart separation $L$, the unit field is
$n=\gamma(1,\beta,0,0)$, the longitudinal expansion is
$\theta(s_\parallel,s_\parallel)=\gamma^3q'q''/c^3$, and the internal material
length at common flow parameter is $\gamma(t)L$ with
$\frac{d}{d\tau}\log\gamma=\gamma^3q'q''/c^2$; the contrast with the
Born-rigid Rindler congruence is drawn, and no breaking, tension or elasticity
conclusion is asserted ([[texp-sr-bell-rockets-thread]]).

Every item on this page is a conditional statement of the flat classical model
with ideal clocks, ideal light rays and explicitly declared idealizations; the
page asserts no measurement, statistical or empirical conclusion, and the
guided-ring guide and detector model remains an adopted device model.
