# Batch 69 Step 3a adjudication

Run: `advanced-qft-supersymmetry-build-2026-10-23`. Group: `batch-69`. Draft content only; no judging, stamping or gate claim.

## Definition (level 0)

Reviewed `def-qftx-positive-real-monad-first-order-families` and the complete definitions of `def-dual-numbers-scheme`, `def-relative-projective-space-standard-charts`, `def-locally-free-sheaf-finite-rank`, and `def-twisting-sheaf-proj`. Retained the reader’s explicit semilinear dual and first-slot-linear Hermitian pairing. Confirmed refuter:69:1 as nonfatal and repaired the malformed opening supplier sentence; no mathematical condition changed. AC is inherited from twisting sheaves. Checked epsilon=0, rho_0, negative and positive real rho_r, k=0, the graph/infinity alternatives and nilpotent positivity exclusion. Risk review complete. Stacks Definition 33.16.1 and its following epsilon-scaling construction were retrieved and read at https://stacks.math.columbia.edu/tag/0B28, lines 18–35.

The ordered review and final checks are recorded below.

## Charge (level 0)

`lem-qftx-positive-real-monad-charge-normalization`: retained the reader’s rank domains, Euler characteristic definition, Whitney/additivity and long-exact-sequence justification. Removed its duplicated statement paragraph and made the integral algebraic Chern-class deduction explicitly use integral Whitney, rather than infer integral classes from a rational character. The same two exact sequences give this without extra hypotheses or suppliers. Checked all eight direct suppliers at their relevant definitions/statements, the finite-dimensional cohomology groups, k=N=0, H^4=0, c3=0, and the positive fiber Thom calculation. The claimed charge on S4 remains conditional on F being a pullback; no Ward correspondence is asserted. Risk review complete; touched decision is amended_repair.

## Hyperplane sequences and rank criterion (level 1)

Read the complete hyperplane stalk argument and both supplier definitions. Restriction is surjective on germs by extension independent of the normal coordinate; the integral formula proves its kernel. Rank-one tensoring gives the second sequence, including r=1 and every integer twist. No defect and no owed touched decision. Risk review complete.

`lem-qftx-positive-real-monad-rank-stability-criterion`: accepted the reader’s explicit N>=1, k>=0 domain, matching the ADHM supplier. Checked all six steps: the nonzero quotient-dual/common eigenvector and invariant-kernel arguments prove both directions, Gram identities cover the finite lines, the determinant gives coverage, and the separate infinity and k=0 cases close the proof. Read the exact algebraic-closure statement and the complete ADHM definition. No additional repair. Risk review complete.

## Analytic negative twists (level 3)

Accepted the reader’s explicit closed-pushforward cohomology identification and LES dependency. Checked exactness and injective preservation in the category of abelian sheaves, equality of global sections, both long exact sequences, r=1 with a point hyperplane, and the necessary r>=2 endpoint for O(-2). Read the complete current batch-67 scalar theorem: its exact r=0,1,2,3 scalar conclusion is the only input here; no GAGA is invoked. Risk review complete.

## Chain lifting (level 4)

Retained and amended the reader’s explicit twisted-conjugate-dual bundle identification: the signed monad and diagram now use (conjugate E)-dual coefficient spaces, with fixed bases and conjugate-transpose convention specified. The Hom obstruction sequences keep ordinary linear duals. This makes the coefficient typing agree with D(F); all normalized identities and hypotheses are unchanged. Checked all six proof steps: locally split Hom sequences, H0/H1 of the first obstruction sheaf from O(-1)/O(-2), H0/H1 of the extension sheaf from O(-1), constant end maps and uniqueness, inverse lifting, and signed double dual. Coefficient adjoints are read as matrices in the monad bases. The sole tikzcd diagram has the correct twists, arrows and signs, giving H alpha=-beta# p and r beta=alpha# H. The text proves both identities independently. All four suppliers were read at their actual uses. Risk review complete.

## Flat splitting (level 5)

