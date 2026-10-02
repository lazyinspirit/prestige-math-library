# Frontier 37 owner 30: B6 carrier integration

Updated 2026-10-01. This report first reconciled carrier data for ten selected
B6 linear-system, canonical, and ramification targets, then recorded the
explicitly released item repairs and their final carrier synchronization. It
changes only the assigned B6 item bodies, B6 page/proof carriers, and this
exclusive report; no receipt, scope, baseline, engine file, global dependency
level, or Git state was changed.

## Reconciled targets

| Item | Current item SHA-256 | Direct dependencies |
|---|---|---:|
| `def-complete-linear-system` | `bd038bb6f6d11cc26260784bd50db8cb3114d37613c3741d1ac3fb1ce72fe462` | 12 |
| `def-base-point-linear-system` | `2e168ebd37ea643e07cb8466ecb2a68e6f04c9d2eaac0df2442ef7211aaf1e2d` | 13 |
| `thm-base-point-free-linear-system-morphism` | `187839077111fe7208ac21ed08c507dd2f65fd802d5b020152dc84cccaf029bd` | 20 |
| `def-canonical-line-bundle-curve` | `99160ed4cfe0e30a8ca26240c11eeb69bf4f7865e12ba09dfae439b5c6d9d15d` | 28 |
| `lem-rational-differential-divisor-well-defined-class` | `80a317dfe977c969e822d569181bdfeca20f9bf96e8a3bc610e1cac5636e63dc` | 22 |
| `thm-degree-positive-line-bundle-sections-zero-bound` | `b6706cfa93bd98bb5af1bbba4073a39521478899e598b72571e5d085e6b348ec` | 14 |
| `def-gonality-curve` | `1e18a15b63f7dc9c553793883140841229c3602b8843ae03cad2dcceb2a563b0` | 7 |
| `lem-effective-divisors-sections-mod-scalars` | `aa6f9ef1cb73bca40e07b4f910e51de2f7de672221502a5a1916e3fc1e19c11b` | 15 |
| `def-ramification-and-branch-points` | `910c63c298b774a8d654590a7edee2a6149486f3ba4c48033c14e5b200ad8e3b` | 22 |
| `def-different-divisor-curve-map` | `35e22d4a5f51a0dc8146844b62e6a6c1e1d15df3495772caf907e339d3f7aa8e` | 11 |

The pages manifest now states the current hypotheses and claim boundaries,
including the Choice/Dependent Choice routes, the AC conditions for
finite-dimensional projective structures, the frame-based canonical
differential order, scheme-theoretic hyperplane pullbacks, and the distinction
between index and differential ramification. Each manifest `deps` array was
replaced with the ordered list parsed from that item's YAML frontmatter through
`tools/pathway-lib.mjs`'s `yaml()` parser. The existing
`dependency_level` values were preserved for the run-level reclose.

The already synchronized divisor, Riemann--Roch, Cartier/Weil, delta-invariant,
and rational-map-counterexample manifest rows were inspected and preserved.
Their dependency arrays match the current YAML frontmatter.

## Proof-contract reconciliation

Definitions retain empty `citations`, `derivations`, and `routine_steps`
arrays. The four proof-bearing selected entries now map the current facts,
source uses, and numbered steps for
`thm-base-point-free-linear-system-morphism`,
`lem-rational-differential-divisor-well-defined-class`,
`thm-degree-positive-line-bundle-sections-zero-bound`, and
`lem-effective-divisors-sections-mod-scalars`.

I refreshed exact source-section quotations in B6 consumer contracts wherever
the selected item bodies had changed, and replaced all 27 former `PENDING`
citations to present batch-5 suppliers with quotations from their current
authored source sections. I updated ten boundary records whose evidence still
described the old supplier obligations or old assumptions. The proof-contract
note now records the actual quotation scope.

A read-only comparison using `tools/facts-block.mjs` found no stale quotations
for the selected target sources or the already synchronized divisor,
Riemann--Roch, Cartier/Weil, delta-invariant, and rational-map-counterexample
sources. It found zero remaining `PENDING` citations. A YAML-parser comparison
found all ten selected manifest dependency arrays equal to the item frontmatter
arrays. The definition contract arrays remain empty.

Initial ten-target carrier snapshot, before the released item repairs:

| Carrier | SHA-256 |
|---|---|
| `research/frontier-37-owner-30-batch-6.pages.json` | `ae53a09ceccbf3b1532df8a19ea6d6b294e86bc2d77f7c23cd5517b6f655d09c` |
| `research/frontier-37-owner-30-batch-6.proof-contracts.json` | `bcc7069a05f00b54e5be47c73f3e1d406c5967136575027230e11f844aaac643` |

