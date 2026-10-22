---
id: thm-a-very-short-geodesic-forces-definite-quadratic-mass-in-its-thin-annuli
kind: theorem
title: A very short geodesic forces definite quadratic mass in the corresponding thin annuli
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - lem-finite-area-fuchsian-quotients-have-compact-standard-cusp-truncations
  - lem-finite-area-thick-limits-have-controlled-topology-and-component-count
  - lem-bounded-area-thick-components-capture-unscaled-quadratic-limits
  - lem-integrable-quadratic-mass-decays-uniformly-in-deep-hyperbolic-cusps
  - lem-local-thin-components-of-torsion-free-kleinian-quotients
  - lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients
  - thm-identity-theorem-holomorphic-functions
  - cor-orientable-compact-surface-has-euler-characteristic-two-minus-two-g
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Curtis T. McMullen, Iteration on Teichmuller space
      url: https://people.math.harvard.edu/~ctm/papers/home/text/papers/iter/iter.pdf
      locator: Proposition2.7 and the Section7.3 mass/very-short-curve selection, printed432 and451–453, actual full Sections2.3–2.4 and5–7 read. The uniform local witness below proves the mass bound on annuli with the specified very-short cores, rather than losing the shortness margin in a geometric limit.
---

## Statement

Assume AC, hence Countable Choice. Fix $A>0$ and $0<\varepsilon<\eta_*/2$, where $\eta_*$ is the uniform local thin displacement threshold. On a connected complete finite-area hyperbolic surface $X=H^2/\Gamma$, let $V_\varepsilon(X)$ be the union of those geodesic components of $\{\operatorname{inj}_X<\varepsilon\}$ whose primitive closed core geodesic has length LESS than $\varepsilon/2$.

There is $d=d(A,\varepsilon)>0$ such that if $\operatorname{area}(X)\le A$, $V_\varepsilon(X)\ne\varnothing$, and $q$ is an integrable holomorphic quadratic with $\|q\|_1=1$, then
$$\int_{V_\varepsilon(X)}|q|\ge d.$$
In particular the same lower bound holds on the full geodesic $\varepsilon$-thin part whenever there is a closed geodesic shorter than $\varepsilon/2$. No fixed genus, lower systole or faithful convergence of entire surfaces is assumed.

If the compact cusp type is $(g,N)$, the number of geodesic $\varepsilon$-thin components is at most $S=3g-3+N$. Under the preceding nonempty-short-core hypothesis one has $S\ge1$, and at least one primitive core of length less than $\varepsilon/2$ has its $\varepsilon$-thin annulus carrying mass at least $d/S$. This is a positive bound on one of the ACTUAL very-short core classes, not just on the union of annuli with core lengths below $2\varepsilon$.

## Facts & Assumptions

**Given:** AC, the area and small threshold, and the unit quadratic on a surface having a very-short primitive core; the type only for the component-count conclusion.

[A1] Full choice and Countable Choice are [[def-axiom-of-choice]] and [[def-countable-choice]].

[F1] Finite-area quotients have finitely many standard cusp ends with compact complement and exact area $2\pi(2g-2+N)$. Their small-threshold thick set is a nonempty compact smooth surface with finitely many components of negative Euler characteristic, and the sum of those Euler characteristics is $-\operatorname{area}(X)/(2\pi)$. There are finitely many thin annuli and cusps. [[lem-finite-area-fuchsian-quotients-have-compact-standard-cusp-truncations]], [[lem-finite-area-thick-limits-have-controlled-topology-and-component-count]]

[F2] Unit integrable quadratics have uniformly vanishing mass in sufficiently deep cuspidal thin parts, with an explicit bound independent of type. [[lem-integrable-quadratic-mass-decays-uniformly-in-deep-hyperbolic-cusps]] If a bounded-area thick component carries positive mass, base any point in it. The actual area/r-net argument puts the ENTIRE component in one uniformly bounded ambient quotient ball. The thick atlas then supplies an UNSCALED nonzero limiting quadratic, with lifted coefficients converging locally uniformly on the entire model half-plane. [[lem-bounded-area-thick-components-capture-unscaled-quadratic-limits]] This is an ambient-distance bound, not a bound for paths constrained to that component.

