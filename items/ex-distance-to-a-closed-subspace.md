---
id: ex-distance-to-a-closed-subspace
kind: example
title: Distance to a closed subspace
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-hilbert-orthogonal-projection, lem-pythagorean-theorem-and-finite-orthogonal-sums, def-orthogonality-and-orthogonal-complement, def-countable-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §1.3.3, pp.39–41"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis, Theorem 178"
      url: "https://live.ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
---

## Example

Assume the Axiom of Countable Choice. Let $M$ be a closed linear subspace of a real or complex Hilbert space $H$, let $x\in H$ and let $P_M$ be the Hilbert projection. Then for every $m\in M$

$$\|x-m\|^2=\|x-P_Mx\|^2+\|P_Mx-m\|^2 ,$$

and consequently

$$\operatorname{dist}(x,M)=\inf_{m\in M}\|x-m\|=\|x-P_Mx\| ,$$

the infimum being attained uniquely at $m=P_Mx$.

## Facts & Assumptions

[A1] $P_Mx\in M$ and $x-P_Mx\in M^\perp$, and $M$ is a linear subspace ([[def-hilbert-orthogonal-projection]]).

[A2] For pairwise orthogonal vectors $\|u+v\|^2=\|u\|^2+\|v\|^2$ ([[lem-pythagorean-theorem-and-finite-orthogonal-sums]]).

[A3] A vector of $M^\perp$ is orthogonal to every vector of $M$, and $M^\perp$ is closed under addition ([[def-orthogonality-and-orthogonal-complement]]).

[A4] Countable Choice is the hypothesis under which $P_M$ is defined ([[def-countable-choice]]).

## Verification

**Proof technique:** direct.

**Given:** Countable Choice, a closed subspace $M$ of a Hilbert space $H$, a vector $x$ and the projection $P_Mx$.

1.1 For $m\in M$ write $x-m=(x-P_Mx)+(P_Mx-m)$; the first summand lies in $M^\perp$ and the second in $M$, so the two are orthogonal and Pythagoras gives $\|x-m\|^2=\|x-P_Mx\|^2+\|P_Mx-m\|^2$. [A1, A2, A3, A4]

2.1 Since $\|P_Mx-m\|^2\ge0$, step 1.1 gives $\|x-m\|\ge\|x-P_Mx\|$ for every $m\in M$, with equality exactly at $m=P_Mx$; hence the infimum of the distances is $\|x-P_Mx\|$, attained uniquely there. [step 1.1, A1] ∎
