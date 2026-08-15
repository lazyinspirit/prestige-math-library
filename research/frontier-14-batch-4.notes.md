# Frontier 14, batch 4 — Beta scaffold notes

## Context checkpoint (step 2, source/dependency lock)

- **Owned artifacts:** `research/frontier-14-batch-4.pages.json`, `.notes.md`, `.coverage.json`, and `.proof-contracts.json`; no other file is writable for this dispatch.
- **Current substage:** normative files, the active audit resume, LA-10 (including amendment II.6), the MOD-5 downstream contract, and the required published-page texts have been read. Axler, Hoffman–Kunze, and Treil have been harvested from their actual PDFs. The item order and dependency spine are being fixed before the machine artifacts are written.
- **Checks completed:** the live page still requires only `diagonalisation-and-the-minimal-polynomial`; its full declared `requires` closure contains the quotient, basis, matrix, polynomial, splitting-field, and primary-decomposition foundations needed here. The published `linear-maps-rank-nullity-and-quotient-spaces` page was checked on disk and genuinely contains no quotient-vector-space item. The proposed A page remains well below 60 items, so no split is indicated.
- **Open mathematical question:** choose the smallest auditable decomposition of the cyclic-vector converse—specifically, isolate the existence of a vector whose annihilator is `mu_T` using primary components, without importing the later cyclic-decomposition/rational-form theorem from MOD-5.
- **Exact next action:** open and quote the remaining published dependency Statements, then write the final A/B item list with the primary-component annihilator lemma before the cyclic-vector criterion; populate the coverage dispositions and proof contracts against that fixed list.

## Result and split decision

The scaffold is complete at **36 A items and 17 B items**. The A page is below
the hard 60-item ceiling after the full harvest, so I propose **no split**. The
natural cut named in the dispatch remains sensible only as a contingency:
quotients/triangularisation/generalised eigenspaces through the nilpotent block
classification on one A page, and Jordan existence/uniqueness/similarity plus
cyclic vectors on a second. At 36 items that cut would make navigation worse and
would introduce an unnecessary prerequisite seam.

No item was removed to reach this size. The increase from the prose estimate
A 28 / B 16 comes from making the quotient construction honest, isolating both
well-definedness obligations, giving Jordan uniqueness its own invariant
theorem, and retaining the cyclic-vector machinery that GA-3 needs before
MOD-5 exists.

## Proposed two-paragraph page summaries

### `triangularisation-and-jordan-canonical-form`

This page first builds the quotient-vector-space machinery missing from the
published linear-map page: well-defined operations and projection, lifted
bases, the universal property, the first isomorphism theorem, and restriction
and quotient operators on invariant subspaces. It then characterises upper
triangular form by complete invariant flags, proves that an operator is
triangularisable exactly when its minimal or characteristic polynomial splits,
and treats simultaneous triangularisation, nilpotent operators, stabilised
kernels and images, and Jordan-string bases.

The second half constructs Jordan canonical form from the generalised
eigenspace decomposition and proves its uniqueness rather than merely asserting
it. For each eigenvalue, the ranks of the powers of `T-lambda I` recover the
number of blocks of every size, which yields the similarity classification.
The page closes with cyclic subspaces and vector annihilators, a primary-
component proof that some vector realises the minimal polynomial, the criterion
that a cyclic vector exists exactly when the minimal and characteristic
polynomials agree, and the polynomial description of the commutant of a cyclic
operator.

### `triangularisation-and-jordan-canonical-form-examples`

The companion page computes quotients, a concrete first-isomorphism map, an
invariant flag, nilpotent Jordan strings, and block multiplicities from rank
sequences. It also follows the real quarter-turn after scalar extension and
computes the commuting diagonal and nilpotent parts of a split Jordan matrix,
then exhibits a companion operator with a cyclic vector and the identity on
`F^2` without one.

Its false statements isolate the hypotheses and uniqueness clauses most likely
to be lost: splitting over the base field, uniqueness only up to block order,
and the insufficiency of geometric multiplicity or of the pair
`(chi_T, mu_T)`. In particular, it contains the required leaf witness
`J_2(lambda) direct-sum J_2(lambda)` versus
`J_2(lambda) direct-sum J_1(lambda) direct-sum J_1(lambda)`, which MOD-5 must
later restate natively rather than cite.

## Source ledger and canonical-coverage harvest

The four sources below were read at the stated ranges, not accepted from an
HTTP status or search snippet. Their headings and individual dispositions are
enumerated in `frontier-14-batch-4.coverage.json`.