[F3] At displacement $2\varepsilon<\eta_*$, the actual arbitrary-quotient classifier gives embedded precisely invariant parabolic cusps and cyclic loxodromic annuli. A geodesic component has one primitive core, length $\ell<2\varepsilon$, and radius coordinate satisfying $\sinh(\operatorname{inj})=\sinh(\ell/2)\cosh r$. Distinct closed thin components are separated. Displacement functions satisfy $\tfrac12d(z,hz)\le\tfrac12d(y,hy)+d(y,z)$ by triangle inequality. [[lem-local-thin-components-of-torsion-free-kleinian-quotients]], [[lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients]]

[F4] A holomorphic function vanishing on a disc vanishes on its connected domain. [[thm-identity-theorem-holomorphic-functions]] Nonnegative quadratic masses in conformal charts obey measurable change of variables. [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]] A compact connected oriented surface of cap genus $h$ and $b$ boundary circles has Euler characteristic $2-2h-b$, by the closed-cap formula and attaching one disc to each boundary circle. [[cor-orientable-compact-surface-has-euler-characteristic-two-minus-two-g]]

## Proof

1.1 Fix once a threshold $a<\eta_*/2$. Choose $0<\eta<\min(a,\varepsilon/8)$ so small that the cusp estimate [F2] makes the mass of the cuspidal $\eta$-thin part less than $1/4$ for EVERY unit quadratic on EVERY surface in the assertion. This is possible since its bound is $\exp(-\pi/\sinh\eta+\pi/\sinh a)$. Every geodesic $\eta$-thin annulus is contained in $V_\varepsilon(X)$: its primitive core has length $<2\eta<\varepsilon/4$, and its $\eta$ displacement region is nested in its $\varepsilon$ region with the same full cyclic stabilizer by [F3]. No parabolic change of type occurs between these two thresholds on the same surface. [F2, F3, given, construct, algebra]

2.1 If no positive uniform $d$ existed, use [A1] to choose unit quadratics $q_n$ on surfaces of area at most $A$ with $V_\varepsilon(X_n)\ne\varnothing$ and $\int_{V_\varepsilon(X_n)}|q_n|\to0$. By step 1.1 at least $3/4-o(1)$ of their mass lies in the closed $\eta$-thick set. It has at most $M=\max(1,\lceil A/(2\pi)\rceil)$ components by [F1]. Choose a component $Z_n$ with mass at least $1/(2M)$ for late $n$, and any basepoint $x_n\in Z_n$. Its injectivity radius is at least $\eta$. By [F2] there is a fixed finite $R_0=R_0(A,\eta)$ with $Z_n\subset\overline B(x_n,R_0)$, and, after normalization of the universal model at $i$, the lifted quadratic coefficients $f_n$ converge locally uniformly on $H^2$ to a holomorphic $f$ whose descended quadratic is NONZERO. This nonvanishing is the actual unscaled mass/capture theorem, not projective rescaling. [A1, F1, F2, step 1.1, given, construct, algebra]

3.1 We find a loxodromic displacement witness at a point $y_n\in Z_n$. Choose a primitive core $\alpha_n$ of length $<\varepsilon/2$. Its axis either lies in a geodesic $\eta$-thin annulus or lies entirely in one $\eta$-thick component. For if a point of that axis were $\eta$-thin for another element, both that element and the primitive core move it by less than $\eta_*$; [F3] puts them in the same cyclic stabilizer. The primitive element's axis then gives exactly the stated annulus, and otherwise all its axis points are thick. The finite graph of thick components joined by the closed geodesic thin annuli is connected. Indeed each standard cusp tail retracts onto its one boundary circle by the explicit height-coordinate retraction; removing these finitely many tails leaves a connected compact union of the thick components and closed geodesic annuli. A disconnected incidence graph would partition that finite union into disjoint closed unions of pieces, contradicting connectedness. If $\alpha_n$ lies in $Z_n$, choose $y_n$ on it. Otherwise a finite graph path from $Z_n$ to its component or annulus begins with a GEODESIC thin annulus adjacent to $Z_n$; a cusp cannot provide such an edge because it has only one rim. Choose $y_n$ on that adjacent rim. In the first case the core element $h_n$ moves a lift of $y_n$ by $<\varepsilon/2$. In the second the full primitive loxodromic stabilizer of the adjacent annulus has displacement exactly $2\eta<\varepsilon/4$ at that rim and primitive length $<2\eta<\varepsilon/2$. In both cases $$\operatorname{inj}(y_n)\ge\eta,\qquad \tfrac12d(\widetilde y_n,h_n\widetilde y_n)\le\varepsilon/4,$$ and $h_n$ has primitive core length $<\varepsilon/2$. Since $y_n\in Z_n$, its AMBIENT distance from $x_n$ is at most $R_0$ by step 2.1. No quantitative bound is being inferred from mere graph finiteness or from a path required to stay inside $Z_n$. [F1, F3, step 1.1, step 2.1, given, construct, algebra]

