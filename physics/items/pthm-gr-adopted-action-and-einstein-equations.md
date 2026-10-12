---
id: pthm-gr-adopted-action-and-einstein-equations
kind: physics-theorem
title: "Stationarity of the adopted total action is equivalent to the Einstein equation with the framework's coupling"
status: draft
origin: session
domain: physics
dependency_level: 13
physical_scope: "Smooth classical domain of the action formulation of the framework: an oriented time-oriented smooth Lorentzian four-manifold, a matter sector whose stress-energy tensor is represented by its action in the Hilbert convention (in particular the scalar-field sector) or prescribed and admissible, and compactly supported metric variations. Excludes quantum gravity, boundaries and junction terms, non-smooth or distributional sources, and constraint or propagation claims; no empirical statement and no existence claim for solutions. Every conclusion is a conditional consequence of the adopted action postulate and the mathematics of the framework."
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [post-gr-classical-gravitational-action, post-gr-einstein-field-law, post-gr-spacetime-and-classical-domain, post-gr-field-and-matter-assumptions, def-gr-scalar-field-matter-model, prop-gr-scalar-field-stress-energy-conservation, def-gr-hilbert-stress-energy-tensor, lem-gr-hilbert-tensor-uniqueness, thm-gr-compact-metric-and-timelike-curve-variation, lem-gr-compact-variation-coefficient-vanishing, def-gr-curvature-tensor-and-derived-tensors, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, lem-gr-metric-divergence-and-density-formula, def-gr-metric-volume-form-and-current-flux, def-gr-stress-energy-tensor-field, def-gr-smooth-covariant-two-tensor-field, def-gr-si-unit-and-coordinate-conventions, lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes, def-oriented-smooth-manifold-and-oriented-chart]
dependency_roles:
  post-gr-classical-gravitational-action: physical-assumption
  post-gr-einstein-field-law: formulation-prerequisite
  post-gr-spacetime-and-classical-domain: physical-assumption
  post-gr-field-and-matter-assumptions: physical-assumption
  def-gr-scalar-field-matter-model: formulation-prerequisite
  prop-gr-scalar-field-stress-energy-conservation: mathematical-premise
  def-gr-hilbert-stress-energy-tensor: formulation-prerequisite
  lem-gr-hilbert-tensor-uniqueness: mathematical-premise
  thm-gr-compact-metric-and-timelike-curve-variation: mathematical-premise
  lem-gr-compact-variation-coefficient-vanishing: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  lem-gr-metric-divergence-and-density-formula: mathematical-premise
  def-gr-metric-volume-form-and-current-flux: mathematical-premise
  def-gr-stress-energy-tensor-field: formulation-prerequisite
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes: mathematical-premise
  def-oriented-smooth-manifold-and-oriented-chart: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 4: variation of the total action (4.68)-(4.70) giving Einstein's equations with the energy-momentum tensor (4.70), printed pp. 117-118 (PDF pp. 124-125)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 9.2-9.3: the variation (9.23)-(9.25) of the Einstein-Hilbert action, the definition (9.28)-(9.29) of T^{ab} and the resulting equation (9.33)-(9.34), printed pp. 115-117 (PDF pp. 116-118)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 4.5.2: varying the combined action and reading off G_{mu nu}+Lambda g_{mu nu}=8 pi G T_{mu nu} from (4.46)-(4.47), printed pp. 182-183 (PDF pp. 189-190)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the action formulation of the framework, that is, the action density and
