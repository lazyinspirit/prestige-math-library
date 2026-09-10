# Final adjudicator evidence — Prokhorov tightness

Run: `phase-2-nine-step-25`; group: `a`; queue position: 1 of 1.
Item: `thm-prokhorov-tightness-theorem-on-polish-spaces`.
Decision: **repaired**. Source status: **familiar**.

## Exact scope and inspected evidence

Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, and the exact dispatch queue `research/phase-2-nine-step-25-step7-fa-a-item-0a25b03585411c5b.json` before editing. Reviewed the current item, both page files `library/probability/weak-convergence-tightness-and-representation.md` and its `-examples.md` companion, the item's batch-3 manifest entry and coverage entries, the batch-3 proof contract including its risk review and boundaries, and the aggregate contract for comparison. The owning batch contract is authoritative for this repair; the engine merges batch artifacts at its normal join. No shared aggregate was rewritten.

Reviewed the two exact item rows in `research/phase-2-nine-step-25-judge.jsonl`, the initial row in `research/phase-2-nine-step-25-judge-adjudications.jsonl`, and Alpha's item section in `research/phase-2-nine-step-25-alpha-step7-a.md`. The group task `research/phase-2-nine-step-25-alpha-a-step7.task.md` explicitly reports no Step-6 reader warning targeting an owned item.

The statement remains: assuming AC, a family of Borel probability measures on a Polish space is tight iff every sequence from it has a weakly convergent subsequence with probability limit on that same space. The limit need not belong to the family. Weak convergence uses bounded continuous real tests. Naturals include zero. Completeness is for a chosen compatible complete metric; no local compactness or ambient Borelness of the embedded space is assumed. The A-page supplies the compact-law lemma before this consumer; the B-page supplies illustrations, not proof dependencies.

Read the following direct dependencies in `items/<id>.md`, including the relevant statements and proofs where present:

- `def-tight-family-of-probability-measures`
- `def-relative-sequential-compactness-for-weak-convergence`
- `thm-every-borel-probability-on-a-polish-space-is-tight`
- `lem-probability-laws-on-a-compact-metric-space-have-weakly-convergent-subsequences`
- `thm-portmanteau-theorem`
- `thm-hilbert-cube-universal-for-separable-metrizable-spaces`
- `thm-complete-and-totally-bounded-implies-compact`
- `thm-finite-and-countable-subadditivity-of-measures`
- `thm-continuity-from-below-for-measures`
- `def-axiom-of-choice`
- `lem-standard-complete-metric-on-a-countable-product`

## Independent mathematical findings

The initial judge rejection (2026-09-10T06:40:35.129Z, context `432dfbc21fd64508ce48df66e51a1bd5387e7764505c2ffea088da0291d4a8be`) correctly identified the unqualified reciprocal index in step 1.2. Alpha's restriction to integers m >= 1 repairs it: each compact image has limiting mass at least 1-1/m, so their Borel union has mass one. Nesting is unnecessary, since the union contains every image. I retain that repair.

The final Terra rejection (2026-09-10T08:27:02.452Z, context `d1eb87b8a20eaacb701e9de536ab48e5e109eb9bee1734d5920b8319e1c4bd7b`) is a false positive. It asserts the open inequality is mu(G) >= liminf mu_n(G). The cited Portmanteau statement actually says liminf mu_n(G) >= mu(G). For fixed G_r = union_{i<=r} U_i, inclusion in the larger initial union gives mu_{n_j}(G_r) <= 1-epsilon eventually. Thus mu(G_r) <= liminf_j mu_{n_j}(G_r) <= 1-epsilon, precisely the inference the proof needs. Applying a complement is optional. I expanded this valid inequality chain in step 1.4 for clarity.

There is nevertheless an independent fatal defect in step 1.1, also explicitly left open in Alpha's report. H has coordinates indexed by all natural numbers, but the displayed sum over j >= 1 omitted coordinate zero. The all-zero point and the point with coordinate zero equal to one and all later coordinates zero are distinct with displayed distance zero. That formula is a pseudometric and does not justify compactness by F2/F3. I replaced it by sum_{j=0}^infinity 2^{-(j+1)} |x_j-y_j|, exactly the metric supplied by F2, and matched its mesh argument to coordinates 0,...,N-1 and tail sum_{j>=N} 2^{-(j+1)}. Every coordinate now has positive weight. Completeness and product topology follow from F2, and a finite mesh with head error < eta/2 plus tail < eta/2 proves total boundedness. AC supplies countable choice for F3.

