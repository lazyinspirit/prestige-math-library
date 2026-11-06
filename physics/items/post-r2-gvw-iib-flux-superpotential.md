---
id: post-r2-gvw-iib-flux-superpotential
kind: postulate
title: GVW flux superpotential in the Type IIB Calabi–Yau orientifold truncation
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 12
domain: physics
library: physics
deps:
  - def-cmp-type-iib-o3-o7-orientifold-data
  - def-r2-iib-flux-background-conventions
  - def-supergravity-conventions-and-normalizations
dependency_roles:
  def-cmp-type-iib-o3-o7-orientifold-data: formulation-prerequisite
  def-r2-iib-flux-background-conventions: formulation-prerequisite
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
physical_scope: "Adopted classical tree-level, large-radius four-dimensional N=1 flux truncation of Type IIB on the stated O3/O7 Calabi–Yau orientifold. The axio-dilaton is the globally defined four-dimensional zero mode. This is an effective-theory input, not a claim about varying seven-brane profiles, a complete ten-dimensional solution, or a physical vacuum."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Steven B. Giddings, Shamit Kachru, and Joseph Polchinski, Hierarchies from Fluxes in String Compactifications, arXiv:hep-th/0105097v2"
      url: "https://arxiv.org/pdf/hep-th/0105097v2"
      locator: "§2.3, equations (2.37)–(2.45), especially (2.40), PDF pp. 13–14; Appendix A.1, equations (A.1)–(A.4), pp. 28–29; Appendix A, equation (A.17), p. 31."
    - title: "Mariana Graña, Flux compactifications in string theory: a comprehensive review, arXiv:hep-th/0509003v3"
      url: "https://arxiv.org/pdf/hep-th/0509003v3"
      locator: "§5.4, equations (5.43)–(5.47), printed pp. 41–43; the O3/O7 formula uses the reversed degree-three wedge order."
    - title: "Jan Louis, Introduction to String Phenomenology, University of Hamburg preliminary lecture notes"
      url: "https://www.physik.uni-hamburg.de/th2/ag-louis/dokumente/lectures/ws-14-15/ws-14-15-lecture-notes.pdf"
      locator: "Full 89-page PDF; §7.4.2, printed pp. 38–39, and §§8.1–8.2, pp. 40–41; flux superpotential and no-scale truncation."
verification:
  precheck: pass
  sources_checked:
    date: 2026-11-05
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
---

## Postulate

Work in the classical tree-level four-dimensional $N=1$ flux truncation of Type IIB on a Calabi–Yau threefold orientifold with O3/O7 projection. Fix a compact oriented smooth six-manifold $X$ without boundary and one cover or smooth-quotient period convention; for a singular quotient use its smooth cover. Let $U\subseteq\mathbb C^n$, $n\geq0$, be a nonempty open polydisc, meaning $\prod_{a=1}^n\{z^a:|z^a-z_0^a|<r_a\}$ with $r_a>0$ (a point when $n=0$), of retained complex-structure parameters $z=(z^1,\ldots,z^n)$. Supply a $C^\infty$ family $(I_z,J_z,\Omega_z)$ on this fixed $X$: for each $z$, $I_z$ is an integrable complex structure, $J_z$ a Kähler form, and $\Omega_z$ a nowhere-zero holomorphic $(3,0)$-form. Require the complex orientation to equal the fixed orientation and a fixed smooth involution $\sigma$ to obey $\sigma^*I_z=I_z$, $\sigma^*J_z=J_z$, and $\sigma^*\Omega_z=-\Omega_z$, so each fibre has the stated orientifold data. Here $C^\infty$ means joint smoothness in the real coordinates of $U\times X$. Fix a local holomorphic normalization by supplying a fixed smooth singular three-cycle $\gamma_0$ (a finite real linear combination of smooth maps of the standard three-simplex into $X$ whose oriented boundaries cancel) and $c\in\mathbb C\setminus\{0\}$ with $\int_{\gamma_0}\Omega_z=c$ throughout $U$. Require holomorphic dependence modulo exact forms: for each $a$ supply a jointly smooth complex two-form $\beta_a(z)$ on $X$ with $\partial_{\bar z^a}\Omega_z=d_X\beta_a(z)$, where $d_X$ is the exterior derivative on $X$ and $\partial_{\bar z^a}=(\partial_{\operatorname{Re}z^a}+i\partial_{\operatorname{Im}z^a})/2$. These family and normalization data are hypotheses, not an assertion of existence of a universal moduli family.

Let $F_3,H_3$ be fixed smooth closed real three-forms on $X$, representing the retained internal flux classes in the declared Type IIB convention, with $\sigma^*F_3=-F_3$ and $\sigma^*H_3=-H_3$. They are independent of $z$ and of Kähler moduli. These smooth flux representatives do not assert smoothness of back-reacted source fields through localized sources. Let $\tau=C_0+i e^{-\phi}$ be the dimensionless four-dimensional axio-dilaton zero mode in $\mathbb H=\{t\in\mathbb C:\operatorname{Im}t>0\}$, set $G_3(\tau)=F_3-\tau H_3$, and write $\Omega(z)=\Omega_z$. Adopt on $\mathbb H\times U$ the flux superpotential

