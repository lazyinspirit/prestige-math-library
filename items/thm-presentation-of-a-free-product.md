---
id: thm-presentation-of-a-free-product
kind: theorem
title: "A free product has the union presentation of presentations of its factors"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-group-presentation, thm-von-dyck, def-free-product-of-a-family-of-groups, cor-free-products-are-unique-up-to-unique-isomorphism, def-relators-relations-and-finite-presentations]
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

Suppose each $G_i$ has a presentation $\langle X_i\mid R_i\rangle$, with the alphabets replaced by disjoint copies. Then $$\ast_iG_i\cong\left\langle\bigsqcup_iX_i\ \middle|\ \bigcup_iR_i\right\rangle.$$

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[L1] Let $F(X)$ be a free group and let $R\subseteq F(X)$ be a set of words, called **relations**. The group with presentation $$\langle X\mid R\rangle:=F(X)/\langle\!\langle R\rangle\!\rangle_{F(X)}$$ is the quotient by the normal closure of $R$. The members of $X$ are its **generators**. In this quotient, every relation in $R$ becomes the identity, as do all consequences forced by normality. ([[def-group-presentation]]).

[L2] Let $\langle X\mid R\rangle$ be a presentation, let $H$ be a group, and let $u:X\to H$ be a function. If the evaluation of every $r\in R$ under $u$ is $e_H$, then there is a unique homomorphism $$\overline u:\langle X\mid R\rangle\longrightarrow H$$ with $\overline u([x])=u(x)$ for every $x\in X$. Moreover, $\overline u$ is surjective if and only if $u(X)$ generates $H$. ([[thm-von-dyck]]).

[L3] For a family $(G_i)_{i\in I}$, a **free product** is a group $F$ with homomorphisms $\iota_i:G_i\to F$ in the sense of def-group-homomorphism, such that for every group $H$ and every family of homomorphisms $f_i:G_i\to H$, there is a unique homomorphism $f:F\to H$ satisfying $f\circ\iota_i=f_i$ for all $i$. It is denoted $\ast_{i\in I}G_i$. Injectivity of the maps $\iota_i$ is not part of this definition. ([[def-free-product-of-a-family-of-groups]]).

[L4] Any two free products of the same family are connected by a unique isomorphism commuting with every canonical factor map. ([[cor-free-products-are-unique-up-to-unique-isomorphism]]).

[L5] In a presentation $\langle X\mid R\rangle$ as in def-group-presentation, an element $r\in R\subseteq F(X)$ is called a **defining relator**. The equation $r=1$ that it imposes in the quotient is a **defining relation**. More generally, an equation $u=v$ may be recorded by the relator $u^{-1}v$. The published definition uses the common looser convention of calling the members of $R$ relations; both conventions define the same quotient group. A presentation is **finitely generated** when $X$ is finite, **finitely related** when $R$ is finite, and **finite** when both $X$ and $R$ are finite. A group is called finitely generated, finitely related, or finitely presented when it admits a presentation with the corresponding property. For finitely generated groups this agrees with generation by a finite subset in the sense of def-generated-subgroup. ([[def-relators-relations-and-finite-presentations]]).

## Proof

**Proof technique:** direct.

1.1 A homomorphism from the displayed group to a target $H$ is determined by images of the union of the generators that kill every relator in every $R_i$. [given, L1, L2, L3, L4, L5]

2.1 By von Dyck's theorem, this is equivalent to a family of homomorphisms $G_i\to H$. [step 1.1]

3.1 The displayed group therefore has the free-product universal property, so uniqueness of free products gives the isomorphism. Empty and singleton families give the trivial and original presentations. [step 2.1] ∎
