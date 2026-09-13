# Step 3b helper checkpoint — group a, helper 2

Run: `phase-2-next-21`  
Pair: `lie-algebra-representations-enveloping-algebras-and-pbw` / examples  
Role: `alpha-high`, Sol xhigh authoring helper

## Verified start and controlling material

- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, the complete helper task,
  `briefs/group-author.md`, `briefs/tasks/frontier-dependency-ledger.md`, the
  current owner direction, Batch 8 notes/coverage/cross-batch input, the
  complete DG-27 design, the current Step-3a scope report and pair receipt,
  and every current manifest row for this pair.
- The live state recomputes at Step 3b. Both owned page files and all 61 owned
  item files were absent at start; they must be constructed from the current
  manifest.
- The current manifest controls over the older design: it adds the arbitrary-
  dimensional homomorphism definition, characteristic-free power definition,
  and symmetric-monomial lemma, and puts the associated-graded definition
  before its consumer.
- Authoritative passages read completely: Etingof, MIT 18.745 full notes,
  §§11.1–11.2 (representations and operations), §§12.1–12.3 (enveloping
  algebra, filtration, symbol and coproduct), §§13.1–13.2 (PBW statement and
  the full adjacent-transposition/Jacobi proof), printed pp. 61–77; Kirillov,
  *An Introduction to Lie Groups and Lie Algebras*, Chapter 4 §§4.1–4.4,
  printed pp. 49–55, and Chapter 5 §§5.1–5.3, printed pp. 71–76. Kirillov gives
  only the PBW proof outline; Etingof is the complete proof source.
- Exact published prerequisite statements were read for all 26 external item
  dependencies. The load-bearing interfaces are the module tensor-product and
  finite-iterated tensor universal properties, module direct-sum universal
  property, quotient module/ring laws and universal properties, algebra tensor
  product, module first isomorphism theorem, module Schur lemma, arbitrary-field
  exterior-power quotient, finite-sum reindexing, characteristic, and the
  algebraically-closed-field eigenvalue corollary.
- Choice convention: every PBW statement is conditional on a *supplied* basis
  with a supplied total order. No assertion that an arbitrary vector space has
  a basis is made, so no choice axiom is spent.

## Scaffold corrections for lead integration

1. `def-quotient-lie-algebra`: the manifest puts the quotient-bracket lemma in
   both `deps` and `justified_by`. `SCHEMA.md` forbids that, and a
   `justified_by` supplier must instead depend on the definition. Because this
   pair deliberately proves the bracket before naming the resulting object,
   the item keeps the lemma in `deps` and omits `justified_by`. The lead must
   make the same manifest/contract correction.
2. `prop-enveloping-algebra-of-a-direct-sum-is-the-tensor-product-of-enveloping-algebras`:
   construction of the inverse on pure tensors uses
   `thm-universal-property-of-module-tensor-products`, absent from the manifest
   row. The authored item adds it; the lead must integrate it.
3. `cor-schurs-lemma-for-irreducible-lie-algebra-representations`: the scalar
   conclusion over an algebraically closed field uses existence of an
   eigenvalue for a finite-dimensional endomorphism. The authored item adds
   `cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue`.
4. `thm-pbw-symmetrization-is-a-vector-space-isomorphism-in-characteristic-zero`:
   its hypothesis uses the published characteristic definition. The authored
   item adds `def-ring-characteristic`.
5. `thm-lie-algebra-representations-are-equivalent-to-unital-modules-over-the-enveloping-algebra`:
   its statement includes preservation of intertwiners, whose definition is
   supplied by `def-subrepresentation-quotient-representation-and-intertwiner`
   but omitted from the manifest dependency row. The item adds that direct
   dependency; the lead must integrate it.
6. `def-symmetric-algebra-of-a-vector-space`: the page had already defined
   `S^n(V)` as the permutation-coinvariant quotient, but the manifest row for
   `S(V)` omitted that definition while reusing the notation for its
   homogeneous part. The item adds
   `def-symmetric-and-exterior-powers-over-an-arbitrary-field` and proves the
   degree-`n` relation spaces agree using adjacent transpositions. The lead
   must integrate this dependency.
7. `thm-universal-property-of-the-universal-enveloping-algebra`: Fact [L3]
   directly consumes the tensor-quotient construction and canonical map from
   `def-universal-enveloping-algebra`, which the manifest omitted. The item
   adds this dependency; the lead must integrate it.
