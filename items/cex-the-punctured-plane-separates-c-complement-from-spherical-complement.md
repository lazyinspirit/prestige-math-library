---
id: cex-the-punctured-plane-separates-c-complement-from-spherical-complement
kind: counterexample
title: "The punctured plane has connected complement in C but disconnected spherical complement"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-spherical-complement-characterization-of-plane-simple-connectivity,
       cor-winding-number-classifies-loops-in-the-punctured-plane]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Exercise 4.3.1"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 3, §6"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Statement refuted

A connected complex domain with connected complement in $\mathbb C$ is simply
connected.

## Facts & Assumptions

**Given:** The punctured plane $\Omega=\mathbb C^\times$.

[L1] Assuming the Axiom of Choice, a plane domain is simply connected exactly when its spherical complement is connected ([[cor-spherical-complement-characterization-of-plane-simple-connectivity]]).

[L2] The fundamental group of $\mathbb C^\times$ is $\mathbb Z$, detected by winding number ([[cor-winding-number-classifies-loops-in-the-punctured-plane]]).

## Counterexample

**Proof technique:** direct.

1.1 The complement of $\Omega$ in $\mathbb C$ is the singleton $\{0\}$, hence connected. But the spherical complement is $$\widehat{\mathbb C}\setminus\Omega=\{0,\infty\},$$ which is disconnected. [given]

2.1 Assuming the Axiom of Choice, [L1] makes the disconnected spherical complement from step 1.1 enough to conclude that $\Omega$ is not simply connected. Fact [L2] records the same failure independently as the nontrivial group $\pi_1(\mathbb C^\times)\cong\mathbb Z$. [step 1.1, L1, L2]

3.1 Therefore connected complement in $\mathbb C$ does not imply simple connectivity. [step 1.1, step 2.1] ∎
