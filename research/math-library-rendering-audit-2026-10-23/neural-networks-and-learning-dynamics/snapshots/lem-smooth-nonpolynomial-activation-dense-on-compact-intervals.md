---
id: lem-smooth-nonpolynomial-activation-dense-on-compact-intervals
kind: lemma
title: "Smooth nonpolynomial activations are dense on compact sets"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-single-hidden-layer-network
  - lem-polynomial-ridge-functions-dense-on-compact-sets
  - thm-heine-borel-rn
  - cor-mean-value-theorem
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
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

[F3] Every compact subset of $\mathbb R^d$ is bounded; each coordinate is bounded by the Euclidean norm, so $|w\cdot x|\le\sum_i|w_i||x_i|$ is bounded on $K$ ([[thm-heine-borel-rn]]).

[F4] A real function continuous on a closed interval and differentiable in its interior satisfies the mean value theorem ([[cor-mean-value-theorem]]).

## Proof

1.1 Fix $k\ge1$ and $w\in\mathbb R^d$. If a smooth function has $g^{(k)}\equiv0$, induction on $k$ shows it is a polynomial of degree at most $k-1$: for $k=1$, [F4] makes it constant; for $k\ge2$, [F4] makes $g^{(k-1)}$ constant $c$, and subtracting $cx^{k-1}/(k-1)!$ reduces to the induction hypothesis. Since $g$ is not a polynomial, choose $b_k$ with $g^{(k)}(b_k)\ne0$. For $\delta\ne0$, repeated application of [F4] gives the finite-difference identity $$\Delta_\delta^k g(y)=\delta^k g^{(k)}(\xi)$$ for some $\xi$ between $y$ and $y+k\delta$, where $\Delta_\delta g(y)=g(y+\delta)-g(y)$. Indeed, the case $k=1$ is [F4]; for the induction step apply [F4] to $x\mapsto\Delta_\delta^{k-1}g(x)$ between $y$ and $y+\delta$, then apply the induction hypothesis to $g'$ at the resulting point. The binomial expansion of $\Delta_\delta^kg(y)$ is $\sum_{j=0}^{k}(-1)^{k-j}\binom{k}{j}g(y+j\delta)$. For $h>0$, define $$R_{k,h}(x)=\frac{1}{g^{(k)}(b_k)h^k}\sum_{j=0}^{k}(-1)^{k-j}\binom{k}{j}g(b_k+jh\,w\cdot x),$$ a finite linear combination of units from [F1]. If $w\cdot x=0$ then $R_{k,h}(x)=0=(w\cdot x)^k$. Otherwise the identity with $\delta=h(w\cdot x)$ gives $$R_{k,h}(x)=\frac{(w\cdot x)^k}{g^{(k)}(b_k)}g^{(k)}(\xi_{x,h}),\qquad |\xi_{x,h}-b_k|\le kh|w\cdot x|.$$ By [F3], choose $M<\infty$ with $|w\cdot x|\le M$ on $K$. Continuity of $g^{(k)}$ at $b_k$ makes $g^{(k)}(\xi_{x,h})\to g^{(k)}(b_k)$ uniformly over $x\in K$ as $h\downarrow0$, since $|\xi_{x,h}-b_k|\le khM$. Therefore $R_{k,h}\to(w\cdot x)^k$ uniformly on $K$. [given, F1, F3, F4, algebra]

2.1 Constants belong to the network family through its output bias. Step 1.1 puts every positive-degree polynomial ridge function in the uniform closure of the family; finite sums of such approximants are still finite networks. By [F2], that closure contains a dense subspace of $C(K,\mathbb R)$. [step 1.1, F1, F2, algebra]

3.1 Given $\varepsilon>0$, first choose a polynomial ridge combination within $\varepsilon/2$ of $f$ by [F2], then approximate its finitely many ridge terms closely enough using step 1.1 that their total error is below $\varepsilon/2$. The resulting one-hidden-layer network is within $\varepsilon$ of $f$. [step 2.1, F2, choose] ∎

