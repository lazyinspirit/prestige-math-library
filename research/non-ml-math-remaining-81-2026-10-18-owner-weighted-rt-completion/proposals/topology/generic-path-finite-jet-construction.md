# Finite-jet construction of a relative generic path and elementary birth models

2026-10-18. Isolated scientific continuation. This proves the generic **function-path** result below and its elementary local normalization. It does not assert a relative Kirby theorem for surgery traces, a generic-path theorem for gradient trajectories, or Walker boundary-slicing completeness. All changes have support away from the fixed product boundary collars and the path endpoints.

## The precise proved result

Let $W$ be a compact smooth $n$-manifold, $n\ge1$, with fixed product collars, and let $f_0,f_1:W\to[0,1]$ be excellent adapted Morse functions equal to the same noncritical product height on those collars. Assume full AC, as in the controlling claim. There is a smooth path $F:[0,1]\times W\to[0,1]$ joining them, stationary near the parameter endpoints and equal to the product height on a smaller boundary collar, with the following properties.

1. There are finitely many exceptional parameters. Each contains exactly one of the following events: an interior critical point with Hessian corank one, nonzero third derivative in its kernel direction, and nonzero parameter derivative of the spatial gradient in that direction; or two nondegenerate critical points whose values cross with nonzero relative speed.
2. Every other critical point of every slice is nondegenerate. At regular parameters all critical values are distinct. No two exceptional events have the same parameter. At a degenerate event its value differs from all other critical values.
3. The critical locus is a compact smooth curve (with boundary at the endpoint slices). The parameter projection has only nondegenerate folds, exactly at the degenerate events. Near each fold two slice critical points of adjacent indices are created or destroyed. They have different critical values whenever both exist.
4. Without changing the endpoint functions or the path outside an arbitrarily small neighborhood of a degenerate event, the path can be homotoped through paths with the same event list so that near that event it is, in smooth parameter-dependent spatial coordinates,

$$F_s=a(s)+b(s)u+c_0u^3+Q(y),\qquad b(0)=0,\quad b'(0)\ne0,\quad c_0>0,$$

where $Q$ is a fixed nondegenerate quadratic form in $n-1$ variables. Reversing $u$ and replacing the parameter by a smooth local coordinate gives the usual $u^3/3-tu+Q(y)$ model, up to a parameter-dependent additive constant and a fixed positive factor.

The proof below supplies the finite multijet perturbation rather than appealing to a multijet-transversality theorem. The local normalization is an explicit **homotopy of paths**, not an unproved assertion of exact right-left equivalence of every cubic germ.

## 1. Actual local suppliers and their limits

The complete current proofs of `thm-parametric-transversality`, `thm-morse-sard-for-smooth-manifolds`, `thm-morse-sard-for-euclidean-maps`, `thm-morse-functions-are-dense-by-relative-jet-transversality`, `thm-morse-lemma`, `lem-one-variable-completion-of-the-square-with-a-smooth-parameter`, `lem-morse-splitting-induction-preserves-the-residual-hessian`, and `thm-parametrized-implicit-function-theorem-with-higher-regularity` were read for this continuation. The first theorem applies to a finite-dimensional evaluation family already transverse to a specified embedded submanifold; its proof identifies bad slice parameters with critical values of the projection of the transverse inverse image, then uses the actual Sard theorem. The density theorem proves only the one-section Morse statement. Below its bump-function idea is extended explicitly to the finite higher-jet and simultaneous-point families required here. The square-completion lemma treats **all other variables as smooth parameters**, so it applies with the path parameter among those variables; no extra parametric Morse lemma is being presumed.

Only the finite-dimensional transversality statement, elementary finite-dimensional linear algebra, ordinary inverse/implicit function theorems, smooth bumps, compactness, and the displayed square-completion proof are used in §§2–7. In particular no smooth preparation theorem is used.

## 2. A finite-dimensional family prescribing all required jets simultaneously

Choose finitely many coordinate neighborhoods $U_\alpha$ and smooth bumps $\chi_\alpha$ supported in them such that their positive sets cover $W$. Boundary charts are allowed here; extend their smooth coordinates to open sets across the boundary. The finite vector

$$E(x)=(\chi_\alpha(x),\chi_\alpha(x)x_\alpha^1(x),\ldots,\chi_\alpha(x)x_\alpha^n(x))_\alpha\in\mathbb R^N$$

