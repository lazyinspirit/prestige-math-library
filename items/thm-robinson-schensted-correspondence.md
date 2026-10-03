---
id: thm-robinson-schensted-correspondence
kind: theorem
title: The Robinson-Schensted correspondence
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-partition-young-diagram-and-conjugate-partition, def-removable-and-addable-nodes-of-a-partition, def-reverse-row-deletion, def-row-insertion-and-bumping-route, def-young-tableau-standard-tableau-and-shape, lem-largest-entry-of-a-standard-tableau-is-removable, lem-robinson-schensted-recording-tableau-is-standard, lem-row-bumping-route-monotonicity, lem-row-insertion-and-reverse-deletion-are-inverse]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David A. Craven, Groups, Geometries and Representation Theory (Spring Term 2013 lecture notes, 42 pp.)"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
      locator: "§1.5, printed pp. 11-13: row insertion and the bijection Theorem 1.14, whose proof gives reverse deletion on pp. 12-13; Corollary 1.15 is the sum-of-squares consequence."
    - title: "C. Schensted, Longest Increasing and Decreasing Subsequences, Canadian Journal of Mathematics 13 (1961), 179-191 (13 pp.)"
      url: "https://sites.math.washington.edu/~billey/classes/561.fall.2019/articles/schensted.1961.pdf"
      locator: "p. 180 and pp. 182-183: the insertion algorithm, the recording tableau and the recovery argument; read in the complete 13-page article."
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups (Oxford Hilary Term 2011 lecture notes, 40 PDF pp.)"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
      locator: "§8, printed pp. 29-30: insertion and deletion, inverse Theorem 8.7, and the bijection Theorem 8.9; read in the full text."
---

## Statement

For $n\ge0$ let $X_n$ be the set of words $(w_1,\dots,w_n)$ of pairwise
distinct real numbers with $\{w_1,\dots,w_n\}=\{1,2,\dots,n\}$ (the
permutations of $\{1,\dots,n\}$ written in one-line form). The
**Robinson-Schensted map** $w\mapsto(P(w),Q(w))$, where $P(w)$ is the iterated
row insertion of $w_1,\dots,w_n$
([[def-row-insertion-and-bumping-route]]) and $Q(w)$ the recording tableau of
[[lem-robinson-schensted-recording-tableau-is-standard]], is a bijection from
$X_n$ onto the set of pairs $(P,Q)$ of standard tableaux of the same shape
$\lambda\vdash n$. The inverse map sends a pair $(P,Q)$ to the word recovered
by iterated reverse deletion: for $k=n,n-1,\dots,1$, delete from the current
insertion tableau the box occupied by the label $k$ in the current recording
tableau (a removable node, by
[[lem-largest-entry-of-a-standard-tableau-is-removable]] and
[[lem-robinson-schensted-recording-tableau-is-standard]]), record the expelled
letter as $w_k$, and continue with the two shrunken tableaux.

## Facts & Assumptions

**Given:** An integer $n\ge0$, a word $w=(w_1,\dots,w_n)\in X_n$, the tableaux $P_k$ obtained by inserting $w_1,\dots,w_k$, the recording tableaux $Q_k$, and the iterated deletion procedure of the statement.

[F1] Each $P_k$ is an injective filling with strictly increasing rows and columns and entries $w_1,\dots,w_k$, hence is standard in the distinct-alphabet convention of the insertion packet; the box added at step $k$ makes the shape grow by one addable node ([[lem-row-bumping-route-monotonicity]], [[def-row-insertion-and-bumping-route]]).

[F2] Each $Q_k$ is a standard tableau with entries $1,\dots,k$ of the same shape as $P_k$ ([[lem-robinson-schensted-recording-tableau-is-standard]]).

[F3] In a standard tableau of size $k\ge1$ the box occupied by $k$ is removable, and deleting it leaves a standard tableau of size $k-1$ ([[lem-largest-entry-of-a-standard-tableau-is-removable]]).

