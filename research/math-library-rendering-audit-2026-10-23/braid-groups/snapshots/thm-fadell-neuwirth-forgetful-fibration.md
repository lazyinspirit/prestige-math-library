---
id: thm-fadell-neuwirth-forgetful-fibration
kind: theorem
title: 'The Fadell-Neuwirth forgetful map: local triviality, constant fibre, and numerability for configurations in the disk'
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-forgetting-configuration-points-is-locally-trivial,
       def-ordered-configuration-space, def-topological-manifold-without-boundary,
       def-locally-trivial-fiber-bundle, def-partition-of-unity-subordinate-to-a-cover,
       def-hurewicz-and-serre-fibrations,
       thm-ordered-configurations-cover-unordered-configurations-regularly,
       thm-path-connected-implies-connected, def-connected-space,
       def-subspace-topology-top, def-product-topology, def-continuous-map-top,
       def-homeomorphism-and-open-maps, def-topological-space,
       def-metric-space, def-metric-topology, def-metric-ball,
       def-complex-metric-convergence-and-continuity,
       cor-metric-spaces-admit-subordinate-partitions-of-unity,
       thm-numerable-fiber-bundles-are-hurewicz-fibrations,
       def-axiom-of-choice, def-dependent-choice,
       lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Edward Fadell and Lee Neuwirth, Configuration Spaces, section II Theorem 3, printed p. 113"
      url: "https://tidsskrift.dk/math/article/download/10517/8538"
    - title: "Allen Hatcher, Algebraic Topology, section 4.2, the Huebsch-Hurewicz paracompact-base strengthening, printed pp. 379-380"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Let $M$ be a nonempty connected Hausdorff topological $d$-manifold without
