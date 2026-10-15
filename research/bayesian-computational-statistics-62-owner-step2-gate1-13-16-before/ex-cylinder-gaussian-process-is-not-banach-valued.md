---
id: ex-cylinder-gaussian-process-is-not-banach-valued
kind: example
title: "An iid Gaussian cylinder process is not an ℓ²-valued prior"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - thm-gaussian-process-exists-from-mean-and-positive-semidefinite-covariance-kernel
  - def-borel-gaussian-random-element-on-a-separable-banach-space
  - def-standard-normal-and-normal-laws
  - def-multivariate-normal-law
  - thm-continuity-from-above-for-measures
  - thm-measure-uniqueness-on-a-sigma-finite-pi-system
  - def-axiom-of-choice
  - thm-finite-and-countable-subadditivity-of-measures
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: "The cylinder Gaussian process construction is under AC. The tail argument uses only finite-dimensional independence, countable additivity, and continuity from above."
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "A. W. van der Vaart and J. H. van Zanten, Rates of contraction of posterior distributions based on Gaussian process priors (2008)"
      url: "https://arxiv.org/pdf/0806.3024"
      locator: "Section 2.1: arbitrary-index Gaussian processes versus Borel Gaussian priors."
---

## Example

Assume AC.

Let $T=\mathbb N$ and $k(i,j)=\mathbf 1_{\{i=j\}}$. The cylinder Gaussian
process with this kernel has independent $N(0,1)$ coordinates, but its
coordinate sequence is almost surely not in $\ell^2$. Thus its cylinder law
is not a tight Borel prior on $\ell^2$.

## Facts & Assumptions

[F1] Under AC, a positive-semidefinite covariance kernel on an arbitrary set
defines a unique law on the cylinder sigma-algebra with the prescribed finite
Gaussian marginals ([[thm-gaussian-process-exists-from-mean-and-positive-semidefinite-covariance-kernel]]).

[F2] The standard normal assigns a probability
$q=P(|Z|>1)>0$ to $\{|Z|>1\}$, and finite independent standard-normal
coordinates have product Gaussian law
([[def-standard-normal-and-normal-laws]],
[[def-multivariate-normal-law]]).

[F3] Probabilities are continuous from above for decreasing events
([[thm-continuity-from-above-for-measures]]).


[F4] Probability is countably subadditive on sequences of measurable sets ([[thm-finite-and-countable-subadditivity-of-measures]]).

## Verification


**Given:** AC and the cylinder law on $\mathbb R^{\mathbb N}$ with independent standard normal coordinates $(Z_k)_{k\ge1}$.

1.1 The kernel $k(i,j)=\mathbf 1_{\{i=j\}}$ is positive semidefinite since every finite Gram matrix is an identity matrix. By [F1] its cylinder law has the finite-coordinate marginals of independent standard normals, as in [F2]. [F1, F2, given]

2.1 Fix $N$. For $M\ge N$, finite-coordinate independence gives $P(|Z_k|\le1\text{ for all }N\le k\le M)=(1-q)^{M-N+1}$. These events decrease as $M\to\infty$, so [F3] shows $P(|Z_k|\le1\text{ for every }k\ge N)=0$. The event that only finitely many $|Z_k|$ exceed $1$ is the countable union over $N$ of these null events; [F4] makes that union null, so almost surely infinitely many coordinates satisfy $|Z_k|>1$. [F2, F3, F4, step 1.1, algebra]

3.1 Infinitely many terms of $\sum_k Z_k^2$ exceed $1$, hence the sum diverges almost surely. The set $\ell^2\subset\mathbb R^{\mathbb N}$ is cylinder-measurable because it equals $\bigcup_{m\ge1}\bigcap_{N\ge1}\{\sum_{k\le N}x_k^2\le m\}$; its cylinder probability is therefore zero by step 2.1. Any $\ell^2$-valued random element has all coordinates in $\ell^2$ almost surely, contradicting this cylinder probability. Thus no Borel $\ell^2$-valued random element, and in particular no tight Borel $\ell^2$ prior, has these finite-coordinate laws. [step 2.1, algebra, contradiction] ∎

