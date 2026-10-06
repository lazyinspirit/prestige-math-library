---
id: thm-morse-trajectory-compactness-up-to-breaking
kind: theorem
title: "Compactness up to breaking of Morse trajectory spaces"
status: published
origin: pipeline
deps: [def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice, def-broken-morse-trajectory, lem-breaking-length-is-bounded-by-index-drop, def-geometric-convergence-to-a-broken-morse-trajectory, prop-compact-open-is-uniform-on-a-compact-metric-domain, thm-fundamental-theorem-on-flows, def-downward-gradient-like-vector-field, thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point, cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points, thm-topological-manifolds-are-metrizable-and-paracompact, cor-equicontinuous-families-into-a-compact-metric-target, thm-metric-compactness-equivalences, lem-compact-metric-space-has-a-countable-dense-subset, def-second-countable-space, thm-every-smooth-manifold-admits-a-riemannian-metric, def-riemannian-distance-on-a-connected-manifold, thm-riemannian-distance-is-a-metric, thm-the-riemannian-distance-topology-is-the-manifold-topology, lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric, prop-components-of-a-topological-manifold-are-open-and-at-most-countable, lem-broken-trajectories-are-limits-of-ordinary-trajectories]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes), Lectures 17-19, complete combined PDF"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lectures 17-18 Sec. 5.2-5.4 (compactness, reparametrization trick, convergence to broken flowlines; PDF pp. 76-83)"
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology, Part I Ch. 3, complete author PDF"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 3 Sec. 3.2.b, printed pp. 61-64, and Sec. 3.2.c, pp. 64-69 (Theorem 3.2.2)"
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, Ch. 13 and Appendix A, complete author PDF"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
      locator: "Ch. 13 Sec. 13.4, printed pp. 519-520 (compactified moduli space, compactness and density)"
    - title: "Udhav Fowdar, A Functional Analytic Approach to Morse Homology (UCL 4th-year project, 2016, supervised by C. Wendl), complete PDF"
      url: "https://www.mathematik.hu-berlin.de/~wendl/pub/Fowdar.pdf"
      locator: "Sec. 5, printed pp. 35-44 (compactness up to broken trajectories)"
dependency_level: 3
---

## Statement

Assume the Axiom of Choice. Let $(f,X)$ be Morse--Smale on a closed manifold $M$, with $X$ downward gradient-like in the normalized Morse-coordinate sense, and let $p\ne q$ be critical points. Every sequence in $\mathcal M(p,q)$ has a subsequence converging after independent time shifts in $C^\infty_{\mathrm{loc}}$ to a broken trajectory from $p$ to $q$. The height-map compactification $\overline{\mathcal M}(p,q)$ is compact, metrizable and second countable, with $\mathcal M(p,q)$ open and dense. Its height parametrization identifies it homeomorphically with a compact subset of $C^0([f(q),f(p)],M)$ with the compact-open topology. Every broken limit has at most $\lambda(p)-\lambda(q)$ components. If $f(p)\le f(q)$ both trajectory spaces are empty.

## Facts & Assumptions

**Given:** AC, the stated pair and endpoints.

[A1] AC supplies the metric and the compactness/choice inputs below ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F1] Broken strings have strictly decreasing critical values and indices, and length bounded by the index drop ([[def-broken-morse-trajectory]], [[lem-breaking-length-is-bounded-by-index-drop]]).

[F2] The height topology is the uniform topology on the injective image $v\mapsto h_v$; on a compact metric domain it is compact-open topology ([[def-geometric-convergence-to-a-broken-morse-trajectory]], [[prop-compact-open-is-uniform-on-a-compact-metric-domain]]).

[F3] The flow is smooth and unique, $df(X)<0$ away from critical points, and near a critical point $c$ the local model is $X=(2u,-2z)$, $f=f(c)-|u|^2+|z|^2$ ([[thm-fundamental-theorem-on-flows]], [[def-downward-gradient-like-vector-field]], [[thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point]]).

[F4] The critical set is finite ([[cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points]]).

[F5] Under AC, $M$ has a compatible metric, and equicontinuous families into a compact metric target have compact compact-open closure ([[thm-topological-manifolds-are-metrizable-and-paracompact]], [[cor-equicontinuous-families-into-a-compact-metric-target]]).

[F8] Under AC an auxiliary Riemannian metric exists; its distance on a connected component is a metric inducing the manifold topology and is bounded above by curve lengths, with uniform chart norm comparison on compact chart closures ([[thm-every-smooth-manifold-admits-a-riemannian-metric]], [[def-riemannian-distance-on-a-connected-manifold]], [[thm-riemannian-distance-is-a-metric]], [[thm-the-riemannian-distance-topology-is-the-manifold-topology]], [[lem-local-comparison-of-a-riemannian-metric-with-the-euclidean-metric]]). Components of a manifold are open; being components they are also closed, hence compact here ([[prop-components-of-a-topological-manifold-are-open-and-at-most-countable]]).

