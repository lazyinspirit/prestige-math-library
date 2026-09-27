# Reviewer 03 report

Independent mathematical review of all 23 assigned canonical U-P items, in assignment order. Each original receipt was appended before starting the next item. The receipt stream contains 23 original receipts and two complete amendments after coordinated consumer repairs. These are review recommendations, not independent judge verdicts; the canonical ledger was not edited.

Final recommendations: 4 repair (A-R), 2 accept (bounded-clear), 17 defer (U-P).

## Results

| # | Item | Recommendation |
| --- | --- | --- |
| 1 | `thm-morse-functions-are-open-dense-on-a-compact-manifold` | repair |
| 2 | `thm-minimal-support-primes-are-associated` | defer |
| 3 | `cor-nth-prime-asymptotic` | defer |
| 4 | `thm-trivial-zeros-and-critical-strip` | defer |
| 5 | `lem-von-mangoldt-explicit-formula-residues` | defer |
| 6 | `prop-a-countable-chart-cover-detects-manifold-null-sets` | defer |
| 7 | `def-radon-nikodym-derivative` | defer |
| 8 | `cor-localisations-of-regular-local-rings-are-regular` | repair |
| 9 | `lem-auslander-buchsbaum-syzygy-projective-dimension` | repair |
| 10 | `def-spherical-averages-and-local-ball-means-in-rn` | defer |
| 11 | `lem-regular-quotient-preserves-depth-dimension-gap` | defer |
| 12 | `lem-polynomial-extension-depth-increases-by-one` | defer |
| 13 | `ex-selecting-an-admissible-contour-height` | accept |
| 14 | `thm-associated-primes-of-cohen-macaulay-modules` | defer |
| 15 | `thm-dual-of-a-closed-subspace-is-a-dual-quotient` | defer |
| 16 | `lem-subdivision-compatible-continuous-polyhedral-homology-comparison` | defer |
| 17 | `prop-free-abelian-groups-of-rank-at-least-two-are-not-hyperbolic` | repair |
| 18 | `rem-hahn-banach-discontinuous-additive-open` | defer |
| 19 | `thm-bounded-below-iff-transpose-is-surjective` | defer |
| 20 | `thm-generalized-fitting-subgroup-contains-its-centralizer` | defer |
| 21 | `thm-lebesgue-criterion` | defer |
| 22 | `thm-simplicial-and-singular-homology-agree-for-simplicial-complexes` | defer |
| 23 | `lem-r-one-s-two-integral-element-membership` | accept |

## Repairs and consumer impact

- Compact Morse openness/density: added the AC premise required by relative jet-transversality, explained the consuming step, and removed stale verification. Four direct/indirect consumers were read and traced. The excellent-Morse consumer has now received its assigned-shard AC repair; its downstream existence corollary already assumes AC.
- Localization of regular local rings: added AC required by the homological regularity proof. All 11 direct/indirect consumers were read and traced. Current R1, S2 and formal-power-series consumer repairs explicitly discharge the premise. Root confirmed all three repairs; the other eight uses already carry AC.
- Syzygy projective dimension: replaced the AC-dependent minimal-resolution argument with a finite Schanuel comparison. The displayed mathematical claim is unchanged. Only finitely many presentations are selected; a supplied finite projective resolution makes the terminal constructed kernel projective.
- Free abelian groups: replaced generating-set invariance with a direct proof for every finite generating set, using two exposed directions and Lipschitz linear coordinates to construct geodesic quadrilaterals of unbounded thickness. Preserved the existing infinite-rank finite-support argument. The displayed claim is unchanged.

Exact reference paths, uses, decisions and final hashes are recorded in `agent-03-impact-compact-morse-final.json` and `agent-03-impact-regular-localisation-final.json`. The initial impact files remain as historical evidence. Closure was recomputed across all published frontmatter ID/body-wikilink references; no new consumers were found. Cross-shard pages were read, not edited by this reviewer.

## Important unresolved findings

- The DC-only bounded-below/transpose-surjectivity claim has a concrete model obstruction: a nonzero Banach space ℓ∞/c0 can have trivial dual under DC plus the Baire property for all sets of reals. Its zero map to zero has surjective transpose without being bounded below. Event 03-022 records the retrieved source and precise required strengthening.
- Simplicial-to-singular comparison requires an ordered vertex set in its current supplier, but the target does not declare it. Its claimed chain-level commutation with all simplicial maps fails for reversal of an edge; homology naturality needs an order-change homotopy. New Phase-2 compact-CW-image and relative-CW suppliers do provide a choice-free support route, so the former blanket claim that no such supplier exists is stale. This also informs deferred subdivision comparison: the remaining need is exact integration and characteristic generators/naturality, not automatic AC qualification.
- The generalized Fitting assertion has no supplied proof. The retrieved Smith text confirms the assertion and points to Aschbacher, but does not furnish a proof. No proof-reading claim is made beyond that excerpt.
- The Lebesgue criterion uses AC_omega in its forward proof despite the unqualified biconditional. A canonical least-code rational-cover route is described in event 03-024, but has not been integrated or supplier-checked. Its very large reference closure was counted, not adjudicated; no claim edit was made.
- The Hahn–Banach/discontinuous-additive open-status item remains unverified. Retrieved results separate related principles but do not certify its present implication status.
- Other deferrals identify exact premise gaps in analytic continuation/PNT, null-set atlas transport, complex Radon–Nikodym, depth/associated-prime arguments, spherical measures, or Hahn–Banach suppliers. Complete consuming-step evidence and resolution paths are in each receipt and owner_escalation event.

## Reading and validation limits

The receipts distinguish full supplier-body reading from statement/definition extraction and from external excerpts. External texts actually consulted include Stacks 02CE, Hatcher printed pp.127–130, Larson–Shelah arXiv:2606.08384 excerpts, Karagila arXiv:2010.15632 excerpts, and the Smith generalized-Fitting excerpt. Failed or unusable DLMF/AMS retrievals are not represented as source reading. Acceptance is bounded to the reviewed claims and exact uses; it is not recursive certification of the whole library.

Focused precheck and rendercheck passed on all four locally edited items; diffs were inspected and `git diff --check` passed. Removed stale verification where present and recorded changed provenance. No build, autopilot transition, commit, global configuration change, agent spawn, external message, canonical ledger edit, or other-shard item edit was performed. Existing workspace changes were preserved. An early rendercheck invocation with `--help` unexpectedly checked the entire corpus and passed; subsequent checks were explicitly focused.

Receipts: `agent-03-receipts.jsonl`. Coordination and exact escalations: `agent-03-events.jsonl`. Root directions: `agent-03-directions.jsonl`.