8. `thm-poincare-birkhoff-witt`: Fact [L3] directly consumes
   `lem-symmetric-algebra-has-an-ordered-commutative-monomial-basis` to identify
   every homogeneous component of the symbol map, but the manifest omitted
   that dependency. The item adds it; the lead must integrate it.

## Item checkpoints

The common source locator for items 1–19 is Etingof §§11.1–11.2 and Kirillov
Chapter 4 §§4.1–4.4, together with Kirillov §5.3 for ideals. All are over one
fixed field, allow arbitrary dimension, use alternation rather than a
characteristic-not-two shortcut, and make no choice.

### Items 1–11 — basic Lie algebra constructions

- `def-lie-algebra-over-a-field`: defines a bilinear alternating Jacobi bracket;
  records the characteristic-free deduction of skew-symmetry. Dependencies:
  `def-vector-space`, `def-linear-map`. Empty/zero-dimensional Lie algebras are
  included; no basis or choice.
- `def-lie-subalgebra-ideal-and-center`: defines all three notions, checks
  restricted Lie structure, equivalence of left/right ideal conditions, and
  that the center is an ideal. Dependencies: the preceding definition and
  `def-linear-subspace`.
- `lem-lie-algebra-quotient-bracket-is-well-defined`: representative changes
  expand into three ideal terms; bilinearity, alternation and Jacobi descend
  through the quotient. Dependencies: subalgebra/ideal definition and the exact
  published quotient-module definition/laws. The zero and whole ideals give
  `g` and `0` respectively.
- `def-quotient-lie-algebra`: names the already-justified quotient bracket and
  canonical projection; dependency is the preceding lemma. Manifest metadata
  correction 1 remains for the lead.
- `def-homomorphism-of-possibly-infinite-dimensional-lie-algebras`: fixes
  linearity and bracket preservation without a dimension restriction.
- `prop-kernels-images-and-first-isomorphism-theorem-for-lie-algebras`: checks
  ideal/subalgebra closure and shows the published underlying module
  isomorphism preserves brackets in both directions. Zero map and injective/
  surjective extremes are covered.
- `def-direct-product-and-direct-sum-of-lie-algebras`: componentwise bracket;
  finite support is closed because the support of a bracket lies in an
  intersection. Empty products/sums and finite families are explicit.
- `def-derivation-of-a-lie-algebra`: fixes the Lie Leibniz law and inner maps.
- `prop-derivations-form-a-lie-algebra-and-inner-derivations-form-an-ideal`:
  expands the commutator of derivations, uses Jacobi for `ad`, computes
  `[D,ad_x]=ad_{Dx}`, and identifies the kernel with the center. Abelian and zero
  cases are explicit.
- `def-semidirect-product-of-lie-algebras`: states the exact homomorphism into
  derivations and the candidate bracket, without smuggling in Jacobi.
- `lem-semidirect-product-bracket-satisfies-jacobi`: bilinearity/alternation are
  direct; the three families in the second Jacobi component cancel by Jacobi in
  `h`, the derivation law, and
  `[rho(x),rho(y)]=rho([x,y])`. Trivial action and zero-summand cases reduce to a
  direct sum.

Checks: explicit-path precheck passes all four proof-bearing items among 1–11;
explicit-path rendercheck passes all eleven files. The only repairs were
checker-canonical dependency-layer numbering and source-line layout; no
mathematical claim changed.

### Items 12–19 — representations and standard operations

- `def-representation-of-a-lie-algebra`: defines the commutator Lie algebra
  `gl(V)`, the homomorphism convention, and the equivalent bilinear action
  identity, with no dimension restriction.
- `def-subrepresentation-quotient-representation-and-intertwiner`: defines
  stability, checks the quotient action against a representative change, and
  fixes the intertwining equation.
- `def-irreducible-completely-reducible-and-faithful-lie-algebra-representation`:
  irreducibility excludes the zero representation; complete reducibility uses
  algebraic finite-support direct sums and is not asserted universally;
  faithfulness is injectivity. The zero representation is the empty sum.
- `prop-representation-kernels-are-ideals-and-faithfulness-is-injectivity`:
  specializes the proved homomorphism-kernel proposition and treats `V=0`.
- `prop-direct-sum-dual-hom-and-tensor-representations`: verifies finite-support
  preservation, evaluates the dual commutator with the required minus sign,
  expands the Hom commutator, constructs the tensor operator by the tensor
  universal property, and cancels the mixed terms. Arbitrary dimension and an
  empty direct-sum family are included.
