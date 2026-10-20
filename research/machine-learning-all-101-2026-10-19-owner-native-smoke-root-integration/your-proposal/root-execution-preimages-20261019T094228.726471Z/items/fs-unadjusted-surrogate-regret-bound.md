---
id: fs-unadjusted-surrogate-regret-bound
kind: false-statement
title: "The unadjusted surrogate-regret bound has the wrong scale and tie convention"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-classification-calibration-of-a-surrogate
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification: {}
sources:
  references:
    - title: "Mohri, Rostamizadeh, and Talwalkar, Foundations of Machine Learning, 2nd ed., §4.7, Theorem 4.7 (the source uses c^s and a +1 decision at zero; this item refutes the different planned formula)"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
---

## Statement

The following proposed implication is false. In the binary-surrogate setup, take $R_{01}(h)=P(Yh(X)\le0)$, so zero scores count as errors. If $s\ge1,c>0$ and for every $x$,
$$|\eta(x)-1/2|^s\le c[L_\Phi(x,0)-L_\Phi(x,h_\Phi^*(x))],$$
then every measurable real-valued score $h$ with finite surrogate risk satisfies
$$R_{01}(h)-R_{01}^*\le2c[L_\Phi(h)-L_\Phi^*]^{1/s}.$$
Even replacing $2c$ by $2c^{1/s}$ does not make this zero-remainder implication true under the stated zero-score-is-error convention.

## Statement references

[[def-classification-calibration-of-a-surrogate]]: specifies the full convex nondecreasing nonnegative margin-loss setup, extended conditional minimizer, and both risks.

## Facts & Assumptions

**Given:** The proposed implication and the zero-score-is-error convention in the statement.

[F1] The conditional risk is $L_\Phi(x,u)=\eta(x)\Phi(-u)+(1-\eta(x))\Phi(u)$ and $R_{01}^*=\mathbb E\min(\eta,1-\eta)$. [[def-classification-calibration-of-a-surrogate]]

## Refutation

1.1 Give the one-point feature space its power-set sigma-algebra and take $Y=+1$ surely. Let $\Phi(t)=\max(0,1+t)$, a finite nonnegative nondecreasing convex function: each affine term is nondecreasing and their maximum satisfies the convexity inequality by bounding each affine term at a convex combination by the corresponding convex combination of the two maxima. Here $\eta=1$, $L_\Phi(x,u)=\max(0,1-u)$, and the constant minimizer $h_\Phi^*=1$ has risk zero. With $s=2,c=1/4$, the margin premise is $1/4\le(1/4)(1-0)$, an equality. For $h=-1/2$, classification excess is $1$ and surrogate excess is $3/2$, whereas the claimed bound is $(1/2)\sqrt{3/2}<1$ since its square is $3/8<1$. All scores and risks are measurable and finite. Thus the proposed coefficient is false even without zero scores and with a finite conditional minimizer. [F1, construct, algebra]

2.1 Independently use the same one-point feature space and hinge loss, but let each label have probability $1/2$. Then $L_\Phi(x,u)=[\max(0,1-u)+\max(0,1+u)]/2\ge1$, with equality at $u=0$, so take $h_\Phi^*=h=0$. For $s=1,c=1$ the premise is $0\le0$ and surrogate excess is zero. But $R_{01}(h)=1$ while $R_{01}^*=1/2$, so classification excess is $1/2$. Both $2c$ and $2c^{1/s}$ times the zero surrogate excess vanish. This refutes the uncorrected tie convention independently of the scale defect and completes the refutation. [F1, construct, step 1.1, algebra] ∎

## Source notes

The displayed false implication preserves the controlling ML-07 formula exactly. Mohri et al. Theorem 4.7 instead puts $c^s$ in its premise and predicts $+1$ at a zero score. Its regret theorem remains sound using an upper bound in place of its Lemma 4.5 equality at zero. The two witnesses here use the same approved class of losses and do not rely on any endpoint, selection, or limiting assumption.
