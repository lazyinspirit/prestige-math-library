---
id: ex-the-slit-plane-is-simply-connected-by-the-principal-logarithm
kind: example
title: "Assuming the Axiom of Choice, the slit plane is simply connected"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-spherical-complement-characterization-of-plane-simple-connectivity]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 3, §6"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Example

Assume the Axiom of Choice. Let

$$\Omega=\mathbb C\setminus(-\infty,0].$$

Then $\Omega$ is simply connected.

## Facts & Assumptions

**Given:** The Axiom of Choice and the slit plane $\Omega=\mathbb C\setminus(-\infty,0]$.

[L1] Assuming the Axiom of Choice, a plane domain is simply connected exactly when its spherical complement is connected ([[cor-spherical-complement-characterization-of-plane-simple-connectivity]]).

## Verification

**Proof technique:** direct.

1.1 The spherical complement of $\Omega$ is $$\widehat{\mathbb C}\setminus\Omega=(-\infty,0]\cup\{\infty\},$$ which is connected: it is the closure in $\widehat{\mathbb C}$ of one arc from $0$ to $\infty$. [given, algebra]

2.1 Therefore [L1] makes $\Omega$ simply connected. [step 1.1, L1] ∎
