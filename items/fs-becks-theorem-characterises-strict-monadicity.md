---
id: fs-becks-theorem-characterises-strict-monadicity
kind: false-statement
title: "FALSE: ordinary Beck creation characterizes strict monadicity"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-monadic-and-strictly-monadic-functor, thm-becks-monadicity-theorem, thm-becks-strict-monadicity-theorem, def-equivalence-and-adjoint-equivalence-of-categories, thm-fully-faithful-split-essentially-surjective-characterises-equivalence, prop-category-isomorphisms-are-bijective-on-objects-and-morphisms]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Definition 5.3.1 and Theorem 5.5.1"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "S. Mac Lane, Categories for the Working Mathematician, 2nd ed., Theorem VI.7.1"
      url: "https://pages.jh.edu/rrynasi1/NewFoundations4Math/Literature/Textbooks/Mac_Lane1998CategoriesForTheWorkingMathematician.2ndEdition.pdf"
pipeline_run: null
---

## Statement

**False claim:** a right adjoint is strictly monadic if and only if it creates coequalizers of its split pairs in the ordinary isomorphism-invariant sense.

## Facts & Assumptions

**Given:** Ordinary and strict monadicity with their respective Beck conditions.

[L1] A right adjoint is monadic when its comparison functor is an equivalence of categories and strictly monadic when that functor is an isomorphism of categories; strict monadicity implies monadicity, but the converse is not part of the definition ([[def-monadic-and-strictly-monadic-functor]]).

[L2] A monadic right adjoint creates coequalizers of its split pairs in the ordinary isomorphism-invariant sense ([[thm-becks-monadicity-theorem]]).

[L3] An isomorphism of categories is bijective on objects and on morphisms ([[prop-category-isomorphisms-are-bijective-on-objects-and-morphisms]]).

[L4] A functor is an equivalence exactly when it is fully faithful and split essentially surjective, and no choice principle is needed because the splitting is part of the data ([[thm-fully-faithful-split-essentially-surjective-characterises-equivalence]]).

## Refutation

**Proof technique:** direct.

1.1 Let $\mathcal D$ have objects tagged sets $(X,i)$ with $i\in\{0,1\}$ and let every morphism $(X,i)\to(Y,j)$ be a function $X\to Y$. The forgetful functor $U:\mathcal D\to\mathbf{Set}$ has a left adjoint $F(X)=(X,0)$. [construct]

2.1 The unit and counit of this adjunction act as identity functions, so the induced monad on $\mathbf{Set}$ is the identity monad. [step 1.1, algebra]

2.2 Its object map is not injective because $(X,0)$ and $(X,1)$ are distinct objects with the same image. Hence the comparison is not an isomorphism by [L3] and $U$ is not strictly monadic. [step 1.1, L3]

3.1 The comparison is $U$ itself. It is fully faithful because every function $X\to Y$ is a morphism $(X,i)\to(Y,j)$ and no two morphisms have the same underlying function, and the assignment $X\mapsto(X,0)$ splits it on objects, since $U(X,0)=X$ on the nose. By [L4] it is therefore an equivalence, so $U$ is monadic in the sense of [L1]. [step 2.1, L1, L4]

4.1 By [L2], ordinary Beck creation holds for this monadic right adjoint, while step 2.2 shows strict monadicity fails. Thus the implication from ordinary creation to strict monadicity is false. [step 3.1, step 2.2, L2]

5.1 The other implication is true: strict monadicity implies monadicity by [L1], and monadicity implies ordinary creation by [L2]. Hence step 4.1 refutes exactly the reverse implication in the displayed biconditional; strict creation is the additional condition characterized by strict Beck. [step 4.1, L1, L2] ∎
