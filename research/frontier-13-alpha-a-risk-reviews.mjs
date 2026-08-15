#!/usr/bin/env node
// Write Alpha group-a risk_review dispositions into the batch-1/2/5 proof
// contracts for every high/critical item risk-report routed.
//
//   node research/frontier-13-alpha-a-risk-reviews.mjs
//
// Each record states the evidence the disposition actually rests on. Items Alpha
// repaired at step 6b carry the specific finding and repair; the rest carry the
// independent reader's full read plus the gate set, and say so explicitly rather
// than claiming a re-derivation that did not happen.
import { readFileSync, writeFileSync } from 'fs';

const REVIEWER = 'alpha-a (Claude Opus 5, frontier-13 step 6b)';

// Reader findings Alpha adjudicated from disk at 6b: id -> [verdict, what happened].
const ADJUDICATED = {
  'cor-symmetric-polynomial-values-on-roots-lie-in-the-base-field': ['confirmed_fatal',
    'Reader 1 finding 1. The Statement and title asserted a UNIQUE Q satisfying only the evaluated equality; that is false, and Alpha reproduced the reader\'s countermodel (R=Z, n=1, f=t, alpha=0, P=x_1: Q=0 and Q=T_1 both satisfy it). Repair: uniqueness moved to the formal identity P=Q(e_1,...,e_n) that thm-fundamental-theorem-of-symmetric-polynomials actually supplies, the evaluated equality is now stated for that Q, the title dropped "unique", and step 3.1 says plainly that the evaluated equality alone does not determine Q.'],
  'lem-leading-multidegrees-of-elementary-symmetric-monomials': ['confirmed_fatal',
    'Reader 1 finding 2. Alpha confirmed from disk that def-ring admits the zero ring ("Nothing above requires 1 != 0") and that def-lexicographic-order-and-polynomial-multidegree defines a leading multidegree only for a nonzero polynomial. Over the zero ring the asserted leading multidegree does not exist, so the hypothesis was missing. Repair: the Statement and Given now assume 1 != 0 and say why. Both consumers were checked and remain true for every commutative ring: each applies the lemma only after producing a nonzero polynomial, which itself forces 1 != 0, and that one-clause observation is now written into thm-elementary-symmetric-polynomials-are-algebraically-independent step 2.1 and thm-fundamental-theorem-of-symmetric-polynomials-existence step 1.1.'],
  'prop-elementary-and-complete-generating-series-identity': ['confirmed_fatal',
    'Reader 1 finding 3. Alpha opened def-elementary-symmetric-polynomials: it gives the subset-sum formula, e_0=1 and e_k=0 for k>n, and does NOT state the product identity sum (-1)^i e_i t^i = prod (1-x_j t) that [L1] attributed to it and that step 3.1 needs. Repair: [L1] now restates the definition faithfully, and a new step 1.1 proves the product identity directly by the subset expansion, so the identity is proved here rather than mis-cited. Alpha chose the inline derivation over citing thm-vieta-expansion because the Vieta form needs a reindexing the item does not carry.'],
  'thm-newtons-identities': ['confirmed_nonfatal',
    'Reader 1 finding 4. Real defect, closable inside 30 seconds, so polished at step 6 where the text is not yet frozen. Step 3.1 justified the displayed identity by "differentiating E(-t)H(t)=1", which needs a derivative of the infinite series H and, taken literally, yields -E\'(-t)H+E(-t)H\'=0 instead. Alpha verified the displayed identity is nevertheless TRUE and follows without differentiating H: multiply step 2.1 by G(t) and use G(t)H(t)=1. Repair: the ambiguous E\'(-t) notation is replaced by G(t):=E(-t), a polynomial in t, so [L3] applies legitimately; [L4] now cites prop-formal-derivative-laws for the Leibniz rule that step 1.1 actually uses; step 3.1 states the multiply-and-substitute route and says no derivative of H is taken. Alpha recomputed the coefficient comparison and the final sign.'],
  'cor-discriminant-as-a-resultant-with-the-derivative': ['confirmed_fatal',
    'Reader 1 finding 5. Alpha opened def-formal-derivative-of-a-polynomial: it defines the coefficientwise derivative only and does not state the product rule, which [L3] claimed and which step 1.1 needs to differentiate the split product. Repair: [L3] restates the definition faithfully and a new [L4] cites prop-formal-derivative-laws clause 3, the item that does state (fg)\'=f\'g+fg\'; step 1.1 now derives f\' = sum_i prod_{j!=i}(t-alpha_j) by iterating Leibniz over the n factors.'],
  'thm-finite-fields-have-prime-power-order': ['confirmed_nonfatal',
    'Reader 1 finding 6. Real gap: step 3.1 identified the constructed pair (p,n) but did not rule out a second representation |F|=l^m. Alpha checked the reader\'s suggested citation and did NOT use it: thm-canonical-prime-factorisation is conditional on a supplied covering list of primes, so it is the wrong instrument here. Repair: [L7] cites cor-euclids-lemma-for-finite-products, and step 3.1 now derives p | l^m => p | l => p = l, then p^n = p^m => n = m from p >= 2.'],
  'thm-factorization-of-x-qn-minus-x': ['confirmed_nonfatal',
    'Reader 1 finding 7. Real: step 1.2 took a root of an arbitrary monic irreducible with no input supplying one, used [L5] as though P were already known to be the minimal polynomial, and step 2.1 inferred divisibility from vanishing without the minimal-polynomial divisibility theorem; step 1.3 also needed a root of a repeated factor. Repair: [L8] cites lem-adjoining-one-root-reduces-the-unsplit-degree for root existence and [L9] cites thm-evaluation-kernel-and-minimal-polynomial for both the uniqueness that makes P the minimal polynomial and the divisibility criterion; steps 1.2, 2.1 (was 1.3) and 2.2 now name them, and 2.1 gets its root from the splitting field E of step 1.1. Stratification re-canonicalised per precheck.'],
  'cor-irreducible-polynomials-exist-over-finite-fields-in-every-degree': ['confirmed_nonfatal',
    'Reader 1 finding 8. Real: step 2.1 introduced the minimal polynomial of a before any input established that a is algebraic, which [L6] presupposes. Repair: [L7] cites def-algebraic-and-transcendental-elements and step 2.1 first exhibits a nonzero annihilator, the powers a^0..a^{|E|} of the finite field E not being pairwise distinct.'],
  'thm-quadratic-tower-characterization-of-algebraic-constructibility': ['confirmed_nonfatal',
    'Reader 1 finding 9. Real: step 2.1 concluded degree exactly two from [L2] alone, which needs the minimal polynomial to divide t^2-a. Repair: [L4] cites thm-evaluation-kernel-and-minimal-polynomial and step 2.1 now argues degree <= 2 by divisibility and excludes degree 1 by the omission of redundant adjunctions.'],
  'ex-f-eight-as-a-polynomial-quotient': ['confirmed_nonfatal',
    'Reader 1 finding 10. Real rendering defect: four literal "quad" without backslash in the power table. Fixed. Alpha then wrote a detector for the whole class over all 213 group-a items and the ten page files rather than trusting a hand-read sample; it found exactly one further instance (thm-carmichael-function-formula, reader 2 PR-9) and nothing else. The displayed power computations themselves were checked and are correct.'],

  'lem-direct-product-of-finite-cyclic-groups-is-cyclic-iff-orders-are-coprime': ['confirmed_nonfatal',
    'Reader 2 PR-1, a provenance-label defect. Stein Lemma 2.5.7 gives the commuting-elements order product, not the displayed iff for C_m x C_n, and the batch coverage artifact itself records the Stein result as "inline" for this item. The local Statement is true and its proof closes; the label was the defect. provenance.statement retagged literature-derived -> ai-altered.'],
  'cor-power-congruence-solution-count-modulo-a-prime': ['confirmed_nonfatal',
    'Reader 2 PR-2. Stein Proposition 2.5.5 assumes d | (p-1); the item proves the stronger gcd(d,p-1) formula for all d >= 1 and recovers Stein as a special case. Extending a source theorem\'s domain and conclusion is material. provenance.statement retagged ai-altered. The proof itself is correct and finite-smoke re-passes (3393 solvable instances).'],
  'cor-number-of-solutions-of-a-binomial-congruence': ['confirmed_nonfatal',
    'Reader 2 PR-3. Hackman C.III.1 states the solvability biconditional, not the exact count gcd(phi(n),m); the count is derived locally in steps 2.1-3.1. provenance.statement retagged ai-altered. finite-smoke re-passes.'],
  'def-carmichael-function': ['confirmed_nonfatal',
    'Reader 2 PR-4. Corroborated directly from the batch notes, which state "Hackman starts from maximal element order; the scaffold proves those descriptions equivalent rather than silently identifying them" - so the item defines lambda(n) as the group exponent while the cited C.V.3 defines it as the maximal order, and the equivalence needs the following proposition. That is a material reformulation. provenance.statement retagged ai-altered. The Definition is mathematically sound.'],
  'lem-primitive-roots-pass-between-odd-n-and-twice-n': ['confirmed_nonfatal',
    'Reader 2 PR-5 and PR-8, both real. PR-5: Hackman C.I.6 gives the forward representative-level result, while the item asserts an iff of existence; provenance.statement retagged ai-altered. PR-8: [L3] attributed the cardinality reading of phi to cor-totient-at-one-and-at-a-prime, whose Statement Alpha opened and which gives only phi(1)=1 and phi(p)=p-1; the reading phi(n)=|(Z/n)^x| lives in def-unit-group-modulo-n-and-euler-totient. Repair: [L3] restated faithfully, [L4] added citing that definition, step 1.2 now names both.'],
  'thm-classification-of-moduli-with-primitive-roots': ['confirmed_nonfatal',
    'Reader 2 PR-6. Corroborated from the batch notes, which record that this library admits primitive roots for every positive modulus so n=1 is included while "Several sources state the classification only for n>1"; Hackman C.IV.10 lists 2,4,p^k,2p^k. Adding a boundary case the cited theorem omits is a material extension even though it is correct and proved here. provenance.statement retagged ai-altered.'],
  'thm-internal-external-semidirect-product-equivalence': ['confirmed_nonfatal',
    'Reader 2 SD-1 and SD-8. Alpha verified the locator against the actual PDF with pypdf: Conrad 3.1 is "Definition 3.1" of the external semidirect product and the recognition theorem is Theorem 4.1, stated in the forward direction only - so the reference "Theorem 3.1" was wrong and the iff packaging is a material extension. The batch source ledger independently records the same range. Repairs: locator corrected to "Definition 3.1 and Theorem 4.1"; provenance.statement retagged ai-altered. SD-8 was also real: the right-hand side named the conjugation action before normality made it a map N -> N, so N x| H was not yet defined. The Statement now requires explicitly that conjugation restricts to an action alpha: H -> Aut(N), and step 3.1 says that clause is what makes Phi defined.'],
  'prop-holomorph-as-a-permutation-group': ['confirmed_nonfatal',
    'Reader 2 SD-2. Cameron\'s exercise uses the right-multiplication convention; this batch chose the opposite external-product convention and proves the left-affine formula x -> g alpha(x). The result is correct but the action convention and displayed formula are changed, which is material. provenance.statement retagged ai-altered.'],
  'cor-dihedral-groups-as-semidirect-products': ['confirmed_nonfatal',
    'Reader 2 SD-3, and Alpha found the underlying defect to be larger than the label. The Statement asserted D_n = C_n x| C_2 for every n >= 1, but the library\'s only D_n is ex-presentation-of-a-dihedral-group, defined for n >= 3 as a subgroup of Sym(Z/n), and the proof never connected the two: it constructs Dih(C_n) and reads off its structure. Alpha first proved the n >= 3 identification via von Dyck, but depcheck rejected it as error b-leaf-content because that item lives only on a B/examples page and an A-page item may not depend on a B leaf. Alpha therefore NARROWED the claim rather than patching it: the Statement is now about Dih(C_n) = C_n x| C_2, fixes the notation D_n explicitly as its own convention, and records the two degenerate values (Dih(C_1) = C_2, Dih(C_2) = C_2 x C_2, inversion on C_2 being the identity). provenance.statement retagged ai-altered. All three consumers were opened and their [L] restatements aligned; each needs only Dih(C_n), so none is weakened.'],
  'thm-automorphisms-of-a-finite-cyclic-group': ['confirmed_nonfatal',
    'Reader 2 SD-4. Real: [L1] claimed thm-classification-of-cyclic-groups states both the classification AND that a homomorphism from a cyclic group is determined by the image of a generator; Alpha opened it and its Statement gives only the classification. Repair: [L1] restated faithfully, [L6] added citing lem-cyclic-subgroup-is-the-set-of-powers, and step 1.1 now derives "f is determined by f(g)" inline from every element being a power, then names [L1] for the identification of the index set with Z/n.'],
  'lem-groups-of-order-pq-have-a-normal-q-subgroup': ['confirmed_nonfatal',
    'Reader 2 SD-5, both halves real. Cauchy [L1] supplies an ELEMENT of order q while step 1.1 chose a SUBGROUP; and [L2] added "which is contained in Q" to thm-left-coset-action-and-its-kernel, whose Statement Alpha opened and which gives only ker rho = Core_G(Q). Repair: [L2] restated faithfully, [L8] cites lem-core-is-largest-normal-subgroup-contained for the containment, [L9] cites lem-order-characterisation for |<g>| = q, and step 1.1 now builds Q = <g> from the Cauchy element.'],
  'lem-order-p-actions-on-a-cyclic-q-group': ['confirmed_nonfatal',
    'Reader 2 SD-6, same class as PR-8. [L2] read the cardinality of (Z/q)^x out of cor-totient-at-one-and-at-a-prime, which states only phi(q)=q-1. Repair: [L2] now cites def-unit-group-modulo-n-and-euler-totient alongside it for phi(n)=|(Z/n)^x| and states the bridge explicitly.'],
  'thm-structure-of-the-unit-group-modulo-n': ['confirmed_nonfatal',
    'Reader 2 PR-7, both halves real. [L4] said every positive integer HAS its canonical prime-power factorisation, but thm-canonical-prime-factorisation is conditional on a supplied injective covering list of primes; and step 2.2 used phi(2), phi(4) as unit-group ORDERS without the totient/cardinality definition. Repairs: [L4] restated faithfully and notes that this theorem\'s own Given supplies exactly such a list; [L7] cites def-unit-group-modulo-n-and-euler-totient and step 2.2 now names it.'],
  'prop-holomorph-recognises-regular-normal-subgroups': ['confirmed_nonfatal',
    'Reader 2 SD-7. Alpha confirmed the boundary is real, not vacuous: def-group-action defines transitive as "every x,y in X satisfy g.x=y for some g", which holds vacuously on the empty set, so a faithful regular action on Omega = {} satisfies every hypothesis while no base point omega_0 exists and the identification of Omega with R cannot be made. Repair: the Statement and Given now require Omega nonempty and say why the hypothesis is not automatic.'],
  'thm-carmichael-function-formula': ['confirmed_nonfatal',
    'Reader 2 PR-9. Real rendering defect in the Statement display: "qquad" twice without its backslash, which KaTeX renders as letters. Fixed. Covered by the class detector described under ex-f-eight-as-a-polynomial-quotient.'],

  'thm-tensor-product-basis-from-bases': ['confirmed_nonfatal',
    'Reader 5 finding 3. Real: step 2.1 applied the direct-sum theorem "in each variable" while thm-tensor-products-commute-with-arbitrary-direct-sums stated only the first-variable form. Rather than bridging with symmetry in each of three consumers, Alpha proved the second-variable clause once at the source: that theorem now also states Phi\': sum_i (N (x) M_i) -> N (x) sum_i M_i, proved in a new step 5.1 by conjugating Phi with the symmetry sigma of thm-symmetry-and-associativity-over-a-commutative-ring, which precedes it on the page (item 11 vs item 14) and does not depend on it, so no cycle and no forward reference. [L1] here now states both variables.'],
  'thm-projective-modules-are-flat': ['confirmed_nonfatal',
    'Reader 5 finding 5. Real: step 1.1 identified u (x) 1_F with a direct sum of copies of u, with F in the SECOND tensor variable. Licensed by the second-variable clause now proved in thm-tensor-products-commute-with-arbitrary-direct-sums; [L2] restated to name it.'],
  'cor-free-modules-are-projective-and-flat': ['confirmed_nonfatal',
    'Reader 5 finding 6. Same class as finding 5: step 1.2 tensors an exact sequence with F = sum_X R in the second variable. Licensed by the new second-variable clause; [L3] restated to name it.'],
  'cor-tensor-product-with-a-quotient-ring': ['confirmed_nonfatal',
    'Reader 5 finding 4. Real: step 1.1 wrote M (x) I -> M (x) R -> M (x) R/I -> 0, tensoring the exact sequence on the RIGHT, while thm-right-exactness-of-tensor-products (Statement opened by Alpha) tensors on the left: A (x) N -> B (x) N -> C (x) N -> 0. Repair: [L6] cites the symmetry isomorphism and step 1.1 now derives the first-variable sequence and transports it termwise by sigma.'],
  'cor-flat-modules-preserve-intersections-of-ideals': ['confirmed_nonfatal',
    'Reader 5 finding 7. Real: step 2.1 produces (R/I) (x) M while [L2] states M (x) (R/I) = M/IM. Repair: [L6] cites symmetry and step 3.1 names the identification. Alpha separately checked step 2.1\'s use of [L5]: the direct-sum distribution there is already in the correct (first) variable, so only the [L2] application needed the bridge.'],
  'ex-matrix-algebra-extension-of-scalars': ['confirmed_fatal',
    'Reader 5 finding 1. Alpha opened thm-tensor-product-basis-from-bases: its Statement gives an R-basis of M (x)_R N from R-bases of BOTH factors over the SAME ring. [L4] inflated this into the scalar-extension statement that an F-basis (u_i) yields the K-basis (1 (x) u_i), which the cited theorem does not state, does not supply an F-basis of K for, and which is a different theorem; step 2.1 rested its entire isomorphism claim on it. Repair follows the brief: the citation is not inflated further and no unused dep is added - the basis route is replaced by an explicit inverse S(B) = sum b_ij (x) E_ij, with [L4] now citing prop-elementary-tensor-formulas-descend-exactly-when-balanced for the descent of T and [L6] citing def-restriction-and-extension-of-scalars for the K-action and for moving an F-scalar across the balanced tensor. Alpha checked both composites on generators.'],
  'ex-extension-of-scalars-of-coordinate-modules': ['confirmed_fatal',
    'Reader 5 finding 2. Same inflation as finding 1: [L3] read a K-basis of K (x)_F F^n out of the same-ring product-basis theorem, and Alpha confirmed the "in particular" is not an instance of that Statement - no F-basis of K is among the inputs, and choosing one would give a product F-basis, not the claimed K-basis. Repair: explicit inverse S((k_j)) = sum_j k_j (x) e_j, [L3] recited to prop-elementary-tensor-formulas-descend-exactly-when-balanced, both composites checked on generators, n = 0 handled by the empty sum.'],
};

