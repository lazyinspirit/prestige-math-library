---
id: lem-adjudicate-6e70d30b9793-chern-operation-transport
kind: lemma
title: Projective relations transport the actual universal Chern operations
status: draft
domain: mathematics
deps:
  - lem-adjudicate-6e70d30b9793-field-unit-zigzag
  - lem-adjudicate-6e70d30b9793-em-picard-square
  - lem-chern-relation-uniqueness
  - thm-author-d026a7b99ace-universal-chern-space
  - def-motivic-chern-classes
  - math:def-axiom-of-choice
  - lem-adjudicate-00232ac8c49e-stable-universal-class-detection
dependency_roles:
  lem-adjudicate-6e70d30b9793-field-unit-zigzag: mathematical-premise
  lem-adjudicate-6e70d30b9793-em-picard-square: mathematical-premise
  lem-chern-relation-uniqueness: mathematical-premise
  thm-author-d026a7b99ace-universal-chern-space: mathematical-premise
  def-motivic-chern-classes: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  lem-adjudicate-00232ac8c49e-stable-universal-class-detection: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 19
---

## Statement
Assume the Axiom of Choice and the existing universe bounds. Under the specified integral smooth-field coefficient comparison, every actual universal projective-relation Chern map agrees in the two theories. For every $i\geq1$, the completed pointed perfect-$K$-space Chern maps agree after applying the coefficient comparison, and so do their maps on every closed-support fiber. The coefficient $c_0=1$ is preserved separately as the unpointed total-series constant; it supplies no additive-target support-fiber operation. These are natural map identities on the smooth site.

## Statement references

[[lem-adjudicate-6e70d30b9793-field-unit-zigzag]]

[[lem-adjudicate-6e70d30b9793-em-picard-square]]

[[lem-chern-relation-uniqueness]]

[[thm-author-d026a7b99ace-universal-chern-space]]

[[def-motivic-chern-classes]]

[[lem-adjudicate-00232ac8c49e-stable-universal-class-detection]]

## Facts & Assumptions

[A9] Choice is inherited through the current smooth motivic comparison and its classical/cycle model. [[math:def-axiom-of-choice]]

[F1] [[lem-adjudicate-6e70d30b9793-field-unit-zigzag]] and [[lem-adjudicate-6e70d30b9793-em-picard-square]] provide actual product/unit/first-Picard-map compatibility. [[lem-chern-relation-uniqueness]] gives the unique coefficients of the monic quotient-projective relation.

[F2] [[thm-author-d026a7b99ace-universal-chern-space]] supplies the specified formal completion of the actual universal bundle classes, functorially in coefficient maps; it does not identify the result by affine $K_0$ agreement. [[def-motivic-chern-classes]] fixes the original quotient convention.

[F3] [[lem-adjudicate-00232ac8c49e-stable-universal-class-detection]] proves that restrictions to finite $BGL_n$ jointly detect stable pointed classes for these smooth-field coefficient targets. Its surjectivity calculation in reduced $H^{2i-1,i}(BGL_n)$ removes the possible inverse-limit ambiguity. The resulting homotopy is a homotopy of sheaf maps, so its restrictions are coherent.


**Given:** A smooth $k$-scheme and a bundle on it, including universal bundles on classifying stacks, AC and the stated universe bounds.

**Goal:** Transport the actual higher operations, then their support maps.

## Proof

1.1 In the quotient-projective relation, the comparison takes $\xi=c_1(\mathcal O(1))$ to the target $\xi$, by [F1], and preserves its products and pullbacks. It takes the relation to the same monic relation. Apply coefficient uniqueness, including its stack-level projective-bundle version supplied in [F2], to identify the actual coefficients on each $BGL_n$. These are equal classes of maps of the entire classifying stack, not merely equal values on isomorphism classes of bundles over affine schemes. For $i\geq1$ both universal maps are pointed, and the split basepoint evaluation into the abelian derived target makes forgetting pointing injective on these mapping classes, as in [F3]. Thus their finite-rank pointed mapping classes agree. Passing between line and quotient projectivizations uses the dual bundle, with the same Picard operation. [F1, F2, F3, A9]

2.1 Fix $i\geq1$ and take the two existing stable pointed universal maps on $BGL_\infty$ supplied by [F2], placing their targets in one coefficient theory using [F1]. Step 1.1 identifies every finite-rank restriction. Apply [F3]: the odd reduced cohomology restriction system is surjective, its $R^1\varprojlim$ obstruction vanishes, and the two stable maps therefore admit a homotopy in the pointed sheaf category. This supplies the missing stable homotopy, with all site-restriction coherences, before completion. No claim that arbitrarily chosen finite-rank homotopies assemble has been used. [F1, F2, F3, A9, step 1.1]

3.1 Apply the functorial completion construction of [F2] to the stable maps and the homotopy in step 2.1. Complete, project away from trivial rank, and use the abelian target's completion equivalence. Coefficient naturality identifies the resulting completed maps. Transport through the same natural local perfect-$K$-space comparison and its canonical local-replacement unit. This gives a homotopy of the pointed perfect-$K$-space operations as natural transformations on the smooth site. [F1, F2, step 2.1]

4.1 For a closed subset $Z\subseteq V$, evaluate the single natural homotopy of step 3.1 on the restriction arrow $V\to V\setminus Z$. It is a homotopy of diagram maps, not two independently selected homotopies at its ends. Applying the homotopy-fiber functor gives the comparison of the supported operations, and the fiber projections give its forget-support square. Retain [F2]'s inverse-limit extension if an open complement requires it; no extra category-localization identification is inferred. The separate index-zero identity follows from preservation of the unit: $c_0=1$ is the unpointed series constant and the positive pointed construction is not applied to it. This proves every asserted map comparison with its original smooth scope. [F1, F2, step 3.1] ∎
