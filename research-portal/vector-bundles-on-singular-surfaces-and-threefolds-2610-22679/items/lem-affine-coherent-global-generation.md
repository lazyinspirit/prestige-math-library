---
id: lem-affine-coherent-global-generation
kind: lemma
title: Finite global generation on an affine scheme
status: published
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - math:def-coherent-module-scheme
  - math:def-finite-type-finite-presentation-module-sheaf
  - math:thm-affine-quasi-coherent-equivalence
  - math:lem-associated-sheaf-sections-basic-open
  - math:thm-prime-spectrum-is-compact
  - math:lem-distinguished-subset-cover-detects-radical
  - math:def-affine-scheme-spectrum
  - math:def-affine-scheme
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-affine-open-subscheme
  - math:def-module-on-ringed-space
  - math:def-stalk-of-presheaf
  - math:def-restriction-sheaf-open-subspace
  - math:def-quasi-coherent-module-scheme
  - math:def-associated-sheaf-module-affine-scheme
  - math:def-sheaf-on-topological-space
  - math:lem-associated-sheaf-restriction-affine-open
  - math:lem-spectrum-localization-open-immersion
  - math:def-localisation-of-a-module
  - math:thm-localisation-of-modules-is-tensor-product
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  math:def-coherent-module-scheme: mathematical-premise
  math:def-finite-type-finite-presentation-module-sheaf: mathematical-premise
  math:thm-affine-quasi-coherent-equivalence: mathematical-premise
  math:lem-associated-sheaf-sections-basic-open: mathematical-premise
  math:thm-prime-spectrum-is-compact: mathematical-premise
  math:lem-distinguished-subset-cover-detects-radical: mathematical-premise
  math:def-affine-scheme-spectrum: mathematical-premise
  math:def-affine-scheme: mathematical-premise
  math:def-locally-noetherian-and-noetherian-scheme: mathematical-premise
  math:def-affine-open-subscheme: mathematical-premise
  math:def-module-on-ringed-space: mathematical-premise
  math:def-stalk-of-presheaf: mathematical-premise
  math:def-restriction-sheaf-open-subspace: mathematical-premise
  math:def-quasi-coherent-module-scheme: mathematical-premise
  math:def-associated-sheaf-module-affine-scheme: mathematical-premise
  math:def-sheaf-on-topological-space: mathematical-premise
  math:lem-associated-sheaf-restriction-affine-open: mathematical-premise
  math:lem-spectrum-localization-open-immersion: mathematical-premise
  math:def-localisation-of-a-module: mathematical-premise
  math:thm-localisation-of-modules-is-tensor-product: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
---

## Statement
Assume the Axiom of Choice. Let $X=\operatorname{Spec}A$ be a noetherian affine scheme and let $\mathcal F$ be a coherent $\mathcal O_X$-module. There are finitely many global sections $s_1,\ldots,s_m$ such that the morphism $\mathcal O_X^m\to\mathcal F$ sending the standard basis to these sections is surjective. For every open subscheme $U\subseteq X$, its restriction $\mathcal O_U^m\to\mathcal F|_U$ is surjective; equivalently, the restricted sections generate $\mathcal F|_U$, whether or not $U$ is affine.

## Statement references
[[math:def-coherent-module-scheme]]

[[math:thm-affine-quasi-coherent-equivalence]]

## Facts & Assumptions
**Given:** The Axiom of Choice, a commutative ring $A$ with $1$, the noetherian affine scheme $X=\operatorname{Spec}A$, and a coherent $\mathcal O_X$-module $\mathcal F$. A morphism of sheaves is called surjective when every target germ has a preimage germ. A family of sections generates a module sheaf when its induced morphism from the corresponding finite free sheaf is surjective. Explicitly, $\mathcal O_X^m(V)=\mathcal O_X(V)^m$ for an open $V$, with componentwise restriction; the morphism specified by $s_1,\ldots,s_m$ sends $(a_1,\ldots,a_m)$ on $V$ to $\sum_j a_j(s_j|_V)$. Linearity and compatibility with restriction follow from the module-sheaf axioms.

**Goal:** Construct finitely many global generating sections and prove that their restrictions generate on every open subscheme.

