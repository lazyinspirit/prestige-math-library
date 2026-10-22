---
id: lem-framed-link-diagram-calculus
kind: lemma
title: "Framed link diagrams and local Reidemeister moves in plane products"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-countable-choice
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-regular-oriented-link-diagram
  - def-oriented-reidemeister-moves
  - def-planar-isotopy-of-link-diagrams
  - thm-oriented-reidemeister-equivalence-theorem
  - lem-every-oriented-link-admits-a-regular-projection
  - lem-a-smooth-isotopy-of-links-can-be-put-in-general-position
  - lem-a-generic-isotopy-of-links-has-only-reidemeister-singular-times
  - thm-parametric-transversality
  - thm-transverse-preimage-theorem
  - def-kauffman-bracket-smoothing-and-loop-value
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Assumes ACω only for the cited generic-position and oriented Reidemeister results. Finite-jet perturbations, local framing tracking, and the skein calculations are choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Józef H. Przytycki, Fundamentals of Kauffman Bracket Skein Modules, arXiv:math/9809113 (1998), §3, Lemma 3.5 and Proposition 3.6"
      url: "https://arxiv.org/pdf/math/9809113"
    - title: "Hoel Queffelec, Reidemeister's theorem using transversality, arXiv:2406.18203v1 (2024), §§2–3.6"
      url: "https://arxiv.org/pdf/2406.18203v1"
---

## Statement

Assume the Axiom of Countable Choice. Let $\mathcal A$ be a compact smooth
planar annulus and set
$X=\operatorname{int}(\mathcal A)\times(-1,1)
=\operatorname{int}(\mathcal A\times[-1,1])$, the interior of a solid torus.
A regular annular diagram is a finite immersed union of circles in
$\operatorname{int}(\mathcal A)$ with only finitely many transverse double
points, no triple points, and over/under data from the interval coordinate.
The **blackboard framing** is the normal strip lying in the annulus. A specified
framing differs from it on each component by an integer full-twist correction,
measured by the winding number of its normal direction relative to the
blackboard normal. Count the correction positively for an A-type full twist,
whose local curl has A-smoothing equal to the straight strip with one
contractible circle; count the opposite B-type twist negatively. Every framed
link in $X$ admits a regular annular diagram. The correction may be recorded
as signed full-twist marks on diagram arcs; its total is additive when arcs
are concatenated.

If two framed links in $X$ are ambient isotopic through links in $X$, their
regular annular diagrams are related by finitely many annular planar isotopies
and local oriented Reidemeister I, II, and III moves in disks contained in
$\operatorname{int}(\mathcal A)$. Reidemeister II and III and planar isotopy
preserve the blackboard framing; an A-type or B-type Reidemeister I move
changes it by one corresponding full twist, so the correction integer changes
by the opposite twist. For framed links in $S^3$, every link also admits a
regular planar diagram, and any two diagrams of ambient-isotopic framed links
are related by a finite planar-isotopy/Reidemeister sequence with the same
framing-correction rule.

## Statement references

