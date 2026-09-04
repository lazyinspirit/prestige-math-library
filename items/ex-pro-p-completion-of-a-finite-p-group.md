---
id: ex-pro-p-completion-of-a-finite-p-group
kind: example
title: "A finite p-group is naturally isomorphic to its own pro-p completion"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-pro-p-completion-of-an-abstract-group, def-pro-p-group]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Gareth Wilkes, Profinite Groups and Group Cohomology lecture notes"
      url: "https://www.dpmms.cam.ac.uk/~grw46/LectureNotes.pdf"
---

## Example

If $P$ is a finite $p$-group, then the canonical map $P\to\widehat P^{(p)}$ is
an isomorphism.

## Facts & Assumptions

**Given:** A finite $p$-group $P$.

[F1] The pro-$p$ completion is the inverse limit over all finite $p$-group
quotients ([[def-pro-p-completion-of-an-abstract-group]]).

[L1] A finite $p$-group is itself a pro-$p$ group
([[def-pro-p-group]]).

## Verification

**Proof technique:** direct.

1.1 The subgroup $1\trianglelefteq P$ is one of the indexing subgroups in [F1], and its quotient is the initial object $P/1\cong P$ of the quotient diagram: it has the natural quotient map to every $P/N$. [F1, given, algebra]

2.1 A compatible tuple is uniquely determined by its coordinate in the initial object $P/1$, and every element of $P/1$ determines such a tuple by its images in the other quotients. Therefore $\widehat P^{(p)}\cong P$, and the canonical completion map is exactly this isomorphism. The conclusion is consistent with [L1], since $P$ was already pro-$p$ to begin with. [L1, step 1.1] ∎
