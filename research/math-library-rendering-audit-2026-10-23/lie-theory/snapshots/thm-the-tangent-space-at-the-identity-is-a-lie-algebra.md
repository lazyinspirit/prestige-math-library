---
id: thm-the-tangent-space-at-the-identity-is-a-lie-algebra
kind: theorem
title: The tangent space at the identity is a Lie algebra
status: published
origin: pipeline
deps: ["def-countable-choice", "def-lie-group", "cor-the-tangent-space-of-an-n-manifold-has-dimension-n", "def-lie-bracket-on-the-tangent-space-of-a-lie-group", "def-finite-dimensional-lie-algebra", "thm-left-invariant-vector-fields-evaluate-isomorphically-at-the-identity", "thm-vector-fields-form-a-lie-algebra"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf
      locator: Chapter I §10, printed page 69
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Theorem 3.16 and proof, printed page 33, for the tangent Jacobi identity via its logarithmic-product construction
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. If $G$ is a finite-dimensional real Lie group
with identity $e$, then $\mathfrak g=T_eG$, equipped with the bracket
transported from left-invariant smooth vector fields, is a finite-dimensional
real Lie algebra. It is denoted

$$\operatorname{Lie}(G)=\mathfrak g.$$

The countable-choice assumption is used exactly through the supplied
invariant-field and smooth-vector-field results.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and an $n$-dimensional real Lie group $G$ with identity $e$.

[F1] $\mathrm{AC}_\omega$ is countable choice. [[def-countable-choice]].

[F2] A Lie group here is a finite-dimensional real smooth manifold. [[def-lie-group]].

[F3] The tangent space of an $n$-manifold is an $n$-dimensional real vector space. [[cor-the-tangent-space-of-an-n-manifold-has-dimension-n]].

[F4] The tangent bracket is $[u,v]_G=[u^L,v^L]_e$, and $[u^L,v^L]=[u,v]_G^L$. [[def-lie-bracket-on-the-tangent-space-of-a-lie-group]].

[F5] A finite-dimensional Lie algebra has a bilinear alternating bracket satisfying Jacobi. [[def-finite-dimensional-lie-algebra]].

[F6] Evaluation at $e$ is a linear isomorphism from left-invariant smooth fields to $T_eG$. [[thm-left-invariant-vector-fields-evaluate-isomorphically-at-the-identity]].

[F7] Smooth vector fields have a bilinear alternating bracket satisfying Jacobi. [[thm-vector-fields-form-a-lie-algebra]].

## Proof

**Proof technique:** direct.

1.1 By [F2] and [F3], $\mathfrak g=T_eG$ is an $n$-dimensional real vector space and hence is finite-dimensional. [F2, F3]

1.2 Because the inverse of the linear isomorphism in [F6] is linear, $(au+bv)^L=au^L+bv^L$. Bilinearity of the field bracket in [F7] and the definition [F4] therefore give $[au+bv,w]_G=a[u,w]_G+b[v,w]_G$, and similarly in the second variable. [F4, F6, F7, algebra]

1.3 Alternation of the field bracket in [F7] gives $[u,u]_G=[u^L,u^L]_e=0$. Thus the tangent bracket is alternating. [F4, F7]

1.4 By [F4], the left-invariant extension of $[v,w]_G$ is $[v^L,w^L]$. Consequently the tangent Jacobi expression is the value at $e$ of $[u^L,[v^L,w^L]]+[v^L,[w^L,u^L]]+[w^L,[u^L,v^L]]$, which vanishes by the vector-field Jacobi identity in [F7]. [F4, F7]

2.1 Steps 1.1--1.4 verify every axiom in [F5], so $\mathfrak g$ is a finite-dimensional real Lie algebra. A Lie group is nonempty. If $n=0$, then $\mathfrak g=0$ and the bracket is the unique zero bracket; if $n=1$, alternation forces the bracket to vanish, consistently with the proof. No metric or nondegeneracy condition occurs, and the group is boundaryless by convention. The stated $\mathrm{AC}_\omega$ is inherited through [F4], [F6], and the smooth-field meaning in [F7]; all algebraic transport is deterministic and adds no choice. The theorem verifies a structure rather than an iff. [F1, F2, F3, F4, F5, F6, F7, step 1.1, step 1.2, step 1.3, step 1.4] ∎
