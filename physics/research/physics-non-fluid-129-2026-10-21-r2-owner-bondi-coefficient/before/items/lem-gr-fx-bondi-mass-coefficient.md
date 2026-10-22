---
id: lem-gr-fx-bondi-mass-coefficient
kind: lemma
title: "Bondi mass-aspect constraint coefficient"
status: draft
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
  precheck: pending
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

[L1] **Unresolved local calculation:** after solving the Bondi radial hierarchy to the required order, the coefficient of $r^{-2}$ in $\operatorname{Ric}_{uu}$ is
$$2\partial_um-\frac12D_AD_BN^{AB}+\frac14N_{AB}N^{AB}.$$
The two full-text treatments listed in Sources state this coefficient in equivalent conventions but summarize, rather than display, the complete subleading cancellation. No local derivation of [L1] is currently supplied, so it is recorded as an unresolved argument, not as an established fact.

## Proof

**Given:** [F1]–[F3] and [A1]–[A2]. Write a dot for $\partial_u$ and $C^2:=C_{AB}C^{AB}$.

1.1 Expanding $\det\gamma=\det q$ through order $r^{-2}$ gives $q^{AB}C_{AB}=0$ and $q^{AB}P_{AB}=\tfrac12C^2$. Differentiating the latter coefficient identity in $u$ yields $q^{AB}\dot P_{AB}-C^{AB}N_{AB}=0$. The inverse angular metric is $\gamma^{AB}=q^{AB}-C^{AB}/r+(C^A{}_EC^{EB}-P^{AB})/r^2+O(r^{-3})$. These expansions retain the subleading trace fixed by determinant gauge. [F1, A1, algebra]

1.2 Inverting the Bondi-Sachs block metric gives $g^{ur}=-e^{-2\beta}$, $g^{rr}=e^{-2\beta}V/r$, $g^{rA}=-e^{-2\beta}U^A$, and $g^{AB}=r^{-2}\gamma^{AB}$, with $g^{uu}=g^{uA}=0$. Multiplication by the metric components in [F1] verifies each identity. [F1, algebra]

1.3 Substitution of this Bondi metric into the Christoffel and Ricci formulas [F2]–[F3] gives the exact radial component
$$\operatorname{Ric}_{rr}=\frac4r\partial_r\beta-\frac14\gamma^{AC}\gamma^{BD}(\partial_r\gamma_{AB})(\partial_r\gamma_{CD}).$$
Thus [A2] implies $\partial_r\beta=\tfrac r{16}\gamma^{AC}\gamma^{BD}(\partial_r\gamma_{AB})(\partial_r\gamma_{CD})$. From [F1], $\partial_r\gamma_{AB}=-C_{AB}/r^2+O(r^{-3})$ and $\gamma^{AB}=q^{AB}+O(r^{-1})$, so the right side is $C^2/(16r^3)+O(r^{-4})$. Integrating in $r$ with $\beta\to0$ gives $\beta=-C^2/(32r^2)+O(r^{-3})$. [F1, F2, F3, A2, algebra]

2.1 The vacuum $rA$ hypersurface equation obtained from [F2]–[F3] is
$$\partial_r(r^4e^{-2\beta}\gamma_{AB}\partial_rU^B)=2r^4\partial_r(r^{-2}\mathcal D_A\beta)-r^2\gamma^{EF}\mathcal D_E(\partial_r\gamma_{AF}),$$
where $\mathcal D$ is the Levi-Civita derivative of $\gamma$ on a fixed $r,u$ sphere. If $U^A=U^A_{(2)}r^{-2}+O(r^{-3})$, the left side is $-2q_{AB}U^B_{(2)}+O(r^{-1})$. By [F1] and step 1.3, the right side is $D^BC_{AB}+O(r^{-1})$: the $\beta$ term is $O(r^{-1})$, while $\partial_r\gamma_{AF}=-C_{AF}r^{-2}+O(r^{-3})$. Equality of the constant coefficients yields $U^A_{(2)}=-\tfrac12D_BC^{AB}$. This leading solve does not determine the $r^{-3}$ coefficient. [F1, F2, F3, A2, step 1.3, algebra]

3.1 The vacuum radial $V$ equation from [F2]–[F3] is
$$2e^{-2\beta}\partial_rV=\mathcal R[\gamma]-2\gamma^{AB}(\mathcal D_A\mathcal D_B\beta+\mathcal D_A\beta\,\mathcal D_B\beta)+e^{-2\beta}r^{-2}\mathcal D_A\!\left[\partial_r(r^4U^A)\right]-\frac12r^4e^{-4\beta}\gamma_{AB}(\partial_rU^A)(\partial_rU^B),$$
where $\mathcal R[\gamma]$ is the scalar curvature of the cut metric $\gamma_{AB}$. The first variation of scalar curvature at the unit sphere, applied to the trace-free $C_{AB}/r$, gives $\mathcal R[\gamma]=2+r^{-1}D_AD_BC^{AB}+O(r^{-2})$. From step 2.1, $r^{-2}D_A\partial_r(r^4U^A)=2r^{-1}D_AU^A_{(2)}+O(r^{-2})=-r^{-1}D_AD_BC^{AB}+O(r^{-2})$. The $r^{-1}$ terms cancel; the other displayed terms are $O(r^{-2})$, so $\partial_rV=1+O(r^{-2})$. Integration and $V/r\to1$ give $V=r+V_{(0)}+O(r^{-1})$, where the definition in [F1] identifies $V_{(0)}=-2m$. [F1, F2, F3, A2, step 2.1, algebra]

4.1 The planned final calculation must expand every $r^{-2}$ contribution to $\operatorname{Ric}_{uu}$ after the radial solves, including the trace-free part of $P_{AB}$ and the coefficients $U^A_{(3)},V_{(1)},\beta_{(3)}$. The literature records that these terms reduce to [L1], but this draft does not supply the contraction and cancellation showing that reduction. In particular, [L1] is the exact unresolved step; the preceding leading radial solves do not prove it. [F1, F2, F3, A2, L1, step 1.1, step 1.3, step 2.1, step 3.1, algebra]

5.1 Conditional on the unresolved coefficient identity [L1], vacuum [A2] makes that coefficient zero. Rearranging and using $N_{AB}=\partial_uC_{AB}$ gives $\partial_um=\tfrac14D_AD_BN^{AB}-\tfrac18N_{AB}N^{AB}$. This establishes the target only once [L1] has a complete local proof; until then this is an explicit conditional reduction. [A2, L1, algebra] ∎

## Remarks

Mädler–Winicour define their news as $N^{\mathrm{MW}}_{AB}=\tfrac12\partial_uC_{AB}$; replacing it by this item's $N_{AB}=\partial_uC_{AB}=2N^{\mathrm{MW}}_{AB}$ converts their Eq. (58) exactly to the displayed coefficients. The independent Strominger notes use a complex dyad and include a matter flux term; this item takes the vacuum branch and uses the real tensor contraction $N_{AB}N^{AB}$. The mathematical statement is source-confirmed, but its planned local coefficient expansion remains incomplete at [L1], so Step 1 readiness is escalated.
