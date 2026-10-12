---
id: pthm-cm10-frame-covariance
kind: physics-theorem
title: "Behaviour of the rigid-material configuration, angular velocity, inertia
  data and inertial quantities under a change of inertial frame"
status: draft
origin: session
domain: physics
dependency_level: 10
deps:
  - post-cm10-rigid-material
  - def-cm10-rigid-body-configuration
  - def-cm10-angular-velocity
  - def-cm10-inertia-tensor
  - pthm-cm10-kinetic-splitting
  - post-cm01-frames
  - lem-cm-adapted-charts-and-galilean-transformations
  - lem-cm-so3-is-a-matrix-group
  - lem-cm-skew-matrix-cross-product-correspondence
  - lem-cm-matrix-curve-derivative-rules
  - thm-chain-rule-for-total-derivatives
  - thm-ck-euclidean-maps-closed-under-algebra-and-composition
  - def-ck-euclidean-maps-and-diffeomorphisms
  - def-cm01-units
  - def-euclidean-inner-product
  - def-cm-special-orthogonal-group
  - def-matrix-product-and-identity-matrix
  - def-derivative
  - def-interval
  - def-borel-sigma-algebra
  - thm-generated-sigma-algebra-exists-and-is-minimal
  - def-integral-of-a-nonnegative-simple-function
  - def-nonnegative-lebesgue-integral
  - def-integrable-real-and-complex-functions-and-their-integrals
  - thm-linearity-of-the-lebesgue-integral-on-l-one
dependency_roles:
  post-cm10-rigid-material: physical-assumption
  def-cm10-rigid-body-configuration: formulation-prerequisite
  def-cm10-angular-velocity: formulation-prerequisite
  def-cm10-inertia-tensor: formulation-prerequisite
  pthm-cm10-kinetic-splitting: physical-result
  post-cm01-frames: formulation-prerequisite
  lem-cm-adapted-charts-and-galilean-transformations: mathematical-premise
  lem-cm-so3-is-a-matrix-group: mathematical-premise
  lem-cm-skew-matrix-cross-product-correspondence: mathematical-premise
  lem-cm-matrix-curve-derivative-rules: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-cm01-units: formulation-prerequisite
  def-euclidean-inner-product: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
  def-borel-sigma-algebra: mathematical-premise
  thm-generated-sigma-algebra-exists-and-is-minimal: mathematical-premise
  def-integral-of-a-nonnegative-simple-function: mathematical-premise
  def-nonnegative-lebesgue-integral: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Transformation laws of the rigid-material model branch of
  [[post-cm10-rigid-material]] between two inertial frames related by $t'=t+b$,
  $x'=Qx+ut+a$: the configuration path and material velocity field of the same
  motion in the new frame, invariance of the body angular velocity and rotation
  of the spatial angular velocity and of the spatial inertia tensor, and the
  transformation of the total momentum, kinetic-energy splitting and
  centre-of-mass angular momentum. The statements are conditional kinematic and
  inertial identities for the model; no dynamics and no measured value is
  asserted."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015
        printing), Section 3.1.2, printed pages 49-50 (PDF pages 55-56): the
        parallel discussion of body and space angular-velocity descriptions and
        the convention-dependence of the extracted vector"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics
        (title page last edited September 1, 2026), Chapter 4 Sections 4.1-4.2,
        Eqs. (4.1)-(4.22), chapter pages 1-6 (PDF pages 55-60): moving-basis
        kinematics and the inertia data of the moving frame"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical
        Mechanics, 2nd ed. (MIT Press, 2014), Section 2.2: the body-frame
        description of the same rigid motion and the transformation between body
        and space quantities"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9\
        579/sicm_edition_2.zip"
verification:
  precheck: pass
---

## Statement