1. **Sheldon Axler, _Linear Algebra Done Right_, fourth edition** —
   <https://linear.axler.net/LADR4e.pdf>. I extracted and read §3E, results
   3.95–3.107; §5C, results 5.35–5.47, stopping before its exercises; §8A–8B,
   results 8.1–8.38; and the Jordan subsection of §8C, results 8.42–8.46. This
   backs quotient spaces, triangularisation, generalised eigenspaces,
   nilpotence, Jordan form, and representative computations.
2. **Kenneth Hoffman and Ray Kunze, _Linear Algebra_, second edition** —
   <https://math.ucr.edu/~mpierce/teaching/linear-algebra/docs/Hoffman%2CKunze-LinearAlgebra.pdf>.
   I read Ch. 6 §6.4, printed pp. 198–204, through the corollary after Theorem 5;
   §6.8 Exercise 9 on p. 226; Ch. 7 §7.1, pp. 227–230, before the exercises; and
   §7.2, pp. 231–237, through the second corollary after Theorem 3. This backs
   invariant subspaces and quotient operators, the required 4-by-4 witness,
   vector annihilators, cyclic subspaces, companion matrices, and the cyclic-
   vector criterion.
3. **Sergei Treil, _Linear Algebra Done Wrong_** —
   <https://www.math.brown.edu/streil/papers/LADW/LADW_2017-09-04.pdf>. I read
   Ch. 9 §4.1–§4.4, printed pp. 266–272, and §5–§5.1, pp. 272–273. This is the
   independent proof source for independent cycles, existence of a nilpotent
   Jordan-string basis by induction on `dim im N`, rank-diagram uniqueness, and
   the general Jordan theorem.
4. **Cornell Math 4330, _Quotient Spaces_** —
   <https://pi.math.cornell.edu/~kassabov/math4330.fall19/cornell-only/QuoSpaces.pdf>.
   I read Theorem 2 and its proof on printed pp. 3–4, including Remark 3 and
   stopping before Remark 4, plus QuoSpace Exercises 4, 5, and 7 on pp. 6–7.
   This independently backs the quotient universal property, first
   isomorphism theorem, and well-defined induced quotient operator.

All four are used as references only; the authored page will paraphrase and
prove the results rather than copy source prose. Axler is the principal full
textbook treatment, Hoffman–Kunze is the second independent textbook, and
Treil/Cornell supply independent university-hosted treatments of the two proof
seams where fidelity matters most.

The gate counts **124 harvested dispositions**: 75 `included`, 31 `inline`, 10
`already-published`, and 8 `deferred`; there are no `out-of-scope` rows. The 75
included headings map to 42 distinct scaffolded items because independent
sources overlap. The eight declines are:

- Axler 5.47, the unconditional complex triangularisation theorem, needs
  algebraic closedness of the complex field. The published
  `thm-fundamental-theorem-of-algebra-minimum-modulus-proof` supplies the root
  theorem but is homed on `the-complex-exponential-and-eulers-formula` at order
  189, above and outside this page's declared closure, so it is not citable
  here. The planned page `the-fundamental-theorem-of-algebra` licenses the
  deferred unconditional form; this page keeps the conditional
  algebraically-closed-field corollary.
- Hoffman–Kunze's T-admissible definition, Cyclic Decomposition Theorem, its
  four named proof steps, and its invariant-complement corollary are licensed
  individually to planned page `modules-over-a-pid-and-canonical-forms`. They
  constitute the later invariant-factor decomposition, not a missing lemma for
  this page. The present page still proves the earlier cyclic-vector criterion
  directly from primary components.

The seven Hoffman–Kunze declines are the ones I expect Alpha to challenge,
because they are adjacent to cyclic vectors. The defensible boundary is that
they build the complete divisibility-ordered cyclic decomposition and its
uniqueness, precisely MOD-5's subject. Importing them would duplicate the later
invariant-factor theorem. Before recording the declines I searched `items/` for
the named theorem, T-admissibility, and invariant complements; none is already
published. I also verified both licensing page ids in the live plan. Separately,
the disk check found the published complex root theorem
`thm-fundamental-theorem-of-algebra-minimum-modulus-proof`, but its home page is
order 189 and outside this page's declared closure; the planned
`the-fundamental-theorem-of-algebra` page at order 139 remains the licensing
destination for the unconditional complex triangularisation form.

## Mathematical design and durable proof seams

The A-page order is deliberate:

1. Quotient construction and its two well-definedness proofs come first. The
   formula for the induced operator is `v+W -> Tv+W`; representative
   independence must explicitly use `v-v' in W` and `T(W) subseteq W`.
