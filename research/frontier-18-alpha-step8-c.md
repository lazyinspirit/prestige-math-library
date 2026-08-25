# Frontier 18 — group c step-8 adjudication

Group c owns batches 1, 3 and 4: the Lagrange four-square, finite-field/cyclotomic, and Noetherian/Hilbert-basis pairs. I read the step-7 digest first, then the current item text and every dependency implicated by a rejection. The scope contained 69 rejection rows over 49 items. All 69 are adjudicated at their guard-form item hashes: 44 rows are `confirmed_fatal` across 31 distinct items, 25 are `confirmed_nonfatal`, and none is a `false_positive`.

The two step-7 concerns remained useful controls. DeepSeek's objection to `lem-sum-of-three-squares-is-never-seven-modulo-eight` is nonfatal because the seven witnesses were already written in the following Remark; Terra independently found the fatal Statement error, namely the false word “Equivalently”. Both coefficient objections to `fs-the-coefficients-of-every-cyclotomic-polynomial-lie-in-minus-one-zero-and-one` confirm the pre-read's 30-second derivational gap, not a false coefficient.

## Confirmed-fatal rows and repairs

Each table row accounts for every fatal model rejection on the named pre-edit hash. Multiple models in one row found the same item defect and share one defect-ledger row, as required by the exact-hash bijection.

