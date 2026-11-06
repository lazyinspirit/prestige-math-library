---
id: ex-cmp4-d7-lvs-local-soft-term-pattern
kind: example
title: Local D7 matter metrics and a volume-suppressed LVS soft-term pattern
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 17
domain: physics
library: physics
category: string-theory
page: cmp-susy-breaking-soft-terms-examples
deps:
  - def-cmp-cy3-kahler-moduli-and-divisor-volumes
  - def-cmp4-compactification-derived-moduli-eft-data
  - pthm-cmp4-lvs-two-modulus-asymptotic-ads-branch
  - pthm-cmp4-moduli-mediated-soft-terms
dependency_roles:
  def-cmp-cy3-kahler-moduli-and-divisor-volumes: formulation-prerequisite
  def-cmp4-compactification-derived-moduli-eft-data: formulation-prerequisite
  pthm-cmp4-lvs-two-modulus-asymptotic-ads-branch: physical-result
  pthm-cmp4-moduli-mediated-soft-terms: physical-result
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: "A leading-order two-modulus type-IIB large-volume EFT example with a stipulated small-cycle D7 gauge sector and matter metric. It is not a constructed Standard Model, a universal D7 spectrum, or a full string solution. The retained visible scalar Taylor coefficients through cubic order are auxiliary-induced; V0 is the F-sector value, not an independently shifted total vacuum energy."
empirical_premises: []
sources:
  references:
    - title: "J. P. Conlon, S. S. Abdussalam, F. Quevedo, and K. Suruliz, Soft SUSY Breaking Terms for Chiral Matter in IIB String Compactifications, arXiv:hep-th/0610129v2"
      url: "https://arxiv.org/pdf/hep-th/0610129v2"
      locator: "§2.1, equations (10)–(12) for the small-cycle matter-metric scaling (equation (11) gives the minimal-model exponent λ = 1/3, while (12) gives the generalized τ_b^{-p} form); equation (13) is the separate single-modulus KKLT metric. §3.2, equations (3.34)–(3.36) and (3.38)–(3.40), printed p. 15 (PDF p. 16), gives the dilute-flux gaugino, scalar-mass and trilinear soft terms, specializing to λ = 1/3 in (3.38)–(3.40)."
    - title: "L. McAllister and F. Quevedo, Moduli Stabilization in String Theory, arXiv:2310.20559v1"
      url: "https://arxiv.org/pdf/2310.20559v1"
      locator: "§4.4, printed pp. 43–45; model and matter-metric dependence of the leading soft terms."
    - title: "Jan Louis, Introduction to Supersymmetry and Supergravity, University of Hamburg lecture notes"
      url: "https://www.physik.uni-hamburg.de/th2/ag-louis/dokumente/lectures/ws-15-16/ws-15-susy-lecture-notes.pdf"
      locator: "Complete 79-page lecture notes; §10.3, equations (10.19)–(10.24), printed pp. 38–40, and §10.4, equations (10.32)–(10.34), printed pp. 41–42; general soft coefficients are contextual support, while the LVS assumptions remain explicit here."
---

## Example

