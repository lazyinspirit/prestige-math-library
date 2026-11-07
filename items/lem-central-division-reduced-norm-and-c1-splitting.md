---
id: lem-central-division-reduced-norm-and-c1-splitting
kind: lemma
title: Reduced determinant descent and the C1 splitting criterion
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
- lem-central-division-algebra-separable-maximal-subfield
- lem-finite-semilinear-descent-and-matrix-inner-automorphisms
- thm-finite-galois-extension-characterizations
- lem-finite-density-and-central-simple-base-change
justified_by: []
proof_strategy: direct
axiom_use: None; one finite Galois splitting field and finite bases suffice.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Class Field Theory, version 4.03; locally adapted intermediate
      lemma
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: Chapter IV §§2–3 for splitting/matrix descent, and SGA4½ I§3.2 Proposition3.2.2
      for the C1 reduced-norm route; full determinant descent reconstructed locally,
      no imported reduced-norm theorem.
  - title: SGA 4½, Exposé I, §3.2, Proposition3.2.2; actual complete HTML proof read
    url: https://grothendiecksga.com/read/sga4.5/en/I_3.html
    locator: Proposition3.2.2, reduced-norm descent and C1 inequality. Local helper
      supplies its own finite-Galois descent details.
verification: {}
---

## Statement

Let $D/K$ be a central division algebra of dimension $d^2$. After choosing a $K$-basis, there is a homogeneous polynomial $\operatorname{Nrd}_D$ of degree $d$ in $d^2$ coordinates over $K$, obtained by taking matrix determinant over a finite Galois splitting field. It is independent of the splitting field and splitting isomorphism, has value $1$ at $1$, and has no nonzero zero in $D$. In particular, if $K$ is $C_1$, every finite-dimensional central simple $K$-algebra is split.

## Statement references

[[lem-central-division-algebra-separable-maximal-subfield]]

[[lem-finite-semilinear-descent-and-matrix-inner-automorphisms]]

[[thm-finite-galois-extension-characterizations]]

[[lem-finite-density-and-central-simple-base-change]]

## Facts & Assumptions

**Given:** The objects in the Statement.

[F1] A central division algebra has a finite Galois splitting field. [[lem-central-division-algebra-separable-maximal-subfield]]

[F2] Every automorphism of a full matrix algebra is inner. [[lem-finite-semilinear-descent-and-matrix-inner-automorphisms]]

[F3] The fixed field of the Galois group of a finite Galois extension is its base. [[thm-finite-galois-extension-characterizations]]

[F4] Every central simple algebra has a central division representative. [[lem-finite-density-and-central-simple-base-change]]

## Proof

**Proof technique:** direct finite-dimensional construction.

**Given:** The data above.

1.1 Choose a finite Galois splitting field $E/K$ by [F1] and an isomorphism $\theta:D_E\to M_d(E)$. In a $K$-basis $e_i$ of $D$, form $P(T_1,\ldots,T_{d^2})=\det\!\left(\sum_iT_i\theta(e_i)\right)$. For $\sigma\in\operatorname{Gal}(E/K)$, transport the coefficient action on $D_E$ to a semilinear algebra automorphism of $M_d(E)$. By [F2] it is entrywise $\sigma$ followed by conjugation by a matrix. It fixes each $\theta(e_i)$ in this transported sense. Since determinant is conjugation-invariant, $\sigma(P)=P$ with the variables fixed. Thus every coefficient lies in $K$ by [F3]. [F1, F2, F3, given, choose, algebra]

2.1 A different splitting isomorphism over $E$ differs by an inner automorphism by [F2], leaving the determinant unchanged. For two finite Galois splitting fields, extend both to their finite Galois compositum and compare there by the same argument; faithful coefficient inclusion gives equality over $K$. Basis change merely substitutes the coordinate change in the same determinant function on $D$. Thus this defines the indicated reduced norm independently. [F2, step 1.1, algebra]

3.1 The determinant expression is homogeneous of degree $d$ and evaluates to $1$ on $1$. For $x\ne0$ in the division algebra, $\theta(x)$ has inverse $\theta(x^{-1})$, so its determinant is nonzero. Hence the form is nonzero and anisotropic over $K$. If $d>1$, then $d^2>d$, and the defining $C_1$ property would force a nonzero zero of this degree-$d$ form, a contradiction. Therefore $d=1$, $D=K$, and [F4] makes every central simple algebra a matrix algebra over $K$. [F4, step 1.1, step 2.1, algebra] ∎
