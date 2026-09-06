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
group work, `research/frontier-31a-alpha-groups.json` is the assignment: it permits at
most nine groups of at most three batches, and a group writes only its own
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

run: frontier-31a
role: alpha-adjudicate
label: step8-close-b-1

# Exact Step-8 repair envelope — 8-close, round 1

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
complete relevant diagnostic records, exact current rejection tuples, and explicit run/published ownership.
The full_evidence file retains the original untruncated battery output and all ownership assignments.
Read its relevant sections if a diagnostic is ambiguous; do not infer absence from this scoped view.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "frontier-31a",
  "stage": "8-close",
  "round": 1,
  "mode": "close",
  "group": "b",
  "full_evidence": "research/frontier-31a-8-close-repair-evidence-1-3eaa01a3ee60a3c3d98f0f29f88985b1ecf8b5bb9ff764f0b01fc9fe68e01fe1.json",
  "full_evidence_sha256": "3eaa01a3ee60a3c3d98f0f29f88985b1ecf8b5bb9ff764f0b01fc9fe68e01fe1",
  "failures": [
    {
      "id": "splice-verify",
      "stage": "8-close",
      "why": "A licensed in-flight change is applied with: splice-plan --run frontier-31a --batch <i> --update",
      "output": "splice-plan: 14 page(s) where the plan and the batch manifest disagree\n  schur-multipliers-and-universal-central-extensions (frontier-31a-batch-1.pages.json): same ids, 1 item object(s) changed (fs-the-universal-coefficient-short-exact-sequence-splits-naturally) — re-splice to propagate\n  group-cohomology-as-a-derived-functor (frontier-31a-batch-10.pages.json): same ids, 1 item object(s) changed (def-restriction-and-corestriction-on-group-cohomology) — re-splice to propagate\n  relative-homology-excision-and-mayer-vietoris (frontier-31a-batch-12.pages.json): same ids, 3 item object(s) changed (thm-cover-small-inclusion-is-a-chain-homotopy-equivalence, thm-naturality-of-singular-mayer-vietoris, cor-suspension-isomorphism-in-reduced-singular-homology) — re-splice to propagate\n  the-structural-criterion-for-property-star-examples (frontier-31a-batch-15.pages.json): same ids, 1 item object(s) changed (ex-a-large-y-part-in-a-structural-comb-partition) — re-splice to propagate\n  the-exterior-derivative-and-cartan-calculus (frontier-31a-batch-17.pages.json): same ids, 2 item object(s) changed (thm-the-exterior-derivative-is-a-graded-derivation, prop-the-exterior-derivative-commutes-with-restriction) — re-splice to propagate\n  time-and-space-hierarchy-theorems (frontier-31a-batch-21.pages.json): same ids, 1 item object(s) changed (prop-hierarchy-theorems-do-not-separate-p-from-np) — re-splice to propagate\n  logarithmic-space-nl-and-reachability (frontier-31a-batch-22.pages.json): same ids, 1 item object(s) changed (thm-immerman-szelepcsenyi-nl-equals-conl) — re-splice to propagate\n  geometric-hahn-banach-and-convex-separation (frontier-31a-batch-3.pages.json): same ids, 2 item object(s) changed (def-continuous-annihilator-of-a-subspace, def-linear-hyperplane) — re-splice to propagate\n  infinite-product-measures-and-kolmogorov-extension-examples (frontier-31a-batch-4.pages.json): same ids, 1 item object(s) changed (ex-iid-sequence-with-a-prescribed-law) — re-splice to propagate\n  ext-and-balanced-resolutions (frontier-31a-batch-8.pages.json): same ids, 5 item object(s) changed (prop-projective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable, thm-long-exact-ext-sequence-in-the-first-variable, prop-the-two-ext-long-exact-sequences-agree-under-balance, …) — re-splice to propagate\n  yoneda-extensions-and-homological-dimension (frontier-31a-batch-8.pages.json): same ids, 3 item object(s) changed (cor-the-class-of-extensions-is-a-set-whenever-derived-ext-one-is-a-set, thm-yoneda-product-is-associative-and-unital, thm-higher-yoneda-ext-agrees-with-derived-ext) — re-splice to propagate\n  yoneda-extensions-and-homological-dimension-examples (frontier-31a-batch-8.pages.json): same ids, 1 item object(s) changed (ex-baer-sum-of-two-extensions-of-cyclic-groups) — re-splice to propagate\n  tor-flatness-and-global-dimension (frontier-31a-batch-9.pages.json): same ids, 4 item object(s) changed (thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic, thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes, thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes, …) — re-splice to propagate\n  universal-coefficients-and-kunneth-theorems (frontier-31a-batch-9.pages.json): same ids, 2 item object(s) changed (thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally, lem-the-kunneth-tor-map) — re-splice to propagate\nA licensed in-flight change is applied with: splice-plan --run frontier-31a --batch <i> --update\n",
      "named_ids": []
    },
    {
      "id": "proof-contract",
      "stage": "8-close",
      "why": "ERROR citation-quote-mismatch [thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two]: L2 quote does not occur in thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally's Statement",
      "output": "proof-contract: 151 error(s), 0 warning(s), 704/704 item(s) checked\nERROR citation-quote-mismatch [thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two]: L2 quote does not occur in thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally's Statement\nERROR step-entry-input-omitted [thm-long-exact-ext-sequence-in-the-first-variable]: fa-2 omits 1.1, cited by 2.1\nERROR step-entry-input-omitted [thm-long-exact-ext-sequence-in-the-first-variable]: fa-3 omits 1.1, cited by 3.1\nERROR step-entry-input-omitted [thm-long-exact-ext-sequence-in-the-first-variable]: fa-3 omits 2.1, cited by 3.1\nERROR citation-fact-uncontracted [prop-the-two-ext-long-exact-sequences-agree-under-balance]: F1 -> thm-projective-and-injective-constructions-of-ext-are-naturally-isomorphic needs an exact citation contract\nERROR citation-fact-uncontracted [prop-the-two-ext-long-exact-sequences-agree-under-balance]: F1 -> prop-the-ext-balance-isomorphism-is-natural-in-both-variables needs an exact citation contract\nERROR citation-fact-uncontracted [prop-the-two-ext-long-exact-sequences-agree-under-balance]: F2 -> thm-horseshoe-lemma-for-projective-resolutions needs an exact citation contract\nERROR citation-fact-uncontracted [prop-the-two-ext-long-exact-sequences-agree-under-balance]: F2 -> thm-horseshoe-lemma-for-injective-resolutions needs an exact citation contract\nERROR citation-fact-uncontracted [prop-the-two-ext-long-exact-sequences-agree-under-balance]: F3 -> thm-naturality-of-the-cohomology-connecting-morphism needs an exact citation contract\nERROR citation-fact-uncontracted [prop-the-two-ext-long-exact-sequences-agree-under-balance]: F3 -> thm-right-derived-functors-form-a-cohomological-delta-functor needs an exact citation contract\nERROR citation-fact-uncontracted [prop-the-two-ext-long-exact-sequences-agree-under-balance]: F3 -> thm-long-exact-ext-sequence-in-the-second-variable needs an exact citation contract\nERROR citation-fact-uncontracted [prop-the-two-ext-long-exact-sequences-agree-under-balance]: F3 -> thm-long-exact-ext-sequence-in-the-first-variable needs an exact citation contract\nERROR step-entry-input-omitted [prop-the-two-ext-long-exact-sequences-agree-under-balance]: fa-1 omits F1, cited by 1.1\nERROR step-entry-input-omitted [prop-the-two-ext-long-exact-sequences-agree-under-balance]: fa-1 omits F2, cited by 1.1\nERROR step-entry-input-omitted [prop-the-two-ext-long-exact-sequences-agree-under-balance]: fa-2 omits F1, cited by 1.2\nERROR step-entry-input-omitted [prop-the-two-ext-long-exact-sequences-agree-under-balance]: fa-2 omits F2, cited by 1.2\nERROR step-entry-input-omitted [prop-the-two-ext-long-exact-sequences-agree-under-balance]: fa-3 omits F3, cited by 2.1\nERROR step-entry-input-omitted [prop-the-two-ext-long-exact-sequences-agree-under-balance]: fa-3 omits F1, cited by 2.1\nERROR step-entry-input-omitted [prop-the-two-ext-long-exact-sequences-agree-under-balance]: fa-3 omits 1.1, cited by 2.1\nERROR step-entry-input-omitted [prop-the-two-ext-long-exact-sequences-agree-under-balance]: fa-3 omits 1.2, cited by 2.1\nERROR step-entry-input-omitted [prop-the-two-ext-long-exact-sequences-agree-under-balance]: fa-4 omits F3, cited by 3.1\nERROR step-entry-input-omitted [prop-the-two-ext-long-exact-sequences-agree-under-balance]: fa-4 omits F1, cited by 3.1\nERROR step-entry-input-omitted [prop-the-two-ext-long-exact-sequences-agree-under-balance]: fa-4 omits 2.1, cited by 3.1\nERROR citation-fact-uncontracted [cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable]: F1 -> thm-projective-comparison-map-exists needs an exact citation contract\nERROR citation-fact-uncontracted [cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable]: F2 -> thm-projective-comparison-maps-are-unique-up-to-chain-homotopy needs an exact citation contract\nERROR citation-fact-uncontracted [cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable]: F3 -> thm-projective-resolutions-of-the-same-object-are-homotopy-equivalent-over-that-object needs an exact citation contract\nERROR step-entry-input-omitted [cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable]: routine-1 omits F2, cited by 1.1\nERROR step-entry-input-omitted [cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable]: routine-1 omits F1, cited by 1.1\nERROR step-entry-input-omitted [cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable]: routine-1 omits F3, cited by 1.1\nERROR step-entry-input-omitted [cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable]: routine-2 omits 1.1, cited by 2.1\nERROR step-entry-input-omitted [cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable]: routine-2 omits F2, cited by 2.1\nERROR step-entry-input-omitted [cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable]: routine-3 omits F1, cited by 3.1\nERROR step-entry-input-omitted [cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable]: routine-3 omits F2, cited by 3.1\nERROR step-entry-input-omitted [cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable]: routine-3 omits 2.1, cited by 3.1\nERROR step-entry-input-omitted [cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable]: routine-4 omits 1.1, cited by 4.1\nERROR step-entry-input-omitted [cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable]: routine-4 omits 2.1, cited by 4.1\nERROR step-entry-input-omitted [cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable]: routine-4 omits 3.1, cited by 4.1\nERROR citation-fact-uncontracted [cor-ext-can-be-computed-from-any-injective-resolution-of-the-second-variable]: F1 -> thm-injective-comparison-map-exists needs an exact citation contract\nERROR citation-fact-uncontracted [cor-ext-can-be-computed-from-any-injective-resolution-of-the-second-variable]: F2 -> thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy needs an exact citation contract\nERROR citation-fact-uncontracted [cor-ext-can-be-computed-from-any-injective-resolution-of-the-second-variable]: F3 -> thm-injective-resolutions-of-the-same-object-are-homotopy-equivalent-under-that-object needs an exact citation contract\nERROR step-entry-input-omitted [cor-ext-can-be-computed-from-any-injective-resolution-of-the-second-variable]: routine-1 omits F2, cited by 1.1\nERROR step-entry-input-omitted [cor-ext-can-be-computed-from-any-injective-resolution-of-the-second-variable]: routine-1 omits F1, cited by 1.1\nERROR step-entry-input-omitted [cor-ext-can-be-computed-from-any-injective-resolution-of-the-second-variable]: routine-1 omits F3, cited by 1.1\nERROR step-entry-input-omitted [cor-ext-can-be-computed-from-any-injective-resolution-of-the-second-variable]: routine-2 omits 1.1, cited by 2.1\nERROR step-entry-input-omitted [cor-ext-can-be-computed-from-any-injective-resolution-of-the-second-variable]: routine-2 omits F2, cited by 2.1\nERROR step-entry-input-omitted [cor-ext-can-be-computed-from-any-injective-resolution-of-the-second-variable]: routine-3 omits F2, cited by 3.1\nERROR step-entry-input-omitted [cor-ext-can-be-computed-from-any-injective-resolution-of-the-second-variable]: routine-3 omits F1, cited by 3.1\nERROR step-entry-input-omitted [cor-ext-can-be-computed-from-any-injective-resolution-of-the-second-variable]: routine-3 omits 2.1, cited by 3.1\nERROR step-entry-input-omitted [cor-ext-can-be-computed-from-any-injective-resolution-of-the-second-variable]: routine-4 omits 2.1, cited by 4.1\nERROR step-entry-input-omitted [cor-ext-can-be-computed-from-any-injective-resolution-of-the-second-variable]: routine-4 omits 3.1, cited by 4.1\nERROR citation-fact-uncontracted [cor-the-class-of-extensions-is-a-set-whenever-derived-ext-one-is-a-set]: F1 -> lem-equivalent-extensions-have-the-same-ext-class needs an exact citation contract\nERROR citation-fact-uncontracted [cor-the-class-of-extensions-is-a-set-whenever-derived-ext-one-is-a-set]: F2 -> lem-every-ext-one-class-is-represented-by-an-extension needs an exact citation contract\nERROR citation-fact-uncontracted [cor-the-class-of-extensions-is-a-set-whenever-derived-ext-one-is-a-set]: F3 -> lem-two-extensions-with-the-same-ext-class-are-equivalent needs an exact citation contract\nERROR step-entry-input-omitted [cor-the-class-of-extensions-is-a-set-whenever-derived-ext-one-is-a-set]: routine-1 omits F1, cited by 1.1\nERROR step-entry-input-omitted [cor-the-class-of-extensions-is-a-set-whenever-derived-ext-one-is-a-set]: routine-1 omits F3, cited by 1.1\nERROR step-entry-input-omitted [cor-the-class-of-extensions-is-a-set-whenever-derived-ext-one-is-a-set]: routine-2 omits F2, cited by 2.1\nERROR step-entry-input-omitted [cor-the-class-of-extensions-is-a-set-whenever-derived-ext-one-is-a-set]: routine-2 omits 1.1, cited by 2.1\nERROR citation-fact-uncontracted [thm-yoneda-product-is-associative-and-unital]: F1 -> lem-yoneda-splicing-is-well-defined-on-equivalence-classes needs an exact citation contract\nERROR citation-fact-uncontracted [thm-yoneda-product-is-associative-and-unital]: F1 -> def-equivalence-of-n-fold-extensions needs an exact citation contract\nERROR citation-fact-uncontracted [thm-yoneda-product-is-associative-and-unital]: F2 -> thm-the-pullback-of-an-epimorphism-is-an-epimorphism needs an exact citation contract\nERROR citation-fact-uncontracted [thm-yoneda-product-is-associative-and-unital]: F2 -> cor-the-pushout-of-a-monomorphism-is-a-monomorphism needs an exact citation contract\nERROR citation-fact-uncontracted [thm-yoneda-product-is-associative-and-unital]: F3 -> thm-short-five-lemma-in-an-abelian-category needs an exact citation contract\nERROR step-entry-input-omitted [thm-yoneda-product-is-associative-and-unital]: fa-1 omits F2, cited by 1.1\nERROR step-entry-input-omitted [thm-yoneda-product-is-associative-and-unital]: fa-1 omits F1, cited by 1.1\nERROR step-entry-input-omitted [thm-yoneda-product-is-associative-and-unital]: fa-3 omits 1.1, cited by 2.1\nERROR step-entry-input-omitted [thm-yoneda-product-is-associative-and-unital]: fa-4 omits F3, cited by 2.2\nERROR step-entry-input-omitted [thm-yoneda-product-is-associative-and-unital]: fa-4 omits 1.1, cited by 2.2\nERROR step-entry-input-omitted [thm-yoneda-product-is-associative-and-unital]: fa-5 omits F1, cited by 2.3\nERROR step-entry-input-omitted [thm-yoneda-product-is-associative-and-unital]: fa-5 omits 1.1, cited by 2.3\nERROR step-entry-input-omitted [thm-yoneda-product-is-associative-and-unital]: fa-6 omits 1.2, cited by 3.1\nERROR step-entry-input-omitted [thm-yoneda-product-is-associative-and-unital]: fa-6 omits 2.1, cited by 3.1\nERROR step-entry-input-omitted [thm-yoneda-product-is-associative-and-unital]: fa-6 omits 2.3, cited by 3.1\nERROR step-entry-input-omitted [thm-yoneda-product-is-associative-and-unital]: fa-6 omits 1.1, cited by 3.1\nERROR step-entry-input-omitted [thm-yoneda-product-is-associative-and-unital]: fa-6 omits 2.2, cited by 3.1\nERROR citation-fact-uncontracted [thm-higher-yoneda-ext-agrees-with-derived-ext]: F1 -> def-n-fold-yoneda-extension needs an exact citation contract\nERROR citation-fact-uncontracted [thm-higher-yoneda-ext-agrees-with-derived-ext]: F1 -> def-equivalence-of-n-fold-extensions needs an exact citation contract\nERROR citation-fact-uncontracted [thm-higher-yoneda-ext-agrees-with-derived-ext]: F2 -> thm-projective-object-characterisations needs an exact citation contract\nERROR citation-fact-uncontracted [thm-higher-yoneda-ext-agrees-with-derived-ext]: F2 -> cor-the-pushout-of-a-monomorphism-is-a-monomorphism needs an exact citation contract\nERROR citation-fact-uncontracted [thm-higher-yoneda-ext-agrees-with-derived-ext]: F3 -> thm-projective-comparison-map-exists needs an exact citation contract\nERROR citation-fact-uncontracted [thm-higher-yoneda-ext-agrees-with-derived-ext]: F3 -> thm-projective-comparison-maps-are-unique-up-to-chain-homotopy needs an exact citation contract\nERROR citation-fact-uncontracted [thm-higher-yoneda-ext-agrees-with-derived-ext]: F4 -> def-ext-via-a-projective-resolution-of-the-first-variable needs an exact citation contract\nERROR citation-fact-uncontracted [thm-higher-yoneda-ext-agrees-with-derived-ext]: F4 -> def-ext-via-an-injective-resolution-of-the-second-variable needs an exact citation contract\nERROR step-entry-input-omitted [thm-higher-yoneda-ext-agrees-with-derived-ext]: fa-1 omits F2, cited by 1.1\nERROR step-entry-input-omitted [thm-higher-yoneda-ext-agrees-with-derived-ext]: fa-1 omits F1, cited by 1.1\nERROR step-entry-input-omitted [thm-higher-yoneda-ext-agrees-with-derived-ext]: fa-2 omits F2, cited by 1.2\nERROR step-entry-input-omitted [thm-higher-yoneda-ext-agrees-with-derived-ext]: fa-2 omits F1, cited by 1.2\nERROR step-entry-input-omitted [thm-higher-yoneda-ext-agrees-with-derived-ext]: fa-3 omits 1.1, cited by 2.1\nERROR step-entry-input-omitted [thm-higher-yoneda-ext-agrees-with-derived-ext]: fa-3 omits F1, cited by 2.1\nERROR step-entry-input-omitted [thm-higher-yoneda-ext-agrees-with-derived-ext]: fa-3 omits F2, cited by 2.1\nERROR step-entry-input-omitted [thm-higher-yoneda-ext-agrees-with-derived-ext]: fa-4 omits 1.2, cited by 2.2\nERROR step-entry-input-omitted [thm-higher-yoneda-ext-agrees-with-derived-ext]: fa-5 omits 1.1, cited by 3.1\nERROR step-entry-input-omitted [thm-higher-yoneda-ext-agrees-with-derived-ext]: fa-5 omits F1, cited by 3.1\nERROR step-entry-input-omitted [thm-higher-yoneda-ext-agrees-with-derived-ext]: fa-5 omits 2.1, cited by 3.1\nERROR step-entry-input-omitted [thm-higher-yoneda-ext-agrees-with-derived-ext]: fa-5 omits 2.2, cited by 3.1\nERROR step-entry-input-omitted [thm-higher-yoneda-ext-agrees-with-derived-ext]: fa-6 omits F3, cited by 4.1\nERROR step-entry-input-omitted [thm-higher-yoneda-ext-agrees-with-derived-ext]: fa-6 omits 1.1, cited by 4.1\nERROR step-entry-input-omitted [thm-higher-yoneda-ext-agrees-with-derived-ext]: fa-6 omits 3.1, cited by 4.1\nERROR step-entry-input-omitted [thm-higher-yoneda-ext-agrees-with-derived-ext]: fa-7 omits F4, cited by 5.1\nERROR step-entry-input-omitted [thm-higher-yoneda-ext-agrees-with-derived-ext]: fa-7 omits 4.1, cited by 5.1\nERROR boundary-evidence-unanchored [thm-higher-yoneda-ext-agrees-with-derived-ext]: one evidence must name a step or statement\nERROR boundary-evidence-unanchored [thm-higher-yoneda-ext-agrees-with-derived-ext]: nonempty-choice evidence must name a step or statement\nERROR citation-fact-uncontracted [ex-baer-sum-of-two-extensions-of-cyclic-groups]: F1 -> def-baer-sum-of-extension-classes needs an exact citation contract\nERROR citation-fact-uncontracted [ex-baer-sum-of-two-extensions-of-cyclic-groups]: F2 -> def-split-extension-class needs an exact citation contract\nERROR citation-fact-uncontracted [ex-baer-sum-of-two-extensions-of-cyclic-groups]: F2 -> thm-baer-sum-makes-extension-classes-an-abelian-group needs an exact citation contract\nERROR step-entry-input-omitted [ex-baer-sum-of-two-extensions-of-cyclic-groups]: routine-2 omits F1, cited by 1.2\nERROR step-entry-input-omitted [ex-baer-sum-of-two-extensions-of-cyclic-groups]: routine-3 omits 1.2, cited by 2.1\nERROR step-entry-input-omitted [ex-baer-sum-of-two-extensions-of-cyclic-groups]: routine-4 omits F2, cited by 3.1\nERROR step-entry-input-omitted [ex-baer-sum-of-two-extensions-of-cyclic-groups]: routine-4 omits 1.1, cited by 3.1\nERROR step-entry-input-omitted [ex-baer-sum-of-two-extensions-of-cyclic-groups]: routine-4 omits 2.1, cited by 3.1\nERROR step-entry-input-omitted [thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic]: fa-2 omits 1.1, cited by 2.1\nERROR step-entry-input-omitted [thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic]: fa-3 omits 1.1, cited by 2.2\nERROR step-entry-input-omitted [thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic]: fa-4 omits 2.1, cited by 3.1\nERROR step-entry-input-omitted [thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic]: fa-4 omits 2.2, cited by 3.1\nERROR step-entry-input-omitted [thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic]: fa-5 omits 3.1, cited by 4.1\nERROR step-entry-input-omitted [thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes]: fa-3 omits 1.2, cited by 2.1\nERROR step-entry-input-omitted [thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes]: fa-4 omits 2.1, cited by 3.1\nERROR step-entry-input-omitted [thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes]: fa-3 omits 1.2, cited by 2.1\nERROR step-entry-input-omitted [thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes]: fa-4 omits 2.1, cited by 3.1\nERROR step-entry-input-omitted [thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric]: fa-3 omits 1.1, cited by 2.1\nERROR step-entry-input-omitted [thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric]: fa-3 omits 1.2, cited by 2.1\nERROR boundary-evidence-unanchored [thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric]: empty evidence must name a step or statement\nERROR boundary-evidence-unanchored [thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric]: zero evidence must name a step or statement\nERROR boundary-evidence-unanchored [thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric]: degenerate evidence must name a step or statement\nERROR boundary-evidence-unanchored [thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric]: nonempty-choice evidence must name a step or statement\nERROR step-entry-input-omitted [ex-the-tensor-double-complex-in-low-degrees]: calculation-2 omits 1.1, cited by 2.1\nERROR step-entry-input-omitted [ex-the-tensor-double-complex-in-low-degrees]: calculation-3 omits 2.1, cited by 3.1\nERROR boundary-evidence-unanchored [ex-the-tensor-double-complex-in-low-degrees]: one evidence must name a step or statement\nERROR step-entry-input-omitted [thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally]: fa-2 omits 1.1, cited by 2.1\nERROR step-entry-input-omitted [thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally]: fa-3 omits 2.1, cited by 3.1\nERROR citation-fact-uncontracted [lem-the-kunneth-tor-map]: F1 -> lem-cycle-boundary-short-exact-sequences-for-a-free-complex-over-a-pid needs an exact citation contract\nERROR citation-fact-uncontracted [lem-the-kunneth-tor-map]: F2 -> lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free needs an exact citation contract\nERROR citation-fact-uncontracted [lem-the-kunneth-tor-map]: F2 -> thm-free-modules-are-projective-with-choice-boundary needs an exact citation contract\nERROR citation-fact-uncontracted [lem-the-kunneth-tor-map]: F3 -> thm-long-exact-sequence-in-homology needs an exact citation contract\nERROR citation-fact-uncontracted [lem-the-kunneth-tor-map]: F3 -> cor-the-long-exact-homology-sequence-is-natural needs an exact citation contract\nERROR citation-fact-uncontracted [lem-the-kunneth-tor-map]: F4 -> def-balanced-tor-bifunctor needs an exact citation contract\nERROR step-entry-input-omitted [lem-the-kunneth-tor-map]: local-1 omits F2, cited by 1.1\nERROR step-entry-input-omitted [lem-the-kunneth-tor-map]: local-1 omits F1, cited by 1.1\nERROR step-entry-input-omitted [lem-the-kunneth-tor-map]: local-2 omits F2, cited by 2.1\nERROR step-entry-input-omitted [lem-the-kunneth-tor-map]: local-2 omits 1.1, cited by 2.1\nERROR step-entry-input-omitted [lem-the-kunneth-tor-map]: local-3 omits F1, cited by 3.1\nERROR step-entry-input-omitted [lem-the-kunneth-tor-map]: local-3 omits F3, cited by 3.1\nERROR step-entry-input-omitted [lem-the-kunneth-tor-map]: local-3 omits 1.1, cited by 3.1\nERROR step-entry-input-omitted [lem-the-kunneth-tor-map]: local-3 omits 2.1, cited by 3.1\nERROR step-entry-input-omitted [lem-the-kunneth-tor-map]: local-4 omits F4, cited by 4.1\nERROR step-entry-input-omitted [lem-the-kunneth-tor-map]: local-4 omits F1, cited by 4.1\nERROR step-entry-input-omitted [lem-the-kunneth-tor-map]: local-4 omits F2, cited by 4.1\nERROR step-entry-input-omitted [lem-the-kunneth-tor-map]: local-4 omits 3.1, cited by 4.1\nERROR step-entry-input-omitted [lem-the-kunneth-tor-map]: local-5 omits F3, cited by 5.1\nERROR step-entry-input-omitted [lem-the-kunneth-tor-map]: local-5 omits 4.1, cited by 5.1\nERROR step-entry-input-omitted [lem-the-kunneth-tor-map]: local-5 omits 1.1, cited by 5.1\nERROR step-entry-input-omitted [lem-the-kunneth-tor-map]: local-5 omits F4, cited by 5.1\n",
      "named_ids": [
        "thm-long-exact-ext-sequence-in-the-first-variable",
        "prop-the-two-ext-long-exact-sequences-agree-under-balance",
        "cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable",
        "cor-ext-can-be-computed-from-any-injective-resolution-of-the-second-variable",
        "cor-the-class-of-extensions-is-a-set-whenever-derived-ext-one-is-a-set",
        "thm-yoneda-product-is-associative-and-unital",
        "thm-higher-yoneda-ext-agrees-with-derived-ext",
        "ex-baer-sum-of-two-extensions-of-cyclic-groups",
        "thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic",
        "thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes",
        "thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes",
        "thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric",
        "ex-the-tensor-double-complex-in-low-degrees",
        "thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally",
        "lem-the-kunneth-tor-map"
      ]
    },
    {
      "id": "risk-report",
      "stage": "8-close",
      "why": "ERROR risk-review-missing [fs-the-universal-coefficient-short-exact-sequence-splits-naturally]: fs-the-universal-coefficient-short-exact-sequence-splits-naturally is high risk and lacks a complete Alpha risk_review",
      "output": "MODERATE 4 [prop-ext-zero-is-hom-for-the-injective-construction] 2:4 declared dependencies; 2:boundary-sensitive language\nORDINARY 2 [prop-ext-zero-is-hom-for-the-projective-construction] 2:boundary-sensitive language\nORDINARY 0 [prop-injective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable] no signals\nORDINARY 0 [prop-projective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable] no signals\nORDINARY 2 [prop-positive-ext-vanishes-on-an-injective-second-variable] 2:boundary-sensitive language\nMODERATE 3 [prop-positive-ext-vanishes-on-a-projective-first-variable] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 0 [lem-the-two-hom-double-complex-differentials-commute-before-signing] no signals\nMODERATE 4 [lem-acyclic-assembly-by-exact-columns] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 0 [lem-acyclic-assembly-by-exact-rows] no signals\nORDINARY 0 [lem-hom-from-a-projective-object-makes-the-injective-resolution-columns-exact] no signals\nORDINARY 0 [lem-hom-into-an-injective-object-makes-the-projective-resolution-rows-exact] no signals\nMODERATE 3 [thm-projective-and-injective-constructions-of-ext-are-naturally-isomorphic] 3:7 declared dependencies\nORDINARY 0 [lem-the-ext-balance-isomorphism-is-independent-of-resolution-comparison-data] no signals\nORDINARY 2 [prop-the-ext-balance-isomorphism-is-natural-in-both-variables] 2:4 declared dependencies\nORDINARY 2 [prop-the-ext-balance-isomorphisms-satisfy-change-of-resolution-cocycle-laws] 2:boundary-sensitive language\nORDINARY 0 [thm-long-exact-ext-sequence-in-the-second-variable] no signals\nMODERATE 4 [thm-long-exact-ext-sequence-in-the-first-variable] 2:4 declared dependencies; 2:boundary-sensitive language\nHIGH 7 [prop-the-two-ext-long-exact-sequences-agree-under-balance] 3:8 declared dependencies; 2:8 cited facts; 2:boundary-sensitive language\nMODERATE 4 [thm-ext-dimension-shifting-in-the-first-variable] 2:4 declared dependencies; 2:boundary-sensitive language\nORDINARY 0 [thm-ext-dimension-shifting-in-the-second-variable] no signals\nMODERATE 3 [cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable] 2:5 declared dependencies; 1:3 cited facts\nMODERATE 3 [cor-ext-can-be-computed-from-any-injective-resolution-of-the-second-variable] 2:5 declared dependencies; 1:3 cited facts\nORDINARY 2 [prop-exact-functors-compatible-with-hom-transport-ext-under-the-stated-adjunction-hypotheses] 2:existence, choice, uniqueness, or well-definedness\nMODERATE 4 [lem-ext-one-of-z-mod-n-by-z-is-z-mod-n] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 0 [fs-ext-is-defined-before-choosing-or-supplying-resolutions] no signals\nORDINARY 0 [fs-projective-ext-and-injective-ext-are-equal-by-definition] no signals\nORDINARY 0 [fs-ext-is-covariant-in-both-variables] no signals\nMODERATE 4 [fs-positive-ext-vanishes-whenever-either-variable-is-injective] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [fs-a-double-complex-totalisation-is-unambiguous-with-infinite-diagonals] 2:boundary-sensitive language\nORDINARY 0 [fs-balance-of-ext-requires-the-spectral-sequence-pages] no signals\nORDINARY 2 [ex-ext-zero-as-hom-in-both-constructions] 2:boundary-sensitive language\nORDINARY 2 [ex-ext-from-a-two-term-projective-resolution] 2:boundary-sensitive language\nORDINARY 2 [ex-ext-of-a-cyclic-abelian-group-by-an-abelian-group] 2:boundary-sensitive language\nORDINARY 2 [ex-the-hom-double-complex-in-low-bidegrees] 2:boundary-sensitive language\nORDINARY 0 [ex-an-ext-dimension-shift] no signals\nORDINARY 2 [cex-positive-ext-does-not-vanish-for-an-injective-first-variable] 2:boundary-sensitive language\nORDINARY 0 [ex-naturality-of-the-balance-isomorphism] no signals\nORDINARY 2 [prop-a-morphism-of-extensions-is-an-isomorphism] 2:quotient or equivalence-class construction\nMODERATE 4 [prop-equivalence-of-extensions-is-an-equivalence-relation] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 4 [lem-pullback-and-pushout-descend-to-extension-classes] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [lem-baer-sum-of-short-exact-sequence-classes-is-independent-of-representatives] 2:quotient or equivalence-class construction\nHIGH 6 [thm-baer-sum-makes-extension-classes-an-abelian-group] 2:4 declared dependencies; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [prop-extension-classes-are-contravariant-in-the-quotient-and-covariant-in-the-subobject] 2:quotient or equivalence-class construction\nORDINARY 2 [lem-equivalent-extensions-have-the-same-ext-class] 2:boundary-sensitive language\nHIGH 6 [lem-every-ext-one-class-is-represented-by-an-extension] 2:4 declared dependencies; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 4 [lem-two-extensions-with-the-same-ext-class-are-equivalent] 2:5 declared dependencies; 2:boundary-sensitive language\nHIGH 6 [thm-yoneda-ext-one-is-naturally-isomorphic-to-derived-ext-one] 2:6 declared dependencies; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 10 [cor-the-class-of-extensions-is-a-set-whenever-derived-ext-one-is-a-set] 2:4 declared dependencies; 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 6 [lem-yoneda-splicing-is-well-defined-on-equivalence-classes] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 9 [thm-yoneda-product-is-associative-and-unital] 2:6 declared dependencies; 2:6 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 8 [thm-higher-yoneda-ext-agrees-with-derived-ext] 3:8 declared dependencies; 2:8 cited facts; 1:7 numbered proof steps; 2:boundary-sensitive language\nORDINARY 2 [prop-the-yoneda-product-agrees-with-the-derived-ext-composition-product] 2:boundary-sensitive language\nMODERATE 4 [thm-projective-dimension-at-most-n-iff-the-nth-syzygy-is-projective] 1:3 cited facts; 3:biconditional / both-direction claim\nHIGH 7 [thm-projective-dimension-at-most-n-iff-higher-ext-vanishes] 2:6 declared dependencies; 2:5 cited facts; 3:biconditional / both-direction claim\nMODERATE 3 [thm-injective-dimension-at-most-n-iff-higher-ext-vanishes] 3:biconditional / both-direction claim\nHIGH 5 [cor-projective-dimension-is-the-largest-nondegenerate-ext-degree-when-finite] 3:biconditional / both-direction claim; 2:induction, recursion, or minimality\nHIGH 7 [thm-global-dimension-is-the-supremum-of-nondegenerate-ext-degrees] 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 6 [prop-global-dimension-zero-characterises-semisimple-module-categories] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [prop-hereditary-rings-have-global-dimension-at-most-one] 2:boundary-sensitive language\nCRITICAL 10 [lem-subgroups-of-free-abelian-groups-are-free] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 6 [thm-the-integers-have-global-dimension-one] 2:4 declared dependencies; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 2 [fs-an-extension-of-m-by-n-represents-ext-one-of-n-by-m] 2:boundary-sensitive language\nMODERATE 4 [fs-baer-sum-is-formed-by-taking-only-the-direct-sum-of-middle-objects] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [fs-equivalence-classes-of-extensions-automatically-form-a-set] 2:quotient or equivalence-class construction\nORDINARY 2 [fs-the-yoneda-product-is-graded-commutative-for-every-abelian-category] 2:boundary-sensitive language\nORDINARY 2 [fs-projective-dimension-is-the-length-of-any-projective-resolution] 2:boundary-sensitive language\nMODERATE 4 [fs-left-and-right-global-dimension-are-equal-by-definition] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [ex-the-split-extension-as-the-zero-baer-class] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [ex-baer-sum-of-two-extensions-of-cyclic-groups] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 4 [ex-ext-one-of-z-mod-n-by-an-abelian-group-as-extension-classes] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [ex-splicing-two-short-exact-sequences] 2:boundary-sensitive language\nORDINARY 2 [ex-a-noncommutative-yoneda-product] 2:boundary-sensitive language\nORDINARY 2 [ex-projective-dimension-of-a-cyclic-abelian-group] 2:boundary-sensitive language\nMODERATE 4 [ex-global-dimension-of-a-field-and-of-the-integers] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 2 [cex-two-equivalent-higher-extensions-with-no-single-isomorphism-of-middle-terms] 2:boundary-sensitive language\nORDINARY 2 [lem-the-tensor-total-differential-is-well-defined-and-squares-to-zero] 2:boundary-sensitive language\nORDINARY 2 [prop-tor-zero-is-the-tensor-product-in-either-construction] 2:boundary-sensitive language\nORDINARY 2 [prop-each-tor-construction-is-covariant-in-both-variables] 2:4 declared dependencies\nORDINARY 2 [prop-positive-tor-vanishes-when-the-resolved-variable-is-projective] 2:boundary-sensitive language\nORDINARY 0 [lem-projective-modules-are-flat-over-an-arbitrary-ring] no signals\nORDINARY 0 [lem-the-rows-of-the-augmented-tensor-double-complex-are-exact] no signals\nORDINARY 0 [lem-the-columns-of-the-augmented-tensor-double-complex-are-exact] no signals\nHIGH 5 [thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic] 3:8 declared dependencies; 2:boundary-sensitive language\nORDINARY 0 [prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions] no signals\nORDINARY 2 [thm-long-exact-tor-sequence-in-the-left-module-variable] 2:boundary-sensitive language\nORDINARY 0 [thm-long-exact-tor-sequence-in-the-right-module-variable] no signals\nORDINARY 0 [prop-tor-dimension-shifting] no signals\nHIGH 7 [thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes] 2:6 declared dependencies; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 7 [thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes] 2:5 declared dependencies; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nORDINARY 2 [cor-a-short-exact-sequence-stays-exact-after-tensoring-exactly-when-its-tor-boundary-obstruction-vanishes] 2:boundary-sensitive language\nORDINARY 2 [thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion] 2:boundary-sensitive language\nMODERATE 4 [thm-tor-of-two-cyclic-abelian-groups] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [thm-higher-tor-over-the-integers-vanishes] 2:boundary-sensitive language\nORDINARY 2 [prop-torsion-free-abelian-groups-are-flat] 2:analytic limiting/completeness language\nHIGH 5 [thm-over-a-pid-flat-is-equivalent-to-torsion-free] 3:biconditional / both-direction claim; 2:analytic limiting/completeness language\nORDINARY 2 [thm-tor-symmetry-over-a-commutative-ring] 2:4 declared dependencies\nHIGH 7 [thm-flat-dimension-at-most-n-iff-higher-tor-vanishes] 2:5 declared dependencies; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nORDINARY 2 [prop-weak-global-dimension-is-at-most-corresponding-global-dimension] 2:analytic limiting/completeness language\nCRITICAL 9 [thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric] 2:6 declared dependencies; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [prop-semisimple-rings-have-vanishing-positive-tor-and-ext] 2:boundary-sensitive language\nORDINARY 2 [prop-the-integers-have-weak-and-global-dimension-one] 2:boundary-sensitive language\nORDINARY 0 [fs-tor-takes-two-left-modules-over-an-arbitrary-ring] no signals\nORDINARY 2 [fs-the-two-tor-constructions-are-equal-by-definition] 2:boundary-sensitive language\nORDINARY 2 [fs-flat-modules-have-projective-dimension-zero] 2:boundary-sensitive language\nORDINARY 2 [fs-tor-one-vanishes-only-when-one-module-is-projective] 2:boundary-sensitive language\nORDINARY 2 [fs-tor-is-symmetric-over-every-noncommutative-ring] 2:boundary-sensitive language\nMODERATE 4 [fs-tor-one-of-r-mod-i-and-m-is-always-the-i-torsion-submodule-of-m] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [ex-tor-of-two-cyclic-groups-from-a-two-term-resolution] 2:boundary-sensitive language\nORDINARY 0 [ex-tor-detects-n-torsion] no signals\nORDINARY 2 [ex-a-flat-nonprojective-module] 2:boundary-sensitive language\nORDINARY 0 [ex-localization-is-flat-and-has-vanishing-positive-tor] no signals\nORDINARY 2 [ex-the-tensor-double-complex-in-low-degrees] 2:boundary-sensitive language\nORDINARY 0 [ex-tor-symmetry-over-a-commutative-ring] no signals\nORDINARY 2 [cex-a-noncommutative-handedness-error-in-tor] 2:boundary-sensitive language\nORDINARY 2 [ex-weak-dimension-and-global-dimension-for-a-field-and-the-integers] 2:boundary-sensitive language\nORDINARY 2 [lem-the-hom-cochain-differential-squares-to-zero] 2:boundary-sensitive language\nMODERATE 4 [lem-cycle-boundary-short-exact-sequences-for-a-free-complex-over-a-pid] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 8 [thm-submodules-of-free-modules-over-a-pid-are-free] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nORDINARY 2 [lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free] 2:existence, choice, uniqueness, or well-definedness\nORDINARY 2 [lem-the-universal-coefficient-edge-map-for-homology-is-well-defined] 2:quotient or equivalence-class construction\nMODERATE 4 [lem-the-universal-coefficient-tor-obstruction-map-for-homology] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 4 [thm-universal-coefficient-theorem-for-homology-over-a-pid] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [thm-the-homology-universal-coefficient-sequence-splits-nonnaturally] 2:quotient or equivalence-class construction\nMODERATE 4 [cex-the-universal-coefficient-splitting-cannot-in-general-be-chosen-naturally] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [lem-the-cohomology-universal-coefficient-extension-map] 2:boundary-sensitive language\nHIGH 6 [thm-universal-coefficient-theorem-for-cohomology-over-a-pid] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 8 [thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally] 2:4 declared dependencies; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [cor-cohomology-with-a-divisible-abelian-coefficient-group-is-hom-of-homology] 2:boundary-sensitive language\nMODERATE 4 [prop-modules-over-a-field-are-projective-flat-and-injective] 2:4 declared dependencies; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 0 [cor-cohomology-over-a-field-is-dual-to-homology-for-finite-dimensional-complexes] no signals\nORDINARY 2 [lem-the-kunneth-cross-product-map-is-well-defined-and-natural] 2:boundary-sensitive language\nCRITICAL 8 [lem-the-kunneth-tor-map] 2:6 declared dependencies; 2:6 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 6 [thm-kunneth-theorem-for-free-complexes-over-a-pid] 2:4 declared dependencies; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 6 [thm-the-kunneth-sequence-splits-nonnaturally] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [cor-kunneth-over-a-field] 2:boundary-sensitive language\nORDINARY 2 [cor-kunneth-when-one-homology-family-is-flat] 2:boundary-sensitive language\nORDINARY 2 [prop-euler-characteristic-is-multiplicative-under-the-finite-kunneth-hypotheses] 2:existence, choice, uniqueness, or well-definedness\nORDINARY 0 [prop-the-kunneth-cross-product-is-graded-commutative-under-the-twist-map] no signals\nORDINARY 0 [fs-the-universal-coefficient-theorem-always-gives-a-natural-direct-sum-decomposition] no signals\nORDINARY 2 [fs-uct-for-homology-has-an-ext-term-and-uct-for-cohomology-a-tor-term] 2:boundary-sensitive language\nORDINARY 2 [fs-kunneth-over-a-pid-is-always-a-tensor-product-isomorphism] 2:boundary-sensitive language\nORDINARY 2 [fs-freeness-of-chain-groups-can-be-dropped-from-the-classical-kunneth-statement] 2:boundary-sensitive language\nMODERATE 4 [fs-the-kunneth-short-exact-sequence-has-a-canonical-splitting] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 4 [ex-uct-homology-with-z-mod-m-coefficients] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [ex-uct-cohomology-of-a-two-term-free-complex] 2:boundary-sensitive language\nORDINARY 2 [ex-a-nonzero-tor-correction-in-universal-coefficients] 2:boundary-sensitive language\nMODERATE 4 [ex-kunneth-for-two-cyclic-two-term-complexes] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [ex-kunneth-over-a-field] 2:boundary-sensitive language\nORDINARY 2 [cex-a-nonnatural-choice-of-uct-splitting] 2:boundary-sensitive language\nORDINARY 2 [ex-euler-characteristic-of-a-tensor-product-complex] 2:boundary-sensitive language\nORDINARY 0 [thm-invariants-are-hom-from-the-trivial-group-ring-module] no signals\nORDINARY 0 [prop-the-invariants-functor-is-left-exact] no signals\nORDINARY 2 [prop-the-coinvariants-functor-is-right-exact] 2:boundary-sensitive language\nMODERATE 4 [prop-degree-zero-group-cohomology-and-homology-are-invariants-and-coinvariants] 2:4 declared dependencies; 2:boundary-sensitive language\nORDINARY 0 [thm-long-exact-sequence-in-group-cohomology] no signals\nORDINARY 0 [thm-long-exact-sequence-in-group-homology] no signals\nORDINARY 2 [lem-the-bar-differential-is-group-equivariant-and-squares-to-zero] 2:boundary-sensitive language\nORDINARY 2 [lem-the-augmented-bar-complex-is-exact] 2:boundary-sensitive language\nORDINARY 2 [thm-the-bar-complex-is-a-free-resolution-of-the-trivial-module] 2:4 declared dependencies\nORDINARY 2 [lem-the-inhomogeneous-group-cochain-differential-squares-to-zero] 2:boundary-sensitive language\nORDINARY 0 [thm-homogeneous-and-inhomogeneous-group-cochains-are-isomorphic-complexes] no signals\nMODERATE 3 [thm-the-bar-cochain-complex-computes-derived-group-cohomology] 3:10 declared dependencies\nMODERATE 4 [lem-degenerate-bar-chains-form-a-contractible-subcomplex] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 4 [thm-normalized-and-unnormalized-bar-complexes-are-chain-homotopy-equivalent] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 0 [cor-normalized-cochains-compute-group-cohomology] no signals\nORDINARY 2 [thm-induction-is-left-adjoint-and-coinduction-right-adjoint-to-restriction] 2:induction, recursion, or minimality\nORDINARY 2 [lem-the-group-ring-is-free-over-a-subgroup-ring] 2:quotient or equivalence-class construction\nORDINARY 2 [thm-shapiro-lemma-for-group-cohomology] 2:induction, recursion, or minimality\nORDINARY 2 [thm-shapiro-lemma-for-group-homology] 2:quotient or equivalence-class construction\nMODERATE 3 [thm-group-cohomological-dimension-is-detected-by-cohomology-vanishing] 3:biconditional / both-direction claim\nMODERATE 4 [lem-corestriction-is-independent-of-the-coset-representatives] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [thm-restriction-corestriction-composite-is-multiplication-by-the-index] 2:boundary-sensitive language\nORDINARY 2 [lem-positive-group-cohomology-of-the-trivial-group-vanishes] 2:boundary-sensitive language\nORDINARY 0 [prop-finite-groups-have-torsion-annihilation-in-positive-cohomology] no signals\nMODERATE 4 [thm-groups-of-finite-integral-cohomological-dimension-are-torsion-free] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 0 [fs-group-cohomology-is-the-derived-functor-of-coinvariants] no signals\nORDINARY 0 [fs-the-bar-contracting-homotopy-is-group-equivariant] no signals\nORDINARY 2 [fs-h-one-is-defined-here-as-crossed-homomorphisms-modulo-principal-ones] 2:quotient or equivalence-class construction\nORDINARY 2 [fs-h-two-is-defined-here-as-equivalence-classes-of-group-extensions] 2:quotient or equivalence-class construction\nORDINARY 2 [fs-shapiro-lemma-needs-no-distinction-between-induction-and-coinduction] 2:induction, recursion, or minimality\nORDINARY 2 [ex-group-cohomology-of-the-trivial-group] 2:boundary-sensitive language\nMODERATE 4 [ex-degree-zero-invariants-and-coinvariants] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 0 [ex-the-first-three-bar-differentials] no signals\nORDINARY 0 [ex-normalizing-an-inhomogeneous-cochain] no signals\nORDINARY 0 [ex-a-periodic-resolution-for-a-finite-cyclic-group] no signals\nMODERATE 4 [ex-cohomology-of-a-finite-cyclic-group-from-the-periodic-resolution] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [ex-shapiro-lemma-for-the-trivial-subgroup] 2:induction, recursion, or minimality\nORDINARY 0 [cex-the-underlying-bar-contraction-is-not-equivariant] no signals\nMODERATE 4 [ex-cohomological-dimension-of-the-trivial-group-and-of-an-infinite-cyclic-group] 2:boundary-sensitive language; 2:induction, recursion, or minimality\nrisk-report: 15 error(s), 704 item(s) routed\nERROR risk-review-missing [prop-the-two-ext-long-exact-sequences-agree-under-balance]: prop-the-two-ext-long-exact-sequences-agree-under-balance is high risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [cor-the-class-of-extensions-is-a-set-whenever-derived-ext-one-is-a-set]: cor-the-class-of-extensions-is-a-set-whenever-derived-ext-one-is-a-set is critical risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [thm-yoneda-product-is-associative-and-unital]: thm-yoneda-product-is-associative-and-unital is critical risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric]: thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric is critical risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally]: thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally is critical risk and lacks a complete Alpha risk_review",
      "named_ids": [
        "prop-ext-zero-is-hom-for-the-injective-construction",
        "prop-ext-zero-is-hom-for-the-projective-construction",
        "prop-injective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable",
        "prop-projective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable",
        "prop-positive-ext-vanishes-on-an-injective-second-variable",
        "prop-positive-ext-vanishes-on-a-projective-first-variable",
        "lem-the-two-hom-double-complex-differentials-commute-before-signing",
        "lem-acyclic-assembly-by-exact-columns",
        "lem-acyclic-assembly-by-exact-rows",
        "lem-hom-from-a-projective-object-makes-the-injective-resolution-columns-exact",
        "lem-hom-into-an-injective-object-makes-the-projective-resolution-rows-exact",
        "thm-projective-and-injective-constructions-of-ext-are-naturally-isomorphic",
        "lem-the-ext-balance-isomorphism-is-independent-of-resolution-comparison-data",
        "prop-the-ext-balance-isomorphism-is-natural-in-both-variables",
        "prop-the-ext-balance-isomorphisms-satisfy-change-of-resolution-cocycle-laws",
        "thm-long-exact-ext-sequence-in-the-second-variable",
        "thm-long-exact-ext-sequence-in-the-first-variable",
        "prop-the-two-ext-long-exact-sequences-agree-under-balance",
        "thm-ext-dimension-shifting-in-the-first-variable",
        "thm-ext-dimension-shifting-in-the-second-variable",
        "cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable",
        "cor-ext-can-be-computed-from-any-injective-resolution-of-the-second-variable",
        "prop-exact-functors-compatible-with-hom-transport-ext-under-the-stated-adjunction-hypotheses",
        "lem-ext-one-of-z-mod-n-by-z-is-z-mod-n",
        "fs-ext-is-defined-before-choosing-or-supplying-resolutions",
        "fs-projective-ext-and-injective-ext-are-equal-by-definition",
        "fs-ext-is-covariant-in-both-variables",
        "fs-positive-ext-vanishes-whenever-either-variable-is-injective",
        "fs-a-double-complex-totalisation-is-unambiguous-with-infinite-diagonals",
        "fs-balance-of-ext-requires-the-spectral-sequence-pages",
        "ex-ext-zero-as-hom-in-both-constructions",
        "ex-ext-from-a-two-term-projective-resolution",
        "ex-ext-of-a-cyclic-abelian-group-by-an-abelian-group",
        "ex-the-hom-double-complex-in-low-bidegrees",
        "ex-an-ext-dimension-shift",
        "cex-positive-ext-does-not-vanish-for-an-injective-first-variable",
        "ex-naturality-of-the-balance-isomorphism",
        "prop-a-morphism-of-extensions-is-an-isomorphism",
        "prop-equivalence-of-extensions-is-an-equivalence-relation",
        "lem-pullback-and-pushout-descend-to-extension-classes",
        "lem-baer-sum-of-short-exact-sequence-classes-is-independent-of-representatives",
        "thm-baer-sum-makes-extension-classes-an-abelian-group",
        "prop-extension-classes-are-contravariant-in-the-quotient-and-covariant-in-the-subobject",
        "lem-equivalent-extensions-have-the-same-ext-class",
        "lem-every-ext-one-class-is-represented-by-an-extension",
        "lem-two-extensions-with-the-same-ext-class-are-equivalent",
        "thm-yoneda-ext-one-is-naturally-isomorphic-to-derived-ext-one",
        "cor-the-class-of-extensions-is-a-set-whenever-derived-ext-one-is-a-set",
        "lem-yoneda-splicing-is-well-defined-on-equivalence-classes",
        "thm-yoneda-product-is-associative-and-unital",
        "thm-higher-yoneda-ext-agrees-with-derived-ext",
        "prop-the-yoneda-product-agrees-with-the-derived-ext-composition-product",
        "thm-projective-dimension-at-most-n-iff-the-nth-syzygy-is-projective",
        "thm-projective-dimension-at-most-n-iff-higher-ext-vanishes",
        "thm-injective-dimension-at-most-n-iff-higher-ext-vanishes",
        "cor-projective-dimension-is-the-largest-nondegenerate-ext-degree-when-finite",
        "thm-global-dimension-is-the-supremum-of-nondegenerate-ext-degrees",
        "prop-global-dimension-zero-characterises-semisimple-module-categories",
        "prop-hereditary-rings-have-global-dimension-at-most-one",
        "lem-subgroups-of-free-abelian-groups-are-free",
        "thm-the-integers-have-global-dimension-one",
        "fs-an-extension-of-m-by-n-represents-ext-one-of-n-by-m",
        "fs-baer-sum-is-formed-by-taking-only-the-direct-sum-of-middle-objects",
        "fs-equivalence-classes-of-extensions-automatically-form-a-set",
        "fs-the-yoneda-product-is-graded-commutative-for-every-abelian-category",
        "fs-projective-dimension-is-the-length-of-any-projective-resolution",
        "fs-left-and-right-global-dimension-are-equal-by-definition",
        "ex-the-split-extension-as-the-zero-baer-class",
        "ex-baer-sum-of-two-extensions-of-cyclic-groups",
        "ex-ext-one-of-z-mod-n-by-an-abelian-group-as-extension-classes",
        "ex-splicing-two-short-exact-sequences",
        "ex-a-noncommutative-yoneda-product",
        "ex-projective-dimension-of-a-cyclic-abelian-group",
        "ex-global-dimension-of-a-field-and-of-the-integers",
        "cex-two-equivalent-higher-extensions-with-no-single-isomorphism-of-middle-terms",
        "lem-the-tensor-total-differential-is-well-defined-and-squares-to-zero",
        "prop-tor-zero-is-the-tensor-product-in-either-construction",
        "prop-each-tor-construction-is-covariant-in-both-variables",
        "prop-positive-tor-vanishes-when-the-resolved-variable-is-projective",
        "lem-projective-modules-are-flat-over-an-arbitrary-ring",
        "lem-the-rows-of-the-augmented-tensor-double-complex-are-exact",
        "lem-the-columns-of-the-augmented-tensor-double-complex-are-exact",
        "thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic",
        "prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions",
        "thm-long-exact-tor-sequence-in-the-left-module-variable",
        "thm-long-exact-tor-sequence-in-the-right-module-variable",
        "prop-tor-dimension-shifting",
        "thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes",
        "thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes",
        "cor-a-short-exact-sequence-stays-exact-after-tensoring-exactly-when-its-tor-boundary-obstruction-vanishes",
        "thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion",
        "thm-tor-of-two-cyclic-abelian-groups",
        "thm-higher-tor-over-the-integers-vanishes",
        "prop-torsion-free-abelian-groups-are-flat",
        "thm-over-a-pid-flat-is-equivalent-to-torsion-free",
        "thm-tor-symmetry-over-a-commutative-ring",
        "thm-flat-dimension-at-most-n-iff-higher-tor-vanishes",
        "prop-weak-global-dimension-is-at-most-corresponding-global-dimension",
        "thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric",
        "prop-semisimple-rings-have-vanishing-positive-tor-and-ext",
        "prop-the-integers-have-weak-and-global-dimension-one",
        "fs-tor-takes-two-left-modules-over-an-arbitrary-ring",
        "fs-the-two-tor-constructions-are-equal-by-definition",
        "fs-flat-modules-have-projective-dimension-zero",
        "fs-tor-one-vanishes-only-when-one-module-is-projective",
        "fs-tor-is-symmetric-over-every-noncommutative-ring",
        "fs-tor-one-of-r-mod-i-and-m-is-always-the-i-torsion-submodule-of-m",
        "ex-tor-of-two-cyclic-groups-from-a-two-term-resolution",
        "ex-tor-detects-n-torsion",
        "ex-a-flat-nonprojective-module",
        "ex-localization-is-flat-and-has-vanishing-positive-tor",
        "ex-the-tensor-double-complex-in-low-degrees",
        "ex-tor-symmetry-over-a-commutative-ring",
        "cex-a-noncommutative-handedness-error-in-tor",
        "ex-weak-dimension-and-global-dimension-for-a-field-and-the-integers",
        "lem-the-hom-cochain-differential-squares-to-zero",
        "lem-cycle-boundary-short-exact-sequences-for-a-free-complex-over-a-pid",
        "thm-submodules-of-free-modules-over-a-pid-are-free",
        "lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free",
        "lem-the-universal-coefficient-edge-map-for-homology-is-well-defined",
        "lem-the-universal-coefficient-tor-obstruction-map-for-homology",
        "thm-universal-coefficient-theorem-for-homology-over-a-pid",
        "thm-the-homology-universal-coefficient-sequence-splits-nonnaturally",
        "cex-the-universal-coefficient-splitting-cannot-in-general-be-chosen-naturally",
        "lem-the-cohomology-universal-coefficient-extension-map",
        "thm-universal-coefficient-theorem-for-cohomology-over-a-pid",
        "thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally",
        "cor-cohomology-with-a-divisible-abelian-coefficient-group-is-hom-of-homology",
        "prop-modules-over-a-field-are-projective-flat-and-injective",
        "cor-cohomology-over-a-field-is-dual-to-homology-for-finite-dimensional-complexes",
        "lem-the-kunneth-cross-product-map-is-well-defined-and-natural",
        "lem-the-kunneth-tor-map",
        "thm-kunneth-theorem-for-free-complexes-over-a-pid",
        "thm-the-kunneth-sequence-splits-nonnaturally",
        "cor-kunneth-over-a-field",
        "cor-kunneth-when-one-homology-family-is-flat",
        "prop-euler-characteristic-is-multiplicative-under-the-finite-kunneth-hypotheses",
        "prop-the-kunneth-cross-product-is-graded-commutative-under-the-twist-map",
        "fs-the-universal-coefficient-theorem-always-gives-a-natural-direct-sum-decomposition",
        "fs-uct-for-homology-has-an-ext-term-and-uct-for-cohomology-a-tor-term",
        "fs-kunneth-over-a-pid-is-always-a-tensor-product-isomorphism",
        "fs-freeness-of-chain-groups-can-be-dropped-from-the-classical-kunneth-statement",
        "fs-the-kunneth-short-exact-sequence-has-a-canonical-splitting",
        "ex-uct-homology-with-z-mod-m-coefficients",
        "ex-uct-cohomology-of-a-two-term-free-complex",
        "ex-a-nonzero-tor-correction-in-universal-coefficients",
        "ex-kunneth-for-two-cyclic-two-term-complexes",
        "ex-kunneth-over-a-field",
        "cex-a-nonnatural-choice-of-uct-splitting",
        "ex-euler-characteristic-of-a-tensor-product-complex",
        "thm-invariants-are-hom-from-the-trivial-group-ring-module",
        "prop-the-invariants-functor-is-left-exact",
        "prop-the-coinvariants-functor-is-right-exact",
        "prop-degree-zero-group-cohomology-and-homology-are-invariants-and-coinvariants",
        "thm-long-exact-sequence-in-group-cohomology",
        "thm-long-exact-sequence-in-group-homology",
        "lem-the-bar-differential-is-group-equivariant-and-squares-to-zero",
        "lem-the-augmented-bar-complex-is-exact",
        "thm-the-bar-complex-is-a-free-resolution-of-the-trivial-module",
        "lem-the-inhomogeneous-group-cochain-differential-squares-to-zero",
        "thm-homogeneous-and-inhomogeneous-group-cochains-are-isomorphic-complexes",
        "thm-the-bar-cochain-complex-computes-derived-group-cohomology",
        "lem-degenerate-bar-chains-form-a-contractible-subcomplex",
        "thm-normalized-and-unnormalized-bar-complexes-are-chain-homotopy-equivalent",
        "cor-normalized-cochains-compute-group-cohomology",
        "thm-induction-is-left-adjoint-and-coinduction-right-adjoint-to-restriction",
        "lem-the-group-ring-is-free-over-a-subgroup-ring",
        "thm-shapiro-lemma-for-group-cohomology",
        "thm-shapiro-lemma-for-group-homology",
        "thm-group-cohomological-dimension-is-detected-by-cohomology-vanishing",
        "lem-corestriction-is-independent-of-the-coset-representatives",
        "thm-restriction-corestriction-composite-is-multiplication-by-the-index",
        "lem-positive-group-cohomology-of-the-trivial-group-vanishes",
        "prop-finite-groups-have-torsion-annihilation-in-positive-cohomology",
        "thm-groups-of-finite-integral-cohomological-dimension-are-torsion-free",
        "fs-group-cohomology-is-the-derived-functor-of-coinvariants",
        "fs-the-bar-contracting-homotopy-is-group-equivariant",
        "fs-h-one-is-defined-here-as-crossed-homomorphisms-modulo-principal-ones",
        "fs-h-two-is-defined-here-as-equivalence-classes-of-group-extensions",
        "fs-shapiro-lemma-needs-no-distinction-between-induction-and-coinduction",
        "ex-group-cohomology-of-the-trivial-group",
        "ex-degree-zero-invariants-and-coinvariants",
        "ex-the-first-three-bar-differentials",
        "ex-normalizing-an-inhomogeneous-cochain",
        "ex-a-periodic-resolution-for-a-finite-cyclic-group",
        "ex-cohomology-of-a-finite-cyclic-group-from-the-periodic-resolution",
        "ex-shapiro-lemma-for-the-trivial-subgroup",
        "cex-the-underlying-bar-contraction-is-not-equivariant",
        "ex-cohomological-dimension-of-the-trivial-group-and-of-an-infinite-cyclic-group"
      ]
    },
    {
      "id": "boundary-audit",
      "stage": "8-close",
      "why": "Every line above is a candidate for a human read, not a verdict.",
      "output": "boundary-audit: 5632 rows over 1 contract file(s); 4633 marked not_applicable\n\nTEMPLATE REUSE — 25 cluster(s) at or above 3 members.\nA rationale shared across many items is not a determination about any of them.\n\n  6 rows · axes: degenerate, empty, endpoints, nonempty-choice, one, zero\n    \"Steps 2.1–5.1: finite face maxima and least natural depths need no global choice; small simplices including vertices have depth zero; repeated faces/cancellatio…\"\n    items: thm-cover-small-inclusion-is-a-chain-homotopy-equivalence\n\n  6 rows · axes: degenerate, empty, endpoints, nonempty-choice, one, zero\n    \"Step 1.1 uses the supplied basepoint, excluding empty X; steps 3.1–4.1 check n=0, n=-1, lower degrees, the point, and G=0.\"\n    items: cor-suspension-isomorphism-in-reduced-singular-homology\n\n  6 rows · axes: empty, endpoints, iff-forward, iff-reverse, one, zero\n    \"Steps 1.1–4.1 handle finite short-input exceptions, endmarkers, invalid configuration names, exact reachability equivalence, and both co-class inclusions.\"\n    items: thm-immerman-szelepcsenyi-nl-equals-conl\n\n  5 rows · axes: empty, endpoints, iff-forward, iff-reverse, one\n    \"The refutation uses the fixed nontrivial finite groups V=C_2 x C_2 and A=C_2; no variable family, endpoint, or biconditional branch is asserted.\"\n    items: fs-the-universal-coefficient-short-exact-sequence-splits-naturally\n\n  5 rows · axes: degenerate, iff-forward, iff-reverse, nonempty-choice, zero\n    \"Full-resolution calculation in 1.1; right exactness and H0 in 1.2; horseshoe kernel and converse in 2.1–3.1. Zero tensor functors are exact. DC and supplied res…\"\n    items: thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes\n\n  5 rows · axes: degenerate, iff-forward, iff-reverse, nonempty-choice, zero\n    \"Full-resolution forward argument in 1.1, natural Tor0 and cokernel calculation in 1.2, left-variable LES and converse in 2.1–3.1. Zero tensor functors are exact…\"\n    items: thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes\n\n  5 rows · axes: degenerate, empty, endpoints, iff-forward, iff-reverse\n    \"This explicit positive-integer finite-complex calculation has no additional empty branch.\"\n    items: ex-the-tensor-double-complex-in-low-degrees\n\n  5 rows · axes: empty, iff-forward, iff-reverse, one, zero\n    \"Steps 1.1 and 2.1 account for malformed inputs, empty source, zero unary padding, and both independently hypothesized translations.\"\n    items: lem-padding-transfers-time-bounds\n\n  5 rows · axes: endpoints, iff-forward, iff-reverse, one, zero\n    \"Steps 1.1–5.1 include n=0, early halting, boundary head positions, and exact configuration induction in both acceptance directions.\"\n    items: lem-polynomial-time-computations-have-logspace-uniform-circuits\n\n  4 rows · axes: degenerate, empty, one, zero\n    \"Step 1.1 includes the zero space/empty direct sum and negative virtual classes; step 2.1 preserves zero, multiplication, and the unit [k].\"\n    items: ex-the-grothendieck-ring-of-finite-dimensional-vector-spaces\n\n  4 rows · axes: degenerate, empty, nonempty-choice, zero\n    \"Suprema in N union infinity are determined by finite upper bounds; sup empty=0 handles the zero ring. DC and supplied resolutions on both hands permit the crite…\"\n    items: thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric\n\n  4 rows · axes: degenerate, empty, endpoints, zero\n    \"Step 3.1 covers empty overlap/cover members, G=0, degree zero, and terminal zero maps; the inclusion square in step 2.1 holds in every degree.\"\n    items: thm-naturality-of-singular-mayer-vietoris\n\n  … 13 further cluster(s); use --json for all\n\nCONTRADICTED DISPOSITIONS — 2 candidate(s).\nEach is a not_applicable row on an axis the item's own text exhibits. Read the item.\n\n  cor-the-class-of-extensions-is-a-set-whenever-derived-ext-one-is-a-set  [iff-forward]\n    the item's own text states a biconditional (\\bexactly when\\b)\n    row says: \"Extension classes form a set whenever derived Ext one does makes a one-directional assertion rather than a biconditional, so there is no iff…\"\n\n  cor-the-class-of-extensions-is-a-set-whenever-derived-ext-one-is-a-set  [iff-reverse]\n    the item's own text states a biconditional (\\bexactly when\\b)\n    row says: \"Extension classes form a set whenever derived Ext one does makes a one-directional assertion rather than a biconditional, so there is no iff…\"\n\nUPHELD BY REVIEW — 7 row(s) an Alpha read and kept, with reasons on the record:\nEvery line above is a candidate for a human read, not a verdict.\n",
      "named_ids": []
    },
    {
      "id": "citation-fidelity",
      "stage": "8-close",
      "why": "Every line above is a candidate for a human read, not a verdict.",
      "output": "citation-fidelity: 421 citation(s) over 704 authored item(s)\n\nQUOTE NOT FOUND IN THE CITED ITEM — 1.\nThe contract asserts a verbatim quote. These do not appear in the source.\n\n  thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two  [L2] -> thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally (searched: Statement)\n    quote: \"the cohomological UCT sequence splits after choices of complements, but no natural splitting is claimed\"\n\nWIDENING CANDIDATES — none found by the three detectors.\n\nEvery line above is a candidate for a human read, not a verdict.\n",
      "named_ids": []
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "thm-long-exact-ext-sequence-in-the-first-variable",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-the-two-ext-long-exact-sequences-agree-under-balance",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-ext-can-be-computed-from-any-injective-resolution-of-the-second-variable",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-the-class-of-extensions-is-a-set-whenever-derived-ext-one-is-a-set",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-yoneda-product-is-associative-and-unital",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-higher-yoneda-ext-agrees-with-derived-ext",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-baer-sum-of-two-extensions-of-cyclic-groups",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-tensor-double-complex-in-low-degrees",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-kunneth-tor-map",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-ext-zero-is-hom-for-the-injective-construction",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-ext-zero-is-hom-for-the-projective-construction",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-injective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-projective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-positive-ext-vanishes-on-an-injective-second-variable",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-positive-ext-vanishes-on-a-projective-first-variable",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-two-hom-double-complex-differentials-commute-before-signing",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-acyclic-assembly-by-exact-columns",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-acyclic-assembly-by-exact-rows",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-hom-from-a-projective-object-makes-the-injective-resolution-columns-exact",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-hom-into-an-injective-object-makes-the-projective-resolution-rows-exact",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-projective-and-injective-constructions-of-ext-are-naturally-isomorphic",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-ext-balance-isomorphism-is-independent-of-resolution-comparison-data",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-the-ext-balance-isomorphism-is-natural-in-both-variables",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-the-ext-balance-isomorphisms-satisfy-change-of-resolution-cocycle-laws",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-long-exact-ext-sequence-in-the-second-variable",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-ext-dimension-shifting-in-the-first-variable",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-ext-dimension-shifting-in-the-second-variable",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-exact-functors-compatible-with-hom-transport-ext-under-the-stated-adjunction-hypotheses",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-ext-one-of-z-mod-n-by-z-is-z-mod-n",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-ext-is-defined-before-choosing-or-supplying-resolutions",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-projective-ext-and-injective-ext-are-equal-by-definition",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-ext-is-covariant-in-both-variables",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-positive-ext-vanishes-whenever-either-variable-is-injective",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-a-double-complex-totalisation-is-unambiguous-with-infinite-diagonals",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-balance-of-ext-requires-the-spectral-sequence-pages",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-ext-zero-as-hom-in-both-constructions",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-ext-from-a-two-term-projective-resolution",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-ext-of-a-cyclic-abelian-group-by-an-abelian-group",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-hom-double-complex-in-low-bidegrees",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-an-ext-dimension-shift",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-positive-ext-does-not-vanish-for-an-injective-first-variable",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-naturality-of-the-balance-isomorphism",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-a-morphism-of-extensions-is-an-isomorphism",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-equivalence-of-extensions-is-an-equivalence-relation",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-pullback-and-pushout-descend-to-extension-classes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-baer-sum-of-short-exact-sequence-classes-is-independent-of-representatives",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-baer-sum-makes-extension-classes-an-abelian-group",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-extension-classes-are-contravariant-in-the-quotient-and-covariant-in-the-subobject",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-equivalent-extensions-have-the-same-ext-class",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-every-ext-one-class-is-represented-by-an-extension",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-two-extensions-with-the-same-ext-class-are-equivalent",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-yoneda-ext-one-is-naturally-isomorphic-to-derived-ext-one",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-yoneda-splicing-is-well-defined-on-equivalence-classes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-the-yoneda-product-agrees-with-the-derived-ext-composition-product",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-projective-dimension-at-most-n-iff-the-nth-syzygy-is-projective",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-projective-dimension-at-most-n-iff-higher-ext-vanishes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-injective-dimension-at-most-n-iff-higher-ext-vanishes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-projective-dimension-is-the-largest-nondegenerate-ext-degree-when-finite",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-global-dimension-is-the-supremum-of-nondegenerate-ext-degrees",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-global-dimension-zero-characterises-semisimple-module-categories",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-hereditary-rings-have-global-dimension-at-most-one",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-subgroups-of-free-abelian-groups-are-free",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-integers-have-global-dimension-one",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-an-extension-of-m-by-n-represents-ext-one-of-n-by-m",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-baer-sum-is-formed-by-taking-only-the-direct-sum-of-middle-objects",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-equivalence-classes-of-extensions-automatically-form-a-set",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-yoneda-product-is-graded-commutative-for-every-abelian-category",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-projective-dimension-is-the-length-of-any-projective-resolution",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-left-and-right-global-dimension-are-equal-by-definition",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-split-extension-as-the-zero-baer-class",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-ext-one-of-z-mod-n-by-an-abelian-group-as-extension-classes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-splicing-two-short-exact-sequences",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-noncommutative-yoneda-product",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-projective-dimension-of-a-cyclic-abelian-group",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-global-dimension-of-a-field-and-of-the-integers",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-two-equivalent-higher-extensions-with-no-single-isomorphism-of-middle-terms",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-tensor-total-differential-is-well-defined-and-squares-to-zero",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-tor-zero-is-the-tensor-product-in-either-construction",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-each-tor-construction-is-covariant-in-both-variables",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-positive-tor-vanishes-when-the-resolved-variable-is-projective",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-projective-modules-are-flat-over-an-arbitrary-ring",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-rows-of-the-augmented-tensor-double-complex-are-exact",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-columns-of-the-augmented-tensor-double-complex-are-exact",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-long-exact-tor-sequence-in-the-left-module-variable",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-long-exact-tor-sequence-in-the-right-module-variable",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-tor-dimension-shifting",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-a-short-exact-sequence-stays-exact-after-tensoring-exactly-when-its-tor-boundary-obstruction-vanishes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-tor-of-two-cyclic-abelian-groups",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-higher-tor-over-the-integers-vanishes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-torsion-free-abelian-groups-are-flat",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-over-a-pid-flat-is-equivalent-to-torsion-free",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-tor-symmetry-over-a-commutative-ring",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-flat-dimension-at-most-n-iff-higher-tor-vanishes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-weak-global-dimension-is-at-most-corresponding-global-dimension",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-semisimple-rings-have-vanishing-positive-tor-and-ext",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-the-integers-have-weak-and-global-dimension-one",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-tor-takes-two-left-modules-over-an-arbitrary-ring",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-two-tor-constructions-are-equal-by-definition",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-flat-modules-have-projective-dimension-zero",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-tor-one-vanishes-only-when-one-module-is-projective",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-tor-is-symmetric-over-every-noncommutative-ring",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-tor-one-of-r-mod-i-and-m-is-always-the-i-torsion-submodule-of-m",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-tor-of-two-cyclic-groups-from-a-two-term-resolution",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-tor-detects-n-torsion",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-flat-nonprojective-module",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-localization-is-flat-and-has-vanishing-positive-tor",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-tor-symmetry-over-a-commutative-ring",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-a-noncommutative-handedness-error-in-tor",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-weak-dimension-and-global-dimension-for-a-field-and-the-integers",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-hom-cochain-differential-squares-to-zero",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-cycle-boundary-short-exact-sequences-for-a-free-complex-over-a-pid",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-submodules-of-free-modules-over-a-pid-are-free",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-universal-coefficient-edge-map-for-homology-is-well-defined",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-universal-coefficient-tor-obstruction-map-for-homology",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-universal-coefficient-theorem-for-homology-over-a-pid",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-homology-universal-coefficient-sequence-splits-nonnaturally",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-the-universal-coefficient-splitting-cannot-in-general-be-chosen-naturally",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-cohomology-universal-coefficient-extension-map",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-universal-coefficient-theorem-for-cohomology-over-a-pid",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-cohomology-with-a-divisible-abelian-coefficient-group-is-hom-of-homology",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-modules-over-a-field-are-projective-flat-and-injective",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-cohomology-over-a-field-is-dual-to-homology-for-finite-dimensional-complexes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-kunneth-cross-product-map-is-well-defined-and-natural",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-kunneth-theorem-for-free-complexes-over-a-pid",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-kunneth-sequence-splits-nonnaturally",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-kunneth-over-a-field",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-kunneth-when-one-homology-family-is-flat",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-euler-characteristic-is-multiplicative-under-the-finite-kunneth-hypotheses",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-the-kunneth-cross-product-is-graded-commutative-under-the-twist-map",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-universal-coefficient-theorem-always-gives-a-natural-direct-sum-decomposition",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-uct-for-homology-has-an-ext-term-and-uct-for-cohomology-a-tor-term",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-kunneth-over-a-pid-is-always-a-tensor-product-isomorphism",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-freeness-of-chain-groups-can-be-dropped-from-the-classical-kunneth-statement",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-kunneth-short-exact-sequence-has-a-canonical-splitting",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-uct-homology-with-z-mod-m-coefficients",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-uct-cohomology-of-a-two-term-free-complex",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-nonzero-tor-correction-in-universal-coefficients",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-kunneth-for-two-cyclic-two-term-complexes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-kunneth-over-a-field",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-a-nonnatural-choice-of-uct-splitting",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-euler-characteristic-of-a-tensor-product-complex",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-invariants-are-hom-from-the-trivial-group-ring-module",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-the-invariants-functor-is-left-exact",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-the-coinvariants-functor-is-right-exact",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-degree-zero-group-cohomology-and-homology-are-invariants-and-coinvariants",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-long-exact-sequence-in-group-cohomology",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-long-exact-sequence-in-group-homology",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-bar-differential-is-group-equivariant-and-squares-to-zero",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-augmented-bar-complex-is-exact",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-bar-complex-is-a-free-resolution-of-the-trivial-module",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-inhomogeneous-group-cochain-differential-squares-to-zero",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-homogeneous-and-inhomogeneous-group-cochains-are-isomorphic-complexes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-bar-cochain-complex-computes-derived-group-cohomology",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-degenerate-bar-chains-form-a-contractible-subcomplex",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-normalized-and-unnormalized-bar-complexes-are-chain-homotopy-equivalent",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-normalized-cochains-compute-group-cohomology",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-induction-is-left-adjoint-and-coinduction-right-adjoint-to-restriction",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-group-ring-is-free-over-a-subgroup-ring",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-shapiro-lemma-for-group-cohomology",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-shapiro-lemma-for-group-homology",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-group-cohomological-dimension-is-detected-by-cohomology-vanishing",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-corestriction-is-independent-of-the-coset-representatives",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-restriction-corestriction-composite-is-multiplication-by-the-index",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-positive-group-cohomology-of-the-trivial-group-vanishes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-finite-groups-have-torsion-annihilation-in-positive-cohomology",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-groups-of-finite-integral-cohomological-dimension-are-torsion-free",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-group-cohomology-is-the-derived-functor-of-coinvariants",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-bar-contracting-homotopy-is-group-equivariant",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-h-one-is-defined-here-as-crossed-homomorphisms-modulo-principal-ones",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-h-two-is-defined-here-as-equivalence-classes-of-group-extensions",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-shapiro-lemma-needs-no-distinction-between-induction-and-coinduction",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-group-cohomology-of-the-trivial-group",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-degree-zero-invariants-and-coinvariants",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-first-three-bar-differentials",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-normalizing-an-inhomogeneous-cochain",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-periodic-resolution-for-a-finite-cyclic-group",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-cohomology-of-a-finite-cyclic-group-from-the-periodic-resolution",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-shapiro-lemma-for-the-trivial-subgroup",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-the-underlying-bar-contraction-is-not-equivariant",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-cohomological-dimension-of-the-trivial-group-and-of-an-infinite-cyclic-group",
      "scope": "run",
      "owner": "b"
    }
  ],
  "assigned_items": [
    {
      "id": "thm-long-exact-ext-sequence-in-the-first-variable",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-the-two-ext-long-exact-sequences-agree-under-balance",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-ext-can-be-computed-from-any-injective-resolution-of-the-second-variable",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-the-class-of-extensions-is-a-set-whenever-derived-ext-one-is-a-set",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-yoneda-product-is-associative-and-unital",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-higher-yoneda-ext-agrees-with-derived-ext",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-baer-sum-of-two-extensions-of-cyclic-groups",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-tensor-double-complex-in-low-degrees",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-kunneth-tor-map",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-ext-zero-is-hom-for-the-injective-construction",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-ext-zero-is-hom-for-the-projective-construction",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-injective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-projective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-positive-ext-vanishes-on-an-injective-second-variable",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-positive-ext-vanishes-on-a-projective-first-variable",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-two-hom-double-complex-differentials-commute-before-signing",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-acyclic-assembly-by-exact-columns",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-acyclic-assembly-by-exact-rows",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-hom-from-a-projective-object-makes-the-injective-resolution-columns-exact",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-hom-into-an-injective-object-makes-the-projective-resolution-rows-exact",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-projective-and-injective-constructions-of-ext-are-naturally-isomorphic",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-ext-balance-isomorphism-is-independent-of-resolution-comparison-data",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-the-ext-balance-isomorphism-is-natural-in-both-variables",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-the-ext-balance-isomorphisms-satisfy-change-of-resolution-cocycle-laws",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-long-exact-ext-sequence-in-the-second-variable",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-ext-dimension-shifting-in-the-first-variable",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-ext-dimension-shifting-in-the-second-variable",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-exact-functors-compatible-with-hom-transport-ext-under-the-stated-adjunction-hypotheses",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-ext-one-of-z-mod-n-by-z-is-z-mod-n",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-ext-is-defined-before-choosing-or-supplying-resolutions",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-projective-ext-and-injective-ext-are-equal-by-definition",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-ext-is-covariant-in-both-variables",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-positive-ext-vanishes-whenever-either-variable-is-injective",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-a-double-complex-totalisation-is-unambiguous-with-infinite-diagonals",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-balance-of-ext-requires-the-spectral-sequence-pages",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-ext-zero-as-hom-in-both-constructions",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-ext-from-a-two-term-projective-resolution",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-ext-of-a-cyclic-abelian-group-by-an-abelian-group",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-hom-double-complex-in-low-bidegrees",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-an-ext-dimension-shift",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-positive-ext-does-not-vanish-for-an-injective-first-variable",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-naturality-of-the-balance-isomorphism",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-a-morphism-of-extensions-is-an-isomorphism",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-equivalence-of-extensions-is-an-equivalence-relation",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-pullback-and-pushout-descend-to-extension-classes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-baer-sum-of-short-exact-sequence-classes-is-independent-of-representatives",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-baer-sum-makes-extension-classes-an-abelian-group",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-extension-classes-are-contravariant-in-the-quotient-and-covariant-in-the-subobject",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-equivalent-extensions-have-the-same-ext-class",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-every-ext-one-class-is-represented-by-an-extension",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-two-extensions-with-the-same-ext-class-are-equivalent",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-yoneda-ext-one-is-naturally-isomorphic-to-derived-ext-one",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-yoneda-splicing-is-well-defined-on-equivalence-classes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-the-yoneda-product-agrees-with-the-derived-ext-composition-product",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-projective-dimension-at-most-n-iff-the-nth-syzygy-is-projective",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-projective-dimension-at-most-n-iff-higher-ext-vanishes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-injective-dimension-at-most-n-iff-higher-ext-vanishes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-projective-dimension-is-the-largest-nondegenerate-ext-degree-when-finite",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-global-dimension-is-the-supremum-of-nondegenerate-ext-degrees",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-global-dimension-zero-characterises-semisimple-module-categories",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-hereditary-rings-have-global-dimension-at-most-one",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-subgroups-of-free-abelian-groups-are-free",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-integers-have-global-dimension-one",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-an-extension-of-m-by-n-represents-ext-one-of-n-by-m",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-baer-sum-is-formed-by-taking-only-the-direct-sum-of-middle-objects",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-equivalence-classes-of-extensions-automatically-form-a-set",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-yoneda-product-is-graded-commutative-for-every-abelian-category",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-projective-dimension-is-the-length-of-any-projective-resolution",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-left-and-right-global-dimension-are-equal-by-definition",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-split-extension-as-the-zero-baer-class",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-ext-one-of-z-mod-n-by-an-abelian-group-as-extension-classes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-splicing-two-short-exact-sequences",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-noncommutative-yoneda-product",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-projective-dimension-of-a-cyclic-abelian-group",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-global-dimension-of-a-field-and-of-the-integers",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-two-equivalent-higher-extensions-with-no-single-isomorphism-of-middle-terms",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-tensor-total-differential-is-well-defined-and-squares-to-zero",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-tor-zero-is-the-tensor-product-in-either-construction",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-each-tor-construction-is-covariant-in-both-variables",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-positive-tor-vanishes-when-the-resolved-variable-is-projective",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-projective-modules-are-flat-over-an-arbitrary-ring",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-rows-of-the-augmented-tensor-double-complex-are-exact",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-columns-of-the-augmented-tensor-double-complex-are-exact",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-long-exact-tor-sequence-in-the-left-module-variable",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-long-exact-tor-sequence-in-the-right-module-variable",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-tor-dimension-shifting",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-a-short-exact-sequence-stays-exact-after-tensoring-exactly-when-its-tor-boundary-obstruction-vanishes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-tor-of-two-cyclic-abelian-groups",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-higher-tor-over-the-integers-vanishes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-torsion-free-abelian-groups-are-flat",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-over-a-pid-flat-is-equivalent-to-torsion-free",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-tor-symmetry-over-a-commutative-ring",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-flat-dimension-at-most-n-iff-higher-tor-vanishes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-weak-global-dimension-is-at-most-corresponding-global-dimension",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-semisimple-rings-have-vanishing-positive-tor-and-ext",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-the-integers-have-weak-and-global-dimension-one",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-tor-takes-two-left-modules-over-an-arbitrary-ring",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-two-tor-constructions-are-equal-by-definition",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-flat-modules-have-projective-dimension-zero",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-tor-one-vanishes-only-when-one-module-is-projective",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-tor-is-symmetric-over-every-noncommutative-ring",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-tor-one-of-r-mod-i-and-m-is-always-the-i-torsion-submodule-of-m",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-tor-of-two-cyclic-groups-from-a-two-term-resolution",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-tor-detects-n-torsion",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-flat-nonprojective-module",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-localization-is-flat-and-has-vanishing-positive-tor",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-tor-symmetry-over-a-commutative-ring",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-a-noncommutative-handedness-error-in-tor",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-weak-dimension-and-global-dimension-for-a-field-and-the-integers",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-hom-cochain-differential-squares-to-zero",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-cycle-boundary-short-exact-sequences-for-a-free-complex-over-a-pid",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-submodules-of-free-modules-over-a-pid-are-free",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-universal-coefficient-edge-map-for-homology-is-well-defined",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-universal-coefficient-tor-obstruction-map-for-homology",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-universal-coefficient-theorem-for-homology-over-a-pid",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-homology-universal-coefficient-sequence-splits-nonnaturally",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-the-universal-coefficient-splitting-cannot-in-general-be-chosen-naturally",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-cohomology-universal-coefficient-extension-map",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-universal-coefficient-theorem-for-cohomology-over-a-pid",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-cohomology-with-a-divisible-abelian-coefficient-group-is-hom-of-homology",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-modules-over-a-field-are-projective-flat-and-injective",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-cohomology-over-a-field-is-dual-to-homology-for-finite-dimensional-complexes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-kunneth-cross-product-map-is-well-defined-and-natural",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-kunneth-theorem-for-free-complexes-over-a-pid",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-kunneth-sequence-splits-nonnaturally",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-kunneth-over-a-field",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-kunneth-when-one-homology-family-is-flat",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-euler-characteristic-is-multiplicative-under-the-finite-kunneth-hypotheses",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-the-kunneth-cross-product-is-graded-commutative-under-the-twist-map",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-universal-coefficient-theorem-always-gives-a-natural-direct-sum-decomposition",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-uct-for-homology-has-an-ext-term-and-uct-for-cohomology-a-tor-term",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-kunneth-over-a-pid-is-always-a-tensor-product-isomorphism",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-freeness-of-chain-groups-can-be-dropped-from-the-classical-kunneth-statement",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-kunneth-short-exact-sequence-has-a-canonical-splitting",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-uct-homology-with-z-mod-m-coefficients",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-uct-cohomology-of-a-two-term-free-complex",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-nonzero-tor-correction-in-universal-coefficients",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-kunneth-for-two-cyclic-two-term-complexes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-kunneth-over-a-field",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-a-nonnatural-choice-of-uct-splitting",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-euler-characteristic-of-a-tensor-product-complex",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-invariants-are-hom-from-the-trivial-group-ring-module",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-the-invariants-functor-is-left-exact",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-the-coinvariants-functor-is-right-exact",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-degree-zero-group-cohomology-and-homology-are-invariants-and-coinvariants",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-long-exact-sequence-in-group-cohomology",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-long-exact-sequence-in-group-homology",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-bar-differential-is-group-equivariant-and-squares-to-zero",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-augmented-bar-complex-is-exact",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-bar-complex-is-a-free-resolution-of-the-trivial-module",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-inhomogeneous-group-cochain-differential-squares-to-zero",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-homogeneous-and-inhomogeneous-group-cochains-are-isomorphic-complexes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-bar-cochain-complex-computes-derived-group-cohomology",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-degenerate-bar-chains-form-a-contractible-subcomplex",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-normalized-and-unnormalized-bar-complexes-are-chain-homotopy-equivalent",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-normalized-cochains-compute-group-cohomology",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-induction-is-left-adjoint-and-coinduction-right-adjoint-to-restriction",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-the-group-ring-is-free-over-a-subgroup-ring",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-shapiro-lemma-for-group-cohomology",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-shapiro-lemma-for-group-homology",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-group-cohomological-dimension-is-detected-by-cohomology-vanishing",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-corestriction-is-independent-of-the-coset-representatives",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-restriction-corestriction-composite-is-multiplication-by-the-index",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-positive-group-cohomology-of-the-trivial-group-vanishes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-finite-groups-have-torsion-annihilation-in-positive-cohomology",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-groups-of-finite-integral-cohomological-dimension-are-torsion-free",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-group-cohomology-is-the-derived-functor-of-coinvariants",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-bar-contracting-homotopy-is-group-equivariant",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-h-one-is-defined-here-as-crossed-homomorphisms-modulo-principal-ones",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-h-two-is-defined-here-as-equivalence-classes-of-group-extensions",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-shapiro-lemma-needs-no-distinction-between-induction-and-coinduction",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-group-cohomology-of-the-trivial-group",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-degree-zero-invariants-and-coinvariants",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-first-three-bar-differentials",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-normalizing-an-inhomogeneous-cochain",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-periodic-resolution-for-a-finite-cyclic-group",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-cohomology-of-a-finite-cyclic-group-from-the-periodic-resolution",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-shapiro-lemma-for-the-trivial-subgroup",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-the-underlying-bar-contraction-is-not-equivariant",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-cohomological-dimension-of-the-trivial-group-and-of-an-infinite-cyclic-group",
      "scope": "run",
      "owner": "b"
    }
  ],
  "live_tuples": []
}
```

---

# Step 8 adjudication — group **b**, run `frontier-31a`

You are the group Alpha for batches **8**, **9**, **10**: 5 A/B pair(s), 10 page(s), 233 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-31a-alpha-b-step8-context.json` is what a group Alpha for this group wrote during step 7,
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

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-31a-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 8 | `ext-and-balanced-resolutions` | A | homological-algebra | 365.051 | `delta-functors-and-universality-examples` |
| 8 | `ext-and-balanced-resolutions-examples` | B | homological-algebra | 365.052 | `ext-and-balanced-resolutions` |
| 8 | `yoneda-extensions-and-homological-dimension` | A | homological-algebra | 365.053 | `ext-and-balanced-resolutions-examples` |
| 8 | `yoneda-extensions-and-homological-dimension-examples` | B | homological-algebra | 365.054 | `yoneda-extensions-and-homological-dimension` |
| 9 | `tor-flatness-and-global-dimension` | A | homological-algebra | 365.055 | `yoneda-extensions-and-homological-dimension-examples`, `flatness-and-faithful-flatness` |
| 9 | `tor-flatness-and-global-dimension-examples` | B | homological-algebra | 365.056 | `tor-flatness-and-global-dimension` |
| 9 | `universal-coefficients-and-kunneth-theorems` | A | homological-algebra | 365.057 | `tor-flatness-and-global-dimension-examples` |
| 9 | `universal-coefficients-and-kunneth-theorems-examples` | B | homological-algebra | 365.058 | `universal-coefficients-and-kunneth-theorems` |
| 10 | `group-cohomology-as-a-derived-functor` | A | homological-algebra | 365.059 | `universal-coefficients-and-kunneth-theorems-examples`, `the-group-algebra-and-representations` |
| 10 | `group-cohomology-as-a-derived-functor-examples` | B | homological-algebra | 365.06 | `group-cohomology-as-a-derived-functor` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `ext-and-balanced-resolutions` — Ext and Balanced Resolutions (35 item(s))

