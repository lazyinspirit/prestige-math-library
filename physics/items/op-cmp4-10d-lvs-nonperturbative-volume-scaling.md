---
id: op-cmp4-10d-lvs-nonperturbative-volume-scaling
kind: open-problem
title: Ten-dimensional origin of nonperturbative large-volume-potential scaling
status: published
origin: pipeline
domain: physics
library: physics
category: string-theory
page: cmp-stabilization-control-frontier
dependency_level: 0
deps: []
dependency_roles: {}
physical_scope: "Type-IIB Calabi–Yau orientifold compactifications in a large-volume regime with a rigid small divisor supporting a Euclidean D3 instanton or a D7 gauge sector. The target is the origin and total-volume scaling of specified four-dimensional Einstein-frame potential terms, including zero-mode and determinant effects."
sources:
  references:
    - title: "Arthur Hebecker, Naturalness, String Landscape and Multiverse: A Modern Introduction with Exercises, Springer book author version v5, arXiv:2008.10625v5"
      url: "https://arxiv.org/pdf/2008.10625v5"
      locator: "§6.6, printed pp. 174–176. Pedagogical two-modulus large-volume potential, its assumed Kähler data, asymptotics, and caveats for the small cycle and omitted corrections."
    - title: "Liam McAllister and Fernando Quevedo, Moduli Stabilization in String Theory, arXiv:2310.20559v1"
      url: "https://arxiv.org/pdf/2310.20559v1"
      locator: "§4.2, printed pp. 29–32. Review of the leading four-dimensional LVS potential and the geometric, zero-mode, and omitted-correction work needed for a string realization."
    - title: "V. Balasubramanian, P. Berglund, J. P. Conlon, and F. Quevedo, Systematics of Moduli Stabilisation in Calabi-Yau Flux Compactifications, arXiv:hep-th/0502058v2"
      url: "https://arxiv.org/pdf/hep-th/0502058v2"
      locator: "§2, printed pp. 4–8; §§3.1–3.2, pp. 8–15. Four-dimensional LVS potential and asymptotics; the general higher-dimensional argument is explicitly heuristic and the concrete example is separate."
    - title: "Arthur Hebecker, Andreas Schachner, and Gaetano Maria Sifo, An attempt to derive the LVS from a 10d EFT perspective, arXiv:2609.16117v2"
      url: "https://arxiv.org/pdf/2609.16117v2"
      locator: "§1, printed pp. 1–3; §§3.1–3.3, pp. 6–12; §4, pp. 13–17; §§5.1–5.2, pp. 18–22; §6, pp. 23–24. Local ten-dimensional estimates, proposed logarithmic reconciliation, determinant/zero-mode limitations, and possible nonlocal effects."
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  sources_checked:
    date: 2026-11-04
    scope: Recorded source, statement and proof-status review for this open-problem in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6-luna; native-step3-independent-reader; delegated by /root under owner authorization
---

## Open problem

