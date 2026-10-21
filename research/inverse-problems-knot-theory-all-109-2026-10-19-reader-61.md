# Step 3a reader report — batch 61

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Date: 2026-10-21

## Opened inventory

Assigned pages opened:

- `library/knot-theory/seifert-matrices-and-the-alexander-module.md` (A page)
- `library/knot-theory/seifert-matrices-and-the-alexander-module-examples.md` (B page)

All ten assigned items were opened; they are listed below in dependency order:

1. `def-seifert-matrix-s-equivalence`
2. `def-knot-seifert-pairing-and-matrix`
3. `lem-seifert-pairing-well-defined`
4. `lem-seifert-matrix-skew-part-is-surface-intersection`
5. `lem-seifert-cut-open-cover-alexander-module-presentation`
6. `lem-seifert-matrix-s-equivalence-under-isotopy`
7. `lem-knot-infinite-cyclic-cover-cut-and-paste-presentation`
8. `thm-seifert-matrix-presents-knot-alexander-module`
9. `cex-knot-kt-06-boundary-case`
10. `ex-knot-kt-06-worked-cases`

Process limitation: I initially inspected the two assigned definition carriers before opening their external supplier files. I then checked the supplier statements and relevant proof interfaces before adjudicating the dependent proofs. I did not re-open any item.

I checked the supplier statements and the specific proof interfaces used by those items. Relevant current supplier files opened include the countability and surface-normal-form items; the oriented-link, projection, linking, and intersection items; the transversality and compact-1-manifold items; the knot-exterior, peripheral-system, and tubular-neighbourhood items; the Alexander-duality, Hurewicz, covering-space, Mayer–Vietoris, UCT, and Laurent-ring items. This included `def-oriented-seifert-surface`, `lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups`, `thm-linking-number-equals-signed-intersection`, `lem-linking-number-even-sum-and-reidemeister-invariance`, `thm-knot-exterior-homology-and-longitude`, `lem-knot-tubular-exterior-and-boundary`, and `thm-seifert-matrix-presents-knot-alexander-module`'s declared suppliers.

## Source checks

I opened the complete relevant Cattabriga–Francaviglia passage in §6.2.3, printed pp. 43–47: Proposition 6.2.8, the negative-first form convention, Theorem 6.2.9 (which defers its proof), Example 6.2.11, and Proposition 6.2.12. Example 6.2.11 gives the genus-one `K1` trefoil and the matrix `[[1,0],[-1,1]]`; the preceding definition sets `alpha(x,y)=lk(x^-,y)`. The assigned example explicitly transposes that form and swaps the basis before using its positive-first convention. The source also states the surface-intersection relation, while the assigned lemma supplies its own orientation calculation.

I opened the Kyushu lecture notes' Chapter 7, including Lemma 7.2 and Definition 7.7. These support the unimodular congruence and the two elementary enlargement moves. I could not independently fetch Rolfsen's PDF during this review: the direct PDF request timed out. No claim was rejected for lack of that source; the relevant local proofs and the directly opened Cattabriga–Francaviglia and Kyushu passages were used for the convention checks.

## Edit and evidence

- `items/lem-seifert-matrix-skew-part-is-surface-intersection.md`: repaired the compact-intersection argument in step 2.1. The original argument invoked the boundary-preimage theorem on the untruncated strip even though the map to `U=S^3\setminus b_j` is not defined at `P=C_i\cap b_j`. The repair removes small disks around `P`, applies the theorem to the compact remainder mapping into `U` with transverse boundary restrictions, then joins the unchanged local half-arcs back to their centers. This gives the claimed compact intersection 1-manifold and its stated boundary. The local endpoint sign computation and the matrix identity are unchanged.
- Updated the `lem-seifert-matrix-skew-part-is-surface-intersection` derivation in `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-61.proof-contracts.json` to match the repaired application. The item had no `verification.judge` record to remove.
- Required checks after the edit: `reflow.mts` reported `unchanged`; `precheck.mts` passed (1 checked, 0 failing); `proof-layout.mjs` reported 1 item, 4 steps, 0 defects.

No other assigned item or page was edited. The two TikZ diagrams in the assigned core arguments and the trefoil closure schematic were checked against their text and strand conventions; I found no diagram defect.

## Uneditable findings

All findings below are published dependencies and therefore outside this reader's write scope. Each is a statement/definition-format violation: the complete `Statement` or `Definition` contains inline hyperlinks, which the statement-first rule requires to be moved into the immediately following `<heading> references` section. The findings JSON records each exact subject and assigned consumer.

