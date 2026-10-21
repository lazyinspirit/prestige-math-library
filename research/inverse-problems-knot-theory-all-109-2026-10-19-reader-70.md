# Step 3a reader report — batch 70

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Batch: `70`

## Opened inventory

Assigned pages:

- `library/knot-theory/torus-knots-and-seifert-fibered-exteriors.md`
- `library/knot-theory/torus-knots-and-seifert-fibered-exteriors-examples.md`

Assigned items, reviewed in dependency order:

- `def-coprime-torus-knot`
- `lem-torus-knot-unit-slope-is-unknot`
- `lem-torus-knot-sign-changes-give-mirror-or-reversal`
- `lem-positive-torus-knot-hopf-plumbing-surface`
- `thm-torus-knot-group-presentation`
- `lem-torus-knot-alexander-polynomial-from-presentation`
- `thm-torus-knot-alexander-and-genus-formulas`
- `ex-knot-kt-16-worked-cases`
- `cex-knot-kt-16-boundary-case`

Opened dependency carriers used by those arguments:

- Knot, exterior and choice interfaces: `def-oriented-link-in-s-three-and-ambient-isotopy`, `def-normal-and-conormal-bundles-of-an-embedded-submanifold`, `def-tubular-neighbourhood-of-an-embedded-submanifold`, `def-countable-choice`, `def-axiom-of-choice`, `def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, `def-knot-connected-sum-and-prime-knot`, `thm-isotopy-extension`, `thm-choice-implies-dependent-implies-countable-choice`, `lem-knot-normal-circle-bundle-trivialization`, `thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold`, `thm-smooth-inverse-function-theorem-on-manifolds`, `lem-knot-tubular-exterior-and-boundary`, `lem-knot-exterior-has-peripheral-torus`, and `thm-knot-exterior-homology-and-longitude`.
- Van Kampen and cover inputs: `thm-seifert-van-kampen`, `lem-open-cover-loop-generation`, `lem-van-kampen-factorization-invariance`, `thm-group-pushout-as-an-amalgamated-quotient`, `thm-mayer-vietoris-sequence-in-singular-homology`, `cor-homology-of-spheres`, `cor-homotopic-maps-induce-the-same-map-on-singular-homology`, `thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere`, and `lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold`.
- Alexander module and algebra inputs: `def-one-variable-alexander-module-of-an-oriented-link`, `def-alexander-polynomial-from-the-first-elementary-ideal`, `def-elementary-ideals-of-a-finitely-presented-module`, `lem-elementary-ideals-are-independent-of-the-presentation`, `def-principal-localisation`, `def-multiplicative-subset-and-localisation`, `thm-universal-property-of-localisation`, `prop-units-in-a-localisation`, `prop-localisation-zero-equality-and-kernel-criteria`, `def-polynomial-ring-over-a-commutative-ring`, `thm-polynomial-ring-is-a-commutative-ring`, `cor-polynomial-ring-over-a-domain-is-a-domain`, `def-ring-homomorphism`, `def-commutative-ring`, `def-the-laurent-polynomial-ring`, `lem-the-laurent-polynomial-ring-is-noetherian-and-a-unique-factorisation-domain`, `thm-cellular-homology-computes-singular-homology`, and `prop-the-first-hurewicz-map-in-degree-one-is-abelianization`.
- Seifert surface and genus inputs: `lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups`, `def-oriented-seifert-surface`, `thm-well-ordering-principle`, `thm-every-oriented-knot-bounds-a-seifert-surface`, `def-oriented-seifert-surface-and-knot-genus`, `lem-knot-genus-invariant-under-mirror-and-reversal`, `def-knot-seifert-pairing-and-matrix`, `thm-linking-number-equals-signed-intersection`, `lem-seifert-pairing-well-defined`, `def-oriented-intersection-number`, `def-local-oriented-intersection-sign`, `lem-seifert-matrix-skew-part-is-surface-intersection`, `lem-seifert-cut-open-cover-alexander-module-presentation`, `lem-knot-infinite-cyclic-cover-cut-and-paste-presentation`, `thm-seifert-matrix-presents-knot-alexander-module`, `lem-square-seifert-presentation-and-alexander-normalization`, `thm-seifert-determinant-is-the-knot-alexander-polynomial`, and `cor-knot-alexander-normalization-symmetry-and-genus-bound`.
- For the uneditable dependency finding below, also opened `thm-collar-neighborhood-theorem` and `def-smooth-collar-of-a-manifold-boundary`.

## Review and edit

The two page files are YAML frontmatter only, retain `page_layout: compact-v1`, and have no Markdown summaries. The nine assigned items are present in the assigned inventories. Their statements and descriptions are uninterrupted by hyperlinks; references follow the complete sections. The three TikZ diagrams in the assigned items were checked: the primitive-slope rectangle closes by the lattice vector `(2,3)`, the Hopf-band grid is a count/order schematic matching the text, and the Van Kampen square has the correct inclusion directions. The proofs do not rely on the drawings.

One confirmed proof omission in `thm-torus-knot-group-presentation` was repaired. Its proof used a small round-metric tube as an exterior and as an invariant neighborhood for the weighted circle action without showing that the metric tube is a tubular disk bundle. Proof step 1.1 now constructs the round normal exponential map, checks its zero-section derivative, establishes a uniform embedded disk radius by the inverse function theorem and compactness, identifies the small closed metric tube with that disk bundle, and records its invariance and separation from the coordinate circles. Step 2.2 now explains why the quotient of this invariant neighborhood is a disk, and step 5.1 identifies the regular orbit as degree one under the equivariant normal-bundle projection. Step 4.2 states the coordinate orientation and ordered intersection `K·L = pd−qc = 1` explicitly.

For that repair, added the published supplier `thm-smooth-inverse-function-theorem-on-manifolds` to the assigned item's `deps` and synchronized the same dependency in the current batch-70 manifest. Its dependency level remains unchanged because the new supplier is published. Updated the batch-70 proof contract with the supplier excerpt, the new and renumbered proof derivations, and current boundary-case locations. The item had no `verification.judge` record to remove.

Evidence checked for the torus-knot conventions:

- Cattabriga–Francaviglia, *Knot Theory and Applications*: §5.1, printed pp. 26–27 (primitive slopes, component count, unit cases and sign conventions); §§5.1.6–5.2.4, printed pp. 27–30 (the two-generator group presentation and peripheral words). Their peripheral lemma gives the opposite meridian word `m=x^c y^{-d}` and longitude `x^p m^{pq}` under `pd−cq=1`; with the assigned positive normal-disk meridian `μ=m^{-1}`, this agrees with `μ=y^d x^{-c}` and `λ=h μ^{-pq}`. URL: <https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf>.
- Hatcher, *Notes on Basic 3-Manifold Topology*, §1.2, printed pp. 13–14, defines multiplicity and distinguishes multiplicity-one regular fibers from multiple/exceptional fibers. URL: <https://pi.math.cornell.edu/~hatcher/3M/3M.pdf>.
- Akbulut–Ozbagci, “Lefschetz Fibrations on Compact Stein Surfaces,” §2, printed pp. 324–326, describes the torus-knot fiber construction by Hopf-band plumbing and shows the iterative gate construction. URL: <https://msp.org/gt/2001/5-1/gt-v5-n1-p10-p.pdf>.
- Calegari, *Introduction to Knot Theory*, §4.2, printed pp. 34–37, covers knot groups and abelianization; §4.3, printed pp. 38–39, describes the Alexander module and its Laurent-module action. The torus-specific Fox calculation is supplied locally by `lem-torus-knot-alexander-polynomial-from-presentation`. URL: <https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf>.
- Ozbagci, “A Note on Contact Surgery Diagrams,” §1, printed pp. 90–92, corroborates the positive Hopf-band convention and the torus-knot plumbing. The author-hosted PDF returned HTTP 403 to direct fetch; the relevant indexed excerpt was inspected, so this is corroboration only. URL: <https://mysite.ku.edu.tr/bozbagci/wp-content/uploads/sites/330/2023/04/diagram.pdf>.

Validation after the final item edit:

- Reflow: `node tools/tsx-run.mjs tools/reflow.mts items/thm-torus-knot-group-presentation.md` — unchanged.
- Precheck: `node tools/tsx-run.mjs tools/precheck.mts items/thm-torus-knot-group-presentation.md` — pass.
- Strict proof contract: `node tools/proof-contract.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-70.proof-contracts.json --strict --items thm-torus-knot-group-presentation` — 0 errors, 0 warnings.
- Proof layout: `node tools/proof-layout.mjs items/thm-torus-knot-group-presentation.md` — 1 item, 7 steps, 0 defects.

No original Statement or Definition changed, so the consumer interface did not change. No assigned B-page prose or item was edited.

## Uneditable defect

`thm-seifert-matrix-presents-knot-alexander-module`, Proof 1.1, assumes “The smooth boundary collar of `F`” and immediately uses a global map `c: K×[0,δ)→F`. The item does not establish this collar or cite/declare the prerequisite. Its current dependency list does not contain `thm-collar-neighborhood-theorem`; that published theorem states every smooth manifold with boundary has a collar under countable choice, which full AC supplies through the run's choice implication. A dependency declaration and citation to that theorem, or a local collar construction, are needed. This producer is outside batch 70, so it was not edited. The assigned consumer whose dependency closure reaches it is `thm-torus-knot-alexander-and-genus-formulas`.

## Page verdicts and blocker

- `torus-knots-and-seifert-fibered-exteriors` (A): no page-prose defect; assigned items were reviewed and the group-tube omission was repaired. The torus-knot genus proof still has the uneditable supplier gap listed above.
- `torus-knots-and-seifert-fibered-exteriors-examples` (B): no page or example-specific defect; both worked cases and the `(2,2)` boundary counterexample are correct under the stated supplier conventions.
- No batch-70 workflow blocker remains. At the final run-status check the autopilot was paused and showed an unrelated run-level `3a-collect` blocker (`collect-49` failed three times, batch 49); no run state was changed.

## Coverage note

All assigned carriers and their direct dependencies were opened, along with the supporting topology, Alexander-module, algebra and Seifert-form suppliers listed above. I did not exhaustively re-audit every lower-level proof in the manifest-derived 98-item transitive dependency closure; the large transversality supplier package beneath the Seifert-matrix skew-part result is one such unexhausted portion. Calegari §§4.2–4.3 were inspected at the cited pages; his §3.2 was not independently read in this session. The local positive-braid surface proof and the inspected Akbulut–Ozbagci construction were used for that claim. No coverage is claimed for the uninspected transitive suppliers.
