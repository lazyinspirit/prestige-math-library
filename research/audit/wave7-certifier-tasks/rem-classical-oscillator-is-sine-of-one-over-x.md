## Assigned repair — `rem-classical-oscillator-is-sine-of-one-over-x`

Item path: `items/rem-classical-oscillator-is-sine-of-one-over-x.md`

Normalized final-text SHA-256 at dispatch: `cf29dbe0e48af9a9167bf25f5b26d897798e7f909c2b0efd718dc2aaaa16a0e8`

Split reasons: ["deps"]

Provenance ledger: `wave7-real-analysis-completeness-limits.provenance.jsonl`

The four Wave 7 findings ledgers on disk record the original defect and Beta's repair. Locate this id there before certifying.

Read the current target from disk and every dependency needed to check the repair. The generated manifest rows are supplied only as a completeness checklist:

```json
[
  {
    "source": "rem-classical-oscillator-is-sine-of-one-over-x",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "ex-distance-to-the-integers",
    "declared_target": "ex-distance-to-the-integers",
    "target_statement_provenance": "ai-altered",
    "targetPage": "limits-of-real-functions-examples",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-classical-oscillator-is-sine-of-one-over-x",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-integer-part",
    "declared_target": "lem-integer-part",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limits-of-real-functions",
    "targetBatch": "wave7-real-analysis-completeness-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-classical-oscillator-is-sine-of-one-over-x",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "cex-sine-of-one-over-x-has-no-limit-at-zero",
    "declared_target": "cex-sine-of-one-over-x-has-no-limit-at-zero",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sine-cosine-and-the-definition-of-pi-examples",
    "targetBatch": null,
    "edge_type": "forward_ref",
    "kind": "forward",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-classical-oscillator-is-sine-of-one-over-x",
    "sourcePage": "limits-of-real-functions-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "ex-x-sine-of-one-over-x-tends-to-zero",
    "declared_target": "ex-x-sine-of-one-over-x-tends-to-zero",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sine-cosine-and-the-definition-of-pi-examples",
    "targetBatch": null,
    "edge_type": "forward_ref",
    "kind": "forward",
    "requires_semantic_audit": true
  }
]
```

For a byte-exact cross-check, the current item at dispatch was:

````markdown
---
id: rem-classical-oscillator-is-sine-of-one-over-x
kind: remark
title: "The classical form of the oscillator above is $\\sin(1/x)$, which this library can only construct much later"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-applicable
deps: [ex-distance-to-the-integers, lem-integer-part]
justified_by: []
aliases: []
forward_refs: [cex-sine-of-one-over-x-has-no-limit-at-zero, ex-x-sine-of-one-over-x-tends-to-zero]
landmark: false
short: "why $\\psi$ and not $\\sin$"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Sine and cosine (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sine_and_cosine"
    - title: "Topologist's sine curve (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Topologist%27s_sine_curve"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 8 (the trigonometric functions)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Orientation, not a claim of this library

Every analysis course states the two examples of this page in the form

$$\sin(1/x) \quad \text{has no limit at } 0, \qquad x \sin(1/x) \to 0 \text{ as } x \to 0 ,$$

and a reader who has met them before will recognise
[[cex-psi-of-one-over-x-has-no-limit-at-zero]] and
[[ex-x-times-psi-tends-to-zero]] as those examples with $\psi$ in place of
$\sin$. This remark records the correspondence, and it records that the
correspondence is **orientation only**: the two displayed statements are reported
as what the classical treatment proves, not asserted here, and nothing on this
page uses or proves anything about $\sin$.

## The later analytic construction

This library now constructs sine and cosine from their power series, proves
their differential and addition laws, and defines pi from the first positive
zero of cosine. The promised classical examples are
[[cex-sine-of-one-over-x-has-no-limit-at-zero]] and
[[ex-x-sine-of-one-over-x-tends-to-zero]]. They occur later in the reading
order, so both links are orientation-only forward references declared in this
item's `forward_refs`; no proof on this earlier page depends on them.

## What $\psi$ supplies instead

The function $\psi(x) = \inf_{n \in \mathbb{Z}} |x - n|$ of
[[ex-distance-to-the-integers]] is elementary — it needs only the integer part,
the order and the absolute value — and it has the three properties that make the
classical examples work:

- it is **bounded**, with values exactly in $[0, 1/2]$;
- it is **periodic**, with period $1$, so $\psi(1/x)$ oscillates without damping
  as $x \to 0$;
- it **attains** two distinct values on every punctured neighbourhood of $0$
  after the substitution $x \mapsto 1/x$, namely $0$ at the reciprocals of the
  integers and $1/2$ at the reciprocals of the half-integers.

The third property is what
[[cex-psi-of-one-over-x-has-no-limit-at-zero]] uses. It is not sharper than what
$\sin$ would give — the classical witnessing sequences hit the extreme values of
$\sin$ exactly too — but it is available *here*: the two values $0$ and $1/2$ are
read off from the integer part in one line ([[lem-integer-part]]), with no series
and no $\pi$, whereas the corresponding facts about $\sin$ presuppose the whole
construction described above.

## What is genuinely lost, and what is not

Nothing on this page is weaker for using $\psi$. The two statements proved are
exactly the statements usually proved with $\sin$, and their proofs are shorter.

What is lost is a connection to a different subject. The classical pair
$\sin(1/x)$, $x\sin(1/x)$ also carries information about smoothness, about power
series and about the topologist's sine curve, none of which $\psi$ can carry,
since $\psi$ is assembled from the order, the absolute value and the integer part
alone and none of those notions is defined in this library yet. Those phenomena
are not in scope on this earlier page; the forward-linked analytic examples
state them with $\sin$ on the later page that defines it.
````