2. An adapted basis makes the invariant-subspace matrix block triangular, so
   `chi_T = chi_(T|W) chi_(Tbar)`. This is the exact quotient fact needed for
   the induction proving the splitting criterion.
3. Simultaneous triangularisation handles an arbitrary commuting family. The
   proof must separate the empty family, the all-scalar family, and the branch
   using a proper eigenspace of a nonscalar member.
4. The nilpotent Jordan basis follows Treil's induction on `dim im N`, as the
   dispatch requires. It must not be replaced by an appeal to canonical form.
5. For `d_k = dim ker N^k`, with `d_0=0`, the number of blocks of size at least
   `k` is `d_k-d_(k-1)`, and the number of blocks of exact size `k` is
   `2d_k-d_(k-1)-d_(k+1)`. With `rho_k=rank N^k`, the corresponding formulas
   are `rho_(k-1)-rho_k` and
   `rho_(k-1)-2rho_k+rho_(k+1)`.
6. Jordan existence is obtained by applying the nilpotent theorem to
   `(T-lambda I)` on each generalised eigenspace. The scalar-plus-nilpotent
   polynomial construction is recorded inline here, not minted as a named
   Jordan–Chevalley theorem; X-2 owns the stable named result.
7. Jordan uniqueness uses `rho_k(lambda)=rank(T-lambda I)^k` on all of `V`.
   Blocks for other eigenvalues are invertible and contribute a constant rank,
   which cancels in the second differences. Set `rho_0(lambda)=dim V` and keep
   one stabilised value beyond the largest block. This is well-definedness
   obligation #21 and the exact invariant MOD-5 must later re-derive.
8. For the cyclic-vector converse, write
   `mu_T=product q_i^(e_i)`. In each primary summand choose `v_i` with
   `q_i(T)^(e_i-1)v_i != 0`; its vector annihilator is exactly `q_i^(e_i)`.
   Directness makes the annihilator of `sum v_i` their least common multiple,
   hence `mu_T`. This route works over every field and uses no future module
   theorem. For `V=0`, use `v=0` and annihilator generator `1`.

The required B-page witness is fixed for arbitrary `lambda`:

`A = J_2(lambda) direct-sum J_2(lambda)` and
`B = J_2(lambda) direct-sum J_1(lambda) direct-sum J_1(lambda)`.

Both have `chi=(x-lambda)^4` and `mu=(x-lambda)^2`, but
`rank(A-lambda I)=2` and `rank(B-lambda I)=1`, hence they are not similar. It
is intentionally a B-page leaf. During dependency checking I found and removed
three provisional references from B items to the published quarter-turn
**example** page; each now computes `x^2+1` directly and cites only A-page
results. No A item and no B item depends on any examples-page item.

## Convention decisions and source discrepancies

- The local theorem is over an arbitrary field with the explicit hypothesis
  that `chi_T` splits. Axler often states the complex case. No complex-only
  statement is silently generalised without the splitting proof.
- A Jordan string is oriented to match the chosen displayed Jordan block. Step
  5 must state once whether the ones lie on the superdiagonal and order the
  string consistently; source diagrams use differing orientations.
- Treil's extracted §4.3 line gives the difference for the number of boxes in a
  row in the reversed order `dim ker A^k - dim ker A^(k+1)`, which would be
  negative. The local theorem uses the increasing difference
  `d_k-d_(k-1)`, equivalently `rho_(k-1)-rho_k`; this is a source typo, not a
  result to reproduce.
- Treil groups length-one zero strings into a larger zero diagonal block in one
  display. The library retains the standard multiset of separate `J_1(0)`
  blocks so that block counts and uniqueness are literal.
- “Unique Jordan form” always means unique up to permutation of blocks. A
  literal matrix is not unique until a block ordering convention is imposed.
- On `V=0`, `chi_T=mu_T=1=x^0`; the nilpotency index may still use the least
  positive exponent convention. The nilpotent-characterisation statement must
  state this separately instead of forcing `mu_T=x^k` with positive `k`.
- Axler writes quotient subspaces as `U`; the local page uses `W`. Cornell and
  Hoffman–Kunze use equivalent quotient-operator conventions. The canonical
  projection is written `pi`; the prohibited applied-natural embedding notation
  does not occur.

## Applyable prose-scaffold amendments

These are notes for the step-4 splice; I did not edit either prose scaffold.

1. In `research/plan-algebra-track.md`, LA-10 heading, replace the exact old
   text `## LA-10. Triangularisation, Generalised Eigenspaces and Jordan Form  (order 86)`
   with `## LA-10. Triangularisation, Generalised Eigenspaces and Jordan Form  (order 90)`.