is a smooth embedding. Indeed, if $E(x)=E(x')$, choose $\alpha$ with $\chi_\alpha(x)>0$. Equality of its first component implies $\chi_\alpha(x')>0$; equality of its remaining components then gives $x_\alpha(x)=x_\alpha(x')$, hence $x=x'$. Its differential is injective because on $\{\chi_\alpha>0\}$ one recovers $dx_\alpha^i=(d(\chi_\alpha x_\alpha^i)-x_\alpha^i d\chi_\alpha)/\chi_\alpha$. Compactness makes the continuous injection a homeomorphism onto its image. This constructs the needed embedding without invoking a separate embedding theorem.

Let $\mathcal P$ be the finite-dimensional vector space of real polynomials on $\mathbb R^N$ of total degree at most $15$. For any $1\le k\le4$ and any distinct interior points $p_1,\ldots,p_k$, the map

$$\mathcal P\longrightarrow\bigoplus_{i=1}^k J^3_{p_i}(W,\mathbb R),\qquad P\longmapsto (j^3_{p_i}(P\circ E))_i$$

is onto. Here a spatial 3-jet is the finite list of the value and all spatial derivatives of orders one through three; its coordinate changes are the usual smooth invertible chain-rule changes. To prove surjectivity, choose for every $i\ne j$ an affine linear function $\ell_{ij}$ with $\ell_{ij}(E(p_j))=0$ and $\ell_{ij}(E(p_i))\ne0$. Put $Q_i=\prod_{j\ne i}\ell_{ij}^4$. It has nonzero value at $E(p_i)$ and vanishes to order at least four at every $E(p_j)$, $j\ne i$. At $p_i$, some $n$ components of $E$ have independent differentials; they are local coordinates by the inverse function theorem. Polynomials of degree at most three in those components realize arbitrary spatial 3-jets at $p_i$. Since multiplication by a jet with nonzero constant term is invertible in the finite Taylor algebra, choose such a polynomial $R_i$ whose 3-jet, multiplied by that of $Q_i\circ E$, is the desired jet at $p_i$. Then $P=\sum_i Q_iR_i$ realizes all prescribed jets. Its degree is at most $4(k-1)+3\le15$. The separating linear forms and the coefficients depend on the chosen points, but they are used only to prove surjectivity of this **one fixed finite polynomial space**; no varying family of perturbation spaces is needed.

Begin with the affine path between $f_0,f_1$, reparametrized to be stationary on parameter intervals $[0,2\delta]$ and $[1-2\delta,1]$. Call it $H_s$. Choose a spatial bump $\gamma$, zero near the boundary, positive on an open set containing the possible critical points, and equal to one on the complement of a slightly larger product collar. Choose $\beta(s)$ zero for $s\le\delta$ and $s\ge1-\delta$, and positive for $\delta<s<1-\delta$. Fix a basis $P_1,\ldots,P_m$ of $\mathcal P$ and consider

$$H_{s,z}(x)=H_s(x)+\beta(s)\gamma(x)\sum_{\nu=1}^m z_\nu P_\nu(E(x)).$$

For every $s$ with $\beta(s)>0$ and every configuration of at most four distinct points where $\gamma>0$, parameter differentiation in $z$ maps onto all their spatial 3-jets simultaneously: multiplication by the nonzero smooth scalar $\beta(s)\gamma$ is invertible on each finite Taylor algebra, so the preceding interpolation applies.

Restrict $z$ to a sufficiently small open ball. On the fixed product collar $H_{s,z}$ is unchanged; on its transition region the original spatial differential has a uniform positive lower bound, so no critical points appear there. On the compact perturbation support the original $H_s$ has a positive margin from $0,1$, so the range and the endpoint fibers are retained. By openness of Morse nondegeneracy and of the finitely many distinct endpoint critical values, the stationary parameter ends remain excellent even on the portions where $\beta$ begins to be positive. Thus every relevant exceptional event occurs where $\beta\gamma>0$ and the jet evaluation is submersive.

## 3. The jet strata, their smoothness, and their codimensions

Write a jet as $(v,d,A,T)$: value, gradient covector, symmetric Hessian matrix, and symmetric third derivative. At $d=0$, $A$ is intrinsic. At $d=0$ and $A$ of corank one, $T$ restricted to the kernel line is also intrinsic: the extra third-derivative chain-rule terms contain either $d$ or $A$ paired with a kernel vector, and vanish. Consequently the following conditions define well-defined smooth strata in the appropriate spatial jet bundles.

The locus of symmetric matrices of corank exactly $r$ is smooth of codimension $r(r+1)/2$. For a direct proof choose an invertible $(n-r)\times(n-r)$ principal block $A_0$ and write the matrix in blocks $\left[\begin{smallmatrix}A_0&B\\B^t&C\end{smallmatrix}\right]$. Its rank is $n-r$ precisely when the symmetric Schur complement $C-B^tA_0^{-1}B$ is zero. Its $r(r+1)/2$ entries are independent equations because differentiating with respect to $C$ gives the identity. Such charts cover the rank stratum (after a fixed linear change of basis where necessary).

Hence the stratum $B_r$ defined by $d=0$ and Hessian corank $r$ has codimension $n+r(r+1)/2$. The corank-one sub-stratum $B_{1,0}$ adding $T|_{\ker A}^{\otimes3}=0$ has codimension $n+2$: choose a smooth local nonzero kernel vector and vary its cubic coefficient independently. The sign of that vector does not affect the zero condition.

For simultaneous jets at distinct spatial points at one parameter, the conditions below have the stated codimensions. Gradient conditions at the different points are independent, and value equalities are independent of all gradient/Hessian/third-derivative coordinates.

| Stratum | Codimension | Dimension of configuration source |
|---|---:|---:|
| One $B_1$ | $n+1$ | $n+1$ |
| One $B_r$, $r\ge2$ | $n+r(r+1)/2\ge n+3$ | $n+1$ |
| One $B_{1,0}$ | $n+2$ | $n+1$ |
| Two Morse critical points of equal value | $2n+1$ | $2n+1$ |
| One $B_1$ and another critical point, equal values | $2n+2$ | $2n+1$ |
| Two $B_1$ points at one parameter | $2n+2$ | $2n+1$ |
| Three critical points with one common value | $3n+2$ | $3n+1$ |
| One $B_1$ and an equal-value pair at two other points | $3n+2$ | $3n+1$ |
| Two equal-value pairs at four distinct points | $4n+2$ | $4n+1$ |

In the last three rows no Hessian restrictions on the ordinary critical points are needed. One may partition into fixed corank strata if a condition is already expressed on a corank locus; there are finitely many possibilities. The first equal-value row is restricted to invertible Hessians, an open condition, so it is an embedded submanifold as written. The $B_1$ rows use the smooth corank-one stratum, not the singular closed determinantal variety.

## 4. Application of the actual finite-dimensional transversality theorem

For each row and each relevant $k$, the source is the smooth manifold

$$\{s:\beta(s)>0\}\times\operatorname{Conf}_k(\{x:\gamma(x)>0\}),$$

of dimension $kn+1$. The target is the product spatial 3-jet bundle over that source. The evaluation map also depending on $z$ is a submersion in every vertical jet direction by §2, and covers the identity on the spatial base; hence it is transverse to each displayed stratum. Apply `thm-parametric-transversality` to each of these finitely many maps/strata. The union of their exceptional parameter subsets is null, so its complement meets every parameter ball. Pick one $z$ in that complement and set $F_s=H_{s,z}$.

If a target stratum has codimension greater than its configuration source dimension, its transverse inverse image is empty: at a point of the inverse image the differential would have to surject onto a normal space of strictly larger dimension. Thus all the high-codimension rows are avoided. The $B_1$ inverse image and the Morse equal-value-pair inverse image are zero-dimensional smooth submanifolds. This is an application of a supplied finite-dimensional theorem to explicit submersive families, not an application of an unproved infinite-dimensional or multijet version.

At a $B_1$ point choose coordinates with Hessian kernel spanned by $u$ and invertible Hessian block in $y$. Let $b=\partial_s d_xF$ and $c=\partial_u^3F$. To see exactly what transversality says, project the linearization of the gradient onto its kernel covector: its spatial columns vanish there and its parameter column is $b(u)$. In the remaining $n-1$ gradient directions the Hessian is invertible. The differential of the corank equation in the remaining kernel spatial direction is $c$ (terms from differentiating the kernel vector vanish because $Au=0$). Therefore the determinant of the normal derivative to $B_1$ is, up to a nonzero factor, $b(u)c$. Its invertibility implies $b(u)\ne0$ and $c\ne0$. The separate avoidance of $B_{1,0}$ is compatible with, and corroborates, this calculation.

At an equal-value pair with invertible Hessians, eliminate the spatial normal directions using the two Hessian blocks. The remaining derivative is the derivative of the difference of the two critical values along the parameter. Thus transversality is exactly nonzero crossing speed.

The three- and four-point exclusions ensure that there is only one pair at a crossing parameter. The two-$B_1$ and $B_1$-plus-pair exclusions ensure that no birth coincides with another birth or crossing. The $B_1$-plus-equal-value exclusion ensures that a birth value is distinct from every other critical value.

## 5. Local splitting and the birth geometry without smooth preparation

Near a $B_1$ event put its parameter and critical point at zero. Apply the actual square-completion lemma successively in the $n-1$ nonkernel directions, treating $(s,u)$ and all remaining coordinates as parameters. The invertible transverse Hessian block remains invertible after each Schur-complement step. This gives smooth parameter-dependent spatial coordinates in which

$$F_s=g(s,u)+Q(y)$$

with $Q$ a fixed signed diagonal quadratic form. At the origin $g_u=g_{uu}=0$, $g_{uuu}\ne0$, and $g_{su}\ne0$. These equalities are preserved by the splitting: the transverse first derivatives vanish on the chosen critical transverse section, and the kernel third derivative and the mixed kernel-gradient derivative agree with the original intrinsic quantities up to nonzero coordinate factors.

Reverse $u$ if necessary so $g_{uuu}(0,0)>0$. By the implicit function theorem, $g_{uu}(s,u)=0$ has a unique solution $u=m(s)$ near zero. Translate by $m(s)$. Integral Taylor expansion in $u$ gives the exact expression

$$g(s,u)=a(s)+b(s)u+u^3 C(s,u),\qquad C(s,u)=\frac12\int_0^1(1-t)^2 g_{uuu}(s,tu)\,dt.$$

Here the translated function is understood on the right-hand side. In particular $C(0,0)=g_{uuu}(0,0)/6>0$, $b(0)=0$, and $b'(0)=g_{su}(0,0)\ne0$, since the shift contributes $g_{uu}m'=0$ at the origin. Shrink the neighborhood so that $g_{uuu}>c>0$ and $b'$ has constant nonzero sign.

For each fixed small $s$, $g_u$ has a unique strict local minimum at $u=0$: its derivative $g_{uu}$ is strictly increasing and vanishes at zero. If $b(s)>0$ there is no nearby root of $g_u$; if $b(s)<0$ there are exactly two nearby roots, one on either side of zero. To justify existence uniformly, at $u=\pm r$ the integral lower bound $g_u(s,u)\ge b(s)+(c/2)r^2$ is positive for $|b(s)|<cr^2/4$, and strict decrease/increase on the negative/positive half-interval gives uniqueness. At $b(s)=0$ they merge. Their nonkernel Hessian block is that of $Q$, while $g_{uu}$ is negative at the left root and positive at the right root. Their indices are therefore $\operatorname{ind}Q+1$ and $\operatorname{ind}Q$.

Between these roots $g_u<0$, so integrating gives $g(s,u_+)<g(s,u_-)$. Consequently the two birth critical values never coincide while both critical points exist. This conclusion uses the actual function, without asserting that a formal cubic Taylor expansion is already an exact coordinate normal form.

The spatial-gradient map on $[0,1]\times W$ is transverse to zero: where its Hessian is invertible this is immediate, and at a fold its parameter derivative supplies the missing kernel covector by §4. Its zero set is therefore a smooth curve. At a fold the equation $g_u(s,u)=0$ solves $s=\psi(u)$, since $g_{su}\ne0$. Differentiating gives $\psi'(0)=0$ and $\psi''(0)=-g_{uuu}/g_{su}\ne0$. Thus its parameter projection is a nondegenerate fold, with the two critical branches just described.

## 6. Finiteness, including exclusion of diagonal accumulation

The critical curve is closed in the compact parameter/manifold product and is disjoint from a fixed boundary collar. Thus it is compact, with the ordinary endpoint critical points as its only boundary. The degenerate subset is closed in it, since it is the zero set of the Hessian determinant. It is discrete by transverse $B_1$ intersection and has no higher-corank limit by §4; compactness therefore makes it finite.

The equal-value-pair set is discrete but initially lies in a noncompact configuration space, so discreteness alone does **not** establish finiteness. Suppose infinitely many crossings existed. By compactness of $[0,1]\times W^2$, take an accumulation point $(s,p,q)$. If $p\ne q$, continuity makes both limiting points critical with equal values. Neither can be degenerate by the $B_1$-plus-equal-value exclusion, and then the equal-value transverse inverse image is locally discrete, a contradiction. If $p=q$ and this point is Morse, the parameter implicit function theorem gives a unique nearby critical branch, so two distinct critical points cannot converge to it. If $p=q$ and it is a fold, §5 gives exactly the two nearby critical branches and proves that their values are unequal. This also contradicts crossing accumulation. Hence there are only finitely many crossings. The stationary endpoint neighborhoods exclude endpoint accumulation. Together with the simultaneous-event exclusions in §4, this proves assertions 1–3 of the result.

## 7. An explicit homotopy making the elementary cubic path

Use the split-and-shifted coordinates of §5. Write $c_0=C(0,0)>0$ and $D(s,u)=u^3(C(s,u)-c_0)$. Let $\alpha$ be a smooth scalar bump equal to one on $[-1/2,1/2]$ and zero outside $(-1,1)$, and choose a radial spatial bump $\rho(y/r)$ equal to one near zero and zero for $|y|\ge r$. Put

$$g_{\theta,s}(u,y)=a(s)+b(s)u+u^3C(s,u)+Q(y)-\theta\alpha(s/r^2)\alpha(u/r)\rho(y/r)D(s,u),\quad 0\le\theta\le1.$$

Extend this family by the original path outside the coordinate box. The bump factors make this a smooth compactly supported change; it is supported in $|s|<r^2$, $|u|<r$, $|y|<r$, and hence leaves the endpoint functions untouched. At $\theta=1$ it has constant cubic coefficient $c_0$ in a smaller box.

Here are the derivative estimates ensuring that this is a homotopy through the same generic event, rather than a possibly singular interpolation. Smoothness gives $|C(s,u)-c_0|\le K(|s|+|u|)$ on a fixed box, while the derivatives of $C$ of each fixed finite order are bounded there. On the shrinking box this gives $D=O(r^4)$, $D_u=O(r^3)$, $D_{uu}=O(r^2)$, $D_{uuu}=O(r)$, and $D_s=O(r^3)$. Differentiating the $s/r^2$ cutoff once and the $u/r$ cutoff once therefore gives a mixed $(s,u)$ derivative bounded by $O(r)$; three spatial derivatives likewise give $O(r)$. A first $y$ derivative of the correction is $O(r^3)$ and a second is $O(r^2)$, uniformly in $\theta$.

All critical points in the support have $y=0$. Indeed, on the region where the $y$ cutoff varies, $|y|$ is bounded below by a positive constant times $r$, so $|d_yQ|$ is bounded below by a positive constant times $r$, whereas the correction's $y$ derivative is $O(r^3)$. These cannot cancel for small $r$. Where the cutoff equals one or zero its $y$ derivative vanishes and $d_yQ=0$ exactly when $y=0$. The transverse Hessian at $y=0$ remains the nondegenerate Hessian of $Q$.

On $y=0$, the reduced function still has $g_{\theta,uu}(s,0)=0$ and $g_{\theta,u}(s,0)=b(s)$, because the correction has a factor $u^3$ and the $u$ cutoff is constant near zero. Its third $u$ derivative is positive by the uniform $O(r)$ estimate and the lower bound in §5. Thus $g_{\theta,uu}(s,u)$ has its only zero at $u=0$, and a degenerate critical point requires $b(s)=0$, hence $s=0$. The fold stays at the origin, with the same nonzero cubic and mixed derivatives; each nearby slice has exactly the root pattern of §5. No new birth can occur anywhere in the support. Outside the support nothing changed.

Choose the initial neighborhood to isolate this event from the finitely many other event parameters and from the other critical values at its parameter. The correction has size $O(r^4)$, so it retains a strict gap from all those other critical values after shrinking. The two local critical values remain distinct by the strict-minimum argument in §5 for every $\theta$. Thus no crossing is created or destroyed. This proves assertion 4, with all boundary collars fixed.

## 8. Exact consequences for handles; further work is distinguished

Near the normalized birth, choose the descending field to be the negative Euclidean gradient of $a(s)+b(s)u+c_0u^3+Q(y)$ in the smaller box. For parameters close enough to the event the two critical points and the segment between them lie in this box. The line $y=0$ is invariant; its scalar equation is $\dot u=-b(s)-3c_0u^2$. For the parameter side with two roots it has exactly one local connecting trajectory between them. No additional connecting trajectory can leave the chart: choose a fixed compact annulus between two nested balls inside this model chart. At $s=0$ the gradient has no zero on the annulus, and thus its norm has a positive lower bound $m$, uniform for all sufficiently small parameters. A negative-gradient trajectory crossing the annulus from its inner to its outer boundary has Euclidean length at least the difference of the two radii and loses function value at least $m$ times that difference, since $dF/d\ell=-|\nabla F|$ along arc length. But the two critical values converge to one another at the event. For small parameters their difference is less than this fixed positive loss, so a trajectory joining them cannot cross the annulus. Inside the chart the diagonal linear $Q$ equations force every transverse coordinate to be zero on a trajectory tending to both critical points: a growing coordinate cannot tend to zero at its positive-time end and a decaying coordinate cannot tend to zero at its negative-time end. Thus the local trajectory is also the unique global trajectory. The positive and negative $Q$ directions give transverse complementary normal directions to that trajectory. Consequently its attaching sphere and belt sphere intersect geometrically once at an intermediate level, and the actual `thm-handle-cancellation` applies. This proves that this particular elementary birth inserts a geometrically cancelling adjacent-index handle pair. It does not merely infer cancellation from the two index counts.

The local coordinate model gives the framing: the negative eigenspaces supply the lower handle's core disk, the positive eigenspaces supply the cocore normal coordinates, and flow transports the attaching thickening. Hence the one intersection is a **framed** handle cancellation in the sense of the existing supplier. It is supported away from the fixed boundary collars. Later handles must be transported by the supported cancellation diffeomorphism; simply deleting the pair while forgetting the terminal parametrization is not the asserted move.

The following sections give the regular-interval and crossing rules. They concern parametrized elementary handle bands with all induced boundary maps retained. They still do not classify trajectories of an arbitrarily selected global descending-field path, and do not establish a 4-dimensional surgery-trace Kirby theorem or a coupon-decorated surgery calculus. Those conclusions are not included in the proved result.

## 9. Regular-parameter intervals: a relative left-right trivialization proved by a vector field

Suppose $s$ varies in a sufficiently short closed interval containing no exceptional event. The finitely many critical points have smooth disjoint branches $p_j(s)$ by the parameter implicit function theorem, and their distinct critical values $c_j(s)$ stay separated. Successive square completion, with $s$ a parameter, gives smooth local embeddings $\psi_{j,s}$ with

$$F_s(\psi_{j,s}(z))=c_j(s)+Q_j(z).$$

Put $V_{j,s}=\partial_s\psi_{j,s}\circ\psi_{j,s}^{-1}$. Differentiating the last equation gives $\partial_sF_s+dF_s(V_{j,s})=c_j'(s)$ near that critical branch. Choose a smooth scalar field $Z_s(t)$ on the value interval, supported away from $0,1$ and the fixed collar value ranges, equal to $c_j'(s)$ on disjoint neighborhoods of the values $c_j(s)$. Such a field is a finite sum of disjoint bumps following those values. Near a critical point the equation

$$dF_s(Y_s)=Z_s(F_s)-\partial_sF_s$$

is therefore solved by $Y_s=V_{j,s}$. Away from the critical branches it is solved by

$$Y_s=\bigl(Z_s(F_s)-\partial_sF_s\bigr)\frac{\operatorname{grad}F_s}{|\operatorname{grad}F_s|^2}.$$

A partition of unity patches these solutions because the equation is linear in $Y_s$. Take $Y_s=0$ on the fixed collar: both sides vanish there. These vector fields have compact support in the interior of $W$, so their time-dependent flow $\Phi_s$ exists throughout the short parameter interval, fixes the boundary collar, and is a diffeomorphism (use the ordinary flow theorem on the extended space with field $\partial_s+Y_s$). Let $\eta_s$ be the scalar flow of $Z_s$, initially the identity. Uniqueness for the scalar ODE gives

$$F_s\circ\Phi_s=\eta_s\circ F_{s_0}.$$

Thus regular level surfaces, handle bands, and both incoming and outgoing identifications are carried by actual collar-fixed diffeomorphisms. The scalar flow is increasing and is a translation near each critical value, since $Z_s$ is locally constant in $t$ there; hence a transported Euclidean critical-point field retains its exact Morse model. There is no appeal to “structural stability” in this argument. A finite subdivision covers any compact parameter interval without events.

If an attaching embedding at one slice is $S: S^{k-1}\times D^{n-k}\to F_{s_0}^{-1}(a)$, its transported embedding is $\Phi_s\circ S$, considered in the level $F_s^{-1}(\eta_s(a))$. If its elementary outgoing identification was $d$, it becomes $\Phi_s|_{\mathrm{out}}\circ d\circ(\Phi_s|_{\mathrm{in}})^{-1}$, with the handle part transported by the same local coordinates. These formulas are necessary: writing only that the attaching sphere is isotopic loses the terminal boundary parametrization.

## 10. Changing the descending field inside one elementary band

This step is local to a band with at most one critical point; it does not require a global Morse–Smale theorem. The actual local stable-manifold supplier `thm-local-stable-unstable-manifolds-for-hyperbolic-gradient-critical-points` and its complete contraction proof were read. Its displayed contraction proof extends to a smooth compact parameter interval as follows.

First any given standard downward gradient-like field $X$ on such a band can be written as $-\operatorname{grad}_g f$ for a smooth metric $g$. Near its critical point use the Euclidean metric from its defining chart. Off the critical point split the tangent bundle as $\mathbb RX\oplus\ker df$ and prescribe $g(X,X)=-df(X)>0$, $g(X,v)=0$ for $v\in\ker df$, and any positive metric on $\ker df$. Then $g(X,\cdot)=-df$; convex patching of such metrics preserves that linear equation and agrees with the Euclidean metric on a smaller critical chart. Use a product metric on the fixed end collars. Thus two specified fields can be joined by the negative gradients of the convex metric path $g_\tau=(1-\tau)g_0+\tau g_1$, retaining the collar condition.

For completeness, smooth dependence of the unstable disks is justified rather than assumed. The linearizations are $A_\tau=-g_\tau^{-1}\operatorname{Hess} f$, smoothly parameterized, self-adjoint for $g_\tau$, and uniformly hyperbolic on the compact parameter interval. Their positive/negative spectral subbundles vary smoothly. One elementary formula is obtained by conjugating to an ordinary symmetric matrix and taking its matrix sign $A(A^2)^{-1/2}$; the positive square root of a positive definite matrix is smooth by the implicit function theorem, since the derivative $H\mapsto RH+HR$ has eigenvalues equal to positive sums of eigenvalues of $R$ and is invertible. The projectors are $(I\pm\operatorname{sign}A)/2$. A smooth family of projectors $P_\tau$ has smooth trivializations: solve $U'=[P',P]U$, which differentiating $P_\tau U_\tau-U_\tau P_0$ shows transports the ranges and kernels. Thus fixed spectral coordinates may be used on a short parameter interval.

