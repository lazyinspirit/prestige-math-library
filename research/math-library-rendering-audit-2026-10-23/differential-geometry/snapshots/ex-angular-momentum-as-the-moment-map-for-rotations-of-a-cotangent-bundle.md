---
id: ex-angular-momentum-as-the-moment-map-for-rotations-of-a-cotangent-bundle
kind: example
title: Angular momentum as the moment map for rotations of a cotangent bundle
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map, ex-orthogonal-and-special-orthogonal-lie-groups, def-cross-product-in-r3, def-coadjoint-representation-of-a-lie-group, def-fundamental-vector-field-of-a-left-action, def-countable-choice]
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
verification:
  audited: 2026-09-22
---

## Example

Assume $\mathrm{AC}_\omega$. Let $SO(3)$ act on $Q=\mathbb R^3$ by rotations and let it act on
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

[A1] Countable choice is [[def-countable-choice]] and is inherited through the Lie-group, fundamental-field and cotangent-lift interfaces [F1]–[F3]. The coordinate calculations make no additional choices.

[F1] $SO(3)$ is an embedded Lie group whose Lie algebra $\mathfrak{so}(3)$ consists of the real skew-symmetric $3\times3$ matrices ([[ex-orthogonal-and-special-orthogonal-lie-groups]]).

[F2] For the lifted action the tautological moment map has components $\mu^\xi(q,p)=-p(\xi_Q(q))$, where $\xi_Q$ is the fundamental field of the action on $Q$. [[prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map]].

[F3] The fundamental field of a left action is defined by the curve $t\mapsto\exp(-t\xi)\cdot q$ ([[def-fundamental-vector-field-of-a-left-action]]).

[F4] The cross product on $\mathbb R^3$ is the bilinear operation with its standard coordinate formula ([[def-cross-product-in-r3]]).

[F5] The coadjoint action is $\operatorname{Ad}^*_g\lambda=\lambda\circ\operatorname{Ad}_{g^{-1}}$ ([[def-coadjoint-representation-of-a-lie-group]]).

## Verification

**Proof technique:** direct.

1.1 For $\xi=(\xi_1,\xi_2,\xi_3)$ let $$\widehat\xi=\begin{pmatrix}0&-\xi_3&\xi_2\\ \xi_3&0&-\xi_1\\-\xi_2&\xi_1&0\end{pmatrix}.$$ Then $\widehat\xi u=\xi\times u$, and $\xi\mapsto\widehat\xi$ is a linear bijection $\mathbb R^3\to\mathfrak{so}(3)$. Direct expansion of the coordinate cross product gives $[\widehat\xi,\widehat\eta]=\widehat{\xi\times\eta}$ and $-\tfrac12\operatorname{tr}(\widehat\xi\widehat\eta)=\xi\cdot\eta$. [F1, F4, algebra]

1.2 Expanding [F4] gives $$p\cdot(\xi\times q)=p_1(\xi_2q_3-\xi_3q_2)+p_2(\xi_3q_1-\xi_1q_3)+p_3(\xi_1q_2-\xi_2q_1).$$ Grouping these six terms by $\xi_i$ gives $\xi\cdot(q\times p)$. The same six-term expansion identifies $w\cdot(u\times v)$ with the determinant whose columns are $w,u,v$. Thus the scalar triple-product identity is proved from the coordinate definition. [F4, algebra]

2.1 For $R\in SO(3)$, for every $w$ the determinant identity in step 1.2 gives $(Rw)\cdot((R\xi)\times(Ru))=\det(R)\det(w,\xi,u)=w\cdot(\xi\times u)$. Orthogonality also makes this last expression $(Rw)\cdot R(\xi\times u)$. As $Rw$ ranges over all vectors, nondegeneracy of the dot product gives $R(\xi\times u)=(R\xi)\times(Ru)$, hence $\operatorname{Ad}_R\widehat\xi=R\widehat\xi R^{-1}=\widehat{R\xi}$. The trace pairing of step 1.1 identifies $\mathfrak{so}(3)^*$ with $\mathbb R^3$; under that identification the definition of the coadjoint action gives $\operatorname{Ad}^*_Rv=Rv$, since $v\cdot R^{-1}\xi=(Rv)\cdot\xi$. [step 1.1, step 1.2, F1, F5, algebra]

2.2 By [F3], the fundamental field of $\widehat\xi$ on $\mathbb R^3$ is $$\xi_Q(q)=\left.\frac d{dt}\right|_0\exp(-t\widehat\xi)q =-\widehat\xi q=-\xi\times q.$$ Substituting into [F2] gives $$\mu^\xi(q,p)=-p\bigl(-\xi\times q\bigr)=p\cdot(\xi\times q).$$ [F2, F3, step 1.1, given]

3.1 The scalar triple product identity proved in step 1.2, $p\cdot(\xi\times q)=\xi\cdot(q\times p)$ identifies this with the linear functional $\xi\mapsto\xi\cdot(q\times p)$; under the trace-pairing identification of step 2.1, the covector $\mu(q,p)\in\mathfrak{so}(3)^*$ is therefore the vector $q\times p$. [step 1.2, step 2.1, step 2.2, algebra]

4.1 The resulting map $\mu(q,p)=q\times p$ satisfies the component moment equations by [F2]. The cotangent lift of $q\mapsto Rq$ sends the covector represented by $p$ to the one represented by $Rp$, since $p\cdot R^{-1}v=(Rp)\cdot v$. Thus under the lifted action, $(Rq)\times(Rp)=R(q\times p)$, which is exactly the coadjoint action computed in step 2.1. Together with the component equations this proves equivariance and the moment-map assertion. If $q=0$, $p=0$ or the two vectors are parallel, the formula gives zero without any division or freeness assumption. The countable-choice assumption is exactly [A1]. [step 2.1, step 3.1, F2, A1] ∎
