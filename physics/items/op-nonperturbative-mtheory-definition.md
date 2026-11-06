---
id: op-nonperturbative-mtheory-definition
kind: open-problem
title: Nonperturbative Mtheory Definition
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 10
domain: physics
library: physics
deps:
- post-m-theory-type-iia-circle-limit-dictionary
- def-m2-brane-worldvolume-action
- def-m5-brane-worldvolume-tensor-action
- pthm-m2-kappa-symmetry-on-cjs-background
dependency_roles:
  post-m-theory-type-iia-circle-limit-dictionary: physical-assumption
  def-m2-brane-worldvolume-action: formulation-prerequisite
  def-m5-brane-worldvolume-tensor-action: formulation-prerequisite
  pthm-m2-kappa-symmetry-on-cjs-background: physical-result
aliases: []
physical_scope: Foundational construction question for a complete nonperturbative eleven-dimensional quantum theory with the
  recorded CJS, type-IIA circle, membrane, five-brane, and charge-quantization interfaces; this item asserts no construction
  or experimental result.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
  - title: Edward Witten, String Theory Dynamics in Various Dimensions, arXiv:hep-th/9503124v2
    url: https://arxiv.org/pdf/hep-th/9503124v2
    locator: '§1 and §§2.2–2.3, PDF pp. 2–10: the type-IIA strong-coupling argument, its circle/Kaluza–Klein interpretation,
      and the candidate eleven-dimensional supergravity limit.'
  - title: Washington Taylor, The M(atrix) model of M-theory, arXiv:hep-th/0002016v2
    url: https://arxiv.org/pdf/hep-th/0002016v2
    locator: 'Introduction, PDF pp. 2–3; §3.2, PDF pp. 20–21; §§3.3–3.5, PDF pp. 21–28: the type-IIA circle picture, matrix
      proposal, and limits of the proposed DLCQ definition.'
  - title: 'Tom Banks, Willy Fischler, Stephen H. Shenker, and Leonard Susskind, M Theory As A Matrix Model: A Conjecture,
      arXiv:hep-th/9610043v3'
    url: https://arxiv.org/pdf/hep-th/9610043v3
    locator: '§1, §§3–5 and §§8–9: the proposed infinite-momentum-frame matrix equivalence, its evidence, brane sectors, and
      derivation caveats.'
  - title: 'Washington Taylor, M(atrix) Theory: Matrix Quantum Mechanics as a Fundamental Theory, arXiv:hep-th/0101126v2'
    url: https://arxiv.org/pdf/hep-th/0101126v2
    locator: 'Abstract and Introduction, PDF pp. 1–3; §I.B, PDF pp. 6–7: the dated status of the nonperturbative definition
      and the scope of the IIA/M-theory relation.'
  - title: 'Edward Witten, On Flux Quantization in M-Theory and the Effective Action, arXiv:hep-th/9609122v2'
    url: https://arxiv.org/pdf/hep-th/9609122v2
    locator: '§1, equation (1.2): on a spin eleven-manifold Y, [G_4/(2π)]−λ(Y)/2 is integral, where λ(Y)=p₁(TY)/2.'
  - title: 'Pasti, Sorokin, and Tonin, Covariant Action for a D=11 Five-Brane with the Chiral Field'
    url: https://arxiv.org/pdf/hep-th/9701037v3
    locator: '§2, Eqs. (1), (9)–(10), and §3, Eqs. (16)–(18): local source-normalized density and gauge-reduced nonlinear self-duality.'
  - title: 'Heng-Yu Chen, Nick Dorey, Sanefumi Moriyama, Rishi Mouland, and Canberk Şanlı, An M2/M5 Duality from the Giant Graviton Expansion, arXiv:2601.17114v1'
    url: https://arxiv.org/html/2601.17114v1
    locator: 'Abstract and §§1–1.1: the proposed relation between protected indices and its limited checks; the three-order Cardy check uses a conjectured M2 input.'
  - title: 'Aidan Herderschee and Juan Maldacena, Three Point Amplitudes in Matrix Theory, arXiv:2312.12592v4 (14 October 2026)'
    url: https://arxiv.org/html/2312.12592v4
    locator: 'Abstract, §1 and §4: one three-graviton amplitude with nonzero longitudinal momenta, an additional compact direction, and analytically continued transverse momentum.'
  - title: 'Andrés Collinucci, M-theory geometries from five-brane webs, seven-branes, and T-branes, arXiv:2607.05588v1'
    url: https://arxiv.org/html/2607.05588v1
    locator: 'Abstract, §1 and §§3.1–3.2: noncompact web geometries; the curve description follows a circle zero-mode truncation, and global gluing remains a separate issue.'
