---
id: ex-a-levi-decomposition-of-the-euclidean-motion-algebra
kind: example
title: A Levi decomposition of the Euclidean-motion algebra of R^3
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-levi-subalgebra-and-levi-decomposition]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, so(3) and its standard action"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: "§3.10, formulas (3.19)–(3.20), printed p. 44"
---

## Example

The Euclidean-motion algebra of three-space has the Levi decomposition

$$\mathfrak e(3)=\mathbb R^3\rtimes\mathfrak{so}(3),\qquad \operatorname{rad}(\mathfrak e(3))=\mathbb R^3,$$

where translations form the radical and rotations form a Levi factor.

## Facts & Assumptions

**Given:** The standard action of $\mathfrak{so}(3)$ on $\mathbb R^3$ and
the resulting semidirect-product bracket.

[L1] A Levi decomposition is a vector-space semidirect sum of the radical
and a semisimple subalgebra
([[def-levi-subalgebra-and-levi-decomposition]]).

## Verification

**Proof technique:** direct.

1.1 Put $V=\mathbb R^3$. In the semidirect product, $[(v,A),(w,B)]=(Aw-Bv,[A,B])$. Hence $V\oplus0$ is an abelian ideal, and the quotient by it is $\mathfrak{so}(3)$. [given, algebra]
1.2 Under the vector-space identification $u\mapsto A_u$, $A_u(v)=u\times v$, one has $[A_u,A_v]=A_{u\times v}$. If an ideal of $\mathfrak{so}(3)$ contains a nonzero $A_u$, then the vectors $u\times v$ as $v$ varies span $u^\perp$, and a further bracket supplies the $u$-direction. Thus the ideal is all of $\mathfrak{so}(3)$. The algebra is nonabelian and $[\mathfrak{so}(3),\mathfrak{so}(3)]=\mathfrak{so}(3)$, so it is simple and not solvable. [algebra]
2.1 Let $I$ be a solvable ideal of $\mathfrak e(3)$. Its image in the quotient is a solvable ideal of $\mathfrak{so}(3)$, hence is zero by step 1.2. Thus $I\subseteq V$. Conversely $V$ is itself a solvable ideal by step 1.1, so it is the radical. [step 1.1, step 1.2]
3.1 The subalgebra $0\oplus\mathfrak{so}(3)$ is semisimple, meets $V$ in zero, and together with $V$ spans the whole algebra. It is therefore a Levi factor by [L1]. The zero intersections and full quotient are explicit, and no choice is used. [L1, step 1.1, step 1.2] ∎