| item | model(s) | evidence and disposition |
|---|---|---|
| `ex-four-square-product-identity-by-expansion` | DeepSeek | The Remark called two distinct ordered quadruples the same representation. It now says they represent the same integer and are equivalent up to signs. |
| `def-cyclotomic-polynomial` | DeepSeek, Terra | The cited finite-product definition covered only real/natural values, and the reduction Remark falsely called an unrestricted map `Z[t] -> K[t]` unique. The product is now constructed in the commutative ring `Z[t]`; the reduction map is identified coefficientwise and fixes `t`. |
| `thm-every-prime-is-a-sum-of-four-squares` | Terra | The final Remark falsely said both preliminary lemmas use `m | p`. It now distinguishes the congruence/bound use in the small-multiple lemma from the divisor step in descent. |
| `lem-sum-of-three-squares-is-never-seven-modulo-eight` | Terra | “Equivalently” identified the one-way obstruction with a stronger exact-residue statement. It now reads “In fact”, and proof step 3.1 supplies witnesses for all seven attained residues. |
| `thm-lagrange-four-square-theorem` | Terra | The final Remark described the one-way three-square obstruction as a classification. It now names only the exhibited family and explicitly disclaims the converse. |
| `thm-the-roots-of-the-cyclotomic-polynomial-are-the-primitive-roots-of-unity` | DeepSeek, Terra | Step 6.1 identified a root in an arbitrary extension with a root in the fixed splitting field. It is replaced by the valid divisor argument: `Phi_n | t^n-1`, so a repeated root of `Phi_n` would repeat in the separable polynomial `t^n-1`. |
| `prop-prime-power-cyclotomic-polynomials-and-the-eisenstein-translate` | DeepSeek | The Remark falsely said deleting the constant term changes the degree. It now records that the degree stays fixed while the value at one and the Eisenstein constant term become wrong. |
| `lem-a-finite-abelian-group-is-a-quotient-of-a-power-of-a-cyclic-group` | DeepSeek, Terra | The Remark falsely said primary decomposition cannot prove the result. It now gives the lcm modulus that makes that route work. |
| `thm-factorisation-of-the-cyclotomic-polynomial-over-a-finite-field` | DeepSeek, Terra | The proof lacked support for roots of the irreducible factors and for a primitive root generating `mu_n(E)`. It now extracts roots from the split factorisation in `E[t]`, proves distinctness there, and cites cyclicity for the generator step. |
| `lem-the-totient-of-a-gcd-and-of-a-least-common-multiple` | DeepSeek, Terra | `P` was used in step 1.2 before being defined in step 3.1. It is now defined in the Given paragraph before any quantified use. |
| `prop-irreducibility-of-the-cyclotomic-polynomial-characterises-the-full-galois-group` | Terra | Fact L5 attributed `E=K(zeta)` to an embedding theorem whose Statement omits it. L5 now cites the finite-root/separability theorem for that equality. |
| `def-roots-of-unity-in-a-field` | DeepSeek | The primitive-root definition allowed `zeta in K` while taking its group order in `K^times`, ill-typed at zero. It now quantifies `zeta in mu_n(K) subset K^times`. |
| `ex-the-seventh-cyclotomic-polynomial-factors-into-two-cubics-over-f-two` | DeepSeek, Terra | The example computed Frobenius orbits but did not license their identification with factor root sets. It now cites and applies the finite-field conjugates theorem. |
| `ex-the-galois-group-of-the-twelfth-cyclotomic-field-and-its-quadratic-subfields` | DeepSeek, Terra | The Remark falsely called `Q(zeta_12)` the smallest cyclotomic field with three quadratic subfields; it now records the earlier `Q(zeta_8)` example. |
| `thm-conjugates-over-a-finite-field-are-the-frobenius-powers` | Terra | The proof applied a theorem about extensions of finite fields before showing `K` finite. It now counts `K` directly from a length-`d` basis, obtaining `q^d` elements before invoking Frobenius theory. |
| `lem-generated-submodule-as-finite-linear-combinations` | DeepSeek, Terra | Fact L3 attributed submodule closure to a definition that only defines modules. The clause is removed and step 2.3 uses the actual submodule criterion. |
| `ex-the-subfield-lattice-of-the-field-of-order-two-to-the-twelve` | DeepSeek, Terra | The proof used divisibility universal properties absent from the gcd/lcm definitions. It now cites the common-divisor and common-multiple theorems explicitly. |
| `prop-p-power-roots-of-unity-in-characteristic-p` | Terra | The general Statement permitted nonpositive `m`, making `mu_m` undefined. It now requires `m >= 1` and defines `n=p^k m`. |
| `cor-product-of-two-noetherian-rings-is-noetherian` | DeepSeek, Terra | The Remark claimed the coordinate ideals are always incomparable, false with a zero factor. It now qualifies the claim to nonzero factors and handles the degenerate comparison. |
| `thm-the-cyclotomic-galois-group-embeds-in-the-unit-group-modulo-n` | Terra | The finite Galois criterion was applied before finiteness was established. The proof now uses `E=K(zeta)` and the simple algebraic-extension theorem first. |
| `def-cyclotomic-extension` | Terra | Splitting-field uniqueness was asserted without support. The Remark now cites the published base-isomorphism corollary. |
| `ex-a-cyclic-cubic-field-inside-the-seventh-cyclotomic-field` | DeepSeek, Terra | L1 inflated the rational cyclotomic corollary with cyclicity, and the final step inflated the basic correspondence with the quotient theorem. The example now cites finite unit-subgroup cyclicity, normal-subgroup Galois correspondence, and prime-order cyclicity. |
| `thm-finite-generation-and-finite-presentation-over-a-noetherian-ring` | DeepSeek | The Statement added an uncited assertion about arbitrary non-Noetherian rings. It now states only where this proof uses Noetherianity. |
| `cex-an-intersection-of-cyclotomic-extensions-larger-than-the-gcd-case` | Terra | The intersection of two abstract splitting fields was undefined without compatible embeddings. The witness now fixes a field of order `3^12` and realizes both cyclotomic fields inside it before intersecting. |
| `thm-module-finite-algebra-over-a-noetherian-ring-is-noetherian` | DeepSeek, Terra | Clause 2 omitted compatibility between the algebra map and the displayed inclusion and did not say `C` was a subring. Statement, Given and proof now require both. |
| `rem-noetherian-conventions-and-choice` | Terra | The opening paragraph attributed identity-preserving homomorphisms and unital subrings to definitions that state neither. It now cites the homomorphism and subring definitions. |
| `lem-orbit-polynomial-has-invariant-coefficients` | DeepSeek, Terra | Factor reordering used commutativity of `C[T]` without a theorem stating it. The dependency and Fact L10 now supply it. |
| `cor-noetherian-from-finitely-many-noetherian-quotients` | Terra | The Statement falsely said `r>=1` was logically needed. It now explains that `r=0` forces the zero ring and still has a true conclusion. |
| `lem-maximal-non-finitely-generated-ideal` | Terra | The Statement used the ideal characterisation of non-Noetherianity without citation. The dependency and inline citation are now present. |
| `ex-reynolds-operator-splits-the-invariant-inclusion` | DeepSeek | The proof called a two-variable characteristic-two example the smallest. It now gives the one-variable action on `F_2[x]`, `x -> x+1`, without a minimality claim. |
| `ex-hom-between-finite-modules-over-the-integers` | Terra | The final Remark falsely called the explicit isomorphism noncanonical. It now explains that the distinguished quotient classes make the displayed construction choice-free. |

