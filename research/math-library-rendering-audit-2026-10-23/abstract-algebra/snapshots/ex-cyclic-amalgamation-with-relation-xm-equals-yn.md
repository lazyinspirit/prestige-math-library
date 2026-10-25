---
id: ex-cyclic-amalgamation-with-relation-xm-equals-yn
kind: example
title: "Amalgamating infinite cyclic groups by multiplication by m and n gives the presentation with relation x^m=y^n"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-presentation-of-a-free-product-with-amalgamation, cor-factors-embed-in-a-free-product-with-amalgamation, thm-normal-form-for-the-word-quotient-model, thm-word-quotient-model-is-free, def-group-presentation, prop-normal-closure-is-products-of-conjugates]
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
## Example

For positive integers $m,n$, amalgamating infinite cyclic groups $\langle x\rangle$ and $\langle y\rangle$ along maps sending a generator to $x^m$ and $y^n$ gives $$\langle x,y\mid x^m=y^n\rangle.$$ Both cyclic factor maps remain injective.

## Facts & Assumptions

**Given:** The objects and hypotheses in the example.

[L1] Let $G=\langle X\mid R\rangle$ and $H=\langle Y\mid S\rangle$ with disjoint generators, and let $f,h$ embed $K$. If $T$ generates $K$ and words $u_t(X),v_t(Y)$ represent $f(t),h(t)$, then $$G\ast_KH\cong\langle X\sqcup Y\mid R\cup S\cup\{u_t v_t^{-1}:t\in T\}\rangle.$$ ([[thm-presentation-of-a-free-product-with-amalgamation]]).

[L2] The canonical maps $G\to G\ast_KH$ and $H\to G\ast_KH$ are injective. ([[cor-factors-embed-in-a-free-product-with-amalgamation]]).

[L3] Every class in $W(X)/{\sim}$ contains exactly one reduced word. ([[thm-normal-form-for-the-word-quotient-model]]).

[L4] For every set $X$, the group $F_{\mathrm{word}}(X)=W(X)/{\sim}$ together with $i_{\mathrm{word}}(x)=[x]$ is a free group on $X$ in the sense of def-free-group. ([[thm-word-quotient-model-is-free]]).

[L5] Let $F(X)$ be a free group and let $R\subseteq F(X)$ be a set of words, called **relations**. The group with presentation $$\langle X\mid R\rangle:=F(X)/\langle\!\langle R\rangle\!\rangle_{F(X)}$$ is the quotient by the normal closure of $R$. The members of $X$ are its **generators**. In this quotient, every relation in $R$ becomes the identity, as do all consequences forced by normality. ([[def-group-presentation]]).

[L6] Let $G$ be a group and $R\subseteq G$. Then $$\langle\!\langle R\rangle\!\rangle_G=\left\{g_1r_1^{\varepsilon_1}g_1^{-1}\cdots g_nr_n^{\varepsilon_n}g_n^{-1}:n\in\mathbb N,\ g_i\in G,\ r_i\in R,\ \varepsilon_i\in\{1,-1\}\right\}.$$ For $n=0$ the displayed product is the identity. Replacing every conjugator $g_i$ by $g_i^{-1}$ gives the equivalent convention $g_i^{-1}r_i^{\varepsilon_i}g_i$. ([[prop-normal-closure-is-products-of-conjugates]]).

## Verification

**Proof technique:** direct.

1.1 The one-generator empty-relator word model is infinite cyclic: its reduced words are the distinct powers of its generator, and the word-quotient freeness theorem gives the singleton universal property. [given, L1, L2, L3, L4, L5, L6]

2.1 The maps from the edge group are injective because $m,n>0$ and the factors have infinite order. [step 1.1]

3.1 The amalgamated-presentation theorem adds exactly the relation $x^m y^{-n}=e$, equivalently $x^m=y^n$, and the factor-embedding theorem preserves both cyclic factors. [step 2.1] ∎