2. In §II.6, replace the exact old estimate `- **estimate** A 28, B 16` with
   `- **estimate** A 36, B 17`.
3. In the original LA-10 B-page paragraph, replace the exact old clause
   `the smallest case is $6\times 6$ or a well-chosen $4\times 4$ over one eigenvalue`
   with `the fixed $4\times 4$ witness is $J_2(\lambda)\oplus J_2(\lambda)$ versus $J_2(\lambda)\oplus J_1(\lambda)\oplus J_1(\lambda)$`.
4. In §II.6.c `FS.`, replace the exact old geometric-multiplicity witness
   `$J_2\oplus J_1$ and $J_1\oplus J_1\oplus J_1$ at the same eigenvalue separate on the second rank`
   with `$J_3(\lambda)\oplus J_1(\lambda)$ and $J_2(\lambda)\oplus J_2(\lambda)$ both have geometric multiplicity two, but their second-power ranks separate them`.
   The old pair does **not** have equal geometric multiplicity (two blocks versus
   three), so this is a mathematical correction, not an editorial preference.
5. In §II.6.c's quotient list, make the separate scaffolded proposition
   `prop-induced-quotient-operator-is-well-defined` explicit immediately after
   the invariant-subspace definition. The prose currently folds this named
   well-definedness obligation into a comma-separated theorem list.
6. Keep the existing §II.6.c decision that the scalar-plus-nilpotent construction
   is inline in Jordan existence. Do not add a named Jordan–Chevalley A item.
7. In `research/plan-algebra-track-expansion.md` MOD-5, the prose says order 106,
   while the live spec places `modules-over-a-pid-and-canonical-forms` at order
   110. Replace the stale order number only; its dependency and mandatory-
   agreement language remains correct.

## Published dependency audit and confidence routes

I opened every dependency below on disk and read its actual `Definition` or
`Statement`, including hypotheses, domain, direction, and zero/empty clauses.
Every file is `status: published`; every one has component provenance. There are
**no legacy-unclassified dependencies** and no dependency whose Statement has
`provenance.statement: ai-generated`. I found no unambiguously false published
claim requiring a repair note.

The following were additionally source-checked against the Axler,
Hoffman–Kunze, Treil, or Cornell ranges harvested above:

- `cor-generalised-eigenspace-decomposition-for-a-split-minimal-polynomial`
- `cor-primary-projections-are-polynomials-in-the-endomorphism`
- `def-characteristic-polynomial-of-an-operator`
- `def-coordinate-column-and-matrix-of-a-linear-map`
- `def-diagonalisable-endomorphism`
- `def-eigenvalue-eigenvector-eigenspace-and-spectrum`
- `def-polynomial-evaluation-at-an-endomorphism`
- `def-primary-component-and-generalised-eigenspace`
- `lem-characteristic-polynomial-of-block-triangular-matrix`
- `thm-diagonalisable-iff-minimal-polynomial-splits-with-distinct-roots`
- `thm-minimal-and-characteristic-polynomials-have-the-same-irreducible-factors`
- `thm-minimal-polynomial-is-well-defined-and-controls-annihilators`
- `thm-primary-decomposition-for-an-endomorphism`
- `thm-spectrum-is-the-root-set-of-the-characteristic-polynomial`

For the remaining standard foundational clauses, the confidence route was
`established-from-knowledge` after reading the exact on-disk text:

- `cor-factor-theorem-over-a-commutative-ring`
- `cor-polynomial-ring-over-a-field-is-a-pid`
- `def-algebraically-closed-field`
- `def-dimension`
- `def-internal-direct-sum`
- `def-kernel-and-image-of-a-linear-map`
- `def-linear-basis`
- `def-linear-independence`
- `def-linear-map`
- `def-linear-subspace`
- `def-rank-and-nullity`
- `def-vector-space`
- `lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients`
- `thm-cayley-hamilton`
- `thm-every-independent-set-extends-to-a-basis`
- `thm-linear-kernel-image-and-injectivity`
- `thm-polynomial-division-algorithm-over-a-field`
- `thm-polynomial-ring-over-a-field-is-a-ufd`
- `thm-rank-nullity`
- `thm-similarity-is-an-equivalence-relation-and-models-basis-change`
- `thm-spectrum-is-the-root-set-of-the-characteristic-polynomial`

