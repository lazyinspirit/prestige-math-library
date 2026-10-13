---
id: pthm-cm10-principal-axes
kind: physics-theorem
title: "Principal axes and principal moments of the inertia data of a rigid-material model, axis moments and extremal values"
status: draft
origin: session
domain: physics
dependency_level: 9
deps: [post-cm10-rigid-material, def-cm10-rigid-body-configuration, def-cm10-inertia-tensor, def-cm-mass-distribution-and-inertia-matrix, lem-cm-mass-moments-are-finite, lem-cm-inertia-tensor-about-a-point-is-finite, def-countable-choice, lem-cm-inertia-matrix-properties, cor-cm-principal-axes-of-the-inertia-matrix, cor-real-spectral-theorem-for-self-adjoint-endomorphisms, def-self-adjoint-and-normal-endomorphism, def-cm-inertia-tensor-about-a-point, def-orthogonal-vectors-sets-and-orthonormal-bases, def-inner-product-space, def-euclidean-inner-product, def-matrix-product-and-identity-matrix, thm-invertible-matrix-theorem, def-cm-special-orthogonal-group, lem-cm-skew-matrix-cross-product-correspondence, def-cross-product-in-r3, lem-cross-product-is-bilinear-alternating-and-orthogonal, thm-cross-product-norm-is-the-two-vector-gram-determinant, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, def-measure-null-set-and-almost-everywhere, prop-order-and-scalar-rules-for-the-nonnegative-integral, def-integral-over-a-measurable-set, def-integrable-real-and-complex-functions-and-their-integrals, def-vector-valued-derivative-and-integral, lem-cm-derivative-of-pairings-of-curves, def-cm01-units]
dependency_roles:
  post-cm10-rigid-material: physical-assumption
  def-cm10-rigid-body-configuration: formulation-prerequisite
  def-cm10-inertia-tensor: formulation-prerequisite
  def-cm-mass-distribution-and-inertia-matrix: mathematical-premise
  lem-cm-mass-moments-are-finite: mathematical-premise
  lem-cm-inertia-tensor-about-a-point-is-finite: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-cm-inertia-matrix-properties: mathematical-premise
  cor-cm-principal-axes-of-the-inertia-matrix: mathematical-premise
  cor-real-spectral-theorem-for-self-adjoint-endomorphisms: mathematical-premise
  def-self-adjoint-and-normal-endomorphism: mathematical-premise
  def-cm-inertia-tensor-about-a-point: mathematical-premise
  def-orthogonal-vectors-sets-and-orthonormal-bases: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  thm-invertible-matrix-theorem: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  lem-cm-skew-matrix-cross-product-correspondence: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  thm-cross-product-norm-is-the-two-vector-gram-determinant: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  thm-nonnegative-integral-zero-iff-zero-almost-everywhere: mathematical-premise
  def-measure-null-set-and-almost-everywhere: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  lem-cm-derivative-of-pairings-of-curves: mathematical-premise
  def-cm01-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The principal-axis structure of the inertia data of the rigid-material model branch of [[post-cm10-rigid-material]]: existence of an orthonormal principal basis with real principal moments, the identification of the quadratic form with the moment of inertia about an axis (body-fixed and spatial versions), the vanishing and positivity criteria for degenerate and nondegenerate mass distributions, and the extremal character of the largest and smallest principal moments. The identities are conditional on the model data and the countable-choice assumption used only for finiteness of the integrals. No measured inertia, no dynamics and no claim about any concrete body is asserted."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 3.2, Eq. (3.21) and the following text, printed pages 50-52 (PDF pages 56-58): orthogonal diagonalization of the symmetric inertia tensor, principal axes, and the semidefiniteness discussion"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Chapter 4 Section 4.3, chapter pages 6-8 (PDF pages 60-62): principal axes as the eigenvectors of the inertia tensor, with the moments of inertia read on the diagonal"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed. (MIT Press, 2014), Section 2.5: the principal moments as the eigenvalues of the inertia tensor and the diagonal form in the principal basis"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Chapter 2 Section 2.3, printed pages 37-41 (PDF pages 40-44): the tensor transformation to principal axes and the diagonal inertia matrix"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]), used only to make the integrals finite. Adopt the
