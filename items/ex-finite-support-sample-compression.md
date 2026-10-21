---
id: ex-finite-support-sample-compression
kind: example
title: "A finite-support sample-compressed classifier"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-sample-compression-scheme
  - thm-compression-generalization-bound
  - def-population-and-empirical-risk
  - lem-population-and-empirical-risk-are-measurable
justified_by: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-altered
sources:
  references:
    - title: "Sally Floyd and Manfred Warmuth, Sample Compression, Learnability, and the Vapnik–Chervonenkis Dimension, §3 and Theorem 5"
      url: "https://mwarmuth.bitbucket.io/pubs/J30.pdf"
---

## Example

Let $\mathcal X=\{0,1\}$ with its full sigma-algebra, let $D$ be uniform on $\mathcal X$, and let $\mathcal H=\{c\}$ for the target $c(x)=x$. Define $G_0$ to be the constant-zero map. For each positive sample length $n$, the compressor selects the index of the first occurrence of each distinct input in the labeled sample; for length zero it selects the empty index set. For each selected ordered sequence of length $1\le k\le2$, the fixed reconstruction map returns the selected label at the first selected entry whose input equals its argument, if such an entry exists, and returns $0$ otherwise; the empty sequence is reconstructed by $G_0$. This is a deterministic consistent compression scheme of size at most $d=2$. Draw $m\ge3$ independent observations with law $D$ and define $R_D(h)=D\{x:h(x)\ne c(x)\}$. The reconstructed classifier has risk $1/2$ exactly when all $m$ observations are $0$, and otherwise has risk $0$. Consequently, at threshold $\epsilon=1/4$ its failure probability is $2^{-m}$, bounded by the compression theorem's value $\sum_{i=0}^{2}\binom{m}{i}(3/4)^{m-i}$.

## Example references

[[def-sample-compression-scheme]]: defines deterministic index selection, reconstruction from selected labeled entries alone, and consistency.

[[thm-compression-generalization-bound]]: bounds the bad consistent reconstruction probability by the finite sum over index subsets.

[[def-population-and-empirical-risk]]: population risk is disagreement probability and empirical risk is the sample average for zero-one loss.

[Floyd and Warmuth, *Sample Compression, Learnability, and the Vapnik–Chervonenkis Dimension*, §3 and Theorem 5](https://mwarmuth.bitbucket.io/pubs/J30.pdf): gives the sample-compression setup and its generalization bound.

## Facts & Assumptions

**Given:** The two-point measurable instance space, uniform distribution, identity target, the first-occurrence compressor, and the reconstruction rule in the Example.

[F1] A size-at-most-two compression scheme measurably selects at most two indices and reconstructs using only the selected labeled entries in sample order through fixed measurable maps. It is consistent if the reconstruction reproduces every label of every target-labeled sample. [[def-sample-compression-scheme]]

[F2] For the fixed target, population risk is disagreement probability and empirical risk is the average sample disagreement; both are well-defined for measurable predictors. [[def-population-and-empirical-risk]], [[lem-population-and-empirical-risk-are-measurable]]

[F3] For a size-at-most-$d$ consistent scheme with $m>d$, the probability of any consistent reconstructed hypothesis of risk greater than $\epsilon$ is at most $\sum_{i=0}^{d}\binom{m}{i}(1-\epsilon)^{m-i}$. [[thm-compression-generalization-bound]]

## Verification

**Given:** The two-point measurable instance space, uniform distribution, identity target, first-occurrence compressor, and reconstruction rule in the Example.

1.1 For the empty sample, the selected index set is empty and consistency is vacuous. For a positive-length sequence, the set of first-occurrence indices has at most two members, and the reconstruction maps are fixed functions of the selected entries. On a sample labeled by $c$, if an input $x$ occurs in the full sample, its first occurrence is selected and its selected label is $c(x)=x$; if it does not occur, no sample-consistency condition applies at $x$. Thus the reconstructed function agrees with every observed label, so the scheme is consistent in the sense of [F1]. All spaces are finite with their full sigma-algebras, so the compressor, reconstructor, risk, and output-risk event are measurable. [given, F1, construct]

2.1 If at least one observation equals $1$, then the reconstruction returns $1$ at input $1$ and returns $0$ at input $0$, either from a selected entry or by the default rule, so its risk is $0$. If every observation is $0$, it returns $0$ at both inputs and errs only at $1$, so [F2] gives risk $D(\{1\})=1/2$. Independence and $D(\{0\})=1/2$ make the latter event have probability $(1/2)^m=2^{-m}$. [F2, given, step 1.1, algebra]

3.1 For $m\ge3$, the size parameter satisfies $m>d=2$. At $\epsilon=1/4$, step 2.1 shows that the event $R_D>\epsilon$ is exactly the all-zero sample event, hence has probability $2^{-m}$. Its value is at most $(3/4)^m$, which is the $i=0$ term in the sum in [F3]; all other terms are nonnegative. Thus the exact example probability is bounded by $\sum_{i=0}^{2}\binom{m}{i}(3/4)^{m-i}$ as stated. [F3, step 2.1, algebra] ∎