[F4] For a standard tableau $U$ with distinct real entries and a removable box $b$, reverse deletion $(V,x):=U-b$ gives a standard tableau $V$ whose entries are those of $U$ with $x$ removed, and $V\leftarrow x=U$ with new box $b$. Conversely, if $U=T\leftarrow x$ with new box $b$, then $U-b=(T,x)$ ([[def-reverse-row-deletion]], [[lem-row-insertion-and-reverse-deletion-are-inverse]]).

[F5] A standard tableau of shape $\mu\vdash k$ has exactly $k$ boxes carrying the entries $1,\dots,k$ once each, and two tableaux of the same shape with the same entries in every box are equal ([[def-young-tableau-standard-tableau-and-shape]], [[def-partition-young-diagram-and-conjugate-partition]], [[def-removable-and-addable-nodes-of-a-partition]]).



## Proof

**Proof technique:** direct.

1.1 Each $P_k$ is standard on the alphabet $\{w_1,\dots,w_k\}$ by [F1], obtained by applying the insertion lemma once per letter. In particular $P_n$ has entries $1,\dots,n$ and is standard in the published convention. [F1, F5]

1.2 Each $Q_k$ is standard with entries $1,\dots,k$ and $\operatorname{shape}(Q_k)=\operatorname{shape}(P_k)$: this is [F2]. [F2]

1.3 In a standard tableau of size $k\ge1$ the box of the largest entry $k$ is removable: this is [F3]. [F3]

1.4 If $U$ is standard with distinct real entries and $b$ is a removable box, then reverse deletion gives $(V,x)=U-b$ with $V$ standard, its entries those of $U$ except $x$, and $V\leftarrow x=U$ with new box $b$: this is [F4]. [F4]

2.1 Reinsertion restores any pair: start with standard tableaux $(U_n,R_n)$ of a common shape with $n$ boxes. Recursively, let $b_k$ be the box of label $k$ in $R_k$, set $(U_{k-1},v_k):=U_k-b_k$, and remove $b_k$ from $R_k$ to obtain $R_{k-1}$. Step 1.3 makes $b_k$ removable in both shapes, and step 1.4 preserves increasing rows and columns of $U_{k-1}$ on its remaining alphabet; $R_{k-1}$ remains standard with entries $1,\dots,k-1$. Thus every deletion is defined. Each reinsertion $U_{k-1}\leftarrow v_k$ returns $U_k$ with new box $b_k$, so writing recording label $k$ returns $R_k$. Induction from the empty pair therefore gives the RSK pair of $(v_1,\dots,v_n)$ as $(U_n,R_n)$. [step 1.3, step 1.4, F2, F5]

3.1 Deletion recovers the original word: the procedure is well defined by step 2.1, and in $(P_k,Q_k)$ the box of label $k$ is precisely the new box of $P_k=P_{k-1}\leftarrow w_k$. The converse identity in [F4] therefore deletes this box to give $(P_{k-1},w_k)$; removing its recording label leaves $Q_{k-1}$. Induction for $k=n,n-1,\dots,1$ recovers all original letters. Hence, if $P(w)=P(w')$ and $Q(w)=Q(w')$, the deterministic deletion procedure recovers both words from the same pair, so $w=w'$. [step 2.1, F2, F4]

3.2 Surjectivity: let $(P,Q)$ be any pair of standard tableaux of a common shape $\lambda\vdash n$. Running the procedure of step 2.1 from $(P,Q)$ is well defined at every step by step 1.3, and produces a word $w=(w_1,\dots,w_n)$ whose letters are the entries of $P$, each expelled exactly once (the entries of $P_{k-1}$ are those of $P_k$ with $w_k$ deleted by step 1.4), hence precisely $1,\dots,n$; by the induction of step 2.1 the RSK pair of $w$ is $(P,Q)$. [step 1.3, step 1.4, step 2.1, F5]

4.1 The map $w\mapsto(P(w),Q(w))$ is therefore a bijection from $X_n$ onto the set of pairs of standard tableaux of the same shape $\lambda\vdash n$: steps 2.1 and 3.1 establish both inverse identities, and step 3.2 gives surjectivity onto the stated set. For $n=0$ both procedures have no steps and exchange the unique empty word and empty pair. [step 2.1, step 3.1, step 3.2, F5] ∎
