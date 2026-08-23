---
id: thm-groups-are-monadic-over-sets
kind: theorem
title: "Groups are strictly monadic over sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-monadic-and-strictly-monadic-functor, thm-the-free-group-monad-and-its-algebras-are-groups, thm-the-free-group-functor-is-left-adjoint-to-the-underlying-set-functor, thm-the-comparison-functor-exists-and-is-unique, def-t-algebra-and-algebra-homomorphism]
aliases: []
landmark: true
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
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Example 5.1.4(iv) and Corollary 5.5.3(i)"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

The underlying-set functor $U:\mathbf{Grp}\to\mathbf{Set}$ is strictly monadic, and hence monadic.

## Facts & Assumptions

**Given:** The free-group adjunction and its comparison functor.

[L1] The Eilenberg–Moore category of the free-group monad is isomorphic over $\mathbf{Set}$ to the category of groups ([[thm-the-free-group-monad-and-its-algebras-are-groups]]).

[L2] A functor is strictly monadic when its comparison functor is an isomorphism of categories ([[def-monadic-and-strictly-monadic-functor]]).

[L3] The comparison functor is $K(d)=(Ud,U\varepsilon_d)$ and acts on morphisms by $K(h)=U(h)$ ([[thm-the-comparison-functor-exists-and-is-unique]]).

[L4] Choosing a free group $(F(X),i_X)$ on every set $X$ makes $F$ left adjoint to the underlying-set functor $U$, the adjunction bijection sending $\varphi:F(X)\to G$ to $U(\varphi)i_X$ ([[thm-the-free-group-functor-is-left-adjoint-to-the-underlying-set-functor]]).

[L5] An algebra $(A,a)$ for a monad $(T,\eta,\mu)$ satisfies $a\eta_A=1_A$ and $aT(a)=a\mu_A$, and an algebra homomorphism is a map commuting with the two structure maps ([[def-t-algebra-and-algebra-homomorphism]]).

## Proof

**Proof technique:** direct.

1.1 By [L3], $K(G)=(UG,U\varepsilon_G)$ and $K(h)=U(h)$. Under [L4] the counit $\varepsilon_G$ corresponds to the identity of $UG$, so it is the unique group homomorphism $F(UG)\to G$ carrying each basis element $g$ to $g$; a homomorphism out of a free group is determined by its values on the basis, so $\varepsilon_G$ evaluates a reduced word in the elements of $G$ to its product in $G$. Hence $K(G)$ is the underlying set of $G$ with word evaluation. [L3, L4, construct]

2.1 A function $f:UG\to UH$ commutes with word evaluation exactly when it is a group homomorphism: evaluating the words $[x,y]$, the empty word and $[x^{-1}]$ turns commutation into preservation of product, identity and inverse, and conversely a homomorphism preserves the value of every word. With [L5] and $K(h)=U(h)$ this makes $K$ bijective on the morphisms between any two groups. [step 1.1, L5, algebra]

2.2 $K$ is injective on objects, since step 1.1 recovers the product of $G$ from $U\varepsilon_G$ as its value on two-letter words. [step 1.1]

2.3 $K$ is surjective on objects. Let $(A,a)$ be an algebra for the free-group monad. Put $x\cdot y:=a([x,y])$, $1:=a([\,])$ and $x^{-1}:=a([x^{-1}])$. Writing a word as the concatenation of its first letter with its tail and applying the multiplication law $aT(a)=a\mu_A$ of [L5] to the corresponding word of words gives $a(w)=a([x_1])\cdot a(\text{tail})$, while the unit law $a\eta_A=1_A$ gives $a([x])=x$; induction on length therefore identifies $a$ with evaluation of words in the operations just defined. Substituting the group-word identities into the same multiplication law turns them into associativity, the unit laws and the inverse laws, so those operations make $A$ a group $G_A$ with $a=U\varepsilon_{G_A}$, that is $(A,a)=K(G_A)$. [step 1.1, L5, construct]

3.1 By steps 2.1, 2.2 and 2.3 the comparison is bijective on objects and on morphisms, hence an isomorphism of categories over $\mathbf{Set}$; the isomorphism over $\mathbf{Set}$ asserted by [L1] may therefore be taken to be $K$. So $U$ is strictly monadic by [L2], and strict monadicity implies monadicity. [step 2.1, step 2.2, step 2.3, L1, L2] ∎
