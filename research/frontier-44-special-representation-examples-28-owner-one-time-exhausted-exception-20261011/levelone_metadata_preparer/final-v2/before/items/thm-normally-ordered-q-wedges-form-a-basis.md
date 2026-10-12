---
id: thm-normally-ordered-q-wedges-form-a-basis
kind: theorem
title: "Normally ordered q-wedges form a basis for every finite wedge length"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 8
deps: [def-finite-q-wedge-space-and-normal-ordering-relations,
       lem-the-q-antisymmetrizer-determines-the-finite-q-wedge-kernel,
       lem-the-q-wedge-relations-coincide-with-the-type-a-energy-braiding-kernel,
       lem-the-level-one-vector-representation-has-a-perfect-crystal-with-lower-global-basis]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Kashiwara-Miwa-Petersen-Yung, Perfect crystals and q-deformed Fock spaces"
      url: "https://arxiv.org/pdf/q-alg/9603025"
      locator: "sec. 3.3, printed pp. 14-21: Prop. 3.3.9 (straightening), Theorem 3.3.12 (independence), Cor. 3.3.13 and Prop. 3.3.14 (crystal base of the finite wedge space)."
    - title: "Bernard Leclerc, Fock space representations (author-hosted complete 38-page treatment)"
      url: "https://leclercb.users.lmno.cnrs.fr/lectnotes_final.pdf"
      locator: "sec. 3.7, printed pp. 21-22: Prop. 9 (ordered wedges form a basis) with its $q\\to1$ specialisation argument, and Props. 10-11 (bar and unitriangularity)."
    - title: "Masaki Kashiwara, Tetsuji Miwa and Eugene Stern, Decomposition of q-deformed Fock spaces, arXiv:q-alg/9508006"
      url: "https://arxiv.org/pdf/q-alg/9508006"
      locator: "sec. 1.3, printed pp. 5-8: Props. 1.1-1.3 on the normally ordered wedge basis."
---

## Statement

For every $N\ge1$ the normally ordered wedges
$\{u_{m_1}\wedge\cdots\wedge u_{m_N}:m_1>m_2>\cdots>m_N\}$ of
[[def-finite-q-wedge-space-and-normal-ordering-relations]] form a
$\mathbb Q(q)$-basis of $W_N$ and an $A=\mathbb Z[q,q^{-1}]$-basis of the
Laurent lattice $W_A$. The straightening algorithm terminates with a
well-founded profile: the total index sum and the ambient index interval are
preserved, secondary pairs become strictly more balanced in the sorted
dominance profile, and a leading adjacent swap decreases the inversion count;
in particular no bound by the initial inversion count alone is used. The
$A_0$-chart $W_0$ spanned by the normal wedges with $\mathbb Z[q]$ coefficients
is a crystal basis: for each color $i$, on the occupied set of a normal tuple
the disjoint pairs $(u_{i+ke},u_{i+ke+1})$ behave as two-vertex highest-weight
$1$ strings, empty and doubly occupied pairs are frozen, and a shift of an
index by one either stays ordered or collides to zero; hence the residues of
the ordered wedges are stable under the normalized string operators and give a
crystal of the integrable affine wedge module. The image of the full
$\mathbb Z[q]$-tensor lattice need not equal $W_0$, and negative powers of $q$
in the straightening are not asserted to be triangular at $q=0$.

## Facts & Assumptions

**Given:** The finite q-wedge space $W_N$ with its normal-ordering relations and the normally ordered wedges; the lattices $W_A$ and $W_0$.

[F1] The straightening recursion terminates, keeps every index inside its original finite interval, and has Laurent coefficients in $\mathbb Z[q,q^{-1}]$ ([[def-finite-q-wedge-space-and-normal-ordering-relations]]).

[F2] $A_N^2=C_NA_N$ with $C_N=\prod_{r=1}^N(1+Q+\cdots+Q^{r-1})\ne0$, $\ker A_N=\sum_i\ker(S_i+1)$, and $V_{\mathrm{aff}}^{\otimes N}=\ker A_N\oplus\operatorname{im}A_N$ with $W_N\cong\operatorname{im}A_N$ ([[lem-the-q-antisymmetrizer-determines-the-finite-q-wedge-kernel]]).

[F3] At $q=1$, $S_i$ becomes the transposition of the two factors and $A_N$ becomes the ordinary antisymmetrizer $\sum_{w\in S_N}w$; the ordinary antisymmetrizations of tensors with distinct index multisets are linearly independent ([[lem-the-q-antisymmetrizer-determines-the-finite-q-wedge-kernel]]).

[F4] The operator $S_i=-1$ on $W_N$ acts on the two slots $i,i+1$; on the finite crystal the $i$-string through a residue is a two-vertex string with coefficients $1$, and $E_i^{(2)}=F_i^{(2)}=0$ ([[lem-the-level-one-vector-representation-has-a-perfect-crystal-with-lower-global-basis]]).

