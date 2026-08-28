---
id: cex-exp-z-one-z-two-has-invertible-complex-jacobian-and-is-not-injective
kind: counterexample
title: "The map $(z_1,z_2)\\mapsto(e^{z_1},z_2)$ has invertible complex Jacobian everywhere and is not injective"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-holomorphic-map-and-complex-jacobian, thm-complex-exponential-addition-and-real-extension, thm-eulers-formula, def-pi-via-first-positive-cosine-zero, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Section 1.6"
      url: "https://jirilebl.github.io/scv/scv.pdf"
    - title: "Jiří Lebl, Guide to Cultivating Complex Analysis, Section 4.6"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: frontier-22
---

## Statement refuted

**Refuted claim:** a holomorphic map with everywhere-invertible complex
Jacobian must be injective.

## Facts & Assumptions

**Given:** The map $F(z_1,z_2)=(e^{z_1},z_2)$.

[L1] The complex Jacobian is computed from the complex differential ([[def-holomorphic-map-and-complex-jacobian]]).

[L2] The complex exponential satisfies $e^{z+w}=e^z e^w$, and $e^{i\pi}=-1$ ([[thm-complex-exponential-addition-and-real-extension]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

## Counterexample

**Proof technique:** direct.

1.1 The complex Jacobian of $F$ is $$J_{\mathbb C}F(z_1,z_2)=\begin{pmatrix} e^{z_1} & 0 \\ 0 & 1 \end{pmatrix},$$ so $$\det J_{\mathbb C}F(z_1,z_2)=e^{z_1}\ne0$$ for every $(z_1,z_2)$. [given, L1, algebra]

2.1 By [L2], $e^{2\pi i}=e^{i\pi}e^{i\pi}=(-1)(-1)=1$, so $$F(z_1+2\pi i,z_2)=(e^{z_1+2\pi i},z_2)=(e^{z_1},z_2)=F(z_1,z_2).$$ Thus distinct points have the same image, and $F$ is not injective despite step 1.1. [step 1.1, L2, algebra] ∎
