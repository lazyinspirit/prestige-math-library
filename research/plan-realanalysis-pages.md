# Real Analysis track: short single-topic pages (working design)

Owner constraints: (1) pages come in A/B pairs, A = definitions + theorems +
false statements, B = examples + counterexamples; (2) each page SHORT and
dedicated to a well-defined topic; (3) ZERO circularity, mechanically verified.

Granularity target: **A page 12-25 items, B page 8-20 items.** (Published pages
today run 33-40, which the owner judged too long.)

## The circularity discipline

The whole stack is a STRICT LINEAR ORDER of pages. An item may cite only items on
its own page (earlier in the list) or on a strictly earlier page. A linear order
admits no cycles, so circularity is impossible by construction; the validator
(`validate-plan.mjs`) confirms no page cites a later one.

**One deliberate exception: B pages are leaves.** Nothing in the library depends
on an examples page, so a B page may cite forward. This matters exactly once, and
it is DECISION D-TRIG below.

## Already published; do not re-derive

`construction-of-the-natural-numbers` · `construction-of-r-via-cauchy-sequences`
· `construction-of-r-via-dedekind-cuts` · `foundations-of-the-real-numbers`
(field/ordered field/Archimedean/complete ordered field, abs value, triangle
inequality, SQUARE roots only, Q dense, uniqueness of the complete ordered field,
equivalence of the two constructions).

`foundations-of-the-real-numbers` additionally carries the planned
`cor-archimedean-reciprocal` (owner-approved 2026-07-26, to be authored, judged
and audited BEFORE it joins the published page's item list): for every eps > 0
there is a natural n >= 1 with 1/n < eps. **Citation discipline for every later
page:** `thm-of-archimedean` states only the DIRECT form "for every x there is n
with x < n·1_F". Any step of the form "1/n < eps" — countable neighbourhood
bases B(x, 1/n), 1/k -> 0, delta = 1/k witness sequences, Cesaro head estimates,
Baire-stage interval lengths — cites `cor-archimedean-reciprocal` (plus
`lem-of-inverse-positive` when the tail comparison 1/k <= 1/N or a division by a
growing positive term is also needed), never the bare theorem. Direct-form uses
(unbounded sequences, cofinality of N, covers by balls of radius n) keep citing
the theorem alone.

**Level-8 additions (Alpha-8, step 4, 2026-07-26 — settled at the level-8
splice of `plan-spec.json`; binding on every later page).** (1)
`lem-of-sequence-basics` (`equivalent-forms-of-completeness`) is the single
home for sequence basics in an ARBITRARY ordered field: limits are unique,
limits preserve non-strict inequalities, convergent implies Cauchy, Cauchy
implies bounded, Cauchy with a convergent subsequence converges. No later page
re-derives any of these clauses in an abstract ordered field; cite the lemma.
(2) `lem-mct-implies-archimedean` (same page): monotone convergence alone
forces the Archimedean property; cite it, never reprove it. (3)
`lem-integer-part` (`limits-of-real-functions`): for every real x there is
exactly one integer m with m <= x < m+1 — the library's only floor /
integer-part item; later pages (RA-14, RA-27, RA-37 in particular) cite it
rather than rebuilding the argument from Archimedean + well-ordering. (4)
`thm-euclidean-space-complete` (metric-spaces, level 7) is stated for n >= 1
ONLY, because `lem-metrics-on-rn` was so restricted (d_infinity is a max over
the empty index set at n = 0); nothing later may assume R^n completeness for
all n. (5) The p-adic completion of Q is NOT in this library and is not
planned — no p-adic absolute value or valuation exists here, and
`ex-completion-of-q-is-r` carries no p-adic clause; treat Q_p as a candidate
future page, never as an available fact. (6) The subspace topology is defined
at level 8 (`def-subspace-topology-top` on
`topological-spaces-and-continuity`); later topology material cites it and
does not redefine it (see the T3 note in plan-topology-track.md). (7)
`lem-absolute-convergence-implies-convergence` now exists on
`series-and-nonnegative-tests` (level-8 authoring: `thm-root-test` and
`thm-ratio-test` conclude convergence of the SERIES, not merely of the series
of absolute values, and this lemma is the step). Its id was COINED there while
`absolute-convergence-and-rearrangement` (order 36, RA-09) had an empty item
list; when RA-09 is scaffolded it MUST reuse or alias this id, never mint a
second one.

TO VERIFY before authoring RA-01: whether `def-complete-ordered-field` already
contains a usable definition of supremum, or whether standalone `def-supremum` /
`def-infimum` items are needed.

---

# The pages, in reading order

### Block I: the completeness toolkit

**RA-01 Suprema and Infima** <- published foundations
sup/inf, max/min, bounded sets; the epsilon-characterization of sup; inf as
-sup(-S); monotonicity under inclusion; sup of a sum, of a scalar multiple, of a
union; sup of a bounded function; sup over a product set; the approximation
property. B: computations, sup not attained, sup of an empty/unbounded set.

**RA-02 Roots, Rational Powers, and Classical Inequalities** <- RA-01
existence and uniqueness of n-th roots (generalizing the published square-root
theorem); rational powers; the laws of rational exponents; **Bernoulli's
inequality in full generality** (r >= 1 or r <= 0; reversed for 0 <= r <= 1; the
strengthened form with the floor(r/2)x^2 term); the binomial theorem; AM-GM;
Cauchy-Schwarz for finite sums. B: five proofs of Bernoulli, five of AM-GM
(induction, binomial, convexity, forward-backward, x <= e^{x-1} deferred).

**RA-03 Countability and the Uncountability of R** <- RA-01
equinumerosity, finite/countable/uncountable; countable unions and subsets;
Z and Q countable; Cantor's diagonal argument; R uncountable; every interval
uncountable; the irrationals are uncountable and dense; Cantor's power-set
theorem; Cantor-Schroder-Bernstein. B: an explicit enumeration of Q, the
diagonal construction, the algebraic numbers are countable.

### Block II: sequences

**RA-04 Sequences and Limits** <- RA-01
sequence, convergence, divergence, divergence to +-infinity, boundedness,
monotone; uniqueness of limits; convergent implies bounded; algebra of limits;
the order limit theorem; squeeze; |a_n| -> |a|. B: 1/n, r^n, sqrt(n+1)-sqrt(n),
the classical divergences.

**RA-05 Monotone Sequences, Bolzano-Weierstrass, and Cauchy Completeness**
<- RA-04, RA-02
monotone convergence theorem; nested interval property; subsequences and
subsequential limits; the monotone-subsequence (peak/rising-sun) lemma;
**Bolzano-Weierstrass**; Cauchy sequences; Cauchy implies bounded; Cauchy with a
convergent subsequence converges; **the Cauchy criterion in R**; contractive
sequences; **the alternating sequence and the even/odd index maps**
(`lem-alternating-sequence`, owner-approved 2026-07-26): strictly increasing
e, o with N their disjoint union, and the unique (s_k) with s_0 = 1,
s_{sigma(k)} = -s_k. This is the library's ONLY parity notion; every later
(-1)^k or interleaved witness — on RA-06, RA-07 and RA-08 in particular — cites
it rather than rebuilding the object by repeated applications of the recursion
theorem inside its own Given block. B: the Babylonian sequence for sqrt 2; a
Cauchy sequence of rationals
with no rational limit; sqrt(n) with null consecutive differences is not Cauchy;
nested OPEN intervals with empty intersection.

**RA-06 limsup, liminf, and Subsequential Limits** <- RA-05
limsup/liminf; the extended real line; existence; convergence iff
limsup = liminf; limsup is the largest subsequential limit; the subsequential
limit set is closed; subadditivity; the **ratio-to-root inequality**
liminf(a_{n+1}/a_n) <= liminf a_n^{1/n} <= limsup a_n^{1/n} <= limsup(a_{n+1}/a_n)
(this is WHY the root test dominates the ratio test, and it belongs here, not in
the series block); standard limits n^{1/n} -> 1, p^{1/n} -> 1,
n^alpha/(1+p)^n -> 0, x^n/n! -> 0. B: (-1)^n; the block sequence 1/1; 1/2, 2/2;
1/3, 2/3, 3/3; ... with subsequential limit set exactly [0,1] (level-7 audit
2026-07-26: replaces the earlier "all of extended-R" enumeration idea — same lesson,
self-contained witness, and the extended-R attainment point is carried by the dedicated
limsup = +infinity counterexample); 2^{-k+(-1)^k} defeating the ratio test; the
all-strict ratio-root chain; the four standard limits worked; strict
subadditivity/product counterexamples; 0 * infinity indeterminate. (2 + sin(ln n)
with ratio -> 1 and limit-point set [1,3] is DEFERRED to the trig delta D-TRIG;
it is not in the level-7 item list.)
Citations on this page: every (-1)^k witness (the alternating example, the
strict subadditivity and product counterexamples, 2^{-k+(-1)^k}) cites
`lem-alternating-sequence` from RA-05; the 1/n-quantitative steps in
n^{1/n} -> 1, p^{1/n} -> 1, the closed-limit-set diagonal and the
block-sequence example cite `cor-archimedean-reciprocal` (see the published
list above), not bare `thm-of-archimedean`.

**RA-07 Equivalent Forms of Completeness** <- RA-05, RA-06
The five-way equivalence: least upper bound <=> monotone convergence +
Archimedean <=> nested intervals + Archimedean <=> Bolzano-Weierstrass <=>
Cauchy completeness + Archimedean. Cambridge IA proves five of these as separate
lemmas; Abbott's §2.6 epilogue does the same. Also **Cesaro means**,
**Stolz-Cesaro**, Silverman-Toeplitz and Toeplitz's lemma (they fit nowhere else
and are cheap here). B: **G&O Ch.1 item 11** in full: on a "closed interval" of a
non-complete ordered field, EVT, IVT, Rolle, MVT, uniform continuity and
"f' = 0 implies constant" ALL fail simultaneously. The single best motivation for
the completeness axiom in the literature. Plus: a Cauchy-complete but not
complete ordered field; an ordered field in which Q is not dense; a field ordered
in two distinct ways; a non-Archimedean ordered field. WITNESS WARNING (batch-2
audit 2026-07-26): R(t) itself is NEITHER Cauchy complete NOR nested-interval
complete, in either the unrestricted or the shrinking sense — the intervals
[n, t/n] have empty intersection because no rational function has a growth
exponent strictly between 0 and 1, and the partial sums of a non-rational
Laurent series are a Cauchy sequence in R(t) with no limit there. So
cex-ordered-field-not-archimedean cannot close fs-cauchy-complete-implies-lub or
fs-nested-intervals-implies-lub; both refutations now rest on the formal Laurent
series field R((t^-1)), built and published at level 7 (see the settlement
paragraph below).
Citations on this page: the Cesaro-mean head estimate C/n < eps and the Cesaro
matrix columns 1/n -> 0 cite `cor-archimedean-reciprocal`; Stolz-Cesaro divides
by the growing b_k (a field element, not 1/n), so its tool is
`lem-of-inverse-positive`, not the corollary; the (-1)^k Cesaro/Stolz-converse
examples cite `lem-alternating-sequence` from RA-05.

Authoring notes (batch-2 audit 2026-07-26): (i) def-summability-matrix must
carry the finite-row-support condition (only finitely many nonzero entries per
row) in the definition itself, since y_n = sum_k c_{n,k} x_k must be a FINITE
sum — def-series does not exist until RA-08, one page later. (ii) The Cesaro
mean is 0-indexed: sigma_n = (x_0 + ... + x_n)/(n+1) for n in N, so that sigma
is a genuine sequence on N and the Cesaro matrix c_{n,k} = 1/(n+1) for k <= n
is a genuine N-by-N summability matrix in cor-cesaro-matrix-is-regular.
(iii) The abstract ordered-field lemmas may NOT cite the R-stated items
lem-sup-epsilon, lem-sup-unique, lem-cauchy-sequence-bounded,
lem-cauchy-with-convergent-subsequence, lem-limit-preserves-order,
lem-limit-unique (rem-sequence-conventions: transfer is a statement about the
arguments, not a licence to cite); the needed facts are re-derived inline in
the ordered field F, or via the proposed lem-of-sequence-basics if approved.
(iv) In cex-stolz-cesaro-converse-fails the quotient a_k/b_k is formed for
k >= 1 only, since b_0 = 0. (v) In thm-silverman-toeplitz the necessity of the
uniform bound on row absolute sums is a gliding-hump recursion, the fiddliest
proof on the page; it is elementary but needs thm-recursion, not just limits.

Settled since the batch-2 audit (Alpha-8, step 4, 2026-07-26): the open
decisions of research/level8-batch-2.notes.md §3 items 2-4 are resolved in
`plan-spec.json` at the level-8 splice. (a) The honest witness field IS built:
page `formal-laurent-series-field` (order 31.5, 11 items — R((t^{-1})) as an
ordered field, Cauchy complete, non-Archimedean, not LUB-complete) precedes
this page, and fs-cauchy-complete-implies-lub, fs-nested-intervals-implies-lub
and ex-cauchy-complete-not-complete-field now cite its items
(thm-laurent-cauchy-complete, cor-laurent-nested-intervals,
cor-laurent-not-lub-complete, ...). The WITNESS WARNING above is thereby
discharged — R(t) is still never used as a completeness witness. (b)
`lem-mct-implies-archimedean` is approved and on this page. (c)
`lem-of-sequence-basics` is approved and on this page: the abstract
ordered-field re-derivations of authoring note (iii) go through it, and no
later page re-derives those clauses in an abstract ordered field (see the
level-8 additions note at the top of this file).

