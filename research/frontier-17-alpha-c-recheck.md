# Frontier 17 — Alpha group C step-3 recheck

I re-read the group-C step-3 report, each batch's `## Step-3 fix pass`, the current manifests and coverage ledgers, and the proof-contract entries needed by the reviewed routes. The Betas characterized every finding as already correct rather than claiming a new edit; each disposition below is therefore confirmed only from the current files on disk.

- `B1-1` — confirmed — `research/frontier-17-batch-1.pages.json` places the Thue, odd-integer factorisation, primitive-product, and primitive-prime-power lemmas before their consumers, with the strict bounds, nonzero differences, proper factors, induction, and empty-factorisation boundaries explicit in the strategies and contracts.
- `B1-2` — confirmed — `research/frontier-17-batch-1.coverage.json` separately maps Hackman E.II.8(a) and E.II.8(b) to their two corollaries, while the manifest retains the collision and Extended-Euclid constructions of $73$ and the factor-recovery construction for $221$.
- `B1-3` — confirmed — `thm-burnside-basis-theorem` requires the quotient map to restrict to a bijection onto a basis; its strategy and contract explicitly rule out two distinct lifts with the same quotient image.
- `B1-4` — confirmed — `research/frontier-17-batch-1.pages.json` reuses the published p-core, Fitting, Frattini, nongenerator, maximal-subgroup, nilpotence, and solvability results, supplies the native finite $\mathbb F_p$ dictionary, and has no load-bearing dependency on the later general linear-algebra pages.
- `B1-5` — confirmed — the manifest contains the subgroup, quotient, direct-product, and finite-$2$-group Frattini laws, the induced automorphism action, Hall--Burnside and its kernel corollary, and the native coordinate unitriangular computation; the coverage rows and companion boundary examples are present.
- `B6-1` — confirmed — `research/frontier-17-batch-6.pages.json` exposes countable choice in every choice-spending result title and route, while sigma-finite uniqueness uses its given exhaustion and does not claim a fresh choice expenditure.
- `B6-2` — confirmed — `thm-regular-outer-measures-are-continuous-from-below` uses the increasing tail intersections $G_n=\bigcap_{k\ge n}H_k$ in its strategy and contract and explicitly rejects the unlicensed measurable-hull subtraction.
- `B6-3` — confirmed — the extension-comparison proposition, source-algebra approximation theorem, regular-hull and completion chain, decomposed Carathéodory and metric arguments, and the nonregular two-point witness are present and mapped to the Folland and Tao harvest.
- `B6-4` — confirmed — the stale published scope denial remains recorded verbatim in `research/frontier-17-batch-6.notes.md`, is not a dependency or scaffold edit, and therefore remains correctly routed to the lead's later scope-denial sweep.
- `B8-1` — confirmed — `lem-nonzero-derivative-gives-local-biholomorphism` derives the needed implication from the published Euclidean inverse theorem before the local normal form; the full holomorphic inverse theorem follows the local-degree and multiplicity development.
- `B8-2` — confirmed — the manifest reuses the published zero-order definition and factorisation, contains neither duplicate planned item, and replaces the unavailable Riesz--Thorin pointer by a self-contained remark depending only on Hadamard three-lines.
- `B8-3` — confirmed — the clopen propagation lemma and the boundary, infinity-control, minimum, constant-boundary, bounded-strip, and three-lines results all occur with focused strategies and matching Lebl, Shabat, and Tropp coverage rows.
- `B8-4` — confirmed — the companion retains concrete branch-point and regular-point models, the independent Pythagorean proof, an exact polynomial maximum, and distinct witnesses for the boundary-accumulation, smooth-extension, constant-modulus, connectedness, nonvanishing, real-injectivity, and infinity-control boundaries.

## Per-pair verdicts

- `sums-of-two-squares` — ready for splice; findings `B1-1` and `B1-2` are confirmed on disk.
- `frattini-subgroups-and-the-burnside-basis-theorem` — ready for splice; findings `B1-3` through `B1-5` are confirmed on disk.
- `outer-measure-and-the-caratheodory-extension-theorem` — ready for splice; findings `B6-1` through `B6-4` are confirmed on disk, with `B6-4` remaining a later report-only obligation rather than a scaffold blocker.
- `the-identity-theorem-and-the-open-mapping-theorem` — ready for splice; findings `B8-1` through `B8-4` are confirmed on disk.

`research/frontier-17-alpha-c-step3-verdicts.json` remains correctly attested as `sufficient` for all four A pages. No group-C scaffold blocker remains.