model of [[post-cm10-rigid-material]] and its inertia data
([[def-cm10-inertia-tensor]]): the reference mass distribution $\nu$ with
total mass $m$ and centred reference coordinates, the body inertia matrix $I$,
the spatial inertia tensor $I(t)=R(t)IR(t)^{\mathsf T}$ of a motion
$x(t,\rho)=c(t)+R(t)\rho$, and the inertia tensor $I(t,p)$ about a spatial
point $p$ ([[def-cm10-rigid-body-configuration]]). Then:

**(a) Principal basis.** There is an orthonormal basis $(e_1,e_2,e_3)$ of
$\mathbb R^3$ and real numbers $I_1,I_2,I_3$, the **principal axes** and
**principal moments** of the model, with
$$Ie_j=I_je_j\qquad(j=1,2,3).$$

**(b) Quadratic form and rotational term.** For every
$\omega=\sum_j\omega_je_j\in\mathbb R^3$ one has
$I\omega=\sum_jI_j\omega_je_j$ and
$$\omega^{\mathsf T}I\omega=\sum_jI_j\omega_j^{2}=\int\lVert\omega\times\rho\rVert_2^{2}\,d\nu(\rho)\ \ge 0,$$
and each principal moment is
$I_j=e_j^{\mathsf T}Ie_j=\int\lVert e_j\times\rho\rVert_2^{2}\,d\nu(\rho)$.

**(c) Axis moments.** For every unit vector $n\in\mathbb R^3$,
$$n^{\mathsf T}In=\int\lVert n\times\rho\rVert_2^{2}\,d\nu(\rho);$$
for every spatial point $p$ and unit vector $n$, with $x=x(t,\cdot)$ the
placement at time $t$,
$$n^{\mathsf T}I(t,p)n=\int\lVert n\times\bigl(x(t,\rho)-p\bigr)\rVert_2^{2}\,d\nu(\rho).$$
Consequently the number $\Theta_\ell(t)=n^{\mathsf T}I(t,p)n$ of
[[def-cm10-inertia-tensor]] depends only on the spatial line $\ell$
$\{p+sn:s\in\mathbb R\}$ and not on the choice of the point $p$ on it nor on
the sign of the unit direction $n$.

**(d) Vanishing and positivity.** Each principal moment satisfies $I_j\ge0$,
and $I_j=0$ exactly when $\nu$ is supported on the line $\mathbb Re_j$ of the
principal axis, that is $\nu\bigl(\mathbb R^3\setminus\mathbb Re_j\bigr)=0$.
If the model is nondegenerate, that is if
$\nu\bigl(\mathbb R^3\setminus\mathbb R\omega\bigr)>0$ for every
$\omega\neq0$, then every $I_j>0$ and $I$ is invertible. If $\nu$ is
supported on some line through the origin (such a line exists whenever the
support of a centred $\nu$ is contained in a line, because the mean of $\nu$
is the origin), then $I$ is not invertible.

**(e) Extremal moments.** For every unit vector
$n=\sum_jc_je_j$ one has $n^{\mathsf T}In=\sum_jI_jc_j^{2}$ and therefore
$$\min_jI_j\ \le\ n^{\mathsf T}In\ \le\ \max_jI_j,$$
with the value $\max_jI_j$ attained at a unit eigenvector for a maximal
principal moment and the value $\min_jI_j$ attained at a unit eigenvector for
a minimal principal moment. Hence the largest and smallest principal moments
are the maximum and minimum of the rotational-inertia quadratic form over the
unit sphere.

