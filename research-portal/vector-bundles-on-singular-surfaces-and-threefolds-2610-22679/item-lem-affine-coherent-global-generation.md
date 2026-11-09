---
title: Finite global generation on an affine scheme
status: draft
research_item: lem-affine-coherent-global-generation
dependency_level: 0
---

PDF p. 15: Finite generating surjection onto Q

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-coherent-module-scheme](https://alphabetamath.cc/item/def-coherent-module-scheme)
- [math:def-finite-type-finite-presentation-module-sheaf](https://alphabetamath.cc/item/def-finite-type-finite-presentation-module-sheaf)
- [math:thm-affine-quasi-coherent-equivalence](https://alphabetamath.cc/item/thm-affine-quasi-coherent-equivalence)
- [math:lem-associated-sheaf-sections-basic-open](https://alphabetamath.cc/item/lem-associated-sheaf-sections-basic-open)
- [math:thm-prime-spectrum-is-compact](https://alphabetamath.cc/item/thm-prime-spectrum-is-compact)
- [math:lem-distinguished-subset-cover-detects-radical](https://alphabetamath.cc/item/lem-distinguished-subset-cover-detects-radical)
- [math:def-affine-scheme-spectrum](https://alphabetamath.cc/item/def-affine-scheme-spectrum)

## Statement
Assume the Axiom of Choice. Let $X=\operatorname{Spec}A$ be a noetherian affine scheme and let $\mathcal F$ be a coherent $\mathcal O_X$-module. There are finitely many global sections $s_1,\ldots,s_m$ such that the morphism $\mathcal O_X^m\to\mathcal F$ sending the standard basis to these sections is surjective. For every open subscheme $U\subseteq X$, its restriction $\mathcal O_U^m\to\mathcal F|_U$ is surjective; equivalently, the restricted sections generate $\mathcal F|_U$, whether or not $U$ is affine.

## Statement references
[math:def-coherent-module-scheme](https://alphabetamath.cc/item/def-coherent-module-scheme)

[math:thm-affine-quasi-coherent-equivalence](https://alphabetamath.cc/item/thm-affine-quasi-coherent-equivalence)

## Facts & Assumptions
**Given:** The Axiom of Choice, a commutative ring $A$ with $1$, the noetherian affine scheme $X=\operatorname{Spec}A$, and a coherent $\mathcal O_X$-module $\mathcal F$. A morphism of sheaves is called surjective when every target germ has a preimage germ. A family of sections generates a module sheaf when its induced morphism from the corresponding finite free sheaf is surjective.

**Goal:** Construct finitely many global generating sections and prove that their restrictions generate on every open subscheme.

[F1] A coherent module is quasi-coherent and of finite type. Under the Axiom of Choice, finite type provides an affine open cover on each member of which finitely many sections generate the restricted sheaf. [math:def-coherent-module-scheme](https://alphabetamath.cc/item/def-coherent-module-scheme) [math:def-finite-type-finite-presentation-module-sheaf](https://alphabetamath.cc/item/def-finite-type-finite-presentation-module-sheaf)

[F2] Under the Axiom of Choice, the canonical map $\widetilde{\Gamma(X,\mathcal F)}\to\mathcal F$ is an isomorphism for quasi-coherent $\mathcal F$. For any $A$-module $M$, its associated sheaf has sections $M_f$ on $D(f)=\{\mathfrak p:f\notin\mathfrak p\}$, naturally in $M$ and restriction. [math:thm-affine-quasi-coherent-equivalence](https://alphabetamath.cc/item/thm-affine-quasi-coherent-equivalence) [math:lem-associated-sheaf-sections-basic-open](https://alphabetamath.cc/item/lem-associated-sheaf-sections-basic-open)

[F3] Distinguished opens form a basis of $X$, and $X$ is compact under the Axiom of Choice. If finitely many distinguished opens $D(h_i)$ cover $X$, with at least one member, then the $h_i$ generate the unit ideal. [math:def-affine-scheme-spectrum](https://alphabetamath.cc/item/def-affine-scheme-spectrum) [math:thm-prime-spectrum-is-compact](https://alphabetamath.cc/item/thm-prime-spectrum-is-compact) [math:lem-distinguished-subset-cover-detects-radical](https://alphabetamath.cc/item/lem-distinguished-subset-cover-detects-radical)

[F4] On an affine scheme, under the Axiom of Choice, a finite family of global sections of an associated module sheaf generates that sheaf exactly when the corresponding elements generate its module. [math:def-finite-type-finite-presentation-module-sheaf](https://alphabetamath.cc/item/def-finite-type-finite-presentation-module-sheaf)

## Proof
**Proof technique:** Reduce local generation to generation of localised modules, clear denominators, and use a finite distinguished-open cover.

1.1 Put $M=\Gamma(X,\mathcal F)$. By [F1] and [F2], $\mathcal F\cong\widetilde M$. If $X$ is empty, then $M=0$ by the sheaf axiom on the empty cover, so the empty family gives the required surjection; its restriction to every open is also surjective. Henceforth suppose $X$ is nonempty. [F1, F2, given]

2.1 By [F1], $X$ is covered by open sets on each of which finitely many sections generate $\mathcal F$. Refine this cover by all distinguished opens contained in its members; these still cover $X$ by [F3]. Compactness gives a finite subcover $D(f_1),\ldots,D(f_r)$, where $r\geq1$. Restricting the generating morphism on a member of the original cover to a distinguished open contained in it preserves surjectivity, since the stalks at its points are unchanged. Thus each $\mathcal F|_{D(f_i)}$ has a finite generating family of sections. [F1, F3, step 1.1]

3.1 By [F2], each section in the generating family on $D(f_i)$ is represented by a fraction $m_{ij}/f_i^{n_{ij}}$ with $m_{ij}\in M$ and $n_{ij}\geq0$. On $D(f_i)$ the associated sheaf is the associated sheaf of the $A_{f_i}$-module $M_{f_i}$, as follows from the same basic-open section description. By [F4], these fractions generate $M_{f_i}$ over $A_{f_i}$. Since $f_i$ is invertible in $A_{f_i}$, their numerators $m_{ij}/1$ also generate $M_{f_i}$. Let $N\subseteq M$ be the submodule generated by all the finitely many $m_{ij}$. Then $N_{f_i}=M_{f_i}$ for every $i$. [F2, F4, step 2.1, construct]

4.1 Let $t\in M$. For each $i$, the equality $N_{f_i}=M_{f_i}$ means that some power $f_i^{k_i}t$ lies in $N$: this follows by writing $t/1$ as a finite linear combination of the $m_{ij}/1$ and clearing the finitely many denominators and any localisation equality. Choose each $k_i\geq1$. The opens $D(f_i^{k_i})=D(f_i)$ cover $X$, so [F3] gives $1=\sum_i a_i f_i^{k_i}$ for suitable $a_i\in A$. Consequently $t=\sum_i a_i f_i^{k_i}t\in N$. As $t$ was arbitrary, $M=N$. [F3, step 3.1, algebra]

5.1 The numerators in step 3.1 are global sections of $\mathcal F$ under [F2]. Since they generate $M$ by step 4.1, [F4] gives a surjective morphism $\mathcal O_X^m\to\mathcal F$. For any open subscheme $U$, the stalk at $x\in U$ of its restriction is the original stalk map at $x$, hence is surjective. The restricted morphism is therefore surjective and is induced by the restricted global sections. This proves both assertions, including for non-affine $U$. The noetherian hypothesis is not needed in the argument; the Axiom of Choice is inherited from [F1]–[F4]. [F1, F2, F3, F4, step 1.1, step 3.1, step 4.1] ∎
