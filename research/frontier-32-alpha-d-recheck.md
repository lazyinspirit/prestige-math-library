# frontier-32 — Alpha group `d` — Step 3 scaffold recheck

Rechecked current manifests, coverage, plan entries, and the assigned batches'
Step-3 fix-pass notes for batches 7, 16, and 17.  The active group assignment
still covers exactly those batches.  All four A/B pairs are sufficient on their
current bytes.

## Finding dispositions

| batch | finding | disposition | current evidence |
|---:|---|---|---|
| 7 | NT-20's six norm/tower targets lacked source coverage within the declared Milne range. | **closed — applied** | `frontier-32-batch-7.coverage.json` now selects Milne Ch. 4, PDF pp. 69–71, and Exercise 4-2, p. 84, and supplies canonical rows for `def-absolute-norm-of-an-ideal`, `lem-nonzero-number-field-ideal-has-finite-quotient`, `thm-principal-ideal-norm-is-absolute-field-norm`, `thm-ideal-norm-is-multiplicative`, `cor-norm-of-a-prime-ideal`, and `thm-ramification-and-residue-degrees-in-towers`.  `coverage-checklist --require-destination` reports 118 results with no errors or warnings, and source fetch verification is 4/4. |
| 7 | NT-20 silently depended on the Choice-qualified general Dedekind-domain factorisation theorem despite its ZF contract. | **closed — applied** | The current manifest adds `thm-number-field-integral-ideal-factorisation-in-zf`, with dependencies on the finite-quotient lemma and CRT.  `thm-ideal-norm-is-multiplicative`, `def-ramification-index`, and `thm-fundamental-identity-for-primes-in-number-fields` now depend on it; none depends on `thm-unique-factorisation-of-ideals-in-dedekind-domains`.  The plan continues to require only the earlier number-fields page, so no new forward edge or order change was introduced. |
| 16 | The initial sufficient-verdict entry requested no scaffold repair. | **closed — accepted** | The current RL-3 manifest retains 20 A items and 5 B leaves, matching the controlling design and its 510.005/510.006 plan entries.  Current coverage remains 75 harvested results with four fetch-verified sources; the low-yield message is an advisory, and all decline rows pass the group decision check. |
| 16 | Review prose named `def-dot-action-and-strong-linkage-order` and `fs-equal-infinitesimal-character-implies-a-verma-homomorphism`, which are not the controlled manifest identifiers. | **closed — pushback sustained** | Current bytes use `def-strong-linkage-order-on-weights` and end the A graph with `cor-antidominant-verma-modules-are-simple`, exactly as the controlling design records.  The review-only identifiers remain absent; introducing them would duplicate or change established claims. |
| 17 | The initial sufficient-verdict entry requested no scaffold repair. | **closed — accepted** | The current RG-3 manifest remains 15 A plus 4 B items, all with explicit dependency arrays.  Its coverage remains 61 harvested results with two fetch-verified sources; the low-yield message is an advisory, and all decline rows pass the group decision check. |

## Scope decisions

`scope-decisions refresh --run frontier-32 --group d` identified 12 new
batch-7 declines from the expanded Milne selection.  Each is now recorded as
`stands` in `frontier-32-alpha-d-scope-decisions.json`: the current A/B graph
does not require the class-group, fractional-ideal, PID-criterion,
Galois-product, or auxiliary ideal-factorisation material.  The later
`minkowski-theory-and-number-field-class-groups` destination remains after
NT-20.  `scope-decisions check --run frontier-32 --group d` reports 64 current
declines and 0 errors.

## Current verdicts and checks

| A page | batch | verdict |
|---|---:|---|
| `perron-inversion-and-the-explicit-formula` | 7 | sufficient |
| `prime-ideal-decomposition-ramification-and-the-different` | 7 | sufficient |
| `homomorphisms-between-verma-modules-and-linkage` | 16 | sufficient |
| `schur-indices-and-fields-of-definition` | 17 | sufficient |

Current checks passed: `manifest-deps` (53, 25, and 19 items respectively);
`coverage-checklist --require-destination` (batch 7: 118 results, no errors or
warnings; batch 16: 75 and batch 17: 61, each with only its reviewed
low-yield advisory); `source-fetch-check` (4/4, 4/4, and 2/2); whole-run
`content-policy --manifest-only` (676 scoped items, 0 errors/warnings);
`validate-plan` (acyclic and consistent); and `splice-plan --dry-run` (4/53,
2/25, and 2/19 pages/items).  No unresolved obligation remains.