The identities are conditional on the model data and the stated choice
assumption; no equation of motion and no conservation statement is used or
asserted.

## Facts & Assumptions
**Given:** The model data and inertia data of [[post-cm10-rigid-material]] and [[def-cm10-inertia-tensor]], a motion $x(t,\rho)=c(t)+R(t)\rho$ with $C^{2}$ configuration path, a time $t\in I_0$, vectors $\omega,n\in\mathbb R^3$ with $\lVert n\rVert_2=1$, and a spatial point $p$.

[L1] Mathematical supplier, principal axes ([[cor-cm-principal-axes-of-the-inertia-matrix]] clauses 1-2): there is an orthonormal basis $(e_1,e_2,e_3)$ with $Ie_j=I_je_j$, $I_j\in\mathbb R$; for $\omega=\sum_j\omega_je_j$ one has $I\omega=\sum_jI_j\omega_je_j$, $I_j=e_j^{\mathsf T}Ie_j$ and $\omega^{\mathsf T}I\omega=\sum_jI_j\omega_j^{2}=\int\lVert\omega\times\rho\rVert_2^{2}\,d\nu$.

[L2] Mathematical supplier, symmetry and quadratic identity ([[lem-cm-inertia-matrix-properties]] clauses 1-2): $I$ is symmetric, and $\omega^{\mathsf T}I\omega=\int\lVert\omega\times\rho\rVert_2^{2}\,d\nu\ge0$ for every $\omega$, so the quadratic form is positive semidefinite.

[L3] The shifted tensor and its definition ([[def-cm-inertia-tensor-about-a-point]], [[def-cm10-inertia-tensor]]): for $a\in\mathbb R^3$, $I_\nu(a)_{jk}=\int(\lVert\rho-a\rVert_2^{2}\delta_{jk}-(\rho_j-a_j)(\rho_k-a_k))\,d\nu(\rho)$; the model's tensor about $p$ is $I(t,p)=R(t)I_\nu(a(t,p))R(t)^{\mathsf T}$ with $a(t,p)=R(t)^{\mathsf T}(p-c(t))$.

[L4] Spectral theorem ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]], [[def-self-adjoint-and-normal-endomorphism]]): every self-adjoint endomorphism of a finite-dimensional real inner product space has an orthonormal basis of eigenvectors with real eigenvalues; the map $\omega\mapsto I\omega$ is self-adjoint because $I$ is symmetric and $\langle I\omega,z\rangle=\omega^{\mathsf T}Iz$.

[L5] Cross product and rotation algebra ([[def-cross-product-in-r3]], [[lem-cross-product-is-bilinear-alternating-and-orthogonal]], [[thm-cross-product-norm-is-the-two-vector-gram-determinant]], [[lem-cm-skew-matrix-cross-product-correspondence]], [[def-cm-special-orthogonal-group]]): $u\times v$ is bilinear and $u\times u=0$; $\lVert u\times v\rVert_2^{2}=\lVert u\rVert_2^{2}\lVert v\rVert_2^{2}-\langle u,v\rangle^{2}$, so $u\times v=0$ with $u\neq0$ holds exactly when $v$ is a real multiple of $u$; for $R\in SO(3)$, $R(u\times v)=(Ru)\times(Rv)$ and $\lVert Rv\rVert_2=\lVert v\rVert_2$.

[L6] Integrability and linearity ([[lem-cm-mass-moments-are-finite]], [[lem-cm-inertia-tensor-about-a-point-is-finite]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[def-integral-over-a-measurable-set]], [[def-integrable-real-and-complex-functions-and-their-integrals]]): the functions $\rho\mapsto\rho_j$, $\rho\mapsto\lVert\rho\rVert_2^{2}$ and the shifted quadratic polynomials of [L3] are $\nu$-integrable, so the entries of $I_\nu(a)$ are finite; the integral is linear on $L^1(\nu)$ and componentwise for vector- and matrix-valued integrands.

