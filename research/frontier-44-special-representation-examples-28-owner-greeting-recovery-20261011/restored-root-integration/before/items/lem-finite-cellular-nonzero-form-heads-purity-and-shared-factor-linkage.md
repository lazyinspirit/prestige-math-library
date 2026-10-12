---
id: lem-finite-cellular-nonzero-form-heads-purity-and-shared-factor-linkage
kind: lemma
title: "Nonzero-form cellular heads, cell purity and shared-factor linkage"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 2
deps: [def-cellular-algebra-basis-and-cell-module, def-simple-module,
       def-composition-series-and-length-of-a-module,
       thm-jordan-holder-theorem-for-modules,
       lem-finite-dimensional-algebras-admit-primitive-idempotent-decompositions,
       thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras,
       thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple,
       def-blocks-of-a-finite-dimensional-algebra-by-primitive-central-idempotents]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Mathas, The representation theory of the Ariki–Koike and cyclotomic q-Schur algebras, math/0204025"
      url: "https://arxiv.org/pdf/math/0204025"
      locator: "PDF pp. 16–19, 27–37: arbitrary-level element conventions and contracts; full local arguments in these registration drafts replace the review sketches."
    - title: "Mathas, Hecke algebras and Schur algebras of the symmetric group, complete 79-page manuscript"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Ordinary finite type A only; Garnir/Murphy printed pp. 18–25 and ordinary semistandard/Specht/Schur PDF pp. 45–50 were actually read; no arbitrary-level DJM proof read claimed."
    - title: "Lyle–Mathas, Blocks of cyclotomic Hecke algebras, math/0607451v4"
      url: "https://arxiv.org/pdf/math/0607451v4"
      locator: "Section 2.1–2.3 exact multipartition-summand Schur variant and deformation; no external proof fallback."
---

## Statement

Let $A$ be a finite-dimensional cellular algebra over a field $F$
([[def-cellular-algebra-basis-and-cell-module]]) with cell modules
$C_\lambda$ and cell-form quotients $D_\lambda=C_\lambda/R_\lambda$. Then:

1. every nonzero $D_\lambda$ is an absolutely simple head, all simple
   $A$-modules occur exactly once this way, and $[C_\lambda:D_\mu]\ne0$ implies
   $\lambda\ge\mu$, with $[C_\mu:D_\mu]=1$ whenever $D_\mu\ne0$; here
   "nonzero quotient" means nonzero form, not necessarily a nondegenerate form
   on $C_\lambda$;
2. every nonzero cell module, including labels with zero-form quotient, has
   all its composition factors in a single block
   ([[def-blocks-of-a-finite-dimensional-algebra-by-primitive-central-idempotents]]);
3. two cell modules share a block exactly when they are linked by a finite
   chain of cell modules whose neighbouring terms share a simple composition
   factor;
4. for one primitive idempotent $e_\mu$ per simple,
   $$\dim_Fe_\mu Ae_\nu=\sum_\lambda[C_\lambda:D_\mu]\,[C_\lambda:D_\nu].$$

## Facts & Assumptions

**Given:** A finite-dimensional cellular $F$-algebra $A$ with cellular basis
$c^\lambda_{st}$, higher ideals $A^{>\lambda}$, cell ideals
$I_\lambda=A^{\ge\lambda}$, cell layers $J_\lambda=I_\lambda/A^{>\lambda}$,
right cell modules $C_\lambda$ and their Gram forms $\langle-,-\rangle$.

[F1] The right cell axiom gives $x c^\lambda_{st}\equiv\sum_{u}\langle x,c^\lambda_{su}\rangle c^\lambda_{ut}$ modulo $A^{>\lambda}$; the cell form is the scalar matrix $G_\lambda(s,t)=\langle c^\lambda_{s},c^\lambda_{t}\rangle$, and the cell layer satisfies
$J_\lambda\cong C_\lambda^*\otimes_FC_\lambda$
([[def-cellular-algebra-basis-and-cell-module]]).

