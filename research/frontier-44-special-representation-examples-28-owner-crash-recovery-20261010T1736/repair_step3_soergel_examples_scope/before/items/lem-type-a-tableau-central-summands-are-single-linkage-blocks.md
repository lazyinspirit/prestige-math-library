---
id: lem-type-a-tableau-central-summands-are-single-linkage-blocks
kind: lemma
title: "Type-A tableau central summands are single linkage blocks"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 21
deps: [lem-the-parabolic-semi-regular-duality-and-reverse-column-label-map,
       def-standard-costandard-filtered-and-tilting-objects-in-a-highest-weight-category,
       def-dual-canonical-canonical-and-quasi-canonical-fock-bases,
       def-higher-level-wedge-tensor-fock-module,
       thm-parabolic-category-o-is-a-highest-weight-category,
       thm-singular-category-o-multiplicities-are-parabolic-kl-polynomials,
       thm-weyl-character-formula,
       def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Shun-Jen Cheng, Weiqiang Wang and R.B. Zhang, A super duality and Kazhdan-Lusztig polynomials (complete45-page arXiv0409016)"
      url: "https://arxiv.org/pdf/math/0409016"
      locator: "Sections2.1–2.2 (pp5–8) finite two-wedge conventions, Sections4.3–4.4 (pp22–26), Procedure4.11, Lemma4.14 and Theorem4.16 full three-case proof of two-column canonical coefficients; no super-duality result imported."
    - title: "Jonathan Brundan, Dual canonical bases and Kazhdan-Lusztig polynomials (complete29-page arXiv0509700v2)"
      url: "https://arxiv.org/pdf/math/0509700"
      locator: "Section4 pp10–13: actual tensor Hecke action/bar identification, Theorem4 and Corollary5 complementary-chart inversion; Section5 pp16–18: ordinary-bar wedge embedding and signed coefficients."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). For the Fock shape
$n_1\ge\cdots\ge n_l$ (the original nonincreasing-charge hypothesis) and any
admitted integral entry multiset, the genuine $\mathfrak{gl}_n$ parabolic
central summand labelled by its strict-column tableaux is a **single linkage
block**. The same holds for its reverse-column/reversed-Levi counterpart.
This includes repeated-entry singular ambient characters. The proof uses
actual indecomposable generalized standards and locally constructed tiltings:
adjacent-column positive exclusive-pair canonical coefficients specialize
to $1$, so those labels lie in a common actual linkage block, and these edges
connect the whole fixed-margin binary tableau fiber. No future
higher-Schur/cyclotomic-centre theorem is imported.

## Facts & Assumptions

**Given:** A finite genuine $\mathfrak{gl}_n$ parabolic central summand as in [[def-standard-costandard-filtered-and-tilting-objects-in-a-highest-weight-category]], with its actual generalized standards $\Delta_B$, simples $L_A$ and projective covers; the reversed-block construction and its contravariant/covariant equivalences $\Psi,F$ of [[lem-the-parabolic-semi-regular-duality-and-reverse-column-label-map]]; the Fock tableaux and their monomials of [[def-higher-level-wedge-tensor-fock-module]]; and the four Fock bases and forms of [[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]].

[F1] Highest-weight structure and filtered categories ([[thm-parabolic-category-o-is-a-highest-weight-category]], [[def-standard-costandard-filtered-and-tilting-objects-in-a-highest-weight-category]]): finite $\Delta$-flags, the homological criterion $\mathcal F(\Delta)=\{N:\operatorname{Ext}^1(N,\nabla_A)=0\ \forall A\}$, uniqueness of indecomposable tilting objects with a given bottom label, BGG reciprocity $[P_A:\Delta_B]=[\Delta_B:L_A]$, and restricted duality.

[F2] Semi-regular duality ([[lem-the-parabolic-semi-regular-duality-and-reverse-column-label-map]]): $\Psi(\bar\Delta(A))\cong\Delta(A)$, $F=D\Psi$ sends opposite standards to target costandards, and both preserve the central blocks and reverse the label order.

[F3] Singular/parabolic coefficients ([[thm-singular-category-o-multiplicities-are-parabolic-kl-polynomials]], [[thm-weyl-character-formula]]): the ordinary spherical values $P_{yw_0,ww_0}(1)$ compute the singular multiplicities, and the finite Weyl character formula gives the signed Levi expansion of characters.

