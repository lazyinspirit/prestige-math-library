---
id: lem-small-local-energy-cylinder-neck-collapse
kind: lemma
title: "Small local energy forces cylinder neck collapse"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, lem-interior-energy-regularity-for-smooth-almost-complex-strips, lem-boundary-energy-regularity-for-totally-real-strips, lem-small-gradient-almost-complex-cylinder-neck-energy-decay, lem-small-gradient-totally-real-boundary-neck-energy-decay]
dependency_level: 3
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dusa McDuff and Dietmar Salamon, J-holomorphic Curves and Symplectic Topology, no-neck estimates"
      url: "https://bookstore.ams.org/coll-52"
---

## Statement

Assume Countable Choice. Fix compact target and coefficient bounds as in the interior and boundary cylinder-neck lemmas. Let $D$ be either an angular circle of fixed length $T$, or the interval $[0,T]$ with both edges on the same fixed compact totally real $L$ and with fixed boundary structure $J_b$. Coefficient bounds include uniform $C^2$ bounds in source and target, and, in the boundary case, $J(\sigma,0,x)=J(\sigma,T,x)=J_b(x)$ for $x\in L$.

There are constants $\delta_0,\kappa_0,c,C>0$ depending only on these data such that the following holds. Let $u$ be a smooth actual almost complex solution on $[a-1,b+1]\times D$, with explicit source derivatives of $J$ bounded by $\kappa_0$. Suppose $0<\delta\le\delta_0$ and every source disk or physical-boundary half-disk of one fixed radius $r_0<\min\{1/8,T/16\}$, contained in this cylinder, has energy at most $\delta$. Then for $0\le R\le(b-a)/2$,
$$E_g(u;[a+R,b-R]\times D)\le C\delta e^{-cR},$$
and
$$\operatorname{diam}_g u([a+R,b-R]\times D)\le C\sqrt\delta e^{-cR/2}.$$
In particular, for any sequence of such necks, their central energy and image diameter tend uniformly to zero as their distance $R$ from the ends tends to infinity. This is a criterion for a neck already satisfying the stated local-energy bound; no bubble-tree decomposition is assumed or asserted.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The actual smooth solution and local-energy hypotheses, fixed angular geometry, compact target, coefficient bounds, and boundary data in the statement.

[F1] [[lem-interior-energy-regularity-for-smooth-almost-complex-strips]] and [[lem-boundary-energy-regularity-for-totally-real-strips]] give target-global gradient bounds on smaller fixed-radius patches from sufficiently small energy; the boundary statement requires the fixed $J_b$ stipulated here.

[F2] The actual proofs of [[lem-small-gradient-almost-complex-cylinder-neck-energy-decay]] and [[lem-small-gradient-totally-real-boundary-neck-energy-decay]] construct a fixed target embedding $F$ and, for boundary necks, a fixed smooth reflection $\rho$ about $L$. For the embedded original periodic map, or its $C^1$ periodic double, they prove $$e(\sigma)=\tfrac12\int|V_\tau|^2,\qquad e''\ge c^2e,\qquad e(\sigma)\le e(a)e^{-c(\sigma-a)}+e(b)e^{-c(b-\sigma)}$$ once gradients and explicit source variations are sufficiently small. They also prove the original energy is at most $C\int e$, with constants independent of cylinder length. The constructions and estimates are part of those explicit proofs, not assumptions about a moduli space.

## Proof

1.1 Fix the patch radius $r_0$ in the statement, decreasing it if necessary to satisfy the uniform scale restrictions of [F1]. Every point in $[a,b]\times D$ is covered by an interior smaller patch or a boundary half-radius patch of this radius, contained in the extended cylinder. In the angular interval case, points within $r_0/4$ of an edge use the boundary supremum estimate centered at their boundary foot; other points use an interior disk of radius at least $r_0/8$. Their energies are at most $\delta$: if their radii are smaller, each is contained in one stipulated radius-$r_0$ patch. In the angular circle case all points use an interior disk. Choosing $\delta_0$ below the [F1] thresholds gives $$\sup_{[a,b]\times D}|du|_g\le C_0\sqrt\delta.$$ The unit buffer ensures these patches remain in the prescribed source domain even at $\sigma=a,b$. [F1, given, construct, algebra]

2.1 Choose $\delta_0$ further so that $C_0\sqrt{\delta_0}$ is below half the small-gradient threshold in [F2], and choose $\kappa_0$ below half its source-variation threshold. All hypotheses of the corresponding neck estimate hold on $[a,b]\times D$. In the boundary case the small derivative bound also places every angular half-loop in the fixed reflection collar, since it starts on $L$ and has length at most $TC_0\sqrt\delta$. Thus the original periodic embedding, or the reflected periodic double in [F2], is genuinely defined. Its angular period is $T$ or $2T$, and its endpoint slice energies obey $e(a)+e(b)\le C_1\delta$, by the derivative estimate in step 1.1 and the fixed differential bounds of $F$ and $\rho$. [F2, step 1.1, construct, algebra]

3.1 The exponential barrier in [F2] therefore gives $$e(\sigma)\le C_1\delta\bigl(e^{-c(\sigma-a)}+e^{-c(b-\sigma)}\bigr).$$ Its integral on the central interval is at most $C\delta e^{-cR}$, proving the asserted energy bound. The same inequality and $\sqrt{x+y}\le\sqrt x+\sqrt y$ give $$\int_{a+R}^{b-R}\sqrt{e(\sigma)}d\sigma\le C\sqrt\delta e^{-cR/2},\qquad \sup_{[a+R,b-R]}\sqrt e\le C\sqrt\delta e^{-cR/2}.$$ These bounds do not multiply by cylinder length, since the exponential tails are integrated explicitly. [F2, step 2.1, algebra]

4.1 Let $P$ be the fixed angular period of $V$, and $B(\sigma)=P^{-1}\int V(\sigma,\tau)d\tau$. Angular integration and Holder give $$|V(\sigma,\tau)-B(\sigma)|\le C\sqrt{e(\sigma)}.$$ Moreover $|V_\sigma|\le C|V_\tau|$ on each side, by the original equation, bounded $J$, and the fixed reflection differential and its inverse. Thus $$|B'(\sigma)|\le P^{-1}\int|V_\sigma|d\tau\le C\sqrt{e(\sigma)}.$$ For any two central source points, compare their embedded values to their slice averages and integrate this bound for $B'$ between the slices. Step 3.1 proves that the Euclidean diameter of their embedded images is at most $C\sqrt\delta e^{-cR/2}$. This uses no cancellation of angular endpoint terms; the reflected periodic map is used only after its actual construction in [F2]. [F2, step 3.1, construct, algebra]

5.1 Finally the inverse of the fixed compact embedding is uniformly locally Lipschitz in ambient chord distance. Indeed in each smaller image chart its inverse derivative is bounded; compactness gives a uniform closeness scale within one chart. For pairs separated by more than that scale, the diameter of each relevant compact target component enlarges the constant to a global bound. The connected image of our cylinder lies in one target component, and a compact manifold has finitely many components. Consequently $d_g(x,y)\le C|F(x)-F(y)|$ for pairs in that component, with uniform constant. Applying this to step 4.1 gives the asserted target diameter estimate. Hence both energy and image collapse with $R$ as claimed, conditional only on the concrete local-energy and source-variation bounds in the statement. [step 4.1, construct, algebra] ∎