I independently checked the remaining argument. The compact-law lemma extracts a subsequence by countably dense tests, bounded real subsequences, uniform approximation, and positive-functional representation on compact metric H. Step 1.2 applies the closed-set Portmanteau bound to compact images. The full-mass Borel set E in the image suffices for step 1.3: every relative Borel e(B) is the trace of an ambient Borel set, so E intersect e(B) is ambient Borel. These intersections preserve disjoint unions and define a probability. For closed F in S, choose ambient closed Z with Z intersect e(S) = e(F). Pushforwards give nu_{n_j}(Z) = mu_{n_j}(F), while full mass on E gives nu(Z) = mu(F). The closed inequality yields weak convergence back on S without requiring e(S) Borel.

For the reverse, failure of a uniform finite initial cover permits the stated AC selection and subsequence. The correct open inequality bounds the limit on every fixed initial union; continuity from below contradicts total mass one. At scale m >= 1, enlarge the resulting finitely many open balls to closed balls. The intersection K of those finite closed unions is closed in complete S. Its complement has uniformly bounded mass at most sum_{m>=1} epsilon*2^{-m-1} = epsilon/2 < epsilon. For any eta > 0 choose m with 2^{1-m} < eta; selecting a point of K in each ball meeting K gives a finite eta-net by the triangle inequality. Thus K is complete and totally bounded and hence compact under the declared AC. The empty family is vacuous; a nonempty probability family forces S nonempty; singleton spaces introduce no exception.

This compactification argument, Portmanteau inequalities, relative Borel trace argument, and complete/totally-bounded criterion are familiar mathematics to this adjudicator. The exact local supplier interfaces resolve the indexing and sign questions without uncertainty. No external source was consulted in this dispatch. The source-reading claim in the pre-existing risk record belongs to its original reviewer; it is not a claim of fresh FA source verification.

## Repair, bookkeeping, and focused checks

Changed only the queued item's steps 1.1 and 1.4 and the matching derivation claims in `research/phase-2-nine-step-25-batch-3.proof-contracts.json`. The statement, declared dependencies, page placement, batch scope, coverage claims, and original review records are preserved. No prerequisite item was edited and no missing lemma was needed.

Read `briefs/tasks/frontier-dependency-ledger.md` and checked `research/phase-2-nine-step-25-batch-3.cross-batch-dependencies.json`: this consumer has no cross-batch input row. Its direct dependencies are same-batch or published. Because this repair changes no dependency item or edge, there is no affected consumer-batch dependency row to update and no owner-prerequisite-repair licence to create. Adding a fictitious cross-batch row would misstate the graph.

Pre-repair `itemHashGuard`: `f052df816ca40f6704e7ff8eaef71a760069c1d3f0bb616b24c248450f8b49ea`.
Post-repair `itemHashGuard`: `440f21a4898c7bd91d0dae1aed8455002389aed6c170ed385d474af1c7f6deb6`.

Focused checks completed successfully:

- `node tools/tsx-run.mjs tools/precheck.mts items/thm-prokhorov-tightness-theorem-on-polish-spaces.md`: 1 checked, 0 failing.
- `node tools/proof-contract.mjs research/phase-2-nine-step-25-batch-3.proof-contracts.json --strict --items thm-prokhorov-tightness-theorem-on-polish-spaces`: 0 errors, 0 warnings, 1/1 checked.
- `node tools/rendercheck.mjs items/thm-prokhorov-tightness-theorem-on-polish-spaces.md`: valid renderer YAML and all math spans parse under real KaTeX; no delimiter or wikilink errors.

These are focused structural checks accompanying the independent mathematical review, not judge verdicts. No third consumer judgment or pass stamp was requested or fabricated. No unresolved mathematical obligation remains for this queued item. Next action: record disposition `repaired` with the prescribed terminal recorder; subsequent run joins remain engine-owned.
