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

[F1] $SO(3)$ is an embedded Lie group whose Lie algebra $\mathfrak{so}(3)$ consists of the real skew-symmetric $3\times3$ matrices ([[ex-su-two-and-so-three-have-isomorphic-real-lie-algebras-locally-but-different-global-groups]]).

[F2] For the lifted action the tautological moment map has components $\mu^\xi(q,p)=-p(\xi_Q(q))$, where $\xi_Q$ is the fundamental field of the action on $Q$. [[prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map]].

[F3] The fundamental field of a left action is defined by the curve $t\mapsto\exp(-t\xi)\cdot q$ ([[def-fundamental-vector-field-of-a-left-action]]).

[F4] The cross product on $\mathbb R^3$ is the bilinear operation with its standard coordinate formula and scalar triple-product identity ([[def-cross-product-in-r3]]).

[F5] The coadjoint action is $\operatorname{Ad}^*_g\lambda=\lambda\circ\operatorname{Ad}_{g^{-1}}$ ([[def-coadjoint-representation-of-a-lie-group]]).

## Verification

**Proof technique:** direct.

1.1 For $\xi=(\xi_1,\xi_2,\xi_3)$ let $$\widehat\xi=\begin{pmatrix}0&-\xi_3&\xi_2\\ \xi_3&0&-\xi_1\\-\xi_2&\xi_1&0\end{pmatrix}.$$ Then $\widehat\xi u=\xi\times u$, and $\xi\mapsto\widehat\xi$ is a linear bijection $\mathbb R^3\to\mathfrak{so}(3)$. Direct expansion of the coordinate cross product gives $[\widehat\xi,\widehat\eta]=\widehat{\xi\times\eta}$ and $-\tfrac12\operatorname{tr}(\widehat\xi\widehat\eta)=\xi\cdot\eta$. [F1, F4, algebra]

2.1 For $R\in SO(3)$, preservation of the Euclidean orientation and inner product gives $R(\xi\times u)=(R\xi)\times(Ru)$, hence $\operatorname{Ad}_R\widehat\xi=R\widehat\xi R^{-1}=\widehat{R\xi}$. The trace pairing of step 1.1 identifies $\mathfrak{so}(3)^*$ with $\mathbb R^3$; under that identification the definition of the coadjoint action gives $\operatorname{Ad}^*_Rv=Rv$, since $v\cdot R^{-1}\xi=(Rv)\cdot\xi$. [step 1.1, F5, algebra]

2.2 By [F3], the fundamental field of $\widehat\xi$ on $\mathbb R^3$ is $$\xi_Q(q)=\left.\frac d{dt}\right|_0\exp(-t\widehat\xi)q =-\widehat\xi q=-\xi\times q.$$ Substituting into [F2] gives $$\mu^\xi(q,p)=-p\bigl(-\xi\times q\bigr)=p\cdot(\xi\times q).$$ [F2, F3, step 1.1, given]

3.1 The scalar triple product identity $p\cdot(\xi\times q)=\xi\cdot(q\times p)$ identifies this with the linear functional $\xi\mapsto\xi\cdot(q\times p)$; under the trace-pairing identification of step 2.1, the covector $\mu(q,p)\in\mathfrak{so}(3)^*$ is therefore the vector $q\times p$. [step 2.1, step 2.2, algebra]

4.1 The resulting map $\mu(q,p)=q\times p$ is an equivariant moment map by the cotangent-lift proposition: under simultaneous rotations, $(Rq)\times(Rp)=R(q\times p)$, which is exactly the coadjoint action computed in step 2.1. This is the classical angular momentum, with the library's minus sign in the fundamental field. [step 2.1, step 3.1, F2] ∎
