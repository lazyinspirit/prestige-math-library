---
id: def-qftx-cpt-spin-statistics-interface
kind: definition
title: CPT and spin-statistics proof interface
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
deps:
  - def-countable-choice
  - def-hilbert-space
  - def-real-and-complex-inner-product-space
  - def-qftx-joint-spectrum-input
  - thm-qftx-spectral-tube-holomorphy
  - def-qft-weak-operator-valued-tempered-distribution
  - def-qft-poincare-test-action
  - def-schwartz-space-and-its-seminorms
  - lem-qft-poincare-pullback-continuity-on-schwartz
dependency_roles:
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  def-qftx-joint-spectrum-input: mathematical-premise
  thm-qftx-spectral-tube-holomorphy: mathematical-premise
  def-qft-weak-operator-valued-tempered-distribution: mathematical-premise
  def-qft-poincare-test-action: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  lem-qft-poincare-pullback-continuity-on-schwartz: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Christopher J. Fewster and Kasia Rejzner, Algebraic Quantum Field Theory—an introduction, arXiv:1904.04051v2 (2019)"
      url: https://arxiv.org/pdf/1904.04051
      locator: "§5.2, printed p. 25, proof of Theorem 26: bounded-insertion tube functions and the explicit edge-of-the-wedge invocation; the theorem proved there is Reeh–Schlieder."
    - title: "Jens Mund, General Aspects of Relativistic Quantum Field Theory, incomplete lecture notes, DF-UFJF (2012)"
      url: https://www.ufjf.br/fisica/files/2022/03/AQFT.pdf
      locator: "§2.1, Theorems 2.6 and 2.8, PDF pp. 15–19: the exact reconstruction hypotheses, Fourier-support tube continuation, and an edge-of-the-wedge statement; the notes identify Theorem 2.8's proof as a reference rather than a local proof."
    - title: "Luis Álvarez-Gaumé and Miguel A. Vázquez-Mozo, General properties of noncommutative field theories, arXiv:hep-th/0305093 (2003)"
      url: https://arxiv.org/pdf/hep-th/0305093
      locator: "§4, PDF pp. 12–19: the scalar noncommutative CPT proof interface, including tube/complex-group continuation and weak locality; §4.3 records limits on spin-statistics. Used as a scoped analytic comparison, not as a general scalar/spinor theorem."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

A **CPT/spin-statistics proof interface** is the minimum set of typed data,
hypotheses, and proof obligations that must be fixed before a scalar or spinor
Wightman CPT or spin-statistics theorem is stated. It is a checklist, not a
sufficiency theorem, and it asserts neither conclusion.

The proposed field system must specify a nonzero complex Hilbert space
$\mathcal H$ as in “Hilbert space”, with inner product linear in its
first argument as in “Real and complex inner-product spaces and their induced length”, a dense
complex linear field domain
$\mathcal D_{\mathrm{field}}\subseteq\mathcal H$, and a finite-dimensional
complex component space $V$ with $1\le\dim_{\mathbb C}V<\infty$, together with a
distinguished unit vector $\Omega\in\mathcal D_{\mathrm{field}}$. A field multiplet is a finite family of complex-linear maps on Schwartz test functions, with the Schwartz topology of “Schwartz space and its seminorms” and the Poincaré pullback convention of “Proper-orthochronous Poincaré action and test pullback”:
$\Phi_\alpha:\mathcal S(\mathbb R^4;\mathbb C)\to
\operatorname{Lin}(\mathcal D_{\mathrm{field}})$, where
$\operatorname{Lin}(\mathcal D_{\mathrm{field}})$ is the vector space of
linear maps from that domain to itself. Each field map preserves
$\mathcal D_{\mathrm{field}}$ and is weakly tempered: for every
$u,v\in\mathcal D_{\mathrm{field}}$,
$f\mapsto(\Phi_\alpha(f)u,v)$ is a continuous linear functional on Schwartz
space. Every finite product on $\mathcal D_{\mathrm{field}}$ must be defined.
For $g=(A,a)$, use $T_gf(x)=f(\Lambda(A)^{-1}(x-a))$.
The Poincaré pullback continuity lemma guarantees $T_gf\in\mathcal S$
and continuity of $T_g$ and $T_{g^{-1}}$ in the Schwartz topology, so
field covariance with these transformed tests is defined on the declared domain.
The associated
$n$-point function is the multilinear functional
$$(f_1,\ldots,f_n)\longmapsto (\Phi_{\alpha_1}(f_1)\cdots\Phi_{\alpha_n}(f_n)\Omega,\Omega);$$
the interface must require and identify its continuous extension to
$\mathcal S(\mathbb R^{4n};\mathbb C)$ for each component sequence.

