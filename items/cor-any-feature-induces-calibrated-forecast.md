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
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-20}}
sources:
  references:
    - title: "Vaicenavicius et al., Evaluating Model Calibration in Classification, PMLR 89 (2019), Proposition 1"
      url: "https://proceedings.mlr.press/v89/vaicenavicius19a/vaicenavicius19a.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 4.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Statement

Assume AC. Let a finite-label supervised prediction problem have measurable instance space $(\mathsf X,\Sigma_X)$ and finite labels $\mathcal Y=\{y_1,\ldots,y_K\}$ with the full power-set sigma-algebra, where $K\ge2$. Identify label $y_j$ with its index $j$ when applying numbered-label calibration, so forecast coordinate $j$ always represents the event $Y=y_j$. For every measurable feature $T:\mathsf X\to(\mathsf Z,\Sigma_Z)$, there is a measurable $\eta_T:\mathsf Z\to\Delta_K$ such that $G=\eta_T(T(X))$ is a conditional class-probability forecast given $T(X)$ and is fully reliable. This includes the identity feature and a constant feature.

## Statement references

[[lem-finite-label-conditional-probability-function]]: supplies the measurable simplex-valued conditional probability function and its event identities under AC.

[[def-probability-calibration]]: full reliability is the event-integral identity for every Borel subset of the forecast simplex.

## Facts & Assumptions

**Given:** AC, a finite-label supervised prediction problem with coordinate random variables $X,Y$, and a measurable feature $T:\mathsf X\to(\mathsf Z,\Sigma_Z)$.

[A1] Assume AC, as used in the finite-label conditional-probability lemma. [[def-axiom-of-choice]]

[F1] There is a measurable $\eta:\mathsf X\to\Delta_K$ such that $P(X\in A,Y=y_j)=\mathbb E[\eta_j(X)\mathbf1_{\{X\in A\}}]$ for every measurable $A$ and label $j$. [[lem-finite-label-conditional-probability-function]]

[F2] Full reliability means $P(Y=y_j,G\in B)=\mathbb E[\mathbf1_{\{G\in B\}}G_j]$ for every Borel $B\subseteq\Delta_K$ and each label $j$. [[def-probability-calibration]]

[F3] A measurable map has measurable preimages of measurable sets. [[def-measurable-function-between-measurable-spaces]]

## Proof

1.1 Apply [F1] to the joint law of $(T(X),Y)$ on $\mathsf Z\times\mathcal Y$, which is a measurable joint probability law because $T$ is measurable. Equip this law with simplex-valued constant predictors and the zero loss to obtain a supervised prediction problem; [F1] only uses its joint law. It supplies a measurable $\eta_T:\mathsf Z\to\Delta_K$ with $P(T(X)\in A,Y=y_j)=\mathbb E[\eta_{T,j}(T(X))\mathbf1_{\{T(X)\in A\}}]$ for every $A\in\Sigma_Z$. Set $G=\eta_T(T(X))$. For a Borel set $B\subseteq\Delta_K$, [F3] makes $A=\eta_T^{-1}(B)$ measurable; the event identity then gives $P(Y=y_j,G\in B)=\mathbb E[G_j\mathbf1_{\{G\in B\}}]$. This is precisely the reliability identity [F2]. [A1, F1, F2, F3, given]

2.1 Since $j$ and $B$ were arbitrary, all label and Borel-event identities hold, so $G$ is fully reliable. [step 1.1] ∎

## Source notes

Vaicenavicius et al. Proposition 1 states the reliability of a conditional class-probability forecast. The event-integral proof above makes the version and measurable-event hypotheses explicit.
