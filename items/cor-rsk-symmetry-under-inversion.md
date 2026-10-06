---
id: cor-rsk-symmetry-under-inversion
kind: corollary
title: RSK interchanges the insertion and recording tableaux under inversion
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-finite-symmetric-group-and-permutation-notation, def-young-tableau-standard-tableau-and-shape, thm-robinson-schensted-correspondence, thm-rsk-correspondence-for-two-line-arrays]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Historical full item proof read and accepted exact subsequent delta; item cor-rsk-symmetry-under-inversion; evidence research/frontier-38-owner-30-reader-9.md, research/frontier-38-owner-30-impact.json, research/frontier-38-owner-30-batch-9.proof-contracts.json. Original source/coverage limitations retained; no recursive audit of all prerequisites or full bibliography claimed. Restored from completed 2026-10-03 evidence; no new audit or independent audit of local repair claimed."
    delegated_by: "tools/autopilot frontier-38-owner-30 historical dispatched reader/repair lane"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Donald E. Knuth, Permutations, Matrices, and Generalized Young Tableaux, Pacific Journal of Mathematics 34 (1970), 709-727"
      url: "https://msp.org/pjm/1970/34-3/pjm-v34-n3-p09-s.pdf"
      locator: "§4, printed p. 719: Theorem 3, that the transposed matrix corresponds to (Q,P), with the digraph proof; specialized here to permutation matrices; read in the complete article."
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups (Oxford Hilary Term 2011 lecture notes, 40 PDF pp.)"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
      locator: "§8, printed p. 29: Remark 8.3, 'for sigma in S_n and ins(sigma)=(P,Q) one has ins(sigma^{-1})=(Q,P)', attributed there to Sagan Theorem 3.6.6; read in the full text as an independent statement check."
    - title: "Jeremy L. Martin, Lecture Notes on Algebraic Combinatorics (263 pp.)"
      url: "https://jeremymartinmath.github.io/CombinatoricsNotes.pdf"
      locator: "§9.10, Proposition 9.10.9, RSK(w^{-1})=(Q,P) (statement only); read in the full 263-page notes as an independent statement check."
---

## Statement

Let $n\ge0$ and let $w=(w_1,\dots,w_n)$ be a permutation of $\{1,\dots,n\}$
with RSK pair $(P(w),Q(w))$
([[thm-robinson-schensted-correspondence]]). Let $w^{-1}=(p_1,\dots,p_n)$ be
the inverse permutation, where $p_i$ is the position of $i$ in $w$ (so
$w_{p_i}=i$). Then
$$P(w^{-1})=Q(w)\quad\text{and}\quad Q(w^{-1})=P(w).$$
In particular, identifying $\sigma\in S_n$ with the word
$(\sigma(0)+1,\dots,\sigma(n-1)+1)$ via
[[def-finite-symmetric-group-and-permutation-notation]], the RSK pair of
$\sigma^{-1}$ is $(Q,P)$.

## Facts & Assumptions

**Given:** An integer $n\ge0$, a word $w=(w_1,\dots,w_n)$ of pairwise distinct real numbers with $\{w_1,\dots,w_n\}=\{1,\dots,n\}$, its RSK pair $(P(w),Q(w))$, and the inverse word $w^{-1}=(p_1,\dots,p_n)$ with $w_{p_i}=i$.

[L1] The Robinson-Schensted map is a bijection from the set $X_n$ of such words onto the set of pairs $(P,Q)$ of standard tableaux of a common shape $\lambda\vdash n$; equivalently, two words with the same RSK pair are equal, and every such pair occurs ([[thm-robinson-schensted-correspondence]]).

[L2] For a lexicographically ordered two-line array $(u;v)$: (a) construction A (insert $v_k$, write the label $u_k$ in the new box) produces a pair of semistandard tableaux of common shape, and the correspondence with lexicographically ordered arrays is a bijection; (b) the lexicographically ordered rearrangement of the transposed array $(v;u)$ corresponds to $(Q,P)$; (c) if $u_k=k$ for all $k$ then construction A is exactly the row-insertion construction of [[thm-robinson-schensted-correspondence]] and produces its RSK pair ([[thm-rsk-correspondence-for-two-line-arrays]]).