- `def-ext-via-an-injective-resolution-of-the-second-variable` · definition — Ext via an injective resolution of the second variable
- `def-ext-via-a-projective-resolution-of-the-first-variable` · definition — Ext via a projective resolution of the first variable
- `prop-ext-zero-is-hom-for-the-injective-construction` · proposition — The degree-zero injective construction of Ext is Hom
- `prop-ext-zero-is-hom-for-the-projective-construction` · proposition — The degree-zero projective construction of Ext is Hom
- `prop-injective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable` · proposition — Injective-resolution Ext has the stated bifunctor variance
- `prop-projective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable` · proposition — Projective-resolution Ext has the stated bifunctor variance
- `prop-positive-ext-vanishes-on-an-injective-second-variable` · proposition — Positive injective-resolution Ext vanishes on an injective second variable
- `prop-positive-ext-vanishes-on-a-projective-first-variable` · proposition — Positive projective-resolution Ext vanishes on a projective first variable
- `def-hom-double-complex-of-a-projective-and-an-injective-resolution` · definition — The Hom double complex of projective and injective resolutions
- `lem-the-two-hom-double-complex-differentials-commute-before-signing` · lemma — The two Hom double-complex differentials commute before signing
- `def-direct-sum-total-complex-on-finite-diagonals` · definition — The direct-sum total complex on finite diagonals
- `lem-acyclic-assembly-by-exact-columns` · lemma — Acyclic assembly by exact columns
- `lem-acyclic-assembly-by-exact-rows` · lemma — Acyclic assembly by exact rows
- `lem-hom-from-a-projective-object-makes-the-injective-resolution-columns-exact` · lemma — Hom from a projective makes injective-resolution columns exact
- `lem-hom-into-an-injective-object-makes-the-projective-resolution-rows-exact` · lemma — Hom into an injective makes projective-resolution rows exact
- `thm-projective-and-injective-constructions-of-ext-are-naturally-isomorphic` · theorem — Projective and injective constructions of Ext are naturally isomorphic
- `lem-the-ext-balance-isomorphism-is-independent-of-resolution-comparison-data` · lemma — The Ext balance isomorphism is independent of resolution comparison data
- `prop-the-ext-balance-isomorphism-is-natural-in-both-variables` · proposition — The Ext balance isomorphism is natural in both variables
- `prop-the-ext-balance-isomorphisms-satisfy-change-of-resolution-cocycle-laws` · proposition — Ext balance isomorphisms satisfy change-of-resolution cocycle laws
- `def-balanced-ext-bifunctor` · definition — The balanced Ext bifunctor
- `thm-long-exact-ext-sequence-in-the-second-variable` · theorem — The long exact Ext sequence in the second variable
- `thm-long-exact-ext-sequence-in-the-first-variable` · theorem — The long exact Ext sequence in the first variable
- `prop-the-two-ext-long-exact-sequences-agree-under-balance` · proposition — The two Ext long exact sequences agree under balance
- `thm-ext-dimension-shifting-in-the-first-variable` · theorem — Ext dimension shifting in the first variable
- `thm-ext-dimension-shifting-in-the-second-variable` · theorem — Ext dimension shifting in the second variable
- `cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable` · corollary — Ext can be computed from any projective resolution of the first variable
- `cor-ext-can-be-computed-from-any-injective-resolution-of-the-second-variable` · corollary — Ext can be computed from any injective resolution of the second variable
- `prop-exact-functors-compatible-with-hom-transport-ext-under-the-stated-adjunction-hypotheses` · proposition — Exact functors compatible with Hom transport Ext under stated adjunction hypotheses
- `lem-ext-one-of-z-mod-n-by-z-is-z-mod-n` · lemma — Ext one of Z modulo n by Z is Z modulo n
- `fs-ext-is-defined-before-choosing-or-supplying-resolutions` · false-statement — FALSE: Ext is defined before choosing or supplying resolutions
- `fs-projective-ext-and-injective-ext-are-equal-by-definition` · false-statement — FALSE: projective and injective Ext are equal by definition
- `fs-ext-is-covariant-in-both-variables` · false-statement — FALSE: Ext is covariant in both variables
- `fs-positive-ext-vanishes-whenever-either-variable-is-injective` · false-statement — FALSE: positive Ext vanishes whenever either variable is injective
- `fs-a-double-complex-totalisation-is-unambiguous-with-infinite-diagonals` · false-statement — FALSE: double-complex totalisation is unambiguous with infinite diagonals
- `fs-balance-of-ext-requires-the-spectral-sequence-pages` · false-statement — FALSE: balance of Ext requires spectral-sequence pages

