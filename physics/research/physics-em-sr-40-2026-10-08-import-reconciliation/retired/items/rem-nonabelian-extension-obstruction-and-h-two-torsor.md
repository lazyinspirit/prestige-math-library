---
id: rem-nonabelian-extension-obstruction-and-h-two-torsor
kind: remark
title: "Nonabelian extension obstructions live in H^3 and realized classes form an H^2-torsor"
status: published
origin: session
proved_here: false
provenance:
  statement: literature-derived
  proof: not-supplied
deps: [def-abstract-kernel-and-the-general-extension-problem]
forward_refs: [thm-nonabelian-extension-obstruction-and-torsor-with-choice]
sources:
  scraped: []
  references:
    - title: "Samuel Eilenberg and Saunders Mac Lane, Cohomology Theory in Abstract Groups. II. Group Extensions with a non-Abelian Kernel"
      url: "https://dokumen.pub/eilenberg-mac-lane-collected-works-0122340205-9780122340208.html"
verification:
  sources_checked:
    date: '2026-09-24'
    scope: Cited statement and missing local prerequisite examined; no proof-completion
      verdict. See /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-05-receipts.jsonl
    by: agent-05 (owner-delegated GPT-6-Sol xhigh)
  precheck: n/a
---

## Remark

Assume the Axiom of Choice. For an abstract kernel
$\alpha:Q\to\operatorname{Out}(N)$,
the later theorem [[thm-nonabelian-extension-obstruction-and-torsor-with-choice]]
constructs
a canonical obstruction class in
$H^3(Q,Z(N))$. The outer action $\alpha$ is realized by an extension if and
only if that obstruction vanishes.

When the obstruction vanishes, the set of equivalence classes of extensions
realizing $\alpha$ is a torsor under $H^2(Q,Z(N))$; choosing a base extension
identifies the torsor with that group. The later theorem proves this using
normalized automorphism lifts and factor systems; the present remark is
orientation before that construction.