matter sectors of [[post-gr-classical-gravitational-action]], for a model whose
geometric data and matter sector satisfy
[[post-gr-spacetime-and-classical-domain]] and
[[post-gr-field-and-matter-assumptions]]; let $(M,g,N)$ be oriented with metric
volume form $\mathrm{vol}_g$ and metric-selected connection $\nabla$
([[def-oriented-smooth-manifold-and-oriented-chart]],
[[def-gr-metric-volume-form-and-current-flux]],
[[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]), and suppose the
model's matter sector supplies a stress-energy tensor field $T$ on $M$
([[def-gr-stress-energy-tensor-field]], [[def-gr-smooth-covariant-two-tensor-field]])
which is the Hilbert stress-energy tensor of the matter action at $(g,\varphi)$
with respect to $c$ ([[def-gr-hilbert-stress-energy-tensor]]); in particular
this holds in the scalar-field sector, where the model is
$(\varphi,V,K)$ of [[def-gr-scalar-field-matter-model]] and the claim is
supplied by [[prop-gr-scalar-field-stress-energy-conservation]] clause (b).

**(a) Equivalence.** With $\kappa:=8\pi G_N/c^4$ and
$G_{ab}=\operatorname{Ric}_{ab}-\tfrac12Sg_{ab}$ the Einstein tensor
([[def-gr-curvature-tensor-and-derived-tensors]]), the following are
equivalent:

1. the metric $g$ is stationary for the total action difference
   $\Delta S_{\mathrm{tot}}=\Delta S_{\mathrm{EH}}+\Delta S_m$ under every
   smooth family of smooth Lorentzian metrics $s\mapsto g_s$ with $g_0=g$ and
   compactly supported variation;
2. $G_{ab}+\Lambda g_{ab}=\kappa T_{ab}$ at every point of $M$.

**(b) The two presentations agree.** Consequently, in the action presentation
the classical field law of clause (iv) of
[[post-gr-classical-gravitational-action]] has the same equation form
$G_{ab}+\Lambda g_{ab}=\kappa T_{ab}$ as the field law adopted in the
direct-equation presentation [[post-gr-einstein-field-law]]; the two
presentations are equivalent descriptions of one classical field law, and a
model adopts exactly one of them. In the prescribed-$T$ sectors (dust and
perfect fluid) the equation is adopted directly, as recorded in clause (iii)
of [[post-gr-classical-gravitational-action]], and its consistency condition
is derived separately on this page.

## Facts & Assumptions

**Given:** The adopted action formulation of [[post-gr-classical-gravitational-action]] for a model with an oriented $(M,g,N)$, matter sector with Hilbert tensor $T$ at $(g,\varphi)$, and the constants of [[def-gr-si-unit-and-coordinate-conventions]].

[L1] For every chart-supported smooth family $s\mapsto g_s$ of smooth Lorentzian metrics at $g$ with compactly supported variation and every constant $\Lambda$, the compactly supported chart action difference $F(s)=\int_U[(S(s)-2\Lambda)w(s)-(S(0)-2\Lambda)w(0)]d^4x$ satisfies $$F'(0)=\int_U(G_{ab}+\Lambda g_{ab})q^{ab}w\,d^4x,$$ with $q^{ab}=\partial_sg_s^{ab}|_0$, and every smooth symmetric compactly supported $q$ arises from such a family ([[thm-gr-compact-metric-and-timelike-curve-variation]] clauses (a),(e)).

[L2] The matter action's metric variation is represented by $T$: $\frac{d}{ds}S_m(g_s,\varphi)|_0=-\frac{1}{2c}\int_MT_{ab}q^{ab}\mathrm{vol}_g$ ([[def-gr-hilbert-stress-energy-tensor]] clause (b)). In the scalar sector this is proved in [[prop-gr-scalar-field-stress-energy-conservation]] clause (b).

[L3] The action differences of clauses (ii)-(iii) of [[post-gr-classical-gravitational-action]] are integrals of compactly supported smooth top forms. Finite smooth cutoffs with compact chart supports and sum $1$ near any compact set exist, and they define the global integral by a finite sum independently of the cutoffs. For a chart-supported top form this global integral agrees with its chart integral; this applies both to the localized gravitational variations and to the Hilbert convention ([[lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]], [[def-gr-metric-volume-form-and-current-flux]]).

[L4] If a continuous symmetric covariant $2$-tensor field $F$ on a chart domain satisfies $\int_UF_{ab}q^{ab}w\,d^4x=0$ for every smooth symmetric compactly supported $q$, then $F=0$ ([[lem-gr-compact-variation-coefficient-vanishing]]).

[L5] $\Delta S_{\mathrm{tot}}$ is the sum of the action differences of [[post-gr-classical-gravitational-action]] clauses (ii)-(iii), and the constants satisfy $\frac{c^3}{16\pi G_N}\cdot\frac{8\pi G_N}{c^4}=\frac{1}{2c}$ ([[def-gr-si-unit-and-coordinate-conventions]]).

## Proof

**Proof technique:** direct; differentiate the total action difference along an arbitrary compactly supported metric variation and apply the coefficient-vanishing lemma.

1.1 (Einstein-Hilbert part for arbitrary compact support.) Let $g_s$ be an arbitrary family in the Statement, equal to $g$ off a compact set $K$, and put $h=\partial_sg_s|_0$, $q^{ab}=-g^{ac}g^{bd}h_{cd}$. By [L3] choose finitely many smooth cutoffs $\chi_i$ with compact chart supports and $\sum_i\chi_i=1$ near $K$. Put $h_i=\chi_i h$, so $h=\sum_i h_i$ and $q=\sum_i q_i$ with $q_i=\chi_i q$. The derivative at $g$ of the top form $(S-2\Lambda)\mathrm{vol}_g$ is linear in $h$ and its first and second derivatives: this follows directly from the inverse-metric, connection and Ricci variation formulas of [[thm-gr-compact-metric-and-timelike-curve-variation]] clauses (a)-(d), applied locally: near any point one may multiply $g_s-g$ by a compactly chart-supported cutoff equal to $1$ on a neighborhood of that point. For small parameter values the resulting metric remains Lorentzian by compactness and agrees with the original family on that neighborhood, so the same local variation jets and formulas apply. Thus this derivative for $h$ is the sum of its derivatives for the $h_i$, including all derivatives of the cutoffs; none is discarded. Each $h_i$ is realizable by a Lorentzian family after restricting its parameter interval about $0$, by [L1]. For each such chart-supported family [L1] gives the integrated derivative $\int_M(G_{ab}+\Lambda g_{ab})q_i^{ab}\mathrm{vol}_g$, where chart and global integrals agree by [L3]. Differentiation of the original global action difference is legitimate by the same finite localization: in each compact chart support its smooth coefficient and parameter derivative are uniformly continuous on a compact parameter interval times that support, so difference quotients converge uniformly to the derivative and hence their integrals converge. Finite linearity and $\sum_iq_i=q$ therefore give $$\frac{d}{ds}\Delta S_{\mathrm{EH}}\Big|_0=\frac{c^3}{16\pi G_N}\int_M(G_{ab}+\Lambda g_{ab})q^{ab}\mathrm{vol}_g .$$ No single chart containing $K$ and no partition on the whole noncompact manifold are required. [L1, L3, algebra]

1.2 (Matter part.) By [L2], $\frac{d}{ds}\Delta S_m|_{s=0}=-\frac{1}{2c}\int_MT_{ab}q^{ab}\mathrm{vol}_g$. [L2]

2.1 (Total variation.) Adding steps 1.1 and 1.2 and using $c^3/(16\pi G_N)=(1/(2c))\cdot c^4/(8\pi G_N)=(1/(2c))\kappa^{-1}$ by [L5], $$\frac{d}{ds}\Delta S_{\mathrm{tot}}\Big|_0=\frac{c^3}{16\pi G_N}\int_M\bigl(G_{ab}+\Lambda g_{ab}-\kappa T_{ab}\bigr)q^{ab}\mathrm{vol}_g .$$ [step 1.1, step 1.2, L5, algebra]

3.1 (Coefficient vanishes.) Suppose $g$ is stationary in the sense of clause (a)(1): the derivative in step 2.1 vanishes for every smooth family with compactly supported variation. Every smooth symmetric test field $q$ compactly supported in a chosen chart is realizable by [L1], so $\int_UF_{ab}q^{ab}w\,d^4x=0$ for the continuous symmetric field $F_{ab}:=G_{ab}+\Lambda g_{ab}-\kappa T_{ab}$ and every smooth symmetric compactly supported $q$; [L4] gives $F=0$ on every chart, that is, $G_{ab}+\Lambda g_{ab}=\kappa T_{ab}$. Conversely, if the equation holds, the integrand of step 2.1 vanishes identically for every family, so the derivative vanishes and $g$ is stationary. This proves the equivalence (a). [step 2.1, L1, L3, L4, algebra]

4.1 (Identification of the presentations.) Clause (b) is now immediate: clause (iv) of [[post-gr-classical-gravitational-action]] states the variational principle whose equation form is, by step 3.1, exactly $G_{ab}+\Lambda g_{ab}=\kappa T_{ab}$, the equation adopted in [[post-gr-einstein-field-law]] clause (i); the prescribed-$T$ sectors adopt that same equation directly by clause (iii) of the action postulate. Since each model adopts exactly one presentation, no model uses both as independent premises. [step 3.1, given] ∎

## Remarks

- **Conditional content.** The theorem is a deduction from the adopted action postulate and the mathematics of the variational calculus; it does not assert that nature realizes the action principle, that the matter sector is realized physically, or that any solution of the equation exists.

- **No empirical premises.** No experiment, measurement or empirical estimate enters this item, and no empirical qualification is inherited by its conclusions.

- **Boundary terms excluded.** The equivalence is stated for compactly supported metric variations; the Einstein-Hilbert action of a region with boundary would require additional boundary terms and is not covered here.