### `ext-and-balanced-resolutions-examples` — Ext and Balanced Resolutions — Examples (7 item(s))

- `ex-ext-zero-as-hom-in-both-constructions` · example — Ext zero as Hom in both constructions
- `ex-ext-from-a-two-term-projective-resolution` · example — Ext from a two-term projective resolution
- `ex-ext-of-a-cyclic-abelian-group-by-an-abelian-group` · example — Ext of a cyclic abelian group by an abelian group
- `ex-the-hom-double-complex-in-low-bidegrees` · example — The Hom double complex in low bidegrees
- `ex-an-ext-dimension-shift` · example — An Ext dimension shift
- `cex-positive-ext-does-not-vanish-for-an-injective-first-variable` · counterexample — Positive Ext need not vanish for an injective first variable
- `ex-naturality-of-the-balance-isomorphism` · example — Naturality of the balance isomorphism

### `yoneda-extensions-and-homological-dimension` — Yoneda Extensions and Homological Dimension (44 item(s))

- `def-extension-of-an-object-by-an-object-in-an-abelian-category` · definition — An extension of an object by an object in an abelian category
- `def-equivalence-of-extensions` · definition — Equivalence of extensions
- `prop-a-morphism-of-extensions-is-an-isomorphism` · proposition — A morphism of extensions is an isomorphism
- `prop-equivalence-of-extensions-is-an-equivalence-relation` · proposition — Equivalence of extensions is an equivalence relation
- `def-split-extension-class` · definition — The split extension class
- `def-pullback-and-pushout-of-an-extension` · definition — Pullback and pushout of an extension
- `lem-pullback-and-pushout-descend-to-extension-classes` · lemma — Pullback and pushout descend to extension classes
- `def-baer-sum-of-extension-classes` · definition — The Baer sum of extension classes
- `lem-baer-sum-of-short-exact-sequence-classes-is-independent-of-representatives` · lemma — The Baer sum is independent of representatives
- `thm-baer-sum-makes-extension-classes-an-abelian-group` · theorem — Baer sum makes extension classes an abelian group
- `prop-extension-classes-are-contravariant-in-the-quotient-and-covariant-in-the-subobject` · proposition — Extension classes are contravariant in the quotient and covariant in the subobject
- `def-class-of-an-extension-in-derived-ext-one` · definition — The derived Ext-one class of an extension
- `lem-equivalent-extensions-have-the-same-ext-class` · lemma — Equivalent extensions have the same Ext class
- `lem-every-ext-one-class-is-represented-by-an-extension` · lemma — Every Ext-one class is represented by an extension
- `lem-two-extensions-with-the-same-ext-class-are-equivalent` · lemma — Two extensions with the same Ext class are equivalent
- `thm-yoneda-ext-one-is-naturally-isomorphic-to-derived-ext-one` · theorem — Yoneda Ext one is naturally isomorphic to derived Ext one
- `cor-the-class-of-extensions-is-a-set-whenever-derived-ext-one-is-a-set` · corollary — Extension classes form a set whenever derived Ext one does
- `def-n-fold-yoneda-extension` · definition — An n-fold Yoneda extension
- `def-equivalence-of-n-fold-extensions` · definition — Equivalence of n-fold extensions
- `def-yoneda-splice-product` · definition — The Yoneda splice product
- `lem-yoneda-splicing-is-well-defined-on-equivalence-classes` · lemma — Yoneda splicing is well-defined on equivalence classes
- `thm-yoneda-product-is-associative-and-unital` · theorem — The Yoneda product is associative and unital
- `thm-higher-yoneda-ext-agrees-with-derived-ext` · theorem — Higher Yoneda Ext agrees with derived Ext
- `prop-the-yoneda-product-agrees-with-the-derived-ext-composition-product` · proposition — The Yoneda product agrees with derived Ext composition
- `def-graded-ext-algebra-of-an-object` · definition — The graded Ext algebra of an object
- `def-projective-dimension-of-an-object` · definition — Projective dimension of an object
- `def-injective-dimension-of-an-object` · definition — Injective dimension of an object
- `thm-projective-dimension-at-most-n-iff-the-nth-syzygy-is-projective` · theorem — Projective dimension at most n iff the nth syzygy is projective
- `thm-projective-dimension-at-most-n-iff-higher-ext-vanishes` · theorem — Projective dimension at most n iff higher Ext vanishes
- `thm-injective-dimension-at-most-n-iff-higher-ext-vanishes` · theorem — Injective dimension at most n iff higher Ext vanishes
- `cor-projective-dimension-is-the-largest-nondegenerate-ext-degree-when-finite` · corollary — Finite projective dimension is the largest nonzero Ext degree
- `def-left-and-right-global-dimension-of-a-ring` · definition — Left and right global dimension of a ring
- `def-global-dimension-of-an-abelian-category` · definition — Global dimension of an abelian category
- `thm-global-dimension-is-the-supremum-of-nondegenerate-ext-degrees` · theorem — Global dimension is the supremum of nonzero Ext degrees
- `prop-global-dimension-zero-characterises-semisimple-module-categories` · proposition — Global dimension zero characterises semisimple module categories
- `prop-hereditary-rings-have-global-dimension-at-most-one` · proposition — Hereditary rings have global dimension at most one
- `lem-subgroups-of-free-abelian-groups-are-free` · lemma — Subgroups of free abelian groups are free
- `thm-the-integers-have-global-dimension-one` · theorem — The integers have global dimension one
- `fs-an-extension-of-m-by-n-represents-ext-one-of-n-by-m` · false-statement — FALSE: an extension of M by N represents Ext one of N by M
- `fs-baer-sum-is-formed-by-taking-only-the-direct-sum-of-middle-objects` · false-statement — FALSE: Baer sum only takes the direct sum of middle objects
- `fs-equivalence-classes-of-extensions-automatically-form-a-set` · false-statement — FALSE: extension classes automatically form a set
- `fs-the-yoneda-product-is-graded-commutative-for-every-abelian-category` · false-statement — FALSE: the Yoneda product is graded commutative for every abelian category
- `fs-projective-dimension-is-the-length-of-any-projective-resolution` · false-statement — FALSE: projective dimension is the length of any projective resolution
- `fs-left-and-right-global-dimension-are-equal-by-definition` · false-statement — FALSE: left and right global dimensions are equal by definition

