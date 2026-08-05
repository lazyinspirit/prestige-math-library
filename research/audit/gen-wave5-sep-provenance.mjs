// Generator for research/audit/wave5-topology-separation.provenance.jsonl
// (Audit-Beta, wave 5, topology-separation batch, step A1.)
//
// Every row is a determination made by reading the item from disk and then the
// source clause named in its rationale.  The URL table below holds only sources
// whose content this audit actually opened: the Wikipedia articles were pulled
// as plain text through the action API, the Munkres section notes were fetched
// and run through pdftotext, and the two blog posts were fetched.  Every URL was
// checked for HTTP 200 on 2026-08-05.
//
// Labels follow SCHEMA §3.  `statement` is the Definition/Statement or, for an
// example/counterexample/false statement, the construction; `proof` is the local
// Proof/Verification/Refutation.  A definition whose body only defines and
// illustrates carries `not-applicable`; a definition whose body establishes a
// mathematical claim (a discharged basis obligation, a proved equivalence)
// carries a real proof label, because it has a proof component.

import fs from 'fs';

const AT = '2026-08-05';

const U = {
  T0: 'https://en.wikipedia.org/wiki/Kolmogorov_space',
  T1: 'https://en.wikipedia.org/wiki/T1_space',
  SEP: 'https://en.wikipedia.org/wiki/Separation_axiom',
  SEPS: 'https://en.wikipedia.org/wiki/Separated_sets',
  GD: 'https://en.wikipedia.org/wiki/G%CE%B4_set',
  FSIG: 'https://en.wikipedia.org/wiki/F%CF%83_set',
  REG: 'https://en.wikipedia.org/wiki/Regular_space',
  URY: 'https://en.wikipedia.org/wiki/Urysohn_and_completely_Hausdorff_spaces',
  TYCH: 'https://en.wikipedia.org/wiki/Tychonoff_space',
  NORM: 'https://en.wikipedia.org/wiki/Normal_space',
  ZERO: 'https://en.wikipedia.org/wiki/Zero_set',
  COZ: 'https://en.wikipedia.org/wiki/Cozero_set',
  METZ: 'https://en.wikipedia.org/wiki/Metrizable_space',
  ORD: 'https://en.wikipedia.org/wiki/Order_topology',
  KTOP: 'https://en.wikipedia.org/wiki/K-topology',
  COF: 'https://en.wikipedia.org/wiki/Cofiniteness',
  SIER: 'https://en.wikipedia.org/wiki/Sierpi%C5%84ski_space',
  PP: 'https://en.wikipedia.org/wiki/Particular_point_topology',
  COC: 'https://en.wikipedia.org/wiki/Cocountable_topology',
  DISC: 'https://en.wikipedia.org/wiki/Discrete_space',
  IND: 'https://en.wikipedia.org/wiki/Trivial_topology',
  PLANK: 'https://en.wikipedia.org/wiki/Tychonoff_plank',
  W1: 'https://en.wikipedia.org/wiki/First_uncountable_ordinal',
  NET: 'https://en.wikipedia.org/wiki/Net_(mathematics)',
  DIR: 'https://en.wikipedia.org/wiki/Directed_set',
  SUBNET: 'https://en.wikipedia.org/wiki/Subnet_(mathematics)',
  FILT: 'https://en.wikipedia.org/wiki/Filter_(set_theory)',
  UF: 'https://en.wikipedia.org/wiki/Ultrafilter',
  BPI: 'https://en.wikipedia.org/wiki/Boolean_prime_ideal_theorem',
  CPT: 'https://en.wikipedia.org/wiki/Compact_space',
  TYCHTHM: "https://en.wikipedia.org/wiki/Tychonoff%27s_theorem",
  SEQ: 'https://en.wikipedia.org/wiki/Sequential_space',
  FU: 'https://en.wikipedia.org/wiki/Fr%C3%A9chet%E2%80%93Urysohn_space',
  UNC: 'https://en.wikipedia.org/wiki/Unconditional_convergence',
  ABS: 'https://en.wikipedia.org/wiki/Absolute_convergence',
  HAUS: 'https://en.wikipedia.org/wiki/Hausdorff_space',
  FC: 'https://en.wikipedia.org/wiki/First-countable_space',
  M13: 'https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-13.pdf',
  M17: 'https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-17.pdf',
  M31: 'https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-31.pdf',
  M32: 'https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-32.pdf',
  M33: 'https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-33.pdf',
  NLNET: 'https://ncatlab.org/nlab/show/net',
  NLUF: 'https://ncatlab.org/nlab/show/ultrafilter',
  NLSEQ: 'https://ncatlab.org/nlab/show/sequential+space',
  DMFAN: 'https://dantopology.wordpress.com/2015/07/01/a-note-on-products-of-sequential-fans/',
  DMARENS: 'https://dantopology.wordpress.com/2010/08/18/a-note-about-the-arens-space/',
  DMSEQ: 'https://dantopology.wordpress.com/2010/06/21/sequential-spaces-i/',
};