[L3] A two-line array is a pair of finite lists of positive integers whose columns are in nondecreasing lexicographic order; the top line $u$ is strictly increasing exactly when its entries are distinct and increasing ([[thm-rsk-correspondence-for-two-line-arrays]]).

[L4] $S_n$ acts on $\{0,1,\dots,n-1\}$, one-line notation and cycles are as in [[def-finite-symmetric-group-and-permutation-notation]]; a standard tableau is a filling of a Young diagram by distinct integers increasing along rows and columns ([[def-young-tableau-standard-tableau-and-shape]]).



## Proof

**Proof technique:** direct.

1.1 The two-line array $A:=((1,2,\dots,n);(w_1,\dots,w_n))$ is lexicographically ordered, because its top line is strictly increasing; its top line has distinct entries and its columns are the pairs $(k,w_k)$ for $k=1,\dots,n$. [L3, given]

1.2 Construction A applied to $A$ inserts $v_k=w_k$ at step $k$ and writes $u_k=k$ in the box added at step $k$; by [L2](c) the resulting pair is the RSK pair of the word $(w_1,\dots,w_n)$, namely $(P(w),Q(w))$. [L2, L1, given]

1.3 The transposed array of $A$ is $((w_1,\dots,w_n);(1,2,\dots,n))$, whose columns are the pairs $(w_k,k)$; since $w$ is a permutation of $\{1,\dots,n\}$, each value $i$ occurs exactly once among the first coordinates, at the index $k=p_i$ with $w_{p_i}=i$, so the lexicographically ordered rearrangement of these columns is the array $A^{-1}:=((1,2,\dots,n);(p_1,\dots,p_n))$. [L3, given, algebra]

1.4 For the group-theoretic form, let $\sigma\in S_n$ have one-line form $[\sigma(0),\dots,\sigma(n-1)]$ and let $w=(\sigma(0)+1,\dots,\sigma(n-1)+1)$ be the associated word; then for each $i\in\{1,\dots,n\}$ the position $p_i$ of $i$ in $w$ satisfies $p_i=\sigma^{-1}(i-1)+1$, because $w_{\sigma^{-1}(i-1)+1}=\sigma(\sigma^{-1}(i-1))+1=i$; hence the word associated with $\sigma^{-1}$ is exactly $w^{-1}=(p_1,\dots,p_n)$. [L4, given, algebra]

2.1 By [L2](b) the array $A^{-1}$ corresponds under construction A to $(Q(w),P(w))$: it is the lexicographically ordered rearrangement of the transpose of the array $A$ of step 1.2, whose pair is $(P(w),Q(w))$. [L2, step 1.2, step 1.3]

2.2 Construction A applied to $A^{-1}$ inserts $p_1,\dots,p_n$ and writes the labels $1,\dots,n$, so by [L2](c) it produces the RSK pair $(P(w^{-1}),Q(w^{-1}))$ of the word $w^{-1}=(p_1,\dots,p_n)$. [L2, L1, given, step 1.3]

3.1 By [L2](a) the correspondence between lexicographically ordered two-line arrays and pairs is bijective, and the array $A^{-1}$ corresponds to exactly one pair; by steps 2.1 and 2.2 this pair is both $(Q(w),P(w))$ and $(P(w^{-1}),Q(w^{-1}))$, so $P(w^{-1})=Q(w)$ and $Q(w^{-1})=P(w)$. [L2, step 2.1, step 2.2]

4.1 Applying step 3.1 to the permutation $\sigma$ identified with $w$ gives $\bigl(P(\sigma^{-1}),Q(\sigma^{-1})\bigr)=(Q(\sigma),P(\sigma))$, which is the stated group-theoretic form. [step 3.1, step 1.4] ∎