The domain must satisfy $U(g)\mathcal D_{\mathrm{field}}=\mathcal D_{\mathrm{field}}$ for every group element $g$. The symmetry
data must include a strongly continuous unitary group representation $U$ of
the spin-cover Poincaré group
$\widetilde P^\uparrow_+:=SL(2,\mathbb C)\ltimes\mathbb R^4$, with product
$(A,a)(B,b)=(AB,a+\Lambda(A)b)$. Give $SL(2,\mathbb C)$ its subspace topology
from $M_2(\mathbb C)$ and the semidirect product the product topology. Here
$SL(2,\mathbb C)=\{A\in M_2(\mathbb C):\det A=1\}$, and $GL(V)$ denotes the
invertible complex-linear maps on $V$. The specified continuous surjective
double-cover homomorphism
$\Lambda:SL(2,\mathbb C)\to SO^+(1,3)$ has kernel $\{I,-I\}$; $-I$ is the
central order-two kernel element called the $2\pi$-rotation element here.
$SO^+(1,3)$ and the affine translation conventions are those of the
Poincaré supplier. Each $U(g)$ is a surjective linear isometry of
$\mathcal H$, $U(gh)=U(g)U(h)$, and $g\mapsto U(g)\xi$ is norm-continuous
for each fixed $\xi\in\mathcal H$. The field system also specifies a
continuous finite-dimensional representation $S:SL(2,\mathbb C)\to GL(V)$,
so $S(AB)=S(A)S(B)$ and $S(I)=I$.
Its field covariance identity must be stated explicitly as an equality in
$\operatorname{Lin}(\mathcal D_{\mathrm{field}})$ and checked against the
group law. It must identify whether the component matrix is $S$, its dual, or
its complex conjugate and fix the test-function pullback or its inverse, the
adjoint convention, and all component indices. The vacuum $\Omega$ must be invariant under
translations, with translation-invariant subspace exactly $\mathbb C\Omega$,
and cyclic: the span of all vectors
$\Phi_{\alpha_1}(f_1)\cdots\Phi_{\alpha_n}(f_n)\Omega$, including $\Omega$,
is dense in $\mathcal H$.

The positive-energy premise must be the joint PVM input of
“Positive-energy joint spectral input”, including its Countable Choice assumption, on this same $\mathcal H$ with
this same $\Omega$. Denote its translation representation by
$U_{\mathrm{spec}}$ and require
$$U((I,a))=U_{\mathrm{spec}}(a)=\Phi_E(p\mapsto e^{ip\cdot a})\qquad(a\in\mathbb R^4).$$
For $f,g\in\mathcal S(\mathbb R^4;\mathbb C)$ with compact spacelike-separated
supports, the field locality identity and its sign must be stated on
$\mathcal D_{\mathrm{field}}$. Here $\operatorname{supp}f$ is the closure of
$\{x:f(x)\ne0\}$. Spacelike separation here means
$(x^0-y^0)^2-|\mathbf x-\mathbf y|^2<0$ for every support pair. If a proof
uses **weak locality**, that term means the equality of the original and
reversed vacuum $n$-point distributions on the specific real set of relative
coordinates required by the selected theorem; the set, reversal, field
grading, and distributional boundary interpretation must be stated rather
than left under the name “Jost points.”

The proof interface must then identify, with the Fourier sign and relative
coordinates fixed, the multivariable tube domain to which each $n$-point
distribution is continued. A **complexified Lorentz action** here is a
specified holomorphic action on $\mathbb C^4$ of a specified complex matrix
group extending the real action through $\Lambda$ and preserving the
complex-bilinear extension of the Minkowski form. A **complex Lorentz
extension** means a single-valued holomorphic continuation on a stated domain
generated by that action; the acting group, its action, and the domain must be
given and the covariance formula checked there. Any
**edge-of-the-wedge** step must name its exact theorem, both holomorphic
domains, their common distributional boundary value, the open real set where
they agree, and the conclusion of uniqueness used.

A claimed **CPT conclusion** means the combined field transformation by
charge conjugation and spacetime inversion $x\mapsto-x$ (simultaneous parity
and time reversal); it must preserve
$\mathcal D_{\mathrm{field}}$, define a surjective conjugate-linear isometry
$\Theta:\mathcal H\to\mathcal H$ (antiunitarity), state its action on
$\Omega$, translations, every field component, and test functions, and specify
the conjugate-linear charge-conjugation map and all phases. A claimed
**spin-statistics
conclusion** must state the action $S(-I)=\epsilon_{\rm spin}I_V$ of the
central $2\pi$-rotation element $-I\in SL(2,\mathbb C)$, with
$\epsilon_{\rm spin}\in\{+1,-1\}$, and the actual spacelike exchange sign
$\epsilon_{\rm loc}\in\{+1,-1\}$ in
$\Phi_\alpha(f)\Phi_\beta(g)=\epsilon_{\rm loc}\Phi_\beta(g)\Phi_\alpha(f)$
on $\mathcal D_{\mathrm{field}}$. For a multiplet with a single spin parity, the theorem must
derive the precise relation $\epsilon_{\mathrm{loc}}=\epsilon_{\mathrm{spin}}$. Any additional
theorem-specific assumptions remain explicit; this interface does not claim
that its checklist alone suffices.

## Definition references

[[lem-qft-poincare-pullback-continuity-on-schwartz]]

[[def-qftx-joint-spectrum-input]]

[[thm-qftx-spectral-tube-holomorphy]]

[[def-qft-weak-operator-valued-tempered-distribution]]

[[def-qft-poincare-test-action]]

[[def-schwartz-space-and-its-seminorms]]

[[def-hilbert-space]]

[[def-real-and-complex-inner-product-space]]

[[def-countable-choice]]

[Fewster and Rejzner, §§5.1–5.2](https://arxiv.org/pdf/1904.04051)

[Mund, §2.1](https://www.ufjf.br/fisica/files/2022/03/AQFT.pdf)

[Álvarez-Gaumé and Vázquez-Mozo, §4](https://arxiv.org/pdf/hep-th/0305093)

## Remarks

The bounded-insertion theorem
[[thm-qftx-spectral-tube-holomorphy]] proves neither analyticity for
unbounded field products nor the distributional boundary and uniqueness steps
listed here. The published
[[thm-qft-tempered-field-reconstruction]] supplies only its stated
matrix-coefficient spectrum condition, not a joint PVM. The existing free
scalar and Dirac constructions are examples and do not discharge a general
CPT or spin-statistics proof obligation.
