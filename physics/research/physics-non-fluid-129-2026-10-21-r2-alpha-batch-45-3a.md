# Batch 45 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-45`.

## Completed: channel definition (level 0)

Retained the reader source repair, amending only its contract endpoint locator, for `def-nrqmx-scattering-channel-data`. Pre/post item hashes differ (455e40c1… / 6b041d88…); the reader report describes the precise unitary-hypothesis, finite-matrix-data and diagram-caption edits. Current definition and all five direct supplier interfaces were independently inspected. For bounded J, completeness alone cannot imply unitarity: J=2I on a purely ac model gives Omega=2I and S=4I. The repaired statement requires isometries onto the same ac subspace, so their restricted adjoints are inverses. Zero ac spaces and J=0 are covered conditionally. The finite C^r matrix field remains independent input.

The only TikZ diagram has the correct objects, arrows and composite. Omega_+ vanishes on the orthogonal complement of the free ac space, so its full adjoint has precisely the displayed codomain. No additional diagram is needed. The three actual item consumers (Cook counterexample, finite-channel Wigner–Smith theorem, compact-support closure theorem) retain valid uses: exact range completeness, separate matrix-field input, and already established isometry/completeness, respectively. No outside consumer was found by the exact-ID search of items/library.

Source checked: [Yafaev, Lectures on Scattering Theory](https://arxiv.org/pdf/math/0403213), PDF p.3, Definitions 1.1–1.3 and equation (1.4), especially the explicit loss of isometry for modified wave operators. Mathematical supplier interfaces: bounded operators, self-adjointness, Stone group, canonical spectral-type decomposition, AC. Full transitive proof audits are not asserted. The contract now contains the specific completed risk review.

## Completed: Gaussian continuation (level 1)

Independently read all four proof steps and all ten direct dependency interfaces. Normalization, radial coefficient, the real-a Laplace substitution and connected-half-plane identity theorem are correct. The two explicit difference-quotient majorants are integrable and justify complex differentiation; no differentiation theorem is smuggled into DCT. On the upper part of the disk, sqrt(-z)=-ik has positive real part, yielding the stated continuation sign. E0>0 and exclusion of zero avoid the branch point. This is a dimensionless local continuation, with no pole existence or empirical assertion. Risk review complete; no item decision owed and no repair made.

Source: Taylor, *Introduction to Analysis in Several Variables*, §3.1, Gaussian-integral discussion (printed p.105); exact local Gaussian/Tonelli/polar/DCT/identity theorem supplier statements were checked. The analytic continuation itself is proved locally, rather than attributed to that Gaussian reference.

## Completed: finite-channel and compact-support carriers (level 1)

The Wigner–Smith item source is identical in the pre/post snapshots; its touched status comes from consumer contract enrichment. `reviewed_no_defect`, `change_kind: audit_enrichment`. All three steps are valid: differentiate S* S=I, expand the determinant polynomial at the identity, and conjugate under constant incoming/outgoing unitaries. The logarithmic derivative avoids branch selection; r=1, vanishing derivative and an empty interval cause no exception. Joule-seconds divided by joules gives seconds, with no measured arrival-time claim. [Texier](https://arxiv.org/pdf/1507.00075), §2.2.4 equations (17)–(19), supports the convention and its basis dependence; the algebra is proved locally.

The short-range item source is likewise identical pre/post, with touched consumer contract evidence only: `reviewed_no_defect`, `change_kind: audit_enrichment`. Independently checked all four steps against the exact seven supplier interfaces, especially the published compact-support completeness and stationary/dynamical identification statements. Real bounded V supported in a compact set meets the bounded-ball hypothesis. Both use the same H^2 domain, scaled Fourier normalization, positive-energy Jacobian and compact-region adjoint; the resolvent sign and sqrt(k)/(4 pi^(3/2)) coefficient match. Completeness is an independent supplier, not a conclusion drawn from Cook existence. V=0 gives identity, and no claim excludes zero/negative point spectrum or extends the formula to the threshold or Coulomb case. The exact F3 supplier interface remains recorded in supplier_excerpts; the fact parser splits its multiline display, so an attempted redundant F3 citations entry was removed after the focused checker rejected that entry. No mathematical content changed. Specific risk review complete.

These source-level checks use the published supplier statements as inputs; no recursive full audit or new acceptance of their proofs is asserted. The physical normalization/units are explicitly conditional, and no empirical premise appears.

## Completed: Cook finding and counterexample (level 1)

`refuter:45:1`: **confirmed_fatal**, repaired with confidence 1. The exact multiplier supplier states L2(R^d), while F2 claimed its conclusion on the Borel interval (0,1), with no transfer argument. This is a real citation mismatch even though the desired assertion is elementary and true. Replaced that dependency by the exact definition of self-adjointness. Step 1.1 now proves the norm bound and the full-domain adjoint identity directly, including the direct sum. The witness and Statement refuted are unchanged. Manifest dependency roles, F2 contract citation/excerpt and step-1.1 derivation are synchronized; no prior judge record existed.

The touched obligation concerns the reader's earlier consumer contract enrichment (source unchanged between pre/post snapshots), separately recorded as `reviewed_no_defect`, `audit_enrichment`, with empty defect IDs; it does not discharge the refuter finding. That finding owns the single closed citation-defect ledger row.

All direct interfaces were checked. Rational interval generation and finite Borel measure justify separability under CC; PVM multiplication and the spectral/functional-calculus interfaces give the two groups. Every scalar measure is absolutely continuous; both approximants equal J for all t and the Cook derivative is zero. The unit-norm vector 0 direct-sum 1 proves strict range inclusion. This is a valid abstract two-space counterexample, with no claim that a particular physical scattering model is incomplete. The claim, witness and consumer interface are preserved; no outside repair is needed. Risk review complete.

## Completed: rank-one continuation (level 2)

Read all five steps and thirteen direct interfaces, and independently read the current batch-44 rank-one supplier's complete proof, its manifest and relevant contract. The supplier's X^2=mX calculation and two-sided inverse have the correct domains. Its (H-zI)^-1 convention is explicit and opposite to the imported resolvent definition; existence of the inverse is unchanged by that sign. Its hypotheses match A1 exactly.

Upper-half-plane denominator zeros would produce forbidden nonreal eigenvectors. The first-variable-linear convention gives the product a_f b_h without an extra conjugate. A nonzero numerator over a finite-order denominator zero has precisely that pole order, and for a simple zero the lambda factors cancel to give the stated residue. The Gaussian density has the correct sqrt(E)/2 Jacobian; completion-to-Borel representatives justify polar integration. At a denominator zero, m=-1/lambda is nonzero. g=0 cannot meet the zero hypothesis, lambda=0 is excluded, and the theorem does not promise any zeros. Poles of the continued element are distinct from eigenvalues of the self-adjoint operator. Risk review complete; no decision owed and no repair needed.

Sources read: [Albeverio–Kurasov](https://api.pageplace.de/preview/DT0400.9781139382595_A23867432/preview-9781139382595_A23867432.pdf), Theorem 1.1.1 and proof, printed pp.9–10 (preview PDF pp.24–25); [Gadella–Pronko](https://arxiv.org/pdf/1106.5782), reduced-resolvent discussion, equations (2.11)–(2.14), currently retrieved PDF pp.10–11. These give source conventions/context; the finite-order quotient and residue assertions are independently proved by the local argument. No claim of reading the whole books/articles is made.

The owned cross-batch item-use record is refreshed with this exact review; the page prerequisite inventory remains unchanged. No published defect, outside consumer repair, withdrawal, unresolved prerequisite or owner blocker was found. Imports and published carriers remain read-only.

## Focused validation and final disposition

Exactly five decisions are recorded: one amended reader repair (definition source retained, endpoint contract locator clarified), three clean touched contract enrichments, and one confirmed-fatal refuter citation defect repaired locally. The reader definition repair has three separately closed ledger entries (missing isometry hypothesis, undefined finite-channel terminology, adjoint caption typing); the refuter finding has exactly one closed citation-defect row. No mechanical checker failure was entered as a mathematical defect.

Initial strict contract check found an unanchored endpoint worksheet sentence and rejected the redundant F3 citation entry because its fact parser splits the multiline display. Added the precise Definition locator and retained the existing exact F3 supplier excerpt instead. Subsequent validation results are recorded below. The engine retains decision hashing, gates, certification and stage transitions; none was initiated here.


Checks completed:

- Scoped reflow of the repaired counterexample: completed.
- Scoped precheck: 1 checked, 0 failing.
- Strict owning proof-contract check after worksheet fixes: 8/8 checked, 0 errors, 0 warnings.
- Required risk report before reviews and final `--require-reviewed`: 8 items routed, 0 errors; all five HIGH/CRITICAL reviews complete.
- Scoped renderer: YAML and all math parse successfully.
- Final proof-layout command on the complete changed-item selection (`items/cex-nrqmx-cook-not-completeness.md`): 4 steps, 0 defects, after reflow and all item edits.
- Frontier dependency ledger refresh: refreshed and deduplicated.

The final counterexample raw SHA-256 is `e3dbf3be14f9a9581bd19142c743fbfaf7b47e78446bf70e1d249fdb256c9b57`. Its historical worksheet is preserved separately; the current worksheet records this repair and the unchanged boundary reasoning. No item was judged, stamped or published. No new prerequisite or statistical/empirical evidence was invented. Local work is complete; engine-owned hashes and gates remain outside this dispatch.
