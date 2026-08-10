---
id: def-tietze-transformations
kind: definition
title: "Tietze transformations: dictionary generators, redundant relators, renaming, and their inverses"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group-presentation, prop-normal-closure-is-products-of-conjugates, def-free-group]
justified_by: []
aliases: []
landmark: true
verification:
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
   $r\in\langle\!\langle R\rangle\!\rangle_{F(X)}$ and replaces $R$ by
   $R\cup\{r\}$. Its inverse may delete a relator $r$ only when
   $r\in\langle\!\langle R\setminus\{r\}\rangle\!\rangle_{F(X)}$, so it is
   already a consequence of the relators that remain.
3. A **renaming move** chooses a bijection $\alpha:X\to Y$ and replaces every
   letter $x^{\pm1}$ in every relator by $\alpha(x)^{\pm1}$. Its inverse is
   legal precisely because $\alpha^{-1}:Y\to X$ is a bijection.

For finite presentations this package has exactly the same reachability as the
classical four moves: add or delete a generator with a dictionary relation,
and add or delete a consequence relator. The first two types and their stated
inverses are those four moves. Conversely, a renaming can be simulated by
classical moves. Add fresh names with dictionary relations, add the finitely
many renamed relators as consequences, and delete the old relators after they
have become consequences of the renamed ones and the dictionaries. For each
old generator $x$ with new name $y$, replace the remaining relator $y^{-1}x$
by its inverse $x^{-1}y$ using one legal relator addition and deletion; then $x$
occurs only in that dictionary relation and may be deleted. All deletions
satisfy the legality conditions above. Thus including renaming as a single move
changes the packaging, but not finite-presentation reachability.
