---
id: thm-order-of-automorphism-group-of-elementary-abelian-rank-two
kind: theorem
title: "For prime $p$, $|\\operatorname{Aut}((\\mathbb Z/p)\\times(\\mathbb Z/p))|=(p^2-1)(p^2-p)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-group-isomorphism-and-automorphism, def-external-direct-product-of-groups, thm-external-direct-product-is-a-group, thm-z-mod-p-is-a-field, thm-standard-representatives-modulo-n, thm-product-rule, thm-subset-of-a-finite-set, def-generated-subgroup]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Statement

For every prime $p$, $$|\operatorname{Aut}((\mathbb Z/p)\times(\mathbb Z/p))|=(p^2-1)(p^2-p).$$ See [[def-group-isomorphism-and-automorphism]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] An isomorphism is a bijective group homomorphism; an automorphism is an isomorphism from a group to itself, and $$\operatorname{Aut}(G):=\{f:G\to G:f\text{ is an automorphism}\}.$$ ([[def-group-isomorphism-and-automorphism]]).

[L2] Let $G$ and $H$ be groups. Their external direct product has underlying set $$G\times H:=\{(g,h):g\in G,\ h\in H\}$$ and componentwise operation $$(g,h)(g',h') := (gg',hh').$$ The fact that this operation makes $G\times H$ a group, with the indicated identity and inverses, is proved in thm-external-direct-product-is-a-group. Until that result is used, this definition introduces only the set and its componentwise binary operation. ([[def-external-direct-product-of-groups]]).

[L3] For groups $G$ and $H$, the componentwise operation of def-external-direct-product-of-groups makes $G\times H$ a group. Its identity is $(e_G,e_H)$, and $$(g,h)^{-1}=(g^{-1},h^{-1}).$$ Moreover the coordinate maps $\pi_G(g,h)=g$ and $\pi_H(g,h)=h$ are group homomorphisms. ([[thm-external-direct-product-is-a-group]]).

[L4] For every prime $p$, the operations of addition and multiplication on $\mathbb Z/p$ make it a field (def-field). ([[thm-z-mod-p-is-a-field]]).

[L5] Let $n$ be a positive integer. Every class in $\mathbb Z/n$ (def-integers-modulo-n) contains exactly one integer $r$ with $0\le r<n$. Consequently the map $$r\longmapsto[r]_n\qquad(0\le r<n)$$ is a bijection from the von Neumann natural $n$ to $\mathbb Z/n$, and $|\mathbb Z/n|=n$. This includes $n=1$, where the only representative is $0$. For $n=0$, the map $a\mapsto[a]_0$ is a bijection $\mathbb Z\to\mathbb Z/0$. ([[thm-standard-representatives-modulo-n]]).

[L6] 1. If $A$ and $B$ are finite then $A \times B$ is finite and $\lvert A \times B\rvert = \lvert A\rvert \cdot \lvert B\rvert$ (def-finite-cardinality). 2. Let $m \in \mathbb{N}$ and let $A_0, \dots, A_{m-1}$ be finite sets. Write $$\prod_{i<m} A_i := \{\, f : f \text{ is a function with domain } m \text{ and } f(i) \in A_i \text{ for every } i < m \,\}.$$ Then $\prod_{i<m} A_i$ is finite and $\big\lvert\prod_{i<m} A_i\big\rvert = \prod_{i<m}\lvert A_i\rvert$, the right-hand product being the $\mathbb{N}$-valued one of def-nat-finite-sum-and-product. ([[thm-product-rule]]).

[L7] Let $A$ be a finite set (def-countable) and let $B \subseteq A$. Then: 1. $B$ is finite; 2. $\lvert B\rvert \le \lvert A\rvert$ (def-finite-cardinality); 3. $\lvert B\rvert = \lvert A\rvert$ if and only if $B = A$; 4. every injection $f : A \to A$ is a bijection, and every surjection $f : A \to A$ is a bijection. ([[thm-subset-of-a-finite-set]]).

[L8] For a subset $S$ of a group $G$, the generated subgroup is $$\langle S\rangle:=\bigcap\{H:H\le G\text{ and }S\subseteq H\},$$ the smallest subgroup of $G$ containing $S$. ([[def-generated-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 In the additive group $E_p=(\mathbb Z/p)\times(\mathbb Z/p)$, a homomorphism $E_p\to E_p$ is determined by the images $u$ and $v$ of the two coordinate generators, because every element has a unique coordinate expression. [L1, L2, L3, L4, L5, L6, L7, L8, given, algebra]

2.1 If $u=0$ or $v\in\langle u\rangle$, the image is a proper cyclic subgroup. If $u\ne0$ and $v\notin\langle u\rangle$, the $p$ elements of each coset $jv+\langle u\rangle$ are disjoint as $j$ varies, so $u,v$ generate all $p^2$ elements and the homomorphism is bijective. [step 1.1, given, algebra]

3.1 There are $p^2-1$ choices for nonzero $u$. Its cyclic subgroup has exactly $p$ elements, leaving $p^2-p$ choices for $v$; multiplication gives $(p^2-1)(p^2-p)$ automorphisms. [step 2.1, given, algebra]

4.1 When $p=2$, the same count gives $(4-1)(4-2)=6$; the argument is entirely in coordinates and makes no matrix-group identification. This proves the stated claim. [step 1.1, step 2.1, step 3.1, given, algebra] ∎
