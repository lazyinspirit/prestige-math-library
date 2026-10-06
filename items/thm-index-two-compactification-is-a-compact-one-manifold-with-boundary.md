---
id: thm-index-two-compactification-is-a-compact-one-manifold-with-boundary
kind: theorem
title: "The index-two compactification is a compact one-manifold with boundary"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, thm-morse-trajectory-compactness-up-to-breaking, prop-index-two-trajectory-spaces-are-one-dimensional, thm-unparametrized-trajectory-space-is-a-smooth-manifold, lem-breaking-length-is-bounded-by-index-drop, cor-index-one-trajectory-moduli-spaces-are-finite, cor-no-morse-smale-trajectories-for-nonpositive-index-drop, lem-gluing-broken-index-two-trajectories-gives-collar-ends, def-broken-morse-trajectory, def-geometric-convergence-to-a-broken-morse-trajectory, cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points, def-topological-manifold-with-boundary, def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary, def-metric-space, def-morse-smale-pair, def-nondegenerate-critical-point-nullity-index-and-coindex]
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
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology, Part I Ch. 3, complete author PDF"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 3 Theorem 3.2.7, printed p. 64, with Sec. 3.2.c-d, pp. 64-70 (compact 1-manifold with boundary)"
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes), Lectures 17-19, complete combined PDF"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 18 (Corollary after the gluing theorem: $\\overline{M}(p,q)$ is a compact smooth 1-manifold with boundary)"
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, Ch. 13 and Appendix A, complete author PDF"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
      locator: "Appendix A, Proposition A.1, printed pp. 531-532 (compactified moduli space is a manifold with corners; the index-two case is a 1-manifold with boundary)"
dependency_level: 5
---

## Statement

Assume the Axiom of Choice. Let $(f,X)$ be Morse--Smale on a closed manifold $M$ and let $\lambda(p)-\lambda(q)=2$. Then $\overline{\mathcal M}(p,q)$, with the geometric-convergence topology, is a compact metrizable second-countable smooth $1$-manifold with boundary whose interior is $\mathcal M(p,q)$, and
$$\partial\overline{\mathcal M}(p,q)=\bigsqcup_{r:\ \lambda(r)=\lambda(p)-1}\mathcal M(p,r)\times\mathcal M(r,q),$$
a finite disjoint union of finite discrete spaces. Every boundary point has the one-sided collar chart $[0,\delta)$ of [[lem-gluing-broken-index-two-trajectories-gives-collar-ends]], so the compactification is obtained from the one-dimensional smooth manifold $\mathcal M(p,q)$ by adding the once-broken trajectories.

## Facts & Assumptions

**Given:** The Axiom of Choice, a Morse--Smale pair $(f,X)$ on a closed manifold $M$, and critical points $p,q$ with $\lambda(p)-\lambda(q)=2$.

[A1] The Axiom of Choice ([[def-axiom-of-choice]]).

[F1] $\mathcal M(p,q)$ is a smooth manifold of dimension $\lambda(p)-\lambda(q)-1=1$ ([[prop-index-two-trajectory-spaces-are-one-dimensional]], [[thm-unparametrized-trajectory-space-is-a-smooth-manifold]]).

[F2] $\overline{\mathcal M}(p,q)$ is compact, metrizable and second-countable in the geometric-convergence topology, and $\mathcal M(p,q)$ is open and dense in it ([[thm-morse-trajectory-compactness-up-to-breaking]], [[def-geometric-convergence-to-a-broken-morse-trajectory]]).

[F3] In index drop two every broken trajectory of length at least two is once-broken with exactly one intermediate critical point, of index $\lambda(p)-1$; broken trajectories of length one are the elements of $\mathcal M(p,q)$ ([[lem-breaking-length-is-bounded-by-index-drop]], [[def-broken-morse-trajectory]]).

[F4] For index drop one the moduli space is finite, so each factor $\mathcal M(p,r)$ and $\mathcal M(r,q)$ with $\lambda(r)=\lambda(p)-1$ is finite, and only finitely many intermediate critical points $r$ occur ([[cor-index-one-trajectory-moduli-spaces-are-finite]], [[cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points]], [[def-nondegenerate-critical-point-nullity-index-and-coindex]]).

[F5] Each once-broken trajectory with $\lambda(r)=\lambda(p)-1$ has a one-sided collar chart $\psi:[0,\delta)\to\overline{\mathcal M}(p,q)$ with $\psi(0)$ the broken point, $\psi(s)\in\mathcal M(p,q)$ for $s>0$, $\psi$ smooth on $(0,\delta)$ and injective, whose image is a neighbourhood and which captures every geometrically convergent sequence ([[lem-gluing-broken-index-two-trajectories-gives-collar-ends]], [A1]).

[F6] A topological $n$-manifold with boundary is locally modelled on the half-space, and its boundary is the set of points whose charts have last coordinate $0$; a smooth structure with boundary is an atlas of such charts with smooth transitions ([[def-topological-manifold-with-boundary]], [[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] the interior part $\mathcal M(p,q)$ is a smooth $1$-manifold, and by [F2] it is open in $\overline{\mathcal M}(p,q)$. Its points are interior points of the compactification: the charts of the manifold structure of [F1] are charts of $\overline{\mathcal M}(p,q)$ around them. [F1, F2]

2.1 The added points are the broken trajectories of length at least two, and by [F3] each of them is a once-broken trajectory with intermediate point $r$ of index $\lambda(p)-1$. Conversely every once-broken trajectory with such an $r$ is a broken trajectory of length two and is not ordinary, hence an added point. So the boundary set is exactly $\bigsqcup_{\lambda(r)=\lambda(p)-1}\mathcal M(p,r)\times\mathcal M(r,q)$ as a set, and each of its points has a collar chart $[0,\delta)$ by [F5]. There are finitely many added points by [F4], and the metric topology of [F2] allows the collars to be shrunk to pairwise disjoint neighbourhoods. On an overlap with an interior chart, the collar and its inverse are smooth because its interior restriction is a smooth embedding of one-dimensional manifolds. There are no overlaps between different boundary charts after this shrinking. Thus the collars and interior charts give a compatible smooth atlas as required by [F6]; hence $\overline{\mathcal M}(p,q)$ is a smooth $1$-manifold with boundary whose interior is $\mathcal M(p,q)$ and whose boundary is that set. [A1, F3, F5, F6, step 1.1]

3.1 The boundary identification is a homeomorphism onto the disjoint union of the products: the factors are discrete spaces (by the index-one finiteness and discreteness in [F4]), finitely many by [F4], and a sequence of once-broken trajectories with a fixed intermediate point $r$ converges geometrically to $(\gamma_1,\gamma_2)$ exactly when its components converge to $\gamma_1$ and $\gamma_2$ in the geometric topologies, which is the product of the discrete topologies; distinct intermediate points $r$ give disjoint factors because a once-broken trajectory determines its intermediate critical point. Since each factor is a finite discrete space by [F4], the boundary is a finite disjoint union of finite discrete spaces. [F3, F4, step 2.1]

4.1 Compactness, metrizability and second countability are [F2]; the collar charts of [F5] show that the compactification is obtained from $\mathcal M(p,q)$ by adding the once-broken trajectories, completing the proof. [A1, F2, F5, step 2.1, step 3.1] ∎
