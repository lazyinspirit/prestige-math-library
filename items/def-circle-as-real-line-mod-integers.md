---
id: def-circle-as-real-line-mod-integers
kind: definition
title: "The circle as $S^1=\\mathbb R/\\mathbb Z$ with basepoint $[0]$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-quotient-topology, def-integers, thm-int-comm-ring, lem-integer-part]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Jonathan Wise, Math 6210 Lecture Notes, Week 3, Sections 3.1 and 3.4"
      url: "https://math.colorado.edu/~jonathan.wise/teaching/math6210-fall-2012/notes.pdf"
pipeline_run: null
---

## Definition

Use the canonical copy of $\mathbb Z$ inside $\mathbb R$ fixed in
[[lem-integer-part]]. For $x,y\in\mathbb R$, put

$$x\sim y\quad\Longleftrightarrow\quad x-y\in\mathbb Z.$$

This is an equivalence relation. Indeed, $x-x=0\in\mathbb Z$; if
$x-y\in\mathbb Z$, then $y-x=-(x-y)\in\mathbb Z$; and if
$x-y,y-z\in\mathbb Z$, then $x-z=(x-y)+(y-z)\in\mathbb Z$. The closure facts
used here are part of the additive-group structure supplied by
[[thm-int-comm-ring]], and the quotient-set construction is that of
[[def-quotient-topology]].

Let $[x]$ denote the equivalence class of $x$. Let
$p:\mathbb R\to\mathbb R/\mathbb Z$ be the canonical projection,
$p(x)=[x]$. Thus

$$p(x)=p(y)\quad\Longleftrightarrow\quad x-y\in\mathbb Z.$$

Let $\mathbb R/\mathbb Z$ carry the quotient topology induced by $p$.
The circle is $S^1:=\mathbb R/\mathbb Z$ with the quotient topology induced by $p(x)=[x]$ and basepoint $[0]$; moreover $p^{-1}([0])=\mathbb Z$ and $p(x+n)=p(x)$ for every real $x$ and integer $n$.

The last assertions follow directly from the displayed fibre criterion:
$p(x)=[0]$ exactly when $x\in\mathbb Z$, while
$(x+n)-x=n\in\mathbb Z$.
