---
id: cor-involutions-are-counted-by-standard-tableaux
kind: corollary
title: Involutions are counted by standard tableaux
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [cor-rsk-symmetry-under-inversion, def-finite-symmetric-group-and-permutation-notation, def-young-tableau-standard-tableau-and-shape, thm-robinson-schensted-correspondence]
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
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups (Oxford Hilary Term 2011 lecture notes, 40 PDF pp.)"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
      locator: "§8, printed p. 29: Remark 8.3, the correspondence between P=Q and permutations with sigma^2=1 and the bound by sum_lambda f^lambda; read in the full text."
    - title: "Donald E. Knuth, Permutations, Matrices, and Generalized Young Tableaux, Pacific Journal of Mathematics 34 (1970), 709-727"
      url: "https://msp.org/pjm/1970/34-3/pjm-v34-n3-p09-s.pdf"
      locator: "§4, printed pp. 719-720: the symmetric-matrix specialization establishing the same P=Q principle for involutions; read in the complete article as the neighbouring result."
    - title: "Jeremy L. Martin, Lecture Notes on Algebraic Combinatorics (263 pp.)"
      url: "https://jeremymartinmath.github.io/CombinatoricsNotes.pdf"
      locator: "§9.10, Proposition 9.10.9: the involution count i_n = sum_lambda f^lambda (statement); read in the full 263-page notes as an independent statement check."
---

## Statement

Let $w$ be a permutation of $\{1,\dots,n\}$ with RSK pair $(P,Q)$. Then
$w=w^{-1}$ if and only if $P=Q$. Consequently the map $w\mapsto P(w)$
restricts to a bijection from the set of involutions of $\{1,\dots,n\}$ onto
the set of standard tableaux with $n$ boxes, and the number of involutions of
$\{1,\dots,n\}$ (equivalently, of $S_n$) equals
$$\sum_{\lambda\vdash n}f^\lambda .$$

## Facts & Assumptions

**Given:** An integer $n\ge0$, a word $w=(w_1,\dots,w_n)$ of pairwise distinct real numbers with $\{w_1,\dots,w_n\}=\{1,\dots,n\}$, its RSK pair $(P(w),Q(w))$, and the inverse word $w^{-1}=(p_1,\dots,p_n)$ with $w_{p_i}=i$.

[L1] The Robinson-Schensted map $w\mapsto(P(w),Q(w))$ is a bijection from $X_n$ onto the set of pairs of standard tableaux of a common shape $\lambda\vdash n$; in particular it is injective ([[thm-robinson-schensted-correspondence]]).

[L2] $P(w^{-1})=Q(w)$ and $Q(w^{-1})=P(w)$ ([[cor-rsk-symmetry-under-inversion]]).

[L3] Identifying $\sigma\in S_n$ with the word $w=(\sigma(0)+1,\dots,\sigma(n-1)+1)$, the word of $\sigma^{-1}$ is $w^{-1}$; thus $w=w^{-1}$ if and only if $\sigma=\sigma^{-1}$, and the involutions of $\{1,\dots,n\}$ are the words fixed by inversion ([[def-finite-symmetric-group-and-permutation-notation]], [[cor-rsk-symmetry-under-inversion]]).

[L4] A standard tableau with $n$ boxes has shape $\lambda\vdash n$, and for each $\lambda\vdash n$ there are $f^\lambda$ such tableaux; the shapes are distinct, so the total number is $\sum_{\lambda\vdash n}f^\lambda$ ([[def-young-tableau-standard-tableau-and-shape]]).



## Proof

**Proof technique:** direct.

1.1 If $w=w^{-1}$ then $(P(w),Q(w))=(P(w^{-1}),Q(w^{-1}))=(Q(w),P(w))$ by [L2], so $P(w)=Q(w)$. [L2, given]

1.2 Conversely, if $P(w)=Q(w)$ then $P(w^{-1})=Q(w)=P(w)$ and $Q(w^{-1})=P(w)=Q(w)$ by [L2], so $(P(w^{-1}),Q(w^{-1}))=(P(w),Q(w))$; injectivity of the Robinson-Schensted map [L1] gives $w^{-1}=w$. [L2, L1, given]

2.1 (Injectivity on involutions.) If $w,w'$ are fixed by inversion and $P(w)=P(w')$, then by step 1.1 and step 1.2 $Q(w)=P(w)=P(w')=Q(w')$, so the RSK pairs coincide and [L1] gives $w=w'$. [step 1.1, step 1.2, L1]

2.2 (Surjectivity onto standard tableaux.) Let $P$ be a standard tableau with $n$ boxes, of shape $\lambda\vdash n$; the pair $(P,P)$ is a pair of standard tableaux of common shape, so by surjectivity of the Robinson-Schensted map [L1] there is a word $w\in X_n$ with $(P(w),Q(w))=(P,P)$; by step 1.2 $w$ is fixed by inversion, and $P(w)=P$. [L1, step 1.2, L4]

3.1 (The count.) By steps 2.1 and 2.2 the map $w\mapsto P(w)$ is a bijection from the involutions onto the standard tableaux with $n$ boxes; by [L4] the latter set has $\sum_{\lambda\vdash n}f^\lambda$ elements, and by [L3] the involutions of $\{1,\dots,n\}$ are the involutions of $S_n$. [step 2.1, step 2.2, L3, L4]

4.1 At $n=0$ the empty word is the unique element of $X_0$ and equals its inverse, the only standard tableau with no boxes is the empty tableau, $f^\varnothing=1$, and both sides of the count are $1$, consistent with steps 1.1 and 1.2. [L1, L4, given] ∎
