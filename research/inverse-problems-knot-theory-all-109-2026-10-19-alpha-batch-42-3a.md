# Step 3a — batch 42

Run: `inverse-problems-knot-theory-all-109-2026-10-19`. Group: `batch-42`.

Scope and evidence: read the order task, scope, reader report/findings, native refuter and pre/post hash inventories. Exactly one touched obligation; no reader/refuter/page/foreign-gate obligations. The six HIGH/CRITICAL items require risk reviews.

## Dependency-order review

### lem-ip-euclidean-trace-quotient-is-h12 (level 1)

Independently checked steps 1.1–4.1 against the current direct supplier Statements/Definitions: finite compactly supported charts give equivalent H1 norms; p=2 lies in every trace/right-inverse range; density extends the identity, L2 agreement identifies the kernel, and the bounded lift gives surjectivity and both quotient norm estimates. Nonempty smooth boundary is explicit; zero data and zero-boundary classes satisfy both kernel directions. AC/CC are carried through all supplier interfaces. No diagram, hyperlink interruption or defect found. External Gagliardo/Kampanou references are attribution; the argument uses the proved local interfaces, not imported proof claims.

Read all fifteen direct supplier formulation sections, especially the trace kernel and bounded right inverse; no recursive published-supplier audit is claimed. Risk review complete. Next: anisotropic DN definition, then well-posedness.

### def-ip-anisotropic-conductivity-dirichlet-to-neumann-map

Checked the complete real symmetric uniformly elliptic coefficient, quotient norm, weak equation and second-argument lift. The definition explicitly introduces a candidate and uses justified_by for existence, uniqueness, representative independence and boundedness; no circular existence premise is used. The scalar fixed-atlas/dual interface agrees via the reviewed trace quotient. AC implies the explicitly carried CC. Zero datum gives zero solution; c>0 excludes degeneracy; no complex-pairing convention is being asserted. All definition hyperlinks follow the complete section. No defect.

Risk review complete.

### lem-ip-anisotropic-conductivity-map-wellposedness

Checked steps 1.1–4.1 against the exact Poincare, completeness and real Lax–Milgram Statements. Boundedness supplies a finite slab, so the gradient inner product is complete and definite; c>0 gives coercivity and C bounds the operator norm by symmetry. One lift suffices, uniqueness removes its choice, and testing with the difference proves both uniqueness and lift independence. Expanding the symmetric quadratic energy eliminates the cross term and yields ||grad u|| <= sqrt(C/c)||f|| after taking infima; the second infimum gives the stated bilinear bound. Linearity follows from uniqueness. Zero data, constants, and arbitrary boundary classes work; no minimizer of the quotient norm is presumed. AC/CC assumptions match all interfaces. No defect; matrix quadratic-energy notation is read as grad(W)^T gamma grad(W).

Risk review complete.

### thm-ip-boundary-fixing-diffeomorphism-preserves-dn-map (level 5)

Checked every step 1.1–5.1 and the exact chain-rule, nonnegative change-of-variables, density, trace, zero-boundary, pullback and volume-density interfaces. Compact smooth inverse bounds give uniform ellipticity; absolute determinants avoid orientation assumptions. Smooth density extends composition, weak gradients and energy identity to H1, with signed integrands split into integrable positive/negative parts. Trace equality identifies boundary classes using the reviewed kernel interface; composition preserves H0 by compactly supported approximation. Testing against phi composed with F establishes transformed harmonicity and uniqueness identifies the solution. In the Riemannian clause inverse matrices and volume Jacobians cancel; a bijection fixing Gamma preserves its complement, hence supported traces. The final DN identification is conditional on smooth unique solutions. Empty patch gives only zero supported inputs; no global gauge conclusion is inferred from partial fixing. AC supplies the CC change-of-variables hypothesis. No diagram or mathematical defect.

Risk review complete. Next: the touched status-qualified open question and the explicit example.

### op-ip-general-anisotropic-calderon-uniqueness (level 6; touched obligation)

Independently checked the complete formulation against the fixed-atlas scalar DN and regularity suppliers: n>=3, compact connected nonorientable-allowed M, nonempty smooth boundary, nonempty proper same patch, zero frequency, smooth metrics and all smooth compactly supported input/test pairs. Positive conductivity at gamma=1 supplies uniqueness; its zero-boundary uniqueness supplies q=0 nonresonance, and smooth-data regularity gives every Hk. The energy pairing is density-valued and invariant under the patch-fixing gauge reviewed below it. Dated open-status and later unverified theorem claim are carefully separated. Visual inspection of preprint p.38 proves that its complement uses closure(E); page 8 confirms the seam is removed. Amended the reader Status note and contract evidence; no formulation, dependency or provenance class changed. No proof of the open conclusion or acceptance of the full preprint is asserted.

Verdict: **amended_repair**, repair_confidence: 1. Defect `ipkt109-b42-3a-preprint-overbar`: the current post-reader Status falsely says Proposition 7.2 omits a closure bar. The rendered PDF visibly includes it. Text extraction loses the bar. For the cap E={-b(z)<s<0}, its closure includes P0={b>0,s=0}; subtracting that closure removes the seam. The reader’s alleged set defect is absent from the current primary PDF. No claim is made about a different historically downloaded PDF without a byte binding.

