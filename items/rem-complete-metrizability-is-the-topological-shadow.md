---
id: rem-complete-metrizability-is-the-topological-shadow
kind: remark
title: "Completeness belongs to the metric; the topological invariant is complete metrizability, which this library settles only much later"
status: draft
origin: session
deps: [fs-completeness-is-a-topological-property, def-complete-metric-space,
       def-equivalent-metrics, def-metric-completion, def-metric-topology,
       thm-complete-subspace-iff-closed, thm-metric-completion-exists]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Complete metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_metric_space"
    - title: "Equivalence of metrics (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_of_metrics"
pipeline_run: null
---

## Orientation

This page has proved that completeness is a property of the **metric** and not of
the topology it induces: two metrics on one set can have exactly the same open
sets while only one of them is complete
([[fs-completeness-is-a-topological-property]],
[[def-complete-metric-space]], [[def-equivalent-metrics]]). That leaves an
obvious question unanswered, and this remark is here to say what the question is
and to be honest that this library does not answer it yet.

**The question.** Given a topological space, is there *some* metric inducing its
topology that is complete? A space for which the answer is yes is called
**completely metrisable**. Unlike completeness, this really is a property of the
topology alone: it is defined by quantifying over all metrics inducing the given
topology ([[def-metric-topology]]), so a homeomorphism transports it. It is the
topological shadow that completeness casts, and it is strictly weaker than
"carries this particular complete metric".

**Why the question is not idle.** Three of the facts proved on this page point
straight at it, and none of them settles it.

- $(0,1)$ with its usual metric is not complete
  ([[fs-cauchy-implies-convergent-in-every-metric-space]]), and yet nothing here
  rules out some *other* metric on $(0,1)$, inducing the same open sets, that
  **is** complete. Whether such a metric exists is exactly the question above,
  and this page does not decide it.
- [[thm-complete-subspace-iff-closed]] says a subspace of a complete space is
  complete precisely when it is closed. So closed subspaces of complete spaces
  are completely metrisable at once; what happens for subspaces that are not
  closed is left entirely open here.
- [[thm-metric-completion-exists]] embeds every metric space densely in a
  complete one. The completion is a complete space, but the original space
  usually sits inside it as a proper dense subspace, and being a dense subspace
  of a complete space says nothing on its own about complete metrisability.

**What is deliberately not asserted.** No characterisation of the completely
metrisable spaces is stated here, and none is proved. The classical answers
belong to a later part of this library, on the page
`complete-metrizability-and-baire`, which is planned and not yet authored; the
machinery it needs is general topology, in particular the abstract notion of a
topological space, which does not exist in this library at this point
([[def-metric-topology]] introduces only the metric topology, as a collection of
subsets, and says so). Until that page exists, "completely metrisable" is used
here as a name for a question and never as a tool in a proof.

**How to read the rest of the library in the meantime.** Every statement of the
form "$X$ is complete" in this library is a statement about a named metric on
$X$, and it never means "$X$ has a complete metric". Where the distinction
matters, the metric is written out. This is the same discipline as for the word
*bounded*, which is also metric and not topological
([[def-equivalent-metrics]]).

## Remarks

- **This item proves nothing and is not cited by any proof.** It records what the
  page has and has not established, and points at where the missing part will be
  developed. It is included because the gap it names is the single most common
  place where a reader over-reads
  [[fs-completeness-is-a-topological-property]]: from "completeness is not
  topological" it does *not* follow that no topological invariant is in the
  neighbourhood.
- **Forward-reference bookkeeping.** The orientation above points at a page that
  has no items yet, so no target id can be declared in `forward_refs` and this
  item declares none. When `complete-metrizability-and-baire` is authored, the
  item stating the characterisation of completely metrisable subspaces must be
  added to this item's `forward_refs`, so that the pointer is rendered as a
  forward reference and appears in the ledger produced by
  `tools/fwdcheck.mjs --ledger`.
