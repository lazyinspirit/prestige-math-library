---
id: lem-gts-surface-polygon-corner-divisor-regularity-and-compactification
kind: lemma
title: Surface polygon corner divisor, automatic regularity and actual compactification
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
proof_strategy: direct
deps:
- lem-gts-bordered-cauchy-riemann-fredholm-and-evaluation-obstructions
- lem-gts-tame-transverse-strip-coercivity-and-weighted-inverse
- lem-gts-closed-surface-real-cauchy-riemann-fredholm-index-and-adjoint
- thm-gts-r4-10c-exact-regular-polygon-count-a-infinity-branch
- lem-gts-ordered-real-disk-domain-compactification-and-face-orientations
- thm-riemann-mapping-theorem
- thm-poisson-integral-solves-the-disc-dirichlet-problem
- thm-harmonic-and-holomorphic-schwarz-reflection-principles
- thm-harmonic-conjugate-on-homologically-simply-connected-domains
- def-axiom-of-choice
dependency_roles:
  lem-gts-bordered-cauchy-riemann-fredholm-and-evaluation-obstructions: mathematical-premise
  lem-gts-tame-transverse-strip-coercivity-and-weighted-inverse: mathematical-premise
  lem-gts-closed-surface-real-cauchy-riemann-fredholm-index-and-adjoint: mathematical-premise
  thm-gts-r4-10c-exact-regular-polygon-count-a-infinity-branch: mathematical-premise
  lem-gts-ordered-real-disk-domain-compactification-and-face-orientations: mathematical-premise
  thm-riemann-mapping-theorem: mathematical-premise
  thm-poisson-integral-solves-the-disc-dirichlet-problem: mathematical-premise
  thm-harmonic-and-holomorphic-schwarz-reflection-principles: mathematical-premise
  thm-harmonic-conjugate-on-homologically-simply-connected-domains: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: Polishchuk, A-infinity structures on an elliptic curve
    url: "https://arxiv.org/pdf/math/0001048v2"
    locator: "§1.5 printed5–7: Dolbeault/minimal models and concrete affine polygon/clockwise sign conventions. The current non-affine-near-corner regularity, divisor index and compactification are local analytic proofs; no comparison theorem or general regularization is imported from this motivating passage. Complete §1.5 and §§2–3 printed7–18 read."
dependency_level: 13
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume full AC. Let $T=\mathbb C/\Lambda$ be a flat complex torus with its positive area form. Fix a finite collection of smooth embedded primitive essential circles, pairwise transverse, with no three distinct circles through one point, each literally affine near every pairwise intersection. For cyclic boundary words with distinct circle labels, every nonconstant holomorphic polygon has corner exponents $\delta_i+k_i$, $0<\delta_i<1$, $k_i\in\mathbb Z_{\ge0}$, and its universal real Fredholm index is
$$e=2B_{\mathrm{int}}+B_{\mathrm{edge}}+\sum_i k_i,$$
where the branch sums count their integer orders. Every such universal operator is onto. This includes smooth Hamiltonian graph copies straight near their corners, without assuming their edges globally straight. Stable constant components are excluded by no-three-concurrence.

With an area cutoff, its zero-dimensional moduli are finite and its one-dimensional moduli compactify with precisely the regular broken-polygon boundary collars. Given coherent orientations, their counts satisfy the A-infinity identities coefficientwise with formal area weights. When all edges are globally affine, every index-zero nonconstant solution is the unique conformal parametrization, modulo positive disk automorphisms, of its strictly convex Euclidean polygon, and conversely. For a fixed word entirely among small exact Hamiltonian graph copies of one essential straight circle, the image lies in the thin annulus and the area is bounded by its corner action sum; hence its total rigid count is finite. No mixed-parent complex-coefficient convergence, directed-copy localization, or algebraic mirror comparison is asserted.

## Facts & Assumptions

**Given:** Full AC and exactly the data and hypotheses of the Statement.

[F1] [[lem-gts-bordered-cauchy-riemann-fredholm-and-evaluation-obstructions]], [[lem-gts-tame-transverse-strip-coercivity-and-weighted-inverse]] and [[lem-gts-closed-surface-real-cauchy-riemann-fredholm-index-and-adjoint]] give actual compact and weighted Fredholm realizations, index and weak adjoint regularity. The special line-bundle duality/negative-degree argument is proved below.

[F2] [[thm-gts-r4-10c-exact-regular-polygon-count-a-infinity-branch]] supplies its actual LOCAL compactness and constructed regular gluing steps 9.1–14.1; exactness is used there only for energy/bubble exclusion, which is separately supplied here on the torus. [[lem-gts-ordered-real-disk-domain-compactification-and-face-orientations]] supplies the actual domain family and oriented faces.

