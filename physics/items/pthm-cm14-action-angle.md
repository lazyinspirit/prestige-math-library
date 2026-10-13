---
id: pthm-cm14-action-angle
kind: physics-theorem
title: "Action-angle coordinates of a completely integrable presentation: period-one angles, action coordinates, $H=h(I)$ and linear motion on the tori"
status: published
origin: pipeline
domain: physics
dependency_level: 26
deps: [pthm-cm14-regular-tori, def-cm14-complete-integrability, def-cm-one-dimensional-action-variable, def-cm14-involution, def-cm13-two-form, pthm-cm13-two-form-is-symplectic, def-cm13-canonical-form, def-cm13-hamiltonian-field, pthm-cm13-hamiltonian-field-integrates-the-model-equations, def-cm13-poisson, pthm-cm13-observable-evolution, def-cm12-hamiltonian, pthm-cm12-hamilton-equivalence, def-cm12-cotangent-momentum, def-cm07-action-and-mechanical-lagrangian, def-cm07-generalized-coordinates-and-forces, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm01-configuration, def-cm01-units, def-cm02-newtonian-flow, thm-cm-liouville-arnold-action-angle-repaired, cor-cm-action-angle-radian-scaling, def-action-and-angle-coordinates, def-completely-integrable-hamiltonian-system, def-first-integral-and-poisson-commuting-functions, def-hamiltonian-vector-field-and-hamiltonian-function, def-symplectic-form-and-symplectic-manifold, def-countable-choice, prop-regular-common-level-sets-are-lagrangian-submanifolds, prop-commuting-hamiltonian-vector-fields-integrate-to-a-local-r-n-action, lem-stabilizer-of-the-r-n-action-on-a-compact-connected-regular-fibre-is-a-full-lattice, thm-compact-connected-regular-fibres-are-tori, cor-motion-of-a-completely-integrable-hamiltonian-is-linear-on-invariant-tori, prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart, def-ck-euclidean-maps-and-diffeomorphisms, def-directional-and-partial-derivatives, def-jacobian-matrix-and-gradient, def-metric-topology, def-interval]
dependency_roles:
  pthm-cm14-regular-tori: physical-result
  def-cm14-complete-integrability: formulation-prerequisite
  def-cm-one-dimensional-action-variable: mathematical-premise
  def-cm14-involution: formulation-prerequisite
  def-cm13-two-form: formulation-prerequisite
  pthm-cm13-two-form-is-symplectic: physical-result
  def-cm13-canonical-form: formulation-prerequisite
  def-cm13-hamiltonian-field: formulation-prerequisite
  pthm-cm13-hamiltonian-field-integrates-the-model-equations: physical-result
  def-cm13-poisson: formulation-prerequisite
  pthm-cm13-observable-evolution: physical-result
  def-cm12-hamiltonian: formulation-prerequisite
  pthm-cm12-hamilton-equivalence: physical-result
  def-cm12-cotangent-momentum: formulation-prerequisite
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm07-generalized-coordinates-and-forces: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  thm-cm-liouville-arnold-action-angle-repaired: mathematical-premise
  cor-cm-action-angle-radian-scaling: mathematical-premise
  def-action-and-angle-coordinates: mathematical-premise
  def-completely-integrable-hamiltonian-system: mathematical-premise
  def-first-integral-and-poisson-commuting-functions: mathematical-premise
  def-hamiltonian-vector-field-and-hamiltonian-function: mathematical-premise
  def-symplectic-form-and-symplectic-manifold: mathematical-premise
  def-countable-choice: mathematical-premise
  prop-regular-common-level-sets-are-lagrangian-submanifolds: mathematical-premise
  prop-commuting-hamiltonian-vector-fields-integrate-to-a-local-r-n-action: mathematical-premise
  lem-stabilizer-of-the-r-n-action-on-a-compact-connected-regular-fibre-is-a-full-lattice: mathematical-premise
  thm-compact-connected-regular-fibres-are-tori: mathematical-premise
  cor-motion-of-a-completely-integrable-hamiltonian-is-linear-on-invariant-tori: mathematical-premise
  prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-metric-topology: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Action-angle coordinates for a completely integrable datum of a declared hyperregular potential presentation of the framework's force branch: near a compact connected regular fibre and over a ball of regular values on which the integral map is a proper submersion with connected fibres, there are period-one angle and action coordinates of the presentation's two-form with $\\omega=\\sum_i d\\theta_i\\wedge dI_i$; fibrewise-constant functions, in particular the datum and the branch Hamiltonian, depend on the actions alone; and, with zero residual force, Hamiltonian solutions become constant-action, linear-angle flows: these correspond to Cartesian model motions or, in generalized coordinates, to substituted Lagrange solutions; a lower-dimensional immersion alone does not make the latter ambient unconstrained motions. The conclusion is conditional on the Axiom of Countable Choice, on the complete integrability of the datum and on all the fibre hypotheses; it is local over the ball of regular values, asserts no global coordinates on the phase domain, and carries no empirical content. The identification of the coordinates with classical period integrals is a normalization convention, not part of the theorem."
