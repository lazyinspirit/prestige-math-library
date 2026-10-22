---
id: lem-two-regular-critical-clusters-rearrange-parametrically-relative-a-knot
kind: lemma
title: "Two regular critical clusters rearrange parametrically relative to a knot"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - lem-critical-values-of-disjoint-trajectory-closures-can-be-interchanged
  - lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
  - thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
---

## Statement

Assume Countable Choice. Let $f_t$ be a smooth family on a compact closed manifold, with smooth adapted descending fields $X_t$, for parameters near $t_0$. Fix regular levels $u<v$ for the whole family. Suppose the band $f_t^{-1}[u,v]$ has exactly two smooth finite clusters of ordinary Morse critical points $P_t,Q_t$, with common values $c_P(t),c_Q(t)\in(u,v)$ within each cluster, and with smoothly parameterized exact Morse field models. The two cluster values may coincide. Suppose no $X_t$ trajectory connects the two clusters in either direction. Let a compact invariant embedded circle $K$ be noncritical throughout this band, and suppose $f_t,X_t$ are fixed on a neighborhood of $K$ there, with all cluster points outside that neighborhood. Give smooth target values $a_P(t),a_Q(t)\in(u,v)$.

On a smaller parameter neighborhood of $t_0$ there is a smooth family $g_t$ with the same critical points and indices, target values $a_P,a_Q$ on those clusters, and the SAME fields $X_t$ adapted and descending. Near each cluster $g_t-f_t$ is its prescribed constant value shift. The functions are unchanged outside the open band, near its end levels, and on one fixed smaller neighborhood of $K$. Target values may be reversed or equal. This is a local-parameter ordinary-Morse rearrangement; a fold block or a global index-grouped movie is not included in its hypotheses.

## Facts & Assumptions

**Given:** The finite two-cluster family, regular band, invariant knot and smooth target values in the Statement.

[F1] For a two-cluster Morse band without connecting trajectories the full truncated critical-trajectory sets are compact, and a lower-exit cutoff extends smoothly and constantly along orbits across those sets; in a Morse block the flow is $(x,y)\mapsto(e^{2s}x,e^{-2s}y)$. ([[lem-critical-values-of-disjoint-trajectory-closures-can-be-interchanged]], full Proof1.1–3.1)

[F2] Smooth local inverses with parameters exist; finite compact-set bumps exist; compactly supported smooth fields have smooth evolution on compact time intervals. ([[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]], [[lem-manifold-bump-for-a-compact-set-inside-an-open-set]], [[thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval]])

[A1] Countable Choice is inherited at these suppliers. All extra parameter shrinkings, covers and cutoffs are finite. ([[def-countable-choice]])

## Proof

**Given:** The data in the Statement.

1.1 For each cluster let $T_P(t),T_Q(t)$ consist of all its stable and unstable trajectories truncated at the band ends, including the critical points and end-level intersections. The compactness proof in [F1] applies jointly on a small closed parameter interval. To verify its parameter aspect, take disjoint smooth Morse blocks around the finitely many branches. On the compact complement $-df_t(X_t)$ has a uniform positive lower bound, so travel time there is uniformly bounded by the band width divided by that bound. An unbounded time in a block has the explicit exponential form in [F1], and in a limit gives a broken orbit with an end at that block's critical point. A break between clusters would be a prohibited connection; a nonconstant break within a cluster is impossible because its critical values agree and the function strictly decreases. Thus any convergent sequence of points in one truncated trajectory set has its limit in the corresponding set at the limiting parameter. These joint sets are compact and disjoint. They are also disjoint from the knot portion in the band: a trajectory through $K$ stays in $K$ by invariance and cannot have an end at an ordinary cluster point outside it. The same block calculation gives lower-exit continuity towards the cluster's lower-exit set; near a minimum with no unstable exit there is instead an open attracting region. All statements hold uniformly after shrinking the parameter interval. [F1, given, construct, algebra]