In those coordinates the supplied proof's weighted integral operator for stable paths is

$$\mathcal T_{\tau,a}z(t)=e^{tA_\tau}a+\int_0^t e^{(t-r)A_\tau}P_{s,\tau}R_\tau(z(r))\,dr-\int_t^\infty e^{(t-r)A_\tau}P_{u,\tau}R_\tau(z(r))\,dr.$$

Choose a common spectral gap, a smaller positive decay exponent, and a uniform cutoff radius making the contraction constant strictly less than one for all nearby $\tau$. This is possible because $R_\tau(0)=DR_\tau(0)=0$ uniformly on the compact parameter interval. The operator is smooth in $(\tau,a,z)$ on the weighted path space. To check this, each spatial derivative of the cut-off $R_\tau$ is bounded; products of decaying path variations remain bounded in the same weighted norm. Parameter derivatives of the matrix exponentials add polynomial factors in $t$ or $|t-r|$, which remain integrable after reserving a smaller exponential gap. Repeated differentiation therefore gives uniformly dominated integral operators of every finite order. Its path derivative has norm below one. Differentiating the fixed-point equation and solving by the convergent Neumann series proves smooth parameter and initial-point dependence; repeated differentiation proves every higher derivative, since the highest derivative always occurs in the same invertible linear operator $I-D_z\mathcal T$. Time reversal gives the same result for unstable disks. This is the parameter version of the supplier's actual proof, with its uniform estimates and differentiability step supplied here.