### `yoneda-extensions-and-homological-dimension-examples` — Yoneda Extensions and Homological Dimension — Examples (8 item(s))

- `ex-the-split-extension-as-the-zero-baer-class` · example — The split extension as the zero Baer class
- `ex-baer-sum-of-two-extensions-of-cyclic-groups` · example — Baer sum of two extensions of cyclic groups
- `ex-ext-one-of-z-mod-n-by-an-abelian-group-as-extension-classes` · example — Ext one of Z modulo n by an abelian group as extension classes
- `ex-splicing-two-short-exact-sequences` · example — Splicing two short exact sequences
- `ex-a-noncommutative-yoneda-product` · example — A noncommutative Yoneda product
- `ex-projective-dimension-of-a-cyclic-abelian-group` · example — Projective dimension of a cyclic abelian group
- `ex-global-dimension-of-a-field-and-of-the-integers` · example — Global dimension of a field and of the integers
- `cex-two-equivalent-higher-extensions-with-no-single-isomorphism-of-middle-terms` · counterexample — Equivalent higher extensions need not have one middle-term isomorphism

### `tor-flatness-and-global-dimension` — Tor Flatness and Global Dimension (41 item(s))

- `def-tensor-product-total-complex-of-chain-complexes` · definition — The tensor product of a right and a left chain complex is totalized on finite diagonals with the Koszul differential
- `lem-the-tensor-total-differential-is-well-defined-and-squares-to-zero` · lemma — The tensor-total differential is balanced, well defined, and squares to zero
- `def-tor-by-resolving-the-left-module` · definition — Tor from a projective resolution of the left module
- `def-tor-by-resolving-the-right-module` · definition — Tor from a projective resolution of the right module
- `prop-tor-zero-is-the-tensor-product-in-either-construction` · proposition — Degree-zero Tor is the tensor product in either construction
- `prop-each-tor-construction-is-covariant-in-both-variables` · proposition — Each resolution-defined Tor construction is covariant in both variables
- `prop-positive-tor-vanishes-when-the-resolved-variable-is-projective` · proposition — Positive Tor vanishes when the resolved variable is projective
- `def-tensor-double-complex-of-two-projective-resolutions` · definition — The first-quadrant tensor double complex of two projective resolutions
- `def-left-and-right-flat-modules-over-an-arbitrary-ring` · definition — Left and right flat modules over an arbitrary ring
- `lem-projective-modules-are-flat-over-an-arbitrary-ring` · lemma — Projective left and right modules are flat over an arbitrary ring
- `rem-projective-modules-are-flat-is-supplied-by-mod-three` · remark — The earlier flatness page is the commutative specialization; this page records the arbitrary-handed version used in balance
- `lem-the-rows-of-the-augmented-tensor-double-complex-are-exact` · lemma — The augmented rows of the tensor double complex are exact
- `lem-the-columns-of-the-augmented-tensor-double-complex-are-exact` · lemma — The augmented columns of the tensor double complex are exact
- `thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic` · theorem — The left and right projective constructions of Tor are naturally isomorphic
- `prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions` · proposition — The Tor balance isomorphism is natural and coherent under a change of resolutions
- `def-balanced-tor-bifunctor` · definition — The balanced Tor bifunctor
- `thm-long-exact-tor-sequence-in-the-left-module-variable` · theorem — The long exact Tor sequence in the left-module variable
- `thm-long-exact-tor-sequence-in-the-right-module-variable` · theorem — The long exact Tor sequence in the right-module variable
- `prop-tor-dimension-shifting` · proposition — Tor admits dimension shifting in either variable
- `thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes` · theorem — A left module is flat exactly when Tor one against every right module vanishes
- `thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes` · theorem — A right module is flat exactly when Tor one against every left module vanishes
- `cor-a-short-exact-sequence-stays-exact-after-tensoring-exactly-when-its-tor-boundary-obstruction-vanishes` · corollary — The Tor boundary is exactly the obstruction to left exactness after tensoring a fixed short exact sequence
- `thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion` · theorem — Tor one of a cyclic abelian group detects n-torsion
- `thm-tor-of-two-cyclic-abelian-groups` · theorem — Tor one of two cyclic abelian groups is cyclic of gcd order
- `thm-higher-tor-over-the-integers-vanishes` · theorem — Higher Tor over the integers vanishes
- `prop-torsion-free-abelian-groups-are-flat` · proposition — Torsion-free abelian groups are flat
- `thm-over-a-pid-flat-is-equivalent-to-torsion-free` · theorem — Over a principal ideal domain flatness is equivalent to torsion-freeness
- `thm-tor-symmetry-over-a-commutative-ring` · theorem — Tor is symmetric over a commutative ring
- `def-flat-dimension-of-a-module` · definition — The flat dimension of a module
- `thm-flat-dimension-at-most-n-iff-higher-tor-vanishes` · theorem — Flat dimension at most n is equivalent to the prescribed higher Tor vanishing
- `def-left-and-right-weak-global-dimension` · definition — Left and right weak global dimension
- `prop-weak-global-dimension-is-at-most-corresponding-global-dimension` · proposition — Weak global dimension is at most the corresponding global dimension
- `thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric` · theorem — Weak global dimension is Tor-detected and left-right symmetric
- `prop-semisimple-rings-have-vanishing-positive-tor-and-ext` · proposition — Semisimple rings have vanishing positive Tor and Ext
- `prop-the-integers-have-weak-and-global-dimension-one` · proposition — The integers have weak and global dimension one
- `fs-tor-takes-two-left-modules-over-an-arbitrary-ring` · false-statement — Tor does not take two left modules over an arbitrary ring without extra bimodule structure
- `fs-the-two-tor-constructions-are-equal-by-definition` · false-statement — The two resolution constructions of Tor are not equal by definition
- `fs-flat-modules-have-projective-dimension-zero` · false-statement — Flat modules need not have projective dimension zero
- `fs-tor-one-vanishes-only-when-one-module-is-projective` · false-statement — Vanishing Tor one does not require a projective factor
- `fs-tor-is-symmetric-over-every-noncommutative-ring` · false-statement — Tor is not symmetric as a typed expression over every noncommutative ring
- `fs-tor-one-of-r-mod-i-and-m-is-always-the-i-torsion-submodule-of-m` · false-statement — Tor one of R modulo I and M is not always the I-torsion submodule of M

