---
id: alg-multinomial-and-residual-offspring-resampling
kind: algorithm
title: "Multinomial and residual offspring resampling"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps: []
axiom_use: "No choice axiom is used; the procedure specifies probability laws on finite index sets."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Arnaud Doucet and Adam M. Johansen, A Tutorial on Particle Filtering and Smoothing: Fifteen Years Later, §3.4"
      url: "https://www.stats.ox.ac.uk/~doucet/doucet_johansen_tutorialPF2011.pdf"
    - title: "Simo Särkkä and Lennart Svensson, Bayesian Filtering and Smoothing, 2nd ed., §11.4"
      url: "https://users.aalto.fi/~ssarkka/pub/bfs_book_2023_online.pdf"
    - title: "Nicolas Chopin, Central Limit Theorem for Sequential Monte Carlo Methods and its Application to Bayesian Inference, §2.1"
      url: "https://arxiv.org/pdf/math/0508594"
---

## Definition

Input a particle count $N\ge1$, nonnegative finite weights $a_1,\ldots,a_N$, and a scheme label, either multinomial or residual. Let $A=\sum_{j=1}^Na_j$. If $A>0$, set $p_j=a_j/A$; if $A=0$, set $p_j=1/N$ for every $j$. Thus $p$ is always a probability vector.

- **Multinomial scheme.** Draw an index vector $(J_1,\ldots,J_N)\in\{1,\ldots,N\}^N$ with conditional mass $\mathbb P(J_1=j_1,\ldots,J_N=j_N\mid a)=\prod_{\ell=1}^Np_{j_\ell}$. Put $C_j=\#\{\ell:J_\ell=j\}$.
- **Residual scheme.** Put $q_j=\lfloor Np_j\rfloor$, $r_j=Np_j-q_j$, and $R=\sum_{j=1}^Nr_j=N-\sum_{j=1}^Nq_j$, an integer in $\{0,\ldots,N-1\}$. If $R=0$, put $C_j=q_j$. If $R>0$, draw $(K_1,\ldots,K_R)$ with conditional mass $\mathbb P(K_1=k_1,\ldots,K_R=k_R\mid a)=\prod_{\ell=1}^R(r_{k_\ell}/R)$ and put $C_j=q_j+\#\{\ell:K_\ell=j\}$.

For multinomial resampling, return the sampled vector $(J_1,\ldots,J_N)$ in its sampled order, together with its count vector $(C_1,\ldots,C_N)$; do not sort the sampled indices. For residual resampling, return the ancestor list containing exactly $C_j$ copies of index $j$, ordered by increasing index, together with its count vector. Each output is a length-$N$ list and a count vector summing to $N$. When all input weights vanish, the uniform fallback defines the procedure; any downstream normalizer already multiplied by this zero average remains zero.

## Remarks

The multinomial branch is the conditionally IID ancestor-index scheme. The residual branch is a distinct selection law: its deterministic floor counts generally make the child indices dependent, while its conditional expected counts agree with the same probability vector.
