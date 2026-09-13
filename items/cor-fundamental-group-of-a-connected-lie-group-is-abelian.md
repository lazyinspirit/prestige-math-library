---
id: cor-fundamental-group-of-a-connected-lie-group-is-abelian
kind: corollary
title: The fundamental group of a connected Lie group is abelian
status: published
origin: pipeline
deps: [thm-fundamental-group-of-a-topological-group-is-abelian]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Proposition 3.5(ii) and Remark 3.7, printed page 26
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

For every connected Lie group $G$ with identity $e$, the fundamental group
$\pi_1(G,e)$ is abelian.

## Facts & Assumptions

**Given:** A connected Lie group $G$ with identity $e$.

[F1] The fundamental group of any topological group is abelian.
[[thm-fundamental-group-of-a-topological-group-is-abelian]].

## Proof

**Proof technique:** direct.

1.1 Smooth multiplication and inversion are continuous, so the underlying space of $G$ is a topological group. [given, algebra]

2.1 Apply [F1] to this topological group to conclude that $\pi_1(G,e)$ is abelian. Connectedness is retained because it is the convention needed by the covering-Lie-group applications, although [F1] shows that this conclusion itself holds for the identity component without using global connectedness. No choice axiom or boundary case beyond the trivial group is involved. [F1, step 1.1] ∎
