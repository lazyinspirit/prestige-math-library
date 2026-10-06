# Step 3b authoring report — pair `split-reductive-root-systems-bruhat-cells-and-parabolics`

- Run `frontier-40-geometry-braids-rep-27`, role alpha-high, batch 19, orders 891 (A) / 892 (B), category `algebraic-geometry`.
- A page `split-reductive-root-systems-bruhat-cells-and-parabolics` (36 items); B page `split-reductive-root-systems-bruhat-cells-and-parabolics-examples` (3 items). All 39 items are authored as net-new files; the two library pages and the batch proof-contracts file are written. No scaffold ID was renamed, dropped or added; every manifest statement is preserved verbatim (the Step 3a `sufficient` review receipt, scope sha `83bb0788…`, is therefore still current after the Step 3b repairs below, which touch no statement).
- Item decisions: 33 `accept`, 5 `repaired` (proof-level repairs, statements untouched), 1 `escalate` (`thm-rank-one-connected-groups`, §7; owner-held, statement defect). All 39 receipts are recorded in `research/frontier-40-geometry-braids-rep-27-step3b-review-<id>.json`; `step3-decisions check --phase final` shows the 38 non-escalated IDs closed and only the escalation open among this pair's rows.

## 1. Inputs read

`CLAUDE.md`, `SCHEMA.md`, the batch-19 manifest, coverage and notes, the Step 3a report and scope receipt, the owner authoring direction, the cross-batch dependency input, the design row AG-GRP-4 of `research/plan-algebraic-geometry-expansion-track.md`, the published suppliers cited by the statements (diagonalizable groups, multiplicative type, homogeneous spaces, unipotent/solvable infrastructure, root-system items), and — for the deeper arguments — the extracted text of Milne, *Algebraic Groups* (2022), chapters 10, 12, 13, 16, 17, 20, 21 and Appendix C, at the locators recorded per item; Conrad *Reductive Group Schemes* S1.3-S1.5, S4.1-S4.2 and S5-S6 and Herzig S5-S6 were used as recorded second treatments through the item `sources` locators.

The in-run suppliers of batches 13/14/15/18 that were still unfinished when the pair was authored **all landed during this dispatch**. Their statements were read and reconciled against every recorded use in this pair (47 citation rows to those suppliers; §6). Where the landed statement did not support the recorded use, the consumer was repaired (five items, §4) or escalated (§7).

## 2. Owned IDs and authoring checkpoints (dependency order of the dispatch)

All items are `status: draft`, `origin: pipeline`, `pipeline_run: frontier-40-geometry-braids-rep-27`, with the `dependency_level` recomputed and verified in §4.3. Steps are numbered `k.1` in document order. The dispatch order (levels 0-32) is unchanged; the levels below are the repository-computed ones after the batch-13/14/15/18 suppliers landed and their own labels were finalised (a global shift of −1 along all chains that pass through batch 18; §4.3).

