---
id: def-row-insertion-and-bumping-route
kind: definition
title: Row insertion and the bumping route
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-partition-young-diagram-and-conjugate-partition, def-young-tableau-standard-tableau-and-shape]
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
      locator: "p. 180: definition of S <- x (row insertion) with the displacement and append rules; read in the complete 13-page article."
    - title: "Donald E. Knuth, Permutations, Matrices, and Generalized Young Tableaux, Pacific Journal of Mathematics 34 (1970), 709-727"
      url: "https://msp.org/pjm/1970/34-3/pjm-v34-n3-p09-s.pdf"
      locator: "§2, printed pp. 711-712: the INSERT (x) algorithm I1-I5 with its asserted invariants; read in the full text."
    - title: "David A. Craven, Groups, Geometries and Representation Theory (Spring Term 2013 lecture notes, 42 pp.)"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
      locator: "§1.5, printed pp. 11-12: the row-insertion procedure (i)-(iii); read in the full text."
---

## Definition

Let $T$ be a standard tableau whose entries are distinct real numbers
([[def-young-tableau-standard-tableau-and-shape]]) and let
$x\in\mathbb R$ be a number that is not an entry of $T$. The **row insertion**
$T\leftarrow x$ is the following procedure. Put $x_1:=x$ and consider row $1$.
At row $i$: if row $i$ is empty or $x_i$ is larger than every entry of row
$i$, append $x_i$ in a new box at the right end of row $i$ and stop;
otherwise let $r_i$ be the position of the leftmost entry $y_i$ of row $i$
with $y_i>x_i$, replace that entry by $x_i$, put $x_{i+1}:=y_i$, and continue
with row $i+1$.

For distinct real alphabets, the phrase "standard tableau" in this insertion
packet means an injective filling whose rows and columns strictly increase.
Its unique increasing rank relabelling is a standard tableau with entries
$1,\dots,m$ in the published convention. Each comparison in this procedure
is preserved and reflected by increasing relabelling, so all positions and
carried labels correspond under that relabelling, by induction over the
finite procedure.

The procedure terminates, and the bound is proved rather than assumed. If
$r_i$ is defined for a nonempty row $i$, then either row $i+1$ has length
$<r_i$, in which case the next step either bumps an entry in that shorter row, at a
position $r_{i+1}\le\lambda_{i+1}$, or appends at
$r_{i+1}=\lambda_{i+1}+1$; in either case $r_{i+1}\le r_i$, or row $i+1$ has length $\ge r_i$; in the
latter case its entry in position $r_i$ lies strictly below $y_i$ and is
therefore larger than $y_i$, so again the next replacement position, when it
exists, satisfies $r_{i+1}\le r_i$. Hence the route positions weakly decrease,
and after at most $k+1$ row visits, where $k$ is the number of nonempty rows
of $T$, the letter is appended (at the latest in the empty row $k+1$).

The output is a filling of $[\operatorname{shape}(T)]\cup\{b\}$, where the
**new box** is $b=(s,r_s)$ with $r_s=\lambda_s+1$ in the row $s$ in which the
route stopped, or $b=(k+1,1)$ if a new row was opened. The sequence
$(r_1,\dots,r_s)$ is the **bumping route** and $x=x_1<x_2<\dots<x_s$ are the
**bumped letters**; the strict increase of the bumped letters is proved in
[[lem-row-bumping-route-monotonicity]]. The procedure is deterministic, so
$T\leftarrow x$ is well defined; standardness of the output is not part of the
definition but is proved in the same lemma.
