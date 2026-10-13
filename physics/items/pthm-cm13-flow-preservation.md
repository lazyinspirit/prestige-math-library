---
id: pthm-cm13-flow-preservation
kind: physics-theorem
title: "The Hamiltonian evolution of a potential presentation preserves the
  two-form, the bracket and the determinant on its actual time-slice domains,
  also when the Hamiltonian depends on time"
status: published
origin: session
domain: physics
dependency_level: 21
deps:
  - def-cm13-two-form
  - pthm-cm13-two-form-is-symplectic
  - def-cm13-canonical-form
  - def-cm13-hamiltonian-field
  - def-cm13-canonical-map
  - pthm-cm13-hamiltonian-field-integrates-the-model-equations
  - def-cm12-hamiltonian
  - pthm-cm12-mechanical-hyperregularity
  - def-cm07-action-and-mechanical-lagrangian
  - def-cm03-potential-and-mechanical-energy
  - post-cm02-force-superposition
  - def-cm01-configuration
  - def-cm01-units
  - def-cm02-newtonian-flow
  - thm-continuous-dependence-of-odes-on-initial-data-and-parameters
  - thm-c1-dependence-of-solutions-on-initial-data
  - def-variational-equation-along-an-ode-solution
  - def-first-order-ode-initial-value-problem-and-solution
  - def-interval
  - cor-zero-derivative-implies-constant
  - cor-hessian-is-symmetric
  - def-hessian-and-euclidean-critical-point
  - def-matrix-product-and-identity-matrix
  - def-transpose-of-a-matrix
  - def-invertible-matrix-and-general-linear-group
  - cor-square-matrix-invertible-iff-determinant-is-a-unit
  - thm-determinant-multiplicative
  - thm-determinant-of-transpose
  - def-determinant-of-a-square-matrix
  - def-linear-map
  - def-jacobian-matrix-and-gradient
  - def-directional-and-partial-derivatives
  - thm-chain-rule-for-total-derivatives
  - def-ck-euclidean-maps-and-diffeomorphisms
  - def-metric-topology
  - prop-cm-canonical-map-tests-and-hamiltonian-transport
  - prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart
  - def-cm-phase-domain-and-standard-symplectic-two-form
  - def-cm13-poisson
dependency_roles:
  def-cm13-two-form: formulation-prerequisite
  pthm-cm13-two-form-is-symplectic: physical-result
  def-cm13-canonical-form: formulation-prerequisite
  def-cm13-hamiltonian-field: formulation-prerequisite
  def-cm13-canonical-map: formulation-prerequisite
  pthm-cm13-hamiltonian-field-integrates-the-model-equations: physical-result
  def-cm12-hamiltonian: formulation-prerequisite
  pthm-cm12-mechanical-hyperregularity: physical-result
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  thm-continuous-dependence-of-odes-on-initial-data-and-parameters: mathematical-premise
  thm-c1-dependence-of-solutions-on-initial-data: mathematical-premise
  def-variational-equation-along-an-ode-solution: mathematical-premise
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  def-interval: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  cor-hessian-is-symmetric: mathematical-premise
  def-hessian-and-euclidean-critical-point: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
  def-invertible-matrix-and-general-linear-group: mathematical-premise
  cor-square-matrix-invertible-iff-determinant-is-a-unit: mathematical-premise
  thm-determinant-multiplicative: mathematical-premise
  thm-determinant-of-transpose: mathematical-premise
  def-determinant-of-a-square-matrix: mathematical-premise
  def-linear-map: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-metric-topology: mathematical-premise
  prop-cm-canonical-map-tests-and-hamiltonian-transport: mathematical-premise
  prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart: mathematical-premise
  def-cm-phase-domain-and-standard-symplectic-two-form: mathematical-premise
  def-cm13-poisson: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Preservation of the symplectic structure by the model's
  Hamiltonian evolution: on the actual time-slice domains of a $C^{2}$ branch
  Hamiltonian, also for a time-dependent Hamiltonian, the equal-dimensional
  solution maps are local canonical transformations, preserve the bracket of
  $C^{2}$ phase functions (with the resulting $C^1$ compositions read through
  the defined pointwise bracket extension) and have unit determinant; hence the
  model's potential-branch flow preserves the presentation's two-form locally in
  time. The statement is a conditional deduction from the adopted force branch,
  the declared presentation and the cited mathematics; no completeness, all-time
  assertion or measured value is claimed."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015
        printing), Sections 4.2 and 4.4.1, printed pages 88-90 and 102-103 (PDF
        pages 94-96 and 108-109): the Jacobian computation showing det $J=1$ for
        the Hamiltonian map in one step of time, and the statement that time
        evolution is a canonical transformation generated by the Hamiltonian"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition,
        University of Rochester River Campus Libraries, open textbook, CC
        BY-NC-SA 4.0), Sections 15.1-15.2: the local evolution of phase-space
        variables under the Hamiltonian flow and the preservation of the
        phase-space structure in time"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical
        Mechanics, second edition (MIT Press, 2014/2015), Section 5.3: time
        evolution generates a canonical transformation, so the symplectic
        two-form and the Poisson bracket are preserved by the flow"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9\
        579/sicm_edition_2.zip"