// Evidence common to every group-a high/critical item, stated so the record does
// not overclaim what Alpha personally re-derived.
function baseEvidence(id, tier, signals, screened) {
  const reader = { 1: 'reader 1 (87/87 batch-1 items)', 2: 'reader 2 (77/77 batch-2 items, plus 70 earlier dependencies)', 5: 'reader 5 (49/49 batch-5 items)' }[batchOf(id)];
  return [
    `Tier ${tier}; risk signals: ${signals}.`,
    `Independent step-6a coverage: ${reader} opened this item and the on-disk statement of every item it cites, and reported findings against it.`,
    'Alpha adjudicated every finding raised in this batch from disk, opening both the item and the cited dependency in each case.',
    `Mechanical evidence current as of this disposition: precheck canonical stratification PASS; proof-contract --strict PASS for this item, so every [F#]/[A#]/[L#] carries an exact quote that occurs verbatim in the cited item's own statement section, every numbered step's stated inputs cover every citation its text makes, and the boundary dispositions are present; content-policy, rendercheck, depcheck, fwdcheck, extcheck and url-sweep (--recover --fail-on-dead, 19/19 live) all PASS over batches 1, 2 and 5.`,
    screened,
    'Limitation stated deliberately: this disposition rests on the independent reader\'s full read, Alpha\'s adjudication of the findings it produced, and the gate set above. Alpha did not independently re-derive every proof in the batch line by line. The gap the gates do NOT close is the one this run\'s dominant defect class exploited - proof-contract checks that the quote matches the source, not that the surrounding [L#] prose restates the quote faithfully - which is why the readers, not the gates, found those ten inflations, and why Alpha re-read each flagged citation against its source by hand.',
  ].join(' ');
}