The spectrum theorem appears in the source-checked group and is repeated in the
knowledge group only as an exact-clause sanity check; it is one dependency, not
two. In particular, published items whose **proof** provenance includes AI
alteration or generation remain eligible because their Statements are not
AI-generated; dependency eligibility was checked at the Statement component.

Exact clauses that the step-5 Facts must not widen include: the zero-space
conventions `chi_T=1` and `mu_T=1`; the published primary-decomposition
restrictions and exponents; the iff in the minimal-polynomial annihilator
criterion; and similarity as representation of one endomorphism in two bases.
The 126 proof-contract citation records now quote all published clauses exactly
from disk. Within-batch records use the fixed scaffold claim and must be replaced
with the exact authored Statement/Definition text before strict validation.

## Per-item provenance decisions

Notation below is `Statement / Proof`. Every source-backed component will cite
the exact URL in the source ledger at authoring. Definitions have
`not-applicable` proofs. No A-page Statement is AI-generated.

### A page

- `def-quotient-vector-space-and-canonical-projection` — `ai-altered / not-applicable`: merges Axler 3.99, 3.102, and 3.104 under the library's `W` notation and explicit zero-space convention.
- `prop-quotient-vector-space-operations-and-projection` — `literature-derived / ai-altered`: Axler 3.101–3.103; the proof is reorganised around representative independence.
- `lem-quotient-basis-lifts-to-an-adapted-basis` — `literature-derived / ai-altered`: Axler 3.105 with the stronger explicit lifted-basis formulation used in its proof.
- `thm-quotient-vector-space-universal-property` — `literature-derived / ai-altered`: Cornell Theorem 2; wording and proof steps are adapted to the house universal-property form.
- `thm-first-isomorphism-theorem-for-vector-spaces` — `literature-derived / ai-altered`: Cornell QuoSpace 5 and Axler 3.106–3.107, with the codomain restricted to `im T` explicitly.
- `def-invariant-subspace-and-induced-quotient-operator` — `ai-altered / not-applicable`: combines the Hoffman–Kunze invariant-subspace definition with the Cornell induced-map convention.
- `prop-induced-quotient-operator-is-well-defined` — `literature-derived / ai-altered`: Cornell QuoSpace 7; the representative-difference proof is made a numbered obligation.
- `prop-polynomial-calculus-on-restrictions-and-quotients` — `ai-altered / ai-altered`: standard source-backed consequences are combined to serve later minimal-polynomial steps.
- `prop-characteristic-polynomial-factors-over-an-invariant-subspace` — `literature-derived / ai-altered`: Hoffman–Kunze Ch. 6 and the published block-triangular lemma; the quotient-basis proof is localised.
- `def-triangularisable-endomorphism` — `literature-derived / not-applicable`: Axler 5.38–5.39, extended only to name simultaneous triangularisability.
- `prop-complete-invariant-flags-and-upper-triangular-matrices` — `literature-derived / ai-altered`: Axler 5.39 with invariant-flag terminology made explicit.
- `thm-triangularisation-splitting-criterion` — `ai-altered / ai-altered`: combines Axler 5.44 with the characteristic/minimal irreducible-factor theorem and the quotient induction.
- `cor-endomorphisms-over-an-algebraically-closed-field-are-triangularisable` — `literature-derived / ai-altered`: conditional form of Axler 5.47, avoiding a forward dependence on FTA.
- `thm-simultaneous-triangularisation-of-commuting-operators` — `literature-derived / ai-altered`: standard commuting-family theorem, adapted to arbitrary fields under explicit splitting hypotheses.
- `def-nilpotent-endomorphism` — `literature-derived / not-applicable`: Axler 8.17, with a stated zero-space index convention.
- `thm-nilpotent-endomorphism-characterisations` — `ai-altered / ai-altered`: combines Axler 8.18 with characteristic-polynomial and zero-space clauses.
- `lem-kernel-and-rank-sequences-of-powers` — `literature-derived / ai-altered`: Axler 8.1–8.3 and rank-nullity, with stabilization isolated.
- `thm-stabilised-kernel-image-decomposition` — `literature-derived / ai-altered`: Axler 8.4, stated at a stabilized power.
- `def-jordan-block-and-jordan-string` — `ai-altered / not-applicable`: normalises the differing Axler/Treil block and string orientations.
- `lem-independent-initial-vectors-give-independent-jordan-strings` — `literature-derived / ai-altered`: Treil Theorem 4.1, translated to the chosen string orientation.
- `thm-nilpotent-jordan-string-basis` — `literature-derived / ai-altered`: Treil Theorem 4.2, retaining the required induction on `dim im N`.
- `thm-power-ranks-determine-nilpotent-jordan-blocks` — `ai-altered / ai-altered`: Treil's dot-diagram invariant with the corrected finite-difference formulas and explicit endpoints.
- `cor-nilpotent-similarity-classified-by-power-ranks` — `literature-derived / ai-altered`: immediate source-backed classification consequence of the Treil invariant.
- `prop-generalised-eigenspaces-and-algebraic-multiplicity` — `ai-altered / ai-altered`: specialises the published primary decomposition and adds the characteristic-polynomial multiplicity calculation.
- `def-jordan-canonical-form` — `ai-altered / not-applicable`: standard definition with base-field and block-order conventions made explicit.
- `thm-jordan-form-exists-iff-the-characteristic-polynomial-splits` — `ai-altered / ai-altered`: joins Axler/Treil existence with the necessary reverse implication over an arbitrary field.
- `cor-endomorphisms-over-an-algebraically-closed-field-have-jordan-form` — `literature-derived / ai-altered`: conditional algebraically-closed-field consequence of the existence theorem.
- `thm-jordan-form-uniqueness-from-ranks-of-powers` — `literature-derived / ai-altered`: Treil §4.3–§4.4, repaired and expanded to all eigenvalues.
- `cor-jordan-block-data-controls-eigenspaces-and-polynomials` — `literature-derived / ai-altered`: standard readings of the block multiset, with all multiplicities stated.
- `thm-similarity-classification-by-jordan-canonical-form` — `literature-derived / ai-altered`: the standard classification, explicitly restricted to split characteristic polynomials and block-order equivalence.
- `def-cyclic-subspace-vector-and-vector-annihilator` — `ai-altered / not-applicable`: combines Hoffman–Kunze Ch. 7 definitions and fixes the monic-generator convention.
- `prop-vector-annihilator-is-well-defined` — `literature-derived / ai-altered`: Hoffman–Kunze's conductor/annihilator setup, with the PID and uniqueness steps made explicit.
- `thm-cyclic-subspace-power-basis-and-companion-matrix` — `literature-derived / ai-altered`: Hoffman–Kunze Theorems 1–2, adapted to the local companion convention.
- `lem-a-vector-realises-the-minimal-polynomial` — `literature-derived / ai-altered`: Hoffman–Kunze's corollary, reproved here by primary components rather than cyclic decomposition.
- `thm-cyclic-vector-criterion-by-minimal-and-characteristic-polynomials` — `literature-derived / ai-altered`: Hoffman–Kunze's cyclic-vector corollary with both directions and `V=0` explicit.
- `cor-the-commutant-of-a-cyclic-endomorphism-is-polynomial` — `literature-derived / ai-altered`: Hoffman–Kunze §7.1 exercise/result, proved from the cyclic power basis.