verification:
  precheck: n/a
  sources_checked:
    date: 2026-11-05
    scope: Recorded source, statement and proof-status review for this open-problem in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
---

## Open problem

Here “M-theory” names the sought complete eleven-dimensional quantum theory; its existence and construction are not assumed by this item. “Controlled nonperturbative theory” means a construction that specifies its admissible background class, quantum observables, global gauge and anomaly data, and completion, rather than only a low-energy effective action. The Cremmer–Julia–Scherk (CJS) target is the adopted source-free, classical, two-derivative bosonic action on an oriented Lorentzian eleven-manifold; brane currents, higher-derivative curvature corrections, and quantum corrections are outside that action’s stated scope. The adopted type-IIA circle interface takes $\alpha'>0$, $\ell_s=\sqrt{\alpha'}$, $g_s=e^{\Phi_\infty}>0$, $R_{11}=g_s\ell_s$, and $\ell_p^3=g_s\ell_s^3$. In the string-frame metric ansatz $ds_{11}^2=g_s^{2/3}e^{-2\Phi/3}ds_{10,s}^2+e^{4\Phi/3}(\ell_p\,d\theta+C_1)^2$, $\theta$ has period $2\pi$, $C_1$ is length-valued, and $R_{11}$ is the asymptotic proper circle radius; the unit D0/first-Kaluza–Klein mass match is conditional on the stated sector identification and is not a complete duality. The stated classical bosonic M2 interface takes a smooth embedding $X:\Sigma_3\to Y^{11}$ of a closed oriented three-manifold with nondegenerate Lorentzian induced metric $g$, and $S_{\mathrm{M2}}=-T_{\mathrm{M2}}\int_{\Sigma_3}d^3\xi\,\sqrt{-\det g}+T_{\mathrm{M2}}\int_{\Sigma_3}X^*C_3$. Here $Y^{11}$ is oriented Lorentzian CJS spacetime with metric $G$, $T_{\mathrm{M2}}>0$ is independent with units length$^{-3}$ in $\hbar=c=1$, and $\int C_3$ has units length$^3$. Its Green–Schwarz completion is on-shell $11|32$ CJS superspace with the $+C_3$ Wess–Zumino sign fixed by the adopted superspace constraints. The separate conditional local-$\kappa$ theorem uses a smooth superembedding of closed oriented $\Sigma_3$ with timelike body and nondegenerate metric, plus its exact torsion/four-form conventions; the cited local-kappa theorem fixes these conventions and uses coefficientwise smooth fields over a finite complex Grassmann algebra, with real embedded timelike body, one target potential superchart, and compactly supported odd local gauge parameters. It does not supply a global quantum membrane sector.

The single-brane M5 action interface is the single abelian Pasti–Sorokin–Tonin (PST) five-brane on a smooth oriented timelike embedding $\iota:\Sigma_6\to Y^{11}$ whose image lies in one smooth potential patch for $C_3,C_6$. In this paragraph use dimensionless worldvolume coordinates and the source-normalized dimensionless fields, with $g=\ell_p^{-2}\iota^*G$ of signature $(-+++++)$ and $P=\iota^*$. Let $A_2\in\Omega^2(\Sigma_6)$ be real and smooth and $a\in C^\infty(\Sigma_6,\mathbb R)$. Set $F_3=2dA_2$, $H_3=F_3-P[C_3]$ and $H^{*mnl}=\varepsilon^{mnlpqr}H_{pqr}/(3!\sqrt{-\det g})$, with $\varepsilon^{012345}=+1$ and indices raised using $g$. Restrict to $(\partial a)^2:=g^{mn}\partial_ma\,\partial_na>0$ and define $\widetilde H_{mn}=H^*_{mnl}\partial^la/\sqrt{(\partial a)^2}$. Pointwise, restrict $H_3$ to the connected component containing zero of the real three-forms for which $\det(g+i\widetilde H)<0$, with $g,a$ fixed, and use the positive real square root. The local kinetic density is $\sqrt{-\det(g+i\widetilde H)}+\sqrt{-\det g}\,\partial_ma H^{*mnl}H_{nlp}\partial^pa/[4(\partial a)^2]$, with Wess–Zumino term $\int(P[C_6]+(1/2)F_3\wedge P[C_3])$ and suppressed overall tension. A finite total functional requires absolute integrability of its densities; otherwise only compactly supported action differences are intended. The supplier reports nonlinear self-duality only after appropriate local PST gauge fixing, not as an independently proved consequence of the CJS action. This is one local abelian five-brane interface, without global patching or multiple-M5 dynamics.

