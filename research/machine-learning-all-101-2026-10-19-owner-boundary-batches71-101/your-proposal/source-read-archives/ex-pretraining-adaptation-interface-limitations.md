---
id: ex-pretraining-adaptation-interface-limitations
kind: example
title: "A pretraining–adaptation interface with no shift guarantee"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-foundation-model-as-broad-pretraining-and-adaptation
  - def-source-target-distributions-and-shift
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Rishi Bommasani et al., On the Opportunities and Risks of Foundation Models, §§4.3 and 4.10.1–4.10.3"
      url: "https://arxiv.org/html/2108.07258"
    - title: "Stanford CS324, Large Language Models, Adaptation lecture notes"
      url: "https://stanford-cs324.github.io/winter2022/lectures/adaptation/"
---

## Example

Let $\mathsf X=\{a,b\}$ and $\mathsf Y=\{0,1\}$, each with its full power-set sigma-algebra. Give the source and target examples the joint laws $P_S=\delta_{(a,0)}$ and $P_T=\delta_{(b,1)}$, so their input marginals are $\mu_S=\delta_a$ and $\mu_T=\delta_b$. Here $\delta_z$ denotes unit point mass at $z$. Supply the conditional label kernels $K_S(x,\cdot)=\delta_0$ and $K_T(x,\cdot)=\delta_1$ for each $x\in\mathsf X$. This is a finite train/evaluation distribution shift with disjoint input support; it is not covariate shift.

For a downstream training sample $\mathcal D=\{(x_i,y_i)\}_{i=1}^n$ drawn from $P_S$, with $n\ge1$, a simple parameter empirical-risk-minimization formulation chooses $\gamma$ from a nonempty parameter set $\Gamma$ to minimize $\widehat R_{\mathcal D}(\gamma)=n^{-1}\sum_{i=1}^n\ell_{\rm task}(f_\gamma(x_i),y_i)$ when that infimum is attained; $f_\gamma:\mathsf X\to\mathsf Y$ is a task predictor and $\ell_{\rm task}:\mathsf Y\times\mathsf Y\to[0,\infty)$ is a task loss. Fine-tuning is a parameter-based adaptation that updates some or all pretrained parameters using task information. In-context learning instead adds task demonstrations and a test input to the prompt while keeping the pretrained parameters fixed. It is an adaptation route by input conditioning, not empirical-risk minimization over changed model parameters.

The report’s 2021 theory discussion asks when a small population pretraining loss implies a small minimal adaptation loss and identifies that interface as a theory gap involving the two data distributions, objectives, training methods, and architecture. A pretraining cross-entropy scaling fit does not by itself give a downstream task-loss or reliability guarantee for this example. This is a conceptual interface example and makes no empirical comparison of prompting and fine-tuning.

The diagram shows the support points of the two laws with their unit masses. It is only a support illustration; the verification derives the shift condition directly from the singleton set $\{b\}$.

```tikz
\begin{tikzpicture}[>=stealth,scale=0.9,transform shape,every node/.style={draw,rounded corners,align=center,font=\small,minimum width=1.7cm,minimum height=0.7cm}]
  \node (source) at (0,1) {$P_S$};
  \node (sourcepoint) at (3,1) {$(a,0)$};
  \node (target) at (0,-1) {$P_T$};
  \node (targetpoint) at (3,-1) {$(b,1)$};
  \draw[->] (source) -- node[above,draw=none] {mass $1$} (sourcepoint);
  \draw[->] (target) -- node[below,draw=none] {mass $1$} (targetpoint);
\end{tikzpicture}
```

## Example references

[[def-foundation-model-as-broad-pretraining-and-adaptation]]: distinguishes prompt conditioning from parameter-based adaptation and records that the pretraining-loss-to-adaptation-loss relationship is not a general guarantee.

[[def-source-target-distributions-and-shift]]: defines source and target joint laws, input marginals, supplied conditional label kernels, and the additional domination and kernel-equality hypotheses for covariate shift.

[Bommasani et al., *On the Opportunities and Risks of Foundation Models*, §§4.3 and 4.10.1–4.10.3](https://arxiv.org/html/2108.07258): adaptation modes, the optimization-based interface, in-context learning without parameter optimization, and the report’s theory question.

[Stanford CS324, *Large Language Models*, “Adaptation” lecture notes](https://stanford-cs324.github.io/winter2022/lectures/adaptation/): probing, fine-tuning, prompting, and downstream task adaptation distinctions.

## Facts & Assumptions

**Given:** The finite spaces, joint laws, and conditional kernels are as stated in the example. The ERM notation is defined only when the sample is nonempty; no attainment or optimizer-convergence claim is assumed. The pretrained parameter vector is held fixed by the in-context route.

[F1] [[def-foundation-model-as-broad-pretraining-and-adaptation]]: the report’s 2021 interface question is whether small population pretraining loss implies small minimal adaptation loss; the definition states no such general guarantee. It defines in-context learning as prompt conditioning with pretrained parameters fixed.

[F2] [[def-source-target-distributions-and-shift]]: covariate shift requires supplied conditional label kernels that agree outside a $\mu_T$-null set and $\mu_T\ll\mu_S$; the definition does not assert existence of conditional kernels.

[F3] [[def-foundation-model-as-broad-pretraining-and-adaptation]]: in-context learning conditions on a prompt while keeping pretrained parameters fixed; parameter-based adaptation optimizes some or all parameters using task information.

## Verification

1.1 For every nonnegative $g:\mathsf X\times\mathsf Y\to[0,+\infty]$, $\int g\,dP_S=g(a,0)=\int_{\mathsf X}\int_{\mathsf Y}g(x,y)K_S(x,dy)\mu_S(dx)$, and likewise $\int g\,dP_T=g(b,1)=\int_{\mathsf X}\int_{\mathsf Y}g(x,y)K_T(x,dy)\mu_T(dx)$. Thus the supplied kernels and stated marginals give the two joint laws under the source/target convention. [given, F2, construct, algebra]

2.1 For $B=\{b\}$, $\mu_S(B)=0$ while $\mu_T(B)=1$, so $\mu_T\not\ll\mu_S$. This violates a required covariate-shift hypothesis in [F2], regardless of whether the two kernels agree. [given, F2, step 1.1, algebra]

3.1 By [F3], the in-context route keeps the pretrained parameters fixed and changes the prompt input, whereas a parameter-ERM formulation varies $\gamma\in\Gamma$ to minimize the stated sample loss. By [F1], the 2021 report does not supply a general implication from low pretraining loss to low adaptation loss. The finite shift example therefore carries no task-performance guarantee. [given, F1, F3, step 1.1, step 2.1] ∎
