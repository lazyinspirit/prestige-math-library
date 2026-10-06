---
id: rem-continuum-hypothesis
kind: remark
title: "The continuum hypothesis and the later local consistency results"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-cantor-powerset, thm-r-uncountable, def-countable, def-equinumerous, lem-countable-iff-surjection-from-n, lem-pigeonhole]
justified_by: []
forward_refs: [cor-positive-relative-consistency-of-ch-and-gch, cor-formal-negative-consistency-of-ch-and-gch, thm-sierpinski-arbitrary-set-gch-implies-choice]
aliases: [rem-ch]
landmark: false
short: "CH and its local consistency suppliers"
sources:
  scraped: []
  references:
    - title: "Stanford Encyclopedia of Philosophy, The Continuum Hypothesis"
      url: "https://plato.stanford.edu/entries/continuum-hypothesis/"
    - title: "Sierpiński's theorem: GCH implies AC"
      url: "https://www.ps.uni-saarland.de/extras/sierpinski/"
    - title: "Continuum hypothesis (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuum_hypothesis"
    - title: "Cardinality of the continuum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinality_of_the_continuum"
    - title: "Cantor's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor%27s_theorem"
pipeline_run: null
verification:
  repair: research/recorded-retirement-2026-10-06/receipts/rem-continuum-hypothesis.json
---

## Remark

By [[thm-cantor-powerset]] there is a strict gap
$\mathbb{N} \prec \mathcal{P}(\mathbb{N})$ ([[def-equinumerous]]). In particular
$\mathcal{P}(\mathbb{N})$ is uncountable ([[def-countable]]), since a surjection
$\mathbb{N} \to \mathcal{P}(\mathbb{N})$ would exist if it were at most countable
([[lem-countable-iff-surjection-from-n]]) and the theorem forbids one; and so, by
a completely different argument, is $\mathbb{R}$ ([[thm-r-uncountable]]). The
obvious next question is whether anything sits strictly in between.

**The continuum hypothesis** (CH) asserts that nothing does:

> there is no set $A$ with $\mathbb{N} \prec A \prec \mathcal{P}(\mathbb{N})$.

**Over ZFC** this is equivalent to: every uncountable subset of
$\mathcal{P}(\mathbb{N})$ is equinumerous with $\mathcal{P}(\mathbb{N})$ itself.
The qualification matters. Passing from the displayed form to the subset form
uses choice to well order an uncountable
$A\subseteq\mathcal P(\mathbb N)$ and obtain
$\mathbb N\prec A$. Nothing here asserts that this passage is available in ZF;
only the displayed form is used below. Determining the exact choiceless
relationship between the formulations belongs to the later symmetric-model
development.

**Later local consistency results.**
[[cor-positive-relative-consistency-of-ch-and-gch]] proves that
$\operatorname{Con}(\mathrm{ZFC})$ implies consistency of both
$\mathrm{ZFC}+\mathrm{CH}$ and $\mathrm{ZFC}+\mathrm{GCH}$.
[[cor-formal-negative-consistency-of-ch-and-gch]] proves, as an external
metatheorem using a separate construction for each fixed finite fragment, the
corresponding consistency implications for not CH and not GCH. Its contract
claims no PA proof of a uniform refutation transformer. Together these imply
that, if ZFC is consistent, it decides neither CH nor GCH: a proof of either
sentence would contradict consistency of the extension by its negation.

**What this page has not proved.** CH is usually stated about $\mathbb{R}$: that
every uncountable set of reals is equinumerous with $\mathbb{R}$. That form is
equivalent to the one above only once one knows
$\mathbb{R} \approx \mathcal{P}(\mathbb{N})$, which this library **now** proves,
in ZF, on a later page. At this point in the reading order, though, the two
uncountability results on this page are
still genuinely separate facts: $\mathcal{P}(\mathbb{N})$ is uncountable by the
diagonal argument, and $\mathbb{R}$ is uncountable by nested intervals, and the
bridge between them is not available here — it needs binary expansions, which
are developed much later, on the same later page. Nothing on this page depends
on that bridge.

**The countability results have their own proofs.** Countability of
$\mathbb Q$, uncountability of $\mathbb R$ and of the irrationals, and Cantor's
theorem on this page are proved without a choice axiom. The later consistency
comparisons are not premises of those arguments.

The **generalised continuum hypothesis** (GCH) asserts that there are no
infinite $A$ and set $B$ with $A\prec B\prec\mathcal P(A)$. It implies CH by
its instance at $A=\mathbb N$, since $\mathbb N$ is infinite by claim 4 of
[[lem-pigeonhole]]. The later
[[thm-sierpinski-arbitrary-set-gch-implies-choice]] proves in ZF that this
arbitrary-set formulation of GCH implies AC. This implication uses no
consistency assumption and is distinct from the two consistency comparisons.
