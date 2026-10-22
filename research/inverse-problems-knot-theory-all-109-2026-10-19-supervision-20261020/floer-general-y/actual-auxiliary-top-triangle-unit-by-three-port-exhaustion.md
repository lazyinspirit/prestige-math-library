# Actual auxiliary top-triangle unit: three-port domain exhaustion

New local construction, 2026-10-20. It is placed in the actual punctured-surface same-handlebody slide model. The complement may have arbitrary genus and any number of sutured boundary components. The construction retains that complement and does not replace the manifold by $S^3$.

## 1. Place the actual slide and its small return translate

Cut the connected sutured surface along the beta disk system. Its cut surface is connected because the compressed boundary surface is connected. The slide band joins two **different** beta boundary circles. A proper arc between different boundary components does not separate a connected surface: after cutting, its two sides are connected around either of the joined boundary components. Thus the complement of the beta curves and the band is connected. Place gamma-one as the band sum of beta-one and beta-two; gamma-two is a short transverse translate of beta-two, and the other gamma circles are separate short translates of their beta circles. All moves take place in the band-and-circle ribbons. The unchanged complementary surface remains attached, including every original sutured boundary.

Use the two-handle local model with embedded bigons $D_1,D_3,D_4$, annular region $D_2$, and exterior region $D_5$. The exterior includes the regions reached through the uncut handle faces and the entire complementary surface. The beta/gamma periodic domains are

$$P_1=D_1-D_2-D_3,\qquad P_2=D_3-D_4.$$

Every spectator coordinate has two thin bigons $E_i^+,E_i^-$ and periodic domain $P_i=E_i^+-E_i^-$. There are no other periodic domains: the same-handlebody lattice computation identifies them with the beta basis, and these $d$ domains have independent beta boundary vectors. In particular the exterior region has coefficient zero in all of them. The beta edge of each selected positive bigon $D_1,D_3,E_i^+$ has the exterior zero region on its other side. For $D_3$, this is the region reached through the corresponding handle face; it is not a separately assigned positive cap.

These local regions can be constructed directly by thickening the two beta circles and their band, adding the short gamma offsets on each circle, and pairing the old cut faces as before. No change to the complementary surface or its boundary is made. The regions have the stated boundary-incidence relations by following the two sides of each ribbon; pairing the old disk faces identifies their outside components with $D_5$. This is why the local periodic basis and the zero-side assertions remain valid on the actual general sutured surface.

On the beta edge $I_i$ of each selected positive bigon, place one beta/delta intersection $w_i^+$ in its interior and place the other $w_i^-$ outside that edge. Choose delta as a sufficiently small normal graph over beta. On the part of $I_i$ from $w_i^+$ toward its gamma endpoint $y_i^-$, put delta strictly **inside** the selected bigon; on the part from $y_i^+$ to $w_i^+$ put it strictly outside, in the zero region. Keep exactly the two stated simple zeros of that normal graph. The signs on its remaining arc can be joined smoothly without new zeros. Choose its two signed lobe areas equal, by changing the positive and negative amplitudes separately. This makes delta an exact Hamiltonian translate for the chosen positive surface area form. All changes are arbitrarily small and remain in disjoint beta ribbons.

Let $v_i^+$ be the gamma/delta intersection near $y_i^-$. The opposite curve ordering makes it the source endpoint of the inverse-pair positive bigon. The three points $y_i^+,v_i^+,w_i^+$ bound an actual embedded curvilinear triangle $\Delta_i$ strictly inside the selected bigon: follow its gamma side, then the delta segment inside the bigon, then its beta segment. Choose the transverse graph and corner neighborhoods so the triangle uses a single convex intersection sector at each corner, with angle strictly less than $\pi$; it is the intersection of the corresponding inward half-disks there. The delta segment cuts off a nonempty strip adjacent to the beta edge from $w_i^+$ toward $y_i^-$. The triangles for the different coordinates are disjoint.

Let $Q_i$ denote the beta/delta periodic domain, with sign chosen to be $+1$ in that removed inner strip. It is $-1$ in the opposite thin lobe lying in the zero region near the other part of the same beta edge. These coefficients follow from the full beta-minus-delta boundary. Other $Q_j$ vanish in those two ports because the beta ribbons are disjoint.

## 2. Exhaust all nonnegative top-to-top triangle domains

Set $\Delta=\sum_i\Delta_i$. For the prescribed three top tuples, every other triangle domain differs from $\Delta$ by a full triply periodic domain. The actual same-handlebody lattice gives the unique expression

$$D=\Delta+u_1P_1+u_2P_2+\sum_{i\ge3}u_iP_i+\sum_{i=1}^d v_iQ_i,$$

with integral coefficients. Sphere insertions have zero domain and are treated separately below; they do not add a missing region coefficient.

Choose one test point in each of the following open ports, away from all new curves. The translate is small enough that each indicated old-region core remains nonempty. Every listed test point has multiplicity zero in $\Delta$.

