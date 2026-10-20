---
id: cor-any-feature-induces-calibrated-forecast
kind: corollary
title: "Conditioning on a feature induces a calibrated forecast"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-probability-calibration
  - lem-finite-label-conditional-probability-function
  - def-measurable-function-between-measurable-spaces
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Vaicenavicius et al., Evaluating Model Calibration in Classification, PMLR 89 (2019), Proposition 1"
      url: "https://proceedings.mlr.press/v89/vaicenavicius19a/vaicenavicius19a.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 4.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Statement

Assume AC. Let a finite-label supervised prediction problem have measurable instance space $(\mathsf X,\Sigma_X)$ and finite labels $\mathcal Y=\{y_1,\ldots,y_K\}$ with the full power-set sigma-algebra, where $K\ge2$. There is a measurable forecast $G=\eta(X):\mathsf X\to\Delta_K$ whose conditional probability function satisfies the event identities for each label; as a random forecast, $G$ is fully reliable.

## Statement references

[[lem-finite-label-conditional-probability-function]]: supplies the measurable simplex-valued conditional probability function and its event identities under AC.

[[def-probability-calibration]]: full reliability is the event-integral identity for every Borel subset of the forecast simplex.

## Facts & Assumptions

**Given:** AC and a finite-label supervised prediction problem with coordinate random variables $X,Y$.

[A1] Assume AC, as used in the finite-label conditional-probability lemma. [[def-axiom-of-choice]]

[F1] There is a measurable $\eta:\mathsf X\to\Delta_K$ such that $P(X\in A,Y=y_j)=\mathbb E[\eta_j(X)\mathbf1_{\{X\in A\}}]$ for every measurable $A$ and label $j$. [[lem-finite-label-conditional-probability-function]]

[F2] Full reliability means $P(Y=y_j,G\in B)=\mathbb E[\mathbf1_{\{G\in B\}}G_j]$ for every Borel $B\subseteq\Delta_K$ and each label $j$. [[def-probability-calibration]]

[F3] A measurable map has measurable preimages of measurable sets. [[def-measurable-function-between-measurable-spaces]]

## Proof

1.1 Fix a label index $j$ and a Borel set $B\subseteq\Delta_K$. Since $\eta$ is measurable by [F1], $A=\eta^{-1}(B)\in\Sigma_X$ by [F3]. The event identity in [F1] applied to this $A$ gives $P(Y=y_j,G\in B)=P(X\in A,Y=y_j)=\mathbb E[\eta_j(X)\mathbf1_{\{X\in A\}}]=\mathbb E[G_j\mathbf1_{\{G\in B\}}].$ This is precisely the reliability identity [F2]. [A1, F1, F2, F3, given]

2.1 Since $j$ and $B$ were arbitrary, all label and Borel-event identities hold, so $G$ is fully reliable. [step 1.1] ∎

## Source notes

Vaicenavicius et al. Proposition 1 states the reliability of a conditional class-probability forecast. The event-integral proof above makes the version and measurable-event hypotheses explicit.
