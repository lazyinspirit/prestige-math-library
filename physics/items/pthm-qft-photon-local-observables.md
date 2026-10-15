---
id: pthm-qft-photon-local-observables
kind: physics-theorem
domain: physics
library: physics
title: "Local covariant free field-strength and Weyl observables"
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
dependency_level: 8
deps:
  - post-qft-free-photon-model
  - def-qft-framework-units
  - lem-qft-photon-local-field-strength
  - lem-qft-photon-smeared-potential
  - lem-qft-photon-local-weyl-observables
  - def-countable-choice
dependency_roles:
  post-qft-free-photon-model: physical-assumption
  def-qft-framework-units: formulation-prerequisite
  lem-qft-photon-local-field-strength: mathematical-premise
  lem-qft-photon-smeared-potential: mathematical-premise
  lem-qft-photon-local-weyl-observables: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
physical_scope: "Gauge-invariant observables of the specified positive transverse free-photon Fock model, smeared with compactly supported real tests; local commutativity applies to spacelike-separated supports, while the Coulomb-gauge potential is not claimed local."
empirical_premises: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Quantum Field Theory, author-hosted full-text Chapter 6, §§6.2.1–6.2.2"
      url: "https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html"
      locator: "Coulomb-gauge transverse quantization and the separate Lorenz-gauge auxiliary construction in Chapter 6; these formal mode formulas motivate, but do not replace, the local domain proof."
    - title: "Mark Srednicki, Quantum Field Theory, author-hosted 2006 prepublication book draft"
      url: "https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf"
      locator: "§55, printed pp. 335–338, for the transverse field and physical photon modes. The local smeared field-strength and bounded Weyl construction is supplied by the conditional local mathematical argument."
---

## Statement

Assume Countable Choice [[def-countable-choice]] for the constructed Fock
representation. In the adopted model [[post-qft-free-photon-model]], let
$h^{ab}\in C_c^\infty(\mathbb R^{1,3};\mathbb R)$ be a real antisymmetric
two-tensor test. By the natural field-strength normalization of
[[def-qft-framework-units]], choose each component of $h^{ab}$ with unit
$\mathrm m^{-2}$. Since $f_{ab}$ has unit $\mathrm m^{-2}$ and $d^4x$ has
unit $\mathrm m^4$, $f(h)$ below is dimensionless. The corresponding
one-particle vector $g_h$ has profile unit $\mathrm m^{3/2}$ under the
coefficient formula of [[lem-qft-photon-smeared-potential]]: its effective
test $j^i=-\partial_a h^{ai}$ has unit $\mathrm m^{-3}$, the Fourier
integral contributes $\mathrm m^1$, and the factor $(2\omega)^{-1/2}$
contributes $\mathrm m^{1/2}$. Thus its Hilbert norm under $d^3\mathbf k$
of unit $\mathrm m^{-3}$ is dimensionless, as is the Weyl parameter
$\sqrt2\,g_h$. This is the test normalization adopted here, not a universal
test-function unit. Here $f_{ab}$ is the
natural-normalized field-strength
distribution of the selected free model, corresponding to $F_{ab}$ in the
mathematical free-photon suppliers and distinct from the SI tensor
$F_{{\rm SI},ab}$. Its smearing
$$f(h)=\frac12\int f_{ab}(x)h^{ab}(x)\,d^4x$$
is a well-defined operator-valued distribution on the common finite-particle
domain $\mathcal D_{\rm fin}$, not a pointwise field operator. It is gauge
invariant and covariant under the selected free mass-cone unitary action.
For two such tests with spacelike-separated supports,
$[f(h),f(\ell)]=0$ on $\mathcal D_{\rm fin}$. Let $g_h$ be the associated
one-particle test vector and define the Weyl observable
$W_h:=W_{\rm Segal}(\sqrt2\,g_h)$ as in
[[lem-qft-photon-local-weyl-observables]]. These are bounded unitaries of
norm one; their real and imaginary parts are bounded Hermitian operators
and commute for spacelike-separated supports. No locality claim is made for
a Coulomb-gauge potential.

## Facts & Assumptions

**Given:** Countable Choice; the positive transverse free-photon model; the
current field-strength carrier; and the current bounded Weyl-observable
carrier at their inspected conditional interfaces.

[A1] [[post-qft-free-photon-model]]: the selected physical state space is the
bosonic Fock space over the positive transverse one-particle space, and its
smeared field strengths and bounded Weyl observables are adopted within that
free model. It supplies no pointwise field-strength operator. The postulate has a current
escalated Step 1 record and is used conditionally.

