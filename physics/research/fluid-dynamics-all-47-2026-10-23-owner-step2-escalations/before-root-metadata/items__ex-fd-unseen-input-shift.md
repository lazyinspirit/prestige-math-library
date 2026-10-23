---
id: ex-fd-unseen-input-shift
kind: example
title: Unseen input invalidates a training-law guarantee
status: draft
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
dependency_level: 4
domain: mathematics
library: mathematics
deps:
  - prop-fd-surrogate-law-shift-observable
dependency_roles:
  prop-fd-surrogate-law-shift-observable: mathematical-premise
justified_by: []
forward_refs: []
proof_strategy: direct
axiom_use: "No choice principle is used."
physical_scope: null
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Masashi Sugiyama, Matthias Krauledat, and Klaus-Robert Müller, Covariate Shift Adaptation by Importance Weighted Cross Validation"
      url: "https://jmlr.csail.mit.edu/papers/volume8/sugiyama07a/sugiyama07a.pdf"
      locator: "§2.1, printed pp. 986–987 / PDF pp. 2–3: covariate-shift setup and finite, known density-ratio assumption."
    - title: "Dive into Deep Learning, Environment and Distribution Shift"
      url: "https://d2l.smola.org/chapter_linear-classification/environment-and-distribution-shift.html"
      locator: "§3.7.3.1, Covariate Shift Correction, and Exercise 2(b–c): support-overlap condition and infinite-weight case."
---

## Example

Let $d_s=2$, $D=(0,1)^2$, and $I=[0,1]$. Let $X$ consist of the constant product-measurable fields $c e_1:D\times I\to\mathbb R^2$, where $c\in\mathbb R$ and $e_1=(1,0)$, with norm $\|c e_1\|_X=|c|$ and its Borel $\sigma$-algebra; thus $X$ is isometric to $\mathbb R$ and is a separable real Banach space. Let $Z=\{0,1\}$ with its power-set $\sigma$-algebra and define $S(z)=0$, $\widetilde S(0)=0$, $\widetilde S(1)=M e_1$ for arbitrary $M>0$, and $J(c e_1)=c$, which is $1$-Lipschitz. These finite-range maps are measurable and strongly measurable. For $z\in Z$, define the Dirac law $\delta_z$ by $\delta_z(E)=1$ if $z\in E$ and $0$ otherwise. Take training law $\mu=\delta_0$ and target law $\nu=\delta_1$. Then the training-law mean-square state error is zero, while the target-law observable bias is $M$. The target law is not absolutely continuous with respect to the training law, so the bounded-density hypothesis of the shift certificate fails; as $M$ is arbitrary, training-law error alone supplies no finite uniform target-bias bound.

## Example references

[Masashi Sugiyama, Matthias Krauledat, and Klaus-Robert Müller, “Covariate Shift Adaptation by Importance Weighted Cross Validation,” §2.1](https://jmlr.csail.mit.edu/papers/volume8/sugiyama07a/sugiyama07a.pdf).

[Dive into Deep Learning, §3.7.3.1, “Covariate Shift Correction”](https://d2l.smola.org/chapter_linear-classification/environment-and-distribution-shift.html).

## Facts & Assumptions

**Given:** The field domain $D\times I$, the normed space $X$, the finite input set and its power-set $\sigma$-algebra, the maps $S,\widetilde S$, the observable $J$, the laws $\mu,\nu$, and $M>0$ stated in the Example.

[A1] $\mu=\delta_0$ and $\nu=\delta_1$ are probability measures on $Z$.

[F1] [[prop-fd-surrogate-law-shift-observable]]: the stated target-bias certificate requires a target density $g\le C$ with respect to the training law and a population mean-square training error bound.

## Verification

**Given:** The data in [A1] and the Example.

1.1 The norm identifies $X$ isometrically with $\mathbb R$, the maps themselves are finite-valued measurable simple maps and hence strongly measurable, and $J$ is $1$-Lipschitz; thus the state-space and measurability hypotheses of [F1] hold. Under $\mu=\delta_0$, both $S(0)$ and $\widetilde S(0)$ equal zero, so $\mathbb E_\mu\|S-\widetilde S\|_X^2=0$; the separate state second moments are also finite because the maps have finite range. [given, A1, F1, algebra]

2.1 Under $\nu=\delta_1$, $J(S(1))=0$ and $J(\widetilde S(1))=M$, hence $|\mathbb E_\nu J(S)-\mathbb E_\nu J(\widetilde S)|=M$. Since $M$ is arbitrary, the target bias can be arbitrarily large while the training-law error remains zero. [given, A1, step 1.1, algebra]

3.1 The set $\{1\}$ has $\mu$-measure zero and $\nu$-measure one. If a target density $g$ existed, then $\nu(\{1\})=\int_{\{1\}}g\,d\mu=0$, a contradiction; hence $\nu\not\ll\mu$ and the density hypothesis in [F1] fails. [given, A1, F1, step 2.1] ∎
