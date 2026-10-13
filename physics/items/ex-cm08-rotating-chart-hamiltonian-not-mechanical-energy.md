---
id: ex-cm08-rotating-chart-hamiltonian-not-mechanical-energy
kind: example
title: "An oscillator observed in a uniformly rotating chart: the conserved chart Hamiltonian is not the inertial mechanical energy"
status: published
origin: session
domain: physics
dependency_level: 17
deps: [pthm-cm08-moving-chart-energy-function, pthm-cm07-coordinate-covariance-of-the-equations, pthm-cm07-euler-lagrange-equations, prop-cm-mechanical-chart-lagrangian-is-hyperregular, prop-cm-hamiltonian-branch-identities, def-cm07-action-and-mechanical-lagrangian, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm02-newtonian-flow, def-cm-legendre-map-in-a-time-dependent-chart, def-cm-special-orthogonal-group, lem-cm-so3-is-a-matrix-group, def-cross-product-in-r3, lem-cross-product-is-bilinear-alternating-and-orthogonal, def-sine-and-cosine-by-power-series, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, def-euclidean-inner-product, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, def-matrix-product-and-identity-matrix, def-vector-valued-derivative-and-integral, def-interval, def-cm01-configuration, def-cm01-units, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient]
dependency_roles:
  pthm-cm08-moving-chart-energy-function: physical-result
  pthm-cm07-coordinate-covariance-of-the-equations: physical-result
  pthm-cm07-euler-lagrange-equations: physical-result
  prop-cm-mechanical-chart-lagrangian-is-hyperregular: mathematical-premise
  prop-cm-hamiltonian-branch-identities: mathematical-premise
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm02-newtonian-flow: formulation-prerequisite
  def-cm-legendre-map-in-a-time-dependent-chart: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  lem-cm-so3-is-a-matrix-group: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked computation of the moving-chart energy bookkeeping on an explicit model: the one-label isotropic oscillator with potential U = k |x|^2 / 2, observed in a chart rotating uniformly about the third axis; the substituted Lagrangian, its Legendre data and its Hamiltonian are computed, the difference identity between the chart Hamiltonian and the inertial mechanical energy is verified as the pairing of the chart's angular velocity with the momentum, an explicit circular motion with k = m omega^2 is shown to have chart Hamiltonian zero and inertial mechanical energy m omega^2 r^2, and a numerical instance is evaluated. All values are model values of the declared idealization; the example reports no measurement and asserts no property of an apparatus."
sources:
  references:
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 2.3, chapter pages 7-10 (PDF pages 25-28): the bead on a rotating ring with Hamiltonian H = mR^2(omega~dot^2 - omega^2 sin^2 theta)/2 - mgR cos theta, mechanical energy E = mR^2(omega~dot^2 + omega^2 sin^2 theta)/2 - mgR cos theta, and E - H = mR^2 omega^2 sin^2 theta while H is conserved"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, second edition (MIT Press, 2014/2015), Section 5.4.4: in rotating coordinates the Hamiltonians differ by the product of the angular momentum with the angular velocity of the coordinate system"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.2, printed pages 13-16 (PDF pages 19-22): Lagrange's equations in rotating coordinates, where the kinetic energy acquires the additional omega-dependent terms"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Example

Work in the one-label force model of [[post-cm02-force-superposition]] with
$N=1$, mass $m>0$, time window $I_{0}=\mathbb R$, configuration domain
$Q=\mathbb R^{3}$, and adopt the potential

$$U(x):=\tfrac{k}{2}\lvert x\rvert^{2},\qquad k>0\ \text{with}\ [k]=\mu\tau^{-2},$$

so that $F(t,x,v)=-\nabla U(x)=-kx$ and the model is a global potential model
$d\equiv0$ of [[def-cm03-potential-and-mechanical-energy]] whose motions
satisfy $mx''=-kx$ ([[def-cm02-newtonian-flow]]). Fix a rotation rate
$\omega\ne0$ of dimension $\tau^{-1}$ and let $\boldsymbol\omega:=\omega e_{3}$.
Define

$$R(t):=\begin{pmatrix}\cos(\omega t)&-\sin(\omega t)&0\\\sin(\omega t)&\cos(\omega t)&0\\0&0&1\end{pmatrix}.$$

This matrix is the rotation about $e_{3}$ by angle $\omega t$; the identity
$\sin^{2}(\omega t)+\cos^{2}(\omega t)=1$ gives $R(t)\in SO(3)$, and direct
differentiation gives $R'(t)z=\boldsymbol\omega\times R(t)z$
([[def-cm-special-orthogonal-group]], [[lem-cm-so3-is-a-matrix-group]],
[[def-cross-product-in-r3]]). Consider the time-dependent chart

