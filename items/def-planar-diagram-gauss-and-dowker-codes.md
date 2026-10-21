---
id: def-planar-diagram-gauss-and-dowker-codes
kind: definition
title: "Planar-diagram, Gauss, and signed Dowker–Thistlethwaite codes"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-oriented-crossing-sign-writhe-and-blackboard-framing
  - def-regular-oriented-link-diagram
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Joel Hass, Jeffrey C. Lagarias, and Nicholas Pippenger, The Computational Complexity of Knot and Link Problems, Journal of the ACM 46 (1999), section 1"
      url: "https://arxiv.org/pdf/math/9807016"
      locator: "§1 Introduction, regular-projection and link-diagram definition, web text lines 102–121"
    - title: "Jeff Erickson, Planar Graphs, Computational Topology lecture notes (2023)"
      url: "https://jeffe.web.engr.illinois.edu/teaching/comptop/2023/notes/09-planar-graphs.html"
      locator: "Abstract Graphs, Rotation Systems, and Formalities and Trivialities, lines 1–18 and 49–72"
    - title: "Knot Atlas, Gauss Codes manual"
      url: "https://katlas.org/wiki/Gauss_Codes"
      locator: "Gauss-code definition and trefoil example, lines 65–80"
    - title: "Knot Atlas, Planar Diagrams manual"
      url: "https://katlas.org/wiki/Planar_Diagrams"
      locator: "PD notation and crossing tuple conventions, lines 65–89"
    - title: "Knot Atlas, DT (Dowker–Thistlethwaite) Codes manual"
      url: "https://www.math.toronto.edu/~drorbn/private/KAtlas/Manual/DTCode.html"
      locator: "Odd/even pairing and signed DT examples, lines 4–76"
verification:
  precheck: n/a
dependency_level: 1
---

## Definition

Let $P$ be the projection plane in an oriented $3$-sphere and let $n$ be the
unit viewing normal pointing toward the viewer. Orient $P$ so that $(u,v)$ is
a positive basis exactly when $(n,u,v)$ is a positive ambient basis. A
**crossing code** has a
finite set $C$ of crossing labels and a finite set $D$ of **darts**, where a
dart is one directed half-edge incident to a crossing. A fixed-point-free
involution $\alpha:D\to D$ pairs the two ends of each edge: $\alpha^2=\mathrm{id}$
and $\alpha(d)\ne d$. A vertex map $v:D\to C$ records the crossing incident to
each dart. A **rotation system** is the permutation $\sigma$ whose cycles give
the clockwise order of darts at each crossing. Each crossing has four darts;
the two over-strand darts and the two under-strand darts are opposite in that
cyclic order. An arrow on each dart records whether its edge is directed into
or out of its incident crossing. The pairing $\alpha$ must join one incoming
end to one outgoing end. At a crossing, each opposite pair has one incoming
and one outgoing dart, so following an edge and then the opposite dart defines
the oriented link components. A code is **connected** when the graph with
vertices $C$ and edges the $\alpha$-pairs is connected.

The sign of an oriented crossing is $+1$ or $-1$ according as
$\det(v_{\rm over},v_{\rm under})$ is positive or negative, where the two
tangent vectors follow the oriented over- and under-strands. This item fixes
the local cyclic-order convention as follows. Starting with the outgoing
over-dart and reading counterclockwise, a positive crossing has order
$(O_{\rm out},U_{\rm out},O_{\rm in},U_{\rm in})$; a negative crossing has
order $(O_{\rm out},U_{\rm in},O_{\rm in},U_{\rm out})$. The stored crossing
sign and cyclic order must agree. This is the page's explicit sign convention.
It agrees with the current KT-03 supplier: reversing its positive
counterclockwise order from outgoing over gives the clockwise record
$(O_{\rm out},U_{\rm in},O_{\rm in},U_{\rm out})$.

For a nonempty connected crossing graph, let $V=|C|$, $E=|D|/2$, and let
$F$ be the number of cycles of the face permutation $\phi=\alpha\circ\sigma$.
A **spherical code** is a code satisfying $V-E+F=2$. A spherical code becomes a
**plane code** by distinguishing one face as the outer face and deleting a
point in that face from the sphere. The crossingless one-component code is a separate case: its Gauss data are one empty component word, its DT pairing and crossing-sign vector are empty at $c=0$, and its PD data are the single loop `Loop[1]`; every format also carries an orientation marker, `ccw` or `cw`, for the unit circle $S^1=\{(x,y)\in\mathbb R^2:x^2+y^2=1\}$ in the oriented plane, and the outer-face marker is `outside`. Thus the crossingless code records which direction orients its circle. It has no crossing graph or face-permutation test. Disconnected crossing graphs and disconnected crossingless links are outside this code class.

