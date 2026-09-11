---
id: "def-l-two-operator-conventions-for-weak-mixing"
kind: "definition"
title: "L two operator conventions for weak mixing"
deps: ["thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Axler 8B, 10A, 10C definitions; Example 10.5
      url: https://measure.axler.net/MIRA.pdf
provenance:
  statement: ai-altered
  proof: not-applicable
status: "draft"
origin: "pipeline"
---

## Definition

Let $H$ be a closed complex $L^2$ subspace with the first-variable-linear pairing of [[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]]. All operators below map $H$ to $H$ and are complex-linear. An operator $A$ is **bounded** if $\|Af\|\le C\|f\|$ for some finite $C\ge0$ and all $f\in H$; its norm is $\|A\|=\sup_{\|f\|\le1}\|Af\|$. It is **compact** if it is bounded and every bounded sequence $(f_n)$ has a subsequence $(f_{n_j})$ for which $(Af_{n_j})$ converges in norm to an element of $H$.

An **adjoint** $A^*$ is a bounded operator satisfying $\langle Af,g\rangle=\langle f,A^*g\rangle$ for all $f,g\in H$. Such an operator, if it exists, is unique: subtract two proposed identities and set $f$ equal to the difference of their values at $g$. Positive definiteness makes that difference zero. Existence is not assumed by this definition.

The operator $A$ is **self-adjoint** if $\langle Af,g\rangle=\langle f,Ag\rangle$ for all $f,g$. It is **positive** if $\langle Af,f\rangle$ is real and nonnegative for every $f$. Later positive self-adjoint assertions impose both conditions explicitly.

An **isometry** preserves the norm; for linear operators it also preserves the pairing. Indeed expansion of $\|f+g\|^2$ gives $2\operatorname{Re}\langle f,g\rangle=\|f+g\|^2-\|f\|^2-\|g\|^2$, and expansion of $\|f+ig\|^2$ gives $2\operatorname{Im}\langle f,g\rangle=\|f+ig\|^2-\|f\|^2-\|g\|^2$. Applying both identities before and after the isometry proves the assertion. A **unitary** is a surjective linear isometry.

A linear subspace $E$ is **invariant** for $U$ if $U(E)\subseteq E$. Write $f\perp E$ when $\langle f,e\rangle=0$ for every $e\in E$, and $E^\perp=\{f\in H:f\perp E\}$. These conventions allow $H=\{0\}$, $E=\{0\}$ and the zero operator. In the zero space the operator norm is zero because the unit ball is $\{0\}$. No infinite selection or assertion of an orthonormal basis enters these definitions.
