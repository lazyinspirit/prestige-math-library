---
id: thm-bootstrap-draws-are-conditionally-iid-empirical-law
kind: theorem
title: "Empirical-law bootstrap draws are conditionally IID"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - alg-n-out-of-n-bootstrap-from-empirical-law
  - def-empirical-measure
  - lem-empirical-measure-is-a-probability-measure
  - def-identically-distributed-and-iid-random-variables
  - def-law-or-distribution-of-a-random-element
  - def-random-element-and-real-random-variable
  - def-independent-random-elements
  - def-independent-sigma-algebras-and-events
  - def-finite-probability-space-and-event
  - def-finite-cardinality
  - thm-cardinality-of-a-set-of-functions
  - thm-subset-of-a-finite-set
  - thm-product-rule
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
axiom_use: "The finite index-space construction and all countings are choice-free."
verification:
  precheck: pass
sources:
  references:
    - title: "Bradley Efron and Robert Tibshirani, The Bootstrap Method for Assessing Statistical Accuracy, Behaviormetrika 12 (1985), §2, printed pp. 3–5"
      url: "https://link.springer.com/content/pdf/10.2333/bhmk.12.17_1.pdf"
    - title: "B. Efron and R. Tibshirani, The Bootstrap Method for Assessing Statistical Accuracy, Stanford LCS Technical Report 19 / BIO 101 (October 1985; full-text report copy)"
      url: "https://stacks.stanford.edu/file/xv648rw7816/xv648rw7816_LCS-19.pdf"
    - title: "P.J. Bickel, F. Götze and W.R. van Zwet, Resampling Fewer Than n Observations, Statistica Sinica 7 (1997), §3, printed pp. 8–11"
      url: "https://www3.stat.sinica.edu.tw/statistica/oldpdf/a7n11.pdf"
    - title: "P.B. Stark, Statistics 240 Lecture Notes, Part 8: Resampling Methods, §1.1, PDF pp. 2–3"
      url: "https://www.stat.berkeley.edu/~stark/Teach/S240/Notes/ch8.pdf"
---

## Statement

Fix $n\ge1$, write $[n]:=\{1,\ldots,n\}$, let $(\mathcal Z,\mathcal F)$ be a measurable unit space, and fix an observed tuple $z=(z_1,\ldots,z_n)$. Let $P_n=\frac1n\sum_{i=1}^n\delta_{z_i}$ be its empirical probability measure. For the bootstrap algorithm [[alg-n-out-of-n-bootstrap-from-empirical-law]], equip the conditional index vector $(I_1,\ldots,I_n)$ with the finite uniform law on $\Omega_n:=\{f:[n]\to[n]\}$ and set $Z_j^*=z_{I_j}$. For every $A_1,\ldots,A_n\in\mathcal F$,
$$\mathbb P^*(Z_1^*\in A_1,\ldots,Z_n^*\in A_n)=\prod_{j=1}^nP_n(A_j).$$
Thus, conditional on the fixed observed tuple, $Z_1^*,\ldots,Z_n^*$ are independent random elements with common law $P_n$ ([[def-identically-distributed-and-iid-random-variables]]).

## Facts & Assumptions

**Given:** $n\ge1$, a measurable space $(\mathcal Z,\mathcal F)$, a fixed tuple $z_1,\ldots,z_n$, and the size-$n$ bootstrap procedure.

[F1] [[alg-n-out-of-n-bootstrap-from-empirical-law]]: each replicate selects $I_1,\ldots,I_n$ independently and uniformly from $[n]$ and sets $Z_j^*=z_{I_j}$.

[F2] [[def-finite-probability-space-and-event]]: a finite outcome set with nonnegative weights summing to $1$ defines a probability on every subset of outcomes.

[F3] [[def-empirical-measure]]: $P_n(A)=\frac1n\sum_{i=1}^n1\{z_i\in A\}$.

[F4] [[thm-cardinality-of-a-set-of-functions]]: for finite sets $A,B$, there are $|A|^{|B|}$ functions $B\to A$.

