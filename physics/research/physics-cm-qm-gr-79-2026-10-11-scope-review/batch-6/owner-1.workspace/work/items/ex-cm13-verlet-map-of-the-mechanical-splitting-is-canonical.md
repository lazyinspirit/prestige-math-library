---
id: ex-cm13-verlet-map-of-the-mechanical-splitting-is-canonical
kind: example
title: "The velocity-Verlet step of the model's mechanical splitting is a canonical map of the presentation: exact flows of the drift and kick, unit determinant, and the oscillator check"
status: draft
origin: session
domain: physics
dependency_level: 22
deps: [def-cm13-two-form, pthm-cm13-two-form-is-symplectic, def-cm13-canonical-form, def-cm13-canonical-map, def-cm13-hamiltonian-field, pthm-cm13-flow-preservation, def-cm-splitting-hamiltonian-and-verlet-map, prop-cm-drift-kick-and-verlet-preserve-the-canonical-form, lem-cm-verlet-local-truncation-error-is-cubic, thm-cm-verlet-finite-time-error-is-quadratic, rem-cm-scope-of-the-certified-verlet-estimates, ex-cm13-determinant-tests-for-linear-canonical-maps, def-cm12-hamiltonian, pthm-cm12-mechanical-hyperregularity, def-cm07-action-and-mechanical-lagrangian, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm01-configuration, def-cm01-units, def-cm02-newtonian-flow, prop-cm-canonical-map-tests-and-hamiltonian-transport, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-matrix-product-and-identity-matrix, def-transpose-of-a-matrix, thm-determinant-of-transpose, def-determinant-of-a-square-matrix, def-linear-map, def-euclidean-inner-product]
dependency_roles:
  def-cm13-two-form: formulation-prerequisite
  pthm-cm13-two-form-is-symplectic: physical-result
  def-cm13-canonical-form: formulation-prerequisite
  def-cm13-canonical-map: formulation-prerequisite
  def-cm13-hamiltonian-field: formulation-prerequisite
  pthm-cm13-flow-preservation: physical-result
  def-cm-splitting-hamiltonian-and-verlet-map: mathematical-premise
  prop-cm-drift-kick-and-verlet-preserve-the-canonical-form: mathematical-premise
  lem-cm-verlet-local-truncation-error-is-cubic: mathematical-premise
  thm-cm-verlet-finite-time-error-is-quadratic: mathematical-premise
  rem-cm-scope-of-the-certified-verlet-estimates: mathematical-premise
  ex-cm13-determinant-tests-for-linear-canonical-maps: mathematical-premise
  def-cm12-hamiltonian: formulation-prerequisite
  pthm-cm12-mechanical-hyperregularity: physical-result
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
  def-transpose-of-a-matrix: mathematical-premise
  thm-determinant-of-transpose: mathematical-premise
  def-determinant-of-a-square-matrix: mathematical-premise
  def-linear-map: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked verification that the velocity-Verlet step of the declared one-label potential presentation is a canonical map: the drift and kick are the exact time-$h$ flows of the kinetic and potential parts of the branch Hamiltonian, the composite satisfies the matrix identity in exact arithmetic, and the isotropic-oscillator instance is checked explicitly with unit determinant. All quantities are model values of the declared idealization in exact arithmetic; no measurement or roundoff claim is made."
sources:
  references:
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, second edition (MIT Press, 2014/2015), Sections 3.1 and 5.2.2: the symplectic character of the split-step integration of a mechanical Hamiltonian and the canonical condition in matrix form"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 10.1, chapter pages 2-3 (PDF pages 238-239): the split kinetic/potential structure of the mechanical Hamiltonian whose parts generate the drift and kick maps"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---
## Example

Declare the one-label model of the force branch
[[post-cm02-force-superposition]] with $N=1$, mass $m>0$, time window
$\mathbb R$, configuration domain $Q=\mathbb R^{3}$, a time-independent
$C^{3}$ potential $U$ and no residual forces
([[def-cm01-configuration]], [[def-cm03-potential-and-mechanical-energy]],
[[def-cm07-action-and-mechanical-lagrangian]]); by
[[pthm-cm12-mechanical-hyperregularity]] the branch Hamiltonian is
$H(x,p)=\lvert p\rvert^{2}/(2m)+U(x)$ ([[def-cm12-hamiltonian]]). Consider
the **mechanical splitting** $H=A+B$ with
$A(x,p)=\lvert p\rvert^{2}/(2m)$ and $B(x,p)=U(x)$, the drift and kick maps

