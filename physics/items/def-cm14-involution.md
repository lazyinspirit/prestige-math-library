---
id: def-cm14-involution
kind: definition
title: "First integrals of the model's Hamiltonian and families in involution: the bracket criterion and differential independence"
status: published
origin: pipeline
domain: physics
dependency_level: 23
deps: [def-cm13-poisson, pthm-cm13-observable-evolution, def-cm13-hamiltonian-field, def-cm13-two-form, def-cm12-hamiltonian, pthm-cm13-hamiltonian-field-integrates-the-model-equations, def-cm07-action-and-mechanical-lagrangian, post-cm02-force-superposition, def-cm01-configuration, def-cm01-units, def-first-integral-and-poisson-commuting-functions, def-poisson-bracket-on-a-symplectic-manifold, def-first-order-ode-initial-value-problem-and-solution, thm-picard-lindelof-local-existence-and-uniqueness, def-linear-independence, def-differential-rank-and-constant-rank, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-metric-topology]
dependency_roles:
  def-cm13-poisson: formulation-prerequisite
  pthm-cm13-observable-evolution: physical-result
  def-cm13-hamiltonian-field: formulation-prerequisite
  def-cm13-two-form: formulation-prerequisite
  def-cm12-hamiltonian: formulation-prerequisite
  pthm-cm13-hamiltonian-field-integrates-the-model-equations: physical-result
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-first-integral-and-poisson-commuting-functions: mathematical-premise
  def-poisson-bracket-on-a-symplectic-manifold: mathematical-premise
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  def-linear-independence: mathematical-premise
  def-differential-rank-and-constant-rank: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-metric-topology: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "First integrals and involution for the Hamiltonian system of a declared hyperregular potential presentation of the framework's force branch: phase functions on an open phase domain that are constant along Hamiltonian solutions, their bracket criterion with the branch Hamiltonian, families of phase functions in involution, and the differential independence of a family on the regular region. The item defines these model properties; it asserts no existence of integrals, no conservation law for a particular force law and no measured value."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 4.3, printed pages 94-95 (PDF pages 100-101): the criterion $\\{I,H\\}=0$ for a constant of motion and the closure of constants of motion under the Poisson bracket"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 15.2: Poisson brackets, conserved quantities and the Poisson-bracket criterion for a constant of the motion"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, second edition (MIT Press, 2014/2015), Sections 5.2.2 and 5.3: the Poisson bracket and the fundamental Poisson brackets obtained from the canonical condition of canonical transformations"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 10.1, Eqs. (10.16)-(10.18), chapter pages 3-4 (PDF pages 239-240): the Poisson bracket and the identity $df/dt=\\{f,H\\}+\\partial f/\\partial t$ used to find integrals of motion for functions of the phase variables"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---
## Definition

Adopt the force model with potential presentation $(U,d)$ and mechanical
Lagrangian $L=K-U$ of [[def-cm07-action-and-mechanical-lagrangian]], with
the momentum charts and two-form datum of [[def-cm13-two-form]], the
Hamiltonian fields of [[def-cm13-hamiltonian-field]], the bracket of
[[def-cm13-poisson]] and the branch Hamiltonian $H$ of
[[def-cm12-hamiltonian]], writing $H$ for the Hamiltonian of the
chosen chart ($\widetilde H$ in generalized coordinates). The model
reading is [[pthm-cm13-hamiltonian-field-integrates-the-model-equations]]:
when $d\equiv0$, Cartesian solutions are model motions; generalized-coordinate
solutions satisfy the substituted Lagrange equations. An arbitrary
lower-dimensional immersion alone does not identify those solutions with
ambient unconstrained motions. Dimensions are read by
[[def-cm01-units]] and differentiability classes are those of
[[def-ck-euclidean-maps-and-diffeomorphisms]].

**(a) Phase functions and the domain.** Let $W_{0}$ be a nonempty open
subset of one momentum phase domain of the presentation. A **phase
function of the presentation on $W_{0}$ of class $C^{k}$** is a map
$f:W_{0}\to\mathbb R$ of class $C^{k}$, of a declared dimension.

