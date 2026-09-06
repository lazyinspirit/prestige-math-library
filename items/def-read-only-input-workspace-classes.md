---
id: def-read-only-input-workspace-classes
kind: definition
title: "Read-only-input work-space classes and constructibility"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-asymptotic-resource-comparison, def-multitape-and-nondeterministic-machines]
verification:
  audited: 2026-09-06
  precheck: n/a
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, Definition 4.1 and Remark 4.2"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Definition

A read-only-input machine has one read-only input tape and finitely many work
tapes. On an input $x$ of length $n$, the input is bracketed by endmarkers and
the input head is confined to those $n+2$ positions. The input tape is never
written and its cells are not charged.

$\mathrm{DWORKSPACE}(s)$ contains the languages decided by such machines
while visiting $O(s(n))$ work-tape cells. A bound $s$ is **work-space
constructible** when a deterministic read-only-input machine, on input $1^n$,
outputs the binary expansion of $s(n)$ while visiting $O(s(n))$ work cells.
In hierarchy applications we require
$\lceil\log_2(n+2)\rceil=O(s(n))$ so that an input-head address fits in the
work bound. This model is distinct from all-tapes DSPACE.
