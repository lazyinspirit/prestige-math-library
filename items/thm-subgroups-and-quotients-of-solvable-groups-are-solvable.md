---
id: thm-subgroups-and-quotients-of-solvable-groups-are-solvable
kind: theorem
title: "Subgroups and quotients of solvable groups are solvable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-homomorphisms-respect-commutators-and-derived-series, def-derived-series-solvable-group-and-derived-length, prop-canonical-quotient-map]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Subgroup Series I"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/subgpseries1.pdf"
    - title: "K. Igusa, Notes on Jordan-Hölder, section 5"
      url: "https://people.brandeis.edu/~igusa/Math131b/JH.pdf"
pipeline_run: null
---

## Statement

Every subgroup and every quotient of a solvable group is solvable. No finiteness hypothesis is required.

## Facts & Assumptions

**Given:** A solvable group $G$, a subgroup $H\le G$, and a normal subgroup $N\trianglelefteq G$.

[L1] For every $r$, $H^{(r)}\le G^{(r)}$, and a surjection $f:G\to Q$ satisfies $f(G^{(r)})=Q^{(r)}$ ([[lem-homomorphisms-respect-commutators-and-derived-series]]).

[F1] Solvability means $G^{(n)}=1$ for some natural number $n$ ([[def-derived-series-solvable-group-and-derived-length]]).

[F2] For $N\trianglelefteq G$, the canonical projection $q:G\to G/N$, $q(g)=gN$, is a surjective group homomorphism ([[prop-canonical-quotient-map]]).

## Proof

**Proof technique:** direct.

1.1 Choose $n$ with $G^{(n)}=1$. [given, F1, choose]

2.1 By [L1], $H^{(n)}\le G^{(n)}=1$, so $H$ is solvable. [step 1.1, L1, F1]

2.2 Since the quotient map is surjective, [L1] and [F2] give $(G/N)^{(n)}=q(G^{(n)})=1$, so $G/N$ is solvable. [step 1.1, L1, F1, F2]

3.1 Thus solvability passes to both subgroups and quotients. [step 2.1, step 2.2] ∎