[L7] Orthonormality and coordinates ([[def-orthogonal-vectors-sets-and-orthonormal-bases]], [[def-inner-product-space]], [[def-euclidean-inner-product]], [[def-matrix-product-and-identity-matrix]]): in an orthonormal basis, coordinates are the inner products with the basis vectors, $\langle e_j,e_k\rangle=\delta_{jk}$, and a vector has unique coordinates; a linear map is determined by its values on a basis.


## Proof

**Proof technique:** direct; take the principal basis from the mathematical supplier and translate its quadratic-form identities into the model's axis moments, carrying the shifted-tensor algebra through the placement.

1.1 By [L2] the matrix $I$ is symmetric, so the map $T:\omega\mapsto I\omega$ satisfies $\langle T\omega,z\rangle=(I\omega)^{\mathsf T}z=\omega^{\mathsf T}Iz=\langle\omega,Tz\rangle$ for all $\omega,z$: it is self-adjoint on the Euclidean space $\mathbb R^3$. Applying the spectral theorem [L4], or equivalently clause 1 of [L1], gives an orthonormal basis $(e_1,e_2,e_3)$ and real $I_j$ with $Ie_j=I_je_j$. This is clause (a). [given, L1, L2, L4]

1.2 Spatial axis moments: put $a:=a(t,p)=R(t)^{\mathsf T}(p-c(t))$ and $m:=R(t)^{\mathsf T}n$, so that $\lVert m\rVert_2=\lVert n\rVert_2=1$. By [L3] and bilinearity of the matrix product, $$n^{\mathsf T}I(t,p)n=m^{\mathsf T}I_\nu(a)m=\sum_{j,k}m_jm_k\int\bigl(\lVert\rho-a\rVert_2^{2}\delta_{jk}-(\rho_j-a_j)(\rho_k-a_k)\bigr)d\nu(\rho).$$ The integrand is the shifted quadratic polynomial of [L3], integrable by [L6]; pulling the finite sum inside the integral by linearity [L6] and evaluating the sum gives $$\sum_{j,k}m_jm_k\bigl(\lVert\rho-a\rVert_2^{2}\delta_{jk}-(\rho_j-a_j)(\rho_k-a_k)\bigr)=\lVert m\rVert_2^{2}\lVert\rho-a\rVert_2^{2}-\langle m,\rho-a\rangle^{2}=\lVert m\times(\rho-a)\rVert_2^{2}$$ for each $\rho$, by the cross-norm identity of [L5] and $\lVert m\rVert_2=1$. Hence $n^{\mathsf T}I(t,p)n=\int\lVert m\times(\rho-a)\rVert_2^{2}\,d\nu(\rho)$. [given, L3, L5, L6, algebra]

2.1 For $\omega=\sum_j\omega_je_j$, linearity of $T$ and $Ie_j=I_je_j$ give $I\omega=\sum_jI_j\omega_je_j$; taking the inner product with $\omega$ and using $\langle e_j,e_k\rangle=\delta_{jk}$ gives $\omega^{\mathsf T}I\omega=\sum_jI_j\omega_j^{2}$, and [L1] gives the further equality $\sum_jI_j\omega_j^{2}=\int\lVert\omega\times\rho\rVert_2^{2}\,d\nu(\rho)$. Setting $\omega=e_j$ gives $I_j=e_j^{\mathsf T}Ie_j=\int\lVert e_j\times\rho\rVert_2^{2}\,d\nu(\rho)$. This is clause (b). [step 1.1, L1, L7, algebra]

2.2 Changing description: for every $\rho$, $R(t)\bigl(m\times(\rho-a)\bigr)=(Rm)\times(R\rho-Ra)$ by the equivariance clause of [L5], and $Rm=n$ while $R\rho-Ra=R\rho-(p-c)=x(t,\rho)-p$ by the defining relation $Ra=p-c$; since $R(t)$ preserves the norm [L5], $\lVert m\times(\rho-a)\rVert_2=\lVert n\times(x(t,\rho)-p)\rVert_2$. Substituting into step 1.2 gives the second identity of clause (c). [step 1.2, L5, algebra]