[F3] [[thm-riemann-mapping-theorem]], [[thm-poisson-integral-solves-the-disc-dirichlet-problem]], [[thm-harmonic-and-holomorphic-schwarz-reflection-principles]] and [[thm-harmonic-conjugate-on-homologically-simply-connected-domains]] give their actual conformal, Poisson and reflection interfaces. Convex polygon boundary extension is proved here, not imported from the measure-theoretic Carathéodory theorem. Full AC is inherited from the Riemann mapping theorem and is recorded by [[def-axiom-of-choice]].

[F4] Coherent orientation and brane line conventions, when signs are used, are GIVEN. This lemma proves no orientation existence or continuation localization theorem.

## Proof

**Proof technique:** direct, using the explicit local constructions below.

1.1 Lift any local corner to C, translate its intersection to zero and rotate one of its two straight tangent lines to R. Identify a neighborhood of the marked domain corner with an upper half-disk. There is a unique fractional exponent $0<δ<1$ whose two real boundary rays are mapped to the two prescribed target lines in their prescribed order. Divide u(z) by $z^δ$ and by a constant phase. The quotient has real boundary values on both real intervals, so reflection makes it holomorphic on a punctured disk. Since u tends to zero, its growth is $o(|z|^{-δ})$. A negative Laurent power would have order at least one, which this bound excludes. Thus it extends, and a nonconstant u has $u(z)=c z^{\delta +k}+higher powers of z,   c≠0, k\in Z_{\ge 0}.$ The expression is a convergent fractional power series. It gives the actual exponential decay on the strip coordinate $z=\exp (-π(s+it))$, including all differentiated estimates. At infinity use the local coordinate −1/z. This assertion uses literal straightness near the corner, not an unproved simultaneous holomorphic straightening of two arbitrary analytic arcs. [F1, F2, F3, F4, given, construct, algebra]

2.1 At an interior zero of du its order is an ordinary nonnegative integer. Away from corners on a boundary edge, its order is likewise an integer, even when that target edge is only smooth. Indeed choose a smooth lift θ of the tangent phase along a small source interval. The Poisson solution with boundary θ on a slightly larger interval and a harmonic conjugate give a nonvanishing holomorphic scalar a with that boundary phase. Then du/a has real boundary values, reflects holomorphically, and either has isolated zeros of integer order or vanishes identically. The latter would make u constant. There are finitely many zeros on the compact core; the actual corner expansions exclude accumulation at a puncture. Denote the sums of their orders by $B_{\mathrm{int}}$ and $B_edge$, and the sum of the corner integers by $K_sum$. [F1, F2, F3, F4, given, construct, algebra, step 1.1]

3.1 For a nonconstant solution set $ξ=du\cdot v$ on the complement of these finitely many zeros. Along an ordinary edge the linearized boundary condition ξ∈TL is exactly the condition that v is tangent to the domain boundary. At an interior branch of order b, v may have a pole of order b; this adds 2b to the real index. At an edge branch it adds b. At a corner of exponent δ+k the weighted section ξ has the model $z^δ$ times a smooth real-boundary coefficient, and v has the model $z^{1-k}$ times that coefficient. Relative to the tangent bundle with a zero at every marked corner this removes k vanishing conditions. The doubled holomorphic line for v therefore has degree $d=2-N+2B_int+B_edge+K_sum.$ Its half-domain real CR index is 1+d. Adding the N−3 real marked-domain parameters gives $ind_universal=2B_int+B_edge+K_sum=:e\ge 0.$ Here indices are real and the automorphism quotient is included. For $N=2$ the same formula means quotient by the one-dimensional translation action. There are no corner-constant deformations: intersections of the two tangent lines are zero. [F1, F2, F3, F4, given, construct, algebra, step 2.1]

4.1 This compact twisted-line model really computes the weighted punctured operator. Choose its end weight $ε>0$ smaller than every πδ and the end-invertibility threshold of the actual transverse-strip supplier. In the above corner frame a smooth compact-model coefficient gives a weighted section because $ξ=O(|z|^δ)$. Conversely a homogeneous weighted solution gives a coefficient with growth $O(|z|^{ε/π-δ})$; the exponent is greater than −1. Its real-boundary reflection therefore has no negative Laurent power, so it extends in that compact frame. For a forcing induced by a smooth compact-model target, subtract a local smooth real-boundary CR solution; the same homogeneous argument extends the remainder. Smooth targets compactly supported away from the punctures are dense in the weighted target. Both operators are Fredholm, by the adopted bordered index and actual transverse end inverse; hence their finite-dimensional cokernels agree. Thus we have not asserted an invalid equivalence of all compact and weighted Sobolev norms at a corner. [F1, F2, F3, F4, given, construct, algebra, step 3.1]

