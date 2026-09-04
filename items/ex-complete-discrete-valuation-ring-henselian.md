---
id: ex-complete-discrete-valuation-ring-henselian
kind: example
title: "A complete discrete valuation ring is Henselian"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-complete-local-rings-are-henselian, cor-formal-series-over-a-field-is-a-local-domain, thm-equivalent-characterisations-of-a-dvr]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 10.153: Henselian local rings"
      url: "https://stacks.math.columbia.edu/tag/04GE"
pipeline_run: null
---

## Example

For every field $k$, the formal power-series ring $k\llbracket t\rrbracket$ is a complete
discrete valuation ring and hence Henselian.

## Facts & Assumptions

**Given:** A field $k$ and the ring $k\llbracket t\rrbracket$.

[L1] The ring $k\llbracket t\rrbracket$ is a local domain with unique maximal ideal
$tk\llbracket t\rrbracket$ ([[cor-formal-series-over-a-field-is-a-local-domain]]).

[L2] A local domain of this form is a discrete valuation ring
([[thm-equivalent-characterisations-of-a-dvr]]).

[L3] Every complete local ring is Henselian
([[cor-complete-local-rings-are-henselian]]).

## Verification

**Proof technique:** identify the standard complete local model.

1.1 By [L1], $k\llbracket t\rrbracket$ is local with maximal ideal $(t)$. Its $t$-adic topology is complete by construction of the formal power-series ring. [L1, given]

2.1 By [L2], this local domain is a discrete valuation ring. Applying [L3] to the complete local ring $k\llbracket t\rrbracket$ shows that it is Henselian. [L2, L3, step 1.1]

3.1 Therefore every complete discrete valuation ring modeled by $k\llbracket t\rrbracket$ is Henselian. [step 2.1] ∎