[F2] $A$ has a complete orthogonal set of primitive idempotents; projective
covers exist and are unique; the Jacobson radical is nilpotent with semisimple
quotient; every simple module appears in $A/\operatorname{rad}A$
([[lem-finite-dimensional-algebras-admit-primitive-idempotent-decompositions]],
[[thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras]],
[[thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple]]).

[F3] Composition multiplicities $[M:D]$ are well defined by the
Jordan–Hölder theorem ([[thm-jordan-holder-theorem-for-modules]],
[[def-composition-series-and-length-of-a-module]]).

[F4] Blocks of $A$ are the primitive-central-idempotent components; a central
idempotent acts as $0$ or $1$ on each indecomposable projective and cannot
split a nonzero corner ([[def-blocks-of-a-finite-dimensional-algebra-by-primitive-central-idempotents]]).

## Proof

**Proof technique:** direct.

**Given:** The cellular data of [F1]–[F4] and the cell modules $C_\lambda$ with

their forms.

1.1 The cell-form scalar and its symmetry. For basis elements $c^\lambda_{us},c^\lambda_{tv}$ the product $c^\lambda_{us}c^\lambda_{tv}$ equals a scalar $G_\lambda(s,t)$ times $c^\lambda_{uv}$ modulo $A^{>\lambda}$ with $G_\lambda(s,t)$ independent of $u,v$: the right cell axiom fixes the first index and the left cell axiom fixes the last one, and comparing the two evaluations leaves the same scalar. The cellular involution gives $G_\lambda(s,t)=G_\lambda(t,s)$. Associativity of the threefold product yields $\langle xa,y\rangle=\langle x,ya^*\rangle$, since both sides compute the coefficient in the cell layer of the same product. [F1, algebra]

1.2 Cell purity. Let $z$ be a central idempotent of $A$. On the cell layer $J_\lambda\cong C_\lambda^*\otimes_FC_\lambda$ the equality of left and right multiplication by $z$ gives $B\otimes\operatorname{Id}=\operatorname{Id}\otimes A_\lambda$ for the first- and second-factor coefficient matrices; comparing matrix coefficients shows every off-diagonal entry of $B$ and $A_\lambda$ vanishes and all diagonal entries of $B$ and $A_\lambda$ are equal, so both are a single scalar $\theta_\lambda$ times the identity. Since $z$ is idempotent, $\theta_\lambda\in\{0,1\}$. Applying this to all primitive central idempotents, whose sum is $1$, exactly one acts as $1$ on the nonzero cell module $C_\lambda$ and the others as $0$; hence $C_\lambda$, and therefore every composition factor of it, lies in one block. This covers labels with zero-form quotient because the tensor argument never divides by the Gram matrix. [F1, F4, algebra]

2.1 Nonzero form gives a simple head. Let $R_\lambda:=\{x\in C_\lambda:\langle x,C_\lambda\rangle=0\}$ be the radical of the form. By step 1.1 the rank-one action is $xc^\lambda_{uv}=\langle x,c^\lambda_u\rangle c^\lambda_v$, which shows that $R_\lambda$ is a submodule and that every vector $x\notin R_\lambda$ generates $C_\lambda$: if $\langle x,c^\lambda_u\rangle\ne0$, then scaling $xc^\lambda_{uv}$ by the inverse scalar produces $c^\lambda_v$ for every $v$. Hence every proper submodule is contained in $R_\lambda$ and $D_\lambda=C_\lambda/R_\lambda$ is simple when the form is nonzero; the criterion is nonzero form, and a degenerate but nonzero form is allowed. Extending scalars preserves the Gram rank and the rank-one action, so $D_\lambda$ is absolutely simple. [F1, step 1.1]