Accepted the reader’s precise line pairing and corrected global-section proof using negative-twist vanishing and the LES. Read every step and all six dependencies at the used definitions/results. The injection of L into line sections uses H0(O_P1(-1))=0; positivity therefore gives a nondegenerate positive constant summand before taking its orthogonal complement. The coefficient image/kernel identities prove the splitting and absence of reduced sections, including U=0. This also checks the first direct consumer of the family-definition clarification: it uses only the unchanged explicit line pairing. Risk review complete.

## Internal positivity (level 6)

Confirmed refuter:69:2 as nonfatal. The auxiliary doubled-space calculation used an undefined conjugation identification on U+U* and the wrong domain for beta-transpose. Removed that calculation (old Steps 1.1, 2.1, 3.1 and the doubled-complement sentence), keeping the entire Statement and the sufficient direct inverse-Gram proof. Renumbered its five surviving steps and synchronized derivations.

Independently checked the kernel-vector/trivial-line argument proving every Gram invertible, the Euler-block complement identifying the actual positive section space, every ordered product in sum A_mu K A_mu=4C-D, Delta A=8C and Delta K=-2KDK<=0, the uniform infinity decay and the direction of the expanding-ball minimum argument. Semidefinite K plus invertibility gives positive K; the three orthogonal summands then give H positive. Neither C nor H was presumed positive. U=0 is direct. All five supplier statements were checked; no external positivity result was assumed. Risk review complete. Verdier PDF retrieval failed because the endpoint exceeded the web size limit; no claim of reading its proof is made.

## Normal form (level 7)

Accepted the reader’s precise line pairing, algebraic-only family lifting and explicit U(k,A) coefficient argument. Independently checked all sixteen steps and all thirteen direct suppliers: analytic H0(O(1)), lifted pairing, positive middle form, infinity Gram normalization, both moment coefficients, exact rank/stability equivalences, unitary residual action, torus factors, converse Euler-block decomposition, algebraic dual-number cohomology and lifted minors, and naturality only under reduction and real epsilon scaling. In the family argument, positive reduced forms are invertible over A; orthogonality plus normalized images makes the framed W complement invariant before its fixed framing identifies the residual block with 1. No order on nilpotents or arbitrary-family algebraization is inferred. The topological charge clause still requires F=pi*E. Risk review complete.

## Examples (level 8)

Read and verified the complete one-instanton example, including DDdagger=f I, the smooth rank-two projection, off-diagonal dP curvature formula, all entries of its two-form block, and each ASD Hodge sign for the displayed Euclidean orientation. rho>0 is essential; rho=0 is excluded. Unit charge is stated under the pullback condition. Read and verified the zero-charge example: unique maps on V=0, trivial gauge group and constant framed W monad give c2=0 and chi=N. Risk reviews complete; untouched examples owe no decisions.

## Consumer and diagram checks

Searched current items for every changed Definition/Statement supplier. All direct consumers are the owned normal-form theorem, flat splitting, internal positivity and examples, together with outside batch-60 `lem-qftx-adhm-real-monad-normalization-and-charge`. Read that outside consumer in full: A1 and Proof 1.2 explicitly impose the exact positive Ward pairing, N>=2 and the restricted first-order base-change range; its normal-form use remains valid. The owned consumers use the unchanged line pairing, compatible rank range, twisted dual and charge conclusions. No consumer source repair, further interface hop or outside escalation is necessary. The one chain-lift tikzcd diagram was checked; neither page has body prose, and both retain compact-v1. No missing diagram is needed for these explicit matrix proofs.

## Historical comparison

Every current item initially matched its immutable post-reader raw item hash. All seven touched pre-reader carriers were recovered exactly from Git commit `9d9ae63a2272c60f16479cd0503f72caffa3d43c` at `physics/items/<id>.md`; each raw SHA-256 matches the immutable pre snapshot. Compared their full mathematical deltas, ignoring reflow alone. There is no missing-preimage exception or unknown historical delta. Both refuter findings remain defects of the authenticated pre-repair content, although the corrected current content no longer contains them.

## Published findings

