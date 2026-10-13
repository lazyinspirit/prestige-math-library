---
id: cex-cm10-degenerate-line-mass-singular-inertia
kind: counterexample
title: "A rigid-material model of two point masses on a line: the inertia matrix can be singular, and rotation about the line is invisible to the rotational term"
status: draft
origin: session
domain: physics
dependency_level: 10
deps: [post-cm10-rigid-material, def-cm10-rigid-body-configuration, def-cm10-angular-velocity, def-cm10-inertia-tensor, pthm-cm10-kinetic-splitting, pthm-cm10-principal-axes, def-cm-mass-distribution-and-inertia-matrix, lem-cm-mass-moments-are-finite, def-countable-choice, lem-cm-inertia-matrix-properties, def-dirac-measure, prop-dirac-measure-is-a-probability-measure, thm-nonnegative-weighted-sums-of-measures, def-nonnegative-weighted-sum-of-measures, def-nonnegative-lebesgue-integral, def-integral-of-a-nonnegative-simple-function, def-integral-over-a-measurable-set, def-integrable-real-and-complex-functions-and-their-integrals, thm-linearity-of-the-lebesgue-integral-on-l-one, def-cross-product-in-r3, def-euclidean-inner-product, def-matrix-space, def-matrix-product-and-identity-matrix, lem-cm-coordinate-rotation-matrices, def-cm-special-orthogonal-group, lem-finite-sum-laws, def-cm01-units]
dependency_roles:
  post-cm10-rigid-material: physical-assumption
  def-cm10-rigid-body-configuration: formulation-prerequisite
  def-cm10-angular-velocity: formulation-prerequisite
  def-cm10-inertia-tensor: formulation-prerequisite
  pthm-cm10-kinetic-splitting: physical-result
  pthm-cm10-principal-axes: physical-result
  def-cm-mass-distribution-and-inertia-matrix: mathematical-premise
  lem-cm-mass-moments-are-finite: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-cm-inertia-matrix-properties: mathematical-premise
  def-dirac-measure: mathematical-premise
  prop-dirac-measure-is-a-probability-measure: mathematical-premise
  thm-nonnegative-weighted-sums-of-measures: mathematical-premise
  def-nonnegative-weighted-sum-of-measures: mathematical-premise
  def-nonnegative-lebesgue-integral: mathematical-premise
  def-integral-of-a-nonnegative-simple-function: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-matrix-space: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  lem-cm-coordinate-rotation-matrices: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  lem-finite-sum-laws: mathematical-premise
  def-cm01-units: formulation-prerequisite
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
proof_strategy: direct
physical_scope: "A counterexample inside the rigid-material model branch of [[post-cm10-rigid-material]]: two equal point masses at opposite points of a line through the reference origin give a centred mass distribution whose inertia matrix has a zero principal moment and is not invertible, and a rotation of the model about that line has zero rotational kinetic energy and zero angular momentum about the centre of mass. The item refutes only the claim that every positive-mass rigid-material model has positive definite inertia; it asserts no measured value and no failure of the model's other statements, which carry the degeneracy caveat."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 3.2, Eq. (3.22) and the equality-case discussion, printed page 51 (PDF page 57): the inertia quadratic form vanishes precisely when all the mass lies on a line through the centre of mass"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Chapter 4 Section 4.4, chapter pages 8-11 (PDF pages 62-65): the warning that degenerate mass distributions require care with the inertia tensor, in the free symmetric-top discussion"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed. (MIT Press, 2014), Sections 2.3-2.5: the moment of inertia about an axis and the principal moments of discrete mass distributions, including the case of collinear mass"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
verification:
  precheck: pass
---

## Statement refuted

In the rigid-material model branch of [[post-cm10-rigid-material]], **every
model of positive total mass has a positive definite inertia matrix**:
equivalently, every principal moment of the body inertia matrix $I$ is
strictly positive and $I$ is invertible.

## Facts & Assumptions
**Given:** The model branch and its inertia data ([[post-cm10-rigid-material]], [[def-cm10-inertia-tensor]]), with the notation of [[def-cm-mass-distribution-and-inertia-matrix]]. The model parameters are $m_0>0$ in kilograms ($[m_0]=\mu$), $a>0$ in metres ($[a]=\ell$), and a constant rate $\varpi\in\mathbb R$ in radians per second ($[\varpi]=\tau^{-1}$), with dimensionless radians and time $t$ in seconds ([[def-cm01-units]]). Inertia entries and moments have dimension $\mu\ell^2$, read in kilogram metres squared; rotational energy and centre-of-mass angular momentum have dimensions $\mu\ell^2\tau^{-2}$ and $\mu\ell^2\tau^{-1}$, read in joules and kilogram metres squared per second. All values are model quantities, not measurements.

