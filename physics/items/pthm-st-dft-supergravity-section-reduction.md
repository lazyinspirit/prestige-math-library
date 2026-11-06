---
id: pthm-st-dft-supergravity-section-reduction
kind: physics-theorem
title: Strong Constraint DFT Supergravity Section Reduction
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 7
domain: physics
library: physics
deps:
  - def-st-double-field-theory-generalized-metric-data
  - pthm-st-dft-generalized-scalar-action-invariance
  - def-supergravity-conventions-and-normalizations
  - post-ten-dimensional-ns-ns-supergravity-action
dependency_roles:
  def-st-double-field-theory-generalized-metric-data: formulation-prerequisite
  pthm-st-dft-generalized-scalar-action-invariance: physical-result
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-ten-dimensional-ns-ns-supergravity-action: physical-assumption
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
physical_scope: "Local two-derivative NS–NS DFT action evaluated on the strong-constraint supergravity section in the stated string-frame and curvature conventions; no global compactification, sources, RR fields, higher derivatives, loops, or doubled-coordinate dependence is asserted."
sources:
  references:
    - title: "Olaf Hohm, Chris Hull, and Barton Zwiebach, Generalized Metric Formulation of Double Field Theory, arXiv:1006.4823v1"
      url: "https://arxiv.org/pdf/1006.4823v1"
      locator: "§§4.1–4.2, equations (4.10)–(4.13) and (4.24)–(4.27), printed pp. 16–19 (PDF pp. 17–20): the strong-constraint action density and its reduction to the string-frame NS–NS density."
    - title: "Gerardo Aldazabal, Diego Marqués, and Carmen Núñez, Double Field Theory: A Pedagogical Review, arXiv:1305.1907v2"
      url: "https://arxiv.org/pdf/1305.1907v2"
      locator: "§§3.3, 3.6–3.7, PDF pp. 19–31: generalized fields, the generalized-metric action, and exact supergravity-section reduction."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $D=10$ and use the generalized-metric DFT data of the preceding definition, with $\widetilde\partial^i=0$. On a product coordinate domain $U_x\times\widetilde U$, with $0<V_{\widetilde U}:=\int_{\widetilde U}d^{10}\widetilde x<\infty$, fix the action normalization $S_{\rm DFT}:=(2\kappa_0^2)^{-1}\int_{U_x\times\widetilde U}d^{20}X\,\mathcal L_{\rm DFT}$, where $\mathcal L_{\rm DFT}$ is the preceding density and $2\kappa_0^2=(2\pi)^7\alpha'^4$. All integrals are asserted where defined. Set $G:=G^{(s)}$, parameterize $\mathcal H$ by $G,B_2$, and set $e^{-2d}=\sqrt{-G}e^{-2\Phi}$. Under the adopted source-free leading tree-level two-derivative NS–NS action, the action $S_{\rm DFT}/V_{\widetilde U}$ reduces, modulo the integrated total derivatives below, to $(2\kappa_0^2)^{-1}\int_{U_x}d^{10}x$ times the density $\sqrt{-G^{(s)}}e^{-2\Phi}[R_s+4|d\Phi|_{G^{(s)}}^2-(1/12)H_{ijk}H_{G^{(s)}}^{ijk}]$, where $H_3=dB_2$. Here $R_s$ uses $\Gamma^P{}_{MN}=\frac12G^{PQ}(\partial_MG_{NQ}+\partial_NG_{MQ}-\partial_QG_{MN})$, $R^P{}_{QMN}=\partial_M\Gamma^P{}_{NQ}-\partial_N\Gamma^P{}_{MQ}+\Gamma^P{}_{MR}\Gamma^R{}_{NQ}-\Gamma^P{}_{NR}\Gamma^R{}_{MQ}$, $R_{QN}=R^P{}_{QPN}$, and $R_s=G^{(s)QN}R_{QN}$. This is a local section calculation; the action remains an adopted physical premise.

## Statement references

