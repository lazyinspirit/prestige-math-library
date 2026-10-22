---
id: def-nrqmx-extension-data
kind: definition
title: Closed symmetric operators and deficiency data
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-symmetric-self-adjoint-and-essentially-self-adjoint
  - def-adjoint-of-a-densely-defined-unbounded-operator
  - def-unbounded-linear-operator-domain-and-graph
  - lem-unbounded-adjoint-is-well-defined-and-closed
  - def-deficiency-subspaces-and-deficiency-indices
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-unbounded-linear-operator-domain-and-graph: mathematical-premise
  lem-unbounded-adjoint-is-well-defined-and-closed: mathematical-premise
  def-deficiency-subspaces-and-deficiency-indices: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
      locator: "Section 2.6, printed pp.81–83: deficiency spaces and self-adjoint extension parameters"
    - title: "Ovidiu Costin, Functional Analysis and Elements of Resurgence Theory"
      url: "https://people.math.osu.edu/costin.9/7212-2020/FA1.pdf"
      locator: "Section 11.3, printed pp.82–83: deficiency spaces, graph decomposition, and von Neumann's theorem"
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Definition

Assume the Axiom of Choice and Countable Choice. Let $H$ be a complex Hilbert
space and let $S:D(S)\to H$ be a densely defined, closed, symmetric linear
operator. The domain $D(S)$ is part of the operator data. Its adjoint is the
operator $S^*:D(S^*)\to H$ characterized by
$\langle Sf,g\rangle=\langle f,S^*g\rangle$ for every $f\in D(S)$ and
$g\in D(S^*)$, using an inner product linear in its first argument. A **graph
core** for $S$ is a linear subspace $C\subseteq D(S)$ dense for the graph norm
$\|f\|_S=(\|f\|^2+\|Sf\|^2)^{1/2}$; equivalently, the graph of the restriction
$S|_C$ is dense in the graph of $S$.

Fix a positive scalar $E_*$ and write $I_H$ for the identity on $H$. The
**scaled deficiency subspaces** of $S$ at $E_*$ are
$N_+(S;E_*):=\ker(S^*-iE_*I_H)$ and
$N_-(S;E_*):=\ker(S^*+iE_*I_H)$. Their **deficiency indices** are
$n_\pm(S;E_*):=\dim N_\pm(S;E_*)$, where Hilbert dimension means the
cardinality of an orthonormal basis as in the standard deficiency-index
definition. The spaces are closed: if $g_k\in N_\pm(S;E_*)$ and $g_k\to g$,
then $S^*g_k=\pm iE_*g_k\to\pm iE_*g$, so closedness of $S^*$ gives
$g\in D(S^*)$ and $S^*g=\pm iE_*g$. The dimension convention is well defined
under Choice by the cited deficiency-index definition.

For any specified linear trace map $\gamma:D(S^*)\to B$ into a vector space
$B$ and specified linear subspace $\Lambda\subseteq B$, the restriction of
$S^*$ to $\{f\in D(S^*):\gamma(f)\in\Lambda\}$ is the boundary realization
specified by $(\gamma,\Lambda)$. Its domain and trace data are part of the
operator realization; the differential expression alone is not.

## Definition references

[[def-symmetric-self-adjoint-and-essentially-self-adjoint]]

[[def-adjoint-of-a-densely-defined-unbounded-operator]]

[[def-unbounded-linear-operator-domain-and-graph]]

[[lem-unbounded-adjoint-is-well-defined-and-closed]]

[[def-deficiency-subspaces-and-deficiency-indices]]


