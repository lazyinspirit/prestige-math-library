---
id: rem-f4-singular-wrapped-m2-physical-transfer-obligation
kind: remark
title: F4 Singular Wrapped M2 Physical Transfer Obligation
domain: physics
library: physics
category: string-theory
dependency_level: 11
deps:
  - def-f4-singular-wrapped-m2-sector-realization-data
  - def-m2-brane-worldvolume-action
  - def-f4-crepant-resolution-and-matter-surface
  - post-f4-m2-matter-curve-zero-mode-dictionary
  - post-f4-mtheory-g4-shifted-quantization
dependency_roles:
  def-f4-singular-wrapped-m2-sector-realization-data: formulation-prerequisite
  def-m2-brane-worldvolume-action: formulation-prerequisite
  def-f4-crepant-resolution-and-matter-surface: mathematical-premise
  post-f4-m2-matter-curve-zero-mode-dictionary: formulation-prerequisite
  post-f4-mtheory-g4-shifted-quantization: formulation-prerequisite
status: published
origin: session
physical_scope: >-
  The original F4 background/charge and singular matter-curve/selected-fibral
  sector objective is retained. This remark records current local
  proof/readiness gaps and makes no literature-wide open-problem claim.
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "E. Bergshoeff, E. Sezgin, and P. K. Townsend, Supermembranes and Eleven-Dimensional Supergravity (1987)"
      url: https://pure.rug.nl/ws/portalfiles/portal/14453122/1987PhysLettBBergshoeff4.pdf
      locator: "Equations (3)–(20): the classical action and its smooth worldvolume input."
    - title: "Timo Weigand, TASI Lectures on F-theory, arXiv:1806.01854v1"
      url: https://arxiv.org/pdf/1806.01854v1
      locator: "§§4.5–5.6: a selected resolution-chamber matter surface as geometric data."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Remark

The classical action and selected matter surface presently carried into this
pair do not construct the actual singular wrapped-M2 protected state sector,
the light branch and vertex states, a closed transfer/domain, a regulator
limit, or the combined fermion/C-field twist that identifies an index with
$\int_{\mathcal S_R}g_4$. The required inputs are listed in
def-f4-singular-wrapped-m2-sector-realization-data. A finite matrix or a
point-matching prescription chosen to give a desired Euler characteristic is
not a derivation of those inputs. This is a scoped local authoring hold, not a
new physical postulate and not a claim that the standard relation is a
substantiated open research problem or that no literature construction exists.
The symbol $\int_{\mathcal S_R}g_4$ is the intended comparison target only
when a smooth compact resolved model supplies the oriented surface cycle and
flux class in the scope of the zero-mode postulate below; this remark does not
assert that the integral is defined or computed for every singular or
noncompact matter surface in the retained scope.

The named smooth comparison target is the adopted postulate
post-f4-m2-matter-curve-zero-mode-dictionary, with its own regime: a smooth
compact resolved flat sectioned elliptic Calabi--Yau fourfold, a selected
smooth compact matter surface $S_R^{\mathrm{sm}}$ embedded by
$i:S_R^{\mathrm{sm}}\hookrightarrow\widehat Y_4$ and a proper smooth
submersion $q:S_R^{\mathrm{sm}}\to C_R$ with closed oriented real
two-dimensional fibres equal to the chosen rational curve, over a smooth
compact matter curve $C_R$, algebraic gauge-background flux, the oriented
fibre-integrated real class $\alpha=q_*(i^*[g_4])\in H^2_{\mathrm{dR}}(C_R;\mathbb R)$, a
chosen integral lift $c\in H^2(C_R;\mathbb Z)$ of $\alpha$, a supplied
holomorphic line bundle $\mathcal L_R$ with $c_1(\mathcal L_R)=c$, and a spin
line $\mathscr S_R^{\mathrm{spin}}$ with
$(\mathscr S_R^{\mathrm{spin}})^{\otimes2}\cong K_{C_R}$. The postulate itself
denotes the smooth matter surface and spin line by $S_R$ and $\mathcal S_R$,
respectively.
Under those assumptions it adopts
$\deg\mathcal L_R=\int_{S_R^{\mathrm{sm}}}g_4$ and
$\chi_R=h^0(C_R,\mathcal L_R\otimes\mathscr S_R^{\mathrm{spin}})-
h^1(C_R,\mathcal L_R\otimes\mathscr S_R^{\mathrm{spin}})$.
Here $H^q(C_R,\mathcal E)$ is cohomology of the sheaf of holomorphic sections and $h^q$ its complex dimension, finite for the supplied smooth-curve line by the postulate's declared general-line Dolbeault/sheaf comparison. The coefficient map is its degree-two integral-to-de-Rham map, and degree and $K_{C_R}$ have its explicit characteristic-class and holomorphic-cotangent meanings.
The selected singular-model surface $\mathcal S_R$ in the target
$\int_{\mathcal S_R}g_4$ above is a different object. The smooth zero-mode
postulate records net chirality only and excludes singular curves, general
non-algebraic flux and microscopic M2 quantization.

