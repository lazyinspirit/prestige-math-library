---
id: ex-qftx-n1-wilsonian-wavefunction-vs-holomorphic
kind: example
title: Holomorphic and Canonically Normalized Wess–Zumino Couplings
status: draft
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
physical_scope: "A formal perturbative rigid N=1 Wess–Zumino Wilsonian example at nonzero scale. It distinguishes a holomorphic coefficient from its canonically normalized value and makes no empirical or continuum claim."
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Stephen P. Martin, A Supersymmetry Primer, version 7"
      url: "https://arxiv.org/pdf/hep-ph/9709356v7"
      locator: "§6.5, printed pp. 66–67, superpotential beta functions in terms of chiral-field anomalous dimensions."
    - title: "Steven Weinberg, Non-Renormalization Theorems in Non-Renormalizable Theories"
      url: "https://arxiv.org/pdf/hep-th/9803099v1"
      locator: "Equations (3)–(12), pp. 3–7, perturbative Wilsonian holomorphic F-term conclusion."
verification:
  precheck: pending
---

## Example

Take one chiral superfield $\Phi$ with mass dimension one and tree superpotential $W_0(\Phi)=\tfrac12m\Phi^2+\tfrac{y}{3!}\Phi^3$, where $m$ has mass dimension one and $y$ is dimensionless. Use a formal perturbative Wilsonian prescription satisfying the N=1 theorem at a nonzero scale $\lambda$, and suppose the full real quadratic kinetic coefficient at that scale is a positive function $Z(\lambda)$. Then the holomorphic coefficients $m$ and $y$ in the unrescaled field $\Phi$ receive no perturbative Wilsonian corrections, while the canonically normalized field $\Phi_c=Z(\lambda)^{1/2}\Phi$ has coefficients $m_c(\lambda)=m/Z(\lambda)$ and $y_c(\lambda)=y/Z(\lambda)^{3/2}$. Thus the canonically normalized parameters can run if $Z(\lambda)$ varies, even though the holomorphic Wilsonian coefficients do not.

## Example references

[Martin, §6.5](https://arxiv.org/pdf/hep-ph/9709356v7)

[Weinberg, equations (3)–(12)](https://arxiv.org/pdf/hep-th/9803099v1)

## Facts & Assumptions

**Given:** The formal N=1 Wilsonian action datum and theorem hypotheses, including the coefficientwise local background-spurion extension with independent unconstrained real spurion jets and chirality before constant-background evaluation; the stated one-field superpotential; and a positive full quadratic kinetic coefficient $Z(\lambda)$.

[F1] [[def-qftx-wilsonian-n1-action-data]]: the chiral superfield has a holomorphic F-term integrand and a real quadratic kinetic term in the Wilsonian D-term data; real-spurion selection is interpreted in its coefficientwise formal background-jet algebra before evaluating constant backgrounds.

[F2] [[pthm-qftx-n1-wilsonian-f-term-nonrenormalization]]: under its formal cutoff, symmetry, anomaly-free, formal local background-spurion hypotheses, every positive-field-degree coefficient of the remaining holomorphic integrand is unchanged after collecting matter-independent quadratic gauge-kinetic terms. Equality of its numerical constant additionally uses the supplier's fixed-representative convention; it is not needed for the coefficients $m,y$. In this ungauged Wess–Zumino example the ultraviolet remainder is $W_0$.

[A1] The single-field model has no gauge interactions; it is the trivial-gauge-group specialization of the stated action data.

[A2] $Z(\lambda)>0$, so the real field rescaling to $\Phi_c$ is invertible.

## Verification

1.1 By [F2], the coefficients $m$ and $y$ of $W_0(\Phi)$ are unchanged in the unrescaled holomorphic variable at every formal perturbative order. [given, F1, F2, A1]

2.1 Since $Z(\lambda)>0$, substitute $\Phi=Z(\lambda)^{-1/2}\Phi_c$ into $W_0$. This gives $W_0=\tfrac12(m/Z)\Phi_c^2+(y/Z^{3/2})\Phi_c^3/3!$, hence the stated canonical coefficients. For a nonzero bare parameter these expressions vary whenever $Z$ does; a zero bare parameter remains zero. [A2, algebra, step 1.1] ∎