| item | level | steps | notes |
|---|---|---|---|
| `lem-character-and-cocharacter-lattices-of-a-split-torus` | 0 | 3 | choice-free; diagonalizable anti-equivalence |
| `lem-graded-nakayama` | 0 | 4 | choice-free; Milne 13.25-13.27 reproduced |
| `def-abstract-root-datum-and-its-weyl-group` | 1 | def | isomorphism of root data stated explicitly (Step 3a §5.2) |
| `def-limit-of-a-gm-orbit-and-concentrator-subscheme` | 2 | def | functor description; representability deferred to the theorem |
| `lem-root-datum-combinatorics` | 2 | 4 | choice-free; Euclidean translation through published items |
| `lem-lie-functor-exactness-fixed-points-and-generation` | 3 | 3 | (b) uses Milne 2.51 for generated subgroups |
| `thm-concentrator-subscheme-representability-and-smoothness` | 3 | 4 | affine case, glueing, smooth case |
| `def-parabolic-subgroup-of-an-affine-algebraic-group` | 5 | def | avoids the later standard-parabolic theory |
| `def-radical-and-unipotent-radical-of-an-algebraic-group` | 5 | def | geometric reductive condition with pseudo-reductive caveat |
| `thm-fixed-point-schemes-and-centralizers-of-linearly-reductive-actions` | 6 | 4 | Milne 13.1-13.11 route |
| `lem-nilpotent-group-structure-and-maximal-torus-criterion` | 13 | 4 | Milne 16.43-16.48; criterion (b) proved directly |
| `lem-fixed-loci-and-centralizers-of-torus-actions-are-connected` | 14 | 4 | **repaired** [F3]/3.1 (§4.1) |
| `thm-solvable-subgroups-and-the-radical-as-borel-intersection` | 14 | 3 | Milne 17.16-17.19, 17.30-17.31, 17.49 |
| `lem-maximal-tori-extension-conjugacy-and-derived-group` | 15 | 5 | **repaired** 2.1/5.1 and [F3] (§4.1) |
| `thm-luna-map-and-bialynicki-birula-decomposition` | 15 | 3 | Milne 13.39-13.53 |
| `def-split-reductive-algebraic-group` | 16 | def | adjoint / eigenspace interface |
| `lem-connected-groups-of-rank-zero-are-unipotent` | 17 | 2 | Milne 16.60 |
| `lem-reductive-center-radical-and-semisimple-quotient` | 17 | 4 | Milne 12.46, 17.61-17.62, 19.10-19.21 |
| `lem-cartan-subgroups-conjugacy-and-density` | 18 | 4 | Milne 17.43-17.50; density via 17.33 |
| `thm-chevalley-centralizer-radical-and-reductive-centralizers` | 19 | 3 | Milne 17.52-17.59 / S17h |
| `thm-cocharacter-limit-subgroups` | 20 | 4 | Milne 13.28-13.33, 17.60 |
| `lem-homogeneous-curves-and-automorphisms-of-p1` | 21 | 3 | Milne 20.2-20.12 |
| `lem-sl2-structure-and-root-coordinates` | 21 | 4 | explicit 2x2 matrices |
| `thm-weight-subgroups-of-a-torus-action` | 21 | 3 | **repaired** 1.1 ([F3]) (§4.1) |
| `def-roots-and-root-groups-of-a-split-reductive-group` | 22 | def | root groups via cyclic semigroups |
| `thm-rank-one-connected-groups` | 22 | 4 | **escalated** — statement defective for non-reductive G (§7) |
| `thm-split-rank-one-reductive-classification` | 23 | 3 | Milne 20.27-20.32 |
| `thm-root-subgroups-of-a-split-reductive-group` | 24 | 4 | Milne 21.11-21.12 and 21.68 |
| `lem-borel-root-group-opposition` | 25 | 3 | Milne 21.28-21.32 |
| `thm-weyl-group-borel-chambers` | 26 | 4 | Milne 21.1-21.41 |
| `def-root-datum-of-a-split-reductive-group` | 27 | def | well-definedness via 21.41-21.43 |
| `lem-root-coordinate-cells-and-generation` | 27 | 3 | Milne 21.62, 21.77-21.79 |
| `lem-simple-reflection-double-coset-rule` | 28 | 3 | Tits system; Milne 21.44-21.45, 21.69-21.75 |
| `lem-standard-levi-subgroup` | 28 | 3 | Milne 21.88-21.90 |
| `cex-lie-root-system-does-not-record-full-root-datum` (B) | 28 | 3 | divisibility obstruction SL_2 vs PGL_2 |
| `thm-bruhat-decomposition-for-split-reductive-group` | 29 | 4 | **repaired** [F3]/[F4] (§4.1); cells via Bialynicki-Birula |
| `thm-parabolics-and-levi-decomposition` | 30 | 4 | **repaired** [F3] (§4.1) |
| `ex-root-groups-and-bruhat-cells-for-sl2` (B) | 30 | 3 | Verification section |
| `ex-standard-parabolics-in-gl-n` (B) | 31 | 3 | Verification section |

