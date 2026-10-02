# Step 1 research: exterior three-value extension

## Finding

Batch 26's proposed exterior Poisson–Jensen/SMT argument remains incomplete. The plane Poisson–Jensen formula does not supply boundary terms for an exterior domain. After inversion, the problem is on a punctured disc, and an inner boundary survives in every annular exhaustion. The batch notes correctly record that neither its contribution to a logarithmic-derivative/SMT estimate nor the final exterior growth criterion was verified.

A separate normal-family proof does repair the exterior-extension claim without strengthening its axiom hypothesis. It can be reconstructed from the published Schottky theorem using an explicit countable diagonal extraction, without invoking the repository's AC-dependent Montel/Arzelà–Ascoli items. The argument below is choice-free as written, so it also proves the current Countable Choice statement. This route does not derive Great Picard from the new plane SMT; it bypasses the exterior-boundary problem.

Read-only status was recomputed for frontier-37-owner-30. At 2026-09-29T19:27:08Z the run was active at 1-scaffold, held for owner repair; batch 26 was among the artifact-incomplete units. No run-state command was issued beyond status.

## Exact escalated manifest items

The records are in research/frontier-37-owner-30-batch-26.pages.json (item records begin at lines 356 and 388). Their current escalation records are research/frontier-37-owner-30-step1-lem-nevanlinna-exterior-three-value-extension.json and research/frontier-37-owner-30-step1-cor-nevanlinna-picard-theorems.json.

**lem-nevanlinna-exterior-three-value-extension** has this exact statement:

> Assume Countable Choice. If g is meromorphic on |w|>R and omits three distinct sphere values on |w|>R_1 for some R_1>R, then g extends meromorphically across w=infinity.

Its current dependencies are def-nevanlinna-exceptional-radius-notation, def-nevanlinna-truncated-and-ramification-counts, thm-poisson-jensen-formula-meromorphic-function, and def-countable-choice. Its exact proof strategy is:

> Proposed local route: define an exterior characteristic using a base-circle annular Poisson-Jensen formula; prove an exterior logarithmic-derivative/SMT estimate with its inner-boundary O(log r) contribution; three omitted values then force exterior characteristic O(log r), and an exterior growth criterion would imply extension. The published full-disc Poisson-Jensen theorem does not establish the annular boundary terms. The complete estimate and extension implication are not yet verified in the read sources.

Its escalation reason is: “Escalated: The plane SMT sources do not prove the necessary exterior-domain inequality or its boundary control; no independent complete local proof has been verified.”

**cor-nevanlinna-picard-theorems** has this exact statement:

> Assume Countable Choice. A nonconstant meromorphic function on C omits at most two sphere values, so a nonconstant entire function omits at most one finite value. If a meromorphic function has an isolated essential singularity at z0, every punctured neighborhood assumes every sphere value, with at most two exceptions, infinitely often; for a holomorphic punctured-disc function at most one finite value is exceptional.

Its exact proof strategy is:

> For the plane claim, three omitted targets give T<=S by SMT; growth separation contradicts this for transcendental f, while a nonconstant rational P/Q assumes every sphere value except possibly P(infinity)/Q(infinity) by the Fundamental Theorem of Algebra. An entire map already omits infinity. For the local claim, if three values occur only finitely often near z0, shrink the puncture to omit them, invert w=1/(z-z0), and invoke the exterior-extension lemma to contradict essentiality. This local part remains conditional on that escalated lemma; CA-23 is an agreement seam and is not consumed.

Its current dependencies are thm-nevanlinna-second-main-theorem, lem-nevanlinna-growth-dominates-logarithm, lem-nevanlinna-exterior-three-value-extension, thm-rational-functions-characterized-by-logarithmic-characteristic, thm-fundamental-theorem-of-algebra-liouville-proof, and def-countable-choice. Its escalation reason is: “Escalated: The full design claim includes arbitrary finite punctures. The plane SMT proves only the infinity case, and the exterior-extension supplier is escalated.”

The contemporaneous batch notes, research/frontier-37-owner-30-batch-26.notes.md §“Escalation for finite-puncture Great Picard,” likewise identify the surviving inner boundary and record that no exterior estimate was established. No existing published Picard result was used in that batch.

## Full-text source checked

