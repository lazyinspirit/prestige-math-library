
## Example

Assume $\mathrm{AC}_\omega$ for the smooth principal-connection and gauge-action convention. Let $M_0=\mathbb R_{x^0}\times U(1)_w\times\mathbb R^2_{x,y}$ have the product smooth structure and flat Lorentzian metric $g=-(dx^0)^2+R^2d\phi^2+dx^2+dy^2$, where $x^0,x,y$ are length coordinates measured in metres, $R>0$ is a length, and $\phi$ is dimensionless modulo $2\pi$. On each angular chart, $s=R\phi$ is a length coordinate and $g=-(dx^0)^2+ds^2+dx^2+dy^2$, so all four coordinates in this chart are metre-valued. In the adopted Lorentzian length-coordinate convention, write $x^0=ct_{\mathrm{sec}}$, where $t_{\mathrm{sec}}$ is measured in seconds and $c>0$ is only a coordinate unit-conversion scale in $\mathrm m\,\mathrm s^{-1}$; no numerical measured value or physical role for $c$ is asserted. Give $M_0$ time orientation $\partial_{x^0}$ and product orientation $dx^0\wedge R\nu\wedge dx\wedge dy$. Let $\nu=-iw^{-1}dw=d\phi$ be the global real angular one-form on the base circle, normalized by $\int_{U(1)}\nu=2\pi$, and let $P=M_0\times U(1)_z$ have projection $\pi(x,z)=x$ and right action $(x,z)\cdot\zeta=(x,z\zeta)$. On the fibre let $\eta=-iz^{-1}dz$. For a dimensionless real parameter $\theta$, the normalized connection $\omega_\theta=\eta+\theta\pi^*\nu$ has zero curvature. For the fixed normalization $\kappa_0>0$ in webers, its physical local potential is $A_\theta=\kappa_0\theta\nu$; in the length coordinate $s$ its component is $\kappa_0\theta/R$ in $\mathrm{Wb}\,\mathrm m^{-1}$. For the positive base loop $\gamma(\phi)=(0,e^{i\phi},0,0)$, $\phi\in[0,2\pi]$, define principal holonomy as the fibre multiplier of the horizontal lift; it is $e^{-2\pi i\theta}$. The inverse Wilson-loop convention $W(\gamma):=\exp(i\int_\gamma\theta\nu)$ gives $e^{2\pi i\theta}$. Under the pushforward action on horizontal distributions, this connection is gauge-equivalent to $\eta$ exactly when $\theta\in\mathbb Z$. The circle is an ideal topological factor of a smooth background; no monopole, charge quantization, or empirical claim is made.

## Statement references

[[prop-emg-fx-affine-connection-sector]]

[[def-emg-lorentzian-forms]]

[[lem-emg-sphere-flux-holonomy]]

## Facts & Assumptions

**Given:** The product base and trivial principal circle bundle in the statement, the normalized connection convention, and the pushforward action on horizontal distributions.

[F1] [[lem-emg-sphere-flux-holonomy]]: on $\mathbb R\times U(1)\times\mathbb R^2$ the normalized connection $\eta+a\pi^*\nu$ has zero curvature and principal horizontal-lift holonomy $e^{-2\pi ia}$; it is gauge-trivial exactly when $a\in\mathbb Z$. Its proof records the local phase and winding argument.

[F2] [[prop-emg-fx-affine-connection-sector]]: normalized connections on the same fixed bundle and atlas differ by a global one-form, and the adopted pushforward action sends a local representative $a_i$ to $a_i-\lambda(h)$ for $\Phi_h(x,z)=(x,h(x)z)$.

[F3] [[def-gauge-group-of-a-smooth-principal-bundle]]: a gauge transformation is a smooth diffeomorphism $\Phi$ over the identity satisfying $\Phi(pu)=\Phi(p)u$.

[F4] [[prop-gauge-transformations-act-on-principal-connections]]: the adopted action sends horizontal distribution $H$ to $d\Phi(H)$.

[F5] [[def-emg-local-potentials-and-circle-data]]: $U(1)$ has smooth multiplication and inversion, $\eta=-iz^{-1}dz$ is the real angular normalization, and $\kappa_0$ converts normalized to physical potential units.