1.2 Construct increasing interval maps $\phi_{P,t},\phi_{Q,t}:[u,v]\to[u,v]$, smoothly in $t$, fixed near the endpoints and equal to translations by $a_P-c_P$ or $a_Q-c_Q$ near the respective node. Here is an explicit parameter construction. For one node let $c_s(t)=(1-s)c(t)+sa(t)$, $0\le s\le1$. The compact set of these nodes has positive distance from $u,v$. Choose a bump $\zeta$ equal to one near zero and supported in an interval smaller than that distance, and integrate the scalar field $W_{s,t}(z)=(a(t)-c(t))\zeta(z-c_s(t))$ in the variable $s$. Its trajectory from $c(t)$ is exactly $c_s(t)$; in a uniform neighborhood it is the same translation because the bump remains one. Its flow is an increasing interval diffeomorphism, fixes endpoint neighborhoods, and depends smoothly on $t$ by [F2]. At $s=1$ it gives the required $\phi_t$. This makes no ordering demand between the TWO independently constructed target nodes. [F2, given, construct]

2.1 Identify the lower levels smoothly with the level at $t_0$. Near their union the spatial differential of $f_t$ is nonzero. The parameter field $V_t=-(\partial_tf_t)\operatorname{grad}f_t/|\operatorname{grad}f_t|^2$, cut off inside that regular neighborhood, transports this level because $\partial_tf_t+df_t(V_t)=0$ there. A fixed auxiliary metric may be constructed on the relevant compact neighborhood by finitely many chart metrics and bump weights. [F2] and compactness give a local-parameter level identification $L_t$. It fixes the knot intersections since $\partial_tf_t=0$ near $K$. On the central lower level choose $b$ equal to zero near the $P$ exits and one near the $Q$ exits. Also choose $d$ equal to one near BOTH exit sets and zero near the knot intersections. The three compact sets are disjoint by step1.1; empty exit sets impose no condition. Choose the cutoffs constant on larger neighborhoods before shrinking the parameter interval, so upper semicontinuity from joint compactness in step1.1 puts all nearby exits in those same constant regions after $L_t^{-1}$. Transport $b,d$ by $L_t$. [F2, step 1.1, construct]

3.1 For a trajectory outside the two critical-trajectory sets, let $E_t$ be its lower-level exit; it is smooth jointly in space and parameter by transverse hitting-time inversion [F2]. Put $\beta_t=b_t\circ E_t$ and $\alpha_t=d_t\circ E_t$ there. On the critical-trajectory sets extend $\beta_t$ as zero on $T_P$ and one on $T_Q$, and extend $\alpha_t$ as one on both. These are smooth joint extensions: step1.1's uniform exit continuity puts nearby through-orbit exits in regions where the cutoffs are ALREADY constant, so near every such set the extension is exactly that constant. The no-exit attracting case is constant on its open basin. Both satisfy $d\beta_t(X_t)=d\alpha_t(X_t)=0$. Moreover $\alpha_t=0$ on a fixed smaller neighborhood of the knot within the band. Its lower-exit points lie in the constant-zero neighborhood of the compact knot intersections, and regular flow along the compact knot band has a uniformly finite transit time. Thus this neighborhood is common to all the shrunken parameters. [F1, F2, step 1.1, step 2.1, construct]

4.1 On the band set $$g_t=(1-\alpha_t)f_t+\alpha_t\bigl((1-\beta_t)\phi_{P,t}(f_t)+\beta_t\phi_{Q,t}(f_t)\bigr),$$ and set $g_t=f_t$ elsewhere. The interval maps are identity near both band ends, so the extension is smooth. The orbit-constant identities in step3.1 give $$dg_t(X_t)=\bigl(1-\alpha_t+\alpha_t[(1-\beta_t)\phi'_{P,t}(f_t)+\beta_t\phi'_{Q,t}(f_t)]\bigr)df_t(X_t)<0$$ off the critical points. The coefficient is positive. Near $P$ one has $\alpha=1,\beta=0$ and $\phi_P$ the prescribed translation; near $Q$ the analogous statement holds with $\beta=1$. Hence Hessians, indices and exact field models are unchanged there and no new critical point is possible. Near $K$ one has $\alpha=0$, so $g_t=f_t$ on the fixed smaller neighborhood. The functions keep their band-end values and all outside data. This proves the full stated parametric and knot-relative rearrangement in its ordinary two-cluster scope. [step 3.1, step 1.2, construct, algebra] ∎