$$X(t,q):=R(t)q,\qquad \Omega:=\mathbb R\times\mathbb R^{3},$$

which is of class $C^{\infty}$ with $X_{q}(t,q)=R(t)$ invertible, and the
substituted Lagrangian of [[pthm-cm07-coordinate-covariance-of-the-equations]]:

$$\widetilde L(t,q,v)=\tfrac{m}{2}\lvert v+\boldsymbol\omega\times q\rvert^{2}-\tfrac{k}{2}\lvert q\rvert^{2}.$$

Verify:

1. **Legendre data and chart Hamiltonian.** $\widetilde L$ is of mechanical
   type with $G=mI_{3}$, $A(q)=m\,\boldsymbol\omega\times q$ and
   $V(q)=\tfrac{k}{2}\lvert q\rvert^{2}-\tfrac{m}{2}\lvert\boldsymbol\omega\times q\rvert^{2}$,
   hence hyperregular with chart momentum $p=m(v+\boldsymbol\omega\times q)$ and
   Hamiltonian

$$H(t,q,p)=\frac{\lvert p\rvert^{2}}{2m}-p\cdot(\boldsymbol\omega\times q)+\frac{k}{2}\lvert q\rvert^{2}.$$

2. **Difference from the inertial mechanical energy.** Along every $C^{2}$
   curve $q:J\to\mathbb R^{3}$ on an interval $J\subseteq\mathbb R$ with nonempty interior, the
   inertial mechanical energy
   $E_{\mathrm{in}}=\tfrac{m}{2}\lvert x'\rvert^{2}+\tfrac{k}{2}\lvert x\rvert^{2}$
   with $x=X(t,q)$ and the chart energy function
   $e=q'\cdot\widetilde L_{v}-\widetilde L$ satisfy the difference identity of
   [[pthm-cm08-moving-chart-energy-function]] with
   $\langle X_{t},\mathsf M x'\rangle=p\cdot(\boldsymbol\omega\times q)$, i.e.
   $E_{\mathrm{in}}=H+p\cdot(\boldsymbol\omega\times q)$ along solutions.
3. **Explicit circular motion.** If $k=m\omega^{2}$, then
   $x(t):=r\,R(t)e_{1}$ with $r>0$ of dimension $\ell$ is a motion of the model on $\mathbb R$, its
   chart description is the constant curve $q(t)=re_{1}$ with
   $v\equiv0$ and $p\equiv m\,\boldsymbol\omega\times(re_{1})$, and along it
   $H\equiv0$ while $E_{\mathrm{in}}\equiv m\omega^{2}r^{2}$; the substituted
   Lagrangian has $\widetilde L_{t}\equiv0$, so $H$ is a conserved quantity of
   the chart equations that is not the inertial mechanical energy.
4. **Numerical instance.** For $m=1\,\mathrm{kg}$, $\omega=2\,\mathrm s^{-1}$,
   $r=1\,\mathrm m$ and $k=4\,\mathrm{kg}\,\mathrm s^{-2}$ one has at $t=0$ the
   data $x=(1,0,0)\,\mathrm m$, $x'=(0,2,0)\,\mathrm m\,\mathrm s^{-1}$,
   $q=(1,0,0)$, $v=0$ and $p=(0,2,0)\,\mathrm{kg}\,\mathrm m\,\mathrm s^{-1}$,
   with $H=0\,\mathrm J$ and $E_{\mathrm{in}}=4\,\mathrm J$.

All values are model values of the declared idealization; no measurement is
reported.

## Facts & Assumptions

**Given:** The oscillator model, the rotating chart $X$, the substituted Lagrangian $\widetilde L$, the circular motion and the numerical instance.

[F1] The model and its motions ([[def-cm07-action-and-mechanical-lagrangian]], [[def-cm03-potential-and-mechanical-energy]], [[def-cm02-newtonian-flow]], [[post-cm02-force-superposition]]): $F=-\nabla U=-kx$ with $d\equiv0$; a motion satisfies $mx''=-kx$; $E_{L}(x)=-(mx''+\nabla U)$ along curves ([[pthm-cm07-euler-lagrange-equations]]).

[F2] The chart and substituted data ([[pthm-cm07-coordinate-covariance-of-the-equations]], [[pthm-cm08-moving-chart-energy-function]]): $\widetilde L(t,q,v)=L(t,X(t,q),X_{t}+X_{q}v)$ with $X_{t}(t,q)=R'(t)q=\boldsymbol\omega\times R(t)q$; along the curve $E_{\widetilde L}(q)=X_{q}^{\mathsf T}E_{L}(x)$; and the difference identity $E_{\mathrm{in}}=e+\langle X_{t},\mathsf M x'\rangle$ holds for every presentation, with $e=q'\cdot\widetilde L_{v}-\widetilde L$.

