// frontier-13 step 9 — apply the scope-denial sweep's row corrections.
// Every edit is keyed by (batch, exact harvested heading). A key that matches no
// row is a hard error: a silently dropped correction is the failure this step exists
// to prevent. Run: node research/frontier-13-alpha-a-step9-apply.mjs [--dry]
import { readFileSync, writeFileSync } from 'node:fs';

const DRY = process.argv.includes('--dry');
const spec = JSON.parse(readFileSync('research/plan-spec.json', 'utf8'));
const order = new Map(spec.pages.map(p => [p.id, p.order]));

/** Append the licensing-page clause §3 requires, naming a page id that exists in plan-spec. */
function lic(pageId, extra = '') {
  if (!order.has(pageId)) throw new Error(`licensing page not in plan-spec: ${pageId}`);
  return ` Licensing page: ${pageId} (order ${order.get(pageId)})${extra ? '; ' + extra : ''}.`;
}

// ---------------------------------------------------------------------------
// A. BUILT AT STEP 9 — the decline reason was refuted from disk and the item exists.
// ---------------------------------------------------------------------------
const BUILT = [
  { batch: 2, name: 'Example 3.9(c), the quaternion group extension does not split',
    disposition: 'included',
    item: 'cex-the-quaternion-extension-of-c-two-by-c-four-does-not-split',
    reason: 'Built at step 9. The surviving decline reason — that Q_8 as a group would first have to be constructed, which is "finite-group-example material" — is the disposition the 2026-08-11 rule retired, and it named no destination page. def-quaternions and thm-quaternions-form-a-division-ring are published on rings-subrings-and-integral-domains (order 46), which is inside this page\'s requires closure, and clause 4 of that theorem supplies the group H^x of nonzero quaternions. Q_8 is therefore built here: def-quaternion-group-of-order-eight and prop-the-quaternion-group-has-order-eight-and-a-unique-element-of-order-two on the A page, and this counterexample on the companion. It refutes a strictly narrower statement than cex-cyclic-prime-square-extension-does-not-split — cyclic kernel and cyclic quotient, nonabelian middle group — so it is not a duplicate of that witness.' },
  { batch: 6, name: 'Example 4.1.7, floor and ceiling adjoint to the inclusion of integers in reals',
    disposition: 'included',
    item: 'ex-ceiling-and-floor-are-adjoint-to-the-inclusion-of-the-integers',
    reason: 'Built at step 9. The decline reason — "the required real floor-and-ceiling definition is absent on disk" — is false: lem-integer-part is published on limits-of-real-functions, which is inside this page\'s requires closure, and it states exactly that for every real x there is a unique integer floor(x) with floor(x) <= x < floor(x)+1. The ceiling is floor by negation. The item proves the full adjoint triple ceiling -| J -| floor between (R,<=) and (Z,<=), using def-galois-connection and def-adjoint-triple from this page\'s own A side.' },
];