[F1] A coherent module is quasi-coherent and of finite type. Quasi-coherence means that locally on affine opens the module sheaf is associated to a module. Under the Axiom of Choice, finite type provides an affine open cover on each member of which finitely many sections generate the restricted sheaf. [[math:def-coherent-module-scheme]] [[math:def-quasi-coherent-module-scheme]] [[math:def-finite-type-finite-presentation-module-sheaf]]

[F2] Under the Axiom of Choice, the canonical map $\widetilde{\Gamma(X,\mathcal F)}\to\mathcal F$ is an isomorphism for quasi-coherent $\mathcal F$. The notation $\widetilde M$ denotes the associated module sheaf; for any $A$-module $M$ it has sections $M_f$ on $D(f)=\{\mathfrak p:f\notin\mathfrak p\}$, naturally in $M$ and restriction. [[math:thm-affine-quasi-coherent-equivalence]] [[math:def-associated-sheaf-module-affine-scheme]] [[math:lem-associated-sheaf-sections-basic-open]]

[F3] Distinguished opens form a basis of $X$, and $X$ is compact under the Axiom of Choice. If finitely many distinguished opens $D(h_i)$ cover $X$, with at least one member, then the $h_i$ generate the unit ideal: $1=\sum_i a_i h_i$ for some $a_i\in A$. [[math:def-affine-scheme-spectrum]] [[math:thm-prime-spectrum-is-compact]] [[math:lem-distinguished-subset-cover-detects-radical]]

[F4] On an affine scheme, under the Axiom of Choice, a finite family of global sections of an associated module sheaf generates that sheaf exactly when the corresponding elements generate its module. This includes the empty family and the zero module. [[math:def-finite-type-finite-presentation-module-sheaf]]

[F5] An affine scheme carries its spectrum structure sheaf. A scheme is noetherian when it is locally noetherian and quasi-compact. An open subscheme $U\subseteq X$ is equipped with $\mathcal O_U=\mathcal O_X|_U$; modules and their morphisms have sectionwise module structures and linear maps compatible with restriction. [[math:def-affine-scheme]] [[math:def-locally-noetherian-and-noetherian-scheme]] [[math:def-affine-open-subscheme]] [[math:def-module-on-ringed-space]]

[F6] A germ at $x$ is the equivalence class of a section on a neighbourhood of $x$, with equality meaning agreement on a smaller neighbourhood. For an open $U\subseteq X$ and open $V\subseteq U$, $(\mathcal F|_U)(V)=\mathcal F(V)$; restriction of morphisms uses these same component maps. [[math:def-stalk-of-presheaf]] [[math:def-restriction-sheaf-open-subspace]]

[F7] The localization map $A\to A_f$ identifies $\operatorname{Spec}(A_f)$ with the open subscheme $D(f)$, including its structure sheaf. On an affine open $W=\operatorname{Spec}C$ of $X$, $(\widetilde M)|_W\cong\widetilde{(C\otimes_A M)}$. For $C=A_f$, the canonical isomorphism $A_f\otimes_A M\cong M_f$ sends $(a/f^n)\otimes m$ to $am/f^n$. Thus $(\widetilde M)|_{D(f)}\cong\widetilde{M_f}$ as an associated module sheaf over $A_f$, compatibly with its global sections. The associated-sheaf comparison inherits AC. [[math:lem-spectrum-localization-open-immersion]] [[math:lem-associated-sheaf-restriction-affine-open]] [[math:thm-localisation-of-modules-is-tensor-product]]

[F8] For an $A$-module $M$, $M_f$ is localization at $\{1,f,f^2,\ldots\}$: every element is $m/f^a$, sums and scalar multiples use fraction arithmetic, and $m/f^a=n/f^b$ exactly when $f^c(f^b m-f^a n)=0$ for some $c\geq0$. For a submodule $N\subseteq M$ the same criterion shows that the localization map $N_f\to M_f$ is injective, so we regard $N_f$ as its image, consisting of fractions with numerator in $N$. [[math:def-localisation-of-a-module]]

[F9] The sheaf axiom includes the empty cover of the empty open set; in particular a module sheaf has zero module of sections over the empty set. [[math:def-sheaf-on-topological-space]]

## Proof
**Proof technique:** Reduce local generation to generation of localised modules, clear denominators, and use a finite distinguished-open cover.

