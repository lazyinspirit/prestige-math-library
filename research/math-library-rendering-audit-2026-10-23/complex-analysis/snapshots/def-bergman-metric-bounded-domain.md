---
id: def-bergman-metric-bounded-domain
kind: definition
title: The Bergman metric form on a bounded domain
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 6
deps:
  - def-bergman-space-and-kernel
  - def-countable-choice
  - def-levi-form-and-strict-plurisubharmonicity
  - def-wirtinger-operators-in-several-complex-variables
  - thm-clairaut-schwarz-mixed-partials
  - lem-bergman-kernel-smoothness-and-positive-diagonal
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: "2026-10-08"
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: Zbigniew Błocki, The Bergman Kernel and Metric
      url: https://gamma.im.uj.edu.pl/~blocki/publ/ln/bergman.pdf
      locator: >-
        §1, printed p. 4 (PDF p. 3): definition of B²_Ω(z;X) as the Levi
        form of log K_Ω(z,z), with its displayed coordinate expression. The
        surrounding §1 assumes bounded domains; the local smoothness and
        positivity supplier establishes that log K_Ω(z,z) is defined and
        smooth for every bounded domain in this library's conventions.
---

## Definition

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$
([[def-countable-choice]]), let $m\ge1$, and let $\Omega\subseteq\mathbb C^m$
be a bounded domain, meaning a nonempty connected open set. Use the
first-variable-linear Bergman kernel $K_\Omega$ of
[[def-bergman-space-and-kernel]]. By
[[lem-bergman-kernel-smoothness-and-positive-diagonal]],
$$u_\Omega(z):=\log K_\Omega(z,z)$$
is a real-valued $C^\infty$ function on $\Omega$.

Using the one-based coordinate aliases for the library's zero-based
coordinates from [[def-levi-form-and-strict-plurisubharmonicity]], define the
**Bergman metric form** at $z\in\Omega$ by the Hermitian form
$$g_\Omega(z)(X,Y):=\sum_{j,k=1}^m\frac{\partial^2 u_\Omega}{\partial z_j\partial\overline z_k}(z)X_j\overline{Y_k},\qquad X,Y\in\mathbb C^m.$$
Because $u_\Omega$ is real-valued and $C^2$, expanding the Wirtinger operators and commuting real mixed partials gives $\overline{g_{j\bar k}}=g_{k\bar j}$ ([[def-wirtinger-operators-in-several-complex-variables]], [[thm-clairaut-schwarz-mixed-partials]]), so this form is Hermitian. Its associated quadratic form is
$$B^2_\Omega(z;X):=g_\Omega(z)(X,X),$$
the Levi form of $u_\Omega$ at $z$; write its matrix as
$g_\Omega(z)=(g_{j\bar k}(z))$. The pair $(\Omega,g_\Omega)$ is the Bergman
(pseudo-)metric. This definition does not assert positive definiteness; the
separate positivity theorem on this page proves it for bounded domains.

## Remarks

The $\mathrm{AC}_\omega$ assumption is inherited through the Bergman
Hilbert-space/Riesz construction and its smoothness/positive-diagonal supplier.
The definition itself makes no additional selections and uses no full Axiom of
Choice.
