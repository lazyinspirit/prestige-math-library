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
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  lem-author-e71ff76fe904-prime-field-coefficients: mathematical-premise
  lem-author-e71ff76fe904-cdh-induced-map: mathematical-premise
  lem-author-e71ff76fe904-finite-quotient-comparison: mathematical-premise
  lem-author-e71ff76fe904-comparison-composite: mathematical-premise
  lem-author-e71ff76fe904-truncate-cohomology: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Fasel–Yakerson
      url: https://arxiv.org/abs/2610.22679v1
      locator: p. 5, property (5)
dependency_level: 14
---

## Statement
Assume the Axiom of Choice and compatible fixed universe size bounds for the small sites and derived categories used below. Let $X$ be any qcqs scheme over $k$, $j\geq0$, and $n\geq1$ prime to the characteristic of $k$ (equivalently invertible in $k$). There is the natural source comparison
$$\mathbb Z(j)_{\mathrm{mot}}(X)/n\longrightarrow R\Gamma_{\mathrm{et}}(X,\mu_n^{\otimes j}),$$
whose cofiber has cohomology only in degrees $>j$. In particular it induces a natural equivalence
$$\tau^{\leq j}(\mathbb Z(j)_{\mathrm{mot}}(X)/n)\simeq\tau^{\leq j}R\Gamma_{\mathrm{et}}(X,\mu_n^{\otimes j})$$
and isomorphisms $H^{a,j}_{\mathrm{mot}}(X,\mathbb Z/n)\cong H^a_{\mathrm{et}}(X,\mu_n^{\otimes j})$ for $a\leq j$. The quotient is derived, the tensor power uses the specified small étale coefficient sheaf, and the natural map is the composite through source cdh-local motivic cohomology fixed in the prerequisites.

## Facts & Assumptions
**Given:** The hypotheses in the statement.

**Goal:** Establish the displayed construction or conclusion with its actual maps.

[A1] The Axiom of Choice and fixed size bounds are inherited in steps 1.1 and 2.1 from the prime-field and truncation helpers, through their selected K-injective derived-sections interface. [[math:def-axiom-of-choice]]

[F1] [[lem-author-e71ff76fe904-prime-field-coefficients]] supplies prime-field restriction and the unchanged intrinsic étale target under [A1].

[F2] [[lem-author-e71ff76fe904-cdh-induced-map]] and [[lem-author-e71ff76fe904-finite-quotient-comparison]] supply the two maps; [[lem-author-e71ff76fe904-comparison-composite]] supplies their source composite and its imported objectwise cofiber bound.

[F3] [[lem-author-e71ff76fe904-truncate-cohomology]] supplies the natural truncation equivalence and cohomology comparison under [A1].

## Proof
1.1 The first prerequisite places $X$ in the qcqs prime-field category without changing either the completed motivic functor value or the intrinsic étale coefficient complex. The next two supply the actual maps $\epsilon_j$ and $\alpha_j$ with their precise localization and finite-quotient meanings. The fourth forms their specified source composite and applies its imported objectwise cofiber bound. All source hypotheses hold by the first prerequisite. [A1, F1, F2]

2.1 The fifth prerequisite applies the long exact sequence and cohomological truncation to this actual map, giving the displayed equivalence and all the asserted degree-$a$ isomorphisms with naturality. This proves exactly the comparison through weight $j$ on the full qcqs scope. In particular it asserts no degree-five weight-three comparison. [A1, F3, step 1.1] ∎
