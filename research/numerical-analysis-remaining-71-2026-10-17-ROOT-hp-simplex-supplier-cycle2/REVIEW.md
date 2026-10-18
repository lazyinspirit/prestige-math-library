# PE28 simplex supplier — SECOND/final actual review and focused repair

Run `numerical-analysis-remaining-71-2026-10-17`, batch 68. This is the second and final cycle for the simplex escalation. Native batch-68 refresh was genuinely complete before this pass. I read the complete current batch notes, latest combined owner direction, all four actual simplex carriers, both actual corner consumers, both actual pages, the two new analytic/weighted suppliers needed to understand the consumers, and the relevant existing local foundational proofs identified in cycle 1. Proposal existence and native success were not treated as mathematical acceptance.

Canonical writes are drained. Root and the corner reviewer were notified before this report was finalized so the sequential corner pass can proceed. No third simplex cycle is requested.

## Result

The actual degree-uniform strong-edge lift, ordinary Legendre factorial tail, conservative ordinary triangle Sobolev approximation, and genuinely varying-degree conforming interpolation have complete local arguments for the selected owner-approved two-dimensional scope. I found no remaining mathematical gap in those selected claims after the focused repairs below. This is a mathematical focused-review conclusion, not an independent native gate or certification result.

The rate retains integer r >= 5, p >= 2r-4, the exact factorial quotient, physical h^(r-1) scaling, and an order-r constant with no asserted analytic growth bound. Assembly permits every finite cell degree p_K >= 1, takes shared p_E=min(p_K,p_K'), and states rates through m_K=min_{E subset boundary K}p_E. There is no unsupported local high-p_K conclusion across low-degree traces and no degree-ratio restriction. The lift is uniform from the strong H1 edge norm into H1 of the triangle; it is not claimed to be an optimal H1/2 lifting theorem. The corner branch continues to consume that lift directly, without applying the general piecewise-H2 interpolation theorem on singular caps or inheriting its full-Choice assumption.

## Exact canonical changes

Preimages of all four reviewed simplex carriers and the two affected corner consumers are in `preimages/`. The exact changed text is in `focused-repairs.diff`. Four canonical files changed:

1. `items/lem-hp-unweighted-legendre-derivative-tail.md`: its **Statement** now explicitly says that the Axiom of Choice is assumed in the k >= 1 branch; previously this assumption appeared only in Given/A1 and provenance prose. The k=0 branch now explicitly quantifies N >= 0. The estimate, derivative identity, regularity and factorial factor are unchanged. This makes the Statement accurately carry the actual Sobolev-representative supplier's assumption; it adds no stronger assumption than the actual proof already required.
2. `items/thm-hp-triangle-unweighted-smooth-approximation.md`: **Statement unchanged**. The proof's physical-scaling sentence previously said the H^j seminorm scales by h^(j-1) “from reference to physical,” reversing that verbal direction. It now states the precise pullback relation `|e-hat|_{H^j(T)} comparable h^(j-1)|e|_{H^j(K)}` for j=0,1,2 and explicitly defines the error and pullback. The already-correct displayed estimate is preserved.
3. `items/lem-hp-simplex-p-explicit-conforming-interpolant.md`: its **Statement** now defines the unit tangent on every edge, including boundary edges, before defining the interior/boundary degree convention; previously it introduced a tangent only on an interior edge but used the same notation in sums over all edges. All hypotheses and conclusions are unchanged. In the proof I made endpoint preservation explicit from the derivative projection's constant moment and the ordinary absolutely-continuous representation, with the actual F6 tag. I also corrected the full-norm decomposition: with the proof's z=q+c_K-Iu, the correct identity is `u-Iu=(u-q)-c_K+z`, rather than the previous minus-z identity. The subsequent triangle-norm bound and estimates are unchanged.
4. `items/thm-hp-corner-exponential-energy-convergence.md`: as the owner of the old and current affected consumers, I corrected **Statement** wording “vanishes pointwise on exactly the edges in Gamma_D” to “vanishes pointwise on the edges in Gamma_D”; the proof's matching sentence now also says “on Gamma_D.” The surrounding sentence already says no zero condition is imposed on the other edges. The former “exactly” wrongly excluded targets that additionally vanish elsewhere, including the zero target when Gamma_D is proper. The correction preserves the approved arbitrary fixed union of Dirichlet edges, including the full-boundary case. No mesh, class, degree or rate clause changed.

No Definition changed. No dependency array changed. The strong-edge lift needed no repair: the actual authoring correction `norm squared <= 8A <= 16A` is valid for A=0 as well. The Legendre proof's actual two-block integration-by-parts cancellation has the correct sign. No tensor, GLL, inverse-trace, variable-space Definition, or unrelated branch was rewritten.

## Proof assessment

For the Legendre supplier I checked the endpoint vanishing through order k-1, the leading coefficient of D^k((1-x^2)^k D^kP_n), the cancellation of the two integration-by-parts signs, finite Bessel estimates, polynomial density, and the first omitted index N+1. The k=0 contraction needs no density or Sobolev representative argument. The full-Choice assumption remains visible in its actual k>=1 supplier chain.

For ordinary triangle approximation I checked the two anchored integration constants, H2 stability, the exact factorial ratio for projection of f'', all mixed derivatives in the actual tensor proof, n >= s-1 at the smallest allowed degrees, the comparison of rho(n,r-1) with eta(n,r), the H2 limit and finite-dimensional closedness step, the moment subtraction, and the physical scaling. The constants M_r and B_r are fixed in p and explicitly uncontrolled in r. No analytic optimization is inferred from this route. The existing closed-subspace supplier was read in its current repaired form; the tensor monomials supply the required finite ordered basis.

For the lift I independently checked all three traces, polynomial degree including p=0/1, the integrals of t|R|^2 and t^3|R'|^2, the two derivative norms and function norm, all fixed vertex permutations, physical edge-length/area/gradient scaling, and extension of compatible mixed-degree edge data. For the interpolant I checked ordinary H2 traces and their endpoint agreement, derivative projection reproduction, every finite local energy system, the zero-dimensional interior system case, edge conformity, zero-boundary preservation, the correction bound uniform in degree, energy minimality, polynomial zero-trace Poincare estimate, scaled full H1 estimate and insertion of the ordinary approximation supplier.

## All old/current affected consumers

`consumer-closure.json` records the actual current reverse dependency graph and the original pre-escalation consumer edges, computed by reading item deps without running validators or gates. The relevant current chains are:

- Legendre tail → ordinary smooth triangle theorem → general conforming interpolant.
- Strong-edge lift → general conforming interpolant; strong-edge lift → corner theorem → corner example.
- The general conforming interpolant has no current logical item consumer, because the independently constructed corner proof removed its old edge.

The original general interpolant had both `thm-hp-corner-exponential-energy-convergence` and `ex-hp-reentrant-corner-h-versus-hp` as direct consumers; the example also used the theorem indirectly. Both were read fully and remain part of this same-reviewer affected-consumer duty despite those removed old edges. I inspected the corner proof's exact lift use on regular cells and caps and the example's weighted membership, same-domain lower/upper comparison and boundary set. No repair to the example was needed by the simplex changes. The two actual page bodies correctly distinguish the ordinary unweighted route, strong-edge norm, direct weighted corner proof, and affine-only scope; no page repair was needed. The broader variable-space Definition was read and preserved.

The newly explicit full Choice in the Legendre Statement already appears in both its current direct ordinary-approximation consumer and the downstream general interpolant. Their mathematical assumptions match. The corner theorem and example no longer depend on that route, so they need no imported full-Choice assumption. The strong lift's exact degree and physical norm interface matches the regular-cell and opposite-edge cap corrections used by the actual corner proof.

## Corner handoff observations and remaining work

The corner reviewer owns the sequential second/final full check of its analytic and weighted suppliers. I read those actual bodies while checking the old/current consumer closure and sent two precise observations without editing those suppliers:

- The analytic polynomial proof's prose refers to “steps 3.1–2.2” although no step 2.2 exists; it should identify the actual Taylor-bound step 1.2.
- The weighted proof should explicitly apply the fixed-order rectangle H2 reflection/continuity argument separately to each D^alpha u, whose local H2 norm is provided by the weighted hypotheses. Extending u with the fixed coefficients 3,-2 and then differentiating that extension to arbitrary order would not be valid: that formula matches only value and first-normal-derivative traces. The separate-derivative H2 route supports the intended estimates under Countable Choice and needs no high-order full-Choice extension. This is a request to make that actual proof route explicit, not permission to narrow the weighted class.

These observations were delivered to the original corner reviewer and root. The corner-specific proof review was not pre-accepted here. Root must wait for that drained final report, then do the one coordinated metadata/contract/format/hash/readiness reconciliation and required native review/gates. No third cycle, test suite, publication, or push is requested.

## Evidence limits and controls

Only focused canonical mathematics/prose and this research evidence were edited. No manifests, proof contracts, dependency levels, hashes, readiness records, engine state, runtime controls, gates, tests, or root bookkeeping were changed or run. Therefore the prior native mechanical results are not represented as current after these edits; root owns fresh checks after both sequential reviewers drain. I did not run proof-layout separately because root explicitly reserved the one coordinated post-review check/bookkeeping pass.

The complete source-context reading from cycle 1 remains documented in its README and cached authoritative Shen–Tang §1.8 and Schoberl §30.4.2 texts. This cycle relied on that actual reading and reread actual canonical suppliers; it does not claim newly fetched or newly fully read Vohralik/He texts. The configured total auto-compaction threshold remains 500000 as confirmed by a targeted settings read; no setting change or new worker launch occurred. No subagent was spawned.
