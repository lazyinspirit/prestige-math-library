# Step 3a reader report — batch 79

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Scope: batch `79`

## Inventory opened

Assigned pages:

- `library/quantum-field-theory-mathematics/qftx-chern-simons-bf-gravity.md` (A page; draft; mathematics).
- `library/quantum-field-theory-mathematics/qftx-chern-simons-bf-gravity-examples.md` (B page; draft; mathematics).

Page prerequisites opened:

- `library/quantum-field-theory-mathematics/qftx-modular-tqft-sewing.md` (draft page carrier; its three listed items are not used by an assigned item).
- `library/quantum-field-theory-mathematics/qftx-bv-brst.md` (draft page carrier; its four listed items are not used by an assigned item).
- `../library/differential-geometry/integration-of-forms-and-the-general-stokes-theorem.md` (published page; supplies `thm-general-stokes-theorem`).

Assigned items, reviewed in dependency order:

1. `items/def-qftx-cs-bf-actions.md` — action-data definition; no item dependencies.
2. `items/lem-qftx-three-dimensional-curvature-determined-by-ricci.md` — algebraic curvature identity; no item dependencies.
3. `items/prop-qftx-cs-bf-variation.md` — Chern–Simons and BF variations; depends on the action definition, published `def-countable-choice`, and published `thm-general-stokes-theorem`.
4. `items/prop-qftx-three-dimensional-gravity-bf.md` — coframe-sector correspondence; depends on the action definition, curvature lemma, and variation proposition.
5. `items/cex-qftx-degenerate-bf-triad.md` — zero-field counterexample; depends on the action definition and gravity proposition.

The two published mathematical suppliers were opened at `../items/def-countable-choice.md` and `../items/thm-general-stokes-theorem.md`. The countable-choice definition explicitly says every countable family of nonempty sets has a choice function. The Stokes theorem explicitly assumes `AC_ω` and states the compact-support formula with outward-normal-first boundary orientation. Its six direct cited items were opened: `lem-half-space-stokes-for-a-compactly-supported-form`, `lem-euclidean-stokes-for-a-compactly-supported-form`, `lem-partition-localization-of-stokes`, `thm-change-of-variables-for-oriented-manifold-diffeomorphisms`, `prop-integration-over-an-oriented-embedded-submanifold`, and `thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold`.

The assigned proof contract was opened at `research/physics-non-fluid-129-2026-10-21-r2-batch-79.proof-contracts.json`. No prior author verdict was used as a substitute for reading the current carriers.

## Mathematical and source review

- The action definition specifies the compact oriented three-manifold, smooth Lie-algebra-valued forms, invariant nondegenerate pairing, bracket, curvature, and the fixed-trivialization limitation. Its local CS and BF integrands are well typed under the stated form-pairing convention.
- The curvature lemma’s Ricci contraction and the diagonal and off-diagonal component equations are consistent with its stated Lorentzian convention. The final implication `Ric = 0` iff `R = 0` follows from the displayed identity.
- The variation proposition differentiates both functionals, keeps the boundary terms, and restricts bulk Euler equations to interior-supported variations. The field-space two-form, gauge contraction, boundary charge variation, and the disk example have the stated signs and qualifications.
- In the gravity proposition, the volume-form map `J` is an isomorphism and intertwines the vector and adjoint actions. This justifies transporting the BF equation `D_ω(Je)=0` to `D_ω e=0`. On a coframe region, the induced connection is metric-compatible and torsion-free; the curvature convention matches the curvature lemma. The Einstein-tensor trace and both directions of the coframe-sector equivalence are established. Degenerate fields are expressly retained.
- The counterexample `e=0`, `ω=0` on the closed three-ball satisfies both BF equations and induces the zero, degenerate tensor; it refutes the stated universal claim.
- No TikZ/tikzcd diagrams occur in the assigned items or page carriers, and none is needed to state or prove these results.

Source checks:

- Khesin and Wendt, *The Geometry of Infinite-Dimensional Groups*, §3.2, printed pp. 184–186: Definition 3.11 gives the CS functional, Proposition 3.12 computes its variation and boundary contribution, and the following discussion gives the presymplectic structure. The source uses a compact simply connected simple group and a trivial bundle; the assigned items state their broader algebraic setup and supply local arguments.
- Carlip, *Quantum Gravity in 2+1 Dimensions: The Case of a Closed Universe*, §2.1 eq. (2.1.1) gives the 3D curvature–Ricci identity; §2.3 eqs. (2.3.1)–(2.3.10) give the first-order triad/spin-connection action, equations, and ISO(2,1) Chern–Simons interface.
- Baez, *An Introduction to Spin Foam Models of BF Theory and Quantum Gravity*, §2: the invariant-pairing BF action and variation give `F=0`, `D_A E=0`; Remark 1 explicitly says the abbreviated calculation ignores boundary terms unless boundary conditions remove them. The assigned proposition retains and derives those terms.
- Lee, *Introduction to Smooth Manifolds*, 2nd ed., Theorem 16.11, pp. 411–414: compactly supported Stokes formula for oriented smooth manifolds with boundary, matching the cited supplier statement.

## Findings not licensed for editing

1. The A-page `requires` entries for `qftx-modular-tqft-sewing` and `qftx-bv-brst` have no stated in-scope use. The page is frontmatter-only under the current build policy; its listed items are the four assigned carriers above. None depends on those QFT pages. In particular, the action definition excludes a Reshetikhin–Turaev identification, path-integral measure, and quantization. The `integration-of-forms-and-the-general-stokes-theorem` prerequisite is used. See the finding for page `qftx-chern-simons-bf-gravity`.
2. The curvature-lemma proof contract points its six-component check to nonexistent step `2.2`; the off-diagonal equations are in item step `3.1` (`...batch-79.proof-contracts.json:92`).
3. The variation-proposition proof contract points the field-space sign check to step `3.1` instead of `3.2`, and its disk example to step `3.3` instead of `5.1` (`...batch-79.proof-contracts.json:282,287`).
4. The gravity-proposition proof contract points the Einstein-tensor trace to step `3.2` instead of `5.1`, and curvature transport to step `3.1` instead of `4.1` (`...batch-79.proof-contracts.json:448,453`).

These are nonfatal page/contract metadata defects; the referenced mathematical arguments are present and correct in the current items. The contracts are outside this reader’s authorized write scope, and no item prose was changed.

## Edits, verdicts, and blocker

- Edits: none. No confirmed defect in an assigned item or assigned A-page prose required repair.
- A page `qftx-chern-simons-bf-gravity`: mathematical contents reviewed; nonfatal unsupported page-prerequisite concern recorded above.
- B page `qftx-chern-simons-bf-gravity-examples`: pass; the counterexample is correctly placed and its construction is valid.
- Blocker: none.

Coverage limit: this review covered every assigned carrier, direct item prerequisite, the direct suppliers cited in the Stokes proof, and the listed source sections. It did not recursively re-audit the entire remote dependency closure of the published mathematical library.
