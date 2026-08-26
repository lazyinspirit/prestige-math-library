# frontier-19 Step 8 — group b adjudication

Group `b` owns batches 2, 3, and 4. I adjudicated all 59 exact
`gpt-5.6-terra` rejection rows routed by
`research/frontier-19-step8-scope.json`. The exact context and pre-edit item
hashes are append-only in
`research/frontier-19-judge-adjudications.jsonl`.

The rejection-blind Step-7 digest independently identified every item ultimately
classified `confirmed_fatal` below. That agreement was evidence, not authority;
each disposition was rechecked against the current item and every cited
dependency from disk.

## Confirmed fatal and repaired

| item | type | defect and repair |
|---|---|---|
| `thm-basic-laws-for-field-norm-and-trace` | dependency citation | The old tower step asserted the restriction-of-scalars determinant identity that it needed to prove. The replacement derives norm and trace transitivity from restriction fibres, the embedding formulas, separable-degree multiplicativity, and the resulting multiplicativity of inseparable degree. |
| `thm-kummer-correspondence` | logic | A subgroup maximal among those avoiding one element need not give a simple quotient; `C_4` with its order-two element is a counterexample. The replacement separates each nonidentity automorphism by a character obtained from the invariant-factor decomposition, then applies cyclic Kummer theory to the fixed field of its kernel. |
| `thm-general-polynomial-of-degree-n-has-galois-group-s-n` | dependency citation | The old fact widened a one-variable fraction-field result to the multivariable invariant field. The replacement keeps the citation exact and proves the invariant rational-function claim by multiplying a denominator over its full `S_n` orbit. |
| `ex-a-quartic-solved-by-its-resolvent-cubic` | other | The old proof computed the resolvent and then solved the biquadratic independently, so the title asserted a method not delivered. The repaired proof uses the resolvent root `y=2` to obtain the quadratic factorisation and then the four roots. |
| `ex-an-artin-schreier-extension-over-f-p-of-t` | dependency citation | The cited characterization assumed irreducibility and could not prove it from `t` not being `b^p-b`. The repair proves the root field is Galois of degree `1` or `p`, excludes degree `1` by pole order, and only then applies Artin–Schreier. |
| `ex-cardano-from-the-lagrange-resolvent` | logic | Under the page's resolvent normalization the two resolvents are `3u` and `3v`, not `u` and `v`. The Example and verification now compute those factors explicitly and call `u,v` the normalized resolvents. |
| `fs-solvable-by-radicals-does-not-force-an-abelian-galois-group` | logic | The old proof merely declared two maps to be automorphisms. The replacement proves the degree-five and degree-four subextensions, their trivial intersection and the degree of the compositum, constructs both automorphisms by simple-extension embeddings, and then verifies noncommutation. |
| `ex-localised-hom-needs-finite-presentation` | other | Localisation at `S={p^n}` is `Z[1/p]`, not `Z_(p)`, and the witness `1/p^n` did not inhabit the displayed codomain. The target, scalar ring, and direct-sum identification now consistently use `Z[1/p]`. |
| `ex-localisation-does-not-commute-with-products` | other | The same localisation-notation error made the displayed witness absent from its target. The product now consistently uses `Z[1/p]`. |

Each repair regenerated its entry in the owning batch contract. The nine
corresponding defect rows are `frontier-19-S8-b-001` through
`frontier-19-S8-b-009` in `research/defect-ledger.jsonl`.

## Confirmed nonfatal

Every row below is a real omission or imprecise fact line, but a competent
reader closes it in under thirty seconds. Under the fatal-only Step-8 rule none
of these items was edited.