verification:
  precheck: pass
---
## Statement

Adopt the force model with potential presentation $(U,d)$ and mechanical
Lagrangian $L=K-U$ of [[def-cm07-action-and-mechanical-lagrangian]] with the
momentum charts and two-form datum of [[def-cm13-two-form]], the canonical
coordinates of [[def-cm13-canonical-form]], the canonical maps of
[[def-cm13-canonical-map]] and the Hamiltonian field of
[[def-cm13-hamiltonian-field]]: the Cartesian Hamiltonian
$H(t,x,p)=\tfrac12p\cdot\mathsf M^{-1}p+U(t,x)$ of class $C^{2}$ on
$I_{0}\times W$, where the potential $U$ and the residual forces $d$ are
those of [[def-cm03-potential-and-mechanical-energy]],
[[post-cm02-force-superposition]] and the data are those of
[[def-cm01-configuration]], [[def-cm01-units]]
([[def-cm12-hamiltonian]], [[pthm-cm12-mechanical-hyperregularity]]). Let
$t_{0}\in I_{0}$ and $z_{0}\in W$. Then there are reals $h>0$, $\rho>0$ and
an open neighbourhood $U_{0}\subseteq W$ of $z_{0}$ such that:

1. **(solution map)** the solutions $t\mapsto\Phi(t;y)$ of the Hamiltonian
   system $\dot z(t)=X_{H_{t}}(z(t))$ through $y\in U_{0}$ at time $t_{0}$
   are defined for $t\in[t_{0}-h,t_{0}+h]$, and the solution map
   $\Phi:[t_{0}-h,t_{0}+h]\times U_{0}\to W$ is $C^{1}$ in $y$; for each
   fixed $t$ the time-$t$ map $\Phi_{t}:=\Phi(t;\cdot)$ is a canonical map
   of the presentation between equal-dimensional phase domains, and thus a
   local canonical transformation on $U_{0}$:

$$D\Phi_{t}(y)^{\mathsf T}J\,D\Phi_{t}(y)=J,\qquad \Phi_{t}^{*}\omega=\omega\qquad(y\in U_{0}),$$

   and $\det D\Phi_{t}(y)=1$ for every $y\in U_{0}$.
2. **(bracket preservation)** For every $t\in[t_{0}-h,t_{0}+h]$ and all
   $C^{2}$ phase functions $f,g$ on $W$,
   $\{f\circ\Phi_{t},\,g\circ\Phi_{t}\}=\{f,g\}\circ\Phi_{t}$ on $U_{0}$;
   the brackets on the left are the pointwise coordinate brackets of the
   $C^{1}$ compositions defined in [[def-cm13-poisson]].
3. **(potential branch)** On the potential branch ($d\equiv0$) the curves
   $t\mapsto\Phi(t;y)$ are, through
   [[pthm-cm13-hamiltonian-field-integrates-the-model-equations]], the
   momentum-phase curves of the model's motions, so the model's Hamiltonian
   evolution preserves the presentation's two-form, bracket and determinant
   on the actual time-slice domains; the assertion is local in time, and no
   completeness of the flow is claimed.

The statement is conditional on the adopted force branch, the declared
presentation and the cited mathematics. It requires no autonomy of $H$: the
conclusion holds for each fixed pair of times on which the solutions exist.

