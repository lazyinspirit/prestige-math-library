---
id: lem-gr-fx-bondi-mass-coefficient
kind: lemma
title: "Bondi mass-aspect constraint coefficient"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
physical_scope: "Conditional coefficient identity for a smooth Ricci-flat Bondi expansion; no global vacuum solution, radiation measurement, or physical validity claim is asserted."
deps:
  - def-gr-fx-bondi-expansion
  - def-gr-curvature-tensor-and-derived-tensors
  - thm-gr-curvature-tensoriality-and-coordinate-formula
  - def-countable-choice
dependency_roles:
  def-gr-fx-bondi-expansion: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
  def-countable-choice: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Thomas Mädler and Jeffrey Winicour, Bondi-Sachs Formalism, arXiv:1609.01731 (2016), full 31-page PDF: §3, Eqs. (28)-(58), especially the news convention (42), determinant identity (36), radial hierarchy (46)-(57), and mass-aspect equation (58)"
      url: "https://arxiv.org/pdf/1609.01731"
    - title: "Andrew Strominger, Lectures on the Infrared Structure of Gravity and Gauge Theory, Princeton University Press (2018), full lecture notes arXiv:1703.05448: §5.2.1, Eqs. (5.2.8)-(5.2.9)"
      url: "https://arxiv.org/pdf/1703.05448"
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Assume Countable Choice for the smooth Lorentzian bundle conventions of the suppliers. Let a vacuum Bondi expansion be as in [[def-gr-fx-bondi-expansion]], with $R_{ab}=0$ in the curvature convention of [[def-gr-curvature-tensor-and-derived-tensors]]. Then, for the mass aspect $m$, shear $C_{AB}$, news $N_{AB}=\partial_uC_{AB}$, unit sphere metric $q_{AB}$ and its Levi-Civita derivative $D_A$ specified there,

$$\partial_um=\frac14D_AD_BN^{AB}-\frac18N_{AB}N^{AB}.$$

The identity is the leading supplementary vacuum Einstein coefficient at future null infinity; it is not an exact finite-radius equation.

## Statement references

[[def-gr-fx-bondi-expansion]]

[[def-gr-curvature-tensor-and-derived-tensors]]

## Facts & Assumptions

**Given:** The smooth differentiated Bondi-Sachs metric expansion of [[def-gr-fx-bondi-expansion]], the curvature convention and Ricci contraction of [[def-gr-curvature-tensor-and-derived-tensors]], and the coordinate curvature formula of [[thm-gr-curvature-tensoriality-and-coordinate-formula]].

[F1] In Bondi coordinates $(u,r,x^A)$, the metric has the Bondi-Sachs form and the determinant gauge is $\det\gamma=\det q$. Its angular expansion is $\gamma_{AB}=q_{AB}+C_{AB}/r+P_{AB}/r^2+O(r^{-3})$, with $q^{AB}C_{AB}=0$ and $q^{AB}P_{AB}=\tfrac12C_{AB}C^{AB}$; $V=r-2m+O(r^{-1})$, $N_{AB}=\partial_uC_{AB}$, and all coefficient remainders have the differentiated uniform bounds stated in [[def-gr-fx-bondi-expansion]].

[F2] The curvature convention is $R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$, with $R(\partial_c,\partial_d)\partial_b=R^a{}_{bcd}\partial_a$ and $\operatorname{Ric}_{bd}=g^{ac}R_{abcd}$ ([[def-gr-curvature-tensor-and-derived-tensors]]).

[F3] In every Bondi coordinate chart, $R^a{}_{bcd}=\partial_c\Gamma^a{}_{db}-\partial_d\Gamma^a{}_{cb}+\Gamma^a{}_{ce}\Gamma^e{}_{db}-\Gamma^a{}_{de}\Gamma^e{}_{cb}$ ([[thm-gr-curvature-tensoriality-and-coordinate-formula]]).

[A1] Countable Choice $\mathrm{AC}_\omega$ is the only choice principle inherited for the smooth Lorentzian tangent-bundle convention; neither the coefficient calculation nor the sphere integration uses full Choice ([[def-countable-choice]]).

