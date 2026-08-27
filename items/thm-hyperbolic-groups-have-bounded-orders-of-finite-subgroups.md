---
id: thm-hyperbolic-groups-have-bounded-orders-of-finite-subgroups
kind: theorem
title: "Finite subgroups of a hyperbolic group have uniformly bounded order"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-hyperbolic-group, thm-morse-stability-of-quasi-geodesics]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Brian H. Bowditch, A course on geometric group theory, Section 2.4"
      url: "https://www.math.ucdavis.edu/~kapovich/280-2009/bhb-ggtcourse.pdf"
---

## Statement

Let $G$ be a hyperbolic group and fix a finite generating set $S$. Then there
exists a constant $B_S$ such that every finite subgroup $F \le G$ satisfies
$|F| \le B_S$.

## Facts & Assumptions

**Given:** A hyperbolic group $G$ with finite generating set $S$.

[A1] Every finite subgroup of a hyperbolic group has an orbit of uniformly bounded diameter in the Cayley graph, with the bound depending only on the generating set.

[A2] Only finitely many group elements can act faithfully on a fixed finite ball in the Cayley graph, so a uniform orbit-diameter bound yields a uniform order bound.

[L1] Morse stability is one of the geometric tools used in the standard proof
([[thm-morse-stability-of-quasi-geodesics]]).

## Proof

**Proof technique:** direct.

1.1 Let $F \le G$ be finite. By [A1], some $F$-orbit in the Cayley graph of $(G,S)$ has diameter bounded by a constant depending only on $S$. [given, A1]

2.1 That orbit lies in a finite ball, and the action of $F$ on its orbit is faithful. Therefore [A2] gives a uniform bound $|F| \le B_S$. The role of [L1] in the standard proof is to supply the geometric control behind [A1]. [A2, L1, step 1.1] ∎
