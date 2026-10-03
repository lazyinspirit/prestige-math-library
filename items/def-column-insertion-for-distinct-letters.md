---
id: def-column-insertion-for-distinct-letters
kind: definition
title: Column insertion
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-partition-young-diagram-and-conjugate-partition, def-row-insertion-and-bumping-route, def-young-tableau-standard-tableau-and-shape, lem-row-bumping-route-monotonicity]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "C. Schensted, Longest Increasing and Decreasing Subsequences, Canadian Journal of Mathematics 13 (1961), 179-191 (13 pp.)"
      url: "https://sites.math.washington.edu/~billey/classes/561.fall.2019/articles/schensted.1961.pdf"
      locator: "pp. 179-181: the dual insertion x -> S defined by the transposed rule, and the statement that it equals the transpose of row insertion; read in the complete 13-page article."
    - title: "Donald E. Knuth, Permutations, Matrices, and Generalized Young Tableaux, Pacific Journal of Mathematics 34 (1970), 709-727"
      url: "https://msp.org/pjm/1970/34-3/pjm-v34-n3-p09-s.pdf"
      locator: "§5, printed pp. 720-721: dual tableaux as transposes of generalized tableaux and the INSERT* / DELETE* algorithms; read in the full text."
---

## Definition

Let $T$ be a standard tableau with distinct real entries
([[def-young-tableau-standard-tableau-and-shape]]) and let $x\notin T$ be a
real number. The **column insertion** $x\to T$ is defined by the same rules as
row insertion with rows replaced by columns: put $x_1:=x$ and consider column
$1$. At column $i$: if column $i$ is empty or $x_i$ is larger than every
entry of column $i$, append $x_i$ in a new box at the bottom of column $i$ and
stop; otherwise let $y_i$ be the topmost entry of column $i$ that is larger
than $x_i$, replace that entry by $x_i$, put $x_{i+1}:=y_i$, and continue
with column $i+1$. Equivalently,
$$x\to T=(T^{\mathrm t}\leftarrow x)^{\mathrm t},$$
where $T^{\mathrm t}$ is the transposed tableau (a standard tableau of shape
$[\operatorname{shape}(T)']$, [[def-partition-young-diagram-and-conjugate-partition]])
and $\leftarrow$ is the row insertion of
[[def-row-insertion-and-bumping-route]]; the equivalence is the observation
that transposing a tableau interchanges rows and columns, so "leftmost entry
of a row greater than the carried letter" becomes "topmost entry of a column
greater than the carried letter".

By the equivalence, the column procedure terminates and $x\to T$ is a
standard tableau with entries those of $T$ together with $x$, of shape
$[\operatorname{shape}(T)]$ with one box added at the bottom of a column: this
is [[lem-row-bumping-route-monotonicity]] applied to $T^{\mathrm t}$, whose
new box transposes back to a box at the bottom of a column of $T$. The route
positions weakly decrease from column to column, again by transposing the
position bound for row insertion. No choice is used; the procedure is
deterministic.
