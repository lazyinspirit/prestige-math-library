# Step 3a reader report — batch 68

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Verdict: repairs made; no uneditable mathematical defects or blockers identified.

## Opened inventory

### Assigned pages

- `dehn-surgery-on-knots-and-homology` — `library/knot-theory/dehn-surgery-on-knots-and-homology.md`. Draft A page; YAML frontmatter only, `page_layout: compact-v1`, no Markdown body or summary.
- `dehn-surgery-on-knots-and-homology-examples` — `library/knot-theory/dehn-surgery-on-knots-and-homology-examples.md`. Draft B page; YAML frontmatter only, `page_layout: compact-v1`, no Markdown body or summary.

### Assigned items, in dependency order

1. `def-oriented-slope-and-knot-dehn-filling`
2. `lem-knot-surgery-first-homology-mayer-vietoris`
3. `thm-framed-knot-surgery-trace-boundary`
4. `def-lens-space-surgery-orientation-convention`
5. `lem-trefoil-plus-one-surgery-group-presentation`
6. `ex-knot-kt-13-worked-cases`
7. `cex-knot-kt-13-boundary-case`

### Supplier items opened

- Knot and tubular data: `def-countable-choice`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `def-oriented-link-in-s-three-and-ambient-isotopy`, `def-normal-and-conormal-bundles-of-an-embedded-submanifold`, `def-tubular-neighbourhood-of-an-embedded-submanifold`.
- Homology: `thm-mayer-vietoris-sequence-in-singular-homology`, `cor-homology-of-spheres`, `ex-mayer-vietoris-computation-of-the-torus-first-homology`, `prop-singular-homology-is-invariant-under-deformation-retracts`, `prop-zero-th-singular-homology-is-free-on-path-components`.
- Braid, diagram, framing, and group computations: `def-geometric-braid-with-setwise-endpoints`, `def-elementary-geometric-half-twist`, `prop-stacking-of-geometric-braids-is-well-defined`, `def-closure-of-a-geometric-braid`, `def-knot-planar-code`, `def-regular-oriented-link-diagram`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `def-framed-knot-self-linking-and-seifert-framing`, `thm-blackboard-framing-self-linking-is-writhe`, `thm-knot-wirtinger-presentation-correctness`, `lem-wirtinger-local-meridian-conjugacy`, `thm-seifert-van-kampen`, and `prop-the-first-hurewicz-map-in-degree-one-is-abelianization`.

I checked the supplier statements and the proof clauses needed by the assigned items. The trefoil presentation uses the positive braid convention consistently: each of the three pictured crossings has the right-to-left branch over, the closure gives one component, the local meridian relations give `aba=bab`, and the parallel word and `+1` filling relation have matching signs. The `A_5` permutation assignment in the counterexample satisfies both displayed relators and has nontrivial image.

## Repairs and evidence