| item | evidence for the nonfatal classification |
|---|---|
| `cex-same-represented-integers-do-not-imply-proper-equivalence` | The two displayed forms have `a=2>0` and discriminant `-23<0`; the positive-definite criterion closes the omitted check immediately. |
| `cor-binary-quadratic-form-equivalence-is-decidable` | The preceding reduction lemma gives an explicit strictly decreasing move and the reduction theorem proves termination; replacing “choose” by iteration closes the algorithmic wording. |
| `cor-degree-of-f-adjoin-an-nth-root-by-coset-order` | The cited pairing theorem is stated for the associated finite Kummer extension, and the Kummer definition makes it finite Galois; degree equals Galois-group order. |
| `cor-finiteness-of-positive-definite-binary-form-classes` | The missing bound `|b|≤a` is the first clause of the reduced-form definition. |
| `cor-localisation-commutes-with-finite-intersections-of-submodules` | For a finite family the diagonal map is defined directly by its coordinate quotient maps; no product-style universal property is needed. |
| `cor-localisation-commutes-with-kernels-images-and-cokernels` | The localised co-restriction factors through the localised inclusion of `im f`; inserting that factorisation closes the kernel/image identification. |
| `cor-minimal-generators-over-a-local-ring` | A local ring has one maximal ideal, so its Jacobson radical is exactly that ideal; this supplies the omitted Nakayama hypothesis. |
| `cor-polynomials-of-degree-at-most-four-are-solvable-by-radicals` | In characteristic zero every algebraic polynomial is separable; this is the standard one-line input before the permutation action. |
| `def-kummer-extension` | A one-generator extension may have degree `d|n`; the cited cyclic theorem applies after replacing `n` by that actual degree `d`. The sentence is imprecise, not a false definition. |
| `def-support-of-a-module` | `def-localisation-of-a-module` occurs earlier on the same page and gives exactly the module localisation at `R\p`; the omitted link is local. |
| `def-trace-form-of-a-finite-extension` | Trace linearity is proved in the immediately preceding basic-laws theorem and also follows directly from operator-trace linearity. |
| `ex-hilbert-90-and-pythagorean-triples` | In `Q(i)`, multiplication of `x+yi` by its conjugate is `x^2+y^2`; this is the missing norm calculation. |
| `ex-local-test-for-an-isomorphism` | At the omitted prime `(0)`, `6` is invertible and both source and target localise to zero. |
| `ex-localisation-kills-exactly-s-torsion` | The canonical map is explicitly `m↦m/1` in the module-localisation definition, so the zero-fraction criterion gives the displayed kernel. |
| `ex-localising-an-abelian-group-at-a-prime` | A mixed-order class splits into its `p`-primary and prime-to-`p` parts by Bézout; localisation kills the latter and retains the former. |
| `ex-nakayama-finite-generation-is-essential` | `Z_(p)` has unique maximal ideal `pZ_(p)`, hence that ideal equals its Jacobson radical. |
| `ex-norm-and-trace-in-a-quadratic-extension` | A nonsquare quadratic has the two embeddings sending `sqrt(d)` to its two roots `±sqrt(d)`; the item then applies the cited formula correctly. |
| `ex-proper-versus-improper-equivalence-of-forms` | The determinant-minus-one substitution is written explicitly; only the shorthand `f|N` extends beyond the earlier notation's declared domain. |
| `ex-q-zeta-three-cuberoot-two-cuberoot-three-is-a-kummer-extension` | The Given field is characteristic zero and contains `mu_3`, and step 1.1 proves the generated quotient finite of order nine. |
| `ex-reduced-forms-of-discriminant-minus-eight` | Proper equivalence preserves primitivity by the earlier proposition; inserting that citation closes the count. |
| `ex-reduced-forms-of-discriminant-minus-four` | The proof's Given already restricts to primitive positive-definite forms; the fact line merely dropped that ambient domain. |
| `ex-reduced-forms-of-discriminant-minus-twenty` | The reduced inequalities and boundary rule used in the enumeration are the preceding definition, and the two candidates visibly satisfy them and the positive-definite criterion. |
| `ex-reduced-forms-of-discriminant-minus-twenty-three` | The same reduced-form definition supplies the omitted inequalities and sign boundary. |
| `ex-support-of-an-infinite-direct-sum` | Specialising the cited cyclic-support theorem to `Z/(p)` leaves exactly the prime ideal `(p)`. |
| `lem-determinant-trick-for-nakayama` | The identity-permutation summand is a product of `1-a_ii`, not literally `1`, but reduction modulo `I` gives `det(I-A)≡1`; the conclusion follows in one line. |
| `lem-leading-coefficient-is-minimal-in-a-reduced-class` | Positive definiteness directly gives `a=f(1,0)>0`. |
| `lem-localised-hom-finite-free-case` | A chosen basis identifies the arbitrary finite free module with the standard `R^n` covered by the cited lemma. |
| `lem-localised-hom-finite-presentation-kernel-step` | Factor the presentation through `im alpha` and localise the short exact sequence `0→im alpha→R^n→M→0`. |
| `lem-normal-closure-of-a-radical-extension-is-radical` | The displayed field may adjoin unnecessary roots of unity, but the exact normal closure is generated by the actual conjugates of `alpha`; each still satisfies an `m`-th-power equation over `N`. |
| `lem-support-of-a-finite-module-is-union-of-generator-cyclic-supports` | The smallest-submodule definition immediately yields the standard finite-linear-combination description of a finitely generated module. |
| `prop-binary-quadratic-form-discriminants-modulo-four` | Every integer is even or odd; the two displayed algebraic cases are exhaustive. |
| `prop-positive-definite-binary-form-criterion` | Step 2.1 belongs to the forward implication begun in step 1.1; reordering it before the converse assumption removes the scope ambiguity. |
| `thm-additive-hilberts-theorem-90` | A cyclic extension is finite Galois and separable, so the earlier embedding formula identifies trace with the sum of the powers of the generator. |
| `thm-artin-schreier-characterization-of-cyclic-degree-p-extensions` | The opened finite-Galois characterization states that the fixed field of the full Galois group is the base; adding that citation closes the step. |
| `thm-cyclic-degree-n-extensions-with-roots-of-unity-are-kummer` | Its own `L4` source contains the fixed-field clause; step 2.2 simply omitted the `L4` tag. |
| `thm-field-norm-and-trace-by-embeddings` | The published restriction-fibres lemma supplies existence of extensions, while the cited purely inseparable theorem supplies uniqueness. |
| `thm-local-criterion-for-zero-modules-and-maps` | Zero kernel is equivalent to injectivity and zero cokernel to surjectivity directly from the definitions. |
| `thm-localisation-of-modules-commutes-with-quotients-and-sums` | Localisation preserves the inclusion `N→M`; the proof can cite the nearby injectivity lemma or verify this directly by fractions. |
| `thm-localisation-of-modules-is-tensor-product` | The localised ring acts on the tensor product through its first factor; the displayed action is checked immediately from tensor balance. |
| `thm-reduction-of-positive-definite-binary-quadratic-forms` | The right-action lemma gives transitivity by multiplying the two `SL_2(Z)` matrices. |
| `thm-solvable-by-radicals-implies-a-solvable-galois-group` | Inside the normal top extension, the subgroups fixing successive enlarged radical fields form a subnormal series with cyclic factors. |
| `thm-solvable-galois-group-implies-solvable-by-radicals` | The global characteristic-zero hypothesis implies it does not divide any prime factor degree used with the Kummer theorem. |
| `thm-support-and-annihilator-of-a-finite-module` | The final inference in step 1.2 uses `L1` on the selected generator; only the tag is missing. |
| `thm-support-of-a-tensor-product-of-finite-modules` | Tensor associativity and the tensor description of localisation give the displayed base-change isomorphism. |
| `thm-support-under-localisation` | The module analogue of iterated localisation follows from the same fraction map as the cited ring result. |
| `thm-unique-reduced-positive-definite-binary-quadratic-form` | Proper equivalence is transitive by the established right action. |
| `thm-universal-property-localisation-of-a-module` | The remaining module axioms are routine common-denominator calculations from the three preceding well-definedness lemmas. |

