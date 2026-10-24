---
id: fs-every-regular-space-is-metrizable
kind: false-statement
title: "FALSE: every regular space is metrizable"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-lower-limit-topology, lem-lower-limit-line-is-regular-and-lindelof, def-separable-space, def-second-countable-space, thm-metric-countability-equivalences, thm-rationals-countable, lem-rat-embeds-dense, thm-r-uncountable, def-regular-and-t3-spaces, def-axiom-of-choice]
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

## Statement

Every regular space is metrizable.

## Facts & Assumptions

**Given:** Under the Axiom of Choice, the lower-limit topology on $\mathbb R$.

[L1] The lower-limit line is regular and has the half-open intervals $[x,x+1)$ as basic neighbourhoods ([[lem-lower-limit-line-is-regular-and-lindelof]], [[def-lower-limit-topology]]).

[L2] The real line is uncountable ([[thm-r-uncountable]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose the displayed assertion is true. By [L1], the lower-limit line would be metrizable. [assume-contra, L1]

1.2 The direct basis argument assigns to each $x$ the least member of a putative countable basis contained in $[x,x+1)$ and containing $x$; equality of assigned members forces equality of their left endpoints. Thus no countable basis exists, since it would inject $\mathbb R$ into $\mathbb N$, contrary to [L2]. [L2]

2.1 The rational-density argument makes the line separable, so metrizability from step 1.1 would imply second countability by [[thm-metric-countability-equivalences]], contradicting step 1.2. [step 1.1, step 1.2]

3.1 Hence the regular lower-limit line refutes the displayed assertion. [step 1.1, step 2.1, discharge-contradiction] ∎