The corresponding rows are `frontier-18-c-step8-001` through `frontier-18-c-step8-031` in `research/defect-ledger.jsonl`; their assembly file is `research/frontier-18-alpha-c-step8-ledger-rows.json`.

## Confirmed-nonfatal rows

These are concrete omissions or terse moves, but each is closed by a competent reader in under thirty seconds. Step 8 therefore records them and changes nothing on their authority. An item later changed under a different fatal row is noted where relevant.

| item | model | evidence for the nonfatal disposition |
|---|---|---|
| `lem-sum-of-three-squares-is-never-seven-modulo-eight` | DeepSeek | The witnesses were already explicit in the following Remark; moving them into the numbered proof was licensed later by Terra's separate fatal Statement finding. |
| `lem-the-galois-automorphisms-are-algebraically-independent-over-an-infinite-base-field` | DeepSeek | Iterating the stated one-variable universal property along the recursive multivariate definition gives the asserted map directly. |
| `thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient` | DeepSeek | A divisor of a polynomial split into distinct linear factors splits into a subset of those factors; this is the omitted routine bridge. |
| `prop-prime-power-cyclotomic-polynomials-and-the-eisenstein-translate` | Terra | `Z/p` has characteristic `p` by the residue-class definition; the omitted verification is immediate and separate from the fatal Remark. |
| `lem-degree-of-a-compositum-with-a-galois-extension` | Terra | `E cap L` is finite over `F` as an intermediate subfield of the finite extension `E/F`. |
| `thm-intersections-of-rational-cyclotomic-fields` | Terra | L1 supplies a primitive root and `Q(mu_k)=Q(zeta)`; combining it with the cited degree corollary closes L2 immediately. |
| `cor-a-unique-quadratic-subfield-of-the-p-th-cyclotomic-field` | Terra | `char Q=0` and hence does not divide `p`; the omitted hypothesis check is immediate. |
| `ex-eisenstein-applied-to-the-translate-of-the-seventh-cyclotomic-polynomial` | DeepSeek | The cited prime-power proposition already concludes irreducibility, and inverse translation preserves factorisations. |
| `ex-the-first-twelve-cyclotomic-polynomials` | DeepSeek | `Z` is an integral domain, so the cited conditional polynomial-domain theorem applies. |
| `fs-the-coefficients-of-every-cyclotomic-polynomial-lie-in-minus-one-zero-and-one` | DeepSeek | The Möbius-style truncated product follows by a short finite manipulation of the divisor recursion; the coefficient `-2` is correct. |
| `thm-noetherian-ring-quotients-and-localisations` | DeepSeek | Step 1.2 omitted the tag L6 for the already-stated fact that the contraction is an ideal. |
| `thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient` | Terra | Same routine divisor-of-a-split-polynomial bridge as the DeepSeek row. |
| `thm-infinitely-many-primes-congruent-to-one-modulo-n` | Terra | `Z/p` has characteristic `p` directly from the quotient definition. |
| `ex-a-normal-basis-of-the-complex-numbers-over-the-reals` | Terra | The standard coordinate space `R^2` has dimension two; rank-nullity then applies. |
| `ex-the-first-twelve-cyclotomic-polynomials` | Terra | Same immediate `Z`-domain premise as the DeepSeek row. |
| `ex-eisenstein-applied-to-the-translate-of-the-seventh-cyclotomic-polynomial` | Terra | The displayed polynomial is visibly primitive of positive degree, satisfying the omitted criterion hypotheses. |
| `fs-the-coefficients-of-every-cyclotomic-polynomial-lie-in-minus-one-zero-and-one` | Terra | Same finite divisor-recursion calculation as the DeepSeek row and the independent pre-read concern. |
| `fs-the-cyclotomic-polynomial-is-irreducible-over-every-field` | Terra | `Phi_5` has degree four, so a factorisation into degree-one irreducibles contains more than one factor. |
| `ex-non-noetherian-ring-with-a-strict-chain-of-principal-ideals` | DeepSeek | The full cited field definition includes distributivity; the Facts line's shortening does not change the argument. |
| `lem-leading-coefficient-ideals` | Terra | Closure of an ideal under multiplication by `x` or a constant is immediate from the Given ideal hypothesis. |
| `ex-noetherian-integers-and-fields` | Terra | Closure of an ideal under multiplication by `a^{-1}` is immediate from the Given ideal hypothesis. |
| `ex-non-noetherian-ring-with-a-strict-chain-of-principal-ideals` | Terra | Same faithful field-definition bridge as the DeepSeek row. |
| `ex-artin-tate-finite-intermediate-algebra` | Terra | Step 5.1 omitted the explicit tag for step 2.1, where module-finiteness of `C/B` was already proved. |
| `ex-finite-dimensional-algebra-over-a-field-is-noetherian` | Terra | An ideal is an additive subgroup by definition; this routine premise makes it a linear subspace. |
| `ex-symmetric-polynomials-as-a-noether-invariant-ring` | Terra | `Sym_n` is finite because it is the permutation group of a finite set. |

