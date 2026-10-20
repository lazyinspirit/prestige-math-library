---
id: lem-chi-square-degree-ratio
kind: lemma
title: A chi-square variable divided by a comparable dimension converges to one
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: [def-axiom-of-choice, def-standard-normal-and-normal-laws, cor-markov-inequality-for-random-variables]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "AC supplies the finite independent standard-normal variables; the moment and Markov argument uses no DC or countable choice."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Wainwright, Sharp Thresholds for High-Dimensional and Noisy Sparsity Recovery Using L1-Constrained Quadratic Programming (Lasso), 2009, Appendix K"
      url: "https://arindam.cs.illinois.edu/courses/s14cs598/paper/spt1.pdf"
---

## Statement

Assume AC. Let $r_k,n_k$ be positive integers with $n_k\to\infty$ and $r_k/n_k\to1$. For each $k$, let $Z_{k,1},\ldots,Z_{k,r_k}$ be independent $N(0,1)$ random variables and set $D_k=\sum_{j=1}^{r_k}Z_{k,j}^2$. Then $D_k/n_k\to1$ in probability.

## Statement references

[Wainwright, Appendix K, chi-square concentration](https://arindam.cs.illinois.edu/courses/s14cs598/paper/spt1.pdf)

## Facts & Assumptions

**Given:** AC, integer sequences $r_k,n_k$ with $n_k\to\infty$ and $r_k/n_k\to1$, and independent standard-normal variables $Z_{k,j}$.

[F1] A standard normal has density $(2\pi)^{-1/2}e^{-x^2/2}$ ([[def-standard-normal-and-normal-laws]]).

[F2] For a nonnegative random variable $U$ and $a>0$, $\mathbb P(U\ge a)\le\mathbb E[U]/a$ ([[cor-markov-inequality-for-random-variables]]).

[A1] AC supplies the finite independent normal coordinates used in the statement ([[def-axiom-of-choice]]).

## Proof

1.1 Integration by parts against [F1], using $\phi'(x)=-x\phi(x)$ and the vanishing Gaussian boundary terms, gives $\mathbb E Z_{k,j}^2=1$ and $\mathbb E Z_{k,j}^4=3$, hence $\operatorname{Var}(Z_{k,j}^2)=2$. [A1, F1, algebra]

2.1 Independence and step 1.1 give $\mathbb E D_k=r_k$ and $\mathbb E(D_k-r_k)^2=2r_k$. Fix $\eta>0$; eventually $|r_k/n_k-1|<\eta/2$, so $|D_k/n_k-1|>\eta$ implies $|D_k-r_k|>\eta n_k/2$. Applying [F2] to $(D_k-r_k)^2$ gives $\mathbb P(|D_k/n_k-1|>\eta)\le8r_k/(\eta^2n_k^2)\to0$, since $r_k/n_k\to1$ and $n_k\to\infty$. This is convergence in probability. [F2, step 1.1, given, algebra] ∎

## Source notes

The cited appendix supplies the Gaussian matrix concentration context. The displayed ratio conclusion is proved here directly from the standard-normal second and fourth moments.
