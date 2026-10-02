# Frontier 37, owner 30 — Dirichlet batch 3 completion audit

Date: 2026-10-01  
Scope: all 25 current item bodies in both pages of
`research/frontier-37-owner-30-batch-3.pages.json` (18 A-page items and 7
B-page items), their actual proof routes, and the suppliers used by those
proofs. This is a mathematical and content-carrier audit, not a Step-3 receipt
or autopilot transition.

## Handoff status

All 25 current batch-3 item bodies (18 A-page and 7 B-page) were audited. The
prior 14-consumer audit is in
`research/frontier-37-owner-30-dirichlet-consumer-audit.md`; the remaining
bodies and each current used supplier clause were read in this pass. Four item
proofs and their matching manifest/contracts/carriers were repaired within the
explicitly released scope. Parent authorized ordinary nonowner confidence-1
Step-3 receipts for the exact 25 items after the changed item and supplier
inputs were reviewed. All 25 now have closed `accept` or `repaired` item
decisions; 11 are `repaired`, 14 `accept`. No owner decisions or gate attempts
were made. Root retains integration and gate ownership.

The review preserves all 25 Statements and claim conclusions. It found and
repaired a faulty lattice quotient-finiteness inference, an unnecessary
published FGA route that spends Choice, missing complex-coordinate factors and
an unproved measure-product step in the full-lattice proof, the conjugate
modulus step in the kernel proof, and the regulator definition's missing
real-independence rationale. The actual bounded-principal-ideal set is
nonempty because `(1)` has norm `1 ≤ A`. The Pell example now keeps its
order-unit argument in `Z[√d]` and distinguishes its generator from the
maximal-order unit when `d ≡ 1 (mod 4)`.

The durable 25-item proof-route audit is below. This file also records the
source-disposition audit and content hashes. No gate, run status recomputation,
plan, ledger, engine, or autopilot-state operation was run by this reviewer.

## All-item proof audit

“No independent defect” means the checked argument follows from its displayed
claims and cited interfaces; supplier-sensitive rows remain conditional on
those suppliers reaching the stable content root will release.