[F3] Mechanical chart Lagrangians and their Hamiltonians ([[prop-cm-mechanical-chart-lagrangian-is-hyperregular]], [[def-cm-legendre-map-in-a-time-dependent-chart]]): for $\mathcal L=\tfrac12v^{\mathsf T}Gv+A\cdot v-V$ with $G$ symmetric positive definite, the Legendre map is $v\mapsto Gv+A$ with inverse $v=G^{-1}(p-A)$ and the Hamiltonian is $\tfrac12(p-A)^{\mathsf T}G^{-1}(p-A)+V$.

[F4] Conservation of the chart energy function ([[pthm-cm08-moving-chart-energy-function]] clause 3, [[prop-cm-hamiltonian-branch-identities]]): if $\mathcal L_{t}$ vanishes along a curve solving $E_{\mathcal L}=0$ on a hyperregular chart, then $e$ is constant along it, and $e$ equals the branch Hamiltonian along solutions.

[F5] Rotations and trigonometry ([[def-cm-special-orthogonal-group]], [[lem-cm-so3-is-a-matrix-group]], [[def-cross-product-in-r3]], [[lem-cross-product-is-bilinear-alternating-and-orthogonal]], [[def-sine-and-cosine-by-power-series]], [[thm-sine-and-cosine-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[def-matrix-product-and-identity-matrix]], [[def-euclidean-inner-product]], [[def-vector-valued-derivative-and-integral]], [[def-interval]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-jacobian-matrix-and-gradient]], [[def-cm01-units]], [[def-cm01-configuration]]): from the displayed matrix and $\sin^{2}(\omega t)+\cos^{2}(\omega t)=1$ we have $R(t)^{\mathsf T}R(t)=I_{3}$ and $\det R(t)=1$, so $R(t)\in SO(3)$ and $\lvert R(t)z\rvert=\lvert z\rvert$. The matrix is $C^{\infty}$, and differentiating its entries gives $R'(t)z=\boldsymbol\omega\times R(t)z$; also $R(t)e_{1}=(\cos\omega t,\sin\omega t,0)$ traces the unit circle in the $(e_{1},e_{2})$-plane. The cross product is bilinear and alternating, and $\boldsymbol\omega\times(\boldsymbol\omega\times q)=\boldsymbol\omega(\boldsymbol\omega\cdot q)-\lvert\boldsymbol\omega\rvert^{2}q$.

## Verification

**Proof technique:** direct; expand the substituted Lagrangian and its Legendre data, compare the chart Hamiltonian with the inertial mechanical energy on the explicit chart and motion, and evaluate the numerical instance.

1.1 Clause 1: by [F5], $R(t)\in SO(3)$ and preserves the Euclidean norm, so $\lvert X_{t}+X_{q}v\rvert=\lvert R(t)(\boldsymbol\omega\times q+v)\rvert=\lvert v+\boldsymbol\omega\times q\rvert$; hence the substituted Lagrangian is the displayed expression. Expanding the square gives $\widetilde L=\tfrac{m}{2}\lvert v\rvert^{2}+m\,v\cdot(\boldsymbol\omega\times q)+\tfrac{m}{2}\lvert\boldsymbol\omega\times q\rvert^{2}-\tfrac{k}{2}\lvert q\rvert^{2}$, which is of mechanical type with $G=mI_{3}$, $A=m\,\boldsymbol\omega\times q$ and $V=\tfrac{k}{2}\lvert q\rvert^{2}-\tfrac{m}{2}\lvert\boldsymbol\omega\times q\rvert^{2}$; by [F3] it is hyperregular with $p=m(v+\boldsymbol\omega\times q)$ and Hamiltonian $$H=\frac{1}{2m}\bigl\lvert p-m(\boldsymbol\omega\times q)\bigr\rvert^{2}+\frac{k}{2}\lvert q\rvert^{2}-\frac{m}{2}\lvert\boldsymbol\omega\times q\rvert^{2}=\frac{\lvert p\rvert^{2}}{2m}-p\cdot(\boldsymbol\omega\times q)+\frac{k}{2}\lvert q\rvert^{2}.$$ [F2, F3, F5, algebra]

1.2 Clause 3, the circular motion is a motion: for $x(t)=rR(t)e_{1}$ one has $x'(t)=r\,\boldsymbol\omega\times R(t)e_{1}$ and $x''(t)=r\,\boldsymbol\omega\times(\boldsymbol\omega\times R(t)e_{1})=-r\lvert\boldsymbol\omega\rvert^{2}R(t)e_{1}=-\omega^{2}x(t)$ by [F5]; hence $mx''=-m\omega^{2}x=-kx$ exactly when $k=m\omega^{2}$, which is the hypothesis, so $x$ is a motion. [F1, F5, algebra]