[L1] Dirac measures and their weighted sums ([[def-dirac-measure]], [[prop-dirac-measure-is-a-probability-measure]], [[thm-nonnegative-weighted-sums-of-measures]], [[def-nonnegative-weighted-sum-of-measures]]): a finite weighted sum of Dirac measures at distinct points with positive weights is a finite bounded measure on the Borel space of $\mathbb R^3$, and its integral on nonnegative measurable functions is computed by the finite-atomic formula of step 1.1.

[L2] Integral rules ([[def-nonnegative-lebesgue-integral]], [[def-integral-of-a-nonnegative-simple-function]], [[def-integral-over-a-measurable-set]], [[def-integrable-real-and-complex-functions-and-their-integrals]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]]): linearity of the integral on $L^1$ and the componentwise reading of vector integrals.

[L3] Inertia data and principal axes ([[def-cm10-inertia-tensor]], [[pthm-cm10-principal-axes]], [[lem-cm-inertia-matrix-properties]] clauses 1-2): $I=\int(\lVert\rho\rVert_2^{2}I_3-\rho\rho^{\mathsf T})d\nu$, $I$ is symmetric, $\omega^{\mathsf T}I\omega=\int\lVert\omega\times\rho\rVert_2^{2}\,d\nu\ge0$, and the principal basis and the vanishing criterion of clause (d) of [[pthm-cm10-principal-axes]] are available.

[L4] Kinetic splitting and angular velocity ([[pthm-cm10-kinetic-splitting]] clauses 3-4, [[def-cm10-angular-velocity]]): on a motion with body angular velocity $\omega$, the rotational term is $\frac12\omega^{\mathsf T}I\omega$ and the angular momentum about the centre of mass is $L_c=RI\omega$.

[L5] Cross-product and matrix algebra ([[def-cross-product-in-r3]], [[def-euclidean-inner-product]], [[def-matrix-space]], [[def-matrix-product-and-identity-matrix]], [[lem-finite-sum-laws]]): $e_3\times te_3=0$ for every real $t$ and $\lVert te_3\rVert_2=|t|$; matrix-vector multiplication is componentwise in the standard basis.

## Counterexample

**Proof technique:** direct; define the model, compute its inertia matrix from the finite-atomic formula, and exhibit the zero moment and the unobservable rotation.

1.1 Finite-atomic integration formula: fix $m_0>0$, $a>0$ and $\nu=m_0\delta_{ae_3}+m_0\delta_{-ae_3}$. For a nonnegative simple function $s$, the defining simple integral gives $\int s\,d\nu=m_0s(ae_3)+m_0s(-ae_3)$ by [L1] and [L2]. If $f\ge0$ is measurable and finite at the two atoms, $s_0=f(ae_3)\chi_{\{ae_3\}}+f(-ae_3)\chi_{\{-ae_3\}}\le f$ is a nonnegative simple minorant. Its integral gives the lower bound $m_0f(ae_3)+m_0f(-ae_3)$, while every simple $s\le f$ gives the corresponding upper bound. Taking the supremum proves $\int f\,d\nu=m_0f(ae_3)+m_0f(-ae_3)$. For a nonnegative function infinite at an atom, simple minorants with arbitrary finite value there have unbounded integrals, giving the same identity with value $+\infty$. For a real measurable function finite at the atoms, applying the finite formula to its modulus establishes integrability, and positive/negative parts and linearity give the signed formula; the complex case follows by real/imaginary parts. [given, L1, L2, algebra]

2.1 The model. Take $m_0>0$, $a>0$ and
$$\nu:=m_0\delta_{ae_3}+m_0\delta_{-ae_3},$$
a finite weighted sum of Dirac measures at the distinct points $ae_3$ and $-ae_3$ with positive weights. By [L1] $\nu$ is a finite bounded measure; its total mass is $m=2m_0\in(0,\infty)$ and its first moment is $\int\rho\,d\nu=m_0ae_3+m_0(-ae_3)=0$ by the finite-atomic formula of step 1.1, so the reference coordinates are centred and $\nu$ is a mass distribution of the model branch. [step 1.1, given, L1]

