---
id: "cex-infinite-sets-delta-system-hypothesis"
kind: "counterexample"
title: "Finite sets cannot be replaced by arbitrary countable sets"
status: published
origin: "pipeline"
deps: ["def-finite-delta-system", "thm-regular-uncountable-finite-delta-system"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
sources:
  references:
    - title: "Monk, Set theory following Jech (2024), Theorem 9.20, printed pp77–78; explicit pairwise-intersection instance"
      url: "https://euclid.colorado.edu/~monkd/jech.pdf"
justified_by: []
forward_refs: []
proof_strategy: "direct"
verification:
  audited: 2026-09-09
  precheck: "pass"
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
---

## Statement refuted

Every $\omega_1$-sized family of countable sets has an uncountable delta subsystem. This would replace finite sets by countable sets in the finite delta-system lemma.

## Facts & Assumptions

**Given:** The family $\mathcal F=\{\alpha:\omega\le\alpha<\omega_1\}$ of ordinals, each regarded as the set of its predecessors.

[F1] A delta system requires a single pairwise intersection for all distinct members. [[def-finite-delta-system]]

[F2] The valid theorem requires finite members and a regular uncountable cardinal. [[thm-regular-uncountable-finite-delta-system]]

## Counterexample

1.1 Every member of $\mathcal F$ is countable by $\alpha<\omega_1$, and infinite because $\omega\subseteq\alpha$. There are $\omega_1$ many such ordinals: the family is a subset of $\omega_1$, and if it were countable its union with the countable initial segment $\omega$ would make $\omega_1$ countable. Thus this family satisfies the proposed countability hypothesis but not F2's finiteness hypothesis. [F2, given]

2.1 For $\alpha<\beta<\gamma$ in $\mathcal F$, ordinal inclusion gives $\alpha\cap\beta=\alpha$ and $\beta\cap\gamma=\beta$. These intersections differ since $\alpha\ne\beta$. Therefore no three members form a delta system, and in particular no uncountable subfamily does. This refutes the asserted strengthening. [F1, given] ∎
