# Step 3a scope review — semisimple Lie algebras, cohomology, and Levi theory

Run: `phase-2-next-18`

Role: `alpha`

Pair: `semisimple-lie-algebras-cohomology-and-levi-theory` /
`semisimple-lie-algebras-cohomology-and-levi-theory-examples`

Review type: scope only; no item or proof approvals

## Review basis

I compared the current batch-5 manifest and coverage with the complete DG-29
prose section in `research/plan-differential-geometry-track.md`, the current
`research/plan-spec.json` records, the scope ledger, planning and no-drift
records, batch notes, both dependency ledgers, and the downstream DG and RL
consumer designs. No current Step-3a reviewer or owner decision exists for this
A page. The plan's empty item arrays are staging data; its page IDs, order,
category, companion relation, and six prerequisites agree with the manifest and
prose.

The scaffold realizes all 40 designed A-page content slots, six boundary false
statements, and all 12 B-page examples/counterexamples, under clarified stable
IDs where these differ from the prose draft. Its four blocks are complete for
the declared role:

- invariant trace and Killing forms, both Cartan criteria, simple-ideal
  decomposition, reductive characterizations, Weyl complete reducibility,
  Casimir machinery, inner derivations, and the automorphism Lie algebra;
- the all-degree Chevalley--Eilenberg complex with a fixed sign convention,
  `d^2=0`, `H^0`, `H^1`, abelian extensions via `H^2`, both Whitehead lemmas,
  and the cohomology long exact sequence;
- Levi existence, Malcev conjugacy, Ado's theorem, and the matrix realization
  corollary; and
- Lie II, Lie III, simply connected integration, discrete central quotients,
  nilpotent BCH integration, and the local-versus-global distinction.

The companion page tests every major strand: explicit Killing forms and
semisimple/reductive decompositions, low-degree cohomology and a cocycle-built
Heisenberg extension, two Levi examples, and both nilpotent and nontrivial
global integrations. Its counterexamples enforce the centerless and global
uniqueness boundaries. The changed third false-statement slot is a useful
strengthening of the prose boundary: a reductive one-dimensional center acting
by a nilpotent Jordan block shows why Weyl's theorem cannot be extended from
semisimple to arbitrary reductive representations.

## Source coverage and library role

Coverage records four fetch-verified authoritative texts and 25 disposed source
results: 21 included, one inline, and three reasoned out-of-scope. Milne and
Knapp cover the Cartan/Weyl/Levi--Malcev/Ado structure; Weibel covers the full
CE, extension, Whitehead, and cohomological Levi route; Knapp and Kirillov cover
Lie II/III, central quotients, and the nilpotent exponential theorem. The
coverage correctly rejects the broader solvable exponential claim and sends
root classification and Lie-homology/Tor material elsewhere.

This page is the structure-and-existence bridge from DG-26--DG-28 to DG-30--DG-34.
The later representation-theory design explicitly consumes its invariant forms,
CE signs, Whitehead lemmas, Weyl theorem, Levi decomposition, and Casimir
operator. Roots, Dynkin classification, and finite-dimensional highest-weight
theory have the next DG pages; derived-functor/Kostant cohomology has RL-11.
Those exclusions are therefore clean library boundaries, not omissions. The
batch-local dependency on the preceding solvable/nilpotent pair is ordered
correctly, and neither current-run dependency ledger records a cross-batch edge
for this pair.

## Scope decision

`sufficient`

The planned definitions, results, boundary statements, and examples adequately
cover the pair's intended subject and all identified downstream interfaces. No
pair merger or scaffold enrichment is recommended. I found no unresolved scope
uncertainty; correctness of individual claims and proofs remains for Step 3b.

## Checks

- `coverage-checklist` on batch 5: 2 pages, 44 harvested rows, 0 errors and 0
  warnings; this pair accounts for 25 rows.
- `source-fetch-check` on batch 5: 7/7 source records fetch-verified and
  resolved; this pair accounts for four records.
- `manifest-deps` on batch 5: 112 items, 0 errors.
- `content-policy --manifest-only` on batch 5: 112 items, 0 errors and 0
  warnings.
- Current plan validation succeeds with acyclic order and no unresolved IDs,
  item-level cycles, forward references, or B-page dependencies among populated
  page inventories.

This decision concerns scope only. It does not approve any item, proof,
dependency proof, scaffold edit, or owner transition.