### `tor-flatness-and-global-dimension-examples` — Tor Flatness and Global Dimension — Examples (8 item(s))

- `ex-tor-of-two-cyclic-groups-from-a-two-term-resolution` · example — Tor of two cyclic groups from a two-term resolution
- `ex-tor-detects-n-torsion` · example — Tor detects n-torsion
- `ex-a-flat-nonprojective-module` · example — A flat nonprojective module
- `ex-localization-is-flat-and-has-vanishing-positive-tor` · example — Localization is flat and has vanishing positive Tor
- `ex-the-tensor-double-complex-in-low-degrees` · example — The tensor double complex in low degrees
- `ex-tor-symmetry-over-a-commutative-ring` · example — Tor symmetry over a commutative ring
- `cex-a-noncommutative-handedness-error-in-tor` · counterexample — A noncommutative handedness error in Tor
- `ex-weak-dimension-and-global-dimension-for-a-field-and-the-integers` · example — Weak and global dimension for a field and the integers

### `universal-coefficients-and-kunneth-theorems` — Universal Coefficients and Kunneth Theorems (32 item(s))

- `def-cochain-complex-hom-from-a-chain-complex` · definition — The Hom cochain complex of a chain complex
- `lem-the-hom-cochain-differential-squares-to-zero` · lemma — The Hom cochain differential squares to zero
- `def-chain-complex-with-coefficients-by-tensoring` · definition — A chain complex with coefficients obtained by tensoring
- `lem-cycle-boundary-short-exact-sequences-for-a-free-complex-over-a-pid` · lemma — The cycle-boundary short exact sequences for a free complex over a PID
- `thm-submodules-of-free-modules-over-a-pid-are-free` · theorem — A submodule of an arbitrary-rank free module over a PID is free
- `lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free` · lemma — Boundaries and cycles in a free complex over a PID are free
- `lem-the-universal-coefficient-edge-map-for-homology-is-well-defined` · lemma — The homological universal-coefficient edge map is well defined
- `lem-the-universal-coefficient-tor-obstruction-map-for-homology` · lemma — The homological universal-coefficient Tor obstruction map
- `thm-universal-coefficient-theorem-for-homology-over-a-pid` · theorem — The universal coefficient theorem for homology over a PID
- `thm-the-homology-universal-coefficient-sequence-splits-nonnaturally` · theorem — The homology universal-coefficient sequence splits nonnaturally
- `cex-the-universal-coefficient-splitting-cannot-in-general-be-chosen-naturally` · counterexample — A universal-coefficient splitting cannot in general be chosen naturally
- `def-evaluation-map-from-cohomology-to-hom-of-homology` · definition — The evaluation map from cohomology to Hom of homology
- `lem-the-cohomology-universal-coefficient-extension-map` · lemma — The cohomological universal-coefficient extension map
- `thm-universal-coefficient-theorem-for-cohomology-over-a-pid` · theorem — The universal coefficient theorem for cohomology over a PID
- `thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally` · theorem — The cohomology universal-coefficient sequence splits nonnaturally
- `cor-cohomology-with-a-divisible-abelian-coefficient-group-is-hom-of-homology` · corollary — Cohomology with a divisible abelian coefficient group is Hom of homology
- `prop-modules-over-a-field-are-projective-flat-and-injective` · proposition — Modules over a field are projective, flat, and injective
- `cor-cohomology-over-a-field-is-dual-to-homology-for-finite-dimensional-complexes` · corollary — Cohomology over a field is dual to homology for finite-dimensional complexes
- `def-homology-cross-product-for-tensor-complexes` · definition — The homology cross product for tensor complexes
- `lem-the-kunneth-cross-product-map-is-well-defined-and-natural` · lemma — The Kunneth cross-product map is well defined and natural
- `lem-the-kunneth-tor-map` · lemma — The Kunneth Tor map
- `thm-kunneth-theorem-for-free-complexes-over-a-pid` · theorem — The Kunneth theorem for free complexes over a PID
- `thm-the-kunneth-sequence-splits-nonnaturally` · theorem — The Kunneth sequence splits nonnaturally
- `cor-kunneth-over-a-field` · corollary — Kunneth over a field
- `cor-kunneth-when-one-homology-family-is-flat` · corollary — Kunneth when one homology family is flat
- `prop-euler-characteristic-is-multiplicative-under-the-finite-kunneth-hypotheses` · proposition — Euler characteristic is multiplicative under the finite Kunneth hypotheses
- `prop-the-kunneth-cross-product-is-graded-commutative-under-the-twist-map` · proposition — The Kunneth cross product is graded commutative under the twist map
- `fs-the-universal-coefficient-theorem-always-gives-a-natural-direct-sum-decomposition` · false-statement — The universal coefficient theorem does not always give a natural direct-sum decomposition
- `fs-uct-for-homology-has-an-ext-term-and-uct-for-cohomology-a-tor-term` · false-statement — The homological and cohomological UCT correction terms are not reversed
- `fs-kunneth-over-a-pid-is-always-a-tensor-product-isomorphism` · false-statement — Kunneth over a PID is not always a tensor-product isomorphism
- `fs-freeness-of-chain-groups-can-be-dropped-from-the-classical-kunneth-statement` · false-statement — Freeness of chain groups cannot simply be dropped from the classical Kunneth statement
- `fs-the-kunneth-short-exact-sequence-has-a-canonical-splitting` · false-statement — The Kunneth short exact sequence has no generally canonical splitting

