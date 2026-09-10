---
id: "thm-hodge-star-is-a-smooth-bundle-isomorphism"
kind: "theorem"
title: "Hodge star is a smooth bundle isomorphism"
deps: ["def-riemannian-hodge-star", "lem-wedge-monomials-in-a-dual-basis-form-a-basis"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
landmark: true
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

The Hodge star exists uniquely and is a smooth bundle isomorphism in every degree $0\le k\le n$.

## Facts & Assumptions

**Given:** An oriented Riemannian manifold and its normalized exterior metric.

[F1] [[def-riemannian-hodge-star]]: On an oriented Riemannian $n$-manifold, for $0\le k\le n$ the **Hodge star** is the fibrewise map $*:\bigwedge^kT^*M\to\bigwedge^{n-k}T^*M$ characterized by $\alpha\wedge*\beta=\langle\alpha,\beta\rangle_g\operatorname{vol}_g$ for every pair of $k$-covectors. The pairing is the determinant-normalized one of prop-riemannian-metrics-induce-metrics-on-dual-tensor-and-exterior-bundles, and the positive unit volume form is prop-the-riemannian-volume-form-is-the-unique-positive-unit-top-form. This is the ordinary, orientation-dependent star, with no orientation-line twist. Existence, uniqueness and smoothness are proved in thm-hodge-star-is-a-smooth-bundle-isomorphism. For $n=k=0$, it multiplies by the chosen orientation sign.

[F2] [[lem-wedge-monomials-in-a-dual-basis-form-a-basis]]: Let $e_1,\ldots,e_n$ be a basis of $V$, with dual basis $e^1,\ldots,e^n$. Then the wedges $$ e^{i_1}\wedge\cdots\wedge e^{i_k}\qquad (1\le i_1<\cdots<i_k\le n) $$ form a basis of $\operatorname{Alt}^k(V)$.

## Proof

**Proof technique:** direct.

1.1 For $n>0$, take a local positive smooth coframe and apply Gram–Schmidt: subtract its projections on preceding normalized covectors and divide by the positive norm of the residual. Independence ensures nonzero residuals, and positive square roots make the coefficients smooth. This gives an oriented orthonormal coframe $e^1,\ldots,e^n$. For each increasing multi-index $I$, define $*e^I=\epsilon(I,I^c)e^{I^c}$, where $e^I\wedge e^{I^c}=\epsilon(I,I^c)e^1\wedge\cdots\wedge e^n$. [F1, F2, given]

2.1 For an increasing $J$ of size $k$, $e^J\wedge*e^I$ is zero unless $J=I$, because otherwise an index repeats, and when $J=I$ it equals the positive volume form. Thus it equals $\langle e^J,e^I\rangle\operatorname{vol}_g$. Bilinearity proves the defining equation for arbitrary covectors. If two proposed images of $\beta$ differ, expansion of their difference in the complementary wedge basis and pairing with each $e^I$ forces every coefficient zero. Hence the image is unique. [F1, F2, step 1.1]

3.1 Uniqueness makes local formulas agree on overlaps. Their matrices in these smooth frames are signed permutations, hence smooth and invertible, with smooth inverse matrices. For $n=0$, the map on the scalar fibre is $a\mapsto\varepsilon a$ with locally constant orientation sign $\varepsilon$; it satisfies the equation and is its own inverse. Empty base gives the empty bundle map. [step 1.1, step 2.1] ∎

## Source locator

Lee, Chapter 16, Problem 16-18(c–e), pp.437–438; existence is supplied here by the full complementary-wedge calculation, not by treating the exercise as a proof.
