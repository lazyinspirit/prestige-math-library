---
id: lem-fredholm-maps-have-countable-proper-local-restrictions
kind: lemma
title: Countable proper local restrictions of a Fredholm map
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-countable-base-banach-manifold-and-smooth-map, lem-local-finite-dimensional-reduction-for-a-fredholm-map]
proof_strategy: direct
sources:
  references:
    - title: "Stephen Smale, An Infinite Dimensional Version of Sard's Theorem, proof of Theorems 1.3 and 1.6, pp. 862-863"
      url: "https://people.math.harvard.edu/~dafr/M392C-2018-MorseTheory/Readings/Smale.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical new_item review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-10-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Assume the Axiom of Choice. Let $P:M\to N$ be a $C^h$ Fredholm map,
$h\ge1$, between Hausdorff second-countable real Banach manifolds. There is
a countable family of subsets $C_j\subset M$ whose interiors cover $M$.
For each $j$ there are a source open set $W_j$ and a target chart $V_j$
such that $C_j$ is closed **relative to $W_j$**, $P(W_j)\subset V_j$,
$P|_{C_j}:C_j\to V_j$ is proper, and in coordinates on $W_j,V_j$ the map has
Fredholm normal form
$$ (u,v)\longmapsto (u,g_j(u,v)), $$
where $v$ and the target obstruction coordinate are finite-dimensional.
Proper means that the inverse image of each compact subset of $V_j$ is
compact. The conclusion includes $M=\varnothing$, with an empty family.

## Facts & Assumptions

**Given:** AC and the map in the statement.

[F1] Every point has a normal-form neighbourhood with product source
coordinates $U\times A$, where $U$ is open in a Banach range space and $A$
is open in a finite-dimensional kernel space
([[lem-local-finite-dimensional-reduction-for-a-fredholm-map]]).

[F2] The source is second countable
([[def-countable-base-banach-manifold-and-smooth-map]]).

## Proof

**Proof technique:** direct.

1.1 If $M$ is empty, the empty family works. Otherwise fix $x\in M$ and use [F1] to obtain $W$, a source coordinate diffeomorphism $T:W\to U\times A$, and a target chart in which $P(T^{-1}(u,v))=(u,g(u,v))$. Write $T(x)=(u_x,v_x)$. Choose radii $a,b>0$ small enough that the closed balls $\overline B_a(u_x)\subset U$ and $\overline B_b(v_x)\subset A$. Set $$C_x:=T^{-1}\bigl(\overline B_a(u_x)\times\overline B_b(v_x)\bigr).$$ Then $C_x$ is closed relative to $W$, and its interior in $M$ contains $x$. [F1, given, choose]

2.1 The restriction $P|_{C_x}:C_x\to V$ is proper. To see this, let $K\subset V$ be compact and take a sequence $(z_i)$ in $C_x\cap P^{-1}(K)$. After a subsequence $P(z_i)$ converges in $K$; in target coordinates its first components $u_i$ therefore converge to some $u\in\overline B_a(u_x)$. The $v_i$ lie in the compact finite-dimensional ball $\overline B_b(v_x)$, so a further subsequence converges to $v\in\overline B_b(v_x)$. Continuity of $T^{-1}$ and $P$ gives $z_i\to T^{-1}(u,v)\in C_x\cap P^{-1}(K)$. This subset is metrizable through $T$, so sequential compactness implies compactness. The argument uses no compactness of a ball in the Banach range coordinate. [step 1.1, algebra]

3.1 The interiors of the $C_x$ form an open cover of $M$. By [F2], under AC every open cover has a countable subcover: for each member of a countable base that is contained in some cover member, choose one such member. Keep the corresponding countably many $C_x$, and index them by a subset of $\mathbb N$. Their interiors still cover $M$, and each retains the properties proved in steps 1.1–2.1. [F2, step 1.1, step 2.1, choose] ∎