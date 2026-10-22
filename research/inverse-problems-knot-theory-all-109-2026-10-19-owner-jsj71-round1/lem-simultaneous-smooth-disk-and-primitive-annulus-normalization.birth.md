---
id: lem-simultaneous-smooth-disk-and-primitive-annulus-normalization
kind: lemma
title: "Simultaneous smooth disk and primitive-annulus normalization"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [def-axiom-of-choice, def-countable-choice, thm-choice-implies-dependent-implies-countable-choice, lem-incompressible-surface-in-solid-torus-is-meridian-or-boundary-parallel, lem-relative-transversality-for-embedded-surfaces, thm-isotopy-extension, lem-smooth-sphere-diffeomorphisms-extend-over-balls, lem-choice-free-smooth-torus-curves-and-annulus-strips]
justified_by: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the solid-torus disk/compression supplier. The finite disk sweep, collar, graph and isotopy extensions need only its countable-choice consequence. No choice hypothesis is removed from that supplier."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Friedhelm Waldhausen, Eine Klasse von 3-dimensionalen Mannigfaltigkeiten I (1967)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/wald.pdf"
      locator: "§2, Lemmas2.2–2.4 and complete proofs, printed317–318 / PDF10–11; the source is semilinear, while all isotopies here are supplied by actual smooth graph and cap constructions"
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Proposition1.11 proof, printed17: simultaneous disk or vertical-annulus normalization in the cut-open solid torus"
---

## Statement

Assume full AC. All isotopies below are jointly smooth ambient isotopies, stationary near their time endpoints.

(a) In a parametrized smooth ball or solid torus $U$, two finite disjoint systems of proper smooth disks, paired so corresponding disks have the same boundary, are ambient isotopic relative to $\partial U$. If the systems initially agree in a boundary collar, the isotopy may fix one smaller common boundary collar. The families may be empty.

(b) In the product solid torus $V=D^2\times S^1$, a finite disjoint system of proper incompressible smooth annuli whose boundary circles are vertical product fibers is ambient isotopic, relative to the boundary, to vertical annuli $a_j\times S^1$, with disjoint proper arcs $a_j\subset D^2$. If the annuli are already vertical on a boundary collar, a smaller collar may be fixed.

(c) A finite disjoint system of proper smooth disks in $V$ whose boundary circles are horizontal and meridional is ambient isotopic, relative to the boundary, to horizontal disks (graphs of smooth maps $D^2\to S^1$). The same common-collar assertion holds if the disks are already horizontal there.

## Facts & Assumptions

**Given:** Full AC, the ball or product solid torus, and the finite smooth disk or annulus systems satisfying the stated marking hypotheses.

