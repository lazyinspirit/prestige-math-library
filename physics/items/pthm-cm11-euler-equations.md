---
id: pthm-cm11-euler-equations
kind: physics-theorem
title: "Euler's equations with torque for the rigid-material model, the
  rotational power identity, the torque-free reduction and frame covariance"
status: published
origin: session
domain: physics
dependency_level: 13
deps:
  [
    post-cm11-torque-balance,
    post-cm10-rigid-material,
    def-cm10-rigid-body-configuration,
    def-cm10-angular-velocity,
    def-cm10-inertia-tensor,
    def-countable-choice,
    pthm-cm10-kinetic-splitting,
    pthm-cm10-principal-axes,
    pthm-cm10-frame-covariance,
    lem-cm-inertia-matrix-properties,
    lem-cm-matrix-curve-derivative-rules,
    lem-cm-skew-matrix-cross-product-correspondence,
    lem-cm-derivative-of-pairings-of-curves,
    lem-cross-product-is-bilinear-alternating-and-orthogonal,
    cor-zero-derivative-implies-constant,
    def-cm-special-orthogonal-group,
    def-matrix-product-and-identity-matrix,
    def-invertible-matrix-and-general-linear-group,
    def-cross-product-in-r3,
    def-euclidean-inner-product,
    def-cm01-units,
    def-interval,
    thm-chain-rule-for-total-derivatives,
    post-cm01-frames
  ]
dependency_roles:
  post-cm11-torque-balance: physical-assumption
  post-cm10-rigid-material: physical-assumption
  def-cm10-rigid-body-configuration: formulation-prerequisite
  def-cm10-angular-velocity: formulation-prerequisite
  def-cm10-inertia-tensor: formulation-prerequisite
  def-countable-choice: mathematical-premise
  pthm-cm10-kinetic-splitting: physical-result
  pthm-cm10-principal-axes: physical-result
  pthm-cm10-frame-covariance: physical-result
  lem-cm-inertia-matrix-properties: mathematical-premise
  lem-cm-matrix-curve-derivative-rules: mathematical-premise
  lem-cm-skew-matrix-cross-product-correspondence: mathematical-premise
  lem-cm-derivative-of-pairings-of-curves: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-invertible-matrix-and-general-linear-group: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-cm01-units: formulation-prerequisite
  def-interval: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  post-cm01-frames: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Conditional deductions inside the external-torque branch of
  [[post-cm11-torque-balance]] for the rigid-material model of
  [[post-cm10-rigid-material]]: the body-frame Euler equations with the declared
  torque datum, their principal-axis components, the power identity
  $\\frac{d}{dt}\\tfrac12\\omega^{\\mathsf T}I\\omega=\\omega\\cdot R^{\\mathsf
  T}\\tau$ (and constancy of the rotational kinetic energy in the torque-free
  case), the torque-free reduction $l'=l\\times(I^{-1}l)$ under nondegeneracy,
  and the preservation of the balance under changes of inertial frame with the
  declared transformation of the torque datum. No force law producing $\\tau$,
  no conservation of $L_c$ (which is proved on the same page), no measurement
  and no empirical value is asserted."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015
        printing), Section 3.3, Eqs. (3.31)-(3.33), printed pages 53-55 (PDF
        pages 59-61): angular-momentum rate, Euler's equations with torque in
        the body frame and the free-top case"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics
        (title page last edited September 1, 2026), Chapter 4 Section 4.4, Eq.
        (4.66) and its derivation, chapter page 15 (PDF page 69): Euler
        equations
        $I_j\\dot\\omega_j+(I_{j''}-I_{j'})\\omega_{j'}\\omega_{j''}=\\tau_j$
        and the free-symmetric-top specialisation"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical
        Mechanics, 2nd ed. (MIT Press, 2014), Section 2.9, Eqs. (2.80)-(2.83):
        angular-momentum evolution and Euler's equations in principal
        components"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9\
        579/sicm_edition_2.zip"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]), used only through the integrals of
[[pthm-cm10-kinetic-splitting]]; the theorems below neither use nor imply any
other choice principle. Adopt a model of the rigid-material branch
[[post-cm10-rigid-material]] with the external-torque branch
[[post-cm11-torque-balance]]: a reference mass distribution $\nu$ with total
mass $m$ and centred reference coordinates, a time window $I_0$
([[def-interval]]), an inertial frame, a motion $x(t,\rho)=c(t)+R(t)\rho$ with
configuration path $(c,R)$ of class $C^{2}$
([[def-cm10-rigid-body-configuration]]), body angular velocity $\omega$
([[def-cm10-angular-velocity]]) and body inertia matrix $I$
([[def-cm10-inertia-tensor]]), and a continuous external torque datum
$\tau:I_0\to\mathbb R^{3}$ with respect to which the adopted balance of
[[post-cm11-torque-balance]] clause (iii) holds along the motion. Then:

1. **Euler's equations with torque.** Writing $l:=I\omega$, one has
   $l'=R^{\mathsf T}\tau-\omega\times I\omega$ and
   $$I\omega'(t)+\omega(t)\times I\omega(t)=R(t)^{\mathsf T}\tau(t)\qquad(t\in I_0).$$
2. **Principal-axis components.** If $(e_{1},e_{2},e_{3})$ is a positively oriented orthonormal
   eigenbasis of $I$ with $Ie_{j}=I_{j}e_{j}$ ([[pthm-cm10-principal-axes]]
   clause (a)) and $\omega=\sum_{j}\omega_{j}e_{j}$,
   $R^{\mathsf T}\tau=\sum_{j}\tau_{j}e_{j}$, then the equations are
   componentwise
   $$I_{1}\omega_{1}'=(I_{2}-I_{3})\omega_{2}\omega_{3}+\tau_{1},\qquad I_{2}\omega_{2}'=(I_{3}-I_{1})\omega_{3}\omega_{1}+\tau_{2},\qquad I_{3}\omega_{3}'=(I_{1}-I_{2})\omega_{1}\omega_{2}+\tau_{3}.$$
3. **Rotational power identity.** The rotational kinetic energy
   $K_{\mathrm{rot}}(t):=\tfrac12\omega(t)^{\mathsf T}I\omega(t)$ is
   differentiable on $I_0$ with
   $$\frac{d}{dt}K_{\mathrm{rot}}(t)=\omega(t)\cdot R(t)^{\mathsf T}\tau(t)\qquad(t\in I_0);$$
   in particular, if $\tau\equiv0$, then $K_{\mathrm{rot}}$ is constant on
   $I_0$, and $K_{\mathrm{rot}}$ coincides with the rotational term
   $\tfrac12\omega^{\mathsf T}I\omega$ of the model's kinetic energy in
   clause 3 of [[pthm-cm10-kinetic-splitting]].
4. **Torque-free reduction and nondegeneracy.** Suppose $\tau\equiv0$ and the
   model is nondegenerate in the sense of [[def-cm10-inertia-tensor]] clause
   (a), so that $I$ is invertible with $I^{-1}l=\omega$. Then, writing
   $\omega$ as a function of $l$,
   $$l'=l\times(I^{-1}l),\qquad \omega'=F(\omega):=-I^{-1}\bigl(\omega\times I\omega\bigr);$$
   the second form exhibits the torque-free body angular velocity as a
   solution of the autonomous field $F$ on $\mathbb R^{3}$.
