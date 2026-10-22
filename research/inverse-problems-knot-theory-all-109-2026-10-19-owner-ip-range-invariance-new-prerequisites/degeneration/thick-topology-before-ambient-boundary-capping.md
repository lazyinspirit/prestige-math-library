---
id: lem-finite-area-thick-limits-have-controlled-topology-and-component-count
kind: lemma
title: Finite-area thick limits have controlled topology and uniformly few thick components
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - lem-finite-area-fuchsian-quotients-have-compact-standard-cusp-truncations
  - thm-thick-pointed-fuchsian-surfaces-and-covers-have-convergent-holomorphic-atlases
  - lem-local-thin-components-of-torsion-free-kleinian-quotients
  - lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients
  - thm-finite-geodesic-triangulation-of-a-compact-riemannian-surface
  - lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space
  - cor-orientable-compact-surface-has-euler-characteristic-two-minus-two-g
  - def-genus-and-euler-characteristic-compact-riemann-surface
  - cor-gauss-bonnet-for-compact-oriented-surfaces-with-smooth-boundary
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Curtis T. McMullen, Amenability, Poincare series and quasiconformal maps
      url: https://people.math.harvard.edu/~ctm/papers/home/text/papers/amen/amen.pdf
      locator: Entire Appendix A.1–A.4 and Sections9–12 read; compact-core genus comparison supplements A.2.2 and the uniform thick-component count is used in the proof of Theorem11.1
---

## Statement

Assume AC, hence Countable Choice. If a compact connected orientable smooth surface $K$ with $b$ boundary circles embeds smoothly in a compact connected oriented smooth surface $M$ of genus $g$, then the genus $h$ of the closed surface obtained by capping the boundary of $K$ satisfies $h\le g$. Here $K$ may have empty boundary; finite boundary-relative cellulations, rather than an unproved claim about smooth symplectic representatives, justify the comparison.

Consequently let $X_n$ be finite-area hyperbolic surfaces compactifying to genus $g$ with $N_0$ punctures, and let their thick-pointed limit $X$ have area at most $A=2\pi(2g-2+N_0)$. Its actual finite cusp compactification has genus $h\le g$ and number of punctures $N$ satisfying $2h-2+N\le A/(2\pi)$, in particular $N\le A/(2\pi)+2$. If every $X_n$ has at least one puncture then $X$ cannot be compact.

Independently, for ANY finite-area torsion-free Fuchsian quotient $Y$ and every $\varepsilon>0$ with $2\varepsilon<\eta_*$, where $\eta_*$ is the universal displacement threshold of [[lem-local-thin-components-of-torsion-free-kleinian-quotients]], the closed thick set
$$Z=\{y\in Y:\operatorname{inj}_Y(y)\ge\varepsilon\}$$
is a nonempty compact smooth surface with boundary, with finitely many connected components $Z_1,\ldots,Z_k$. Each has negative integral Euler characteristic and
$$\sum_{j=1}^k\chi(Z_j)=-\frac{\operatorname{area}(Y)}{2\pi},\qquad k\le\frac{\operatorname{area}(Y)}{2\pi}.$$
Thus fixed $(g,N_0)$ sequences have a uniform bound on the number of thick components without any assumption that those components converge faithfully to entire limiting thick components. Thin components may be cusp cylinders or loxodromic annuli; both are included in the identity.

This proves finite-type and counting interfaces only. It makes no geometric-subsurface intersection classification, uniform graph expansion, or final amenable-mass assertion.

## Facts & Assumptions

**Given:** AC and the indicated compact embedded core, or the thick-pointed sequence, or the arbitrary finite-area quotient and small threshold, for the corresponding conclusions.

[A1] AC and its Countable Choice consequence are [[def-axiom-of-choice]] and [[def-countable-choice]].

