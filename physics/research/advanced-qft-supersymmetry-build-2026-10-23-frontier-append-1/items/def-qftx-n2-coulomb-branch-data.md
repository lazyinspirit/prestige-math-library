---
id: def-qftx-n2-coulomb-branch-data
kind: definition
title: Pure N=2 SU(2) Coulomb-branch and period data
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 6
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-moduli-and-dualities
deps:
- def-qftx-susy-vacuum-moduli-data
- post-qftx-n2-pure-su2-ultraviolet-model
dependency_roles:
  def-qftx-susy-vacuum-moduli-data: formulation-prerequisite
  post-qftx-n2-pure-su2-ultraviolet-model: physical-assumption
proof_strategy: not-applicable
physical_scope: A data definition for the pure four-dimensional rigid N=2 SU(2) Yang–Mills Coulomb branch and its local two-derivative abelian description; the definition makes no claim that an interacting continuum theory exists or that a charge label is realized by a stable state.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
  - title: N. Seiberg and E. Witten, Electric-Magnetic Duality, Monopole Condensation, and Confinement in N=2 Supersymmetric Yang-Mills Theory
    url: https://arxiv.org/pdf/hep-th/9407087v1
    locator: '§§2.2–2.4, printed pp. 5–14, and §5.1, printed pp. 20–21: pure SU(2) field content, the gauge-invariant vacuum coordinate, the local prepotential, and the weak-coupling period convention.'
  - title: Adel Bilal, Duality in N=2 SUSY SU(2) Yang-Mills Theory
    url: https://arxiv.org/pdf/hep-th/9601007v1
    locator: '§§2.2–2.3, printed pp. 5–10: the N=2 vector multiplet, classical moduli, the adjoint scalar, and local low-energy prepotential data.'
  - title: David Tong, Supersymmetric Field Theory
    url: https://davidtong.org/pdfs/teaching/supersymmetric-field-theory/susy.pdf
    locator: '§4.4.1, printed pp. 125–128: the N=2 vector-plus-adjoint-chiral decomposition and its coupling convention.'
verification:
  precheck: n/a
---

## Definition

Use natural units $c=\hbar=1$, spacetime $\mathbb R^{1,3}$ with metric
$\eta=\operatorname{diag}(-1,1,1,1)$, and a selected pure four-dimensional
rigid $\mathcal N=2$ Yang--Mills model whose global gauge group is $SU(2)$.
The microscopic matter-hypermultiplet index set is empty, as explicitly adopted in the independent pure-model postulate. In $\mathcal N=1$ language the gauge sector is one vector superfield and one adjoint chiral superfield with scalar $\phi\in\mathfrak{sl}_2(\mathbb C)$, connection normalization $\phi_{\mathrm{can}}=\phi/g$, positive dimensionless gauge coupling $g$, zero chiral superpotential and no ultraviolet matter mass. The low-energy charged monopole fields introduced later are emergent infrared fields, not an ultraviolet hypermultiplet. This is the selected physical datum, not a specialization inferred from the different one-hypermultiplet postulate.

A **classical Coulomb-branch configuration** is a constant adjoint scalar
configuration satisfying the model's zero auxiliary-field conditions, taken
modulo the compact $SU(2)$ gauge action. This uses the compact-group orbit
quotient in the preceding vacuum-moduli definition; it does not replace that
quotient by a complexified-group stability construction. In the
weak-coupling semiclassical frame, let $a$ be the eigenvalue coordinate fixed
by $\phi=\tfrac12\operatorname{diag}(a,-a)$, of mass dimension one. When a quantum
theory with a vacuum-moduli set has actually been constructed, the **quantum
Coulomb-branch coordinate** $u$ denotes the chosen gauge-invariant chiral
quadratic-operator expectation value in the source trace normalization for
which the weak-coupling relation is $u=a^2/2$. Its mass dimension is two.
This definition does not assert that $u$ globally parameterizes the quantum
vacua.

On an open patch $U$ of the $u$-plane where the period functions are
holomorphic and the local gauge-coupling matrix has positive imaginary part,
an **electric/magnetic frame** means a chosen ordered basis of the formal
charge lattice that fixes local cycle representatives. Their period
functions are the complex electric coordinate $a:U\to\mathbb C$ and complex
dual coordinate $a_D:U\to\mathbb C$, both of mass dimension one. The local
two-derivative abelian gauge action is encoded by a holomorphic
**prepotential** $\mathcal F_U(a)$ of mass dimension two, defined on that
patch by

$$a_D=\frac{\partial\mathcal F_U}{\partial a},\qquad \tau=\frac{\partial a_D}{\partial a}=\frac{\partial^2\mathcal F_U}{\partial a^2},\qquad \operatorname{Im}\tau>0.$$

The dimensionless $\tau$ is the local complexified gauge coupling; changing
the electric/magnetic frame changes the pair $(a_D,a)$ by the corresponding
integral linear transformation and may require a different local
prepotential. Thus neither period is asserted to be a single-valued global
function on a punctured branch.

For this source-normalized data, define the **formal electric/magnetic charge
label lattice** to be $\Gamma_{\mathrm{SW}}=\mathbb Z^2$, with a label
$(n_e,n_m)$ and period pairing
$\mathcal Z_{\mathrm{SW}}(u;n_e,n_m)=n_ea(u)+n_ma_D(u)$. The pair labels
the central-charge formula; the lattice definition does not assert that every
label is an allowed line operator, a dynamical particle, a stable state, or a
state in any constructed Hilbert space. Those are separate model data.

The word **exact** in this page refers only to the adopted source-proposed
Wilsonian two-derivative low-energy data on a regular patch of the selected
pure SU(2) model. It does not mean a proof of a nonperturbative continuum
path integral, a global single-valued prepotential, or an exact statement
about arbitrary $\mathcal N=2$ theories.

## Definition references

[Seiberg and Witten, §§2.2–2.4, §5.1](https://arxiv.org/pdf/hep-th/9407087v1).

[Bilal, §§2.2–2.3](https://arxiv.org/pdf/hep-th/9601007v1).

[Tong, §4.4.1](https://davidtong.org/pdfs/teaching/supersymmetric-field-theory/susy.pdf).

Classical and conditional quantum vacuum-moduli data: [[def-qftx-susy-vacuum-moduli-data]].

Independent pure ultraviolet vector-multiplet datum: [[post-qftx-n2-pure-su2-ultraviolet-model]].