[F4] Fock bases and forms ([[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]]): the monomial basis $M_A$, the source dual-canonical and canonical families $L,T$, the complementary triangular charts $d,p$, the source bilinear form $C$ with $C(\widetilde T_A,L_B)=\delta_{AB}$ and $C(\widetilde L_A,T_B)=\delta_{AB}$, and the bar triangularity $T_A=M_A+\sum_{B<A}s^{-1}\mathbb Z[s^{-1}]M_B$.

[F5] Axiom of Choice ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 **The opposite projective image.** Fix one finite highest-weight central summand and a label $B$, and put $X(B):=\Psi(P^{\bar p}(B))$ with $\Psi$ as in [F2]. Opposite BGG reciprocity and the order reversal of [F2] show that the standard flag of $X(B)$ has $\Delta(B)$ exactly once, as lowest factor, and all other factors $\Delta(A)$ with $A\prec B$. [F1, F2, F5]

2.1 **$X(B)$ is a tilting object and is self-dual.** Projectivity of $P^{\bar p}(B)$ and exactness of $\Psi$ give $\operatorname{Ext}^1(\Delta(A),X(B))=0$ for all $A$: any such extension pulls back to an extension of the opposite projective along the filtered equivalence and is split. By the criterion of [F1], $X(B)$ is also $\nabla$-filtered, hence tilting. The object $DX(B)$ has the same normalized flag (restricted duality fixes simples and exchanges $\Delta$- and $\nabla$-flags); extending the normalized bottom inclusion both ways and applying the local End/Fitting argument of the uniqueness theorem in [F1] shows $X(B)\cong DX(B)$. [F1, F2, step 1.1]

3.1 **The opposite BGG coefficient identity.** From the tilting nature and maximal support of $X(B)$, every multiplicity can be computed as $(X(B):\Delta(A))=\dim\operatorname{Hom}(X(B),\nabla(A))$, and adjunction along $\Psi$ gives $(X(B):M(A))=[\bar M(A):\bar L(B)],$ the opposite parabolic composition coefficient. [F1, F2, step 2.1]

4.1 **The tensor/wedge bridge to the source $T$ at $1$.** Writing each sorted entry tuple as a right coset representative $w_A$ (shortest right in the entry stabilizer) with $d(A)=w_A^{-1}$ shortest left, the pure tensor Hecke generator action and the reverse-position complementary-chart pairing identify the tensor coefficient matrix with the spherical values $P_{d(C)w_0,d(A)w_0}(1)$, i.e. with the ordinary singular multiplicities of [F3]; finite Levi Weyl cancellation turns the signed column-permutation expansion into the actual parabolic composition matrix, and the source-positive wedge embedding identifies the source $L$-vectors with the tensor $L$-vectors by ordinary-bar and triangular uniqueness. Applying the same argument in reverse columns and using the typed pairing $C(\widetilde L_A,T_B)=\delta_{AB}$ of [F4] identifies the coefficient of $M(A)$ in the source canonical vector $T_B$ at $1$ with the opposite BGG coefficient of step 3.1. [F2, F3, F4, step 3.1]