[F6] [[thm-kernel-and-fibres-of-complex-exponential]]: $e^{is}=1$ for real $s$ exactly when $s\in2\pi\mathbb Z$.

[F7] [[lem-emg-lorentz-hodge-calculus]]: $d^2=0$ and $d$ obeys the graded product rule; in each local phase chart $\nu=d\phi$.

[F8] [[def-emg-lorentzian-forms]]: in a length-coordinate chart all four coordinate values have units of length and the temporal coordinate is $x^0=ct_{\mathrm{sec}}$, with $t_{\mathrm{sec}}$ in seconds and $c$ a unit-conversion scale in $\mathrm m\,\mathrm s^{-1}$; this bookkeeping convention assigns no measured value or physical role to $c$.

[A1] [[def-countable-choice]]: $\mathrm{AC}_\omega$ is the background assumption for the inherited smooth tangent and principal-connection convention; the explicit product connection and the finite holonomy calculation make no additional selections.

## Verification

1.1 In each angular chart $\nu=d\phi$, so $d\nu=d^2\phi=0$ by [F7] locally and therefore globally; the normalized connection form $\eta+\theta\pi^*\nu$ is the product-bundle connection of [F1], and its curvature is $\theta d\nu=0$. The temporal length coordinate is $x^0=ct_{\mathrm{sec}}$ under [F8], with $c$ only the stated unit-conversion scale. In the length coordinate $s=R\phi$, its base component is $\theta/R$ with units $\mathrm m^{-1}$, while the physical potential component $\kappa_0\theta/R$ has units $\mathrm{Wb}\,\mathrm m^{-1}$. [given, A1, F1, F5, F7, F8, algebra]

1.2 Along the loop parameterized by $\phi\in[0,2\pi]$, write the fibre coordinate as $z(\phi)=e^{i\psi(\phi)}$. The horizontality equation is $\dot\psi+\theta=0$, so $\psi(2\pi)-\psi(0)=-2\pi\theta$ and the principal holonomy is $e^{-2\pi i\theta}$. The inverse Wilson variable is $e^{i\int_\gamma\theta\nu}=e^{2\pi i\theta}$. [given, A1, F1, algebra]

1.3 Every gauge transformation of the product bundle has the form $\Phi_h(x,z)=(x,h(x)z)$: set $\Phi_h(x,1)=(x,h(x))$ and use right equivariance in [F3] on $(x,z)=(x,1)\cdot z$. The pushforward convention in [F4] is the one used in [F2], so the local normalized potential changes by $a\mapsto a-\lambda(h)$. [given, A1, F2, F3, F4, algebra]

2.1 If $\theta=n\in\mathbb Z$, the map $h(w)=w^n$ is single-valued and smooth, with smooth inverse $w^{-n}$, because the group multiplication and inversion on $U(1)$ are smooth. On each phase chart $w=e^{i\phi}$, the phase rule in [F5] gives $\lambda(h)=d(n\phi)=n\nu$; thus the pushforward gauge action in [F2] sends $a=n\nu$ to zero. Conversely, if a gauge transformation sends $\omega_\theta$ to the trivial connection, it maps a horizontal lift to a horizontal lift and preserves its fibre multiplier: if a lifted loop ends at $p\cdot u$, its gauge image ends at $\Phi_h(p)\cdot u$ by equivariance. The trivial connection has multiplier $1$, so $e^{-2\pi i\theta}=1$; [F6] implies $\theta\in\mathbb Z$. Thus gauge triviality is equivalent to integrality, while every nonintegral $\theta$ gives a flat connection with nontrivial holonomy. [given, A1, F2, F3, F4, F5, F6, F7, step 1.2, step 1.3] ∎

## Remarks

The plus sign $e^{2\pi i\theta}$ is the inverse Wilson-loop convention used in the design. With the fixed total-space connection form $\eta+\theta\nu$, horizontal parallel transport has the inverse multiplier $e^{-2\pi i\theta}$. The two conventions agree on whether the phase is trivial and on the integer gauge-triviality criterion.
