---
id: cor-uniqueness-of-the-normalized-riemann-map
kind: corollary
title: "The normalized Riemann map is unique"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-riemann-mapping-theorem, thm-unit-disc-schwarz-lemma-with-rigidity, thm-chain-rule-for-complex-derivatives]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Matthias Weber, Complex Analysis, Theorem 5.2.6"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Walter Rudin, Real and Complex Analysis, Theorem 14.9"
      url: "https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---

## Statement

Let $\Omega\subsetneq\mathbb C$ be homologically simply connected and let
$z_0\in\Omega$. If $f,g:\Omega\to\mathbb D$ are biholomorphic and satisfy

$$f(z_0)=g(z_0)=0,\qquad f'(z_0)>0,\qquad g'(z_0)>0,$$

then $f=g$.

## Facts & Assumptions

**Given:** Two normalized biholomorphisms $f,g:\Omega\to\mathbb D$ as in the statement.

[L1] Such maps exist by the Riemann mapping theorem ([[thm-riemann-mapping-theorem]]).

[L2] A holomorphic self-map of $\mathbb D$ fixing $0$ is a rotation, and equality in Schwarz's lemma is exactly the rotational case ([[thm-unit-disc-schwarz-lemma-with-rigidity]]).

[L3] Complex derivatives satisfy the chain rule ([[thm-chain-rule-for-complex-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 The composite $h:=g\circ f^{-1}$ is a biholomorphic self-map of $\mathbb D$, and $h(0)=0$ because both maps send $z_0$ to $0$. Thus [L2] gives $h(\zeta)=e^{i\theta}\zeta$ for some real $\theta$. [L1, L2, given]

2.1 Differentiate the identity $g=h\circ f$ at $z_0$. By [L3], $$g'(z_0)=h'(0)f'(z_0)=e^{i\theta}f'(z_0).$$ Since both displayed derivatives in the statement are positive real numbers, $e^{i\theta}=1$. [L3, step 1.1, algebra]

3.1 Hence $h$ is the identity on $\mathbb D$, so $g=h\circ f=f$. [step 1.1, step 2.1] ∎