3.1 Inertia matrix: by step 1.1 and [L3], $$I=m_0\bigl(\lVert ae_3\rVert_2^{2}I_3-(ae_3)(ae_3)^{\mathsf T}\bigr)+m_0\bigl(\lVert -ae_3\rVert_2^{2}I_3-(-ae_3)(-ae_3)^{\mathsf T}\bigr)=2m_0a^{2}\bigl(I_3-e_3e_3^{\mathsf T}\bigr),$$ which is $\mathrm{diag}(2m_0a^{2},\,2m_0a^{2},\,0)$ in the standard basis by [L5]. In particular $Ie_3=0$ with $e_3\neq0$, so $I$ is not invertible. [step 1.1, step 2.1, L3, L5, algebra]

4.1 Principal data and the vanishing criterion: the displayed matrix is diagonal, so the principal moments are $2m_0a^{2}$, $2m_0a^{2}$ and $0$, and $e_3$ is a principal axis with vanishing moment. This is consistent with clause (d) of [L3]: $\nu$ is supported on the line $\mathbb Re_3$ of the principal axis $e_3$, so the principal moment about $e_3$ vanishes; the model is degenerate, and the nondegeneracy hypothesis of the positivity statement fails. [step 3.1, L3, L5, algebra]

4.2 A rotation about the line is invisible to the rotational term. Let the model move with constant-rate orientation path $R(t)=R_z(\varpi t)$ about the symmetry axis, so that the configuration path is $(c,R)$ with $c$ arbitrary of class $C^{2}$; by [[def-cm10-angular-velocity]] its body angular velocity is $\omega=\varpi e_3$ (the axis $e_3$ is fixed by $R_z$, and $R^{\mathsf T}R'=[\varpi e_3]_\times$ by the derivative clause of the coordinate-rotation matrices). Every material point lies on the rotation axis: $\omega\times(\pm ae_3)=\pm\varpi(e_3\times ae_3)=0$ by [L5], so the material velocity equals $c'$ on both mass-carrying labels and the rotational term is $\frac12\omega^{\mathsf T}I\omega=\frac12\varpi^{2}e_3^{\mathsf T}Ie_3=0$ by [L4] and step 3.1. The angular momentum about the centre of mass is $L_c=RI\omega=0$ by [L4], so the motion's spin about the line produces neither rotational kinetic energy nor angular momentum. [step 3.1, L3, L4, L5, algebra]

5.1 Conclusion. The model is a rigid-material model of positive total mass, and its inertia matrix $\mathrm{diag}(2m_0a^{2},2m_0a^{2},0)$ has a zero principal moment, is not invertible, and fails to detect rotation about the line carrying the masses. The refuted statement — that every positive-mass model of the branch has positive definite inertia — is therefore false. The correct criterion is clause (d) of [[pthm-cm10-principal-axes]]: the moment about a principal axis vanishes exactly when the mass is supported on that axis; the model branch, the kinetic splitting and the principal-axis theorem all remain valid with their stated degeneracy caveats. [step 3.1, step 4.1, step 4.2, L3, L4] ∎

## Remarks

- **What is refuted, and what is not.** Only the universal positivity claim is
  refuted. The positivity criterion of [[pthm-cm10-principal-axes]] clause (d)
  is consistent with the example: the vanishing moment occurs exactly because
  the mass is supported on the principal axis. No statement of the model
  branch that carries the nondegeneracy hypothesis is affected.

- **The physical reading of the zero moment.** The two point masses lie on
  the instantaneous rotation axis, so a rotation of the model about that line
  moves no material point; the model attributes no kinetic energy to a motion
  that does not move its mass. The angular momentum $L_c=RI\omega$ loses the
  component of $\omega$ along the line: $I\omega=\mathrm{diag}(2m_0a^{2},2m_0a^{2},0)\omega$,
  so the relation between $\omega$ and $L_c$ is not injective. A consumer
  requiring $\omega$ from $L_c$, or requiring an invertible inertia matrix,
  must exclude or regularize this case explicitly.

- **No measured value.** The parameters $m_0$ and $a$ are model data; the
  example asserts no measured inertia and no claim that any concrete body has
  collinear material points.
