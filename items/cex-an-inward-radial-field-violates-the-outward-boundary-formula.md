---
id: cex-an-inward-radial-field-violates-the-outward-boundary-formula
kind: counterexample
title: "An inward radial field violates the outward boundary formula"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: counterexample
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-poincare-hopf-with-outward-pointing-boundary, thm-index-of-a-nondegenerate-vector-field-zero, def-euler-characteristic-of-a-compact-manifold, cor-contractible-nonempty-spaces-have-the-homology-of-a-point, def-inward-outward-and-boundary-tangent-vectors, def-smooth-vector-field-as-a-tangent-bundle-section, def-euclidean-spheres-and-closed-balls, def-countable-choice]
justified_by: []
aliases: []
sources:
  scraped: []
  references:
    - title: "John W. Milnor, Topology from the Differentiable Viewpoint (complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "§6, the discussion of the boundary hypothesis in Step 3, printed pp. 40-41"
    - title: "Joel W. Robbin and Dietmar A. Salamon, Introduction to Differential Topology (web draft 2018, complete PDF)"
      url: "https://umutvg.github.io/difftop.pdf"
      locator: "Theorem 2.3.1 and its outwardness hypothesis, printed p. 33"
dependency_level: 9
---

## Statement refuted

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for the canonical smooth tangent-bundle structure and the cited local-index theorem.

The inward radial field on the closed unit ball shows that the conclusion of
[[thm-poincare-hopf-with-outward-pointing-boundary]] fails if "strictly
outward" is weakened to "nonzero on $\partial M$": on
$D^n=\overline B_2(0,1)\subseteq\mathbb R^n$ with $n\ge3$ odd, the field
$X(u)=-u$ is smooth and nonzero on $\partial D^n$ but strictly inward there,
its only zero is the centre with index $\operatorname{sign}\det(-I_n)=(-1)^n=-1$
([[thm-index-of-a-nondegenerate-vector-field-zero]]), while $\chi(D^n)=1$
([[cor-contractible-nonempty-spaces-have-the-homology-of-a-point]],
[[def-euler-characteristic-of-a-compact-manifold]]). Hence
$\sum_p\operatorname{ind}_pX=-1\ne1=\chi(D^n)$, so "nonzero on the boundary" is
not enough.

## Facts & Assumptions

**Given:** The closed unit ball $D^n\subseteq\mathbb R^n$, $n\ge3$ odd
([[def-euclidean-spheres-and-closed-balls]], [[def-countable-choice]]), and the field $X(u)=-u$
([[def-smooth-vector-field-as-a-tangent-bundle-section]]).

[F1] At a boundary point $u\in\partial D^n$ the outward direction is the radial
vector $u$; the field $X(u)=-u$ has $\langle X(u),u\rangle=-1<0$, so it is
nonzero but strictly inward ([[def-inward-outward-and-boundary-tangent-vectors]]).

[F2] The linear field $X(u)=-u$ has linearization $-I_n$ and the only zero
$0$, nondegenerate, with index
$\operatorname{sign}\det(-I_n)=(-1)^n$
([[thm-index-of-a-nondegenerate-vector-field-zero]]).

[F3] $D^n$ is contractible, so $\chi(D^n)=1$
([[cor-contractible-nonempty-spaces-have-the-homology-of-a-point]],
[[def-euler-characteristic-of-a-compact-manifold]]).

## Counterexample

1.1 The field $X(u)=-u$ is linear with derivative $-I_n$ everywhere, so its only zero is the centre $0$ and it is nondegenerate there with index $(-1)^n=-1$ because $n$ is odd; on the boundary sphere $\langle X(u),u\rangle=-1<0$, so $X$ is nonzero but strictly inward. [F1, F2, algebra]

2.1 On the other hand $\chi(D^n)=1$ by [F3], so the index sum $-1$ differs from $\chi(D^n)=1$; therefore the conclusion of the boundary form of Poincare-Hopf fails for this field even though it is nonzero on the boundary, and the outwardness hypothesis of [[thm-poincare-hopf-with-outward-pointing-boundary]] is load bearing. [F3, step 1.1, algebra] ∎