A **normalized planar-diagram code** with $c>0$ has crossing labels
$C=\{1,\ldots,c\}$ and four dart positions $0,1,2,3$ at each crossing, in
clockwise order beginning with the outgoing over-dart. The opposite pair
$(0,2)$ is over and $(1,3)$ is under. For sign $+1$, the clockwise record is
$(O_{\rm out},U_{\rm in},O_{\rm in},U_{\rm out})$; for sign $-1$ it is
$(O_{\rm out},U_{\rm out},O_{\rm in},U_{\rm in})$. Edge labels are assigned
by scanning crossings in increasing order and their four dart positions in
order, giving the next positive integer to the pair containing the first
not-yet-labelled dart. The outer face is recorded by its least dart in its
face cycle. These rules remove arbitrary edge-name and face-name choices;
different crossing labelings may still represent the same diagram. At $c=0$
a normalized code is the crossingless record with one of the two orientation
markers above.

A **Gauss code** for an oriented diagram records, in traversal order on each
oriented component, a signed crossing label: $+j$ means the component passes
over at crossing $j$, and $-j$ means it passes under. For a knot there is one
cyclic word; for a link there is one cyclic word per component. Each crossing
label must occur exactly twice in total, once positively and once negatively.
When $c>0$, every listed component word is nonempty; a separate crossingless
component is not part of this code class. The zero-crossing case is only the
one-component code specified above.
The code also carries a separate algebraic crossing-sign vector
$\varepsilon_j\in\{+1,-1\}$, one entry for each label. Choosing a basepoint
turns the knot's cyclic word into a based word; changing the basepoint
cyclically shifts the word, and relabeling crossings changes only their names.
The visit order, over/under signs, and crossing-sign vector determine the
crossing rotation system; it is realizable in the sphere only when the
resulting code is spherical. A plane Gauss code also carries an identifier of
one cycle of its face permutation to designate the outer face.

A **signed Dowker–Thistlethwaite code**, in this page's convention, encodes a
based oriented knot with $c$ crossings by numbering its $2c$ visits
$1,\ldots,2c$ in traversal order. For each odd visit $2j-1$, record the even
visit $2k$ paired with it as $d_j=+2k$ when the odd visit is over and
$d_j=-2k$ when it is under; also record the algebraic crossing sign
$\varepsilon_j\in\{+1,-1\}$ for crossing label $j$, the pair containing odd
visit $2j-1$. Its parity conditions are that
$|d_1|,\ldots,|d_c|$ are exactly the even numbers $2,4,\ldots,2c$, each once,
and each paired crossing has one over-visit and one under-visit. The separate
$\varepsilon_j$ records the crossing sign; signed DT conventions elsewhere
may encode signs differently. The associated cyclic traversal and crossing
signs determine a rotation system, which must pass the same spherical
realizability test. A plane DT code also carries an identifier of one cycle
of its face permutation to designate the outer face.

An **oriented planar-diagram code** labels each edge segment by an integer and
lists its two incident darts at crossing records. Each crossing record lists
its four directed edge ends in clockwise order, beginning with the outgoing
over-dart, and records which opposite pair is over, the orientation of each
strand, and the crossing sign. Every edge label occurs exactly twice, once as
an incoming end and once as an outgoing end. The code must satisfy the local
crossing-order rule above; its crossing graph must be connected when nonempty;
and its rotation system must satisfy $V-E+F=2$. The record also carries an
identifier of one cycle of its face permutation as the outer face. Thus an
arbitrary word in labels, even when each label occurs twice, is not declared
realizable until all incidence, orientation, crossing, connectedness, and
face-count tests pass.

## Definition references

[[def-oriented-crossing-sign-writhe-and-blackboard-framing]] — determinant convention in the oriented projection plane, calibrated so a positive Artin half twist has sign $+1$.

[[def-regular-oriented-link-diagram]] — regular diagrams have finite transverse double points, four-valent crossing vertices, oriented strands, and over/under data.

[Hass–Lagarias–Pippenger, §1](https://arxiv.org/pdf/math/9807016) — finite diagram representation and crossing conventions.

[Erickson, “Planar Graphs”](https://jeffe.web.engr.illinois.edu/teaching/comptop/2023/notes/09-planar-graphs.html) — dart, rotation-system, face-cycle, and outer-face conventions.

[Knot Atlas, Gauss Codes](https://katlas.org/wiki/Gauss_Codes) — signed-visit convention and trefoil code.

[Knot Atlas, Planar Diagrams](https://katlas.org/wiki/Planar_Diagrams) — PD edge and crossing records.

[Knot Atlas, DT Codes](https://www.math.toronto.edu/~drorbn/private/KAtlas/Manual/DTCode.html) — odd/even DT pairing and signed-code examples.
