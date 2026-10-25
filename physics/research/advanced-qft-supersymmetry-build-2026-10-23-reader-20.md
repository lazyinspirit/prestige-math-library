# Reader report — batch 20

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: Step 3a reader  
Batch: `20`

## Opened inventory

- Batch manifest: `research/advanced-qft-supersymmetry-build-2026-10-23-batch-20.pages.json`.
- Assigned A page: `library/advanced-qft-and-supersymmetry/qftx-gauge-fixed-perturbation.md` (`qftx-gauge-fixed-perturbation`).
- Assigned B page: `library/advanced-qft-and-supersymmetry/qftx-gauge-fixed-perturbation-examples.md` (`qftx-gauge-fixed-perturbation-examples`).
- Assigned items: `def-qftx-formal-perturbative-yang-mills-data`, `pthm-qftx-perturbative-yang-mills-st-identity`, `ex-qftx-finite-orbit-faddeev-popov-jacobian`, and `ex-qftx-brst-exact-lorenz-gauge-term`.
- Batch evidence reviewed: `research/advanced-qft-supersymmetry-build-2026-10-23-batch-20.proof-contracts.json`, `research/advanced-qft-supersymmetry-build-2026-10-23-batch-20.cross-batch-dependencies.json`, and `research/advanced-qft-supersymmetry-build-2026-10-23-batch-20.notes.md`. These were treated as navigation/context, not as verdicts.
- Current batch-19 manifest and the two current suppliers used as physical premises: `research/advanced-qft-supersymmetry-build-2026-10-23-batch-19.pages.json`, `post-qftx-nonabelian-yang-mills-model`, and `pthm-qftx-nonabelian-yang-mills-classical-gauge-invariance`.
- Other item suppliers opened for the actual uses: `def-qftx-nonabelian-brst-complex`, `lem-qftx-nonabelian-brst-nilpotence`, `def-qftx-local-brst-cohomology`, `def-qftx-bv-antibracket-master-action`, `lem-qftx-bv-canonical-action-generates-brst-differential`, `lem-qftx-bv-master-equation-brst-nilpotence`, `def-qftx-gauge-slice-and-faddeev-popov-operator`, `def-qftx-principal-connection-form`, `lem-qftx-principal-curvature-cartan-bianchi`, `def-qftx-lie-algebra-valued-form-bracket`, `def-principal-connection-and-vertical-curvature`, and `def-smooth-principal-g-bundle`.
- External source sections consulted: Barnich, Brandt, and Henneaux, *Local BRST cohomology in gauge theories*, §§2.3–2.4, Appendix 2.A, and §§12.2–12.3 ([source](https://arxiv.org/pdf/hep-th/0002245)); Maas, *Quantum Field Theory II: Gauge Theories*, §§4.5.1, 4.7.2, 5.2.7–5.2.8 ([source](https://static.uni-graz.at/fileadmin/_Persoenliche_Webseite/maas_axel/qftii2024.pdf)). The latter’s §5.2.8 gives the modified-minimal-subtraction combination (1/\delta-\gamma+\log(4\pi)); its text also cautions that anomalies require separate attention.

## Review and repair

### `ex-qftx-finite-orbit-faddeev-popov-jacobian`

**Confirmed defect, repaired:** The Example statement (current line 33) specified a right action `x · k` but called its orbit `K · s_r`, without defining that left-action notation. Verification step 2.1 (previous line 50) also evaluated the local gauge-condition map `chi`, whose domain is `U_r subset {x>0}` (line 31), at `(-r,0)`, which is outside that domain. The old step therefore did not justify the claimed second global intersection.

At the Example statement (line 33), I defined the right orbit `O_r = {s_r · k : k in K}` and the global coordinate zero set `S_global = {(x,y) in X : y=0}`. Verification step 2.1 (line 50) now computes the second coordinate on `O_r` directly, without evaluating `chi` outside `U_r`. Step 1.1 (line 48) gives the Jacobian at every `s'=(x,0) in S_r`, so the retained local-transversality claim is proved throughout the local slice. Remarks (line 54) and the TikZ label (line 65) now use the same defined orbit and zero set. I updated the `ex-qftx-finite-orbit-faddeev-popov-jacobian` derivation claims for steps 1.1 and 2.1 in the batch proof contract.

The diagram’s circle, two axis intersections, local positive-side segment, and counterclockwise action arrow agree with the text. The proof is independent of the diagram. A search of current item and page sources found no other item consuming this example; the page inventory is its only current placement.

Focused checks after the final edit:

- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/ex-qftx-finite-orbit-faddeev-popov-jacobian.md` — unchanged.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/ex-qftx-finite-orbit-faddeev-popov-jacobian.md` — pass.
- `node tools/physics-support/proof-layout.mjs items/ex-qftx-finite-orbit-faddeev-popov-jacobian.md` — 1 item, 2 steps, 0 defects.
- The edited batch proof-contract JSON parses successfully.

### Other assigned items

- `def-qftx-formal-perturbative-yang-mills-data`: the formal regulator, coupling convention, fields, local complexes, QAP input, and restricted covariant/power-counted quotient are explicitly defined. It presents the QAP and regulator behavior as assumptions, not proved facts.
- `pthm-qftx-perturbative-yang-mills-st-identity`: the classical master equation, local QAP, boundary behavior, and bounded covariant anomaly-exactness sequence are explicit hypotheses. The local induction cancels the first failing coefficient; the conclusion is formal and conditional, with no continuum measure, convergence, or empirical claim. The counterterm and anomaly quotients are defined with restricted representatives and primitives; no unrestricted-cohomology equivalence is asserted.
- `ex-qftx-brst-exact-lorenz-gauge-term`: the left-derivation sign gives the displayed gauge-fixing functional; the density has ghost number zero and dimension four, and the minimal plus nonminimal differential is nilpotent on the declared algebra. No global gauge slice or continuum measure is inferred.

## Page verdicts

- `qftx-gauge-fixed-perturbation` (A): pass. Draft physics frontmatter only, empty body, current compact layout flag, and inventory matching the two assigned A items. No summary or statement hyperlinks were present.
- `qftx-gauge-fixed-perturbation-examples` (B): pass. Draft physics frontmatter only, empty body, current compact layout flag, and inventory matching the two assigned examples. No summary was present. Its TikZ diagram was checked against the finite right action and local/global intersection claim described above.

## Uneditable findings and blocker

No confirmed defect remains outside this reader’s authorized repair scope. No blocker remains.

## Coverage limits

Both assigned pages and all four assigned items were reviewed, along with the direct item suppliers and the transitive suppliers needed for the stated BRST, principal-curvature, and gauge-slice uses. I did not audit every unrelated transitive mathematical dependency in the full library. The cited external sources were checked at the sections listed above rather than read cover to cover. The TikZ source was reviewed mathematically but not compiled to an image.
