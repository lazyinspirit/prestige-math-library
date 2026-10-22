---
id: lem-a-simple-fold-block-rearranges-relative-an-inverted-ordinary-cluster
kind: lemma
title: "A simple fold block rearranges relative to an inverted ordinary cluster"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - lem-cc-relative-descending-paths-have-finite-same-index-events
  - lem-two-regular-critical-clusters-rearrange-parametrically-relative-a-knot
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
---

## Statement

Assume Countable Choice. Supply a compact closed-manifold function/weak-field family with the local models, no index-increasing trajectories, no same-index trajectories in a whole fold neighborhood, uniform broken-trajectory compactness and weak fold incidence exclusions of the finite weak-field construction. Let $t_0$ be a simple fold of indices $\lambda,\lambda+1$, written in its product chart as $f_t=g(u,t)-|z_-|^2+|z_+|^2$, with scalar inflection coordinate $u=0$ and $b(t)=g(0,t)$. Fix regular band ends $a<c$ containing, for all nearby parameters, only this fold cluster and one finite ordinary Morse cluster $P_t$ of common index $i$ and value $v(t)$. Suppose either $i\le\lambda$ and $v(t_0)>b(t_0)$, or $i\ge\lambda+1$ and $v(t_0)<b(t_0)$. Supply a compact invariant knot $K$ noncritical in the band, with the family fixed near it, and with the critical models outside that neighborhood.

For any smooth interior target functions $A(t),V(t)\in(a,c)$, on a smaller parameter neighborhood there is a smooth rearranged function family with the SAME descending fields, unchanged outside the open band, near its ends, and on one common smaller neighborhood of $K$. Near the whole smaller fold block it equals $f_t+A(t)-b(t)$; near $P_t$ it equals $f_t+V(t)-v(t)$. Thus it preserves the fold, its spatial derivatives and its product field, while assigning the ordinary cluster value $V$ and the fold inflection value $A$. The target values may reverse order or coincide. This is a local fold/ordinary inversion module, not a global index-grouping theorem.

## Statement references

[[lem-cc-relative-descending-paths-have-finite-same-index-events|The actual finite weak-field construction and its fold section exclusions.]]

## Facts & Assumptions

**Given:** The supplied finite weak-field family, single-fold band, ordinary cluster, invariant knot and target values.

[F1] The weak-field construction has product split folds, no index-increasing regular connections and no same-index connection on a whole fold neighborhood. Its full proof supplies uniform broken-trajectory compactness and the following fixed-fold bounds: entry from an ordinary index-$i$ point into the weak fold requires $i\ge\lambda+1$, and exit from the weak fold to an ordinary index-$i$ point requires $i\le\lambda$. Strong sections impose stricter bounds. ([[lem-cc-relative-descending-paths-have-finite-same-index-events]], Proof4.1–6.1)

[F2] Parametric lower-level identifications, smooth orbit extension of constant lower-exit cutoffs, a separate orbit cutoff vanishing near the invariant knot, and increasing interval maps equal to prescribed translations are constructed explicitly in the ordinary two-cluster rearrangement. ([[lem-two-regular-critical-clusters-rearrange-parametrically-relative-a-knot]])

[F3] Smooth supported cutoffs exist. ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]])

[A1] Countable Choice is inherited from these suppliers; all additional blocks, supports and parameter shrinkings are finite. ([[def-countable-choice]])

## Proof

**Given:** The data in the Statement.

1.1 Shrink the parameter interval so the ordinary cluster stays strictly above BOTH fold critical values in the first case, or below both in the second. Its value gap from the fold inflection at $t_0$ is positive. There is no ordinary/fold connecting trajectory at occupied ordinary parameters. In the first case a trajectory from the ordinary index $i\le\lambda$ into a newborn point either increases index or, for the lower point with $i=\lambda$, has equal index; both are excluded by [F1]. A trajectory in the other direction would increase the function value. In the second case a trajectory from a newborn point to index $i\ge\lambda+1$ either increases index or has equal index; the reverse direction increases function value. At the fold parameter the missing direction in the first case is excluded by the weak-entry inequality $i\ge\lambda+1$, and in the second by the weak-exit inequality $i\le\lambda$. The remaining direction again increases height. Strong-section bounds do not introduce an exception. Thus no ordinary/fold connection, including a weak or strong limiting connection at the fold, is possible. [F1, given, choose, algebra]

