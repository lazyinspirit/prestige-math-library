---
id: lem-kac-moody-opposite-simple-centralizer-vanishes
kind: lemma
title: "The opposite simple centralizer in a Kac Moody half vanishes"
status: draft
origin: pipeline
deps: ["def-kac-moody-algebra-associated-to-a-gcm", "prop-kac-moody-root-spaces-are-finite-dimensional"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Kleshchev, Lectures on Infinite Dimensional Lie Algebras — Perrin Lemma 4.2.8, p.36; maximal-ideal argument as in Kleshchev §1.4"
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: "Nicolas Perrin, Introduction to Kac-Moody groups and Lie algebras, section 4.2"
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2016/03/pdf_km-suite.pdf
proof_strategy: direct
---

## Statement

If $x\in\mathfrak n^+$ satisfies $[f_i,x]=0$ for every $i$, then $x=0$. Likewise $x\in\mathfrak n^-$ with $[e_i,x]=0$ for every $i$ is zero.

## Facts & Assumptions

**Given:** A finite GCM and its maximal Cartan-disjoint quotient.

[F1] Every nonzero ideal meets the Cartan. ([[def-kac-moody-algebra-associated-to-a-gcm]]).

[F2] Weights have one sign and distinct root coordinates. ([[prop-kac-moody-root-spaces-are-finite-dimensional]]).

## Proof

1.1 Decompose $x$ into finitely many weights. For fixed $i$, the brackets of its distinct components with $f_i$ have distinct weights, so each bracket is zero. It suffices to treat a homogeneous $x$ of positive degree $\beta$. Let $J$ be the span of $x$ and all iterated $\operatorname{ad}e_i$ applied to $x$. Every such vector has degree $\beta+\gamma$ with $\gamma\in Q^+$, so $J\subset\mathfrak n^+$. [F2, given]

2.1 The space $J$ is stable under all $e_i$ by construction and under $\mathfrak h$ by its homogeneous spanning vectors. Induct on the number of positive adjoints to prove stability under $f_i$. The base is $[f_i,x]=0$. For $y$ already treated, $[f_i,[e_j,y]]=-\delta_{ij}[h_i,y]+[e_j,[f_i,y]]$ lies in $J$. Thus $J$ is an ideal, and $J\cap\mathfrak h=0$ by its positive degrees. F1 forces $J=0$, hence $x=0$. The sign-changing involution interchanges the two conclusions. [F1, F2, step 1.1] ∎

## Sources

Source comparison: [Kleshchev](https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf), Perrin Lemma 4.2.8, p.36; maximal-ideal argument as in Kleshchev §1.4.

Additional source: [Perrin, section 4.2](https://lmv.math.cnrs.fr/wp-content/uploads/2016/03/pdf_km-suite.pdf), at the numbered locators above.