[A2] The formal vacuum hypothesis is $\operatorname{Ric}_{ab}=0$ through the displayed asymptotic orders on the Bondi end. This is a mathematical condition on the metric coefficients, not a deduction that a physical system is vacuum.


## Proof

**Given:** [F1]–[F3] and [A1]–[A2] of the current lemma. Write $E=e^{2\beta}$, $h_{AB}=r^2\gamma_{AB}$, $w^A=U^A_{(2)}$, $w_A=q_{AB}w^B$, $Q_A=\partial_A\log\sqrt{\det q}$, and a dot for $\partial_u$. All estimates below are uniform on the compact retarded-time and angular-chart sets specified in [F1].

1.1 Metric compatibility and zero torsion give $\Gamma^a{}_{bc}=\tfrac12g^{ad}(\partial_bg_{cd}+\partial_cg_{bd}-\partial_dg_{bc})$: lower the output index in metric compatibility and add the two cyclic equations minus the third. Multiplication of the Bondi metric by $g^{ur}=-E^{-1}$, $g^{rr}=E^{-1}V/r$, $g^{rA}=-E^{-1}U^A$, $g^{AB}=h^{AB}$ and $g^{uu}=g^{uA}=0$ gives the identity matrix. Its determinant is $-E^2r^4\det q$. Differentiating a determinant gives $\Gamma^a{}_{ab}=\partial_b\log\sqrt{|\det g|}$, so the traces are exactly $T_u:=\Gamma^a{}_{au}=2\dot\beta$, $T_r:=\Gamma^a{}_{ar}=2/r+2\beta_r$ and $T_A:=\Gamma^a{}_{aA}=Q_A+2\beta_A$. In particular $\operatorname{tr}(\gamma^{-1}\dot\gamma)=0$ exactly; no trace-free part of $P_{AB}$ has been removed. Contracting [F3] using [F2] gives $\operatorname{Ric}_{bc}=\partial_a\Gamma^a{}_{bc}-\partial_cT_b+\Gamma^a{}_{bc}T_a-\Gamma^a{}_{cd}\Gamma^d{}_{ba}$. [F1, F2, F3, A1, algebra]

2.1 The given differentiated expansions imply $E=1+O(r^{-2})$, $h_{AB}=r^2q_{AB}+rC_{AB}+O(1)$, $h^{AB}=r^{-2}q^{AB}-r^{-3}C^{AB}+O(r^{-4})$, $g_{uu}=-1+2m/r+O(r^{-2})$ and $g_{uA}=-w_A+O(r^{-1})$. These follow directly from $g_{uu}=-EV/r+h_{AB}U^AU^B$ and $g_{uA}=-h_{AB}U^B$. A radial derivative lowers each remainder's order by one, and time or angular derivatives through total order two preserve its order. Products and inverses have these same differentiated bounds, since their denominators tend uniformly to nonzero ones. Every differentiated expression below uses at most two derivatives of the metric coefficients. Thus these are the existing differentiated hypotheses, not a termwise differentiability assumption beyond them. [F1, step 1.1, algebra]

