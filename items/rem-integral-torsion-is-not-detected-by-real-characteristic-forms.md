---
id: rem-integral-torsion-is-not-detected-by-real-characteristic-forms
kind: remark
title: Real characteristic forms do not detect integral torsion
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals
  - def-singular-cohomology-with-coefficients
  - prop-singular-cohomology-is-contravariantly-functorial
  - thm-naturality-normalization-and-whitney-sum-for-chern-classes
  - cor-odd-chern-classes-of-a-complexified-real-bundle-are-two-torsion
  - thm-mod-two-reduction-of-chern-classes
  - thm-whitney-sum-formula-for-stiefel-whitney-classes
  - def-stiefel-whitney-classes-from-the-projective-bundle-relation
  - def-tautological-degree-one-class-on-a-real-projective-bundle
  - lem-tautological-degree-one-class-is-well-defined-and-fiber-generating
  - lem-mod-two-cohomology-ring-of-infinite-real-projective-space
  - thm-vector-bundle-construction-from-a-smooth-cocycle
  - prop-complexification-is-conjugation-invariant
  - thm-connection-one-form-transformation-law
  - thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law
  - def-complex-linear-and-compatible-bundle-connections
  - thm-curvature-two-form-structure-equation
  - def-chern-pontryagin-and-euler-characteristic-forms
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II, Lecture 36
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "§36, 'Pontryagin classes', printed pp. 135–136: conjugation symmetry and 2-torsion in odd Chern classes of complexified real bundles"
axiom_audit: "Assume full AC, inherited through the Chern–Weil comparison theorem, the Chern-class naturality theorem, and the projective-space characteristic-class suppliers. The coefficient-map argument and the explicit local flat connection introduce no additional choices."
dependency_level: 8
---

## Remark

Assume full AC. Let $M$ be a finite-dimensional Hausdorff second-countable
smooth manifold, possibly empty or with boundary, and let
$\rho_M:H^*(M;\mathbb Z)\to H^*(M;\mathbb R)$ be the coefficient map. Every
integral torsion class maps to zero. Under the comparison theorem's respective
hypotheses (a Hermitian connection for Chern forms, any real connection for
Pontryagin forms, and a metric-compatible connection on an oriented even-rank
Euclidean bundle for Euler forms), these forms determine only the real
coefficient images of the integral characteristic classes. A zero real
characteristic class does not imply that the integral class is zero.

This loss occurs for a flat bundle: the complexification
$L=(\gamma^1)_{\mathbb C}$ of the tautological real line over
$\mathbb {RP}^2$ has a
flat Hermitian connection, while $c_1(L)$ has exact order two. Its first Chern
form is identically zero.

## Facts & Assumptions

**Given:** Full Axiom of Choice, the characteristic-form comparison theorem,
and the standard inclusion $j:\mathbb {RP}^2\hookrightarrow\mathbb {RP}^\infty$.

[A1] Full AC is the choice-function principle: every family of nonempty sets
has a choice function ([[def-axiom-of-choice]]).

[F1] For Hermitian complex connections and real connections, the Chern–Weil
comparison theorem identifies the de Rham classes of the characteristic forms
with the real coefficient images of the corresponding integral Chern,
Pontryagin, and Euler classes ([[thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals]]).

[F2] A coefficient homomorphism induces a map on singular cohomology, and that
map commutes with pullback ([[prop-singular-cohomology-is-contravariantly-functorial]]).

[F3] Integral Chern classes are natural under pullback between the stated CW
bases ([[thm-naturality-normalization-and-whitney-sum-for-chern-classes]]).

