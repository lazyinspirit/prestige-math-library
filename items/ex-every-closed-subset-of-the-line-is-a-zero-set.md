---
id: ex-every-closed-subset-of-the-line-is-a-zero-set
kind: example
title: "Every closed subset of $\\mathbb{R}$ is a zero set and a $G_\\delta$, as the perfect-normality criterion predicts"
status: draft
origin: session
deps: [thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set,
       thm-metric-spaces-are-tychonoff-and-perfectly-normal, def-zero-sets-and-cozero-sets,
       def-g-delta-and-f-sigma-in-a-topological-space,
       def-metric-space, def-metrizable-space, lem-real-line-is-a-metric-space]
justified_by: []
aliases: []
landmark: false
short: "closed subsets of $\\mathbb{R}$ are zero sets"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Zero set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zero_set"
pipeline_run: null
---

## Example

$\mathbb{R}$ with its usual topology is metrizable
([[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]), hence
perfectly normal by [[thm-metric-spaces-are-tychonoff-and-perfectly-normal]]:
every closed $C \subseteq \mathbb{R}$ is a zero set
([[def-zero-sets-and-cozero-sets]]) and a $G_\delta$
([[def-g-delta-and-f-sigma-in-a-topological-space]]). Taking $C := \{0\}$
makes both witnesses explicit: $C = Z(f)$ for $f(x) := |x|$, and
$C = \bigcap_{n \in \mathbb{N}} \big(-\tfrac{1}{n+1},\ \tfrac{1}{n+1}\big)$.

This is exactly what
[[thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set]]
predicts of a perfectly normal space, illustrated by the metric case that
theorem's own proof does not need to run through, since perfect normality of
$\mathbb{R}$ is already established directly from the metric.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with its usual topology, $C = \{0\}$, and $f(x)=|x|$.

[L1] Every closed subset of a metric space is a zero set and a $G_\delta$: for $C \ne \varnothing$ closed, $C = Z(x \mapsto d(x,C))$ and $C = \bigcap_n \{x : d(x,C) < 1/(n+1)\}$ ([[thm-metric-spaces-are-tychonoff-and-perfectly-normal]], clauses 1–2).

[L2] $\{0\}$ is closed in $\mathbb{R}$, and $d(x,\{0\}) = |x-0| = |x|$ ([[def-metric-space]], [[lem-real-line-is-a-metric-space]]).

## Verification

**Proof technique:** direct.

1.1 $C=\{0\}$ is closed and nonempty; by [L1] with $d(x,C)=|x|$ (step following [L2]), $C = Z(f)$ with $f(x)=|x|$, and $C = \bigcap_n \{x : |x| < 1/(n+1)\}$. [given, L1, L2]

1.2 $\{x : |x| < 1/(n+1)\} = \big(-\tfrac{1}{n+1}, \tfrac{1}{n+1}\big)$ for every $n \in \mathbb{N}$, directly unfolding the absolute-value inequality. [given, algebra]

2.1 By steps 1.1 and 1.2, $\{0\} = Z(f)$ with $f(x)=|x|$, and $\{0\} = \bigcap_n \big(-\tfrac{1}{n+1},\tfrac{1}{n+1}\big)$, exhibiting $\{0\}$ as both a zero set and a $G_\delta$. [step 1.1, step 1.2] ∎

## Remarks

- **No general closed subset of $\mathbb{R}$ is exceptional here.** The argument above uses nothing about $\{0\}$ beyond it being closed and nonempty in a metric space; the same two formulas, with $d(x,C)$ in place of $|x|$, exhibit *any* closed $C \subseteq \mathbb{R}$ as a zero set and a $G_\delta$, choice-free.

- **This does not exercise the harder half of [[thm-a-space-is-perfectly-normal-iff-it-is-normal-and-every-closed-set-is-a-zero-set]].** That theorem's forward direction builds a zero set from a $G_\delta$ presentation via a countable family of Urysohn functions; here the zero set is read off directly from the metric, with no such construction and no dependent choice.