Adopt the model of [[post-cm10-rigid-material]] and notation of
[[def-cm10-rigid-body-configuration]], [[def-cm10-angular-velocity]] and
[[def-cm10-inertia-tensor]]: a reference mass distribution $\nu$ with total
mass $m$ and centred reference coordinates, a body inertia matrix $I$, a
motion $x(t,\rho)=c(t)+R(t)\rho$ in one inertial frame with configuration path
$(c,R)$ of class $C^2$ and body angular velocity $\omega$, and the quantities
of [[pthm-cm10-kinetic-splitting]],
$$P(t)=\int\partial_tx(t,\rho)\,d\nu(\rho),\qquad K(t)=\frac12\int\lVert\partial_tx(t,\rho)\rVert_2^{2}\,d\nu(\rho),\qquad L_c(t)=\int\bigl(x(t,\rho)-c(t)\bigr)\times\bigl(\partial_tx(t,\rho)-c'(t)\bigr)\,d\nu(\rho).$$
Let a second inertial frame be related to the first by the transformation
$t'=t+b$, $x'=Qx+ut+a$ of [[post-cm01-frames]] clause (iv), with
$b\in\mathbb R$, $a,u\in\mathbb R^3$ and $Q\in SO(3)$; the rotation $Q$ and
the boost velocity $u$ are the parameters written $R$ and $v$ in
[[post-cm01-frames]], renamed here to avoid clashes with the orientation path
$R(t)$ and the material velocity field $v(t,p)$ of
[[def-cm10-rigid-body-configuration]]. Let
$\tilde x(t',\rho):=Q\,x(t'-b,\rho)+u\,(t'-b)+a$ be the description of the
same motion in the second frame. Then:

1. $\tilde x(t',\rho)=\tilde c(t')+\tilde R(t')\rho$ with
   $\tilde c(t')=Qc(t'-b)+u\,(t'-b)+a$ and
   $\tilde R(t')=Q\,R(t'-b)$; the maps $\tilde c$ and $\tilde R$ are of class
   $C^2$, $\tilde R$ takes values in $SO(3)$, and $\tilde x$ is a motion of
   the same model with the same reference mass distribution;
2. the body angular velocities satisfy
   $\tilde\omega(t')=\omega(t'-b)$, and the spatial angular velocities satisfy
   $\tilde\omega_{\mathrm s}(t')=Q\omega_{\mathrm s}(t'-b)$;
3. the material velocity fields satisfy
   $\partial_{t'}\tilde x(t',\rho)=Q\,\partial_tx(t'-b,\rho)+u$;
   equivalently, for a spatial point $p$ of the first frame with image
   $p'=Qp+ut+a$, $\tilde v(t',p')=Q\,v(t,p)+u$;
4. the body inertia matrix computed from $\nu$ is the same matrix $I$ in
   either frame, and the spatial inertia tensors satisfy
   $\tilde I(t')=Q\,I(t'-b)\,Q^{\mathsf T}$; consequently
   $\tilde\omega(t')^{\mathsf T}I\tilde\omega(t')=\omega(t'-b)^{\mathsf T}I\omega(t'-b)$
   and
   $\tilde\omega_{\mathrm s}(t')^{\mathsf T}\tilde I(t')\tilde\omega_{\mathrm s}(t')=\omega_{\mathrm s}(t'-b)^{\mathsf T}I(t'-b)\omega_{\mathrm s}(t'-b)$;
5. the inertial quantities satisfy
   $$\tilde P(t')=Q\,P(t'-b)+mu,\qquad \tilde L_c(t')=Q\,L_c(t'-b),$$
   $$\tilde K(t')=\frac12m\lVert Qc'(t'-b)+u\rVert_2^{2}+\frac12\omega(t'-b)^{\mathsf T}I\omega(t'-b).$$

The statements are kinematic and inertial identities for the model; no
equation of motion, no conservation law and no measured value is asserted.

## Facts & Assumptions
**Given:** The model data and motion of the statement, the two inertial frames and the transformation $t'=t+b$, $x'=Qx+ut+a$, and a time $t'$ in the second frame's time window $I_0+b$.

[L1] Frame transformation ([[lem-cm-adapted-charts-and-galilean-transformations]] clause 1, [[post-cm01-frames]] clause (iv)): two inertial frames are related by exactly one transformation $t'=t+b$, $x'=Qx+ut+a$ with $b\in\mathbb R$, $a,u\in\mathbb R^3$ and $Q\in SO(3)$, the rotation and boost velocity written $R$ and $v$ in [[post-cm01-frames]]; the descriptions of an event in the two frames differ by this law.

[L2] Group and algebra of rotations ([[lem-cm-so3-is-a-matrix-group]], [[def-cm-special-orthogonal-group]], [[def-matrix-product-and-identity-matrix]]): $SO(3)$ is a group under multiplication, so $QR(t'-b)\in SO(3)$; product, transpose and inverse satisfy the usual rules, and $Q^{\mathsf T}Q=QQ^{\mathsf T}=I_3$.

[L3] Chain rule and $C^k$ closure ([[thm-chain-rule-for-total-derivatives]], [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-derivative]]): the map $t'\mapsto t'-b$ is smooth, compositions and products of $C^2$ maps are $C^2$, and $\frac{d}{dt'}\bigl(Qx(t'-b,\rho)\bigr)=Q\,\partial_tx(t'-b,\rho)$.

[L4] Skew-matrix correspondence ([[lem-cm-skew-matrix-cross-product-correspondence]], [[lem-cm-matrix-curve-derivative-rules]]): a skew-symmetric matrix determines its representing vector uniquely; for a differentiable curve $t\mapsto R(t)$ in $SO(3)$ the matrix $R^{\mathsf T}R'$ is skew and the body angular velocity is the unique vector with $R^{\mathsf T}R'=[\omega]_\times$, and $[\omega]_\times z=\omega\times z$.

[L5] The inertial identities needed here hold without a choice hypothesis by the following local argument; [[pthm-cm10-kinetic-splitting]] is used for the names and integral definitions of the quantities. Every scalar integrand involved is a polynomial in $\rho$ of degree at most two, and is continuous. For any such real polynomial $f$, the family $\mathcal S_f:=\{B\subseteq\mathbb R:f^{-1}(B)\in\mathcal B(\mathbb R^3)\}$ is a sigma-algebra, since preimages commute with complements and countable unions. It contains every open set, by continuity, so it contains $\mathcal B(\mathbb R)$ by [[def-borel-sigma-algebra]] and [[thm-generated-sigma-algebra-exists-and-is-minimal]]. This proves the required measurability directly, without the countable-choice-qualified general supplier. The integrals are finite: if $|f|\le C$ on the support ball and $N$ is its null complement, a simple minorant $s\le|f|$ has the same simple integral as $s\mathbf1_{N^c}$, because every positive level-set intersection with $N$ has measure zero. This integral is at most $C\nu(\mathbb R^3)$ by the finite disjoint simple-integral formula; taking the supremum gives $\int|f|\,d\nu\le Cm<\infty$ ([[def-integral-of-a-nonnegative-simple-function]], [[def-nonnegative-lebesgue-integral]], [[def-integrable-real-and-complex-functions-and-their-integrals]]). Finite linearity ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]) now computes the identities: the material velocity is $c'+R(\omega\times\rho)$ by [L4], and $\int\rho\,d\nu=0$ by centredness, so $P=mc'$. Expanding its squared norm, orthogonality of $R$ removes $R$ from the rotational term, and the mixed term integrates to zero. The identity $|\omega\times\rho|^2=|\omega|^2|\rho|^2-(\omega\cdot\rho)^2$ then gives $K=\tfrac12m|c'|^2+\tfrac12\omega^{\mathsf T}I\omega$ by the defining integral of $I$. Likewise $R\rho\times R(\omega\times\rho)=R\bigl(\rho\times(\omega\times\rho)\bigr)=R\bigl((|\rho|^2I_3-\rho\rho^{\mathsf T})\omega\bigr)$, so $L_c=RI\omega$ by that same definition. Both cross-product identities follow by expanding their three coordinates. The argument applies to either frame's $C^2$ configuration path and the same centred bounded finite measure.


## Proof

**Proof technique:** direct; substitute the transformation law into the definitions, differentiate with the chain rule, and read the constants off the supplier's identities.

1.1 By [L1], the description of the motion in the second frame is the displayed map $\tilde x$. Substituting $x(t,\rho)=c(t)+R(t)\rho$ at $t=t'-b$ and distributing the matrix product, $$\tilde x(t',\rho)=Qc(t'-b)+u\,(t'-b)+a+QR(t'-b)\rho,$$ so $\tilde x=\tilde c+\tilde R\rho$ with $\tilde c$ and $\tilde R$ as in clause 1. The map $\tilde R$ takes values in $SO(3)$ by [L2], and $\tilde c$, $\tilde R$ are of class $C^2$ by [L3], since $t'\mapsto t'-b$, $Q$, $u$ and $a$ are smooth and the composition and product rules for $C^2$ maps apply. This proves clause 1. [given, L1, L2, L3, algebra]

2.1 Derivative of the rotation path: by clause 1, $\tilde R(t')=Q\,R(t'-b)$; differentiating with the chain rule [L3] gives $\frac{d}{dt'}\tilde R(t')=Q\,R'(t'-b)$, where $R'$ is the time derivative of the first-frame rotation path (second-frame quantities carry tildes in this item). Hence $$\tilde R(t')^{\mathsf T}\frac{d}{dt'}\tilde R(t')=R(t'-b)^{\mathsf T}Q^{\mathsf T}QR'(t'-b)=R(t'-b)^{\mathsf T}R'(t'-b)=[\omega(t'-b)]_\times$$ by $Q^{\mathsf T}Q=I_3$ [L2] and the definition of $\omega$ [L4]; the representing vector of a skew matrix is unique [L4], so $\tilde\omega(t')=\omega(t'-b)$. This is the first assertion of clause 2. [step 1.1, L2, L3, L4, algebra]

2.2 Material velocity: differentiating $\tilde x(t',\rho)=Qx(t'-b,\rho)+u\,(t'-b)+a$ with the chain rule [L3] gives $\partial_{t'}\tilde x(t',\rho)=Q\partial_tx(t'-b,\rho)+u$, which is the first identity of clause 3. For the spatial form, let $p$ be a spatial point of the first frame at time $t=t'-b$ and $p'=Qp+u\,(t'-b)+a=Qp+ut+a$ its image in the second frame at time $t'$; substituting $p=x(t,\rho)$ and $p'=\tilde x(t',\rho)$ gives $\tilde v(t',p')=Qv(t,p)+u$. This proves clause 3. [step 1.1, L3, algebra]

2.3 Momentum: by [L5] applied in the second frame, $\tilde P(t')=m\,\frac{d}{dt'}\tilde c(t')$; differentiating the first identity of clause 1 with the chain rule [L3] gives $\frac{d}{dt'}\tilde c(t')=Qc'(t'-b)+u$, where $c'$ is the time derivative of the first-frame path $c$; hence $\tilde P(t')=Q(mc'(t'-b))+mu=QP(t'-b)+mu$ by [L5] in the first frame. [step 1.1, L3, L5, algebra]

3.1 Spatial angular velocity: $\tilde\omega_{\mathrm s}(t')=\tilde R(t')\tilde\omega(t')=QR(t'-b)\omega(t'-b)=Q\omega_{\mathrm s}(t'-b)$ by step 2.1 and clause 1. This completes clause 2. [step 2.1, step 1.1, algebra]

4.1 Inertia data: the reference mass distribution of the model is the same data in either frame; hence the body inertia matrix computed from $\nu$ is $I$ in both descriptions. The spatial tensor of the second-frame description is $$\tilde I(t')=\tilde R(t')I\tilde R(t')^{\mathsf T}=QR(t'-b)\,I\,R(t'-b)^{\mathsf T}Q^{\mathsf T}=Q\,I(t'-b)\,Q^{\mathsf T}$$ by step 1.1 and the transpose rules [L2]. The rotational quadratic forms: $\tilde\omega(t')^{\mathsf T}I\tilde\omega(t')=\omega(t'-b)^{\mathsf T}I\omega(t'-b)$ by step 2.1, and $$\tilde\omega_{\mathrm s}(t')^{\mathsf T}\tilde I(t')\tilde\omega_{\mathrm s}(t')=\omega_{\mathrm s}(t'-b)^{\mathsf T}Q^{\mathsf T}QI(t'-b)Q^{\mathsf T}Q\,\omega_{\mathrm s}(t'-b)=\omega_{\mathrm s}(t'-b)^{\mathsf T}I(t'-b)\omega_{\mathrm s}(t'-b)$$ by step 3.1, the display above and $Q^{\mathsf T}Q=I_3$ [L2]. This proves clause 4. [step 2.1, step 3.1, L2, algebra]

5.1 Angular momentum: by [L5] in the second frame, $\tilde L_c(t')=\tilde R(t')I\tilde\omega(t')$, and by steps 1.1 and 2.1 this equals $QR(t'-b)I\omega(t'-b)=Q\,L_c(t'-b)$ using [L5] in the first frame. [step 2.1, step 4.1, L5, algebra]

6.1 Kinetic energy: by [L5] in the second frame, $\tilde K(t')=\frac12m\lVert\frac{d}{dt'}\tilde c(t')\rVert_2^{2}+\frac12\tilde\omega(t')^{\mathsf T}I\tilde\omega(t')$; substituting $\frac{d}{dt'}\tilde c(t')=Qc'(t'-b)+u$ and $\tilde\omega(t')=\omega(t'-b)$ gives the displayed formula of clause 5. Together with steps 2.3 and 5.1 this proves clause 5. [step 2.3, step 2.1, step 4.1, L5, algebra] ∎

## Remarks

- **Body quantities are invariant, spatial quantities rotate.** The body
  angular velocity and the body inertia matrix are unchanged by the change of
  inertial frame; the spatial angular velocity and the spatial inertia tensor
  transform by $Q$ and conjugation. This is the precise sense in which the
  rotational term $\frac12\omega^{\mathsf T}I\omega$ of the kinetic splitting
  is frame-independent while the translational term
  $\frac12m\lVert c'\rVert_2^{2}$ is not.

- **Consistency with the particle branch.** For a body whose mass is
  concentrated at its centre of mass the rotational term vanishes and the
  laws of clause 5 reduce to the transformation of the kinetic quantities of
  a particle of mass $m$; the transformation law for particle systems is the
  subject of [[pthm-cm03-frame-transformations]], and the present item is its
  rigid-material analogue. The two are consistent where both apply, and
  neither is used to prove the other.

- **What is not asserted.** No transformation law for forces, torques or
  energies beyond the displayed inertial quantities is claimed; no equation
  of motion is transformed, because the branch has none at this stage.
