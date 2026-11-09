---
title: Affine bundles and normal geometry
description: Establish the scheme conventions, module–bundle correspondence,
  stable classes, determinants and normal-extension tools used by the article.
  Connect affine curves and residue fields to the later support arguments.
status: published
dependency_level: 0
---

**Purpose:** Establish the scheme conventions, module–bundle correspondence, stable classes, determinants and normal-extension tools used by the article. Connect affine curves and residue fields to the later support arguments.

## Article scheme conventions

[Open item](item-def-article-conventions) · level 0

### Definition
Fix a base field $k$, assumed algebraically closed unless a statement specifies otherwise: every nonconstant polynomial in $k[t]$ has a root in $k$. A $k$-scheme is a scheme equipped with a morphism to $\operatorname{Spec}k$; a morphism of $k$-schemes commutes with these structure morphisms.

Write $\mathrm{Sch}_k$ for the category whose objects are quasi-compact, quasi-separated $k$-schemes and whose morphisms are $k$-morphisms. Quasi-compact means that every open cover has a finite subcover; quasi-separated means that the intersection of any two affine open subschemes is quasi-compact. The opposite category $\mathrm{Sch}_k^{\mathrm{op}}$ has the same objects and reverses all arrows. Thus a functor with domain $\mathrm{Sch}_k^{\mathrm{op}}$ is contravariant on $\mathrm{Sch}_k$: a $k$-morphism $X\to Y$ induces a map from the value at $Y$ to the value at $X$.

In the article, an affine $k$-scheme $\operatorname{Spec}A$ is assumed to be of finite type over $k$, meaning that its coordinate $k$-algebra $A$ is finitely generated. The dimension of a scheme is the supremum of the lengths of chains of strict inclusions of irreducible closed subsets. A vector bundle is a finite locally free $\mathcal O_X$-module. Its rank is the well-defined locally constant function $x\mapsto\dim_{\kappa(x)}(E\otimes_{\mathcal O_X}\kappa(x))$; it may vary between connected components. Having rank $r$ means this function is constantly $r$, equivalently that the bundle is locally isomorphic everywhere to $\mathcal O_X^r$. For a finite-dimensional scheme, critical rank means rank equal to the dimension of the scheme.

### Justification
The definitions of a scheme over a base and of its morphisms are those of [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base). The two compactness conditions are those of [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme); they select objects of the category and do not require schemes to be separated. Identity maps and composites of $k$-morphisms again commute with the structure maps, so these objects and morphisms form a category. Reversing identities and composition defines its opposite, and the stated direction of a contravariant functor is the direction of its action on the reversed arrow. Finite generation specifies the article’s convention for affine schemes. The well-definedness and local constancy of rank are supplied by [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank). The constant-rank and dimension convention is a comparison of two integers and makes no splitting or classification assertion.

## Affine bundles and finite projective modules

[Open item](item-lem-affine-bundle-module-interface) · level 0

### Statement
Assume the Axiom of Choice. For a commutative ring $A$, associated sheaf and global sections restrict to quasi-inverse equivalences between finite projective $A$-modules and finite locally free $\mathcal O_{\operatorname{Spec}A}$-modules. These equivalences preserve rank, finite direct sums, tensor products and duals. Every short exact sequence of vector bundles on an affine scheme splits.

Here a **finite projective module** is a finitely generated module $P$ with the lifting property for maps from $P$ through surjective module homomorphisms. A **vector bundle** means a finite locally free sheaf: each point has a neighbourhood on which it is isomorphic to a finite direct sum of copies of the structure sheaf. Its rank at a point is the number of copies there; the published definition establishes that this number is well-defined. The rank of a finite projective module at a prime $\mathfrak p$ is the rank of its free localization $P_{\mathfrak p}$. The duals are $P^\vee=\operatorname{Hom}_A(P,A)$ and $E^\vee=\mathcal Hom_{\mathcal O_X}(E,\mathcal O_X)$.

### Facts & Assumptions

**Given:** A commutative ring $A$, $X=\operatorname{Spec}A$, and the Axiom of Choice.

**Goal:** Establish the stated restricted equivalence, compatibility with the indicated operations, and splitting.

