---
id: ex-rsk-insertion-and-reverse-deletion
kind: example
title: A complete RSK insertion and reverse deletion run
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-reverse-row-deletion, def-row-insertion-and-bumping-route, lem-robinson-schensted-recording-tableau-is-standard, lem-row-insertion-and-reverse-deletion-are-inverse, thm-robinson-schensted-correspondence]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David A. Craven, Groups, Geometries and Representation Theory (Spring Term 2013 lecture notes, 42 pp.)"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
      locator: "§1.5, printed p. 12 (PDF p. 14): the displayed insertion example for sigma=(1,6,3)(2,4) with P_1,...,P_6 and Q_1,...,Q_6."
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups (Oxford Hilary Term 2011 lecture notes, 40 PDF pp.)"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
      locator: "§8, printed p. 29: the deletion Algorithm 8.4 and Example 8.5; read in the full text."
    - title: "Jeremy L. Martin, Lecture Notes on Algebraic Combinatorics (263 pp.)"
      url: "https://jeremymartinmath.github.io/CombinatoricsNotes.pdf"
      locator: "§9.10, Example 9.10.2: the worked RSK run for w = 57214836; read in the full 263-page notes as a second worked example check."
---

## Example

Let $\sigma$ be the permutation of $\{1,\dots,6\}$ with
$\sigma=(1\,6\,3)(2\,4)$, so its one-line form is the word
$w=(6,4,1,2,5,3)$. Running row insertion gives
$$P_1=\begin{array}{l}6\end{array},\ P_2=\begin{array}{l}4\\6\end{array},\ P_3=\begin{array}{l}1\\4\\6\end{array},\ P_4=\begin{array}{ll}1&2\\4&\\6&\end{array},\ P_5=\begin{array}{lll}1&2&5\\4&&\\6&&\end{array},\ P_6=\begin{array}{lll}1&2&3\\4&5&\\6&&\end{array}$$
and the recording tableaux
$$Q_1=\begin{array}{l}1\end{array},\ Q_2=\begin{array}{l}1\\2\end{array},\ Q_3=\begin{array}{l}1\\2\\3\end{array},\ Q_4=\begin{array}{ll}1&4\\2&\\3&\end{array},\ Q_5=\begin{array}{lll}1&4&5\\2&&\\3&&\end{array},\ Q_6=\begin{array}{lll}1&4&5\\2&6&\\3&&\end{array}.$$
Reverse deletion from $(P_6,Q_6)$ in the order of the labels
$6,5,4,3,2,1$ removes the boxes $(2,2),(1,3),(1,2),(3,1),(2,1),(1,1)$ and
expels the letters $3,5,2,1,4,6$, which is $w$ read backwards, restoring
$(\varnothing,\varnothing)$.

## Facts & Assumptions

**Given:** The word $w=(6,4,1,2,5,3)$ of pairwise distinct reals, the tableaux $P_k$ obtained by inserting $w_1,\dots,w_k$ by row insertion, and the recording tableaux $Q_k$ carrying the label $k$ in the box added at step $k$.

[L1] Row insertion at each step places the carried letter in the first row by appending it at the end when it is larger than every entry, and otherwise replacing the leftmost entry exceeding it and passing that entry to the next row, until an append occurs; the new box is the appended box ([[def-row-insertion-and-bumping-route]]).

[L2] $Q_k$ is standard of the same shape as $P_k$, with entries $1,\dots,k$ ([[lem-robinson-schensted-recording-tableau-is-standard]]).

[L3] For a standard tableau $U$ and a removable box $b=(s,t)$, reverse deletion $(V,x):=U-b$ satisfies $V\leftarrow x=U$ with new box $b$; conversely, deleting the new box of $T\leftarrow y$ returns $(T,y)$. Deletion visits rows $s,s-1,\dots,1$, moving upwards from $b$, taking at each row the largest entry smaller than the carried letter ([[def-reverse-row-deletion]], [[lem-row-insertion-and-reverse-deletion-are-inverse]]).

[L4] The RSK pair of $w$ is $(P_6,Q_6)$ and the deletion procedure of the correspondence recovers $w$ backwards ([[thm-robinson-schensted-correspondence]]).



## Verification

**Proof technique:** direct.

1.1 (Insertion steps.) Inserting $6$ into the empty tableau gives $P_1=[6]$. Inserting $4$ replaces $6$ in row $1$ and appends the displaced $6$ in the empty row $2$, giving $P_2$. Inserting $1$ replaces $4$ in row $1$, carries $4$ into row $2$ where it replaces $6$, and appends that displaced $6$ in the empty row $3$, giving $P_3$. These are the displayed columns. [L1, given]

2.1 (Steps $4$ and $5$.) Inserting $2$ into $P_3$, whose first row is $[1]$ and second row $[4]$, appends $2$ at the end of the first row, giving $P_4$; inserting $5$ into $P_4$ appends it at the end of the first row as $5>2$, giving $P_5$; the new boxes are $(1,2)$ at step $4$ and $(1,3)$ at step $5$. [L1, step 1.1, algebra]

3.1 (Step $6$.) Inserting $3$ into $P_5$, whose first row is $[1,2,5]$ and second row $[4]$: the leftmost entry exceeding $3$ is $5$ at position $3$, so $3$ replaces it and $5$ is carried to the second row, where it is larger than $4$ and is appended; hence $P_6=\begin{array}{lll}1&2&3\\4&5&\\6&&\end{array}$, with new box $(2,2)$. [L1, step 2.1, algebra]

4.1 (Recording tableaux.) At each step $k$ the label $k$ is written in the new box of that step, which is $(1,1),(2,1),(3,1),(1,2),(1,3),(2,2)$ for $k=1,\dots,6$; these boxes are exactly those filled in the displayed $Q_1,\dots,Q_6$, and by [L2] each $Q_k$ is standard of the shape of $P_k$. [L2, step 1.1, step 2.1, step 3.1]

5.1 (First deletion.) The box of the label $6$ in $Q_6$ is $(2,2)$, the bottom-right corner; reverse deletion starts there with the carried letter $+\infty$, takes in row $2$ the entry $5$ (the largest entry smaller than $+\infty$), empties $(2,2)$ and carries $5$; in row $1$ the largest entry smaller than $5$ is $3$ at position $3$, which is overwritten by $5$ and expelled. The result is $P_5$, and the expelled letter $3$ is $w_6$. [L3, L4, step 3.1, step 4.1]

6.1 (Remaining deletions.) Repeating step 5.1 for the labels $5,4,3,2,1$: deleting the box $(1,3)$ of label $5$ expels $5$ and restores $P_4$; deleting the box $(1,2)$ of label $4$ expels $2$ and restores $P_3$; deleting the box $(3,1)$ of label $3$ expels $1$ and restores $P_2$; deleting the box $(2,1)$ of label $2$ expels $4$ and restores $P_1$; deleting the box $(1,1)$ of label $1$ expels $6$ and leaves $\varnothing$. Each deletion reverses the corresponding insertion by [L3], and the recorded labels are the boxes listed in the statement. [L3, L4, step 5.1, given]

7.1 (Conclusion.) The expelled letters in the order $3,5,2,1,4,6$ are $w_6,w_5,w_4,w_3,w_2,w_1$, i.e. $w$ read backwards; both tableaux are restored to the empty tableau, so the run illustrates the inverse procedure of the Robinson-Schensted correspondence. [L4, step 5.1, step 6.1] ∎
