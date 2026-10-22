---
id: lem-ip-best-s-term-l1-sparse-vector-formulation
kind: lemma
title: "The coordinate-tail and sparse-vector formulations of best s-term error agree"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
axiom_base: "No additional axiom; finite coordinate sums and a finite attained minimum."
deps:
  - def-ip-best-s-term-l1-error
  - def-p-norms-on-rn
  - lem-finite-sum-laws
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Simon Foucart and Holger Rauhut, A Mathematical Introduction to Compressive Sensing, §2.1 Definition 2.2"
      url: "https://www.mat.uniroma2.it/~speleers/cime2024/material/book_rauhut.pdf"
    - title: "Shahar Mendelson, Holger Rauhut, and Rachel Ward, Improved Bounds for Sparse Recovery from Subsampled Random Convolutions, §2.1"
      url: "https://www.mathc.rwth-aachen.de/~rauhut/files/circulant-independent.pdf"
---

## Statement

Let $n,s\in\mathbb N$ with $n\ge1$ and $1\le s\le n$, and let $x\in\mathbb R^n$ use the one-based labels $[n]=\{1,\ldots,n\}$, with label $j$ corresponding to library coordinate $j-1$. For $T\subseteq[n]$, $x_{T^c}$ agrees with $x$ off $T$ and is zero on $T$. Define $\sigma_s(x)_1:=\min\{\|x_{T^c}\|_1:T\subseteq[n],\ |T|\le s\}$. Define $\operatorname{supp}(z):=\{j\in[n]:z_j\ne0\}$ using the one-based labels $[n]=\{1,\ldots,n\}$, with label $j$ corresponding to library coordinate $j-1$. Then
$$\sigma_s(x)_1=\min\{\|x-z\|_1:z\in\mathbb R^n,\ |\operatorname{supp}(z)|\le s\},$$
and this sparse-vector minimum is attained.

## Statement references

[[def-ip-best-s-term-l1-error|Finite minimum of coordinate-tail errors]]

[[def-p-norms-on-rn|Finite-dimensional one-norm]]

[[lem-finite-sum-laws|Termwise monotonicity of finite sums]]

[Foucart and Rauhut, *A Mathematical Introduction to Compressive Sensing*, §2.1 Definition 2.2, printed p. 42](https://www.mat.uniroma2.it/~speleers/cime2024/material/book_rauhut.pdf)

[Mendelson, Rauhut, and Ward, *Improved Bounds for Sparse Recovery from Subsampled Random Convolutions*, §2.1, printed p. 5](https://www.mathc.rwth-aachen.de/~rauhut/files/circulant-independent.pdf)

## Facts & Assumptions

**Given:** A vector $x\in\mathbb R^n$, positive integers $n,s$ with $1\le s\le n$, and the coordinate-tail quantity $\sigma_s(x)_1$.

[F1] [[def-ip-best-s-term-l1-error]]: $\sigma_s(x)_1=\min\{\|x_{T^c}\|_1:T\subseteq[n],\ |T|\le s\}$, and the finite nonempty indexing family has a minimizing member.

[F2] [[def-p-norms-on-rn]]: $\|x-z\|_1=\sum_{j=1}^n|x_j-z_j|$.

[F3] [[lem-finite-sum-laws]], clause 4: finite sums preserve termwise inequalities, and a finite sum of nonnegative terms is nonnegative.

## Proof

1.1 Let $z$ be any vector with $|\operatorname{supp}(z)|\le s$, and put $T=\operatorname{supp}(z)$. For every $j\in T^c$, $z_j=0$, so $|x_j-z_j|=|(x_{T^c})_j|$. For every $j\in T$, $|(x_{T^c})_j|=0\le|x_j-z_j|$. Thus [F2,F3], applied in the original coordinate order, give $\|x-z\|_1=\sum_{j=1}^n|x_j-z_j|\ge\sum_{j=1}^n|(x_{T^c})_j|=\|x_{T^c}\|_1\ge\sigma_s(x)_1$, where the final inequality follows from [F1] because $|T|\le s$. Thus every admissible sparse vector has error at least $\sigma_s(x)_1$. [given, F1, F2, F3, algebra]

2.1 By [F1], choose a minimizing set $T_0\subseteq[n]$ with $|T_0|\le s$. Define $z_0=(x_{T_0})$, equal to $x$ on $T_0$ and zero on $T_0^c$. Define $z_0$ coordinatewise by $(z_0)_j=x_j$ for $j\in T_0$ and $(z_0)_j=0$ otherwise. Then $\operatorname{supp}(z_0)\subseteq T_0$, so it is admissible, and direct coordinate summation gives $\|x-z_0\|_1=\|x_{T_0^c}\|_1=\sigma_s(x)_1.$ Together with step 1.1 this proves equality and attainment. The proof chooses one witness from a finite nonempty set and uses no choice axiom. [given, F1, F2, step 1.1, choose, algebra] ∎
