---
id: lem-connected-diagram-bracket-span-bound-and-alternating-equality
kind: lemma
title: "Connected-diagram bracket span bound and alternating equality"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-reduced-alternating-link-diagram
  - lem-connected-regular-link-diagram-has-checkerboard-coloring
  - lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars
  - def-tait-graph-of-a-link-diagram
  - lem-connected-projection-has-connected-tait-graphs
  - thm-euler-formula-for-connected-plane-graphs
  - def-kauffman-bracket-smoothing-and-loop-value
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The external value-at-one input uses only finite skein and crossing-change arguments; the state-circle surface construction, plane-graph count and finite state estimates are choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Danny Calegari, Introduction to Knot Theory, §5.2, printed pp. 42–45"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
    - title: "Louis H. Kauffman, New Invariants in the Theory of Knots, Astérisque 163–164 (1988), §III, printed pp. 160–164"
      url: "https://www.numdam.org/item/AST_1988__163-164__137_0.pdf"
    - title: "Louis H. Kauffman, State Models and the Jones Polynomial, Topology 26 (1987), §2, Theorems 2.6 and 2.8, printed pp. 398–400"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/kauffmanjones.pdf"
    - title: "Kunio Murasugi, Knot Theory and Its Applications, Springer/Birkhäuser (1996), Proposition 4.4.1 and Chapter 11, Propositions 11.1.1 and 11.2.6"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/murasug3.pdf"
      locator: "Chapter 4, Proposition 4.4.1; Chapter 11, Propositions 11.1.1 and 11.2.6. The stated proof arguments were read; other chapters were not audited."
---

## Statement

For a nonempty connected regular link diagram $D$ with $c$ crossings, the Laurent-polynomial span of its Kauffman bracket is at most $4c$. If $D$ is reduced and alternating, then changing any one crossing from the all-$A$ state or the all-$B$ state merges two distinct state circles, both extreme coefficients are nonzero, and the bracket span is exactly $4c$. The span of a nonzero Laurent polynomial is its largest exponent minus its smallest exponent.

## Statement references

[Calegari, *Introduction to Knot Theory*, §5.2](https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf)