## Facts & Assumptions

**Given:** The presentation with its two-form and canonical charts, a $C^{2}$
branch Hamiltonian $H$, base data $(t_{0},z_{0})$, and the Hamiltonian system
$\dot z=X_{H_{t}}(z)$.

[F1] Forms, field and canonicity criterion ([[def-cm13-two-form]], [[pthm-cm13-two-form-is-symplectic]], [[def-cm13-hamiltonian-field]], [[def-cm13-canonical-map]], [[def-cm13-poisson]], [[prop-cm-canonical-map-tests-and-hamiltonian-transport]], [[prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart]], [[def-cm-phase-domain-and-standard-symplectic-two-form]]): each flow slice has source and target open subsets of the same $2n$-dimensional phase domain; a $C^1$ slice $C$ is canonical exactly when $DC^{\mathsf T}J_n DC=J_n$, and then $C^*\omega=\omega$ and it is a local diffeomorphism. The field of $H_t$ is $X_{H_t}=J_n\nabla H(t,\cdot)$. For $C^2$ functions $f,g$, the bracket is $\nabla f^{\mathsf T}J_n\nabla g$; for $C^1$ inputs its pointwise coordinate extension is defined by [[def-cm13-poisson]].

[F2] ODE dependence ([[thm-continuous-dependence-of-odes-on-initial-data-and-parameters]], [[thm-c1-dependence-of-solutions-on-initial-data]], [[def-variational-equation-along-an-ode-solution]], [[def-first-order-ode-initial-value-problem-and-solution]]): for the continuous, state-locally-Lipschitz right-hand side $F(t,z):=J\nabla H(t,z)$ there are $h>0$ and a neighbourhood $U_{0}$ of $z_{0}$ such that the solutions through $y\in U_{0}$ at $t_{0}$ exist on $[t_{0}-h,t_{0}+h]$, the solution map $\Phi$ is $C^{1}$ in $y$, and $Y(t):=D_{y}\Phi(t;y)$ solves the variational equation $Y'=J\,\mathrm{Hess}\,H(t,\Phi(t;y))\,Y$ with $Y(t_{0})=I$.

[F3] Linear algebra and calculus ([[cor-hessian-is-symmetric]], [[def-hessian-and-euclidean-critical-point]], [[def-matrix-product-and-identity-matrix]], [[def-transpose-of-a-matrix]], [[def-invertible-matrix-and-general-linear-group]], [[cor-square-matrix-invertible-iff-determinant-is-a-unit]], [[thm-determinant-multiplicative]], [[thm-determinant-of-transpose]], [[def-determinant-of-a-square-matrix]], [[def-linear-map]], [[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]], [[thm-chain-rule-for-total-derivatives]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-metric-topology]], [[def-interval]], [[cor-zero-derivative-implies-constant]]): the Hessian of a $C^{2}$ function is symmetric; matrix transposes, products and inverses obey the ordinary rules; the determinant is multiplicative, $\det A^{\mathsf T}=\det A$, and $A^{\mathsf T}JA=J$ forces $A$ invertible because $J$ is; derivatives of matrix-valued curves are computed entrywise, and a differentiable function on an interval with vanishing derivative is constant.

## Proof

**Proof technique:** direct. Differentiate the canonical matrix identity along the variational equation, transfer it to the pullback of the two-form by the canonicity criterion, and compute the bracket of composed functions.

1.1 By [F2] the right-hand side $F(t,z)=J\nabla H(t,z)$ is continuous and $C^{1}$ in the state variable, and for the given base data there are $h>0$ and a neighbourhood $U_{0}$ on which the solution map $\Phi$ is defined and $C^{1}$ in $y$, with $Y(t):=D_{y}\Phi(t;y)$ solving $Y'=J\,\mathrm{Hess}\,H(t,\Phi(t;y))\,Y$ and $Y(t_{0})=I$. [F2]