Aleksander Simonič, *The Ahlfors lemma and Picard’s theorems*, arXiv:1506.07019v1, 18 pages, submitted 22 June 2015: https://arxiv.org/abs/1506.07019v1. I fetched the complete PDF from https://arxiv.org/pdf/1506.07019v1 and read the relevant full-text pages. The PDF is 302,585 bytes, SHA-256 90ecc7e241f08402f81c1b62b13d79c8dc01febe15fcb4af328b2bbf335339bb.

Exact locators:

- §5.3, printed p. 13, Theorem 11 (Schottky): a holomorphic map from a disc into the plane omitting two distinct values is bounded on every smaller concentric disc, with a bound depending only on the center bound and radii. This is the estimate used below.
- §5.4, printed p. 14, Theorem 13: a family of holomorphic functions on a plane domain omitting two distinct finite values is normal. The proof reduces to omitting 0 and 1 and uses Schottky bounds, Montel's theorem, and Hurwitz's theorem.
- §5.4, printed p. 15, Theorem 14 and proof: for a holomorphic function on the punctured unit disc with an essential singularity at 0, a sectorial Big Picard theorem follows by rescaling to annuli, applying normality, and using boundedness on shrinking circles. The introduction on printed p. 3 states the equivalent local extension principle: a holomorphic function on a punctured neighborhood that omits two distinct values has a removable singularity or a pole.

This is a full-text source for the Schottky/normal-family route. The explicit extraction below fills in the choice bookkeeping rather than importing the library's general AC-dependent normality theorem.

## Why the existing published Picard lemma cannot be reused under the manifest hypothesis

The published lem-two-omitted-values-rule-out-an-essential-singularity explicitly assumes the full Axiom of Choice and directly depends on def-axiom-of-choice and thm-montel-caratheodory-theorem. The latter explicitly assumes full AC and invokes thm-chordal-arzela-ascoli-criterion-for-meromorphic-families, whose contract also assumes AC (and mentions Countable Choice and Dependent Choice for its general successive subsequence selections). Therefore that already-published route is not a valid proof of the current Countable-Choice claim. Raising this item and its consumer to AC would weaken the manifest claim.

A specialized sequence argument avoids those general choice-bearing suppliers. The published thm-schottky-theorem has no AC premise; apply it directly and construct the required subsequence explicitly as follows.

## Local omitted-values proof by explicit diagonal extraction

It suffices first to prove: if h is holomorphic on 0<|z|<r0 and omits 0 and 1 there, then h is removable or has a pole at 0.

1. Choose 0<rho<r0/4, set rho_n=rho 2^(-n), A={1/2<|zeta|<2}, and h_n(zeta)=h(rho_n zeta). Each h_n is holomorphic on A and omits 0,1. Let K={3/4<=|zeta|<=5/4}; it is a compact band in A.
2. The family (h_n) is uniformly chordally equicontinuous on K. Fix a in K and choose a fixed delta>0 so that every disc D(a,2 delta), a in K, lies in A. For each n, if |h_n(a)|<=2 use t_n=h_n; otherwise use t_n=1/h_n, whose center modulus is <1/2. In either case t_n is holomorphic, omits 0,1, and has center modulus <=2. Rescale D(a,2 delta) to the unit disc and apply thm-schottky-theorem with center bound 2 and inner radius 1/2. It gives a common bound C on D(a,delta). Cauchy estimates give a common derivative bound for t_n on D(a,delta/2). Identity and reciprocal are chordal isometries, so this derivative bound gives a common chordal modulus of continuity for h_n near every a in K, uniformly in n.
3. Fix a countable dense sequence q_1,q_2,... in K consisting of rational complex points. At a fixed q_j, any sequence of values h_n(q_j) has a convergent subsequence in the chordal sphere: embed the sphere as S^2 in [-1,1]^3, and at stage k partition that cube into finitely many ordered dyadic boxes of diameter tending to zero. Among the current infinite index set, some box contains infinitely many values; retain the first such box's indices. This is a deterministic rule (finite ordering and least-index selection), and recursion produces a convergent subsequence. Apply this rule successively at q_1,q_2,..., each time to the preceding subsequence, and take the diagonal subsequence. Because every selection is prescribed by a least box, this countable recursion uses no choice principle.
4. The diagonal subsequence converges pointwise on the dense rational set. Equicontinuity and compactness of K imply it is uniformly chordally Cauchy on K: for any epsilon, cover K by small balls centered at rational points and take the least coded finite subcover; then take the maximum of the finitely many pointwise Cauchy thresholds and use the common modulus of continuity. The chordal sphere is complete, so the subsequence converges uniformly on K to H.
5. On U={3/4<|zeta|<5/4}, this is chordal local uniform convergence of holomorphic functions. By thm-chordal-limit-theorem-for-meromorphic-functions, H is holomorphic on U or identically infinity. In the finite case, H is bounded on |zeta|=1; a sufficiently small chordal neighborhood of this compact finite image is bounded in C, so uniform chordal convergence gives a Euclidean bound for h_n along the selected subsequence on that circle. In the infinite case, uniform convergence to infinity gives |h_n|>1 there eventually, hence a bound for 1/h_n.
6. Returning to h, the corresponding circles are |z|=rho_(n_k), with n_k strictly increasing. In the finite case h is bounded on all these circles; in the infinite case 1/h is bounded on all these circles. The boundary maximum modulus principle on each intervening closed annulus rho_(n_(k+1))<=|z|<=rho_(n_k) propagates the same bound throughout. These adjacent annuli cover a punctured neighborhood of 0. Thus h or 1/h is bounded near 0. The removable-singularity theorem extends h in the first case; in the second it extends 1/h, so h is removable if the extended reciprocal is nonzero at 0 and has a pole if it vanishes there.

