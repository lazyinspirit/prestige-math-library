# Step 5b cross-batch audit — frontier-36-complete

## Scope and state

The computed work list at `research/frontier-36-complete-cross-group-edges.json` has 562 edges, six forward references and no post-5a structural changes. There is no checkpoint import, merge import or Step-7 published-repair handoff for this run. The current `post-5a` touch snapshot has 21,782 item hashes. The `pre-author` → `post-5a` impact computation finds 1,015 changed public interfaces and 2,630 affected items; `post-5a` → current initially found zero changed interfaces and zero affected items. The two later Remarks edits below change two public surfaces and create five current impact candidates. These are computed scopes, not review dispositions. The live autopilot status command reports a workflow-revision mismatch, so it cannot certify an engine transition here.

## Batch-7 reader handoff and named batch-8 consumers

The handoff is `research/frontier-36-complete-step5-cross-batch-reader-findings.md`. I reread the current suppliers and both named consumers. Stacks Project, Schemes §26.5, [Lemma 26.5.1 and Definition 26.5.3](https://stacks.math.columbia.edu/tag/01HR), explicitly gives for `D(g)⊆D(f)` the relation `g^e=af`, the induced `M_f→M_g`, the finite distinguished-open sheaf condition, and the extension to an associated module sheaf. Section 27.9 [tag 01MJ](https://stacks.math.columbia.edu/tag/01MJ) describes associated graded-module sheaves on Proj.

1. `def-associated-sheaf-module-affine-scheme` now states `g^n=fh` under `D(g)⊆D(f)` and uses that to make `f` a unit in `A_g`. This resolves the reader's reversed relation. The current `def-associated-sheaf-graded-module-proj` Definition, lines 41–62, applies the affine associated-sheaf construction to `M_(f)` over `S_(f)` and compares the two canonical localisations on overlaps. It does not use the reversed equation. The dependency edge remains accurate, with no consumer edit.
2. `thm-associated-module-sheaf-exists` proof step 4.1(b) now takes a finite subcover indexed by `J` and checks the two sections on **each** `D(f_i f_{i_j})`, which cover `D(f_i)` as `j` runs through `J`; step 3.1(a) then gives equality. This resolves the reader's false one-intersection cover. The Proj consumer uses the theorem for existence of the affine sheaf on each chart and compatible restriction isomorphisms; that use remains licensed, with no consumer edit.
3. `thm-serre-criterion-ampleness` [F16] and proof step 1.5 use the associated-sheaf theorem to identify an ideal sheaf from its localisations on every distinguished open. The repaired finite-cover gluing proof supplies exactly that result. The consumer's stated Noetherian and AC hypotheses remain sufficient; no edit is needed for this handoff.

The three corresponding cross-batch edge verdicts are in `research/frontier-36-complete-5b-verdicts.jsonl`, bound to current file hashes. These are local 5b checks, not a new independent review of the complete consumer proofs.

## Associated-sheaf Definition: other cross-batch uses

I checked the remaining 18 computed edges targeting `def-associated-sheaf-module-affine-scheme` against its current Definition and the cited consumer clauses. The Definition supplies the sheaf notation, `D(f)↦M_f`, canonical restriction maps and empty/unit cases. Stalk localisation, affine equivalence, pullback and cohomological assertions used by consumers have separate cited suppliers. [Stacks Project, Schemes §26.5, Lemma 26.5.1 and Definition 26.5.3](https://stacks.math.columbia.edu/tag/01HR) confirms the restriction-map and associated-sheaf interface. None of these 18 uses invokes the formerly reversed radical equation.

| Consumer | Checked use of the changed supplier |
|---|---|
| `cex-affine-vanishing-fails-non-qc-sheaf` | [F4] writes `O_X` as the associated sheaf of the rank-one module; affine vanishing comes from its separate theorem. |
| `cex-proper-finiteness-fails-noncoherent` | [F7] repeats the distinguished-open localisation data and associated-sheaf functoriality, with existence from the separate theorem. |
| `cor-euler-characteristic-locally-constant-flat-proper-family` | [F6] uses associated sheaves after affine base change; [F9] gets stalks and fibres from the separately cited stalk and fibre results. |
| `cor-upper-semicontinuity-cohomology-dimension` | [F6], [F9] and [F12] use associated-sheaf notation for fibres, locally free loci and base change; the cited stalk and base-change results carry those additional conclusions. |
| `def-base-change-map-cohomology` | Its Definition identifies the affine pullback module sheaf and names the canonical sheaf morphism; the pullback lemma and ringed-space definition carry the construction. |
| `ex-projective-zero-space-cohomology` | [F3] treats a degree-zero localised module as its associated sheaf on `Spec A`; the separate basic-open lemma supplies sections. |
| `lem-closed-immersion-cohomology-pushforward` | [F3] uses the notation `M~` in the affine quasi-coherent equivalence; the equivalence theorem supplies the classification. |
| `lem-flat-sheaf-sections-flat-over-base` | [F1] presents a quasi-coherent sheaf on an affine open as `M~`; the equivalence and stalk lemma supply the other assertions. |
| `lem-higher-direct-image-affine-localization` | Statement item 2 denotes a higher direct image restricted to an affine as an associated module sheaf; [F2] uses `M~(D(a))=M_a`, with separate basic-open/stalk suppliers. |
| `lem-projective-hypersurface-cohomology-sequence` | [F4] and [F8] identify affine structure sheaves with associated coordinate-ring modules; the closed-immersion and exactness statements cite other suppliers. |
| `lem-proper-cohomology-field-extension` | [F5] writes the affine pullback after field extension as the associated sheaf of `M⊗_k K`; the pullback lemma supplies the isomorphism. |
| `lem-proper-flat-cohomology-perfect-complex` | [F5], [F6], [F10] use `M~` for higher direct images, finite generation and affine pullback; separate cited localisation, affine-equivalence and pullback results supply those properties. |
| `lem-schematic-closure-and-dense-agreement` | Its affine-sheaf fact uses `M~(D(f))=M_f` and canonical restrictions; existence, stalks and determination by a basis are separately cited. |
| `lem-serre-vanishing-induction-hyperplane` | Its support fact uses `M~` and the separately cited stalk-localisation result. |
| `thm-cohomology-and-base-change` | [F7], [F8] use associated-sheaf notation for higher direct images and finite locally free modules; separate cited results supply fibres and local freeness. |
| `thm-proper-pushforward-coherent` | [F1] denotes affine higher direct images by associated sheaves; the higher-direct-image localisation lemma supplies the isomorphism. |
| `thm-qc-sheaf-affine-higher-cohomology-vanishes` | [F5] uses the exact basic-open formula `M~(D(h))=M_h` and the separately cited quasi-coherent definition. |
| `thm-serre-finiteness-projective-cohomology` | [F4], [F5] use associated sheaves for affine higher direct images and finite generation; other cited suppliers provide those theorems. |

All 18 edges are retained as accurate with no consumer edits; the individual current-file-hash verdicts are in `research/frontier-36-complete-5b-verdicts.jsonl`. This checks each edge's citation use and the corrected interface, without certifying the entire consumer arguments.

## Forward reference review: proper holomorphic degree

The theorem `thm-proper-holomorphic-map-riemann-surfaces-has-degree` requires a **proper**, nonconstant map of connected Riemann surfaces and proves that each weighted fibre count is a finite positive integer independent of the target point. [Looijenga, Riemann Surfaces, Proposition–Definition 4.5, printed pp. 43–44](https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf) proves this from finite compact fibres and exclusion of extra nearby preimages. The later example `cex-exponential-local-biholomorphism-is-not-proper` proves in verification steps 1.3 and 3.1 that every fibre of `exp: C → C×` is an infinite translate of `2πiZ`. The theorem's old Remark said the count “can change, as [the example] shows”; that example supplies no varying finite count. I corrected the Remark to say precisely that finiteness can fail, and corrected the batch-28 contract's `iff-reverse` boundary, which had repeated the misleading reading. The Statement, hypotheses, proof, sources, dependencies, manifest and provenance did not change. The forward link remains in `## Remarks` to the later example page and is orientation only. Closed ledger row `frontier-36-complete-5b-cross-exp-degree-remark` owns this nonfatal repair. Reflow produced a single Remarks paragraph; focused precheck passed (1 checked, 0 failing). The changed item has a post-5a item verdict and its five affected consumers have current impact dispositions.

## Other forward references

All five remaining declared links occur only in `## Remarks` and target authored items on strictly later planned pages. I checked each link's actual text and target:

- `def-complex-semisimple-algebraic-group-borel-and-flag-variety` points to `def-compositions-partial-flags-and-standard-parabolics` to contrast a minimal parabolic just above a Borel with the later finite-field standard-parabolic/partial-flag convention. The source's `P_α/B ≅ P¹` and `Lie P_α = b ⊕ g_{−α}` are already in its own Definition; it does not use a finite-field statement to prove the complex assertion.
- `def-twisting-sheaf-proj` points to `ex-twisting-sheaf-projective-line-transitions` for the sign convention `e₁=tⁿe₀`. The target Example states that exact transition formula for every integer `n`, including negative `n`; the link is an illustration after the Definition.
- `lem-nonsingular-complex-algebraic-curve-holomorphic-charts` points to `ex-nonsingular-algebraic-curve-charts` for a later global-atlas/projective-compactness example. The lemma's Remark explicitly excludes those conclusions from its local claim; its proof does not use the example.
- `rem-proj-does-not-recover-graded-ring-literally` points to `cex-proj-graded-ring-not-faithful`. The target's Counterexample and verification steps 1.1–2.2 compare `k[x,y]` with its second Veronese: equal Proj, degree-one dimensions 2 and 3. The general `## Remark` already cites earlier Veronese and torsion results. Its later-example paragraph was under that heading, which made the declared forward reference load-bearing under the section contract. I moved only that paragraph into `## Remarks`; the general claim and its suppliers are unchanged. Closed ledger row `frontier-36-complete-5b-cross-proj-forward-placement` owns the correction. Reflow was unchanged; focused precheck found 0 proof items and 0 failures. The impact computation finds no direct item consumers of this source.
- `thm-residue-theorem-compact-riemann-surface` points to `ex-coordinate-change-for-meromorphic-differential` as a sphere check. The target Example gives residues `+1` at zero and `−1` at infinity for `dz/z`, while the theorem's proof uses its finite chart-cell calculation and the plane residue theorem, not the later example.

The sixth forward link is the corrected proper-degree Remark above. All six are retained as orientation links; no load-bearing forward proof step or new lemma is required.

## Post-5a impact of the Remarks repair

`tools/impact-audit.mjs` identifies five consumers of `thm-proper-holomorphic-map-riemann-surfaces-has-degree`. The changed supplier clause is solely the orientation Remark about the exponential example; its Statement items 1–4 and proof are unchanged. `cex-exponential-local-biholomorphism-is-not-proper` [F7] and verification 3.1 use the proper-map finite-degree conclusion to show it cannot apply to an infinite exponential fibre. `def-ramification-index-and-branch-value` Remarks cite the theorem's unchanged weighted-count statement. `ex-hyperelliptic-double-cover-ramification` [F6] and `ex-power-map-riemann-hurwitz` [F5] use that same proper-map degree formula. `thm-riemann-hurwitz-formula` Statement and [F2] use finite fibres, constant degree and covering off the branch locus, all unchanged. None consumes the corrected Remark, so their existing claims and proofs remain licensed without edits. The moved Veronese example paragraph in `rem-proj-does-not-recover-graded-ring-literally` has no direct dependency or reference consumer, so it ends at its source. These are local reviews of all five current impact candidates, recorded in `research/frontier-36-complete-impact-5b.json`.

## Focused checks

- `tools/impact-audit.mjs` with the required `post-5a` → current receipt passes: two changed public surfaces and five affected items, each with a specific disposition. The `pre-author` → `post-5a` receipt remains pending: 1,015 changed interfaces, 2,630 affected items and 5,260 status/note errors from their still-pending template rows. Its reviewer is recorded; none of those rows has been represented as reviewed.
- `tools/cross-group-edges.mjs check` accepts the 21 recorded edge verdicts and both post-5a item-change verdicts. It still reports 541 unverdicted edges. The six forward rows require a final evidence-hash refresh after this report is stable.
- `tools/fwdcheck.mjs` passed with zero open forward references. The two locally edited items passed reflow (one remark paragraph reflowed, one unchanged) and focused precheck (the proper-degree theorem: 1 checked, 0 failing; the Proj remark: 0 proof items, 0 failing). `tools/proof-contract.mjs --strict` passed on both affected batch contracts with zero errors or warnings. `tools/risk-report.mjs --require-reviewed` passed for the critical proper-degree theorem; the batch-28 review attribution remains the original Step-5a group e, and I did not recast it as a new independent proof audit.
- Autopilot status recomputation reports a workflow-revision mismatch in `.autopilot/frontier-36-complete`. The Step-5 gate battery has not been run. The batch-25 draft page frontmatter issue reported in `research/frontier-36-complete-alpha-i-5a.md` remains an owner-held formatting finding outside this computed 5b edit set.

## Remaining work and blockers

The other 541 computed edges still need current-carrier, exact-use review and verdicts. The pre-author impact window still needs item-specific dispositions for 2,630 affected items, including the exact changed supplier and consumed clause. No generic approval can close that receipt. The batch-25 page formatting finding needs its proper owner/gate route. Closure gates and the Step-5 battery remain blocked by the unreviewed obligations; no mathematical acceptance, completed pre-author impact audit or engine transition is claimed for them.

Next action: work through the remaining edges by source/consumer families, then review and document each impact candidate against its changed supplier interface; rerun the post-5a window after any edits.
