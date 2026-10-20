---
id: ex-translation-equivariance-and-zero-padding
kind: example
title: "Full-lattice translation equivariance and a zero-padding boundary failure"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps: [def-discrete-convolutional-layer, def-group-action-on-feature-maps, thm-group-convolution-equivariance]
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-altered
sources:
  references:
    - title: "Ian Goodfellow, Yoshua Bengio, and Aaron Courville, Deep Learning"
      url: "https://www.deeplearningbook.org/contents/convnets.html"
      locator: "Chapter 9 §§9.2–9.5, translation equivariance and boundary variants."
    - title: "Taco S. Cohen and Max Welling, Group Equivariant Convolutional Networks"
      url: "https://arxiv.org/pdf/1602.07576"
      locator: "§5, translation equivariance, and §6.1, correlation."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Example

Let $f:\mathbb Z^2\to\mathbb R$ have finite support, let $K\subseteq\mathbb Z^2$ be finite, and choose real weights $w_\delta$ for $\delta\in K$. The full-lattice layer $C_wf(p)=\sum_{\delta\in K}f(p+\delta)w_\delta$ commutes with every translation $L_tf(p)=f(p-t)$. A finite-grid boundary can fail: take $D=\{0,e_1\}$ with $e_1=(1,0)$, let $\tau$ swap the two sites and let $Tf=f\circ\tau^{-1}$, extend arrays by zero outside $D$, and define $C_0f(x)=\overline f(x-e_1)$ for $x\in D$. For $f(0)=1$ and $f(e_1)=0$, one obtains $T(C_0f)=(1,0)$ but $C_0(Tf)=(0,0)$, so this zero-padded layer is not equivariant for the swap action on the two-site grid.

## Example references

[[def-discrete-convolutional-layer|discrete convolutional layers and boundary extensions]]

[[def-group-action-on-feature-maps|the action induced on feature maps]]

[[thm-group-convolution-equivariance|full-lattice translation equivariance]]

[Goodfellow, Bengio, and Courville, *Deep Learning*, Chapter 9 §§9.2–9.5](https://www.deeplearningbook.org/contents/convnets.html)

[Cohen and Welling, “Group Equivariant Convolutional Networks,” §§5–6.1](https://arxiv.org/pdf/1602.07576)

## Facts & Assumptions

**Given:** The full-lattice layer and two-site zero-padded layer in the Example. Verify the translation identity and the finite boundary failure.

[F1] [[def-discrete-convolutional-layer]]: A discrete layer has finite receptive field and computes a weighted sum of shifted input values, using its chosen extension outside the input domain.

[F2] [[def-group-action-on-feature-maps]]: For a left action on sites, $(L_uf)(x)=f(u^{-1}\cdot x)$.

[F3] [[thm-group-convolution-equivariance]]: The full-lattice unit-stride cross-correlation is equivariant under the translation group when its sum is finite or absolutely convergent.

## Verification

1.1 The formula $C_wf(p)=\sum_{\delta\in K}f(p+\delta)w_\delta$ is the first-layer translation correlation with finite filter support, so [F3] gives $C_w(L_tf)=L_t(C_wf)$ for every $t\in\mathbb Z^2$. [given, F1, F3]

2.1 Since $\tau$ swaps $0$ and $e_1$, $Tf=(0,1)$. Zero extension gives $C_0f(0)=\overline f(-e_1)=0$ and $C_0f(e_1)=\overline f(0)=1$, so $C_0f=(0,1)$ and $T(C_0f)=(1,0)$. In turn, $C_0(Tf)(0)=\overline{Tf}(-e_1)=0$ and $C_0(Tf)(e_1)=Tf(0)=0$, so $C_0(Tf)=(0,0)$. These outputs differ, proving the stated failure. [given, F1, F2, algebra] ∎
