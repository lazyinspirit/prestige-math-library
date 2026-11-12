---
id: prop-motivic-etale-comparison
kind: proposition
title: Prime-to-characteristic étale comparison
status: published
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - lem-author-e71ff76fe904-prime-field-coefficients
  - lem-author-e71ff76fe904-cdh-induced-map
  - lem-author-e71ff76fe904-finite-quotient-comparison
  - lem-author-e71ff76fe904-comparison-composite
  - lem-author-e71ff76fe904-truncate-cohomology
  - math:def-field
  - math:def-scheme-over-base
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-grothendieck-universe-closure-convention
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  lem-author-e71ff76fe904-prime-field-coefficients: mathematical-premise
  lem-author-e71ff76fe904-cdh-induced-map: mathematical-premise
  lem-author-e71ff76fe904-finite-quotient-comparison: mathematical-premise
  lem-author-e71ff76fe904-comparison-composite: mathematical-premise
  lem-author-e71ff76fe904-truncate-cohomology: mathematical-premise
  math:def-field: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: p. 5, property (5); base-field convention on p. 3; motivic-complex
        notation in Definition 2.2 on p. 4
      statement: For a qcqs scheme over the paper's base field, nonnegative weight j
        and positive integer n prime to its characteristic, the upper-j
        truncations of the derived mod-n motivic complex and derived small-etale
        sections of the jth roots-of-unity twist are naturally equivalent; their
        degree-a cohomology groups agree for a at most j.
      hypotheses: The paper fixes an algebraically closed base field k on p. 3;
        property (5) concerns any qcqs k-scheme, j at least zero and
        coefficients prime to the characteristic. Here n is positive and
        invertible. Property (5) imposes no smoothness, separatedness or
        finite-type condition on X.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Read the supplied local PDF text on pp. 3–5, including the field
        convention, Definition 2.2 and property (5). This passage supplies the
        reported truncated comparison and its cohomology consequence. The
        arbitrary-field extension, specified composite and objectwise cofiber
        bound in this repaired formulation are supplied by the declared
        comparison helpers, not asserted to be proved in property (5). Also
        checked Elmanto–Morrow arXiv:2309.08463v1, Theorem 4.33(1) and its
        complete short proof on printed p. 31 (PDF index 30), for applicability
        of the retained helper interface. Its foundational constructions and
        descent results were not reconstructed; no visual PDF inspection is
        claimed. Current maintenance read the assigned body and current supplier
        interfaces; no fresh primary-source or page-image reading, independent
        review or acceptance is claimed."
dependency_level: 13
formulation_deps:
  - math:def-axiom-of-choice
  - lem-author-e71ff76fe904-prime-field-coefficients
  - lem-author-e71ff76fe904-cdh-induced-map
  - lem-author-e71ff76fe904-finite-quotient-comparison
  - lem-author-e71ff76fe904-comparison-composite
  - lem-author-e71ff76fe904-truncate-cohomology
  - math:def-field
  - math:def-scheme-over-base
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-grothendieck-universe-closure-convention
argument_deps:
  - math:def-axiom-of-choice
  - lem-author-e71ff76fe904-prime-field-coefficients
  - lem-author-e71ff76fe904-cdh-induced-map
  - lem-author-e71ff76fe904-finite-quotient-comparison
  - lem-author-e71ff76fe904-comparison-composite
  - lem-author-e71ff76fe904-truncate-cohomology
  - math:def-field
  - math:def-scheme-over-base
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-grothendieck-universe-closure-convention
---

## Statement
Assume the Axiom of Choice and compatible fixed universe size bounds for the small sites and derived categories used below. Let $k$ be a field and $X$ any quasi-compact quasi-separated (qcqs) $k$-scheme, $j\geq0$, and $n\geq1$ prime to the characteristic of $k$ (equivalently invertible in $k$). There is the natural source comparison
$$\mathbb Z(j)_{\mathrm{mot}}(X)/n\longrightarrow R\Gamma_{\mathrm{et}}(X,\mu_n^{\otimes j}),$$
whose cofiber has cohomology only in degrees $>j$. In particular it induces a natural equivalence
$$\tau^{\leq j}(\mathbb Z(j)_{\mathrm{mot}}(X)/n)\simeq\tau^{\leq j}R\Gamma_{\mathrm{et}}(X,\mu_n^{\otimes j})$$
and isomorphisms $H^{a,j}_{\mathrm{mot}}(X,\mathbb Z/n)\cong H^a_{\mathrm{et}}(X,\mu_n^{\otimes j})$ for $a\leq j$. The quotient is derived, the tensor power uses the specified small étale coefficient sheaf, and the natural map is the composite through source cdh-local motivic cohomology fixed in the prerequisites.

## Facts & Assumptions
**Given:** The hypotheses in the statement.

**Goal:** Establish the displayed construction or conclusion with its actual maps.

[A1] Retain the Axiom of Choice and the common fixed Grothendieck universes $U\in V\in W$ with $\omega\in U$, containing the field and scheme data in $U$ and using $V$-small coefficient complexes considered in $W$, as in the finite-quotient helper. Their existence is a standing size assumption. These hypotheses are inherited in steps 1.1 and 2.1 from the prime-field, finite-quotient and truncation helpers, including their selected K-injective derived-sections interface. [[math:def-axiom-of-choice]] [[math:def-grothendieck-universe-closure-convention]]

[F1] [[lem-author-e71ff76fe904-prime-field-coefficients]] supplies prime-field restriction and the unchanged intrinsic étale target under [A1].

[F2] [[lem-author-e71ff76fe904-cdh-induced-map]] and [[lem-author-e71ff76fe904-finite-quotient-comparison]] supply the two maps; [[lem-author-e71ff76fe904-comparison-composite]] supplies their source composite and its imported objectwise cofiber bound.

[F3] [[lem-author-e71ff76fe904-truncate-cohomology]] supplies the natural truncation equivalence and cohomology comparison under [A1].

[F4] Fields, schemes over $\operatorname{Spec}k$ and their morphisms, and the qcqs conditions have the meanings in [[math:def-field]], [[math:def-scheme-over-base]] and [[math:def-quasi-compact-and-quasi-separated-scheme]]. The comparison helpers supply the displayed derived objects and operations. The field need not be algebraically closed, and $X$ need not be of finite type or smooth.

## Proof
1.1 Use the field and qcqs scheme conventions of [F4]. The first prerequisite places $X$ in the qcqs prime-field category without changing either the completed motivic functor value or the intrinsic étale coefficient complex. The next two supply the actual maps $\epsilon_j$ and $\alpha_j$ with their precise localization and finite-quotient meanings. The fourth forms their specified source composite and applies its imported objectwise cofiber bound. All source hypotheses hold by the first prerequisite. [A1, F1, F2, F4]

2.1 The fifth prerequisite applies the long exact sequence and cohomological truncation to this actual map, giving the displayed equivalence and all the asserted degree-$a$ isomorphisms with naturality. This proves exactly the comparison through weight $j$ on the full qcqs scope. In particular it asserts no degree-five weight-three comparison. [A1, F3, step 1.1] ∎
