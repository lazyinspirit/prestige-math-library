---
id: lem-leading-tabloid-coefficient-of-a-standard-polytabloid
kind: lemma
title: Leading tabloid of a column-standard polytabloid
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps: [def-tabloid-and-column-orders-for-specht-straightening, def-column-antisymmetrizer-polytabloid-and-specht-module, def-row-and-column-stabilizers-of-a-tableau, def-young-tableau-standard-tableau-and-shape]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups, Definition 4.8, Remark 4.10 and Theorem 4.11 proof, printed pp. 16-17"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
    - title: "Mark Wildon, Representation Theory of the Symmetric Group, Proposition 6.5, printed pp. 27-28"
      url: "https://www.ma.rhul.ac.uk/~uvah099/Maths/Sym/SymGroup2014.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Statement

For a column-standard $\lambda$-tableau $t$, $e_t$ has coefficient $1$ at
$\{t\}$, and every other tabloid in $e_t$ is strictly below $\{t\}$ in the
fixed tabloid order. Consequently the standard polytabloids are linearly
independent.

## Facts & Assumptions

**Given:** A partition $\lambda\vdash n$ and a column-standard
$\lambda$-tableau $t$.

[F1] A tableau is column-standard when its entries strictly increase down each
column ([[def-tabloid-and-column-orders-for-specht-straightening]]).

[F2] The tabloid order compares the row of the largest label placed in
different rows ([[def-tabloid-and-column-orders-for-specht-straightening]]).

[F3] The polytabloid is the signed column sum
$e_t=\sum_{\gamma\in C_t}\operatorname{sgn}(\gamma)\gamma\cdot\{t\}$
([[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F4] A standard tableau has entries strictly increasing along rows and down
columns ([[def-young-tableau-standard-tableau-and-shape]]).

[F5] $R_t$ consists of the permutations preserving each row set of $t$
([[def-row-and-column-stabilizers-of-a-tableau]]).

[F6] $C_t$ consists of the permutations preserving each column set of $t$
([[def-row-and-column-stabilizers-of-a-tableau]]).

## Proof

**Proof technique:** direct.

1.1 If $\gamma\in C_t$ and $\gamma\cdot\{t\}=\{t\}$, then [F5] gives $\gamma\in R_t$, so $\gamma\in C_t\cap R_t$. A permutation in this intersection preserves both the row and column of every entry; each row-column intersection contains at most one node, so it fixes every label and is the identity. Thus the identity is the only term of $e_t$ contributing to $\{t\}$, and its coefficient is $\operatorname{sgn}(1)=1$. [given, F3, F5, algebra]

1.2 Let $\gamma\in C_t$ be nonidentity and let $m$ be its largest moved label. Then $\gamma^{-1}(m)<m$: the preimage differs from $m$, and if it were larger than $m$ it would itself be a moved label larger than $m$. By [F6], $\gamma^{-1}(m)$ and $m$ lie in the same column of $t$, so by [F1] the smaller label lies above $m$. Under the left action, $\gamma\cdot t$ places $m$ in that higher node; every label larger than $m$ is fixed by $\gamma$. Thus $m$ is the largest label whose row changes, and [F2] gives $\{\gamma\cdot t\}<\{t\}$. Every nonidentity term of $e_t$ is therefore strictly below $\{t\}$. [given, F1, F2, F3, F6, algebra]

2.1 Distinct standard tableaux have distinct tabloids: their entries are already increasing within each row by [F4], so each row set determines its row uniquely. In a nontrivial linear relation among standard polytabloids, choose the greatest leading tabloid among those with nonzero coefficient; the finite total order [F2] gives this element. By steps 1.1–1.2, its coefficient in the relation is exactly the nonzero coefficient of its own polytabloid, since every other participating leading tabloid is smaller and all its terms are smaller still. This contradicts the relation. Hence the standard polytabloids are linearly independent. [F2, F4, step 1.1, step 1.2, construct] ∎
