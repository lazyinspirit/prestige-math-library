# Step 3a reader report — batch 94

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader (`reader-94`)  
Batch: `94`

## Opened inventory

Assigned pages:

- `library/knot-theory/tau-invariant-and-the-four-ball-genus.md`
- `library/knot-theory/tau-invariant-and-the-four-ball-genus-examples.md`

Assigned items, opened in dependency order:

- `lem-knot-floer-mirror-complex-duality`
- `lem-tau-additive-for-filtered-tensor-products`
- `lem-tau-of-the-unknot-is-zero`
- `lem-tau-connected-sum-filtered-tensor-product`
- `lem-knot-floer-large-surgery-and-filtered-cobordism-input`
- `thm-tau-is-concordance-invariant-and-four-ball-genus-bound`
- `ex-knot-kt-41-worked-cases`
- `cex-knot-kt-41-boundary-case`

Opened local supplier items needed for the repaired arguments and convention checks:

- `def-admissible-pointed-heegaard-floer-data`
- `def-oriented-seifert-surface`
- `def-knot-floer-filtration-and-tau`
- `def-countable-choice`
- `def-knot-connected-sum-and-prime-knot`
- `lem-knot-connected-sum-well-defined`
- `lem-standard-unknot-hat-diagram-rank-one`
- `def-smooth-knot-concordance`
- `def-smooth-and-topological-slice-genus`
- `lem-smooth-and-topological-slice-genus-minima-exist`
- `lem-puncturing-smooth-four-ball-surfaces-gives-genus-preserving-knot-cobordisms`
- `lem-tau-threshold-under-nonzero-filtered-maps`
- `lem-tau-preserved-by-filtered-chain-homotopy-equivalence`
- `lem-knot-floer-duality-and-filtration-swap`
- `lem-tau-is-independent-of-heegaard-grid`
- `def-reverse-mirror-of-oriented-knot`
- `def-rasmussen-s-invariant`
- `thm-seifert-algorithm-boundary-euler-and-genus`

Also opened the three A-page prerequisite carriers named by the manifest, the batch-94 authoring notes, and the relevant entries in the batch-94 proof-contract file. The notes and contracts were treated as historical evidence, not as mathematical verdicts.

## External source readings

