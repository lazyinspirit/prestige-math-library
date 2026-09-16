---
id: rem-gerlits-nagy-remains-selection-principle-theory
kind: remark
title: Gerlits Nagy remains selection principle theory
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
proved_here: false
deps: []
justified_by: []
external_refs: [rem-gerlits-nagy]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "S. Gabriyelyan and A. Osipov, Topological properties of some function spaces (2020) — Theorem 1.3, p. 2, and §2.1 definitions, p. 5; the paper states the equivalence and cites the original proof"
      url: "https://arxiv.org/pdf/2004.05321"
external_dependency:
  source_url: "https://arxiv.org/pdf/2004.05321"
  exact_statement: "For a Tychonoff space X the following are equivalent: C_p(X) is Fréchet–Urysohn; C_p(X) is sequential; C_p(X) is a k-space; X has the γ-property, where an ω-cover is an open cover of X not containing X such that every finite subset of X is contained in some member, a γ-cover is an infinite open cover such that every point of X belongs to all but finitely many members, and the γ-property requires every open ω-cover to contain a γ-subcover."
  local_proof_attempt: "No local proof is attempted. The inspected survey states the four-way equivalence and sends the reader to the original literature for the proof, so the convention chain for ω-covers, γ-covers and the function-space topologies was not resolved here; the draft target [[rem-gerlits-nagy]] remains Recorded."
  necessity: "None for this pair: the statement is orientation only and appears in no proof, dependency or well-definedness justification on this page."
---

## Statement

For a Tychonoff space $X$ the following are equivalent: $C_p(X)$ is
Fréchet–Urysohn; $C_p(X)$ is sequential; $C_p(X)$ is a $k$-space; and $X$ has
the $\gamma$-property, in the sense that every open $\omega$-cover of $X$
contains a $\gamma$-subcover. Here an **$\omega$-cover** is an open cover of $X$
not containing $X$ as a member such that every finite subset of $X$ is contained
in some member, and a **$\gamma$-cover** is an infinite open cover such that
every point of $X$ belongs to all but finitely many members.

This result is **recorded, not proved here**, and it is not used anywhere in this
pair; the selection-principle theory is not part of the Gelfand programme on this
page. The draft target is [[rem-gerlits-nagy]].

## Remarks

- **Orientation only.** The remark exists so that the four-way equivalence is not silently attributed to the Gelfand-theoretic machinery of this page.
- **Open obligation for the catalogue.** Obtaining and inspecting the complete original proof, or an equivalent complete treatment, and aligning the selection-principle conventions is a repair obligation on the draft target.
