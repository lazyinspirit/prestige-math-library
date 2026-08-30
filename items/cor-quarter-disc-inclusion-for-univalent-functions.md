---
id: cor-quarter-disc-inclusion-for-univalent-functions
kind: corollary
title: "A quarter-disc inclusion at every point of a univalent disc map"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-univalent-holomorphic-function, thm-blaschke-factor-is-a-disc-automorphism, thm-koebe-one-quarter-theorem]
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  references:
    - title: "Walter Rudin, Real and Complex Analysis, Theorem 14.15"
      url: "https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
    - title: "Matthias Weber, Complex Analysis, Theorem 7.5.8"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
---

## Statement

Let $f:\mathbb D\to\mathbb C$ be holomorphic and univalent, and let
$a\in\mathbb D$. Then

$$D\!\left(f(a),\frac{(1-|a|^2)|f'(a)|}{4}\right)\subset f(\mathbb D).$$

## Facts & Assumptions

**Given:** A holomorphic univalent map $f:\mathbb D\to\mathbb C$ and a point $a\in\mathbb D$.

[L1] For each $a\in\mathbb D$, the Blaschke factor $\varphi_a$ is a disc automorphism ([[thm-blaschke-factor-is-a-disc-automorphism]]).

[L2] Every normalized univalent disc map contains the quarter disc ([[thm-koebe-one-quarter-theorem]]).

## Proof

**Proof technique:** direct.

1.1 Define $$g(\zeta):=\frac{f(\varphi_a(\zeta))-f(a)}{-(1-|a|^2)f'(a)}.$$ By [L1], the map $\varphi_a$ is an automorphism of $\mathbb D$ with $\varphi_a(0)=a$ and $\varphi_a'(0)=-(1-|a|^2)$, so $g$ is holomorphic and univalent on $\mathbb D$, with $g(0)=0$ and $g'(0)=1$. [L1, given, algebra]

2.1 Thus $g\in\mathcal S$, and [L2] gives $D(0,1/4)\subset g(\mathbb D)$. Multiplying by the affine factor from step 1.1 and translating back yields $$D\!\left(f(a),\frac{(1-|a|^2)|f'(a)|}{4}\right)\subset f(\mathbb D).$$ [L2, step 1.1, algebra] ∎