// [id, statement, proof, evidence, [urls], rationale]
const ROWS = [
  // ---------------- separation-axioms (A) ----------------
  ['def-t0-and-t1-spaces', 'literature-derived', 'ai-generated', 'exact-source', [U.T0, U.T1, U.SEP],
   'The two defined conditions are the standard ones with the same quantifiers and direction: the Kolmogorov article defines T0 by two distinct points being topologically distinguishable, i.e. some open set contains exactly one of them, and the T1 article defines T1 by each of two distinct points having a neighbourhood not containing the other. Munkres Sec. 31 states the same T1 condition under the name Tychonoff separation property. Convention delta: none. The proof component is the inline discharge of T1 implies T0 and the Sierpinski separation of the two conditions; both are one-line arguments written here, so the proof is recorded as locally written rather than sourced.'],
  ['thm-t1-iff-singletons-are-closed', 'literature-derived', 'ai-generated', 'exact-source', [U.T1, U.COF, U.M17],
   'The T1 article lists exactly these equivalents of T1 for a space X: every singleton is closed, every finite set is closed, and every cofinite set is open, the last being clause (d) read as the cofinite topology being contained in the topology of X. Munkres Theorem 17.8 supplies the finite-set clause. Convention delta: none; the library states the four conditions as a cycle rather than a list. The cyclic proof (a) to (b) to (c) to (d) to (a) and the final coarsest-T1 assertion are written here.'],
  ['def-separated-sets', 'literature-derived', 'ai-generated', 'exact-source', [U.SEPS, U.NORM],
   'The Separated sets article defines A and B to be separated in X when each is disjoint from the closure of the other, which is the displayed pair of conditions verbatim, and records that separated sets are disjoint while disjoint sets need not be separated. Convention delta: none. The proof component is the body: separated implies disjoint, the downward heredity, the two sufficient conditions (disjoint closed, disjoint open), and the subspace-absoluteness computation from the trace formula for closures; those derivations are written here.'],
  ['def-g-delta-and-f-sigma-in-a-topological-space', 'literature-derived', 'ai-generated', 'exact-source', [U.GD, U.FSIG],
   'The G-delta article defines a G-delta set of a topological space as a countable intersection of open sets and the F-sigma article dually as a countable union of closed sets; both are the displayed definitions. Convention delta: the library indexes by a sequence over N (which contains 0) and shows a finite family may be padded, which is a presentational choice inside the same notion. The proof component is the complementation duality, the {0} example on the real line and the identification with def-f-sigma-g-delta, all written here.'],
  ['def-regular-and-t3-spaces', 'literature-derived', 'ai-generated', 'exact-source', [U.REG, U.M31, U.SEP],
   'The Regular space article defines regularity by separating a point from a closed set not containing it by disjoint neighbourhoods and T3 as regular plus T1, which is the item verbatim. The convention fork is real and is sourced: Munkres Sec. 31 defines regular only after assuming one-point sets are closed ("Suppose that one-point sets are closed in space X. Then X is regular if ..."), which is the opposite side of the fork, and the item names Munkres for exactly that. Proof component: the empty-C case, the indiscrete-is-regular verification, and the cofinite counterpoint are written here.'],
  ['lem-regularity-via-closed-neighbourhoods', 'ai-altered', 'ai-generated', 'semantic-source', [U.M31, U.REG],
   'Munkres Lemma 31.1(a) is the same equivalence in the shrinking form: "X is regular if and only if given a point x and a neighborhood U of x, there is a neighborhood V of x such that closure(V) is contained in U". Convention deltas: Munkres carries closed singletons in his definition of regular and the library does not, and the library adds a third equivalent clause, that every point has a neighbourhood base of closed neighbourhoods, which is the standard Willard/Engelking form. The three-way packaging is therefore an adaptation, not a verbatim quotation. The cyclic proof is written here.'],
  ['def-urysohn-space', 'ai-altered', 'ai-generated', 'semantic-source', [U.URY],
   'The source defines an Urysohn space (T2 1/2) as one in which any two distinct points can be separated by closed neighbourhoods, and separately defines completely Hausdorff as separation by a continuous function, recording that Steen and Seebach reverse the two names. The item defines the same class by open sets with disjoint closures and proves that form equivalent to the closed-neighbourhood form, so the wording differs while the class is identical; that is the convention delta. The naming-collision paragraph is the source article\'s own naming-conventions section. The equivalence argument in the body is written here.'],
  ['lem-urysohn-sits-between-hausdorff-and-regular-plus-t1', 'ai-altered', 'ai-generated', 'semantic-source', [U.URY, U.SEP],
   'The source states the same three implications in its Relation to other separation axioms section: every Urysohn space is Hausdorff, every Hausdorff space is T1 (via the standard chain), and every regular Hausdorff space is Urysohn. Convention delta: the library hypothesis is regular plus T1 rather than regular Hausdorff, which is the same class because regular plus T1 implies Hausdorff, and the library carries T1 explicitly because its adjectives do not include it. The proof, in particular the double application of regularity, is written here.'],
  ['def-zero-sets-and-cozero-sets', 'literature-derived', 'ai-generated', 'exact-source', [U.ZERO, U.COZ],
   'The zero set of a real-valued function is defined in the source as the preimage of {0}, and the cozero set as its complement, which is the item verbatim for continuous f. Convention delta: none; the item additionally records that a continuous map into [0,1] is the same as a continuous real map with values in [0,1]. Proof component: that a zero set is closed, that it is a G-delta with the explicit presentation with index starting at 0, and the constant-function extremes are written here.'],
  ['def-completely-regular-and-tychonoff-spaces', 'literature-derived', 'ai-generated', 'exact-source', [U.TYCH, U.M33],
   'The Tychonoff space article defines complete regularity by the existence, for a closed set F and a point x outside it, of a continuous real-valued function that is 1 at x and 0 on F, and defines a Tychonoff space as a completely regular Hausdorff space; the item is that definition with T1 written in place of Hausdorff, which is the same class. Convention delta: the direction of the normalisation (1 at the point, 0 on the closed set) is fixed as in the source and the item says so explicitly. Proof component: the empty-C case and the zero-set restatement are written here.'],
  ['thm-completely-regular-implies-regular', 'literature-derived', 'ai-generated', 'exact-source', [U.TYCH, U.SEP],
   'That every completely regular space is regular, and hence every Tychonoff space is T3, is stated in the source hierarchy. Convention delta: none. The proof cutting the function at the value 1/2 is the standard argument but is written out here, including the explicit traces on [0,1] and the trichotomy step, so the proof component is recorded as locally written.'],
  ['def-normal-and-t4-spaces', 'literature-derived', 'ai-generated', 'exact-source', [U.NORM, U.M31],
   'The Normal space article defines a normal space by disjoint closed sets having disjoint neighbourhoods and a T4 space as a normal T1 space, which is the item verbatim, and it records that normal spaces need not be Hausdorff. Munkres Sec. 31 is the other side of the convention fork, defining normal only after assuming closed singletons, exactly as the item reports. Proof component: the empty cases, the observation that disjoint closed sets are separated, and the two non-T0 witnesses are written here.'],
  ['lem-normality-via-shrinking', 'literature-derived', 'ai-generated', 'exact-source', [U.M31, U.NORM],
   'Munkres Lemma 31.1(b) is the same equivalence: "X is normal if and only if given a closed set A and an open set U containing A, there is an open set V containing A such that closure(V) is contained in U". Convention delta: Munkres assumes closed singletons in his definition of normal; the library does not, and its proof uses none. The final corollary, that disjoint closed A and D admit an open V with closure(V) missing D, is the same lemma applied to the complement of D. The proof is written here.'],
  ['thm-t4-implies-t3', 'ai-altered', 'ai-generated', 'semantic-source', [U.SEP, U.NORM, U.URY],
   'The implication T4 implies T3 is part of the standard chain in the sourced hierarchy. Convention delta: the library states it as "normal and T1 implies regular, hence T3", and appends the consequences already proved on the page (Urysohn, Hausdorff, T1, T0), so the statement is a packaged conjunction of sourced implications rather than a single quoted one. The one-line proof, spending T1 to make the point closed, is written here.'],
  ['def-completely-normal-and-perfectly-normal-spaces', 'ai-altered', 'ai-generated', 'semantic-source', [U.NORM],
   'The source defines a completely normal space as a hereditarily normal one and then records the characterisation the library takes as its definition: "X is completely normal if and only if every two separated sets can be separated by neighbourhoods". For perfect normality the source\'s primary definition is precise separation by a function, and it records "X is perfectly normal if and only if X is normal and every closed set is a G-delta set", which is the library\'s definition, together with the zero-set form the item names as the competing definition. Convention delta: the library promotes the characterisations to definitions because the equivalences with the primary forms need Urysohn\'s lemma, and it says so. T5 and T6 name the conjunctions with T1, as in the source.'],
  ['thm-completely-normal-implies-normal', 'literature-derived', 'ai-generated', 'exact-source', [U.NORM],
   'Both implications are sourced: a completely normal space is normal (a space is a subspace of itself, and in the separated-sets form disjoint closed sets are separated), and a perfectly normal space is normal by definition. Convention delta: none. The proof, which observes that disjoint closed sets are a separated pair, is written here.'],
  ['thm-perfectly-normal-implies-completely-normal', 'ai-altered', 'ai-generated', 'semantic-source', [U.NORM, U.GD],
   'That every perfectly normal space is completely normal, i.e. T6 implies T5, is stated in the source. Convention delta, and it is the reason this is recorded as adapted rather than quoted: the library statement carries an explicit Axiom of Countable Choice hypothesis, which no textbook statement of the implication carries, and the proof is written so that the choice is spent at exactly one identified step (one open set per member of a countable family of closed sets). The interleaving construction with the subtraction of earlier closures is the classical argument, written out here with the index comparison made explicit.'],
  ['thm-metric-spaces-are-completely-normal', 'literature-derived', 'ai-altered', 'exact-source', [U.M32, U.NORM],
   'Munkres Theorem 32.2 is "Every metrizable space is normal", and the source records that every metric space is in fact completely normal (metrizable spaces are hereditarily normal). Convention delta: none. The proof is the classical one, unions of balls B(a, d(a,B)/2) and B(b, d(b,A)/2) with the halving making the triangle inequality close; it is adapted here, with the empty-set cases and the choice-freeness of the radii made explicit, so the proof component is recorded as adapted from the sourced argument.'],
  ['thm-metric-spaces-are-tychonoff-and-perfectly-normal', 'ai-altered', 'ai-generated', 'semantic-source', [U.METZ, U.NORM, U.GD],
   'Each clause is standard and sourced: in a metric space every closed set is the zero set of the distance function and hence a G-delta, and every metrizable space is Tychonoff and perfectly normal. Convention delta: the library packages the three clauses plus the consequence chain into one statement and fixes the explicit presentations (the intersection of the sets where d(x,C) < 1/(n+1), the separating function min{1, d(x,C)/d(x_0,C)}), which no single source states in this combination. The proof, including the Lipschitz estimate for the truncation and the separate treatment of the empty closed set, is written here.'],
  ['thm-the-separation-implication-chain', 'ai-altered', 'ai-generated', 'semantic-source', [U.SEP, U.NORM, U.TYCH, U.URY],
   'Every implication asserted is part of the standard separation hierarchy in the sourced articles, and the diagram there is the same chain. Convention delta: this is a page-local assembly statement, it carries the AC-omega hypothesis on the T6 to T5 arrow, and it deliberately omits the classical arrow T4 to T3 1/2 (Urysohn\'s lemma), so the packaging and its exclusions are library-specific rather than quoted. The proof is a citation cascade written here.'],
  ['def-order-topology-on-an-ordinal', 'ai-altered', 'ai-generated', 'semantic-source', [U.ORD, U.W1],
   'The order topology of a linearly ordered set is defined in the source by open intervals together with initial and final rays, and the source treats ordinals with that topology. Convention delta: the item uses the half-open basis of the sets (alpha, beta] together with the initial segments [0, beta], which is the standard presentation for an ordinal and generates the same topology, and it says explicitly that it is the ordinal case only. The discharge of (B1) and (B2), the identification of the isolated points, and the remark that every ordinal at most omega is discrete are written here.'],
  ['lem-ordinal-order-topology-is-t3', 'ai-altered', 'ai-generated', 'semantic-source', [U.ORD, U.M17, U.M32],
   'The source records that an order topology is Hausdorff and completely normal, hence in particular regular; Munkres Theorem 17.11 gives the Hausdorff clause for every simply ordered set and Theorem 32.4 gives normality of a well-ordered set in its order topology. The item claims strictly less than the sourced facts, namely T1, Hausdorff and regular, and derives them from the clopen basis. Convention delta: the clopen-basis route and the restriction to ordinals are the library\'s own presentation. The proof is written here.'],
  ['lem-the-k-topology-is-hausdorff-and-not-regular', 'literature-derived', 'ai-altered', 'exact-source', [U.KTOP, U.M13, U.M31],
   'Munkres Sec. 13 defines the K-topology by the basis {(a,b)} together with {(a,b) minus K} for K = {1/n}, and Munkres Sec. 31 Example 1 proves exactly the four claims here: R_K is Hausdorff, K is closed, and the point 0 and the closed set K cannot be separated. The K-topology article states the same ("it provides an example of a Hausdorff space that is not regular"). Convention delta: the library writes K = {1/(n+1) : n in N} because its N contains 0, which is the same set. The proof follows Munkres\' Example 1 step for step, including the choice of a point z between max{c, 1/(n+2)} and 1/(n+1) in the gap, so the proof component is recorded as adapted from that source.'],
  ['rem-separation-axiom-conventions', 'ai-altered', 'not-applicable', 'semantic-source', [U.URY, U.SEP, U.NORM, U.M33],
   'Every mathematical assertion in this remark is a sourced convention or a sourced fact: the regular/normal T1 fork (Munkres against Kelley, Willard, Engelking), the three meanings of Urysohn\'s name (the source article\'s own naming-conventions section), the identity of the missing arrow (Munkres Sec. 33 records that by the Urysohn lemma a normal space is completely regular), and the choice cost of the one implication that spends AC-omega. The independence claims about Urysohn\'s lemma in ZF and in ZF plus countable choice are not asserted here on the library\'s own authority: the remark points at rem-urysohn-lemma-not-a-zf-theorem, which carries the Lauchli and Tachtsis sources, and it is declared as an external_refs mention rather than a dependency. The assembly is library-specific, so the statement component is recorded as adapted; a remark has no proof component.'],
  ['fs-every-t1-space-is-hausdorff', 'literature-derived', 'ai-generated', 'exact-source', [U.T1, U.COF],
   'The witness is the sourced one, stated in the T1 article in the same words as the item: "The cofinite topology on an infinite set is a simple example of a topology that is T1 but is not Hausdorff", with the reason that no two nonempty open sets of the cofinite topology are disjoint. Convention delta: the item fixes the infinite set to be R because the library already has uncountability of R as a theorem. The refutation is written here.'],
  ['fs-every-normal-space-is-hausdorff', 'ai-altered', 'ai-generated', 'semantic-source', [U.NORM, U.IND],
   'The Normal space article records that normal spaces need not be Hausdorff, which is what the false claim denies, and the indiscrete topology is the standard witness: its only closed sets are the empty set and the whole space, so normality is vacuous, while no open set separates two points. Convention delta: the item also draws the consequence that the T1 conjunct of T4 is not redundant, which is the library\'s own framing of the same witness. The refutation is written here.'],
  ['fs-every-hausdorff-space-is-regular', 'literature-derived', 'ai-generated', 'exact-source', [U.KTOP, U.M31],
   'The witness and the claim it refutes are sourced verbatim: Munkres Sec. 31 Example 1 concludes that R_K "is an example of a nonregular Hausdorff space showing that the set of regular spaces is a proper subset of the set of Hausdorff spaces", and the K-topology article says the same. Convention delta: none beyond the index shift in K carried over from the lemma this item cites. The refutation is a three-line citation of that lemma, written here.'],
  ['fs-unique-sequential-limits-imply-hausdorff', 'ai-altered', 'ai-generated', 'semantic-source', [U.COC, U.SEQ],
   'That the cocountable topology on an uncountable set has only eventually constant convergent sequences, hence unique sequential limits, while it is not Hausdorff, is the standard sourced behaviour of that topology. Convention delta: the library states the false claim as an implication about unique sequential limits and fixes the carrier to be R; the source presents the same facts as properties of the space rather than as a refuted implication. The refutation, including the choice-free two-set countable-union step, is written here.'],

  // ---------------- separation-axioms-examples (B) ----------------
  ['ex-sierpinski-space-is-t0-normal-and-not-regular', 'ai-altered', 'ai-generated', 'semantic-source', [U.SIER, U.PP],
   'The Sierpinski space article gives the same space and the same separation facts: it is T0 and not T1, and it is not regular, while it is normal because its only pair of disjoint closed sets has an empty member. Convention delta: the library fixes b as the open point and a as the closed point, and packages the four clauses into one example; the source presents them as a property list. The verification is written here.'],
  ['ex-the-particular-point-topology-in-the-separation-hierarchy', 'ai-altered', 'ai-generated', 'semantic-source', [U.PP, U.SIER],
   'The particular-point topology and its separation behaviour are sourced: every nonempty open set contains the particular point, the space is T0 but not T1 once there are two points, and no two nonempty open sets are disjoint, which kills regularity and normality. Convention delta: the item is explicit about the cardinality thresholds, that the failure of regularity needs two points and the failure of normality three, and it records that on a two-point set this topology is Sierpinski space, which is normal; the source does not draw that threshold distinction. The verification is written here.'],
  ['ex-the-cofinite-topology-in-the-separation-hierarchy', 'ai-altered', 'ai-generated', 'semantic-source', [U.COF, U.T1],
   'The sourced facts are that the cofinite topology on an infinite set is T1 and not Hausdorff, and that no two nonempty open sets are disjoint. Convention delta: the item pushes the same one-line cause through regularity and normality as well, and it states the example for an arbitrary infinite set rather than for R. The verification, including the derivation that an infinite set has three distinct points, is written here.'],
  ['ex-the-cocountable-topology-in-the-separation-hierarchy', 'ai-altered', 'ai-generated', 'semantic-source', [U.COC],
   'The cocountable topology on an uncountable set is sourced with these properties: T1, no two nonempty open sets disjoint, and convergent sequences eventually constant. Convention delta: the item collects them into one example with the failure of regularity and normality drawn from the same cause, and it fixes the carrier to R. The verification is written here.'],
  ['ex-the-discrete-and-indiscrete-extremes-of-the-hierarchy', 'ai-altered', 'ai-generated', 'semantic-source', [U.DISC, U.IND, U.NORM],
   'Both extremes are sourced: a discrete space satisfies every separation axiom (it is metrizable by the discrete metric), and the indiscrete topology on at least two points satisfies the set-separation adjectives vacuously while failing T0. Convention delta: the item verifies the adjectives directly rather than quoting the metric route, so that the discrete case does not depend on the metric theorems of the main page, and it draws the conclusion that all five unnumbered adjectives are compatible with total failure of point separation. The verification is written here.'],
  ['ex-closed-subsets-of-the-line-as-zero-sets-and-g-delta-sets', 'ai-altered', 'ai-generated', 'semantic-source', [U.GD, U.METZ],
   'The general fact is sourced: in a metrizable space every closed set is the zero set of the distance function and hence a G-delta. Convention delta: this item is the specialisation to the real line with two worked instances, A = [0,1] and A = {0}, whose distance functions and level sets are computed explicitly; the computations are elementary and were checked line by line during this audit, but they are the library\'s own presentation rather than a quoted example. The verification is written here.'],
  ['ex-the-ordinal-spaces-omega-plus-one-and-omega-one', 'ai-altered', 'ai-generated', 'semantic-source', [U.ORD, U.W1],
   'Both spaces are standard and sourced: omega+1 is a convergent sequence together with its limit, with every natural isolated, and every at most countable subset of omega_1 is bounded below omega_1, so no sequence has cofinal range. Convention delta: the library states clauses 3 and 4 under an explicit Axiom of Countable Choice hypothesis, inherited from its own boundedness theorem, where the sourced statements carry no choice annotation. The verification is written here.'],
  ['cex-the-deleted-tychonoff-plank-is-not-normal', 'ai-altered', 'ai-altered', 'semantic-source', [U.PLANK, U.W1],
   'The witness is verbatim the sourced one: the Tychonoff plank is the product of the ordinal spaces [0, omega_1] and [0, omega], the deleted plank removes the corner point, and the source states outright that "the deleted Tychonoff plank is non-normal", with the same two closed sets, the top edge minus the corner and the right edge minus the corner. Convention delta: the library frames it as a refuted claim about spaces built from ordinal products and subspaces, and it carries an explicit AC-omega hypothesis, inherited from its boundedness theorem, that the sourced treatment does not state. The proof is the classical argument, with the ordinals alpha_n taken as least elements rather than chosen, so the proof component is recorded as adapted.'],

  // ---------------- nets-and-filters (A) ----------------
  ['def-directed-set-and-net', 'literature-derived', 'not-applicable', 'exact-source', [U.DIR, U.NET, U.NLNET],
   'The Directed set article defines a directed set as a nonempty set with a reflexive transitive relation in which every pair has an upper bound, and the Net article defines a net in X as a function from a directed set into X; the item is both verbatim. Convention delta: none, and the item makes the preorder convention explicit (antisymmetry is not required), which is the sourced convention. There is no proof component: the body defines and comments.'],
  ['def-net-eventually-and-frequently', 'literature-derived', 'ai-generated', 'exact-source', [U.NET],
   'The source defines a net to be eventually (residually) in S when there is an index past which all values lie in S, and frequently (cofinally) in S when for every index there is a later value in S; the item is both verbatim. Convention delta: none. The proof component is the one-line duality, that being frequently in S is the negation of being eventually in the complement, which is written here.'],
  ['def-net-convergence-and-cluster-point', 'literature-derived', 'ai-generated', 'exact-source', [U.NET, U.NLNET],
   'Net convergence to p as eventual membership in every neighbourhood of p, and p being a cluster point as frequent membership in every neighbourhood, are the sourced definitions. Convention delta: neighbourhoods need not be open in this library, which does not change either class. The proof component is the inline derivation that a limit is a cluster point, using directedness, written here.'],
  ['def-subnet', 'ai-altered', 'not-applicable', 'semantic-source', [U.SUBNET, U.NET],
   'The Subnet article records three inequivalent definitions and attributes to Kelley (1955) exactly the one used here: a map phi from the new index set with y = x composed with phi such that for every d there is e_0 with phi(e) >= d whenever e >= e_0. Convention delta, and it is the material one: the article develops Willard\'s stricter variant, which additionally requires phi to be order-preserving with cofinal image, and the item states that the stricter convention exists and is not used here. No proof component.'],
  ['lem-subnets-preserve-eventual-properties-and-limits', 'ai-altered', 'ai-generated', 'semantic-source', [U.NET, U.SUBNET],
   'The sourced fact is that a subnet of a convergent net converges to the same limit. Convention delta: the item states the stronger and more primitive form, that every set in which the net is eventually contained is one in which the subnet is eventually contained, and derives the limit statement from it; the sources state the limit form. The proof is written here.'],
  ['thm-net-cluster-point-iff-convergent-subnet', 'literature-derived', 'ai-generated', 'exact-source', [U.NET],
   'The source states this equivalence verbatim: a point is a cluster point of a net if and only if the net has a subnet converging to it. Convention delta: the equivalence is being asserted for the Kelley subnet of this library, which is the convention under which it is classically stated. The proof, in particular the index set of pairs (d, N) with x_d in N ordered by later index and smaller neighbourhood, is written here.'],
  ['thm-closure-characterised-by-nets', 'literature-derived', 'ai-generated', 'exact-source', [U.NET, U.NLNET],
   'The source states that the closure of S is the set of points that are limits of nets in S, which is the item verbatim in both directions. Convention delta: none. The proof constructs the neighbourhood-indexed net explicitly, with the witness carried in the index so that no choice principle is used; that construction is written here.'],
  ['thm-continuity-characterised-by-nets', 'literature-derived', 'ai-generated', 'exact-source', [U.NET],
   'The source states that a function is continuous at a point exactly when it maps every net converging to that point to a net converging to the image, which is the item verbatim, including the pointwise (not global) form. Convention delta: none. The proof, which contradicts discontinuity by a net in the complement of the preimage, is written here.'],
  ['thm-hausdorff-iff-net-limits-are-unique', 'ai-altered', 'ai-generated', 'semantic-source', [U.NET, U.HAUS],
   'The source states one direction outright, that in a Hausdorff space the limit of a convergent net is unique, and the converse is the standard companion in Kelley and Willard. Convention delta: the item states the full equivalence, so relative to the located source text the reverse implication is supplied rather than quoted. Its proof builds the net indexed by triples (U, V, z) with z in the intersection, which is the classical construction, written here.'],
  ['def-tail-filter-of-a-net', 'ai-altered', 'ai-generated', 'semantic-source', [U.FILT, U.NET],
   'The construction is sourced exactly: the filter base of tails of a net consists of the sets of values from an index onwards, and the filter it generates is called the eventuality filter, its members being exactly the sets in which the net is eventually contained. Convention delta: the library calls it the tail filter, which is the other current name for the same object. The verification that the tails form a filter base is written here.'],
  ['def-filter-convergence-and-cluster-point', 'literature-derived', 'not-applicable', 'exact-source', [U.FILT, U.NLUF],
   'A filter converging to p when every neighbourhood of p belongs to it, and p being a cluster point of the filter when every neighbourhood meets every member, are the sourced definitions verbatim. Convention delta: none. No proof component; the closing sentence restates the cluster condition as the neighbourhood filter and the filter having no disjoint members.'],
  ['lem-tail-filter-preserves-net-convergence-and-cluster-points', 'ai-altered', 'ai-generated', 'semantic-source', [U.FILT, U.NET],
   'The sourced content is the net-to-filter half of the standard dictionary: a net converges to p exactly when its eventuality filter does, and their cluster points agree. Convention delta: the sources present the dictionary as a correspondence between the two convergence theories rather than as this two-clause lemma. The proof is written here.'],
  ['def-net-derived-from-a-filter', 'ai-altered', 'ai-generated', 'semantic-source', [U.NET, U.FILT],
   'The construction is the standard one in the filter-to-net direction of the dictionary: index by pairs consisting of a filter member and a point of it, ordered by reverse inclusion of the member, and send each index to its point. Convention delta: the sources describe the construction in passing while the library fixes it as a named definition. The verification that the index set is a directed preorder, and the observation that carrying the point in the index avoids any choice, are written here.'],
  ['lem-filter-derived-net-preserves-convergence-and-cluster-points', 'ai-altered', 'ai-generated', 'semantic-source', [U.NET, U.FILT],
   'The sourced content is the filter-to-net half of the standard dictionary: a filter and the net derived from it have the same limits and the same cluster points. Convention delta: as for the tail-filter lemma, the packaging into a two-clause lemma is the library\'s. The proof, including the step that recovers a filter member inside a neighbourhood from eventual membership, is written here.'],
  ['thm-net-filter-convergence-dictionary', 'ai-altered', 'ai-generated', 'semantic-source', [U.NET, U.FILT],
   'The net-filter dictionary is a named standard result: the two passages preserve and reflect convergence and cluster points. Convention delta: this item is the assembly of the two preceding lemmas into the dictionary statement the later compactness theorem cites, so it quotes no single source sentence. The proof is the two-line assembly, written here.'],
  ['def-universal-net', 'literature-derived', 'ai-generated', 'exact-source', [U.NET],
   'The source defines a universal net, also called an ultranet, by the condition that for every subset S the net is eventually in S or eventually in the complement of S; the item is verbatim. Convention delta: none. The proof component is the inline observation that the two alternatives are exclusive, which uses directedness and is written here.'],
  ['thm-universal-nets-and-ultrafilters-correspond', 'ai-altered', 'ai-generated', 'semantic-source', [U.NET, U.FILT, U.UF],
   'The correspondence is standard and follows from two sourced facts placed side by side: a net is eventually in S exactly when S lies in its eventuality filter, and a filter is an ultrafilter exactly when it contains S or the complement of S for every S. Convention delta: the item states the correspondence in both directions, including that the net derived from an ultrafilter is universal, which the sources leave as the standard consequence. The proof is written here.'],
  ['lem-ultrafilter-cluster-points-are-limits', 'ai-altered', 'ai-generated', 'semantic-source', [U.UF, U.FILT, U.NLUF],
   'That an ultrafilter converges to each of its cluster points is the standard consequence of the sourced ultrafilter dichotomy: a neighbourhood outside the ultrafilter would have its complement inside, contradicting clusterhood. Convention delta: the sources state the dichotomy and the convergence theory separately; the item states the consequence as a lemma. The proof is written here.'],
  ['thm-compactness-via-nets-filters-and-ultrafilters', 'ai-altered', 'ai-generated', 'semantic-source', [U.NET, U.CPT, U.FILT, U.BPI],
   'The equivalences are the sourced ones: a space is compact exactly when every net has a convergent subnet, exactly when every net has a cluster point, exactly when every filter has a cluster point, and exactly when every ultrafilter converges. Convention delta, and it is the reason this is adapted rather than quoted: the library states the theorem under an explicit ultrafilter-lemma hypothesis, which is what the last equivalence costs in ZF, and no source in hand states it with that hypothesis attached. The proof is written here.'],
  ['lem-universal-net-cluster-points-are-limits', 'ai-altered', 'ai-generated', 'semantic-source', [U.NET],
   'The net-side twin of the ultrafilter lemma above, and standard: a universal net converges to each of its cluster points, because failing to be eventually in a neighbourhood would make it eventually in the complement. Convention delta: the sources record the ultranet dichotomy and its consequences for compactness rather than this isolated lemma. The proof is written here.'],
  ['lem-continuous-images-of-universal-nets-are-universal', 'literature-derived', 'ai-generated', 'exact-source', [U.NET],
   'The source states that the image of an ultranet under any function is again an ultranet, which is the item\'s first clause with the same generality (no continuity needed). Convention delta: the item adds the second clause, that a continuous map preserves the limit, which is the sourced continuity characterisation already cited. The one-line preimage proof is written here.'],
  ['lem-every-net-has-a-universal-subnet', 'ai-altered', 'ai-generated', 'semantic-source', [U.NET, U.BPI],
   'That every net has a universal subnet, and that this needs the ultrafilter lemma rather than being a theorem of ZF, is the sourced fact. Convention delta: the library states the ultrafilter-lemma hypothesis in the statement itself, and its subnet is the Kelley one, so the constructed index set of pairs (d, A) with A in the ultrafilter and x_d in A is spelled out rather than quoted. The proof is written here.'],
  ['cor-compactness-via-universal-nets', 'literature-derived', 'ai-generated', 'exact-source', [U.NET, U.BPI],
   'The source states that a space is compact if and only if every universal net in it converges. Convention delta: the library carries the ultrafilter-lemma hypothesis explicitly, since the reverse direction goes through the existence of universal subnets. The two-line proof is written here.'],
  ['thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma', 'ai-altered', 'ai-generated', 'semantic-source', [U.TYCHTHM, U.BPI, U.NET],
   'The result is sourced: Tychonoff\'s theorem restricted to Hausdorff factors is provable from the ultrafilter lemma, and is in fact equivalent to it (Los and Ryll-Nardzewski), whereas the unrestricted theorem needs the full Axiom of Choice. Convention delta: the library states it as compactness of a product of compact Hausdorff spaces under the ultrafilter lemma and proves it by universal nets, defining the limit point coordinatewise so that Hausdorff uniqueness supplies a function rather than a choice. The proof is written here.'],
  ['rem-tychonoff-choice-strengths', 'ai-altered', 'not-applicable', 'semantic-source', [U.TYCHTHM, U.BPI],
   'The remark records only what the sources record: the product theorem proved on this page spends the ultrafilter lemma, while the library\'s published Tychonoff theorem assumes the full Axiom of Choice, and it explicitly declines to claim anything about the relative strength of the two hypotheses. Convention delta: it is a library-local pointer between two of its own items, so no source sentence is quoted. A remark has no proof component.'],
  ['def-frechet-urysohn-and-sequential-spaces', 'literature-derived', 'not-applicable', 'exact-source', [U.FU, U.SEQ],
   'Both definitions are sourced verbatim: a space is Frechet-Urysohn when every point of the closure of A is the limit of a sequence in A, equivalently when the sequential closure equals the closure for every A, and a space is sequential when every sequentially closed set is closed. Convention delta: none. No proof component; the equivalence quoted in the body is the sourced restatement, and the containment of the sequential closure in the closure is cited to an existing library lemma.'],
  ['thm-first-countable-frechet-urysohn-sequential-hierarchy', 'ai-altered', 'ai-generated', 'semantic-source', [U.FU, U.SEQ, U.FC],
   'The hierarchy is sourced: every first countable space is Frechet-Urysohn and every Frechet-Urysohn space is sequential. Convention delta, and it is the reason this is adapted: the library splits the two implications by their choice cost, stating the first under countable choice (inherited from its own first-countability theorem) and the second in ZF, which the sources do not annotate. The proof is written here.'],
  ['fs-every-subnet-of-a-sequence-is-a-subsequence', 'ai-altered', 'ai-generated', 'semantic-source', [U.SUBNET, U.NET],
   'That a subnet of a sequence need not be a subsequence is the sourced point of having three inequivalent subnet definitions, and it is the standard warning attached to the Kelley subnet. Convention delta: the library states it as a refuted universal claim and supplies its own minimal witness, the index map that repeats the value 0 once and then shifts, which no source states in that form. The refutation is written here and was checked against the library\'s own definition of subsequence, which requires a strictly increasing index map.'],

  // ---------------- nets-and-filters-examples (B) ----------------
  ['ex-neighbourhood-indexed-net-converging-to-a-closure-point', 'ai-altered', 'ai-generated', 'semantic-source', [U.NET, U.NLNET],
   'The construction is the sourced canonical one behind the closure characterisation: index by pairs of a neighbourhood of p and a point of its intersection with A, direct by reverse inclusion, and send each index to its point. Convention delta: the sources use it inside a proof, and the library records it as a standalone example. The verification is written here; the point is carried in the index, so no choice principle is used.'],
  ['ex-finite-subset-net-for-unordered-real-summation', 'literature-derived', 'ai-generated', 'exact-source', [U.UNC, U.NET],
   'The finite-subset net is the sourced definition of unordered summation: the finite subsets of the index set directed by inclusion, the partial sums over them, and summability defined as convergence of that net. Convention delta: none. The verification that the finite subsets form a directed set and that the net values grow by the terms not yet counted is written here.'],
  ['thm-unordered-summability-of-real-families', 'ai-altered', 'ai-generated', 'semantic-source', [U.UNC, U.ABS],
   'The mathematical content is the sourced equivalence for real families: unordered summability is equivalent to absolute convergence, the support of a summable family is at most countable, and the sum is independent of the enumeration. Convention delta: the library states it with an explicit countable-choice hypothesis, needed only for the countability of the support through its own countable-union theorem, and phrases the right-hand side through an arbitrary bijective enumeration of the support; no source in hand carries the choice annotation. The proof, including the level-set argument bounding the support, is written here.'],
  ['ex-free-ultrafilter-converging-in-a-convergent-sequence-space', 'ai-altered', 'ai-generated', 'established-knowledge', [],
   'The construction is textbook folklore rather than a quotable statement: in the one-point compactification of the discrete natural numbers, which is the convergent-sequence space used here, any free ultrafilter on N pushed forward along the inclusion converges to the point at infinity. I searched for an exact source for this specific example and located the ingredients (free ultrafilters on N under the ultrafilter lemma, filter convergence, the space N with a point at infinity) but no single source stating the example, so it is recorded as a recoverable restatement of established material rather than as a novel claim. ESCALATED TO ALPHA for the concurrence that this evidence class requires; until that concurrence the row is not to be used as an exact- or semantic-source determination.'],
  ['ex-coordinate-reading-sequence-has-subnets-but-no-convergent-subsequence', 'ai-altered', 'ai-generated', 'semantic-source', [U.CPT, U.TYCHTHM, U.SEQ],
   'The witness is the classical one for compact but not sequentially compact: the cube of two-point discrete factors indexed by the set of all binary sequences, with the coordinate-reading sequence, whose diagonal-style argument defeats every subsequence. Convention delta: the library already carries this cube in a published false statement proved under the full Axiom of Choice, and this item reruns it under the weaker ultrafilter lemma, obtaining compactness from the compact-Hausdorff product theorem of this page and the convergent subnet from the net characterisation. The verification is written here.'],
  ['ex-cocountable-closure-detected-by-a-net-not-a-sequence', 'ai-altered', 'ai-generated', 'semantic-source', [U.COC, U.NET],
   'The example is the standard demonstration that sequences do not detect closure in the cocountable topology, whose sourced properties are that at most countable sets are closed and that convergent sequences are eventually constant. Convention delta: the library fixes A = [0,1] and p = 2 and reads the conclusion through its own net characterisation of closure. The verification is written here.'],
  ['ex-sequential-fan-is-frechet-urysohn-not-first-countable', 'ai-altered', 'ai-generated', 'semantic-source', [U.DMFAN, U.FU],
   'The space is the sourced sequential fan: the source defines S(omega) on omega squared together with one extra point, every point of omega squared isolated, and basic neighbourhoods of the extra point given by U_f = {(n,i) : i >= f(n)} for f from omega to omega, which is exactly the item\'s "all but finitely many points of every spoke". The source also records that a sequential fan is Frechet-Urysohn while not first countable. Convention delta: the library writes the neighbourhood condition spoke by spoke instead of through a threshold function, and defines the threshold function inside the proof. The verification, including the diagonal defeat of any countable base, is written here.'],
  ['ex-arens-space-is-sequential-not-frechet-urysohn', 'ai-altered', 'ai-generated', 'semantic-source', [U.SEQ, U.DMARENS, U.DMSEQ],
   'The space and the claim are sourced: the Sequential space article states outright that "Arens\' space is sequential, but not Frechet-Urysohn", and the blog source gives the same construction, countably many convergent sequences with their limits, plus a point whose neighbourhoods omit finitely many of those sequences and finitely many points of each remaining one. Convention delta: the library writes the space as the explicit three-part point set with rows and centres. The verification is written here.'],
];