[Kauffman, *New Invariants in the Theory of Knots*, §III](https://www.numdam.org/item/AST_1988__163-164__137_0.pdf)

## Facts & Assumptions

**Given:** A nonempty connected regular link diagram $D$ with $c$ crossings, with all-$A$ and all-$B$ smoothing states as defined by the bracket convention.

[F1] The bracket is defined here only for nonempty diagrams; the empty diagram is outside its domain. For such diagrams it is the finite sum $\langle D\rangle=\sum_S A^{a(S)-b(S)}\delta^{|S|-1}$ with $\delta=-A^2-A^{-2}$; its states are choices of one smoothing at each crossing ([[def-kauffman-bracket-smoothing-and-loop-value]]).

[F2] In a connected alternating diagram, successive crossing visits along every component alternate between over and under, and reducedness means no projection region has a crossing more than once on its boundary ([[def-reduced-alternating-link-diagram]]).

[F3] Every connected regular projection has a checkerboard coloring ([[lem-connected-regular-link-diagram-has-checkerboard-coloring]]).

[F4] The Tait graph has checkerboard regions as vertices and crossings as edges ([[def-tait-graph-of-a-link-diagram]]).

[F5] For a connected plane graph, $|V|-|E|+|F|=2$ ([[thm-euler-formula-for-connected-plane-graphs]]).

[F6] For a connected projection with at least one crossing, either Tait graph is connected ([[lem-connected-projection-has-connected-tait-graphs]]).

[F7] A smooth embedded circle on the projection sphere bounds a closed disk on either side. Choose a point in the opposite side, use a stereographic chart, and apply the choice-free smooth Jordan-disk result ([[lem-choice-free-smooth-jordan-disk-parameters-and-prescribed-collars]]).

[F8] **External input, exact use:** For a $k$-component link, the normalized bracket has value $(-2)^{k-1}$ at $A=1$. Kauffman identifies the normalized bracket with the Jones polynomial under $t=A^{-4}$ ([§2, Theorems 2.6 and 2.8](https://www.maths.ed.ac.uk/~v1ranick/papers/kauffmanjones.pdf)); Murasugi proves the value from the skein relation and unlink formula ([Chapter 11, Propositions 11.1.1 and 11.2.6](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/murasug3.pdf)), using the finite crossing-change reduction of [Chapter 4, Proposition 4.4.1](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/murasug3.pdf). These precise results and arguments were read; no source-wide audit is asserted.

## Proof


1.1 Let $\mu$ be the number of components represented by $D$. By [F8], $$(-A^3)^{-\operatorname{wr}(D)}\langle D\rangle\big|_{A=1}=(-2)^{\mu-1}\ne0.$$ The writhe-normalizing factor is a Laurent monomial and hence a unit, so $\langle D\rangle$ is nonzero and its span is defined. Now let $s_A$ and $s_B$ be the numbers of circles in the all-$A$ and all-$B$ states. If a state has $j$ $B$-smoothings, then its weight factor is $A^{c-2j}$. A single smoothing change is a band surgery and changes the circle count by exactly $1$ or $-1$, so a state with $k$ circles has $k\le s_A+j$. Since the highest degree of $\delta^{k-1}$ is $2(k-1)$, every state term has degree at most $c-2j+2(k-1)\le c+2(s_A-1)$. Reversing $A$ and $B$ gives minimum degree at least $-c-2(s_B-1)$. Hence $\operatorname{span}_A\langle D\rangle\le2c+2(s_A+s_B-2)$. [given, F1, F8, construct]

1.2 If $c>0$, the connected projection has finite disk faces. To see this, thicken a spanning tree to a disk, then add the remaining edge strips one at a time. The core of each added edge lies in one complementary disk and is a properly embedded arc there. Its strip cuts that disk along the arc; after rounding corners, the two new boundary curves are smooth Jordan curves, and [F7] makes their closed sides disks. At each stage the new edge lies in one old region and splits it into exactly the two regions adjacent to the new edge, so these disk complements correspond one-to-one to the projection regions. Thus each complementary region has a disk core disjoint from the graph. Now suppose $D$ is reduced and alternating. Color its regions by [F3]. At one crossing choose the color name so the $A$-smoothing follows the two black sectors. Moving along a projection arc to the next crossing, alternation switches which branch is over; the chart definition of the $A$-smoothing therefore continues to follow the same color. Connectedness propagates this choice to every crossing. Thus the all-$A$ state circles trace the black disk cores and the all-$B$ circles trace the white disk cores. Embed the black Tait graph by placing vertices in black cores and drawing each crossing edge through its crossing disk; its complementary faces are precisely the white disk cores. Hence it is connected by [F6], has $c$ edges, $s_A$ vertices, and $s_B$ faces by [F4]. Euler's formula [F5] gives $s_A-c+s_B=2$. [given, F2, F3, F4, F5, F6, F7, construct]

2.1 Suppose $c>0$. Put the all-$A$ state on the lower level $S^2\times\{0\}$ and the all-$B$ state on the upper level $S^2\times\{1\}$. Outside the crossing disks, join corresponding state arcs by product rectangles; inside each crossing disk, join the two local smoothings by one saddle cobordism. The resulting compact surface $\Sigma$ has boundary the $s_A+s_B$ state circles and exactly $c$ index-one saddles, hence $\chi(\Sigma)=-c$. Form a bipartite incidence graph with one vertex for each state circle and one for each saddle, joining a saddle to every state circle containing one of its attaching arcs. This graph is connected: each projection edge lies on one all-$A$ and one all-$B$ state circle, both incident to the saddles at its endpoints, and the projection is connected. Every state circle contains a projection edge, so it is incident to a saddle. Thus $\Sigma$ is connected. Cap each boundary circle by a disk, obtaining a connected closed surface $\widehat\Sigma$ with $\chi(\widehat\Sigma)=s_A+s_B-c$. Give it a finite cellulation and take cellular chains $C_i$ over $\mathbb F_2$, with boundary maps $\partial_i$. If $r_i=\operatorname{rank}\partial_i$ and $h_i=\dim H_i$, then rank-nullity gives $\dim C_i=h_i+r_i+r_{i+1}$; alternating the sum over $i=0,1,2$ cancels the $r_i$ terms and yields $\chi(\widehat\Sigma)=h_0-h_1+h_2$. Connectedness gives $h_0=1$. A 2-cycle has equal coefficients on the two faces adjacent to every edge; the dual graph of a connected closed surface is connected, so all face coefficients agree and $h_2=1$. Therefore $\chi(\widehat\Sigma)=2-h_1\le2$, and $s_A+s_B-c\le2$. For $c=0$, a connected projection is one circle and $s_A=s_B=1$, giving the same inequality. Combining this bound with step 1.1 proves $\operatorname{span}_A\langle D\rangle\le4c$. [given, F1, step 1.1, construct, algebra]

2.2 At any crossing, reducedness in [F2] says the two black sectors belong to distinct black regions and the two white sectors belong to distinct white regions. The all-$A$ smoothing circles trace the black regions, so changing one crossing from all-$A$ joins two distinct state circles by a band and merges them; the all-$B$ change similarly merges two distinct white state circles. If a state changes $j\ge1$ crossings from all-$A$, the first change lowers the circle count to $s_A-1$, and each later change can increase it by at most one; hence its circle count is at most $s_A+j-2$. Its term's degree is therefore at most $c-2j+2(s_A+j-3)=c+2(s_A-3)$, four below the all-$A$ term's top degree $c+2(s_A-1)$. The all-$A$ term has top coefficient $(-1)^{s_A-1}\ne0$, so it cannot cancel. The same argument at all-$B$ proves a nonzero bottom coefficient. When $c=0$, the single state has bracket $1$, and the same conclusions hold vacuously. [F1, F2, step 1.2, algebra]

3.1 Using $s_A+s_B=c+2$ from step 1.2, the highest degree minus the lowest degree is $\bigl(c+2(s_A-1)\bigr)-\bigl(-c-2(s_B-1)\bigr)=2c+2(s_A+s_B-2)=4c$. The extreme coefficients are nonzero by step 2.2, so this is the actual bracket span. The $c=0$ case has span $0=4c$. [step 1.1, step 1.2, step 2.2, algebra] ∎