1.3 Clause 2, the identification: by [F2] the difference identity reads $E_{\mathrm{in}}=e+\langle X_{t},\mathsf M x'\rangle$ with $X_{t}=\boldsymbol\omega\times R(t)q$ and $\mathsf M x'=m x'=mR(t)(v+\boldsymbol\omega\times q)=R(t)p$, so $\langle X_{t},\mathsf M x'\rangle=\langle\boldsymbol\omega\times R(t)q,R(t)p\rangle=\langle\boldsymbol\omega\times q,p\rangle=p\cdot(\boldsymbol\omega\times q)$ by orthogonality of $R(t)$; on a chart solution $e=H$ by [F4], which gives the displayed identity $E_{\mathrm{in}}=H+p\cdot(\boldsymbol\omega\times q)$. [F2, F4, F5, algebra]

2.1 Clause 3, the chart description and the two values: the chart description of the motion is $q(t)=R(t)^{\mathsf T}x(t)=re_{1}$, constant, so $v\equiv0$ and $p=m(\boldsymbol\omega\times re_{1})$ is constant, and $E_{\widetilde L}(q)=R(t)^{\mathsf T}E_{L}(x)=0$ along the motion by [F2] and [F1]; since $\widetilde L_{t}\equiv0$, [F4] gives that $e$ is constant, and by clause 1 and step 1.3 it equals $H=\tfrac{\lvert p\rvert^{2}}{2m}-p\cdot(\boldsymbol\omega\times re_{1})+\tfrac{k}{2}r^{2}$; substituting $p=m(\boldsymbol\omega\times re_{1})$, $\lvert p\rvert^{2}=m^{2}\omega^{2}r^{2}$ and $p\cdot(\boldsymbol\omega\times re_{1})=m\omega^{2}r^{2}$ gives $H=\tfrac{m\omega^{2}r^{2}}{2}-m\omega^{2}r^{2}+\tfrac{m\omega^{2}r^{2}}{2}=0$ when $k=m\omega^{2}$; the inertial mechanical energy is $E_{\mathrm{in}}=\tfrac{m}{2}\lvert x'\rvert^{2}+\tfrac{k}{2}r^{2}=\tfrac{m\omega^{2}r^{2}}{2}+\tfrac{m\omega^{2}r^{2}}{2}=m\omega^{2}r^{2}$. [F1, F2, F4, F5, step 1.1, step 1.2, step 1.3, algebra]

3.1 Clause 4, numerical instance: with $m=1$, $\omega=2$, $r=1$ and $k=4$ one has $\boldsymbol\omega=(0,0,2)$ and at $t=0$: $x=(1,0,0)$, $x'=\boldsymbol\omega\times e_{1}=(0,2,0)$, $q=(1,0,0)$, $v=0$ and $p=m(v+\boldsymbol\omega\times q)=(0,2,0)$ in the stated units; then $E_{\mathrm{in}}=\tfrac12(4)+\tfrac42=2+2=4\,\mathrm J$ and $H=\tfrac{4}{2}-(0,2,0)\cdot(0,2,0)+\tfrac42=2-4+2=0\,\mathrm J$, in agreement with clause 3. [F5, step 1.1, step 2.1, algebra]

4.1 Clauses 1, 2, 3 and 4 are steps 1.1, 1.3, 1.2, 2.1 and 3.1; the example exhibits a moving chart in which the conserved chart Hamiltonian differs from the inertial mechanical energy by $p\cdot(\boldsymbol\omega\times q)$, verifying the difference identity and the moving-chart conservation clause of the pair on explicit data, and it reports no measurement. [step 1.1, step 1.2, step 1.3, step 2.1, step 3.1] ∎

## Remarks

- **Comparison with the source picture.** The structure matches the rotating-ring computation of the Likharev source, where the Hamiltonian and the mechanical energy differ by an $\omega$-dependent term while the Hamiltonian is the conserved one; here the difference is $p\cdot(\boldsymbol\omega\times q)$, the exact general form of clause 2 of [[pthm-cm08-moving-chart-energy-function]] in this chart. The chart Hamiltonian is a conserved quantity of the chart equations; it is not a measurement of the inertial mechanical energy, and the example attaches no empirical meaning to its value.

- **Consistency of the two conserved quantities.** For the circular motion both $H=0$ and $E_{\mathrm{in}}=m\omega^{2}r^{2}$ are constant, as they must be, and they differ; the difference $p\cdot(\boldsymbol\omega\times q)$ is constant along this particular motion but is not a constant function on the chart's state space, so no global additive constant reconciles the two functions.
