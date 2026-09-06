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
label: step8-close-a-3

# Exact Step-8 repair envelope — 8-close, round 3

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
  "round": 3,
  "mode": "close",
  "group": "a",
  "full_evidence": "research/frontier-31a-8-close-repair-evidence-3-97f3aa8bfdf3712b82f11f1def60ecd78e48205e84a05eceb4c41cff7be555bd.json",
  "full_evidence_sha256": "97f3aa8bfdf3712b82f11f1def60ecd78e48205e84a05eceb4c41cff7be555bd",
  "failures": [
    {
      "id": "proof-contract",
      "stage": "8-close",
      "why": "ERROR citation-quote-mismatch [thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two]: L2 quote does not occur in thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally's Statement",
      "output": "proof-contract: 1 error(s), 0 warning(s), 704/704 item(s) checked\nERROR citation-quote-mismatch [thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two]: L2 quote does not occur in thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally's Statement\n",
      "named_ids": [
        "thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two"
      ]
    },
    {
      "id": "boundary-audit",
      "stage": "8-close",
      "why": "Every line above is a candidate for a human read, not a verdict.",
      "output": "boundary-audit: 5632 rows over 1 contract file(s); 4631 marked not_applicable\n\nTEMPLATE REUSE — 7 cluster(s) at or above 3 members.\nA rationale shared across many items is not a determination about any of them.\n\n  5 rows · axes: degenerate, iff-forward, iff-reverse, nonempty-choice, zero\n    \"Full-resolution calculation in 1.1; right exactness and H0 in 1.2; horseshoe kernel and converse in 2.1–3.1. Zero tensor functors are exact. DC and supplied res…\"\n    items: thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes\n\n  5 rows · axes: degenerate, iff-forward, iff-reverse, nonempty-choice, zero\n    \"Full-resolution forward argument in 1.1, natural Tor0 and cokernel calculation in 1.2, left-variable LES and converse in 2.1–3.1. Zero tensor functors are exact…\"\n    items: thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes\n\n  5 rows · axes: degenerate, empty, endpoints, iff-forward, iff-reverse\n    \"This explicit positive-integer finite-complex calculation has no additional empty branch.\"\n    items: ex-the-tensor-double-complex-in-low-degrees\n\n  3 rows · axes: endpoints, one, zero\n    \"All eight zero/positive degree patterns are checked in 1.2 and 2.1–2.3; the short-extension pullback/pushout case uses the short five lemma; degree-zero composi…\"\n    items: thm-yoneda-product-is-associative-and-unital\n\n  3 rows · axes: degenerate, nonempty-choice, zero\n    \"The finite elimination in 2.1–2.2 handles degree zero and zero complexes; step 4.1 uses DC for comparisons and explicit signed total homotopies for independence…\"\n    items: thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic\n\n  3 rows · axes: degenerate, nonempty-choice, zero\n    \"Step 1.1 licenses the projection using AC and projectivity; sigma(f)=[f q pi] in 2.1–3.1 is linear and a section, including G=0, C=0 and zero cycle/boundary gro…\"\n    items: thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally\n\n  3 rows · axes: degenerate, empty, zero\n    \"Step 5.1 includes empty sums and zero modules; the LES and free kernel computation remain valid.\"\n    items: lem-the-kunneth-tor-map\n\nCONTRADICTED DISPOSITIONS — none found by the three detectors.\n\nUPHELD BY REVIEW — 7 row(s) an Alpha read and kept, with reasons on the record:\n  cor-countable-independent-copies-exist  [empty]  by alpha-contract-audit-8: The independent family is a sequence indexed by the natural numbers, so its index set is fixed and nonempty; no empty-fa\n  cor-holomorphic-functional-calculus-in-the-wiener-algebra  [zero]  by alpha-contract-audit-8: The denominator flagged in step 2.1 is the fixed complex constant 2 pi i, which is nonzero; no variable denominator appr\n  lem-primitive-gauss-sum-twist  [empty]  by alpha-contract-audit-8: A Dirichlet character modulus is positive, so the residue classes modulo q form a nonempty finite set; the displayed sum\n  thm-dirac-comb-is-fourier-invariant  [empty]  by alpha-contract-audit-8: Both displayed sums are indexed by the fixed nonempty set of integers; the summability issue is convergence, not an empt\n  thm-twisted-poisson-summation  [empty]  by alpha-contract-audit-8: The displayed sums are indexed by the fixed nonempty set of integers, so the detector sees aggregate notation without an\n  thm-gap-and-union-theorems-for-complexity-bounds  [empty]  by alpha-contract-audit-8: The displayed union is indexed by all natural numbers, a fixed nonempty index set; the detector sees a union symbol but \n  lem-polynomial-time-computations-have-logspace-uniform-circuits  [empty]  by alpha-contract-audit-8: The circuit family is indexed by input lengths and the proof constructs each indexed circuit; the word family does not i\n\nEvery line above is a candidate for a human read, not a verdict.\n",
      "named_ids": []
    },
    {
      "id": "citation-fidelity",
      "stage": "8-close",
      "why": "Every line above is a candidate for a human read, not a verdict.",
      "output": "citation-fidelity: 460 citation(s) over 704 authored item(s)\n\nQUOTE NOT FOUND IN THE CITED ITEM — 1.\nThe contract asserts a verbatim quote. These do not appear in the source.\n\n  thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two  [L2] -> thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally (searched: Statement)\n    quote: \"the cohomological UCT sequence splits after choices of complements, but no natural splitting is claimed\"\n\nWIDENING CANDIDATES — none found by the three detectors.\n\nEvery line above is a candidate for a human read, not a verdict.\n",
      "named_ids": []
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two",
      "scope": "run",
      "owner": "a"
    }
  ],
  "assigned_items": [
    {
      "id": "thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two",
      "scope": "run",
      "owner": "a"
    }
  ],
  "live_tuples": []
}
```

---

# Step 8 adjudication — group **a**, run `frontier-31a`

You are the group Alpha for batches **1**, **18**, **19**: 4 A/B pair(s), 8 page(s), 121 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-31a-alpha-a-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
| 1 | `the-finite-simple-group-classification-landscape` | A | group-theory | 150.005 | `brauer-characters-and-decomposition-matrices-examples`, `socles-and-the-onan-scott-landscape` |
| 1 | `the-finite-simple-group-classification-landscape-examples` | B | group-theory | 150.006 | `the-finite-simple-group-classification-landscape` |
| 1 | `schur-multipliers-and-universal-central-extensions` | A | group-theory | 365.075 | `second-cohomology-and-abelian-kernel-extensions-examples`, `group-cohomology-as-a-derived-functor-examples` |
| 1 | `schur-multipliers-and-universal-central-extensions-examples` | B | group-theory | 365.076 | `schur-multipliers-and-universal-central-extensions` |
| 18 | `verma-modules-and-shapovalov-forms` | A | lie-theory | 510.003 | `harish-chandra-isomorphism-casimir-and-central-characters-examples` |
| 18 | `verma-modules-and-shapovalov-forms-examples` | B | lie-theory | 510.004 | `verma-modules-and-shapovalov-forms` |
| 19 | `brauer-induction-and-elementary-subgroups` | A | representation-theory | 510.033 | `artin-induction-and-rational-characters-examples` |
| 19 | `brauer-induction-and-elementary-subgroups-examples` | B | representation-theory | 510.034 | `brauer-induction-and-elementary-subgroups` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `the-finite-simple-group-classification-landscape` — The Finite Simple Group Classification Landscape (24 item(s))

- `rem-simple-groups-as-composition-factors` · remark — Simple groups as composition factors
- `def-quasisimple-group-component-and-layer` · definition — Quasisimple groups, components, and the layer
- `lem-distinct-components-commute` · lemma — Distinct components commute
- `def-generalized-fitting-subgroup` · definition — The generalized Fitting subgroup
- `thm-generalized-fitting-subgroup-contains-its-centralizer` · theorem — The generalized Fitting subgroup contains its centralizer
- `def-p-local-subgroup` · definition — p-local subgroup
- `rem-cyclic-and-alternating-simple-families` · remark — Cyclic and alternating simple families
- `rem-finite-simple-groups-of-lie-type-as-named-families` · remark — Finite simple groups of Lie type as named families
- `rem-the-twenty-six-sporadic-simple-groups` · remark — The twenty-six sporadic simple groups
- `rem-classification-of-finite-simple-groups` · remark — Classification of finite simple groups
- `rem-low-rank-coincidences-and-duplicate-family-names` · remark — Low-rank coincidences and duplicate names
- `rem-history-of-the-first-generation-classification` · remark — History of the first-generation classification
- `rem-the-quasithin-gap-and-its-repair` · remark — The quasithin gap and its repair
- `rem-status-of-the-second-generation-proof` · remark — Status of the second-generation proof
- `rem-feit-thompson-odd-order-theorem` · remark — Feit–Thompson odd-order theorem
- `rem-schreier-conjecture-as-a-cfsg-consequence` · remark — Schreier’s conjecture as a CFSG consequence
- `rem-two-generation-of-finite-simple-groups` · remark — Two-generation of finite simple groups
- `rem-what-the-library-does-and-does-not-prove-about-cfsg` · remark — What the library proves and does not prove about CFSG
- `fs-cfsg-says-every-finite-group-is-simple` · false-statement — CFSG says every finite group is simple
- `fs-cfsg-composition-factors-determine-the-finite-group-up-to-isomorphism` · false-statement — Composition factors determine the finite group
- `fs-all-finite-simple-groups-are-alternating-or-cyclic` · false-statement — All finite simple groups are alternating or cyclic
- `fs-the-library-proves-the-classification-of-finite-simple-groups` · false-statement — The library proves CFSG
- `fs-the-second-generation-cfsg-proof-is-complete-as-of-2026` · false-statement — The second-generation CFSG proof is complete as of 2026
- `fs-groups-of-lie-type-are-developed-here-through-lie-algebra-structure` · false-statement — Lie type is developed here through Lie algebras

### `the-finite-simple-group-classification-landscape-examples` — The Finite Simple Group Classification Landscape — Examples (6 item(s))

- `ex-cyclic-simple-groups-of-prime-order` · example — Cyclic simple groups of prime order
- `ex-a-five-as-the-smallest-nonabelian-simple-group` · example — A5 as the smallest nonabelian simple group
- `ex-psl-two-seven-and-a-low-rank-coincidence` · example — PSL(2,7) and a low-rank family entry
- `ex-a-suzuki-group-family-entry` · example — A Suzuki group family entry
- `ex-the-mathieu-groups-among-the-sporadics` · example — The Mathieu groups among the sporadics
- `cex-composition-factors-do-not-determine-the-extension` · counterexample — Composition factors do not determine the extension

### `schur-multipliers-and-universal-central-extensions` — Schur Multipliers and Universal Central Extensions (38 item(s))

- `def-schur-multiplier-of-a-group` · definition — Schur multiplier
- `def-free-presentation-kernel-data` · definition — Free-presentation kernel data
- `lem-every-finite-group-is-finitely-presented` · lemma — Every finite group is finitely presented
- `lem-hopf-formula-subgroups-are-normal-and-the-quotient-exists` · lemma — The Hopf-formula quotient exists
- `def-hopf-formula-quotient` · definition — Hopf-formula quotient
- `lem-five-term-homology-sequence-for-a-free-presentation` · lemma — Low-degree sequence of a free presentation
- `thm-hopf-formula-for-the-schur-multiplier` · theorem — Hopf formula for the Schur multiplier
- `cor-hopf-formula-is-independent-of-the-free-presentation` · corollary — Hopf formula is presentation-independent
- `cor-schur-multiplier-of-a-finitely-presented-group-is-finitely-generated` · corollary — Multiplier of a finitely presented group
- `prop-schur-multiplier-of-a-free-group-is-trivial` · proposition — Multiplier of a free group
- `prop-schur-multiplier-of-a-cyclic-group-is-trivial` · proposition — Multiplier of a cyclic group
- `def-exterior-square-of-an-abelian-group` · definition — Exterior square
- `lem-exterior-square-has-the-alternating-universal-property` · lemma — Alternating universal property
- `thm-schur-multiplier-of-an-abelian-group-is-its-exterior-square` · theorem — Multiplier of an abelian group
- `def-central-and-stem-extensions` · definition — Central and stem extensions
- `def-perfect-group` · definition — Perfect group
- `def-universal-central-extension` · definition — Universal central extension
- `lem-universal-central-extension-is-unique-up-to-unique-isomorphism` · lemma — Uniqueness of universal central extensions
- `thm-a-group-admits-a-universal-central-extension-iff-it-is-perfect` · theorem — Existence criterion for universal central extensions
- `def-universal-central-extension-from-a-free-presentation` · definition — Free-presentation universal extension
- `lem-free-presentation-construction-is-a-central-extension` · lemma — Free-presentation construction is central
- `thm-free-presentation-construction-has-the-universal-property` · theorem — Free-presentation construction is universal
- `cor-kernel-of-the-universal-central-extension-is-the-schur-multiplier` · corollary — Kernel of the universal central extension
- `def-superperfect-group` · definition — Superperfect group
- `prop-universal-central-extension-group-is-superperfect` · proposition — Universal central extension groups are superperfect
- `thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two` · theorem — Universal coefficients in degree two
- `cor-central-extensions-of-perfect-groups-are-controlled-by-hom-from-the-schur-multiplier` · corollary — Central extensions of perfect groups
- `lem-positive-degree-integral-homology-of-a-finite-group-is-order-torsion` · lemma — Positive-degree homology of a finite group is order-torsion
- `lem-schur-multiplier-of-a-finite-group-is-finite` · lemma — Multiplier of a finite group is finite
- `def-schur-covering-group-of-a-finite-group` · definition — Schur covering group
- `thm-existence-of-schur-covering-groups-for-finite-groups` · theorem — Existence of Schur covering groups
- `rem-projective-representations-and-the-schur-multiplier` · remark — Projective representations and the multiplier
- `fs-the-schur-multiplier-is-defined-as-h-two-cohomology-with-complex-units` · false-statement — Multiplier defined as H²(G,C×)
- `fs-hopfs-formula-is-obviously-independent-of-the-presentation` · false-statement — Hopf formula is obviously independent
- `fs-every-group-has-a-universal-central-extension` · false-statement — Every group has a universal central extension
- `fs-every-central-extension-is-a-stem-extension` · false-statement — Every central extension is stem
- `fs-schur-covering-groups-are-unique-for-all-finite-groups` · false-statement — All finite Schur covers are unique
- `fs-the-universal-coefficient-short-exact-sequence-splits-naturally` · false-statement — Universal coefficients split naturally

### `schur-multipliers-and-universal-central-extensions-examples` — Schur Multipliers and Universal Central Extensions — Examples (6 item(s))

- `ex-schur-multiplier-of-a-cyclic-group` · example — Multiplier of a cyclic group
- `ex-schur-multiplier-of-a-finite-abelian-group` · example — Multiplier of a finite abelian group
- `ex-the-binary-icosahedral-cover-of-a-five` · example — Binary icosahedral cover of A5
- `ex-hopf-formula-from-a-one-relator-presentation` · example — Hopf formula from a one-relator presentation
- `ex-a-stem-extension-that-is-not-universal` · example — A stem extension that is not universal
- `cex-nonuniqueness-of-schur-covering-groups` · counterexample — Nonuniqueness of Schur covers

### `verma-modules-and-shapovalov-forms` — Verma Modules and Shapovalov Forms (17 item(s))

- `def-one-dimensional-borel-module-of-weight-lambda` · definition — The one-dimensional Borel module of weight lambda
- `def-verma-module` · definition — Verma modules
- `thm-universal-property-of-verma-modules` · theorem — The universal property of Verma modules
- `thm-pbw-model-of-a-verma-module` · theorem — The PBW model of a Verma module
- `prop-weights-of-a-verma-module-lie-below-lambda` · proposition — Weights of a Verma module lie below lambda
- `prop-formal-character-of-a-verma-module` · proposition — The formal character of a Verma module
- `lem-a-proper-verma-submodule-misses-the-highest-weight-line` · lemma — A proper Verma submodule misses the highest-weight line
- `lem-sum-of-all-proper-submodules-of-a-verma-module-is-proper` · lemma — The sum of all proper Verma submodules is proper
- `thm-verma-module-has-a-unique-simple-quotient` · theorem — A Verma module has a unique simple quotient
- `lem-every-nonzero-verma-submodule-contains-a-singular-vector` · lemma — Every nonzero Verma submodule contains a singular vector
- `def-chevalley-contravariant-form` · definition — Chevalley-contravariant forms
- `thm-existence-and-uniqueness-of-the-shapovalov-form` · theorem — Existence and uniqueness of the Shapovalov form
- `lem-distinct-verma-weight-spaces-are-shapovalov-orthogonal` · lemma — Distinct Verma weight spaces are Shapovalov-orthogonal
- `prop-the-shapovalov-radical-is-the-maximal-submodule` · proposition — The Shapovalov radical is the maximal submodule
- `def-shapovalov-determinant-on-a-weight-space` · definition — The Shapovalov determinant on a weight space
- `thm-shapovalov-determinant-formula` · theorem — The Shapovalov determinant formula
- `cor-verma-irreducibility-criterion-from-shapovalov-determinants` · corollary — The Verma irreducibility criterion from Shapovalov determinants

### `verma-modules-and-shapovalov-forms-examples` — Verma Modules and Shapovalov Forms — Examples (6 item(s))

- `ex-sl2-verma-action-in-the-pbw-basis` · example — The sl2 Verma action in the PBW basis
- `ex-sl2-shapovalov-norm-product` · example — The sl2 Shapovalov norm product
- `ex-sl2-reducible-and-generic-verma-modules` · example — Reducible and generic sl2 Verma modules
- `ex-an-a2-verma-weight-space-of-dimension-two` · example — A two-dimensional A2 Verma weight space
- `cex-the-shapovalov-form-is-not-positive-definite-in-general` · counterexample — The Shapovalov form is not positive-definite in general
- `ex-finite-dimensional-sl2-quotient-of-a-verma-module` · example — The finite-dimensional sl2 quotient of a Verma module

### `brauer-induction-and-elementary-subgroups` — Brauer Induction and Elementary Subgroups (20 item(s))

- `def-p-elementary-and-p-hyperelementary-finite-groups` · definition
- `lem-elementary-and-hyperelementary-subgroups-are-subgroup-closed` · lemma
- `def-induction-ideal-of-a-family-of-subgroups` · definition
- `lem-induction-ideal-of-a-subgroup-family-is-an-ideal` · lemma
- `lem-p-primary-character-value-congruence` · lemma
- `lem-hyperelementary-permutation-subring-reduction` · lemma
- `lem-banaschewski-prime-obstruction` · lemma
- `lem-elementary-detection-at-a-fixed-element` · lemma
- `lem-isaacs-linear-character-step` · lemma
- `def-supersolvable-groups-and-monomial-characters` · definition
- `lem-p-elementary-groups-are-supersolvable` · lemma
- `prop-faithful-irreducible-character-is-induced-from-a-proper-inertia-subgroup` · proposition
- `lem-nonabelian-supersolvable-group-has-a-noncentral-normal-abelian-subgroup` · lemma
- `lem-monomiality-lifts-along-a-quotient` · lemma
- `thm-finite-supersolvable-groups-are-monomial` · theorem
- `lem-p-elementary-characters-are-induced-from-linear-characters` · lemma
- `thm-brauer-induction` · theorem
- `cor-elementary-restriction-detects-generalized-characters` · corollary
- `cor-elementary-local-integrality-criterion` · corollary
- `cor-cyclotomic-field-splits-a-finite-group` · corollary

### `brauer-induction-and-elementary-subgroups-examples` — Brauer Induction and Elementary Subgroups — Examples (4 item(s))

- `ex-elementary-and-hyperelementary-small-groups` · example
- `ex-brauer-induction-for-s3` · example
- `ex-trivial-factors-in-an-elementary-group` · example
- `cex-cyclic-subgroups-do-not-give-integral-induction-in-general` · counterexample

## Your seams

Your pages depend on another group's:

- `schur-multipliers-and-universal-central-extensions` requires `group-cohomology-as-a-derived-functor-examples` (group b, batch 10)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-7 reader warnings

2 warning(s) a Step-7 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-08b2fe0e4c3979a6ec3610eb · `thm-free-presentation-construction-has-the-universal-property`** (from group a, gap-a-reader-closes) — Step 2.1 establishes that the constructed map is independent of the selected lifts, but then concludes uniqueness among all maps over G without the needed additional argument: two such maps differ by a homomorphism from [F,F]/[F,R] to the central kernel, and this source must be shown perfect. The statement is standard and the omitted argument is supplied in more detail in thm-a-group-admits-a-universal-central-extension-iff-it-is-perfect.
- **s8a-d7889507e2d4158bc78c848c · `lem-banaschewski-prime-obstruction`** (from group a, gap-a-reader-closes) — In the contrapositive argument, the sentence 'Expanding the finite product would put 1_X in A' suppresses the essential identity 0=∏(1_X-a_x)=1_X+(terms in A). Since A need not be unital, the conclusion follows only after this expansion; the statement is otherwise correct.

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
