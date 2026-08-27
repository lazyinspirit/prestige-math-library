# Alpha

The task file is authoritative for the current cognitive job, scope, artifacts,
schemas, and gates. Read it with [README.md](../README.md),
[SCHEMA.md](../SCHEMA.md), and [WORKFLOW.md](../WORKFLOW.md) before acting.
The engine owns routing, retries, coverage, gates, and stage transitions; do
not take over any of those mechanical duties.

`tools/models.mjs` and `tools/dispatch.mjs` own the active model, runner,
effort, role capacity, sandbox, and configured judge set. Do not name or
override a model or judge lineup in your work. Some Alpha dispatches are
read-only; treat that as an absolute no-write boundary. In every dispatch, do
not request permissions or try to obtain a broader execution mode. Record a
blocker when the assigned work cannot be completed within the provided access.

## Scope and ownership

Use the `# This dispatch` identity and task to determine the work you own. For
group work, `research/frontier-21-alpha-groups.json` is the assignment: it permits at
most four groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol; otherwise
report the issue without changing it.

## Review and repair standard

Check the mathematical claim as written, not a charitable reconstruction.
Trace inferences to stated hypotheses, earlier steps, an exact cited statement,
or an elementary derivation. Preserve domains, quantifiers, hypotheses,
direction, and conclusions when using a citation. Type-check expressions and
test material boundary cases, including empty and zero cases, endpoints,
choice scope, and both directions of an iff. Check titles, definitions,
statements, facts, constructions, proofs, witnesses, computations, and page
prose within the assigned task.

A proof-step gap that a competent reader closes immediately is nonfatal polish.
It never excuses a false or overstrong claim, definition, title, witness,
computation, or citation. Do not manufacture findings, and do not retain a
known defective claim merely because a repair is inconvenient. For a licensed
repair, make the smallest coherent correction, preserve the content contract,
and run the focused validation named by the task. A material rewrite invalidates
its prior `verification.judge` record.

## Judge and evidence discipline

Judge coverage is current only for the model set and exact frozen context that
`tools/models.mjs` resolves; retained rows from a different set are evidence,
not current coverage. In a Step-8 adjudication, only a `confirmed_fatal`
outcome for the exact assigned rejection licenses a content repair.
`confirmed_nonfatal` and `false_positive` close without content, contract,
impact, or judge changes. The task controls the durable cycle limit and any
required rejudge; never initiate an extra cycle.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.


---

# This dispatch

run: frontier-21
role: alpha-adjudicate
label: step8-preflight-a-1

