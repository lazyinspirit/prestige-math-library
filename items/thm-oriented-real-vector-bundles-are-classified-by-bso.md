---
id: thm-oriented-real-vector-bundles-are-classified-by-bso
kind: theorem
title: Oriented real vector bundles are classified by BSO
status: published
origin: pipeline
deps: [thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians, prop-orientation-is-equivalent-to-an-so-n-reduction, def-oriented-grassmannian-and-tautological-oriented-bundle, def-axiom-of-choice]
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
    - title: "Hatcher, Vector Bundles & K-Theory, §1.2"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Oriented version following Theorem 1.16, printed p.31"
---

## Statement

Assume AC. For a paracompact Hausdorff CGWH base $X$ and $n\geq0$,
pullback of $\gamma_n^+$ gives a natural bijection

$$[X,\operatorname{Gr}_n^+(\mathbb R^\infty)]=[X,B\operatorname{SO}(n)]\cong\operatorname{Vect}^{\mathbb R,+}_n(X),$$

where the right side consists of orientation-preserving isomorphism classes
of numerable oriented rank-$n$ real bundles. For $n=0$ both sets are
singletons.

## Facts & Assumptions

**Given:** AC, a paracompact Hausdorff CGWH space $X$, and $n\geq0$.

[F1] Under AC, numerable real rank-$n$ bundles over $X$ have countable
Grassmannian embeddings and are classified by their stable Gauss maps
([[thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians]]).

[F2] With a metric, an orientation is equivalent to an
$\operatorname{SO}(n)$ reduction
([[prop-orientation-is-equivalent-to-an-so-n-reduction]]).

[F3] The oriented Grassmannian carries the tautological oriented bundle and
is the chosen $B\operatorname{SO}(n)$ model
([[def-oriented-grassmannian-and-tautological-oriented-bundle]]).

[A1] AC has the meaning fixed in [[def-axiom-of-choice]].

## Proof

**Proof technique:** direct.

1.1 Let $(E,o)$ be a numerable oriented bundle. Use [F1] to choose a countable embedding $j:E\to X\times\mathbb R^\infty$. Give the image plane $j(E_x)$ the orientation transported by $j_x$ from $o_x$. In oriented local frames this varies continuously, so it defines $c_j^+:X\to\operatorname{Gr}_n^+(\mathbb R^\infty)$. The tautological pullback map $e\mapsto(p(e),j(e))$ is orientation-preserving by construction. Thus every oriented bundle is in the image. [F1, F3, A1, choose]

2.1 If two maps to the oriented Grassmannian are homotopic, pull back $\gamma_n^+$ over $X\times I$ and repeat the graph-transport proof used in [F1] with oriented charts. Every transition matrix has positive determinant, so the endpoint isomorphism is orientation-preserving. Hence pullback depends only on the homotopy class. [F1, F3, step 1.1]

2.2 Conversely, an orientation-preserving isomorphism between two pullbacks identifies them as one oriented bundle. Move their embeddings to odd and even coordinates and interpolate as in the injectivity proof of [F1], transporting the fixed domain orientation to every intermediate image plane. This is a homotopy through oriented Grassmannian maps, so the pullback assignment is injective. [F1, F3, step 1.1]

3.1 Pullback of the transported image orientation commutes with base change, proving naturality. By [F2], the same classification can be read as classification of the corresponding $\operatorname{SO}(n)$ reductions, which agrees with the notation in [F3]. When $n=0$, the oriented Grassmannian, structure group, and bundle fiber are points, so both sets are singletons. AC is inherited exactly from [F1]'s numeration and countabilization. [F1, F2, F3, A1, step 2.1, step 2.2] ∎
