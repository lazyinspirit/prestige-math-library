---
id: rem-complete-metrizability-is-the-topological-shadow
kind: remark
title: "Completeness belongs to the metric; the topological invariant is complete metrizability, which this page introduces and only a much later page characterises"
status: draft
origin: session
deps: [fs-completeness-is-a-topological-property, def-complete-metric-space,
       def-equivalent-metrics, def-metric-completion, def-metric-topology,
       thm-complete-subspace-iff-closed, thm-metric-completion-exists,
       lem-complete-remetrisation, fs-cauchy-implies-convergent-in-every-metric-space]
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

- $(0,\infty)$ with its usual metric is not complete — claim 3 of
  [[lem-complete-remetrisation]] proves it, by the same route that makes $(0,1)$
  incomplete in [[fs-cauchy-implies-convergent-in-every-metric-space]], namely
  that neither set is closed in $\mathbb{R}$. And yet *another* metric on
  $(0,\infty)$, inducing exactly the same open sets, **is** complete: the same
  claim writes it down as $|x-y| + |1/x - 1/y|$. So the two notions genuinely
  differ, and the question above is not a distinction without a difference.
- [[thm-complete-subspace-iff-closed]] says a subspace of a complete space is
  complete precisely when it is closed. Claim 2 of
  [[lem-complete-remetrisation]] upgrades that to the topological statement: a
  closed subspace of a completely metrizable space is completely metrizable,
  with no completeness hypothesis on the ambient metric. What happens for
  subspaces that are **not** closed is left open here.
- [[thm-metric-completion-exists]] embeds every metric space densely in a
  complete one. The completion is a complete space, but the original space
  usually sits inside it as a proper dense subspace, and being a dense subspace
  of a complete space says nothing on its own about complete metrizability.
  $\mathbb{Q}$ and $(0,\infty)$ are both dense in complete spaces and they differ
  on the property: $(0,\infty)$ has it by the first bullet, and $\mathbb{Q}$ does
  not — but that second half is **not** proved here and needs the Baire category
  theorem.

**What is deliberately not asserted.** No *characterisation* of the completely
metrizable topologies is stated here, and none is proved. The classical answer is
Alexandroff's theorem — a subspace of a complete metric space is completely
metrizable exactly when it is a $G_\delta$ subset of it — and it belongs to a
later page of this library, `complete-metrizability-and-baire`, which is planned
and not yet authored. What that page needs and this one has not got is countable
intersections of open sets, the Baire category theorem, and a remetrisation built
as a convergent series; general topological spaces are developed later in this
library too, whereas [[def-metric-topology]] here supplies only the metric
topology, as a collection of subsets. So beyond the three claims of
[[lem-complete-remetrisation]], "completely metrizable" is used here as the name
of a question and never as a tool in a proof.

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
- **Forward-reference bookkeeping.** The part of the orientation that is now
  proved is an ordinary same-page dependency on [[lem-complete-remetrisation]],
  not a forward reference. What remains unproved is Alexandroff's theorem, which
  is planned for `complete-metrizability-and-baire`; that page has no items yet,
  so no target id can be declared in `forward_refs` and this item declares none.
  When it is authored, the item stating the characterisation must be added to
  this item's `forward_refs`, so that the pointer is rendered as a forward
  reference and appears in the ledger produced by `tools/fwdcheck.mjs --ledger`.
  The same applies to the second bullet above, whose open half — that an open
  subspace of a completely metrizable space is completely metrizable — is the
  easy corollary of that theorem.
