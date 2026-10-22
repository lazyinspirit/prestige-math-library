---
id: lem-connected-alternating-link-is-nonsplit
kind: lemma
title: "Connected alternating diagrams represent nonsplit links"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-split-link
  - def-reduced-alternating-link-diagram
  - def-flype-crossing-ball-and-alternating-tangle-data
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The crossing-ball minimization and parity argument use only finite intersection data and choice-free natural-number minimization."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "William W. Menasco, Closed incompressible surfaces in alternating knot and link complements, Topology 23 (1984), Theorem 1(a), Lemma 1 and proof, printed pp. 37–41"
      url: "https://www.scribd.com/document/471863717/1-s2-0-0040938384900235-main-2"
    - title: "Thomas Kindred, A geometric proof of the flyping theorem, Fact 2.1 and §3.1, arXiv:2008.06490v3"
      url: "https://arxiv.org/pdf/2008.06490v3"
---

## Statement

If a regular link diagram on $S^2$ is connected and alternating, then the represented link is nonsplit.

## Statement references

[Menasco, *Closed incompressible surfaces in alternating knot and link complements* (1984), Theorem 1(a), Lemma 1 and proof](https://www.scribd.com/document/471863717/1-s2-0-0040938384900235-main-2)

[Kindred, *A geometric proof of the flyping theorem*, Fact 2.1 and §3.1](https://arxiv.org/pdf/2008.06490v3)

## Facts & Assumptions

**Given:** A connected alternating regular diagram $D$ and its represented link $L$.

[F1] A connected alternating diagram has connected projection graph and over-under visits alternating along each component ([[def-reduced-alternating-link-diagram]]).

[F2] A link is split exactly when it has a sphere in its complement with link points on both sides ([[def-split-link]]).

[F3] Crossing balls, shifted projection spheres, saddle disks, and bubble standard position are defined by the crossing-ball conventions ([[def-flype-crossing-ball-and-alternating-tangle-data]]).

## Proof
1.1 Suppose $L$ is split and choose a splitting sphere $S$ disjoint from $L$. Put the diagram in crossing-ball form and make $S$ transverse to the finite family of bubble balls and shifted spheres by a small general-position perturbation. Let $N(S)=(s(S),\ell(S))$, where $s(S)$ is the number of saddle arcs through bubble balls and $\ell(S)$ is the total number of intersection curves with $S_+$ and $S_-$. The nonempty set of these pairs has a lexicographically least value in $\mathbb N^2$, so choose a splitting sphere with least complexity; this minimization uses no choice axiom. [given, F2, F3, construct, choose]

2.1 An intersection curve with an empty bubble word is disjoint from both the link and every bubble. Choose one innermost on a shifted sphere. It bounds a disk there disjoint from the link; the corresponding circle on the splitting sphere bounds a disk because that sphere is $S^2$. Isotoping this disk across the empty disk removes the curve without changing $s(S)$ and lowers $\ell(S)$, while preserving the splitting property. This contradicts lexicographic minimality, so every intersection curve has nonempty bubble word. [given, F2, F3, step 1.1, construct]

3.1 If an intersection curve meets one bubble more than once, choose an outermost rectangle in the corresponding hemisphere between two consecutive arcs of that curve, with its interior disjoint from the other intersection curves. If the rectangle misses $L$, pushing the sphere across the disk it cuts off removes two saddle arcs, lowering $s(S)$. If the rectangle meets $L$, the two boundary arcs lie on the same saddle at a crossing; joining the band on $S$ between them to the crossing disk gives a simple meridian $\mu\subset S$ of one link strand. The sphere $S$ bounds a disk with boundary $\mu$. Gluing this disk to a small transverse disk bounded by $\mu$ and smoothing the corner gives an embedded sphere meeting that closed link component transversely once. This is impossible: a closed curve crossing a separating sphere must switch complementary sides at every intersection and therefore meets it an even number of times. Hence no intersection curve meets a bubble more than once, and $S$ is in bubble standard position. [F2, F3, step 1.1, step 2.1, contradiction, construct]

3.2 Since $L$ is split, it has components on both sides of $S$. A crossingless component would be an isolated component of the projection, contrary to connectedness in [F1]; hence every component has a crossing. Its crossing-visit list is cyclic, so the alternating condition forces each nonempty list to contain both over- and under-visits; a one-visit list cannot alternate at the cyclic return. In particular, every link component has an overpass on $S_+$. If $S\cap S_+=\varnothing$, connectedness of $S_+$ places all of its link points on one side of $S$, but each link component lies wholly on one side and each side contains a link component, a contradiction. Thus $S\cap S_+\ne\varnothing$. Choose an innermost curve $C$ of $S\cap S_+$ and let $D_+$ be its disk on $S_+$ with interior disjoint from $S$. Since $S$ is disjoint from $L$, the bubble word of $C$ contains only saddle letters. It is nonempty by step 2.1; a closed curve crosses the boundary of the bubble region an even number of times, so it contains at least two saddle letters. [F1, F2, F3, step 2.1, choose]

4.1 Let $B_1,B_2$ be two successive bubbles encountered along $C$. The alternating parity rule is as follows: if $p$ is the number of link punctures between two successive saddle letters, the relevant link arcs in the two bubbles lie on opposite sides of $C$ when $p$ is even and on the same side when $p$ is odd. Indeed, each puncture switches the side of the intervening link arc, while alternation switches which local branch lies on the upper versus lower shifted sphere; the combined side indicator changes by $p+1$ modulo $2$. Here $p=0$, so the two bubble arcs are on opposite sides of $C$. [F1, F3, step 3.2, algebra]

5.1 Since $C$ bounds $D_+$ and the two arcs in $B_1,B_2$ lie on opposite sides of $C$, one of those arcs lies in $D_+$. The local saddle chart then places both sides of the same crossing ball along the boundary curve $C$, so $C$ passes through that ball a second time, contradicting the at-most-once condition from step 3.1. The assumed splitting sphere therefore cannot exist, and [F2] says that $L$ is nonsplit. [F2, F3, step 3.1, step 3.2, step 4.1, contradiction] ∎
