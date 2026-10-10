---
id: rem-enflo-space-without-the-approximation-property
kind: remark
title: "Enflo's space without the approximation property"
status: published
origin: session
proved_here: false
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-dependent-choice, def-approximation-property-and-bounded-approximation-property, thm-schauder-basis-implies-bounded-approximation-property]
justified_by: []
forward_refs: []
aliases: []
landmark: false
verification:
  audited: 2026-09-14
  sources_checked:
    date: 2026-09-14
    scope: citations
    by: session-audit
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Per Enflo, A counterexample to the approximation problem in Banach spaces"
      url: "https://projecteuclid.org/journals/acta-mathematica/volume-130/issue-none/A-counterexample-to-the-approximation-problem-in-Banach-spaces/10.1007/BF02392270.pdf"
      locator: "Theorem 1 and complete paper, Acta Mathematica 130 (1973), pp.309-317"
external_dependency:
  source_url: "https://projecteuclid.org/journals/acta-mathematica/volume-130/issue-none/A-counterexample-to-the-approximation-problem-in-Banach-spaces/10.1007/BF02392270.pdf"
  exact_statement: "There exists a separable reflexive real Banach space without the approximation property."
  local_proof_attempt: "This pair reconstructs Enflo's finite-expansion trace criterion, Walsh estimates, and block assembly, and it supplies the Grothendieck reflexive-AP-implies-MAP theorem locally as thm-reflexive-approximation-property-implies-metric-approximation-property; this historical leaf is still not used as a proof dependency."
  necessity: "This non-load-bearing historical leaf preserves the exact primary result and is not used as a proof dependency."
pipeline_run: phase-2-next-18
---

## Remark

Enflo's Theorem 1 constructs, in the ordinary ZFC setting, a separable
reflexive Banach space without the approximation property. The theorem's own
quantitative conclusion is stronger: there are finite-dimensional subspaces
$M_n$, with $\dim M_n\to\infty$, and $C>0$ such that every finite-rank $T$
satisfies

$$\|T-I\|_{(M_n)}\ge1- \frac{C\|T\|}{\log\dim M_n}.$$

This recorded item is non-load-bearing. Under DC, the locally proved implication
from a Schauder basis to BAP shows that Enflo's space has no Schauder basis.
The pair supplies the Grothendieck reflexive-AP-implies-MAP theorem locally, so
the AP conclusion is no longer blocked on a missing external prerequisite; the
proof-bearing retirement above carries its own review record, and this
historical leaf does not substitute for it.
