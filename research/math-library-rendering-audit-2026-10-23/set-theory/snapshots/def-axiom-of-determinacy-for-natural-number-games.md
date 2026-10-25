---
id: def-axiom-of-determinacy-for-natural-number-games
kind: definition
title: "Axiom of determinacy for natural-number games"
status: published
origin: pipeline
deps: ["def-gale-stewart-games-on-pruned-trees", "def-baire-sequence-space"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Definition of determined games, specialized to all natural-number payoffs"
      url: "https://arxiv.org/html/2401.09659v1"
---
## Definition

Using [[def-baire-sequence-space]] and the full-position strategy convention of [[def-gale-stewart-games-on-pruned-trees]], the **Axiom of Determinacy (AD)** is the assertion

$$ (\forall A\subseteq\mathbb N^{\mathbb N})\ G(A;\mathbb N^{<\omega})\text{ is determined}. $$

Every position allows every natural-number move. Player I moves first. The axiom concerns all payoff sets on this one countable alphabet, including the empty payoff and the whole space; it is not an assertion of determinacy for games on arbitrary sets of moves. For the empty payoff the constant-zero II strategy wins; for the whole-space payoff the constant-zero I strategy wins, directly from the winning condition. The definition itself does not assume AD. Any theorem using it states the assumption. In particular this definition neither asserts unrestricted dependent choice nor asserts compatibility with AC.
