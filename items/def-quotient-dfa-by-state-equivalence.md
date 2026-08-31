---
id: def-quotient-dfa-by-state-equivalence
kind: definition
title: "The quotient DFA by state equivalence"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-right-language-and-equivalent-dfa-states, lem-state-equivalence-is-a-right-congruence, def-equivalence-relation, def-deterministic-finite-automaton, def-dfa-acceptance-and-recognized-language]
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
---

## Definition

Let $D=(Q,\Sigma,\delta,q_0,F)$ be a DFA, and let $\equiv_D$ be the
state-equivalence relation of [[def-right-language-and-equivalent-dfa-states]].
Its quotient set $Q/{\equiv_D}$ is available by
[[lem-state-equivalence-is-a-right-congruence]] together with
[[def-equivalence-relation]].

The **quotient DFA by state equivalence** is the automaton
$$ D/{\equiv_D}:=\bigl(Q/{\equiv_D},\Sigma,\overline\delta,[q_0],\overline F\bigr), $$
where
$$ \overline\delta([q],a):=[\delta(q,a)] $$
and
$$ \overline F:=\{[q]\in Q/{\equiv_D}: q\in F\}. $$

The next item proves that these definitions do not depend on the chosen
representatives and that the quotient recognizes the same language as $D$.
