---
id: post-qftx-n2-seiberg-witten-effective-solution
kind: postulate
title: Source-proposed pure SU(2) N=2 Seiberg–Witten low-energy data
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 8
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-moduli-and-dualities
deps:
- def-qftx-n2-coulomb-branch-data
- def-qftx-n2-monopole-local-dual-higgs-model
- post-qftx-n2-pure-su2-ultraviolet-model
dependency_roles:
  def-qftx-n2-coulomb-branch-data: formulation-prerequisite
  def-qftx-n2-monopole-local-dual-higgs-model: formulation-prerequisite
  post-qftx-n2-pure-su2-ultraviolet-model: formulation-prerequisite
physical_scope: Adopted source-proposed two-derivative Wilsonian solution data for pure four-dimensional rigid N=2 SU(2) Yang–Mills, with the source's specified singularity ansatz and one local monopole patch; this is not a construction of a UV continuum QFT or a universal duality claim.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
  - title: N. Seiberg and E. Witten, Electric-Magnetic Duality, Monopole Condensation, and Confinement in N=2 Supersymmetric Yang-Mills Theory
    url: https://arxiv.org/pdf/hep-th/9407087v1
    locator: '§5.7, §§5.1–5.6 and §6, printed pp. 22–39, especially the nonzero linear period behavior near the monopole point and equations (5.7)–(5.21), (6.1), (6.6), and (6.19): local-coordinate assumption in §5.7, printed p. 33, singularity proposal, local monopole action, curve, differential, and period data.'
  - title: Adel Bilal, Duality in N=2 SUSY SU(2) Yang-Mills Theory
    url: https://arxiv.org/pdf/hep-th/9601007v1
    locator: '§§5.3 and 6.1–6.2, printed pp. 20–29: strong-coupling monopole/dyon singularities and the curve/period solution; the notes identify the construction as a review of the Seiberg–Witten proposal.'
verification:
  precheck: n/a
---

## Postulate

Adopt the source-proposed low-energy solution data for pure four-dimensional
rigid $\mathcal N=2$ Yang--Mills with global gauge group $SU(2)$, one
adjoint vector multiplet, rank one, no matter hypermultiplets, and the coupling, units, connection-normalized scalar, and prepotential convention of the independent pure ultraviolet vector-multiplet datum. Use natural units
$c=\hbar=1$, metric $\eta=\operatorname{diag}(-1,1,1,1)$, and a positive
dynamical scale $\Lambda$ of mass dimension one. The gauge-invariant
coordinate $u$ has mass dimension two; set $w=u/\Lambda^2$.

The absence of microscopic hypermultiplets is an explicit model input in that independent ultraviolet postulate. The charged monopole hypermultiplet in a local infrared frame below is emergent; it does not change the ultraviolet matter content.

On the regular $w$-plane with singular values $w=1,-1,\infty$ removed,
adopt the family of genus-one curves, where $x,y,w$ are dimensionless:

$$\Sigma_w:\quad y^2=(x-1)(x+1)(x-w).$$

and the meromorphic period differential

$$\lambda_{\mathrm{SW}}=\frac{\sqrt2\Lambda}{2\pi}\frac{y\,dx}{x^2-1}.$$

Within this proposed solution, take the quantum vacuum-moduli data to be the
entire $u$-plane, with a $\mathbb Z_2$ symmetry $u\mapsto-u$ and singular
values $u=\Lambda^2,-\Lambda^2,\infty$. This is part of the adopted
solution ansatz, not a consequence of a constructed continuum theory.

For a chosen local cycle basis $\gamma_m,\gamma_e$ on $\Sigma_w$ with
intersection number $\gamma_m\cdot\gamma_e=1$, define
$a_D=\oint_{\gamma_m}\lambda_{\mathrm{SW}}$ and
$a=\oint_{\gamma_e}\lambda_{\mathrm{SW}}$. These periods have mass
dimension one, are multivalued under continuation around the punctures, and
are used in the local prepotential convention
$a_D=\partial\mathcal F/\partial a$ and
$\tau=\partial^2\mathcal F/\partial a^2$ with
$\operatorname{Im}\tau>0$. In the source's counterclockwise-loop
convention, the period column $(a_D,a)^T$ has monodromy matrices

