---
id: ex-cm10-equilateral-triangle-rotational-inertia
kind: example
title: "An equilateral-triangle rigid-material model: inertia matrix, principal axes, rotational term and the threefold-symmetry check"
status: published
origin: session
domain: physics
dependency_level: 10
deps: [post-cm10-rigid-material, def-cm10-rigid-body-configuration, def-cm10-angular-velocity, def-cm10-inertia-tensor, pthm-cm10-kinetic-splitting, pthm-cm10-principal-axes, def-cm-mass-distribution-and-inertia-matrix, lem-cm-mass-moments-are-finite, def-countable-choice, def-dirac-measure, prop-dirac-measure-is-a-probability-measure, thm-nonnegative-weighted-sums-of-measures, def-nonnegative-weighted-sum-of-measures, def-nonnegative-lebesgue-integral, def-integral-of-a-nonnegative-simple-function, def-integral-over-a-measurable-set, def-integrable-real-and-complex-functions-and-their-integrals, thm-linearity-of-the-lebesgue-integral-on-l-one, prop-order-and-scalar-rules-for-the-nonnegative-integral, def-cross-product-in-r3, thm-cross-product-norm-is-the-two-vector-gram-determinant, def-euclidean-inner-product, def-matrix-space, def-matrix-product-and-identity-matrix, lem-cm-coordinate-rotation-matrices, def-sine-and-cosine-by-power-series, thm-sine-and-cosine-addition-formulas, cor-trigonometric-parity-and-pythagorean-identity, lem-finite-sum-laws, def-cm01-units, def-pi-via-first-positive-cosine-zero, thm-pi-zero-and-period-characterizations, thm-sine-cosine-signs-monotonicity-and-ranges, cor-pi-is-the-first-positive-sine-zero]
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
  def-dirac-measure: mathematical-premise
  prop-dirac-measure-is-a-probability-measure: mathematical-premise
  thm-nonnegative-weighted-sums-of-measures: mathematical-premise
  def-nonnegative-weighted-sum-of-measures: mathematical-premise
  def-nonnegative-lebesgue-integral: mathematical-premise
  def-integral-of-a-nonnegative-simple-function: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  thm-cross-product-norm-is-the-two-vector-gram-determinant: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-matrix-space: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  lem-cm-coordinate-rotation-matrices: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  lem-finite-sum-laws: mathematical-premise
  def-cm01-units: formulation-prerequisite
  def-pi-via-first-positive-cosine-zero: mathematical-premise
  thm-pi-zero-and-period-characterizations: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  cor-pi-is-the-first-positive-sine-zero: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Under the inherited Axiom of Countable Choice $\\mathrm{AC}_\\omega$ of the inertia and kinetic-splitting suppliers, a worked rigid-material model: three equal point masses at the vertices of an equilateral triangle in reference coordinates centred at the triangle's centre. The example computes the model's body inertia matrix, its principal axes and moments, the rotational term of the kinetic splitting for a general motion, and the invariance of the inertia matrix under the threefold symmetry rotation. It is a model instance with declared numerical proportions of the parameters; no measured moment of inertia and no concrete physical body is asserted."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 3.2, Eqs. (3.19)-(3.23), printed pages 50-52 (PDF pages 56-58): inertia tensors of finite point-mass systems, principal axes and the semidefiniteness discussion"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Chapter 4 Section 4.2, Eqs. (4.14)-(4.22), chapter pages 4-6 (PDF pages 58-60): computed inertia tensors of discrete mass distributions and the rotational kinetic energy"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed. (MIT Press, 2014), Sections 2.3-2.5: moments of inertia and principal moments of discrete mass distributions"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
verification:
  precheck: pass
---

