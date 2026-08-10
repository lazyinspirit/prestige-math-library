---
id: thm-normal-form-for-free-products-with-amalgamation
kind: theorem
title: "Normal form theorem for free products with amalgamation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-normal-form-data-for-amalgamated-free-products, lem-factor-elements-act-on-amalgamated-normal-words, thm-presentation-of-a-free-product-with-amalgamation, def-pushout-of-group-homomorphisms]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "George D. Torres, Combinatorial Group Theory, §2"
      url: "https://web.ma.utexas.edu/users/gdavtor/notes/comb_group_theory.pdf"
    - title: "B. H. Neumann, Lectures on Topics in the Theory of Infinite Groups, Ch. 9"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr21.pdf"
pipeline_run: null
---
## Statement

Every element of $G\ast_KH$ has a unique normal form $s_1\cdots s_nk$ relative to fixed transversals. A normal word of positive length is nonidentity. The represented group and these conclusions are independent of the chosen transversals.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[L1] Let $K$ be embedded in $G$ and $H$ as in def-free-product-with-amalgamation. By def-axiom-of-choice, choose left-coset transversals $S_G,S_H$ containing the identity. A **normal word** is $$s_1\cdots s_nk,$$ where $n\in\mathbb N$ (def-natural-numbers), $k\in K$, every $s_j$ is a nonidentity representative from $S_G$ or $S_H$, and consecutive representatives come from different factors. Length zero means the word is just $k$. The written form depends on the transversals. ([[def-normal-form-data-for-amalgamated-free-products]]).

[L2] With fixed transversal data, every element of $G$ and $H$ acts by a permutation on normal words. The two actions agree on $K$, inverses act inversely, and with the library's composition convention one has $P_{xy}=P_x\circ P_y$. ([[lem-factor-elements-act-on-amalgamated-normal-words]]).

[L3] Let $G=\langle X\mid R\rangle$ and $H=\langle Y\mid S\rangle$ with disjoint generators, and let $f,h$ embed $K$. If $T$ generates $K$ and words $u_t(X),v_t(Y)$ represent $f(t),h(t)$, then $$G\ast_KH\cong\langle X\sqcup Y\mid R\cup S\cup\{u_t v_t^{-1}:t\in T\}\rangle.$$ ([[thm-presentation-of-a-free-product-with-amalgamation]]).

[L4] Given homomorphisms $f:K\to G$ and $h:K\to H$ as in def-group-homomorphism, a **pushout** is a group $P$ with homomorphisms $i_G:G\to P$ and $i_H:H\to P$ such that $i_G\circ f=i_H\circ h$, and such that every compatible pair $u:G\to Q$, $v:H\to Q$ factors through a unique $w:P\to Q$ with $w\circ i_G=u$ and $w\circ i_H=v$. The maps $f,h$ need not be injective. ([[def-pushout-of-group-homomorphisms]]).

## Proof

**Proof technique:** direct.

1.1 The compatible factor permutations give, by the pushout presentation, an action of $G\ast_KH$ on the set of normal words. For a factor product $w$, applying $P_w$ to the length-zero word performs the deterministic normal-form rewrite of $w^{-1}$; since inversion is a bijection of the group, every element has such a form. [given, L1, L2, L3, L4]

2.1 The permutation attached to a normal word sends the length-zero word to the deterministic normal-form rewrite of its inverse. The resulting inversion-normalisation map is an involution: invert the represented factor product again and repeat the uniquely determined transversal rewrites. It preserves syllable length, since multiplying a nontrivial transversal representative by an element of $K$ cannot put it in $K$. Hence a positive-length normal word cannot represent the identity, and equality of two represented elements forces equality of their inverse normal forms and then of the original words. [step 1.1]

3.1 Thus existence and uniqueness hold, including the length-zero elements of $K$. [step 2.1]

4.1 Changing transversals gives another group with the same pushout universal property; the unique factor-compatible isomorphism identifies the two descriptions, so the group and its conclusions do not depend on the choices. [step 3.1] ∎