### `universal-coefficients-and-kunneth-theorems-examples` — Universal Coefficients and Kunneth Theorems — Examples (7 item(s))

- `ex-uct-homology-with-z-mod-m-coefficients` · example — Universal-coefficient homology with Z modulo m coefficients
- `ex-uct-cohomology-of-a-two-term-free-complex` · example — Universal-coefficient cohomology of a two-term free complex
- `ex-a-nonzero-tor-correction-in-universal-coefficients` · example — A nonzero Tor correction in universal coefficients
- `ex-kunneth-for-two-cyclic-two-term-complexes` · example — Kunneth for two cyclic two-term complexes
- `ex-kunneth-over-a-field` · example — Kunneth over a field
- `cex-a-nonnatural-choice-of-uct-splitting` · counterexample — A nonnatural choice of universal-coefficient splitting
- `ex-euler-characteristic-of-a-tensor-product-complex` · example — Euler characteristic of a tensor-product complex

### `group-cohomology-as-a-derived-functor` — Group Cohomology as a Derived Functor (42 item(s))

- `def-integral-group-ring-module-and-trivial-module-convention` · definition — Integral group-module and trivial-module convention
- `def-invariants-functor-of-a-group-module` · definition — The invariants functor of a group module
- `thm-invariants-are-hom-from-the-trivial-group-ring-module` · theorem — Invariants are Hom from the trivial group-ring module
- `prop-the-invariants-functor-is-left-exact` · proposition — The invariants functor is left exact
- `def-group-cohomology-as-a-derived-functor` · definition — Group cohomology as the right derived invariants functor
- `def-coinvariants-functor-of-a-group-module` · definition — The coinvariants functor of a group module
- `prop-the-coinvariants-functor-is-right-exact` · proposition — The coinvariants functor is right exact
- `def-group-homology-as-a-derived-functor` · definition — Group homology as the left derived coinvariants functor
- `prop-degree-zero-group-cohomology-and-homology-are-invariants-and-coinvariants` · proposition — Degree-zero group cohomology and homology are invariants and coinvariants
- `thm-long-exact-sequence-in-group-cohomology` · theorem — Long exact sequence in group cohomology
- `thm-long-exact-sequence-in-group-homology` · theorem — Long exact sequence in group homology
- `def-unnormalized-homogeneous-bar-resolution` · definition — Unnormalized homogeneous bar resolution
- `lem-the-bar-differential-is-group-equivariant-and-squares-to-zero` · lemma — The bar differential is group equivariant and squares to zero
- `def-bar-augmentation` · definition — Bar augmentation
- `lem-the-augmented-bar-complex-is-exact` · lemma — The augmented bar complex is exact
- `thm-the-bar-complex-is-a-free-resolution-of-the-trivial-module` · theorem — The bar complex is a free resolution of the trivial module
- `def-inhomogeneous-group-cochains` · definition — Inhomogeneous group cochains
- `lem-the-inhomogeneous-group-cochain-differential-squares-to-zero` · lemma — The inhomogeneous group-cochain differential squares to zero
- `thm-homogeneous-and-inhomogeneous-group-cochains-are-isomorphic-complexes` · theorem — Homogeneous and inhomogeneous group cochains are isomorphic complexes
- `thm-the-bar-cochain-complex-computes-derived-group-cohomology` · theorem — The bar cochain complex computes derived group cohomology
- `def-normalized-bar-resolution` · definition — Normalized bar resolution
- `lem-degenerate-bar-chains-form-a-contractible-subcomplex` · lemma — Degenerate bar chains form a contractible subcomplex
- `thm-normalized-and-unnormalized-bar-complexes-are-chain-homotopy-equivalent` · theorem — Normalized and unnormalized bar complexes are chain-homotopy equivalent
- `cor-normalized-cochains-compute-group-cohomology` · corollary — Normalized cochains compute group cohomology
- `def-restriction-induction-and-coinduction-for-group-modules` · definition — Restriction, induction, and coinduction for group modules
- `thm-induction-is-left-adjoint-and-coinduction-right-adjoint-to-restriction` · theorem — Induction is left adjoint and coinduction right adjoint to restriction
- `lem-the-group-ring-is-free-over-a-subgroup-ring` · lemma — The group ring is free over a subgroup ring
- `thm-shapiro-lemma-for-group-cohomology` · theorem — Shapiro lemma for group cohomology
- `thm-shapiro-lemma-for-group-homology` · theorem — Shapiro lemma for group homology
- `def-cohomological-dimension-of-a-group` · definition — Cohomological dimension of a group
- `thm-group-cohomological-dimension-is-detected-by-cohomology-vanishing` · theorem — Group cohomological dimension is detected by cohomology vanishing
- `def-restriction-and-corestriction-on-group-cohomology` · definition — Restriction and corestriction on group cohomology
- `lem-corestriction-is-independent-of-the-coset-representatives` · lemma — Corestriction is independent of the coset representatives
- `thm-restriction-corestriction-composite-is-multiplication-by-the-index` · theorem — Restriction--corestriction composite is multiplication by the index
- `lem-positive-group-cohomology-of-the-trivial-group-vanishes` · lemma — Positive group cohomology of the trivial group vanishes
- `prop-finite-groups-have-torsion-annihilation-in-positive-cohomology` · proposition — Finite groups have torsion annihilation in positive cohomology
- `thm-groups-of-finite-integral-cohomological-dimension-are-torsion-free` · theorem — Groups of finite integral cohomological dimension are torsion free
- `fs-group-cohomology-is-the-derived-functor-of-coinvariants` · false-statement — FALSE: group cohomology is the derived functor of coinvariants
- `fs-the-bar-contracting-homotopy-is-group-equivariant` · false-statement — FALSE: the bar contracting homotopy is group equivariant
- `fs-h-one-is-defined-here-as-crossed-homomorphisms-modulo-principal-ones` · false-statement — FALSE: H^1 is defined here as crossed homomorphisms modulo principal ones
- `fs-h-two-is-defined-here-as-equivalence-classes-of-group-extensions` · false-statement — FALSE: H^2 is defined here as equivalence classes of group extensions
- `fs-shapiro-lemma-needs-no-distinction-between-induction-and-coinduction` · false-statement — FALSE: Shapiro lemma needs no distinction between induction and coinduction

