---
id: ex-spheres-as-so-n-plus-one-mod-so-n
kind: example
title: Spheres as SO(n+1)/SO(n)
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, cor-transitive-smooth-actions-identify-m-with-g-mod-h]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Examples following Homogeneous Space Characterization Theorem 21.18, especially sphere example, printed page 553
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Example 4.17(1), printed page 31
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Example

Assume $\mathrm{AC}_\omega$. For every $n\ge1$, the standard action gives a
canonical $SO(n+1)$-equivariant diffeomorphism

$$SO(n+1)/SO(n)\cong S^n.$$

Here $SO(n)$ is embedded as $\operatorname{diag}(A,1)$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $n\ge1$, and the standard linear action of
$SO(n+1)$ on the unit sphere $S^n\subseteq\mathbb R^{n+1}$.

[A1] A transitive smooth action identifies the manifold equivariantly with
the quotient by a point stabilizer. [[def-countable-choice]],
[[cor-transitive-smooth-actions-identify-m-with-g-mod-h]].

## Verification

**Proof technique:** prove transitivity and compute the stabilizer.

1.1 The action is smooth and preserves $S^n$. Given $u,v\in S^n$, extend each to an oriented orthonormal basis whose last vector is respectively $u$ and $v$; when necessary, changing the sign of one of the first $n$ vectors corrects the orientation. The linear map carrying the first oriented basis to the second is in $SO(n+1)$ and sends $u$ to $v$. Thus the action is transitive. [given, algebra]

1.2 A matrix in $SO(n+1)$ fixes $e_{n+1}$ exactly when it preserves $e_{n+1}^{\perp}$ and has block form $\operatorname{diag}(A,1)$. Orthogonality and determinant one then say precisely $A\in SO(n)$. Hence the stabilizer is the displayed copy of $SO(n)$. [given, algebra]

2.1 Apply [A1] at $e_{n+1}$. The map $gSO(n)\mapsto ge_{n+1}$ is the asserted equivariant diffeomorphism. For $n=1$, $SO(1)=\{1\}$ and the quotient is $SO(2)\cong S^1$. The excluded value $n=0$ also has the analogous point quotient if one adopts $SO(0)=SO(1)=\{1\}$, but it is not needed for the stated family. Countable choice is used through [A1]. [A1, step 1.1, step 1.2] ∎