- Ozsváth–Szabó, [*Holomorphic disks and knot invariants*](https://arxiv.org/pdf/math/0209056v3), §7, Theorem 7.1, PDF pp. 43–45: filtered connected-sum equivalences for the knot complexes and boundary-sum normalization. I read the theorem and proof sketch. The sketch refers to [*Holomorphic disks and three-manifold invariants: properties and applications*](https://arxiv.org/pdf/math/0105202), §6; I read through Theorem 6.2 and Proposition 6.4. Those passages establish the ordinary three-manifold connected-sum maps; the knot-filtration extension remains imported as Theorem 7.1, not reconstructed here.
- Hom, [*A survey on Heegaard Floer homology and concordance*](https://arxiv.org/pdf/1512.00383v3), §2.2, Figure 3(a),(c), printed p. 6; §3.1, Example 3.3, printed p. 9; and Theorem 3.1(1),(2), printed p. 8. The survey states its coefficient field is `F_2` on printed p. 2. These passages give the trefoil staircase, the threshold convention, tau additivity/concordance invariance, and the four-ball genus bound. I read these passages, not the whole survey's cited proofs.
- Hom, [*The knot Floer complex and the smooth concordance group*](https://arxiv.org/pdf/1111.6635), §2, PDF p. 5: the reverse mirror is the filtered dual, with both filtrations reversed. I read the convention and statement, not the cited diagram-invariance proof.
- Hedden–Ording, [*The Ozsváth–Szabó and Rasmussen concordance invariants are not equal*](https://arxiv.org/pdf/math/0512348v1), Theorem 1.1, printed p. 2, Figure 1, printed p. 3, and §§2.1–2.2. The theorem states both values; the acknowledgments say Rasmussen supplied the `s` computations, and the paper does not reproduce a Lee-complex computation of `s`. I import the theorem statement and record that limit.
- Rasmussen, [*Khovanov homology and the slice genus*](https://arxiv.org/pdf/math/0402131v1), Theorem 1 and §4.4, PDF p. 12: the smooth slice-genus bound for `s`. I read the proof in §4.4.
- Ozsváth–Szabó, [*Knot Floer homology and the four-ball genus*](https://arxiv.org/pdf/math/0301149v4), Proposition 3.2 and the relevant statements/proofs in §3, for the threshold, additivity, reverse-mirror sign, and genus context.

## Edits and evidence

- `lem-knot-floer-mirror-complex-duality`: made the reverse-mirror orientation explicit in the Statement and Fact F4, and corrected the Hom source locator to §2, PDF/printed p. 5. The proof retains the direct strip-reflection and finite-dual-threshold calculations. The source's reverse-mirror convention is stated in Hom §2; Ozsváth–Szabó §3.5, Propositions 3.7–3.9, gives the ambient and knot-orientation symmetries.
- `lem-tau-connected-sum-filtered-tensor-product`: replaced the unsupported bespoke neck-stretching, polygon-count, and polynomial-inverse construction with an explicitly labeled import of Ozsváth–Szabó Theorem 7.1. The proof records base change from `Z` to `F_2`, proves that filtered chain homotopy equivalence preserves the threshold, applies the local finite tensor-threshold lemma, and identifies the global invariant using Hom Theorem 3.1(1). The Statement now names the boundary-connected-sum Seifert surface used for normalization.
- `lem-knot-floer-large-surgery-and-filtered-cobordism-input`: retitled it to match its actual argument. The proof now cuts a genus-`g` cobordism along a proper arc to obtain a genus-`g` surface for the connected sum with the concordance inverse, then applies Hom Theorem 3.1(1),(2). The arc straightening and Euler-characteristic calculation are stated in the proof; the Floer genus theorem is clearly marked as an external input.
- `thm-tau-is-concordance-invariant-and-four-ball-genus-bound`: replaced the proof's reliance on unresolved local grid and cobordism suppliers with the exact Hom Theorem 3.1(1),(2) import. The proof identifies Hom's threshold definition with the normalized local definition and preserves the Statement's full conclusions.
- `ex-knot-kt-41-worked-cases`: replaced the escalated grid-to-analytic staircase identification with Hom's Figure 3 staircase, retained the finite hat-quotient calculation, used the reverse-mirror duality, and obtained both genus bounds from a genus-one Seifert surface plus Hom's genus theorem.
- `cex-knot-kt-41-boundary-case`: defined the `s` convention uninterrupted in the Statement and replaced the unproved local Whitehead-value and Lee-map inputs with Hedden–Ording Theorem 1.1 and Rasmussen Theorem 1. The proof is the finite implication `s=2` and `|s|≤2g_4` imply `g_4≥1`, followed by the disk contradiction.
- Regenerated the six affected proof-contract citation and derivation entries, cleared supplier-obligation rows superseded by the repaired proof bodies, and refreshed the finite-check records for the example and counterexample. Historical owner metadata was preserved. No changed item had a `verification.judge` record to remove.

The assigned TikZ diagram is the positive closure of `sigma_1^3`: the three crossings have the stated over-under pattern, both braid strands run downward, and the exterior arcs close the two endpoints. It agrees with the text. The connected-sum construction schematic in the opened definition dependency also matches the fixed oriented gluing convention. No additional diagram was needed in the assigned exposition.

## Page verdicts

- `tau-invariant-and-the-four-ball-genus`: draft A-page frontmatter only, `compact-v1`, with the manifest inventory and prerequisites preserved. The body is empty. Its assigned item claims now have explicit proof or source support; no uneditable defect was confirmed.
- `tau-invariant-and-the-four-ball-genus-examples`: draft B-page frontmatter only, `compact-v1`, with the manifest inventory and prerequisite preserved. The body is empty. Its assigned example and counterexample have explicit local calculations and source imports; no uneditable defect was confirmed.

## Checks and blocker

- Reflow: all six changed item files were unchanged by `reflow.mts`.
- Proof contracts: 6/6 selected items checked, 0 errors, 0 warnings.
- Precheck: all six changed items passed.
- Proof layout: the final batched command checked 6 items and 15 steps with 0 defects.
- Scoped `git diff --check`: clean. An earlier repository-wide diff check reported whitespace in unrelated pre-existing item/physics changes; those files were not touched.
- The live autopilot run remains `running`, with no worker in flight. Its current blockers are `collect-71 failed 3x` and `split-83 failed 3x`; neither is batch 94.

## Unedited findings and coverage limits

No confirmed defect remains in the assigned claims, so there are no unedited findings. The original batch manifest and assigned item frontmatter still list a broad local grid, move, movie-map, and analytic supplier stack. The repaired proof bodies do not use that stack as evidence, and I did not audit each of those now-unused supplier proofs. If a later mechanical closure treats those retained edges as proof obligations, owner reconciliation may still be needed; this report does not claim those suppliers are sound. The external inputs are stated with their hypotheses and reading limits above; no full source-proof reconstruction or whole-paper coverage is claimed.
