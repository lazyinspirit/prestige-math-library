---
id: lem-radical-commutes-with-quotient-correspondence
kind: lemma
title: "Radicals and quotient correspondence"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-radical-of-an-ideal, thm-correspondence-theorem-ideals]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Hochster, Introduction to Commutative Algebra, Math 614 notes (2020)"
      url: "http://web.archive.org/web/20230308152844if_/https://dept.math.lsa.umich.edu/~hochster/615W22/614Lx.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §2 Ideals"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring, let $I\subseteq J\trianglelefteq R$ be ideals, and write $\pi:R\to R/I$ for the quotient map. Then
$$ \sqrt{J/I}=\sqrt{J}/I $$
as ideals of $R/I$. In particular, $J/I$ is radical in $R/I$ if and only if $J$ is radical in $R$.

## Facts & Assumptions

**Given:** A commutative ring $R$, ideals $I\subseteq J\trianglelefteq R$, and the quotient map $\pi:R\to R/I$.

[L1] Ideals of $R/I$ correspond to ideals of $R$ containing $I$, so $J/I$ is an ideal of $R/I$ ([[thm-correspondence-theorem-ideals]]).

[L2] An element belongs to the radical of an ideal exactly when one of its positive powers lies in that ideal ([[def-radical-of-an-ideal]]).

## Proof

**Proof technique:** direct.

1.1 Let $x+I\in R/I$. By [L2], $x+I\in\sqrt{J/I}$ exactly when $(x+I)^n=x^n+I\in J/I$ for some $n\ge 1$, and that happens exactly when $x^n\in J$. Applying [L2] again shows that this is equivalent to $x\in\sqrt{J}$, so $x+I\in\sqrt{J/I}$ exactly when $x+I\in\sqrt{J}/I$. [L1, L2, given, algebra]

2.1 Step 1.1 proves $\sqrt{J/I}=\sqrt{J}/I$. Consequently, $J/I$ is radical exactly when $J/I=\sqrt{J/I}$, exactly when $J/I=\sqrt{J}/I$, and exactly when $J=\sqrt{J}$. [step 1.1, L1, algebra]

3.1 The quotient radical is therefore exactly the quotient of the radical, and radical ideals correspond across the quotient map. [step 1.1, step 2.1] ∎