### B page

- `ex-quotient-of-f-three-by-a-line-and-canonical-projection` — `ai-generated / ai-generated`: a locally chosen finite coordinate example, verified by coset and dimension calculations.
- `ex-first-isomorphism-theorem-for-a-coordinate-map` — `ai-generated / ai-generated`: a locally chosen coordinate map, verified by explicit kernel, image, and induced inverse calculations.
- `ex-a-split-triangularisable-but-nondiagonalisable-operator` — `ai-generated / ai-generated`: an explicit 3-by-3 witness, checked through its minimal polynomial.
- `ex-an-invariant-flag-producing-upper-triangular-form` — `ai-generated / ai-generated`: a local finite flag construction, checked by direct matrix computation.
- `ex-building-a-jordan-string-basis-for-a-nilpotent-operator` — `ai-generated / ai-generated`: an explicit `F^6` construction, verified vector by vector.
- `ex-recovering-nilpotent-blocks-from-ranks-of-powers` — `ai-generated / ai-generated`: the block list `{3,2,1}` is checked against every required rank difference.
- `ex-jordan-form-with-two-eigenvalues-from-power-ranks` — `ai-generated / ai-generated`: a local 5-by-5 rank-table example, checked at both eigenvalues.
- `ex-quarter-turn-jordan-form-after-scalar-extension` — `literature-derived / ai-altered`: Axler 5.43, extended from triangularisation to the explicit complex Jordan form.
- `fs-every-endomorphism-is-triangularisable` — `ai-altered / ai-altered`: the false claim and quarter-turn refutation are adapted from Axler 5.43 and the splitting criterion.
- `fs-every-endomorphism-has-jordan-form-over-its-base-field` — `ai-altered / ai-altered`: the same sourced witness is separated to test the stronger Jordan claim.
- `fs-equal-characteristic-and-minimal-polynomials-imply-similarity` — `literature-derived / ai-altered`: Hoffman–Kunze §6.8 Exercise 9, in the required arbitrary-`lambda` block form.
- `fs-jordan-canonical-form-is-a-unique-matrix` — `ai-altered / ai-altered`: the false literal-uniqueness claim is the negation of Treil's sourced “up to block order” qualifier, with an explicit permutation witness.
- `fs-geometric-multiplicity-determines-jordan-block-sizes` — `ai-altered / ai-generated`: Treil's block-count invariant motivates the claim; the repaired `{3,1}` versus `{2,2}` witness is locally verified.
- `ex-jordan-chevalley-decomposition-from-jordan-blocks` — `ai-generated / ai-generated`: a local checkable matrix example; it is not an A-page theorem and is not a dependency target.
- `fs-every-endomorphism-has-a-commuting-diagonal-plus-nilpotent-decomposition` — `ai-altered / ai-altered`: combines the sourced quarter-turn with the proved simultaneous-triangularisation obstruction.
- `ex-a-cyclic-companion-operator` — `ai-generated / ai-generated`: a local companion construction verified by its power basis and polynomials.
- `cex-the-identity-on-f-two-has-no-cyclic-vector` — `literature-derived / ai-altered`: Hoffman–Kunze §7.1 Example 1, checked by the one-dimensional cyclic subspaces of the identity.