[F4] The odd Chern classes of a complexified real bundle are two-torsion.
The mod-two reduction of $c_1(V)$ is $w_2(V_{\mathbb R})$; total
Stiefel–Whitney classes multiply over real direct sums. For the universal
real line $\lambda\to\mathbb {RP}^\infty$, its $w_1$ is the tautological
degree-one class
([[cor-odd-chern-classes-of-a-complexified-real-bundle-are-two-torsion]],
[[thm-mod-two-reduction-of-chern-classes]],
[[thm-whitney-sum-formula-for-stiefel-whitney-classes]],
[[def-stiefel-whitney-classes-from-the-projective-bundle-relation]],
[[def-tautological-degree-one-class-on-a-real-projective-bundle]],
[[lem-tautological-degree-one-class-is-well-defined-and-fiber-generating]]).

[F5] Restriction along $j$ is an isomorphism in mod-two cohomology through
degree two ([[lem-mod-two-cohomology-ring-of-infinite-real-projective-space]]).

[F6] Smooth nonzero transition functions satisfying the cocycle identities
construct a smooth line bundle
([[thm-vector-bundle-construction-from-a-smooth-cocycle]]).

[F7] Complexification is $E_{\mathbb C}=E\otimes_{\mathbb R}\mathbb C$ and
uses the real transition matrices as complex-linear transition maps; tensoring
commutes with pullback ([[prop-complexification-is-conjugation-invariant]]).

[F8] If frames obey $e'=eA$, connection matrices obey
$\omega'=A^{-1}\omega A+A^{-1}dA$
([[thm-connection-one-form-transformation-law]]); local matrices obeying this
rule glue to a unique connection ([[thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law]]).

[F9] A complex connection obeys the complex Leibniz rule and is Hermitian
when it satisfies the metric derivative identity
([[def-complex-linear-and-compatible-bundle-connections]]).

[F10] The curvature matrix in a local frame is
$\Omega=d\omega+\omega\wedge\omega$
([[thm-curvature-two-form-structure-equation]]).

[F11] For a complex line, the normalized first Chern form is
$c_1(\nabla)=-\Omega/(2\pi i)$
([[def-chern-pontryagin-and-euler-characteristic-forms]]).

[F12] Cohomology with coefficients in a commutative-ring module is itself a
module over that ring ([[def-singular-cohomology-with-coefficients]]).

## Proof

1.1 Every integral torsion class maps to zero under the real coefficient map. [F2, F12, algebra]
Let $x\in H^k(M;\mathbb Z)$ satisfy $n x=0$ for a nonzero integer $n$.
The coefficient map is additive, so
$n\rho_M(x)=\rho_M(nx)=0$. By [F12], $H^k(M;\mathbb R)$ is a real vector space,
it has no nonzero element annihilated by $n$; hence $\rho_M(x)=0$. This also
covers negative $n$ by replacing it with $|n|$. [F2, F12, algebra]

1.2 The complexified tautological real line on $\mathbb {RP}^2$ has first Chern class of exact order two. [F2, F3, F4, F5, F6, F7]
Let $j:\mathbb {RP}^2\hookrightarrow\mathbb {RP}^\infty$ be the
skeletal inclusion, put $u=w_1(\lambda)$ and
$a=c_1(\lambda_{\mathbb C})$. By the odd-class theorem in [F4],
$2a=0$. The fiberwise real-linear map
$(\lambda_{\mathbb C})_{\mathbb R}\to\lambda\oplus\lambda$,
$v\otimes(s+it)\mapsto(sv,tv)$, is an isomorphism. Thus [F4] gives
$$\rho_2(a)=w_2((\lambda_{\mathbb C})_{\mathbb R})=w_2(\lambda\oplus\lambda)=u^2.$$
By [F4, F5], $u$ is the polynomial generator and $j^*(u^2)\ne0$.
Naturality of coefficient
change [F2] gives
$$\rho_2(j^*a)=j^*\rho_2(a)=j^*(u^2)\ne0.$$
The canonical fiberwise map $(j^*\lambda)\otimes_{\mathbb R}\mathbb C\to
j^*(\lambda_{\mathbb C})$, $v\otimes z\mapsto v\otimes z$, identifies the
complexification $L=(j^*\lambda)_{\mathbb C}$ with the pullback of
$\lambda_{\mathbb C}$. The restricted real line is the standard tautological
line $\gamma^1$ by its fiber description. Naturality [F3] therefore identifies $j^*a$ with
$c_1(L)$. Thus $2c_1(L)=0$ and
$c_1(L)\ne0$, so $c_1(L)$ has exact order two. [F2, F3, F4, F5, F6, F7]

