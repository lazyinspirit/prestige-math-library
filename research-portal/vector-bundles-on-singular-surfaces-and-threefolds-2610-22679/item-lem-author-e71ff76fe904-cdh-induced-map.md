---
title: The exact cdh-local-to-objectwise étale map
status: published
research_item: lem-author-e71ff76fe904-cdh-induced-map
dependency_level: 9
---

PDF p. 5: Prime-to-characteristic comparison

## Prerequisites

- [thm-author-e71ff76fe904-cdh-factorization-input](item-thm-author-e71ff76fe904-cdh-factorization-input)
- [math:def-canonical-truncation-of-a-complex](https://alphabetamath.cc/item/def-canonical-truncation-of-a-complex)
- [math:lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology](https://alphabetamath.cc/item/lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice and the fixed compatible universe bounds of the factorization input; existence of those universes is a separate size assumption. Let $F=\mathbb Q$ or $\mathbb F_p$, let $j$ be a nonnegative integer and let $n\geq1$ be an integer invertible in $F$. Work on the qcqs prime-field cdh site of EM §3.3 p.14, with Nisnevich covers and abstract blowup families whose closed immersion and proper map are finitely presented. Presheaves take values in the source's stable derived $\infty$-category $D(\mathbb Z)$, with standard cohomological grading and fixed universe bounds. Let $L_{\mathrm{cdh}}$ be the source ordinary stable-valued sheafification, left adjoint to the inclusion of derived cdh sheaves satisfying covering descent. Apply canonical upper truncation objectwise in this derived presheaf category: on a cochain representative $C$, retain $C^a$ for $a<j$, replace $C^j$ by $\ker(d_C^j)$, and put zero in degrees $a>j$, with the induced differentials and natural map to $C$. Since $B_j=R\Gamma_{\mathrm{et}}(-,\mu_n^{\otimes j})$ is a cdh sheaf, the truncation map $\iota:\tau^{\leq j}B_j\to B_j$ has its canonical adjoint extension
$$\epsilon_j:L_{\mathrm{cdh}}\tau^{\leq j}B_j\longrightarrow B_j.$$
Its composite with the sheafification unit is $\iota$. This defines the actual source map; it asserts no objectwise range from a local equivalence alone.

## Facts & Assumptions
**Given:** The hypotheses in the statement.

**Goal:** Establish the displayed construction or conclusion with its actual maps.

[F1] [thm-author-e71ff76fe904-cdh-factorization-input](item-thm-author-e71ff76fe904-cdh-factorization-input) supplies the exact derived cdh-localization/descent data used by the source proof.

[F2] [math:def-canonical-truncation-of-a-complex](https://alphabetamath.cc/item/def-canonical-truncation-of-a-complex) defines canonical upper truncation and its natural map to a complex; [math:lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology](https://alphabetamath.cc/item/lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology) supplies functoriality, preservation of quasi-isomorphisms and descent to the derived category. The homotopy-coherent derived presheaf framework is the source framework supplied by [F1].

[A1] The Axiom of Choice, as defined by [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), and the compatible universe bounds are inherited from [thm-author-e71ff76fe904-cdh-factorization-input](item-thm-author-e71ff76fe904-cdh-factorization-input). They are assumptions for its motivic functor, qcqs site and stable derived enhancement, and hence for the objects and maps used here. This application makes no additional simultaneous representative choices.

## Proof
1.1 Use [F2] for the canonical complex-level truncation and its natural map, including independence of the cochain representative in the derived category. Use [F1] for their source homotopy-coherent realization on $D(\mathbb Z)$-valued presheaves, the large qcqs site, the derived localization and descent of $B_j$. Their adjunction gives $\operatorname{Map}(L_{\mathrm{cdh}}\tau^{\leq j}B_j,B_j)\simeq\operatorname{Map}(\tau^{\leq j}B_j,B_j),$ where maps on the left are between cdh-local derived functors and maps on the right are presheaf maps. Here $\operatorname{Map}$ denotes the mapping space in the indicated source $\infty$-category; the equivalence sends an extension to its composite with the sheafification unit. Take the inverse image of the actual truncation map under this equivalence. This constructs $\epsilon_j$ with the stated unit equation and a contractibly specified choice in the source derived enhancement. All constructions use the Choice and universe assumptions in [A1]. [A1, F1, F2, construct]

2.1 Evaluate this natural transformation at any source scheme. Its source is the evaluated sheafified functor, not the sheafification of an isolated complex at a point. All restriction squares commute because the adjunction was applied to functors. No bound on the cofiber follows merely from this adjunction; that bound will be imported separately. [A1, F1, step 1.1] ∎
