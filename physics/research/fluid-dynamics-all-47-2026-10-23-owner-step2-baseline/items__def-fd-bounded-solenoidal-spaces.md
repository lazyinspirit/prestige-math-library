---
id: def-fd-bounded-solenoidal-spaces
kind: definition
title: Bounded no-slip solenoidal closure spaces
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: [def-sobolev-space-wkp-and-its-norm, def-wkp-zero-as-a-sobolev-closure, def-weak-derivative-of-a-locally-integrable-function, def-distributional-derivative, lem-zero-extension-from-w-one-p-zero, def-countable-choice]
dependency_roles:
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-wkp-zero-as-a-sobolev-closure: mathematical-premise
  def-weak-derivative-of-a-locally-integrable-function: mathematical-premise
  def-distributional-derivative: mathematical-premise
  lem-zero-extension-from-w-one-p-zero: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "L. C. Berselli and S. Spirito, On the Existence of Leray–Hopf Weak Solutions to the Navier–Stokes Equations, Fluids 6(1), 42 (2021)"
      url: "https://www.mdpi.com/2311-5521/6/1/42/pdf"
      locator: "§§2.1–2.2, printed pp. 4–5; their domains have additional boundary regularity."
    - title: "Leonid Ryzhik, Math 256B Lecture Notes, version 2024"
      url: "https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf"
      locator: "§5.2, printed pp. 39–43, for the divergence-free energy-space convention."
---

## Definition

Let $\Omega\subset\mathbb R^3$ be a nonempty bounded open set. Let
$C_c^\infty(\Omega;\mathbb R^3)$ denote smooth compactly supported vector
fields and set
$$D_\sigma(\Omega)=\{a\in C_c^\infty(\Omega;\mathbb R^3):\operatorname{div}a=0\}.$$
Let $H$ be the closure of $D_\sigma(\Omega)$ in
$L^2(\Omega;\mathbb R^3)$, and let $V$ be its closure in
$H_0^1(\Omega;\mathbb R^3)$, where $H_0^1$ is the $H^1$ closure of
$C_c^\infty(\Omega;\mathbb R^3)$ and weak derivatives define the $H^1$
norm. Use $\|a\|_H=\|a\|_2$ and
$\|a\|_V^2=\|a\|_2^2+\|\nabla a\|_2^2$. Each $V$ element has zero
extension in $H^1(\mathbb R^3)$ and distributional divergence zero. This
closure definition does not identify $V$ with every divergence-free member
of $H_0^1(\Omega;\mathbb R^3)$ on an arbitrary open set, and it makes no
pointwise boundary trace assertion.

## Definition references

[Berselli and Spirito, *On the Existence of Leray–Hopf Weak Solutions*, §§2.1–2.2, pp. 4–5](https://www.mdpi.com/2311-5521/6/1/42/pdf).

[Leonid Ryzhik, *Math 256B Lecture Notes*, §5.2, pp. 39–43](https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf).

## Facts & Assumptions

**Given:** A nonempty bounded open $\Omega\subset\mathbb R^3$ and the Sobolev and weak-derivative conventions in the Definition.

[F1] [[def-sobolev-space-wkp-and-its-norm]] and [[def-wkp-zero-as-a-sobolev-closure]]: $H^1$ classes have $L^2$ weak derivatives, and $H_0^1$ is the closure of compactly supported smooth functions in the Sobolev norm.

[F2] [[def-weak-derivative-of-a-locally-integrable-function]] and [[def-distributional-derivative]]: weak derivatives agree with distributional derivatives when represented by locally integrable functions.

[F3] [[lem-zero-extension-from-w-one-p-zero]]: under Countable Choice, zero extension maps $H_0^1(\Omega)$ into $H^1(\mathbb R^3)$ and preserves weak derivatives.

## Proof

1.1 The set $D_\sigma(\Omega)$ is a real vector subspace because the divergence operator is linear and sums and scalar multiples of compactly supported smooth fields remain compactly supported and smooth. Its closures in the two stated norms are therefore linear subspaces and define the sets $H$ and $V$ without a boundary trace convention. [given, F1, F2, algebra]

2.1 If $a_n\in D_\sigma$ converges to $a\in V$ in $H_0^1$, then [F3] makes their zero extensions converge in $H^1(\mathbb R^3)$ and preserves their derivatives. Their distributional divergences converge to $\operatorname{div}a$ when paired with any compact smooth scalar test by [F2]. Since each $\operatorname{div}a_n=0$, the limit divergence is zero, and the zero extension represents the $H^1$ limit. This verifies the final properties in the Definition without claiming a converse density theorem. [given, F1, F2, F3, step 1.1] ∎

