---
id: lem-joint-jet-continuity-and-the-weak-smooth-topology
kind: lemma
title: "Joint jet continuity characterises the weak smooth topology"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-weak-compact-open-smooth-topology-on-mapping-spaces, def-smooth-family-of-maps-and-evaluation-map, thm-the-exponential-law, def-compact-open-topology, def-smooth-manifold, def-compact-space, thm-compactness-agrees-with-metric-compactness, lem-continuity-is-local-and-pastes, lem-compactness-of-a-subspace-is-ambient, lem-coordinate-balls-form-a-basis-of-a-topological-manifold]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John Francis, The h-Principle, Lecture 3: Immersion theory (notes by O. Gwilliam), PDF pp. 1–4: the flexible-sheaf discussion and the compact-open C^infinity topology"
      url: https://sites.math.northwestern.edu/jnf960/classes/hprin/3immersions.pdf
    - title: "Morris W. Hirsch, Differential Topology, Ch. 2 §1, pp. 34–36 (the weak and strong C^r topologies and their chartwise description)"
      url: https://people.dm.unipi.it/benedett/HIRSCH.pdf
dependency_level: 1
---

## Statement

Let $P$ be a topological space, let $M,Q$ be smooth manifolds, and let $\Phi:P\to C^\infty(M,Q)$ be a map with adjoint $\varphi:P\times M\to Q$, $\varphi(p,x):=\Phi(p)(x)$ ([[thm-the-exponential-law]], [[def-compact-open-topology]]). Then:

(i) if $\Phi$ is continuous for the weak compact-open $C^\infty$ topology, then for every chart $(U,\alpha)$ of $M$, every compact $K\subseteq U$, every chart $(V,\beta)$ of $Q$ and every $p_0\in P$ with $\Phi(p_0)(K)\subseteq V$ there are a neighbourhood $W$ of $p_0$ with $\Phi(W)(K)\subseteq V$ and, for every multi-index $\gamma$, a continuous function $(p,x)\mapsto D^\gamma(\beta\circ\Phi(p)\circ\alpha^{-1})(\alpha(x))$ on $W\times K$;

(ii) conversely, if $P$ is a smooth manifold and the adjoint $\varphi$ is smooth, then $\Phi$ is continuous for the weak $C^\infty$ topology; more generally, if the adjoint $\varphi$ is continuous and the local jet functions of (i) are jointly continuous near every point at which they are defined, then $\Phi$ is continuous.

## Facts & Assumptions

**Given:** A map $\Phi:P\to C^\infty(M,Q)$ with adjoint $\varphi$, a chart $(U,\alpha)$ of $M$, a compact $K\subseteq U$, a chart $(V,\beta)$ of $Q$, and a point $p_0$ with $\Phi(p_0)(K)\subseteq V$.

[F1] The weak compact-open $C^\infty$ topology on $C^\infty(M,Q)$ has as basic open sets the families determined by finitely many charts, compact pieces $K_i$, integers $r_i$ and tolerances $\varepsilon_i$, constraining the derivatives of order at most $r_i$ of $\beta_i\circ g\circ\alpha_i^{-1}$ on $\alpha_i(K_i)$ to lie within $\varepsilon_i$ of those of a reference map ([[def-weak-compact-open-smooth-topology-on-mapping-spaces]]).

[L1] Compact subsets admit finite ambient open subcovers ([[lem-compactness-of-a-subspace-is-ambient]]), and coordinate balls have compact closures inside prescribed neighbourhoods ([[lem-coordinate-balls-form-a-basis-of-a-topological-manifold]]). Finite intersections of open sets are open, and continuity is local ([[lem-continuity-is-local-and-pastes]]).

[L2] If $P$ is a smooth manifold and $\varphi:P\times M\to Q$ is smooth, then all derivatives $D^\gamma(\beta\circ\varphi\circ(\mathrm{id}_P\times\alpha)^{-1})$ exist and are continuous on their domains ([[def-smooth-manifold]], [[def-smooth-family-of-maps-and-evaluation-map]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $\Phi$ is continuous. Choose a compact neighbourhood $K'$ of $K$ inside $U\cap\Phi(p_0)^{-1}(V)$, using finitely many small closed coordinate balls from [L1]. The zeroth-order weak neighbourhood requiring the image of $K'$ to remain in $V$ pulls back to a neighbourhood $W$ of $p_0$. This single $W$ works for every derivative order. [F1, L1, given, construct]

1.2 Conversely assume the adjoint and its local jet functions are jointly continuous. Fix $p_0$ and finite weak-neighbourhood data. Joint continuity of the adjoint and compactness of each $K_i$ first give a parameter neighbourhood on which its image stays in the target chart: take finitely many product neighbourhoods covering $\{p_0\}\times K_i$ and intersect their parameter factors. On that neighbourhood the maximum $G_i(p,x)$ of the finitely many derivative errors through order $r_i$ is continuous and vanishes when $p=p_0$. For each $x\in K_i$, choose a product neighbourhood on which $G_i<\varepsilon_i$; finitely many source factors cover $K_i$, and the intersection of their parameter factors makes this inequality hold on all of $K_i$. Intersect also over the finitely many $i$. The resulting neighbourhood maps into the specified weak neighbourhood. This finite-cover argument works for every topological $P$; no first-countability or sequential argument is used. [F1, L1, given]

2.1 Fix any multi-index $\gamma$ and any $(p_1,x_1)\in W\times\alpha(K)$. Continuity of $\Phi$ at $p_1$ supplies, for every $\varepsilon>0$, a parameter neighbourhood on which the $\gamma$-derivative differs uniformly on $\alpha(K')$ from that of $\Phi(p_1)$ by less than $\varepsilon/2$. The latter derivative is continuous in $x$, since $\Phi(p_1)$ is smooth, and differs from its value at $x_1$ by less than $\varepsilon/2$ near $x_1$. The triangle inequality proves joint continuity at $(p_1,x_1)$. Hence (i) holds on $W$, for all orders. [F1, step 1.1, algebra]

3.1 If $P$ is smooth and the adjoint is smooth, then its local $x$-derivatives are jointly continuous by [L2], so step 1.2 applies. Empty compact pieces impose no conditions. This proves (ii) and completes both implications. [L2, step 2.1, step 1.2] ∎
