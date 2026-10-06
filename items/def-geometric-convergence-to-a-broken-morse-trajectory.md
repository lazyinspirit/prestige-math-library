---
id: def-geometric-convergence-to-a-broken-morse-trajectory
kind: definition
title: "Geometric convergence to a broken trajectory"
status: draft
origin: pipeline
deps: [def-broken-morse-trajectory, def-downward-gradient-like-vector-field, def-morse-smale-pair, def-metric-space, thm-topological-manifolds-are-metrizable-and-paracompact, def-compact-open-topology-for-topological-domains, prop-compact-open-is-uniform-on-a-compact-metric-domain, thm-fundamental-theorem-on-flows, cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points, thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point, lem-evaluation-on-a-regular-level-identifies-unparametrized-trajectories, thm-unparametrized-trajectory-space-is-a-smooth-manifold, def-quotient-topology]
justified_by: [thm-morse-trajectory-compactness-up-to-breaking]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology, Part I Ch. 3, complete author PDF"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 3 Sec. 3.2.a, printed pp. 59-61 (topology on the space of broken trajectories)"
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes), Lectures 17-19, complete combined PDF"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 17 Sec. 5.2-5.4 (the $C^\\infty_{loc}$ and $\\rightsquigarrow$ convergence)"
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, Ch. 13 and Appendix A, complete author PDF"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
      locator: "Ch. 13 Sec. 13.4, printed pp. 519-521 (compact-open topology on piecewise flow lines)"
dependency_level: 1
---

## Definition

Let $(f,X)$ be a Morse--Smale pair with $X$ downward gradient-like in the normalized Morse-coordinate sense of [[def-downward-gradient-like-vector-field]], on a closed manifold $M$. Fix a compatible metric $d$ on $M$ ([[def-metric-space]], [[thm-topological-manifolds-are-metrizable-and-paracompact]]). If $f(p)\le f(q)$, the broken-trajectory space is empty and has the empty topology. Otherwise each broken trajectory $v=(v_1,\dots,v_r)$ from $p$ to $q$ has a **height parametrization**
$$h_v:[f(q),f(p)]\longrightarrow M.$$
On the height interval of a component, $h_v(a)$ is its unique point with $f$-value $a$; at an intermediate critical value it is that intermediate critical point, and at the endpoints it is $q$ and $p$. Strict descent, the component endpoint limits and [[def-broken-morse-trajectory]] make this a continuous map. Its noncritical pieces recover the orbit classes, so $v\mapsto h_v$ is injective.

The **geometric-convergence topology** is the topology transported to $\overline{\mathcal M}(p,q)$ from this image in $C^0([f(q),f(p)],M)$ with the topology of uniform convergence. Equivalently, it is induced by
$$d_H(v,w)=\max_{a\in[f(q),f(p)]}d(h_v(a),h_w(a)).$$
The maximum exists because the domain is nonempty and compact. Uniform convergence on this domain is compact-open convergence ([[def-compact-open-topology-for-topological-domains]], [[prop-compact-open-is-uniform-on-a-compact-metric-domain]]). Different compatible metrics on the compact space $M$ give the same topology: the identity between the two compact metric spaces is uniformly continuous, as follows by taking a finite subcover of neighbourhoods on which its oscillation is prescribed.

For ordinary trajectories $v_n=[\gamma_n]$ and a broken trajectory $v=(v_1,\dots,v_r)$, write $v_n\rightsquigarrow v_1\#\cdots\#v_r$ when, for parametrized representatives of the components, there are independent shifts $s_n^i$ such that $\gamma_n(\cdot+s_n^i)\to v_i$ in $C^\infty_{\mathrm{loc}}(\mathbb R,M)$. Replacing representatives only changes the shifts. Smooth dependence for the flow ([[thm-fundamental-theorem-on-flows]]) implies that $C^0$ convergence on compact time intervals forces all higher derivatives. The equivalence of this shift criterion with convergence in $d_H$ is proved in [[thm-morse-trajectory-compactness-up-to-breaking]].

Here is the neighbourhood description used for gluing (Audin–Damian §3.2.a, printed pp. 60–61). Write $p=p_0,\dots,p_r=q$. Choose disjoint sufficiently small Morse neighbourhoods at **all** these critical points, including $p$ and $q$. For each $i=1,\dots,r$, prescribe open level-set neighbourhoods $U^-_{i-1}$ of the exit point of $v_i$ from the chart at $p_{i-1}$ and $U^+_i$ of its entry point into the chart at $p_i$. A string $w$ belongs to $W(v,U^-,U^+)$ if its critical-point string is a subsequence $p_{i_0},\dots,p_{i_k}$ with $0=i_0<\cdots<i_k=r$, and its $j$th component exits and enters each intervening chart through the prescribed neighbourhoods, in order. Thus it has at most $r$ components; for $r=1$ both endpoint transversals are still present.

These sets form a neighbourhood base for the height topology. Shrinking the prescribed transversals controls each compact noncritical segment by smooth finite-time flow dependence; inside a small Morse chart the equations $u(t)=e^{2t}u(0)$, $v(t)=e^{-2t}v(0)$ keep a crossing between its small entry and exit pieces in that chart. This gives uniform height control after subdividing into those finitely many segments and arbitrarily small critical neighbourhoods. Conversely, uniform height closeness forces passage through the prescribed level pieces and permits critical breaks only at points of the limiting string: the critical set is finite and all other critical points are separated from the limiting height graph. The level crossings vary continuously because $df(X)\ne0$ there. This proves the two base containments. On the ordinary stratum the resulting topology is the quotient topology of the parametrized trajectory space, equivalently its regular-level slice topology ([[lem-evaluation-on-a-regular-level-identifies-unparametrized-trajectories]], [[thm-unparametrized-trajectory-space-is-a-smooth-manifold]], [[def-quotient-topology]]); the shift/height equivalence below also verifies this identification.
