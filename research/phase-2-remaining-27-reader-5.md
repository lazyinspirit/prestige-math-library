# Step 5a reader report — batch `5`, run `phase-2-remaining-27`

Reader label: `reader-5` (covers 5). Scope: the four pages of
`research/phase-2-remaining-27-batch-5.pages.json` and all 62 items listed
there, plus every dependency opened to verify a specific claim. All 62 items
and all four pages carry `status: draft`, so they are in-flight and 5a repair
is in scope for items and A-page prose.

| order | page | kind | items |
|---|---|---|---|
| 288.083 | `continuous-functional-calculus-for-self-adjoint-and-normal-operators` | A | 26 |
| 288.084 | `continuous-functional-calculus-for-self-adjoint-and-normal-operators-examples` | B | 7 |
| 288.085 | `spectral-measures-and-borel-functional-calculus` | A | 21 |
| 288.086 | `spectral-measures-and-borel-functional-calculus-examples` | B | 8 |

Page frontmatter `items:`/`examples:` lists, the manifest, and each item's file
`deps:` were cross-checked: all agree, no item is missing or extra.

## Opened inventory

All 62 items were opened and read in full (statement, contract, proof,
targets, sources), as were the four page files:

A `continuous-functional-calculus-for-self-adjoint-and-normal-operators`:
`lem-bounded-hilbert-operators-form-a-c-star-algebra`,
`lem-spectrum-of-a-self-adjoint-operator-is-real`,
`lem-spectrum-of-a-positive-operator-is-nonnegative`,
`def-order-on-bounded-self-adjoint-operators`,
`def-c-star-algebra-generated-by-a-normal-operator`,
`cor-normal-operator-norm-equals-spectral-radius`,
`cor-normal-operator-with-zero-spectrum-is-zero`,
`def-isometry-coisometry-and-partial-isometry`,
`thm-partial-isometry-characterizations`,
`def-numerical-range-and-numerical-radius`,
`thm-numerical-radius-is-an-equivalent-operator-norm`,
`lem-polynomial-calculus-is-isometric-for-self-adjoint-operators`,
`thm-continuous-functional-calculus-for-bounded-self-adjoint-operators`,
`lem-spectral-permanence-for-unital-c-star-subalgebras`,
`lem-character-space-of-generated-normal-algebra-is-operator-spectrum`,
`thm-continuous-functional-calculus-for-bounded-normal-operators`,
`thm-spectral-mapping-for-continuous-normal-functional-calculus`,
`thm-continuous-functional-calculus-properties`,
`thm-self-adjoint-norm-and-spectrum-extrema`, `thm-positive-square-root`,
`def-absolute-value-of-a-bounded-operator`,
`thm-polar-decomposition-for-bounded-operators`,
`thm-bounded-normal-operator-abstract-spectral-theorem`,
`rem-positive-square-root-and-covariance-matrices`,
`lem-two-dimensional-numerical-range-is-convex`, `thm-toeplitz-hausdorff`.

B `...-examples`: `ex-functional-calculus-for-a-diagonal-operator`,
`ex-functional-calculus-for-a-multiplication-operator`,
`ex-square-root-and-absolute-value-of-a-matrix`,
`ex-polar-decomposition-of-the-unilateral-shift`,
`cex-a-quasinilpotent-operator-need-not-be-zero`,
`cex-continuous-calculus-does-not-contain-discontinuous-spectral-projections`,
`cex-self-adjointness-cannot-be-dropped-from-the-order-calculus`.

A `spectral-measures-and-borel-functional-calculus`:
`def-projection-valued-measure`,
`lem-weak-and-strong-additivity-of-orthogonal-projections`,
`lem-scalar-and-complex-measures-from-a-pvm`,
`def-integral-of-a-simple-function-against-a-pvm`,
`lem-simple-pvm-integral-is-representation-independent`,
`thm-bounded-borel-pvm-integral`,
`thm-pvm-integral-is-a-star-homomorphism`,
`lem-continuous-functional-calculus-produces-a-regular-pvm`,
`thm-spectral-theorem-for-bounded-normal-operators-pvm-form`,
`def-borel-functional-calculus-for-a-bounded-normal-operator`,
`thm-borel-functional-calculus-for-bounded-normal-operators`,
`cor-spectral-projections-and-resolution-of-the-identity`,
`thm-support-and-uniqueness-of-the-spectral-measure`,
`def-cyclic-vector-and-cyclic-normal-operator`,
`thm-cyclic-spectral-representation`,
`lem-maximal-orthogonal-family-of-cyclic-reducing-subspaces`,
`thm-multiplication-operator-form-of-the-bounded-normal-spectral-theorem`,
`def-spectral-multiplicity-function-in-the-separable-case`,
`lem-unitary-intertwiners-preserve-direct-integral-fiber-dimension`,
`thm-unitary-equivalence-classified-by-measure-class-and-multiplicity`,
`thm-stone-resolvent-formula-for-spectral-projections`.