- In `def-lens-space-surgery-orientation-convention`, the original opening sentence treated every orientation-reversing gluing of two solid tori as a lens space. This includes the zero-intersection gluing yielding `S^1 × S^2`, while the item assigns `L(p,q)` only for `p>0` and the worked example treats `0/1` separately. I changed the definition to require nonzero meridian intersection. [Saveliev, *Lectures on the Topology of 3-Manifolds*](https://poisson.phc.dm.unipi.it/~camponovo/libri/3mani.pdf), Lecture 1 §1.5, pp. 24–25, separates the `S^1 × S^2` case from lens spaces. The existing `L(p,q)` convention and all hypotheses for `p>0` remain intact. I updated the `endpoints` evidence for this item in the batch proof contract. Its prior `template_review` record remains preserved with its original item hash and is historical, not a current review of the repaired bytes. The item had no `verification.judge` record.
- In `def-oriented-slope-and-knot-dehn-filling`, the previous proof left the torus curve-classification and the meridian-preserving mapping-class step implicit. I added explicit external-input facts and exact source locators, made the determinant-to-boundary-orientation argument explicit, and replaced the short bigon and annulus assertions with the torus classification and an explicit matrix/extension argument. For two orientation-reversing gluing maps, their transition has matrix `[[ε,k],[0,ε]]`; its twist and simultaneous-reversal representatives extend orientation-preservingly over `D^2 × S^1`, and the collar extension yields an oriented homeomorphism of the fillings. [Saveliev](https://poisson.phc.dm.unipi.it/~camponovo/libri/3mani.pdf), Lecture 2 §2.2, p. 33, gives the reduced-fraction slope classification; Lecture 1 §1.5, Theorem 1.5, pp. 23–24, gives the torus mapping-class action on `H_1`. The latter theorem states the needed isomorphism and cites Rolfsen, Theorem 2.D.4, for injectivity; I did not read Rolfsen's proof. The item’s proof contract now matches its three proof steps.
- The edited definition of lens space is used by five other current-run items: `lem-rational-ball-b2-bounds-lens-l4` (`L(4,1)`), `lem-heegaard-floer-correction-terms-lens-space-lp1` (`p≥1`), `lem-hat-CF-genus-one-lens-space-order-three-rank-three` (`L(3,1)`), `lem-trefoil-double-branched-cover-is-lens-space-order-three` (`L(3,1)`), and `ex-knot-kt-14-worked-cases` (`p>0`, with zero surgery separate). Their references and uses concern only positive `p`, so the corrected zero-slope distinction does not change those claims. The assigned `ex-knot-kt-13-worked-cases` likewise treats `0/1` separately as `S^1 × S^2`.
- Diagram review: the slope diagram’s red segment has deck displacement `(2,1)` as labeled; the trace diagram labels the remaining exterior and inserted free face with meridian slope `nμ+λ`; and the trefoil diagram shows three downward positive crossings with the stated over-strand and closure convention. The proofs do not rely on the drawings. No diagram repair or addition was needed.
- Source cross-checks: [Hilden, Lozano, and Montesinos-Amilibia](https://arxiv.org/pdf/1003.3554), §2.3, p. 6, gives the trefoil meridian presentation `⟨a,b | aba=bab⟩`; the item derives its positive-braid longitude and `+1` filling relation locally. [Ozsváth, Stipsicz, and Szabó](https://web.math.princeton.edu/~petero/konyv9.pdf), §1.2.3, p. 12, uses the boundary convention `μ·λ=-1`, matching the assigned slope definition.

No stale `verification.judge` record existed on either edited item, so none was removed. No other item or page was edited.

## Validation

- `node tools/tsx-run.mjs tools/reflow.mts items/def-oriented-slope-and-knot-dehn-filling.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/def-oriented-slope-and-knot-dehn-filling.md` — pass, 1 checked, 0 failing.
- `node tools/tsx-run.mjs tools/reflow.mts items/def-lens-space-surgery-orientation-convention.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/def-lens-space-surgery-orientation-convention.md` — 0 checked, 0 failing; no proof steps to check.
- Final batched layout check: `node tools/proof-layout.mjs items/def-oriented-slope-and-knot-dehn-filling.md items/def-lens-space-surgery-orientation-convention.md` — 2 items, 3 steps, 0 defects.

## Page verdicts

- `dehn-surgery-on-knots-and-homology`: valid compact A-page metadata; its five assigned items match the page inventory. No summary is present.
- `dehn-surgery-on-knots-and-homology-examples`: valid compact B-page metadata; its two examples match the page inventory and its prerequisite is the A page. No summary is present.

## Uneditable defects and blockers

No confirmed defect remained in an uneditable dependency or assigned page. No proposed withdrawal or blocker is identified.

## Coverage limits

The review covered all seven assigned items, both assigned pages, and the direct supplier statements and proof clauses needed for the claims. It was not a recursive audit of every foundational proof behind each published supplier. The mapping-class source limitation above is recorded explicitly; the stated theorem is the external input used, and no full-library or gate acceptance is claimed.
