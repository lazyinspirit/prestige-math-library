---
id: "def-injectivity-radius-at-a-point-and-of-a-manifold"
kind: "definition"
title: "Injectivity radius at a point and of a manifold"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-existence-of-normal-neighborhoods","def-extended-reals","def-countable-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Definition 23.3.3, pp.171--172
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Definition

Assume $\mathrm{AC}_\omega$. For $p\in M$, put
$$\mathcal R_p=\{r>0:B_r(0_p)\subseteq\mathcal E_p\text{ and }\exp_p|_{B_r(0_p)}\text{ is a diffeomorphism onto its image}\}.$$
The **injectivity radius at $p$** and the **injectivity radius of $M$** are the extended nonnegative numbers
$$\operatorname{inj}(p)=\sup\mathcal R_p\in(0,+\infty],\qquad \operatorname{inj}(M)=\inf_{p\in M}\operatorname{inj}(p)\in[0,+\infty].$$
For the empty manifold, the second infimum is defined to be $+\infty$.

## Facts & Assumptions

**Given:** A boundaryless Riemannian manifold $M$ and, for the pointwise clause, $p\in M$.

[F1] Under [[def-countable-choice]], [[thm-existence-of-normal-neighborhoods]] supplies an open star-shaped exponential-diffeomorphism domain about $0_p$.

[F2] [[def-extended-reals]] supplies $+\infty$ and the extended order used by the supremum and infimum conventions.

## Verification

1.1 The set $\mathcal R_p$ is nonempty: by [F1], an open exponential-diffeomorphism domain contains some ball $B_r(0_p)$ with $r>0$, and restricting a diffeomorphism to that ball remains a diffeomorphism onto its open image. It is downward closed among positive radii. Hence its supremum is a well-defined element of $(0,+\infty]$; it is $+\infty$ exactly when admissible radii are unbounded. [F1, F2]

2.1 If $M$ is nonempty, the set of positive pointwise radii has an infimum in $[0,+\infty]$; it may be zero even though every term is positive. For $M=\varnothing$, the stated empty-infimum convention gives $\operatorname{inj}(M)=+\infty$. In dimension zero, $T_pM=\{0_p\}$ and every positive-radius ball is that singleton, so $\mathcal R_p=(0,\infty)$ and $\operatorname{inj}(p)=+\infty$; dimension one uses the displayed formula unchanged. The balls are open, so their sphere endpoints are not included, while $0_p$ is always included. $\mathrm{AC}_\omega$ is used only through [F1], not in taking the uniquely determined supremum or infimum. [F1, F2, step 1.1] ∎
