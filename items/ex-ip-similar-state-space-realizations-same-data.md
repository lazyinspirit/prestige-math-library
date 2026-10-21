---
id: ex-ip-similar-state-space-realizations-same-data
kind: example
title: Two similar realizations with identical data
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-ip-discrete-linear-input-state-output-experiment
  - thm-ip-state-similarity-preserves-input-output-data
justified_by: []
aliases: []
generation:
  role: example
axiom_use: No choice principle is used; the example is a finite matrix calculation.
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Mohammed Dahleh, Munther A. Dahleh, and George Verghese, Lectures on Dynamic Systems and Control, Chapter 25: Minimal State-Space Realization"
      url: "https://ocw.mit.edu/courses/6-241j-dynamic-systems-and-control-spring-2011/760782bd5ceefacb37bf8719dc23dfcb_MIT6_241JS11_chap25.pdf"
      locator: "§25.3, state-coordinate transformation, PDF pp. 5–6"
    - title: "Sanjay Lall, Engr207c: Operator Theory and Linear Systems, State-Space Realization lecture notes"
      url: "https://lall.stanford.edu/engr207c/lectures/realization_2008_11_15_03.pdf"
      locator: "§9.2, coordinate change, PDF pp. 3–4"
---

## Example

Let
$$A=\begin{bmatrix}0&0\\0&1\end{bmatrix},\quad B=\begin{bmatrix}1\\0\end{bmatrix},\quad C=\begin{bmatrix}1&1\end{bmatrix},\quad x_0=\begin{bmatrix}1\\1\end{bmatrix},\quad T=\begin{bmatrix}1&1\\0&1\end{bmatrix},\quad T^{-1}=\begin{bmatrix}1&-1\\0&1\end{bmatrix}.$$
The transformed realization has
$$\widehat A=\begin{bmatrix}0&-1\\0&1\end{bmatrix},\quad \widehat B=\begin{bmatrix}1\\0\end{bmatrix},\quad \widehat C=\begin{bmatrix}1&2\end{bmatrix},\quad \widehat x_0=\begin{bmatrix}0\\1\end{bmatrix}.$$
The two state-space descriptions differ, but for every common input sequence
their exact output sequences agree at every sample.

## Example references

[[def-ip-discrete-linear-input-state-output-experiment|Discrete state and output equations]]

[[thm-ip-state-similarity-preserves-input-output-data|Input-output invariance under state similarity]]

[Dahleh, Dahleh, and Verghese, *Lectures on Dynamic Systems and Control*, §25.3](https://ocw.mit.edu/courses/6-241j-dynamic-systems-and-control-spring-2011/760782bd5ceefacb37bf8719dc23dfcb_MIT6_241JS11_chap25.pdf)

[Lall, *State-Space Realization*, §9.2](https://lall.stanford.edu/engr207c/lectures/realization_2008_11_15_03.pdf)

## Facts & Assumptions

**Given:** The displayed matrices, the common initial/input experiment, and the corresponding transformed matrices and initial state.

[F1] [[def-ip-discrete-linear-input-state-output-experiment]]: states obey $x_{k+1}=Ax_k+Bu_k$ and outputs obey $y_k=Cx_k$.

[F2] [[thm-ip-state-similarity-preserves-input-output-data]]: if $T$ is invertible and the transformed matrices and initial state are $T^{-1}AT$, $T^{-1}B$, $CT$, and $T^{-1}x_0$, then common inputs give identical outputs at every sample.

## Verification

1.1 Direct multiplication gives $TT^{-1}=T^{-1}T=I_2$, so $T$ is invertible. Multiplying the displayed matrices gives $T^{-1}AT=\widehat A$, $T^{-1}B=\widehat B$, $CT=\widehat C$, and $T^{-1}x_0=\widehat x_0$. Also $\widehat A\ne A$ and $\widehat C\ne C$, so these are distinct coordinate descriptions. [given, algebra]

2.1 The hypotheses of [F2] hold by step 1.1, so every finite common-input experiment has the same output sequence in both descriptions. [F1, F2, step 1.1]

3.1 Steps 1.1 and 2.1 exhibit distinct realization matrices and initial coordinates with identical data, as claimed. [step 1.1, step 2.1] ∎
