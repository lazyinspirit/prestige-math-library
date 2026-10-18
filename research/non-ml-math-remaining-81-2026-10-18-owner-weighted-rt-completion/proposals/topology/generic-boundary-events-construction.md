# Boundary-event genericity and the six passage models on fixed geometric collars

2026-10-18. Isolated local construction, continuing `generic-path-finite-jet-construction.md`. This proves exhaustiveness of the **local function events** when the slicing height is allowed to vary on the boundary. It does not change the boundary parametrizations of the bordism, and is not an assertion that these events occur in an adapted path whose product height is fixed. All coordinates below describe functions on the same fixed smooth manifold and geometric collars.

## Statement and the correct function space

Let $W$ be a compact smooth $n$-manifold with boundary, $n\ge2$, and let $f_0,f_1:W\to\mathbb R$ satisfy: their interior critical points are nondegenerate; their boundary restrictions are Morse; at every boundary critical point their inward normal derivative is nonzero; and all their interior and boundary critical values are pairwise distinct. A smooth path between them can be chosen stationary at its endpoints and generic in the following explicit sense. There are finitely many exceptional parameters, exactly one local event at each:

* an interior adjacent-index birth/death;
* a boundary-restriction adjacent-index birth/death, with a nonzero inward derivative of fixed sign, hence both critical points B or both T;
* one interior critical point passing through the boundary, with boundary critical point nondegenerate, ambient Hessian nondegenerate, and nonzero passage speed;
* a transverse critical-value crossing of two otherwise regular interior or boundary critical branches.

All these events are isolated from each other in parameter and from other critical values. Up to the explicitly supported local path homotopies proved below, the boundary models are

$$u^3/3-su+Q_j(y)+\epsilon z,\qquad z\ge0,$$

and

$$Q_i(y)+\epsilon(z-s)^2,\qquad z\ge0,$$

with harmless parameter-dependent additive constants and positive coordinate scalings. Here $\epsilon=\pm1$ and the indices of $Q_j,Q_i$ run over all their possible values.

For an actual bordism with its whole external boundary split into closed incoming and outgoing surfaces and a fixed product height there, apply the interior theorem instead: all boundary events in this statement are absent. To use the present theorem in a slicing proof one may keep the geometric collar and external parametrization fixed while varying the auxiliary function; its boundary restriction is then not the adapted fixed product height. A slicing with vertical boundary faces requires the corresponding marked-face convention, with perturbations supported away from the seams. Nothing below identifies these two function spaces.

## 1. The finite family and boundary strata

Use the same finite embedding $E:W\to\mathbb R^N$ and degree-at-most-15 polynomial space as in the interior proof. The proof there applies to full spatial 3-jets **at boundary points too**, because the embedding has rank $n$ in boundary charts and the functions extend smoothly across the boundary in such charts. Prescribing a full boundary spatial jet prescribes its tangential and normal derivatives independently. Multiply only by the parameter cutoff $\beta$, which is positive away from stationary parameter ends. One sufficiently small finite-dimensional perturbation therefore has submersive full-jet evaluations at all configurations of up to four distinct points, with each point separately designated as interior or boundary. There are only finitely many such designations. The same actual finite-dimensional parametric-transversality theorem applies to all the strata below simultaneously. Perturbations near a protected part of the manifold can instead be multiplied by a spatial cutoff; the argument applies where that cutoff is positive, provided the protected part is already free of the permitted exceptional events and is separated from the perturbation support.

At a boundary point use coordinates $(x,z)$, $x\in\mathbb R^{n-1}$ and $z\ge0$, with positive inward coordinate $z$. Write

$$d_T=\partial_xF,\quad a=\partial_zF,\quad A=\partial_{xx}^2F,\quad v=\partial_{xz}^2F,\quad h=\partial_{zz}^2F-v^tA^{-1}v$$

