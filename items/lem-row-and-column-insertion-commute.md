---
id: lem-row-and-column-insertion-commute
kind: lemma
title: Row and column insertion commute
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-column-insertion-for-distinct-letters, def-partition-young-diagram-and-conjugate-partition, def-row-insertion-and-bumping-route, def-young-tableau-standard-tableau-and-shape, lem-row-bumping-route-monotonicity]
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
      locator: "pp. 183-187: Lemma 6, (x -> S) <- y = x -> (S <- y), by the largest-letter induction and the case enumeration of Figures 4-12; read in the complete 13-page article."
    - title: "A. Abram and C. Reutenauer, On a Lemma of Schensted (arXiv:2303.16026, 9 pp.)"
      url: "https://arxiv.org/pdf/2303.16026"
      locator: "pp. 1-9: a complete direct proof of Theorem 3.1 (Schensted's Lemma 6) by the trail device: Lemma 2.1 (bump stability), Lemmas 5.1-5.4 and Corollary 5.5 (the two trails meet in at most one box, never cross weakly, and the five possible local configurations), Lemma 6.1 and Proposition 6.2 (the conflict resolution at the meeting box), and the conclusion in Section 7; read in the complete 9-page note."
    - title: "Donald E. Knuth, Permutations, Matrices, and Generalized Young Tableaux, Pacific Journal of Mathematics 34 (1970), 709-727"
      url: "https://msp.org/pjm/1970/34-3/pjm-v34-n3-p09-s.pdf"
      locator: "§6, printed p. 724: the dual insertion relation P(v_n,...,v_1) = (P*(v_1,...,v_n))^t; read in the full text as an independent check."
---

## Statement

Let $T$ be a standard tableau with distinct real entries and let $x\ne y$ be
real numbers not occurring in $T$. Then
$$(x\to T)\leftarrow y\;=\;x\to(T\leftarrow y),$$
the equality being an equality of standard tableaux on the same diagram;
equivalently, in the notation of the definitional relation
$x\to T=(T^{\mathrm t}\leftarrow x)^{\mathrm t}$, row-inserting $y$ commutes
with column-inserting $x$.

## Facts & Assumptions

**Given:** A standard tableau $T$ with distinct real entries, real numbers $x\ne y$ not occurring in $T$, the row insertion $T\leftarrow y$ ([[def-row-insertion-and-bumping-route]]) and the column insertion $x\to T$ ([[def-column-insertion-for-distinct-letters]]).

[L1] In the row insertion $T\leftarrow y$ the route positions are $(1,c_1),\dots,(k,c_k)$ with $c_1\ge\dots\ge c_k\ge1$ and $c_k=\lambda_k+1$, the bumped labels $\omega_1=T(1,c_1)<\dots<\omega_{k-1}=T(k-1,c_{k-1})$ strictly increase, and $T\leftarrow y$ is the standard tableau obtained by placing $y$ at $(1,c_1)$ and moving $T(i,c_i)$ from $(i,c_i)$ to $(i+1,c_{i+1})$ for $i<k$ ([[def-row-insertion-and-bumping-route]], [[lem-row-bumping-route-monotonicity]]).

[L2] $x\to T=(T^{\mathrm t}\leftarrow x)^{\mathrm t}$; transposing [L1] gives the route $(r_1,1),\dots,(r_l,l)$ of $x\to T$ with rows $r_1\ge r_2\ge\dots\ge r_l\ge1$ with $r_l=\lambda'_l+1$ (where $\lambda'_{\lambda_1+1}=0$ when a new column $l=\lambda_1+1$ is opened), strictly increasing carried labels, and $x\to T$ obtained by placing $x$ at $(r_1,1)$ and moving the old label of $(r_j,j)$ to $(r_{j+1},j+1)$ for $j<l$ ([[def-column-insertion-for-distinct-letters]], [[def-partition-young-diagram-and-conjugate-partition]]).

[L3] Entries of a standard tableau strictly increase along every row and every column; all entries of $T$, $x$ and $y$ are pairwise distinct ([[def-young-tableau-standard-tableau-and-shape]], [[def-row-insertion-and-bumping-route]]).





