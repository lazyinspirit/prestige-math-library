---
id: rem-complete-metrizability-is-the-topological-shadow
kind: remark
title: "Completeness belongs to the metric; complete metrizability is characterised on a later page"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-applicable
deps: [fs-completeness-is-a-topological-property, def-complete-metric-space,
       def-equivalent-metrics, def-metric-completion, def-metric-topology,
       thm-complete-subspace-iff-closed, thm-metric-completion-exists,
       lem-complete-remetrisation, fs-cauchy-implies-convergent-in-every-metric-space]
justified_by: []
forward_refs: [thm-alexandrov-complete-metrizability-characterisation, cor-open-closed-and-g-delta-subspaces-of-completely-metrizable-spaces]
aliases: []
landmark: false
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
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
obvious question, and this remark says what the question is, what the page now
answers, and what it does not.

**The question.** Given the open sets, is there *some* metric inducing them that
is complete? A topology for which the answer is yes is called **completely
metrizable**, and that is the definition made precise in
[[lem-complete-remetrisation]]. Unlike completeness, this really is a property of
the open sets alone: the metric is quantified over
([[def-metric-topology]]), so a homeomorphism transports it — which is claim 1 of
that lemma. It is the topological shadow that completeness casts, and it is
strictly weaker than "carries this particular complete metric".

**What this page now settles.** Two of the three facts below are discharged by
[[lem-complete-remetrisation]]; the third is not, and says so.

- $(0,\infty)$ with its usual metric is not complete: the sequence
  $1/(k+2)$ is Cauchy there and converges in $\mathbb R$ only to $0$, which is
  outside the space. Claim 3 of [[lem-complete-remetrisation]] also states this
  conclusion. And yet *another* metric on
  $(0,\infty)$, inducing exactly the same open sets, **is** complete: the same
  claim writes it down as $|x-y| + |1/x - 1/y|$. So the two notions genuinely
  differ, and the question above is not a distinction without a difference.
- Under Countable Choice, [[thm-complete-subspace-iff-closed]] says a subspace
  of a complete space is complete precisely when it is closed. Its
  closed-implies-complete direction holds without choice. Claim 2 of
  [[lem-complete-remetrisation]] upgrades that to the topological statement: a
  closed subspace of a completely metrizable space is completely metrizable,
  with no completeness hypothesis on the ambient metric. What happens for
  subspaces that are **not** closed is left open here.
- Under Countable Choice, [[thm-metric-completion-exists]] embeds every metric space densely in a
  complete one. The completion is a complete space, but the original space
  usually sits inside it as a proper dense subspace, and being a dense subspace
  of a complete space says nothing on its own about complete metrizability.
  $\mathbb{Q}$ and $(0,\infty)$ are both dense in complete spaces and they differ
  on the property: $(0,\infty)$ has it by the first bullet, and $\mathbb{Q}$ does
  not — but that second half is **not** proved here and needs the Baire category
  theorem.

**What this early page does not prove.** The later published page
`complete-metrizability-and-baire` proves the qualified Alexandrov
characterisation: assuming Dependent Choice, a subspace of a complete metric
space is completely metrizable exactly when it is a $G_\delta$ subset
([[thm-alexandrov-complete-metrizability-characterisation]]). Its published
subspace corollary proves the open and closed cases directly, and the general
$G_\delta$ case under DC
([[cor-open-closed-and-g-delta-subspaces-of-completely-metrizable-spaces]]).
This early page has not yet developed countable intersections of open sets,
the Baire category theorem, or the convergent-series remetrisation used later;
[[def-metric-topology]] here supplies only the metric topology as a collection
of subsets. Beyond the three claims of [[lem-complete-remetrisation]],
"completely metrizable" is not used here as a proof tool.

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
- **Forward-reference bookkeeping.** The part proved on this page is an
  ordinary same-page dependency on [[lem-complete-remetrisation]]. The
  Alexandrov theorem and the open/closed/$G_\delta$ subspace corollary are
  published on the later page and are listed as forward references above.
  Neither later result is a load-bearing premise for this orientation item.