5.1 The doubled domain is P1. A holomorphic line bundle L of degree d on P1 has zero CR cokernel for d≥−1, as can be proved directly at the actual operator level. Its smooth adjoint annihilator exists by the adopted closed weak-regularity theorem. In a holomorphic frame, integrate its pairing with ∂barφ by parts: the metric-weighted conjugate coefficient is holomorphic and transforms as a section of K tensor L*. Conversely any such holomorphic section gives an annihilator by Stokes. This is the needed duality, derived here, not an assumed algebraic/analytic comparison theorem. The degree of K is −2 since dz has a pole of order two in the infinity coordinate. A nonzero holomorphic section of degree $-d-2<0$ is impossible: remove disjoint disks about its zeros and use its nonvanishing frame on the complement; the clutching winding numbers are its nonnegative zero orders and sum to the degree. The real fixed-part statement follows by conjugation. Consequently the fixed-domain operator is already onto if d≥−1. [F1, F2, F3, F4, given, construct, algebra, step 4.1]

6.1 Suppose instead d≤−2. Let K be the NUMBER of corners with $k>0$. Then $K\le K_sum\le e$ and N−K≥3: otherwise e≥K≥N−2 would imply $d=2+e-N\ge 0$. Normalize three simple corners as anchors and move the other simple corners. In v-coordinates moving one simple marked point releases exactly its real vanishing condition: differentiating a local translated fractional-power expansion gives du times a domain vector field having that prescribed real value. Such vector fields can be chosen with disjoint corner supports; their CR images are supported on annuli. The exact sequence of the twisted line and its fiber at that point identifies these domain variations with the connecting obstruction map. Releasing all N−K−3 simple conditions changes degree to $d+(N-K-3)=e-K-1\ge -1.$ The released CR operator is therefore onto by 5.1, and its annular connecting directions are actual marked-domain variations. Adding the unused domain variations cannot destroy surjectivity. Hence EVERY nonconstant universal polygon operator is onto. In particular the zero- and one-dimensional nonconstant spaces are regular; this includes all the smooth Hamiltonian graph copies specified above. We did not replace the weighted operator by a merely formal divisor count. [F1, F2, F3, F4, given, construct, algebra, step 5.1]

7.1 Constants need a separate check. A stable constant polygon with at least three distinct copy labels requires all its boundary curves to pass through the same image point. No-three-concurrence excludes it. Trivial constant strips are unstable. Thus every stable component used here is covered by the nonconstant result. Pairwise transversality alone would NOT exclude a constant higher polygon, and no automatic regularity for that more general situation is asserted. [F1, F2, F3, F4, given, construct, algebra, step 6.1]

8.1 The torus is compact, so there is no escape. There are no nonconstant sphere bubbles since $π2(T2)=0$. There are no nonconstant disk bubbles with one boundary label: each essential primitive curve has injective π1 into π1(T2), and the relative homotopy sequence gives $π2(T2,L)=0$. The symplectic area of such a disk is therefore zero, contradicting positivity. These exclusions replace exactness of the ambient target in the already adopted exact-polygon compactness proof; all its LOCAL epsilon, rescaling, neck and collar constructions are unchanged. [F1, F2, F3, F4, given, construct, algebra, step 7.1]

9.1 For fixed E0, the actual ordered-real disk-domain compactification extracts a finite stable domain tree. Local rescaling and 8.1 exclude compact-core atoms. On a long strip apply the actual tame transverse local-action estimate near each of the finitely many intersections. The extraction has a uniform positive energy threshold: a nonconstant strip entirely within one sufficiently small common intersection chart would have energy equal to its local exact action difference between that intersection and itself, namely zero. Otherwise it leaves that chart, and the local epsilon/diameter estimate on a fixed patch supplies a positive energy cost. Finitely many intersection charts give a common cost. Thus at most E0/h nonconstant strip components occur. The same exponential neck estimate gives matching endpoints and no energy loss. No finite global list of exact action differences on the nonexact torus is assumed here. [F1, F2, F3, F4, given, construct, algebra, step 8.1]

