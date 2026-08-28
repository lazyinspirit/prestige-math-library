---
id: cor-translation-length-is-conjugacy-invariant-and-homogeneous
kind: corollary
title: "Translation length is conjugacy invariant and homogeneous on powers"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-elliptic-hyperbolic-dichotomy-for-tree-automorphisms]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Jean-Pierre Serre, Trees"
      url: "https://www.scribd.com/document/551505445/Jean-Pierre-Serre-Trees-Springer-Verlag-1980"
---

## Statement

For automorphisms of a simplicial tree acting without inversions,

$$\ell(hgh^{-1})=\ell(g),\qquad \ell(g^n)=|n|\,\ell(g)\quad(n\in\mathbb Z).$$

## Facts & Assumptions

**Given:** Tree automorphisms $g,h$ without inversions.

[L1] A tree automorphism without inversions is either elliptic with a fixed vertex or hyperbolic with a unique translation axis on which it translates by its translation length. ([[thm-elliptic-hyperbolic-dichotomy-for-tree-automorphisms]])

## Proof

**Proof technique:** direct.

1.1 If $g$ is elliptic, [L1] gives a fixed vertex, so every power $g^n$ fixes that same vertex and has translation length $0$. Conjugating by $h$ carries a fixed vertex of $g$ to a fixed vertex of $hgh^{-1}$, so conjugation preserves the elliptic case and its translation length. [L1, given]

2.1 If $g$ is hyperbolic with axis $A_g$ and translation length $\ell(g)$, then $hgh^{-1}$ preserves the line $hA_g$ and translates it by the same distance, so $\ell(hgh^{-1})=\ell(g)$. Also $g^n$ preserves $A_g$ and shifts every vertex on it by $|n|\ell(g)$, so $\ell(g^n)=|n|\ell(g)$ for $n\ne 0$. [L1, step 1.1, algebra]

3.1 The case $n=0$ gives $\ell(1)=0$, already covered by step 1.1, so the displayed formulas hold for every integer $n$. [step 1.1, step 2.1, algebra] ∎