Now take the manifest exterior g. By an explicit Möbius map M send its three omitted sphere values to 0,1,infinity and define h(z)=M(g(1/z)) on 0<|z|<1/R_1. Since h omits infinity it is holomorphic, and it omits 0 and 1. The preceding proof makes h meromorphic at 0. Applying M^(-1) and returning to w=1/z gives the required meromorphic extension of g at infinity.

## Axiom costs and item-level repair

For the reconstructed route, the relevant existing suppliers have no AC premise: thm-schottky-theorem, Cauchy estimates, thm-chordal-limit-theorem-for-meromorphic-functions, the boundary maximum modulus theorem, and removable/pole characterizations. Compactness and rational density for the specific compact band can be established with the choice-free Heine–Borel theorem and an explicit rational grid. The diagonal extraction above uses a least element of a finite ordered cover at each stage, not countable or dependent choice. Accordingly, do not list def-axiom-of-choice or reuse the AC-dependent omitted-values/Montel suppliers. The exterior lemma itself can be strengthened to a no-choice statement and its def-countable-choice dependency removed; this certainly preserves its existing Countable Choice claim.

Suggested direct proof dependencies for the exterior item:

- thm-three-point-transitivity-mobius-transformations and thm-mobius-transformations-biholomorphic-sphere, for normalizing the omitted targets and returning from the target coordinate;
- thm-schottky-theorem and lem-cauchy-estimates-on-concentric-subdiscs, for chordal equicontinuity on the fixed band;
- thm-rational-points-and-boxes-in-rn, thm-heine-borel-rn, and thm-recursion, for the explicit dense-set diagonal construction;
- def-chordal-metric-riemann-sphere, thm-chordal-metric-induces-sphere-topology, and thm-compact-implies-complete-and-totally-bounded, for the compact complete chordal target;
- thm-extreme-value-metric, to bound the finite holomorphic limit on the unit circle;
- thm-chordal-limit-theorem-for-meromorphic-functions, thm-boundary-maximum-modulus-principle, thm-removable-singularity-characterizations, and thm-pole-characterizations, for the limit and extension steps.

Do not depend on lem-two-omitted-values-rule-out-an-essential-singularity, thm-montel-caratheodory-theorem, or thm-chordal-arzela-ascoli-criterion-for-meromorphic-families; their stated contracts import full AC. Add the Simonič full-text citation at §5.4, pp. 14–15 (p. 3 for the equivalent extension formulation), while recording that the rational diagonal extraction is the explicit local reconstruction.

The consumer cor-nevanlinna-picard-theorems can keep its Countable Choice assumption and current SMT dependencies: its plane branch spends CC, while the new exterior lemma no longer raises the axiom cost. Its local proof can continue to shrink the puncture and invoke this lemma. No CA-23 dependency is needed, so the proof remains acyclic.

No direct exterior-domain SMT proof was found in the inspected sources. If the requirement is specifically a Nevanlinna-only proof, keep the escalation until an actual annular/exterior formula controls the inner-boundary contribution and a complete exterior growth-to-extension argument is supplied. This note changes no manifest, decision, plan, or run state.
