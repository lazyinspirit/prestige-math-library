# Frontier 41 (HA + DT) — batch 19 Step 1 notes

**Owner:** beta, batch 19. **Pair:** `isotopy-extension-and-embedding-theory-beyond-whitney` /
`isotopy-extension-and-embedding-theory-beyond-whitney-examples` at orders 569/570,
differential topology (DT-27). This file records scaffold decisions and evidence, not
Step-3 mathematical approval.

## Scope, plan and design

I read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the binding
`research/frontier-41-ha-dt-29-owner-authoring-direction.md`, the batch task
`research/frontier-41-ha-dt-29-beta-19.task.md`, the design at
`research/plan-differential-topology-track.md` §DT-27 (line 1376), the §11 binding
repairs (line ~2306), §12.1 (not-supplied orientation leaves), §12.4 (exact `requires`
arrays), §12.5–§12.6 and the §10 choice ledger, `research/plan-spec.json` orders
569/570, the batch-13/14/17/18 artifacts as format and evidence models, and the
published statements (not only the titles) of every supplier consumed. The owner
direction's DT clauses are respected: no planned supplier is treated as published, all
dimension and regularity restrictions are printed, and every discovered source or route
problem is recorded below rather than waved through.

Conflicts and sharpenings, all resolved in favour of the binding plan text:

1. **Item 11 split (plan §11, mandatory).** The design's single row
   `cor-a-generic-proper-immersion-is-an-embedding-when-n-is-greater-than-two-m` is
   split into `lem-a-self-transverse-immersion-has-no-double-points-when-n-is-greater-than-two-m`
   and `cor-a-proper-injective-immersion-is-an-embedding`. The optional genericity
   corollary is **not retained**, exactly as §11 permits: a density statement needs
   multijet/parametric self-intersection genericity for maps into manifolds, which is
   not scaffolded in this run; the deterministic double-point and embedding-upgrade
   claims are all retained. The corollary consumes the published DG proposition
   `prop-a-proper-injective-immersion-is-a-smooth-embedding` rather than reproving it;
   this is recorded as an inherited citation, not a duplicated proof.
2. **Haefliger–Weber remark (§12.1, mandatory).** The design's item 15 is implemented as
   `rem-metastable-embedding-classification-requires-additional-deleted-product-machinery`
   with `proved_here: false`, `provenance.proof: not-supplied`, `verification.precheck: n/a`
   and an `external_dependency` block. §12.1 makes it an orientation leaf: **no item of
   this batch depends on it** (verified: it appears in no `deps` array).
3. **Design B item 3 substituted (recorded conflict).** The design asks for
   `cex-regularly-homotopic-knots-need-not-be-isotopic-as-embeddings` — a pair of circle
   embeddings in R^3 that is regularly homotopic but not isotopic. The regular-homotopy
   half reduces to a formal-data computation, but every provable non-isotopy witness for
   circle embeddings in R^3 uses knot-theoretic invariants (the trefoil complement group,
   Alexander-type invariants) that are **not in this run's closure and belong to the
   braid/knot track** (frontier-40 braid work owns knot theory here; even the library's
   torus-link example defines the trefoil but does not prove it is knotted). Rather than
   mint an unprovable example or invent a knot-theory chain outside the pair's scope, the
   batch implements the same phenomenon in the provable instance
   `cex-the-reflected-sphere-embedding-is-regularly-homotopic-but-not-isotopic-to-the-standard-one`:
   the standard inclusion S^2 -> R^3 and its reflection are regularly homotopic (DT-26's
   Smale classification, consumed as an in-run item; pi_2(SO(3))=0) but not isotopic
   (Hirsch Exercise 7(a): an isotopy would extend by this page's own isotopy extension
   theorem to an ambient isotopy whose time-one map would restrict to a reflection of S^2,
   contradicting orientation preservation on the invariant ball). The design's scope
   “regular homotopy is strictly coarser than isotopy of embeddings” is preserved;
   the S^1-knot instance is reported to the owner as a cross-track prerequisite rather
   than claimed here.
