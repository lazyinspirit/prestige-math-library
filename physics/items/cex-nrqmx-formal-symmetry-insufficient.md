---
id: cex-nrqmx-formal-symmetry-insufficient
kind: counterexample
title: A symmetric operator need not have a self-adjoint extension
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - thm-nrqmx-half-line-momentum-obstruction
  - lem-nrqm-intervals-integration-by-parts
  - thm-stone-one-parameter-unitary-groups
  - def-strongly-continuous-one-parameter-unitary-group
  - def-symmetric-self-adjoint-and-essentially-self-adjoint
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
dependency_roles:
  thm-nrqmx-half-line-momentum-obstruction: mathematical-premise
  lem-nrqm-intervals-integration-by-parts: mathematical-premise
  thm-stone-one-parameter-unitary-groups: mathematical-premise
  def-strongly-continuous-one-parameter-unitary-group: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
      locator: "Section 2.6, printed pp.81–83: symmetric derivative operators and unequal deficiency indices"
    - title: "Ovidiu Costin, Functional Analysis and Elements of Resurgence Theory"
      url: "https://people.math.osu.edu/costin.9/7212-2020/FA1.pdf"
      locator: "Section 11.3, printed pp.82–84: von Neumann criterion and unequal-index obstruction"
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement refuted

Let $H$ be a complex Hilbert space and let $T:D(T)\to H$ be a densely defined symmetric linear operator. The false assertion is that there is a self-adjoint operator $A:D(A)\to H$ on the same Hilbert space with $D(T)\subseteq D(A)$ and $Af=Tf$ for every $f\in D(T)$. By Stone's theorem, such an $A$ would generate a strongly continuous one-parameter unitary group $U(t)=e^{itA}$ on $H$.

## Statement references

[[def-symmetric-self-adjoint-and-essentially-self-adjoint]]

[[thm-stone-one-parameter-unitary-groups]]

## Facts & Assumptions

**Given:** The half-line operator and Hilbert space of [[thm-nrqmx-half-line-momentum-obstruction]].

[A1] The Axiom of Choice, Countable Choice, and Dependent Choice are the hypotheses of the half-line and integration-by-parts suppliers ([[def-axiom-of-choice]], [[def-countable-choice]], [[def-dependent-choice]]).

[F1] The closure of $-iD$ initially on $C_c^\infty(0,\infty)$ has deficiency indices $(1,0)$ and no self-adjoint extension on $L^2(0,\infty;\mathbb C)$ ([[thm-nrqmx-half-line-momentum-obstruction]]).

[F2] For compactly supported smooth $f,g$ on $(0,\infty)$, clause (d) of [[lem-nrqm-intervals-integration-by-parts]] (or integration by parts on a bounded interval containing their supports) gives $\langle -iDf,g\rangle=\langle f,-iDg\rangle$.

[F3] Stone's theorem says a strongly continuous one-parameter unitary group has a self-adjoint generator, and every self-adjoint operator generates such a group ([[def-strongly-continuous-one-parameter-unitary-group]], [[thm-stone-one-parameter-unitary-groups]]).

[F4] A self-adjoint operator is closed, and every closed extension of a closable operator contains its least closed extension ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]]).

## Counterexample

**Given:** Let $S_c=-iD$ on $C_c^\infty(0,\infty)$, with values in $L^2(0,\infty;\mathbb C)$.

1.1 By [F2], for all test functions $f,g$, $\langle S_cf,g\rangle=\langle f,S_cg\rangle$; thus the test-domain operator is symmetric. [A1, F2]

1.2 The same operator's closure has unequal deficiency indices $(1,0)$, so by [F1] it has no self-adjoint extension on the same Hilbert space. Thus symmetry on the core does not guarantee a self-adjoint realization. [A1, F1]

2.1 If a strongly continuous unitary one-parameter group had a self-adjoint generator $T$ extending $S_c$, Stone's theorem [F3] supplies that self-adjointness. By [F4], $T$ is closed and contains the least closed extension $\overline S_c$: explicitly, every point of the graph of $\overline S_c$ is a limit of graph points of $S_c$, and the closed graph of $T$ contains each such limit. This contradicts [F1], which says $\overline S_c$ has no self-adjoint extension. Thus the proposed general claim fails for this operator while its integration-by-parts symmetry hypothesis holds. [A1, F1, F3, F4, step 1.2] ∎
