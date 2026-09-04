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
external_dependency:
  source_url: "https://dokumen.pub/eilenberg-mac-lane-collected-works-0122340205-9780122340208.html"
  exact_statement: "For a prescribed outer action of Q on N, Eilenberg-Mac Lane identify an obstruction in H^3(Q,Z(N)); the obstruction vanishes exactly when an extension exists, and then the equivalence classes form a principal homogeneous space under H^2(Q,Z(N))."
  local_proof_attempt: "This page develops only the pre-cohomological extension dictionary and does not introduce the degree-two and degree-three cohomology machinery needed for the theorem."
  necessity: "The remark records the correct boundary of the nonabelian extension problem without pretending to prove the full classification before the cohomology pages."
verification:
  audited: 2026-09-04
  sources_checked:
    date: 2026-09-04
    scope: citations
    by: session-audit
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Samuel Eilenberg and Saunders Mac Lane, Cohomology Theory in Abstract Groups. II. Group Extensions with a non-Abelian Kernel"
      url: "https://dokumen.pub/eilenberg-mac-lane-collected-works-0122340205-9780122340208.html"
---

## Remark

For an abstract kernel $\alpha:Q\to\operatorname{Out}(N)$, the full
Eilenberg-Mac Lane theorem identifies a canonical obstruction class in
$H^3(Q,Z(N))$. The outer action $\alpha$ is realized by an extension if and
only if that obstruction vanishes.

When the obstruction vanishes, the set of equivalence classes of extensions
realizing $\alpha$ is not naturally a group, but it is a torsor under
$H^2(Q,Z(N))$. This page records that boundary faithfully and defers the actual
cohomological theorem to the later cohomology pages.