[Józef H. Przytycki, *Fundamentals of Kauffman Bracket Skein Modules* (1998), §3, Lemma 3.5 and Proposition 3.6](https://arxiv.org/pdf/math/9809113)

[Hoel Queffelec, *Reidemeister's theorem using transversality* (2024), arXiv:2406.18203v1, §§2–3.6](https://arxiv.org/pdf/2406.18203v1)

## Facts & Assumptions

**Given:** Countable choice, a framed link in $S^3$ or $X$, and a framed ambient isotopy between two such links.

[A1] Countable choice is the assertion that every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[F1] A regular oriented link diagram is an immersion with finitely many transverse double points, no triple points, and over/under and orientation data; every oriented link in $S^3$ has a regular projection under countable choice ([[def-regular-oriented-link-diagram]], [[lem-every-oriented-link-admits-a-regular-projection]]).

[F2] Under countable choice, two regular oriented diagrams in $S^3$ represent equivalent oriented links exactly when a finite sequence of planar isotopies and oriented Reidemeister I, II, and III moves connects them ([[thm-oriented-reidemeister-equivalence-theorem]]).

[F3] Under countable choice, a smooth isotopy in $\mathbb R^3$ with regular endpoint projections can be perturbed, fixed near its endpoints, so its projection has finitely many isolated cusps, quadratic double tangencies, and transverse triple events; each event time is distinct ([[lem-a-smooth-isotopy-of-links-can-be-put-in-general-position]], [[lem-a-generic-isotopy-of-links-has-only-reidemeister-singular-times]]).

[F4] Parametric transversality gives generic parameter slices transverse to any fixed finite list of smooth strata, and a transverse preimage of codimension $c$ in a source of dimension $m<c$ is empty ([[thm-parametric-transversality]], [[thm-transverse-preimage-theorem]]).

[F5] R1, R2, and R3 are the local kink, two-strand cancellation, and strand-past-crossing replacements, with all sign and orientation variants; planar isotopy transports the diagram without creating or deleting a crossing ([[def-oriented-reidemeister-moves]], [[def-planar-isotopy-of-link-diagrams]]).

[F6] The A-smoothing is the left/right pairing with weight $A$, and the B-smoothing is the top/bottom pairing with weight $A^{-1}$ in the KT-29 source chart ([[def-kauffman-bracket-smoothing-and-loop-value]]).

## Proof


1.1 For the core $L:C\hookrightarrow X$ of a framed link, write its annular projection as $g:C\to\operatorname{int}(\mathcal A)$. Since $L(C)$ is compact in the interior, its projection has positive distance from $\partial\mathcal A$. Fix an auxiliary smooth embedding $x:C\hookrightarrow\mathbb R^3$. Perturb the two coordinates of $g$ by a finite-dimensional family of polynomials of degree at most five in $x$, multiplied by a smooth cutoff supported in $\operatorname{int}(\mathcal A)$ and equal to one near $g(C)$. At any three distinct points $x_1,x_2,x_3$, the polynomials $p_i(x)=\prod_{j\ne i}\lVert x-x_j\rVert^2$ vanish to first order at the other two points and are nonzero at $x_i$; multiplying by affine functions therefore prescribes independently the value and first derivative of both projected coordinates at these points. Thus the family is a submersion on every one-, two-, and three-point first-jet space. [A1, F4, given, construct]

2.1 Apply [F4] to the derivative-zero stratum, the pair-equality diagonal, the nontransverse-pair stratum, and the triple-equality diagonal. The derivative-zero stratum has codimension two on the one-dimensional source, so it is avoided. Pair equality has codimension two on the two-dimensional distinct-pair source and is transverse, hence gives isolated double points; tangency imposes one additional independent equation, so its codimension is three and it is avoided. Triple equality has codimension four on the three-dimensional distinct-triple source, so it is avoided. Choose a good parameter $a$ in a ball about $0$ on which every core $(g_{ta}(x),L_3(x))$, $0\leq t\leq1$, remains embedded in $X$; compactness, openness of embeddings in the $C^1$ topology, and positive boundary clearance give such a ball. The parameter path then gives a smooth core isotopy $h_t$. [A1, F4, step 1.1, algebra, construct]

3.1 Let $F$ denote the original union of framing annuli. To transport the given framing along $h_t$, the map $(x,t)\mapsto(h_t(x),t)$ has compact embedded trace in $X\times[0,1]$, with spatial projection compactly contained in $X$. In local product coordinates along this trace, extend the spatial core velocity across the normal coordinates, multiply by cutoffs, and combine the extensions with a finite partition of unity. This gives a time-dependent vector field $V_t$ on $X$, supported in a fixed compact subset of $X$ and agreeing with $\dot h_t$ along every $h_t(C)$. Its flow $H_t$ exists on $[0,1]$ and satisfies $H_t\circ h_0=h_t$ by uniqueness of solutions. Hence each original framing annulus is carried to an embedded annulus $H_t(F)$ in $X$. This gives an ambient isotopy of the framed link, so the framing remains transported and embedded throughout the perturbation. [step 2.1, construct]

3.2 The transverse double pairs are finite. Immersion gives, near each point of the compact source, a source arc on which the projection is injective; finitely many such arcs exclude double pairs near the diagonal in $C\times C$. Away from that diagonal, the double-pair set is closed in a compact set and is discrete by transversality, hence finite. This proves the annular regular-diagram assertion. For a link in $S^3$, choose orientations on its finitely many components, move it off $\infty$, and apply [F1]. [F1, step 2.1, algebra]

4.1 The same construction has the relative parameterized form needed for a whole isotopy. Write its cores as $h_t:C\to X$ and its supplied framing annuli as $E_t$. If $h'_t$ is sufficiently $C^1$-close to $h_t$ and equal to it on fixed endpoint collars, set $h_{r,t}=h_t+r(h'_t-h_t)$ for $0\le r,t\le1$ in the ambient $\mathbb R^3$ coordinates. Compactness of $C\times[0,1]$ gives uniform immersion bounds, separation of distant source points, and clearance from $\partial X$; consequently all $h_{r,t}$ are embeddings in $X$ for a sufficiently small perturbation. The trace $(x,r,t)\mapsto(h_{r,t}(x),r,t)$ is embedded. In finitely many spatial normal-coordinate charts along this trace extend $\partial_rh_{r,t}$ constantly in the spatial normal coordinates, and use smooth cutoffs and a finite partition of unity to obtain a vector field $V_{r,t}(y)$, smooth jointly in all variables, with one fixed compact support in $X$ and value $\partial_rh_{r,t}(x)$ at $y=h_{r,t}(x)$. The charts can be taken on slightly extended parameter intervals, so the construction is smooth at parameter faces as well. On the $t$-endpoint collars this velocity is zero; multiply the extension by a $t$-cutoff zero on smaller such collars and one outside the original collars. This preserves its prescribed core values and makes $V_{r,t}=0$ on the smaller collars. Integrate in the auxiliary variable $r$, with initial condition $\Psi_{0,t}=\mathrm{id}$. Compact support gives existence for the full interval, and smooth parameter dependence and uniqueness give $\Psi_{r,t}h_t=h_{r,t}$. Each $\Psi_{r,t}$ is an ambient diffeomorphism; it is the identity for $t$ near either endpoint. Therefore $E'_t=\Psi_{1,t}(E_t)$ is a smooth family of embedded framing annuli over $h'_t$ agreeing exactly with the supplied framed family on endpoint collars. If $E_t=G_t(E_0)$ is the supplied ambient framed isotopy, then $\Psi_{1,t}\circ G_t$ is itself an ambient isotopy realizing this transported family, with the same endpoint maps. For each $r$, the analogous family $\Psi_{r,t}(E_t)$ is framed, so this is a deformation of the whole original framed isotopy relative its endpoints, not merely a lift of one perturbed slice. No full twist is inserted at an endpoint. [step 3.1, given, construct]

5.1 For a supplied framed isotopy in $X$, reparametrize it to be constant near its endpoints and choose regular endpoint diagrams using steps 1.1, 2.1, 3.1, and 3.2. Regard $X$ as an open subset of $\mathbb R^3$ by the annulus-product coordinates. Its compact core track has positive distance from the boundary of $X$. Apply [F3] with an arbitrarily $C^1$-small perturbation fixed on endpoint collars, small enough for both this clearance and step 4.1. That step lifts the actual entire perturbed core isotopy to a framed family with exactly the same framed endpoints. Every exceptional event and every regular interval remains in $X$; by [F3] its projected annular diagrams differ by a finite sequence of R1, R2, R3, and planar isotopies in disks of $\operatorname{int}(\mathcal A)$. For a supplied framed isotopy in $S^3$, first arrange that its core track misses the point at infinity. Indeed its smooth compact two-dimensional parameter source has image of empty three-dimensional interior: in finitely many source and target charts a bounded derivative covers its image by $O(N^2)$ balls of radius $O(1/N)$, of total three-volume $O(1/N)$. Thus there is a point $q$ outside that core track arbitrarily close to infinity; no claim is made that $q$ misses the unshrunk annuli. Write the supplied annulus family as $e_t:C\times[-1,1]\to S^3$, with $e_t(x,0)=h_t(x)$. The compact core track has positive round-metric distance from $q$. Uniform continuity of $e$ on its compact parameter domain therefore gives one $\varepsilon>0$ such that $e_t(C\times[-\varepsilon,\varepsilon])$ misses $q$ for every $t$. Replace each annulus representative by this thin core band. Its normal derivative is multiplied by the positive number $\varepsilon$, so its specified normal-section homotopy class and endpoint framing integer are unchanged. If literal annulus representatives are retained, at each endpoint $i=0,1$ the family $e_i(x,((1-s)+s\varepsilon)u)$, $0\le s\le1$, is an actual isotopy of embedded annuli fixing the core. Extend its velocity in local spatial charts and use finite cutoffs as in step 3.1 to obtain an ambient realization; adjoining this shrink at the initial end and its inverse at the terminal end restores the original annuli. These endpoint paths fix the core diagram and change no framing integer. The middle thin-annulus family now has compact image disjoint from $q$. Choose a rotation of the round $S^3$, arbitrarily close to the identity, carrying $q$ to infinity, and a small path of rotations from the identity to it. The regular endpoint projections stay regular along this path when it is chosen small enough, by openness of regular diagrams for these compact endpoints. Rotate the entire supplied framed family, obtaining a core track compactly contained in $\mathbb R^3$, and join its endpoints to the original framed endpoints by these rotation paths. The endpoint paths have only planar isotopy of their regular decorated diagrams. Apply [F3] and the relative lift of step 4.1 to the middle $\mathbb R^3$ isotopy (with compact support in $\mathbb R^3$ instead of $X$); its flows extend to $S^3$ by fixing infinity. This gives the required finite sequence for the original framed endpoints, rather than using a core-only equivalence to infer framing preservation. [A1, F3, step 1.1, step 2.1, step 3.1, step 4.1, step 3.2, given, construct]

6.1 A planar isotopy transports the blackboard strip continuously. In R2 and R3 the participating strips deform inside the move ball without a full rotation of the normal direction. In an A-type R1 move the blackboard strip gains one full twist, and in the opposite B-type move it loses one; this is the local curl convention in [F6]. Since the framed link isotopy transports the specified annulus without changing its homotopy class, the recorded integer correction changes by the negative of that blackboard turn. Thus the move sequence preserves the framed isotopy class, and all framing changes in the statement are exact. [F5, F6, step 3.1, step 4.1, step 5.1, given, algebra] ∎

