---
id: ex-cm07-polar-coordinate-kinetic-metric-check
kind: example
title: "Cylindrical coordinates for one label: the kinetic metric m diag(1, r^2, 1) and the coordinate form of the model's equation"
status: draft
origin: session
domain: physics
dependency_level: 16
deps: [def-cm07-action-and-mechanical-lagrangian, pthm-cm07-coordinate-covariance-of-the-equations, pthm-cm07-euler-lagrange-equations, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm01-configuration, def-cm01-velocity-acceleration, def-cm01-units, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-invertible-euclidean-linear-map, thm-euclidean-inverse-function-theorem, thm-higher-regularity-of-local-inverses, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, def-euclidean-inner-product, def-matrix-product-and-identity-matrix, def-transpose-of-a-matrix, def-vector-valued-derivative-and-integral, def-interval]
dependency_roles:
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  pthm-cm07-coordinate-covariance-of-the-equations: physical-result
  pthm-cm07-euler-lagrange-equations: physical-result
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm01-configuration: formulation-prerequisite
  def-cm01-velocity-acceleration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-invertible-euclidean-linear-map: mathematical-premise
  thm-euclidean-inverse-function-theorem: mathematical-premise
  thm-higher-regularity-of-local-inverses: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked check of the coordinate-covariance theorem on cylindrical coordinates for one labelled particle of mass m in a declared potential presentation: the map covers the open region off the z-axis periodically and supplies local coordinates there, but is not a global chart of all configuration space; the substituted Lagrangian has kinetic metric m diag(1, r^2, 1), the coordinate Euler-Lagrange equations are exactly the Cartesian equation written in the cylindrical frame, and the Cartesian stationary curves correspond to coordinate lifts. The radial and axial coordinates have length dimension, the angle is dimensionless, and no measurement is reported."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.2, printed pages 13-16 (PDF pages 19-22): changing coordinate systems, with plane-polar central-force coordinates and the Lagrange equations in polar form"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Sections 2.1-2.2, chapter pages 1-3: generalized coordinates for a particle, with the polar-coordinate kinetic energy"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---
## Example

Declare a one-label model of the force branch of
[[post-cm02-force-superposition]] with $N=1$, mass $m>0$, time window
$I_{0}=\mathbb R$, configuration domain $Q=\mathbb R^{3}$ and a global
potential presentation $F(t,x,v)=-\nabla U(t,x)$ with $C^{2}$ potential
$U:I_{0}\times Q\to\mathbb R$ and no residual forces
([[def-cm03-potential-and-mechanical-energy]]); the mechanical Lagrangian is
$L(t,x,v)=\tfrac12m\lvert v\rvert_{2}^{2}-U(t,x)$
([[def-cm07-action-and-mechanical-lagrangian]]). Let
$\Omega:=\{(r,\theta,z)\in\mathbb R^{3}:r>0\}$ and define the cylindrical
coordinate map
$$X(r,\theta,z):=\bigl(r\cos\theta,\ r\sin\theta,\ z\bigr),\qquad X:\Omega\longrightarrow Q ,$$
with substituted Lagrangian and kinetic metric
$$\widetilde L(t,r,\theta,z,\dot r,\dot\theta,\dot z)=\tfrac12m\bigl(\dot r^{2}+r^{2}\dot\theta^{2}+\dot z^{2}\bigr)-\widetilde U(t,r,\theta,z),\qquad \widetilde U:=U\circ X,$$
$$G(r,\theta,z)=DX(r,\theta,z)^{\mathsf T}\,(mI_{3})\,DX(r,\theta,z)=m\begin{pmatrix}1&0&0\\ 0&r^{2}&0\\ 0&0&1\end{pmatrix}.$$

Under [[def-cm01-units]], $[m]=\mu$, $[r]=[z]=\ell$, $[t]=\tau$ and
$[\theta]=1$ (dimensionless angle); $[\dot r]=[\dot z]=\ell\tau^{-1}$,
$[\dot\theta]=\tau^{-1}$, and $[U]=\mu\ell^{2}\tau^{-2}$. The configuration image is
$Q_{\mathrm{cyl}}:=\{(x,y,z)\in\mathbb R^{3}:x^{2}+y^{2}>0\}$, which omits
the $z$-axis.

