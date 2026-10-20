---
id: lem-smooth-nonpolynomial-activation-dense-on-compact-intervals
kind: lemma
title: "Smooth nonpolynomial activations are dense on compact sets"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-single-hidden-layer-network
  - lem-polynomial-ridge-functions-dense-on-compact-sets
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Leshno, Lin, Pinkus, and Schocken, Multilayer Feedforward Networks With a Non-Polynomial Activation Function Can Approximate Any Function, proof of Theorem 1, Step 2"
      url: "https://archive.nyu.edu/bitstream/2451/14329/1/IS-92-13.pdf"
    - title: "Yves Moreau, Dynamical Neural Networks and Composition Networks for System Modeling, Chapter 2 §2.3"
      url: "https://ftp.esat.kuleuven.be/pub/pub/SISTA/ida/reports/98-69.pdf"
---

## Statement

Let $g:\mathbb R\to\mathbb R$ be infinitely differentiable and not a polynomial. For every $d\ge1$ and compact $K\subseteq\mathbb R^d$, scalar networks with one hidden layer, activation $g$, arbitrary affine hidden inputs and linear output are uniformly dense in $C(K,\mathbb R)$.

## Statement references

[Leshno et al., proof of Theorem 1, smooth-activation finite-difference step](https://archive.nyu.edu/bitstream/2451/14329/1/IS-92-13.pdf)

[Moreau, Chapter 2 §2.3, smooth ridge reduction](https://ftp.esat.kuleuven.be/pub/pub/SISTA/ida/reports/98-69.pdf)

## Facts & Assumptions

**Given:** A smooth nonpolynomial function $g$, an integer $d\ge1$, a compact set $K\subseteq\mathbb R^d$, and $f\in C(K,\mathbb R)$.

[F1] A one-hidden-layer network has arbitrary affine hidden inputs and an output bias ([[def-single-hidden-layer-network]]).

[F2] Polynomial ridge functions $x\mapsto(w\cdot x)^k$ have linear span uniformly dense in $C(K,\mathbb R)$ ([[lem-polynomial-ridge-functions-dense-on-compact-sets]]).

## Proof

1.1 Fix $k\ge1$ and $w\in\mathbb R^d$. Since $g$ is not a polynomial, $g^{(k)}$ is not identically zero; choose $b_k$ with $g^{(k)}(b_k)\ne0$. For $h\ne0$, define $R_{k,h}(x)=\frac{1}{g^{(k)}(b_k)h^k}\sum_{j=0}^{k}(-1)^{k-j}\binom{k}{j}g(b_k+jh\,w\cdot x)$, a finite linear combination of units from [F1]. The repeated-integral formula for the forward difference gives $R_{k,h}(x)=\frac{(w\cdot x)^k}{g^{(k)}(b_k)}\int_{[0,1]^k}g^{(k)}\!\left(b_k+h(w\cdot x)(t_1+\cdots+t_k)\right)dt$. Since $w\cdot x$ is bounded on compact $K$, uniform continuity of $g^{(k)}$ on a compact interval about $b_k$ implies $R_{k,h}\to(w\cdot x)^k$ uniformly on $K$ as $h\to0$. [given, F1, algebra]

2.1 Constants belong to the network family through its output bias. Step 1.1 puts every positive-degree polynomial ridge function in the uniform closure of the family; finite sums of such approximants are still finite networks. By [F2], that closure contains a dense subspace of $C(K,\mathbb R)$. [step 1.1, F1, F2, algebra]

3.1 Given $\varepsilon>0$, first choose a polynomial ridge combination within $\varepsilon/2$ of $f$ by [F2], then approximate its finitely many ridge terms closely enough using step 1.1 that their total error is below $\varepsilon/2$. The resulting one-hidden-layer network is within $\varepsilon$ of $f$. [step 2.1, F2, choose] ∎