2.3 Invariance on the line: let $p'=p+sn$ with $s\in\mathbb R$, so that $a(t,p')=a+s\,m$ and $\rho-a(t,p')=(\rho-a)-s\,m$; then $m\times(\rho-a')=m\times(\rho-a)-s\,(m\times m)=m\times(\rho-a)$ by [L5], so the integral of step 1.2 is unchanged. Replacing $n$ by $-n$ replaces $m$ by $-m$, and $( -m)\times(\rho-a)=-m\times(\rho-a)$ has the same norm; the quadratic expression $n^{\mathsf T}I(t,p)n$ is unchanged under $n\mapsto-n$ by bilinearity. Hence $\Theta_\ell(t)$ depends only on the spatial line $\ell$ and not on the choice of $p$ on it or on the sign of $n$. This completes clause (c). [step 1.2, L5, algebra]

3.1 Body-fixed axis moments: applying step 2.1 with $\omega=n$ gives $n^{\mathsf T}In=\int\lVert n\times\rho\rVert_2^{2}\,d\nu(\rho)$ for every $n\in\mathbb R^3$, in particular for unit vectors. This is the first identity of clause (c). [step 2.1, given]

3.2 Nonnegativity and vanishing criterion: by step 2.1, $I_j=\int f_j\,d\nu$ with $f_j(\rho)=\lVert e_j\times\rho\rVert_2^{2}\ge0$; by [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]] and [[prop-order-and-scalar-rules-for-the-nonnegative-integral]] the integral vanishes exactly when $f_j=0$ $\nu$-almost everywhere, and by [[def-measure-null-set-and-almost-everywhere]] this holds exactly when $\nu\bigl(\{\rho:f_j(\rho)\neq0\}\bigr)=0$. Since $e_j\neq0$, the identity $e_j\times\rho=0$ is equivalent to $\rho\in\mathbb Re_j$ ([[def-cross-product-in-r3]], [[lem-cross-product-is-bilinear-alternating-and-orthogonal]]); hence $I_j=0$ exactly when $\nu\bigl(\mathbb R^3\setminus\mathbb Re_j\bigr)=0$, that is, exactly when $\nu$ is supported on the line of the principal axis $e_j$. [step 2.1, L2, L5, algebra]

4.1 Nondegeneracy: assume $\nu\bigl(\mathbb R^3\setminus\mathbb R\omega\bigr)>0$ for every $\omega\neq0$. For each $j$, the line $\mathbb Re_j$ is a line through the origin and $\mathbb Re_j=\mathbb R\omega$ for $\omega=e_j\neq0$, so $\nu\bigl(\mathbb R^3\setminus\mathbb Re_j\bigr)>0$ and step 3.2 gives $I_j\neq0$, hence $I_j>0$ by nonnegativity. If $I\omega=0$ for some $\omega$, then $\omega^{\mathsf T}I\omega=\omega^{\mathsf T}0=0$, so $\int\lVert\omega\times\rho\rVert_2^{2}\,d\nu=0$ by [L2] and the argument of step 3.2 gives $\nu\bigl(\mathbb R^3\setminus\mathbb R\omega\bigr)=0$ for that $\omega$; if $\omega\neq0$ this contradicts the nondegeneracy hypothesis, so the nullspace of $I$ is $\{0\}$ and $I$ is invertible ([[thm-invertible-matrix-theorem]]). [step 3.2, L2, algebra]

