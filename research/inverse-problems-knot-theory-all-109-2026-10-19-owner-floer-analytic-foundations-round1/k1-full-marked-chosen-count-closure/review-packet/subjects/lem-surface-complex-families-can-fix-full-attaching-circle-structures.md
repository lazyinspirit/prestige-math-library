---
id: lem-surface-complex-families-can-fix-full-attaching-circle-structures
kind: lemma
title: "Surface complex families can fix full attaching-circle structures"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, lem-countable-choice-parametric-holomorphic-coordinates-for-oriented-surfaces, lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms, lem-boundary-preserving-local-addition-for-transverse-product-tori]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Wall, Differential Topology"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "Local germ extension and isotopy extension; the actual finite collar vector field and relative complex normalization are constructed below"
---

## Statement

Assume Countable Choice. Let $\Gamma$ be a finite family of pairwise disjoint smooth embedded circles on a compact oriented surface. Let $j_0,j_1$ be orientation-compatible complex structures. Fix finitely many points $P\subset\Gamma$, and suppose each circle has a holomorphic real-axis chart at its points in $P$ for BOTH structures. Fix also finitely many surface points $Q$ off $\Gamma$.

There is an orientation-preserving diffeomorphism $G$ preserving each circle of $\Gamma$ setwise and fixing $P\cup Q$, such that $\widehat j_1=G^*j_1$ agrees with $j_0$ on neighborhoods of $P\cup Q$, followed by an actual smooth path of INTEGRABLE structures from $j_0$ to a pullback $H^*\widehat j_1$ with these properties: the full endomorphism on $T\Sigma|_\Gamma$ is fixed equal to $j_0$ throughout, all the structures agree with $j_0$ near $P\cup Q$, and $H$ fixes $\Gamma$ pointwise and those neighborhoods. More precisely $G$ is supported near $P\cup Q$, whereas $H$ is supported in a circle collar away from those neighborhoods. The endpoint pullback is therefore biholomorphically identified with the original $(\Sigma,j_1)$ by $G\circ H$, fixing the marked circle points and the points of $Q$.

Only one attaching family is needed. No simultaneous holomorphic rectification of a second unrelated circle family, or invariance of any disk count, is asserted here.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The compact surface, circle family, two integrable structures and their actual real-axis charts at the finite marked circle points, and the off-circle marked points.

[F1] A positive local smooth germ at the center of a disk extends to a diffeomorphism equal to the identity in a boundary collar; its construction uses a compact-source isotopy of that germ. When that germ preserves a coordinate real axis, the explicit rescaling and positive linear paths may be chosen to preserve the axis, and the vector-field construction below gives the corresponding supported extension fixing that circle pointwise when its germ does so. ([[lem-smooth-jordan-disk-boundary-maps-extend-to-diffeomorphisms]])

[F2] Finite-dimensional smooth ODEs on a compact target have explicit Picard construction, uniqueness and smooth parameter dependence under Countable Choice, as proved in the local-addition construction. Smooth orientation-compatible surface almost complex families admit actual smooth holomorphic coordinate families. ([[lem-boundary-preserving-local-addition-for-transverse-product-tori]], [[lem-countable-choice-parametric-holomorphic-coordinates-for-oriented-surfaces]])

## Proof

1.1 We first match the structures near the prescribed points while preserving the circles as sets. At a point of $P$ take centered $j_i$-holomorphic charts $c_i$ sending the same circle arc to the real axis, with the induced circle orientations agreeing. The germ $g=c_1^{-1}c_0$ is orientation preserving, fixes the marked point, preserves the circle arc setwise, and pulls $j_1$ back to $j_0$. It need not fix every point of that arc; no equality of the two real parametrizations is required. At a point of $Q$, arbitrary centered holomorphic charts give a positive complex matching germ fixing its center. Take disjoint neighborhoods of these finitely many points. [given, construct, algebra]

