---
id: lem-author-58e57d689702-evaluation-equivalence
kind: lemma
title: Cancellation at the required dimension-bounded evaluation objects
status: draft
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - lem-author-58e57d689702-topweight-map
  - lem-author-58e57d689702-independent-gamma
  - lem-author-58e57d689702-coefficient-trivialization
  - prop-etale-cdh-descent
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  lem-author-58e57d689702-topweight-map: mathematical-premise
  lem-author-58e57d689702-independent-gamma: mathematical-premise
  lem-author-58e57d689702-coefficient-trivialization: mathematical-premise
  prop-etale-cdh-descent: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 16
---

## Statement
Assume the Axiom of Choice and the fixed universe and site-size bounds of the supplied derived-localization constructions. At every finite-type $X/k$ over algebraically closed $k$ with $\dim X\leq3$ and $p$ invertible, the actual map
$$\epsilon_X:(L^F_{\mathrm{cdh}}\tau^{\leq3}R\Gamma_{\mathrm{et}}(-,\mathbb Z/p))(X)\longrightarrow R\Gamma_{\mathrm{et}}(X,\mathbb Z/p)$$
is an equivalence. Consequently $L^F_{\mathrm{cdh}}(\tau^{>3}R\Gamma_{\mathrm{et}}(-,\mathbb Z/p))(X)=0$. Here $L^F_{\mathrm{cdh}}=L^{o,F}_{\mathrm{cdh}}$ is ordinary source sheafification. Localization remains on the entire qcqs prime-field site, which has objects of unbounded dimension; no global vanishing or global equivalence of the unlocalized truncation map is asserted.

## Facts & Assumptions

[A1] Choice and the stated bounds are inherited through the finite-coefficient locality, ordinary slice localization and derived-evaluation suppliers used below. [[math:def-axiom-of-choice]]
**Given:** The hypotheses in the statement, using the ordinary source reflector $L^F_{\mathrm{cdh}}=L^{o,F}_{\mathrm{cdh}}$.

**Goal:** Establish the stated exact map or descent conclusion.

[F1] The preceding three local lemmas, with the actual source locality and localization from their completed factorization supplier.

## Proof
1.1 For twisted coefficients the preceding lemmas give $\beta_X=\epsilon_X\gamma_X$, with both $\beta_X$ and $\gamma_X$ independently equivalences. Thus $\epsilon_X=\beta_X\gamma_X^{-1}$ is an equivalence. The coefficient-trivialization lemma conjugates this map to the displayed constant-coefficient map. This is cancellation of two actual equivalences, not cancellation from $\beta$ alone. [F1, A1]

2.1 The finite-coefficient descent theorem [[prop-etale-cdh-descent]] makes $B$ ordinary cdh-local on the entire prime-field site. The primitive root is needed only on the slice in step 1.1; it does not conjugate $B_3$ to $B$ globally on that site. The source localization is an exact functor on the stable derived categories. Apply it to $\tau^{\leq3}B\to B\to\tau^{>3}B$ and evaluate at $X$; the first arrow is the displayed equivalence. Its cofiber is therefore zero. This reasoning proves the claim at the listed evaluation objects without a dimension-bounded site/cofinality assertion. [F1, step 1.1] ∎