4.1 Put $u=\eta/8>0$. The ball $B(y_n,u)$ is embedded since $u<\operatorname{inj}(y_n)$. Every lift of a point of that model ball satisfies, by [F3], $$\tfrac12d(z,h_nz)\le\varepsilon/4+u<\varepsilon.$$ It therefore belongs to the $\varepsilon$ displacement region of this SAME loxodromic element. The full small-displacement classifier identifies that region with the geodesic $\varepsilon$-thin component of its primitive axis. Its primitive length is $<\varepsilon/2$ by step 3.1. Hence $$B(y_n,u)\subset V_\varepsilon(X_n).$$ This is a whole fixed-radius open-ball inclusion with a strict uniform displacement margin. It does not assert that a loxodromic limit element remains loxodromic after passing to a different surface. [F3, step 1.1, step 3.1, construct, algebra]

5.1 Lift $y_n$ to $w_n\in\overline B_H(i,R_0+1)$ using its bounded quotient distance, and pass to a subsequence with $w_n\to w$. Choose a small fixed Euclidean disc $D\Subset H^2$ about $w$ whose points have hyperbolic distance less than $u/4$ from $w$. Then for late $n$, $D\subset B_H(w_n,u/2)$ and its projection is injective, since $\operatorname{inj}(y_n)\ge\eta>u$. By step 4.1 and [F4], $$\int_D|f_n|\le\int_{B(y_n,u)}|q_n|\le\int_{V_\varepsilon(X_n)}|q_n|\longrightarrow0.$$ The locally uniform unscaled convergence from step 2.1 gives $\int_D|f|=0$. Continuity makes $f$ vanish throughout $D$, so [F4] makes it identically zero on the connected half-plane, contradicting the nonzero descended limit in step 2.1. This proves existence of $d(A,\varepsilon)>0$, which may be decreased to at most one. The argument survives any degeneration of the witness core to a cusp: the actual prelimit balls were geodesic-thin and their limit chart remained ordinary and open. [F2, F4, step 2.1, step 3.1, step 4.1, given, construct, algebra]

6.1 For the last count let $e$ be the number of geodesic $\varepsilon$-thin annuli, and let the thick components have cap genera $g_j$, boundary counts $b_j$, and number $k$. All $N$ cusps supply one boundary each and the $e$ annuli supply two, so $\sum_jb_j=2e+N$. The exact identity in [F1] and [F4] give $$2-2g-N=\sum_j(2-2g_j-b_j)=2k-2\sum_jg_j-2e-N.$$ Thus $e=g-1+k-\sum_jg_j\le g-1+k$. Each thick component has Euler characteristic at most $-1$, so $k\le2g-2+N$. Consequently $e\le3g-3+N=S$. Distinct primitive short cores give distinct thin annuli, by [F3]. If $V_\varepsilon(X)$ is nonempty this forces $S\ge1$, and its at most $S$ annuli have total quadratic mass at least $d$. One therefore carries mass at least $d/S$, with its ACTUAL primitive core length still $<\varepsilon/2$ by the definition of $V_\varepsilon$. This proves the count and very-short-class mass consequence needed for curve propagation. [F1, F3, F4, step 5.1, given, construct, algebra] ∎

## Actual reading and remaining operation

The authentic Iteration complete Proposition2.7 proof and Section7.3 short-curve/mass propagation were read, along with complete Sections2.3–2.4 and5–7. The current full actual finite-area cusp, thick topology/count, unscaled mass/capture, cusp-tail, arbitrary local thin/model, identity and real change-of-variables supplier proofs were read. The accepted thick topology/count supplier is bound in its current proved-curvilinear successor; no geodesic-triangulation/Munkres import is made here.

This supplies the actual uniformly positive mass attached to one very-short core class. It does not supply the three-dimensional liftability/cylinder correspondences, comparison-chart geometry or the finite cyclic-cylinder-to-essential-torus construction. Those are the separate topological/geometric operations in the general gluing argument, not consequences inferred from quadratic mass alone.
