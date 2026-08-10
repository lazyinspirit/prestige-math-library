---
id: prop-normal-closure-is-products-of-conjugates
kind: proposition
title: "The normal closure of $R$ is the set of finite products of conjugates of elements of $R$ and their inverses"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-normal-closure, def-normal-subgroup, def-subgroup, def-group, lem-group-inverse-laws]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Nicholas Touikan, An Introduction to Combinatorial and Geometric Group Theory, §1.4"
      url: "https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/sec_generation_and_presentation.html"
    - title: "M. Brittenham, Group presentations"
      url: "https://www.math.unl.edu/~mbrittenham2/classwk/872s07/lecnotes/slides.from.class/cls08--presentations.pdf"
pipeline_run: null
---

## Statement

Let $G$ be a group and $R\subseteq G$. Then

$$\langle\!\langle R\rangle\!\rangle_G=\left\{g_1r_1^{\varepsilon_1}g_1^{-1}\cdots g_nr_n^{\varepsilon_n}g_n^{-1}:n\in\mathbb N,\ g_i\in G,\ r_i\in R,\ \varepsilon_i\in\{1,-1\}\right\}.$$

For $n=0$ the displayed product is the identity. Replacing every conjugator
$g_i$ by $g_i^{-1}$ gives the equivalent convention
$g_i^{-1}r_i^{\varepsilon_i}g_i$.

## Facts & Assumptions

**Given:** A group $G$, a subset $R\subseteq G$, and the set $P$ of displayed finite products.

[F1] Group multiplication is associative: $(xy)z=x(yz)$ for all $x,y,z\in G$ ([[def-group]]).

[L1] The normal closure of $R$ is the smallest normal subgroup of $G$ containing $R$ ([[def-normal-closure]]).

[L2] For group elements $g,h$, $(gh)^{-1}=h^{-1}g^{-1}$ ([[lem-group-inverse-laws]]).

## Proof

**Proof technique:** direct.

1.1 The empty product puts the identity in $P$; concatenating two finite products keeps them in $P$; and [L2] shows that the inverse of a product is the reverse product of factors $(gr^\varepsilon g^{-1})^{-1}=gr^{-\varepsilon}g^{-1}$, so $P$ is a subgroup of $G$. [F1, L2]

1.2 Each $r\in R$ is the one-factor product $ere^{-1}$, so $R\subseteq P$. [given]

1.3 Conversely, the normal subgroup $\langle\!\langle R\rangle\!\rangle_G$ contains every $r_i^{\pm1}$ and, by normality, every conjugate $g_ir_i^{\pm1}g_i^{-1}$; subgroup closure then contains every finite product in $P$, including the empty product, so $P\subseteq\langle\!\langle R\rangle\!\rangle_G$. [L1, F1]

2.1 For $h\in G$, conjugating a displayed product by $h$ replaces each factor $g_ir_i^{\varepsilon_i}g_i^{-1}$ by $(hg_i)r_i^{\varepsilon_i}(hg_i)^{-1}$; hence $hPh^{-1}\subseteq P$, and $P$ is normal. [F1, step 1.1]

3.1 Since $P$ is a normal subgroup containing $R$, minimality in [L1] gives $\langle\!\langle R\rangle\!\rangle_G\subseteq P$. [L1, step 1.2, step 2.1]

4.1 The inclusions of steps 3.1 and 1.3 give the displayed equality. [step 3.1, step 1.3] ∎
