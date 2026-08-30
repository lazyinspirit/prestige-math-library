# frontier-24 — Alpha group `d` — Step 3 scaffold review

Group `d` covers batch `10`: `deterministic-finite-automata-and-regular-languages`
and `context-free-grammars-and-normal-forms`. I read the current
`research/frontier-24-batch-10.pages.json`,
`research/frontier-24-batch-10.coverage.json`, and
`research/frontier-24-batch-10.notes.md` artifacts against the controlling
design sections in `research/plan-computability-theory-track.md` and the live
`research/plan-spec.json`. I also refreshed
`research/frontier-24-alpha-d-scope-decisions.json` and resolved all `5`
current decline rows on Saturday, August 29, 2026.

Both owned A pages are **sufficient** for authoring on the current bytes. No
in-scope scaffold repair was needed during this review. The refreshed scope
receipt now contains `5` `stands` rows and `0` `owner-decision` rows.

| A page | batch | A items | verdict | notes |
|---|---|---:|---|---|
| `deterministic-finite-automata-and-regular-languages` | 10 | 15 | **sufficient** | totality/complement seams are explicit and the published prefix-automaton bridge closes through existing prerequisites |
| `context-free-grammars-and-normal-forms` | 10 | 20 | **sufficient** | ambiguity repair, local GNF lemmas, and all five scope declines close as written |

## Page review

### `deterministic-finite-automata-and-regular-languages`

TC-2 is sufficient on the current manifest. The page has the DFA quintuple, the
extended transition function with existence/uniqueness and concatenation,
acceptance and regular-language definitions, finite-language regularity, the
product constructions for union/intersection and difference, the explicit
accepting-set complement theorem, reachable states and trimming, the repaired
published-prefix-automaton bridge, and the two intended false statements. The B
page is also real rather than token: it computes an extended transition,
repairs the published `11`-avoidance automaton by adjoining a sink, and gives a
minimal totality counterexample. With `15` A items and `3` B items, no split is
close.

The route is dependency-closed on current bytes. The bridge to the published
forbidden-factor automaton spends
`def-finite-words-factor-avoidance-and-prefix-states` and
`def-prefix-automaton-for-a-finite-forbidden-factor-set` from the published
page `linear-recurrences-and-rational-generating-functions`, but page `583`
already reaches that page transitively through its declared prerequisite
`formal-languages-encodings-and-decision-problems`. The same transitive closure
also covers the formal-language conventions, Boolean operations, and function
machinery, so no backward prerequisite is missing.

The source harvest is sufficient for the page actually being built. Gallier is
the primary treatment for DFA definitions, `delta^*`, product constructions,
reachable states, and difference; Watrous Lecture `2` independently backs the
basic DFA/acceptance/regular-language conventions; and Watrous Lecture `4`
supplies the explicit complement-by-accepting-set theorem that the design
needed made explicit. The repaired prefix-automaton proposition is an honest
library bridge to an already published item, not a hidden forward edge or a
scope leak.

**Verdict: sufficient.**

### `context-free-grammars-and-normal-forms`

TC-6 is sufficient on the current manifest. The page carries CFGs,
derivations, leftmost/rightmost derivations, parse trees and yields, the
derivation/tree correspondence, ambiguity and inherent ambiguity at the
definition level, nullable/generating/reachable variables, useless-symbol,
epsilon-rule, and unit-rule elimination, CNF and GNF, the two local GNF rewrite
lemmas, closure under union/concatenation/star/homomorphism, and the two false
statements. The B page remains substantive after the ambiguity repair: it gives
a useless-symbol cleanup example, the four closure constructions on small CFLs,
and the arithmetic-expression counterexample showing that an ambiguous grammar
need not force an inherently ambiguous language. With `20` A items and `3` B
items, no split is close.

The mathematical route closes as written. The parse-tree item is licensed by
the published finite-sequence tree convention on `ramsey-theory`, which is a
declared prerequisite. The GNF theorem no longer leans on Gallier's deferred
least-fixed-point route: the manifest adds the substitution and
left-recursion-elimination lemmas and backs them with the DePaul source range,
so the constructive proof path is local to page `591`. The closure theorem's
homomorphism clause is also source-backed and matches the earlier
`formal-languages-encodings-and-decision-problems` convention `h : Sigma ->
Delta^*`.

All five current scope decisions stand:

- Gallier's named inherently ambiguous language example is out of scope because
  the current page defines inherent ambiguity but does not author a proof that
  this specific language is inherently ambiguous.
- Watrous Lecture `8`'s inherently ambiguous language row stands for the same
  reason: it separates the notion without providing a local proof route.
- Aho's intersection-with-regular-set row is correctly deferred to the later
  TC-7 page `pushdown-automata-and-context-free-languages`, where the design
  homes that result.
- Aho's reversal and inverse-homomorphism rows are correctly out of scope
  because the controlling TC-6 design deliberately keeps this page's closure
  block to union, concatenation, star, and homomorphism.

**Verdict: sufficient.**

## Scope and checks

The resolved scope receipt is current on disk:

- `stands`: `5` rows
- `owner-decision`: `0` rows

Checks run on the exact reviewed artifacts:

- `node tools/scope-decisions.mjs check --run frontier-24 --group d` — pass,
  `5` current decline(s), `0` error(s).
- `node tools/content-policy.mjs --manifest-only research/frontier-24-batch-10.pages.json` — pass,
  `42` scoped item(s), `0` error(s), `0` warning(s).
- `node tools/coverage-checklist.mjs --require-destination research/frontier-24-batch-10.coverage.json` — pass,
  `2` page(s), `85` harvested result(s), `0` error(s), `0` warning(s).
- Local closure audit over the batch-10 manifest — pass,
  `18` external deps, `0` missing prerequisite homes, `0` deps outside the
  transitive `requires` closure, `0` illegal cross-page B-item dependencies.
- `node tools/validate-plan.mjs research/plan-spec.json` — pass on the current
  unspliced plan; the standing repo-wide `redundant-prereq` notices are
  non-blocking for this batch and do not expose a missing local prerequisite.