- `def-symmetric-and-exterior-powers-over-an-arbitrary-field`: uses symmetric
  coinvariants and the published repeated-vector exterior quotient; records
  degrees zero and one and never divides by `n!`.
- `prop-symmetric-and-exterior-powers-are-lie-algebra-representations`: the
  diagonal action commutes with permutations. For the exterior relations, the
  two terms differentiating the repeated positions are expressed as the
  repeated `(v+xv)` tensor minus the repeated `v` and `xv` tensors, a
  characteristic-free stability proof. Quotient universality then descends the
  bracket identity.
- `prop-lie-algebra-representations-are-the-same-as-modules-over-the-lie-algebra-ring-action-before-enveloping`:
  proves both directions of the action/homomorphism equivalence and explicitly
  explains why this is not yet an associative-ring module.

Checks: explicit-path precheck passes all four proof-bearing items among
12–19; explicit-path rendercheck passes all eight files.  
Open obligations: items 20–61 and both pages.  
Next item: `def-tensor-algebra-of-a-vector-space`.

### Items 20–28 — tensor, symmetric, and enveloping algebras

- `def-tensor-algebra-of-a-vector-space`: defines the finite-support graded
  direct sum, fixed-associator concatenation, and degree-zero unit, including
  `T(0)=k`.
- `thm-universal-property-of-the-tensor-algebra`: constructs every homogeneous
  component from the finite multilinear universal property, combines them by
  direct-sum universality, proves multiplicativity on pure tensors and finite
  sums, and proves uniqueness from generation by degree one and the unit.
- `def-symmetric-algebra-of-a-vector-space`: gives the homogeneous quotient by
  the two-sided commutativity ideal and identifies its degree pieces.
- `thm-universal-property-of-the-symmetric-algebra`: extends through `T(V)`,
  proves commutativity kills every ideal generator, factors through the
  quotient, and proves uniqueness using quotient surjectivity.
- `def-universal-enveloping-algebra`: gives the exact tensor quotient, embeds
  the bracket term in degree one, and explicitly withholds injectivity of the
  canonical linear map.
- `lem-the-canonical-map-to-the-enveloping-algebra-is-a-lie-algebra-homomorphism-into-the-commutator-algebra`:
  reads the commutator identity directly from each defining relator, without
  using PBW.
- `thm-universal-property-of-the-universal-enveloping-algebra`: extends a Lie
  map to `T(g)`, checks each relator is killed, factors through `U(g)`, and
  proves uniqueness from the tensor universal property and quotient
  surjectivity. No injectivity of `iota` is used.
- `thm-lie-algebra-representations-are-equivalent-to-unital-modules-over-the-enveloping-algebra`:
  proves the inverse object correspondences and the morphism correspondence.
  Direct dependency correction 5 is required because the statement itself
  uses the earlier intertwiner definition.
- `prop-functoriality-of-the-universal-enveloping-algebra`: constructs `U(f)`
  by universality and proves identity/composition laws by equality on the
  canonical generators.

Source locators: Etingof §12.1, printed pp. 69–70, and §13.1, printed
pp. 74–75; Kirillov §5.1 and Theorem 5.2, printed pp. 71–72.

Checks: explicit-path precheck passes all six proof-bearing items among 20–28;
explicit-path rendercheck passes all nine files.  
Open obligations: items 29–61 and both pages.  
Next item: `def-pbw-filtration-on-the-universal-enveloping-algebra`.

### Items 29–43 — PBW and principal consequences

- `def-pbw-filtration-on-the-universal-enveloping-algebra`: defines `F_n` as
  an image, not a direct embedded tensor-degree subspace, so it remains valid
  before PBW; exhaustiveness uses finite degree support.
- `def-associated-graded-algebra-of-a-filtered-algebra`: states the unit and
  multiplicativity assumptions and checks representative independence via the
  three lower-filtration error terms.
- `prop-the-pbw-filtration-is-multiplicative-and-its-associated-graded-algebra-is-commutative`:
  proves multiplicativity by concatenation, derives the generator-versus-word
  commutator formula, inducts on word length to get
  `[F_m,F_n] subset F_{m+n-1}`, and then proves symbols commute.
- `def-pbw-symbol-map-from-the-symmetric-algebra`: constructs the graded map by
  symmetric universality only after commutativity of the associated graded is
  proved, and builds in neither surjectivity nor injectivity.
