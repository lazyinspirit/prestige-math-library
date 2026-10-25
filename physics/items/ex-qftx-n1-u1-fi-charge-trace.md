---
id: ex-qftx-n1-u1-fi-charge-trace
kind: example
title: U(1) Fayet–Iliopoulos Cancellation by Charge Trace
status: "published"
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 7
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-ward-and-nonrenormalization-examples
deps:
  - def-qftx-wilsonian-n1-action-data
  - pthm-qftx-n1-wilsonian-f-term-nonrenormalization
dependency_roles:
  def-qftx-wilsonian-n1-action-data: formulation-prerequisite
  pthm-qftx-n1-wilsonian-f-term-nonrenormalization: physical-result
physical_scope: "A formal perturbative rigid N=1 U(1) Wilsonian example in an unbroken, topologically trivial background at nonzero scale. It asserts no empirical or continuum result."
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Steven Weinberg, Non-Renormalization Theorems in Non-Renormalizable Theories"
      url: "https://arxiv.org/pdf/hep-th/9803099v1"
      locator: "The U(1) Fayet–Iliopoulos term argument, pp. 7–8: only the one-loop matter tadpole contributes, and it is proportional to the sum of chiral charges."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Example

Take one unbroken compact U(1) gauge factor with two left-chiral superfields of charges $+1$ and $-1$, one of each and no additional multiplicities. Use the canonical matter kinetic term, a positive field-independent quadratic U(1) gauge-kinetic coefficient, and no nonkinetic holomorphic interaction ($F_{\mathrm{rem}}=0$). Let the only additional real D-term be the bare field-independent Fayet–Iliopoulos term $\xi\int d^4x\,[V_1]_D$, and use the theorem's specified linear Lorenz BRST component graph prescription and a formal perturbative Wilsonian regulator satisfying all its compatibility and infrared inverse conditions at scale $\lambda>0$. Keep the bare FI coefficient $\xi$ fixed as a real number rather than promoting it to an unconstrained background. At zero mass and interaction spurions require the same regulated free momentum kernel and one-vector insertion for both matter components, tensored with their representation identities; only their charge signs differ. Use the theorem's ultraviolet-matched graph prescription with no independent finite FI shifts. Then the perturbative Wilsonian coefficient satisfies $\xi_\lambda=\xi$ at every loop order: the one-loop correction cancels by the charge sum, and the theorem excludes higher-loop corrections. Other real D-term couplings, if added, are not protected by this conclusion.

## Example references

[Weinberg, the U(1) Fayet–Iliopoulos argument, pp. 7–8](https://arxiv.org/pdf/hep-th/9803099v1)

## Facts & Assumptions

**Given:** The $N=1$ Wilsonian action datum, an unbroken U(1) factor, its two left-chiral representations, and the formal perturbative regulator hypotheses including its local background-spurion extension with independent unconstrained real spurion jets and chirality before constant-background evaluation.

[F1] [[def-qftx-wilsonian-n1-action-data]]: for a U(1) factor, $V_1$ is a real Abelian prepotential and a constant coefficient $\xi$ defines the Fayet–Iliopoulos D-term; its group is the compact matrix group $U(1)$ with Lie algebra $i\mathbb R$ and the stated period-$2\pi$ charge normalization.

[F2] [[pthm-qftx-n1-wilsonian-f-term-nonrenormalization]]: under its formal cutoff, symmetry, anomaly-free, formal local background-spurion hypotheses, and its fixed-FI promotion exception, common matter-kernel and ultraviolet-matched graph prescription without independent finite FI shifts, the perturbative FI correction is one-loop only, is proportional to the sum of all left-chiral U(1) charges, and vanishes when this sum is zero.

[A1] The two multiplets have charges $q_+=1$ and $q_-=-1$, each with multiplicity one.

[A2] The U(1) background is unbroken, $F_{\mathrm{rem}}=0$, the real D-term contains only the bare FI term, and the regulator and measure preserve the gauge and rigid $N=1$ Ward identities. The bare FI coefficient is not promoted, and both charged components use the common free kernel and one-vector insertion at zero interaction spurions, with ultraviolet matching and no independent finite FI shifts as specified in the Example.

## Verification

1.1 The total left-chiral charge is $q_++q_-=1+(-1)=0$. [A1, algebra]

2.1 By [F2], the only possible perturbative FI correction is the one-loop tadpole proportional to this total charge, so it is zero; all higher-loop corrections are excluded. Therefore $\xi_\lambda=\xi$. The theorem makes no corresponding claim about other D terms. [F1, F2, A2, step 1.1] ∎