| Item | Actual proof route and audit result |
| --- | --- |
| `lem-roots-of-unity-in-a-number-field-are-finite` | A root of unity is integral, has degree at most `[K:Q]`, and all conjugates have modulus one; the bounded-conjugate supplier leaves finitely many monic integer polynomials and each has finitely many roots. Coherent conditional on that supplier. |
| `thm-kronecker-root-of-unity-criterion` | The nonzero integral norm and conjugate bounds force norm modulus one; all powers lie in the finite bounded-conjugate set, so two powers coincide. Coherent conditional on the same supplier. |
| `lem-algebraic-integer-is-a-unit-iff-norm-is-plus-or-minus-one` | Multiplication by the integer in an integral basis has an integer matrix. A unit gives an integer inverse matrix; determinant ±1 gives the adjugate inverse and hence the inverse element in `O_K`. The current matrix proof closes both directions. |
| `thm-product-formula-for-number-fields` | Writes `x=a/b`; the CA-9 Dedekind factorization route gives finite prime support and ideal-norm multiplicativity gives the finite product. The embedding formula gives the archimedean factor. Its declared full-Choice route is internally consistent and explicitly does not substitute the separate ZF factorization item. Hold fresh acceptance until root's Dedekind integration is stable. |
| `def-logarithmic-unit-embedding` | Defines real log moduli and doubled complex log moduli; conjugating a chosen complex embedding preserves its modulus, and reordering is auxiliary. The displayed convention matches product formula and regulator normalization. |
| `lem-unit-logarithms-lie-in-the-product-formula-hyperplane` | The finite unit valuations vanish; the product formula reduces to the archimedean product, whose logarithm is exactly the coordinate sum in the doubled convention. Coherent conditional on the declared product-formula route. |
| `lem-kernel-of-the-unit-logarithm-is-the-roots-of-unity` | The zero coordinates force modulus one on real and chosen complex embeddings. The omitted complex conjugates have the same modulus by the complex modulus law, so Kronecker applies; the reverse inclusion follows from the root equation. The item, contract, and manifest now record this route. |
| `lem-discrete-subgroups-of-real-vector-spaces-are-lattices` | Isolation plus a finite coordinate grid proves bounded finiteness; a maximal independent tuple and bounded fundamental parallelepiped yield finite generation. The finite set `F` explicitly surjects onto `Γ/Γ₀`; Lagrange kills the quotient, so scaling embeds `Γ` into `(1/N)Γ₀ ≅ Z^r`. A finite-rank subgroup induction using `lem-subgroups-of-z-are-cyclic` gives a free basis without Choice; spanning gives rank `r` and real independence. |
| `lem-logarithmic-unit-image-is-discrete` | A bounded log image bounds every conjugate of each preimage unit; bounded-conjugate polynomial finiteness and a root bound make the preimage finite, hence its image finite. Its only declared Choice path is the product-formula hyperplane input. Coherent conditional on that input and the bounded-conjugate supplier. |
| `lem-deleted-row-minors-of-a-matrix-with-zero-column-sums` | Cofactor expansion gives a vector in the one-dimensional kernel of the transposed matrix; the all-ones vector spans that kernel, and rank supplies a nonzero deleted-row minor. The signs and nonvanishing argument are consistent. |
| `def-s-integers-and-s-units-of-a-number-field` | Defines the finite-prime valuation sets directly. The explicit “denominators outside S” and “no numerator or denominator outside S” descriptions match nonnegative and zero valuations, respectively. Infinite primes are excluded by the definition. No proof defect found. |
| `thm-logarithmic-unit-image-is-a-full-lattice` | Stein's fixed-product argument: choose `z` outside `H⊥`, apply equality-case Minkowski to products of intervals and discs, bound the norm and individual embedding sizes, reduce to a finite nonempty list of bounded-norm principal-ideal generators (the unit ideal is included since `1 ≤ A`), and tune the weighted logarithm to force a unit outside `W⊥`. The current unscaled Minkowski quote, doubled complex coefficients, positivity of `A`, product-measure derivation, and actual supplier citations are synchronized. |
| `thm-dirichlet-unit-theorem` | The logarithm map has finite kernel and full lattice image; finite basis lifts plus the group structure theorem give finite generation, rank and torsion. The extension/splitting is noncanonical as stated. Conditional on the full-lattice and kernel inputs. |
| `def-fundamental-units` | The selected preimages of a logarithm-lattice basis give the free factor modulo roots of unity; its two descriptions follow from the unit theorem and kernel result. The finite set of lifts entails only finite choice. |
| `def-number-field-regulator` | The determinant convention, empty determinant and doubled normalization are consistent. The explanation now supplies the needed bridge: the logarithm image is a full lattice in the `r`-dimensional hyperplane, so any `Z`-basis has `r` vectors spanning that real space and is an `R`-basis. Any two fundamental-unit bases differ by `GL_r(Z)`, preserving absolute deleted-row determinants. |
| `thm-number-field-regulator-is-well-defined` | The columns lie in the coordinate-sum hyperplane; the deleted-row lemma makes all minors equal up to sign and nonzero once rank is known. The repaired change-of-basis convention uses column coordinates `B`, `A'=AB`, and the reverse integral basis change gives `det B=±1`. Correct after the recorded repair. |
| `cor-unit-ranks-by-number-field-signature` | Substitutes the signatures in `r₁+r₂−1`; the rank-zero classifications and real-quadratic torsion case follow from degree/signature and the unit theorem. It correctly avoids claiming rank one characterizes real quadratic fields. |
| `thm-s-unit-theorem` | The valuation map's kernel is `O_K×`; class-group exponent `h` places each `h e_p` in the image, giving finite index in `Z^S`, and ranks add across the exact sequence. The actual class-group interface is the remaining supplier dependency. |
| `ex-units-of-q-and-imaginary-quadratic-fields` | The norm equations give the listed units for `Z`, Gaussian integers, and Eisenstein integers; zero rank and roots-of-unity descriptions agree. |
| `ex-real-quadratic-units-and-pell` | The norm and least-positive-solution argument gives the Pell-order generator and the `d=5` index-3 comparison. Its repaired `w=u_d ε_d^{-m}` stays in `Z[√d]`; the positive-coordinate contradiction is valid. |
| `ex-units-in-a-real-cubic-field` | The root intervals establish three real embeddings; the exact norm equations show `α` and `α−1` are units; sign cases and infinite descent establish independence. The example asserts two independent units and finite index, not an unsupported complete generator list. |
| `ex-regulator-of-a-real-quadratic-field` | Rank one and norm ±1 give logarithmic coordinates `(log ε,−log ε)`; either deleted row has absolute determinant `log ε>0`. The `d=5` maximal-order generator is used. |
| `ex-change-of-fundamental-units-preserves-regulator` | The column change matrices have determinant `±1`; determinant multiplicativity preserves each absolute deleted-row determinant. The floating-point display is illustrative; invariance is exact. |
| `ex-s-units-of-q` | Localization and valuation inequalities force zero exponents outside `S`; unique factorization in `Z` gives exactly the signed S-prime monomials and the stated rank. The `S=∅` case is included. |
| `cex-z-sqrt-d-units-need-not-equal-ok-units` | For `d=5`, the order units are `±⟨ε³⟩` and maximal-order units are `±⟨ε⟩`; the index is 3 and `ε` witnesses strict inclusion. The calculations agree with the Pell example. |

