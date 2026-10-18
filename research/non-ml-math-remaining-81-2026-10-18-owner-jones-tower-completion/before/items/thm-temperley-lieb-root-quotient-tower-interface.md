---
id: thm-temperley-lieb-root-quotient-tower-interface
kind: theorem
title: "A positive-root quotient tower inherits expectation and path branching under an explicit identification"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
  - lem-temperley-lieb-diagram-tower-conditional-expectation-identities
  - lem-temperley-lieb-right-closure-preserves-trace-radical
  - def-temperley-lieb-type-a-path-spaces-and-matrix-unit-tower
  - thm-temperley-lieb-type-a-path-space-tower-branching
justified_by: []
aliases: []
verification:
  precheck: pass
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Vaughan F. R. Jones, Planar Algebras, I"
      url: "https://arxiv.org/pdf/math/9909027"
      locator: "§4.1, printed pp. 81–92: finite-index tower and path-graph representation context; the result here is only the stated conditional transport."
    - title: "David Penneys, Exercises in Quantum Algebra"
      url: "https://people.math.osu.edu/penneys.2/archive/QuantumAlgebra.pdf"
      locator: "§4.2, PDF pp. 31–32: path-space branching context."
---

## Statement

Let $J_n$ be the trace-pairing radical of $\mathrm{TL}_n(\mathbb C,\delta)$ for a fixed $\delta\ne0$, and let $Q_n=\mathrm{TL}_n/J_n$. Suppose a specified quotient tower $R_n$ is given with isomorphisms $\phi_n:Q_n\to R_n$ that intertwine the inclusion maps and the normalized right-closure maps. Suppose also that the retained simple $R_n$-modules, transported by $\phi_n$, are exactly the endpoint modules $V_{n,a}$ of the $A_{\ell-1}$ path-space tower from [[def-temperley-lieb-type-a-path-spaces-and-matrix-unit-tower]]. Then right closure is well-defined on the quotient tower, and restriction of each endpoint module at level $n+1$ branches with multiplicity one over adjacent vertices at level $n$. This is a conditional interface theorem; it does not assert that a particular positive-root quotient satisfies its hypotheses.

## Facts & Assumptions

**Given:** $\delta\ne0$, the trace-pairing radicals $J_n$, the quotient algebras $Q_n$, the compatible tower identifications $\phi_n$, and the stated identification of retained modules with the type-A path modules.

[F1] Inclusion and normalized right closure preserve the radicals: $\iota_n(J_n)\subseteq J_{n+1}$ and $E_n(J_{n+1})\subseteq J_n$. ([[lem-temperley-lieb-right-closure-preserves-trace-radical]])

[F2] Under the explicitly assumed tower identifications, the retained simple modules are the endpoint modules $V_{n,a}$ with their specified predecessor actions. ([[def-temperley-lieb-type-a-path-spaces-and-matrix-unit-tower]])

[F3] Restricting $V_{n+1,b}$ to the type-A tower gives one copy of $V_{n,a}$ for each adjacent predecessor $a$ of $b$. ([[thm-temperley-lieb-type-a-path-space-tower-branching]])

## Proof

**Given:** The hypotheses in the statement.

1.1 Define $\bar\iota_n([x])=[\iota_n(x)]$ and $\bar E_n([x])=[E_n(x)]$. If $x-x'\in J_n$, [F1] gives $\iota_n(x-x')\in J_{n+1}$, so the first value is independent of the representative. If $z-z'\in J_{n+1}$, [F1] gives $E_n(z-z')\in J_n$, so the second value is independent of the representative. The quotient maps therefore exist and the assumed $\phi_n$ intertwine them with the maps on $R_n$. [F1, given, construct]

1.2 By the module-identification hypothesis, the restriction of a retained simple $R_{n+1}$-module at endpoint $b$, transported through $\phi_{n+1}$ and $\phi_n$, is the restriction of $V_{n+1,b}$ to the type-A tower. [F2, given, algebra]

2.1 Applying [F3] to that restriction yields $\bigoplus_{a\sim b}V_{n,a}$, with each adjacent predecessor occurring once and no term for a vertex outside $\{0,\ldots,\ell-2\}$. Transport back through the isomorphisms gives the same branching rule for the retained $R_n$-modules. [F3, step 1.2, algebra] ∎

## Remarks

The actual positive-root quotient identification, equality of categorical negligibility with this algebra trace radical, and compatibility of its retained Jones–Wenzl matrix units with the path tower remain open supplier checks in this batch handoff. The theorem above assumes those interfaces rather than supplying excerpts or acceptance for them.
