---
id: thm-gr-curvature-algebraic-symmetries
kind: theorem
title: "The algebraic symmetries of the curvature tensor and the symmetry of the Ricci and Einstein tensors"
status: draft
origin: session
domain: mathematics
dependency_level: 10
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-curvature-tensor-and-derived-tensors, thm-gr-curvature-tensoriality-and-coordinate-formula, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, thm-gr-point-normal-and-exponential-coordinate-charts, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-tensor-fields-and-components, thm-clairaut-schwarz-mixed-partials]
dependency_roles:
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  thm-gr-point-normal-and-exponential-coordinate-charts: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-tensor-fields-and-components: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3: the symmetries (3.78)-(3.81), the totally antisymmetric part (3.83) and the antisymmetry in the first two indices, printed pp. 79-81 (PDF pp. 86-88)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 4.4: R^a_{b(cd)}=0 (4.16), the first Bianchi identity R^a_{[bcd]}=0 (4.17) and section 4.6: R_{abcd}=R_{cdab}, R_{(ab)cd}=0 (4.26), the Ricci symmetry (4.30), printed pp. 45-46 and 48-49 (PDF pp. 46-47 and 49-50)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 3.4: the four symmetries of the lowered Riemann tensor and the first Bianchi identity (3.40), printed pp. 130-131 (PDF pp. 137-138)"
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
[[def-gr-curvature-tensor-and-derived-tensors]]. Then the following
identities hold for all indices $a,b,c,d\in\{0,1,2,3\}$ and at every point of
every smooth chart:

**(a) Skew-symmetries.** $R_{abcd}=-R_{bacd}$ and $R_{abcd}=-R_{abdc}$.
Equivalently, for smooth vector fields,
$$g\bigl(R(X,Y)Z,W\bigr)=-g\bigl(R(X,Y)W,Z\bigr) \quad\text{and}\quad g\bigl(R(X,Y)Z,W\bigr)=-g\bigl(R(Y,X)Z,W\bigr).$$

**(b) Exchange of the index pairs.** $R_{abcd}=R_{cdab}$, equivalently
$g\bigl(R(X,Y)Z,W\bigr)=g\bigl(R(Z,W)X,Y\bigr)$.

**(c) First Bianchi identity.** $R_{a[bcd]}=0$, that is,
$$R_{abcd}+R_{acdb}+R_{adbc}=0 .$$

**(d) Ricci symmetry.** $\operatorname{Ric}_{ab}=\operatorname{Ric}_{ba}$;
consequently the Einstein tensor is symmetric, $G_{ab}=G_{ba}$.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$ with metric-selected connection, its Riemann and Ricci tensors, and a point $p$.

[L1] The components, the lowered tensor, the Ricci tensor, the scalar curvature and the Einstein tensor are defined by $R(\partial_c,\partial_d)\partial_b=\sum_aR^a{}_{bcd}\partial_a$, $R_{abcd}=g_{ae}R^e{}_{bcd}$, $\operatorname{Ric}_{bd}=g^{ac}R_{abcd}$, $S=g^{bd}\operatorname{Ric}_{bd}$ and $G_{ab}=\operatorname{Ric}_{ab}-\tfrac12Sg_{ab}$ ([[def-gr-curvature-tensor-and-derived-tensors]]).

[L2] $R$ is a smooth $(1,3)$-tensor, so its components in any chart and the tensors built from them by contraction with $g$ and $g^{-1}$ are components of tensor fields; the components in a chart are related to those in any other chart by the tensor transformation law ([[thm-gr-curvature-tensoriality-and-coordinate-formula]] clause (a), [[def-gr-tensor-fields-and-components]] clauses (b)-(c)).

[L3] For every $p$ there is a point-normal chart with $g_{ab}(p)=\eta_{ab}$, $\partial_ag_{bc}(p)=0$, $\Gamma^a{}_{bc}(p)=0$, and in it the lowered components at $p$ are given by the four-term formula $R_{abcd}(p)=\tfrac12(g_{ad,bc}+g_{bc,ad}-g_{bd,ac}-g_{ac,bd})(p)$, with $g_{ad,bc}=\partial_b\partial_cg_{ad}$ ([[thm-gr-point-normal-and-exponential-coordinate-charts]] clause (a), [[thm-gr-curvature-tensoriality-and-coordinate-formula]] clause (c)).

[L4] Mixed partial derivatives commute and the metric components are symmetric: $g_{ad,bc}=g_{ad,cb}$ and $g_{ab}=g_{ba}$ ([[thm-clairaut-schwarz-mixed-partials]], [[def-gr-smooth-lorentzian-objects]] clause (a)).

[L5] $g^{ab}$ is the inverse matrix of $g_{ab}$, so $g^{ac}g_{cb}=\delta^a_b$, and relabelling a summed index pair does not change a sum ([[def-gr-inverse-metric-and-musical-isomorphisms]], [[def-gr-smooth-lorentzian-objects]] clause (d)).

## Proof

**Proof technique:** direct.