[A1] Full AC implies countable choice ([[def-axiom-of-choice]], [[def-countable-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F1] The solid torus is irreducible, interior tori compress there, and a ball bounded by two disk faces has a jointly smooth common-boundary cap sweep retaining its marked rim charts ([[lem-incompressible-surface-in-solid-torus-is-meridian-or-boundary-parallel]], Proof1.1 and the same-boundary disk argument in Proof4.2). A ball is irreducible as well: place its supplied parameter in the standard solid torus and choose the ball side away from the connected exterior.

[F2] Finite relative smooth general position and ambient extension are [[lem-relative-transversality-for-embedded-surfaces]] and [[thm-isotopy-extension]], Statements. For disks whose boundary is fixed, the extension may fix $\partial U$: in a neat collar coordinate $q\ge0$, the prescribed velocity vanishes at $q=0$ and hence is $q$ times a smooth coefficient by the integral formula $v(s,q)=q\int_0^1\partial_qv(s,tq)\,dt$; extend that coefficient in the transverse coordinate and retain the factor $q$. Its flow fixes the boundary pointwise.

[F3] Marked smooth sphere maps extend over balls with their prescribed collar form ([[lem-smooth-sphere-diffeomorphisms-extend-over-balls]], Statement). The finite smooth disk-face lens construction in [F1] consequently retains actual disk parameters, rather than only a topological ball identification.

[F4] Smooth annulus arcs and torus curves admit the finite smooth strip reductions of [[lem-choice-free-smooth-torus-curves-and-annulus-strips]], full proof.

## Proof

1.1 For (a), make corresponding disk collars disjoint just inside their common boundary by small normal graphs, fixing every boundary point. In collar coordinates $(s,y,q)$ with the common boundary at $y=q=0$, use graphs $y=\pm\varepsilon q$ after first straightening each neat collar; the positive inward derivative and compactness give one common embedding width. Extend by [F2]. If a common outer collar is to be retained, make the separation just past its inner edge with a smooth cutoff, and take all moving supports away from a smaller outer collar. Apply relative general position to the remaining disk interiors. Their intersections are then finitely many circles, with no arcs because all boundary collars have been separated. Choose a circle innermost on a disk of the second system. It bounds a disk $E$ there with interior missing the first system, and a disk $E'$ on a member of the first system. Their sphere bounds a ball by [F1]. The complement of $E'$ in its proper disk reaches the boundary and must lie outside this interior ball. Every other disk of the first system also has boundary outside and misses the ball's boundary, so lies outside. Push $E'$ just past $E$ by [F1]'s smooth disk sweep and its thin rim extension. It removes that circle and any additional second-system circles in $E'$ without creating any. No other first-system disk moves. Repeat until the two systems have disjoint interiors. [A1, F1, F2, F3, given, construct]

2.1 Each corresponding pair now bounds a ball with their common rim; the marked lens and cap sweep of [F1] gives an isotopy from one to the other. No other disk of either system can enter that ball, because it is disjoint from its boundary and has its own boundary outside. The finitely many pair balls have disjoint interiors: otherwise disjoint sphere frontiers force nesting, and the inner ball's rim would have to lie inside the outer ball, although the two rims are disjoint curves on $\partial U$. Use the sweeps simultaneously, with disjoint slightly enlarged supports, and undo the preliminary collar changes in reverse. This is an ambient isotopy relative to $\partial U$ by [F2]'s vanishing-velocity construction. In the common-collar case perform the construction on disks truncated at an inner collar level; extend each moving rim through the already common annulus to the stationary smaller outer collar. The same smooth rim graph interpolation as in [F1] has support away from that smaller collar. Thus the isotopy fixes it throughout. Time changes stationary at all joins give (a), including the empty case. [A1, F1, F2, F3, step 1.1, construct]

3.1 For (b), choose the horizontal meridian disk $D_0=D^2\times\{1\}$ and put the annuli transverse to its interior, retaining their vertical boundary circles. Every boundary component meets $\partial D_0$ exactly once. Remove all intersection circles by the innermost-disk pushes of step1.1: incompressibility makes a circle innermost on $D_0$ bound a disk on its annulus, and the annulus outside that disk reaches $\partial V$, hence lies outside the irreducibility ball. All other annuli are proper and disjoint from that ball's frontier, so the same push removes circles without moving them. Every remaining intersection arc has its endpoints on boundary components. An arc with both endpoints on one such component is impossible, because that component has exactly one intersection with $\partial D_0$. Consequently each annulus has exactly one spanning intersection arc $a_j$, and these arcs are disjoint in $D_0$. The annuli $A'_j=a_j\times S^1$ are therefore a disjoint vertical system with exactly the original boundary circles. Near $D_0$ interpolate the transverse annulus graph to its constant product graph, keeping the boundary fixed; its nonzero transverse derivative stays positive on one common finite compact strip. Extend by [F2]. Now the original and target systems agree near $D_0$. [A1, F1, F2, F4, step 1.1, construct]

4.1 Cut $V$ along that product collar of $D_0$. The remaining manifold is a ball, and each cut annulus is a proper disk, since it was cut along its one spanning arc. The original and target disk systems have the same boundary and agree on a boundary collar. Apply (a) in this ball with the smaller common collar fixed, and reglue. The fixed collar makes both the ambient maps and all time derivatives paste smoothly across the meridian cut. It also retains the original boundary circles. If an outer boundary collar was originally vertical, all preceding graph adjustments and disk pushes were chosen away from a smaller such collar; retain it in (a). This proves (b) as a genuine simultaneous smooth assertion. [A1, F1, F2, step 2.1, step 3.1, construct]

5.1 For (c), a horizontal meridional boundary circle projects to $\partial D^2$ with degree $\pm1$: the projection is a local diffeomorphism, and its meridian coefficient is $\pm1$ because its primitive slope is a meridian. Orient it to make that degree one. Thus every boundary circle is a graph $e^{2\pi i f_j(\theta)}$, with a smooth real periodic lift $f_j$, since its fiber degree is zero. The disjoint graphs have a cyclic order; choose their lifts and indexing so $$f_1(\theta)<\cdots<f_k(\theta)<f_1(\theta)+1$$ for all $\theta$. Choose real constants with the same strict cyclic inequalities. Interpolate radially between these constants near the center and the functions $f_j$ near the boundary, using a smooth radial cutoff zero near the center and one near the boundary. Every gap and the final wrap gap stay positive by convexity, so this gives disjoint smooth horizontal graph disks with the prescribed boundaries. If horizontal collar graphs were already specified, use their real lifts on a sufficiently short collar first; compactness gives uniform positive gaps, and the same interpolation from their inner-edge values to constants, stationary at that edge with a small smooth extension, retains a smaller collar exactly. Compare the original disk system to these graph disks by (a), fixing that common collar where supplied. All selections were finite; the only choice assumptions are the declared ones in [A1] and its named suppliers. [A1, F1, F2, F4, step 2.1, construct] ∎
