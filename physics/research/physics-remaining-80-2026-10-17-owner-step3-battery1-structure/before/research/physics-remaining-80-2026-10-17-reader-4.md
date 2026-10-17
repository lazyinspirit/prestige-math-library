# Step 3a reader report — batch 4

Run: `physics-remaining-80-2026-10-17`  
Batch: `4`  
Role: reader  
Scope: `emg-mg04` and `emg-mg04-examples`

## Instructions and inventory opened

Read the required workspace instructions and content rules: `../CLAUDE.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, and `../PHYSICS-CONTENT-MODEL.md`. Read `briefs/reader.md`, the batch-4 manifest, proof contracts, cross-batch dependency file, notes, and coverage record. Read the read-only `research/math-imports.json` index for the mathematical page prerequisites. The manifest assigns these pages and items:

- Pages: `emg-mg04`, `emg-mg04-examples`.
- Items: `lem-emg-matter-noether-exchange`, `lem-emg-einstein-action-variation`, `def-emg-charged-scalar-functional`, `lem-emg-charged-scalar-variation`, `lem-emg-maxwell-stress-divergence`, `ex-emgmath-scalar-plane-wave`, and `ex-emgmath-eh-boundary-derivative`.

Opened the two assigned page files and all seven current item files. Also opened the current `emg-mg01`, `emg-mg02`, and `emg-mg03` page summaries. The draft supplier items inspected before assessing their consumers were `def-emg-local-potentials-and-circle-data`, `lem-emg-circle-connection-gluing`, `lem-emg-maxwell-current-forms`, and `lem-emg-maxwell-action-variation`. The seven M01-context carriers on M02 were also opened: `def-emg-finite-real-supremum-domain`, `def-emg-real-metric-axiom-convention`, `lem-emg-metric-axioms-imply-nonnegativity`, `def-emg-explicit-power-regimes`, `lem-emg-sequence-limit-criterion-with-choice`, `def-emg-boundaryless-completeness-domain`, and `def-emg-set-size-and-class-schema`.

Claim-relevant published mathematical suppliers opened included the Lorentzian field and Hodge conventions, principal-bundle convention, de Rham definition, positive-root and Euclidean smoothness results, trigonometric and complex-exponential results, countable choice, GR metric volume and divergence identities, local tetrad/point-normal/geodesic results, Hilbert tensor and metric variation, coefficient-vanishing lemma, Lie derivative and flow definitions/results, bump lemma, curvature and contracted Bianchi identity, Levi-Civita tensor derivative, compactly supported integration, partitions of unity, Darboux integrals, Riemann–Fubini, and the second fundamental theorem of calculus. The direct supplier statements and the locally used proof arguments were checked against the current carriers.

The direct page prerequisites in the batch manifest were also located. The current physics pages `emg-mg01`, `emg-mg02`, `emg-mg03`, `gr-einstein-and-matter`, `gr-curvature-and-tides`, and `gr-connections-and-free-fall` were opened. The root mathematics pages `the-exterior-derivative-and-cartan-calculus`, `smooth-partitions-of-unity-and-exhaustions`, `countability-and-uncountability`, `integration-of-forms-and-the-general-stokes-theorem`, `fibrations-fiber-bundles-and-homotopy-exact-sequences`, and `the-de-rham-theorem-and-degree` were identified in the import index and their relevant page summaries checked. Root mathematics files remain read-only.

## Independent mathematical review

- `lem-emg-matter-noether-exchange`: the compact gauge test yields current conservation; the horizontal lift gives the local connection variation `alpha_a = xi^b F_ba`; the stated metric/current variation conventions then give the matter stress exchange identity. The calculation is conditional on the stated smoothness, on-shell matter variation, and gauge/diffeomorphism invariance. It does not assume Maxwell's equations.
- `lem-emg-einstein-action-variation`: the compact-support extension of the local Einstein–Hilbert density formula is sound; adding the conditional Maxwell and matter variations gives the displayed metric equation. The contracted Bianchi identity gives only the stated compatibility condition, not existence of a solution.
- `def-emg-charged-scalar-functional`: the local transition and covariant-derivative calculations patch with the integer-weight condition in the circle branch. The trivial global-potential branch remains separate and allows arbitrary real `lambda`. The action, currents, units, and compact variation conventions are formal mathematical data, not empirical claims.
- `lem-emg-charged-scalar-variation`: the three first variations and the off-shell current/stress identities follow with the stated sign and smoothness conventions. The on-shell consequence is conditional on the scalar equation.
- `lem-emg-maxwell-stress-divergence`: the cyclic identity from `dF=0`, contraction with `F`, and the sourced equation give the claimed sign. Smoothness is explicit; singular self-fields and distributional sources are excluded.
- `ex-emgmath-scalar-plane-wave`: direct substitution gives the exact background scalar solution. For nonzero coupling its current obstructs the sourced Maxwell equation when `F=0`; the example is not presented as a coupled solution or observation.
- `ex-emgmath-eh-boundary-derivative`: the conformal metric variation preserves Lorentz signature for small parameter, vanishes at the boundary, and has the computed nonzero normal-derivative flux. This is a local subdomain calculation, not a gravitational boundary-value claim.

The citations were checked at their cited locators. David Tong's [*General Relativity*](https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf) was checked at §4.1 and §§4.5.2–4.5.3; Carroll's [arXiv notes](https://arxiv.org/pdf/gr-qc/9712019v1) at Ch. 4 equations (4.54)–(4.70) and Ch. 5 equations (5.33)–(5.38); David Tong's [*Gauge Theory*](https://davidtong.org/pdfs/teaching/gauge-theory/gauge.pdf) at §2.5.2; and Morrison's [*Connections on Principal Fibre Bundles*](https://tqft.net/papers/ConnectionsAndBundles.pdf) at §§5.1 and 7.1. These passages support the stated conventions; the batch's charged and sourced identities are proved locally. I inspected relevant passages, not every page of those documents.

## Repairs made

1. In `items/def-emg-charged-scalar-functional.md`, the definition previously used “smooth right principal bundle” and “principal connection” without stating their smooth structure and defining properties. I added the smooth equivariant bundle charts, the invariant horizontal distribution (and its normalized real connection-form characterization), and the local-section convention `a_i = sigma_i^* omega`, `A_i = kappa_0 a_i`. I removed the inapplicable `verification.precheck: n/a` entry; no pass stamp was added. The affected derivation entry in the batch-4 proof contract was updated to bind the explicit input conventions.

   Evidence: the cited Morrison source's §5.1 defines a connection by smooth equivariant horizontal lifts/subspaces; §7.1 gives the equivalent connection-form characterization. The local normalized potentials and rescaling are supplied by the opened `def-emg-local-potentials-and-circle-data` item. The four direct current-run consumers are `lem-emg-charged-scalar-variation`, `ex-emgmath-scalar-plane-wave`, `def-emg-trivial-potential-charged-scalar-system`, and `def-emg-classical-charged-scalar-model`. Their current uses remain within the clarified fixed-sector or global-potential branches; the 12 transitive current-run consumers continue through those unchanged public interfaces. No consumer repair was needed.

2. In `items/lem-emg-matter-noether-exchange.md`, the role for `lem-emg-maxwell-current-forms` was changed from `mathematical-premise` to `formulation-prerequisite`. The item explicitly uses it only to fix the downstream Maxwell source-sign convention; its statement and proof assume no Maxwell equation.

Reflow reported both changed item files unchanged. Precheck passed for `def-emg-charged-scalar-functional` and `lem-emg-matter-noether-exchange`. Final `proof-layout` passed for both changed item paths: 2 items, 9 steps, 0 defects. No judge stamp was added or removed; neither changed item had a `verification.judge` record.

## Defect not editable

- Published root page `the-exterior-derivative-and-cartan-calculus`, at the opening sentence of its summary, calls itself “This draft page ...” although its frontmatter has `status: published`. The statement is internally inconsistent; this is a nonfatal editorial false claim in a read-only published mathematical dependency. The assigned item `def-emg-charged-scalar-functional` reaches a listed item on that page through `lem-emg-lorentz-hodge-calculus`. It is reported in the findings JSON for owner routing.

No other confirmed uneditable defect was found in the assigned page/item material or the inspected supplier interfaces.

## Page verdicts and blocker

- `emg-mg04`: no local page-summary or inventory defect. Its mathematical claims are conditional, and the page accurately distinguishes them from physical postulates and observations. One nonfatal published-page summary mismatch is reported above. Batch-2 and batch-3 supplier carriers remain drafts, so this review does not certify their proofs or close their open dependency-review edges.
- `emg-mg04-examples`: no page-summary or inventory defect. Both examples are mathematical calculations and make no empirical claim.

Blocker to full dependency acceptance: the current M02/M03 supplier carriers and their inherited source closure remain under their own draft review. Their inspected interfaces were used conditionally; this reader report does not independently certify their full dependency closures. The cited PDFs were inspected at relevant locators rather than cover-to-cover.
