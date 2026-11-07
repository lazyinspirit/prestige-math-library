---
id: lem-geometric-connectedness-persists-for-finite-etale-curve-cover
kind: lemma
title: "A finite étale cover of a good-reduction curve keeps geometrically connected fibres"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-number-field
  - def-s-integers-and-s-units-of-a-number-field
  - def-geometric-fibre
  - def-algebraic-curve-over-field
  - def-scheme-over-base
  - def-completion-of-a-global-field-at-a-place
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-etale-morphism-schemes
  - def-finite-morphism-schemes
  - def-smooth-morphism-schemes
  - def-proper-morphism
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - thm-finite-unramified-local-extensions-classified-by-residue-extensions
  - thm-proper-smooth-complete-dvr-finite-etale-cover-equivalence
  - lem-finite-etale-galois-refinements-and-quotients
  - lem-composite-finite-proper-morphism-proper
  - thm-smooth-morphisms-stable-base-change-composition
  - thm-regular-equals-smooth-over-perfect-field
  - thm-regular-local-rings-are-domains-and-cohen-macaulay
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, §§8, 14, 18 and 24; proper smooth complete-DVR finite étale specialization"
      url: "https://stacks.math.columbia.edu/download/coherent.pdf"
      locator: "The flat-DVR specialization inputs used by thm-proper-smooth-complete-dvr-finite-etale-cover-equivalence; the present item supplies the connected-fibre deduction and its finite unramified residue-field reduction."
axiom_use: "AC is inherited from the finite étale specialization equivalence over a complete DVR."
provenance:
  statement: literature-derived
  proof: ai-generated
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $K$ be a number field, let $S$ be a finite set of finite primes, and put $U=\operatorname{Spec}\mathcal O_{K,S}$. Let $p:\mathcal X\to U$ be a smooth proper morphism whose geometric fibres are connected curves. Let $q:\mathcal Z\to\mathcal X$ be a finite étale morphism of positive constant degree, and assume that the generic-fibre cover $\mathcal Z_K\to\mathcal X_K$ is geometrically connected. Then every geometric fibre of $\mathcal Z\to U$ is connected. In particular, $\mathcal Z\to U$ is a smooth proper curve model with geometrically integral fibres.

## Statement references

[[def-number-field]]

[[def-s-integers-and-s-units-of-a-number-field]]

[[def-geometric-fibre]]

[[def-algebraic-curve-over-field]]

[[def-scheme-over-base]]

[[def-axiom-of-choice]]

[[def-etale-morphism-schemes]]

[[thm-proper-smooth-complete-dvr-finite-etale-cover-equivalence]]

[Stacks Project, Cohomology of Schemes](https://stacks.math.columbia.edu/download/coherent.pdf)

## Facts & Assumptions

**Given:** AC; $K,S,U,\mathcal X,p,\mathcal Z,q$ as in the Statement.

[A1] AC is the stated axiom of choice. [[def-axiom-of-choice]]

[A2] AC implies Countable Choice, which is assumed by the unramified-local-extension supplier. [[thm-choice-implies-dependent-implies-countable-choice]] [[def-countable-choice]]

[F1] For a finite prime $v$ of $K$, the completion $K_v$ has a complete discrete valuation ring $R_v$ with finite residue field $k_v$; finite extensions of $k_v$ lift to finite unramified extensions of $K_v$. [[def-completion-of-a-global-field-at-a-place]] [[def-local-field-valuation-ring-uniformizer-and-residue-field]] [[thm-finite-unramified-local-extensions-classified-by-residue-extensions]]

[F2] Finite étale covers are stable under base change; they are flat, and their disconnected components are open and closed finite étale subcovers. [[def-etale-morphism-schemes]] [[def-finite-morphism-schemes]] [[lem-finite-etale-galois-refinements-and-quotients]]

[F3] For a smooth proper scheme over a complete Noetherian DVR, restriction from finite étale covers of the total scheme to finite étale covers of the closed fibre is an equivalence of categories. [[thm-proper-smooth-complete-dvr-finite-etale-cover-equivalence]]

[F4] Smooth morphisms are flat; a smooth morphism composed with a smooth morphism is smooth, a finite morphism composed with a proper morphism is proper, and over a perfect field smooth schemes are regular with regular local rings domains. [[def-smooth-morphism-schemes]] [[thm-smooth-morphisms-stable-base-change-composition]] [[lem-composite-finite-proper-morphism-proper]] [[thm-regular-equals-smooth-over-perfect-field]] [[thm-regular-local-rings-are-domains-and-cohen-macaulay]]

## Proof
1.1 Fix a finite prime $v\notin S$ of $K$, write $R=R_v$ and $k=k_v$, and base change the model and cover to $R$. If the geometric special fibre $\mathcal Z_{\bar k}$ were disconnected, choose a nontrivial open-and-closed decomposition. On a finite affine cover, this decomposition is given by finitely many idempotents with coefficients in $\bar k$; each coefficient is algebraic over $k$, so their finite compositum lies in some finite extension $k'/k$ over which the decomposition is already defined. By [F1] and [A2], choose a finite unramified extension $K'/K_v$ with residue field $k'$, and let $R'$ be its valuation ring. [A2, F1, F2, given, choose]

1.2 The base-changed scheme $\mathcal Z_{R'}$ is flat over $R'$, since $q$ is finite étale and $\mathcal X_{R'}$ is smooth over $R'$. It is connected: if it were a disjoint union of two nonempty open-and-closed subschemes, both pieces would be flat over $R'$ and each would have nonempty generic fibre. Indeed, an affine coordinate ring of a flat $R'$-scheme has no uniformizer torsion, so it cannot become zero after inverting the uniformizer unless it was already zero. This would disconnect $\mathcal Z_{K'}$, contrary to the assumed geometric connectedness of $\mathcal Z_K$. [A1, F2, F4, given, algebra]

2.1 The morphism $\mathcal X_{R'}\to\operatorname{Spec}R'$ is smooth and proper, so [F3] gives an equivalence between its finite étale covers and those of its closed fibre. Equivalences preserve coproduct decompositions; hence a disconnected closed-fibre cover $\mathcal Z_{k'}$ would make $\mathcal Z_{R'}$ disconnected. This contradicts step 1.2, so $\mathcal Z_{k'}$ and therefore $\mathcal Z_{\bar k}$ are connected. Since $v$ was arbitrary, every geometric fibre is connected. [A1, F2, F3, step 1.1, step 1.2]

3.1 The composite $\mathcal Z\to\mathcal X\to U$ is smooth by [F4] and proper by [F4]. Each geometric fibre is a smooth connected curve. Over an algebraically closed field, smoothness makes its local rings regular domains, so distinct irreducible components are disjoint open-and-closed subsets; connectedness therefore leaves one irreducible component, and smoothness gives reducedness. Thus each geometric fibre is integral, proving the final assertion. [A1, F4, step 2.1, algebra] ∎

