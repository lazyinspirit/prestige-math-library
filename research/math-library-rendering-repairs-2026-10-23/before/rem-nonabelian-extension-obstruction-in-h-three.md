---
id: rem-nonabelian-extension-obstruction-in-h-three
kind: remark
title: "Nonabelian extension obstruction in H^3"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-h-two-classifies-extensions-with-fixed-abelian-kernel-action, thm-nonabelian-extension-obstruction-and-torsor-with-choice]
sources:
  scraped: []
  references:
    - title: "Samuel Eilenberg and Saunders Mac Lane, Cohomology Theory in Abstract Groups. II: Group Extensions with a non-Abelian Kernel, Annals of Mathematics (1947)"
      url: "https://doi.org/10.2307/1969174"
    - title: "Clara Loh, Group Cohomology, SS 2019"
      url: "https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf"
    - title: "Caroline Lassueur, Cohomology of Groups, SS 2021"
      url: "https://classueur.github.io/maths/teaching/skripte/COHOM_SS21.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-05-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Remark

The classification theorem on this page assumes the Axiom of Choice and an
abelian kernel with a specified action. For a possibly nonabelian kernel $N$,
assume Choice and prescribe an outer action
$Q\to\operatorname{Out}(N)$.

Then [[thm-nonabelian-extension-obstruction-and-torsor-with-choice]] supplies
an obstruction in $H^3(Q,Z(N))$ that vanishes exactly when an extension
exists. When one exists, the equivalence classes form a torsor under
$H^2(Q,Z(N))$. In general the torsor has no preferred zero class; a chosen
base extension identifies it with the group.
