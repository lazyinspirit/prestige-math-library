---
id: ex-lower-limit-line-is-regular-and-not-metrizable
kind: example
title: "Under choice, the lower-limit line is regular and separable but not second countable and therefore not metrizable"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-lower-limit-topology, lem-lower-limit-line-is-regular-and-lindelof, def-separable-space, def-second-countable-space, thm-metric-countability-equivalences, thm-rationals-countable, lem-rat-embeds-dense, thm-r-uncountable, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "L. A. Steen and J. Seebach, Counterexamples in Topology"
      url: "https://web.math.ucsb.edu/~bigelow/books/counterexamples.pdf"
pipeline_run: null
---

## Example

Assume the Axiom of Choice. The lower-limit line is regular and separable, but not second countable and hence not metrizable.

## Facts & Assumptions

**Given:** The lower-limit topology on $\mathbb R$ and the Axiom of Choice.

[L1] The lower-limit line is regular, and its basic intervals are $[a,b)$ ([[lem-lower-limit-line-is-regular-and-lindelof]], [[def-lower-limit-topology]]).

[L2] The rationals are countable and meet every nonempty usual interval, hence every $[a,b)$ ([[thm-rationals-countable]], [[lem-rat-embeds-dense]]).

[L3] Under choice, a metrizable space is second countable exactly when it is separable ([[thm-metric-countability-equivalences]]).

## Verification

**Proof technique:** contradiction.

1.1 By [L1] the space is regular, and by [L2] the countable set $\mathbb Q$ is dense, so it is separable. [L1, L2]

1.2 Suppose $(B_n)_{n\in\mathbb N}$ is a basis. For each real $x$, the basis condition for $[x,x+1)$ yields a least-index $B_{m(x)}$ with $x\in B_{m(x)}\subseteq[x,x+1)$. [assume-contra]

2.1 If $m(x)=m(y)$ and $x<y$, then $x\in B_{m(y)}\subseteq[y,y+1)$, impossible. Thus $x\mapsto m(x)$ injects $\mathbb R$ into $\mathbb N$, contradicting [[thm-r-uncountable]]. [step 1.2]

3.1 Therefore the lower-limit line is not second countable. If it were metrizable, its separability from step 1.1 and [L3] would make it second countable, another contradiction. [L3, step 1.1, step 2.1, discharge-contradiction] ∎