2.1 We give the supported extension retaining setwise circle preservation and the marked center. In a real-axis chart write the germ as $g(0)=0$, $g(\mathbb R)\subset\mathbb R$, preserving the orientation of that line. Its derivative at the origin has form $\begin{pmatrix}a&c\\0&b\end{pmatrix}$ with $a,b>0$. The rescalings $g_t(z)=g(tz)/t$ extend smoothly to $t=0$ by the integral derivative formula, preserve the axis, fix the origin, and join $g$ to its derivative. Join that derivative to the identity through the positive triangular matrices $\begin{pmatrix}(1-t)+ta&tc\\0&(1-t)+tb\end{pmatrix}$. After a smooth reparametrization of the two pieces this gives a smooth isotopy of embeddings on one small disk, with track in a larger disk, fixing the origin and preserving the axis. Its velocity field on the moving image is tangent to the axis and zero at the origin. Multiply it by a cutoff equal to one on the track of a smaller disk and supported in the larger disk; the resulting smooth ambient vector field is still tangent to the axis and zero at the origin. Its [F2] flow preserves the axis by uniqueness, fixes the origin, and realizes the prescribed germ on a sufficiently small neighborhood, also by uniqueness. At $Q$ use the ordinary [F1] positive germ extension fixing its center. Compose the disjoint extensions to obtain $G$. It preserves every circle setwise, fixes $P\cup Q$, and pulls $j_1$ back to $j_0$ on neighborhoods of those points. [F1, F2, step 1.1, construct, algebra]

3.1 Join $j_0$ to $\widehat j_1$ through smooth orientation-compatible almost complex structures stationary on these neighborhoods. An explicit pointwise contraction is available on the surface: in a positive local frame its complex cotangent line is $dx+\tau dy$ with $\operatorname{Im}\tau>0$. Relative to $j_0$ this is described intrinsically by its anti-complex Cayley coefficient $B$, anticommutes with $j_0$ and has norm less than one for the metric $\eta(\cdot,j_0\cdot)$ of any positive area form. The matrix identity $j=j_0(I+B)(I-B)^{-1}$ and the taming computation give positivity for $tB$, $0\le t\le1$; these formulas are independent of the positive local frame. Since $B=0$ on the matched neighborhoods, the resulting path $j_t$ is stationary there. Alternatively the local upper-halfplane formula verifies this Cayley contraction directly in dimension two. [F2]'s parametric coordinate theorem makes every member genuinely integrable, not merely almost complex. [F2, step 2.1, construct, algebra]

4.1 Normalize its FULL value along the circles by a collar diffeomorphism. Choose signed smooth collars $(\theta,r)$ with $\Gamma=\{r=0\}$; compactness and the local inverse argument in [F2] give these collars, and finitely many disjoint ones suffice. Write $$j_0\partial_\theta=a_0\partial_\theta+b_0\partial_r,\qquad j_t\partial_\theta=a_t\partial_\theta+b_t\partial_r,$$ with $b_0,b_t>0$. Put $A_t=(a_t-a_0)/b_0$, $B_t=b_t/b_0>0$, and consider the collar germ $$h_t(\theta,r)=(\theta+A_t(\theta)r,B_t(\theta)r).$$ At $r=0$ it fixes the circle pointwise and satisfies $dh_t j_0\partial_\theta=j_t\partial_\theta$. Its full complex-structure conjugacy there follows also on $j_0\partial_\theta$, since both structures square to $-I$. It is the identity near $P$ because the structures already agree there. Compactness of the time-circle parameter and positive triangular boundary Jacobian make all these germs embeddings on one uniformly narrow two-sided collar: local inverses give a common local width, and hypothetical collisions at widths tending to zero contradict a local inverse at their limiting circle point. [F2, step 3.1, construct, algebra]

5.1 Extend these collar germs simultaneously without a family of arbitrary choices. On the image of a larger common collar use the smooth velocity $V_t=(\partial_t h_t)h_t^{-1}$. Multiply it by a fixed collar cutoff, pulled forward by $h_t$, equal to one on the track of a smaller collar and zero near the boundary of the larger one. Extend by zero to the surface. It is smooth jointly with $t$, vanishes on the circle, and is zero near $P\cup Q$. Its compact smooth flow $H_t$ exists on the whole parameter interval by [F2]. On a sufficiently smaller collar uniqueness gives $H_t=h_t$; initially both are the identity. It fixes every circle pointwise and is the identity on the prescribed neighborhoods. Consequently $\widetilde j_t=H_t^*j_t$ is integrable, stationary there, and equals $j_0$ as a FULL endomorphism along every circle. The endpoint is $H^*\widehat j_1$ with $H=H_1$, as claimed. All constructions are finite collar and germ choices plus the explicit ODE limits. [F2, step 2.1, step 3.1, step 4.1, construct, algebra] ∎
