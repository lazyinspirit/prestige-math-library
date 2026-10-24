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
    locator: '§§2.2–2.4 and §5.1: pure SU(2) field content, vacuum coordinate, prepotential, and weak-coupling convention; §3.1, printed pp. 10–11, equations (3.4)–(3.5), and §6, printed pp. 35–36, equations (6.7)–(6.14): symplectic frames, determinant-one integral period changes, and oriented cycles.'
  - title: Adel Bilal, Duality in N=2 SUSY SU(2) Yang-Mills Theory
    url: https://arxiv.org/pdf/hep-th/9601007v1
    locator: '§2.2 and §§3.2–3.4, printed pp. 6–12, especially §3.4 and its footnote: vector multiplet, classical moduli, local prepotential, and the asymptotic weak-coupling relation; §6.1, equation (6.12), gives the periods.'
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
weak-coupling semiclassical frame, let $a_{\mathrm{cl}}$ be the eigenvalue coordinate fixed
by $\phi=\tfrac12\operatorname{diag}(a_{\mathrm{cl}},-a_{\mathrm{cl}})$, of mass dimension one. When a quantum
theory with a vacuum-moduli set has actually been constructed, the **quantum
Coulomb-branch coordinate** $u$ denotes the chosen gauge-invariant chiral
quadratic-operator expectation value in the source trace normalization for
which the classical relation is $u_{\mathrm{cl}}=a_{\mathrm{cl}}^2/2$.
Here $a_{\mathrm{cl}}$ denotes the preceding classical eigenvalue coordinate;
the quantum $a(u)$ below is a local period, with weak-coupling normalization
$a(u)^2/(2u)\to1$ as $|u|/\Lambda^2\to\infty$ on a chosen electric branch,
where $\Lambda>0$ is the fixed dynamical scale of mass dimension one.
This is an asymptotic relation, not an identity at finite quantum $u$.
The mass dimension of $u$ is two.
This definition does not assert that $u$ globally parameterizes the quantum
vacua.

Equip the **formal electric/magnetic charge lattice**
$\Gamma_{\mathrm{SW}}=\mathbb Z^2$ with the alternating integer-valued form
$\omega_\Gamma((n_e,n_m),(k_e,k_m))=n_mk_e-n_ek_m$ in its reference coordinates.
This form fixes an orientation convention for frames; it does not specify
the normalization of a physical Dirac pairing. An **electric/magnetic
frame** is an ordered lattice basis $(\gamma_m,\gamma_e)$ satisfying
$\omega_\Gamma(\gamma_m,\gamma_e)=1$, called a symplectic basis here. When realized
by homology cycles, its intersection convention is
$\gamma_m\mathbin{\cdot}\gamma_e=1$.

On a sufficiently small open regular patch $U$ of the $u$-plane, supply
holomorphic period functions $a_D,a:U\to\mathbb C$ for these magnetic and
electric basis elements, both of mass dimension one. Require $a$ to be a
holomorphic coordinate on $U$, with $da/du\ne0$, and require the local
coupling below to have positive imaginary part. The local
two-derivative abelian gauge action is encoded by a holomorphic
**prepotential** $\mathcal F_U:a(U)\to\mathbb C$ of mass dimension two,
defined in this coordinate by

$$a_D=\frac{\partial\mathcal F_U}{\partial a},\qquad \tau=\frac{\partial a_D}{\partial a}=\frac{\partial^2\mathcal F_U}{\partial a^2},\qquad \operatorname{Im}\tau>0.$$

The dimensionless $\tau$ is the local complexified gauge coupling. A frame
change on a connected overlap has a constant matrix
$M=\begin{pmatrix}p&q\\r&s\end{pmatrix}\in SL(2,\mathbb Z)$, meaning
$p,q,r,s\in\mathbb Z$ and $ps-qr=1$, and acts by

$$\begin{pmatrix}\widetilde\gamma_m\\\widetilde\gamma_e\end{pmatrix}=M\begin{pmatrix}\gamma_m\\\gamma_e\end{pmatrix},\qquad \begin{pmatrix}\widetilde a_D\\\widetilde a\end{pmatrix}=M\begin{pmatrix}a_D\\a\end{pmatrix},\qquad \widetilde\tau=\frac{p\tau+q}{r\tau+s}.$$

After shrinking the overlap if necessary, use a local prepotential in the
new electric coordinate $\widetilde a$. No determinant-minus-one change is
a frame change in this convention. Neither period is asserted to be a
single-valued global function on a punctured branch.

In the selected frame, the **formal electric/magnetic charge label**
$(n_e,n_m)\in\mathbb Z^2$ represents
$\gamma=n_e\gamma_e+n_m\gamma_m$, with period pairing
$\mathcal Z_{\mathrm{SW}}(u;n_e,n_m)=n_ea(u)+n_ma_D(u)$. The pair labels
the central-charge formula; the lattice definition does not assert that every
label is an allowed line operator, a dynamical particle, a stable state, or a
state in any constructed Hilbert space. Those are separate model data.
For the same $\gamma$ in the changed frame the charge row transforms by
$(\widetilde n_m,\widetilde n_e)=(n_m,n_e)M^{-1}$, so the period pairing
is unchanged.

The word **exact** in this page refers only to the adopted source-proposed
Wilsonian two-derivative low-energy data on a regular patch of the selected
pure SU(2) model. It does not mean a proof of a nonperturbative continuum
path integral, a global single-valued prepotential, or an exact statement
about arbitrary $\mathcal N=2$ theories.

## Definition references

[Seiberg and Witten, §§2.2–2.4, §3.1, §5.1, and §6, equations (6.7)–(6.14)](https://arxiv.org/pdf/hep-th/9407087v1).

[Bilal, §2.2, §§3.2–3.4, and §6.1](https://arxiv.org/pdf/hep-th/9601007v1).

[Tong, §4.4.1](https://davidtong.org/pdfs/teaching/supersymmetric-field-theory/susy.pdf).

Classical and conditional quantum vacuum-moduli data: [[def-qftx-susy-vacuum-moduli-data]].

Independent pure ultraviolet vector-multiplet datum: [[post-qftx-n2-pure-su2-ultraviolet-model]].