No item gate, receipt, precheck, rendercheck, or strict proof-contract check was
run. The carrier drain is ready for the root's actual-claim inventory reclose;
one targeted check remains for after the root confirms that B6 item writers are
stable. The separate singular-cubic/quartic repair lane has drained, and its
two final rows are included below.

## Initial independent review finding (repaired below)

Root released review of the stable items while the singular-cubic
counterexample and plane-quartic example remain in flight. On the current
`ex-projective-line-divisors-linear-systems` body (SHA-256
`74788380927738f6f7d3d408dd414cb6022203251cde4c205b6833720c1a9c66`), I
verified one claim-boundary defect: the Statement and conclusion assert that
the map associated with `L(d[∞])` is the degree-`d` Veronese embedding without
restricting `d`. The proof only constructs and identifies this map for `d≥1`.
The current published `def-veronese-map` and
`lem-veronese-map-well-defined-closed-immersion` both state their claims for
`d≥1` (current SHA-256 values `2f1da3e389160a6786035a18495e73b033096972f1836df07dcc8c3ce4be2924`
and `5303caae6e9670da7c98918edfc7a7193d8816a1c5aac807a966a2c0e88e01eb`).
At `d=0`, the complete system gives the constant map `P¹→P⁰`, which is not an
embedding; at `d<0`, `L(d[∞])=0` and there is no associated projective
morphism. Root released the exact repair: the Veronese embedding is asserted
only for `d≥1`, while `d=0` is the constant map to `P⁰` and `d<0` has no
associated projective morphism.

I read the current body of
`lem-projective-line-divisors-classified-by-degree` (SHA-256
`e29c34595f41d60460a2c8d882db2948db00379d5ec9ea3649d9142d9c9aff4e`) and
confirmed its closed-point degree and divisor route used by the example. The
P¹ example now names the current Cartier/Weil interface and its AC-to-DC route.

## Additional released repairs and final drain

The root released five further item repairs: `def-arithmetic-genus-proper-curve`,
`def-nonconstant-morphism-curves-degree`, `ex-hyperelliptic-curve-double-cover`,
`thm-plane-curve-arithmetic-genus`, and the P¹ example above. The singular-cubic
and plane-quartic example writer also reported final stable bodies. Their final
B6 rows were synchronized as follows.

| Item | Current SHA-256 | Parsed dependency count |
|---|---|---:|
| `ex-projective-line-divisors-linear-systems` | `3bae91daec377ab4ca70341a5afe9e99575ac4badd723dec6d1039914dc4336f` | 19 |
| `def-arithmetic-genus-proper-curve` | `5e6b28ee56efca97b3fb8330fcf6158c8aa4e095164ad443861843cbe5c7b841` | 19 |
| `def-nonconstant-morphism-curves-degree` | `80ca1e333533aa41f64fead7954b6fee0a7ed8f3bd1316cbcbb8ec7d2a179322` | 19 |
| `ex-hyperelliptic-curve-double-cover` | `d19162feff48196645b9ac87e6ae8b8c1b053a38ff13f33c443a8c3050f68585` | 32 |
| `cex-rational-map-singular-curve-not-extend-uniquely` | `abcc22407739b0e697df763ac95f248503b7c593c8e5b397289c09699b7c20e3` | 26 |
| `ex-plane-quartic-genus-three-smooth` | `01f48a5afd0e960d40a87ac18eed6b866c9f0c127372e5d0f0ce30d5b1f3f281` | 27 |
| `thm-plane-curve-arithmetic-genus` | `729254bc78ef35def6fea92373a23acbb7f82d7983b39709ffc3223acd54126e` | 12 |

The arithmetic-genus definition and plane theorem now cover integral
one-dimensional proper schemes without a geometric-integrality hypothesis;
the plane theorem explicitly assumes AC in Statement, Given, and metadata, and
no longer infers geometric integrality from integrality. The morphism-degree
definition gives the exact closed-fibre formula
`Σ e_p[κ(p):κ(q)] = deg(f)` using DVR composition length, and the two
hyperelliptic local calculations identified by the reviewer have been
corrected. Proof-contract entries were regenerated for the changed examples
and plane theorem; both definitions retain empty citation, derivation, and
routine-step arrays. Stale source quotations for changed statements were
refreshed.

The final read-only comparison found all 17 reconciled manifest dependency
arrays equal to YAML frontmatter parsed by `tools/pathway-lib.mjs`, no missing
body-link dependencies, no stale quotations for changed sources, and zero
`PENDING` citations. The independent reviewer recaptured the four released
repair bodies and reported no remaining proof concern. No receipt or strict
gate was run; the root's scope/current-stability release remains the receipt
and targeted-check gate.

| Final carrier | SHA-256 |
|---|---|
| `research/frontier-37-owner-30-batch-6.pages.json` | `89b4f52bfd32b6ed593214d48cf82d7dfbee4b6ad309bd25f7002e83bc7b7871` |
| `research/frontier-37-owner-30-batch-6.proof-contracts.json` | `45fdcb3c687671b6c649b71d20b221c5fd87cf2d01fff539030da1c31e914ed5` |