### `group-cohomology-as-a-derived-functor-examples` — Group Cohomology as a Derived Functor — Examples (9 item(s))

- `ex-group-cohomology-of-the-trivial-group` · example — Group cohomology of the trivial group
- `ex-degree-zero-invariants-and-coinvariants` · example — Degree-zero invariants and coinvariants
- `ex-the-first-three-bar-differentials` · example — The first three bar differentials
- `ex-normalizing-an-inhomogeneous-cochain` · example — Normalizing an inhomogeneous cochain
- `ex-a-periodic-resolution-for-a-finite-cyclic-group` · example — A periodic resolution for a finite cyclic group
- `ex-cohomology-of-a-finite-cyclic-group-from-the-periodic-resolution` · example — Cohomology of a finite cyclic group from the periodic resolution
- `ex-shapiro-lemma-for-the-trivial-subgroup` · example — Shapiro lemma for the trivial subgroup
- `cex-the-underlying-bar-contraction-is-not-equivariant` · counterexample — The underlying bar contraction is not equivariant
- `ex-cohomological-dimension-of-the-trivial-group-and-of-an-infinite-cyclic-group` · example — Cohomological dimension of the trivial and infinite cyclic groups

## Your seams

Another group's pages depend on yours:

- `schur-multipliers-and-universal-central-extensions` (group a) requires your `group-cohomology-as-a-derived-functor-examples`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-7 reader warnings

