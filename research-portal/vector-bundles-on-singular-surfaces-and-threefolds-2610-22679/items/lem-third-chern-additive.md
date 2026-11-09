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
dependency_roles:
  lem-author-9b6cb358ddc9-coefficient-algebra: mathematical-premise
  lem-author-9b6cb358ddc9-lower-vanishing: mathematical-premise
  def-article-conventions: mathematical-premise
  def-motivic-filtration: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 27
---

## Statement
Assume AC and the fixed site/universe bounds. Let $k$ be the standing algebraically closed field and let $X$ be any normal qcqs $k$-scheme. For the specified perfect-complex K-theory and actual motivic Chern operations,
$$c_3:F^3_{\rm mot}K_0(X)\longrightarrow H^{6,3}_{\rm mot}(X,\mathbb Z)$$
is a homomorphism. No finite-type, noetherian, finite-dimensional, reduced-presentation or global bundle-resolution hypothesis is added. In fact the proof supplies the same assertion on every qcqs scheme over any field.

## Facts & Assumptions
[A1] Assume the Axiom of Choice as formulated in [[math:def-axiom-of-choice]] and the stated size bounds. Choice and the fixed size bounds are inherited from lower-class vanishing in [F2] at step 1.1 and the actual coefficient calculation in [F3] at step 2.1.

[F1] [[def-article-conventions]] fixes the original normal qcqs scope; [[def-motivic-filtration]] defines the third image subgroup in this scope.

[F2] [[lem-author-9b6cb358ddc9-lower-vanishing]] proves $c_1=c_2=0$ for every class in that subgroup using actual stage maps in full scope.

[F3] [[lem-author-9b6cb358ddc9-coefficient-algebra]] proves the actual degree-three coefficient calculation after the full-scope Cartan construction.

## Proof
**Given:** The normal qcqs scheme in the statement and $x,y\in F^3_{\rm mot}K_0(X)$.

**Goal:** Preserve the article's full scope and show homomorphy for actual perfect classes.

1.1 Apply [F2] to $x,y$. Their first and second perfect Chern classes vanish, with no image-stage injectivity or finite-type hypothesis. [A1, F1, F2]

2.1 Apply [F3] to this subgroup. The degree-three Cartan cross terms vanish by step 1.1, yielding $c_3(x+y)=c_3(x)+c_3(y)$ and preservation of zero and negatives. Thus the displayed map is a homomorphism in the exact original scope. [A1, F3, step 1.1] ∎
