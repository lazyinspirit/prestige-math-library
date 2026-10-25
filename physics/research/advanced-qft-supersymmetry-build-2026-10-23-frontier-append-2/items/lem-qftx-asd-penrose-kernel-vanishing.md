---
id: lem-qftx-asd-penrose-kernel-vanishing
kind: lemma
title: Conditional Penrose vanishing from positive scalar curvature
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-adhm-zero-fi-asd-correspondence
dependency_level: 6
deps:
  - thm-qftx-framed-penrose-ward-correspondence-on-s4
  - lem-qftx-round-s4-positive-scalar-kernel-vanishes
dependency_roles:
  thm-qftx-framed-penrose-ward-correspondence-on-s4: mathematical-premise
  lem-qftx-round-s4-positive-scalar-kernel-vanishes: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Simon K. Donaldson, The ADHM construction of Yang-Mills instantons"
      url: https://arxiv.org/pdf/2205.08639
      locator: "§5, printed p. 8: the claimed Penrose transform to the coupled conformally invariant Laplace equation; full transform proof remains a separate local obligation."
verification:
  precheck: pass
---

## Statement

Let $A$ be a smooth framed anti-self-dual unitary connection on the specified round oriented $S^4$, and let $\mathcal E$ be its holomorphic Ward bundle on $Z=\mathbb C\mathbb P^3$. Suppose the following conditional Penrose-transform input is supplied for both $\mathcal E$ and its dual $\mathcal E^\vee$: there are injective linear maps

$$\mathcal P_{\mathcal E}:H^1(Z,\mathcal E(-2))\longrightarrow\{s\in\Gamma(E):(\nabla_A^*\nabla_A+R/8)s=0\},$$

and the analogous map for $\mathcal E^\vee$, where $R>0$ is the scalar curvature of the round metric and the target connection is the induced unitary connection. Then

$$H^1(Z,\mathcal E(-2))=H^1(Z,\mathcal E^\vee(-2))=0.$$

This is a conditional vanishing result; it does not assert or prove the Penrose-transform input.

## Statement references

[[thm-qftx-framed-penrose-ward-correspondence-on-s4]]

[[lem-qftx-round-s4-positive-scalar-kernel-vanishes]]

## Facts & Assumptions

**Given:** The Ward bundle and framed ASD connection, the two injective Penrose maps stated in the Statement, and the positive scalar curvature of the round $S^4$.

[F1] The Ward transform associates a holomorphic bundle on $Z$ to a framed unitary ASD connection on $S^4$. [[thm-qftx-framed-penrose-ward-correspondence-on-s4]]

[F2] A smooth section solving $(\nabla^*\nabla+R/8)s=0$ on the round $S^4$ vanishes when $R/8>0$. [[lem-qftx-round-s4-positive-scalar-kernel-vanishes]]

## Proof

1.1 Let $\xi\in H^1(Z,\mathcal E(-2))$. By the assumed injective map $\mathcal P_{\mathcal E}$, its image is a smooth section solving the coupled equation in the Statement. Since $R/8>0$, [F2] makes that image zero, and injectivity gives $\xi=0$. Thus $H^1(Z,\mathcal E(-2))=0$. [given, F1, F2, algebra]

2.1 Apply the same argument to $\xi^\vee\in H^1(Z,\mathcal E^\vee(-2))$ and the assumed injective map $\mathcal P_{\mathcal E^\vee}$; [F2] gives a zero image and injectivity gives $\xi^\vee=0$. Hence $H^1(Z,\mathcal E^\vee(-2))=0$, proving both asserted vanishings conditional on the specified transforms. [given, F1, F2, step 1.1, algebra] ∎
