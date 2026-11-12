---
title: Exact objectwise cofiber bound for the canonical source composite
status: published
research_item: thm-author-e71ff76fe904-objectwise-range-input
dependency_level: 9
sources:
  references:
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Theorem 4.33(1) and its complete short proof, printed p.31 (zero-based
        PDF page 30); Theorem 1.1 opening assertion and (3), printed p.3 (PDF
        page 2).
      statement: For a qcqs F-scheme X and j≥0, n>0 prime to char F, the actual
        natural comparison M_j(X)/n→RΓ_et(X,μ_n^⊗j) has cofiber supported in
        cohomological degrees >j. The proof identifies this map through
        M_j/n→Z(j)_cdh/n≃L_cdh τ≤j B_j→B_j.
      hypotheses: F is a prime field Q or F_p; X is any qcqs F-scheme; j≥0; n>0
        invertible in F. No smoothness, regularity, noetherian, finite-type or
        dimension hypothesis.
      reading_limits: For this repair, read the PDF text of Theorem 1.1 opening
        assertion and (3), and Theorem 4.33 with its complete short proof. Read
        the full current cdh-factorization supplier for the precise objects,
        maps and conventions. The underlying motivic constructions,
        comparison/descent foundations and objectwise localization range were
        not reconstructed; the explicit theorem is imported. Earlier
        source-reading receipts remain historical. No comparison above degree j
        or with noninvertible n is asserted.
external_input: true
---

PDF p. 5: Prime-to-characteristic comparison

## Prerequisites

- [thm-author-e71ff76fe904-cdh-factorization-input](item-thm-author-e71ff76fe904-cdh-factorization-input)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [` Elden Elmanto and Matthew Morrow, Motivic cohomology of equicharacteristic schemes · Theorem 4.33(1) and its complete short proof, printed p.31 (zero-based PDF page 30); Theorem 1.1 opening assertion and (3), printed p.3 (PDF page 2). `](https://arxiv.org/pdf/2309.08463v1)


## Statement
Assume the Axiom of Choice and the fixed compatible universe bounds of the factorization input; existence of those universes is a separate size assumption. Let $F=\mathbb Q$ or $\mathbb F_p$ for a prime $p$, let $j$ be a nonnegative integer and let $n\geq1$ be an integer invertible in $F$. Work on quasi-compact quasi-separated (qcqs) $F$-schemes within the universe bounds of the factorization input; an $F$-scheme means a scheme over $\operatorname{Spec}F$. Set $M_j=\mathbb Z(j)_{\mathrm{mot},F}$, the Elmanto–Morrow weight-$j$ motivic functor of Theorem 1.1. Adopt the source's stable derived category $D(\mathbb Z)$ and standard cohomological grading from the factorization input.

Use the factorization input's source cdh-local complex $\mathbb Z(j)_{\mathrm{cdh}}$, ordinary stable-valued cdh sheafification $L_{\mathrm{cdh}}$, objectwise truncation $\tau^{\leq j}$ and derived small-étale functor $B_j(X)=R\Gamma(X_{\mathrm{et}},\mu_n^{\otimes j})$, where $\mu_n$ is the sheaf of roots of unity and its tensor powers are over $\mathbb Z/n$, with zeroth power $\mathbb Z/n$. The slash means the objectwise derived quotient $C/n=C\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/n=\operatorname{cofib}(n:C\to C)$. With the canonical motivic-to-cdh map, the equivalence $\theta_j$ and the map $\epsilon_j$ adjoint to truncation fixed by that input, the composite
$$M_j/n\longrightarrow\mathbb Z(j)_{\mathrm{cdh}}/n\xrightarrow{\theta_j}L_{\mathrm{cdh}}\tau^{\leq j}B_j\xrightarrow{\epsilon_j}B_j$$
is the natural comparison of EM Theorem 4.33(1). At every qcqs $F$-scheme its cofiber has zero cohomology in every degree at most $j$.

## Statement references
[math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)

[math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)

[thm-author-e71ff76fe904-cdh-factorization-input](item-thm-author-e71ff76fe904-cdh-factorization-input)

## External input
Use the explicit cofiber assertion of Theorem 4.33(1), arXiv:2309.08463v1, printed p. 31 (zero-based PDF page 30). Its short proof calls the last cofiber a fiber. The two differ by a shift; that printed fiber sentence is not used as a local proof of the theorem.

This is the substantial established source range theorem, imported with its actual comparison map. The factorization input fixes the source motivic functor, qcqs cdh site, coefficient quotient, derived target and actual comparison maps; it does not purport to reconstruct this objectwise range theorem.

## Facts & Assumptions
**Given:** The prime field, qcqs $F$-scheme, nonnegative weight and positive invertible coefficient in the statement.

**Goal:** Record the displayed source comparison and its exact objectwise cofiber range.

[F1] The exact cofiber assertion of EM Theorem 4.33(1) in External input is imported with its stated hypotheses, rather than derived from the printed fiber sentence.

[F2] [thm-author-e71ff76fe904-cdh-factorization-input](item-thm-author-e71ff76fe904-cdh-factorization-input) supplies $M_j=\mathbb Z(j)_{\mathrm{mot},F}$, the stable derived framework, site, quotient, target, truncation and actual maps used in the displayed composite.

[F3] [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) and [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base) fix the scheme conditions and base-scheme structure in the hypotheses.

[A1] The Axiom of Choice, as defined by [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), and the compatible universe bounds are inherited from [thm-author-e71ff76fe904-cdh-factorization-input](item-thm-author-e71ff76fe904-cdh-factorization-input). They are assumptions for its motivic functor, qcqs site and stable derived enhancement, and hence for the objects and maps used here. This application makes no additional simultaneous representative choices.

## Proof
1.1 Use the qcqs and base-scheme meanings in [F3] and the object and map identifications in [F2]. Import the actual map and objectwise cofiber statement of EM Theorem 4.33(1), whose complete short proof gives the displayed factorization on p.31. The source motivic complex there is precisely the $M_j$ fixed here. All constructions use the Choice and universe assumptions in [A1]. [A1, F1, F2, F3]

2.1 Its $n$ is any positive integer invertible in the prime field, so composite coefficients are included. The hypotheses on $X$, $F$ and $j$ are exactly the present ones. The explicit source statement is in terms of the cofiber and gives vanishing in every degree at most $j$. We do not infer it from a sheafified equivalence or replace it by an unverified objectwise exactness claim about localization. [A1, F1, F2, F3, step 1.1] ∎
