---
id: cex-finite-fibres-not-finite-open-immersion
kind: counterexample
title: Finite fibres and an open immersion do not make a map finite
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 2
proof_strategy: direct
justified_by: []
aliases: []
deps: [def-axiom-of-choice, def-finite-morphism-classical-affine-local, thm-finite-morphism-closed-and-finite-fibres, def-quasi-finite-morphism-classical, thm-classical-principal-open-is-affine-variety, thm-affine-morphisms-coordinate-ring-anti-equivalence, cor-zariski-topology-cofinite-on-affine-line]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. S. Milne, Algebraic Geometry (2025 version), Ch. 8 §c: the inclusion of the punctured affine line is quasi-finite but not finite (Example 8.30)"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Statement refuted

False claim: a quasi-finite morphism of classical varieties that is an open
immersion is finite.

## Facts & Assumptions

Assume the Axiom of Choice.

**Given:** AC, an algebraically closed field $k$, the affine line $\mathbf A^1_k$ with coordinate ring $k[t]$, the principal open $U=D(t)=\mathbf A^1_k\smallsetminus\{0\}$, and the inclusion $j\colon U\hookrightarrow\mathbf A^1_k$.

[F1] $U=D(t)$ with its regular functions is an affine variety with coordinate ring $k[t,t^{-1}]=k[t]_t$, realized as the closed graph $\{ts=1\}\subseteq\mathbf A^1\times\mathbf A^1$, and $j$ is the restriction of the projection, with pullback the inclusion $k[t]\hookrightarrow k[t,t^{-1}]$ ([[thm-classical-principal-open-is-affine-variety]], [[thm-affine-morphisms-coordinate-ring-anti-equivalence]]).

[F2] A morphism of classical varieties is quasi-finite when every closed-point fibre is a finite set; empty fibres are allowed ([[def-quasi-finite-morphism-classical]]).

[F3] A finite morphism of classical varieties is closed: the image of every closed subset is closed ([[thm-finite-morphism-closed-and-finite-fibres]]).

[F4] The closed subsets of the affine line are the finite subsets and the whole line ([[cor-zariski-topology-cofinite-on-affine-line]]); since $k$ is algebraically closed, hence infinite, the set $\mathbf A^1\smallsetminus\{0\}$ is infinite and therefore not closed in $\mathbf A^1$. Its closure is all of $\mathbf A^1$.

[F7] AC is inherited through the classical localization, normalization, or finite-morphism suppliers cited above ([[def-axiom-of-choice]]).

## Counterexample

1.1 The map $j$ is an open immersion and is quasi-finite: it is the inclusion of the principal open $U$ [F1], and its fibres are singletons over the points of $k^{\times}$ and empty over $0$, so every closed-point fibre is finite [F2]. [F1, F2, given, F7]

1.2 The map $j$ is not finite. If it were finite, then by [F3] its image would be closed in $\mathbf A^1$; but its image is $\mathbf A^1\smallsetminus\{0\}$, which by [F4] is infinite and hence not closed. Equivalently, the coordinate-ring inclusion $k[t]\hookrightarrow k[t,t^{-1}]$ would make $k[t,t^{-1}]$ a finite $k[t]$-module, which it is not: a finite generating set of Laurent polynomials has a bounded negative exponent, and no finite $k[t]$-span contains all powers $t^{-n}$. [F1, F3, F4, given]

2.1 The inclusion $j\colon\mathbf A^1\smallsetminus\{0\}\hookrightarrow\mathbf A^1$ is therefore an open immersion with finite fibres that is not finite, refuting the claim; the missing hypothesis is properness (equivalently, closedness of the map), which is exactly what [F3] supplies for finite morphisms and what fails for this open immersion. [F2, F3, step 1.1, step 1.2] ∎
