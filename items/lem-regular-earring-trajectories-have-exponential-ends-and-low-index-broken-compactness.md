---
id: lem-regular-earring-trajectories-have-exponential-ends-and-low-index-broken-compactness
kind: lemma
title: Regular earring trajectories have exponential ends and low-index broken compactness
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-order-two-singular-gauge-completions-and-cylindrical-fredholm-operators
  - lem-singular-holonomy-perturbations-have-a-proper-generically-finite-critical-set
  - lem-earring-gauge-components-force-index-energy-monotonicity
  - lem-bounded-holonomy-forced-orbifold-asd-trajectories-have-bubble-compactness
  - lem-earring-holonomy-perturbations-regularize-all-trajectory-indices
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Kronheimer and Mrowka, Knot homology groups from instantons
      url: https://people.math.harvard.edu/~kronheim/yaft.pdf
      locator: §3.5, PDF74–76; the end and broken-limit estimates are supplied below
---

## Statement

Assume full AC. For the constructed earring data choose one of the all-index regular holonomy perturbations with its finite nondegenerate critical set. Every smooth trajectory of finite flow energy has a single critical orbit at each infinite end and, in actual determinant-one orbifold gauges, converges to representatives exponentially in every Sobolev order. For every fixed integer index bound there are only finitely many possible endpoint pairs and relative classes of nonconstant trajectories.

Sequences of trajectories of index one or two have, modulo translations, subsequences converging to finite broken trajectories without bubbles. The total index is the sum of the positive indices of the nonconstant levels. Thus the index-one translation quotient is a compact finite set; an index-two sequence has either a smooth unbroken limit or precisely two index-one levels. This statement identifies sequential limits and does not yet assert gluing collars or orientations.

## Statement references

