---
id: lem-neat-marked-morse-endpoints-glue-across-a-heegaard-surface
kind: lemma
title: "Neat marked Morse endpoints glue across a Heegaard surface"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - thm-collar-neighborhood-theorem
  - lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
  - thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval
  - def-downward-gradient-like-vector-field
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
---

## Statement

Assume Countable Choice. Let an oriented compact closed smooth three-manifold be split as $M=U_-\cup_\Sigma U_+$ along a common oriented smooth boundary surface. Let an oriented smooth embedded circle $K$ meet $\Sigma$ transversely in a specified finite marked set $P$. Suppose smooth Morse functions $f_-:U_-\to[0,1/2]$ and $f_+:U_+\to[1/2,1]$ have boundary level exactly $1/2$, have no critical point in boundary collars, increase across the boundary in the direction from $U_-$ into $U_+$, and have adapted descending fields $Y_\pm$ tangent to the respective arcs of $K$. On each side suppose specified compression disks are the truncated stable disks of index-one points in $U_-$ or the truncated unstable disks of index-two points in $U_+$; these disks are disjoint from $K$.

After one-sided collar diffeomorphisms fixing $\Sigma$ pointwise and preserving every knot arc as a set, the functions glue to a smooth Morse function $g:M\to[0,1]$. Their fields may then be modified only in critical-point-free collars to give a global adapted descending field $Y$ tangent to $K$. On a common smaller two-sided collar $(p,t)\in\Sigma\times(-\epsilon,\epsilon)$, the knot is the union of the vertical marked fibers and $(g,Y)=(1/2+t,-\partial_t)$. All interior critical points and their adapted models are retained up to the stated one-sided transports. The new attaching circles are isotopic on $\Sigma$ to the original ones through systems disjoint from $P$, separately for the two sides. The conclusion asserts these actual curve isotopies, not pointwise preservation of the circles by the field modification.

## Facts & Assumptions

**Given:** The smooth splitting, transverse marked knot, one-sided functions, fields and compression disks in the Statement.

[F1] Smooth boundary collars and compact-set bumps exist under Countable Choice. ([[thm-collar-neighborhood-theorem]], [[lem-manifold-bump-for-a-compact-set-inside-an-open-set]])

[F2] Smooth local inverses with parameters follow by applying the Euclidean inverse function theorem to the map including those parameters. ([[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]])

[F3] Supported smooth time-dependent fields have global evolution on compact time intervals. Their flows depend smoothly on initial points and parameters. ([[thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval]])

[F4] Strict descent is preserved by positive scaling and by convex combinations of fields descending the same function; such changes preserve adaptedness if they are absent on critical-point charts. ([[def-downward-gradient-like-vector-field]])

[A1] Countable Choice is assumed. All further covers, coordinate selections and bounds are finite compactness constructions. ([[def-countable-choice]])

## Proof

**Given:** The data in the Statement.

1.1 Construct a common two-sided collar vertical on $K$. A collar of $U_-$ from [F1] gives a transverse field along $\Sigma$. Its coefficients extend across $\Sigma$ in boundary charts by the definition of smoothness at a boundary; finitely many compact-set cutoffs patch such extensions without changing their prescribed value on $\Sigma$. This gives a transverse field on an ambient neighborhood. Near each marked intersection choose coordinates $(x,r)$ with $\Sigma=\{r=0\}$. Transversality of $K$ and [F2] write it as $x=k(r)$. The field $V=\partial_r+k'(r)\partial_x$ there has $dr(V)=1$ and is tangent to $K$. Orient the original transverse field so it also has positive $r$ component. In disjoint marked neighborhoods patch to these local fields by cutoffs; positivity of the normal component is preserved. The resulting transverse field is tangent to $K$ near every crossing. Its flow gives $C:\Sigma\times(-\delta,\delta)\to M$, $C(p,0)=p$, and by uniqueness $C(P\times(-\delta,\delta))=K$ in this collar. Here local invertibility follows from [F2]; compactness makes one uniform width injective: otherwise distinct collisions at widths tending to zero would have base points tending, after subsequences, to the same point of $\Sigma$, contradicting a local collar chart there. Compactness of the rest of $K$ excludes additional knot portions in the shrunken collar. [A1, F1, F2, F3, given, construct]

