---
id: def-foundation-model-as-broad-pretraining-and-adaptation
kind: definition
title: "Foundation models as broad-pretraining and adaptation systems"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-source-target-distributions-and-shift
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Rishi Bommasani et al., On the Opportunities and Risks of Foundation Models, abstract and §§1.1–1.2, 4.3, 4.7.1, 4.10.1–4.10.3"
      url: "https://arxiv.org/html/2108.07258"
    - title: "Stanford CS324, Large Language Models, Adaptation lecture notes"
      url: "https://stanford-cs324.github.io/winter2022/lectures/adaptation/"
---

## Definition

In the usage of the 2021 Bommasani et al. report, a **foundation model** is a model trained on broad data, generally using self-supervision at scale, that can be adapted to a wide range of downstream tasks. Here a downstream task is a use of the trained model for a task after pretraining; adaptation is a procedure that supplies task information by conditioning the model on new input or by changing some or all of its parameters. A self-supervised objective obtains its training target from the input data or its structure rather than from a separate human label for every training example. “Broad” data, “at scale,” and a “wide range” of tasks are qualitative descriptors in this definition; it imposes no numerical data-size or parameter-count threshold and guarantees no task performance.

The report’s term is not restricted to language models or to a particular architecture. It includes models for language, vision, robotics, and multimodal inputs; a multimodal model uses more than one data modality, such as text and images. A prompt is task instructions or demonstrations added to a model’s input. In-context learning conditions on such a prompt and a test input while keeping the pretrained parameters fixed. Parameter-based adaptation instead optimizes some or all parameters using task information. These are distinct adaptation routes.

The report frames foundation models as one component in a larger ecosystem that runs from human data creation and data curation through training and adaptation to deployment and monitoring. Shared models can create a single point of failure: defects, vulnerabilities, or sensitive information learned during pretraining may affect multiple adapted applications. These are risks to assess in a particular system, not inevitable outcomes.

For labeled source and target environments, let $(\mathsf X,\Sigma_X)$ and $(\mathsf Y,\Sigma_Y)$ be measurable input and label spaces, and let $P_S$ and $P_T$ be joint probability laws on $(\mathsf X\times\mathsf Y,\Sigma_X\otimes\Sigma_Y)$. Their input marginals are $\mu_D(A)=P_D(A\times\mathsf Y)$ for $D\in\{S,T\}$. A supplied conditional label kernel $K_D$ is a probability kernel from the input space to the label space such that, for every nonnegative product-measurable $g$, $\int g(x,y)P_D(d(x,y))=\int_{\mathsf X}\int_{\mathsf Y}g(x,y)K_D(x,dy)\mu_D(dx)$. Supplying $K_D$ is part of the description; no existence is asserted. Covariate shift is the stronger condition that $K_S(x,\cdot)=K_T(x,\cdot)$ outside a set of $\mu_T$-measure zero and $\mu_T\ll\mu_S$. Foundation-model status imposes no relation of this kind between pretraining and downstream task distributions.

The report’s 2021 theory discussion asks under what conditions a small population pretraining loss implies a small minimal adaptation loss. It identifies this pretraining-adaptation interface as a theory gap involving the pretraining and task distributions, objectives, training methods, and model architecture. The definition makes no general transfer, capability-emergence, or reliability claim from a pretraining loss.

The diagram separates the pretraining stage from two adaptation routes. Its arrows denote data flow only: the prompting route holds the pretrained parameters fixed, while the optimization route changes an allowed parameter set. Neither route in the diagram asserts a performance guarantee.

```tikz
\begin{tikzpicture}[>=stealth,scale=0.72,transform shape,every node/.style={draw,rounded corners,align=center,text width=2.5cm,font=\scriptsize,minimum height=0.8cm}]
  \node (data) at (0,0) {Broad data and curation};
  \node (pre) at (3,0) {Pretraining objective};
  \node (fm) at (6,0) {Pretrained model $\theta_{\rm FM}$};
  \node (prompt) at (9,-1.2) {Prompt conditioning; $\theta_{\rm FM}$ fixed};
  \node (opt) at (9,1.2) {Task-loss optimization over $\gamma\in\Gamma$};
  \node (out) at (12,0) {Downstream model or system};
  \draw[->] (data) -- (pre);
  \draw[->] (pre) -- (fm);
  \draw[->] (fm) -- (prompt);
  \draw[->] (fm) -- (opt);
  \draw[->] (prompt) -- (out);
  \draw[->] (opt) -- (out);
\end{tikzpicture}
```

## Definition references

[[def-source-target-distributions-and-shift]]: supplies the source/target joint-law convention, input marginals, and the exact additional hypotheses for covariate shift; this definition repeats the relevant content and does not assert conditional-kernel existence.

[Bommasani et al., *On the Opportunities and Risks of Foundation Models*, abstract and §§1.1–1.2, 4.3, 4.7.1, 4.10.1–4.10.3](https://arxiv.org/html/2108.07258): report definition, ecosystem, adaptation modes, risk framing, and the dated pretraining-adaptation theory gap.

[Stanford CS324, *Large Language Models*, “Adaptation” lecture notes](https://stanford-cs324.github.io/winter2022/lectures/adaptation/): task adaptation, prompting, probing, fine-tuning, and lightweight fine-tuning distinctions.
