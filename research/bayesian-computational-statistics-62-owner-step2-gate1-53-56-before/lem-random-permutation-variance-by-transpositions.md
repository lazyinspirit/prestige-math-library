---
dependency_level: 0
id: lem-random-permutation-variance-by-transpositions
kind: lemma
title: A successive-revelation variance bound for a uniform permutation
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - def-uniform-finite-probability-space
  - def-moments-variance-and-covariance
  - thm-cauchy-schwarz-finite
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sourav Chatterjee, Stein's method for concentration inequalities (permutation concentration background; the successive-revelation estimate is proved locally)"
      url: "https://arxiv.org/pdf/math/0604352"
---

## Statement

Let $\pi$ be uniform on the permutations of $\{1,\ldots,N\}$, where $N\ge1$, and let $f$ be any real function on this finite set. Write $\pi(k,l)$ for the permutation obtained by exchanging its entries in positions $k,l$, with $(k,k)$ the identity. Then

$$\operatorname{Var}(f(\pi))\le\frac12\sum_{k=1}^N\frac1{N-k+1}\sum_{l=k}^N E[(f(\pi)-f(\pi(k,l)))^2].$$

In particular, if every transposition difference has second moment at most $b$, then $\operatorname{Var}(f(\pi))\le Nb/2$. These are finite-sum statements and require no choice axiom.

## Facts & Assumptions

**Given:** A positive integer $N$, a uniform permutation, and a real-valued function on its finite state space.

[F1] [[def-uniform-finite-probability-space]] assigns equal probability to every permutation.

[F2] [[def-moments-variance-and-covariance]] defines variance and covariance by centered products.

[F3] [[thm-cauchy-schwarz-finite]] implies that the square of an average of finitely many real numbers is at most the average of their squares.

## Proof

**Given:** The hypotheses in the Statement. Prove the variance estimate by revealing successive entries.

1.1 Let $\mathcal F_k$ reveal the first $k$ entries of $\pi$, and let $M_k$ be the average of $f$ over permutations agreeing with those entries. Thus $M_0=Ef$, $M_N=f$, and the average of $M_k$ conditional on $\mathcal F_{k-1}$ is $M_{k-1}$. For $j<k$, averaging $(M_j-M_{j-1})(M_k-M_{k-1})$ first over completions of the first $k-1$ entries gives zero. Expanding the square of $f-Ef=\sum_k(M_k-M_{k-1})$ therefore gives $\operatorname{Var}(f)=\sum_k E[(M_k-M_{k-1})^2]$. All these conditional averages are finite sums. [F1, F2, given, algebra]

2.1 Fix a prefix of length $k-1$ and put $q=N-k+1$. For each remaining image $a$, let $u_a$ be the average of $f$ over completions whose kth entry is $a$. The conditional variance of $M_k$ is $\frac1{2q^2}\sum_{a,b}(u_a-u_b)^2$. Choose a uniform completion $\pi$ of the prefix and independently choose $l$ uniformly from $\{k,\ldots,N\}$. Given $\pi(k)=a$, the image $b=\pi(l)$ is uniform among the $q$ remaining images. For fixed $a,b$, swapping position $k$ with the location of $b$ is a bijection from completions with kth image $a$ onto completions with kth image $b$. Hence $E[f(\pi)-f(\pi(k,l))\mid a,b,\mathcal F_{k-1}]=u_a-u_b$. By [F3], the conditional variance just displayed is at most $\frac12E[(f(\pi)-f(\pi(k,l)))^2\mid\mathcal F_{k-1}]$. [F1, F2, F3, step 1.1, algebra]

3.1 Average step 2.1 over prefixes and sum over $k$ using step 1.1. The independent uniform choice of $l$ gives the displayed estimate. If every squared difference has expectation at most $b$, each inner average is at most $b$, so the sum is at most $Nb/2$. For $N=1$ both sides of the displayed estimate are zero. [step 1.1, step 2.1, algebra] ∎
