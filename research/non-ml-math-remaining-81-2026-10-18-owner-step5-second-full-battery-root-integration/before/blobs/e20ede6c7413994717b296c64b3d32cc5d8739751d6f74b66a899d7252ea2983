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
  - thm-measurability-of-integration-against-a-kernel
  - def-standard-borel-space
axiom_use: "No choice axiom is used for the supplied-kernel interface. Finite singleton evaluations give a supplied finite determining family and version independence. The cited KL text is used only for its elementary real-function t ln t calculation, not for existence of a Radon–Nikodym density. No conditional-kernel existence assertion is made."
provenance:
  statement: ai-altered
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
with $0\ln0:=0$ and natural logarithms. The finite entropy convention is that of [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]. Each evaluation $y\mapsto K(y,\{x\})$ is measurable. The explicit argument in [[def-kullback-leibler-divergence]] proves $-t\ln t$ extends continuously to zero and is bounded by $1/e$ on $[0,1]$; hence the finite entropy integrand is measurable and bounded by $|S|/e$. The result is independent of the supplied version without a choice axiom: the finite supplied singleton family $\{\{x\}:x\in S\}$ determines probability measures on $S$ by finite additivity. Apply the supplied-determining-family argument in [[def-conditional-law-given-a-random-element]] to two supplied kernels $K,L$. Outside the finite union of their singleton-evaluation discrepancy sets, which is a measurable $P_Y$-null set, all probabilities $K(y,\{x\})$ and $L(y,\{x\})$ agree. Their entropy integrands therefore agree almost everywhere, proving equality of the integrals. This uses supplied kernels, not a theorem asserting their existence.

This definition permits a non-finite observation Y; only the target alphabet S is finite. If Y is finite, then for each positive-mass y the conditional-law identity gives $K(y,\{x\})P_Y(\{y\})=P(X=x,Y=y)$, so $K(y,\{x\})=p_{X|y}(x)$. Evaluating the integral as a finite weighted sum therefore gives exactly the convention of [[def-it-finite-conditional-entropy]], by [[cor-expectation-agrees-with-the-finite-weighted-sum]].
