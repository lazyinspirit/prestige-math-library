---
id: ex-label-shift-identical-input-laws-has-large-joint-error
kind: example
title: "Identical input laws can hide a large joint-labeling error"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - def-h-delta-h-divergence
  - def-source-target-distributions-and-shift
  - thm-covariate-shift-importance-weighting
  - thm-target-risk-bound-by-source-risk-divergence-and-joint-error
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Shai Ben-David, John Blitzer, Koby Crammer, Alex Kulesza, Fernando Pereira, and Jennifer Wortman Vaughan, A Theory of Learning from Different Domains, Machine Learning 79 (2010), §4.2 and Theorem 2 proof"
      url: "https://link.springer.com/content/pdf/10.1007/s10994-009-5152-4.pdf"
---

## Example

Let the input space contain one point $x_0$, and let both source and target input marginals put mass one on $x_0$. Let the source label be $0$ surely and the target label be $1$ surely. For the class $\mathcal H=\{h_0,h_1\}$ of the two constant binary classifiers, every classifier pair has equal source and target disagreement probabilities, so $d_{\mathcal H\Delta\mathcal H}(\mu_S,\mu_T)=0$. Yet $\epsilon_S(h_0)=0$, $\epsilon_T(h_0)=1$, and the joint-labeling error $\lambda=\inf_{g\in\mathcal H}(\epsilon_S(g)+\epsilon_T(g))=1$. Thus the target-risk bound is sharp for $h_0$, and equal input laws alone give no target-risk guarantee when the labeling law changes.

## Example references

[[def-source-target-distributions-and-shift]]: defines joint laws, conditional label kernels, input marginals, and covariate shift.

[[def-h-delta-h-divergence]]: defines divergence using only the input marginals.

[[thm-covariate-shift-importance-weighting]]: requires the conditional label kernels to agree on the target marginal.

[[thm-target-risk-bound-by-source-risk-divergence-and-joint-error]]: retains the joint-labeling term $\lambda$ in the target-risk bound.

[Ben-David et al., Definition 2 and Theorem 2 proof, printed pp. 156–158](https://link.springer.com/content/pdf/10.1007/s10994-009-5152-4.pdf): the joint-labeling error and the role of that term in the transfer bound.

## Facts & Assumptions

**Given:** The one-point input space, deterministic source and target labels, and the two constant classifiers in the Example.

[F1] [[def-source-target-distributions-and-shift]]: source and target risks are probabilities under their respective joint laws, and the conditional label kernels are part of the domain pair.

[F2] [[def-h-delta-h-divergence]]: the divergence compares disagreement probabilities under the two input marginals.

[F3] [[thm-target-risk-bound-by-source-risk-divergence-and-joint-error]]: every classifier satisfies the source-risk plus half-divergence plus joint-error bound.

[F4] [[thm-covariate-shift-importance-weighting]] and [[def-source-target-distributions-and-shift]]: importance weighting requires covariate shift, including equality of the source and target conditional label kernels on the target marginal.

## Verification

1.1 The two input marginals are identical, so every disagreement event has the same probability under them; [F2] gives $d_{\mathcal H\Delta\mathcal H}(\mu_S,\mu_T)=0$. [F2, given]

1.2 Under the specified labels, $\epsilon_S(h_0)=0$, $\epsilon_T(h_0)=1$, $\epsilon_S(h_1)=1$, and $\epsilon_T(h_1)=0$. Therefore the infimum defining $\lambda$ is $\min\{0+1,1+0\}=1$. [F1, given, algebra]

2.1 Substituting these values into [F3] gives $1\le0+0+1$, with equality; dropping $\lambda$ would assert the false inequality $1\le0$. The conditional label kernels differ at $x_0$, so the premise in [F4] fails despite the equal input marginals. [F3, F4, step 1.1, step 1.2, algebra] ∎