sources:
  references:
    - title: "Ana Cannas da Silva, Lectures on Symplectic Geometry (revised January 2006), Lecture 18, Lemma 18.11 and Theorem 18.12, pp. 110-111: action-angle coordinates forming a Darboux chart ($\\{\\phi_i,\\psi_j\\}=\\delta_{ij}$) whose angle coordinates linearize the flows of the commuting Hamiltonians; the source does not fix the period normalization used here"
      url: "https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf"
    - title: "Eckhard Meinrenken, Symplectic Geometry (University of Toronto lecture notes), Chapter 6, Theorem 6.21 and Definitions 6.16-6.18, pp. 72-75: action-angle coordinates, the period-one convention and the linear-motion corollary"
      url: "https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Sections 4.5.1 and 4.5.3, printed pages 105-111 (PDF pages 111-117): the explicit oscillator action-angle chart (4.5.1) and the one-dimensional action integral $I=\\frac1{2\\pi}\\oint p\\,dq$ with the frequency identity $\\partial E/\\partial I=\\omega$ (4.5.3), in the radian convention"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 10.2, chapter pages 5-8 (PDF pages 241-244): the action variable $J=\\frac1{2\\pi}\\oint p\\,dq$ and the angle variable; the canonicality of the transformation is deferred there to Landau-Lifshitz rather than proved"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---
## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_{\omega}$
([[def-countable-choice]]). Adopt the force model with potential
presentation $(U,d)$ and mechanical Lagrangian $L=K-U$ of
[[def-cm07-action-and-mechanical-lagrangian]], with the momentum charts,
forms and canonical coordinates of [[def-cm13-two-form]],
[[pthm-cm13-two-form-is-symplectic]] and [[def-cm13-canonical-form]], the
Hamiltonian fields of [[def-cm13-hamiltonian-field]], the bracket of
[[def-cm13-poisson]] and the branch Hamiltonian $H$ of
[[def-cm12-hamiltonian]]. Let $W_{0}$ be a nonempty open phase domain of a
momentum chart, of dimension $2n$, and let $F=(F_{1}=H|_{W_{0}},\dots,F_{n})$
be a completely integrable datum of the presentation on $W_{0}$
([[def-cm14-complete-integrability]]). Let $b_{0}$ be a regular value with
nonempty compact connected regular fibre $N=F^{-1}(b_{0})$, and assume
that there are a saturated open neighbourhood $U\subseteq W_{0}$ of $N$
and a ball $B\subseteq\mathbb R^{n}$ of regular values with $F(U)=B$ such
that $\pi=F|_{U}:U\to B$ is a proper submersion with connected fibres.
Then there are an open base neighbourhood $B_0\subseteq B$ of $b_0$ and an open action-coordinate ball $A$, and on the saturated neighbourhood $U_0:=\pi^{-1}(B_0)$ there are action-angle coordinates

$$(I,\theta):U_0\longrightarrow A\times T^{n},\qquad T^{n}=\mathbb R^{n}/\mathbb Z^{n},$$

of class $C^{\infty}$, diffeomorphic onto their image, such that:

