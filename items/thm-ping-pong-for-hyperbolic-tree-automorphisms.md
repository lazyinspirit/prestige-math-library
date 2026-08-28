---
id: thm-ping-pong-for-hyperbolic-tree-automorphisms
kind: theorem
title: "Disjoint-axis hyperbolic automorphisms satisfy ping-pong on a tree"
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
sources:
  scraped: []
  references:
    - title: "Jean-Pierre Serre, Trees"
      url: "https://www.scribd.com/document/551505445/Jean-Pierre-Serre-Trees-Springer-Verlag-1980"
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
---

## Statement

Let $g$ and $h$ be hyperbolic automorphisms of a simplicial tree whose axes are
disjoint. Then there exist positive integers $m,n$ such that $g^m$ and $h^n$
freely generate a free subgroup of rank $2$.

## Facts & Assumptions

**Given:** Hyperbolic tree automorphisms $g$ and $h$ with disjoint axes.

[L1] A hyperbolic tree automorphism preserves a unique axis and translates along it by its translation length. ([[thm-elliptic-hyperbolic-dichotomy-for-tree-automorphisms]])

## Proof

**Proof technique:** direct.

1.1 Let $A_g$ and $A_h$ be the disjoint axes from [L1], and let $[p,q]$ be the unique geodesic joining them with $p\in A_g$ and $q\in A_h$. Removing $p$ from the tree leaves two components meeting the two rays of $A_g$, call them $X_g^+$ and $X_g^-$. Define $X_h^+$ and $X_h^-$ similarly at $q$. These four half-trees are pairwise disjoint. [L1, given, construct]

2.1 Choose $m,n>0$ so large that $m\ell(g)>d(p,q)$ and $n\ell(h)>d(p,q)$. Then [L1] implies $g^{m}(T\setminus X_g^-)\subseteq X_g^+$ and $g^{-m}(T\setminus X_g^+)\subseteq X_g^-$, and similarly $h^{n}(T\setminus X_h^-)\subseteq X_h^+$ and $h^{-n}(T\setminus X_h^+)\subseteq X_h^-$. Indeed, a sufficiently long translation along an axis carries everything on one side of the basepoint across the bridge segment $[p,q]$ into the corresponding attracting half-tree. [L1, step 1.1, algebra]

3.1 Pick a vertex $x$ outside the four half-trees. Any reduced word in $g^{\pm m}$ and $h^{\pm n}$ sends $x$ into the domain attached to its first letter by step 2.1, and successive letters cannot bring it back because the four domains are disjoint. So no nonempty reduced word acts trivially. Therefore $g^m$ and $h^n$ freely generate a free subgroup of rank $2$. [step 1.1, step 2.1, algebra] ∎
