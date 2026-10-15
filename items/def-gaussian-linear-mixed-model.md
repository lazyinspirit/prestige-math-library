---
id: def-gaussian-linear-mixed-model
kind: definition
title: "Gaussian branch of the linear mixed model"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-linear-mixed-model
  - def-multivariate-normal-law
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Fan Li, STA610 Lecture 6: Linear Mixed-Effects Models, PDF pp. 4–5"
      url: "https://stat.duke.edu/~fl35/teaching/610-26F/Lec6-LME.pdf"
    - title: "Duchateau, Janssen, and Rowlands, Linear Mixed Models, Chapter 2 §§2.3.3–2.4.2"
      url: "https://biometrics.ilri.org/Publication/Full%20Text/Linear_Mixed_Models/Chapter2_2_1to2_2.htm"
---

## Definition

The **Gaussian branch** of [[def-linear-mixed-model]] adds the following assumption: under the Axiom of Choice, the concatenated vector
$$W=\begin{pmatrix}b\\ \varepsilon\end{pmatrix}$$
has the multivariate-normal law $N_{q+n}(0,\operatorname{diag}(G,R))$ of [[def-multivariate-normal-law]]. Thus the full latent-effect and residual vector is jointly Gaussian. This is an additional branch; the moment-only definition and the covariance identity do not assume Gaussianity.

## Remarks

This definition carries AC because the current multivariate-normal supplier does. Singular $G$ or $R$ is permitted by that supplier; any later inverse or density requires a separate positive-definiteness hypothesis.