## Example

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ of [A1],
as required by the inertia and kinetic-splitting suppliers.
Adopt a rigid-material model of [[post-cm10-rigid-material]] whose reference
mass distribution is the finite weighted sum of Dirac measures
$$\nu:=m_0\sum_{k=0}^{2}\delta_{x_k},\qquad x_k:=a\Bigl(\cos\frac{2\pi k}{3},\ \sin\frac{2\pi k}{3},\ 0\Bigr)\quad(k=0,1,2),$$
with equal weights $m_0>0$ in kilograms ($[m_0]=\mu$) and circumradius
$a>0$ in metres ($[a]=\ell$). Under [[def-cm01-units]], the basis vectors
and angles are dimensionless, the $x_k$ have length dimension, inertia
entries and principal moments have dimension $\mu\ell^2$, read in kilogram
metres squared, and angular-velocity components $\omega_j$ and the constant
rate $\varpi$ used below have dimension $\tau^{-1}$, read in radians per
second with dimensionless radians and time in seconds. Rotational kinetic
energy has dimension $\mu\ell^2\tau^{-2}$, read in joules. The parameters
are model data, not measurements. Here
$g(u,v):=\langle u,v\rangle=\sum_{j=1}^3u_jv_j$ for $u,v\in\mathbb R^3$
is the Euclidean inner product ([[def-euclidean-inner-product]]); a
$g$-orthonormal pair $u,v$ satisfies $g(u,u)=g(v,v)=1$ and $g(u,v)=0$. Then:

1. $\nu$ is a centred mass distribution of total mass $m=3m_0$ in the sense
   of [[def-cm-mass-distribution-and-inertia-matrix]];
2. the body inertia matrix is
   $$I=\mathrm{diag}\Bigl(\frac{3m_0a^{2}}{2},\ \frac{3m_0a^{2}}{2},\ 3m_0a^{2}\Bigr);$$
3. the principal axes are $e_3$ together with any $g$-orthonormal pair in the
   plane $\{\rho\in\mathbb R^3:\rho_3=0\}$, and the principal moments are $\frac{3m_0a^{2}}{2}$ (twice)
   and $3m_0a^{2}$; the model is nondegenerate and $I$ is invertible;
4. for any motion of the model with body angular velocity
   $\omega=\sum_j\omega_je_j$, the rotational term of
   [[pthm-cm10-kinetic-splitting]] is
   $$\frac12\omega^{\mathsf T}I\omega=\frac12\cdot\frac{3m_0a^{2}}{2}\bigl(\omega_1^{2}+\omega_2^{2}\bigr)+\frac12\cdot3m_0a^{2}\omega_3^{2};$$
5. the threefold rotation $S:=R_z(2\pi/3)$ satisfies $SI S^{\mathsf T}=I$, so
   the inertia data of the equilateral triangle are invariant under the
   symmetry rotation of the shape, and the two equal transverse principal
   moments exhibit that symmetry: $I$ restricts to the scalar $3m_0a^2/2$ on the transverse plane.

## Facts & Assumptions
**Given:** Assume $\mathrm{AC}_\omega$ as specified in [A1]. The weights $m_0>0$, the circumradius $a>0$, the points $x_0,x_1,x_2$ displayed above, the measure $\nu$ and the mathematical notation of [[def-cm-mass-distribution-and-inertia-matrix]], [[def-cross-product-in-r3]] and [[def-euclidean-inner-product]].

[A1] The Axiom of Countable Choice ([[def-countable-choice]]) is adopted: for every family $(X_n)_{n\in\mathbb N}$ of nonempty sets there is $f:\mathbb N\to\bigcup_nX_n$ with $f(n)\in X_n$ for all $n$. It is the inherited premise of [[def-cm10-inertia-tensor]], [[lem-cm-mass-moments-are-finite]], [[pthm-cm10-principal-axes]] and [[pthm-cm10-kinetic-splitting]], used for the general measurability/finiteness route invoked here; the explicit atomic computation does not establish the axiom.

[L1] Dirac measures and their weighted sums ([[def-dirac-measure]], [[prop-dirac-measure-is-a-probability-measure]], [[thm-nonnegative-weighted-sums-of-measures]], [[def-nonnegative-weighted-sum-of-measures]]): $\nu$ is a measure on the Borel space of $\mathbb R^3$ with $\nu(E)=m_0\sum_k\delta_{x_k}(E)$; it is finite and supported on the three points $x_k$, hence bounded.

