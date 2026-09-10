---
id: "prop-the-riemannian-volume-form-is-the-unique-positive-unit-top-form"
kind: "proposition"
title: "The riemannian volume form is the unique positive unit top form"
deps: ["def-riemannian-volume-form-on-an-oriented-manifold", "prop-riemannian-metrics-induce-metrics-on-dual-tensor-and-exterior-bundles"]
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
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

The Riemannian volume form is the unique positive unit section of $\bigwedge^nT^*M$ for the specified orientation and normalized exterior metric.

## Facts & Assumptions

**Given:** An oriented Riemannian manifold.

[F1] [[def-riemannian-volume-form-on-an-oriented-manifold]]: On an oriented Riemannian $n$-manifold, the **Riemannian volume form** is $\operatorname{vol}_g=\sqrt{\det G_x}\,dx^1\wedge\cdots\wedge dx^n$ in positively oriented charts for $n\ge1$. For $n=0$ it is the supplied orientation sign $\varepsilon(p)\in\{1,-1\}$ at each point. def-oriented-smooth-manifold-and-oriented-chart supplies the orientation. On positive-chart overlaps the Jacobian determinant is positive, so the density calculation in lem-the-riemannian-volume-density-is-coordinate-independent is also the top-form transformation law. Thus the formula glues, and $|\operatorname{vol}_g|=\mu_g$. Reversing orientation negates the form but leaves the density unchanged, also in dimension zero.

[F2] [[prop-riemannian-metrics-induce-metrics-on-dual-tensor-and-exterior-bundles]]: A Riemannian metric induces smooth metrics on dual, tensor and exterior bundles. On decomposable covectors, $\langle\alpha_1\wedge\cdots\wedge\alpha_k,\beta_1\wedge\cdots\wedge\beta_k\rangle=\det(\langle\alpha_i,\beta_j\rangle)$; increasing orthonormal wedge monomials have norm one.

## Proof

**Proof technique:** direct.

1.1 In positive coordinates the squared norm of $dx^1\wedge\cdots\wedge dx^n$ is $\det(G^{-1})=(\det G)^{-1}$ by the determinant pairing. Multiplication by $\sqrt{\det G}$ therefore gives norm one, and its coefficient is positive. For $n=0$, the prescribed sign $\varepsilon$ has norm one and lies on the prescribed positive ray. [F1, F2, given]

2.1 Any other top form is locally $f\operatorname{vol}_g$, since the top exterior fibre is a line. If it is positive then $f>0$, while unit norm gives $f^2=1$ and hence $f=1$. Therefore it equals $\operatorname{vol}_g$ everywhere, including the signed zero-dimensional case and vacuously the empty case. [F1, F2, step 1.1] ∎

## Source locator

Lee, Propositions 15.29–15.33 and Corollary 15.34, pp.389–391; density construction and integration pp.428–433.