const ids = new Set(
  JSON.parse(fs.readFileSync('research/audit/wave5-topology-separation.pages.json', 'utf8'))
    .flatMap((page) => page.items.map((item) => item.id)),
);

const seen = new Set();
const problems = [];
const lines = [];
for (const [id, statement, proof, evidence, urls, rationale] of ROWS) {
  if (!ids.has(id)) problems.push(`${id}: not in the batch manifest`);
  if (seen.has(id)) problems.push(`${id}: duplicate row`);
  seen.add(id);
  if ((evidence === 'exact-source' || evidence === 'semantic-source') && !urls.length) {
    problems.push(`${id}: ${evidence} needs at least one URL`);
  }
  if (evidence === 'established-knowledge' && urls.length) {
    problems.push(`${id}: established-knowledge carries no URL`);
  }
  // A3 receipt §3: the established-knowledge waiver is the one evidence class
  // that needs Alpha's independent concurrence, so its rows carry an explicit
  // escalation flag and A6's routing reads it mechanically rather than
  // depending on someone rereading the findings prose.
  lines.push(JSON.stringify({
    id, statement, proof, evidence, urls, rationale, alpha_concurred: false,
    ...(evidence === 'established-knowledge' ? { escalated_to_alpha: true } : {}),
    at: AT,
  }));
}
for (const id of ids) if (!seen.has(id)) problems.push(`${id}: no provenance row`);

fs.writeFileSync('research/audit/wave5-topology-separation.provenance.jsonl', lines.join('\n') + '\n');
console.log(`rows=${lines.length} scope=${ids.size}`);
const byClass = {};
for (const [, s, p, e] of ROWS) byClass[`${s}/${p}/${e}`] = (byClass[`${s}/${p}/${e}`] || 0) + 1;
for (const key of Object.keys(byClass).sort()) console.log(`  ${key}  ${byClass[key]}`);
console.log(problems.length ? 'PROBLEMS:\n' + problems.join('\n') : 'no problems');