All findings in the audit table were either already discharged by the prior
consumer review or corrected in the four authorized item edits below. The
contract, manifest and coverage changes match the actual proof routes; no
claim or dependency was broadened to conceal a proof obligation.

## Authorized proof and carrier corrections

Four item proofs were repaired, preserving their Statements and claims:

1. `lem-discrete-subgroups-of-real-vector-spaces-are-lattices`: replaced the
   sequence/Bolzano–Weierstrass construction with a finite coordinate grid and
   the reciprocal Archimedean fact. Corrected step 2.2 so the coefficient
   vanishes only for `γ ∉ W`. Step 4.1 uses the finite-set surjection
   `F → Γ/Γ₀`; after Lagrange, scaling embeds `Γ` into `(1/N)Γ₀ ≅ Z^r`.
   An inline finite-rank subgroup induction, citing the cyclic-subgroups-of-Z
   supplier, constructs a basis and avoids the published generic FGA corollary.
   That corollary's actual route descends through PID→UFD and a maximal-bad-ideal
   choice, so it is not a Choice-free supplier. The manifest direct dependencies
   and contract citation now match the cyclic-Z proof.
2. `thm-logarithmic-unit-image-is-a-full-lattice`: refreshes the stale quote
   from `def-minkowski-embedding-of-a-number-field` to the actual current
   unscaled Definition; uses `z_{r₁+j}` as the complex coefficient in the
   functional and in `t_c`; defines `A` before use and proves `A>0`; removes a
   false unweighted complex-log equality; and derives product volume from the
   Countable-Choice-qualified factor measures and finite product-measure
   iteration. Step 4.1 identifies the unit ideal as a member of the bounded
   norm family, proving that family is nonempty. Citations and full-lattice
   coverage now record the actual routes.
3. `lem-kernel-of-the-unit-logarithm-is-the-roots-of-unity`: explicitly applies
   the complex modulus law to omitted conjugate embeddings before invoking
   Kronecker; contract derivation is aligned with the item steps.
4. `def-number-field-regulator`: replaces the invalid inference from abstract
   `Z`-independence to `R`-independence with the actual full-lattice argument:
   its `r` generating vectors span the `r`-dimensional hyperplane. Arbitrary
   fundamental-unit systems are related by `GL_r(Z)`, which proves the
   determinant independence. The Statement and dependencies are unchanged.