[L4] For the finite distinct real alphabets here, an increasing tableau means an injective filling with strictly increasing rows and columns. Replacing its entries by their ranks gives a standard tableau in the published alphabet $1,\dots,m$ ([[def-young-tableau-standard-tableau-and-shape]]). Every insertion comparison is preserved by increasing relabelling; this is the real-alphabet convention used in the statement and insertion suppliers.

## Proof

**Proof technique:** direct.

1.1 A finite real alphabet has a unique increasing enumeration. Its rank map preserves and reflects all inequalities, so the first-greater position, each carried label, and the final shape are unchanged under relabelling, by induction over the finite procedure; compressing the entry ranks gives the published standard tableau. Thus strict-row/strict-column arguments apply to the original real labels as well. For each insertion call its activated boxes, including its final new box, its trail. A row trail has increasing row numbers and weakly decreasing columns; a column trail has increasing columns and weakly decreasing rows. At each occupied trail box the old label is replaced by the smaller preceding carried label; at the final empty box the last label is appended. Each occupied label sequence strictly increases, by [L1] and its transpose [L2]. [L1, L2, L3, L4]

2.1 The two original trails have at most one common box. For two occupied common boxes, order them by increasing row: their labels increase along the row trail, whereas their distinct columns decrease, so their order on the column trail is reversed and their labels would decrease, a contradiction. An empty common box must be empty for both trails because only occupied boxes belong to $T$. If it were shared along with an occupied box, that occupied box would have a smaller row than the empty box on the row trail and a smaller column on the column trail; the row trail instead requires its earlier column to be at least the final column. This is impossible. [step 1.1, L3]

2.2 Bump stability: if the entry bumped by a carried letter $z$ is unchanged, and every entry left of it is unchanged or decreased, that entry remains the leftmost entry exceeding $z$. Thus away from a common box, sliding the other trail leaves each occupied bump of a row trail unchanged; this applies successively since the same labels are carried. A new box from the other slide lies at an old row end, so cannot interfere with an occupied bump to its left. At an append step it can interfere only if it is that same row-end box, which would be a second common box. The transposed assertions hold for columns. [L1, L2, L3, step 1.1, algebra]

3.1 If the trails are disjoint, step 2.2 proves that each insertion into the result of the other has exactly its original trail and carried labels. The two composites therefore perform the same two slides on disjoint boxes and agree. [step 2.2, L1, L2]

3.2 Suppose their common box $S=(\rho,\gamma)$ is occupied, with old label $s$. Let $a$ and $i$ be the labels carried into $S$ by the column and row insertions. If there is a preceding column-trail box, call it $A=(r,\gamma-1)$, with $r\ge\rho$ and old label $a$; otherwise $\gamma=1$ and $a=x$. If there is a preceding row-trail box, call it $I=(\rho-1,c)$, with $c\ge\gamma$ and old label $i$; otherwise $\rho=1$ and $i=y$. Let $B$ and $J$ be the next boxes of the column and row trails, in column $\gamma+1$ and row $\rho+1$, respectively; they may be their final empty boxes. Their old labels, when occupied, are $b>s$ and $j>s$. Also $a<s$, $i<s$, and $a\ne i$: the predecessor boxes have different coordinates, and the input letters are distinct and absent from $T$. [step 1.1, step 2.1, L1, L2, L3]

