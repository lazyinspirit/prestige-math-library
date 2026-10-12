---
id: thm-gr-second-bianchi-and-divergence-free-einstein
kind: theorem
title: "The second Bianchi identity and the vanishing divergence of the Einstein tensor"
status: draft
origin: session
domain: mathematics
dependency_level: 11
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-curvature-tensor-and-derived-tensors, thm-gr-curvature-tensoriality-and-coordinate-formula, thm-gr-curvature-algebraic-symmetries, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, thm-gr-point-normal-and-exponential-coordinate-charts, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-tensor-fields-and-components, lem-gr-connection-conditions-in-chart-components, thm-clairaut-schwarz-mixed-partials]
dependency_roles:
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
  thm-gr-curvature-algebraic-symmetries: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  thm-gr-point-normal-and-exponential-coordinate-charts: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-tensor-fields-and-components: mathematical-premise
  lem-gr-connection-conditions-in-chart-components: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3: the Bianchi identity (3.87)-(3.88), the twice-contracted Bianchi identity (3.93)-(3.94) and the divergence-free Einstein tensor (3.95)-(3.96), printed pp. 80-82 (PDF pp. 87-89)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 4.4: the Bianchi identity R^a_{b[cd;e]}=0 (4.18)-(4.20), printed p. 45 (PDF p. 46); section 4.6: the contracted Bianchi identities (4.33)-(4.34), printed pp. 49-50 (PDF pp. 50-51)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 3.4: the Bianchi identity (3.40) and the contracted consequence including nabla_mu G^{mu nu} = 0 (3.41), printed pp. 131-132 (PDF pp. 138-139)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$
