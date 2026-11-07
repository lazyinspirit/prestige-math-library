---
id: ex-f4-2016-global-chiral-standard-model
kind: example
title: A global chiral Standard Model flux example
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 13
domain: physics
library: physics
category: string-theory
deps:
  - post-f4-global-gauge-group-from-mordell-weil-torsion
  - pthm-f4-g4-d3-tadpole-from-f5-bianchi
  - pthm-f4-matter-surface-chiral-index
  - post-f4-four-dimensional-anomaly-consistency
  - def-f4-crepant-resolution-and-matter-surface
  - post-f4-mtheory-g4-shifted-quantization
  - post-f4-g4-supersymmetry-transversality-conditions
dependency_roles:
  post-f4-global-gauge-group-from-mordell-weil-torsion: physical-assumption
  pthm-f4-g4-d3-tadpole-from-f5-bianchi: physical-result
  pthm-f4-matter-surface-chiral-index: physical-result
  post-f4-four-dimensional-anomaly-consistency: physical-assumption
  def-f4-crepant-resolution-and-matter-surface: mathematical-premise
  post-f4-mtheory-g4-shifted-quantization: physical-assumption
  post-f4-g4-supersymmetry-transversality-conditions: physical-assumption
physical_scope: "One source-reported resolved four-dimensional F-theory model over the blow-up of P3 at a point. Every spectrum, flux, integrality and tadpole value is restricted to the authors' fibration, divisor basis and effective-theory conventions. This is not a universal existence theorem or a complete realistic phenomenology claim; the model retains an extra triplet pair, and three singlet chiralities are inferred from anomaly matching."
empirical_premises: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Ling Lin and Timo Weigand, G4-Flux and Standard Model Vacua in F-theory, arXiv:1604.04292v2"
      url: "https://arxiv.org/pdf/1604.04292v2"
      locator: "§2.1–§2.2, printed pp. 4–6, flux constraints and matter indices; §3.2.1–§3.2.2, pp. 14–17, anomaly matching; §4.3, pp. 22–24, the Bl1P3 model and explicit flux; §5, pp. 25–26, spectrum and limitations."
    - title: "Timo Weigand, TASI Lectures on F-theory, arXiv:1806.01854v1"
      url: "https://arxiv.org/pdf/1806.01854v1"
      locator: "§§9.1–9.2, printed pp. 84–87, quantization, transversality and matter-surface conventions; used as an independent review, not a proof of this model's computations."
verification:
  precheck: pass
---

## Example

Lin and Weigand describe this resolved model as having gauge group $SU(3)\times SU(2)\times U(1)_1\times U(1)_2$; this is their reported group label, not a global-form result derived here. Its gauge algebra is $\mathfrak{su}(3)\oplus\mathfrak{su}(2)\oplus\mathfrak{u}(1)_1\oplus\mathfrak{u}(1)_2$. The model uses $B=\operatorname{Bl}_1\mathbb P^3$, with divisor classes $H$ (the pullback hyperplane) and $X$ (the exceptional divisor), and the elliptic-fibration choice $(W_2,W_3)=(X,H)$. Their base classes are $K=c_1(B)=4H+2X$, $\alpha=3H+X$, and $\beta=H+X$, with
$$\int_BX^3=1,\qquad\int_BX^2H=-1,\qquad\int_BXH^2=1,\qquad\int_BH^3=0.$$
The resolved fourfold has reported Euler characteristic $\chi(Y_4)=1794$. In the authors' resolved-divisor basis the displayed dimensionless flux is
$$g_4=\frac12\left(E_1\wedge(2H-3F_2-S_1)+X\wedge(F_2-F_1+S_1)\right)=-\frac16G_4^{z_2}-\frac1{12}G_4^{z_4},$$
with $z_1=z_3=z_5=D=D'=0$, $z_2=-1/6$, and $z_4=-1/12$. Here $E_1,F_1,F_2,S_1$ and $G_4^{z_i}$ are the resolved-divisor and flux-basis classes of the source's chosen toric fibration; they are not universal classes.

The source identifies $U(1)_Y=U(1)_1$ and retains a second abelian factor $U(1)_2$. Its Table 4.1 gives the following net chiral indices and charges:

| Multiplet | $(q_1,q_2)$ | $\chi$ | Index source |
|---|---:|---:|---|
| $(3,2)$ | $(1/6,-1/3)$ | $3$ | matter-surface calculation |
| $2_1$ | $(1/2,-1)$ | $-2$ | matter-surface calculation |
| $2_2$ | $(1/2,1)$ | $1$ | matter-surface calculation |
| $2_3$ | $(1/2,0)$ | $-2$ | matter-surface calculation |
| $3_1$ | $(2/3,-1/3)$ | $-2$ | matter-surface calculation |
| $3_2$ | $(-1/3,-4/3)$ | $0$ | matter-surface calculation |
| $3_3$ | $(-1/3,2/3)$ | $1$ | matter-surface calculation |
| $3_4$ | $(2/3,2/3)$ | $-1$ | matter-surface calculation |
| $3_5$ | $(-1/3,-1/3)$ | $-4$ | matter-surface calculation |
| $1_{(1)}$ | $(1,-1)$ | $2$ | matter-surface calculation |
| $1_{(2)}$ | $(1,0)$ | $1$ | anomaly-inferred |
| $1_{(3)}$ | $(1,2)$ | $0$ | matter-surface calculation |
| $1_{(4)}$ | $(1,1)$ | $0$ | anomaly-inferred |
| $1_{(5)}$ | $(0,2)$ | $0$ | matter-surface calculation |
| $1_{(6)}$ | $(0,1)$ | $-4$ | anomaly-inferred |

The labels $2_i,3_i,1_{(i)}$ are the source's representation labels; the table is a chiral index table, not a list of all individual states or vectorlike pairs. The authors describe the construction as a chiral Standard Model spectrum with an additional triplet pair; the three singlet entries marked anomaly-inferred are not independent matter-surface calculations.

## Facts & Assumptions

**Given:** The specified resolved fibration and its divisor basis, the source's flux basis and orientation conventions, and the cited model-specific physical dictionaries. “Reported” below distinguishes published model output from a deduction of the abstract A-page postulates.

[F1] [[def-f4-crepant-resolution-and-matter-surface]] supplies the smooth resolved fourfold/matter-surface interface used for this model; its current Step 1 record is stale.

[F2] [[post-f4-mtheory-g4-shifted-quantization]] gives the conditional R3 free-period shift convention; the generic shifted-flux and M2-tension carriers now exist but lack current Step 1 readiness records, so this is not a ready full-integrality premise.

[F3] [[post-f4-g4-supersymmetry-transversality-conditions]] lists the adopted transversality and supersymmetry constraints; the source-specific flux is reported to satisfy them, while this broad postulate remains draft.

[F4] [[pthm-f4-matter-surface-chiral-index]] proves the smooth algebraic matter-curve branch, while its general arbitrary-class branch remains escalated. The flux indices in this model are source calculations using the explicit algebraic matter surfaces.

[F5] [[pthm-f4-g4-d3-tadpole-from-f5-bianchi]] gives the conditional target tadpole relation, but its corrected Gauss-law and source-normalization crosswalk remains open.

[F6] [[post-f4-four-dimensional-anomaly-consistency]] states the model-level anomaly check, not its result.

[F7] [[post-f4-global-gauge-group-from-mordell-weil-torsion]] currently states a model-dependent global-form dictionary with explicit Shioda and matter-weight hypotheses; its Step 1 record is escalated for missing or stale geometric inputs. The gauge algebra and two $U(1)$ factors quoted here are source-reported and are not derived from this unfinished global-form input.

[A1] Lin–Weigand §4.3, equations (4.2)–(4.6), gives the base, fibration, flux and reported quantization/tadpole checks. Their integrality test is for their complete resolved divisor basis; this draft records the report but does not reproduce every $c_2$-shifted divisor-pairing value.

[A2] Lin–Weigand Tables 3.4 and 4.1 give the directly geometric matter-surface indices. Their §3.2 derives $1_{(2)},1_{(4)},1_{(6)}$ by anomaly matching because their matter-surface classes were not determined by the source's geometric calculation; these three entries are not independent geometry checks.