- `lem-symmetric-algebra-has-an-ordered-commutative-monomial-basis`: constructs
  the free word-basis algebra `P`, gives mutually inverse maps with `S(V)`, and
  uses only the supplied basis and total order. The empty basis is explicit.
- `lem-pbw-spanning-by-ordered-monomials`: strong well-founded induction on
  `(length,inversion number)` uses `xy=yx+[x,y]`; swapping lowers inversions and
  bracket expansion lowers length.
- `lem-pbw-linear-independence-by-the-regular-representation-on-the-symmetric-algebra`:
  supplies the missing confluence argument. The rewriting system terminates;
  disjoint critical pairs commute; the `zyx` overlap difference is
  `[[y,x],z]+[y,[z,x]]+[[z,y],x]`, which is Jacobi; well-founded induction gives
  a unique normal-form map. The operators `L_x(p)=N(xp)` obey the Lie relation,
  extend to a `U(g)`-action, and an ordered product sends the empty word to its
  distinct word-basis element. This proves independence, not just a strategy.
- `thm-poincare-birkhoff-witt`: combines spanning and independence and then
  identifies, degree by degree, the ordered symmetric basis with the basis of
  symbols of exactly that length. The theorem is conditional on a supplied
  ordered basis and spends no global choice principle.
- `cor-the-canonical-map-from-a-lie-algebra-to-its-enveloping-algebra-is-injective`:
  length-one PBW monomials prove injectivity under the same supplied-basis
  convention.
- `cor-the-enveloping-algebra-has-no-hidden-linear-relations-in-degree-one`:
  the empty and length-one PBW monomials give `F_1 = k direct-sum g`.
- `thm-pbw-symmetrization-is-a-vector-space-isomorphism-in-characteristic-zero`:
  uses characteristic zero exactly to invert `n!`, finite-sum reindexing to
  descend the average, identifies its associated-graded map with `sigma`, and
  proves filtered surjectivity and injectivity by degree induction. It does not
  assert multiplicativity.
- `prop-enveloping-algebra-of-an-abelian-lie-algebra-is-its-symmetric-algebra`:
  compares the two generated quotient ideals directly; no basis choice is
  needed.
- `prop-enveloping-algebra-of-a-direct-sum-is-the-tensor-product-of-enveloping-algebras`:
  constructs both maps, uses the newly recorded module tensor universal
  property for the pure-tensor map, proves its multiplicativity from commuting
  factor images, and checks inverse composites on generators and pure tensors.
- `cor-schurs-lemma-for-irreducible-lie-algebra-representations`: transfers the
  module theorem through the proved equivalence. The scalar clause separately
  assumes finite dimension and algebraic closure and uses the published
  eigenvalue corollary on `T-lambda I`.
- `rem-hopf-algebra-structure-on-the-enveloping-algebra`: records the exact
  coproduct, counit, and opposite-algebra antipode constructions and why their
  identities extend from generators. It is explicitly non-load-bearing.

Source locators: Etingof §§12.1–12.3 and §§13.1–13.2, especially Theorem 13.1,
Corollaries 13.3 and 13.7, and the complete Lemma 13.11 proof on printed
pp. 69–77; Kirillov §§5.1–5.3, Lemma 5.10, Theorem 5.12, Corollaries 5.13 and
5.15, printed pp. 71–76. Kirillov's PBW treatment is only an outline; the
complete overlap/Jacobi argument follows Etingof.

### Items 44–49 — false claims and boundary witnesses

- `fs-every-lie-subalgebra-is-an-ideal`: the `2 x 2` matrix affine algebra has
  `[h,e]=e`; `kh` is a subalgebra but `[e,h]` leaves it, in every
  characteristic.
- `fs-the-dual-representation-has-x-lambda-v-equal-lambda-x-v-with-no-minus-sign`:
  computes `[P_x,P_y]=-P_[x,y]` for the plus transpose. The standard
  characteristic-zero `sl_2` module has `P_h != 0`, so the plus formula fails;
  this avoids the invalid use of an abelian example, where both signs happen
  to satisfy the bracket identity.
- `fs-the-universal-enveloping-algebra-is-commutative`: in the affine algebra,
  the enveloping commutator is `iota(e)`, nonzero by PBW.
- `fs-the-canonical-map-g-to-u-g-is-injective-by-the-definition-of-a-quotient`:
  the definition identifies the kernel as `I intersect g` but does not prove it
  zero; PBW is explicitly identified as the theorem supplying that fact.
