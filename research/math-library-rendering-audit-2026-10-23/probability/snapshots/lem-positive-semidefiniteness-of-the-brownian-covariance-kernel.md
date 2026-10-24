---
id: lem-positive-semidefiniteness-of-the-brownian-covariance-kernel
kind: lemma
title: "Positive semidefiniteness of the Brownian covariance kernel"
status: published
origin: pipeline
deps: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, Section 7.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "Perla Sousi, Advanced Probability, Section 6.2"
      url: "https://www.statslab.cam.ac.uk/~ps422/mynotes.pdf"
---

## Statement

The kernel $C(s,t)=\min(s,t)$ on $[0,\infty)$ is symmetric and positive
semidefinite: for every integer $n\ge0$, times $t_1,\ldots,t_n\ge0$, and
coefficients $a_1,\ldots,a_n\in\mathbb R$,
$$\sum_{i,j=1}^n a_i a_j\min(t_i,t_j)\ge0.$$

## Facts & Assumptions

**Given:** A finite time list and coefficient list as in the Statement.

## Proof

**Proof technique:** direct.

1.1 Symmetry is immediate from $\min(s,t)=\min(t,s)$. If $n=0$, the displayed quadratic form is the empty sum $0$. Now take $n\ge1$, let $0=r_0<r_1<\cdots<r_k$ be the increasing list of the distinct positive values among $t_1,\ldots,t_n$, and put $A_\ell=\sum_{i:t_i\ge r_\ell}a_i$. The list is finite and uniquely fixed by the given times; no choice function is used. [given]

2.1 For every $i,j$, $$\min(t_i,t_j)=\sum_{\ell=1}^k(r_\ell-r_{\ell-1})\mathbf1_{\{t_i\ge r_\ell\}}\mathbf1_{\{t_j\ge r_\ell\}}.$$ Indeed, if the smaller of $t_i,t_j$ is $0$ both sides vanish, while if it is $r_m$ the right side telescopes to $\sum_{\ell=1}^m(r_\ell-r_{\ell-1})=r_m$. [step 1.1, algebra]

3.1 Substituting step 2.1 and rearranging only finite sums gives $$\sum_{i,j=1}^n a_i a_j\min(t_i,t_j)=\sum_{\ell=1}^k(r_\ell-r_{\ell-1})\left(\sum_{i:t_i\ge r_\ell}a_i\right)^2=\sum_{\ell=1}^k(r_\ell-r_{\ell-1})A_\ell^2.$$ Every weight is positive and every square is nonnegative, so the quadratic form is nonnegative. This includes coincident times, zero times, zero coefficients, and the case $k=0$, where the last sum is empty. [step 1.1, step 2.1, algebra] ∎

## Source notes

Durrett and Sousi use the Brownian covariance kernel in their Gaussian constructions. The standard identity $\min(s,t)=\int\mathbf1_{[0,s]}\mathbf1_{[0,t]}$ interprets it as a Gram kernel; step 2.1 evaluates that identity as a finite level sum, avoiding an unnecessary measure construction and therefore remaining choice-free.
