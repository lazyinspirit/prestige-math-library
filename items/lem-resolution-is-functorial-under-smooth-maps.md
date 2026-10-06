---
id: "lem-resolution-is-functorial-under-smooth-maps"
kind: "lemma"
title: "Resolution of singularities is functorial under smooth morphisms"
status: published
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 21
deps:
  - "thm-smooth-morphisms-stable-base-change-composition"
  - "def-axiom-of-choice"
  - "def-field"
  - "def-integral-scheme"
  - "def-smooth-morphism-schemes"
  - "thm-resolution-of-singularities-in-characteristic-zero"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Jaroslaw Wlodarczyk, Simple Hironaka resolution in characteristic zero, J. Amer. Math. Soc. 18 (2005) 779-822; author's arXiv version math/0401401 (28 pp., dated October 25, 2018)"
      url: "https://arxiv.org/pdf/math/0401401"
    - title: "Dan Abramovich, Michael Temkin and Jaroslaw Wlodarczyk, Functorial embedded resolution via weighted blowings up, Algebra & Number Theory 18 (2024) 1557-1587; arXiv:1906.07106"
      url: "https://arxiv.org/pdf/1906.07106"
    - title: "Herwig Hauser, The Hironaka theorem on resolution of singularities (or: A proof we always wanted to understand), Bull. Amer. Math. Soc. 40 (2003) 323-403"
      url: "https://homepage.univie.ac.at/herwig.hauser/Publications/hauser%20hironaka%20thm%20bams.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

Let $K$ be a field of characteristic zero, let $Y$ be an integral finite-type $K$-scheme and let $\varphi\colon Y'\to Y$ be a smooth morphism of $K$-varieties, with both $Y$ and $Y'$ connected of finite type over $K$ ([[def-smooth-morphism-schemes]], [[def-integral-scheme]]).
Then the canonical resolutions of [[thm-resolution-of-singularities-in-characteristic-zero]] are compatible with $\varphi$: the natural morphism
$$\widetilde\varphi\colon\widetilde Y'\to\widetilde Y,\qquad \widetilde Y'=\widetilde Y\times_Y Y',$$
is smooth and makes the square with $\operatorname{res}_Y$ and $\operatorname{res}_{Y'}$ commute, and the identification is canonical.
In particular a smooth morphism is resolved by the base change of the resolution of its target, and, for $\tilde y\in\widetilde Y$ with image $y\in Y$, the fibre of $\widetilde\varphi$ at $\tilde y$ is $Y'_y\times_{\kappa(y)}\kappa(\tilde y)$.

## Facts & Assumptions

**Given:** The Axiom of Choice; a smooth morphism $\varphi\colon Y'\to Y$ of $K$-varieties of finite type over a field $K$ of characteristic zero; and the canonical desingularizations $\operatorname{res}_{Y'}\colon\widetilde Y'\to Y'$ and $\operatorname{res}_Y\colon\widetilde Y\to Y$ of [[thm-resolution-of-singularities-in-characteristic-zero]].



[F1] [[thm-resolution-of-singularities-in-characteristic-zero]], proof steps 2.2–3.1: the canonical resolutions are compatible with smooth base change; the proof uses the earlier ambient-extension and marked-ideal smooth-commutation results, the marked-ideal construction independently of this consequence.

[F2] [[thm-smooth-morphisms-stable-base-change-composition]]: smooth morphisms remain smooth under base change.

## Proof

1.1 Apply the already proved smooth comparison [F1] to $\varphi$. It gives the canonical isomorphism $\widetilde Y'\cong\widetilde Y\times_Y Y'$ over $Y'$. Composing it with the first projection defines $\widetilde\varphi$ and makes the required square Cartesian, hence commutative. Naturality for composites and identities follows from the canonical comparisons in [F1]. [F1, given]

2.1 The projection $\widetilde Y\times_Y Y'\to\widetilde Y$ is the base change of $\varphi$, so it is smooth by [F2]. For $\tilde y\mapsto y$, its fibre is $Y'\times_Y\operatorname{Spec}\kappa(\tilde y)=Y'_y\times_{\kappa(y)}\kappa(\tilde y)$ by associativity of fibre products. Thus the base change resolves the source and has the stated fibres. [F1, F2, step 1.1] ∎
