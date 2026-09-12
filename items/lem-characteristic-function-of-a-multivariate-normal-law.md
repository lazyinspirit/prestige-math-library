---
id: lem-characteristic-function-of-a-multivariate-normal-law
kind: lemma
title: Characteristic function of a multivariate normal law
deps: ["def-multivariate-normal-law", "lem-characteristic-function-of-a-normal-law", "thm-uniqueness-of-a-law-from-its-characteristic-function", "thm-cramer-wold-device", "def-characteristic-function-of-a-real-random-variable", "def-axiom-of-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Norris, Probability and Measure, Theorem 8.2.1
      url: https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf
    - title: Aldous and Chewi, Probability Theory notes, Theorem 8.2
      url: https://www.stat.berkeley.edu/users/aldous/205B/chewi_notes.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Assume AC. If $X\sim N_d(m,\Sigma)$, then $$\Phi_X(t):=\mathbb E e^{it\cdot X}=\exp(it\cdot m-t^T\Sigma t/2)\qquad(t\in\mathbb R^d).$$ This transform uniquely determines the law, including singular Sigma.

## Facts & Assumptions

[F1] Every linear projection has the specified scalar normal law, and the vector law exists. [[def-multivariate-normal-law]].

[F2] A scalar normal has transform exp(ims-sigma^2s^2/2). [[lem-characteristic-function-of-a-normal-law]].

[F3] Under AC scalar laws with equal characteristic functions agree. [[thm-uniqueness-of-a-law-from-its-characteristic-function]].

[F4] Under AC all linear projection laws determine the Borel vector law. [[thm-cramer-wold-device]].

## Proof

**Given:** Assume AC. If $X\sim N_d(m,\Sigma)$, then $$\Phi_X(t):=\mathbb E e^{it\cdot X}=\exp(it\cdot m-t^T\Sigma t/2)\qquad(t\in\mathbb R^d).$$ This transform uniquely determines the law, including singular Sigma.

1.1 For fixed t, [F1] makes $t\cdot X$ scalar normal of mean $t\cdot m$ and variance $t^T\Sigma t$. Evaluate its characteristic function from [F2] at scalar frequency one. This gives the displayed formula. If t=0 both sides are one; if $t^T\Sigma t=0$ the scalar law is the point mass at $t\cdot m$ and the same formula applies. [F1, F2]

2.1 Let Y have another Borel probability law with the same displayed vector transform. For every u and scalar s, $\varphi_{u\cdot Y}(s)=\Phi_Y(su)=\Phi_X(su)=\varphi_{u\cdot X}(s)$. Scalar uniqueness [F3] identifies each pair of projection laws. Then [F4] identifies the vector laws. Thus the construction in [F1] is independent of any realization choices. No determinant or inverse of Sigma is used. AC is inherited from [F1]–[F4]; in dimension zero the single possible law makes the assertion immediate. [step 1.1, F1, F3, F4] ∎

