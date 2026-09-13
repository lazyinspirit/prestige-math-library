---
id: ex-adjoint-and-ad-for-a-matrix-lie-group
kind: example
title: Adjoint and ad for a matrix Lie group
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, def-conjugation-and-the-adjoint-representation-of-a-lie-group, thm-the-differential-of-adjoint-is-ad, ex-matrix-exponential-as-the-lie-group-exponential]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf
      locator: Formulas (1.88)-(1.92), printed pages 79-81
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Lemma 3.15, printed page 33
---

## Example

Assume $\mathrm{AC}_\omega$. If $G\subseteq\operatorname{GL}_n(\mathbb R)$
is a matrix Lie group with Lie algebra $\mathfrak g\subseteq M_n(\mathbb R)$,
then

$$\operatorname{Ad}_gX=gXg^{-1},\qquad \operatorname{ad}_XY=XY-YX.$$

## Facts & Assumptions

**Given:** $g\in G$ and $X,Y\in\mathfrak g$.

[F1] $\operatorname{Ad}_g$ is the differential at the identity of
$C_g(h)=ghg^{-1}$. [[def-conjugation-and-the-adjoint-representation-of-a-lie-group]].

[F2] The group differential satisfies
$d(\operatorname{Ad})_I(X)=\operatorname{ad}_X$.
[[thm-the-differential-of-adjoint-is-ad]].

[F3] For a matrix Lie group, $\exp_G(tX)=e^{tX}$.
[[ex-matrix-exponential-as-the-lie-group-exponential]].

[F4] The choice assumption used by [F2] and [F3] is countable choice.
[[def-countable-choice]].

## Verification

**Proof technique:** differentiate the displayed matrix curves.

1.1 The tangent curve $c(t)=I+tX+o(t)$ gives $C_g(c(t))=I+t(gXg^{-1})+o(t)$. By [F1], differentiating at zero proves $\operatorname{Ad}_gX=gXg^{-1}$. [F1, algebra]

2.1 By [F3], a curve through the identity with velocity $X$ is $e^{tX}=I+tX+o(t)$, whose inverse is $e^{-tX}=I-tX+o(t)$. Step 1.1 therefore gives $\operatorname{Ad}_{e^{tX}}Y=e^{tX}Ye^{-tX}=Y+t(XY-YX)+o(t)$. [F3, step 1.1, algebra]

3.1 Differentiating step 2.1 at zero yields $d(\operatorname{Ad})_I(X)(Y)=XY-YX$; [F2] identifies the left side with $\operatorname{ad}_X(Y)$ and proves the second formula. For $n=0$ all matrices and maps are uniquely zero; for $X=0$ or $Y=0$ the commutator vanishes as the formula says. No invertibility is required of $X$ or $Y$, there is no metric or endpoint condition, and no iff is asserted. $\mathrm{AC}_\omega$ is used exactly through [F2] and [F3]; differentiating the fixed curves adds no choice. [F2, F3, F4, step 1.1, step 2.1] ∎
