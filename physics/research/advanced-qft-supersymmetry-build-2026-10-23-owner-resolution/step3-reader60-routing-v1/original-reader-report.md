# Reader report — batch 60

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: reader  
Batch: `60`

## Opened inventory

Pages opened:

- `qftx-adhm-zero-fi-asd-correspondence` (`library/quantum-field-theory-mathematics/qftx-adhm-zero-fi-asd-correspondence.md`)
- `qftx-adhm-zero-fi-asd-correspondence-examples` (`library/quantum-field-theory-mathematics/qftx-adhm-zero-fi-asd-correspondence-examples.md`)

Both page files contain YAML frontmatter only, have empty bodies, preserve their assigned item inventories and metadata, and retain `page_layout: compact-v1`.

Assigned items opened, in supplier-before-consumer order:

- A page: `def-qftx-donaldson-adhm-matrix-convention`; `lem-qftx-local-integrable-dolbeault-frames`; `lem-qftx-adhm-entrywise-conjugation-does-not-match-real-moment-map`; `def-qftx-zero-fi-regular-adhm-and-twistor-data`; `lem-qftx-u-n-determinant-flat-charge-normalization`; `lem-qftx-round-s4-positive-scalar-kernel-vanishes`; `lem-qftx-twistor-line-section-direct-image`; `lem-qftx-raw-adhm-real-twistor-block`; `thm-qftx-framed-penrose-ward-correspondence-on-s4`; `lem-qftx-linear-twistor-monad-charge-normalization`; `lem-qftx-asd-penrose-kernel-vanishing`; `lem-qftx-asd-twistor-vanishing-and-monad-reconstruction`; `lem-qftx-adhm-real-monad-normalization-and-charge`; `thm-qftx-zero-fi-regular-adhm-asd-correspondence`; `lem-qftx-rank-one-regular-adhm-and-ordinary-asd-boundary`.
- B page: `ex-qftx-zero-fi-flat-framed-sector`; `ex-qftx-positive-fi-boundary-is-not-asd`.

For claim checking, I opened the relevant prerequisite statements and proofs, including `def-qftx-adhm-linear-data-stability-and-regularity`, `def-qftx-instanton-number-and-asd-sector`, `lem-qftx-principal-curvature-cartan-bianchi`, `thm-qftx-adhm-real-complex-quotient-correspondence`, `thm-qftx-framed-p2-monad-adhm-correspondence`, `thm-qftx-projective-gaga-for-monad-data`, `thm-qftx-coupled-penrose-vanishing`, `thm-qftx-positive-real-adhm-monad-normal-form`, `lem-qftx-positive-real-monad-chain-lift`, `lem-qftx-twistor-line-section-direct-image`, and `thm-cohomology-projective-space-twisting-sheaves`. I also checked the cited Donaldson ADHM conventions in §6, equations (8)–(9), and the projective GAGA statement used by the Ward argument.

## Repairs and evidence

The following statement repairs supply definitions and conventions that the original statements had left to references or surrounding prose. They do not change the intended conclusions or their proof arguments.

- `lem-qftx-adhm-entrywise-conjugation-does-not-match-real-moment-map`: stated the source vector spaces, map types, Hermitian products, source equations, and raw moment maps in the Statement. Clarified that the explicit (k=N=2) witness solves the displayed source equations, without asserting an unproved source full-rank condition. Checked the signs against Donaldson §6, equations (8)–(9), and the local matrix calculation.
- `lem-qftx-u-n-determinant-flat-charge-normalization`: specified the unit round metric, positive stereographic orientation and coordinates, unitary framing, anti-Hermitian curvature, Hodge-star convention, charge integral, and determinant Chern-form convention. The existing proof supplies flatness and the Chern–Weil sign.
- `lem-qftx-linear-twistor-monad-charge-normalization`: stated the twistor fibration, quaternionic involution, base and twistor orientations, (H), the normalized generator (u), ASD connection and charge, and local freeness of the monad cohomology. The existing Chern-character and pullback calculation gives the charge conclusion under these conventions.
- `lem-qftx-raw-adhm-real-twistor-block`: stated the standard Hermitian products, types of (B_i,I,J), and both raw moment maps before using their component identities. Its proof verifies the block identities, stability/costability criterion, projection connection and monad equations.
- `lem-qftx-adhm-real-monad-normalization-and-charge`: expanded the Statement to identify the twistor and framed ASD data, Ward pairing, monad, regularity criteria, raw block map and projection connection, residual (U(k)) action, and charge convention. The normal-form theorem and the raw-block and charge suppliers support the stated conditional conclusions.
- `thm-qftx-framed-penrose-ward-correspondence-on-s4`: made the GAGA input, framed ASD object, twistor space and real lines, Ward pairing and positivity, framing, line-section bundle, first infinitesimal neighbourhood, spinor planes and torus action explicit. Its proof still supplies the local holomorphic-frame, family/base-change, connection, and inverse-construction arguments.
- `thm-qftx-zero-fi-regular-adhm-asd-correspondence`: gave the raw data and quotient, moment maps, stability/costability, framed ASD sector and charge, and torus action explicitly. Spelled out the conditional supplier conclusions and the first-order base-change range, and supplied the (k=1), positive-FI non-locally-free witness. The quotient, sheaf, Ward and monad conclusions remain conditional on the named suppliers.
- `ex-qftx-zero-fi-flat-framed-sector`: specified the zero-dimensional ADHM datum, moment maps and regular quotient, as well as the framed ASD object and charge used in the example. The uniqueness of the empty datum and flat framed connection follows from the existing (k=0) arguments.
- `ex-qftx-positive-fi-boundary-is-not-asd`: stated the scalar ADHM spaces, moment maps, stability and costability, positive-FI equation and complex orbit representative before presenting the P² monad. The existing proof checks the monad and its non-locally-free boundary point.