1. **(form)** the angles are period-one and the presentation's two-form
   takes the canonical action-angle form
   $$\omega=\sum_{i=1}^{n}d\theta_{i}\wedge dI_{i}$$
   on $U_0$, in the sense of [[def-action-and-angle-coordinates]];
2. **(dimension)** each action coordinate $I_{i}$ has dimension
   $\mu\ell^{2}\tau^{-1}$ (action) and each angle $\theta_{i}$ is
   dimensionless, consistently with the action dimension of the
   presentation's two-form in its original canonical charts
   ([[def-cm01-units]]);
3. **(fibrewise constants)** every $C^{\infty}$ function on $U_0$ that is
   constant on the fibres of $\pi$ is a function of $I$ alone; in
   particular $F_{i}=f_{i}(I)$ for $C^{\infty}$ functions $f_{i}$ and the
   branch Hamiltonian is $H=h(I)$ with $h=f_{1}$;
4. **(linear motion)** the solutions of the Hamiltonian system of $h$ in
   the chart $(I,\theta)$, on the potential branch $d\equiv0$, are exactly
   the momentum-phase curves of Cartesian model motions, or in a
   generalized-coordinate chart the solutions of its substituted Lagrange
   equations on $U_0$, by clauses 1-2 of
   [[pthm-cm13-hamiltonian-field-integrates-the-model-equations]].
   A lower-dimensional immersion requires a separate ideal-constraint
   premise to identify these with constrained ambient motions. In either case
   and they satisfy
$$\dot I=0,\qquad \dot\theta=\frac{\partial h}{\partial I}(I),\qquad\theta(t)=\theta(0)+t\,\frac{\partial h}{\partial I}\bigl(I(0)\bigr)\pmod{\mathbb Z^{n}},$$
   writing $\nu=\partial h/\partial I(I(0))$, a positive $T$ is a period exactly when $T\nu\in\mathbb Z^n$. The linear-motion formula alone does not assert a periodic-versus-full-density dichotomy: nonperiodic motion can remain in a proper invariant subtorus when the frequency vector has integer relations.
5. **(radian rescaling)** with the rescaled coordinates
   $\theta^{\mathrm{rad}}:=2\pi\theta$ and
   $I^{\mathrm{rad}}:=I/(2\pi)$ one has
   $\omega=\sum_{i}d\theta^{\mathrm{rad}}_{i}\wedge dI^{\mathrm{rad}}_{i}$,
   the angles $\theta^{\mathrm{rad}}$ are $2\pi$-periodic, and
   $H=\tilde h(I^{\mathrm{rad}})$ with
   $\tilde h(I^{\mathrm{rad}})=h(2\pi I^{\mathrm{rad}})$ and
   $\dot\theta^{\mathrm{rad}}=\partial\tilde h/\partial I^{\mathrm{rad}}$;
   the components $\partial h/\partial I_{i}$ are **cyclic frequencies**
   (cycles per unit time), not angular rates, the angular rates being
   $2\pi\,\partial h/\partial I_{i}$.

The statement is conditional on the adopted force branch, the declared
presentation, the smooth completely integrable datum, the fibre
hypotheses and $\mathrm{AC}_{\omega}$; it asserts no global
action-angle coordinates on $W_{0}$, no statement about critical or
noncompact fibres and no empirical content.

## Facts & Assumptions

**Given:** $\mathrm{AC}_{\omega}$, the presentation on its chart, the completely integrable datum $F$ with $F_{1}=H$ on $W_{0}$, the regular value $b_{0}$ and its compact connected regular fibre $N$, and the saturated neighbourhood $U$ with the proper submersion $\pi=F|_{U}$ over the ball $B$ with connected fibres.

[F1] Setting and identification ([[def-cm14-complete-integrability]], [[def-completely-integrable-hamiltonian-system]], [[def-symplectic-form-and-symplectic-manifold]], [[pthm-cm13-two-form-is-symplectic]]): $(W_{0},\omega)$ is a $2n$-dimensional symplectic manifold, and $F$ is a completely integrable Hamiltonian system on it with $F_{1}=H$; the fibre $N$ is nonempty, compact, connected and regular, and $\pi=F|_{U}$ is a proper submersion onto the ball $B$ with connected fibres.

