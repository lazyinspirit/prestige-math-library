---
id: fs-the-general-reduced-dimension-is-dim-m-minus-two-dim-g
kind: false-statement
title: The general reduced dimension is dim M minus two dim G
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-dimension-of-a-regular-nonzero-reduced-space, prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map, prop-regularity-of-a-moment-map-is-equivalent-to-local-freeness, ex-su-two-and-so-three-have-isomorphic-real-lie-algebras-locally-but-different-global-groups, def-cross-product-in-r3, def-coadjoint-representation-of-a-lie-group, def-countable-choice, def-fundamental-vector-field-of-a-left-action]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §8.1, Theorem 8.2 and the dimension count, printed pages 100--101
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 24, §24.4, printed pages 149--150
proof_strategy: direct
---

## Statement

For a regular nonzero value the reduced dimension is
$\dim M-2\dim G$. **This is false**; the general formula subtracts
$\dim G+\dim G_\alpha$, and the two differ as soon as the coadjoint stabilizer
is proper.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the group $G=SO(3)$ acting on $M=T^*\mathbb R^3$ by cotangent lifts of rotations, and a nonzero covector $\alpha\in\mathfrak{so}(3)^*$.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the fundamental-field and cotangent suppliers.

[F1] $SO(3)$ is an embedded Lie group with Lie algebra $\mathfrak{so}(3)$; the map sending $v\in\mathbb R^3$ to the endomorphism $u\mapsto v\times u$ is a Lie-algebra isomorphism onto $\mathfrak{so}(3)$ under which $\operatorname{Ad}_g$ corresponds to the rotation $v\mapsto gv$, and the trace pairing identifies $\mathfrak{so}(3)^*\simeq\mathbb R^3$ compatibly, so that the coadjoint action is again the standard rotation action. [[ex-su-two-and-so-three-have-isomorphic-real-lie-algebras-locally-but-different-global-groups]], [[def-cross-product-in-r3]], [[def-coadjoint-representation-of-a-lie-group]].

[F2] The rotation action is the cotangent lift of a smooth action on $Q=\mathbb R^3$, so it is Hamiltonian with tautological moment map. For $\xi\in\mathbb R^3$ the fundamental field on $Q$ is $\xi_Q(q)=-\xi\times q$, hence $\mu^\xi(q,p)=-p(\xi_Q(q))=p\cdot(\xi\times q)=\xi\cdot(q\times p)$ and $\mu(q,p)=q\times p$ under the identification. [[prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map]], [[def-fundamental-vector-field-of-a-left-action]].

[F3] The coadjoint stabilizer of a nonzero $\alpha$ is the circle of rotations about the axis $\alpha$, of dimension $1$. [[def-coadjoint-representation-of-a-lie-group]].

[F4] The dimension of a regular reduced space at $\alpha$ is $\dim M-\dim G-\dim G_\alpha$. [[prop-dimension-of-a-regular-nonzero-reduced-space]].

[F5] A value of the moment map is regular exactly when the stabilizers of points on its level have zero Lie algebra. [[prop-regularity-of-a-moment-map-is-equivalent-to-local-freeness]].


## Refutation

**Proof technique:** direct.

1.1 Let $\alpha\ne0$ and let $(q,p)\in\mu^{-1}(\alpha)$, so that $q\times p=\alpha\ne0$; in particular $q$ and $p$ are linearly independent. A rotation fixing both $q$ and $p$ fixes their span, hence is the identity, so under the identification [F1] the stabilizer of $(q,p)$ in $SO(3)$ is trivial. [F1, F2, F5, given]

2.1 By [F5] the value $\alpha$ is regular, and the $G_\alpha$-action on the level is free; it is proper because the circle $G_\alpha$ is compact. The level is nonempty, for instance by taking $q=e_1$, $p=e_2$ and $\alpha=e_1\times e_2$. [step 1.1, F5]

3.1 By [F3] the coadjoint stabilizer is one-dimensional, so by [F4] the reduced space has dimension $$\dim M_\alpha=\dim M-\dim G-\dim G_\alpha=6-3-1=2.$$ [step 2.1, F3, F4]

4.1 The claimed general formula would give $\dim M-2\dim G=6-6=0$, which contradicts the computed dimension $2$ of the reduced space for this regular value. [step 3.1]

5.1 Since the correct general formula subtracts $\dim G+\dim G_\alpha$ and the nonzero coadjoint value has a proper stabilizer, the false statement fails; the zero-level formula $\dim M-2\dim G$ is a special case in which $G_\alpha=G$. [step 4.1, F3, A1] ∎