## Scope, artifacts and gates

- Changed 31 item files, no page files, no item ids, and no published content. No cross-group finding or published repair arose.
- Updated the owning batch contracts in `research/frontier-18-batch-1.proof-contracts.json`, `research/frontier-18-batch-3.proof-contracts.json`, and `research/frontier-18-batch-4.proof-contracts.json`. All entries in those batches were regenerated so changed cited clauses could not leave stale quotes.
- Precheck: 27 changed proof-bearing items pass. The remaining four changed items are definitions or a free-form remark with `precheck: n/a`.
- `content-policy`: 142 scoped items, zero errors and zero warnings.
- Strict proof contracts: batches 1, 3 and 4 have zero errors. Existing shotgun-bracket warnings remain advisory.
- Citation fidelity: no missing contract quote. Two widening candidates on the cyclotomic irreducibility proposition are false positives because its Given line fixes `n>=1`.
- Boundary audit: no template reuse and no contradicted disposition. Scoped `citecheck` produced one false positive from the word “transitivity” in a lemma title, not an order inference. Scoped `rendercheck` is clean for all 31 changed files.
- `step8-guard`: 221 repository changes since `pre-step8`, all 221 licensed by confirmed-fatal adjudications. `step8-scope check`: all four groups scoped, all rejections answered, no cross-group findings open.
- The whole-repository `depcheck` run reached unrelated concurrent group-a failures: one YAML escape and ten B-leaf edges in winding-number content. No reported error names a group-c item.
- The whole-run defect-ledger check currently reports missing rows and duplicate ownership for other groups. A direct exact-hash check of group c's 31 rows finds each of its fatal hashes in exactly one defect row.

All group-c fatal defects are repaired. The engine, not this Alpha, owns the targeted paired rejudge of the 31 changed ids.

## Round 2 — rejudge addendum (2026-08-25)

The targeted rejudge reopened 13 rows on 10 already-touched group-c items. I reread each row against the new text, the cited dependencies, and the step-7 digest. The outcomes are: 7 `confirmed_fatal`, 6 `confirmed_nonfatal`, 0 `false_positive`. The new exact-hash adjudications are appended for:

- `def-cyclotomic-polynomial` — Terra fatal. The Remark no longer says the minimal-polynomial definition becomes meaningless when the reduction factors; it now says that description no longer controls the factorisation over that field.
- `ex-reynolds-operator-splits-the-invariant-inclusion` — Terra fatal. The comparison with Noether's theorem now keeps the missing `A`-algebra-automorphism hypothesis in both proof step 4.1 and the closing Remark.
- `lem-a-finite-abelian-group-is-a-quotient-of-a-power-of-a-cyclic-group` — DeepSeek and Terra fatal on the same defect. The proof now verifies the tuple-group construction and the componentwise surjection directly instead of leaning on an unstated product-group fact.
- `thm-factorisation-of-the-cyclotomic-polynomial-over-a-finite-field` — DeepSeek fatal on inflated fact L8, Terra fatal on the false single-orbit Remark. L8 is narrowed to the cited proposition, step 3.2 now uses the primitive-root conclusion from step 2.1, and the Remark records the correct orbit decomposition.
- `thm-the-roots-of-the-cyclotomic-polynomial-are-the-primitive-roots-of-unity` — Terra fatal. The Given line now uses the finite-product convention in the commutative ring `E[t]`, replacing the inapplicable real/natural finite-set product definition.