4.2 Degenerate support: suppose $\nu$ is supported on a line through the origin, with direction vector $u\neq0$, that is $\nu(\mathbb R^3\setminus\mathbb Ru)=0$. Then $u\times\rho=0$ for $\nu$-almost every $\rho$, so $u^{\mathsf T}Iu=\int\lVert u\times\rho\rVert_2^{2}\,d\nu=0$ by [L2]. For every $k$ and every real $s$, applying [L2] to $u+se_k$ and expanding the quadratic form by bilinearity and symmetry of $I$ gives $$u^{\mathsf T}Iu+2s\,e_k^{\mathsf T}Iu+s^{2}e_k^{\mathsf T}Ie_k=\int\lVert(u+se_k)\times\rho\rVert_2^{2}\,d\nu=s^{2}\int\lVert e_k\times\rho\rVert_2^{2}\,d\nu,$$ because $u\times\rho=0$ $\nu$-almost everywhere; the terms not involving $s^{2}$ therefore vanish for all $s$, so $e_k^{\mathsf T}Iu=0$ for every $k$ and hence $Iu=0$ with $u\neq0$. Thus $I$ is not invertible. If the support of a centred $\nu$ is contained in a line, that line passes through the origin, since $0=\int\rho\,d\nu/m$ is the mean of a measure supported there; hence the stated case covers every centred mass distribution supported on a line. This proves clause (d). [step 3.2, L2, L5, algebra]

5.1 Extremal values: for a unit vector $n=\sum_jc_je_j$, orthonormality gives $\sum_jc_j^{2}=\lVert n\rVert_2^{2}=1$ by [L7], and step 2.1 gives $n^{\mathsf T}In=\sum_jI_jc_j^{2}$; since the coefficients $c_j^{2}$ are nonnegative and sum to $1$ while each $I_j\ge0$ by step 3.2, the value lies between $\min_jI_j$ and $\max_jI_j$; setting $n$ equal to a unit eigenvector whose principal moment is minimal (respectively maximal) attains the minimum (respectively maximum). This is clause (e). [step 2.1, step 3.2, L7, algebra] ∎

## Remarks

- **Stationary points.** The principal axes are stationary points of the
  quadratic form on the unit sphere: if $s\mapsto n(s)$ is a differentiable
  curve of unit vectors with $n(0)=e_k$, then
  $\frac{d}{ds}\bigl(n(s)^{\mathsf T}In(s)\bigr)\big|_{s=0}
  =2\langle n'(0),Ie_k\rangle=2I_k\langle n'(0),e_k\rangle=0$, because
  $\lVert n(s)\rVert_2^{2}\equiv1$ gives
  $2\langle n'(0),e_k\rangle=0$ ([[lem-cm-derivative-of-pairings-of-curves]]
  clause 2). Every point of the unit sphere is stationary for a scalar
  multiple of the identity, so stationarity does not by itself single out
  geometric axes. Clause (e) identifies the extreme values and their
  eigenspaces; repeated extreme eigenvalues do not select unique axes, and
  for $I=\lambda I_3$ every unit vector attains both extrema.

- **Physical reading.** Clause (c) is the model's statement that
  $n^{\mathsf T}I(t,p)n$ is the moment of inertia of the body about the
  spatial line through $p$ in direction $n$, computed as the mass-weighted
  integral of the squared distance from the line; the body-fixed version
  $n^{\mathsf T}In$ is the time-independent moment about the line through the
  centre of mass in body direction $n$. Clause (b) identifies the rotational
  term of the kinetic splitting $\frac12\omega^{\mathsf T}I\omega$ with
  $\frac12\sum_jI_j\omega_j^{2}$ in the body principal basis.

- **Hypotheses used.** The principal basis is supplied by the review of the
  spectral theorem on the mathematical pages; $\mathrm{AC}_\omega$ is used
  only for the finiteness of the integrals through [[lem-cm-mass-moments-are-finite]],
  and the shifted-tensor identities introduce no further hypothesis. The
  nondegeneracy hypothesis is exactly the positive-definiteness criterion;
  the degenerate case is carried explicitly in clause (d).
