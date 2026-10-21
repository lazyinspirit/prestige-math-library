---
id: def-ip-inverse-risk-under-train-and-test-laws
kind: definition
title: Inverse reconstruction risk under train and test laws
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-ip-forward-map-and-solution-classes
  - def-ip-identifiability-and-stability-modulus
  - def-ip-learned-reconstruction-estimator
  - def-measurable-space
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-probability-measure
  - def-measurable-function-between-measurable-spaces
  - def-measure-kernel-and-probability-kernel
  - thm-measurability-of-integration-against-a-kernel
  - def-loss-function-and-risk
justified_by: []
forward_refs: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory, §5.3.1, PDF pp. 104–105"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
      locator: "Definition 5.3 and Example 5.4: Bayes risk is average risk under a law, posterior risk is a conditional-data integral, and scalar squared-error posterior risk is minimized by the posterior mean when the expectations exist."
    - title: "Peter Hoff, Statistical Decision Problems, §§4.1–4.2, PDF pp. 7–8"
      url: "https://www2.stat.duke.edu/~pdh10/Teaching/581/LectureNotes/intro.pdf"
      locator: "The decision problem specifies the parameter, action space, loss, measurable decision rule and its risk as expected loss under the observation law."
    - title: "Hongkai Zheng et al., InverseBench: Benchmarking Plug-and-Play Diffusion Priors for Inverse Problems in Physical Sciences, ICLR 2025"
      url: "https://proceedings.iclr.cc/paper_files/paper/2025/file/e297068f5ec7f483a017948715b591fb-Paper-Conference.pdf"
      locator: "§4.3, subsection 'How well do PnPDP methods handle out-of-distribution sources?', PDF p. 10, for selected out-of-prior results; Appendix C, 'Robustness to prior mismatch,' PDF pp. 28–29, for the preliminary Figure 8 comparison. These empirical contexts do not establish a universal risk bound."
verification:
  precheck: n/a
axiom_use: "No choice axiom is required; the joint evaluation laws and randomized kernels are supplied as inputs."
---

## Definition

Let $(\mathsf Y,\mathcal Y)$ and $(Q,\mathcal Q)$ be measurable data and target spaces, with $\mathcal Q$ the Borel sigma-algebra of the target metric space. Let $P$ be a probability measure on the product space $(\mathsf Y\times Q,\mathcal Y\otimes\mathcal Q)$, and let $\ell:Q\times Q\to[0,+\infty]$ be product-measurable, where $\ell(t,a)$ is the loss for target $t$ and action $a$. For a point reconstruction rule $g:(\mathsf Y,\mathcal Y)\to(Q,\mathcal Q)$ measurable with respect to the stated sigma-algebras, its risk under $P$ is the extended nonnegative integral
$$R_P(g):=\int_{\mathsf Y\times Q}\ell(t,g(y))\,P(dy,dt).$$
For a randomized reconstruction rule given by a probability kernel $K$ from $\mathsf Y$ to $Q$, define
$$R_P(K):=\int_{\mathsf Y\times Q}\!\left(\int_Q\ell(t,a)\,K(y,da)\right)P(dy,dt).$$
The inner integral is measurable in $(y,t)$ by kernel integration; a deterministic rule is the special case $K_y=\delta_{g(y)}$. When $P_{\rm train}$ and $P_{\rm test}$ are specified joint laws on the same input-target space, the corresponding training-law risk and test-law risk are $R_{P_{\rm train}}(K)$ and $R_{P_{\rm test}}(K)$. Either value may be $+\infty$. This definition imposes no inequality between the two risks: any such comparison requires an additional assumption relating the joint laws or the rule's behavior under them.

## Definition references

[[def-ip-forward-map-and-solution-classes|Forward map, admissible truths, target map, and target metric space]]

[[def-ip-identifiability-and-stability-modulus|Data-only point-estimator convention]]

[[def-ip-learned-reconstruction-estimator|Learned point rules, posterior samplers, and fitting/test-law distinction]]

[[def-measurable-space|Measurable spaces for data and targets]]

[[def-product-sigma-algebra-and-finite-product-sigma-algebras|Product sigma-algebra for joint input-target laws and losses]]

[[def-probability-measure|A joint evaluation law is a probability measure]]

[[def-measurable-function-between-measurable-spaces|Measurability of losses and point rules]]

[[def-measure-kernel-and-probability-kernel|Randomized reconstruction rules are probability kernels]]

[[thm-measurability-of-integration-against-a-kernel|Kernel integration gives a measurable conditional risk]]

[[def-loss-function-and-risk|Statistical risk is expected nonnegative loss under the observation law]]

[Martin, §5.3.1, complete lecture notes](https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf)

[Hoff, §§4.1–4.2, complete lecture notes](https://www2.stat.duke.edu/~pdh10/Teaching/581/LectureNotes/intro.pdf)

[Zheng et al., ICLR 2025 InverseBench paper](https://proceedings.iclr.cc/paper_files/paper/2025/file/e297068f5ec7f483a017948715b591fb-Paper-Conference.pdf)