// ---------------------------------------------------------------------------
// B. FALSE OR MISATTRIBUTED REASONS — replaced, with the checked evidence.
// ---------------------------------------------------------------------------
const CORRECTED = [
  { batch: 5, name: 'Lecture 9 problem, tensor square of the real quaternion algebra is Mat_4(R)',
    reason: 'The recorded reason was false and is replaced. It claimed "no quaternion-algebra page or dependency exists in the current library spine"; in fact def-quaternions and thm-quaternions-form-a-division-ring are published on rings-subrings-and-integral-domains (order 46), which IS inside this page\'s requires closure. The decline stands on a different and checked ground: this page builds the tensor product of MODULES over a commutative ring, and the isomorphism H (x)_R H = Mat_4(R) is a statement about the tensor product of R-ALGEBRAS — it needs the algebra multiplication on a tensor product, which no item on this page or in its closure constructs, and H is not commutative so it is not even an R-algebra of the kind this page\'s scalars range over.' },
  { batch: 6, name: 'Contravariant vector-space duality example',
    reason: 'The recorded reason called the dual-spaces development "later"; that is wrong in the order and is corrected here. dual-spaces-bilinear-forms-and-inertia is order 92, EARLIER than this page\'s 365.001, and the reason the example cannot be given here is not lateness but closure: that page is not in this page\'s declared requires closure, so no item homed on it may be cited, and the finite-dimensional double-dual comparison the example turns on is exactly such an item.' + lic('dual-spaces-bilinear-forms-and-inertia', 'recoverable once a later page declares both this pair and that one') },
  { batch: 3, name: 'Corollary 4.13, if a positive power is invertible and diagonalizable over C then the operator is diagonalizable',
    reason: 'Reason confirmed, destination made exact. The argument needs the minimal polynomial of T to divide a product of polynomials t^k - lambda_i that SPLITS over C with distinct roots, and splitting over C is the fundamental theorem of algebra: the-fundamental-theorem-of-algebra is order 139 and is not in this page\'s requires closure. The explicit k-th-root route is equally unavailable — thm-complex-nth-roots-and-roots-of-unity is homed on the-complex-exponential-and-eulers-formula (order 189), also outside the closure. What IS in closure(88) is only thm-every-complex-number-has-a-square-root, which does not give k-th roots for k > 2.' + lic('the-fundamental-theorem-of-algebra') },
  { batch: 6, name: 'Corollary 4.6.15, Cat is complete and cocomplete',
    reason: 'The recorded reason said "the construction of arbitrary categorical limits and colimits is not part of this adjunction interface", which reads as if limits and colimits were unavailable; they are — limits-and-colimits is order 363 and IS inside this page\'s requires closure. The checked obstacle is narrower: nothing published or planned constructs products, equalizers and coequalizers IN Cat, which is what completeness of Cat asserts, and no page in plan-spec.json carries that construction. Recorded here as out-of-scope rather than deferred, because there is no destination page to name.',
    disposition: 'out-of-scope' },
  { batch: 4, name: 'Exercise 2.1.25, existence of a linearly large regular pair of subsets',
    reason: 'Reason sharpened: the recorded text called Theorem 2.1.26 "stronger" than this exercise, which overstates the relation — group C\'s step-3 reading of Zhao records them as siblings, not as one implying the other. The accurate ground for declining is that the induced-removal chain on this page runs through 2.1.26, included as thm-large-self-regular-subset, and its partition corollary; this exercise\'s density-increment existence statement is a parallel result that no item here consumes and that would duplicate the same increment technique.' },
  { batch: 1, name: 'Classical problem: squaring the circle',
    disposition: 'out-of-scope',
    reason: 'Reclassified from deferred, because the recorded reason said the transcendence proof "is scheduled far beyond this algebra page" and no transcendence page exists anywhere in plan-spec.json — a deferral with no destination is indistinguishable from a drop. The mathematics of the reason survives: squaring the circle reduces to the transcendence of pi, which is not a consequence of the quadratic-tower degree obstruction this page proves, and transcendence theory is a subject area the library has not reached and has not planned.' },
  { batch: 1, name: 'Result 1.41, impossibility of squaring the circle',
    disposition: 'out-of-scope',
    reason: 'Reclassified from deferred for the same checked reason as the Knapp row: the recorded text said the transcendence proof "is scheduled far beyond this algebra page", but plan-spec.json contains no transcendence page at any order, so nothing licenses the deferral. The conclusion does depend on the transcendence of pi rather than on finite extension degrees, and transcendence theory is a subject area the library has neither reached nor planned.' },
];