### Block III: series

**RA-08 Series: Convergence and the Nonnegative Tests** <- RA-06
partial sums, convergence, tails; the n-th term test; the Cauchy criterion;
linearity; geometric and telescoping series; bounded partial sums for nonnegative
series; direct and limit comparison; **Cauchy condensation**; the p-series for
RATIONAL p (real p is completed on RA-27); ratio and root tests in limsup/liminf
form; root strictly dominates ratio (citing RA-06); Raabe, Gauss, and
**Kummer's test** as the common generalization (ratio and Raabe are the cases
zeta_k = 1 and zeta_k = k+1 — k+1, NOT the classical k, because the library
indexes from 0 and Kummer requires zeta_k > 0 at k = 0; level-8 sweep
2026-07-26); the **Abel-Dini theorem** (no slowest divergent series, hence no
universal comparison test). Bertrand (zeta_n = n log n), sum 1/(n log n) and the
"arbitrarily slowly convergent Bertrand family" are DEFERRED until the logarithm
exists; the A-page strength-order remark records which tests this page cannot
state without it. B: the harmonic series; 2^{-n+(-1)^n} defeats the ratio test
but not the root test; n^{-1/2} and n^{-2} both have root limit 1 (L = 1 is
genuinely inconclusive both ways).
Citations on this page: the 2^{-n+(-1)^n} witness (the A-page false statement
"ratio limsup >= 1 implies divergence" and the B-page ratio-fails counterexample)
cites `lem-alternating-sequence` from RA-05 for the parity structure.

Authoring notes (batch-2 audit 2026-07-26): (i) thm-abel-dini starts its sums
at the first index where s_k > 0, since s_0 = 0 under def-series. (ii)
thm-p-series-rational, ex-harmonic-series-diverges and
cex-root-limit-one-decides-nothing run over k >= 1 (1/0^p is undefined); the
root and ratio tests form |a_k|^{1/k} and a_{k+1}/a_k over k >= 1 as well.
(iii) The ratio, Kummer, Raabe and Gauss tests need a_k nonzero — Kummer,
Raabe and Gauss need a_k > 0, now in their titles; the divergence half of
Kummer is FALSE for signed terms (a_k = (-1)^k/k satisfies the zeta_k = 1
divergence hypotheses yet sum a_k converges), so positivity is load-bearing,
not a convenience. (iv) The h = 1 branch of Gauss is proved log-free: r_k is
absolutely summable by comparison with the p-series exponent 1 + eps, so the
products telescoping k*a_k are bounded below via the Weierstrass product
inequality prod(1 - x_j) >= 1 - sum x_j (an induction), giving a_k >= c/k and
divergence by direct comparison; no Bertrand machinery is used. (v) In
thm-stolz-cesaro the step 1/b_n -> 0 cites lem-reciprocal-of-null-diverges on
a tail (lem-limit-of-tail), since b_k is only eventually positive. (vi)
thm-limit-comparison-test phrases L = infinity as divergence to +infinity
(def-divergence-to-infinity), never as an extended limit equation, per
rem-sequence-conventions.

**RA-09 Absolute and Conditional Convergence; Rearrangement; Products**
<- RA-08
**Level-9 audit, 2026-07-27 (batch 2).** Seven notes bind authoring of this page
pair. (1) `lem-absolute-convergence-implies-convergence` is REUSED, not reminted:
`def-absolute-and-conditional-convergence` names it for the implication and no
item on this page restates it. (2) The LOGARITHM does not exist at order 36
(`the-logarithm-and-general-powers` is order 72), so no sum on this page or its
companion is ever evaluated as a multiple of log 2. The alternating harmonic
series is proved to converge with sum strictly between 1/2 and 1, and the
two-positive-one-negative rearrangement is proved to converge to (3/2) TIMES THAT
SUM, via the log-free identity T_{3n} = S_{4n} + (1/2) S_{2n}. (3) R^d does not
exist as a normed space at order 36 (`rn-as-a-normed-space` is order 62), so
Levy-Steinitz and Sierpinski's refinement are NOT items on this page and the
"in R^2 the rearrangement sums form a LINE" example is dropped; what remains is
the orientation remark `rem-rearrangement-in-higher-dimensions`. (4) The sum
p_n^2 criterion for infinite products needs the log expansion and is DEFERRED to
order 72; `thm-infinite-product-criterion` carries the log-free content instead
(the nonnegative criterion with the two elementary bounds, the (1 - p_k) form,
and absolute convergence from sum |p_k|). (5) `lem-integer-part` is homed on
`limits-of-real-functions` (order 42), LATER than this page, so
`thm-decimal-expansions` may not use a floor function; the digits are produced by
`thm-recursion` with the finite case distinction of `thm-well-ordering-principle`.
(6) The harmonic series' divergence is NOT citable here:
`ex-harmonic-series-diverges` is homed on an examples page. Every conditional
convergence witness cites `thm-p-series-rational` at p = 1 (and at p = 1/2 for
the square-root witnesses) instead. (7) Every series on this page and its
companion is written 0-indexed: the alternating harmonic series is
sum_{j>=0} (-1)^j/(j+1), the square-root witnesses run over 1/sqrt(j+1),
prod(1 - 1/(j+2)) replaces prod(1 - 1/n), and prod(1 + (-1)^j/sqrt(j+2))
replaces prod(1 + (-1)^n/sqrt n) — at the original indices the first term of
each is 1/0 or a vanishing factor.
absolute, conditional and unconditional convergence; rearrangement; **Abel
summation by parts**; **Dirichlet's test**; **Abel's test**; the alternating
series test with error bound; absolute implies convergent; **Dirichlet's
rearrangement theorem** (absolute implies unconditional); **the Riemann series
theorem**; unconditional <=> absolute in R; **Cauchy products** and **Mertens'
theorem**; grouping; Fubini for double series; infinite products with the
log-free criteria (nonnegative terms, the (1 - p_k) form, and absolute
convergence from sum |p_k| — the sum p_n^2 refinement is DEFERRED to the
logarithm page, order 72); decimal expansions as a theorem. Levy-Steinitz (in
R^d the rearrangement sums form an affine subspace) and Sierpinski's refinement
are NOT stated on this page: R^d as a normed space is order 62, later in the
reading order, and rem-rearrangement-in-higher-dimensions carries the
orientation instead.
B: the alternating harmonic series sum_{j>=0} (-1)^j/(j+1), proved conditionally
convergent with sum strictly between 1/2 and 1 (the VALUE log 2 is not available
at order 36); the same series rearranged two-positive-one-negative to (3/2) times
that sum, and rearranged to any prescribed real; a Dirichlet-test example whose
signs have period three, so the alternating series test does not reach it; an
Abel-test example and the counterexample showing Abel's test needs monotonicity;
the Cauchy product of sum_{k>=0} (-1)^k/sqrt(k+1) with itself diverges because
|c_n| >= 1 for every n; a double array with iterated sums 1 and 0; every
rearrangement of sum (-1/2)^k has sum 2/3; grouping (1-1)+(1-1)+... converges
while sum (-1)^k does not; prod_{j>=0}(1 - 1/(j+2)) has partial products 1/(n+1)
and so does not converge, which is why a zero limit is excluded;
prod_{j>=0}(1 + (-1)^j/sqrt(j+2)) has partial products tending to 0 although the
series converges; and 0.999... = 1 as the nonuniqueness of base-b expansions.
Level-8 note (Alpha-8, 2026-07-27, per the orchestrator): "absolute implies
convergent" ALREADY EXISTS — `lem-absolute-convergence-implies-convergence`
was coined and authored on `series-and-nonnegative-tests` (the root and ratio
tests conclude convergence of the series through it). When this page is
scaffolded, REUSE or alias that id for the absolute-implies-convergent slot;
minting a second id for the same statement is an error.

### Block IV: topology of R

**RA-10 Topology of R** <- RA-05, RA-03
open, closed, interior, closure, boundary, limit and isolated points, dense;
neighbourhoods; the **structure theorem for open subsets of R** (a countable
disjoint union of open intervals, an order-theoretic fact with no general
analogue); **Heine-Borel in R by bisection** (NOT as a corollary of Tychonoff);
compact implies closed and bounded and conversely; compact iff sequentially
compact; **connected subsets of R are exactly the intervals**; perfect sets; a
nonempty perfect set is uncountable. B: intersection of (-1/n, 1/n);
{q in Q : q >= 0, q^2 < 2} is closed and bounded in Q and not compact (level-7
audit 2026-07-26: witness changed from "[0,1] cap Q" — both work, but the
sqrt-2 truncation runs on the same mechanism as the A-page false statement it
refutes, and its closedness-in-Q is exactly the irrationality of sqrt 2); an open
cover of (0,1) with no finite subcover; a set neither open nor closed; Q's
closure/interior/boundary; {1/k} cup {0} compact; Z closed not compact and (0,1)
bounded not compact; Q cap [0,2] disconnected; a closed set with an isolated
point is not perfect; a nondegenerate closed interval is perfect.