Primary source: [OpenAI preprint](https://raw.githubusercontent.com/openai/math/main/preprints/Smooth-Anisotropic-Uniqueness-in-the-Calderon-Problem-from-One-Boundary-Patch-September-24-2026/paper.pdf), pp.1–2, 8, 38. Download SHA256 `1ec46ed64206d12d8fdca42ae7454db52571c0ba1eb458aaf234a6ddea061d39`; page 38 was rendered using PyMuPDF and visually inspected, including its displayed complement formula. These exact passages were read, not the full proof.

Historical pre/post inventories bind item hashes d540d0a1351e68e0c0c87e8eef6a75c081c8fc965172b74139925e29d8cd39ac / 0132fcb523d0d8139d5127952767c3c76284ab6e267495ca416083ca1c85e81f. At initial review all six current item bytes matched post-reader hashes. The correction is confined to Status; the original Open problem formulation and its consumers are unchanged. No judge record exists to invalidate. The historical author note deferring full preprint validation remains preserved; this focused review does not close that broader uncertainty or certify a solution. Risk review complete.

### ex-ip-anisotropic-boundary-fixing-gauge-example (level 6)

Checked Verification 1.1–4.1 against the already reviewed gauge theorem. Radial radius R(r)=r(1+epsilon-epsilon*r*r) has R(0)=0, R(1)=1, Rprime>=1-2epsilon>0 on [0,1]. The polynomial map is smooth at zero with differential (1+epsilon)I; radial and tangential eigenvalues are positive. The strict derivative bound persists slightly beyond r=1, giving a smooth inverse through the boundary. At zero the determinant is (1+epsilon)^n and the pushforward is (1+epsilon)^(2-n)I, distinct for n>=3 and epsilon>0. Compact nonsingularity supplies uniform ellipticity and the theorem gives equality on every quotient input/test pair. epsilon=0 and epsilon=1/2 are deliberately excluded; n=2 is excluded from the origin-based distinctness witness. No diagram, interrupted formulation or defect.

Risk review complete. Both assigned pages are YAML-only draft inventories with compact-v1 preserved; no page obligation or diagram requires a decision.

## Source coverage and dependencies

[Salo, §1, printed pp.170–171](https://library.slmath.org/books/Book60/files/30salo.pdf) gives the matrix gauge and the historical full-data questions. [Daudé–Kamran–Nicoleau, §1, equation (1.6), Q1 and data list, PDF pp.3–4; historical status p.6](https://arxiv.org/pdf/1803.00910) distinguishes same-patch and disjoint measurements. These passages were independently read; neither dated survey decides current consensus. The later preprint check and its reading limits are recorded above. Gagliardo/Kampanou citations remain attribution for the locally proved trace interfaces; no fresh reading of those full external works is claimed.

The current direct cited supplier Statements/Definitions were checked against the exact uses recorded in each item review. This was not a recursive proof audit of the published prerequisite closure. The batch-41 positive scalar solver Statement was additionally read to verify the open question's implicit solvability/uniqueness use. Owned cross-batch input now records these exact interfaces, including the implicit solver use, and the dependency ledger refresh succeeded. No defective published carrier or outside consumer requiring repair was found. Published items remained read-only. No withdrawal was removed or proposed.

## Focused validation

- Initial risk-report routed all six items; all now have specific complete Alpha risk reviews. The required `--require-reviewed` pass returned 0 errors for 6 items.
- Reflow on the changed open-problem item returned unchanged.
- Precheck returned 0 checked, 0 failing: the open-problem item has no proof, so this is applicability evidence, not proof verification.
- The final proof-layout invocation on the changed item reported 1 item, 0 steps, 0 defects.
- Rendercheck on the changed item passed real KaTeX and YAML parsing.
- The first strict batch contract check found one stale F1 quote in the trace lemma's contract. The current supplier distinguishes real continuous duals from complex conjugate-linear duals; its real H1/2 interface used here is unchanged. Refreshed only that exact quote from the current Definition. This mechanical citation synchronization creates no additional decision or mathematical defect row.

- After the quote refresh, strict proof-contract validation passed: 0 errors, 0 warnings, 6/6 checked. The repeated required risk-report pass also returned 0 errors.
- Decisions JSON parses and contains exactly the one owed touched decision; its defect ID resolves to exactly one closed row appended at 3a-adjudicate.
- Scoped git diff whitespace check passed.

Final changed item SHA256: `71219c908b1d35829e5369db6057fc822e0dfce430c42ca3f2eaccb0c60fc61b`. The other five item carriers still match the post-reader inventory. Page and item manifests require no change because only the open question’s Status changed; provenance remains literature-derived/not-applicable and status remains draft.

## Handoff

Batch 42 local work is complete with one amended repair and six complete risk reviews. No unresolved local blocker or substantial missing prerequisite was found. The preprint’s complete proof remains unvalidated, as the item explicitly states; earlier owner uncertainty is preserved. Live engine status recomputed from .autopilot reported running and an unrelated batch-30 split blocker; git log showed HEAD 66722d74a1. No run-control changes, judging, stamping, agent dispatch or judge cycle was performed. The engine owns decision hashes and the gate battery.
