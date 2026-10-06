---
id: lem-derived-colimit-coefficient-and-category-change
kind: lemma
title: "Derived colimit commutes with coefficient change and admissible category change"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 4
proof_strategy: direct
justified_by: []
aliases: []
deps:
  - def-axiom-of-choice
  - lem-projective-representables-and-derived-colimits-of-module-diagrams
  - lem-contractible-cosimplicial-evaluation-computes-derived-colimit
  - def-derived-tensor-product-in-the-bounded-above-setting
  - lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms
  - thm-tensor-products-commute-with-arbitrary-direct-sums
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "The Stacks Project, Cohomology on Sites, Section 39"
      url: "https://stacks.math.columbia.edu/download/sites-cohomology.pdf"
      locator: "Lemmas 39.6 and 39.8 (tags 08Q8, 08QA), printed 95-96; explicit bounded-above projective-model scalar comparison"
---

## Statement

Assume the Axiom of Choice (AC) ([[def-axiom-of-choice]]). For a small
category $C$ and a map of commutative rings $R\to R'$ there is a canonical
isomorphism
$$L\operatorname*{colim}_{C^{\mathrm{op}}}F\otimes_R^{\mathbf L}R'\cong L\operatorname*{colim}_{C^{\mathrm{op}}}(F\otimes_R^{\mathbf L}R')$$
for bounded-above complexes $F$ of $R$-module diagrams, where the
right-hand scalar extension is computed pointwise
([[def-derived-tensor-product-in-the-bounded-above-setting]]). For a
degree-zero pointwise-flat diagram it is ordinary pointwise tensor. If
$u\colon D\to C$ is a functor and $W_\bullet$ is cosimplicial in $D$ such that
$\operatorname{Hom}_D(W_\bullet,V)$ and
$\operatorname{Hom}_C(uW_\bullet,U)$ are contractible for all $V\in D$ and
$U\in C$, then the canonical change-of-category map
$$L\operatorname*{colim}_{D^{\mathrm{op}}}u^*F\longrightarrow L\operatorname*{colim}_{C^{\mathrm{op}}}F$$
is an isomorphism for every degree-zero contravariant $R$-module diagram $F$.

## Facts & Assumptions

**Given:** AC; small categories $C,D$; a functor $u\colon D\to C$; a ring map $R\to R'$; a bounded-above $R$-module diagram complex $F$; a contractible cosimplicial object $W_\bullet$ in $D$ with $uW_\bullet$ again contractible against all test objects.

[F1] $F$ admits a supplied bounded-above projective replacement $G_\bullet$ whose terms are direct sums of representables; evaluation is exact, $\operatorname{colim}R_U=R$, and $L\operatorname{colim}_{C^{\mathrm{op}}}$ is computed by the bar complex ([[lem-projective-representables-and-derived-colimits-of-module-diagrams]]).

[F2] If $W_\bullet$ is cosimplicial with $\operatorname{Hom}_D(W_\bullet,V)$ contractible for all $V$, then for every contravariant module diagram $F$ the complex $F(W_\bullet)$ is canonically isomorphic to $L\operatorname{colim}_{D^{\mathrm{op}}}F$ in $D(R)$ ([[lem-contractible-cosimplicial-evaluation-computes-derived-colimit]]).

[F3] Tensoring a bounded-above flat complex with a bounded-above acyclic complex gives an acyclic total complex; hence bounded-above flat complexes preserve quasi-isomorphisms ([[lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms]]).

[F4] Tensor products commute with arbitrary direct sums of modules, and the bounded-above derived tensor product is represented by tensoring a bounded-above projective replacement ([[thm-tensor-products-commute-with-arbitrary-direct-sums]], [[def-derived-tensor-product-in-the-bounded-above-setting]]).



## Proof

1.1 Coefficient change on a common model. Choose the supplied representable-sum projective replacement $G_\bullet\to F$ of [F1]. Every term $G^n$ evaluates to free $R$-modules, and its terms are direct sums of the representables $R_U$, whose coefficient extension to $R'$ is again a direct sum of $R'$-representables; hence $G_\bullet\otimes_RR'$ is a complex of projective $R'$-module diagrams. At every object, $G_\bullet$ is a bounded-above complex of free $R$-modules resolving the value of $F$, so its ordinary tensor computes the pointwise derived scalar extension by [F4]. Thus the tensor complex is a projective model of $F\otimes_R^{\mathbf L}R'$, without asserting that it resolves ordinary tensor for nonflat values. [F1, F4]

1.2 Change of category. Assume now that $W_\bullet$ in $D$ and its image $uW_\bullet$ in $C$ satisfy the contractibility hypotheses. By [F2] applied in $D$ to $u^*F$ and in $C$ to $F$, both derived colimits are canonically identified with the same complex $u^*F(W_\bullet)=F(uW_\bullet)$: the first is computed by evaluation on $W_\bullet$ and the second by evaluation on $uW_\bullet$, and these complexes are equal because $(u^*F)(V)=F(uV)$. The canonical change-of-category map is induced by applying $u$ to the chains of the bar description of [F1], so under these identifications it is the identity; being an identification of the canonical models, it is an isomorphism independent of the chosen replacements. This makes precise that the comparison is canonical and not an arbitrary isomorphism of isomorphic objects. [F1, F2]

2.1 The comparison of derived colimits. By [F4], tensoring commutes with direct sums and with the quotient relations presenting a colimit (a linear map out of either quotient is the same compatible family of balanced pairings), so $\operatorname{colim}(G_\bullet\otimes_RR')\cong(\operatorname{colim}G_\bullet)\otimes_RR'$. Every term of $\operatorname{colim}G_\bullet$ is free over $R$, because $\operatorname{colim}R_U=R$ by [F1] and colimit commutes with direct sums, so the colimit of a direct sum of representables is a direct sum of copies of $R$; therefore $(\operatorname{colim}G_\bullet)\otimes_RR'$ also represents the derived scalar extension of $\operatorname{colim}G_\bullet$. By [F1] applied over $R$ and over $R'$, the left side of the displayed isomorphism is $(\operatorname{colim}G_\bullet)\otimes_R^{\mathbf L}R'$ and the right side is $\operatorname{colim}(G_\bullet\otimes_RR')$, and the two are equal on the common model; independence of the replacement is [F3]. [F1, F3, F4, step 1.1]

3.1 Pointwise-flat diagrams. If $F$ is degree-zero and pointwise flat, tensoring the exact resolution $G_\bullet\to F$ with $R'$ value by value is exact, so the derived scalar extension of every value is its ordinary tensor; hence the coefficient isomorphism of step 2.1 is the ordinary pointwise tensor. [step 2.1]

4.1 Scope. All tensors in the proof are ordinary module-diagram derived tensors over the fixed commutative rings $R,R'$; no simplicial-ring model structure, Quillen adjunction or monoidal enhancement is assumed. AC is used exactly through the supplied projective replacements and the contractible-cosimplicial evaluation lemmas [F1] and [F2]. [F1, F2, given] ∎ 