[F5] On two factors the normal-ordering relations hold as equivalences in $W_N$ and can be iterated with all indices staying between the extremes ([[lem-the-q-wedge-relations-coincide-with-the-type-a-energy-braiding-kernel]], [[def-finite-q-wedge-space-and-normal-ordering-relations]]).



## Proof

**Proof technique:** straighten by a well-founded measure for spanning, specialise to $q=1$ for independence, then read the crystal structure off the disjoint two-vertex strings.

1.1 The normally ordered wedges span $W_N$ over $\mathbb Q(q)$ and $W_A$ over $A$. By [F1] (and [F5] for the loop form) every wedge is a finite $A$-linear combination of normally ordered wedges, and every rewriting step preserves the total index sum and keeps each index between the original minimum and maximum; hence the normal wedges with indices in a fixed finite interval and fixed sum span the corresponding finite-piece quotient. Taking the union over the finitely many indices occurring in the given element gives a finite spanning expression. [F1, F5, given, algebra]

2.1 The profile terminates. Order the index tuples by the following well-founded data: first the multiset of indices (fixed under every relation), then the dominance order of the sorted tuple (each secondary relation replaces a pair by the more balanced pair $(l+ae,m-ae)$ and its reverse, which strictly increases the lexicographic order of sorted prefix sums as in the classical straightening), and among tuples with equal sorted profile the inversion count (a leading adjacent swap decreases it). Since a strictly decreasing sequence of natural numbers terminates and the sorted multiset can only take finitely many values with fixed sum and interval, the algorithm stops; no bound by the initial inversion count is used, as the mixed cases redistribute the indices. [step 1.1, F1, algebra]

2.2 Field independence. Let $I_1,\dots,I_r$ be finitely many distinct strictly decreasing index tuples and suppose $\sum_kc_ku_{I_k}=0$ in $W_N$ with $c_k\in\mathbb Q(q)$; then $x:=\sum_kc_kt_{I_k}\in\ker A_N$, where $t_{I_k}$ is the raw tensor of $I_k$. Applying $A_N$ gives $\sum_kc_kA_Nt_{I_k}=0$. Specialise the coefficients of the matrix $(A_Nt_{I_k})_k$ at $q=1$: by [F3] $A_N$ becomes the ordinary antisymmetrizer, and $A_Nt_{I_k}$ becomes (a nonzero scalar multiple of) the ordinary antisymmetrisation of the tensor with index multiset $I_k$; these vectors are linearly independent for distinct multisets, so some maximal minor has a nonzero value at $q=1$, hence is a nonzero element of $\mathbb Q(q)$. Therefore $c_1=\cdots=c_r=0$, proving linear independence over the field and, with step 1.1, that the normal wedges are a field basis. [step 1.1, F2, F3, given, algebra]

2.3 The crystal structure of the ordered wedges. Fix $i$ and a normal integer tuple $I$; the pairs of indices $(i+ke,i+ke+1)$ for the various $k$ are disjoint because $e\ge2$ and their residues alternate, and each pair is either empty, singly occupied or doubly occupied. Empty and doubly occupied pairs are frozen under the color-$i$ operators, a singly occupied pair is a two-vertex string with coefficients $1$ by the finite residue rule of [F4], and shifting an index by one either preserves the strict ordering or creates a collision, which is zero by the relation $u_l\wedge u_l=0$. Hence every finite color-$i$ orbit of $I$ is a product of free two-valued bits times frozen pairs, the projected coproduct coefficients are those of the standard tensor product of highest-weight-$1$ strings, and frozen doubly occupied pairs contribute K-weight $0$; by the rank-one tensor rule of [F4] the raw $A_0$-span $W_0$ is stable under the normalized string operators and its residues give a crystal of the affine wedge module. [step 1.1, F4, F5, given, algebra]

3.1 Integral basis. By step 1.1 the $A$-module $W_A$ is spanned by the normal wedges with Laurent coefficients, and by step 2.2 any finite subfamily is linearly independent over the fraction field, hence over $A\subseteq\mathbb Q(q)$; a finitely generated $A$-module spanned by a family that is independent over the fraction field is free on that family (no torsion can occur, and the spanning family is exactly a basis of the localisation). Thus the normal wedges form an $A$-basis of $W_A$, and the chart $W_0$ is the corresponding $\mathbb Z[q]$-span; $W_0$ is not $W_A$ reduced modulo $q$, and the image of the full positive tensor lattice is not identified with $W_0$. [step 1.1, step 2.2, given, algebra]

4.1 Conclusion. The normally ordered wedges are a $\mathbb Q(q)$-basis of $W_N$ and an $A$-basis of $W_A$, the straightening terminates with the stated well-founded profile preserving sums and intervals, and $W_0$ with the residues of the ordered wedges is a crystal basis of the integrable affine wedge module; the positive-lattice and $q=0$ claims are kept separate. [step 2.1, step 2.2, step 3.1, step 2.3] ∎