$$D_{h}(x,p)=\bigl(x+h\,m^{-1}p,\ p\bigr),\qquad K_{h}(x,p)=\bigl(x,\ p-h\nabla U(x)\bigr),$$

and the **velocity-Verlet map** $V_{h}=K_{h/2}\circ D_{h}\circ
K_{h/2}$, defined wherever the composition exists
([[def-cm-splitting-hamiltonian-and-verlet-map]] with the mass matrix
$\mathsf M=mI_{3}$ and $V=U$). Then:

1. $D_{h}$ is the exact time-$h$ flow of the Hamiltonian field of $A$, whose
   components are $X_{A}=(m^{-1}p,0)$; and $K_{h}$ is the exact time-$h$
   flow of the field of $B$, $X_{B}=(0,-\nabla U(x))$, because along the
   horizontal trajectory $x$ is constant and the momentum moves at the
   constant rate $-\nabla U(x)$;
2. consequently $V_{h}$ is a canonical map of the presentation in exact
   arithmetic: $DV_{h}^{\mathsf T}J\,DV_{h}=J$ and
   $V_{h}^{*}\omega=\omega$ wherever $V_{h}$ is defined and $C^{1}$
   ([[prop-cm-drift-kick-and-verlet-preserve-the-canonical-form]],
   [[def-cm13-canonical-map]],
   [[prop-cm-canonical-map-tests-and-hamiltonian-transport]]); the separate
   drift and kick maps are canonical as well, and each is the time slice of
   an exact Hamiltonian flow, hence also an instance of
   [[pthm-cm13-flow-preservation]];
3. explicit check on the isotropic oscillator instance $U(x)=\tfrac12k\lvert
   x\rvert^{2}$ with $k>0$: on each coordinate pair,

$$V_{h}(q,p)=\Bigl(q+\frac{h}{m}p-\frac{h^{2}k}{2m}q,\ \ p-hkq-\frac{h^{2}k}{2m}p+\frac{h^{3}k^{2}}{4m}q\Bigr),\qquad DV_{h}=\begin{pmatrix}1-\frac{h^{2}k}{2m}&\frac{h}{m}\\-hk+\frac{h^{3}k^{2}}{4m}&1-\frac{h^{2}k}{2m}\end{pmatrix},$$

   and $\det DV_{h}=\bigl(1-\frac{h^{2}k}{2m}\bigr)^{2}-\frac{h}{m}\bigl(-hk+\frac{h^{3}k^{2}}{4m}\bigr)=1$;
   in dimension two, $\det DV_{h}=1$ is equivalent to canonicity
   ([[ex-cm13-determinant-tests-for-linear-canonical-maps]]), and the full
   $6\times6$ map is block diagonal with this block, so the matrix identity
   and $\det DV_{h}=1$ hold on the whole isotropic instance;
4. accuracy and scope: in exact arithmetic the step matches the exact flow
   through order two, with cubic local truncation error and quadratic
   finite-time error ([[lem-cm-verlet-local-truncation-error-is-cubic]],
   [[thm-cm-verlet-finite-time-error-is-quadratic]]); roundoff, all-time
   energy claims and the holomorphic-domain hypotheses of the analytic
   estimates are outside this example and are governed by
   [[rem-cm-scope-of-the-certified-verlet-estimates]].

All statements are about exact arithmetic on the declared idealization; no
measurement or floating-point claim is made.

## Facts & Assumptions

**Given:** The one-label model with its branch Hamiltonian and its mechanical
splitting, the drift and kick maps, and the velocity-Verlet composite.

[F1] Model and Hamiltonian ([[pthm-cm12-mechanical-hyperregularity]], [[def-cm12-hamiltonian]], [[def-cm03-potential-and-mechanical-energy]], [[post-cm02-force-superposition]], [[def-cm01-configuration]], [[def-cm01-units]]): $H=\lvert p\rvert^{2}/(2m)+U(x)$ with $H_{p}=m^{-1}p$, $H_{x}=\nabla U(x)$, and the force is $-\nabla U$.

