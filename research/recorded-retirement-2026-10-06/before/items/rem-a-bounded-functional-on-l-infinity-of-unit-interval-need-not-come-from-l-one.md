---
id: rem-a-bounded-functional-on-l-infinity-of-unit-interval-need-not-come-from-l-one
kind: remark
title: "A bounded functional on $L^\\infty[0,1]$ need not come from $L^1[0,1]$"
status: published
origin: session
proved_here: false
provenance:
  statement: literature-derived
  proof: not-supplied
external_refs: [rem-the-p-equals-infinity-case-is-recorded-not-proved-here]
external_dependency:
  source_url: "https://djvu.online/file/NPF4BEtSuqdFA"
  exact_statement: "On $[0,1]$, point evaluation on $C([0,1])$ extends to a bounded functional on $L^\\infty([0,1])$ that is not given by integration against any $L^1$ function."
  local_proof_attempt: "No local proof is supplied because the extension step is Hahn-Banach, which this measure-theory page does not own."
  necessity: "The examples page must carry the standard concrete $p=\\infty$ boundary witness without importing abstract functional-analysis machinery."
verification:
  sources_checked: 2026-09-01
  precheck: n/a
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., paragraph after Theorem 6.15"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "John K. Hunter, Measure Theory, paragraph after Theorem 7.14"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Remark

There exists a bounded linear functional on $L^\infty([0,1])$ that is not of
the form
$$f \longmapsto \int_0^1 f(x)h(x)\,dx$$
for any $h \in L^1([0,1])$.

The standard witness extends point evaluation at $0$ from $C([0,1])$ to
$L^\infty([0,1])$ by Hahn-Banach. This examples page records that classical
boundary fact but does not prove it here; the page-level warning already
appeared in [[rem-the-p-equals-infinity-case-is-recorded-not-proved-here]].
