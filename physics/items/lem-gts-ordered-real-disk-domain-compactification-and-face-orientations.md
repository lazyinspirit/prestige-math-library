---
id: lem-gts-ordered-real-disk-domain-compactification-and-face-orientations
kind: lemma
title: Ordered real disk domains, actual plumbing and associahedral face orientations
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
proof_strategy: direct
deps:
- thm-euclidean-inverse-function-theorem
dependency_roles:
  thm-euclidean-inverse-function-theorem: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
  - title: John Pardon, An Algebraic Approach to Virtual Fundamental Cycles on Moduli Spaces of Pseudo-Holomorphic Curves
    url: https://arxiv.org/pdf/1309.2370v6
    locator: Section 9.1, printed p. 95, and Appendix B.1–B.2, printed pp. 136–141, provide closed complex stable-family context. The real ordered disk compactification, positive real plumbing chamber and facet orientations are constructed locally below; no general stable-curve existence theorem is imported.
dependency_level: 0
---

## Statement

For $N\ge3$, cyclically ordered distinct boundary points of a disk modulo positive disk automorphisms have a compact Hausdorff metrizable compactification $K_N$ of real dimension $N-3$ by finite planar stable disk trees. Every vertex has at least three boundary flags. A tree with $r$ internal edges has a local product chart $[0,\varepsilon)^r$ times the component configuration charts. The actual universal family is smooth away from the nodes and has real plumbing $zw=-\rho_e$, $\rho_e\ge0$, with strip length $-\pi^{-1}\log\rho_e$ and fixed product end coordinates. Its strata are exactly the consecutive-block product strata; no general stable-curve compactness theorem is assumed.

For output $\infty$, first input $0$ and last input $1$, use $\Omega_k=dx_2\wedge\cdots\wedge dx_{k-1}$, where $N=k+1$. At a stable split of $s$ inputs after $r$ and before $t$, $r+s+t=k$, the local coordinate orientation is
$$\Omega_k=(-1)^{r+st}\rho^{s-2}d\rho\wedge\Omega_{\mathrm{outer}}\wedge\Omega_{\mathrm{inner}}.$$
The outward boundary normal is $-\partial_\rho$; iterated normal interchange has its usual alternating sign. The unstable two-punctured strip is separate.

## Facts & Assumptions

**Given:** Exactly the data and hypotheses of the Statement. The compactification and each cluster recursion below are finite; no choice principle beyond the finite constructions is used.

[F1] [[thm-euclidean-inverse-function-theorem]] applies to the nondegenerate real Möbius coordinate changes between distinct flag anchors. The compactification, cross-ratio uniqueness, rational family and face sign are constructed explicitly below.

[F2] No stable-domain existence theorem is assumed: here a stable domain means exactly a finite planar tree of disks with ordered leaf labels and at least three boundary flags on every component.

## Proof

**Proof technique:** direct, using the explicit local constructions below.

1.1 Double a smooth marked disk to a marked projective line with its real circle, or identify it directly with the upper half-plane by its three chosen boundary anchors. Positive real Möbius transformations normalize three anchors to ∞, 0, 1. For each label sequence in $\mathbb RP^1\cong\mathbb R/\mathbb Z$, use at stage $j\ge1$ the explicit ordered cover by the closed dyadic arcs $[a/2^j,(a+1)/2^j]$ modulo $1$, for $a=0,\ldots,2^j-1$. Starting with all indices, retain at stage $j$ the indices lying in the first arc of that cover which contains infinitely many of the indices retained at stage $j-1$; such an arc exists because the cover is finite. Choose the least retained index greater than the previous one. The resulting diagonal subsequence is Cauchy, since its $j$th and all later terms lie in one arc of diameter at most $2^{-j}$, and so converges in the compact metric space $\mathbb RP^1$. Apply this deterministic extraction successively to the finitely many labels. At least three distinct limiting groups remain because the three anchors are fixed. They define the first stable component. This proves the needed sequential extraction using only finite choices and least indices. [F2, given, construct, algebra]

2.1 If a limiting position carries more than one label, use a finite real coordinate there (at∞ use−1/x). For that group choose its two extremal points in the induced small interval, subtract the first and divide by their positive separation. All points of that group now lie in[0,1]. Before defining a limiting child, apply the deterministic finite-label extraction of step 1.1 again to these normalized coordinates, taking a subsequence of the one already retained. Their limits now exist; the two extremal labels remain exactly0 and1, so at least two distinct limiting groups lie at0 and1, and the parent attachment is∞. This defines its stable child component. Recurse on every group still containing more than one coincident label, performing this further finite-label extraction after each normalization. Each later subsequence preserves all previously obtained component limits; the finite recursion bound below ensures that only finitely many successive extractions are required. At every step a group splits into at least two strictly smaller nonempty groups; the recursion is therefore finite. It produces a planar labeled tree, component point configurations, and positive relative scales tending to zero. Counting flags gives Σ_v(val(v)−2)=N−2; val(v)≥3 bounds its vertices by N−2 and its internal edges by N−3. Thus no infinite ghost tree is admitted by this construction. [F2, given, construct, algebra, step 1.1]