1.3 Constant sign transitions on normalized frames give a flat Hermitian connection. [F6, F7, F8, F9, F10, F11, algebra]
On each standard affine chart $U_i=\{[x_0:x_1:x_2]:x_i\ne0\}$,
let $v_i$ be the unique representative with $i$th coordinate $1$. The
transition from $v_i$ to $v_j$ is the smooth nonzero coordinate ratio;
the cocycle identity holds because these are rescalings of one vector.
Thus [F6] gives the smooth tautological line with fibers $\mathbb R x$.
Set $s_i=v_i/\|v_i\|$. These are smooth unit frames of $\gamma^1$. On each
component of $U_i\cap U_j$, the sign of $x_j/x_i$ is constant and the frames
satisfy $s_j=\varepsilon_{ij}s_i$ for a locally constant
$\varepsilon_{ij}\in\{1,-1\}$. Their complexifications
$e_i=s_i\otimes1$ are unitary frames of $L$ with the same constant
transitions. In the underlying real frames $(e_i,ie_i)$ the transition
matrices are $\varepsilon_{ij}I_2$. Set the real connection matrices
$\omega_i=0$ in every frame. Since
$\varepsilon_{ij}^{-1}d\varepsilon_{ij}=0$, the transformation law [F8]
holds and the local gluing theorem gives a global real connection. In these
frames the complex structure has constant matrix, so the connection commutes
with it; its zero matrices also satisfy the Hermitian metric derivative
identity. Thus [F9] makes it a complex-linear Hermitian connection. The
structure equation [F10] gives $\Omega=0$, so the determinant normalization
[F11] yields $c_1(\nabla)=0$ pointwise. [F6, F7, F8, F9, F10, F11, algebra]

2.1 The comparison theorem shows that the flat form misses this integral torsion. [F1, step 1.1, step 1.2, step 1.3]
By step 1.1 the order-two class from step 1.2 maps to zero in real
cohomology. Step 1.3 constructs a Hermitian connection with zero first Chern
form. The comparison theorem [F1] identifies its de Rham class with that same
zero real image, while $c_1(L)$ remains nonzero by step 1.2. This is the
promised explicit failure of real characteristic forms to detect integral
torsion. [F1, step 1.1, step 1.2, step 1.3]

3.1 Empty, zero, rank-one, choice, endpoint, and iff cases are covered. [A1, F1, step 1.1, step 1.2, step 1.3, step 2.1, cases]
The empty manifold has zero singular and de Rham groups, so the coefficient-map assertion is vacuous there; the witness is the fixed nonempty $\mathbb {RP}^2$. The zero integral class maps to zero, while the exhibited degree-two class has exact order two. The witness is rank one and has a nonzero first Chern class. The exact-order argument in step 1.2 uses the nonzero reduction to exclude the zero class. No parameterized path or endpoint claim occurs. AC is assumed in [A1] and inherited through the characteristic-class suppliers used above; the normalized frames and flat connection in step 1.3 are explicit and choice-free. The remark states no biconditional. [A1, F1, step 1.1, step 1.2, step 1.3, step 2.1, cases] ∎

## Source notes

Miller, *Lectures on Algebraic Topology II*, Lecture 36, “Pontryagin classes,”
printed pp. 135–136, explains that complexification of a real bundle is
isomorphic to its conjugate and therefore its odd Chern classes are
2-torsion. This corroborates the torsion mechanism only. The nonzero
order-two restriction to $\mathbb {RP}^2$ is established from [F2]–[F5], and
the flat unitary connection is constructed directly from the local frames in
step 1.3.
