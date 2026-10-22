# Research-only prerequisite: free/wired comparison and exceptional parameters

Owner: /root/qft_graph_scaling. Run: physics-non-fluid-129-2026-10-21-r2.
This is a local proof manuscript, not an item, readiness record or acceptance.
Source integration is on hold pending Root release.

## Stable intended helper interface

Fix finite real q≥1. The free and wired square-lattice FK cylinder limits are invariant under translations and quarter-turns. Every cylinder limit with arbitrary boundary partitions is bounded between the free and wired limits on increasing cylinder events. There is an at most countable set D_q⊂(0,1) such that the free and wired measures are equal for p∉D_q. For 0<p<p'<1,

θ¹(p,q) ≤ θ⁰(p',q).

In particular, wired positivity at every parameter above a number p_s implies free positivity at every parameter above p_s. Combined with zero wired percolation below p_s, this gives both thresholds p_s, without any equality assertion at p_s.

The proof uses the current finite FK weights, finite spatial Markov/boundary monotonicity, and existence/uniqueness of free/wired cylinder limits. It needs no graph-specific criticality input, no percolation uniqueness theorem and no external proof import.

## 1. Exhaustion invariance and boundary comparison

The spatial Markov property gives comparison of finite laws in any two nested boxes on every increasing cylinder function supported in the smaller box: enlarging a free box increases its restriction, and enlarging a wired box decreases its restriction. This is exactly the argument of current lem-csm-frontier-fk-free-wired-limits, and is independent of the centers of the two boxes.

For a fixed translation z∈Z², let r=||z||∞. The translated boxes Λ_n+z lie between Λ_{n-r} and Λ_{n+r} for n>r. For every fixed increasing cylinder function f, its support eventually lies in all three boxes, and the corresponding free expectations are sandwiched between the two unshifted expectations (reverse sandwich for wired expectations). Both endpoints have the same unique cylinder limit. The translated limit therefore equals the original limit on all increasing cylinders. In particular, all-open finite-edge events have the same probabilities; finite inclusion-exclusion recovers every cylinder atom. This proves translation invariance of each measure. Quarter-turn invariance follows directly because Λ_n, its free/wired partition, and its FK weights are invariant under quarter-turns. Thus every lattice edge has the same open probability u_b(p,q) in the state b∈{0,1}, including the two orientations.

For an arbitrary-boundary cylinder limit ν, fix an increasing cylinder f and a box Λ_r containing its support. In every sufficiently large approximating box, conditioning on edges exterior to E_r gives an induced partition on ∂Λ_r. Boundary monotonicity gives

φ^0_{r,p,q}(f) ≤ ν_j(f) ≤ φ^1_{r,p,q}(f).

First pass to the defining cylinder limit j→∞, then let r→∞. This gives φ^0_{p,q}(f)≤ν(f)≤φ^1_{p,q}(f). Taking the original free/wired laws also gives their stochastic order on increasing cylinders.

## 2. A common convex pressure proved by elementary tiling

Write h=log(p/(1-p)), v=e^h>0. For any finite graph and boundary partition b define the activity partition function

Y_G^b(h)=Σ_{A⊂E(G)} exp(h|A|) q^{k_b(A)}.

It differs from the p-normalized partition function only by the configuration-independent factor (1-p)^{-|E|}. Let Q_N={0,…,N−1}² and use all its internal nearest-neighbor edges. Put

F_N^b(h)=N^{-2} log Y_{Q_N}^b(h).

At q≥1, 1≤q^{k(A)}≤q^{N²}, so

0≤F_N^0(h)≤log q+2 log(1+e^h).

For fixed L, write N=kL+s, 0≤s<L. Tile the lower-left kL-by-kL square by k² disjoint L-by-L vertex boxes and leave all remaining vertices as singletons. Restricting the sum defining Y^0_{Q_N} to configurations that close every edge between distinct tiles/singletons gives exactly

Y^0_{Q_N}(h) ≥ (Y^0_{Q_L}(h))^{k²} q^{N²−k²L²}.

The closed intertile edges have activity factor 1, the graph components in distinct pieces are separate, and isolated singleton vertices contribute q. Divide logarithms by N² and pass N→∞ to obtain

liminf_N F_N^0(h) ≥ F_L^0(h)

for every L. The finite upper bound above makes S(h)=sup_L F_L^0(h) finite. Since every F_N^0≤S, limsup_N F_N^0≤S≤liminf_N F_N^0. Therefore the limit F(h)=S(h) exists.

For any partition ξ of the vertex boundary B_N, identifying its classes decreases the number of components by an integer between 0 and |B_N|−1. Consequently

q^{-(|B_N|−1)}Y^0_{Q_N}(h) ≤ Y^ξ_{Q_N}(h) ≤ Y^0_{Q_N}(h).

Since |B_N|≤4N and q is fixed, every boundary partition, including wired, has the same normalized logarithmic limit F(h). The N=1 box is harmless; it is not used to divide by its zero edge count.

Each F_N^b is smooth and convex, with

(F_N^b)'(h)=N^{-2} E^b_{Q_N,h,q}|A|,
(F_N^b)''(h)=N^{-2} Var^b_{Q_N,h,q}(|A|)≥0.

Passing its convex inequality to the finite pointwise limit proves F is convex on R.

## 3. Only countably many exceptional h

For a finite convex function on R, its secant slopes are ordered. For every h, slopes over (h−t,h) increase to a finite left derivative F'_−(h), while slopes over (h,h+t) decrease to a finite right derivative F'_+(h); local finiteness follows by bounding them between secants to fixed endpoints on either side of h. One has F'_−≤F'_+, and h<k implies F'_+(h)≤F'_−(k). Thus the nonempty open intervals (F'_−(h),F'_+(h)) for points of nondifferentiability are disjoint. Assign to each such interval its first rational in a fixed enumeration of Q. This is an injection into Q, so there are at most countably many such h. Let D_q be their image under h↦e^h/(1+e^h).

At a differentiability point h, convexity gives, for every t>0,

(F_N^b(h)−F_N^b(h−t))/t ≤ (F_N^b)'(h)
≤ (F_N^b(h+t)−F_N^b(h))/t.

Take liminf/limsup as N→∞ using the common pressure limit from §2, then t↓0. This proves (F_N^b)'(h)→F'(h) for both b=0,1.

## 4. Equality of measures at differentiability points

Compare any finite free box with the infinite free limit on each of its edges using volume monotonicity. By translation/quarter-turn invariance, its edge probabilities are at most u_0. Each finite wired edge probability is at least u_1. There are 2N(N−1) internal edges in Q_N, so

(F_N^0)'(h) ≤ (2−2/N)u_0 ≤ (2−2/N)u_1 ≤ (F_N^1)'(h).

At a differentiability point, the outside quantities both tend to F'(h). Hence 2u_0=F'(h)=2u_1.

Here is an explicit cylinder argument turning equal one-edge means into equal measures; it avoids invoking an unproved infinite-volume coupling theorem. In any fixed finite box, run free and wired random-scan heat-bath chains with the same edge choices/uniforms from the all-closed configuration. The conditional FK edge formula preserves order. Both chains converge to their own finite FK laws because every update probability lies strictly between zero and one and the finite chain is irreducible/aperiodic. For every event A determined by a finite edge set H and every time t, their coupled configurations satisfy

|P(ω_t^1∈A)−P(ω_t^0∈A)|
≤P(ω_t^1|_H≠ω_t^0|_H)
≤Σ_{e∈H}(Eω^1_{t,e}−Eω^0_{t,e}).

The last inequality uses order and a union bound. Let t→∞, then let the finite box tend to the whole lattice. The cylinder limits give

|φ^1(A)−φ^0(A)| ≤ |H|(u_1−u_0)=0.

Thus all cylinder atoms agree. They determine the product probability measure: the class of sets with equal probabilities is a Dynkin class containing the finite-coordinate cylinder π-system, so the elementary π–λ argument gives equality on the product σ-algebra. This proves φ^0_{p,q}=φ^1_{p,q} for p∉D_q.

## 5. Sprinkled comparison and threshold consequence

Finite FK laws are increasing in p, so their limiting cylinder probabilities are as well. For fixed 0<p<p'<1 choose r∈(p,p')\D_q (a countable subset cannot fill a real interval). For the increasing cylinder event A_R={0 connects by an open path inside Λ_R to ∂Λ_R},