4.1 If $A$ is not immediately left of $S$, then $J$ is immediately below $S$. Indeed, if $A$ exists then $r\ge\rho+1$. If $J=(\rho+1,c')$ had $c'<\gamma$, it would lie weakly above and left of $A$, hence be occupied and have label $j\le a$ (with equality only if it were $A$). Equality is excluded by step 2.1, and strict inequality contradicts $a<s<j$. If $A$ does not exist, $\gamma=1$ already forces $c'=1$. Transposing this argument shows that if $I$ is not immediately above $S$, then $B$ is immediately right of $S$. These arguments also handle empty $J$ or $B$, since a box weakly above and left of an occupied box cannot be empty in a Young diagram. [step 3.2, step 2.1, L3, algebra]

5.1 Assume $i<a$. Then $A$ cannot be immediately left of $S$, since the row insertion which carries $i$ to $S$ has every old entry left of $S$ smaller than $i$. Thus $J=(\rho+1,\gamma)$ by step 4.1. Perform the column slide first. All row bumps before $S$ remain unchanged by step 2.2. At $S$ the value is now $a>i$, while every entry to its left has remained unchanged or decreased from a value smaller than $i$, so the row insertion places $i$ at $S$ and bumps $a$. [step 4.1, step 2.2, L1, L2, L3]

5.2 Assume $i>a$. Then $I$ cannot be immediately above $S$, since the column insertion carrying $a$ to $S$ has every old entry above $S$ smaller than $a$. Hence $B=(\rho,\gamma+1)$ by step 4.1. After the column slide the entries at $S,B$ are $a,s$. The row trail before $S$ is unchanged by step 2.2. In row $\rho$ its carried label $i$ exceeds $a$, all entries left of $S$ are smaller than $i$, and $s>i$, so the row insertion puts $i$ at $B$ and bumps $s$. Its next bump is the original box $J$, since that box is unchanged, its old label exceeds $s$, all old entries to its left were smaller than $s$, and the column slide only decreases them. An empty $J$ remains the append box, since a second common box is excluded. Step 2.2 gives the rest of the original row trail. Thus $S,B,J$ have labels $a,i,s$, and all other boxes have their ordinary slid labels. [step 4.1, step 2.1, step 2.2, L1, L2, L3]

6.1 In row $\rho+1$ every entry left of $J$ is smaller than $a$ after the column slide. For $\gamma>1$, its last possible entry is at $(\rho+1,\gamma-1)$: if $A$ is lower than that box, the old value there is smaller than $a$ by column strictness; if $A$ is that box, the slide replaces $a$ by a smaller label. All other changes decrease labels. For $\gamma=1$ there is no left entry. The box $J$ is unchanged by the column slide, since the only common box is $S$; if occupied its label $j>s>a$, and if empty it is still the row-end box. Thus the row insertion puts $a$ at $J$ and carries $j$ onward if it exists. Step 2.2 then preserves the remaining original row trail. The final labels at $S,B,J$ are $i,s,a$, and every other box has its ordinary slid label. The label $s$ at $B$ is not touched by the row insertion: before $S$ that row trail is unchanged, and after $S$ it lies in rows greater than $\rho$, whereas $B$ has row at most $\rho$. [step 5.1, step 3.2, step 2.1, step 2.2, L3]

7.1 Transpose the tableau and exchange the roles of the inputs and trails. The same row-after-column calculation becomes the column-after-row calculation. When $i<a$, transposition changes the inequality to the case of step 5.2 and exchanges $B,J$, giving again $i,s,a$ at the original $S,B,J$; when $i>a$, it changes to the case $i<a$ and gives again $a,i,s$. Both composites therefore agree when the common box is occupied. The predecessor or successor may be missing: the preceding local arguments explicitly use the input label at a missing predecessor and the append rule at an empty successor, so no boundary case was omitted. [step 5.1, step 6.1, step 5.2, L2]

7.2 Finally let $S=(\rho,\gamma)$ be the common empty box, and let $a,i$ be the final carried column and row labels, with the input labels used for one-box trails. The prefixes slide identically by step 2.2. If $i<a$, filling $S$ with $a$ and then row-inserting $i$ bumps $a$ at $S$. Its next box is $(\rho+1,\gamma)$: if $\gamma>1$, the last column predecessor $A$ is not immediately left of $S$, because the original row append requires every entry to its left to be smaller than $i<a$; hence $A$ is in row at least $\rho+1$, the next row has exactly $\gamma-1$ boxes, and its entries after the column slide are all smaller than $a$, as in step 6.1. If $\gamma=1$ that row is empty. Thus $i$ is placed at $S$ and $a$ directly below it. In the opposite order, row insertion first places $i$ at $S$; the final column insertion carries $a>i$ and appends it directly below $S$, with the same result. If $i>a$, transpose this argument: both composites place $a$ at $S$ and $i$ directly right of it. This also covers $T=\varnothing$, where $a=x$ and $i=y$. [step 2.2, step 6.1, L1, L2, L3, algebra]

8.1 The original trails are disjoint, share one occupied box, or share their empty box, by step 2.1. Steps 3.1, 7.1 and 7.2 prove equality of the composites in every case, with the same shape and every label specified. Hence $(x\to T)\leftarrow y=x\to(T\leftarrow y)$ for all the stated distinct letters. [step 2.1, step 3.1, step 7.1, step 7.2] ∎
