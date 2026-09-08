# Set Theory blocker resolution — 2026-09-08

Scope: active batch 14, SET-2 and SET-9, plus their explicit later proof
destinations. Published content is read-only; the engine remains paused.
The three new SET-9 items give 41 A / 7 B items there and 89 batch items.
They fit the existing pair. No recorded result is a supplier.

## General-cardinal Erdős–Rado: local proof

The full proof of Monk 9.9, printed pp.62–63, was read in the
[author-hosted text](https://euclid.colorado.edu/~monkd/jech.pdf).
It states the countable-color case. The following proves the required
generalization, rather than misquoting its statement.

Work in ZFC. Let mu be infinite, 1 <= r <= mu, d >= 1 finite,
theta = 2^mu and lambda = theta^+. Given F:[lambda]^(d+1) -> r,
write F_z(u)=F(u union {z}) for u in [lambda minus {z}]^d.

Construct increasing sets A_xi of size theta for xi < mu^+, starting with
theta itself and taking unions at limit stages. At a successor, for every
C subset A_xi of size at most mu, add the least representative of every
restriction F_z to [C]^d realized by a z outside C. There are at most
theta^mu = (2^mu)^mu = 2^(mu*mu) = theta such C (enumerate nonempty C
by mu, allowing repetitions; handle the empty set separately). Since
|[C]^d| <= mu, the number of patterns is at most r^mu <= theta. Thus a
successor still has size theta. All limit unions and A = union_xi A_xi
have size theta, since mu^+ <= theta. These bounds use the published
cardinal exponent laws, Hessenberg and absorption, not a partition theorem.

Every subset C of A of size <= mu is contained in some A_xi: choose the
least entry stage for each member, and use regularity of mu^+ to bound those
at most mu stages. Hence every realized pattern over C has a representative
in A minus C. Choose a in lambda minus A. Recursively select the least
x_alpha in A minus {x_beta: beta < alpha} with F_x_alpha = F_a on all
d-subsets of the previous nodes, for alpha < mu^+. The previous set has
size <= mu, so closure supplies the next point. This proves
`lem-erdos-rado-pattern-closure-and-end-homogeneity`.

Define relative finite beth iteration by beth_0(kappa)=kappa and
beth_(n+1)(kappa)=2^beth_n(kappa). Prove the target by induction on n.
For n=0, a kappa-coloring of kappa^+ has a fiber of size kappa^+:
otherwise kappa many fibers of size <= kappa would have union of size
<= kappa. For n>=1, put mu=beth_(n-1)(kappa), use the lemma with r=kappa
and d=n, and color n-subsets v of the index set mu^+ by
G(v)=F({x_beta: beta in v} union {a}). The induction hypothesis produces
a kappa^+-sized homogeneous set of indices. For any n+1 indices in this
set, take their largest **index** alpha. The lemma replaces x_alpha by a
without changing F. The resulting color is the constant G-color. Thus
their image is homogeneous for F, proving
`thm-general-cardinal-erdos-rado` for all infinite kappa and finite n.
The x_alpha need not be increasing as ambient ordinals.

## Hilbert and diagram gaps: explicit local arguments

Read Moschovakis §§1H–1J, printed pp.34–46, including the complete Henkin
construction and quotient truth calculation. The deduction, fresh-constant
and several derived-rule results are exercises, not supplied full proofs.
The scaffold provides their syntactic proofs: induct along a derivation;
at generalization discharge only a sentence assumption, using quantifier
distribution. Replace a fresh constant throughout a finite proof by a
variable absent everywhere in that proof; verify each axiom's substitution
and free-variable condition. Equality substitutions give symmetry and
transitivity; contraposition of universal instantiation gives existential
introduction. None of these arguments uses completeness.

For `thm-well-ordered-language-henkin-completeness`, fix a well-order of
the signature and set kappa >= max(omega,|L|). Start with a fresh seed
constant. At round m, enumerate the sentences and existential sentences of
the current language in at most kappa steps. Decide each sentence by the
consistent side and attach a distinct next-layer constant to every
existential sentence, with its witness implication. Finite support and
fresh-constant elimination preserve consistency even when all witness
implications are added: any finite subset can be added one at a time.
At transfinite decision limits and the final omega union, a contradictory
proof would already occur at an earlier stage. Cardinal absorption bounds
each expanded alphabet and their union by kappa. Every final sentence occurs
in a finite layer, so the union decides it and supplies witnesses. Deductive
closure remains consistent. The existing general Henkin truth lemma gives
a model on closed-term classes of size <= kappa. This fills the argument
only mentioned by Moschovakis 1J.6; it is explicitly ZFC, not ZF+BPI.

Read Weiss–D'Mello's full selected text: Chapter 2 pp.14–21 and Chapter 3
pp.24–25. Compactness is deliberately not proved there. The elementary
diagram implication is an exercise. Its local proof is as follows: if N
satisfies Diag_el(M), map a to c_a^N. Named inequalities give injectivity;
named function equations and atomic formulas make the image a substructure.
For every formula phi and tuple a, exactly its true closed instance or its
negation belongs to the diagram. Satisfaction substitution therefore proves
M |= phi(a) iff N |= phi(c_a^N). Conversely an elementary embedding gives
exactly these truth values in the named expansion. For literal inclusion,
replace image elements by their preimages and tag the remaining elements
with a disjoint copy, transporting all interpretations along that bijection.
No surjectivity onto N is asserted. The chain proof on pp.16–18 works for
any nonempty ordinal chain because every finite tuple and one existential
witness lie in a common stage; no countable cofinal sequence is required.

## Tree and partition sources

Read Monk's tree definitions and 9.12–9.18 in full, printed pp.65–75;
9.20 on pp.77–78; 9.32–9.37 on pp.86–88; 15.14–15.16 on pp.265–266;
16.36–16.38 on pp.331–332; and the entire 29.28 proof on pp.661–670.
PDF extraction page labels must be checked against the printed labels;
the old coverage's repeated p660 locator was off by one for the statement.

The reference to an indexed delta-system theorem numbered 14.70 is wrong
in this edition: 14.70 is a forcing result. Use the local proof instead.
For an omega-one-indexed family of finite supports, an uncountable repeated
support already gives a delta system. Otherwise every fiber is countable;
the set of distinct supports is uncountable. Apply the earlier 9.20 theorem
to those supports and choose one index per support. This proves the indexed
corollary without any forcing dependency.

In the finite-petals proof, the cocountable filter's ultrafilter extension
is a real ZFC supplier. Intersections of the chosen large sets remain
uncountable, so disjoint petals and countable initial tree levels permit a
witness strictly above both selected nodes. Two predecessors of one node
are comparable, contradicting the Aronszajn hypothesis. In the specializing
poset, require **distinct** comparable nodes; same-petal constraints come
from the original condition, not from the cross-petal lemma.

Kurepa's equivalence remains proved later on SET-17. Its route includes
pruning, normalizing at limit levels, branch lexicographic order,
the separable-interval quotient and Dedekind completion. The source's
immediate-branching argument must not be used on a non-Hausdorff tree:
splitting can first occur at a limit. Use this explicit replacement.

First prune to nodes whose cones are unbounded in omega_1. This is downward
closed and every remaining node extends to every higher level: otherwise
the countably many cones on one level would all be bounded, making their
union bounded. Now form the history tree H whose nodes are the sets of
strict predecessors of the pruned nodes, ordered by proper inclusion.
The predecessors in H of pred(t) are exactly pred(s) for s<t, so its height
is ht(t). Each level is a quotient of a countable level. An antichain in H
lifts to an antichain in the pruned tree; an uncountable chain in H has a
union that is an uncountable chain of original nodes. Thus H is Suslin.
It has one root, the empty history, and every history extends to arbitrarily
high levels. At a limit level it is Hausdorff: if two histories have the
same earlier histories, each original node in one belongs to a longer
earlier history and hence to the other. They are equal.

Every cone in H contains two incomparable nodes; otherwise its unbounded
height would yield an uncountable chain. Repeatedly split one continuing
cone and retain the other node, obtaining countably many pairwise
incomparable descendants of any fixed node. Recursively choose continuous
levels alpha_xi, xi<omega_1, starting at zero. At a successor choose a
single higher level above countable antichains selected for every node on
the current countable level; extend those antichains to it. Countable
unions and regularity of omega_1 give this common bound. At limits take
suprema. Restrict H to these levels. Each node now has infinitely many
immediate successors, and the limit Hausdorff condition survives because
the selected levels are continuous and cofinal below each selected limit.
Height, countable levels, absence of uncountable chains/antichains, and
extension to every higher level are preserved. This proves the required
normalization without the problematic immediate-branching premise.

Do not claim an arbitrary convex class has actual
endpoints in the ambient order: choosing an interior interval suffices for
the ccc count of nontrivial classes. Replace the stale references to 22.9
and 21.15 by the local first-difference calculation and completion-density
lemma. SET-17 must prove these preparatory steps, not cite the orientation.

For rational specialization, disjointify an antichain cover and color each
node by its unique index f(t). Code the predecessor colors at indices at
most f(t) by a finite-support binary sequence g_t. If s<t, their first
difference is at most min(f(s),f(t)): when f(t)<f(s), the t-color cannot
occur below s, because that color class is an antichain. At any earlier
difference, inclusion of predecessor sets rules out g_s=1 and g_t=0.
Thus g_s is lexicographically smaller. The image is countable and embeds
in Q by the finite-stage interpolation lemma. This fills the omitted bound
in Monk 9.37; the rational-order equivalence stays in SET-17.

For Halpern–Läuchli, the complete source proof uses a finite word calculus,
soundness for its three classes of rules, and finite density-preserving
thinning. SET-21 must include those lemmas. In its last case the cone roots
initially have possibly different heights n_i. Put h=max n_i; extend each
root to height h and restrict its dense set to that cone. At p=h+k this
restriction is (h,k)-dense. This supplies the missing common-height step
and corrects the displayed `(m,k)` typo. The source's set-quantifier notation
is ordinary metatheoretic quantification over powersets, not an invocation
of first-order completeness. Its ZFC proof does not by itself prove the
later symmetric-model support argument or its choice strength.

## Remaining boundary

An independent Sol review on 2026-09-08 found no gap in the new
general-cardinal Erdős–Rado proof or the history-tree normalization proof.
It checked the pattern counts, successor-cardinal closure, distinctness,
index-order induction, pruning, history quotients and continuous level
selection. This review covers those two arguments, not the entire inherited
published supplier graph.

F1's page edges and F2's byte fetches were already repaired in the paused-run
sync. F5 now has a local proof and three registered scaffold items. This
receipt closes the named source gaps above and records their adaptations;
it does not certify every published proof in the transitive supplier graph.
All seven sources' selected passages now have current read receipts in batch
coverage. This includes Moschovakis 2B.1–2B.4 pp.63–65, Karagila Chapter9
pp.43–45, Marks pp.65,68–69,72–74, Monk's partition notation and Ramsey proof
pp.647–648, Mildenberger–Shelah Definitions1.1,1.9,1.11 pp.2,4, and
Cummings–Magidor Definition1.1 and width-one identification pp.1–2.
Exercise-only proofs are identified rather than credited to the text.
F3's selected-source reading is closed. F4 remains a separate full semantic
audit, not something a successful graph traversal or a repaired citation proves.
