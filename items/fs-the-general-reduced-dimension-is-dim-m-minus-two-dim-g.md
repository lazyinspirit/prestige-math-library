---
id: fs-the-general-reduced-dimension-is-dim-m-minus-two-dim-g
kind: false-statement
title: The general reduced dimension is dim M minus two dim G
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-dimension-of-a-regular-nonzero-reduced-space, prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map, prop-regularity-of-a-moment-map-is-equivalent-to-local-freeness, prop-compact-lie-group-actions-are-proper, def-cross-product-in-r3, def-coadjoint-representation-of-a-lie-group, def-countable-choice, def-fundamental-vector-field-of-a-left-action]
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

**Given:** $\mathrm{AC}_\omega$, the group $G=SO(3)$ acting on $M=T^*\mathbb R^3$ by cotangent lifts of rotations, and the covector $\alpha=e_3\in\mathfrak{so}(3)^*\simeq\mathbb R^3$ under the identification constructed below.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the fundamental-field and cotangent suppliers.

[F1] The cross product on $\mathbb R^3$ and the coadjoint action are defined as in the cited items. [[def-cross-product-in-r3]], [[def-coadjoint-representation-of-a-lie-group]].

[F2] The rotation action is the cotangent lift of a smooth action on $Q=\mathbb R^3$, so it is Hamiltonian with tautological moment map. For $\xi\in\mathbb R^3$ the fundamental field on $Q$ is $\xi_Q(q)=-\xi\times q$, hence $\mu^\xi(q,p)=-p(\xi_Q(q))=p\cdot(\xi\times q)=\xi\cdot(q\times p)$ and $\mu(q,p)=q\times p$ under the identification. [[prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map]], [[def-fundamental-vector-field-of-a-left-action]].

[F3] Every smooth action of a compact Lie group is proper. [[prop-compact-lie-group-actions-are-proper]].

[F4] The dimension of a regular reduced space at $\alpha$ is $\dim M-\dim G-\dim G_\alpha$. [[prop-dimension-of-a-regular-nonzero-reduced-space]].

[F5] A value of the moment map is regular exactly when the stabilizers of points on its level have zero Lie algebra. [[prop-regularity-of-a-moment-map-is-equivalent-to-local-freeness]].


## Refutation

**Proof technique:** direct.

1.1 For $v\in\mathbb R^3$ put $A_v(u)=v\times u$. The coordinate formula for the cross product shows that $v\mapsto A_v$ is a vector-space isomorphism $\mathbb R^3\to\mathfrak{so}(3)$, and the vector triple-product identity gives $[A_v,A_w]=A_{v\times w}$. Moreover $RA_vR^{-1}=A_{Rv}$ for $R\in SO(3)$. After identifying the dual by the Euclidean inner product, the definition in [F1] therefore gives $\operatorname{Ad}^*_R a=Ra$. In particular, the coadjoint stabilizer $G_\alpha$ of $\alpha=e_3$ is the circle of rotations about the $e_3$-axis, so $\dim G_\alpha=1$. [F1, algebra]

2.1 Let $(q,p)\in\mu^{-1}(\alpha)$. By [F2], $q\times p=e_3\ne0$, so $q$ and $p$ are linearly independent. A rotation fixing the cotangent point $(q,p)$ fixes both vectors and hence is the identity. Thus the $SO(3)$-stabilizer of every point of the level is trivial. By [F5], $\alpha$ is a regular value, and the $G_\alpha$-action on the level is free. It is proper by [F3], and the level is nonempty because $e_1\times e_2=e_3$. [F2, F3, F5, step 1.1]

3.1 By step 1.1 the coadjoint stabilizer is one-dimensional, so by [F4] the reduced space has dimension $$\dim M_\alpha=\dim M-\dim G-\dim G_\alpha=6-3-1=2.$$ [step 1.1, step 2.1, F4]

4.1 The claimed general formula would give $\dim M-2\dim G=6-6=0$, which contradicts the computed dimension $2$ of the reduced space for this regular value. [step 3.1]

5.1 Since the correct general formula subtracts $\dim G+\dim G_\alpha$ and this nonzero coadjoint value has a proper stabilizer, the false statement fails; the zero-level formula $\dim M-2\dim G$ is a special case in which $G_\alpha=G$. [step 1.1, step 4.1, A1] ∎
