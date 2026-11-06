---
id: post-type-ii-dp-brane-dbi-wz-action
kind: postulate
title: Type II Dp Brane DBI WZ Action
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 9
domain: physics
library: physics
deps:
  - def-dp-brane-worldvolume-fields
  - def-st-string-tension-alpha-prime
  - def-supergravity-conventions-and-normalizations
  - def-type-iia-potential-gauge-transformations
  - def-type-iib-potential-gauge-transformations
  - post-type-iia-two-derivative-supergravity-action
  - post-type-iib-two-derivative-supergravity-pseudoaction
dependency_roles:
  def-dp-brane-worldvolume-fields: formulation-prerequisite
  def-st-string-tension-alpha-prime: formulation-prerequisite
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  def-type-iia-potential-gauge-transformations: formulation-prerequisite
  def-type-iib-potential-gauge-transformations: formulation-prerequisite
  post-type-iia-two-derivative-supergravity-action: formulation-prerequisite
  post-type-iib-two-derivative-supergravity-pseudoaction: formulation-prerequisite
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Adopted disk-level, leading-derivative, single-Abelian Type II Dp-brane probe action for a smooth oriented timelike worldvolume; includes a separately stated local IIB D9 top-form WZ supplement and the massless IIA D8 lower-potential couplings, but not the massive charged-D8 correction; makes no global tadpole-cancellation claim; excludes backreaction, higher-curvature terms, and an exact non-Abelian DBI action."
sources:
  references:
    - title: "J. Polchinski, S. Chaudhuri, and C. V. Johnson, Notes on D-Branes, arXiv:hep-th/9602052v2"
      url: "https://arxiv.org/pdf/hep-th/9602052v2"
      locator: "Lecture II §2.5, equation (2.19), PDF p. 15, for the leading DBI term; Lecture III §3.3, equations (3.20)–(3.24), PDF pp. 27–31, for RR charge normalization."
    - title: "M. B. Green, C. M. Hull, and P. K. Townsend, D-brane Wess–Zumino actions, T-duality and the cosmological constant, arXiv:hep-th/9604119v1"
      url: "https://arxiv.org/pdf/hep-th/9604119v1"
      locator: "§1, equations (1.1)–(1.9), and §2, equations (2.1)–(2.10); Wess–Zumino polyform, its democratic field-strength convention, local gauge transformations, and the separate massive-IIA Chern–Simons correction."
    - title: "M. J. D. Hamilton, The field and Killing spinor equations of M-theory and type IIA/IIB supergravity in coordinate-free notation, arXiv:1607.00327v3"
      url: "https://arxiv.org/pdf/1607.00327v3"
      locator: "§6.1, Definition 6.1 and the following IIA field-strength and potential transformations; §7.1, Definition 7.1 and the following IIB field-strength and potential transformations."
    - title: "Eric A. Bergshoeff, Mees de Roo, Sven F. Kerstan, Tomas Ortín, and Fabio Riccioni, SL(2,R)-invariant IIB Brane Actions, arXiv:hep-th/0611036v2"
      url: "https://arxiv.org/pdf/hep-th/0611036v2"
      locator: "§2.1 equations (2.3)–(2.6) and §3.6 equation (3.10); the standard IIB D9 WZ component and gauge conventions, separate from the GHT massless democratic list."
    - title: "C. V. Johnson, D-Brane Primer, arXiv:hep-th/0007170v3"
      url: "https://arxiv.org/pdf/hep-th/0007170v3"
      locator: "§5.4, equation (254), and §5.9, equations (274)–(275), PDF pp. 96, 108–109; absolute charge/tension normalization with κ₀. §5.10, PDF p. 112, qualifies the self-dual p=3 case. §6.2, equation (286), PDF p. 113, is used only to compare the usual connection coefficient, not its opposite B-sign convention."
verification:
  precheck: pass
  sources_checked:
    date: 2026-11-05
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
---

## Postulate