**RA-11 The Cantor Set, Baire Category, and Measure Zero in R** <- RA-10
nowhere dense, meager, residual, F-sigma, G-delta; measure zero; content zero;
**the Baire category theorem in R** (nested-interval proof); countable sets are
null; countable unions of null sets are null; content zero implies null and the
converse FAILS; the Cantor set (compact, perfect, uncountable, nowhere dense,
null, totally disconnected, homeomorphic to {0,1}^N); the **fat
(Smith-Volterra-Cantor) set** (nowhere dense, NOT of measure zero); the Cantor
function; Q is F-sigma and not G-delta. B: Q covered by intervals of total length
epsilon; the fat Cantor set's measure computed; two homeomorphic perfect nowhere
dense sets of which only one is null (measure is not a topological invariant);
two homeomorphic sets of different Baire category.
Level-9 audit, 2026-07-27 (Beta-9-1; note (e) amended by Alpha-9 per owner
decision B1-R3). Seven notes bind authoring of this pair.
(a) TWO NEW ITEMS, and they are load-bearing. `lem-finite-interval-cover-total-
length` (finitely many intervals covering [a,b] have total length >= b - a,
proved by induction on the number of intervals) and `lem-nondegenerate-interval-
is-not-null` (no interval of positive length has measure zero: enlarge the k-th
covering interval to an open one of length |I_k| + eps*2^{-k-1}, apply Heine-
Borel, then the previous lemma). WITHOUT THEM three items on this pair are
unprovable, because each needs "a cover of total length < 1 cannot cover an
interval of length 1": `thm-fat-cantor-set-has-positive-measure`,
`fs-null-implies-content-zero` and `cex-null-set-not-of-content-zero`. The
scaffold had none of it. Both lemmas are also what `the-riemann-integral`
(order 54) will want for Lebesgue's criterion.
(b) THE CHOICE-FREENESS OF BAIRE IS NOT FREE. `rem-baire-in-r-is-choice-free`
claims the nested-interval proof spends no choice; the naive proof picks an
interval at each stage in terms of the previous one, which is dependent choice.
`thm-baire-category-r` must therefore run the canonical selection of
`thm-perfect-set-uncountable-r`: fix one enumeration of Q, and at every stage
take the interval with LEAST-INDEXED RATIONAL ENDPOINTS meeting the
requirements. `thm-rationals-countable`, `lem-rat-embeds-dense` and
`thm-well-ordering-principle` are now in the deps of both items for exactly
this; the remark must name the device, not merely assert the conclusion. This
is also what `rem-baire-category-choice-strength` means by "a fixed countable
dense set removes every choice".
(c) `def-monotone-sequence` WAS DROPPED from `thm-cantor-function-properties`:
it is about SEQUENCES and says nothing about functions, and no definition of a
monotone function exists before RA-14 (order 46). The title now states the
property inline, "satisfies c(x) <= c(y) whenever x <= y".
(d) "TOTALLY DISCONNECTED" IS UNDEFINED IN THIS LIBRARY. `def-connected-r`
defines connectedness for subsets of R and nothing defines total
disconnectedness. `thm-cantor-set-properties` and
`ex-cantor-set-is-perfect-and-totally-disconnected` now say what is actually
provable: the set contains no interval of positive length, so by
`thm-connected-subsets-of-r-are-intervals` its only nonempty connected subsets
are single points. The phrase may appear as a gloss, never as the claim.
(e) THE CANTOR FUNCTION'S CONTINUITY STAYS OFF THIS PAGE. [AMENDED BY ALPHA-9,
owner decision B1-R3, 2026-07-27: Beta-9-1 originally landed
`cor-cantor-function-is-continuous` and
`rem-cantor-function-increases-only-on-a-null-set` at order 44; the owner moved
them, together with the B item
`ex-cantor-function-maps-a-null-set-onto-the-unit-interval`, to
`monotone-functions-and-discontinuities` (RA-14, order 46) — see the Level-9
inheritance note in the RA-14 entry below, which is now the authoritative
record. Only `lem-monotone-with-interval-image-is-continuous` stays at order
44, and it is the tool the moved items cite.] The scaffold was RIGHT to claim
only well-definedness, monotonicity, surjectivity and constancy on the removed
intervals here: no definition of continuity for real functions exists before
order 42.
(f) TWO PROSE B ITEMS ARE NOT IN THE SCAFFOLD AND SHOULD NOT BE. "Two
homeomorphic perfect nowhere dense sets of which only one is null" and "two
homeomorphic sets of different Baire category" both need a homeomorphism of
subsets of R, and `def-homeomorphism-and-open-maps` is order 102. They belong
on a later page or must be restated without the word; they are not a gap here.
(g) THREE RETITLES, because the words were not available: "outer measure 1/2"
became "cannot be covered by intervals of total length less than 1/2"
(`ex-fat-cantor-measure-computed`) and "a set of full measure" became "the
union of a meager set and a set of measure zero" (`cex-meager-set-of-full-
measure`). No measure-theoretic notion beyond `def-measure-zero-and-content-
zero` exists here.

### Block V: continuity

**RA-12 Limits of Real Functions** <- RA-10, RA-04
cluster point; the epsilon-delta limit; one-sided limits; limits at and to
infinity; the **sequential (Heine) criterion**; uniqueness; algebra of limits;
order preservation; squeeze; local boundedness; two-sided iff both one-sided;
**composition of limits with the correct hypothesis**. B: psi(1/x) has no limit
at 0 (trig-free, using psi = dist(.,Z)); the precise composition failure
(f(u) = 0 for u != 0, f(0) = 1, g == 0: lim f = lim g = 0 but lim f(g(x)) = 1).
Level-8 audit (Beta-8-3, 2026-07-26), binding for authoring:
(a) PAGE ORDER: local boundedness and the sign-preservation lemma now PRECEDE
the algebra theorem — they are its toolkit. Sign preservation is strengthened to
"L != 0 implies |f| > |L|/2 on a punctured neighbourhood; if L > 0 then
f > L/2 > 0 there" (reverse triangle, cor-of-reverse-triangle); the |L|/2 lower
bound is exactly what the quotient case needs, and it also shows c stays a limit
point of the quotient's domain A cap {g != 0}.
(b) CHOICE HYGIENE: the Heine criterion's sequence-to-epsilon direction costs
AC_omega, and this page carries the remark recording that. Therefore algebra,
order preservation, squeeze and composition are proved DIRECTLY epsilon-delta
(choice-free), NOT via Heine; only the criterion itself and the nonexistence
corollary sit on the sequential side. Heine's epsilon-to-sequence direction is
choice-free and is the one the corollary uses.
(c) The algebra theorem is stated at a FINITE limit point only. The B-page limit
at +infinity example must NOT cite it: it is proved by the direct estimate
|(3x^2-1)/(x^2+x) - 3| = (1+3x)/(x^2+x) <= 4/x for x >= 1, then Archimedean.
(d) def-sequence is 0-indexed: the null sequences of the B page are 1/(k+1) and
2/(2k+1) (giving 1/x-values k+1 in Z and k+1/2), never 1/k.
(e) The judge sees Statements only: ex-distance-to-the-integers must STATE (and
verify in its body) attainment at a nearest integer, psi = 0 exactly on Z,
psi(m + 1/2) = 1/2, range [0,1/2], and 1-periodicity — the psi(1/x)
counterexample cites precisely these. Z sits inside R via lem-int-embeds-rat
then lem-rat-embeds-dense; the nearest-integer argument is Archimedean +
well-ordering (mind negative x: apply WOP to a shifted set of naturals).
(f) Dirichlet items: sequences in Q minus {c} and in the irrationals minus {c}
come from lem-sequential-characterisation-of-closure-r applied to the dense sets
of lem-q-and-irrationals-dense-r (AC_omega inherited and recorded through that
lemma; a canonical choice-free alternative — least-indexed rational under a fixed
enumeration, and c + sqrt2/(k+1) patched by sqrt3 at the at-most-one bad index —
exists if the owner prefers, at the price of thm-rationals-countable and
thm-of-square-roots deps).
(g) The choice-cost remark must claim only: epsilon-to-sequence is ZF; the
converse as proved here uses AC_omega; pointwise sequential criteria cannot be
had for free (the full pointwise schema is in fact equivalent to AC_omega(R),
Herrlich, *Axiom of Choice*, LNM 1876 — attributed, not proved here); and
Sierpinski's theorem that EVERYWHERE-sequentially-continuous implies continuous
is ZF, so the remark must not overclaim. Title softened accordingly ("uses",
not "is exactly").
(h) fs-limit-unique-at-every-point and its B-page counterexample concern the RAW
epsilon-delta formula extended to an arbitrary point of the domain (vacuously
satisfied by every L at an isolated point); under the official def-function-limit
the limit at an isolated point is UNDEFINED, and both items must say so.
Settled since the Beta-8-3 audit (Alpha-8, step 4, 2026-07-26): recommendation
§4.1 of research/level8-batch-3.notes.md is APPROVED — `lem-integer-part` ("for
every real x there is exactly one integer m with m <= x < m+1") is now on this
page in `plan-spec.json` (21 items), the library's first floor / integer-part
item. The nearest-integer machinery of note (e) above therefore has the lemma
to cite instead of redoing Archimedean + WOP inline, and every later page that
needs the integer part (RA-14, RA-27, RA-37 in particular) cites it too.

**RA-13 Continuity, IVT, EVT, and Uniform Continuity** <- RA-12
continuity at a point and on a set; the sequential criterion; algebra and
composition; the **preimage-of-open characterization**; continuous image of a
compact set; the boundedness theorem; **EVT**; **IVT** (by bisection); continuous
image of an interval is an interval; existence of k-th roots as a corollary; the
1-D fixed point theorem; uniform continuity; **Heine-Cantor**; uniform continuity
preserves Cauchy sequences; **the continuous extension theorem from a dense
subset** (RA-27 needs exactly this for a^x); Lipschitz, Holder, and the strict
hierarchy Lipschitz < alpha-Holder < uniformly continuous < continuous;
alpha-Holder with alpha > 1 on an interval forces constancy; **Rudin 4.20, the
sharp converse to Heine-Cantor** (on a noncompact E there is an unbounded
continuous function, a bounded one with no maximum, and if E is bounded a
continuous one that is not uniformly continuous: compactness is EXACTLY what is
needed). B: Dirichlet nowhere continuous; x times Dirichlet continuous at exactly
0; 1/x and x^2 not uniformly continuous; sqrt uniformly continuous but not
Lipschitz, exactly 1/2-Holder; x^beta separates every Holder class; the product
of two uniformly continuous functions need not be uniformly continuous; EVT fails
on (0,1) and on [0,infinity); the IVT fails over Q.
Level-8 wiring obligation RETRACTED (Beta-8-2, 2026-07-27, superseding the
Alpha-8 note of 2026-07-26). `cex-evt-and-ivt-fail-over-a-non-complete-field`
on `equivalent-forms-of-completeness-examples` states epsilon-delta continuity
inline and that is FINAL. It refutes a claim about an ARBITRARY ordered field,
over Q; this page's continuity definition will be for real functions on subsets
of R, resting on `def-function-limit`, so it cannot apply to Q and could never
be cited there. Do NOT retro-wire it.
Level-8 seam note (Alpha-8, 2026-07-27, step-9 audit): when this page defines
continuity, uniform continuity, Lipschitz and Holder for real functions on
A subset of R, it must STATE the relation to the metric-space definitions that
now precede it in reading order — `def-metric-continuity` (metric-spaces, 24),
`def-metric-uniform-continuity` and `def-lipschitz-holder-contraction`
(completeness-and-uniform-continuity, 26): either define as the X = A subset of
(R, |x-y|) instance and cite, or define R-natively and record the agreement
explicitly, in the dictionary style of `def-metrizable-space`. Silent
re-definition repeats the level-7 two-notions-of-open defect. At the same
point, identify psi = dist(., Z) with the set distance d(x, Z) and its
1-Lipschitz property (`lem-distance-to-set-is-lipschitz`, level 7), which makes
psi this track's natural uniformly-continuous example.

CORRECTION, level-9 audit 2026-07-27 (Beta-9-1). The sentence above originally
routed that identification through `ex-distance-to-the-integers`. That item is
homed on `limits-of-real-functions-examples`, an EXAMPLES page, and examples
pages are leaves (SCHEMA §7): no item on RA-13 or on its B page may depend on
it, so the instruction was unexecutable as written. The identification is made
instead from the A-page items it actually needs — `def-metric-bounded-diameter`
(distance from a point to a nonempty set) and `lem-distance-to-set-is-lipschitz`,
both on `metric-spaces`, order 24 — in the new B item
`ex-distance-to-the-integers-is-1-lipschitz`. That reaches exactly the intended
destination, and it is why the seam obligation is recorded as discharged.

Level-9 audit, 2026-07-27 (Beta-9-1). Eight notes bind authoring of this pair.
(a) THE SEAM IS DISCHARGED BY ONE ITEM, `lem-real-and-metric-notions-agree`,
placed immediately after `def-uniform-continuity-real`. It is a LEMMA, not a
remark, so later pages can cite it and move between the two vocabularies. It
records four agreements at once: continuity, uniform continuity, the Lipschitz
and Holder conditions (which are NOT redefined here — they are
`def-lipschitz-holder-contraction` of order 26 instantiated at X = A subset of
(R, |x-y|)), and, as a fifth clause, that a subset of R is compact in the
open-cover sense of `def-open-cover-r` exactly when it is a compact metric
subspace. That fifth clause closes the OTHER seam nobody had noticed: page 28
defines compactness metrically and page 38 defines it again R-natively, and
until now no item said the two agreed.
(b) CONTINUITY AND UNIFORM CONTINUITY ARE DEFINED R-NATIVELY, resting on
`def-function-limit` as the RA-12 retraction requires; Lipschitz and Holder are
NOT. That asymmetry is deliberate: the first two are the subject of the page and
must be stated in the idiom of RA-12, the second two would gain nothing from a
second definition.
(c) EVT, THE CONTINUOUS IMAGE OF A COMPACT SET, AND HEINE-CANTOR ARE STATED
TWICE ON PURPOSE, metric-generally at order 28 and R-natively here, with
distinct ids and distinct proofs, per the standing decision at the head of
`plan-topology-track.md`. The R-native proofs go through
`thm-heine-borel-characterisation-r` and `thm-compact-iff-sequentially-compact-r`
(order 38, choice-free and order-based); the metric proofs go through the cover
machinery of page 28. `lem-real-and-metric-notions-agree` is the single place
where the duplication is acknowledged, and every duplicated item must link it.
(d) THE k-TH ROOTS COROLLARY IS NOT AN A-PAGE ITEM. `thm-nth-roots-exist`
already exists and is published (order 16); minting a second id for the same
statement is forbidden. The IVT re-proof lives on the B page as
`ex-ivt-gives-nth-roots`, which cites the existing theorem.
(e) THE STRICT HIERARCHY IS NOT RESTATED. `thm-metric-regularity-hierarchy`
(order 26) already gives Lipschitz => uniformly continuous => continuous and
Holder => uniformly continuous; via note (a) it applies verbatim. Strictness
belongs in a Remark on `lem-real-and-metric-notions-agree` naming the B-page
witnesses `ex-x-to-the-beta-separates-the-holder-classes` and
`cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval`, as ordinary
same-pair links, not dependencies — the `thm-metric-equivalence-hierarchy`
pattern of the level-7 audit.
(f) "A FUNCTION WITH THE INTERMEDIATE VALUE PROPERTY IS CONTINUOUS" IS NOT
REFUTED HERE. Every witness available at order 44 is an oscillator, and the
only oscillator in the library, `ex-distance-to-the-integers`, is homed on
`limits-of-real-functions-examples` (order 43), a B page, which is a leaf: no
item anywhere may depend on it. The false statement belongs on RA-14, whose B
page already plans the Conway base-13 function. This is a mathematical
placement, not a page-budget cut.
(g) alpha-HOLDER WITH alpha > 1 MUST STATE ITS HYPOTHESIS INLINE.
`def-lipschitz-holder-contraction` defines the Holder condition for RATIONAL
0 < alpha <= 1 only, so "alpha > 1" is not expressible through it;
`thm-holder-exponent-above-one-forces-constancy` writes
|f(x) - f(y)| <= C|x-y|^alpha out in full, with alpha a rational > 1 and
`def-rational-power` supplying the power.
(h) INDEXING. def-sequence is 0-indexed, so the witnesses on the B page are the
pairs 1/(k+2), 1/(k+3) for 1/x on (0,1) and k+1, k+1+1/(k+1) for x^2 on R;
never 1/k or n, n+1/n.

**RA-14 Monotone Functions, Discontinuities, and Continuity Sets**
<- RA-13, RA-11, RA-03, and the two linear-algebra pages LA-01
`vector-spaces-and-subspaces` (order 68) and LA-02
`linear-independence-bases-and-dimension` (order 70). Both LA edges are new at
level 9 (mixed) and are genuine `requires` entries, not incidental: LA-01
supplies the vector-space language (`def-vector-space`,
`def-linear-combination-and-span`, `lem-restriction-of-scalars`) that
`lem-hamel-basis-exists` and `fs-additive-implies-linear` speak, and LA-02
supplies `cor-every-vector-space-has-a-basis` and `def-linear-basis`, from
which `lem-hamel-basis-exists` is obtained. (Batch 1's plan to build the Hamel
basis directly from Zorn, with Q-linear independence written out inline, was
superseded at the splice once batch 2 scaffolded LA-02 in the same level; the
spliced `plan-spec.json` deps are the record — verified 2026-07-28.)
classification of discontinuities (removable, jump, essential; Rudin's first and
second kind); **oscillation** at a point, and continuity iff oscillation zero;
{osc >= eps} is closed; one-sided limits of monotone functions always exist;
monotone functions have only first-kind discontinuities; **Froda's theorem** (the
discontinuity set of a monotone function is countable) and the **prescribed-jump
converse**; a continuous injection on an interval is strictly monotone; **the
continuous-inverse theorem** (RA-27 and RA-32 need this for log and arcsin);
the **continuity set is G-delta and the discontinuity set F-sigma**; every
G-delta is realized; **corollary via Baire: no function is continuous exactly on
Q**; upper and lower semicontinuity, the level-set characterization, and the
semicontinuous EVT; Baire class one and its dense G-delta of continuity points;
**Cauchy's functional equation** with the regularity list REACHABLE IN SCOPE
(continuity at a single point [Darboux 1875] OR monotonicity on an interval OR
boundedness above or below on an interval OR sign-constancy OR non-dense graph).
**Two clauses DROPPED per the self-contained-scope rule (owner, 2026-07-27):**
"boundedness on a set of positive measure" and "Lebesgue measurability" both
require a measure, which this library does not build. Restore them when a
measure-theory track exists; nothing else on the page changes when they return,
since each is an independent sufficient condition.
PLACEMENT DECISION (Beta-9-1, level 9). The Dirichlet function 1_Q and Thomae's
function are DEFINED ON THE A PAGE, as `def-dirichlet-and-thomae-functions`, and
their continuity sets are proved there as
`thm-dirichlet-and-thomae-continuity-sets` (1_Q nowhere continuous; Thomae
continuous exactly at the irrationals, with osc_t(c) = t(c)). The reason is the
leaf rule: RA-18's B page needs "Thomae is Riemann integrable with integral 0"
and may not cite anything homed on RA-14's B page. The A-page theorem restates,
across the leaf boundary, what `cex-dirichlet-is-nowhere-continuous` (order 124,
a B page) already proves; the duplication is deliberate and must be acknowledged
in the item, in the style `ex-distance-to-the-integers-is-1-lipschitz` uses.
B: Thomae's values and oscillation computed; a monotone function discontinuous exactly on Q; Froda sharp
(discontinuous exactly at {1 - 1/(k+1) : k in N}); a Hamel-basis additive function (unbounded
on every interval, dense graph — the "non-measurable" clause is DROPPED for the
same reason; the Hamel basis itself is fine, it costs only AC, which is an
adopted axiom); f(m/n) = n is finite everywhere and locally
unbounded at every point; a bounded function with no relative extremum anywhere
and nowhere semicontinuous; 1_Q is not Baire class 1 but is Baire class 2 (the
Baire hierarchy is strict); the **Conway base-13 function** (Darboux, nowhere
continuous).
FALSE-STATEMENT WITNESS (Beta-9-1, level 9).
`fs-intermediate-value-property-implies-continuity` is an A-page item and so may
not cite the Conway function, which is homed on the B page (a leaf). It states
its own witness inline: psi(1/x) for x != 0 and 0 at x = 0, on [-1,1], with
psi(x) = min{x - floor(x), 1 - (x - floor(x))} written out from
`lem-integer-part`. That function has the intermediate value property (its range
is [0,1/2] and every value of [0,1/2] is taken in every neighbourhood of 0, and
it is continuous off 0) and is discontinuous at 0. The Conway base-13 function
remains on the B page, where it is the strictly stronger witness: Darboux and
continuous at NO point.
Level-8 note (Alpha-8, 2026-07-26): the library now has a floor item —
`lem-integer-part` on `limits-of-real-functions` (for every real x exactly
one integer m with m <= x < m+1). Any integer-part / floor step on this page
cites it; do not rebuild the argument from Archimedean + well-ordering inline.
Level-9 inheritance note (Alpha-9, step 4, 2026-07-27 — owner decisions B1-R3
and B1-R9; BINDING when this page is scaffolded). This page inherits four
results moved off level 9's pages 44/45 by the owner (those orders predate the
2026-07-27 insertions; the pages are `continuity-ivt-evt-and-uniform-continuity`
and its examples page, today orders 123/124):
(1) `cor-cantor-function-is-continuous` (A page): the Cantor function c of
`def-cantor-function` (order 119 today) is continuous on [0,1]. Intended proof: the
image of c is [0,1] by `thm-cantor-function-properties` (surjectivity), which
is order-convex, and c satisfies c(x) <= c(y) whenever x <= y, so
`lem-monotone-with-interval-image-is-continuous` applies directly; no IVT.
(2) `rem-cantor-function-increases-only-on-a-null-set` (A page): may claim that
c is continuous, nondecreasing, surjective, constant on every removed interval,
and that the Cantor set has measure zero, so the increase happens on a null
set. It may NOT claim c' = 0 almost everywhere, that c is singular, or anything
about Lebesgue measure.
**AMENDED 2026-07-27 by the self-contained-scope rule.** The earlier instruction
here was to carry `external_refs: [rem-lebesgue-monotone-differentiation,
rem-ftc-absolutely-continuous]` and LINK both in the body so the ‡ marker
appears. **That is withdrawn: the item carries NO `external_refs` and links
neither.** The owner's goal is to eliminate instances of unproven forward
reference, and a ‡ mention is one. The remark stands on what it can prove — the
Cantor set is null and c is constant off it — and says nothing it cannot reach.
Restore the pointers if and when a differentiation-and-measure track exists.
(3) `ex-cantor-function-maps-a-null-set-onto-the-unit-interval` (B page): the
Cantor set is null yet c maps it ONTO [0,1], because c is surjective onto
[0,1] and constant on every removed interval.
(4) The false statement "a function with the intermediate value property is
continuous" (decision B1-R9; SPLICED at level 9 (mixed) as
`fs-intermediate-value-property-implies-continuity`). The intended-witness
sentence that stood here is superseded: an A-page `fs-` item may not cite the
Conway base-13 function, which is homed on this page's own B list (a leaf), so
the item carries its own inline witness — see the FALSE-STATEMENT WITNESS note
above. Conway stays on the B page as the strictly stronger witness.
REUSE OBLIGATION — DISCHARGED at the level-9 (mixed) splice, 2026-07-28. The
three ids in (1)-(3) were COINED but UNBUILT — they appeared in
research/level9-batch-1.notes.md and DECISIONS.md but in no spec page and no
items/ file (verified 2026-07-27). They now sit in `plan-spec.json` on pages
129/130 exactly as coined ((1) and (2) on the A page, (3) on the B page). This is the same trap as
`lem-absolute-convergence-implies-convergence` at level 8: when this page is
scaffolded, those EXACT ids must be reused, never re-minted under a paraphrase.
Their tool, `lem-monotone-with-interval-image-is-continuous`, STAYS on
`continuity-ivt-evt-and-uniform-continuity` (order 123, in `plan-spec.json`
today) — cite it, do not move or restate it. The prerequisite cost is zero:
this page's `requires` already lists both `cantor-set-baire-and-measure-zero`
and `continuity-ivt-evt-and-uniform-continuity` (verified in `plan-spec.json`).

### Block VI: differentiation

**RA-15 The Derivative and the Mean Value Theorems** <- RA-14
(which subsumes RA-13). The edge to RA-14 is NEW at level 9 and is load bearing
twice: `thm-derivative-of-an-inverse` needs `thm-continuous-inverse`, and
`thm-monotonicity-from-the-derivative` states its conclusion with
`def-monotone-function` rather than re-defining monotonicity inline.
the derivative; the little-o/linear-approximation form; **Caratheodory's
characterization** (f differentiable at c iff f(x) - f(c) = phi(x)(x - c) with
phi continuous at c), which makes the chain rule a one-liner; differentiable
implies continuous; algebra of derivatives; the chain
rule; the derivative of an inverse; Fermat's interior extremum theorem; Rolle;
**Cauchy's MVT proved FIRST, with the ordinary MVT as the case g(x) = x**
(Rudin's dependency order, adopted deliberately); zero derivative implies
constant; monotonicity from the sign of the derivative; bounded derivative
implies globally Lipschitz. B: |x| not differentiable at 0; x^3 strictly
increasing with vanishing derivative; the MVT fails without endpoint continuity;
**the vector-valued MVT failure**, deferred to RA-22.
Level-8 wiring obligation RETRACTED (Beta-8-2, 2026-07-27, superseding the
Alpha-8 note of 2026-07-26). `cex-rolle-fails-over-a-non-complete-field` states
the difference quotient inline and that is FINAL, for the same reason as the
retraction at RA-13: it refutes a claim about an ARBITRARY ordered field, over
Q, and this page's derivative will be defined for real functions on subsets of
R. Do NOT retro-wire it.
DROPPED FROM RA-15 (Beta-9-1, level 9), deferred not deleted. THE GENERAL
LEIBNIZ RULE, (fg)^(n) = sum_k C(n,k) f^(k) g^(n-k), needs two things this page
does not have. (1) HIGHER DERIVATIVES are introduced on RA-16, which is LATER in
plan order, so the statement cannot even be written here. (2) BINOMIAL
COEFFICIENTS do not exist anywhere in the library: no `def-binomial-*` item, no
binomial theorem, and no combinatorics page in `plan-spec.json` at all (verified
2026-07-28). What would license it: a binomial-coefficient definition with
Pascal's rule, plus RA-16's higher derivatives. RECOMMENDED HOME: RA-16, whose
scaffold must then also mint the binomial coefficient (it needs one for Taylor's
theorem in any case). The ordinary product rule is unaffected and is proved here
inside `thm-algebra-of-derivatives`.
REUSE, NOT RE-MINT (Beta-9-1, level 9). "Rolle fails over Q" is DROPPED from
this B list because `cex-rolle-fails-over-a-non-complete-field` already exists
and is PUBLISHED on `equivalent-forms-of-completeness-examples` (order 112).
Minting a second id for the same statement is forbidden, and the existing item
is homed on a B page, so nothing here may cite it either. This is the same trap
as `lem-absolute-convergence-implies-convergence` at level 8. The Beta-8-2
retraction above already fixed the wiring question; this fixes the placement
question.

**RA-16 Darboux, L'Hopital, and Taylor's Theorem** <- RA-15,
`finite-counting-and-binomial-coefficients`
higher derivatives and the classes **C^k and C^infinity**; the general Leibniz
rule using the published binomial coefficients and Pascal rule; higher-order
Rolle; **Darboux's theorem** and the consequence that derivatives have neither
removable nor jump discontinuities; the valid partial converse that an
injective or monotone derivative is continuous; **L'Hopital** for 0/0 and
infinity/infinity at finite and infinite approach points, including one-sided
forms and finite or infinite target limits; Taylor polynomials; the
**Schlomilch-Roche** remainder with a natural parameter, its Lagrange and Cauchy
special cases, and the Peano remainder; remainder bounds; and the second- and
first-nonzero-derivative tests.

B: a periodic polynomial Hermite-spline oscillator and the resulting
differentiable function with discontinuous derivative; x^k|x| is C^k and not
C^{k+1}; a positive derivative at zero with no local monotonicity; a rational
removable quotient for L'Hopital; a spline-based counterexample to the converse
of L'Hopital; the exact geometric Taylor remainder; and the x^4, -x^4, x^3
trichotomy when the second derivative vanishes.

Traps. Darboux plus Baire class one does not imply continuity: discontinuous
derivatives have both properties. The 0/0 proof at infinity is reduced by
t=1/x rather than by an invalid fixed-basepoint argument. Peano's remainder
uses induction and Cauchy's mean-value theorem without assuming continuity of
the highest derivative. Taylor's integral remainder is deferred to
`properties-of-the-integral-and-the-working-ftc`; Borel's theorem and Dini
derivatives are also deferred until their prerequisites are built. The
polynomial oscillator removes the need for a sine/cosine forward reference.

**RA-17 Convexity** <- RA-16
convex, strictly convex, concave and midpoint-convex functions; the three-slope
inequality; local Lipschitz continuity in the interior; finite one-sided
derivatives and supporting lines; convex functions are differentiable off an
at-most-countable set; for differentiable functions, convexity iff the derivative
is nondecreasing, and for twice-differentiable functions iff the second derivative
is nonnegative; a differentiable convex function has continuous derivative;
continuous midpoint convexity implies convexity; finite Jensen; local minima are
global and strict convexity gives uniqueness; inflection points by change of
convexity. B: absolute value is convex (its already-published
nondifferentiability item is linked but not cited); weighted mean-square from
finite Jensen; assuming Choice, a discontinuous midpoint-convex Hamel coefficient
map; and the cubic inflection point. The already-published x^4
second-derivative-test witness is not duplicated.
**Scope note 2026-07-27.** The parenthetical justification for the discontinuous
midpoint-convex witness previously read "midpoint convexity without
measurability does not give convexity". Measurability is out of scope, so the
witness is kept and the reason restated within reach: midpoint convexity plus
ANY of the in-scope regularity conditions of RA-14 gives convexity, and the
Hamel-basis construction shows that without regularity it does not. The
construction costs only AC, an adopted axiom.
The tool exists as of level 9: `lem-hamel-basis-exists` is homed on RA-14
(`monotone-functions-and-discontinuities`, order 129) — R has a Hamel basis
over Q, with every real a finite Q-combination and the coefficients unique. It
is obtained from `cor-every-vector-space-has-a-basis` and `def-linear-basis`
(`linear-independence-bases-and-dimension`, order 70, scaffolded in the same
level), with `lem-restriction-of-scalars` making R a Q-vector space. Cite it;
do not rebuild it. (Batch 1's note saying order 70 "has no item list" predates
the level-9 splice and is superseded — the page has 20 items in
`plan-spec.json` as of 2026-07-28.)

FRONTIER-7 BATCH-3 AMENDMENT (2026-08-01). The midpoint-convex regularity
theorem derives dyadic approximation inline because
def-the-dyadic-rationals-of-the-unit-interval is homed after this page and is
not a legal dependency. When that later definition is read, the two dyadic
conventions must agree. The Hamel witness cites only the A-page items
lem-hamel-basis-exists and thm-cauchy-functional-equation-regularity; it does
not cite the published B-page Hamel example.

### Block VII: the Riemann integral

**RA-18 The Riemann Integral: Definition and Integrability** <- RA-14
(which subsumes RA-13 and RA-11). The edge to RA-14 is NEW at level 9 and is
load bearing three times: `thm-lebesgue-criterion` needs `def-oscillation`,
`thm-continuity-iff-oscillation-zero` and
`lem-oscillation-superlevel-sets-are-closed`; `thm-monotone-implies-integrable`
needs `def-monotone-function`; and the B page's Thomae example needs
`thm-dirichlet-and-thomae-continuity-sets`. Defining oscillation a second time
here would be the level-7 two-notions-of-open defect.
SCOPE CHECK (Beta-9-1, 2026-07-28). Lebesgue's criterion is FULLY IN SCOPE and is
NOT dropped. "Measure zero" here is `def-measure-zero-and-content-zero` (order
119, published), a cover-by-intervals condition; the proof needs only
`thm-countable-union-of-null-is-null`, `thm-compact-null-is-content-zero`,
`lem-content-zero-implies-null`, `lem-finite-interval-cover-total-length` and
Heine-Borel, all published. No outer measure, no measurable set and no Lebesgue
integral is used or mentioned, and no `proved_here: false` item is cited.
partition, refinement, mesh; tagged partitions and Riemann sums; upper and lower
Darboux sums and integrals; **the equivalence of the Darboux and Riemann
definitions**; **Riemann's criterion**; continuous implies integrable (needs
Heine-Cantor); monotone implies integrable; finitely and countably many
discontinuities; **Lebesgue's criterion** (bounded and null discontinuity set).
B: the integral of x^2 from the definition; Thomae is integrable with integral 0
(citing `thm-dirichlet-and-thomae-continuity-sets` on RA-14's A PAGE — see the
placement decision in the RA-14 block; do not restate Thomae's continuity here);
**Dirichlet is not integrable**; **the indicator of a fat Cantor set is not
integrable although its discontinuity set is nowhere dense** (the example that
forces the Lebesgue criterion); a Riemann-integrable function with an arbitrary
prescribed F-sigma null discontinuity set.

**RA-19 Properties of the Integral and the Working FTC** <- RA-18, RA-15
linearity, monotonicity, additivity over subintervals, |int f| <= int |f|;
integrability of |f|, of fg, of max and min; **composition: continuous after
integrable is integrable, and the order matters**; the first and second (Bonnet)
mean value theorems for integrals; **FTC for continuous integrands, both parts**
(the working version; RA-39 sharpens it); integration by parts; substitution;
the integral test for series, STATED WITH PROPER INTEGRALS ONLY — improper
integrals are `improper-integrals` at order 165, above this page, so the
conclusion is "the increasing sequence $(\int_0^N f)_N$ is bounded", not
"$\int_0^\infty f$ converges", and the index range starts at $0$ because
$\mathbb{N}$ contains $0$ (a version starting at $1$ is a tail,
`lem-series-tail-invariance`).
B: Bartle & Sherbert's motivating pair
H(x) = 2 sqrt x (H' unbounded, so H' is not Riemann integrable) and its partner;
a Riemann-integrable function with no primitive; **a function with a primitive
that is not Riemann integrable**; spikes with integral 1 converging pointwise
to 0; a composition of integrable functions that is not integrable.

(Taylor's integral remainder is DROPPED from RA-19, Beta-F1-2, frontier-1: it
needs higher derivatives, which are introduced on `darboux-lhopital-and-taylor`
at order 155 — EARLIER in plan order than 161, but not built, so nothing on this
page may cite it. When 155 is built, the integral remainder is best homed THERE,
next to the Lagrange, Cauchy and Peano forms it belongs with, citing this page's
`thm-integration-by-parts`; that is a smaller change than adding it here later.)

DROPPED FROM RA-19 (Beta-F1-2, frontier-1), deferred not deleted. **Arzela's
bounded convergence theorem (1885)** is in scope in principle — it is a theorem
about the Riemann integral, it predates Lebesgue, and the published measure-zero
toolkit of order 133 plus Heine-Borel is the right neighbourhood for it. It is
dropped because I could not certify a complete and correct proof route at
scaffold time. The obstruction is specific: the elementary proofs (Luxemburg 1971,
Lewin AMM 93 (1986) 395-397, and the Arzela-Osgood argument) all turn on showing
that the outer content of the sets $\{g_n \ge \varepsilon\}$ tends to $0$, and
Jordan outer content is NOT countably additive, so that step needs a delicate
compactness argument that I could not reconstruct with enough confidence to
scaffold. Scaffolding a strategy I cannot certify is the one thing this page must
not do. WHAT WOULD LICENSE IT: a session that works out one of the named
elementary proofs in full and gives it its own numbered lemma chain (the
decreasing case, then the general case by $g_n = \sup_{k\ge n}|f_k - f|$), or the
dominated convergence theorem once a measure-theory track exists. The
counterexample that motivates it, spikes with integral $1$ converging pointwise to
$0$, IS scaffolded on the companion page and stands on its own: it refutes the
interchange for pointwise convergence without asserting anything about the bounded
case.

**RA-20 Bounded Variation and the Riemann-Stieltjes Integral** <- RA-19
bounded variation, total variation, positive and negative variation; the
**Jordan decomposition**; BV is closed under sums and products; BV implies
Riemann integrable; the Riemann-Stieltjes integral (refinement and mesh
definitions); existence for a continuous integrand against a BV integrator;
**Rudin's existence ladder**; RS integration by parts; reduction to the Riemann
integral for a C^1 integrator; **Young's Holder condition for RS existence**
(f in C^{0,alpha}, g in C^{0,beta}, alpha + beta > 1); the inclusion chain
C^1 < Lipschitz < AC < continuous and BV. B: the Cantor function as an
integrator, with int 1 dC = 1 while C' = 0 a.e.; **RS additivity FAILS when f and
alpha share a discontinuity**; a continuous function that is not BV
(x psi(1/x)); a continuous monotone g and continuous f with
int f dg != int f g' dx.

**RA-21 Improper Integrals** <- RA-19
improper integrals of the first, second and mixed kinds; absolute versus
conditional convergence; the **Cauchy principal value**; the p-test; tail
invariance; comparison; the Cauchy criterion; **Dirichlet's and Abel's tests for
integrals** (from the second MVT); **Frullani's integral**. B: a divergent
improper integral with a finite principal value; **a convergent improper integral
whose positive continuous integrand does not tend to 0** (the integral analogue
of the n-th term test is FALSE); one whose integrand is unbounded in every tail;
1/sqrt x on (0,1].

### Block VIII: R^n and function spaces

**RA-22 R^n as a Normed Space; Vector-Valued Functions** <- RA-13, RA-15
inner product, Euclidean norm, the p-norms; **Cauchy-Schwarz**; the parallelogram
law; equivalent norms; componentwise convergence; completeness of R^n;
Bolzano-Weierstrass in $\mathbb{R}^n$ as a COROLLARY. **Heine-Borel in
$\mathbb{R}^n$ by bisection is ALREADY PUBLISHED** as `thm-heine-borel-rn` on
`compactness-in-metric-spaces` (order 120), together with
`thm-metric-compactness-equivalences`; this page CITES them and adds only the
sequential corollary, and re-proving either here would be a duplicate. The same
goes for completeness: `thm-euclidean-space-complete` (order 118) is published
and this page cites it, adding only completeness in an arbitrary norm via norm
equivalence; **all norms on R^n
are equivalent**; componentwise
derivatives and integrals; **the mean value INEQUALITY**, with the equality
false. B: t -> (t^2, t^3) defeats the mean value equality;
p-norm equivalence constants on R^2; xy/(x^2+y^2) is separately continuous and
not jointly continuous.

(The operator norm and "linear maps are Lipschitz" are DROPPED from RA-22,
Beta-F1-2, frontier-1. There is no definition of a linear map anywhere in the
published library: `linear-maps-rank-nullity-and-quotient-spaces` is order 76,
EARLIER in plan order than 167 and not built. Minting a linear map here would be
a re-mint of an earlier page's canonical object, which is worse than the gap.
LICENSED BY: page 76. When it is built, these two items are a short addition to
this page, and the operator norm is then also what `the-total-derivative` (229)
will want.)

(The classical B-page witness $t \mapsto (\cos t, \sin t)$ on $[0,2\pi]$ is
DROPPED, Beta-F1-2, frontier-1: the trigonometric functions are order 179, above
this page, and the level-9 forward-citing plan for it is superseded by the
self-contained-scope rule of 2026-07-27. The polynomial curve $t\mapsto(t^2,t^3)$
carries the same refutation and is scaffolded instead; the substitution is
recorded IN the item, so a reader who knows the classical example is told why it
is absent. LICENSED BY: order 179.)
Level-8 note (Alpha-8, 2026-07-26): `thm-euclidean-space-complete`
(metric-spaces, level 7) is stated for n >= 1 ONLY — `lem-metrics-on-rn` was
so restricted at level-7 authoring (d_infinity is a max over the empty index
set at n = 0). The completeness, Bolzano-Weierstrass and Heine-Borel items
here inherit the n >= 1 hypothesis; do not cite the level-7 theorem for all n.
Level-9 inheritance note (Alpha-9, step 4, 2026-07-27 — owner decision B2-R4;
BINDING when this page is scaffolded). This page — id `rn-as-a-normed-space`,
plan order 62 — or a later series page resting on it inherits **Levy-Steinitz**
(for a series of vectors in R^d, the set of sums of its convergent
rearrangements is either empty or an affine subspace) together with
**Sierpinski's refinement**, as a properly PROVED theorem, not a stub. At
order 36, `absolute-convergence-and-rearrangement` deliberately states NO
theorem about R^d: its `rem-rearrangement-in-higher-dimensions` says only that
the R^d question has a complete classical answer not reachable at that point
in the reading order, and carries the Levy and Steinitz papers in
`sources.references`. The owner explicitly declined to mint a
`proved_here: false` stub (`rem-levy-steinitz` does NOT exist and should not
be created: `deferred-functional-analysis` is a draft page, and every
published `external_refs` today targets a published deferred page; a stub
would also need later reconciliation with the proved version — the re-mint
trap). So this note is the ONLY carrier of the plan line: if this page is
scaffolded without the theorem, Levy-Steinitz silently vanishes from the
library's plan. When this page gains items, `rem-rearrangement-in-higher-
dimensions` (page 36) must declare the proved item in its `forward_refs` so it
gains the ↗ tier and the ledger entry comes into existence (see
research/level9-batch-2.notes.md §5).
ORDERS IN THE PARAGRAPH ABOVE ARE PRE-RENUMBER (Alpha-F1, 2026-07-28, verified
against `research/plan-spec.json`): this page `rn-as-a-normed-space` is spec order
**167**, not 62, and `absolute-convergence-and-rearrangement` is **129**, not 36.
STATUS AT SCAFFOLD TIME (Beta-F1-2, frontier-1, 2026-07-28): PARTLY DISCHARGED,
and the residue is named here so it cannot vanish. Scaffolded on this page as
proved items: `def-series-of-vectors-and-rearrangement` (series of vectors,
absolute convergence, rearrangement, the set $\mathcal{S}(x)$ of rearrangement
sums, with the agreement clause against `def-series` and
`def-rearrangement-and-unconditional-convergence` at $n = 1$);
`def-the-space-of-summing-directions` ($\Gamma$ and $\Gamma^{\perp}$, both proved
to be linear subspaces, phrased with the Euclidean inner product and NOT with
linear functionals, because dual spaces are order 92 and unbuilt);
`thm-steinitz-polygonal-confinement` (the Steinitz rounding / polygonal
confinement theorem, in full, as its own numbered theorem); and
`thm-rearrangement-sums-lie-in-an-affine-subspace` (the CONTAINMENT half:
$\mathcal{S}(x)$ is nonempty and contained in the affine subspace
$s + \Gamma^{\perp}$, with the absolutely convergent case and the published
one-dimensional dichotomy as clauses). NOT scaffolded: the REVERSE inclusion,
i.e. that every point of $s+\Gamma^{\perp}$ is a rearrangement sum for $n \ge 2$,
and Sierpinski's refinement. WHY: every proof of the reverse inclusion known to
me routes through (a) a reduction to $\Gamma = \{0\}$ by orthogonal projection,
which needs the orthogonal decomposition of `inner-product-spaces-and-orthogonality`
(order 94, EARLIER in plan order and unbuilt, so minting it here would be a
re-mint), and (b) a finite-dimensional separation argument for convex sets, which
exists nowhere in the library and is owned by no planned page (`convexity` at 157
is about convex FUNCTIONS on intervals). Both are structural, not effort, gaps.
WHAT WOULD LICENSE IT: pages 94 and 76 being built, plus a convex-separation
item; the natural discharge is then an ADDITION to this same page (adding items to
a published page is always allowed), not a new page, so the plan line stays where
`rem-rearrangement-in-higher-dimensions` promised it. NOTHING on this page states
the reverse inclusion in any form, no `proved_here: false` stub was created, and
the page's scope remark says only what was proved. The companion page carries
`fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space`,
which refutes the naive $\mathbb{R}^d$ generalisation of the Riemann series
theorem outright, using only the containment half — so a reader is protected from
the wrong expectation even while the sharp answer is outstanding.
The `forward_refs` edit this note owes to the published
`rem-rearrangement-in-higher-dimensions` is STAGED, not applied, in
`research/frontier-1-published-amendments.md`: that item is published and
owner-audited, and CLAUDE.md lands amendments to published pages in the same
commit that publishes the level, never before.

**RA-23 Sequences and Series of Functions; Uniform Convergence**
<- RA-22, RA-19

**BINDING scaffold decision (Erdős cycle 1, step 3, 2026-07-31).** Uniform
convergence is developed natively here for real-valued functions. The quantified
definitions of pointwise convergence, uniform convergence and the uniformly
Cauchy condition use only the real limit and function-space foundations. The
uniform Cauchy criterion, the real-valued uniform limit theorem and the
closed-interval form of Dini's theorem receive dependency-closed proofs on this
page. The later items `def-topology-of-uniform-convergence`,
`lem-uniform-convergence-in-the-uniform-metric`, `thm-uniform-limit-theorem` and
`thm-dini` on `function-space-topologies` are not used as load-bearing
dependencies.

The agreement with that later general development is recorded only in
`rem-uniform-convergence-agrees-with-the-later-uniform-topology`, with the four
later ids declared as `forward_refs`. The remark states that the quantified
definition agrees with convergence in the supremum metric when the functions
involved are bounded, that the native continuity theorem is the real-valued
metric-domain specialization of the later theorem for an arbitrary topological
domain and metric target, and that the native Dini theorem is restricted to a
closed real interval while the later one has a compact metric domain. No proof
may cite the remark or any of its later targets.

DEFS and THMS: pointwise, uniform and uniformly Cauchy convergence of
real-valued function sequences; series of real functions through partial sums;
the uniform Cauchy criteria for sequences and series; sums, scalar multiples and
bounded products of uniform limits; preservation of continuity and uniform
continuity; completeness of $C(K,\mathbb{R})$ in the supremum metric for
nonempty compact metric $K$, after boundedness is established by the extreme
value theorem; **interchange with the Riemann integral** through a uniform
integral-error estimate; **the derivative-limit theorem** on a closed interval,
using both parts of the working FTC and convergence at one point; **Dini's
theorem** on a closed interval; the **Weierstrass M-test**; and uniform Dirichlet
and Abel tests with genuinely uniform bounds.

B: $x^{k+1}$ on $[0,1]$; the moving rectangle of height $k+2$ on
$[1/(k+2),2/(k+2)]$, whose integral is one while it converges pointwise to zero;
separate witnesses showing the need for compact domain, continuous
approximants, continuous limit and monotonicity in Dini's theorem; the
zero-index-safe double sequence $s_{m,n}=(m+1)/(m+n+2)$ with unequal iterated
limits; and $x/(1+(k+1)^2x^2)$, which converges uniformly to zero while every
derivative at zero equals one.

NOT SCAFFOLDED: the cosine/double-limit example requires the unbuilt
trigonometric development and the definition of $\pi$; it may return when
`sine-cosine-and-the-definition-of-pi` is published. The proposed sequence
converging pointwise on all of $\mathbb{R}$ but uniformly on no interval is also
deferred: a closed witness here would duplicate later function-space examples or
need machinery not established by this page's prerequisites. Neither omission
licenses a forward whitelist on the B page.

**RA-24 Approximation and Compactness in C(K)** <- RA-23, RA-11

requires: uniform-convergence-of-functions; compactness-in-metric-spaces;
finite-counting-and-binomial-coefficients.

DEFS: equicontinuity, pointwise boundedness and uniform boundedness for
families in the real space $C(K,\mathbb R)$ when $K$ is compact metric;
Bernstein polynomials on $[0,1]$; unital point-separating real subalgebras of
$C(K,\mathbb R)$; and the tent function and Takagi series.

THMS: equicontinuity on a compact metric domain is uniform; equicontinuity and
pointwise boundedness give uniform boundedness and finite supremum-metric nets;
real Arzelà–Ascoli, with compact closure iff the family is equicontinuous and
pointwise bounded, and its sequential corollary. Bernstein moment identities
give uniform convergence of Bernstein polynomials, Weierstrass approximation
on $[0,1]$, and its closed-interval form. The lattice and two-point
interpolation lemmas give the real Stone–Weierstrass theorem for compact metric
spaces. A local complete-metric-space Baire theorem supports density of nowhere
differentiable functions in $C([0,1])$; the Takagi series supplies an explicit
continuous nowhere differentiable function.

B: bounded rational spikes that are not equicontinuous; constant functions
that are equicontinuous but not pointwise bounded; translates of a fixed bump
on $\mathbb R$ showing the compact-domain hypothesis; Bernstein polynomials of
$x^2$; the compact family $x\mapsto|x-a|$; even polynomials showing the need to
separate points; and polynomials vanishing at zero showing the need for
constants.

DEFER: complex Stone–Weierstrass and its self-adjointness obstruction; the
trigonometric families $\sin(nx)$ and the Stieltjes unbounded-interval example;
and the general function-space definition of equicontinuity. This page uses
only the real compact-metric formulation and has no forward dependency on
`function-space-topologies`.

**RA-25 Power Series and Real-Analytic Functions** <- RA-23, RA-09
formal power series; radius of convergence; **Cauchy-Hadamard**; absolute
convergence inside, divergence outside, uniform convergence on compact
subintervals but NOT on the open interval; term-by-term differentiation and
integration; C^infinity on the interior; the coefficient formula and the
**identity theorem**; **re-expansion about an interior point**; real-analytic
functions; analytic implies C^infinity with the converse false; **Abel's limit
theorem**; Tauber's theorem; **Frobenius** (Abel is strictly stronger than
Cesaro); products, quotients, reciprocals and compositions of power series;
the **unit criterion in R[[X]]** (invertible iff a_0 is); the binomial series
with **Abel's sharp endpoint dichotomy** (Re alpha > 0 absolute; -1 < Re alpha
<= 0 conditional except at -1; Re alpha <= -1 divergent). B: sum x^n/n^2,
sum x^n/n, sum x^n all have radius 1 with three different endpoint behaviours;
sum n! x^n converges at one point only; **the converse of Abel's theorem fails**;
a C^infinity function whose Maclaurin series converges everywhere and represents
it at one point only; one whose Maclaurin series converges at one point only
(Borel).
Level-8 seam note (Alpha-8, 2026-07-27): when Cesaro and Abel summability of
SERIES are treated here (Frobenius), define the Cesaro sum through the already
existing `def-cesaro-mean` and `thm-cesaro-mean-theorem`
(equivalent-forms-of-completeness, order 32) applied to the partial sums of
`def-series`; do not re-derive the mean machinery. That page and the series
page share no bridge today by design — the summability-of-series statement
belongs here, where Abel's limit theorem makes it worth stating.

### Block IX: the elementary functions

**RA-26 The Exponential Function** <- RA-25, RA-09
`rem-exponential-roadmap-and-circularity` records the construction order and
the circularity hazards. **E1** is the everywhere-convergent power series;
**E2** is the product limit (1+x/n)^n; **E3** is the IVP y'=y, y(0)=1;
**E6** is the normalized multiplicative functional equation; and **E11** is
Picard iteration, whose iterates are the exact partial sums. Theorems establish
the addition formula by the Cauchy product, positivity and reciprocals,
exp'=exp, strict increase, the limits and range, bijectivity onto the positive
reals, domination of every polynomial, and the equivalence of these five
constructions. The factorial tail gives 2<e<3 and proves that e is irrational.

B: a negative-input product-limit computation; failure of uniform convergence
of (1+x/n)^n on R; the flat exponential function and a nonzero smooth compactly
supported bump; a discontinuous positive solution of F(x+y)=F(x)F(y) built
from a Hamel-basis additive map and the Axiom of Choice; and failure of uniform
continuity of exp on R. Logarithms and arbitrary real powers remain outside
this page. A general smooth partition of unity and a smooth function analytic
nowhere are deferred because their constructions are not dependency-closed
here.

**RA-27 The Logarithm, General Powers, and the Sup Definition** <- RA-26, RA-19
log as the inverse of the already-built exp; prove that this equals
L(x) = int_1^x dt/t by comparing derivatives and the value at 1. **E7**: for
a > 1 define the rational-supremum power by
sup{a^q : q rational, q < x}; define the 0 < a < 1 case through the reciprocal
base, and a = 1 separately. (The unqualified supremum formula is false for
0 < a < 1 because that set is unbounded above.) Prove this construction equals
exp(x log a). **E8**: every rational sequence q_n -> x has a^{q_n} -> a^x,
independently of the sequence. **E10** (Landau root limit):
log x = lim_{n->infinity} 2^n (x^{1/2^n} - 1), with no integral or log series.
Then: the log laws including log(x^r) = r log x for REAL r; the series
for log(1+x) on (-1,1] with the endpoint by Abel; a^x := exp(x log a);
**`thm-power-agrees-with-rational-exponent`** (the owner's explicit requirement:
a^{p/q} in the new sense is the old algebraic q-th root of a^p); the laws of real
exponents; d/dx a^x and d/dx x^alpha; change of base; log grows slower than every
positive power; **the p-series for real p, closing RA-08**; the explicit two-point inequality
exp((1-t)x+ty) <= (1-t)exp(x)+t exp(y), 0 <= t <= 1, proved directly by
one-variable calculus without citing the later general convexity page; hence
weighted AM-GM for real weights, and **Young, Holder, Minkowski** for real
exponents; hyperbolic functions with the full
identity and inverse-logarithm inventory. B: 2^{sqrt 2} by the sup definition and
by exp(sqrt 2 log 2), agreeing; the alternating harmonic series equals log 2;
growth-rate comparisons; x^x -> 1 as x -> 0+; the log series diverges at -1.
Level-8 note (Alpha-8, 2026-07-26): any integer-part / floor step on this page
cites `lem-integer-part` (`limits-of-real-functions`); do not rebuild it
inline from Archimedean + well-ordering.
Level-9 inheritance note (Alpha-9, step 4, 2026-07-27 — owner decision B2-R5;
BINDING when this page is scaffolded). This page — id
`the-logarithm-and-general-powers`, plan order 72 — inherits the **sum p_n^2
criterion for infinite products with SIGNED factors**: for a real sequence
(p_n) with sum p_n^2 convergent, prod(1 + p_n) converges if and only if
sum p_n converges. It was deferred from `absolute-convergence-and-
rearrangement` (order 36) because every honest proof runs through the
log(1+x) expansion, which this page owns, and there is no log-free proof at
order 36 — the alternative was a fabricated or circular proof. What order 36
DOES prove, in `thm-infinite-product-criterion`, is the full log-free content:
the nonnegative criterion with both elementary bounds
1 + sum p <= prod(1+p) <= 1/(1 - sum p), the (1 - p_k) form including
"partial products -> 0 when sum p diverges", and absolute convergence from
sum |p_k|. Build the signed criterion ON that theorem plus this page's
log(1+x) series; do not restate the log-free bounds.

Under this library's definition, finitely many zero factors are allowed: if
p_n = -1 at an initial index, the product may converge with value 0. Therefore
the signed criterion is stated with no artificial hypothesis p_n != -1 for
every n. From sum p_n^2 < infinity one gets p_n -> 0, hence eventually
1+p_n > 0; apply log only on that tail and use
log(1+t) = t + O(t^2). Tail invariance then proves both directions and handles
all finite initial factors exactly as `def-infinite-product` requires.

If this page is
scaffolded without the criterion, the deferral becomes a silent loss — this
note is the plan line's only carrier.

**RA-28 Sine, Cosine, and the Definition of pi** <- RA-26
sin and cos by power series; sin' = cos, cos' = -sin; the Pythagorean identity;
the addition formulas; the ODE characterization y'' = -y; **the existence of a
positive zero of cos**, by the alternating-series bound cos 2 < -1/3
(Rudin R&CA's proof, the cleanest; the other five routes are recorded as a
remark); the smallest positive zero; **pi := 2 x_0**; **the convention split**
(Tao's pi := inf{x > 0 : sin x = 0}, no factor 2) with the lemma reconciling them
via sin 2x = 2 sin x cos x; values at multiples of pi/2; **2pi is the fundamental
period**; monotonicity intervals, zero sets and ranges; tan, cot, sec, csc.
The proof order is binding: establish sin/cos series convergence and
derivatives; prove uniqueness for y''=-y by the constant energy of the
difference; obtain the addition formulas; use the alternating bounds
sin x >= x-x^3/6 > 0 on (0,2] and cos 2 <= -1/3; define gamma as the unique
zero of cos in (0,2), then pi := 2 gamma. Reconcile the alternative first-sine-
zero convention only after the shift formulas show sin x > 0 on (0,pi) and
sin pi = 0. The limit sin x/x = 1 is then the derivative of sin at zero; the
sector-area argument remains only a false-statement/refutation item.
B: **Bartle & Sherbert's bound sqrt 2 < gamma < sqrt(6 - 2 sqrt 3)**, giving
2.828 < pi < 3.185; the classical x sin(1/x) and x^2 sin(1/x) restated (closing
the loop with RA-16's spline versions); **`fs-sin-x-over-x-by-sector-areas`**:
the standard calculus proof that lim sin x / x = 1 via sin theta < theta < tan
theta COMPARES SECTOR AREAS and is therefore circular (arXiv:1302.1167).
Level-8 wiring obligation (Alpha-8, 2026-07-26; CORRECTED 2026-07-27 per the
orchestrator):
`rem-classical-oscillator-is-sine-of-one-over-x` on
`limits-of-real-functions-examples` is owed a forward reference INTO this
page. A page-level forward reference is NOT expressible in the schema:
`forward_refs` takes item ids and fwdcheck rejects a dangling entry, a
wikilink to a page id from an item body is a hard `link-unplanned` error, and
`proved_here: false` is not a substitute (the ‡ tier means "never proved
here"; sine is planned, not deferred). The `forwardRefs` whitelist on the B
page in plan-spec.json is a plan-validator construct only, and the generated
ledger (research/forward-refs.md) cannot carry an entry until a `forward_refs`
is declared. So the remark is authored with NO link, reporting the sin(1/x)
statements as orientation only, and THIS NOTE is the memory of the
obligation: when this page is scaffolded, add the concrete oscillator/sine
item id to that remark's `forward_refs` so it gains the ↗ tier and the ledger
entry comes into existence.

**RA-29 Arc Length and Rectifiable Curves** <- RA-20, RA-22
**a curve is a MAPPING, not a point set** (Rudin Def 6.26 verbatim: two curves
with the same range can have different lengths); inscribed polygons; length as a
supremum; rectifiability; monotonicity under refinement; **rectifiable iff the
components are BV**, with length equal to the total variation; additivity;
invariance under monotone reparametrization; **invariance under translation and
rotation, and scaling by lambda under dilation** (the lemma that makes RA-30
work); **length = int |gamma'| for C^1 curves** (Rudin 6.27); arc-length
(unit-speed) reparametrization; lower semicontinuity under uniform convergence.
B: the graph of x sin(1/x) is continuous and non-rectifiable; the **Koch
snowflake** (infinite length, Hausdorff dimension log 4 / log 3); a simple arc of
infinite length with a tangent at every point; one of infinite length between
every pair of its points; **the Schwarz lantern**: inscribed polyhedra do NOT
compute surface area, so the arc-length definition has no two-dimensional
analogue and the RA-30 scaling argument is a fact about length alone.

**RA-30 pi: the Equivalent Characterizations** <- RA-29, RA-28, RA-19
t -> (cos t, sin t) is a bijection of [0, 2pi) onto the unit circle with unit
speed, so arc length equals the parameter; the circumference of a circle of
radius r is 2 pi r; **the ratio of circumference to diameter is one constant for
every circle, and equals pi** (from the scaling lemma; no calculus, no geometry
assumed); the area of the disc is pi r^2 via 2 int_{-1}^{1} sqrt(1 - x^2);
**A = Cr/2 is what forces the SAME pi into both formulas**; pi = 4 int_0^1
dt/(1+t^2); **Wallis' product**; **the Basel sum**; Weierstrass's 1841 proposal
pi/2 = int dx/sqrt(1-x^2); **Archimedes' bounds** 3 + 10/71 < pi < 3 + 1/7; the
**isoperimetric characterization** 4 pi A <= L^2; Stirling via Wallis;
`thm-all-definitions-of-pi-equivalent` (landmark); **Niven's proof that pi is
irrational**; remarks on Lindemann's transcendence and on Gauss-Legendre AGM,
Ramanujan and Chudnovsky. B: the circumference computed three ways; the disc area
by substitution; Niven worked in full; the **"pi = 4" staircase paradox**;
numerical Wallis and Basel.

**RA-31 Fundamental Trigonometric Identities** <- RA-28

requires: sine-cosine-and-the-definition-of-pi; finite-counting-and-binomial-coefficients.

DEFS: real polynomial, degree, leading coefficient and monic normalization;
Chebyshev polynomials T_n and U_n by recurrence.

THMS: the Pythagorean and parity identities for all six trigonometric
functions, always on their natural domains; cofunction, supplementary,
reflection, shift and periodicity identities (including the 3pi/4 evaluations
as substitutions, not as a competing primitive rule); sine and cosine
subtraction; addition and subtraction for tangent, cotangent, secant and
cosecant with every denominator condition displayed; double-angle,
power-reduction, triple-angle and signed half-angle identities;
product-to-sum and sum-to-product; the tangent-half-angle rational
parametrization; parametrization of the unit circle; harmonic addition;
polynomial factor-at-a-root and a root bound; Chebyshev degree, leading
coefficient and extreme-value facts; Chebyshev and binomial real multiple-angle
formulas; T_n/2^(n-1) is the minimax monic polynomial on [-1,1] for n >= 1.

B: a worked pi/12 verification; Morrie's law; the exact values at 18, 36 and
72 degrees; the first Chebyshev polynomials; a counterexample to an unsigned
half-angle formula; and a counterexample showing that the tangent addition
formula is false when its denominator/domain condition is omitted.

DEFER: Chebyshev orthogonality is deferred until the required improper-integral
machinery is on the spine. The differential Weierstrass substitution is
deferred to RA-32; this page proves only the rational parametrization.

**RA-32 Further Trigonometric Identities and Inverse Functions**
<- RA-31, RA-14, RA-25
**Lagrange's identities and the Dirichlet and Fejer kernels**; sums of infinitely
many angles; **Hermite's cotangent identity**, finite products and roots of
unity (product sin(k pi/n) = n/2^{n-1}); linear fractional transformations
(f_alpha o f_beta = f_{alpha+beta}); triangle identities (laws of sines, cosines,
tangents, cotangents; Mollweide; Ptolemy; the projection formula) and the
**conditional identities** for alpha + beta + gamma = 180 degrees; identities
without variables; **Euler's sine product** and the **cotangent partial-fraction
expansion by the Herglotz trick** (elementary, so no complex analysis needed);
Bernoulli- and Euler-number series for tan and sec. The **inverse trigonometric
functions** via RA-14's continuous-inverse theorem, their derivatives, their
power series, arctan x = int_0^x dt/(1+t^2), and the **Leibniz series** by Abel.
B: Machin's formula; numerical Leibniz; arcsin(sin x) is not x; arcsin is not
differentiable at +-1; **tan is unbounded on a bounded interval**;
sin(x^2) is bounded and continuous and NOT uniformly continuous.

**RA-33 The Complex Exponential and Euler's Formula** <- RA-28, RA-31, RA-25

requires: sine-cosine-and-the-definition-of-pi;
fundamental-trigonometric-identities; the-logarithm-and-general-powers;
completeness-and-uniform-continuity; rn-as-a-normed-space;
compactness-in-metric-spaces.

DEFS: C as R^2 with arithmetic and real embedding; complex integer powers;
conjugate, real and imaginary parts and modulus; the Euclidean metric,
convergence, Cauchy sequences and continuity; complex series, absolute
convergence, power series and radius; exp by its power series; complex
logarithms, the principal argument and principal logarithm, and principal and
multivalued powers; complex trigonometric and hyperbolic functions; complex
polynomials, degree, leading coefficient and monic normalization.

THMS: C is a field and complete; conjugation and modulus laws; the complex
binomial theorem; absolute convergence and rearrangement; Cauchy-Hadamard and
the absolutely convergent Cauchy product; convergence of exp everywhere;
exp(z+w)=exp(z)exp(w) and agreement with the real exponential; Euler's formula
by the power-series proof; Cartesian form, Euler's identity and modulus;
kernel and fibres of exp; unique principal polar form; surjectivity onto the
punctured plane; complex de Moivre; n-th roots and roots of unity and their
sum; classification of all logarithms; no continuous logarithm on all of the
punctured plane; the trigonometric/hyperbolic dictionary; and the fundamental
theorem of algebra by the minimum-modulus argument, with growth, attainment
and d'Alembert descent as explicit lemmas.

B: all values of i^i; all logarithms of -1; fifth roots of unity; complex sine
on the imaginary axis; failure of the principal-power exponent law; the
1=exp(2pi i) logarithm paradox; a continuous multiplicative map C -> C^x that
is not the standard exponential; and the complex geometric power series.

DEFER: termwise complex differentiation (no complex derivative is yet defined);
three alternative proofs of Euler's formula; exact-sequence terminology; path
integrals and path-dependence of logarithms. These are not used by any retained
claim.

### Block X: several variables

**RA-34 The Total Derivative in R^m -> R^n** <- RA-22, RA-16
a native Euclidean definition of a linear map R^m -> R^n, its unique matrix
representation and a norm bound, with an explicit future agreement seam to
the unbuilt general linear-map page; convex subsets of Euclidean space;
directional and partial derivatives; the total (Fréchet) derivative;
uniqueness; a local linear increment bound and differentiable implies
continuous; the derivative computes all directional and partial derivatives;
the Jacobian; the gradient and steepest ascent; algebra of derivatives; the
chain rule; a coordinate-telescoping lemma; continuous partials imply
differentiability; the mean-value inequality on convex open sets; and a zero
derivative on a convex open set implies constancy. The stronger connected-open
statement is deferred until connectedness and Euclidean polygonal
connectedness are legal dependencies.

B: the polynomial map (x,y) -> (1+x+2y+x^2, 2x+3y+xy) and its Jacobian;
xy/(x^2+y^2) (partials exist, discontinuous); x^2y/(x^4+y^2) (every
straight-line restriction tends to zero, but the function is discontinuous);
x^2y/(x^2+y^2) (all directional derivatives exist, not differentiable);
y(x^2+y^2)/x off x=0, extended by zero on x=0 (all directional derivatives
at zero vanish, but the function is discontinuous); and a locally constant
step map on the disconnected open set R minus {0} (zero derivative but no
global Lipschitz bound). The already-published differentiable-but-not-C1
example is not duplicated, and Lebl’s slit-annulus angle example is deferred
until its angle-function machinery is available.

**RA-35 Mixed Partials, Taylor, and Extrema in Several Variables** <- RA-34

requires: the-total-derivative; finite-counting-and-binomial-coefficients;
compactness-in-metric-spaces.

DEFS: $C^k$ maps and multi-index derivatives in Euclidean space; the Hessian
and critical points; multivariable Taylor polynomials; local and strict local
extrema; and definite, semidefinite and indefinite quadratic forms.

THMS: the rectangular second-difference lemma; Peano's and Young's mixed
partial theorems with their distinct hypotheses; Clairaut–Schwarz under
continuous second partials; Hessian symmetry; and invariance of continuous
higher mixed partials under finite permutations. Restriction to a line and the
multinomial theorem give multivariable Taylor formulas with Lagrange and Peano
remainders. Fermat's necessary condition and a compact-sphere bound for
definite quadratic forms give the multivariable second-derivative test and its
two-variable determinant corollary. The constrained-extremum result is limited
to velocities of an explicit differentiable parametrization, with a Lagrange
multiplier corollary for a regular graph constraint.

B: Peano's unequal mixed partials; $(y-3x^2)(y-x^2)$ and its smooth flat
refinement, each minimized on every line through the origin but not at a local
extremum; a unique critical point that is a nonglobal strict local minimum;
the monkey saddle; strict minimum, strict maximum and saddle examples with zero
Hessian; a computed second-order Taylor polynomial; an affine graph constraint;
and a degenerate constraint for which the multiplier conclusion fails.

DEFER: Morse's lemma and the arbitrary regular-level-set Lagrange multiplier
theorem require the inverse or implicit function machinery of
`the-inverse-and-implicit-function-theorems`. A semidefinite Hessian is stated
to be inconclusive, not as a classification case.

**RA-36 The Inverse and Implicit Function Theorems** <- RA-35, RA-23
the contraction mapping theorem (Banach) in R^n; **the inverse function
theorem**; **the implicit function theorem**; the rank theorem; diffeomorphisms.
B: polar coordinates as a local diffeomorphism; the implicit function theorem on
the circle; **the complex squaring map (x^2 - y^2, 2xy)** has invertible
derivative everywhere and is globally 2-to-1 (the IFT is irreducibly local);
**x + 2x^2 w(1/x)** has f'(0) = 1 and is injective on no neighbourhood, so the
IFT genuinely needs C^1 and not mere differentiability; f(x,y) = (x, xy);
the **Jacobian conjecture** as a live open problem.

**RA-37 The Riemann Integral in R^m and Jordan Content** <- RA-18, RA-22
for m>=1, axis-parallel rectangles, grid partitions, common refinements and
mesh; multidimensional Darboux and tagged sums; Riemann's criterion and the
agreement of the two integral definitions; and the dictionary with the
one-dimensional Riemann integral on R. Nullity uses countable cube covers and
content zero uses finite cube covers, while Jordan outer content uses finite
rectangle covers. The development proves the multidimensional Lebesgue
criterion from an explicit cover-to-grid lemma; Jordan inner and outer content;
the indicator and boundary criteria; the well-defined integral over a Jordan
measurable set; finite additivity; the equal-dimensional theorem that Lipschitz
maps R^m to R^m preserve null sets; and content zero for graphs of continuous
functions.

B: the unit-box computation; rational points in the unit square as a bounded
null set without Jordan content; compact and bounded-open fat-Cantor examples;
a parabola graph; the right triangle; a Cantor slab; and the terminological
warning that Munkres uses "rectifiable" for Jordan measurable sets. The
one-dimensional null/content-zero agreement is explicit because R^1 and R are
isometric rather than literally identical. A general C^1-image theorem is
deferred until the total derivative and compact local-Lipschitz machinery are
built. Fubini, iterated integration, and change of variables belong to RA-38
and are not used here.
Level-8 note (Alpha-8, 2026-07-26): any integer-part / floor step on this page
(mesh counts, grid-cube counts) cites `lem-integer-part`
(`limits-of-real-functions`); do not rebuild it inline. And per the level-8
additions note at the top of this file, `thm-euclidean-space-complete` and its
companions are stated for n >= 1 only.

**RA-38 Fubini and Change of Variables** <- RA-37, RA-36
**Fubini for the Riemann integral, stated with UPPER AND LOWER integrals**
because the sections of an integrable function need not be integrable (the
version students most often get wrong); Fubini over type I and II regions;
partitions of unity; **the change of variables theorem** via Rudin's
factorization into primitive maps and flips; the linear case and the determinant;
polar, cylindrical and spherical coordinates; the volume of the n-ball;
**the Gaussian integral = sqrt(pi)**, closing the loop with RA-30; improper
multiple integrals by exhaustion. B: **Lebl Ex. 10.2.1** (f integrable on the
square with a non-integrable section: exactly why upper and lower integrals are
needed); (x^2 - y^2)/(x^2 + y^2)^2 has iterated integrals pi/4 and -pi/4;
a nonnegative f with both iterated integrals 0 and no double integral;
1_diagonal under Lebesgue times counting measure (Tonelli needs sigma-finiteness);
**Sierpinski's CH example**; change of variables fails without injectivity;
**Gabriel's horn** (finite volume, infinite lateral surface).

### Block XI: the fundamental theorems

**RA-39 The Fundamental Theorems of Calculus** <- RA-19, RA-20, RA-11
`rem-ftc-roadmap`. **FTC I in three strengths**: continuous f; **Rudin's pointwise
form** (f Riemann integrable makes F Lipschitz, and F' = f at every point of
continuity of f); and the Lebesgue statement. **FTC II in five strengths**:
f in C^1; **the weakest standard form** (f differentiable with f' Riemann
integrable, no continuity of f' assumed); **Rudin 6.21 requires differentiability
on the CLOSED interval while Lebl 5.3.1 requires only continuity on [a,b] plus
differentiability on (a,b)**, and **Bartle & Sherbert state it with a finite
exceptional set** (three genuinely different theorems, three items);
**Botsko's theorem** (countable exceptional set, with continuity of F
indispensable); and the absolutely continuous / Lebesgue form as the sharp
characterization. Antiderivatives differ by a constant; integration by parts and
substitution under the weakest hypotheses; **Leibniz's rule** for differentiating
under the integral sign; **Banach-Zarecki** (AC iff continuous, BV, and Luzin (N));
**Cousin's lemma** and a remark on the Henstock-Kurzweil repair.
B: **Volterra's function** (differentiable with bounded derivative that is not
Riemann integrable, on a fat Cantor set) as the centrepiece; **the Cantor
function** (continuous, increasing, C' = 0 a.e., int C' = 0 != 1); F(x) =
x sin(1/x) showing exactly how much slack the strong form has over the corollary;
sgn on [-1,1] (F = |x| is not differentiable at 0); Thomae (F == 0 so F' != f on
a dense set); a Riemann-integrable function with no primitive on any interval;
two continuous functions with everywhere-identical extended derivatives that do
not differ by a constant; **int_0^infinity sin x / x = pi/2** exists improperly
but is not Lebesgue integrable.

**RA-40 Line Integrals and the Gradient Theorem** <- RA-39, RA-34, RA-29
line integrals; conservative fields; closed and exact forms; star-shaped and
simply connected domains; **the gradient theorem** (the FTC for line integrals);
path independence iff conservative iff a gradient; the **Poincare lemma** on
star-shaped domains; **Green's theorem**; the arc-length function satisfies
s' = ||gamma'||, closing the loop with RA-29; `rem-stokes-outlook`.
B: **the vortex field** P = -y/(x^2+y^2), Q = x/(x^2+y^2), closed and not exact
on the punctured plane with circulation 2 pi (where topology enters analysis);
a solenoidal field on a simply connected region with no vector potential;
Green's theorem used to compute an area; Leibniz's rule failing without
domination.

---

# Scope denials

Added by Alpha-F1, 2026-07-28, in the style of the "Scope denials" sections of
`research/plan-topology-set-theory-track.md` and
`research/plan-combinatorics-and-categories.md`, because this file had none and
the `frontier-1` drops needed a record rather than a note buried in a page's
inventory line. **A dropped result is deferred, not deleted**, and every entry
names what would license it. Entries 1–3 are RA-19
(`properties-of-the-integral-and-the-working-ftc`, spec order 161), entries 4–7
are RA-22 (`rn-as-a-normed-space`, spec order 167). Source:
`research/frontier-1-batch-2.notes.md` §4, adjudicated in
`research/frontier-1-RESUME.md`. Orders verified against
`research/plan-spec.json`, 2026-07-28.

This section is distinct from **D-SCOPE** below: D-SCOPE lists results the
library states with a reference and never proves; these are results the plan
still intends to prove, at a page that does not exist yet.

1. **Arzelà's bounded convergence theorem (1885)** (RA-19). In scope in
   principle — a theorem about the Riemann integral, predating Lebesgue — but
   Beta-F1-2 could not certify a complete proof route at scaffold time: the
   elementary proofs (Luxemburg 1971; Lewin, AMM 93 (1986) 395–397; Arzelà–
   Osgood) all turn on the outer content of $\{g_n \ge \varepsilon\}$ tending to
   $0$, and Jordan outer content is not countably additive. Licensed by: a
   session that writes out one of the named proofs as its own lemma chain, or
   dominated convergence once a measure track exists. The motivating
   counterexample (spikes of integral $1$ converging pointwise to $0$) IS
   scaffolded on RA-19's companion and asserts nothing about the bounded case.
2. **Taylor's integral remainder** (RA-19). Needs higher derivatives, homed on
   `darboux-lhopital-and-taylor` at order **155** — earlier in plan order than
   161, but unbuilt, so nothing at 161 may cite it. Licensed by: page 155, and
   it is better homed THERE, beside the Lagrange, Cauchy and Peano forms, citing
   161's `thm-integration-by-parts`.
3. **The improper-integral reading of the integral test** (RA-19).
   `improper-integrals` is order **165**, above 161. The PROPER-integral form is
   scaffolded: the conclusion is that $(\int_0^N f)_N$ is bounded, not that
   $\int_0^\infty f$ converges. Licensed by: page 165.
4. **The operator norm, and "linear maps are Lipschitz"** (RA-22). There is no
   definition of a linear map anywhere in the published corpus;
   `linear-maps-rank-nullity-and-quotient-spaces` is order **76**, earlier in
   plan order and unbuilt. Minting one at 167 would re-mint an earlier page's
   canonical object. Licensed by: page 76 — after which both are a short
   addition to 167, and the operator norm is what `the-total-derivative` (order
   229) will want.
5. **The reverse inclusion of Lévy–Steinitz, and Sierpiński's refinement**
   (RA-22). Needs the orthogonal decomposition of
   `inner-product-spaces-and-orthogonality` (order **94**, earlier and unbuilt)
   and a finite-dimensional convex-separation argument that no planned page owns
   (`convexity` at 157 is about convex FUNCTIONS on intervals). Licensed by:
   pages 94 and 76 plus a convex-separation item; the discharge is an ADDITION
   to page 167 itself. The Steinitz polygonal-confinement theorem and the
   CONTAINMENT half ARE scaffolded — see the level-9 inheritance note on RA-22.
6. **$t \mapsto (\cos t, \sin t)$ on $[0,2\pi]$ as the mean-value witness**
   (RA-22). The trigonometric functions are order **179**, above 167, and the
   level-9 plan to forward-cite them is superseded by the self-contained-scope
   rule of 2026-07-27. Licensed by: order 179. $t \mapsto (t^2, t^3)$ is
   scaffolded in its place and the substitution is recorded in the item, so a
   reader who knows the classical example is told why it is absent.
7. **Abstract inner-product-space theory** — orthonormal bases, Gram–Schmidt,
   orthogonal projection (RA-22). `inner-product-spaces-and-orthogonality` is
   order **94**, earlier in plan order and unbuilt. Licensed by: page 94. Only
   the CONCRETE Euclidean dot product on $\mathbb{R}^n$ is defined at 167, with
   a scope note saying so.

---

# Count

40 pairs = 80 pages. A pages average ~18 items, B pages ~12, so roughly
40 x 30 = **1,200 items** for real analysis alone.

# Decisions this design raises (for the owner, one at a time)

**D-TRIG.** Blocks VI-VIII (RA-15 through RA-25) come BEFORE trigonometry is
constructed, because sin and cos need power series, which need uniform
convergence, which needs the MVT. The classical counterexamples there
(x^2 sin(1/x), sin(nx), the Weierstrass function, cos x + i sin x) therefore
cannot be stated in their usual form at that point. Three options:
  (a) trig-free substitutes throughout (the Hermite spline w built from
      t^2(3 - 2t), and psi = dist(., Z)), with RA-28B restating the classical
      forms. Self-contained, but non-standard notation for a reader.
  (b) let the B pages forward-cite RA-28, since B pages are leaves and no cycle
      results. Standard notation, but a reader at RA-16B sees a prerequisite 12
      pages later.
  (c) BOTH: spline version on the A page's false statements (self-contained) and
      classical version on the B page (forward-citing). Shows the phenomenon does
      not depend on trigonometry. Costs roughly 8 extra items.
  My recommendation: (c).
  **SETTLED 2026-07-25: (c).** The PROVED item is always trig-free, so nothing
  early depends on anything late; beside it sits a `rem-` naming the classical
  trig form. Those remarks are the only forward citations in the whole stack.
  They are now WHITELISTED per page in `plan-spec.json` (`forwardRefs`), and
  `validate-plan.mjs` permits them there and nowhere else, reporting each one
  rather than hiding it. Any further forward citation is a hard error.
  **CORRECTED (Alpha-F1, 2026-07-28), read off `research/plan-spec.json`: the
  grandfathered entries are RA-04, RA-10, RA-12, RA-15, RA-18, and RA-23, each
  carrying the single target `sine-cosine-and-the-definition-of-pi`. Frontier-6
  removed RA-16's stale entry because its polynomial oscillator closes every
  planned example without trigonometry. RA-13
  (`continuity-ivt-evt-and-uniform-continuity-examples`, order 138) is NOT on it,
  and neither is RA-22's companion `rn-as-a-normed-space-examples` (order 168).**
  **And option (c) no longer licenses a NEW forward citation.** The
  self-contained-scope rule (owner, 2026-07-27) supersedes it for anything
  scaffolded after that date: a page above the trig block states the trig-free
  version and nothing else. The whitelist above is grandfathered, not extensible
  — this is exactly why RA-22 drops $t \mapsto (\cos t, \sin t)$ rather than
  forward-citing RA-28 as this decision once contemplated (scope denial 6).

**D-MVT.** Adopt Rudin's ordering, proving Cauchy's MVT first and obtaining the
ordinary MVT as the case g(x) = x. The sweep flags this as "a real alternative
dependency graph, not a stylistic quirk". Cheaper and it shortens the
stratification. Recommend yes.

**D-SPLIT-INTEGRAL.** The working FTC (continuous integrands) sits on RA-19
because RA-27 (log as an integral) and RA-29 (arc length) both need it; RA-39 is
the definitive treatment. Unchanged from my earlier proposal, still needs sign-off.

**D-SCOPE.** State-with-reference rather than prove: Lebesgue's differentiation
theorem, the AC/Lebesgue FTC, Henstock-Kurzweil, Lindemann-Weierstrass
transcendence, the Jacobian conjecture, Gauss-Legendre AGM, Wiener's Tauberian
theorem, Morse's lemma (or prove it), Green's theorem (or prove it).
