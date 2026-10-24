---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-a-schreier-coset-graph-and-its-tree-basis.json
  precheck: pass
id: ex-a-schreier-coset-graph-and-its-tree-basis
kind: example
title: "A Schreier coset graph and its spanning-tree basis"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [def-labeled-schreier-coset-graph, lem-spanning-trees-and-schreier-systems-correspond, thm-nielsen-schreier-with-an-explicit-basis]
justified_by: []
aliases: []
landmark: false
generation:
  role: example
proof_strategy: direct
sources:
  scraped: []
  references: []
---

## Example

Let $H$ be the kernel of the homomorphism
$F(a,b)\to\mathbb Z/2\mathbb Z\times\mathbb Z/2\mathbb Z$ sending both $a$ and
$b$ to the nontrivial element of the corresponding factor. Then the Schreier
graph has four cosets

$$H,\ Ha,\ Hb,\ Hab,$$

and the non-tree edges of the rooted spanning tree

$$H\xrightarrow{a}Ha,\qquad H\xrightarrow{b}Hb,\qquad Ha\xrightarrow{b}Hab$$

give the free basis

$$a^2,\ b^2,\ ab^2a^{-1},\ abab^{-1},\ bab^{-1}a^{-1}.$$

## Facts & Assumptions

**Given:** The subgroup $H$ above.

[L1] The Schreier graph records cosets and labeled generator edges ([[def-labeled-schreier-coset-graph]]).

[L2] Rooted spanning trees correspond to Schreier systems ([[lem-spanning-trees-and-schreier-systems-correspond]]).

[L3] The nontrivial Schreier generators of such a tree form a free basis ([[thm-nielsen-schreier-with-an-explicit-basis]]).

## Verification

**Proof technique:** direct.

1.1 The quotient records only the parities of the exponent sums of $a$ and $b$, so the four right cosets are exactly $H$, $Ha$, $Hb$, and $Hab$. The labeled Schreier graph therefore has $a$-edges $H\leftrightarrow Ha$ and $Hb\leftrightarrow Hab$, and $b$-edges $H\leftrightarrow Hb$ and $Ha\leftrightarrow Hab$. [L1, given, construct]

2.1 The three displayed edges form a rooted spanning tree, so [L2] gives the corresponding Schreier system $\{1,a,b,ab\}$. The five positive edges not in that tree yield the nontrivial generators $a^2$, $b^2$, $ab^2a^{-1}$, $abab^{-1}$, and $bab^{-1}a^{-1}$. [L2, step 1.1, algebra]

3.1 By [L3], those five elements form a free basis of $H$. [L3, step 2.1] ∎


## Remarks

The graph below shows all eight positive-letter edges. Solid thick arrows
are the three tree edges; dashed arrows are the five non-tree edges, numbered
for the table below. Each arrow has its own direction: two oppositely directed
$a$-arrows are distinct positive edges, and traversing either backward reads
$a^{-1}$, not $a$. The same convention applies to $b$.

```tikz
\begin{tikzpicture}[>=stealth]
\node[circle,draw,minimum size=12mm] (H) at (0,0) {$H$};
\node[circle,draw,minimum size=12mm] (Ha) at (5,0) {$Ha$};
\node[circle,draw,minimum size=12mm] (Hb) at (0,-3.5) {$Hb$};
\node[circle,draw,minimum size=12mm] (Hab) at (5,-3.5) {$Hab$};
\draw[->,very thick] (H) to[bend left=18] node[above] {$a$} (Ha);
\draw[->,dashed] (Ha) to[bend left=18] node[below] {$a\ (1)$} (H);
\draw[->,very thick] (H) to[bend right=18] node[left] {$b$} (Hb);
\draw[->,dashed] (Hb) to[bend right=18] node[right] {$b\ (2)$} (H);
\draw[->,very thick] (Ha) to[bend left=18] node[right] {$b$} (Hab);
\draw[->,dashed] (Hab) to[bend left=18] node[left] {$b\ (3)$} (Ha);
\draw[->,dashed] (Hab) to[bend left=18] node[below] {$a\ (4)$} (Hb);
\draw[->,dashed] (Hb) to[bend left=18] node[above] {$a\ (5)$} (Hab);
\end{tikzpicture}
```

The tree paths from the root $H$ have labels $1,a,b,ab$. For a non-tree
edge $Ht\xrightarrow{x}Hu$, the corresponding based loop has label
$txu^{-1}$, following the tree to $Ht$, this edge, and the reverse tree path
from $Hu$. Thus the numbered edges give exactly the displayed basis:

| Edge | $t$ | $x$ | $u$ | $txu^{-1}$ |
| --- | --- | --- | --- | --- |
| $(1)$ | $a$ | $a$ | $1$ | $a^2$ |
| $(2)$ | $b$ | $b$ | $1$ | $b^2$ |
| $(3)$ | $ab$ | $b$ | $a$ | $ab^2a^{-1}$ |
| $(4)$ | $ab$ | $a$ | $b$ | $abab^{-1}$ |
| $(5)$ | $b$ | $a$ | $ab$ | $bab^{-1}a^{-1}$ |

The verification above is independent of the illustration.
