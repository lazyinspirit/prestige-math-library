---
id: thm-connection-one-form-transformation-law
kind: theorem
title: "Connection one form transformation law"
status: draft
origin: pipeline
deps: ["prop-local-coordinate-formula-for-a-bundle-connection"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Statement

If $e'=eA$ are two frames on an overlap, their matrices for the same connection satisfy
$$\omega'=A^{-1}\omega A+A^{-1}dA.$$
All entries of $dA$ are differentials of scalar functions; the order of the matrix factors is as displayed.

## Facts & Assumptions

**Given:** Two rank-$r$ frames related by a smooth $A:U\to\operatorname{GL}_r(\mathbb R)$ and the connection matrices $\omega,\omega'$.

[F1] In frame $e$, covariant differentiation has coefficient column $du+\omega u$ ([[prop-local-coordinate-formula-for-a-bundle-connection]]).

## Proof

1.1 The coefficient column of $e'_j$ in frame $e$ is the $j$th column of $A$. Applying the local formula to every column gives $\nabla e'=e(dA+\omega A)$. By definition in frame $e'$, it is also $e'\omega'=eA\omega'$. Equality of the coefficients in a basis gives $A\omega'=dA+\omega A$. [F1]

2.1 Left multiplication by $A^{-1}$ gives the asserted formula. For $A=I$ it returns $\omega'=\omega$; constant $A$ gives conjugation; in rank one it gives $\omega'=\omega+A^{-1}dA$, valid for either sign of the nonzero scalar $A$. In rank zero all matrices are empty and the identity is unique. Empty overlaps impose no condition. Smooth invertibility is needed at every point, so singular frame changes are not admitted. [step 1.1] ∎