B `...-examples`: `ex-pvm-of-a-diagonal-normal-operator`,
`ex-pvm-of-a-multiplication-operator`,
`ex-spectral-projection-of-an-isolated-eigenvalue-agrees-with-the-riesz-projection`,
`ex-sign-and-positive-negative-parts-of-a-self-adjoint-operator`,
`ex-borel-functional-calculus-defines-a-discontinuous-characteristic-function`,
`cex-continuous-functional-calculus-cannot-produce-every-spectral-projection`,
`cex-a-normal-operator-need-not-have-any-eigenvectors`,
`rem-direct-integrals-and-general-multiplicity-theory`.

Dependencies opened (full text unless noted; listed with the claim they were
opened for):

- Convention/hypothesis targets: `thm-hilbert-adjoint-properties` (adjoint
  identities, order of composition), `def-self-adjoint-positive-unitary-and-normal-operator`
  (positivity convention), `def-spectrum-and-resolvent-of-a-bounded-operator`
  (resolvent `(lambda I - T)^{-1}` convention), `def-countable-choice`,
  `def-axiom-of-choice`.
- Riesz/spectral-projection conventions: `def-riesz-spectral-projection` (full,
  including `R(z,a)=(z 1-a)^{-1}` and the index-one cycle),
  `thm-riesz-spectral-projection-properties` (statement).
- Hilbert-space infrastructure: `def-hilbert-orthogonal-projection` (full),
  `lem-orthogonal-projection-is-linear-self-adjoint-contractive` (statement),
  `thm-orthogonal-decomposition-by-a-closed-subspace` (statement),
  `lem-kernel-range-orthogonality-for-hilbert-adjoints` (statement),
  `def-square-summable-family-on-an-arbitrary-index-set` (definition),
  `thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set`
  (statement), `def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis`
  (definition), `thm-hilbert-space-fourier-expansion` (statement),
  `thm-riesz-fischer-completeness-of-l-p` (statement),
  `def-separable-space` (definition), `thm-zorn` (statement).
- Gelfand/spectral suppliers: `lem-c-star-spectral-radius-equals-norm-for-normal-elements`
  (statement), `thm-polynomial-spectral-mapping` (statement).
- Measure/integration suppliers: `thm-complex-stone-weierstrass-self-adjoint`
  (statement), `thm-c-c-is-dense-in-l-p-for-radon-measures` (statement),
  `thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals`
  (statement), `lem-positive-c-zero-functionals-have-finite-regular-representing-measures`
  (statement), `thm-rmk-uniqueness-among-radon-measures` (statement),
  `def-regular-borel-measure-on-an-lch-space` (definition),
  `def-finite-sigma-finite-and-semifinite-measures` (definition),
  `def-essential-supremum-with-respect-to-a-measure` (definition),
  `prop-essential-supremum-is-attained-as-the-least-essential-bound`
  (statement), `thm-dominated-convergence` (statement),
  `thm-nonnegative-integral-zero-iff-zero-almost-everywhere` (statement),
  `thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality`
  (statement), `thm-integration-against-a-radon-nikodym-derivative` (statement),
  `thm-total-variation-of-an-absolutely-continuous-signed-or-complex-measure-has-density-the-absolute-value`
  (statement), `def-complex-measure` (definition),
  `def-simple-integral-against-a-signed-or-complex-measure` (definition).
- Bochner/univariate complex analysis: `thm-bochner-integrability-criterion`
  (statement), `thm-bounded-linear-maps-commute-with-bochner-integration`
  (statement), `thm-cauchy-integral-formula-circle` (statement),
  `cor-cauchy-theorem-convex-domain` (statement).

## Edits (confirmed defects, all in-flight assigned items)

