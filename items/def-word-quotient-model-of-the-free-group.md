---
id: def-word-quotient-model-of-the-free-group
kind: definition
title: 'The word-quotient model $F_{\mathrm{word}}(X):=W(X)/{\sim}$ with multiplication induced by concatenation'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-alphabet-words-and-reduction, def-equivalence-relation, prop-free-equivalence-is-an-equivalence-and-a-congruence]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-08-11
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Nicholas Touikan, An Introduction to Combinatorial and Geometric Group Theory, §1.2"
      url: "https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/reductions.html"
pipeline_run: null
---

## Definition

Let $W(X)$ be the set of all finite words on $X\sqcup X^{-1}$, including the
empty word $\varepsilon$, and let $\sim$ be free equivalence as in
[[def-alphabet-words-and-reduction]]. By
[[prop-free-equivalence-is-an-equivalence-and-a-congruence]], this is an
equivalence relation and concatenation respects it.

Throughout, $a^{-1}$ denotes the partner of a formal letter
$a\in X\sqcup X^{-1}$ under the pairing that matches each $x\in X$ with
$x^{-1}\in X^{-1}$, so $(x^{-1})^{-1}=x$ and an elementary cancellation deletes
an adjacent pair $aa^{-1}$ for any formal letter $a$.

The **word-quotient model** on $X$ is the quotient set

$$F_{\mathrm{word}}(X):=W(X)/{\sim}.$$

The class of a word $w$ is denoted $[w]$. Define

$$[w][v]:=[wv],\qquad 1:=[\varepsilon],$$

and define the generator map $\iota_{\mathrm{word}}:X\to
F_{\mathrm{word}}(X)$ by $\iota_{\mathrm{word}}(x)=[x]$. The congruence
property makes the displayed product independent of the representatives.