$$
W_{\mathrm{flux}}(\tau,z)=\mathcal N_{4\mathrm D}\int_X \Omega(z)\wedge G_3,
$$

in the wedge-order convention of GKP section 2, equation (2.40). The common factor $\mathcal N_{4\mathrm D}$ is fixed together with the $\Omega$ normalization so that $W$ has mass dimension $3$ in the chosen four-dimensional supergravity convention; the source suppresses its numerical value. Reversing the wedge order changes the sign because both forms have degree three, so that overall sign must be carried consistently. At this order $W_{\mathrm{flux}}$ depends on the axio-dilaton and complex-structure moduli, not on Kähler moduli. This is an adopted effective-theory input, not a deduction from flux integrality alone. It excludes varying seven-brane profiles or monodromy and does not include warping, higher-derivative, loop, nonperturbative, or source corrections unless separately specified.

## Postulate references

[Giddings, Kachru, and Polchinski, §2.3, equation (2.40)](https://arxiv.org/pdf/hep-th/0105097v2)

[Graña, §5.4, equation (5.43)](https://arxiv.org/pdf/hep-th/0509003v3)

[Louis, §§7.4.2 and 8.1–8.2](https://www.physik.uni-hamburg.de/th2/ag-louis/dokumente/lectures/ws-14-15/ws-14-15-lecture-notes.pdf)

## Facts & Assumptions

[F1] [[def-cmp-type-iib-o3-o7-orientifold-data]], Definition, supplies a smooth compact complex threefold with Kähler form $J$, holomorphic volume form $\Omega$, complex orientation, and holomorphic isometric involution $\sigma$ satisfying $\sigma^*J=J$ and $\sigma^*\Omega=-\Omega$. It adopts the O3/O7 world-sheet projection, distinguishes it from the geometric quotient, and leaves localized sources and charge cancellation as separate data. The current batch-77 manifest has a nonempty statement for this definition. This single-fibre formulation input is applied at each parameter value; the family itself is additional supplied data. It does not establish flux consistency or a vacuum.

[F2] [[def-r2-iib-flux-background-conventions]], Definition, fixes real internal three-forms $F_3,H_3$, $\tau=C_0+i e^{-\phi}$, $\widetilde F_3=F_3-C_0H_3$, and $G_3=F_3-\tau H_3$, together with units, source exclusions, and a common smooth cover or smooth-quotient integration convention. A singular quotient requires integration on the smooth cover or an independently supplied orbifold-current formulation. No five-form field equation or period-quantization conclusion is used in adopting the present superpotential.

[F3] [[def-supergravity-conventions-and-normalizations]], Definition, fixes natural units, the four-dimensional Einstein frame and $M_P^{-2}=8\pi G_N$. The superpotential has mass dimension three in this convention.

[A1] In this four-dimensional zero-mode truncation, $\tau$ is constant on the internal space and is a globally defined chiral field. A varying seven-brane axio-dilaton profile or monodromy requires a separate F-theory/local-system interface and is outside this statement.

[A2] Choose one orientation and one cover-versus-quotient convention for $X$. Normalize $\Omega$ and the common conversion factor in $W$ together, so $W$ has the four-dimensional supergravity dimension used by the consuming $N=1$ convention. The sign comparison with sources using $G_3\wedge\Omega$ is the degree-three identity $G_3\wedge\Omega=-\Omega\wedge G_3$.

[A3] The local family, fixed smooth closed flux representatives, and holomorphic normalization in the Postulate are supplied data on $U\times X$, independent of Kähler moduli. They supplement the single-fibre orientifold definition; no moduli-space existence theorem is invoked. Compactness and joint smoothness make the displayed integral finite and differentiable in parameters. Since $d_XG_3=0$, its antiholomorphic derivative in $z^a$ is $\mathcal N_{4\mathrm D}\int_Xd_X(\beta_a\wedge G_3)=0$ by Stokes on the boundaryless $X$. Its dependence on $\tau$ is affine. Thus this formulation gives a holomorphic local $W$; holomorphic dependence modulo exact forms does not require pointwise holomorphic coefficients on a fixed smooth space.

## Remarks

The GKP source gives $\Omega\wedge G_3$ in equation (2.40), while its Appendix A equation (A.17) and the independent Graña and Louis treatments write $G_3\wedge\Omega$. Both three-forms have degree three, so the two expressions differ by one overall minus sign. The convention is fixed here to equation (2.40); any common normalization or phase in $W$ must be carried consistently by consumers. This interface is not deduced from flux integrality, and it does not assert a flux choice satisfying tadpole constraints.

The supplier interfaces are used at their stated scope. Native readiness and existing escalation records are separate workflow evidence; this item does not certify or resolve them.
