# Step 3a scope review — solvable and nilpotent Lie algebras

Run: `phase-2-next-18`

Role: `alpha`

Pair: `solvable-and-nilpotent-lie-algebras` /
`solvable-and-nilpotent-lie-algebras-examples`

Review type: scope only; no item or proof approvals

## Review basis

I compared the current batch-5 manifest and coverage with the complete binding
DG-28 prose section, the current `plan-spec.json` page records, the scope
ledger, planning and drift records, batch notes, and both current dependency
ledgers. There is no current Step-3a owner decision for this A page. The plan's
item arrays are empty staging arrays, but its page IDs, order, companion, and
three prerequisites agree with the prose and manifest.

The manifest preserves the prose inventory exactly: 42 A-page items and 12
B-page items. The A page includes the derived, lower-central, and upper-central
series; derived length and nilpotency class; characteristicity, closure, central
extension, and nonzero-center results; the full Engel and Lie theorem routes;
the characteristic-zero derived-algebra criterion; radical and nilradical
existence and invariance; and the semisimple/reductive bridge definitions. Its
six false statements retain the intended field, extension, representation, and
nilradical boundaries. The B page supplies the standard abelian, Heisenberg,
strictly/ordinary upper-triangular, affine, Euclidean-motion, and filiform
computations, plus the designed extension and field counterexamples.

Coverage has three fetch-verified authoritative sources and 19 disposed rows:
14 included, four deferred to the immediately following semisimple/integration
page, and one proof-incomplete treatment excluded in favor of complete
alternatives. I checked the cited Milne Chapter I sections 2–3, Knapp Chapter I
sections 5–7, and Kirillov sections 5.4–5.6 against the planned breadth. Their
standard definitions, closure results, Engel/Lie theory, and radical theory are
represented. Cartan criteria and nilpotent Lie-group integration are explicitly
deferred to DG-29; Cartan subalgebras, roots, and classification have later
pages. Low-dimensional classification/moduli and specialist refinements such
as Frattini theory are not needed for this pair's structural and downstream
supplier role.

## Scope decision

`sufficient`

The pair adequately covers the intended subject and its role in the library.
It gives readers the core algebraic distinctions, structure tools, field
hypotheses, and worked examples, while supplying exactly the radical,
nilradical, Engel, Lie, and series interfaces consumed by the following
semisimple, Levi, Cartan, compact, and real-form pages. The equivalent
solvable-series formulation and scalar-extension comparisons visible in the
sources can be discharged within the planned definition/closure arguments and
do not require separate inventory items for this role. No pair merger or
scaffold enrichment is recommended.

## Checks

- `coverage-checklist` on batch 5: 2 A pages, 44 rows, 0 errors, 0 warnings;
  this pair accounts for 19 rows.
- `source-fetch-check` on batch 5: 7/7 source records fetch-verified and
  resolved; this pair accounts for three records.
- `manifest-deps` on batch 5: 112 items, 0 errors.
- `content-policy --manifest-only` on batch 5: 112 items, 0 errors, 0 warnings.
- The pair has no current-run cross-batch dependency and its page-level
  consumer in the same batch follows it in dependency order.

This decision concerns scope only. It does not approve any statement, proof,
dependency proof, item, or owner transition.
