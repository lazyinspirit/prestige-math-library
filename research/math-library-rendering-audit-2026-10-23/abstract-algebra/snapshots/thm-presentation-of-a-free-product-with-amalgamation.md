---
id: thm-presentation-of-a-free-product-with-amalgamation
kind: theorem
title: "A free product with amalgamation has the factor presentations plus the amalgamating relations"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-free-product-with-amalgamation, thm-group-pushout-as-an-amalgamated-quotient, thm-presentation-of-a-free-product, def-group-presentation, prop-normal-closure-is-products-of-conjugates]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
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

Let $G=\langle X\mid R\rangle$ and $H=\langle Y\mid S\rangle$ with disjoint generators, and let $f,h$ embed $K$. If $T$ generates $K$ and words $u_t(X),v_t(Y)$ represent $f(t),h(t)$, then $$G\ast_KH\cong\langle X\sqcup Y\mid R\cup S\cup\{u_t v_t^{-1}:t\in T\}\rangle.$$

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[L1] If $f:K\to G$ and $h:K\to H$ are injective homomorphisms, their pushout is called the **free product with amalgamation** and is denoted $G\ast_KH$. The quotient construction is thm-group-pushout-as-an-amalgamated-quotient, and injectivity means the trivial-kernel condition of thm-group-homomorphism-injective-iff-trivial-kernel. The notation anticipates identifying $K$ with its two images, but injectivity of the canonical maps $G,H\to G\ast_KH$ is a theorem, not part of this definition. ([[def-free-product-with-amalgamation]]).

[L2] For homomorphisms $f:K\to G$ and $h:K\to H$, let $N$ be the normal closure in $G\ast H$ of $$\{j_G(f(k))j_H(h(k))^{-1}:k\in K\}.$$ Then $(G\ast H)/N$, with the induced factor maps $j_G$ and $j_H$, is a pushout of $f$ and $h$. ([[thm-group-pushout-as-an-amalgamated-quotient]]).

[L3] Suppose each $G_i$ has a presentation $\langle X_i\mid R_i\rangle$, with the alphabets replaced by disjoint copies. Then $$\ast_iG_i\cong\left\langle\bigsqcup_iX_i\ \middle|\ \bigcup_iR_i\right\rangle.$$ ([[thm-presentation-of-a-free-product]]).

[L4] Let $F(X)$ be a free group and let $R\subseteq F(X)$ be a set of words, called **relations**. The group with presentation $$\langle X\mid R\rangle:=F(X)/\langle\!\langle R\rangle\!\rangle_{F(X)}$$ is the quotient by the normal closure of $R$. The members of $X$ are its **generators**. In this quotient, every relation in $R$ becomes the identity, as do all consequences forced by normality. ([[def-group-presentation]]).

[L5] Let $G$ be a group and $R\subseteq G$. Then $$\langle\!\langle R\rangle\!\rangle_G=\left\{g_1r_1^{\varepsilon_1}g_1^{-1}\cdots g_nr_n^{\varepsilon_n}g_n^{-1}:n\in\mathbb N,\ g_i\in G,\ r_i\in R,\ \varepsilon_i\in\{1,-1\}\right\}.$$ For $n=0$ the displayed product is the identity. Replacing every conjugator $g_i$ by $g_i^{-1}$ gives the equivalent convention $g_i^{-1}r_i^{\varepsilon_i}g_i$. ([[prop-normal-closure-is-products-of-conjugates]]).

## Proof

**Proof technique:** direct.

1.1 The union presentation gives $G\ast H=\langle X\sqcup Y\mid R\cup S\rangle$. [given, L1, L2, L3, L4, L5]

2.1 Quotienting by the normal closure of the displayed relations identifies the two images of every generator $t\in T$, hence of every element of $K$. [step 1.1]

3.1 Conversely the relations for all $k\in K$ follow from those for $T$ and their conjugates and products. The quotient is therefore the amalgamated pushout of the preceding theorem. [step 2.1] ∎
