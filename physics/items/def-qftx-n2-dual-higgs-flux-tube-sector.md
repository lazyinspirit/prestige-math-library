---
id: def-qftx-n2-dual-higgs-flux-tube-sector
kind: definition
title: Finite-energy dual-Higgs flux-tube sector
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
dependency_roles:
  def-qftx-n2-coulomb-branch-data: formulation-prerequisite
  def-qftx-n2-monopole-local-dual-higgs-model: formulation-prerequisite
proof_strategy: not-applicable
physical_scope: A conditional definition of nonzero-winding, finite-energy static flux-tube profiles in the local dual U(1) Higgs model; it asserts neither existence nor stability of such profiles.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
  - title: N. Seiberg and E. Witten, Electric-Magnetic Duality, Monopole Condensation, and Confinement in N=2 Supersymmetric Yang-Mills Theory
    url: https://arxiv.org/pdf/hep-th/9407087v1
    locator: '§5.6, printed pp. 29–31: monopole condensation and the source''s effective-model confinement interpretation; this Definition adds explicit finite-energy flux-sector data.'
  - title: 'David Tong, TASI Lectures on Solitons: Instantons, Monopoles, Vortices and Kinks'
    url: https://davidtong.org/pdfs/teaching/solitons/tasi.pdf
    locator: '§4.6.2, printed pp. 106–108: the Meissner-effect flux-tube interpretation; the discussion uses a different N=2 SQCD model and explicitly says the bulk nontrivial solution is not known analytically.'
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Definition

Use the dual $U(1)_D$ fields and potential of the preceding local
monopole-Higgs model. Let $x^1,x^2$ be coordinates on the transverse plane
$\mathbb R^2$ and let $x^3$ be the coordinate along a straight static tube.
Write $\widetilde A_i$ for the spatial dual gauge potential,
$\widetilde F_{12}=\partial_1\widetilde A_2-\partial_2\widetilde A_1$,
$D_iM=(\partial_i-i\widetilde A_i)M$, and
$D_i\widetilde M=(\partial_i+i\widetilde A_i)\widetilde M$.

A **finite-energy dual vortex profile of winding $n$** is a smooth static
configuration $(A_D,M,\widetilde M,\widetilde A_1,\widetilde A_2)$ on
$\mathbb R^2$ with $|A_D(x)|<r$ at every point, where $|A_D|<r$ is the
preceding model's open holomorphic patch, for which the transverse energy

$$\sigma=\int_{\mathbb R^2}\left(\frac{\widetilde F_{12}^2}{2g_D^2}+g_D^{-2}|\partial_i A_D|^2+|D_iM|^2+|D_i\widetilde M|^2+V_\mu-V_{\mathrm{vac}}\right)\,d^2x$$

is finite. The fields approach a supersymmetric vacuum at infinity satisfying
$A_D=0$, $|M|=|\widetilde M|=v>0$,
$\sqrt2 M\widetilde M+\mu u'(0)=0$, and
$V_{\mathrm{vac}}=0$. The phase map $M/|M|$ restricted to a sufficiently
large circle has degree $n\in\mathbb Z\setminus\{0\}$ as a map to the unit
circle; the phase map $\widetilde M/|\widetilde M|$ has degree $-n$.
Require also that $D_iM$ and $D_i\widetilde M$ tend to zero on that circle,
that the coefficient of $d\theta$ in the pulled-back one-form $\widetilde A-d\arg M$ tends uniformly in
$\theta$ to zero as the circle radius tends to infinity, and that the
limiting flux exists. The profile is a translation-invariant
tube along $x^3$; its tension is the transverse integral $\sigma$. This
Definition includes no assertion that such a configuration exists or is a
stationary solution of the field equations.

The patch restriction makes $u(A_D)$ and $V_\mu$ defined throughout the profile. For physical use, retain the preceding model's supplied $\Lambda_{\mathrm{EFT}}>0$, $0<\varepsilon<1$, background domain $\mathcal U_{\mathrm{EFT}}$, and application excitation bound $E_{\mathrm{app}}\le\varepsilon\Lambda_{\mathrm{EFT}}$, with $v<\varepsilon\Lambda_{\mathrm{EFT}}$. Background values must lie in that supplied domain. Finite transverse energy alone establishes none of these applicability qualifications or a microscopic error bound. These inputs impose no hard Fourier-support requirement on this classical profile class. A separately imposed hard cutoff on the variational class must specify its constraints and check the admissibility of any profiles or interpolation paths used in a consuming result.

In the adopted electric/magnetic frame, the **original electric flux** of
this sector means the dual magnetic flux
$\Phi_D=\lim_{R\to\infty}\int_{|x|\le R}\widetilde F_{12}\,d^2x$.
The flux dictionary is part of the selected duality model; this Definition
does not state that every electric line charge is represented by a vortex.
In natural units, $[\widetilde A_i]=\mathrm{mass}$,
$[\widetilde F_{12}]=\mathrm{mass}^2$, and
$[\sigma]=\mathrm{mass}^2$.

## Definition references

[Seiberg and Witten, §5.6](https://arxiv.org/pdf/hep-th/9407087v1).

[Tong, §4.6.2, “Monopoles”](https://davidtong.org/pdfs/teaching/solitons/tasi.pdf).

Dual U(1) monopole-Higgs effective data: [[def-qftx-n2-monopole-local-dual-higgs-model]].

Pure $N=2$ SU(2) electric/magnetic frame: [[def-qftx-n2-coulomb-branch-data]].
