# Batch 4 authoring notes — Nonsmooth Equilibrium

Run physics-td-qft-rpm-62-2026-10-14, role beta, batch 4. This is Step 1 authoring evidence, not an independent mathematical acceptance.

## Plan, design, and inventory

The complete “Nonsmooth Equilibrium” design section in research/plan-thermodynamics-track.md L337–374 was compared with research/plan-spec.json and the batch manifest. There is no design/spec conflict: both assign category thermodynamics-mathematics, library mathematics, order 268, companion order 289, and the same seven A-page prerequisites: compactness, mean-value theorems, total derivative, continuity/EVT, convexity, convex and semicontinuous functions, and td-math-ordered-composition. The batch-4 manifest preserves them.

The 11 named A items are all present. Three page-local additions make the proofs and conditional transfer explicit: lem-tdmath-extended-convex-epigraph-equivalence, lem-tdmath-fenchel-young-equality, and cor-tdmath-ordered-finite-mixture-envelope. The A page therefore has 14 items against its 32-item reservation. The B page has the four planned examples against its 8-item reservation. Both remain well below the hard cap of 100. The A/B pages and manifest inventories agree.

## In-run item levels

Levels were recomputed from the current run manifests, counting only in-run item suppliers. External published mathematical suppliers remain context and do not raise these levels.

| Level | Items |
|---:|---|
| 0 | def-tdmath-extended-convex-function, lem-tdmath-closed-convex-separation, lem-tdmath-lever-rule, lem-tdmath-constrained-curvature, lem-tdmath-stoichiometric-tangent-cone, thm-tdmath-local-implicit-rank |
| 1 | def-tdmath-fenchel-transform-and-subgradient, lem-tdmath-extended-convex-epigraph-equivalence, thm-tdmath-phase-dimension, ex-tdmath-water-reaction-boundary-tangent |
| 2 | lem-tdmath-fenchel-young-equality, thm-tdmath-finite-dimensional-biconjugation, ex-tdmath-singular-phase-rank |
| 3 | thm-tdmath-finite-mixture-envelope, ex-tdmath-vertical-separation-biconjugate |
| 4 | thm-tdmath-fenchel-attainment, ex-tdmath-flat-face-nonunique-minimizer |
| 8 | cor-tdmath-ordered-finite-mixture-envelope |

The corollary is level 8 because its inspected batch-3 theorem is level 7. Its other in-run suppliers are the tagged-compound definition, comparison definition, compound-mass lemma, and finite-mixture theorem. The batch remains level 1 in research/physics-td-qft-rpm-62-2026-10-14-batch-dependency-levels.json, with batch 3 as its incoming page dependency.

## Batch-3 interface review and escalation

The actual draft carriers def-tdmath-tagged-scalable-compound, def-tdmath-comparison-and-stability, lem-tdmath-compound-mass-well-defined, and thm-tdmath-additive-entropy-representation were inspected against the planned batch-3 manifest statements and relevant proofs.

- The tagged-compound definition matches its finite-support, nonnegative-coefficient and dimensionless-bookkeeping-mass interface. It does not define the unit-state map e_x, although both the comparison definition and additive-representation theorem use it.
- The comparison definition matches the planned equal-mass preorder, consistency, positive scaling, splitting/recombination, stability, and CH assumptions, but its one-state splitting clause uses the undefined e_x.
- The additive-representation theorem's actual Statement matches the planned strict-reference and no-strict-pair branches. Its draft proof is present. In the no-strict-pair branch, it writes M e_r for a compound of mass M without handling M=0, although the compound definition only declares scaling for positive factors. At M=0, the compound is empty and needs an explicit case.
- Batch-3 notes additionally leave the real-analysis, vector-space, and finite-sum prerequisite-page closure owner-escalated. The inspected item proof status is draft, not independently accepted.

The local corollary keeps the complete finite-simplex transfer conditional. Its assumptions [A1]–[A3] explicitly record the exact supplier result, the missing intended unit point mass e_s(x)=1 for x=s and 0 otherwise, and the affine coordinate assignment. It does not supply or certify the batch-3 definition. The batch-4 readiness record for this corollary is escalated.

Proposed owner resolution: add or repair the unit-state-compound definition on the batch-3 A page adjacent to def-tdmath-tagged-scalable-compound, state and prove its mass-one property using the finite-sum supplier, update uses of e_x, add the M=0 case to the no-strict-pair proof, and reconcile the batch-3 page's missing complete-real, vector-space, and finite-sum page prerequisites. This affects the comparison definition and additive-representation theorem directly, and the batch-4 conditional corollary transitively. No batch-3 carrier or shared plan was edited.

## Source research and retrieval

