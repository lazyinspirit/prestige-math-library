---
id: thm-csm-dk-strong-lumpability
kind: theorem
title: "Exact all-preparations coarse Markov criterion"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-csm-dk-finite-reversible-rate-model
  - thm-csm-dk-nonexplosive-ctmc-and-gap
  - def-axiom-of-choice
dependency_roles:
  def-csm-dk-finite-reversible-rate-model: mathematical-premise
  thm-csm-dk-nonexplosive-ctmc-and-gap: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Aldous and James Allen Fill, Reversible Markov Chains and Random Walks on Graphs"
      url: "https://www.stat.berkeley.edu/~aldous/RWG/book.pdf"
      locator: "Chapter 2 §2.1.2 and Chapter 3 §§3.1–3.4: finite-state generators, transition semigroups and detailed balance."
---

## Statement

Assume the Axiom of Choice [[def-axiom-of-choice]] and the finite rate chain of [[def-csm-dk-finite-reversible-rate-model]] with transition semigroup supplied by [[thm-csm-dk-nonexplosive-ctmc-and-gap]]. Let $\mathcal C=\{C_1,\ldots,C_k\}$ be a partition of $E$, meaning $k\ge1$, each $C_i$ is nonempty, the blocks are pairwise disjoint, and their union is $E$. For $a\in C_i$ and $j\ne i$, set
$$q(a,C_j):=\sum_{b\in C_j}w_{ab}.$$
The projected process $\bar X_t=i$ when $X_t\in C_i$ has one time-homogeneous Markov generator valid for every initial microscopic probability law if and only if $q(a,C_j)$ is independent of $a\in C_i$ for every $i$ and $j\ne i$. Under this condition, the coarse generator has off-diagonal entries $\bar q_{ij}=q(a,C_j)$ for any $a\in C_i$ and diagonal entries $\bar q_{ii}=-\sum_{j\ne i}\bar q_{ij}$. Its stationary weights $\bar\pi_i=\sum_{a\in C_i}\pi_a$ satisfy detailed balance.

## Facts & Assumptions
**Given:** The Axiom of Choice, a finite rate model, and its nonexplosive Markov semigroup.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function.

[F1] [[def-csm-dk-finite-reversible-rate-model]]: $Q_{ab}=w_{ab}$ for $a\ne b$, $Q_{aa}=-\sum_{b\ne a}w_{ab}$, and $\pi_aw_{ab}=\pi_bw_{ba}$.

[F2] [[thm-csm-dk-nonexplosive-ctmc-and-gap]]: the chain is nonexplosive and has transition semigroup $P_t=e^{tQ}$ with forward equation $p'=pQ$.

## Proof

**Given:** [A1], [F1]–[F2], and the partition $\mathcal C$.

1.1 Let $\mathcal H$ be the subspace of functions on $E$ that are constant on each block. For $f(a)=\bar f_i$ when $a\in C_i$, $(Qf)(a)=\sum_{j\ne i}q(a,C_j)(\bar f_j-\bar f_i)$ for $a\in C_i$. If the block-rate sums are constant within each $C_i$, this value is independent of the chosen $a\in C_i$. Thus $Q$ maps $\mathcal H$ into itself, and its restriction is the matrix $\bar Q$ in the Statement. Every power $Q^n$ preserves $\mathcal H$, so the matrix series $P_t=e^{tQ}$ does too; for any block $C_j$, $P_t1_{C_j}$ is constant on each block and defines $\bar P_t=e^{t\bar Q}$. [F1, F2, construct, algebra]

2.1 Conditional on the full microscopic history through time $t$, the Markov property gives $\Pr(\bar X_{t+s}=j\mid\mathcal F_t^X)=(P_s1_{C_j})(X_t)=(\bar P_s)_{\bar X_t,j}$. The right side depends only on the current block. Taking conditional expectation with respect to the coarser history proves that $\bar X$ is a time-homogeneous Markov chain for every microscopic initial law. Moreover, $\bar\pi_i\bar q_{ij}=\sum_{a\in C_i}\sum_{b\in C_j}\pi_aw_{ab}=\sum_{a\in C_i}\sum_{b\in C_j}\pi_bw_{ba}=\bar\pi_j\bar q_{ji}$, so its stationary block weights satisfy detailed balance. [A1, F1, F2, step 1.1, algebra]

3.1 Conversely, assume one time-homogeneous block generator applies for every microscopic initial law. Start once from a point mass at $a\in C_i$ and once at $a'\in C_i$. For $j\ne i$, the finite matrix expansion $e^{hQ}=I+hQ+O(h^2)$ gives $\Pr_a(\bar X_h=j)=h q(a,C_j)+O(h^2)$ and $\Pr_{a'}(\bar X_h=j)=h q(a',C_j)+O(h^2)$. Both probabilities must use the same coarse transition entry from block $i$ to block $j$. Divide by $h>0$ and let $h\downarrow0$; then $q(a,C_j)=q(a',C_j)$. This holds for each block pair, proving necessity and the equivalence. [A1, F1, F2, algebra] ∎