// ---------------------------------------------------------------------------
// C. TRUE REASONS MISSING A LICENSING PAGE — the §3 requirement, one id per row.
// ---------------------------------------------------------------------------
const NAMED = [
  [1, 'Determinant formulas for the first power sums following Examples 3.5-3.8', 'determinants-of-matrices-over-a-commutative-ring'],
  [1, 'Lemma 7.1.17, invariance under every adjacent transposition implies symmetry', 'conjugacy-and-simplicity-in-the-symmetric-groups', 'thm-adjacent-transpositions-generate-the-symmetric-group is published there and is not in closure(58)'],
  [1, 'Theorem 9.6, products of bases in a tower when one or both bases are infinite', 'cardinal-arithmetic-and-cofinality', 'def-dimension was checked on disk and does attach no number to an infinite-dimensional space, as the reason states'],
  [1, "Theorem 9.25, Gauss's constructibility criterion for regular polygons", 'finite-fields-and-cyclotomic-extensions'],
  [1, 'Proposition 4.23, the full subfield lattice of an algebraic closure of a prime field', 'algebraic-closure-embeddings-and-separability'],
  [1, 'Proposition 4.24, construction of an algebraic closure of a finite field', 'algebraic-closure-embeddings-and-separability'],
  [4, 'Conjecture 1.2, equivalent formulation via polynomial-size perfect induced subgraphs', 'cographs-perfect-patterns-and-pure-pairs'],
  [4, 'All graphs on at most four vertices have the Erdős–Hajnal property', 'cographs-perfect-patterns-and-pure-pairs', 'it needs both the substitution theorem on modules-substitution-and-prime-graphs (397) and the P4 case, and 413 is the later of the two'],
  [4, 'The four prime graphs on five vertices and the substitution consequence for all other five-vertex graphs', 'modules-substitution-and-prime-graphs', 'the five-vertex consequences continue on iterative-sparsification-and-the-five-vertex-path (419)'],
  [4, 'Exercise 2.1.23, make each part epsilon-regular with all but at most epsilon k other parts', 'cographs-perfect-patterns-and-pure-pairs', 'recorded as the destination for the per-part regularity variants used later in the block; the reason itself was re-checked and holds — this page proves the weighted irregular-pair form and nothing on it consumes the strengthening'],
  [6, 'Example 4.1.15, groupoid of fractions is left adjoint to the inclusion of groupoids', 'monads-comonads-and-their-algebras', 'there is NO localisation-of-categories page anywhere in plan-spec.json, which the recorded reason already says; 365.005 is named as the nearest planned page that builds a free construction with a congruence quotient, and the row remains recoverable from here if a localisation page is ever planned'],
  [6, 'Proposition 4.4.6, pointwise adjoints of a bifunctor assemble with parameter naturality', 'closed-monoidal-categories-and-the-internal-hom'],
  [6, 'Definition 4.4.7, two-variable adjunction', 'closed-monoidal-categories-and-the-internal-hom'],
  [6, 'Example 4.4.8, bimodule tensor-Hom two-variable adjunction', 'tensor-products-of-modules', 'order 106, built in batch 5 of this same run and therefore outside this page\'s closure by the run\'s zero-seam property; the two-variable packaging lands on closed-monoidal-categories-and-the-internal-hom (365.027)'],
  [6, 'Definition 4.4.10, cartesian closed category', 'closed-monoidal-categories-and-the-internal-hom', 'plan-spec.json contains no page named for cartesian closed categories; 365.027 is the page that builds internal homs, of which the cartesian case is one'],
  [6, 'Lemma 4.4.11, presheaf categories are cartesian closed', 'presheaves-sheaves-stalks-and-sheafification'],
  [6, 'Example 4.4.15, tensor-Hom adjunction in abelian groups', 'closed-monoidal-categories-and-the-internal-hom'],
  [6, 'Example 4.4.18, loop-suspension adjunction', 'higher-homotopy-groups-and-cofiber-sequences'],
  [6, 'Exercise 4.4.ii, proof that pointwise adjoints of a bifunctor assemble naturally', 'closed-monoidal-categories-and-the-internal-hom'],
  [6, 'Exercise 4.4.iv, smash product and pointed-Hom two-variable adjunction', 'higher-homotopy-groups-and-cofiber-sequences'],
  [6, 'Exercise 4.4.v, module-Hom and chain-complex-Hom two-variable adjunctions', 'chain-complexes-and-homology', 'the enriched-Hom half lands on enriched-categories (365.033)'],
  [6, 'Corollary 4.6.4, tensor product distributes over direct sums', 'tensor-products-of-modules'],
  [6, 'Proposition 4.6.8, exactness criterion for functors between abelian categories', 'abelian-categories'],
  [6, 'Corollary 4.6.9, adjoints between abelian categories and exactness/additivity', 'abelian-categories'],
  [6, 'Corollary 4.6.10, tensor product is right exact', 'tensor-products-of-modules'],
  [6, 'Proposition 4.6.14, a reflective subcategory inherits limits created by its inclusion', 'reflective-subcategories-and-the-adjoint-functor-theorems'],
  [6, 'Exercise 4.6.viii, separate colimit preservation in a two-variable adjunction', 'closed-monoidal-categories-and-the-internal-hom'],
  [6, 'Exercise 4.6.x, reflector idempotence, essential image, and local objects', 'reflective-subcategories-and-the-adjoint-functor-theorems'],
  [6, 'Exercise 4.6.xi, a reflective inclusion need not create all colimits', 'reflective-subcategories-and-the-adjoint-functor-theorems'],
  [6, 'Exercise 2.1.16, adjunctions for G-sets and group representations', 'induced-representations-and-frobenius-reciprocity'],
  [6, 'Exercise 2.1.17, the five-adjoint chain around the constant presheaf functor', 'presheaves-sheaves-stalks-and-sheafification'],
  [6, 'Example 6.3.8, a complete ordered set has a least element', 'reflective-subcategories-and-the-adjoint-functor-theorems'],
  [6, 'Definition 6.3.9, weakly initial set', 'reflective-subcategories-and-the-adjoint-functor-theorems'],
  [6, 'Examples 6.3.11-6.3.12, applications of the general adjoint functor theorem to free algebraic constructions', 'reflective-subcategories-and-the-adjoint-functor-theorems'],
  [6, 'Theorem 6.3.13, special adjoint functor theorem', 'reflective-subcategories-and-the-adjoint-functor-theorems'],
  [6, 'Definition 6.3.15, cartesian closed category', 'closed-monoidal-categories-and-the-internal-hom', 'plan-spec.json contains no page named for cartesian closed categories'],
  [6, 'Example 6.3.17, Cat is cartesian closed', 'closed-monoidal-categories-and-the-internal-hom'],
  [6, 'Example 6.3.18, vector spaces are not cartesian closed', 'closed-monoidal-categories-and-the-internal-hom'],
  [6, 'Remark 6.3.19, vector spaces are monoidal closed via tensor-Hom', 'closed-monoidal-categories-and-the-internal-hom'],
  [6, 'Theorem 6.3.20, presheaf categories are cartesian closed', 'presheaves-sheaves-stalks-and-sheafification'],
  [6, 'Exercise 6.3.22, relations among adjointness, representability, and limit preservation', 'reflective-subcategories-and-the-adjoint-functor-theorems'],
  [6, 'Exercise 6.3.23, small complete categories are equivalent to complete ordered sets', 'reflective-subcategories-and-the-adjoint-functor-theorems'],
  [6, 'Exercise 6.3.24, cardinal bounds and the GAFT construction of free groups', 'reflective-subcategories-and-the-adjoint-functor-theorems', 'the cardinal arithmetic it uses is published on cardinal-arithmetic-and-cofinality (247)'],
  [6, 'Section IV.3, Reflective Subcategories', 'reflective-subcategories-and-the-adjoint-functor-theorems'],
  [6, 'Section IV.6, Cartesian Closed Categories', 'closed-monoidal-categories-and-the-internal-hom'],
  [6, 'Corollary 4.6.6, free groups carry disjoint unions to free products', 'free-products-and-amalgamation', 'order 62, verified outside closure(365.001) — earlier in the reading order but not declared, so no item homed there may be cited here'],
  [6, 'Proposition 6.3.7, adjoint functor theorem for complete ordered sets', 'reflective-subcategories-and-the-adjoint-functor-theorems'],
  [6, 'Theorem 6.3.10, general adjoint functor theorem', 'reflective-subcategories-and-the-adjoint-functor-theorems'],
  [3, '7.55, spectral description of complex unitary operators', 'the-spectral-theorem-and-singular-value-decomposition'],
  [4, 'Theorem 1.1, the classical exp(c sqrt(log n)) homogeneous-set bound for H-free graphs', 'classical-and-loglog-erdos-hajnal-bounds'],
  [4, 'Theorem 1.3, every perfect graph has a clique or stable set of size at least the square root of its order', 'cographs-perfect-patterns-and-pure-pairs'],
  [4, "Theorem 2.1, Seinsche's disconnected-or-anticonnected theorem for three-edge-path-free graphs", 'cographs-perfect-patterns-and-pure-pairs'],
  [4, 'Definition of graph substitution and prime graphs', 'modules-substitution-and-prime-graphs'],
  [4, 'Theorem 2.2, the Erdős–Hajnal property is preserved under substitution', 'modules-substitution-and-prime-graphs'],
  [4, 'Classical Erdős–Hajnal exp(c sqrt(log n)) lower bound', 'classical-and-loglog-erdos-hajnal-bounds'],
  [4, 'Bucić–Nguyen–Scott–Seymour log-log improvement', 'classical-and-loglog-erdos-hajnal-bounds'],
  [5, 'Lemma 10.39.3, directed colimits of flat modules are flat', 'subobject-lattices-generators-and-the-grothendieck-axioms'],
  [5, 'Section 5.19, Tor and the definition of flatness through vanishing of Tor', 'tor-flatness-and-global-dimension'],
  [7, 'Corollary 4.7.4, entrywise eigenvalue formula for a real symmetric adjacency matrix via orthogonal diagonalisation', 'the-spectral-theorem-and-singular-value-decomposition'],
  [3, 'Corollary 4.13, if a positive power is invertible and diagonalizable over C then the operator is diagonalizable', null], // handled in CORRECTED
];

