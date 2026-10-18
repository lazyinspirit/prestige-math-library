# Step 3a reader report — batch 50

Run: non-ml-math-remaining-81-2026-10-18  
Role: reader  
Date: 2026-10-18

## Opened inventory

Read the batch-50 page manifest, cross-batch dependency record, coverage record,
source evidence, notes, and proof contracts. The author records were treated as
evidence and checked against current carriers.

Opened both assigned pages:

- A: finitary-ringel-hall-algebras
- B: finitary-ringel-hall-algebras-examples

Opened all 16 assigned items, in supplier-to-consumer order:

- def-hall-finitary-abelian-category
- lem-hall-flags-lift-through-a-quotient
- def-jordan-quiver-nilpotent-representation-category
- def-untwisted-hall-algebra
- lem-jordan-quiver-category-is-finitary
- lem-jordan-quiver-isoclasses-are-partition-indexed
- lem-untwisted-hall-product-finiteness
- thm-untwisted-hall-algebra-is-associative-and-unital
- thm-generic-jordan-hall-algebra-is-symmetric-functions
- def-hall-littlewood-scalar-product-and-functions
- lem-jordan-block-automorphism-count
- thm-jordan-hall-pairing-and-hall-littlewood-basis
- ex-finite-vector-space-hall-square
- ex-finite-abelian-p-group-hall-square
- ex-jordan-quiver-hall-square
- ex-jordan-hall-littlewood-degree-two-normalizations

Also opened the three page-level prerequisites listed on the A page:
algebraic-representation-and-tensor-symmetry-map,
cyclotomic-klr-algebras-and-highest-weight-categorification, and
symmetric-functions-hall-inner-product-and-schur-bases.

Opened the direct published item suppliers needed for the assigned arguments:

cor-power-sums-are-orthogonal-for-the-hall-inner-product,
def-abelian-category, def-category, def-dominance-order-on-partitions,
def-equivalence-of-n-fold-extensions,
def-exact-sequence-and-short-exact-sequence-in-an-abelian-category,
def-extension-of-an-object-by-an-object-in-an-abelian-category,
def-formal-exponential-logarithm-and-powers,
def-hall-inner-product-on-symmetric-functions,
def-isomorphism-groupoid-and-connected-category,
def-jordan-block-and-jordan-string, def-monomorphism-and-epimorphism,
def-n-fold-yoneda-extension, def-nilpotent-endomorphism,
def-partition-young-diagram-and-conjugate-partition,
def-small-locally-small-and-large-category,
def-stable-graded-ring-of-symmetric-functions,
def-subobject-and-quotient-object,
def-the-direct-image-and-inverse-image-of-a-subobject,
def-the-quotient-of-an-object-by-a-subobject,
lem-conjugation-reverses-dominance,
prop-power-sums-form-a-rational-not-integral-stable-basis,
thm-abelian-groups-form-an-abelian-category,
thm-direct-and-inverse-image-of-subobjects-form-a-galois-connection,
thm-elementary-and-complete-families-freely-generate-the-stable-ring,
thm-euclid-infinitude-of-primes,
thm-every-monomorphism-is-the-kernel-of-its-cokernel,
thm-first-isomorphism-theorem-in-an-abelian-category,
thm-formal-exponential-logarithm-identities,
thm-jordan-form-uniqueness-from-ranks-of-powers,
thm-monomial-symmetric-functions-form-the-integral-stable-basis,
thm-mutual-factorisation-defines-subobject-and-quotient-object-equivalence,
thm-nilpotent-jordan-string-basis,
thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots,
thm-short-five-lemma-in-an-abelian-category,
thm-standard-representatives-modulo-n,
thm-the-pullback-of-an-epimorphism-is-an-epimorphism,
thm-the-quotient-is-independent-of-the-representing-monomorphism,
thm-third-isomorphism-theorem-in-an-abelian-category, and
thm-z-mod-p-is-a-field.

For the simple-object convention and the image definition used in checking
quotient arguments, I also opened def-simple-object and
def-image-and-coimage-in-a-category-with-kernels-and-cokernels.

## Review and repairs

The finitary-category definition fixes the Yoneda extension endpoint order,
requires only finite Hom and Yoneda-Ext sets, and does not impose finite
subobject sets or an Euler twist. Its small-category isomorphism classes form
a set by the ordinary quotient-of-a-set construction. The untwisted product,
finite-support argument, two-step flag bijection, and zero-object unit are
consistent with their local suppliers. In lem-hall-flags-lift-through-a-quotient,
step 1.1 now spells out why the epic pullback projection has full image; this
completes the first-isomorphism identification used there.

The Jordan items had three material gaps. First, the representation definition
introduced S, I_m, and I_lambda only for finite fields, while the partition
classification is stated for every field; its notation is now defined for any
field. Second, the Hall-polynomial proof and Jordan Hall-square example used
the identification of categorical subobjects with invariant subspaces without
establishing it. lem-jordan-quiver-category-is-finitary now proves that
monomorphisms in the concrete category are exactly injective intertwiners and
that subobjects correspond to invariant subspaces; it states abelianness for
all fields and finitarity for finite fields. Third, the classification proof
used “simple object” without stating its local convention; it now states the
nonzero/only-zero-and-identity-subobjects definition and uses the subobject
correspondence to prove uniqueness. The generic Hall theorem and Jordan
Hall-square example cite the correspondence where their subspace counts use it.

The A page previously described only two of its three page-level prerequisites,
and said the detailed calculations were on the companion page even though the
pair-of-flags proof is on the A page. The prose now lists all three routes and
limits the companion-page description to its examples and degree-two
normalization checks. No B-page prose was changed.

The cited primary literature corroborates the conventions without replacing
local proofs. Schiffmann’s Lectures on Hall Algebras, §2.3, PDF pp. 25–28,
gives the classical Hall-polynomial route and the Jordan automorphism count;
§2.4, PDF pp. 28–30, gives the generator normalization
Phi_t(u_(1^r)) = t^(-r(r-1)/2)e_r and the transported Hall–Littlewood
pairing ([arXiv v2](https://arxiv.org/pdf/math/0611617v2)). Young’s §2.1
defines finitary proto-exact Hall algebras using finite Hom and Yoneda Ext,
and states the subobject-counting product and zero-object unit
([arXiv v2 HTML](https://arxiv.org/html/1810.08238v2), §2.1). Its convention
lists the subobject first; the local product explicitly counts the second
factor as subobject. Macdonald, III §4, equation (4.11), printed pp. 224–225,
gives the Hall–Littlewood norms, and VI §1, printed p. 305, gives the monic
dominance-triangular orthogonal characterization
([second-edition PDF](https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf)).

## Page verdicts

- finitary-ringel-hall-algebras (A): **pass after the prose repair**. The
  general untwisted construction, finite support, associativity, generic
  Jordan comparison, and transported pairing are supported by the local
  arguments and their declared dependencies.
- finitary-ringel-hall-algebras-examples (B): **pass**. Its vector-space,
  finite abelian p-group, Jordan-square, and degree-two normalization
  calculations agree with the stated product and pairing conventions.

## Validation and blocker

Ran reflow.mts and precheck.mts for all six changed items. All six
prechecks pass. The strict batch-50 proof-contract check passes for all six
changed items. The final batched proof-layout check reports 6 items, 28 steps,
and 0 defects. No blocker remains.

Coverage was limited to the assigned batch, its direct mathematical suppliers,
the required page summaries, and the relevant cited source sections. I did not
re-audit every transitive proof in the published foundational dependency
closure.