# Exact Step-8 repair envelope — 8-preflight, round 1

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
the full untruncated output, exact current rejection tuples, and explicit run/published ownership.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "frontier-21",
  "stage": "8-preflight",
  "round": 1,
  "mode": "preflight",
  "group": "a",
  "failures": [
    {
      "id": "proof-contract",
      "stage": "8-preflight",
      "why": "ERROR citation-quote-mismatch [thm-schreier-generating-lemma]: L3 quote does not occur in lem-schreier-rewriting-is-invariant-under-free-reduction's Statement",
      "output": "proof-contract: 118 error(s), 1 warning(s), 339/339 item(s) checked\nERROR citation-quote-mismatch [thm-schreier-generating-lemma]: L3 quote does not occur in lem-schreier-rewriting-is-invariant-under-free-reduction's Statement\nERROR citation-quote-mismatch [lem-reidemeister-schreier-relators-are-independent-of-word-representatives]: L2 quote does not occur in lem-schreier-rewriting-is-invariant-under-free-reduction's Statement\nERROR citation-use-not-supported [thm-marshall-hall-free-factor-theorem]: L1 is not cited by declared use 4.1\nERROR citation-use-not-supported [thm-marshall-hall-free-factor-theorem]: L2 is not cited by declared use 4.1\nERROR step-entry-input-omitted [thm-marshall-hall-free-factor-theorem]: step-4-1 omits 2.2, cited by 4.1\nERROR step-unmapped [thm-marshall-hall-free-factor-theorem]: 2.2 has no derivation or routine-step contract\nERROR citation-quote-mismatch [thm-abelian-groups-are-amenable]: L2 quote does not occur in thm-folner-criterion-for-amenability's Statement\nERROR citation-quote-mismatch [thm-subgroups-and-quotients-of-amenable-groups-are-amenable]: L3 quote does not occur in thm-folner-criterion-for-amenability's Statement\nERROR citation-quote-mismatch [lem-directed-union-of-amenable-subgroups-is-amenable]: L1 quote does not occur in thm-folner-criterion-for-amenability's Statement\nERROR citation-use-unmapped [thm-folner-criterion-for-amenability]: A1 is cited by 4.1 but the contract omits it\nERROR citation-use-not-supported [thm-folner-criterion-for-amenability]: L1 is not cited by declared use 1.2\nERROR citation-use-unmapped [thm-folner-criterion-for-amenability]: L1 is cited by 5.1 but the contract omits it\nERROR citation-fact-uncontracted [thm-folner-criterion-for-amenability]: L4 -> thm-hall-marriage-finite-bipartite needs an exact citation contract\nERROR step-unmapped [thm-folner-criterion-for-amenability]: 3.1 has no derivation or routine-step contract\nERROR step-unmapped [thm-folner-criterion-for-amenability]: 4.1 has no derivation or routine-step contract\nERROR step-unmapped [thm-folner-criterion-for-amenability]: 5.1 has no derivation or routine-step contract\nERROR step-unmapped [thm-folner-criterion-for-amenability]: 6.1 has no derivation or routine-step contract\nERROR citation-quote-mismatch [prop-enumerated-countable-amenable-groups-admit-folner-sequences]: L2 quote does not occur in thm-folner-criterion-for-amenability's Statement\nERROR citation-quote-mismatch [thm-subexponential-growth-implies-amenability]: L3 quote does not occur in thm-folner-criterion-for-amenability's Statement\nERROR citation-quote-mismatch [thm-tarski-alternative]: A1 quote does not occur in thm-folner-criterion-for-amenability's Statement\nERROR citation-use-not-supported [thm-free-group-of-rank-two-is-nonamenable]: L2 is not cited by declared use 2.1\nERROR citation-use-unmapped [thm-free-group-of-rank-two-is-nonamenable]: L2 is cited by 4.1 but the contract omits it\nERROR citation-use-unmapped [thm-free-group-of-rank-two-is-nonamenable]: L3 is cited by 3.1 but the contract omits it\nERROR step-unmapped [thm-free-group-of-rank-two-is-nonamenable]: 3.1 has no derivation or routine-step contract\nERROR step-unmapped [thm-free-group-of-rank-two-is-nonamenable]: 4.1 has no derivation or routine-step contract\nERROR citation-use-not-supported [thm-amenability-is-a-quasi-isometry-invariant-for-finitely-generated-groups]: L1 is not cited by declared use 3.1\nERROR citation-use-unmapped [thm-amenability-is-a-quasi-isometry-invariant-for-finitely-generated-groups]: L1 is cited by 5.1 but the contract omits it\nERROR citation-quote-mismatch [thm-amenability-is-a-quasi-isometry-invariant-for-finitely-generated-groups]: L2 quote does not occur in thm-folner-criterion-for-amenability's Statement\nERROR citation-use-not-supported [thm-amenability-is-a-quasi-isometry-invariant-for-finitely-generated-groups]: L2 is not cited by declared use 3.1\nERROR citation-use-unmapped [thm-amenability-is-a-quasi-isometry-invariant-for-finitely-generated-groups]: L2 is cited by 2.1 but the contract omits it\nERROR citation-use-unmapped [thm-amenability-is-a-quasi-isometry-invariant-for-finitely-generated-groups]: L2 is cited by 5.1 but the contract omits it\nERROR step-entry-input-omitted [thm-amenability-is-a-quasi-isometry-invariant-for-finitely-generated-groups]: step-2-1 omits L2, cited by 2.1\nERROR step-entry-input-omitted [thm-amenability-is-a-quasi-isometry-invariant-for-finitely-generated-groups]: step-3-1 omits 1.1, cited by 3.1\nERROR step-unmapped [thm-amenability-is-a-quasi-isometry-invariant-for-finitely-generated-groups]: 4.1 has no derivation or routine-step contract\nERROR step-unmapped [thm-amenability-is-a-quasi-isometry-invariant-for-finitely-generated-groups]: 5.1 has no derivation or routine-step contract\nERROR citation-quote-mismatch [fs-one-finite-folner-set-proves-amenability]: L1 quote does not occur in thm-folner-criterion-for-amenability's Statement\nERROR citation-source-not-in-fact [fs-folner-sequences-exist-for-every-uncountable-amenable-group]: L2 does not link [[cor-solvable-and-locally-finite-groups-are-amenable]]\nERROR citation-undeclared-dependency [fs-folner-sequences-exist-for-every-uncountable-amenable-group]: L2 cites cor-solvable-and-locally-finite-groups-are-amenable, which is absent from deps/justified_by/forward_refs\nERROR citation-quote-mismatch [fs-folner-sequences-exist-for-every-uncountable-amenable-group]: L3 quote does not occur in thm-folner-criterion-for-amenability's Statement\nERROR citation-fact-uncontracted [fs-folner-sequences-exist-for-every-uncountable-amenable-group]: L2 -> thm-abelian-groups-are-amenable needs an exact citation contract\nERROR citation-fact-uncontracted [fs-folner-sequences-exist-for-every-uncountable-amenable-group]: L4 -> thm-r-uncountable needs an exact citation contract\nERROR step-entry-input-omitted [fs-folner-sequences-exist-for-every-uncountable-amenable-group]: step-1-1 omits L4, cited by 1.1\nERROR citation-quote-mismatch [ex-folner-intervals-in-the-integers]: L2 quote does not occur in thm-folner-criterion-for-amenability's Statement\nERROR citation-quote-mismatch [ex-folner-boxes-in-zn]: L2 quote does not occur in thm-folner-criterion-for-amenability's Statement\nERROR citation-use-not-supported [ex-paradoxical-decomposition-of-a-free-group]: L1 is not cited by declared use 2.1\nERROR citation-use-unmapped [ex-paradoxical-decomposition-of-a-free-group]: L1 is cited by 3.1 but the contract omits it\nERROR step-unmapped [ex-paradoxical-decomposition-of-a-free-group]: 3.1 has no derivation or routine-step contract\nERROR citation-source-not-in-fact [thm-additive-jordan-chevalley-decomposition]: L4 does not link [[cor-conjugate-elements-are-related-by-an-automorphism-of-an-algebraic-closure]]\nERROR citation-undeclared-dependency [thm-additive-jordan-chevalley-decomposition]: L4 cites cor-conjugate-elements-are-related-by-an-automorphism-of-an-algebraic-closure, which is absent from deps/justified_by/forward_refs\nERROR citation-use-unmapped [thm-additive-jordan-chevalley-decomposition]: L4 is cited by 1.1 but the contract omits it\nERROR citation-use-unmapped [thm-additive-jordan-chevalley-decomposition]: L4 is cited by 5.1 but the contract omits it\nERROR citation-fact-uncontracted [thm-additive-jordan-chevalley-decomposition]: L4 -> thm-finite-galois-extension-characterizations needs an exact citation contract\nERROR step-entry-input-omitted [thm-additive-jordan-chevalley-decomposition]: step-1-1 omits L4, cited by 1.1\nERROR step-entry-input-omitted [thm-additive-jordan-chevalley-decomposition]: step-5-1 omits L4, cited by 5.1\nERROR citation-quote-mismatch [lem-partition-conjugation-is-an-involution]: F1 quote does not occur in def-ferrers-young-diagram-conjugate-partition-and-durfee-square's Definition\nERROR citation-quote-mismatch [thm-partitions-with-k-parts-equal-largest-part-k]: F1 quote does not occur in def-ferrers-young-diagram-conjugate-partition-and-durfee-square's Definition\nERROR citation-quote-mismatch [thm-partitions-with-k-parts-equal-largest-part-k]: F1 quote does not occur in def-partition-counting-functions-and-restricted-families's Definition\nERROR citation-quote-mismatch [cor-partitions-with-at-most-k-parts-equal-parts-at-most-k]: F1 quote does not occur in def-partition-counting-functions-and-restricted-families's Definition\nERROR citation-quote-mismatch [thm-partitions-into-k-parts-recurrence]: F1 quote does not occur in def-partition-counting-functions-and-restricted-families's Definition\nERROR citation-quote-mismatch [cor-distinct-partitions-have-product-generating-function]: F1 quote does not occur in def-partition-counting-functions-and-restricted-families's Definition\nERROR citation-quote-mismatch [cor-odd-partitions-have-product-generating-function]: F1 quote does not occur in def-partition-counting-functions-and-restricted-families's Definition\nERROR citation-quote-mismatch [thm-glaisher-bijection-between-odd-and-distinct-partitions]: F1 quote does not occur in def-partition-counting-functions-and-restricted-families's Definition\nERROR citation-quote-mismatch [thm-self-conjugate-partitions-correspond-to-distinct-odd-partitions]: F1 quote does not occur in def-ferrers-young-diagram-conjugate-partition-and-durfee-square's Definition\nERROR citation-quote-mismatch [thm-euler-pentagonal-number-theorem-by-franklin]: F1 quote does not occur in def-partition-counting-functions-and-restricted-families's Definition\nERROR citation-quote-mismatch [cex-a-partition-that-is-not-self-conjugate]: F1 quote does not occur in def-ferrers-young-diagram-conjugate-partition-and-durfee-square's Definition\nERROR citation-quote-mismatch [cor-argument-principle-counts-preimages]: L1 quote does not occur in thm-argument-principle-null-homologous-cycle's Statement\nERROR citation-quote-mismatch [thm-weighted-argument-principle]: L2 quote does not occur in thm-argument-principle-null-homologous-cycle's Statement\nERROR citation-quote-mismatch [cex-e-to-one-over-z-shows-essential-singularities-break-the-argument-principle]: L1 quote does not occur in thm-argument-principle-null-homologous-cycle's Statement\nERROR citation-quote-mismatch [fs-the-argument-principle-counts-zeros-without-multiplicity]: L1 quote does not occur in thm-argument-principle-null-homologous-cycle's Statement\nERROR citation-quote-mismatch [lem-cauchy-estimates-propagate-to-holomorphic-hulls]: L3 quote does not occur in def-polydisc-boundary-radius's Definition\nERROR citation-use-unmapped [thm-cartan-thullen-theorem]: L2 is cited by 2.2 but the contract omits it\nERROR citation-use-unmapped [thm-cartan-thullen-theorem]: L2 is cited by 2.2 but the contract omits it\nERROR citation-use-unmapped [thm-cartan-thullen-theorem]: L3 is cited by 1.2 but the contract omits it\nERROR step-entry-input-omitted [thm-cartan-thullen-theorem]: step-1-2 omits L3, cited by 1.2\nERROR step-entry-input-omitted [thm-cartan-thullen-theorem]: step-2-1 omits 1.2, cited by 2.1\nERROR step-entry-input-omitted [thm-cartan-thullen-theorem]: step-3-1 omits 2.1, cited by 3.1\nERROR step-unmapped [thm-cartan-thullen-theorem]: 2.2 has no derivation or routine-step contract\nERROR citation-quote-mismatch [lem-levi-pseudoconvexity-is-independent-of-defining-function]: L1 quote does not occur in def-levi-pseudoconvex-domain's Definition\nERROR citation-use-step-missing [thm-continuity-principle-for-domains-of-holomorphy]: L1 names missing step 1.2\nERROR citation-use-unmapped [thm-continuity-principle-for-domains-of-holomorphy]: L1 is cited by 2.1 but the contract omits it\nERROR citation-source-not-in-fact [thm-continuity-principle-for-domains-of-holomorphy]: L2 does not link [[thm-hartogs-figure-extension]]\nERROR citation-undeclared-dependency [thm-continuity-principle-for-domains-of-holomorphy]: L2 cites thm-hartogs-figure-extension, which is absent from deps/justified_by/forward_refs\nERROR citation-use-not-supported [thm-continuity-principle-for-domains-of-holomorphy]: L2 is not cited by declared use 2.1\nERROR citation-use-unmapped [thm-continuity-principle-for-domains-of-holomorphy]: L2 is cited by 1.1 but the contract omits it\nERROR citation-use-unmapped [thm-continuity-principle-for-domains-of-holomorphy]: L2 is cited by 3.1 but the contract omits it\nERROR citation-source-not-in-fact [thm-continuity-principle-for-domains-of-holomorphy]: L3 does not link [[def-holomorphic-extension-and-domain-of-holomorphy]]\nERROR citation-undeclared-dependency [thm-continuity-principle-for-domains-of-holomorphy]: L3 cites def-holomorphic-extension-and-domain-of-holomorphy, which is absent from deps/justified_by/forward_refs\nERROR citation-fact-uncontracted [thm-continuity-principle-for-domains-of-holomorphy]: L2 -> thm-cartan-thullen-theorem needs an exact citation contract\nERROR citation-fact-uncontracted [thm-continuity-principle-for-domains-of-holomorphy]: L3 -> thm-boundary-maximum-modulus-principle needs an exact citation contract\nERROR step-entry-input-omitted [thm-continuity-principle-for-domains-of-holomorphy]: step-1-1 omits L2, cited by 1.1\nERROR step-entry-step-missing [thm-continuity-principle-for-domains-of-holomorphy]: derivations step-1-2 names missing 1.2\nERROR step-entry-input-omitted [thm-continuity-principle-for-domains-of-holomorphy]: step-2-1 omits L1, cited by 2.1\nERROR step-entry-input-omitted [thm-continuity-principle-for-domains-of-holomorphy]: step-2-1 omits 1.1, cited by 2.1\nERROR step-entry-input-step-missing [thm-continuity-principle-for-domains-of-holomorphy]: step-2-1 names missing step 1.2\nERROR step-unmapped [thm-continuity-principle-for-domains-of-holomorphy]: 3.1 has no derivation or routine-step contract\nERROR boundary-evidence-step-missing [thm-continuity-principle-for-domains-of-holomorphy]: nonempty-choice names missing step 1.2\nERROR citation-use-unmapped [thm-domains-of-holomorphy-are-hartogs-pseudoconvex]: L2 is cited by 1.1 but the contract omits it\nERROR step-entry-input-omitted [thm-domains-of-holomorphy-are-hartogs-pseudoconvex]: step-1-1 omits L2, cited by 1.1\nERROR citation-use-not-supported [thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains]: L1 is not cited by declared use 1.1\nERROR citation-use-unmapped [thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains]: L1 is cited by 2.1 but the contract omits it\nERROR citation-source-not-in-fact [thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains]: L2 does not link [[thm-c-two-levi-criterion-for-plurisubharmonicity]]\nERROR citation-undeclared-dependency [thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains]: L2 cites thm-c-two-levi-criterion-for-plurisubharmonicity, which is absent from deps/justified_by/forward_refs\nERROR citation-use-not-supported [thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains]: L2 is not cited by declared use 1.1\nERROR citation-use-unmapped [thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains]: L2 is cited by 2.1 but the contract omits it\nERROR citation-quote-mismatch [thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains]: L3 quote does not occur in def-levi-pseudoconvex-domain's Definition\nERROR citation-use-unmapped [thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains]: L3 is cited by 1.1 but the contract omits it\nERROR citation-use-unmapped [thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains]: L3 is cited by 1.1 but the contract omits it\nERROR citation-fact-uncontracted [thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains]: L1 -> thm-equivalent-psh-exhaustion-and-boundary-distance-pseudoconvexity needs an exact citation contract\nERROR citation-fact-uncontracted [thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains]: L2 -> def-plurisubharmonic-function needs an exact citation contract\nERROR citation-fact-uncontracted [thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains]: L4 -> thm-maximum-principle-for-plane-subharmonic-functions needs an exact citation contract\nERROR step-entry-input-omitted [thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains]: step-1-1 omits L3, cited by 1.1\nERROR step-entry-input-omitted [thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains]: step-2-1 omits L1, cited by 2.1\nERROR step-entry-input-omitted [thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains]: step-2-1 omits L2, cited by 2.1\nERROR step-entry-input-omitted [thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains]: step-2-1 omits L4, cited by 2.1\nERROR citation-quote-mismatch [ex-the-ball-is-levi-pseudoconvex]: L1 quote does not occur in def-levi-pseudoconvex-domain's Definition\nERROR citation-quote-mismatch [thm-the-quotient-is-independent-of-the-representing-monomorphism]: L3 quote does not occur in thm-kernel-and-cokernel-are-mutually-inverse-order-anti-isomorphisms-between-subobjects-and-quotient-objects's Statement\nERROR citation-quote-mismatch [cor-path-and-antipath-free-graphs-have-the-erdos-hajnal-property]: L1 quote does not occur in thm-path-and-antipath-free-graphs-have-the-strong-erdos-hajnal-property's Statement\nERROR citation-fact-uncontracted [ex-a-vertex-can-be-mixed-on-a-quotient-block-while-pure-on-each-member-block]: L1 -> def-mixed-block-reachability-relation-on-a-blockade needs an exact citation contract\nWARN shotgun-bracket [thm-folner-criterion-for-amenability]: 1.1 cites 4 of 5 declared facts while 2 other step(s) cite none — cite each fact at the step that uses it\n",
      "named_ids": [
        "thm-schreier-generating-lemma",
        "lem-reidemeister-schreier-relators-are-independent-of-word-representatives",
        "thm-marshall-hall-free-factor-theorem",
        "thm-abelian-groups-are-amenable",
        "thm-subgroups-and-quotients-of-amenable-groups-are-amenable",
        "lem-directed-union-of-amenable-subgroups-is-amenable",
        "thm-folner-criterion-for-amenability",
        "prop-enumerated-countable-amenable-groups-admit-folner-sequences",
        "thm-subexponential-growth-implies-amenability",
        "thm-tarski-alternative",
        "thm-free-group-of-rank-two-is-nonamenable",
        "thm-amenability-is-a-quasi-isometry-invariant-for-finitely-generated-groups",
        "fs-one-finite-folner-set-proves-amenability",
        "fs-folner-sequences-exist-for-every-uncountable-amenable-group",
        "cor-solvable-and-locally-finite-groups-are-amenable",
        "ex-folner-intervals-in-the-integers",
        "ex-folner-boxes-in-zn",
        "ex-paradoxical-decomposition-of-a-free-group",
        "thm-additive-jordan-chevalley-decomposition",
        "cor-conjugate-elements-are-related-by-an-automorphism-of-an-algebraic-closure",
        "lem-partition-conjugation-is-an-involution",
        "thm-partitions-with-k-parts-equal-largest-part-k",
        "cor-partitions-with-at-most-k-parts-equal-parts-at-most-k",
        "thm-partitions-into-k-parts-recurrence",
        "cor-distinct-partitions-have-product-generating-function",
        "cor-odd-partitions-have-product-generating-function",
        "thm-glaisher-bijection-between-odd-and-distinct-partitions",
        "thm-self-conjugate-partitions-correspond-to-distinct-odd-partitions",
        "thm-euler-pentagonal-number-theorem-by-franklin",
        "cex-a-partition-that-is-not-self-conjugate",
        "cor-argument-principle-counts-preimages",
        "thm-weighted-argument-principle",
        "cex-e-to-one-over-z-shows-essential-singularities-break-the-argument-principle",
        "fs-the-argument-principle-counts-zeros-without-multiplicity",
        "lem-cauchy-estimates-propagate-to-holomorphic-hulls",
        "thm-cartan-thullen-theorem",
        "lem-levi-pseudoconvexity-is-independent-of-defining-function",
        "thm-continuity-principle-for-domains-of-holomorphy",
        "thm-hartogs-figure-extension",
        "def-holomorphic-extension-and-domain-of-holomorphy",
        "thm-domains-of-holomorphy-are-hartogs-pseudoconvex",
        "thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains",
        "thm-c-two-levi-criterion-for-plurisubharmonicity",
        "ex-the-ball-is-levi-pseudoconvex",
        "thm-the-quotient-is-independent-of-the-representing-monomorphism",
        "cor-path-and-antipath-free-graphs-have-the-erdos-hajnal-property",
        "ex-a-vertex-can-be-mixed-on-a-quotient-block-while-pure-on-each-member-block"
      ]
    },
    {
      "id": "risk-report",
      "stage": "8-preflight",
      "why": "ERROR risk-review-missing [cex-an-arbitrary-transversal-does-not-give-the-reduced-schreier-basis]: cex-an-arbitrary-transversal-does-not-give-the-reduced-schreier-basis is high risk and lacks a complete Alpha risk_review",
      "output": "HIGH 5 [lem-schreier-coset-graph-is-connected-and-deterministic] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [lem-spanning-trees-and-schreier-systems-correspond] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 4 [lem-schreier-generators-lie-in-the-subgroup] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [lem-schreier-rewriting-is-invariant-under-free-reduction] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [thm-schreier-generating-lemma] 1:3 cited facts; 2:quotient or equivalence-class construction\nMODERATE 3 [lem-tree-schreier-generators-are-freely-independent] 2:4 declared dependencies; 1:3 cited facts\nCRITICAL 12 [thm-nielsen-schreier-with-an-explicit-basis] 2:5 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nHIGH 5 [thm-schreier-index-rank-formula] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 1 [cor-free-groups-of-rank-at-least-two-have-subgroups-of-every-finite-rank] 1:3 cited facts\nCRITICAL 9 [thm-reidemeister-schreier-presentation] 3:7 declared dependencies; 2:6 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction\nMODERATE 3 [lem-reidemeister-schreier-relators-are-independent-of-word-representatives] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 1 [cor-finite-index-subgroups-of-finitely-presented-groups-are-finitely-presented] 1:2 cited facts\nHIGH 7 [thm-marshall-hall-free-factor-theorem] 2:5 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [fs-a-subgroup-of-a-finitely-generated-free-group-is-finitely-generated] 2:quotient or equivalence-class construction\nMODERATE 3 [fs-schreier-generators-are-always-a-free-basis] 1:3 cited facts; 2:quotient or equivalence-class construction\nORDINARY 0 [fs-a-finite-index-d-subgroup-of-a-rank-n-free-group-has-rank-dn] no signals\nORDINARY 2 [fs-reidemeister-schreier-needs-no-choice-of-transversal] 2:quotient or equivalence-class construction\nMODERATE 3 [ex-index-two-subgroup-of-a-rank-two-free-group] 1:2 cited facts; 2:quotient or equivalence-class construction\nHIGH 5 [ex-kernel-of-the-exponent-sum-map] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [ex-a-schreier-coset-graph-and-its-tree-basis] 1:3 cited facts; 2:quotient or equivalence-class construction\nORDINARY 2 [ex-reidemeister-schreier-for-a-surface-subgroup] 2:quotient or equivalence-class construction\nORDINARY 2 [ex-infinite-rank-subgroup-of-a-rank-two-free-group] 2:quotient or equivalence-class construction\nORDINARY 0 [ex-marshall-hall-separating-quotient] no signals\nHIGH 5 [cex-an-arbitrary-transversal-does-not-give-the-reduced-schreier-basis] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [lem-left-and-right-amenability-agree-by-inversion] 3:biconditional / both-direction claim; 2:boundary-sensitive language\nORDINARY 0 [prop-finite-groups-are-amenable] no signals\nMODERATE 3 [thm-abelian-groups-are-amenable] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [thm-subgroups-and-quotients-of-amenable-groups-are-amenable] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [thm-extensions-of-amenable-groups-are-amenable] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 0 [lem-directed-union-of-amenable-subgroups-is-amenable] no signals\nCRITICAL 8 [cor-solvable-and-locally-finite-groups-are-amenable] 2:6 declared dependencies; 2:6 cited facts; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 5 [lem-equivalent-folner-boundary-formulations] 3:biconditional / both-direction claim; 2:boundary-sensitive language\nCRITICAL 12 [thm-folner-criterion-for-amenability] 2:5 declared dependencies; 2:5 cited facts; 1:7 numbered proof steps; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 1 [prop-enumerated-countable-amenable-groups-admit-folner-sequences] 1:2 cited facts\nMODERATE 3 [thm-subexponential-growth-implies-amenability] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 1 [lem-paradoxical-groups-admit-no-invariant-mean] 1:2 cited facts\nCRITICAL 8 [thm-tarski-alternative] 2:5 declared dependencies; 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nORDINARY 1 [thm-free-group-of-rank-two-is-nonamenable] 1:3 cited facts\nMODERATE 3 [cor-groups-containing-a-rank-two-free-subgroup-are-nonamenable] 1:2 cited facts; 2:quotient or equivalence-class construction\nMODERATE 3 [thm-amenability-is-a-quasi-isometry-invariant-for-finitely-generated-groups] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 0 [fs-amenable-means-finite] no signals\nORDINARY 0 [fs-every-nonamenable-group-contains-a-rank-two-free-subgroup] no signals\nORDINARY 2 [fs-one-finite-folner-set-proves-amenability] 2:boundary-sensitive language\nHIGH 6 [fs-folner-sequences-exist-for-every-uncountable-amenable-group] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nORDINARY 0 [fs-paradoxical-decomposition-means-a-set-theoretic-partition-without-group-translates] no signals\nORDINARY 1 [ex-folner-intervals-in-the-integers] 1:2 cited facts\nMODERATE 3 [ex-folner-boxes-in-zn] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [ex-finite-and-locally-finite-amenable-groups] 1:2 cited facts\nHIGH 6 [ex-the-lamplighter-group-is-amenable] 2:4 declared dependencies; 2:4 cited facts; 2:quotient or equivalence-class construction\nORDINARY 2 [ex-boundary-expansion-in-the-free-group] 2:boundary-sensitive language\nMODERATE 3 [ex-paradoxical-decomposition-of-a-free-group] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cex-amenability-does-not-imply-subexponential-growth] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [lem-pell-norm-multiplication] 2:boundary-sensitive language\nMODERATE 4 [prop-integral-pell-solutions-form-a-group] 2:4 cited facts; 2:analytic limiting/completeness language\nCRITICAL 8 [lem-square-root-continued-fraction-state-recurrence] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nCRITICAL 9 [lem-square-root-convergent-norm-identity] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 6 [thm-square-root-continued-fraction-period-structure] 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nHIGH 7 [thm-lagrange-existence-for-pell-equation] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 14 [thm-negative-pell-period-parity-criterion] 3:7 declared dependencies; 2:5 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 9 [thm-all-positive-pell-solutions-are-fundamental-powers] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nHIGH 5 [cor-all-integral-pell-solutions] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 9 [thm-generalized-pell-solutions-have-finitely-many-orbits] 2:5 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 6 [cor-generalized-pell-solubility-is-decidable] 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 5 [cor-one-generalized-pell-solution-gives-infinitely-many] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [ex-pell-equation-for-two] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 4 [ex-pell-equation-for-three] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [ex-negative-pell-equation-for-five] 2:boundary-sensitive language\nHIGH 7 [ex-pell-equation-for-fourteen] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nMODERATE 4 [ex-large-fundamental-pell-solution-for-sixty-one] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [ex-generalized-pell-orbits-for-six] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 7 [ex-generalized-pell-bounded-representatives] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nMODERATE 4 [cex-generalized-pell-solutions-need-not-all-be-convergents] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 1 [cex-pell-units-need-not-be-all-quadratic-field-units] 1:2 cited facts\nMODERATE 4 [lem-artinian-domain-is-a-field] 2:4 declared dependencies; 2:analytic limiting/completeness language\nCRITICAL 9 [thm-artinian-ring-primes-are-maximal] 2:5 declared dependencies; 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nMODERATE 4 [thm-artinian-ring-has-finitely-many-maximal-ideals] 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 6 [thm-nilradical-of-artinian-ring-is-nilpotent] 2:4 declared dependencies; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 5 [thm-chinese-remainder-theorem-for-comaximal-ideals] 3:7 declared dependencies; 2:induction, recursion, or minimality\nCRITICAL 12 [thm-artinian-ring-is-noetherian] 3:10 declared dependencies; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 9 [thm-artinian-ring-has-finite-length] 2:5 declared dependencies; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language\nCRITICAL 9 [thm-artinian-local-ring-has-nilpotent-maximal-ideal] 3:7 declared dependencies; 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 9 [thm-structure-theorem-for-artinian-rings] 3:8 declared dependencies; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 0 [cor-prime-set-of-an-artinian-ring] no signals\nCRITICAL 14 [thm-artinian-ring-characterisation-by-primes] 3:12 declared dependencies; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nHIGH 6 [cor-artinian-quotients-and-localisations] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 4 [ex-artinian-truncated-polynomial-ring] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 0 [ex-artinian-product-of-local-rings] no signals\nMODERATE 4 [ex-field-is-artinian] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [ex-noetherian-not-artinian] 2:5 declared dependencies\nHIGH 6 [ex-length-of-a-truncated-local-module] 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nCRITICAL 9 [ex-zero-dimensional-nonnoetherian-ring] 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nMODERATE 4 [prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases] 1:2 cited facts; 3:biconditional / both-direction claim\nORDINARY 1 [thm-schur-triangularisation] 1:3 cited facts\nORDINARY 2 [lem-normal-upper-triangular-matrix-is-diagonal] 2:boundary-sensitive language\nHIGH 7 [thm-complex-spectral-theorem-for-normal-endomorphisms] 2:5 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim\nHIGH 6 [thm-real-normal-endomorphism-classification] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nORDINARY 1 [cor-real-spectral-theorem-for-self-adjoint-endomorphisms] 1:3 cited facts\nHIGH 5 [thm-spectral-resolution-and-polynomial-spectral-projections] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 2 [prop-functional-calculus-for-normal-endomorphisms] 2:boundary-sensitive language\nCRITICAL 12 [thm-additive-jordan-chevalley-decomposition] 3:8 declared dependencies; 2:5 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:induction, recursion, or minimality\nHIGH 5 [prop-operator-positivity-agrees-with-form-positivity-over-the-reals] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nHIGH 7 [thm-non-negative-operator-characterisations] 2:5 declared dependencies; 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 5 [thm-non-negative-square-root-exists-and-is-unique] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [prop-non-negative-square-root-is-a-polynomial-in-the-operator] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 1 [prop-singular-values-are-well-defined] 1:2 cited facts\nCRITICAL 8 [thm-singular-value-decomposition] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [cor-rank-equals-number-of-nonzero-singular-values] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 0 [cor-adjoint-has-the-same-singular-values] no signals\nHIGH 6 [thm-polar-decomposition] 1:3 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 2 [thm-operator-norm-is-the-largest-singular-value] 2:boundary-sensitive language\nORDINARY 1 [cor-operator-norm-submultiplicative-and-t-star-t-identity] 1:3 cited facts\nHIGH 6 [thm-eckart-young-best-rank-k-approximation] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nHIGH 5 [thm-courant-fischer-min-max-principle] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 4 [cor-rayleigh-quotient-extreme-eigenvalue-characterisation] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 1 [thm-cauchy-interlacing-for-self-adjoint-compressions] 1:3 cited facts\nHIGH 5 [thm-weyl-inequalities-for-self-adjoint-sums] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [thm-gershgorin-disk-theorem] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 0 [ex-real-symmetric-three-by-three-orthogonal-diagonalisation] no signals\nORDINARY 2 [ex-hermitian-two-by-two-unitary-diagonalisation] 2:boundary-sensitive language\nMODERATE 3 [ex-quarter-turn-real-normal-form] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [ex-complex-symmetric-nilpotent-matrix] 2:boundary-sensitive language\nMODERATE 3 [ex-non-negative-square-root-as-a-polynomial-in-a-matrix] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 0 [ex-polar-decomposition-of-an-invertible-matrix] no signals\nORDINARY 2 [ex-polar-decomposition-of-a-singular-matrix] 2:boundary-sensitive language\nORDINARY 0 [ex-singular-value-decomposition-of-a-two-by-three-matrix] no signals\nMODERATE 3 [ex-rank-one-svd-truncation] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [ex-courant-fischer-on-a-three-by-three-symmetric-matrix] 2:quotient or equivalence-class construction\nORDINARY 0 [ex-principal-submatrix-interlacing] no signals\nORDINARY 0 [ex-gershgorin-disks-and-spectrum] no signals\nORDINARY 0 [fs-normal-operators-are-diagonalisable-over-the-base-field] no signals\nORDINARY 1 [fs-complex-symmetric-matrices-are-unitarily-diagonalizable] 1:2 cited facts\nORDINARY 2 [fs-nonnegative-quadratic-values-force-self-adjointness] 2:boundary-sensitive language\nORDINARY 2 [fs-square-roots-of-a-non-negative-operator-are-unique] 2:existence, choice, uniqueness, or well-definedness\nORDINARY 2 [fs-polar-isometry-is-unique-for-singular-operators] 2:existence, choice, uniqueness, or well-definedness\nORDINARY 0 [fs-singular-values-are-absolute-values-of-the-eigenvalues] no signals\nORDINARY 2 [fs-operator-norm-is-the-largest-eigenvalue-modulus] 2:boundary-sensitive language\nHIGH 6 [thm-group-ring-is-a-unital-algebra-with-basis-g] 1:3 cited facts; 1:7 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 1 [cor-dimension-of-a-finite-group-algebra] 1:2 cited facts\nHIGH 6 [thm-group-ring-is-commutative-iff-the-group-is-abelian] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nCRITICAL 10 [thm-group-actions-and-group-ring-modules-correspond] 2:6 declared dependencies; 2:6 cited facts; 1:6 numbered proof steps; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 4 [cor-subrepresentations-correspond-to-submodules-and-irreducibility-to-simplicity] 1:3 cited facts; 3:biconditional / both-direction claim\nHIGH 6 [prop-intertwiner-space-is-a-vector-space-and-endomorphisms-form-a-k-algebra] 2:6 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language\nORDINARY 1 [thm-regular-representation-is-faithful] 1:2 cited facts\nMODERATE 3 [thm-every-irreducible-representation-is-a-quotient-of-the-regular-representation] 1:3 cited facts; 2:quotient or equivalence-class construction\nHIGH 6 [cor-irreducible-representations-have-degree-at-most-the-group-order] 2:5 declared dependencies; 2:5 cited facts; 2:quotient or equivalence-class construction\nORDINARY 1 [cor-schurs-lemma-for-irreducible-representations] 1:3 cited facts\nORDINARY 1 [cor-endomorphisms-of-an-irreducible-over-a-splitting-field-are-scalars] 1:2 cited facts\nMODERATE 3 [cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 12 [thm-degree-one-representations-are-exactly-homomorphisms-to-k-times-and-form-an-abelian-group] 3:7 declared dependencies; 2:7 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 9 [ex-the-complex-representations-of-a-cyclic-group-of-order-n-are-the-n-characters] 3:8 declared dependencies; 2:7 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [ex-the-regular-representation-of-c-two-splits-as-trivial-plus-sign] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-the-standard-two-dimensional-representation-of-s-three-is-irreducible] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-the-permutation-representation-on-left-cosets-g-mod-h] 1:2 cited facts; 2:quotient or equivalence-class construction\nCRITICAL 8 [ex-zero-divisors-in-the-group-algebra-of-a-nontrivial-finite-group] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [ex-the-quaternion-group-acts-on-the-quaternions-by-left-multiplication] 2:4 declared dependencies; 1:3 cited facts\nHIGH 5 [ex-the-real-two-dimensional-irreducible-of-c-three-has-endomorphism-ring-c] 3:7 declared dependencies; 2:6 cited facts\nORDINARY 1 [fs-every-representation-is-faithful] 1:2 cited facts\nMODERATE 3 [fs-the-group-algebra-of-a-nontrivial-finite-group-is-a-field] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [fs-every-degree-one-representation-is-trivial] 2:boundary-sensitive language\nORDINARY 0 [fs-schurs-lemma-over-an-arbitrary-field-still-forces-scalars] no signals\nORDINARY 2 [lem-partition-conjugation-is-an-involution] 2:boundary-sensitive language\nMODERATE 3 [thm-partitions-with-k-parts-equal-largest-part-k] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cor-partitions-with-at-most-k-parts-equal-parts-at-most-k] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [thm-partitions-into-k-parts-recurrence] 2:boundary-sensitive language\nMODERATE 3 [cor-distinct-partitions-have-product-generating-function] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cor-odd-partitions-have-product-generating-function] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-euler-distinct-parts-equal-odd-parts-by-generating-functions] 1:3 cited facts; 2:analytic limiting/completeness language\nORDINARY 0 [thm-glaisher-bijection-between-odd-and-distinct-partitions] no signals\nORDINARY 2 [thm-self-conjugate-partitions-correspond-to-distinct-odd-partitions] 2:boundary-sensitive language\nHIGH 7 [thm-durfee-square-identity] 2:4 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [thm-unlabelled-unlabelled-placement-counts] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 7 [thm-twelvefold-way] 3:9 declared dependencies; 2:7 cited facts; 2:boundary-sensitive language\nORDINARY 2 [thm-euler-pentagonal-number-theorem-by-franklin] 2:boundary-sensitive language\nMODERATE 3 [cor-pentagonal-recurrence-for-partition-numbers] 1:3 cited facts; 2:analytic limiting/completeness language\nMODERATE 3 [fs-partitions-into-k-parts-are-counted-by-binomial-coefficients] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [fs-conjugation-by-itself-carries-distinct-partitions-to-odd-partitions] 1:2 cited facts\nORDINARY 0 [cex-a-partition-that-is-not-self-conjugate] no signals\nORDINARY 0 [cex-conjugation-does-not-send-distinct-parts-to-odd-parts] no signals\nMODERATE 4 [cex-manipulating-the-euler-product-without-summability] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [lem-fixed-colourings-factor-by-cycle-type] 2:boundary-sensitive language\nORDINARY 1 [thm-polya-enumeration-theorem] 1:2 cited facts\nHIGH 5 [thm-weighted-pattern-inventory-formula] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-cycle-index-of-cyclic-group] 2:quotient or equivalence-class construction; 1:finite countermodel smoke test selected\nORDINARY 2 [thm-cycle-index-of-dihedral-group] 2:boundary-sensitive language\nORDINARY 0 [lem-permutations-with-a-given-cycle-type-count] no signals\nORDINARY 1 [thm-cycle-index-of-symmetric-group] 1:2 cited facts\nMODERATE 4 [thm-cycle-index-of-alternating-group] 2:4 declared dependencies; 2:4 cited facts\nORDINARY 1 [cor-necklace-count-via-cycle-index] 1:2 cited facts\nORDINARY 1 [cor-bracelet-count-via-cycle-index] 1:2 cited facts\nMODERATE 3 [thm-edge-set-orbits-on-two-subsets-by-polya] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness\nHIGH 7 [cor-symmetric-group-cycle-index-series-is-exponential] 2:5 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [fs-distinct-groups-have-distinct-cycle-indices] 2:quotient or equivalence-class construction\nMODERATE 4 [fs-cycle-index-determines-the-abstract-group] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [fs-pattern-inventory-specialises-to-the-plain-count-under-every-weight-assignment] 2:boundary-sensitive language\nORDINARY 2 [cex-c-four-and-v-four-can-share-a-nonfaithful-cycle-index] 2:quotient or equivalence-class construction\nORDINARY 2 [cex-substituting-x-i-equals-x-power-i-loses-colour-profile-information] 2:boundary-sensitive language\nCRITICAL 11 [lem-riemann-integrable-function-has-borel-darboux-envelopes] 3:14 declared dependencies; 2:14 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 12 [thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral] 3:11 declared dependencies; 2:11 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [cor-riemann-integrable-function-is-almost-everywhere-equal-to-a-borel-function] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [thm-arzela-bounded-convergence-for-riemann-integrals] 1:3 cited facts; 2:analytic limiting/completeness language\nHIGH 5 [thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 9 [thm-riemann-stieltjes-integral-agrees-with-lebesgue-stieltjes-integral] 3:11 declared dependencies; 2:11 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 12 [ex-indicator-of-the-rationals-is-lebesgue-integrable-with-integral-zero-and-not-riemann-integrable] 3:7 declared dependencies; 2:7 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 9 [fs-every-riemann-integrable-function-is-borel-measurable] 3:10 declared dependencies; 2:10 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nCRITICAL 11 [ex-open-dense-set-indicator-is-a-monotone-l-one-limit-of-riemann-integrable-functions-but-is-not-riemann-integrable] 3:10 declared dependencies; 2:10 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 9 [cex-the-sine-integral-is-improperly-riemann-integrable-and-not-lebesgue-integrable] 3:9 declared dependencies; 2:9 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 7 [cex-semicontinuous-function-almost-everywhere-equal-to-no-riemann-integrable-function] 3:7 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language\nCRITICAL 9 [cex-a-null-set-that-is-no-functions-discontinuity-set] 3:10 declared dependencies; 2:10 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [lem-logarithmic-derivative-order-residue] 2:6 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 6 [thm-argument-principle-null-homologous-cycle] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nCRITICAL 9 [thm-argument-principle-as-image-winding-number] 3:8 declared dependencies; 2:7 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [cor-argument-principle-counts-preimages] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [thm-weighted-argument-principle] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [thm-rouche-theorem] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [cor-local-zero-count-via-rouche] 2:boundary-sensitive language\nMODERATE 4 [thm-continuity-of-zeros-locally-uniform-convergence] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [thm-hurwitz-zero-free-limit] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 7 [thm-hurwitz-injective-limit] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [thm-holomorphic-inverse-contour-formula] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [ex-z-five-plus-three-z-plus-one-has-one-zero-in-the-unit-disc] 2:boundary-sensitive language\nORDINARY 2 [ex-z-five-plus-three-z-plus-one-has-four-zeros-in-the-annulus-one-to-two] 2:boundary-sensitive language\nORDINARY 2 [ex-e-to-z-minus-three-z-has-one-zero-in-the-unit-disc] 2:boundary-sensitive language\nMODERATE 4 [ex-a-cubic-image-curve-has-winding-number-three-about-the-origin] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [ex-hurwitz-preserves-a-simple-zero-under-local-uniform-convergence] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [ex-the-inverse-contour-formula-recovers-a-local-inverse-value] 2:boundary-sensitive language\nORDINARY 2 [cex-z-over-n-shows-why-hurwitz-needs-the-or-constant-clause] 2:analytic limiting/completeness language\nORDINARY 2 [cex-e-to-one-over-z-shows-essential-singularities-break-the-argument-principle] 2:boundary-sensitive language\nORDINARY 2 [cex-weak-boundary-inequality-does-not-suffice-for-rouche] 2:boundary-sensitive language\nORDINARY 2 [fs-a-locally-uniform-limit-of-injective-holomorphic-functions-is-injective] 2:analytic limiting/completeness language\nORDINARY 2 [fs-the-argument-principle-counts-zeros-without-multiplicity] 2:boundary-sensitive language\nMODERATE 4 [lem-basic-properties-of-the-holomorphic-hull] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [lem-cauchy-estimates-propagate-to-holomorphic-hulls] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [thm-cartan-thullen-boundary-radius-theorem] 2:6 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-cartan-thullen-theorem] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 0 [lem-finite-dimensional-separation-of-a-compact-convex-set-and-a-point] no signals\nORDINARY 1 [thm-convex-domains-are-holomorphically-convex] 1:3 cited facts\nORDINARY 1 [cor-convex-domains-are-domains-of-holomorphy] 1:2 cited facts\nMODERATE 3 [lem-affine-line-independence-in-the-definition-of-plurisubharmonicity] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 6 [thm-c-two-levi-criterion-for-plurisubharmonicity] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 3 [thm-decreasing-limits-of-plurisubharmonic-functions] 1:2 cited facts; 2:analytic limiting/completeness language\nMODERATE 3 [thm-holomorphic-pullback-of-plurisubharmonic-functions] 2:4 declared dependencies; 1:3 cited facts\nMODERATE 3 [thm-stability-operations-for-plurisubharmonic-functions] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [thm-upper-envelope-theorem-for-plurisubharmonic-functions] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [thm-maximum-principle-for-plurisubharmonic-functions] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cor-log-modulus-of-a-holomorphic-function-is-plurisubharmonic] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 4 [thm-equivalent-psh-exhaustion-and-boundary-distance-pseudoconvexity] 2:4 declared dependencies; 2:4 cited facts\nORDINARY 2 [lem-levi-pseudoconvexity-is-independent-of-defining-function] 2:boundary-sensitive language\nMODERATE 3 [thm-continuity-principle-for-domains-of-holomorphy] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-domains-of-holomorphy-are-hartogs-pseudoconvex] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 6 [thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains] 2:6 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language\nORDINARY 1 [ex-the-bidisc-is-holomorphically-convex] 1:2 cited facts\nMODERATE 3 [ex-the-ball-is-levi-pseudoconvex] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 0 [ex-a-convex-domain-is-a-domain-of-holomorphy] no signals\nMODERATE 3 [ex-the-holomorphic-hull-of-a-circle-in-c-is-the-filled-disc] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [ex-the-holomorphic-hull-of-a-product-torus-in-the-bidisc-is-the-polydisc] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [ex-minus-log-boundary-distance-is-plurisubharmonic-on-a-half-space] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [cex-the-bidisc-minus-the-origin-is-not-holomorphically-convex] 1:3 cited facts\nMODERATE 3 [cex-a-domain-of-holomorphy-need-not-be-convex] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [fs-every-domain-in-c-n-is-a-domain-of-holomorphy] 2:boundary-sensitive language\nMODERATE 3 [fs-the-union-of-two-domains-of-holomorphy-is-a-domain-of-holomorphy] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [prop-the-kernel-of-a-monomorphism-is-zero-and-the-cokernel-of-an-epimorphism-is-zero] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [prop-the-cokernel-of-a-zero-morphism-out-of-the-zero-object-is-an-isomorphism] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 4 [thm-a-morphism-factors-uniquely-through-its-coimage] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 4 [thm-a-morphism-factors-uniquely-through-its-image] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [thm-the-canonical-morphism-from-the-coimage-to-the-image-exists-and-is-unique] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 1 [prop-the-coimage-projection-is-epic-and-the-image-inclusion-is-monic] 1:2 cited facts\nHIGH 6 [thm-an-abelian-category-is-balanced] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nORDINARY 1 [thm-the-opposite-of-an-abelian-category-is-abelian] 1:3 cited facts\nHIGH 7 [thm-every-monomorphism-is-the-kernel-of-its-cokernel] 3:7 declared dependencies; 2:7 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [thm-epimorphism-monomorphism-factorisation-exists-and-is-unique-up-to-unique-isomorphism] 2:5 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nCRITICAL 8 [thm-the-image-is-the-least-subobject-through-which-a-morphism-factors] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 6 [cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nCRITICAL 8 [thm-the-freyd-axioms-imply-the-additive-axioms] 3:10 declared dependencies; 2:9 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language\nCRITICAL 8 [thm-the-freyd-mitchell-characterisation-of-an-abelian-category] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [thm-an-abelian-category-has-all-finite-limits-and-all-finite-colimits] 1:2 cited facts; 2:analytic limiting/completeness language\nHIGH 6 [thm-the-pullback-of-a-cospan-is-the-kernel-of-the-difference-of-its-legs] 2:4 declared dependencies; 2:4 cited facts; 2:analytic limiting/completeness language\nHIGH 6 [thm-the-pullback-of-an-epimorphism-is-an-epimorphism] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language\nORDINARY 1 [cor-the-pushout-of-a-monomorphism-is-a-monomorphism] 1:2 cited facts\nMODERATE 3 [thm-in-a-pullback-square-the-induced-morphism-on-the-kernels-of-the-parallel-legs-is-an-isomorphism] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 10 [thm-a-commuting-square-with-monic-legs-is-a-pullback-exactly-when-the-induced-morphism-to-the-intersection-is-an-isomorphism] 2:4 declared dependencies; 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 0 [thm-pullback-pasting-in-an-abelian-category] no signals\nCRITICAL 8 [thm-kernel-and-cokernel-are-mutually-inverse-order-anti-isomorphisms-between-subobjects-and-quotient-objects] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [thm-the-quotient-is-independent-of-the-representing-monomorphism] 1:3 cited facts; 2:quotient or equivalence-class construction\nHIGH 6 [thm-first-isomorphism-theorem-in-an-abelian-category] 2:5 declared dependencies; 2:5 cited facts; 2:quotient or equivalence-class construction\nCRITICAL 8 [thm-third-isomorphism-theorem-in-an-abelian-category] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [thm-a-composite-of-a-quotient-and-a-subobject-inclusion-is-the-canonical-factorisation] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [thm-a-left-or-right-exact-functor-between-abelian-categories-is-additive] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 10 [thm-one-sided-and-two-sided-exactness-by-short-exact-sequences] 3:7 declared dependencies; 2:5 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 4 [thm-an-additive-functor-is-exact-exactly-when-it-preserves-kernels-and-cokernels] 1:3 cited facts; 3:biconditional / both-direction claim\nMODERATE 3 [thm-a-left-exact-functor-preserves-monomorphisms-and-a-right-exact-functor-preserves-epimorphisms] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cex-an-exact-functor-need-not-be-faithful] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 6 [thm-an-equivalence-between-abelian-categories-is-exact] 2:6 declared dependencies; 2:5 cited facts; 2:analytic limiting/completeness language\nHIGH 6 [thm-abelian-groups-form-an-abelian-category] 2:6 declared dependencies; 2:5 cited facts; 2:quotient or equivalence-class construction\nMODERATE 4 [thm-modules-over-a-ring-form-an-abelian-category] 2:5 declared dependencies; 2:4 cited facts\nCRITICAL 8 [thm-additive-functors-from-a-small-preadditive-category-to-an-abelian-category-form-an-abelian-category] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [thm-a-small-product-of-abelian-categories-is-abelian] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [cex-filtered-vector-spaces-form-an-additive-category-with-all-kernels-and-cokernels-that-is-not-abelian] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [cex-torsion-free-abelian-groups-do-not-form-an-abelian-category] 2:4 declared dependencies; 1:3 cited facts\nMODERATE 3 [cor-an-abelian-category-that-is-a-preorder-is-trivial] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 1 [fs-an-additive-category-with-all-kernels-and-cokernels-is-abelian] 1:2 cited facts\nMODERATE 3 [fs-the-canonical-morphism-from-the-coimage-to-the-image-is-invertible-whenever-the-two-objects-are-isomorphic] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 0 [fs-in-an-abelian-category-a-morphism-that-is-monic-and-epic-need-not-be-an-isomorphism] no signals\nMODERATE 3 [fs-every-abelian-category-is-equivalent-to-a-category-of-modules] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 4 [fs-the-pullback-of-an-epimorphism-is-an-epimorphism-in-any-category-with-pullbacks] 2:5 declared dependencies; 2:4 cited facts\nORDINARY 2 [ex-kernels-cokernels-images-and-coimages-computed-in-abelian-groups] 2:quotient or equivalence-class construction\nMODERATE 3 [ex-the-canonical-factorisation-of-a-module-homomorphism] 1:2 cited facts; 2:quotient or equivalence-class construction\nORDINARY 1 [ex-a-pullback-computed-as-a-kernel-of-a-difference] 1:2 cited facts\nORDINARY 0 [ex-vector-spaces-over-a-field-as-an-abelian-category] no signals\nMODERATE 3 [ex-the-abelian-category-of-representations-of-a-two-object-quiver] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cex-topological-abelian-groups-are-additive-and-not-abelian] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 5 [ex-the-third-isomorphism-theorem-checked-for-abelian-groups] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 1 [ex-an-exact-functor-between-module-categories] 1:3 cited facts\nMODERATE 3 [cex-filtered-vector-spaces-fail-the-coimage-image-axiom] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [thm-nontrivial-p-four-free-graphs-are-disconnected-or-their-complements-are-disconnected] 2:6 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nCRITICAL 8 [cor-p-four-free-graphs-have-a-clique-or-stable-set-of-size-at-least-square-root-order] 2:6 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nCRITICAL 9 [thm-strong-erdos-hajnal-property-implies-erdos-hajnal-property] 2:6 declared dependencies; 2:5 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nORDINARY 2 [thm-erdos-hajnal-pach-pure-pair-theorem] 2:existence, choice, uniqueness, or well-definedness\nCRITICAL 13 [thm-path-and-antipath-free-graphs-have-the-strong-erdos-hajnal-property] 3:12 declared dependencies; 2:6 cited facts; 2:12 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nORDINARY 1 [cor-path-and-antipath-free-graphs-have-the-erdos-hajnal-property] 1:2 cited facts\nHIGH 6 [thm-forest-free-graphs-have-a-linear-anticomplete-pair-or-a-high-degree-vertex] 2:4 declared dependencies; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 5 [thm-forest-and-complement-free-graphs-have-the-strong-erdos-hajnal-property] 2:4 declared dependencies; 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 1 [cor-forest-and-complement-free-graphs-have-the-erdos-hajnal-property] 1:3 cited facts\nORDINARY 0 [thm-leaf-deletion-preserves-virality-of-a-finite-family] no signals\nORDINARY 1 [thm-leaf-and-coleaf-deletion-preserves-virality-of-a-finite-family] 1:2 cited facts\nORDINARY 1 [cor-leaf-and-coleaf-deletion-preserves-the-erdos-hajnal-property] 1:2 cited facts\nORDINARY 1 [ex-the-path-antipath-theorem-specialized-to-the-five-vertex-path] 1:2 cited facts\nORDINARY 0 [ex-the-forest-theorem-specialized-to-the-four-vertex-path] no signals\nORDINARY 1 [ex-a-coleaf-is-a-leaf-in-the-complement-of-the-five-vertex-path] 1:2 cited facts\nHIGH 7 [ex-the-leaf-coleaf-corollary-recovers-the-five-vertex-path-case-from-the-four-vertex-path-case] 3:7 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language\nORDINARY 1 [lem-mixed-block-reachability-is-an-equivalence-relation] 1:2 cited facts\nCRITICAL 11 [lem-quotient-blocks-preserve-connectedness-and-anticonnectedness] 3:7 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction\nHIGH 5 [lem-blocks-from-different-mixed-block-classes-form-pure-pairs] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [lem-a-vertex-mixed-on-a-quotient-block-yields-opposite-adjacency-on-two-member-blocks] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [lem-a-quotient-mixed-block-witness-descends-to-two-member-blocks] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 1 [cex-mixedness-of-blocks-is-not-transitive] 1:2 cited facts\nHIGH 5 [ex-a-mixed-chain-collapses-to-one-quotient-block] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [ex-a-vertex-can-be-mixed-on-a-quotient-block-while-pure-on-each-member-block] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [ex-the-quotient-witness-reduction-in-a-four-block-configuration] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nrisk-report: 2 error(s), 339 item(s) routed\nERROR risk-review-missing [cex-an-arbitrary-transversal-does-not-give-the-reduced-schreier-basis]: cex-an-arbitrary-transversal-does-not-give-the-reduced-schreier-basis is high risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [fs-folner-sequences-exist-for-every-uncountable-amenable-group]: fs-folner-sequences-exist-for-every-uncountable-amenable-group is high risk and lacks a complete Alpha risk_review\n",
      "named_ids": [
        "lem-schreier-coset-graph-is-connected-and-deterministic",
        "lem-spanning-trees-and-schreier-systems-correspond",
        "lem-schreier-generators-lie-in-the-subgroup",
        "lem-schreier-rewriting-is-invariant-under-free-reduction",
        "thm-schreier-generating-lemma",
        "lem-tree-schreier-generators-are-freely-independent",
        "thm-nielsen-schreier-with-an-explicit-basis",
        "thm-schreier-index-rank-formula",
        "cor-free-groups-of-rank-at-least-two-have-subgroups-of-every-finite-rank",
        "thm-reidemeister-schreier-presentation",
        "lem-reidemeister-schreier-relators-are-independent-of-word-representatives",
        "cor-finite-index-subgroups-of-finitely-presented-groups-are-finitely-presented",
        "thm-marshall-hall-free-factor-theorem",
        "fs-a-subgroup-of-a-finitely-generated-free-group-is-finitely-generated",
        "fs-schreier-generators-are-always-a-free-basis",
        "fs-a-finite-index-d-subgroup-of-a-rank-n-free-group-has-rank-dn",
        "fs-reidemeister-schreier-needs-no-choice-of-transversal",
        "ex-index-two-subgroup-of-a-rank-two-free-group",
        "ex-kernel-of-the-exponent-sum-map",
        "ex-a-schreier-coset-graph-and-its-tree-basis",
        "ex-reidemeister-schreier-for-a-surface-subgroup",
        "ex-infinite-rank-subgroup-of-a-rank-two-free-group",
        "ex-marshall-hall-separating-quotient",
        "cex-an-arbitrary-transversal-does-not-give-the-reduced-schreier-basis",
        "lem-left-and-right-amenability-agree-by-inversion",
        "prop-finite-groups-are-amenable",
        "thm-abelian-groups-are-amenable",
        "thm-subgroups-and-quotients-of-amenable-groups-are-amenable",
        "thm-extensions-of-amenable-groups-are-amenable",
        "lem-directed-union-of-amenable-subgroups-is-amenable",
        "cor-solvable-and-locally-finite-groups-are-amenable",
        "lem-equivalent-folner-boundary-formulations",
        "thm-folner-criterion-for-amenability",
        "prop-enumerated-countable-amenable-groups-admit-folner-sequences",
        "thm-subexponential-growth-implies-amenability",
        "lem-paradoxical-groups-admit-no-invariant-mean",
        "thm-tarski-alternative",
        "thm-free-group-of-rank-two-is-nonamenable",
        "cor-groups-containing-a-rank-two-free-subgroup-are-nonamenable",
        "thm-amenability-is-a-quasi-isometry-invariant-for-finitely-generated-groups",
        "fs-amenable-means-finite",
        "fs-every-nonamenable-group-contains-a-rank-two-free-subgroup",
        "fs-one-finite-folner-set-proves-amenability",
        "fs-folner-sequences-exist-for-every-uncountable-amenable-group",
        "fs-paradoxical-decomposition-means-a-set-theoretic-partition-without-group-translates",
        "ex-folner-intervals-in-the-integers",
        "ex-folner-boxes-in-zn",
        "ex-finite-and-locally-finite-amenable-groups",
        "ex-the-lamplighter-group-is-amenable",
        "ex-boundary-expansion-in-the-free-group",
        "ex-paradoxical-decomposition-of-a-free-group",
        "cex-amenability-does-not-imply-subexponential-growth",
        "lem-pell-norm-multiplication",
        "prop-integral-pell-solutions-form-a-group",
        "lem-square-root-continued-fraction-state-recurrence",
        "lem-square-root-convergent-norm-identity",
        "thm-square-root-continued-fraction-period-structure",
        "thm-lagrange-existence-for-pell-equation",
        "thm-negative-pell-period-parity-criterion",
        "thm-all-positive-pell-solutions-are-fundamental-powers",
        "cor-all-integral-pell-solutions",
        "thm-generalized-pell-solutions-have-finitely-many-orbits",
        "cor-generalized-pell-solubility-is-decidable",
        "cor-one-generalized-pell-solution-gives-infinitely-many",
        "ex-pell-equation-for-two",
        "ex-pell-equation-for-three",
        "ex-negative-pell-equation-for-five",
        "ex-pell-equation-for-fourteen",
        "ex-large-fundamental-pell-solution-for-sixty-one",
        "ex-generalized-pell-orbits-for-six",
        "ex-generalized-pell-bounded-representatives",
        "cex-generalized-pell-solutions-need-not-all-be-convergents",
        "cex-pell-units-need-not-be-all-quadratic-field-units",
        "lem-artinian-domain-is-a-field",
        "thm-artinian-ring-primes-are-maximal",
        "thm-artinian-ring-has-finitely-many-maximal-ideals",
        "thm-nilradical-of-artinian-ring-is-nilpotent",
        "thm-chinese-remainder-theorem-for-comaximal-ideals",
        "thm-artinian-ring-is-noetherian",
        "thm-artinian-ring-has-finite-length",
        "thm-artinian-local-ring-has-nilpotent-maximal-ideal",
        "thm-structure-theorem-for-artinian-rings",
        "cor-prime-set-of-an-artinian-ring",
        "thm-artinian-ring-characterisation-by-primes",
        "cor-artinian-quotients-and-localisations",
        "ex-artinian-truncated-polynomial-ring",
        "ex-artinian-product-of-local-rings",
        "ex-field-is-artinian",
        "ex-noetherian-not-artinian",
        "ex-length-of-a-truncated-local-module",
        "ex-zero-dimensional-nonnoetherian-ring",
        "prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases",
        "thm-schur-triangularisation",
        "lem-normal-upper-triangular-matrix-is-diagonal",
        "thm-complex-spectral-theorem-for-normal-endomorphisms",
        "thm-real-normal-endomorphism-classification",
        "cor-real-spectral-theorem-for-self-adjoint-endomorphisms",
        "thm-spectral-resolution-and-polynomial-spectral-projections",
        "prop-functional-calculus-for-normal-endomorphisms",
        "thm-additive-jordan-chevalley-decomposition",
        "prop-operator-positivity-agrees-with-form-positivity-over-the-reals",
        "thm-non-negative-operator-characterisations",
        "thm-non-negative-square-root-exists-and-is-unique",
        "prop-non-negative-square-root-is-a-polynomial-in-the-operator",
        "prop-singular-values-are-well-defined",
        "thm-singular-value-decomposition",
        "cor-rank-equals-number-of-nonzero-singular-values",
        "cor-adjoint-has-the-same-singular-values",
        "thm-polar-decomposition",
        "thm-operator-norm-is-the-largest-singular-value",
        "cor-operator-norm-submultiplicative-and-t-star-t-identity",
        "thm-eckart-young-best-rank-k-approximation",
        "thm-courant-fischer-min-max-principle",
        "cor-rayleigh-quotient-extreme-eigenvalue-characterisation",
        "thm-cauchy-interlacing-for-self-adjoint-compressions",
        "thm-weyl-inequalities-for-self-adjoint-sums",
        "thm-gershgorin-disk-theorem",
        "ex-real-symmetric-three-by-three-orthogonal-diagonalisation",
        "ex-hermitian-two-by-two-unitary-diagonalisation",
        "ex-quarter-turn-real-normal-form",
        "ex-complex-symmetric-nilpotent-matrix",
        "ex-non-negative-square-root-as-a-polynomial-in-a-matrix",
        "ex-polar-decomposition-of-an-invertible-matrix",
        "ex-polar-decomposition-of-a-singular-matrix",
        "ex-singular-value-decomposition-of-a-two-by-three-matrix",
        "ex-rank-one-svd-truncation",
        "ex-courant-fischer-on-a-three-by-three-symmetric-matrix",
        "ex-principal-submatrix-interlacing",
        "ex-gershgorin-disks-and-spectrum",
        "fs-normal-operators-are-diagonalisable-over-the-base-field",
        "fs-complex-symmetric-matrices-are-unitarily-diagonalizable",
        "fs-nonnegative-quadratic-values-force-self-adjointness",
        "fs-square-roots-of-a-non-negative-operator-are-unique",
        "fs-polar-isometry-is-unique-for-singular-operators",
        "fs-singular-values-are-absolute-values-of-the-eigenvalues",
        "fs-operator-norm-is-the-largest-eigenvalue-modulus",
        "thm-group-ring-is-a-unital-algebra-with-basis-g",
        "cor-dimension-of-a-finite-group-algebra",
        "thm-group-ring-is-commutative-iff-the-group-is-abelian",
        "thm-group-actions-and-group-ring-modules-correspond",
        "cor-subrepresentations-correspond-to-submodules-and-irreducibility-to-simplicity",
        "prop-intertwiner-space-is-a-vector-space-and-endomorphisms-form-a-k-algebra",
        "thm-regular-representation-is-faithful",
        "thm-every-irreducible-representation-is-a-quotient-of-the-regular-representation",
        "cor-irreducible-representations-have-degree-at-most-the-group-order",
        "cor-schurs-lemma-for-irreducible-representations",
        "cor-endomorphisms-of-an-irreducible-over-a-splitting-field-are-scalars",
        "cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars",
        "thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional",
        "thm-degree-one-representations-are-exactly-homomorphisms-to-k-times-and-form-an-abelian-group",
        "ex-the-complex-representations-of-a-cyclic-group-of-order-n-are-the-n-characters",
        "ex-the-regular-representation-of-c-two-splits-as-trivial-plus-sign",
        "ex-the-standard-two-dimensional-representation-of-s-three-is-irreducible",
        "ex-the-permutation-representation-on-left-cosets-g-mod-h",
        "ex-zero-divisors-in-the-group-algebra-of-a-nontrivial-finite-group",
        "ex-the-quaternion-group-acts-on-the-quaternions-by-left-multiplication",
        "ex-the-real-two-dimensional-irreducible-of-c-three-has-endomorphism-ring-c",
        "fs-every-representation-is-faithful",
        "fs-the-group-algebra-of-a-nontrivial-finite-group-is-a-field",
        "fs-every-degree-one-representation-is-trivial",
        "fs-schurs-lemma-over-an-arbitrary-field-still-forces-scalars",
        "lem-partition-conjugation-is-an-involution",
        "thm-partitions-with-k-parts-equal-largest-part-k",
        "cor-partitions-with-at-most-k-parts-equal-parts-at-most-k",
        "thm-partitions-into-k-parts-recurrence",
        "cor-distinct-partitions-have-product-generating-function",
        "cor-odd-partitions-have-product-generating-function",
        "thm-euler-distinct-parts-equal-odd-parts-by-generating-functions",
        "thm-glaisher-bijection-between-odd-and-distinct-partitions",
        "thm-self-conjugate-partitions-correspond-to-distinct-odd-partitions",
        "thm-durfee-square-identity",
        "thm-unlabelled-unlabelled-placement-counts",
        "thm-twelvefold-way",
        "thm-euler-pentagonal-number-theorem-by-franklin",
        "cor-pentagonal-recurrence-for-partition-numbers",
        "fs-partitions-into-k-parts-are-counted-by-binomial-coefficients",
        "fs-conjugation-by-itself-carries-distinct-partitions-to-odd-partitions",
        "cex-a-partition-that-is-not-self-conjugate",
        "cex-conjugation-does-not-send-distinct-parts-to-odd-parts",
        "cex-manipulating-the-euler-product-without-summability",
        "lem-fixed-colourings-factor-by-cycle-type",
        "thm-polya-enumeration-theorem",
        "thm-weighted-pattern-inventory-formula",
        "thm-cycle-index-of-cyclic-group",
        "thm-cycle-index-of-dihedral-group",
        "lem-permutations-with-a-given-cycle-type-count",
        "thm-cycle-index-of-symmetric-group",
        "thm-cycle-index-of-alternating-group",
        "cor-necklace-count-via-cycle-index",
        "cor-bracelet-count-via-cycle-index",
        "thm-edge-set-orbits-on-two-subsets-by-polya",
        "cor-symmetric-group-cycle-index-series-is-exponential",
        "fs-distinct-groups-have-distinct-cycle-indices",
        "fs-cycle-index-determines-the-abstract-group",
        "fs-pattern-inventory-specialises-to-the-plain-count-under-every-weight-assignment",
        "cex-c-four-and-v-four-can-share-a-nonfaithful-cycle-index",
        "cex-substituting-x-i-equals-x-power-i-loses-colour-profile-information",
        "lem-riemann-integrable-function-has-borel-darboux-envelopes",
        "thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral",
        "cor-riemann-integrable-function-is-almost-everywhere-equal-to-a-borel-function",
        "thm-arzela-bounded-convergence-for-riemann-integrals",
        "thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line",
        "thm-riemann-stieltjes-integral-agrees-with-lebesgue-stieltjes-integral",
        "ex-indicator-of-the-rationals-is-lebesgue-integrable-with-integral-zero-and-not-riemann-integrable",
        "fs-every-riemann-integrable-function-is-borel-measurable",
        "ex-open-dense-set-indicator-is-a-monotone-l-one-limit-of-riemann-integrable-functions-but-is-not-riemann-integrable",
        "cex-the-sine-integral-is-improperly-riemann-integrable-and-not-lebesgue-integrable",
        "cex-semicontinuous-function-almost-everywhere-equal-to-no-riemann-integrable-function",
        "cex-a-null-set-that-is-no-functions-discontinuity-set",
        "lem-logarithmic-derivative-order-residue",
        "thm-argument-principle-null-homologous-cycle",
        "thm-argument-principle-as-image-winding-number",
        "cor-argument-principle-counts-preimages",
        "thm-weighted-argument-principle",
        "thm-rouche-theorem",
        "cor-local-zero-count-via-rouche",
        "thm-continuity-of-zeros-locally-uniform-convergence",
        "thm-hurwitz-zero-free-limit",
        "thm-hurwitz-injective-limit",
        "thm-holomorphic-inverse-contour-formula",
        "ex-z-five-plus-three-z-plus-one-has-one-zero-in-the-unit-disc",
        "ex-z-five-plus-three-z-plus-one-has-four-zeros-in-the-annulus-one-to-two",
        "ex-e-to-z-minus-three-z-has-one-zero-in-the-unit-disc",
        "ex-a-cubic-image-curve-has-winding-number-three-about-the-origin",
        "ex-hurwitz-preserves-a-simple-zero-under-local-uniform-convergence",
        "ex-the-inverse-contour-formula-recovers-a-local-inverse-value",
        "cex-z-over-n-shows-why-hurwitz-needs-the-or-constant-clause",
        "cex-e-to-one-over-z-shows-essential-singularities-break-the-argument-principle",
        "cex-weak-boundary-inequality-does-not-suffice-for-rouche",
        "fs-a-locally-uniform-limit-of-injective-holomorphic-functions-is-injective",
        "fs-the-argument-principle-counts-zeros-without-multiplicity",
        "lem-basic-properties-of-the-holomorphic-hull",
        "lem-cauchy-estimates-propagate-to-holomorphic-hulls",
        "thm-cartan-thullen-boundary-radius-theorem",
        "thm-cartan-thullen-theorem",
        "lem-finite-dimensional-separation-of-a-compact-convex-set-and-a-point",
        "thm-convex-domains-are-holomorphically-convex",
        "cor-convex-domains-are-domains-of-holomorphy",
        "lem-affine-line-independence-in-the-definition-of-plurisubharmonicity",
        "thm-c-two-levi-criterion-for-plurisubharmonicity",
        "thm-decreasing-limits-of-plurisubharmonic-functions",
        "thm-holomorphic-pullback-of-plurisubharmonic-functions",
        "thm-stability-operations-for-plurisubharmonic-functions",
        "thm-upper-envelope-theorem-for-plurisubharmonic-functions",
        "thm-maximum-principle-for-plurisubharmonic-functions",
        "cor-log-modulus-of-a-holomorphic-function-is-plurisubharmonic",
        "thm-equivalent-psh-exhaustion-and-boundary-distance-pseudoconvexity",
        "lem-levi-pseudoconvexity-is-independent-of-defining-function",
        "thm-continuity-principle-for-domains-of-holomorphy",
        "thm-domains-of-holomorphy-are-hartogs-pseudoconvex",
        "thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains",
        "ex-the-bidisc-is-holomorphically-convex",
        "ex-the-ball-is-levi-pseudoconvex",
        "ex-a-convex-domain-is-a-domain-of-holomorphy",
        "ex-the-holomorphic-hull-of-a-circle-in-c-is-the-filled-disc",
        "ex-the-holomorphic-hull-of-a-product-torus-in-the-bidisc-is-the-polydisc",
        "ex-minus-log-boundary-distance-is-plurisubharmonic-on-a-half-space",
        "cex-the-bidisc-minus-the-origin-is-not-holomorphically-convex",
        "cex-a-domain-of-holomorphy-need-not-be-convex",
        "fs-every-domain-in-c-n-is-a-domain-of-holomorphy",
        "fs-the-union-of-two-domains-of-holomorphy-is-a-domain-of-holomorphy",
        "prop-the-kernel-of-a-monomorphism-is-zero-and-the-cokernel-of-an-epimorphism-is-zero",
        "prop-the-cokernel-of-a-zero-morphism-out-of-the-zero-object-is-an-isomorphism",
        "thm-a-morphism-factors-uniquely-through-its-coimage",
        "thm-a-morphism-factors-uniquely-through-its-image",
        "thm-the-canonical-morphism-from-the-coimage-to-the-image-exists-and-is-unique",
        "prop-the-coimage-projection-is-epic-and-the-image-inclusion-is-monic",
        "thm-an-abelian-category-is-balanced",
        "thm-the-opposite-of-an-abelian-category-is-abelian",
        "thm-every-monomorphism-is-the-kernel-of-its-cokernel",
        "thm-epimorphism-monomorphism-factorisation-exists-and-is-unique-up-to-unique-isomorphism",
        "thm-the-image-is-the-least-subobject-through-which-a-morphism-factors",
        "cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero",
        "thm-the-freyd-axioms-imply-the-additive-axioms",
        "thm-the-freyd-mitchell-characterisation-of-an-abelian-category",
        "thm-an-abelian-category-has-all-finite-limits-and-all-finite-colimits",
        "thm-the-pullback-of-a-cospan-is-the-kernel-of-the-difference-of-its-legs",
        "thm-the-pullback-of-an-epimorphism-is-an-epimorphism",
        "cor-the-pushout-of-a-monomorphism-is-a-monomorphism",
        "thm-in-a-pullback-square-the-induced-morphism-on-the-kernels-of-the-parallel-legs-is-an-isomorphism",
        "thm-a-commuting-square-with-monic-legs-is-a-pullback-exactly-when-the-induced-morphism-to-the-intersection-is-an-isomorphism",
        "thm-pullback-pasting-in-an-abelian-category",
        "thm-kernel-and-cokernel-are-mutually-inverse-order-anti-isomorphisms-between-subobjects-and-quotient-objects",
        "thm-the-quotient-is-independent-of-the-representing-monomorphism",
        "thm-first-isomorphism-theorem-in-an-abelian-category",
        "thm-third-isomorphism-theorem-in-an-abelian-category",
        "thm-a-composite-of-a-quotient-and-a-subobject-inclusion-is-the-canonical-factorisation",
        "thm-a-left-or-right-exact-functor-between-abelian-categories-is-additive",
        "thm-one-sided-and-two-sided-exactness-by-short-exact-sequences",
        "thm-an-additive-functor-is-exact-exactly-when-it-preserves-kernels-and-cokernels",
        "thm-a-left-exact-functor-preserves-monomorphisms-and-a-right-exact-functor-preserves-epimorphisms",
        "cex-an-exact-functor-need-not-be-faithful",
        "thm-an-equivalence-between-abelian-categories-is-exact",
        "thm-abelian-groups-form-an-abelian-category",
        "thm-modules-over-a-ring-form-an-abelian-category",
        "thm-additive-functors-from-a-small-preadditive-category-to-an-abelian-category-form-an-abelian-category",
        "thm-a-small-product-of-abelian-categories-is-abelian",
        "cex-filtered-vector-spaces-form-an-additive-category-with-all-kernels-and-cokernels-that-is-not-abelian",
        "cex-torsion-free-abelian-groups-do-not-form-an-abelian-category",
        "cor-an-abelian-category-that-is-a-preorder-is-trivial",
        "fs-an-additive-category-with-all-kernels-and-cokernels-is-abelian",
        "fs-the-canonical-morphism-from-the-coimage-to-the-image-is-invertible-whenever-the-two-objects-are-isomorphic",
        "fs-in-an-abelian-category-a-morphism-that-is-monic-and-epic-need-not-be-an-isomorphism",
        "fs-every-abelian-category-is-equivalent-to-a-category-of-modules",
        "fs-the-pullback-of-an-epimorphism-is-an-epimorphism-in-any-category-with-pullbacks",
        "ex-kernels-cokernels-images-and-coimages-computed-in-abelian-groups",
        "ex-the-canonical-factorisation-of-a-module-homomorphism",
        "ex-a-pullback-computed-as-a-kernel-of-a-difference",
        "ex-vector-spaces-over-a-field-as-an-abelian-category",
        "ex-the-abelian-category-of-representations-of-a-two-object-quiver",
        "cex-topological-abelian-groups-are-additive-and-not-abelian",
        "ex-the-third-isomorphism-theorem-checked-for-abelian-groups",
        "ex-an-exact-functor-between-module-categories",
        "cex-filtered-vector-spaces-fail-the-coimage-image-axiom",
        "thm-nontrivial-p-four-free-graphs-are-disconnected-or-their-complements-are-disconnected",
        "cor-p-four-free-graphs-have-a-clique-or-stable-set-of-size-at-least-square-root-order",
        "thm-strong-erdos-hajnal-property-implies-erdos-hajnal-property",
        "thm-erdos-hajnal-pach-pure-pair-theorem",
        "thm-path-and-antipath-free-graphs-have-the-strong-erdos-hajnal-property",
        "cor-path-and-antipath-free-graphs-have-the-erdos-hajnal-property",
        "thm-forest-free-graphs-have-a-linear-anticomplete-pair-or-a-high-degree-vertex",
        "thm-forest-and-complement-free-graphs-have-the-strong-erdos-hajnal-property",
        "cor-forest-and-complement-free-graphs-have-the-erdos-hajnal-property",
        "thm-leaf-deletion-preserves-virality-of-a-finite-family",
        "thm-leaf-and-coleaf-deletion-preserves-virality-of-a-finite-family",
        "cor-leaf-and-coleaf-deletion-preserves-the-erdos-hajnal-property",
        "ex-the-path-antipath-theorem-specialized-to-the-five-vertex-path",
        "ex-the-forest-theorem-specialized-to-the-four-vertex-path",
        "ex-a-coleaf-is-a-leaf-in-the-complement-of-the-five-vertex-path",
        "ex-the-leaf-coleaf-corollary-recovers-the-five-vertex-path-case-from-the-four-vertex-path-case",
        "lem-mixed-block-reachability-is-an-equivalence-relation",
        "lem-quotient-blocks-preserve-connectedness-and-anticonnectedness",
        "lem-blocks-from-different-mixed-block-classes-form-pure-pairs",
        "lem-a-vertex-mixed-on-a-quotient-block-yields-opposite-adjacency-on-two-member-blocks",
        "lem-a-quotient-mixed-block-witness-descends-to-two-member-blocks",
        "cex-mixedness-of-blocks-is-not-transitive",
        "ex-a-mixed-chain-collapses-to-one-quotient-block",
        "ex-a-vertex-can-be-mixed-on-a-quotient-block-while-pure-on-each-member-block",
        "ex-the-quotient-witness-reduction-in-a-four-block-configuration"
      ]
    },
    {
      "id": "boundary-audit",
      "stage": "8-preflight",
      "why": "Every line above is a candidate for a human read, not a verdict.",
      "output": "boundary-audit: 2712 rows over 1 contract file(s); 2302 marked not_applicable\n\nTEMPLATE REUSE — none at or above 3 members.\n\nCONTRADICTED DISPOSITIONS — 1 candidate(s).\nEach is a not_applicable row on an axis the item's own text exhibits. Read the item.\n\n  thm-continuity-principle-for-domains-of-holomorphy  [nonempty-choice]\n    the row credits step 1.2, which does not occur in the proof\n    row says: \"step 1.2 makes the needed witness choice on the page: Suppose $S\\ne[0,1]$, and let $t_0=\\sup S<1$. Then the boundary circles of $\\Phi_{t_0}$…\"\n\nUPHELD BY REVIEW — 10 row(s) an Alpha read and kept, with reasons on the record:\n  thm-twelvefold-way  [empty]  by contract-audit-4: The theorem fixes positive integers n and k, so the only indexed sum runs from j=1 to min(n,k), which is nonempty. The d\n  cor-pentagonal-recurrence-for-partition-numbers  [empty]  by contract-audit-4: The equivalent formula sums over all integers r, a fixed nonempty index set. The genuine boundary is n=0, and the contra\n  thm-polya-enumeration-theorem  [zero]  by contract-audit-4: The detector is reacting to the averaging factor 1/|G|, but a finite group has positive cardinality. No zero-denominator\n  thm-cycle-index-of-cyclic-group  [empty]  by contract-audit-4: The statement assumes n >= 1, so the divisor set of n always contains 1 and is never empty. The detector is only seeing \n  thm-cycle-index-of-cyclic-group  [zero]  by contract-audit-4: The same hypothesis n >= 1 makes the denominator n strictly positive, so the detector does not identify a real zero-deno\n  thm-cycle-index-of-alternating-group  [empty]  by contract-audit-4: The statement assumes n >= 2, so the index range d=1,...,n is nonempty and the cycle-type families are genuine finite tu\n  cor-necklace-count-via-cycle-index  [empty]  by contract-audit-4: The statement requires n >= 1, so the divisor set of n is nonempty and the cyclic-group average never collapses to an em\n  cor-necklace-count-via-cycle-index  [zero]  by contract-audit-4: The same hypotheses n >= 1 and m >= 1 make both the denominator n and the alphabet size m positive, so the detector does\n  cor-bracelet-count-via-cycle-index  [empty]  by contract-audit-4: The statement requires n >= 1, so the divisor set of n is nonempty in both parity clauses. The bracelet formulas are not\n  cor-bracelet-count-via-cycle-index  [zero]  by contract-audit-4: The same hypotheses n >= 1 and m >= 1 make 2n > 0 and m > 0, so neither the averaging denominator nor the alphabet-size \n\nEvery line above is a candidate for a human read, not a verdict.\n",
      "named_ids": []
    },
    {
      "id": "citation-fidelity",
      "stage": "8-preflight",
      "why": "Every line above is a candidate for a human read, not a verdict.",
      "output": "citation-fidelity: 835 citation(s) over 339 authored item(s)\n\nQUOTE NOT FOUND IN THE CITED ITEM — 1.\nThe contract asserts a verbatim quote. These do not appear in the source.\n\n  cor-path-and-antipath-free-graphs-have-the-erdos-hajnal-property  [L1] -> thm-path-and-antipath-free-graphs-have-the-strong-erdos-hajnal-property (searched: Statement)\n    quote: \"For every integer $k\\ge 2$, there exists a real constant $\\gamma_k>0$ such that every finite graph $G$ with no induced $P_k$ and no induced $\\overline{P_k}$ contains disjoint sets …\"\n\nWIDENING CANDIDATES — none found by the three detectors.\n\nEvery line above is a candidate for a human read, not a verdict.\n",
      "named_ids": []
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "thm-schreier-generating-lemma",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-reidemeister-schreier-relators-are-independent-of-word-representatives",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-marshall-hall-free-factor-theorem",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-abelian-groups-are-amenable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-subgroups-and-quotients-of-amenable-groups-are-amenable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-directed-union-of-amenable-subgroups-is-amenable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-folner-criterion-for-amenability",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-enumerated-countable-amenable-groups-admit-folner-sequences",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-subexponential-growth-implies-amenability",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-tarski-alternative",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-free-group-of-rank-two-is-nonamenable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-amenability-is-a-quasi-isometry-invariant-for-finitely-generated-groups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-one-finite-folner-set-proves-amenability",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-folner-sequences-exist-for-every-uncountable-amenable-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-solvable-and-locally-finite-groups-are-amenable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-folner-intervals-in-the-integers",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-folner-boxes-in-zn",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-paradoxical-decomposition-of-a-free-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-additive-jordan-chevalley-decomposition",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-conjugate-elements-are-related-by-an-automorphism-of-an-algebraic-closure",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "lem-partition-conjugation-is-an-involution",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-partitions-with-k-parts-equal-largest-part-k",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-partitions-with-at-most-k-parts-equal-parts-at-most-k",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-partitions-into-k-parts-recurrence",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-distinct-partitions-have-product-generating-function",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-odd-partitions-have-product-generating-function",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-glaisher-bijection-between-odd-and-distinct-partitions",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-self-conjugate-partitions-correspond-to-distinct-odd-partitions",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-euler-pentagonal-number-theorem-by-franklin",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-a-partition-that-is-not-self-conjugate",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-argument-principle-counts-preimages",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-weighted-argument-principle",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-e-to-one-over-z-shows-essential-singularities-break-the-argument-principle",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-the-argument-principle-counts-zeros-without-multiplicity",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-cauchy-estimates-propagate-to-holomorphic-hulls",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-cartan-thullen-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-levi-pseudoconvexity-is-independent-of-defining-function",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-continuity-principle-for-domains-of-holomorphy",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-hartogs-figure-extension",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "def-holomorphic-extension-and-domain-of-holomorphy",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-domains-of-holomorphy-are-hartogs-pseudoconvex",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-c-two-levi-criterion-for-plurisubharmonicity",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-ball-is-levi-pseudoconvex",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-the-quotient-is-independent-of-the-representing-monomorphism",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-path-and-antipath-free-graphs-have-the-erdos-hajnal-property",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-a-vertex-can-be-mixed-on-a-quotient-block-while-pure-on-each-member-block",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-schreier-coset-graph-is-connected-and-deterministic",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-spanning-trees-and-schreier-systems-correspond",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-schreier-generators-lie-in-the-subgroup",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-schreier-rewriting-is-invariant-under-free-reduction",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-tree-schreier-generators-are-freely-independent",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-nielsen-schreier-with-an-explicit-basis",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-schreier-index-rank-formula",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-free-groups-of-rank-at-least-two-have-subgroups-of-every-finite-rank",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-reidemeister-schreier-presentation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-finite-index-subgroups-of-finitely-presented-groups-are-finitely-presented",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-a-subgroup-of-a-finitely-generated-free-group-is-finitely-generated",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-schreier-generators-are-always-a-free-basis",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-a-finite-index-d-subgroup-of-a-rank-n-free-group-has-rank-dn",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-reidemeister-schreier-needs-no-choice-of-transversal",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-index-two-subgroup-of-a-rank-two-free-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-kernel-of-the-exponent-sum-map",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-a-schreier-coset-graph-and-its-tree-basis",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-reidemeister-schreier-for-a-surface-subgroup",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-infinite-rank-subgroup-of-a-rank-two-free-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-marshall-hall-separating-quotient",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-an-arbitrary-transversal-does-not-give-the-reduced-schreier-basis",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-left-and-right-amenability-agree-by-inversion",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-finite-groups-are-amenable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-extensions-of-amenable-groups-are-amenable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-equivalent-folner-boundary-formulations",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-paradoxical-groups-admit-no-invariant-mean",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-groups-containing-a-rank-two-free-subgroup-are-nonamenable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-amenable-means-finite",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-nonamenable-group-contains-a-rank-two-free-subgroup",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-paradoxical-decomposition-means-a-set-theoretic-partition-without-group-translates",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-finite-and-locally-finite-amenable-groups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-lamplighter-group-is-amenable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-boundary-expansion-in-the-free-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-amenability-does-not-imply-subexponential-growth",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-pell-norm-multiplication",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-integral-pell-solutions-form-a-group",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-square-root-continued-fraction-state-recurrence",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-square-root-convergent-norm-identity",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-square-root-continued-fraction-period-structure",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-lagrange-existence-for-pell-equation",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-negative-pell-period-parity-criterion",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-all-positive-pell-solutions-are-fundamental-powers",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-all-integral-pell-solutions",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-generalized-pell-solutions-have-finitely-many-orbits",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-generalized-pell-solubility-is-decidable",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-one-generalized-pell-solution-gives-infinitely-many",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-pell-equation-for-two",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-pell-equation-for-three",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-negative-pell-equation-for-five",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-pell-equation-for-fourteen",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-large-fundamental-pell-solution-for-sixty-one",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-generalized-pell-orbits-for-six",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-generalized-pell-bounded-representatives",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-generalized-pell-solutions-need-not-all-be-convergents",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-pell-units-need-not-be-all-quadratic-field-units",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-artinian-domain-is-a-field",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-artinian-ring-primes-are-maximal",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-artinian-ring-has-finitely-many-maximal-ideals",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-nilradical-of-artinian-ring-is-nilpotent",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-chinese-remainder-theorem-for-comaximal-ideals",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-artinian-ring-is-noetherian",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-artinian-ring-has-finite-length",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-artinian-local-ring-has-nilpotent-maximal-ideal",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-structure-theorem-for-artinian-rings",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-prime-set-of-an-artinian-ring",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-artinian-ring-characterisation-by-primes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-artinian-quotients-and-localisations",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-artinian-truncated-polynomial-ring",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-artinian-product-of-local-rings",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-field-is-artinian",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-noetherian-not-artinian",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-length-of-a-truncated-local-module",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-zero-dimensional-nonnoetherian-ring",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-schur-triangularisation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-normal-upper-triangular-matrix-is-diagonal",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-complex-spectral-theorem-for-normal-endomorphisms",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-real-normal-endomorphism-classification",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-real-spectral-theorem-for-self-adjoint-endomorphisms",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-spectral-resolution-and-polynomial-spectral-projections",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-functional-calculus-for-normal-endomorphisms",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-operator-positivity-agrees-with-form-positivity-over-the-reals",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-non-negative-operator-characterisations",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-non-negative-square-root-exists-and-is-unique",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-non-negative-square-root-is-a-polynomial-in-the-operator",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-singular-values-are-well-defined",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-singular-value-decomposition",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-rank-equals-number-of-nonzero-singular-values",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-adjoint-has-the-same-singular-values",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-polar-decomposition",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-operator-norm-is-the-largest-singular-value",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-operator-norm-submultiplicative-and-t-star-t-identity",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-eckart-young-best-rank-k-approximation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-courant-fischer-min-max-principle",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-rayleigh-quotient-extreme-eigenvalue-characterisation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-cauchy-interlacing-for-self-adjoint-compressions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-weyl-inequalities-for-self-adjoint-sums",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-gershgorin-disk-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-real-symmetric-three-by-three-orthogonal-diagonalisation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-hermitian-two-by-two-unitary-diagonalisation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-quarter-turn-real-normal-form",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-complex-symmetric-nilpotent-matrix",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-non-negative-square-root-as-a-polynomial-in-a-matrix",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-polar-decomposition-of-an-invertible-matrix",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-polar-decomposition-of-a-singular-matrix",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-singular-value-decomposition-of-a-two-by-three-matrix",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-rank-one-svd-truncation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-courant-fischer-on-a-three-by-three-symmetric-matrix",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-principal-submatrix-interlacing",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-gershgorin-disks-and-spectrum",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-normal-operators-are-diagonalisable-over-the-base-field",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-complex-symmetric-matrices-are-unitarily-diagonalizable",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-nonnegative-quadratic-values-force-self-adjointness",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-square-roots-of-a-non-negative-operator-are-unique",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-polar-isometry-is-unique-for-singular-operators",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-singular-values-are-absolute-values-of-the-eigenvalues",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-operator-norm-is-the-largest-eigenvalue-modulus",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-group-ring-is-a-unital-algebra-with-basis-g",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-dimension-of-a-finite-group-algebra",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-group-ring-is-commutative-iff-the-group-is-abelian",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-group-actions-and-group-ring-modules-correspond",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-subrepresentations-correspond-to-submodules-and-irreducibility-to-simplicity",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-intertwiner-space-is-a-vector-space-and-endomorphisms-form-a-k-algebra",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-regular-representation-is-faithful",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-every-irreducible-representation-is-a-quotient-of-the-regular-representation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-irreducible-representations-have-degree-at-most-the-group-order",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-schurs-lemma-for-irreducible-representations",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-endomorphisms-of-an-irreducible-over-a-splitting-field-are-scalars",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-degree-one-representations-are-exactly-homomorphisms-to-k-times-and-form-an-abelian-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-complex-representations-of-a-cyclic-group-of-order-n-are-the-n-characters",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-regular-representation-of-c-two-splits-as-trivial-plus-sign",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-standard-two-dimensional-representation-of-s-three-is-irreducible",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-permutation-representation-on-left-cosets-g-mod-h",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-zero-divisors-in-the-group-algebra-of-a-nontrivial-finite-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-quaternion-group-acts-on-the-quaternions-by-left-multiplication",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-real-two-dimensional-irreducible-of-c-three-has-endomorphism-ring-c",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-representation-is-faithful",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-group-algebra-of-a-nontrivial-finite-group-is-a-field",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-degree-one-representation-is-trivial",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-schurs-lemma-over-an-arbitrary-field-still-forces-scalars",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-euler-distinct-parts-equal-odd-parts-by-generating-functions",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-durfee-square-identity",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-unlabelled-unlabelled-placement-counts",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-twelvefold-way",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-pentagonal-recurrence-for-partition-numbers",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-partitions-into-k-parts-are-counted-by-binomial-coefficients",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-conjugation-by-itself-carries-distinct-partitions-to-odd-partitions",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-conjugation-does-not-send-distinct-parts-to-odd-parts",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-manipulating-the-euler-product-without-summability",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-fixed-colourings-factor-by-cycle-type",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-polya-enumeration-theorem",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-weighted-pattern-inventory-formula",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-cycle-index-of-cyclic-group",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-cycle-index-of-dihedral-group",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-permutations-with-a-given-cycle-type-count",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-cycle-index-of-symmetric-group",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-cycle-index-of-alternating-group",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-necklace-count-via-cycle-index",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-bracelet-count-via-cycle-index",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-edge-set-orbits-on-two-subsets-by-polya",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-symmetric-group-cycle-index-series-is-exponential",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-distinct-groups-have-distinct-cycle-indices",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-cycle-index-determines-the-abstract-group",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-pattern-inventory-specialises-to-the-plain-count-under-every-weight-assignment",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-c-four-and-v-four-can-share-a-nonfaithful-cycle-index",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-substituting-x-i-equals-x-power-i-loses-colour-profile-information",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-riemann-integrable-function-has-borel-darboux-envelopes",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-riemann-integrable-function-is-almost-everywhere-equal-to-a-borel-function",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-arzela-bounded-convergence-for-riemann-integrals",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-riemann-stieltjes-integral-agrees-with-lebesgue-stieltjes-integral",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-indicator-of-the-rationals-is-lebesgue-integrable-with-integral-zero-and-not-riemann-integrable",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-every-riemann-integrable-function-is-borel-measurable",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-open-dense-set-indicator-is-a-monotone-l-one-limit-of-riemann-integrable-functions-but-is-not-riemann-integrable",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-the-sine-integral-is-improperly-riemann-integrable-and-not-lebesgue-integrable",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-semicontinuous-function-almost-everywhere-equal-to-no-riemann-integrable-function",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-a-null-set-that-is-no-functions-discontinuity-set",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-logarithmic-derivative-order-residue",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-argument-principle-null-homologous-cycle",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-argument-principle-as-image-winding-number",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-rouche-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-local-zero-count-via-rouche",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-continuity-of-zeros-locally-uniform-convergence",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-hurwitz-zero-free-limit",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-hurwitz-injective-limit",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-holomorphic-inverse-contour-formula",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-z-five-plus-three-z-plus-one-has-one-zero-in-the-unit-disc",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-z-five-plus-three-z-plus-one-has-four-zeros-in-the-annulus-one-to-two",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-e-to-z-minus-three-z-has-one-zero-in-the-unit-disc",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-a-cubic-image-curve-has-winding-number-three-about-the-origin",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-hurwitz-preserves-a-simple-zero-under-local-uniform-convergence",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-inverse-contour-formula-recovers-a-local-inverse-value",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-z-over-n-shows-why-hurwitz-needs-the-or-constant-clause",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-weak-boundary-inequality-does-not-suffice-for-rouche",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-a-locally-uniform-limit-of-injective-holomorphic-functions-is-injective",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-basic-properties-of-the-holomorphic-hull",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-cartan-thullen-boundary-radius-theorem",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-finite-dimensional-separation-of-a-compact-convex-set-and-a-point",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-convex-domains-are-holomorphically-convex",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-convex-domains-are-domains-of-holomorphy",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-affine-line-independence-in-the-definition-of-plurisubharmonicity",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-decreasing-limits-of-plurisubharmonic-functions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-holomorphic-pullback-of-plurisubharmonic-functions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-stability-operations-for-plurisubharmonic-functions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-upper-envelope-theorem-for-plurisubharmonic-functions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-maximum-principle-for-plurisubharmonic-functions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-log-modulus-of-a-holomorphic-function-is-plurisubharmonic",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-equivalent-psh-exhaustion-and-boundary-distance-pseudoconvexity",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-bidisc-is-holomorphically-convex",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-a-convex-domain-is-a-domain-of-holomorphy",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-holomorphic-hull-of-a-circle-in-c-is-the-filled-disc",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-the-holomorphic-hull-of-a-product-torus-in-the-bidisc-is-the-polydisc",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-minus-log-boundary-distance-is-plurisubharmonic-on-a-half-space",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-the-bidisc-minus-the-origin-is-not-holomorphically-convex",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-a-domain-of-holomorphy-need-not-be-convex",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-every-domain-in-c-n-is-a-domain-of-holomorphy",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-the-union-of-two-domains-of-holomorphy-is-a-domain-of-holomorphy",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-the-kernel-of-a-monomorphism-is-zero-and-the-cokernel-of-an-epimorphism-is-zero",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-the-cokernel-of-a-zero-morphism-out-of-the-zero-object-is-an-isomorphism",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-a-morphism-factors-uniquely-through-its-coimage",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-a-morphism-factors-uniquely-through-its-image",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-canonical-morphism-from-the-coimage-to-the-image-exists-and-is-unique",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-the-coimage-projection-is-epic-and-the-image-inclusion-is-monic",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-an-abelian-category-is-balanced",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-opposite-of-an-abelian-category-is-abelian",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-every-monomorphism-is-the-kernel-of-its-cokernel",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-epimorphism-monomorphism-factorisation-exists-and-is-unique-up-to-unique-isomorphism",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-image-is-the-least-subobject-through-which-a-morphism-factors",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-freyd-axioms-imply-the-additive-axioms",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-freyd-mitchell-characterisation-of-an-abelian-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-an-abelian-category-has-all-finite-limits-and-all-finite-colimits",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-pullback-of-a-cospan-is-the-kernel-of-the-difference-of-its-legs",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-pullback-of-an-epimorphism-is-an-epimorphism",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-the-pushout-of-a-monomorphism-is-a-monomorphism",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-in-a-pullback-square-the-induced-morphism-on-the-kernels-of-the-parallel-legs-is-an-isomorphism",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-a-commuting-square-with-monic-legs-is-a-pullback-exactly-when-the-induced-morphism-to-the-intersection-is-an-isomorphism",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-pullback-pasting-in-an-abelian-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-kernel-and-cokernel-are-mutually-inverse-order-anti-isomorphisms-between-subobjects-and-quotient-objects",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-first-isomorphism-theorem-in-an-abelian-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-third-isomorphism-theorem-in-an-abelian-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-a-composite-of-a-quotient-and-a-subobject-inclusion-is-the-canonical-factorisation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-a-left-or-right-exact-functor-between-abelian-categories-is-additive",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-one-sided-and-two-sided-exactness-by-short-exact-sequences",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-an-additive-functor-is-exact-exactly-when-it-preserves-kernels-and-cokernels",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-a-left-exact-functor-preserves-monomorphisms-and-a-right-exact-functor-preserves-epimorphisms",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-an-exact-functor-need-not-be-faithful",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-an-equivalence-between-abelian-categories-is-exact",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-abelian-groups-form-an-abelian-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-modules-over-a-ring-form-an-abelian-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-additive-functors-from-a-small-preadditive-category-to-an-abelian-category-form-an-abelian-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-a-small-product-of-abelian-categories-is-abelian",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-filtered-vector-spaces-form-an-additive-category-with-all-kernels-and-cokernels-that-is-not-abelian",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-torsion-free-abelian-groups-do-not-form-an-abelian-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-an-abelian-category-that-is-a-preorder-is-trivial",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-an-additive-category-with-all-kernels-and-cokernels-is-abelian",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-canonical-morphism-from-the-coimage-to-the-image-is-invertible-whenever-the-two-objects-are-isomorphic",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-in-an-abelian-category-a-morphism-that-is-monic-and-epic-need-not-be-an-isomorphism",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-abelian-category-is-equivalent-to-a-category-of-modules",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-pullback-of-an-epimorphism-is-an-epimorphism-in-any-category-with-pullbacks",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-kernels-cokernels-images-and-coimages-computed-in-abelian-groups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-canonical-factorisation-of-a-module-homomorphism",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-a-pullback-computed-as-a-kernel-of-a-difference",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-vector-spaces-over-a-field-as-an-abelian-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-abelian-category-of-representations-of-a-two-object-quiver",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-topological-abelian-groups-are-additive-and-not-abelian",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-third-isomorphism-theorem-checked-for-abelian-groups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-an-exact-functor-between-module-categories",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-filtered-vector-spaces-fail-the-coimage-image-axiom",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-nontrivial-p-four-free-graphs-are-disconnected-or-their-complements-are-disconnected",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-p-four-free-graphs-have-a-clique-or-stable-set-of-size-at-least-square-root-order",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-strong-erdos-hajnal-property-implies-erdos-hajnal-property",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-erdos-hajnal-pach-pure-pair-theorem",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-path-and-antipath-free-graphs-have-the-strong-erdos-hajnal-property",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-forest-free-graphs-have-a-linear-anticomplete-pair-or-a-high-degree-vertex",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-forest-and-complement-free-graphs-have-the-strong-erdos-hajnal-property",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-forest-and-complement-free-graphs-have-the-erdos-hajnal-property",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-leaf-deletion-preserves-virality-of-a-finite-family",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-leaf-and-coleaf-deletion-preserves-virality-of-a-finite-family",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cor-leaf-and-coleaf-deletion-preserves-the-erdos-hajnal-property",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-the-path-antipath-theorem-specialized-to-the-five-vertex-path",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-the-forest-theorem-specialized-to-the-four-vertex-path",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-a-coleaf-is-a-leaf-in-the-complement-of-the-five-vertex-path",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-the-leaf-coleaf-corollary-recovers-the-five-vertex-path-case-from-the-four-vertex-path-case",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-mixed-block-reachability-is-an-equivalence-relation",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-quotient-blocks-preserve-connectedness-and-anticonnectedness",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-blocks-from-different-mixed-block-classes-form-pure-pairs",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-a-vertex-mixed-on-a-quotient-block-yields-opposite-adjacency-on-two-member-blocks",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-a-quotient-mixed-block-witness-descends-to-two-member-blocks",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-mixedness-of-blocks-is-not-transitive",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-a-mixed-chain-collapses-to-one-quotient-block",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-the-quotient-witness-reduction-in-a-four-block-configuration",
      "scope": "run",
      "owner": "d"
    }
  ],
  "assigned_items": [
    {
      "id": "thm-schreier-generating-lemma",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-reidemeister-schreier-relators-are-independent-of-word-representatives",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-marshall-hall-free-factor-theorem",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-abelian-groups-are-amenable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-subgroups-and-quotients-of-amenable-groups-are-amenable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-directed-union-of-amenable-subgroups-is-amenable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-folner-criterion-for-amenability",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-enumerated-countable-amenable-groups-admit-folner-sequences",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-subexponential-growth-implies-amenability",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-tarski-alternative",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-free-group-of-rank-two-is-nonamenable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-amenability-is-a-quasi-isometry-invariant-for-finitely-generated-groups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-one-finite-folner-set-proves-amenability",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-folner-sequences-exist-for-every-uncountable-amenable-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-solvable-and-locally-finite-groups-are-amenable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-folner-intervals-in-the-integers",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-folner-boxes-in-zn",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-paradoxical-decomposition-of-a-free-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-conjugate-elements-are-related-by-an-automorphism-of-an-algebraic-closure",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-hartogs-figure-extension",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "def-holomorphic-extension-and-domain-of-holomorphy",
      "scope": "unknown",
      "owner": null
    },
    {
      "id": "thm-the-quotient-is-independent-of-the-representing-monomorphism",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-schreier-coset-graph-is-connected-and-deterministic",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-spanning-trees-and-schreier-systems-correspond",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-schreier-generators-lie-in-the-subgroup",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-schreier-rewriting-is-invariant-under-free-reduction",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-tree-schreier-generators-are-freely-independent",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-nielsen-schreier-with-an-explicit-basis",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-schreier-index-rank-formula",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-free-groups-of-rank-at-least-two-have-subgroups-of-every-finite-rank",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-reidemeister-schreier-presentation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-finite-index-subgroups-of-finitely-presented-groups-are-finitely-presented",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-a-subgroup-of-a-finitely-generated-free-group-is-finitely-generated",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-schreier-generators-are-always-a-free-basis",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-a-finite-index-d-subgroup-of-a-rank-n-free-group-has-rank-dn",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-reidemeister-schreier-needs-no-choice-of-transversal",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-index-two-subgroup-of-a-rank-two-free-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-kernel-of-the-exponent-sum-map",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-a-schreier-coset-graph-and-its-tree-basis",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-reidemeister-schreier-for-a-surface-subgroup",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-infinite-rank-subgroup-of-a-rank-two-free-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-marshall-hall-separating-quotient",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-an-arbitrary-transversal-does-not-give-the-reduced-schreier-basis",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-left-and-right-amenability-agree-by-inversion",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-finite-groups-are-amenable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-extensions-of-amenable-groups-are-amenable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-equivalent-folner-boundary-formulations",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-paradoxical-groups-admit-no-invariant-mean",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-groups-containing-a-rank-two-free-subgroup-are-nonamenable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-amenable-means-finite",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-nonamenable-group-contains-a-rank-two-free-subgroup",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-paradoxical-decomposition-means-a-set-theoretic-partition-without-group-translates",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-finite-and-locally-finite-amenable-groups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-lamplighter-group-is-amenable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-boundary-expansion-in-the-free-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-amenability-does-not-imply-subexponential-growth",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-group-ring-is-a-unital-algebra-with-basis-g",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-dimension-of-a-finite-group-algebra",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-group-ring-is-commutative-iff-the-group-is-abelian",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-group-actions-and-group-ring-modules-correspond",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-subrepresentations-correspond-to-submodules-and-irreducibility-to-simplicity",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-intertwiner-space-is-a-vector-space-and-endomorphisms-form-a-k-algebra",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-regular-representation-is-faithful",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-every-irreducible-representation-is-a-quotient-of-the-regular-representation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-irreducible-representations-have-degree-at-most-the-group-order",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-schurs-lemma-for-irreducible-representations",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-endomorphisms-of-an-irreducible-over-a-splitting-field-are-scalars",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-degree-one-representations-are-exactly-homomorphisms-to-k-times-and-form-an-abelian-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-complex-representations-of-a-cyclic-group-of-order-n-are-the-n-characters",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-regular-representation-of-c-two-splits-as-trivial-plus-sign",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-standard-two-dimensional-representation-of-s-three-is-irreducible",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-permutation-representation-on-left-cosets-g-mod-h",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-zero-divisors-in-the-group-algebra-of-a-nontrivial-finite-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-quaternion-group-acts-on-the-quaternions-by-left-multiplication",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-real-two-dimensional-irreducible-of-c-three-has-endomorphism-ring-c",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-representation-is-faithful",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-group-algebra-of-a-nontrivial-finite-group-is-a-field",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-degree-one-representation-is-trivial",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-schurs-lemma-over-an-arbitrary-field-still-forces-scalars",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-the-kernel-of-a-monomorphism-is-zero-and-the-cokernel-of-an-epimorphism-is-zero",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-the-cokernel-of-a-zero-morphism-out-of-the-zero-object-is-an-isomorphism",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-a-morphism-factors-uniquely-through-its-coimage",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-a-morphism-factors-uniquely-through-its-image",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-canonical-morphism-from-the-coimage-to-the-image-exists-and-is-unique",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-the-coimage-projection-is-epic-and-the-image-inclusion-is-monic",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-an-abelian-category-is-balanced",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-opposite-of-an-abelian-category-is-abelian",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-every-monomorphism-is-the-kernel-of-its-cokernel",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-epimorphism-monomorphism-factorisation-exists-and-is-unique-up-to-unique-isomorphism",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-image-is-the-least-subobject-through-which-a-morphism-factors",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-freyd-axioms-imply-the-additive-axioms",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-freyd-mitchell-characterisation-of-an-abelian-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-an-abelian-category-has-all-finite-limits-and-all-finite-colimits",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-pullback-of-a-cospan-is-the-kernel-of-the-difference-of-its-legs",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-the-pullback-of-an-epimorphism-is-an-epimorphism",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-the-pushout-of-a-monomorphism-is-a-monomorphism",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-in-a-pullback-square-the-induced-morphism-on-the-kernels-of-the-parallel-legs-is-an-isomorphism",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-a-commuting-square-with-monic-legs-is-a-pullback-exactly-when-the-induced-morphism-to-the-intersection-is-an-isomorphism",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-pullback-pasting-in-an-abelian-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-kernel-and-cokernel-are-mutually-inverse-order-anti-isomorphisms-between-subobjects-and-quotient-objects",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-first-isomorphism-theorem-in-an-abelian-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-third-isomorphism-theorem-in-an-abelian-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-a-composite-of-a-quotient-and-a-subobject-inclusion-is-the-canonical-factorisation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-a-left-or-right-exact-functor-between-abelian-categories-is-additive",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-one-sided-and-two-sided-exactness-by-short-exact-sequences",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-an-additive-functor-is-exact-exactly-when-it-preserves-kernels-and-cokernels",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-a-left-exact-functor-preserves-monomorphisms-and-a-right-exact-functor-preserves-epimorphisms",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-an-exact-functor-need-not-be-faithful",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-an-equivalence-between-abelian-categories-is-exact",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-abelian-groups-form-an-abelian-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-modules-over-a-ring-form-an-abelian-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-additive-functors-from-a-small-preadditive-category-to-an-abelian-category-form-an-abelian-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-a-small-product-of-abelian-categories-is-abelian",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-filtered-vector-spaces-form-an-additive-category-with-all-kernels-and-cokernels-that-is-not-abelian",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-torsion-free-abelian-groups-do-not-form-an-abelian-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-an-abelian-category-that-is-a-preorder-is-trivial",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-an-additive-category-with-all-kernels-and-cokernels-is-abelian",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-canonical-morphism-from-the-coimage-to-the-image-is-invertible-whenever-the-two-objects-are-isomorphic",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-in-an-abelian-category-a-morphism-that-is-monic-and-epic-need-not-be-an-isomorphism",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-abelian-category-is-equivalent-to-a-category-of-modules",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-pullback-of-an-epimorphism-is-an-epimorphism-in-any-category-with-pullbacks",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-kernels-cokernels-images-and-coimages-computed-in-abelian-groups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-canonical-factorisation-of-a-module-homomorphism",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-a-pullback-computed-as-a-kernel-of-a-difference",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-vector-spaces-over-a-field-as-an-abelian-category",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-abelian-category-of-representations-of-a-two-object-quiver",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-topological-abelian-groups-are-additive-and-not-abelian",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-third-isomorphism-theorem-checked-for-abelian-groups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-an-exact-functor-between-module-categories",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-filtered-vector-spaces-fail-the-coimage-image-axiom",
      "scope": "run",
      "owner": "a"
    }
  ],
  "live_tuples": []
}
```

---

# Step 8 — group **a**, run `frontier-21`

You are the group Alpha for batches **1**, **5**, **9**: 4 A/B pair(s), 8 page(s), 163 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-21-alpha-a-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-21-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `subgroups-of-free-groups-and-schreier-rewriting` | A | group-theory | 71.009 | `socles-and-the-onan-scott-landscape-examples` |
| 1 | `subgroups-of-free-groups-and-schreier-rewriting-examples` | B | group-theory | 71.01 | `subgroups-of-free-groups-and-schreier-rewriting` |
| 1 | `amenable-groups-and-folner-criteria` | A | group-theory | 302.007 | `hyperbolic-spaces-and-hyperbolic-groups-examples` |
| 1 | `amenable-groups-and-folner-criteria-examples` | B | group-theory | 302.008 | `amenable-groups-and-folner-criteria` |
| 5 | `the-group-algebra-and-representations` | A | abstract-algebra | 143 | `chain-conditions-and-semisimple-modules`, `the-fundamental-theorem-of-algebra`, `sylow-theorems-and-nilpotent-groups`, `matrices-and-the-matrix-of-a-linear-map` |
| 5 | `the-group-algebra-and-representations-examples` | B | abstract-algebra | 144 | `the-group-algebra-and-representations` |
| 9 | `abelian-categories` | A | category-theory | 365.015 | `preadditive-and-additive-categories-and-biproducts-examples`, `modules-over-a-pid-and-canonical-forms` |
| 9 | `abelian-categories-examples` | B | category-theory | 365.016 | `abelian-categories`, `uniform-spaces`, `localisation-of-modules-and-support` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `subgroups-of-free-groups-and-schreier-rewriting` — Subgroups of Free Groups and Schreier Rewriting (21 item(s))

- `def-labeled-schreier-coset-graph` · definition — The labeled Schreier coset graph of a subgroup of a free group
- `lem-schreier-coset-graph-is-connected-and-deterministic` · lemma — The Schreier coset graph is connected and deterministic
- `def-schreier-transversal-and-schreier-system` · definition — Schreier transversals and Schreier systems
- `lem-spanning-trees-and-schreier-systems-correspond` · lemma — Rooted spanning trees and Schreier systems correspond
- `def-schreier-generator` · definition — Schreier generators in the right-coset convention
- `lem-schreier-generators-lie-in-the-subgroup` · lemma — Every Schreier generator lies in the subgroup
- `def-schreier-rewriting-map` · definition — The Schreier rewriting map
- `lem-schreier-rewriting-is-invariant-under-free-reduction` · lemma — Schreier rewriting is invariant under free reduction
- `thm-schreier-generating-lemma` · theorem — The nontrivial Schreier generators generate the subgroup
- `lem-tree-schreier-generators-are-freely-independent` · lemma — Tree Schreier generators are freely independent
- `thm-nielsen-schreier-with-an-explicit-basis` · theorem — Under the stated choice boundary, every subgroup of a free group is free with its nontrivial Schreier generators as a basis
- `thm-schreier-index-rank-formula` · theorem — The Schreier index-rank formula
- `cor-free-groups-of-rank-at-least-two-have-subgroups-of-every-finite-rank` · corollary — A free group of rank at least two has subgroups of every finite rank
- `thm-reidemeister-schreier-presentation` · theorem — The Reidemeister-Schreier presentation theorem
- `lem-reidemeister-schreier-relators-are-independent-of-word-representatives` · lemma — Reidemeister-Schreier relators are independent of word representatives
- `cor-finite-index-subgroups-of-finitely-presented-groups-are-finitely-presented` · corollary — Finite-index subgroups of finitely presented groups are finitely presented
- `thm-marshall-hall-free-factor-theorem` · theorem — Every finitely generated subgroup of a finite-rank free group is a free factor of a finite-index subgroup
- `fs-a-subgroup-of-a-finitely-generated-free-group-is-finitely-generated` · false-statement — FALSE: every subgroup of a finitely generated free group is finitely generated
- `fs-schreier-generators-are-always-a-free-basis` · false-statement — FALSE: the raw Schreier generators are always a free basis
- `fs-a-finite-index-d-subgroup-of-a-rank-n-free-group-has-rank-dn` · false-statement — FALSE: a finite-index d subgroup of a rank n free group has rank dn
- `fs-reidemeister-schreier-needs-no-choice-of-transversal` · false-statement — FALSE: the Reidemeister-Schreier presentation needs no choice of transversal

### `subgroups-of-free-groups-and-schreier-rewriting-examples` — Subgroups of Free Groups and Schreier Rewriting — Examples (7 item(s))

- `ex-index-two-subgroup-of-a-rank-two-free-group` · example — An index-two subgroup of a rank-two free group has rank three
- `ex-kernel-of-the-exponent-sum-map` · example — The kernel of an exponent-sum map in a free group
- `ex-a-schreier-coset-graph-and-its-tree-basis` · example — A Schreier coset graph and its spanning-tree basis
- `ex-reidemeister-schreier-for-a-surface-subgroup` · example — A Reidemeister-Schreier presentation for a surface subgroup
- `ex-infinite-rank-subgroup-of-a-rank-two-free-group` · example — A rank-two free group contains an infinite-rank subgroup
- `ex-marshall-hall-separating-quotient` · example — Marshall Hall's theorem produces a separating finite-index overgroup
- `cex-an-arbitrary-transversal-does-not-give-the-reduced-schreier-basis` · counterexample — An arbitrary transversal need not give the reduced Schreier basis

### `amenable-groups-and-folner-criteria` — Amenable Groups and Folner Criteria (29 item(s))

- `def-mean-on-bounded-functions-on-a-group` · definition — Means on bounded functions on a group
- `def-left-translation-action-on-bounded-functions` · definition — Left translation on bounded functions
- `def-left-invariant-mean-and-amenable-group` · definition — Left-invariant means and amenable groups
- `lem-left-and-right-amenability-agree-by-inversion` · lemma — Left and right amenability agree by inversion
- `prop-finite-groups-are-amenable` · proposition — Finite groups are amenable
- `thm-abelian-groups-are-amenable` · theorem — Abelian groups are amenable
- `thm-subgroups-and-quotients-of-amenable-groups-are-amenable` · theorem — Subgroups and quotients of amenable groups are amenable
- `thm-extensions-of-amenable-groups-are-amenable` · theorem — Extensions of amenable groups are amenable
- `def-locally-finite-group` · definition — Locally finite groups
- `lem-directed-union-of-amenable-subgroups-is-amenable` · lemma — Directed unions of amenable subgroups are amenable
- `cor-solvable-and-locally-finite-groups-are-amenable` · corollary — Solvable groups and locally finite groups are amenable
- `def-folner-set-and-folner-condition` · definition — Folner sets and the Folner condition
- `lem-equivalent-folner-boundary-formulations` · lemma — Equivalent boundary formulations of the Folner condition
- `thm-folner-criterion-for-amenability` · theorem — The Folner criterion for amenability
- `def-folner-sequence` · definition — Folner sequences for enumerated groups
- `prop-enumerated-countable-amenable-groups-admit-folner-sequences` · proposition — Enumerated countable amenable groups admit Folner sequences
- `thm-subexponential-growth-implies-amenability` · theorem — Subexponential growth implies amenability
- `def-paradoxical-decomposition-of-a-group` · definition — Paradoxical decompositions of groups
- `lem-paradoxical-groups-admit-no-invariant-mean` · lemma — Paradoxical groups admit no invariant mean
- `thm-tarski-alternative` · theorem — A group is amenable if and only if it is not paradoxical
- `thm-free-group-of-rank-two-is-nonamenable` · theorem — The free group of rank two is nonamenable
- `cor-groups-containing-a-rank-two-free-subgroup-are-nonamenable` · corollary — Groups containing a rank-two free subgroup are nonamenable
- `thm-amenability-is-a-quasi-isometry-invariant-for-finitely-generated-groups` · theorem — Amenability is a quasi-isometry invariant for finitely generated groups
- `rem-nonamenable-groups-without-nonabelian-free-subgroups` · remark — There exist nonamenable groups without nonabelian free subgroups
- `fs-amenable-means-finite` · false-statement — FALSE: amenable means finite
- `fs-every-nonamenable-group-contains-a-rank-two-free-subgroup` · false-statement — FALSE: every nonamenable group contains a rank-two free subgroup
- `fs-one-finite-folner-set-proves-amenability` · false-statement — FALSE: one finite Folner set proves amenability
- `fs-folner-sequences-exist-for-every-uncountable-amenable-group` · false-statement — FALSE: every uncountable amenable group has a Folner sequence
- `fs-paradoxical-decomposition-means-a-set-theoretic-partition-without-group-translates` · false-statement — FALSE: a paradoxical decomposition is just an abstract partition without prescribed translates

### `amenable-groups-and-folner-criteria-examples` — Amenable Groups and Folner Criteria — Examples (7 item(s))

- `ex-folner-intervals-in-the-integers` · example — Intervals in Z are Folner sets
- `ex-folner-boxes-in-zn` · example — Boxes in Z^n are Folner sets
- `ex-finite-and-locally-finite-amenable-groups` · example — Finite groups and locally finite groups are amenable
- `ex-the-lamplighter-group-is-amenable` · example — The standard lamplighter group is amenable
- `ex-boundary-expansion-in-the-free-group` · example — Boundary expansion in the free group
- `ex-paradoxical-decomposition-of-a-free-group` · example — A paradoxical decomposition of a free group of rank two
- `cex-amenability-does-not-imply-subexponential-growth` · counterexample — Amenability does not imply subexponential growth

### `the-group-algebra-and-representations` — The Group Algebra and Representations of Finite Groups (24 item(s))

- `def-group-ring` · definition — The group ring $R[G]$ of finitely supported formal $R$-linear combinations of group elements
- `thm-group-ring-is-a-unital-algebra-with-basis-g` · theorem — The group ring $R[G]$ is a unital $R$-algebra with basis $G$, and each $g\in G$ is a unit of $R[G]$
- `def-augmentation-map-and-augmentation-ideal-of-a-group-ring` · definition — The augmentation map $\varepsilon:R[G]\to R$ and the augmentation ideal $I_G=\ker\varepsilon$
- `cor-dimension-of-a-finite-group-algebra` · corollary — If $G$ is finite then $\dim_k k[G]=|G|$
- `thm-group-ring-is-commutative-iff-the-group-is-abelian` · theorem — For a field $k$, the group algebra $k[G]$ is commutative if and only if $G$ is abelian
- `def-g-module-over-a-commutative-ring` · definition — An $R$-linear action of $G$ on a left $R$-module, and a $G$-module over $R$
- `def-finite-dimensional-representation-of-a-group-over-a-field` · definition — A finite-dimensional representation $\rho:G\to \operatorname{GL}(V)$ over a field, and its degree
- `def-subrepresentation-and-irreducible-representation` · definition — Subrepresentations, direct sums of representations, and irreducibility
- `def-intertwiner-equivalent-and-faithful-representations` · definition — Intertwiners, the spaces $\operatorname{Hom}_G(V,W)$ and $\operatorname{End}_G(V)$, equivalent representations, and faithful representations
- `thm-group-actions-and-group-ring-modules-correspond` · theorem — For a commutative ring $R$, $R$-linear $G$-actions are exactly the compatible left $R[G]$-module structures
- `cor-subrepresentations-correspond-to-submodules-and-irreducibility-to-simplicity` · corollary — Under the dictionary, subrepresentations are exactly submodules and irreducible representations are exactly simple modules
- `prop-intertwiner-space-is-a-vector-space-and-endomorphisms-form-a-k-algebra` · proposition — $\operatorname{Hom}_G(V,W)$ is a $k$-vector space and $\operatorname{End}_G(V)$ is a $k$-algebra
- `def-trivial-regular-and-permutation-representations` · definition — The trivial representation, the regular representation, and permutation representations from finite $G$-sets
- `def-sign-representation-and-restriction-of-a-representation` · definition — The sign representation of $S_n$ and the restriction $\operatorname{Res}^G_H(V)$ of a representation to a subgroup
- `thm-regular-representation-is-faithful` · theorem — The regular representation is faithful
- `thm-every-irreducible-representation-is-a-quotient-of-the-regular-representation` · theorem — Every irreducible representation of a finite group is a quotient of the regular representation
- `cor-irreducible-representations-have-degree-at-most-the-group-order` · corollary — Every irreducible representation of a finite group has degree at most $|G|$
- `def-splitting-field-for-a-finite-group` · definition — A splitting field for a finite group: every irreducible representation has scalar endomorphism ring
- `rem-brauers-cyclotomic-splitting-field-criterion-is-not-proved-here` · remark — Brauer's cyclotomic criterion for splitting fields is recorded here only as an external theorem
- `cor-schurs-lemma-for-irreducible-representations` · corollary — Schur's lemma for irreducible representations: a nonzero intertwiner is an isomorphism, and $\operatorname{End}_G(V)$ is a division ring
- `cor-endomorphisms-of-an-irreducible-over-a-splitting-field-are-scalars` · corollary — Over a splitting field, every $G$-endomorphism of an irreducible representation is scalar
- `cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars` · corollary — Over an algebraically closed field, every endomorphism of an irreducible representation is scalar
- `thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional` · theorem — Every irreducible representation of a finite abelian group over a splitting field is one-dimensional
- `thm-degree-one-representations-are-exactly-homomorphisms-to-k-times-and-form-an-abelian-group` · theorem — Equivalence classes of degree-one representations are exactly homomorphisms $G\to k^{\times}$; equivalently they factor through $G/G'$, and they form an abelian group

### `the-group-algebra-and-representations-examples` — The Group Algebra and Representations of Finite Groups — Examples (11 item(s))

- `ex-the-complex-representations-of-a-cyclic-group-of-order-n-are-the-n-characters` · example — Over $\mathbb{C}$, a cyclic group of order $n$ has exactly $n$ irreducible representations up to equivalence, represented by the characters $g\mapsto \lambda$ with $\lambda^n=1$
- `ex-the-regular-representation-of-c-two-splits-as-trivial-plus-sign` · example — The regular representation of $C_2$ over a field of characteristic not $2$ is the direct sum of the trivial and sign representations
- `ex-the-standard-two-dimensional-representation-of-s-three-is-irreducible` · example — The standard $2$-dimensional representation of $S_3$ inside the permutation representation on $\mathbb C^3$ is irreducible
- `ex-the-permutation-representation-on-left-cosets-g-mod-h` · example — The permutation representation on the left cosets $G/H$
- `ex-zero-divisors-in-the-group-algebra-of-a-nontrivial-finite-group` · example — Any nontrivial finite group algebra has zero divisors coming from a nonidentity cyclic subgroup
- `ex-the-quaternion-group-acts-on-the-quaternions-by-left-multiplication` · example — The quaternion group $Q_8$ acts on $\mathbb H$ by left multiplication
- `ex-the-real-two-dimensional-irreducible-of-c-three-has-endomorphism-ring-c` · example — The real $2$-dimensional irreducible representation of $C_3$ has endomorphism ring $\mathbb C$
- `fs-every-representation-is-faithful` · false-statement — FALSE: every representation is faithful
- `fs-the-group-algebra-of-a-nontrivial-finite-group-is-a-field` · false-statement — FALSE: if $|G|>1$, then $k[G]$ is a field
- `fs-every-degree-one-representation-is-trivial` · false-statement — FALSE: every degree-one representation is trivial
- `fs-schurs-lemma-over-an-arbitrary-field-still-forces-scalars` · false-statement — FALSE: over every field, the endomorphism ring of an irreducible representation is just the base field

### `abelian-categories` — Abelian Categories (55 item(s))

- `def-normal-monomorphism-and-conormal-epimorphism` · definition — Normal monomorphisms and conormal epimorphisms
- `prop-the-kernel-of-a-monomorphism-is-zero-and-the-cokernel-of-an-epimorphism-is-zero` · proposition — The kernel of a monomorphism is zero and the cokernel of an epimorphism is zero
- `prop-the-cokernel-of-a-zero-morphism-out-of-the-zero-object-is-an-isomorphism` · proposition — The cokernel of the zero map out of the zero object is the target, and dually for kernels
- `def-image-and-coimage-in-a-category-with-kernels-and-cokernels` · definition — Image and coimage in a category with kernels and cokernels
- `thm-a-morphism-factors-uniquely-through-its-coimage` · theorem — A morphism factors uniquely through its coimage
- `thm-a-morphism-factors-uniquely-through-its-image` · theorem — A morphism factors uniquely through its image
- `thm-the-canonical-morphism-from-the-coimage-to-the-image-exists-and-is-unique` · theorem — The canonical morphism from the coimage to the image exists and is unique
- `prop-the-coimage-projection-is-epic-and-the-image-inclusion-is-monic` · proposition — The coimage projection is epic and the image inclusion is monic
- `def-abelian-category` · definition — Abelian category
- `rem-the-axiom-labels-and-where-they-come-from` · remark — This page uses Grothendieck's AB1 and AB2 labels, and records the competing conventions
- `thm-an-abelian-category-is-balanced` · theorem — An abelian category is balanced
- `thm-the-opposite-of-an-abelian-category-is-abelian` · theorem — The opposite of an abelian category is abelian
- `thm-every-monomorphism-is-the-kernel-of-its-cokernel` · theorem — Every monomorphism is the kernel of its cokernel, and dually every epimorphism is the cokernel of its kernel
- `thm-epimorphism-monomorphism-factorisation-exists-and-is-unique-up-to-unique-isomorphism` · theorem — Every morphism factors as an epimorphism followed by a monomorphism, uniquely up to unique isomorphism
- `thm-the-image-is-the-least-subobject-through-which-a-morphism-factors` · theorem — The image is the least subobject through which a morphism factors
- `cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero` · corollary — In an abelian category, monic means zero kernel and epic means zero cokernel
- `def-the-freyd-axioms-for-an-abelian-category` · definition — Freyd's axioms A0, A1, A1*, A2, A2*, A3, and A3* for abelian categories
- `thm-the-freyd-axioms-imply-the-additive-axioms` · theorem — Freyd's axioms force the additive structure and recover the AB2 definition
- `thm-the-freyd-mitchell-characterisation-of-an-abelian-category` · theorem — Freyd and Mitchell's characterisation of abelian categories
- `rem-additivity-is-a-property-of-an-abelian-category-and-not-part-of-its-data` · remark — Additivity can be derived rather than postulated, depending on the axiomatisation
- `thm-an-abelian-category-has-all-finite-limits-and-all-finite-colimits` · theorem — An abelian category has all finite limits and all finite colimits
- `thm-the-pullback-of-a-cospan-is-the-kernel-of-the-difference-of-its-legs` · theorem — A pullback is the kernel of the difference of the two legs, and dually for pushouts
- `thm-the-pullback-of-an-epimorphism-is-an-epimorphism` · theorem — The pullback of an epimorphism is an epimorphism
- `cor-the-pushout-of-a-monomorphism-is-a-monomorphism` · corollary — The pushout of a monomorphism is a monomorphism
- `thm-in-a-pullback-square-the-induced-morphism-on-the-kernels-of-the-parallel-legs-is-an-isomorphism` · theorem — In a pullback square, the induced map on the kernels of the two parallel arrows is an isomorphism
- `thm-a-commuting-square-with-monic-legs-is-a-pullback-exactly-when-the-induced-morphism-to-the-intersection-is-an-isomorphism` · theorem — A square with monic legs is a pullback exactly when it identifies the source with the intersection subobject
- `thm-pullback-pasting-in-an-abelian-category` · theorem — Pullback pasting in an abelian category
- `thm-kernel-and-cokernel-are-mutually-inverse-order-anti-isomorphisms-between-subobjects-and-quotient-objects` · theorem — Kernel and cokernel are mutually inverse order-reversing correspondences between subobjects and quotient objects
- `def-the-quotient-of-an-object-by-a-subobject` · definition — The quotient of an object by a subobject
- `thm-the-quotient-is-independent-of-the-representing-monomorphism` · theorem — The quotient by a subobject is independent of the chosen representing monomorphism
- `thm-first-isomorphism-theorem-in-an-abelian-category` · theorem — First isomorphism theorem in an abelian category
- `thm-third-isomorphism-theorem-in-an-abelian-category` · theorem — Third isomorphism theorem in an abelian category
- `thm-a-composite-of-a-quotient-and-a-subobject-inclusion-is-the-canonical-factorisation` · theorem — The quotient by the kernel followed by the image inclusion is the canonical epi-mono factorization
- `def-exact-functor-between-abelian-categories` · definition — Exact functor between abelian categories
- `thm-a-left-or-right-exact-functor-between-abelian-categories-is-additive` · theorem — A left or right exact functor between abelian categories is automatically additive
- `thm-one-sided-and-two-sided-exactness-by-short-exact-sequences` · theorem — Left exactness, right exactness, and exactness are characterized by short exact sequences
- `thm-an-additive-functor-is-exact-exactly-when-it-preserves-kernels-and-cokernels` · theorem — An additive functor is exact exactly when it preserves kernels and cokernels
- `thm-a-left-exact-functor-preserves-monomorphisms-and-a-right-exact-functor-preserves-epimorphisms` · theorem — A left exact functor preserves monomorphisms and a right exact functor preserves epimorphisms
- `cex-an-exact-functor-need-not-be-faithful` · counterexample — An exact functor need not be faithful
- `thm-an-equivalence-between-abelian-categories-is-exact` · theorem — An equivalence between abelian categories is exact
- `def-abelian-subcategory-and-exact-embedding` · definition — Abelian subcategory and exact embedding
- `thm-abelian-groups-form-an-abelian-category` · theorem — Abelian groups form an abelian category
- `thm-modules-over-a-ring-form-an-abelian-category` · theorem — Modules over a ring form an abelian category
- `thm-additive-functors-from-a-small-preadditive-category-to-an-abelian-category-form-an-abelian-category` · theorem — Additive functors from a small preadditive category to an abelian category form an abelian category
- `thm-a-small-product-of-abelian-categories-is-abelian` · theorem — A small product of abelian categories is abelian
- `cex-filtered-vector-spaces-form-an-additive-category-with-all-kernels-and-cokernels-that-is-not-abelian` · counterexample — Filtered vector spaces can be additive with kernels and cokernels without being abelian
- `cex-torsion-free-abelian-groups-do-not-form-an-abelian-category` · counterexample — Torsion-free abelian groups do not form an abelian category
- `cor-an-abelian-category-that-is-a-preorder-is-trivial` · corollary — An abelian category that is a preorder is trivial
- `rem-the-freyd-mitchell-embedding-theorem` · remark — Freyd-Mitchell gives a fully faithful exact embedding of every small abelian category into a module category
- `rem-why-the-diagram-lemmas-are-not-proved-by-the-embedding-theorem` · remark — The library does not use Freyd-Mitchell to prove the diagram lemmas
- `fs-an-additive-category-with-all-kernels-and-cokernels-is-abelian` · false-statement — FALSE: every additive category with all kernels and cokernels is abelian
- `fs-the-canonical-morphism-from-the-coimage-to-the-image-is-invertible-whenever-the-two-objects-are-isomorphic` · false-statement — FALSE: if coimage and image happen to be isomorphic as objects, then the canonical map is automatically an isomorphism
- `fs-in-an-abelian-category-a-morphism-that-is-monic-and-epic-need-not-be-an-isomorphism` · false-statement — FALSE: in an abelian category a morphism can be monic and epic without being an isomorphism
- `fs-every-abelian-category-is-equivalent-to-a-category-of-modules` · false-statement — FALSE: every abelian category is equivalent to a module category
- `fs-the-pullback-of-an-epimorphism-is-an-epimorphism-in-any-category-with-pullbacks` · false-statement — FALSE: pullbacks preserve epimorphisms in every category with pullbacks

### `abelian-categories-examples` — Abelian Categories — Examples (9 item(s))

- `ex-kernels-cokernels-images-and-coimages-computed-in-abelian-groups` · example — Kernels, cokernels, images, and coimages in abelian groups are the familiar subgroup and quotient constructions
- `ex-the-canonical-factorisation-of-a-module-homomorphism` · example — A module homomorphism factors as quotient by its kernel followed by inclusion of its image
- `ex-a-pullback-computed-as-a-kernel-of-a-difference` · example — A pullback of module maps is computed as a kernel of a difference map
- `ex-vector-spaces-over-a-field-as-an-abelian-category` · example — Vector spaces over a field form an abelian category
- `ex-the-abelian-category-of-representations-of-a-two-object-quiver` · example — Representations of the quiver 1 -> 2 in abelian groups form an abelian category
- `cex-topological-abelian-groups-are-additive-and-not-abelian` · counterexample — Topological abelian groups are additive but not abelian
- `ex-the-third-isomorphism-theorem-checked-for-abelian-groups` · example — The third isomorphism theorem in abelian groups matches the categorical statement
- `ex-an-exact-functor-between-module-categories` · example — Localization of modules gives an exact functor between module categories
- `cex-filtered-vector-spaces-fail-the-coimage-image-axiom` · counterexample — Filtered vector spaces can have zero kernel and zero cokernel without satisfying AB2

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
`research/frontier-21-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — targeted repair-integrity review, `frontier-21`

The generated repair envelope above is authoritative. It supplies every failed
gate with full output, the exact live ids and rejection tuples, and each id's
run or published scope. Take only its `assigned_items` and `live_tuples`; rerun
the focused gate where it supports item scope.

Complete a repair already licensed by an exact `confirmed_fatal` adjudication,
or correct a documentary contract/manifest/impact/verification record that must
match the current proof. Do not edit a nonfatal or false-positive item, broaden
the scope, run a judge sweep, or run a workflow transition.

Preserve append-only ledgers and return the gate, ids, licensing rows, changed
files, targeted checks, and blocker. This task applies before `8-rejudge`; a
frozen-cutover dispatch uses the Step-8 close task instead.