3.1 For the radial constraint put $H^B{}_A:=\Gamma^B{}_{rA}$ and $T^r{}_A:=\Gamma^r{}_{rA}$. The Christoffel formula of step 1.1 gives the exact identities $\Gamma^u{}_{rA}=0$, $\Gamma^u{}_{rr}=\Gamma^B{}_{rr}=0$, $\Gamma^r{}_{rr}=2\beta_r$, $H^B{}_A=\tfrac12h^{BC}\partial_rh_{AC}$, and $T^r{}_A=\beta_A+(2E)^{-1}h_{AB}\partial_rU^B$. Hence $H^B{}_A=\delta^B_A/r-C^B{}_A/(2r^2)+O(r^{-3})$ and $T^r{}_A=-w_A/r+O(r^{-2})$. Also $\Gamma^u{}_{AB}=(2E)^{-1}\partial_rh_{AB}=O(r)$ and $\Gamma^B{}_{ru}=\tfrac12h^{BC}(\partial_rg_{uC}+\partial_CE)=O(r^{-4})$. The angular symbols are exactly $\Gamma^C{}_{AB}=\Gamma[\gamma]^C{}_{AB}+(2E)^{-1}U^C\partial_rh_{AB}$. Their difference from the round connection is $S^C{}_{AB}:=\Gamma^C{}_{AB}-\Gamma[q]^C{}_{AB}=\{D_AC^C{}_B+D_BC^C{}_A-D^CC_{AB}\}/(2r)+w^Cq_{AB}/r+O(r^{-2})$, obtained by inserting $\gamma=q+C/r+O(r^{-2})$ in its connection formula. Since $q^{AB}C_{AB}=0$, its contracted leading coefficient is $S^C{}_{AC}=w_A/r+O(r^{-2})$. [F1, F2, F3, step 1.1, step 2.1, algebra]

3.2 For the supplementary coefficient, set $K^a{}_b:=\Gamma^a{}_{ub}$. Using the exact traces from step 1.1 and combining $\partial_AK^A{}_u+Q_AK^A{}_u=D_AK^A{}_u$, the Ricci formula is exactly $\operatorname{Ric}_{uu}=\partial_uK^u{}_u+\partial_rK^r{}_u+D_AK^A{}_u-2\ddot\beta+2\dot\beta K^u{}_u+(2/r+2\beta_r)K^r{}_u+2\beta_AK^A{}_u-K^a{}_bK^b{}_a$. The Christoffel formula gives $K^u{}_u=2\dot\beta+(2E)^{-1}\partial_rg_{uu}$ exactly. It also gives $K^r{}_u=-\dot m/r+O(r^{-2})$ and $K^A{}_u=-\dot w^A/r^2+O(r^{-3})$: the leading terms come respectively from $\tfrac12g^{ru}\partial_ug_{uu}$ and $h^{AB}\partial_ug_{uB}$, while all other terms have the indicated lower orders. Therefore $\partial_uK^u{}_u-2\ddot\beta=-\dot m/r^2+O(r^{-3})$, $\partial_rK^r{}_u=\dot m/r^2+O(r^{-3})$, $D_AK^A{}_u=-D_A\dot w^A/r^2+O(r^{-3})$ and $(2/r)K^r{}_u=-2\dot m/r^2+O(r^{-3})$. The remaining three terms involving a derivative of $\beta$ times a $K$ are $O(r^{-4})$. The remainder differentiations here are covered by step 2.1. [F1, F2, F3, step 1.1, step 2.1, algebra]

4.1 Expand the contracted Ricci formula of step 1.1 for $(b,c)=(r,A)$. The angular derivative and background-connection terms combine into $D_BH^B{}_A$. The derivative $-\partial_AT_r=-2\partial_A\beta_r$ is $O(r^{-3})$. In the final quadratic sum, the only non-background terms possibly of order $r^{-2}$ are $S^C{}_{AB}H^B{}_C$ and $H^C{}_AT^r{}_C$: their coefficients are respectively $w_A$ and $-w_A$, by step 3.1, so they cancel. The other potentially large product $\Gamma^u{}_{AB}\Gamma^B{}_{ru}$ is $O(r^{-3})$; products with $\Gamma^u{}_{rA},\Gamma^u{}_{rr},\Gamma^B{}_{rr}$ vanish, and products involving $\beta_r$ or $\beta_A$ are $O(r^{-3})$ or smaller. Consequently $\operatorname{Ric}_{rA}=\partial_rT^r{}_A+D_BH^B{}_A+(2/r)T^r{}_A+O(r^{-3})=r^{-2}(-w_A-\tfrac12D_BC^B{}_A)+O(r^{-3})$. The first, second and third terms contribute respectively $w_A$, $-\tfrac12D_BC^B{}_A$ and $-2w_A$. Vacuum [A2] therefore gives $w^A=-\tfrac12D_BC^{AB}$ without determining $U^A_{(3)}$ or any trace-free coefficient of $P_{AB}$. [F1, F2, F3, A2, step 1.1, step 3.1, algebra]