3.1 Every simple occurs. Let $D$ be a simple $A$-module, and choose a cell ideal $I_\lambda$ acting nontrivially on $D$, maximal among such ideals in the finite cell order; then $A^{>\lambda}$ annihilates $D$, while $J_\lambda=I_\lambda/A^{>\lambda}$ does not, so $DJ_\lambda=D$. If the Gram matrix of $C_\lambda$ were zero, the cell-layer multiplication would satisfy $J_\lambda^2=0$ and $DJ_\lambda^2=0$, a contradiction; hence the form is nonzero. Choose $s,u$ and $d\in D$ with $dc^\lambda_{su}\ne0$; the map $c^\lambda_v\mapsto dc^\lambda_{sv}$ has nonzero image, which is all of $D$ by simplicity and factors through the nonzero head $D_\lambda$ of step 2.1, so $D\cong D_\lambda$. This exhausts the simple labels without classifying which multipartitions have nonzero forms. [F1, step 2.1]

3.2 Order and multiplicity. If $\lambda$ does not dominate $\mu$, then $C_\lambda$ annihilates $I_\mu$: products in $I_\lambda\cap I_\mu$ involve only shapes strictly above $\lambda$. Since $D_\mu$ does not annihilate $I_\mu$ by the rank-one action, $[C_\lambda:D_\mu]\ne0$ forces $\lambda\ge\mu$. The radical $R_\lambda$ annihilates $I_\lambda$, while $D_\lambda$ does not, so $[C_\lambda:D_\lambda]=1$ when $D_\lambda\ne0$. Two distinct nonzero heads are not isomorphic: their ideal supports would force $\lambda\ge\mu$ and $\mu\ge\lambda$ simultaneously. [F1, step 2.1]

4.1 The corner identity. Choose one primitive idempotent $e_\mu$ for each simple $D_\mu$ with $\dim D_\nu e_\mu=\delta_{\mu\nu}$. The exact functor $V\mapsto Ve_\mu$ (lift a vector along a surjection and multiply by $e_\mu$; restrict along an injection) gives $\dim C_\lambda e_\mu=[C_\lambda:D_\mu]$, and the same holds for the left factor after applying the involution. Filtering $A$ by a linear extension of the cellular ideals and applying the two exact projections $e_\mu(-)e_\nu$ to the cell layers $J_\lambda\cong C_\lambda^*\otimes C_\lambda$, dimension additivity gives $\dim_Fe_\mu Ae_\nu=\sum_\lambda[C_\lambda:D_\mu][C_\lambda:D_\nu].$ No multiplicity computation is hidden in this identity. [F1, F3, step 3.2, algebra]

5.1 Blocks and linkage. A finite split algebra has blocks equal to the connected components of the graph on its primitive idempotents with an edge $e$–$f$ whenever $eAf\ne0$ or $fAe\ne0$: a sum of full primitive idempotents over a union of components is central, and conversely a central idempotent cannot separate a nonzero corner, while repeated primitive idempotents of the same simple are linked through the matrix units of $A/\operatorname{rad}A$. By step 4.1 two simple labels have a nonzero corner exactly when they occur together as factors of some cell module, so two simples share a block exactly when a chain of cell modules links their factors. Since by step 1.2 every cell module is pure and by step 3.1 every simple occurs in a nonzero-form head, two cell modules lie in the same block exactly when there is a chain of cell modules each neighbouring pair of which shares a simple composition factor. [F2, F4, step 1.2, step 4.1]

6.1 Conclusion. Steps 1.1, 2.1, 3.1 and 3.2 prove the head, exhaustion, order and multiplicity statement (1); step 1.2 proves cell purity (2); step 4.1 proves the corner identity (4); and step 5.1 proves the exact shared-factor linkage criterion (3). All arguments work over every field and allow degenerate nonzero cell forms and labels with zero-form quotient. [step 3.2, step 4.1, step 5.1] ∎

## Remarks

The correct criterion in part (1) is that the cell form be nonzero, not that it
be nondegenerate on $C_\lambda$: degenerate but nonzero forms give simple heads
whose radical is the form radical. The purity argument (2.1) is a tensor
argument on the cell layer and never inverts the Gram matrix, so it applies to
zero-form labels as well. No choice principle is used: all algebras are
finite-dimensional and all filtrations finite.