## Cross-batch dependency ledger audit (in progress)

On 2026-10-01, I read `tools/frontier-dependency-ledger.mjs` in full and used
its exported `collect()` function for a read-only inventory. At that snapshot,
all 30 consumer-batch inputs existed; the merged view had 695 declared edges,
142 edges with no review row, and 35 orphaned legacy reviews. The missing rows
were concentrated in batches 3 (1), 6 (27), 7 (54), 8 (53), and 21 (7).
Root confirmed the ledger is an edge-review record, not a mathematical
certificate, and that current source-use checks may proceed without requiring
an upstream closed API receipt. B6/B7 source rewires remain in flight; their
affected rows will be reviewed only after those source writers drain.

I read the full current proofs of `ex-pure-braid-generators-as-point-pushes`
and `lem-standard-pure-braids-generate-each-free-kernel`, then read the
relevant current mapping-class, boundary-map, point-pushing, braid
identification, and evaluation-boundary supplier interfaces. The seven
previously unreviewed batch-21 item edges now have evidence in
`research/frontier-37-owner-30-batch-21.cross-batch-dependencies.json`:

- `ex-pure-braid-generators-as-point-pushes` →
  `def-boundary-map-from-point-motions-to-punctured-disk-mapping-classes` and
  `thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk`;
- `lem-standard-pure-braids-generate-each-free-kernel` →
  `def-boundary-fixed-mapping-class-group-of-a-punctured-disk`,
  `def-boundary-map-from-point-motions-to-punctured-disk-mapping-classes`,
  `def-point-pushing-homomorphism-for-a-puncture`,
  `thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk`,
  and `thm-the-evaluation-bundle-boundary-map-is-an-isomorphism-for-the-disk`.

The exact consumers use the suppliers in Facts [F7]–[F9] and proof steps 1.2,
2.1–2.3, 3.1, 4.1, and 5.1; the relevant interfaces and signs match. The
consumer and supplier Step-3 decisions were current and confidence 1 at audit
time. The batch-21 input now covers all 21 current edges; the snapshot has 135
edges without reviews and 35 orphaned legacy rows remaining. These are audit
counts, not a completed frontier gate; the remaining current edges and the
orphan rows still require reconciliation after the active B6/B7 source drain.

I also read the full current proof of `thm-logarithmic-unit-image-is-a-full-lattice`
and the current definition of `def-minkowski-embedding-of-a-number-field`.
The consumer's Fact [F6] uses the supplier's unscaled real-coordinate
embedding, and steps 2.1 and 3.1 use precisely its lattice and coordinate
conventions. Both Step-3 decisions were current and confidence 1. The missing
batch-3 edge is now recorded as verified in
`research/frontier-37-owner-30-batch-3.cross-batch-dependencies.json`; a fresh
`collect()` snapshot now has 134 declared edges without reviews and 35
orphaned legacy rows. No supplier or consumer claim was edited.

I checked every orphan row's current batch ownership with `loadStep3()`. All
35 were stale `open` records whose consumer and supplier now share the same
batch home: four batch-6 pairs, two batch-7 pairs, and 29 batch-8 pairs. The
dependencies remain internal to their respective batches, so I removed only
those non-cross-batch input rows rather than recording them as removed claims.
After the B7 source rewire appeared on disk, the current `collect()` snapshot
had 694 edges, 133 edges without reviews, zero orphan reviews, and all 30
consumer-batch inputs present. Batch 3 and batch 21 have no unreviewed edges.
The B6 source rewires and the changed B7 counterexample edge remain pending
final source drain and exact edge review.

The B7 counterexample rewire then drained at item SHA-256
`70cfe5c8f7f689a9e0010676faff1420248c9a1eb17851be24c4286703b8bfca`. I read
its full current proof and the full current proof of
`thm-plane-curve-arithmetic-genus`. In the new edge, consumer Fact [F9] cites
the arithmetic-genus formula and step 3.1 applies it after steps 1.2, 1.3 and
2.3 establish smoothness, properness, dimension one and integrality of the
Fermat quartic. The B7 input now records that edge as `verified`. It records
the prior B6 `def-arithmetic-genus-proper-curve` edge and prior B8
`cor-genus-degree-smooth-plane-curve` edge as `removed`: the current proof no
longer declares or uses those direct suppliers. For the B8 edge, the current
F9/step 3.1 route replaces the old optional-quartic genus calculation.

The next current `collect()` snapshot has 692 edges, 130 edges without review
rows, zero orphan reviews and all 30 batch inputs present. Active B6 source
edits changed the current edge set after the previous snapshot; current
per-batch missing counts are B6 23, B7 53 and B8 54, with batches 3 and 21
fully covered.

