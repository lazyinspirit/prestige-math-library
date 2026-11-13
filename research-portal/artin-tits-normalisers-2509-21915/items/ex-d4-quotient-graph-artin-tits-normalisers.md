---
id: ex-d4-quotient-graph-artin-tits-normalisers
kind: example
title: D4 Brink–Howlett generating graph
status: published
domain: mathematics
origin: pipeline
deps:
  - def-d4-example-data-artin-tits-normalisers
  - ex-d4-labelled-chamber-graph-artin-tits-normalisers
  - ex-d4-normaliser-orbits-artin-tits-normalisers
  - ex-d4-universal-wall-graph-artin-tits-normalisers
  - thm-universal-brink-howlett-cover-artin-tits-normalisers
  - prop-groupoid-orbit-interface-artin-tits-prerequisites
  - lem-normaliser-chamber-action-artin-tits-normalisers
dependency_roles:
  def-d4-example-data-artin-tits-normalisers: mathematical-premise
  ex-d4-labelled-chamber-graph-artin-tits-normalisers: mathematical-premise
  ex-d4-normaliser-orbits-artin-tits-normalisers: mathematical-premise
  ex-d4-universal-wall-graph-artin-tits-normalisers: mathematical-premise
  thm-universal-brink-howlett-cover-artin-tits-normalisers: mathematical-premise
  prop-groupoid-orbit-interface-artin-tits-prerequisites: mathematical-premise
  lem-normaliser-chamber-action-artin-tits-normalisers: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 30, Figure 4 and §7.2.1
      statement: Identifying same-coloured vertices of Figure 3 gives the four-object
        graph in Figure 4. Its nonloop generators are st:2→1, ts:1→2, vt:2→4,
        tv:4→2, ut:2→3 and tu:3→2. Its loops are u,v at object 1, s,u at object
        4, and s,v at object 3. Opposite arrows are labelled by inverse
        elements.
      hypotheses: The D4 example with central vertex 2, J={2}, and the article's
        chamber and crossing conventions.
      reading_limits: This downstream pass read the frozen extracted §7.2.1 discussion
        around Figure 4 and the current completed chamber-graph,
        normaliser-action and quotient suppliers. The textual figure labels are
        attribution only; no new visual inspection of Figure 4 is claimed. The
        verification derives the graph from the supplier neighbour lists and
        local label cancellations.
formulation_deps:
  - def-d4-example-data-artin-tits-normalisers
  - ex-d4-labelled-chamber-graph-artin-tits-normalisers
  - ex-d4-normaliser-orbits-artin-tits-normalisers
  - ex-d4-universal-wall-graph-artin-tits-normalisers
  - thm-universal-brink-howlett-cover-artin-tits-normalisers
argument_deps:
  - def-d4-example-data-artin-tits-normalisers
  - ex-d4-labelled-chamber-graph-artin-tits-normalisers
  - ex-d4-normaliser-orbits-artin-tits-normalisers
  - ex-d4-universal-wall-graph-artin-tits-normalisers
  - thm-universal-brink-howlett-cover-artin-tits-normalisers
  - prop-groupoid-orbit-interface-artin-tits-prerequisites
  - lem-normaliser-chamber-action-artin-tits-normalisers
dependency_level: 19
---

## Example

Use the $D_4$ Coxeter system with central vertex $2$, $J=\{2\}$, and simple reflections $s=s_1$, $t=s_2$, $u=s_3$, $v=s_4$. The Brink–Howlett groupoid is the quotient of the universal chamber groupoid by the normaliser quotient $N(W,J)=\operatorname{Norm}_W(W_J)/W_J$. Its generating graph has the four objects $1,2,3,4$, where $i$ denotes the singleton $\{i\}$.

Identifying the same-coloured vertices of the universal chamber graph gives this four-object graph. Its nonloop generators are $st:2\to1$, $ts:1\to2$, $vt:2\to4$, $tv:4\to2$, $ut:2\to3$ and $tu:3\to2$. Its loops are $u,v$ at object $1$, $s,u$ at object $4$, and $s,v$ at object $3$. Opposite arrows are labelled by inverse elements.