1. `items/lem-bounded-hilbert-operators-form-a-c-star-algebra.md` — [A4] and
   step 1.3 replaced `(ST)^*=S^*T^*` by `(ST)^*=T^*S^*` (two occurrences).
   Evidence: the cited target `thm-hilbert-adjoint-properties` clause 2 states
   `(TS)^*=S^*T^*`, i.e. the adjoint of a composition reverses the order;
   with `S,T in B(H)` this is `(ST)^*=T^*S^*`. The displayed formula failed
   already for the non-commuting pair `S=[[0,1],[0,0]]`, `T=[[0,0],[1,0]]`.
2. `items/lem-polynomial-calculus-is-isometric-for-self-adjoint-operators.md`
   — [A4] same correction. (Not load-bearing: only `(T^k)^*=(T^*)^k` for one
   self-adjoint `T` is used, where the two orders coincide.)
3. `items/lem-spectrum-of-a-positive-operator-is-nonnegative.md` — step 3.1:
   the orthogonal complement of `ran(T-zI)` is `ker(T^*-conj(z) I)`, not
   `ker(T^*-zI)`; the vanishing is step 1.2 applied to `conj(z)`, which also
   lies outside `[0,+inf)`. Evidence: `(T-zI)^*=T^*-conj(z)I` (the item's own
   A5 applied to `S=T-zI`), and step 1.2 proves the vanishing for every scalar
   outside `[0,+inf)`.
4. `items/cex-a-quasinilpotent-operator-need-not-be-zero.md` — step 1.1: the
   expansion of `(zI-J)(I+z^{-1}J)` was written with `z^{-1}J^2` in place of
   `J` and double-counted `J^2`; corrected to
   `z^{-1}(zI+J-J-z^{-1}J^2)=z^{-1}(zI-z^{-1}J^2)=I` using `J^2=0`. The
   witness itself (`J` nonzero, `sigma(J)={0}`, not normal) was already
   correct.
5. `items/ex-spectral-projection-of-an-isolated-eigenvalue-agrees-with-the-riesz-projection.md`
   — [A2]: `g_z(zeta)` is `(z-zeta)^{-1}`, not `(zeta-z)^{-1}`, since
   `zI-T=Phi_E(z-zeta)`; step 1.2 correspondingly uses the kernel
   `c(zeta)=(1/2 pi i)oint_gamma (z-zeta)^{-1}dz`, which the Cauchy integral
   formula evaluates to `1` on `D(lambda,r)` and to `0` outside. Evidence: the
   old identity gives `(zI-T)Phi_E(g_z)=Phi_E(-1)=-I`, and the old kernel
   equals `-1` on the enclosed disc. The headline equality
   `E({lambda})=(1/2 pi i)oint_gamma (zI-T)^{-1}dz` is correct, matches
   `def-riesz-spectral-projection`'s convention `R(z,a)=(z 1-a)^{-1}` with the
   index-one cycle, and reproduces the scalar model (`T=lambda I` gives `I`).
6. `items/lem-continuous-functional-calculus-produces-a-regular-pvm.md` —
   step 6.2: the conjugation chain read `conj(int h dmu_{y,x}) =
   conj(int conj(h) dmu_{x,y})`, which is false in general (the correct
   identity is `int h dmu_{y,x} = conj(int conj(h) dmu_{x,y})`; the value
   `mu_{x,y}(K)=i` refutes the displayed step). Rewritten so that the third
   expression inserts `mu_{y,x}=conj(mu_{x,y})` and the fourth uses
   `int h d conj(mu_{x,y}) = conj(int conj(h) dmu_{x,y})`, giving
   `⟨E(h)^*x,y⟩=int conj(h) dmu_{x,y}=⟨E(conj(h))x,y⟩` and hence
   `E(h)^*=E(conj(h))` as before.
7. `items/rem-positive-square-root-and-covariance-matrices.md` — `V` is now
   required to be nonzero, in the statement and in the sentence deriving the
   spectrum, because the positive-square-root theorem it invokes is stated for
   nonzero Hilbert spaces and, for `V={0}`, "finite nonempty spectrum" is
   false (the conclusion itself stays true trivially).
8. `items/thm-numerical-radius-is-an-equivalent-operator-norm.md` — step 2.2
   claimed that `|Re⟨Tx,y⟩|` and `|Im⟨Tx,y⟩|` are at most `w(T)` for unit
   `x,y`, using only two of the four polarization terms; this is false
   (`T=[[0,4],[0,0]]` has `w(T)=2` while `Re⟨Te_2,e_1⟩=4`). Step 2.2 now
   proves the correct estimate `4|⟨Tx,y⟩| ≤ sum_z |⟨Tz,z⟩| ≤ w(T) sum_z
   ||z||^2 = 8w(T)` over the four vectors `x±y, x±iy`, and step 3.1 takes the
   supremum of `|⟨Tx,y⟩| ≤ 2w(T)` using step 1.2. The theorem's conclusion
   `w(T) ≤ ||T|| ≤ 2w(T)` and the normal case were already correct and are
   unchanged.