- `fs-pbw-symmetrization-is-an-algebra-isomorphism-for-a-nonabelian-lie-algebra`:
  computes the product discrepancy as
  `-1/2 iota([x,y])`, nonzero by PBW in characteristic zero.
- `fs-every-representation-of-a-lie-algebra-is-completely-reducible`: a single
  nilpotent Jordan block for a one-dimensional abelian algebra has exactly one
  stable line, hence can be neither irreducible nor a sum of two irreducibles.

Checks: explicit-path precheck passes all seventeen proof-bearing items among
29–49; explicit-path rendercheck passes all twenty-one files. Definition 22
was renderchecked again after correction 6.  
Open obligations: items 50–61 and both pages; full-pair checks; potential
published-defect evidence requested by the task.  
Next item: `ex-adjoint-and-trivial-lie-algebra-representations`.

### Items 50–61 — examples and counterexamples

- `ex-adjoint-and-trivial-lie-algebra-representations`: Jacobi, via the proved
  adjoint-homomorphism identity, verifies the adjoint action; the zero operator
  verifies the trivial action. The adjoint action is trivial exactly for an
  abelian Lie algebra.
- `ex-standard-representations-of-classical-matrix-lie-algebras`: the
  inclusion of each displayed bracket-closed matrix Lie algebra in
  `gl(V)` preserves commutators, so matrix multiplication is its defining
  representation. The bracket-closed hypothesis is stated rather than
  silently assumed in exceptional characteristics.
- `ex-a-semidirect-product-lie-algebra-from-a-linear-action`: regards `V` as
  abelian, observes that every endomorphism is then a derivation, specializes
  the proved semidirect bracket, and checks that `V` is an abelian ideal and
  the kernel of the projection.
- `ex-the-affine-lie-algebra-as-a-semidirect-product`: the block matrices
  `((A,u),(0,0))` multiply to give the bracket `([A,B],Av-Bu)`, identifying the
  affine algebra with `gl(V) semidirect V`.
- `ex-tensor-dual-and-hom-representation-formulas`: expands all three
  commutators, showing cancellation of the tensor mixed terms, the necessity
  of the dual minus sign, and the two Hom mixed composites.
- `ex-u-of-a-one-dimensional-abelian-lie-algebra-is-a-polynomial-algebra`:
  combines the abelian-enveloping proposition with the one-monomial-per-degree
  description of `S(kx)` to obtain `U(kx) congruent k[t]` and identify the
  generator.
- `ex-pbw-basis-for-the-heisenberg-lie-algebra`: specializes PBW to the
  supplied order `x<y<z`, obtaining `x^a y^b z^c`, and records the concrete
  rule `yx=xy-z` with central `z`.
- `ex-pbw-reordering-in-sl-two`: for the supplied order `f<h<e`, derives
  `eh=(h-2)e`, `hf=f(h-2)`, and `ef=fe+h`; PBW makes the resulting
  `f^a h^b e^c` normal form unique.
- `ex-a-nonsplit-two-dimensional-representation-of-a-solvable-lie-algebra`:
  the nilpotent action `te_2=e_1`, `te_1=0` has invariant line `ke_1`, while
  every complementary line is sent outside itself. This works over every
  field and proves nonsplitting, rather than merely asserting it.
- `cex-symmetrization-does-not-preserve-products-in-sl-two`: in
  characteristic zero, `[h,e]=2e` gives `sym(eh)=eh+e`, whereas
  `sym(e)sym(h)=eh`; PBW injectivity makes the discrepancy nonzero.
- `cex-a-subspace-stable-under-one-generator-but-not-a-subrepresentation`:
  the highest-weight line in the standard two-dimensional `sl_2` module is
  stable under `e` but not under `f`, directly testing the quantifier “every
  Lie-algebra element” in the subrepresentation definition.
- `ex-the-casimir-element-in-u-sl-two`: characteristic zero makes
  `Omega=ef+fe+(1/2)h^2` well-defined, and the earlier reordering rule gives
  `Omega=2fe+h+(1/2)h^2`. The item expressly does not assert centrality; that
  result remains on the later Casimir page.

