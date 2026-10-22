---
id: thm-bounded-quasiconformal-dilatation-transports-very-short-curve-classes-uniformly
kind: theorem
title: Bounded quasiconformal dilatation transports very short curve classes uniformly
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-acl-sobolev-quasiconformal-homeomorphism
  - lem-area-and-l2-derivative-bounds-for-quasiconformal-maps
  - lem-local-thin-components-of-torsion-free-kleinian-quotients
  - lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients
  - lem-finite-area-fuchsian-quotients-have-compact-standard-cusp-truncations
  - thm-a-very-short-geodesic-forces-definite-quadratic-mass-in-its-thin-annuli
  - cor-cauchy-schwarz-inequality-for-l-two
  - thm-tonelli-and-fubini-for-completed-product-measures
  - thm-monotone-convergence-for-the-integral
  - lem-jordan-schoenflies-extension-for-plane-curves
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Curtis T. McMullen, Iteration on Teichmuller space
      url: https://people.math.harvard.edu/~ctm/papers/home/text/papers/iter/iter.pdf
      locator: Section7.3, printed451, actual full Sections2.3–2.4 and5–7 read. The source invokes Gardiner8.5 for length distortion; the direct collar-energy proof below supplies the weaker uniform shortness implication actually sufficient for the finite-class argument, without invoking that external result.
---

## Statement

Assume AC, hence Countable Choice. Fix $0<\eta<\eta_*/4$, where $\eta_*$ is the local thin displacement threshold, and put
$$\ell_0=2\operatorname{arsinh}\!\left(\frac{\sinh\eta}{2\cosh1}\right)>0.$$
Let $F:X\to Y$ be an orientation-preserving analytically $K$-quasiconformal homeomorphism of connected complete finite-area hyperbolic surfaces, $K\ge1$, and suppose $\operatorname{area}(Y)\le A$. If $\alpha$ is a primitive closed geodesic on $X$ of length $0<\ell<\ell_0$, its image free homotopy class has a primitive simple closed geodesic representative $\alpha_Y$, and
$$\operatorname{length}_Y(\alpha_Y)^2\le\frac{K A\cosh1}{2}\,\ell.$$
Consequently fixed $A,K$ send $\ell\to0$ to target length tending to zero uniformly, without a lower systole assumption on either surface.

More generally, if an embedded conformal cylinder in $X$ is supplied in coordinates $(t,s)\in(\mathbb R/\mathbb Z)\times(-M/2,M/2)$, and $b$ is the infimum of hyperbolic lengths in its image core class on $Y$, then $M b^2\le K\operatorname{area}(Y)$.

For a fixed target $Y$ of compact cusp type $(g,N)$ and $0<\varepsilon<\eta_*/2$, choose
$$0<\delta\le\min\!\left(\ell_0,\frac{\varepsilon^2}{4 K A\cosh1}\right).$$
For ANY collection of such maps $F_j:X_j\to Y$ with dilatation at most $K$, the images of all primitive geodesic classes of length less than $\delta$ on the $X_j$ range over at most $3g-3+N$ distinct unoriented free homotopy classes on $Y$. There is no cardinality restriction on the collection. This conclusion concerns marked curve classes, not lifts to three-dimensional covers or essential tori.

## Facts & Assumptions

**Given:** AC, the hyperbolic surfaces, analytic QC homeomorphism, target area bound and specified small primitive core; a supplied cylinder only for its general inequality.

[A1] Full choice and Countable Choice are [[def-axiom-of-choice]] and [[def-countable-choice]].

[F1] Analytic QC maps have continuous ACL representatives on almost every coordinate line and weak derivatives satisfying $|f_{\bar z}|\le k|f_z|$, $k=(K-1)/(K+1)$. They are totally differentiable almost everywhere, and for every Borel set $E$ in a planar chart, $\int_E J_f\le\operatorname{area}(f(E))$. [[def-acl-sobolev-quasiconformal-homeomorphism]], [[lem-area-and-l2-derivative-bounds-for-quasiconformal-maps]] The algebra gives $\|Df\|_{\mathrm{op}}^2\le KJ_f$: its two singular values are $|f_z|\pm|f_{\bar z}|$.

