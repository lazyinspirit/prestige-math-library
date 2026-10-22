---
id: lem-ip-bpdn-minimizer-exists
kind: lemma
title: "A feasible finite-dimensional BPDN problem attains its minimum"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
axiom_base: "ZF only; finite-dimensional real analysis and exact algebra."
deps:
  - def-ip-nullspace-property
  - def-p-norms-on-rn
  - lem-p-norms-are-norms-and-induce-the-published-metrics
  - lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - lem-finite-sum-laws
  - lem-of-square-monotone
  - def-canonical-natural
  - lem-of-naturals-positive
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Simon Foucart and Holger Rauhut, A Mathematical Introduction to Compressive Sensing, §4.3"
      url: "https://www.mat.uniroma2.it/~speleers/cime2024/material/book_rauhut.pdf"
---

## Statement

Let $m,n\in\mathbb N$ with $m,n\ge1$, let $A\in\mathbb R^{m\times n}$ act in the standard finite coordinate bases, with labels $j=1,\ldots,n$ corresponding to library coordinates $j-1$, $y\in\mathbb R^m$, and $\epsilon\ge0$. If
$$F:=\{z\in\mathbb R^n:\|Az-y\|_2\le\epsilon\}$$
is nonempty, then $z\mapsto\|z\|_1$ attains a minimum on $F$.

## Statement references

[[def-ip-nullspace-property|Finite matrix action and coordinate conventions]]

[[def-p-norms-on-rn|Finite-dimensional one- and two-norms]]

[[lem-p-norms-are-norms-and-induce-the-published-metrics|Norm properties of the finite-dimensional norms]]

[[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric|Continuity and norm comparison on finite-dimensional spaces]]

[[thm-cauchy-schwarz-and-the-euclidean-norm|Cauchy–Schwarz for finite coordinate lists]]

[[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values|Compactness and attainment of extrema in finite-dimensional real spaces]]

[Foucart and Rauhut, *A Mathematical Introduction to Compressive Sensing*, §4.3, the quadratically constrained basis-pursuit problem](https://www.mat.uniroma2.it/~speleers/cime2024/material/book_rauhut.pdf)

## Facts & Assumptions

**Given:** Integers $m,n\ge1$, a real matrix $A\in\mathbb R^{m\times n}$, a vector $y\in\mathbb R^m$, a radius $\epsilon\ge0$, and a nonempty set $F=\{z:\|Az-y\|_2\le\epsilon\}$.

[F1] [[def-ip-nullspace-property]]: $(Au)_i=\sum_{j=1}^n A_{ij}u_j$ under the one-based labels identified with library coordinate $j-1$.

[F2] [[def-p-norms-on-rn]]: $\|u\|_1=\sum_{j=1}^n|u_j|$ and $\|u\|_2=(\sum_{j=1}^n|u_j|^2)^{1/2}$.

[F3] [[lem-p-norms-are-norms-and-induce-the-published-metrics]] and [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]: for $n\ge1$, $\|\cdot\|_2$ is a positive-definite norm, and every norm $N$ satisfies $|N(u)-N(v)|\le N(u-v)$, $\|u\|_1\le\sqrt{\iota(n)}\|u\|_2$, and $\|u\|_2\le\|u\|_1$.

[F4] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: for finite real coordinate lists, $|\sum_j a_jb_j|\le(\sum_j a_j^2)^{1/2}(\sum_j b_j^2)^{1/2}$.

[F5] [[lem-finite-sum-laws]]: finite sums preserve termwise inequalities and sums of nonnegative terms are nonnegative.

[F6] [[lem-of-square-monotone]]: for nonnegative reals $a,b$, $a^2\le b^2$ implies $a\le b$.

[F7] [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]: in $\mathbb R^n$ with $n\ge1$, closed bounded sets are compact, and every continuous real-valued function on a nonempty compact set attains its minimum and maximum; this is a ZF theorem.

[F8] [[def-canonical-natural]]: $\iota(n)$ is the canonical real image of the natural $n$ in scalar expressions.

[F9] [[lem-of-naturals-positive]]: because $n\ge1$, $\iota(n)>0$.

## Proof
1.1 Put $M_A=(\sum_{i=1}^m\sum_{j=1}^n A_{ij}^2)^{1/2}$. For $u,v\in\mathbb R^n$, rowwise Cauchy–Schwarz [F4] and finite-sum monotonicity [F5] give $\|A(u-v)\|_2^2=\sum_{i=1}^m\left(\sum_{j=1}^n A_{ij}(u_j-v_j)\right)^2\le M_A^2\|u-v\|_2^2.$ By [F6], $\|A(u-v)\|_2\le M_A\|u-v\|_2$. The reverse triangle inequality [F3] now gives $\big|\|Au-y\|_2-\|Av-y\|_2\big|\le\|A(u-v)\|_2\le M_A\|u-v\|_2.$ If $M_A=0$, the displayed bound gives $\|A(u-v)\|_2=0$ for every $u,v$; positive definiteness in [F3] gives $A(u-v)=0$, so the residual function is constant and nonemptiness gives $F=\mathbb R^n$. If $M_A>0$ and $z\notin F$, the positive gap $d=\|Az-y\|_2-\epsilon$ shows that every $u$ with $\|u-z\|_2<d/(2M_A)$ also lies outside $F$. Thus $F$ is closed. [given, F1, F2, F3, F4, F5, F6, construct, algebra]

2.1 Fix one $z_0\in F$ and set $K=F\cap\{z:\|z\|_1\le\|z_0\|_1\}$. This set is nonempty because it contains $z_0$. If $\|z\|_1>\|z_0\|_1$, the positive gap $d=\|z\|_1-\|z_0\|_1$ and [F3] show that every $u$ with $\|u-z\|_2<d/(2\sqrt{\iota(n)})$ still has $\|u\|_1>\|z_0\|_1$; the denominator is positive by [F9]. Thus the second factor is closed, and $K$ is closed by step 1.1. It is bounded since [F3] gives $\|z\|_2\le\|z\|_1\le\|z_0\|_1$ for every $z\in K$. By [F7], $K$ is compact. [given, F2, F3, F7, F8, F9, step 1.1, choose]

3.1 The function $z\mapsto\|z\|_1$ is continuous by [F3], so [F7] gives a minimizer on the nonempty compact set $K$. Every feasible point outside $K$ has $\|z\|_1>\|z_0\|_1$, while the minimum on $K$ is at most $\|z_0\|_1$. Hence this minimum is global on $F$. The proof selects only one witness $z_0$ and uses the stated ZF compactness theorem; no choice axiom is used. [given, F3, F7, step 2.1, algebra] ∎