Dependencies are precisely the earlier A-page definitions, constructions,
PBW results, or (for the last example) an earlier B-page computation listed in
each item. Source locators are Etingof Example 11.1 and §11.2 (printed
pp. 62–63), §11.4 (printed pp. 65–69), and §13.1, especially Example 13.9
(printed pp. 74–75); and Kirillov §§3.3, 4.1–4.3, and 5.1–5.2 (printed
pp. 38–39, 49–53, and 71–75). The affine block computation, nonsplit-line
check, and two counterexamples are fully displayed in the items rather than
outsourced to those references.

Checks: explicit-path precheck passes all twelve proof-bearing B items;
explicit-path rendercheck passes all twelve files. No example is used as an
A-page prerequisite.  
Open obligations: none in the pair-owned examples.  
Next item: none; all 61 current manifest rows are authored.

## Pair pages and proposed contract handoff

- The A page contains the 49 theory/false-statement rows in manifest order and
  has `examples: []`; the B page contains the 12 examples/counterexamples in
  manifest order and has `items: []`. Their summaries state the arbitrary-
  dimension, arbitrary-characteristic, supplied-basis, and characteristic-zero
  boundaries and cross-link the companion pages.
- All 61 item files have `id`, `kind`, and `title` exactly matching the current
  manifest. Fifteen initially paraphrased titles were normalized to the
  manifest spelling during the final metadata audit; no mathematical content
  changed.
- Proposed proof-contract input is the metadata and the `Facts & Assumptions`
  / numbered proof or verification already present in each item. Definitions
  and the non-load-bearing Hopf remark need no proof contract; the 43
  proof-bearing items specify `direct`, `induction`, or `constructive` as
  appropriate. The lead must incorporate scaffold corrections 1–8 above into
  the shared dependency and proof-contract artifacts before certification.
- No extra local item outside the 61 manifest rows was necessary. The
  characteristic-free symmetric/exterior-power definition already allocated
  by the manifest supplied the one local abstraction that the older published
  real-tensor item could not.

## Final validation

- Full explicit-path precheck: **43 checked, 0 failing**.
- Full explicit-path rendercheck: **63 files, all clean** (61 item files plus
  both page files).
- Manifest audit: **61 manifest rows, 61 page rows, 61 files**; item IDs,
  order, kinds, and titles all match.
- Pair-filtered global dependency audit: no diagnostic names either owned page
  or any of the 61 owned items after dependency corrections 7–8.
- The repository-wide dependency command is not globally green because of
  out-of-scope live/concurrent state: 33 `page-item-missing` errors are on
  `lie-subgroups-actions-and-homogeneous-spaces` and its examples page, ten
  `b-leaf-content` errors name other pages/items, and the one page cycle is
  `lie-subgroups-actions-and-homogeneous-spaces-examples ->
  lie-subgroups-actions-and-homogeneous-spaces -> ...-examples`. None names
  this pair. No cross-pair file was edited.

## Potential published defects and scope mismatch for the lead

These were inspected but not edited, in accordance with the published-file
and canonical-ledger prohibition.

1. Published item
   `def-universal-enveloping-algebra-as-a-tensor-quotient`, on page
   `harish-chandra-isomorphism-casimir-and-central-characters`, has `deps: []`
   while its definition directly consumes the tensor algebra, a generated
   two-sided ideal, and an associative quotient algebra. This is a concrete
   dependency-metadata defect; the current pair instead records all three
   prerequisite interfaces.
2. Published item
   `thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra`, same page,
   step 1.2 passes from termination plus resolution of adjacent overlaps to a
   unique normal form. The theorem is true, but that implication is the
   confluence/Diamond (or Newman) argument and is neither supplied as a
   dependency nor proved there for the linear rewriting system. This is a
   proof-completeness risk, not a counterexample to PBW. The new local PBW
   independence lemma supplies the well-founded uniqueness induction and the
   induced regular action explicitly.
3. Published `def-symmetrization-and-alternation-operators` is not itself
   asserted defective: it intentionally concerns finite-degree real-valued
   covariant tensors and averages by `1/k!`. It cannot supply this pair's
   arbitrary-field quotient definitions of `S^n(V)` and `Lambda^n(V)`. The
   local manifest item makes that scope boundary explicit and introduces no
   factorial division.

## Final status

All pair-owned mathematical arguments, examples, item metadata, and both page
files are complete. There are no unresolved pair-owned proof obligations and
no choice-dependent assertion. Remaining work belongs to the group lead:
inspect the files, integrate scaffold corrections 1–8 into shared artifacts,
run the shared record/update commands, and certify the batch.