$$M_\infty=\begin{pmatrix}-1&2\\0&-1\end{pmatrix},\qquad M_+=\begin{pmatrix}1&0\\-2&1\end{pmatrix},\qquad M_-=\begin{pmatrix}-1&2\\-2&3\end{pmatrix}.$$

Adopt the source's formal charge-label lattice $\mathbb Z^2$ and central-charge pairing
$\mathcal Z_{\mathrm{SW}}=n_ea+n_ma_D$ for labels
$(n_e,n_m)\in\mathbb Z^2$. In the supersymmetry convention of this page,
the scalar central charge is normalized as
$z=\sqrt2\,\mathcal Z_{\mathrm{SW}}$. The mass inequality and its
saturation statement are separate theorem deductions. No claim is made that
every lattice label is an allowed line operator or is represented by a stable
particle.

Adopt the singularity interpretation that the $w=1$ point has a light
monopole with $a_D=0$, while the $w=-1$ point has a light dyon with
$a-a_D=0$ in the chosen frame. These are source-proposed physical inputs
tested by their monodromies; they are not deduced here from a constructed
continuum theory.

In this source convention the monopole point is $u_m:=\Lambda^2$. In the
chosen local monopole frame, adopt the source identification of the dual
scalar $A_D$ with the period branch $a_D(u)$. This branch satisfies
$a_D(u_m)=0$ and has nonzero derivative $a_D'(u_m)=c_0\ne0$, as expressed
by its source-given linear vanishing near $u_m$; the source also treats $u$
as a local coordinate in this patch. Adopt the local holomorphic inverse
$u(A_D)$, defined by $a_D(u(A_D))=A_D$, with $u(0)=u_m$ and
$c:=u'(0)=c_0^{-1}\ne0$. These are source-proposed local model inputs,
not deductions from a constructed continuum theory or assertions of global
single-valuedness. The local monopole superpotential uses this inverse in
$\mu u(A_D)$.

In the local monopole patch, adopt the dual $U(1)_D$ field content and superpotential described in the preceding effective-model definition. The source two-derivative vector metric is positive and generally field dependent, determined by the local dual coupling; a regulated matching scale is part of any effective action with the light monopole retained. That definition explicitly freezes this metric at $b=g_D^{-2}>0$ for the subsequent classical calculations. Metric freezing, and the further replacement of $u(A_D)$ by its linear Taylor term where explicitly requested, are additional approximations, not exact identities of the full period solution. No bound on their discarded corrections is adopted here. A small N=1-breaking mass parameter $\mu$ of
mass dimension one adds the local superpotential term $\mu u(A_D)$ to
$\sqrt2 A_D M\widetilde M$. The local description applies only near this
singularity, below its effective cutoff, and does not simultaneously describe
the mutually nonlocal dyon at the other singularity.

Here **exact low-energy solution** means the adopted two-derivative
Wilsonian data of this source-defined model on its regular patches. It does
not mean a proof of a nonperturbative UV path integral, a global
single-valued prepotential, or an identity for arbitrary gauge groups,
matter contents, or N=2 theories.

## Postulate references

[Seiberg and Witten, §5.7, §§5.1–5.6 and §6](https://arxiv.org/pdf/hep-th/9407087v1).

[Bilal, §§5.3 and 6.1–6.2](https://arxiv.org/pdf/hep-th/9601007v1).

Pure N=2 SU(2) Coulomb-branch and period data: [[def-qftx-n2-coulomb-branch-data]].

Local dual U(1) monopole-Higgs effective data: [[def-qftx-n2-monopole-local-dual-higgs-model]].

Independent pure ultraviolet vector-multiplet datum: [[post-qftx-n2-pure-su2-ultraviolet-model]].