[Hohm, Hull, and Zwiebach, §§4.1–4.2](https://arxiv.org/pdf/1006.4823v1)

[Aldazabal, Marqués, and Núñez, §§3.3 and 3.6](https://arxiv.org/pdf/1305.1907v2)

## Facts & Assumptions

**Given:** Smooth fields on the local section, the DFT generalized metric and density definitions, the normalized action and finite dual-coordinate volume specified in the Statement, $\widetilde\partial^i=0$, and, when asserting equality of integrated actions, vanishing boundary flux for the DFT divergence in [F2] and the dilaton divergence below. Compact support of variations is used only for variational statements and does not by itself remove these field-dependent boundary fluxes.

[F1] [[def-st-double-field-theory-generalized-metric-data]]: $\mathcal H_{MN}$ is the block generalized metric built from a local metric $g$, $B_2$, and $e^{-2d}=\sqrt{-g}e^{-2\Phi}$ on the physical section; this item specializes $g$ to $G^{(s)}$ using [A1].

[F2] [[pthm-st-dft-generalized-scalar-action-invariance]]: the density identity is $\mathcal L_{\rm DFT}=e^{-2d}\mathcal R+\partial_M\!\left[e^{-2d}(\partial_N\mathcal H^{MN}-4\mathcal H^{MN}\partial_Nd)\right]$; its integrated use requires that flux to vanish at the boundary.

[A1] [[def-supergravity-conventions-and-normalizations]]: in ten dimensions $G^{(s)}$ is the mostly-plus string-frame metric, $\hbar=c=1$, $2\kappa_0^2=(2\pi)^7\alpha'^4$, $\Gamma^P{}_{MN}=\frac12G^{PQ}(\partial_MG_{NQ}+\partial_NG_{MQ}-\partial_QG_{MN})$, and $R_s$ is formed from $R^P{}_{QMN}=\partial_M\Gamma^P{}_{NQ}-\partial_N\Gamma^P{}_{MQ}+\Gamma^P{}_{MR}\Gamma^R{}_{NQ}-\Gamma^P{}_{NR}\Gamma^R{}_{MQ}$ by $R_{QN}=R^P{}_{QPN}$ and $R_s=G^{(s)QN}R_{QN}$.

[A2] [[post-ten-dimensional-ns-ns-supergravity-action]]: adopt the source-free leading tree-level two-derivative action in terms of $G^{(s)}$, $\Phi$, and $H_3=dB_2$, with no RR fields, localized sources, loops, or higher powers of $\alpha'$.

## Proof

1.1 On the section $\widetilde\partial^i=0$, every doubled field depends only on $x^i$, so $\eta^{MN}\partial_M\partial_NA=0$ and $\eta^{MN}\partial_MA\,\partial_NB=0$ for all fields and products. Thus this section satisfies both clauses of the strong constraint in [F1]. [given, F1, algebra]

1.2 Put $G:=G^{(s)}$ by [A1] and define $H_{ijk}=3\partial_{[i}B_{jk]}$. Taking logarithms of [F1]'s density relation gives $d=\Phi-\frac14\log|\det G|$. Raising both generalized-metric indices with $\eta$ gives $\mathcal H^{ij}=G^{ij}$ and the full block matrix $\mathcal H^{MN}=\begin{pmatrix}G^{-1}&-G^{-1}B_2\\B_2G^{-1}&G-B_2G^{-1}B_2\end{pmatrix}$. On the section $\partial_M=(\partial_i,0)$, so the first four terms of $\mathcal R$ are exactly $-\partial_i\partial_jG^{ij}+4(\partial_iG^{ij})\partial_jd+4G^{ij}\partial_i\partial_jd-4G^{ij}\partial_id\,\partial_jd$. Direct multiplication of the blocks in the last two terms gives
$$\frac18\mathcal H^{ij}\partial_i\mathcal H^{KL}\partial_j\mathcal H_{KL}-\frac12\mathcal H^{ij}\partial_i\mathcal H^{KL}\partial_K\mathcal H_{jL}=\frac14G^{ij}\partial_iG^{k\ell}\partial_jG_{k\ell}-\frac12G^{ij}\partial_jG^{k\ell}\partial_\ell G_{ik}-\frac1{12}G^{ia}G^{jb}G^{kc}H_{ijk}H_{abc}.$$
Thus the block substitution yields the complete intermediate scalar
$$\mathcal R=\frac14G^{ij}\partial_iG^{k\ell}\partial_jG_{k\ell}-\frac12G^{ij}\partial_jG^{k\ell}\partial_\ell G_{ik}-\partial_i\partial_jG^{ij}+4(\partial_iG^{ij})\partial_jd+4G^{ij}\partial_i\partial_jd-4G^{ij}\partial_id\,\partial_jd-\frac1{12}G^{ia}G^{jb}G^{kc}H_{ijk}H_{abc}.$$
[given, F1, A1, algebra]

2.1 Put $q_i:=\partial_i\log\sqrt{-\det G}=\frac12G^{ab}\partial_iG_{ab}$, so $d=\Phi-\frac12\log\sqrt{-\det G}$, $\partial_i d=\partial_i\Phi-\frac12q_i$, and $\partial_i\partial_jd=\partial_i\partial_j\Phi-\frac12\partial_iq_j$. Differentiating $G^{ia}G_{aj}=\delta^i_j$ gives $\partial_kG^{ij}=-G^{ia}G^{jb}\partial_kG_{ab}$; metric compatibility and $q_i=\Gamma^k_{ki}$ give $\partial_iG^{ij}+G^{ij}q_i+G^{ab}\Gamma^j_{ab}=0$. Expanding the Ricci scalar formula in [A1] with the Christoffel symbols $\Gamma^k_{ij}=\frac12G^{k\ell}(\partial_iG_{j\ell}+\partial_jG_{i\ell}-\partial_\ell G_{ij})$ yields the exact metric identity
$$R_s=\frac14G^{ij}\partial_iG^{k\ell}\partial_jG_{k\ell}-\frac12G^{ij}\partial_jG^{k\ell}\partial_\ell G_{ik}-\partial_i\partial_jG^{ij}-2(\partial_iG^{ij})q_j-2G^{ij}\partial_iq_j-G^{ij}q_iq_j.$$
Substitution of $\partial_i d$ and $\partial_i\partial_jd$ into the metric/dilaton terms of step 1.2, followed by this identity, groups the terms independent of $\Phi$ into $R_s$. The remaining terms are
$$4\partial_iG^{ij}\partial_j\Phi+4G^{ij}\partial_i\partial_j\Phi+4G^{ij}q_i\partial_j\Phi-4G^{ij}\partial_i\Phi\,\partial_j\Phi.$$
The metric-compatibility identity above turns the first and third terms into $-4G^{ab}\Gamma^j_{ab}\partial_j\Phi$. Thus, defining $\Box_s f:=G^{ij}(\partial_i\partial_jf-\Gamma^k_{ij}\partial_kf)$, the metric/dilaton part is $R_s+4\Box_s\Phi-4|d\Phi|_{G^{(s)}}^2$. The last term of step 1.2 is $-\frac1{12}H_{ijk}H_{G^{(s)}}^{ijk}$. Therefore $\mathcal R=R_s+4\Box_s\Phi-4|d\Phi|_{G^{(s)}}^2-\frac1{12}H_{ijk}H_{G^{(s)}}^{ijk}$. [given, F1, A1, step 1.2, algebra]

3.1 Using the action normalization in the Statement and independence of the dual coordinates gives $S_{\rm DFT}/V_{\widetilde U}=(2\kappa_0^2)^{-1}\int_{U_x}d^{10}x\,\mathcal L_{\rm DFT}$. By [F2], this equals $(2\kappa_0^2)^{-1}\int_{U_x}d^{10}x\,e^{-2d}\mathcal R$ modulo the same normalized integral of its divergence. Multiplying step 2.1 by $e^{-2d}=\sqrt{-G^{(s)}}e^{-2\Phi}$ gives the physical density, where $\sqrt{-G}:=\sqrt{-\det(G_{ij})}$ in this mostly-plus Lorentzian chart. The Christoffel formula gives $\sqrt{-G}\Box_s\Phi=\partial_i(\sqrt{-G}G^{ij}\partial_j\Phi)$. For a coordinate domain $U_x$, define the oriented boundary element $d\Sigma_i$ by $\int_{\partial U_x}V^i d\Sigma_i:=\int_{\partial U_x}\iota_V(dx^0\wedge\cdots\wedge dx^9)$ for every smooth vector field $V$; integration by parts then has the boundary term
$$\int_{U_x}\sqrt{-G}e^{-2\Phi}\Box_s\Phi=\int_{\partial U_x}d\Sigma_i\,\sqrt{-G}e^{-2\Phi}G^{ij}\partial_j\Phi+2\int_{U_x}\sqrt{-G}e^{-2\Phi}|d\Phi|_{G^{(s)}}^2.$$
Under the boundary-flux condition in the Given clause, the integrated dilaton contribution $4\Box_s\Phi-4|d\Phi|_{G^{(s)}}^2$ therefore becomes $+4|d\Phi|_{G^{(s)}}^2$. Without that condition, the same conclusion is an equality of densities modulo the displayed divergence. The prefactor $1/(2\kappa_0^2)$ is unchanged throughout; by [A1]–[A2], the resulting normalized physical-coordinate integral is exactly the adopted NS–NS action. This proves the local section reduction under the adopted physical action, without deriving that action itself. [given, F2, A1, A2, step 2.1, algebra] ∎

