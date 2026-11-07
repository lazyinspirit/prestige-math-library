---
id: lem-lang-map-surjective-for-smooth-connected-group-over-finite-field
kind: lemma
title: "The Lang map is surjective for a smooth connected group over a finite field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-finite-field-and-its-order
  - def-group-scheme-over-a-field
  - def-etale-morphism-schemes
  - def-locally-finite-presentation-morphism
  - def-multiplicative-subset-and-localisation
  - lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct
  - lem-nonaffine-connected-group-geometrically-connected
  - lem-nonempty-finite-type-scheme-over-algebraically-closed-field-has-rational-point
  - thm-etale-morphisms-open-and-quasi-finite
  - thm-frobenius-endomorphism-and-finite-field-automorphism
  - thm-jacobian-criterion-smooth-morphism
  - thm-smooth-morphisms-stable-base-change-composition
  - def-finite-type-and-module-finite-algebras
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "B. Poonen, Rational Points on Varieties, Theorem 5.12.19(a), proof of Lang's theorem"
      url: "https://math.mit.edu/~poonen/papers/Qpoints.pdf"
    - title: "J. S. Milne, Arithmetic Duality Theorems, 2nd ed., Appendix A.9"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $k=\mathbb F_q$ be a finite field, fix an
algebraic closure $\bar k$, and let $G/k$ be a smooth connected separated
group scheme of finite type. Let $F:G_{\bar k}\to G_{\bar k}$ be the relative
$q$-power Frobenius, which acts on geometric points by arithmetic Frobenius.
Then the Lang map
$$L_F:G(\bar k)\to G(\bar k),\qquad g\mapsto F(g)g^{-1},$$
is surjective.

## Statement references

[[def-finite-field-and-its-order]]

[[def-group-scheme-over-a-field]]

[[def-axiom-of-choice]]

[[thm-frobenius-endomorphism-and-finite-field-automorphism]]

[B. Poonen, *Rational Points on Varieties*, Theorem 5.12.19(a), proof of Lang's theorem](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

[J. S. Milne, *Arithmetic Duality Theorems*, Appendix A.9](https://www.jmilne.org/math/Books/ADTnot.pdf)

## Facts & Assumptions

**Given:** AC, $k=\mathbb F_q$, its algebraic closure $\bar k$, and a smooth
connected separated finite-type group scheme $G/k$.

[A1] AC is required for the algebraic-closure and geometric-point
interfaces below. ([[def-axiom-of-choice]])

[F1] If $q=p^r$, arithmetic Frobenius on $\bar k$ is the $r$-fold iterate
of $x\mapsto x^p$. Since the group structure maps are defined over $k$,
relative $q$-power Frobenius is a group endomorphism; its differential is
zero because $d(u^q)=q u^{q-1}du=0$ in characteristic $p$.
([[def-finite-field-and-its-order]], [[def-group-scheme-over-a-field]],
[[thm-frobenius-endomorphism-and-finite-field-automorphism]])

[F2] Assume AC. A smooth connected separated finite-type group scheme over a
field is geometrically integral, so $G_{\bar k}$ is irreducible.
([[lem-nonaffine-connected-group-geometrically-connected]])

[F3] The group operations make left and right translations and inversion
isomorphisms; their differentials are isomorphisms.
([[def-group-scheme-over-a-field]])

[F4] Assume AC. For a locally finitely presented morphism between smooth
varieties of equal dimension, an isomorphism on tangent spaces makes it
étale at that point by the Jacobian criterion; étale morphisms are open.
([[def-etale-morphism-schemes]],
[[thm-jacobian-criterion-smooth-morphism]],
[[thm-etale-morphisms-open-and-quasi-finite]])

[F5] Every nonempty finite-type scheme over an algebraically closed field has
a rational point.
([[lem-nonempty-finite-type-scheme-over-algebraically-closed-field-has-rational-point]])

[F6] A morphism between finite-type schemes over a field is locally of finite
presentation: on affine charts its target ring is noetherian, and a finite-type
algebra over a noetherian ring is finitely presented.
([[def-locally-finite-presentation-morphism]],
[[lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct]])

[F7] Assume AC. Smoothness is preserved under arbitrary base change, so
$G_{\bar k}$ is smooth over $\bar k$.
([[thm-smooth-morphisms-stable-base-change-composition]])

[F8] If $A$ is a finite-type $\bar k$-algebra, a basic open $D(f)$ is
$\operatorname{Spec}A_f$ and $A_f\cong A[T]/(fT-1)$, so it is again a
finite-type $\bar k$-algebra.
([[def-multiplicative-subset-and-localisation]],
[[def-finite-type-and-module-finite-algebras]])

[F9] At a point of an étale morphism, the residue field is finite separable
over the residue field of its image; over $\bar k$ it is therefore $\bar k$.
([[thm-etale-morphisms-open-and-quasi-finite]])

## Proof

**Proof technique:** the twisted-conjugation orbit images are nonempty opens
in an integral geometric group, so they intersect.

**Given:** The data above.

1.1 On $G(\bar k)$ define $h*t=F(h)t h^{-1}$. This is a left action because $h_1*(h_2*t)=F(h_1)F(h_2)t h_2^{-1}h_1^{-1}=(h_1h_2)*t$. For fixed $t$, its orbit morphism is $\psi_t(h)=F(h)t h^{-1}$. The differential of $F$ is zero by [F1], while inversion and the translation multiplying its value by $F(h)t$ have isomorphic differentials by [F3]. The chain rule therefore makes $d\psi_t$ an isomorphism at every point. [F1, F3, given, algebra]

2.1 By [F7], the source and target of $\psi_t:G_{\bar k}\to G_{\bar k}$ are smooth and have the same dimension. The morphism is locally of finite presentation by [F6], so [F4] makes it étale at every point and hence open. Its topological image $U_t$ is therefore open and nonempty, since $\psi_t(1)=t$. [A1, F4, F6, F7, step 1.1, given]

3.1 Let $s,t\in G(\bar k)$. By [F2], $G_{\bar k}$ is irreducible, so the nonempty open sets $U_s$ and $U_t$ from step 2.1 intersect. Choose a point in their intersection and a finite-type affine chart $V=\operatorname{Spec}A$ around it. Since the intersection is open in $V$, choose $f\in A$ such that the point lies in the basic open $D(f)$ and $D(f)\subseteq U_s\cap U_t$. By [F8], $D(f)$ is finite type over $\bar k$, so [F5] gives a geometric point $r$ in it. Since $r$ lies in each topological image, choose a point in each fiber of $\psi_s$ and $\psi_t$ over $r$. By [F9] their residue fields are $\bar k$, so they give $g_s,g_t\in G(\bar k)$ with $r=F(g_s)s g_s^{-1}=F(g_t)t g_t^{-1}$. Thus the orbits of $s$ and $t$ intersect. [A1, F2, F5, F8, F9, step 2.1, choose]

4.1 Orbits of a group action are disjoint or equal. Since step 3.1 shows any two orbits intersect, the action is transitive on $G(\bar k)$. [F3, step 1.1, step 3.1]

5.1 For arbitrary $t\in G(\bar k)$, transitivity places $t$ in the orbit of the identity, so $t=F(g)1g^{-1}=F(g)g^{-1}$ for some $g\in G(\bar k)$. This proves surjectivity of $L_F$. [step 4.1, algebra] ∎