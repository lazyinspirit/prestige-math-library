---
id: lem-path-homotopy-traces-braid-isotopy
kind: lemma
title: "A based configuration-loop homotopy traces a braid isotopy"
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps: [lem-a-configuration-loop-traces-a-geometric-braid,
       def-homotopy-relative-and-path-homotopy,
       def-braid-isotopy-relative-top-and-bottom,
       def-ordered-configuration-space,
       def-product-topology,
       thm-homotopy-lifting-for-covering-maps]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, §1.3, printed p. 5"
      url: https://arxiv.org/pdf/1010.0321
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Statement

Let $H:I_s\times I_t\to C_n(\operatorname{int}D^2)$ be a continuous homotopy
of based loops at $[Q]$, written with the homotopy parameter $s$ first and
height $t$ second. Thus
$$H(s,0)=H(s,1)=[Q]\quad(s\in I),$$
and the boundary loops are $\alpha(t):=H(0,t)$ and $\beta(t):=H(1,t)$.
The unique ordered lifts of $\alpha$ and $\beta$ starting at $Q$ trace
geometric braids that are braid-isotopic relative to their top and bottom
endpoints.

## Facts & Assumptions

**Given:** $n\in\mathbb N$; a continuous map $H:I_s\times I_t\to C_n(\operatorname{int}D^2)$ satisfying the displayed based-loop endpoint conditions; and its boundary loops $\alpha=H(0,-)$ and $\beta=H(1,-)$.

[L1] The quotient map $p^\circ:F_n(\operatorname{int}D^2)\to C_n(\operatorname{int}D^2)$ is a covering, and every based interior configuration loop at $[Q]$ has a unique lift from $Q$ whose coordinate graphs form its geometric braid ([[lem-a-configuration-loop-traces-a-geometric-braid]]).

[L2] A path homotopy relative to its endpoints is a jointly continuous map on the product square fixing the two endpoints throughout; switching the two coordinates writes the homotopy parameter first and the path parameter second ([[def-homotopy-relative-and-path-homotopy]]).

[L3] If $p:E\to B$ is a covering, a homotopy $G:Y\times I\to B$ and a lift of $G(-,0)$ are given, then there is a unique continuous lift of $G$ extending that initial lift ([[thm-homotopy-lifting-for-covering-maps]]).

[L4] $F_n(X)$ is a subspace of the product $X^n$ with its product topology ([[def-ordered-configuration-space]]).

[L5] The product topology is the initial topology of the coordinate projections, so coordinate maps of a map into a product are continuous ([[def-product-topology]]).

[L6] A braid isotopy has jointly continuous coordinate maps and requires the bottom tuple pointwise fixed and the top endpoint set of every slice equal to $Q$ ([[def-braid-isotopy-relative-top-and-bottom]]).

[L7] Since each labelled top endpoint lies in the finite discrete set $Q$, joint continuity makes that endpoint constant throughout the isotopy ([[def-braid-isotopy-relative-top-and-bottom]]).

No arbitrary lift is chosen: the initial lift along $t=0$ is the specified constant map $s\mapsto Q$, and the homotopy lift is unique.

## Proof

**Proof technique:** direct.

1.1 *Specify the initial lift.* By [L1], $p^\circ$ is a covering. The constant map $\widetilde H_0:I_s\to F_n(\operatorname{int}D^2)$, $\widetilde H_0(s)=Q$, is continuous and lifts the edge $H(s,0)=[Q]$ because $p^\circ(Q)=[Q]$. [L1, L2]

2.1 *Lift the full square.* Apply [L3] to $G=H$ with $Y=I_s$, height coordinate $t$, and initial lift from step 1.1. There is a unique jointly continuous lift $$\widetilde H:I_s\times I_t\to F_n(\operatorname{int}D^2)$$ with $p^\circ\circ\widetilde H=H$ and $\widetilde H(s,0)=Q$. [step 1.1, L3]

3.1 *Each lifted height path is the braid trace.* Fix $s\in I$. By step 2.1, $t\mapsto\widetilde H(s,t)$ lifts the based loop $H(s,-)$ from $Q$. Uniqueness in [L1] identifies it with the lift whose coordinate graphs form the geometric braid traced by that loop. Its terminal tuple projects to $H(s,1)=[Q]$, so its endpoint set is $Q$. This includes $n=1$, where there are no pairwise-collision conditions. [step 2.1, L1, L2]

3.2 *Identify the two boundary braids.* By step 2.1, $\widetilde H(0,-)$ lifts $\alpha$ from $Q$ and $\widetilde H(1,-)$ lifts $\beta$ from $Q$. Uniqueness in [L1] identifies these restrictions with the traces of the two boundary loops, so they are the exact braids at the ends of the claimed isotopy. [step 2.1, L1, L2]

4.1 *The lifted coordinates give a braid isotopy.* Define $Z_j(s,t)$ to be the $j$th coordinate of $\widetilde H(s,t)$ under the fixed real-complex identification. The lift in step 2.1 is jointly continuous into $F_n(\operatorname{int}D^2)\subseteq(\operatorname{int}D^2)^n$; the coordinate projections are continuous by [L4, L5]. Thus each $Z_j$ is jointly continuous. By step 3.1, every slice is a geometric braid with bottom $Q$ and top endpoint set $Q$. It therefore meets the braid-isotopy conditions [L6]. By [L7], joint continuity also keeps each labelled top endpoint fixed during the isotopy. For $n=0$, both configuration spaces are points and this is the unique empty braid isotopy. [step 2.1, step 3.1, L4, L5, L6, L7]

5.1 The jointly continuous lifted family has the prescribed boundary braids from step 3.2 and satisfies every braid-isotopy condition by step 4.1. [step 3.2, step 4.1] ∎
