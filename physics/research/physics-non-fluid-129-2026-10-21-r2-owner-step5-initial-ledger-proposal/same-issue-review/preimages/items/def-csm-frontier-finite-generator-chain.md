---
id: def-csm-frontier-finite-generator-chain
kind: definition
title: "Finite-state generator chain"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-axiom-of-choice
dependency_roles:
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Aldous and James Allen Fill, Reversible Markov Chains and Random
        Walks on Graphs, complete author-hosted book"
      url: "https://www.stat.berkeley.edu/~aldous/RWG/book.pdf"
      locator: "Chapter 2, Section 2.1.2, printed pp. 25–27: finite continuous-time
        rate matrices, generator convention, jump chain, and exponential holding
        times."
    - title: "James R. Norris, Advanced Probability, complete author-hosted lecture
        notes"
      url: "https://www.statslab.cam.ac.uk/~jrn10/Lectures/ap.pdf"
      locator: "Section 4.1, printed pp. 25–26: càdlàg paths; Section 4.3, printed pp.
        26–27: all-pairs continuous-time Markov martingales."
verification:
  precheck: pending
justified_by:
  - lem-csm-frontier-finite-generator-chain-existence
---

## Definition

Let $E=\{1,\ldots,m\}$ for a finite integer $m\ge1$. A rate matrix on $E$ is a real matrix $L=(L_{ij})_{i,j\in E}$ such that $L_{ij}\ge0$ for $i\ne j$ and $\sum_{j\in E}L_{ij}=0$ for every $i$. Write $\lambda_i=\sum_{j\ne i}L_{ij}$, so $L_{ii}=-\lambda_i$. The row convention acts on a column observable $f:E\to\mathbb R$ by $(Lf)(i)=\sum_jL_{ij}f(j)$; a row probability vector evolves by right multiplication.

Fix an initial probability vector $\nu=(\nu_i)_{i\in E}$, meaning $\nu_i\ge0$ and $\sum_{i\in E}\nu_i=1$; initial law $\nu$ means $\mathbb P(Y_0=i)=\nu_i$ for every $i\in E$. Put $q=\max_i\lambda_i$. If $q=0$, then $L=0$ and set $N_t=0$ for every $t\ge0$ and let the associated realization be the constant process $X_t=Y_0$ with $Y_0\sim\nu$. If $q>0$, put $R=I+L/q$, a stochastic matrix. A uniformized realization consists of a probability space carrying a discrete-time Markov sequence $(Y_n)_{n\ge0}$ with initial law $\nu$ and transition matrix $R$, and independent random variables $(W_n)_{n\ge1}$ that are independent of the entire sequence $Y$ and satisfy $\mathbb P(W_n>u)=e^{-qu}$ for $u\ge0$. Here a discrete-time Markov sequence with transition matrix $R$ means that
$$\mathbb P(A\cap\{Y_{n+1}=j\})=\mathbb E[\mathbf1_A R_{Y_nj}]$$
for every $n\ge0$, $j\in E$, and $A\in\sigma(Y_0,\ldots,Y_n)$. Each $W_n$ therefore has the exponential distribution of rate $q$; in particular its mean is $q^{-1}$. Require $\sum_{n\ge1}W_n=+\infty$ almost surely. Put $T_0=0$, $T_n=\sum_{k=1}^nW_k$, and, on this probability-one event, $N_t=\max\{n:T_n\le t\}$ and $X_t=Y_{N_t}$. On its null complement set $N_t=0$ and $X_t=Y_0$. The construction filtration is $\mathcal F_t=\sigma(N_s,X_s:0\le s\le t)$; it records event counts and states through time $t$ and is not completed or made right-continuous by this definition.

This uniformized construction permits reducible rate matrices and states with zero exit rate. Under the Axiom of Choice, [[lem-csm-frontier-finite-generator-chain-existence]] proves that every finite rate matrix and initial law admit such a realization and that its conditional transition matrices are $e^{tL}:=\sum_{n=0}^\infty t^nL^n/n!$.

## Definition references

[[lem-csm-frontier-finite-generator-chain-existence]]
