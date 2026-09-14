---
id: def-oriented-real-vector-bundle-and-oriented-frame-bundle
kind: definition
title: Oriented real bundles and oriented frame bundles
status: draft
origin: pipeline
deps: [def-real-and-complex-topological-vector-bundle, def-frame-bundle-and-associated-vector-bundle, def-principal-g-bundle-and-associated-fiber-bundle]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, §§1.1–1.2"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Orientations, positive frames, and GL_n^+, printed pp.25–27"
---

## Definition

For a rank-$n$ real vector bundle $\xi\to X$, form the **orientation cover**
$\operatorname{Or}(\xi)\to X$ whose fiber is the set of orientations of
$\xi_x$. In a linear chart, an orientation is the standard orientation or its
negative, and a transition matrix acts by the sign of its determinant. These
charts give a two-sheeted cover when $n\geq1$.

An **orientation** of $\xi$ is a section of this cover, equivalently a
continuous fiberwise choice of orientation. The zero vector space has its
canonical orientation, so a rank-zero bundle has one orientation rather than
two. A fiberwise invertible bundle map between oriented bundles is
**orientation-preserving** when it carries the selected orientation to the
selected orientation; in oriented local frames its matrices have positive
determinant.

The **oriented frame bundle**
$\operatorname{Fr}^+(\xi)\subseteq\operatorname{Fr}(\xi)$ consists of frames
that transport the standard orientation of $\mathbb R^n$ to the selected
orientation of $\xi_x$. Oriented linear charts identify it with
$U\times\operatorname{GL}_n^+(\mathbb R)$, and precomposition makes it a
principal $\operatorname{GL}_n^+(\mathbb R)$-bundle. This construction uses
neither a metric nor a choice principle; a metric-dependent
$\operatorname{SO}(n)$ reduction is treated separately.

For a subgroup $H\subseteq G$, an **$H$-reduction** of a principal
$G$-bundle $P$ is a principal $H$-subbundle $Q\subseteq P$ for which
$Q\times_HG\to P$, $[q,g]\mapsto qg$, is an isomorphism of the principal
bundles defined in [[def-principal-g-bundle-and-associated-fiber-bundle]].