where $h$ is used only when $A$ is invertible. Vanishing of $d_T$, the rank of $A$ at such a point, and the sign of $a$ when $d_T=0$ are intrinsic. The normal coordinate can be changed only by a positive inward scaling; this preserves the sign of $a$. At a full critical point with $A$ invertible, $h\ne0$ is equivalent to the full Hessian being invertible, and its sign is its normal Schur-complement sign.

The boundary configuration source for one point is $[\text{parameter}]\times\partial W$, of dimension $n$. The following are smooth jet strata, by the same independent-gradient and symmetric-Schur-complement calculation as in the interior proof:

| Boundary stratum | Codimension | Consequence |
|---|---:|---|
| $d_T=0$, $A$ corank one, $a\ne0$ | $n$ | isolated boundary birth candidate |
| $d_T=0$, $A$ corank $r\ge2$ | $(n-1)+r(r+1)/2\ge n+2$ | avoided |
| $d_T=0$, $A$ corank one, kernel cubic zero | $n+1$ | avoided |
| $d_T=0$, $A$ corank one, $a=0$ | $n+1$ | avoided |
| $d_T=0$, $a=0$, $A$ invertible | $n$ | isolated passage candidate |
| $d_T=0$, $a=0$, $A$ singular | at least $n+1$ after rank stratification | avoided |
| $d_T=0$, $a=0$, $A$ invertible, $h=0$ | $n+1$ | avoided |

The kernel cubic in the first three rows is the third tangential derivative along the one-dimensional kernel of the boundary Hessian; it is intrinsic at a boundary critical point for exactly the same chain-rule reason as the interior kernel cubic. Its vanishing is one independent equation in the third derivatives. The $a=0$ condition is an independent first-derivative equation, so a boundary birth cannot coincide with a passage.

Transversality at the first row gives nonzero tangential kernel cubic and nonzero parameter unfolding of the tangential gradient, by the normal-matrix determinant calculation of the interior theorem in dimension $n-1$. At the passage row, solve $d_TF(s,x,0)=0$ for the boundary critical branch $x=x(s)$. Differentiating gives

$$\frac d{ds}\partial_zF(s,x(s),0)=F_{sz}-F_{zx}A^{-1}F_{sx}.$$

The determinant of the normal derivative to $\{d_T=0,a=0\}$ equals this scalar times $\det A$. Thus transversality asserts that the scalar is nonzero. Together with $h\ne0$, this is exactly the transverse nondegenerate interior/boundary passage condition, not a mere sign convention.

## 2. Simultaneous events and critical-value crossings

At an ordinary interior critical point put $d=n$; at an ordinary boundary critical point put $d=n-1$. Its critical-point equations have codimension $d$ and its spatial source dimension is $d$. At an isolated singular event at either type of point the equations instead have codimension $d+1$: this holds for interior births, boundary births, and passages. Therefore the same bookkeeping gives all mixed interior/boundary exclusions:

* a pair of ordinary critical points with equal values has codimension $d_1+d_2+1$ in a configuration source of dimension $d_1+d_2+1$, and is transverse and discrete;
* a singular event and another critical point at the same value have codimension $d_1+d_2+2$, so are avoided;
* two singular events at one parameter have codimension $d_1+d_2+2$, so are avoided;
* three critical points at one value have codimension $d_1+d_2+d_3+2$, so are avoided;
* one singular event and an equal-value pair elsewhere have the same excess of one in their codimension, so are avoided;
* two separate equal-value pairs likewise have one excess equation in their four-point configuration source, so are avoided.

Here the ordinary boundary points are restricted to $a\ne0$ and invertible $A$, and the ordinary interior points to invertible Hessian. These are open conditions. Partition any singular closure into the finitely many corank and point-location strata already listed. Every evaluation is submersive on the full spatial jets, so the equal-value and singularity equations are genuinely independent. Transversality of an equal-value pair, after eliminating its two invertible critical-point blocks, is the nonzero difference of the two critical-value speeds. Hence these are ordinary transverse value crossings. This also proves that the list in the Statement exhausts the possible exceptional local function events; all remaining jet defects have been excluded by explicit codimension.