[F2] Splitting and its canonical maps ([[def-cm-splitting-hamiltonian-and-verlet-map]], [[prop-cm-drift-kick-and-verlet-preserve-the-canonical-form]], [[def-cm13-canonical-map]], [[prop-cm-canonical-map-tests-and-hamiltonian-transport]], [[pthm-cm13-flow-preservation]]): with $A$, $B$, $D_{h}$, $K_{h}$, $V_{h}=K_{h/2}\circ D_{h}\circ K_{h/2}$ as in the cited definition, $DD_{h}^{\mathsf T}J\,DD_{h}=J$, $DK_{h}^{\mathsf T}J\,DK_{h}=J$ and $DV_{h}^{\mathsf T}J\,DV_{h}=J$ on the sets where the maps are defined; $D_{h}$ and $K_{h}$ are the time-$h$ maps of the local flows of the fields of $A$ and $B$.

[F3] Oscillator checks ([[ex-cm13-determinant-tests-for-linear-canonical-maps]], [[def-matrix-product-and-identity-matrix]], [[def-transpose-of-a-matrix]], [[thm-determinant-of-transpose]], [[def-determinant-of-a-square-matrix]], [[def-linear-map]], [[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-euclidean-inner-product]]): in dimension two a matrix with $\det A=1$ satisfies $A^{\mathsf T}J_{2}A=J_{2}$; gradients of $\lvert x\rvert^{2}$ are $2x$; matrix products, transposes and determinants are computed by the ordinary rules.

[F4] Error estimates ([[lem-cm-verlet-local-truncation-error-is-cubic]], [[thm-cm-verlet-finite-time-error-is-quadratic]]): the velocity-Verlet step has cubic local truncation error and quadratic finite-time error on compact tubes in exact arithmetic, and the recorded scope limits of the numerical page govern roundoff and all-time statements.

## Verification

**Proof technique:** direct. Identify the drift and kick with the exact flows of the two parts, apply the canonical-form preservation of the splitting maps, and evaluate the oscillator composite and its determinant.

1.1 On the Cartesian chart the fields are $X_{A}=(m^{-1}p,0)$ and $X_{B}=(0,-\nabla U(x))$; the curve $t\mapsto(x+tm^{-1}p,p)$ solves $\dot x=m^{-1}p$, $\dot p=0$, so it is the time-$h$ map $D_{h}$ of $X_{A}$, and the curve $t\mapsto(x,p-t\nabla U(x))$ solves $\dot x=0$, $\dot p=-\nabla U(x)$, so it is the time-$h$ map $K_{h}$ of $X_{B}$; this is claim 1. [F1, F2, algebra]

1.2 Canonical character: by [F2] the derivatives of $D_{h}$, $K_{h}$ and their composite $V_{h}$ satisfy the matrix identity, hence by [F2] each map is canonical and preserves the two-form; the drift and kick are exact Hamiltonian time slices, so they are also instances of the flow-preservation theorem; this is claim 2. [F2]

1.3 Oscillator composite: for $U=\tfrac12k\lvert x\rvert^{2}$ one has $\nabla U=kx$; applying $K_{h/2}$, then $D_{h}$, then $K_{h/2}$ to $(q,p)$ in one coordinate pair gives successively $(q,p-\tfrac{h}{2}kq)$, then $(q+\tfrac{h}{m}(p-\tfrac{h}{2}kq),p-\tfrac{h}{2}kq)$, then the displayed $V_{h}(q,p)$ after collecting terms; its derivative computed by [F3] is the displayed matrix, with determinant $\bigl(1-\frac{h^{2}k}{2m}\bigr)^{2}-\frac{h}{m}\bigl(-hk+\frac{h^{3}k^{2}}{4m}\bigr)=1-\frac{h^{2}k}{m}+\frac{h^{4}k^{2}}{4m^{2}}+\frac{h^{2}k}{m}-\frac{h^{4}k^{2}}{4m^{2}}=1$; by [F3] the two-dimensional determinant test gives $DV_{h}^{\mathsf T}J_{2}DV_{h}=J_{2}$ for the block, and the block-diagonal composition yields the identity for the full map; this is claim 3. [F1, F2, F3, algebra]

2.1 Accuracy and scope: the instantiated step is the velocity-Verlet map of the splitting data, so [F4] applies and gives the cubic local and quadratic finite-time error statements in exact arithmetic, with the recorded scope limitations; this is claim 4. [step 1.2, F4]

3.1 Collecting steps 1.1, 1.2, 1.3 and 2.1 proves the four claims on the declared data. [step 1.1, step 1.2, step 1.3, step 2.1] ∎
