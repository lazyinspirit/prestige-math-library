---
id: def-explicit-constant-rate-constant-distance-code
kind: definition
title: "Explicit binary codes of constant rate and distance"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-gap-preserving-csp-reduction]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-27
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §17.5.2 Definitions 17.16-17.17 (code distance, Reed-Solomon), printed pp. 346-347."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Irit Dinur, The PCP theorem by gap amplification, §2.4 and §9 (codes used in the tester composition), printed pp. 10 and 30."
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
---

## Definition

Throughout this page, for $N\ge1$ the **relative Hamming distance** between $x,y\in\{0,1\}^N$ is
$$\delta(x,y):=\frac{\#\{i\in\{1,\dots,N\}:x_i\ne y_i\}}{N}\in[0,1],$$
and the **relative distance** of a subset $C\subseteq\{0,1\}^N$ with $\lvert C\rvert\ge2$ is $\min\{\delta(x,y):x\ne y,\ x,y\in C\}$, while a subset with exactly one element has relative distance $1$ by convention.

A **binary code family** is a sequence of maps $C_k:\{0,1\}^k\to\{0,1\}^{N(k)}$ for $k\ge1$, each **injective**, with an integer length function $N(k)\ge k$. Its **rate** at $k$ is $k/N(k)$. The family is **explicit with constant rate and constant distance** when there are absolute constants $c_0>0$, $\delta_0>0$, $C_0>0$ such that for every $k\ge1$
$$N(k)\le C_0k,\qquad \frac{k}{N(k)}\ge c_0,\qquad \delta\bigl(C_k(x),C_k(y)\bigr)\ge\delta_0\ \text{ for all }x\ne y\in\{0,1\}^k,$$
and each encoder $C_k$ is computable by one deterministic algorithm in time polynomial in $k$, uniformly in $k$: the algorithm takes $1^k$ together with $x\in\{0,1\}^k$ as input and writes the $N(k)$ output bits.

## Remarks

- **Explicit** here means the same convention as for constraint graphs in [[def-gap-preserving-csp-reduction]]: the output is written bit by bit, so that the running time is measured against the length of the produced codeword plus the input length, and a family is uniform when one algorithm serves all $k$. Nothing is claimed about the parity-check matrix, the decoder, or the existence of a fast decoder.
- The padding convention is part of the definition: the code is defined for every $k\ge1$ with its own length $N(k)$, and a construction that first pads $x$ to some convenient length $\bar k\ge k$ and then encodes is admissible only when the resulting length is $O(k)$ and the analysis of injectivity and distance is done for the padded map, as in [[thm-explicit-code-construction-and-distance]].
- **Rate and distance trade off**, and both constants above are absolute: the page needs $N(k)=O(k)$ so that a constraint system whose variables are the $k$ message bits and whose size is measured against $N(k)$ stays linear in $k$, and it needs $\delta_0>0$ so that a constant fraction of the encoded bits witnesses every error in a message. The padded construction of [[thm-explicit-code-construction-and-distance]] achieves $\delta_0=1/8$ and rate greater than $1/128$ with $N(k)<128k$; $1/32$ is the rate before padding.
- The relative distance of a code is a minimum over pairs of codewords and is defined to be one for a one-element code so that the convention matches the relative-distance convention for testers, where an empty solution set is assigned distance one ([[def-assignment-tester-and-rejection-ratio]]).