[F1] The actual finite-area theorem constructs a compact smooth standard-cusp truncation and a finite complex cusp compactification, and proves $\operatorname{area}(Y)=2\pi(2h-2+N)$. The thick-pointed theorem gives eventual smooth embeddings of any compact neighborhood of the limiting surface into $X_n$, with derivatives tending to identity in oriented charts. [[lem-finite-area-fuchsian-quotients-have-compact-standard-cusp-truncations]], [[thm-thick-pointed-fuchsian-surfaces-and-covers-have-convergent-holomorphic-atlases]]

[F2] The smooth Euclidean inverse theorem makes a nonsingular same-dimensional smooth map a local diffeomorphism. [[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]] A compact smooth surface with smooth boundary, with metric-extension neighborhood, admits a finite face-to-face curvilinear triangulation retaining prescribed regular boundary arcs, possibly subdividing them. It is a finite cell structure. [[thm-finite-geodesic-triangulation-of-a-compact-riemannian-surface]] Every closed connected oriented topological surface has integral genus $a\ge0$ and Euler characteristic $2-2a\le2$. The genus of a compact Riemann surface is this same topological invariant. [[cor-orientable-compact-surface-has-euler-characteristic-two-minus-two-g]], [[def-genus-and-euler-characteristic-compact-riemann-surface]]

[F3] The arbitrary-quotient local thin theorem gives a proper complete covering quotient and injectivity radius equal to half the least nontrivial displacement. At displacement threshold $2\varepsilon<\eta_*$, distinct closed lifted thin components are uniformly separated and locally finite. Each is a precisely invariant horoball with full parabolic stabilizer, or a finite-radius axis tube with cyclic loxodromic stabilizer. For a real group the parabolic rank is one. The distance formulas and hyperboloid model are supplied locally. [[lem-local-thin-components-of-torsion-free-kleinian-quotients]], [[lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients]]

[F4] Smooth-boundary Gauss–Bonnet gives $-\operatorname{area}(K)+\int_{\partial K}k_g=2\pi\chi(K)$ for a compact hyperbolic surface region. Measurable smooth changes of variables compute all the model areas below under Countable Choice. [[cor-gauss-bonnet-for-compact-oriented-surfaces-with-smooth-boundary]], [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]

## Proof

1.1 We first prove the embedded-core comparison. If $\partial K$ is empty, its smooth embedding is locally open in $M$ by its nonsingular derivative and the real inverse theorem. Its image is also compact and hence closed. Connectedness of $M$ makes it all of $M$, so $h=g$. Suppose $b>0$. The closures $C_1,\ldots,C_c$ of the connected components of $M\setminus K$ are compact smooth surfaces with boundary: a finite smooth collar of the embedded boundary gives the ordinary half-disc charts, and outside those collars the assertion is local in $M$. Each complementary component meets a boundary circle, since otherwise it would be both open and closed in connected $M$. Every boundary circle has exactly one outside side and is assigned to exactly one such component. Thus $1\le c\le b$ and, writing $b_j=\#\partial C_j$, $\sum_jb_j=b$. There cannot be additional infinitely many complementary components, since each must use at least one of these finitely many circles. [A1, F2, given, construct, algebra]

1.2 Now fix an arbitrary finite-area $Y$ and the displayed threshold. Its entire closed thick set $Z$ is compact. It is closed by continuity of injectivity radius. If it were unbounded in the proper quotient, choose infinitely many points of $Z$ at pairwise distance greater than $2s$, with $0<s<\varepsilon/2$. Their radius-$s$ balls are disjoint and are embedded model balls by [F3], each with the same positive area, contradicting finite area. Properness then implies compactness. The thick set is nonempty: otherwise connected $Y$ would consist of a single open thin component. Since that component is precisely invariant, the whole group would be its elementary stabilizer. This contradicts nonelementarity, already proved for finite-area quotients in [F1]. [A1, F1, F3, F4, given, construct, algebra]

