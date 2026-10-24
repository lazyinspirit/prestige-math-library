---
id: lem-rational-cut-is-cut
kind: lemma
title: "Each rational cut $q^{*}$ is a Dedekind cut"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-dedekind-cut, def-real-dedekind, thm-rat-ordered-field]
aliases: []
landmark: false
short: "$q^{*}$ a cut; $0^{*},1^{*}\\in\\mathbb{R}$"
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Appendix)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Math 331 course handout: Dedekind Cuts and Real Numbers (Hobart and William Smith Colleges)"
      url: "https://math.hws.edu/~mitchell/Math331S14/DedekindCutsHandOUt.pdf"
pipeline_run: null
proof_strategy: direct
---

## Statement

For every $q \in \mathbb{Q}$ the set $q^{*} = \{\, r \in \mathbb{Q} : r < q \,\}$
([[def-real-dedekind]]) is a Dedekind cut ([[def-dedekind-cut]]). In particular
$0^{*}$ and $1^{*}$ are Dedekind cuts, hence elements of $\mathbb{R}$, so they are
legitimate as the additive and multiplicative identities of $\mathbb{R}$.

## Facts & Assumptions

**Given:** A rational $q$ and the set $q^{*} = \{\, r \in \mathbb{Q} : r < q \,\}$, with the Dedekind-cut axioms (C1) proper and nonempty, (C2) downward closed, (C3) no greatest element ([[def-dedekind-cut]]).

[L1] $\mathbb{Q}$ is a totally ordered field: $<$ is transitive and total, $q - 1 < q < q + 1$, and whenever $p < q$ the midpoint $\tfrac{p+q}{2}$ satisfies $p < \tfrac{p+q}{2} < q$ ([[thm-rat-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 (C1) $q^{*}$ is nonempty and proper: $q - 1 < q$ gives $q - 1 \in q^{*}$, while $q \not< q$ gives $q \notin q^{*}$, so $q^{*} \ne \emptyset$ and $q^{*} \ne \mathbb{Q}$. [given, L1]

1.2 (C2) $q^{*}$ is downward closed: if $p \in q^{*}$, so $p < q$, and $r < p$, then $r < q$ by transitivity, hence $r \in q^{*}$. [given, L1]

1.3 (C3) $q^{*}$ has no greatest element: if $p \in q^{*}$ then $p < q$, so the midpoint $m = \tfrac{p+q}{2}$ satisfies $p < m < q$, giving $m \in q^{*}$ with $m > p$. [given, L1]

2.1 Satisfying (C1), (C2), (C3), $q^{*}$ is a Dedekind cut; applied at $q = 0$ and $q = 1$ this shows $0^{*}$ and $1^{*}$ are Dedekind cuts and hence elements of $\mathbb{R}$. [step 1.1, step 1.2, step 1.3] ∎
