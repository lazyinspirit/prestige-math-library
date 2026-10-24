---
id: lem-metric-open-covers-have-point-finite-refinements
kind: lemma
title: "Under choice, every open cover of a metric space has a point-finite open refinement"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cover-refinement-and-local-finiteness, def-metric-topology, def-axiom-of-choice, thm-well-ordering-theorem, lem-geometric-sequence-null]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "D. Ornstein, A New Proof of the Paracompactness of Metric Spaces, Proc. Amer. Math. Soc. 21 (1969), 341–342"
      url: "https://www.ams.org/proc/1969-021-02/"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Every open cover of a metric space has a point-finite
open refinement.

## Facts & Assumptions

**Given:** Choice, a metric space $X$, and an open cover $\{C_\alpha\}_{\alpha\in A}$.

[A1] Every set can be well ordered under the Axiom of Choice ([[def-axiom-of-choice]], [[thm-well-ordering-theorem]]).

[F1] Metric balls are open and each point of an open set has a ball contained in that set ([[def-metric-topology]]).

[F2] A point-finite open refining cover is as in [[def-cover-refinement-and-local-finiteness]].

[L1] The dyadic radii $2^{-n}$ tend to $0$ ([[lem-geometric-sequence-null]], claim 1 with ratio $1/2$).

## Proof

**Proof technique:** constructive.

1.1 Well order $\{C_\alpha\}$ by [A1], and write $R(x,n)=B(x,2^{-n})$. A ball $R(z,n+1)$ is *chosen for* $C_\alpha$ when $n$ is the least natural number with $R(z,n)\subseteq C_\alpha$ and, in addition, $R(z,n)\subseteq C_\beta$ for some $\beta<\alpha$. Let $\mathcal G_\alpha$ be the union of all balls chosen for $C_\alpha$. [A1, F1, L1, construct]

2.1 Put $C'_\alpha:=C_\alpha\setminus\overline{\mathcal G_\alpha}$. Each $C'_\alpha$ is open and refines $C_\alpha$. [step 1.1, construct]

3.1 The $C'_\alpha$ cover. Otherwise let $C_\alpha$ be the first original member containing an omitted point $x$. Then $x\in\overline{\mathcal G_\alpha}$. By [L1], choose $N$ with $B(x,3\cdot2^{-N})\subseteq C_\alpha$, and put $\delta=2^{-(N+2)}$. Some chosen ball $R(z,n_z+1)$ meets $B(x,\delta)$; write its radius as $r=2^{-(n_z+1)}$. If $r>\delta$, then $d(x,z)<r+\delta<2r$, so its expanded ball $R(z,n_z)$ contains $x$. If $r\le\delta$, then $d(x,z)<r+\delta\le2\delta<2^{-N}$, so $R(z,N)\subseteq C_\alpha$ and minimality gives $n_z\le N$; hence $r\ge2^{-(N+1)}=2\delta$, a contradiction. Thus in every case an expanded chosen ball contains $x$. That expanded ball lies in some $C_\beta$ with $\beta<\alpha$, contradicting the choice of $\alpha$. [step 1.1, step 2.1, F1, L1]

3.2 If $x\in C'_\alpha$ and $n$ is least with $R(x,n)\subseteq C_\alpha$ (which exists by [L1]), then $C_\alpha$ is the first cover member containing $R(x,n)$: otherwise $R(x,n+1)$ would be chosen for $C_\alpha$ and would contain $x$, contrary to $x\notin\overline{\mathcal G_\alpha}$. For each $n$ there is at most one such first member, and as $n$ increases their ordinal indices are nonincreasing. Infinitely many distinct indices would therefore give an infinite strictly descending sequence of ordinals, impossible because its range has a least member. Thus only finitely many $C'_\alpha$ contain $x$. [step 1.1, step 2.1, L1]

4.1 Thus $\{C'_\alpha\}$ is the point-finite open refinement required by [F2]. [F2, step 3.1, step 3.2, discharge-construct] ∎

## Remarks

This is part (A), pages 341–342, of Ornstein's primary proof. Its chosen dyadic-ball construction supplies the point-finite refinement to which the controlled-radius construction in part (B) is then applied.