5. **Frame covariance.** Let a second inertial frame be related to the first
   by $t'=t+b$, $x'=Qx+ut+a$ with $b\in\mathbb R$, $a,u\in\mathbb R^{3}$,
   $Q\in SO(3)$ ([[post-cm01-frames]] clause (iv)), and let
   $\tilde x(t',\rho):=Qx(t'-b,\rho)+u(t'-b)+a$, $\tilde\tau(t'):=Q\tau(t'-b)$
   be the transformed motion and datum of [[post-cm11-torque-balance]] clause
   (vii). Then the balance holds in the second frame, and
   $$I\tilde\omega'(t')+\tilde\omega(t')\times I\tilde\omega(t')=\tilde R(t')^{\mathsf T}\tilde\tau(t')\qquad(t'\in I_0+b),$$
   where $\tilde\omega(t')=\omega(t'-b)$ and
   $\tilde R(t')=QR(t'-b)$; the body-frame torque is unchanged:
   $\tilde R(t')^{\mathsf T}\tilde\tau(t')=R(t'-b)^{\mathsf T}\tau(t'-b)$.

The statement is conditional on the adopted model and torque balance; it
asserts no force law for $\tau$, no conservation of $L_c$ and no measured
value.

## Facts & Assumptions

**Given:** The model data and motion of the statement, the balance hypothesis $L_c'=\tau$ of [[post-cm11-torque-balance]] clause (iii), and the derivative of the configuration path.

[L1] The angular momentum identity: $L_c(t)=R(t)l(t)$ with $l=I\omega$, and $\omega$ is of class $C^{1}$ because $R$ is of class $C^{2}$ ([[pthm-cm10-kinetic-splitting]] clause 4, [[def-cm10-angular-velocity]] clause (a)); $I$ is a constant symmetric matrix ([[def-cm10-inertia-tensor]] clause (a), [[lem-cm-inertia-matrix-properties]] clause 1).

[L2] The balance: $L_c'(t)=\tau(t)$ on $I_0$, and $\tau$ is continuous ([[post-cm11-torque-balance]] clauses (ii) and (iii)).

[L3] Matrix-curve calculus: for the $C^{1}$ curves $R:I_0\to SO(3)$ and $l:I_0\to\mathbb R^{3}$ one has $(Rl)'=R'l+Rl'$; $R^{\mathsf T}R'=[\omega]_\times$ and $R'=R[\omega]_\times$; $[\omega]_\times z=\omega\times z$; and $R^{\mathsf T}R=I_{3}$, so $R^{\mathsf T}w=0$ implies $w=0$ ([[lem-cm-matrix-curve-derivative-rules]], [[lem-cm-skew-matrix-cross-product-correspondence]], [[def-cm-special-orthogonal-group]], [[def-matrix-product-and-identity-matrix]]).

[L4] Cross-product algebra: $u\times v$ is bilinear and alternating, $u\times u=0$, $u\times v=-(v\times u)$, and $\langle u,v\times w\rangle=\det[u\ v\ w]$, so a cross product is orthogonal to each factor ([[lem-cross-product-is-bilinear-alternating-and-orthogonal]], [[def-cross-product-in-r3]], [[def-euclidean-inner-product]]).

[L5] Principal data: the positively oriented orthonormal eigenbasis $(e_{j})$ and principal moments $I_{j}$ of $I$, with $I\omega=\sum_{j}I_{j}\omega_{j}e_{j}$ when $\omega=\sum_{j}\omega_{j}e_{j}$ ([[pthm-cm10-principal-axes]] clauses (a)-(b)).

[L6] Pairing derivative and constancy: for differentiable curves $u,v$ the scalar product $t\mapsto\langle u(t),v(t)\rangle$ is differentiable with derivative $\langle u',v\rangle+\langle u,v'\rangle$ ([[lem-cm-derivative-of-pairings-of-curves]] clause 2); a continuous real function on an interval whose derivative vanishes at every interior point is constant ([[cor-zero-derivative-implies-constant]]).

[L7] Frame changes: the description of the motion in the second frame has configuration path $(\tilde c,\tilde R)$ with $\tilde R(t')=QR(t'-b)$, body angular velocity $\tilde\omega(t')=\omega(t'-b)$, and inertial quantities $\tilde L_c(t')=Q L_c(t'-b)$ ([[pthm-cm10-frame-covariance]] clauses 1, 2 and 5); differentiation of a composition with the affine reparametrisation $t\mapsto t'-b$ and the constant rotation $Q$ follows the chain rule ([[thm-chain-rule-for-total-derivatives]]).

[L8] Nondegeneracy: for a nondegenerate model the symmetric matrix $I$ is positive definite and invertible ([[pthm-cm10-principal-axes]] clause (d)); consequently $I^{-1}l=I^{-1}I\omega=\omega$ for $l=I\omega$, the inverse satisfying $I^{-1}I=I_{3}$ ([[def-invertible-matrix-and-general-linear-group]], [[def-matrix-product-and-identity-matrix]]).

## Proof

**Proof technique:** direct; differentiate $Rl$ with the product rule, translate the balance into the body frame, read off components in a principal basis, differentiate the quadratic form, and instantiate the frame-transformation laws.

1.1 By [L1] and [L3] the product $Rl$ is differentiable on $I_0$ with $(Rl)'=R'l+Rl'=R\bigl([\omega]_\times l+l'\bigr)=R\bigl(\omega\times l+l'\bigr)$, and by [L2] this equals $\tau$. Multiplying by $R^{\mathsf T}$ and using $R^{\mathsf T}R=I_{3}$ gives $\omega\times l+l'=R^{\mathsf T}\tau$. [given, L1, L2, L3, algebra]

1.2 Let $t'=t+b$ and use [L7]: $\tilde\omega(t')=\omega(t'-b)$ and $\tilde L_c(t')=QL_c(t'-b)$; differentiating the second identity in $t'$ by the chain rule [L7] gives $\tilde L_c'(t')=Q L_c'(t'-b)=Q\tau(t'-b)=\tilde\tau(t')$, so the adopted balance holds in the second frame. [given, L2, L7, algebra]