The item bodies, batch-3 manifest, proof contracts and (for full lattice)
coverage were synchronized. Selected local mechanical checks passed after these
edits: focused precheck on the three proof items (0 failures), strict
proof-contract validation on all four (0 errors, 0 warnings), focused
rendercheck on all four, JSON parsing, literal citation checks, and direct
manifest/front-matter dependency comparison. No whole-run or shared gate was
attempted.

## Supplier routes and current stability

Actual source clauses at the use sites were checked for the 25 proof routes,
including the CA-9 Dedekind/product-formula path; the bounded-conjugate,
Minkowski equality, embedding, ideal full-lattice, bounded-ideal-norm and
class-group suppliers; the complex modulus and norm interfaces; the cyclic
subgroup-of-`Z` induction; and the Pell-order/maximal-order distinction. The
published generic FGA supplier was inspected far enough to identify why it is
not choice-free; that edge was removed from the lattice item's contract and
direct dependencies, while the supplier itself was left untouched.

Root reports that the relevant supplier revisions and the published ZF
factorisation integration are stable and that no batch-3 closure reaches an
active other-batch writer or the published discriminant repair. The published
ZF factorisation item bytes hash to
`626959101a86491f5fca50994f7ca77984fc1c358b91c66f86a102426c459c81`. The
full-lattice quote was refreshed against the actual current Minkowski Definition.
The mathematical receipts below are item-level evidence only; root owns all
shared supplier integration and gates.

## Report-only source dispositions

The current coverage record has 18 out-of-scope source rows and no deferred
rows (15 A-page, 3 B-page). Each has an item-specific reason; these rows remain
only in coverage/source reporting and do not warrant an item, dependency,
source-scope or page-scope change.

| Page | Source identity and actual row | Disposition reason | Evidence reused |
| --- | --- | --- | --- |
| A | Milne, Example 5.4, rank-one cubic `X³+10X+1` | B's cubic is totally real, rank two; this rank-one illustration is not built. | B-page real-cubic proof audit. |
| A | Milne, Remark 5.7, nonintegral `(3+4i)/5` | Sharpness of the algebraic-integrality hypothesis; the criterion is for `O_K`. | Unit norm-criterion audit. |
| A | Milne, Lemma 5.10, matrix invertibility criterion | The selected proof uses Stein's fixed-product adjustment instead. | Full-lattice proof audit and retrieved Stein §8.1. |
| A | Milne, CM Proposition 5.12 | CM unit index is separate from the rank/regulator claims. | A-page claims and dependency closure. |
| A | Milne, real-quadratic continued-fraction examples | Fundamental units are derived from Pell classification; no continued-fraction algorithm is built. | Pell supplier and B-page proof audit. |
| A | Milne, Lemma 5.13, cubic regulator lower bound | The pair makes no regulator lower-bound claim. | A/B claim inventory. |
| A | Milne, Remark 7.17, function-field/completion product formula | The pair treats number-field places only. | Product-formula item and proof route. |
| A | Milne, Aside 8.9, Artin–Whaples characterization | The product formula is used; the characterization is not. | Product-formula dependency audit. |
| A | Stein, Remark 8.1.3, history of Dirichlet's proof | Historical context supplies no proof step. | Actual Stein §8.1 use-site review. |
| A | Stein, Remark 8.1.5, norm criterion over `K` | The built criterion is restricted to algebraic integers; the nonintegral example is not required. | Unit norm-criterion audit. |
| A | Conrad–Landesman, Example 29.3, cyclotomic units | Cyclotomic unit computations are outside the selected examples. | Pair claim inventory and source locator. |
| A | Sutherland, Remarks 15.2, 15.4, 15.5, divisor/Picard/Riemann–Roch analogy | Arakelov divisor and Picard theory are not built. | Actual Sutherland unit-theorem clauses used. |
| A | Sutherland, Example 15.6, prime `(2+i)` over 5 | The local divisor-norm calculation has no consumer in this pair. | A/B item dependencies. |
| A | Sutherland, Remark 15.10, asymptotic covering-bound refinement | The proof uses the effective bound only. | Full-lattice argument. |
| A | Sutherland, Theorem 15.13 and Remark 15.14, function-field unit theorem | Function-field units are outside this number-field pair. | Product formula and unit-theorem scope. |
| B | Milne, continued fractions for `√94` | The worked example follows Pell classification, not the continued-fraction algorithm. | `ex-real-quadratic-units-and-pell`. |
| B | Milne, Example 5.4, rank-one negative-discriminant cubic | The built cubic is totally real with rank two. | `ex-units-in-a-real-cubic-field`. |
| B | Stein §8.2.2, `Q(2^{1/3})` with signature `(1,1)` | This second cubic illustration is outside the selected real-cubic example. | B-page item and signatures. |

