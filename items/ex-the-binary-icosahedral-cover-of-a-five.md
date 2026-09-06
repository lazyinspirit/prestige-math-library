---
id: ex-the-binary-icosahedral-cover-of-a-five
kind: example
title: "Binary icosahedral cover of A5"
status: published
origin: pipeline
deps: [thm-a-group-admits-a-universal-central-extension-iff-it-is-perfect, cor-kernel-of-the-universal-central-extension-is-the-schur-multiplier]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 6, Example 6.9.1"
      url: https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Example

$\operatorname{SL}(2,5)\to\operatorname{PSL}(2,5)\cong A_5$ is the sourced
binary-icosahedral universal-cover example.

## Facts & Assumptions

**Given:** Use Weibel, §6.9, Example 6.9.1, cited above.

[L1] Weibel's Example 6.9.1 identifies $\operatorname{SL}(2,5)\to\operatorname{PSL}(2,5)$ as a universal central extension with kernel $\{\pm I\}$.

## Verification

**Proof technique:** direct.

1.1 The central quotient map $\operatorname{SL}(2,5)\to\operatorname{PSL}(2,5)$ has kernel $\{\pm I\}\cong C_2$, and the cited example identifies it as the universal central extension. [L1, given]

2.1 With the standard isomorphism $\operatorname{PSL}(2,5)\cong A_5$, this is the binary-icosahedral universal cover asserted in the statement. [step 1.1, algebra] ∎
