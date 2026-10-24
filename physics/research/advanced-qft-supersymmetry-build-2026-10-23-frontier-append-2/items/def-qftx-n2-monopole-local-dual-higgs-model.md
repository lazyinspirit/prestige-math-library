---
id: def-qftx-n2-monopole-local-dual-higgs-model
kind: definition
title: Local dual U(1) monopole-Higgs effective data
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 7
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-moduli-and-dualities
deps:
- def-qftx-n2-coulomb-branch-data
- post-qftx-n2-pure-su2-ultraviolet-model
dependency_roles:
  def-qftx-n2-coulomb-branch-data: formulation-prerequisite
  post-qftx-n2-pure-su2-ultraviolet-model: physical-assumption
proof_strategy: not-applicable
physical_scope: Explicit constant-positive-vector-metric, two-derivative dual U(1) effective model near one pure-SU(2) N=2 monopole singularity after small N=1 mass perturbation; source superpotential retained, metric freezing and any linear-u truncation are additional approximations, with no global action, continuum construction or vortex existence asserted.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
  - title: N. Seiberg and E. Witten, Electric-Magnetic Duality, Monopole Condensation, and Confinement in N=2 Supersymmetric Yang-Mills Theory
    url: https://arxiv.org/pdf/hep-th/9407087v1
    locator: '§5.6, printed pp. 29–31, equations (5.17)–(5.21): the local dual U(1) fields, effective superpotential, F/D equations, and monopole vacuum.'
  - title: Adel Bilal, Duality in N=2 SUSY SU(2) Yang-Mills Theory
    url: https://arxiv.org/pdf/hep-th/9601007v1
    locator: '§5.3, printed pp. 20–21: the weakly coupled local dual description near one massless-monopole singularity.'
verification:
  precheck: n/a
---

## Definition

Use natural units $c=\hbar=1$, metric
$\eta=\operatorname{diag}(-1,1,1,1)$, and the local duality frame near one
monopole singularity of the selected pure $SU(2)$, four-dimensional rigid
$\mathcal N=2$ model. Let $A_D$ be the complex scalar coordinate in the
local dual $U(1)_D$ vector multiplet, and let $M,\widetilde M$ be complex
scalar fields of dual electric charges $+1$ and $-1$ in two $\mathcal N=1$
chiral multiplets. These are emergent infrared monopole fields in a dual frame of the independent pure ultraviolet model, not microscopic matter hypermultiplets. The dual gauge group acts by

$$A_D\mapsto A_D,\qquad M\mapsto e^{i\alpha}M,\qquad \widetilde M\mapsto e^{-i\alpha}\widetilde M,\qquad \alpha\in\mathbb R/(2\pi\mathbb Z).$$

Let $u(A_D)$ be the supplied holomorphic coordinate function on an open
patch $|A_D|<r$ about $A_D=0$, with $u(0)=u_m$ and
$c:=u'(0)\ne0$. Let $\mu\ne0$ be the coefficient of the small adjoint
mass perturbation, let $g_D>0$ be the dimensionless dual gauge coupling,
and use connection normalization for $A_D$, canonical kinetic terms for $M,\widetilde M$, and zero microscopic D-type Fayet--Iliopoulos parameter. Freeze the positive local vector-multiplet metric at $b=g_D^{-2}$; this is a specified constant-coupling two-derivative approximation within the patch, not the full field-dependent Wilsonian metric.
Define

$$W_\mu(A_D,M,\widetilde M)=\sqrt2 A_D M\widetilde M+\mu u(A_D),\qquad D=g_D\bigl(|M|^2-|\widetilde M|^2\bigr).$$

$$V_\mu=g_D^2|\partial_{A_D}W_\mu|^2+|\partial_M W_\mu|^2+|\partial_{\widetilde M}W_\mu|^2+\frac12D^2.$$

Let $\widetilde F_{\mu\nu}=\partial_\mu\widetilde A_\nu-
\partial_\nu\widetilde A_\mu$ and
$\widetilde D_\mu A_D=\partial_\mu A_D$,
$\widetilde D_\mu M=(\partial_\mu-i\widetilde A_\mu)M$, and
$\widetilde D_\mu\widetilde M=(\partial_\mu+i\widetilde A_\mu)
\widetilde M$. In metric $\eta=\operatorname{diag}(-1,1,1,1)$, the
connection-normalized bosonic kinetic Lagrangian is

$$\mathcal L_{\mathrm{kin}}=-\eta^{\mu\nu}\left(g_D^{-2}\partial_\mu\overline{A_D}\,\partial_\nu A_D+\overline{\widetilde D_\mu M}\,\widetilde D_\nu M+\overline{\widetilde D_\mu\widetilde M}\,\widetilde D_\nu\widetilde M\right)-\frac{1}{4g_D^2}\widetilde F_{\mu\nu}\widetilde F^{\mu\nu}.$$

The mass dimensions are
$[A_D]=[M]=[\widetilde M]=[\mu]=\mathrm{mass}$,
$[u]=\mathrm{mass}^2$, $[W_\mu]=\mathrm{mass}^3$,
$[F_{A_D}]=[F_M]=[F_{\widetilde M}]=[D]=[\widetilde F_{\mu\nu}]=\mathrm{mass}^2$,
$[\widetilde A_\mu]=\mathrm{mass}$,
$[c]=\mathrm{mass}$, and $[g_D]=1$. The allowed regime is restricted to
field values within this patch and energies below its stated effective
cutoff; “small $\mu$” means that the induced scale
$(|\mu c|/\sqrt2)^{1/2}$ lies well below that cutoff.

For a controlled leading linear-superpotential truncation, explicitly replace $u(A_D)$ by $u_m+cA_D$ in this constant-metric model. Then the perturbation is an $F$-type FI deformation of the local $\mathcal N=2$ abelian theory, related to a D-type FI deformation by rotation of its auxiliary triplet. This extra truncation admits the critical BPS square completion. The generic holomorphic $u(A_D)$ model above is softly broken to $\mathcal N=1$ and is not asserted to have exact BPS vortices; the full physical solution and a globally valid metric are separate inputs. Neither a small $\mu$ nor a holomorphic superpotential theorem alone controls all non-holomorphic metric or higher-derivative corrections.

This is a one-singularity effective data package. It includes neither a
simultaneously local electric description of mutually nonlocal dyons nor a
claim that the local action extends over the full moduli space. A finite-energy
vortex is not part of this Definition; its existence, when needed, is a
separate hypothesis.

## Definition references

[Seiberg and Witten, §5.6, equations (5.17)–(5.21)](https://arxiv.org/pdf/hep-th/9407087v1).

[Bilal, §5.3](https://arxiv.org/pdf/hep-th/9601007v1).

Pure N=2 SU(2) Coulomb-branch conventions: [[def-qftx-n2-coulomb-branch-data]].

Independent pure ultraviolet vector-multiplet datum: [[post-qftx-n2-pure-su2-ultraviolet-model]].
