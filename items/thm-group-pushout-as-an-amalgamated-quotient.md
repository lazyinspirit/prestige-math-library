---
id: thm-group-pushout-as-an-amalgamated-quotient
kind: theorem
title: "A group pushout is the quotient of a free product by the amalgamating relations"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-pushout-of-group-homomorphisms, def-free-product-of-a-family-of-groups, def-normal-closure, def-quotient-group, thm-quotient-group-universal-property, prop-normal-closure-is-products-of-conjugates]
justified_by: []
aliases: []
landmark: false
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

For homomorphisms $f:K\to G$ and $h:K\to H$, let $N$ be the normal closure in $G\ast H$ of $$\{j_G(f(k))j_H(h(k))^{-1}:k\in K\}.$$ Then $(G\ast H)/N$, with the induced factor maps $j_G$ and $j_H$, is a pushout of $f$ and $h$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[L1] Given homomorphisms $f:K\to G$ and $h:K\to H$ as in def-group-homomorphism, a **pushout** is a group $P$ with homomorphisms $i_G:G\to P$ and $i_H:H\to P$ such that $i_G\circ f=i_H\circ h$, and such that every compatible pair $u:G\to Q$, $v:H\to Q$ factors through a unique $w:P\to Q$ with $w\circ i_G=u$ and $w\circ i_H=v$. The maps $f,h$ need not be injective. ([[def-pushout-of-group-homomorphisms]]).

[L2] For a family $(G_i)_{i\in I}$, a **free product** is a group $F$ with homomorphisms $\iota_i:G_i\to F$ in the sense of def-group-homomorphism, such that for every group $H$ and every family of homomorphisms $f_i:G_i\to H$, there is a unique homomorphism $f:F\to H$ satisfying $f\circ\iota_i=f_i$ for all $i$. It is denoted $\ast_{i\in I}G_i$. Injectivity of the maps $\iota_i$ is not part of this definition. ([[def-free-product-of-a-family-of-groups]]).

[L3] Let $G$ be a group and let $S\subseteq G$. The family $$\mathcal N_S:=\{N:N\mathrel{\trianglelefteq}G\text{ and }S\subseteq N\}$$ is nonempty because $G\mathrel{\trianglelefteq}G$ by def-normal-subgroup. Its intersection is normal by lem-intersection-of-normal-subgroups. The **normal closure of $S$ in $G$** is $$\langle\!\langle S\rangle\!\rangle_G:=\bigcap_{N\in\mathcal N_S}N.$$ It contains $S$ and is contained in every normal subgroup of $G$ that contains $S$. Thus it is the smallest normal subgroup of $G$ containing $S$. ([[def-normal-closure]]).

[L4] Let $G$ be a group and let $N\mathrel{\trianglelefteq}G$ be a normal subgroup (def-normal-subgroup). The **quotient group**, or **factor group**, $G/N$ has the left cosets $$G/N:=\{gN:g\in G\}$$ as its elements (def-coset, def-index), with product $$ (gN)(hN):=ghN.$$ Independence of the chosen representatives is proved in thm-coset-multiplication-well-defined-iff-normal, and the group axioms are proved in thm-quotient-group-laws. ([[def-quotient-group]]).

[L5] A homomorphism that kills a normal subgroup factors uniquely through the quotient group. If $N\mathrel{\trianglelefteq}G$, $f:G\to H$ is a homomorphism, and $N\subseteq\ker f$, then there is a unique homomorphism $\bar f:G/N\to H$ such that $\bar f(gN)=f(g)$ and $f=\bar f\circ\pi$. ([[thm-quotient-group-universal-property]]).

[L6] Let $G$ be a group and $R\subseteq G$. Then $$\langle\!\langle R\rangle\!\rangle_G=\left\{g_1r_1^{\varepsilon_1}g_1^{-1}\cdots g_nr_n^{\varepsilon_n}g_n^{-1}:n\in\mathbb N,\ g_i\in G,\ r_i\in R,\ \varepsilon_i\in\{1,-1\}\right\}.$$ For $n=0$ the displayed product is the identity. Replacing every conjugator $g_i$ by $g_i^{-1}$ gives the equivalent convention $g_i^{-1}r_i^{\varepsilon_i}g_i$. ([[prop-normal-closure-is-products-of-conjugates]]).

## Proof

**Proof technique:** direct.

1.1 In the quotient every amalgamating relator is trivial, so the two induced maps agree on $K$. [given, L1, L2, L3, L4, L5, L6]

2.1 Given compatible maps $u:G\to Q$ and $v:H\to Q$, free-product universality gives $\phi:G\ast H\to Q$. Compatibility makes every displayed relator lie in $\ker\phi$, hence $N\subseteq\ker\phi$. [step 1.1]

3.1 The quotient universal property gives a unique $\bar\phi:(G\ast H)/N\to Q$ extending $u$ and $v$. Uniqueness follows because the factor images generate the quotient. [step 2.1]

4.1 The argument allows trivial groups and arbitrary kernels without change. [step 3.1] ∎