2.1 Let $T_P$ be the joint truncated stable/unstable trajectory set of the ordinary cluster on a small closed parameter interval. It is compact. Indeed [F1]'s broken-trajectory compactness gives a limit for every convergent sequence of its points; a break at the fold would be one of the excluded connections of step1.1, and an internal nonconstant break at another point of the same ordinary cluster is impossible because those values agree. No other critical point is in the band. The limit therefore remains on an ordinary cluster trajectory. In particular $T_P$ misses the fold point at $t_0$ and misses the knot, by invariance and uniqueness of trajectories. Choose a small closed product fold block $D$ about that point, disjoint from this compact joint set and from $K$, and then shorten the parameter interval so both newborn points lie in its interior whenever they exist. Let $S_D$ be the closure of all joint band trajectory portions meeting $D$, also including limiting trajectories with an end at its fold point. It is compact in the compact parameter-band carrier. It is disjoint from $T_P$: otherwise a broken limit from $D$ to that cluster would either give an ordinary cluster trajectory meeting $D$, contrary to its choice, or break at the fold, giving a forbidden weak connection of step1.1. A same-cluster break can be removed, and there are no other critical points. It is also disjoint from $K$: a regular limit through $K$ stays in $K$ and cannot meet $D$, while a fold-ended limit on $K$ is impossible because the knot is noncritical throughout the band. These arguments also apply at its regular end levels. [F1, step 1.1, construct]

3.1 Identify the lower regular levels by [F2]'s parameter-dependent level flow. On the central lower level choose a cutoff zero near the exits of $S_D$ and one near those of $T_P$, and another cutoff one near BOTH exit sets and zero near the knot intersections. Their disjoint compact exit sets have disjoint neighborhoods. Joint compactness and a parameter shrinking ensure those same constant regions contain all nearby exit sets under the level identification. Transport the cutoffs along lower exits and set their values on the ordinary critical trajectories to one; set the first cutoff to zero and the second to one on the fold block and its critical-ended trajectories. Denote the resulting functions by $\beta_t,\alpha_t$. They are smooth and orbit-constant. Away from critical-ended trajectories this is ordinary finite-time hitting-map smoothness. Near the ordinary critical set the cutoffs are already constant, by the Morse exit argument of [F2]. On a neighborhood of the whole smaller fold block they are EXACTLY zero and one: every point there has its orbit meeting $D$, so its lower exit lies in the chosen constant region, or its trajectory ends at the fold and has that same assigned value. Thus no differentiability of a singular fold hitting time is being asserted. Compactness and the regular knot transit also give $\alpha_t=0$ on a common smaller knot neighborhood, just as in [F2]. [F2, F3, step 2.1, construct]

3.2 Shrink the spatial fold block and parameter interval further so its entire height interval $I_t=f_t(D)$ is small about $b(t)$ and both $I_t$ and $I_t+A(t)-b(t)$ stay uniformly in $(a,c)$. Construct an increasing interval diffeomorphism $\phi_{D,t}$, fixed near $a,c$, equal to translation by $A-b$ on a neighborhood of $I_t$. The explicit interval-node flow in [F2] works for this whole interval: use a scalar velocity $(A-b)\zeta(z-s(A-b))$ with a bump equal to one on a fixed compact interval containing all $I_t$, and supported so the translated intervals stay away from the ends. Equivalently center that bump on $b(t)+s(A-b)$ and choose it one on a uniform width containing $I_t-b(t)$. Every point of $I_t$ then follows that exact translation for all $s$. Use the same construction for $\phi_{P,t}$, translating near $v(t)$ by $V-v$. These maps depend smoothly on $t$ and require no ordering between $A$ and $V$. [F2, step 2.1, construct]

4.1 Put $$h_t=(1-\alpha_t)f_t+\alpha_t\bigl((1-\beta_t)\phi_{D,t}(f_t)+\beta_t\phi_{P,t}(f_t)\bigr)$$ on the band and $h_t=f_t$ outside. The interval maps are identity near the ends, so this glues smoothly. Orbit constancy gives $dh_t(X_t)$ equal to $df_t(X_t)$ times the positive convex combination of their derivatives, exactly as in [F2]. Hence the SAME fields descend off all critical points. On the fold block $\alpha=1,\beta=0$, so the function is the common translation $f_t+A-b$ there, including at the birth parameter and on its unoccupied side. Its spatial fold derivatives, critical locus and product field are unchanged. Near the ordinary cluster $\alpha=\beta=1$, giving $f_t+V-v$ and the same Morse models. Near the knot $\alpha=0$, giving the original family on the common smaller neighborhood. No new critical point can occur because of strict descent elsewhere. All support and target clauses follow. This proves the stated local inversion module without inferring a global index ordering or a disk movie. [F2, step 3.1, step 3.2, construct, algebra] ∎
