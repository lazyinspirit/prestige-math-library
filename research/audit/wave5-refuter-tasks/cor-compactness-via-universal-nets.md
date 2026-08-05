# Adversarial proof reading — `cor-compactness-via-universal-nets`

## The item under review, in full

`items/cor-compactness-via-universal-nets.md`

```markdown
---
id: cor-compactness-via-universal-nets
kind: corollary
title: "Assuming the ultrafilter lemma, a space is compact if and only if every universal net converges"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-every-net-has-a-universal-subnet, lem-universal-net-cluster-points-are-limits, thm-compactness-via-nets-filters-and-ultrafilters, thm-net-cluster-point-iff-convergent-subnet]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "WVU Math 581 Topology I"
      url: "https://math.wvu.edu/~jwojciec/teaching_files/2024_Spring-581/index.html"
    - title: "Net (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Net_(mathematics)"
    - title: "Boolean prime ideal theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Boolean_prime_ideal_theorem"
pipeline_run: null
---

## Statement

**Assume the ultrafilter lemma.** A topological space is compact if and only if every universal net in it converges.

## Facts & Assumptions

**Given:** A topological space $X$ and the ultrafilter lemma.

[L1] Compactness is equivalent to every net having a cluster point ([[thm-compactness-via-nets-filters-and-ultrafilters]]).

[L2] Every net has a universal subnet ([[lem-every-net-has-a-universal-subnet]]), and a cluster point of a universal net is a limit ([[lem-universal-net-cluster-points-are-limits]]).

[L3] A point is a cluster point of a net exactly when some subnet converges to it ([[thm-net-cluster-point-iff-convergent-subnet]]).



## Proof

**Proof technique:** direct.

1.1 If $X$ is compact, a universal net has a cluster point by [L1], hence converges by [L2]. [L1, L2]

1.2 Conversely, suppose every universal net converges. Every net has a universal subnet by [L2], which then converges; its limit is a cluster point of the original net by [L3]. Thus every net has a cluster point. [L2, L3]

2.1 By [L1], this makes $X$ compact. [step 1.2, L1] ∎
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `lem-every-net-has-a-universal-subnet` — lemma — Assuming the ultrafilter lemma, every net has a universal subnet

(statement provenance: ai-altered)

### Statement

**Assume the ultrafilter lemma.** Every net has a universal subnet.

### `lem-universal-net-cluster-points-are-limits` — lemma — Every cluster point of a universal net is a limit of that net

(statement provenance: ai-altered)

### Statement

Every cluster point of a universal net is a limit of that net.

### `thm-compactness-via-nets-filters-and-ultrafilters` — theorem — Assuming the ultrafilter lemma, compactness is equivalent to every net having a cluster point, every net having a convergent subnet, every filter having a cluster point, and every ultrafilter converging

(statement provenance: ai-altered)

### Statement

**Assume the ultrafilter lemma.** For a topological space $X$, the following are equivalent:

1. $X$ is compact;
2. every net in $X$ has a cluster point;
3. every net in $X$ has a convergent subnet;
4. every filter on $X$ has a cluster point;
5. every ultrafilter on $X$ converges.

### `thm-net-cluster-point-iff-convergent-subnet` — theorem — A point is a cluster point of a net if and only if some subnet converges to it

(statement provenance: literature-derived)

### Statement

For a net $x:D\to X$ and $p\in X$, $p$ is a cluster point of $x$ if and only if $x$ has a subnet converging to $p$.

## What to return

Read `cor-compactness-via-universal-nets` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
