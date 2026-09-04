---
id: fs-zp-is-a-torsion-group-because-all-its-coordinate-groups-are-finite
kind: false-statement
title: "Because every coordinate group is finite, Zp is an additive torsion group"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-additive-group-of-zp-is-torsion-free]
proof_strategy: direct
verification:
  audited: 2026-09-04
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

## Statement

Because every coordinate group $\mathbb Z/p^n\mathbb Z$ is finite, the
additive group of $\mathbb Z_p$ is torsion.

## Facts & Assumptions

**Given:** The additive group of $\mathbb Z_p$.

[L1] The additive group of $\mathbb Z_p$ is torsion-free
([[prop-additive-group-of-zp-is-torsion-free]]).

## Refutation

**Proof technique:** direct.

1.1 The element $1\in\mathbb Z_p$ is nonzero. [given]

2.1 If the additive group of $\mathbb Z_p$ were torsion, some positive multiple of $1$ would be $0$. That contradicts [L1], since [L1] says that no nonzero element of $\mathbb Z_p$ has finite order. [L1, step 1.1]

3.1 Therefore the statement is false. Finite coordinate groups do not force torsion in the inverse limit. [step 1.1, step 2.1] ∎
