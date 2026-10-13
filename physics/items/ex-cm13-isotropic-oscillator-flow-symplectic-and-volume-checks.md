---
id: ex-cm13-isotropic-oscillator-flow-symplectic-and-volume-checks
kind: example
title: "The isotropic oscillator of the model: explicit solution, the determinant and matrix tests on each two-dimensional block, and the area and energy checks"
status: published
origin: session
domain: physics
dependency_level: 23
deps: [def-cm13-two-form, pthm-cm13-two-form-is-symplectic, def-cm13-canonical-form, def-cm13-canonical-map, def-cm13-hamiltonian-field, pthm-cm13-hamiltonian-field-integrates-the-model-equations, def-cm13-poisson, pthm-cm13-flow-preservation, pthm-cm13-observable-evolution, pthm-cm12-mechanical-hyperregularity, def-cm12-hamiltonian, def-cm07-action-and-mechanical-lagrangian, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm01-configuration, def-cm01-units, def-cm02-newtonian-flow, prop-cm-canonical-map-tests-and-hamiltonian-transport, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-matrix-product-and-identity-matrix, def-linear-map, def-determinant-of-a-square-matrix, def-euclidean-inner-product, thm-sine-and-cosine-derivatives, thm-sine-and-cosine-addition-formulas, def-sine-and-cosine-by-power-series]
dependency_roles:
  def-cm13-two-form: formulation-prerequisite
  pthm-cm13-two-form-is-symplectic: physical-result
  def-cm13-canonical-form: formulation-prerequisite
  def-cm13-canonical-map: formulation-prerequisite
  def-cm13-hamiltonian-field: formulation-prerequisite
  pthm-cm13-hamiltonian-field-integrates-the-model-equations: physical-result
  def-cm13-poisson: formulation-prerequisite
  pthm-cm13-flow-preservation: physical-result
  pthm-cm13-observable-evolution: physical-result
  pthm-cm12-mechanical-hyperregularity: physical-result
  def-cm12-hamiltonian: formulation-prerequisite
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  prop-cm-canonical-map-tests-and-hamiltonian-transport: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-linear-map: mathematical-premise
  def-determinant-of-a-square-matrix: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked verification of the symplectic and volume-preserving character of the model's Hamiltonian flow on the isotropic oscillator instance: the explicit solution of the one-label model with potential $(k/2)\\lvert x\\rvert^{2}$, the block matrix identity and unit determinant of its time-$t$ map, the area and six-volume checks on explicit boxes, and the constancy of the oscillator energy. All quantities are model values of the declared idealization; no measurement is reported."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Sections 4.2, 4.4.1 and 4.5.1, printed pages 88-90, 102-103 and 105-107 (PDF pages 94-96, 108-109 and 111-113): the harmonic oscillator in phase space, the area-preserving rotation of its flow and the determinant computation for the Hamiltonian map"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, second edition (MIT Press, 2014/2015), Sections 5.2-5.3: the symplectic derivative of the oscillator flow and the preservation of the phase-space area"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
verification:
  precheck: pass
---
## Example

Declare the one-label model of the force branch
[[post-cm02-force-superposition]] with $N=1$, mass $m>0$, time window
$\mathbb R$, configuration domain $Q=\mathbb R^{3}$, the time-independent
potential $U(x)=\tfrac12k\lvert x\rvert^{2}$ with $k>0$ and no residual forces
([[def-cm01-configuration]], [[def-cm03-potential-and-mechanical-energy]],
[[def-cm07-action-and-mechanical-lagrangian]]); this is the **isotropic
oscillator instance**. By [[pthm-cm12-mechanical-hyperregularity]] the branch
Hamiltonian is

$$H(x,p)=\frac{\lvert p\rvert^{2}}{2m}+\frac{k\lvert x\rvert^{2}}{2},\qquad \omega_{0}:=\sqrt{k/m}>0,$$

The stiffness and angular frequency have dimensions $[k]=\mu\tau^{-2}$ and
$[\omega_0]=\tau^{-1}$. The grouped phase coordinates are
$z=(x^1,x^2,x^3,p_1,p_2,p_3)$, with $[x^a]=\ell$ and
$[p_a]=\mu\ell\tau^{-1}$; hence the six-dimensional phase-volume unit is
$[\omega^{\wedge3}/3!]=(\mu\ell^2\tau^{-1})^3$, action cubed.

