---
id: def-m5-brane-worldvolume-tensor-action
kind: definition
title: Single M5 worldvolume tensor action
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 7
domain: physics
library: physics
deps:
  - post-eleven-dimensional-cjs-supergravity-action
  - lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes
dependency_roles:
  post-eleven-dimensional-cjs-supergravity-action: formulation-prerequisite
  lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes: mathematical-premise
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Source-normalized local bosonic PST functional for one smooth oriented six-dimensional timelike worldvolume and one abelian chiral two-form; overall physical tension, global patching, and multiple-M5 dynamics are not supplied."
sources:
  references:
    - title: "Paolo Pasti, Dmitri Sorokin, and Mario Tonin, Covariant Action for a D=11 Five-Brane with the Chiral Field, arXiv:hep-th/9701037v3"
      url: "https://arxiv.org/pdf/hep-th/9701037v3"
      locator: "§§2–3, Eqs. (1)–(10) and (16)–(18), PDF pp. 2–6; Eq. (1) and the explicit replacement instruction preceding Eq. (17) fix the local scalar functional; the printed repeated-index defect in Eq. (17) is identified below."
    - title: "Paolo Pasti, Dmitri Sorokin, and Mario Tonin, On Lorentz Invariant Actions for Chiral P-Forms, arXiv:hep-th/9611100v1"
      url: "https://arxiv.org/pdf/hep-th/9611100v1"
      locator: "§II.2, Eqs. (3)–(12), PDF pp. 4–5; auxiliary-scalar gauge and the free chiral two-form equation."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
proof_strategy: direct
---

## Definition

Let $(M^{11},g_M)$ be the oriented Lorentzian CJS background of [[post-eleven-dimensional-cjs-supergravity-action]]. Let $\Sigma_6$ be a smooth oriented six-manifold and let $\iota:\Sigma_6\to M^{11}$ be a smooth embedding (an injective immersion that is a homeomorphism onto its image). In dimensionless worldvolume coordinates define the normalized induced metric by $g:=\ell_p^{-2}\iota^*g_M$, where $\ell_p>0$ is the Planck length from the CJS postulate; require $g$, with components $g_{mn}$, to be nondegenerate Lorentzian with signature $(-+++++)$. For this local formula, restrict to embeddings whose image lies in an open set $V\subset M^{11}$ carrying smooth potentials $C^{(3)}\in\Omega^3(V)$ and $C^{(6)}\in\Omega^6(V)$; $C^{(3)}:=\ell_p^{-3}C_{3,\mathrm{CJS}}|_V$ is the dimensionless normalization of the local CJS three-form, and $C^{(6)}$ is a supplied dimensionless local dual potential in the source convention. This rescaling is part of the adopted local field normalization; the CJS action does not itself supply $C^{(6)}$. Write $P=\iota^*$ for pullback to $\Sigma_6$. No transition data between potential patches or global Wess–Zumino functional is specified.

