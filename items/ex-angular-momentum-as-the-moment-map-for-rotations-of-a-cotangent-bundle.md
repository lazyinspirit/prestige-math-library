---
id: ex-angular-momentum-as-the-moment-map-for-rotations-of-a-cotangent-bundle
kind: example
title: Angular momentum as the moment map for rotations of a cotangent bundle
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map, ex-su-two-and-so-three-have-isomorphic-real-lie-algebras-locally-but-different-global-groups, def-cross-product-in-r3, def-coadjoint-representation-of-a-lie-group, def-fundamental-vector-field-of-a-left-action, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §7.4.1, angular momentum, printed page 86
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 22, §22.4, printed pages 137--139
proof_strategy: direct
---

## Example

Let $SO(3)$ act on $Q=\mathbb R^3$ by rotations and let it act on
$T^*\mathbb R^3$ by cotangent lifts, with the canonical symplectic form.
Identify $\mathfrak{so}(3)$ with $\mathbb R^3$ by sending $\xi$ to the
endomorphism $u\mapsto\xi\times u$, and $\mathfrak{so}(3)^*$ with
$\mathbb R^3$ compatibly. Then the tautological moment map is the classical
**angular momentum**

$$\mu(q,p)=q\times p\in\mathbb R^3 .$$

The negative sign of the library fundamental-field convention is exactly what
reconciles the moment map with the physical angular momentum: the fundamental
field of a rotation is $\xi_Q(q)=-\xi\times q$, so
$\mu^\xi=-p(\xi_Q(q))=p\cdot(\xi\times q)=\xi\cdot(q\times p)$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the rotation action of $SO(3)$ on $\mathbb R^3$, the lifted action on $T^*\mathbb R^3$, and the identification above.

[F1] $SO(3)$ is an embedded Lie group with Lie algebra $\mathfrak{so}(3)$, and the usual identification with $\mathbb R^3$ turns the bracket into the cross product, the adjoint action into the rotation action and, via the trace pairing, the coadjoint action into the rotation action as well. [[ex-su-two-and-so-three-have-isomorphic-real-lie-algebras-locally-but-different-global-groups]], [[def-cross-product-in-r3]], [[def-coadjoint-representation-of-a-lie-group]].

[F2] For the lifted action the tautological moment map has components $\mu^\xi(q,p)=-p(\xi_Q(q))$, where $\xi_Q$ is the fundamental field of the action on $Q$. [[prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map]].

[F3] For the rotation action the fundamental field of $\xi$ is $\xi_Q(q)=\left.\frac d{dt}\right|_0\exp(-t\xi)\cdot q=-\xi\times q$. [[def-fundamental-vector-field-of-a-left-action]], [[ex-su-two-and-so-three-have-isomorphic-real-lie-algebras-locally-but-different-global-groups]].

## Verification

**Proof technique:** direct.

1.1 By [F3] the fundamental field of $\xi$ on $\mathbb R^3$ is $-\xi\times q$; substituting into [F2] gives $$\mu^\xi(q,p)=-p\bigl(-\xi\times q\bigr)=p\cdot(\xi\times q).$$ [F2, F3, given]

2.1 The scalar triple product identity $p\cdot(\xi\times q)=\xi\cdot(q\times p)$ identifies this with the linear functional $\xi\mapsto\xi\cdot(q\times p)$; under the identification of [F1] the covector $\mu(q,p)\in\mathfrak{so}(3)^*$ is therefore the vector $q\times p$. [step 1.1, F1]

3.1 The resulting map $\mu(q,p)=q\times p$ is an equivariant moment map by the cotangent-lift proposition: it is invariant under simultaneous rotations because $q\times p$ transforms by the rotation matrix, which is exactly the coadjoint action of [F1]. This is the classical angular momentum, with the library's minus sign in the fundamental field. [step 2.1, F1, F2] ∎