The six nonfatal rows all stay under the 30-second threshold on the rejudged text:

- `ex-a-cyclic-cubic-field-inside-the-seventh-cyclotomic-field` — the prime-degree intermediate-field argument is omitted but immediate.
- `ex-hom-between-finite-modules-over-the-integers` — the integer cancellation in step 2.2 is routine.
- `prop-p-power-roots-of-unity-in-characteristic-p` — step 3.1 uses the elementary fact that a field has no nonzero nilpotents.
- `prop-prime-power-cyclotomic-polynomials-and-the-eisenstein-translate` — both lanes found the same `r=1` boundary omission in step 3.2; it is a short split into the trivial `k=0` case and the cited `k>=1` case.
- `thm-conjugates-over-a-finite-field-are-the-frobenius-powers` — the basis-existence bridge from degree to coordinates is definitional and immediate from the cited linear-algebra setup.

Artifacts and gates for this round:

- Added `frontier-18-c-step8-032` through `frontier-18-c-step8-037` to `research/defect-ledger.jsonl`, and merged those six rows into `research/frontier-18-alpha-c-step8-ledger-rows.json`.
- Regenerated the affected batch-contract entries in `research/frontier-18-batch-3.proof-contracts.json` and `research/frontier-18-batch-4.proof-contracts.json`.
- `precheck` passes on the four edited proof-bearing items.
- `rendercheck` is clean on the five edited files.
- `citecheck` is clean on the 9 current round-2 review items.
- `content-policy` is clean on batches 3 and 4.
- `proof-contract --strict` is clean on the three edited batch-3 items and the one edited batch-4 item.
- `depcheck --json` currently reports zero errors and zero warnings, with no hits on the round-2 items.
- `step8-guard` now licenses 231/231 changed items since `pre-step8`.
- A direct exact-row scan of `research/frontier-18-judge.jsonl` against `research/frontier-18-judge-adjudications.jsonl` leaves zero open rejection rows for the 10 round-2 items.

Run-wide work remains outside this group: `step8-scope --check` still reports 121 open routed rejection rows elsewhere in `frontier-18`. Group c's current round-2 rows are closed.

## Round 3 — rejudge addendum (2026-08-25)

The third targeted rejudge reopened 2 Terra rows on 2 already-touched group-c items. I reread both against the current text and their cited dependencies. Both are `confirmed_fatal`; there are 0 `confirmed_nonfatal` rows and 0 `false_positive` rows in this round.

- `ex-reynolds-operator-splits-the-invariant-inclusion` — Terra fatal. Fact L4 had truncated `[[def-ring]]` by omitting multiplicative associativity, so step 1.1's argument that `h·u^{-1}=u^{-1}` was not licensed. I restored associativity to L4 and rewrote the step to left-multiply `u(h·u^{-1})=1` by `u^{-1}`.
- `lem-a-finite-abelian-group-is-a-quotient-of-a-power-of-a-cyclic-group` — Terra fatal. Fact L3 had restated only congruence-class equality and representative addition, omitting the cited theorem's clause that `(\mathbb Z/m,+)` is an abelian group. I strengthened L3 accordingly and used that strengthened fact in steps 2.1 and 3.1.

Artifacts and gates for this round:

- Added `frontier-18-c-step8-038` and `frontier-18-c-step8-039` to `research/defect-ledger.jsonl`, and merged them into `research/frontier-18-alpha-c-step8-ledger-rows.json` (now 39 rows total for group c).
- Appended the two exact-hash adjudications to `research/frontier-18-judge-adjudications.jsonl`.
- Regenerated the affected batch-contract entries in `research/frontier-18-batch-3.proof-contracts.json` and `research/frontier-18-batch-4.proof-contracts.json`.
- `precheck` passes on both edited proof-bearing items.
- `rendercheck` is clean on both edited files.
- `citecheck` is clean on both edited files.
- `proof-contract --strict` is clean on both touched contract entries.
- `step8-guard` licenses 231/231 changed items since `pre-step8`.
- A direct exact-row scan of all 84 rejection rows on group c's owned items against `research/frontier-18-judge-adjudications.jsonl` leaves 0 open rows for group c.

Run-wide scope remains outside this lane: `step8-scope --check --run frontier-18` now reports 64 open routed rejection rows elsewhere in the run, but none belongs to group c.
