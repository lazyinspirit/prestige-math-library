---
id: fs-the-kleisli-and-eilenberg-moore-categories-are-equivalent-for-every-monad
kind: false-statement
title: "FALSE: The Kleisli and Eilenberg–Moore categories are equivalent for every monad"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-the-comparison-functor-from-kleisli-is-fully-faithful-with-image-the-free-algebras, thm-the-free-monoid-monad-and-its-algebras-are-monoids, def-kleisli-category, def-eilenberg-moore-category, def-semigroup-and-monoid, def-equivalence-and-adjoint-equivalence-of-categories, def-full-faithful-and-essentially-surjective-functor, thm-fully-faithful-split-essentially-surjective-characterises-equivalence, cor-kleisli-and-eilenberg-moore-categories-are-equivalent-for-an-idempotent-monad, thm-the-free-monoid-functor-is-left-adjoint-to-the-underlying-set-functor]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Lemma 5.2.14"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

**False claim:** for every monad, its Kleisli and Eilenberg–Moore categories are equivalent.

The free-monoid monad on $\mathbf{Set}$ is a counterexample.

## Facts & Assumptions

**Given:** The free-monoid monad $T(X)=X^*$ on $\mathbf{Set}$.

[L1] Its Kleisli hom-set from $X$ to $Y$ is $\mathbf{Set}(X,Y^*)$ ([[def-kleisli-category]]; [[thm-the-free-monoid-monad-and-its-algebras-are-monoids]]).

[L2] Its Eilenberg–Moore category is the category of monoids ([[thm-the-free-monoid-monad-and-its-algebras-are-monoids]]).

[L3] A functor $F:\mathcal C\to\mathcal D$ is an equivalence exactly when it is fully faithful and split essentially surjective ([[thm-fully-faithful-split-essentially-surjective-characterises-equivalence]]); an equivalence consists of quasi-inverse functors and natural isomorphisms $1_{\mathcal C}\Rightarrow GF$ and $FG\Rightarrow1_{\mathcal D}$ ([[def-equivalence-and-adjoint-equivalence-of-categories]]), and $F$ is fully faithful when every $F_{A,B}:\mathcal C(A,B)\to\mathcal D(FA,FB)$ is bijective ([[def-full-faithful-and-essentially-surjective-functor]]).

[L4] The canonical Kleisli comparison is fully faithful with image the free algebras ([[thm-the-comparison-functor-from-kleisli-is-fully-faithful-with-image-the-free-algebras]]).

[L5] For an idempotent monad $T$, the canonical comparison $M:\mathcal C_T\to\mathcal C^T$ is an equivalence of categories ([[cor-kleisli-and-eilenberg-moore-categories-are-equivalent-for-an-idempotent-monad]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], the endomorphism set of $X$ in the Kleisli category is $\mathbf{Set}(X,X^*)$. [L1]

1.2 The monoid $M=\{1,e\}$ with $e^2=e$ has exactly two endomorphisms: an endomorphism fixes $1$, and it may send $e$ to either idempotent $1$ or $e$. [L2]

2.1 If $X=\varnothing$, this function set is a singleton. If $X$ is nonempty, choose $x\in X$; the words $[],[x],[x,x],\ldots$ are distinct, and the corresponding constant functions show that $\mathbf{Set}(X,X^*)$ is infinite. [step 1.1]

3.1 If the two categories were equivalent, essential surjectivity would place $M$ in the image up to isomorphism, and full faithfulness would give a bijection between its two-element endomorphism set and the endomorphism set of some Kleisli object. Step 2.1 rules this out. [L2, L3, step 1.2, step 2.1]

4.1 The claim is therefore false. The positive boundary is [L4], that the canonical comparison is fully faithful with image the free algebras, together with [L5], that it is an equivalence when the monad is idempotent. [L4, L5, step 3.1] ∎
