---
id: lem-cg-bowditch-quantitative-short-loop-control
kind: lemma
title: "Polygon transfer, the basin as the shrinkable class, and the short-loop criterion"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 15
deps: [thm-finite-products-of-compact-spaces, lem-closed-subset-of-a-compact-space-is-compact, cor-pi-is-the-first-positive-sine-zero, def-axiom-of-choice, def-cg-cat-zero-cat-one-and-local-geodesic, def-cg-cyclic-small-mesh-polygon-and-midpoint-energy, def-cg-short-loop-homotopy-and-nonshrinkability, def-metric-ball, def-metric-compactness, def-metric-compactness-variants, def-metric-continuity, def-metric-convergence, def-metric-space, def-pointwise-uniform-and-uniformly-cauchy-convergence, def-real-limit, lem-cg-cat-one-short-and-closed-local-geodesics, lem-cg-comparison-convexity-and-model-spaces, lem-cg-finite-spherical-comparison-disks-and-radius-estimates, lem-cg-metric-target-length-reparametrization-and-lower-semicontinuity, lem-cg-polygon-midpoint-drop-and-equality, lem-cg-uniform-energy-decrement-and-short-class-closedness, thm-cg-compact-local-cat-one-short-circle-criterion, thm-compact-implies-the-other-compactness-forms, cor-monotone-converges-iff-bounded]
proof_strategy: direct
axiom_use: "AC enters through the uniform energy supplier and the compact short-circle criterion, including its scaled comparison and attained circle. Finite chord replacement, midpoint slides and common sampling require no additional choice."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "B. H. Bowditch, Notes on locally CAT(1) spaces (Aberdeen preprint, 27 scanned sheets)"
      url: "https://www.bhbowditch.com/papers/bhb-catone.pdf"
      locator: "§3.4, printed pp. 30–32 (polygonal transfer of short loops; the proof of the short-loop criterion 3.1.4–3.1.7)"
    - title: "Martin R. Bridson and André Haefliger, Metric Spaces of Non-Positive Curvature (Springer Grundlehren 319, 1999; author-hosted PDF)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bridsonhaefligerx.pdf"
      locator: "II.4.12–II.4.17 (compact balls, injectivity radius, systole, the minimum embedded circle)"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Appendix I.2.8, printed pp. 502–503 (the $\\kappa>0$ criterion)"
verification:
  audited: "2026-10-08"
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $X$ be compact, geodesic and locally CAT(1), with the uniform radius $l$ and the loop conventions of [[def-cg-short-loop-homotopy-and-nonshrinkability]], and let
$$m:=\inf\{\ell>0:\ X\ \text{contains an isometrically embedded circle of length }\ell\},$$
with $m:=+\infty$ if the set is empty ([[def-cg-cat-zero-cat-one-and-local-geodesic]]). Then:

**(i) Polygon transfer.** For every short rectifiable loop $\gamma$ and every $h\in(0,l)$ there are $n\ge3$ and a cyclic $n$-tuple $x\in P_h(n)$ with $L(x)\le L(\gamma)$ ([[def-cg-cyclic-small-mesh-polygon-and-midpoint-energy]]) such that $\gamma$ and the polygonal loop of $x$ are short-loop homotopic through loops whose lengths never exceed $L(\gamma)$; the transfer is by fine chord subdivision and replacement of chords by unique short geodesics.

**(ii) Basin and shrinkability agree on polygons.** Every polygon $x\in P_h(n)$ with $L(x)<2\pi$ in the zero-limit basin $C^0_h(n)$ is short-loop homotopic to a constant through loops whose lengths never exceed $L(x)$; conversely, every $x\in P_h(n)$ that is short-loop homotopic to a constant through polygons of $P_h(n)$ lies in $C^0_h(n)$. Hence, for fixed $n$ and $h<l$, on the piece $L(x)<2\pi$ membership in the basin is equivalent to short-shrinkability.

**(iii) Short loops below $m$, and attainment when $m<2\pi$.** Every short loop $\gamma$ with $L(\gamma)<m$ is shrinkable; equivalently, every loop of length $<\min\{m,2\pi\}$ is shrinkable. If $m<2\pi$, then $m$ is attained: $X$ contains an isometrically embedded circle of length $m$, it is a short nonshrinkable loop, and $m$ is the minimum length of a nonshrinkable loop.

