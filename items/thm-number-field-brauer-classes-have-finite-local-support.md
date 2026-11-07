---
id: thm-number-field-brauer-classes-have-finite-local-support
kind: theorem
title: "Number-field Brauer classes have finite local support"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - lem-central-division-algebra-separable-maximal-subfield
  - lem-finite-density-and-central-simple-base-change
  - lem-finite-galois-obstruction-brauer-cohomology-comparison
  - lem-hensel-factor-lifting-over-a-complete-valued-field
  - thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree
  - thm-unique-extension-of-a-nonarchimedean-absolute-value
  - thm-global-field-element-integral-at-all-but-finitely-many-places
  - thm-decomposition-group-and-completion
  - lem-number-field-completion-tensor-and-norm-in-zf
  - thm-finite-unramified-local-extensions-classified-by-residue-extensions
  - lem-unramified-local-unit-norms-and-cohomology
  - thm-number-field-places-classification
  - thm-primitive-element-theorem-for-finite-separable-extensions
justified_by: []
proof_strategy: direct
axiom_use: "AC is retained for the global place/completion and integrality interfaces; finite factor-set and local unramified unit calculations require no additional choice axiom."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter VII §7, finite-support localization input for the Brauer–Hasse–Noether sequence; reconstructed here from finite crossed products and unramified unit cohomology, without global reciprocity."
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $K$ be a number field and let $A$ be a
finite-dimensional central simple $K$-algebra. There is a finite set $S$ of
places of $K$, containing all archimedean places, such that
$A\otimes_K K_v$ is a matrix algebra over $K_v$ for every $v\notin S$.
Consequently the localization of each algebraic Brauer class belongs to
$\bigoplus_v\operatorname{Br}(K_v)$.

## Statement references

[[lem-finite-galois-obstruction-brauer-cohomology-comparison]]