[F2] The mathematical action-angle theorem ([[thm-cm-liouville-arnold-action-angle-repaired]], [[def-action-and-angle-coordinates]]): under the hypotheses of [F1] and $\mathrm{AC}_{\omega}$, after restricting to $U_0=\pi^{-1}(B_0)$ there are period-one action-angle coordinates $(I,\theta):U_0\to A\times T^{n}$, of class $C^{\infty}$, where $A=I(B_0)$ is the action image and $B_0$ remains in the original integral-value coordinates, with $\omega=\sum_{i}d\theta_{i}\wedge dI_{i}$, and every $C^{\infty}$ function on $U_0$ constant on the fibres of $\pi$ — in particular each $F_{i}$ — is a function of $I$ alone.

[F3] Hamiltonian equations in canonical coordinates ([[prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart]], [[def-cm13-hamiltonian-field]] clause (a), [[cor-motion-of-a-completely-integrable-hamiltonian-is-linear-on-invariant-tori]], [[def-hamiltonian-vector-field-and-hamiltonian-function]]): in a canonical chart $(q,p)$ of a presentation two-form the field $X_{K}$ of a $C^{2}$ function $K$ has the components $X_{K}=(K_{p},-K_{q})$, so its integral curves satisfy $\dot q=K_{p}$, $\dot p=-K_{q}$; in action-angle coordinates with $K=h(I)$ this gives $\dot I=0$, $\dot\theta=\partial h/\partial I(I)$ on the torus, with the displayed linear formula.

[F4] Dimension of the two-form ([[def-cm13-canonical-form]] clause (b), [[def-cm13-two-form]], [[pthm-cm13-two-form-is-symplectic]] clause 2, [[def-cm01-units]]): in each canonical chart $(q,p)$ of the presentation, $\omega=\sum_{a}dq^{a} \wedge dp_{a}$ and the momentum $p_{a}$ has dimension $\mu\ell^{2}\tau^{-1}\gamma_{a}^{-1}$ while $q^{a}$ has dimension $\gamma_{a}$; hence every coefficient form $dq^{a}\wedge dp_{a}$ has the constant dimension $\mu\ell^{2}\tau^{-1}$ (action).

[F5] Radian rescaling ([[cor-cm-action-angle-radian-scaling]]): with $\theta^{\mathrm{rad}}=2\pi\theta$, $I^{\mathrm{rad}}=I/(2\pi)$ one has $\omega=\sum_{i}d\theta^{\mathrm{rad}}_{i}\wedge dI^{\mathrm{rad}}_{i}$, and if $H=h(I)$ then $H=\tilde h(I^{\mathrm{rad}})$ with $\tilde h(I^{\mathrm{rad}})=h(2\pi I^{\mathrm{rad}})$ and $\dot\theta^{\mathrm{rad}}_{i}=\partial\tilde h/\partial I^{\mathrm{rad}}_{i}$.

[F6] Model reading ([[pthm-cm13-hamiltonian-field-integrates-the-model-equations]] clauses 1-2, [[pthm-cm12-hamilton-equivalence]] clauses 1 and 3, [[def-cm02-newtonian-flow]], [[def-cm12-cotangent-momentum]]): with $d\equiv0$, the Hamiltonian curves correspond to Cartesian model motions in a Cartesian chart and to substituted Lagrange solutions in a generalized-coordinate chart. An arbitrary lower-dimensional immersion alone does not identify the latter with ambient unconstrained motions.

[A1] $\mathrm{AC}_{\omega}$ is [[def-countable-choice]]; it is consumed through [F2], whose statement assumes it.

## Proof

**Proof technique:** direct; apply the mathematical action-angle theorem to the presentation's symplectic chart, fix the dimension bookkeeping from the two-form, and read the motion off the canonical Hamiltonian field.

1.1 Clauses 1 and 3: by [F1] the hypotheses of [F2] are in force, so after restricting the original base to $B_0$ and the saturated neighbourhood to $U_0$ there is a $C^{\infty}$ diffeomorphism $(I,\theta):U_0\to A\times T^{n}$ onto its image with $\omega=\sum_{i}d\theta_{i}\wedge dI_{i}$ and every $C^{\infty}$ function constant on the fibres of $\pi$ (in particular each $F_{i}$, and $H=F_{1}$) a function of $I$ alone; write $F_{i}=f_{i}(I)$ and $H=h(I)=f_{1}(I)$. [A1, F1, F2]

