---
title: Affine bundles and finite projective modules
status: draft
research_item: lem-affine-bundle-module-interface
dependency_level: 0
---

PDF p. 12: Serre splitting applied to virtual bundles

## Prerequisites

- [math:thm-affine-quasi-coherent-equivalence](https://alphabetamath.cc/item/thm-affine-quasi-coherent-equivalence)
- [math:thm-projective-module-characterizations](https://alphabetamath.cc/item/thm-projective-module-characterizations)
- [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)
- [math:lem-associated-sheaf-sections-basic-open](https://alphabetamath.cc/item/lem-associated-sheaf-sections-basic-open)
- [math:lem-associated-sheaf-stalk-localization](https://alphabetamath.cc/item/lem-associated-sheaf-stalk-localization)
- [math:thm-prime-spectrum-is-compact](https://alphabetamath.cc/item/thm-prime-spectrum-is-compact)
- [math:lem-distinguished-subset-cover-detects-radical](https://alphabetamath.cc/item/lem-distinguished-subset-cover-detects-radical)
- [math:def-affine-scheme-spectrum](https://alphabetamath.cc/item/def-affine-scheme-spectrum)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Statement
Assume the Axiom of Choice. For a commutative ring $A$, associated sheaf and global sections restrict to quasi-inverse equivalences between finite projective $A$-modules and finite locally free $\mathcal O_{\operatorname{Spec}A}$-modules. These equivalences preserve rank, finite direct sums, tensor products and duals. Every short exact sequence of vector bundles on an affine scheme splits.

Here a **finite projective module** is a finitely generated module $P$ with the lifting property for maps from $P$ through surjective module homomorphisms. A **vector bundle** means a finite locally free sheaf: each point has a neighbourhood on which it is isomorphic to a finite direct sum of copies of the structure sheaf. Its rank at a point is the number of copies there; the published definition establishes that this number is well-defined. The rank of a finite projective module at a prime $\mathfrak p$ is the rank of its free localization $P_{\mathfrak p}$. The duals are $P^\vee=\operatorname{Hom}_A(P,A)$ and $E^\vee=\mathcal Hom_{\mathcal O_X}(E,\mathcal O_X)$.

## Facts & Assumptions

**Given:** A commutative ring $A$, $X=\operatorname{Spec}A$, and the Axiom of Choice.

**Goal:** Establish the stated restricted equivalence, compatibility with the indicated operations, and splitting.

[F1] Associated sheaf and global sections are quasi-inverse equivalences between $A$-modules and quasi-coherent sheaves on $X$; finite locally free sheaves are quasi-coherent ([math:thm-affine-quasi-coherent-equivalence](https://alphabetamath.cc/item/thm-affine-quasi-coherent-equivalence), [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)).

[F2] The sets $D(f)=\{\mathfrak p:f\notin\mathfrak p\}$ form a basis; $X$ is compact. A finite family $D(f_i)$ covers $X$ exactly when the $f_i$ generate the unit ideal. The same holds for any fixed positive powers of the $f_i$ ([math:def-affine-scheme-spectrum](https://alphabetamath.cc/item/def-affine-scheme-spectrum), [math:thm-prime-spectrum-is-compact](https://alphabetamath.cc/item/thm-prime-spectrum-is-compact), [math:lem-distinguished-subset-cover-detects-radical](https://alphabetamath.cc/item/lem-distinguished-subset-cover-detects-radical)).

[F3] For an $A$-module $M$, the sections of $\widetilde M$ on $D(f)$ are $M_f$, naturally in $M$, and its stalk at $\mathfrak p$ is $M_{\mathfrak p}$ ([math:lem-associated-sheaf-sections-basic-open](https://alphabetamath.cc/item/lem-associated-sheaf-sections-basic-open), [math:lem-associated-sheaf-stalk-localization](https://alphabetamath.cc/item/lem-associated-sheaf-stalk-localization)).

[F4] A projective module is a direct summand of a free module, and a short exact sequence with projective quotient splits. Under AC, a direct summand of a free module is projective ([math:thm-projective-module-characterizations](https://alphabetamath.cc/item/thm-projective-module-characterizations), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)).

## Proof

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