3 warning(s) a Step-7 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-eedd76f6e3fe0a8936542f98 · `def-evaluation-map-from-cohomology-to-hom-of-homology`** (from group b, would-be-fatal) — Its sole Definition says only that it introduces the standard construction under hypotheses stated below; it gives neither source, target, nor formula. The later cohomological UCT theorem invokes this evaluation map, so the definition is not a mathematical definition as written.
- **s8a-c05dbe583155ecd391aa8052 · `thm-the-integers-have-global-dimension-one`** (from group b, would-be-fatal) — The statement and Given omit the Axiom of Choice, but proof step 1.1 invokes lem-subgroups-of-free-abelian-groups-are-free, whose statement explicitly assumes Choice, to make a free presentation into a length-one projective resolution. The cited hypothesis is silently dropped.
- **s8a-de638321040ad5d9ffdb051f · `prop-modules-over-a-field-are-projective-flat-and-injective`** (from group b, would-be-fatal) — The statement says every module over a field is free, while the proof assumes a basis. Its direct dependency cor-every-vector-space-has-a-basis explicitly assumes the Axiom of Choice; neither the statement nor Given carries that assumption.

Append one owning-group disposition per warning to `research/frontier-31a-step8-alert-decisions.jsonl`.
A Step-7 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-8 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-31a-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — frozen integrity close, `frontier-31a`

The final judge boundary is closed. The generated repair envelope above is
authoritative: review only its exact `assigned_items` and `live_tuples`, with
their explicit run or published scope; use a focused check when supported.

Do not alter mathematical items, start a judge cycle, or change another group's
records. You may correct a contract or receipt only when it exactly describes
the current item and cannot conceal a defect. A mathematical correction is a
blocker for the supervising session.

Return the gate, ids, non-item records changed, focused checks, and blockers.


## Mathematical context continuity

Read exact task paths first. Search current owned artifacts before historical runs;
exclude dispatch logs from routine content searches. Fetch complete relevant source
sections and dependency statements, using bounded output chunks. A truncated result
is not evidence of absence; continue reading until the required argument is complete.
Do not dump entire ledgers, source books, or repository-wide search results into context.

For writing roles, after each completed item update the task-authorized notes or report with the
current item IDs, exact claim and conventions, source paths/URLs and locators,
dependency IDs, decisions, validation results, unresolved obligations, and next action.
Automatic compaction can occur mid-proof. After compaction or handoff, reread the
current item, relevant dependency statements, source passages, and these obligations
before continuing a proof or repair. A summary is a navigation aid, never a substitute
for mathematical evidence. If a hypothesis or source qualification cannot be
recovered, record the blocker rather than infer it. Preserve all independent reviews
and exact-hash gates. Never mark an unfinished obligation complete to save context.
Checkpoint only in the task-authorized notes/report; do not create transcripts or alter other owners’ artifacts.