[F2] A primitive geodesic of sufficiently small length has an embedded cyclic thin annulus. In axis Fermi coordinates its metric is $dr^2+\ell^2\cosh^2r\,dt^2$, $t\in\mathbb R/\mathbb Z$, and its thin radius obeys $\sinh(\operatorname{inj})=\sinh(\ell/2)\cosh r$. The arbitrary-quotient classifier and hyperbolic model supply these formulas and the primitive full cyclic stabilizer. [[lem-local-thin-components-of-torsion-free-kleinian-quotients]], [[lem-complete-curvature-minus-one-manifolds-are-kleinian-quotients]]

[F3] Finite-area surfaces have compact standard-cusp truncations and finitely punctured compactifications. Every parabolic class is a cusp class. Every nontrivial nonperipheral class is loxodromic and has its unique axis geodesic, which minimizes length: the lift of any representative joins $z$ to $hz$ and $d(z,hz)\ge\operatorname{translation\ length}(h)$. The local classifier supplies the short simple core. [[lem-finite-area-fuchsian-quotients-have-compact-standard-cusp-truncations]], [[lem-local-thin-components-of-torsion-free-kleinian-quotients]] A type-$(g,N)$ surface has at most $3g-3+N$ geodesic thin annuli at a sufficiently small threshold; distinct short primitive classes belong to distinct annuli. [[thm-a-very-short-geodesic-forces-definite-quadratic-mass-in-its-thin-annuli]], component-count clause.

[F4] Integral Cauchy–Schwarz, completed Tonelli–Fubini and increasing convergence apply. [[cor-cauchy-schwarz-inequality-for-l-two]], [[thm-tonelli-and-fubini-for-completed-product-measures]], [[thm-monotone-convergence-for-the-integral]]

[F5] Jordan separation for proper arcs with two ideal endpoints follows by closing the arc along either complementary ideal-circle arc and applying the planar Jordan theorem. [[lem-jordan-schoenflies-extension-for-plane-curves]]

## Proof

1.1 First record the actual metric-energy estimate on a conformal source chart with flat coordinates $z=t+is$. In a target conformal coordinate $w$, write its hyperbolic metric as $\rho(w)^2|dw|^2$. The differential inequality in [F1] gives $$|\partial_t F|_Y^2\le\rho(F)^2\|DF\|_{\mathrm{op}}^2\le K\rho(F)^2J_F$$ almost everywhere. The Borel-set Jacobian inequality in [F1] also gives the weighted inequality $$\int_E a(F)J_F\le\int_{F(E)}a$$ for nonnegative Borel $a$: prove it first for indicator functions by applying [F1] to $E\cap F^{-1}(B)$, then finite simple functions, then increasing simple approximation and [F4]. Partition the source cylinder into countably many disjoint Borel pieces contained simultaneously in source and target coordinate charts, taking successive differences of a countable chart cover. Apply the weighted inequality with $a=\rho^2$. Its coordinate expressions agree on overlaps by the conformal Jacobian rule, and the target images of the pieces are disjoint because $F$ is injective. Summation therefore gives $$\int_{-M/2}^{M/2}\int_0^1|\partial_tF(t,s)|_Y^2\,dt\,ds\le K\operatorname{area}(F(C))\le K\operatorname{area}(Y).$$ The cut $t=0$ has source measure zero and contributes no energy. Only the lower area inequality is used; no unproved equality for arbitrary Sobolev maps is assumed. [F1, F4, given, construct, algebra]

2.1 For almost every $s$, the horizontal image circle is absolutely continuous and its metric speed equals $|\partial_tF|_Y$ almost everywhere. To verify this without a global target chart, cover a closed source subcylinder by finitely many source rectangles whose images lie in target coordinate charts, use ACL in each rectangle, discard the finite union of exceptional height sets, and subdivide each horizontal circle into finitely many such chart intervals. Smooth target metric densities are bounded on each compact image interval, so the usual absolutely continuous coordinate length formula yields its hyperbolic length. Exhaust the open cylinder by closed subcylinders; the countable exceptional union remains null. Each image circle is in the image core class. Hence its length is at least $b$. Cauchy–Schwarz on its period-one parameter gives $$b^2\le\left(\int_0^1|\partial_tF|_Y\,dt\right)^2\le\int_0^1|\partial_tF|_Y^2\,dt.$$ Integrate over the height interval of length $M$ and use step 1.1 to obtain $Mb^2\le K\operatorname{area}(Y)$. This proves the supplied-cylinder assertion including a zero infimum or infinite cylinder height by exhausting finite subcylinders. [F1, F4, step 1.1, given, construct, algebra]