After each edit the item was reflowed and prechecked:
`node tools/tsx-run.mjs tools/reflow.mts items/<id>.md` (all eight reported
`unchanged`, i.e. no further line joining was needed) and
`node tools/tsx-run.mjs tools/precheck.mts items/<id>.md` (all eight PASS).
None of the eight items carries a `verification.judge` record, so no stale
judge record had to be removed; no `deps:`/`proof_strategy:` change was
needed, so the contracts' dependency lists are untouched.

Affected proof contract entries were updated in
`research/phase-2-remaining-27-batch-5.proof-contracts.json`, because three of
them paraphrased the repaired text: derivation `d-3.1` of
`lem-spectrum-of-a-positive-operator-is-nonnegative` (now
`ker(T^*-conj(z)I)` with step 1.2 applied to `conj(z)`), derivation `d-2.2` of
`thm-numerical-radius-is-an-equivalent-operator-norm` (now the four-term
bound giving `|⟨Tx,y⟩| ≤ 2w(T)`), and the `zero` boundary evidence of
`rem-positive-square-root-and-covariance-matrices` (the zero-dimensional space
is now outside the stated hypothesis `V ≠ {0}`). The other five repaired
items' contract claims already matched the repaired text (`d-1.3` of
`lem-bounded-hilbert-operators-form-a-c-star-algebra` says "antimultiplicative",
which is order-agnostic) or are neutral paraphrases, and their citation quotes
are quotes of the cited targets, which I did not change. No per-item
certification record (the `step1-*`/`step3b-*` JSON records) was restamped: the
reader does not certify, and the touched carriers are routed to 5b. Validation
after the contract update:
`node tools/proof-contract.mjs research/phase-2-remaining-27-batch-5.proof-contracts.json --strict`
reports `0 error(s), 2 warning(s), 62/62 item(s) checked`; the two warnings
(`shotgun-bracket` in `lem-spectral-permanence-for-unital-c-star-subalgebras`
and `thm-partial-isometry-characterizations`) pre-date this reading and concern
citation bracketing, not mathematics.

## Uneditable defect (reported, not repaired)

`library/functional-analysis/continuous-functional-calculus-for-self-adjoint-and-normal-operators-examples.md`
(B-page prose, closing paragraph): "And the same nilpotent, whose quadratic
form takes the non-real value `i/2` at a unit vector, shows that nonnegativity
of the spectrum does not characterise positivity once self-adjointness is
dropped."

The `|T|=diag(0,2)` computation quoted earlier in the same paragraph belongs to
`T=[[0,2],[0,0]]` (item `ex-square-root-and-absolute-value-of-a-matrix`), i.e.
twice the unit Jordan block, while the value `i/2` belongs to
`J=[[0,1],[0,0]]` (item `cex-self-adjointness-cannot-be-dropped-from-the-order-
calculus`, at `x=(e_1+i e_2)/sqrt2`). For `T=2J` the same unit vector gives
`⟨Tx,x⟩=i`, not `i/2`, so "the same nilpotent" is a false identification; the
phrase "the nilpotent Jordan block" for `[[0,2],[0,0]]` is also loose. B-page
prose is outside my edit authority, so this is returned as a finding (a page
carrier that I did not change). Both items involved are themselves correct.

No item in the batch needed a proposed withdrawal; no carrier was deleted or
emptied.

## Page verdicts

- **A `continuous-functional-calculus-for-self-adjoint-and-normal-operators`:
  passes after repair.** Five items were repaired (1, 2, 3, 7, 8 above). The
  remaining items were verified against their hypotheses and cited targets:
  the polynomial isometry and both calculus theorems (existence, uniqueness,
  range `C^*(I,T)`), spectral permanence, the character-space homeomorphism,
  spectral mapping, positivity/eigenvector/commutant clauses, the sharp
  self-adjoint extrema, the square root uniqueness inside the generated
  commutative C*-algebra, absolute value and polar decomposition (uniqueness
  with `ker U=ker T`), the abstract spectral theorem, and Toeplitz–Hausdorff
  with its sharpness remark (`W(M_t)=(0,1)` on `L^2(0,1)`). Page prose matches
  the items; its choice-strength paragraph matches the items' hypotheses. One
  wording observation (not a mathematical defect, not edited): the summary
  phrase "the two forms of the commutant statement (commuting with `T` and
  `T^*`)" describes the single commutant clause of
  `thm-continuous-functional-calculus-properties`, whose hypothesis has the two
  commuting conditions; no second form of the statement occurs on the page.