Use dimensionless worldvolume coordinates $\xi^m$, $m=0,\ldots,5$, and adopt the source-normalized dimensionless field convention for the displayed local functional, with $\hbar=c=1$. In this convention $g_{mn}$, $A_{mn}$, $H_{mnl}$, $a$, and $\widetilde H_{mn}$ are dimensionless; this normalization is an adopted convention and does not follow from setting $\hbar=1$ alone. The overall physical tension is suppressed and fixed separately. Then $g=\det(g_{mn})<0$. Let $A_2\in\Omega^2(\Sigma_6)$ be one real antisymmetric worldvolume two-form, written $A_2=\frac12A_{mn}d\xi^m\wedge d\xi^n$, and let $a\in C^\infty(\Sigma_6,\mathbb R)$ be an auxiliary scalar. With the source's component convention set
$$F_{mnl}=2(\partial_lA_{mn}+\partial_mA_{nl}+\partial_nA_{lm}),\qquad F_3=\frac1{3!}F_{mnl}\,d\xi^m\wedge d\xi^n\wedge d\xi^l=2dA_2,\qquad H_{mnl}=F_{mnl}-P[C^{(3)}]_{mnl},\qquad H^{*mnl}=\frac{\varepsilon^{mnlpqr}}{3!\sqrt{-g}}H_{pqr},$$
where $\varepsilon^{012345}=+1$ is the oriented alternating symbol and indices are raised with $g$. Restrict to the non-null auxiliary-scalar branch $(\partial a)^2:=g^{mn}\partial_ma\,\partial_na>0$, and set
$$\widetilde H_{mn}=\frac{H^*_{mnl}\partial^la}{\sqrt{(\partial a)^2}}.$$
For fixed $g$ and $a$ with spacelike $da$, at each $\xi\in\Sigma_6$ let $\mathcal D_\xi$ be the connected component, in the usual finite-dimensional real vector-space topology, containing $0\in\Lambda^3T_\xi^*\Sigma_6$ of the set of $h\in\Lambda^3T_\xi^*\Sigma_6$ for which
$$\det\!\left(g_{mn}(\xi)+i\frac{(*_g h)_{mnl}\partial^la(\xi)}{\sqrt{(\partial a)^2(\xi)}}\right)<0,$$
where $(*_g h)^{mnl}:=\varepsilon^{mnlpqr}h_{pqr}/(3!\sqrt{-g})$. Restrict the smooth field configurations to those with $H_3(\xi)\in\mathcal D_\xi$ for every $\xi$, and take the pointwise positive real square root $\sqrt{-\det(g+i\widetilde H)}$. On this domain define the source-normalized functional
$$S_{\mathrm{PST}}= \int_{\Sigma_6}d^6\xi\left[ \sqrt{-\det(g_{mn}+i\widetilde H_{mn})} + \frac{\sqrt{-g}}{4(\partial a)^2}\, \partial_m a\,H^{*mnl}H_{nlp}\,\partial^pa \right] +\int_{\Sigma_6}\left(P[C^{(6)}]+\frac12F_3\wedge P[C^{(3)}]\right).$$
The display first specifies a local six-form density $\mathcal L$. If $\Sigma_6$ is compact, set $S=\int_{\Sigma_6}\mathcal L$. On a noncompact worldvolume use the local action in the following precise sense: for two admissible configurations $q,q_0$ agreeing outside a compact subset of the interior, define $S[q]-S[q_0]:=\int_{\Sigma_6}(\mathcal L[q]-\mathcal L[q_0])$. The difference density is smooth and compactly supported, so this integral is finite. This notation defines the difference directly and does not subtract divergent numbers; no finite total action on a noncompact worldvolume is asserted.

This defines the single-abelian bosonic PST source convention on the stated potential patch; it does not define global patching or multiple-M5 dynamics.

## Statement References

