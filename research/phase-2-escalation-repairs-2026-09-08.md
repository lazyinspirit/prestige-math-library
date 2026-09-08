# Phase-2 escalation repairs — 2026-09-08

Owner authorization: repair all escalations one at a time; a pair with substantial
missing machinery may be deferred with its prose scaffold and Phase-2 scope
reconciled. No assurance gate is waived.

## F-FINAL-7 — local repair applied

The unconditional finite-source open-star criterion no longer consumes
`lem-compact-subsets-of-an-arbitrary-simplicial-realization-meet-finitely-many-open-simplices`.
That general lemma retains its explicit Countable Choice assumption.

The complete replacement argument is in the batch-7 manifest and AT-24 prose:
enumerate rational barycentric grids of the finite source; their images are
dense in the image. If their supports have infinite union, recursively choose
the least sequence index escaping the accumulated finite vertex set. Each
target simplex contains only finitely many selected points, since each
occurrence consumes a fresh vertex of that simplex. Every subset of these
points is therefore weakly closed. This gives an infinite closed discrete
subspace of the compact image, a contradiction. Thus the image lies in a
finite closed subcomplex; continuity of straight-line interpolation follows
in its Euclidean topology. Source-simplex barycenters and positive coordinates
give the carrier assertion, fixed-point and subcomplex-pair properties.

Density can be made explicit: for a simplex with ordered vertices and weights
x_0,...,x_n, round the first n weights down to multiples of 1/m and put the
remaining mass in the last coordinate. The coordinate error is at most n/m.
List all nonnegative integer tuples summing to m in lexicographic order,
over the finitely many source simplices and m=1,2,... . Repetitions cause no
problem. The recursion state is a finite list of selected indices; its next
index is a uniquely defined least natural number, not a choice function.
Compactness of the image is proved by pulling back open covers; no
metric-only continuous-image theorem is used for the arbitrary target.

The published finite-realization compactness theorem uses choice-free
Heine–Borel; its complete proof and the general closed-subspace compactness
proof were read. The planned finite weak/Euclidean topology lemma supplies
the closed embedding of a finite subcomplex. No new item or A/B pair is
needed; the original 25 A / 6 B inventory is unchanged.

Source comparison: Hatcher, Algebraic Topology, §2C pp.178–179 and Appendix
A.1 p.520, https://pi.math.cornell.edu/~hatcher/AT/AT.pdf. The complete A.1
closed-discrete argument was read. The rational-grid/least-index refinement
is a local proof, not a claim that Hatcher proves this choice-free variant.

## F-FINAL-8 — two published suppliers repaired sequentially

1. `lem-zariski-lemma-transcendence-basis-reduction`: explicitly embed
   A=k[t_1,...,t_r][1/s] into K, invert the leading coefficients, and apply
   `cor-integral-elements-form-a-subring` to A[a_1,...,a_m]=K. Declare the
   integrality definition and the localization universal property/zero
   criterion. Remove the unused algebraicity-transitivity dependency.
2. `lem-zariski-lemma-localised-polynomial-ring-not-field`: base-N
   specialization preserves s and maps t_1 to u. The extended localization
   map is surjective since h(u)/g^m is the image of h(t_1)/s^m. Its nonzero
   target is not a field: use u for constant g and g+1 otherwise. The latter
   cannot divide g^m because it would divide the nonzero constant (-1)^m.
   Declare the localization interfaces and rational-function domain supplier;
   remove the unused one-variable module-finiteness lemma.

All added suppliers are already published and precede these consumers.
Statements are unchanged. Canonical plan dependencies and strategies,
commutative-algebra prose and the affine-interface scaffold are synchronized.
The actual Nullstellensatz chain is retained, not replaced by an unused
direct integrality edge on its downstream theorem.

Source comparison: Milne, A Primer of Commutative Algebra, §6 and §13,
https://www.jmilne.org/math/xnotes/CA.pdf; full relevant supplier arguments and
the precise final-adjudicator findings were read. The explicit specialization
and g+1 argument are proved locally. Each published repair passed precheck
and rendercheck separately. Verification records describe local checks only;
no independent judge or owner audit is claimed.

## HOM-SECTION-CHOICE — repaired with owner-approved axiom contract

The owner explicitly approved assuming AC for the general classification
and transgression claims. Six affected items now state that assumption and
declare `def-axiom-of-choice`. Classification applies AC to projection fibers
and normalizes the section. Transgression applies it again to the nonempty
Q-indexed sets of witnesses to invariance of [d], with eta(1)=0.
The construction, factor-set change, and extension equivalence are explicit;
the DHW sign is unchanged. The general five-term theorem inherits AC.
The first-cohomology three-term sequence and concrete supplied-section
calculations are not unnecessarily strengthened. The separate homological
balance proof retains its own DC/supplied-resolution contract.

Full source §§10.1–10.2 read at https://arxiv.org/pdf/1103.4052, printed
pp.20–21. Manifest dependencies, content policy and coverage pass; the one
unrelated modular low-yield warning has a current scope disposition, and
group-a scope checking passes. Canonical plan/prose/consumer ledger agree.
No new pair and no published proof edit are needed for this correction.

## HG — local constant repair and owner-authorized deferral

HG-LOCAL-THRESHOLD is repaired in the preserved scaffold: use a positive
hyperbolicity upper bound and integer Delta>=max(3,2*delta). Bracketing real
6*delta subarcs by vertices adds at most two edges, still <=5*Delta.
If every such based subword were geodesic, the whole closed path would be
(3,4*delta)-quasi-geodesic and have length <=12*delta. Longer null words
thus contain a based shortening segment and a relator of length <10*Delta.

HG-CONE-CONVERSE requires substantial additional machinery. Under the owner's
explicit permission, the entire HG pair is deferred from wave 1 and remains
a Phase-2 direct root. Its 29 A / 5 B items and complete source coverage are
preserved in `phase-2-hg-deferred.pages.json` and
`phase-2-hg-deferred.coverage.json`. No mathematical result is deleted.
The new prerequisite pair `asymptotic-cones-and-the-sublinear-triangle-criterion`
has a 12 A / 3 B binding prose inventory before HG. Its metric, extraction,
disk-area, planar and uniformity proofs must pass ordinary scaffolding and
review before use. The old unsupported cone-extraction instruction is removed
from the preserved HG consumer and replaced with its exact new suppliers.

The original batch 1 retains its accepted small-cancellation pair, unchanged.
All other batches retain their identities and inventories. The scope ledger
was deliberately regenerated with the normal tool, preserving the original
baseline commit. Current scope is 19 pairs / 38 pages / 15 batches.
Phase 2 is 143 pairs, including 124 queued after this run. No independent
verdict was rewritten and no stage or assurance gate was waived.

Full relevant source arguments read: Druţu–Kapovich revised GGT, Lemma
11.168/Proposition 11.167, Proposition 11.176/Lemma 11.177, Propositions
9.103–9.104, and Theorem 11.181. Source references and the remaining targeted
Chapter 10 harvest/proof obligations are in HG-P's prose scaffold.

F-FINAL-7/8 have current non-owner repaired dispositions through the normal
resolution tool. Their coverage/source/scope/plan/dependency checks pass.
Homology also has a repaired disposition. Derived scope/dependency records,
manifest integrity, all final Step-3/4 gates and doctor passed. At 10:44 UTC
the resumed engine completed Step 4 and dispatched all fifteen Step-5 author
batches for the 19-pair / 402-item frontier. The deferred HG mathematical
obligations are not closed merely because the pair left this frontier.
