---
id: ex-stochastic-momentum-experiment
kind: example
title: "A reported stochastic Nesterov experiment is empirical evidence"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - alg-nesterov-accelerated-gradient
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-supplied
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Ilya Sutskever, James Martens, George Dahl, and Geoffrey Hinton, On the Importance of Initialization and Momentum in Deep Learning"
      url: "https://proceedings.mlr.press/v28/sutskever13.pdf"
      locator: "§3, Deep Autoencoders, and Table 1, PDF pp. 3–4."
    - title: "Léon Bottou, Frank E. Curtis, and Jorge Nocedal, Optimization Methods for Large-Scale Machine Learning"
      url: "https://arxiv.org/pdf/1606.04838"
      locator: "§7.1, stochastic momentum discussion, printed p. 69."
---

## Example

Sutskever, Martens, Dahl, and Hinton report experiments on the Curves, MNIST, and Faces deep-autoencoder tasks using sigmoid networks, their sparse initialization, 750,000 parameter updates per trial, minibatches of size 200, and no regularization. They used a slowly increasing momentum schedule capped by $\mu_{\max}$ and selected the best training learning rate for each schedule from $\{0.05,0.01,0.005,0.001,0.0005,0.0001\}$. In Table 1, the Curves training squared error is $0.074$ for their Nesterov variant with $\mu_{\max}=0.999$ and $0.48$ for the zero-momentum SGD baseline. The paper reports training errors only; this setup-specific empirical comparison supplies no general stochastic convergence rate or test-risk guarantee.

## Example references

[[alg-nesterov-accelerated-gradient|Nesterov accelerated gradient algorithm]] The deterministic algorithm evaluates the gradient at the look-ahead point; the reported experiment replaces the full gradient by a minibatch gradient.

[Sutskever, Martens, Dahl, and Hinton, On the Importance of Initialization and Momentum in Deep Learning](https://proceedings.mlr.press/v28/sutskever13.pdf)

[Bottou, Curtis, and Nocedal, Optimization Methods for Large-Scale Machine Learning](https://arxiv.org/pdf/1606.04838)