4. **Design item 12's “stable range” made precise.** The disjunction proposition is
   stated for a self-transverse immersion of a closed m-manifold, m >= 3, into a
   2m-manifold: the range in which the two branches are complementary and the clean
   Whitney disk exists (Wall §6.3). The case n > 2m is not a cancellation statement at
   all and is handled by the split item 11 (no double points); no metastable-range
   cancellation is claimed.
5. **Order of design items 12 and 13 swapped.** The definition of the primary double
   point obstruction now precedes the disjunction proposition, because the proposition's
   pairing clause consumes the oriented count term. The design's numbering is a list, not
   an order of construction; the swap is recorded here.
6. **Design source register: dead plan URLs, recovered access points.** The plan's
   registered URLs for Hirsch (`luis.impa.br/.../Hirsch_DifferentialTopology.pdf`) and
   Wall (`people.math.ethz.ch/.../Wall-Differential-Topology.pdf`) both return HTTP 404
   as of 2026-10-05. Alternate-location recovery succeeded on the first retry: complete
   full texts with text layers were obtained from Internet Archive Wayback Machine
   snapshots (Hirsch, 230 printed pages; Wall, 352 pages) and read at the exact design
   locators (Hirsch Ch. 8 §1 pp. 177–183 with Exercises pp. 182–184; Wall §§6.2–6.4
   pp. 169–192). The plan's Skopenkov `/abs/` link is an abstract landing page; the full
   text was read at the `/pdf/` access point. Attempt histories are recorded in the
   coverage file's `recovery_attempts`.
7. **Design source register: Juhasz not retrievable; covered by equivalent treatments.**
   The plan's source register and §7 locators also name Juhasz, *Differential and
   Low-Dimensional Topology*, Ch. 1 §1.3 (pp. 13–16) and Ch. 2 §2.2 (pp. 38–42). The
   Cambridge Core copy is login-gated (publisher preview only), no free complete copy was
   found in the permitted searches, and I did **not** inspect it. The two results those
   ranges were to support — isotopy extension and the Whitney trick — are covered in this
   batch by the fetched full texts of Hirsch §8.1 (the proof the source register itself
   points to), Wall §6.3, Chaidez 2.38–2.39 and the UCR hand-out; the harvest below lists
   those headings with dispositions. Recorded as a source-descriptor conflict; no
   harvested result of this batch rests on an unread source.
8. **Item-level page edges beyond the A page's §12.4 `requires` array.** The A page's
   exact array names DT-25, DT-22 and three DG pages. Two item-level edges go further:
   the double point obstruction definition consumes two items of the earlier in-run page
   `intersection-pairings-self-intersection-and-euler-classes` (order 531), and the B-page
   counterexample consumes DT-26's Smale classification theorem (order 567). Both are
   earlier in-run pages, so there is no forward or circular dependency; item-level
   dependencies beyond the page-level `requires` array are established practice in this
   run (batch 18 consumes AT and DG items beyond its array). Both edges are recorded in
   `...-batch-19.cross-batch-dependencies.json` and flagged for the owner as possible
   future additions to the array.

## Construction-time mathematical content

The A page carries 19 items: the 16 design rows (one split into two, so 17 rows) plus
two local prerequisites; the B page carries the 4 design rows plus one local lemma.

Isotopy extension (design items 1–8):
1. `def-smooth-isotopy-of-embeddings-diffeotopy-and-ambient-isotopy` fixes the three
   notions and the track/support conventions, and reserves “regular homotopy” for
   immersions (the sources call regular homotopies isotopies in places).
2. `lem-embedding-isotopy-has-a-well-defined-velocity-field-along-its-image` proves the
   track is a closed embedded submanifold (compact source, proper injective immersion
   criterion) and that the transferred velocity is well defined and smooth along it.
3. `lem-an-isotopy-velocity-field-extends-over-a-tubular-neighbourhood` extends the
   horizontal velocity over a tube, with the boundary-stratum tangency and the
   support/relative clauses that the theorem needs.
