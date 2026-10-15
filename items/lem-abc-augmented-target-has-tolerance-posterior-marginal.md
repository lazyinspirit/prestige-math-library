---
id: lem-abc-augmented-target-has-tolerance-posterior-marginal
kind: lemma
title: The augmented ABC target has the tolerance posterior as its parameter marginal
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-abc-augmented-tolerance-target
  - def-approximate-bayesian-computation
  - lem-prior-and-model-kernel-define-joint-law
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Jarno Lintusaari, Michael U. Gutmann, Ritabrata Dutta, Samuel Kaski, and Jukka Corander, Fundamentals and Recent Developments in Approximate Bayesian Computation, §4"
      url: https://www.pure.ed.ac.uk/ws/files/27977065/Lintusaari2016b.pdf
    - title: "Osvaldo A. Martin, Ravin Kumar, and Junpeng Lao, Bayesian Modeling and Computation in Python, Chapter 8"
      url: https://bayesiancomputationbook.com/markdown/chp_08.html
---

## Statement

Under the hypotheses of [[def-abc-augmented-tolerance-target]] with
$Z_\epsilon>0$, the $\Theta$-marginal of
$\widetilde\Pi_\epsilon$ is the tolerance-conditioned law
$\Pi_\epsilon(\cdot\mid s_0)$ defined in
[[def-approximate-bayesian-computation]].

## Facts & Assumptions

**Given:** A prior probability $\Pi$, simulator probability kernel $K$, measurable
summary $S$, observed summary $s_0$, and $\epsilon\ge0$ with
$Z_\epsilon=p_\epsilon(s_0)>0$.

[F1] [[def-abc-augmented-tolerance-target]]: $H(C)=\int K(\theta,C_\theta)\Pi(d\theta)$,
$A_\epsilon=S^{-1}(B_\epsilon(s_0))$, and
$\widetilde\Pi_\epsilon(C)=Z_\epsilon^{-1}\int_C\mathbf1_{A_\epsilon}(y)\,dH$.

[F2] [[def-approximate-bayesian-computation]]: with $M$ the law of
$(\theta,S(Y))$ under the prior-simulator joint law,
$M(A\times D)=\int_AK(\theta,S^{-1}(D))\Pi(d\theta)$,
$p_\epsilon(s_0)=M(\Theta\times B_\epsilon(s_0))$, and
$\Pi_\epsilon(A\mid s_0)=M(A\times B_\epsilon(s_0))/p_\epsilon(s_0)$.

[F3] [[lem-prior-and-model-kernel-define-joint-law]]: for measurable
$A\subseteq\Theta$ and $D\subseteq\mathsf Y$,
$H(A\times D)=\int_AK(\theta,D)\Pi(d\theta)$.

## Proof

**Given:** The hypotheses in the Statement.

1.1 For each $A\in\mathcal T$, [F1] and the rectangle formula [F3] give $\widetilde\Pi_\epsilon(A\times\mathsf Y)=Z_\epsilon^{-1}\int_AK(\theta,A_\epsilon)\Pi(d\theta)$. [F1, F3, given]

2.1 Since $A_\epsilon=S^{-1}(B_\epsilon(s_0))$, [F2] gives $M(A\times B_\epsilon(s_0))=\int_AK(\theta,A_\epsilon)\Pi(d\theta)$ and $p_\epsilon(s_0)=Z_\epsilon$; substitution into [F2] makes step 1.1 exactly $\Pi_\epsilon(A\mid s_0)$ for every measurable $A$, so the parameter marginal is the tolerance posterior. [F1, F2, step 1.1, algebra] ∎
