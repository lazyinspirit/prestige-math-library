---
id: ex-index-two-maximum-fails-the-index-one-certificate
kind: example
title: "A local maximum has the wrong Morse index for the saddle certificate"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-validated-eigenvalue-enclosures-for-an-index-one-hessian
  - thm-local-index-one-saddle-certificate-from-enclosures
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Graeme Henkelman, Blas P. Uberuaga, and Hannes Jónsson, A climbing image nudged elastic band method for finding saddle points and minimum energy paths"
      url: "https://www.math.pku.edu.cn/teachers/litj/notes/stoch_topics2017/lect04/climbimageNEB.pdf"
      locator: "§I: the transition state of interest has one negative-curvature direction"
    - title: "Xuanyu Liu, Huajie Chen, and Christoph Ortner, Convergence of the Discrete Minimum Energy Path"
      url: "https://arxiv.org/pdf/2204.07467"
      locator: "§2.1: the rigorous MEP setting assumes an index-one saddle"
---

## Example

Let $V(x,y)=-x^2-y^2$ on $U=\mathbb R^2$. The origin is a critical point and a strict local maximum, but its Hessian has two negative eigenvalues. It therefore fails the index-one enclosure required by [[def-validated-eigenvalue-enclosures-for-an-index-one-hessian]] and cannot be certified by [[thm-local-index-one-saddle-certificate-from-enclosures]].

## Facts & Assumptions

**Given:** The quadratic potential on $\mathbb R^2$ and the definitions of index-one enclosure and the local saddle certificate.

[F1] [[def-validated-eigenvalue-enclosures-for-an-index-one-hessian]]: an index-one enclosure requires $u_1\le-\gamma$ and $\ell_j\ge\gamma$ for every $j\ge2$.

[F2] [[thm-local-index-one-saddle-certificate-from-enclosures]]: the nearby-saddle claim requires such an index-one enclosure at the reported point.



**Given:** $V(x,y)=-x^2-y^2$ and the origin.

## Proof

1.1 The gradient is $\nabla V=(-2x,-2y)$, so it vanishes at $(0,0)$; the Hessian is $H=-2I$, with ordered eigenvalues $\lambda_1=\lambda_2=-2$. [given, algebra]

2.1 For any $\gamma>0$, an interval enclosing $\lambda_2=-2$ cannot have lower endpoint $\ell_2\ge\gamma>0$. Thus no exact validated enclosure of this Hessian satisfies [F1]. [F1, step 1.1]

3.1 The point is a maximum with Morse index two, not index one. Since the required enclosure premise in [F2] fails by step 2.1, the theorem makes no certification claim for it; this example illustrates why a small gradient or critical-point report alone does not establish the desired saddle type. [F2, step 2.1] ∎