At step 5 the nine AI-generated B constructions (items 1–7, 14, and 16 above)
must carry `generation.role: example`, a concrete construction rationale, and
their explicit finite verification. They are all B-page leaves and nothing
depends on them. The B-page false statements are source-derived or source-
altered; no prohibited AI-generated false statement is planned.

## Proof-contract state

`frontier-14-batch-4.proof-contracts.json` has 46 scope entries, exactly the 29
proof-bearing A items plus all 17 B items. All 46 have contracts, all eight
boundary axes, derivation-step input maps, and at least one citation clause;
there are 122 citation records total. Published clauses are exact on-disk
quotes. Planned local clauses use the fixed scaffold title as the provisional
Statement/Definition contract and must be replaced with the exact authored
wording at step 5.

All 46 profiles now have item-specific boundary dispositions; there are no exact
duplicate rationales. The eleven highest-risk profiles receive especially
detailed rows: induced quotient well-definedness, simultaneous
triangularisation, nilpotent characterisations, nilpotent Jordan-basis
existence, power-rank block recovery, Jordan existence, Jordan uniqueness, the
realizing-vector lemma, the cyclic-vector iff, and the two required block-
structure false statements. The contracts explicitly cover `V=0`, `k=0`,
`k=1`, stabilized tails, empty block lists, nonempty preimage/vector selections,
repeated eigenvalues, and both iff directions. Step 5 must still align the
provisional step numbers with the final proofs and replace every planned local
quote before running the strict gate.

## Final scaffold report

- **Pages/items:** order 90 A page, 36 items; order 91 B page, 17 items.
- **Harvest:** 124 dispositions: 75 included, 31 inline, 10 already published,
  8 deferred, 0 out of scope. The expected challenge is the seven-result
  Hoffman–Kunze cyclic-decomposition decline to MOD-5.
- **Split:** none proposed; A is 24 items below the hard ceiling.
- **Dependencies:** 34 distinct published dependencies opened and checked; 14
  were additionally cross-checked in this harvest and the remaining standard
  clauses were confirmed from mathematical knowledge after exact-text reading.
  No legacy-unclassified or AI-generated-Statement dependency is used.
- **Conventions/findings:** explicit split-field hypotheses; block orientation
  fixed once; uniqueness only up to block order; Treil rank-difference typo
  corrected; length-one blocks retained; zero-space polynomial conventions
  explicit. The detailed prose scaffold's geometric-multiplicity witness is
  false as written and has an exact replacement above.
- **Leaf discipline:** the mandatory 4-by-4 witness is on B, and no dependency
  points to any B-page item.
- **Gates:** `coverage-checklist.mjs` reports 1 page, 124 harvested results,
  0 errors, 0 warnings. `validate-plan.mjs research/plan-spec.json` ends `OK`
  with no cycle, forward-reference, B-page, or unresolved-id error in the live
  item-listed pages. JSON shape, id collision, local dependency resolution,
  eight-boundary coverage, and prohibited applied-embedding notation checks are
  also green for the four owned artifacts.
- **Blockers:** none. No external fallback is planned, and nothing required a
  permission prompt. The full proof-contract strict gate cannot be meaningful
  until step 5 creates the item files and exact Facts/numbered steps; the durable
  contracts record that remaining authoring obligation.