Full relevant text was inspected from Rockafellar's *Convex Analysis* (§§11–12, 23, 27); Bianchi, Fercoq, and Hachem's complete 65-page *Elements of Convex Analysis and Optimization* (§§1.1–1.5, 2.1–2.3); the complete MIT 6.253 notes (Lectures 2–7, 12); Jackson's complete MATH 395 notes (IFT pp. 99–106, 127–132); Border's complete IFT notes (Theorems 3–5, pp. 7–9); Cornell optimization notes (§6.1.4); IIT Madras constrained-optimization notes; MIT 18.02SC Session 30 notes (all 5 pages); TTIC Lecture 4 on Fenchel conjugates; and Lebl, *Basic Analysis II*, §8.5.1 / Theorem 8.5.6. URLs, locators, supported items, dispositions, and source-resolution records are in research/physics-td-qft-rpm-62-2026-10-14-batch-4.coverage.json.

source-fetch-check --stamp verified 5/10 sources. It fetched the five PDF sources but could not verify their compressed page counts because this environment has no mutool; the checker recorded six attempts (initial plus five retries) for each, and no further same-source retries were made. The five records are marked dropped from the fetch-verified set only after full-text inspection, independent alternatives, and complete local arguments were recorded. A subsequent source check reports all 10/10 resolved: 5 fetch stamps and 5 documented drops. The Rockafellar book, Cornell and IIT Madras course notes, TTIC lecture, and Lebl HTML note are fetch-verified.

Two source-proof caveats are explicit in coverage. The MIT 6.253 Lecture 7 and TTIC Lecture 4 biconjugation arguments do not justify the vertical-separator case; neither is used for that case. Rockafellar's full vertical argument and the local proof supply it. MIT 18.02SC itself calls its general-function Hessian discussion suggestive rather than rigorous; the local constrained-curvature proof instead gives a full line-restriction and mean-value argument under its continuous matrix-field hypothesis.

## Proof and scope boundaries

All mathematical items state their domains, regularity, finite-dimensional assumptions, conventions, and dependencies. The biconjugation proof handles both finite-domain and outside-domain points, including a vertical separator. The finite-mixture theorem is only for a finite list and proves simplex attainment. The curvature result is smooth and is kept separate from extended-real convex duality. The stoichiometric tangent result is exact for the stated nonnegative linear species-balance polyhedron. The phase dimension count is conditional on interior coordinates and a nonsingular derivative minor; the singular example demonstrates why equation counting alone fails. Examples are mathematical constructions and make no claims about measured systems or actual chemical/phase equilibria. Choice principles were not added.

## Checks and run state

After the final proof edit, `proof-contract.mjs --strict` passed all 16 proof-bearing A/B items with zero errors and warnings. The explicit 18-item `proof-layout.mjs` scan found 62 numbered steps and zero defects. The scoped author check passed precheck, rendercheck (20 item/page files), content policy (18 items, zero errors or warnings), and strict proof contracts. The batch-scoped `manifest-deps.mjs` check reports 18 items, zero normalized entries, and zero errors. A direct recomputation against the complete run graph gives the levels above for all 18 batch-4 items, with no batch-4 mismatch.

`source-fetch-check.mjs` reports 5/10 fetch-verified sources and 10/10 sources resolved through five fetch stamps plus five documented drops. `coverage-checklist.mjs` reports one page, 34 harvested results, zero errors, and one low-yield warning: 3/34 harvested results were included and 31 were dispositioned inline with item-specific support. Alpha should confirm the low-yield dispositions.

The run-wide item-level check remains blocked by other batches. It reports 71 errors across empty scaffold inventories, QFT rows without IDs, and unrelated dependency-level mismatches; the scoped recomputation reports no mismatch among these 18 items. The run-wide batch-level check fails with `Duplicate item undefined`. Direct `step1-decisions.mjs record` and `check` calls fail on that same malformed run-wide input before they reach a batch-4 item. To leave other batches untouched, records were generated by the same `record` command in a temporary snapshot of the current manifests with only rows lacking item IDs removed; all valid rows, batch-4 and batch-3 supplier rows, current item files, and `plan-spec.json` were unchanged. The 18 generated records' input hashes and ready states were checked against that snapshot, then copied to this batch's research evidence. The result is 17 ready records and one escalation for `cor-tdmath-ordered-finite-mixture-envelope`. A full run-wide readiness check remains blocked until the owner repairs the malformed manifests.

The physics autopilot status read at 2026-10-14 04:34:54 UTC shows stage 1-scaffold at 21/64, nothing in flight, and the owner-repair/recertification blocker at `research/physics-td-qft-rpm-62-2026-10-14-step1-blockers.json`. The canonical `tools/autopilot` status command reports a workflow-revision mismatch and no configured run; the active physics run is reported by `tools/physics-autopilot` with `.physics-autopilot/physics-td-qft-rpm-62-2026-10-14`. No shared plan, engine state, blocker, or verdict was edited.