Let $X^{10}$ be an oriented Lorentzian Type II background with mostly-plus string-frame metric $G^{(s)}$, and let $\iota:W^{p+1}\hookrightarrow X$ be a smooth oriented timelike embedding, with $0\le p\le9$ and $p$ even in Type IIA or odd in Type IIB. Work locally with smooth fields and compactly supported variations; global potential patching and worldvolume boundary terms are outside this item. Write $\Phi$ for the dimensionless dilaton, $\Phi_\infty$ for its constant asymptotic value, and $g_{\mathrm{str}}:=e^{\Phi_\infty}>0$ for the dimensionless string coupling. Use a single Abelian worldvolume connection $A$, curvature $F_A=dA$, and local NS two-form potential $B_2$, and put
$$\mathcal F:=2\pi\alpha'F_A-\iota^*B_2.$$
The coordinate components $\mathcal F_{\alpha\beta}$ are dimensionless and give the dimensionless matrix input to the DBI determinant. As a differential two-form, $\mathcal F=\tfrac12\mathcal F_{\alpha\beta}d\xi^\alpha\wedge d\xi^\beta$ has coordinate units of length squared when the worldvolume coordinates $\xi^\alpha$ have length units; its wedge powers in the WZ expansion have matching form-degree units.

The source-to-local worldvolume convention is explicit: for the local Abelian variable $V^{\mathrm{GHT}}$ in Green–Hull–Townsend (GHT), set
$$V^{\mathrm{GHT}}=4\pi^2A,\qquad F^{\mathrm{GHT}}=dV^{\mathrm{GHT}}=4\pi^2F_A,\qquad B^{\mathrm{GHT}}=B_2.$$
Consequently $\alpha'F^{\mathrm{GHT}}/(2\pi)-\iota^*B^{\mathrm{GHT}}=\mathcal F$, in both the source's DBI matrix and its WZ exponential. A local Abelian gauge parameter is rescaled by the same factor: $\lambda^{\mathrm{GHT}}=4\pi^2\lambda$. The adopted NS shift gives $\delta V^{\mathrm{GHT}}=(2\pi/\alpha')\iota^*\zeta_1$, again preserving that combination. This is a local change of Lie-algebra variable; it does not identify global holonomy periods, line-bundle lattices, or the source's large-gauge conventions. GHT supplies the local massless minus-$B$ functional form, not an independent absolute numerical determination of $\mu_p$. In this local comparison its bare coefficient $T_p^{\mathrm{GHT}}$ is written as $\mu_p$, so the physical constant-dilaton tension is $T_p^{\mathrm{GHT}}/g_{\mathrm{str}}=\mu_p/g_{\mathrm{str}}$; the absolute choice is fixed by the RR normalization below. No source radius-normalization or large-gauge quantization formula is imported by this local comparison.

Use natural units $\hbar=c=1$ and length-valued local coordinates. The components of $G^{(s)}$, $B_2$, $C_r$, and $\Phi$ are dimensionless; $A_\mu$ has units $L^{-1}$, $F_{A,\mu\nu}$ has units $L^{-2}$, $[\alpha']=L^2$, and $[\mu_p]=[T_p]=L^{-(p+1)}$. Thus the determinant matrix entries and the components $\mathcal F_{\alpha\beta}$ are dimensionless. As differential forms, $C_r$ has coordinate units $L^r$ and $\mathcal F$ has units $L^2$, so every term $C_{p+1-2k}\wedge\mathcal F^k$ in the WZ top-form component has units $L^{p+1}$, cancelled by $\mu_p$ upon integration. The DBI measure $d^{p+1}\xi$ has the same units $L^{p+1}$, so both displayed action terms are dimensionless.

For the local WZ polyform, use the massless Green–Hull–Townsend democratic RR convention $C_{\le9}=\sum_{r=0}^{9}C_r$: $C_r$ is a smooth real $r$-form, with odd $r$ in Type IIA and even $r$ in Type IIB. Include every degree $r=p+1,p-1,\ldots\ge0$ required by the chosen $p$ and present in that theory's stated local data. Higher-degree dual potentials are part of the supplied democratic background data, with their modified field strengths related by the source's duality constraint. For a small RR gauge parameter polyform $\Lambda$ of opposite parity, take $\delta_\Lambda C_{\le9}=(d\Lambda-H_3\wedge\Lambda)_{\le9}$, where $H_3=dB_2$; under the small NS shift $\delta_\zeta B_2=d\zeta_1$, take $\delta_\zeta C_{\le9}=0$ in this WZ basis.

In the dependent massless Type IIA model, $F_0=0$ and the optional $C_9$ potential is set to zero. Thus at $p=8$ the displayed massless WZ expression includes only the supplied lower-potential induced couplings and does not assert a nonzero bare D8 source charge. The standard charged massive-IIA D8 coupling requires the source's additional Romans-mass Chern–Simons terms and is not part of this massless postulate.

For the Type IIB standard D9 case $p=9$, also adopt a smooth local real ten-form potential $C_{10}^{\mathrm{D9}}$ and extend the same small RR transformation by $\delta C_{10}^{\mathrm{D9}}=(d\Lambda-H_3\wedge\Lambda)_{10}$, with $\Lambda_9$ a smooth real nine-form gauge parameter; set $\delta_\zeta C_{10}^{\mathrm{D9}}=0$ under the small NS shift. This is the separate D9 WZ supplement; it is not part of the GHT sum through degree nine or of the Hamilton crosswalk for the lower IIB potentials. In the expression below, $C$ means $C_{\le9}+C_{10}^{\mathrm{D9}}$ only for this IIB D9 case, and $C_{\le9}$ otherwise. The cited D9 source uses its own IIB potential conventions; only the local D9 degree content and WZ coupling are imported here, with the displayed transformations defining the present basis. These are local transformations; no large-gauge or global-gerbe statement is adopted.

The crosswalk to the independent Hamilton fields used by the local supergravity suppliers is fixed as follows. In Type IIA let $C_1=-C_1^{H}$ and $C_3=C_3^{H}$, so the first two components of $dC-H_3\wedge C$ are $-G_2^{H}$ and $\widetilde G_4^{H}$. The corresponding gauge parameters are $\Lambda_0=-\Lambda_0^{H}$ and $\Lambda_2=\Lambda_2^{H}$. In Type IIB let $C_0=C_0^{H}$, $C_2=C_2^{H}$, and $C_4=C_4^{H}+\tfrac12B_2\wedge C_2^{H}$; then the degree-one, degree-three, and degree-five components of $dC-H_3\wedge C$ are respectively $G_1^{H}$, $\widetilde G_3^{H}$, and $\widetilde G_5^{H}$. For RR shifts use $\Lambda_1=\Lambda_1^{H}$ and $\Lambda_3=\Lambda_3^{H}+\tfrac12B_2\wedge\Lambda_1^{H}$. Under an IIB NS shift, the crosswalk changes $C_4$ by $\tfrac12d(C_2^{H}\wedge\zeta_1)$, which is an exact local RR gauge shift. Thus the displayed WZ potentials and the Hamilton field-strength conventions are related by an explicit local component map.

Fix the RR normalization relative to the cited sources as well. Let $\kappa_0>0$ satisfy $2\kappa_0^2=(2\pi)^7\alpha'^4$. In the zero-$B_2$, linearized electric sector of an unconstrained propagating RR potential, the local Type IIA Two Derivative Supergravity Action and Type IIB Two Derivative Supergravity Pseudoaction conventions have kinetic term $-(4\kappa_0^2)^{-1}\int dC_r\wedge *dC_r$. Define the canonically normalized Polchinski–Chaudhuri–Johnson (PCJ) variable and charge by
$$\mathsf A_r^{\mathrm{PCJ}}:=\frac{C_r}{\sqrt2\,\kappa_0},\qquad q_p^{\mathrm{PCJ}}:=\sqrt2\,\kappa_0\mu_p.$$
Then its kinetic term is $-\tfrac12\int d\mathsf A_r^{\mathrm{PCJ}}\wedge *d\mathsf A_r^{\mathrm{PCJ}}$ and $\mu_p\int C_{p+1}=q_p^{\mathrm{PCJ}}\int\mathsf A_{p+1}^{\mathrm{PCJ}}$. The sign of the charge is fixed by the chosen brane orientation. PCJ equation (3.20) uses the Euclidean version of this canonical convention; its equation (3.24) gives $(q_p^{\mathrm{PCJ}})^2=2\pi(4\pi^2\alpha')^{3-p}$. Thus the positive charge unit obeys
$$\mu_p^2=\frac{2\pi(4\pi^2\alpha')^{3-p}}{2\kappa_0^2}=(2\pi)^{-2p}\alpha'^{-(p+1)},$$
which is the value below. The scale applies to the WZ potential basis already fixed by the explicit Hamilton component crosswalk, including its signs and $B_2$-dependent shift; it is not a second rescaling of the Hamilton fields. Since $\kappa_0$ is constant, rescaling $C$ and its RR gauge parameters together commutes with $d-H_3\wedge$. The independent normalization is also stated directly in Johnson, equations (254), (274)–(275), with the constant-dilaton tension equal to $\mu_p/g_{\mathrm{str}}$.

This electric kinetic calibration is not a derivation from an unconstrained action for a self-dual five-form: PCJ explicitly excepts $p=3$ below (3.20), and Hamilton's IIB pseudoaction has half the unconstrained five-form term with self-duality imposed separately. The D3 coefficient is the same adopted standard brane-family normalization, whose self-dual case Johnson discusses via T-duality; it is not obtained by incorrectly canonically normalizing that half-strength term. Nonpropagating top-form coefficients likewise are not fixed by this electric kinetic calculation. The separately adopted D9 top-form basis and the massless D8 lower-potential restriction above retain their full stated scope. No global charge-quantization or sourced bulk equation is deduced here.

Adopt the disk-level single-Abelian probe action
$$S_{Dp}=-\mu_p\int_W e^{-\Phi}\sqrt{-\det\!\bigl(\iota^*G^{(s)}+\mathcal F\bigr)}+\mu_p\int_W\bigl[\iota^*C\wedge e^{\mathcal F}\bigr]_{p+1},\qquad \mu_p=((2\pi)^p\alpha'^{(p+1)/2})^{-1},\qquad T_p:=\frac{\mu_p}{g_{\mathrm{str}}}.$$
Here $[\cdot]_{p+1}$ denotes the component of total form degree $p+1$, $\mu_p$ is the RR charge normalization, and $T_p$ is the physical constant-dilaton tension; they are not interchangeable when $\Phi$ varies. The determinant is used on the Lorentzian branch where its argument is nondegenerate and $-\det(\iota^*G^{(s)}+\mathcal F)>0$, with the positive square root. Under $\delta_\zeta B_2=d\zeta_1$ and $\delta_\zeta A=\iota^*\zeta_1/(2\pi\alpha')$, $\mathcal F$ is invariant. The action is an adopted leading-derivative effective action supported by disk calculations; it is not derived here from the worldsheet path integral.

## Postulate references

[[post-type-iia-two-derivative-supergravity-action]]

[[post-type-iib-two-derivative-supergravity-pseudoaction]]

[Polchinski, Chaudhuri, and Johnson, Lecture II §2.5 and Lecture III §3.3](https://arxiv.org/pdf/hep-th/9602052v2)

[Green, Hull, and Townsend, §§1–2](https://arxiv.org/pdf/hep-th/9604119v1)

[Hamilton, §§6.1 and 7.1](https://arxiv.org/pdf/1607.00327v3)

[Bergshoeff et al., §2.1 and §3.6](https://arxiv.org/pdf/hep-th/0611036v2)

[Johnson, §§5.4, 5.9–5.10 and 6.2, equations (254), (274)–(275), (286)](https://arxiv.org/pdf/hep-th/0007170v3)
