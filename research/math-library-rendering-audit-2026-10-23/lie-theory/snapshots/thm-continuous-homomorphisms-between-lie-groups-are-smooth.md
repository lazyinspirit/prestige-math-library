---
id: thm-continuous-homomorphisms-between-lie-groups-are-smooth
kind: theorem
title: Continuous homomorphisms between Lie groups are smooth
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, thm-cartans-closed-subgroup-theorem, thm-local-homology-detects-interior-points-boundary-points-and-dimension, thm-smooth-inverse-function-theorem-on-manifolds, prop-exponential-map-is-natural-for-lie-group-homomorphisms]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf
      locator: Chapter I §10, automatic smoothness statement and canonical-coordinate route, printed page 77
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Closed Subgroup Theorem 20.12, printed pages 523–525
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Every continuous group homomorphism
$F:G\to H$ between finite-dimensional real Lie groups is smooth.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and a continuous group homomorphism $F:G\to H$ between finite-dimensional real Lie groups.

[A1] Closed subgroups have embedded Lie-group structures under countable choice. [[def-countable-choice]], [[thm-cartans-closed-subgroup-theorem]].

[F1] Homeomorphic nonempty manifolds have equal intrinsic dimension. [[thm-local-homology-detects-interior-points-boundary-points-and-dimension]].

[F2] A smooth map with invertible differential is locally a diffeomorphism. [[thm-smooth-inverse-function-theorem-on-manifolds]].

[F3] For a smooth Lie-group homomorphism $P$, $P(\exp X)=\exp(dP_eX)$. [[prop-exponential-map-is-natural-for-lie-group-homomorphisms]].

## Proof

**Proof technique:** the closed graph subgroup.

1.1 The graph $\Gamma_F=\{(g,F(g)):g\in G\}$ is a subgroup of $G\times H$. It is closed: if $(g,h)$ is not on the graph, then $h\ne F(g)$, and continuity of $F$ together with Hausdorffness of $H$ gives product neighborhoods of $(g,h)$ disjoint from the graph. By [A1], $\Gamma_F$ is an embedded Lie subgroup. [A1, given, algebra]

2.1 The first projection $P:\Gamma_F\to G$ is a smooth Lie-group homomorphism and a homeomorphism, with continuous inverse $g\mapsto(g,F(g))$. Manifold charts and [F1] therefore give $\dim\Gamma_F=\dim G$. [F1, step 1.1]

3.1 We show that $dP_{(e,e)}$ is injective. If $X$ is in its kernel, [F3] gives $$P(\exp_{\Gamma_F}(tX))=\exp_G(t,dP_{(e,e)}X)=e$$ for every $t$. The algebraic kernel of $P$ is the singleton $(e,e)$, so this one-parameter subgroup is constant; differentiating it at zero gives $X=0$. Equal dimensions from step 2.1 now make $dP_{(e,e)}$ an isomorphism. [F3, step 2.1, algebra]

4.1 Translation of the homomorphism identity makes $dP$ invertible everywhere. By [F2], $P$ has smooth local inverses around every point. Since the set-theoretic inverse is unique, these local inverses agree with the global continuous inverse $P^{-1}$, so $P^{-1}$ is smooth. [F2, step 3.1]

5.1 Let $Q:\Gamma_F\to H$ be the second projection. Then $F=Q\circ P^{-1}$ is smooth. Zero-dimensional and disconnected groups are included; no injectivity or surjectivity of $F$ is assumed. The exponential argument in step 3.1 is the needed correction to the scaffold: a smooth homeomorphism between equal-dimensional manifolds need not have invertible differential. Countable choice is used through [A1] and [F3]. [A1, F3, step 3.1, step 4.1] ∎