// ---------------------------------------------------------------------------
const files = {};
for (let i = 1; i <= 7; i++) files[i] = JSON.parse(readFileSync(`research/frontier-13-batch-${i}.coverage.json`, 'utf8'));

function row(batch, name) {
  const hits = [];
  for (const p of files[batch].pages) for (const s of p.sources) for (const c of s.contents) if (c.name === name) hits.push(c);
  if (hits.length !== 1) throw new Error(`batch ${batch}: expected exactly 1 row named ${JSON.stringify(name)}, found ${hits.length}`);
  return hits[0];
}

let n = 0;
for (const e of [...BUILT, ...CORRECTED]) {
  const c = row(e.batch, e.name);
  if (e.disposition) c.disposition = e.disposition;
  if (e.item) c.item = e.item; else if (e.disposition === 'out-of-scope') delete c.item;
  c.reason = e.reason;
  n++;
}
for (const [batch, name, page, extra] of NAMED) {
  if (page === null) continue;                       // corrected above
  const c = row(batch, name);
  if (/Licensing page:/.test(c.reason || '')) continue;
  c.reason = (c.reason || '').replace(/\s*$/, '') + lic(page, extra);
  n++;
}

if (!DRY) for (let i = 1; i <= 7; i++) writeFileSync(`research/frontier-13-batch-${i}.coverage.json`, JSON.stringify(files[i], null, 2) + '\n');
console.log(`${DRY ? 'DRY: would apply' : 'applied'} ${n} row edit(s)`);
