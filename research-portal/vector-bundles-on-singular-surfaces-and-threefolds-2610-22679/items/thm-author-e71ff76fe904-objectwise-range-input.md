---
id: thm-author-e71ff76fe904-objectwise-range-input
kind: theorem
title: Exact objectwise cofiber bound for the canonical source composite
status: published
domain: mathematics
deps:
  - thm-author-e71ff76fe904-cdh-factorization-input
dependency_roles:
  thm-author-e71ff76fe904-cdh-factorization-input: mathematical-premise
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
external_input: true
sources:
  references:
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Theorem4.33(1) and its complete proof, printed p.31; introductory
        equivalent truncation statement Theorem1.1(3), p.3
      statement: For a qcqs F-scheme X and j≥0, n>0 prime to char F, the actual
        natural comparison M_j(X)/n→RΓ_et(X,μ_n^⊗j) has cofiber supported in
        cohomological degrees >j. The proof identifies this map through
        M_j/n→Z(j)_cdh/n≃L_cdh τ≤j B_j→B_j.
      hypotheses: F is a prime field Q or F_p; X is any qcqs F-scheme; j≥0; n>0
        invertible in F. No smoothness, regularity, noetherian, finite-type or
        dimension hypothesis.
      reading_limits: The full statement and complete short proof on p.31 were read,
        together with the exact cdh comparison statements it invokes. The deeper
        objectwise localization range and the original comparison/descent
        foundations are imported as this established theorem, not claimed
        locally reconstructed. The introductory truncation statement was also
        read. No comparison in degrees above j or with noninvertible n is
        asserted.
dependency_level: 1
---

## Statement
Let $F=\mathbb Q$ or $\mathbb F_p$, let $j$ be a nonnegative integer and let $n\geq1$ be an integer invertible in $F$. With the preceding source data, the composite
$$M_j/n\longrightarrow\mathbb Z(j)_{\mathrm{cdh}}/n\xrightarrow{\theta_j}L_{\mathrm{cdh}}\tau^{\leq j}B_j\xrightarrow{\epsilon_j}B_j$$
is the natural comparison of EM Theorem4.33(1). At every qcqs $F$-scheme its cofiber has zero cohomology in every degree at most $j$.

## External input
Use the explicit cofiber assertion of Theorem 4.33(1), arXiv:2309.08463v1, printed p. 31 (zero-based PDF page 30). Its short proof calls the last cofiber a fiber. The two differ by a shift; that printed fiber sentence is not used as a local proof of the theorem.

This is the substantial established source range theorem, imported with its actual comparison map. All five local prerequisites isolate the site, source restriction, quotient, map composition and truncation applications; they do not purport to reconstruct the deep theorem.

## Facts & Assumptions
**Given:** The hypotheses in the statement.

**Goal:** Establish the displayed construction or conclusion with its actual maps.

[F1] The exact theorem in External input, with the same factorization data as [[thm-author-e71ff76fe904-cdh-factorization-input]].

## Proof
1.1 Import the actual map and objectwise cofiber statement of EM Theorem4.33(1), with its exact factorization given in the complete proof on p.31. [F1]

2.1 Its $n$ is any positive integer invertible in the prime field, so composite coefficients are included. The explicit source statement is in terms of the cofiber and is the assertion used here. We do not infer it from a sheafified equivalence or replace it by an unverified objectwise exactness claim about localization. [F1, step 1.1] ∎
