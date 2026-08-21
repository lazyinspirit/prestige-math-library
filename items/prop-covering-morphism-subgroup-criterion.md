---
id: prop-covering-morphism-subgroup-criterion
kind: proposition
title: "A based morphism between connected coverings exists exactly when the induced subgroups are included"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-map-and-isomorphism-of-covering-spaces,
       thm-covering-space-lifting-criterion,
       thm-uniqueness-of-lifts-from-a-connected-space,
       prop-local-path-connectedness-lifts-and-descends-along-coverings,
       thm-connected-and-locally-path-connected-implies-path-connected,
       thm-path-lifting-for-covering-maps,
       def-induced-homomorphism-on-fundamental-groups,
       thm-induced-fundamental-group-map-functoriality,
       def-covering-map-and-evenly-covered-neighbourhoods]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Proposition 1.37"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Chapter 3, Section 7"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Statement

Let $B$ be path-connected and locally path-connected, and let

$$p_i:(E_i,e_i)\longrightarrow(B,b_0)\qquad(i=1,2)$$

be based coverings with connected total spaces. There is a based map of covering spaces $f:(E_1,e_1)\to(E_2,e_2)$ over $B$ if and only if

$$(p_1)_*\pi_1(E_1,e_1)\subseteq(p_2)_*\pi_1(E_2,e_2).$$

When it exists, $f$ is unique and is itself a surjective covering map.

## Facts & Assumptions

**Given:** The based connected coverings and base hypotheses in the Statement.

[F1] If $Y$ is path-connected and locally path-connected, a based lift $\widetilde h:(Y,y_0)\to(E,e_0)$ through a covering exists exactly when $h_*\pi_1(Y,y_0)\subseteq p_*\pi_1(E,e_0)$, and it is then unique ([[thm-covering-space-lifting-criterion]]).

[F2] For a covering, local path-connectedness holds in the total space exactly when it holds in the base ([[prop-local-path-connectedness-lifts-and-descends-along-coverings]]).

[F3] Two lifts from a connected space that agree at one point are equal ([[thm-uniqueness-of-lifts-from-a-connected-space]]).

[F4] Over an evenly covered neighbourhood, each sheet maps homeomorphically to that neighbourhood ([[def-covering-map-and-evenly-covered-neighbourhoods]]).

[F5] A connected locally path-connected space is path-connected ([[thm-connected-and-locally-path-connected-implies-path-connected]]).

[F6] Every path in the base has a unique lift from a prescribed point in the fibre ([[thm-path-lifting-for-covering-maps]]).

[F7] Induced fundamental-group homomorphisms respect composition ([[thm-induced-fundamental-group-map-functoriality]]).

## Proof

**Proof technique:** direct.

1.1 For the forward implication, [F7] applied to $p_2\circ f=p_1$ gives the displayed subgroup inclusion. For the reverse implication, [F2] makes $E_1$ locally path-connected and [F5] makes it path-connected. Apply [F1] to the map $p_1:E_1\to B$ and the covering $p_2:E_2\to B$; the inclusion produces a based lift $f:E_1\to E_2$, and $p_2f=p_1$ says exactly that it is a map of coverings. [F1, F2, F5, F7]

2.1 Uniqueness is part of [F1], and also follows from [F3] because any two such maps lift $p_1$ and agree at $e_1$. [step 1.1, F1, F3]

3.1 First, $f$ is surjective. Indeed, [F2] and [F5] make $E_2$ path-connected. Join $f(e_1)$ to any $z\in E_2$ by a path, project that path through $p_2$, and lift the projection through $p_1$ from $e_1$. The image of this lift under $f$ is a lift with the original initial point, so uniqueness in [F6] makes it the original path and its endpoint maps to $z$. Now fix $b\in B$. Intersect evenly covered neighbourhoods of $b$ for $p_1$ and $p_2$, then use local path-connectedness to choose a path-connected open neighbourhood $O$ inside that intersection. For a $p_1$-sheet $U$ over $O$, choose $x\in U$ and let $V$ be the $p_2$-sheet containing $f(x)$. The maps $f|_U$ and $(p_2|_V)^{-1}\circ p_1|_U$ are lifts of $p_1|_U$ through $p_2$, agree at $x$, and have connected domain $U$; hence [F3] makes them equal. Thus $f|_U:U\to V$ is a homeomorphism. Conversely, every point of $f^{-1}(V)$ lies in one such $U$. Hence $f^{-1}(V)$ is the disjoint union of exactly those $p_1$-sheets sent to $V$, each mapped homeomorphically onto $V$. Surjectivity makes this family nonempty for every $V$, so every point of $E_2$ has an evenly covered neighbourhood and [F4] makes $f$ a covering map. [step 1.1, F2, F3, F4, F5, F6] ∎
