---
id: alg-zero-shot-prompt-classification
kind: algorithm
title: "Zero-shot prompt classification"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - cor-exponential-is-a-bijection-onto-positive-reals
  - def-real-exponential-function-and-e
  - def-symmetric-image-text-contrastive-loss
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Alec Radford et al., Learning Transferable Visual Models From Natural Language Supervision"
      url: "https://arxiv.org/pdf/2103.00020"
    - title: "Machine Learning II, Lecture notes — 2021 Clip"
      url: "https://csci4052u.science.ontariotechu.ca/generative_models/2021_clip/notes.html"
---

## Definition

Fix image and text encoder maps $f_\theta:\mathsf X\to\mathbb R^d$ and $g_\phi:\mathsf T\to\mathbb R^d$ into one shared embedding space, and a real log-scale $\tau$ with $s:=\exp(\tau)>0$. The inputs are an image $x\in\mathsf X$, an ordered nonempty list of distinct class descriptions $C=(c_1,\ldots,c_K)$, and a finite nonempty list of prompt templates $T=(t_1,\ldots,t_M)$, where each $t_m$ maps a class description to a text input. The admissible input conditions are $f_\theta(x)\ne0$, $g_\phi(t_m(c_k))\ne0$ for every $k,m$, and a nonzero average text embedding for every class.

1. Normalize the image embedding: $u:=f_\theta(x)/\|f_\theta(x)\|_2$.

2. For each class $c_k$ and template $t_m$, form the text embedding $v_{km}:=g_\phi(t_m(c_k))/\|g_\phi(t_m(c_k))\|_2$.

3. Average the normalized prompt embeddings in the shared embedding space and normalize the average to obtain the class prototype $q_k:=\left(\frac1M\sum_{m=1}^M v_{km}\right)\big/\left\|\frac1M\sum_{m=1}^M v_{km}\right\|_2$. This is prompt-template averaging; it averages embeddings before classification, not class probabilities.

4. For each class compute the scaled similarity score $z_k:=s\langle u,q_k\rangle$ and softmax probability $p_k:=\exp(z_k)/\sum_{r=1}^K\exp(z_r)$.

5. Return the vector $(p_1,\ldots,p_K)$ and class $c_{k^*}$, where $k^*$ is the least index maximizing $z_k$.

The returned classifier is zero-shot in the precise sense that no labeled examples from the target classification dataset are used to fit its class prototypes or classifier. The encoder maps, log-scale, class descriptions, and templates are fixed inputs to this inference procedure; it performs no training or parameter update. The procedure makes no accuracy or distribution-generalization guarantee.

## Definition references

[Radford et al., §3.1.2: text-class candidates, scaled cosine scores, and softmax classification; §3.1.4: prompt engineering and embedding-space ensembling](https://arxiv.org/pdf/2103.00020)

[Machine Learning II lecture notes, “Zero-shot transfer” and “Prompt engineering”/“Prompt ensembling”](https://csci4052u.science.ontariotechu.ca/generative_models/2021_clip/notes.html)

[[def-symmetric-image-text-contrastive-loss]]: supplies the shared image/text embedding space, normalized inner-product score convention, and positive learned exponential scale.

[[def-real-exponential-function-and-e]]: defines the real exponential used in the logit scale and softmax.

[[cor-exponential-is-a-bijection-onto-positive-reals]]: gives positivity of exponential scores and softmax denominators.