2.1 We justify the relative Euler bookkeeping by actual compatible finite cells. Give each boundary circle finitely many regular arc marks. A smooth Riemannian metric on $M$ can be obtained by summing positive coordinate Euclidean metrics against a finite smooth partition of unity; the latter is constructed from finite coordinate bump functions divided by their positive sum. This metric extends across these circles in the ambient $M$, so apply the boundary-relative triangulation theorem [F2] to $K$ and each $C_j$. They retain the marked arcs and may introduce finitely many further boundary vertices. Take the union of the two sides' vertices on each common circle. Refine each adjacent triangular face to realize these additional boundary marks: in its closed-disk parametrization, connect the new side marks to the opposite vertex, forming a finite fan; if more than one side has new marks, use one interior hub and connect it to all cyclic boundary marks. The arcs lie in the face interior except at their endpoints and form a finite triangular subdivision. No geodesic assertion is needed after refinement; it remains a finite face-to-face cell structure. Thus the two cell structures agree on each common boundary circle. Counting each glued boundary vertex and edge only once gives $$\chi(M)=\chi(K)+\sum_j\chi(C_j),$$ because each glued circle has equally many vertices and edges and hence Euler characteristic zero. Capping any of these surfaces by one disc per boundary circle adds one to its Euler characteristic per cap: attach a cone on the finite boundary polygon and count the new interior cells, or use $\chi(D^2)-\chi(S^1)=1$. [F2, step 1.1, construct, algebra]

2.2 We identify the boundary and its smoothness without a regular-value assumption about the minimum displacement function. In a real rank-one parabolic component, normalize its generator to $z\mapsto z+\ell$. The generator minimizes displacement, so the thin region is exactly $y>T=\ell/(2\sinh\varepsilon)$ and its boundary is a smooth horocycle. In a real cyclic loxodromic component normalize the generator to translation length $L>0$ along its axis. In signed normal coordinates $(r,t)$ the metric is $dr^2+\cosh^2r\,dt^2$, $t$ periodic of length $L$. The hyperboloid formula [F3] gives $$\sinh\bigl(d(z,T^kz)/2\bigr)=\sinh(|k|L/2)\cosh r.$$ Thus the generator minimizes displacement. A nonempty thin annulus exists precisely when $L<2\varepsilon$ and is $|r|<R$, where $\cosh R=\sinh\varepsilon/\sinh(L/2)>1$. Its two boundary curves are smooth hypercycles. If $L=2\varepsilon$, no open displacement region occurs; its axis points remain interior points of the thick set, since any other displacement at most $2\varepsilon$ there would belong to the same elementary stabilizer by [F3], while the finitely many competing small matrices are isolated. In all cases the uniform separation and local finiteness of the closed thin components [F3] exclude boundary contacts and boundary accumulation. Quotient chart neighborhoods of points of $Z$ are therefore either open discs or one-sided smooth-boundary half-discs. Hence $Z$ is a compact smooth surface with boundary. Its components are open in $Z$ because a manifold is locally connected; compactness then gives finitely many components. Each boundary curve belongs to one thin cusp or annulus, and there are finitely many boundary curves by the same compact-manifold argument. Every thin component has at least one such boundary, so only finitely many occur. [F3, step 1.2, construct, algebra]

3.1 The cap of $K$ has genus $h$, hence $\chi(K)=2-2h-b$. The cap of each $C_j$ is a closed connected orientable topological surface, so [F2] gives $\chi(C_j)+b_j\le2$. Also $\chi(M)=2-2g$. Substituting into step 2.1 gives $$2-2g\le2-2h-b+2c-\sum_jb_j=2-2h-2b+2c.$$ Therefore $g\ge h+b-c\ge h$. This proves the core comparison without requiring that all of $H_1(K)$ inject into $H_1(M)$, which is not generally true. [F2, step 1.1, step 2.1, given, algebra]