The separate postulate post-f4-mtheory-g4-shifted-quantization gives only a
conditional free-period convention: for a smooth compact connected resolved
Calabi--Yau fourfold $\widehat Y_4$ with holomorphically trivial canonical
bundle, an oriented Hausdorff second-countable smooth eleven-manifold $Y_{11}$ with
a smooth mostly-plus Lorentzian metric $g$, a time orientation $\tau$, and
a principal $\mathrm{Spin}^+(10,1)$-bundle covering its oriented time-oriented
orthonormal frame bundle as specified by that postulate, and internal
inclusion $i:\widehat Y_4\hookrightarrow Y_{11}$ with
$i^*TY_{11}\cong T\widehat Y_4\oplus\varepsilon^3$, the adopted tension
$T_{M2}=(2\pi)^{-2}\ell_p^{-3}$ and unit-curvature identification give
$g_4=[G_{4,\mathrm{CJS}}]/((2\pi)^3\ell_p^3)$ and
$$g_4+\tfrac12\rho_{\widehat Y_4}(c_2(T\widehat Y_4)) \in\operatorname{im}\rho_{\widehat Y_4},\qquad \rho_{\widehat Y_4}:H^4(\widehat Y_4;\mathbb Z)\to H^4_{\mathrm{dR}}(\widehat Y_4;\mathbb R).$$
It does not choose the integral lift, holomorphic line bundle or spin line and
retains no torsion or differential C-field data; it has no singular-space
conclusion. These postulates identify smooth comparison conventions only;
neither supplies singular states, a transfer map, an index proof or the twist.

## Remark references

[[def-f4-singular-wrapped-m2-sector-realization-data]]

[[post-f4-m2-matter-curve-zero-mode-dictionary]]

[[post-f4-mtheory-g4-shifted-quantization]]

## Facts & Assumptions

**Given:** The exact current interfaces of the classical action and the
specified resolution/matter-surface data, plus the present assigned batch
scope. Physical conclusions remain conditional on an actually supplied
singular sector and comparison map.

[F1] [[def-m2-brane-worldvolume-action]] defines a classical action on one
smooth closed oriented three-manifold with Lorentzian nondegenerate induced
metric and explicitly claims no quantization.

[F2] [[def-f4-crepant-resolution-and-matter-surface]] defines a selected
fibral family as specified geometric data over one chosen resolution chamber;
different resolutions or selected components remain separate choices.

[F3] [[post-f4-m2-matter-curve-zero-mode-dictionary]] is an adopted zero-mode
index dictionary only in its smooth compact algebraic-flux regime; it expressly
excludes singular matter curves and does not derive microscopic M2 quantization.

[F4] [[post-f4-mtheory-g4-shifted-quantization]] is conditional on its smooth
compact Calabi--Yau, oriented time-oriented Lorentzian spin, tangent-splitting, tension and curvature-identification
hypotheses and asserts only the stated free-period shift. It supplies no
singular-space index or line-bundle lift.

## Proof

**Given:** The current classical action and resolution/matter-surface
interfaces in [F1] and [F2].

1.1 The input contract in [F1] is a single smooth closed worldvolume with a nondegenerate Lorentzian induced metric, and the item explicitly identifies it as a classical action with no quantum definition. Hence this carrier alone does not define the Hilbert-space sector or closed singular supercharge required for a quantum chiral count. [F1, given]

1.2 The geometric object in [F2] is a specified cycle in one chosen resolution chamber, with different resolution/component choices kept separate. That geometric input does not furnish the missing quantum domain or the comparison calculation required by this remark. [F2, given]

1.3 The zero-mode dictionary [F3] applies only to its smooth compact algebraic-flux assumptions, while [F4] gives only a conditional free-period flux convention; neither supplies the singular Hilbert-space sector or its closed transfer comparison. They are adopted postulates, not deductions from the local operator examples. [F3, F4, given]

2.1 The action and geometric-cycle interfaces thus leave the physical singular-sector and transfer comparison as a required additional input. The remark records that scoped obligation without converting it into a physical postulate or literature-wide open-problem claim. [F1, F2, F3, F4, step 1.1, step 1.2, step 1.3] ∎

## Interface and realization boundary

The regulated protected-sector carrier and combined mathematical data
carrier specify conditional input contracts. Their current source and
readiness must be assessed using the native records after any interface
correction. The full-AC hypothesis inherited from the spinor/characteristic
prerequisites is retained explicitly in the required-data definition.
Neither a current ready input contract nor the correction of an obsolete
carrier-absence statement constructs the physical singular sector or its
transfer comparison. This remark may be locally ready as a nonlogical
statement of that obligation while the physical construction itself remains
unproved. No Pfaffian/electric family theorem or physical realization is
assumed to clear a status-record defect.