The B8 Riemann--Hurwitz example then drained at item SHA-256
`283734f416e49b749f6f6d0c3ebc1143c3f5c61f5ec9fdecf88c4e060907df0c`. I read
its current proof and the current genus-zero theorem. The new B8-to-B7 edge is
verified at Fact [F20], steps 4.2 and 5.1: the r=1 case has genus zero and a
rational point, hence a degree-one divisor, so the theorem gives
`C_h ≅ P¹_k`. I refreshed the existing finite-proper and local-DVR edge
evidence against the current F17/F9 proof route, and recorded the old
B8-to-B6 conic-example edge as removed. The current `collect()` snapshot now
has 80 edges without reviews, zero orphan reviews and 30/30 inputs; the four
remaining B8 missing rows are among the active B6 supplier rewires.

The B8 Riemann--Hurwitz row update added three verified current edges and one
removed edge for the drained source rewire; its new genus-zero supplier is
supported by the current F20/step 4.2/step 5.1 route. The latest `collect()`
snapshot remains at 692 edges and 80 without reviews, with zero orphan reviews
and no unreviewed batches. Missing rows are now concentrated in batches 6
(23), 7 (53), and 8 (4); batches 3 and 21 are fully reviewed.

I then reused the B6 independent reports and the B7 mathematical and
independent review reports for the remaining stable B6 and B7 consumers. I
added 19 verified batch-6 edges and 53 verified batch-7 edges, each naming the
current consumer/supplier bytes and the exact fact or step that uses the
supplier. The one exception remains the open
`def-hyperelliptic-curve` → `thm-h0-structure-sheaf-proper-curve` edge: the
target declares it, but the current proof body does not make an H⁰(O_C)=k use.
The edge evidence identifies the review reports and recorded confidence-1
receipts; root owns any hash-bound refresh after the final source drain.

Current `collect()` reports 692 edges, eight edges without review rows, zero
orphan reviews and all 30 batch inputs present. The eight pending rows are
four B6 consumers of B5 suppliers still being rewritten by the B6 owner, and
four B8 consumers of those same moving B6 suppliers. After that source drain,
the batch-6 lane also needs five removed-edge records: three old B6→B7
finite-dimensionality uses and the former B6→B8 quartic-genus use.

## Final cross-batch ledger reconciliation

After the B6 finite-dimensionality rewires, the B7 plane-genus rewire, the B8 Riemann–Hurwitz rewire, and the final quartic source drain, I reconciled the consumer-batch inputs against `tools/frontier-dependency-ledger.mjs` and its `tools/pathway-lib.mjs` YAML parser. The current snapshot has all 30 batch inputs, 652 current declared cross-batch edges, a review row for every declared edge, no unreviewed batch, and zero orphan reviews. The collector also retains 43 review-only rows whose exact current declaration set is empty; all 43 are now marked `removed` at the ledger-edge level. For the 18 rows changed in this pass, each prior status and evidence string is preserved in the replacement evidence together with the current consumer hash and the exact empty declaration finding. This records edge history, not a change to any mathematical claim.

The four formerly missing B6 edges now have current use evidence:

- `def-base-point-linear-system` → `thm-line-bundle-rational-section-cartier-divisor`;
- `def-complete-linear-system` → `def-invertible-sheaf-of-cartier-divisor`;
- `thm-base-point-free-linear-system-morphism` → `thm-line-bundle-rational-section-cartier-divisor`;
- `ex-plane-quartic-genus-three-smooth` → `def-weil-divisor-normal-noetherian-scheme` (final consumer SHA-256 `6371fc107d40d353ddfcdfae62563c45708636963a5330e2e5525581ad6f0e4f`; the F9/step 6.1 use is recorded in the batch-6 input).

The four formerly missing B8 edges now have current use evidence: `def-hyperelliptic-curve` → `def-complete-linear-system`, `ex-genus-one-rr-degree-positive` → `def-complete-linear-system`, and `ex-plane-cubic-canonical-trivial` → both `def-complete-linear-system` and `thm-base-point-free-linear-system-morphism`. The cubic morphism route is tied to its current confidence-1 independent review. The declared `def-hyperelliptic-curve` → `thm-h0-structure-sheaf-proper-curve` edge remains honestly `open`: the body declares it, but the proof has no actual H⁰(O_C)=k use.

The three old B6-to-B7 finite-dimensionality edges are recorded `removed` after the current items replaced that route with local Noetherian/coherence and proper-cohomology finiteness. Earlier source-rewire evidence remains in the B7 and B8 inputs for the two removed B7 counterexample edges and the removed B8 conic-example edge. The merged ledger is root-owned; this lane updated only consumer-batch inputs and this report, and did not run a gate or rewrite the merged ledger.
