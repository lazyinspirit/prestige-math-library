---
id: lem-emg-sphere-flux-holonomy
kind: lemma
title: "Sphere winding, nonexact curvature and flat holonomy"
status: draft
origin: pipeline
domain: mathematics
physical_scope: null
dependency_level: 4
deps:
  - lem-emg-circle-connection-gluing
  - def-emg-local-potentials-and-circle-data
  - lem-emg-lorentz-hodge-calculus
  - thm-stokes-theorem-for-smooth-singular-chains
  - thm-nth-roots-exist
  - lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space
  - thm-continuous-implies-integrable
  - thm-ftc-first-part
  - thm-newton-leibniz-with-interior-derivative
  - thm-chain-rule-for-total-derivatives
  - thm-kernel-and-fibres-of-complex-exponential
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-sine-and-cosine-parametrize-the-unit-circle
  - thm-complex-exponential-is-entire-with-derivative-itself
  - def-emg-finite-real-supremum-domain
  - def-emg-real-metric-axiom-convention
  - lem-emg-metric-axioms-imply-nonnegativity
  - def-emg-explicit-power-regimes
  - lem-emg-sequence-limit-criterion-with-choice
  - def-emg-boundaryless-completeness-domain
  - def-emg-set-size-and-class-schema
dependency_roles:
  lem-emg-circle-connection-gluing: mathematical-premise
  def-emg-local-potentials-and-circle-data: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  thm-stokes-theorem-for-smooth-singular-chains: mathematical-premise
  thm-nth-roots-exist: mathematical-premise
  lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-kernel-and-fibres-of-complex-exponential: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  thm-sine-and-cosine-parametrize-the-unit-circle: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  def-emg-finite-real-supremum-domain: mathematical-premise
  def-emg-real-metric-axiom-convention: mathematical-premise
  lem-emg-metric-axioms-imply-nonnegativity: mathematical-premise
  def-emg-explicit-power-regimes: mathematical-premise
  lem-emg-sequence-limit-criterion-with-choice: mathematical-premise
  def-emg-boundaryless-completeness-domain: mathematical-premise
  def-emg-set-size-and-class-schema: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: "David Tong, Gauge Theory, Cambridge Part III lecture notes (2018), sections 1.1.1–1.1.2"
      url: "https://davidtong.org/pdfs/teaching/gauge-theory/gauge.pdf"
      locator: "Section 1.1.2, 'A Patchwork of Gauge Fields,' printed pp. 6–8 (PDF pp. 16–18), with the preceding section 1.1.1 read to separate its quantum phase condition from the geometric winding calculation."
    - title: "Scott Morrison, Connections on Principal Fibre Bundles (2000)"
      url: "https://tqft.net/papers/ConnectionsAndBundles.pdf"
      locator: "Sections 5.1 and 7.1–7.3, printed pp. 8–15 (PDF pp. 7–16), connection forms, local representatives and curvature."
provenance:
  statement: ai-altered
  proof: ai-altered
---

## Statement

For $b\in\mathbb R$, let $M=\mathbb R_{x^0}\times(\mathbb R^3\setminus\{0\})$, $r=(x^2+y^2+z^2)^{1/2}$, and define the smooth real two-form

$$
F_b:=\frac{b}{r^3}\left(x\,dy\wedge dz+y\,dz\wedge dx+z\,dx\wedge dy\right).
$$

Use the standard product smooth structure and orientation on $M$; it is an open subset of $\mathbb R^4$, hence smooth, Hausdorff and second-countable.

Let $U_N=\{(x^0,x,y,z)\in M:r+z>0\}$ and $U_S=\{(x^0,x,y,z)\in M:r-z>0\}$; these two open sets cover $M$. Then $dF_b=0$ and its flux through the unit sphere with outward orientation is $4\pi b$. If $b\ne0$, $F_b$ has no global one-form potential on $M$. On $U_N$ and $U_S$,

$$
A_N=b(1-\cos\theta)\,d\phi,\qquad A_S=-b(1+\cos\theta)\,d\phi
$$

are smooth local potentials with $dA_N=dA_S=F_b$, and $A_S-A_N=-2b\,d\phi$ on the overlap. For a chosen normalization $\kappa_0>0$, these local forms define the normalized circle-connection data of [[def-emg-local-potentials-and-circle-data]] precisely when the transition $g_{NS}=e^{-2ib\phi/\kappa_0}$ is single-valued, equivalently $2b/\kappa_0\in\mathbb Z$. For a smooth loop $g(e^{i\phi})=e^{i\chi(\phi)}$, its winding is $[\chi(2\pi)-\chi(0)]/(2\pi)$, with both circles oriented by increasing angle. Existence of a smooth phase lift, integrality of its endpoint change, and independence of the lift are proved in the phase-lift construction below. The transition winding has sign $-2b/\kappa_0$ in the stated north-to-south convention, while $\int_{S^2}F_b/(2\pi\kappa_0)=2b/\kappa_0$. This is an exact condition for this chosen circle normalization, not a claim that every classical real flux is quantized. When $2b/\kappa_0\in\mathbb Z$, the compatible two-set data also produce a smooth principal circle-bundle connection, using the actual set-size interface in [A1] and the gluing statement of [[lem-emg-circle-connection-gluing]].