3.1 For $\ell<\ell_0$, the definition of $\ell_0$ gives $$\sinh(\ell/2)\cosh1<\tfrac12\sinh\eta<\sinh\eta.$$ Thus the entire closed axis collar $|r|\le1$ lies strictly within its embedded geodesic $\eta$-thin annulus by [F2]. In particular its primitive core is embedded and simple. Set $$s(r)=\frac1\ell\int_0^r\frac{du}{\cosh u}.$$ The Fermi metric becomes $\ell^2\cosh^2r\,(dt^2+ds^2)$. It is an embedded conformal cylinder of height $$M=\frac2\ell\int_0^1\frac{du}{\cosh u}\ge\frac{2}{\ell\cosh1}.$$ This constructs the needed cylinder from the actual local thin formula; no general collar theorem or extremal-length comparison is imported. [F2, given, construct, algebra]

4.1 A surface homeomorphism preserves primitivity because its induced fundamental-group isomorphism preserves being a proper power, and it takes an embedded simple core to an embedded simple curve. It also preserves peripheral classes. Indeed the compactifications in [F3] have finitely many punctures. Properness of a homeomorphism implies that a sufficiently deep connected source cusp tail misses the preimage of a target compact truncation and therefore lies in one target tail; applying the inverse gives a bijection of ends. Its induced map on such punctured-disc ends sends the primitive generator to a generator, with either orientation. Thus a nonperipheral class cannot become peripheral. The core class here is nonperipheral because it is loxodromic, so [F3] gives a primitive target axis geodesic $\alpha_Y$. Its length is precisely the infimum $b$ in step 2.1. Applying that step to step 3.1 gives $$\operatorname{length}_Y(\alpha_Y)^2\le K\operatorname{area}(Y)/M\le\tfrac12KA\cosh1\,\ell.$$ The numerical bound is less than $\eta_*$ for sufficiently small $\ell$, and in the counting consequence below it is less than $\varepsilon/2$; then [F2] directly makes its axis geodesic simple. For the unrestricted first assertion it is simple as well: the image core is simple, and its loxodromic axis is simple. To check the latter, lift the simple curve to a proper invariant line. Iterates of its compact fundamental segment converge to the two axis endpoints; distinct lifted lines are disjoint and therefore have nonalternating ideal endpoints by [F5]. Their hyperbolic axes consequently have disjoint interiors. The full pair stabilizer in [F2] is cyclic; primitivity excludes an extra coincident translate. Thus the projected axis is embedded, proving simplicity without an additional length restriction. [F2, F3, F5, step 2.1, step 3.1, given, construct, algebra]

5.1 If $\ell<\delta$ in the last assertion, step 4.1 gives $$\operatorname{length}_Y(\alpha_Y)^2<\frac{KA\cosh1}{2}\frac{\varepsilon^2}{4KA\cosh1}=\frac{\varepsilon^2}{8}<\frac{\varepsilon^2}{4}.$$ Thus every transported class has a primitive geodesic of length $<\varepsilon/2$, regardless of the number of maps or source surfaces. All of them are primitive cores of the actual geodesic $\varepsilon$-thin annuli on this SAME target $Y$. Distinct unoriented classes give distinct annuli by [F2], and [F3] bounds their number by $3g-3+N$. This proves the simultaneous finite-class bound needed across finitely many bounded-QC iterates, without the sharper external exponential length-distortion formula. No curve lift or three-dimensional gluing assertion has been used. [F2, F3, step 4.1, given, construct, algebra] ∎

## Actual reading and remaining operation

The actual complete Iteration Sections2.3–2.4 and5–7 were read; printed451 imports Gardiner8.5 rather than proving its asserted length estimate. That external source is not claimed read or supplied here. The actual analytic ACL definition and full seven-step area/derivative proof, the arbitrary local thin and hyperbolic model proofs, finite-area truncation and six-step short-core mass/count proof, integral Cauchy–Schwarz, completed Tonelli–Fubini, increasing convergence and the planar Jordan–Schoenflies proofs were read. This proof uses their explicit local ACL, weighted Jacobian and Fermi-coordinate operations, not general extremal-length distortion.

The bound is intentionally the uniform shortness implication sufficient for the marked finite-class argument. Actual skinning liftability, cylinder correspondences and essential-torus assembly remain separate operations. All previous frozen source bytes are unchanged.
