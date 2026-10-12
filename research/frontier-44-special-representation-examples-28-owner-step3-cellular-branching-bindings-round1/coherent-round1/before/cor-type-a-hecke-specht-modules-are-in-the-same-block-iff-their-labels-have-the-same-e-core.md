---
id: cor-type-a-hecke-specht-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core
kind: corollary
title: "Type-A Hecke Specht modules are in the same block iff their labels have the same e-core"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 14
deps: [thm-q-schur-weyl-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core, def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras, thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules, def-blocks-of-a-finite-dimensional-algebra-by-primitive-central-idempotents, def-type-a-hecke-specht-module-and-cell-form, def-type-a-q-schur-algebra-and-weyl-modules, lem-the-identity-of-a-finite-dimensional-algebra-decomposes-into-primitive-central-idempotents, lem-central-idempotent-decompositions-of-one-are-unique, def-e-core-e-quotient-and-e-weight, prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality, def-quantum-characteristic-of-an-invertible-hecke-parameter]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete 79-page prepublication manuscript (1998; expanded AMS University Lecture Series 15 edition, 1999)"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Proposition 4.19 (the exact Schur functor, $eSe\\cong H$ and the correspondence of cell and simple modules), printed pp. 47-52, and Corollary 5.37 (Dippe-James, James-Mathas) with its printed proof, printed pp. 61-63"
    - title: "Sinead Lyle and Andrew Mathas, Blocks of affine and cyclotomic Hecke algebras, author-hosted complete 19-page preprint (published in Math. Z.)"
      url: "https://www.maths.usyd.edu.au/u/pubs/publist/preprints/2006/lyle-24.pdf"
      locator: "Proposition 2.3 with its printed proof, printed pp. 4-5: the idempotents $\\epsilon_C e$ and the two-sided block count between $S_{r,n}$ and $H_{r,n}$"
---

## Statement

Let $F$ be a field and $q\in F^{\times}$ with quantum characteristic $e$
([[def-quantum-characteristic-of-an-invertible-hecke-parameter]]), and let
$S^{\lambda}$ be the type-A Hecke Specht module of this page in the
Dipper-James convention
([[def-type-a-hecke-specht-module-and-cell-form]]) for $\lambda\vdash n$. Then
for all partitions $\lambda,\mu\vdash n$ the modules $S^{\lambda}$ and
$S^{\mu}$ lie in the same block of $H_{F,q}(S_n)$ if and only if $\lambda$ and
$\mu$ have the same $e$-core ([[def-e-core-e-quotient-and-e-weight]]).
Equivalently the blocks of $H_{F,q}(S_n)$ are indexed by the $e$-cores
$\gamma$ of size at most $n$ with $|\gamma|\equiv n\pmod e$, and the block of
$S^{\lambda}$ is determined by $C_e(\lambda)$. (For $e=\infty$ the Hecke
algebra is semisimple and each partition is its own core, so the statement is
the trivial block decomposition.)

No choice principle is used.

## Facts & Assumptions

**Given:** A field $F$, $q\in F^{\times}$ with quantum characteristic $e$, a
partition $n\ge0$, the Hecke algebra $H=H_{F,q}(S_n)$ with Specht modules
$S^{\lambda}$ for $\lambda\vdash n$, and a fixed integer $d\ge n$.

[F1] There is an idempotent $e\in S:=S_F(d,n)$ with $eSe\cong H$, the Schur
functor $F_0(X)=Xe$ is exact, $F_0(W^{\lambda}_F)=S^{\lambda}_{\mathrm M}$ is
the Murphy cell module inside the source's normalisation, and
$F_0(L^{\lambda}_F)=D^{\lambda}_{\mathrm M}$ with
$[S^{\lambda}_{\mathrm M}:D^{\mu}_{\mathrm M}]=[W^{\lambda}_F:L^{\mu}_F]$ when
$D^{\mu}_{\mathrm M}\ne0$; the module $D^{\lambda}_{\mathrm M}$ is zero exactly
when $\lambda$ is not $e$-restricted
([[def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras]],
the batch-20 item thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules)
— both of these batch-20 items are not yet authored on disk at this dispatch
and every use below is recorded as an open obligation in the dispatch report.