φ^1_{p,q}(A_R) ≤ φ^1_{r,q}(A_R)=φ^0_{r,q}(A_R)≤φ^0_{p',q}(A_R).

The events A_R decrease in R: truncate a path at its first hit of a smaller box boundary. Their intersection is precisely the event that the open origin cluster is unbounded, which is the earlier definition of 0↔∞. Continuity from above gives θ^1(p,q)≤θ^0(p',q).

If the wired construction supplies θ^1(p,q)>0 for every p>p_s, then for every p'>p_s choose p∈(p_s,p'); the last inequality gives θ^0(p',q)>0. If wired percolation is zero for p<p_s, boundary domination gives free percolation zero there too. Thus both nonempty defining sets of percolating parameters have infimum p_s. This does not identify either measure or percolation probability at p_s.

## Exact source reading and limits

Fetched the actual complete 388-page Grimmett book from https://www.statslab.cam.ac.uk/~grg/books/rcm1-1.pdf (4,232,359 bytes). Personally read Section4.5 from its opening through the proof of Theorem4.63, printed85–91 / PDF95–101, including Theorem4.58, equations4.54–4.78 and the finite-pressure proof. The proof above supplies the particular q≥1 one-variable tiling argument, explicit countability/slopes and finite heat-bath mismatch estimate locally. It does not import Theorem4.63, its stronger equivalences, two-variable differentiability or its later proof of Theorem4.60. No personal reading of unrelated book sections is claimed here. Earlier native author's reading remains separately attributed to that author.

## 6. Preferred choice-free finite-cylinder interface

The preceding proof separates into a stronger numerical result and a conditional measure-law consequence. For the finite input graph sequence, define π_p^b(A) as the unique real limit of the probability of a fixed finite-coordinate cylinder event A under boundary b. Such limits exist WITHOUT using the extension assertion of the published compactness supplier: all-open cylinder probabilities are bounded monotone sequences by volume comparison, and arbitrary finite cylinder atoms are their finite inclusion-exclusion combinations. Limits commute with finite sums, so these numerical atom families are nonnegative, normalized and consistent. They need not at this stage be represented as countably additive Borel laws.

Translations and rotations in §1 work for these numerical families. The pressure proof §§2–3 works unchanged. In §4 let u_b=π_p^b(ω_e=1); the derivative sandwich and finite heat-bath inequality show π_p^0(A)=π_p^1(A) for every cylinder event outside a single at most countable D_q, with no measure extension or π–λ use. This is the preferred local prerequisite for the finite/numerical Potts threshold route.

For each p define the numerical infinite-connection quantity

    Θ_b(p,q)=inf_{r≥1} π_p^b(D_r),
    D_r={0 has an open path inside Λ_r to ∂Λ_r}.

These events decrease with r, but the infimum here is just an infimum of real numbers, not a probability assigned to their infinite intersection. All finite/cylinder monotonicity still holds. The argument of §5 gives Θ_1(p,q)≤Θ_0(p',q) for p<p' by taking the infimum of cylinder inequalities. In addition, put a_n=φ^1_{n,p,q}(D_n). For n≥r, a_n≤φ^1_{n,p,q}(D_r)≤a_r, so (a_n) decreases to a real L. Taking n→∞ gives L≤π_p^1(D_r)≤a_r. Then inf_r gives L≤Θ_1≤inf_r a_r=L. Thus

    lim_n φ^1_{n,p,q}(0↔∂Λ_n)=Θ_1(p,q).

This identity and all pressure/cylinder statements are choice-free deterministic finite calculations and real limits. They do not assert existence of a countably additive measure. Under Countable Choice, the actual published compactness/extension theorem supplies the unique free and wired Borel probability measures with these cylinder values; continuity from above then identifies θ^b=Θ_b. This last identification and law-existence assertion retain the exact extension hypothesis. No hypothesis is erased by switching notation.

Suggested production separation: a finite-cylinder pressure/numerical-limit lemma with no CC; a law-existence statement invoking the published compactness theorem explicitly under CC; and a finite numerical threshold corollary feeding the Potts/Ising finite-volume order-parameter statements without an unnecessary CC premise. The full FK Borel-state and exponential-decay chain separately carries its actual law-construction/auxiliary-product CC uses.
