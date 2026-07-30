---
id: ex-omega-one-is-not-paracompact
kind: example
title: 'Assuming choice, $\omega_1$ is countably compact, noncompact, and not paracompact'
status: published
origin: session
deps: [lem-countably-compact-paracompact-hausdorff-is-compact, thm-ordinal-spaces-and-compactness, lem-ordinal-order-topology-is-t3, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "First uncountable ordinal (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/First_uncountable_ordinal"
pipeline_run: null
---

## Example

Assume the Axiom of Choice. The ordinal space $\omega_1$ is Hausdorff,
countably compact, and noncompact by
[[thm-ordinal-spaces-and-compactness]] and
[[lem-ordinal-order-topology-is-t3]]. If it were paracompact, then
[[lem-countably-compact-paracompact-hausdorff-is-compact]] would make it compact.
It is therefore not paracompact.

The use of Choice includes the countable choice hypothesis of the cited ordinal
compactness result.