| Port | Multiplicity of $D$ |
|---|---:|
| Core of $D_2$, outside all beta ribbons | $-u_1$ |
| Outer zero-side lobe at the beta-one edge | $-v_1$ |
| Removed strip inside $D_1$ | $u_1+v_1$ |
| Core of $D_4$, outside all beta ribbons | $-u_2$ |
| Outer zero-side lobe at the beta-two edge | $-v_2$ |
| Removed strip inside $D_3$ | $-u_1+u_2+v_2$ |
| Core of $E_i^-$, for each spectator $i$ | $-u_i$ |
| Its outer zero-side lobe | $-v_i$ |
| Its removed strip inside $E_i^+$ | $u_i+v_i$ |

If $D$ is nonnegative, the first three rows give $u_1\le0$, $v_1\le0$, and $u_1+v_1\ge0$, hence $u_1=v_1=0$. The next three, with $u_1=0$, give $u_2=v_2=0$. Each spectator's three rows give $u_i=v_i=0$. Therefore $D=\Delta$. This exhausts **all** nonnegative domains for the specified top-to-top corners; it does not merely compute a leading area term or select one convenient domain. It also supplies the relevant auxiliary triple's admissibility: apply the same inequalities with reference domain zero to any nonnegative periodic chain and then to its negative.

The proof needs the removed inner strips and the opposite zero-side lobes. Letting the translate collapse onto beta, or keeping only the old four-region coefficient table, would lose these inequalities and would not prove uniqueness.

## 3. Count and orient the actual product triangle

Choose the integrable symmetric-product structure on a planar neighborhood $U$ of the band-and-circle model. This neighborhood contains all active curves and region supports but omits the cut-face holes; the handle-face identifications occur outside the domains under consideration. An embedded curvilinear triangle has exactly one conformal map from the three-punctured disk with its three boundary points fixed. Uniqueness follows because a conformal self-map of a disk fixing three boundary points is the identity. The normalized scalar linearized problem has zero kernel, by the same infinitesimal automorphism calculation; its index is zero, so its cokernel is zero. Thus the triangle is regular. Their disjoint coordinate neighborhoods give a regular product triangle representing $\Delta$, with one actual zero-dimensional moduli point and determinant count $\pm1$. Fix its reference orientation to make that count $+1$.

There is no extra holomorphic representative invisible to the domain. For these chosen integrable auxiliary data, the incidence cover of a holomorphic configuration map has a holomorphic evaluation to $U$. Its degree at a region point is the domain multiplicity. A nonconstant coordinate entering a zero region would have positive local degree there, by the open mapping theorem. Hence the domain $\Delta$, which has coefficient one exactly on the disjoint triangles, forces the evaluation to be the corresponding degree-one conformal maps and constant spectator sheets. No component can travel through the unchanged complementary surface, whose multiplicity is zero. The same argument excludes an added nonconstant holomorphic sphere. In the planar model $\operatorname{Sym}^d U$ is an open subset of $\mathbb C^d$ through the elementary symmetric functions, so its tangent bundle is complex trivial; sphere insertions there have zero Chern and Maslov contribution. This use of planar data concerns the **new auxiliary count**, not the full general-manifold theory.

For any other beta/delta target tuple, the actual small Hamiltonian pair's relative grading drops by the positive number of lowered coordinates. Its two bigons have index one, their difference has index zero, and all auxiliary periodic indices are zero: for $P_1$ this follows by comparing the index-one bigon with the index-one annular matching classes, and for $P_2,P_i,Q_i$ by comparing their two index-one bigons. The reference product triangle has index zero. Thus every class at a different target has positive index and contributes no rigid triangle. For actual holomorphic representatives the preceding support argument puts the problem in the planar model, so no untracked spherical Chern shift can alter that conclusion.

Consequently the actual chosen auxiliary count is

$$T_{\beta\gamma\delta}(\theta_{\beta\gamma},\theta_{\gamma\delta})=\theta_{\beta\delta},$$

with coefficient $+1$ in the fixed reference orientation and no other rigid output. Choose the beta/gamma and gamma/delta systems by their actual bigon/annular-unit cancellations, so their top tuples are cycles. Once the actual triangle strip-breaking boundary identity is constructed for the compatible determinant system, it follows that the **induced** beta/delta top tuple is a cycle. Its separate two-bigon cancellations then identify that induced class as the distinguished auxiliary unit class. This last implication uses a signed chain identity, not a mod-two rank assertion.

## Exact transition to the exterior operation

The domain exhaustion and regular chosen unit count above are local and complete; they do not require $S^3$ or discarding boundary/radical loops. To use them in the signed exterior inverse-homotopy operation, one must realize the actual mixed triangle/quadrilateral parameter families with these prescribed regular auxiliary ends and the required compactification. Their determinant compatibility has already been constructed. No arbitrary integral invariant or new analytic coverage is asserted merely from this local unit calculation.
