---
id: lem-polynomial-ridge-functions-dense-on-compact-sets
kind: lemma
title: "Polynomial ridge functions are dense on compact sets"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: [thm-real-stone-weierstrass-general]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Leshno, Lin, Pinkus, and Schocken, Multilayer Feedforward Networks With a Non-Polynomial Activation Function Can Approximate Any Function, proof of Theorem 1, Step 2"
      url: "https://archive.nyu.edu/bitstream/2451/14329/1/IS-92-13.pdf"
    - title: "Moreau, Dynamical Neural Networks and Composition Networks for System Modeling, Chapter 2 §2.3"
      url: "https://ftp.esat.kuleuven.be/pub/pub/SISTA/ida/reports/98-69.pdf"
---

## Statement

Let $d\ge1$ and let $K\subseteq\mathbb R^d$ be compact. Let $\mathcal R_d$ be the real linear span of the functions $x\mapsto(w\cdot x)^k$ with $w\in\mathbb R^d$ and $k\in\mathbb N_0$, using the convention $s^0=1$ for every real $s$. Then the restrictions $\mathcal R_d|_K$ are uniformly dense in $C(K,\mathbb R)$.

## Statement references

[Theorem 2.6 and Lemma 2.9: polarization/ridge reduction and compact polynomial approximation](https://ftp.esat.kuleuven.be/pub/pub/SISTA/ida/reports/98-69.pdf)

## Facts & Assumptions

**Given:** An integer $d\ge1$ and a compact set $K\subseteq\mathbb R^d$.

[F1] Every unital point-separating real function algebra on a compact Hausdorff space is uniformly dense in the continuous real-valued functions ([[thm-real-stone-weierstrass-general]]).

## Proof

1.1 Fix $k\ge1$ and linear forms $\ell_j(x)=v_j\cdot x$ for $1\le j\le k$. Expanding the powers and summing signs gives the polarization identity $\prod_{j=1}^{k}\ell_j(x)=\frac{1}{2^k k!}\sum_{\epsilon\in\{-1,1\}^k}(\prod_{j=1}^{k}\epsilon_j)(\sum_{j=1}^{k}\epsilon_j\ell_j(x))^k$. Indeed, in the multinomial expansion, a monomial $\prod_j\ell_j^{r_j}$ has sign sum $\prod_j\sum_{\epsilon_j=\pm1}\epsilon_j^{r_j+1}$, which is zero unless every $r_j$ is odd. Since $\sum_jr_j=k$, the only surviving tuple is $r_1=\cdots=r_k=1$, with coefficient $2^k k!$. Thus every product of $k$ linear forms lies in $\mathcal R_d$. [given, algebra]

2.1 Every coordinate monomial $x_1^{\alpha_1}\cdots x_d^{\alpha_d}$ of positive total degree $k$ is a product of $k$ coordinate linear forms, with $x_i$ repeated $\alpha_i$ times. Step 1.1 puts it in $\mathcal R_d$. Constants lie in $\mathcal R_d$ by $k=0$, so every real polynomial restricts to an element of $\mathcal R_d|_K$. [step 1.1, algebra]

3.1 The restrictions to $K$ of real polynomials form a unital real function algebra: sums, scalar multiples, and products are polynomials, and the constant-one polynomial is a unit. If $x,y\in K$ are distinct, some coordinate differs, so the corresponding coordinate polynomial separates them. By [F1] these polynomial restrictions are uniformly dense in $C(K,\mathbb R)$. Since step 2.1 places them inside $\mathcal R_d|_K$, the latter is dense as well. [step 2.1, F1, algebra] ∎

