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
axiom_base: "ZF + full Axiom of Choice, inherited through the selected operator-equivalence data; the coefficient-projection argument itself uses no choice."
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

Let the rigid four-dimensional $\mathcal N=1$ Wilsonian effective-action data and finite operator basis be as in the action definition, with formal cutoff $0<\lambda<\Lambda_0$. Let $F_\lambda(\Phi,W)$ denote the derivative-free, holomorphic chiral integrand of the Wilsonian action, and define its superpotential part by $W_\lambda(\Phi)=F_\lambda(\Phi,0)$. Fix a finite ordered basis of retained light-field superpotential operators and a scale-independent linear coordinate projection $P_{\mathrm{hol}}$ onto that basis. Use the same unrescaled chiral fields, quotient relations, and operator coordinates at every scale. Assume the selected formal perturbative cutoff prescription has the local nondynamical-spurion extension and local derivative expansion specified in the action data; its perturbative vertices are one-particle-irreducible; its rigid supersymmetry and BRST/gauge Ward identities hold coefficientwise for every local insertion and their counterterms; and it has no local gauge anomaly.

Assume full Axiom of Choice for the selected finite operator-equivalence data. Then, coefficientwise at every perturbative order,

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

[F2] [[pthm-qftx-n1-wilsonian-f-term-nonrenormalization]]: under the stated rigid N=1 and BRST/gauge Ward identities, local spurion extension, local derivative expansion, one-particle-irreducible vertex prescription, and anomaly-free hypotheses, the full Wilsonian chiral integrand is coefficientwise unchanged in formal perturbation theory except that the holomorphic gauge coupling can receive a one-loop correction; D-terms are not protected.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function. Full AC is inherited only because the selected invariant-quotient/on-shell-equivalence input uses it; the restriction to $W=0$ and fixed-basis coordinate projection below do not use a choice function.

[A2] The finite relation quotient, ordered basis, coordinate projection, and unrescaled light fields are independent of $\lambda$; no scale-dependent change of field coordinates is performed.

[A3] The selected regulator and counterterms satisfy all symmetry-preservation, spurion, locality, one-particle-irreducibility, and no-local-gauge-anomaly hypotheses of [F2] at each formal perturbative order.

## Proof

1.1 The selected finite invariant-quotient/on-shell-equivalence interpretation carries the full-AC premise [A1]. Separately, by [F2] and [A3], the complete derivative-free holomorphic chiral integrand satisfies $F_\lambda(\Phi,W)=F_{\Lambda_0}(\Phi,W)$ coefficientwise for every formal perturbative order. Setting $W=0$ and restricting to the fixed light-field variables preserves this identity, so $W_\lambda(\Phi)=W_{\Lambda_0}(\Phi)$. [given, F1, F2, A1, A3]

2.1 The map $P_{\mathrm{hol}}$ is the same linear coordinate projection at both scales by [A2]. Applying it to the equality in step 1.1 gives $P_{\mathrm{hol}}W_\lambda=P_{\mathrm{hol}}W_{\Lambda_0}$. Since the retained operators are a fixed ordered basis, equality of their coordinate vectors gives equality of each retained coefficient. [F1, A2, step 1.1, algebra]

3.1 The gauge-coupling correction and the freedom of the real D-term are exactly the exceptions in [F2]. The conclusion concerns the fixed Wilsonian holomorphic coordinates, so it does not imply equality of one-particle-irreducible vertices or of coefficients after a scale-dependent field rescaling; the formal perturbative hypothesis in [A3] also excludes nonperturbative and continuum conclusions. [F1, F2, A3, step 2.1] ∎