There is also a flat example with nontrivial holonomy. On $M_0=\mathbb R\times S^1\times\mathbb R^2$, let $\nu=-i w^{-1}dw$ be the global angular one-form on the base circle $S^1=\{w\in\mathbb C:|w|=1\}$, normalized by $\int_{S^1}\nu=2\pi$, and take $A=\kappa_0 a\,\nu$ for dimensionless $a\in\mathbb R$. On the trivial bundle use $\omega=\vartheta+a\pi^*\nu$, where $\vartheta=-i z^{-1}dz$ is the fibre angular form. Holonomy means the fibre multiplier of the horizontal lift around the indicated base loop; gauge trivial means gauge-equivalent to $\vartheta$ under a smooth bundle map $G_u(x,z)=(x,z u(x))$ covering the identity. Then $F=dA=0$ but holonomy around the circle is $e^{-2\pi ia}$, so this connection is gauge trivial exactly when $a\in\mathbb Z$. If $b$ and $\kappa_0$ are assigned physical units, both are measured in webers; the ratio $2b/\kappa_0$ is dimensionless. No general classification of circle bundles is asserted.

## Facts & Assumptions

**Given:** The smooth punctured-space domain, $b\in\mathbb R$, the outward orientation on the unit sphere, a chosen $\kappa_0>0$, and the normalized circle-connection conventions.


[F2] [[thm-stokes-theorem-for-smooth-singular-chains]]: for a finite smooth singular $k$-chain $c$, $k\ge1$, and a smooth $(k-1)$-form $\omega$, $\int_c d\omega=\int_{\partial c}\omega$.

[F3] [[def-emg-local-potentials-and-circle-data]]: $U(1)$ has smooth multiplication and inversion; the fixed scale is $\kappa_0>0$, a local physical potential is $A_i=\kappa_0a_i$, and the overlap convention is $a_S=a_N+df_{NS}$ with $g_{NS}=e^{if_{NS}}$.

[F4] [[lem-emg-lorentz-hodge-calculus]]: $d$ is the alternating coordinate exterior derivative, so $dF_b$ and local-potential derivatives are computed coefficientwise; $d^2=0$.

[F5] [[thm-nth-roots-exist]]: every $q>0$ has a unique positive square root $s$ with $s^2=q$.

[F6] [[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]]: a smooth map between open Euclidean sets with invertible derivative at a point has a smooth local inverse there.

[F7] [[thm-continuous-implies-integrable]]: a continuous real function on a compact interval is Riemann integrable.

[F8] [[thm-ftc-first-part]]: the integral function of a continuous integrand is differentiable with derivative equal to that integrand.

[F9] [[thm-newton-leibniz-with-interior-derivative]]: a continuous function with an integrable extension of its continuous interior derivative equals its initial value plus the integral of that derivative.

[F10] [[thm-chain-rule-for-total-derivatives]]: for differentiable Euclidean maps, the derivative of a composition is the composite of the derivatives.

[F11] [[thm-kernel-and-fibres-of-complex-exponential]]: for real $s$, $e^{is}=1$ exactly when $s\in2\pi\mathbb Z$.

[F12] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]: for real $s$, $e^{is}=\cos s+i\sin s$ and $|e^{is}|=1$.

[F13] [[thm-sine-and-cosine-parametrize-the-unit-circle]]: every point of the real unit circle is $(\cos s,\sin s)$ for some real $s\in[0,2\pi)$.

[F14] [[thm-complex-exponential-is-entire-with-derivative-itself]]: the derivative of the complex exponential is the exponential itself.

[A1] The seven typed foundational conventions in the declared dependencies are authored earlier on this page. In particular [[def-emg-set-size-and-class-schema]] supplies actual set-sized bundle gluing data, and [[def-emg-explicit-power-regimes]] distinguishes the positive-root and real-power domains. The sequence criterion retains its explicit $\mathrm{AC}_\omega$ hypothesis; the finite sphere, circle-lift and patch calculations below do not invoke it.

## Proof