4.2 To exhibit every possible quadratic contribution, the same Christoffel formula gives $K^u{}_r=0$, $K^u{}_A=\beta_A+(2E)^{-1}\partial_rg_{uA}=O(r^{-2})$, $K^r{}_r=O(r^{-2})$, $K^r{}_A=O(r^{-1})$, $K^A{}_r=O(r^{-4})$, and $K^A{}_B=\tfrac12h^{AC}\partial_uh_{BC}+O(r^{-2})=N^A{}_B/(2r)+O(r^{-2})$; also $K^u{}_u=O(r^{-2})$, $K^r{}_u=O(r^{-1})$ and $K^A{}_u=O(r^{-2})$ by step 3.2. Thus in $K^a{}_bK^b{}_a$ the $uu$ and $rr$ diagonal products are $O(r^{-4})$, the $ur$ pair vanishes, the $uA$ pair is $O(r^{-4})$, the $rA$ pair is $O(r^{-5})$, and only the angular block contributes at order $r^{-2}$, giving $K^A{}_BK^B{}_A=N_{AB}N^{AB}/(4r^2)+O(r^{-3})$. This exhausts the contraction, rather than omitting uncomputed subleading terms. [F1, F2, F3, step 2.1, step 3.2, algebra]

5.1 Combining steps 3.2 and 4.2 proves $\operatorname{Ric}_{uu}=r^{-2}(-2\dot m-D_A\dot w^A-\tfrac14N_{AB}N^{AB})+O(r^{-3})$. The determinant identity in step 1.1 cancelled the entire time derivative of the angular determinant before expansion; in particular its $r^{-2}$ trace combination $\operatorname{tr}_qP-\tfrac12C_{AB}C^{AB}$ and its first two time derivatives vanish. All remaining occurrences of $P_{AB}$ in the angular $K$ block have order $r^{-2}$ and hence enter its square only at $r^{-3}$ or below. Similarly $U^A_{(3)}$ affects $K^A{}_u$ only at $r^{-3}$ and $K^r{}_u$ only at $r^{-2}$, while $V_{(1)}$ affects the latter only at $r^{-2}$; radial differentiation or multiplication by $2/r$ then lowers these to $r^{-3}$. No coefficient called $\beta_{(3)}$ need exist: the whole $\beta$ time-derivative cancellation is exact, and the remaining derivative products have already been bounded. Since $q$ and $D$ do not depend on $u$, step 4.1 gives $D_A\dot w^A=-\tfrac12D_AD_BN^{AB}$. Vacuum [A2] now makes the displayed $r^{-2}$ coefficient zero and yields $\partial_um=\tfrac14D_AD_BN^{AB}-\tfrac18N_{AB}N^{AB}$, with no additional choice use or asymptotic restriction. [A1, A2, step 1.1, step 4.1, step 3.2, step 4.2, algebra] ∎


## Remarks

Mädler–Winicour define their news as $N^{\mathrm{MW}}_{AB}=\tfrac12\partial_uC_{AB}$; replacing it by this item's $N_{AB}=\partial_uC_{AB}=2N^{\mathrm{MW}}_{AB}$ converts their Eq. (58) exactly to the displayed coefficients. The independent Strominger notes use a complex dyad and include a matter flux term; this item takes the vacuum branch and uses the real tensor contraction $N_{AB}N^{AB}$. The proof supplies the local radial and supplementary coefficient calculations directly. In the stated curvature convention the coefficient of $r^{-2}$ in $\operatorname{Ric}_{uu}$ is $-2\partial_um+\tfrac12D_AD_BN^{AB}-\tfrac14N_{AB}N^{AB}$; its vacuum zero equation is the displayed mass-aspect identity. Exact determinant-gauge traces remove the subleading angular trace before expansion, and the retained differentiated remainder bounds control the other omitted orders. No external source is substituted for that calculation.