3.1 Uniqueness/topology can be checked by finitely many real cross-ratios. For every ordered quadruple of leaves take its normalized cyclic cross-ratio in[0,1]. On a stable tree define it by contracting to its four-leaf stabilization, where it is0,1 or a component cross-ratio. These determine the tree and its coordinates. To verify this rather than assume it, choose any stable vertex and three leaves in three of its branches; normalize those leaves to∞,0,1. The cross-ratios with a fourth leaf determine its limiting position, hence the partition into the remaining branches. Recurse inside every nontrivial branch by choosing three of its flags. This recovers exactly the finite cluster construction 2.1; if no branching remains it recovers the smooth marked line itself. In particular two limits with identical quadruple data are isomorphic. The configuration closure in the finite cross-ratio cube is therefore precisely this stable-tree set, compact Hausdorff and metrizable. The original cyclic order determines its planar order and the choice of disk half on every real component. [F2, given, construct, algebra, step 2.1]

4.1 Fix such a stable tree. Root it at one component. Choose three flags there and normalize to∞,0,1. On every child normalize its parent flag to∞ and two child flags to0,1. Remaining flag positions are the val(v)−3 component parameters; their cyclic inequalities persist in a small open neighborhood. Select representative leaves recursively for these flag anchors. For an edge attached at finite parent coordinate a, the generic-coordinate relation is $x_parent=a+\rho _e x_child.$ In the child coordinate $w=-1/x_{child}$ this is $(x_{parent}-a)w=-ρ_e$. Attachments at parent∞ use the real coordinate $-1/x_{parent}$. These formulas compose recursively, expressing every generic root-coordinate marked point as a real rational function of the component parameters and the positive scales. Conversely the same normalized leaf coordinates recover a andρ and then all child coordinates. Thus for positive small scales they are actual coordinates, not merely formal deformation parameters. [F2, given, construct, algebra, step 3.1]

5.1 At $ρ=0$ retain the two component charts and the fixture $zw=-ρ$. Charts away from $z=w=0$ glue by the displayed identities; they are actual holomorphic coordinate changes after complexifying the finite base parameters, and preserve the chosen real halves on the nonnegative real chamber. The fixtures and the complements of fixed smaller coordinate disks form a finite cover of each family fiber. Over a compact base subset their closed core pieces and their closed bidisk fixtures are compact; the glued inverse image is their continuous image, hence compact. Disjoint smaller fixtures and the product collars separate distinct points, so the total family is Hausdorff. This proves the required proper universal local family and smooth thick-part trivialization directly. [F2, given, construct, algebra, step 4.1]

6.1 The coordinate inversions of 4.1, and the cross-ratio recovery of 3.1, show that after including zero scales this gives a homeomorphism from the orthant chart to an open stable-tree neighborhood. Its inverse on smooth configurations is the explicit normalized cluster calculation; as scales vanish it has exactly the limits from 2.1, and there are no other cross-ratio limits. Different anchor choices are rational Möbius coordinate changes on the components, nondegenerate at the fixed distinct flags; the fixture formulas then give their smooth family comparisons. Ordered labeled stable genus-zero domains have no automorphism: the leaf-labeled tree is fixed, and each component automorphism fixes at least three flags. Thus there is no hidden orbifold stabilizer or extra finite quotient. [F1, F2, given, construct, algebra, step 5.1]

7.1 For z,w in the upper half-plane the relation $zw=-ρ$ is exactly compatible with the disk halves. Put $z=e^{-πs+iπt}$ and $w=e^{-π(L-s)+iπ(1-t)}$, $0≤t≤1$. Their product is $-e^{-πL}$, so $L=-π^{-1}\log ρ$. Away from the fixture the component coordinates are fixed; near every remaining flag use the same product disk chart. This supplies the uniform cores/strip ends used by the polygon estimates. The unstable two-punctured strip is treated separately with its translation gauge, as required in the actual polygon problem. [F2, given, construct, algebra, step 6.1]

8.1 Write $N=k+1$, with output∞ and inputs $0=x_1<x_2<\cdots<x_k=1$. Orient the open domain chart by $Ω_k=dx_2\wedge\cdots\wedge dx_{k-1}$. A one-edge split separates one consecutive block of s inputs after r and before t, $r+s+t=k$, with both component arities at least2. An interior block has $x_{r+j}=a+ρ b_j$, $b_1=0,b_s=1$. Its Jacobian wedge is $Ω_k=(-1)^{r+st} \rho ^{s-2}d\rho ∧Ω_outer∧Ω_inner.$ To compute the sign, the block wedge contributes $(-1)^{s-2}$ $da\wedge dρ\wedge db_2\wedge\cdots\wedge db_{s-1}$. Move dρ past the r preceding coordinates, then move the t−1 outer after-coordinates past the s−2 inner coordinates. The total exponent is s−2+r+(t−1)(s−2)=r+t(s−2)≡r+st mod2. [F2, given, construct, algebra, step 7.1]

9.1 If $r=0$, put $ρ=x_s$ and $x_j=ρ b_j$ inside the first block; its wedge contributes exponent(s−2)+(s−2)(t−1)=st mod2. If $t=0$, put $ρ=1-x_{r+1}$; the first differential−dρ and its movement past r−1 before-coordinates give exponent r. Thus the same formula covers every stable facet. The outward normal is−∂ρ, adding its one common minus sign to the oriented boundary product. Products of faces have the induced ordered normal signs; swapping two normal directions changes sign, so codimension-two corner contributions cancel in the boundary-of-boundary formula. This supplies the actual associahedral orientation convention needed for the Stasheff identity.  [F2, given, construct, algebra, step 8.1] ∎

## Remarks

This genus-zero domain construction is independent of Pardon virtual classes and of map compactness. Its explicit rational cluster coordinates give the source-family geometry needed for polygon collars.