2.1 Since $l=I\omega$ and $I$ is a constant matrix, $l'=I\omega'$; substituting $l=I\omega$ into step 1.1 gives $I\omega'+\omega\times I\omega=R^{\mathsf T}\tau$, which is clause 1 (and the alternative form $l'=R^{\mathsf T}\tau-\omega\times I\omega$). [step 1.1, given, L1, algebra]

2.2 Assume $\tau\equiv0$ and nondegeneracy. From step 1.1, $l'=-\omega\times l=(I\omega)\times\omega=l\times(I^{-1}l)$, the middle equality by antisymmetry [L4] and the last by $I^{-1}l=\omega$ from [L8]; similarly $\omega'=I^{-1}(-\omega\times I\omega)=F(\omega)$, which is clause 4. [step 1.1, given, L4, L8, algebra]

3.1 In the positively oriented principal basis of [L5], the basis matrix $Q$ belongs to $SO(3)$ and the skew/cross correspondence [L3] gives $Q(u\times v)=(Qu)\times(Qv)$, so the usual cross-product coordinates apply. Any orthonormal principal basis can be given this orientation by negating one eigenvector, without changing eigenvalues or the motion. $I\omega=\sum_{j}I_{j}\omega_{j}e_{j}$ and the first component of $\omega\times I\omega$ is $\omega_{2}I_{3}\omega_{3}-\omega_{3}I_{2}\omega_{2}=(I_{3}-I_{2})\omega_{2}\omega_{3}$, with the cyclic analogues; writing $R^{\mathsf T}\tau=\sum_{j}\tau_{j}e_{j}$, clause 1 reads $I_{1}\omega_{1}'=(I_{2}-I_{3})\omega_{2}\omega_{3}+\tau_{1}$ and cyclically, which is clause 2. [step 2.1, given, L3, L4, L5, algebra]

3.2 Differentiating $K_{\mathrm{rot}}=\tfrac12\langle\omega,I\omega\rangle$ with [L6] and using the symmetry of $I$ from [L1] gives $K_{\mathrm{rot}}'=\langle\omega',I\omega\rangle=\langle\omega,I\omega'\rangle$; substituting $I\omega'=R^{\mathsf T}\tau-\omega\times I\omega$ from step 2.1 and using $\langle\omega,\omega\times I\omega\rangle=0$ by [L4] gives $K_{\mathrm{rot}}'=\langle\omega,R^{\mathsf T}\tau\rangle$, which is clause 3; when $\tau\equiv0$ this derivative vanishes identically and [L6] makes $K_{\mathrm{rot}}$ constant on $I_0$. The identification with the kinetic splitting is clause 3 of [[pthm-cm10-kinetic-splitting]]. [step 2.1, given, L1, L4, L6, algebra]

4.1 Applying step 2.1 in the second frame (whose configuration path is $(\tilde c,\tilde R)$ of class $C^{2}$ by [L7]) gives $I\tilde\omega'+\tilde\omega\times I\tilde\omega=\tilde R^{\mathsf T}\tilde\tau$ on $I_0+b$; and $\tilde R(t')^{\mathsf T}\tilde\tau(t')=R(t'-b)^{\mathsf T}Q^{\mathsf T}Q\tau(t'-b)=R(t'-b)^{\mathsf T}\tau(t'-b)$ because $Q^{\mathsf T}Q=I_{3}$ [L3], so the body-frame torque is unchanged; this is clause 5. [step 1.2, step 2.1, given, L3, L7, algebra] ∎

## Remarks

- **What is a theorem and what is an assumption.** The balance $L_c'=\tau$ is adopted in [[post-cm11-torque-balance]]; clauses 1-4 here are its consequences in the body frame and in the torque-free case, and clause 5 records that the formulation is consistent with the framework's frame changes. No clause produces $\tau$ from a force system.

- **Where the nondegeneracy is used.** Clauses 1-3 and 5 hold for every model of the branch, including degenerate ones; only clause 4 uses the invertibility of $I$, and the items that invert $I$ on this page state that hypothesis explicitly.

- **The rotational power identity.** Clause 3 says that the rate of change of the rotational kinetic energy equals the power $\omega\cdot R^{\mathsf T}\tau$ developed by the external torque; in the torque-free branch the rotational kinetic energy is a constant of the motion. This is a consequence of the adopted balance, not a separate assumption, and it does not by itself determine the motion.
