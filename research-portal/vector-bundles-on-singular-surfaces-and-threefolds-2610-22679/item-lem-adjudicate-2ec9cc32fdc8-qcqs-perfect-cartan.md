---
title: Coefficientwise perfect Cartan on every qcqs field-scheme
status: published
research_item: lem-adjudicate-2ec9cc32fdc8-qcqs-perfect-cartan
dependency_level: 22
---

PDF p. 11: Lemma 5.3: qcqs perfect-class Chern arithmetic supplier

## Prerequisites

- [thm-author-d026a7b99ace-universal-chern-space](item-thm-author-d026a7b99ace-universal-chern-space)
- [thm-author-3cde9692a7e9-universal-grass-input](item-thm-author-3cde9692a7e9-universal-grass-input)
- [prop-chern-whitney-identities](item-prop-chern-whitney-identities)
- [lem-author-32887006bdff-em-p1-model](item-lem-author-32887006bdff-em-p1-model)
- [lem-author-32887006bdff-actual-orientation](item-lem-author-32887006bdff-actual-orientation)
- [lem-adjudicate-2ec9cc32fdc8-qcqs-free-class-detection](item-lem-adjudicate-2ec9cc32fdc8-qcqs-free-class-detection)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice and the compatible site-size and universe bounds of the supplied constructions. Let $k$ be any field and $X$ any qcqs $k$-scheme. For the specified actual universal operations $C_i:\mathcal K\to K(D_i,2i)$ on the local perfect K-space, put $C_0=1$, where $D_i=\mathbb Z(i)_{\rm mot}$. For every $i\geq1$, their homotopy classes satisfy the coefficientwise Cartan identity
$$C_i\circ\mu\simeq\sum_{a+b=i}\cup\circ(C_a\times C_b),$$
where $\mu$ is K-space addition and the sum and cup products are those of the supplied actual motivic targets. After composing with the canonical map from the global perfect K-space and taking components, the series
$$c_t^{\rm perf}(x)=1+\sum_{i\geq1}c_i(x)t^i$$
is a natural group homomorphism from $K_0(X)=\pi_0K_{\rm Perf}(X)$ to multiplicative formal series with coefficient of $t^i$ in $H^{2i,i}_{\rm mot}(X,\mathbb Z)$. This asserts coefficientwise homotopies and formal-series identities, without claiming a chosen coherent map of total-series objects. The scope includes nonnoetherian and nonseparated qcqs schemes, with no dimension bound.