## Facts & Assumptions

[F1] The Coxeter generators $s,t,u,v$ are involutions. [[def-d4-example-data-artin-tits-normalisers]]

[F2] The chamber graph has the following labelled vertices and complete neighbour lists: $7=(e,2)$ has neighbours $4,15,16$; $4=(st,1)$ has neighbours $7,2,6$, with $2=(stu,1)$ and $6=(stv,1)$; $15=(vt,4)$ has neighbours $7,14,21$, with $14=(vts,4)$ and $21=(vtu,4)$; and $16=(ut,3)$ has neighbours $7,10,22$, with $10=(uts,3)$ and $22=(utv,3)$. Each adjacency gives arrows in both directions. [[ex-d4-labelled-chamber-graph-artin-tits-normalisers]]

[F3] The normaliser quotient has four chamber orbits, distinguished by second labels $1,2,3,4$; equal colours in the article's figures denote equal second labels. [[ex-d4-normaliser-orbits-artin-tits-normalisers]]

[F4] The universal groupoid arrow from $(x,I)$ to $(y,K)$ has label $x^{-1}y$; adjacent crossings generate it, and reverse crossing labels are inverses. [[ex-d4-universal-wall-graph-artin-tits-normalisers]]

[F5] The normaliser quotient acts freely on chamber objects, and the covering to the Brink–Howlett groupoid sends $(x,I)$ to $I$ and preserves arrow labels. Its adjacent-crossing images are generators. [[thm-universal-brink-howlett-cover-artin-tits-normalisers]]

[F6] For a free action on the objects of a connected groupoid, each arrow orbit with a given source orbit has exactly one representative with any prescribed source in that orbit. [[prop-groupoid-orbit-interface-artin-tits-prerequisites]]

[F7] The normaliser quotient action is free on chamber labels and preserves adjacency and the crossing index. This applies to the finite-rank $D_4$ system used here. [[lem-normaliser-chamber-action-artin-tits-normalisers]]

## Verification

**Given:** The $D_4$ data, labelled chamber graph and quotient covering in the Example.

**Goal:** Determine all projected crossing generators, their endpoints and inverse pairs.

1.1 By [F3], vertices $7,4,16,15$ represent the four distinct object orbits $2,1,3,4$, respectively. The covering sends each to its second label by [F5]. The universal groupoid of [F4] is nonempty, small and connected: it has the finite set of 32 chamber objects and exactly one arrow between each ordered pair. The $D_4$ normaliser action is free on these objects by [F7], so the orbit interface [F6] applies. Every crossing orbit has a unique representative starting at the chosen vertex for its source orbit. By [F7] the translated representative is still an adjacent crossing. Thus the complete neighbour lists in [F2] enumerate all projected crossing generators. [F2, F3, F4, F5, F6, F7, given]

2.1 Apply the label formula in [F4] to the three arrows out of vertex $7$: their labels are $st$, $vt$ and $ut$, with targets $1,4,3$, respectively. The arrows from vertices $4,15,16$ back to $7$ have inverse labels $ts,tv,tu$, respectively, by [F1] and [F4]. This gives all six nonloop arrows. [F1, F2, F4, step 1.1]

3.1 The remaining two neighbours of vertex $4$ have first components $stu,stv$, so the two outgoing loop labels are $(st)^{-1}stu=u$ and $(st)^{-1}stv=v$. Similarly, vertex $15$ gives $(vt)^{-1}vts=s$ and $(vt)^{-1}vtu=u$, while vertex $16$ gives $(ut)^{-1}uts=s$ and $(ut)^{-1}utv=v$. The cancellations use the involutions in [F1]. Their endpoints have the same second labels as their sources, so these are precisely the listed loops. Together with steps 1.1 and 2.1 this proves the graph and the inverse-label assertion. [F1, F2, F4, F5, step 1.1, step 2.1] ∎

## Source notes

The article reference attributes Figure 4. The verification uses the completed chamber graph and covering suppliers, rather than the attributed figure as a proof premise.