5.1 **The two-column canonical coefficient.** Let $f$ be a tuple of two adjacent strict columns, and match exclusive left values $b>$ exclusive right values $a$ by increasing distance $b-a$, deleting already matched endpoints. The source three-case calculation (Cheng–Wang–Zhang, the two-column canonical calculation of the source) determines the bar-fixed vector $U_f=\sum_{\Sigma\subseteq\text{greedy pairs}}s^{\#\Sigma}M_{f_\Sigma},$ where $f_\Sigma$ swaps the selected disjoint pairs and reorders each column: if the selected left $b$ can be decreased without collision one applies $F_{b-1}$; if the collision also occurs on the right one first increases that right entry and applies $E_{b-1}$; the pair set either moves one endpoint or loses exactly the newly matched pair, and the direct two-wedge coproduct gives either $M_f$ or $M_f+s\,M_{f'}$. Each Chevalley generator is bar-fixed, the recursion terminates lexicographically in the number of matched pairs and the sum of their distances, and distinct subsets change distinct exclusive entries. Triangular uniqueness in the source-positive chart therefore identifies $U_f$ with the canonical vector, and each **single** greedy-pair coefficient is exactly $s$. [F1, F4, step 4.1, algebra]

6.1 **Isolation of adjacent columns in a larger tensor.** If two tableaux have the same entries outside two adjacent columns, every tableau in the Bruhat interval between them has the same outer prefix weights, since dominance is antisymmetric on fixed total weight; parenthesizing the pair as one tensor factor, a positive transfer across an outer boundary strictly changes a prefix weight in the positive cone and cannot be cancelled by further positive transfers. Hence the bar submatrix and, by triangular correction, the canonical coefficient between the two labelled monomials equal the two-column values of step 5.1. [F1, F4, step 5.1]

7.1 **Genuine edges at $1$.** Specializing step 6.1 at $s=1$, a greedy-pair swap gives $(X(B):M(A))=1$ for the two labels connected by the swap: the corresponding standard factor occurs with multiplicity $1$ in the indecomposable tilting object $X(B)$. Since an indecomposable finite-length object cannot have composition factors in two different linkage blocks, and $M(A)$ has simple head $L(A)$ while $X(B)$ has head $L(B)$, the labels $A$ and $B$ lie in the same actual linkage block. Opposite BGG gives $[\bar M(A):\bar L(B)]=1$, and $\bar M(A)$ has head $\bar L(A)$, so the same edge connects the opposite labels. [F1, F2, step 3.1, step 6.1]

8.1 **Connectivity of the binary tableau fiber.** Identify a tableau with the $0/1$ incidence matrix recording which entry values occur in each column; its row margins are entry multiplicities and its column margins are the heights $n_j$. The symmetric difference of two matrices with the same margins is a union of alternating cycles in the bipartite graph, and a cycle of length $2k$ is flipped by a chord: if the chord entry is $0$ flip the smaller four-cycle first and then the remaining shorter cycle, if it is $1$ flip the complementary shorter cycle first and then the four-cycle; the chord is restored and exactly the original cycle is flipped. Induction on the cycle length gives a sequence of valid $2\times2$ switches connecting any two matrices with the same margins. [step 7.1, algebra]

9.1 **Reduction of distant switches.** Reduce a switch of entries $a,b$ between nonadjacent columns $S,U$ through the next intermediate column $T$. If $T$ contains only $a$ or only $b$, two switches with shorter column distance restore $T$ and effect the $S/U$ switch. If $T$ contains both, then $T\setminus S$ contains $b$ and, since $|S|\ge|T|$, some $c\in S\setminus T$ with $c\ne a$; use $c\leftrightarrow b$ on $S,T$, then $a\leftrightarrow b$ on $T,U$, then $a\leftrightarrow c$ on $S,T$. If $T$ contains neither, then $U\setminus T$ contains $b$ and, since $|T|\ge|U|$, some $c\in T\setminus U$; use $c\leftrightarrow b$ on $T,U$, then $a\leftrightarrow b$ on $S,T$, then $a\leftrightarrow c$ on $T,U$. Every step is a valid binary switch preserving the margins, and induction on the column distance reduces to adjacent columns. These cardinal comparisons use exactly the original sorted heights $n_1\ge\cdots\ge n_l$. [step 8.1, algebra]

10.1 **Adjacent fibers connect through coefficient-$1$ edges.** Every adjacent two-column switch has both endpoints in one union/intersection fiber of the pair of columns. Repeatedly swapping any greedy positive pair strictly lowers the inversion order of the tuple, and the process terminates at the unique configuration in which all left-exclusive values precede all right-exclusive values. Hence the endpoints are connected through the canonical coefficient-$1$ edges of step 5.1 and step 7.1. [step 5.1, step 7.1, step 9.1]

11.1 **Conclusion.** Combining steps 8.1-10.1, the whole fixed-margin binary tableau fiber is connected through actual linkage edges, in the original central summand and, by step 7.1, in the opposite one. Hence both genuine type-$A$ tableau central summands are single linkage blocks, including repeated-entry singular ambient characters; no future higher-Schur/cyclotomic-centre theorem and no bare Bruhat-cover connectivity assertion is used. [step 7.1, step 8.1, step 9.1, step 10.1] ∎
