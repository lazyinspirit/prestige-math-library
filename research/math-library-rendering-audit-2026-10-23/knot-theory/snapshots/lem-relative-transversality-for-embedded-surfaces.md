---
id: lem-relative-transversality-for-embedded-surfaces
kind: lemma
title: "Relative transversality for an embedded surface with fixed boundary"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - lem-a-tubular-target-produces-a-submersive-finite-dimensional-perturbation-family
  - thm-parametric-transversality
  - thm-collar-neighborhood-theorem
  - thm-isotopy-extension
  - thm-euclidean-inverse-function-theorem
  - def-a-smooth-map-transverse-to-an-embedded-submanifold
  - thm-every-smooth-manifold-admits-a-riemannian-metric
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, Part 10 and cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
      locator: "§3.4, Corollaries 3.27–3.28 and Theorem 3.29, printed pp.35–37; the local proof supplies the cutoff and embedding-isotopy details"
---

## Statement

Assume the Axiom of Countable Choice. Let $F$ be a compact smooth surface with boundary, let $M$ be a smooth three-manifold without boundary, and let $S\subset M$ be a closed embedded smooth surface. If $i:F\to M$ is a smooth embedding whose boundary restriction $i|_{\partial F}$ is transverse to $S$, then there is a smooth isotopy $i_t:F\to M$ through embeddings, fixed on a neighbourhood of $\partial F$, such that $i_1(F)$ is transverse to $S$.

## Statement references

[[def-countable-choice|The choice hypothesis]]

## Facts & Assumptions

**Given:** AC$_\omega$, a compact smooth surface with boundary $F$, a smooth three-manifold $M$, a closed embedded surface $S\subset M$, and an embedding $i:F\to M$ with $i|_{\partial F}\pitchfork S$.

[F1] For a smooth map from a boundaryless manifold to a boundaryless target, there is a finite-dimensional smooth perturbation family through that map whose parameter map is a submersion at every source point. ([[lem-a-tubular-target-produces-a-submersive-finite-dimensional-perturbation-family]])

[F2] If a smooth family $G:X\times B\to M$ is transverse to $S$, then the parameters for which the slice $G_a:X\to M$ is not transverse to $S$ form a null subset of $B$. ([[thm-parametric-transversality]])

[F3] Every smooth manifold with boundary has a smooth collar. ([[thm-collar-neighborhood-theorem]])

[F4] Under AC$_\omega$, every smooth isotopy of embeddings of a compact source with boundary into a boundaryless target extends to an ambient isotopy. ([[thm-isotopy-extension]])

[F5] A smooth map transverse to an embedded submanifold has the tangent-space spanning property in the transversality definition; invertible differentials give local diffeomorphisms in charts. ([[def-a-smooth-map-transverse-to-an-embedded-submanifold]], [[thm-euclidean-inverse-function-theorem]])

[F6] Under AC$_\omega$, every smooth manifold, including one with boundary, admits a Riemannian metric compatible with its manifold topology. ([[thm-every-smooth-manifold-admits-a-riemannian-metric]])

[A1] AC$_\omega$ is the sequence-choice principle used by [F1], [F2], and [F4]. ([[def-countable-choice]])

## Proof

**Given:** The stated objects and hypotheses.

1.1 At every $x\in\partial F$, the inclusion $T_x\partial F\subset T_xF$ and the boundary transversality hypothesis imply $di_x(T_xF)+T_{i(x)}S=T_{i(x)}M$. Thus $i$ is transverse to $S$ along $\partial F$. Transversality is open in the point of the source, and $\partial F$ is compact, so there is a collar neighbourhood $U$ of $\partial F$ on which $i$ is transverse to $S$. [given, F3, F5, construct]

2.1 Choose a smooth collar coordinate $s$ on $U$ and a smooth function $\gamma:F\to[0,1]$ that vanishes on a smaller boundary collar and equals $1$ outside $U$. Such a function is obtained by composing the collar coordinate with a smooth one-variable cutoff and extending by $1$. Put $\tau=\gamma^2$. Then $d\tau=0$ wherever $\tau=0$, and the zero set of $\tau$ lies inside $U$. [F3, step 1.1, construct]

3.1 Apply [F1] to the boundaryless interior $F^\circ$ and the map $i|_{F^\circ}$, obtaining a smooth family $\mathcal F:F^\circ\times B\to M$ with $\mathcal F(p,0)=i(p)$ and each parameter map a submersion. On $F^\circ$ define $G(p,a)=\mathcal F(p,\tau(p)a)$, restricting $B$ if necessary so $\tau(p)a\in B$. Where $\tau>0$, the parameter derivative of $G$ is surjective. Where $\tau=0$, $d\tau=0$, so $G(p,a)=i(p)$ and its source derivative is $di_p$; [F5] and step 1.1 make it transverse to $S$. Since $\tau=0$ on a boundary collar, setting $G=i$ on $\partial F$ extends $G$ smoothly to $F\times B$, fixed near the boundary. Thus the total family is transverse to $S$. [A1, F1, F5, step 1.1, step 2.1, construct]

4.1 Apply [F2] to $G|_{F^\circ\times B}$. Its good parameters are dense, because the bad set is null and every open parameter ball has positive measure. For each good parameter $a$, $G_a$ is transverse on $F^\circ$; near $\partial F$ it equals $i$, which is transverse by step 1.1. Hence $G_a$ is transverse on all of $F$. [F2, step 1.1, step 3.1, choose]

5.1 Choose compatible Riemannian metrics on $F$ and $M$ using [F6]. At each $x\in F$, choose coordinate charts and a linear projection $P_x$ to a two-dimensional tangent plane so that $D(P_x\circ i)$ at $x$ is invertible. By [F5], shrink to a convex coordinate neighbourhood $U_x$ on which this derivative stays within one quarter of the least singular value of its value at $x$. Every sufficiently $C^1$-close map $j$ then has $P_x\circ j$ injective on $U_x$: integrate its derivative along the coordinate segment between two points to obtain a lower bound of one half that least singular value times their coordinate distance. Compactness gives a finite cover by such $U_x$ and a Lebesgue number $\delta>0$. For pairs at source distance at least $\delta$, compactness and injectivity of $i$ give a positive minimum target distance, which persists under sufficiently small $C^0$ perturbations. The differential of $i$ has a positive minimum norm on the compact unit tangent bundle, so immersion also persists under sufficiently small $C^1$ perturbations. Thus all sufficiently $C^1$-close maps are injective immersions; compactness of $F$ and the Hausdorff property of $M$ make them embeddings. Smoothness of $G$ and compactness of $F$ imply $G_b\to i$ in $C^1$ as $b\to0$, so there is a parameter ball about $0$ for which every $G_b$ is an embedding. By the density in step 4.1 choose a good $a$ in that ball; then $t\mapsto G_{ta}$ is an isotopy through embeddings fixed near $\partial F$. Apply [F4] to extend it to an ambient isotopy. Its endpoint carries $i(F)$ to a surface transverse to $S$, as required. [A1, F4, F5, F6, step 4.1, construct] ∎

## Sources

[[lem-a-tubular-target-produces-a-submersive-finite-dimensional-perturbation-family]]

[[thm-parametric-transversality]]

[[thm-collar-neighborhood-theorem]]

[[thm-isotopy-extension]]

[[def-a-smooth-map-transverse-to-an-embedded-submanifold]]

[[thm-euclidean-inverse-function-theorem]]

[[thm-every-smooth-manifold-admits-a-riemannian-metric]]

[[def-countable-choice]]
