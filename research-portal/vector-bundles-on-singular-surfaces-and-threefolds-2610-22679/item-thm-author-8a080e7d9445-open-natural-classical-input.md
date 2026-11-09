---
title: Fixed-site classical cycle comparison on every smooth ambient
status: draft
research_item: thm-author-8a080e7d9445-open-natural-classical-input
dependency_level: 10
---

PDF p. 13: Proposition 6.1 support argument

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [thm-author-2ac325480ae8-bem-field-model](item-thm-author-2ac325480ae8-bem-field-model)


## Statement
Assume the Axiom of Choice and fixed universe and site bounds. Let $k$ be perfect, let $F$ be its prime subfield, and let $r\in\mathbb Z_{\geq0}$. Let $C_{r,F}$ be the cdh-local left Kan extension of classical weight-$r$ motivic cohomology from smooth $F$-schemes to qcqs $F$-schemes. Fix a smooth separated finite-type $k$-scheme $S$. On the finite-type separated objects of the small étale site $S_{\mathrm{et}}$, there is an equivalence of presheaves with values in $\mathrm{D}(\mathbb Z)$
$$C_{r,F}|_{S_{\mathrm{et}}}\simeq z^r(-,\bullet)[-2r].$$
In particular, the restriction to the entire diagram of opens of this fixed $S$ is coherent, and each cycle arrow is actual open restriction. On that open diagram it also identifies $C_{r,F}$ with the derived-section functor of the MVW classical coefficient complex $\mathbb Z(r)$. Homological degree $n$ is cochain degree $-n$ before shifting. The equivalence may depend on $S$ and $r$; no compatibility between choices for different ambients or weights, or multiplicative compatibility, is asserted. There is no finite-generation requirement on $k/F$.

## External input

- Import BEM's explicit equivalence (6.4) on each fixed smooth ambient's étale site, rather than infer a global diagram equivalence from objectwise comparisons.
- Import its canonical field-model identification and equal-characteristic comparison, and the MVW sheaf-complex maps and descent on the fixed Zariski site. The deep source theorems are not reconstructed here.

The imported comparison results and their proofs are literature-derived. The numbered proof below is a locally authored application argument: it composes the supplied comparisons, restricts them to the fixed open diagram, and inverts equivalences in the corresponding functor categories. The separate `local_argument_provenance: ai-altered` records this local composition; the literature-derived proof provenance records the imported results and does not attribute the application argument as written to either source.

## Facts & Assumptions
**Given:** The hypotheses of the statement.

**Goal:** Compare the whole fixed-site diagram before taking cohomology or fibers.

[F1] [thm-author-2ac325480ae8-bem-field-model](item-thm-author-2ac325480ae8-bem-field-model) supplies the canonical field-model identification for every field $F$; BEM Corollary 1.11 supplies the natural equivalence from that absolute cdh functor to its A¹ theory on equal-characteristic schemes.

[F2] BEM Theorem 6.3 proof, equation (6.4), supplies an equivalence of presheaves of complexes on the fixed $S_{\mathrm{et}}$ in each nonnegative weight.

[F3] MVW Theorems 16.7 and 19.8, Proposition 19.12 and Example 19.14 supply the actual fixed-site chain maps and descent recorded in the source reference.

[A1] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the fixed bounds are the ambient foundational convention for the imported derived constructions.

## Proof
1.1 Restrict the canonical field-model equivalence and canonical equal-characteristic comparison to $S_{\mathrm{et}}$. Every object here is an equal-characteristic qcqs scheme. Compose with the equivalence of presheaves of complexes (6.4) on this same fixed site. This gives the first assertion as an equivalence in the functor category, including all étale restriction maps; it is not an inference from separate objectwise equivalences. [A1, F1, F2]

1.2 Restrict to $\operatorname{Open}(S)$. On the small Zariski site use the actual zigzag $\mathbb Z(r)\simeq\mathbb Z_{SF}(r)\to z^r(-\times\mathbb A^r,\bullet)[-2r]\leftarrow z^r(-,\bullet)[-2r]$. Apply derived sections functorially to its sheaf quasi-isomorphisms. Proposition 19.12 identifies cycle values with their derived sections, and projection flat pullback is a quasi-isomorphism by cycle homotopy invariance. The chain maps commute with open restriction, so this identifies the MVW coefficient functor on all opens of $S$ with the cycle functor on that same diagram. [A1, F3]

2.1 Invert these equivalences only in their fixed-site functor categories and compose them. Inverses of natural equivalences are natural equivalences, and restriction to any open subdiagram preserves them. This proves the classical-intermediate and actual-open-arrow assertions without choosing unrelated inverses at individual objects or requiring compatibility with another ambient. [step 1.1, step 1.2] ∎
