---
id: lem-row-bumping-route-monotonicity
kind: lemma
title: Monotonicity of the bumping route and standardness of the output
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-partition-young-diagram-and-conjugate-partition, def-removable-and-addable-nodes-of-a-partition, def-row-insertion-and-bumping-route, def-young-tableau-standard-tableau-and-shape]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "C. Schensted, Longest Increasing and Decreasing Subsequences, Canadian Journal of Mathematics 13 (1961), 179-191 (13 pp.)"
      url: "https://sites.math.washington.edu/~billey/classes/561.fall.2019/articles/schensted.1961.pdf"
      locator: "p. 181: Lemma 1 (the inserted letters and their positions satisfy x1<x2<... and r1>=r2>=...), and the addability of the termination box; read in the complete 13-page article."
    - title: "Donald E. Knuth, Permutations, Matrices, and Generalized Young Tableaux, Pacific Journal of Mathematics 34 (1970), 709-727"
      url: "https://msp.org/pjm/1970/34-3/pjm-v34-n3-p09-s.pdf"
      locator: "§2, printed pp. 711-713: the assertions I2-I5 verifying that INSERT preserves a generalized Young tableau, and the displayed sequence conditions (2.5); read in the full text."
    - title: "David A. Craven, Groups, Geometries and Representation Theory (Spring Term 2013 lecture notes, 42 pp.)"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
      locator: "§1.5, printed pp. 11-12: row insertion and the resulting standard tableau; read in the full text."
---

## Statement

Let $T$ be a standard tableau with distinct real entries and let
$x\notin T$ be a real number, with the notation of
[[def-row-insertion-and-bumping-route]] for $T\leftarrow x$. Then:

1. the bumped letters strictly increase,
   $x=x_1<x_2<\dots<x_s$, and the route positions weakly decrease,
   $r_1\ge r_2\ge\dots\ge r_s\ge1$;
2. the new box $b=(s,r_s)$ is an addable node of $[\operatorname{shape}(T)]$,
   and $T\leftarrow x$ is a standard tableau of shape
   $\operatorname{shape}(T)+b$ whose entries are exactly the entries of $T$
   together with $x$.

## Facts & Assumptions

**Given:** A standard tableau $T$ with distinct real entries and a real number $x$ that is not an entry of $T$.

[L1] At row $i$ of $T\leftarrow x$: if row $i$ is nonempty and some entry exceeds $x_i$, then $r_i$ is the position of the leftmost such entry $y_i$, the entry is replaced by $x_i$ and $x_{i+1}:=y_i$; otherwise $x_i$ is appended at the right end of row $i$, at position $\lambda_i+1$, and the route stops ([[def-row-insertion-and-bumping-route]]).

[L2] For the distinct real alphabets of [[def-row-insertion-and-bumping-route]], a standard tableau is an injective filling with strictly increasing rows and columns; its rank relabelling gives a standard tableau in the published alphabet $\{1,\dots,n\}$, and $(i,j)\in[\lambda]$ with $(i+1,j)\in[\lambda]$ implies $T(i,j)<T(i+1,j)$ ([[def-young-tableau-standard-tableau-and-shape]], [[def-partition-young-diagram-and-conjugate-partition]]).

[L3] A node $(i,\lambda_i+1)$ is addable for $\lambda$ if and only if $i=1$ or $\lambda_{i-1}>\lambda_i$; and $[\lambda]\cup\{(i,\lambda_i+1)\}$ is then the diagram of a partition ([[def-removable-and-addable-nodes-of-a-partition]]).

## Proof

**Proof technique:** direct.

1.1 The bumped letters increase: when the route replaces at row $i$, the new carried letter is $x_{i+1}=y_i>x_i$ by the leftmost-greater choice of $r_i$; hence $x=x_1<x_2<\dots<x_s$. [L1, given]

1.2 The positions weakly decrease: supposing the route continues from row $i$ to row $i+1$ with $r_i$ defined, if row $i+1$ has length $\lambda_{i+1}\ge r_i$, then the entry of $T$ at $(i+1,r_i)$ lies below the old entry $y_i=x_{i+1}$ of $(i,r_i)$, so it exceeds $x_{i+1}$; the leftmost entry of row $i+1$ exceeding $x_{i+1}$ is therefore at a position $r_{i+1}\le r_i$. If instead $\lambda_{i+1}<r_i$, the next step either bumps at $r_{i+1}\le\lambda_{i+1}$ or appends at $r_{i+1}=\lambda_{i+1}+1$; both give $r_{i+1}\le r_i$. [L1, L2]

2.1 The route terminates at a well-defined row $s$: the positions are positive integers with $r_1\le\lambda_1+1$, they weakly decrease along the visited rows, and after the last nonempty row the next row is empty and the letter is appended, so only finitely many rows are visited and the appended new box is $b=(s,r_s)$ with $r_s=\lambda_s+1$. [step 1.2, L1]

3.1 The new box is addable: if $s=1$ then $b=(1,\lambda_1+1)$ is addable by [L3]; if $s>1$, the route reached row $s$ after replacing at row $s-1$, so $r_{s-1}\le\lambda_{s-1}$ and $r_s=\lambda_s+1\le r_{s-1}$ by step 1.2, whence $\lambda_s<\lambda_{s-1}$ and $b$ is addable by [L3]. [step 1.2, step 2.1, L3]

3.2 The entries of the output are exactly the entries of $T$ together with $x$: each row visit writes the carried letter $x_i$ into a box of row $i$ and removes the entry $y_i=x_{i+1}$ from it, and the final visit appends $x_s$ into the new box without removing anything; thus the multiset of entries changes from that of $T$ by adding $x_1=x$ and deleting nothing, and the shape grows by the single box $b$. [step 2.1, L1]

4.1 The output is standard: the replaced entries keep strictly increasing rows because $x_i$ is placed at the leftmost position whose old entry exceeded it, so its left neighbour is $<x_i$ and its right neighbour is larger than the displaced entry and hence $>x_i$, and an appended letter exceeds every entry of its row; columns remain strictly increasing because at each replaced box $(i,r_i)$ the entry above is either a previously placed bumped letter $x_{i-1}<x_i$ or an unchanged entry lying left of the old entry $x_i$ in row $i-1$, hence smaller than $x_i$, and the entry below is either the newly placed $x_{i+1}>x_i$ (when $r_{i+1}=r_i$) or the unchanged entry at $(i+1,r_i)$, which exceeds the old entry $y_i=x_{i+1}$ and hence $x_i$ (when $r_{i+1}<r_i$), while the appended box $(s,\lambda_s+1)$ lies below either a placed $x_{s-1}<x_s$ or an unchanged entry left of the old entry $x_s$ of $(s-1,r_{s-1})$; all other boxes are unchanged. [step 1.1, step 1.2, step 3.1, L1, L2]

5.1 The output is a standard tableau of shape $\operatorname{shape}(T)+b$ with entries those of $T$ plus $x$, as asserted. [step 3.1, step 3.2, step 4.1] ∎