on the Cartesian phase domain $\mathbb R^{6}$, with the two-form
$\omega=\sum_{a=1}^{3}dx^{a}\wedge dp_{a}$
([[def-cm13-two-form]], [[pthm-cm13-two-form-is-symplectic]]) and the
Hamiltonian field $X_{H}=(\mathsf M^{-1}p,-\nabla_{x}U)$
([[def-cm13-hamiltonian-field]], [[pthm-cm13-hamiltonian-field-integrates-the-model-equations]]).
Then:

1. for every initial datum $(x,p)$ the curve

$$x^{a}(t)=x^{a}\cos(\omega_{0}t)+\frac{p_{a}}{m\omega_{0}}\sin(\omega_{0}t),\qquad p_{a}(t)=-m\omega_{0}x^{a}\sin(\omega_{0}t)+p_{a}\cos(\omega_{0}t)\qquad(a=1,2,3)$$

   solves the Hamiltonian system for all $t\in\mathbb R$;
2. in the grouped order $z=(x,p)$ its derivative is
   $$D\Phi_t=\begin{pmatrix}cI_3&(m\omega_0)^{-1}sI_3\\-m\omega_0sI_3&cI_3\end{pmatrix},\qquad c=\cos(\omega_0t),\quad s=\sin(\omega_0t),$$
   and for $J_{\mathrm{gr}}=\begin{pmatrix}0&I_3\\-I_3&0\end{pmatrix}$
   direct block multiplication gives $D\Phi_t^{\mathsf T}J_{\mathrm{gr}}D\Phi_t=J_{\mathrm{gr}}$ because $c^2+s^2=1$. If
   $T(x^1,x^2,x^3,p_1,p_2,p_3)=(x^1,p_1,x^2,p_2,x^3,p_3)$ is the
   permutation to interleaved order, then $TD\Phi_tT^{-1}=\operatorname{diag}(A,A,A)$ and $TJ_{\mathrm{gr}}T^{-1}=\operatorname{diag}(J_2,J_2,J_2)$, where
   $A=\begin{pmatrix}c&(m\omega_0)^{-1}s\\-m\omega_0s&c\end{pmatrix}$;
   each block satisfies $A^{\mathsf T}J_2A=J_2$ and $\det A=1$.
   Therefore $\det D\Phi_t=(\det A)^3=1$, so the time-$t$ map is canonical
   ([[pthm-cm13-flow-preservation]],
   [[prop-cm-canonical-map-tests-and-hamiltonian-transport]]);
3. explicit volume check in the numeric coordinates measured in the declared
   SI units: the image of the unit square
   $[0,1]^{2}\subseteq\{(x^{1},p_{1})\}$ under $A$ is the parallelogram with
   area $\lvert\det A\rvert=1$, and the image of the box
   $[0,1]^{3}\times[0,1]^{3}$ has numeric six-volume
   $|\det D\Phi_t|=1$, corresponding to physical phase-volume dimension
   action cubed;
4. the energy is constant along the flow,
   $H(x(t),p(t))=H(x,p)$, and $\{H,H\}=0$
   ([[pthm-cm13-observable-evolution]] clause 2).

All quantities are model values of the declared idealization; no measurement
is reported.

## Facts & Assumptions

**Given:** The one-label isotropic oscillator instance with its Hamiltonian,
field, two-form and bracket, and the displayed curve $t\mapsto(x(t),p(t))$.

[F1] Model and Hamiltonian ([[pthm-cm12-mechanical-hyperregularity]], [[def-cm12-hamiltonian]], [[def-cm03-potential-and-mechanical-energy]], [[post-cm02-force-superposition]], [[def-cm01-configuration]], [[def-cm01-units]]): $H=\lvert p\rvert^{2}/(2m)+k\lvert x\rvert^{2}/2$ with $H_p=m^{-1}p$, $H_x=kx$, and $U_x=kx$; $[k]=\mu\tau^{-2}$, $[\omega_0]=\tau^{-1}$, and $[\omega^{\wedge3}/3!]=(\mu\ell^2\tau^{-1})^3$; the oscillator equation is $mx''=-kx$.

