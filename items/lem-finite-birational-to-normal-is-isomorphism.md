---
id: lem-finite-birational-to-normal-is-isomorphism
kind: lemma
title: A finite birational morphism onto a normal variety is an isomorphism
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 1
proof_strategy: direct
justified_by: []
aliases: []
deps: [def-finite-morphism-classical-affine-local, def-normal-point-and-normal-variety, thm-birational-equivalence-function-fields, thm-affine-morphisms-coordinate-ring-anti-equivalence, def-integral-closure-and-integrally-closed-domain, thm-integrality-and-finite-module-equivalences, thm-normality-is-local-for-domains, lem-principal-opens-form-affine-basis, thm-classical-affine-variety-prime-coordinate-ring, lem-classical-variety-noetherian-components, def-axiom-of-choice, thm-local-ring-affine-variety-localization]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "historical complete Step5 reader; item lem-finite-birational-to-normal-is-isomorphism; evidence research/frontier-38-owner-30-reader-1.md, research/frontier-38-owner-30-reader-findings-1.json. Original reports retain their scope and source limitations; no recursive audit of all published prerequisites or complete bibliography is claimed. Restored from completed 2026-10-03 evidence; no new audit performed."
    delegated_by: "tools/autopilot frontier-38-owner-30 historical dispatched reader/repair lane"
sources:
  references:
    - title: "The Stacks Project, Lemma 29.55.8: a finite birational morphism onto a normal scheme is an isomorphism"
      url: "https://stacks.math.columbia.edu/tag/0AB1"
    - title: "J. S. Milne, Algebraic Geometry (2025 version), Ch. 8 §a and §c: normal points and finite maps (Definition 8.1, Definition 8.17, Lemma 8.19, Summary 8.22)"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Statement

Assume the Axiom of Choice. Let $f\colon Y\to X$ be a finite birational morphism
of irreducible classical varieties over an algebraically closed field. If $X$ is normal,
then $f$ is an isomorphism. The normality of the target is essential: the
normalization of the cusp is finite and birational but not an isomorphism.

## Facts & Assumptions

**Given:** AC, the algebraically closed field $k$, the irreducible varieties $Y,X$, the finite birational morphism $f\colon Y\to X$, and the assumption that $X$ is normal. Also a finite affine cover of $X$ by affine opens $U$ with $f^{-1}(U)$ affine and $k[f^{-1}(U)]$ a finite $k[U]$-module.

[F1] By the definition of finiteness and its affine-locality, such a cover exists, and over every affine open $U\subseteq X$ the preimage $f^{-1}(U)$ is affine with $k[f^{-1}(U)]$ a finite $k[U]$-module ([[def-finite-morphism-classical-affine-local]], [[lem-principal-opens-form-affine-basis]]).

[F2] On an affine variety, the coordinate ring is a domain, and the local ring at a point is the localisation of the coordinate ring at its maximal ideal; normality of $X$ thus makes each coordinate ring an integrally closed domain, by the localisation criterion for integrally closed domains ([[thm-classical-affine-variety-prime-coordinate-ring]], [[thm-local-ring-affine-variety-localization]], [[def-normal-point-and-normal-variety]], [[thm-normality-is-local-for-domains]]).

[F3] Birationality gives an isomorphism of function fields: passing to a nonempty affine open $U\subseteq X$, the pullback identifies $\operatorname{Frac}(k[U])=k(U)$ with $\operatorname{Frac}(k[f^{-1}(U)])$ ([[thm-birational-equivalence-function-fields]], [[def-axiom-of-choice]]).

[F4] A finite algebra is integral over its base, integrally closed domains contain the integral elements of their fraction fields, and pullback identifies morphisms of affine varieties with $k$-algebra homomorphisms ([[thm-integrality-and-finite-module-equivalences]], [[def-integral-closure-and-integrally-closed-domain]], [[thm-affine-morphisms-coordinate-ring-anti-equivalence]]).

[F5] $X$ has a finite affine cover and every open subvariety of $X$ has one ([[lem-classical-variety-noetherian-components]]).

## Proof

1.1 The affine case. Let $U\subseteq X$ be a nonempty affine open with $A=k[U]$, and put $V=f^{-1}(U)$, $B=k[V]$, so that $B$ is a finite $A$-module and the pullback $A\to B$ exhibits $f|_V$ [F1]. By [F2], $A$ is an integrally closed domain, and $B$ is a domain. By [F3], $\operatorname{Frac}(B)=\operatorname{Frac}(A)$ under the pullback, so every $b\in B$ lies in the fraction field of $A$ and is integral over $A$ because $B$ is a finite, hence integral, $A$-module [F4]. Since $A$ is integrally closed, $b\in A$; hence $B\subseteq A$, and with $A\subseteq B$ we get $A=B$. By the anti-equivalence [F4] the map $f|_V$ is an isomorphism. [F1, F2, F3, F4, given]

2.1 The general case. Cover $X$ by finitely many nonempty affine opens $U_1,\dots,U_n$ as in [F1] and [F5]; by step 1.1 each restriction $f_i\colon f^{-1}(U_i)\to U_i$ is an isomorphism, with inverse $g_i\colon U_i\to f^{-1}(U_i)$. On an overlap $U_i\cap U_j$, the maps $g_i$ and $g_j$ both invert the same map $f$ on that overlap, so they agree there. Since being a morphism is a local condition on the source and the $U_i$ cover $X$, the $g_i$ glue to a morphism $g\colon X\to Y$; the identities $f\circ g=\mathrm{id}_X$ and $g\circ f=\mathrm{id}_Y$ hold because they hold locally on the cover. Thus $f$ is an isomorphism. [F1, F5, step 1.1] ∎
