---
id: fs-b-n-and-c-n-are-isomorphic-root-systems-for-all-n
kind: false-statement
title: B and C are always isomorphic
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-duality-exchanges-b-n-and-c-n-and-fixes-the-other-types, thm-classification-of-irreducible-reduced-crystallographic-root-systems, thm-existence-of-each-classified-root-system, def-rank-and-isomorphism-of-root-systems, prop-root-systems-of-the-classical-complex-lie-algebras, thm-rank-two-root-system-classification]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, (2.43), (2.50) and Proposition 2.84, printed pp. 150, 155 and 180"
landmark: false
proof_strategy: counterexample
---

## Statement

False for $n\ge3$: $B_n$ and $C_n$ are dual to one another but are not
isomorphic root systems; only $n\le2$ gives an isomorphism.

## Facts & Assumptions

**Given:** The standard coordinate models $B_n=\{\pm\varepsilon_i,\pm\varepsilon_i\pm\varepsilon_j:i<j\}$ and $C_n=\{\pm2\varepsilon_i,\pm\varepsilon_i\pm\varepsilon_j:i<j\}$ in $\mathbb R^{n}$.

[L1] These are the root systems of types $B_n$ and $C_n$, with the squared lengths $1$ and $2$ in $B_n$ and $2$ and $4$ in $C_n$ ([[thm-existence-of-each-classified-root-system]], [[prop-root-systems-of-the-classical-complex-lie-algebras]]).

[L2] An isomorphism of root systems preserves all Cartan integers, hence preserves angles and the ratios of lengths; in an irreducible system it therefore maps roots of maximal length to roots of maximal length and roots of minimal length to roots of minimal length ([[def-rank-and-isomorphism-of-root-systems]], [[thm-rank-two-root-system-classification]]).

[L3] $B_2\cong C_2$, while for $n\ge3$ the types are distinct in the classification list ([[prop-duality-exchanges-b-n-and-c-n-and-fixes-the-other-types]], [[thm-classification-of-irreducible-reduced-crystallographic-root-systems]]).

## Refutation

**Proof technique:** counterexample.

1.1 In $B_n$ the roots of squared length $2$ are the $\pm\varepsilon_i\pm\varepsilon_j$ with $i<j$, of which there are $2n(n-1)$, and the roots of squared length $1$ are the $\pm\varepsilon_i$, of which there are $2n$. In $C_n$ the roles are exchanged: the roots of squared length $4$ are the $\pm2\varepsilon_i$, of which there are $2n$, and the roots of squared length $2$ are the $\pm\varepsilon_i\pm\varepsilon_j$, of which there are $2n(n-1)$. [L1, algebra]

2.1 An isomorphism $B_n\to C_n$ would preserve the length classes by [L2], so it would carry the $2n(n-1)$ long roots of $B_n$ bijectively onto the $2n$ long roots of $C_n$ and the $2n$ short roots of $B_n$ onto the $2n(n-1)$ short roots of $C_n$; for $n\ge3$ these cardinalities differ, since $2n(n-1)>2n$. Hence $B_n\not\cong C_n$ for $n\ge3$, which is the asserted failure for all $n$; for $n=2$ the two systems are isomorphic by [L3], so the claim is false exactly in the stated range. [L2, L3, step 1.1] ∎