[F5] [[thm-product-rule]]: the cardinality of a finite product of finite sets is the product of their cardinalities.

[F6] [[def-random-element-and-real-random-variable]]: a random element is a measurable map from a probability space to a measurable space.

[F7] [[def-law-or-distribution-of-a-random-element]]: the law of a random element assigns to each target event the probability of its preimage.

[F8] [[def-independent-random-elements]] and [[def-independent-sigma-algebras-and-events]]: a family of random elements is independent when their generated sigma-algebras are independent; event independence is characterized by factorization of probabilities of all finite intersections.

[F9] [[def-identically-distributed-and-iid-random-variables]]: random elements with the same target are IID when their laws agree and the family is mutually independent.

[F10] [[def-finite-cardinality]]: a set is finite when it is bijective with a von Neumann natural.

[F11] [[def-finite-cardinality]]: every von Neumann natural $n$ has cardinality $n$.

[F12] [[def-finite-cardinality]]: a bijection transports finiteness and cardinality.

[F13] [[thm-subset-of-a-finite-set]]: every subset of a finite set is finite.

## Proof

1.1 The shift $j\mapsto j-1$ is a bijection from $[n]$ to the von Neumann natural $n$. By [F10]–[F12], $[n]$ is finite with cardinality $n$. Let $\Omega_n=\{f:[n]\to[n]\}$, the set of index vectors. By [F4], $|\Omega_n|=n^n$. Assign weight $n^{-n}$ to each $\omega\in\Omega_n$. The weights are nonnegative and sum to $n^n n^{-n}=1$, so [F2] gives a finite probability space $(\Omega_n,w)$ whose event sigma-algebra contains every subset. Each coordinate map $I_j(\omega)=\omega(j)$ and record map $Z_j^*(\omega)=z_{\omega(j)}$ is measurable, because every preimage is a subset of $\Omega_n$; hence each $Z_j^*$ is a random element of $(\mathcal Z,\mathcal F)$ by [F6]. [F1, F2, F4, F6, F10, F11, F12, algebra]

2.1 For $A_j\in\mathcal F$, put $B_j:=\{i\in[n]:z_i\in A_j\}$. Each $B_j$ is a subset of the finite set $[n]$, so [F13] makes it finite. The event $\{Z_j^*\in A_j\text{ for every }j\}$ consists of the functions $g:[n]\to[n]$ with $g(j)\in B_j$ for every $j$. The shift $\tau:[n]\to n$, $\tau(j)=j-1$, from step 1.1 has inverse $\rho:n\to[n]$, $\rho(k)=k+1$; thus $g\mapsto g\circ\rho$ is a bijection from this event's index functions onto $\prod_{k<n}B_{k+1}$. By [F5] this set has cardinality $\prod_{k<n}|B_{k+1}|$, which is the same product as $\prod_{j=1}^n|B_j|$ under that reindexing. Its probability under the uniform weights is therefore $\prod_{k<n}(|B_{k+1}|/n)=\prod_{j=1}^n(|B_j|/n)$. Taking all events except the $j$th to be $\mathcal Z$ gives $\mathbb P^*(Z_j^*\in A_j)=|B_j|/n=P_n(A_j)$ by [F3] and [F7]. Hence the joint event probability is the product of its marginal probabilities. [F3, F5, F7, F13, step 1.1, algebra]

3.1 The one-coordinate case of step 2.1 gives each $Z_j^*$ law $P_n$. To check independence for any finite subfamily indexed by $J\subseteq[n]$, take arbitrary $A_j\in\mathcal F$ for $j\in J$ and set $A_j=\mathcal Z$ for every omitted coordinate. Since $P_n(\mathcal Z)=1$ and $\mathbb P^*(Z_j^*\in\mathcal Z)=1$, step 2.1 then gives $\mathbb P^*(\bigcap_{j\in J}\{Z_j^*\in A_j\})=\prod_{j\in J}P_n(A_j)$. This is the finite-intersection factorization in [F8], so the coordinate random elements are independent. They have a common measurable target and the same law, hence they are IID by [F9]. [F8, F9, step 2.1] ∎
