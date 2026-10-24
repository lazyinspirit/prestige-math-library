---
id: fs-artinian-modules-are-noetherian
kind: false-statement
title: "False statement: every Artinian module is Noetherian"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [ex-prufer-p-group-is-artinian-not-noetherian]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "Arvind Nair, Algebra I, Lecture 5"
      url: "https://mathweb.tifr.res.in/~arvind/algebra/Lectures_algebra.pdf"
pipeline_run: null
---

## Statement

**False claim:** every Artinian module is Noetherian. See [[ex-prufer-p-group-is-artinian-not-noetherian]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the false claim.

[L1] For every prime $p$, the Prüfer group $\mathbb Z(p^\infty)\le\mathbb Q/\mathbb Z$ is Artinian but not Noetherian as a $\mathbb Z$-module. ([[ex-prufer-p-group-is-artinian-not-noetherian]]).

## Refutation

**Proof technique:** direct.

1.1 We use the preceding Prüfer $p$-group, quoting its complete subgroup classification to establish DCC and its strict ascending chain of finite cyclic subgroups to refute Noetherianity. [L1, given, algebra]

2.1 One witness refutes a universally quantified claim, and $\mathbb Z(p^\infty)$ is one: it is Artinian and not Noetherian by [L1], so "every Artinian module is Noetherian" is false. This proves the stated claim. [step 1.1, L1, given, algebra] ∎