[L2] Integration against a finite atomic measure ([[def-nonnegative-lebesgue-integral]], [[def-integral-of-a-nonnegative-simple-function]], [[def-integral-over-a-measurable-set]], [[def-integrable-real-and-complex-functions-and-their-integrals]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]): for a nonnegative measurable $f$ the integral is the supremum of integrals of simple minorants; the resulting finite-atomic formula is proved in step 1.1 below. Under [A1], [[lem-cm-mass-moments-are-finite]] supplies the measurability and integrability of the coordinate and quadratic polynomials used in that formula.

[L3] Model and inertia data ([[post-cm10-rigid-material]], [[def-cm10-inertia-tensor]], [[pthm-cm10-principal-axes]]): the body inertia matrix is $I=I(\nu)=\int(\lVert\rho\rVert_2^{2}I_3-\rho\rho^{\mathsf T})\,d\nu(\rho)$; its principal basis exists, the principal moment about $e_j$ is $\int\lVert e_j\times\rho\rVert_2^{2}\,d\nu$, and the model is nondegenerate exactly when no line through the origin carries all the mass, in which case every principal moment is positive and $I$ is invertible.

[L4] The constant $\pi>0$ is defined by [[def-pi-via-first-positive-cosine-zero]]; $2\pi$ is a common sine/cosine period by [[thm-pi-zero-and-period-characterizations]], sine is positive on $(0,\pi)$ by [[cor-pi-is-the-first-positive-sine-zero]], and cosine strictly decreases on $[0,\pi]$ by [[thm-sine-cosine-signs-monotonicity-and-ranges]]. The following finite sums are derived in step 1.2 using these facts and [[def-sine-and-cosine-by-power-series]], [[thm-sine-and-cosine-addition-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[lem-finite-sum-laws]]: $\sum_{k=0}^{2}\cos(2\pi k/3)=\sum_{k=0}^{2}\sin(2\pi k/3)=0$, $\sum_{k}\cos^{2}(2\pi k/3)=\sum_{k}\sin^{2}(2\pi k/3)=\frac32$ and $\sum_{k}\cos(2\pi k/3)\sin(2\pi k/3)=0$; further $\cos(2\pi/3)=-\frac12$ and $\sin(2\pi/3)=\frac{\sqrt3}{2}$.

[L5] Coordinate rotations ([[lem-cm-coordinate-rotation-matrices]]): $R_z(a)\in SO(3)$ for every real $a$, with the displayed entries in terms of $\cos a$ and $\sin a$; $R_z(a)R_z(b)=R_z(a+b)$.

[L6] Matrix and norm algebra ([[def-matrix-space]], [[def-matrix-product-and-identity-matrix]], [[thm-cross-product-norm-is-the-two-vector-gram-determinant]], [[def-euclidean-inner-product]]): matrix products act on column vectors; $\lVert u\times v\rVert_2^{2}=\lVert u\rVert_2^{2}\lVert v\rVert_2^{2}-\langle u,v\rangle^{2}$; $e_3\times\rho=( -\rho_2,\rho_1,0)$ has squared norm $\rho_1^{2}+\rho_2^{2}$.

[L7] Kinetic splitting ([[pthm-cm10-kinetic-splitting]] clause 3): under [A1], for every $C^2$ motion of this centred model on its open time window, with body angular velocity defined by $R^{\mathsf T}R'= [\omega]_\times$ ([[def-cm10-angular-velocity]]), $K=\frac12m\lVert c'\rVert_2^2+\frac12\omega^{\mathsf T}I\omega$; the second term is the rotational kinetic energy.

## Verification

**Proof technique:** direct finite computation; verify the model data, the inertia matrix, the principal data and the symmetry invariant with explicit trigonometric sums.

1.1 Finite-atomic integration formula: let $f$ be $\nu$-integrable. If $s=\sum_ja_j\chi_{E_j}$ is a nonnegative simple function, then $\int s\,d\nu=\sum_ja_j\nu(E_j)=\sum_ja_j\,m_0\sum_k\delta_{x_k}(E_j)=m_0\sum_ks(x_k)$ by [L1]; taking the supremum over simple $0\le s\le f$ and using the minorant $s_0:=\sum_kf(x_k)\chi_{\{x_k\}}\le f$ together with the bound $\int s\,d\nu=m_0\sum_ks(x_k)\le m_0\sum_kf(x_k)$ valid for every simple $0\le s\le f$ gives $\int f\,d\nu=m_0\sum_kf(x_k)$ for nonnegative $f$; the real case follows from $f=f^{+}-f^{-}$ and linearity [L2], and the complex case by real/imaginary parts. [L1, L2, algebra]

1.2 Trigonometric values and sums: put $\theta=2\pi/3$ and $c=\cos\theta$. The period in [L4] gives $\cos3\theta=1$. Repeated addition and the Pythagorean identity give $\cos3\theta=4c^3-3c$, hence $(c-1)(2c+1)^2=0$. Since $0<\theta<\pi$ and cosine strictly decreases on $[0,\pi]$, $c<\cos0=1$, so $c=-1/2$. Positivity of sine and its squared value $1-c^2=3/4$ give $\sin\theta=\sqrt3/2$. The addition formulas now give $(\cos2\theta,\sin2\theta)=(-1/2,-\sqrt3/2)$. Together with $(\cos0,\sin0)=(1,0)$ these three explicit pairs yield all five finite sums in [L4] by addition. [L4, algebra]

2.1 The measure is a mass distribution: by [L1] it is finite and bounded with support $\{x_0,x_1,x_2\}$, and $\nu(\mathbb R^3)=3m_0\in(0,\infty)$. Its first moment is $\int\rho\,d\nu=m_0\sum_kx_k=m_0a\bigl(\sum_k\cos(2\pi k/3),\sum_k\sin(2\pi k/3),0\bigr)=0$ by step 1.1 and [L4]: the reference coordinates are centred. [step 1.1, L1, L4, step 1.2, algebra]

2.2 Inertia matrix: by step 1.1 and [L3], $$I=\int\bigl(\lVert\rho\rVert_2^{2}I_3-\rho\rho^{\mathsf T}\bigr)d\nu(\rho)=m_0\sum_k\bigl(\lVert x_k\rVert_2^{2}I_3-x_kx_k^{\mathsf T}\bigr)=m_0\Bigl(3a^{2}I_3-\sum_kx_kx_k^{\mathsf T}\Bigr),$$ because $\lVert x_k\rVert_2=a$ for every $k$. The matrix $\sum_kx_kx_k^{\mathsf T}$ has entries $a^{2}\sum_k\cos^{2}(2\pi k/3)$, $a^{2}\sum_k\cos(2\pi k/3)\sin(2\pi k/3)$ and $a^{2}\sum_k\sin^{2}(2\pi k/3)$ in the plane and zero in the third row and column, so by [L4] it equals $\mathrm{diag}(\frac{3a^{2}}{2},\frac{3a^{2}}{2},0)$. Hence $I=m_0\,\mathrm{diag}(3a^{2}-\frac{3a^{2}}{2},\,3a^{2}-\frac{3a^{2}}{2},\,3a^{2})$, which is the displayed matrix of clause 2. [A1, step 1.1, L3, L4, step 1.2, algebra]

3.1 Principal data: the displayed matrix is diagonal, so $Ie_1=\frac{3m_0a^{2}}{2}e_1$, $Ie_2=\frac{3m_0a^{2}}{2}e_2$ and $Ie_3=3m_0a^{2}e_3$: $e_3$ is a principal axis with moment $3m_0a^{2}$, and every $g$-orthonormal pair in the plane $\{\rho\in\mathbb R^3:\rho_3=0\}$ is a pair of principal axes with the common moment $\frac{3m_0a^{2}}{2}$. The integral identities are checked directly: $\int\lVert e_3\times\rho\rVert_2^{2}\,d\nu=m_0\sum_k((x_k)_1^{2}+(x_k)_2^{2})=m_0\cdot3a^{2}=3m_0a^{2}$ and $\int\lVert e_1\times\rho\rVert_2^{2}\,d\nu=m_0\sum_k((x_k)_2^{2}+(x_k)_3^{2})=m_0\cdot\frac{3a^{2}}{2}$ by [L4] and [L6], in agreement with the diagonal entries by clause 2. [A1, step 2.2, L3, L4, L6, algebra]

4.1 Nondegeneracy and invertibility: no line through the origin contains two of the points $x_k$, because their arguments modulo $\pi$ are $0,\frac{\pi}{3},\frac{2\pi}{3}$ (using [L4]), which are pairwise distinct; hence for every line $L$ through the origin at least two of the three points lie outside $L$ and $\nu(\mathbb R^3\setminus L)\ge2m_0>0$. The model is therefore nondegenerate, and by clause (d) of [L3] all principal moments are positive (as they visibly are) and $I$ is invertible. [A1, step 3.1, L3, L4, step 1.2, algebra]

4.2 Rotational term: by clause (b) of [L3] and clause 2, for a motion with body angular velocity $\omega=\sum_j\omega_je_j$ the quadratic form is $\omega^{\mathsf T}I\omega=\sum_jI_j\omega_j^{2}=\frac{3m_0a^{2}}{2}(\omega_1^{2}+\omega_2^{2})+3m_0a^{2}\omega_3^{2}$; multiplying by $\frac12$ and citing clause 3 of [[pthm-cm10-kinetic-splitting]] for the reading of the term as the rotational kinetic energy gives clause 4. In particular a rotation about the symmetry axis $e_3$ with rate $\varpi$ has rotational term $\frac32m_0a^{2}\varpi^{2}$, and a rotation about an in-plane principal axis has term $\frac34m_0a^{2}\varpi^{2}$. [A1, L7, step 3.1, L3, algebra]

4.3 Symmetry check: $S=R_z(2\pi/3)$ is the rotation of the reference plane that carries $x_k$ to $x_{k+1}$ for $k=0,1,2$ (indices modulo $3$): its matrix acts on $a(\cos\theta,\sin\theta,0)$ as $a(\cos(\theta+\frac{2\pi}{3}),\sin(\theta+\frac{2\pi}{3}),0)$ by the addition formulas and [L5]. Since $S$ is orthogonal and preserves norms, $$SIS^{\mathsf T}=m_0\Bigl(3a^{2}I_3-\sum_k(Sx_k)(Sx_k)^{\mathsf T}\Bigr)=m_0\Bigl(3a^{2}I_3-\sum_kx_{k+1}x_{k+1}^{\mathsf T}\Bigr)=I$$ by step 2.2, the preservation of norms and the relabelling of the finite sum. Thus $SI=IS$, and the invariance of the inertia data under the threefold symmetry is exhibited; on the plane $\{\rho\in\mathbb R^3:\rho_3=0\}$, where $S$ acts as the rotation by $\frac{2\pi}{3}$, the matrix $I$ is scalar, which is exactly the equality of the two transverse principal moments in step 3.1. [step 2.2, step 3.1, L5, L6, algebra]

5.1 Interpretation: the model is a rigid-material model with three equal point masses whose reference shape is symmetric under the threefold rotation; its inertia matrix, principal axes, principal moments and rotational term have been computed, and the symmetry invariance of the inertia matrix checked. The numbers are proportions of the model parameters $m_0$ and $a$; no measured moment of inertia and no concrete physical body is asserted, and the statements are conditional on the model of [[post-cm10-rigid-material]]. [step 4.1, step 4.2, step 4.3, given] ∎

## Remarks

- **The threefold symmetry and the equal transverse moments.** The equality
  $SI=IS$ of step 4.3 is the model's version of the general fact that a
  symmetry rotation of a mass distribution is a symmetry of its inertia
  data; here it is verified in a finite computation. It does not by itself
  prove that every axisymmetric body has equal transverse moments; that
  statement would require an argument relating the invariance of the measure
  to the inertia integral beyond the finite check performed here.

- **Reading the numbers.** The principal moment about the symmetry axis
  exceeds either transverse moment by the factor $2$ in this configuration:
  $\frac{3m_0a^{2}}{2}$ against $3m_0a^{2}$. This is a property of the chosen
  shape, not a general law, and it illustrates that the three principal
  moments need not be distinct.

- **Empirical status.** The parameters $m_0$ and $a$ are model data; the
  example asserts no measured values and no claim that any actual rigid body
  has this mass distribution.