Both reader findings are confirmed nonfatal and have exactly one `nonfatal-recorded` defect-ledger row each. `thm-cohomology-projective-space-twisting-sheaves` has stale internal references, while its monomial calculation is present and supports every consumed value. `thm-long-exact-sequence-sheaf-cohomology` has final tags after QED, while its cone, derived functor and naturality proof supplies the LES. Neither source was edited. The published ledger and its deduplicated classification index identify the exact consumers, evidence, supplier spine and mathematics-owner repair strategy. Source maintenance stays OPEN; this is not a source repair claim or an escalation of a missing mathematical premise.

## Sources and limits

All twenty outside direct supplier interfaces were read at their actual uses; sixteen are pinned imports and their raw bytes match `research/math-imports.json`. Four are current local drafts: the ADHM data definition, real/complex quotient theorem, twisting-transition definition and scalar Dolbeault theorem. The latter two theorems were read in full; their statuses were not promoted. Review of published suppliers is limited to the needed interface and reported defects, rather than a claim to re-audit their entire transitive foundation.

Retrieved and read [Stacks, Definition 33.16.1 and its following scaling construction](https://stacks.math.columbia.edu/tag/0B28), lines 18–35. Read [Donaldson, Sections 3–4 and 6](https://arxiv.org/html/2205.08639), lines 107–170 and 228–267, for real lines, monad coefficient conventions and matrix normalization context. Source displays are not substituted for the local raw-sign calculations. The Verdier PDF endpoint exceeded the web retrieval size limit; no reading of that proof is claimed. The Barth–Hulek and Nakajima–Yoshioka PDFs were not independently retrieved in this adjudication; their citations are context, and no omitted result from them is used as a substitute for the explicit local proofs.

All eleven items have `domain: mathematics`; no observations, measured inputs, physical postulates or statistical inference are claimed here. No published or root mathematical content, page body, scheduling input or immutable reader/refuter artifact was edited. Existing proof provenance already records AI-generated local arguments. No repaired item had a judge record to retain or invalidate.

## Decisions and focused checks

The decisions file has exactly eleven entries: seven touched, two reader and two flagged/refuter obligations; there are no page obligations. Definition, charge and chain-lift touched decisions are `amended_repair`; rank, analytic twists, flat splitting and normal form are `accepted_repair`. Both refuter and both reader findings are `confirmed_nonfatal`. Every completed repair has `repair_confidence: 1`. Eleven distinct closed defect rows were appended at `caught_at_stage: 3a-adjudicate`; the two published rows use `nonfatal-recorded` and retain OPEN source maintenance.

- Explicit eight-item reflow: unchanged after final mathematical edits.
- Precheck through `tsx-run.mjs`: seven proof-bearing changed items, zero failing; the final positivity tag update was rechecked successfully. The definition has no proof to precheck. An initial bare Node invocation could not load `.mts`; the documented loader invocation succeeded.
- Strict batch proof-contract check: 11/11 items, zero errors and warnings after mechanical contract cleanup. Initial diagnostics concerned an unanchored boundary note, a nonstandard boundary label and unused citation-use fields; no mathematical defect row was created for those mechanical issues.
- Scoped render check: eight changed items and two pages, all ten passed; final positivity tags were rechecked successfully.
- Risk report run before review and with `--require-reviewed` after the substantive reviews: all eleven HIGH/CRITICAL items have specific completed reviews, zero errors.
- Required final batched `proof-layout.mjs` command: eight changed items, 43 steps, zero defects.
- Append-only defect-ledger tool accepted all eleven rows and regenerated its native view.

The only Alpha item edits are the opening supplier grammar, removal of duplicated charge prose plus explicit integral Whitney deduction, explicit conjugate-dual coefficient labels and bases in chain lifting and its diagram, and removal of the unused ill-typed doubled-space positivity branch. Owning manifest mirrors and all affected proof-contract quotations/derivations are synchronized. Reader repairs are preserved elsewhere. Both page bodies remain empty.

No unresolved mathematical blocker or escalation remains in this dispatch. Published-source maintenance is recorded separately above. No judgment, self-certification, decision stamping or workflow gate battery was performed; these remain engine responsibilities.