Use $c=\hbar=1$. Let $X$ be a smooth compact Calabi–Yau threefold with a specified Type-IIB orientifold action and source data. Let $\ell_s=\sqrt{\alpha'}$ and $L_s=2\pi\ell_s$; $L_s$ is the string-length unit set to one in the cited ten-dimensional calculation. For a chosen string-frame Kähler metric $g_s$ with Kähler form $J_s$, define

$$\mathcal V_s=\frac{1}{6L_s^6}\int_X J_s\wedge J_s\wedge J_s,\qquad \tau_{s,s}=\frac{1}{2L_s^4}\int_{D_s}J_s\wedge J_s.$$

Let $\Phi$ be the real dilaton profile, smooth away from the specified localized sources. If it is singular at a source, use a resolved source core or specify an integrable matching prescription that makes the displayed volume integrals well-defined. The corresponding ten-dimensional Einstein-frame internal metric is the Hermitian metric $g_E=e^{-\Phi/2}g_s$, with positive fundamental $(1,1)$-form $J_E:=e^{-\Phi/2}J_s$. When $\Phi$ is constant this metric is Kähler; for a varying dilaton, $J_E$ need not be closed and is not generally a Kähler form. Define the Einstein-frame volume integral by

$$\mathcal V_E=\frac{1}{6L_s^6}\int_X J_E\wedge J_E\wedge J_E,\qquad \tau_{s,E}=\frac{1}{2L_s^4}\int_{D_s}J_E\wedge J_E.$$

In the constant-dilaton comparison regime $\Phi=\Phi_\infty$ and $g_{\rm s}=e^{\Phi_\infty}$, $J_E=g_{\rm s}^{-1/2}J_s$, so

$$\mathcal V_E=g_{\rm s}^{-3/2}\mathcal V_s,\qquad \tau_{s,E}=g_{\rm s}^{-1}\tau_{s,s}.$$

If $\Phi$ varies over $X$, the pointwise conformal relation still defines $g_E$ and $J_E$, but the resulting volume ratios are no longer constant in general; the volume-scaling comparison below is restricted to the stated constant-dilaton regime. Fixed factors such as $2\pi$ and fixed powers of $g_{\rm s}$ affect coefficients and the numerical value assigned to a fixed divisor volume, but not powers of the total volume.

Here $D_s\subset X$ is a smooth complex divisor with no infinitesimal holomorphic deformations, $H^0(D_s,N_{D_s/X})=0$, where $N_{D_s/X}=TX|_{D_s}/TD_s$, and it is small in the Einstein-frame large-volume regime $\mathcal V_E\gg1$ with $\tau_{s,E}\ll\mathcal V_E^{2/3}$. A Euclidean D3 (E3) instanton is a D3-brane wrapped on $D_s$ and localized at a point of the noncompact four-dimensional spacetime. A D7 gauge sector is a four-dimensional gauge theory arising from a D7-brane wrapped on a divisor; no assumption that its gauge dynamics has the zero modes needed for a nonperturbative superpotential is made. The four-dimensional Einstein-frame potential $V_E$ is the scalar potential after the metric Weyl rescaling that fixes the Einstein–Hilbert coefficient to $M_P^2/2$, with $M_P$ the reduced four-dimensional Planck mass.

For the four-dimensional reference description adopt reduced Planck units $M_P=1$. Thus $T_s=\tau_{s,\mathrm{hol}}+i\rho_s$, $a$, $\mathcal V_E$, and $\tau_{s,E}$ are dimensionless; $W_0$ and $A$ are the dimensionless Planck-unit representatives of quantities with mass dimension three, and $V_E$ is the dimensionless Planck-unit representative of a quantity with mass dimension four. The holomorphic Kähler coordinate $T_s$ is a complex scalar whose real part $\tau_{s,\mathrm{hol}}$ enters terms such as $e^{-aT_s}$ and whose imaginary part $\rho_s$ is the normalized four-dimensional zero mode of the Ramond–Ramond four-form integrated over $D_s$, with its period fixed by the D3-charge convention used in $T_s$. At tree level the cited ten-dimensional Einstein-frame calculation identifies $\tau_{s,\mathrm{hol}}=\tau_{s,E}$ in its chosen $L_s$ units. Whether this identification receives a logarithmic or other correction is part of the open problem; $\tau_{s,\mathrm{hol}}$ is not identified with the string-frame volume $\tau_{s,s}$ without the stated frame conversion. $W_0$ denotes the flux contribution to the four-dimensional superpotential, and $Ae^{-aT_s}$ the one-instanton or gauge-condensation term, with $A$ its fluctuation prefactor and $a>0$ the dimensionless instanton-action or gauge-condensation coefficient. The instanton–flux interference term is the cross term between $W_0$ and $Ae^{-aT_s}$; the instanton–anti-instanton term comes from a correlated pair with action factors $e^{-aT_s}$ and $e^{-a\bar T_s}$. A fluctuation determinant is the regulated product of nonzero eigenvalues of the quadratic fluctuation operators about that configuration. Collective coordinates are its bosonic and fermionic zero-mode parameters. Fermionic zero-mode lifting changes the effective action so the zero modes are no longer exact; zero-mode saturation supplies the Grassmann insertions needed for their integration to be nonzero.

The volume powers are compared asymptotically as $\mathcal V_E\to\infty$ at fixed $\tau_{s,E}$, constant bulk string coupling, topology and specified discrete flux/source data. This is a comparison of terms in effective potentials, not an assertion that a family of stabilized vacua with these fixed data exists. In the conventional two-modulus four-dimensional large-volume-scenario (LVS) truncation, the instanton–flux interference and instanton–anti-instanton terms scale respectively as $\mathcal V_E^{-2}$ and $\mathcal V_E^{-1}$ under these conditions. For the E3-instanton realization, the 2026 local ten-dimensional effective-field-theory calculation estimates $\mathcal V_E^{-5/2}$ and $\mathcal V_E^{-2}$, respectively, conditional on its local-propagation assumptions and on bulk-volume-independent local prefactors. Its determinant and correlated zero-mode interactions are not computed, so these are scaling estimates rather than a microscopic derivation. The paper treats D7 gaugino condensation separately: its local ten-dimensional power counting estimates the same two powers, while its alternative action-level matching recovers the four-dimensional powers only after inserting a volume-enhanced canonically normalized gaugino expectation value whose local origin is not derived. Thus the E3 and D7 comparisons remain distinct conditional arguments; no microscopic determinant, zero-mode or condensate normalization is assumed in advance.

For a type-IIB large-volume orientifold with a rigid small divisor supporting an E3 instanton or D7 gauge sector, compute from the localized ten-dimensional or microscopic theory the leading total-volume dependence of the instanton–flux interference and instanton–anti-instanton contributions to the four-dimensional Einstein-frame potential, including determinants, collective coordinates and zero-mode lifting. Determine whether and how these results match or correct the four-dimensional $N=1$ prediction when the tree-level holomorphic coordinate is identified with the ten-dimensional Einstein-frame divisor volume; any correction to that identification must be derived or otherwise independently justified.

## Open problem references

[Hebecker, *Naturalness, String Landscape and Multiverse*, §6.6](https://arxiv.org/pdf/2008.10625v5)

[McAllister and Quevedo, *Moduli Stabilization in String Theory*, §4.2](https://arxiv.org/pdf/2310.20559v1)

[Balasubramanian et al., *Systematics of Moduli Stabilisation in Calabi-Yau Flux Compactifications*, §§2–3](https://arxiv.org/pdf/hep-th/0502058v2)

[Hebecker et al., *An attempt to derive the LVS from a 10d EFT perspective*, §§3.2–3.3, 5 and 6](https://arxiv.org/pdf/2609.16117v2)

## Status

Status checked on 2026-10-26. The four-dimensional LVS potential has a specified three-term form under its stated Kähler-potential, superpotential, geometric, and large-volume assumptions. The 2026 ten-dimensional EFT analysis reports a different leading volume power for the localized instanton–flux and instanton–anti-instanton contributions under its local-propagation assumptions. This does not refute the conditional four-dimensional calculation.

The 2026 authors leave the interacting determinant and fermion zero-mode normalization uncomputed, and identify possible logarithmic corrections to the relation between the holomorphic coordinate and geometric divisor volume or long-range RR/Wilson-line propagation as unresolved routes to reconciliation. No microscopic derivation of the required correction is supplied. The matching problem therefore remains open; the stated source does not establish that the standard LVS branch is absent.
