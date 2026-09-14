---
id: cex-vector-bundle-classification-without-numerability-can-fail
kind: counterexample
title: Vector-bundle classification can fail without numerability
status: published
origin: pipeline
deps: [thm-numerable-vector-bundles-admit-bundle-metrics, thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Peter J. Nyikos, The Topological Structure of the Tangent and Cotangent Bundles on the Long Line"
      url: https://web.archive.org/web/20240207153423if_/http://topology.nipissingu.ca/tp/reprints/v04/tp04126s.pdf
      locator: "Differentiable nonmetrizable long line and its tangent bundle, printed pp.271–275"
    - title: "MIT 18.906 notes, Lectures 16 and 19"
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Numerable bundles and universal vector bundles, printed pp.53–54 and 62–65"
---

## Statement refuted

**False claim:** every locally trivial rank-one real vector bundle over a CGWH
base is pulled back from the tautological line over
$\operatorname{Gr}_1(\mathbb R^\infty)$.

Assume AC. The tangent line bundle of the smooth long line is a counterexample.

## Facts & Assumptions

**Given:** AC, the smooth long line $L$, and its tangent line bundle $TL$.

[F1] Nyikos, *Topology Proceedings* 4 (1979), printed pp.271–272, states that
the long line $L$ is a connected Hausdorff differentiable one-manifold and is
nonmetrizable. Being a Hausdorff one-manifold, it is locally compact and hence
CGWH; it is outside the library's second-countable manifold convention.

[F2] Under AC, every numerable real vector bundle admits a continuous
positive-definite fiber inner product; with a supplied numeration the displayed
weighted metric construction is choice-free
([[thm-numerable-vector-bundles-admit-bundle-metrics]]).

[F3] Under AC, the tautological bundle over the stable Grassmannian is
numerable, and every pullback of its numeration is numerable
([[thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians]]).

[A1] AC means that every family of nonempty sets has a choice function
([[def-axiom-of-choice]]).

## Counterexample

**Proof technique:** direct.

1.1 The tangent projection $TL\to L$ is a locally trivial rank-one real vector bundle: its linear charts are the derivatives of the smooth coordinate charts on the one-manifold $L$. The base is CGWH and fails only the library's separate second-countability convention, by [F1]. Thus $TL$ satisfies exactly the topological hypotheses in the false claim. [F1, construct]

1.2 Suppose $TL$ were numerable. By [F2] it would have a continuous positive-definite fiber inner product $g$. We show directly that such a $g$ metrizes $L$. Any two points of the connected one-manifold $L$ can be joined by a piecewise smooth path: the points reachable from a fixed point by finite chains of coordinate intervals form a nonempty open-and-closed set. Define $d_g(p,q)$ as the infimum of the $g$-lengths of these paths. It is finite, symmetric, and satisfies the triangle inequality. [F1, F2]

2.1 To prove positivity and identify the topology, fix $p\ne q$ and choose a coordinate interval $U$ about $p$, not containing $q$, with a smaller closed coordinate interval $K\subset U$ whose interior contains $p$. In the coordinate $t$, write $g=a(t)\,dt^2$. On compact $K$, continuity and positivity give $0<m\leq a\leq M$. Every path from $p$ to $q$ must first leave $K$, so its coordinate variation before leaving is at least the positive coordinate distance from $p$ to $\partial K$; its length is therefore bounded below by that distance times $\sqrt m$. Thus $d_g(p,q)>0$. Conversely, within a still smaller coordinate interval, straight coordinate segments have length at most $\sqrt M$ times their coordinate displacement, while the preceding lower bound forces sufficiently small $d_g$-balls to stay in any prescribed coordinate neighborhood. Hence $d_g$ induces exactly the topology of $L$, contradicting the nonmetrizability in [F1]. Therefore $TL$ is not numerable. The implication from a supplied numeration to $g$, and this metric-topology argument, make no choices beyond the supplied data. [F1, F2, step 1.2, algebra, contradiction]

3.1 By [F3], AC supplies a numeration of the tautological line $\gamma_1\to\operatorname{Gr}_1(\mathbb R^\infty)$, and pulling this fixed numeration back along any map $f:L\to\operatorname{Gr}_1(\mathbb R^\infty)$ gives a numeration of $f^*\gamma_1$. Therefore $TL\cong f^*\gamma_1$ would contradict step 2.1. No such classifying map exists. This is the sole nonlocal use of AC, recorded by [A1]; the contradiction after a hypothetical numeration is choice-free. [F3, A1, step 2.1]

4.1 Consequently the locally trivial rank-one bundle $TL$ over the CGWH space $L$ is the required witness, and the false claim fails precisely because it omitted numerability. [step 1.1, step 2.1, step 3.1, discharge-construct] ∎