4. `lem-compactness-allows-a-cutoff-to-produce-a-compactly-supported-time-dependent-field`
   uses compactness of the track, a smooth cutoff in space and a bump in time so that the
   field is compactly supported and stationary near the ends.
5. `lem-the-extended-time-dependent-field-has-a-global-time-one-flow` is the completeness
   step, consuming the published compactly-supported evolution theorem.
6. `thm-isotopy-extension` assembles the three steps into the compact main case, the
   relative/neighbourhood form, the boundary-stratum form and the general form obtained
   by clamping time; the identity H_t o F_0 = F_t is proved by ODE uniqueness.
7. `cor-isotopic-embeddings-have-diffeomorphic-complements` records the complement and
   extension-of-embeddings consequences (Hirsch 1.5).
8. `cor-tubular-neighbourhoods-are-unique-up-to-ambient-isotopy` upgrades the published
   germ-uniqueness of tubes to an ambient isotopy via the theorem of this page.

Double point and embedding theory (design items 9–16):
9. `lem-the-diagonal-of-a-smooth-manifold-is-a-closed-embedded-submanifold` (local
   prerequisite) supplies the embedded diagonal used by the self-transversality
   definition and the transverse-preimage dimension count.
10. `def-self-transverse-immersion-and-double-point-locus` fixes the double point locus
    in M x M minus the diagonal, the double point set, the branch pairs and the local
    sign convention with the parity-of-m stipulation.
11. `lem-double-point-locus-has-expected-dimension-two-m-minus-n` applies the transverse
    preimage theorem, with the negative-dimension case empty.
12. The split lemma `...has-no-double-points-when-n-is-greater-than-two-m` and the
    corollary `cor-a-proper-injective-immersion-is-an-embedding` (consuming the published
    DG criterion) implement plan §11 without the optional genericity clause.
13. `lem-a-double-point-of-a-self-transverse-immersion-has-two-disjoint-embedded-sheet-disks`
    (local prerequisite) supplies the two complementary branch disks and the sign
    identification used to apply the Whitney-trick machinery.
14. `prop-whitney-disjunction-removes-algebraically-cancelling-double-points-in-the-stable-range`
    removes a cancelling pair by a regular homotopy and iterates over a finite pairing;
    the hypotheses are the DT-22 ones (opposite signs, null-homotopic Whitney circle /
    equal labels, clean framed disk, sheet dimension at least three).
