---
id: "thm-riemannian-divergence-theorem"
kind: "theorem"
title: "Riemannian divergence theorem"
deps: ["prop-coordinate-formula-for-riemannian-divergence", "prop-the-riemannian-volume-form-is-the-unique-positive-unit-top-form", "prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions", "thm-general-stokes-theorem", "thm-divergence-theorem-relative-to-a-volume-form", "def-induced-boundary-orientation", "prop-tangent-space-of-the-boundary-is-the-boundary-tangent-hyperplane", "prop-the-gradient-is-characterized-by-inner-products", "prop-riemannian-metrics-induce-metrics-on-dual-tensor-and-exterior-bundles", "def-countable-choice"]
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

Assume countable choice. On an oriented Riemannian manifold with boundary, $n\ge1$, a smooth compactly supported vector field satisfies $\int_M(\operatorname{div}_gX)\operatorname{vol}_g=\int_{\partial M}g(X,\nu)\operatorname{vol}_{\partial g}$, with outward unit normal $\nu$ and outward-normal-first boundary orientation.

## Facts & Assumptions

**Given:** The stated oriented manifold, vector field, and countable choice.

[F1] [[prop-coordinate-formula-for-riemannian-divergence]]: In coordinates, $\operatorname{div}_gX=(\det G)^{-1/2}\sum_{i=1}^n\partial_i((\det G)^{1/2}X^i)$.

[F2] [[prop-the-riemannian-volume-form-is-the-unique-positive-unit-top-form]]: The Riemannian volume form is the unique positive unit section of $\bigwedge^nT^*M$ for the specified orientation and normalized exterior metric.

[F3] [[prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions]]: $F^*h$ is Riemannian if and only if $F$ is an immersion. In general it is positive semidefinite, with radical $\ker dF_p$ at $p$.

[F4] [[thm-general-stokes-theorem]]: Assume $\mathrm{AC}_\omega$. Let $M$ be an oriented smooth $n$-manifold with boundary, $n\geq1$, and let $\eta\in\Omega_c^{n-1}(M)$. With $j:\partial M\hookrightarrow M$ and the outward-normal-first orientation, $$\int_M d\eta=\int_{\partial M}j^*\eta.$$ An empty boundary contributes zero; in dimension one its integral is a finite signed sum of point values.

[F6] [[def-induced-boundary-orientation]]: For an oriented manifold with boundary, orient $T_p\partial M$ by the **outward-normal-first** rule: an outward vector first, followed by a positive boundary determinant, is a positive determinant of $T_pM$.

[F7] [[prop-tangent-space-of-the-boundary-is-the-boundary-tangent-hyperplane]]: For $p\in\partial M$ of an $n\ge1$ dimensional manifold and the inclusion $i:\partial M\hookrightarrow M$, the differential $di_p$ identifies $T_p\partial M$ with the hyperplane of boundary-tangent vectors in $T_pM$.

[F8] [[prop-the-gradient-is-characterized-by-inner-products]]: The gradient is the unique smooth vector field $Y$ satisfying $g(Y,X)=Xf$ for every smooth vector field $X$.

[F9] [[prop-riemannian-metrics-induce-metrics-on-dual-tensor-and-exterior-bundles]]: A Riemannian metric induces smooth metrics on dual, tensor and exterior bundles. On decomposable covectors, $\langle\alpha_1\wedge\cdots\wedge\alpha_k,\beta_1\wedge\cdots\wedge\beta_k\rangle=\det(\langle\alpha_i,\beta_j\rangle)$; increasing orthonormal wedge monomials have norm one.

[F10] [[def-countable-choice]]: The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following statement. > For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets indexed by > $\mathbb{N}$ there is a function $f$ with domain $\mathbb{N}$ such that > $f(n) \in X_n$ for every $n \in \mathbb{N}$. Equivalently, in the vocabulary of def-choice-function: every at most countable family of nonempty sets (def-countable) has a choice function.

## Proof

**Proof technique:** direct.

1.1 In a boundary chart let $u\ge0$ be its inward boundary coordinate. The boundary tangent space is $\ker du$. The gradient identity gives $g(\operatorname{grad}u,v)=du(v)$, so the nonzero gradient is perpendicular to that hyperplane. Therefore $\nu=-\operatorname{grad}u/|\operatorname{grad}u|$ is smooth, unit and outward, since $du(\nu)=-|\operatorname{grad}u|<0$. The orthogonal complement is a line and exactly one of its two unit vectors is outward; hence these local definitions agree. The boundary inclusion is an immersion, so the induced metric is Riemannian. [F3, F7, F8, given]

2.1 Write $X=g(X,\nu)\nu+X_T$, with $X_T$ tangent to the boundary. The term $\operatorname{vol}_g(X_T,v_1,\ldots,v_{n-1})$ vanishes because these $n$ vectors lie in a hyperplane. On a positive orthonormal boundary basis the form $j^*(\iota_\nu\operatorname{vol}_g)$ is positive and unit by the outward-first convention and the normalized exterior pairing. Uniqueness of the boundary volume form gives $j^*(\iota_X\operatorname{vol}_g)=g(X,\nu)\operatorname{vol}_{\partial g}$. For $n=1$, this identity uses the induced signed zero-form: its value is $\operatorname{vol}_g(\nu)=\varepsilon_{\partial}$, so the same scalar identity holds. [F2, F6, F9, step 1.1]

3.1 The form $\eta=\iota_X\operatorname{vol}_g$ is smooth and supported in the compact support of $X$. In coordinates $d\eta=\sum_i\partial_i(\sqrt{\det G}X^i)\,dx^1\wedge\cdots\wedge dx^n=(\operatorname{div}_gX)\operatorname{vol}_g$. Stokes under countable choice therefore gives $\int_M(\operatorname{div}_gX)\operatorname{vol}_g=\int_{\partial M}j^*\eta$. Substitute step 2.1 to obtain the claimed formula. Empty boundary contributes zero, a zero field gives zero on both sides, and compact $M$ permits every smooth field. In dimension one the oriented boundary integral is the finite signed endpoint sum. [F1, F4, F10, step 2.1] ∎

## Source locator

Lee, Propositions 15.32–15.33, pp.390–391, Lemma 16.30 and Theorem 16.32, pp.423–424; boundary and choice hypotheses are checked explicitly.