## 3. Boundary births: reduction to the tangential cubic model

At a boundary birth the inward derivative is nonzero. Let its sign be $\epsilon$. On a smaller fixed half-space chart define a new inward coordinate

$$Z=\epsilon\bigl(F_s(x,z)-F_s(x,0)\bigr).$$

It vanishes on the boundary and has positive derivative in $z$, so $(s,x,z)\mapsto(s,x,Z)$ is a smooth local coordinate change preserving the half-space and its boundary. Thus the function has the exact form $F_s(x,0)+\epsilon Z$. Apply the parameter square splitting and explicit cubic-coefficient homotopy of the interior construction to $F_s(x,0)$, now a function of $n-1$ variables. Its derivative hypotheses have just been proved in §1. Extend the homotopy into the collar by a cutoff in $Z$; keep the extension independent of $Z$ near zero. Its amplitude can be made arbitrarily small in $C^1$, so the nonzero normal derivative stays of sign $\epsilon$. Therefore it creates no interior critical point and retains exactly the one boundary birth event.

This yields the stated local model $u^3/3-su+Q_j(y)+\epsilon Z$ near the event. The two boundary indices are $j,j+1$. Since the inward derivative is $\epsilon$, both points are B when $\epsilon=1$ and both T when $\epsilon=-1$. Their values differ while both exist, by the strict-minimum argument for the tangential cubic derivative. For $n=3$, these are exactly the four pair events $B_0/B_1$, $B_1/B_2$, $T_0/T_1$, and $T_1/T_2$.

This is a coordinate calculation and a homotopy of an auxiliary function on the same manifold. It does not move or reidentify its geometric boundary or its supplied collar embedding.

## 4. Boundary passage: full normal-form reduction by an explicit homotopy

At a passage point $A$ is invertible. Square-complete the tangential variables with $(s,z)$ as parameters. This preserves $z\ge0$ and gives

$$F_s(x,z)=Q_i(x)+g(s,z).$$

Integral Taylor expansion at the fixed boundary $z=0$ gives

$$g(s,z)=a_0(s)+a_1(s)z+z^2 B(s,z),\qquad B(s,z)=\int_0^1(1-t)g_{zz}(s,tz)\,dt.$$

At the event $a_1(0)=0$, $a_1'(0)\ne0$, and $B(0,0)=h/2\ne0$, by the transversality and Schur-complement computations in §1. Put $b_0=B(0,0)$. Use smooth cutoffs at scales $|s|<r$, $|z|<r$, $|x|<r$ to interpolate $B$ to $b_0$ in a smaller half-space box, exactly as for the cubic construction. The correction is $z^2(B-b_0)$ times the cutoffs, with size $O(r^3)$, first spatial derivatives $O(r^2)$, and second spatial and mixed $(s,z)$ derivatives $O(r)$. These bounds follow from $B-b_0=O(|s|+|z|)$, with each cutoff derivative contributing one factor $r^{-1}$. The tangential derivative of the correction is $O(r^2)$, while $|dQ_i|$ is bounded below by a positive multiple of $r$ where its $x$ cutoff varies. Thus every critical point in the support still has $x=0$. The tangential Hessian remains invertible.

At the boundary the correction's $z$ derivative is zero because of the factor $z^2$, so the passage condition is still exactly $a_1(s)=0$, at the single parameter $s=0$. The normal second derivative keeps its nonzero sign by the $O(r)$ estimate. The equation $g_z=0$ therefore has at most one nearby normal root for each $s$, and its derivative in $s$ at the origin remains nonzero. This proves that the homotopy retains exactly one passage and introduces no other local singular event. By the finite separation from other critical values established in §2, choose the box and correction small enough to retain that separation throughout.

In the smaller box at the end of the homotopy, completing the literal quadratic polynomial gives