Use natural units $\hbar=c=1$, the four-dimensional Einstein frame, and reduced Planck units $M_P=1$. Consider a family of local two-modulus large-volume scenario (LVS) data with $\mathcal V\to\infty$; each displayed $o(\cdot)$ term denotes a remainder whose ratio to its argument tends to zero along this family. Supply a smooth compact Calabi–Yau threefold $X$ in the convention of the volume-coordinate supplier, and smooth holomorphic divisors $D_b,D_s\subset X$ (closed complex submanifolds of complex codimension one). Choose dimensionless smooth real closed $(1,1)$-forms $\omega_b,\omega_s$ whose integral classes form the selected orientifold-even Kähler basis and are Poincaré dual to these divisors: $\int_{D_a}\eta=\int_X\omega_a\wedge\eta$ for every smooth closed real four-form $\eta$ and $a\in\{b,s\}$. On this two-dimensional Kähler sector take $[J]=v^b[\omega_b]+v^s[\omega_s]$, with $J$ a positive closed real $(1,1)$-form in $\alpha'=1$ units, and set $\tau_a=\frac12\int_{D_a}J\wedge J=\frac12\int_X\omega_a\wedge J\wedge J>0$. Require the map $(v^b,v^s)\mapsto(\tau_b,\tau_s)$ to have nonsingular real Jacobian on the chosen patch. Write $T_b=\tau_b+i\theta_b$ and $T_s=\tau_s+i\theta_s$ for the stipulated local complex EFT coordinates, with $\theta_b,\theta_s\in\mathbb R$ on this patch. A specified small-cycle D7 stack means a Type IIB D7-brane gauge sector with worldvolume $M_4\times D_s$, where $M_4$ is the four-dimensional external spacetime; thus its internal wrapping class is the supplied $[D_s]$. These geometric data are conditional inputs; no global brane/tadpole solution is asserted. Take the leading Swiss-cheese geometry
$$\mathcal V=\alpha\left(\tau_b^{3/2}-\lambda_g\tau_s^{3/2}\right),\qquad \alpha,\lambda_g>0,\qquad \mathcal V>0,$$
and the leading Kähler potential $K_0=-2\log\mathcal V$. Dilute worldvolume flux means that its contribution to the displayed leading gauge-kinetic data is omitted. Use gauge kinetic functions $f_a=T_s/(2\pi)$ and matter metric
$$Z_{\alpha\bar\beta}=\frac{\tau_s^{\lambda_m}}{\tau_b}k_{\alpha\bar\beta}(U),\qquad \lambda_m=\frac13,$$
where $U$ denotes fixed local complex-structure coordinates and $k(U_0)$ is positive Hermitian and diagonal in a constant visible-field basis at the selected background $U_0$. Assume $F^U=0$ and that the nonzero tree-level Yukawa couplings $Y_{\alpha\beta\gamma}(U)$ have no Kähler-modulus dependence. Write $m_{3/2}:=e^{K_0/2}|W_0|$ and $M:=F^{T_s}/(2\tau_s)$. Assume that on a tail of the family $m_{3/2}>0$ and $M\ne0$, and that $\lim_{\mathcal V\to\infty}|M|/m_{3/2}=0$ along this family. In the retained leading large-volume background also assume
$\frac{F^{T_b}}{2\tau_b}=-m_{3/2}+o(|M|),\qquad m_{3/2}^2+V_0-\frac{|F^{T_b}|^2}{4\tau_b^2}=o(|M|^2),$
and
$\frac{\tau_s^{3/2}}{\mathcal V}\frac{m_{3/2}}{|M|}\longrightarrow0,\qquad \frac{\tau_s^{3/2}}{\mathcal V}\longrightarrow0.$
These are explicit leading-order auxiliary and scale-separation hypotheses of this EFT example. Use the visible-field Kähler/superpotential Taylor expansion and the auxiliary and gauge-component conventions of the tree-level soft-term theorem. For each family member, require $V_{\rm ret}=V_F+V_D+U_{\rm add}(T,\bar T,U_{\rm cs},\bar U_{\rm cs})+R(T,\bar T,U_{\rm cs},\bar U_{\rm cs},Q,\bar Q)$, where $U_{\rm cs}$ denotes the fixed complex-structure coordinates, the added function $U_{\rm add}$ is independent of visible fields, and $R$ is $C^3$ in the real visible coordinates with all visible derivatives of orders zero through three vanishing at $Q=0$. This explicitly excludes independent visible quadratic or cubic potential terms. Here $V_0$ in the stipulated no-scale residual is $V_F(Q=0)$, not the total vacuum energy if $U_{\rm add}\ne0$; the supplied auxiliary hierarchy must still hold at the chosen background.

In the leading soft-term truncation, the gaugino mass is $M_a=M$, the scalar mass satisfies $m_\alpha^2=|M|^2/3$, and the trilinear coefficient is $A_{\alpha\beta\gamma}=-M$. After the common phase choice $M>0$, the scalar mass is $m_\alpha=M_a/\sqrt3$. Thus the displayed soft scales are suppressed relative to $m_{3/2}$ by the assumed small-cycle F-term hierarchy. This example supplies no universal D7 or Minimal Supersymmetric Standard Model (MSSM) prediction.

## Example references

