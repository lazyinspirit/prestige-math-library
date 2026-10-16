---
id: rem-qa-35-private-coin-lower-bound-unresolved
kind: remark
title: "Private-coin SMP Equality lower bound and source recovery"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps: ["def-qa-35-equality-promise", "def-qa-35-finite-communication-protocol", "thm-qa-35-private-coin-equality-lower-bound"]
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all distributions, sums, bases, and selection sets are finite."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ilan Newman and Mario Szegedy, Public vs. Private Coin Flips in One Round Communication Games"
      url: https://dl.acm.org/doi/10.1145/237814.238004
      locator: "§4.1–4.2, PDF pp.4–9, matrix packing theorem and complete proof."
    - title: "Ilan Newman and Mario Szegedy, Public vs. Private Coin Flips in One Round Communication Games"
      url: https://cs.haifa.ac.il/~ilan/online-papers/mario-cc.ps
      locator: "Author-hosted full PostScript, §4.1–4.2, pp.4–9; recovered after the ACM endpoint returned HTTP 403."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 16 §§16.1 and 16.6, PDF pp.147–153; private/public-coin SMP and equality lower-bound context (§16.1), quantum fingerprint construction and SWAP-test analysis (§16.6)."
---

## Remark

The standard $\Omega(\sqrt n)$ private-coin simultaneous-message Equality lower bound is proved locally in [[thm-qa-35-private-coin-equality-lower-bound]]. The full Newman–Szegedy author-hosted manuscript was recovered and read after the ACM PDF endpoint returned HTTP 403; its matrix-packing theorem supplies the proof route, while the library theorem above contains the complete local derivation. A constant-communication public-coin hash uses a shared seed and is a different resource model.