| Subject | Location and evidence | Assigned consumer |
|---|---|---|
| `def-countable-choice-principle-for-foliation-pair` | `## Definition`: links to `def-function`, `def-choice-function`, `def-countable-choice`, and `lem-countable-choice-sequence-and-product-formulations-are-equivalent` interrupt the definition; there is no immediate `Definition references` section. | `def-knot-seifert-pairing-and-matrix` |
| `lem-countable-choice-sequence-and-product-formulations-are-equivalent` | `## Statement`: the phrase “the sequence formulation of [[def-countable-choice-principle-for-foliation-pair]]” is linked mid-statement; the wording “a indexed choice function” is also ungrammatical. | `def-knot-seifert-pairing-and-matrix` |
| `lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups` | `## Statement`, opening hypothesis: `Assume AC_ω ([[def-countable-choice-principle-for-foliation-pair]])`. | `def-knot-seifert-pairing-and-matrix` |
| `def-oriented-link-in-s-three-and-ambient-isotopy` | `## Definition`: inline links occur in the smooth-category, ambient-orientation, link, and isotopy clauses; no immediate `Definition references` section follows. | `def-knot-seifert-pairing-and-matrix` |
| `def-one-variable-alexander-module-of-an-oriented-link` | `## Definition`: the link model, Alexander-duality map, Hurewicz map, covering classification, and deck-action clauses contain inline links. | `def-knot-seifert-pairing-and-matrix` |
| `def-regular-oriented-link-diagram` | `## Definition`: inline links define the link model, regularity conditions, planar isotopy, and Reidemeister reference. | `lem-seifert-pairing-well-defined` |
| `def-oriented-intersection-number` | `## Definition`: links to the oriented-manifold, local-sign, finiteness, transversality, and family definitions occur within the definition. | `lem-seifert-pairing-well-defined` |
| `def-local-oriented-intersection-sign` | `## Definition`: inline links occur in the transversality, product-orientation, manifold-orientation, and determinant-line clauses. | `lem-seifert-pairing-well-defined` |
| `prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold` | `## Statement`: “in the sense of [[def-null-subset-of-a-smooth-manifold]]” interrupts the statement. | `lem-seifert-pairing-well-defined` |
| `thm-parametric-transversality` | `## Statement`, opening hypothesis: `AC_ω ([[def-countable-choice]])`. | `lem-seifert-pairing-well-defined` |
| `thm-transversality-homotopy-theorem` | `## Statement`, opening hypothesis: `AC_ω ([[def-countable-choice]])`. | `lem-seifert-pairing-well-defined` |
| `prop-relative-transversality-preserves-a-map-on-a-closed-good-region` | `## Statement`, opening hypothesis: `AC_ω ([[def-countable-choice]])`. | `lem-seifert-pairing-well-defined` |
| `lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count` | `## Statement`: the outward-normal-first orientation clause links to `def-induced-boundary-orientation` inline. | `lem-seifert-pairing-well-defined` |
| `thm-oriented-intersection-number-is-homotopy-invariant` | `## Statement`: “with the oriented intersection number of [[def-oriented-intersection-number]]” interrupts the claim. | `lem-seifert-pairing-well-defined` |
| `def-the-laurent-polynomial-ring` | `## Definition`: inline links occur throughout the ring construction, universal-property paragraph, and augmentation paragraph; no immediate `Definition references` section follows. | `lem-seifert-cut-open-cover-alexander-module-presentation` |
| `def-deck-transformation-and-deck-group` | `## Definition`: the phrase “isomorphism … over B” links to `def-map-and-isomorphism-of-covering-spaces` inline. | `lem-seifert-cut-open-cover-alexander-module-presentation` |
| `thm-regular-covering-characterizations` | `## Statement`, clause 1: “regular” links to `def-regular-covering` inline. | `lem-seifert-cut-open-cover-alexander-module-presentation` |
| `def-tubular-neighbourhood-of-an-embedded-submanifold` | `## Definition`: the normal-bundle and smooth-structure clauses contain inline links. | `thm-seifert-matrix-presents-knot-alexander-module` |
| `def-normal-and-conormal-bundles-of-an-embedded-submanifold` | `## Definition`: the first construction paragraph links inline to the slice-chart atlas and embedding result. This supplier is reached through the assigned knot-exterior dependencies. | `lem-seifert-cut-open-cover-alexander-module-presentation` |

These are editorial defects only; I found no unsupported mathematical claim in these supplier statements while checking the interfaces used here. No in-run dependency finding remains.

## Page verdicts

- A page `seifert-matrices-and-the-alexander-module`: pass. Its YAML inventory matches the eight assigned core items, page metadata is intact, and the body is empty as required. The one repaired proof issue was in an assigned item, not page prose.
- B page `seifert-matrices-and-the-alexander-module-examples`: pass. Its YAML inventory matches the two assigned examples, page metadata is intact, and the body is empty as required. The counterexample witness, trefoil matrix calculations, basis changes, module-presentation change, and braid-closure diagram agree with their stated conventions.

## Blockers and coverage limits

No blocker remains for this batch. The direct supplier statements and proof interfaces needed by the assigned arguments were checked; this was not a recursive audit of every supplier's entire dependency proof tree. Rolfsen's PDF endpoint timed out during independent retrieval, as recorded above; the directly opened lecture-note passages and local proofs resolved the claims reviewed here.
