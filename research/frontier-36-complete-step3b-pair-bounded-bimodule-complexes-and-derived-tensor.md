# Step 3b handoff — bounded bimodule complexes and derived tensor

- **Run / role:** `frontier-36-complete` / `alpha-high`
- **Owned pair:** A `bounded-bimodule-complexes-and-derived-tensor`; B `bounded-bimodule-complexes-and-derived-tensor-examples`
- **Batch:** 22
- **Status:** all nine assigned items are authored, contracted and have current confidence-1 decisions. No owner-held escalation remains for this pair.

## Completed items

Items were handled in the dispatch order, with local labels recomputed after dependency repairs:

| Level | Item | Decision |
|---:|---|---|
| 0 | `def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization` | accept |
| 1 | `lem-bimodule-tensor-totalization-respects-differentials-and-homotopies` | accept |
| 2 | `thm-bounded-bimodule-tensor-associativity-unit-and-cone-compatibility` | repaired |
| 2 | `ex-two-term-tensor-complex-koszul-signs` | accept |
| 3 | `thm-a-bounded-projective-bimodule-complex-defines-a-derived-tensor-functor` | repaired |
| 4 | `prop-homotopy-equivalent-bimodule-complexes-induce-isomorphic-tensor-functors` | accept |
| 4 | `ex-left-and-right-projective-not-enveloping-projective` | repaired |
| 5 | `thm-inverse-bimodule-complexes-give-derived-tensor-equivalences` | accept |
| 5 | `ex-contractible-bimodule-complex-induces-zero-functor` | repaired |

The new level-5 example gives the two-term regular bimodule contraction, calculates the signed total differential and its lifted homotopy, verifies the left and right projectivity hypotheses, and compares the tensor functor with the zero complex. Its direct dependencies now include the totalization definition, projective lifting definition, and finite graded projectives theorem. The item-specific contract records the exact cited excerpts, actual inputs to every step, and all eight boundary dispositions. No new local supplier item was needed.

Other scaffold repairs added the totalization definition to the associativity theorem; the totalization definition and homotopy lemma to the derived-tensor theorem; and five already-published field, domain, polynomial-ring and finite-graded-projective suppliers to the $k[x]$ example. All nine dependency levels remain the dispatched labels.

The A and B page files are authored. Coverage now records all three B examples as canonical local results; existing source harvest dispositions and sibling pair rows remain intact. The consumer batch cross-batch dependency input remains `[]`.

## Checks run

| Check | Result |
|---|---|
| Explicit-path `precheck.mts` on the nine item paths | Pass; eight proof-bearing items checked. The level-0 definition has no proof section. |
| Explicit-path `rendercheck.mjs` on all nine items and both pages | Pass; 11 files. |
| `content-policy.mjs research/frontier-36-complete-batch-22.pages.json` | Pass; 9 scoped items, 0 errors or warnings. |
| Strict `proof-contract.mjs` on batch 22 | Pass; 9/9 items, 0 errors or warnings. |
| `coverage-checklist.mjs research/frontier-36-complete-batch-22.coverage.json --require-destination` | 0 errors, 1 low-yield warning: 5/26 included. The source harvest retains 15 inline and 6 out-of-scope dispositions; full source text was inspected and no source result was dropped. |
| `item-dependency-levels.mjs check --run frontier-36-complete` | Pass; 924 items across 60 pages, maximum level 18. The earlier parse failure in another batch-2 manifest is gone; this dispatch did not edit that file. |
| `validate-plan.mjs research/plan-spec.json` | Pass; page order is acyclic and consistent, with no item cycles, forward references, B-page dependencies or unresolved IDs among pages carrying item lists. It notes 379 planned pages still have no item list. |

The sufficient scope decision was refreshed after the level-5 dependency repair. The item's current `repaired` decision and examined direct dependency IDs are recorded in the Step 3b receipt. No Axiom of Choice is assumed.

## Published-item audit

No potentially defective published item was found in the prerequisite closures examined for this pair. The regular bimodule projectivity argument is supplied locally, and the example does not use an acyclic-implies-contractible shortcut. No new cross-pair dependency or published-content edit was needed.

## Step 4 reconciliation

The HA-20.6 design prose says “Uses 20.3–20.5.” The authored proof of `thm-inverse-bimodule-complexes-give-derived-tensor-equivalences` uses the totalization homotopy lemma (20.2), associativity and units (20.3), and the bounded derived-tensor theorem (20.4). It mentions 20.5 only to state that its side-projectivity conclusion is not applied to the composite complexes; those hypotheses are not assumed. This is a proof-route wording mismatch, not an unresolved theorem gap.

Proposed Step 4 adjustment: describe HA-20.6 as using 20.2–20.4 and say that the supplied composite homotopies transfer directly; retain 20.5 for comparisons between complexes satisfying its two-sided-projectivity hypotheses. Do not splice this shared prose amendment during Step 3b.

## Source scope and remaining obligations

Khovanov–Seidel §2c was reread at PDF/printed pp.10–11, including the bounded projective homotopy-category and homotopy conventions (PDF p.10, lines 440–471) and the two-sided-projective bimodule setup (PDF p.11, lines 486–488). That source provides context; the local contractions, sign computations, and generic functor arguments are proved from the declared library suppliers. [Khovanov–Seidel §2c](https://arxiv.org/pdf/math/0006056)

There is no unresolved mathematical or source-reading blocker for this pair. Step 4 owns the HA-20.6 prose reconciliation above; the coverage checker’s low-yield warning remains visible with the dispositions listed above.