Then:

1. $X$ is a $C^{\infty}$ map with everywhere invertible Jacobian, hence a local diffeomorphism at every point of $\Omega$, so the covariance theorem applies to it; its image is $Q_{\mathrm{cyl}}$, it is periodic in $\theta$, and it is not a global chart of $Q$. The coordinate equations are interpreted on these local charts or along a chosen coordinate lift.
2. the Euler-Lagrange equations of $\widetilde L$ are exactly
   $$m\bigl(\ddot r-r\dot\theta^{2}\bigr)=-\partial_{r}\widetilde U,\qquad m\bigl(r^{2}\ddot\theta+2r\dot r\dot\theta\bigr)=-\partial_{\theta}\widetilde U,\qquad m\ddot z=-\partial_{z}\widetilde U,$$
   which are the coordinate components of $m x''=-\nabla U(t,x)$ along
   $x=X(r,\theta,z)$;
3. consequently, for a $C^{2}$ curve $(r,\theta,z):[a,b]\to\Omega$ with
   $x:=X\circ(r,\theta,z)$, the coordinate curve is stationary for the
   substituted action if and only if the Cartesian curve $x$ satisfies the
   model's equation of motion on $[a,b]$.

## Facts & Assumptions

**Given:** The model data of the Example, the map $X$ and a $C^{2}$ curve $q(t)=(r(t),\theta(t),z(t))$ with values in $\Omega$ and $x:=X\circ q$.

[F1] Regularity and invertibility ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-jacobian-matrix-and-gradient]], [[def-invertible-euclidean-linear-map]], [[thm-sine-and-cosine-derivatives]], [[def-matrix-product-and-identity-matrix]], [[def-transpose-of-a-matrix]], [[def-euclidean-inner-product]]): $X$ is $C^{\infty}$ and $DX(r,\theta,z)=\begin{pmatrix}\cos\theta&-r\sin\theta&0\\ \sin\theta&r\cos\theta&0\\ 0&0&1\end{pmatrix},\qquad \det DX(r,\theta,z)=r>0,$ so $DX$ is invertible on $\Omega$; and the matrix product $DX^{\mathsf T}(mI_{3})DX$ is the displayed diagonal matrix, since the columns of $DX$ are orthogonal with squared norms $1,r^{2},1$ by $\sin^{2}+\cos^{2}=1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[F2] The covariance theorem ([[pthm-cm07-coordinate-covariance-of-the-equations]]): for this coordinate map the Euler-Lagrange expression of $\widetilde L$ along $q$ satisfies $E_{\widetilde L}(q)=DX^{\mathsf T}E_{L}(x)$, and the vanishing of the substituted Euler-Lagrange equation is equivalent to the Cartesian curve solving $m x''(t)=-\nabla U(t,x(t))$ on $[a,b]$ ([[pthm-cm07-euler-lagrange-equations]] for the Cartesian equivalence).

[F3] Chain rule for the coordinate description ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[thm-sine-and-cosine-derivatives]], [[def-vector-valued-derivative-and-integral]], [[def-interval]]): differentiating $x(t)=X(q(t))$ twice gives $x'=\dot r\,e_{r}+r\dot\theta\,e_{\theta}+\dot z\,e_{3},\qquad x''=\bigl(\ddot r-r\dot\theta^{2}\bigr)e_{r}+\bigl(r\ddot\theta+2\dot r\dot\theta\bigr)e_{\theta}+\ddot z\,e_{3},$ where $e_{r}:=(\cos\theta,\sin\theta,0)$, $e_{\theta}:=(-\sin\theta,\cos\theta,0)$, $e_{3}:=(0,0,1)$ is an orthonormal frame; and $\nabla U(t,x)=\partial_{r}\widetilde U\,e_{r}+\frac1r\partial_{\theta}\widetilde U\,e_{\theta}+\partial_{z}\widetilde U\,e_{3}$ along $x$.

## Verification

