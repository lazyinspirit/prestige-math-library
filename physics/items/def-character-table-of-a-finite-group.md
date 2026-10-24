---
id: def-character-table-of-a-finite-group
kind: definition
title: "The character table of a finite group"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-conjugacy-class-and-centralizer, def-irreducible-complex-character]
justified_by: []
aliases: []
verification:
  audited: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Section 3.1"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Section 3.5"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
---

## Definition

Let $G$ be a finite group, let $\chi_1,\dots,\chi_r$ be the irreducible complex
characters of $G$, one per equivalence class
([[def-irreducible-complex-character]]), and let $g_1,\dots,g_s$ be
representatives of the distinct conjugacy classes of $G$
([[def-conjugacy-class-and-centralizer]]). The **character table** of $G$ is
the array whose rows are indexed by $\chi_1,\dots,\chi_r$, whose columns are
indexed by $g_1,\dots,g_s$, and whose $(i,j)$ entry is $\chi_i(g_j)$.

The array is written with a top row recording the conjugacy-class sizes
$|\operatorname{Cl}_G(g_j)|$ above the column labels, and with the first column
recording the degrees $\chi_i(1)$ beside the row labels. The ordering of the
rows and of the columns is arbitrary: permuting either does not change the table
as data. Because each $\chi_i$ is constant on each conjugacy class, the entry
$\chi_i(g_j)$ is independent of the choice of representative $g_j$. That the
number of rows equals the number of columns is a theorem about the table, proved
later on this page as
[[cor-the-character-table-is-square-and-invertible]], not part of the present
definition.
