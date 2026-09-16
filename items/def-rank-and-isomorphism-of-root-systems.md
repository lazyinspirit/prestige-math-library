---
id: def-rank-and-isomorphism-of-root-systems
kind: definition
title: Rank and isomorphism of root systems
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-reduced-crystallographic-euclidean-root-system]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §5, isomorphism of abstract root systems, printed p. 150; §23 of the classical development"
landmark: false
---

## Definition

Let $\Phi\subseteq E$ be a reduced crystallographic root system
([[def-reduced-crystallographic-euclidean-root-system]]).

Its **rank** is $\operatorname{rank}\Phi=\dim_{\mathbb R}E$. Since $\Phi$
spans $E$, the rank is determined by $\Phi$; it is the number of simple roots
of any base of $\Phi$.

Let $\Phi'\subseteq E'$ be a second reduced crystallographic root system. An
**isomorphism of root systems** $\varphi:\Phi\to\Phi'$ is a linear isomorphism
$\varphi:E\to E'$ with $\varphi(\Phi)=\Phi'$ that preserves every Cartan
integer: for all $\alpha,\beta\in\Phi$,
$$\frac{2(\varphi(\beta),\varphi(\alpha))}{(\varphi(\alpha),\varphi(\alpha))} = \frac{2(\beta,\alpha)}{(\alpha,\alpha)} .$$

Because
$$\frac{2(\beta,\alpha)}{(\alpha,\alpha)} =2\cos\theta\;\frac{|\beta|}{|\alpha|}, \qquad \theta\text{ the angle between }\alpha,\beta,$$
a map as above preserves the angle of every pair of nonproportional roots and
the ratio of their lengths; conversely, a linear isomorphism carrying $\Phi$
onto $\Phi'$ that preserves the angle and the length ratio of every pair of
nonproportional roots preserves all Cartan integers and is therefore an
isomorphism of root systems. An isomorphism need not preserve the given inner
products on the nose, but it preserves the common scale within each
irreducible component, so it preserves all angles between roots and all ratios
$|\beta|/|\alpha|$.