Intersect the smoothly varying local unstable disk with a fixed nearby regular level below its critical value. The intersection is transverse because $df(X_\tau)<0$, so it is a smooth family of framed attaching sphere sections. Its normal coordinates come from the complementary local stable directions and vary smoothly as well. Flow their sufficiently thin thickenings down to the incoming level of the elementary band. There is no intervening critical point. On the compact part outside the local critical chart the strict descending inequality has a uniform negative bound, so these trajectories reach the incoming level in uniformly bounded time. Their hitting time is smooth by the implicit function theorem, since the derivative of $f$ along the trajectory is nonzero at the hit. Consequently the full framed attaching embeddings vary by a smooth isotopy. The same flow-plus-local-handle construction gives a smooth family of outgoing identification maps. These can be extended to ambient isotopies on the compact level surface by the actual compact-source isotopy-extension supplier, or retained as the explicit smoothly varying embeddings and outgoing maps.

This proves that changing fields on an elementary band introduces only isotopy of the framed attaching embedding **with the corresponding change of the outgoing identification**. Constant changes of the chosen frame at a critical point are changes of the standard handle coordinates; if a frame component is reversed, retain that handle-coordinate automorphism explicitly. It is not a new Dehn-surgery framing integer. No classification of globally broken trajectories or same-index handle slides was used.