Construct a controlled nonperturbative theory with eleven-dimensional supergravity as its low-energy limit, a full type-IIA circle limit, globally defined membrane/five-brane sectors and consistent charge quantization. CJS supergravity, the Bogomolny–Prasad–Sommerfield (BPS) mass and charge matches, the M/IIA dictionary and matrix proposals do not establish such a theory.

## Open problem references

[[post-m-theory-type-iia-circle-limit-dictionary]]

[[def-m2-brane-worldvolume-action]]

[[def-m5-brane-worldvolume-tensor-action]]

[Pasti, Sorokin, and Tonin, §§2–3, Eqs. (1), (9)–(10), (16)–(18)](https://arxiv.org/pdf/hep-th/9701037v3)

[[pthm-m2-kappa-symmetry-on-cjs-background]]

[Witten, §§1 and 2.2–2.3](https://arxiv.org/pdf/hep-th/9503124v2)

[Taylor, The M(atrix) model of M-theory, Introduction and §3.2](https://arxiv.org/pdf/hep-th/0002016v2)

[Banks, Fischler, Shenker, and Susskind, §§1, 3–5, 8–9](https://arxiv.org/pdf/hep-th/9610043v3)

[Taylor, M(atrix) Theory: Matrix Quantum Mechanics as a Fundamental Theory](https://arxiv.org/pdf/hep-th/0101126v2)

[Witten, §1, equation (1.2)](https://arxiv.org/pdf/hep-th/9609122v2)

## Status

The source-status check dated 2026-11-05, restricted to the listed versions available by 2026-10-30, keeps this as an unresolved foundational problem in that record. Witten argues that strong coupling of type IIA produces an eleven-dimensional low-energy supergravity sector and motivates a circle interpretation; the paper does not construct a complete quantum theory. Banks, Fischler, Shenker, and Susskind explicitly propose the matrix equivalence as a conjecture and identify assumptions and limits that remain. Taylor’s 2001 review says that identifying M-theory with the strong-coupling limit of type IIA is incomplete without a nonperturbative definition of type IIA; it also reports that the evidence was circumstantial and that no complete background-independent formulation had been given at that review date.

The bounded 2026 source record adds [Chen et al.’s M2/M5 index conjecture (Abstract and §1.1)](https://arxiv.org/html/2601.17114v1), [Herderschee–Maldacena’s compactified matrix three-graviton amplitude (Abstract, §§1 and 4; version 4 dated 2026-10-14)](https://arxiv.org/html/2312.12592v4), and [Collinucci’s local noncompact web geometries (Abstract, §§1 and 3.1–3.2)](https://arxiv.org/html/2607.05588v1); none supplies the complete construction asked for here. This is a targeted comparison of these source versions, not an exhaustive proof that no construction exists.

Witten’s shifted-flux condition is a source-reported global anomaly/quantization input, not a consequence of the local CJS equations. On a spin eleven-manifold $Y$, supply the integral spin class $\lambda(Y)\in H^4(Y;\mathbb Z)$ with $2\lambda(Y)=p_1(TY)$ and a smooth closed real four-form $\mathcal G_4$ in unit-membrane-coupling normalization. On each potential patch its relation to the dimensionful membrane potential above is $\mathcal G_4=T_{\mathrm{M2}}dC_3$, with constant $T_{\mathrm{M2}}$; no global potential is assumed. Its periods are dimensionless. Let $\rho_Y:H^4(Y;\mathbb Z)\to H^4_{\mathrm{dR}}(Y;\mathbb R)$ be coefficient extension followed by the de Rham comparison. The curvature-level condition is $[\mathcal G_4/(2\pi)]_{\mathrm{dR}}-\rho_Y(\lambda(Y))/2\in\operatorname{im}\rho_Y$. This condition alone does not specify a differential-cohomology refinement or flat torsion data required for a global field configuration.

## Remarks

The BFSS, matrix-amplitude, M2/M5-index, and local brane-web items on the companion page are partial proposals or source reports. They are not logical suppliers for this open problem.
