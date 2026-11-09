---
title: The actual finite-quotient map to cdh-local motivic cohomology
status: published
research_item: lem-author-e71ff76fe904-finite-quotient-comparison
dependency_level: 9
---

PDF p. 5: Prime-to-characteristic comparison

## Prerequisites

- [def-motivic-cohomology](item-def-motivic-cohomology)
- [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)
- [lem-author-b747b28c359f-derived-finite-coefficients](item-lem-author-b747b28c359f-derived-finite-coefficients)
- [thm-author-e71ff76fe904-cdh-factorization-input](item-thm-author-e71ff76fe904-cdh-factorization-input)


## Statement
Let $F=\mathbb Q$ or $F=\mathbb F_p$ for a prime $p$, and work on the category of all qcqs $F$-schemes. For $j\geq0$, write $M_j=\mathbb Z(j)_{\mathrm{mot},F}$ for the supplied Elmanto–Morrow complex-valued presheaf, and $\mathbb Z(j)_{\mathrm{cdh},F}$ for its specified classical-input cdh target. For every integer $n\geq1$ invertible in $F$, the objectwise derived quotient of the canonical motivic-to-cdh comparison is a natural equivalence
$$\alpha_j:M_j/n\xrightarrow{\sim}\mathbb Z(j)_{\mathrm{cdh},F}/n.$$
The slash denotes the objectwise derived quotient $C\otimes^{\mathbf L}\mathbb Z/n=\operatorname{cofib}(n:C\to C)$, precisely as in the completed motivic definition. This is an equivalence of actual $D(\mathbb Z)$-valued presheaves on that same category and may be evaluated at every qcqs $F$-scheme. If $k$ is any field with prime subfield $F$, precomposition along the forgetful functor from qcqs $k$-schemes retains this equivalence, with source the standing motivic complex and target the restriction of the specified prime-field cdh complex.

## Facts & Assumptions
**Given:** The hypotheses in the statement.

**Goal:** Establish the displayed construction or conclusion with its actual maps.

[F1] [thm-author-e71ff76fe904-cdh-factorization-input](item-thm-author-e71ff76fe904-cdh-factorization-input) imports the actual canonical maps and their stated equivalences on the qcqs prime-field category.

[F2] [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes) supplies the prime-field motivic functor and its fixed-field restriction. [def-motivic-cohomology](item-def-motivic-cohomology) and [lem-author-b747b28c359f-derived-finite-coefficients](item-lem-author-b747b28c359f-derived-finite-coefficients) fix the objectwise derived quotient.

## Proof
1.1 If $F=\mathbb Q$, apply the canonical-map assertion of EM Theorem4.10(4), supplied by [F1], with $m=n$. Its slash is derived quotient, the same construction as [F2]. [F1, F2]

1.2 If $F=\mathbb F_p$, [F1] supplies the equivalence $M_j[1/p]\to\mathbb Z(j)_{\mathrm{cdh},F}[1/p]$. Since $p$ is a unit in $\mathbb Z/n$, localization followed by derived tensor with $\mathbb Z/n$ is just derived tensor with $\mathbb Z/n$: the equality follows from $\mathbb Z[1/p]\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/n\cong\mathbb Z/n$, with $\mathbb Z[1/p]$ flat. Tensoring that actual comparison thus gives exactly the stated canonical quotient map. [F1, F2, construct]

2.1 For each qcqs $F$-scheme $X$, steps 1.1–1.2 give an equivalence upon evaluation at $X$. All constructions are objectwise and functorial, so these maps form the stated natural equivalence. Precomposing that same diagram with the forgetful functor for any field $k/F$ preserves its maps and equivalences; by [F2] its source is precisely the standing motivic quotient. The target remains the restriction of the prime-field cdh complex, without any unproved exchange of restriction and sheafification. This proves both scopes. [F1, F2, step 1.1, step 1.2] ∎
