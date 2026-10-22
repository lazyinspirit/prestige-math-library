---
id: thm-ip-state-similarity-preserves-input-output-data
kind: theorem
title: State similarity preserves input-output data
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-ip-discrete-linear-input-state-output-experiment
  - def-invertible-matrix-and-general-linear-group
  - thm-matrix-multiplication-laws
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: No choice principle is used; the proof is a finite induction and matrix algebra.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mohammed Dahleh, Munther A. Dahleh, and George Verghese, Lectures on Dynamic Systems and Control, Chapter 25: Minimal State-Space Realization"
      url: "https://ocw.mit.edu/courses/6-241j-dynamic-systems-and-control-spring-2011/760782bd5ceefacb37bf8719dc23dfcb_MIT6_241JS11_chap25.pdf"
      locator: "§25.3, similarity transformation and input-output interpretation, PDF pp. 5–6"
    - title: "Sanjay Lall, Engr207c: Operator Theory and Linear Systems, State-Space Realization lecture notes"
      url: "https://lall.stanford.edu/engr207c/lectures/realization_2008_11_15_03.pdf"
      locator: "§9.2, coordinate change and common-input output identity, PDF pp. 3–4"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Let $d\ge0$, $m,p\ge1$, and $q\ge1$ be integers. Suppose a noiseless
experiment has matrices $A\in M_{d\times d}(\mathbb R)$,
$B\in M_{d\times m}(\mathbb R)$, and $C\in M_{p\times d}(\mathbb R)$,
initial state $x_0\in\mathbb R^d$, and common inputs
$(u_k)_{0\le k<q-1}$. For any invertible $T\in M_d(\mathbb R)$ define
$$\widehat A=T^{-1}AT,\qquad \widehat B=T^{-1}B,\qquad \widehat C=CT,\qquad \widehat x_0=T^{-1}x_0.$$
The experiment with $(\widehat A,\widehat B,\widehat C,\widehat x_0)$ and the
same inputs has the same output $y_k$ at every sample $0\le k<q$. The equality
holds for every horizon and every common input sequence.

## Statement references

[[def-ip-discrete-linear-input-state-output-experiment|Discrete input-state-output recurrence]]

[[def-invertible-matrix-and-general-linear-group|Invertible matrices and their inverses]]

[[thm-matrix-multiplication-laws|Associativity and identity laws for matrix products]]

[Dahleh, Dahleh, and Verghese, *Lectures on Dynamic Systems and Control*, §25.3](https://ocw.mit.edu/courses/6-241j-dynamic-systems-and-control-spring-2011/760782bd5ceefacb37bf8719dc23dfcb_MIT6_241JS11_chap25.pdf)

[Lall, *State-Space Realization*, §9.2](https://lall.stanford.edu/engr207c/lectures/realization_2008_11_15_03.pdf)

## Facts & Assumptions

**Given:** A noiseless real discrete experiment of horizon $q$, matrices $A,B,C$, initial state $x_0$, common inputs $u_0,\ldots,u_{q-2}$, and an invertible matrix $T\in M_d(\mathbb R)$.

[F1] [[def-ip-discrete-linear-input-state-output-experiment]]: the state and output equations are $x_{k+1}=Ax_k+Bu_k$ and $y_k=Cx_k$ at the stated samples.

[F2] [[def-invertible-matrix-and-general-linear-group]]: an invertible $T$ has a two-sided inverse $T^{-1}$, so $TT^{-1}=T^{-1}T=I_d$.

[F3] [[thm-matrix-multiplication-laws]]: conformable matrix products are associative and identity matrices act on either side.

## Proof

1.1 At $k=0$, the transformed initial state is $\widehat x_0=T^{-1}x_0$. If $\widehat x_k=T^{-1}x_k$ for $k<q-1$, then [F1] and the definitions give $\widehat x_{k+1}=\widehat A\widehat x_k+\widehat B u_k=T^{-1}AT T^{-1}x_k+T^{-1}Bu_k=T^{-1}(Ax_k+Bu_k)=T^{-1}x_{k+1}$; [F2] cancels $TT^{-1}$ and [F3] permits regrouping. Induction proves $\widehat x_k=T^{-1}x_k$ for $0\le k<q$. [given, F1, F2, F3, algebra]

2.1 For every such $k$, the transformed output is $\widehat y_k=\widehat C\widehat x_k=CTT^{-1}x_k=Cx_k=y_k$ by [F1] and [F2]. Since the horizon, initial state, and inputs were arbitrary, this holds for every common finite input experiment. [given, F1, F2, step 1.1, algebra] ∎

## Coordinate diagram

The square records the state-coordinate identity $T^{-1}A=\widehat A T^{-1}$:
both paths send $x$ to $T^{-1}Ax$. The proof above establishes the output
identity by induction and does not rely on the diagram.

```tikzcd
\mathbb R^d \arrow[r,"A"] \arrow[d,"T^{-1}"'] & \mathbb R^d \arrow[d,"T^{-1}"] \\
\mathbb R^d \arrow[r,"\widehat A"'] & \mathbb R^d
```
