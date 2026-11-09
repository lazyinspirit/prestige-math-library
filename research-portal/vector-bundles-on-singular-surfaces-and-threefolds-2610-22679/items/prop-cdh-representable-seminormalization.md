---
id: prop-cdh-representable-seminormalization
kind: proposition
title: Representable cdh sheaves and seminormalization
status: draft
domain: mathematics
deps:
  - def-cdh-topology-interface
  - def-seminormal-scheme-interface
  - lem-author-60d95bfb692a-subintegral-sheaf-invariance
  - thm-author-60d95bfb692a-huber-kelly-representable-input
dependency_roles:
  def-cdh-topology-interface: mathematical-premise
  def-seminormal-scheme-interface: mathematical-premise
  lem-author-60d95bfb692a-subintegral-sheaf-invariance: mathematical-premise
  thm-author-60d95bfb692a-huber-kelly-representable-input: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Vector bundles on singular surfaces and threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF p. 5, proof of Lemma 2.4
      reading_limits: The claim and its use in the supplied article extraction were inspected.
    - title: "Differential forms in positive characteristic, II: cdh-descent via
        functorial Riemann–Zariski spaces"
      url: https://msp.org/ant/2018/12-3/ant-v12-n3-p05-p.pdf
      locator: Theorem 1.4, printed pp. 651–652
      reading_limits: The theorem statement was inspected; its proof was not read or
        reconstructed.
proof_strategy: direct
dependency_level: 12
---

## Statement
Let $k$ be a perfect field, and let $X,Y$ be separated finite-type $k$-schemes. Write $h_Y(Z)=\operatorname{Hom}_k(Z,Y)$ and $h_Y^{\mathrm{cdh}}$ for its sheafification on the big cdh site of separated finite-type $k$-schemes. Then there is a natural bijection
$$h_Y^{\mathrm{cdh}}(X)\cong\operatorname{Hom}_k(X^{\mathrm{sn}},Y).$$
If $X$ is seminormal, this identifies $h_Y^{\mathrm{cdh}}(X)$ with $\operatorname{Hom}_k(X,Y)$.

A perfect field is one for which every algebraic extension is separable. A finite-type $k$-scheme has a finite affine cover by spectra of finitely generated $k$-algebras; separatedness means its diagonal is a closed immersion. The cdh topology and sheafification are those in [[def-cdh-topology-interface]], and the seminormalization $X^{\mathrm{sn}}\to X$ is the subintegral map with seminormal source described in [[def-seminormal-scheme-interface]]. A subintegral map is integral, bijective on points and induces residue-field isomorphisms.

## Facts & Assumptions

**Given:** A perfect field $k$ and separated finite-type $k$-schemes $X,Y$.

**Goal:** Establish the displayed bijection and its seminormal specialization.

[F1] The Huber–Kelly external input gives the displayed natural bijection for separated finite-type schemes over a noetherian Nagata base. It explicitly includes the spectrum of a perfect field among such bases. [[thm-author-60d95bfb692a-huber-kelly-representable-input]]

[F2] For a finite-type scheme over a field, its seminormalization is subintegral, has seminormal source and is finite over the reduction. A reduced seminormal scheme admits no nontrivial finite subintegral morphism from a reduced scheme. [[def-seminormal-scheme-interface]]

[F3] A set-valued cdh sheaf sends finite subintegral morphisms of separated finite-type schemes to bijections. [[lem-author-60d95bfb692a-subintegral-sheaf-invariance]]

## Proof

**Proof technique:** Apply the imported theorem and then specialize its source.

1.1 The base $S=\operatorname{Spec}k$ satisfies the hypotheses of [F1], and $X,Y$ satisfy its separated finite-type hypotheses. Applying [F1] gives the displayed natural bijection. [F1, given]

1.2 Suppose $X$ is seminormal. It is reduced by [F2], so its seminormalization is a finite subintegral map from a reduced scheme to $X$. The finite-morphism criterion in [F2] makes $X^{\mathrm{sn}}\to X$ an isomorphism. Precomposition with its inverse therefore identifies $\operatorname{Hom}_k(X^{\mathrm{sn}},Y)$ with $\operatorname{Hom}_k(X,Y)$. [F2, given]

2.1 The map $X^{\mathrm{sn}}\to X$ also induces a bijection on sections of any cdh sheaf by [F3]; this records the descent compatibility used in the specialization. Combining steps 1.1 and 1.2 proves both assertions. [F3, step 1.1, step 1.2] ∎
