# Step 8 — group **d**, run `frontier-24`

You are the group Alpha for batches **10**: 2 A/B pair(s), 4 page(s), 42 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-24-alpha-d-step8-context.json` is what a group Alpha for this group wrote during step 7,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**You may read the entire library.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-24-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 10 | `deterministic-finite-automata-and-regular-languages` | A | computability-theory | 583 | `formal-languages-encodings-and-decision-problems`, `finite-counting-and-binomial-coefficients` |
| 10 | `deterministic-finite-automata-and-regular-languages-examples` | B | computability-theory | 584 | `deterministic-finite-automata-and-regular-languages` |
| 10 | `context-free-grammars-and-normal-forms` | A | computability-theory | 591 | `formal-languages-encodings-and-decision-problems`, `ramsey-theory` |
| 10 | `context-free-grammars-and-normal-forms-examples` | B | computability-theory | 592 | `context-free-grammars-and-normal-forms` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `deterministic-finite-automata-and-regular-languages` — Deterministic Finite Automata and Regular Languages (16 item(s))

- `def-deterministic-finite-automaton` · definition — Deterministic finite automata
- `def-extended-dfa-transition-function` · definition — The extended transition function of a DFA
- `thm-existence-and-uniqueness-of-extended-dfa-transition` · theorem — The extended transition function exists and is unique
- `lem-extended-dfa-transition-respects-concatenation` · lemma — Extended DFA transition respects concatenation
- `def-dfa-acceptance-and-recognized-language` · definition — Acceptance of a word by a DFA and the recognized language
- `def-regular-language-by-dfa-recognition` · definition — Regular languages
- `prop-every-finite-language-is-regular` · proposition — Every finite language is regular
- `thm-product-dfa-for-union-and-intersection` · theorem — The product construction gives DFA's for union and intersection
- `thm-complementing-accept-states-complements-the-language` · theorem — Complementing the accepting states complements the recognized language
- `cor-regular-languages-are-closed-under-boolean-operations` · corollary — Regular languages are closed under the Boolean operations over a fixed alphabet
- `thm-dfa-for-language-difference` · theorem — The product construction gives a DFA for language difference
- `def-reachable-dfa-state` · definition — Reachable states of a DFA
- `lem-removing-unreachable-states-preserves-language` · lemma — Removing unreachable states preserves the recognized language
- `prop-published-prefix-automata-extend-to-factor-avoidance-dfas` · proposition — The published prefix automata extend canonically to DFAs for factor-avoidance languages
- `fs-a-dfa-transition-diagram-may-omit-a-sink-without-changing-totality` · false-statement — FALSE: a DFA transition diagram may omit a sink without changing totality
- `fs-complementing-a-dfa-complements-its-transition-graph` · false-statement — FALSE: complementing a DFA complements its transition graph

### `deterministic-finite-automata-and-regular-languages-examples` — Deterministic Finite Automata and Regular Languages: Examples and Counterexamples (3 item(s))

- `ex-extended-dfa-transition-respects-concatenation` · example — Computing $\delta^*(q,uv)$ as $\delta^*(\delta^*(q,u),v)$
- `ex-extending-a-published-prefix-automaton-to-a-factor-avoidance-dfa` · example — Adding a sink turns the published prefix automaton for avoiding `11` into a DFA
- `cex-a-dfa-transition-diagram-may-omit-a-sink-without-changing-totality` · counterexample — A missing `1`-transition shows the drawn machine is not yet a DFA

### `context-free-grammars-and-normal-forms` — Context-Free Grammars and Normal Forms (20 item(s))

- `def-context-free-grammar` · definition — Context-free grammars
- `def-one-step-and-reflexive-transitive-derivation` · definition — One-step derivation and finite derivation in a context-free grammar
- `def-language-generated-by-a-cfg` · definition — The language generated by a context-free grammar
- `def-leftmost-and-rightmost-derivation` · definition — Leftmost and rightmost derivations
- `def-parse-tree-and-yield` · definition — Parse trees and their yields
- `thm-derivation-parse-tree-correspondence` · theorem — Derivations and parse trees correspond
- `def-ambiguity-and-inherent-ambiguity` · definition — Ambiguous grammars, unambiguous grammars, and inherently ambiguous languages
- `def-nullable-generating-and-reachable-variable` · definition — Nullable, generating, and reachable variables
- `thm-elimination-of-useless-symbols` · theorem — Eliminating useless symbols preserves the generated language
- `thm-elimination-of-epsilon-productions` · theorem — Epsilon-productions can be eliminated except possibly at the start symbol
- `thm-elimination-of-unit-productions` · theorem — Unit productions can be eliminated
- `def-chomsky-normal-form` · definition — Chomsky normal form
- `thm-chomsky-normal-form` · theorem — Every context-free language has an equivalent grammar in Chomsky normal form
- `def-greibach-normal-form` · definition — Greibach normal form
- `lem-gnf-substitution-step-preserves-language` · lemma — Substituting a variable's productions into a leading variable occurrence preserves the language
- `lem-gnf-left-recursion-elimination-preserves-language` · lemma — Eliminating immediate left recursion preserves the language
- `thm-greibach-normal-form` · theorem — Every context-free language has an equivalent grammar in Greibach normal form
- `thm-cfl-closure-under-union-concatenation-star-and-homomorphism` · theorem — Context-free languages are closed under union, concatenation, Kleene star, and homomorphism
- `fs-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language` · false-statement — FALSE: an ambiguous CFG always generates an inherently ambiguous language
- `fs-cnf-preserves-epsilon-without-an-exception` · false-statement — FALSE: converting to Chomsky normal form preserves epsilon without a special start-symbol exception

### `context-free-grammars-and-normal-forms-examples` — Context-Free Grammars and Normal Forms: Examples and Counterexamples (3 item(s))

- `ex-elimination-of-useless-symbols` · example — Deleting unreachable and nongenerating variables from a small grammar
- `ex-cfl-closure-under-union-concatenation-star-and-homomorphism` · example — Closure constructions on two small context-free languages
- `cex-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language` · counterexample — Arithmetic expressions admit both ambiguous and unambiguous CFGs

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-24-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 — group reading digest, `frontier-24`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-8 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.