**Proof technique:** direct; compute the Jacobian, the kinetic metric and the Euler-Lagrange equations of the substituted Lagrangian, and identify them with the Cartesian equation in the orthonormal cylindrical frame.

1.1 Clause 1: the displayed Jacobian and its determinant $r>0$ are computed from the derivatives of sine and cosine, so $DX(r,\theta,z)$ is invertible for every $(r,\theta,z)\in\Omega$ and $X$ has the invertibility hypothesis of the covariance theorem. By [[thm-euclidean-inverse-function-theorem]] and [[thm-higher-regularity-of-local-inverses]], its restriction near any point is a smooth diffeomorphism onto an open part of its image; the inverse is a local cylindrical coordinate chart. Globally, $X(r,\theta+2\pi,z)=X(r,\theta,z)$, so no global inverse on all of $\Omega$ is asserted. The kinetic metric is computed by matrix multiplication: the columns of $DX$ are $e_{r}$, $r e_{\theta}$, $e_{3}$, an orthogonal triple of norms $1$, $r$, $1$, so $DX^{\mathsf T}(mI_{3})DX=m\,\mathrm{diag}(1,r^{2},1)$ as displayed. [F1, algebra]

2.1 Substituted Lagrangian: from clause (b) of the generalized-coordinate construction, $\widetilde L=L\circ(t,X,DX\,v)$ equals $\frac12m(\dot r^{2}+r^{2}\dot\theta^{2}+\dot z^{2})-\widetilde U$, matching the computed kinetic metric. [F1, step 1.1, algebra]

3.1 Euler-Lagrange equations: with $\partial\widetilde L/\partial\dot r=m\dot r$, $\partial\widetilde L/\partial r=mr\dot\theta^{2}-\partial_{r}\widetilde U$, $\partial\widetilde L/\partial\dot\theta=mr^{2}\dot\theta$, $\partial\widetilde L/\partial\theta=-\partial_{\theta}\widetilde U$, $\partial\widetilde L/\partial\dot z=m\dot z$ and $\partial\widetilde L/\partial z=-\partial_{z}\widetilde U$, the equations $\frac{d}{dt}\partial_{\dot q}\widetilde L-\partial_{q}\widetilde L=0$ read $m\ddot r-mr\dot\theta^{2}+\partial_{r}\widetilde U=0,\qquad mr^{2}\ddot\theta+2mr\dot r\dot\theta+\partial_{\theta}\widetilde U=0,\qquad m\ddot z+\partial_{z}\widetilde U=0,$ which are the displayed coordinate equations. [F2, step 2.1, algebra]

4.1 Cartesian identification: by [F3], $m x''=-\nabla U(t,x)$ is equivalent, in the orthonormal frame $(e_{r},e_{\theta},e_{3})$, to the three scalar equations $m(\ddot r-r\dot\theta^{2})=-\partial_{r}\widetilde U$, $m(r\ddot\theta+2\dot r\dot\theta)=-\frac1r\partial_{\theta}\widetilde U$, and $m\ddot z=-\partial_{z}\widetilde U$; the second equation of step 3.1 is this one multiplied by $r$. Hence the coordinate Euler-Lagrange equations are exactly the Cartesian equation written in the cylindrical frame. [F3, step 3.1, algebra]

5.1 Clause 3: by [F2], the vanishing of the substituted Euler-Lagrange expression along $q$ is equivalent to the Cartesian equation along $x=X\circ q$; by the chart dictionary of the covariance theorem this is equivalent to stationarity of $q$ for the substituted action. This is the asserted correspondence. [F2, step 3.1, step 4.1] ∎

## Remarks

- The example displays the two ingredients of the generalized-coordinate
  construction: the kinetic metric is the Jacobian-transpose multiple of the
  mass operator, and the coordinate equations carry the centripetal and
  Coriolis terms of the Cartesian acceleration exactly as computed by the
  chain rule. No new dynamical content is added by the change of
  coordinates.

- The plane-polar case is the restriction $z\equiv\mathrm{const}$, in which the
  third equation is dropped; the angular equation multiplied by $r$ is the
  familiar $m(2\dot r\dot\theta+r\ddot\theta)=-\frac1r\partial_{\theta}\widetilde U$.