**(iv) The CAT(1) case.** If $m\ge2\pi$, then every short loop is shrinkable and $X$ is CAT(1). If $X$ is CAT(1), then $m\ge2\pi$ and again every short loop is shrinkable. Consequently, for compact geodesic locally CAT(1) $X$, the following are equivalent: (a) $X$ is CAT(1); (b) $m\ge2\pi$; (c) every short loop is shrinkable; (d) $X$ contains no isometrically embedded circle of length $<2\pi$. The equivalence of (a), (b) and (d) is the compact short-circle criterion ([[thm-cg-compact-local-cat-one-short-circle-criterion]]); (c) follows from (b) by (iii), and (c) implies (d) because an isometrically embedded circle of length $<2\pi$ is a short closed local geodesic, hence lies outside the basin and is nonshrinkable by (ii).

## Facts & Assumptions

**Given:** AC and a compact geodesic locally CAT(1) space $X$ with uniform radius $l<\pi/2$; a short rectifiable loop $\gamma$ and $h\in(0,l)$; fixed $n\ge3$ and tuples $x\in P_h(n)$; the number $m$ of the statement.

[F1] [[def-cg-short-loop-homotopy-and-nonshrinkability]]: the loop conventions, the uniform-plus-length topology, short-loop homotopies and shrinkability, and the fact that short-loop homotopy is an equivalence relation; [[lem-cg-metric-target-length-reparametrization-and-lower-semicontinuity]]: arclength normalization, additivity of length under subdivision, lower semicontinuity of length, and the chord bound.

[F2] [[lem-cg-finite-spherical-comparison-disks-and-radius-estimates]], [[lem-cg-comparison-convexity-and-model-spaces]], [[lem-cg-cat-one-short-and-closed-local-geodesics]]: in a CAT(1) space, geodesics of length $<\pi$ are unique and depend continuously on their endpoints, and balls of radius $<\pi/2$ are convex. Locally, apply these results inside the uniform CAT(1) balls $\bar B(p,l)$ of [[def-cg-cyclic-small-mesh-polygon-and-midpoint-energy]]: points at distance $<l$ have unique short geodesics in $X$, since any such geodesic stays in the radius-$l$ ball about its initial point. Convexity of larger ambient balls requires a separate comparison argument, as in step 1.4 below.

[F3] [[lem-cg-polygon-midpoint-drop-and-equality]] and [[def-cg-cyclic-small-mesh-polygon-and-midpoint-energy]]: the midpoint operation $f$ with $\zeta_i\le(\xi_i+\xi_{i+1})/2$, the basin $C^0_h(n)$, its description by an iterate of length $<l/2$, the equality case (constant tuples and equally spaced lists of points of a closed local geodesic), convergence of basin iterates to a constant tuple in (v), and the continuity of $f$ and of the length and energy functionals.

[F4] [[lem-cg-uniform-energy-decrement-and-short-class-closedness]]: the uniform decrement (i), the bounded iteration (ii), and the statement that the basin is open in $P_h(n)$ and closed in the piece $\{L<2\pi\}$, and that no short-loop homotopy inside that piece connects a basin tuple to a tuple outside it.

[F5] [[def-metric-compactness]], [[def-metric-compactness-variants]], [[thm-compact-implies-the-other-compactness-forms]], [[thm-finite-products-of-compact-spaces]]: compactness of $X$ and its finite product $X^n$, and sequential compactness of compact metric spaces.

[F6] [[def-metric-continuity]], [[def-metric-convergence]], [[def-pointwise-uniform-and-uniformly-cauchy-convergence]], [[def-real-limit]]: continuity, convergence, and the preservation of limits under continuous maps.

[F7] [[thm-cg-compact-local-cat-one-short-circle-criterion]] and [[def-axiom-of-choice]]: the compact criterion (i), its attained circle of length $2\operatorname{injrad}(X)<2\pi$ in (ii), and its scaled all-pair comparison (iii) for triangle perimeter $<2R$ under uniqueness below $R\le\pi$. AC is required by these suppliers.

[F8] [[lem-closed-subset-of-a-compact-space-is-compact]]: closed metric balls in the compact space $X$ are compact.



## Proof

**Proof technique:** direct.

1.1 **Continuity of finite polygon loops.** A tuple with mesh $<l$ determines its normalized polygonal loop continuously in the uniform-plus-length topology. Its length is a finite sum of continuous endpoint distances. On each edge, the unique short geodesic depends continuously on its endpoints by [F2]; normalized parametrization assigns that edge its length divided by the total length. The cumulative break times are continuous when the total length is positive. Edges tending to length zero have image diameter tending to zero, so do not affect uniform continuity at a coincident break time. If total length tends to zero, the whole image tends to its initial vertex. Thus degenerate edges and constant tuples are included. [F1, F2, F3, F6, algebra]

