---
id: thm-pointwise-risk-bias-variance-decomposition
kind: theorem
title: Pointwise risk is variance plus squared bias
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-moments-variance-and-covariance
  - def-pointwise-regression-risk
  - def-regression-target-version
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory, §5.1"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Peter Hoff, Statistical Decision Problems, §§4.1–4.2"
      url: "https://www2.stat.duke.edu/~pdh10/Teaching/581/LectureNotes/intro.pdf"
---

## Statement

Assume AC as used to select the regression target version. Fix a model
parameter $\theta$ and point $x$. Let $T_x$ be a real estimator of the finite
target $\psi=m_\theta(x)$ with $\mathbb E_\theta[T_x^2]<\infty$. Define its
bias by $b_\theta(x)=\mathbb E_\theta[T_x]-m_\theta(x)$. Its pointwise
squared-error risk from [[def-pointwise-regression-risk]] satisfies
$$R_x(\theta,T_x)=\operatorname{Var}_\theta(T_x)+b_\theta(x)^2.$$

## Facts & Assumptions

**Given:** The target, estimator, finite second moment, and AC hypothesis in the statement.

[F1] Pointwise squared-error risk is $R_x(\theta,T_x)=\int(T_x(z)-m_\theta(x))^2P_\theta(dz)$. [[def-pointwise-regression-risk]].

[F2] For square-integrable $T_x$, $\operatorname{Var}_\theta(T_x)=\mathbb E_\theta[(T_x-\mathbb E_\theta T_x)^2]$. [[def-moments-variance-and-covariance]].

[A1] AC is used only through the selected real version of $m_\theta(x)$ in [[def-regression-target-version]]; the algebra below is choice-free.

## Proof

**Proof technique:** direct expansion.

1.1 Write $T_x-m_\theta(x)=(T_x-\mathbb E_\theta T_x)+b_\theta(x)$. Squaring and taking expectations gives $\mathbb E_\theta[(T_x-m_\theta(x))^2]=\mathbb E_\theta[(T_x-\mathbb E_\theta T_x)^2]+b_\theta(x)^2$, because $\mathbb E_\theta[T_x-\mathbb E_\theta T_x]=0$. [given, F2, A1, algebra]

2.1 By [F1] the left side of step 1.1 is the pointwise risk, and by [F2] its first term on the right is the variance. This is the asserted identity. [given, F1, F2, step 1.1] ∎