## 11. A critical-value crossing gives independent framed attachments

Take a short parameter interval with just one crossing, between nondegenerate critical branches $p(s),q(s)$, and no other critical points in the chosen height band. Use parameter Morse coordinates at the two disjoint branches and choose one smooth descending field agreeing with the Euclidean models there; partition of unity constructs it exactly as in the read supplier `lem-adapted-descending-field-near-a-compact-morse-band`. At the crossing parameter their values agree, say at $c$. Choose the same fixed positive model height drop $\epsilon$ at each critical point, so that each local unstable sphere section has height $F_s(p(s))-\epsilon$ or $F_s(q(s))-\epsilon$. For $s$ close enough to the crossing both sections lie strictly below **both** critical values. All flow from those sections to a lower regular level $a$ therefore takes place in a region without critical points. The corresponding unstable disks cannot hit the other critical point before reaching their sections: the function drop to each section is $\epsilon$, while the separation of the two critical values is less than $\epsilon$; choose the local disk in its own disjoint Morse chart. Thus the global attaching spheres in $F_s^{-1}(a)$ are disjoint. Equivalently, distinct points on them have backward limits at different critical points, so flow uniqueness forbids an intersection. By compactness, choose disjoint sufficiently thin framed attaching neighborhoods for both.

The whole band is obtained by attaching these two disjoint framed handles and then a regular product to an upper level $b$. This follows from the same simultaneous local-handle construction and compact regular-flow comparison as the read `lem-interior-slab-handle-attachment`; it does not require their indices to agree, since the charts, local function modifications, and all attaching neighborhoods are disjoint. One can also cross the two distinct critical heights in either order. Disjoint quotient attachments commute: both iterated quotients identify exactly the same two disjoint attaching subsets with the same handle subsets. Their corner roundings agree outside disjoint seam collars and are compared by the existing corner-rounding isotopies inside them. The normal coordinates are unchanged; hence these are independent **framed** attachments, not merely independent core spheres.

