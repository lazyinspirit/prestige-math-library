---
id: thm-green-vertex-source-existence-and-conjugacy
kind: theorem
title: "Vertices exist for indecomposable modules, are conjugate in G, and sources are conjugate by the appropriate normalizer"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-vertex-and-source-of-an-indecomposable-module, thm-higman-criterion-for-relative-projectivity, thm-krull-schmidt-for-finite-dimensional-kg-modules]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. MacQuarrie, Modular Representations of Profinite Groups"
      url: "https://eprints.maths.manchester.ac.uk/1262/1/relprojpaperB.pdf"
    - title: "Peter Webb, A Course in Finite Group Representation Theory (23 Feb 2016 draft)"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Statement

Let $G$ be a finite group, let $k$ be a field of characteristic $p$, and let
$M$ be an indecomposable finite-dimensional $kG$-module. Then $M$ has a vertex
and a source. Any two vertices are conjugate in $G$. If $Q$ is a fixed vertex,
then any two sources attached to $Q$ are conjugate by an element of $N_G(Q)$.

## Facts & Assumptions

**Given:** A finite group $G$, a field $k$ of characteristic $p$, and an indecomposable finite-dimensional $kG$-module $M$.

[F1] A vertex is a minimal $p$-subgroup for relative projectivity, and a source is an indecomposable inducing summand there ([[def-vertex-and-source-of-an-indecomposable-module]]).

[L1] Relative projectivity is detected by the Higman trace criterion ([[thm-higman-criterion-for-relative-projectivity]]).

[L2] Finite-dimensional modules admit Krull-Schmidt decompositions ([[thm-krull-schmidt-for-finite-dimensional-kg-modules]]).

## Proof

**Proof technique:** direct.

1.1 Choose a maximal $p$-subgroup $P\le G$. Then $[G:P]$ is prime to $p$, so the scalar $[G:P]^{-1}$ exists in $k$. Let $T$ be a left transversal for $G/P$, and define $\alpha=[G:P]^{-1}\operatorname{id}_M\in\operatorname{End}_{kP}(M)$. By the relative trace formula in [L1], $$\operatorname{Tr}_P^G(\alpha)(m)=\sum_{t\in T}t\cdot\alpha(t^{-1}m)=[G:P]\,[G:P]^{-1}m=m,$$ so $M$ is relatively $P$-projective. Among the $p$-subgroups of $G$ for which $M$ is relatively projective, choose one minimal under inclusion and call it $Q$. Again by [L1], the adjunction counit from $\operatorname{Ind}_Q^G\operatorname{Res}_Q^G M$ to $M$ splits. Decompose $\operatorname{Res}_Q^G M$ into indecomposable summands using [L2]; one of their inductions must contain $M$ as a summand. That indecomposable summand is a source for $M$, so vertices and sources exist. [F1, L1, L2, given, choose, algebra]

1.2 Let $R$ be another vertex. By [L1], choose $\alpha\in\operatorname{End}_{kQ}(M)$ and $\beta\in\operatorname{End}_{kR}(M)$ with $$\operatorname{id}_M=\operatorname{Tr}_Q^G(\alpha)=\operatorname{Tr}_R^G(\beta).$$ Expand the composite of these two trace expressions and group its terms by the double cosets $QxR$ of $Q\backslash G/R$. If $D_x=Q\cap{}^xR$, the terms in the $QxR$ block are permuted transitively by left conjugation from $G$ and their stabilizer is $D_x$; summing one set of stabilizer representatives gives a $D_x$-endomorphism $\gamma_x$. Thus direct regrouping of the finite double sum gives $$\operatorname{id}_M=\operatorname{Tr}_Q^G(\alpha)\operatorname{Tr}_R^G(\beta)=\sum_{x\in Q\backslash G/R}\operatorname{Tr}_{D_x}^{G}(\gamma_x).$$ This is the needed Mackey trace calculation, with every summand now a $G$-endomorphism of $M$. [L1, given, algebra]

2.1 The endomorphism ring of the indecomposable finite-length $kG$-module $M$ is local by the Fitting argument in [L2]. Since the sum in step 1.2 is the identity, one summand $u=\operatorname{Tr}_{D_x}^{G}(\gamma_x)$ is invertible. Because $u^{-1}$ is $G$-linear, $$\operatorname{id}_M=uu^{-1}=\operatorname{Tr}_{D_x}^{G}(\gamma_xu^{-1}),$$ so [L1] makes $M$ relatively $D_x$-projective. Minimality of the vertex $Q$ forces $D_x=Q$, hence $Q\le{}^xR$. Interchanging $Q$ and $R$ gives $|R|\le|Q|$, while this containment gives $|Q|\le|R|$; consequently $Q={}^xR$. Thus vertices are conjugate in $G$. [F1, L1, L2, step 1.2, algebra]

2.2 Fix a vertex $Q$ and let $S,T$ be two sources attached to it. By [F1], $S$ is an indecomposable summand of $\operatorname{Res}_Q^G M$, and $M$ is a summand of $\operatorname{Ind}_Q^G T$. Hence $S$ is a summand of $$\operatorname{Res}_Q^G\operatorname{Ind}_Q^G T\cong\bigoplus_{x\in Q\backslash G/Q}\operatorname{Ind}_{Q\cap{}^xQ}^{Q}\operatorname{Res}_{Q\cap{}^xQ}^{{}^xQ}({}^xT),$$ where the displayed decomposition follows by partitioning $G$ into its $Q$-$Q$ double cosets and grouping the corresponding induced-function summands. By Krull-Schmidt [L2], $S$ is a summand of one displayed term and is therefore relatively $Q\cap{}^xQ$-projective for some $x$. [F1, L2, step 1.1, algebra]

3.1 The source $S$, viewed as a $kQ$-module, cannot be relatively projective for a proper subgroup $D<Q$: otherwise induction transitivity would make $M$, a summand of $\operatorname{Ind}_Q^G S$, relatively $D$-projective, contradicting minimality of the vertex $Q$. Applying this to step 2.2 forces $Q\cap{}^xQ=Q$. Equality of the finite subgroup orders then gives ${}^xQ=Q$, so $x\in N_G(Q)$. The corresponding summand in step 2.2 is ${}^xT$, which is indecomposable; since $S$ is an indecomposable direct summand of it, $S\cong{}^xT$. Thus sources attached to the fixed vertex are conjugate by an element of $N_G(Q)$. [F1, L2, step 2.2, algebra]

4.1 Steps 1.1 through 3.1 prove the theorem, with no stronger uniqueness claim than the normalizer-conjugacy stated above. [step 1.1, step 1.2, step 2.1, step 2.2, step 3.1] ∎