1.1 Put $M=\Gamma(X,\mathcal F)$. By [F1] and [F2], $\mathcal F\cong\widetilde M$. If $X$ is empty, then $M=0$ by [F9], so the empty family gives the required surjection; its restriction to every open is also surjective. Henceforth suppose $X$ is nonempty. Restriction to any open $U$ preserves stalks: at $x\in U$, a representative $(V,s)$ for a germ on $X$ restricts to $(V\cap U,s|_{V\cap U})$, and all open neighbourhoods inside $U$ are open in $X$. These operations are inverse on germ classes by [F6] and identify the restricted morphism's stalk map with the original one. They therefore preserve surjectivity, and the sectionwise definition of the free sheaf identifies $\mathcal O_X^m|_U$ with $\mathcal O_U^m$ by [F5]. [F1, F2, F5, F6, F9, given]

2.1 By [F1], $X$ is covered by open sets on each of which finitely many sections generate $\mathcal F$. Refine this cover by all distinguished opens contained in its members; these still cover $X$ by [F3]. Compactness gives a finite subcover $D(f_1),\ldots,D(f_r)$, where $r\geq1$. Restricting a generating morphism from a member of the original cover to a distinguished open contained in it preserves surjectivity by step 1.1. Thus each $\mathcal F|_{D(f_i)}$ has a finite generating family of sections. [F1, F3, step 1.1]

3.1 By [F2] and [F8], each section in the generating family on $D(f_i)$ is represented by a fraction $m_{ij}/f_i^{n_{ij}}$ with $m_{ij}\in M$ and $n_{ij}\geq0$. Here $D(f_i)$ is the affine scheme $\operatorname{Spec}(A_{f_i})$, and the restriction of $\mathcal F\cong\widetilde M$ to it is the associated sheaf of the $A_{f_i}$-module $M_{f_i}$ by [F7]. These identifications respect the sections in [F2], so [F4], applied over the ring $A_{f_i}$, says that these fractions generate $M_{f_i}$. Since $f_i$ is invertible in $A_{f_i}$, their numerators $m_{ij}/1$ also generate $M_{f_i}$. Let $N\subseteq M$ consist of all $A$-linear combinations of the finitely many $m_{ij}$; it is a submodule by the module axioms. Fraction arithmetic in [F8] then gives $N_{f_i}=M_{f_i}$ for every $i$, with $N_{f_i}$ viewed inside $M_{f_i}$. [F2, F4, F7, F8, step 2.1, construct, algebra]

4.1 Let $t\in M$. For each $i$, the equality $N_{f_i}=M_{f_i}$ gives $t/1=n_i/f_i^{a_i}$ for some $n_i\in N$ and $a_i\geq0$. By [F8], $f_i^{b_i}(f_i^{a_i}t-n_i)=0$ for some $b_i\geq0$, whence $f_i^{a_i+b_i}t=f_i^{b_i}n_i\in N$. Increasing the exponent if necessary gives $k_i\geq1$ with $f_i^{k_i}t\in N$. By primality, $D(f_i^{k_i})=D(f_i)$, so these opens cover $X$. Apply [F3] with $h_i=f_i^{k_i}$ (and $r\geq1$) to obtain $1=\sum_i c_i f_i^{k_i}$ for suitable $c_i\in A$. Consequently $t=\sum_i c_i f_i^{k_i}t\in N$. As $t$ was arbitrary, $M=N$. [F3, F8, step 2.1, step 3.1, algebra]

5.1 The numerators in step 3.1 are global sections of $\mathcal F$ under [F2]. Since they generate $M$ by step 4.1, [F4] gives a surjective morphism $\mathcal O_X^m\to\mathcal F$, with the sectionwise formula in the Given paragraph. For any open subscheme $U$, step 1.1 identifies the stalks of its restriction with the original stalk maps, so the restricted morphism $\mathcal O_U^m\to\mathcal F|_U$ is surjective and is induced by the restricted global sections. This proves both assertions, including for non-affine $U$. The noetherian hypothesis is retained but is not needed in the argument. AC is inherited from the affine associated-sheaf results, the finite-type and affine generation criteria, and spectrum compactness in [F1]–[F4] and [F7]; the explicit stalk comparison and fraction calculation need no additional choice. [F1, F2, F3, F4, F5, F6, F7, step 1.1, step 3.1, step 4.1] ∎