[Pasti–Sorokin–Tonin, §2, Eq. (17)](https://arxiv.org/pdf/hep-th/9701037v3)

## Facts & Assumptions

**Given:** The stated smooth embedding and its induced Lorentzian metric, the source-normalized local fields and potential patch, and the non-null positive branch for $da$.

[F1] The current CJS postulate fixes the physical eleven-dimensional $C_{3,\mathrm{CJS}}$ normalization and mostly-plus spacetime convention; the Definition states its dimensionless rescaling ([[post-eleven-dimensional-cjs-supergravity-action]]).

[F2] Finite chart localization defines the integral of smooth compactly supported top forms, independently of the charts, and gives $\int d\eta=0$ for compactly supported $(n-1)$-forms on a boundaryless oriented manifold; apply this to the interior when the support avoids the boundary ([[lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]]).

[A1] The differential form $C^{(6)}$ is used locally as the source's dual potential; the CJS carrier does not provide a global independent $C_6$ field.

[A2] PST transformations and the reported nonlinear self-duality equation below are source-reported local model data; they are not supplied by the source-free CJS action.

## Proof

**Given:** The definitions of $F_3$ and $H_3$, a smooth local gauge parameter $\chi\in\Omega^2(V)$, and the source-reported transformations $\delta C^{(3)}=2d\chi$, $\delta C^{(6)}=-d\chi\wedge C^{(3)}$, and $\delta A_2=P[\chi]$.

1.1 In components, $F_{mnl}$ is twice the cyclic component formula for $dA_2$, so $F_3=2dA_2$. Therefore $dF_3=2d^2A_2=0$. [given, algebra]

2.1 Pullback commutes with $d$, so the adopted transformations give $\delta F_3=2d(P[\chi])=P[\delta C^{(3)}]$, hence $\delta H_3=0$. Both kinetic densities depend on the background potentials through $H_3$ and are therefore unchanged. Suppressing pullback symbols only in the following worldvolume identity, the Wess–Zumino integrand varies by
$$\delta\!\left(C^{(6)}+\frac12F_3\wedge C^{(3)}\right) =-d\chi\wedge C^{(3)}+d\chi\wedge C^{(3)}+F_3\wedge d\chi =2d(A_2\wedge d\chi).$$
For a finite total action on a compact boundaryless worldvolume, Stokes gives zero variation. On a noncompact worldvolume the same conclusion holds for action differences when $P[\chi]$ has compact support in the interior: the displayed primitive then has compact support. For a worldvolume with boundary use compact support in its interior as well. No unrestricted Stokes claim at infinity is made. [F1, F2, A1, A2, step 1.1, algebra] ∎

## Source-reported dynamics and the scalar functional

Pasti–Sorokin–Tonin define
$$\mathcal V^{mn}:=-2\sqrt{-\frac{(\partial a)^2}{g}}\, \frac{\delta\sqrt{-\det(g_{pq}+i\widetilde H_{pq})}}{\delta\widetilde H_{mn}}.$$
Their Eq. (9) reports the $A_2$ equation
$$\varepsilon^{lmnpqr}\partial_n\!\left( \frac{\partial_pa}{(\partial a)^2} (H_{qrs}\partial^sa-\mathcal V_{qr}) \right)=0,$$
and Eq. (10) reports that, after an appropriate gauge fixing of
$\delta A_{mn}=\tfrac12\partial_{[m}a\,\varphi_{n]}$, its general solution reduces to the nonlinear self-duality equation
$$H_{qrs}\partial^sa-\mathcal V_{qr}=0.$$
The source cites earlier PST work for the gauge-fixing step and does not give the complete nonlinear variation proof.

Eq. (17) of the pinned PDF prints the auxiliary term with $H_{mnp}$, so the index $m$ occurs three times in $\partial_m a\,H^{*mnl}H_{mnp}\partial^pa$. This is not a scalar under the Einstein summation convention. The paragraph immediately preceding Eq. (17) explicitly instructs replacement of the field strength in Eq. (1) by Eq. (16). Applying that instruction to its correctly contracted auxiliary density gives $\partial_m a\,H^{*mnl}H_{nlp}\partial^pa$, with each dummy index occurring exactly twice. The local functional above is defined by this explicit substitution into Eq. (1), followed by the displayed Wess–Zumino addition, rather than by treating the ill-typed printed component of Eq. (17) as a scalar. No erratum is asserted.

The Born–Infeld density and auxiliary density are added, as in both source equations; they are not multiplied. At $H_3=0$ the first density is $\sqrt{-g}$ and the second vanishes. For real $g$ and $\widetilde H$, transposition shows $\det(g+i\widetilde H)=\det(g-i\widetilde H)$, its complex conjugate, so this determinant is real. At zero field it is $g<0$; the stated negative-determinant component therefore supplies the real positive square-root branch. These checks establish a well-typed local definition in the source convention. The nonlinear field equation and PST gauge-reduction assertion above remain explicitly source-reported model data; this definition does not claim an independent proof of that variation or supply it as a mathematical theorem.