## 3. Checks actually run (all on the current files, after the repairs of §4)

- `node tools/proof-layout.mjs` on all 39 item paths in one command: `39 items, 112 steps, 0 defects`.
- `node tools/tsx-run.mjs tools/precheck.mts` on all 39 paths: `32 checked, 0 failing` (7 definitions have no proof body).
- `node tools/proof-contract.mjs research/...-batch-19.proof-contracts.json --strict`: `0 error(s), 0 warning(s), 39/39` — every citation resolvable, every quote present.
- `node tools/boundary-audit.mjs … --fail-on-contradicted --fail-on-template`: no contradicted dispositions and no template clusters.
- `node tools/citation-fidelity.mjs … --fail-on-missing-quote`: every recorded quote appears in its cited item; **no widening candidates remain** (the one previous candidate on `thm-bruhat-decomposition-for-split-reductive-group` [F3] was dispositioned by repairing [F3]/[F4]; §4.1).
- `node tools/finite-smoke.mjs …`: 0 errors.
- `node tools/risk-report.mjs …`: routed (critical-severity routing rows per item; information for Step 5, no Step-3 action).
- `node tools/content-policy.mjs research/...-batch-19.pages.json` (item mode): `39 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/manifest-deps.mjs research/...-batch-19.pages.json`: `39 item(s), 0 normalized, 0 error(s)`.
- `node tools/coverage-checklist.mjs research/...-batch-19.coverage.json --require-destination`: `2 page(s), 106 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/item-dependency-levels.mjs check --run frontier-40-geometry-braids-rep-27`: **clean** (895 items across 54 pages, maximum level 38) after the relabeling of §4.3.
- `node tools/depsource.mjs --run …`: `0 unresolved` (links to published pages; the remainder to in-run suppliers).
- `node tools/validate-plan.mjs research/plan-spec.json`: OK (the pre-splice NOTE about empty planned item lists belongs to Step 4).
- `node tools/rendercheck.mjs`: no error attributable to this pair (the unparsable title in `lem-cartan-subgroups-conjugacy-and-density` was repaired earlier by quoting it); remaining repo-wide errors are on other pairs' files.
- `node tools/step3-decisions.mjs check --run frontier-40-geometry-braids-rep-27 --phase final`: among this pair's 39 rows only `thm-rank-one-connected-groups` is open (owner-held escalation, §7); the other 38 are closed with receipts recorded against the current closure.

## 4. Repairs made during authoring

### 4.1 Proof-level repairs (no statement edited; scope receipt unchanged)

