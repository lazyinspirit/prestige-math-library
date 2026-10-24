---
id: cor-pullback-of-the-tangent-bundle-of-euclidean-space-is-trivial
kind: corollary
title: "The pullback of the Euclidean tangent bundle is canonically trivial"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: ["def-countable-choice", "thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure", "def-induced-tangent-bundle-chart", "lem-pullback-of-a-trivial-smooth-vector-bundle-is-canonically-trivial"]
justified_by: []
dependency_level: 1
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: direct-corollary
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references: []
---

## Statement

Assume countable choice $\mathrm{AC}_\omega$. Let $f:N\to\mathbb R^r$ be a smooth map. Under the standard-coordinate identification $T\mathbb R^r\cong\varepsilon^r_{\mathbb R^r}$ given by the induced tangent chart of the identity chart ([[thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure]], [[def-induced-tangent-bundle-chart]]), the pullback tangent bundle is canonically trivial: $$f^*T\mathbb R^r\cong f^*\varepsilon^r_{\mathbb R^r}\cong\varepsilon^r_N,$$ where the second isomorphism pulls back the constant frame by [[lem-pullback-of-a-trivial-smooth-vector-bundle-is-canonically-trivial]].

## Facts & Assumptions

**Given:** A smooth map $f:N\to\mathbb R^r$ and countable choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] Under $\mathrm{AC}_\omega$ the tangent bundle $T\mathbb R^r$ carries its canonical smooth $2r$-manifold structure, for which the induced tangent-bundle charts form a smooth atlas; for a chart $(U,x)$ the induced chart is $v\mapsto(x(p),v^1,\dots,v^r)$ with $v=\sum_iv^i\partial_{x^i}|_p$ ([[thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure]], [[def-induced-tangent-bundle-chart]]).

[F2] The pullback of the trivial rank-$r$ bundle $\varepsilon^r_{\mathbb R^r}$ along $f$ is canonically isomorphic to $\varepsilon^r_N$ ([[lem-pullback-of-a-trivial-smooth-vector-bundle-is-canonically-trivial]]).

## Proof

1.1 The identity $\operatorname{id}:\mathbb R^r\to\mathbb R^r$ is a smooth chart whose domain is all of $\mathbb R^r$, so by [F1] its induced tangent-bundle chart $\widetilde{\operatorname{id}}:T\mathbb R^r\to\mathbb R^r\times\mathbb R^r$, $v\mapsto(p,v^1,\dots,v^r)$, is a diffeomorphism onto $\mathbb R^r\times\mathbb R^r$; it is linear on every fibre. Hence it is a smooth bundle isomorphism $$T\mathbb R^r\longrightarrow\varepsilon^r_{\mathbb R^r}=\mathbb R^r\times\mathbb R^r,$$ the standard-coordinate identification. It is determined by the identity chart alone, so no choice is made in exhibiting it. [F1]

2.1 Pulling this identification back along $f$ gives a smooth bundle isomorphism $f^*T\mathbb R^r\cong f^*\varepsilon^r_{\mathbb R^r}$ over $N$, and [F2] gives a canonical isomorphism $f^*\varepsilon^r_{\mathbb R^r}\cong\varepsilon^r_N$ carrying the pulled-back constant frame to the standard frame. Composing, $$f^*T\mathbb R^r\cong f^*\varepsilon^r_{\mathbb R^r}\cong\varepsilon^r_N$$ canonically. The only choice principle used is $\mathrm{AC}_\omega$, inherited through [F1]; the pullback comparison of [F2] is choice-free, and the empty or disconnected case of $N$ is included since all maps displayed are evaluated fibrewise. [F1, F2, step 1.1] ∎