## False positives

| item | evidence |
|---|---|
| `cex-indefinite-classes-have-cycles-of-reduced-forms` | Step 2.1 states Granville's positive-discriminant reducedness convention in full before checking both displayed forms; it does not rely on an unstated local dependency. |
| `lem-adjoining-roots-of-unity-to-a-galois-extension-adds-an-abelian-kernel` | Step 1.1 cites both `L1` and `L2`: `L1` supplies the cyclotomic splitting field and separability, while `L2` turns that finite separable splitting field into a finite Galois extension. |
| `ex-nakayama-jacobson-hypothesis-is-essential` | The cited modular-arithmetic theorem supplies `[a][b]=[ab]`; `[2]_3[2]_3=[4]_3=[1]_3` is the direct specialization, so multiplication by two is bijective. |

## Files changed

- Nine licensed item files listed in the fatal table.
- `research/frontier-19-batch-3.proof-contracts.json` and
  `research/frontier-19-batch-4.proof-contracts.json`, regenerated for those
  items.
- `research/frontier-19-proof-contracts.json`, mechanically re-merged.
- The append-only adjudication and defect ledgers, plus the generated defect
  view.

No page file, published item, cross-group item, judge stamp, or nonfatal item was
changed. No cross-group alert was raised or received.

## Checks

- `precheck`: all nine repaired items pass.
- Batch proof contracts: batches 3 and 4 are strict-clean. The mechanically
  re-merged whole-run contract is also strict-clean at 349/349 items; its only
  output is four nonfatal shotgun-bracket warnings.
- `citation-fidelity`: 253 citations over the two owning contracts, no missing
  quote and no widening candidate.
- `content-policy`: 120 scoped items, no error or warning.
- `depcheck`: clean; all references resolve and no cycle or published/draft
  violation is present.
- `rendercheck`: all nine repaired items parse under the renderer's YAML and
  KaTeX.
- `step8-guard`: 78 current Step-8 changes repository-wide, all 78 licensed.
- `step8-scope check`: four groups scoped, no open routed rejection and no
  cross-group alert.

## Step-8 preflight repair round 1

- **Failing gate:** `risk-report --require-reviewed`.
- **Exact group-b id reviewed:**
  `fs-solvable-by-radicals-does-not-force-an-abelian-galois-group`.
- **Licence:** `frontier-19-S8-b-007`, bound to the Terra rejection at context
  `a70863884ca6c1410a9f3fa13e2a97b34310cd97a4cff4e77953f43d68d55775`
  and pre-repair guard hash
  `d50eb8ed6d625c668b33f5db7ff24d3b8a8f6374ec639087f30d3ca9ae96b950`.
- **File changed:** `research/frontier-19-batch-3.proof-contracts.json` only.
  I added an item-specific complete Alpha `risk_review` covering the repaired
  degree, intersection, compositum, minimal-polynomial, embedding, automorphism,
  and noncommutation steps, and replaced stale template boundary anchors with
  current step-specific dispositions.
- **Item text:** unchanged; the licensed mathematical repair from the initial
  adjudication remains byte-identical in this round.
- **Targeted checks:** risk-report now reports `0 error(s), 1 item(s) routed`;
  batch-3 `proof-contract --strict` reports `0 error(s)` with one existing
  nonfatal shotgun-bracket warning on `thm-kummer-correspondence`.
- **Blocker:** none.
