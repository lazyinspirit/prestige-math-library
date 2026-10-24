---
id: pthm-aqft-wilsonian-superpotential-nonrenormalization
kind: physics-theorem
title: Wilsonian Superpotential Nonrenormalization in a Finite Supersymmetric EFT Basis
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: aqft-susy-effective-theories
dependency_level: 7
deps:
  - def-aqft-susy-wilsonian-action
  - pthm-qftx-n1-wilsonian-f-term-nonrenormalization
  - def-axiom-of-choice
dependency_roles:
  def-aqft-susy-wilsonian-action: formulation-prerequisite
  pthm-qftx-n1-wilsonian-f-term-nonrenormalization: physical-result
  def-axiom-of-choice: mathematical-premise
justified_by: []
forward_refs: []
axiom_base: "ZF + full Axiom of Choice adopted as a sufficient ambient assumption for the selected action data; the coefficient-projection argument itself uses no choice."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
physical_scope: "Formal perturbative Wilsonian superpotential coefficients in a fixed finite rigid four-dimensional N=1 EFT basis at nonzero cutoff. No arbitrary 1PI, nonperturbative, continuum, empirical, or scale-dependent field-normalization claim is made."
sources:
  references:
    - title: "Steven Weinberg, Non-Renormalization Theorems in Non-Renormalizable Theories"
      url: "https://arxiv.org/pdf/hep-th/9803099v1"
      locator: "Equations (1)–(12), printed pp. 2–7, for the symmetry/spurion restrictions and Wilsonian graph-counting proof; the local supplier rederives the C_2 case from equation (12)."
    - title: "Stephen P. Martin, A Supersymmetry Primer, version 7"
      url: "https://arxiv.org/pdf/hep-ph/9709356v7"
      locator: "§§4.7 and 4.10, printed pp. 41 and 49–50, for holomorphic superpotential versus real Kähler data; §6.5, printed pp. 66–67, for wave-function anomalous dimensions and canonical-coupling running."
verification:
  precheck: pass
---

## Statement

Let the rigid four-dimensional $\mathcal N=1$ Wilsonian effective-action data and finite operator basis be as in the action definition, with formal cutoff $0<\lambda<\Lambda_0$. Let $F_\lambda(\Phi,W)$ denote the derivative-free, holomorphic chiral integrand of the Wilsonian action, and define its superpotential part by $W_\lambda(\Phi)=F_\lambda(\Phi,0)$. Fix a finite ordered basis of retained light-field superpotential operators and a scale-independent linear coordinate projection $P_{\mathrm{hol}}$ onto that basis. Use the same unrescaled chiral fields, quotient relations, and operator coordinates at every scale. At constant coefficient backgrounds put $c_0=F_{\Lambda_0}(0,0)$ and fix $F_\lambda(0,0)=c_0$ at every scale. Numerical constants have zero rigid F-action, so this fixes a density representative rather than imposing a Ward-identity consequence. Bare constant FI terms, if present, are kept fixed and are excluded from promotion to unconstrained real coefficient backgrounds. Assume the selected formal perturbative cutoff prescription has the local nondynamical-spurion extension and local derivative expansion specified in the action data; its local counterterms obey chirality as an identity in the coefficientwise formal background-jet algebra before constant-background evaluation, with independent first anti-chiral jets of each unconstrained real coefficient spurion; its perturbative vertices are one-particle-irreducible; its rigid supersymmetry and BRST/gauge Ward identities hold coefficientwise for every local insertion and their counterterms; and it has no local gauge anomaly.

Adopt full Axiom of Choice as a sufficient ambient assumption for the selected action data; the regulated equivalence supplier requires no additional full-Choice premise. Then, coefficientwise at every perturbative order,

$$P_{\mathrm{hol}}W_\lambda=P_{\mathrm{hol}}W_{\Lambda_0}.$$

Thus every retained holomorphic superpotential coefficient in the fixed unrescaled field basis is unchanged by the formal Wilsonian cutoff evolution. The separately displayed holomorphic gauge coupling may receive a one-loop correction but no higher-loop correction. The real D-term function and Kähler data may change. This does not constrain arbitrary one-particle-irreducible vertices, coefficients after a scale-dependent field rescaling, nonperturbative corrections, or a continuum interacting quantum field theory.

## Statement references

[[def-aqft-susy-wilsonian-action|Finite N=1 Wilsonian action and fixed EFT coefficient basis]]