2.1 In this collar write each one-sided function as $F_\pm(p,t)=f_\pm(C(p,t))$. Its $t$ derivative is positive on a uniformly small collar, since $df_\pm$ annihilates $T\Sigma$ and has the prescribed strict sign in the transverse direction. By [F2] there is a smooth one-sided solution $a_\pm(p,t)$ of $F_\pm(p,a_\pm(p,t))=1/2+t$, with $a_\pm(p,0)=0$ and $\partial_t a_\pm>0$. Compactness gives one smaller domain and bounds $c\le\partial_t a_\pm\le C$ and $|a_\pm(p,t)-t|\le A|t|$. Smooth boundary functions extend locally across zero, so the same parameter inverse argument proves smoothness up to that boundary; the solution on its original side has the correct sign because it is increasing and vanishes at zero. [F2, step 1.1, construct, algebra]

3.1 Extend each collar reparametrization to the identity without losing monotonicity. Let $\chi(|t|)$ be one near zero, zero near the outer edge of a smaller collar, and satisfy $|t\chi'(|t|)|A<\min(c,1)/2$. Such a smooth cutoff exists: take a fixed smooth step $\eta$ and set $\chi(r)=\eta(\log(d/r)/L)$, zero for $r\ge d$ and one for $r\le de^{-L}$; choosing $L$ large gives $|r\chi'(r)|\le\|\eta'\|_\infty/L$. It is smooth at zero because it is constant there. Define $s_\pm(p,t)=(1-\chi)t+\chi a_\pm(p,t)$. Its $t$ derivative is at least $\min(c,1)-|\chi'(a_\pm-t)|>0$. Thus $(p,t)\mapsto(p,s_\pm(p,t))$ is a one-sided collar diffeomorphism, equal to the identity at its outer edge and on $\Sigma$. It preserves each marked fiber and therefore each knot arc as a set. Extend it by the identity to the rest of its handlebody. The pulled-back functions equal $1/2+t$ near $\Sigma$ and hence glue smoothly across it. The changes avoid all critical points, and introduce none because collar height remains strictly increasing. These maps are isotopic to the identity by the convex interpolation of their increasing height coordinates. [F1, F2, step 2.1, construct, algebra]

4.1 Transport $Y_\pm$ by those collar diffeomorphisms. The new fields still strictly descend the corresponding pulled-back functions and remain tangent to $K$. In an inner collar where $g=1/2+t$, their $t$ components are strictly negative. Multiply each by a positive smooth factor so its $t$ component becomes $-1$ in a still smaller collar, while leaving it unchanged outside the regular collar. This scaling preserves trajectories and is absent on critical charts. There the fields and $-\partial_t$ both have $dg$ derivative $-1$. Interpolate to $-\partial_t$ by a cutoff equal to one near $\Sigma$, with support in that smaller collar. By [F4] strict descent is preserved, and each field equals exactly $-\partial_t$ near $\Sigma$. Both fields are tangent to every marked fiber, so their interpolation retains tangency to $K$. The two modified fields now glue smoothly to a global field, unchanged on all critical charts, hence adapted. [F1, F4, step 3.1, construct, algebra]

5.1 Track the attaching circles rather than asserting they stay fixed. The one-sided collar diffeomorphisms of step3.1 fix $\Sigma$ pointwise, so their transport preserves the boundary curves of the original compression disks exactly. The positive normalization in step4.1 preserves their trajectories. For the remaining interpolation choose a fixed inner collar level outside its support and let $Z_s$, $0\le s\le1$, be the convex interpolation of the normalized field with $-\partial_t$, using the same spatial cutoff as in step4.1. Throughout that collar $dt(Z_s)=-1$. The level-to-boundary hitting time is therefore a fixed finite height difference, independent of initial point and $s$. By [F3] transport from the inner level to $\Sigma$ in the appropriate forward or backward direction gives a smooth family of diffeomorphisms $H_s$. On marked fibers the tangential component is zero, so the transported marked points are independent of $s$. Consequently $H_sH_0^{-1}$ is an isotopy of $\Sigma$ fixing $P$. It carries each original boundary-circle system to the corresponding new one. These circles avoid $P$, since their unchanged inner disks are disjoint from $K$ and the flow preserves the marked fibers. The stable or unstable disks extend by precisely these finite collar annuli; uniqueness of the flow gives no extra branches. This proves the stated simultaneous curve isotopies, separately on each side, and completes the gluing assertions. [F3, step 3.1, step 4.1, construct] ∎
