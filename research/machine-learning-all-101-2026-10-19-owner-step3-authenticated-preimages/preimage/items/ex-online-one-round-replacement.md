---
id: ex-online-one-round-replacement
kind: example
title: "Replacing one full loss vector changes a later action kernel"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - alg-private-randomized-weighted-majority
  - thm-private-online-learning-regret-under-composition
justified_by: []
proof_strategy: direct
axiom_use: The finite calculation uses no choice axiom; the transcript-privacy guarantee belongs to the Axiom-of-Choice-dependent theorem.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Cynthia Dwork and Aaron Roth, The Algorithmic Foundations of Differential Privacy, Chapter 11 §11.2"
      url: "https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf"
---

## Example

Let $k=2$, $T=3$, and $\eta>0$. Compare the all-zero loss sequence with the sequence whose second loss vector is $(1,0)$ and whose first and third vectors are zero. These two fixed inputs differ by replacement of one complete time-step vector. For both inputs the first- and second-round action kernels are uniform on $\{1,2\}$. At round three the all-zero input has weights $(1,1)$ and probabilities $(1/2,1/2)$, while the replaced input has weights $(e^{-\eta},1)$ and probabilities $(1/(1+e^\eta),e^\eta/(1+e^\eta))$. In particular, the event that the third action is $1$ has probability ratio $(1+e^\eta)/2$ between the all-zero and replaced inputs.

## Example references

[[alg-private-randomized-weighted-majority|Full-information exponential-weight procedure]]

[[thm-private-online-learning-regret-under-composition|Per-round replacement privacy guarantee]]

Dwork and Roth, *The Algorithmic Foundations of Differential Privacy*, Chapter 11 §11.2: [full text](https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf).

## Facts & Assumptions

**Given:** Two-action, three-round loss sequences, with $\eta>0$ and all loss vectors in $[0,1]^2$.

[F1] Before round $t$, the weight of action $j$ is $\exp(-\eta\sum_{s<t}\ell_s(j))$, and its conditional action probability is its weight divided by the sum of the two weights. [[alg-private-randomized-weighted-majority]]

[F2] Replacing one whole vector at one time step is the adjacency relation used for the online privacy theorem; for every common prior history the action kernel satisfies ordered $(2\eta,0)$ event inequalities. [[thm-private-online-learning-regret-under-composition]]

## Verification

**Given:** The two loss sequences in the Example and [F1]–[F2].

1.1 The sequences agree at rounds one and three and differ only at round two, where $(0,0)$ is replaced by $(1,0)$, so they are adjacent by [F2]. Both histories before the first draw are empty, and both histories before the second draw contain only the common zero vector $\ell_1$; hence each corresponding first- and second-round pair of weights is $(1,1)$ by [F1]. [given, F1, F2]

2.1 Before round three, the all-zero sequence has cumulative loss $(0,0)$, while the replaced sequence has cumulative loss $(1,0)$. Formula [F1] gives weights $(1,1)$ and $(e^{-\eta},1)$, respectively; dividing by their normalizers yields $(1/2,1/2)$ and $(e^{-\eta}/(1+e^{-\eta}),1/(1+e^{-\eta}))=(1/(1+e^\eta),e^\eta/(1+e^\eta))$. [F1, step 1.1, algebra]

3.1 For the event $\{1\}$ at round three, the all-zero probability divided by the replaced-input probability is $(1/2)/(1/(1+e^\eta))=(1+e^\eta)/2$. Thus the third-round kernels differ, while their ordered ratios remain covered by the theorem's $(2\eta,0)$ bound from [F2]; this calculation makes no claim that a transcript-level privacy bound fails. [F2, step 2.1, algebra] ∎