[Kronheimer–Mrowka, §3.5](https://people.math.harvard.edu/~kronheim/yaft.pdf)

## Facts & Assumptions

[F1] Actual invariant slices, bounded nonlocal Hessian terms and the limiting-operator inverse $\partial_t+H$ are proved in [[lem-order-two-singular-gauge-completions-and-cylindrical-fredholm-operators]]. Critical properness and all holonomy mapping bounds are proved in [[lem-singular-holonomy-perturbations-have-a-proper-generically-finite-critical-set]].

[F2] Local bubble compactness with actual forcing, smooth convergence when there are no atoms, the positive energy quantum and the exact relative-index subtraction with loss at least four are proved in [[lem-bounded-holonomy-forced-orbifold-asd-trajectories-have-bubble-compactness]].

[F3] The flow-energy identity, $E_z=\pi^2 I_z+c_{\alpha\beta}$, finite classes at each index and the uniform lower index bound are proved in [[lem-earring-gauge-components-force-index-energy-monotonicity]]. All nonconstant trajectories in the cylindrical Sobolev configuration spaces are regular and have index at least one by [[lem-earring-holonomy-perturbations-regularize-all-trajectory-indices]].

[F4] Full AC is used through these completions, subsequence selections and perturbations. [[def-axiom-of-choice]]

## Proof

**Given:** A fixed regular perturbation, with finite nondegenerate critical set, and a trajectory with $2\int\|\partial_tB\|_2^2<\infty$.

1.1 **Critical limits without assuming cylindrical asymptotics.** The flow energy on every translated window of fixed length tends to zero as its center tends to either infinite end. Apply [F2] on a slightly larger window. Its curvature estimate has a uniform bounded forcing term; its flow-energy atoms are the curvature atoms. No atom can persist when the window's flow energy tends to zero. Consequently every sequence of translated windows has smooth convergent subsequences in actual gauges, and the limit is time independent because its temporal derivative has zero integral. It is a critical connection. This proves uniform closeness, in every fixed quotient Sobolev norm, to the finite critical set: otherwise a sequence violating that closeness would have just produced a critical limit. Choose disjoint small slice neighborhoods of those critical orbits. A sufficiently long tail stays in their union, and its continuity forces it to stay in one of them. This gives one critical orbit at each end, not merely a set of critical subsequential limits. Over a tail, the local principal slice bundle can be lifted along the interval; its only stabilizers are the discrete central signs. Choose one lift and its limiting critical representative. [F1, F2, F3, F4, given, construct, algebra]

2.1 **The actual exponential estimate.** In the slice of a limiting critical representative $\beta$, write the lifted path as $\beta+a(t)$ and its gauge time component as $\xi(t)$. The slice condition $d_\beta^*a=0$ determines $\xi$ using the invertible gauge Laplacian of [F1]. Expanding the curvature, holonomy gradient and this inverse gives $a'+H_\beta a=N(a)$. On a tail where $a$ is small in a fixed high Sobolev norm, the mean-derivative form of $N(0)=DN(0)=0$ gives $N(a)=R(t)a$ with $\|R(t)u\|_2\le\eta\|u\|_{H^1(Y)}$. This estimate also holds for $t$ derivatives on shorter tails. It follows directly from $a\wedge a$, the bounded second derivatives of the holonomy field and the slice formula: the gauge correction has one derivative followed by the inverse of a second-order gauge Laplacian and then one gauge derivative, so is bounded from $H^1$ to $L^2$, with coefficient tending to zero. Choose $\eta$ smaller than the reciprocal of twice the inverse norm for $D_\beta=\partial_t+H_\beta$. Initially one must not assume $a\in L^2$ on the infinite tail. Apply the full-line inverse estimate to $\chi_{T,S}a$, a cutoff equal to one on $[T+1,S-1]$. The right side is $R\chi_{T,S}a+\chi_{T,S}'a$. Absorb its first term. The two end-cutoff norms are bounded, and the one at $S$ tends to zero by step 1.1. Let $S\to\infty$ to obtain $a\in H^1$ on a shorter tail. Now put $v=\chi_Ta$ on the full line and extend $R$ by zero before that tail. Its equation is $(D_\beta-R)v=f$, where $f$ has compact support. The same inverse and Neumann series work in $H^1_\delta\to L^2_\delta$ for any sufficiently small $\delta>0$ below the spectral gap. The weighted solution is also unweighted and hence equals $v$ by unweighted uniqueness. Differentiating the equation, using the local elliptic estimates and the smooth mapping bounds of [F1], inductively gives $e^{\delta t}a\in H^m$ for every $m$. The slice time component has the same decay. Integrating its gauge ODE gives a convergent gauge, so temporal representatives also have exponentially convergent critical ends. These are actual cylindrical configurations of [F3]. [F1, F2, step 1.1, construct, algebra]

3.1 **A finite energy and class budget.** For every trajectory with index at most $D$, [F3] bounds its energy by $\pi^2D+\max c_{\alpha\beta}$ and bounds its index below. There are finitely many critical pairs, finitely many indices in this interval, and finitely many classes at each such index. In particular the positive energies of all these nonconstant trajectories belong to a finite set. Let $e_D>0$ be its smallest element when the set is nonempty. The energy identity also gives a positive minimum in any fixed energy budget, since that budget bounds the index above and below by the same formula. This is the energy gap used to count levels; it does not come from a supposed positive lower bound on the curvature of perturbed critical connections. [F3, step 1.1, step 2.1, construct, algebra]

4.1 **Broken extraction, including necks and all-constant limits.** Apply [F2] after translating a sequence, and repeat at each concentration scale and each transition between small critical slice neighborhoods. On every bounded window the extracted solution has finite flow energy bounded by the total budget, so steps 1.1–2.1 apply to it. A nonconstant extracted level consumes at least the minimum from step 3.1; a sphere bubble consumes the positive quantum from [F2]. Thus there are only finitely many of either. Here is the control of intervening long critical intervals. In a fixed critical slice, the local primitive $S=CS+f$ has $|S(\beta+a)-S(\beta)|\le C\|a\|_{H^1}^2$. Its flow identity makes the energy on an interval equal to twice the difference of its endpoint values, using this single local lift. Hence intervals whose endpoint slice norms tend to zero have energy tending to zero. If a middle interval does not remain in a critical slice, center it at its first exit from a smaller slice neighborhood. Local compactness either extracts a bubble or a nonconstant level; a constant level cannot meet that exit condition. Repeating the first-exit selection and the finite budget leaves only critical intervals of vanishing energy and exponentially convergent outer tails. A completely constant, bubble-free extraction of a nonconstant sequence is excluded in the same way: either it exits a small critical slice and supplies a level, or it stays in that slice for all time. In the latter case its two ends are the same critical point in one local lift, so its flow-energy difference is zero and the solution is constant. This also rules out energy escaping through arbitrarily long small oscillations near a critical orbit. [F1, F2, F3, step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 **Exact index splitting and the low-index conclusion.** Cut at the exponentially close critical cross-sections in step 4.1. Homotope the sufficiently small cross-section errors to the limiting critical connection in their slices, leaving all far ends unchanged. The Fredholm indices do not change. At a resulting constant neck, apply the finite block rotation used in [F2] to the two cylindrical ends and a constant cylinder. Its principal operators agree and its nonlocal holonomy derivative commutes with time cutoffs; the compact middle errors do not change the index. The constant whole cylinder has invertible $\partial_t+H_\beta$ by [F1] and index zero. Thus the index equals the sum of the level indices plus the exact bubble losses. Neck clutching and extra point terms are absent by [F2]'s actual neck comparison. Every nonconstant level has positive index by [F3], now legitimately applicable because step 2.1 has placed those levels in its cylindrical configuration spaces. Every bubble costs at least four, so total index one or two forbids bubbles. At least one level is present by step 4.1. Index one has exactly one index-one level; index two has either one index-two level or two index-one levels. The smooth unbroken convergence includes its tails: on a long critical interval the cutoff inverse estimate of step 2.1 bounds its whole tail norm by the converging end data; absorb the uniformly small nonlinear coefficient, rather than assuming local convergence implies global convergence. Hence index-one quotients are sequentially compact. They are Hausdorff second-countable zero-dimensional manifolds by [F3], so sequential compactness is compactness and discreteness makes them finite. This proves all the asserted low-index limit statements without a gluing or orientation claim. [F1, F2, F3, step 2.1, step 3.1, step 4.1, construct, algebra] ∎

## Source notes

The actual primary compactness statements on PDF74–76 of the118-page paper were read. The omitted end and broken-extraction operations are supplied here from the actual invariant inverse, nonlocal-field compactness and energy-period proofs. In particular finite flow energy is not replaced by finite unrenormalized curvature energy on an infinite cylinder with nonflat perturbed critical ends.
