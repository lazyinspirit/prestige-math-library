---
id: def-se-foundation-distributional-equation
kind: definition
domain: mathematics
title: Distributional equation convention for complex Schrödinger solutions
status: published
deps:
  - math:def-test-function-space-d-of-an-open-set
  - math:def-test-function-topology
  - math:def-distribution
  - math:def-distributional-derivative
dependency_roles:
  math:def-test-function-space-d-of-an-open-set: mathematical-premise
  math:def-test-function-topology: mathematical-premise
  math:def-distribution: mathematical-premise
  math:def-distributional-derivative: mathematical-premise
provenance:
  statement: ai-generated
  proof: not-applicable
dependency_level: 0
---

## Definition

Let $Q\subseteq\mathbb R^{1+n}$ be open, with $n\geq 1$; its first coordinate is time $t$ and the remaining coordinates are space $x=(x_1,\ldots,x_n)$. A test function on $Q$ is a complex-valued smooth function with compact support in $Q$; write $\mathcal D(Q)=C_c^\infty(Q;\mathbb C)$ and equip it with the test-function topology. A complex distribution on $Q$ is a continuous complex-linear functional on $\mathcal D(Q)$; its value on $\eta$ is written $\langle u,\eta\rangle$. The pairing is linear in both entries, with no conjugation of the test function. The space of these functionals is $\mathcal D'(Q)$.

For a multi-index $\alpha$ in the space-time coordinates, the distributional derivative is defined by $\langle\partial^\alpha u,\eta\rangle=(-1)^{|\alpha|}\langle u,\partial^\alpha\eta\rangle$. Here $|\alpha|$ is the sum of the entries of $\alpha$. The spatial Laplacian is $\Delta_x u=\sum_{j=1}^n\partial_{x_j}^2u$.

If $u,F\in\mathcal D'(Q)$, the equation $i\partial_tu+\Delta_xu=F$ holds **in distributions on $Q$** precisely when $\langle i\partial_tu+\Delta_xu,\eta\rangle=\langle F,\eta\rangle$ for every $\eta\in\mathcal D(Q)$. The same convention applies to an equation with additional terms, provided each term has independently been specified as a distribution. In particular, a nonlinear expression is included only when the chosen solution class makes it a distribution.

This interior space-time identity asserts neither existence of an initial value or boundary trace nor any regularity or local integrability of a nonlinear expression. Such properties and conditions require separate hypotheses. The bilinear distribution pairing is distinct from any conjugated Hilbert-space or antidual pairing.

## Definition references

[[math:def-test-function-space-d-of-an-open-set]]

[[math:def-test-function-topology]]

[[math:def-distribution]]

[[math:def-distributional-derivative]]

## Justification

The test functions and their topology give the domain of the continuous linear functionals in [[math:def-distribution]]. By [[math:def-distributional-derivative]], each specified derivative is again a distribution; finite sums and scalar multiples of distributions are distributions. Consequently both sides of the displayed equation are functionals on the same test space, and equality on every test function is a well-defined equality in $\mathcal D'(Q)$. This construction does not establish that a proposed nonlinear expression defines a distribution.