1.1 (Point-normal reduction.) Fix $p$ and choose a point-normal chart at $p$ as in [L3]. By [L3], $R_{abcd}(p)=\tfrac12(g_{ad,bc}+g_{bc,ad}-g_{bd,ac}-g_{ac,bd})(p)$. By [L2] both sides are components, in this chart, of smooth tensor fields, and the displayed identity is therefore an identity between tensor components at $p$; since the same construction applies at every point of $M$, every identity derived below from this display holds at every point in every chart. [L3, L2, given]

2.1 (Skew-symmetries.) Interchanging $a$ and $b$ in the display of step 1.1 negates it, because each of its four terms is a second partial derivative with one of $a,b$ in a fixed slot: $R_{bacd}(p)=\tfrac12(g_{bd,ac}+g_{ac,bd}-g_{ad,bc}-g_{bc,ad})(p)=-R_{abcd}(p)$. Interchanging $c$ and $d$ likewise negates it. This proves (a), the two operator forms following by expanding $g(R(X,Y)Z,W)=R_{abcd}W^aX^cY^dZ^b$ in the same components. [step 1.1, L1, L2, algebra]

2.2 (Pair exchange.) Substituting $(a,b,c,d)\mapsto(c,d,a,b)$ into the display of step 1.1 turns its four terms into $g_{cb,da}$, $g_{da,cb}$, $-g_{db,ca}$ and $-g_{ca,db}$; by the symmetry of $g$ and [L4] these are $g_{bc,ad}$, $g_{ad,bc}$, $-g_{bd,ac}$ and $-g_{ac,bd}$, that is, the four terms of the original display in permuted order. Hence $R_{cdab}(p)=R_{abcd}(p)$, which proves (b). [step 1.1, L1, L2, L4, algebra]

2.3 (First Bianchi identity.) By step 1.1, $2\bigl(R_{abcd}+R_{acdb}+R_{adbc}\bigr)(p)$ equals the sum of the twelve terms obtained by substituting the four-term formula into the three summands. The terms pair off with opposite signs: $g_{ad,bc}$ cancels $g_{ad,cb}$, $g_{bc,ad}$ cancels $g_{cb,ad}$, $-g_{bd,ac}$ cancels $+g_{bd,ac}$, $-g_{ac,bd}$ cancels $+g_{ac,bd}$, $g_{ab,cd}$ cancels $-g_{ab,cd}$, and $g_{cd,ab}$ cancels $-g_{cd,ab}$, each cancellation using [L4]. Hence $R_{abcd}+R_{acdb}+R_{adbc}=0$ at $p$, and since $p$ was arbitrary this proves (c). [step 1.1, L4, algebra]

2.4 (Ricci symmetry.) By [L1] and step 1.1, $\operatorname{Ric}_{bd}(p)=\tfrac12g^{ac}(p)\bigl(g_{ad,bc}+g_{bc,ad}-g_{bd,ac}-g_{ac,bd}\bigr)(p)$ and, writing out the same expression with $b$ and $d$ interchanged, $\operatorname{Ric}_{db}(p)=\tfrac12g^{ac}(p)\bigl(g_{ab,dc}+g_{dc,ab}-g_{db,ac}-g_{ac,db}\bigr)(p)$. Relabelling the summed pair $a,c$ as $c,a$ in the second expression and using $g^{ac}=g^{ca}$ [L5], its first term becomes $g^{ac}g_{cb,da}=g^{ac}g_{bc,ad}$ by [L4], which is the second term of $\operatorname{Ric}_{bd}$; its second term becomes $g^{ac}g_{da,cb}=g^{ac}g_{ad,bc}$, the first term of $\operatorname{Ric}_{bd}$; its third term is $g^{ac}g_{bd,ac}$, the third term of $\operatorname{Ric}_{bd}$; and its fourth term is $g^{ac}g_{ac,bd}$, the fourth term. Hence $\operatorname{Ric}_{db}(p)=\operatorname{Ric}_{bd}(p)$. [step 1.1, L1, L4, L5, algebra]

3.1 (Einstein symmetry and conclusion.) By [L1], $G_{ab}(p)=\operatorname{Ric}_{ab}(p)-\tfrac12S(p)g_{ab}(p)$ and $G_{ba}(p)=\operatorname{Ric}_{ba}(p)-\tfrac12S(p)g_{ba}(p)$; step 2.4 and the symmetry of $g$ [L4] give $G_{ab}(p)=G_{ba}(p)$. Since $p$ was arbitrary, (d) holds, and with steps 2.1, 2.2 and 2.3 this completes the proof. [step 2.1, step 2.2, step 2.3, step 2.4, L1, L4, algebra] ∎

## Remarks

- **What the identities say and do not say.** The four algebraic symmetries constrain the components of $R$ at a point and, in four dimensions, reduce its naively $4^4$ component functions to $20$ independent ones; the derivation above uses no counting of independent components and claims none. The identities are algebraic and hold pointwise; they are not differential equations, and they do not constrain how curvature varies from point to point. The differential identity satisfied by $\nabla R$ is a separate result ([[thm-gr-second-bianchi-and-divergence-free-einstein]]).

- **Independence of the identities.** The exchange symmetries (a) and (b) do not by themselves imply the Bianchi identity (c); a counterexample is given on the companion examples page. Every use of (c) below therefore cites it as an independent ingredient.
