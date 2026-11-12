---
id: lem-third-chern-additive
kind: lemma
title: Third Chern additivity on the third piece
status: published
domain: mathematics
deps:
  - lem-author-9b6cb358ddc9-coefficient-algebra
  - lem-author-9b6cb358ddc9-lower-vanishing
  - def-article-conventions
  - def-motivic-filtration
  - math:def-axiom-of-choice
  - def-motivic-cohomology
  - thm-author-d026a7b99ace-universal-chern-space
  - math:def-grothendieck-universe-closure-convention
dependency_roles:
  lem-author-9b6cb358ddc9-coefficient-algebra: mathematical-premise
  lem-author-9b6cb358ddc9-lower-vanishing: mathematical-premise
  def-article-conventions: mathematical-premise
  def-motivic-filtration: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  def-motivic-cohomology: mathematical-premise
  thm-author-d026a7b99ace-universal-chern-space: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
formulation_deps:
  - def-article-conventions
  - def-motivic-filtration
  - math:def-axiom-of-choice
  - def-motivic-cohomology
  - thm-author-d026a7b99ace-universal-chern-space
  - math:def-grothendieck-universe-closure-convention
argument_deps:
  - lem-author-9b6cb358ddc9-coefficient-algebra
  - lem-author-9b6cb358ddc9-lower-vanishing
  - def-article-conventions
  - def-motivic-filtration
  - math:def-axiom-of-choice
  - def-motivic-cohomology
  - thm-author-d026a7b99ace-universal-chern-space
  - math:def-grothendieck-universe-closure-convention
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 30
---

## Statement
Assume AC and the fixed site/universe bounds. Let $k$ be the standing algebraically closed field and let $X$ be any normal qcqs $k$-scheme. For the specified perfect-complex K-theory and actual motivic Chern operations,
$$c_3:F^3_{\rm mot}K_0(X)\longrightarrow H^{6,3}_{\rm mot}(X,\mathbb Z)$$
is a homomorphism. No finite-type, noetherian, finite-dimensional, reduced-presentation or global bundle-resolution hypothesis is added. In fact the proof supplies the same assertion on every qcqs scheme over any field.

## Facts & Assumptions
[A1] Assume the Axiom of Choice as formulated in [[math:def-axiom-of-choice]]. Fix the compatible site and universe bounds required by the cited constructions, including $\omega$ in the scheme-data universe. Universes have the closure convention of [[math:def-grothendieck-universe-closure-convention]]; their existence is an additional size premise, not a consequence of Choice. These are the hypotheses of the actual operations in [F4], the filtration in [F1], lower-class vanishing in [F2] at step 1.1 and the coefficient calculation in [F3] at step 2.1.

[F1] [[def-article-conventions]] fixes the standing algebraically closed field and the qcqs scheme category. Normal here means that every local ring is an integrally closed domain; it is a restriction on the original scope, not needed in the calculation. [[def-motivic-filtration]] fixes the nonconnective perfect-complex theory $K(X)$, $K_0(X)=\pi_0K(X)$, and the subgroup $F^3_{\rm mot}K_0(X)=\operatorname{im}(\pi_0F^3_{\rm mot}K(X)\to K_0(X))$. The arrow is the third-stage augmentation to the same perfect $K$-theory; the image is a subgroup under its inherited addition. The filtration is available on qcqs schemes over any field under [A1].

[F2] [[lem-author-9b6cb358ddc9-lower-vanishing]] proves $c_1=c_2=0$ for every class in that subgroup using actual stage maps in full scope.

[F3] [[lem-author-9b6cb358ddc9-coefficient-algebra]] proves the actual degree-three coefficient calculation after the full-scope Cartan construction. It asserts additivity on every subgroup of perfect $K_0(X)$ with $c_1=c_2=0$, including preservation of zero and negatives, on every qcqs field-scheme under [A1].

[F4] [[def-motivic-cohomology]] defines $H^{6,3}_{\rm mot}(X,\mathbb Z)=H^6(\mathbb Z(3)_{\rm mot}(X))$, an abelian group independent of the representing cochain complex. [[thm-author-d026a7b99ace-universal-chern-space]] supplies the actual pointed Chern operations on perfect $K$-spaces on every qcqs field-scheme under [A1]. Their induced class operations are the $c_i:K_0(X)\to H^{2i,i}_{\rm mot}(X,\mathbb Z)$ used in [F2] and [F3]; the displayed map is the restriction of that $c_3$ to [F1]'s subgroup. A group homomorphism here means a function preserving addition; the claim does not assume additivity of a higher Chern operation on all of $K_0(X)$.

## Proof
**Given:** A qcqs scheme $X$ over any field satisfying [A1], with $x,y\in F^3_{\rm mot}K_0(X)$; in particular the normal scheme over the standing algebraically closed field in the original assertion.

**Goal:** Show homomorphy of the specified actual operation in both stated scopes.

1.1 Use [F1] and [F4] to identify the image subgroup, target and actual perfect-class operations under [A1]. Apply [F2] to $x,y$. Their first and second Chern classes vanish, with no image-stage injectivity or finite-type hypothesis. [A1, F1, F2, F4, given]

2.1 Apply [F3] to [F1]'s subgroup and [F4]'s actual operation. By step 1.1 the degree-three Cartan cross terms vanish, so $c_3(x+y)=c_3(x)+c_3(y)$; [F3] also gives preservation of zero and negatives. Thus the displayed map is a homomorphism. The argument applies to every qcqs scheme over any field under [A1], and hence to the original normal qcqs scope without any of the additional hypotheses excluded in the statement. [A1, F1, F3, F4, step 1.1] ∎
