---
id: lem-rough-nonpolynomial-activation-universal-on-compact-sets
kind: lemma
title: "Rough nonpolynomial activations are dense on compact sets"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-activation-class-locally-essentially-bounded-ae-continuous
  - def-countable-choice
  - def-single-hidden-layer-network
  - lem-network-approximates-smooth-activation-convolutions
  - lem-polynomial-convolutions-force-activation-polynomial-ae
  - lem-smooth-nonpolynomial-activation-dense-on-compact-intervals
  - thm-convolution-with-a-test-function-is-smooth
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Leshno, Lin, Pinkus, and Schocken, Multilayer Feedforward Networks With a Non-Polynomial Activation Function Can Approximate Any Function, proof of Theorem 1, Steps 3–7"
      url: "https://archive.nyu.edu/bitstream/2451/14329/1/IS-92-13.pdf"
    - title: "Yves Moreau, Dynamical Neural Networks and Composition Networks for System Modeling, Chapter 2 §2.3"
      url: "https://ftp.esat.kuleuven.be/pub/pub/SISTA/ida/reports/98-69.pdf"
---

## Statement

Assume Countable Choice. Let $d\ge1$, let $K\subseteq\mathbb R^d$ be compact, and let $\sigma\in\mathcal M_{\mathrm{pt}}$ not agree almost everywhere with any polynomial. Then the finite scalar single-hidden-layer networks with activation $\sigma$ are uniformly dense in $C(K,\mathbb R)$.

## Statement references

[Leshno et al., proof of Theorem 1, complete smooth-convolution reduction](https://archive.nyu.edu/bitstream/2451/14329/1/IS-92-13.pdf)

[Moreau, Chapter 2 §2.3, universality theorem and proof](https://ftp.esat.kuleuven.be/pub/pub/SISTA/ida/reports/98-69.pdf)

## Facts & Assumptions

**Given:** Countable Choice, $d\ge1$, compact $K\subseteq\mathbb R^d$, $\sigma\in\mathcal M_{\mathrm{pt}}$ nonpolynomial almost everywhere, $f\in C(K,\mathbb R)$, and $\varepsilon>0$.

[A1] Countable Choice is the axiom used in the convolution and distribution suppliers ([[def-countable-choice]]).

[F1] Single-hidden-layer networks allow arbitrary affine hidden inputs and a linear output with bias ([[def-single-hidden-layer-network]]).

[F2] If every compactly supported test convolution of $\sigma$ were polynomial, then $\sigma$ would be polynomial almost everywhere ([[lem-polynomial-convolutions-force-activation-polynomial-ae]]).

[F3] Convolution of a locally integrable function with a test function is smooth ([[thm-convolution-with-a-test-function-is-smooth]]).

[F4] A smooth nonpolynomial activation generates a uniformly dense network family on every compact subset of $\mathbb R^d$ ([[lem-smooth-nonpolynomial-activation-dense-on-compact-intervals]]).

[F5] On a compact interval, the convolution of $\sigma$ with a test function is a uniform limit of finite translates of $\sigma$ ([[lem-network-approximates-smooth-activation-convolutions]]).

[F6] The class $\mathcal M_{\mathrm{pt}}$ consists of activations in $\mathcal M$ that are also pointwise locally bounded ([[def-activation-class-locally-essentially-bounded-ae-continuous]]).

## Proof

1.1 By [F2] and the hypothesis on $\sigma$, choose a test function $\varphi$ supported in $[-1,1]$ for which $g=\sigma*\varphi$ is not a polynomial. By [F3], $g$ is smooth. The activation hypothesis has the content in [F6]. [given, F2, F3, F6, A1, choose]

1.2 By [F4], choose a finite $g$-network $G(x)=c+\sum_{j=1}^m a_jg(w_j\cdot x+b_j)$ with $\sup_{x\in K}|G(x)-f(x)|<\varepsilon/2$. For each $j$ with $a_j\ne0$ and $w_j\ne0$, the set $w_j\cdot K+b_j$ is compact and lies in a compact interval $I_j$. [given, F1, F4, A1, choose]

2.1 By [F5], for each such $j$ choose a finite sum of translates of $\sigma$ uniformly within $\varepsilon/(2(1+\sum_{j=1}^m|a_j|))$ of $g$ on $I_j$. Composing with $w_j\cdot x+b_j$ gives a finite sum of units $\sigma(w_j\cdot x+b_j-t)$; units with $w_j=0$ contribute only constants and are absorbed into the output bias. Summing the finitely many approximants yields a $\sigma$-network $N$ with $\sup_K|N-G|<\varepsilon/2$. [step 1.2, F1, F5, A1, choose, algebra]

3.1 The triangle inequality gives $\sup_K|N-f|\le\sup_K|N-G|+\sup_K|G-f|<\varepsilon$. Hence the $\sigma$-network family is uniformly dense on $K$. [step 1.2, step 2.1, algebra] ∎