$$g(s,z)=a_0(s)-\frac{a_1(s)^2}{4b_0}+b_0\left(z+\frac{a_1(s)}{2b_0}\right)^2.$$

The parameter $t=-a_1(s)/(2b_0)$ is a smooth local coordinate, and a fixed positive rescaling of $z$ gives the model $Q_i(x)+\epsilon(z-t)^2$, up to its parameter-dependent additive constant. This coordinate expression does not translate the boundary: the physical boundary remains $z=0$, and the critical point moves to $z=t$.

When $b_0>0$, the interior critical point exists on the side $a_1<0$, where the boundary point is T; it has index $i$. On the other side the boundary point is B and there is no interior critical point. Thus the event is $B_i\leftrightarrow T_i+I_i$. When $b_0<0$, the interior point exists on the side $a_1>0$, where the boundary point is B, and its index is $i+1$; the other side has only T. Thus the event is $T_i\leftrightarrow B_i+I_{i+1}$. For $n=3$ and $i=0,1,2$, these are all six of Walker's passage events with their exact indices.

The boundary and interior critical values differ whenever both points exist. Indeed $g_z$ is strictly monotone with the sign of $b_0$, has its unique zero at $z=z_*(s)>0$, and is nonzero on $0\le z<z_*$. Its integral from $0$ to $z_*$ therefore has a strict sign. Equivalently the displayed final model has difference $-a_1(s)^2/(4b_0)\ne0$. The monotonicity proof applies throughout the homotopy, not only at its final quadratic model.

## 5. Compactness and finiteness with boundary included

Boundary births and passages lie in closed singular subsets of the compact parameter/boundary product. Their possible limits are again singular points of the boundary restriction or full boundary critical points, respectively. The higher-corank, zero-cubic, and degenerate-Schur-complement limits have been excluded in §1; the remaining transverse singular points are isolated. Thus both sets are finite. An infinite sequence of interior births could have a boundary accumulation point only where the full spatial gradient vanishes and the full Hessian is singular. Such a point is excluded by the boundary conditions in §1: a passage has invertible full Hessian, and a boundary birth has nonzero normal derivative. Hence the interior births also form a finite set, as in the interior theorem.

For value crossings consider any accumulation configuration in the compact parameter product with $W^2$. At distinct limiting points, §2 excludes singular limits with equal values and makes every remaining crossing isolated. At coinciding limiting points in the interior, the earlier Morse-branch/fold argument applies. At a coinciding boundary point with nonzero normal derivative, no interior critical point can approach it, and the tangential Morse-branch/birth argument excludes boundary-pair accumulation. At a passage, the local tangential splitting gives exactly one boundary critical branch and at most one interior branch; §4 proves that these branches have distinct values away from their meeting parameter. No other nearby critical branch exists by the implicit function theorem. Thus no crossing can accumulate there either. This proves finiteness of all exceptional parameters, including all mixed and boundary cases.

## What this closes, and the distinct remaining topology obligation

For a fixed geometric manifold with freely variable slicing height, the local function-event exhaustiveness promised but unproved in Walker 7.3 now follows from the explicit finite-jet construction above, with exact boundary pair and six passage coordinate models. For a genuinely adapted path with fixed product height, the boundary strata cannot be reached and the earlier interior theorem is the correct result.

To obtain Walker 7.4 as a complete **slicing** theorem one must additionally construct the half-handle sublevel identifications relative to the designated bottom/top/vertical faces, track how the chosen extreme regular levels change, and prove that each such change is exactly his moves 1–19 with the stated boundary identifications. In particular moves 16–19 change the chosen slicing extremities, whereas the local jet theorem changes a function at a fixed parameterized manifold. Those half-handle and slicing identifications, and the subsequent surgery/Kirby/coupon translation, are not silently included in this function-event theorem. They remain separate authoring duties; no canonical theorem is marked complete by this file.
