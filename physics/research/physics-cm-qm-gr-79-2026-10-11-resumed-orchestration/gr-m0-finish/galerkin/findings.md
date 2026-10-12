# Remaining Galerkin repair findings

Research-only proposed carriers. No production carrier, import, state, gate or acceptance record was changed. Parent owns supplier integration and direct/indirect consumer checks. No source full text was fetched in this pass; conclusions below come from the local arguments and exact supplier statements.

Reviewed the five delivered recovery candidates and their used local suppliers. The time-derivative induction, projected inverse in the second-time-derivative bound, symmetric weighted-energy identity and derivative subsequence/Fourier-bound route have no further substantive gap identified in this pass, subject to the supplied composition/embedding estimates. The original five statements remain intact in the three candidate replacements below.

## Proposed replacements

- `lem-gr-galerkin-ode-local-solution.md`: Picard--Lindelof's actual imported Statement supplies local existence/uniqueness, not the asserted maximal-solution escape criterion. The replacement proves continuation locally: bounded field on compact trajectory set gives a Cauchy endpoint, then Picard--Lindelof at that endpoint and uniqueness glue an extension. It also inserts the missing coordinate isomorphism inverse in the definition of G. Existing imported dependencies added explicitly: `thm-heine-borel-rn`, `thm-extreme-value-metric`, `lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves`. No stronger choice assumption.
- `lem-gr-galerkin-limit-is-classical-solution.md`: pointwise Fourier norm bounds alone do not establish strong measurability required by Bochner L-infinity membership. Finite Fourier projections are continuous in the stronger norm; approximate them by finite-valued simple functions on expanding compact time intervals and use their pointwise stronger-norm convergence. The same explicit construction applies to the derivative. Also takes the limit of the integral identities to establish the C1 curve before the final classical conclusion, and states the Fourier fact at orders s and s-1. Existing dependencies suffice; no new choice principle.
- `lem-gr-rational-diagonal-extraction.md`: replaces the unsupported inference that Countable Choice licenses arbitrary recursive nested subsequence selections. Sequential compactness implies total boundedness of every bounded sequence range by a canonical greedy separated-sequence contradiction. At stage n, refine an infinite index set by least-index-centred radius 2^{-n} balls with infinitely many indices at the first n rational times; pick least increasing diagonal indices. This gives pointwise rational Cauchy convergence followed by the existing uniform-Lipschitz proof. Public Statement/deps unchanged, Countable Choice retained, no dependent choice used.
- `lem-gr-galerkin-compactness.md`: its (a) had the same recursive-choice inference. The replacement chooses a canonical Fourier cutoff making uniform tails small, then retains the least-index-centred finite-dimensional ball containing infinitely many current indices. The resulting diagonal is Cauchy in H^{r-1}. Existing dependencies suffice. At parent direction, (b)/(c) explicitly require [-T,T] inside the coefficient time domain and constants depend on that slab. This public-interface repair requires parent consumer review.

## Compact-time tradeoff and counterexample

The original compactness (b) asserted one global Lipschitz constant on (-T,T) without controlling the time slab away from the coefficient-domain boundary. That is false even for scalar spatially constant solutions. Take T=1, I=(-1,1), O=R, A0=1, Ai=0, and

$$u_N(t,x)=\sin\bigl((1-t)^{-1}\bigr)-\sin(1),\qquad B(t,x,z)=-(1-t)^{-2}\cos\bigl((1-t)^{-1}\bigr).$$

All coefficients are smooth on I, every u_N belongs to every Fourier space, all values lie in [-2,2], all H^s norms are at most 2, and the Galerkin equation holds with initial datum 0. Its derivative is unbounded as t approaches 1, so no finite global Lipschitz constant exists. The necessary repair retains the strongest sound uniform-equicontinuity conclusion by adding the interior compact-slab hypothesis. Existing existence/limit consumers already choose such a slab; parent must certify those consumer bytes. An alternative would retain only local equicontinuity, but that would weaken the promised global conclusion.

## Dependency notes

The energy candidate's L4 uses Sobolev embedding through the composition/time-derivative supplier chain. Parent may declare `lem-gr-periodic-sobolev-embedding` directly for explicit ownership, but the mathematical estimate is already available. The derivative family uses compactness (a) with r=s-1, and the repaired rational extraction requires no stronger choice principle. The mass inverse uses homogeneous commutators with no additive constant, so the zero-source inverse estimate remains valid.

## Actual checks

`node tools/physics-support/proof-layout.mjs` on the three first replacement candidates: 3 items, 14 steps, 0 defects. After the last compactness edit, the explicit compactness-only command: 1 item, 3 steps, 0 defects. These are local proof-layout checks, not independent mathematical acceptance. A final combined proof-layout command checked all four replacements: 4 items, 17 steps, 0 defects. `input-hashes.json` binds all four original inputs used for the replacements. Original recovery candidates remain untouched.