1.2 **Closed local geodesics cannot be short-shrunk.** A continuous short-loop homotopy $\gamma_s$ has $b:=\max_sL(\gamma_s)<2\pi$, since length is continuous in the specified topology. Normalization and the chord bound make every loop $b$-Lipschitz. Choose $N$ with $2b/N<h<l$, and sample every loop at the fixed times $j/N$. This gives a continuous family in $P_h(N)$, with polygon lengths at most $b$. If one endpoint is a nonconstant closed local geodesic, its sampled tuple is equally spaced and every consecutive triple is straight: its two consecutive arcs have total length $<l$ and lie in a uniform CAT(1) chart, where a short local geodesic minimizes by [F2]. That tuple is outside the basin by [F3]; the constant endpoint is inside. This contradicts the no-crossing statement [F4]. Hence every nonconstant short closed local geodesic is nonshrinkable. [F1, F2, F3, F4, F6, choose]

1.3 **Identifying the first embedded-circle length.** Put $r=\operatorname{injrad}(X)$. If $X$ is not CAT(1), [F7](ii) gives an embedded circle of length $2r<2\pi$ and $r>0$. Any embedded circle of length $\ell$ supplies two distinct minimizing arcs between its opposite points, each of length $\ell/2$; thus $r\le\ell/2$. Consequently $m=2r$, and this minimum is attained by the supplied circle. If $X$ is CAT(1), [F7](i) gives $m\ge2\pi$. No limit-of-length argument or unproved shortest-class replacement is used. [F1, F7, algebra]

1.4 **A loop shorter than $2r$ lies in a convex CAT(1) ball.** A zero-length loop is constant and requires no radius-zero ball. For a positive-length loop in the non-CAT(1) case take $0<L<2r$ and put $q=L/4<\pi/2$. Uniqueness holds below $r$ by its definition, so [F7](iii) gives all-pair comparison for triangles of perimeter $<2r$. The proof of the radius estimate [[lem-cg-finite-spherical-comparison-disks-and-radius-estimates]] (i) uses only triangles of perimeter at most $L<2r$: splitting the loop into equal halves and taking the midpoint $a$ of their endpoints therefore puts the loop in $K=\bar B(a,q)$. For $u,v\in K$, the center triangle has perimeter at most $2(d(a,u)+d(a,v))\le4q=L<2r$, and its spherical model segment stays in the radius-$q$ ball; scaled comparison shows $[u,v]\subseteq K$. Thus $K$ is convex, geodesic and compact by [F8]. To check local CAT(1) in $K$, intersect a sufficiently small ambient CAT(1) ball centered at $u\in K$ with $K$: both are convex for its short segments, so their intersection is a CAT(1) ball in the induced metric on $K$. Any isometrically embedded circle in $K$ would have opposite points whose two minimizing arcs have length equal to their ambient distance, at most $2q=L/2<r$, violating uniqueness in $X$. Hence $K$ has no short embedded circle and is CAT(1) by [F7](i). In the CAT(1) case the ordinary radius estimate applies to every short loop and its radius-$L/4$ ball is already convex and CAT(1). [F1, F2, F7, F8, algebra, construct]

2.1 **Length-controlled chord replacement (i).** Subdivide a normalized loop $\gamma$ into $n\ge3$ arcs of length $<h<l$. On one arc $\beta:[0,A]\to X$, parametrized by arclength, replace its suffix $[u,A]$ by the unique short geodesic from $\beta(u)$ to $\beta(A)$, and vary $u$ from $A$ down to $0$. The new arc length is $u+d(\beta(u),\beta(A))\le A$, continuous in $u$; its prefix and geodesic suffix depend continuously on $u$. After normalization this remains continuous: cumulative lengths of the finitely many unchanged pieces and the variable prefix and suffix are continuous, and a disappearing piece has diameter at most its disappearing length. Repeating for the finitely many arcs gives a short-loop homotopy to the polygon $x$ of subdivision points, with $\operatorname{mesh}(x)<h$ and every intermediate length at most $L(\gamma)$. A zero-length loop needs only the constant tuple. [step 1.1, F1, F2, F3, F6, construct]