([[def-gr-smooth-lorentzian-objects]],
[[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]), and let
$R$, $R_{abcd}$, $\operatorname{Ric}_{ab}$, $S$ and $G_{ab}$ be as in
[[def-gr-curvature-tensor-and-derived-tensors]]. Write $;e$ for the induced
covariant derivative and raise indices with $g^{-1}$
([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] clause (c),
[[def-gr-inverse-metric-and-musical-isomorphisms]]).

**(a) Second Bianchi identity.** For all indices $a,b,c,d,e$,
$$R^a{}_{bcd;e}+R^a{}_{bde;c}+R^a{}_{bec;d}=0,\qquad\text{equivalently}\qquad R_{abcd;e}+R_{abde;c}+R_{abec;d}=0 .$$
Equivalently, the antisymmetrization over the last three slots vanishes:
$R^a{}_{b[cd;e]}=0$.

**(b) Contracted identities.** $\nabla^a\operatorname{Ric}_{ab}
=\tfrac12\nabla_bS$, and consequently
$$\nabla^aG_{ab}=0\qquad\text{for every }b,$$
where $\nabla^aG_{ab}:=g^{ae}\nabla_eG_{ab}$. The conclusion is the vanishing
of the contracted divergence for each second index; it does not assert that
all components $\nabla_cG_{ab}$ vanish.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold with metric-selected connection, its curvature tensors as in the definition, a point $p$, and a point-normal chart at $p$.

[L1] $R^a{}_{bcd}$, $R_{abcd}$, $\operatorname{Ric}_{bd}$, $S$ and $G_{ab}$ are defined by the component, lowering, contraction and Einstein formulas of [[def-gr-curvature-tensor-and-derived-tensors]], and $\operatorname{Ric}_{ab}=\operatorname{Ric}_{ba}$ ([[thm-gr-curvature-algebraic-symmetries]] clause (d)).

[L2] In every chart, $R^a{}_{bcd}=\partial_c\Gamma^a{}_{db}-\partial_d\Gamma^a{}_{cb}+\Gamma^a{}_{ce}\Gamma^e{}_{db}-\Gamma^a{}_{de}\Gamma^e{}_{cb}$ ([[thm-gr-curvature-tensoriality-and-coordinate-formula]] clause (b)).

[L3] For a smooth tensor field the induced covariant derivative has, in a chart, the component formula $R^a{}_{bcd;e}=\partial_eR^a{}_{bcd}+\Gamma^a{}_{fe}R^f{}_{bcd}-\Gamma^f{}_{be}R^a{}_{fcd}-\Gamma^f{}_{ce}R^a{}_{bfd}-\Gamma^f{}_{de}R^a{}_{bcf}$; it commutes with contractions and satisfies $g_{ab;c}=0=g^{ab}{}_{;c}$ ([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] clause (c)).

[L4] For every $p$ there is a point-normal chart with $g_{ab}(p)=\eta_{ab}$, $\partial_ag_{bc}(p)=0$ and $\Gamma^a{}_{bc}(p)=0$ ([[thm-gr-point-normal-and-exponential-coordinate-charts]] clause (a), [[def-gr-metric-selected-connection]]).

[L5] Mixed partial derivatives commute ([[thm-clairaut-schwarz-mixed-partials]]), and $g^{ab}g_{bc}=\delta^a_c$ ([[def-gr-inverse-metric-and-musical-isomorphisms]]).

[L6] The components of a tensor field in a chart determine the field, so an identity between tensor components proved at every point in a point-normal chart holds everywhere ([[def-gr-tensor-fields-and-components]] clause (b), [[thm-gr-curvature-tensoriality-and-coordinate-formula]] clause (a)).

[L7] The Riemann tensor satisfies $R_{abcd}=-R_{abdc}$ and $R_{abcd}=R_{cdab}$ ([[thm-gr-curvature-algebraic-symmetries]] clauses (a)-(b)).

## Proof

**Proof technique:** direct.

1.1 (Reduction to a point-normal chart.) Fix $p$ and take the point-normal chart of [L4]. By [L3], $R^a{}_{bcd;e}(p)=\partial_eR^a{}_{bcd}(p)$, because every term of the derivative formula carrying a Christoffel symbol vanishes at $p$. By [L2], $R^a{}_{bcd}(p)=\partial_c\Gamma^a{}_{db}(p)-\partial_d\Gamma^a{}_{cb}(p)$, since the quadratic terms carry a factor $\Gamma(p)=0$. [L2, L3, L4, given]

2.1 (Differentiating the coordinate formula.) Differentiating the display of step 1.1 at $p$ gives $R^a{}_{bcd;e}(p)=\partial_e\partial_c\Gamma^a{}_{db}(p)-\partial_e\partial_d\Gamma^a{}_{cb}(p)$, and cyclically $R^a{}_{bde;c}(p)=\partial_c\partial_d\Gamma^a{}_{eb}(p)-\partial_c\partial_e\Gamma^a{}_{db}(p)$ and $R^a{}_{bec;d}(p)=\partial_d\partial_e\Gamma^a{}_{cb}(p)-\partial_d\partial_c\Gamma^a{}_{eb}(p)$. [step 1.1, algebra]

3.1 (Cyclic cancellation.) Adding the three displays of step 2.1, the six third-order derivatives cancel in pairs by [L5]: $\partial_e\partial_c\Gamma^a{}_{db}$ cancels $-\partial_c\partial_e\Gamma^a{}_{db}$, $-\partial_e\partial_d\Gamma^a{}_{cb}$ cancels $+\partial_d\partial_e\Gamma^a{}_{cb}$, and $+\partial_c\partial_d\Gamma^a{}_{eb}$ cancels $-\partial_d\partial_c\Gamma^a{}_{eb}$. Hence $R^a{}_{bcd;e}+R^a{}_{bde;c}+R^a{}_{bec;d}=0$ at $p$; by [L6] this tensor identity holds everywhere. Lowering the first index using [L3] ($g_{af;e}=0$) gives $R_{abcd;e}+R_{abde;c}+R_{abec;d}=0$, and the antisymmetrized form is the same display rewritten. This proves (a). [step 2.1, L3, L5, L6, algebra]

4.1 (First contraction.) Contract the identity of step 3.1 with $g^{ac}$, using [L3] to move the metric inside the derivatives: $g^{ac}R_{abcd;e}=\nabla_e(g^{ac}R_{abcd})=\nabla_e\operatorname{Ric}_{bd}$; $g^{ac}R_{abde;c}=\nabla^aR_{abde}$; and $g^{ac}R_{abec;d}=\nabla_d(g^{ac}R_{abec})$. For the last, $R_{abec}=-R_{abce}$ by [L7], so $g^{ac}R_{abec}=-g^{ac}R_{abce}=-\operatorname{Ric}_{be}$ by [L1] and the Einstein summation convention. Hence $\nabla_e\operatorname{Ric}_{bd}+\nabla^aR_{abde}-\nabla_d\operatorname{Ric}_{be}=0$. [step 3.1, L1, L3, L7, L5, algebra]

5.1 (Second contraction and the Einstein divergence.) Contract the display of step 4.1 with $g^{bd}$, again moving the metric inside derivatives with [L3]. The first term gives $\nabla_e(g^{bd}\operatorname{Ric}_{bd})=\nabla_eS$. For the second, renaming the summed pair $(b,d)$ as $(d,b)$ and using the skew-symmetry $R_{adbe}=-R_{dabe}$ of [L7], $g^{bd}R_{abde}=g^{db}R_{adbe}=-g^{bd}R_{dabe}=-\operatorname{Ric}_{ae}$, because the defining contraction of [L1] reads $\operatorname{Ric}_{ae}=g^{bd}R_{dabe}$ with its dummy pair renamed. Hence $\nabla^a(g^{bd}R_{abde})=-\nabla^a\operatorname{Ric}_{ae}$. The third term gives $-g^{bd}\nabla_d\operatorname{Ric}_{be}=-\nabla^b\operatorname{Ric}_{be}=-\nabla^a\operatorname{Ric}_{ae}$ after renaming. Collecting, $\nabla_eS-2\nabla^a\operatorname{Ric}_{ae}=0$, that is $\nabla^a\operatorname{Ric}_{ab}=\tfrac12\nabla_bS$ after renaming $e\to b$. [step 4.1, L1, L3, L5, L7, algebra]

6.1 (Vanishing divergence.) By [L1], $G_{ae}=\operatorname{Ric}_{ae}-\tfrac12Sg_{ae}$, so by [L3] and step 5.1, $\nabla^aG_{ae}=\nabla^a\operatorname{Ric}_{ae}-\tfrac12g^{ab}\nabla_bS=\tfrac12\nabla_eS-\tfrac12\nabla_eS=0$. Since $e$ is arbitrary this is $\nabla^aG_{ab}=0$ for every $b$, and the proof is complete. [step 5.1, L1, L3, algebra] ∎

## Remarks

- **The point-normal chart is the only place torsion freedom enters.** Steps 1.1-2.1 evaluate the derivative of curvature in a chart with $\Gamma(p)=0$; the existence of such a chart is part of the point-normal construction for the torsion-free metric-selected connection. The cyclic cancellation itself is then only the commutativity of mixed partials. The displayed identities are tensor identities and therefore independent of the chart in which they were derived.

- **What is not claimed.** The identity $\nabla^aG_{ab}=0$ is a purely geometric consequence of the definitions; it is not an equation of motion, it asserts nothing about any matter field, and it does not say that $\nabla_cG_{ab}=0$ in all slots. Its use in the framework's field-law discussion is recorded on the Einstein-and-matter page, where the field equation is separately adopted as a postulate.