[A2] Countable Choice is assumed by the transverse Fock, Segal-field, and
Weyl-domain constructions. [[def-countable-choice]]

[F4] [[def-qft-framework-units]]: coordinates have unit metre, the natural
field strength has unit $\mathrm m^{-2}$, and test-function units may be
chosen so a specified smeared observable is dimensionless; no universal test
unit is fixed.

[F5] [[lem-qft-photon-smeared-potential]]: the coefficient map is
$g_j(\mathbf k)=(2\pi)^{-3/2}(2\omega)^{-1/2}P_T(\mathbf k)
\int j(x)e^{i\omega x^0-i\mathbf k\cdot\mathbf x}\,d^4x$,
with $\omega=|\mathbf k|$ and $d^3\mathbf k$ as the one-particle measure;
[[lem-qft-photon-local-field-strength]] uses this map with
$j^i=-\partial_a h^{ai}$.

[F1] [[lem-qft-photon-local-field-strength]]: for a real compactly supported
antisymmetric test, $F(h)=\frac12\int F_{ab}h^{ab}=-A_b(\partial_a h^{ab})$
is a smeared operator on $\mathcal D_{\rm fin}$ with one-particle vector
$g_h$; it is gauge invariant and covariant, its commutators are supported in
the closed causal cone, and spacelike-separated supports commute. The draft carrier has a current escalated Step 1 decision because its scalar
causal-commutator supplier remains escalated through QFT-MF01/MF02.

[L1] [[lem-qft-photon-local-weyl-observables]]: it defines
$W_O(h)=W_{\rm Segal}(\sqrt2\,g_h)$, proves this operator is unitary with
the field-strength closure as generator, and proves that the norm-closed
unital $*$-algebras generated in spacelike-separated regions commute. The draft carrier has a current escalated Step 1 decision because its field-
strength prerequisite remains escalated; its Fock CCR and Segal-domain inputs
have current ready records.

## Proof
**Given:** [A1]–[A2], [F1], [F4]–[F5], and the conditional construction
[L1].

1.1 By [F4], the assigned units give the integrand
$f_{ab}h^{ab}d^4x$ unit
$\mathrm m^{-2}\,\mathrm m^{-2}\,\mathrm m^4=1$, so $f(h)$ is
dimensionless. By [F5], $j^i=-\partial_a h^{ai}$ has unit
$\mathrm m^{-3}$; its spacetime Fourier integral has unit $\mathrm m$, and
$(2\omega)^{-1/2}$ has unit $\mathrm m^{1/2}$. Thus $g_h$ has profile unit
$\mathrm m^{3/2}$ under $d^3\mathbf k$ of unit $\mathrm m^{-3}$, making
its Hilbert norm and $\sqrt2\,g_h$ dimensionless. The current operator
construction is conditional on Countable Choice [A2]. The test $h$ is real,
smooth, compactly supported, and antisymmetric,
so it is an admissible input to [F1]. That carrier constructs
$F(h)=\frac12\int F_{ab}h^{ab}=-A_b(\partial_a h^{ab})$ as a smearing on
$\mathcal D_{\rm fin}$ and supplies its one-particle vector $g_h$.
Consequently the present $f(h)$ is exactly that free-model smearing under the
stated natural-normalization identification; it does not assign an operator
to $f_{ab}(x)$ at a point. Gauge invariance and covariance follow from the
same conditional carrier. [A1, A2, F1, F4, F5, given]

1.2 Suppose the compact supports of $h$ and $\ell$ are spacelike separated.
Their difference set is compact and disjoint from the closed causal cone,
so it has positive Euclidean distance from that closed set. Choose bounded small
open neighborhoods $O_h,O_\ell$ of the two supports whose difference set
remains outside the cone. By [F1], the smeared field-strength commutator
vanishes on $\mathcal D_{\rm fin}$. By [L1],
$W_h\in\mathcal A(O_h)$ and $W_\ell\in\mathcal A(O_\ell)$, and these
local algebras commute. Their adjoints and linear combinations belong to
the same respective algebras; therefore the real and imaginary Hermitian
parts of $W_h,W_\ell$ commute. This is a conditional deduction in the
selected free model, not an observed outcome. [A1, F1, L1, given]

2.1 By [L1], $W_h$ is unitary, so $\|W_h\|=1$. The operators
$(W_h+W_h^*)/2$ and $(W_h-W_h^*)/(2i)$ are self-adjoint, and the triangle
inequality gives each norm at most one. They are therefore bounded local
Hermitian observables in the adopted model. [A1, L1, step 1.2, algebra] ∎