## Facts & Assumptions
[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the compatible size bounds in the Statement. They are used through the actual universal, coefficient and local comparison constructions in [F1]–[F4] at steps 1.1–4.1; finite coefficient algebra adds no further choice principle.

[F1] [thm-author-d026a7b99ace-universal-chern-space](item-thm-author-d026a7b99ace-universal-chern-space) supplies the actual stable universal projective-relation classes, their pointed extension to the local perfect model over every qcqs field-scheme, and their evaluation on global perfect K-spaces through the canonical local-replacement unit.

[F2] [thm-author-3cde9692a7e9-universal-grass-input](item-thm-author-3cde9692a7e9-universal-grass-input) supplies the actual Vect/Grass coordinate comparison on one and two classifying stacks. For the supplied EM model it proves stabilization of mapping homotopy degrees zero and one at each fixed target weight, using all-degree negative-weight vanishing. Its current proof explicitly covers arbitrary qcqs field bases.

[F3] [prop-chern-whitney-identities](item-prop-chern-whitney-identities) supplies Whitney for actual bundles on every qcqs field-scheme, including each finite Grassmannian product over $X$. [lem-author-32887006bdff-em-p1-model](item-lem-author-32887006bdff-em-p1-model) and [lem-author-32887006bdff-actual-orientation](item-lem-author-32887006bdff-actual-orientation) supply the same actual product, linear Picard orientation and PBF over $X$ used in [F1]–[F2].

[F4] [lem-adjudicate-2ec9cc32fdc8-qcqs-free-class-detection](item-lem-adjudicate-2ec9cc32fdc8-qcqs-free-class-detection) supplies the actual qcqs local free-class arrow, its product, compatibility with addition, and detection for maps to the actual derived Eilenberg targets. It also specifies passage to global perfect K-spaces without a global bundle-presentation assumption.

## Proof
**Given:** $k,X$, the specified actual Chern operations and coefficient model, Choice and the stated size bounds.

**Goal:** Prove Cartan on all perfect classes in the full qcqs scope.

1.1 Fix $i\geq1$. On $BGL_n\times BGL_m$, subtract the proposed Cartan expression from the class of the universal direct sum, as a map to the additive target $K(D_i,2i)$. Pull back to each product of finite Grassmannians over $X$. These schemes are smooth qcqs over $X$, hence qcqs over $k$, and their universal bundles have precisely the projective-relation classes of [F1]–[F3]. Actual Whitney in [F3] makes the difference zero there. The actual universal-coordinate detection of [F2] therefore makes it zero on the product of classifying stacks. No smoothness of $X$ over $k$ is used. [A1, F1, F2, F3]

2.1 Pass to the stable classifying stacks using [F2]. For fixed target weight $i$, a monomial of Chern weight $w>i$ has coefficient in weight $i-w<0$ and is zero in every cohomological degree. The supplier's explicit finite-basis and rank-stabilization calculation therefore gives eventually isomorphic mapping-space $\pi_0$ and $\pi_1$ systems. The associated $\lim^1\pi_1$ is zero, as proved in that supplier. Consequently the coefficientwise identity of step 1.1 holds on stable $BGL\times BGL$, with no undetected inverse-limit class. This calculation imposes no noetherian or dimension hypothesis. [F2, step 1.1]

3.1 By [F1] the actual $C_i$ pull back along the comparison $j$ of [F4] to these stable universal classes and vanish on trivial-rank classes. By [F4], addition pulls back along $j\times j$ to block sum with rank translation. Thus the Cartan difference on $\mathcal K\times\mathcal K$ pulls back to zero by step 2.1, for every pair of locally constant ranks. Apply the two-variable detection in [F4] to conclude that the Cartan difference itself is zero. This is an identity of the specified natural local-model maps. [A1, F1, F4, step 2.1]

4.1 Evaluate the identity of step 3.1 on derived sections over $X$ and compose with the canonical perfect-space unit in [F1] and [F4]. This unit preserves addition because local replacement preserves finite products and is natural. Taking components yields $c_t^{\rm perf}(x+y)=c_t^{\rm perf}(x)c_t^{\rm perf}(y)$ for arbitrary perfect classes. Positive operations are pointed, so the value at zero is one. Formal multiplication uses finite convolutions and formal inversion is recursive; the coefficient ring is commutative because the cohomological degrees $2i$ are even. Thus these series form an abelian group and the claimed natural homomorphism follows. No assertion of global bundle generation, convergence or polynomiality for arbitrary perfect classes enters the argument. [A1, F1, F3, F4, step 3.1] ∎

## Source scope and reading limits
The current universal-class, actual universal-operation, actual bundle Whitney, EM model, orientation and negative-coefficient arguments were read for the hypotheses used here. The Annala–Iwasa author PDF dated 14 April 2025, SHA256 `ad36a2ed6a7e8b5815c94b19100b2431f2533fb538c57843bdbeef3d1b400261`, was read at its dated title page, introductory p. 2, conventions on p. 14, Lemma 3.2.3 and proof on p. 23, and Definition 4.4.1 through Corollary 4.4.7 with their displayed proofs on pp. 30–32. The live primary URL was also opened and its date checked. The finite Grassmannian formula and Vect comparison are used through the precise current supplier, including its elementary-excision/PBF qualification. No reconstruction of the cited AI22 finite-formula proof, lifting machinery or stabilization foundations is claimed. No stronger transfer or resolution hypothesis is imported from a different source theorem.
