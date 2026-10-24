---
id: lem-row-insertion-and-reverse-deletion-are-inverse
kind: lemma
title: Row insertion and reverse deletion are inverse
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-partition-young-diagram-and-conjugate-partition, def-reverse-row-deletion, def-row-insertion-and-bumping-route, def-young-tableau-standard-tableau-and-shape, lem-row-bumping-route-monotonicity]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "amended_repair"
    date: 2026-10-03
    scope: "Complete item claim and mathematical body read in delegated Step 5a adjudication; evidence: research/frontier-38-owner-30-alpha-batch-9-5a.md; immutable carrier: research/frontier-38-owner-30-step5-hash-9-post-5a.json; exact saved draft bytes in git d90f26208 match that carrier after exclusion of the later judge stamp. Current content matches the saved carrier except publication status and verification metadata. Source and supplier coverage is limited to the report."
    delegated_by: "owner via tools/autopilot frontier-38-owner-30 5a-batch-9 dispatch"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Donald E. Knuth, Permutations, Matrices, and Generalized Young Tableaux, Pacific Journal of Mathematics 34 (1970), 709-727"
      url: "https://msp.org/pjm/1970/34-3/pjm-v34-n3-p09-s.pdf"
      locator: "§2, printed pp. 713-714: the assertion that INSERT (x) and DELETE (s,t) recompute each other's sequences and restore the tableau; read in the full text."
    - title: "C. Schensted, Longest Increasing and Decreasing Subsequences, Canadian Journal of Mathematics 13 (1961), 179-191 (13 pp.)"
      url: "https://sites.math.washington.edu/~billey/classes/561.fall.2019/articles/schensted.1961.pdf"
      locator: "p. 182, proof of Lemma 3: the upward recovery argument for the inserted element; read in the complete 13-page article."
    - title: "David A. Craven, Groups, Geometries and Representation Theory (Spring Term 2013 lecture notes, 42 pp.)"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
      locator: "§1.5, printed pp. 12-13, proof of Theorem 1.14: the deletion rule and the recovery of the inserted letter; read in the full text."
---

## Statement

Let $T$ be a standard tableau with distinct real entries, let $x\notin T$ be a
real number, and let $U:=T\leftarrow x$ with new box $b$
([[def-row-insertion-and-bumping-route]]). Then:

1. $U-b=(T,x)$, i.e. reverse deletion from the new box returns $T$ and
   expels $x$.
2. Conversely, if $U$ is a standard tableau, $b$ a removable node of
   $[\operatorname{shape}(U)]$, and $(V,x):=U-b$ the result of reverse
   deletion ([[def-reverse-row-deletion]]), then $x\notin V$ and
   $V\leftarrow x=U$ with new box $b$.

Thus reverse deletion at the new box undoes insertion, and insertion undoes
reverse deletion at any removable box.

## Facts & Assumptions

**Given:** A standard tableau $T$ with distinct real entries, a real number $x\notin T$, the insertion $U=T\leftarrow x$ with route positions $r_1\ge\dots\ge r_s$ and added box $b=(s,r_s)$, and, for the converse, a standard tableau $U$ with a removable box $b=(s,t)$ and $(V,x):=U-b$.

[L1] Insertion places $x_i$ at position $r_i$ of row $i$, bumping the old entry $x_{i+1}$ there for $i<s$, and appends $x_s$ in the new box $b$; rows and columns of $U$ are strictly increasing ([[def-row-insertion-and-bumping-route]], [[lem-row-bumping-route-monotonicity]]).

[L2] Reverse deletion from $b=(s,t)$ starts at row $s$ with $x_{s+1}:=+\infty$ and, descending, at row $i$ takes $j_i$ to be the largest index with $U(i,j_i)<x_{i+1}$, sets $x_i:=U(i,j_i)$, overwrites $U(i,j_i)$ by $x_{i+1}$, and the result $V$ is standard with entries the entries of $U$ except $x_1$ ([[def-reverse-row-deletion]]).