1. `lem-maximal-tori-extension-conjugacy-and-derived-group` — step 5.1 cited the algebraically-closed-field conjugacy theorem "over $k^{\mathrm s}$" (invalid for imperfect $k$) and cited the schematically-dense-points lemma for a separable-point descent it does not state. Rewritten: conjugate over $k^{\mathrm a}$ by [F2] (maximality over $k^{\mathrm a}$ from (a)); the transporter $X$ is closed, nonempty and, after base change to $k^{\mathrm a}$, isomorphic to $N_G(T)_{k^{\mathrm a}}$; $N_G(T)$ is smooth (new citation `thm-fixed-point-schemes-and-centralizers-of-linearly-reductive-actions`), so the new direct supplier `lem-nonempty-smooth-scheme-finite-separable-point` gives a point over a finite separable extension. Step 2.1 was reduced to the direct maximality argument; the old dep `lem-smooth-finite-type-schemes-have-schematically-dense-rational-points` was removed.
2. `lem-fixed-loci-and-centralizers-of-torus-actions-are-connected` — [F3] reworded from a vague "centre-ish maximal torus behaviour" to the two exact claims used: connectedness of $C_H(S)$ via the $\mathbf G_a$-quotient series, and uniqueness of the maximal torus of a smooth connected nilpotent group via the largest subgroup of multiplicative type (`lem-nilpotent-group-structure-and-maximal-torus-criterion`); step 3.1 now uses that uniqueness directly.
3. `thm-weight-subgroups-of-a-torus-action` — step 1.1 invoked "$\mathfrak g^T=0\Rightarrow$ unipotent" (Milne 16.62) from items that do not state it. It is now proved locally: a nontrivial torus $S$ would produce a maximal torus of $G_{k^{\mathrm a}}\rtimes T_{k^{\mathrm a}}$ whose conjugate containing $T$ puts $S$ in a commutative torus with $T$, forcing $\operatorname{Lie}(S)\subseteq\mathfrak g^T=0$. The direct supplier `thm-borel-and-maximal-torus-conjugacy-over-algebraically-closed-field` was added.
4. `thm-parabolics-and-levi-decomposition` — [F3] claimed "parabolics are connected and self-normalizing" from citations that do not supply it; now cites `thm-solvable-subgroups-and-the-radical-as-borel-intersection` (c), added to deps.
5. `thm-bruhat-decomposition-for-split-reductive-group` — [F3] bundled Bialynicki-Birula with a fixed-locus claim whose only citation was the chamber-Borel bijection. Split into [F3] (Bialynicki-Birula) and [F4] (fixed locus: $(G/B)^{\mathbf G_m}=(G/B)^{T(k)}$ for regular $\lambda$ by Milne 13.51, and $(G/B)^{T(k)}=\{wB\}$ by the chamber-Borel bijection plus simple transitivity); step tags and the source locator were updated.

Earlier repairs retained: the title of `lem-cartan-subgroups-conjugacy-and-density` is quoted; numeric Milne locators were removed from proof-step text (they remain in `sources.locators`), because a bare `NN.MM` inside a step is read as a step citation by the contract checker.

### 4.2 Dependency rows synchronised to the item files

- From the previous pass: `lem-root-datum-combinatorics` (+`prop-weyl-length-equals-positive-root-inversion-number`, `def-length-and-longest-element-of-a-finite-weyl-group`), `lem-fixed-loci-and-centralizers-of-torus-actions-are-connected` (+`lem-lie-functor-exactness-fixed-points-and-generation`), `thm-root-subgroups-of-a-split-reductive-group` (+`lem-sl2-structure-and-root-coordinates`), `ex-standard-parabolics-in-gl-n` (+`lem-sl2-structure-and-root-coordinates`).
- Added by the §4.1 repairs: `lem-maximal-tori-extension-conjugacy-and-derived-group` (+`lem-nonempty-smooth-scheme-finite-separable-point`, +`thm-fixed-point-schemes-and-centralizers-of-linearly-reductive-actions`, −`lem-smooth-finite-type-schemes-have-schematically-dense-rational-points`), `thm-weight-subgroups-of-a-torus-action` (+`thm-borel-and-maximal-torus-conjugacy-over-algebraically-closed-field`), `thm-parabolics-and-levi-decomposition` (+`thm-solvable-subgroups-and-the-radical-as-borel-intersection`).
- `manifest-deps` reports 0 errors and the item-file/manifest dep sets are identical for all 39 items.

### 4.3 Dependency levels recomputed

The batch-13/14/15/18 suppliers were re-labelled by their own authors after this pair's first labels were written (all chains through batch 18 moved down by one). All 39 items and their manifest rows were relabelled to the values recomputed from the current dependency graph (`dependencyLevels`): levels 0-6 unchanged; `lem-nilpotent` 14→13, `lem-fixed-loci`/`thm-solvable` 15→14, `lem-maximal-tori`/`thm-luna` 16→15, `def-split-reductive` 17→16, `lem-connected-rank-zero`/`lem-reductive-center` 18→17, `lem-cartan` 19→18, `thm-chevalley` 20→19, `thm-cocharacter` 21→20, `lem-homogeneous`/`lem-sl2`/`thm-weight` 22→21, `def-roots`/`thm-rank-one` 23→22, `thm-split-rank-one` 24→23, `thm-root-subgroups` 25→24, `lem-borel-root-group-opposition` 26→25, `thm-weyl` 27→26, `def-root-datum`/`lem-root-coordinate` 28→27, `lem-simple-reflection`/`lem-standard-levi`/`cex` 29→28, `thm-bruhat` 30→29, `thm-parabolics`/`ex-root-groups` 31→30, `ex-standard` 32→31. The relative authoring order of the dispatch is preserved; `item-dependency-levels check --run` is clean.