The batch-60 proof-contract file was updated so its 17 citations to changed Statements quote the current text. Derivation rows were unchanged because no proof steps were repaired. None of the nine changed items contained a stale `verification.judge` record.

Diagram review: the assigned twistor-fibre square in `def-qftx-zero-fi-regular-adhm-and-twistor-data` and the inverse-composition triangle in `thm-qftx-zero-fi-regular-adhm-asd-correspondence` have the stated objects, directions and compositions. Both are consistent with the adjacent text.

## Validation

- Reflow and direct precheck were run for all nine changed items. Each reflow reported `unchanged`; each direct precheck passed.
- The required single batched proof-layout run covered all nine changed items: `9 items, 39 steps, 0 defects`.
- The batch-60 page files and inventories required no edits.

## Defects not editable in this assignment

1. `def-qftx-positive-real-monad-first-order-families` (batch 69), `## Definition`, opening paragraph, first sentence, is ill-formed. It begins “Use the dual-number scheme, relative projective-space charts, finite locally free sheaves and twisting sheaves in The affine scheme of dual numbers, Relative projective space from standard charts, Locally free sheaves of finite rank and Twisting sheaf on Proj, with …”. The title-like definition names after “in” do not form a grammatical or mathematical definition. The four dependency edges do not repair this malformed clause; the producer must rewrite it to identify those definitions coherently while keeping the assumptions in the complete definition. The current raw source hash is `b789be95cda1c8dfac5e16df28ba82a995abf97addf55ee7ff0aa72b4ec85095`. It is a prerequisite of `thm-qftx-positive-real-adhm-monad-normal-form`, which is a prerequisite of assigned consumer `lem-qftx-adhm-real-monad-normalization-and-charge`. I did not edit the batch-69 producer.

2. The changed Statement of `thm-qftx-zero-fi-regular-adhm-asd-correspondence` has an out-of-scope current-run consumer: batch-12 item `thm-adhm-fixed-point-instanton-count`. I inspected its use of the equivariant bijection and found no mathematical change to its argument, but its batch-12 proof-contract entry `contracts.thm-adhm-fixed-point-instanton-count.citations[A2].quote` still contains the former Statement, which is not a substring of the current Statement. The current statement retains the same bijection conclusion with its conventions written explicitly; the batch-12 owner must refresh the contract snapshot. I did not edit batch 12.

No other uneditable mathematical defect was confirmed in the assigned items. The separately inspected `lem-qftx-positive-real-monad-chain-lift` diagram is accepted by the production renderer's supported `tikzcd` input forms and is not a diagram finding.

## Page verdicts and coverage limits

- `qftx-adhm-zero-fi-asd-correspondence`: page metadata, compact layout and empty-body rule pass. Its assigned content has the repaired statements above; the transitive batch-69 definition defect remains a blocker for the affected monad-normalization consumer.
- `qftx-adhm-zero-fi-asd-correspondence-examples`: page metadata, compact layout, empty-body rule and two-item inventory pass.

I checked the named suppliers needed for the assigned claims, but did not independently re-prove every deeper analytic and algebraic-geometric argument below the projective GAGA and positive-real monad-normal-form suppliers. Conclusions using those results remain conditional on their stated hypotheses. Both assigned diagrams were checked. The two out-of-scope findings are recorded separately in the JSON output.