- **B `...-examples`: items pass; page prose has one nonfatal finding.** The
  diagonal and multiplication models (spectrum, diagonal action, `M_t` spectrum
  via the reciprocal and via the tent estimates `int f^2 = delta/3` or
  `2delta/3`, `int (t-z)^2 f^2 = delta^3/30` or `delta^3/15`, ratio
  `delta^2/10`), the matrix square root/absolute value, the shift's polar
  decomposition (`|S|=I`, `SS^*=I-P`), the quasinilpotent witness (repaired),
  the `(0,1/2)`-projection counterexample, and the dropped-self-adjointness
  counterexample (`⟨Jx,x⟩=i/2`) all check. The closing prose sentence about
  "the same nilpotent" and `i/2` is the reported defect.
- **A `spectral-measures-and-borel-functional-calculus`: passes after repair.**
  One item was repaired (6 above). Verified: the PVM definition and
  well-definedness of projection values; equivalence of weak and strong
  countable additivity (the quadratic expansion and the vanishing
  off-diagonal intersections check); scalar/complex measures, their total
  variation bound and polarization; the representation-independent simple
  integral; uniform approximation giving `Phi_E` with the pairing, quadratic
  and `E`-essential-supremum norm identities and both norm bounds; the
  star-homomorphism and strong-convergence clause; the regular-PVM construction
  from a unital star-homomorphism (contractivity, Riesz representation,
  multiplicativity via `f mu_{x,y}=mu_{x,E(conj f)y}`, strong additivity,
  uniqueness); the spectral theorem in PVM form with its converse and
  uniqueness; the Borel calculus with the commutant clause; spectral
  projections, `E({lambda})H=ker(T-lambda I)`, and the increasing strongly
  right-continuous half-line family; support and uniqueness of the spectral
  measure; the cyclic representation and its Borel-multiplier intertwining;
  Zorn/sep separable cyclic decompositions; the multiplication form; the
  multiplicity function and standard fiber model (including the unitary
  identification `W` and its inverse); the intertwiner lemma (mutual absolute
  continuity and `m=m'` a.e.; its constant-fibre matrix rigidity is stated in
  compressed form but the rank argument closes it at once in each finite case
  and the conclusion is correct); the classification theorem; and Stone's
  resolvent formula with its endpoint half-masses
  (`(1/pi)[arctan((b-lambda)/eps)-arctan((a-lambda)/eps)] -> 1_(a,b) + half
  endpoints`). Page prose matches the items.
- **B `...-examples`: passes.** The diagonal PVM/calculus, the multiplication
  PVM/calculus (reciprocal criterion off the essential range, approximate
  eigenvectors on it, regularity on the compact second-countable spectrum),
  the Riesz-projection computation at an isolated eigenvalue, the sign and
  positive/negative parts (`T_+T_-=0`, `sgn(T)^2=I-E({0})`, agreement with
  `(T^*T)^{1/2}`), the discontinuous indicator projection, the
  continuous-calculus counterexample, the eigenvector-free multiplication
  operator, and the direct-integral orientation remark all check; no defect
  found, and the page prose matches the items.

## Limitations

Dependencies outside the batch were checked at the level of the exact clause
cited (statement plus, where the arithmetic mattered, the surrounding proof
text of that clause); I did not re-prove cross-batch dependency items from
their own hypotheses. `lem-unitary-intertwiners-preserve-direct-integral-fiber-
dimension` compresses the passage from `V^*V=I`, `VV^*=I` to the
almost-everywhere matrix identities into one step and treats infinite fibre
ranks with the same notation as finite ones; I verified the finite-rank cases
and the rank argument that eliminates `k!=k'` and found the conclusion sound,
but I did not reconstruct a fully written infinite-dimensional matrix-field
proof, so that item carries the only residual (non-fatal) uncertainty I record.

## Blocker

None. All confirmed defects in the batch were repairable locally; the single
remaining defect is B-page prose, outside my edit authority, and is returned in
the findings JSON for the 5b lead.