## 5. Step 3a notes carried into authoring

1. `local_addition` flag inconsistency: left as scaffolded (bookkeeping only; `scopeHash` does not read the flag). Recorded for Step 4.
2. "Isomorphism of root data" was undefined; it is now stated explicitly inside `def-abstract-root-datum-and-its-weyl-group` and used in `cex-lie-root-system-does-not-record-full-root-datum`; the obstruction (divisibility of the root in the character lattice, index of the coroot lattice) is spelled out in step 2.1 of that item.
3. In-run supplier state: **resolved** — every supplier row of the earlier open-obligation table is now authored and reconciled (§6); no consumer decision remains escalated on that ground.

## 6. In-run supplier reconciliation (final state)

All 15 in-run suppliers that the scaffold flagged as unfinished are now on disk and their statements were read: `thm-borel-and-maximal-torus-conjugacy-over-algebraically-closed-field`, `thm-maximal-tori-in-smooth-connected-solvable-groups-are-conjugate`, `thm-quotient-by-a-borel-subgroup-is-complete`, `lem-borel-subgroup-is-the-stabilizer-of-a-maximal-flag`, `thm-lie-kolchin-for-smooth-connected-solvable-groups`, `lem-smooth-trigonalizable-group-normal-series-refinement`, `lem-central-ga-subgroup-of-smooth-connected-unipotent-group`, `def-unipotent-algebraic-group`, `lem-unipotent-and-diagonalizable-intersection-is-trivial`, `lem-derived-subgroup-properties`, `lem-representations-of-diagonalizable-groups-are-sums-of-eigenspaces`, `lem-multiplicative-type-groups-are-linearly-reductive`, `thm-trigonalizable-group-has-normal-series-with-vector-quotients`, `thm-unipotent-groups-have-central-series-with-subgroups-of-ga-quotients`, `thm-borel-fixed-point-for-complete-schemes`, plus the page-level suppliers `thm-homogeneous-space-for-smooth-affine-group`, `def-algebraic-group-action-and-scheme-theoretic-stabilizer` and `lem-adjoint-representation-of-an-affine-group-scheme`.

Each of the 47 per-step citation rows to these suppliers was checked against the landed statement (hypotheses, field assumptions, AC and conclusion clause). All but three uses matched; the three exceptions were repaired inside this pair: `thm-weight-subgroups-of-a-torus-action` 1.1, `lem-maximal-tori-extension-conjugacy-and-derived-group` 2.1/5.1 and `thm-parabolics-and-levi-decomposition` [F3] (§4.1). The earlier absent-supplier obligation is therefore cleared; no consumer of an in-run supplier remains in the "supplier unfinished" state.

## 7. Escalation (owner-held): `thm-rank-one-connected-groups`