[F2] Blocks: $1=\sum_D\delta_D$ is the unique decomposition of the identity of
a finite-dimensional algebra into pairwise orthogonal primitive central
idempotents, blocks are the ideals cut out by the $\delta_D$, and every
nonzero central idempotent is a sum of some of the $\delta_D$
([[def-blocks-of-a-finite-dimensional-algebra-by-primitive-central-idempotents]],
[[lem-the-identity-of-a-finite-dimensional-algebra-decomposes-into-primitive-central-idempotents]],
[[lem-central-idempotent-decompositions-of-one-are-unique]]).

[F3] The q-Schur algebra and its Weyl modules: $S$ is finite-dimensional,
$S=\mathrm{End}_H(M)$ for $M=\bigoplus_{\nu\in\Lambda(d,n)}M^{\nu}$ with
$M^{(1^n)}=H$, and $W^{\lambda}_F$ has head $L^{\lambda}_F$
([[def-type-a-q-schur-algebra-and-weyl-modules]]).

[F4] The q-Schur block theorem
[[thm-q-schur-weyl-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core]]:
for $\lambda,\mu\vdash n$, the Weyl modules $W^{\lambda}_F,W^{\mu}_F$ lie in
the same block of $S$ if and only if $C_e(\lambda)=C_e(\mu)$; the blocks of
$S$ are indexed by the $e$-cores $\gamma$ with $|\gamma|\le n$,
$|\gamma|\equiv n\pmod e$; and if $e=\infty$ then $S$ is semisimple with each
$W^{\lambda}_F$ its own block.

[F5] The Murphy Specht module $S^{\lambda}_{\mathrm M}$ and the Dipper-James
Specht module $S^{\lambda}$ of this page differ by conjugating partitions and
pulling back along a fixed algebra automorphism $\theta$ of $H$ applied to
every Hecke module; conjugation preserves hook lengths, hence $e$-cores and
$e$-restriction, and an algebra automorphism permutes the primitive central
idempotents bijectively, so it preserves the relation of lying in the same
block ([[def-type-a-hecke-specht-module-and-cell-form]],
[[prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality]])
— the first item is a further not-yet-authored batch-20 obligation.




## Proof

**Proof technique:** direct.

1.1 Central idempotents of $H$ from blocks of $S$. For a block $C$ of $S$ with primitive central idempotent $\epsilon_C$ put $\tilde\epsilon_C:=\epsilon_Ce=e\epsilon_Ce\in H$. This element is a central idempotent of $H$: it is idempotent because $\epsilon_C$ is, and for $x=ese\in H$ centrality of $\epsilon_C$ gives $x\tilde\epsilon_C=es\epsilon_Ce=e\epsilon_Cse=\tilde\epsilon_Cx$; it is nonzero because it acts as the identity on the nonzero module $W^{\lambda}_Fe=S^{\lambda}_{\mathrm M}$ for any $\lambda$ with $W^{\lambda}_F\in C$, namely $S^{\lambda}_{\mathrm M}\tilde\epsilon_C=W^{\lambda}_Fe\epsilon_Ce=W^{\lambda}_F\epsilon_Ce=S^{\lambda}_{\mathrm M}$. Moreover $\tilde\epsilon_C\tilde\epsilon_{C'}=e\epsilon_C\epsilon_{C'}e=0$ for $C\ne C'$ and $\sum_C\tilde\epsilon_C=e\sum_C\epsilon_Ce=e^2=1_H$. [F1, F2, F3]

