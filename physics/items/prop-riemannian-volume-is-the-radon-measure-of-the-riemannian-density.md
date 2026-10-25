---
id: "prop-riemannian-volume-is-the-radon-measure-of-the-riemannian-density"
kind: "proposition"
title: "Riemannian volume is the radon measure of the riemannian density"
deps: ["lem-the-riemannian-volume-density-is-coordinate-independent", "thm-the-riemannian-distance-topology-is-the-manifold-topology", "def-riemannian-volume-of-a-compactly-supported-smooth-density", "thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure", "thm-density-measure-integration-agrees-with-smooth-density-integration", "def-countable-choice"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
landmark: true
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Under countable choice, the density $\mu_g$ defines a compact-finite, locally finite, sigma-finite Radon Borel measure $\operatorname{vol}_g$. Its completion has a separately specified completed domain. Smooth compact-support integrals agree with smooth density integration, and finite-radius metric balls are Borel.

## Facts & Assumptions

**Given:** A Riemannian manifold and countable choice.

[F1] [[lem-the-riemannian-volume-density-is-coordinate-independent]]: The local Riemannian volume densities glue to a positive smooth density independent of coordinates.

[F2] [[thm-the-riemannian-distance-topology-is-the-manifold-topology]]: The topology of $d_g$ is the manifold topology on every connected Riemannian manifold.

[F3] [[def-riemannian-volume-of-a-compactly-supported-smooth-density]]: Assume countable choice. For smooth compactly supported $f$, define $\int_M f\mu_g$ by the intrinsic smooth density integral. More generally every compactly supported signed smooth density $\sigma$ has its existing intrinsic integral, independently of a Riemannian metric. lem-the-riemannian-volume-density-is-coordinate-independent makes $f\mu_g$ a smooth compactly supported density. Apply def-integral-of-a-compactly-supported-smooth-density and thm-density-integration-is-defined-without-an-orientation; def-countable-choice is inherited precisely at chart-partition selection. In a chart the summand is the integral of the partition-weighted coefficient $f\sqrt{\det G}$. On a zero-manifold it is the finite sum of scalar density values, and empty support gives zero. No orientation is required.

[F4] [[thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure]]: If $r$ is a finite-valued positive smooth density, $\mu_r$ is finite on compact sets, locally finite, sigma-finite, and a regular Borel measure, hence Radon. Its completion is denoted $(M,\overline{\mathcal B(M)},\overline\mu_r)$ and is not identified with its Borel domain.

[F5] [[thm-density-measure-integration-agrees-with-smooth-density-integration]]: For a nonnegative Borel $f:M\to[0,\infty]$ and any chart partition $(x_i,\varphi_i)$, $$\int_M f\,d\mu_r=\sum_i\int_{x_i(U_i)}(\varphi_i f r)_{x_i}\,d\lambda_n,$$ with values in $[0,\infty]$ and all zero-times-infinity products equal to zero. For positive smooth $r$ and compactly supported smooth real $f$, this equals the smooth density integral $\int_Mfr$. For real or complex $f\in L^1(\mu_r)$ the same chart formula holds, interpreted by real and imaginary positive and negative parts; the series converges absolutely. On the completion, nonnegative measurable functions and real or complex $L^1$ functions have Borel representatives modulo completed null sets, and the formulas are applied to those representatives.

[F6] [[def-countable-choice]]: The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following statement. > For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets indexed by > $\mathbb{N}$ there is a function $f$ with domain $\mathbb{N}$ such that > $f(n) \in X_n$ for every $n \in \mathbb{N}$. Equivalently, in the vocabulary of def-choice-function: every at most countable family of nonempty sets (def-countable) has a choice function.

## Proof

**Proof technique:** direct.

1.1 The density $\mu_g$ is smooth, positive and finite-valued in every coordinate frame. These are exactly the hypotheses of the positive-smooth-density measure theorem. It therefore gives a Radon Borel measure finite on compact sets, locally finite and sigma-finite; its completion is $(M,\overline{\mathcal B(M)},\overline{\operatorname{vol}}_g)$, a separate measure space. Countable choice is available for the inherited chart gluing. [F1, F4, F6, given]

2.1 The density-integration agreement theorem applies to this same positive smooth density and to every compactly supported smooth real $f$, giving $\int_M f\,d\operatorname{vol}_g=\int_Mf\mu_g$. On each component the distance topology is the manifold topology; components are open, so every finite-radius ball is manifold-open and hence Borel. In dimension zero the density coefficient is one, giving counting measure; the empty manifold has zero measure. Total volume is allowed to be infinite. [F2, F3, F5, step 1.1] ∎

## Source locator

Lee, Propositions 15.29–15.33 and Corollary 15.34, pp.389–391; density construction and integration pp.428–433. The two exact Radon-density suppliers, including their Borel/completed distinction, provide the measurable extension.