**Finding.** The promised statement is false for non-reductive $G$. Its extra clauses — "$\mathfrak g=\mathfrak t\oplus\mathfrak g_\alpha\oplus\mathfrak g_{-\alpha}$ with $\dim\mathfrak g_{\pm\alpha}=1$" and "$G\to\operatorname{Aut}(G/B)=\mathrm{PGL}_2$ surjective with kernel $Z(G)$" — hold for reductive $G$ (Milne 20.22, stated under the standing reductive hypothesis of Ch. 20f, and Milne 20.33 for the classification), but fail for the connected nonsolvable group $G=\mathrm{SL}_2\ltimes k^2$ (standard representation, char $\neq2$): $R(G)=k^2$, $G/R(G)=\mathrm{SL}_2$ has semisimple rank 1, $T$ the diagonal torus is maximal and lies in exactly the two Borel subgroups $k^2\rtimes B_0$, $k^2\rtimes B_0^-$, yet $Z(G)=1$ while the kernel of $G\to\operatorname{Aut}(G/B)=\mathrm{PGL}_2$ is $k^2\times\mu_2$ of dimension 2, and $\mathfrak g=\mathfrak{sl}_2\oplus k^2$ is not $\mathfrak t\oplus\mathfrak g_\alpha\oplus\mathfrak g_{-\alpha}$. Milne 20.16, the source of the equivalence (a)-(d), is stated for connected nonsolvable $G$ and its (c)$\Rightarrow$(d) proof passes to $G/R(G)$ before computing the kernel, so it does not support the extra clauses. The equivalence, $G=B\sqcup UnB$, $G/B\cong\mathbf P^1$ and surjectivity of the map to $\mathrm{PGL}_2$ are true as stated.

**Confidence.** High; the witness is elementary and Milne's own text separates 20.16 (nonsolvable) from 20.22 (reductive).

**Remedies** (owner decides; no statement was edited by this dispatch). (i) Restrict the extra clauses to reductive $G$ — then kernel $Z(G)$ is Milne 20.22 and the root-space decomposition is the standard one. (ii) Restate for general $G$: kernel the preimage in $G$ of $Z(G/R(G))$, and Lie algebra the radical plus the decomposition of $\mathfrak g/\mathfrak r$. Either remedy needs coordinated proof work: [F1]'s "simply transitively" is false for $G$ with nontrivial unipotent radical (in the witness $N_G(T)/T$ is infinite with open stabilizers), step 2.1's (b)$\Rightarrow$(c) "the quotient $G/B$ is a homogeneous curve" is circular and should follow Milne 20.16's proof via the Borel variety and 20.12, and step 4.1's kernel computation must match the chosen formulation. Consumer `thm-split-rank-one-reductive-classification` uses only the true clause (the isogeny $G/R(G)\to\mathrm{PGL}_2$), so it is unaffected by either remedy; confirm after the owner's decision.

## 8. Published-content concerns

No confirmed defect was found in a published item consumed by this pair. Two standing observations: (i) the naming hazard recorded by the scaffold — the published `def-character-and-cocharacter-lattices-of-a-torus` concerns a compact Lie torus and is deliberately not a dependency here — remains valid; (ii) the published `cex-same-complex-lie-algebra-with-distinct-global-groups-sl-two-and-pgl-two` is not duplicated: this pair's counterexample distinguishes the lattice root data over an arbitrary field of characteristic ≠ 2 and states the Lie-algebra coincidence only as one half of the separation.

## 9. Handoff

- Completed IDs: all 39 owned IDs listed in §2 have item files, contract entries, both pages, coverage/manifest rows and receipts. 38 of 39 item decisions are closed (`accept`/`repaired`); `thm-rank-one-connected-groups` is recorded `escalate` for the owner-held statement defect of §7.
- Checks actually run: the list in §3, all on the current content; the five §4.1 repairs and the §4.3 relabeling were made before the final run of `proof-layout`, the strict proof contract, citation fidelity and the level check.
- Added suppliers (dependency rows added to this pair's manifests): §4.2; all are existing published or earlier in-run items.
- Open obligations: (1) the §7 escalation — the owner must choose a remedy for the statement of `thm-rank-one-connected-groups`; the item's proof then needs the corresponding repairs and a fresh receipt. (2) Receipt freshness: receipts are hashed over the transitive closure; if any other writer changes a dependency of this pair before the Step 3 gate, the orchestrator's pre-gate recertification pass (CLAUDE.md §21) must refresh them (the 38 closed rows were recorded against the content on disk at the end of this dispatch). (3) Nothing else: no missing item, contract, page or report row.