1.2 Number of q-Schur blocks is at least the number of Hecke blocks. Let $H=\bigoplus_iB_i$ be the block decomposition of $H$ with block identities $b_i$. Since $M=\bigoplus_{\nu}M^{\nu}$ and $H=M^{(1^n)}$ is a direct summand, $M=\bigoplus_iMb_i$ with each $Mb_i\ne0$ (it contains $Hb_i=B_i$), and $\mathrm{Hom}_H(Mb_i,Mb_j)=0$ for $i\ne j$, because a map $f$ satisfies $f(x)=f(xb_i)=f(x)b_i\in Mb_jb_i=0$. Hence $$S=\mathrm{End}_H(M)=\bigoplus_{i,j}\mathrm{Hom}_H(Mb_i,Mb_j)=\prod_i\mathrm{End}_H(Mb_i)$$ is a product of the nonzero algebras $\mathrm{End}_H(Mb_i)$, and a product of nonzero algebras has at least one block per factor; so $\#\{\text{blocks of }S\}\ge\#\{\text{blocks of }H\}$. [F2, F3, algebra]

2.1 Number of Hecke blocks is at least the number of q-Schur blocks. Decompose each nonzero central idempotent $\tilde\epsilon_C$ of step 1.1 into primitive central idempotents of $H$ using the unique decomposition of $1_H$: every primitive central idempotent $\delta_D$ of $H$ with $\delta_D\tilde\epsilon_C=\delta_D$ belongs to exactly one $\tilde\epsilon_C$, because $\delta_D=\delta_D\cdot1_H=\sum_C\delta_D\tilde\epsilon_C$ and pairwise orthogonality of the $\delta_D$ forces $\delta_D\tilde\epsilon_C\in\{0,\delta_D\}$. Since each $\tilde\epsilon_C\ne0$ has at least one such $\delta_D$, the blocks $D$ of $H$ are partitioned into nonempty supports over the blocks $C$ of $S$, and therefore $\#\{\text{blocks of }H\}\ge\#\{\text{blocks of }S\}$. [F2, step 1.1]

3.1 A bijection of block sets, and the core criterion. By steps 2.1 and 1.2 the two block counts are equal, so each $\tilde\epsilon_C$ of step 1.1 has exactly one primitive summand and the map $C\mapsto\tilde\epsilon_C$ is a bijection from the blocks of $S$ onto the blocks of $H$. Since $S^{\lambda}_{\mathrm M}=W^{\lambda}_Fe$ and $S^{\mu}_{\mathrm M}=W^{\mu}_Fe$, the modules $S^{\lambda}_{\mathrm M}$ and $S^{\mu}_{\mathrm M}$ lie in the same Hecke block if and only if $W^{\lambda}_F$ and $W^{\mu}_F$ lie in the same q-Schur block: indeed the block of $S^{\lambda}_{\mathrm M}$ is the image under the bijection of the block of $W^{\lambda}_F$. By the block theorem [F4] the latter holds if and only if $C_e(\lambda)=C_e(\mu)$, which proves the q-Schur-normalised statement. [F1, F4, step 2.1, step 1.2]

4.1 Dipper-James normalisation and the case $e=\infty$. The Murphy module $S^{\lambda}_{\mathrm M}$ and the page's Dipper-James Specht module $S^{\lambda}$ differ by conjugating the partition and applying a fixed algebra automorphism $\theta$ of $H$ to both sides of the identity; conjugation preserves hook lengths and therefore preserves $e$-cores, so the criterion of step 3.1 is unchanged, and pulling back along $\theta$ permutes primitive central idempotents and hence the blocks, so the same criterion holds for $S^{\lambda},S^{\mu}$ by [F5]. If $e=\infty$, then by [F4] each $W^{\lambda}_F$ is its own q-Schur block and the q-Schur algebra is semisimple; the bijection of step 3.1 then separates all Hecke Specht labels, and the multiplicity-preserving comparison $[S^{\lambda}_{\mathrm M}:D^{\mu}_{\mathrm M}]=[W^{\lambda}_F:L^{\mu}_F]$ of [F1], valid for every $\mu$ because all partitions are $e$-restricted when $e=\infty$, shows that the decomposition matrix of $H$ is the identity and hence that $H$ is semisimple with each partition its own core. [F1, F4, F5, step 3.1] ∎
