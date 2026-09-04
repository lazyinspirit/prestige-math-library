---
id: def-pro-p-group
kind: definition
title: "A pro-p group is a profinite group that is an inverse limit of finite p-groups"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-profinite-group-by-inverse-limit]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Gareth Wilkes, Profinite Groups and Group Cohomology lecture notes"
      url: "https://www.dpmms.cam.ac.uk/~grw46/LectureNotes.pdf"
    - title: "Brian Osserman, Inverse limits and profinite groups"
      url: "https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf"
---

## Definition

A **pro-$p$ group** is a topological group that is topologically isomorphic to
an inverse limit of finite $p$-groups. In particular every pro-$p$ group is a
profinite group in the sense of [[def-profinite-group-by-inverse-limit]].

The prime $p$ is part of the structure: a group is pro-$p$ only when the
finite quotients in the chosen inverse-limit presentation are all $p$-groups.