[L3] In a standard tableau the entries strictly increase along rows and down columns, so an entry left of a given position is smaller and an entry right of it is larger ([[def-young-tableau-standard-tableau-and-shape]]).

## Proof

**Proof technique:** direct.

1.1 (First direction, row $s$.) In $U$ the appended letter is $x_s$ at position $r_s=\lambda_s+1$ of row $s$, so row $s$ of $U$ equals row $s$ of $T$ followed by $x_s$, and the largest index $j_s$ with $U(s,j_s)<+\infty$ is $r_s$. Reverse deletion therefore sets $x_s=U(s,r_s)$, empties that cell (so that $V$ has shape $[\operatorname{shape}(T)]$), and continues upward. [L1, L2]

1.2 (Converse direction, insertion route.) If $s=1$, deletion removes the final entry $x_1$ of row1 and reinsertion appends it, so the converse is immediate. For $s\ge2$, let $(V,x)=U-b$ with deletion positions $j_1,\dots,j_s$, so $j_s=t$, row $i$ of $V$ agrees with row $i$ of $U$ off the single cell $(i,j_i)$ and carries $x_{i+1}$ there for $i<s$ (with the cell $b=(s,j_s)$ absent), and the expelled letter is $x=x_1$. In row $1$ of $V$, the entries left of $j_1$ are the entries of $U$ left of $(1,j_1)$, hence smaller than $x_1$, and the entries right of $j_1$ are the entries of $U$ right of it, hence larger than $x_1$; the entry at $j_1$ is $x_2$. So inserting $x_1$ replaces position $j_1$ and bumps $x_2$. [L2, L3]

2.1 (First direction, induction upward.) Suppose reverse deletion carries $x_{i+1}$ into row $i<s$, after restoring the lower rows. Row $i$ is still the row of $U$: its entry at $r_i$ is $x_i<x_{i+1}$, its entries left of $r_i$ are smaller than $x_i$, and its entries right of $r_i$ are unchanged entries of $T$ strictly greater than the old displaced value $T(i,r_i)=x_{i+1}$. Thus the rightmost entry smaller than $x_{i+1}$ is exactly $r_i$. Reverse deletion carries $x_i$ upward and restores $T(i,r_i)=x_{i+1}$. Inducting from the final-box deletion in step 1.1 restores every row of $T$. [step 1.1, L1, L2, L3]

2.2 (Converse direction, induction downward.) At row $i<s$, deletion removed $x_i$ at $j_i$ and replaced it by $x_{i+1}>x_i$. The entries of $V$ left of $j_i$ are unchanged entries of $U$ smaller than $x_i$, and those to its right are unchanged entries larger than $x_{i+1}$, since $j_i$ was the rightmost entry smaller than $x_{i+1}$ and the entries are distinct. Therefore, when reinsertion carries $x_i$ into row $i$, it chooses exactly $j_i$, restores $x_i$, and bumps $x_{i+1}$ into row $i+1$. Starting at row1 with $x=x_1$, this induction reconstructs all replaced rows. In the final row $s$, deletion removed its row-end value $x_s$, so the remaining entries are smaller than $x_s$ and reinsertion appends it precisely in $b=(s,j_s)$. [step 1.2, L1, L2, L3]

3.1 (First direction, conclusion.) By step 1.1 and downward induction in step 2.1, reverse deletion visits the rows $s,s-1,\dots,1$, restores in each row $i$ the entry of $T$ at $(i,r_i)$, expels $x_1=x$, and leaves the filling $T$ of shape $[\operatorname{shape}(T)]$; that is, $U-b=(T,x)$. [step 1.1, step 2.1, L1]

4.1 (Converse direction, conclusion.) By steps 1.2 and 2.2 the insertion of $x$ into $V$ follows the positions $j_1,\dots,j_s$, rewrites the same entries as $U$ and appends at $b$; hence $V\leftarrow x=U$ with new box $b$. Finally $x\notin V$, because by [L2] the entries of $V$ are the entries of $U$ with $x_1$ deleted, and $U$ has distinct entries. [step 1.2, step 2.2, L1, L2] ∎
