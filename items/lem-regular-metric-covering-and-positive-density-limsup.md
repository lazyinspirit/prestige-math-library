---
dependency_level: 2
id: lem-regular-metric-covering-and-positive-density-limsup
kind: lemma
title: "Regular metric covering and positive-density limsup comparison"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - def-countable-choice
  - def-doubling-gauge-and-locally-regular-hausdorff-measure
  - thm-hausdorff-gauge-measure-is-borel-regular
  - cor-second-countable-lch-locally-finite-borel-measures-are-regular
proof_strategy: direct
sources:
  references:
    - title: "Mass-transference and metric approximation source proof, with explicit local reconstruction"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v164-n3-p06.pdf"
      locator: "\u00a7\u00a73\u20136: covering/density inputs; metric proof made explicit"
---

## Statement

Assume Countable Choice. Let $X$ be a locally compact metric space with a countable ball cover at every positive scale, and let $\nu=\mathcal H^g$ satisfy $c g(r)\le\nu(B(x,r))\le Cg(r)$ locally uniformly, with $g$ doubling. The measure is regular and finite on compact sets. Every countable bounded-radius ball family has a disjoint subfamily whose fivefold dilates cover its union. Consequently, if $A_i=B(x_i,R_i)$ with $R_i\to0$ have full limsup measure in every ball, then in every precompact ball $B$, and beyond every index threshold, there is a finite family with $3A_i\subset B$, pairwise disjoint $3A_i$, and $\sum_i g(R_i)\ge c_*g(r(B))$, where $c_*>0$ depends only on the local regularity and doubling constants. The same finite selection works in a relatively open subset of $B$ occupying a fixed positive fraction of $\nu(B)$, with a corresponding constant. Finally, if Borel sets $U_i\subset A_i$ satisfy $\nu(U_i)\ge a\nu(A_i)$ for a fixed $a>0$, then $\nu(\limsup A_i\setminus\limsup U_i)=0$.

## Facts & Assumptions

**Given:** The hypotheses and a fixed sufficiently small precompact region; all constants below are uniform there.

[A1] Countable Choice supplies countable covers and measure constructions. [[def-countable-choice]]

[F1] Gauge measure measures Borel sets; regularity holds for compact-finite Borel measures on second-countable locally compact Hausdorff spaces. [[thm-hausdorff-gauge-measure-is-borel-regular]] [[cor-second-countable-lch-locally-finite-borel-measures-are-regular]]

[F2] Local regularity and doubling bound $\nu(tB)/\nu(B)$ uniformly for each fixed $t\ge1$. [[def-doubling-gauge-and-locally-regular-hausdorff-measure]]

## Proof

1.1 Choose the countable covers at scales $2^{-j}$. Their union of centers is dense: any ball contains a cover center at distance less than its radius when the cover diameters are sufficiently small. Rational-radius balls about these centers give a countable base. Compact sets have finite measure by a finite subcover of uniformly small balls. Thus [F1] gives regularity. Local regularity and doubling give [F2] by iteration. [given, A1, F1, F2, choose, algebra]

1.2 For a countable family with radii bounded by $R$, inspect dyadic classes $(2^{-j-1}R,2^{-j}R]$ in increasing $j$, and within each class inspect the given enumeration, retaining exactly balls disjoint from all those already retained. The retained balls are disjoint. Every rejected ball meets a retained ball of radius greater than half its own, so the triangle inequality puts it inside that retained ball's fivefold dilate. This construction uses a specified recursion and no choices from unindexed families. [given, construct, algebra]

2.1 In a ball $B$ the transformed balls of a sufficiently late tail meeting its concentric half-ball lie in $B$ even after tripling. Apply step 1.2 to their triple dilates. The resulting disjoint triple balls have fifteenfold original dilates covering the half-ball up to a null set, by fullness. Doubling and regularity imply $\sum g(R_i)\ge c_*g(r(B))$. Countable additivity permits a finite initial part retaining half this lower bound. In an open set $O\subset B$ of measure at least $a\nu(B)$, first take a compact core of measure at least $a\nu(B)/2$ by step 1.1, and a late tail whose triples meeting that core stay inside $O$; the identical argument gives the asserted finite selection, with constant depending also on $a$. [step 1.1, step 1.2, F2, algebra]

3.1 Put $E_N=(\limsup A_i)\setminus\bigcup_{i\ge N}U_i$. If some $E_N$ has positive measure, regularity gives a compact subset $K$ with $0<\nu(K)<\infty$. Choose a precompact open $O\supset K$ with $\nu(O\setminus K)<a\nu(K)/(2D_5)$, where $D_5$ bounds the fivefold doubling ratio. Balls $A_i$, $i\ge N$, meeting $K$ and sufficiently small to lie in $O$ cover $K$, because each point of $K$ is in their limsup. Step 1.2 gives a disjoint subfamily with $\sum\nu(A_i)\ge\nu(K)/D_5$. Their disjoint $U_i$ lie in $O\setminus K$, contradicting $\nu(O\setminus K)\ge a\nu(K)/D_5$. Thus every $E_N$ is null, and their countable union proves the last assertion. [step 1.1, step 1.2, F2, algebra] ∎
