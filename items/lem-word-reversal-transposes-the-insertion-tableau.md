---
id: lem-word-reversal-transposes-the-insertion-tableau
kind: lemma
title: Reversing a word transposes its insertion tableau
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-column-insertion-for-distinct-letters, def-row-insertion-and-bumping-route, def-young-tableau-standard-tableau-and-shape, lem-row-and-column-insertion-commute, lem-row-bumping-route-monotonicity]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "C. Schensted, Longest Increasing and Decreasing Subsequences, Canadian Journal of Mathematics 13 (1961), 179-191 (13 pp.)"
      url: "https://sites.math.washington.edu/~billey/classes/561.fall.2019/articles/schensted.1961.pdf"
      locator: "pp. 186-188: Lemma 7, that the P-symbol of a sequence and of its reverse are transposes, with the inductive computation, and the note that it must not be assumed for Q-symbols; read in the complete 13-page article."
    - title: "Donald E. Knuth, Permutations, Matrices, and Generalized Young Tableaux, Pacific Journal of Mathematics 34 (1970), 709-727"
      url: "https://msp.org/pjm/1970/34-3/pjm-v34-n3-p09-s.pdf"
      locator: "§6, printed p. 724: P(v_n,...,v_1) is the transpose of the dual insertion tableau of (v_1,...,v_n); read in the full text as an independent statement check."
    - title: "David A. Craven, Groups, Geometries and Representation Theory (Spring Term 2013 lecture notes, 42 pp.)"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
      locator: "§1.5, printed p. 11: row insertion and the recording tableau, used for the convention that only the P-tableau is asserted here; read in the full text."
---

## Statement