[F2] Field, forms and canonicity ([[def-cm13-two-form]], [[pthm-cm13-two-form-is-symplectic]], [[def-cm13-hamiltonian-field]], [[pthm-cm13-hamiltonian-field-integrates-the-model-equations]], [[pthm-cm13-flow-preservation]], [[prop-cm-canonical-map-tests-and-hamiltonian-transport]]): the Hamiltonian system is $\dot x=m^{-1}p$, $\dot p=-kx$; the two-form is $\omega=\sum_{a}dx^{a}\wedge dp_{a}$ with standard matrix $J$, and a $C^{1}$ map with $DC^{\mathsf T}J\,DC=J$ is canonical with $\lvert\det DC\rvert=1$.

[F3] Sine and cosine calculus ([[thm-sine-and-cosine-derivatives]], [[thm-sine-and-cosine-addition-formulas]], [[def-sine-and-cosine-by-power-series]], [[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]], [[def-matrix-product-and-identity-matrix]], [[def-linear-map]], [[def-determinant-of-a-square-matrix]], [[def-euclidean-inner-product]], [[def-ck-euclidean-maps-and-diffeomorphisms]]): the derivatives of sine and cosine are known, $\sin^{2}+\cos^{2}=1$, and the displayed derivatives, products and determinants are computed by the ordinary rules.

[F4] Evolution identity ([[pthm-cm13-observable-evolution]], [[def-cm13-poisson]]): along any solution of the Hamiltonian system, $\frac{d}{dt}f(x(t),p(t))=\{f,H\}(x(t),p(t))$ for autonomous $C^{1}$ functions, and autonomous functions whose bracket with $H$ vanishes identically are constant along solutions.

## Verification

**Proof technique:** direct. Differentiate the displayed formulas, verify the two block identities by matrix multiplication, evaluate the determinant and the constancy of the energy.

1.1 The curve solves the system: differentiating the displayed formula with the derivatives of [F3] gives $\dot x^{a}=-x^{a}\omega_{0}\sin+\frac{p_{a}}{m}\cos=m^{-1}p_{a}(t)$ and $\dot p_{a}=-m\omega_{0}^{2}x^{a}\cos-\omega_{0}p_{a}\sin=-k x^{a}(t)$ because $m\omega_{0}^{2}=k$; by [F2] this is exactly the Hamiltonian system, which proves claim 1. [F1, F2, F3, algebra]

1.2 Grouped-order canonical identity: with $c=\cos(\omega_0t)$ and $s=\sin(\omega_0t)$, the derivative is $M_t=\begin{pmatrix}cI_3&(m\omega_0)^{-1}sI_3\\-m\omega_0sI_3&cI_3\end{pmatrix}$ and $J_{\mathrm{gr}}=\begin{pmatrix}0&I_3\\-I_3&0\end{pmatrix}$. Block multiplication gives $M_t^{\mathsf T}J_{\mathrm{gr}}M_t=\begin{pmatrix}0&(c^2+s^2)I_3\\-(c^2+s^2)I_3&0\end{pmatrix}=J_{\mathrm{gr}}$. Under the declared permutation $T$ from grouped to interleaved order, $TM_tT^{-1}=\operatorname{diag}(A,A,A)$, so $\det M_t=(\det A)^3=(c^2+s^2)^3=1$. Thus the full six-dimensional derivative is canonical in the grouped coordinates and has unit determinant, proving claim 2. [F2, F3, algebra]

2.1 Volume checks and energy: on each coordinate pair $(x^a,p_a)$ the linear action is $A$, so the unit square maps to the parallelogram spanned by its columns and has numeric area $|\det A|=1$. The permutation $T$ in claim 2 identifies the grouped map with the product of these three pair maps; permutation does not change determinant, so the numeric six-volume of the unit box is $|\det D\Phi_t|=|\det A|^3=1$, which is one unit of action cubed under the declared SI coordinate scales (claim 3). For the energy, [F4] and $\{H,H\}=0$ give constancy of $H$ along the curve, and the direct computation $|p(t)|^2=m^2\omega_0^2|x|^2s^2-2m\omega_0(x\cdot p)cs+|p|^2c^2$, $|x(t)|^2=|x|^2c^2+\frac{2(x\cdot p)}{m\omega_0}cs+\frac{|p|^2}{m^2\omega_0^2}s^2$ gives $H(x(t),p(t))=\frac{|p|^2}{2m}+\frac{k|x|^2}{2}=H(x,p)$ after substituting $k=m\omega_0^2$, the mixed terms cancelling; this proves claim 4. [step 1.2, F1, F3, F4, algebra]

3.1 Collecting steps 1.1, 1.2 and 2.1 proves the four claims on the declared data. [step 1.1, step 1.2, step 2.1] ∎