[Conlon, Abdussalam, Quevedo, and Suruliz, §2.1 equations (2.10)–(2.12) and §3.2 equations (3.34)–(3.40)](https://arxiv.org/pdf/hep-th/0610129v2)

[McAllister and Quevedo, §4.4](https://arxiv.org/pdf/2310.20559v1)

[Louis, §§10.3–10.4, complete lecture notes](https://www.physik.uni-hamburg.de/th2/ag-louis/dokumente/lectures/ws-15-16/ws-15-susy-lecture-notes.pdf)

## Facts & Assumptions

**Given:** The local Kähler-volume coordinates, compactification EFT chart, moduli auxiliary values, D7 gauge function, and positive visible matter metric in the Example statement.

[F1] [[def-cmp-cy3-kahler-moduli-and-divisor-volumes]] defines $v^a$, $\mathcal V$, and $\tau_a$ as dimensionless Kähler-cone and dual four-cycle coordinates; a divisor-volume interpretation requires the stated divisor basis. Its stored ready record is stale because the item/dependency hash changed, so the current readiness check remains open.

[F2] [[def-cmp4-compactification-derived-moduli-eft-data]] defines the local compactification EFT patch, Einstein metric, $K,W,f_{AB}$, retained coordinates, and omitted sectors. Its current Step 1 record is escalated on unresolved O3/O7 coordinate, conditional $K/f$, orientifold, parity, local-metric, and $N=2$ period readiness; we use only the stated data interface conditionally.

[F3] [[pthm-cmp4-moduli-mediated-soft-terms]] gives the conditional tree-level formulae for the gaugino mass, diagonal scalar mass, and trilinear coefficient after canonical normalization. Its hypotheses include positive diagonal matter metrics, $V_D(Q=0)=0$, and no visible $D$-term contribution through cubic order. The Example does not impose the background-value condition on its original $V_D$. Step 1.2 instead applies this theorem to a reference auxiliary model with zero moment maps and transfers only the unchanged visible coefficients. In both models $V_0$ denotes the F-sector value, not an independently shifted total energy.

[A1] The planned supplier [[pthm-cmp4-lvs-two-modulus-asymptotic-ads-branch]] now has a current carrier on the A page `cmp-moduli-stabilization`; its complete local conditional proof was inspected. The exact planned Statement in `research/plan-spec.json` is: “For the exact radial 4D EFT function $V_{\mathrm{3term}}(τ,𝒱)=A\sqrt{τ}\exp(-2aτ)/𝒱-Bτ\exp(-aτ)/𝒱^2+C/𝒱^3$ on $τ>0$, 𝒱>0, with constants $A,B,C,a>0$, there is exactly one stationary point. Its value is negative and its Hessian in the two radial coordinates is positive definite. The theorem concerns this exact three-term scalar function only. A type-IIB LVS interpretation requires the separately stated K,W-to-coefficient map, Kähler-cone check, axion analysis, and correction-control conditions; it does not assert that omitted string corrections are controlled or that dS uplift exists.” The actual carrier uses Planck units, independent dimensionless coordinates $\tau,\mathcal V>0$, positive dimensionless constants $A_1,B_1,C_1,a$, and the exact function $V_{\mathrm{3term}}=A_1\sqrt{\tau}e^{-2a\tau}/\mathcal V-B_1\tau e^{-a\tau}/\mathcal V^2+C_1/\mathcal V^3$; its Statement proves one stationary point, negative value, and positive-definite coordinate Hessian, which matches the planned radial interface after $A=A_1$, $B=B_1$, and $C=C_1$. The actual hypotheses fix only that exact positive-quadrant function. The plan additionally requires fluxes to stabilize $S$ and complex-structure fields with a mass hierarchy for a physical Kähler-sector truncation; an independently stated $K,W$-to-coefficient map and actual interior Kähler-cone point for a Swiss-cheese interpretation; and omission or separate control of $\alpha'$, loop, warping, higher-derivative, additional-instanton, uplift, and localized-source corrections. Those are physical-interpretation conditions in the plan, not hypotheses of the actual exact-function Statement. The actual proof establishes no $K,W$ coefficient map, interior Kähler-cone placement, axion stability, omitted-correction control, or auxiliary F-term relation. The plan records “complete-conditional-calculation-in-note; local item reconstruction and $K,W$ coefficient derivation owed”; the actual carrier's Step 1 readiness record is missing. In the planned text, dS means de Sitter. We use the actual result only as the stipulated radial-theorem interface and do not infer the no-scale auxiliary relations or small-cycle F-term hierarchy in [A2] from it.

[A2] In the specified leading LVS model, $F^U=0$, $Y_{\alpha\beta\gamma}$ is Kähler-modulus independent, $k(U_0)$ is diagonal in the chosen constant basis, and the leading auxiliary relations and asymptotic conditions in the Example statement hold. The relations are model data for this conditional calculation, not consequences of [A1].

[A3] The gauge-kinetic function and matter metric are exactly the stated leading local inputs. Flux corrections to $f_a$, corrections to $Z_{\alpha\bar\beta}$, $D$-term mediation, loops, anomaly mediation, thresholds, and RG running are omitted. Use the visible-field Kähler/superpotential Taylor expansion and the auxiliary and gauge-component conventions of the tree-level soft-term theorem. For each family member, require $V_{\rm ret}=V_F+V_D+U_{\rm add}(T,\bar T,U_{\rm cs},\bar U_{\rm cs})+R(T,\bar T,U_{\rm cs},\bar U_{\rm cs},Q,\bar Q)$, where $U_{\rm cs}$ denotes the fixed complex-structure coordinates, the added function $U_{\rm add}$ is independent of visible fields, and $R$ is $C^3$ in the real visible coordinates with all visible derivatives of orders zero through three vanishing at $Q=0$. This explicitly excludes independent visible quadratic or cubic potential terms. Here $V_0$ in the stipulated no-scale residual is $V_F(Q=0)$, not the total vacuum energy if $U_{\rm add}\ne0$; the supplied auxiliary hierarchy must still hold at the chosen background.

## Verification

**Given:** [F1]–[F3] and [A1]–[A3], with $\tau_b,\tau_s,\mathcal V>0$ and the stated leading large-volume limit.

1.1 The supplied duality gives $\tau_a=\frac12\int_X\omega_a\wedge J^2=\frac12\kappa_{abc}v^bv^c$ for $a\in\{b,s\}$, so [F1] identifies $\tau_s$ and $\tau_b$ as the volumes of the supplied divisors $D_s,D_b$; the D7 sector wraps $D_s$. The volume-to-$\tau$ Jacobian hypothesis makes these real coordinates locally admissible, while the equation for $\mathcal V$ and the complex coordinates $T_b,T_s$ are the additional model data in [A2]. The current radial supplier in [A1] proves only its exact two-coordinate stationary-point claim; it does not supply the auxiliary relations, which remain explicit assumptions in [A2]. Its current Step 1 record is missing, so this dependency remains open. [given, F1, F2, A1, A2]

1.2 At each fixed moduli background, form a reference local auxiliary model with the same $K,W,f_a$ and component conventions, but with neutral chiral coordinates and one Abelian gauge factor for each $a$, acting trivially, with all moment maps zero. Its $V_D$ is identically zero; take its retained potential to be $V_F$. The positive metrics, regularity, holomorphic data and Yukawa symmetry required by [F3] are inherited from [A3], and all Yukawas are invariant under the trivial action. Thus every hypothesis of [F3] holds in the reference model. Chiral auxiliary elimination depends only on $K,W$, so its $F^m$, $m_{3/2}$ and $V_F$ equal the original ones. In the original model, omission of $D$-term mediation in [A3] means that $V_D$ has no visible quadratic or cubic coefficients; $U_{\rm add}$ has no visible derivatives, and those coefficients of $R$ vanish. Consequently both models have identical visible quadratic and cubic potential coefficients and identical canonical matter metrics. Their auxiliary-induced gaugino bilinears also coincide by the adopted gauge-component convention, with identical normalization $\operatorname{Re}f_a$. Therefore the soft formulae of [F3] apply to these coefficients of the original model, even when its $V_D(Q=0)$ is nonzero. No background stationarity or total-energy equality is needed for this coefficient comparison. [given, F3, A2, A3, construct, algebra]

1.3 In the chosen diagonal basis, $\log Z_\alpha=\lambda_m\log\tau_s-\log\tau_b+\log k_\alpha(U_0)$. Since $\partial_{T_b}\tau_b=\partial_{T_s}\tau_s=1/2$ and $F^U=0$, $$\partial_{T_b}\partial_{\bar T_b}\log Z_\alpha=\frac{1}{4\tau_b^2},\qquad \partial_{T_s}\partial_{\bar T_s}\log Z_\alpha=-\frac{\lambda_m}{4\tau_s^2},\qquad \partial_{T_s}\partial_{\bar T_b}\log Z_\alpha=0.$$ The sign in the second equality follows by differentiating $\log\tau_s$ twice, and the first by differentiating $-\log\tau_b$ twice. [given, A2, A3, algebra]

2.1 For $f_a=T_s/(2\pi)$, $\operatorname{Re}f_a=\tau_s/(2\pi)$ and $\partial_{T_s}f_a=1/(2\pi)$. The gaugino formula licensed by step 1.2 therefore gives $$M_a=\frac{F^{T_s}}{2\operatorname{Re}f_a}\partial_{T_s}f_a =\frac{F^{T_s}}{2\tau_s}=M.$$ [given, A3, step 1.2, algebra]

2.2 The Kähler derivatives of $K_0=-2\log\mathcal V$ are $$\partial_{T_b}K_0=-\frac{3\alpha\sqrt{\tau_b}}{2\mathcal V},\qquad \partial_{T_s}K_0=\frac{3\alpha\lambda_g\sqrt{\tau_s}}{2\mathcal V}.$$ The product matter metric gives $\partial_{T_b}\log(Z_\alpha Z_\beta Z_\gamma)=-3/(2\tau_b)$ and $\partial_{T_s}\log(Z_\alpha Z_\beta Z_\gamma)=3\lambda_m/(2\tau_s)$. Since $Y$ has no Kähler-modulus dependence and $F^U=0$, the trilinear formula licensed by step 1.2 becomes $$A_{\alpha\beta\gamma} =F^{T_b}\left(-\frac{3\alpha\sqrt{\tau_b}}{2\mathcal V}+\frac{3}{2\tau_b}\right) +F^{T_s}\left(\frac{3\alpha\lambda_g\sqrt{\tau_s}}{2\mathcal V}-\frac{3\lambda_m}{2\tau_s}\right).$$ [given, A2, A3, step 1.2, algebra]

3.1 Substitution into the scalar formula licensed by step 1.2 gives $$m_\alpha^2=m_{3/2}^2+V_0-\frac{|F^{T_b}|^2}{4\tau_b^2} +\lambda_m\frac{|F^{T_s}|^2}{4\tau_s^2} =\left(m_{3/2}^2+V_0-\frac{|F^{T_b}|^2}{4\tau_b^2}\right)+\lambda_m|M|^2.$$ The first parenthesis is $o(|M|^2)$ by [A2]. Hence the retained leading term is $m_\alpha^2=\lambda_m|M|^2=|M|^2/3$. The physical mass is nonnegative, so $m_\alpha=|M|/\sqrt3$ at this order. The coefficient comparison in step 1.2 makes the auxiliary quadratic coefficient the retained mass coefficient; $V_0$ in this cancellation remains $V_F(Q=0)$ even when a moduli-only term is present. [given, A2, A3, step 1.2, step 2.1, step 1.3, algebra]

3.2 From $\mathcal V=\alpha(\tau_b^{3/2}-\lambda_g\tau_s^{3/2})$, $$-\frac{3\alpha\sqrt{\tau_b}}{2\mathcal V}+\frac{3}{2\tau_b} =-\frac{3\alpha\lambda_g\tau_s^{3/2}}{2\tau_b\mathcal V}.$$ Multiplying by $F^{T_b}=-2\tau_bm_{3/2}+o(\tau_b|M|)$ makes this term $o(|M|)$ by the first asymptotic condition in [A2]. The $F^{T_s}$ contribution proportional to $\sqrt{\tau_s}/\mathcal V$ is $o(|M|)$ by the second asymptotic condition in [A2]; its remaining term is $-3\lambda_m F^{T_s}/(2\tau_s)=-3\lambda_m M$. Therefore $A_{\alpha\beta\gamma}=-3\lambda_m M+o(|M|)=-M+o(|M|)$, whose retained leading coefficient is $-M$. [given, A2, step 2.2, algebra]

4.1 By [A2], along the specified family $\lim_{\mathcal V\to\infty}|M|/m_{3/2}=0$, and $m_{3/2}$ and $|M|$ are nonzero on a tail, so the ratios below are defined. Steps 2.1, 3.1, and 3.2 give $|M_a|/m_{3/2}=|M|/m_{3/2}\to0$, $m_\alpha/m_{3/2}=|M|/(\sqrt3\,m_{3/2})\to0$ at retained leading order, and $|A_{\alpha\beta\gamma}|/m_{3/2}\le(1+o(1))|M|/m_{3/2}\to0$, since $A_{\alpha\beta\gamma}=-M+o(|M|)$. The suppression is therefore a conditional asymptotic consequence of the stipulated hierarchy, not a deduction from [A1] or [F3] and not an empirical spectrum claim. [given, A2, step 2.1, step 3.1, step 3.2] ∎

## Unresolved supplier

The current batch-89 radial theorem carrier matches the planned exact-function interface after renaming its positive coefficients, and its complete proof establishes only the unique radial stationary point, negative value, and positive coordinate Hessian. Its current Step 1 readiness record is missing, and it does not establish the small-cycle auxiliary hierarchy or the no-scale cancellation used in [A2]. Those remain explicit model inputs; this example remains escalated until the missing current supplier readiness record is authored.