3.2 We compute the signed boundary integrals from the THICK side. For a cusp $y>T$, its boundary length and area are both $\ell/T$. As in the direct Gauss–Bonnet computation of [F1], the thick side $y\le T$ has signed geodesic curvature $-1$. Thus its boundary curvature integral is minus the removed cusp area. For a thin loxodromic annulus $|r|<R$, its area is $$\int_0^L\int_{-R}^R\cosh r\,dr\,dt=2L\sinh R.$$ The unit tangent to a level curve is $T=\cosh^{-1}r\,\partial_t$, and the metric Christoffel formula gives $\nabla_TT=-\tanh r\,\partial_r$. At $r=R$ the inward normal to the thick side is $+\partial_r$, giving signed curvature $-\tanh R$; at $r=-R$ it is $-\partial_r$, giving the same value. Each boundary length is $L\cosh R$. Therefore the sum of its two THICK-side boundary curvature integrals is $-2L\sinh R$, again minus exactly the removed annulus area. All boundary integrals are nonpositive, and all displayed integrals use the model metric via [F4]. [F1, F3, F4, step 2.2, construct, algebra]

4.1 Apply [F1] to the thick-pointed limit and choose its compact smooth cusp truncation $K$, of genus $h$ after capping. The actual smooth compact-region embeddings send $K$ into $X_n$, and hence into the compactification $\overline X_n$, for all sufficiently large $n$. Their derivatives are close to identity in oriented charts, so they preserve orientation. The preceding core comparison gives $h\le g$. The area identity and bound in [F1] give $2h-2+N\le A/(2\pi)$, whence $N\le A/(2\pi)+2$. If $X$ were compact, the same embeddings on all of $X$ would have compact open image in connected $\overline X_n$, hence be onto; but their images lie in $X_n$ and omit its nonempty marked puncture set. This is impossible if $N_0>0$. These are the claimed exact topology comparisons, not a claim of faithful convergence of the whole surface. [F1, F2, step 3.1, given, algebra]

4.2 Every component $Z_j$ is a nonempty compact smooth surface region, with positive area, since it has an interior chart. Gauss–Bonnet [F4] and the nonpositive boundary curvatures in step 3.2 give $2\pi\chi(Z_j)<0$, hence the integer $\chi(Z_j)\le-1$. Sum the same formula over all finitely many thick components. Their total area is the area of the thick set; the remaining thin components are precisely the finitely many cusps and annuli of step 2.2, and boundary curves have area zero. Step 3.2 says that their total boundary curvature contribution is minus the total area of those thin components. Consequently $$2\pi\sum_j\chi(Z_j)=-\operatorname{area}(Z)-\operatorname{area}(Y\setminus Z)=-\operatorname{area}(Y).$$ Since every $\chi(Z_j)\le-1$, the number $k$ is at most $\operatorname{area}(Y)/(2\pi)$. This proves both the exact identity and the uniform count. Unlike an appeal to a limiting thick-component topology, the argument works directly on every individual finite-area surface at the same small threshold. [F3, F4, step 1.2, step 2.2, step 3.2, algebra]

5.1 Apply step 4.2 to each $X_n$ and use its fixed area $2\pi(2g-2+N_0)$ from [F1]. This gives the promised uniform finite number of thick components, while step 4.1 gives the precise genus and end-count control for any thick-pointed limit. All assertions are now proved. The covering-subgroup and uniform expansion inputs needed by an amenable-mass theorem remain additional operations and have not been inferred from these topological counts. [F1, step 4.1, step 4.2, given, algebra] ∎

## Actual reading and remaining scope

The actual compact-boundary geodesic-triangulation theorem was read in full, including its prescribed-boundary interface and its explicit source use of Munkres Section10 Theorem10.6 for the initial relative $C^2$ triangulation. The later finite geodesic/corner refinements are proved locally there. No separate claim of having read the entire Munkres primary book is made. The actual smooth Euclidean inverse theorem, orientable compact Euler/genus corollary and its compact-surface-classification supplier, the finite-area cusp theorem, the entire thick atlas proof, local arbitrary-quotient thin/model proofs, smooth-boundary Gauss–Bonnet and measurable change-of-variables were read in full.

This proves the compact-core comparison and uniform thick-component bound needed by the degeneration argument. It does not classify intersections of geometric subsurface subgroups, prove expansion of their Schreier graphs, or establish faithful convergence of a particular entire thick component. Those are still genuine missing interfaces before the unconditional amenable-mass/general gluing conclusion.