## Verification

**Proof strategy:** Direct specialization of the source's base intersection ring, flux, matter-surface formulas, anomaly relations and tadpole formula. This verifies the stated exact arithmetic and records source-reported checks without presenting them as mathematical proofs of F-theory.

**Given:** The exact model and table above, source equations (3.8), (3.16)–(3.17), Table 3.4, Table 3.5, Table 4.1 and equation (4.6), in the source's conventions.

1.1 The source reports the gauge algebra and $U(1)_Y=U(1)_1$ with the additional $U(1)_2$ factor; [F7] is a planned interpretation input and is not used to derive these source data. [F1] fixes the chosen resolved geometry. The source reports that its flux satisfies the shifted-quantization and transversality tests [F2, F3]; these are not independently reconstructed here. The net-index calculation uses [F4]. Substituting $K=4H+2X$, $\alpha=3H+X$, $\beta=H+X$, $W_2=X$, $W_3=H$, and $(z_1,z_2,z_3,z_4,z_5,D,D')=(0,-1/6,0,-1/12,0,0,0)$ into the source's matter-index formulas gives the direct geometric index list $(3,2):3$, $2_1:-2$, $2_2:1$, $2_3:-2$, $3_1:-2$, $3_2:0$, $3_3:1$, $3_4:-1$, $3_5:-4$, $1_{(1)}:2$, $1_{(3)}:0$, and $1_{(5)}:0$. Each term is a cubic base intersection, and the four displayed base integrals evaluate it; the source's explicit flux formula and divisor classes fix the orientation. The three remaining singlet values $1_{(2)}:1$, $1_{(4)}:0$, $1_{(6)}:-4$ are obtained instead by substituting the same flux data into the anomaly-matching equations (3.16)–(3.17), as recorded in Table 3.5. [A2, F1, F2, F3, F4, F7, given, algebra]

2.1 The direct index specialization reproduces Table 4.1. Substituting the complete Table 4.1 charge/index data into the source's perturbative anomaly equations gives the coefficient vector $(SU(3)^3,SU(3)^2U(1)_1,SU(3)^2U(1)_2,SU(2)^2U(1)_1,SU(2)^2U(1)_2,U(1)_1^3,U(1)_1^2U(1)_2,U(1)_1U(1)_2^2,U(1)_2^3,\mathrm{grav}^2U(1)_1,\mathrm{grav}^2U(1)_2)=(0,0,0,0,0,0,0,0,0,0,0)$ in the source's conventions. This is an exact rational-arithmetic consistency check of the source's anomaly-matched spectrum, not independent evidence for the three inferred singlet indices. [A2, F6, step 1.1, given, algebra]

3.1 The source's equation (4.6) and exact intersection evaluation give $\frac12\int_{Y_4}g_4^2=11/4$; independently, $\chi(Y_4)/24=1794/24=299/4$. Therefore $N_{D3}=299/4-11/4=288/4=72$, a nonnegative integer, as reported. The paper separately reports that its $c_2$-shifted divisor-pairing quantization checks are integral and that both abelian D-terms vanish; those model computations are not reproduced here because the complete resolved divisor and $c_2$ pairing table is not among the verified local inputs. The spectrum retains an extra triplet pair, so this example asserts neither an exact Standard Model spectrum nor a complete phenomenological vacuum. [A1, F5, given, algebra] ∎

## Scope notes

The flux, base and Euler number are one source-specific construction. Three singlet chiralities are inferred from anomaly matching. The authors report an additional triplet pair and do not claim a complete realistic low-energy model or moduli stabilization. Their quantization and D-term results remain source-reported checks in this draft until the full resolved divisor/$c_2$ pairing data are independently reproduced.

## Example references

[[post-f4-global-gauge-group-from-mordell-weil-torsion]]

[[pthm-f4-g4-d3-tadpole-from-f5-bianchi]]

[[pthm-f4-matter-surface-chiral-index]]

[[post-f4-four-dimensional-anomaly-consistency]]

[[def-f4-crepant-resolution-and-matter-surface]]

[[post-f4-mtheory-g4-shifted-quantization]]

[[post-f4-g4-supersymmetry-transversality-conditions]]