15. `def-primary-double-point-obstruction-to-removing-self-intersections` records the
    mod-two count, the oriented count for m even, the group-label refinement, and the
    honest caveats (embedding implies vanishing; the raw count is not a regular-homotopy
    invariant in general, by Wall's connected-sum example).
16. `rem-vanishing-primary-double-point-and-characteristic-obstructions-do-not-classify-embeddings`
    records the knotted-sphere witness (Haefliger trefoil S^3 in R^6, trivial normal
    bundle, no double points, not isotopic) and the fact that the classification needs
    more (Whitney invariant / deleted product).
17. `rem-metastable-embedding-classification-requires-additional-deleted-product-machinery`
    is the non-load-bearing `proved_here: false` boundary leaf.
18. `rem-isotopy-extension-needs-compact-source-or-proper-support-control` guards the
    theorem with the knotted-line counterexample and the bounded-velocity substitutes.

B page:
19. `lem-an-ambient-isotopy-preserves-the-orientation-of-an-invariant-round-sphere`
    (local prerequisite for the counterexample): an ambient isotopy maps the invariant
    ball orientation-preservingly, so no ambient time-one map restricts to a reflection.
20. `ex-ambient-isotopy-of-an-unknotted-circle-in-r-three`,
    `ex-isotopic-submanifolds-have-isomorphic-normal-bundles-and-complements`,
    `cex-the-reflected-sphere-embedding-is-regularly-homotopic-but-not-isotopic-to-the-standard-one`
    (the substituted design-B3 counterexample), and
    `ex-double-point-dimension-count-for-surfaces-in-four-and-five-space`.

Honest caveats for Step 3, stated again in the readiness records:

- The disjunction proposition is literature-derived (Wall §6.3, and the same move in
  Hirsch's tradition). Its one delicate step is the *source-level realisation*: the
  Whitney move is stated by the sources as a diffeotopy that removes the pair, and the
  regular homotopy of the immersion is obtained by the model deformation transported
  through the product chart of the clean disk (Wall §6.3 model and §6.4.9, where Wall
  writes explicitly that the first component remains fixed and the deformation is a
  regular homotopy). The Step-3 author must spell this out against the exact statements
  of the DT-22 items; the scaffold does not hide it.
- The corollary `cor-a-proper-injective-immersion-is-an-embedding` repeats the statement
  of the already-published DG proposition by design (plan §11 requires the split). The
  plan of record is followed; the duplication is recorded here for the owner.
- The substituted counterexample (S^2 reflection) is also recorded as a consequence of
  the sphere-eversion remark on the DT-26 B page (batch 18) by a different route
  (coorientation). The overlap is the price of keeping the claim provable inside this
  run's closure; the S^1-knot instance remains owed to the knot track.
- `rem-vanishing-...` and `rem-isotopy-extension-needs-...` cite external non-isotopy
  facts (Haefliger's trefoil knot; the trefoil complement group). They are remarks with
  `proof: not-applicable` and are not load-bearing: no proved item depends on them.

## Choice bookkeeping

The plan's §10 ledger allows `AC_omega` for countable organisation on the DT-25–DT-28
range. Thirteen batch-19 items declare `def-countable-choice` in `deps`; the lemmas,
theorem, corollaries and examples among them either state “Assume $\mathrm{AC}_\omega$”
explicitly or record the inherited use in their proof strategies:
`lem-an-isotopy-velocity-field-extends-...`, `lem-compactness-allows-a-cutoff-...`,
`lem-the-extended-time-dependent-field-...`, `thm-isotopy-extension`,
`cor-isotopic-embeddings-...`, `cor-tubular-neighbourhoods-...`,
`lem-double-point-locus-...`, `lem-a-self-transverse-immersion-has-no-double-points-...`,
`prop-whitney-disjunction-...`, `ex-double-point-dimension-count-...`,
`ex-ambient-isotopy-...`, `ex-isotopic-submanifolds-...` and
`cex-the-reflected-sphere-...`. They inherit countable choice from the published partition-of-unity,
transversality and flow items, exactly as the DT-25/DT-26 batches did. The remaining
items (definitions, the diagonal lemma, the obstruction definition, the two remarks, the
B-page orientation lemma) use only choice-free suppliers or explicit finite
constructions. No item assumes the full Axiom of Choice, and no item reaches
`deferred-set-theory-beyond-choice`.

## Inventory, dependency levels and audit

The A manifest carries 19 items and the B manifest 5; all 17 design rows (16 plus the
mandated split) are present, no claim is weakened, and the two substitutions/deferrals
are recorded above. Dependency levels on the final manifest run 0 to 14 counting only
in-run predecessors (`lem-the-diagonal-...` is the only level-0 item; the maximum is
`cex-the-reflected-sphere-...` through the DT-26 classification chain). Every in-run
edge points to an earlier batch (2, 14, 17, 18); there is no same-page forward `deps`
edge other than the natural page order, no self edge and no cycle. All other
dependencies are published items on disk, listed explicitly in each `deps` array.
`node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29` reports no
error naming any batch-19 item; the whole-run invocation still fails only on other
batches' empty scaffold inventories (fixed-point-index, hirzebruch, h-cobordism,
whitehead-torsion, characteristic-class-obstructions, codimension-one-foliations,
exotic-structures and their companions), which are outside this batch.

Mathematical checks made item by item: the direction of the isotopy-extension
construction (velocity extension -> cutoff -> completeness -> ODE uniqueness) and the
role of compactness at each step; the hypothesis check that the DG vector-field extension
lemma applies to the closed track; the codimension count m >= 3 for the two complementary
branches and for the clean-disk general-position lemma; the sign/parity conventions for
self-intersections (m even versus m odd); the label condition as exactly the
null-homotopy of the Whitney circle; the confinement of the disjunction statement to the
complementary (2m-dimensional target) range; and the fact that the Haefliger–Weber leaf
is never consumed.

## Source evidence and dispositions

Five independent treatments were fetched as full text, inspected, and stamped with
`source-fetch-check --stamp` on 2026-10-05; `url-sweep` reports 5/5 live. No source was
dropped and no source-resolution record is needed (no included or inline result rests on
a source that could not be read). Recovery history: the plan's Hirsch and Wall URLs are
dead (HTTP 404) and were recovered from Wayback snapshots on the first retry; the plan's
Skopenkov `/abs/` link is an abstract page and the `/pdf/` body was read instead.

| Treatment | Exact inspected locator | Main supported items | Stamp |
| --- | --- | --- | --- |
| Hirsch, *Differential Topology* (GTM 33, 1976), via Wayback | Ch. 8 §1, pp. 177–183 (Theorems 1.1–1.8; Exercises 3, 7, 9, 10, 11, 16, pp. 182–184) | items 1–8, the compact-source guard, the reflection counterexample, B1–B3 | PDF, 230 pp |
| Wall, *Differential Topology* (CUP 2016), via Wayback | Ch. 6 §§6.2–6.4, pp. 169–192 (Thm 6.2.1; Prop 6.3.1/6.3.3; Thm 6.3.2/6.3.4/6.3.6/6.4.5/6.4.8/6.4.9; Lemma 6.3.5) | the double point/embedding side, the obstruction definition, the metastable boundary | PDF, 352 pp |
| Chaidez, *Notes on Smooth Topology and Symplectic Embedding Problems* | Prop. 2.38 and Thm 2.39, printed pp. 35–36 | the flow and isotopy-extension steps | PDF, 77 pp |
| Skopenkov, *Embedding and Knotting of Manifolds in Euclidean Spaces* (arXiv) | §§1–3, article pp. 2–20 (Σ(f); Whitney obstruction mod 2 and integral; Whitney invariant; Thm 2.8; Example 3.4) | the obstruction definition, the knotting boundary, the double point dimension count | PDF, 70 pp |
| UCR hand-out, *The Isotopy Extension Theorem* | complete 14-page document (statement and applications; tubular/collar uniqueness; knotted-line counterexample) | the extension theorem, tube uniqueness, the compact-source guard, B1 | PDF, 14 pp |

The coverage file records 59 harvested headings with dispositions on the two pages
(included/inline for the results built or absorbed here, deferred with resolving
destinations to the DT-22 or DT-25 pages or to this page's recorded boundary, and
out-of-scope with specific reasons for the embedding/immersion classification sequel).
No declined row hides a claim used on this page, and no included item lacks a source row.

## Published defects for the canonical ledger

| Item / state | Evidence | Planned handling |
| --- | --- | --- |
| `lem-a-smooth-isotopy-of-compact-embedded-submanifolds-extends-to-an-ambient-isotopy` (braid-groups home, `status: published`, `origin` pipeline run frontier-38-owner-30) | `node tools/depcheck.mjs` reports `published-unaudited`: the item carries only `verification.judge` (gpt-6.1-sol, pass, 2026-10-03), neither `verification.audited` nor `verification.verified`, and no local repair receipt; its provenance is `ai-altered`/`ai-altered` | Not consumed by batch 19: this page builds its own isotopy extension theorem from DG suppliers (the published item is an earlier-run duplicate of design row 6). Recorded for the canonical ledger as an existing publication-evidence defect. |
| `lem-a-smooth-isotopy-of-links-can-be-put-in-general-position` | same `published-unaudited` finding from `depcheck` | Outside this batch; recorded for the ledger. |
| Batch-14/17/18 DT items consumed here (`thm-whitney-move-...`, the clean-disk and framing lemmas, `def-local-whitney-move`, `def-regular-homotopy-of-immersions`, `thm-smale-classification-of-sphere-immersions-...`, `def-self-intersection-number-...`, `def-local-oriented-intersection-sign`) | `status` absent on disk; scaffolded earlier in this run, not published | Recorded as 16 item + 5 page `open` cross-batch edges in `...-batch-19.cross-batch-dependencies.json`; Step 3 must re-verify the exact statements and hypotheses before treating them as available. |

## Checks and outstanding findings

Checks run on 2026-10-05 (UTC) on the final manifest, coverage and notes (all 24
batch-19 items closed). Whole-run item counts are snapshots of the moment each check
ran; other batches kept landing items while this batch was being built:

- `manifest-deps` on the batch manifest: 24 items, 0 missing, 0 errors. Whole-run
  invocation over all current scaffolds (final pass): 579 items, 0 missing, 0 errors
  (the whole-run count grew while other batches kept landing items after this batch was
  closed).
- `content-policy --manifest-only` over all current batch manifests (final pass):
  579 scoped items, 0 errors, 0 warnings. (Against the batch-19 manifest alone the
  tool reports the expected `batch-dependency-missing` findings for the earlier in-run
  edges; the whole-run invocation resolves them as in-run items — tooling behaviour,
  not a batch finding.)
- `item-dependency-levels.mjs check --run frontier-41-ha-dt-29`: exit 1 for the live
  whole run, solely on other batches' `empty scaffold inventory`; no other error, and
  in particular no error names a batch-19 item. The labels (0–14) were recomputed
  independently over the full in-run closure with zero mismatches, both before and
  after the final text pass.
- `coverage-checklist --require-destination`: 2 pages, 59 harvested results, 0 errors,
  0 warnings.
- `source-fetch-check --stamp` (and the no-network check mode): 7/7 source entries
  fetch-verified; `url-sweep --coverage ... --out research/frontier-41-ha-dt-29-batch-19-url-liveness.json`:
  5/5 live, 0 failed.
- `step1-decisions.mjs check --run frontier-41-ha-dt-29` (final pass): 579 run items,
  **zero unclosed batch-19 items**; the remaining unclosed work belongs to other
  batches (fixed-point-index, characteristic-numbers and the still-empty scaffolds).
- `validate-plan.mjs research/plan-spec.json`: OK — declared page order acyclic and
  consistent, no item-level cycles, forward references, B-page dependencies or
  unresolved ids. `extcheck`: OK for the whole repository (its two warnings are
  pre-existing published items of other tracks).
- `depcheck` (whole repository, for orientation only): 835 pre-existing errors,
  dominated by `published-unaudited` findings from other runs; the two items named in
  the defect table above are the only ones adjacent to this batch, and neither is
  consumed here.

**Record-regeneration disclosure.** After the first recording pass a final manifest
text check removed nineteen literal `\uXXXX` escape artifacts (raw-string residue) from
item statements and strategies and tightened two statements: `cor-tubular-neighbourhoods-...`
(its fixed-set conclusion is now stated for a neighbourhood of the chosen compact set,
which is what the isotopy-extension construction delivers) and
`lem-a-double-point-...-sheet-disks` (a malformed third clause about joining arcs was
removed; arc existence is supplied where it is used, by the DT-22 arcs lemma, on
`prop-whitney-disjunction-...`). Because item hashes cover item text transitively, all
24 batch-19 readiness records were regenerated against the frozen manifest in one pass;
no step-1 record of any other batch was touched, no `--owner` flag was used, and no
escalation was overwritten.

## Owner constructive branch-pair and cleanliness repair — 2026-10-06
Batch19 writer finished before these edits; no batch14 or other active author file was changed. Two local A lemmas were added: full compact-immersed-image disk cleanliness with an explicit fixed convex bigon corner model, and finite generic triple-image removal preserving every transverse branch pair/sign. Definitions now separate ordered pairs, unordered pairs D(f), collision image Sigma(f), and genuine double points. The Whitney homotopy changes only one source patch, glues near its boundary, and requires self-transverse endpoints. The simply connected integral criterion explicitly assumes both M and X oriented and even m, while its new generic perturbation preserves the original pairwise-self-transverse scope.
The actual normal-frame transport in the disk adapter is an explicit smooth orthogonal projection in a Euclidean target embedding. It is a fibre isomorphism by C1 closeness and is the identity on the fixed collar. Boundary corners are not rounded off their sheets.
Source evidence: actual cached Ranicki printed pp.138–140 and Milnor Lemma6.13 pp.80–83 were read during the constructive proposal pass. No new source-download receipt, independent review or workflow acceptance is claimed. Batch14 framing/local-model/label supplier uses remain OPEN in crossdeps and the consumer contract until their earlier adapters and stable authoring exist.
Statement-changed direct consumers needing stable owner reconciliation:
- def-self-transverse-immersion-and-double-point-locus: lem-double-point-locus-has-expected-dimension-two-m-minus-n [frontier-41-ha-dt-29-batch-19.pages.json], lem-a-self-transverse-immersion-has-no-double-points-when-n-is-greater-than-two-m [frontier-41-ha-dt-29-batch-19.pages.json], lem-a-double-point-of-a-self-transverse-immersion-has-two-disjoint-embedded-sheet-disks [frontier-41-ha-dt-29-batch-19.pages.json], def-primary-double-point-obstruction-to-removing-self-intersections [frontier-41-ha-dt-29-batch-19.pages.json], lem-a-small-regular-homotopy-removes-triple-points-and-preserves-transverse-branch-pairs [frontier-41-ha-dt-29-batch-19.pages.json], prop-whitney-disjunction-removes-algebraically-cancelling-double-points-in-the-stable-range [frontier-41-ha-dt-29-batch-19.pages.json], rem-metastable-embedding-classification-requires-additional-deleted-product-machinery [frontier-41-ha-dt-29-batch-19.pages.json], ex-double-point-dimension-count-for-surfaces-in-four-and-five-space [frontier-41-ha-dt-29-batch-19.pages.json], lem-finite-normal-push-off-count-for-an-even-dimensional-euclidean-immersion [frontier-41-ha-dt-29-batch-20.pages.json].
- lem-a-double-point-of-a-self-transverse-immersion-has-two-disjoint-embedded-sheet-disks: prop-whitney-disjunction-removes-algebraically-cancelling-double-points-in-the-stable-range [frontier-41-ha-dt-29-batch-19.pages.json].
- def-primary-double-point-obstruction-to-removing-self-intersections: prop-whitney-disjunction-removes-algebraically-cancelling-double-points-in-the-stable-range [frontier-41-ha-dt-29-batch-19.pages.json], rem-vanishing-primary-double-point-and-characteristic-obstructions-do-not-classify-embeddings [frontier-41-ha-dt-29-batch-19.pages.json].
- prop-whitney-disjunction-removes-algebraically-cancelling-double-points-in-the-stable-range: rem-vanishing-primary-double-point-and-characteristic-obstructions-do-not-classify-embeddings [frontier-41-ha-dt-29-batch-19.pages.json].

Published or other-batch direct/indirect consumers are owner-held after writers drain; these edits contain no changes to batches18/20. The two-sheet general-position lemma was not enlarged: its obsolete consumer edge was replaced by the exact local batch19 adapter.

Actual on-disk outside-batch19 dependency scan: [('lem-finite-normal-push-off-count-for-an-even-dimensional-euclidean-immersion', 'draft', ['def-self-transverse-immersion-and-double-point-locus'])]. Root owns their reconciliation; no such file was written here.

Local verification: focused precheck 7 proof-bearing changed/new items passed; proof-layout 10 changed/new items, 42 steps, zero defects; rendercheck 11 changed item/page files passed; batch19 content-policy 26 scoped items, zero errors/warnings. Focused strict contracts currently fail only for three actually missing batch14 suppliers (framing obstruction, local Whitney move definition, Whitney move theorem). These are open mathematical interfaces, not waived check failures or accepted proof claims.
