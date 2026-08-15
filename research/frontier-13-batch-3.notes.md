# Frontier 13 batch 3 — scaffold notes

## Continuity checkpoint (step 2, canonical-coverage design)

- **Owned artifacts:** `research/frontier-13-batch-3.pages.json`, `research/frontier-13-batch-3.notes.md`, `research/frontier-13-batch-3.coverage.json`, and `research/frontier-13-batch-3.proof-contracts.json`. No other file is in scope for edits.
- **Current substage:** The normative files, both prose scaffolds, the live page records in `plan-spec.json`, the frontier batching analysis, the prior-run output exemplars, and all five declared prerequisite pages have been read. Candidate theorem DAGs for both A pages have been outlined but not yet serialized.
- **Checks completed:** The active-audit resume record says no audit is currently running. Live ids/orders/requires were verified from `plan-spec.json`; the only pre-existing relevant worktree modification is the orchestrator's unrelated category-theory edit to that file. The two owned A pages have no dependency path to one another, so the spectral theorem and every other cross-pair dependency are excluded. The published Cayley–Hamilton theorem was located and will be cited rather than re-minted; its adjugate-identity proof is the correct route requested by the dispatch. The inherited inner-product convention is linear in the first argument and conjugate-linear in the second.
- **Open mathematical question:** The requested theorem that the minimal and characteristic polynomials have the same irreducible factors appears to need scalar extension to a root field. The diagonalisation page's declared closure does not contain the already-published field-extension machinery. The likely recommendation is to add `field-extensions-and-the-complex-numbers` to that page's `requires`, then prove invariance of the minimal polynomial under scalar extension before reducing irreducible factors to eigenvalues.
- **Exact next action:** Read `QUALITY-CONTROLS.md`, the prior proof-contract and coverage artifacts, and the coverage checker; then inspect the exact published dependency items and finish enumerating the chosen source ranges before deciding and recording the proposed `requires` amendment.

## Final scaffold decision

The checkpoint question is resolved in favour of adding the already-published page `field-extensions-and-the-complex-numbers` to the `requires` of `diagonalisation-and-the-minimal-polynomial`. This is a recommendation for the step-3 orchestrator, not an edit to `research/plan-spec.json`. The exact load-bearing result is `thm-minimal-and-characteristic-polynomials-have-the-same-irreducible-factors`: for an irreducible factor $q$ of $\chi_T$, its proof forms $F[x]/(q)$, uses the distinguished root there, and applies the published evaluation-kernel theorem. The construction is earlier in reading order and introduces no edge to the other owned pair.

No split is proposed. The two A pages contain 23 and 33 items respectively, both comfortably below the hard 60-item limit. Their companions contain 12 and 16 items. The 84-item total is deliberate coverage, not padding: every A-page item closes machinery used on that page or captures a named canonical result, and every B-page item is a leaf.

## Reader-facing page summaries

### `diagonalisation-and-the-minimal-polynomial`

This page defines diagonalisability and derives the minimal polynomial from the annihilator set of an endomorphism. It does not assume that a generator exists: it proves that the annihilators form a nonzero ideal using the already-published Cayley–Hamilton theorem, invokes the PID property of $F[x]$, and only then normalises the generator to a unique monic polynomial. From there it proves representation and similarity invariance, $\mu_T\mid\chi_T$, the extension-field root/eigenvalue criterion, and equality of the irreducible factor sets of $\mu_T$ and $\chi_T$.

The second half builds the coprime-kernel lemma, primary decomposition, polynomial primary projections, and the generalised-eigenspace decomposition without constructing Jordan form. It proves the eigenspace direct-sum test, the squarefree split-minimal-polynomial criterion, useful consequences for idempotents and invariant restrictions, and simultaneous diagonalisation for arbitrary commuting families by reducing their span to finitely many original operators. Triangularisation, Jordan canonical form, and the spectral theorem remain on their assigned downstream pages.

### `inner-product-spaces-and-orthogonality`

This page fixes the standard real/complex definition: positive definite and conjugate symmetric, linear in the first argument and conjugate-linear in the second. It defines the induced norm, proves Cauchy–Schwarz with its equality case and the triangle inequality, and develops orthogonal and orthonormal sets, Gram–Schmidt, finite orthonormal bases, Bessel and finite Parseval identities, and the Pythagorean, parallelogram, and polarisation identities. Coordinate formulas are reconciled explicitly with the already-published finite-sum Cauchy–Schwarz theorem.

The finite-dimensional geometric and operator machinery then gives $V=W\oplus W^\perp$, dimension and double-complement formulas, orthogonal projections and the unique-nearest-point theorem, Gram determinants, QR factorisation, finite-dimensional Riesz representation, adjoints and their algebra, kernel/range orthogonality, invariant orthogonal complements, self-adjoint idempotents, and finite-dimensional isometry characterisations. Completeness, Hilbert spaces, infinite orthonormal expansions, and the spectral theorem are excluded.

## Dependency seam and page-level rationale

- `eigenvalues-eigenvectors-and-the-characteristic-polynomial` supplies eigenvalues, eigenspaces, polynomial evaluation, characteristic polynomials, the spectrum/root theorem, block-triangular characteristic polynomials, and the valid published Cayley–Hamilton proof.
- `euclidean-domains-pids-and-unique-factorisation` supplies the principal-ideal and unique-factorisation machinery needed to construct the minimal polynomial and factor it into pairwise coprime irreducible powers.
- Proposed addition `field-extensions-and-the-complex-numbers` supplies irreducible quotient root fields and the evaluation-kernel/minimal-polynomial theorem used in the shared-irreducible-factor argument.
- `dual-spaces-bilinear-forms-and-inertia` supplies the inherited linear-first sesquilinear/Hermitian convention, the algebraic dual, transpose and matrix-form infrastructure, and nondegeneracy terminology.
- `roots-and-rational-powers` supplies nonnegative square roots and the already-published real finite-sum Cauchy–Schwarz theorem.
- `field-extensions-and-the-complex-numbers` supplies $\mathbb C$, conjugation, modulus, and their algebraic laws.

There is no dependency in either direction between the two owned A pages. In particular, no inner-product item cites a minimal-polynomial item and no minimal-polynomial item cites an inner-product item. The spectral theorem is recorded only as a downstream deferral. No B-page item is cited by any item, including another B-page item.

## Canonical-coverage source ledger

The gated source-by-source heading ledger is in `research/frontier-13-batch-3.coverage.json`. Its exact read ranges are:

- Keith Conrad, *The Minimal Polynomial and Some Applications*, §§4–5, PDF pp. 4–10, from “4. The Minimal Polynomial” through Corollary 5.4 and stopping before §6: <https://kconrad.math.uconn.edu/blurbs/linmultialg/minpolyandappns.pdf>.
- Minhyong Kim, *Math 2201 Lecture Notes*, §§3.3–3.4, PDF pp. 25–29, Definition 3.3.66 through Example 3.4.85 and stopping before §3.5 Jordan Normal Form: <https://www.homepages.ucl.ac.uk/~ucahmki/2201notes.pdf>.
- Minhyong Kim, the same full course notes, §§5.1–5.3, PDF pp. 49–55, Definition 5.1.128 through result 5.3.149 and stopping before §5.4 Isometries.
- Sergei Treil, *Linear Algebra Done Wrong*, Chapter 5 HTML edition dated 30 April 2026: main text of §§5.1.1–5.1.4, §§5.2–5.3 through Proposition 5.3.6, and §§5.5.1–5.5.2 through Theorem 5.5.1; exercises and §5.4 were excluded: <https://www.math.brown.edu/streil/papers/LADW/HTML_2026_04-30/Ch5.html>.

Sheldon Axler, *Linear Algebra Done Right*, 4th ed., was used as a supplementary monograph check, principally §§6A–6C and §§7A/7D for inner products, orthogonal complements, adjoints, isometries, and QR, and the relevant invariant-subspace/generalised-eigenspace material for the first pair: <https://linear.axler.net/LADR4e.pdf>. It is supplementary rather than one of the two enumerated coverage sources, so no Axler heading is counted in the gated yield.

The 126 gated entries comprise 104 `included`, 12 `inline`, 4 `already-published`, 2 `deferred`, and 4 `out-of-scope`. Thus 116 headings are scaffolded directly or absorbed into scaffolded proofs, four are already established, and six are declined. The declines most likely to be challenged are:

- Conrad Corollary 4.13 on diagonalising an invertible positive power over $\mathbb C$: deferred because the general statement needs all complex $k$-th roots and their distinctness away from zero, supplied only after the planned fundamental-theorem-of-algebra page.
- Conrad Theorem 4.17 on triangularisability iff the minimal polynomial splits: out of scope because it is the headline invariant-flag result of `triangularisation-and-jordan-canonical-form`.
- The UCL and Treil integral inner-product examples: separately declined because each uses integration/function-space machinery outside the declared closure; the B page supplies a sampled-polynomial inner product whose definiteness uses only the published polynomial root bound.
- The canonical spectral theorem and Hilbert-space/infinite-expansion topics: respectively deferred to the specifically assigned spectral/SVD page and excluded to the functional-analysis track.

## Proof architecture and correctness-sensitive choices

- Cayley–Hamilton is not duplicated. The exact published item `thm-cayley-hamilton` was reopened. Its proof uses the adjugate identity in $F[x]$, compares coefficients, telescopes after left multiplication by powers of the representing matrix, and transfers the resulting matrix identity back to the operator. This is the valid adjugate route requested by the dispatch; no illicit “substitution into $\det(xI-A)$” occurs.
- The minimal polynomial definition intentionally does not assert existence. The following theorem proves ideal closure, nonzeroness via Cayley–Hamilton, principality via the PID theorem, and uniqueness after monic normalisation, including $\mu_T=1$ on the zero space.
- The shared-irreducible-factor theorem uses the root field $F[x]/(q)$ and the exact published evaluation-kernel theorem. It does not assume that an irreducible polynomial already has a root in $F$.
- Arbitrary-family simultaneous diagonalisation is reduced to the finite case correctly: a finite basis of the family's span has finite expressions in original family members, and the union of those finite supports is a finite subset of the original family spanning the same operator subspace.
- With the linear-first convention, the Gram matrix of columns $V=QR$ is $R^{\mathsf T}\overline R$, not $RR^*$. The scaffold records the correct factorisation and obtains $\det G=|\det R|^2$.
- The Gram determinant has an explicit empty-list value $1$, because the published general matrix determinant is defined only in positive size. This avoids silently applying that definition to a $0\times0$ matrix.
- The proof-contract file scopes all 72 proof-bearing items. Published dependencies already have exact on-disk source clauses; same-batch citations are explicit step-5 obligations because their source bodies do not yet exist. Every contract has a planned derivation and all eight standard boundary dispositions.

## Convention decisions and disagreements

- The page is linear in the **first** inner-product argument and conjugate-linear in the second, exactly matching `def-sesquilinear-and-hermitian-forms-over-a-field-with-involution`. Axler and the chosen scaffold sources can be read in that convention, while Artin-style notes such as the Harvard Math 55a course page explicitly use the opposite, semilinear-first convention: <https://people.math.harvard.edu/~elkies/M55a.10/>. The disagreement changes formulas, not the underlying theory.
- Consequently finite-dimensional Riesz is written $f(v)=\langle v,w\rangle$, the representing-vector map is conjugate-linear, $(\lambda T)^*=\overline\lambda T^*$, and the coordinate adjoint is the conjugate transpose. These formulas would move conjugates under the opposite convention.
- The induced function is called the inner-product norm and its axioms are proved here. The later generic normed-space definition is not cited forward and no analysis page is introduced as a prerequisite.
- “Orthogonal” is used over both $\mathbb R$ and $\mathbb C$; “unitary” is reserved for complex inner-product operators and “orthogonal operator” for the real case.

## Licensing notes

- Axler's official fourth-edition PDF is distributed under CC BY-NC 4.0. It was used for result checking and paraphrase.
- Treil's HTML book identifies a CC BY-NC-ND 3.0 licence. Its named headings were enumerated and its results paraphrased; no adapted external prose is placed in the scaffold.
- No explicit reuse licence was found in the consulted Conrad or UCL files. They are therefore used by link, locator, named-result inventory, and mathematical paraphrase only.
- Exact quotations in the proof-contract artifact are clauses from already-published local library items, not copied clauses from the external sources.

## Published dependencies opened on disk

Every direct published dependency below was opened as its item file, including its exact Statement/Definition and, where present, proof. Route `L` means the local statement is `literature-derived`, audited, and was checked against the source corpus and standard convention. Route `C` means the local statement is `ai-altered`; I independently checked its exact content, boundary convention, and any proof used, using the cited local sources and standard mathematics. There are no `legacy-unclassified` or `ai-generated` published statements in the load-bearing set.

| Published item | Statement provenance | Confidence route and recorded verification |
|---|---|---|
| `cor-dimension-of-a-direct-sum` | ai-altered | C · judge · certified |
| `cor-dimensions-of-matrix-and-linear-map-spaces` | literature-derived | L · audited 2026-08-11 |
| `cor-polynomial-ring-over-a-field-is-a-pid` | literature-derived | L · audited 2026-08-11 |
| `def-algebraic-dual-and-linear-functional` | literature-derived | L · audited 2026-08-13 · judge |
| `def-characteristic-polynomial-of-a-matrix` | ai-altered | C · audited 2026-08-13 |
| `def-characteristic-polynomial-of-an-operator` | ai-altered | C · audited 2026-08-13 · judge |
| `def-complex-conjugate-real-imaginary-part-and-modulus` | literature-derived | L · audited 2026-08-13 |
| `def-complex-numbers-and-arithmetic` | literature-derived | L · audited 2026-08-13 |
| `def-coordinate-column-and-matrix-of-a-linear-map` | literature-derived | L · audited 2026-08-11 |
| `def-determinant-of-a-square-matrix` | literature-derived | L · audited 2026-08-11 |
| `def-eigenvalue-eigenvector-eigenspace-and-spectrum` | literature-derived | L · audited 2026-08-13 · judge |
| `def-field-extension-generated-subfields-and-simple-extension` | literature-derived | L · audited 2026-08-13 |
| `def-generated-and-principal-ideals` | literature-derived | L · audited 2026-08-02 |
| `def-internal-direct-sum` | ai-altered | C · audited 2026-07-28 · judge |
| `def-linear-basis` | ai-altered | C · audited 2026-07-28 · judge |
| `def-linear-combination-and-span` | ai-altered | C · audited 2026-07-28 · judge |
| `def-linear-independence` | ai-altered | C · audited 2026-07-28 · judge |
| `def-linear-map` | literature-derived | L · audited 2026-08-03 |
| `def-linear-subspace` | literature-derived | L · audited 2026-07-28 · judge |
| `def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form` | literature-derived | L · audited 2026-08-13 · judge |
| `def-matrix-space` | ai-altered | C · audited 2026-07-28 · judge |
| `def-monic-greatest-common-divisor-of-polynomials` | ai-altered | C · audited 2026-08-11 |
| `def-monoid-finite-product` | ai-altered | C · audited 2026-07-27 · judge |
| `def-polynomial-degree-leading-coefficient-and-monic` | ai-altered | C · audited 2026-08-11 |
| `def-polynomial-evaluation-at-an-endomorphism` | literature-derived | L · audited 2026-08-13 |
| `def-sesquilinear-and-hermitian-forms-over-a-field-with-involution` | ai-altered | C · audited 2026-08-13 |
| `def-transpose-of-a-matrix` | literature-derived | L · audited 2026-08-11 |
| `lem-characteristic-polynomial-of-block-triangular-matrix` | literature-derived | L · audited 2026-08-13 · judge |
| `lem-complex-conjugation-and-modulus-laws` | literature-derived | L · audited 2026-08-13 |
| `lem-standard-basis-of-f-n` | ai-altered | C · audited 2026-07-28 · judge |
| `lem-x-squared-plus-one-is-irreducible-over-the-reals` | literature-derived | L · audited 2026-08-13 |
| `thm-bezout-identity-for-polynomials` | literature-derived | L · audited 2026-08-11 |
| `thm-cauchy-schwarz-finite` | ai-altered | C · judge · certified |
| `thm-cayley-hamilton` | literature-derived | L · audited 2026-08-13 |
| `thm-determinant-multiplicative` | literature-derived | L · audited 2026-08-11 |
| `thm-determinant-of-transpose` | literature-derived | L · audited 2026-08-11 |
| `thm-dimension-of-a-linear-subspace` | ai-altered | C · audited 2026-07-28 · judge |
| `thm-evaluation-kernel-and-minimal-polynomial` | literature-derived | L · audited 2026-08-13 |
| `thm-first-isomorphism-theorem-rings` | literature-derived | L · audited 2026-08-02 |
| `thm-invertible-matrices-correspond-to-linear-isomorphisms` | literature-derived | L · audited 2026-08-11 |
| `thm-irreducible-quotient-adjoins-a-root` | literature-derived | L · audited 2026-08-13 |
| `thm-matrix-of-a-composite-is-the-product` | literature-derived | L · audited 2026-08-11 |
| `thm-nth-roots-exist` | ai-altered | C · judge · certified |
| `thm-operator-determinant-is-basis-independent` | ai-altered | C · audited 2026-08-13 |
| `thm-operator-determinant-is-multiplicative` | literature-derived | L · audited 2026-08-13 |
| `thm-operator-invertible-iff-determinant-nonzero` | literature-derived | L · audited 2026-08-13 |
| `thm-polynomial-ring-over-a-field-is-a-ufd` | literature-derived | L · audited 2026-08-11 |
| `thm-root-bound-for-polynomials-over-a-domain` | literature-derived | L · audited 2026-08-11 |
| `thm-similarity-is-an-equivalence-relation-and-models-basis-change` | ai-altered | C · audited 2026-08-11 |
| `thm-spectrum-is-the-root-set-of-the-characteristic-polynomial` | literature-derived | L · audited 2026-08-13 |

The five prerequisite pages themselves were also read on disk in full: `library/linear-algebra/eigenvalues-eigenvectors-and-the-characteristic-polynomial.md`, `library/abstract-algebra/euclidean-domains-pids-and-unique-factorisation.md`, `library/linear-algebra/dual-spaces-bilinear-forms-and-inertia.md`, `library/real-analysis/roots-and-rational-powers.md`, and `library/abstract-algebra/field-extensions-and-the-complex-numbers.md`.

## Per-item provenance rationale

The assignments below apply item-by-item to every listed id.

**Definitions — `statement: literature-derived`, `proof: not-applicable`.** Each is a standard definition fixed by the enumerated Conrad/UCL/Treil treatments or by Axler, with wording adjusted only to the library's finite-list and linear-first conventions:

- `def-diagonalisable-endomorphism`, `def-annihilator-ideal-and-minimal-polynomial-of-an-endomorphism`, `def-primary-component-and-generalised-eigenspace`, `def-simultaneous-diagonalisability-of-a-family`.
- `def-inner-product-space`, `def-inner-product-norm`, `def-orthogonal-vectors-sets-and-orthonormal-bases`, `def-orthogonal-complement`, `def-orthogonal-projection`, `def-gram-matrix-and-gram-determinant`, `def-adjoint-of-a-linear-map-between-inner-product-spaces`, `def-linear-isometry-and-orthogonal-or-unitary-operator`.

**A-page results — `statement: literature-derived`, `proof: ai-altered`.** Every statement is a named result, direct consequence, or standard algebraic lemma harvested from the enumerated sources; each proof plan is adapted to the library's exact dependency closure, zero-dimensional cases, finite-list definitions, and convention choices. No A-page statement is AI-generated:

- `thm-minimal-polynomial-is-well-defined-and-controls-annihilators`, `thm-minimal-polynomial-is-matrix-representation-and-similarity-invariant`, `cor-minimal-polynomial-divides-characteristic-polynomial`, `thm-roots-of-the-minimal-polynomial-are-eigenvalues-over-extension-fields`, `thm-minimal-and-characteristic-polynomials-have-the-same-irreducible-factors`, `lem-polynomial-kernels-and-images-are-invariant`, `prop-minimal-polynomial-of-an-invariant-restriction-divides-the-original`, `lem-coprime-kernel-decomposition`, `thm-primary-decomposition-for-an-endomorphism`, `cor-primary-projections-are-polynomials-in-the-endomorphism`, `cor-generalised-eigenspace-decomposition-for-a-split-minimal-polynomial`, `thm-diagonalisability-eigenspace-direct-sum-criterion`, `thm-diagonalisable-iff-minimal-polynomial-splits-with-distinct-roots`, `cor-distinct-characteristic-roots-imply-diagonalisability`, `cor-idempotent-endomorphisms-are-diagonalisable-projections`, `thm-invariant-restrictions-of-diagonalisable-endomorphisms-are-diagonalisable`, `lem-commuting-endomorphisms-preserve-eigenspaces`, `thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms`, `cor-endomorphism-algebra-is-a-minimal-polynomial-quotient`.
- `prop-standard-coordinate-inner-products`, `lem-inner-product-pairing-is-nondegenerate-and-norm-is-homogeneous`, `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`, `cor-triangle-inequality-for-inner-product-norm`, `prop-pythagorean-parallelogram-and-polarisation-identities`, `prop-coordinate-cauchy-schwarz-agrees-with-the-finite-sum-theorem`, `thm-orthogonal-nonzero-vectors-are-linearly-independent`, `thm-gram-schmidt-orthonormalisation`, `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`, `thm-bessel-inequality-and-finite-parseval-identity`, `thm-finite-dimensional-orthogonal-decomposition`, `cor-double-orthogonal-complement-and-dimension`, `prop-orthogonal-projection-formula-and-linearity`, `thm-orthogonal-projection-is-the-unique-nearest-point`, `thm-gram-determinant-detects-linear-independence`, `thm-qr-factorisation-over-r-or-c`, `thm-riesz-representation-in-finite-dimensions`, `thm-adjoint-exists-and-is-unique-in-finite-dimension`, `prop-adjoint-algebra`, `thm-matrix-of-the-adjoint-is-the-conjugate-transpose`, `thm-adjoint-kernel-and-range-orthogonality`, `lem-invariance-passes-to-orthogonal-complements-under-the-adjoint`, `thm-self-adjoint-idempotents-are-exactly-orthogonal-projections`, `thm-finite-dimensional-isometry-characterisations`, `cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus`.

**Source-harvested B items — `statement: literature-derived`, `proof: ai-altered`.** The source supplies the example/counterexample, while the computation is rewritten against local items and conventions:

- `ex-minimal-polynomials-of-scalar-diagonal-and-zero-dimensional-endomorphisms`, `ex-same-characteristic-polynomial-different-minimal-polynomials`, `ex-computing-a-minimal-polynomial-from-annihilating-polynomials`, `ex-nilpotent-shift-and-its-single-primary-component`, `ex-real-rotation-changes-diagonalisability-after-complex-scalar-extension`, `ex-primary-decomposition-over-q-with-an-irreducible-quadratic`, `ex-polynomial-projections-for-three-eigenvalues`, `cex-commuting-endomorphisms-need-not-be-diagonalisable`, `fs-a-split-minimal-polynomial-always-gives-diagonalisability`, `ex-frobenius-inner-product-on-matrix-space`, `ex-gram-schmidt-in-r-three`.

**Constructed B items — `statement: ai-generated`, `proof: ai-generated`.** Each is a concrete calculation or misconception witness synthesised for this companion page. They are safe because B pages are leaves and the dependency scan confirms that no item targets them:

- `ex-simultaneous-diagonalisation-of-two-commuting-matrices`, `fs-the-characteristic-polynomial-determines-diagonalisability`, `fs-diagonalisability-requires-distinct-characteristic-roots`.
- `ex-weighted-inner-product-on-finite-coordinate-space`, `ex-sampled-polynomial-inner-product-on-degree-at-most-three`, `ex-gram-schmidt-in-c-two`, `ex-qr-factorisation-of-an-invertible-real-matrix`, `ex-bessel-is-strict-for-a-proper-orthonormal-set`, `ex-orthogonal-projection-onto-a-plane-and-nearest-point`, `ex-riesz-representative-of-a-functional-on-c-three`, `ex-adjoint-of-a-three-by-two-complex-matrix`, `ex-gram-determinant-of-two-vectors`, `cex-an-indefinite-nondegenerate-form-need-not-split-off-orthogonal-complements`, `fs-a-complex-inner-product-is-symmetric`, `fs-every-orthogonal-set-is-an-orthonormal-basis`, `fs-every-idempotent-is-an-orthogonal-projection`, `fs-the-adjoint-depends-linearly-on-complex-scalars`.

## Checks and blockers

The coverage checker passes with 0 errors and 0 warnings. The required live `validate-plan` run passes. A temporary in-memory splice of these four pages into the live plan also passes `validate-plan`, including the size, undeclared-prerequisite, order, collision, and B-leaf checks; the temporary file was removed. `content-policy.mjs --manifest-only` reports 84 scoped items with 0 errors and 0 warnings. A separate scaffold audit confirms 4 pages, 84 unique items, 72 proof contracts, 28 B-page leaves, exact proof-contract quotes for every published citation, complete per-item provenance coverage, no unresolved dependency, and no applied-$\iota$ notation. `prosecheck.mjs` reports 0 errors; its four count warnings are the requested inventory counts in this private notes artifact.

There is no mathematical or tooling blocker. The only orchestrator action requested is adjudication and splicing of the proposed `field-extensions-and-the-complex-numbers` prerequisite. No normative file, item, library page, or other batch artifact was edited.

## 2026-08-15 — Step 3 → 4 adjudicated scaffold repair

This section supersedes the earlier source and check summaries where they conflict. The approved `field-extensions-and-the-complex-numbers` requirement is already present on page 88 in `plan-spec.json`; that orchestrator-owned file was inspected but not edited.

### Live-source replacement and coverage repair

- Removed the unavailable UCL notes from both source inventories. Page 88 now uses Sergei Treil, *Linear Algebra Done Wrong*, Chapter 4, over the declared main-text ranges §§4.1.1–4.1.7 and §§4.2.1–4.2.6. Page 94 now promotes Sheldon Axler, *Linear Algebra Done Right*, fourth edition, over the exact enumerated ranges in §§6A–6C, the Adjoints subsection of §7A, and §7D through the QR example. Both replacement URLs were opened live while repairing the scaffold.
- Preserved a row-by-row replacement audit for all 47 former source rows without preserving the dead URL. On page 88, 4 of the 22 rows have a genuine heading-level replacement and 18 are explicitly marked not present in Treil Chapter 4. On page 94, 23 of the 25 rows have a genuine Axler replacement; the Sylvester-inertia row says plainly that the declared Axler range does not state the result and that the already-published local theorem retains its own source record, while the exact real three-space Gram–Schmidt computation remains anchored to live Treil §5.3.2 rather than being misattributed to Axler's different example.
- Rewalked the declared Conrad range through Corollary 5.5. Corollary 5.5 was the only omitted heading: it is now included as `cor-polynomials-in-commuting-diagonalisable-endomorphisms-are-diagonalisable`. The Conrad locator now ends at Corollary 5.5.
- Extended the already-live Treil Chapter 5 harvest into §5.4.1 through the normal equation. The section, least-squares subsection, geometric projection approach, and normal-equation subheading all point to the new least-squares item.
- The spectral-theorem decline remains unchanged and names its licensed destination page, `the-spectral-theorem-and-singular-value-decomposition`.

### New items and provenance rationale

All four new statements have `provenance.statement: literature-derived` and `provenance.proof: ai-altered`; none is `ai-generated` or used from a B page.

- `lem-minimal-polynomial-is-invariant-under-field-extension` records Keith Conrad's *Potential Diagonalizability*, Theorem 4(1), and proves the non-obvious step by preserving linear independence of `I,A,…,A^r` after field extension. The two extension-field results now depend on this lemma explicitly. In particular, `thm-minimal-and-characteristic-polynomials-have-the-same-irreducible-factors` now uses the approved field-extension page to form `F[x]/(q)`, uses determinant invariance for the characteristic polynomial, and uses the new scalar-extension lemma before evaluating the minimal polynomial at the adjoined root.
- `thm-diagonalisable-iff-characteristic-polynomial-splits-and-multiplicities-agree` is the exact split-characteristic-polynomial form of Treil Theorem 4.2.8. Its proof plan treats both implications and the zero-dimensional case.
- `cor-polynomials-in-commuting-diagonalisable-endomorphisms-are-diagonalisable` is Conrad Corollary 5.5, stated without undefined shorthand: a common eigenbasis diagonalises every finite linear combination of products of powers, including the sum and product.
- `thm-least-squares-solutions-and-normal-equation` is Treil §5.4.1: minimisation is orthogonal projection onto the range, the residual condition is converted by the adjoint kernel–range identity into `T^*(Tx-b)=0`, and the proof plan records existence and the full coset of minimisers.

The new item totals are 26 on page 88 A, 12 on page 89 B, 34 on page 94 A, and 16 on page 95 B. Both A pages remain below the 60-item ceiling.

### Proof-contract citation repair

The 28 previously empty `citations` arrays were populated from their exact batch-manifest source clauses, with every fact mapped to the proof steps that use it. Four contracts were added for the four new proof-bearing items; their published facts quote the exact on-disk Definition or Statement sections, and their same-batch facts quote the exact scaffold statement. The two extension-field contracts were also aligned with the repaired manifest so scalar-extension invariance is an explicit cited input rather than an implicit shortcut. The artifact now contains 76 contracts, 176 citations, and 0 empty citation arrays.

### Required gates and dependency audit

The required commands completed as follows:

```text
$ node tools/validate-plan.mjs research/plan-spec.json
plan: 1176 pages (583 A + 583 B + 5 already published), 3879 new items, 4866 existing ids available
item lists written for 244/1171 planned pages — the rest are validated at PAGE level only
3878/3879 planned items already authored into items/
...
OK — declared page order is acyclic and consistent; no item-level cycles, forward
references, B-page dependencies, or unresolved ids among the 244 page(s) with item lists.
NOTE: 927 planned page(s) carry no item list yet (marked * above). Their reading
order is guaranteed; their item dependencies are not yet asserted, so re-run this
after writing each page's items.

$ node tools/coverage-checklist.mjs research/frontier-13-batch-3.coverage.json
coverage-checklist: 2 page(s), 201 harvested result(s), 0 error(s), 0 warning(s)

$ node tools/content-policy.mjs research/frontier-13-batch-3.pages.json --manifest-only
content-policy: 88 scoped item(s), 0 error(s), 0 warning(s)
```

The independent batch-wide dependency-closure audit produced:

```text
dependency-closure audit: 88 items
unresolved ids: 0
out-of-closure published deps: 0
cross-pair edges: 0
B-leaf deps: 0
duplicate ids: 0
```

There is no blocker. Only the four Batch 3 artifacts were edited.

## 2026-08-15 — Step 3 → 4 second-pass scaffold repair

This section supersedes the preceding gate and proof-contract totals. It applies only the adjudicated findings F3.4, F3.6, and F3.7 from `research/frontier-13-alpha-b-step3-scaffold-review.md`.

### F3.4 — simultaneous diagonalisation is now an equivalence

The existing item `thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms` now has the title **“A family of diagonalisable endomorphisms of a finite-dimensional space is simultaneously diagonalisable if and only if its members commute pairwise.”** Its forward proof plan still establishes simultaneous diagonalisability from pairwise commutation, including the arbitrary-family finite-span reduction. The added converse says that a common diagonalising basis represents every member by a diagonal matrix, and diagonal matrices commute. The proof contract now checks both iff directions explicitly, and the two contracts that quote this item carry its new exact statement.

The existing provenance remains correct: the biconditional statement is `literature-derived` from Conrad Theorem 5.2, while the proof is `ai-altered` because it adapts Conrad's finite-family result to the scaffold's arbitrary-family statement and spells out the elementary converse. No item was minted. The existing Conrad coverage row was already disposed `included` to this id; changing the item to deliver the row's recorded iff repairs the mismatch without changing the row or inventing a new source result.

### F3.6 — the published split-polynomial definition is now explicit

The approved `splitting-fields` edge was verified in `research/plan-spec.json` and mirrored in the page-88 batch manifest without editing the orchestrator-owned spec. The published item `def-polynomials-that-split-and-splitting-fields` was opened on disk; its statement is `literature-derived`, published, and homed on the now-declared prerequisite page. Its exact Definition clause is quoted in each affected proof contract, with both planned steps mapped to that fact.

The following five items gained `def-polynomials-that-split-and-splitting-fields` in `deps` and in their contract input maps:

- `cor-generalised-eigenspace-decomposition-for-a-split-minimal-polynomial`
- `thm-diagonalisable-iff-characteristic-polynomial-splits-and-multiplicities-agree`
- `cor-distinct-characteristic-roots-imply-diagonalisability`
- `thm-invariant-restrictions-of-diagonalisable-endomorphisms-are-diagonalisable`
- `fs-a-split-minimal-polynomial-always-gives-diagonalisability`

The invariant-restriction theorem is included because its proof strategy itself uses the technical predicate “split squarefree polynomial,” even though its title does not. `thm-primary-decomposition-for-an-endomorphism` was deliberately left unchanged: there the factors “split $V$ into kernels,” which is ordinary language rather than the polynomial predicate. No `ai-generated` statement became load-bearing. The proof-contract artifact now contains 76 contracts, 181 citations, and 0 empty citation arrays; all five added quotations occur exactly in the published Definition on disk.

### F3.7 — page-summary shape

The stray 37-word B-page paragraph was deleted. The four valid A-page summary paragraphs are unchanged: exactly two remain for `diagonalisation-and-the-minimal-polynomial` and exactly two for `inner-product-spaces-and-orthogonality`; neither B page has an authored summary body.

### Item counts, gates, and dependency closure

No items were added or removed. The final per-page counts remain:

- `diagonalisation-and-the-minimal-polynomial`: 26
- `diagonalisation-and-the-minimal-polynomial-examples`: 12
- `inner-product-spaces-and-orthogonality`: 34
- `inner-product-spaces-and-orthogonality-examples`: 16

The required commands all exited 0. The exact census/final receipt lines from `validate-plan` and the complete one-line outputs of the two batch gates were:

```text
$ node tools/validate-plan.mjs research/plan-spec.json
plan: 1176 pages (583 A + 583 B + 5 already published), 3879 new items, 4866 existing ids available
item lists written for 244/1171 planned pages — the rest are validated at PAGE level only
3878/3879 planned items already authored into items/
...
OK — declared page order is acyclic and consistent; no item-level cycles, forward
references, B-page dependencies, or unresolved ids among the 244 page(s) with item lists.
NOTE: 927 planned page(s) carry no item list yet (marked * above). Their reading
order is guaranteed; their item dependencies are not yet asserted, so re-run this
after writing each page's items.

$ node tools/coverage-checklist.mjs research/frontier-13-batch-3.coverage.json
coverage-checklist: 2 page(s), 201 harvested result(s), 0 error(s), 0 warning(s)

$ node tools/content-policy.mjs research/frontier-13-batch-3.pages.json --manifest-only
content-policy: 88 scoped item(s), 0 error(s), 0 warning(s)
```

The fresh dependency-closure audit resolved every published dependency occurrence to its plan-spec home page and checked that home against the declaring page's transitive `requires` closure. It also checked all seven frontier-13 manifests for cross-pair targets and duplicate ids, treated each A/B pair as one local order, and rejected every dependency onto a B item. Its exact output was:

```text
dependency-closure audit: 88 items, 122 published dependency occurrences checked
unresolved ids: 0
out-of-closure published deps: 0
cross-pair edges: 0
B-leaf deps: 0
same-pair non-earlier deps: 0
duplicate ids: 0
```

There is no blocker. This second pass edited only the batch-3 pages, proof-contracts, and notes artifacts; the coverage artifact required no change because F3.4's existing source row already named the repaired item.

## 2026-08-15 — Step 3 → 4 third-pass page-88 source repair

This section supersedes the earlier page-88 replacement-source and provenance summaries where they conflict. Page 94 remains `ready-for-splice` and was not changed. The second-pass repairs also remain complete: the simultaneous-diagonalisation item is still an iff with the elementary converse, the five technical uses of “splits” still cite `def-polynomials-that-split-and-splitting-fields`, and the stray paragraph beginning “The B pages supply concrete computations” is absent.

### Content-verified replacement sources

The failed Treil Chapter 4 source block was removed from page 88. The replacement was checked by opening the local PDFs with `pypdf`, not by URL or keyword count alone.

- Sheldon Axler, *Linear Algebra Done Right*, fourth edition, 404-page PDF: Theorem 5.18 in §5A; the §5B subsection “Eigenvalues and the Minimal Polynomial” from Definition 5.21 through Theorem 5.32; §5D from its opening through Theorem 5.65, stopping before Gershgorin disks; and §§8A–8B from their openings through Theorem 8.30, stopping before Theorem 8.31 (printed pp. 139, 144–149, 163–170, and 298–312; PDF pp. 153, 158–163, 177–184, and 312–326): <https://linear.axler.net/LADR4e.pdf>.
- Anthony W. Knapp, *Basic Algebra*, digital second edition, 762-page PDF: Chapter V §3, printed pp. 218–226, from the section heading through Proposition 5.15; and Chapter V §5, printed pp. 228–231, from the section heading through the end of Theorem 5.19 before §6 (PDF pp. 244–252 and 254–257): <https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf>. Theorem 5.19 is over an arbitrary field, identifies the summands as kernels of the irreducible-power factors of the minimal polynomial, constructs the projections as polynomials in the operator, and uses the required Bézout/relative-primality argument in its proof.
- Keith Conrad, *Potential Diagonalizability*, PDF pp. 1–2 from Example 1 through Theorem 4(1), was added for the pre-existing scalar-extension lemma and the exact real quarter-turn example: <https://kconrad.math.uconn.edu/blurbs/linmultialg/potdiagonalizable.pdf>. Theorem 4(1) states the required invariance of the minimal polynomial under field extension; no wider locator is claimed.

Every section, subsection, and numbered result in those declared ranges has a disposition in `research/frontier-13-batch-3.coverage.json`. The page-88 source inventory now consists of the existing live Conrad minimal-polynomial treatment plus the enumerated Axler, Knapp, and Conrad potential-diagonalizability ranges.

### Replacement audit and source completeness

The preserved `replacement_audit` still has exactly 22 rows. Nineteen rows have a verified content replacement. Three exact examples are not literally present in Axler or Knapp, and their rows say so rather than stretching a locator:

- Kim’s divisor-testing computation remains licensed by the live Conrad Examples 4.6 and 4.9.
- The exact diagonal `diag(2,2,3)` is not printed in the replacements; Knapp §3 Examples (1) and (4), together with Theorem 5.14, license the same repeated-scalar diagonal calculation.
- The exact rational linear-plus-irreducible-quadratic example is not printed in the replacements; Knapp Theorem 5.19(a) licenses the construction once its displayed factors and kernels are checked directly. Its step-5 provenance is therefore `statement: ai-altered`, `proof: ai-altered`, not a claim that Knapp prints the witness verbatim.

The source-completeness audit treats the pair’s three explicitly constructed `ai-generated` B-page leaves as non-source-requiring and checks every other page-88 item against an `included` or `inline` source row. Result: **35 source-requiring items, 35 source-anchored, 0 lacking a source**. In particular the formerly unbacked minimal-polynomial/primary-decomposition spine, `cor-primary-projections-are-polynomials-in-the-endomorphism`, and `lem-minimal-polynomial-is-invariant-under-field-extension` all now have live source rows. No item was added, removed, or renamed. Counts remain 26/12 for the page-88 pair and 34/16 for the page-94 pair; both A pages remain below 60.

The proof-contract artifact was rechecked rather than rewritten: 76 contracts, 181 citations, and 0 empty `citations` arrays. No proof contract changed because this pass repaired external source coverage, not a dependency fact or proof obligation.

### Required gates and dependency closure

All three required commands exited 0. The exact census/final receipt lines from `validate-plan` and the complete outputs of the two batch gates were:

```text
$ node tools/validate-plan.mjs research/plan-spec.json
plan: 1176 pages (583 A + 583 B + 5 already published), 3879 new items, 4866 existing ids available
item lists written for 244/1171 planned pages — the rest are validated at PAGE level only
3878/3879 planned items already authored into items/
...
OK — declared page order is acyclic and consistent; no item-level cycles, forward
references, B-page dependencies, or unresolved ids among the 244 page(s) with item lists.
NOTE: 927 planned page(s) carry no item list yet (marked * above). Their reading
order is guaranteed; their item dependencies are not yet asserted, so re-run this
after writing each page's items.

$ node tools/coverage-checklist.mjs research/frontier-13-batch-3.coverage.json
coverage-checklist: 2 page(s), 265 harvested result(s), 0 error(s), 0 warning(s)

$ node tools/content-policy.mjs research/frontier-13-batch-3.pages.json --manifest-only
content-policy: 88 scoped item(s), 0 error(s), 0 warning(s)
```

The fresh dependency-closure audit resolved each published dependency to its unique plan-spec home page, checked that home against the declaring pair’s transitive `requires` closure, checked all seven Frontier 13 manifests for in-run targets and id collisions, and rejected every edge onto a B item. Its exact output was:

```text
dependency-closure audit: 88 items, 122 published dependency occurrences checked
unresolved ids: 0
out-of-closure published deps: 0
cross-pair edges: 0
B-leaf deps: 0
same-pair non-earlier deps: 0
duplicate ids: 0
```

There is no blocker. This pass changed only the Batch 3 coverage ledger and appended this dated section to the Batch 3 notes; the Batch 3 pages and proof-contract artifacts were verified unchanged.
## Continuity checkpoint (Step 5 authoring, first 60% boundary)

- Current substage: item authoring, before page assembly and artifact realignment.
- Owned paths: the 88 Batch 3 `items/<id>.md` files, the four Batch 3 `library/linear-algebra/<page>.md` files, and `research/frontier-13-batch-3.{pages.json,notes.md,coverage.json,proof-contracts.json}`.
- Completed on disk: all 38 page-88/page-89 items and the first 10 page-94 items, for 48 of 88 authored items total.
- Remaining: 24 page-94 A items, all 16 page-95 B items, four page files, proof-contract reconstruction from final proofs, coverage/provenance alignment, and all Step 5 gates.
- Binding constraints still open: use Hoffman and Kunze rather than Axler or Treil for the Gram matrix and Gram determinant items; preserve both `replacement_audit` records; reproduce the splice receipt's A-page summaries verbatim; leave both B-page bodies empty; keep every item `status: draft`, `origin: session`, and never set `verification.audited`; do not judge.
- Settled discrepancy: `ex-primary-decomposition-over-q-with-an-irreducible-quadratic` is `ai-altered` for both statement and proof.
- Exact next action: verify the 48 authored files and continue with `thm-orthogonal-nonzero-vectors-are-linearly-independent`.

## Step 5 final authoring record

All 88 spliced ids are authored on disk with the scaffold's exact id, kind, and title. The two A pages contain the receipt's binding two-paragraph summaries verbatim. The two B pages end at their closing frontmatter delimiter and have no summary body. Every item is `status: draft`, `origin: session`; none has `verification.audited` or a judge block.

### Final component provenance rationale

These assignments apply item-by-item to the final files and supersede the earlier scaffold-time grouping where it differs.

- The 12 definitions are `statement: literature-derived`, `proof: not-applicable`. Their terminology and conventions are fixed by the page-88 Conrad/Axler/Knapp ranges, the page-94 Axler/Treil ranges, or Hoffman and Kunze p. 332 for the Gram definitions; their bodies adapt only notation, the linear-first convention, and explicit empty cases.
- The other 48 A-page items are `statement: literature-derived`, `proof: ai-altered`. Each claim is the named result or a direct stated consequence in the enumerated coverage source; each local proof was rewritten against the library's exact published dependencies, finite-list conventions, scalar convention, and zero-dimensional boundary. In particular, the generalised-eigenspace corollary uses Knapp's arbitrary-field primary-decomposition theorem as its general source and labels Axler 8.22 only as a complex-field special case.
- Ten source-harvested B items are `statement: literature-derived`, `proof: ai-altered`: `ex-minimal-polynomials-of-scalar-diagonal-and-zero-dimensional-endomorphisms`, `ex-same-characteristic-polynomial-different-minimal-polynomials`, `ex-computing-a-minimal-polynomial-from-annihilating-polynomials`, `ex-nilpotent-shift-and-its-single-primary-component`, `ex-real-rotation-changes-diagonalisability-after-complex-scalar-extension`, `ex-polynomial-projections-for-three-eigenvalues`, `cex-commuting-endomorphisms-need-not-be-diagonalisable`, `fs-a-split-minimal-polynomial-always-gives-diagonalisability`, `ex-frobenius-inner-product-on-matrix-space`, and `ex-gram-schmidt-in-r-three`. Their cited source supplies the witness or misconception, while the displayed computation is locally rewritten.
- Seven repaired or source-adapted B items are `statement: ai-altered`, `proof: ai-altered`: `ex-primary-decomposition-over-q-with-an-irreducible-quadratic`, `fs-the-characteristic-polynomial-determines-diagonalisability`, `fs-diagonalisability-requires-distinct-characteristic-roots`, `fs-a-complex-inner-product-is-symmetric`, `fs-every-orthogonal-set-is-an-orthonormal-basis`, `fs-every-idempotent-is-an-orthogonal-projection`, and `fs-the-adjoint-depends-linearly-on-complex-scalars`. The rational primary-decomposition witness is not printed verbatim in Knapp, but Knapp Theorem 5.19 licenses it after the displayed factor and kernel computations; this settles the earlier contradictory note in favour of `ai-altered`. The six false statements are locally phrased misconceptions with source-backed correction criteria and checkable refutations, so they are not tagged as invented theorems.
- Eleven constructed B leaves are `statement: ai-generated`, `proof: ai-generated`: `ex-simultaneous-diagonalisation-of-two-commuting-matrices`, `ex-weighted-inner-product-on-finite-coordinate-space`, `ex-sampled-polynomial-inner-product-on-degree-at-most-three`, `ex-gram-schmidt-in-c-two`, `ex-qr-factorisation-of-an-invertible-real-matrix`, `ex-bessel-is-strict-for-a-proper-orthonormal-set`, `ex-orthogonal-projection-onto-a-plane-and-nearest-point`, `ex-riesz-representative-of-a-functional-on-c-three`, `ex-adjoint-of-a-three-by-two-complex-matrix`, `ex-gram-determinant-of-two-vectors`, and `cex-an-indefinite-nondegenerate-form-need-not-split-off-orthogonal-complements`. Each carries the matching non-load-bearing `generation.role`; no item depends on it. Counterexample-risk checking was confined to exact symbolic evaluation of each displayed finite witness and its boundary hypotheses. All ten examples satisfy their claimed identities; the indefinite form has invertible matrix and the displayed isotropic line really has nonzero intersection with its form-orthogonal complement. No external counterexample search was needed.

The resulting component census is 12 `literature-derived/not-applicable`, 58 `literature-derived/ai-altered`, 7 `ai-altered/ai-altered`, and 11 `ai-generated/ai-generated` items.

### Authoring-change ledger

No id, kind, or title differs from the spliced scaffold. Statements implement the approved title and strategy, with their prescribed empty, zero-dimensional, equality, and field hypotheses made explicit. The following dependency lists differ from the baseline because the final proof either uses an additional exact fact or no longer uses a redundant scaffold edge:

- `thm-minimal-polynomial-is-well-defined-and-controls-annihilators`: added `lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients`, because Cayley–Hamilton alone does not state that the characteristic polynomial is the nonzero monic annihilator needed in the zero-dimensional split.
- `cor-generalised-eigenspace-decomposition-for-a-split-minimal-polynomial`: added `thm-bezout-identity-for-polynomials`, used to prove that the other primary summands contribute no kernel after stabilisation.
- `cor-triangle-inequality-for-inner-product-norm`: replaced the unused modulus-laws and root-existence edges with `def-complex-conjugate-real-imaginary-part-and-modulus`, whose exact coordinate formula supports the inline proof of $\operatorname{Re}z\le |z|$.
- `thm-gram-determinant-detects-linear-independence`: replaced the bare determinant definition with `thm-operator-invertible-iff-determinant-nonzero` and `thm-determinant-of-a-triangular-matrix`, which license the singular-determinant and triangular-product steps actually used.
- Redundant unused edges were dropped from `lem-minimal-polynomial-is-invariant-under-field-extension`, `thm-roots-of-the-minimal-polynomial-are-eigenvalues-over-extension-fields`, `prop-minimal-polynomial-of-an-invariant-restriction-divides-the-original`, `thm-primary-decomposition-for-an-endomorphism`, `thm-diagonalisable-iff-characteristic-polynomial-splits-and-multiplicities-agree`, `thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms`, `ex-simultaneous-diagonalisation-of-two-commuting-matrices`, `fs-the-characteristic-polynomial-determines-diagonalisability`, `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`, `def-orthogonal-projection`, and `cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus`. Each remaining dependency now has a corresponding citation in the authored body.

The page-94 coverage ledger now includes only Hoffman and Kunze, *Linear Algebra*, second edition, p. 332, Theorem 7 for `def-gram-matrix-and-gram-determinant` and `thm-gram-determinant-detects-linear-independence`; neither item cites Axler or Treil as its reference. Both pre-existing `replacement_audit` arrays remain intact at 22 and 25 rows.

The final proof-contract artifact contains 76 proof-bearing items, 242 exact dependency citations, and 224 separately mapped numbered steps. Every direct Fact citation quotes the actual published Definition, Statement, Example, or Statement refuted; there are no planned-title placeholders or one-step scaffold maps.

## Step 5 completion report

### Per-item precheck result

- `def-diagonalisable-endomorphism`: n/a (definition; no proof body)
- `def-annihilator-ideal-and-minimal-polynomial-of-an-endomorphism`: n/a (definition; no proof body)
- `thm-minimal-polynomial-is-well-defined-and-controls-annihilators`: PASS (direct)
- `thm-minimal-polynomial-is-matrix-representation-and-similarity-invariant`: PASS (direct)
- `lem-minimal-polynomial-is-invariant-under-field-extension`: PASS (direct)
- `cor-minimal-polynomial-divides-characteristic-polynomial`: PASS (direct)
- `thm-roots-of-the-minimal-polynomial-are-eigenvalues-over-extension-fields`: PASS (direct)
- `thm-minimal-and-characteristic-polynomials-have-the-same-irreducible-factors`: PASS (direct)
- `lem-polynomial-kernels-and-images-are-invariant`: PASS (direct)
- `prop-minimal-polynomial-of-an-invariant-restriction-divides-the-original`: PASS (direct)
- `lem-coprime-kernel-decomposition`: PASS (direct)
- `def-primary-component-and-generalised-eigenspace`: n/a (definition; no proof body)
- `thm-primary-decomposition-for-an-endomorphism`: PASS (direct)
- `cor-primary-projections-are-polynomials-in-the-endomorphism`: PASS (direct)
- `cor-generalised-eigenspace-decomposition-for-a-split-minimal-polynomial`: PASS (direct)
- `thm-diagonalisability-eigenspace-direct-sum-criterion`: PASS (direct)
- `thm-diagonalisable-iff-characteristic-polynomial-splits-and-multiplicities-agree`: PASS (direct)
- `thm-diagonalisable-iff-minimal-polynomial-splits-with-distinct-roots`: PASS (direct)
- `cor-distinct-characteristic-roots-imply-diagonalisability`: PASS (direct)
- `cor-idempotent-endomorphisms-are-diagonalisable-projections`: PASS (direct)
- `thm-invariant-restrictions-of-diagonalisable-endomorphisms-are-diagonalisable`: PASS (direct)
- `def-simultaneous-diagonalisability-of-a-family`: n/a (definition; no proof body)
- `lem-commuting-endomorphisms-preserve-eigenspaces`: PASS (direct)
- `thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms`: PASS (direct)
- `cor-polynomials-in-commuting-diagonalisable-endomorphisms-are-diagonalisable`: PASS (direct)
- `cor-endomorphism-algebra-is-a-minimal-polynomial-quotient`: PASS (direct)
- `ex-minimal-polynomials-of-scalar-diagonal-and-zero-dimensional-endomorphisms`: PASS (direct)
- `ex-same-characteristic-polynomial-different-minimal-polynomials`: PASS (direct)
- `ex-computing-a-minimal-polynomial-from-annihilating-polynomials`: PASS (direct)
- `ex-nilpotent-shift-and-its-single-primary-component`: PASS (direct)
- `ex-real-rotation-changes-diagonalisability-after-complex-scalar-extension`: PASS (direct)
- `ex-primary-decomposition-over-q-with-an-irreducible-quadratic`: PASS (direct)
- `ex-polynomial-projections-for-three-eigenvalues`: PASS (direct)
- `ex-simultaneous-diagonalisation-of-two-commuting-matrices`: PASS (direct)
- `cex-commuting-endomorphisms-need-not-be-diagonalisable`: PASS (direct)
- `fs-a-split-minimal-polynomial-always-gives-diagonalisability`: PASS (direct)
- `fs-the-characteristic-polynomial-determines-diagonalisability`: PASS (direct)
- `fs-diagonalisability-requires-distinct-characteristic-roots`: PASS (direct)
- `def-inner-product-space`: n/a (definition; no proof body)
- `def-inner-product-norm`: n/a (definition; no proof body)
- `prop-standard-coordinate-inner-products`: PASS (direct)
- `lem-inner-product-pairing-is-nondegenerate-and-norm-is-homogeneous`: PASS (direct)
- `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`: PASS (direct)
- `cor-triangle-inequality-for-inner-product-norm`: PASS (direct)
- `prop-pythagorean-parallelogram-and-polarisation-identities`: PASS (direct)
- `prop-coordinate-cauchy-schwarz-agrees-with-the-finite-sum-theorem`: PASS (direct)
- `def-orthogonal-vectors-sets-and-orthonormal-bases`: n/a (definition; no proof body)
- `def-orthogonal-complement`: n/a (definition; no proof body)
- `thm-orthogonal-nonzero-vectors-are-linearly-independent`: PASS (direct)
- `thm-gram-schmidt-orthonormalisation`: PASS (induction)
- `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`: PASS (direct)
- `thm-bessel-inequality-and-finite-parseval-identity`: PASS (direct)
- `thm-finite-dimensional-orthogonal-decomposition`: PASS (direct)
- `cor-double-orthogonal-complement-and-dimension`: PASS (direct)
- `def-orthogonal-projection`: n/a (definition; no proof body)
- `prop-orthogonal-projection-formula-and-linearity`: PASS (direct)
- `thm-orthogonal-projection-is-the-unique-nearest-point`: PASS (direct)
- `def-gram-matrix-and-gram-determinant`: n/a (definition; no proof body)
- `thm-gram-determinant-detects-linear-independence`: PASS (direct)
- `thm-qr-factorisation-over-r-or-c`: PASS (direct)
- `thm-riesz-representation-in-finite-dimensions`: PASS (direct)
- `def-adjoint-of-a-linear-map-between-inner-product-spaces`: n/a (definition; no proof body)
- `thm-adjoint-exists-and-is-unique-in-finite-dimension`: PASS (direct)
- `prop-adjoint-algebra`: PASS (direct)
- `thm-matrix-of-the-adjoint-is-the-conjugate-transpose`: PASS (direct)
- `thm-adjoint-kernel-and-range-orthogonality`: PASS (direct)
- `thm-least-squares-solutions-and-normal-equation`: PASS (direct)
- `lem-invariance-passes-to-orthogonal-complements-under-the-adjoint`: PASS (direct)
- `thm-self-adjoint-idempotents-are-exactly-orthogonal-projections`: PASS (direct)
- `def-linear-isometry-and-orthogonal-or-unitary-operator`: n/a (definition; no proof body)
- `thm-finite-dimensional-isometry-characterisations`: PASS (equivalence)
- `cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus`: PASS (direct)
- `ex-weighted-inner-product-on-finite-coordinate-space`: PASS (direct)
- `ex-frobenius-inner-product-on-matrix-space`: PASS (direct)
- `ex-sampled-polynomial-inner-product-on-degree-at-most-three`: PASS (direct)
- `ex-gram-schmidt-in-r-three`: PASS (computation)
- `ex-gram-schmidt-in-c-two`: PASS (computation)
- `ex-qr-factorisation-of-an-invertible-real-matrix`: PASS (computation)
- `ex-bessel-is-strict-for-a-proper-orthonormal-set`: PASS (computation)
- `ex-orthogonal-projection-onto-a-plane-and-nearest-point`: PASS (computation)
- `ex-riesz-representative-of-a-functional-on-c-three`: PASS (computation)
- `ex-adjoint-of-a-three-by-two-complex-matrix`: PASS (computation)
- `ex-gram-determinant-of-two-vectors`: PASS (computation)
- `cex-an-indefinite-nondegenerate-form-need-not-split-off-orthogonal-complements`: PASS (counterexample)
- `fs-a-complex-inner-product-is-symmetric`: PASS (counterexample)
- `fs-every-orthogonal-set-is-an-orthonormal-basis`: PASS (counterexample)
- `fs-every-idempotent-is-an-orthogonal-projection`: PASS (counterexample)
- `fs-the-adjoint-depends-linearly-on-complex-scalars`: PASS (counterexample)

### Required gate output, verbatim

```text
$ node tools/tsx-run.mjs tools/precheck.mts
PASS items/cex-2z-is-not-a-subring.md (direct)
PASS items/cex-a-category-with-products-and-a-diagram-without-a-limit.md (counterexample)
PASS items/cex-a-closed-graph-without-continuity.md (constructive)
PASS items/cex-a-complement-in-a-semidirect-product-need-not-be-normal.md (direct)
PASS items/cex-a-composition-of-integrable-functions-that-is-not-integrable.md (direct)
PASS items/cex-a-continuous-function-on-a-non-closed-subspace-with-no-extension.md (contradiction)
PASS items/cex-a-continuous-image-of-a-locally-compact-space.md (direct)
PASS items/cex-a-count-that-double-counts.md (direct)
PASS items/cex-a-family-of-components-need-not-be-natural.md (direct)
PASS items/cex-a-full-subcategory-limit-can-differ-from-ambient-limit.md (finite-poset-counterexample)
PASS items/cex-a-function-with-a-primitive-that-is-not-integrable.md (direct)
PASS items/cex-a-functor-preserving-monomorphisms-but-not-pullbacks.md (finite-poset-counterexample)
PASS items/cex-a-list-of-length-mn-with-no-long-monotone-sublist.md (constructive)
PASS items/cex-a-maximal-antichain-that-is-not-maximum.md (direct)
PASS items/cex-a-monomorphism-need-not-split.md (direct)
PASS items/cex-a-multiple-traversal-has-the-same-circle-trace-but-greater-length.md (constructive)
PASS items/cex-a-non-locally-finite-poset.md (direct)
PASS items/cex-a-non-locally-finite-sum-can-be-discontinuous.md (direct)
PASS items/cex-a-path-connected-space-that-is-not-locally-connected.md (direct)
PASS items/cex-a-root-field-need-not-be-a-splitting-field.md (direct)
PASS items/cex-a-sieve-computation-that-omits-a-term.md (constructive)
PASS items/cex-a-subgraph-copy-need-not-be-induced.md (direct)
PASS items/cex-a-subgroup-of-an-abelian-group-need-not-be-characteristic.md (direct)
PASS items/cex-a-symmetric-transitive-relation-that-is-not-reflexive.md (direct)
PASS items/cex-a-wild-arc-drawing-is-not-a-plane-graph.md (direct)
PASS items/cex-abel-test-needs-monotonicity.md (direct)
PASS items/cex-absolute-value-integrable-without-the-function.md (direct)
PASS items/cex-absolute-value-is-not-differentiable-at-zero.md (direct)
PASS items/cex-acyclic-disconnected-graph.md (direct)
PASS items/cex-additive-rationals-show-finiteness-is-essential.md (direct)
PASS items/cex-ae-zero-derivative-does-not-determine-endpoint-change.md (direct)
PASS items/cex-an-algebraic-extension-need-not-be-finite.md (contradiction)
PASS items/cex-an-annihilating-polynomial-need-not-be-minimal.md (counterexample)
PASS items/cex-an-averaging-bound-that-is-not-attained.md (constructive)
PASS items/cex-an-incidence-function-with-nonunit-diagonal.md (direct)
PASS items/cex-an-indefinite-nondegenerate-form-need-not-split-off-orthogonal-complements.md (counterexample)
PASS items/cex-an-integrable-function-with-no-primitive.md (contradiction)
PASS items/cex-antidiagonal-of-the-sorgenfrey-plane.md (direct)
PASS items/cex-antisymmetric-need-not-be-alternating-in-characteristic-two.md (direct)
PASS items/cex-arc-length-is-not-continuous-under-uniform-convergence.md (construction)
PASS items/cex-arcsine-not-differentiable-at-endpoints.md (contradiction)
PASS items/cex-arcsine-of-sine-is-not-the-identity.md (direct)
PASS items/cex-bounded-not-totally-bounded.md (direct)
PASS items/cex-bounded-open-set-with-nonnull-boundary.md (direct)
PASS items/cex-bounded-total-derivative-on-a-nonconvex-domain-need-not-give-global-lipschitz.md (direct)
PASS items/cex-boundedness-is-not-topological.md (direct)
PASS items/cex-box-topology-diagonal-not-continuous.md (direct)
PASS items/cex-c6-and-two-triangles-share-a-degree-sequence.md (direct)
PASS items/cex-calling-one-prime-destroys-uniqueness.md (direct)
PASS items/cex-cancellative-monoid-not-a-group.md (direct)
PASS items/cex-cantor-intersection-needs-vanishing-diameters.md (direct)
PASS items/cex-cantor-point-that-is-not-an-endpoint.md (direct)
PASS items/cex-cauchy-mean-value-quotient-form-needs-a-nonvanishing-derivative.md (direct)
PASS items/cex-cauchy-product-of-convergent-series-diverges.md (direct)
PASS items/cex-cauchy-rationals-no-rational-limit.md (direct)
PASS items/cex-cauchys-theorem-does-not-extend-to-composite-divisors.md (contradiction)
PASS items/cex-chinese-remainder-without-coprimality.md (direct)
PASS items/cex-closed-and-bounded-not-compact-in-the-sup-metric.md (direct)
PASS items/cex-closed-bounded-in-q-not-compact.md (direct)
PASS items/cex-closed-set-with-an-isolated-point-is-not-perfect.md (direct)
PASS items/cex-closed-unbounded-euclidean-subset-not-compact.md (direct)
PASS items/cex-closure-of-ball-smaller-than-closed-ball.md (direct)
PASS items/cex-common-divisors-of-zero-have-no-greatest-element.md (direct)
PASS items/cex-common-jump-prevents-riemann-stieltjes-integrability.md (counterexample)
PASS items/cex-commuting-endomorphisms-need-not-be-diagonalisable.md (direct)
PASS items/cex-compact-convergence-without-uniform-convergence.md (direct)
PASS items/cex-compact-set-without-jordan-content.md (direct)
PASS items/cex-comparison-needs-nonnegativity.md (direct)
PASS items/cex-completeness-is-not-topological.md (direct)
PASS items/cex-complex-continuous-multiplicative-map-not-the-standard-exponential.md (direct)
PASS items/cex-complex-squaring-is-not-globally-invertible.md (direct)
PASS items/cex-components-differ-from-quasicomponents.md (direct)
PASS items/cex-composition-of-limits-fails.md (direct)
PASS items/cex-composition-of-relations-is-not-commutative.md (direct)
PASS items/cex-condensation-needs-monotonicity.md (direct)
PASS items/cex-congruence-need-not-preserve-trace-or-determinant.md (direct)
PASS items/cex-connected-even-degree-bowtie-is-not-a-cycle.md (direct)
PASS items/cex-connected-graphs-are-not-hereditary.md (direct)
PASS items/cex-constant-functions-are-equicontinuous-not-pointwise-bounded.md (direct)
PASS items/cex-continuous-bijection-not-a-homeomorphism.md (direct)
PASS items/cex-continuous-function-of-unbounded-variation.md (construction)
PASS items/cex-continuous-injection-on-a-non-interval-need-not-be-monotone.md (direct)
PASS items/cex-continuous-map-destroying-cauchyness.md (direct)
PASS items/cex-contraction-on-an-incomplete-space.md (direct)
PASS items/cex-contravariant-hom-need-not-be-right-exact.md (direct)
PASS items/cex-coset-multiplication-by-a-nonnormal-subgroup.md (direct)
PASS items/cex-cube-root-of-two-is-not-algebraically-constructible.md (contradiction)
PASS items/cex-cyclic-prime-square-extension-does-not-split.md (contradiction)
PASS items/cex-delete-only-relator-rewriting-can-require-lengthening.md (direct)
PASS items/cex-delete-only-relator-rewriting-is-order-dependent.md (direct)
PASS items/cex-delete-only-relator-rewriting-misses-ba.md (direct)
PASS items/cex-dense-set-of-measure-zero.md (direct)
PASS items/cex-dependent-variables-need-not-factor-expectation.md (constructive)
PASS items/cex-differentiable-with-unbounded-derivative-is-not-lipschitz.md (direct)
PASS items/cex-dimension-formula-fails-for-three-subspaces.md (direct)
PASS items/cex-dini-needs-a-compact-domain.md (direct)
PASS items/cex-dini-needs-a-continuous-limit.md (direct)
PASS items/cex-dini-needs-continuous-approximants.md (direct)
PASS items/cex-dini-needs-monotonicity.md (direct)
PASS items/cex-dirac-threshold-sharp.md (direct)
PASS items/cex-directional-derivatives-without-total-differentiability.md (direct)
PASS items/cex-dirichlet-has-no-limit-anywhere.md (direct)
PASS items/cex-dirichlet-is-not-riemann-integrable.md (direct)
PASS items/cex-dirichlet-is-nowhere-continuous.md (direct)
PASS items/cex-discontinuous-logarithmic-functional-equation.md (direct)
PASS items/cex-discontinuous-midpoint-convex-hamel-function.md (contradiction)
PASS items/cex-discontinuous-multiplicative-cauchy-solution.md (constructive)
PASS items/cex-distinct-polynomials-can-induce-the-same-finite-field-function.md (direct)
PASS items/cex-distinct-quadratic-forms-have-the-same-polar-form-in-characteristic-two.md (direct)
PASS items/cex-distinct-subspaces-of-the-dual-can-have-the-same-preannihilator.md (direct)
PASS items/cex-divides-a-product-without-dividing-a-factor.md (direct)
PASS items/cex-edge-deletion-alone-cannot-prove-induced-removal.md (direct)
PASS items/cex-embedding-not-order-preserving.md (direct)
PASS items/cex-empty-set-has-no-sup.md (direct)
PASS items/cex-equal-probability-events-need-not-be-independent.md (constructive)
PASS items/cex-equal-size-intervals-with-different-mobius-values.md (direct)
PASS items/cex-equivalent-categories-need-not-be-isomorphic.md (direct)
PASS items/cex-erdos-ko-rado-fails-below-two-k.md (direct)
PASS items/cex-euler-totient-need-not-be-the-unit-group-exponent.md (direct)
PASS items/cex-eulerian-not-hamiltonian.md (direct)
PASS items/cex-even-polynomial-algebra-is-not-dense.md (direct)
PASS items/cex-evt-and-ivt-fail-over-a-non-complete-field.md (direct)
PASS items/cex-evt-fails-on-the-open-interval-and-on-the-half-line.md (direct)
PASS items/cex-evt-fails-without-compactness.md (direct)
PASS items/cex-exponential-not-uniformly-continuous-on-r.md (direct)
PASS items/cex-exponential-product-limit-not-uniform-on-r.md (direct)
PASS items/cex-factorial-power-series-has-radius-zero.md (direct)
PASS items/cex-faithful-transitive-action-need-not-be-free.md (direct)
PASS items/cex-fermat-fails-at-an-endpoint.md (direct)
PASS items/cex-filtered-colimits-need-not-commute-with-infinite-products-in-set.md (bounded-sequences)
PASS items/cex-first-moment-threshold-one-is-not-enough.md (constructive)
PASS items/cex-fixed-point-congruence-fails-without-p-group-hypothesis.md (direct)
PASS items/cex-formal-composition-with-nonzero-constant.md (direct)
PASS items/cex-formal-nonunit-has-no-inverse.md (direct)
PASS items/cex-free-action-need-not-be-transitive.md (direct)
PASS items/cex-free-module-rank-fails-over-an-endomorphism-ring.md (direct)
PASS items/cex-fully-faithful-need-not-be-essentially-surjective.md (direct)
PASS items/cex-functors-need-not-preserve-monomorphisms.md (direct)
PASS items/cex-geometric-power-series-not-uniform-on-its-open-interval.md (direct)
PASS items/cex-grandi-series-abel-summable-but-divergent.md (direct)
PASS items/cex-graph-of-x-sin-one-over-x-is-not-rectifiable.md (divergent-variation)
PASS items/cex-greedy-order-on-p-four.md (direct)
PASS items/cex-grouped-series-converges-original-diverges.md (direct)
PASS items/cex-groups-of-order-p-cubed-need-not-be-abelian.md (direct)
PASS items/cex-half-graph-pairs-have-macroscopic-irregularity.md (direct)
PASS items/cex-half-open-interval-neither-open-nor-closed.md (direct)
PASS items/cex-hamilton-path-not-hamilton-cycle.md (direct)
PASS items/cex-hamiltonian-not-eulerian.md (direct)
PASS items/cex-heine-cantor-fails-without-compactness.md (direct)
PASS items/cex-hilbert-monoid-factorisation-not-unique.md (direct)
PASS items/cex-improper-filter.md (direct)
PASS items/cex-independent-set-that-does-not-span.md (direct)
PASS items/cex-indicator-of-a-fat-cantor-set-is-not-integrable.md (direct)
PASS items/cex-induction-axiom-necessary.md (direct)
PASS items/cex-infinite-branching-is-not-enough-for-konig.md (constructive)
PASS items/cex-infinite-product-diverges-though-the-series-converges.md (direct)
PASS items/cex-infinite-ramsey-fails-with-infinitely-many-colours.md (constructive)
PASS items/cex-interior-of-a-union-is-larger.md (direct)
PASS items/cex-intersection-of-shrinking-intervals-not-open.md (direct)
PASS items/cex-intersection-of-ultrafilters-not-ultrafilter.md (direct)
PASS items/cex-invertible-derivative-without-c-one-local-inverse.md (contradiction)
PASS items/cex-irrationals-are-not-f-sigma.md (direct)
PASS items/cex-irregular-summability-matrix.md (direct)
PASS items/cex-k-four-is-planar-but-not-three-colourable.md (direct)
PASS items/cex-k-three-three-satisfies-the-planar-edge-bound.md (direct)
PASS items/cex-k-topology-is-not-uniformizable.md (contradiction)
PASS items/cex-konig-fails-on-triangle.md (direct)
PASS items/cex-lagrange-multiplier-rule-needs-a-regular-constraint.md (direct)
PASS items/cex-laurent-nested-intervals-empty.md (direct)
PASS items/cex-left-coset-that-is-not-a-right-coset.md (direct)
PASS items/cex-lex-leading-term-not-found-by-unbalanced-substitution.md (direct)
PASS items/cex-lhopital-converse.md (direct)
PASS items/cex-limit-comparison-l-zero-one-directional.md (direct)
PASS items/cex-limit-differs-from-the-value.md (direct)
PASS items/cex-limit-not-unique-at-an-isolated-point.md (direct)
PASS items/cex-limit-point-compact-without-countable-compactness.md (direct)
PASS items/cex-limsup-infinite-not-attained-in-r.md (direct)
PASS items/cex-limsup-product-strict.md (direct)
PASS items/cex-limsup-subadditivity-strict.md (direct)
PASS items/cex-lindelofness-is-not-productive-worked.md (direct)
PASS items/cex-line-with-two-origins.md (direct)
PASS items/cex-localisation-map-can-kill-a-nonzero-element.md (direct)
PASS items/cex-localising-at-a-set-containing-zero-gives-the-zero-ring.md (direct)
PASS items/cex-log-one-plus-x-series-at-minus-one.md (direct)
PASS items/cex-logarithm-not-uniformly-continuous-on-positive-reals.md (direct)
PASS items/cex-m-over-m-plus-n-has-noncommuting-iterated-limits.md (direct)
PASS items/cex-markov-inequality-fails-without-nonnegativity.md (constructive)
PASS items/cex-maximal-matching-not-maximum-p4.md (direct)
PASS items/cex-maximal-not-greatest.md (direct)
PASS items/cex-meager-set-of-full-measure.md (direct)
PASS items/cex-mean-value-equality-fails-for-a-vector-valued-function.md (direct)
PASS items/cex-mean-value-theorem-fails-without-continuity-at-the-endpoints.md (direct)
PASS items/cex-mercator-series-does-not-define-logarithm-globally.md (direct)
PASS items/cex-minimum-spanning-tree-not-unique.md (direct)
PASS items/cex-modulus-is-nowhere-complex-differentiable.md (cases)
PASS items/cex-modulus-squared-is-complex-differentiable-only-at-zero.md (cases)
PASS items/cex-n-minus-one-edges-without-a-tree.md (direct)
PASS items/cex-naive-quaternion-determinant-is-not-row-alternating.md (direct)
PASS items/cex-nested-open-intervals-empty.md (direct)
PASS items/cex-nested-unbounded-closed-empty.md (direct)
PASS items/cex-no-roots-does-not-imply-irreducible-in-degree-four.md (direct)
PASS items/cex-non-metrizable-topology.md (direct)
PASS items/cex-noncompact-domain-breaks-arzela-ascoli.md (direct)
PASS items/cex-nonconstant-units-and-degree-drop-with-zero-divisors.md (direct)
PASS items/cex-noninjective-change-of-variables-double-counts.md (direct)
PASS items/cex-nonnegative-integrable-with-zero-integral-need-not-vanish.md (direct)
PASS items/cex-nonsplit-short-exact-sequence-of-integers-mod-two.md (direct)
PASS items/cex-nonsummable-constant-family.md (direct)
PASS items/cex-nonzero-elements-of-a-ring-need-not-form-a-multiplicative-set.md (direct)
PASS items/cex-normality-is-not-finitely-productive.md (direct)
PASS items/cex-normality-is-not-open-hereditary.md (direct)
PASS items/cex-nowhere-dense-with-positive-measure.md (direct)
PASS items/cex-null-set-not-of-content-zero.md (direct)
PASS items/cex-omega-one-has-no-at-most-countable-cofinal-subset.md (direct)
PASS items/cex-omitting-the-absolute-jacobian-reverses-sign.md (direct)
PASS items/cex-one-existing-iterated-integral-does-not-give-riemann-integrability.md (direct)
PASS items/cex-one-minus-two-plus-three-is-abel-but-not-cesaro-summable.md (direct)
PASS items/cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval.md (direct)
PASS items/cex-one-point-compactification-of-n-is-not-beta-n.md (contradiction)
PASS items/cex-open-bounded-euclidean-subset-not-compact.md (direct)
PASS items/cex-open-cover-of-unit-interval-no-finite-subcover.md (direct)
PASS items/cex-open-cover-with-no-lebesgue-number.md (direct)
PASS items/cex-orbit-count-is-not-set-size-divided-by-group-order.md (direct)
PASS items/cex-ordered-field-not-archimedean.md (direct)
PASS items/cex-oscillatory-step-function-improper-integral-diverges.md (counterexample)
PASS items/cex-overlapping-cycles-need-not-commute.md (direct)
PASS items/cex-pairwise-trivial-intersection-is-not-a-direct-sum.md (direct)
PASS items/cex-paracompactness-is-not-open-hereditary.md (direct)
PASS items/cex-paracompactness-is-not-productive.md (direct)
PASS items/cex-partial-derivatives-without-continuity.md (direct)
PASS items/cex-pasting-fails-for-an-infinite-closed-cover.md (direct)
PASS items/cex-peano-surface-linewise-minimum-without-an-extremum.md (direct)
PASS items/cex-peano-unequal-mixed-partials.md (direct)
PASS items/cex-pointwise-bounded-but-not-equicontinuous.md (direct)
PASS items/cex-polar-coordinates-are-not-globally-injective.md (direct)
PASS items/cex-polynomial-division-fails-for-a-nonunit-leading-coefficient.md (contradiction)
PASS items/cex-positive-determinant-does-not-imply-positive-definite.md (direct)
PASS items/cex-positive-pair-densities-alone-do-not-force-a-triangle.md (contradiction)
PASS items/cex-power-of-a-product-in-a-nonabelian-group.md (direct)
PASS items/cex-power-sums-do-not-generate-in-characteristic-two.md (direct)
PASS items/cex-powers-on-the-unit-interval-converge-pointwise-not-uniformly.md (direct)
PASS items/cex-principal-complex-powers-exponent-law.md (direct)
PASS items/cex-principal-value-one-over-x-squared-diverges.md (computation)
PASS items/cex-product-of-two-subgroups-not-a-subgroup.md (direct)
PASS items/cex-product-of-uniformly-continuous-functions-need-not-be-uniformly-continuous.md (direct)
PASS items/cex-progressive-map-without-fixed-point.md (direct)
PASS items/cex-projection-is-not-closed.md (direct)
PASS items/cex-proper-subspace-with-an-equinumerous-basis.md (direct)
PASS items/cex-pseudocompact-noncompact-particular-point-space.md (contradiction)
PASS items/cex-psi-of-one-over-x-has-no-limit-at-zero.md (direct)
PASS items/cex-q-not-dense-in-an-ordered-field.md (direct)
PASS items/cex-quadratics-can-have-four-roots-over-composite-residue-rings.md (direct)
PASS items/cex-quotient-map-neither-open-nor-closed.md (direct)
PASS items/cex-r-mod-q-is-indiscrete-like.md (direct)
PASS items/cex-ratio-inconclusive-root-decides.md (direct)
PASS items/cex-rational-points-in-unit-square-have-no-jordan-content.md (direct)
PASS items/cex-rationals-in-an-interval-are-disconnected.md (direct)
PASS items/cex-real-part-is-nowhere-complex-differentiable.md (direct)
PASS items/cex-reducible-polynomial-quotient-is-not-a-field.md (counterexample)
PASS items/cex-regular-graphs-are-not-hereditary.md (direct)
PASS items/cex-riemann-sums-along-one-sequence-of-tagged-partitions-do-not-suffice.md (direct)
PASS items/cex-ring-homomorphism-not-preserving-identity.md (direct)
PASS items/cex-rolle-fails-over-a-non-complete-field.md (direct)
PASS items/cex-root-limit-one-decides-nothing.md (direct)
PASS items/cex-row-equivalent-matrices-can-have-different-column-spaces.md (direct)
PASS items/cex-rudin-bounded-spikes-are-not-equicontinuous.md (direct)
PASS items/cex-s-three-has-trivial-center.md (direct)
PASS items/cex-same-cardinality-without-a-canonical-bijection.md (direct)
PASS items/cex-same-topology-different-cauchy-sequences.md (direct)
PASS items/cex-separability-is-not-hereditary-worked.md (direct)
PASS items/cex-separately-continuous-not-jointly-continuous.md (direct)
PASS items/cex-separating-algebra-without-constants-is-not-dense.md (direct)
PASS items/cex-sequential-closure-strictly-inside-closure.md (direct)
PASS items/cex-sequential-limits-not-unique.md (direct)
PASS items/cex-sequentially-continuous-not-continuous.md (direct)
PASS items/cex-set-distance-is-not-a-metric.md (direct)
PASS items/cex-shrinking-rectangles-have-integral-one.md (direct)
PASS items/cex-sine-of-one-over-x-has-no-limit-at-zero.md (direct)
PASS items/cex-smooth-function-not-equal-to-its-maclaurin-series.md (direct)
PASS items/cex-smooth-linewise-minimum-without-an-extremum.md (direct)
PASS items/cex-solution-count-trichotomy-fails-over-a-finite-field.md (direct)
PASS items/cex-spanning-set-that-is-not-independent.md (direct)
PASS items/cex-sphere-is-not-the-boundary-of-the-ball.md (direct)
PASS items/cex-spikes-with-integral-one-converging-pointwise-to-zero.md (direct)
PASS items/cex-sqrt-k-differences-null-not-cauchy.md (direct)
PASS items/cex-stolz-cesaro-converse-fails.md (direct)
PASS items/cex-straight-line-continuity-tests-do-not-imply-continuity.md (direct)
PASS items/cex-strict-contraction-without-a-fixed-point.md (direct)
PASS items/cex-strict-whitney-connectivity-inequalities.md (direct)
PASS items/cex-strictly-decreasing-gaps-no-limit.md (direct)
PASS items/cex-subgroup-of-an-infinite-group-equinumerous-with-it.md (direct)
PASS items/cex-subset-closed-under-addition-but-not-scaling.md (direct)
PASS items/cex-subset-closed-under-scaling-but-not-addition.md (direct)
PASS items/cex-subset-closed-under-the-operation-not-a-subgroup.md (direct)
PASS items/cex-successor-injective-necessary.md (direct)
PASS items/cex-sup-not-attained.md (direct)
PASS items/cex-symmetric-form-need-not-have-an-orthogonal-basis-in-characteristic-two.md (direct)
PASS items/cex-t1-free-regular-and-normal-conventions.md (direct)
PASS items/cex-tangent-addition-formula-without-domain.md (direct)
PASS items/cex-the-box-topology-disconnects-a-product-of-connected-spaces.md (direct)
PASS items/cex-the-cartesian-product-is-not-associative.md (direct)
PASS items/cex-the-deleted-tychonoff-plank-is-not-normal.md (contradiction)
PASS items/cex-the-diamond-and-pentagon-lattices-are-not-distributive.md (direct)
PASS items/cex-the-doubling-functor-on-set-is-not-representable.md (contradiction)
PASS items/cex-the-first-mean-value-theorem-needs-a-one-signed-weight.md (direct)
PASS items/cex-the-ideal-x-y-in-a-bivariate-polynomial-ring-is-not-principal.md (contradiction)
PASS items/cex-the-image-of-an-intersection-is-smaller-than-the-intersection-of-the-images.md (direct)
PASS items/cex-the-koch-curve-is-not-rectifiable.md (construction)
PASS items/cex-the-logarithmic-ramsey-bound-is-not-an-erdos-hajnal-bound.md (constructive)
PASS items/cex-the-mean-value-inequality-is-attained.md (direct)
PASS items/cex-the-one-form-y-dx-is-path-dependent.md (constructive)
PASS items/cex-the-one-norm-comes-from-no-inner-product.md (direct)
PASS items/cex-the-pointwise-limit-of-continuous-functions-need-not-be-continuous.md (direct)
PASS items/cex-the-power-set-of-a-union-is-larger-than-the-union-of-the-power-sets.md (direct)
PASS items/cex-the-product-of-two-unions-is-larger-than-the-union-of-the-two-products.md (direct)
PASS items/cex-the-same-trace-can-have-different-path-lengths.md (computation)
PASS items/cex-the-samuel-map-need-not-preserve-the-original-uniformity.md (direct)
PASS items/cex-there-is-no-field-with-six-elements.md (contradiction)
PASS items/cex-tietze-fails-in-a-t1-space-that-is-not-normal.md (contradiction)
PASS items/cex-topologically-not-uniformly-equivalent.md (direct)
PASS items/cex-total-quotient-ring-of-a-nondomain-need-not-be-a-field.md (direct)
PASS items/cex-totally-bounded-not-compact.md (direct)
PASS items/cex-trivial-kernel-does-not-imply-surjective.md (direct)
PASS items/cex-two-maps-into-an-indiscrete-space-agreeing-on-a-dense-set.md (constructive)
PASS items/cex-unbounded-closed-set-not-compact.md (direct)
PASS items/cex-unbounded-set-has-no-sup.md (direct)
PASS items/cex-unbounded-with-convergent-subsequence.md (direct)
PASS items/cex-uncorrelated-random-variables-need-not-be-independent.md (constructive)
PASS items/cex-uniform-bijection-with-non-uniform-inverse.md (direct)
PASS items/cex-uniform-convergence-does-not-control-derivatives.md (direct)
PASS items/cex-uniformly-not-lipschitz-equivalent.md (direct)
PASS items/cex-union-of-filters-not-filter.md (direct)
PASS items/cex-unique-critical-point-is-a-nonglobal-strict-local-minimum.md (calculation)
PASS items/cex-unit-group-modulo-fifteen-is-not-cyclic.md (direct)
PASS items/cex-unsigned-half-angle-formula.md (direct)
PASS items/cex-upper-semicontinuous-need-not-attain-its-infimum.md (direct)
PASS items/cex-volterra-bounded-derivative-not-riemann-integrable.md (construction)
PASS items/cex-vortex-field-is-closed-but-not-exact-on-the-punctured-plane.md (constructive)
PASS items/cex-x-squared-is-not-uniformly-continuous-on-r.md (direct)
PASS items/cex-z-four-not-isomorphic-z-two-squared.md (direct)
PASS items/cex-z-mod-n-is-not-a-free-z-module.md (direct)
PASS items/cex-z-mod-one-is-not-a-field.md (direct)
PASS items/cex-zero-directional-derivatives-without-continuity.md (direct)
PASS items/cex-zero-hessian-does-not-classify-a-critical-point.md (calculation)
PASS items/cex-zero-ideal-prime-not-maximal-in-z.md (direct)
PASS items/cex-zero-times-infinity-indeterminate.md (direct)
PASS items/cex-zorn-hypothesis-fails.md (direct)
PASS items/cor-a-compact-hausdorff-space-is-tychonoff.md (direct)
PASS items/cor-a-function-with-nonempty-domain-is-injective-exactly-when-it-has-a-left-inverse.md (direct)
PASS items/cor-a-graph-has-an-even-number-of-odd-degree-vertices.md (direct)
PASS items/cor-a-linear-subspace-has-a-complement.md (constructive)
PASS items/cor-a-map-homotopic-to-a-homotopy-equivalence-is-a-homotopy-equivalence.md (direct)
PASS items/cor-a-retract-of-a-contractible-space-is-contractible.md (direct)
PASS items/cor-a-row-reduction-is-a-product-of-elementary-matrices.md (induction)
PASS items/cor-a-simple-eigenvalue-has-one-dimensional-eigenspace.md (direct)
PASS items/cor-abel-test-for-improper-integrals.md (direct)
PASS items/cor-abelian-p-groups-of-order-pn-are-counted-by-partitions.md (direct)
PASS items/cor-ac-iff-well-ordering.md (direct)
PASS items/cor-ac-iff-zorn.md (direct)
PASS items/cor-algebraically-constructible-numbers-have-power-of-two-degree.md (direct)
PASS items/cor-all-abelian-groups-of-order-n-cyclic-iff-n-squarefree.md (direct)
PASS items/cor-alternating-group-is-normal-and-has-half-the-elements.md (direct)
PASS items/cor-amalgamation-along-an-isomorphism-recovers-the-other-factor.md (direct)
PASS items/cor-an-operator-has-at-most-dimension-many-distinct-eigenvalues.md (direct)
PASS items/cor-arc-length-accumulation-derivative-is-speed.md (direct)
PASS items/cor-archimedean-reciprocal.md (direct)
PASS items/cor-area-as-a-line-integral-for-elementary-regions.md (direct)
PASS items/cor-banach-error-estimates.md (direct)
PASS items/cor-binomial-theorem-consequences.md (direct)
PASS items/cor-bipartite-extremal-density-zero.md (direct)
PASS items/cor-bolzano-weierstrass-in-rn.md (direct)
PASS items/cor-bounded-derivative-implies-lipschitz.md (direct)
PASS items/cor-boundedness-theorem-r.md (direct)
PASS items/cor-bv-discontinuities-are-countable-and-of-first-kind.md (direct)
PASS items/cor-bv-functions-are-riemann-integrable.md (direct)
PASS items/cor-c2-holomorphic-components-have-nonpositive-hessian-determinant.md (direct)
PASS items/cor-cantor-function-is-continuous.md (direct)
PASS items/cor-cardinal-absorption.md (direct)
PASS items/cor-cardinal-functions-detect-countability-axioms.md (direct)
PASS items/cor-cardinality-of-the-power-set.md (direct)
PASS items/cor-carmichael-exponent-theorem.md (direct)
PASS items/cor-cartesian-and-polar-cauchy-riemann-equations.md (direct)
PASS items/cor-cauchy-product-absolute.md (direct)
PASS items/cor-cauchy-reals-lub-complete.md (direct)
PASS items/cor-cavalieri-principle-for-jordan-content.md (direct)
PASS items/cor-center-of-a-free-product-is-trivial.md (contradiction)
PASS items/cor-center-of-symmetric-group-is-trivial.md (contradiction)
PASS items/cor-central-binomial-coefficient-asymptotic-from-wallis.md (direct)
PASS items/cor-cesaro-matrix-is-regular.md (direct)
PASS items/cor-change-of-rings-for-extension-of-scalars.md (direct)
PASS items/cor-change-of-variables-for-compactly-supported-functions.md (reduction)
PASS items/cor-change-of-variables-on-bounded-open-jordan-sets.md (exhaustion)
PASS items/cor-characteristic-polynomial-evaluation-has-only-zero-eigenvalues.md (direct)
PASS items/cor-chord-length-is-at-most-arc-length.md (direct)
PASS items/cor-chromatic-number-extremal-density.md (direct)
PASS items/cor-classical-mobius-inversion.md (direct)
PASS items/cor-closed-exact-and-conservative-equivalence-on-star-shaped-domains.md (direct)
PASS items/cor-cofinality-of-a-cardinal-power.md (direct)
PASS items/cor-common-divisor-divides-gcd.md (direct)
PASS items/cor-compact-domain-maps-are-uniformly-continuous.md (direct)
PASS items/cor-compact-hausdorff-partitions-of-unity.md (direct)
PASS items/cor-compactness-via-universal-nets.md (direct)
PASS items/cor-complete-graph-edge-count.md (direct)
PASS items/cor-complete-homogeneous-symmetric-polynomials-freely-generate.md (direct)
PASS items/cor-complete-normality-is-hereditary.md (direct)
PASS items/cor-completeness-and-cocompleteness-criteria.md (biconditional)
PASS items/cor-complex-de-moivre-formula.md (direct)
PASS items/cor-complex-differentiability-implies-continuity.md (direct)
PASS items/cor-complex-exponential-cartesian-form-modulus-and-eulers-identity.md (direct)
PASS items/cor-complex-numbers-are-a-quadratic-real-extension.md (direct)
PASS items/cor-components-of-open-subsets-of-rn-are-polygonally-connected.md (direct)
PASS items/cor-composite-of-two-subfields.md (direct)
PASS items/cor-connected-components-partition-the-vertex-set.md (direct)
PASS items/cor-connected-subsets-of-the-line.md (direct)
PASS items/cor-conservative-fields-are-path-independent-and-have-zero-circulation.md (direct)
PASS items/cor-constant-modulus-holomorphic-function-is-constant.md (cases)
PASS items/cor-continuous-complex-derivative-gives-c1-components.md (direct)
PASS items/cor-continuous-extension-from-a-dense-subset-r.md (direct)
PASS items/cor-continuous-image-of-an-interval-is-an-interval.md (direct)
PASS items/cor-continuous-logarithmic-functions-form-a-one-parameter-family.md (direct)
PASS items/cor-contractible-iff-identity-nullhomotopic.md (direct)
PASS items/cor-contractible-spaces-are-path-connected.md (direct)
PASS items/cor-contravariant-yoneda-lemma.md (direct)
PASS items/cor-convergent-series-are-cesaro-and-abel-summable.md (direct)
PASS items/cor-converse-of-lagrange-for-finite-abelian-groups.md (direct)
PASS items/cor-convex-differentiable-functions-have-continuous-derivatives.md (direct)
PASS items/cor-convex-subsets-of-rn-are-contractible.md (direct)
PASS items/cor-countably-many-discontinuities-integrable.md (direct)
PASS items/cor-cramers-rule-over-a-field.md (direct)
PASS items/cor-derivatives-have-no-removable-or-jump-discontinuities.md (contradiction)
PASS items/cor-derived-subgroups-of-symmetric-and-alternating-groups.md (direct)
PASS items/cor-determinant-is-a-polynomial-in-the-matrix-entries.md (direct)
PASS items/cor-determinant-is-alternating-multilinear-in-the-rows.md (direct)
PASS items/cor-determinant-is-invariant-under-similarity.md (direct)
PASS items/cor-determinant-of-an-inverse.md (direct)
PASS items/cor-determinant-vanishes-with-a-zero-or-repeated-column.md (direct)
PASS items/cor-differentiable-implies-continuous.md (direct)
PASS items/cor-dihedral-groups-as-semidirect-products.md (direct)
PASS items/cor-dimension-of-a-direct-sum.md (induction)
PASS items/cor-dimensions-of-matrix-and-linear-map-spaces.md (direct)
PASS items/cor-diracs-hamiltonicity-theorem.md (direct)
PASS items/cor-discriminant-as-a-resultant-with-the-derivative.md (direct)
PASS items/cor-distinct-characteristic-roots-imply-diagonalisability.md (direct)
PASS items/cor-distinct-edge-weights-give-a-unique-minimum-spanning-tree.md (contradiction)
PASS items/cor-distributive-and-de-morgan-laws-for-indexed-families.md (direct)
PASS items/cor-division-algorithm-nonzero-divisor.md (cases)
PASS items/cor-double-orthogonal-complement-and-dimension.md (direct)
PASS items/cor-e-is-the-unique-unit-hyperbolic-area.md (direct)
PASS items/cor-each-factor-is-a-retract-of-a-free-product.md (direct)
PASS items/cor-element-algebraic-iff-simple-extension-finite.md (direct)
PASS items/cor-elementary-matrices-are-invertible.md (direct)
PASS items/cor-endomorphism-algebra-is-a-minimal-polynomial-quotient.md (direct)
PASS items/cor-endomorphism-ring-is-a-matrix-ring.md (direct)
PASS items/cor-equalizers-are-monic-and-coequalizers-are-epic.md (direct-corollary)
PASS items/cor-equicontinuous-bounded-sequence-has-a-uniformly-convergent-subsequence.md (direct)
PASS items/cor-erdos-szekeres-from-mirsky.md (direct)
PASS items/cor-euclidean-closed-balls-and-spheres-are-compact.md (direct)
PASS items/cor-euclidean-compactness-equivalence-chart.md (direct)
PASS items/cor-euclidean-spheres-are-path-connected.md (constructive)
PASS items/cor-euclids-lemma-for-finite-products.md (induction)
PASS items/cor-euler-formula-for-disconnected-plane-graphs.md (direct)
PASS items/cor-euler-totient-is-multiplicative.md (direct)
PASS items/cor-euler-trail-characterisation.md (direct)
PASS items/cor-every-finite-group-is-finitely-presented.md (constructive)
PASS items/cor-every-graph-on-at-most-three-vertices-has-the-erdos-hajnal-property.md (cases)
PASS items/cor-every-local-ring-is-its-localisation-at-its-maximal-ideal.md (direct)
PASS items/cor-every-module-is-a-quotient-of-a-free-module.md (direct)
PASS items/cor-every-nonconstant-polynomial-has-a-root-in-an-extension.md (direct)
PASS items/cor-every-spanning-set-contains-a-basis.md (direct)
PASS items/cor-every-vector-space-has-a-basis.md (direct)
PASS items/cor-exponential-is-a-bijection-onto-positive-reals.md (direct)
PASS items/cor-exponential-reciprocal-and-positivity.md (direct)
PASS items/cor-extended-euclidean-bezout-coefficients.md (induction)
PASS items/cor-factor-images-intersect-in-the-amalgamated-subgroup.md (direct)
PASS items/cor-factor-theorem-over-a-commutative-ring.md (direct)
PASS items/cor-factorisation-of-a-nonzero-integer.md (direct)
PASS items/cor-factors-embed-in-a-free-product-with-amalgamation.md (direct)
PASS items/cor-faithful-transitive-actions-are-core-free-coset-actions.md (direct)
PASS items/cor-fields-of-fractions-are-unique-over-the-domain.md (direct)
PASS items/cor-finite-abelian-group-cyclic-iff-one-invariant-factor.md (direct)
PASS items/cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases.md (direct)
PASS items/cor-finite-dimensional-vector-spaces-are-isomorphic-iff-equal-dimension.md (direct)
PASS items/cor-finite-extensions-of-finite-fields-are-simple.md (constructive)
PASS items/cor-finite-iterated-tensor-products-represent-multilinear-maps.md (induction)
PASS items/cor-finite-ramsey-by-konig-compactness.md (contradiction)
PASS items/cor-finite-section-support-forces-zero-integral.md (direct)
PASS items/cor-finite-subgroups-of-units-in-a-domain-are-cyclic.md (direct)
PASS items/cor-flat-modules-preserve-intersections-of-ideals.md (direct)
PASS items/cor-formal-series-over-a-field-is-a-local-domain.md (direct)
PASS items/cor-free-modules-are-projective-and-flat.md (direct)
PASS items/cor-free-product-factor-maps-are-injective.md (direct)
PASS items/cor-free-product-of-infinite-cyclic-groups-is-free.md (direct)
PASS items/cor-free-products-are-unique-up-to-unique-isomorphism.md (direct)
PASS items/cor-ftc-integral-function-differentiable-almost-everywhere.md (direct)
PASS items/cor-full-faithful-essentially-surjective-small-target-characterises-equivalence.md (direct)
PASS items/cor-functor-categories-inherit-completeness-and-cocompleteness.md (direct-corollary)
PASS items/cor-g-to-the-group-order-is-identity.md (direct)
PASS items/cor-gcd-quotients-coprime.md (direct)
PASS items/cor-general-linear-group-is-a-group.md (direct)
PASS items/cor-generalised-eigenspace-decomposition-for-a-split-minimal-polynomial.md (direct)
PASS items/cor-generators-embed-in-the-word-quotient.md (direct)
PASS items/cor-generators-of-a-finite-cyclic-group.md (direct)
PASS items/cor-group-mod-center-is-inner-automorphism-group.md (direct)
PASS items/cor-groups-of-order-p-squared-are-abelian.md (direct)
PASS items/cor-h-free-complement-dictionary.md (direct)
PASS items/cor-hall-deficiency-formula.md (direct)
PASS items/cor-hall-sdr-finite-families.md (direct)
PASS items/cor-hamiltonian-graph-is-two-connected.md (direct)
PASS items/cor-harmonic-addition-formula.md (direct)
PASS items/cor-heine-borel-in-the-product-topology.md (direct)
PASS items/cor-hessian-is-symmetric.md (direct)
PASS items/cor-holomorphic-function-with-holomorphic-conjugate-is-constant.md (direct)
PASS items/cor-hom-functors-are-continuous-and-send-colimits-to-limits.md (direct-corollary)
PASS items/cor-homotopy-equivalence-bijection-on-path-components.md (direct)
PASS items/cor-homotopy-relative-and-path-homotopy-are-equivalence-relations.md (direct)
PASS items/cor-idempotent-endomorphisms-are-diagonalisable-projections.md (direct)
PASS items/cor-image-and-preimage-round-trips-detect-injectivity-and-surjectivity.md (direct)
PASS items/cor-improper-integral-tails-tend-to-zero.md (direct)
PASS items/cor-improper-integral-test-for-series.md (direct)
PASS items/cor-inclusion-exclusion-is-boolean-mobius-inversion.md (direct)
PASS items/cor-indecomposable-finite-abelian-groups-are-cyclic-prime-power.md (direct)
PASS items/cor-independent-set-is-no-larger-than-a-finite-spanning-set.md (direct)
PASS items/cor-index-one-iff-whole-group.md (direct)
PASS items/cor-index-p-subgroups-of-finite-p-groups-are-normal.md (direct)
PASS items/cor-index-tower-finite.md (direct)
PASS items/cor-infinite-ramsey-for-dedekind-infinite-sets.md (direct)
PASS items/cor-injective-or-monotone-derivative-is-continuous.md (cases)
PASS items/cor-integrability-of-absolute-values-products-and-lattice-operations.md (direct)
PASS items/cor-integral-exponential-addition-law.md (direct)
PASS items/cor-integral-logarithm-agrees-with-natural-logarithm.md (direct)
PASS items/cor-integral-logarithm-is-strictly-increasing.md (direct)
PASS items/cor-integral-logarithm-reciprocals-and-integer-powers.md (direct)
PASS items/cor-intermediate-field-degrees-divide.md (direct)
PASS items/cor-intermediate-value-theorem-topological.md (direct)
PASS items/cor-interval-uncountable.md (contradiction)
PASS items/cor-inverse-by-row-reducing-an-augmented-matrix.md (constructive)
PASS items/cor-inverse-matrix-by-adjugate.md (direct)
PASS items/cor-inverse-of-an-invertible-operator-is-a-polynomial-in-the-operator.md (direct)
PASS items/cor-invertible-matrix-has-unit-determinant.md (direct)
PASS items/cor-irrationals-uncountable.md (contradiction)
PASS items/cor-irreducible-polynomial-is-separable-iff-derivative-nonzero.md (direct)
PASS items/cor-irreducible-polynomials-exist-over-finite-fields-in-every-degree.md (contradiction)
PASS items/cor-jacobian-determinant-of-a-holomorphic-map.md (direct)
PASS items/cor-jordan-content-finite-additivity.md (induction)
PASS items/cor-jordan-content-under-a-c-one-diffeomorphism.md (direct)
PASS items/cor-k-five-and-k-three-three-are-nonplanar.md (direct)
PASS items/cor-lagrange-multiplier-rule-for-graph-constraints.md (direct)
PASS items/cor-laurent-nested-intervals.md (direct)
PASS items/cor-laurent-not-lub-complete.md (direct)
PASS items/cor-length-of-the-graph-of-a-c1-function.md (specialization)
PASS items/cor-liminf-is-least-subsequential-limit.md (direct)
PASS items/cor-limit-comparison-test-for-improper-integrals.md (direct)
PASS items/cor-local-minima-of-convex-functions-are-global.md (contradiction)
PASS items/cor-local-rings-have-only-trivial-idempotents.md (cases)
PASS items/cor-localisation-is-unique-up-to-unique-isomorphism.md (direct)
PASS items/cor-lower-limit-line-is-normal.md (direct)
PASS items/cor-matrix-rank-equals-the-rank-of-its-linear-map.md (direct)
PASS items/cor-matrix-rank-nullity.md (direct)
PASS items/cor-matrix-rings-are-noncommutative-in-dimension-at-least-two.md (direct)
PASS items/cor-maximal-ideals-are-prime.md (direct)
PASS items/cor-mean-value-theorem.md (direct)
PASS items/cor-metric-spaces-admit-subordinate-partitions-of-unity.md (direct)
PASS items/cor-metrizability-and-first-countability-are-hereditary.md (direct)
PASS items/cor-minimal-polynomial-divides-characteristic-polynomial.md (direct)
PASS items/cor-minimum-degree-two-forces-a-cycle.md (direct)
PASS items/cor-mobius-inversion-for-finite-posets.md (direct)
PASS items/cor-module-tensor-products-are-unique-up-to-unique-isomorphism.md (direct)
PASS items/cor-monic-resultant-is-unchanged-modulo-f.md (direct)
PASS items/cor-monic-resultant-symmetry.md (direct)
PASS items/cor-monotone-converges-iff-bounded.md (direct)
PASS items/cor-multivariable-taylor-formula-with-peano-remainder.md (direct)
PASS items/cor-multivariate-polynomial-ring-over-a-domain-is-a-domain.md (induction)
PASS items/cor-nat-addition-well-defined.md (direct)
PASS items/cor-nat-multiplication-well-defined.md (direct)
PASS items/cor-newton-leibniz-with-finitely-many-exceptional-points.md (decomposition)
PASS items/cor-nilpotent-groups-and-finite-p-groups-are-solvable.md (direct)
PASS items/cor-no-function-is-continuous-exactly-on-q.md (contradiction)
PASS items/cor-nonempty-hereditary-class-contains-the-null-graph.md (direct)
PASS items/cor-nontrivial-tree-has-two-leaves.md (direct)
PASS items/cor-normal-subgroups-are-exactly-kernels.md (direct)
PASS items/cor-number-of-abelian-groups-of-a-given-finite-order.md (direct)
PASS items/cor-number-of-labelled-simple-graphs.md (direct)
PASS items/cor-number-of-primitive-roots-modulo-n.md (direct)
PASS items/cor-number-of-primitive-roots-modulo-odd-prime-power.md (direct)
PASS items/cor-number-of-solutions-of-a-binomial-congruence.md (direct)
PASS items/cor-number-theoretic-mobius-is-multiplicative.md (direct)
PASS items/cor-of-neg-one-squared.md (direct)
PASS items/cor-of-one-positive.md (direct)
PASS items/cor-of-reverse-triangle.md (direct)
PASS items/cor-one-dimensional-and-multidimensional-riemann-agree.md (direct)
PASS items/cor-one-dimensional-change-of-variables-with-absolute-derivative.md (cases)
PASS items/cor-one-dimensional-null-and-content-zero-agree.md (direct)
PASS items/cor-only-proper-nontrivial-normal-subgroup-of-s-n.md (cases)
PASS items/cor-operator-determinant-by-row-reduction.md (direct)
PASS items/cor-operator-determinant-on-the-general-linear-group.md (direct)
PASS items/cor-orbit-stabilizer-cardinality.md (direct)
PASS items/cor-order-and-exponent-from-invariant-factors.md (direct)
PASS items/cor-order-is-the-product-of-composition-factor-orders.md (direct)
PASS items/cor-order-of-a-permutation-from-its-cycle-lengths.md (direct)
PASS items/cor-order-of-a-quotient-group.md (direct)
PASS items/cor-order-of-element-divides-group-order.md (direct)
PASS items/cor-ordinal-addition-well-defined.md (direct)
PASS items/cor-ordinal-exponentiation-well-defined.md (direct)
PASS items/cor-ordinal-multiplication-well-defined.md (direct)
PASS items/cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus.md (direct)
PASS items/cor-p-group-action-has-a-fixed-point.md (contradiction)
PASS items/cor-parallelepiped-content-is-the-absolute-determinant.md (direct)
PASS items/cor-partition-into-self-regular-sets.md (direct)
PASS items/cor-perfect-normality-is-hereditary.md (direct)
PASS items/cor-pi-is-the-first-positive-sine-zero.md (direct)
PASS items/cor-piecewise-c1-paths-have-additive-speed-integral-length.md (decomposition)
PASS items/cor-planar-graph-has-low-degree-vertex.md (contradiction)
PASS items/cor-planar-graphs-have-no-kuratowski-subdivision.md (contradiction)
PASS items/cor-planar-simple-graph-edge-bound.md (direct)
PASS items/cor-polynomial-ring-over-a-domain-is-a-domain.md (direct)
PASS items/cor-polynomial-ring-over-a-field-is-a-pid.md (direct)
PASS items/cor-polynomial-ring-over-a-field-is-euclidean.md (direct)
PASS items/cor-polynomials-in-commuting-diagonalisable-endomorphisms-are-diagonalisable.md (direct)
PASS items/cor-polynomials-over-an-infinite-domain-are-determined-by-values.md (contradiction)
PASS items/cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue.md (direct)
PASS items/cor-potentials-differ-by-a-componentwise-constant.md (direct)
PASS items/cor-power-congruence-solution-count-modulo-a-prime.md (direct)
PASS items/cor-power-series-convergence-dichotomy.md (direct)
PASS items/cor-power-series-sums-are-continuous.md (direct)
PASS items/cor-power-series-sums-are-smooth-with-coefficient-formula.md (induction)
PASS items/cor-power-sums-generate-when-factorial-is-invertible.md (direct)
PASS items/cor-primary-projections-are-polynomials-in-the-endomorphism.md (direct)
PASS items/cor-prime-iff-euclid-property.md (direct)
PASS items/cor-prime-order-group-is-cyclic.md (direct)
PASS items/cor-primitive-roots-modulo-prime.md (direct)
PASS items/cor-primitives-of-a-continuous-function.md (direct)
PASS items/cor-punctured-rn-homotopy-equivalent-to-the-sphere.md (direct)
PASS items/cor-q-is-meager-and-not-g-delta.md (contradiction)
PASS items/cor-quadratic-forms-diagonalize-in-characteristic-not-two.md (direct)
PASS items/cor-quotient-of-an-abelian-group-is-abelian.md (direct)
PASS items/cor-raabe-test.md (direct)
PASS items/cor-ramsey-recursion-and-diagonal-upper-bound.md (direct)
PASS items/cor-rank-and-nondegeneracy-are-congruence-invariants.md (direct)
PASS items/cor-rank-criterion-for-consistency.md (direct)
PASS items/cor-ratio-test-is-kummer-with-constant-weights.md (direct)
PASS items/cor-rational-function-field-as-a-fraction-field.md (direct)
PASS items/cor-rational-root-of-an-integer-is-an-integer.md (direct)
PASS items/cor-real-analytic-functions-are-smooth.md (direct)
PASS items/cor-real-power-as-rational-limit.md (direct)
PASS items/cor-real-symmetric-bilinear-forms-are-classified-by-inertia.md (direct)
PASS items/cor-real-valued-holomorphic-function-is-constant.md (direct)
PASS items/cor-regular-c1-paths-have-c1-unit-speed-parametrizations.md (inverse-function)
PASS items/cor-regularity-refining-a-given-partition.md (direct)
PASS items/cor-relative-variance-positive-probability-bound.md (direct)
PASS items/cor-repeated-riemann-integrals-on-rectangles.md (direct)
PASS items/cor-representable-presheaves-detect-isomorphism-of-objects.md (direct)
PASS items/cor-residue-field-of-a-localisation-at-a-prime.md (direct)
PASS items/cor-riemann-integral-of-a-product-function.md (direct)
PASS items/cor-riemann-stieltjes-agrees-with-riemann.md (direct)
PASS items/cor-riemann-stieltjes-existence-bv-continuous.md (direct)
PASS items/cor-riemann-stieltjes-integral-bound.md (direct)
PASS items/cor-rn-is-locally-compact-and-sigma-compact.md (constructive)
PASS items/cor-rn-is-polygonally-connected-and-locally-path-connected.md (direct)
PASS items/cor-root-test-dominates-ratio-test.md (direct)
PASS items/cor-samuel-compactification-agrees-with-completion-for-totally-bounded-spaces.md (direct)
PASS items/cor-samuel-compactification-is-unique.md (direct)
PASS items/cor-scalar-line-integral-of-one-is-arc-length.md (direct)
PASS items/cor-second-derivative-characterises-convexity.md (cases)
PASS items/cor-second-derivative-sign-change-gives-an-inflection-point.md (cases)
PASS items/cor-second-order-taylor-expansion-with-the-hessian.md (direct)
PASS items/cor-separated-uniformizable-iff-tychonoff.md (direct)
PASS items/cor-sequential-criterion-for-nonexistence.md (contrapositive)
PASS items/cor-sign-from-disjoint-cycle-structure.md (direct)
PASS items/cor-sign-is-the-unique-nontrivial-homomorphism-to-signs.md (direct)
PASS items/cor-sin-x-over-x-limit.md (direct)
PASS items/cor-small-complete-or-cocomplete-categories-are-preorders.md (direct-corollary)
PASS items/cor-solution-count-trichotomy-over-an-infinite-field.md (direct)
PASS items/cor-sperner-from-symmetric-chains.md (direct)
PASS items/cor-sperner-theorem-with-equality-cases.md (direct)
PASS items/cor-splitting-field-of-a-product-is-the-composite-of-splitting-fields.md (direct)
PASS items/cor-splitting-fields-are-unique-up-to-base-isomorphism.md (direct)
PASS items/cor-splitting-fields-exist-for-finite-families.md (direct)
PASS items/cor-square-matrices-form-a-ring.md (direct)
PASS items/cor-square-matrix-invertible-iff-determinant-is-a-unit.md (direct)
PASS items/cor-stem-fields-are-uniquely-f-isomorphic.md (direct)
PASS items/cor-stolz-cesaro-zero-over-zero.md (direct)
PASS items/cor-stone-cech-compactification-is-unique-over-x.md (direct)
PASS items/cor-stone-cech-compactification-maps-onto-samuel-compactification.md (direct)
PASS items/cor-stone-cech-of-compact-hausdorff-space-is-itself.md (direct)
PASS items/cor-strictly-convex-functions-have-at-most-one-minimizer.md (contradiction)
PASS items/cor-subgroups-of-abelian-groups-are-normal.md (direct)
PASS items/cor-sum-of-roots-of-unity.md (direct)
PASS items/cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types.md (bijection)
PASS items/cor-symmetric-group-class-equation-by-cycle-type.md (counting)
PASS items/cor-symmetric-lovasz-local-lemma.md (cases)
PASS items/cor-symmetric-matrices-are-congruent-to-diagonal-matrices.md (direct)
PASS items/cor-symmetric-polynomial-values-on-roots-lie-in-the-base-field.md (direct)
PASS items/cor-taylor-lagrange-and-cauchy-remainders.md (direct)
PASS items/cor-taylor-remainder-bound.md (direct)
PASS items/cor-tensor-product-with-a-quotient-ring.md (direct)
PASS items/cor-tensor-products-of-finite-free-modules-and-dimension.md (direct)
PASS items/cor-termwise-integration-of-a-real-power-series.md (direct)
PASS items/cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed.md (direct)
PASS items/cor-the-aleph-and-beth-hierarchies-are-well-defined.md (direct)
PASS items/cor-the-averaging-principle.md (contradiction)
PASS items/cor-the-class-of-all-graphs-is-not-erdos-hajnal.md (contradiction)
PASS items/cor-the-derangement-recurrences.md (direct)
PASS items/cor-the-empty-family-has-no-intersection.md (contradiction)
PASS items/cor-the-successor-operation-is-injective.md (direct)
PASS items/cor-there-is-no-set-of-all-sets.md (contradiction)
PASS items/cor-three-cycles-form-one-conjugacy-class-in-a-n.md (direct)
PASS items/cor-tietze-for-unbounded-and-open-interval-valued-maps.md (constructive)
PASS items/cor-topological-groups-are-completely-regular.md (direct)
PASS items/cor-torsion-in-a-free-product-is-conjugate-into-a-factor.md (direct)
PASS items/cor-totient-at-one-and-at-a-prime.md (direct)
PASS items/cor-trace-is-invariant-under-similarity.md (direct)
PASS items/cor-trace-is-tensor-contraction.md (direct)
PASS items/cor-tree-edge-count.md (direct)
PASS items/cor-triangle-free-planar-edge-bound.md (direct)
PASS items/cor-triangle-inequality-for-inner-product-norm.md (direct)
PASS items/cor-trigonometric-parity-and-pythagorean-identity.md (direct)
PASS items/cor-trivial-amalgamation-is-the-free-product.md (direct)
PASS items/cor-turan-ramsey-lower-bound.md (direct)
PASS items/cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal.md (direct)
PASS items/cor-two-event-inclusion-exclusion.md (direct)
PASS items/cor-two-less-than-e-less-than-three.md (direct)
PASS items/cor-two-variable-hessian-determinant-test.md (calculation)
PASS items/cor-tychonoff-spaces-have-compactifications-under-the-ultrafilter-lemma.md (direct)
PASS items/cor-unconditional-iff-absolute-in-r.md (direct)
PASS items/cor-under-choice-every-epimorphism-in-set-splits.md (direct)
PASS items/cor-uniform-cauchy-criterion-function-series.md (direct)
PASS items/cor-uniform-compactness-equivalence.md (direct)
PASS items/cor-uniform-limit-uniformly-continuous.md (direct)
PASS items/cor-unique-formal-root-with-constant-one.md (direct)
PASS items/cor-unit-group-modulo-prime-is-cyclic.md (direct)
PASS items/cor-units-in-a-polynomial-ring-over-a-domain.md (direct)
PASS items/cor-universal-property-of-the-complex-numbers.md (direct)
PASS items/cor-urysohn-metrization.md (direct)
PASS items/cor-urysohns-lemma-closes-the-separation-chain.md (direct)
PASS items/cor-variance-adds-for-pairwise-independent-random-variables.md (direct)
PASS items/cor-vector-valued-ftc-and-lipschitz-bound.md (direct)
PASS items/cor-vietas-formulas-for-a-split-monic-polynomial.md (direct)
PASS items/cor-weierstrass-approximation-on-a-closed-interval.md (direct)
PASS items/cor-weierstrass-approximation-on-the-unit-interval.md (direct)
PASS items/cor-whitney-k-connected-path-characterisation.md (direct)
PASS items/cor-word-quotient-and-reduced-word-models-are-uniquely-isomorphic.md (direct)
PASS items/cor-xn-minus-p-is-irreducible-over-q.md (direct)
PASS items/cor-yoneda-preserves-and-reflects-small-limits.md (pointwise)
PASS items/cor-z-free-product-z-is-free-group-of-rank-two.md (direct)
PASS items/cor-zero-derivative-implies-constant.md (direct)
PASS items/cor-zero-total-derivative-on-a-convex-open-set-is-constant.md (direct)
PASS items/ex-a-bilinear-form-neither-symmetric-nor-alternating.md (direct)
PASS items/ex-a-cartesian-product-computed-inside-the-double-power-set.md (direct)
PASS items/ex-a-ceiling-bound-from-the-strong-pigeonhole.md (direct)
PASS items/ex-a-cylinder-deformation-retracts-onto-an-end.md (direct)
PASS items/ex-a-finite-hausdorff-space-is-discrete.md (direct)
PASS items/ex-a-five-conjugacy-classes-and-split-five-cycles.md (counting)
PASS items/ex-a-forbidden-pattern-and-its-complement-share-eh-status.md (direct)
PASS items/ex-a-four-has-no-subgroup-of-order-six.md (contradiction)
PASS items/ex-a-four-petal-sunflower-with-nonempty-core.md (direct)
PASS items/ex-a-generator-of-f-eight-multiplicative-group.md (direct)
PASS items/ex-a-matrix-over-f-two-with-no-eigenvalues.md (direct)
PASS items/ex-a-nonempty-product-built-without-choice.md (direct)
PASS items/ex-a-partition-and-the-equivalence-relation-it-induces-computed.md (direct)
PASS items/ex-a-point-and-r-are-homotopy-equivalent-not-homeomorphic.md (direct)
PASS items/ex-a-rational-function-is-real-analytic-via-a-geometric-series.md (direct)
PASS items/ex-a-relation-on-a-three-element-set-with-its-domain-range-inverse-and-composites.md (direct)
PASS items/ex-a-singular-cardinal-of-uncountable-cofinality.md (direct)
PASS items/ex-a-three-set-and-a-four-set-sieve-computed.md (direct)
PASS items/ex-a-two-point-retract-that-is-not-a-deformation-retract.md (direct)
PASS items/ex-a-uniformly-equicontinuous-family-of-lipschitz-functions.md (direct)
PASS items/ex-a-urysohn-function-on-the-real-line.md (direct)
PASS items/ex-a-vector-line-integral-counts-multiple-traversals.md (direct)
PASS items/ex-abel-dini-pair-for-the-harmonic-series.md (direct)
PASS items/ex-abel-test-applied.md (direct)
PASS items/ex-abel-theorem-on-the-alternating-harmonic-series.md (direct)
PASS items/ex-absolute-value-lipschitz-not-c1.md (direct)
PASS items/ex-absolutely-convergent-rational-integral-on-the-line.md (direct)
PASS items/ex-absolutely-convergent-rearranged-freely.md (direct)
PASS items/ex-action-groupoid-orbits-and-stabilizers.md (direct)
PASS items/ex-additive-and-multiplicative-groups-of-a-field.md (direct)
PASS items/ex-additive-group-uniformity-on-r.md (direct)
PASS items/ex-additivity-on-a-step-function.md (direct)
PASS items/ex-adjoint-of-a-three-by-two-complex-matrix.md (computation)
PASS items/ex-affine-group-modulo-eight-as-a-holomorph.md (direct)
PASS items/ex-affine-group-of-the-real-line.md (direct)
PASS items/ex-aleph-one-is-at-most-the-continuum.md (direct)
PASS items/ex-all-complex-logarithms-of-minus-one.md (direct)
PASS items/ex-all-four-canonical-pair-colouring-types.md (direct)
PASS items/ex-all-values-of-i-to-the-i.md (direct)
PASS items/ex-alternating-harmonic-rearranged-to-three-halves.md (direct)
PASS items/ex-alternating-harmonic-series-sums-to-log-two.md (direct)
PASS items/ex-alternating-harmonic-series.md (direct)
PASS items/ex-amalgamating-c-two-inside-c-four-and-c-six.md (direct)
PASS items/ex-amalgamation-along-a-whole-factor.md (direct)
PASS items/ex-an-aleph-fixed-point.md (direct)
PASS items/ex-an-erdos-ko-rado-star.md (direct)
PASS items/ex-an-increasing-sequence-in-omega-one-has-a-countable-supremum.md (direct)
PASS items/ex-anagrams-by-the-multinomial-coefficient.md (direct)
PASS items/ex-annihilator-of-a-coordinate-plane.md (direct)
PASS items/ex-arbitrarily-long-runs-of-composites.md (direct)
PASS items/ex-arens-space-is-sequential-not-frechet-urysohn.md (constructive)
PASS items/ex-arrow-category-of-set.md (direct)
PASS items/ex-automorphism-group-of-the-cyclic-group-of-order-eight.md (direct)
PASS items/ex-babylonian-sqrt-two.md (direct)
PASS items/ex-baire-reproves-r-uncountable.md (direct)
PASS items/ex-banach-fixed-point-for-square-roots.md (direct)
PASS items/ex-bartle-sherbert-bounds-for-pi.md (direct)
PASS items/ex-base-field-is-splitting-field-of-empty-family.md (direct)
PASS items/ex-basis-of-the-eventually-zero-families.md (direct)
PASS items/ex-bayes-theorem-for-two-urns.md (direct)
PASS items/ex-bernstein-polynomials-of-the-square-function.md (calculation)
PASS items/ex-bessel-is-strict-for-a-proper-orthonormal-set.md (computation)
PASS items/ex-beta-kernel-convergence-rational.md (direct)
PASS items/ex-bezout-coefficients-not-unique.md (direct)
PASS items/ex-binary-necklaces-of-length-four.md (direct)
PASS items/ex-boolean-lattice-on-four-elements.md (direct)
PASS items/ex-bounded-discontinuous-derivative-that-is-riemann-integrable.md (direct)
PASS items/ex-bounded-functions-on-n-extend-to-beta-n.md (direct)
PASS items/ex-bounded-functions-with-sup-metric-are-complete.md (direct)
PASS items/ex-bounded-order-graph-classes-are-erdos-hajnal.md (cases)
PASS items/ex-bounded-remetrisation-of-r.md (direct)
PASS items/ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous.md (constructive)
PASS items/ex-c-two-free-product-c-three-is-infinite.md (direct)
PASS items/ex-canonical-choice-on-naturals.md (direct)
PASS items/ex-canonical-double-dual-map-for-polynomial-space-is-not-surjective.md (direct)
PASS items/ex-canonical-map-from-free-product-to-direct-product.md (direct)
PASS items/ex-canonical-split-sequence-of-a-direct-sum.md (direct)
PASS items/ex-cantor-function-as-riemann-stieltjes-integrator.md (computation)
PASS items/ex-cantor-function-bv-not-absolutely-continuous.md (direct)
PASS items/ex-cantor-function-graph-is-rectifiable-without-being-absolutely-continuous.md (construction)
PASS items/ex-cantor-function-maps-a-null-set-onto-the-unit-interval.md (direct)
PASS items/ex-cantor-function-values.md (direct)
PASS items/ex-cantor-normal-form-computed.md (direct)
PASS items/ex-cantor-set-as-a-product.md (direct)
PASS items/ex-cantor-set-in-ternary.md (direct)
PASS items/ex-cantor-set-is-perfect-and-totally-disconnected.md (direct)
PASS items/ex-cantor-slab-has-content-zero.md (constructive)
PASS items/ex-cardinal-absorption-computed.md (direct)
PASS items/ex-carmichael-function-of-five-hundred-sixty-one.md (direct)
PASS items/ex-carmichael-function-of-one-thousand-seven-hundred-twenty-nine.md (direct)
PASS items/ex-cauchy-complete-not-complete-field.md (direct)
PASS items/ex-cauchy-product-of-geometric-series.md (direct)
PASS items/ex-cauchy-sequences-as-a-commutative-ring.md (direct)
PASS items/ex-cavalieri-shear-preserves-jordan-content.md (direct)
PASS items/ex-cayley-hamilton-reduces-powers-of-a-two-by-two-matrix.md (induction)
PASS items/ex-center-and-commutator-subgroup-of-an-abelian-group.md (direct)
PASS items/ex-cesaro-means-of-alternating.md (direct)
PASS items/ex-chain-rule-computed.md (direct)
PASS items/ex-change-of-basepoint-isomorphism-for-fundamental-groups.md (direct)
PASS items/ex-characteristic-polynomial-and-eigenspaces-of-a-two-by-two-matrix.md (direct)
PASS items/ex-chebyshev-inequality-is-sharp.md (direct)
PASS items/ex-chinese-remainder-map-modulo-twelve.md (direct)
PASS items/ex-chinese-remainder-system-worked.md (constructive)
PASS items/ex-chromatic-number-of-a-complete-graph.md (direct)
PASS items/ex-circle-as-r-mod-z.md (direct)
PASS items/ex-class-equation-of-s-three.md (direct)
PASS items/ex-class-equation-of-the-dihedral-group-of-order-eight.md (direct)
PASS items/ex-closed-cube-is-totally-bounded.md (direct)
PASS items/ex-closed-interval-is-perfect.md (direct)
PASS items/ex-closed-subsets-of-the-line-as-zero-sets-and-g-delta-sets.md (direct)
PASS items/ex-closed-unit-interval-has-one-compatible-uniformity.md (direct)
PASS items/ex-closure-interior-boundary-of-q.md (direct)
PASS items/ex-cluster-graphs-are-p-three-free.md (direct)
PASS items/ex-cocountable-closure-detected-by-a-net-not-a-sequence.md (constructive)
PASS items/ex-cocountable-topology-on-r.md (direct)
PASS items/ex-cofinite-topology.md (direct)
PASS items/ex-colimit-of-an-increasing-chain-of-sets.md (well-defined-map)
PASS items/ex-columnwise-additivity-versus-whole-matrix-nonadditivity.md (direct)
PASS items/ex-compactness-in-the-standard-topologies.md (direct)
PASS items/ex-complementary-forbidden-bases.md (direct)
PASS items/ex-complements-of-a-maximal-cyclic-subgroup-need-not-be-unique.md (direct)
PASS items/ex-complete-and-complete-bipartite-graphs-k5-and-k33.md (direct)
PASS items/ex-complete-and-empty-hereditary-classes-have-constant-one.md (direct)
PASS items/ex-complete-and-empty-pairs-are-zero-regular.md (direct)
PASS items/ex-complete-graphs-as-a-hereditary-class.md (direct)
PASS items/ex-complete-homogeneous-symmetric-polynomials-in-two-variables.md (direct)
PASS items/ex-completion-of-q-is-r.md (direct)
PASS items/ex-complex-differentiable-on-the-coordinate-axes-but-holomorphic-nowhere.md (direct)
PASS items/ex-complex-exponential-cauchy-riemann-in-cartesian-and-polar-form.md (direct)
PASS items/ex-complex-geometric-power-series.md (direct)
PASS items/ex-complex-sine-is-unbounded-on-the-imaginary-axis.md (direct)
PASS items/ex-complex-tensor-square-over-the-reals.md (direct)
PASS items/ex-components-distance-and-girth-in-a-disconnected-graph.md (direct)
PASS items/ex-componentwise-convergence-and-a-vector-valued-integral-computed.md (direct)
PASS items/ex-composition-and-derived-series-of-s-four.md (direct)
PASS items/ex-composition-and-derived-series-of-s-three.md (direct)
PASS items/ex-computing-a-minimal-polynomial-from-annihilating-polynomials.md (direct)
PASS items/ex-condensation-applied.md (direct)
PASS items/ex-conditionally-convergent-step-function-integral.md (computation)
PASS items/ex-congruence-diagonalization-and-inertia-of-a-real-quadratic-form.md (direct)
PASS items/ex-conjugate-subgroups-and-normalizers-in-s-three.md (direct)
PASS items/ex-conjugating-permutations-by-relabeling.md (direct)
PASS items/ex-conjugation-in-symmetric-group-three.md (direct)
PASS items/ex-connectedness-of-the-standard-topologies.md (direct)
PASS items/ex-constructing-a-potential-on-an-open-rectangle.md (direct)
PASS items/ex-continuous-functions-on-the-unit-interval-with-the-sup-metric.md (direct)
PASS items/ex-continuous-inverse-gives-the-nth-root.md (direct)
PASS items/ex-contractive-sequence-fixed-point.md (direct)
PASS items/ex-convergent-positive-continuous-unbounded-integrand.md (construction)
PASS items/ex-convergent-sequence-with-its-limit-is-compact.md (direct)
PASS items/ex-convex-subsets-of-rn-are-path-connected.md (direct)
PASS items/ex-coordinate-reading-sequence-has-subnets-but-no-convergent-subsequence.md (contradiction)
PASS items/ex-coordinates-depend-on-the-ordered-basis.md (direct)
PASS items/ex-cosets-of-nz-in-z.md (direct)
PASS items/ex-counting-committees.md (direct)
PASS items/ex-counting-functions-and-subsets-of-the-continuum.md (direct)
PASS items/ex-cramers-rule-two-by-two-system.md (direct)
PASS items/ex-cyclic-amalgamation-with-relation-xm-equals-yn.md (direct)
PASS items/ex-cylinder-and-mobius-band-as-quotients.md (direct)
PASS items/ex-cylindrical-coordinate-jacobian.md (computation)
PASS items/ex-decimal-expansion-nonuniqueness.md (direct)
PASS items/ex-degree-of-q-cube-root-two.md (direct)
PASS items/ex-degree-of-q-sqrt-two.md (direct)
PASS items/ex-deletion-contraction-and-a-minor-model.md (direct)
PASS items/ex-dense-jump-integrand-with-dense-nondifferentiability.md (specialization)
PASS items/ex-depressed-cubic-discriminant.md (direct)
PASS items/ex-derivative-of-the-nth-root-by-the-inverse-rule.md (direct)
PASS items/ex-derivatives-of-polynomials-computed.md (direct)
PASS items/ex-determinant-in-two-ordered-bases.md (direct)
PASS items/ex-determinant-is-a-natural-transformation.md (direct)
PASS items/ex-diagonal-ramsey-lower-bound-by-the-union-bound.md (constructive)
PASS items/ex-differentiable-function-with-discontinuous-derivative.md (direct)
PASS items/ex-dihedral-group-of-order-six-is-s-three.md (direct)
PASS items/ex-dini-on-the-unit-interval.md (direct)
PASS items/ex-directed-three-cycle-tournament.md (direct)
PASS items/ex-dirichlet-test-with-period-three-signs.md (direct)
PASS items/ex-discrete-and-indiscrete-topologies.md (direct)
PASS items/ex-discrete-metric-compact-iff-finite.md (direct)
PASS items/ex-discrete-metric.md (direct)
PASS items/ex-distance-functions-form-a-compact-family-in-c01.md (sequential)
PASS items/ex-distance-to-a-set-is-attained-on-a-compact-set.md (direct)
PASS items/ex-distance-to-the-integers-is-1-lipschitz.md (direct)
PASS items/ex-distance-to-the-integers.md (direct)
PASS items/ex-divisor-lattice-of-sixty.md (direct)
PASS items/ex-double-array-with-unequal-iterated-sums.md (direct)
PASS items/ex-doubling-integers-has-nonunit-determinant.md (direct)
PASS items/ex-dual-basis-and-transpose-on-f-three.md (direct)
PASS items/ex-edgeless-graphs-as-a-hereditary-class.md (direct)
PASS items/ex-eisenstein-proves-a-family-irreducible.md (direct)
PASS items/ex-elementary-factorisation-of-an-invertible-matrix.md (direct)
PASS items/ex-elements-of-the-alternating-group-a-four.md (direct)
PASS items/ex-empty-diagrams-select-terminal-and-initial-objects.md (direct)
PASS items/ex-energy-of-trivial-and-discrete-partitions.md (direct)
PASS items/ex-equalizer-of-group-homomorphisms.md (subgroup-and-factorization)
PASS items/ex-equalizers-and-coequalizers-in-set.md (construction)
PASS items/ex-euclidean-algorithm-on-consecutive-fibonacci-numbers.md (induction)
PASS items/ex-euclidean-algorithm-worked.md (direct)
PASS items/ex-euler-formula-on-a-tree-cycle-and-k-four.md (direct)
PASS items/ex-euler-totient-product-formula-worked.md (direct)
PASS items/ex-every-closed-subset-of-the-line-is-a-zero-set.md (direct)
PASS items/ex-every-divisor-is-a-subgroup-order-in-a-cyclic-group.md (direct)
PASS items/ex-exact-trigonometric-values-at-eighteen-thirty-six-and-seventy-two-degrees.md (direct)
PASS items/ex-exponential-product-limit-at-negative-input.md (direct)
PASS items/ex-extension-of-scalars-of-coordinate-modules.md (direct)
PASS items/ex-f-eight-as-a-polynomial-quotient.md (direct)
PASS items/ex-f-four-as-a-polynomial-quotient.md (direct)
PASS items/ex-f-n-and-its-coordinate-subspaces.md (direct)
PASS items/ex-f-nine-as-a-polynomial-quotient.md (direct)
PASS items/ex-fat-cantor-measure-computed.md (direct)
PASS items/ex-field-ordered-in-two-ways.md (direct)
PASS items/ex-fifth-roots-of-unity.md (direct)
PASS items/ex-finite-choice-by-induction.md (direct)
PASS items/ex-finite-set-system-sdr.md (constructive)
PASS items/ex-finite-step-integrator-weighted-jump-sum.md (computation)
PASS items/ex-finite-subset-net-for-unordered-real-summation.md (constructive)
PASS items/ex-first-chebyshev-polynomials.md (direct)
PASS items/ex-five-colouring-by-a-kempe-swap.md (constructive)
PASS items/ex-five-cycle-k-two-two-free.md (direct)
PASS items/ex-fixed-point-congruence-for-an-action-of-z-two.md (direct)
PASS items/ex-fixed-point-from-the-ivt.md (direct)
PASS items/ex-flat-exponential-function.md (induction)
PASS items/ex-formal-derivative-detects-a-repeated-root-in-characteristic-two.md (direct)
PASS items/ex-formal-geometric-series.md (direct)
PASS items/ex-formal-series-over-zmod-four.md (direct)
PASS items/ex-formal-square-root-one-minus-four-x.md (direct)
PASS items/ex-forward-shift-injective-not-surjective.md (direct)
PASS items/ex-four-by-four-determinant-by-cofactors-and-row-reduction.md (direct)
PASS items/ex-fraction-field-of-the-integers-is-the-rationals.md (direct)
PASS items/ex-frechet-filter.md (direct)
PASS items/ex-free-group-and-free-module-functors.md (direct)
PASS items/ex-free-group-on-one-generator.md (constructive)
PASS items/ex-free-group-on-the-empty-set.md (direct)
PASS items/ex-free-group-on-two-generators-is-not-abelian.md (direct)
PASS items/ex-free-group-universal-property-as-a-representation.md (direct)
PASS items/ex-free-monoid-universal-property-as-a-representation.md (constructive)
PASS items/ex-free-ultrafilter-converging-in-a-convergent-sequence-space.md (direct)
PASS items/ex-free-ultrafilter-on-naturals.md (constructive)
PASS items/ex-frobenius-inner-product-on-matrix-space.md (direct)
PASS items/ex-frobenius-on-f-four.md (direct)
PASS items/ex-froda-is-sharp.md (direct)
PASS items/ex-frullani-rational-kernel.md (computation)
PASS items/ex-fubini-computes-the-integral-of-x-exp-xy.md (computation)
PASS items/ex-function-sets-as-exponential-representing-objects.md (constructive)
PASS items/ex-functions-injections-and-subsets-of-a-small-set.md (direct)
PASS items/ex-fundamental-cycle-and-cut.md (direct)
PASS items/ex-fundamental-group-of-the-unit-interval.md (direct)
PASS items/ex-fundamental-groupoid.md (direct)
PASS items/ex-gamma-and-its-complement-computed-for-a-plane-series.md (direct)
PASS items/ex-gauss-reduction-of-a-three-variable-symmetric-polynomial.md (direct)
PASS items/ex-gcd-and-lcm-as-subgroups-of-z.md (direct)
PASS items/ex-gcd-with-zero.md (direct)
PASS items/ex-generalized-dihedral-group-of-the-klein-four-group.md (direct)
PASS items/ex-geometric-function-taylor-remainder.md (direct)
PASS items/ex-geometric-power-series-and-an-interior-reexpansion.md (direct)
PASS items/ex-geometric-series-computed.md (direct)
PASS items/ex-gradient-theorem-for-a-polynomial-potential.md (direct)
PASS items/ex-gram-determinant-of-two-vectors.md (computation)
PASS items/ex-gram-schmidt-in-c-two.md (computation)
PASS items/ex-gram-schmidt-in-r-three.md (computation)
PASS items/ex-gregory-leibniz-partial-sums-with-certified-error.md (direct)
PASS items/ex-group-actions-as-functors.md (direct)
PASS items/ex-hall-condition-fails-three-left-two-neighbours.md (direct)
PASS items/ex-hamel-basis-additive-function.md (constructive)
PASS items/ex-hamel-basis-of-r-over-q.md (direct)
PASS items/ex-harmonic-series-diverges.md (direct)
PASS items/ex-heisenberg-group-is-nilpotent-of-class-two.md (direct)
PASS items/ex-high-girth-high-chromatic-parameter-ledger.md (constructive)
PASS items/ex-hilbert-cube.md (direct)
PASS items/ex-homogeneous-number-of-complete-and-empty-graphs.md (direct)
PASS items/ex-homogeneous-number-of-complete-bipartite-graphs.md (direct)
PASS items/ex-hyperspherical-coordinate-jacobian.md (induction)
PASS items/ex-ideals-as-submodules-of-the-regular-module.md (direct)
PASS items/ex-improper-substitution-reciprocal.md (computation)
PASS items/ex-inconsistent-system-detected-by-a-pivot.md (direct)
PASS items/ex-index-of-the-trivial-subgroups.md (direct)
PASS items/ex-index-table-modulo-seventeen.md (direct)
PASS items/ex-indicator-of-q-is-baire-class-two-not-one.md (contradiction)
PASS items/ex-indicator-of-the-cantor-set-is-integrable-with-integral-zero.md (direct)
PASS items/ex-induced-k-two-copy-count.md (direct)
PASS items/ex-induced-path-counting-from-three-pure-pairs.md (direct)
PASS items/ex-inf-of-reciprocals.md (direct)
PASS items/ex-infinite-convex-or-concave-subsequence-by-ramsey.md (direct)
PASS items/ex-infinite-monotone-subsequence-by-ramsey.md (direct)
PASS items/ex-infinite-solution-affine-parametrisation.md (direct)
PASS items/ex-inner-automorphisms-of-an-abelian-group.md (direct)
PASS items/ex-integer-determinant-two-is-invertible-over-q-not-z.md (direct)
PASS items/ex-integers-are-an-integral-domain-not-a-field.md (direct)
PASS items/ex-integers-as-a-commutative-ring.md (direct)
PASS items/ex-integers-mod-n-additive-group.md (direct)
PASS items/ex-integers-modulo-n-as-a-z-module.md (direct)
PASS items/ex-integers-under-addition.md (direct)
PASS items/ex-integers-with-absolute-value-are-euclidean.md (direct)
PASS items/ex-integral-network-max-flow-min-cut.md (direct)
PASS items/ex-integral-of-the-floor-function.md (direct)
PASS items/ex-integral-of-x-squared-from-the-definition.md (direct)
PASS items/ex-integral-test-applied-to-the-p-series.md (direct)
PASS items/ex-interior-square-root-singularity.md (computation)
PASS items/ex-intervals-and-euclidean-spaces-are-contractible.md (direct)
PASS items/ex-inverse-by-augmented-row-reduction.md (direct)
PASS items/ex-inverting-six-in-the-integers.md (direct)
PASS items/ex-ivt-gives-nth-roots.md (direct)
PASS items/ex-k23-three-disjoint-paths-and-separator.md (direct)
PASS items/ex-k33-is-hamiltonian.md (direct)
PASS items/ex-klein-four-group-as-a-direct-product.md (direct)
PASS items/ex-klein-four-group.md (direct)
PASS items/ex-klein-four-is-normal-in-a-four.md (direct)
PASS items/ex-konigsberg-bridges-has-no-euler-trail.md (direct)
PASS items/ex-kruskal-and-prim-on-a-weighted-graph.md (direct)
PASS items/ex-kuratowski-fourteen-sets.md (direct)
PASS items/ex-kuratowski-ordered-pairs-computed.md (direct)
PASS items/ex-lagrange-in-sym-three.md (direct)
PASS items/ex-lagrange-inversion-catalan-coefficients.md (direct)
PASS items/ex-lagrange-multiplier-on-an-affine-graph.md (calculation)
PASS items/ex-lebesgue-number-of-a-two-set-cover.md (direct)
PASS items/ex-left-regular-action-is-free-and-transitive.md (direct)
PASS items/ex-lhopital-rational-removable-quotient.md (direct)
PASS items/ex-lifting-a-primitive-root-through-powers-of-five.md (direct)
PASS items/ex-limit-at-infinity-of-a-rational-function.md (direct)
PASS items/ex-limit-of-a-polynomial.md (direct)
PASS items/ex-limsup-of-alternating-sequence.md (direct)
PASS items/ex-line-segment-and-polygonal-path-length.md (direct)
PASS items/ex-line-segment-scalar-and-vector-line-integrals.md (direct)
PASS items/ex-linear-congruence-worked.md (direct)
PASS items/ex-linear-diophantine-equation-solvability.md (direct)
PASS items/ex-lipschitz-extension-from-the-rationals.md (direct)
PASS items/ex-loaded-die-and-conditional-probability.md (direct)
PASS items/ex-local-lemma-hypergraph-parameter-check.md (direct)
PASS items/ex-locally-unbounded-finite-everywhere.md (direct)
PASS items/ex-log-two-from-four-characterisations.md (direct)
PASS items/ex-logarithmic-and-exponential-growth-comparisons.md (direct)
PASS items/ex-logarithmic-functions-without-normalisation.md (direct)
PASS items/ex-lower-limit-line-is-regular-and-not-metrizable.md (contradiction)
PASS items/ex-machin-formula.md (direct)
PASS items/ex-mantel-balanced-complete-bipartite.md (direct)
PASS items/ex-markov-inequality-is-sharp.md (direct)
PASS items/ex-matrix-algebra-extension-of-scalars.md (direct)
PASS items/ex-matrix-category-equivalent-to-finite-dimensional-vector-spaces.md (direct)
PASS items/ex-matrix-of-a-map-between-coordinate-spaces.md (direct)
PASS items/ex-mean-value-theorem-bounds-the-square-root-increment.md (direct)
PASS items/ex-minimal-polynomial-of-nested-radical-two-plus-root-three.md (direct)
PASS items/ex-minimal-polynomials-of-scalar-diagonal-and-zero-dimensional-endomorphisms.md (direct)
PASS items/ex-mobius-map-is-conformal-off-its-pole.md (direct)
PASS items/ex-moduli-below-twenty-with-primitive-roots.md (direct)
PASS items/ex-monic-resultant-of-two-quadratics.md (direct)
PASS items/ex-monkey-saddle.md (calculation)
PASS items/ex-monotone-function-discontinuous-exactly-at-the-rationals.md (direct)
PASS items/ex-morries-law.md (direct)
PASS items/ex-near-extremal-triangle-free-graph.md (direct)
PASS items/ex-negative-binomial-series.md (direct)
PASS items/ex-neighbourhood-indexed-net-converging-to-a-closure-point.md (constructive)
PASS items/ex-nested-intervals-single-point.md (direct)
PASS items/ex-newtons-identities-for-three-variables.md (direct)
PASS items/ex-niemytzki-plane-metrization-profile.md (contradiction)
PASS items/ex-nilpotent-shift-and-its-single-primary-component.md (direct)
PASS items/ex-no-rational-square-root-of-three.md (direct)
PASS items/ex-nonabelian-group-of-order-twenty-one.md (direct)
PASS items/ex-nonfaithful-coset-action-of-z-six.md (direct)
PASS items/ex-nonzero-square-zero-matrix-is-not-similar-to-a-diagonal-matrix.md (contradiction)
PASS items/ex-null-sequences-as-a-maximal-ideal.md (direct)
PASS items/ex-nz-maximal-iff-prime.md (direct)
PASS items/ex-odd-cycle-extremal-density.md (direct)
PASS items/ex-omega-plus-omega-is-countable.md (direct)
PASS items/ex-omega-times-two-and-two-times-omega.md (direct)
PASS items/ex-one-equals-exp-two-pi-i-logarithm-paradox.md (direct)
PASS items/ex-one-line-composition-and-disjoint-cycle-decomposition.md (direct)
PASS items/ex-one-operator-in-two-ordered-bases.md (direct)
PASS items/ex-one-over-n-null.md (direct)
PASS items/ex-one-over-square-root-improper-integral.md (computation)
PASS items/ex-one-planar-graph-two-nonisomorphic-duals.md (constructive)
PASS items/ex-one-plus-omega-and-omega-plus-one.md (direct)
PASS items/ex-one-plus-one.md (direct)
PASS items/ex-one-point-compactifications-of-the-line-and-of-the-naturals.md (direct)
PASS items/ex-one-sided-limits-of-the-sign-function.md (direct)
PASS items/ex-open-and-closed-set-functors-and-complement-naturality.md (direct)
PASS items/ex-open-set-decomposed-into-components.md (direct)
PASS items/ex-opposite-group-is-naturally-isomorphic-to-the-identity-functor.md (direct)
PASS items/ex-order-topology.md (direct)
PASS items/ex-ordinal-subtraction-and-division-computed.md (direct)
PASS items/ex-ore-condition-without-dirac-condition.md (direct)
PASS items/ex-orthogonal-projection-onto-a-plane-and-nearest-point.md (computation)
PASS items/ex-p-adic-ultrametric.md (direct)
PASS items/ex-p-four-is-connected-and-anticonnected.md (direct)
PASS items/ex-p-metrics-on-rn.md (direct)
PASS items/ex-p-norm-comparison-constants-on-r2.md (direct)
PASS items/ex-pairwise-independent-events-not-mutually-independent.md (direct)
PASS items/ex-parabola-graph-has-content-zero.md (direct)
PASS items/ex-parallelepiped-content-from-a-matrix.md (computation)
PASS items/ex-parameter-dependent-rank-drop.md (cases)
PASS items/ex-pascals-triangle-to-row-six.md (direct)
PASS items/ex-path-homotopy-through-straight-segments-in-a-convex-set.md (direct)
PASS items/ex-petersen-extremal-density.md (direct)
PASS items/ex-petersen-graph-basic-invariants.md (direct)
PASS items/ex-petersen-graph-nonplanar-by-kuratowski.md (constructive)
PASS items/ex-piecewise-polynomial-periodic-oscillator.md (direct)
PASS items/ex-pointed-sets-equivalent-to-sets-and-partial-functions.md (direct)
PASS items/ex-pointwise-but-not-uniform-convergence-on-a-countable-domain.md (direct)
PASS items/ex-poker-hands-from-a-deck.md (direct)
PASS items/ex-polar-change-of-variables-on-an-annular-sector.md (computation)
PASS items/ex-polynomial-arithmetic-by-convolution.md (direct)
PASS items/ex-polynomial-extension-of-scalars.md (direct)
PASS items/ex-polynomial-injection-killed-by-tensoring.md (direct)
PASS items/ex-polynomial-integrals-by-the-ftc.md (direct)
PASS items/ex-polynomial-long-division-and-gcd.md (direct)
PASS items/ex-polynomial-map-total-derivative-and-jacobian.md (direct)
PASS items/ex-polynomial-projections-for-three-eigenvalues.md (direct)
PASS items/ex-polynomial-ring-represents-the-underlying-set-functor-on-rings.md (constructive)
PASS items/ex-positive-derivative-at-zero-with-no-local-monotonicity.md (contradiction)
PASS items/ex-post-office-metric.md (direct)
PASS items/ex-powers-of-omega-and-epsilon-zero.md (direct)
PASS items/ex-powerset-is-chain-complete.md (direct)
PASS items/ex-presentation-of-a-dihedral-group.md (constructive)
PASS items/ex-presentation-of-a-finite-cyclic-group.md (constructive)
PASS items/ex-presentation-of-the-klein-four-group.md (constructive)
PASS items/ex-presentation-of-the-symmetric-group-on-three-letters.md (constructive)
PASS items/ex-presentation-of-z-squared.md (constructive)
PASS items/ex-primary-decomposition-over-q-with-an-irreducible-quadratic.md (direct)
PASS items/ex-prime-factorisation-worked.md (direct)
PASS items/ex-primitive-root-modulo-thirteen-by-prime-divisor-tests.md (direct)
PASS items/ex-primitive-roots-modulo-seventeen.md (direct)
PASS items/ex-principal-filter-generated-by-a-set.md (direct)
PASS items/ex-principal-ultrafilter.md (direct)
PASS items/ex-principal-value-of-one-over-x.md (computation)
PASS items/ex-product-of-one-minus-one-over-k-is-zero.md (direct)
PASS items/ex-product-ring-coordinate-ideal-and-quotient.md (direct)
PASS items/ex-product-ring-has-zero-divisors.md (direct)
PASS items/ex-product-with-a-fixed-space-is-a-functor.md (direct)
PASS items/ex-products-and-coproducts-in-set.md (universal-property)
PASS items/ex-products-in-a-poset-are-infima.md (translation)
PASS items/ex-projective-nonfree-module-z-two-over-z-six.md (direct)
PASS items/ex-prufer-code-and-decoding.md (direct)
PASS items/ex-pullback-in-top.md (universal-property)
PASS items/ex-pullbacks-and-pushouts-in-set.md (construction)
PASS items/ex-pure-and-mixed-pairs-in-p-four.md (direct)
PASS items/ex-q-covered-by-intervals-of-small-total-length.md (direct)
PASS items/ex-q-sqrt-two-sqrt-three-and-a-primitive-generator.md (direct)
PASS items/ex-qr-factorisation-of-an-invertible-real-matrix.md (computation)
PASS items/ex-quadratic-discriminant-and-double-root.md (direct)
PASS items/ex-quarter-turn-matrix-on-the-real-plane.md (direct)
PASS items/ex-quivers-as-a-functor-category.md (direct)
PASS items/ex-r-and-open-interval-homeomorphic-not-uniformly-isomorphic.md (direct)
PASS items/ex-r-as-a-vector-space-over-q.md (direct)
PASS items/ex-r-three-three-both-bounds.md (direct)
PASS items/ex-raabe-decides-where-ratio-fails.md (direct)
PASS items/ex-radial-deformation-retraction-of-punctured-rn.md (direct)
PASS items/ex-ratio-fails-root-succeeds.md (direct)
PASS items/ex-rational-function-field-order.md (direct)
PASS items/ex-rational-p-integrals-at-both-endpoints.md (direct)
PASS items/ex-rational-square-root-two-as-a-simple-extension.md (direct)
PASS items/ex-rationals-and-reals-as-fields.md (direct)
PASS items/ex-rationals-tensor-a-finite-cyclic-group-is-zero.md (direct)
PASS items/ex-real-quarter-turn-has-no-real-eigenvalues.md (direct)
PASS items/ex-real-rotation-changes-diagonalisability-after-complex-scalar-extension.md (direct)
PASS items/ex-reals-as-a-quotient-by-a-maximal-ideal.md (direct)
PASS items/ex-reciprocal-function-from-the-complex-difference-quotient.md (direct)
PASS items/ex-reciprocals-with-zero-are-compact.md (direct)
PASS items/ex-recovering-the-coordinates-of-an-ordered-pair.md (direct)
PASS items/ex-rectangular-products-have-equal-traces.md (direct)
PASS items/ex-recursive-sqrt-two-plus-x.md (direct)
PASS items/ex-reducing-a-word-with-formal-inverses.md (direct)
PASS items/ex-reduction-mod-two-proves-a-cubic-irreducible.md (direct)
PASS items/ex-reduction-modulo-n-first-isomorphism.md (direct)
PASS items/ex-refinement-improves-the-darboux-sums.md (direct)
PASS items/ex-relative-algebraic-closure-of-r-in-c.md (direct)
PASS items/ex-repeated-eigenvalue-with-full-eigenspace.md (direct)
PASS items/ex-repeated-eigenvalue-with-one-dimensional-eigenspace.md (direct)
PASS items/ex-repeated-root-polynomial-over-f-two.md (direct)
PASS items/ex-representable-presheaf-on-a-poset.md (direct)
PASS items/ex-reversion-of-x-over-one-minus-x.md (direct)
PASS items/ex-riemann-integrable-function-with-a-nonintegrable-section.md (direct)
PASS items/ex-riemann-integrable-function-with-dense-nonintegrable-sections.md (direct)
PASS items/ex-riemann-integrable-with-a-prescribed-null-f-sigma-discontinuity-set.md (constructive)
PASS items/ex-riemann-rearrangement-to-a-prescribed-sum.md (direct)
PASS items/ex-riemann-stieltjes-polynomial-computation.md (computation)
PASS items/ex-riemann-stieltjes-substitution.md (computation)
PASS items/ex-riesz-representative-of-a-functional-on-c-three.md (computation)
PASS items/ex-rn-as-a-product.md (direct)
PASS items/ex-rotations-of-a-square-on-its-vertices.md (direct)
PASS items/ex-row-echelon-form-is-not-unique-but-rref-is.md (direct)
PASS items/ex-row-operations-on-a-singular-matrix-over-z-mod-six.md (direct)
PASS items/ex-row-reduction-with-a-unique-solution.md (direct)
PASS items/ex-russells-socks.md (direct)
PASS items/ex-s-five-conjugacy-classes-and-class-equation.md (counting)
PASS items/ex-s-four-as-the-holomorph-of-the-klein-four-group.md (direct)
PASS items/ex-s-four-conjugacy-classes-and-class-equation.md (counting)
PASS items/ex-s-three-cycle-inversion-and-sign-table.md (direct)
PASS items/ex-same-characteristic-polynomial-different-minimal-polynomials.md (direct)
PASS items/ex-sampled-polynomial-inner-product-on-degree-at-most-three.md (direct)
PASS items/ex-samuel-compactification-of-a-compact-hausdorff-space.md (direct)
PASS items/ex-samuel-compactification-of-discrete-naturals-is-beta-n.md (direct)
PASS items/ex-samuel-compactification-of-the-open-unit-interval.md (direct)
PASS items/ex-samuel-reflection-of-a-nonempty-indiscrete-uniform-space.md (direct)
PASS items/ex-scalar-line-integral-over-a-unit-semicircle.md (direct)
PASS items/ex-second-moment-bound-for-a-nonempty-random-subset.md (cases)
PASS items/ex-second-order-multivariable-taylor-polynomial-computed.md (calculation)
PASS items/ex-separating-a-point-from-a-finite-set-in-a-hausdorff-space.md (direct)
PASS items/ex-sequence-space-and-eventually-zero-subspace.md (direct)
PASS items/ex-sequential-fan-is-frechet-urysohn-not-first-countable.md (constructive)
PASS items/ex-set-arithmetic-isomorphisms-are-natural.md (direct)
PASS items/ex-set-coproducts-as-representing-objects.md (constructive)
PASS items/ex-set-products-as-representing-objects.md (constructive)
PASS items/ex-sierpinski-and-particular-point-spaces.md (direct)
PASS items/ex-sierpinski-space-is-normal-and-not-completely-regular.md (direct)
PASS items/ex-sierpinski-space-is-t0-normal-and-not-regular.md (direct)
PASS items/ex-sigma-compactness-and-lindelof-in-the-line-and-the-rationals.md (direct)
PASS items/ex-signs-of-five-and-six-cycles.md (direct)
PASS items/ex-simultaneous-diagonalisation-of-two-commuting-matrices.md (direct)
PASS items/ex-singletons-define-a-natural-transformation-to-the-power-set-functor.md (direct)
PASS items/ex-singular-projection-has-zero-determinant.md (direct)
PASS items/ex-slicing-a-regular-pair-with-explicit-parameters.md (direct)
PASS items/ex-smooth-compactly-supported-bump.md (direct)
PASS items/ex-sorgenfrey-line.md (direct)
PASS items/ex-sorgenfrey-plane.md (direct)
PASS items/ex-spanning-trees-of-a-cycle.md (direct)
PASS items/ex-spanning-trees-of-k-four.md (direct)
PASS items/ex-sparse-spikes-ftc-conclusion-at-a-discontinuity.md (direct)
PASS items/ex-spherical-coordinate-jacobian.md (computation)
PASS items/ex-splitting-field-of-two-quadratics.md (direct)
PASS items/ex-splitting-field-of-x-cubed-minus-two.md (direct)
PASS items/ex-splitting-field-of-x-four-plus-two-x-squared-minus-eight.md (direct)
PASS items/ex-splitting-field-of-x-squared-minus-two.md (direct)
PASS items/ex-sqrt-two-exists.md (direct)
PASS items/ex-sqrt2-cut.md (direct)
PASS items/ex-square-function-from-the-complex-difference-quotient.md (direct)
PASS items/ex-square-map-sends-a-grid-to-orthogonal-parabolas.md (cases)
PASS items/ex-square-root-ac-not-lipschitz.md (direct)
PASS items/ex-square-root-is-half-holder.md (direct)
PASS items/ex-square-roots-of-one-modulo-one-hundred-twenty-eight.md (direct)
PASS items/ex-square-roots-of-the-imaginary-unit.md (direct)
PASS items/ex-standard-basis-and-universal-map-from-r-three.md (direct)
PASS items/ex-standard-limits-worked.md (direct)
PASS items/ex-steinitz-confinement-worked-in-the-plane.md (direct)
PASS items/ex-step-integrator-evaluates-at-the-jump.md (direct)
PASS items/ex-stolz-cesaro-applied.md (direct)
PASS items/ex-stone-cech-of-a-finite-discrete-space.md (direct)
PASS items/ex-straight-line-homotopy-between-maps-into-rn.md (direct)
PASS items/ex-strict-ratio-root-chain.md (direct)
PASS items/ex-strict-union-bound-for-overlapping-events.md (direct)
PASS items/ex-subfields-of-f-sixty-four.md (direct)
PASS items/ex-subgroups-of-the-integers.md (direct)
PASS items/ex-subring-that-is-not-a-subfield.md (direct)
PASS items/ex-subsequential-limits-fill-unit-interval.md (constructive)
PASS items/ex-successive-p-layers-read-a-cyclic-decomposition.md (direct)
PASS items/ex-sum-and-intersection-in-f-three.md (direct)
PASS items/ex-sum-of-reciprocal-squares-converges.md (direct)
PASS items/ex-sup-metric-on-bounded-functions.md (direct)
PASS items/ex-sup-of-closed-interval.md (direct)
PASS items/ex-sup-of-open-interval.md (direct)
PASS items/ex-sup-of-sum-of-sets.md (direct)
PASS items/ex-sup-rationals-below-sqrt-two.md (direct)
PASS items/ex-sylvesters-criterion-for-a-three-by-three-matrix.md (direct)
PASS items/ex-symmetric-group-on-three-letters.md (direct)
PASS items/ex-symmetric-group-splits-over-the-alternating-group.md (direct)
PASS items/ex-symmetric-reduction-in-two-variables.md (direct)
PASS items/ex-symmetries-of-a-square.md (direct)
PASS items/ex-symplectic-normal-form-of-a-degenerate-alternating-form.md (direct)
PASS items/ex-telescoping-sum-computed.md (direct)
PASS items/ex-tensor-product-of-two-quotient-modules.md (direct)
PASS items/ex-the-alexander-subbase-lemma-applied-to-a-closed-interval.md (direct)
PASS items/ex-the-beth-hierarchy-computed.md (direct)
PASS items/ex-the-cardinality-of-the-continuum.md (direct)
PASS items/ex-the-cocountable-topology-in-the-separation-hierarchy.md (direct)
PASS items/ex-the-cofinality-of-aleph-omega.md (direct)
PASS items/ex-the-cofinite-topology-in-the-separation-hierarchy.md (direct)
PASS items/ex-the-compact-open-topology-on-the-continuous-functions-of-the-line.md (direct)
PASS items/ex-the-derangements-of-a-four-element-set-listed.md (cases)
PASS items/ex-the-diagonal-in-the-cofinite-and-cocountable-topologies.md (direct)
PASS items/ex-the-diagonal-of-the-real-line-is-closed.md (direct)
PASS items/ex-the-discrete-and-indiscrete-extremes-of-the-hierarchy.md (direct)
PASS items/ex-the-empty-relation-and-the-empty-function.md (direct)
PASS items/ex-the-empty-set-is-the-product-of-the-large-family-of-all-sets.md (universal-property)
PASS items/ex-the-exponential-law-worked-on-the-line.md (direct)
PASS items/ex-the-first-dyadic-levels-of-the-urysohn-construction.md (direct)
PASS items/ex-the-five-abelian-groups-of-order-sixteen.md (direct)
PASS items/ex-the-five-cycle-has-homogeneous-number-two.md (direct)
PASS items/ex-the-four-element-field-from-an-irreducible-quadratic.md (direct)
PASS items/ex-the-graph-of-a-continuous-real-function-is-closed.md (direct)
PASS items/ex-the-handshake-identity-by-double-counting.md (direct)
PASS items/ex-the-hat-check-ratio-as-a-quotient-of-counts.md (direct)
PASS items/ex-the-interval-the-cantor-set-and-the-hilbert-cube-are-compact.md (direct)
PASS items/ex-the-local-ring-of-polynomials-at-x.md (direct)
PASS items/ex-the-local-ring-z-at-p-and-its-residue-field.md (direct)
PASS items/ex-the-long-line-in-the-connectedness-hierarchy.md (direct)
PASS items/ex-the-metric-urysohn-function-costs-no-choice.md (direct)
PASS items/ex-the-moving-spike-family-in-the-three-topologies.md (direct)
PASS items/ex-the-one-point-space-represents-the-underlying-set-functor-on-top.md (constructive)
PASS items/ex-the-onto-functions-from-a-five-set-to-a-three-set-counted-both-ways.md (direct)
PASS items/ex-the-ordinal-spaces-omega-plus-one-and-omega-one.md (direct)
PASS items/ex-the-oscillating-zigzag-curve-computed.md (direct)
PASS items/ex-the-particular-point-topology-in-the-separation-hierarchy.md (direct)
PASS items/ex-the-quotient-of-a-function-by-its-kernel-computed.md (direct)
PASS items/ex-the-rationals-are-totally-disconnected-and-not-discrete.md (direct)
PASS items/ex-the-six-abelian-groups-of-order-three-hundred-sixty.md (direct)
PASS items/ex-the-smallest-sets-and-their-power-sets.md (direct)
PASS items/ex-the-sorgenfrey-line-is-lindelof-and-its-square-is-not.md (direct)
PASS items/ex-the-zero-ring.md (direct)
PASS items/ex-thomae-integral-function-differentiates-through-dense-discontinuities.md (direct)
PASS items/ex-thomae-is-riemann-integrable-with-integral-zero.md (direct)
PASS items/ex-thomae-values-and-oscillation-computed.md (direct)
PASS items/ex-three-by-three-inverse-by-adjugate.md (direct)
PASS items/ex-three-by-three-leibniz-expansion.md (direct)
PASS items/ex-three-cycle-quotient-of-s3.md (direct)
PASS items/ex-three-radius-one-series-with-different-endpoint-behaviour.md (cases)
PASS items/ex-tietze-extension-from-a-closed-interval-of-the-line.md (direct)
PASS items/ex-torus-as-a-quotient-of-the-square.md (direct)
PASS items/ex-transitive-tournament-has-no-directed-cycle.md (direct)
PASS items/ex-translation-makes-x-four-plus-one-eisenstein.md (direct)
PASS items/ex-trees-on-at-most-five-vertices.md (cases)
PASS items/ex-triangle-count-in-the-erdos-renyi-random-graph.md (direct)
PASS items/ex-triangle-counting-in-a-complete-tripartite-graph.md (direct)
PASS items/ex-triangle-has-jordan-content-one-half.md (induction)
PASS items/ex-trigonometric-identities-worked-at-pi-over-twelve.md (direct)
PASS items/ex-trivial-action-of-z-two-is-not-faithful.md (direct)
PASS items/ex-trivial-and-total-quotients.md (direct)
PASS items/ex-trivial-homomorphism-kernel-and-image.md (direct)
PASS items/ex-turan-graph-t-ten-three.md (direct)
PASS items/ex-turan-ramsey-colouring-witness.md (direct)
PASS items/ex-two-automorphisms-of-z-squared.md (direct)
PASS items/ex-two-by-two-determinant-formula.md (direct)
PASS items/ex-two-by-two-matrix-multiplication-is-not-commutative.md (direct)
PASS items/ex-two-colourings-of-a-square-up-to-dihedral-symmetry.md (direct)
PASS items/ex-two-composition-series-of-the-cyclic-group-of-order-twelve.md (direct)
PASS items/ex-two-continuous-real-functions-agreeing-on-the-rationals-are-equal.md (direct)
PASS items/ex-two-elements-with-the-same-number-of-neighbours-in-a-finite-symmetric-relation.md (cases)
PASS items/ex-two-involutions-generate-the-infinite-dihedral-group.md (direct)
PASS items/ex-two-is-the-only-even-prime.md (direct)
PASS items/ex-two-plus-two.md (direct)
PASS items/ex-two-root-x-and-its-unbounded-derivative.md (direct)
PASS items/ex-two-sided-basis-change-for-a-rectangular-linear-map.md (direct)
PASS items/ex-two-singletons-are-canonically-isomorphic-representing-objects.md (constructive)
PASS items/ex-two-spanning-trees-of-one-graph.md (direct)
PASS items/ex-two-subsequential-limits.md (direct)
PASS items/ex-two-to-sqrt-two-by-two-real-power-constructions.md (direct)
PASS items/ex-two-transposition-factorisations-have-the-same-parity.md (direct)
PASS items/ex-two-z-ideal-not-a-unital-subring.md (direct)
PASS items/ex-ultrafilter-selects-a-cell-of-a-finite-partition.md (direct)
PASS items/ex-unbounded-integrand-stieltjes-integrable.md (direct)
PASS items/ex-uncountable-cantor-cube-uniformizable-not-first-countable.md (contradiction)
PASS items/ex-uncountable-discrete-space-meets-bing-not-urysohn.md (direct)
PASS items/ex-underlying-set-and-forgetful-functors.md (direct)
PASS items/ex-unit-box-volume-and-integral.md (direct)
PASS items/ex-unit-circle-arc-has-length-theta.md (computation)
PASS items/ex-unit-circle-implicit-function-theorem.md (direct)
PASS items/ex-unit-circle-pi-calibration-table.md (direct)
PASS items/ex-unit-group-modulo-one-hundred-decomposition.md (direct)
PASS items/ex-unit-group-modulo-two-hundred-forty.md (direct)
PASS items/ex-unit-hyperbolic-area-brackets-e.md (direct)
PASS items/ex-units-and-totient-modulo-twelve.md (direct)
PASS items/ex-units-modulo-eight-are-not-cyclic.md (direct)
PASS items/ex-upper-and-lower-central-series-of-the-dihedral-group-of-order-eight.md (direct)
PASS items/ex-usual-metric-uniformity-on-r.md (direct)
PASS items/ex-v-shaped-path-is-rectifiable-but-not-c1.md (computation)
PASS items/ex-vandermonde-checked-numerically.md (direct)
PASS items/ex-viete-first-nested-radical-approximants.md (direct)
PASS items/ex-w-three-two-equals-nine.md (direct)
PASS items/ex-walk-trail-path-and-cycle-in-one-small-graph.md (direct)
PASS items/ex-wallis-partial-products-and-integral-bounds.md (direct)
PASS items/ex-weak-compositions-worked.md (direct)
PASS items/ex-weighted-inner-product-on-finite-coordinate-space.md (direct)
PASS items/ex-width-three-poset-and-a-minimum-chain-cover.md (direct)
PASS items/ex-x-cubed-is-strictly-increasing-with-a-vanishing-derivative.md (direct)
PASS items/ex-x-sine-of-one-over-x-tends-to-zero.md (direct)
PASS items/ex-x-squared-minus-two-is-irreducible-over-q.md (direct)
PASS items/ex-x-squared-plus-one-is-irreducible-over-r.md (direct)
PASS items/ex-x-squared-sine-of-one-over-x-is-differentiable.md (direct)
PASS items/ex-x-times-dirichlet-has-a-limit-only-at-zero.md (direct)
PASS items/ex-x-times-dirichlet-is-continuous-exactly-at-zero.md (direct)
PASS items/ex-x-times-psi-tends-to-zero.md (direct)
PASS items/ex-x-to-the-beta-separates-the-holder-classes.md (direct)
PASS items/ex-x-to-x-tends-to-one.md (direct)
PASS items/ex-xk-abs-x-smoothness-threshold.md (cases)
PASS items/ex-yoneda-embedding-of-the-walking-arrow-category.md (direct)
PASS items/ex-yoneda-lemma-for-a-monoid-action.md (constructive)
PASS items/ex-young-integral-beyond-bounded-variation.md (construction)
PASS items/ex-z-mod-four-as-a-quotient-group.md (direct)
PASS items/ex-z-six-in-elementary-divisor-and-invariant-factor-forms.md (direct)
PASS items/ex-zero-divisors-modulo-composites.md (direct)
PASS items/ex-zero-second-derivative-extremum-trichotomy.md (direct)
PASS items/ex-zorn-poset-of-chains.md (direct)
PASS items/fs-a-bonferroni-truncation-is-exact.md (constructive)
PASS items/fs-a-compact-subset-is-closed-in-every-space.md (contradiction)
PASS items/fs-a-compatible-uniformity-is-unique.md (direct)
PASS items/fs-a-complex-inner-product-is-symmetric.md (counterexample)
PASS items/fs-a-connected-space-is-locally-connected.md (contradiction)
PASS items/fs-a-connected-space-is-path-connected.md (contradiction)
PASS items/fs-a-continuous-real-function-on-any-subspace-of-a-normal-space-extends.md (contradiction)
PASS items/fs-a-function-with-closed-graph-is-continuous.md (constructive)
PASS items/fs-a-n-is-simple-for-all-n-at-least-four.md (counterexample)
PASS items/fs-a-retract-must-be-a-deformation-retract.md (direct)
PASS items/fs-a-shortest-walk-need-not-be-a-path.md (contradiction)
PASS items/fs-a-split-minimal-polynomial-always-gives-diagonalisability.md (direct)
PASS items/fs-a-square-matrix-over-a-commutative-ring-is-invertible-iff-its-determinant-is-nonzero.md (direct)
PASS items/fs-a-totally-disconnected-space-is-discrete.md (contradiction)
PASS items/fs-a-zero-elementary-tensor-has-a-zero-factor.md (direct)
PASS items/fs-abel-summability-implies-ordinary-convergence.md (direct)
PASS items/fs-additive-implies-linear.md (direct)
PASS items/fs-all-even-degrees-force-one-cycle.md (direct)
PASS items/fs-all-norms-on-any-real-vector-space-are-equivalent.md (direct)
PASS items/fs-an-abelian-group-has-an-abelian-automorphism-group.md (direct)
PASS items/fs-an-extension-of-nilpotent-groups-is-nilpotent.md (direct)
PASS items/fs-an-intersection-of-connected-sets-is-connected.md (contradiction)
PASS items/fs-any-positive-zero-of-sine-characterizes-pi.md (direct)
PASS items/fs-arbitrary-intersection-of-open-is-open.md (direct)
PASS items/fs-arbitrary-intersection-of-opens-is-open-top.md (direct)
PASS items/fs-arbitrary-product-of-open-sets-is-open.md (direct)
PASS items/fs-arbitrary-transposition-and-n-cycle-generate-s-n.md (counterexample)
PASS items/fs-bounded-implies-convergent.md (direct)
PASS items/fs-bounded-implies-riemann-integrable.md (direct)
PASS items/fs-bounded-implies-totally-bounded.md (direct)
PASS items/fs-boundedness-is-a-topological-property.md (direct)
PASS items/fs-canonical-factor-maps-into-every-group-pushout-are-injective.md (direct)
PASS items/fs-cantor-set-countable.md (direct)
PASS items/fs-cardinal-addition-is-cancellative.md (contradiction)
PASS items/fs-cardinal-exponentiation-is-strictly-monotone-in-the-base.md (contradiction)
PASS items/fs-cardinality-of-a-union-adds-without-disjointness.md (direct)
PASS items/fs-cauchy-complete-implies-lub.md (direct)
PASS items/fs-cauchy-implies-convergent-in-every-metric-space.md (direct)
PASS items/fs-cauchy-product-of-convergent-series-converges.md (direct)
PASS items/fs-cauchy-riemann-at-a-point-implies-complex-differentiability.md (direct)
PASS items/fs-cauchy-riemann-on-an-open-set-without-regularity-implies-holomorphy.md (direct)
PASS items/fs-cayley-formula-counts-unlabelled-trees.md (direct)
PASS items/fs-ccc-spaces-are-separable.md (direct)
PASS items/fs-cesaro-converse.md (direct)
PASS items/fs-circumference-to-radius-ratio-is-pi.md (direct)
PASS items/fs-classical-mobius-inversion-is-unrelated-to-inclusion-exclusion.md (direct)
PASS items/fs-closed-and-bounded-implies-compact-in-every-metric-space.md (direct)
PASS items/fs-closed-ball-is-the-closure-of-the-open-ball.md (direct)
PASS items/fs-closed-bounded-compact-without-completeness.md (direct)
PASS items/fs-colimits-in-grp-are-computed-on-underlying-sets.md (empty-diagram)
PASS items/fs-compact-implies-sequentially-compact.md (contradiction)
PASS items/fs-completeness-is-a-topological-property.md (direct)
PASS items/fs-complex-numbers-form-an-ordered-field.md (contradiction)
PASS items/fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension.md (direct)
PASS items/fs-composition-factors-determine-a-finite-group-up-to-isomorphism.md (direct)
PASS items/fs-connected-subsets-of-rn-are-polygonally-connected.md (contradiction)
PASS items/fs-consecutive-differences-null-implies-cauchy.md (direct)
PASS items/fs-continuity-implies-uniform-continuity.md (direct)
PASS items/fs-continuous-bijection-is-a-homeomorphism.md (direct)
PASS items/fs-continuous-image-of-a-closed-set-is-closed.md (direct)
PASS items/fs-convergent-implies-absolutely-convergent.md (direct)
PASS items/fs-convergent-subsequence-implies-bounded.md (direct)
PASS items/fs-countable-union-theorem-of-zf.md (contradiction)
PASS items/fs-countably-compact-implies-compact.md (contradiction)
PASS items/fs-cut-has-greatest.md (direct)
PASS items/fs-degree-sequence-determines-a-simple-graph.md (direct)
PASS items/fs-determinant-is-additive-on-matrices.md (direct)
PASS items/fs-diagonalisability-requires-distinct-characteristic-roots.md (direct)
PASS items/fs-equivalent-metrics-share-cauchy-sequences.md (direct)
PASS items/fs-erdos-ko-rado-without-the-ground-set-bound.md (direct)
PASS items/fs-erdos-stone-simonovits-determines-the-extremal-number-for-every-graph.md (direct)
PASS items/fs-euclids-product-of-primes-plus-one-is-prime.md (direct)
PASS items/fs-every-aleph-is-regular.md (contradiction)
PASS items/fs-every-category-is-locally-small.md (direct)
PASS items/fs-every-closed-c1-field-on-a-connected-open-set-is-exact.md (direct)
PASS items/fs-every-coset-is-a-subgroup.md (direct)
PASS items/fs-every-edge-lies-in-every-spanning-tree.md (direct)
PASS items/fs-every-equivalence-is-an-isomorphism-of-categories.md (direct)
PASS items/fs-every-fermat-number-is-prime.md (direct)
PASS items/fs-every-finite-group-is-a-product-of-cyclic-prime-power-groups.md (direct)
PASS items/fs-every-hausdorff-compactification-is-stone-cech.md (contradiction)
PASS items/fs-every-hausdorff-space-is-regular.md (direct)
PASS items/fs-every-hereditary-class-has-a-finite-forbidden-basis.md (contradiction)
PASS items/fs-every-hereditary-class-is-erdos-hajnal.md (direct)
PASS items/fs-every-idempotent-is-an-orthogonal-projection.md (counterexample)
PASS items/fs-every-injection-of-a-set-into-itself-is-a-bijection.md (direct)
PASS items/fs-every-injective-module-is-projective.md (direct)
PASS items/fs-every-nonzero-element-is-a-unit-or-a-zero-divisor.md (direct)
PASS items/fs-every-normal-space-is-completely-regular.md (constructive)
PASS items/fs-every-normal-space-is-hausdorff.md (direct)
PASS items/fs-every-orthogonal-set-is-an-orthonormal-basis.md (counterexample)
PASS items/fs-every-poset-has-an-incidence-algebra.md (direct)
PASS items/fs-every-projective-module-is-free.md (direct)
PASS items/fs-every-property-defines-a-set.md (contradiction)
PASS items/fs-every-regular-space-is-metrizable.md (contradiction)
PASS items/fs-every-regular-space-is-normal.md (direct)
PASS items/fs-every-set-has-sup.md (direct)
PASS items/fs-every-set-is-open-or-closed.md (direct)
PASS items/fs-every-set-well-orderable-in-zf.md (contradiction)
PASS items/fs-every-short-exact-sequence-of-groups-splits.md (contradiction)
PASS items/fs-every-short-exact-sequence-splits.md (direct)
PASS items/fs-every-solvable-group-is-abelian.md (direct)
PASS items/fs-every-subnet-of-a-sequence-is-a-subsequence.md (direct)
PASS items/fs-every-subnormal-series-is-a-normal-series.md (direct)
PASS items/fs-every-surjection-has-a-right-inverse-in-zf.md (contradiction)
PASS items/fs-every-t1-space-is-hausdorff.md (direct)
PASS items/fs-every-tensor-is-an-elementary-tensor.md (direct)
PASS items/fs-every-topology-is-metrizable.md (direct)
PASS items/fs-every-triangle-free-graph-is-bipartite.md (direct)
PASS items/fs-every-ultrafilter-principal.md (direct)
PASS items/fs-evt-holds-on-every-bounded-domain.md (direct)
PASS items/fs-extension-degrees-add-in-a-tower.md (direct)
PASS items/fs-f-p-n-is-z-mod-p-n.md (direct)
PASS items/fs-first-countable-spaces-are-second-countable.md (direct)
PASS items/fs-free-product-of-abelian-groups-is-abelian.md (direct)
PASS items/fs-function-limit-preserves-strict-inequality.md (direct)
PASS items/fs-gcd-times-lcm-equals-the-product.md (direct)
PASS items/fs-grouping-can-be-undone.md (direct)
PASS items/fs-heine-borel-holds-in-every-normed-space.md (direct)
PASS items/fs-hereditary-classes-are-closed-under-all-subgraphs.md (direct)
PASS items/fs-homotopy-equivalent-spaces-are-homeomorphic.md (direct)
PASS items/fs-inclusion-and-exclusion-for-three-sets-without-the-triple-term.md (constructive)
PASS items/fs-induction-without-base.md (direct)
PASS items/fs-infinite-has-countable-subset-in-zf.md (contradiction)
PASS items/fs-infinite-product-converges-iff-terms-tend-to-one.md (direct)
PASS items/fs-integrability-is-equivalent-to-a-nowhere-dense-discontinuity-set.md (direct)
PASS items/fs-integration-by-parts-needs-no-integrability-hypothesis.md (direct)
PASS items/fs-intermediate-value-property-implies-continuity.md (direct)
PASS items/fs-isomorphism-between-splitting-fields-is-unique.md (counterexample)
PASS items/fs-iterated-double-sums-always-agree.md (direct)
PASS items/fs-kernel-and-quotient-determine-a-group-extension.md (direct)
PASS items/fs-limit-equals-value.md (direct)
PASS items/fs-limit-exists-implies-bounded-on-the-domain.md (direct)
PASS items/fs-limit-preserves-strict-inequality.md (direct)
PASS items/fs-limit-unique-at-every-point-of-the-domain.md (direct)
PASS items/fs-limsup-additive.md (direct)
PASS items/fs-lindelofness-is-hereditary.md (direct)
PASS items/fs-lindelofness-is-productive.md (direct)
PASS items/fs-linearity-of-expectation-requires-independence.md (direct)
PASS items/fs-local-compactness-is-hereditary.md (contradiction)
PASS items/fs-matrix-polynomial-substitution-is-a-ring-homomorphism.md (direct)
PASS items/fs-maximal-antichain-need-not-be-maximum.md (direct)
PASS items/fs-maximal-is-greatest.md (direct)
PASS items/fs-mean-value-theorem-needs-no-continuity-at-the-endpoints.md (direct)
PASS items/fs-measure-zero-implies-nowhere-dense.md (direct)
PASS items/fs-mobius-depends-only-on-interval-cardinality.md (direct)
PASS items/fs-monic-and-epic-implies-isomorphism.md (direct)
PASS items/fs-n-squared-plus-n-plus-forty-one-is-always-prime.md (direct)
PASS items/fs-naive-composition-of-limits.md (direct)
PASS items/fs-negative-has-square-root.md (contradiction)
PASS items/fs-nested-intervals-implies-lub.md (direct)
PASS items/fs-nested-open-intervals-nonempty.md (direct)
PASS items/fs-nonisomorphic-objects-can-have-isomorphic-representable-presheaves.md (contradiction)
PASS items/fs-nonnegative-integrable-with-zero-integral-vanishes.md (direct)
PASS items/fs-normal-in-characteristic-implies-normal-in-the-whole-group.md (direct)
PASS items/fs-not-every-category-has-all-small-limits.md (counterexample)
PASS items/fs-nowhere-dense-implies-measure-zero.md (direct)
PASS items/fs-nth-term-test-converse.md (direct)
PASS items/fs-null-implies-content-zero.md (direct)
PASS items/fs-one-component-determines-a-natural-transformation.md (direct)
PASS items/fs-ordinal-addition-is-commutative.md (direct)
PASS items/fs-ordinal-addition-is-strictly-monotone-in-the-left-argument.md (direct)
PASS items/fs-ordinal-multiplication-is-commutative.md (direct)
PASS items/fs-ordinal-multiplication-is-right-distributive.md (direct)
PASS items/fs-ordinals-form-a-set.md (contradiction)
PASS items/fs-paracompact-spaces-are-normal.md (direct)
PASS items/fs-paracompactness-is-hereditary.md (direct)
PASS items/fs-paracompactness-is-productive.md (direct)
PASS items/fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets.md (direct)
PASS items/fs-pointwise-limit-of-riemann-integrable-is-integrable.md (direct)
PASS items/fs-power-series-convergence-at-one-point-forces-global-convergence.md (direct)
PASS items/fs-power-series-uniform-on-its-open-interval.md (direct)
PASS items/fs-preserving-binary-products-and-equalizers-does-not-imply-continuity.md (constant-empty-functor)
PASS items/fs-product-topology-equals-box-topology.md (direct)
PASS items/fs-projections-are-closed-maps.md (direct)
PASS items/fs-q-is-g-delta.md (direct)
PASS items/fs-quotient-map-is-open.md (direct)
PASS items/fs-quotient-of-a-hausdorff-space-is-hausdorff.md (direct)
PASS items/fs-ratio-and-root-limits-always-agree.md (direct)
PASS items/fs-ratio-limsup-at-least-one-diverges.md (direct)
PASS items/fs-rational-power-of-negative-base.md (contradiction)
PASS items/fs-rationals-complete.md (direct)
PASS items/fs-real-differentiability-implies-complex-differentiability.md (direct)
PASS items/fs-rearrangement-preserves-the-sum.md (direct)
PASS items/fs-same-cycle-type-implies-conjugate-in-a-n.md (counterexample)
PASS items/fs-second-countability-is-arbitrarily-productive.md (direct)
PASS items/fs-separability-is-hereditary.md (direct)
PASS items/fs-separable-spaces-are-second-countable.md (direct)
PASS items/fs-sequentially-compact-implies-compact.md (contradiction)
PASS items/fs-sequentially-continuous-implies-continuous.md (direct)
PASS items/fs-set-difference-is-associative.md (direct)
PASS items/fs-sin-x-over-x-by-sector-areas.md (direct)
PASS items/fs-sqrt2-rational.md (contradiction)
PASS items/fs-stars-and-bars-holds-for-every-number-of-parts.md (direct)
PASS items/fs-strict-contraction-has-a-fixed-point.md (direct)
PASS items/fs-subsequence-convergence-implies-convergence.md (direct)
PASS items/fs-substitution-holds-for-every-integrable-integrand.md (direct)
PASS items/fs-sup-belongs-to-set.md (direct)
PASS items/fs-symmetry-and-transitivity-imply-reflexivity.md (direct)
PASS items/fs-tensor-products-of-nonzero-cyclic-groups-are-always-nonzero.md (direct)
PASS items/fs-tensoring-preserves-injections.md (direct)
PASS items/fs-the-adjoint-depends-linearly-on-complex-scalars.md (counterexample)
PASS items/fs-the-alternating-row-sum-vanishes-for-every-n.md (direct)
PASS items/fs-the-characteristic-polynomial-determines-diagonalisability.md (direct)
PASS items/fs-the-closure-of-a-path-connected-set-is-path-connected.md (contradiction)
PASS items/fs-the-compact-open-topology-is-always-metrizable.md (direct)
PASS items/fs-the-continuum-has-cardinality-aleph-omega.md (contradiction)
PASS items/fs-the-erdos-szekeres-bound-can-be-lowered.md (constructive)
PASS items/fs-the-evaluation-map-is-always-continuous.md (contradiction)
PASS items/fs-the-integral-function-is-always-a-primitive.md (direct)
PASS items/fs-the-intersection-of-the-empty-family-is-the-empty-set.md (contradiction)
PASS items/fs-the-ordinal-two-to-the-omega-is-uncountable.md (direct)
PASS items/fs-the-product-rule-makes-a-product-larger.md (direct)
PASS items/fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space.md (direct)
PASS items/fs-the-underlying-set-functor-on-top-does-not-preserve-limits.md (theorem-refutation)
PASS items/fs-totally-bounded-implies-compact.md (direct)
PASS items/fs-transfinite-induction-needs-choice.md (direct)
PASS items/fs-two-colouring-forces-an-infinite-monochromatic-progression.md (constructive)
PASS items/fs-two-continuous-maps-agreeing-on-a-dense-subset-are-equal.md (constructive)
PASS items/fs-two-nonisomorphic-complete-ordered-fields.md (direct)
PASS items/fs-uncountable-contains-interval.md (constructive)
PASS items/fs-union-of-two-independent-sets-is-independent.md (direct)
PASS items/fs-union-of-two-subgroups-is-a-subgroup.md (direct)
PASS items/fs-union-of-two-subspaces-is-a-subspace.md (direct)
PASS items/fs-unique-sequential-limits-imply-hausdorff.md (direct)
PASS items/fs-universal-comparison-series.md (direct)
PASS items/fs-vanishing-derivative-forbids-strict-increase.md (direct)
PASS items/fs-vector-line-integrals-are-invariant-under-reversal.md (direct)
PASS items/fs-vertex-and-edge-connectivity-always-agree.md (direct)
PASS items/fs-yoneda-lemma-requires-a-small-category.md (direct)
PASS items/fs-zero-complex-derivative-on-an-open-set-implies-constant.md (direct)
PASS items/fs-zero-product-property-modulo-n.md (direct)
PASS items/fs-zero-second-derivative-decides-extremum.md (direct)
PASS items/fs-zorn-provable-in-zf.md (contradiction)
PASS items/lem-a-double-sum-over-finite-index-sets-may-be-interchanged.md (direct)
PASS items/lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function.md (direct)
PASS items/lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure.md (direct)
PASS items/lem-a-relation-is-included-in-the-product-of-its-domain-and-range.md (direct)
PASS items/lem-a-sequence-in-a-hausdorff-space-has-at-most-one-limit.md (contradiction)
PASS items/lem-a-transposition-reverses-inversion-sign.md (direct)
PASS items/lem-a-two-element-indexed-product-is-in-bijection-with-a-cartesian-product.md (direct)
PASS items/lem-a-uniformly-approximable-real-valued-map-is-continuous.md (constructive)
PASS items/lem-abel-summation-by-parts.md (induction)
PASS items/lem-abel-transform-of-cesaro-means.md (direct)
PASS items/lem-absolute-convergence-implies-convergence.md (direct)
PASS items/lem-actions-related-by-automorphisms-give-isomorphic-semidirect-products.md (direct)
PASS items/lem-additive-bounded-above-on-an-interval-is-linear.md (direct)
PASS items/lem-additive-is-q-linear.md (induction)
PASS items/lem-adjoining-a-vector-outside-the-span.md (direct)
PASS items/lem-adjoining-one-root-reduces-the-unsplit-degree.md (constructive)
PASS items/lem-admissible-is-chain.md (direct)
PASS items/lem-admissible-set-exists.md (direct)
PASS items/lem-alexandroff-urysohn-metrization-lemma.md (constructive)
PASS items/lem-algebra-of-continuous-real-maps-on-a-space.md (direct)
PASS items/lem-all-extremal.md (direct)
PASS items/lem-alternating-kempe-paths-cannot-both-occur.md (contradiction)
PASS items/lem-alternating-multilinear-implies-antisymmetric.md (direct)
PASS items/lem-alternating-sequence.md (induction)
PASS items/lem-alternating-top-forms-are-determined-by-one-ordered-basis.md (direct)
PASS items/lem-an-isomorphism-extends-across-a-simple-root-adjunction.md (constructive)
PASS items/lem-an-odd-closed-walk-contains-an-odd-cycle.md (induction)
PASS items/lem-anticonnected-components-are-complement-components.md (direct)
PASS items/lem-arbitrarily-large-primes-congruent-to-two-modulo-three.md (constructive)
PASS items/lem-arc-length-function-is-continuous-and-nondecreasing.md (comparison)
PASS items/lem-associates-characterisation.md (direct)
PASS items/lem-augmenting-path-switching.md (constructive)
PASS items/lem-baire-category-in-a-closed-interval.md (contradiction)
PASS items/lem-basic-laws-of-inclusion.md (direct)
PASS items/lem-basic-properties-of-total-variation.md (direct)
PASS items/lem-basis-iff-maximal-independent-iff-minimal-spanning.md (direct)
PASS items/lem-bernoulli-and-binomial-mean-and-variance.md (direct)
PASS items/lem-bernoulli-inequality.md (induction)
PASS items/lem-bernstein-basis-moment-identities.md (direct)
PASS items/lem-binomial-coefficients-symmetric-and-unimodal.md (direct)
PASS items/lem-binomial-theorem-over-complex-numbers.md (induction)
PASS items/lem-bondy-chvatal-closure-well-defined.md (induction)
PASS items/lem-bondy-chvatal-edge-addition.md (direct)
PASS items/lem-bounded-open-jordan-sets-have-compact-grid-exhaustions.md (exhaustion)
PASS items/lem-bounded-remetrisation.md (direct)
PASS items/lem-bv-functions-are-regulated.md (direct)
PASS items/lem-bw-implies-archimedean.md (contradiction)
PASS items/lem-bw-implies-cauchy-complete.md (direct)
PASS items/lem-canonical-comparison-characterises-limit-preservation.md (biconditional)
PASS items/lem-cardinal-arithmetic-basic-laws.md (direct)
PASS items/lem-cardinal-operations-are-well-defined.md (direct)
PASS items/lem-cardinality-of-a-well-orderable-set.md (direct)
PASS items/lem-cauchy-away-from-zero.md (direct)
PASS items/lem-cauchy-bounded.md (direct)
PASS items/lem-cauchy-complete-and-archimedean-imply-mct.md (contradiction)
PASS items/lem-cauchy-filter-with-a-cluster-point-converges.md (direct)
PASS items/lem-cauchy-mean-value-quotient-form.md (direct)
PASS items/lem-cauchy-product-of-absolutely-convergent-complex-series.md (direct)
PASS items/lem-cauchy-product-of-real-power-series.md (direct)
PASS items/lem-cauchy-reals-archimedean.md (direct)
PASS items/lem-cauchy-schwarz-for-finite-random-variables.md (cases)
PASS items/lem-cauchy-sequence-bounded.md (direct)
PASS items/lem-cauchy-with-convergent-subsequence.md (direct)
PASS items/lem-cellularity-is-well-defined.md (direct)
PASS items/lem-center-is-normal.md (direct)
PASS items/lem-central-series-commutator-criterion.md (direct)
PASS items/lem-centralizers-and-normalizers-are-subgroups.md (direct)
PASS items/lem-changing-a-function-at-finitely-many-points.md (induction)
PASS items/lem-character-is-well-defined.md (direct)
PASS items/lem-characteristic-and-additive-order.md (direct)
PASS items/lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients.md (direct)
PASS items/lem-characteristic-polynomial-of-block-triangular-matrix.md (direct)
PASS items/lem-characteristic-subgroup-of-a-normal-subgroup-is-normal.md (direct)
PASS items/lem-characteristic-subgroups-are-normal-and-characteristic-is-transitive.md (direct)
PASS items/lem-chebyshev-degree-leading-coefficients-and-extreme-values.md (induction)
PASS items/lem-chinese-remainder-two-moduli.md (direct)
PASS items/lem-choice-splits-essential-surjectivity-over-a-small-target.md (direct)
PASS items/lem-clairaut-for-c2-potentials-by-rectangular-differences.md (direct)
PASS items/lem-closed-subset-of-a-compact-space-is-compact.md (direct)
PASS items/lem-cofinality-is-well-defined.md (direct)
PASS items/lem-coinduced-modules-are-injective.md (direct)
PASS items/lem-colour-focussing-for-arithmetic-progressions.md (induction)
PASS items/lem-colouring-embeds-a-graph-in-a-balanced-blowup.md (direct)
PASS items/lem-commutative-division-ring-is-a-field.md (direct)
PASS items/lem-commutator-subgroup-is-normal.md (direct)
PASS items/lem-commuting-endomorphisms-preserve-eigenspaces.md (direct)
PASS items/lem-compact-closed-balls-in-a-locally-compact-metric-space.md (direct)
PASS items/lem-compact-hausdorff-targets-embed-in-unit-cubes-under-dependent-choice.md (direct)
PASS items/lem-compact-implies-closed-and-bounded-r.md (direct)
PASS items/lem-compact-metric-space-has-a-countable-dense-subset.md (direct)
PASS items/lem-compact-null-iff-content-zero-in-rn.md (direct)
PASS items/lem-compact-set-has-a-jordan-neighborhood-inside-an-open-set.md (finite-cover)
PASS items/lem-compact-uniform-spaces-are-complete.md (direct)
PASS items/lem-compact-uniform-spaces-are-totally-bounded.md (direct)
PASS items/lem-compactly-supported-riemann-integral-is-well-defined.md (common-extension)
PASS items/lem-compactness-is-intrinsic.md (direct)
PASS items/lem-compactness-of-a-subspace-is-ambient.md (direct)
PASS items/lem-complement-commutes-with-induced-subgraphs.md (direct)
PASS items/lem-complement-swaps-cliques-and-stable-sets.md (direct)
PASS items/lem-complementation-preserves-disjoint-regular-pairs.md (direct)
PASS items/lem-complete-regularity-is-hereditary.md (direct)
PASS items/lem-complete-remetrisation.md (direct)
PASS items/lem-completely-regular-topologies-come-from-continuous-pseudometrics.md (constructive)
PASS items/lem-complex-conjugation-and-modulus-laws.md (direct)
PASS items/lem-complex-exponential-series-converges-everywhere.md (direct)
PASS items/lem-complex-polynomial-growth-and-minimum-modulus.md (direct)
PASS items/lem-components-are-anticomplete-and-anticomponents-complete.md (direct)
PASS items/lem-composition-and-identity-linear-maps.md (direct)
PASS items/lem-congruence-is-an-equivalence-relation.md (direct)
PASS items/lem-congruence-respects-integer-arithmetic.md (direct)
PASS items/lem-conjugacy-class-splitting-over-an-index-two-normal-subgroup.md (direct)
PASS items/lem-conjugating-a-cycle-relabels-its-entries.md (direct)
PASS items/lem-connected-subsets-and-separated-sets.md (direct)
PASS items/lem-content-divisibility-characterisation.md (induction)
PASS items/lem-content-zero-implies-null.md (direct)
PASS items/lem-continuity-is-local-and-pastes.md (direct)
PASS items/lem-continuous-images-of-universal-nets-are-universal.md (direct)
PASS items/lem-convergence-in-the-pointwise-topology.md (direct)
PASS items/lem-convergent-filters-are-cauchy.md (direct)
PASS items/lem-convergent-implies-bounded.md (direct)
PASS items/lem-convergent-implies-cauchy.md (direct)
PASS items/lem-coordinate-telescoping-on-a-euclidean-ball.md (direct)
PASS items/lem-coprime-criterion.md (direct)
PASS items/lem-coprime-divides-product.md (direct)
PASS items/lem-coprime-kernel-decomposition.md (direct)
PASS items/lem-core-is-largest-normal-subgroup-contained.md (direct)
PASS items/lem-coset-equinumerous-with-subgroup.md (direct)
PASS items/lem-coset-membership-and-equality.md (direct)
PASS items/lem-coset-partition.md (direct)
PASS items/lem-countable-iff-surjection-from-n.md (direct)
PASS items/lem-countable-local-bases-can-be-open-and-decreasing.md (constructive)
PASS items/lem-countable-sets-are-null.md (direct)
PASS items/lem-countable-uniform-base-normalisation.md (constructive)
PASS items/lem-countably-compact-paracompact-hausdorff-is-compact.md (direct)
PASS items/lem-cut-add-well-defined.md (direct)
PASS items/lem-cut-additive-inverse.md (direct)
PASS items/lem-cut-archimedean.md (direct)
PASS items/lem-cut-order-total.md (direct)
PASS items/lem-cut-reciprocal.md (direct)
PASS items/lem-cyclic-quotient-by-center-implies-abelian.md (direct)
PASS items/lem-cyclic-reduction-normal-form.md (induction)
PASS items/lem-cyclic-subgroup-is-the-set-of-powers.md (direct)
PASS items/lem-dalembert-minimum-modulus-descent.md (constructive)
PASS items/lem-dedekind-modular-law-for-subgroups.md (direct)
PASS items/lem-definite-quadratic-forms-have-a-uniform-sphere-bound.md (direct)
PASS items/lem-deleted-tychonoff-plank-is-regular-and-nonnormal.md (contradiction)
PASS items/lem-density-is-well-defined.md (direct)
PASS items/lem-dependent-choice-along-a-sequence-of-relations.md (direct)
PASS items/lem-dependent-iff-a-vector-lies-in-the-span-of-the-others.md (direct)
PASS items/lem-derivative-of-a-power.md (induction)
PASS items/lem-derivatives-along-a-line-have-the-multinomial-expansion.md (induction)
PASS items/lem-derived-and-integrated-power-series-have-the-same-radius.md (direct)
PASS items/lem-determinant-rank-one-update-over-a-commutative-ring.md (direct)
PASS items/lem-dilworth-induction-step.md (direct)
PASS items/lem-dilworth-maximal-antichain-decomposition.md (direct)
PASS items/lem-dirac-condition-implies-ore-condition.md (direct)
PASS items/lem-direct-product-of-finite-cyclic-groups-is-cyclic-iff-orders-are-coprime.md (direct)
PASS items/lem-direct-sum-criterion.md (direct)
PASS items/lem-discrete-families-are-locally-finite.md (direct)
PASS items/lem-disjoint-cycles-commute.md (direct)
PASS items/lem-distance-to-set-is-lipschitz.md (direct)
PASS items/lem-divisibility-basic.md (direct)
PASS items/lem-divisibility-poset-is-lower-finite-and-factorises.md (direct)
PASS items/lem-divisibility-via-valuations.md (induction)
PASS items/lem-divisor-bound.md (direct)
PASS items/lem-domain-cancellation.md (direct)
PASS items/lem-edge-addition-to-a-tree.md (direct)
PASS items/lem-edge-connectivity-at-most-minimum-degree.md (direct)
PASS items/lem-edge-deletion-in-a-tree.md (direct)
PASS items/lem-edge-is-a-bridge-iff-it-lies-on-no-cycle.md (direct)
PASS items/lem-edge-maximal-kuratowski-free-is-three-connected.md (induction)
PASS items/lem-elementary-divisors-regroup-into-invariant-factors.md (direct)
PASS items/lem-elementary-row-operations-are-reversible.md (direct)
PASS items/lem-endpoints-in-a-short-exact-sequence.md (direct)
PASS items/lem-energy-boost-for-an-irregular-pair.md (direct)
PASS items/lem-energy-controls-density-approximation.md (direct)
PASS items/lem-energy-increment-for-an-irregular-partition.md (direct)
PASS items/lem-energy-is-monotone-under-refinement.md (direct)
PASS items/lem-entourage-and-uniform-cover-dictionary.md (constructive)
PASS items/lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity.md (constructive)
PASS items/lem-equal-images-iff-same-kernel-coset.md (direct)
PASS items/lem-equal-plane-face-boundaries-force-a-cycle.md (direct)
PASS items/lem-equality-in-a-filtered-colimit-of-sets-is-eventual.md (equivalence-relation)
PASS items/lem-equicontinuity-and-pointwise-boundedness-give-uniform-boundedness.md (direct)
PASS items/lem-equicontinuity-on-a-compact-domain-is-uniform.md (direct)
PASS items/lem-equicontinuous-families-have-finite-sup-nets.md (constructive)
PASS items/lem-equivalence-classes-partition.md (direct)
PASS items/lem-erdos-hajnal-constants-are-downward-closed.md (direct)
PASS items/lem-euclidean-linear-maps-have-matrices-and-are-bounded.md (direct)
PASS items/lem-euclidean-polygonal-paths-are-continuous.md (constructive)
PASS items/lem-evaluation-map-of-separating-family-is-an-embedding.md (direct)
PASS items/lem-every-abelian-group-embeds-in-a-divisible-group.md (constructive)
PASS items/lem-every-graph-walk-contains-a-path-between-its-endpoints.md (constructive)
PASS items/lem-every-integer-above-one-has-a-prime-divisor.md (direct)
PASS items/lem-every-net-has-a-universal-subnet.md (constructive)
PASS items/lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric.md (direct)
PASS items/lem-expectation-by-distribution.md (direct)
PASS items/lem-exponential-dominates-one-plus-x.md (cases)
PASS items/lem-exponential-factorial-tail-bound.md (direct)
PASS items/lem-exponential-series-has-infinite-radius.md (direct)
PASS items/lem-extended-reals-complete.md (cases)
PASS items/lem-extremal-comparability.md (direct)
PASS items/lem-extremal-cut-closed-under-f.md (cases)
PASS items/lem-extremal-cut-closed-under-sups.md (cases)
PASS items/lem-face-containment-under-plane-subgraphs.md (direct)
PASS items/lem-factor-elements-act-on-amalgamated-normal-words.md (direct)
PASS items/lem-factor-elements-act-on-reduced-syllable-words.md (direct)
PASS items/lem-factorial-beats-geometric.md (induction)
PASS items/lem-field-is-a-commutative-ring.md (direct)
PASS items/lem-filter-base-generates.md (direct)
PASS items/lem-filter-derived-net-preserves-convergence-and-cluster-points.md (direct)
PASS items/lem-finite-choice.md (induction)
PASS items/lem-finite-coset-partition.md (direct)
PASS items/lem-finite-cube-covers-admit-grid-control.md (constructive)
PASS items/lem-finite-interval-cover-total-length.md (induction)
PASS items/lem-finite-jordan-cover-sum-bounds.md (direct)
PASS items/lem-finite-lattice-join-irreducible-decomposition.md (induction)
PASS items/lem-finite-minima-of-continuous-unit-interval-maps.md (induction)
PASS items/lem-finite-powers-of-countable-sets-are-countable.md (induction)
PASS items/lem-finite-probability-basic-laws.md (direct)
PASS items/lem-finite-set-has-max.md (induction)
PASS items/lem-finite-star-refinement-for-compact-hausdorff-spaces.md (constructive)
PASS items/lem-finite-subsets-listable.md (induction)
PASS items/lem-finite-sum-laws.md (induction)
PASS items/lem-finite-sum-permutation-invariance.md (induction)
PASS items/lem-finite-sum-reindexing-and-fubini.md (direct)
PASS items/lem-fip-generates-filter.md (direct)
PASS items/lem-flow-cut-identity-and-weak-duality.md (direct)
PASS items/lem-forbidden-induced-subgraph-classes-are-hereditary.md (direct)
PASS items/lem-formal-letters-act-by-permutations-on-reduced-words.md (constructive)
PASS items/lem-formal-order-laws.md (direct)
PASS items/lem-formal-residue-identities.md (direct)
PASS items/lem-four-lemma-for-modules.md (direct)
PASS items/lem-function-limit-preserves-order.md (contradiction)
PASS items/lem-function-limit-unique.md (contradiction)
PASS items/lem-fundamental-cut-of-a-spanning-tree.md (direct)
PASS items/lem-fundamental-cycle-of-a-spanning-tree.md (direct)
PASS items/lem-gauss-content-lemma.md (contradiction)
PASS items/lem-gcd-basic-values.md (direct)
PASS items/lem-gcd-euclidean-step.md (direct)
PASS items/lem-gcd-scaling.md (cases)
PASS items/lem-geometric-sequence-null.md (cases)
PASS items/lem-graph-distance-is-a-metric-on-each-component.md (direct)
PASS items/lem-graph-reachability-is-an-equivalence-relation.md (direct)
PASS items/lem-greedy-colouring-bound.md (constructive)
PASS items/lem-green-boundary-cancellation-under-finite-gluing.md (direct)
PASS items/lem-green-type-i-boundary-identity.md (direct)
PASS items/lem-green-type-ii-boundary-identity.md (direct)
PASS items/lem-group-cancellation.md (direct)
PASS items/lem-group-homomorphism-basic-properties.md (direct)
PASS items/lem-group-inverse-laws.md (direct)
PASS items/lem-group-power-laws.md (induction)
PASS items/lem-groups-of-order-pq-have-a-normal-q-subgroup.md (direct)
PASS items/lem-hall-induction-reductions.md (direct)
PASS items/lem-hamel-basis-exists.md (direct)
PASS items/lem-hierholzer-maximal-unused-edge-trail-closes.md (direct)
PASS items/lem-higher-order-rolle.md (induction)
PASS items/lem-homeomorphism-criteria.md (direct)
PASS items/lem-homomorphisms-respect-commutators-and-derived-series.md (induction)
PASS items/lem-homotopy-reflexive-and-symmetric.md (direct)
PASS items/lem-homotopy-transitivity-by-reparametrisation.md (direct)
PASS items/lem-horizontal-composition-of-natural-transformations-is-natural.md (direct)
PASS items/lem-ideal-criterion-and-intersections.md (direct)
PASS items/lem-identity-diagram-large-limit-and-initial-objects.md (universal-property)
PASS items/lem-identity-unique.md (direct)
PASS items/lem-improper-integral-splitting-and-tail-invariance.md (direct)
PASS items/lem-incidence-convolution-associative-and-distributive.md (direct)
PASS items/lem-incidence-convolution-inverses-by-recursion.md (induction)
PASS items/lem-independence-has-finite-character.md (direct)
PASS items/lem-independent-list-is-injective.md (direct)
PASS items/lem-index-map-grows.md (induction)
PASS items/lem-indicator-expectation-and-products.md (direct)
PASS items/lem-induced-copy-number-isomorphism-and-complement.md (direct)
PASS items/lem-induced-embeddings-compose.md (direct)
PASS items/lem-induced-freeness-passes-to-induced-subgraphs.md (contradiction)
PASS items/lem-inf-epsilon.md (direct)
PASS items/lem-infinite-pigeonhole-on-the-naturals.md (contradiction)
PASS items/lem-injective-darboux-function-is-strictly-monotone.md (contradiction)
PASS items/lem-inner-product-pairing-is-nondegenerate-and-norm-is-homogeneous.md (direct)
PASS items/lem-int-abs-properties.md (cases)
PASS items/lem-int-add-well-defined.md (direct)
PASS items/lem-int-bounded-above-has-greatest.md (direct)
PASS items/lem-int-cancellation.md (cases)
PASS items/lem-int-embeds-rat.md (direct)
PASS items/lem-int-equivalence.md (direct)
PASS items/lem-int-mul-well-defined.md (direct)
PASS items/lem-integer-multiples-agree-with-canonical-natural.md (direct)
PASS items/lem-integer-multiples-in-a-ring.md (induction)
PASS items/lem-integer-part.md (constructive)
PASS items/lem-integrability-on-a-subinterval.md (direct)
PASS items/lem-integral-elementary-bounds.md (direct)
PASS items/lem-integral-unit-flow-decomposition.md (induction)
PASS items/lem-interior-closure-boundary-identities.md (direct)
PASS items/lem-intersection-of-linear-subspaces.md (direct)
PASS items/lem-intersection-of-normal-subgroups.md (direct)
PASS items/lem-intersection-of-subgroups.md (direct)
PASS items/lem-invariance-passes-to-orthogonal-complements-under-the-adjoint.md (direct)
PASS items/lem-inverse-of-bijective-group-homomorphism.md (direct)
PASS items/lem-inverse-relations-composites-and-restrictions-are-sets.md (direct)
PASS items/lem-inverse-unique.md (direct)
PASS items/lem-isometry-is-an-embedding.md (direct)
PASS items/lem-isomorphism-characterised-by-composition-bijections.md (direct)
PASS items/lem-join-irreducible-is-join-prime.md (direct)
PASS items/lem-jones-normal-density-discrete-bound.md (direct)
PASS items/lem-jordan-set-integral-well-defined.md (direct)
PASS items/lem-jumps-of-the-variation-function.md (direct)
PASS items/lem-katona-cyclic-interval-bound.md (direct)
PASS items/lem-kempe-component-colour-swap.md (direct)
PASS items/lem-kernel-basis-extension-gives-image-basis.md (direct)
PASS items/lem-konig-alternating-reachability-cover.md (direct)
PASS items/lem-kst-common-neighbour-double-count.md (direct)
PASS items/lem-kuratowski-minors-are-topological-minors.md (direct)
PASS items/lem-large-cantor-cubes-are-not-separable.md (contradiction)
PASS items/lem-laurent-non-archimedean.md (direct)
PASS items/lem-laurent-series-ring.md (direct)
PASS items/lem-laurent-valuation.md (direct)
PASS items/lem-leading-multidegree-of-a-symmetric-polynomial-is-a-partition.md (contradiction)
PASS items/lem-leading-multidegrees-of-elementary-symmetric-monomials.md (direct)
PASS items/lem-left-and-right-cosets-equinumerous.md (direct)
PASS items/lem-liminf-le-limsup.md (direct)
PASS items/lem-limit-abs.md (direct)
PASS items/lem-limit-implies-local-boundedness.md (direct)
PASS items/lem-limit-is-local.md (direct)
PASS items/lem-limit-legs-are-jointly-monic-and-colimit-legs-jointly-epic.md (universal-property)
PASS items/lem-limit-of-tail.md (direct)
PASS items/lem-limit-preserves-order.md (contradiction)
PASS items/lem-limit-unique.md (contradiction)
PASS items/lem-limsup-epsilon-characterisation.md (direct)
PASS items/lem-limsup-exists.md (direct)
PASS items/lem-limsup-monotone-comparison.md (direct)
PASS items/lem-limsup-reflection.md (direct)
PASS items/lem-lindelof-degree-is-well-defined.md (direct)
PASS items/lem-line-integrals-are-independent-of-the-piecewise-c1-partition.md (direct)
PASS items/lem-linear-congruence-reduction-by-the-gcd.md (direct)
PASS items/lem-linear-functionals-separate-points-from-subspaces.md (direct)
PASS items/lem-linear-map-elementary-properties.md (direct)
PASS items/lem-linear-subspace-criterion.md (direct)
PASS items/lem-linear-subspace-is-a-subgroup.md (direct)
PASS items/lem-local-c-one-volume-distortion.md (reduction)
PASS items/lem-local-composition-of-real-power-series.md (constructive)
PASS items/lem-local-lemma-conditional-probability-bound.md (induction)
PASS items/lem-local-reciprocal-of-a-real-power-series.md (constructive)
PASS items/lem-locally-finite-sums-are-continuous.md (direct)
PASS items/lem-locally-finite-union-of-sigma-locally-finite-bases.md (direct)
PASS items/lem-locally-finite-unions-and-closures.md (direct)
PASS items/lem-log-series-extends-by-the-product-law.md (direct)
PASS items/lem-lower-limit-line-is-regular-and-lindelof.md (direct)
PASS items/lem-lower-limit-plane-antidiagonal.md (direct)
PASS items/lem-lub-implies-nested-intervals.md (direct)
PASS items/lem-matrix-unit-multiplication.md (direct)
PASS items/lem-max-is-sup.md (direct)
PASS items/lem-maximal-acyclic-spanning-subgraph-is-a-spanning-tree.md (contradiction)
PASS items/lem-maximal-chains-of-the-boolean-lattice.md (direct)
PASS items/lem-mct-implies-archimedean.md (contradiction)
PASS items/lem-mct-implies-lub.md (constructive)
PASS items/lem-metric-ball-neighbourhood-base.md (direct)
PASS items/lem-metric-cauchy-bounded.md (direct)
PASS items/lem-metric-cauchy-with-convergent-subsequence.md (direct)
PASS items/lem-metric-convergent-implies-cauchy.md (direct)
PASS items/lem-metric-limits-unique.md (contradiction)
PASS items/lem-metric-nonnegativity.md (direct)
PASS items/lem-metric-open-covers-have-point-finite-refinements.md (constructive)
PASS items/lem-metric-point-finite-refinements-can-be-made-locally-finite.md (constructive)
PASS items/lem-metric-reverse-triangle.md (direct)
PASS items/lem-metric-spaces-have-sigma-locally-finite-bases.md (direct)
PASS items/lem-metric-uniformity-dictionary.md (direct)
PASS items/lem-metrics-on-rn.md (direct)
PASS items/lem-mgf-of-independent-finite-sum.md (direct)
PASS items/lem-midpoint-convexity-extends-to-dyadic-weights.md (induction)
PASS items/lem-minimal-cauchy-filter-associated-to-a-cauchy-filter.md (constructive)
PASS items/lem-minimal-cauchy-filter-space-is-complete.md (constructive)
PASS items/lem-minimal-polynomial-is-invariant-under-field-extension.md (direct)
PASS items/lem-module-elementary-consequences.md (direct)
PASS items/lem-moment-bound-for-a-random-sign.md (direct)
PASS items/lem-monoid-units-form-a-group.md (direct)
PASS items/lem-monotone-unbounded-diverges.md (direct)
PASS items/lem-monotone-with-interval-image-is-continuous.md (direct)
PASS items/lem-monotonicity-of-union-and-intersection.md (direct)
PASS items/lem-multidimensional-refinement-inequalities.md (induction)
PASS items/lem-multiples-below-a-prime-power.md (direct)
PASS items/lem-mutual-independence-under-subfamilies-and-complements.md (induction)
PASS items/lem-nat-add-associative.md (induction)
PASS items/lem-nat-add-cancellative.md (induction)
PASS items/lem-nat-add-commutative.md (induction)
PASS items/lem-nat-add-identity.md (induction)
PASS items/lem-nat-add-successor-left.md (induction)
PASS items/lem-nat-discrete.md (direct)
PASS items/lem-nat-embeds-int.md (direct)
PASS items/lem-nat-finite-sum-laws-and-the-canonical-embedding.md (induction)
PASS items/lem-nat-mult-associative.md (induction)
PASS items/lem-nat-mult-cancellative.md (contradiction)
PASS items/lem-nat-mult-commutative.md (induction)
PASS items/lem-nat-mult-distributive.md (induction)
PASS items/lem-nat-mult-identity.md (induction)
PASS items/lem-nat-no-zero-divisors.md (contrapositive)
PASS items/lem-nat-nonzero-is-successor.md (induction)
PASS items/lem-nat-order-add-compatible.md (direct)
PASS items/lem-nat-order-is-membership.md (direct)
PASS items/lem-nat-order-mult-compatible.md (direct)
PASS items/lem-nat-successor-neq-self.md (induction)
PASS items/lem-nat-transitive-irreflexive.md (induction)
PASS items/lem-nat-trichotomy.md (induction)
PASS items/lem-near-identity-c-one-maps-sandwich-cubes.md (fixed-point)
PASS items/lem-nested-ideals-and-quotients.md (direct)
PASS items/lem-nested-intervals-and-archimedean-imply-bw.md (constructive)
PASS items/lem-nested-normal-subgroups-and-quotients.md (direct)
PASS items/lem-newton-contraction-near-an-invertible-derivative.md (contraction)
PASS items/lem-no-augmenting-path-gives-tight-cut.md (direct)
PASS items/lem-nondegenerate-interval-is-not-null.md (contradiction)
PASS items/lem-nonempty-forest-has-low-degree-vertex.md (contradiction)
PASS items/lem-nontrivial-normal-subgroup-of-a-n-contains-a-three-cycle.md (extremal)
PASS items/lem-nonzero-echelon-rows-form-a-basis-of-the-row-space.md (direct)
PASS items/lem-normal-sequences-of-entourages.md (constructive)
PASS items/lem-normal-subgroup-containing-a-three-cycle-is-a-n.md (direct)
PASS items/lem-normality-is-closed-hereditary.md (direct)
PASS items/lem-normality-via-shrinking.md (direct)
PASS items/lem-normalizing-a-locally-finite-positive-family.md (direct)
PASS items/lem-nth-root-of-constant-tends-to-one.md (cases)
PASS items/lem-nth-root-of-n-tends-to-one.md (direct)
PASS items/lem-nth-term-test.md (direct)
PASS items/lem-null-ideal.md (direct)
PASS items/lem-null-is-cauchy.md (direct)
PASS items/lem-null-maximal.md (direct)
PASS items/lem-null-sets-in-rn-closed-under-subsets-and-countable-unions.md (constructive)
PASS items/lem-null-times-bounded.md (direct)
PASS items/lem-of-abs-value.md (cases)
PASS items/lem-of-add-order.md (direct)
PASS items/lem-of-hom-fixes-q.md (direct)
PASS items/lem-of-hom-order-preserving.md (direct)
PASS items/lem-of-inverse-positive.md (direct)
PASS items/lem-of-inverse-unique.md (direct)
PASS items/lem-of-mult-cancel.md (direct)
PASS items/lem-of-mult-neg.md (direct)
PASS items/lem-of-naturals-positive.md (induction)
PASS items/lem-of-no-zero-divisors.md (direct)
PASS items/lem-of-q-dense.md (direct)
PASS items/lem-of-q-embeds.md (direct)
PASS items/lem-of-sequence-basics.md (direct)
PASS items/lem-of-sign-rules.md (direct)
PASS items/lem-of-square-monotone.md (direct)
PASS items/lem-of-square-positive.md (cases)
PASS items/lem-of-triangle-inequality.md (direct)
PASS items/lem-of-zero-mult.md (direct)
PASS items/lem-omega-least-limit-ordinal.md (direct)
PASS items/lem-omega-smallest-inductive.md (direct)
PASS items/lem-open-or-closed-surjection-is-quotient.md (direct)
PASS items/lem-order-characterisation.md (direct)
PASS items/lem-order-ideals-form-a-distributive-lattice.md (direct)
PASS items/lem-order-of-a-power-in-a-finite-cyclic-group.md (direct)
PASS items/lem-order-of-element-exists.md (direct)
PASS items/lem-order-of-five-modulo-two-powers.md (induction)
PASS items/lem-order-of-one-plus-pu-modulo-prime-powers.md (induction)
PASS items/lem-order-p-actions-on-a-cyclic-q-group.md (iff)
PASS items/lem-ordered-field-is-an-ordered-ring.md (direct)
PASS items/lem-ordered-pairs-lie-in-the-double-power-set.md (direct)
PASS items/lem-ordered-ring-cone-and-order-agree.md (direct)
PASS items/lem-ordinal-basics.md (direct)
PASS items/lem-ordinal-order-topology-is-t3.md (direct)
PASS items/lem-ordinal-product-as-an-order-type.md (direct)
PASS items/lem-ordinal-sum-as-an-order-type.md (direct)
PASS items/lem-ordinal-trichotomy.md (direct)
PASS items/lem-oriented-similarities-are-nonzero-complex-multiplications.md (direct)
PASS items/lem-oscillation-characterisation-in-rn.md (direct)
PASS items/lem-oscillation-superlevel-sets-are-closed.md (direct)
PASS items/lem-p-adic-valuation-additive.md (direct)
PASS items/lem-p-adic-valuation-basic.md (direct)
PASS items/lem-p-adic-valuation-on-q.md (direct)
PASS items/lem-p-norms-are-norms-and-induce-the-published-metrics.md (direct)
PASS items/lem-pairwise-coprime-divisibility.md (induction)
PASS items/lem-paracompact-hausdorff-cover-shrinking.md (constructive)
PASS items/lem-paracompact-hausdorff-is-regular.md (direct)
PASS items/lem-pasted-squares-commute.md (direct)
PASS items/lem-peak-monotone-subsequence.md (cases)
PASS items/lem-pigeonhole.md (direct)
PASS items/lem-plane-edge-face-incidence.md (direct)
PASS items/lem-plane-face-handshake-by-girth.md (direct)
PASS items/lem-plane-graph-faces-are-finite-with-one-unbounded-face.md (induction)
PASS items/lem-plane-triangulation-is-connected.md (contradiction)
PASS items/lem-point-filters-are-dense-in-the-minimal-cauchy-filter-space.md (constructive)
PASS items/lem-pointwise-lipschitz-sets-in-c01-are-closed.md (sequential)
PASS items/lem-polygonal-arc-does-not-separate-the-plane.md (constructive)
PASS items/lem-polygonal-crossing-parity-is-locally-constant.md (direct)
PASS items/lem-polygonal-length-is-monotone-under-refinement.md (direct)
PASS items/lem-polygonal-ray-general-position.md (constructive)
PASS items/lem-polygonally-reachable-set-is-clopen.md (direct)
PASS items/lem-polynomial-factorisation-into-irreducibles.md (induction)
PASS items/lem-polynomial-gcd-is-stable-under-field-extension.md (direct)
PASS items/lem-polynomial-kernels-and-images-are-invariant.md (direct)
PASS items/lem-polynomial-operations-preserve-finite-support.md (direct)
PASS items/lem-polynomials-and-roots-transport-along-field-isomorphisms.md (direct)
PASS items/lem-poset-mobius-recurrence.md (direct)
PASS items/lem-positive-and-negative-parts.md (direct)
PASS items/lem-potentials-glue-over-a-path-connected-overlap.md (direct)
PASS items/lem-power-congruence-root-bound-modulo-a-prime.md (direct)
PASS items/lem-power-difference-factorisation.md (direct)
PASS items/lem-power-laws.md (induction)
PASS items/lem-power-monotone.md (induction)
PASS items/lem-power-over-geometric-null.md (direct)
PASS items/lem-power-series-reexpansion-double-series.md (direct)
PASS items/lem-prime-divides-intermediate-binomial-coefficients.md (direct)
PASS items/lem-prime-implies-irreducible-in-a-domain.md (direct)
PASS items/lem-prime-not-dividing-is-coprime.md (cases)
PASS items/lem-prime-power-binomial-congruence.md (direct)
PASS items/lem-primitive-root-lift-to-prime-square.md (cases)
PASS items/lem-primitive-roots-pass-between-odd-n-and-twice-n.md (direct)
PASS items/lem-product-basis-for-a-tower-of-finite-extensions.md (direct)
PASS items/lem-product-grid-bounds-for-section-integrals.md (direct)
PASS items/lem-product-lower-bound-for-jordan-content.md (direct)
PASS items/lem-product-topology-on-rn.md (direct)
PASS items/lem-product-with-normal-subgroup.md (direct)
PASS items/lem-products-preserve-complete-regularity.md (direct)
PASS items/lem-products-preserve-regularity.md (direct)
PASS items/lem-products-preserve-t0-t1-and-hausdorff.md (direct)
PASS items/lem-prufer-decoding-produces-a-tree.md (induction)
PASS items/lem-pseudocompact-euclidean-subset-is-bounded.md (direct)
PASS items/lem-pseudocompact-euclidean-subset-is-closed.md (contradiction)
PASS items/lem-pseudometric-from-a-normal-entourage-sequence.md (constructive)
PASS items/lem-pullbacks-of-monomorphisms-are-monomorphisms-and-pushouts-of-epimorphisms-are-epimorphisms.md (cancellation)
PASS items/lem-punctured-rn-is-polygonally-connected.md (direct)
PASS items/lem-purity-symmetry-and-complementation.md (direct)
PASS items/lem-q-and-irrationals-dense-r.md (direct)
PASS items/lem-radial-normalisation-is-continuous.md (direct)
PASS items/lem-random-graph-fixed-pattern-probability.md (direct)
PASS items/lem-random-graph-independence-number-bound.md (cases)
PASS items/lem-random-graph-short-cycle-expectation.md (direct)
PASS items/lem-rat-archimedean.md (direct)
PASS items/lem-rat-cut-embeds.md (direct)
PASS items/lem-rat-embeds-dense.md (direct)
PASS items/lem-rat-equivalence.md (direct)
PASS items/lem-rat-inverse-well-defined.md (direct)
PASS items/lem-rat-ops-well-defined.md (direct)
PASS items/lem-rat-positive-denominator.md (direct)
PASS items/lem-rat-triangle.md (cases)
PASS items/lem-rational-cut-is-cut.md (direct)
PASS items/lem-rational-power-laws.md (direct)
PASS items/lem-rational-power-monotone.md (cases)
PASS items/lem-rational-power-well-defined.md (direct)
PASS items/lem-real-and-metric-notions-agree.md (direct)
PASS items/lem-real-line-is-a-metric-space.md (direct)
PASS items/lem-real-polynomial-factor-at-a-root.md (constructive)
PASS items/lem-reciprocal-of-null-diverges.md (direct)
PASS items/lem-rectangle-second-difference-mean-value-formula.md (direct)
PASS items/lem-recursion-on-the-ordinals.md (direct)
PASS items/lem-refinement-inequalities.md (induction)
PASS items/lem-reflection.md (direct)
PASS items/lem-regular-lindelof-spaces-are-normal.md (direct)
PASS items/lem-regular-lindelof-spaces-are-paracompact.md (constructive)
PASS items/lem-regularity-is-hereditary.md (direct)
PASS items/lem-regularity-is-robust-under-small-edits.md (contradiction)
PASS items/lem-regularity-via-closed-neighbourhoods.md (direct)
PASS items/lem-residual-augmentation.md (constructive)
PASS items/lem-restriction-of-scalars.md (direct)
PASS items/lem-riemann-stieltjes-integral-unique.md (direct)
PASS items/lem-riemann-stieltjes-refinement-estimate.md (direct)
PASS items/lem-rigidity-of-alternating-multilinear-matrix-functions.md (direct)
PASS items/lem-ring-elementary-consequences.md (direct)
PASS items/lem-ring-homomorphism-basic-properties.md (direct)
PASS items/lem-ring-homomorphism-of-fields-is-a-field-homomorphism.md (direct)
PASS items/lem-ring-units-form-a-group.md (direct)
PASS items/lem-rooted-tree-parent-and-levels.md (direct)
PASS items/lem-roots-of-x-q-minus-x-form-a-field.md (direct)
PASS items/lem-row-operations-preserve-column-relations.md (direct)
PASS items/lem-row-operations-preserve-row-space.md (direct)
PASS items/lem-samuel-function-pseudometrics-and-coarsening.md (direct)
PASS items/lem-samuel-uniformity-is-totally-bounded.md (constructive)
PASS items/lem-samuel-uniformity-preserves-the-induced-topology-under-dependent-choice.md (constructive)
PASS items/lem-scaled-binomial-coefficients-converge.md (direct)
PASS items/lem-schur-complement-congruence-and-determinant.md (direct)
PASS items/lem-separation-augmentation-for-kuratowski-free-graphs.md (direct)
PASS items/lem-sequential-characterisation-of-closure-r.md (direct)
PASS items/lem-sequential-closure-inside-closure.md (direct)
PASS items/lem-sequentially-compact-implies-complete.md (direct)
PASS items/lem-series-linearity.md (direct)
PASS items/lem-series-tail-invariance.md (direct)
PASS items/lem-sign-preservation-near-a-limit.md (direct)
PASS items/lem-sine-and-cosine-series-converge-everywhere.md (direct)
PASS items/lem-sine-positive-and-cosine-decreasing-on-zero-two.md (direct)
PASS items/lem-slicing-lemma-for-regular-pairs.md (direct)
PASS items/lem-span-is-the-set-of-linear-combinations.md (direct)
PASS items/lem-span-monotone-and-idempotent.md (direct)
PASS items/lem-span-of-a-single-vector.md (direct)
PASS items/lem-spanning-tree-exchange.md (constructive)
PASS items/lem-spanning-tree-set-is-finite.md (direct)
PASS items/lem-splicing-edge-disjoint-closed-trails.md (constructive)
PASS items/lem-stabilizer-is-a-subgroup.md (direct)
PASS items/lem-stabilizers-in-one-orbit-are-conjugate.md (direct)
PASS items/lem-standard-basis-of-f-n.md (direct)
PASS items/lem-steep-polygonal-functions-are-dense-in-c01.md (constructive)
PASS items/lem-straight-line-homotopies-are-continuous.md (direct)
PASS items/lem-subgroup-criterion.md (direct)
PASS items/lem-subgroups-of-finite-p-groups-are-p-groups.md (direct)
PASS items/lem-subgroups-of-z-are-cyclic.md (direct)
PASS items/lem-submodule-criterion-sums-and-intersections.md (direct)
PASS items/lem-subnets-preserve-eventual-properties-and-limits.md (direct)
PASS items/lem-subring-criterion.md (direct)
PASS items/lem-subring-plus-ideal-and-intersection.md (direct)
PASS items/lem-subsequence-inherits-limit.md (direct)
PASS items/lem-subset-of-countable.md (cases)
PASS items/lem-successive-p-multiple-quotients-recover-elementary-divisors.md (direct)
PASS items/lem-successor-cardinal-exists.md (direct)
PASS items/lem-successor-of-extremal.md (cases)
PASS items/lem-sum-is-span-of-union.md (direct)
PASS items/lem-sunflower-maximal-disjoint-subfamily.md (direct)
PASS items/lem-sup-epsilon.md (direct)
PASS items/lem-sup-metric-is-a-metric.md (direct)
PASS items/lem-sup-monotone.md (direct)
PASS items/lem-sup-of-extremals.md (direct)
PASS items/lem-sup-scale.md (cases)
PASS items/lem-sup-sum.md (direct)
PASS items/lem-sup-translate.md (direct)
PASS items/lem-sup-unique.md (direct)
PASS items/lem-symmetric-chain-decomposition-induction-step.md (constructive)
PASS items/lem-symmetric-difference-of-two-matchings.md (direct)
PASS items/lem-symmetric-entourages-form-a-base.md (direct)
PASS items/lem-symmetric-group-is-a-group.md (direct)
PASS items/lem-t0-t1-and-hausdorff-are-hereditary.md (direct)
PASS items/lem-tail-filter-preserves-net-convergence-and-cluster-points.md (direct)
PASS items/lem-tangent-principal-branch-is-bijective.md (direct)
PASS items/lem-tauber-block-estimate.md (direct)
PASS items/lem-taylor-polynomial-derivatives.md (induction)
PASS items/lem-telescoping-series.md (direct)
PASS items/lem-the-composite-of-two-functions-is-a-function.md (direct)
PASS items/lem-the-diagonal-map-is-an-embedding.md (direct)
PASS items/lem-the-domain-and-range-of-a-relation-are-sets.md (direct)
PASS items/lem-the-graph-of-a-continuous-map-into-a-hausdorff-space-is-closed.md (direct)
PASS items/lem-the-intersection-of-a-nonempty-set-is-a-set.md (direct)
PASS items/lem-the-k-topology-is-hausdorff-and-not-regular.md (direct)
PASS items/lem-the-kernel-of-a-function-is-an-equivalence-relation.md (direct)
PASS items/lem-the-order-topology-on-an-ordinal.md (direct)
PASS items/lem-the-oscillating-zigzag-curve.md (direct)
PASS items/lem-the-partial-alternating-sum-of-a-binomial-row.md (induction)
PASS items/lem-the-power-set-of-a-set-is-a-set.md (direct)
PASS items/lem-the-product-of-an-indexed-family-is-a-set.md (direct)
PASS items/lem-the-set-of-functions-between-two-sets-is-a-set.md (direct)
PASS items/lem-three-connected-graph-has-a-contractible-edge.md (contradiction)
PASS items/lem-three-connected-kuratowski-free-is-planar.md (induction)
PASS items/lem-three-slope-inequality-for-convex-functions.md (direct)
PASS items/lem-topological-group-translations-and-inversion.md (direct)
PASS items/lem-total-boundedness-passes-to-dense-uniform-extensions.md (direct)
PASS items/lem-total-variation-seminorm-laws.md (direct)
PASS items/lem-totally-bounded-basic.md (direct)
PASS items/lem-totally-bounded-uniformities-equal-their-samuel-uniformity.md (constructive)
PASS items/lem-tournament-cycle-insertion.md (constructive)
PASS items/lem-triangle-inequality-finite.md (induction)
PASS items/lem-truncated-integrals-of-rational-powers.md (computation)
PASS items/lem-tube-lemma-for-a-compact-factor.md (direct)
PASS items/lem-tube-lemma-for-a-compact-metric-factor.md (direct)
PASS items/lem-turan-graph-edge-count-and-balance.md (direct)
PASS items/lem-two-colour-ramsey-arrow-recursion.md (direct)
PASS items/lem-two-functions-are-equal-exactly-when-they-agree-at-every-point.md (direct)
PASS items/lem-two-point-interpolation-in-a-separating-real-function-algebra.md (constructive)
PASS items/lem-typical-degrees-in-a-regular-pair.md (contradiction)
PASS items/lem-ultrafilter-cluster-points-are-limits.md (contradiction)
PASS items/lem-ultrafilter-prime.md (direct)
PASS items/lem-ultrafilters-on-totally-bounded-uniform-spaces-are-cauchy.md (direct)
PASS items/lem-uncountable-delta-system-for-finite-sets.md (induction)
PASS items/lem-uniform-closure-of-a-real-function-algebra-is-a-lattice.md (direct)
PASS items/lem-uniform-convergence-implies-pointwise-convergence-real-functions.md (direct)
PASS items/lem-uniform-convergence-in-the-uniform-metric.md (direct)
PASS items/lem-uniform-convergence-uniformity-is-finer-than-pointwise.md (direct)
PASS items/lem-uniform-integral-error-bound.md (direct)
PASS items/lem-uniform-limits-linear-combinations.md (direct)
PASS items/lem-uniform-metric-on-a-function-space.md (direct)
PASS items/lem-uniform-product-limit-under-boundedness.md (direct)
PASS items/lem-uniformizable-spaces-are-completely-regular.md (constructive)
PASS items/lem-uniformizable-spaces-are-regular.md (direct)
PASS items/lem-uniformly-convergent-sequences-form-equicontinuous-families.md (direct)
PASS items/lem-union-of-chain-of-filters.md (direct)
PASS items/lem-unions-and-intersections-of-small-families.md (direct)
PASS items/lem-unique-subgroup-of-order-p-forces-cyclicity.md (contradiction)
PASS items/lem-uniqueness-of-the-complex-derivative.md (contradiction)
PASS items/lem-uniqueness-of-the-total-derivative.md (direct)
PASS items/lem-unit-interval-functions-extend-over-evaluation-closure.md (direct)
PASS items/lem-units-of-z.md (direct)
PASS items/lem-universal-net-cluster-points-are-limits.md (contradiction)
PASS items/lem-unordered-pair-equality.md (cases)
PASS items/lem-urysohn-sits-between-hausdorff-and-regular-plus-t1.md (direct)
PASS items/lem-variance-and-covariance-identities.md (direct)
PASS items/lem-variation-additive-on-subintervals.md (direct)
PASS items/lem-variation-function-and-jordan-identities.md (direct)
PASS items/lem-vector-space-elementary-consequences.md (direct)
PASS items/lem-vertex-connectivity-at-most-edge-connectivity.md (constructive)
PASS items/lem-vertical-composition-of-natural-transformations-is-natural.md (direct)
PASS items/lem-viete-finite-cosine-product-and-nested-radicals.md (induction)
PASS items/lem-wallis-integrals-recurrence-and-squeeze.md (direct)
PASS items/lem-weight-is-well-defined.md (direct)
PASS items/lem-well-order-comparability.md (direct)
PASS items/lem-well-order-rigid.md (contradiction)
PASS items/lem-wilson-inverse-pairing.md (direct)
PASS items/lem-x-squared-plus-one-is-irreducible-over-the-reals.md (direct)
PASS items/lem-yoneda-evaluation-bijection.md (constructive)
PASS items/lem-young-partition-sum-estimate-rational.md (direct)
PASS items/lem-zero-of-a-real-analytic-function-is-isolated-or-locally-identical.md (cases)
PASS items/lem-zykov-symmetrisation.md (direct)
PASS items/prop-adjoint-algebra.md (direct)
PASS items/prop-algebra-of-union-intersection-and-difference.md (direct)
PASS items/prop-algebraic-splitting-extensions-are-normal.md (direct)
PASS items/prop-arc-length-under-lipschitz-maps-and-euclidean-similarities.md (comparison)
PASS items/prop-basic-calculus-of-monomorphisms-and-epimorphisms.md (direct)
PASS items/prop-basic-properties-of-the-power-set.md (direct)
PASS items/prop-bipartite-matching-flow-model.md (direct)
PASS items/prop-canonical-quotient-map.md (direct)
PASS items/prop-canonical-quotient-module-map.md (direct)
PASS items/prop-canonical-quotient-ring-map.md (direct)
PASS items/prop-canonical-subgroups-of-an-external-semidirect-product.md (direct)
PASS items/prop-carmichael-function-as-maximal-order.md (direct)
PASS items/prop-cartesian-products-and-set-operations.md (direct)
PASS items/prop-category-isomorphisms-are-bijective-on-objects-and-morphisms.md (direct)
PASS items/prop-closed-subspaces-of-paracompact-spaces.md (direct)
PASS items/prop-coefficient-extraction-linearity-and-extensionality.md (direct)
PASS items/prop-compact-spaces-are-paracompact.md (direct)
PASS items/prop-completeness-and-cocompleteness-in-poset-categories.md (translation)
PASS items/prop-composition-of-relations-is-associative.md (direct)
PASS items/prop-composition-preserves-injectivity-surjectivity-and-bijectivity.md (direct)
PASS items/prop-connected-groupoid-equivalent-to-an-automorphism-group.md (direct)
PASS items/prop-continuous-image-density-and-lindelof-degree.md (direct)
PASS items/prop-coordinate-cauchy-schwarz-agrees-with-the-finite-sum-theorem.md (direct)
PASS items/prop-created-limits-exist-and-are-preserved.md (definition)
PASS items/prop-degree-bound-for-composita.md (direct)
PASS items/prop-deletion-alteration-method.md (direct)
PASS items/prop-eigenvalue-iff-shift-is-not-invertible.md (direct)
PASS items/prop-elementary-and-complete-generating-series-identity.md (direct)
PASS items/prop-elementary-tensor-formulas-descend-exactly-when-balanced.md (direct)
PASS items/prop-empty-limits-and-colimits-are-terminal-and-initial-objects.md (universal-property)
PASS items/prop-endomorphisms-of-a-splitting-field-permute-its-roots.md (direct)
PASS items/prop-equality-of-words-in-a-presentation.md (direct)
PASS items/prop-equivalence-of-categories-is-an-equivalence-relation.md (direct)
PASS items/prop-equivalences-preserve-reflect-and-create-limits-and-colimits.md (transport-of-structure)
PASS items/prop-erdos-hajnal-property-is-complement-invariant.md (direct)
PASS items/prop-erdos-hajnal-property-is-monotone-under-induced-pattern-containment.md (direct)
PASS items/prop-erdos-hajnal-property-passes-to-hereditary-subclasses.md (direct)
PASS items/prop-every-small-category-has-a-skeleton-under-choice.md (direct)
PASS items/prop-extension-degree-one-iff-equal-fields.md (direct)
PASS items/prop-extension-of-scalars-preserves-flat-modules.md (direct)
PASS items/prop-face-boundaries-in-three-connected-plane-graphs.md (direct)
PASS items/prop-face-boundaries-in-two-connected-plane-graphs.md (contradiction)
PASS items/prop-field-and-ring-matrix-interfaces-agree.md (direct)
PASS items/prop-finite-fields-are-splitting-fields-of-x-q-minus-x.md (direct)
PASS items/prop-finitely-generated-normal-extensions-are-splitting-fields.md (direct)
PASS items/prop-formal-derivative-algebra.md (direct)
PASS items/prop-formal-derivative-laws.md (direct)
PASS items/prop-free-equivalence-is-an-equivalence-and-a-congruence.md (direct)
PASS items/prop-fully-faithful-functors-reflect-isomorphisms.md (direct)
PASS items/prop-fully-faithful-functors-reflect-limits-and-colimits.md (universal-property)
PASS items/prop-functoriality-of-module-tensor-products.md (direct)
PASS items/prop-functors-preserve-isomorphisms.md (direct)
PASS items/prop-fundamental-group-is-a-functor-on-pointed-spaces.md (direct)
PASS items/prop-groups-and-homomorphisms-form-category-grp.md (direct)
PASS items/prop-holomorph-as-a-permutation-group.md (direct)
PASS items/prop-holomorph-recognises-regular-normal-subgroups.md (direct)
PASS items/prop-images-and-preimages-under-a-relation-and-set-operations.md (direct)
PASS items/prop-images-of-unions-and-intersections-under-a-function.md (direct)
PASS items/prop-index-calculus-modulo-n.md (direct)
PASS items/prop-initial-and-terminal-objects-as-representations.md (direct)
PASS items/prop-integers-modulo-n-as-a-quotient-group.md (direct)
PASS items/prop-integers-modulo-n-as-a-quotient-ring.md (direct)
PASS items/prop-isomorphisms-form-the-maximal-subgroupoid.md (direct)
PASS items/prop-iterated-localisation.md (direct)
PASS items/prop-kernels-of-amalgamating-maps-collapse-in-the-pushout.md (direct)
PASS items/prop-limit-colimit-duality.md (duality)
PASS items/prop-linear-maps-form-a-vector-space.md (direct)
PASS items/prop-localisation-zero-equality-and-kernel-criteria.md (direct)
PASS items/prop-maximal-plane-triangulation-characterisation.md (direct)
PASS items/prop-maximally-planar-edge-characterisation.md (direct)
PASS items/prop-minimal-polynomial-of-an-invariant-restriction-divides-the-original.md (direct)
PASS items/prop-modules-and-homomorphisms-form-category-rmod.md (direct)
PASS items/prop-monoids-and-groups-as-one-object-categories.md (direct)
PASS items/prop-natural-isomorphisms-are-componentwise-isomorphisms.md (direct)
PASS items/prop-nonempty-intersections-of-normal-subextensions-are-normal.md (direct)
PASS items/prop-normal-closure-is-products-of-conjugates.md (direct)
PASS items/prop-normality-descends-to-intermediate-fields.md (direct)
PASS items/prop-normalized-extremal-number-monotonicity.md (direct)
PASS items/prop-of-ab-less-b.md (direct)
PASS items/prop-of-multiply-inequalities.md (direct)
PASS items/prop-of-product-sign.md (cases)
PASS items/prop-of-reciprocal-order.md (direct)
PASS items/prop-order-of-finite-direct-product.md (direct)
PASS items/prop-orthogonal-projection-formula-and-linearity.md (direct)
PASS items/prop-plane-forest-has-one-face.md (induction)
PASS items/prop-polynomial-coefficient-sequences-and-trimmed-lists-agree.md (direct)
PASS items/prop-polynomial-degree-laws-over-a-commutative-ring.md (direct)
PASS items/prop-posets-and-monotone-maps-form-category-poset.md (direct)
PASS items/prop-preorders-as-categories-and-monotone-maps-as-functors.md (direct)
PASS items/prop-primitive-root-iff-unit-group-generator.md (direct)
PASS items/prop-products-over-small-index-sets.md (direct)
PASS items/prop-pythagorean-parallelogram-and-polarisation-identities.md (direct)
PASS items/prop-relative-algebraic-closure-is-relatively-algebraically-closed.md (direct)
PASS items/prop-rings-and-homomorphisms-form-category-ring.md (direct)
PASS items/prop-second-countability-is-hereditary.md (direct)
PASS items/prop-semidirect-product-is-direct-iff-action-is-trivial.md (iff)
PASS items/prop-separable-spaces-are-ccc.md (direct)
PASS items/prop-sets-and-functions-form-category-set.md (direct)
PASS items/prop-size-of-functor-categories.md (direct)
PASS items/prop-splitting-field-of-x-n-minus-a.md (direct)
PASS items/prop-standard-coordinate-inner-products.md (direct)
PASS items/prop-subspace-weight-and-character-inequalities.md (direct)
PASS items/prop-symmetric-polynomials-form-a-subring.md (direct)
PASS items/prop-tietze-transformations-preserve-presented-groups.md (constructive)
PASS items/prop-topological-spaces-and-continuous-maps-form-category-top.md (direct)
PASS items/prop-trace-is-linear.md (direct)
PASS items/prop-transitivity-of-flatness-under-change-of-rings.md (direct)
PASS items/prop-transpose-laws.md (direct)
PASS items/prop-transpose-preserves-identities-and-reverses-composition.md (direct)
PASS items/prop-units-in-a-localisation.md (direct)
PASS items/prop-vandermonde-square-is-symmetric.md (direct)
PASS items/prop-vector-spaces-and-linear-maps-form-category-vect.md (direct)
PASS items/prop-zero-object-induces-zero-morphisms.md (direct)
PASS items/thm-a-compact-hausdorff-space-is-regular-and-normal.md (direct)
PASS items/thm-a-deformation-retract-is-a-homotopy-equivalence.md (direct)
PASS items/thm-a-five-and-symmetric-groups-from-degree-five-are-not-solvable.md (direct)
PASS items/thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse.md (direct)
PASS items/thm-a-linear-continuum-is-connected.md (contradiction)
PASS items/thm-a-locally-compact-hausdorff-space-is-completely-regular.md (direct)
PASS items/thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set.md (constructive)
PASS items/thm-abel-dini.md (direct)
PASS items/thm-abel-limit-theorem.md (direct)
PASS items/thm-abel-test.md (cases)
PASS items/thm-abelianisation-of-a-free-group-is-free-abelian.md (constructive)
PASS items/thm-absolute-convergence-in-rn.md (direct)
PASS items/thm-absolute-convergence-of-complex-series.md (direct)
PASS items/thm-absolute-divergence-from-uniform-tail-mass.md (direct)
PASS items/thm-absolute-improper-convergence-implies-convergence.md (direct)
PASS items/thm-addition-and-subtraction-formulas-for-tangent-cotangent-secant-and-cosecant.md (direct)
PASS items/thm-additivity-over-subintervals.md (direct)
PASS items/thm-adjacent-transpositions-generate-the-symmetric-group.md (direct)
PASS items/thm-adjoint-exists-and-is-unique-in-finite-dimension.md (direct)
PASS items/thm-adjoint-kernel-and-range-orthogonality.md (direct)
PASS items/thm-adjugate-identity-over-a-commutative-ring.md (direct)
PASS items/thm-adjugate-is-equivariant-under-similarity.md (direct)
PASS items/thm-alexander-subbase-lemma.md (contradiction)
PASS items/thm-algebra-of-complex-derivatives.md (direct)
PASS items/thm-algebra-of-continuous-functions.md (direct)
PASS items/thm-algebra-of-derivatives.md (direct)
PASS items/thm-algebra-of-function-limits.md (direct)
PASS items/thm-algebra-of-limits.md (direct)
PASS items/thm-algebra-of-total-derivatives.md (direct)
PASS items/thm-algebraic-elements-form-a-subfield.md (direct)
PASS items/thm-all-norms-on-rn-are-equivalent.md (direct)
PASS items/thm-alternating-conjugacy-class-splitting-criterion.md (iff)
PASS items/thm-alternating-forms-have-a-symplectic-normal-form.md (induction)
PASS items/thm-alternating-group-is-generated-by-three-cycles.md (direct)
PASS items/thm-alternating-group-is-simple-for-n-at-least-five.md (direct)
PASS items/thm-alternating-series-test.md (direct)
PASS items/thm-am-gm.md (induction)
PASS items/thm-an-n-cycle-and-a-neighbour-transposition-generate-the-symmetric-group.md (direct)
PASS items/thm-analytic-sine-cosine-agree-with-right-triangle-ratios.md (direct)
PASS items/thm-any-two-finite-bases-have-the-same-size.md (direct)
PASS items/thm-arc-length-is-additive-over-subintervals.md (two-inequalities)
PASS items/thm-arc-length-is-invariant-under-monotone-reparametrization.md (two-inequalities)
PASS items/thm-arc-length-is-lower-semicontinuous-under-uniform-convergence.md (fixed-partition)
PASS items/thm-archimedean-polygon-perimeter-characterization-of-pi.md (direct)
PASS items/thm-arzela-ascoli-for-real-ck.md (direct)
PASS items/thm-associativity-of-balanced-tensor-products.md (direct)
PASS items/thm-asymmetric-lovasz-local-lemma.md (induction)
PASS items/thm-automorphisms-form-a-group.md (direct)
PASS items/thm-automorphisms-of-a-finite-cyclic-group.md (direct)
PASS items/thm-automorphisms-of-a-finite-rank-free-abelian-group.md (direct)
PASS items/thm-baer-criterion-for-injective-modules.md (direct)
PASS items/thm-baire-category-for-complete-metric-spaces.md (constructive)
PASS items/thm-baire-category-locally-compact-hausdorff.md (direct)
PASS items/thm-baire-category-r.md (constructive)
PASS items/thm-baire-one-continuity-points.md (direct)
PASS items/thm-banach-fixed-point.md (constructive)
PASS items/thm-basic-cardinal-function-inequalities.md (direct)
PASS items/thm-basis-criterion.md (direct)
PASS items/thm-berge-augmenting-path-characterisation.md (direct)
PASS items/thm-bernstein-polynomials-converge-uniformly.md (direct)
PASS items/thm-bessel-inequality-and-finite-parseval-identity.md (direct)
PASS items/thm-bezout-identity-for-polynomials.md (direct)
PASS items/thm-bezout-identity.md (direct)
PASS items/thm-bilinear-forms-correspond-to-linear-maps-into-the-dual.md (direct)
PASS items/thm-bimodule-actions-induced-on-tensor-products.md (direct)
PASS items/thm-bing-metrization.md (cases)
PASS items/thm-binomial-closed-formula.md (direct)
PASS items/thm-binomial-theorem-over-a-commutative-ring.md (induction)
PASS items/thm-binomial-theorem.md (induction)
PASS items/thm-bipartite-iff-no-odd-cycle.md (direct)
PASS items/thm-birkhoff-representation-finite-distributive-lattices.md (constructive)
PASS items/thm-bolzano-weierstrass.md (direct)
PASS items/thm-bondy-chvatal-closure-theorem.md (direct)
PASS items/thm-bourbaki-witt.md (direct)
PASS items/thm-box-finer-than-product.md (direct)
PASS items/thm-burali-forti.md (contradiction)
PASS items/thm-bv-functions-form-an-algebra.md (direct)
PASS items/thm-c-k-complete-in-the-sup-metric.md (direct)
PASS items/thm-c1-lipschitz-ac-bv-hierarchy.md (direct)
PASS items/thm-c1-paths-have-length-equal-to-the-integral-of-speed.md (two-inequalities)
PASS items/thm-c2-holomorphic-components-are-harmonic.md (direct)
PASS items/thm-c2-holomorphic-function-has-holomorphic-derivative.md (direct)
PASS items/thm-camion-strong-tournament-hamiltonian.md (contradiction)
PASS items/thm-canonical-decomposition-of-a-function.md (direct)
PASS items/thm-canonical-map-to-double-dual-is-injective.md (direct)
PASS items/thm-canonical-map-to-double-dual-is-surjective-iff-finite-dimensional.md (direct)
PASS items/thm-canonical-prime-factorisation.md (induction)
PASS items/thm-canonical-ramsey-theorem-for-pairs.md (direct)
PASS items/thm-cantor-cubes-are-ccc.md (contradiction)
PASS items/thm-cantor-function-properties.md (direct)
PASS items/thm-cantor-intersection-metric.md (direct)
PASS items/thm-cantor-normal-form.md (direct)
PASS items/thm-cantor-powerset.md (contradiction)
PASS items/thm-cantor-set-properties.md (direct)
PASS items/thm-cantor-set-ternary-description.md (direct)
PASS items/thm-caratheodory-characterisation.md (direct)
PASS items/thm-cardinal-arithmetic-agrees-with-finite-counting.md (direct)
PASS items/thm-cardinal-comparability-iff-ac.md (direct)
PASS items/thm-cardinal-power-set-and-cantor.md (direct)
PASS items/thm-cardinality-of-a-set-of-functions.md (induction)
PASS items/thm-cardinality-sized-products-or-coproducts-force-a-preorder.md (cardinality-contradiction)
PASS items/thm-carmichael-function-formula.md (direct)
PASS items/thm-category-theoretic-duality-principle.md (direct)
PASS items/thm-cauchy-condensation.md (direct)
PASS items/thm-cauchy-criterion-for-improper-integrals.md (direct)
PASS items/thm-cauchy-criterion-via-lub.md (direct)
PASS items/thm-cauchy-for-finite-abelian-groups.md (induction)
PASS items/thm-cauchy-frobenius-orbit-counting.md (direct)
PASS items/thm-cauchy-functional-equation-regularity.md (cases)
PASS items/thm-cauchy-hadamard-for-complex-power-series.md (direct)
PASS items/thm-cauchy-hadamard-for-real-power-series.md (direct)
PASS items/thm-cauchy-mean-value.md (direct)
PASS items/thm-cauchy-ring.md (direct)
PASS items/thm-cauchy-schwarz-and-the-euclidean-norm.md (direct)
PASS items/thm-cauchy-schwarz-finite.md (direct)
PASS items/thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces.md (direct)
PASS items/thm-cauchys-theorem-for-finite-groups.md (constructive)
PASS items/thm-cayley-formula.md (direct)
PASS items/thm-cayley-hamilton.md (direct)
PASS items/thm-cayleys-theorem.md (direct)
PASS items/thm-central-extensions-and-nilpotency-class.md (direct)
PASS items/thm-centralizer-cardinality-from-cycle-type.md (counting)
PASS items/thm-cesaro-mean-theorem.md (direct)
PASS items/thm-chain-rule-for-complex-derivatives.md (direct)
PASS items/thm-chain-rule-for-total-derivatives.md (direct)
PASS items/thm-chain-rule.md (direct)
PASS items/thm-change-of-basis-for-a-bilinear-form-is-congruence.md (direct)
PASS items/thm-change-of-basis-for-a-sesquilinear-form.md (direct)
PASS items/thm-change-of-basis-matrices-are-inverses.md (direct)
PASS items/thm-change-of-variables-for-compact-jordan-sets.md (local-to-global)
PASS items/thm-character-duals-of-flat-modules-are-injective.md (direct)
PASS items/thm-characteristic-of-a-field-is-zero-or-prime.md (contradiction)
PASS items/thm-characteristic-polynomial-is-similarity-invariant.md (direct)
PASS items/thm-chebyshev-inequality.md (direct)
PASS items/thm-chebyshev-minimax-monic-polynomial.md (contradiction)
PASS items/thm-chebyshev-multiple-angle-identities.md (induction)
PASS items/thm-chernoff-bound-for-independent-random-signs.md (direct)
PASS items/thm-chinese-remainder-theorem.md (induction)
PASS items/thm-chosen-limits-and-colimits-assemble-into-functors.md (universal-property)
PASS items/thm-circle-circumference-diameter-ratio-is-pi.md (direct)
PASS items/thm-clairaut-schwarz-mixed-partials.md (direct)
PASS items/thm-class-equation.md (direct)
PASS items/thm-classification-of-complex-logarithms.md (direct)
PASS items/thm-classification-of-cyclic-groups.md (direct)
PASS items/thm-classification-of-groups-of-order-pq.md (cases)
PASS items/thm-classification-of-moduli-with-primitive-roots.md (direct)
PASS items/thm-clique-independence-chromatic-bounds.md (direct)
PASS items/thm-closed-subspace-of-a-compact-space-is-compact.md (direct)
PASS items/thm-closure-characterisation-top.md (direct)
PASS items/thm-closure-characterisations-r.md (direct)
PASS items/thm-closure-characterised-by-nets.md (constructive)
PASS items/thm-closure-of-a-connected-set.md (direct)
PASS items/thm-cofinality-basics.md (direct)
PASS items/thm-cofunction-supplementary-and-reflection-identities.md (direct)
PASS items/thm-commutative-ring-module-structure-on-a-tensor-product.md (direct)
PASS items/thm-compact-hausdorff-open-cover-uniformity.md (direct)
PASS items/thm-compact-hausdorff-space-has-a-unique-compatible-uniformity.md (direct)
PASS items/thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma.md (constructive)
PASS items/thm-compact-iff-finite-intersection-property.md (direct)
PASS items/thm-compact-iff-fip.md (direct)
PASS items/thm-compact-iff-sequentially-compact-r.md (direct)
PASS items/thm-compact-implies-complete-and-totally-bounded.md (direct)
PASS items/thm-compact-implies-the-other-compactness-forms.md (direct)
PASS items/thm-compact-null-is-content-zero.md (direct)
PASS items/thm-compact-open-equals-compact-convergence.md (direct)
PASS items/thm-compact-subset-is-closed-and-bounded.md (direct)
PASS items/thm-compact-subset-of-a-hausdorff-space-is-closed.md (direct)
PASS items/thm-compactness-agrees-with-metric-compactness.md (direct)
PASS items/thm-compactness-is-necessary-for-evt-and-uniform-continuity.md (constructive)
PASS items/thm-compactness-under-continuous-maps.md (direct)
PASS items/thm-compactness-variants-hierarchy.md (direct)
PASS items/thm-compactness-via-nets-filters-and-ultrafilters.md (direct)
PASS items/thm-comparison-of-the-three-function-space-topologies.md (direct)
PASS items/thm-comparison-test-for-improper-integrals.md (direct)
PASS items/thm-complementation-preserves-hereditary-classes-and-bases.md (direct)
PASS items/thm-complete-and-totally-bounded-implies-compact.md (contradiction)
PASS items/thm-complete-and-totally-bounded-uniform-spaces-are-compact.md (direct)
PASS items/thm-complete-graph-free-classes-are-erdos-hajnal.md (direct)
PASS items/thm-complete-subspace-iff-closed.md (direct)
PASS items/thm-completely-normal-iff-hereditarily-normal.md (direct)
PASS items/thm-completely-normal-implies-normal.md (direct)
PASS items/thm-completely-regular-implies-regular.md (direct)
PASS items/thm-completeness-equivalences.md (direct)
PASS items/thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann.md (direct)
PASS items/thm-complex-exponential-addition-and-real-extension.md (direct)
PASS items/thm-complex-exponential-is-entire-with-derivative-itself.md (direct)
PASS items/thm-complex-exponential-surjects-onto-the-punctured-plane.md (constructive)
PASS items/thm-complex-nth-roots-and-roots-of-unity.md (constructive)
PASS items/thm-complex-numbers-are-the-real-coordinate-plane.md (direct)
PASS items/thm-complex-numbers-form-a-field.md (direct)
PASS items/thm-complex-plane-is-complete.md (direct)
PASS items/thm-complex-polynomials-and-rational-functions-are-holomorphic.md (direct)
PASS items/thm-complex-trigonometric-hyperbolic-dictionary.md (direct)
PASS items/thm-components-partition-and-are-closed.md (direct)
PASS items/thm-componentwise-convergence-and-completeness.md (direct)
PASS items/thm-componentwise-limits-and-continuity.md (direct)
PASS items/thm-composition-of-continuous-functions.md (direct)
PASS items/thm-composition-of-function-limits.md (cases)
PASS items/thm-composition-respects-homotopy.md (direct)
PASS items/thm-composition-with-a-continuous-function.md (direct)
PASS items/thm-conditional-probability-multiplication-and-chain-rules.md (induction)
PASS items/thm-conjugacy-class-cardinality.md (direct)
PASS items/thm-conjugacy-of-cyclically-reduced-words.md (induction)
PASS items/thm-conjugate-difference-quotient-characterizes-antiholomorphic-maps.md (direct)
PASS items/thm-conjugate-subgroups-are-counted-by-the-normalizer.md (direct)
PASS items/thm-conjugates-of-proper-subgroup-do-not-cover-finite-group.md (direct)
PASS items/thm-conjugation-homomorphism.md (direct)
PASS items/thm-conjugation-is-an-automorphism.md (direct)
PASS items/thm-connected-and-locally-path-connected-implies-path-connected.md (direct)
PASS items/thm-connected-iff-has-spanning-tree.md (direct)
PASS items/thm-connected-subsets-of-r-are-intervals.md (direct)
PASS items/thm-connectedness-characterisations.md (direct)
PASS items/thm-conservative-path-independent-and-zero-loop-equivalence.md (direct)
PASS items/thm-continuity-characterisations-top.md (direct)
PASS items/thm-continuity-characterised-by-nets.md (contradiction)
PASS items/thm-continuity-iff-oscillation-zero.md (direct)
PASS items/thm-continuity-preimage-characterisation.md (direct)
PASS items/thm-continuity-set-realisation.md (constructive)
PASS items/thm-continuous-bijection-from-a-compact-space-has-continuous-inverse.md (direct)
PASS items/thm-continuous-functions-on-compact-jordan-sets-are-integrable.md (direct)
PASS items/thm-continuous-image-of-a-compact-set-r.md (direct)
PASS items/thm-continuous-image-of-a-compact-space-is-compact.md (direct)
PASS items/thm-continuous-image-of-a-connected-space.md (direct)
PASS items/thm-continuous-implies-integrable.md (direct)
PASS items/thm-continuous-injection-on-an-interval-is-strictly-monotone.md (contradiction)
PASS items/thm-continuous-inverse.md (direct)
PASS items/thm-continuous-midpoint-convex-functions-are-convex.md (direct)
PASS items/thm-continuous-on-a-rectangle-is-riemann-integrable.md (direct)
PASS items/thm-continuous-partial-derivatives-imply-total-differentiability.md (direct)
PASS items/thm-continuous-partials-and-cauchy-riemann-imply-holomorphic.md (direct)
PASS items/thm-contractive-implies-cauchy.md (induction)
PASS items/thm-convergence-iff-limsup-equals-liminf.md (direct)
PASS items/thm-convex-functions-are-differentiable-off-a-countable-set.md (direct)
PASS items/thm-convex-functions-are-locally-lipschitz-and-continuous.md (direct)
PASS items/thm-convex-subsets-have-trivial-fundamental-group.md (direct)
PASS items/thm-coordinate-action-of-a-linear-map.md (direct)
PASS items/thm-coproduct-property-of-tensor-products-of-commutative-algebras.md (direct)
PASS items/thm-coproduct-universal-property.md (direct)
PASS items/thm-correspondence-theorem-groups.md (direct)
PASS items/thm-correspondence-theorem-ideals.md (direct)
PASS items/thm-coset-multiplication-well-defined-iff-normal.md (direct)
PASS items/thm-cosine-has-a-smallest-positive-zero.md (direct)
PASS items/thm-countable-products-of-first-countable-spaces.md (constructive)
PASS items/thm-countable-products-of-second-countable-spaces.md (constructive)
PASS items/thm-countable-subsets-of-omega-one-are-bounded.md (direct)
PASS items/thm-countable-union-of-countable.md (direct)
PASS items/thm-countable-union-of-null-is-null.md (direct)
PASS items/thm-countably-based-uniformity-is-pseudometrizable.md (constructive)
PASS items/thm-counting-lemma-for-a-fixed-graph.md (direct)
PASS items/thm-covariance-bilinearity-and-symmetry.md (direct)
PASS items/thm-cramers-rule-over-a-commutative-ring.md (direct)
PASS items/thm-cut-and-cycle-properties-for-minimum-spanning-trees.md (direct)
PASS items/thm-cyclic-decomposition-of-finite-abelian-p-groups.md (induction)
PASS items/thm-darboux-equals-riemann.md (direct)
PASS items/thm-darboux-theorem-for-derivatives.md (cases)
PASS items/thm-de-morgan-laws.md (direct)
PASS items/thm-decimal-expansions.md (constructive)
PASS items/thm-dedekind-complete.md (direct)
PASS items/thm-dense-finite-graph-is-connected.md (contradiction)
PASS items/thm-derivative-linear-approximation-form.md (direct)
PASS items/thm-derivative-of-a-continuous-complex-local-inverse.md (direct)
PASS items/thm-derivative-of-an-inverse.md (direct)
PASS items/thm-derivative-of-exponential.md (direct)
PASS items/thm-derived-subgroup-is-characteristic-and-abelianization-is-universal.md (direct)
PASS items/thm-determinant-is-product-of-eigenvalues.md (direct)
PASS items/thm-determinant-is-the-unique-normalized-alternating-multilinear-function.md (direct)
PASS items/thm-determinant-multiplicative.md (direct)
PASS items/thm-determinant-of-a-triangular-matrix.md (direct)
PASS items/thm-determinant-of-transpose.md (direct)
PASS items/thm-determinant-under-elementary-row-operations.md (direct)
PASS items/thm-diagonal-ramsey-counting-lower-bound.md (direct)
PASS items/thm-diagonalisability-eigenspace-direct-sum-criterion.md (direct)
PASS items/thm-diagonalisable-iff-characteristic-polynomial-splits-and-multiplicities-agree.md (direct)
PASS items/thm-diagonalisable-iff-minimal-polynomial-splits-with-distinct-roots.md (direct)
PASS items/thm-differentiable-convex-functions-and-monotone-derivatives.md (cases)
PASS items/thm-differentiation-under-the-integral-sign-on-a-compact-rectangle.md (epsilon-delta)
PASS items/thm-dilworth-finite-posets.md (induction)
PASS items/thm-dimension-formula.md (constructive)
PASS items/thm-dimension-of-a-linear-subspace.md (direct)
PASS items/thm-dini-on-a-closed-interval.md (direct)
PASS items/thm-dini.md (direct)
PASS items/thm-direct-comparison-test.md (direct)
PASS items/thm-direct-sums-of-projectives-and-enough-projectives.md (constructive)
PASS items/thm-directed-euler-circuit-characterisation.md (direct)
PASS items/thm-dirichlet-and-thomae-continuity-sets.md (cases)
PASS items/thm-dirichlet-divergence-transfer.md (contradiction)
PASS items/thm-dirichlet-rearrangement.md (direct)
PASS items/thm-dirichlet-test-for-improper-integrals.md (cases)
PASS items/thm-dirichlet-test.md (direct)
PASS items/thm-disc-area-is-pi-r-squared.md (direct)
PASS items/thm-discontinuity-set-is-f-sigma.md (direct)
PASS items/thm-discriminant-root-formula-and-repeated-root-criterion.md (direct)
PASS items/thm-disjoint-cycle-decomposition.md (direct)
PASS items/thm-distributive-laws-for-union-and-intersection.md (direct)
PASS items/thm-division-algorithm-in-z.md (direct)
PASS items/thm-double-angle-and-power-reduction-identities.md (direct)
PASS items/thm-double-annihilator-and-annihilator-dimension.md (direct)
PASS items/thm-double-counting.md (direct)
PASS items/thm-double-series-fubini.md (direct)
PASS items/thm-dual-family-does-not-span-in-infinite-dimension.md (direct)
PASS items/thm-dual-family-is-a-basis-in-finite-dimension.md (direct)
PASS items/thm-e-is-irrational.md (contradiction)
PASS items/thm-eckmann-hilton-argument.md (direct)
PASS items/thm-eigenvectors-for-distinct-eigenvalues-are-linearly-independent.md (induction)
PASS items/thm-eisenstein-irreducibility-criterion.md (contradiction)
PASS items/thm-elementary-row-operations-are-left-multiplication.md (direct)
PASS items/thm-elementary-symmetric-polynomials-are-algebraically-independent.md (contradiction)
PASS items/thm-entourage-uniformities-are-generated-by-gauges.md (constructive)
PASS items/thm-equivalence-of-constructions.md (direct)
PASS items/thm-erdos-high-girth-and-high-chromatic-number.md (constructive)
PASS items/thm-erdos-ko-rado.md (direct)
PASS items/thm-erdos-rado-sunflower-lemma.md (induction)
PASS items/thm-erdos-stone-for-balanced-blowups.md (direct)
PASS items/thm-erdos-stone-simonovits.md (direct)
PASS items/thm-erdos-sum-free-subset-bound.md (constructive)
PASS items/thm-erdos-szekeres.md (contradiction)
PASS items/thm-euclid-infinitude-of-primes.md (contradiction)
PASS items/thm-euclidean-algorithm.md (induction)
PASS items/thm-euclidean-domain-is-a-pid.md (direct)
PASS items/thm-euclidean-heine-borel-pseudocompactness-and-extreme-values.md (direct)
PASS items/thm-euclidean-implicit-function-theorem.md (reduction)
PASS items/thm-euclidean-inverse-function-theorem.md (contraction)
PASS items/thm-euclidean-space-complete.md (direct)
PASS items/thm-euclids-lemma.md (cases)
PASS items/thm-euler-formula-for-connected-plane-graphs.md (induction)
PASS items/thm-euler-mascheroni-constant-and-harmonic-asymptotic.md (direct)
PASS items/thm-euler-totient-product-formula.md (direct)
PASS items/thm-eulers-criterion-for-binomial-congruences.md (direct)
PASS items/thm-eulers-euler-circuit-characterisation.md (direct)
PASS items/thm-eulers-formula.md (direct)
PASS items/thm-eulers-theorem.md (direct)
PASS items/thm-evaluation-is-continuous-on-a-locally-compact-metric-domain.md (direct)
PASS items/thm-evaluation-kernel-and-minimal-polynomial.md (direct)
PASS items/thm-event-independence-and-indicator-independence.md (direct)
PASS items/thm-event-independence-via-conditioning.md (direct)
PASS items/thm-every-complex-number-has-a-square-root.md (cases)
PASS items/thm-every-equivalence-can-be-made-an-adjoint-equivalence.md (direct)
PASS items/thm-every-finite-group-has-a-composition-series.md (induction)
PASS items/thm-every-group-has-a-presentation.md (direct)
PASS items/thm-every-independent-set-extends-to-a-basis.md (constructive)
PASS items/thm-every-infinite-cardinal-is-an-aleph.md (direct)
PASS items/thm-every-nontrivial-graph-is-connected-or-anticonnected.md (direct)
PASS items/thm-every-rectifiable-path-has-an-arc-length-parametrization.md (factorization)
PASS items/thm-exact-c1-vector-fields-are-closed.md (direct)
PASS items/thm-existence-of-finite-fields.md (constructive)
PASS items/thm-expectation-monotonicity-and-bounds.md (direct)
PASS items/thm-expectation-of-products-of-independent-random-variables.md (direct)
PASS items/thm-exponential-addition-formula.md (direct)
PASS items/thm-exponential-beats-every-polynomial.md (direct)
PASS items/thm-exponential-correspondence-is-continuous.md (direct)
PASS items/thm-exponential-definition-equivalence.md (direct)
PASS items/thm-exponential-is-strictly-increasing.md (direct)
PASS items/thm-exponential-ivp-uniqueness.md (direct)
PASS items/thm-exponential-limits-and-range.md (direct)
PASS items/thm-exponential-product-limit.md (direct)
PASS items/thm-exponential-two-point-convexity.md (direct)
PASS items/thm-extension-of-scalars-is-left-adjoint-to-restriction.md (direct)
PASS items/thm-extensions-and-direct-products-of-solvable-groups-are-solvable.md (direct)
PASS items/thm-external-direct-product-is-a-group.md (direct)
PASS items/thm-external-semidirect-product-is-a-group.md (direct)
PASS items/thm-extremal-graph-supersaturation.md (direct)
PASS items/thm-extreme-value-metric.md (direct)
PASS items/thm-extreme-value-r.md (direct)
PASS items/thm-factorial-coordinate-bound-for-a-splitting-field.md (induction)
PASS items/thm-factorization-of-x-qn-minus-x.md (direct)
PASS items/thm-fat-cantor-set-has-positive-measure.md (contradiction)
PASS items/thm-fermat-for-euclidean-local-extrema.md (direct)
PASS items/thm-fermat-interior-extremum.md (contradiction)
PASS items/thm-fermats-little-theorem.md (cases)
PASS items/thm-field-of-fractions-is-a-field-and-the-domain-embeds.md (direct)
PASS items/thm-filtered-colimits-commute-with-finite-limits-in-set.md (representatives)
PASS items/thm-final-functors-do-not-change-colimits-and-initial-functors-do-not-change-limits.md (cocone-equivalence)
PASS items/thm-finite-abelian-groups-decompose-into-indecomposable-subgroups.md (induction)
PASS items/thm-finite-additivity-of-probability.md (direct)
PASS items/thm-finite-bayes-theorem.md (direct)
PASS items/thm-finite-dimensional-isometry-characterisations.md (equivalence)
PASS items/thm-finite-dimensional-orthogonal-decomposition.md (direct)
PASS items/thm-finite-field-extensions-are-algebraic.md (direct)
PASS items/thm-finite-fields-have-prime-power-order.md (direct)
PASS items/thm-finite-free-bases-have-the-same-cardinality.md (direct)
PASS items/thm-finite-graph-ramsey-binomial-bound.md (induction)
PASS items/thm-finite-index-core-bound-and-finite-overgroups.md (direct)
PASS items/thm-finite-jensen-inequality.md (induction)
PASS items/thm-finite-law-of-total-probability.md (direct)
PASS items/thm-finite-limit-and-colimit-criteria.md (equivalence)
PASS items/thm-finite-p-groups-are-nilpotent.md (induction)
PASS items/thm-finite-products-of-compact-spaces.md (induction)
PASS items/thm-finite-ramsey-for-uniform-subsets.md (induction)
PASS items/thm-finite-second-moment-lower-bound.md (cases)
PASS items/thm-finite-solvable-iff-composition-factors-have-prime-order.md (direct)
PASS items/thm-finite-union-bound.md (direct)
PASS items/thm-finitely-generated-algebraic-extensions-are-finite.md (direct)
PASS items/thm-finitely-many-discontinuities-integrable.md (direct)
PASS items/thm-first-countable-frechet-urysohn-sequential-hierarchy.md (direct)
PASS items/thm-first-countable-sequences-suffice.md (direct)
PASS items/thm-first-isomorphism-theorem-groups.md (direct)
PASS items/thm-first-isomorphism-theorem-modules.md (direct)
PASS items/thm-first-isomorphism-theorem-rings.md (direct)
PASS items/thm-first-mean-value-theorem-for-integrals.md (direct)
PASS items/thm-first-moment-method.md (direct)
PASS items/thm-first-nonzero-derivative-test.md (cases)
PASS items/thm-five-colour-theorem.md (induction)
PASS items/thm-five-lemma-for-modules.md (direct)
PASS items/thm-flat-quotients-preserve-short-exact-tensor-sequences.md (direct)
PASS items/thm-flatness-criteria-by-injections-and-ideals.md (direct)
PASS items/thm-ford-fulkerson-integral-max-flow-min-cut.md (constructive)
PASS items/thm-forest-edge-component-count.md (induction)
PASS items/thm-formal-composition-laws.md (direct)
PASS items/thm-formal-compositional-inverse.md (direct)
PASS items/thm-formal-exponential-logarithm-identities.md (direct)
PASS items/thm-formal-power-laurent-dictionary.md (direct)
PASS items/thm-formal-power-series-ring-and-polynomial-embedding.md (direct)
PASS items/thm-formal-power-series-unit-criterion.md (direct)
PASS items/thm-foundation-excludes-membership-cycles.md (contradiction)
PASS items/thm-free-groups-are-torsion-free.md (direct)
PASS items/thm-free-groups-unique-up-to-unique-isomorphism.md (constructive)
PASS items/thm-free-modules-are-projective-with-choice-boundary.md (constructive)
PASS items/thm-free-product-of-free-groups-on-disjoint-bases.md (direct)
PASS items/thm-frobenius-cesaro-implies-abel-summability.md (direct)
PASS items/thm-frobenius-endomorphism-and-finite-field-automorphism.md (direct)
PASS items/thm-froda.md (direct)
PASS items/thm-frullani-integral-proper-factor.md (direct)
PASS items/thm-ftc-first-part.md (direct)
PASS items/thm-ftc-second-part.md (direct)
PASS items/thm-fubini-over-a-region-between-continuous-graphs.md (direct)
PASS items/thm-fully-faithful-split-essentially-surjective-characterises-equivalence.md (direct)
PASS items/thm-function-space-is-complete-for-a-complete-target.md (direct)
PASS items/thm-fundamental-group-laws.md (direct)
PASS items/thm-fundamental-theorem-of-algebra-minimum-modulus-proof.md (contradiction)
PASS items/thm-fundamental-theorem-of-arithmetic.md (induction)
PASS items/thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form.md (direct)
PASS items/thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form.md (direct)
PASS items/thm-fundamental-theorem-of-symmetric-polynomials-existence.md (direct)
PASS items/thm-fundamental-theorem-of-symmetric-polynomials.md (direct)
PASS items/thm-gallai-matching-edge-cover-identity.md (constructive)
PASS items/thm-gauss-jordan-elimination-produces-reduced-row-echelon-form.md (constructive)
PASS items/thm-gauss-lemma-for-integer-polynomials.md (direct)
PASS items/thm-gauss-test.md (cases)
PASS items/thm-gaussian-elimination-produces-row-echelon-form.md (constructive)
PASS items/thm-gcd-and-lcm-from-valuations.md (direct)
PASS items/thm-gcd-generates-the-subgroup.md (direct)
PASS items/thm-gcd-lcm-product.md (cases)
PASS items/thm-general-leibniz-rule.md (induction)
PASS items/thm-generalised-associativity.md (induction)
PASS items/thm-generated-ideal-description-in-a-commutative-ring.md (direct)
PASS items/thm-geometric-multiplicity-does-not-exceed-algebraic-multiplicity.md (direct)
PASS items/thm-geometric-series.md (cases)
PASS items/thm-gradient-represents-directional-derivatives-and-steepest-ascent.md (cases)
PASS items/thm-gradient-theorem-for-line-integrals.md (direct)
PASS items/thm-gram-determinant-detects-linear-independence.md (direct)
PASS items/thm-gram-schmidt-orthonormalisation.md (induction)
PASS items/thm-graph-removal-lemma.md (contraposition)
PASS items/thm-graphs-of-continuous-functions-have-content-zero.md (constructive)
PASS items/thm-greens-theorem-for-finite-unions-of-elementary-regions.md (direct)
PASS items/thm-gregory-leibniz-series-for-pi-from-a-finite-remainder.md (direct)
PASS items/thm-group-actions-correspond-to-homomorphisms.md (direct)
PASS items/thm-group-homomorphism-injective-iff-trivial-kernel.md (direct)
PASS items/thm-group-pushout-as-an-amalgamated-quotient.md (direct)
PASS items/thm-grouping-of-series.md (direct)
PASS items/thm-grp-is-complete-and-cocomplete.md (constructions-and-criteria)
PASS items/thm-half-angle-identities-with-sign-conditions.md (direct)
PASS items/thm-hall-marriage-finite-bipartite.md (induction)
PASS items/thm-hamilton-cycle-vertex-deletion-bound.md (direct)
PASS items/thm-handshake-lemma-for-finite-simple-graphs.md (direct)
PASS items/thm-harmonic-oscillator-initial-value-characterization.md (direct)
PASS items/thm-hartogs.md (contradiction)
PASS items/thm-hausdorff-completion-of-a-uniform-space.md (constructive)
PASS items/thm-hausdorff-iff-net-limits-are-unique.md (constructive)
PASS items/thm-hausdorff-iff-the-diagonal-is-closed.md (direct)
PASS items/thm-heine-borel-characterisation-r.md (direct)
PASS items/thm-heine-borel-r.md (contradiction)
PASS items/thm-heine-borel-rn.md (direct)
PASS items/thm-heine-cantor-metric.md (direct)
PASS items/thm-heine-cantor-r.md (contradiction)
PASS items/thm-hereditary-classes-have-a-unique-minimal-forbidden-basis.md (direct)
PASS items/thm-hessenberg.md (direct)
PASS items/thm-holder-exponent-above-one-forces-constancy.md (direct)
PASS items/thm-holder-finite-real-exponents.md (direct)
PASS items/thm-holder-finite.md (direct)
PASS items/thm-hom-assignment-is-a-bifunctor.md (direct)
PASS items/thm-hom-assignments-are-functors.md (direct)
PASS items/thm-hom-from-a-finite-dimensional-space-as-a-tensor-product.md (direct)
PASS items/thm-hom-functors-are-left-exact.md (direct)
PASS items/thm-hom-tensor-adjunction-for-modules.md (direct)
PASS items/thm-homotopy-equivalence-is-an-equivalence-relation.md (direct)
PASS items/thm-hyperbolic-identities-and-derivatives.md (direct)
PASS items/thm-hypergraph-kovari-sos-turan-bound.md (direct)
PASS items/thm-hypergraph-two-colouring-by-first-moment.md (direct)
PASS items/thm-hypergraph-two-colouring-by-local-lemma.md (direct)
PASS items/thm-ideal-correspondence-for-localisation.md (direct)
PASS items/thm-identity-theorem-for-real-analytic-functions-on-an-interval.md (direct)
PASS items/thm-image-subgroup-and-kernel-normal.md (direct)
PASS items/thm-improper-convergence-implies-principal-value.md (direct)
PASS items/thm-improper-p-test-rational.md (cases)
PASS items/thm-incidence-algebra-invertibility-criterion.md (direct)
PASS items/thm-incidence-functions-form-a-ring.md (direct)
PASS items/thm-inclusion-exclusion.md (direct)
PASS items/thm-inclusion-of-integers-in-rationals-is-monic-epic-not-iso-in-ring.md (direct)
PASS items/thm-index-two-subgroup-is-normal.md (direct)
PASS items/thm-induced-counting-lemma-for-regular-pairs.md (direct)
PASS items/thm-induced-fundamental-group-map-functoriality.md (direct)
PASS items/thm-induced-graph-removal-lemma.md (contraposition)
PASS items/thm-induction-principle.md (direct)
PASS items/thm-infimum-property.md (direct)
PASS items/thm-infinite-product-criterion.md (direct)
PASS items/thm-infinite-ramsey-on-the-naturals.md (induction)
PASS items/thm-initial-and-final-characteristic-properties.md (direct)
PASS items/thm-initial-and-terminal-objects-are-unique-up-to-unique-isomorphism.md (direct)
PASS items/thm-injective-c-one-images-of-compact-jordan-sets-are-jordan.md (local-to-global)
PASS items/thm-injective-module-characterizations.md (direct)
PASS items/thm-injective-modules-over-a-pid-are-exactly-divisible.md (direct)
PASS items/thm-inner-automorphisms-normal-in-automorphism-group.md (direct)
PASS items/thm-int-comm-ring.md (direct)
PASS items/thm-int-ordered-ring.md (direct)
PASS items/thm-integers-modulo-n-basic-algebra.md (direct)
PASS items/thm-integral-exponential-agrees-with-exponential.md (direct)
PASS items/thm-integral-exponential-solves-the-normalised-ivp.md (direct)
PASS items/thm-integral-logarithm-derivative-and-normalisation.md (direct)
PASS items/thm-integral-logarithm-is-a-bijection.md (direct)
PASS items/thm-integral-logarithm-is-unbounded.md (direct)
PASS items/thm-integral-logarithm-product-law.md (direct)
PASS items/thm-integral-test-for-series.md (direct)
PASS items/thm-integration-by-parts-with-interior-derivatives.md (direct)
PASS items/thm-integration-by-parts.md (direct)
PASS items/thm-interchange-law-for-natural-transformations.md (direct)
PASS items/thm-intermediate-value.md (constructive)
PASS items/thm-internal-direct-product-recognition.md (direct)
PASS items/thm-internal-external-semidirect-product-equivalence.md (iff)
PASS items/thm-invariant-restrictions-of-diagonalisable-endomorphisms-are-diagonalisable.md (direct)
PASS items/thm-inverse-hyperbolic-logarithm-formulas.md (direct)
PASS items/thm-invertible-matrices-correspond-to-linear-isomorphisms.md (direct)
PASS items/thm-invertible-matrices-factor-into-elementary-matrices.md (constructive)
PASS items/thm-invertible-matrix-theorem.md (direct)
PASS items/thm-irreducible-polynomials-over-a-field-are-prime.md (direct)
PASS items/thm-irreducible-quotient-adjoins-a-root.md (direct)
PASS items/thm-isomorphisms-extend-to-splitting-fields.md (induction)
PASS items/thm-jordan-boundary-criterion.md (direct)
PASS items/thm-jordan-content-and-indicator-integrability.md (direct)
PASS items/thm-jordan-decomposition-for-bv-functions.md (direct)
PASS items/thm-jordan-fubini-by-sections.md (direct)
PASS items/thm-jordan-holder-theorem-for-groups.md (direct)
PASS items/thm-jordans-derangement-theorem.md (contradiction)
PASS items/thm-kernel-and-fibres-of-complex-exponential.md (direct)
PASS items/thm-konig-bipartite-matching-cover.md (direct)
PASS items/thm-konig-infinity-lemma-for-ordered-trees.md (constructive)
PASS items/thm-konig.md (contradiction)
PASS items/thm-kovari-sos-turan-bound.md (direct)
PASS items/thm-kruskals-minimum-spanning-tree-algorithm.md (induction)
PASS items/thm-kummer-test.md (direct)
PASS items/thm-kuratowski-closure-axioms.md (direct)
PASS items/thm-kuratowski-wagner-planarity-characterisation.md (direct)
PASS items/thm-lagrange-burmann-inversion.md (direct)
PASS items/thm-lagrange.md (direct)
PASS items/thm-landau-logarithm-limit.md (direct)
PASS items/thm-laplace-cofactor-expansion.md (direct)
PASS items/thm-large-self-regular-subset.md (direct)
PASS items/thm-laurent-cauchy-complete.md (constructive)
PASS items/thm-laurent-ordered-field.md (direct)
PASS items/thm-laurent-series-field.md (constructive)
PASS items/thm-least-squares-solutions-and-normal-equation.md (direct)
PASS items/thm-lebesgue-criterion-in-rn.md (direct)
PASS items/thm-lebesgue-criterion.md (direct)
PASS items/thm-lebesgue-number-lemma.md (direct)
PASS items/thm-left-coset-action-and-its-kernel.md (direct)
PASS items/thm-leibniz-determinant-is-alternating-multilinear-and-normalized.md (direct)
PASS items/thm-lhopital-infinity-over-infinity.md (direct)
PASS items/thm-lhopital-zero-over-zero.md (direct)
PASS items/thm-limit-comparison-test.md (cases)
PASS items/thm-limits-and-colimits-are-unique-up-to-unique-compatible-isomorphism.md (universal-property)
PASS items/thm-limits-and-colimits-in-functor-categories-are-computed-pointwise.md (pointwise-construction)
PASS items/thm-limsup-is-greatest-subsequential-limit.md (constructive)
PASS items/thm-limsup-subadditive.md (direct)
PASS items/thm-limsup-submultiplicative.md (direct)
PASS items/thm-line-integrals-under-oriented-reparametrization.md (direct)
PASS items/thm-line-integrals-under-reversal-and-concatenation.md (direct)
PASS items/thm-linear-congruence-solvability-and-solution-count.md (direct)
PASS items/thm-linear-images-scale-jordan-content-by-absolute-determinant.md (constructive)
PASS items/thm-linear-kernel-image-and-injectivity.md (direct)
PASS items/thm-linearity-of-expectation.md (direct)
PASS items/thm-linearity-of-improper-integrals.md (direct)
PASS items/thm-linearity-of-the-integral.md (direct)
PASS items/thm-lipschitz-images-of-null-sets-in-rn-are-null.md (cases)
PASS items/thm-local-lym-inequality.md (direct)
PASS items/thm-local-ring-unit-characterisations.md (direct)
PASS items/thm-localisation-at-a-prime-is-local.md (direct)
PASS items/thm-localisation-commutes-with-quotients.md (constructive)
PASS items/thm-localisation-equivalence-and-ring-laws.md (direct)
PASS items/thm-locally-compact-hausdorff-basics.md (direct)
PASS items/thm-locally-connected-iff-components-of-open-sets-are-open.md (direct)
PASS items/thm-log-one-plus-x-power-series.md (direct)
PASS items/thm-logarithm-change-of-base.md (direct)
PASS items/thm-logarithm-continuous-functional-equation-characterisation.md (direct)
PASS items/thm-logarithm-definition-equivalence.md (direct)
PASS items/thm-logarithm-derivative-and-integral.md (direct)
PASS items/thm-logarithm-differentiable-functional-equation-characterisation.md (direct)
PASS items/thm-logarithm-slower-than-every-positive-power.md (direct)
PASS items/thm-lym-inequality.md (direct)
PASS items/thm-mantel-exact-and-unique.md (direct)
PASS items/thm-markov-inequality.md (direct)
PASS items/thm-matrix-multiplication-laws.md (direct)
PASS items/thm-matrix-of-a-composite-is-the-product.md (direct)
PASS items/thm-matrix-of-the-adjoint-is-the-conjugate-transpose.md (direct)
PASS items/thm-matrix-of-transpose-is-the-transposed-matrix.md (direct)
PASS items/thm-matrix-representation-is-a-vector-space-isomorphism.md (direct)
PASS items/thm-max-cut-at-least-half-the-edges.md (direct)
PASS items/thm-maximal-order-cyclic-subgroup-splits-in-a-finite-abelian-p-group.md (induction)
PASS items/thm-mean-value-inequality-for-total-derivatives.md (direct)
PASS items/thm-mean-value-inequality.md (direct)
PASS items/thm-menger-finite-directed-and-undirected-path-forms.md (constructive)
PASS items/thm-mertens.md (direct)
PASS items/thm-metric-closure-characterisation.md (direct)
PASS items/thm-metric-compactness-equivalences.md (direct)
PASS items/thm-metric-completion-exists.md (constructive)
PASS items/thm-metric-completion-unique.md (direct)
PASS items/thm-metric-continuity-characterisations.md (direct)
PASS items/thm-metric-countability-equivalences.md (direct)
PASS items/thm-metric-equivalence-hierarchy.md (direct)
PASS items/thm-metric-hausdorff-separation.md (direct)
PASS items/thm-metric-open-set-algebra.md (direct)
PASS items/thm-metric-regularity-hierarchy.md (direct)
PASS items/thm-metric-sequential-closure.md (direct)
PASS items/thm-metric-spaces-are-completely-normal.md (direct)
PASS items/thm-metric-spaces-are-tychonoff-and-perfectly-normal.md (direct)
PASS items/thm-metric-weight-equals-density.md (direct)
PASS items/thm-minimal-and-characteristic-polynomials-have-the-same-irreducible-factors.md (direct)
PASS items/thm-minimal-polynomial-is-matrix-representation-and-similarity-invariant.md (direct)
PASS items/thm-minimal-polynomial-is-well-defined-and-controls-annihilators.md (direct)
PASS items/thm-minimum-degree-forces-a-long-path.md (constructive)
PASS items/thm-minkowski-finite-real-exponents.md (direct)
PASS items/thm-minkowski-finite.md (direct)
PASS items/thm-mirsky-finite-posets.md (direct)
PASS items/thm-mobius-function-of-a-boolean-lattice.md (direct)
PASS items/thm-mobius-function-of-a-finite-chain.md (induction)
PASS items/thm-mobius-function-of-a-product-poset.md (direct)
PASS items/thm-mobius-inversion-for-lower-finite-posets.md (direct)
PASS items/thm-module-categories-have-enough-injectives.md (constructive)
PASS items/thm-module-kernel-image-and-injectivity.md (direct)
PASS items/thm-monic-polynomial-division.md (induction)
PASS items/thm-monic-resultant-as-a-double-root-product.md (direct)
PASS items/thm-monic-resultant-root-product-and-common-root-criterion.md (direct)
PASS items/thm-monomial-symmetric-polynomials-form-a-basis.md (direct)
PASS items/thm-monomorphisms-and-epimorphisms-in-set.md (direct)
PASS items/thm-monotone-change-of-variable-for-riemann-integrals.md (direct)
PASS items/thm-monotone-convergence.md (direct)
PASS items/thm-monotone-discontinuities-are-jumps.md (direct)
PASS items/thm-monotone-implies-integrable.md (cases)
PASS items/thm-monotone-one-sided-limits-exist.md (direct)
PASS items/thm-monotone-with-prescribed-discontinuity-set.md (constructive)
PASS items/thm-monotonicity-from-the-derivative.md (direct)
PASS items/thm-monotonicity-of-the-integral.md (direct)
PASS items/thm-mostowski-collapse.md (direct)
PASS items/thm-multidimensional-darboux-equals-riemann.md (direct)
PASS items/thm-multidimensional-integral-properties.md (direct)
PASS items/thm-multidimensional-riemann-criterion.md (direct)
PASS items/thm-multinomial-theorem.md (induction)
PASS items/thm-multiplicative-group-of-a-finite-field-is-cyclic.md (direct)
PASS items/thm-multivariable-second-derivative-test.md (direct)
PASS items/thm-multivariable-taylor-formula-with-lagrange-remainder.md (direct)
PASS items/thm-n-cross-n-countable.md (direct)
PASS items/thm-nagata-smirnov-metrization.md (cases)
PASS items/thm-nat-linear-order.md (direct)
PASS items/thm-natural-logarithm-laws.md (direct)
PASS items/thm-nested-interval-property.md (direct)
PASS items/thm-net-cluster-point-iff-convergent-subnet.md (constructive)
PASS items/thm-net-filter-convergence-dictionary.md (direct)
PASS items/thm-newton-leibniz-with-a-countable-exceptional-set.md (squeeze)
PASS items/thm-newton-leibniz-with-interior-derivative.md (squeeze)
PASS items/thm-newtons-identities.md (direct)
PASS items/thm-no-continuous-logarithm-on-the-punctured-complex-plane.md (contradiction)
PASS items/thm-nonnegative-continuous-with-zero-integral-vanishes.md (contradiction)
PASS items/thm-nonnegative-improper-integral-bounded-primitive-criterion.md (direct)
PASS items/thm-nonnegative-series-bounded-partial-sums.md (direct)
PASS items/thm-nontrivial-center-of-a-finite-p-group.md (direct)
PASS items/thm-nonzero-commutative-rings-have-invariant-basis-number.md (direct)
PASS items/thm-nonzero-complex-derivative-iff-oriented-conformal.md (direct)
PASS items/thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots.md (induction)
PASS items/thm-norm-inequality-for-the-vector-valued-integral.md (direct)
PASS items/thm-normal-form-for-free-products-with-amalgamation.md (direct)
PASS items/thm-normal-form-for-free-products.md (direct)
PASS items/thm-normal-form-for-the-word-quotient-model.md (induction)
PASS items/thm-normal-subgroup-characterisations.md (direct)
PASS items/thm-normal-subgroups-of-finite-p-groups-meet-the-center.md (direct)
PASS items/thm-normality-generation-criterion.md (direct)
PASS items/thm-normality-is-not-hereditary.md (direct)
PASS items/thm-normality-is-not-productive.md (contradiction)
PASS items/thm-normalized-exponential-functional-equation.md (cases)
PASS items/thm-nowhere-differentiable-functions-are-dense-in-c01.md (direct)
PASS items/thm-nth-roots-exist.md (contradiction)
PASS items/thm-number-of-bijections-of-a-finite-set.md (direct)
PASS items/thm-number-of-injections.md (induction)
PASS items/thm-number-theoretic-and-poset-mobius-agree.md (direct)
PASS items/thm-of-archimedean.md (contradiction)
PASS items/thm-of-square-roots.md (contradiction)
PASS items/thm-omega-is-peano-system.md (direct)
PASS items/thm-omega-one-is-the-least-uncountable-ordinal.md (direct)
PASS items/thm-one-dimensional-fixed-point.md (direct)
PASS items/thm-one-point-compactification-properties.md (direct)
PASS items/thm-one-sided-derivatives-of-convex-functions.md (direct)
PASS items/thm-one-sided-ftc-at-points-with-one-sided-limits.md (epsilon-delta)
PASS items/thm-open-connected-subsets-of-rn-are-polygonally-connected.md (direct)
PASS items/thm-open-set-algebra-r.md (direct)
PASS items/thm-open-subsets-of-r-structure.md (constructive)
PASS items/thm-operator-adjugate-identity.md (direct)
PASS items/thm-operator-determinant-is-basis-independent.md (direct)
PASS items/thm-operator-determinant-is-multiplicative.md (direct)
PASS items/thm-operator-determinant-scales-every-alternating-top-form.md (direct)
PASS items/thm-operator-invertible-iff-determinant-nonzero.md (direct)
PASS items/thm-orbit-stabilizer.md (constructive)
PASS items/thm-orbits-partition-the-set.md (direct)
PASS items/thm-order-of-element-in-direct-product.md (direct)
PASS items/thm-ordinal-addition-associative.md (direct)
PASS items/thm-ordinal-arithmetic-agrees-on-omega.md (direct)
PASS items/thm-ordinal-arithmetic-monotonicity.md (direct)
PASS items/thm-ordinal-division-with-remainder.md (direct)
PASS items/thm-ordinal-exponent-laws.md (direct)
PASS items/thm-ordinal-multiplication-associative-and-left-distributive.md (direct)
PASS items/thm-ordinal-spaces-and-compactness.md (direct)
PASS items/thm-ordinal-subtraction.md (direct)
PASS items/thm-ores-hamiltonicity-theorem.md (direct)
PASS items/thm-orthogonal-nonzero-vectors-are-linearly-independent.md (direct)
PASS items/thm-orthogonal-projection-is-the-unique-nearest-point.md (direct)
PASS items/thm-p-group-fixed-point-congruence.md (direct)
PASS items/thm-p-primary-component-of-a-finite-abelian-group.md (direct)
PASS items/thm-p-series-rational.md (direct)
PASS items/thm-p-series-real-exponents.md (direct)
PASS items/thm-p3-free-graphs-have-square-root-homogeneous-sets.md (direct)
PASS items/thm-paracompact-hausdorff-implies-normal.md (direct)
PASS items/thm-parametrized-constraint-necessary-condition.md (direct)
PASS items/thm-parity-of-transposition-factorisations-is-well-defined.md (direct)
PASS items/thm-partitions-of-unity-characterize-paracompact-hausdorff-spaces.md (direct)
PASS items/thm-pascals-rule.md (induction)
PASS items/thm-path-connected-implies-connected.md (direct)
PASS items/thm-path-independence-iff-zero-closed-loop-integrals.md (direct)
PASS items/thm-path-independent-field-has-a-potential-by-line-integrals.md (direct)
PASS items/thm-peano-categoricity.md (direct)
PASS items/thm-peano-mixed-partial-theorem.md (direct)
PASS items/thm-perfect-set-uncountable-r.md (contradiction)
PASS items/thm-perfectly-normal-implies-completely-normal.md (direct)
PASS items/thm-pi-equivalent-characterizations-ledger.md (direct)
PASS items/thm-pi-zero-and-period-characterizations.md (direct)
PASS items/thm-picard-iterates-for-exponential.md (induction)
PASS items/thm-pivot-columns-form-a-basis-of-the-column-space.md (direct)
PASS items/thm-plane-dual-exists-and-double-dual-recovers-primal.md (constructive)
PASS items/thm-poincare-lemma-for-star-shaped-domains.md (direct)
PASS items/thm-polar-form-with-unique-principal-argument.md (direct)
PASS items/thm-polarization-bijection-in-characteristic-not-two.md (direct)
PASS items/thm-polygonal-jordan-curve.md (direct)
PASS items/thm-polynomial-degree-of-a-product-over-a-domain.md (direct)
PASS items/thm-polynomial-division-algorithm-over-a-field.md (direct)
PASS items/thm-polynomial-is-separable-iff-coprime-to-its-derivative.md (direct)
PASS items/thm-polynomial-quotient-is-a-field-iff-irreducible.md (direct)
PASS items/thm-polynomial-ring-is-a-commutative-ring.md (direct)
PASS items/thm-polynomial-ring-over-a-field-is-a-ufd.md (induction)
PASS items/thm-positive-heredity-of-separation-axioms.md (direct)
PASS items/thm-positive-probability-existence-principle.md (contrapositive)
PASS items/thm-positive-productivity-of-separation-axioms.md (direct)
PASS items/thm-power-series-reexpansion-at-an-interior-point.md (direct)
PASS items/thm-power-series-sums-are-real-analytic.md (direct)
PASS items/thm-power-series-uniform-on-compact-subintervals.md (direct)
PASS items/thm-preimages-commute-with-unions-intersections-and-differences.md (direct)
PASS items/thm-presentation-of-a-free-product-with-amalgamation.md (direct)
PASS items/thm-presentation-of-a-free-product.md (direct)
PASS items/thm-primary-decomposition-for-an-endomorphism.md (direct)
PASS items/thm-primary-decomposition-of-a-finite-abelian-group.md (direct)
PASS items/thm-prime-factorisation-exists.md (induction)
PASS items/thm-prime-subfield-classification.md (direct)
PASS items/thm-prims-minimum-spanning-tree-algorithm.md (induction)
PASS items/thm-principal-inverse-sine-and-cosine-derivatives.md (direct)
PASS items/thm-principal-inverse-tangent-calculus.md (direct)
PASS items/thm-product-of-connected-spaces.md (direct)
PASS items/thm-product-of-countable.md (direct)
PASS items/thm-product-of-subspaces-and-closures.md (direct)
PASS items/thm-product-probability-has-independent-coordinate-events.md (induction)
PASS items/thm-product-rule.md (induction)
PASS items/thm-product-to-sum-and-sum-to-product-identities.md (direct)
PASS items/thm-product-universal-property.md (direct)
PASS items/thm-products-ab-and-ba-have-the-same-characteristic-polynomial.md (direct)
PASS items/thm-products-of-injective-modules.md (constructive)
PASS items/thm-projective-module-characterizations.md (direct)
PASS items/thm-projective-modules-are-flat.md (direct)
PASS items/thm-proper-ideal-contained-in-maximal-ideal.md (direct)
PASS items/thm-prufer-code-bijection.md (induction)
PASS items/thm-pullback-and-pushout-pasting.md (universal-property)
PASS items/thm-punctured-rn-deformation-retracts-onto-the-sphere.md (direct)
PASS items/thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions.md (direct)
PASS items/thm-qr-factorisation-over-r-or-c.md (direct)
PASS items/thm-quadratic-and-cubic-irreducibility-test.md (direct)
PASS items/thm-quadratic-tower-characterization-of-algebraic-constructibility.md (direct)
PASS items/thm-quarter-turn-values-and-shift-formulas.md (direct)
PASS items/thm-quasicomponents-contain-components.md (direct)
PASS items/thm-quasicomponents-equal-components-in-a-compact-hausdorff-space.md (direct)
PASS items/thm-quaternions-form-a-division-ring.md (direct)
PASS items/thm-quotient-abelian-iff-contains-commutator-subgroup.md (direct)
PASS items/thm-quotient-canonical-factorisation.md (direct)
PASS items/thm-quotient-group-laws.md (direct)
PASS items/thm-quotient-group-universal-property.md (direct)
PASS items/thm-quotient-is-domain-iff-ideal-prime.md (direct)
PASS items/thm-quotient-is-field-iff-ideal-maximal.md (direct)
PASS items/thm-quotient-module-laws.md (direct)
PASS items/thm-quotient-module-universal-property.md (constructive)
PASS items/thm-quotient-ring-laws.md (direct)
PASS items/thm-quotient-ring-multiplication-well-defined-iff-ideal.md (direct)
PASS items/thm-quotient-ring-universal-property.md (direct)
PASS items/thm-quotient-universal-property.md (direct)
PASS items/thm-r-is-not-homeomorphic-to-higher-dimensional-euclidean-space.md (contradiction)
PASS items/thm-r-three-three-equals-six.md (direct)
PASS items/thm-r-uncountable.md (contradiction)
PASS items/thm-radial-straight-line-map-on-punctured-rn.md (direct)
PASS items/thm-ramsey-logarithmic-homogeneous-set-bound.md (direct)
PASS items/thm-random-graph-logarithmic-homogeneous-set-upper-bound.md (constructive)
PASS items/thm-rank-nullity.md (direct)
PASS items/thm-rat-field.md (direct)
PASS items/thm-rat-ordered-field.md (direct)
PASS items/thm-ratio-root-inequality.md (direct)
PASS items/thm-ratio-test.md (cases)
PASS items/thm-rational-points-and-boxes-in-rn.md (direct)
PASS items/thm-rational-root-theorem.md (direct)
PASS items/thm-rational-supremum-power-agrees-with-exp.md (direct)
PASS items/thm-rationals-countable.md (direct)
PASS items/thm-real-analytic-functions-closed-under-algebra-quotients-and-composition.md (cases)
PASS items/thm-real-automorphisms-of-the-complex-numbers.md (direct)
PASS items/thm-real-de-moivre-binomial-multiple-angle-formulas.md (induction)
PASS items/thm-real-power-agrees-with-rational-exponent.md (direct)
PASS items/thm-real-power-continuity-and-derivatives.md (direct)
PASS items/thm-real-power-laws.md (direct)
PASS items/thm-real-square-matrix-invertible-iff-determinant-nonzero.md (direct)
PASS items/thm-real-stone-weierstrass-for-compact-metric-spaces.md (constructive)
PASS items/thm-reals-cauchy-complete.md (direct)
PASS items/thm-reals-dedekind-field.md (direct)
PASS items/thm-reals-dedekind-ordered-field.md (direct)
PASS items/thm-reals-field.md (direct)
PASS items/thm-reals-ordered-field.md (direct)
PASS items/thm-rearrangement-sums-lie-in-an-affine-subspace.md (direct)
PASS items/thm-rectifiable-iff-coordinate-functions-have-bounded-variation.md (comparison)
PASS items/thm-recursion.md (direct)
PASS items/thm-redei-tournament-hamilton-path.md (induction)
PASS items/thm-reduced-row-echelon-form-is-unique.md (induction)
PASS items/thm-reduced-syllable-words-form-the-free-product.md (direct)
PASS items/thm-reduced-words-form-the-free-group.md (direct)
PASS items/thm-reduction-mod-prime-irreducibility-test.md (contradiction)
PASS items/thm-reflexive-and-irreflexive-orders-correspond.md (direct)
PASS items/thm-regularity-of-the-alephs.md (direct)
PASS items/thm-repeated-root-derivative-criterion.md (direct)
PASS items/thm-representable-functors-preserve-small-limits.md (universal-property)
PASS items/thm-representing-objects-are-unique-up-to-unique-compatible-isomorphism.md (direct)
PASS items/thm-riemann-criterion.md (direct)
PASS items/thm-riemann-fubini-on-product-rectangles.md (direct)
PASS items/thm-riemann-series-theorem.md (constructive)
PASS items/thm-riemann-stieltjes-c1-integrator-reduction.md (direct)
PASS items/thm-riemann-stieltjes-change-of-variable.md (direct)
PASS items/thm-riemann-stieltjes-continuous-composition.md (direct)
PASS items/thm-riemann-stieltjes-countable-step-integrator.md (direct)
PASS items/thm-riemann-stieltjes-darboux-criterion.md (direct)
PASS items/thm-riemann-stieltjes-existence-bv-no-common-discontinuities.md (direct)
PASS items/thm-riemann-stieltjes-existence-continuous-bv.md (direct)
PASS items/thm-riemann-stieltjes-existence-finitely-discontinuous.md (direct)
PASS items/thm-riemann-stieltjes-fundamental-theorems-for-c1-integrators.md (reduction)
PASS items/thm-riemann-stieltjes-integration-by-parts.md (direct)
PASS items/thm-riemann-stieltjes-linearity-and-additivity.md (direct)
PASS items/thm-riesz-representation-in-finite-dimensions.md (direct)
PASS items/thm-right-exactness-of-tensor-products.md (direct)
PASS items/thm-ring-homomorphism-kernel-is-an-ideal.md (direct)
PASS items/thm-ring-matrix-arithmetic-laws.md (direct)
PASS items/thm-rmod-is-complete-and-cocomplete.md (constructions-and-criteria)
PASS items/thm-rolle.md (direct)
PASS items/thm-root-bound-for-polynomials-over-a-domain.md (induction)
PASS items/thm-root-test.md (cases)
PASS items/thm-roots-of-the-minimal-polynomial-are-eigenvalues-over-extension-fields.md (direct)
PASS items/thm-row-equivalence-characterisations.md (direct)
PASS items/thm-row-operations-preserve-solution-sets.md (direct)
PASS items/thm-row-rank-equals-column-rank.md (direct)
PASS items/thm-rref-consistency-and-free-variable-parametrisation.md (constructive)
PASS items/thm-russells-paradox.md (contradiction)
PASS items/thm-samuel-compactification-universal-property.md (direct)
PASS items/thm-samuel-completion-is-a-compactification.md (direct)
PASS items/thm-scalar-and-vector-line-integral-estimates.md (direct)
PASS items/thm-schreier-refinement-theorem.md (direct)
PASS items/thm-schroder-bernstein.md (direct)
PASS items/thm-schur-monochromatic-sum.md (direct)
PASS items/thm-second-countable-implies-first-countable.md (direct)
PASS items/thm-second-countable-implies-lindelof.md (constructive)
PASS items/thm-second-countable-implies-separable.md (constructive)
PASS items/thm-second-derivative-test.md (cases)
PASS items/thm-second-isomorphism-theorem-groups.md (direct)
PASS items/thm-second-isomorphism-theorem-rings.md (direct)
PASS items/thm-second-mean-value-theorem-for-integrals.md (direct)
PASS items/thm-self-adjoint-idempotents-are-exactly-orthogonal-projections.md (direct)
PASS items/thm-self-regular-representative-subsets.md (constructive)
PASS items/thm-semicontinuity-level-set-characterisation.md (direct)
PASS items/thm-semicontinuous-evt.md (direct)
PASS items/thm-separated-uniformity-iff-induced-topology-is-hausdorff.md (direct)
PASS items/thm-sequential-criterion-for-continuity.md (direct)
PASS items/thm-sequential-criterion-for-function-limits.md (direct)
PASS items/thm-sequentially-compact-implies-totally-bounded.md (contradiction)
PASS items/thm-series-cauchy-criterion.md (direct)
PASS items/thm-set-has-all-small-colimits.md (construction)
PASS items/thm-set-has-all-small-limits.md (construction)
PASS items/thm-sign-is-a-homomorphism.md (direct)
PASS items/thm-signed-infinite-product-square-summability-criterion.md (direct)
PASS items/thm-silverman-toeplitz.md (direct)
PASS items/thm-similarity-is-an-equivalence-relation-and-models-basis-change.md (direct)
PASS items/thm-simple-algebraic-extension-quotient-power-basis-and-degree.md (direct)
PASS items/thm-simple-transcendental-extension-is-rational-expressions-in-the-generator.md (direct)
PASS items/thm-simple-transcendental-extensions-are-uniquely-f-isomorphic.md (direct)
PASS items/thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms.md (direct)
PASS items/thm-sine-and-cosine-addition-formulas.md (direct)
PASS items/thm-sine-and-cosine-derivatives.md (direct)
PASS items/thm-sine-and-cosine-parametrize-the-unit-circle.md (direct)
PASS items/thm-sine-and-cosine-subtraction-formulas.md (direct)
PASS items/thm-sine-cosine-signs-monotonicity-and-ranges.md (direct)
PASS items/thm-sine-cosine-zero-sets-and-fundamental-period.md (direct)
PASS items/thm-single-pattern-and-finite-family-erdos-hajnal-formulations.md (direct)
PASS items/thm-six-colour-theorem-for-planar-graphs.md (induction)
PASS items/thm-small-categories-form-a-strict-two-category.md (direct)
PASS items/thm-small-colimits-from-coproducts-and-coequalizers.md (duality)
PASS items/thm-small-dominating-set-from-minimum-degree.md (constructive)
PASS items/thm-small-limits-commute-with-small-limits.md (universal-property)
PASS items/thm-small-limits-from-products-and-equalizers.md (construction)
PASS items/thm-smirnov-local-metrization.md (cases)
PASS items/thm-snake-lemma-for-modules.md (constructive)
PASS items/thm-solution-set-is-an-affine-nullspace.md (direct)
PASS items/thm-solvable-iff-it-has-an-abelian-factor-series.md (direct)
PASS items/thm-spectral-mapping-for-polynomials.md (induction)
PASS items/thm-spectrum-is-the-root-set-of-the-characteristic-polynomial.md (direct)
PASS items/thm-splitting-fields-exist-for-nonzero-polynomials.md (induction)
PASS items/thm-splitting-lemma-for-group-extensions.md (iff)
PASS items/thm-splitting-lemma-for-modules.md (direct)
PASS items/thm-squeeze-for-function-limits.md (direct)
PASS items/thm-squeeze.md (direct)
PASS items/thm-standard-maclaurin-expansions.md (direct)
PASS items/thm-standard-representatives-modulo-n.md (direct)
PASS items/thm-stars-and-bars.md (induction)
PASS items/thm-steinitz-exchange.md (direct)
PASS items/thm-steinitz-polygonal-confinement.md (constructive)
PASS items/thm-stolz-cesaro.md (direct)
PASS items/thm-stone-cech-evaluation-closure-universal-property.md (direct)
PASS items/thm-stone-metric-spaces-are-paracompact.md (direct)
PASS items/thm-strong-induction.md (contradiction)
PASS items/thm-strong-regularity-lemma-by-energy-stabilisation.md (direct)
PASS items/thm-structure-of-the-unit-group-modulo-n.md (direct)
PASS items/thm-subfield-lattice-of-a-finite-field.md (direct)
PASS items/thm-subgroups-and-quotients-of-solvable-groups-are-solvable.md (direct)
PASS items/thm-subgroups-of-cyclic-groups-are-cyclic.md (direct)
PASS items/thm-subgroups-quotients-and-finite-products-of-nilpotent-groups.md (direct)
PASS items/thm-subordinate-partitions-of-unity-exist.md (constructive)
PASS items/thm-subsequential-limit-set-closed.md (constructive)
PASS items/thm-subset-of-a-finite-set.md (induction)
PASS items/thm-subspace-closure-and-interior.md (direct)
PASS items/thm-substitution-for-improper-integrals.md (direct)
PASS items/thm-substitution-with-riemann-integrable-inner-derivative.md (reduction)
PASS items/thm-substitution.md (direct)
PASS items/thm-sum-and-product-of-ideals-are-ideals.md (direct)
PASS items/thm-sum-of-totients-over-divisors.md (direct)
PASS items/thm-sum-rule.md (induction)
PASS items/thm-summable-families-and-rearrangement.md (direct)
PASS items/thm-supporting-lines-for-convex-functions.md (direct)
PASS items/thm-sylvesters-criterion-for-positive-definiteness.md (induction)
PASS items/thm-sylvesters-law-of-inertia.md (direct)
PASS items/thm-symmetric-alternating-relations-by-characteristic.md (direct)
PASS items/thm-symmetric-bilinear-forms-have-an-orthogonal-basis.md (induction)
PASS items/thm-symmetric-chain-decomposition-of-the-boolean-lattice.md (induction)
PASS items/thm-symmetric-permutations-are-conjugate-iff-same-cycle-type.md (iff)
PASS items/thm-symmetry-and-associativity-over-a-commutative-ring.md (direct)
PASS items/thm-symmetry-of-higher-mixed-partials.md (induction)
PASS items/thm-szele-many-hamilton-paths-in-a-tournament.md (direct)
PASS items/thm-szemeredi-regularity-lemma-with-tower-bound.md (direct)
PASS items/thm-t1-iff-singletons-are-closed.md (direct)
PASS items/thm-t4-implies-t3.md (direct)
PASS items/thm-takagi-function-is-continuous-and-nowhere-differentiable.md (direct)
PASS items/thm-tangent-cotangent-secant-cosecant-derivatives-and-periods.md (direct)
PASS items/thm-tangent-half-angle-rational-parametrization.md (direct)
PASS items/thm-tarski-square.md (direct)
PASS items/thm-tauber-converse-for-abel-summability.md (direct)
PASS items/thm-taylor-peano-remainder.md (induction)
PASS items/thm-taylor-schlomilch-roche-remainder.md (direct)
PASS items/thm-taylor-series-representation-by-remainder.md (direct)
PASS items/thm-tensor-product-basis-from-bases.md (direct)
PASS items/thm-tensor-product-of-algebras-over-a-commutative-ring.md (direct)
PASS items/thm-tensor-products-commute-with-arbitrary-direct-sums.md (direct)
PASS items/thm-termwise-differentiation-of-a-real-power-series.md (direct)
PASS items/thm-the-bonferroni-inequalities.md (direct)
PASS items/thm-the-characterising-property-of-ordered-pairs.md (cases)
PASS items/thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain.md (direct)
PASS items/thm-the-derangement-formula.md (direct)
PASS items/thm-the-empty-set-exists-and-is-unique.md (direct)
PASS items/thm-the-erdos-szekeres-bound-is-sharp.md (constructive)
PASS items/thm-the-exponential-law.md (direct)
PASS items/thm-the-integral-function-is-lipschitz.md (direct)
PASS items/thm-the-long-line-is-a-connected-linear-continuum.md (direct)
PASS items/thm-the-long-line-is-countably-compact-and-not-compact.md (direct)
PASS items/thm-the-number-of-surjections.md (direct)
PASS items/thm-the-separation-implication-chain.md (direct)
PASS items/thm-the-strong-pigeonhole-principle.md (contradiction)
PASS items/thm-third-isomorphism-theorem-groups.md (direct)
PASS items/thm-third-isomorphism-theorem-rings.md (direct)
PASS items/thm-three-definitions-of-uniform-space-are-equivalent.md (direct)
PASS items/thm-tietze-extension-theorem.md (constructive)
PASS items/thm-tietze-transformations-connect-finite-presentations.md (constructive)
PASS items/thm-top-is-complete-and-cocomplete-and-its-underlying-set-functor-preserves-both.md (lift-set-constructions)
PASS items/thm-topological-group-uniformities-induce-the-given-topology.md (direct)
PASS items/thm-total-derivative-computes-directional-and-partial-derivatives.md (direct)
PASS items/thm-total-differentiability-gives-a-local-linear-bound-and-continuity.md (direct)
PASS items/thm-totient-of-a-prime-power.md (direct)
PASS items/thm-tournament-property-s-k-existence.md (cases)
PASS items/thm-tower-law-for-finite-field-extensions.md (direct)
PASS items/thm-trace-is-sum-of-eigenvalues.md (direct)
PASS items/thm-trace-of-ab-equals-trace-of-ba.md (direct)
PASS items/thm-transfinite-induction.md (contradiction)
PASS items/thm-transfinite-recursion.md (direct)
PASS items/thm-transitive-actions-are-coset-actions.md (constructive)
PASS items/thm-transitivity-of-algebraicity.md (direct)
PASS items/thm-transpose-kernel-range-and-rank.md (direct)
PASS items/thm-transpositions-generate-the-symmetric-group.md (direct)
PASS items/thm-tree-characterisations.md (direct)
PASS items/thm-triangle-counting-lemma-for-regular-triples.md (direct)
PASS items/thm-triple-angle-identities.md (direct)
PASS items/thm-turan-density-exists.md (direct)
PASS items/thm-turan-exact-and-unique.md (direct)
PASS items/thm-two-element-subsets-count.md (direct)
PASS items/thm-two-maps-into-a-convex-set-are-homotopic.md (direct)
PASS items/thm-two-sided-change-of-basis-formula.md (direct)
PASS items/thm-two-sided-limit-iff-both-one-sided.md (direct)
PASS items/thm-tychonoff-embedding-theorem.md (direct)
PASS items/thm-tychonoff.md (direct)
PASS items/thm-ultrafilter-characterisation.md (direct)
PASS items/thm-ultrafilter-lemma.md (direct)
PASS items/thm-uniform-abel-test-for-function-series.md (direct)
PASS items/thm-uniform-cauchy-criterion-real-functions.md (direct)
PASS items/thm-uniform-completion-universal-property-and-uniqueness.md (constructive)
PASS items/thm-uniform-continuity-preserves-cauchy.md (direct)
PASS items/thm-uniform-derivative-limit-on-a-closed-interval.md (constructive)
PASS items/thm-uniform-dirichlet-test-for-function-series.md (direct)
PASS items/thm-uniform-limit-continuous-real-functions.md (direct)
PASS items/thm-uniform-limit-interchanges-riemann-integration.md (direct)
PASS items/thm-uniform-limit-theorem.md (direct)
PASS items/thm-uniformity-induces-a-topology.md (direct)
PASS items/thm-uniformizable-iff-completely-regular.md (direct)
PASS items/thm-uniformly-continuous-extension-from-dense.md (constructive)
PASS items/thm-uniformly-continuous-maps-are-continuous.md (direct)
PASS items/thm-unions-of-connected-sets.md (direct)
PASS items/thm-unique-coordinates-with-respect-to-an-ordered-basis.md (direct)
PASS items/thm-uniqueness-complete-ordered-field.md (direct)
PASS items/thm-uniqueness-of-finite-fields.md (direct)
PASS items/thm-unit-criterion-modulo-n.md (direct)
PASS items/thm-unit-group-chinese-remainder-decomposition.md (direct)
PASS items/thm-unit-group-modulo-odd-prime-power-is-cyclic.md (direct)
PASS items/thm-unit-group-modulo-two-power-structure.md (direct)
PASS items/thm-unit-isomorphisms-for-module-tensor-products.md (direct)
PASS items/thm-unit-semicircle-arc-length-is-pi.md (direct)
PASS items/thm-universal-arrows-are-initial-or-terminal-in-comma-categories.md (direct)
PASS items/thm-universal-elements-and-universal-factorisations.md (direct)
PASS items/thm-universal-elements-are-initial-or-terminal-in-the-category-of-elements.md (direct)
PASS items/thm-universal-nets-and-ultrafilters-correspond.md (direct)
PASS items/thm-universal-property-of-a-polynomial-ring.md (direct)
PASS items/thm-universal-property-of-adjoining-an-irreducible-root.md (direct)
PASS items/thm-universal-property-of-free-modules.md (direct)
PASS items/thm-universal-property-of-localisation.md (constructive)
PASS items/thm-universal-property-of-module-direct-sums.md (direct)
PASS items/thm-universal-property-of-module-tensor-products.md (direct)
PASS items/thm-universal-property-of-the-field-of-fractions.md (direct)
PASS items/thm-universal-property-of-the-quotient.md (direct)
PASS items/thm-unordered-summability-of-real-families.md (direct)
PASS items/thm-upper-and-lower-central-characterizations-of-nilpotence.md (direct)
PASS items/thm-urysohn-lemma.md (constructive)
PASS items/thm-van-der-waerden-with-monochromatic-difference.md (induction)
PASS items/thm-vandermonde-identity.md (direct)
PASS items/thm-variance-of-a-finite-sum.md (direct)
PASS items/thm-vieta-expansion-in-elementary-symmetric-polynomials.md (direct)
PASS items/thm-viete-product-for-pi.md (direct)
PASS items/thm-von-dyck.md (constructive)
PASS items/thm-wallis-product-for-pi.md (direct)
PASS items/thm-weierstrass-m-test-for-function-series.md (direct)
PASS items/thm-weighted-am-gm-rational.md (direct)
PASS items/thm-weighted-am-gm-real.md (induction)
PASS items/thm-well-ordering-implies-ac.md (direct)
PASS items/thm-well-ordering-principle.md (contradiction)
PASS items/thm-well-ordering-theorem.md (direct)
PASS items/thm-whitney-connectivity-inequalities.md (direct)
PASS items/thm-wilsons-theorem.md (direct)
PASS items/thm-wirtinger-chain-rule-for-real-differentiable-maps.md (direct)
PASS items/thm-word-quotient-model-is-a-group.md (direct)
PASS items/thm-word-quotient-model-is-free.md (constructive)
PASS items/thm-x-adic-completeness-and-polynomial-density.md (direct)
PASS items/thm-yoneda-embedding-is-fully-faithful.md (direct)
PASS items/thm-yoneda-lemma-is-natural-in-both-variables.md (direct)
PASS items/thm-young-inequality-real-exponents.md (direct)
PASS items/thm-young-inequality.md (direct)
PASS items/thm-young-mixed-partial-theorem.md (direct)
PASS items/thm-young-riemann-stieltjes-existence-rational.md (direct)
PASS items/thm-z-mod-p-is-a-field.md (direct)
PASS items/thm-zassenhaus-butterfly-lemma.md (direct)
PASS items/thm-zero-complex-derivative-on-a-domain-implies-constant.md (direct)
PASS items/thm-zorn-implies-ac.md (contradiction)
PASS items/thm-zorn.md (contradiction)

3559 checked, 0 failing — all clean
```

```text
$ node tools/depcheck.mjs
depcheck: 4535 items (4128 published), 270 pages

page dependency depth (0 = no prerequisites):
   0  deferred-algebraic-topology                     17 items  <- (none)
   0  deferred-functional-analysis                    33 items  <- (none)
   0  deferred-measure-and-integration                29 items  <- (none)
   0  deferred-set-theory-beyond-choice               22 items  <- (none)
   0  the-zfc-axioms-and-basic-set-constructions      39 items  <- (none)
   1  open-problems-and-research-frontier             13 items  <- deferred-set-theory-beyond-choice
   1  relations-functions-and-quotients               39 items  <- the-zfc-axioms-and-basic-set-constructions
   1  the-zfc-axioms-and-basic-set-constructions-examples  10 items  <- the-zfc-axioms-and-basic-set-constructions
   2  construction-of-the-natural-numbers             39 items  <- relations-functions-and-quotients, the-zfc-axioms-and-basic-set-constructions
   2  relations-functions-and-quotients-examples      10 items  <- relations-functions-and-quotients, the-zfc-axioms-and-basic-set-constructions, deferred-set-theory-beyond-choice
   3  construction-of-r-via-cauchy-sequences          40 items  <- construction-of-the-natural-numbers
   3  order-zorn-and-the-axiom-of-choice              21 items  <- relations-functions-and-quotients, construction-of-the-natural-numbers, deferred-set-theory-beyond-choice
   4  construction-of-r-via-dedekind-cuts             39 items  <- construction-of-the-natural-numbers, construction-of-r-via-cauchy-sequences
   4  filters-and-ultrafilters                        12 items  <- the-zfc-axioms-and-basic-set-constructions, construction-of-the-natural-numbers, order-zorn-and-the-axiom-of-choice, relations-functions-and-quotients, deferred-set-theory-beyond-choice
   4  order-zorn-and-the-axiom-of-choice-examples      8 items  <- order-zorn-and-the-axiom-of-choice, relations-functions-and-quotients, construction-of-the-natural-numbers, deferred-set-theory-beyond-choice
   5  filters-and-ultrafilters-examples                8 items  <- filters-and-ultrafilters, construction-of-the-natural-numbers
   5  foundations-of-the-real-numbers                 43 items  <- construction-of-the-natural-numbers, construction-of-r-via-cauchy-sequences, construction-of-r-via-dedekind-cuts
   6  suprema-and-infima                              17 items  <- foundations-of-the-real-numbers, construction-of-the-natural-numbers
   7  countability-and-uncountability                 21 items  <- relations-functions-and-quotients, construction-of-the-natural-numbers, foundations-of-the-real-numbers, suprema-and-infima, construction-of-r-via-cauchy-sequences, deferred-set-theory-beyond-choice
   7  roots-and-rational-powers                       22 items  <- construction-of-the-natural-numbers, foundations-of-the-real-numbers, construction-of-r-via-cauchy-sequences, suprema-and-infima
   7  suprema-and-infima-examples                      8 items  <- suprema-and-infima, foundations-of-the-real-numbers, construction-of-r-via-cauchy-sequences
   8  finite-counting-and-binomial-coefficients       26 items  <- countability-and-uncountability, relations-functions-and-quotients, construction-of-the-natural-numbers, roots-and-rational-powers, foundations-of-the-real-numbers
   8  monoids-groups-and-subgroups                    27 items  <- relations-functions-and-quotients, the-zfc-axioms-and-basic-set-constructions, construction-of-the-natural-numbers, countability-and-uncountability, construction-of-r-via-cauchy-sequences
   8  sequences-and-limits                            18 items  <- construction-of-r-via-cauchy-sequences, construction-of-the-natural-numbers, foundations-of-the-real-numbers, suprema-and-infima, countability-and-uncountability
   9  divisibility-gcd-and-bezout                     26 items  <- construction-of-r-via-cauchy-sequences, monoids-groups-and-subgroups, construction-of-the-natural-numbers, relations-functions-and-quotients
   9  finite-counting-and-binomial-coefficients-examples  14 items  <- finite-counting-and-binomial-coefficients, foundations-of-the-real-numbers, construction-of-the-natural-numbers, countability-and-uncountability, relations-functions-and-quotients, roots-and-rational-powers
   9  inclusion-exclusion-and-the-pigeonhole-principle  21 items  <- finite-counting-and-binomial-coefficients, relations-functions-and-quotients, roots-and-rational-powers, countability-and-uncountability, foundations-of-the-real-numbers, construction-of-the-natural-numbers
   9  monoids-groups-and-subgroups-examples           11 items  <- foundations-of-the-real-numbers, monoids-groups-and-subgroups, construction-of-r-via-cauchy-sequences, construction-of-the-natural-numbers, relations-functions-and-quotients, countability-and-uncountability
   9  monotone-sequences-and-cauchy-completeness      20 items  <- foundations-of-the-real-numbers, construction-of-r-via-cauchy-sequences, suprema-and-infima, sequences-and-limits, construction-of-the-natural-numbers, roots-and-rational-powers
  10  chains-antichains-sperner-and-dilworth          32 items  <- relations-functions-and-quotients, order-zorn-and-the-axiom-of-choice, finite-counting-and-binomial-coefficients, construction-of-the-natural-numbers, inclusion-exclusion-and-the-pigeonhole-principle
  10  divisibility-gcd-and-bezout-examples             9 items  <- divisibility-gcd-and-bezout, monoids-groups-and-subgroups, construction-of-r-via-cauchy-sequences, construction-of-the-natural-numbers
  10  formal-laurent-series-field                     11 items  <- construction-of-r-via-cauchy-sequences, foundations-of-the-real-numbers, construction-of-the-natural-numbers, sequences-and-limits, monotone-sequences-and-cauchy-completeness
  10  graphs-walks-and-connectivity                   37 items  <- finite-counting-and-binomial-coefficients, relations-functions-and-quotients, construction-of-the-natural-numbers, inclusion-exclusion-and-the-pigeonhole-principle
  10  inclusion-exclusion-and-the-pigeonhole-principle-examples  10 items  <- inclusion-exclusion-and-the-pigeonhole-principle, finite-counting-and-binomial-coefficients, foundations-of-the-real-numbers, roots-and-rational-powers, relations-functions-and-quotients, construction-of-the-natural-numbers, countability-and-uncountability
  10  limsup-and-subsequential-limits                 23 items  <- construction-of-r-via-cauchy-sequences, foundations-of-the-real-numbers, sequences-and-limits, relations-functions-and-quotients, order-zorn-and-the-axiom-of-choice, suprema-and-infima, monotone-sequences-and-cauchy-completeness, construction-of-the-natural-numbers, roots-and-rational-powers
  10  metric-spaces                                   28 items  <- construction-of-r-via-cauchy-sequences, foundations-of-the-real-numbers, suprema-and-infima, monotone-sequences-and-cauchy-completeness, construction-of-the-natural-numbers, roots-and-rational-powers, sequences-and-limits, countability-and-uncountability, relations-functions-and-quotients
  10  monotone-sequences-and-cauchy-completeness-examples  11 items  <- monotone-sequences-and-cauchy-completeness, foundations-of-the-real-numbers, sequences-and-limits, construction-of-the-natural-numbers, roots-and-rational-powers, construction-of-r-via-cauchy-sequences, suprema-and-infima
  10  primes-and-the-fundamental-theorem-of-arithmetic  18 items  <- divisibility-gcd-and-bezout, construction-of-r-via-cauchy-sequences, construction-of-the-natural-numbers, monoids-groups-and-subgroups, countability-and-uncountability, relations-functions-and-quotients, foundations-of-the-real-numbers
  10  rings-subrings-and-integral-domains             28 items  <- monoids-groups-and-subgroups, construction-of-the-natural-numbers, construction-of-r-via-cauchy-sequences, foundations-of-the-real-numbers, countability-and-uncountability, relations-functions-and-quotients, divisibility-gcd-and-bezout, finite-counting-and-binomial-coefficients
  11  chains-antichains-sperner-and-dilworth-examples   8 items  <- chains-antichains-sperner-and-dilworth, primes-and-the-fundamental-theorem-of-arithmetic, finite-counting-and-binomial-coefficients
  11  completeness-and-uniform-continuity             24 items  <- metric-spaces, sequences-and-limits, construction-of-r-via-cauchy-sequences, suprema-and-infima, monotone-sequences-and-cauchy-completeness, foundations-of-the-real-numbers, countability-and-uncountability, roots-and-rational-powers, construction-of-the-natural-numbers, relations-functions-and-quotients
  11  congruences-and-the-chinese-remainder-theorem   23 items  <- divisibility-gcd-and-bezout, relations-functions-and-quotients, construction-of-r-via-cauchy-sequences, monoids-groups-and-subgroups, construction-of-the-natural-numbers, finite-counting-and-binomial-coefficients, foundations-of-the-real-numbers, primes-and-the-fundamental-theorem-of-arithmetic, inclusion-exclusion-and-the-pigeonhole-principle
  11  equivalent-forms-of-completeness                21 items  <- formal-laurent-series-field, foundations-of-the-real-numbers, order-zorn-and-the-axiom-of-choice, sequences-and-limits, construction-of-the-natural-numbers, roots-and-rational-powers, construction-of-r-via-cauchy-sequences, monotone-sequences-and-cauchy-completeness, suprema-and-infima
  11  eulerian-and-hamiltonian-graphs                 22 items  <- graphs-walks-and-connectivity, finite-counting-and-binomial-coefficients, construction-of-the-natural-numbers
  11  finite-probability-spaces-and-random-variables  37 items  <- relations-functions-and-quotients, finite-counting-and-binomial-coefficients, roots-and-rational-powers, construction-of-r-via-cauchy-sequences, rings-subrings-and-integral-domains, suprema-and-infima, foundations-of-the-real-numbers
  11  graph-colouring                                  6 items  <- graphs-walks-and-connectivity, construction-of-the-natural-numbers, finite-counting-and-binomial-coefficients, countability-and-uncountability
  11  graphs-walks-and-connectivity-examples           8 items  <- graphs-walks-and-connectivity, finite-counting-and-binomial-coefficients
  11  incidence-algebras-and-mobius-inversion         24 items  <- relations-functions-and-quotients, countability-and-uncountability, finite-counting-and-binomial-coefficients, rings-subrings-and-integral-domains, construction-of-the-natural-numbers, monoids-groups-and-subgroups, construction-of-r-via-cauchy-sequences, chains-antichains-sperner-and-dilworth, roots-and-rational-powers, inclusion-exclusion-and-the-pigeonhole-principle, order-zorn-and-the-axiom-of-choice, divisibility-gcd-and-bezout, primes-and-the-fundamental-theorem-of-arithmetic
  11  induced-subgraphs-and-hereditary-graph-classes  23 items  <- graphs-walks-and-connectivity, relations-functions-and-quotients, finite-counting-and-binomial-coefficients, construction-of-the-natural-numbers
  11  limsup-and-subsequential-limits-examples         9 items  <- limsup-and-subsequential-limits, monotone-sequences-and-cauchy-completeness, sequences-and-limits, order-zorn-and-the-axiom-of-choice, relations-functions-and-quotients, foundations-of-the-real-numbers, construction-of-the-natural-numbers, construction-of-r-via-cauchy-sequences, roots-and-rational-powers
  11  metric-spaces-examples                          12 items  <- metric-spaces, roots-and-rational-powers, suprema-and-infima, foundations-of-the-real-numbers, sequences-and-limits, construction-of-the-natural-numbers, primes-and-the-fundamental-theorem-of-arithmetic, construction-of-r-via-cauchy-sequences, monotone-sequences-and-cauchy-completeness, relations-functions-and-quotients
  11  primes-and-the-fundamental-theorem-of-arithmetic-examples   9 items  <- primes-and-the-fundamental-theorem-of-arithmetic, divisibility-gcd-and-bezout, monoids-groups-and-subgroups, construction-of-r-via-cauchy-sequences, construction-of-the-natural-numbers, foundations-of-the-real-numbers, finite-counting-and-binomial-coefficients, countability-and-uncountability, relations-functions-and-quotients
  11  rings-subrings-and-integral-domains-examples    10 items  <- rings-subrings-and-integral-domains, construction-of-r-via-cauchy-sequences, foundations-of-the-real-numbers, monoids-groups-and-subgroups, divisibility-gcd-and-bezout, construction-of-the-natural-numbers, finite-counting-and-binomial-coefficients
  11  series-and-nonnegative-tests                    25 items  <- roots-and-rational-powers, sequences-and-limits, construction-of-r-via-cauchy-sequences, monotone-sequences-and-cauchy-completeness, foundations-of-the-real-numbers, construction-of-the-natural-numbers, suprema-and-infima, limsup-and-subsequential-limits
  11  topological-spaces-and-continuity               26 items  <- relations-functions-and-quotients, countability-and-uncountability, construction-of-the-natural-numbers, sequences-and-limits, metric-spaces, monotone-sequences-and-cauchy-completeness, foundations-of-the-real-numbers
  11  topology-of-r                                   22 items  <- construction-of-r-via-cauchy-sequences, monotone-sequences-and-cauchy-completeness, foundations-of-the-real-numbers, suprema-and-infima, sequences-and-limits, countability-and-uncountability, relations-functions-and-quotients, construction-of-the-natural-numbers, metric-spaces
  11  trees-forests-and-spanning-trees                27 items  <- graphs-walks-and-connectivity, finite-counting-and-binomial-coefficients, construction-of-the-natural-numbers, countability-and-uncountability, relations-functions-and-quotients, construction-of-r-via-cauchy-sequences, suprema-and-infima
  11  vector-spaces-and-subspaces                     17 items  <- foundations-of-the-real-numbers, monoids-groups-and-subgroups, construction-of-the-natural-numbers, countability-and-uncountability, rings-subrings-and-integral-domains
  12  absolute-convergence-and-rearrangement          26 items  <- series-and-nonnegative-tests, foundations-of-the-real-numbers, construction-of-r-via-cauchy-sequences, suprema-and-infima, sequences-and-limits, roots-and-rational-powers, construction-of-the-natural-numbers, monotone-sequences-and-cauchy-completeness, relations-functions-and-quotients, limsup-and-subsequential-limits, countability-and-uncountability
  12  compactness-in-metric-spaces                    26 items  <- relations-functions-and-quotients, countability-and-uncountability, sequences-and-limits, construction-of-the-natural-numbers, metric-spaces, order-zorn-and-the-axiom-of-choice, suprema-and-infima, filters-and-ultrafilters, completeness-and-uniform-continuity, foundations-of-the-real-numbers, roots-and-rational-powers, monotone-sequences-and-cauchy-completeness, construction-of-r-via-cauchy-sequences
  12  completeness-and-uniform-continuity-examples    12 items  <- completeness-and-uniform-continuity, construction-of-r-via-cauchy-sequences, metric-spaces, monotone-sequences-and-cauchy-completeness, foundations-of-the-real-numbers, sequences-and-limits, roots-and-rational-powers, countability-and-uncountability, suprema-and-infima, construction-of-the-natural-numbers, relations-functions-and-quotients
  12  congruences-and-the-chinese-remainder-theorem-examples  10 items  <- congruences-and-the-chinese-remainder-theorem, divisibility-gcd-and-bezout, monoids-groups-and-subgroups, primes-and-the-fundamental-theorem-of-arithmetic, foundations-of-the-real-numbers
  12  cosets-and-lagranges-theorem                    15 items  <- monoids-groups-and-subgroups, relations-functions-and-quotients, countability-and-uncountability, finite-counting-and-binomial-coefficients, divisibility-gcd-and-bezout, construction-of-r-via-cauchy-sequences, primes-and-the-fundamental-theorem-of-arithmetic, construction-of-the-natural-numbers, congruences-and-the-chinese-remainder-theorem
  12  eulerian-and-hamiltonian-graphs-examples         9 items  <- eulerian-and-hamiltonian-graphs, graphs-walks-and-connectivity
  12  finite-probability-spaces-and-random-variables-examples  11 items  <- finite-probability-spaces-and-random-variables
  12  graph-colouring-examples                         2 items  <- graph-colouring, graphs-walks-and-connectivity
  12  incidence-algebras-and-mobius-inversion-examples   8 items  <- incidence-algebras-and-mobius-inversion, chains-antichains-sperner-and-dilworth, congruences-and-the-chinese-remainder-theorem, countability-and-uncountability, construction-of-the-natural-numbers
  12  induced-subgraphs-and-hereditary-graph-classes-examples  12 items  <- induced-subgraphs-and-hereditary-graph-classes, graphs-walks-and-connectivity
  12  limits-of-real-functions                        21 items  <- topology-of-r, monotone-sequences-and-cauchy-completeness, construction-of-r-via-cauchy-sequences, foundations-of-the-real-numbers, sequences-and-limits, suprema-and-infima, construction-of-the-natural-numbers, countability-and-uncountability
  12  linear-independence-bases-and-dimension         20 items  <- vector-spaces-and-subspaces, foundations-of-the-real-numbers, monoids-groups-and-subgroups, construction-of-the-natural-numbers, countability-and-uncountability, relations-functions-and-quotients, order-zorn-and-the-axiom-of-choice, rings-subrings-and-integral-domains
  12  matchings-covers-menger-and-network-flows       26 items  <- graphs-walks-and-connectivity, finite-counting-and-binomial-coefficients, relations-functions-and-quotients, construction-of-the-natural-numbers, eulerian-and-hamiltonian-graphs, rings-subrings-and-integral-domains
  12  series-and-nonnegative-tests-examples           12 items  <- series-and-nonnegative-tests, construction-of-the-natural-numbers, roots-and-rational-powers, foundations-of-the-real-numbers, monotone-sequences-and-cauchy-completeness, suprema-and-infima, construction-of-r-via-cauchy-sequences, limsup-and-subsequential-limits, sequences-and-limits
  12  subspaces-products-and-quotients                24 items  <- topological-spaces-and-continuity, metric-spaces, countability-and-uncountability, relations-functions-and-quotients, order-zorn-and-the-axiom-of-choice, foundations-of-the-real-numbers, roots-and-rational-powers, monotone-sequences-and-cauchy-completeness, suprema-and-infima
  12  topological-spaces-and-continuity-examples      14 items  <- topological-spaces-and-continuity, countability-and-uncountability, relations-functions-and-quotients, construction-of-r-via-cauchy-sequences, monotone-sequences-and-cauchy-completeness, metric-spaces, foundations-of-the-real-numbers, suprema-and-infima, construction-of-the-natural-numbers
  12  topology-of-r-examples                          11 items  <- topology-of-r, monotone-sequences-and-cauchy-completeness, construction-of-r-via-cauchy-sequences, foundations-of-the-real-numbers, suprema-and-infima, construction-of-the-natural-numbers, countability-and-uncountability
  12  trees-forests-and-spanning-trees-examples       12 items  <- trees-forests-and-spanning-trees, graphs-walks-and-connectivity
  12  vector-spaces-and-subspaces-examples             8 items  <- vector-spaces-and-subspaces, rings-subrings-and-integral-domains, foundations-of-the-real-numbers, construction-of-r-via-cauchy-sequences, construction-of-the-natural-numbers, countability-and-uncountability, monoids-groups-and-subgroups
  13  absolute-convergence-and-rearrangement-examples  14 items  <- absolute-convergence-and-rearrangement, series-and-nonnegative-tests, monotone-sequences-and-cauchy-completeness, roots-and-rational-powers, foundations-of-the-real-numbers, sequences-and-limits, construction-of-r-via-cauchy-sequences, construction-of-the-natural-numbers, relations-functions-and-quotients, suprema-and-infima
  13  cantor-set-baire-and-measure-zero               24 items  <- topology-of-r, countability-and-uncountability, monotone-sequences-and-cauchy-completeness, relations-functions-and-quotients, construction-of-r-via-cauchy-sequences, construction-of-the-natural-numbers, series-and-nonnegative-tests, roots-and-rational-powers, foundations-of-the-real-numbers, suprema-and-infima, sequences-and-limits, deferred-set-theory-beyond-choice, compactness-in-metric-spaces
  13  compactness-in-metric-spaces-examples           11 items  <- metric-spaces, compactness-in-metric-spaces, completeness-and-uniform-continuity, countability-and-uncountability, order-zorn-and-the-axiom-of-choice, roots-and-rational-powers, construction-of-the-natural-numbers, foundations-of-the-real-numbers, sequences-and-limits, monotone-sequences-and-cauchy-completeness, suprema-and-infima, relations-functions-and-quotients
  13  continuity-ivt-evt-and-uniform-continuity       21 items  <- limits-of-real-functions, topology-of-r, monotone-sequences-and-cauchy-completeness, foundations-of-the-real-numbers, countability-and-uncountability, sequences-and-limits, construction-of-r-via-cauchy-sequences, suprema-and-infima, roots-and-rational-powers, construction-of-the-natural-numbers, metric-spaces, completeness-and-uniform-continuity, compactness-in-metric-spaces
  13  cosets-and-lagranges-theorem-examples            8 items  <- cosets-and-lagranges-theorem, divisibility-gcd-and-bezout, congruences-and-the-chinese-remainder-theorem, construction-of-r-via-cauchy-sequences, monoids-groups-and-subgroups, countability-and-uncountability, relations-functions-and-quotients
  13  limits-of-real-functions-examples               12 items  <- limits-of-real-functions, topology-of-r, roots-and-rational-powers, construction-of-the-natural-numbers, foundations-of-the-real-numbers, suprema-and-infima, monotone-sequences-and-cauchy-completeness, construction-of-r-via-cauchy-sequences, sequences-and-limits
  13  linear-independence-bases-and-dimension-examples   8 items  <- linear-independence-bases-and-dimension, vector-spaces-and-subspaces, monoids-groups-and-subgroups, foundations-of-the-real-numbers, construction-of-r-via-cauchy-sequences, construction-of-the-natural-numbers, countability-and-uncountability, relations-functions-and-quotients, rings-subrings-and-integral-domains
  13  linear-maps-rank-nullity-and-quotient-spaces     7 items  <- vector-spaces-and-subspaces, foundations-of-the-real-numbers, relations-functions-and-quotients, linear-independence-bases-and-dimension, monoids-groups-and-subgroups, construction-of-the-natural-numbers, finite-counting-and-binomial-coefficients
  13  matchings-covers-menger-and-network-flows-examples   6 items  <- matchings-covers-menger-and-network-flows, graphs-walks-and-connectivity
  13  normal-subgroups-and-quotient-groups            18 items  <- monoids-groups-and-subgroups, cosets-and-lagranges-theorem, relations-functions-and-quotients, construction-of-r-via-cauchy-sequences, congruences-and-the-chinese-remainder-theorem
  13  ordinals-and-transfinite-recursion              23 items  <- relations-functions-and-quotients, order-zorn-and-the-axiom-of-choice, construction-of-the-natural-numbers, the-zfc-axioms-and-basic-set-constructions, countability-and-uncountability, linear-independence-bases-and-dimension, deferred-set-theory-beyond-choice, compactness-in-metric-spaces
  13  ramsey-theory                                   21 items  <- countability-and-uncountability, construction-of-the-natural-numbers, finite-counting-and-binomial-coefficients, graphs-walks-and-connectivity, inclusion-exclusion-and-the-pigeonhole-principle, roots-and-rational-powers, limits-of-real-functions, relations-functions-and-quotients
  14  cantor-set-baire-and-measure-zero-examples      12 items  <- cantor-set-baire-and-measure-zero, countability-and-uncountability, series-and-nonnegative-tests, monotone-sequences-and-cauchy-completeness, roots-and-rational-powers, topology-of-r, construction-of-r-via-cauchy-sequences, foundations-of-the-real-numbers, sequences-and-limits, relations-functions-and-quotients
  14  continuity-ivt-evt-and-uniform-continuity-examples  10 items  <- metric-spaces, continuity-ivt-evt-and-uniform-continuity, completeness-and-uniform-continuity, limits-of-real-functions, construction-of-r-via-cauchy-sequences, suprema-and-infima, monotone-sequences-and-cauchy-completeness, foundations-of-the-real-numbers, topology-of-r, sequences-and-limits, roots-and-rational-powers
  14  extremal-graph-theory                           20 items  <- graphs-walks-and-connectivity, finite-counting-and-binomial-coefficients, graph-colouring, ramsey-theory, inclusion-exclusion-and-the-pigeonhole-principle, monotone-sequences-and-cauchy-completeness
  14  group-homomorphisms-and-the-isomorphism-theorems  20 items  <- monoids-groups-and-subgroups, relations-functions-and-quotients, normal-subgroups-and-quotient-groups, cosets-and-lagranges-theorem
  14  linear-maps-rank-nullity-and-quotient-spaces-examples   1 items  <- vector-spaces-and-subspaces, linear-maps-rank-nullity-and-quotient-spaces, relations-functions-and-quotients, foundations-of-the-real-numbers, construction-of-the-natural-numbers
  14  matrices-and-the-matrix-of-a-linear-map         32 items  <- vector-spaces-and-subspaces, rings-subrings-and-integral-domains, foundations-of-the-real-numbers, linear-maps-rank-nullity-and-quotient-spaces, relations-functions-and-quotients, linear-independence-bases-and-dimension, finite-counting-and-binomial-coefficients
  14  monotone-functions-and-discontinuities          32 items  <- foundations-of-the-real-numbers, construction-of-r-via-cauchy-sequences, monotone-sequences-and-cauchy-completeness, sequences-and-limits, relations-functions-and-quotients, limits-of-real-functions, topology-of-r, suprema-and-infima, continuity-ivt-evt-and-uniform-continuity, countability-and-uncountability, construction-of-the-natural-numbers, series-and-nonnegative-tests, roots-and-rational-powers, cantor-set-baire-and-measure-zero, limsup-and-subsequential-limits, divisibility-gcd-and-bezout, rings-subrings-and-integral-domains, metric-spaces, vector-spaces-and-subspaces, linear-independence-bases-and-dimension, order-zorn-and-the-axiom-of-choice
  14  normal-subgroups-and-quotient-groups-examples    5 items  <- normal-subgroups-and-quotient-groups, monoids-groups-and-subgroups, cosets-and-lagranges-theorem, congruences-and-the-chinese-remainder-theorem
  14  ordinal-arithmetic                              28 items  <- ordinals-and-transfinite-recursion, construction-of-the-natural-numbers, countability-and-uncountability, relations-functions-and-quotients
  14  ramsey-theory-examples                           8 items  <- ramsey-theory, inclusion-exclusion-and-the-pigeonhole-principle, graphs-walks-and-connectivity, construction-of-the-natural-numbers, sequences-and-limits, construction-of-r-via-cauchy-sequences, foundations-of-the-real-numbers
  14  subspaces-products-and-quotients-examples       13 items  <- subspaces-products-and-quotients, metric-spaces, topological-spaces-and-continuity, monotone-sequences-and-cauchy-completeness, foundations-of-the-real-numbers, suprema-and-infima, cantor-set-baire-and-measure-zero, series-and-nonnegative-tests, roots-and-rational-powers, sequences-and-limits, construction-of-the-natural-numbers, construction-of-r-via-cauchy-sequences, limits-of-real-functions, countability-and-uncountability, relations-functions-and-quotients
  15  cardinal-arithmetic-and-cofinality              26 items  <- ordinals-and-transfinite-recursion, countability-and-uncountability, relations-functions-and-quotients, ordinal-arithmetic, finite-counting-and-binomial-coefficients, construction-of-the-natural-numbers
  15  connectedness                                   28 items  <- relations-functions-and-quotients, topological-spaces-and-continuity, monotone-sequences-and-cauchy-completeness, order-zorn-and-the-axiom-of-choice, construction-of-r-via-cauchy-sequences, foundations-of-the-real-numbers, metric-spaces, topology-of-r, suprema-and-infima, subspaces-products-and-quotients, construction-of-the-natural-numbers, countability-and-uncountability, ordinal-arithmetic, ordinals-and-transfinite-recursion
  15  cyclic-groups-and-direct-products                6 items  <- monoids-groups-and-subgroups, finite-counting-and-binomial-coefficients, divisibility-gcd-and-bezout, construction-of-r-via-cauchy-sequences, construction-of-the-natural-numbers, group-homomorphisms-and-the-isomorphism-theorems, normal-subgroups-and-quotient-groups
  15  extremal-graph-theory-examples                   9 items  <- extremal-graph-theory, graphs-walks-and-connectivity, ramsey-theory, graph-colouring
  15  free-groups-and-presentations                   32 items  <- construction-of-the-natural-numbers, monoids-groups-and-subgroups, normal-subgroups-and-quotient-groups, group-homomorphisms-and-the-isomorphism-theorems, relations-functions-and-quotients, finite-counting-and-binomial-coefficients, roots-and-rational-powers, cosets-and-lagranges-theorem
  15  gaussian-elimination-and-row-reduction          29 items  <- vector-spaces-and-subspaces, foundations-of-the-real-numbers, matrices-and-the-matrix-of-a-linear-map, construction-of-the-natural-numbers, linear-independence-bases-and-dimension, linear-maps-rank-nullity-and-quotient-spaces, finite-counting-and-binomial-coefficients, countability-and-uncountability, construction-of-r-via-cauchy-sequences
  15  group-actions-and-cayleys-theorem               37 items  <- monoids-groups-and-subgroups, relations-functions-and-quotients, group-homomorphisms-and-the-isomorphism-theorems, cosets-and-lagranges-theorem, finite-counting-and-binomial-coefficients, normal-subgroups-and-quotient-groups, primes-and-the-fundamental-theorem-of-arithmetic, congruences-and-the-chinese-remainder-theorem, divisibility-gcd-and-bezout, inclusion-exclusion-and-the-pigeonhole-principle
  15  group-homomorphisms-and-the-isomorphism-theorems-examples   5 items  <- group-homomorphisms-and-the-isomorphism-theorems, normal-subgroups-and-quotient-groups, monoids-groups-and-subgroups, construction-of-r-via-cauchy-sequences, relations-functions-and-quotients
  15  ideals-and-quotient-rings                       24 items  <- rings-subrings-and-integral-domains, monoids-groups-and-subgroups, group-homomorphisms-and-the-isomorphism-theorems, normal-subgroups-and-quotient-groups, cosets-and-lagranges-theorem, congruences-and-the-chinese-remainder-theorem, construction-of-r-via-cauchy-sequences, order-zorn-and-the-axiom-of-choice, foundations-of-the-real-numbers, relations-functions-and-quotients
  15  matrices-and-the-matrix-of-a-linear-map-examples   7 items  <- matrices-and-the-matrix-of-a-linear-map, construction-of-r-via-cauchy-sequences, foundations-of-the-real-numbers
  15  monotone-functions-and-discontinuities-examples  11 items  <- monotone-functions-and-discontinuities, topology-of-r, construction-of-r-via-cauchy-sequences, limits-of-real-functions, foundations-of-the-real-numbers, countability-and-uncountability, series-and-nonnegative-tests, relations-functions-and-quotients, monotone-sequences-and-cauchy-completeness, roots-and-rational-powers, continuity-ivt-evt-and-uniform-continuity, cantor-set-baire-and-measure-zero, suprema-and-infima, sequences-and-limits, vector-spaces-and-subspaces, metric-spaces, order-zorn-and-the-axiom-of-choice
  15  ordinal-arithmetic-examples                      8 items  <- ordinal-arithmetic, ordinals-and-transfinite-recursion, construction-of-the-natural-numbers, countability-and-uncountability
  15  the-derivative-and-mean-value-theorems          19 items  <- limits-of-real-functions, topology-of-r, monotone-sequences-and-cauchy-completeness, foundations-of-the-real-numbers, continuity-ivt-evt-and-uniform-continuity, roots-and-rational-powers, construction-of-the-natural-numbers, monotone-functions-and-discontinuities, relations-functions-and-quotients, suprema-and-infima, completeness-and-uniform-continuity
  15  the-riemann-integral                            18 items  <- monotone-sequences-and-cauchy-completeness, roots-and-rational-powers, suprema-and-infima, construction-of-the-natural-numbers, foundations-of-the-real-numbers, sequences-and-limits, relations-functions-and-quotients, monotone-functions-and-discontinuities, limsup-and-subsequential-limits, order-zorn-and-the-axiom-of-choice, continuity-ivt-evt-and-uniform-continuity, topology-of-r, cantor-set-baire-and-measure-zero, countability-and-uncountability, limits-of-real-functions, construction-of-r-via-cauchy-sequences
  16  cardinal-arithmetic-and-cofinality-examples      8 items  <- cardinal-arithmetic-and-cofinality, countability-and-uncountability, ordinals-and-transfinite-recursion, relations-functions-and-quotients, construction-of-the-natural-numbers, cantor-set-baire-and-measure-zero, foundations-of-the-real-numbers, construction-of-r-via-cauchy-sequences, sequences-and-limits, ordinal-arithmetic
  16  compactness                                     31 items  <- topological-spaces-and-continuity, countability-and-uncountability, compactness-in-metric-spaces, order-zorn-and-the-axiom-of-choice, metric-spaces, subspaces-products-and-quotients, filters-and-ultrafilters, foundations-of-the-real-numbers, construction-of-r-via-cauchy-sequences, suprema-and-infima, monotone-sequences-and-cauchy-completeness, construction-of-the-natural-numbers, relations-functions-and-quotients, sequences-and-limits, connectedness, ordinals-and-transfinite-recursion, ordinal-arithmetic, topology-of-r
  16  cyclic-groups-and-direct-products-examples       2 items  <- cyclic-groups-and-direct-products, monoids-groups-and-subgroups, normal-subgroups-and-quotient-groups, congruences-and-the-chinese-remainder-theorem, group-homomorphisms-and-the-isomorphism-theorems
  16  darboux-lhopital-and-taylor                     20 items  <- the-derivative-and-mean-value-theorems, continuity-ivt-evt-and-uniform-continuity, limits-of-real-functions, construction-of-the-natural-numbers, finite-counting-and-binomial-coefficients, roots-and-rational-powers, foundations-of-the-real-numbers, topology-of-r, monotone-sequences-and-cauchy-completeness, monotone-functions-and-discontinuities, limsup-and-subsequential-limits
  16  euclidean-domains-pids-and-unique-factorisation   7 items  <- rings-subrings-and-integral-domains, monoids-groups-and-subgroups, construction-of-the-natural-numbers, ideals-and-quotient-rings
  16  free-groups-and-presentations-examples          12 items  <- free-groups-and-presentations, monoids-groups-and-subgroups, congruences-and-the-chinese-remainder-theorem, construction-of-the-natural-numbers, finite-counting-and-binomial-coefficients, cyclic-groups-and-direct-products, construction-of-r-via-cauchy-sequences
  16  free-products-and-amalgamation                  27 items  <- monoids-groups-and-subgroups, construction-of-the-natural-numbers, normal-subgroups-and-quotient-groups, group-homomorphisms-and-the-isomorphism-theorems, free-groups-and-presentations, cosets-and-lagranges-theorem, relations-functions-and-quotients
  16  gaussian-elimination-and-row-reduction-examples   9 items  <- gaussian-elimination-and-row-reduction, construction-of-r-via-cauchy-sequences, matrices-and-the-matrix-of-a-linear-map, congruences-and-the-chinese-remainder-theorem
  16  group-actions-and-cayleys-theorem-examples      17 items  <- group-actions-and-cayleys-theorem, monoids-groups-and-subgroups, normal-subgroups-and-quotient-groups, congruences-and-the-chinese-remainder-theorem, finite-counting-and-binomial-coefficients, cosets-and-lagranges-theorem, group-homomorphisms-and-the-isomorphism-theorems
  16  ideals-and-quotient-rings-examples               6 items  <- ideals-and-quotient-rings, construction-of-r-via-cauchy-sequences, primes-and-the-fundamental-theorem-of-arithmetic, congruences-and-the-chinese-remainder-theorem, rings-subrings-and-integral-domains
  16  modules-and-module-homomorphisms                14 items  <- rings-subrings-and-integral-domains, monoids-groups-and-subgroups, ideals-and-quotient-rings, normal-subgroups-and-quotient-groups, relations-functions-and-quotients, group-homomorphisms-and-the-isomorphism-theorems, cosets-and-lagranges-theorem
  16  properties-of-the-integral-and-the-working-ftc  20 items  <- the-riemann-integral, suprema-and-infima, monotone-sequences-and-cauchy-completeness, roots-and-rational-powers, foundations-of-the-real-numbers, construction-of-the-natural-numbers, countability-and-uncountability, continuity-ivt-evt-and-uniform-continuity, topology-of-r, monotone-functions-and-discontinuities, completeness-and-uniform-continuity, metric-spaces, the-derivative-and-mean-value-theorems, limits-of-real-functions, absolute-convergence-and-rearrangement, series-and-nonnegative-tests, sequences-and-limits
  16  symmetric-groups-and-the-sign-homomorphism      14 items  <- monoids-groups-and-subgroups, construction-of-the-natural-numbers, finite-counting-and-binomial-coefficients, group-actions-and-cayleys-theorem, construction-of-r-via-cauchy-sequences, group-homomorphisms-and-the-isomorphism-theorems
  16  the-derivative-and-mean-value-theorems-examples  10 items  <- the-derivative-and-mean-value-theorems, roots-and-rational-powers, foundations-of-the-real-numbers, topology-of-r, limits-of-real-functions, continuity-ivt-evt-and-uniform-continuity, monotone-sequences-and-cauchy-completeness, monotone-functions-and-discontinuities, relations-functions-and-quotients, suprema-and-infima, completeness-and-uniform-continuity
  16  the-riemann-integral-examples                   10 items  <- the-riemann-integral, roots-and-rational-powers, construction-of-the-natural-numbers, foundations-of-the-real-numbers, continuity-ivt-evt-and-uniform-continuity, monotone-sequences-and-cauchy-completeness, suprema-and-infima, limits-of-real-functions, monotone-functions-and-discontinuities, cantor-set-baire-and-measure-zero, topology-of-r, countability-and-uncountability, sequences-and-limits, construction-of-r-via-cauchy-sequences
  16  the-structure-of-finite-abelian-groups          27 items  <- normal-subgroups-and-quotient-groups, monoids-groups-and-subgroups, cyclic-groups-and-direct-products, group-homomorphisms-and-the-isomorphism-theorems, construction-of-the-natural-numbers, cosets-and-lagranges-theorem, primes-and-the-fundamental-theorem-of-arithmetic, divisibility-gcd-and-bezout, congruences-and-the-chinese-remainder-theorem, finite-counting-and-binomial-coefficients
  17  bounded-variation-and-riemann-stieltjes         33 items  <- the-riemann-integral, roots-and-rational-powers, suprema-and-infima, foundations-of-the-real-numbers, monotone-sequences-and-cauchy-completeness, monotone-functions-and-discontinuities, limits-of-real-functions, continuity-ivt-evt-and-uniform-continuity, series-and-nonnegative-tests, sequences-and-limits, properties-of-the-integral-and-the-working-ftc, the-derivative-and-mean-value-theorems, completeness-and-uniform-continuity, construction-of-r-via-cauchy-sequences, absolute-convergence-and-rearrangement, countability-and-uncountability, topology-of-r
  17  compactness-examples                             8 items  <- foundations-of-the-real-numbers, compactness, topological-spaces-and-continuity, countability-and-uncountability, subspaces-products-and-quotients, construction-of-the-natural-numbers, cantor-set-baire-and-measure-zero, compactness-in-metric-spaces, monotone-sequences-and-cauchy-completeness, metric-spaces, topology-of-r, ordinal-arithmetic, ordinals-and-transfinite-recursion, continuity-ivt-evt-and-uniform-continuity, construction-of-r-via-cauchy-sequences, connectedness, suprema-and-infima, order-zorn-and-the-axiom-of-choice
  17  conjugacy-and-simplicity-in-the-symmetric-groups  18 items  <- monoids-groups-and-subgroups, symmetric-groups-and-the-sign-homomorphism, group-actions-and-cayleys-theorem, finite-counting-and-binomial-coefficients, cosets-and-lagranges-theorem, normal-subgroups-and-quotient-groups
  17  convexity                                       19 items  <- monotone-sequences-and-cauchy-completeness, continuity-ivt-evt-and-uniform-continuity, completeness-and-uniform-continuity, limits-of-real-functions, the-derivative-and-mean-value-theorems, monotone-functions-and-discontinuities, darboux-lhopital-and-taylor, construction-of-the-natural-numbers, roots-and-rational-powers, foundations-of-the-real-numbers, relations-functions-and-quotients
  17  countability-axioms-and-cardinal-functions      35 items  <- topological-spaces-and-continuity, countability-and-uncountability, ordinals-and-transfinite-recursion, cardinal-arithmetic-and-cofinality, relations-functions-and-quotients, compactness, metric-spaces, subspaces-products-and-quotients, construction-of-r-via-cauchy-sequences, order-zorn-and-the-axiom-of-choice, monotone-sequences-and-cauchy-completeness
  17  darboux-lhopital-and-taylor-examples             8 items  <- limits-of-real-functions, darboux-lhopital-and-taylor, the-derivative-and-mean-value-theorems, roots-and-rational-powers, foundations-of-the-real-numbers, monotone-functions-and-discontinuities, finite-counting-and-binomial-coefficients, construction-of-the-natural-numbers
  17  euclidean-domains-pids-and-unique-factorisation-examples   1 items  <- euclidean-domains-pids-and-unique-factorisation, rings-subrings-and-integral-domains, construction-of-r-via-cauchy-sequences, divisibility-gcd-and-bezout
  17  free-products-and-amalgamation-examples          8 items  <- free-products-and-amalgamation, normal-subgroups-and-quotient-groups, cyclic-groups-and-direct-products, free-groups-and-presentations, group-homomorphisms-and-the-isomorphism-theorems
  17  function-space-topologies                       24 items  <- subspaces-products-and-quotients, topological-spaces-and-continuity, construction-of-the-natural-numbers, suprema-and-infima, foundations-of-the-real-numbers, metric-spaces, compactness-in-metric-spaces, compactness, construction-of-r-via-cauchy-sequences, completeness-and-uniform-continuity, relations-functions-and-quotients, monotone-sequences-and-cauchy-completeness, sequences-and-limits, vector-spaces-and-subspaces, countability-and-uncountability
  17  improper-integrals                              25 items  <- limits-of-real-functions, properties-of-the-integral-and-the-working-ftc, the-riemann-integral, monotone-sequences-and-cauchy-completeness, foundations-of-the-real-numbers, sequences-and-limits, construction-of-r-via-cauchy-sequences, suprema-and-infima, series-and-nonnegative-tests, roots-and-rational-powers, the-derivative-and-mean-value-theorems, monotone-functions-and-discontinuities, continuity-ivt-evt-and-uniform-continuity
  17  modules-and-module-homomorphisms-examples        2 items  <- modules-and-module-homomorphisms, congruences-and-the-chinese-remainder-theorem, construction-of-r-via-cauchy-sequences, ideals-and-quotient-rings, rings-subrings-and-integral-domains
  17  nets-and-filters                                28 items  <- relations-functions-and-quotients, topological-spaces-and-continuity, subspaces-products-and-quotients, filters-and-ultrafilters, compactness, countability-and-uncountability, sequences-and-limits
  17  polynomial-rings-and-roots                      44 items  <- rings-subrings-and-integral-domains, construction-of-the-natural-numbers, foundations-of-the-real-numbers, euclidean-domains-pids-and-unique-factorisation, ideals-and-quotient-rings, monoids-groups-and-subgroups, finite-counting-and-binomial-coefficients, the-structure-of-finite-abelian-groups, construction-of-r-via-cauchy-sequences, divisibility-gcd-and-bezout, primes-and-the-fundamental-theorem-of-arithmetic, congruences-and-the-chinese-remainder-theorem
  17  properties-of-the-integral-and-the-working-ftc-examples  13 items  <- properties-of-the-integral-and-the-working-ftc, the-derivative-and-mean-value-theorems, continuity-ivt-evt-and-uniform-continuity, the-riemann-integral, roots-and-rational-powers, foundations-of-the-real-numbers, monotone-sequences-and-cauchy-completeness, monotone-functions-and-discontinuities, suprema-and-infima, series-and-nonnegative-tests, construction-of-r-via-cauchy-sequences, relations-functions-and-quotients, limits-of-real-functions, topology-of-r, cantor-set-baire-and-measure-zero, countability-and-uncountability, sequences-and-limits, metric-spaces
  17  rn-as-a-normed-space                            22 items  <- vector-spaces-and-subspaces, linear-maps-rank-nullity-and-quotient-spaces, metric-spaces, foundations-of-the-real-numbers, linear-independence-bases-and-dimension, roots-and-rational-powers, construction-of-the-natural-numbers, countability-and-uncountability, suprema-and-infima, completeness-and-uniform-continuity, compactness-in-metric-spaces, sequences-and-limits, construction-of-r-via-cauchy-sequences, monotone-sequences-and-cauchy-completeness, continuity-ivt-evt-and-uniform-continuity, limits-of-real-functions, topology-of-r, order-zorn-and-the-axiom-of-choice, the-derivative-and-mean-value-theorems, the-riemann-integral, properties-of-the-integral-and-the-working-ftc, monotone-functions-and-discontinuities, series-and-nonnegative-tests, absolute-convergence-and-rearrangement, relations-functions-and-quotients
  17  separation-axioms                               28 items  <- topological-spaces-and-continuity, countability-and-uncountability, subspaces-products-and-quotients, cantor-set-baire-and-measure-zero, topology-of-r, metric-spaces, monotone-sequences-and-cauchy-completeness, foundations-of-the-real-numbers, construction-of-the-natural-numbers, suprema-and-infima, ordinals-and-transfinite-recursion, connectedness, compactness
  17  symmetric-groups-and-the-sign-homomorphism-examples   7 items  <- monoids-groups-and-subgroups, symmetric-groups-and-the-sign-homomorphism, finite-counting-and-binomial-coefficients, normal-subgroups-and-quotient-groups, cosets-and-lagranges-theorem
  17  the-structure-of-finite-abelian-groups-examples   8 items  <- the-structure-of-finite-abelian-groups, congruences-and-the-chinese-remainder-theorem, normal-subgroups-and-quotient-groups, cyclic-groups-and-direct-products, primes-and-the-fundamental-theorem-of-arithmetic, construction-of-r-via-cauchy-sequences, monoids-groups-and-subgroups, finite-counting-and-binomial-coefficients
  17  uniform-convergence-of-functions                19 items  <- vector-spaces-and-subspaces, construction-of-r-via-cauchy-sequences, foundations-of-the-real-numbers, monotone-sequences-and-cauchy-completeness, series-and-nonnegative-tests, suprema-and-infima, metric-spaces, completeness-and-uniform-continuity, compactness-in-metric-spaces, properties-of-the-integral-and-the-working-ftc, the-riemann-integral, roots-and-rational-powers, continuity-ivt-evt-and-uniform-continuity, the-derivative-and-mean-value-theorems, limits-of-real-functions, topology-of-r, absolute-convergence-and-rearrangement, order-zorn-and-the-axiom-of-choice, construction-of-the-natural-numbers
  18  approximation-and-compactness-in-ck             29 items  <- uniform-convergence-of-functions, compactness-in-metric-spaces, completeness-and-uniform-continuity, countability-and-uncountability, roots-and-rational-powers, finite-counting-and-binomial-coefficients, metric-spaces, foundations-of-the-real-numbers, monotone-sequences-and-cauchy-completeness, the-derivative-and-mean-value-theorems, limits-of-real-functions
  18  arc-length-and-rectifiable-curves               15 items  <- rn-as-a-normed-space, the-riemann-integral, foundations-of-the-real-numbers, limsup-and-subsequential-limits, bounded-variation-and-riemann-stieltjes, linear-independence-bases-and-dimension, monotone-functions-and-discontinuities, completeness-and-uniform-continuity, metric-spaces, uniform-convergence-of-functions, continuity-ivt-evt-and-uniform-continuity, the-derivative-and-mean-value-theorems, properties-of-the-integral-and-the-working-ftc
  18  bounded-variation-and-riemann-stieltjes-examples  12 items  <- bounded-variation-and-riemann-stieltjes, foundations-of-the-real-numbers, the-derivative-and-mean-value-theorems, completeness-and-uniform-continuity, roots-and-rational-powers, cantor-set-baire-and-measure-zero, monotone-functions-and-discontinuities, monotone-sequences-and-cauchy-completeness, metric-spaces, continuity-ivt-evt-and-uniform-continuity, construction-of-r-via-cauchy-sequences, limits-of-real-functions, the-riemann-integral, series-and-nonnegative-tests, suprema-and-infima, properties-of-the-integral-and-the-working-ftc, sequences-and-limits
  18  composition-series-and-solvable-groups          27 items  <- normal-subgroups-and-quotient-groups, group-homomorphisms-and-the-isomorphism-theorems, conjugacy-and-simplicity-in-the-symmetric-groups, monoids-groups-and-subgroups, cosets-and-lagranges-theorem, construction-of-the-natural-numbers, cyclic-groups-and-direct-products, group-actions-and-cayleys-theorem, primes-and-the-fundamental-theorem-of-arithmetic
  18  conjugacy-and-simplicity-in-the-symmetric-groups-examples   8 items  <- conjugacy-and-simplicity-in-the-symmetric-groups, symmetric-groups-and-the-sign-homomorphism, normal-subgroups-and-quotient-groups, monoids-groups-and-subgroups
  18  connectedness-examples                           8 items  <- connectedness, subspaces-products-and-quotients, metric-spaces, rn-as-a-normed-space, vector-spaces-and-subspaces, topological-spaces-and-continuity, monotone-sequences-and-cauchy-completeness, countability-and-uncountability, topology-of-r, foundations-of-the-real-numbers, ordinal-arithmetic, ordinals-and-transfinite-recursion, suprema-and-infima, sequences-and-limits
  18  convexity-examples                               4 items  <- convexity, foundations-of-the-real-numbers, roots-and-rational-powers, relations-functions-and-quotients, monotone-functions-and-discontinuities, the-derivative-and-mean-value-theorems, darboux-lhopital-and-taylor
  18  determinants-of-matrices-over-a-commutative-ring  24 items  <- rings-subrings-and-integral-domains, relations-functions-and-quotients, construction-of-the-natural-numbers, monoids-groups-and-subgroups, vector-spaces-and-subspaces, matrices-and-the-matrix-of-a-linear-map, symmetric-groups-and-the-sign-homomorphism, finite-counting-and-binomial-coefficients, foundations-of-the-real-numbers, construction-of-r-via-cauchy-sequences, polynomial-rings-and-roots, gaussian-elimination-and-row-reduction
  18  field-extensions-and-the-complex-numbers        21 items  <- foundations-of-the-real-numbers, rings-subrings-and-integral-domains, polynomial-rings-and-roots, ideals-and-quotient-rings, construction-of-r-via-cauchy-sequences
  18  formal-power-series                             22 items  <- rings-subrings-and-integral-domains, polynomial-rings-and-roots, foundations-of-the-real-numbers, ideals-and-quotient-rings, finite-counting-and-binomial-coefficients, construction-of-r-via-cauchy-sequences, formal-laurent-series-field
  18  function-space-topologies-examples               9 items  <- function-space-topologies, metric-spaces, compactness-in-metric-spaces, monotone-sequences-and-cauchy-completeness, completeness-and-uniform-continuity, topological-spaces-and-continuity, suprema-and-infima, foundations-of-the-real-numbers, subspaces-products-and-quotients, relations-functions-and-quotients
  18  hausdorff-via-the-diagonal                      13 items  <- topological-spaces-and-continuity, subspaces-products-and-quotients, separation-axioms, construction-of-the-natural-numbers, compactness, order-zorn-and-the-axiom-of-choice, relations-functions-and-quotients, countability-and-uncountability, metric-spaces, continuity-ivt-evt-and-uniform-continuity, monotone-sequences-and-cauchy-completeness, foundations-of-the-real-numbers, construction-of-r-via-cauchy-sequences
  18  improper-integrals-examples                     12 items  <- improper-integrals, properties-of-the-integral-and-the-working-ftc, monotone-sequences-and-cauchy-completeness, absolute-convergence-and-rearrangement, series-and-nonnegative-tests, foundations-of-the-real-numbers, the-derivative-and-mean-value-theorems, roots-and-rational-powers, continuity-ivt-evt-and-uniform-continuity, the-riemann-integral, limits-of-real-functions
  18  nets-and-filters-examples                        8 items  <- nets-and-filters, topological-spaces-and-continuity, finite-counting-and-binomial-coefficients, absolute-convergence-and-rearrangement, countability-and-uncountability, series-and-nonnegative-tests, foundations-of-the-real-numbers, filters-and-ultrafilters, compactness, subspaces-products-and-quotients, construction-of-the-natural-numbers, suprema-and-infima
  18  polynomial-rings-and-roots-examples             14 items  <- polynomial-rings-and-roots, construction-of-r-via-cauchy-sequences, ideals-and-quotient-rings, divisibility-gcd-and-bezout, cosets-and-lagranges-theorem, primes-and-the-fundamental-theorem-of-arithmetic, congruences-and-the-chinese-remainder-theorem, construction-of-the-natural-numbers
  18  power-series-and-real-analytic-functions        32 items  <- series-and-nonnegative-tests, absolute-convergence-and-rearrangement, roots-and-rational-powers, limsup-and-subsequential-limits, monotone-sequences-and-cauchy-completeness, uniform-convergence-of-functions, continuity-ivt-evt-and-uniform-continuity, foundations-of-the-real-numbers, sequences-and-limits, the-derivative-and-mean-value-theorems, properties-of-the-integral-and-the-working-ftc, finite-counting-and-binomial-coefficients, construction-of-the-natural-numbers, darboux-lhopital-and-taylor, topology-of-r, limits-of-real-functions, equivalent-forms-of-completeness, construction-of-r-via-cauchy-sequences
  18  primitive-roots-and-unit-groups-modulo-n        39 items  <- congruences-and-the-chinese-remainder-theorem, monoids-groups-and-subgroups, divisibility-gcd-and-bezout, cyclic-groups-and-direct-products, rings-subrings-and-integral-domains, polynomial-rings-and-roots, cosets-and-lagranges-theorem, construction-of-the-natural-numbers, finite-counting-and-binomial-coefficients, primes-and-the-fundamental-theorem-of-arithmetic, group-homomorphisms-and-the-isomorphism-theorems, the-structure-of-finite-abelian-groups
  18  rn-as-a-normed-space-examples                   12 items  <- rn-as-a-normed-space, the-derivative-and-mean-value-theorems, foundations-of-the-real-numbers, roots-and-rational-powers, linear-independence-bases-and-dimension, monotone-sequences-and-cauchy-completeness, continuity-ivt-evt-and-uniform-continuity, metric-spaces, suprema-and-infima, sequences-and-limits, properties-of-the-integral-and-the-working-ftc, the-riemann-integral, vector-spaces-and-subspaces, relations-functions-and-quotients, absolute-convergence-and-rearrangement, series-and-nonnegative-tests, construction-of-r-via-cauchy-sequences, countability-and-uncountability, construction-of-the-natural-numbers, compactness-in-metric-spaces, completeness-and-uniform-continuity, limsup-and-subsequential-limits
  18  separation-axioms-examples                       8 items  <- topological-spaces-and-continuity, separation-axioms, subspaces-products-and-quotients, countability-and-uncountability, monotone-sequences-and-cauchy-completeness, cantor-set-baire-and-measure-zero, metric-spaces, foundations-of-the-real-numbers, suprema-and-infima, topology-of-r, ordinal-arithmetic, ordinals-and-transfinite-recursion
  18  the-field-of-fractions-and-localisation         22 items  <- rings-subrings-and-integral-domains, foundations-of-the-real-numbers, polynomial-rings-and-roots, ideals-and-quotient-rings
  18  the-fundamental-theorems-of-calculus            10 items  <- properties-of-the-integral-and-the-working-ftc, the-riemann-integral, the-derivative-and-mean-value-theorems, countability-and-uncountability, continuity-ivt-evt-and-uniform-continuity, monotone-sequences-and-cauchy-completeness, limits-of-real-functions, uniform-convergence-of-functions, compactness-in-metric-spaces, bounded-variation-and-riemann-stieltjes
  18  the-riemann-integral-in-rn-and-jordan-content   30 items  <- metric-spaces, rn-as-a-normed-space, roots-and-rational-powers, monotone-sequences-and-cauchy-completeness, foundations-of-the-real-numbers, the-riemann-integral, construction-of-the-natural-numbers, suprema-and-infima, order-zorn-and-the-axiom-of-choice, relations-functions-and-quotients, compactness-in-metric-spaces, series-and-nonnegative-tests, countability-and-uncountability, cantor-set-baire-and-measure-zero, monotone-functions-and-discontinuities, limsup-and-subsequential-limits, continuity-ivt-evt-and-uniform-continuity, limits-of-real-functions, completeness-and-uniform-continuity
  18  the-topology-of-euclidean-space                 23 items  <- subspaces-products-and-quotients, continuity-ivt-evt-and-uniform-continuity, rn-as-a-normed-space, topological-spaces-and-continuity, metric-spaces, suprema-and-infima, compactness-in-metric-spaces, compactness, countability-and-uncountability, connectedness, finite-counting-and-binomial-coefficients, monotone-sequences-and-cauchy-completeness, vector-spaces-and-subspaces, foundations-of-the-real-numbers, construction-of-the-natural-numbers, topology-of-r, order-zorn-and-the-axiom-of-choice, linear-independence-bases-and-dimension
  18  the-total-derivative                            17 items  <- rn-as-a-normed-space, linear-independence-bases-and-dimension, roots-and-rational-powers, monotone-sequences-and-cauchy-completeness, metric-spaces
  18  uniform-convergence-of-functions-examples        8 items  <- uniform-convergence-of-functions, roots-and-rational-powers, monotone-sequences-and-cauchy-completeness, foundations-of-the-real-numbers, the-riemann-integral, properties-of-the-integral-and-the-working-ftc, continuity-ivt-evt-and-uniform-continuity, topology-of-r, suprema-and-infima, construction-of-r-via-cauchy-sequences, the-derivative-and-mean-value-theorems
  19  approximation-and-compactness-in-ck-examples     7 items  <- approximation-and-compactness-in-ck, uniform-convergence-of-functions, compactness-in-metric-spaces, monotone-sequences-and-cauchy-completeness, countability-and-uncountability
  19  composition-series-and-solvable-groups-examples  10 items  <- composition-series-and-solvable-groups, cyclic-groups-and-direct-products, conjugacy-and-simplicity-in-the-symmetric-groups, normal-subgroups-and-quotient-groups, monoids-groups-and-subgroups, group-homomorphisms-and-the-isomorphism-theorems
  19  determinants-of-matrices-over-a-commutative-ring-examples   7 items  <- determinants-of-matrices-over-a-commutative-ring, symmetric-groups-and-the-sign-homomorphism, finite-counting-and-binomial-coefficients, construction-of-r-via-cauchy-sequences, divisibility-gcd-and-bezout, congruences-and-the-chinese-remainder-theorem, rings-subrings-and-integral-domains
  19  dual-spaces-bilinear-forms-and-inertia          33 items  <- linear-maps-rank-nullity-and-quotient-spaces, matrices-and-the-matrix-of-a-linear-map, linear-independence-bases-and-dimension, vector-spaces-and-subspaces, rings-subrings-and-integral-domains, foundations-of-the-real-numbers, construction-of-r-via-cauchy-sequences, determinants-of-matrices-over-a-commutative-ring
  19  equivalent-forms-of-completeness-examples       10 items  <- the-field-of-fractions-and-localisation, foundations-of-the-real-numbers, construction-of-r-via-cauchy-sequences, polynomial-rings-and-roots, equivalent-forms-of-completeness, formal-laurent-series-field, sequences-and-limits, monotone-sequences-and-cauchy-completeness, roots-and-rational-powers, suprema-and-infima, construction-of-the-natural-numbers
  19  field-extensions-and-the-complex-numbers-examples   7 items  <- field-extensions-and-the-complex-numbers, polynomial-rings-and-roots, construction-of-r-via-cauchy-sequences, foundations-of-the-real-numbers, congruences-and-the-chinese-remainder-theorem, ideals-and-quotient-rings
  19  formal-power-series-examples                     9 items  <- formal-power-series, finite-counting-and-binomial-coefficients, congruences-and-the-chinese-remainder-theorem
  19  free-modules-and-exact-sequences                29 items  <- modules-and-module-homomorphisms, determinants-of-matrices-over-a-commutative-ring, relations-functions-and-quotients, monoids-groups-and-subgroups, order-zorn-and-the-axiom-of-choice, rings-subrings-and-integral-domains, euclidean-domains-pids-and-unique-factorisation, construction-of-r-via-cauchy-sequences
  19  hausdorff-via-the-diagonal-examples              8 items  <- hausdorff-via-the-diagonal, subspaces-products-and-quotients, metric-spaces, topological-spaces-and-continuity, monotone-sequences-and-cauchy-completeness, foundations-of-the-real-numbers, separation-axioms, countability-and-uncountability, continuity-ivt-evt-and-uniform-continuity, compactness, construction-of-r-via-cauchy-sequences, order-zorn-and-the-axiom-of-choice, relations-functions-and-quotients
  19  hereditary-and-productive-separation            24 items  <- separation-axioms, subspaces-products-and-quotients, topological-spaces-and-continuity, order-zorn-and-the-axiom-of-choice, monotone-sequences-and-cauchy-completeness, metric-spaces, countability-and-uncountability, compactness, construction-of-r-via-cauchy-sequences, relations-functions-and-quotients, cardinal-arithmetic-and-cofinality, cantor-set-baire-and-measure-zero, foundations-of-the-real-numbers, hausdorff-via-the-diagonal, ordinal-arithmetic
  19  homotopy-and-homotopy-equivalence               22 items  <- topological-spaces-and-continuity, subspaces-products-and-quotients, monotone-sequences-and-cauchy-completeness, connectedness, metric-spaces, relations-functions-and-quotients, rn-as-a-normed-space, the-topology-of-euclidean-space, countability-and-uncountability
  19  inverse-and-implicit-function-theorems           5 items  <- the-total-derivative, relations-functions-and-quotients, rn-as-a-normed-space, metric-spaces, completeness-and-uniform-continuity
  19  plane-graphs-euler-and-the-five-colour-theorem  36 items  <- the-topology-of-euclidean-space, relations-functions-and-quotients, finite-counting-and-binomial-coefficients, metric-spaces, connectedness, topological-spaces-and-continuity, foundations-of-the-real-numbers, monotone-sequences-and-cauchy-completeness, graphs-walks-and-connectivity, construction-of-the-natural-numbers, suprema-and-infima, trees-forests-and-spanning-trees, matchings-covers-menger-and-network-flows, inclusion-exclusion-and-the-pigeonhole-principle, graph-colouring
  19  power-series-and-real-analytic-functions-examples   8 items  <- series-and-nonnegative-tests, power-series-and-real-analytic-functions, absolute-convergence-and-rearrangement, foundations-of-the-real-numbers, limsup-and-subsequential-limits, sequences-and-limits, finite-counting-and-binomial-coefficients, uniform-convergence-of-functions, equivalent-forms-of-completeness
  19  primitive-roots-and-unit-groups-modulo-n-examples  11 items  <- primitive-roots-and-unit-groups-modulo-n, congruences-and-the-chinese-remainder-theorem, monoids-groups-and-subgroups
  19  semidirect-products-and-automorphism-groups     38 items  <- group-actions-and-cayleys-theorem, group-homomorphisms-and-the-isomorphism-theorems, monoids-groups-and-subgroups, normal-subgroups-and-quotient-groups, cyclic-groups-and-direct-products, composition-series-and-solvable-groups, congruences-and-the-chinese-remainder-theorem, divisibility-gcd-and-bezout, free-groups-and-presentations, rings-subrings-and-integral-domains, polynomial-rings-and-roots, finite-counting-and-binomial-coefficients, cosets-and-lagranges-theorem, primes-and-the-fundamental-theorem-of-arithmetic, symmetric-groups-and-the-sign-homomorphism
  19  sine-cosine-and-the-definition-of-pi            16 items  <- power-series-and-real-analytic-functions, series-and-nonnegative-tests, the-derivative-and-mean-value-theorems, absolute-convergence-and-rearrangement, continuity-ivt-evt-and-uniform-continuity, limits-of-real-functions, construction-of-the-natural-numbers, roots-and-rational-powers
  19  splitting-fields                                18 items  <- field-extensions-and-the-complex-numbers, polynomial-rings-and-roots, rings-subrings-and-integral-domains, construction-of-the-natural-numbers, foundations-of-the-real-numbers, finite-counting-and-binomial-coefficients, monoids-groups-and-subgroups
  19  the-determinant-of-a-linear-operator            20 items  <- matrices-and-the-matrix-of-a-linear-map, linear-independence-bases-and-dimension, determinants-of-matrices-over-a-commutative-ring, gaussian-elimination-and-row-reduction, rings-subrings-and-integral-domains, monoids-groups-and-subgroups
  19  the-exponential-function                        19 items  <- power-series-and-real-analytic-functions, finite-counting-and-binomial-coefficients, roots-and-rational-powers, foundations-of-the-real-numbers, series-and-nonnegative-tests, the-derivative-and-mean-value-theorems, limits-of-real-functions, continuity-ivt-evt-and-uniform-continuity, construction-of-r-via-cauchy-sequences, sequences-and-limits, properties-of-the-integral-and-the-working-ftc, uniform-convergence-of-functions, the-riemann-integral, construction-of-the-natural-numbers
  19  the-field-of-fractions-and-localisation-examples   8 items  <- the-field-of-fractions-and-localisation, construction-of-r-via-cauchy-sequences, construction-of-the-natural-numbers, rings-subrings-and-integral-domains, primes-and-the-fundamental-theorem-of-arithmetic, ideals-and-quotient-rings, congruences-and-the-chinese-remainder-theorem, polynomial-rings-and-roots, foundations-of-the-real-numbers
  19  the-riemann-integral-in-rn-and-jordan-content-examples   8 items  <- the-riemann-integral-in-rn-and-jordan-content, roots-and-rational-powers, countability-and-uncountability, topology-of-r, metric-spaces, cantor-set-baire-and-measure-zero, compactness-in-metric-spaces, continuity-ivt-evt-and-uniform-continuity, foundations-of-the-real-numbers, construction-of-the-natural-numbers, limits-of-real-functions
  19  the-topology-of-euclidean-space-examples         6 items  <- the-topology-of-euclidean-space, metric-spaces, linear-independence-bases-and-dimension, topological-spaces-and-continuity, foundations-of-the-real-numbers, rn-as-a-normed-space, connectedness, compactness, subspaces-products-and-quotients
  19  the-total-derivative-examples                    6 items  <- the-total-derivative, the-derivative-and-mean-value-theorems, rn-as-a-normed-space, metric-spaces, completeness-and-uniform-continuity
  19  uniform-spaces                                  54 items  <- filters-and-ultrafilters, hausdorff-via-the-diagonal, topological-spaces-and-continuity, subspaces-products-and-quotients, metric-spaces, completeness-and-uniform-continuity, finite-counting-and-binomial-coefficients, compactness-in-metric-spaces, roots-and-rational-powers, suprema-and-infima, monotone-sequences-and-cauchy-completeness, construction-of-the-natural-numbers, nets-and-filters, relations-functions-and-quotients, compactness, order-zorn-and-the-axiom-of-choice, countability-and-uncountability, separation-axioms, foundations-of-the-real-numbers, monoids-groups-and-subgroups
  19  urysohn-lemma-and-tietze                        13 items  <- monotone-sequences-and-cauchy-completeness, roots-and-rational-powers, foundations-of-the-real-numbers, finite-counting-and-binomial-coefficients, construction-of-the-natural-numbers, countability-and-uncountability, topological-spaces-and-continuity, suprema-and-infima, metric-spaces, separation-axioms, compactness-in-metric-spaces, order-zorn-and-the-axiom-of-choice, relations-functions-and-quotients, series-and-nonnegative-tests, equivalent-forms-of-completeness, continuity-ivt-evt-and-uniform-continuity, compactness, hausdorff-via-the-diagonal, subspaces-products-and-quotients, ordinals-and-transfinite-recursion, topology-of-r
  20  algebraic-extensions-degree-and-finite-fields   35 items  <- field-extensions-and-the-complex-numbers, linear-independence-bases-and-dimension, finite-counting-and-binomial-coefficients, rings-subrings-and-integral-domains, foundations-of-the-real-numbers, primes-and-the-fundamental-theorem-of-arithmetic, congruences-and-the-chinese-remainder-theorem, construction-of-r-via-cauchy-sequences, monoids-groups-and-subgroups, polynomial-rings-and-roots, splitting-fields, roots-and-rational-powers
  20  arc-length-and-rectifiable-curves-examples       8 items  <- arc-length-and-rectifiable-curves, rn-as-a-normed-space, sine-cosine-and-the-definition-of-pi, the-riemann-integral, series-and-nonnegative-tests, foundations-of-the-real-numbers, bounded-variation-and-riemann-stieltjes, construction-of-the-natural-numbers, linear-independence-bases-and-dimension, uniform-convergence-of-functions, monotone-sequences-and-cauchy-completeness, cantor-set-baire-and-measure-zero, monotone-functions-and-discontinuities
  20  countability-axioms-and-cardinal-functions-examples   9 items  <- countability-axioms-and-cardinal-functions, the-topology-of-euclidean-space, metric-spaces, topological-spaces-and-continuity, hereditary-and-productive-separation, monotone-sequences-and-cauchy-completeness, countability-and-uncountability, construction-of-r-via-cauchy-sequences, cardinal-arithmetic-and-cofinality-examples, cardinal-arithmetic-and-cofinality, relations-functions-and-quotients, compactness, separation-axioms, ordinal-arithmetic
  20  dual-spaces-bilinear-forms-and-inertia-examples  12 items  <- dual-spaces-bilinear-forms-and-inertia, congruences-and-the-chinese-remainder-theorem, linear-independence-bases-and-dimension, polynomial-rings-and-roots, determinants-of-matrices-over-a-commutative-ring, matrices-and-the-matrix-of-a-linear-map
  20  eigenvalues-eigenvectors-and-the-characteristic-polynomial  23 items  <- linear-maps-rank-nullity-and-quotient-spaces, matrices-and-the-matrix-of-a-linear-map, linear-independence-bases-and-dimension, foundations-of-the-real-numbers, determinants-of-matrices-over-a-commutative-ring, polynomial-rings-and-roots, the-determinant-of-a-linear-operator
  20  free-modules-and-exact-sequences-examples       10 items  <- free-modules-and-exact-sequences, modules-and-module-homomorphisms, linear-independence-bases-and-dimension, matrices-and-the-matrix-of-a-linear-map, rings-subrings-and-integral-domains
  20  fubini-and-change-of-variables                  25 items  <- the-riemann-integral-in-rn-and-jordan-content, roots-and-rational-powers, metric-spaces, compactness-in-metric-spaces, inverse-and-implicit-function-theorems, the-total-derivative, determinants-of-matrices-over-a-commutative-ring, gaussian-elimination-and-row-reduction, completeness-and-uniform-continuity, rn-as-a-normed-space, properties-of-the-integral-and-the-working-ftc, monotone-functions-and-discontinuities
  20  fundamental-trigonometric-identities            19 items  <- sine-cosine-and-the-definition-of-pi, foundations-of-the-real-numbers, roots-and-rational-powers, construction-of-the-natural-numbers, finite-counting-and-binomial-coefficients, continuity-ivt-evt-and-uniform-continuity
  20  hereditary-and-productive-separation-examples    7 items  <- hereditary-and-productive-separation, topological-spaces-and-continuity, separation-axioms, hausdorff-via-the-diagonal
  20  homotopy-and-homotopy-equivalence-examples       7 items  <- homotopy-and-homotopy-equivalence, monotone-sequences-and-cauchy-completeness, countability-and-uncountability, topological-spaces-and-continuity, connectedness, subspaces-products-and-quotients, the-topology-of-euclidean-space
  20  inner-product-spaces-and-orthogonality          34 items  <- dual-spaces-bilinear-forms-and-inertia, field-extensions-and-the-complex-numbers, roots-and-rational-powers, monoids-groups-and-subgroups, linear-independence-bases-and-dimension, vector-spaces-and-subspaces, determinants-of-matrices-over-a-commutative-ring, the-determinant-of-a-linear-operator, matrices-and-the-matrix-of-a-linear-map, linear-maps-rank-nullity-and-quotient-spaces
  20  inverse-and-implicit-function-theorems-examples   3 items  <- inverse-and-implicit-function-theorems, the-total-derivative, the-derivative-and-mean-value-theorems, metric-spaces, foundations-of-the-real-numbers, sine-cosine-and-the-definition-of-pi, monotone-functions-and-discontinuities
  20  mixed-partials-taylor-and-extrema               30 items  <- the-total-derivative, finite-counting-and-binomial-coefficients, roots-and-rational-powers, vector-spaces-and-subspaces, the-derivative-and-mean-value-theorems, foundations-of-the-real-numbers, darboux-lhopital-and-taylor, rn-as-a-normed-space, metric-spaces, linear-independence-bases-and-dimension, compactness-in-metric-spaces, the-exponential-function
  20  partitions-of-unity-and-paracompactness         25 items  <- compactness, topological-spaces-and-continuity, subspaces-products-and-quotients, separation-axioms, metric-spaces, relations-functions-and-quotients, urysohn-lemma-and-tietze, compactness-in-metric-spaces, ordinals-and-transfinite-recursion, monotone-sequences-and-cauchy-completeness, countability-and-uncountability, order-zorn-and-the-axiom-of-choice, hereditary-and-productive-separation
  20  pi-the-equivalent-characterizations             16 items  <- arc-length-and-rectifiable-curves, rn-as-a-normed-space, sine-cosine-and-the-definition-of-pi, the-riemann-integral, foundations-of-the-real-numbers, monotone-functions-and-discontinuities, continuity-ivt-evt-and-uniform-continuity, roots-and-rational-powers, the-derivative-and-mean-value-theorems, sequences-and-limits, properties-of-the-integral-and-the-working-ftc, series-and-nonnegative-tests, monoids-groups-and-subgroups, finite-counting-and-binomial-coefficients
  20  plane-graphs-euler-and-the-five-colour-theorem-examples   7 items  <- plane-graphs-euler-and-the-five-colour-theorem, trees-forests-and-spanning-trees, graphs-walks-and-connectivity, graph-colouring, connectedness
  20  semidirect-products-and-automorphism-groups-examples  15 items  <- semidirect-products-and-automorphism-groups, monoids-groups-and-subgroups, symmetric-groups-and-the-sign-homomorphism, group-homomorphisms-and-the-isomorphism-theorems, congruences-and-the-chinese-remainder-theorem, finite-counting-and-binomial-coefficients, cyclic-groups-and-direct-products, composition-series-and-solvable-groups
  20  sine-cosine-and-the-definition-of-pi-examples    5 items  <- sine-cosine-and-the-definition-of-pi, absolute-convergence-and-rearrangement, foundations-of-the-real-numbers, limits-of-real-functions, the-derivative-and-mean-value-theorems
  20  splitting-fields-examples                        8 items  <- splitting-fields, polynomial-rings-and-roots, foundations-of-the-real-numbers, field-extensions-and-the-complex-numbers, construction-of-r-via-cauchy-sequences, roots-and-rational-powers, congruences-and-the-chinese-remainder-theorem
  20  symmetric-polynomials                           29 items  <- rings-subrings-and-integral-domains, polynomial-rings-and-roots, monoids-groups-and-subgroups, splitting-fields, finite-counting-and-binomial-coefficients
  20  tensor-products-of-modules                      38 items  <- modules-and-module-homomorphisms, monoids-groups-and-subgroups, rings-subrings-and-integral-domains, free-modules-and-exact-sequences, normal-subgroups-and-quotient-groups, group-homomorphisms-and-the-isomorphism-theorems, construction-of-r-via-cauchy-sequences, linear-independence-bases-and-dimension, dual-spaces-bilinear-forms-and-inertia, matrices-and-the-matrix-of-a-linear-map, ideals-and-quotient-rings
  20  the-determinant-of-a-linear-operator-examples    8 items  <- the-determinant-of-a-linear-operator, construction-of-r-via-cauchy-sequences, matrices-and-the-matrix-of-a-linear-map, determinants-of-matrices-over-a-commutative-ring, divisibility-gcd-and-bezout, rings-subrings-and-integral-domains
  20  the-exponential-function-examples                7 items  <- the-exponential-function, roots-and-rational-powers, sequences-and-limits, uniform-convergence-of-functions, the-derivative-and-mean-value-theorems, power-series-and-real-analytic-functions, finite-counting-and-binomial-coefficients, darboux-lhopital-and-taylor, metric-spaces, linear-independence-bases-and-dimension, vector-spaces-and-subspaces, monotone-functions-and-discontinuities, countability-and-uncountability, relations-functions-and-quotients, foundations-of-the-real-numbers, continuity-ivt-evt-and-uniform-continuity
  20  the-fundamental-group                            6 items  <- connectedness, homotopy-and-homotopy-equivalence, topological-spaces-and-continuity, subspaces-products-and-quotients, continuity-ivt-evt-and-uniform-continuity, monoids-groups-and-subgroups
  20  the-fundamental-theorems-of-calculus-examples    6 items  <- the-fundamental-theorems-of-calculus, the-riemann-integral, the-derivative-and-mean-value-theorems, sine-cosine-and-the-definition-of-pi, foundations-of-the-real-numbers, cantor-set-baire-and-measure-zero, monotone-functions-and-discontinuities, countability-and-uncountability, topology-of-r, properties-of-the-integral-and-the-working-ftc, monotone-sequences-and-cauchy-completeness
  20  the-logarithm-and-general-powers                26 items  <- the-exponential-function, monotone-functions-and-discontinuities, the-derivative-and-mean-value-theorems, properties-of-the-integral-and-the-working-ftc, continuity-ivt-evt-and-uniform-continuity, monotone-sequences-and-cauchy-completeness, roots-and-rational-powers, order-zorn-and-the-axiom-of-choice, foundations-of-the-real-numbers, construction-of-r-via-cauchy-sequences, suprema-and-infima, sequences-and-limits, series-and-nonnegative-tests, power-series-and-real-analytic-functions, absolute-convergence-and-rearrangement, construction-of-the-natural-numbers
  20  tychonoff-embedding-and-stone-cech              12 items  <- topological-spaces-and-continuity, monotone-sequences-and-cauchy-completeness, subspaces-products-and-quotients, separation-axioms, hereditary-and-productive-separation, compactness, nets-and-filters, topology-of-r, metric-spaces, hausdorff-via-the-diagonal, urysohn-lemma-and-tietze, compactness-in-metric-spaces
  20  uniform-spaces-examples                          8 items  <- uniform-spaces, metric-spaces, completeness-and-uniform-continuity, topological-spaces-and-continuity, foundations-of-the-real-numbers, monoids-groups-and-subgroups, topology-of-r, separation-axioms, subspaces-products-and-quotients, nets-and-filters, countability-and-uncountability, hereditary-and-productive-separation
  20  urysohn-lemma-and-tietze-examples                8 items  <- urysohn-lemma-and-tietze, separation-axioms, continuity-ivt-evt-and-uniform-continuity, monotone-sequences-and-cauchy-completeness, topological-spaces-and-continuity, metric-spaces, compactness-in-metric-spaces, foundations-of-the-real-numbers, topology-of-r
  21  algebraic-extensions-degree-and-finite-fields-examples  14 items  <- field-extensions-and-the-complex-numbers, polynomial-rings-and-roots, foundations-of-the-real-numbers, roots-and-rational-powers, algebraic-extensions-degree-and-finite-fields, congruences-and-the-chinese-remainder-theorem, primes-and-the-fundamental-theorem-of-arithmetic, ideals-and-quotient-rings
  21  categories-functors-and-natural-transformations  60 items  <- the-zfc-axioms-and-basic-set-constructions, ordinals-and-transfinite-recursion, relations-functions-and-quotients, monoids-groups-and-subgroups, rings-subrings-and-integral-domains, vector-spaces-and-subspaces, linear-maps-rank-nullity-and-quotient-spaces, modules-and-module-homomorphisms, topological-spaces-and-continuity, construction-of-r-via-cauchy-sequences, the-fundamental-group
  21  diagonalisation-and-the-minimal-polynomial      26 items  <- linear-independence-bases-and-dimension, matrices-and-the-matrix-of-a-linear-map, eigenvalues-eigenvectors-and-the-characteristic-polynomial, ideals-and-quotient-rings, polynomial-rings-and-roots, field-extensions-and-the-complex-numbers, vector-spaces-and-subspaces, splitting-fields
  21  eigenvalues-eigenvectors-and-the-characteristic-polynomial-examples   7 items  <- eigenvalues-eigenvectors-and-the-characteristic-polynomial, foundations-of-the-real-numbers, congruences-and-the-chinese-remainder-theorem, linear-independence-bases-and-dimension, determinants-of-matrices-over-a-commutative-ring
  21  finite-probability-and-the-probabilistic-method  28 items  <- finite-probability-spaces-and-random-variables, the-exponential-function, the-derivative-and-mean-value-theorems, roots-and-rational-powers, graphs-walks-and-connectivity, finite-counting-and-binomial-coefficients, rings-subrings-and-integral-domains, series-and-nonnegative-tests, foundations-of-the-real-numbers, construction-of-r-via-cauchy-sequences, extremal-graph-theory, eulerian-and-hamiltonian-graphs, the-logarithm-and-general-powers, primes-and-the-fundamental-theorem-of-arithmetic, congruences-and-the-chinese-remainder-theorem, monoids-groups-and-subgroups, suprema-and-infima, graph-colouring
  21  fubini-and-change-of-variables-examples         13 items  <- fubini-and-change-of-variables, monotone-functions-and-discontinuities, the-riemann-integral, the-riemann-integral-in-rn-and-jordan-content, the-exponential-function, properties-of-the-integral-and-the-working-ftc, determinants-of-matrices-over-a-commutative-ring, sine-cosine-and-the-definition-of-pi, the-derivative-and-mean-value-theorems, construction-of-the-natural-numbers
  21  fundamental-trigonometric-identities-examples    6 items  <- fundamental-trigonometric-identities, sine-cosine-and-the-definition-of-pi, foundations-of-the-real-numbers
  21  further-trigonometric-identities-and-inverses    6 items  <- sine-cosine-and-the-definition-of-pi, the-derivative-and-mean-value-theorems, continuity-ivt-evt-and-uniform-continuity, monotone-functions-and-discontinuities, foundations-of-the-real-numbers, fundamental-trigonometric-identities, properties-of-the-integral-and-the-working-ftc, the-riemann-integral, series-and-nonnegative-tests, power-series-and-real-analytic-functions, absolute-convergence-and-rearrangement, the-exponential-function, the-logarithm-and-general-powers, finite-counting-and-binomial-coefficients, roots-and-rational-powers, darboux-lhopital-and-taylor, limsup-and-subsequential-limits, sequences-and-limits
  21  inner-product-spaces-and-orthogonality-examples  16 items  <- inner-product-spaces-and-orthogonality, monoids-groups-and-subgroups, vector-spaces-and-subspaces, field-extensions-and-the-complex-numbers, polynomial-rings-and-roots, dual-spaces-bilinear-forms-and-inertia
  21  line-integrals-and-the-gradient-theorem         31 items  <- arc-length-and-rectifiable-curves, rn-as-a-normed-space, the-riemann-integral, properties-of-the-integral-and-the-working-ftc, the-total-derivative, the-fundamental-theorems-of-calculus, relations-functions-and-quotients, linear-independence-bases-and-dimension, the-derivative-and-mean-value-theorems, fubini-and-change-of-variables, the-riemann-integral-in-rn-and-jordan-content, topology-of-r, compactness-in-metric-spaces
  21  metrization-theorems                            13 items  <- partitions-of-unity-and-paracompactness, topological-spaces-and-continuity, countability-and-uncountability, separation-axioms, metric-spaces, relations-functions-and-quotients, countability-axioms-and-cardinal-functions, subspaces-products-and-quotients
  21  mixed-partials-taylor-and-extrema-examples       9 items  <- mixed-partials-taylor-and-extrema, the-exponential-function, the-derivative-and-mean-value-theorems, the-total-derivative
  21  partitions-of-unity-and-paracompactness-examples   7 items  <- partitions-of-unity-and-paracompactness, monotone-sequences-and-cauchy-completeness, compactness, separation-axioms, relations-functions-and-quotients, hereditary-and-productive-separation, subspaces-products-and-quotients, countability-and-uncountability
  21  pi-the-equivalent-characterizations-examples     7 items  <- pi-the-equivalent-characterizations, sequences-and-limits, sine-cosine-and-the-definition-of-pi, arc-length-and-rectifiable-curves, rn-as-a-normed-space, the-riemann-integral
  21  symmetric-polynomials-examples                   9 items  <- symmetric-polynomials, congruences-and-the-chinese-remainder-theorem
  21  tensor-products-of-modules-examples             11 items  <- tensor-products-of-modules, divisibility-gcd-and-bezout, congruences-and-the-chinese-remainder-theorem, construction-of-r-via-cauchy-sequences, ideals-and-quotient-rings, modules-and-module-homomorphisms, polynomial-rings-and-roots, matrices-and-the-matrix-of-a-linear-map, vector-spaces-and-subspaces, field-extensions-and-the-complex-numbers, linear-independence-bases-and-dimension, rings-subrings-and-integral-domains
  21  the-complex-exponential-and-eulers-formula      28 items  <- field-extensions-and-the-complex-numbers, construction-of-the-natural-numbers, construction-of-r-via-cauchy-sequences, finite-counting-and-binomial-coefficients, monoids-groups-and-subgroups, foundations-of-the-real-numbers, rn-as-a-normed-space, metric-spaces, completeness-and-uniform-continuity, power-series-and-real-analytic-functions, series-and-nonnegative-tests, limsup-and-subsequential-limits, absolute-convergence-and-rearrangement, the-exponential-function, sine-cosine-and-the-definition-of-pi, fundamental-trigonometric-identities, the-logarithm-and-general-powers, roots-and-rational-powers, continuity-ivt-evt-and-uniform-continuity, compactness-in-metric-spaces
  21  the-fundamental-group-examples                   1 items  <- the-fundamental-group, monotone-sequences-and-cauchy-completeness, the-total-derivative
  21  the-integral-logarithm-and-its-characterisations  19 items  <- properties-of-the-integral-and-the-working-ftc, continuity-ivt-evt-and-uniform-continuity, the-riemann-integral, the-derivative-and-mean-value-theorems, roots-and-rational-powers, construction-of-the-natural-numbers, foundations-of-the-real-numbers, relations-functions-and-quotients, the-exponential-function, the-logarithm-and-general-powers, monotone-functions-and-discontinuities
  21  the-logarithm-and-general-powers-examples        6 items  <- the-logarithm-and-general-powers, foundations-of-the-real-numbers, the-exponential-function, continuity-ivt-evt-and-uniform-continuity
  21  tychonoff-embedding-and-stone-cech-examples      4 items  <- tychonoff-embedding-and-stone-cech, topological-spaces-and-continuity, compactness, construction-of-the-natural-numbers, topology-of-r, metric-spaces
  21  uniform-completeness-and-samuel-compactification  12 items  <- uniform-spaces, monotone-sequences-and-cauchy-completeness, metric-spaces, foundations-of-the-real-numbers, topology-of-r, finite-counting-and-binomial-coefficients, order-zorn-and-the-axiom-of-choice, compactness-in-metric-spaces, tychonoff-embedding-and-stone-cech, urysohn-lemma-and-tietze, hausdorff-via-the-diagonal, compactness
  22  categories-functors-and-natural-transformations-examples  25 items  <- categories-functors-and-natural-transformations, rings-subrings-and-integral-domains, free-groups-and-presentations, modules-and-module-homomorphisms, matrices-and-the-matrix-of-a-linear-map, connectedness, homotopy-and-homotopy-equivalence, topological-spaces-and-continuity, the-fundamental-group, subspaces-products-and-quotients, relations-functions-and-quotients, the-zfc-axioms-and-basic-set-constructions, group-homomorphisms-and-the-isomorphism-theorems, construction-of-the-natural-numbers, determinants-of-matrices-over-a-commutative-ring, group-actions-and-cayleys-theorem, ordinals-and-transfinite-recursion
  22  complex-differentiability-and-cauchy-riemann    28 items  <- field-extensions-and-the-complex-numbers, the-complex-exponential-and-eulers-formula, the-topology-of-euclidean-space, metric-spaces, connectedness, the-total-derivative, sine-cosine-and-the-definition-of-pi, polynomial-rings-and-roots, the-exponential-function, the-derivative-and-mean-value-theorems, partitions-of-unity-and-paracompactness, rn-as-a-normed-space, mixed-partials-taylor-and-extrema
  22  diagonalisation-and-the-minimal-polynomial-examples  12 items  <- diagonalisation-and-the-minimal-polynomial, eigenvalues-eigenvectors-and-the-characteristic-polynomial, linear-independence-bases-and-dimension, field-extensions-and-the-complex-numbers, splitting-fields
  22  erdos-hajnal-property-and-homogeneous-sets      14 items  <- induced-subgraphs-and-hereditary-graph-classes, the-logarithm-and-general-powers, the-exponential-function, ramsey-theory, finite-counting-and-binomial-coefficients, graphs-walks-and-connectivity, foundations-of-the-real-numbers, finite-probability-and-the-probabilistic-method, finite-probability-spaces-and-random-variables
  22  finite-probability-and-the-probabilistic-method-examples   6 items  <- finite-probability-and-the-probabilistic-method, finite-probability-spaces-and-random-variables, finite-counting-and-binomial-coefficients, ramsey-theory, roots-and-rational-powers, limits-of-real-functions, the-exponential-function, the-logarithm-and-general-powers
  22  further-trigonometric-identities-and-inverses-examples   3 items  <- further-trigonometric-identities-and-inverses, sine-cosine-and-the-definition-of-pi, fundamental-trigonometric-identities, the-derivative-and-mean-value-theorems
  22  line-integrals-and-the-gradient-theorem-examples   9 items  <- line-integrals-and-the-gradient-theorem, sine-cosine-and-the-definition-of-pi, the-fundamental-theorems-of-calculus, the-derivative-and-mean-value-theorems, the-riemann-integral, continuity-ivt-evt-and-uniform-continuity
  22  metrization-theorems-examples                    4 items  <- metrization-theorems, topological-spaces-and-continuity, countability-axioms-and-cardinal-functions, countability-and-uncountability, hereditary-and-productive-separation, construction-of-r-via-cauchy-sequences, relations-functions-and-quotients, separation-axioms, subspaces-products-and-quotients, foundations-of-the-real-numbers, cantor-set-baire-and-measure-zero, cardinal-arithmetic-and-cofinality, partitions-of-unity-and-paracompactness
  22  regular-pairs-and-induced-counting              25 items  <- graphs-walks-and-connectivity, induced-subgraphs-and-hereditary-graph-classes, finite-probability-spaces-and-random-variables, finite-probability-and-the-probabilistic-method
  22  the-complex-exponential-and-eulers-formula-examples   8 items  <- the-complex-exponential-and-eulers-formula, the-exponential-function, sine-cosine-and-the-definition-of-pi, rn-as-a-normed-space, field-extensions-and-the-complex-numbers, series-and-nonnegative-tests, monotone-sequences-and-cauchy-completeness
  22  the-integral-logarithm-and-its-characterisations-examples   5 items  <- the-integral-logarithm-and-its-characterisations, the-logarithm-and-general-powers, monotone-functions-and-discontinuities, the-exponential-function, relations-functions-and-quotients, continuity-ivt-evt-and-uniform-continuity, series-and-nonnegative-tests, properties-of-the-integral-and-the-working-ftc
  22  uniform-completeness-and-samuel-compactification-examples   5 items  <- uniform-completeness-and-samuel-compactification, uniform-spaces, metric-spaces, foundations-of-the-real-numbers, limits-of-real-functions, finite-counting-and-binomial-coefficients, topology-of-r, monotone-sequences-and-cauchy-completeness, tychonoff-embedding-and-stone-cech, construction-of-the-natural-numbers, countability-and-uncountability, separation-axioms
  22  universal-properties-and-the-yoneda-lemma       21 items  <- categories-functors-and-natural-transformations, relations-functions-and-quotients
  23  complex-differentiability-and-cauchy-riemann-examples  13 items  <- complex-differentiability-and-cauchy-riemann, field-extensions-and-the-complex-numbers, the-complex-exponential-and-eulers-formula, the-exponential-function, metric-spaces
  23  erdos-hajnal-property-and-homogeneous-sets-examples   8 items  <- erdos-hajnal-property-and-homogeneous-sets, graphs-walks-and-connectivity, the-logarithm-and-general-powers, induced-subgraphs-and-hereditary-graph-classes
  23  limits-and-colimits                             46 items  <- categories-functors-and-natural-transformations, universal-properties-and-the-yoneda-lemma, relations-functions-and-quotients, cardinal-arithmetic-and-cofinality, free-groups-and-presentations, normal-subgroups-and-quotient-groups, group-homomorphisms-and-the-isomorphism-theorems, monoids-groups-and-subgroups, subspaces-products-and-quotients, topological-spaces-and-continuity, modules-and-module-homomorphisms
  23  regular-pairs-and-induced-counting-examples      8 items  <- regular-pairs-and-induced-counting, induced-subgraphs-and-hereditary-graph-classes, graphs-walks-and-connectivity
  23  universal-properties-and-the-yoneda-lemma-examples  14 items  <- universal-properties-and-the-yoneda-lemma, categories-functors-and-natural-transformations, the-zfc-axioms-and-basic-set-constructions, relations-functions-and-quotients, construction-of-the-natural-numbers, monoids-groups-and-subgroups, free-groups-and-presentations, polynomial-rings-and-roots, construction-of-r-via-cauchy-sequences, rings-subrings-and-integral-domains, topological-spaces-and-continuity
  24  limits-and-colimits-examples                    17 items  <- limits-and-colimits, categories-functors-and-natural-transformations, relations-functions-and-quotients, subspaces-products-and-quotients, topological-spaces-and-continuity, monoids-groups-and-subgroups

180 warning(s):
  [multi-home] "ex-dihedral-group-of-order-six-is-s-three" appears on both semidirect-products-and-automorphism-groups-examples and semidirect-products-and-automorphism-groups
  [multi-home] "ex-affine-group-of-the-real-line" appears on both semidirect-products-and-automorphism-groups-examples and semidirect-products-and-automorphism-groups
  [multi-home] "ex-symmetric-group-splits-over-the-alternating-group" appears on both semidirect-products-and-automorphism-groups-examples and semidirect-products-and-automorphism-groups
  [multi-home] "ex-generalized-dihedral-group-of-the-klein-four-group" appears on both semidirect-products-and-automorphism-groups-examples and semidirect-products-and-automorphism-groups
  [multi-home] "ex-affine-group-modulo-eight-as-a-holomorph" appears on both semidirect-products-and-automorphism-groups-examples and semidirect-products-and-automorphism-groups
  [multi-home] "ex-automorphism-group-of-the-cyclic-group-of-order-eight" appears on both semidirect-products-and-automorphism-groups-examples and semidirect-products-and-automorphism-groups
  [multi-home] "ex-two-automorphisms-of-z-squared" appears on both semidirect-products-and-automorphism-groups-examples and semidirect-products-and-automorphism-groups
  [multi-home] "ex-s-four-as-the-holomorph-of-the-klein-four-group" appears on both semidirect-products-and-automorphism-groups-examples and semidirect-products-and-automorphism-groups
  [multi-home] "ex-nonabelian-group-of-order-twenty-one" appears on both semidirect-products-and-automorphism-groups-examples and semidirect-products-and-automorphism-groups
  [multi-home] "cex-cyclic-prime-square-extension-does-not-split" appears on both semidirect-products-and-automorphism-groups-examples and semidirect-products-and-automorphism-groups
  [multi-home] "cex-a-complement-in-a-semidirect-product-need-not-be-normal" appears on both semidirect-products-and-automorphism-groups-examples and semidirect-products-and-automorphism-groups
  [multi-home] "cex-a-subgroup-of-an-abelian-group-need-not-be-characteristic" appears on both semidirect-products-and-automorphism-groups-examples and semidirect-products-and-automorphism-groups
  [multi-home] "fs-every-short-exact-sequence-of-groups-splits" appears on both semidirect-products-and-automorphism-groups-examples and semidirect-products-and-automorphism-groups
  [multi-home] "fs-kernel-and-quotient-determine-a-group-extension" appears on both semidirect-products-and-automorphism-groups-examples and semidirect-products-and-automorphism-groups
  [multi-home] "fs-an-abelian-group-has-an-abelian-automorphism-group" appears on both semidirect-products-and-automorphism-groups-examples and semidirect-products-and-automorphism-groups
  [multi-home] "ex-primitive-roots-modulo-seventeen" appears on both primitive-roots-and-unit-groups-modulo-n-examples and primitive-roots-and-unit-groups-modulo-n
  [multi-home] "ex-index-table-modulo-seventeen" appears on both primitive-roots-and-unit-groups-modulo-n-examples and primitive-roots-and-unit-groups-modulo-n
  [multi-home] "ex-primitive-root-modulo-thirteen-by-prime-divisor-tests" appears on both primitive-roots-and-unit-groups-modulo-n-examples and primitive-roots-and-unit-groups-modulo-n
  [multi-home] "ex-lifting-a-primitive-root-through-powers-of-five" appears on both primitive-roots-and-unit-groups-modulo-n-examples and primitive-roots-and-unit-groups-modulo-n
  [multi-home] "ex-unit-group-modulo-two-hundred-forty" appears on both primitive-roots-and-unit-groups-modulo-n-examples and primitive-roots-and-unit-groups-modulo-n
  [multi-home] "ex-carmichael-function-of-five-hundred-sixty-one" appears on both primitive-roots-and-unit-groups-modulo-n-examples and primitive-roots-and-unit-groups-modulo-n
  [multi-home] "ex-carmichael-function-of-one-thousand-seven-hundred-twenty-nine" appears on both primitive-roots-and-unit-groups-modulo-n-examples and primitive-roots-and-unit-groups-modulo-n
  [multi-home] "cex-unit-group-modulo-fifteen-is-not-cyclic" appears on both primitive-roots-and-unit-groups-modulo-n-examples and primitive-roots-and-unit-groups-modulo-n
  [multi-home] "cex-euler-totient-need-not-be-the-unit-group-exponent" appears on both primitive-roots-and-unit-groups-modulo-n-examples and primitive-roots-and-unit-groups-modulo-n
  [multi-home] "ex-square-roots-of-one-modulo-one-hundred-twenty-eight" appears on both primitive-roots-and-unit-groups-modulo-n-examples and primitive-roots-and-unit-groups-modulo-n
  [multi-home] "ex-moduli-below-twenty-with-primitive-roots" appears on both primitive-roots-and-unit-groups-modulo-n-examples and primitive-roots-and-unit-groups-modulo-n
  [multi-home] "cex-rudin-bounded-spikes-are-not-equicontinuous" appears on both approximation-and-compactness-in-ck-examples and approximation-and-compactness-in-ck
  [multi-home] "cex-constant-functions-are-equicontinuous-not-pointwise-bounded" appears on both approximation-and-compactness-in-ck-examples and approximation-and-compactness-in-ck
  [multi-home] "cex-noncompact-domain-breaks-arzela-ascoli" appears on both approximation-and-compactness-in-ck-examples and approximation-and-compactness-in-ck
  [multi-home] "ex-bernstein-polynomials-of-the-square-function" appears on both approximation-and-compactness-in-ck-examples and approximation-and-compactness-in-ck
  [multi-home] "ex-distance-functions-form-a-compact-family-in-c01" appears on both approximation-and-compactness-in-ck-examples and approximation-and-compactness-in-ck
  [multi-home] "cex-even-polynomial-algebra-is-not-dense" appears on both approximation-and-compactness-in-ck-examples and approximation-and-compactness-in-ck
  [multi-home] "cex-separating-algebra-without-constants-is-not-dense" appears on both approximation-and-compactness-in-ck-examples and approximation-and-compactness-in-ck
  [multi-home] "def-integers" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts
  [multi-home] "lem-int-equivalence" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts
  [multi-home] "def-int-operations" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts
  [multi-home] "lem-int-add-well-defined" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts
  [multi-home] "lem-int-mul-well-defined" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts
  [multi-home] "thm-int-comm-ring" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts
  [multi-home] "def-int-order" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts
  [multi-home] "thm-int-ordered-ring" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts
  [multi-home] "lem-int-cancellation" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts
  [multi-home] "lem-nat-embeds-int" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts
  [multi-home] "def-rationals" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts
  [multi-home] "lem-rat-equivalence" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts
  [multi-home] "def-rat-operations" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts
  [multi-home] "lem-rat-ops-well-defined" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts
  [multi-home] "lem-rat-inverse-well-defined" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts
  [multi-home] "thm-rat-field" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts
  [multi-home] "def-rat-order" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts
  [multi-home] "lem-rat-positive-denominator" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts
  [multi-home] "thm-rat-ordered-field" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts
  [multi-home] "lem-int-embeds-rat" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts
  [multi-home] "lem-rat-archimedean" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts
  [multi-home] "fs-sqrt2-rational" appears on both construction-of-r-via-cauchy-sequences and construction-of-r-via-dedekind-cuts
  [multi-home] "cex-peano-unequal-mixed-partials" appears on both mixed-partials-taylor-and-extrema-examples and mixed-partials-taylor-and-extrema
  [multi-home] "cex-peano-surface-linewise-minimum-without-an-extremum" appears on both mixed-partials-taylor-and-extrema-examples and mixed-partials-taylor-and-extrema
  [multi-home] "cex-smooth-linewise-minimum-without-an-extremum" appears on both mixed-partials-taylor-and-extrema-examples and mixed-partials-taylor-and-extrema
  [multi-home] "cex-unique-critical-point-is-a-nonglobal-strict-local-minimum" appears on both mixed-partials-taylor-and-extrema-examples and mixed-partials-taylor-and-extrema
  [multi-home] "ex-monkey-saddle" appears on both mixed-partials-taylor-and-extrema-examples and mixed-partials-taylor-and-extrema
  [multi-home] "cex-zero-hessian-does-not-classify-a-critical-point" appears on both mixed-partials-taylor-and-extrema-examples and mixed-partials-taylor-and-extrema
  [multi-home] "ex-second-order-multivariable-taylor-polynomial-computed" appears on both mixed-partials-taylor-and-extrema-examples and mixed-partials-taylor-and-extrema
  [multi-home] "ex-lagrange-multiplier-on-an-affine-graph" appears on both mixed-partials-taylor-and-extrema-examples and mixed-partials-taylor-and-extrema
  [multi-home] "cex-lagrange-multiplier-rule-needs-a-regular-constraint" appears on both mixed-partials-taylor-and-extrema-examples and mixed-partials-taylor-and-extrema
  [b-leaf-legacy] items/ex-cardinal-functions-of-the-lower-limit-line.md: grandfathered B-page dependency "ex-the-cardinality-of-the-continuum" — Published legacy example dependency. It remains visible as a warning until its continuum-cardinality argument is moved to an A-page result or written inline under a separately audited content change.
  [cited-not-in-deps] items/cex-dirichlet-is-nowhere-continuous.md: cites "lem-sequential-characterisation-of-closure-r" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/cex-dirichlet-is-nowhere-continuous.md: cites "thm-sequential-criterion-for-continuity" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/cex-indicator-of-a-fat-cantor-set-is-not-integrable.md: cites "ex-indicator-of-the-cantor-set-is-integrable-with-integral-zero" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/cex-limit-differs-from-the-value.md: cites "cex-composition-of-limits-fails" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/cex-nested-open-intervals-empty.md: cites "ex-nested-intervals-single-point" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/cex-ordered-field-not-archimedean.md: cites "cor-rational-function-field-as-a-fraction-field" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/cex-psi-of-one-over-x-has-no-limit-at-zero.md: cites "lem-limit-implies-local-boundedness" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/cex-the-one-norm-comes-from-no-inner-product.md: cites "rem-rn-conventions-and-scope" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/cor-bolzano-weierstrass-in-rn.md: cites "rem-compactness-choice-ledger-metric" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/cor-boundedness-theorem-r.md: cites "thm-compactness-is-necessary-for-evt-and-uniform-continuity" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/cor-cauchy-product-absolute.md: cites "thm-dirichlet-rearrangement" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/cor-cesaro-matrix-is-regular.md: cites "thm-cesaro-mean-theorem" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/cor-continuous-extension-from-a-dense-subset-r.md: cites "cor-boundedness-theorem-r" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/cor-countably-many-discontinuities-integrable.md: cites "thm-cantor-set-properties" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/cor-no-function-is-continuous-exactly-on-q.md: cites "thm-dirichlet-and-thomae-continuity-sets" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/cor-stolz-cesaro-zero-over-zero.md: cites "thm-stolz-cesaro" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/cor-unconditional-iff-absolute-in-r.md: cites "rem-rearrangement-in-higher-dimensions" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/ex-cauchy-complete-not-complete-field.md: cites "fs-nested-intervals-implies-lub" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/fs-continuity-implies-uniform-continuity.md: cites "thm-heine-cantor-metric" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/fs-continuity-implies-uniform-continuity.md: cites "thm-compactness-is-necessary-for-evt-and-uniform-continuity" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/fs-equivalent-metrics-share-cauchy-sequences.md: cites "def-metric-convergence" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/fs-heine-borel-holds-in-every-normed-space.md: cites "thm-all-norms-on-rn-are-equivalent" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/fs-integrability-is-equivalent-to-a-nowhere-dense-discontinuity-set.md: cites "thm-lebesgue-criterion" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/fs-limit-equals-value.md: cites "thm-composition-of-function-limits" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/lem-additive-is-q-linear.md: cites "fs-additive-implies-linear" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/lem-bw-implies-archimedean.md: cites "fs-nested-intervals-implies-lub" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/lem-bw-implies-archimedean.md: cites "fs-cauchy-complete-implies-lub" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/lem-bw-implies-cauchy-complete.md: cites "lem-bw-implies-archimedean" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/lem-cauchy-complete-and-archimedean-imply-mct.md: cites "thm-laurent-cauchy-complete" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/lem-cauchy-complete-and-archimedean-imply-mct.md: cites "lem-mct-implies-archimedean" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/lem-cauchy-complete-and-archimedean-imply-mct.md: cites "lem-laurent-non-archimedean" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/lem-content-zero-implies-null.md: cites "thm-compact-null-is-content-zero" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/lem-finite-interval-cover-total-length.md: cites "lem-nondegenerate-interval-is-not-null" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/lem-finite-interval-cover-total-length.md: cites "thm-cantor-set-properties" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/lem-finite-interval-cover-total-length.md: cites "thm-fat-cantor-set-has-positive-measure" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/lem-finite-interval-cover-total-length.md: cites "fs-null-implies-content-zero" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/lem-function-limit-preserves-order.md: cites "fs-function-limit-preserves-strict-inequality" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/lem-function-limit-preserves-order.md: cites "lem-limit-is-local" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/lem-function-limit-unique.md: cites "fs-limit-unique-at-every-point-of-the-domain" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/lem-limit-implies-local-boundedness.md: cites "fs-limit-exists-implies-bounded-on-the-domain" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/lem-mct-implies-archimedean.md: cites "lem-cauchy-complete-and-archimedean-imply-mct" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/lem-mct-implies-archimedean.md: cites "rem-where-the-archimedean-hypothesis-is-needed" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/lem-mct-implies-lub.md: cites "lem-mct-implies-archimedean" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/lem-metric-convergent-implies-cauchy.md: cites "fs-cauchy-implies-convergent-in-every-metric-space" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/lem-nth-term-test.md: cites "fs-nth-term-test-converse" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/lem-real-and-metric-notions-agree.md: cites "thm-continuous-image-of-a-compact-set-r" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/lem-real-and-metric-notions-agree.md: cites "thm-extreme-value-r" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/lem-real-and-metric-notions-agree.md: cites "thm-heine-cantor-r" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/lem-real-and-metric-notions-agree.md: cites "thm-continuous-image-of-a-compact-space-is-compact" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/lem-real-and-metric-notions-agree.md: cites "thm-extreme-value-metric" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/lem-real-and-metric-notions-agree.md: cites "thm-heine-cantor-metric" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/lem-real-and-metric-notions-agree.md: cites "thm-heine-borel-characterisation-r" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/lem-real-and-metric-notions-agree.md: cites "thm-compact-iff-sequentially-compact-r" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/lem-refinement-inequalities.md: cites "def-darboux-integral" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/lem-refinement-inequalities.md: cites "thm-darboux-equals-riemann" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/lem-sign-preservation-near-a-limit.md: cites "thm-algebra-of-function-limits" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/rem-riemann-stieltjes-conventions-and-scope.md: cites "def-real-power" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-abel-dini.md: cites "fs-universal-comparison-series" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-algebra-of-function-limits.md: cites "thm-sequential-criterion-for-function-limits" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-algebra-of-function-limits.md: cites "rem-heine-criterion-choice-cost" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-algebra-of-function-limits.md: cites "thm-algebra-of-limits" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-arzela-ascoli-for-real-ck.md: cites "def-countable-choice" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-arzela-ascoli-for-real-ck.md: cites "def-dependent-choice" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-baire-category-r.md: cites "def-dependent-choice" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-baire-category-r.md: cites "thm-perfect-set-uncountable-r" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-baire-category-r.md: cites "rem-baire-in-r-is-choice-free" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-banach-fixed-point.md: cites "cor-banach-error-estimates" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-cantor-function-properties.md: cites "def-monotone-sequence" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-cesaro-mean-theorem.md: cites "fs-cesaro-converse" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-compact-null-is-content-zero.md: cites "lem-nondegenerate-interval-is-not-null" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-compact-subset-is-closed-and-bounded.md: cites "fs-closed-and-bounded-implies-compact-in-every-metric-space" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-compact-subset-is-closed-and-bounded.md: cites "thm-heine-borel-rn" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-complete-and-totally-bounded-implies-compact.md: cites "def-dependent-choice" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-completeness-equivalences.md: cites "fs-nested-intervals-implies-lub" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-completeness-equivalences.md: cites "fs-cauchy-complete-implies-lub" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-composition-of-function-limits.md: cites "fs-naive-composition-of-limits" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-continuity-iff-oscillation-zero.md: cites "lem-oscillation-superlevel-sets-are-closed" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-continuity-iff-oscillation-zero.md: cites "thm-discontinuity-set-is-f-sigma" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-continuity-preimage-characterisation.md: cites "def-isometry-and-metric-embedding" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-continuity-preimage-characterisation.md: cites "lem-real-and-metric-notions-agree" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-continuous-image-of-a-compact-set-r.md: cites "thm-continuous-image-of-a-compact-space-is-compact" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-continuous-image-of-a-compact-set-r.md: cites "lem-real-and-metric-notions-agree" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-continuous-inverse.md: cites "thm-connected-subsets-of-r-are-intervals" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-dirichlet-and-thomae-continuity-sets.md: cites "cex-dirichlet-is-nowhere-continuous" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-dirichlet-and-thomae-continuity-sets.md: cites "ex-distance-to-the-integers-is-1-lipschitz" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-dirichlet-test.md: cites "thm-alternating-series-test" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-discontinuity-set-is-f-sigma.md: cites "thm-baire-one-continuity-points" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-discontinuity-set-is-f-sigma.md: cites "thm-continuity-set-realisation" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-discontinuity-set-is-f-sigma.md: cites "cor-no-function-is-continuous-exactly-on-q" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-double-series-fubini.md: cites "fs-iterated-double-sums-always-agree" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-extreme-value-r.md: cites "thm-extreme-value-metric" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-extreme-value-r.md: cites "lem-real-and-metric-notions-agree" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-fermat-interior-extremum.md: cites "fs-vanishing-derivative-forbids-strict-increase" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-finitely-many-discontinuities-integrable.md: cites "thm-continuous-implies-integrable" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-grouping-of-series.md: cites "fs-grouping-can-be-undone" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-heine-borel-rn.md: cites "thm-complete-and-totally-bounded-implies-compact" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-heine-cantor-r.md: cites "thm-heine-cantor-metric" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-infinite-product-criterion.md: cites "rem-sums-proved-to-exist-but-not-evaluated" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-intermediate-value.md: cites "cex-evt-and-ivt-fail-over-a-non-complete-field" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-mean-value-inequality.md: cites "thm-norm-inequality-for-the-vector-valued-integral" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-mean-value-inequality.md: cites "cor-vector-valued-ftc-and-lipschitz-bound" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-mertens.md: cites "cor-cauchy-product-absolute" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-mertens.md: cites "fs-cauchy-product-of-convergent-series-converges" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-metric-compactness-equivalences.md: cites "rem-compactness-choice-ledger-metric" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-monotone-implies-integrable.md: cites "thm-monotone-with-prescribed-discontinuity-set" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-monotonicity-of-the-integral.md: cites "fs-nonnegative-integrable-with-zero-integral-vanishes" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-monotonicity-of-the-integral.md: cites "thm-nonnegative-continuous-with-zero-integral-vanishes" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-nonnegative-continuous-with-zero-integral-vanishes.md: cites "fs-nonnegative-integrable-with-zero-integral-vanishes" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-perfect-set-uncountable-r.md: cites "def-dependent-choice" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-plane-dual-exists-and-double-dual-recovers-primal.md: cites "def-plane-graph-face-and-boundary" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-riemann-criterion.md: cites "lem-integral-elementary-bounds" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-riemann-series-theorem.md: cites "thm-dirichlet-rearrangement" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-sequential-criterion-for-function-limits.md: cites "rem-heine-criterion-choice-cost" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-sequential-criterion-for-function-limits.md: cites "lem-sequential-characterisation-of-closure-r" in Statement/Facts but it is not in deps
  [cited-not-in-deps] items/thm-sequential-criterion-for-function-limits.md: cites "cor-sequential-criterion-for-nonexistence" in Statement/Facts but it is not in deps

OK — no cycles, all references resolve, no draft items on published pages.
```

```text
$ node tools/fwdcheck.mjs
fwdcheck: 4535 items, 0 open forward reference(s), 399 closed, 34 load bearing

1145 item(s) rest on later material and carry the forward marker:
  cex-a-closed-graph-without-continuity    inherited
  cex-a-composition-of-integrable-functions-that-is-not-integrable inherited
  cex-a-continuous-function-on-a-non-closed-subspace-with-no-extension inherited
  cex-a-continuous-image-of-a-locally-compact-space inherited
  cex-a-multiple-traversal-has-the-same-circle-trace-but-greater-length inherited
  cex-a-non-locally-finite-sum-can-be-discontinuous inherited
  cex-a-path-connected-space-that-is-not-locally-connected inherited
  cex-a-wild-arc-drawing-is-not-a-plane-graph inherited
  cex-absolute-value-integrable-without-the-function inherited
  cex-an-integrable-function-with-no-primitive inherited
  cex-antidiagonal-of-the-sorgenfrey-plane inherited
  cex-arc-length-is-not-continuous-under-uniform-convergence inherited
  cex-arcsine-not-differentiable-at-endpoints inherited
  cex-arcsine-of-sine-is-not-the-identity  inherited
  cex-bounded-not-totally-bounded          inherited
  cex-bounded-open-set-with-nonnull-boundary inherited
  cex-bounded-total-derivative-on-a-nonconvex-domain-need-not-give-global-lipschitz inherited
  cex-boundedness-is-not-topological       inherited
  cex-box-topology-diagonal-not-continuous inherited
  cex-cantor-intersection-needs-vanishing-diameters inherited
  cex-closed-and-bounded-not-compact-in-the-sup-metric inherited
  cex-closed-unbounded-euclidean-subset-not-compact inherited
  cex-closure-of-ball-smaller-than-closed-ball inherited
  cex-compact-convergence-without-uniform-convergence inherited
  cex-compact-set-without-jordan-content   inherited
  cex-completeness-is-not-topological      inherited
  cex-complex-continuous-multiplicative-map-not-the-standard-exponential inherited
  cex-complex-squaring-is-not-globally-invertible inherited
  cex-components-differ-from-quasicomponents inherited
  cex-constant-functions-are-equicontinuous-not-pointwise-bounded inherited
  cex-continuous-bijection-not-a-homeomorphism inherited
  cex-continuous-function-of-unbounded-variation inherited
  cex-continuous-map-destroying-cauchyness inherited
  cex-contraction-on-an-incomplete-space   inherited
  cex-differentiable-with-unbounded-derivative-is-not-lipschitz inherited
  cex-directional-derivatives-without-total-differentiability inherited
  cex-discontinuous-logarithmic-functional-equation inherited
  cex-discontinuous-midpoint-convex-hamel-function inherited
  cex-discontinuous-multiplicative-cauchy-solution inherited
  cex-even-polynomial-algebra-is-not-dense inherited
  cex-evt-fails-on-the-open-interval-and-on-the-half-line inherited
  cex-evt-fails-without-compactness        inherited
  cex-exponential-not-uniformly-continuous-on-r inherited
  cex-graph-of-x-sin-one-over-x-is-not-rectifiable inherited
  cex-heine-cantor-fails-without-compactness inherited
  cex-interior-of-a-union-is-larger        inherited
  cex-invertible-derivative-without-c-one-local-inverse inherited
  cex-k-four-is-planar-but-not-three-colourable inherited
  cex-k-three-three-satisfies-the-planar-edge-bound inherited
  cex-k-topology-is-not-uniformizable      inherited
  cex-lagrange-multiplier-rule-needs-a-regular-constraint inherited
  cex-limit-point-compact-without-countable-compactness inherited
  cex-lindelofness-is-not-productive-worked inherited
  cex-line-with-two-origins                inherited
  cex-log-one-plus-x-series-at-minus-one   inherited
  cex-logarithm-not-uniformly-continuous-on-positive-reals inherited
  cex-mean-value-equality-fails-for-a-vector-valued-function inherited
  cex-mercator-series-does-not-define-logarithm-globally inherited
  cex-modulus-is-nowhere-complex-differentiable inherited
  cex-modulus-squared-is-complex-differentiable-only-at-zero inherited
  cex-non-metrizable-topology              inherited
  cex-noninjective-change-of-variables-double-counts inherited
  cex-normality-is-not-finitely-productive inherited
  cex-normality-is-not-open-hereditary     inherited
  cex-omega-one-has-no-at-most-countable-cofinal-subset inherited
  cex-omitting-the-absolute-jacobian-reverses-sign inherited
  cex-one-existing-iterated-integral-does-not-give-riemann-integrability inherited
  cex-one-minus-two-plus-three-is-abel-but-not-cesaro-summable inherited
  cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval inherited
  cex-one-point-compactification-of-n-is-not-beta-n inherited
  cex-open-bounded-euclidean-subset-not-compact inherited
  cex-open-cover-with-no-lebesgue-number   inherited
  cex-ordered-field-not-archimedean        direct
  cex-paracompactness-is-not-open-hereditary inherited
  cex-paracompactness-is-not-productive    inherited
  cex-partial-derivatives-without-continuity inherited
  cex-pasting-fails-for-an-infinite-closed-cover inherited
  cex-peano-surface-linewise-minimum-without-an-extremum inherited
  cex-peano-unequal-mixed-partials         inherited
  cex-pointwise-bounded-but-not-equicontinuous inherited
  cex-polar-coordinates-are-not-globally-injective inherited
  cex-principal-complex-powers-exponent-law inherited
  cex-principal-value-one-over-x-squared-diverges inherited
  cex-product-of-uniformly-continuous-functions-need-not-be-uniformly-continuous inherited
  cex-projection-is-not-closed             inherited
  cex-pseudocompact-noncompact-particular-point-space inherited
  cex-q-not-dense-in-an-ordered-field      inherited
  cex-quotient-map-neither-open-nor-closed inherited
  cex-r-mod-q-is-indiscrete-like           inherited
  cex-rational-points-in-unit-square-have-no-jordan-content inherited
  cex-real-part-is-nowhere-complex-differentiable inherited
  cex-rudin-bounded-spikes-are-not-equicontinuous inherited
  cex-same-topology-different-cauchy-sequences inherited
  cex-separability-is-not-hereditary-worked inherited
  cex-separately-continuous-not-jointly-continuous inherited
  cex-separating-algebra-without-constants-is-not-dense inherited
  cex-sequentially-continuous-not-continuous inherited
  cex-set-distance-is-not-a-metric         inherited
  cex-shrinking-rectangles-have-integral-one inherited
  cex-sine-of-one-over-x-has-no-limit-at-zero inherited
  cex-smooth-function-not-equal-to-its-maclaurin-series inherited
  cex-smooth-linewise-minimum-without-an-extremum inherited
  cex-sphere-is-not-the-boundary-of-the-ball inherited
  cex-spikes-with-integral-one-converging-pointwise-to-zero inherited
  cex-straight-line-continuity-tests-do-not-imply-continuity inherited
  cex-strict-contraction-without-a-fixed-point inherited
  cex-t1-free-regular-and-normal-conventions inherited
  cex-tangent-addition-formula-without-domain inherited
  cex-the-box-topology-disconnects-a-product-of-connected-spaces inherited
  cex-the-deleted-tychonoff-plank-is-not-normal inherited
  cex-the-first-mean-value-theorem-needs-a-one-signed-weight inherited
  cex-the-koch-curve-is-not-rectifiable    inherited
  cex-the-logarithmic-ramsey-bound-is-not-an-erdos-hajnal-bound inherited
  cex-the-mean-value-inequality-is-attained inherited
  cex-the-one-form-y-dx-is-path-dependent  inherited
  cex-the-one-norm-comes-from-no-inner-product inherited
  cex-the-pointwise-limit-of-continuous-functions-need-not-be-continuous inherited
  cex-the-same-trace-can-have-different-path-lengths inherited
  cex-the-samuel-map-need-not-preserve-the-original-uniformity inherited
  cex-tietze-fails-in-a-t1-space-that-is-not-normal inherited
  cex-topologically-not-uniformly-equivalent inherited
  cex-totally-bounded-not-compact          inherited
  cex-two-maps-into-an-indiscrete-space-agreeing-on-a-dense-set inherited
  cex-uniform-bijection-with-non-uniform-inverse inherited
  cex-uniformly-not-lipschitz-equivalent   inherited
  cex-unique-critical-point-is-a-nonglobal-strict-local-minimum inherited
  cex-unsigned-half-angle-formula          inherited
  cex-volterra-bounded-derivative-not-riemann-integrable inherited
  cex-vortex-field-is-closed-but-not-exact-on-the-punctured-plane inherited
  cex-x-squared-is-not-uniformly-continuous-on-r inherited
  cex-zero-directional-derivatives-without-continuity inherited
  cex-zero-hessian-does-not-classify-a-critical-point inherited
  cor-a-compact-hausdorff-space-is-tychonoff inherited
  cor-a-map-homotopic-to-a-homotopy-equivalence-is-a-homotopy-equivalence inherited
  cor-a-retract-of-a-contractible-space-is-contractible inherited
  cor-abel-test-for-improper-integrals     inherited
  cor-arc-length-accumulation-derivative-is-speed inherited
  cor-area-as-a-line-integral-for-elementary-regions inherited
  cor-banach-error-estimates               inherited
  cor-bolzano-weierstrass-in-rn            inherited
  cor-bounded-derivative-implies-lipschitz inherited
  cor-c2-holomorphic-components-have-nonpositive-hessian-determinant inherited
  cor-cardinal-functions-detect-countability-axioms inherited
  cor-cartesian-and-polar-cauchy-riemann-equations inherited
  cor-cavalieri-principle-for-jordan-content inherited
  cor-central-binomial-coefficient-asymptotic-from-wallis inherited
  cor-change-of-variables-for-compactly-supported-functions inherited
  cor-change-of-variables-on-bounded-open-jordan-sets inherited
  cor-chord-length-is-at-most-arc-length   inherited
  cor-closed-exact-and-conservative-equivalence-on-star-shaped-domains inherited
  cor-compact-domain-maps-are-uniformly-continuous inherited
  cor-compact-hausdorff-partitions-of-unity inherited
  cor-complete-normality-is-hereditary     inherited
  cor-complex-de-moivre-formula            inherited
  cor-complex-differentiability-implies-continuity inherited
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity inherited
  cor-components-of-open-subsets-of-rn-are-polygonally-connected inherited
  cor-connected-subsets-of-the-line        inherited
  cor-conservative-fields-are-path-independent-and-have-zero-circulation inherited
  cor-constant-modulus-holomorphic-function-is-constant inherited
  cor-continuous-complex-derivative-gives-c1-components inherited
  cor-continuous-extension-from-a-dense-subset-r inherited
  cor-continuous-logarithmic-functions-form-a-one-parameter-family inherited
  cor-contractible-iff-identity-nullhomotopic inherited
  cor-contractible-spaces-are-path-connected inherited
  cor-convex-subsets-of-rn-are-contractible inherited
  cor-e-is-the-unique-unit-hyperbolic-area inherited
  cor-equicontinuous-bounded-sequence-has-a-uniformly-convergent-subsequence inherited
  cor-euclidean-closed-balls-and-spheres-are-compact inherited
  cor-euclidean-compactness-equivalence-chart inherited
  cor-euclidean-spheres-are-path-connected inherited
  cor-euler-formula-for-disconnected-plane-graphs inherited
  cor-every-graph-on-at-most-three-vertices-has-the-erdos-hajnal-property inherited
  cor-exponential-is-a-bijection-onto-positive-reals inherited
  cor-finite-section-support-forces-zero-integral inherited
  cor-ftc-integral-function-differentiable-almost-everywhere inherited
  cor-harmonic-addition-formula            inherited
  cor-heine-borel-in-the-product-topology  inherited
  cor-hessian-is-symmetric                 inherited
  cor-holomorphic-function-with-holomorphic-conjugate-is-constant inherited
  cor-homotopy-equivalence-bijection-on-path-components inherited
  cor-homotopy-relative-and-path-homotopy-are-equivalence-relations inherited
  cor-integrability-of-absolute-values-products-and-lattice-operations inherited
  cor-integral-exponential-addition-law    inherited
  cor-integral-logarithm-agrees-with-natural-logarithm inherited
  cor-integral-logarithm-is-strictly-increasing inherited
  cor-integral-logarithm-reciprocals-and-integer-powers inherited
  cor-intermediate-value-theorem-topological inherited
  cor-jacobian-determinant-of-a-holomorphic-map inherited
  cor-jordan-content-finite-additivity     inherited
  cor-jordan-content-under-a-c-one-diffeomorphism inherited
  cor-k-five-and-k-three-three-are-nonplanar inherited
  cor-lagrange-multiplier-rule-for-graph-constraints inherited
  cor-length-of-the-graph-of-a-c1-function inherited
  cor-limit-comparison-test-for-improper-integrals inherited
  cor-lower-limit-line-is-normal           inherited
  cor-metric-spaces-admit-subordinate-partitions-of-unity inherited
  cor-metrizability-and-first-countability-are-hereditary inherited
  cor-multivariable-taylor-formula-with-peano-remainder inherited
  cor-one-dimensional-and-multidimensional-riemann-agree inherited
  cor-one-dimensional-change-of-variables-with-absolute-derivative inherited
  cor-one-dimensional-null-and-content-zero-agree inherited
  cor-parallelepiped-content-is-the-absolute-determinant inherited
  cor-perfect-normality-is-hereditary      inherited
  cor-pi-is-the-first-positive-sine-zero   inherited
  cor-piecewise-c1-paths-have-additive-speed-integral-length inherited
  cor-planar-graph-has-low-degree-vertex   inherited
  cor-planar-graphs-have-no-kuratowski-subdivision inherited
  cor-planar-simple-graph-edge-bound       inherited
  cor-potentials-differ-by-a-componentwise-constant inherited
  cor-power-series-sums-are-continuous     inherited
  cor-power-series-sums-are-smooth-with-coefficient-formula inherited
  cor-primitives-of-a-continuous-function  inherited
  cor-punctured-rn-homotopy-equivalent-to-the-sphere inherited
  cor-real-analytic-functions-are-smooth   inherited
  cor-real-power-as-rational-limit         inherited
  cor-real-valued-holomorphic-function-is-constant inherited
  cor-regular-c1-paths-have-c1-unit-speed-parametrizations inherited
  cor-repeated-riemann-integrals-on-rectangles inherited
  cor-riemann-integral-of-a-product-function inherited
  cor-riemann-stieltjes-existence-bv-continuous inherited
  cor-rn-is-locally-compact-and-sigma-compact inherited
  cor-rn-is-polygonally-connected-and-locally-path-connected inherited
  cor-samuel-compactification-agrees-with-completion-for-totally-bounded-spaces inherited
  cor-samuel-compactification-is-unique    inherited
  cor-scalar-line-integral-of-one-is-arc-length inherited
  cor-second-order-taylor-expansion-with-the-hessian inherited
  cor-separated-uniformizable-iff-tychonoff inherited
  cor-sin-x-over-x-limit                   inherited
  cor-stone-cech-compactification-is-unique-over-x inherited
  cor-stone-cech-compactification-maps-onto-samuel-compactification inherited
  cor-stone-cech-of-compact-hausdorff-space-is-itself inherited
  cor-sum-of-roots-of-unity                inherited
  cor-symmetric-lovasz-local-lemma         inherited
  cor-termwise-integration-of-a-real-power-series inherited
  cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed inherited
  cor-the-class-of-all-graphs-is-not-erdos-hajnal inherited
  cor-tietze-for-unbounded-and-open-interval-valued-maps inherited
  cor-topological-groups-are-completely-regular inherited
  cor-triangle-free-planar-edge-bound      inherited
  cor-trigonometric-parity-and-pythagorean-identity inherited
  cor-two-continuous-maps-into-a-hausdorff-space-agreeing-on-a-dense-set-are-equal inherited
  cor-two-variable-hessian-determinant-test inherited
  cor-tychonoff-spaces-have-compactifications-under-the-ultrafilter-lemma inherited
  cor-uniform-limit-uniformly-continuous   inherited
  cor-urysohn-metrization                  inherited
  cor-urysohns-lemma-closes-the-separation-chain inherited
  cor-vector-valued-ftc-and-lipschitz-bound inherited
  cor-weierstrass-approximation-on-a-closed-interval inherited
  cor-weierstrass-approximation-on-the-unit-interval inherited
  cor-zero-total-derivative-on-a-convex-open-set-is-constant inherited
  def-absolute-and-conditional-improper-convergence inherited
  def-adjunction-cone-suspension           inherited
  def-arc-length-function                  inherited
  def-based-loops-and-fundamental-group    inherited
  def-c-one-map-and-local-inverse          inherited
  def-cauchy-in-metric                     inherited
  def-circular-arcs-circumference-and-diameter inherited
  def-ck-and-multi-index-notation-in-several-variables inherited
  def-closed-and-exact-c1-vector-fields    inherited
  def-compact-open-topology                inherited
  def-compactification-of-a-tychonoff-space inherited
  def-compactness-variants                 inherited
  def-complete-metric-space                inherited
  def-completely-normal-and-perfectly-normal-spaces inherited
  def-completely-regular-and-tychonoff-spaces inherited
  def-complex-differentiability-holomorphic-and-entire inherited
  def-complex-domain                       inherited
  def-complex-exponential                  inherited
  def-complex-logarithms-principal-logarithm-and-complex-powers inherited
  def-complex-metric-convergence-and-continuity inherited
  def-complex-polynomial-degree-and-monic  inherited
  def-complex-series-power-series-and-absolute-convergence inherited
  def-complex-trigonometric-and-hyperbolic-functions inherited
  def-continuous-real-functions-on-a-compact-metric-space inherited
  def-convex-subset-of-euclidean-space     inherited
  def-definite-and-indefinite-hessian-quadratic-forms inherited
  def-directional-and-partial-derivatives  inherited
  def-equicontinuity                       inherited
  def-equicontinuity-and-boundedness-in-ck inherited
  def-equivalent-norms                     inherited
  def-erdos-hajnal-property-and-constant   inherited
  def-euclidean-inner-product              inherited
  def-euclidean-linear-map                 inherited
  def-euclidean-local-extrema-and-critical-points inherited
  def-euclidean-spheres-and-closed-balls   inherited
  def-evaluation-map                       inherited
  def-g-delta-and-f-sigma-in-a-topological-space inherited
  def-hausdorff-space                      inherited
  def-hessian-and-euclidean-critical-point inherited
  def-homotopy-equivalence                 inherited
  def-homotopy-relative-and-path-homotopy  inherited
  def-hyperbolic-functions                 inherited
  def-induced-homomorphism-on-fundamental-groups inherited
  def-integral-exponential                 inherited
  def-integral-logarithm                   inherited
  def-invertible-euclidean-linear-map      inherited
  def-jacobian-determinant-of-a-c-one-map  inherited
  def-jacobian-matrix-and-gradient         inherited
  def-jordan-inner-and-outer-content       inherited
  def-locally-compact-metric-space         inherited
  def-locally-compact-space                inherited
  def-locally-connected                    inherited
  def-locally-metrizable-space             inherited
  def-logarithm-to-a-base                  inherited
  def-maximal-plane-and-maximally-planar-graph inherited
  def-metric-bounded-diameter              inherited
  def-metric-completion                    inherited
  def-metrizable-space                     inherited
  def-multidimensional-darboux-integral    inherited
  def-multidimensional-darboux-sums        inherited
  def-multidimensional-grid-partition      inherited
  def-multidimensional-rectangle-and-volume inherited
  def-multidimensional-tagged-partition-and-riemann-sum inherited
  def-multivariable-taylor-polynomial      inherited
  def-natural-logarithm                    inherited
  def-norm-and-normed-space                inherited
  def-null-and-content-zero-in-rn          inherited
  def-nullhomotopic-map-and-contractible-space inherited
  def-order-topology-on-a-linearly-ordered-set inherited
  def-order-topology-on-an-ordinal         inherited
  def-oriented-conformal-map-at-a-point    inherited
  def-oscillation-in-rn                    inherited
  def-p-norms-on-rn                        inherited
  def-partition-of-unity-subordinate-to-a-cover inherited
  def-path-connected                       inherited
  def-path-polygonal-length-and-rectifiability-in-rn inherited
  def-pi-via-first-positive-cosine-zero    inherited
  def-piecewise-c1-path-connected-conservative-and-path-independent inherited
  def-piecewise-c1-path-operations-and-oriented-reparametrizations inherited
  def-plane-dual-multigraph                inherited
  def-plane-graph-face-and-boundary        inherited
  def-polygonal-arc-and-polygon            inherited
  def-polygonal-path-and-polygonal-connectedness inherited
  def-positive-orientation-for-elementary-region-boundaries inherited
  def-principal-inverse-sine-and-cosine    inherited
  def-principal-inverse-tangent            inherited
  def-radian-angle-by-unit-circle-arc-length inherited
  def-real-power                           inherited
  def-regular-and-t3-spaces                inherited
  def-retraction-and-deformation-retract   inherited
  def-riemann-area-between-continuous-graphs inherited
  def-riemann-integral-over-a-jordan-set   inherited
  def-samuel-compactification              inherited
  def-samuel-uniformity                    inherited
  def-scalar-and-vector-line-integrals-along-piecewise-c1-paths inherited
  def-sections-and-iterated-riemann-integrals inherited
  def-series-of-vectors-and-rearrangement  inherited
  def-simply-connected                     inherited
  def-star-shaped-open-subset-of-rn        inherited
  def-stone-cech-compactification          inherited
  def-support-and-compactly-supported-riemann-integral-in-rn inherited
  def-tangent-cotangent-secant-cosecant    inherited
  def-the-long-line                        inherited
  def-the-space-of-summing-directions      inherited
  def-topology-of-compact-convergence      inherited
  def-topology-of-uniform-convergence      inherited
  def-total-derivative-in-euclidean-space  inherited
  def-totally-bounded                      inherited
  def-type-i-type-ii-and-elementary-green-regions inherited
  def-unital-separating-real-function-algebra inherited
  def-urysohn-space                        inherited
  def-vector-valued-derivative-and-integral inherited
  def-vector-valued-functions-limits-and-continuity inherited
  def-wirtinger-derivatives                inherited
  def-zero-sets-and-cozero-sets            inherited
  ex-a-cylinder-deformation-retracts-onto-an-end inherited
  ex-a-finite-hausdorff-space-is-discrete  inherited
  ex-a-forbidden-pattern-and-its-complement-share-eh-status inherited
  ex-a-point-and-r-are-homotopy-equivalent-not-homeomorphic inherited
  ex-a-rational-function-is-real-analytic-via-a-geometric-series inherited
  ex-a-two-point-retract-that-is-not-a-deformation-retract inherited
  ex-a-uniformly-equicontinuous-family-of-lipschitz-functions inherited
  ex-a-urysohn-function-on-the-real-line   inherited
  ex-a-vector-line-integral-counts-multiple-traversals inherited
  ex-absolute-value-lipschitz-not-c1       inherited
  ex-absolutely-convergent-rational-integral-on-the-line inherited
  ex-all-complex-logarithms-of-minus-one   inherited
  ex-all-values-of-i-to-the-i              inherited
  ex-alternating-harmonic-series-sums-to-log-two inherited
  ex-banach-fixed-point-for-square-roots   inherited
  ex-bartle-sherbert-bounds-for-pi         inherited
  ex-beta-kernel-convergence-rational      inherited
  ex-bounded-discontinuous-derivative-that-is-riemann-integrable inherited
  ex-bounded-functions-on-n-extend-to-beta-n inherited
  ex-bounded-functions-with-sup-metric-are-complete inherited
  ex-bounded-order-graph-classes-are-erdos-hajnal inherited
  ex-bounded-remetrisation-of-r            inherited
  ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous inherited
  ex-cantor-function-as-riemann-stieltjes-integrator inherited
  ex-cantor-function-graph-is-rectifiable-without-being-absolutely-continuous inherited
  ex-cantor-set-as-a-product               inherited
  ex-cantor-slab-has-content-zero          inherited
  ex-cardinal-functions-of-a-one-point-compactification inherited
  ex-cardinal-functions-of-the-lower-limit-line inherited
  ex-cardinal-functions-of-the-real-line   inherited
  ex-cavalieri-shear-preserves-jordan-content inherited
  ex-change-of-basepoint-isomorphism-for-fundamental-groups inherited
  ex-circle-as-r-mod-z                     inherited
  ex-closed-cube-is-totally-bounded        inherited
  ex-closed-subsets-of-the-line-as-zero-sets-and-g-delta-sets inherited
  ex-closed-subspaces-of-normal-spaces     inherited
  ex-closed-unit-interval-has-one-compatible-uniformity inherited
  ex-compactness-in-the-standard-topologies inherited
  ex-complete-and-empty-hereditary-classes-have-constant-one inherited
  ex-completion-of-q-is-r                  inherited
  ex-complex-differentiable-on-the-coordinate-axes-but-holomorphic-nowhere inherited
  ex-complex-exponential-cauchy-riemann-in-cartesian-and-polar-form inherited
  ex-complex-geometric-power-series        inherited
  ex-complex-sine-is-unbounded-on-the-imaginary-axis inherited
  ex-componentwise-convergence-and-a-vector-valued-integral-computed inherited
  ex-conditionally-convergent-step-function-integral inherited
  ex-connectedness-of-the-standard-topologies inherited
  ex-constructing-a-potential-on-an-open-rectangle inherited
  ex-continuous-functions-on-the-unit-interval-with-the-sup-metric inherited
  ex-convergent-positive-continuous-unbounded-integrand inherited
  ex-convergent-sequence-with-its-limit-is-compact inherited
  ex-convex-subsets-of-rn-are-path-connected inherited
  ex-coordinate-reading-sequence-has-subnets-but-no-convergent-subsequence inherited
  ex-countability-profile-of-omega-one     inherited
  ex-countability-profile-of-the-lower-limit-plane inherited
  ex-cylinder-and-mobius-band-as-quotients inherited
  ex-cylindrical-coordinate-jacobian       inherited
  ex-dense-jump-integrand-with-dense-nondifferentiability inherited
  ex-dini-on-the-unit-interval             inherited
  ex-discrete-metric-compact-iff-finite    inherited
  ex-distance-functions-form-a-compact-family-in-c01 inherited
  ex-distance-to-a-set-is-attained-on-a-compact-set inherited
  ex-distance-to-the-integers-is-1-lipschitz inherited
  ex-euclidean-closed-ball-and-sphere-through-the-compactness-chart inherited
  ex-euler-formula-on-a-tree-cycle-and-k-four inherited
  ex-every-closed-subset-of-the-line-is-a-zero-set inherited
  ex-exact-trigonometric-values-at-eighteen-thirty-six-and-seventy-two-degrees inherited
  ex-fifth-roots-of-unity                  inherited
  ex-finite-partition-of-unity-on-a-compact-space inherited
  ex-finite-step-integrator-weighted-jump-sum inherited
  ex-five-colouring-by-a-kempe-swap        inherited
  ex-flat-exponential-function             inherited
  ex-frullani-rational-kernel              inherited
  ex-fubini-computes-the-integral-of-x-exp-xy inherited
  ex-fundamental-group-of-the-unit-interval inherited
  ex-fundamental-groupoid                  inherited
  ex-gamma-and-its-complement-computed-for-a-plane-series inherited
  ex-geometric-power-series-and-an-interior-reexpansion inherited
  ex-gradient-theorem-for-a-polynomial-potential inherited
  ex-gregory-leibniz-partial-sums-with-certified-error inherited
  ex-hamel-basis-additive-function         inherited
  ex-hat-partition-of-unity-on-the-real-line inherited
  ex-high-girth-high-chromatic-parameter-ledger inherited
  ex-hilbert-cube                          inherited
  ex-hyperspherical-coordinate-jacobian    inherited
  ex-improper-substitution-reciprocal      inherited
  ex-integral-of-x-squared-from-the-definition inherited
  ex-integral-test-applied-to-the-p-series inherited
  ex-interior-square-root-singularity      inherited
  ex-intervals-and-euclidean-spaces-are-contractible inherited
  ex-kuratowski-fourteen-sets              inherited
  ex-lagrange-multiplier-on-an-affine-graph inherited
  ex-lebesgue-number-of-a-two-set-cover    inherited
  ex-line-segment-and-polygonal-path-length inherited
  ex-line-segment-scalar-and-vector-line-integrals inherited
  ex-lipschitz-extension-from-the-rationals inherited
  ex-local-lemma-hypergraph-parameter-check inherited
  ex-log-two-from-four-characterisations   inherited
  ex-logarithmic-and-exponential-growth-comparisons inherited
  ex-logarithmic-functions-without-normalisation inherited
  ex-lower-limit-line-is-regular-and-not-metrizable inherited
  ex-machin-formula                        inherited
  ex-mean-value-theorem-bounds-the-square-root-increment inherited
  ex-mobius-map-is-conformal-off-its-pole  inherited
  ex-monkey-saddle                         inherited
  ex-morries-law                           inherited
  ex-niemytzki-plane-metrization-profile   inherited
  ex-omega-one-is-not-paracompact          inherited
  ex-one-equals-exp-two-pi-i-logarithm-paradox inherited
  ex-one-over-square-root-improper-integral inherited
  ex-one-planar-graph-two-nonisomorphic-duals inherited
  ex-one-point-compactifications-of-the-line-and-of-the-naturals inherited
  ex-open-euclidean-ball-is-polygonally-connected inherited
  ex-order-topology                        inherited
  ex-p-metrics-on-rn                       inherited
  ex-p-norm-comparison-constants-on-r2     inherited
  ex-parabola-graph-has-content-zero       inherited
  ex-parallelepiped-content-from-a-matrix  inherited
  ex-path-homotopy-through-straight-segments-in-a-convex-set inherited
  ex-petersen-graph-nonplanar-by-kuratowski inherited
  ex-polar-change-of-variables-on-an-annular-sector inherited
  ex-polynomial-integrals-by-the-ftc       inherited
  ex-polynomial-map-total-derivative-and-jacobian inherited
  ex-principal-value-of-one-over-x         inherited
  ex-punctured-line-versus-punctured-plane inherited
  ex-radial-deformation-retraction-of-punctured-rn inherited
  ex-rational-function-field-order         inherited
  ex-rational-p-integrals-at-both-endpoints inherited
  ex-reciprocal-function-from-the-complex-difference-quotient inherited
  ex-riemann-integrable-function-with-a-nonintegrable-section inherited
  ex-riemann-integrable-function-with-dense-nonintegrable-sections inherited
  ex-riemann-stieltjes-polynomial-computation inherited
  ex-riemann-stieltjes-substitution        inherited
  ex-rn-as-a-product                       inherited
  ex-samuel-compactification-of-a-compact-hausdorff-space inherited
  ex-samuel-compactification-of-discrete-naturals-is-beta-n inherited
  ex-samuel-compactification-of-the-open-unit-interval inherited
  ex-samuel-reflection-of-a-nonempty-indiscrete-uniform-space inherited
  ex-scalar-line-integral-over-a-unit-semicircle inherited
  ex-second-order-multivariable-taylor-polynomial-computed inherited
  ex-separating-a-point-from-a-finite-set-in-a-hausdorff-space inherited
  ex-separation-preservation-table         inherited
  ex-sierpinski-space-is-normal-and-not-completely-regular inherited
  ex-sierpinski-space-is-t0-normal-and-not-regular inherited
  ex-sigma-compactness-and-lindelof-in-the-line-and-the-rationals inherited
  ex-smooth-compactly-supported-bump       inherited
  ex-sorgenfrey-line                       direct
  ex-sorgenfrey-plane                      inherited
  ex-spherical-coordinate-jacobian         inherited
  ex-square-function-from-the-complex-difference-quotient inherited
  ex-square-map-sends-a-grid-to-orthogonal-parabolas inherited
  ex-square-root-is-half-holder            inherited
  ex-steinitz-confinement-worked-in-the-plane inherited
  ex-step-integrator-evaluates-at-the-jump inherited
  ex-stone-cech-of-a-finite-discrete-space inherited
  ex-straight-line-homotopy-between-maps-into-rn inherited
  ex-sup-metric-on-bounded-functions       inherited
  ex-the-alexander-subbase-lemma-applied-to-a-closed-interval inherited
  ex-the-cocountable-topology-in-the-separation-hierarchy inherited
  ex-the-cofinite-topology-in-the-separation-hierarchy inherited
  ex-the-compact-open-topology-on-the-continuous-functions-of-the-line inherited
  ex-the-deleted-tychonoff-plank-separation-profile inherited
  ex-the-diagonal-in-the-cofinite-and-cocountable-topologies inherited
  ex-the-diagonal-of-the-real-line-is-closed inherited
  ex-the-discrete-and-indiscrete-extremes-of-the-hierarchy inherited
  ex-the-exponential-law-worked-on-the-line inherited
  ex-the-first-dyadic-levels-of-the-urysohn-construction inherited
  ex-the-graph-of-a-continuous-real-function-is-closed inherited
  ex-the-interval-the-cantor-set-and-the-hilbert-cube-are-compact inherited
  ex-the-long-line-in-the-connectedness-hierarchy inherited
  ex-the-lower-limit-line-and-plane-separation-profile inherited
  ex-the-metric-urysohn-function-costs-no-choice inherited
  ex-the-moving-spike-family-in-the-three-topologies inherited
  ex-the-ordinal-spaces-omega-plus-one-and-omega-one inherited
  ex-the-oscillating-zigzag-curve-computed inherited
  ex-the-particular-point-topology-in-the-separation-hierarchy inherited
  ex-the-rationals-are-totally-disconnected-and-not-discrete inherited
  ex-the-sorgenfrey-line-is-lindelof-and-its-square-is-not inherited
  ex-tietze-extension-from-a-closed-interval-of-the-line inherited
  ex-torus-as-a-quotient-of-the-square     inherited
  ex-triangle-has-jordan-content-one-half  inherited
  ex-trigonometric-identities-worked-at-pi-over-twelve inherited
  ex-two-continuous-real-functions-agreeing-on-the-rationals-are-equal inherited
  ex-two-root-x-and-its-unbounded-derivative inherited
  ex-two-to-sqrt-two-by-two-real-power-constructions inherited
  ex-unbounded-integrand-stieltjes-integrable inherited
  ex-uncountable-cantor-cube-uniformizable-not-first-countable inherited
  ex-uncountable-discrete-space-meets-bing-not-urysohn inherited
  ex-unit-box-volume-and-integral          inherited
  ex-unit-circle-arc-has-length-theta      inherited
  ex-unit-circle-implicit-function-theorem inherited
  ex-unit-circle-pi-calibration-table      inherited
  ex-unit-hyperbolic-area-brackets-e       inherited
  ex-usual-metric-uniformity-on-r          inherited
  ex-v-shaped-path-is-rectifiable-but-not-c1 inherited
  ex-viete-first-nested-radical-approximants inherited
  ex-wallis-partial-products-and-integral-bounds inherited
  ex-x-sine-of-one-over-x-tends-to-zero    inherited
  ex-x-squared-sine-of-one-over-x-is-differentiable inherited
  ex-x-to-the-beta-separates-the-holder-classes direct
  ex-x-to-x-tends-to-one                   inherited
  fs-a-compact-subset-is-closed-in-every-space inherited
  fs-a-connected-space-is-locally-connected inherited
  fs-a-connected-space-is-path-connected   inherited
  fs-a-continuous-real-function-on-any-subspace-of-a-normal-space-extends inherited
  fs-a-function-with-closed-graph-is-continuous inherited
  fs-a-retract-must-be-a-deformation-retract inherited
  fs-a-totally-disconnected-space-is-discrete inherited
  fs-additive-implies-linear               inherited
  fs-all-norms-on-any-real-vector-space-are-equivalent inherited
  fs-an-intersection-of-connected-sets-is-connected inherited
  fs-any-positive-zero-of-sine-characterizes-pi inherited
  fs-arbitrary-intersection-of-opens-is-open-top inherited
  fs-arbitrary-product-of-open-sets-is-open inherited
  fs-bounded-implies-totally-bounded       inherited
  fs-boundedness-is-a-topological-property inherited
  fs-cauchy-implies-convergent-in-every-metric-space inherited
  fs-cauchy-riemann-at-a-point-implies-complex-differentiability inherited
  fs-cauchy-riemann-on-an-open-set-without-regularity-implies-holomorphy inherited
  fs-circumference-to-radius-ratio-is-pi   inherited
  fs-closed-and-bounded-implies-compact-in-every-metric-space inherited
  fs-closed-ball-is-the-closure-of-the-open-ball inherited
  fs-compact-implies-sequentially-compact  inherited
  fs-completeness-is-a-topological-property inherited
  fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension inherited
  fs-connected-subsets-of-rn-are-polygonally-connected inherited
  fs-continuity-implies-uniform-continuity inherited
  fs-countably-compact-implies-compact     inherited
  fs-equivalent-metrics-share-cauchy-sequences inherited
  fs-every-closed-c1-field-on-a-connected-open-set-is-exact inherited
  fs-every-hausdorff-compactification-is-stone-cech inherited
  fs-every-hausdorff-space-is-regular      inherited
  fs-every-hereditary-class-is-erdos-hajnal inherited
  fs-every-normal-space-is-completely-regular inherited
  fs-every-normal-space-is-hausdorff       inherited
  fs-every-regular-space-is-metrizable     inherited
  fs-every-regular-space-is-normal         inherited
  fs-every-t1-space-is-hausdorff           inherited
  fs-every-topology-is-metrizable          inherited
  fs-evt-holds-on-every-bounded-domain     inherited
  fs-heine-borel-holds-in-every-normed-space inherited
  fs-homotopy-equivalent-spaces-are-homeomorphic inherited
  fs-integration-by-parts-needs-no-integrability-hypothesis inherited
  fs-lindelofness-is-hereditary            inherited
  fs-lindelofness-is-productive            inherited
  fs-local-compactness-is-hereditary       inherited
  fs-paracompactness-is-hereditary         inherited
  fs-paracompactness-is-productive         inherited
  fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets inherited
  fs-pointwise-limit-of-riemann-integrable-is-integrable inherited
  fs-product-topology-equals-box-topology  inherited
  fs-projections-are-closed-maps           inherited
  fs-quotient-map-is-open                  inherited
  fs-quotient-of-a-hausdorff-space-is-hausdorff inherited
  fs-real-differentiability-implies-complex-differentiability inherited
  fs-sequentially-compact-implies-compact  inherited
  fs-sequentially-continuous-implies-continuous inherited
  fs-sin-x-over-x-by-sector-areas          inherited
  fs-strict-contraction-has-a-fixed-point  inherited
  fs-substitution-holds-for-every-integrable-integrand inherited
  fs-the-closure-of-a-path-connected-set-is-path-connected inherited
  fs-the-compact-open-topology-is-always-metrizable inherited
  fs-the-evaluation-map-is-always-continuous inherited
  fs-the-integral-function-is-always-a-primitive inherited
  fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space inherited
  fs-totally-bounded-implies-compact       inherited
  fs-two-continuous-maps-agreeing-on-a-dense-subset-are-equal inherited
  fs-unique-sequential-limits-imply-hausdorff inherited
  fs-vector-line-integrals-are-invariant-under-reversal inherited
  fs-zero-complex-derivative-on-an-open-set-implies-constant inherited
  lem-a-dyadic-scale-of-open-sets-defines-a-continuous-function inherited
  lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure inherited
  lem-a-sequence-in-a-hausdorff-space-has-at-most-one-limit inherited
  lem-a-uniformly-approximable-real-valued-map-is-continuous inherited
  lem-alexandroff-urysohn-metrization-lemma inherited
  lem-algebra-of-continuous-real-maps-on-a-space inherited
  lem-alternating-kempe-paths-cannot-both-occur inherited
  lem-arc-length-function-is-continuous-and-nondecreasing inherited
  lem-bounded-open-jordan-sets-have-compact-grid-exhaustions inherited
  lem-bounded-remetrisation                inherited
  lem-cauchy-product-of-absolutely-convergent-complex-series inherited
  lem-clairaut-for-c2-potentials-by-rectangular-differences inherited
  lem-compact-closed-balls-in-a-locally-compact-metric-space inherited
  lem-compact-hausdorff-targets-embed-in-unit-cubes-under-dependent-choice inherited
  lem-compact-metric-space-has-a-countable-dense-subset inherited
  lem-compact-null-iff-content-zero-in-rn  inherited
  lem-compact-set-has-a-jordan-neighborhood-inside-an-open-set inherited
  lem-compactly-supported-riemann-integral-is-well-defined inherited
  lem-complete-regularity-is-hereditary    inherited
  lem-complete-remetrisation               inherited
  lem-completely-regular-topologies-come-from-continuous-pseudometrics inherited
  lem-complex-exponential-series-converges-everywhere inherited
  lem-complex-polynomial-growth-and-minimum-modulus inherited
  lem-coordinate-telescoping-on-a-euclidean-ball inherited
  lem-countably-compact-paracompact-hausdorff-is-compact inherited
  lem-dalembert-minimum-modulus-descent    inherited
  lem-definite-quadratic-forms-have-a-uniform-sphere-bound inherited
  lem-deleted-tychonoff-plank-is-regular-and-nonnormal inherited
  lem-derivatives-along-a-line-have-the-multinomial-expansion inherited
  lem-distance-to-set-is-lipschitz         inherited
  lem-edge-maximal-kuratowski-free-is-three-connected inherited
  lem-equal-plane-face-boundaries-force-a-cycle inherited
  lem-equicontinuity-and-pointwise-boundedness-give-uniform-boundedness inherited
  lem-equicontinuity-on-a-compact-domain-is-uniform inherited
  lem-equicontinuous-families-have-finite-sup-nets inherited
  lem-erdos-hajnal-constants-are-downward-closed inherited
  lem-euclidean-linear-maps-have-matrices-and-are-bounded inherited
  lem-euclidean-polygonal-paths-are-continuous inherited
  lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric inherited
  lem-exponential-dominates-one-plus-x     inherited
  lem-face-containment-under-plane-subgraphs inherited
  lem-finite-cube-covers-admit-grid-control inherited
  lem-finite-jordan-cover-sum-bounds       inherited
  lem-finite-minima-of-continuous-unit-interval-maps inherited
  lem-finite-star-refinement-for-compact-hausdorff-spaces inherited
  lem-green-boundary-cancellation-under-finite-gluing inherited
  lem-green-type-i-boundary-identity       inherited
  lem-green-type-ii-boundary-identity      inherited
  lem-homotopy-reflexive-and-symmetric     inherited
  lem-homotopy-transitivity-by-reparametrisation inherited
  lem-isometry-is-an-embedding             inherited
  lem-jordan-set-integral-well-defined     inherited
  lem-line-integrals-are-independent-of-the-piecewise-c1-partition inherited
  lem-local-c-one-volume-distortion        inherited
  lem-local-reciprocal-of-a-real-power-series inherited
  lem-locally-finite-sums-are-continuous   inherited
  lem-log-series-extends-by-the-product-law inherited
  lem-lower-limit-line-is-regular-and-lindelof inherited
  lem-metric-cauchy-bounded                inherited
  lem-metric-cauchy-with-convergent-subsequence inherited
  lem-metric-convergent-implies-cauchy     inherited
  lem-multidimensional-refinement-inequalities inherited
  lem-near-identity-c-one-maps-sandwich-cubes inherited
  lem-newton-contraction-near-an-invertible-derivative inherited
  lem-normalizing-a-locally-finite-positive-family inherited
  lem-null-sets-in-rn-closed-under-subsets-and-countable-unions inherited
  lem-ordinal-order-topology-is-t3         inherited
  lem-oriented-similarities-are-nonzero-complex-multiplications inherited
  lem-oscillation-characterisation-in-rn   inherited
  lem-p-norms-are-norms-and-induce-the-published-metrics inherited
  lem-paracompact-hausdorff-cover-shrinking inherited
  lem-paracompact-hausdorff-is-regular     inherited
  lem-plane-edge-face-incidence            inherited
  lem-plane-face-handshake-by-girth        inherited
  lem-plane-graph-faces-are-finite-with-one-unbounded-face inherited
  lem-plane-triangulation-is-connected     inherited
  lem-pointwise-lipschitz-sets-in-c01-are-closed inherited
  lem-polygonal-arc-does-not-separate-the-plane inherited
  lem-polygonal-crossing-parity-is-locally-constant inherited
  lem-polygonal-length-is-monotone-under-refinement inherited
  lem-polygonal-ray-general-position       inherited
  lem-polygonally-reachable-set-is-clopen  inherited
  lem-potentials-glue-over-a-path-connected-overlap inherited
  lem-product-grid-bounds-for-section-integrals inherited
  lem-product-lower-bound-for-jordan-content inherited
  lem-product-topology-on-rn               inherited
  lem-products-preserve-complete-regularity inherited
  lem-products-preserve-regularity         inherited
  lem-products-preserve-t0-t1-and-hausdorff inherited
  lem-pseudocompact-euclidean-subset-is-bounded inherited
  lem-pseudocompact-euclidean-subset-is-closed inherited
  lem-punctured-rn-is-polygonally-connected inherited
  lem-radial-normalisation-is-continuous   inherited
  lem-random-graph-independence-number-bound inherited
  lem-real-and-metric-notions-agree        inherited
  lem-real-line-is-a-metric-space          inherited
  lem-rectangle-second-difference-mean-value-formula inherited
  lem-regular-lindelof-spaces-are-normal   inherited
  lem-regular-lindelof-spaces-are-paracompact inherited
  lem-regularity-is-hereditary             inherited
  lem-regularity-via-closed-neighbourhoods inherited
  lem-samuel-function-pseudometrics-and-coarsening inherited
  lem-samuel-uniformity-is-totally-bounded inherited
  lem-samuel-uniformity-preserves-the-induced-topology-under-dependent-choice inherited
  lem-sequentially-compact-implies-complete inherited
  lem-sine-positive-and-cosine-decreasing-on-zero-two inherited
  lem-steep-polygonal-functions-are-dense-in-c01 inherited
  lem-straight-line-homotopies-are-continuous inherited
  lem-sup-metric-is-a-metric               inherited
  lem-t0-t1-and-hausdorff-are-hereditary   inherited
  lem-tangent-principal-branch-is-bijective inherited
  lem-the-graph-of-a-continuous-map-into-a-hausdorff-space-is-closed inherited
  lem-the-k-topology-is-hausdorff-and-not-regular inherited
  lem-the-order-topology-on-an-ordinal     inherited
  lem-the-oscillating-zigzag-curve         inherited
  lem-three-connected-kuratowski-free-is-planar inherited
  lem-totally-bounded-basic                inherited
  lem-totally-bounded-uniformities-equal-their-samuel-uniformity inherited
  lem-truncated-integrals-of-rational-powers inherited
  lem-tube-lemma-for-a-compact-metric-factor inherited
  lem-two-point-interpolation-in-a-separating-real-function-algebra inherited
  lem-uniform-closure-of-a-real-function-algebra-is-a-lattice inherited
  lem-uniform-convergence-in-the-uniform-metric inherited
  lem-uniform-metric-on-a-function-space   inherited
  lem-uniformizable-spaces-are-completely-regular inherited
  lem-uniformizable-spaces-are-regular     inherited
  lem-uniformly-convergent-sequences-form-equicontinuous-families inherited
  lem-uniqueness-of-the-complex-derivative inherited
  lem-uniqueness-of-the-total-derivative   inherited
  lem-unit-interval-functions-extend-over-evaluation-closure inherited
  lem-urysohn-sits-between-hausdorff-and-regular-plus-t1 inherited
  lem-viete-finite-cosine-product-and-nested-radicals inherited
  lem-wallis-integrals-recurrence-and-squeeze inherited
  lem-zero-of-a-real-analytic-function-is-isolated-or-locally-identical inherited
  prop-arc-length-under-lipschitz-maps-and-euclidean-similarities inherited
  prop-erdos-hajnal-property-is-complement-invariant inherited
  prop-erdos-hajnal-property-is-monotone-under-induced-pattern-containment inherited
  prop-erdos-hajnal-property-passes-to-hereditary-subclasses inherited
  prop-face-boundaries-in-three-connected-plane-graphs inherited
  prop-face-boundaries-in-two-connected-plane-graphs inherited
  prop-fundamental-group-is-a-functor-on-pointed-spaces inherited
  prop-maximal-plane-triangulation-characterisation inherited
  prop-maximally-planar-edge-characterisation inherited
  prop-plane-forest-has-one-face           inherited
  rem-cardinal-arithmetic-choice-ledger    inherited
  rem-choice-ledger                        direct
  rem-classical-oscillator-is-sine-of-one-over-x direct
  rem-compactness-choice-ledger-metric     inherited
  rem-compactness-conventions-and-choice-ledger inherited
  rem-complete-metrizability-is-the-topological-shadow inherited
  rem-complex-plane-euclidean-dictionary   inherited
  rem-connectedness-conventions            inherited
  rem-constructions-this-page-stops-short-of inherited
  rem-countability-axiom-implication-and-choice-ledger inherited
  rem-counting-conventions-and-scope       direct
  rem-derivative-conventions               inherited
  rem-domain-hypotheses-for-closed-versus-exact inherited
  rem-euclidean-topology-dictionary        inherited
  rem-exponential-roadmap-and-circularity  inherited
  rem-extended-real-conventions            direct
  rem-ftc-roadmap                          inherited
  rem-function-space-conventions           inherited
  rem-greens-theorem-jordan-domain-limitation inherited
  rem-hereditary-and-productive-separation-ledger inherited
  rem-improper-integral-conventions-and-scope inherited
  rem-integral-conventions-and-scope       direct
  rem-jordan-rectifiable-terminology       inherited
  rem-logarithm-roadmap-and-circularity    inherited
  rem-metric-axiom-conventions             inherited
  rem-multidimensional-riemann-conventions-and-scope inherited
  rem-omega-one-and-the-cost-of-choice     inherited
  rem-paracompactness-choice-and-convention-ledger inherited
  rem-r-native-topology-scope              direct
  rem-real-exponents-deferred              direct
  rem-rearrangement-in-higher-dimensions   direct
  rem-riemann-integral-choice-ledger       inherited
  rem-riemann-stieltjes-conventions-and-scope direct
  rem-rn-conventions-and-scope             inherited
  rem-separation-axiom-conventions         inherited
  rem-sums-proved-to-exist-but-not-evaluated inherited
  rem-sup-conventions                      direct
  rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem inherited
  rem-the-erdos-hajnal-conjecture          inherited
  rem-total-derivative-conventions-and-linear-map-seam inherited
  rem-tychonoff-choice-strengths           inherited
  rem-uniform-convergence-agrees-with-the-later-uniform-topology direct
  rem-what-the-diagonal-criterion-gives-and-what-it-costs inherited
  rem-where-a-choice-principle-would-be-needed direct
  rem-which-axiom-each-construction-uses   direct
  thm-a-compact-hausdorff-space-is-regular-and-normal inherited
  thm-a-deformation-retract-is-a-homotopy-equivalence inherited
  thm-a-linear-continuum-is-connected      inherited
  thm-a-locally-compact-hausdorff-space-is-completely-regular inherited
  thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set inherited
  thm-absolute-convergence-in-rn           inherited
  thm-absolute-convergence-of-complex-series inherited
  thm-absolute-divergence-from-uniform-tail-mass inherited
  thm-absolute-improper-convergence-implies-convergence inherited
  thm-addition-and-subtraction-formulas-for-tangent-cotangent-secant-and-cosecant inherited
  thm-algebra-of-complex-derivatives       inherited
  thm-algebra-of-total-derivatives         inherited
  thm-all-norms-on-rn-are-equivalent       inherited
  thm-analytic-sine-cosine-agree-with-right-triangle-ratios inherited
  thm-arc-length-is-additive-over-subintervals inherited
  thm-arc-length-is-invariant-under-monotone-reparametrization inherited
  thm-arc-length-is-lower-semicontinuous-under-uniform-convergence inherited
  thm-archimedean-polygon-perimeter-characterization-of-pi inherited
  thm-arzela-ascoli-for-real-ck            inherited
  thm-baire-category-for-complete-metric-spaces inherited
  thm-baire-category-locally-compact-hausdorff inherited
  thm-banach-fixed-point                   inherited
  thm-bernstein-polynomials-converge-uniformly inherited
  thm-bing-metrization                     inherited
  thm-c-k-complete-in-the-sup-metric       inherited
  thm-c1-lipschitz-ac-bv-hierarchy         inherited
  thm-c1-paths-have-length-equal-to-the-integral-of-speed inherited
  thm-c2-holomorphic-components-are-harmonic inherited
  thm-c2-holomorphic-function-has-holomorphic-derivative inherited
  thm-cantor-intersection-metric           inherited
  thm-cauchy-functional-equation-regularity inherited
  thm-cauchy-hadamard-for-complex-power-series inherited
  thm-cauchy-schwarz-and-the-euclidean-norm inherited
  thm-chain-rule-for-complex-derivatives   inherited
  thm-chain-rule-for-total-derivatives     inherited
  thm-change-of-variables-for-compact-jordan-sets inherited
  thm-chebyshev-minimax-monic-polynomial   inherited
  thm-chebyshev-multiple-angle-identities  inherited
  thm-chernoff-bound-for-independent-random-signs inherited
  thm-circle-circumference-diameter-ratio-is-pi inherited
  thm-clairaut-schwarz-mixed-partials      inherited
  thm-classification-of-complex-logarithms inherited
  thm-cofunction-supplementary-and-reflection-identities inherited
  thm-compact-hausdorff-open-cover-uniformity inherited
  thm-compact-hausdorff-space-has-a-unique-compatible-uniformity inherited
  thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma inherited
  thm-compact-implies-complete-and-totally-bounded inherited
  thm-compact-implies-the-other-compactness-forms inherited
  thm-compact-open-equals-compact-convergence inherited
  thm-compact-subset-is-closed-and-bounded inherited
  thm-compact-subset-of-a-hausdorff-space-is-closed inherited
  thm-compactness-agrees-with-metric-compactness inherited
  thm-compactness-is-necessary-for-evt-and-uniform-continuity inherited
  thm-compactness-under-continuous-maps    inherited
  thm-compactness-variants-hierarchy       inherited
  thm-comparison-of-the-three-function-space-topologies inherited
  thm-comparison-test-for-improper-integrals inherited
  thm-complete-and-totally-bounded-implies-compact inherited
  thm-complete-graph-free-classes-are-erdos-hajnal inherited
  thm-complete-subspace-iff-closed         inherited
  thm-completely-normal-iff-hereditarily-normal inherited
  thm-completely-normal-implies-normal     inherited
  thm-completely-regular-implies-regular   inherited
  thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann inherited
  thm-complex-exponential-addition-and-real-extension inherited
  thm-complex-exponential-is-entire-with-derivative-itself inherited
  thm-complex-exponential-surjects-onto-the-punctured-plane inherited
  thm-complex-nth-roots-and-roots-of-unity inherited
  thm-complex-plane-is-complete            inherited
  thm-complex-polynomials-and-rational-functions-are-holomorphic inherited
  thm-complex-trigonometric-hyperbolic-dictionary inherited
  thm-componentwise-convergence-and-completeness inherited
  thm-componentwise-limits-and-continuity  inherited
  thm-composition-respects-homotopy        inherited
  thm-composition-with-a-continuous-function inherited
  thm-conjugate-difference-quotient-characterizes-antiholomorphic-maps inherited
  thm-connected-and-locally-path-connected-implies-path-connected inherited
  thm-conservative-path-independent-and-zero-loop-equivalence inherited
  thm-continuous-bijection-from-a-compact-space-has-continuous-inverse inherited
  thm-continuous-functions-on-compact-jordan-sets-are-integrable inherited
  thm-continuous-image-of-a-compact-space-is-compact inherited
  thm-continuous-implies-integrable        inherited
  thm-continuous-on-a-rectangle-is-riemann-integrable inherited
  thm-continuous-partial-derivatives-imply-total-differentiability inherited
  thm-continuous-partials-and-cauchy-riemann-imply-holomorphic inherited
  thm-convex-subsets-have-trivial-fundamental-group inherited
  thm-cosine-has-a-smallest-positive-zero  inherited
  thm-derivative-of-a-continuous-complex-local-inverse inherited
  thm-derivative-of-exponential            inherited
  thm-differentiation-under-the-integral-sign-on-a-compact-rectangle inherited
  thm-dini                                 inherited
  thm-dirichlet-divergence-transfer        inherited
  thm-dirichlet-test-for-improper-integrals inherited
  thm-disc-area-is-pi-r-squared            inherited
  thm-double-angle-and-power-reduction-identities inherited
  thm-erdos-high-girth-and-high-chromatic-number inherited
  thm-euclidean-heine-borel-pseudocompactness-and-extreme-values inherited
  thm-euclidean-implicit-function-theorem  inherited
  thm-euclidean-inverse-function-theorem   inherited
  thm-euclidean-space-complete             inherited
  thm-euler-formula-for-connected-plane-graphs inherited
  thm-euler-mascheroni-constant-and-harmonic-asymptotic inherited
  thm-eulers-formula                       inherited
  thm-evaluation-is-continuous-on-a-locally-compact-metric-domain inherited
  thm-every-rectifiable-path-has-an-arc-length-parametrization inherited
  thm-exact-c1-vector-fields-are-closed    inherited
  thm-exponential-correspondence-is-continuous inherited
  thm-exponential-definition-equivalence   inherited
  thm-exponential-is-strictly-increasing   inherited
  thm-exponential-ivp-uniqueness           inherited
  thm-exponential-two-point-convexity      inherited
  thm-extreme-value-metric                 inherited
  thm-fermat-for-euclidean-local-extrema   inherited
  thm-finite-products-of-compact-spaces    inherited
  thm-finitely-many-discontinuities-integrable inherited
  thm-first-mean-value-theorem-for-integrals inherited
  thm-five-colour-theorem                  inherited
  thm-frullani-integral-proper-factor      inherited
  thm-ftc-first-part                       inherited
  thm-fubini-over-a-region-between-continuous-graphs inherited
  thm-function-space-is-complete-for-a-complete-target inherited
  thm-fundamental-group-laws               inherited
  thm-fundamental-theorem-of-algebra-minimum-modulus-proof inherited
  thm-gradient-represents-directional-derivatives-and-steepest-ascent inherited
  thm-gradient-theorem-for-line-integrals  inherited
  thm-graphs-of-continuous-functions-have-content-zero inherited
  thm-greens-theorem-for-finite-unions-of-elementary-regions inherited
  thm-gregory-leibniz-series-for-pi-from-a-finite-remainder inherited
  thm-half-angle-identities-with-sign-conditions inherited
  thm-harmonic-oscillator-initial-value-characterization inherited
  thm-hausdorff-completion-of-a-uniform-space inherited
  thm-hausdorff-iff-net-limits-are-unique  inherited
  thm-hausdorff-iff-the-diagonal-is-closed inherited
  thm-heine-borel-rn                       inherited
  thm-heine-cantor-metric                  inherited
  thm-heine-cantor-r                       inherited
  thm-holder-exponent-above-one-forces-constancy inherited
  thm-holder-finite-real-exponents         inherited
  thm-homotopy-equivalence-is-an-equivalence-relation inherited
  thm-hyperbolic-identities-and-derivatives inherited
  thm-hypergraph-two-colouring-by-local-lemma inherited
  thm-identity-theorem-for-real-analytic-functions-on-an-interval inherited
  thm-improper-convergence-implies-principal-value inherited
  thm-improper-p-test-rational             inherited
  thm-induced-fundamental-group-map-functoriality inherited
  thm-injective-c-one-images-of-compact-jordan-sets-are-jordan inherited
  thm-integral-exponential-agrees-with-exponential inherited
  thm-integral-exponential-solves-the-normalised-ivp inherited
  thm-integral-logarithm-derivative-and-normalisation inherited
  thm-integral-logarithm-is-a-bijection    inherited
  thm-integral-logarithm-is-unbounded      inherited
  thm-integral-logarithm-product-law       inherited
  thm-integration-by-parts                 inherited
  thm-integration-by-parts-with-interior-derivatives inherited
  thm-inverse-hyperbolic-logarithm-formulas inherited
  thm-jordan-boundary-criterion            inherited
  thm-jordan-content-and-indicator-integrability inherited
  thm-jordan-fubini-by-sections            inherited
  thm-kernel-and-fibres-of-complex-exponential inherited
  thm-kuratowski-wagner-planarity-characterisation inherited
  thm-landau-logarithm-limit               inherited
  thm-lebesgue-criterion-in-rn             inherited
  thm-lebesgue-number-lemma                inherited
  thm-line-integrals-under-oriented-reparametrization inherited
  thm-line-integrals-under-reversal-and-concatenation inherited
  thm-linear-images-scale-jordan-content-by-absolute-determinant inherited
  thm-lipschitz-images-of-null-sets-in-rn-are-null inherited
  thm-locally-compact-hausdorff-basics     inherited
  thm-locally-connected-iff-components-of-open-sets-are-open inherited
  thm-log-one-plus-x-power-series          inherited
  thm-logarithm-change-of-base             inherited
  thm-logarithm-continuous-functional-equation-characterisation inherited
  thm-logarithm-definition-equivalence     inherited
  thm-logarithm-derivative-and-integral    inherited
  thm-logarithm-differentiable-functional-equation-characterisation inherited
  thm-logarithm-slower-than-every-positive-power inherited
  thm-mean-value-inequality                inherited
  thm-mean-value-inequality-for-total-derivatives inherited
  thm-metric-closure-characterisation      inherited
  thm-metric-compactness-equivalences      inherited
  thm-metric-completion-exists             inherited
  thm-metric-completion-unique             inherited
  thm-metric-continuity-characterisations  inherited
  thm-metric-countability-equivalences     inherited
  thm-metric-equivalence-hierarchy         inherited
  thm-metric-regularity-hierarchy          inherited
  thm-metric-sequential-closure            inherited
  thm-metric-spaces-are-completely-normal  inherited
  thm-metric-spaces-are-tychonoff-and-perfectly-normal inherited
  thm-metric-weight-equals-density         inherited
  thm-minkowski-finite-real-exponents      inherited
  thm-monotone-change-of-variable-for-riemann-integrals inherited
  thm-multidimensional-darboux-equals-riemann inherited
  thm-multidimensional-integral-properties inherited
  thm-multidimensional-riemann-criterion   inherited
  thm-multivariable-second-derivative-test inherited
  thm-multivariable-taylor-formula-with-lagrange-remainder inherited
  thm-nagata-smirnov-metrization           inherited
  thm-natural-logarithm-laws               inherited
  thm-no-continuous-logarithm-on-the-punctured-complex-plane inherited
  thm-nonnegative-continuous-with-zero-integral-vanishes inherited
  thm-nonzero-complex-derivative-iff-oriented-conformal inherited
  thm-norm-inequality-for-the-vector-valued-integral inherited
  thm-normality-is-not-hereditary          inherited
  thm-normality-is-not-productive          inherited
  thm-normalized-exponential-functional-equation inherited
  thm-nowhere-differentiable-functions-are-dense-in-c01 inherited
  thm-one-point-compactification-properties inherited
  thm-open-connected-subsets-of-rn-are-polygonally-connected inherited
  thm-ordinal-spaces-and-compactness       inherited
  thm-p-series-real-exponents              inherited
  thm-p3-free-graphs-have-square-root-homogeneous-sets inherited
  thm-paracompact-hausdorff-implies-normal inherited
  thm-parametrized-constraint-necessary-condition inherited
  thm-partitions-of-unity-characterize-paracompact-hausdorff-spaces inherited
  thm-path-connected-implies-connected     inherited
  thm-path-independence-iff-zero-closed-loop-integrals inherited
  thm-path-independent-field-has-a-potential-by-line-integrals inherited
  thm-peano-mixed-partial-theorem          inherited
  thm-perfectly-normal-implies-completely-normal inherited
  thm-pi-equivalent-characterizations-ledger inherited
  thm-pi-zero-and-period-characterizations inherited
  thm-picard-iterates-for-exponential      inherited
  thm-plane-dual-exists-and-double-dual-recovers-primal inherited
  thm-poincare-lemma-for-star-shaped-domains inherited
  thm-polar-form-with-unique-principal-argument inherited
  thm-polygonal-jordan-curve               inherited
  thm-positive-heredity-of-separation-axioms inherited
  thm-positive-productivity-of-separation-axioms inherited
  thm-power-series-reexpansion-at-an-interior-point inherited
  thm-power-series-sums-are-real-analytic  inherited
  thm-principal-inverse-sine-and-cosine-derivatives inherited
  thm-principal-inverse-tangent-calculus   inherited
  thm-product-to-sum-and-sum-to-product-identities inherited
  thm-punctured-rn-deformation-retracts-onto-the-sphere inherited
  thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions inherited
  thm-quarter-turn-values-and-shift-formulas inherited
  thm-quasicomponents-equal-components-in-a-compact-hausdorff-space inherited
  thm-r-is-not-homeomorphic-to-higher-dimensional-euclidean-space inherited
  thm-radial-straight-line-map-on-punctured-rn inherited
  thm-ramsey-logarithmic-homogeneous-set-bound inherited
  thm-random-graph-logarithmic-homogeneous-set-upper-bound inherited
  thm-rational-points-and-boxes-in-rn      inherited
  thm-rational-supremum-power-agrees-with-exp inherited
  thm-real-analytic-functions-closed-under-algebra-quotients-and-composition inherited
  thm-real-de-moivre-binomial-multiple-angle-formulas inherited
  thm-real-power-agrees-with-rational-exponent inherited
  thm-real-power-continuity-and-derivatives inherited
  thm-real-power-laws                      inherited
  thm-real-stone-weierstrass-for-compact-metric-spaces inherited
  thm-rearrangement-sums-lie-in-an-affine-subspace inherited
  thm-rectifiable-iff-coordinate-functions-have-bounded-variation inherited
  thm-riemann-fubini-on-product-rectangles inherited
  thm-riemann-stieltjes-c1-integrator-reduction inherited
  thm-riemann-stieltjes-change-of-variable inherited
  thm-riemann-stieltjes-continuous-composition inherited
  thm-riemann-stieltjes-countable-step-integrator inherited
  thm-riemann-stieltjes-existence-continuous-bv inherited
  thm-riemann-stieltjes-existence-finitely-discontinuous inherited
  thm-riemann-stieltjes-fundamental-theorems-for-c1-integrators inherited
  thm-samuel-compactification-universal-property inherited
  thm-samuel-completion-is-a-compactification inherited
  thm-scalar-and-vector-line-integral-estimates inherited
  thm-second-countable-implies-lindelof    inherited
  thm-second-mean-value-theorem-for-integrals inherited
  thm-separated-uniformity-iff-induced-topology-is-hausdorff inherited
  thm-sequentially-compact-implies-totally-bounded inherited
  thm-signed-infinite-product-square-summability-criterion inherited
  thm-sine-and-cosine-addition-formulas    inherited
  thm-sine-and-cosine-derivatives          inherited
  thm-sine-and-cosine-parametrize-the-unit-circle inherited
  thm-sine-and-cosine-subtraction-formulas inherited
  thm-sine-cosine-signs-monotonicity-and-ranges inherited
  thm-sine-cosine-zero-sets-and-fundamental-period inherited
  thm-single-pattern-and-finite-family-erdos-hajnal-formulations inherited
  thm-six-colour-theorem-for-planar-graphs inherited
  thm-small-dominating-set-from-minimum-degree inherited
  thm-smirnov-local-metrization            inherited
  thm-standard-maclaurin-expansions        inherited
  thm-steinitz-polygonal-confinement       inherited
  thm-stone-cech-evaluation-closure-universal-property inherited
  thm-subordinate-partitions-of-unity-exist inherited
  thm-substitution                         inherited
  thm-substitution-for-improper-integrals  inherited
  thm-substitution-with-riemann-integrable-inner-derivative inherited
  thm-symmetry-of-higher-mixed-partials    inherited
  thm-t4-implies-t3                        inherited
  thm-takagi-function-is-continuous-and-nowhere-differentiable inherited
  thm-tangent-cotangent-secant-cosecant-derivatives-and-periods inherited
  thm-tangent-half-angle-rational-parametrization inherited
  thm-termwise-differentiation-of-a-real-power-series inherited
  thm-the-closed-graph-criterion-over-a-compact-hausdorff-codomain inherited
  thm-the-exponential-law                  inherited
  thm-the-integral-function-is-lipschitz   inherited
  thm-the-long-line-is-a-connected-linear-continuum inherited
  thm-the-long-line-is-countably-compact-and-not-compact inherited
  thm-the-separation-implication-chain     inherited
  thm-tietze-extension-theorem             inherited
  thm-total-derivative-computes-directional-and-partial-derivatives inherited
  thm-total-differentiability-gives-a-local-linear-bound-and-continuity inherited
  thm-tournament-property-s-k-existence    inherited
  thm-triple-angle-identities              inherited
  thm-two-maps-into-a-convex-set-are-homotopic inherited
  thm-tychonoff-embedding-theorem          inherited
  thm-uniform-completion-universal-property-and-uniqueness inherited
  thm-uniform-continuity-preserves-cauchy  inherited
  thm-uniform-derivative-limit-on-a-closed-interval inherited
  thm-uniform-limit-continuous-real-functions inherited
  thm-uniform-limit-theorem                inherited
  thm-uniformizable-iff-completely-regular inherited
  thm-uniformly-continuous-extension-from-dense inherited
  thm-unit-semicircle-arc-length-is-pi     inherited
  thm-urysohn-lemma                        inherited
  thm-viete-product-for-pi                 inherited
  thm-wallis-product-for-pi                inherited
  thm-weighted-am-gm-real                  inherited
  thm-wirtinger-chain-rule-for-real-differentiable-maps inherited
  thm-young-inequality-real-exponents      inherited
  thm-young-mixed-partial-theorem          inherited
  thm-zero-complex-derivative-on-a-domain-implies-constant inherited

OK — every forward reference is declared, points strictly forward, is closed by a planned later page, stays off the spine unless orientation only, and introduces no cycle.
```

```text
$ node tools/extcheck.mjs
extcheck: 4535 items, 116 recorded-not-proved, 119 resting on them

results resting on material not proved here:
  cex-a-category-with-products-and-a-diagram-without-a-limit inherited
  cex-filtered-colimits-need-not-commute-with-infinite-products-in-set inherited
  cex-lindelofness-is-not-productive-worked    inherited
  cex-normality-is-not-finitely-productive     inherited
  cex-omega-one-has-no-at-most-countable-cofinal-subset inherited
  cex-paracompactness-is-not-productive        inherited
  cex-separability-is-not-hereditary-worked    inherited
  cor-cardinal-absorption                      inherited
  cor-cardinal-functions-detect-countability-axioms inherited
  cor-cofinality-of-a-cardinal-power           inherited
  cor-completeness-and-cocompleteness-criteria inherited
  cor-functor-categories-inherit-completeness-and-cocompleteness inherited
  cor-hom-functors-are-continuous-and-send-colimits-to-limits inherited
  cor-small-complete-or-cocomplete-categories-are-preorders inherited
  cor-the-aleph-and-beth-hierarchies-are-well-defined inherited
  cor-urysohn-metrization                      inherited
  cor-yoneda-preserves-and-reflects-small-limits inherited
  def-aleph-and-beth-hierarchies               inherited
  def-cardinal-arithmetic                      inherited
  def-cardinality-of-a-small-category-and-kappa-small-diagram inherited
  def-cofinality                               inherited
  def-filtered-category-and-filtered-colimit   inherited
  def-infinite-cardinal-sum-and-product        inherited
  def-lindelof-degree-and-cellularity          inherited
  def-small-finite-and-large-limits-completeness-and-cocompleteness inherited
  def-weight-density-and-character             inherited
  ex-a-ccc-nonseparable-cantor-cube            inherited
  ex-a-singular-cardinal-of-uncountable-cofinality inherited
  ex-aleph-one-is-at-most-the-continuum        inherited
  ex-an-aleph-fixed-point                      inherited
  ex-cardinal-absorption-computed              inherited
  ex-cardinal-functions-of-an-uncountable-discrete-space inherited
  ex-cardinal-functions-of-the-lower-limit-line inherited
  ex-cardinal-functions-of-the-real-line       inherited
  ex-colimit-of-an-increasing-chain-of-sets    inherited
  ex-countability-profile-of-the-lower-limit-plane inherited
  ex-counting-functions-and-subsets-of-the-continuum inherited
  ex-niemytzki-plane-metrization-profile       inherited
  ex-pullback-in-top                           inherited
  ex-russells-socks                            direct
  ex-the-beth-hierarchy-computed               inherited
  ex-the-cardinality-of-the-continuum          inherited
  ex-the-cofinality-of-aleph-omega             inherited
  ex-the-empty-set-is-the-product-of-the-large-family-of-all-sets inherited
  ex-the-lower-limit-line-and-plane-separation-profile inherited
  fs-cardinal-addition-is-cancellative         inherited
  fs-cardinal-exponentiation-is-strictly-monotone-in-the-base inherited
  fs-ccc-spaces-are-separable                  inherited
  fs-colimits-in-grp-are-computed-on-underlying-sets inherited
  fs-countable-union-theorem-of-zf             direct
  fs-every-aleph-is-regular                    inherited
  fs-every-set-well-orderable-in-zf            direct
  fs-every-surjection-has-a-right-inverse-in-zf direct
  fs-infinite-has-countable-subset-in-zf       direct
  fs-not-every-category-has-all-small-limits   inherited
  fs-paracompactness-is-productive             inherited
  fs-preserving-binary-products-and-equalizers-does-not-imply-continuity inherited
  fs-second-countability-is-arbitrarily-productive inherited
  fs-the-continuum-has-cardinality-aleph-omega inherited
  fs-the-underlying-set-functor-on-top-does-not-preserve-limits inherited
  fs-zorn-provable-in-zf                       direct
  lem-cardinal-arithmetic-basic-laws           inherited
  lem-cellularity-is-well-defined              inherited
  lem-character-is-well-defined                inherited
  lem-density-is-well-defined                  inherited
  lem-equality-in-a-filtered-colimit-of-sets-is-eventual inherited
  lem-identity-diagram-large-limit-and-initial-objects inherited
  lem-jones-normal-density-discrete-bound      inherited
  lem-large-cantor-cubes-are-not-separable     inherited
  lem-lindelof-degree-is-well-defined          inherited
  lem-successor-cardinal-exists                inherited
  lem-weight-is-well-defined                   inherited
  prop-completeness-and-cocompleteness-in-poset-categories inherited
  prop-continuous-image-density-and-lindelof-degree inherited
  prop-subspace-weight-and-character-inequalities inherited
  rem-baire-in-r-is-choice-free                direct
  rem-cardinal-arithmetic-choice-ledger        inherited
  rem-choice-behind-limit-and-colimit-functors inherited
  rem-choice-ledger                            direct
  rem-choice-strengths                         direct
  rem-compactness-conventions-and-choice-ledger inherited
  rem-continuum-hypothesis                     direct
  rem-countability-axiom-implication-and-choice-ledger inherited
  rem-hereditary-and-productive-separation-ledger inherited
  rem-integral-conventions-and-scope           direct
  rem-omega-one-and-the-cost-of-choice         inherited
  rem-ordinal-versus-cardinal-exponentiation   inherited
  rem-separation-axiom-conventions             direct
  rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem inherited
  thm-baire-category-locally-compact-hausdorff direct
  thm-basic-cardinal-function-inequalities     inherited
  thm-bing-metrization                         direct
  thm-cardinal-arithmetic-agrees-with-finite-counting inherited
  thm-cardinal-power-set-and-cantor            inherited
  thm-cardinality-sized-products-or-coproducts-force-a-preorder inherited
  thm-chosen-limits-and-colimits-assemble-into-functors inherited
  thm-cofinality-basics                        inherited
  thm-every-infinite-cardinal-is-an-aleph      inherited
  thm-filtered-colimits-commute-with-finite-limits-in-set inherited
  thm-finite-limit-and-colimit-criteria        inherited
  thm-grp-is-complete-and-cocomplete           inherited
  thm-hessenberg                               inherited
  thm-konig                                    inherited
  thm-limits-and-colimits-in-functor-categories-are-computed-pointwise inherited
  thm-metric-weight-equals-density             inherited
  thm-nagata-smirnov-metrization               direct
  thm-normality-is-not-productive              inherited
  thm-regularity-of-the-alephs                 inherited
  thm-representable-functors-preserve-small-limits inherited
  thm-rmod-is-complete-and-cocomplete          inherited
  thm-set-has-all-small-colimits               inherited
  thm-set-has-all-small-limits                 inherited
  thm-small-colimits-from-coproducts-and-coequalizers inherited
  thm-small-limits-commute-with-small-limits   inherited
  thm-small-limits-from-products-and-equalizers inherited
  thm-smirnov-local-metrization                inherited
  thm-tarski-square                            inherited
  thm-top-is-complete-and-cocomplete-and-its-underlying-set-functor-preserves-both inherited
  thm-urysohn-lemma                            direct

119 warning(s):
  [unproved-on-published] items/ex-russells-socks.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/fs-countable-union-theorem-of-zf.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/fs-every-set-well-orderable-in-zf.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/fs-every-surjection-has-a-right-inverse-in-zf.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/fs-infinite-has-countable-subset-in-zf.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/fs-zorn-provable-in-zf.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/rem-baire-in-r-is-choice-free.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/rem-choice-ledger.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/rem-choice-strengths.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/rem-continuum-hypothesis.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/thm-bing-metrization.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/thm-nagata-smirnov-metrization.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/cor-urysohn-metrization.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/rem-cardinal-arithmetic-choice-ledger.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/rem-compactness-conventions-and-choice-ledger.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/rem-omega-one-and-the-cost-of-choice.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/rem-ordinal-versus-cardinal-exponentiation.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/thm-smirnov-local-metrization.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/cex-omega-one-has-no-at-most-countable-cofinal-subset.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/def-aleph-and-beth-hierarchies.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/def-cardinal-arithmetic.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/def-cardinality-of-a-small-category-and-kappa-small-diagram.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/def-cofinality.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/def-infinite-cardinal-sum-and-product.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/def-lindelof-degree-and-cellularity.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/def-small-finite-and-large-limits-completeness-and-cocompleteness.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/def-weight-density-and-character.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/ex-a-singular-cardinal-of-uncountable-cofinality.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/ex-aleph-one-is-at-most-the-continuum.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/ex-an-aleph-fixed-point.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/ex-cardinal-absorption-computed.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/ex-cardinal-functions-of-an-uncountable-discrete-space.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/ex-cardinal-functions-of-the-lower-limit-line.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/ex-cardinal-functions-of-the-real-line.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/ex-countability-profile-of-the-lower-limit-plane.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/ex-counting-functions-and-subsets-of-the-continuum.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/ex-the-beth-hierarchy-computed.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/ex-the-cardinality-of-the-continuum.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/ex-the-cofinality-of-aleph-omega.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/ex-the-empty-set-is-the-product-of-the-large-family-of-all-sets.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/fs-cardinal-addition-is-cancellative.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/fs-cardinal-exponentiation-is-strictly-monotone-in-the-base.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/fs-every-aleph-is-regular.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/fs-not-every-category-has-all-small-limits.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/fs-the-continuum-has-cardinality-aleph-omega.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/lem-cardinal-arithmetic-basic-laws.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/lem-cellularity-is-well-defined.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/lem-character-is-well-defined.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/lem-density-is-well-defined.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/lem-identity-diagram-large-limit-and-initial-objects.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/lem-jones-normal-density-discrete-bound.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/lem-large-cantor-cubes-are-not-separable.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/lem-lindelof-degree-is-well-defined.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/lem-successor-cardinal-exists.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/lem-weight-is-well-defined.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/prop-continuous-image-density-and-lindelof-degree.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/prop-subspace-weight-and-character-inequalities.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/thm-basic-cardinal-function-inequalities.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/thm-cardinal-arithmetic-agrees-with-finite-counting.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/thm-cardinal-power-set-and-cantor.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/thm-cardinality-sized-products-or-coproducts-force-a-preorder.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/thm-chosen-limits-and-colimits-assemble-into-functors.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/thm-cofinality-basics.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/thm-every-infinite-cardinal-is-an-aleph.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/thm-hessenberg.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/thm-konig.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/thm-limits-and-colimits-in-functor-categories-are-computed-pointwise.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/thm-metric-weight-equals-density.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/thm-normality-is-not-productive.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/thm-regularity-of-the-alephs.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/thm-set-has-all-small-colimits.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/thm-set-has-all-small-limits.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/thm-small-limits-commute-with-small-limits.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/thm-small-limits-from-products-and-equalizers.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/thm-tarski-square.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/thm-top-is-complete-and-cocomplete-and-its-underlying-set-functor-preserves-both.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/cex-a-category-with-products-and-a-diagram-without-a-limit.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/cex-lindelofness-is-not-productive-worked.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/cex-normality-is-not-finitely-productive.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/cex-paracompactness-is-not-productive.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/cex-separability-is-not-hereditary-worked.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/cor-cardinal-absorption.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/cor-cardinal-functions-detect-countability-axioms.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/cor-cofinality-of-a-cardinal-power.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/cor-completeness-and-cocompleteness-criteria.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/cor-functor-categories-inherit-completeness-and-cocompleteness.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/cor-small-complete-or-cocomplete-categories-are-preorders.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/cor-the-aleph-and-beth-hierarchies-are-well-defined.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/cor-yoneda-preserves-and-reflects-small-limits.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/def-filtered-category-and-filtered-colimit.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/ex-a-ccc-nonseparable-cantor-cube.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/ex-colimit-of-an-increasing-chain-of-sets.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/ex-niemytzki-plane-metrization-profile.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/ex-pullback-in-top.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/ex-the-lower-limit-line-and-plane-separation-profile.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/fs-ccc-spaces-are-separable.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/fs-paracompactness-is-productive.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/fs-second-countability-is-arbitrarily-productive.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/fs-the-underlying-set-functor-on-top-does-not-preserve-limits.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/lem-equality-in-a-filtered-colimit-of-sets-is-eventual.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/prop-completeness-and-cocompleteness-in-poset-categories.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/rem-choice-behind-limit-and-colimit-functors.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/rem-countability-axiom-implication-and-choice-ledger.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/rem-hereditary-and-productive-separation-ledger.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/thm-filtered-colimits-commute-with-finite-limits-in-set.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/thm-finite-limit-and-colimit-criteria.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/thm-grp-is-complete-and-cocomplete.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/thm-representable-functors-preserve-small-limits.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/thm-rmod-is-complete-and-cocomplete.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/thm-small-colimits-from-coproducts-and-coequalizers.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/cex-filtered-colimits-need-not-commute-with-infinite-products-in-set.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/cor-hom-functors-are-continuous-and-send-colimits-to-limits.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/fs-colimits-in-grp-are-computed-on-underlying-sets.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/fs-preserving-binary-products-and-equalizers-does-not-imply-continuity.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/rem-integral-conventions-and-scope.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/rem-separation-axiom-conventions.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/thm-baire-category-locally-compact-hausdorff.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/thm-urysohn-lemma.md is PUBLISHED and rests (direct) on material not proved in this library

OK — every recorded-not-proved statement is a cited remark with no proof, and every consequence is marked.
```

```text
$ node tools/rendercheck.mjs

OK — 4805 file(s): no wikilink inside math, no nested or unbalanced
delimiters, no multiline display block, every math span parses under the real
KaTeX, and every frontmatter block parses under the renderer's
YAML parser.
```

```text
$ node tools/prosecheck.mjs

4805 file(s) checked. 0 error(s), 568 warning(s).
  library-scope-denial: 206
  count-in-prose: 189
  count-of-this-page: 173

(re-run with --warnings to list them; warnings are heuristic and have legitimate cases)

OK — no positional claim contradicts the spec.
```

```text
$ node tools/content-policy.mjs research/frontier-13-batch-3.pages.json
content-policy: 88 scoped item(s), 0 error(s), 0 warning(s)
```

```text
$ node tools/coverage-checklist.mjs research/frontier-13-batch-3.coverage.json
coverage-checklist: 2 page(s), 267 harvested result(s), 0 error(s), 0 warning(s)
```

### Additional authoring controls

```text
$ node tools/proof-contract.mjs research/frontier-13-batch-3.proof-contracts.json --strict
proof-contract: 0 error(s), 0 warning(s), 76/76 item(s) checked
```

```text
$ node tools/citecheck.mjs <all 88 owned item paths>
citecheck: 88 item(s) scanned

OK — every recognised elementary move cites a home that states it.
```

### Escalations, blocker, and confidence

There is no blocker and no escalation. No published dependency was edited, no id was renamed or re-homed, `research/plan-spec.json` was not edited, and no judge was run. Confidence is high in the structural and citation-accountability state recorded by the gates and in the displayed finite computations, but this authoring pass is not an independent judge proof review and does not claim Step 7 mathematical adjudication.

## 2026-08-15 — Final proof-obligation addendum and shared-worktree blocker

This section supersedes the preceding proof-contract total and blocker statement. A final author self-review left every Statement unchanged but made nine proof seams explicit:

- `thm-minimal-polynomial-is-well-defined-and-controls-annihilators` now carries its uniqueness step into the generator-selection step.
- `thm-minimal-and-characteristic-polynomials-have-the-same-irreducible-factors` now cites both operator-to-matrix minimal-polynomial invariance and the basis-independent definition of the characteristic polynomial before scalar extension.
- `thm-diagonalisability-eigenspace-direct-sum-criterion` now proves, by coefficient comparison, that each eigenvalue group from an eigenbasis spans the whole corresponding eigenspace.
- `thm-diagonalisable-iff-characteristic-polynomial-splits-and-multiplicities-agree` now cites the operator characteristic-polynomial definition, its degree, and the triangular determinant formula.
- `thm-diagonalisable-iff-minimal-polynomial-splits-with-distinct-roots` replaces the matrix-root shortcut by a direct eigenvector evaluation and the factor theorem.
- The distinct-characteristic-root, idempotent, and invariant-restriction consequences now cite the UFD theorem for their squarefree-divisor step.
- `thm-finite-dimensional-isometry-characterisations` now cites the adjoint definition, nondegeneracy, orthogonal-list independence, and the equal-dimension subspace criterion.

These are proof/dependency repairs only. No item Statement, id, title, page summary, coverage row, or provenance classification changed. The final proof-contract artifact contains 76 contracts, 255 exact dependency citations, and 224 separately mapped steps. Its strict check is clean. Every declared dependency in the 88 files has an explicit body citation, and no `ai-generated` Statement or Construction is a dependency.

The four page files and 88 items pass a separate integrity check: all titles equal the spliced manifest; every item is `status: draft`, `origin: session`, and has no `verification.audited`; both A summaries equal the splice receipt exactly; both B bodies are empty; the `replacement_audit` arrays remain 22 and 25 rows; and the Gram definition and theorem cite Hoffman–Kunze rather than Axler or Treil.

### Final Batch 3 qualification output

Because another batch's untracked files entered the shared worktree after the earlier clean whole-repository transcript, the final qualification was also run in a read-only temporary snapshot containing the current tracked corpus plus exactly Batch 3's owned files. The prescribed commands were invoked bare from that snapshot. Their terminal output was:

```text
$ node tools/tsx-run.mjs tools/precheck.mts
3332 checked, 0 failing — all clean
```

```text
$ node tools/depcheck.mjs
depcheck: 4267 items (4128 published), 256 pages

OK — no cycles, all references resolve, no draft items on published pages.
```

```text
$ node tools/fwdcheck.mjs
fwdcheck: 4267 items, 0 open forward reference(s), 399 closed, 34 load bearing

OK — every forward reference is declared, points strictly forward, is closed by a planned later page, stays off the spine unless orientation only, and introduces no cycle.
```

```text
$ node tools/extcheck.mjs
extcheck: 4267 items, 116 recorded-not-proved, 119 resting on them

OK — every recorded-not-proved statement is a cited remark with no proof, and every consequence is marked.
```

```text
$ node tools/rendercheck.mjs

OK — 4523 file(s): no wikilink inside math, no nested or unbalanced
delimiters, no multiline display block, every math span parses under the real
KaTeX, and every frontmatter block parses under the renderer's
YAML parser.
```

```text
$ node tools/prosecheck.mjs

4523 file(s) checked. 0 error(s), 568 warning(s).
  library-scope-denial: 206
  count-in-prose: 189
  count-of-this-page: 173

(re-run with --warnings to list them; warnings are heuristic and have legitimate cases)

OK — no positional claim contradicts the spec.
```

```text
$ node tools/content-policy.mjs research/frontier-13-batch-3.pages.json
content-policy: 88 scoped item(s), 0 error(s), 0 warning(s)
```

```text
$ node tools/coverage-checklist.mjs research/frontier-13-batch-3.coverage.json
coverage-checklist: 2 page(s), 267 harvested result(s), 0 error(s), 0 warning(s)
```

Additional scoped controls:

```text
$ node tools/proof-contract.mjs research/frontier-13-batch-3.proof-contracts.json --strict
proof-contract: 0 error(s), 0 warning(s), 76/76 item(s) checked

$ node tools/citecheck.mjs <all 88 owned item paths>
citecheck: 88 item(s) scanned

OK — every recognised elementary move cites a home that states it.

$ node tools/rendercheck.mjs <all 88 owned item paths and four owned page paths>

OK — 92 file(s): no wikilink inside math, no nested or unbalanced
delimiters, no multiline display block, every math span parses under the real
KaTeX, and every frontmatter block parses under the renderer's
YAML parser.

$ node tools/prosecheck.mjs <all 88 owned item paths and four owned page paths>

92 file(s) checked. 0 error(s), 0 warning(s).

OK — no positional claim contradicts the spec.
```

### Blocker

The literal bare commands in the shared working directory are no longer all clean because Batch 7 files, outside this dispatch's write scope, are incomplete. The final shared-worktree run printed `3580 checked, 18 failing` for precheck: 16 Batch 7 `REPAIR` results plus `prop-rational-series-are-closed-under-sums-and-products` (`untagged-steps`) and `prop-ring-trace-agrees-with-the-published-field-trace` (`no-steps`). `depcheck` reports 19 `yaml-escape` errors across six Batch 7 titles, and `rendercheck` reports the same six files as `frontmatter-unparsable`, ending `6 ERROR(s) across 4837 file(s)` and `FAIL`. `fwdcheck`, `extcheck`, and `prosecheck` remain clean in the shared worktree, and the Batch 3 scoped checks above are clean. The prohibited files were not edited. Clearing the whole-worktree gate requires the Batch 7 owner or orchestrator to finish those files; no permission prompt or cross-batch edit was made.

No judge was run, and `research/plan-spec.json` was not edited.