[F6] Under AC, compact metric spaces are sequentially compact and have countable dense subsets, whose rational-radius balls give countable bases ([[thm-metric-compactness-equivalences]], [[lem-compact-metric-space-has-a-countable-dense-subset]], [[def-second-countable-space]]).

[F7] Every broken trajectory is a limit of ordinary ones ([[lem-broken-trajectories-are-limits-of-ordinary-trajectories]]).

## Proof

**Proof technique:** direct, by compactness of height parametrizations.

1.1 If $p,q$ lie in different components, both trajectory spaces are empty. Otherwise work on their compact connected component and fix the compatible metric of [F5] and the auxiliary metric of [F8]. Suppose $f(p)>f(q)$. Each height curve $h_v$ is continuous by its component endpoint limits and [F1]. In a Morse chart of value $\alpha=f(c)$ its Euclidean speed at a noncritical height $a$ satisfies
$$\left|\frac{dh_v}{da}\right|=\frac1{2\sqrt{|u|^2+|z|^2}}\le\frac1{2\sqrt{|a-\alpha|}}.$$
Away from finitely many smaller critical charts, $|X|/|df(X)|$ is bounded on a compact set. In the auxiliary Riemannian metric, [F8] bounds chart norm comparisons on compact chart closures. Thus the length over any height interval of length $\delta$ is at most $L\delta+C\sum_{\alpha}\sqrt\delta$, uniformly in $v$: integrate $|a-\alpha|^{-1/2}$, whose integral over such an interval is at most $4\sqrt\delta$, and add the finitely many chart bounds. The estimate also holds across breaks by continuity and addition of lengths. Since Riemannian distance is bounded by these lengths, it proves equicontinuity in that distance; limits at finitely many breaks preserve the distance bound by continuity. Passage to the compatible metric uses uniform continuity on the compact component. [A1, F1, F3, F4, F5, F8, algebra]

2.1 Let $h_{v_n}\to h$ uniformly. Then $h(f(q))=q$, $h(f(p))=p$ and $f(h(a))=a$. The set $Z$ of heights at which $h(a)$ is critical is finite by [F4] and includes both endpoints. On each component $J$ of $[f(q),f(p)]\setminus Z$, a small compact subinterval has image separated from the critical set. For large $n$ the approximating curves have no break there and solve $h_{v_n}'=X(h_{v_n})/df(X)(h_{v_n})$. Passing to the integral equation on this compact subinterval gives the same equation for $h$; uniqueness makes its pieces one orbit on all of $J$. Its endpoints are critical by continuity. Reparametrizing by flow time gives a nonconstant full trajectory between them: a smooth flow cannot reach or leave an equilibrium in finite time, by uniqueness in [F3]. Thus every interval between consecutive heights in $Z$ is a connecting component, including any newly acquired break; $h$ is the height map of a broken trajectory. Its length is bounded by [F1]. This proves that the height image is closed in the uniform metric mapping space. [F1, F3, F4, step 1.1]

2.2 For an ordinary sequence, uniform height convergence to $h_v$ implies shift convergence: select a noncritical height in each component of $v$, translate each trajectory to that crossing, and use smooth flow dependence at the converging initial points in [F3]. Conversely, shift convergence implies pointwise height convergence at every noncritical point of every component, by the unique transverse level crossing. Those heights are dense in the closed height interval. Equicontinuity from step 1.1 and continuity of $h_v$ upgrade convergence on this dense set to uniform convergence: a finite sufficiently fine height mesh controls every value by the triangle inequality. Consequently the two convergence criteria agree. For $r=1$, the same argument identifies the height topology with the compact-open time-translation quotient and its regular-level slice. [F2, F3, F4, step 1.1]

3.1 By step 1.1 and [F5] the closure of the height image is compact; by step 2.1 it is the image itself. The height metric in [F2] therefore makes $\overline{\mathcal M}(p,q)$ compact and metrizable, and [F6] makes it second countable. The image statement is exactly the defining identification in [F2]. If $f(p)\le f(q)$ the spaces are empty by strict descent and the same conclusions hold for the empty image. [A1, F2, F3, F5, F6, step 1.1, step 2.1]

4.1 The ordinary stratum is open. Otherwise a sequence of broken height maps would approach an ordinary height map; by finiteness in [F4], after a subsequence one of their intermediate critical points would be a fixed $c$, forcing $h_v(f(c))=c$. An ordinary connecting orbit has no intermediate critical point by flow uniqueness, a contradiction. Density is [F7]. Sequential compactness from step 3.1 and [F6], together with step 2.2, proves the asserted subsequence convergence, and [F1] bounds its length. [A1, F1, F3, F4, F6, F7, step 3.1, step 2.2] ∎