## Step-3 fix pass

### B4-1 — applied

The Axler 5.47 coverage disposition and the source-ledger discussion now record
the disk truth: `thm-fundamental-theorem-of-algebra-minimum-modulus-proof` is
published, but its home page `the-complex-exponential-and-eulers-formula` is at
order 189 and outside the order-90 page's declared prerequisite closure. The
planned `the-fundamental-theorem-of-algebra` page remains the licensing
destination, and the present page retains only the conditional
algebraically-closed-field corollary.

### B4-2 — applied

The three dependency lists and their durable proof contracts are synchronized:

- `prop-characteristic-polynomial-factors-over-an-invariant-subspace` now cites
  `prop-induced-quotient-operator-is-well-defined`, which licenses the induced
  linear operator represented by the quotient block.
- `cor-the-commutant-of-a-cyclic-endomorphism-is-polynomial` now cites
  `thm-cyclic-subspace-power-basis-and-companion-matrix`, which supplies the
  cyclic power basis used to expand the commuting operator's value at a cyclic
  vector.
- `thm-jordan-form-uniqueness-from-ranks-of-powers` now cites the published
  `def-rank-and-nullity` and `def-internal-direct-sum`; their exact on-disk
  clauses are included in the proof contract for the rank calculation over the
  generalised-eigenspace direct sum.

### B4-3 — applied

Step 5 must preserve these three item-level Remarks:

1. `def-quotient-vector-space-and-canonical-projection` explains that quotient
   spaces enter this development because the reverse triangularisation
   implication descends to the induced operator on
   $V/\langle v\rangle$; it does not make a survey claim about what the library
   contains elsewhere.
2. `thm-first-isomorphism-theorem-for-vector-spaces` records that its dimension
   count recovers the published `thm-rank-nullity`, linked as an agreement
   record and not used as a premise for a second proof.
3. `ex-a-cyclic-companion-operator` names the Frobenius of
   $\mathbb F_8/\mathbb F_2$ as the downstream motivating use of the cyclic-vector
   theorem. This is orientation only: it creates no forward `deps` edge and no
   dependence on another in-run batch.

### B4-4 — applied

The two scaffold titles now expose their load-bearing hypothesis:
`prop-generalised-eigenspaces-and-algebraic-multiplicity` and
`cor-jordan-block-data-controls-eigenspaces-and-polynomials` both begin “For an
endomorphism with split characteristic polynomial”. Every provisional local
quote in the proof contracts is synchronized to the revised titles.

### Step-3 gate and handoff report

- **Pages and items:** the sufficient pair remains 36 A items and 17 B items;
  no item was added or removed.
- **Harvest:** unchanged at 124 dispositions — 75 `included`, 31 `inline`, 10
  `already-published`, and 8 `deferred`. Alpha upheld the seven
  Hoffman–Kunze declines to `modules-over-a-pid-and-canonical-forms`; the Axler
  5.47 decline remains deferred, but B4-1 corrected its false disk rationale.
- **Split:** none proposed. The A page remains 24 items below the dispatched
  60-item threshold, and Alpha endorsed the existing contingency cut only if a
  later expansion makes it necessary.
- **Published clauses opened in this pass:**
  `thm-fundamental-theorem-of-algebra-minimum-modulus-proof` was exact-inspected
  for B4-1 and its order-189 home was verified from the live spec;
  `def-rank-and-nullity` and `def-internal-direct-sum` were exact-inspected under
  the established-from-knowledge route before their clauses were added to the
  uniqueness contract; and `thm-rank-nullity` was exact-inspected for the
  Step-5 agreement Remark. All are published, have eligible non-generated
  Statement provenance, and state the needed domains and boundary clauses.
- **Conventions:** no new disagreement was found. The existing decisions remain
  in force: split characteristic polynomial in load-bearing titles, Jordan
  uniqueness only up to block order, separate length-one blocks, explicit zero-
  space conventions, and the corrected sign of Treil's rank difference.
- **Required gates:** `coverage-checklist.mjs` passed with 1 page, 124 harvested
  results, 0 errors and 0 warnings; `content-policy.mjs --manifest-only` passed
  with 53 scoped items, 0 errors and 0 warnings; and `validate-plan.mjs` exited
  0 with no item-level cycle, forward reference, B-page dependency, or
  unresolved id among item-listed pages. The internal synchronization check
  also found 46/46 contracts, 126 citation records, and zero
  dependency/citation-set mismatches.
- **Blocker:** none. No permission or escalation was requested.
