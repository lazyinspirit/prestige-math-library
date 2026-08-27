---
id: lem-radical-intersection-proof-separating-prime
kind: lemma
title: "A separating prime for an element outside a radical"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-prime-containing-an-ideal-avoiding-an-element, def-radical-of-an-ideal]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "M. Hochster, Introduction to Commutative Algebra, Math 614 notes (2020)"
      url: "http://web.archive.org/web/20230308152844if_/https://dept.math.lsa.umich.edu/~hochster/615W22/614Lx.pdf"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §2 Ideals"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

Let $R$ be a commutative ring, let $I\trianglelefteq R$ be an ideal, and let $f\in R$. If $f\notin\sqrt{I}$, then there exists a prime ideal $\mathfrak p$ of $R$ such that $I\subseteq\mathfrak p$ and $f\notin\mathfrak p$.

## Facts & Assumptions

**Given:** A commutative ring $R$, an ideal $I\trianglelefteq R$, an element $f\notin\sqrt{I}$, and the Axiom of Choice.

[L1] An element belongs to $\sqrt{I}$ exactly when one of its positive powers lies in $I$ ([[def-radical-of-an-ideal]]).

[L2] If every positive power of $f$ avoids $I$, then some prime ideal contains $I$ but avoids $f$ ([[cor-prime-containing-an-ideal-avoiding-an-element]]).

## Proof

**Proof technique:** direct.

1.1 Since $f\notin\sqrt{I}$, [L1] says that $f^n\notin I$ for every integer $n\ge 1$. [L1, given]

2.1 Applying [L2] to step 1.1 yields a prime ideal $\mathfrak p$ with $I\subseteq\mathfrak p$ and $f\notin\mathfrak p$. [L2, step 1.1]

3.1 This prime separates $f$ from the radical of $I$. [step 2.1] ∎
