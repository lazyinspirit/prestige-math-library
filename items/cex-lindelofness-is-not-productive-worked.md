---
id: cex-lindelofness-is-not-productive-worked
kind: counterexample
title: "Assuming choice, a Lindelöf space whose square is not Lindelöf: the lower-limit line"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [ex-cardinal-functions-of-the-lower-limit-line, ex-countability-profile-of-the-lower-limit-plane, fs-lindelofness-is-productive]
aliases: []
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
    - title: "UCR General Topology Notes"
      url: "https://math.ucr.edu/~res/math205C-2016/gentop-notes.pdf"
    - title: "Sorgenfrey plane (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sorgenfrey_plane"
    - title: "Lower limit topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lower_limit_topology"
pipeline_run: null
---
## Statement refuted
Assuming countable choice, Lindelöfness is productive.
## Facts & Assumptions
**Given:** The lower-limit line $S$ and its square $S^2$.

[L1] The lower-limit line has Lindelöf degree $\aleph_0$, hence is Lindelöf ([[ex-cardinal-functions-of-the-lower-limit-line]]).

[L2] The lower-limit plane $S^2$ is not Lindelöf ([[ex-countability-profile-of-the-lower-limit-plane]]).

[L3] The false statement being exhibited asserts that products of Lindelöf spaces are Lindelöf ([[fs-lindelofness-is-productive]]).

## Counterexample
**Proof technique:** direct.

1.1 The factor $S$ is Lindelöf by [L1]. [L1]

1.2 Its square $S^2$ is not Lindelöf by [L2]. [L2]

2.1 Hence the product $S\times S$ fails the conclusion while each displayed factor satisfies the hypothesis, refuting the assertion in [L3]. [step 1.1, step 1.2, L3] ∎
