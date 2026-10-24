---
id: ex-semistandard-tableaux-and-small-kostka-numbers
kind: example
title: Small Kostka numbers
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-semistandard-tableau-and-kostka-number]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "David Craven, Groups, Geometries and Representation Theory - Section 2.4, printed pp. 28-29 (PDF pp. 30-31)"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Example

Write a filling of a diagram with at most two rows by its rows, so that
$11/2$ denotes the tableau whose first row is $1,1$ and whose second row is
$2$. For $n=3$ the small Kostka numbers are
$$K_{(2,1),(2,1)}=1,\qquad K_{(2,1),(1,1,1)}=2,\qquad K_{(3),(2,1)}=1,\qquad K_{(1,1,1),(2,1)}=0 .$$
The witnesses are: the single filling $11/2$ for shape $(2,1)$ and content
$(2,1)$; the two fillings $12/3$ and $13/2$ for shape $(2,1)$ and content
$(1,1,1)$; and the single filling $112$ for shape $(3)$ and content $(2,1)$.
There is no semistandard filling of the column $(1,1,1)$ with content
$(2,1)$.

## Facts & Assumptions

**Given:** The partitions $(2,1)$, $(3)$, $(1,1,1)$ and $(2,1)$ of $3$, and the filling notation of the Example section.

[F1] A semistandard tableau of shape $\lambda$ and content $\mu$ is a filling of $[\lambda]$ such that the entry $i$ occurs exactly $\mu_i$ times, entries weakly increase along each row and strictly increase down each column; $K_{\lambda,\mu}$ is the number of such fillings ([[def-semistandard-tableau-and-kostka-number]]).

[F2] A filling of content $(1^n)$ is semistandard exactly when it is standard, so $K_{\lambda,(1^n)}=f^\lambda$ ([[def-semistandard-tableau-and-kostka-number]]).

## Verification

**Proof technique:** direct.

1.1 For shape $(2,1)$ and content $(2,1)$ the filling carries two $1$'s and one $2$, so the single entry $2$ occupies one of the three boxes; placing it in the first box of the top row gives $21/1$, whose top row violates weak increase since $2>1$; placing it in the second box of the top row gives $12/1$, whose column has entries $1,1$ and violates strict increase; placing it in the bottom box gives $11/2$, whose rows are weakly increasing and whose column entries $1<2$ strictly increase, and no other filling is available, so $K_{(2,1),(2,1)}=1$, realized by $11/2$. [given, F1]

1.2 For shape $(2,1)$ and content $(1,1,1)$ the fillings are the bijections of the three boxes onto $\{1,2,3\}$, six in all; each of $12/3$ and $13/2$ is semistandard, since its rows are weakly increasing and its column entries are $1<3$ and $1<2$, while $21/3$, $31/2$ and $32/1$ have a top row that is not weakly increasing and $23/1$ has column entries $2,1$, which are not strictly increasing, and hence $K_{(2,1),(1,1,1)}=2$, in agreement with $K_{\lambda,(1^n)}=f^\lambda$ and $f^{(2,1)}=2$. [F1, F2]

1.3 For shape $(3)$ the diagram is a single row, whose weak increase forces the entries to be sorted, so the filling of content $(2,1)$ must be $1,1,2$, that is $112$, and this filling is semistandard because a one-row diagram has no column condition; hence $K_{(3),(2,1)}=1$. [given, F1]

1.4 For shape $(1,1,1)$ the diagram is a single column of three boxes, and strict increase down the column forces the three entries to be pairwise distinct; the content $(2,1)$ supplies only the two distinct labels $1$ and $2$, with $1$ repeated twice, so no filling of that content is semistandard and $K_{(1,1,1),(2,1)}=0$. [given, F1]

2.1 Steps 1.1, 1.2, 1.3 and 1.4 compute the four displayed numbers $1,2,1,0$, by checking all three content fillings in step 1.1 and all six in step 1.2, and by using the row and column conditions in steps 1.3 and 1.4 to leave respectively one and no semistandard fillings. Each of the latter two shapes has three fillings of content $(2,1)$ before imposing those conditions. ∎ [step 1.1, step 1.2, step 1.3, step 1.4, F1, F2]
