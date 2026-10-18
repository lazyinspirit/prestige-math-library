---
id: def-finite-alphabet-conditional-entropy-given-observation
kind: definition
title: "Finite-alphabet conditional entropy given an observation"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-it-finite-conditional-entropy
  - cor-expectation-agrees-with-the-finite-weighted-sum
  - def-kullback-leibler-divergence
  - def-qa-35-finite-probability-entropy-and-stochastic-matrices
  - def-conditional-law-given-a-random-element
  - def-regular-conditional-distribution
  - thm-existence-of-regular-conditional-distributions-for-standard-borel-targets
  - lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable
  - lem-simultaneous-ae-uniqueness-of-regular-conditional-distributions
  - thm-measurability-of-integration-against-a-kernel
  - def-standard-borel-space
  - def-axiom-of-choice
axiom_use: "AC supplies the regular conditional law of the finite-valued variable given the standard-Borel observation and the simultaneous almost-everywhere uniqueness used for version independence; it is also an explicit hypothesis of the cited general KL interface used for continuity and boundedness of t ln t."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected author-hosted first edition, Chapter 2 §2.5 and Chapter 5 §5.5"
      url: "https://ee-www.stanford.edu/~gray/it.pdf"
    - title: "John Duchi, Lecture Notes on Statistics and Information Theory, Chapter 2 §2.1"
      url: "https://web.stanford.edu/class/stats311/lecture-notes.pdf"
---

## Definition

Let $X$ take values in a finite nonempty set $S$ and let $Y$ take values in a standard-Borel space $(T,\mathcal T)$. Let $K:T\rightsquigarrow S$ be a conditional law of $X$ given $Y$, so that $K(Y,\cdot)$ is a regular conditional distribution given $\sigma(Y)$. Define
$$H(X\mid Y):=\int_T\left(-\sum_{x\in S}K(y,\{x\})\ln K(y,\{x\})\right)P_Y(dy),$$
with $0\ln0:=0$ and natural logarithms. The finite entropy convention is that of [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]. Each evaluation $y\mapsto K(y,\{x\})$ is measurable. The explicit argument in [[def-kullback-leibler-divergence]] proves $-t\ln t$ extends continuously to zero and is bounded by $1/e$ on $[0,1]$; hence the finite entropy integrand is measurable and bounded by $|S|/e$. The result is independent of the supplied version by simultaneous almost-everywhere uniqueness of standard-Borel regular conditional laws.

This definition permits a non-finite observation Y; only the target alphabet S is finite. If Y is finite, then for each positive-mass y the conditional-law identity gives $K(y,\{x\})P_Y(\{y\})=P(X=x,Y=y)$, so $K(y,\{x\})=p_{X|y}(x)$. Evaluating the integral as a finite weighted sum therefore gives exactly the convention of [[def-it-finite-conditional-entropy]], by [[cor-expectation-agrees-with-the-finite-weighted-sum]].
