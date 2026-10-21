---
id: def-additive-noise-model
kind: definition
title: "Continuous additive-noise models on finite DAGs"
status: published
dependency_level: 0
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps:
  - def-recursive-structural-causal-model-and-dag
  - def-d-separation-in-a-dag
  - def-law-or-distribution-of-a-random-element
  - def-measurable-function-between-measurable-spaces
  - def-independent-random-elements
proof_strategy: definition
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jonas Peters, Joris Mooij, Dominik Janzing, and Bernhard Schölkopf, Causal Discovery with Continuous Additive Noise Models, JMLR 15 (2014), Definition 16 and Proposition 17"
      url: "https://jmlr.org/papers/volume15/peters14a/peters14a.pdf"
    - title: "Jonas Peters, Dominik Janzing, and Bernhard Schölkopf, Elements of Causal Inference, §4.1.4, Definition 4.4"
      url: "https://web.math.ku.dk/~peters/jonas_files/ElementsOfCausalInference.pdf"
    - title: "K. Assaad, E. Devijver, and G. Gaussier, Causal discovery: noise-based methods, slides 22–23 and 29–31"
      url: "https://ckassaad.github.io/courses/courses_materials/ENSLyon_Causality/2023/CausalDiscoveryNoiseBased.pdf"
verification:
  precheck: n/a
---

## Definition

Fix a nonempty finite directed acyclic graph $G=(V,E)$ with a specified
topological order $v_1,\ldots,v_p$; every arrow points from an earlier to a
later vertex. For $j\in V$, let
$\operatorname{pa}(j)=\{i\in V:(i,j)\in E\}$ be its parent set, and let
$\operatorname{nd}(j)$ be the vertices other than $j$ that are not descendants
of $j$. A **continuous additive-noise model** on $G$ consists of real random
variables $X_j,N_j$ on a common probability space and continuous Borel
functions $f_j:\mathbb R^{\operatorname{pa}(j)}\to\mathbb R$ such that
$$X_j=f_j(X_{\operatorname{pa}(j)})+N_j$$
recursively in the topological order. The finite family of noises is mutually
independent, and each $N_j$ has a strictly positive Lebesgue density $q_j$.
All vertices of $G$ are observed; no latent vertices are omitted from the
model. The **observational law** is the law of the vector
$X=(X_j)_{j\in V}$.

The model is **causally minimal** when every parent input is essential: for
each edge $i\to j$, there are values of the other parent coordinates and two
distinct real values of the $i$-coordinate at which $f_j$ takes different
values. A root has no parent-coordinate minimality condition.

## Definition references

[[def-recursive-structural-causal-model-and-dag|Recursive structural causal models on finite DAGs]]

[[def-d-separation-in-a-dag|Descendants and nondescendants in a finite DAG]]

[[def-measurable-function-between-measurable-spaces|Measurable functions]]

[[def-independent-random-elements|Mutually independent random elements]]

[[def-law-or-distribution-of-a-random-element|The law of the observed random vector]]

[Peters et al., JMLR (2014), Definition 16 and Proposition 17](https://jmlr.org/papers/volume15/peters14a/peters14a.pdf)

[Peters, Janzing, and Schölkopf, Elements of Causal Inference, §4.1.4](https://web.math.ku.dk/~peters/jonas_files/ElementsOfCausalInference.pdf)

[Assaad, Devijver, and Gaussier, course notes (2023), slides 22–23 and 29–31](https://ckassaad.github.io/courses/courses_materials/ENSLyon_Causality/2023/CausalDiscoveryNoiseBased.pdf)