Let $w=(w_1,\dots,w_n)$ be a word of pairwise distinct real numbers and let
$P(w_1,\dots,w_n)$ denote the row-insertion tableau built by inserting
$w_1,\dots,w_n$ in this order
([[def-row-insertion-and-bumping-route]]). Then
$$P(w_1,\dots,w_n)=P(w_n,\dots,w_1)^{\mathrm t},$$
i.e. reversing the word transposes the insertion tableau. Equivalently, the
first-letter column-insertion recursion
$P(x_1,\dots,x_n)=x_1\to P(x_2,\dots,x_n)$
([[def-column-insertion-for-distinct-letters]]) holds for every word of
distinct letters. There is no corresponding assertion for the recording
tableau (Schensted's note).

## Facts & Assumptions

**Given:** A word $(x_1,\dots,x_n)$ of pairwise distinct real numbers, the tableaux $P(x_1,\dots,x_k)$ obtained by inserting $x_1,\dots,x_k$ in this order, and the column insertion $\to$ of [[def-column-insertion-for-distinct-letters]].

[L1] $P(x_1,\dots,x_k)\leftarrow x_{k+1}=P(x_1,\dots,x_{k+1})$ for $k\ge1$, and $P(x_1)=[x_1]$ is the one-box tableau; the empty word inserts to $\varnothing$ ([[def-row-insertion-and-bumping-route]]).

[L2] $x\to T=(T^{\mathrm t}\leftarrow x)^{\mathrm t}$ for every standard tableau $T$ and letter $x\notin T$; equivalently $(x\to T)^{\mathrm t}=T^{\mathrm t}\leftarrow x$ ([[def-column-insertion-for-distinct-letters]]).

[L3] For standard tableaux $T$ with distinct real entries and letters $x\ne y$ not in $T$ one has $(x\to T)\leftarrow y=x\to(T\leftarrow y)$ ([[lem-row-and-column-insertion-commute]]).

[L4] Row-inserting a letter into a standard tableau with distinct entries gives a standard tableau whose entries are those of $T$ together with the letter, and transposition is an involution carrying standard tableaux of shape $\lambda$ to standard tableaux of shape $\lambda'$ ([[def-young-tableau-standard-tableau-and-shape]], [[lem-row-bumping-route-monotonicity]], [[def-column-insertion-for-distinct-letters]]).



[L5] For the finite distinct real alphabets here, an increasing tableau means an injective filling with strictly increasing rows and columns. Replacing its entries by their ranks gives a standard tableau in the published alphabet $1,\dots,m$ ([[def-young-tableau-standard-tableau-and-shape]]). Every insertion comparison is preserved by increasing relabelling; this is the real-alphabet convention used in the statement and insertion suppliers.

## Proof

**Proof technique:** direct.

1.1 A finite real alphabet has a unique increasing enumeration. Its rank map preserves and reflects all inequalities, so the first-greater position, each carried label, and the final shape are unchanged under relabelling, by induction over the finite procedure; compressing the entry ranks gives the published standard tableau. Thus strict-row/strict-column arguments apply to the original real labels as well. (Base case and first-letter recursion.) $P(x_1)=[x_1]=x_1\to\varnothing$: by [L2] with $T=\varnothing$ one has $x_1\to\varnothing=(\varnothing^{\mathrm t}\leftarrow x_1)^{\mathrm t}$, the insertion appends $x_1$ as the only box, and a one-box tableau equals its transpose; hence for $n=1$ the recursion holds. [L1, L2, L5]

1.2 (First-letter recursion, inductive step.) Let $n\ge2$ and assume the recursion for words of length $n-1$. Then $P(x_1,\dots,x_n)=P(x_1,\dots,x_{n-1})\leftarrow x_n=(x_1\to P(x_2,\dots,x_{n-1}))\leftarrow x_n=x_1\to(P(x_2,\dots,x_{n-1})\leftarrow x_n)=x_1\to P(x_2,\dots,x_n)$: the first and last equalities are [L1], the second is the induction hypothesis, and the third is [L3] applied to the standard tableau $T=P(x_2,\dots,x_{n-1})$ with $x=x_1$, $y=x_n$, legitimate because the letters are pairwise distinct, so $x_1\notin T$ and $x_1\ne x_n$. [L1, L3, L4, ih]

1.3 (Reversal, base cases.) For $n=0$ both sides are $\varnothing$ and $\varnothing^{\mathrm t}=\varnothing$; for $n=1$ the one-box tableau equals its transpose. [L1, L4]

2.1 (First-letter recursion, conclusion.) By steps 1.1 and 1.2 the recursion $P(x_1,\dots,x_n)=x_1\to P(x_2,\dots,x_n)$ holds for every $n\ge1$ and every word of distinct letters. [step 1.1, step 1.2, discharge-induction]

3.1 (Reversal, inductive step.) Let $n\ge2$ and assume $P(x_1,\dots,x_k)=P(x_k,\dots,x_1)^{\mathrm t}$ for all $k<n$. Then $P(x_n,\dots,x_1)^{\mathrm t}=(x_n\to P(x_{n-1},\dots,x_1))^{\mathrm t}=P(x_{n-1},\dots,x_1)^{\mathrm t}\leftarrow x_n=P(x_1,\dots,x_{n-1})\leftarrow x_n=P(x_1,\dots,x_n)$: the first equality is the first-letter recursion of step 2.1 applied to the reversed word, the second is the definitional identity [L2], the third is the induction hypothesis, and the fourth is [L1]. [step 2.1, step 1.3, L1, L2, ih]

4.1 (Conclusion.) By steps 1.3 and 3.1, $P(x_1,\dots,x_n)=P(x_n,\dots,x_1)^{\mathrm t}$ for every word of pairwise distinct real numbers; conversely the transpose relation for all words implies the first-letter recursion by reading the computation of step 3.1 backwards after replacing $(x_1,\dots,x_n)$ by the reversed word, so the two displayed forms are equivalent. [step 3.1, L2, discharge-induction]

5.1 (Recording tableau.) The statement makes no assertion about the recording tableau, and indeed the transpose relation is special to the insertion tableau: the recording tableau records the order in which boxes are added, and this order is not reversed by reversing the word (Schensted's note; see the example after Lemma 7). Nothing beyond the insertion tableau is claimed or used. [given] ∎