## Hash and receipt state

The shared Git `HEAD` observed at handoff is `b51a7383a`; it is not an item
content hash. Step-3 receipts record the current transitive item-input SHA-256
and actual direct dependencies: 25/25 item decisions are closed at confidence 1, comprising 11
`repaired` and 14 `accept`. The repaired set is
`thm-kronecker-root-of-unity-criterion`,
`lem-kernel-of-the-unit-logarithm-is-the-roots-of-unity`,
`lem-discrete-subgroups-of-real-vector-spaces-are-lattices`,
`thm-logarithmic-unit-image-is-a-full-lattice`, `def-number-field-regulator`,
`thm-number-field-regulator-is-well-defined`,
`cor-unit-ranks-by-number-field-signature`,
`ex-units-of-q-and-imaginary-quadratic-fields`,
`ex-real-quadratic-units-and-pell`,
`ex-change-of-fundamental-units-preserves-regulator`, and `ex-s-units-of-q`.
The remaining 14 are `accept`. No owner decision or gate receipt was written.

The four repaired item files and their contracts/manifest/coverage changes are
live worktree content; these are item-byte SHA-256 values, not Git objects.
Their transitive receipt hashes are recorded in the corresponding
`research/frontier-37-owner-30-step3b-review-<item-id>.json` files. A focused
current-input check returned 25/25 closed, 14 `accept`, 11 `repaired`.

| Current file | SHA-256 |
| --- | --- |
| `items/lem-discrete-subgroups-of-real-vector-spaces-are-lattices.md` | `78f4a3c04b298fc6345e7837b293053eeabb6caea64fcf44e67860c45777244f` |
| `items/thm-logarithmic-unit-image-is-a-full-lattice.md` | `ce11b4d89196e577c39ccee7a27fe88c672987f05459dc1cdf7818e8f34fc50b` |
| `items/lem-kernel-of-the-unit-logarithm-is-the-roots-of-unity.md` | `8494190191c401a916d3611d2bc5f44d6b1509802860c1c56d9d35aa65ed4e6a` |
| `items/def-number-field-regulator.md` | `37b60123b90e1378e25d7664548cb5175bd6bd7998749db1f0a61908f0652d8c` |
| `research/frontier-37-owner-30-batch-3.pages.json` | `56cd3b4555d75351c107bb74231370aaec60a5d63b7fe48c57ad5a57d55b4932` |
| `research/frontier-37-owner-30-batch-3.proof-contracts.json` | `bead3ef8b03119b3dcddf450d56e5a348240e8475c5807efa99757d149aa8cc0` |
| `research/frontier-37-owner-30-batch-3.coverage.json` | `b3e402b84d1695a36d8ad86277ed0f2df87487264cea61488bab32995ae7f262` |
| `research/frontier-37-owner-30-batch-3.notes.md` | `375f194c08a26801c25fd4384b4f0fc873a50ace91ebe178db393eeed8226cec` |

Root retains integration and gate ownership. The report-only exclusion rows
above do not alter coverage or shared scope decisions.
