---
id: thm-van-kampen-lemma
kind: theorem
title: "A word is trivial in a presented group exactly when it bounds a finite van Kampen diagram"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-boundary-label-of-a-van-kampen-diagram-is-null-in-the-presented-group, prop-normal-closure-is-products-of-conjugates]
proof_strategy: "direct"
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "GAP SmallCancellation manual, Chapter 1: Small Cancellation Theory — the classical conditions"
      url: "https://mate.dm.uba.ar/~isadofschi/smallcancellation/chap1_mj.html"
    - title: "Jay Williams, Universal Countable Borel Quasi-Orders"
      url: "https://arxiv.org/pdf/1306.1270"
    - title: "Nicholas Touikan, An Introduction to Combinatorial and Geometric Group Theory, Section 3.5"
      url: "https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-18.html"
    - title: "Clara Löh, Geometric Group Theory: An Introduction, Section 7.4.1"
      url: "https://loeh.app.uni-regensburg.de/ggt_book/ggt_book_draft.pdf"
---

## Statement

Let $G=\langle X\mid R\rangle$ and let $w$ be a word on $X^{\pm1}$. Then $w$
represents the identity in $G$ if and only if $w$ is the boundary label of a
finite van Kampen diagram over $\langle X\mid R\rangle$.

## Facts & Assumptions

**Given:** A presentation $G=\langle X\mid R\rangle$ and a word $w$ on
$X^{\pm1}$.

[L1] The boundary label of every van Kampen diagram is trivial in the presented
group ([[lem-boundary-label-of-a-van-kampen-diagram-is-null-in-the-presented-group]]).

[F1] A word lies in the normal closure of $R$ exactly when it is a finite
product of conjugates of relators and their inverses
([[prop-normal-closure-is-products-of-conjugates]]).

## Proof

**Proof technique:** direct.

1.1 If $w$ is the boundary label of a finite van Kampen diagram, then [L1] says that $w$ represents the identity in $G$. [L1, given]

1.2 Conversely, suppose that $w$ represents the identity in $G$. Then $w$ lies in the normal closure of $R$, so [F1] gives a factorisation $$w=\prod_{k=1}^m u_k r_k^{\varepsilon_k} u_k^{-1}$$ with $r_k\in R$ and $\varepsilon_k\in\{\pm1\}$. [F1, given]

2.1 For each factor $u_k r_k^{\varepsilon_k}u_k^{-1}$, take one 2-cell with boundary word $r_k^{\varepsilon_k}$ and attach to its boundary a whisker labelled $u_k$ from a common basepoint. Gluing these $m$ discs along the whiskers produces a finite planar diagram whose outer boundary label is exactly the product in step 1.2, namely $w$. [step 1.2, construct]

3.1 Steps 1.1 and 2.1 prove both directions of the equivalence. [step 1.1, step 2.1] ∎