[F1] Associated sheaf and global sections are quasi-inverse equivalences between $A$-modules and quasi-coherent sheaves on $X$; finite locally free sheaves are quasi-coherent ([math:thm-affine-quasi-coherent-equivalence](https://alphabetamath.cc/item/thm-affine-quasi-coherent-equivalence), [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)).

[F2] The sets $D(f)=\{\mathfrak p:f\notin\mathfrak p\}$ form a basis; $X$ is compact. A finite family $D(f_i)$ covers $X$ exactly when the $f_i$ generate the unit ideal. The same holds for any fixed positive powers of the $f_i$ ([math:def-affine-scheme-spectrum](https://alphabetamath.cc/item/def-affine-scheme-spectrum), [math:thm-prime-spectrum-is-compact](https://alphabetamath.cc/item/thm-prime-spectrum-is-compact), [math:lem-distinguished-subset-cover-detects-radical](https://alphabetamath.cc/item/lem-distinguished-subset-cover-detects-radical)).

[F3] For an $A$-module $M$, the sections of $\widetilde M$ on $D(f)$ are $M_f$, naturally in $M$, and its stalk at $\mathfrak p$ is $M_{\mathfrak p}$ ([math:lem-associated-sheaf-sections-basic-open](https://alphabetamath.cc/item/lem-associated-sheaf-sections-basic-open), [math:lem-associated-sheaf-stalk-localization](https://alphabetamath.cc/item/lem-associated-sheaf-stalk-localization)).

[F4] A projective module is a direct summand of a free module, and a short exact sequence with projective quotient splits. Under AC, a direct summand of a free module is projective ([math:thm-projective-module-characterizations](https://alphabetamath.cc/item/thm-projective-module-characterizations), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)).

### Proof

**Proof technique:** direct; use finite principal covers and clear denominators.

1.1 First suppose $X$ is empty. Under AC a nonzero commutative ring has a prime ideal, so $A=0$. The only $A$-module and the only sheaf of modules on $X$ are zero; all assertions, including the empty rank function, follow. Hence assume $X$ is nonempty below. [F2, F4, assume-hyp]

2.1 We record a finite-generation patching argument. If an $A$-module $M$ has $M_{f_i}$ finitely generated for a finite principal cover, choose finitely many elements of $M$ whose images generate each $M_{f_i}$: clear the denominators of local generators. Let $N$ be the submodule they generate. For any $m\in M$, each $m/1$ lies in $N_{f_i}$, so some power $f_i^{n_i}m$ lies in $N$. By [F2] suitable coefficients give $1=\sum_i a_i f_i^{n_i}$, whence $m=\sum_i a_i f_i^{n_i}m\in N$. Thus $M$ is finitely generated. [F2, construct, step 1.1]

3.1 If, in addition, each $M_{f_i}$ is finite free, choose a surjection $q:A^n\to M$ using step 2.1 and put $K=\ker q$. Localization is exact: fractions representing a relation become actual relations after multiplication by a denominator, and the same argument detects zero fractions. Hence $K_{f_i}=\ker(q_{f_i})$. Since the free module $M_{f_i}$ admits lifts of its finitely many basis vectors through $q_{f_i}$, this localized surjection splits; consequently $K_{f_i}$ is a direct summand of $A_{f_i}^n$ and is finitely generated by the projections of the standard basis. Step 2.1 applied to $K$ shows that $K$ is finitely generated. Thus $M$ is finitely presented: there is an exact sequence $A^m\to A^n\xrightarrow q M\to0$ with $m,n$ finite. [step 2.1, construct]

4.1 A finite presentation also permits clearing denominators of maps: for any $A$-module $N$ and $f\in A$, every $A_f$-linear map $M_f\to N_f$ is $f^{-k}s_f$ for some $k\ge0$ and $A$-linear map $s:M\to N$. Indeed choose images in $N$ for the finitely many generators after clearing a common denominator; the finitely many relations vanish after localization, so multiplying all chosen images by one further power of $f$ makes every relation vanish in $N$. The resulting assignment defines $s$. Moreover, if a map from the finitely generated module $M$ becomes zero after localization at $f$, a single power of $f$ annihilates that map: take a common power killing the images of its finite generating set. [step 3.1, construct]

5.1 For $M$ as in step 3.1, the localized surjection $q_{f_i}:A_{f_i}^n\to M_{f_i}$ has a section $t_i$. By step 4.1, after multiplying $t_i$ by a power of $f_i$ it is the localization of an $A$-linear map $s_i:M\to A^n$. Multiplying by a further power if necessary gives $q s_i=f_i^{N_i}\operatorname{id}_M$ as maps over $A$. Since the powers $f_i^{N_i}$ generate the unit ideal, choose $a_i$ with $\sum_i a_i f_i^{N_i}=1$. Then $s=\sum_i a_i s_i$ satisfies $q s=\operatorname{id}_M$. Thus $M$ is a direct summand of $A^n$, and is finite projective by [F4]. [F2, F4, step 3.1, step 4.1]

6.1 Let $E$ be finite locally free. By [F1], $E\cong\widetilde M$ for $M=\Gamma(X,E)$. Refine its local free charts by distinguished opens and use compactness to obtain a finite cover $D(f_i)$ on which $E\cong\mathcal O^{r_i}$. By [F3], $M_{f_i}\cong A_{f_i}^{r_i}$. Steps 3.1 and 5.1 show that $M$ is finite projective, including the finite-presentation assertion needed for the restriction of the equivalence. [F1, F2, F3, step 3.1, step 5.1]

7.1 Conversely, let $P$ be finite projective. A finite generating surjection $A^n\to P$ splits by its lifting property, so $P$ is the image of an idempotent matrix $e$ on $A^n$. At a prime $\mathfrak p$, the reduction of $e$ over the residue field is an idempotent and therefore has a basis in which it is $\operatorname{diag}(I_r,0)$. Lift that change-of-basis matrix to $A_{\mathfrak p}$; its determinant is a unit there, hence it is invertible. After this change of basis, the upper-left $r\times r$ block of $e$ is invertible at $\mathfrak p$. Shrinking to a principal neighbourhood of $\mathfrak p$ makes both matrices invertible. Elementary block row and column operations then identify the image of $e$ with the direct sum of a free rank-$r$ module and the image of an idempotent matrix $d$ whose entries vanish modulo $\mathfrak p$. More explicitly, the image and kernel of $e$ split the ambient module; the invertible upper-left block gives a rank-$r$ free summand of the image and reduces the remaining idempotent to zero modulo $\mathfrak p$. The determinant of $I-d$ is therefore outside $\mathfrak p$; after a further principal shrinking it is invertible. Since $d(I-d)=0$, this forces $d=0$ there. Hence $P_f\cong A_f^r$ on a principal neighbourhood of each prime. By [F3], $\widetilde P$ is finite locally free. [F2, F3, F4, construct, step 6.1]

8.1 Steps 6.1 and 7.1 show that the quasi-inverse functors of [F1] take precisely the stated subcategories into one another, so their unit and counit restrict to a quasi-inverse equivalence. The localization $P_{\mathfrak p}$ is free by step 7.1, and [F3] identifies it with the stalk of $\widetilde P$; therefore its rank agrees with the bundle rank in the published definition. This also makes the module rank well-defined. [F1, F3, step 6.1, step 7.1]

9.1 For finite projective $P,Q$, the canonical sheaf maps $\widetilde P\oplus\widetilde Q\to\widetilde{P\oplus Q}$, $\widetilde P\otimes\widetilde Q\to\widetilde{P\otimes_A Q}$, and $\widetilde{P^\vee}\to\mathcal Hom(\widetilde P,\mathcal O_X)$ are isomorphisms. Indeed, use a common principal cover on which $P$ and $Q$ are finite free; on each member these maps are the standard finite-free identifications, including $\operatorname{Hom}_{A_f}(A_f^r,A_f)\cong A_f^r$. For the dual, the identification $(P^\vee)_f\cong\operatorname{Hom}_{A_f}(P_f,A_f)$ follows either from the finite presentation in step 3.1 and clearing denominators as in step 4.1, or from the finite free-summand representation of $P$. Isomorphism of sheaf maps is local. The inverse equivalence consequently preserves the same operations up to their canonical isomorphisms. [F1, F3, step 3.1, step 4.1, step 7.1, step 8.1]

10.1 Let $0\to E'\to E\to E''\to0$ be a short exact sequence of vector bundles on $X$. By [F1] write it as associated sheaves of module maps $P'\to P\xrightarrow q P''$. Localization identifies their stalks with the localizations of these maps by [F3]. Exactness at all stalks implies exactness of $0\to P'\to P\to P''\to0$: a module whose localization at every prime is zero is zero, since a nonzero element has a proper annihilator contained in a prime. Apply this to the kernel, homology and cokernel, using exactness of localization. By step 6.1, $P''$ is projective; [F4] gives a section of $q$. Its associated sheaf is a section of $E\to E''$, and the original sequence splits. [F1, F3, F4, step 6.1, step 9.1]

11.1 Steps 8.1, 9.1 and 10.1 prove all assertions. AC is used through the cited affine equivalence, compactness and prime-ideal consequences, and the cited projective-module characterization. [F1, F2, F4, step 8.1, step 9.1, step 10.1] ∎



## Finite global generation on an affine scheme

[Open item](item-lem-affine-coherent-global-generation) · level 0

### Statement
Assume the Axiom of Choice. Let $X=\operatorname{Spec}A$ be a noetherian affine scheme and let $\mathcal F$ be a coherent $\mathcal O_X$-module. There are finitely many global sections $s_1,\ldots,s_m$ such that the morphism $\mathcal O_X^m\to\mathcal F$ sending the standard basis to these sections is surjective. For every open subscheme $U\subseteq X$, its restriction $\mathcal O_U^m\to\mathcal F|_U$ is surjective; equivalently, the restricted sections generate $\mathcal F|_U$, whether or not $U$ is affine.

### Statement references
[math:def-coherent-module-scheme](https://alphabetamath.cc/item/def-coherent-module-scheme)

[math:thm-affine-quasi-coherent-equivalence](https://alphabetamath.cc/item/thm-affine-quasi-coherent-equivalence)

### Facts & Assumptions
**Given:** The Axiom of Choice, a commutative ring $A$ with $1$, the noetherian affine scheme $X=\operatorname{Spec}A$, and a coherent $\mathcal O_X$-module $\mathcal F$. A morphism of sheaves is called surjective when every target germ has a preimage germ. A family of sections generates a module sheaf when its induced morphism from the corresponding finite free sheaf is surjective.

**Goal:** Construct finitely many global generating sections and prove that their restrictions generate on every open subscheme.

[F1] A coherent module is quasi-coherent and of finite type. Under the Axiom of Choice, finite type provides an affine open cover on each member of which finitely many sections generate the restricted sheaf. [math:def-coherent-module-scheme](https://alphabetamath.cc/item/def-coherent-module-scheme) [math:def-finite-type-finite-presentation-module-sheaf](https://alphabetamath.cc/item/def-finite-type-finite-presentation-module-sheaf)

[F2] Under the Axiom of Choice, the canonical map $\widetilde{\Gamma(X,\mathcal F)}\to\mathcal F$ is an isomorphism for quasi-coherent $\mathcal F$. For any $A$-module $M$, its associated sheaf has sections $M_f$ on $D(f)=\{\mathfrak p:f\notin\mathfrak p\}$, naturally in $M$ and restriction. [math:thm-affine-quasi-coherent-equivalence](https://alphabetamath.cc/item/thm-affine-quasi-coherent-equivalence) [math:lem-associated-sheaf-sections-basic-open](https://alphabetamath.cc/item/lem-associated-sheaf-sections-basic-open)

[F3] Distinguished opens form a basis of $X$, and $X$ is compact under the Axiom of Choice. If finitely many distinguished opens $D(h_i)$ cover $X$, with at least one member, then the $h_i$ generate the unit ideal. [math:def-affine-scheme-spectrum](https://alphabetamath.cc/item/def-affine-scheme-spectrum) [math:thm-prime-spectrum-is-compact](https://alphabetamath.cc/item/thm-prime-spectrum-is-compact) [math:lem-distinguished-subset-cover-detects-radical](https://alphabetamath.cc/item/lem-distinguished-subset-cover-detects-radical)

[F4] On an affine scheme, under the Axiom of Choice, a finite family of global sections of an associated module sheaf generates that sheaf exactly when the corresponding elements generate its module. [math:def-finite-type-finite-presentation-module-sheaf](https://alphabetamath.cc/item/def-finite-type-finite-presentation-module-sheaf)

### Proof
**Proof technique:** Reduce local generation to generation of localised modules, clear denominators, and use a finite distinguished-open cover.

1.1 Put $M=\Gamma(X,\mathcal F)$. By [F1] and [F2], $\mathcal F\cong\widetilde M$. If $X$ is empty, then $M=0$ by the sheaf axiom on the empty cover, so the empty family gives the required surjection; its restriction to every open is also surjective. Henceforth suppose $X$ is nonempty. [F1, F2, given]

2.1 By [F1], $X$ is covered by open sets on each of which finitely many sections generate $\mathcal F$. Refine this cover by all distinguished opens contained in its members; these still cover $X$ by [F3]. Compactness gives a finite subcover $D(f_1),\ldots,D(f_r)$, where $r\geq1$. Restricting the generating morphism on a member of the original cover to a distinguished open contained in it preserves surjectivity, since the stalks at its points are unchanged. Thus each $\mathcal F|_{D(f_i)}$ has a finite generating family of sections. [F1, F3, step 1.1]

3.1 By [F2], each section in the generating family on $D(f_i)$ is represented by a fraction $m_{ij}/f_i^{n_{ij}}$ with $m_{ij}\in M$ and $n_{ij}\geq0$. On $D(f_i)$ the associated sheaf is the associated sheaf of the $A_{f_i}$-module $M_{f_i}$, as follows from the same basic-open section description. By [F4], these fractions generate $M_{f_i}$ over $A_{f_i}$. Since $f_i$ is invertible in $A_{f_i}$, their numerators $m_{ij}/1$ also generate $M_{f_i}$. Let $N\subseteq M$ be the submodule generated by all the finitely many $m_{ij}$. Then $N_{f_i}=M_{f_i}$ for every $i$. [F2, F4, step 2.1, construct]

4.1 Let $t\in M$. For each $i$, the equality $N_{f_i}=M_{f_i}$ means that some power $f_i^{k_i}t$ lies in $N$: this follows by writing $t/1$ as a finite linear combination of the $m_{ij}/1$ and clearing the finitely many denominators and any localisation equality. Choose each $k_i\geq1$. The opens $D(f_i^{k_i})=D(f_i)$ cover $X$, so [F3] gives $1=\sum_i a_i f_i^{k_i}$ for suitable $a_i\in A$. Consequently $t=\sum_i a_i f_i^{k_i}t\in N$. As $t$ was arbitrary, $M=N$. [F3, step 3.1, algebra]

5.1 The numerators in step 3.1 are global sections of $\mathcal F$ under [F2]. Since they generate $M$ by step 4.1, [F4] gives a surjective morphism $\mathcal O_X^m\to\mathcal F$. For any open subscheme $U$, the stalk at $x\in U$ of its restriction is the original stalk map at $x$, hence is surjective. The restricted morphism is therefore surjective and is induced by the restricted global sections. This proves both assertions, including for non-affine $U$. The noetherian hypothesis is not needed in the argument; the Axiom of Choice is inherited from [F1]–[F4]. [F1, F2, F3, F4, step 1.1, step 3.1, step 4.1] ∎

## Kernels of surjections of vector bundles

[Open item](item-lem-surjection-kernel-bundle) · level 0

### Statement
Let $X$ be a scheme and $f:E\to F$ a surjective morphism of finite locally free $\mathcal O_X$-modules. Then $f$ splits locally and $\ker f$ is finite locally free, with rank function $\operatorname{rank}E-\operatorname{rank}F$.

In particular, if $E$ has constant rank $r$ and $s:E\to\mathcal O_X$ is a morphism, let $I=\operatorname{im}s\subseteq\mathcal O_X$ and let $U=X\setminus V(I)$, where $V(I)$ is the closed subset defined locally by the coefficients of $s$. Then $\ker(s|_U)=(\ker s)|_U$ is a vector bundle of rank $r-1$ on $U$; if $r=0$, this assertion is understood on the empty set $U$.

### Facts & Assumptions
[F1] By [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank), a finite locally free module has, near each point, a finite free basis; its rank is independent of the chosen chart. A vector bundle here means a finite locally free $\mathcal O_X$-module.

### Proof
**Given:** A scheme $X$ and a surjection $f:E\to F$ as in the statement.

**Goal:** Construct local splittings and bases for the kernels, and apply the result to $s$ on $U$.

1.1 Fix $x\in X$ and trivialize $E$ and $F$ near $x$, of ranks $n$ and $m$. Surjectivity on the stalk at $x$ implies surjectivity of the induced map of vector spaces over the residue field $\kappa(x)$. Its matrix therefore has an $m\times m$ minor nonzero at $x$; for $m=0$ use the empty minor, equal to $1$. After shrinking around $x$, the corresponding determinant is a unit. Permuting the basis of $E$ and applying the inverse of this minor to the chosen $m$ columns gives a right inverse $t:F\to E$ on this neighbourhood. In particular $m\le n$. [given, F1, construct]

2.1 On that neighbourhood, $E=\ker f\oplus t(F)$: every $e$ equals $(e-tf(e))+tf(e)$, and the intersection is zero. More explicitly, the remaining $n-m$ basis vectors, corrected by subtracting their images under $tf$, form a basis of $\ker f$; their independent coordinates in the unselected positions prove independence and the displayed decomposition proves spanning. Thus the kernel is finite locally free of rank $n-m$, and $t$ is the required local splitting. Since $x$ was arbitrary, the conclusion holds on $X$. [step 1.1, F1, algebra]

3.1 For $s:E\to\mathcal O_X$, on a trivializing neighbourhood its image ideal is generated by the finitely many coefficients of $s$, so these local ideals define $V(I)$. At each point of its complement at least one coefficient is a unit after shrinking; hence $s|_U$ is surjective. Restriction to an open set preserves kernels, because kernels are computed sectionwise. Applying the preceding construction with target rank $1$ proves the stated rank and local freeness. If $r=0$, $I=0$ and $U$ is empty. [given, F1, step 2.1, algebra] ∎

## Exterior powers and determinant of an algebraic bundle

[Open item](item-def-exterior-determinant-bundles) · level 0

### Definition

Let $X$ be a scheme, $E$ a locally free $\mathcal O_X$-module of constant finite rank $r\geq 0$, and $i\geq 0$ an integer. Here locally free of rank $r$ means that $X$ has an open cover on which $E$ is isomorphic to $\mathcal O_X^r$; such a sheaf is also called a rank-$r$ algebraic vector bundle.

For an open $U\subseteq X$, form the degree-$i$ part of the exterior algebra $T_{\mathcal O_X(U)}(E(U))/(v\otimes v:v\in E(U))$, where $T$ is the tensor algebra and the denominator is the two-sided ideal generated by the displayed tensors. Restriction maps make these modules a presheaf. Define $\Lambda^i E$ to be its sheafification. In particular, $\Lambda^0 E=\mathcal O_X$ canonically. Define the **determinant line bundle** by $\det E=\Lambda^r E$; a line bundle, or invertible sheaf, is a locally free module of rank one. Its isomorphism class is an element of $\operatorname{Pic}(X)$, the group of isomorphism classes of line bundles under tensor product.

The sheaf $\Lambda^iE$ is locally free of rank $\binom ri$, with the convention $\binom ri=0$ for $i>r$; hence it is zero for $i>r$. For every scheme morphism $f:Y\to X$, there is a canonical isomorphism $f^*(\Lambda^i E)\cong\Lambda^i(f^*E)$, natural in $E$ and compatible with composition of morphisms. In particular $f^*(\det E)\cong\det(f^*E)$. Here $f^*$ is the usual pullback of modules, locally given by extension of scalars.

### Definition references

[math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)

[math:def-exterior-algebra-of-a-finite-free-module](https://alphabetamath.cc/item/def-exterior-algebra-of-a-finite-free-module)

[math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme)

### Facts & Assumptions

**Given:** A scheme $X$, a locally free $\mathcal O_X$-module $E$ of constant rank $r\geq0$, an integer $i\geq0$, and, when base change is considered, a scheme morphism $f:Y\to X$.

**Goal:** Justify the construction, its ranks, determinant, and base-change isomorphisms.

[F1] A rank-$r$ locally free module has open trivializations $E|_U\cong\mathcal O_U^r$. [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)

[F2] For a free module with ordered basis $e_1,\ldots,e_r$ over a commutative ring, the degree-$i$ exterior power has basis $e_{j_1}\wedge\cdots\wedge e_{j_i}$ for $1\leq j_1<\cdots<j_i\leq r$; the empty wedge is the degree-zero basis element. [math:def-exterior-algebra-of-a-finite-free-module](https://alphabetamath.cc/item/def-exterior-algebra-of-a-finite-free-module) [math:lem-exterior-algebra-basis-monomials](https://alphabetamath.cc/item/lem-exterior-algebra-basis-monomials)

[F3] Sheafification has its universal property for maps from a presheaf to a sheaf. [math:thm-sheafification-universal-property](https://alphabetamath.cc/item/thm-sheafification-universal-property)

[F4] The Picard group consists of isomorphism classes of invertible sheaves under tensor product. [math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme)

### Justification

1.1 Restriction and any module homomorphism preserve tensors of the form $v\otimes v$, so they induce maps on the graded quotients, preserving identities and composition. Thus the displayed degree-$i$ modules form a presheaf, whose sheafification exists by [F3]; the resulting construction is functorial in $E$. On a trivializing open $U$, [F2] identifies the presheaf on every open subset of $U$ with the finite free sheaf having the increasing wedges as its basis. These identifications commute with restrictions, so sheafification gives that same free sheaf on $U$. [F1, F2, F3]

2.1 There are $\binom ri$ increasing $i$-tuples, none when $i>r$, and exactly one when $i=0$ or $i=r$. Consequently the ranks and zero assertion follow locally and hence on $X$; the empty wedge identifies $\Lambda^0E$ with $\mathcal O_X$. The top exterior power is locally free of rank one, including when $r=0$, and therefore defines the stated Picard class. [F2, F4, step 1.1]

3.1 On a trivializing open $U$, pullback sends the basis of $E$ to a basis of $f^*E$ on $f^{-1}U$. Send the pullback of each increasing wedge to the wedge of the pulled-back basis vectors. This is an isomorphism by [F2]. A change of basis acts on the exterior bases by the corresponding minors: expanding wedges multilinearly gives these coefficients, including over rings of arbitrary characteristic. Pulling back the coefficients gives exactly the minors of the pulled-back change-of-basis matrix. Thus the local isomorphisms agree on overlaps and glue. The same wedge formula shows naturality and compatibility with composition; taking $i=r$ gives the determinant assertion. [given, F1, F2, step 1.1, algebra] ∎

## Stable triviality and stable bundle equivalence

[Open item](item-def-stably-free-bundles) · level 0

### Definition
Let $X$ be a scheme. A vector bundle on $X$ means a locally free $\mathcal O_X$-module of finite rank. Write $\mathcal O_X^N$ for the direct sum of $N$ copies of the structure sheaf, with $\mathcal O_X^0=0$; these are the trivial bundles. Direct sums and isomorphisms below are taken as $\mathcal O_X$-modules.

Bundles $E$ and $F$ are **stably isomorphic** if, for some integer $N\geq 0$, there is an isomorphism $E\oplus\mathcal O_X^N\cong F\oplus\mathcal O_X^N$. A bundle $E$ of constant rank $r\geq 0$ is **stably trivial** if, for some integer $N\geq 0$, $E\oplus\mathcal O_X^N\cong\mathcal O_X^{r+N}$. It is **trivial** if $E\cong\mathcal O_X^r$. Stable triviality is stable isomorphism to $\mathcal O_X^r$; the definition itself does not assert cancellation of the trivial summand.

### Definition references
[math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)

### Facts & Assumptions
[F1] A finite-rank locally free sheaf is locally isomorphic to a finite free sheaf, and its rank is independent of the chosen local chart. See [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank).

### Justification
**Given:** A scheme $X$ and finite-rank vector bundles on $X$.

**Goal:** The displayed conditions are well-defined and stable isomorphism is an equivalence relation.

1.1 On common local trivializing neighbourhoods, the direct sum of bundles with local ranks $r$ and $s$ is isomorphic to $\mathcal O_X^{r+s}$. Thus the direct sums in the definition are bundles; their ranks and the stated constant rank $r$ are independent of the chosen charts by [F1]. [F1]

2.1 The identity isomorphism with $N=0$ gives reflexivity, and an isomorphism can be inverted, giving symmetry. If $E\oplus\mathcal O_X^N\cong F\oplus\mathcal O_X^N$ and $F\oplus\mathcal O_X^M\cong G\oplus\mathcal O_X^M$, add $\mathcal O_X^M$ to the first isomorphism and $\mathcal O_X^N$ to the second, then compose them using the canonical reassociation and permutation of finite direct sums. This gives $E\oplus\mathcal O_X^{N+M}\cong G\oplus\mathcal O_X^{N+M}$, proving transitivity. Finally, $\mathcal O_X^r\oplus\mathcal O_X^N\cong\mathcal O_X^{r+N}$, so the stated form of stable triviality is exactly stable isomorphism to $\mathcal O_X^r$. [step 1.1, algebra] ∎

### Remarks
The article reports a nontrivial stably trivial rank $2$ bundle on a smooth complex affine fourfold, attributed to Mohan Kumar. This definition does not establish that example or a cancellation theorem.

## Normalization of an affine integral curve

[Open item](item-lem-affine-curve-normalization-interface) · level 0

### Statement
Assume the Axiom of Choice. Let $k$ be a perfect field and $T=\operatorname{Spec}A$ an integral affine curve of finite type over $k$: thus $A$ is a finitely generated $k$-algebra which is a domain of Krull dimension one. Let $K=\operatorname{Frac}(A)$ and let $B$ be the set of elements of $K$ integral over $A$, meaning roots of monic polynomials with coefficients in $A$. The normalization of $T$ is $\widetilde T=\operatorname{Spec}B$, with its morphism $\nu:\widetilde T\to T$ induced by inclusion. Then $\widetilde T$ is affine and smooth over $k$, and $\nu$ is finite. If $k$ is algebraically closed, every closed point of $T$ and $\widetilde T$ has residue field $k$, and the set of points in the fiber over each closed point of $T$ is nonempty and finite; each induced residue-field map in such a fiber is an isomorphism.

### Facts & Assumptions

**Given:** AC, a perfect field $k$, and the domain $A$ and normalization ring $B$ in the statement.

**Goal:** Establish finiteness and smoothness of the normalization, then the asserted properties of its closed fibers when $k$ is algebraically closed.

[F1] The integral closure of a finite-type domain over a field in its fraction field is a finite module over that domain ([math:thm-integral-closure-finite-finite-type-domain-over-field](https://alphabetamath.cc/item/thm-integral-closure-finite-finite-type-domain-over-field)). Integral elements form a subring, and integrality is transitive ([math:cor-integral-elements-form-a-subring](https://alphabetamath.cc/item/cor-integral-elements-form-a-subring), [math:thm-transitivity-of-integrality](https://alphabetamath.cc/item/thm-transitivity-of-integrality)).

[F2] Assuming AC, an injective integral extension of nonzero rings preserves Krull dimension ([math:cor-dimension-preserved-by-integral-extensions](https://alphabetamath.cc/item/cor-dimension-preserved-by-integral-extensions)). A morphism with an affine cover of its target whose inverse images are affine with module-finite coordinate rings is finite ([math:lem-finite-morphism-affine](https://alphabetamath.cc/item/lem-finite-morphism-affine)).

[F3] Assuming AC, an integral separated finite-type one-dimensional normal scheme over a perfect field is smooth over that field. Normal means that each local ring is an integrally closed domain ([math:thm-normal-curve-is-nonsingular](https://alphabetamath.cc/item/thm-normal-curve-is-nonsingular)).

[F4] Assuming AC, a prime of a ring lifts to a prime of any integral extension containing it; for an integral extension, an upstairs prime is maximal exactly when its contraction is maximal ([math:thm-lying-over](https://alphabetamath.cc/item/thm-lying-over), [math:cor-contraction-of-maximal-ideals-integral-extension](https://alphabetamath.cc/item/cor-contraction-of-maximal-ideals-integral-extension)).

[F5] Over an algebraically closed field, every maximal ideal of a polynomial ring in finitely many variables is an evaluation ideal, and its quotient is the base field ([math:cor-weak-nullstellensatz-algebraically-closed-coordinate-form](https://alphabetamath.cc/item/cor-weak-nullstellensatz-algebraically-closed-coordinate-form)). For finitely many pairwise comaximal ideals, the map to the product of their quotients is surjective ([math:thm-chinese-remainder-theorem-for-comaximal-ideals](https://alphabetamath.cc/item/thm-chinese-remainder-theorem-for-comaximal-ideals)).

[A1] AC is the assertion that every family of nonempty sets has a choice function; it is used through the cited dimension, finite-morphism, normal-curve and lying-over results ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)).

### Proof

1.1 By [F1], $B$ is a subring of $K$ containing $A$ and a finite $A$-module. It is therefore a domain, and its fraction field is $K$: it lies inside $K$ and contains $A$. It is also a finite-type $k$-algebra, since a finite set of $A$-module generators generates it as an $A$-algebra and $A$ is finite type over $k$. The inclusion $A\subseteq B$ is integral by the definition of $B$. Its spectrum is affine by construction, and the one-affine-cover criterion in [F2] makes $\nu$ finite. [F1, F2, A1, given]

2.1 The ring $B$ is integrally closed in $K$: if $x\in K$ is integral over $B$, transitivity in [F1] makes $x$ integral over $A$, so $x\in B$. For any prime $\mathfrak q$ of $B$, the localization $B_{\mathfrak q}$ is integrally closed in $K$. Indeed, if $x\in K$ satisfies a monic equation over $B_{\mathfrak q}$, choose $s\in B\setminus\mathfrak q$ clearing all coefficient denominators. Multiplying the equation of degree $n$ by $s^n$ shows that $sx$ satisfies a monic equation over $B$; hence $sx\in B$ and $x\in B_{\mathfrak q}$. Thus $\operatorname{Spec}B$ is normal. [F1, step 1.1, algebra]

3.1 By [F2], $\dim B=\dim A=1$. The scheme $\operatorname{Spec}B$ is integral, separated and finite type over $k$ by step 1.1, and normal by step 2.1. The perfect-field theorem [F3] therefore makes it smooth over $k$. [F2, F3, A1, given, step 1.1, step 2.1]

4.1 Suppose $k$ is algebraically closed. For either $R=A$ or $R=B$, write $R$ as a quotient of a finite polynomial algebra over $k$. A maximal ideal of $R$ pulls back to a maximal ideal of that polynomial algebra, whose quotient is $k$ by [F5]. Consequently every closed point of $\operatorname{Spec}R$ has residue field $k$. [F5, given, step 1.1, step 3.1]

5.1 Let $\mathfrak m$ be a maximal ideal of $A$. By [F4], there is a prime of $B$ over $\mathfrak m$, and every such prime is maximal. The quotient $C=B/\mathfrak m B$ is a finite-dimensional vector space over $A/\mathfrak m=k$, because $B$ is a finite $A$-module. Its prime ideals are exactly the primes of $B$ over $\mathfrak m$, and they are maximal. If $\mathfrak n_1,\ldots,\mathfrak n_r$ are distinct such ideals in $C$, they are pairwise comaximal; [F5] gives a surjection $C\to\prod_i C/\mathfrak n_i$. Each factor is a nonzero $k$-vector space, so $r\leq\dim_k C$. Thus there can be only finitely many points in the fiber, and it is nonempty. By step 4.1 both residue fields at each such point are $k$, and their map is a $k$-algebra map, hence the identity under these identifications. This proves all assertions. [F4, F5, A1, step 1.1, step 4.1, algebra] ∎



## Residue fields and normalization point degrees

[Open item](item-lem-algebraically-closed-residue-fields) · level 0

### Statement
Let $k$ be an algebraically closed field. Every closed point of a finite-type $k$-scheme has residue field canonically equal to $k$ via its structure map. If $f:Y\to X$ is a finite surjective morphism between finite-type $k$-schemes, then the fiber over each closed point $x\in X$ is a nonempty finite set of closed points of $Y$. Each such point $y$ has residue field $k$, and its zero-cycle pushforward is $f_*[y]=[x]$.

Here a zero-cycle is a finite integral linear combination of closed points. For a finite morphism, the pushforward of a closed point is defined by $f_*[y]=[\kappa(y):\kappa(f(y))][f(y)]$; the field degree is finite. A finite morphism is one whose inverse image of every affine open $\operatorname{Spec}A$ is affine, say $\operatorname{Spec}B$, with $B$ a finite $A$-module.

### Statement references
[math:cor-weak-nullstellensatz-algebraically-closed-coordinate-form](https://alphabetamath.cc/item/cor-weak-nullstellensatz-algebraically-closed-coordinate-form)

### Facts & Assumptions
[F1] For algebraically closed $k$, every maximal ideal of $k[t_1,\ldots,t_n]$ is an evaluation ideal and has quotient $k$ ([math:cor-weak-nullstellensatz-algebraically-closed-coordinate-form](https://alphabetamath.cc/item/cor-weak-nullstellensatz-algebraically-closed-coordinate-form)).

[F2] For a finite family of pairwise comaximal ideals, the quotient map to the product of the quotient rings is surjective ([math:thm-chinese-remainder-theorem-for-comaximal-ideals](https://alphabetamath.cc/item/thm-chinese-remainder-theorem-for-comaximal-ideals)).

### Proof
**Given:** An algebraically closed field $k$ and the finite-type schemes and finite surjective morphism in the statement.

**Goal:** Prove the residue-field assertion and the stated description and pushforward of each closed fiber.

1.1 Let $z$ be a closed point of a finite-type $k$-scheme and choose an affine open neighborhood $\operatorname{Spec}A$ of $z$. The point is closed in that open, so it corresponds to a maximal ideal $\mathfrak m$ of $A$. Since $A$ is a finitely generated $k$-algebra, write $A=k[t_1,\ldots,t_n]/I$. The inverse image of $\mathfrak m$ is maximal in the polynomial ring. By [F1], its quotient is $k$, with the identification induced by the structure map. Hence $\kappa(z)=A/\mathfrak m$ is canonically $k$. [given, F1, choose]

2.1 Let $x\in X$ be closed and choose an affine neighborhood $U=\operatorname{Spec}A$, with $x$ represented by $\mathfrak m$. By finiteness, $f^{-1}(U)=\operatorname{Spec}B$ for a finite $A$-algebra $B$. The fiber over $x$ is $\operatorname{Spec}C$, where $C=B\otimes_A\kappa(x)=B/\mathfrak mB$ is a finite-dimensional $k$-algebra by step 1.1. Surjectivity makes this fiber nonempty, so $C\ne0$. If $\mathfrak p$ is a prime of $C$, then $C/\mathfrak p$ is a finite-dimensional domain over $k$; multiplication by any nonzero element is an injective, hence surjective, linear map, so $C/\mathfrak p$ is a field. Thus every prime of $C$ is maximal. [given, step 1.1, choose, algebra]

3.1 Distinct maximal ideals of $C$ are pairwise comaximal. For any finite collection of them, the Chinese remainder map of [F2] from $C$ onto the product of their nonzero residue fields is surjective. Consequently the number in any such collection is at most $\dim_k C$, so $\operatorname{Spec}C$ is finite. Every point $y$ in this fiber is closed in the fiber because its prime is maximal, and the fiber is closed in $Y$ because $x$ is closed in $X$; hence $y$ is closed in $Y$. Step 1.1 gives $\kappa(y)=k$ compatibly with $\kappa(x)=k$. [F2, step 2.1, step 1.1, algebra]

4.1 The fiber is nonempty by surjectivity and finite by step 3.1. For each of its points, the induced extension $\kappa(x)\to\kappa(y)$ is identified with the identity of $k$, so its degree is one. The definition of zero-cycle pushforward therefore gives $f_*[y]=[x]$. [given, step 3.1, algebra] ∎

## A normal noetherian ring is a finite product of normal domains

[Open item](item-lem-author-a9a51f3554f8-normal-ring-product) · level 0

### Statement
Assume the Axiom of Choice. Let $A$ be a commutative noetherian ring such that every localization $A_{\mathfrak p}$ at a prime ideal is an integrally closed domain. Then $A$ is canonically isomorphic to the finite product of its quotients by its minimal prime ideals, and those quotients are noetherian integrally closed domains. The zero ring is the empty product.

A prime is minimal if it contains no strictly smaller prime. A domain is integrally closed if every element of its fraction field satisfying a monic polynomial over the domain belongs to the domain. A ring is noetherian if every ideal is finitely generated.

### Statement references

[math:def-normal-noetherian-ring](https://alphabetamath.cc/item/def-normal-noetherian-ring)

### Facts & Assumptions

[F1] A normal noetherian ring has the prime-localization property in the statement; the zero ring satisfies it vacuously ([math:def-normal-noetherian-ring](https://alphabetamath.cc/item/def-normal-noetherian-ring)).

[F2] A radical ideal in a noetherian ring is the intersection of finitely many primes minimal over it; the supplier uses dependent choice, available here from the assumed Axiom of Choice ([math:cor-radical-ideal-has-finitely-many-minimal-primes-noetherian](https://alphabetamath.cc/item/cor-radical-ideal-has-finitely-many-minimal-primes-noetherian)).

[A1] The Axiom of Choice is available, including for the existence of maximal ideals containing proper ideals ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)).

### Proof

**Given:** A ring $A$ and the Axiom of Choice as in the statement.

**Goal:** Obtain the stated canonical product and prove that each factor is a normal noetherian domain.

1.1 If $a\ne0$ in $A$, its annihilator is proper, so by [A1] it is contained in a maximal ideal $\mathfrak m$. Then $a/1\ne0$ in $A_{\mathfrak m}$: otherwise some $s\notin\mathfrak m$ annihilates $a$. A nilpotent element maps to zero in every prime localization because these localizations are domains. Hence $A$ has no nonzero nilpotents, so its zero ideal is radical. [A1, given]

2.1 By [F2], $0=\bigcap_{i=1}^r\mathfrak p_i$ for the finitely many minimal primes. Distinct $\mathfrak p_i,\mathfrak p_j$ are comaximal. Otherwise their sum lies in a maximal ideal $\mathfrak m$ by [A1]. Their extensions to $A_{\mathfrak m}$ are distinct minimal primes: contraction of a prime below either extension is a prime below the corresponding $\mathfrak p_i$, and distinctness follows by choosing $a\in\mathfrak p_i\setminus\mathfrak p_j$ and using primality of $\mathfrak p_j$. This contradicts $A_{\mathfrak m}$ being a domain, whose only minimal prime is zero. [F2, A1, step 1.1, given]

3.1 For each $i$, choose $e_i$ congruent to $1$ modulo $\mathfrak p_i$ and to $0$ modulo every other $\mathfrak p_j$: multiply, over $j\ne i$, elements of $\mathfrak p_j$ congruent to $1$ modulo $\mathfrak p_i$. Therefore $A\to\prod_i A/\mathfrak p_i$ is surjective by the sum $\sum_i e_i a_i$, and it is injective because its kernel is the intersection in step 2.1. Each quotient is a noetherian domain. If $r=0$, the same kernel equality gives $A=0$ and the product is empty. [step 2.1, algebra]

4.1 Put $B=A/\mathfrak p_i$. For every prime $\mathfrak q$ of $B$, the corresponding localization of $B$ is a localization of the product in step 3.1 at a prime and hence is an integrally closed domain by [F1]. If $x$ in the fraction field of $B$ is integral over $B$, then its image is integral over every $B_{\mathfrak q}$ and therefore belongs to each. If $x\notin B$, the ideal $I=\{b\in B: bx\in B\}$ is proper; choose a maximal ideal $\mathfrak m\supseteq I$ using [A1]. The membership $x\in B_{\mathfrak m}$ would give an $s\notin\mathfrak m$ with $sx\in B$, a contradiction. Thus $B$ is integrally closed, completing the proof. [F1, A1, step 3.1] ∎

## Generic local rings of reduced schemes

[Open item](item-lem-author-2389e5bafea8-generic-reduced-local-ring) · level 0

### Statement
Assume the Axiom of Choice. Let $X$ be a reduced scheme and let $\eta$ be the generic point of an irreducible component. Then $\mathcal O_{X,\eta}$ is a field.

A scheme is reduced when its local rings have no nonzero nilpotents. A generic point of a closed irreducible subset is a point whose closure is that subset.

### Facts & Assumptions

**Given:** AC, a reduced scheme $X$ and a generic point $\eta$ of an irreducible component.

**Goal:** Show that $\mathcal O_{X,\eta}$ is a field.

[F1] On $U=\operatorname{Spec} A$, the local ring at the point corresponding to a prime $\mathfrak p$ is $A_{\mathfrak p}$ ([math:thm-stalk-structure-sheaf-prime-localization](https://alphabetamath.cc/item/thm-stalk-structure-sheaf-prime-localization)).

[F2] Under AC the nilradical is the intersection of all prime ideals ([math:cor-nilradical-as-intersection-of-primes](https://alphabetamath.cc/item/cor-nilradical-as-intersection-of-primes)). Choice is used only through this supplier ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)).

### Proof

1.1 Choose an affine neighborhood $U=\operatorname{Spec} A$ of $\eta$, corresponding to $\mathfrak p$. If $\mathfrak q\subsetneq\mathfrak p$ were prime, the closure in $X$ of the point of $U$ corresponding to $\mathfrak q$ would be irreducible and strictly contain the closure of $\eta$: its intersection with $U$ contains the point $\mathfrak q$, whereas the closure of $\eta$ does not. This contradicts maximality of the component. Thus $\mathfrak p$ is minimal. [F1, given, choose]

2.1 The primes of $A_{\mathfrak p}$ correspond to primes of $A$ contained in $\mathfrak p$, so its only prime is its maximal ideal. The nilradical of a ring is the intersection of its prime ideals; consequently that maximal ideal is the nilradical. Reducedness of $X$ makes this local ring reduced, so the ideal is zero. A local ring with zero maximal ideal is a field. [F1, F2, step 1.1, given] ∎

## Fields are regular local rings

[Open item](item-lem-author-2389e5bafea8-field-regular-local) · level 0

### Statement
Every field is a regular local ring.

A regular local ring is a noetherian local ring whose Krull dimension equals the dimension of $\mathfrak m/\mathfrak m^2$ over its residue field, where $\mathfrak m$ is its maximal ideal. Krull dimension is the supremum of lengths of strict chains of prime ideals.

### Facts & Assumptions

**Given:** A field $K$.

**Goal:** Prove that $K$ is regular local.

[F1] The displayed equality of Krull dimension and embedding dimension characterizes regular noetherian local rings ([math:def-embedding-dimension-and-regular-local-ring](https://alphabetamath.cc/item/def-embedding-dimension-and-regular-local-ring)).

### Proof

1.1 The only proper ideal of $K$ is $(0)$, which is both prime and maximal. Thus $K$ is noetherian and local, and its Krull dimension is zero. [given]

2.1 Its maximal ideal and its square are zero, so the dimension of $\mathfrak m/\mathfrak m^2$ over $K$ is zero. The criterion [F1] now makes $K$ regular local. [F1, step 1.1] ∎

## Discrete valuation rings are regular local

[Open item](item-lem-author-2389e5bafea8-dvr-regular-local) · level 0

### Statement
A discrete valuation ring is a regular local ring.

Here a discrete valuation ring is a nonfield noetherian local domain of dimension one with principal maximal ideal. Regular local means that the dimension of $\mathfrak m/\mathfrak m^2$ over the residue field equals the Krull dimension.

### Facts & Assumptions

**Given:** A discrete valuation ring $R$ with maximal ideal $\mathfrak m$.

**Goal:** Prove that $R$ is regular local.

[F1] A discrete valuation ring is a one-dimensional noetherian local domain whose maximal ideal is principal ([math:thm-equivalent-characterisations-of-a-dvr](https://alphabetamath.cc/item/thm-equivalent-characterisations-of-a-dvr)).

[F2] A noetherian local ring is regular exactly when its embedding dimension equals its Krull dimension ([math:def-embedding-dimension-and-regular-local-ring](https://alphabetamath.cc/item/def-embedding-dimension-and-regular-local-ring)).

### Proof

1.1 By [F1], $\mathfrak m=(\pi)$ for some nonzero $\pi$, and $\dim R=1$. The residue class of $\pi$ spans $\mathfrak m/\mathfrak m^2$. It is nonzero: if $\pi=a\pi^2$, cancellation in the domain gives $1=a\pi$, contrary to $\pi\in\mathfrak m$. [F1, given, algebra]

2.1 Therefore the embedding dimension is one, equal to $\dim R$. The criterion [F2] shows that $R$ is regular local. [F2, step 1.1] ∎

## Open subsets containing generic points are componentwise dense

[Open item](item-lem-author-2389e5bafea8-open-generic-density) · level 0

### Statement
Let $U$ be an open subset of a topological space $X$. If an irreducible component $C$ has generic point $\eta\in U$, then $U\cap C$ is a dense open subset of $C$.

The generic point condition means $\overline{\{\eta\}}=C$; density means that the closure in $C$ is all of $C$.

### Facts & Assumptions

**Given:** An open $U\subseteq X$ and a component $C$ with generic point $\eta\in U$.

**Goal:** Prove that $U\cap C$ is open and dense in $C$.

### Proof

1.1 The intersection $U\cap C$ is open in the subspace topology on $C$ and contains $\eta$. [given]

2.1 Its closure in $C$ contains the closure of $\{\eta\}$ in $C$, which is $C$. Hence it is dense in $C$. [step 1.1, given] ∎

## Excluding points of codimension zero and one

[Open item](item-lem-author-2389e5bafea8-codimension-exclusion) · level 0

### Statement
Let $C$ be an integral scheme and $Z\subseteq C$ a subset containing no point of codimension zero or one. Then $Z$ has codimension at least two in $C$.

The codimension of a point $x$ in $C$ is the supremum of lengths of strict chains of irreducible closed subsets of $C$ from $C$ to $\overline{\{x\}}$; the codimension of $Z$ is the infimum of the codimensions of its points, with infimum of the empty set defined as $+\infty$.

### Facts & Assumptions

**Given:** An integral scheme $C$ and a subset $Z$ with no point of codimension zero or one.

**Goal:** Show that $\operatorname{codim}_C Z\geq 2$.

### Proof

1.1 For every $x\in Z$, its codimension is a nonnegative integer or $+\infty$, being the supremum of lengths of finite chains. It is neither zero nor one by hypothesis, so it is at least two. [given]

2.1 Taking the infimum over $x\in Z$ proves the inequality; if $Z$ is empty, the stated convention gives $+\infty$. [step 1.1] ∎

## Pointwise regularity and smoothness over a perfect field

[Open item](item-lem-author-2389e5bafea8-perfect-pointwise-smoothness) · level 0

### Statement
Let $k$ be a perfect field and $X$ a reduced scheme locally of finite type over $k$. A point $x\in X$ is smooth over $k$ if and only if $\mathcal O_{X,x}$ is a regular local ring.

A perfect field is a field whose algebraic extensions are separable. Smooth at $x$ means that the structure morphism is smooth at that point. A regular local ring is a noetherian local ring whose Krull dimension equals the dimension of its maximal ideal modulo its square over its residue field.

### External input

The equivalence is imported from The Stacks Project, Lemma 33.25.8, under the displayed hypotheses. The cited result also states density and openness, but only its pointwise equivalence is used here. Its underlying proof is not reconstructed locally.

### Facts & Assumptions

**Given:** A perfect field $k$, a reduced locally finite-type $k$-scheme $X$, and $x\in X$.

**Goal:** Establish the stated pointwise equivalence as an imported result.

[F1] The external input in Stacks Project Lemma 33.25.8 states precisely this equivalence for every point of such an $X$; its cited proof uses Algebra Lemma 10.140.5.

### Proof

1.1 The hypotheses in **Given** match those of the external input [F1], and $x$ is a point of the specified scheme. [F1, given]

2.1 Applying [F1] at $x$ gives both directions of the equivalence. This is an application of the imported theorem, not a local reconstruction of its proof. [F1, step 1.1] ∎

## Finite projective complements

[Open item](item-lem-finite-projective-complements) · level 1

### Statement
Let $A$ be a commutative ring with unit. Every finite projective $A$-module $P$ admits a finite projective $A$-module $Q$ and an integer $N\geq 0$ such that $P\oplus Q\cong A^N$.

Assume additionally the Axiom of Choice and that $X=\operatorname{Spec}A$ is locally noetherian. Every class in the vector-bundle Grothendieck group $K^0(X)$ is of the form $[E]-[\mathcal O_X^N]$ for a vector bundle $E$ and an integer $N\geq0$. Its rank at each point $x\in X$ is $\operatorname{rank}_x E-N$; this is a locally constant integer-valued function, hence is constant on each connected component.

A finite projective module is a finitely generated module $P$ such that every homomorphism from $P$ to the target of a surjective module homomorphism lifts through that surjection. A vector bundle is a finite locally free $\mathcal O_X$-module: locally it is isomorphic to a finite direct sum of copies of $\mathcal O_X$. Its rank at a point is the number of copies in a local trivialization containing that point. A locally noetherian scheme is one covered by spectra of noetherian rings. The group $K^0(X)$ is generated by isomorphism classes $[E]$ of vector bundles, with $[E]=[E']+[E'']$ for each short exact sequence $0\to E'\to E\to E''\to0$ of vector bundles.

### Facts & Assumptions

**Given:** A commutative ring $A$ with unit and a finite projective $A$-module $P$. For the assertions about $K^0$, also assume the Axiom of Choice and that $X=\operatorname{Spec}A$ is locally noetherian.

**Goal:** Construct a finite projective complement to $P$ in a finite free module, then prove the representative and rank assertions.

[A1] The Axiom of Choice is used only to invoke the bundle and Grothendieck-group suppliers [F1]–[F2]; steps 1.1–3.1 use finite choices only. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] Under the Axiom of Choice, associated sheaf and global sections give an equivalence between finite projective $A$-modules and vector bundles on $X$, preserving finite direct sums and ranks. In particular $\widetilde{A^N}\cong\mathcal O_X^N$. [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface)

[F2] For a locally noetherian scheme under the Axiom of Choice, $K^0(X)$ has the generators and exact-sequence relations stated above. [math:def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme](https://alphabetamath.cc/item/def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme)

### Proof

**Proof technique:** Split a finite free presentation and use complements to replace negative bundle classes by negative free classes.

1.1 Choose finitely many generators $p_1,\ldots,p_N$ of $P$ and let $q:A^N\to P$ send the standard basis vectors to them. This map is surjective. By the lifting property of $P$, the identity map of $P$ lifts to a homomorphism $s:P\to A^N$ with $q s=\operatorname{id}_P$. This construction uses only the given finite generating family, including the empty family when $P=0$. [given, construct]

2.1 Put $Q=\ker q$. The map $P\oplus Q\to A^N$, $(p,z)\mapsto s(p)+z$, is an isomorphism: its inverse sends $a$ to $(q(a),a-sq(a))$. The projection $e=\operatorname{id}_{A^N}-sq$ has image $Q$, so $Q$ is generated by the finitely many elements $e(e_i)$, where $e_i$ are the standard basis vectors. [step 1.1, construct]

3.1 The module $A^N$ has the lifting property: lift the images of its finitely many basis vectors separately through any given surjection. A direct summand of a module with this property also has it: compose a map from the summand with the projection from the ambient module, lift, and restrict the lift to the summand. By step 2.1, $Q$ is such a summand of $A^N$ and is finitely generated. Thus $Q$ is finite projective, proving the first assertion. [step 2.1, construct]

4.1 Now impose the additional hypotheses. Every element of $K^0(X)$ is a finite integer linear combination of bundle classes by [F2]. Collecting positive and negative terms using the relation for the split exact sequence $0\to E'\to E'\oplus E''\to E''\to0$, write it as $[B]-[C]$ for vector bundles $B,C$; the zero bundle handles an empty sum. [F2, assume-hyp, step 3.1]

5.1 By [F1], $C\cong\widetilde P$ for a finite projective module $P$. Apply steps 1.1–3.1 to obtain $P\oplus Q\cong A^N$. With $D=\widetilde Q$, [F1] gives $C\oplus D\cong\mathcal O_X^N$. Therefore the split exact-sequence relation gives $[B]-[C]=[B\oplus D]-[C\oplus D]=[B\oplus D]-[\mathcal O_X^N].$ Taking $E=B\oplus D$ proves the representative assertion. [F1, F2, step 3.1, step 4.1]

6.1 For a point $x$, rank is additive in every short exact sequence of vector bundles: after passing to the stalk and tensoring with the residue field, the sequence becomes a short exact sequence of finite-dimensional vector spaces, since the quotient stalk is free; dimensions are additive. Thus assigning a bundle its pointwise rank respects the relations in [F2] and defines a homomorphism from $K^0(X)$ to integer-valued functions on $X$. Local triviality makes every such rank function locally constant. Consequently the representative in step 5.1 has rank $\operatorname{rank}_x E-N$ at $x$. A locally constant function to the discrete space $\mathbb Z$ is constant on each connected component, since otherwise its distinct nonempty fibers would separate that component. [F2, step 5.1, construct]

7.1 Steps 3.1, 5.1 and 6.1 establish all the assertions under their stated hypotheses. [step 3.1, step 5.1, step 6.1] ∎



## Unimodular elements and trivial summands

[Open item](item-def-unimodular-sections) · level 1

### Definition
Let $A$ be a commutative ring with identity and $P$ a finite projective $A$-module: $P$ is finitely generated, and maps from $P$ lift through surjective module homomorphisms. An element $p\in P$ is **unimodular** if there is an $A$-linear functional $\phi:P\to A$ with $\phi(p)=1$. A functional $\phi:P\to A$ is **unimodular** if it is surjective. A pair $(p,\phi)$ with $\phi(p)=1$ is a **unimodular pair**.

A vector bundle $E$ on a scheme $X$ is a finite locally free $\mathcal O_X$-module: every point has an open neighbourhood on which $E$ is a finite direct sum of copies of $\mathcal O_X$. Its dual is $E^\vee=\mathcal Hom_{\mathcal O_X}(E,\mathcal O_X)$. A global section $s\in\Gamma(X,E)$ is **nowhere zero** if, at every point $x$, its image in the fiber $E\otimes_{\mathcal O_X}k(x)$ is nonzero, where $k(x)$ is the residue field of the local ring $\mathcal O_{X,x}$. Equivalently, locally on $X$ the map $\mathcal O_X\to E$, $1\mapsto s$, identifies $\mathcal O_X$ with a direct summand of $E$. A morphism $E\to\mathcal O_X$ is instead a global section of the dual $E^\vee$.

Assume the Axiom of Choice for the following affine correspondence. On $X=\operatorname{Spec}A$, the bundle associated to a finite projective module $P$ has global sections $P$; under this identification a section is nowhere zero exactly when its element is unimodular. A unimodular pair gives an isomorphism $A\oplus\ker\phi\to P$, $(a,q)\mapsto ap+q$. In particular, a surjective functional on $P$ belongs to such a pair.

### Justification
The fiber condition uses the actual residue class of the section and is independent of a choice of local frame. The equivalences and the displayed direct-sum decomposition are established below. The affine assertion uses the stated Axiom of Choice through the cited affine module–bundle interface.

### Facts & Assumptions

**Given:** A commutative ring $A$, a finite projective $A$-module $P$, a scheme $X$ with a vector bundle $E$, and the Axiom of Choice for the affine assertions.

**Goal:** Justify the local description of nowhere-zero sections and the stated affine equivalences and splitting.

[F1] Under the Axiom of Choice, finite projective $A$-modules and vector bundles on $\operatorname{Spec}A$ correspond by associated sheaf and global sections, compatibly with localizations and duals; a finite projective module is a direct summand of a finite free module. [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface)

### Proof

**Proof technique:** direct; use local coordinates and the affine module–bundle correspondence.

1.1 On a neighbourhood of a point $x$, choose a frame of $E$ and write $s=(a_1,\ldots,a_r)$. Its fiber value at $x$ is nonzero exactly when some $a_i$ has nonzero image in the residue field of $\mathcal O_{X,x}$, equivalently is a unit in that local ring. After shrinking the neighbourhood, that coordinate is invertible. Projection to this coordinate followed by multiplication by $a_i^{-1}$ is then a functional taking $s$ to $1$, so $s$ generates a direct summand. Conversely, if such a local splitting exists, its fiber sends the fiber value of $s$ to $1$, so that value is nonzero. Thus the two local descriptions agree. [given, construct]

1.2 If $\phi(p)=1$, the map $(a,q)\mapsto ap+q$ from $A\oplus\ker\phi$ to $P$ has inverse $v\mapsto(\phi(v),v-\phi(v)p)$. If $\phi$ is surjective, choose $p$ with $\phi(p)=1$. These statements also hold for the zero ring, where $1=0$. [given, algebra, construct]

1.3 For the affine converse, write $P$ as a direct summand of $A^n$ using [F1]. The resulting coordinate functionals $\lambda_i\in P^\vee$ and elements $e_i\in P$ satisfy $v=\sum_i\lambda_i(v)e_i$ for every $v\in P$. Put $I=(\lambda_1(p),\ldots,\lambda_n(p))$. At a prime $\mathfrak p$, the fiber of the associated section is zero exactly when all $\lambda_i(p)$ lie in $\mathfrak p$: one direction follows by applying the functionals and the other from the displayed expansion. If the section is nowhere zero, $I$ is contained in no prime. Under Choice a proper ideal lies in a maximal, hence prime, ideal, so $I=A$. Coefficients expressing $1$ as a linear combination of the $\lambda_i(p)$ yield a functional $\phi$ with $\phi(p)=1$. [F1, given, construct]

2.1 Conversely, if $\phi(p)=1$, its localization and passage to every residue field send the fiber value of $p$ to $1$; hence that value is nonzero. Steps 1.1 through 1.3 and this implication establish all the stated equivalences and the splitting. [F1, step 1.1, step 1.2, step 1.3] ∎

## Determinants and exact sequences

[Open item](item-lem-determinants-of-short-exact-sequences) · level 1

### Statement
Let $X$ be a scheme and let $0\to E'\xrightarrow{i}E\xrightarrow{p}E''\to0$ be a short exact sequence of vector bundles, meaning finite locally free $\mathcal O_X$-modules. There is a canonical isomorphism of line bundles

$$\det E'\otimes\det E''\xrightarrow{\sim}\det E.$$

It is natural for isomorphisms of short exact sequences and compatible with pullback along scheme morphisms. Ranks may be locally constant rather than constant: the determinant is defined on each open rank locus by the corresponding top exterior power.

Assume the Axiom of Choice and suppose $X$ is locally Noetherian. Then determinant induces a group homomorphism $K^0(X)\to\operatorname{Pic}(X)$ from the vector-bundle Grothendieck group to the Picard group, given by $[E]-[F]\mapsto[\det E\otimes(\det F)^{-1}]$. Here $(\det F)^{-1}$ is the tensor-inverse line bundle, and Picard group addition is tensor product. This assertion concerns $K^0$, not the coherent-sheaf group $K_0$.

### Statement references

[def-exterior-determinant-bundles](item-def-exterior-determinant-bundles)

[math:def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme](https://alphabetamath.cc/item/def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme)

### Facts & Assumptions

**Given:** A scheme $X$ and a short exact sequence of vector bundles as in the statement; for the Grothendieck-group assertion, also assume the Axiom of Choice and that $X$ is locally Noetherian.

**Goal:** Construct the canonical determinant isomorphism, prove its functorial properties, and show that determinant respects the defining relations of $K^0(X)$.

[F1] The surjection $E\to E''$ splits locally. On a splitting neighbourhood, $E\cong E'\oplus E''$; ranks add there. [lem-surjection-kernel-bundle](item-lem-surjection-kernel-bundle)

[F2] Exterior powers and determinant of a constant-rank bundle are defined by sheafified exterior algebra. For a free module with an ordered basis, increasing wedges form a basis of each exterior power; in particular the top wedge is a line and wedges above the rank vanish. Exterior powers commute naturally with pullback. The Picard group consists of line-bundle isomorphism classes under tensor product. [def-exterior-determinant-bundles](item-def-exterior-determinant-bundles)

[F3] Under the stated choice and locally Noetherian hypotheses, $K^0(X)$ is generated by isomorphism classes of vector bundles with the relations $[E]=[E']+[E'']$ for short exact sequences. [math:def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme](https://alphabetamath.cc/item/def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme)

### Proof

**Proof technique:** direct; construct the map locally by wedging lifts and use the exact-sequence presentation.

1.1 The rank of a vector bundle is locally constant because it is constant on each local trivialization. Its rank loci are disjoint open subsets covering $X$. Define its determinant separately on these loci by [F2]; the pieces glue uniquely across the disjoint cover. The empty wedge defines the determinant of a rank-zero bundle as $\mathcal O$. [given, F2, construct]

1.2 Work on an open set where the sequence splits and $E',E''$ are free of ranks $a,b$. For local sections $e'_1,\ldots,e'_a$ and $e''_1,\ldots,e''_b$, choose lifts $\widetilde e''_j$ of the latter and send $(e'_1\wedge\cdots\wedge e'_a)\otimes(e''_1\wedge\cdots\wedge e''_b)$ to $i(e'_1)\wedge\cdots\wedge i(e'_a)\wedge\widetilde e''_1\wedge\cdots\wedge\widetilde e''_b$. This formula is multilinear and alternating in each block, so it induces a map from the tensor product of the two top exterior powers. If a lift changes, its difference is a section of $E'$; every new term has $a+1$ factors from $E'$ and vanishes by [F2]. Thus the map is independent of the chosen lifts, including when either rank is zero. [F1, F2, construct]

2.1 With bases of $E'$ and $E''$ and lifts supplied by a splitting, the concatenated vectors form a basis of $E$. The map of step 1.2 sends the generator formed from the two top wedges to the top wedge of that basis, so it is an isomorphism. Its lift-independent formula agrees on overlaps; hence the local maps glue to the asserted global isomorphism. The formula is preserved by isomorphisms of short exact sequences. Pulling it back gives the same wedge formula for the pulled-back sequence, which remains locally split; the exterior-power pullback isomorphisms therefore identify the two determinant maps. [F1, F2, step 1.2, construct]

3.1 Isomorphic bundles have isomorphic determinants by functoriality. Step 2.1 shows that every exact-sequence relation in [F3] maps to the identity relation in $\operatorname{Pic}(X)$. Consequently the assignment $[E]\mapsto[\det E]$ descends from the free abelian group on bundle classes to a homomorphism on $K^0(X)$. [F2, F3, step 2.1, construct]

4.1 Every element of $K^0(X)$ is a difference $[E]-[F]$: collect positive and negative terms into finite direct sums, using the split exact-sequence relations, and use the zero bundle for an empty sum. The homomorphism of step 3.1 therefore has the displayed formula, with inverse in the Picard group represented by the tensor-inverse line bundle. This completes the proof. [F2, F3, step 3.1, algebra] ∎

## Normal noetherian schemes reduce to integral components

[Open item](item-lem-normal-scheme-component-reduction) · level 1

### Statement
Assume the Axiom of Choice. A noetherian normal scheme $X$ is a finite disjoint union of open-and-closed integral normal subschemes, namely its irreducible components with their restricted structure sheaves. Every affine open $\operatorname{Spec} A\subseteq X$ has $A$ a finite product of noetherian integrally closed domains. Consequently functions, units, line bundles and finite-rank vector bundles are specified componentwise; the rank of a vector bundle is constant on each component.

Here a scheme is noetherian if it has a finite affine open cover by spectra of noetherian rings; it is normal if every local ring is an integrally closed domain. An irreducible space is a nonempty space that is not the union of two proper closed subsets; an irreducible component is a maximal irreducible subset. A scheme is integral if it is irreducible and reduced, where reduced means that its structure sheaf has no nonzero nilpotent local sections. A line bundle is a locally free sheaf of rank one; a finite-rank vector bundle is a locally free sheaf of finite rank, whose rank at a point is the rank on a trivializing neighborhood.

### Statement references

[lem-author-a9a51f3554f8-normal-ring-product](item-lem-author-a9a51f3554f8-normal-ring-product)

[math:def-normal-noetherian-ring](https://alphabetamath.cc/item/def-normal-noetherian-ring)

### Facts & Assumptions

[F1] Under the Axiom of Choice, a normal noetherian ring is a finite product of noetherian integrally closed domains ([lem-author-a9a51f3554f8-normal-ring-product](item-lem-author-a9a51f3554f8-normal-ring-product)).

[F2] Under the Axiom of Choice, a noetherian topological space is a finite union of its irreducible closed components ([math:lem-noetherian-space-has-finitely-many-irreducible-components](https://alphabetamath.cc/item/lem-noetherian-space-has-finitely-many-irreducible-components)).

[F3] On an affine scheme $\operatorname{Spec} A$, the stalk at a prime $\mathfrak p$ is $A_{\mathfrak p}$ ([math:thm-stalk-structure-sheaf-prime-localization](https://alphabetamath.cc/item/thm-stalk-structure-sheaf-prime-localization)). A noetherian ring is normal when all these localizations are integrally closed domains ([math:def-normal-noetherian-ring](https://alphabetamath.cc/item/def-normal-noetherian-ring)).

[A1] The Axiom of Choice is assumed; it supplies the choice used by [F1] and [F2] ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)).

### Proof

**Given:** A noetherian normal scheme $X$ and the Axiom of Choice.

**Goal:** Prove the finite open-and-closed integral normal decomposition and its stated componentwise consequences.

1.1 Every affine open $U=\operatorname{Spec} A$ has $A$ noetherian: a finite cover of $X$ by noetherian affine opens refines the quasi-compact open $U$ by finitely many principal opens whose coordinate rings are localizations of noetherian rings; the ascending-chain condition on ideals can then be checked after these finitely many localizations, where equality of localized ideals implies equality on $U$. By [F3] and normality of $X$, every prime localization of $A$ is an integrally closed domain. Thus [F1] writes $A$ as a finite product of noetherian integrally closed domains. The corresponding spectra are disjoint open-and-closed subschemes of $U$; each is irreducible and reduced, since it is the spectrum of a domain. In particular, every point of $X$ has an integral affine open neighborhood. [F1, F3, A1, given]

2.1 The underlying topological space of $X$ is noetherian: each member of a finite noetherian affine cover has descending-chain condition on closed sets, and a descending chain of closed subsets of $X$ stabilizes once its restrictions to these finitely many opens stabilize. By [F2], $X$ is the union of finitely many irreducible closed components. If such a component $C$ contains $x$, choose an integral open neighborhood $U$ of $x$ from step 1.1. The nonempty open subset $C\cap U$ is dense in $C$; its closure is contained in the irreducible closure $\overline U$. Maximality of $C$ therefore gives $C=\overline U$. Consequently two components containing $x$ are equal. The finitely many components are thus pairwise disjoint, and each is open as the complement of the union of the others. The empty scheme corresponds to the empty union. [F2, A1, step 1.1]

3.1 Give each open-and-closed component $C$ the restricted structure sheaf. It is irreducible by construction. It is reduced because the integral affine neighborhoods from step 1.1 cover $X$, and nilpotence and vanishing of sections can be checked locally. Its local rings are those of $X$, so they are integrally closed domains; hence $C$ is normal and integral. This proves the decomposition and the affine-ring assertion. [step 1.1, step 2.1, given]

4.1 For a finite disjoint open cover $X=\coprod_i C_i$, restriction and gluing give an equivalence between sheaves on $X$ and tuples of sheaves on the $C_i$: overlaps between different components are empty, so there are no compatibility conditions. Applied to the structure sheaf and its invertible sections, this gives functions and units componentwise; applied to locally free sheaves, it gives line bundles and finite-rank vector bundles componentwise. The rank is locally constant by local freeness; on an irreducible space two disjoint nonempty open rank loci cannot occur, so it is constant on each $C_i$. [step 2.1, step 3.1] ∎

## Equality in affine K zero and stable isomorphism

[Open item](item-lem-k-zero-stable-equivalence) · level 2


### Statement
Assume the Axiom of Choice. Let $X=\operatorname{Spec} A$ be a noetherian affine scheme, where $A$ is a commutative ring with unit, and let $E$ and $F$ be vector bundles on $X$. Their classes in the vector-bundle Grothendieck group $K^0(X)$ are equal if and only if there is an integer $N\geq 0$ and an isomorphism $E\oplus\mathcal O_X^N\cong F\oplus\mathcal O_X^N$.

A **vector bundle** is a finite locally free $\mathcal O_X$-module: each point has a neighbourhood on which the module is isomorphic to a finite direct sum of copies of $\mathcal O_X$. The displayed isomorphism is called a **stable isomorphism**. The group $K^0(X)$ is the abelian group generated by isomorphism classes $[V]$ of vector bundles, with the relation $[V]=[V']+[V'']$ for every short exact sequence $0\to V'\to V\to V''\to0$ of vector bundles. In particular, it is the vector-bundle group, not the Grothendieck group of coherent sheaves.

### Facts & Assumptions

**Given:** The Axiom of Choice, a noetherian affine scheme $X=\operatorname{Spec}A$, and vector bundles $E,F$ on $X$.

**Goal:** Prove that $[E]=[F]$ in $K^0(X)$ exactly when $E$ and $F$ are stably isomorphic as stated.

[A1] The assumed Axiom of Choice is used through the affine bundle–module equivalence and splitting in [F1] and the Grothendieck-group convention in [F3]. The complement construction in [F2] itself uses only finite choices. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] Under the Axiom of Choice, every short exact sequence of vector bundles on an affine scheme splits. Associated sheaf and global sections give an equivalence between vector bundles on $X$ and finite projective $A$-modules, preserving finite direct sums; the sheaf associated to $A^N$ is $\mathcal O_X^N$. A finite projective module is a finitely generated module with the lifting property for maps through surjective module homomorphisms. [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface)

[F2] Every finite projective $A$-module $P$ has a finite projective complement $Q$ with $P\oplus Q\cong A^N$ for some $N\geq0$. [lem-finite-projective-complements](item-lem-finite-projective-complements)

[F3] Since $X$ is locally noetherian, the vector-bundle group has the generators and exact-sequence relations in the statement. Its bundle isomorphism classes form a set. [math:def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme](https://alphabetamath.cc/item/def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme)

### Proof

**Proof technique:** Construct the group completion of the direct-sum monoid and then replace a common bundle summand by a free one.

1.1 Let $M$ be the set of isomorphism classes of vector bundles, with addition induced by direct sum and zero the class of the zero bundle. Direct sum is associative and commutative up to isomorphism, so $M$ is a commutative monoid. On $M\times M$ define $(a,b)\sim(c,d)$ when there is $t\in M$ such that $a+d+t=b+c+t$. This is an equivalence relation: reflexivity and symmetry are immediate; for transitivity, if $a+d+t=b+c+t$ and $c+f+u=d+e+u$, adding $f+u$ to the first equality and $b+t$ to the second yields $a+f+(d+t+u)=b+e+(d+t+u)$. Componentwise addition respects the relation. Thus the quotient is an abelian group, with zero represented by $(0,0)$ and inverse of $(a,b)$ represented by $(b,a)$; indeed $(a+b,a+b)\sim(0,0)$. [F3, construct]

2.1 The assignment sending a bundle class $a$ to the class of $(a,0)$ is additive. By [F1], each short exact sequence in the presentation of $K^0(X)$ splits, so its middle bundle is isomorphic to the direct sum of its ends. Consequently this assignment respects every relation in [F3] and induces a homomorphism from $K^0(X)$ to the group constructed in step 1.1. If $[E]=[F]$ in $K^0(X)$, their images are equal, so by the definition of $\sim$ there is a vector bundle $H$ with $E\oplus H\cong F\oplus H$. [A1, F1, F3, step 1.1]

3.1 By [F1], $H$ corresponds to a finite projective $A$-module $P$. Choose $Q$ and $N$ as in [F2], and let $H'$ be the vector bundle associated to $Q$. The direct-sum compatibility in [F1] gives $H\oplus H'\cong\mathcal O_X^N$. Adding $H'$ to both sides of the isomorphism in step 2.1 and using associativity therefore gives $E\oplus\mathcal O_X^N\cong F\oplus\mathcal O_X^N$. [F1, F2, step 2.1, construct]

4.1 Conversely, if such an isomorphism holds, the split exact-sequence relations in [F3] give $[E]+[\mathcal O_X^N]=[F]+[\mathcal O_X^N]$ in the abelian group $K^0(X)$. Adding the inverse of $[\mathcal O_X^N]$ proves $[E]=[F]$. Together with step 3.1 this establishes the equivalence. [F3, step 3.1, algebra] ∎


## Functions extend across codimension two

[Open item](item-lem-codimension-two-extension) · level 2

### Statement
Assume the Axiom of Choice. Let $X$ be a noetherian normal scheme and let $j:U\hookrightarrow X$ be an open immersion whose image contains every point of codimension at most one in its irreducible component. Then restriction is an isomorphism of sheaves of rings $\mathcal O_X\cong j_*\mathcal O_U$. Consequently restriction gives isomorphisms on global functions and on groups of global units.

Here a noetherian normal scheme is a scheme with a finite cover by spectra of noetherian rings and with all local rings integrally closed domains. The codimension of a point in its irreducible component is the supremum of the lengths of chains of strict specializations from that component's generic point to the given point. A global unit is a global function admitting a multiplicative inverse.

### Facts & Assumptions

[F1] Under the Axiom of Choice, every affine open of a noetherian normal scheme is the spectrum of a finite product of noetherian integrally closed domains; the corresponding factor spectra are open and closed integral subschemes ([lem-normal-scheme-component-reduction](item-lem-normal-scheme-component-reduction)).

[F2] Under the Axiom of Choice, a noetherian integrally closed domain $A$ with fraction field $K$ equals the intersection of its height-one localizations inside $K$ ([math:lem-normal-noetherian-domain-intersection-of-height-one-localizations](https://alphabetamath.cc/item/lem-normal-noetherian-domain-intersection-of-height-one-localizations)). If there are no height-one primes, the intersection is understood to be $K$.

[A1] The Axiom of Choice is assumed for [F1] and [F2] ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)).

### Proof

**Given:** A noetherian normal scheme $X$, an open immersion $j:U\hookrightarrow X$ containing all points of component codimension at most one, and the Axiom of Choice.

**Goal:** Show that $\mathcal O_X\to j_*\mathcal O_U$ is an isomorphism and obtain the asserted global isomorphisms.

1.1 It suffices to prove that restriction $\mathcal O_X(V)\to\mathcal O_U(U\cap V)$ is an isomorphism on a basis of affine opens $V$: the kernel and cokernel sheaves then have zero stalks. By [F1], each such $V$ is a finite disjoint union of affine spectra of noetherian integrally closed domains. These factor spectra form a basis as $V$ varies, and restriction to a factor preserves its structure sheaf. Thus it is enough to consider $V=\operatorname{Spec} A$ for such a domain $A$. Its generic point and each point corresponding to a height-one prime of $A$ belong to $U$: codimension is unchanged when passing to an open neighborhood, since chains of generalizations of a point in an open set remain in that open set. [F1, A1, given]

2.1 Put $W=U\cap V$ and let $K=\operatorname{Frac}(A)$. Since $W$ contains the generic point, it is dense in the integral scheme $V$. A section $s$ on $W$ determines an element $z\in K$ by its generic stalk. For every height-one prime $\mathfrak p$, the point $\mathfrak p$ lies in $W$, so the germ of $s$ there belongs to $A_{\mathfrak p}$ and maps to $z$ in $K$. Hence $z$ lies in every height-one localization, and [F2] gives $z\in A$. The section defined by $z$ agrees with $s$ on $W$: on any principal open $D(f)\subseteq W$, both are elements of the domain $A_f$ and have the same image in $K$, so they are equal; such opens cover $W$. Thus restriction from $A$ to $\mathcal O_U(W)$ is surjective. It is injective because $W$ contains the generic point and $A\hookrightarrow K$ is injective. This also covers the case that $A$ is a field. [F2, A1, step 1.1, given]

3.1 Steps 1.1 and 2.1 show that the restriction morphism is an isomorphism on a basis and therefore an isomorphism of sheaves of rings. Taking sections over $X$ gives $\Gamma(X,\mathcal O_X)\cong\Gamma(U,\mathcal O_U)$. A ring isomorphism carries precisely the invertible elements to invertible elements, with inverses preserved, so it also gives an isomorphism of global unit groups. [step 1.1, step 2.1] ∎

## Smooth density and normal codimension over a perfect field

[Open item](item-lem-perfect-base-smooth-density) · level 2

### Statement
Assume the Axiom of Choice. Let $X$ be a reduced finite-type scheme over a perfect field $k$. Its smooth locus is open and meets every irreducible component in a dense open subset. If $X$ is normal, its nonsmooth locus has codimension at least two in every irreducible component.

A field is perfect if all its algebraic extensions are separable. Finite type means that $X$ has a finite affine cover by spectra of finitely generated $k$-algebras. Reduced means that every local ring has no nonzero nilpotents; normal means that every local ring is an integrally closed domain. The smooth locus is the set of points where $X\to\operatorname{Spec} k$ is smooth. For an integral component $C$, the codimension of a point is the supremum of lengths of strict chains of irreducible closed subsets from $C$ to the closure of the point; the codimension of a subset is the infimum over its points, with the empty subset having codimension $+\infty$.

### Facts & Assumptions

**Given:** AC, a perfect field $k$, and a reduced finite-type $k$-scheme $X$.

**Goal:** Prove openness and componentwise density of the smooth locus and, when $X$ is normal, the codimension bound on its complement.

[F1] A finite-variable polynomial algebra over a field is noetherian ([math:lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct](https://alphabetamath.cc/item/lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct)). Its quotients are noetherian, because the preimage of every ideal is finitely generated.

[F2] Under AC, the smooth locus of a locally finitely presented morphism is open ([math:thm-smooth-locus-open](https://alphabetamath.cc/item/thm-smooth-locus-open)). AC means that every family of nonempty sets has a choice function ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)).

[F3] For a reduced scheme locally of finite type over a perfect field, smoothness at a point is equivalent to regularity of its local ring; this is an external input ([lem-author-2389e5bafea8-perfect-pointwise-smoothness](item-lem-author-2389e5bafea8-perfect-pointwise-smoothness)).

[F4] Under the assumed AC, a generic local ring of a reduced scheme is a field, and every field is regular local ([lem-author-2389e5bafea8-generic-reduced-local-ring](item-lem-author-2389e5bafea8-generic-reduced-local-ring), [lem-author-2389e5bafea8-field-regular-local](item-lem-author-2389e5bafea8-field-regular-local)). An open subset containing the generic point of a component meets it densely ([lem-author-2389e5bafea8-open-generic-density](item-lem-author-2389e5bafea8-open-generic-density)).

[F5] Under AC, a noetherian normal scheme is a finite disjoint union of open-and-closed integral normal components, and each affine coordinate ring is a finite product of noetherian integrally closed domains ([lem-normal-scheme-component-reduction](item-lem-normal-scheme-component-reduction)). For a noetherian integrally closed domain, localization at a height-one prime is a discrete valuation ring ([math:thm-height-one-localisation-of-normal-noetherian-domain-is-dvr](https://alphabetamath.cc/item/thm-height-one-localisation-of-normal-noetherian-domain-is-dvr)), and such a ring is regular local ([lem-author-2389e5bafea8-dvr-regular-local](item-lem-author-2389e5bafea8-dvr-regular-local)). Affine stalks are prime localizations ([math:thm-stalk-structure-sheaf-prime-localization](https://alphabetamath.cc/item/thm-stalk-structure-sheaf-prime-localization)).

[F6] A subset of an integral scheme with no points of codimension zero or one has codimension at least two ([lem-author-2389e5bafea8-codimension-exclusion](item-lem-author-2389e5bafea8-codimension-exclusion)).

### Proof

1.1 On each finite-type affine chart $\operatorname{Spec} A$, write $A=k[t_1,\ldots,t_n]/I$. By [F1], the polynomial ring is noetherian, so $I$ is finitely generated and $A$ is both noetherian and finitely presented over $k$. Thus $X$ is noetherian and its structure morphism is locally finitely presented. By [F2] its smooth locus $U$ is open. [F1, F2, given]

2.1 Each irreducible component of a scheme has a generic point $\eta$. By reducedness and [F4], $\mathcal O_{X,\eta}$ is a field and hence regular local. The pointwise input [F3] therefore gives $\eta\in U$. By [F4], $U\cap C$ is dense open in each component $C$. This also covers the empty scheme vacuously. [F3, F4, step 1.1, given]

2.2 Now suppose $X$ normal. By step 1.1 and [F5], its components are open-and-closed integral normal schemes. Fix one component $C$ and a point $x$ of codimension one in it. Choose an affine neighborhood $\operatorname{Spec} A\subset C$ of $x$. The component reduction [F5] makes $A$ a finite product of noetherian integrally closed domains; since its spectrum is a nonempty open subset of the irreducible space $C$, it is irreducible, so there is only one nonzero factor. Thus $A$ is a noetherian integrally closed domain. The prime $\mathfrak p$ corresponding to $x$ has height one: chains of primes below $\mathfrak p$ correspond to chains of irreducible closed subsets of $C$ ending at $\overline{\{x\}}$, because intersecting with this open neighborhood and taking closures are inverse on such chains. By [F5], $\mathcal O_{X,x}\cong A_{\mathfrak p}$ is a discrete valuation ring and hence regular local. [F5, step 1.1, given]

3.1 The generic point of $C$ is smooth by step 2.1, and every codimension-one point is smooth by step 2.2 and [F3]. Hence $C\setminus U$ contains no point of codimension zero or one. Applying [F6] proves its codimension is at least two. AC is used through the explicitly AC-dependent suppliers [F2], [F4] and [F5]. [F2, F3, F5, F6, step 2.1, step 2.2] ∎

## Line bundles are detected off codimension two

[Open item](item-lem-codimension-two-picard-restriction) · level 3

### Statement
Assume the Axiom of Choice. Let $X$ be a noetherian normal scheme and let $j:U\hookrightarrow X$ be an open immersion whose image contains every point of codimension at most one in its irreducible component. Then restriction $\operatorname{Pic}(X)\to\operatorname{Pic}(U)$ is injective. More precisely, a trivialization $\mathcal O_U\xrightarrow{\sim}\mathcal L|_U$ of a line bundle $\mathcal L$ determines a section of $\mathcal L|_U$ and an inverse section of its dual; both extend uniquely to $X$, and their evaluation product is $1$.

A noetherian normal scheme is a scheme with a finite cover by spectra of noetherian rings and with all local rings integrally closed domains. The codimension of a point in its irreducible component is the supremum of the lengths of chains of strict specializations from the component's generic point to that point. A line bundle is an $\mathcal O_X$-module locally isomorphic to $\mathcal O_X$; its dual is $\mathcal L^\vee=\mathcal Hom_{\mathcal O_X}(\mathcal L,\mathcal O_X)$. The Picard group consists of isomorphism classes of line bundles, with tensor product as its operation and $[\mathcal O_X]$ as identity. Restriction sends a class to the class of its restriction.

### Statement references

[lem-codimension-two-extension](item-lem-codimension-two-extension)

[math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme)

### Facts & Assumptions

[F1] Under the stated hypotheses and the Axiom of Choice, restriction is an isomorphism of sheaves of rings $\mathcal O_X\xrightarrow{\sim}j_*\mathcal O_U$ ([lem-codimension-two-extension](item-lem-codimension-two-extension)).

[F2] The Picard group has the stated tensor-product law, identity and dual inverses ([math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme)).

[A1] The Axiom of Choice is assumed as required by [F1] ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)).

### Proof

**Given:** $X$, $U$ and $j$ as in the statement, the Axiom of Choice, and a line bundle $\mathcal L$ on $X$.

**Goal:** Extend a trivialization on $U$ as stated and prove injectivity of restriction on Picard groups.

1.1 For any line bundle $\mathcal M$ on $X$, the natural restriction morphism $\mathcal M\to j_*(\mathcal M|_U)$ is an isomorphism. Indeed, on every open set $V$ where $\mathcal M\cong\mathcal O_V$, it identifies with the restriction of the isomorphism in [F1] to $V$. Such opens cover $X$, and a morphism of sheaves that is an isomorphism locally is an isomorphism: its local inverses agree on overlaps and glue. In particular, sections of $\mathcal M|_U$ extend uniquely to sections of $\mathcal M$ on $X$. The dual $\mathcal L^\vee$ is also a line bundle, since the dual of a local copy of $\mathcal O_X$ is a local copy of $\mathcal O_X$. [F1, A1, given]

2.1 Suppose $\phi:\mathcal O_U\xrightarrow{\sim}\mathcal L|_U$ is a trivialization. Set $s_U=\phi(1)$ and let $t_U$ be the section of $\mathcal L^\vee|_U$ corresponding to $\phi^{-1}$; thus $t_U(s_U)=1$. By step 1.1, these sections extend uniquely to $s\in\Gamma(X,\mathcal L)$ and $t\in\Gamma(X,\mathcal L^\vee)$. The evaluation $t(s)$ restricts to $1$ on $U$, so [F1] implies $t(s)=1$ on $X$. Locally write $s=a e$ and $t=b e^\vee$ in a basis $e$ and its dual. Then $ba=1$, so the maps $\mathcal O_X\to\mathcal L$, $1\mapsto s$, and $\mathcal L\to\mathcal O_X$ defined by $t$ are inverse isomorphisms locally, hence globally. [F1, step 1.1, construct]

3.1 Restriction respects tensor products and the identity by their local constructions, so it is a homomorphism of the Picard groups in [F2]. If a class restricts to the identity, its representative admits a trivialization on $U$; step 2.1 makes that representative trivial on $X$. Thus the kernel is trivial, and the restriction homomorphism is injective. [F2, step 2.1] ∎
