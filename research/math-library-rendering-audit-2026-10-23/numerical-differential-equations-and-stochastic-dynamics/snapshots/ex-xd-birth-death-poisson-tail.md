---
id: ex-xd-birth-death-poisson-tail
kind: example
title: "Three-state birth-death chain with a certified Poisson tail"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-xd-finite-column-generator
  - lem-xd-geometric-poisson-tail-bound
  - alg-xd-budgeted-uniformization-accumulation
  - thm-xd-finite-generator-master-equation-uniformization
  - thm-xd-uniformization-truncation-and-error
  - def-scalar-poisson-count-law
  - lem-poisson-count-law-normalization-and-moments
justified_by: []
aliases: []
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Bennett L. Fox and Peter W. Glynn, Computing Poisson Probabilities"
      url: "https://web.stanford.edu/~glynn/papers/1988/FG88.pdf"
      locator: "Proposition 1 and §§1–3, printed pp. 440–443; truncated Poisson weights and certified omitted mass."
---

## Example

On states $0,1,2$, take birth rates $1$ from $0$ to $1$ and from $1$ to $2$, and death rates $1$ from $1$ to $0$ and $2$ from $2$ to $1$. Starting from $e_0$, the generator and a uniformization rate are

$$Q=\begin{pmatrix}-1&1&0\\1&-2&2\\0&1&-2\end{pmatrix},\qquad \nu=2.$$

At $t=1/2$, the Poisson parameter is $\nu t=1$. Truncating after $K=4$ gives

$$u_4=\frac1e\begin{pmatrix}703/384\\277/384\\5/32\end{pmatrix},\qquad \|p(1/2)-u_4\|_1=1-\frac{65}{24e}\le\frac1{100e}.$$

The exact omitted-mass identity is mathematical, while the upper bound is the certified geometric tail used by the algorithm.

## Facts & Assumptions

**Given:** The three-state rates in the Example, initial vector $e_0=(1,0,0)^T$, time $t=1/2$, uniformization rate $\nu=2$, and truncation index $K=4$.

[F1] [[def-xd-finite-column-generator]]: $Q_{ij}$ is the rate from source column $j$ to destination row $i$, and a finite generator has nonnegative off-diagonal entries and zero column sums.

[F2] [[thm-xd-finite-generator-master-equation-uniformization]]: $p(t)=\sum_{k\ge0}e^{-\nu t}(\nu t)^kP^ke_0/k!$.

[F3] [[lem-xd-geometric-poisson-tail-bound]]: when $\mu<K+2$, $\mathbb P(\operatorname{Pois}(\mu)>K)\le G_K(\mu)$.

[F4] [[def-scalar-poisson-count-law]] and [[lem-poisson-count-law-normalization-and-moments]]: the Poisson weight at $k$ for parameter $1$ is $e^{-1}/k!$, and the full set of weights sums to one.

## Verification


**Proof technique:** compute a finite matrix-power prefix and use the explicit geometric tail majorant.

1.1 The off-diagonal entries of $Q$ are nonnegative and its columns sum to zero; its exit rates are $1,2,2$. Thus [F1] holds, $\nu=2$ dominates every exit rate, and $P=I+Q/2=\begin{pmatrix}1/2&1/2&0\\1/2&0&1\\0&1/2&0\end{pmatrix}$. [given, F1, algebra]

2.1 Starting from $e_0$, successive multiplication by this $P$ gives $P e_0=(1/2,1/2,0)^T$, $P^2e_0=(1/2,1/4,1/4)^T$, $P^3e_0=(3/8,1/2,1/8)^T$, and $P^4e_0=(7/16,5/16,1/4)^T$. Each vector is obtained by multiplying the preceding vector by the displayed matrix. [given, step 1.1, algebra]

3.1 By [F4], the first five Poisson weights at parameter $1$ are $e^{-1}(1,1,1/2,1/6,1/24)$. Weighting the five vectors from $e_0$ through $P^4e_0$ and adding coordinatewise gives $u_4=e^{-1}(703/384,277/384,5/32)^T$ and total retained mass $65/(24e)$. By normalization [F4], the exact omitted mass is $1-65/(24e)=\mathbb P(\operatorname{Pois}(1)>4)$. This subtraction is an exact identity, not a floating-point tail-estimation rule. [given, F2, F4, step 2.1, algebra]

4.1 Applying [F3] with $\mu=1$ and $K=4$ gives $\mathbb P(\operatorname{Pois}(1)>4)\le e^{-1}/(5!(1-1/6))=1/(100e)$. This upper bound is computed from a positive geometric majorant and does not use a floating-point subtraction. [given, F3, step 3.1, algebra] ∎