[J. S. Milne, *Class Field Theory*, Chapter VII §7](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

## Facts & Assumptions

**Given:** AC, the number field $K$, its places and completions, and the central simple algebra $A$ in the Statement. Brauer groups are algebraic similarity groups.

[F1] Every central simple algebra has a division representative, and every finite-dimensional central division algebra splits over a finite Galois extension. [[lem-finite-density-and-central-simple-base-change]] [[lem-central-division-algebra-separable-maximal-subfield]]

[F2] The relative finite crossed-product comparison is an isomorphism, normalized by $b_E=-o_E$ and $b_E([A(c)])=[c]$. Its actual cochain maps commute with scalar extension and restriction to a local field factor. These finite assertions are unqualified; the absolute comparison clause is not used. [[lem-finite-galois-obstruction-brauer-cohomology-comparison]]

[F3] Simple residue roots lift uniquely over complete nonarchimedean fields. A finite extension has its unique extending absolute value and is complete; for finite-residue local fields its degree is ramification index times residue degree. [[lem-hensel-factor-lifting-over-a-complete-valued-field]] [[thm-unique-extension-of-a-nonarchimedean-absolute-value]] [[thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree]]

[F4] Under AC a global-field element is integral at all but finitely many finite places. Applying this to a nonzero element and its inverse says that element is a unit outside a finite set. [[thm-global-field-element-integral-at-all-but-finitely-many-places]]

[F5] Under AC, for finite Galois $E/K$ and a finite place $w$ above $v$, the extension $E_w/K_v$ is finite Galois, and restriction identifies its Galois group with the decomposition subgroup in $\operatorname{Gal}(E/K)$. Its local ramification and residue degrees are those of $w/v$. [[thm-decomposition-group-and-completion]]

[F6] Finite unramified extensions of finite-residue local fields have cyclic residue Galois groups. Their unit cohomology vanishes in every positive degree in normalized cochains. [[thm-finite-unramified-local-extensions-classified-by-residue-extensions]] [[lem-unramified-local-unit-norms-and-cohomology]]

[F7] Under AC, archimedean places of a number field are its real embeddings and conjugate pairs of nonreal complex embeddings. A finite separable field extension is simple. [[thm-number-field-places-classification]] [[thm-primitive-element-theorem-for-finite-separable-extensions]]

[F8] A finite number-field completion is a complete discretely valued field with finite residue field. For finite $E/K$, $E\otimes_KK_v$ is the product of the completions $E_w$ over $w\mid v$. [[lem-number-field-completion-tensor-and-norm-in-zf]]

[A1] AC implies Countable Choice and Dependent Choice, supplying any such hypotheses in the global place and completion interfaces. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

## Proof

**Proof technique:** make a finite splitting factor set integral and use unramified unit cohomology.

**Given:** The data above.

1.1 Choose a finite Galois splitting field $E/K$ for $A$ by [F1], put $G=\operatorname{Gal}(E/K)$, and represent $o_E(A)$ by a normalized finite cocycle $c:G^2\to E^\times$ using [F2]. By [F7], write $E=K(\theta)$ with monic separable minimal polynomial $f$. Finite polynomial Euclidean division gives $a,b\in K[T]$ with $af+bf'=1$. By [F4], the coefficients of $f,a,b$ are integral at all but finitely many finite places of $K$. The finitely many values of $c$ and their inverses are integral outside a finite set $T$ of places of $E$. Let $S$ contain the exceptional coefficient places, the finite image of $T$ in the places of $K$, and all archimedean places. The latter set is finite because a primitive generator of $K/\mathbb Q$ has only finitely many complex conjugates, and [F7] indexes archimedean places by embeddings. Thus $S$ is finite. The displayed Bezout identity is a finite separability certificate; it will replace the discarded global finite-ramification input. [A1, F1, F2, F4, F7, given, choose, construct, algebra]

2.1 Fix $v\notin S$ and put $F=K_v$. Its residue field $k_v$ is finite by [F8]. The polynomials $f,a,b$ have integral coefficients, so $\bar a\bar f+\bar b\bar f'=1$ and $\bar f$ is squarefree. Factor it into distinct monic irreducibles $\bar f_i$ of degrees $d_i$. For the finite field $\ell_i=k_v[T]/(\bar f_i)$, [F6] supplies an unramified extension $U_i/F$ with residue $\ell_i$; [F3] gives $[U_i:F]=d_i$. The root of $\bar f_i$ in $\ell_i$ is a simple root of $\bar f$, so [F3] lifts it to $\alpha_i\in\mathcal O_{U_i}$ with $f(\alpha_i)=0$. The powers $1,\alpha_i,\ldots,\alpha_i^{d_i-1}$ are $F$-independent: rescale any purported relation to integral coefficients with at least one unit coefficient, then reduce to the independent residue powers. Thus $F(\alpha_i)=U_i$ and its minimal polynomial $h_i$ has degree $d_i$. Its conjugates have integral valuation and the distinct residue conjugates prescribed by [F6]; consequently $h_i$ has integral coefficients and reduction $\bar f_i$. The distinct $h_i$ divide $f$ and their degrees sum to $\deg f$, so $f=\prod_i h_i$. Hence every field factor of $F[T]/(f)$ is one of the unramified fields $U_i$. This proves the needed local unramifiedness directly from the finite separability certificate. [F3, F6, F8, step 1.1, construct, algebra]

3.1 By [F8], $E\otimes_KF=F[T]/(f)$ is also the product of the completions $E_w$ for $w\mid v$. Therefore each $E_w/F$ is isomorphic to a field factor $U_i/F$, and the unique extending value in [F3] makes this an isomorphism of valued fields. In particular it is unramified. Such a place $w$ exists, since $E\otimes_KF$ is nonzero and cannot be an empty product. By [F5], $E_w/F$ is finite Galois and its group identifies with the decomposition subgroup $G_w\le G$. Every value of $c$ is a unit in $E_w$, since $w\notin T$. [F3, F5, F8, step 1.1, step 2.1, choose, algebra]

4.1 The factor-set obstruction of $A\otimes_KF$, split by $E_w$, is represented by restricting $c$ to $G_w^2$ and embedding its coefficients into $E_w^\times$, by [F2,F5]. Indeed extend the splitting matrices and semilinear implementations along $E\hookrightarrow E_w$; their scalar factors are precisely those restricted values. By step 3.1 this cocycle is unit-valued. Its class comes from $H^2(G_w,\mathcal O_{E_w}^\times)=0$ by [F6]. The finite comparison [F2] therefore implies that $A\otimes_KF$ has zero Brauer class and is itself a matrix algebra. Only finite-group cohomology is used. [F2, F5, F6, step 3.1, algebra]

5.1 Every nonzero localization of $[A]$ lies in the finite set $S$ of step 1.1. All archimedean places were included, so none is required to split. An originally split matrix algebra, degree one, and the zero Brauer class satisfy the assertion directly. This proves the original finite-support and direct-sum claims, using the explicit local polynomial argument rather than any global ramification or reciprocity theorem. [step 1.1, step 4.1, algebra] ∎
