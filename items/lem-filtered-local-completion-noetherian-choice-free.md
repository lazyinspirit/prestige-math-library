---
id: lem-filtered-local-completion-noetherian-choice-free
kind: lemma
title: "Choice-free Noetherianity and completion for a filtered local system"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps: []
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
---

## Statement

Let $k$ be a field and let $(E_i,\mathfrak m_i)$ be a specified filtered system of Noetherian local $k$-algebras with residue field $k$ and local $k$-algebra transition maps. Suppose every transition induces an isomorphism $E_i/\mathfrak m_i^r\to E_j/\mathfrak m_j^r$ for each $r\ge1$, and their compatible completions are identified with a specified Noetherian local ring $C$. Put $H=\varinjlim_i E_i$. Then $H$ is Noetherian local, its completion is $C$, and $H\to C$ is faithfully flat. The assertion requires no Axiom of Choice beyond the finite selections made for an individual ideal or relation.

## Facts & Assumptions

**Given:** The field, specified filtered system, compatible residue-quotient isomorphisms and common Noetherian completion in the Statement.

## Proof

1.1 We first prove, for one Noetherian local $k$-algebra $(E,\mathfrak m)$ with residue field $k$, that completion is exact on finite modules without selecting a family of arbitrary lifts. The finite-dimensional vector spaces $E/\mathfrak m^r$ have specified finite ordered spanning lists: choose finitely many generators of $\mathfrak m$ once, and order their monomials of degree below $r$. Gaussian elimination selects a canonical ordered basis from each list. The same applies to finite free modules and to their quotients. [given, choose, construct, algebra]

2.1 For an inclusion of finite $E$-modules $M'\subset M$, the Artin–Rees estimate follows from finite generation of the graded module $\bigoplus_r(M'\cap\mathfrak m^rM)T^r$ over the Noetherian Rees ring $\bigoplus_r\mathfrak m^rT^r$: for some $c$ and all $r\ge c$, $M'\cap\mathfrak m^rM=\mathfrak m^{r-c}(M'\cap\mathfrak m^cM)$. The Rees ring is a quotient of a polynomial ring over $E$ in finitely many variables; the Noetherian polynomial-ring and submodule arguments use only finite generator selections. This estimate makes $\widehat{M'}\to\widehat M$ injective. [step 1.1, algebra] [step 1.1]

3.1 For a surjection $M\to M''$ of finite modules, choose a finite free module $F$ surjecting onto $M$. Given a compatible element $(x_r)\in\widehat{M''}$, for $N\ge r$ let $S_{r,N}$ be the image in $F/\mathfrak m^rF$ of all lifts of $x_N$ in $F/\mathfrak m^NF$. These are nonempty descending affine $k$-subspaces of a finite-dimensional vector space, so they stabilize. Let $S_r$ be their stable value. Every element of $S_r$ lifts to an element of $S_{r+1}$: choose a sufficiently large $N$ at which both stable values have been reached and reduce a lift from level $N$. With the ordered bases of step 1.1, reduced row echelon form and the rule setting free variables to zero select a unique point in each required affine fibre. Starting at $r=1$ and iterating that deterministic rule constructs compatible lifts in $\widehat F$, hence in $\widehat M$. Thus $\widehat M\to\widehat{M''}$ is surjective; no countable family of arbitrary choices is made. [step 1.1, construct, algebra] [step 2.1]

4.1 Steps 2.1 and 3.1 make completion exact on finite modules. Applying it to a finite presentation of a finite module gives $\widehat E\otimes_E M\cong\widehat M$. Applying it to $0\to J\to E\to E/J\to0$ for each finitely generated ideal $J$ gives injectivity of $J\otimes_E\widehat E\to\widehat E$, and the ideal flatness criterion proves that $E\to\widehat E$ is flat. It is faithfully flat because it is local and its residue field is $k$. Krull intersection also gives injectivity: for $N=\bigcap_r\mathfrak m^r$, Noetherianity makes $N$ finite, Artin–Rees gives $N=\mathfrak m N$, and Nakayama gives $N=0$. [step 2.1, step 3.1, algebra] [step 3.1]

5.1 Apply step 4.1 to each stage. All $E_i$ inject into the same $C$, so their filtered colimit $H$ is their union inside $C$. The transition isomorphisms on residue quotients and finite Nakayama imply $\mathfrak m_j=\mathfrak m_iE_j$ whenever $i\to j$; hence $H$ is local and its maximal-adic quotients are the corresponding quotients of $C$. Thus $\widehat H=C$. [given, step 4.1, algebra] [step 4.1]

6.1 Let $I$ be any ideal of $H$. Since $C$ is Noetherian, finitely many elements $f_1,\ldots,f_m\in I$ generate $IC$. For any $h\in I$, choose one common stage $E_i$ containing $h,f_1,\ldots,f_m$. The faithfully flat map $E_i\to C$ contracts the finitely generated ideal $(f_1,\ldots,f_m)C$ to $(f_1,\ldots,f_m)E_i$, so $h$ already lies in that ideal in $H$. Hence $I=(f_1,\ldots,f_m)$ and $H$ is Noetherian. [step 4.1, step 5.1, choose, algebra] [step 5.1]

7.1 The field $k$ is a coefficient field of $H$ and its residue field; applying step 4.1 to the now-Noetherian local ring $H$ shows that $H\to\widehat H=C$ is faithfully flat. The construction uses finite generator selections and deterministic finite-dimensional recursions only. [step 4.1, step 5.1, step 6.1, algebra] [step 6.1] ∎
