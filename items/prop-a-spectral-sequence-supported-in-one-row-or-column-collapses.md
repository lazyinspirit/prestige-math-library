---
id: prop-a-spectral-sequence-supported-in-one-row-or-column-collapses
kind: proposition
title: Collapse from one column at page s ≥ 1 or one row at page s ≥ 2
deps: ["def-collapse-at-a-page", "def-homological-spectral-sequence", "def-cohomological-spectral-sequence"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Charles A. Weibel, An Introduction to Homological Algebra, Chapter 5
      url: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
    - title: Romyar Sharifi, Homological Algebra
      url: https://math.ucla.edu/~sharifi/homalg.pdf
status: draft
origin: pipeline
pipeline_run: phase-2-catchup-24
proof_strategy: direct
---



## Statement

In homological or cohomological indexing, support in one column at page s≥1 forces collapse at that page. Support in one row at page s≥2 forces collapse there.

## Facts & Assumptions

**Given:** A homological or cohomological spectral sequence supported in one column at s≥1, or one row at s≥2.

[F1] Collapse means vanishing of all later differentials ([[def-collapse-at-a-page]]).

[F2] A homological spectral sequence has differentials of bidegree $(-r,r-1)$, specified next-page homology isomorphisms, and persistent zero support because each later term is a subquotient of the preceding term: [[def-homological-spectral-sequence]].

[F3] A cohomological spectral sequence has differentials of bidegree $(r,1-r)$ and is equivalently a homological spectral sequence after reversing both coordinates: [[def-cohomological-spectral-sequence]].

## Proof

**Proof technique:** direct.

1.1 In homological indexing, zero terms on page $s$ remain zero on every later page by the subquotient clause in [F2]. Thus if all nonzero terms on page $s$ have first coordinate $c$, the same holds on every page $r\ge s$. The $r$-differential changes the first coordinate by $-r$. Since $r\ge s\ge1$, every differential has at least one zero endpoint. All are zero, giving collapse by [F1]. [F1, F2]

2.1 For a single homological row, the second coordinate changes by $r-1$, which is nonzero when $r\ge s\ge2$; persistence from [F2] and the same endpoint argument give collapse. By [F3], cohomological pages likewise retain the one-row or one-column support after reversing both coordinates, while their changes are $r$ and $1-r$, again nonzero under the respective bounds. The bounds matter: $d^0$ may run inside one column, and $d^1$ inside one row; those maps are not forced to vanish by the stated support condition alone. [F1, F2, F3] ∎

## Source notes

[Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.122–125 and Definitions 5.4.2–4 pp.132–133; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), §4.1 pp.87–89 and Definition 4.2.1 p.90.
