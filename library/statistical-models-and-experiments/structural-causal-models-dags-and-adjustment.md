---
page: structural-causal-models-dags-and-adjustment
title: "SCM, DAGs, adjustment"
status: draft
items:
  - def-d-separation-in-a-dag
  - lem-finite-products-of-probability-kernels
  - def-recursive-structural-causal-model-and-dag
  - def-ancestral-moral-graph-of-a-dag
  - def-faithfulness-of-a-dag-model
  - lem-recursive-scm-topological-kernel-factorization
  - lem-active-routes-in-a-finite-dag-have-active-paths
  - lem-d-separation-ancestral-moral-separation
  - lem-conditional-independence-under-kernel-extension-and-conditioning
  - thm-dag-factorization-implies-d-separation-conditional-independence
  - lem-backdoor-criterion-implies-counterfactual-exchangeability
  - thm-backdoor-adjustment-sufficiency
  - lem-frontdoor-interventional-identities
  - thm-frontdoor-adjustment-sufficiency
examples: []
---

This page specifies finite recursive structural causal models on full DAGs,
including latent vertices, their topological probability-kernel law, and the
global Markov implication from factorization to d-separation conditional
independence. Faithfulness is an additional property of a particular law;
these results do not infer missing arrows from observed independences or
characterize Markov equivalence. Backdoor and front-door adjustment are
sufficient identification conditions evaluated on the full graph. They do
not certify that a scientific graph or exogenous law is empirically adequate.
Pointwise adjustment claims are restricted to treatment atoms with positive
probability; continuous-treatment regular conditional formulas are only
almost-everywhere statements without further version assumptions.