1.2 Clause 2: by [F4] the two-form has action dimension; in the coordinates $(I,\theta)$ the form is $\sum_{i}d\theta_{i}\wedge dI_{i}$ with the angles period-one and dimensionless by [F2] and [[def-action-and-angle-coordinates]], so comparing dimensions term by term gives $[I_{i}]=\mu\ell^{2}\tau^{-1}$. [F2, F4, algebra]

2.1 Clause 4: in the canonical chart $(\theta,I)$ the field of $h(I)$ has components $X_h=(\partial h/\partial I,0)$ by [F3], so $\dot I=0$ and $\dot\theta=\partial h/\partial I(I)$. Integrating on $\mathbb R^n/\mathbb Z^n$ gives the displayed linear formula. By [F6], with $d\equiv0$ these integral curves are exactly Cartesian momentum-phase motions, or generalized-coordinate substituted Lagrange solutions, as applicable to the original chart. The action-angle change transports that same Hamiltonian field; no ambient-motion assertion follows from an immersion alone. Write $\nu=\partial h/\partial I(I(0))$. The orbit returns after $T>0$ exactly when $T\nu\in\mathbb Z^n$, by the defining quotient. If an integer vector $k\ne0$ satisfies $k\cdot\nu=0$, the angle combination $k\cdot\theta(t)$ remains fixed modulo $\mathbb Z$, so no full-torus density follows merely from nonperiodicity. For example a frequency vector $(c,c\alpha,0)$ with $c\ne0$ and irrational $\alpha$ keeps the third angle fixed; a positive period would make both $Tc$ and $Tc\alpha$ integers, forcing their ratio $\alpha$ rational, contradiction. This verifies the precise period criterion and the stated qualification. [F3, F6, step 1.1, algebra]

3.1 Clause 5: [F5] applied to the coordinates of step 1.1 gives the invariance of the two-form under the rescaling, the transformed Hamiltonian $\tilde h$ and the rescaled evolution equation; the relation $\dot\theta^{\mathrm{rad}}=2\pi\dot\theta$ identifies the cyclic frequencies $\partial h/\partial I_{i}$ of clause 4 with the angular rates $2\pi\partial h/\partial I_{i}$ in the radian chart. [F5, step 1.1, step 2.1, algebra]

4.1 Collection: clause 1 is step 1.1 (form), clause 2 is step 1.2, clause 3 is step 1.1 (fibrewise constants), clause 4 is step 2.1 and clause 5 is step 3.1; this proves the statement. [step 1.1, step 1.2, step 2.1, step 3.1] ∎

## Remarks

- **The action coordinates are not unique.** The theorem does not fix additive constants in the actions or constant shifts of the angles: if $(I,\theta)$ has the stated properties then so does $(I+c,\theta)$ for every $c\in\mathbb R^{n}$. In particular the theorem does not by itself single out the classical normalization $I_{i}=\oint_{\gamma_{i}}p\,dq$ of the sources; that normalization is a convention fixed in explicit models, and the one-dimensional companion examples of [[def-cm-one-dimensional-action-variable]] verify it directly in the models treated there, where the period-one action is $2\pi$ times the radian action $J_{\mathrm{a}}$ of that definition.

- **Global coordinates are not claimed.** The conclusion holds over the neighbourhood $B_0$ of original regular values with action-coordinate image $A$, after restricting the saturated neighbourhood; a compact phase domain with nontrivial period-lattice monodromy admits no global single-valued action-angle chart, as the published obstruction examples cited on the companion page show.

- **Frequencies.** In the period-one convention of clause 1 the numbers $\partial h/\partial I_{i}$ are frequencies in cycles per unit time; the angular rates are their $2\pi$-multiples, per clause 5. The two conventions are related by the explicit rescaling of [[cor-cm-action-angle-radian-scaling]] and must not be mixed.