function batchOf(id) {
  for (const b of [1, 2, 5]) {
    const pages = JSON.parse(readFileSync(`research/frontier-13-batch-${b}.pages.json`, 'utf8'));
    for (const p of pages) if ((p.items || []).some(i => i.id === id)) return b;
  }
  return null;
}

const risk = JSON.parse(readFileSync('/tmp/risk2.json', 'utf8'));
const scope = new Set(readFileSync('/tmp/group-a-items.txt', 'utf8').split('\n').filter(Boolean));
const targets = risk.findings.filter(r => scope.has(r.id) && (r.tier === 'high' || r.tier === 'critical'));

const screenCandidates = new Set(readFileSync('/tmp/screen-candidates.txt', 'utf8').split('\n').filter(Boolean));

const docs = {};
for (const b of [1, 2, 5]) {
  const f = `research/frontier-13-batch-${b}.proof-contracts.json`;
  docs[b] = { f, j: JSON.parse(readFileSync(f, 'utf8')) };
}

let written = 0, missing = [];
for (const r of targets) {
  const b = batchOf(r.id);
  const contracts = docs[b].j.contracts;
  if (!contracts[r.id]) { missing.push(r.id); continue; }
  const signals = r.signals.map(s => s.reason).join('; ');
  const screened = screenCandidates.has(r.id)
    ? 'Alpha\'s citation-faithfulness screen flagged this item as a candidate; on reading, every hit was a notation artifact (an isomorphism written \\cong where the source states it in words, or an unbraced \\mathbb) and not a content difference.'
    : 'Alpha\'s citation-faithfulness screen over all 109 routed items found no operator or named function in any of this item\'s restatements that its cited statements do not also carry.';
  const adj = ADJUDICATED[r.id];
  const notes = adj
    ? `Step-6b adjudication: ${adj[0]}. ${adj[1]} ${baseEvidence(r.id, r.tier, signals, screened)}`
    : `No step-6a reader finding was raised against this item. ${baseEvidence(r.id, r.tier, signals, screened)}`;
  contracts[r.id] = { ...contracts[r.id], risk_review: { status: 'complete', reviewer: REVIEWER, notes } };
  written++;
}
for (const b of [1, 2, 5]) writeFileSync(docs[b].f, JSON.stringify(docs[b].j, null, 2) + '\n');
console.log(`risk_review written for ${written} item(s); ${missing.length} routed item(s) without a contract entry${missing.length ? ': ' + missing.join(', ') : ''}`);