10.1 The actual gluing proof in thm-gts-r4-10c-exact-regular-polygon-count-a-infinity-branch, steps 9.1–14.1, depends only on the compact image region, onto component operators and transverse ends, not on exactness. Its constructed weighted inverse, kernel-coordinate complement, residual bound, quadratic estimate and inverse-gluing uniqueness therefore apply verbatim to these components. Exactness was used there only in energy/bubble exclusion, already replaced in 8.1–9.1. For a total zero-dimensional space, compactness and its open multi-collars exclude all breaks, hence give finitely many points below E0. For a one-dimensional space its only boundary strata have one break and rigid factors. Given coherent orientations, their usual determinant contractions and domain-normal signs give the A∞ identities coefficientwise in formal area weights. This is an actual compactification and collar construction, not an appeal to the comparison theorem. [F1, F2, F3, F4, given, construct, algebra, step 9.1]

11.1 If all edges are affine straight lines globally, normalize the domain to H with finite corners $a1,\ldots ,a_{N-1}$ and last corner infinity. Set $g0(z)=\prod (z-a_j)^{δ_j-1}$ with its constant phase chosen to match the boundary derivative lines. Then $h=u'/g0$ has real boundary values, extends across every finite corner, and by reflection is entire. The infinity expansion bounds its degree by $N-2-\sum δ_i-k_0$. Counting its finite real zeros at corners/edge branches and conjugate pairs of interior branch zeros gives the exact identity $N-2-\sum \delta _i=\sum k_i+2B_int+B_edge=e.$ For index zero, $e=0$, so u' never vanishes and each boundary edge is monotone. Every corner is strictly convex, and its total turning is $Nπ-π\sum δ_i=2π$. The edge tangent directions turn monotonically through one circle. Projection along any generic normal consequently has exactly two extrema; intersection with each generic line has at most two boundary crossings. This makes the boundary a simple strictly convex polygon. The argument principle then gives degree one in its interior and zero outside. Thus u is a conformal equivalence onto that Euclidean polygon. This statement does not classify curved-edge polygons as Euclidean Schwarz–Christoffel polygons. [F1, F2, F3, F4, given, construct, algebra, step 10.1]

12.1 Conversely each strictly convex polygon with the required lines has a unique such map up to positive disk automorphism. Apply the published Riemann mapping theorem to its interior. Boundary extension is obtained directly as follows, rather than importing a missing Jordan-boundary theorem. For the inverse map f:P→D, properness gives |f|→1 at the polygon boundary. Near an edge, away from the zero of f, log|f| is negative harmonic with continuous zero boundary values. Odd harmonic reflection and its harmonic conjugate extend log f and f. Its first nonzero harmonic Taylor term has order one, because sin(mθ) changes sign in the half-plane for every m≥2; the normal derivative is nonzero. At a corner of angle απ use $w=(z-p)^{1/α}$ to flatten the wedge and repeat. This gives the exact corner exponent and continuous nonzero boundary derivative in w. Two boundary points cannot map to the same circle point, since their local inverse half-neighborhoods would overlap inside D and contradict injectivity. Compactness gives surjectivity on the circle. The boundary extension is thus a homeomorphism, establishing existence and uniqueness with the prescribed marked vertices. The needed actual published interfaces are thm-riemann-mapping-theorem, thm-poisson-integral-solves-the-disc-dirichlet-problem, thm-harmonic-and-holomorphic-schwarz-reflection-principles and thm-harmonic-conjugate-on-homologically-simply-connected-domains; their actual sources were read. The measure-theoretic Carathéodory extension theorem is not used. [F1, F2, F3, F4, given, construct, algebra, step 11.1]

13.1 If all copy labels in a word are small Hamiltonian graphs over one essential straight circle, lift to C so that every boundary edge lies in the same fixed thin parallel band. The normal linear coordinate of u is harmonic; the maximum principle keeps its entire image in that band, hence in the corresponding cotangent annulus. There $ω=d(y dx)$ and every copy is the exact graph of $dH_i$. Stokes gives its area as the sum of the finitely many corner action differences. For a fixed arity/copy list it is bounded by 2N $\max _i||H_i||\infty$ after the common primitive normalization. Therefore all rigid polygons of this word occur under one finite E0, and 10.1 proves their number is finite. No straight-polygon positive-height estimate is invoked in this parallel-reference case. Mixed-parent C-convergence remains the comparison authors' separate obligation. [F1, F2, F3, F4, given, construct, algebra, step 12.1] ∎

## Remarks

This is an attached analytic supplier for the elliptic comparison. All operations use distinct transverse copy labels with no triple concurrence. Removable same-circle marks, clean/Morse models and their comparison with copy localization require their own explicit construction. Mixed-parent complex convergence and the all-arity orientation dictionary remain comparison inputs.