boundary ([[def-topological-manifold-without-boundary]]) with $d\ge2$, let
$m,n\ge1$, and let
$$\pi:F_{m+n}(M)\longrightarrow F_m(M),\qquad \pi(x_1,\dots,x_{m+n}):=(x_1,\dots,x_m)$$
forget the last $n$ points ([[def-ordered-configuration-space]]). Write
$Q_{q'}:=\{q'_1,\dots,q'_m\}$ for the underlying set of a configuration
$q'\in F_m(M)$. Then:

1. **Local triviality, with the fibre of the configuration.** For every base
   configuration $q'$ there are an open neighbourhood $U\subseteq F_m(M)$ of
   $q'$ and a homeomorphism $U\times F_n(M\setminus Q_{q'})\to\pi^{-1}(U)$ over
   $U$, and the fibre $\pi^{-1}(q')$ is homeomorphic to
   $F_n(M\setminus Q_{q'})$
   ([[lem-forgetting-configuration-points-is-locally-trivial]]).
2. **The fibre type is constant.** For all $q',q''\in F_m(M)$ the spaces
   $F_n(M\setminus Q_{q'})$ and $F_n(M\setminus Q_{q''})$ are homeomorphic; this
   uses the connectedness of $F_m(M)$ and no choice principle.
3. **Fixed fibre and numerability for configurations in the disk.** Fix $q\in F_m(M)$ and
   $F:=F_n(M\setminus Q_q)$. Assume the Axiom of Choice. Then there are an open
   cover of $F_m(M)$ and trivializations of $\pi$ over its members with the
   single fibre $F$, so that $\pi$ is a locally trivial fibre bundle with fibre
   $F$ in the sense of [[def-locally-trivial-fiber-bundle]]; the Axiom of Choice
   is used here to select, for each base point, a trivialization carrying the
   fibre $F_n(M\setminus Q_{q'})$ of part 1 onto the fixed $F$. If moreover
   $M=\operatorname{int}D^2$, so that the base is a metric space, then under AC
   and the Axiom of Dependent Choice the displayed locally trivial bundle is
   **numerable** and, by the published numerable-bundle theorem, is a
   **Hurewicz fibration** ([[def-hurewicz-and-serre-fibrations]]).

No global metric, paracompactness, or second countability of $M$ beyond its
manifold structure is used in parts 1 and 2, and the only choice principles used
anywhere are the ones declared in part 3.

## Facts & Assumptions

**Given:** A nonempty connected Hausdorff topological $d$-manifold $M$ without boundary with $d\ge2$, integers $m,n\ge1$, the forgetful map $\pi:F_{m+n}(M)\to F_m(M)$, and configurations $q,q',q''\in F_m(M)$.

[F1] For a topological space $X$, $F_k(X)$ is the space of $k$-tuples of pairwise distinct points of $X$ with the subspace topology of $X^k$, so that $F_m(M)\subseteq M^m$ carries the subspace topology ([[def-ordered-configuration-space]], [[def-subspace-topology-top]]); the projection $\pi$ drops the last $n$ coordinates. It is well defined on $F_{m+n}(M)$, and for $x\in F_m(M)$ its fibre is $\pi^{-1}(x)=\{x\}\times F_n(M\setminus\{x_1,\dots,x_m\})$, since the last $n$ coordinates of a point of $F_{m+n}(M)$ must be distinct from each other and from $x_1,\dots,x_m$.

[L2] **Local triviality.** For every base configuration $q'\in F_m(M)$ there are an open neighbourhood $U\subseteq F_m(M)$ of $q'$ and a homeomorphism $\Phi:U\times F_n(M\setminus Q_{q'})\to\pi^{-1}(U)$ with $\pi\circ\Phi=\operatorname{pr}_1$; the restriction of $\Phi$ to $\{x\}\times F_n(M\setminus Q_{q'})$ is a homeomorphism onto $\pi^{-1}(x)$ for each $x\in U$, and no choice principle is used ([[lem-forgetting-configuration-points-is-locally-trivial]], [[def-homeomorphism-and-open-maps]], [[def-product-topology]]).

[L3] $M$ connected, nonempty, of dimension $d\ge2$, implies $F_m(M)$ path-connected, hence connected ([[thm-ordered-configurations-cover-unordered-configurations-regularly]], [[thm-path-connected-implies-connected]], [[def-connected-space]]). A subset of a connected space that is nonempty, open and closed is the whole space, since otherwise it and its complement would be a separation; and the complement of a closed set is open ([[def-topological-space]]).

[L4] A locally trivial fibre bundle with fibre $F$ is a continuous map $p:E\to B$ together with an open cover $(U_i)$ of $B$ and homeomorphisms $p^{-1}(U_i)\to U_i\times F$ over $U_i$; it is numerable when there is additionally a locally finite partition of unity $(\rho_i)$ with closed support contained in $U_i$ ([[def-locally-trivial-fiber-bundle]], [[def-partition-of-unity-subordinate-to-a-cover]]). A Hurewicz fibration has the homotopy lifting property for all spaces ([[def-hurewicz-and-serre-fibrations]]).

[L5] $\mathbb C$ with $d_{\mathbb C}(z,w)=|z-w|$ is a metric space and $\mathbb C=\mathbb R^2$ as before; the formula $d(z,w):=\max_{1\le k\le m}|z_k-w_k|$ makes $\mathbb C^m$ a metric space whose metric topology is the product topology, because a ball of radius $r$ is the product of the balls of radius $r$, and the restriction of a metric to a subset is a metric inducing the subspace topology, since balls in the subspace are traces of balls of the ambient space ([[def-complex-metric-convergence-and-continuity]], [[def-metric-space]], [[def-metric-topology]], [[def-metric-ball]], [[def-product-topology]], [[def-subspace-topology-top]]).

[L6] Under AC and DC, every open cover of a metric space admits a locally finite partition of unity subordinate to it ([[cor-metric-spaces-admit-subordinate-partitions-of-unity]]); and under AC every numerable fibre bundle with its charts and support-subordinate partition is a Hurewicz fibration ([[thm-numerable-fiber-bundles-are-hurewicz-fibrations]]). AC is the statement that every family of nonempty sets has a choice function, and DC is the dependent choice principle ([[def-axiom-of-choice]], [[def-dependent-choice]]).

[L7] The closed and open unit discs are related by an explicit radial homotopy equivalence, and $\operatorname{int}D^2=\{z\in\mathbb C:|z|<1\}$, so the interior disc is a boundaryless surface ([[lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent]], [[def-topological-manifold-without-boundary]]).



## Proof

**Proof technique:** direct.

1.1 *Part 1 is the local-triviality lemma.* Fix a base configuration $q'$. By [L2] there are an open neighbourhood $U$ of $q'$ and a homeomorphism $\Phi:U\times F_n(M\setminus Q_{q'})\to\pi^{-1}(U)$ over $U$; for $x\in U$ the restriction of $\Phi$ maps $\{x\}\times F_n(M\setminus Q_{q'})$ homeomorphically onto $\pi^{-1}(x)$. Hence $\pi$ is locally trivial at $q'$ with that fibre, which is claim 1 of the statement for this $q'$; as $q'$ was arbitrary, claim 1 holds. [F1, L2]

1.2 *The set of configurations with fibre homeomorphic to a fixed one is open and closed.* Fix $q\in F_m(M)$, put $F:=F_n(M\setminus Q_q)$ and $S:=\{q'\in F_m(M):F_n(M\setminus Q_{q'})\text{ is homeomorphic to }F\}$. Let $q'\in F_m(M)$ and let $U$ be a neighbourhood of $q'$ as in [L2]; for every $x\in U$ the fibre $\pi^{-1}(x)$ is homeomorphic to $F_n(M\setminus Q_{q'})$ by [L2] and also, by applying [L2] at the configuration $x$, homeomorphic to $F_n(M\setminus Q_x)$; so $F_n(M\setminus Q_x)$ is homeomorphic to $F_n(M\setminus Q_{q'})$ for every $x\in U$. Consequently $q'\in S$ implies $U\subseteq S$, and $q'\notin S$ implies $U\cap S=\varnothing$; that is, $S$ and its complement are open in $F_m(M)$. [F1, L2]

1.3 *The disk base is a metric space.* Suppose $M=\operatorname{int}D^2$. By [L7] this is a boundaryless surface, and $F_m(\operatorname{int}D^2)$ is a subspace of $(\operatorname{int}D^2)^m$, hence of $\mathbb C^m$ with the product topology; by [L5] the max-metric on $\mathbb C^m$ induces that product topology and its restriction to the subspace $F_m(\operatorname{int}D^2)$ is a metric inducing the subspace topology. So in the disk case the base of $\pi$ is a metric space. [F1, L5, L7]

2.1 *Claim 2.* The configuration $q$ lies in $S$, so $S\neq\varnothing$. By step 1.2 the set $S\subseteq F_m(M)$ is open and closed, and by [L3] the space $F_m(M)$ is connected; a nonempty open and closed subset of a connected space is the whole space by [L3], so $S=F_m(M)$. Hence $F_n(M\setminus Q_{q'})\cong F_n(M\setminus Q_{q''})$ for all $q',q''$, which is claim 2; no choice was used, since the argument only used the local trivializing neighbourhoods and connectedness. [step 1.2, L3]

3.1 *Fixed fibre and the numerable data, under AC.* Assume AC, fix $q\in F_m(M)$ and put $F:=F_n(M\setminus Q_q)$. For every base point $q'$, step 2.1 provides a homeomorphism $\alpha_{q'}:F\to F_n(M\setminus Q_{q'})$, and [L2] provides a trivialization $\Phi_{q'}:U_{q'}\times F_n(M\setminus Q_{q'})\to\pi^{-1}(U_{q'})$ over an open neighbourhood $U_{q'}$ of $q'$; composing with $\operatorname{id}_{U_{q'}}\times\alpha_{q'}$ gives trivializations of $\pi$ over the open cover $\{U_{q'}\}_{q'\in F_m(M)}$, all with the single fibre $F$. The family of these trivializations has nonempty value set at each index $q'$, so AC supplies a choice of one for every $q'$; with that choice and the open cover $\{U_{q'}\}$, the map $\pi$ is a locally trivial fibre bundle with fibre $F$ in the sense of [L4]. This is the only use of AC in the general case. [step 2.1, L2, L4, L6]

4.1 *The configuration bundle in the disk is numerable, hence a Hurewicz fibration.* Assume AC and DC and $M=\operatorname{int}D^2$. By step 1.3 the base is a metric space, so by [L6] the open cover of step 3.1 admits a locally finite partition of unity $(\rho_{q'})$ with closed support contained in $U_{q'}$. Together with the trivializations of step 3.1 this is numerating data for $\pi$ in the sense of [L4], so the bundle is numerable; by the numerable-bundle theorem of [L6], which assumes AC, it is a Hurewicz fibration. DC was used only through the partition-of-unity corollary. [step 1.3, step 3.1, L4, L6]

5.1 *Conclusion.* Step 1.1 proves claim 1, step 2.1 proves claim 2, and steps 3.1 and 4.1 prove claim 3, including the numerable and Hurewicz conclusions for $M=\operatorname{int}D^2$ under AC and DC. No structure on $M$ beyond the boundaryless manifold structure and no choice principle beyond those declared was used. [step 1.1, step 2.1, step 3.1, step 4.1] ∎
