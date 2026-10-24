---
id: cor-group-actions-are-strictly-monadic-over-sets
kind: corollary
title: "$G$-sets are strictly monadic over sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-monadic-and-strictly-monadic-functor, def-monad, def-t-algebra-and-algebra-homomorphism, def-eilenberg-moore-category, def-group-action, def-equivariant-map-of-group-actions]
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
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Corollary 5.5.3(ii) and Exercise 5.5.iv"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

For a fixed group $G$, the underlying-set functor from the category of left $G$-sets and equivariant maps to $\mathbf{Set}$ is strictly monadic.

## Facts & Assumptions

**Given:** A fixed group $G$ with identity $e$.

[L1] A left $G$-action satisfies $e\cdot x=x$ and $(gh)\cdot x=g\cdot(h\cdot x)$ ([[def-group-action]]).

[L2] A map of $G$-sets is equivariant when $f(g\cdot x)=g\cdot f(x)$ for every $g,x$ ([[def-equivariant-map-of-group-actions]]).

[L3] A $T$-algebra structure $a:TX\to X$ satisfies $a\eta_X=1_X$ and $aT(a)=a\mu_X$, and an algebra homomorphism satisfies the corresponding square ([[def-t-algebra-and-algebra-homomorphism]]).

[L4] A functor is strictly monadic when its comparison with the Eilenberg–Moore category is an isomorphism ([[def-monadic-and-strictly-monadic-functor]]).

## Proof

**Proof technique:** direct.

1.1 Define $F(X)=G\times X$ with action $h\cdot(g,x)=(hg,x)$. A function $u:X\to UY$ into a $G$-set extends uniquely to the equivariant map $\bar u(g,x)=g\cdot u(x)$, whose inverse correspondence evaluates at $(e,x)$. This natural bijection gives the free-action adjunction $F\dashv U$. [L1, construct]

2.1 Its induced monad is $T(X)=G\times X$, with $T(f)=1_G\times f$, $\eta_X(x)=(e,x)$, and $\mu_X(g,(h,x))=(gh,x)$. The group identity and associativity laws verify the monad equations. [step 1.1, L1, algebra]

3.1 A map $a:G\times X\to X$ satisfies the two algebra laws in [L3] exactly when $a(e,x)=x$ and $a(g,a(h,x))=a(gh,x)$, which are the action laws in [L1]. This includes the empty set, the trivial group, and trivial actions. [step 2.1, L1, L3]

4.1 The algebra-homomorphism equation is $f(a(g,x))=b(g,f(x))$, exactly the equivariance condition in [L2]. [step 3.1, L2, L3]

5.1 By steps 3.1 and 4.1, the comparison for the adjunction constructed in step 1.1 is bijective on objects and morphisms, with inverse given by the same action structure and underlying functions. It is therefore an isomorphism over $\mathbf{Set}$, so the underlying-set functor is strictly monadic by [L4]. [step 1.1, step 3.1, step 4.1, L4] ∎