2.2 **Midpoint sliding and basin contraction.** For a polygon $y$, let $y_i(t)$ be the point at fraction $t\in[0,1/2]$ on $[y_i,y_{i+1}]$. The path through $y_{i+1}$ gives $d(y_i(t),y_{i+1}(t))\le(1-t)\xi_i+t\xi_{i+1}$; hence this tuple has mesh at most the old mesh and total length at most $L(y)$. It joins $y$ to $fy$, and step 1.1 makes the polygon loops a continuous short-loop homotopy. For $x$ in the basin, concatenate these homotopies over intervals tending to the terminal time $1$. By [F3](v), the tuples $f^kx$ converge to a constant tuple at some $p$, their lengths tend to zero, and each intermediate vertex is within $\operatorname{mesh}(f^kx)/2$ of its old vertex. Thus the intermediate loops converge uniformly to $p$ and their lengths tend to zero. The concatenation extends continuously to the constant loop, with lengths at most $L(x)$. [step 1.1, F1, F2, F3, F6, algebra]

3.1 **A non-basin polygon has a nonconstant closed-geodesic limit.** Suppose $L(x)<2\pi$ and $x$ is not in the basin. Its iterated lengths and energies are bounded nonnegative monotone sequences, so converge by [[cor-monotone-converges-iff-bounded]], to $L_\infty>0$ and $E_\infty$ respectively; the positive length limit follows from nonmembership in the basin. Put $h_0=\operatorname{mesh}(x)\le h<l$. Mesh does not increase by [F3], so every iterate lies in $K:=\{y\in X^n:\operatorname{mesh}(y)\le h_0\}$. The continuity of mesh makes $K$ closed in compact $X^n$ ([F3], [F5]); hence $K$ is compact by [F8]. Its sequential compactness gives a subsequence $f^{k_j}x\to z\in K\subseteq P_h(n)$; continuity of $E$ and $f$ gives $E(z)=E_\infty=E(fz)$ and $L(z)=L_\infty$. Equality analysis in [F3] therefore makes $z$ a nonconstant equally spaced closed local geodesic tuple. The finitely many midpoint-sliding homotopies join $x$ to $f^{k_j}x$ through lengths at most $L(x)$. For large $j$, join each vertex of $f^{k_j}x$ to the corresponding vertex of $z$ by a short geodesic. Every intermediate tuple is uniformly close to $z$, so its mesh remains $<l$ and its length remains $<2\pi$, by finite-sum continuity and the positive margins $l-h$ and $2\pi-L(x)$. Step 1.1 thus joins that iterate to $z$ by a short-loop homotopy. If $x$ were shrinkable then $z$ would be shrinkable, contradicting step 1.2. Together with step 2.2 this proves that basin membership is equivalent to short-shrinkability, including homotopies through arbitrary normalized short loops. [step 1.1, step 2.2, step 1.2, F1, F3, F5, F6, F8, construct]

3.2 **Length-nonincreasing contraction in that ball.** First transfer the loop to a fine polygon in $K$ using step 2.1; all the suffix geodesics remain in $K$ by convexity. Contract each polygon vertex along its geodesic to $a$. This does not increase pairwise distances: in a spherical comparison triangle about $a$, with radial lengths $u,v\le q<\pi/2$ and included angle $\theta$, the radial points at fraction $t\in[0,1]$ have distance $d_t$ with $\cos d_t=\cos(t(u-v))-(1-\cos\theta)\sin(tu)\sin(tv)\ge\cos(u-v)-(1-\cos\theta)\sin u\sin v=\cos d_1$, because cosine decreases and sine increases on the relevant ranges. CAT(1) comparison in $K$ bounds the actual distance by this model distance, so every contracted polygon edge is at most its original length. Step 1.1 supplies continuity, including the constant endpoint. Therefore every loop of length $<\min\{m,2\pi\}$ is shrinkable, with a homotopy whose lengths never exceed its own length. [step 1.1, step 2.1, step 1.3, step 1.4, F1, F2, F7, algebra]

4.1 **Attainment and equivalence.** When $m<2\pi$, step 1.3 supplies the embedded circle of length $m$; it is a closed local geodesic and nonshrinkable by step 1.2, while step 3.2 excludes every shorter nonshrinkable loop. Thus $m$ is the attained minimum nonshrinkable length. If $m\ge2\pi$, step 3.2 shrinks every short loop and [F7](i) gives CAT(1). Conversely CAT(1) gives $m\ge2\pi$ and the same contraction. If all short loops are shrinkable, step 1.2 excludes every short embedded circle, so the criterion gives CAT(1). These are exactly (iii) and (iv); (i) is step 2.1 and (ii) is steps 2.2 and 3.1. AC is inherited from the compact criterion and its scaled comparison. [step 2.1, step 2.2, step 1.2, step 3.1, step 1.3, step 3.2, F1, F4, F7] ∎
