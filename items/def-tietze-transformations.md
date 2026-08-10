---
id: def-tietze-transformations
kind: definition
title: "Tietze transformations: dictionary generators, redundant relators, renaming, and their inverses"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-group-presentation, def-normal-closure]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-08-11
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Nicholas Touikan, An Introduction to Combinatorial and Geometric Group Theory, §1.6"
      url: "https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/sec_homs_tietze.html"
pipeline_run: null
---

## Definition

Let $\mathcal P=\langle X\mid R\rangle$ be a formal presentation. A **Tietze
transformation** in the reversible three-type package is one of the following
moves.

1. A **dictionary-generator move** chooses a symbol $y\notin X$ and a word
   $w\in F(X)$ and replaces $\mathcal P$ by
   $\langle X\cup\{y\}\mid R\cup\{y^{-1}w\}\rangle$. Its inverse may delete
   $y$ and the relator $y^{-1}w$ only when $w$ contains no $y$ and $y$ occurs
   in no other remaining relator.
2. A **redundant-relator move** chooses
   $r\in\langle\!\langle R\rangle\!\rangle_{F(X)}$
   ([[def-normal-closure]]) and replaces $R$ by
   $R\cup\{r\}$. Its inverse may delete a relator $r$ only when
   $r\in\langle\!\langle R\setminus\{r\}\rangle\!\rangle_{F(X)}$, so it is
   already a consequence of the relators that remain.
3. A **renaming move** chooses a bijection $\alpha:X\to Y$ and replaces every
   letter $x^{\pm1}$ in every relator by $\alpha(x)^{\pm1}$. Its inverse is
   legal precisely because $\alpha^{-1}:Y\to X$ is a bijection.

For finite presentations this package has exactly the same reachability as the
classical four moves: add or delete a generator with a dictionary relation,
and add or delete a consequence relator. The first two types and their stated
inverses are those four moves. Conversely, consider first a renaming bijection
$\alpha:X\to Y$ with $X\cap Y=\varnothing$. For each $x\in X$, put
$y=\alpha(x)$ and add the fresh generator $y$ with dictionary relator
$y^{-1}x$. These dictionaries make $r$ and its renamed word $\alpha(r)$ equal
in the presented group for every $r\in R$. Hence each $\alpha(r)$ may be added
as a consequence relator; once every renamed relator has been added, each old
relator $r$ is a consequence of the renamed relators and the dictionaries and
may be deleted. Finally, for each pair $(x,y)$, add $x^{-1}y$, delete its inverse
$y^{-1}x$, and then delete $x$ using the dictionary $x^{-1}y$. At that point
$x$ occurs in no other relator, so every inverse move is legal. The result is
$\langle Y\mid\alpha(R)\rangle$.

For a general bijection, choose a finite set $Z$ disjoint from $X\cup Y$ and
factor the renaming as $X\to Z\to Y$. The preceding construction simulates
both factors. Thus including renaming as a single move changes the packaging,
but not finite-presentation reachability.
