---
id: def-group-of-multiplicative-type-and-torus
kind: definition
title: "Groups of multiplicative type and tori"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Whole authored item, including statement or definition, every proof or verification step, and used direct supplier interfaces; completed prior Step5 reader/adjudicator evidence reconciled to the current mathematics. Transitive supplier proofs were not audited in full."
    delegated_by: "owner via tools/autopilot (frontier-38-owner-30)"
    evidence:
      - "research/frontier-38-owner-30-reader-25.md"
      - "research/frontier-38-owner-30-alpha-batch-25-5a.md"
      - "research/frontier-38-owner-30-step5-hash-25-post.json"
    reviewed_raw_sha256: "85053bb29e1640be6fdf5c40b8f5aa3ef08f9257212cfaf0dc47d48e12186553"
    content_sha256: "e1f1176f04ff924145db33ed46369d274f7797dec0076c74ad0ff4c99bfca1dc"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups, corrected 2022 edition"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
    - title: "SGA 3, Expose VIII, section 1, Polo\u2013Gille edition"
      url: https://webusers.imj-prg.fr/~patrick.polo/SGA3/Exp8-8nov09.pdf
    - title: "SGA 3, Expose X, section 1, Polo\u2013Gille edition"
      url: https://webusers.imj-prg.fr/~patrick.polo/SGA3/Expo10-8nov09.pdf
deps: ["def-diagonalizable-group-and-character-module"]
---

## Definition

A group scheme of finite type over a field $k$ is **of multiplicative type** if it is fpqc locally diagonalizable: there is a faithfully flat quasi-compact covering $S'\to\operatorname{Spec}k$ on which it becomes a diagonalizable group. A **torus** over $k$ is a finite-type group scheme fpqc locally isomorphic to $\mathbf G_m^r$, for a finite integer $r\ge0$. A group or torus is **split** if the relevant isomorphism already exists over $k$.

Diagonalizable means the group-algebra construction in [[def-diagonalizable-group-and-character-module]]. These definitions include the trivial torus of rank zero and nonsmooth multiplicative-type groups. No affineness or separable splitting condition is imposed by definition. Affineness and field splitting are proved locally on this page, followed by finite separable splitting.