1.1 Put $Q=x^2+y^2+z^2$. At every point with $Q>0$, [F5] gives a positive root $r_0$ of $s^2=Q$; the map $s\mapsto s^2$ on $(0,\infty)$ has derivative $2r_0\ne0$, so [F6] gives a smooth local inverse near $Q$, which agrees with the unique positive root by [F5]. Composing this local inverse with the smooth function $Q$ proves that $r=\sqrt Q$ is smooth near each point of the punctured space. Thus the Cartesian coefficients of $F_b$ are smooth. On the dense open set $x^2+y^2>0$, write $x\,dy\wedge dz+y\,dz\wedge dx+z\,dx\wedge dy=\iota_{x\partial_x+y\partial_y+z\partial_z}(dx\wedge dy\wedge dz)$. The spherical-coordinate volume form is $r^2\sin\theta\,dr\wedge d\theta\wedge d\phi$, and the radial vector is $r\partial_r$, so contraction gives $r^3\sin\theta\,d\theta\wedge d\phi$. Hence $F_b=b\sin\theta\,d\theta\wedge d\phi$ and $dF_b=b\cos\theta\,d\theta\wedge d\theta\wedge d\phi=0$. Since $dF_b$ is continuous by [F4], it vanishes on the closure, which is the whole punctured space. Pulling back to the outward unit sphere and integrating gives $\int_{S^2}F_b=b\int_0^{2\pi}\int_0^\pi\sin\theta\,d\theta\,d\phi=4\pi b$. [given, F4, F5, F6, algebra]

1.2 Let $\vartheta=-i z^{-1}dz$ be the invariant one-form on the fibre circle and let $\nu=-i w^{-1}dw$ be the base angular form in the statement. In a local angle $z=e^{i\theta}$, $\vartheta=d\theta$, so it evaluates to $1$ on the vertical generator; it is right invariant, as is $\pi^*\nu$. Thus $\omega=\vartheta+a\pi^*\nu$ on the trivial bundle is a principal connection: for each base tangent vector $X$, the unique vertical component $-a\nu(X)\partial_\theta$ makes $\omega$ vanish, so its kernel is a horizontal complement. Since the base circle has dimension one, $d\nu$ is a two-form on a one-dimensional manifold and is zero by [F4]. Along $w=e^{i\phi}$, the explicit fibre curve $z(\phi)=z_0e^{-ia\phi}$ has $\dot\theta+a\dot\phi=0$, so it is horizontal and ends at $z_0e^{-2\pi ia}$. Hence the holonomy is $e^{-2\pi ia}$, and $F=dA=\kappa_0a\,d\nu=0$. [given, F3, F4, algebra]

2.1 Suppose $F_b=dA$ for a global smooth one-form $A$ on $M$. Choose a tetrahedron with ordered vertices $v_0,v_1,v_2,v_3$, positively oriented in $\mathbb R^3$, with the origin in its interior. On each face take the affine parametrization $\sigma_j$ by the standard $2$-simplex with increasing remaining vertex order and coefficient $(-1)^j$. Radial projection $R(x)=x/|x|$ is smooth on a neighborhood of every face, since no face contains the origin. The maps $R\circ\sigma_j$ extend smoothly to neighborhoods of the simplices. Each edge restriction has the identical ordered affine edge map in the two adjacent faces, with opposite boundary coefficients. Thus $c=\sum_{j=0}^3(-1)^jR\circ\sigma_j$ is a finite smooth singular cycle. The oriented tetrahedral boundary projects outward and covers the sphere once up to edges, so change of variables on its four faces identifies its integral with the sphere integral in step 1.1. Include this cycle in a fixed $x^0$-slice of $M$. Stokes and [F2] then give $\int_{S^2}F_b=\int_c dA=\int_{\partial c}A=0$, contradicting $4\pi b\ne0$. Thus no global potential exists when $b\ne0$. [given, F2, step 1.1, construct]

2.2 Since $r\ge |z|$ and $(r+z)+(r-z)=2r>0$, at least one of $r+z,r-z$ is positive, so $U_N,U_S$ cover $M$. On the north patch, $(1-\cos\theta)d\phi=(x\,dy-y\,dx)/(r(r+z))$; the denominator is nonzero there, so $A_N$ extends smoothly across the north axis. On the south patch, $(1+\cos\theta)d\phi=(x\,dy-y\,dx)/(r(r-z))$; the denominator is nonzero there, so $A_S$ extends smoothly across the south axis. Differentiating on the dense overlap gives $dA_N=dA_S=b\sin\theta\,d\theta\wedge d\phi=F_b$. Both sides are smooth, so the identities extend by continuity to the respective full patches. Subtraction gives $A_S-A_N=-2b\,d\phi$ on the overlap. [given, F4, step 1.1, algebra]