[[pthm-qftx-n1-wilsonian-f-term-nonrenormalization|General formal perturbative N=1 Wilsonian F-term theorem]]

[Weinberg, equations (1)–(12)](https://arxiv.org/pdf/hep-th/9803099v1)

[Martin, §§4.7, 4.10, and 6.5](https://arxiv.org/pdf/hep-ph/9709356v7)

## Facts & Assumptions

**Given:** Full AC; the fixed finite rigid N=1 Wilsonian EFT basis; a nonzero formal cutoff; and the local spurion, derivative-expansion, symmetry-preserving Ward-identity, locality, and anomaly-free hypotheses in the Statement.

[F1] [[def-aqft-susy-wilsonian-action]]: the Wilsonian action has a derivative-free holomorphic chiral integrand $F_\lambda(\Phi,W)$ and a separate real D-term; its finite operator quotient, ordered basis, cutoff, and field coordinates are supplied data.

[F2] [[pthm-qftx-n1-wilsonian-f-term-nonrenormalization]]: under its stated local spurion, formal background-jet, rigid N=1 and BRST/gauge Ward-identity, derivative-expansion, one-particle-irreducible vertex and anomaly-free hypotheses, collect all matter-independent quadratic gauge terms into $P_{\mathrm{kin}}$ and write $F_{\mathrm{rem}}$ for the remaining derivative-free holomorphic integrand. With its ultraviolet numerical-constant representative fixed, $F_{\mathrm{rem},\lambda}=F_{\mathrm{rem},\Lambda_0}$ coefficientwise; the collected gauge-kinetic coefficients may receive one-loop but no higher-loop corrections. The real D-term is not protected.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function. Full AC is adopted as a sufficient ambient assumption for the selected action data; the regulated equivalence theorem requires no additional full-Choice premise; the restriction to $W=0$ and fixed-basis coordinate projection below do not use a choice function.

[A2] The finite relation quotient, ordered basis, coordinate projection, and unrescaled light fields are independent of $\lambda$; no scale-dependent change of field coordinates is performed.

[A3] The selected regulator and counterterms satisfy all symmetry-preservation, coefficientwise formal background-jet, locality, one-particle-irreducibility, and no-local-gauge-anomaly hypotheses of [F2] at each formal perturbative order. The real coefficient spurions are unconstrained and their first anti-chiral jets are independent before constant-background evaluation. The constant representative is fixed as in the Statement, and any bare constant FI coefficient is held fixed rather than promoted. No FI correction conclusion is used, so the supplier's additional common-kernel hypothesis for that branch is unnecessary here. No positivity, convergence, or real-analytic extension of the formal coupling series is required.

## Proof

**Given:** [F1], [F2] and [A1]–[A3].

1.1 Full AC is the adopted sufficient ambient assumption [A1]; it is not an extra premise of the regulated equivalence theorem. Apply [F2] using [A3], collecting all matter-independent quadratic gauge terms, including any initially written in $F_\lambda$, into $P_{\mathrm{kin},\lambda}$. The numerical constant of the remainder is fixed by [A3], since $P_{\mathrm{kin}}(0)=0$. Thus every hypothesis needed for the supplier's nonkinetic F-term conclusion holds, and $F_{\mathrm{rem},\lambda}=F_{\mathrm{rem},\Lambda_0}$ coefficientwise. Every collected quadratic term vanishes at $W=0$, so $F_\lambda(\Phi,0)=F_{\mathrm{rem},\lambda}(\Phi,0)$ at each scale. Evaluating the remainder identity at $W=0$ and restricting to the fixed light-field variables gives $W_\lambda(\Phi)=W_{\Lambda_0}(\Phi)$. [given, F1, F2, A1, A3]

2.1 The map $P_{\mathrm{hol}}$ is the same linear coordinate projection at both scales by [A2]. Applying it to the equality in step 1.1 gives $P_{\mathrm{hol}}W_\lambda=P_{\mathrm{hol}}W_{\Lambda_0}$. Since the retained operators are a fixed ordered basis, equality of their coordinate vectors gives equality of each retained coefficient. [F1, A2, step 1.1, algebra]

3.1 The gauge-coupling correction and the freedom of the real D-term are exactly the exceptions in [F2]. The conclusion concerns the fixed Wilsonian holomorphic coordinates, so it does not imply equality of one-particle-irreducible vertices or of coefficients after a scale-dependent field rescaling; the formal perturbative hypothesis in [A3] also excludes nonperturbative and continuum conclusions. [F1, F2, A3, step 2.1] ∎