2.1 Along that solution, $\frac{d}{dt}(Y^{\mathsf T}J\,Y)=Y'^{\mathsf T}J\,Y+Y^{\mathsf T}J\,Y'=Y^{\mathsf T}\mathrm{Hess}\,H(t,\Phi)\,J^{\mathsf T}J\,Y+Y^{\mathsf T}J\,J\,\mathrm{Hess}\,H(t,\Phi)\,Y$; since $J^{\mathsf T}J=-J^{2}=I$ and $\mathrm{Hess}\,H$ is symmetric [F3], the two terms cancel, so $t\mapsto Y(t)^{\mathsf T}J\,Y(t)$ has vanishing derivative on the interval and equals $I^{\mathsf T}JI=J$ at $t_{0}$; by [F3] each entry is constant, so $Y(t)^{\mathsf T}J\,Y(t)=J$ for every $t\in[t_{0}-h,t_{0}+h]$. [step 1.1, F3, algebra]

3.1 From $Y^{\mathsf T}J\,Y=J$ with $J$ invertible, $Y$ is invertible ($Yv=0$ implies $Jv=Y^{\mathsf T}JYv=0$, hence $v=0$) and taking inverses gives $Y^{-1}J^{-1}Y^{-T}=J^{-1}$, that is $Y^{-1}J\,Y^{-T}=J$ in view of $J^{-1}=-J$; multiplying on the left by $Y$ and on the right by $Y^{\mathsf T}$ gives $YJ\,Y^{\mathsf T}=J$. Moreover $\det Y(t)=1$: the identity $Y^{\mathsf T}JY=J$ gives $(\det Y)^{2}\det J=\det J$, so $\det Y(t)=\pm1$, and $t\mapsto\det Y(t)$ is continuous with $\det Y(t_{0})=1$, so the determinant is $+1$ throughout. [step 2.1, F3, algebra]

4.1 Clause 1: by step 2.1 the derivative of the time-$t$ map satisfies the matrix identity at every $y\in U_{0}$, so by the canonicity criterion of [F1] the map $\Phi_{t}$ is canonical and $\Phi_{t}^{*}\omega=\omega$; by step 3.1, $\det D\Phi_{t}=1$. [step 2.1, step 3.1, F1]

4.2 Clause 2: since $f,g$ are $C^2$ and $\Phi_t$ is $C^1$, both $f\circ\Phi_t$ and $g\circ\Phi_t$ are $C^1$. Their brackets are therefore defined by the pointwise $C^1$ coordinate extension of [[def-cm13-poisson]]. The chain rule [F3] gives $\nabla(f\circ\Phi_t)=D\Phi_t^{\mathsf T}(\nabla f)\circ\Phi_t$ and similarly for $g$, so the coordinate formula gives $\{f\circ\Phi_t,g\circ\Phi_t\}=(\nabla f\circ\Phi_t)^{\mathsf T}D\Phi_tJ D\Phi_t^{\mathsf T}(\nabla g\circ\Phi_t)=(\nabla f\circ\Phi_t)^{\mathsf T}J(\nabla g\circ\Phi_t)=\{f,g\}\circ\Phi_t$, using $D\Phi_tJ D\Phi_t^{\mathsf T}=J$ from step 3.1 and [F1]. [step 3.1, F1, F3, algebra]

5.1 Clause 3: on the potential branch the curves $t\mapsto\Phi(t;y)$ solve the Hamiltonian system, hence are, by [[pthm-cm13-hamiltonian-field-integrates-the-model-equations]] clause 1, the momentum-phase curves of the model's motions; the canonicity, bracket preservation and unit determinant of clauses 1-2 are local-in-time statements on the actual time-slice domains, and no completeness is asserted. [step 4.1, step 4.2]

6.1 Collection: clause 1 is step 4.1, clause 2 is step 4.2 and clause 3 is step 5.1; this proves the statement. [step 4.1, step 4.2, step 5.1] ∎

## Remarks

- **Relation to the autonomous supplier.** For an autonomous branch
  Hamiltonian, $\Phi$ is the local flow of the autonomous field $X_{H}$, and
  clause 1 reproduces the matrix identity of
  [[prop-cm-flow-derivative-satisfies-the-canonical-matrix-identity]]; the
  time-dependent case is proved here by the same computation for the
  two-time solution map, using the nonautonomous variational equation
  [[thm-c1-dependence-of-solutions-on-initial-data]].

- **Locality.** The conclusion is asserted on the neighbourhood $U_{0}$ and
  the compact time interval supplied by the dependence theorem; it is not a
  statement about the whole phase domain, and the model's own initial-value
  theory decides how far the solutions extend.