2.3 Let $u:M_0\to U(1)$ be any smooth gauge map and restrict it to $\gamma(\phi)=(x^0_*,e^{i\phi},y_*,z_*)$, with the other base coordinates fixed; write $v(\phi)=u(\gamma(\phi))$. The chain rule [F10] and smooth group inversion [F3] make $v$ and $v^{-1}$ smooth. Since $|v|=1$, differentiating $\bar v v=1$ gives $\overline{v^{-1}v'}+v^{-1}v'=0$, so $q(\phi):=-i v^{-1}v'$ is real and smooth. It is continuous on $[0,2\pi]$, hence integrable by [F7]. By [F12] and [F13], choose $\chi_0\in[0,2\pi)$ with $e^{i\chi_0}=v(0)$, and set $\chi(\phi)=\chi_0+\int_0^\phi q(s)\,ds$; [F8] gives $\chi'=q$. By [F10] and [F14], $h=e^{i\chi}$ satisfies $h'=iqh$, while the definition of $q$ gives $v'=iqv$. Thus $(vh^{-1})'=0$; applying [F9] to its real and imaginary parts, whose zero derivatives are integrable by [F7], yields $vh^{-1}=v(0)h(0)^{-1}=1$, so $v=e^{i\chi}$ on the full interval. Any other smooth phase lift $\widetilde\chi$ of $v$ has the same derivative as $\chi$ by [F10] and [F14]; applying [F9] to $\widetilde\chi-\chi$ shows the difference is constant. Since $v(2\pi)=v(0)$, $e^{i(\chi(2\pi)-\chi(0))}=1$, and [F11] gives $\chi(2\pi)-\chi(0)=2\pi n$ for some integer $n$, independently of the phase lift. Since this argument uses only a smooth circle-valued loop and its equal endpoint values, it proves the same phase-lift and winding claims for every smooth $g:S^1\to U(1)$. Hence $\int_\gamma(-iu^{-1}du)=2\pi n$. [given, F3, F7, F8, F9, F10, F11, F12, F13, F14, step 1.2, algebra]

3.1 Put $a_N=A_N/\kappa_0$ and $a_S=A_S/\kappa_0$. By [F3], the required transition convention is $a_S=a_N+df_{NS}$ with $g_{NS}=e^{if_{NS}}$. Here $f_{NS}=-2b\phi/\kappa_0$, so $g_{NS}=e^{-2ib\phi/\kappa_0}$. Replacing $\phi$ by $\phi+2\pi$ leaves this map unchanged exactly when $e^{-4\pi ib/\kappa_0}=1$, equivalently $n:=2b/\kappa_0\in\mathbb Z$. For this two-set cover set $g_{NN}=g_{SS}=1$ and $g_{SN}=g_{NS}^{-1}$; these maps obey the cocycle, and $a_N=a_S+\lambda(g_{SN})$ follows from $\lambda(g_{SN})=-\lambda(g_{NS})$, so both overlap directions satisfy [F3]. The degree of the smooth map $\phi\mapsto e^{-in\phi}$ is $-n$, while the flux quotient in step 1.1 is $n$. Under the set-size interface [A1], the conditional construction statement [L1] applies to these compatible countable-cover data and supplies the selected circle-bundle connection. [given, A1, L1, F3, step 1.1, step 2.2, algebra]

3.2 On any local angle arc $u=e^{i\psi}$, the gauge map sends $(x,e^{i\theta})$ to $(x,e^{i(\theta+\psi(x))})$, so [F10] and [F14] give $G_u^*\vartheta=\vartheta+d\psi=\vartheta-iu^{-1}du$. Its pullback adds $-iu^{-1}du$ to the base form of $\omega=\vartheta+a\pi^*\nu$, whose loop period is $2\pi(a+n)$ by step 2.3; consequently the holonomy remains $e^{-2\pi ia}$. [given, F3, F10, F14, step 1.2, step 2.3, algebra]

4.1 If $a\notin\mathbb Z$, [F11] makes $e^{-2\pi ia}\ne1$, so no gauge can make the connection trivial. If $a\in\mathbb Z$, the global map $u(x)=w^{-a}$ is smooth by [F3] because it is an integer power in the smooth circle group; on a local parameter $w=e^{i\phi}$, [F10] and [F14] give $-iu^{-1}du=-a\,d\phi=-a\nu$, cancelling the base form. Therefore gauge triviality is equivalent to $a\in\mathbb Z$. [given, F3, F10, F11, F14, step 3.2, algebra] ∎


## Remarks

Tong's treatment derives its charge restriction from a quantum matter-phase requirement involving electric charge and $\hbar$. This item uses only the stated geometric circle normalization $\kappa_0$ and the explicit transition-map single-valuedness calculation; it makes no empirical monopole claim and imports no quantum charge assumption.
