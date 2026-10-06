---
id: lem-robinson-schensted-recording-tableau-is-standard
kind: lemma
title: The recording tableau is standard
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-partition-young-diagram-and-conjugate-partition, def-removable-and-addable-nodes-of-a-partition, def-row-insertion-and-bumping-route, def-young-tableau-standard-tableau-and-shape, lem-row-bumping-route-monotonicity]
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-9.md"
      - "research/frontier-38-owner-30-alpha-batch-9-5a.md"
      - "research/frontier-38-owner-30-step5-hash-9-post-5a.json"
    content_sha256: "90f1f6f9993731d1f0b9a038078b9a77ce1b0a097852f4e483742fc9a7cd832c"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "C. Schensted, Longest Increasing and Decreasing Subsequences, Canadian Journal of Mathematics 13 (1961), 179-191 (13 pp.)"
      url: "https://sites.math.washington.edu/~billey/classes/561.fall.2019/articles/schensted.1961.pdf"
      locator: "p. 182: Lemma 2, the recording tableau Q_n is standard; read in the complete 13-page article."
    - title: "Donald E. Knuth, Permutations, Matrices, and Generalized Young Tableaux, Pacific Journal of Mathematics 34 (1970), 709-727"
      url: "https://msp.org/pjm/1970/34-3/pjm-v34-n3-p09-s.pdf"
      locator: "§3, printed p. 715: construction A2 places u_k in the new box and the argument that Q is a generalized Young tableau; read in the full text."
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups (Oxford Hilary Term 2011 lecture notes, 40 PDF pp.)"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
      locator: "§8, printed p. 29: the insertion algorithm with the recording tableau; read in the full text."
---

## Statement

Let $w=(w_1,\dots,w_N)$ be a word of pairwise distinct real numbers and define
$P_0:=\varnothing$ and $P_k:=P_{k-1}\leftarrow w_k$ for $1\le k\le N$
([[def-row-insertion-and-bumping-route]]). Let $Q_k$ be the filling of
$[\operatorname{shape}(P_k)]$ that carries the label $k$ in the box added at
step $k$ and the label $j$ in the box added at step $j$ for $j<k$; the boxes
added at the successive steps are distinct addable nodes by
[[lem-row-bumping-route-monotonicity]]. Then every $Q_k$ is a standard tableau
with entries $1,\dots,k$ of the same shape as $P_k$; in particular $Q_N$ is a
standard tableau of size $N$.

## Facts & Assumptions

**Given:** A word $w=(w_1,\dots,w_N)$ of pairwise distinct real numbers and the tableaux $P_0,\dots,P_N$, with the box $b_k$ added at step $k$ and the fillings $Q_k$.

[L1] $P_k$ is standard and $b_k$ is an addable node of $[\operatorname{shape}(P_{k-1})]$; consequently $[\operatorname{shape}(P_k)]=[\operatorname{shape}(P_{k-1})]\cup\{b_k\}$, the node $b_k$ is the end of its row and of its column of $[\operatorname{shape}(P_k)]$, and the shape grows by exactly one box at each step ([[lem-row-bumping-route-monotonicity]]).

[L2] A standard tableau is a bijection from its diagram to an initial segment $\{1,\dots,m\}$ with strictly increasing rows and columns ([[def-young-tableau-standard-tableau-and-shape]]).

[L3] A node $(i,\lambda_i+1)$ addable for $\lambda$ satisfies $i=1$ or $\lambda_{i-1}>\lambda_i$, so after insertion it has no box to its right and, by weak decrease of the rows, no box below it ([[def-removable-and-addable-nodes-of-a-partition]], [[def-partition-young-diagram-and-conjugate-partition]]).

## Proof

**Proof technique:** induction.

1.1 Base: $Q_0$ is the empty filling of the empty shape, which is standard with entry set $\varnothing$, and $\operatorname{shape}(Q_0)=\operatorname{shape}(P_0)$. [base, L2, given]

1.2 Induction hypothesis: suppose $Q_{k-1}$ is a standard tableau with entries $1,\dots,k-1$ of shape $\operatorname{shape}(P_{k-1})$. [ih, given]

2.1 The box $b_k$ is the end of its row and of its column in $[\operatorname{shape}(P_k)]$ by [L1], so in $Q_k$ the new label $k$ has no right and no lower neighbour; its left neighbour and its upper neighbour, if present, carry labels $<k$, and every comparison not involving $b_k$ is one already present in $Q_{k-1}$. Hence, with $k$ the largest label, rows and columns of $Q_k$ are strictly increasing. [step 1.2, L1, L3]

3.1 The filling $Q_k$ is a bijection from $[\operatorname{shape}(P_k)]$ onto $\{1,\dots,k\}$: $Q_{k-1}$ is a bijection onto $\{1,\dots,k-1\}$ by the induction hypothesis, the shapes differ by the single node $b_k$, and $Q_k$ agrees with $Q_{k-1}$ off $b_k$ and carries label $k$ on it. [step 1.2, step 2.1, L1]

4.1 By steps 2.1 and 3.1 and the induction hypothesis, $Q_k$ is a standard tableau with entries $1,\dots,k$ of shape $\operatorname{shape}(P_k)$, for every $k\le N$, and induction over $k=0,\dots,N$ proves the assertion; in particular $Q_N$ is standard of size $N$. [step 1.1, step 1.2, step 2.1, step 3.1, discharge-induction] ∎