**(b) First integrals.** Let $f:W_{0}\to\mathbb R$ be of class $C^{1}$.
Then $f$ is a **first integral of the branch Hamiltonian $H$ on $W_{0}$**
when for every interval $J\subseteq I_{0}$ with nonempty interior and every
solution $z:J\to W_{0}$ of the Hamiltonian system
$\dot z(t)=X_{H_{t}}(z(t))$
([[def-first-order-ode-initial-value-problem-and-solution]]) the composite
$t\mapsto f(z(t))$ is constant on $J$. In the Cartesian chart with $d\equiv0$, this is equivalently constancy
along every model motion whose momentum-phase curve lies in $W_{0}$, by
clause 1 of [[pthm-cm13-hamiltonian-field-integrates-the-model-equations]].
In generalized coordinates with $d\equiv0$, the same definition concerns
solutions of the substituted Lagrange equations, by its clause 2.

**(c) The bracket criterion.** Let $H$ be autonomous on $I_{0}\times W_{0}$
($\partial_{t}U\equiv0$ and $d\equiv0$) and let $f:W_{0}\to\mathbb R$ be
autonomous of class $C^{2}$. Then $f$ is a first integral of $H$ on $W_{0}$
if and only if

$$\{f,H\}=0\qquad\text{everywhere on }W_{0},$$

the bracket being that of [[def-cm13-poisson]]. For sufficiency, clause 2 of [[pthm-cm13-observable-evolution]] makes
$f\circ z$ constant on every solution when the bracket vanishes. For
necessity, fix $w\in W_{0}$ and a time $t_{*}$ in the interior of $I_{0}$.
The chart field $X_H=(H_p,-H_q)$ is $C^{1}$, hence locally Lipschitz
in state, since the chart Hamiltonian is $C^{2}$. Applying
[[thm-picard-lindelof-local-existence-and-uniqueness]] on the open domain
$\operatorname{int}(I_{0})\times W_{0}$ gives a local Hamiltonian solution
$z$ through $z(t_{*})=w$. If $f$ is a first integral, differentiating the
constant composite at $t_{*}$ and using clause 1 of
[[pthm-cm13-observable-evolution]] gives
$0=(f\circ z)'(t_{*})=\{f,H\}(w)$. This holds for every $w$.

**(d) Involution.** Phase functions $f_{1},\dots,f_{k}:W_{0}\to\mathbb R$
of class $C^{2}$ are **in involution** (or **pairwise Poisson-commuting**)
when

$$\{f_{i},f_{j}\}=0\qquad\text{on }W_{0}\text{ for all }i,j\in\{1,\dots,k\};$$

a **family of first integrals in involution** is a family whose members are
first integrals of $H$ and which is in involution. The notion is the
presentation reading of the root-library notion of
[[def-first-integral-and-poisson-commuting-functions]] under the bracket of
[[def-cm13-poisson]], which is the bracket of
[[def-poisson-bracket-on-a-symplectic-manifold]] for the two-form of
[[def-cm13-two-form]].

**(e) Differential independence.** Phase functions $f_{1},\dots,f_{k}$ of
class $C^{1}$ are **independent at $z\in W_{0}$** when the differentials
$df_{1}(z),\dots,df_{k}(z)$ are linearly independent as elements of the
dual of the tangent space at $z$ ([[def-linear-independence]]); the set
of points at which this holds is the **independence locus** of the family,
$\{z\in W_{0}:\operatorname{rank}(df_{1}(z),\dots,df_{k}(z))=k\}$
([[def-differential-rank-and-constant-rank]],
[[def-jacobian-matrix-and-gradient]]). The family is **independent on**
$W_{0}$ when it is independent at every $z\in W_{0}$.

**(f) Status.** The item defines model properties of phase functions and
establishes the bracket equivalence using observable evolution and
local existence through every phase point. It asserts no existence of a nonconstant first integral
for a given force law, no completeness of any flow, no conservation law
of the model and no measured value; in particular every closure or
constancy statement about brackets is a theorem of this page or of
[[pthm-cm13-observable-evolution]], not part of the definition.
