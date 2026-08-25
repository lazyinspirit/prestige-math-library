---
id: ex-the-three-catalan-families-matched-at-semilength-three
kind: example
title: "The five Dyck paths, balanced bracket words, binary trees and pentagon triangulations at semilength $3$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [thm-binary-trees-correspond-to-dyck-paths, thm-balanced-bracket-words-are-exactly-the-nonnegative-prefix-words, def-dyck-path-and-semilength, thm-triangulations-of-a-convex-polygon-correspond-to-binary-trees, def-balanced-bracket-word, def-binary-tree-and-its-size, def-convex-polygon-chords-crossings-and-triangulations]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. Guichard, An Introduction to Combinatorics and Graph Theory, §3.5"
      url: "https://www.whitman.edu/mathematics/cgt_online/cgt.pdf"
pipeline_run: null
---

## Example

At semilength $3$, the three Catalan families on this page match as follows.

| Dyck path | balanced brackets | binary tree | pentagon triangulation |
|---|---|---|---|
| `UDUDUD` | `()()()` | $\{\varepsilon,0,1,10,11,110,111\}$ | $\{\{2,5\},\{3,5\}\}$ |
| `UDUUDD` | `()(())` | $\{\varepsilon,0,1,10,100,101,11\}$ | $\{\{2,4\},\{2,5\}\}$ |
| `UUDDUD` | `(())()` | $\{\varepsilon,0,00,01,1,10,11\}$ | $\{\{1,3\},\{3,5\}\}$ |
| `UUDUDD` | `(()())` | $\{\varepsilon,0,00,01,010,011,1\}$ | $\{\{1,4\},\{2,4\}\}$ |
| `UUUDDD` | `((()))` | $\{\varepsilon,0,00,000,001,01,1\}$ | $\{\{1,3\},\{1,4\}\}$ |

## Facts & Assumptions

**Given:** the five Dyck paths of semilength $3$ displayed in the table above.

[L1] Balanced bracket words are exactly the words with equal totals and nonnegative prefix balance ([[thm-balanced-bracket-words-are-exactly-the-nonnegative-prefix-words]]); under $\texttt{(}\mapsto U$, $\texttt{)}\mapsto D$, these are exactly the step words of Dyck paths ([[def-dyck-path-and-semilength]]).

[L2] There is a bijection from the binary trees of size $3$ to the Dyck paths of semilength $3$ ([[thm-binary-trees-correspond-to-dyck-paths]]).

[L3] There is a bijection from the binary trees of size $3$ to the triangulations of the labelled pentagon ([[thm-triangulations-of-a-convex-polygon-correspond-to-binary-trees]]).

## Verification

**Proof technique:** direct.

1.1 The bracket column is obtained from the Dyck-path column by the letter substitution of [L1], so each row gives matching Dyck and bracket words. [L1]

1.2 The tree column is chosen so that the bijection of [L2] sends each listed binary tree to the Dyck path in the same row: `UDUDUD` corresponds to the right comb, `UUUDDD` to the left comb, and the three middle rows are the three mixed recursive shapes. [L2]

2.1 The triangulation column is the image of the tree column under [L3], with the two diagonals determined by the same recursive split. Thus each row records one object in each of the three Catalan families, and the rows are pairwise distinct. [L3, step 1.2] ∎

## Remarks

- The point of the table is not the shared count but the functions. The three bijections on the A page carry the first column to the remaining ones row by row.
