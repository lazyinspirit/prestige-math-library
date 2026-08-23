---
id: ex-the-comparison-functor-for-the-free-group-adjunction
kind: example
title: "The comparison functor for the free-group adjunction"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-the-free-group-monad-and-its-algebras-are-groups, thm-the-comparison-functor-exists-and-is-unique, thm-the-free-group-functor-is-left-adjoint-to-the-underlying-set-functor, def-t-algebra-and-algebra-homomorphism, def-eilenberg-moore-category, prop-integers-modulo-n-as-a-quotient-group]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Example 5.1.4(iv) and Section 5.3"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Example

For the free-group adjunction, the comparison sends a group $G$ to the algebra whose carrier is $UG$ and whose structure map evaluates a reduced word in elements of $G$ to its product. It sends each group homomorphism to its underlying function.

For $C_2=\mathbb Z/2\mathbb Z$, the word $[\bar1,\bar1,\bar1]$ evaluates to $\bar1$, while every adjacent inverse pair and every occurrence of the identity may be removed before evaluation.

## Facts & Assumptions

**Given:** The free-group adjunction and a group $G$.

[L1] The Eilenberg–Moore category of the free-group monad is isomorphic over $\mathbf{Set}$ to the category of groups ([[thm-the-free-group-monad-and-its-algebras-are-groups]]).

[L2] The comparison sends $d$ to $(Ud,U\varepsilon_d)$ and sends a morphism to its image under $U$ ([[thm-the-comparison-functor-exists-and-is-unique]]).

[L3] The quotient group $(\mathbb Z,+)/2\mathbb Z$ is $(\mathbb Z/2,+)$ with addition of congruence classes ([[prop-integers-modulo-n-as-a-quotient-group]]).

[L4] Choosing a free group $(F(X),i_X)$ on every set $X$ makes $F$ left adjoint to the underlying-set functor $U$, the adjunction bijection sending $\varphi:F(X)\to G$ to $U(\varphi)i_X$ ([[thm-the-free-group-functor-is-left-adjoint-to-the-underlying-set-functor]]).

[L5] An algebra homomorphism is a map commuting with the two algebra structure maps ([[def-t-algebra-and-algebra-homomorphism]]).

## Verification

**Proof technique:** direct.

1.1 By [L2], the structure map is the underlying counit $U\varepsilon_G$ of the free-group adjunction. Under [L4] the counit corresponds to the identity of $UG$, so $\varepsilon_G$ is the unique group homomorphism $F(UG)\to G$ carrying each basis element $g$ to $g$; a homomorphism out of a free group is determined by its values on the basis, so it evaluates a reduced word in $UG$ to its product in $G$. [L2, L4]

1.2 By [L5] the algebra-homomorphism equation says that a function commutes with evaluation of every word. Evaluating the words $[x,y]$, the empty word and $[x^{-1}]$ makes such a function preserve product, identity and inverse, and conversely a group homomorphism preserves the value of every word; so the comparison morphisms are exactly group homomorphisms, in agreement with [L1] and with $K(h)=U(h)$ in [L2]. [L1, L2, L5]

2.1 Evaluating a one-letter word returns its letter, and evaluating after substitution of words agrees with evaluating the flattened word by associativity of group multiplication. These are the algebra unit and multiplication laws. [step 1.1, algebra]

3.1 In the group [L3], one has $\bar1+\bar1=\bar0$ and $\bar0+\bar1=\bar1$, so the displayed three-letter word evaluates to $\bar1$. [step 1.1, L3, construct] ∎
