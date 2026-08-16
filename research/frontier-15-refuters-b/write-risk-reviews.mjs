// Alpha group-b step-6 risk_review dispositions for every high/critical item that
// risk-report.mjs routes in batches 4, 5 and 6. Alpha alone may write these; the
// Beta-prefilled blocks reader 6 removed from batch 6 were not Alpha's and are not
// restored, and batch 5's Beta-authored `pending` placeholders are replaced.
//
// Each note records what was actually checked, by me, from disk. The independent
// refuter dispatch is BLOCKED (Codex quota exhausted until 2026-08-20); every note
// therefore rests on my own reading, and that limitation is stated in the run's
// 6b report rather than hidden inside these rows.
import { readFileSync, writeFileSync } from 'node:fs';

const REVIEWER = 'alpha-b (Claude Opus 5, group Alpha for batches 4-6)';
const CAVEAT =
  ' Independent refuter evidence was unavailable (Codex quota exhausted); this disposition rests on Alpha\'s own reading.';

const NOTES = {
  // ---------------- batch 4 ----------------
  4: {
    'thm-sigma-algebra-closure-laws':
      'Re-derived countable intersections through De Morgan, differences and symmetric differences from them, and both set limits from the tail formulas. Instantiated a constant sequence and an eventually-empty sequence. The empty-intersection convention (\\bigcap\\varnothing=X) is stated in step 1.1 rather than assumed.',
    'prop-set-limsup-and-liminf-membership':
      'Checked both membership characterisations against def-set-limsup-and-liminf in the direction the definition fixes: liminf is the union of tail intersections (eventual membership) and limsup the intersection of tail unions (frequent membership). The quantifier order is not swapped. Clause 3 follows from clauses 1 and 2 as written.',
    'lem-generated-lambda-system-closed-under-intersections':
      'The two-stage good-sets bootstrap is the defect-prone construction here. Stage 1 (A in the pi-system) and stage 2 (B in the generated lambda-system) are both run, and the symmetry step that licenses stage 2 is explicit rather than a reuse of stage 1. Verified each application of minimality has a genuine lambda-system containing the pi-system.',
    'thm-dynkin-pi-lambda':
      'Both inclusions verified. REPAIRED at 6b: [L1] and [L2] said "finite intersections" where both sources say "binary intersections"; the prose now reproduces the sources. Instantiated the empty pi-system, {X}, and X empty. Step 1.2 re-derives that a sigma-algebra is a lambda-system rather than citing it.',
    'lem-monotone-good-sets-for-algebra-elements':
      'Checked that C_B is shown to be a monotone class using only increasing-union and decreasing-intersection closure, and that the algebra hypothesis is used exactly where E \\cap B \\in \\mathcal A is needed. Minimality is applied to a class that genuinely contains the algebra.',
    'thm-monotone-class':
      'Both inclusions verified. The algebra hypothesis is load-bearing in step 1.1 (complements plus binary intersections give finite unions) and its [L2] restatement says "binary intersections", matching its sources. Instantiated the trivial algebra and X empty.',
    'lem-generated-lambda-system-closed-under-intersections-dup': null,
    'thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn':
      'Each of the seven families checked separately and in both directions. The compact-sets clause is the one that would be false in a general space; it is scoped to R^n and step 3.1 supplies sigma-compactness explicitly (F = union of F \\cap [-m,m]^n, each closed and bounded, hence compact by Heine-Borel). Verified the half-open identity \\prod(a_i,b_i] = \\bigcap_m \\prod(a_i,b_i+1/m) and the ball-basis construction (2/m < r, d(x,q) < 1/m).',
    'thm-transfinite-description-of-generated-sigma-algebras':
      'Recomputed the repaired recursion at the empty generator and at X empty; both now give the correct sigma-algebra. Checked that closure of the union under countable unions is where AC_omega and the boundedness of countable subsets of omega_1 are spent, and that thm-countable-subsets-of-omega-one-are-bounded states exactly that. Monotonicity of the stages comes from the constant sequence, not assumed.',
    'thm-cardinality-bound-for-generated-sigma-algebras':
      'Every cardinal-arithmetic input opened and compared clause by clause: monotonicity in the base and in the exponent (nonzero base) are clause (e) of lem-cardinal-arithmetic-basic-laws, the exponent law is clause (f), Hessenberg and absorption carry their infiniteness hypotheses. Verified the successor count mu^{aleph_0} = mu and the limit-stage count aleph_0 (x) mu = mu, and that omega_1 <= mu is derived rather than assumed.',
    'thm-cardinality-of-the-borel-sigma-algebra-on-rn':
      'Both inequalities present and checked: the upper bound via the countably infinite rational-box family and the generation bound, the lower bound via the explicit injection S -> {(k,0,...,0) : k in S} of closed singletons, which uses n >= 1. Verified aleph_0^{aleph_0} = c through the two injections and Schroder-Bernstein.',
    'thm-infinite-sigma-algebra-has-continuum-many-members':
      'The title and Statement claim an injection P(N) -> A and uncountability, not equality with the continuum, and that is what the proof gives; the id slug is looser than the title but the title is what renders. Checked the AC_omega use (choosing an injection m -> A for each m) and that the union of finite ranges is shown infinite before being called countably infinite.',
    'thm-sigma-algebra-generated-by-a-countable-partition':
      'Both inclusions checked, and the injectivity of S -> \\bigcup_{i in S} P_i genuinely uses nonemptiness of the blocks. Instantiated |I| = 0 (X empty, sigma-algebra {\\varnothing}, 2^0 = 1) and |I| = 1. The final equivalence is proved in both directions, the infinite half by Schroder-Bernstein against Cantor.',
    'ex-countable-cocountable-sigma-algebra':
      'All three axioms verified. The countable-union case splits correctly on whether some term is cocountable, and AC_omega is declared and used only through thm-countable-union-of-countable. Instantiated X countable and X empty.',
    'fs-every-subset-of-r-is-borel':
      'REPAIRED at 6b. The refutation used the continuum identity |R| = c with no cited home, and the only item stating it outright sits on a B/examples page, which depcheck rejects as a load-bearing target. Re-routed through the Cantor set: |C| = |{0,1}^N| = 2^{aleph_0} = |P(N)| = c from thm-cantor-set-ternary-description and thm-cardinal-power-set-and-cantor, then P(C) \\subseteq P(R) collides with Cantor. Proof, contract and manifest updated together; precheck restratified the steps.',
  },
  // ---------------- batch 5 ----------------
  5: {
    'lem-open-quotient-arcs-in-real-line-mod-integers':
      'The openness of p and the embedding of short intervals are what every later lifting argument rests on. Verified the saturation formula, and re-derived step 2.1 in full: with r = min(delta, 1-l)/2 the estimate |z-y| <= l + r < 1 does force z = y, so the inverse is continuous. Instantiated a = b in all four interval conventions (closed singleton, three empty).',
    'thm-real-line-covers-real-line-mod-integers':
      'Checked every clause of the covering definition separately, including that the sheets J_x + n are pairwise disjoint (an integer of absolute value below 2/3 is zero) and that each maps onto the same U_x. Surjectivity and continuity come from the quotient projection.',
    'prop-real-line-mod-integers-is-compact-and-path-connected':
      'Compactness is the continuous image of [0,1] and the surjectivity of p|[0,1] is proved from the integer part, not assumed. Path-connectedness uses the affine path pushed through p. Checked the equal-classes degenerate case.',
    'prop-real-line-mod-integers-is-hausdorff':
      'This is where Hausdorffness of the quotient could silently be inherited from R; it is not. Verified the separation constant r = min(d,e)/3 really gives 2r < min(d,e), which is what excludes every integer translate, and that openness of p (not of the source) is what makes U and V open.',
    'lem-lifts-of-circle-loop-concatenation-and-reversal':
      'Verified the two-piece lift agrees at t = 1/2, projects to the concatenation in the order fixed by the fundamental-group product, and that the translation by m is licensed because m is an integer. The reversal lift is checked at both endpoints. Instantiated a constant loop in both formulas.',
    'thm-degree-map-on-the-circle-is-a-homomorphism':
      'The homomorphism property reduces to the concatenation law, which reduces to the lift lemma; each link opened. Well-definedness on classes comes from cor-degree-descends-to-circle-loop-classes, which rests on homotopy-invariance of degree.',
    'lem-circle-loops-of-equal-degree-are-path-homotopic':
      'The straight-line homotopy between lifts is endpoint-fixed precisely because both lifts start at 0 and end at the common degree; both endpoint computations checked. [L2] now carries the n >= 1 hypothesis of lem-straight-line-homotopies-are-continuous, and R is convex in R^1.',
    'thm-circle-loops-are-path-homotopic-iff-they-have-equal-degree':
      'Both directions supplied by distinct dependencies and neither is an invented converse.',
    'cor-a-circle-loop-is-nullhomotopic-iff-its-degree-is-zero':
      'Checked that the constant loop has degree zero (via the constant lift and uniqueness) so that the biconditional is an instance of the preceding theorem rather than a new claim.',
    'thm-fundamental-group-of-the-circle':
      'Injectivity and surjectivity both proved, and the Statement claims an isomorphism of groups, not a bijection. The inverse n -> [omega_n] is justified by injectivity. Checked n = 0, n = 1 and negative n.',
    'cor-real-line-mod-integers-is-not-simply-connected':
      'Checked all three clauses of simple connectedness are addressed: nonemptiness, path-connectedness, and the failure of triviality at [0] witnessed by deg(omega_1) = 1.',
    'thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle':
      'The four obligations - well-definedness on classes, continuity, bijectivity, and compact-to-Hausdorff - are all discharged, and the compactness and Hausdorffness inputs are the two propositions proved earlier on the page rather than assumed. [L4] now carries the metric-domain, subspace and m >= 1 hypotheses of thm-componentwise-limits-and-continuity.',
    'cor-geometric-unit-circle-has-fundamental-group-z':
      'Verified h_* and (h^{-1})_* are mutually inverse via functoriality, and that [L3] now supplies the well-defined-group-homomorphism clause that step 1.1 consumes. The image of omega_n is computed explicitly.',
    'cex-unit-length-interval-need-not-embed-in-real-line-mod-integers':
      'ai-generated construction, probed directly. The Statement is scoped to restrictions of p, not to the existence of some embedding, and that scoping is what makes it true: p|(0,1) IS an embedding, while p|[0,1) fails openness at every integer and p|[0,1] fails injectivity. Verified the saturation \\bigcup_n [n, n+1/2) is not open at 0.',
    'ex-a-paused-circle-loop-is-homotopic-to-the-standard-loop':
      'ai-generated construction. Checked the pause does not change the lift endpoint and that the straight-line homotopy is endpoint-fixed.',
    'ex-a-surjective-circle-loop-of-degree-zero':
      'ai-generated construction, probed directly. Verified the out-and-back map is continuous at the join, that u is the lift from 0 with u(1) = 0, that alpha is surjective (t = r/2 hits [x] for the canonical representative r), and that alpha is nonconstant (alpha(1/4) = [1/2]). Degree zero and nullhomotopy are then the page-s own criterion, so the example is not circular.',
    'cex-based-circle-loops-with-the-same-endpoints-need-not-be-path-homotopic':
      'Verified both loops satisfy the based-loop endpoint conditions and that their degrees differ, which is what the refutation needs.',
    'ex-a-covering-quotient-of-a-simply-connected-space-need-not-be-simply-connected':
      'Checked that the same explicit map is shown to be both a quotient map and a covering map, so both announced non-preservations are witnessed by one example.',
    'fs-every-continuous-self-map-of-the-circle-is-nullhomotopic':
      'The refutation builds a section of p from the alleged nullhomotopy by homotopy lifting; verified thm-homotopy-lifting-for-covering-maps is stated for an arbitrary parameter space Y, so the restatement is not inflated. The closing contradiction (s(omega_1(t)) = m + t is a lift with distinct endpoints, yet s\\circ\\omega_1 is closed) is checked.',
  },
  // ---------------- batch 6 ----------------
  6: {
    'lem-goursat-nested-triangle-selection':
      'The quarter-retention selection is by least qualifying index, so no choice principle is used, and it is checked to work when the parent integral is zero. Verified the barycentric surjection from [0,1]^2 that supplies compactness, and that all four midpoint children (the medial triangle included) are similar to the parent with ratio 1/2, so perimeter and diameter genuinely halve. Cantor intersection is applied with its own hypotheses. Degenerate initial triangle checked.',
    'thm-goursat-triangle-theorem':
      'Recomputed the estimate: |I(T_n)| <= eps*diam(T_n)*P(T_n) and |I(T_0)| <= 4^n|I(T_n)| cancel exactly to eps*diam(T_0)*P(T_0). The affine part is killed by cor-closed-contour-integral-of-a-derivative-is-zero applied to an explicit polynomial primitive, which is cited, not assumed. No continuity of f\' is used anywhere.',
    'cor-goursat-rectangle-theorem':
      'Verified the diagonal splits the closed rectangle into two filled triangles inside U and that the diagonal edges cancel in the stated orientation, leaving exactly the declared boundary contour.',
    'thm-goursat-theorem-one-exceptional-point':
      'The case split (p outside T, T degenerate, p a vertex, p in T) is complete, and I checked the vertex case uses only continuity of f at p through the bound |f| <= |f(p)| + 1 - holomorphy at p is never used, so the argument is not circular. Verified the small-triangle perimeter scales as t and the three-triangle decomposition of T about p cancels to the boundary of T.',
    'prop-triangle-integrals-give-a-primitive-on-a-star-shaped-domain':
      'This is the step where star-shapedness is usually too weak. It is not here: the filled triangle Delta[a,z,z+h] is the union of the segments from a to points of [z,z+h], each of which lies in U by star-shapedness, so the containment is genuine and convexity is not needed. Verified the difference-quotient estimate through the ML bound with contour length |h|, and that z = a is covered.',
    'thm-holomorphic-primitive-on-star-shaped-domain':
      'Both hypotheses of the preceding proposition (continuity, vanishing triangle integrals) are supplied by cited results rather than assumed.',
    'cor-cauchy-theorem-star-shaped-domain':
      'Verified the primitive route: F holomorphic with F\' = f, and f continuous, so cor-closed-contour-integral-of-a-derivative-is-zero applies with all its hypotheses.',
    'cor-cauchy-theorem-convex-domain':
      'Convex implies star-shaped about each point is an immediate specialisation of the two definitions and is also recorded in rem-plane-star-shaped-and-convex-dictionary, which is in deps.',
    'thm-cauchy-theorem-one-exceptional-point-on-a-star-shaped-domain':
      'Checked the exceptional-point Goursat theorem, not the ordinary one, is what licenses the vanishing triangle integrals, and that the continuity hypothesis carries through to the closed-contour step.',
    'lem-cauchy-difference-quotient-exceptional-extension':
      'Verified the extension is claimed continuous but explicitly NOT holomorphic at the filled point, which is exactly the strength the Cauchy formula needs and no more.',
    'thm-cauchy-integral-formula-circle':
      'The kernel integral for z NOT the centre is the classic hole; it is closed here by the finite geometric identity, whose expansion I verified algebraically, together with the remainder bound (|z-a|/r)^{N+1}/(r-|z-a|) and uniform passage to the limit. Only the k = 0 term survives by thm-circle-integrals-of-integer-monomials. The z = a case is handled separately.',
    'lem-differentiating-cauchy-integrals':
      'Verified both power identities symbolically, including the second-difference remainder, and the bound |h| n(n+1)(2/rho)^{n+2}/2 obtained from |w| >= rho and |w-h| >= rho/2. The disjointness of V from the trace is what supplies rho, and V empty is a real case (vacuous), now recorded in the contract.',
    'thm-cauchy-integral-formula-higher-derivatives':
      'Base case n = 0 is the circle formula with 0! = 1; the successor step multiplies by (n+1) through F_m\' = m F_{m+1} and n!(n+1) = (n+1)!. The exponent is n+1 in the integrand and the disc D(a,r) is disjoint from the radius-r trace, as [L2] requires.',
    'cor-cauchy-inequalities':
      'Recomputed: n!(2\\pi)^{-1}(M/r^{n+1})(2\\pi r) = n! M / r^n. The exponent is r^n, not r^{n+1}, and M bounds |f| on the circle of radius r. n = 0 and M = 0 both checked.',
    'ex-goursat-triangle-integral-of-z-squared':
      'ai-generated construction, recomputed from the primitive z^3/3: 1/3, (-i-1)/3, i/3, sum zero. The retitled claim is exactly what the verification establishes.',
    'ex-cauchy-integral-formula-exponential-over-z-minus-one':
      'Recomputed 2\\pi i e^1 and checked the interior point 1 satisfies |z-a| < r for a = 0, r = 2, with the repaired [L2] carrying those hypotheses.',
    'cex-holomorphic-function-on-an-annulus-with-nonzero-closed-contour-integral':
      'Verified the annulus is open (explicit delta), path-connected (radial paths to the unit circle plus an arc), and that 0 is outside it so 1/z is holomorphic there. The Euler identity needed to pass from polar to exponential form is now a real dependency, which was reader 6\'s finding.',
    'cex-connected-domain-need-not-be-star-shaped':
      'The refutation quantifies over EVERY proposed centre a and exhibits -a with 0 on the segment; it does not fix one candidate centre, which is the usual failure of this argument.',
    'fs-every-continuous-function-on-a-convex-domain-has-a-primitive':
      'Verified conjugation is continuous, C is convex and a complex domain, and that on the unit circle z-bar = 1/z so the integral is 2\\pi i; a primitive would force zero by the closed-contour theorem.',
  },
};

let written = 0;
for (const batch of [4, 5, 6]) {
  const path = `research/frontier-15-batch-${batch}.proof-contracts.json`;
  const doc = JSON.parse(readFileSync(path, 'utf8'));
  for (const [id, note] of Object.entries(NOTES[batch])) {
    if (note === null) continue;
    const c = doc.contracts[id];
    if (!c) throw new Error(`batch ${batch}: no contract for ${id}`);
    c.risk_review = { status: 'complete', reviewer: REVIEWER, notes: note + CAVEAT };
    written++;
  }
  writeFileSync(path, JSON.stringify(doc, null, 2) + '\n');
}
console.log('risk_review dispositions written:', written);