For exact parametrization bookkeeping, write $A,B$ for the two framed attachments in the common lower surface. Let $d_A$ and $d_B$ be the identifications to the respective first intermediate surfaces, and let $e_{B|A}$ and $e_{A|B}$ identify the second surgered surfaces with the common upper surface. Denote by $d_A^B$ and $d_B^A$ the maps extended over the other, disjoint handle. The actual identification from the simultaneous two-handle model to the upper level gives

$$e_{B|A}\circ d_A^B\simeq e_{A|B}\circ d_B^A$$

under the canonical identification of the two simultaneous quotient surfaces. To verify this equality, on the complement of the two attaching regions both maps are the same normalized flow from the lower to the upper level. On either handle part they are obtained from the same local model coordinates followed by the same outgoing regular flow. Their collar adjustments differ only by the supported corner-rounding isotopies just described. This proves the displayed isotopy and supplies the outgoing-map rule at the crossing. It is precisely the extra condition missing from an unparametrized “critical heights interchange” statement.

## 12. What finite event reduction now establishes

Choose parameter values immediately before and after each of the finitely many events, and divide the remainder into finitely many regular intervals. Retain a regular level between each pair of critical values on each regular slice. Sections 9–10 compare the induced elementary handle bands along regular intervals by relative diffeomorphism, framed attaching isotopy, changes of handle-coordinate frame, and insertion/removal of empty product bands. Section 11 compares the two sides of each crossing by interchange of two independent framed attachments, with its displayed outgoing-map rule. Sections 7–8 compare the two sides of each birth by a geometrically cancelling adjacent-index pair, carrying all later attaching data and the final boundary map by the actual supported cancellation comparison.

In particular, this proves finite reduction of the **Morse-induced elementary handle descriptions** along the constructed path. Empty ends, disconnected manifolds, and index $0/n$ births are included: the formulas allow $\operatorname{ind}Q=0$ or $n-1$, and no connected-level or nonempty-end assumption occurred. The supplied Morse/handle correspondence realizes any specified finite handle description by such Morse data. To use the reduction as a move theorem for presentations where the cancellation boundary identification has been suppressed, one must still prove that the chosen suppression preserves the actual end parametrization; the explicit move above instead retains that identification throughout. It is not a proof that arbitrary relative surgery diagrams are related by ordinary Kirby moves.

The graph $G$ can be carried as an actual embedded ribbon graph by every relative diffeomorphism in this handle argument, preserving its collar ends. This observation does not turn it into a graph in a fixed surgery-link complement or prove graph/coupon diagram move completeness. The remaining gap is now specifically the relative surgery-trace conversion and move theorem (plus its decorated version and, if used, the separate Walker boundary-slicing theorem), rather than genericity of adapted interior function paths.
