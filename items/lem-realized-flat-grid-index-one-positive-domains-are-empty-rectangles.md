---
id: lem-realized-flat-grid-index-one-positive-domains-are-empty-rectangles
kind: lemma
title: "Realized flat-grid index-one positive domains are empty rectangles"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - def-grid-diagram-for-an-oriented-knot
  - thm-realized-grid-whitney-classes-have-the-full-relative-grading-formula
  - lem-grid-empty-rectangle-and-annulus-classes-have-explicit-indices
  - lem-equal-whitney-domains-have-equal-boundary-windings-and-fredholm-index
  - lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Manolescu, Ozsvath and Sarkar, A combinatorial description of knot Floer homology"
      url: "https://arxiv.org/abs/math/0607691"
      locator: "Grid domains and point measures; the all-realized-class stencil proof and positive index-one classification are supplied locally below"
---

## Statement

Assume Countable Choice. Let $G$ be a knot grid of size $n\ge2$ on its actual flat torus, with horizontal alpha and vertical beta circles and the product-integrable end data. Let $u:x\to y$ be any REALIZED continuous Whitney class, with integral domain $D$. At a grid vertex $v$ write $\nu_v(D)$ for one quarter of the sum of its four adjacent cell coefficients, and put $n_x(D)=\sum_{v\in x}\nu_v(D)$. Then its actual fixed-end real index before translation is
$$\mu(u)=n_x(D)+n_y(D).$$
This includes signed domains and positive marked degrees. If every cell coefficient is nonnegative and $\mu(u)=1$, then $x,y$ differ in exactly two points and $D$ is exactly one embedded torus rectangle from $x$ to $y$, of multiplicity one and with no state point in its interior. No exclusion of $O$ or $X$ marks is imposed. Its row and column intervals are both proper cyclic intervals, so it is an ordinary rectangle among the four choices for those changed corners.

This proves actual index and domain classification, not existence or uniqueness of holomorphic representatives, their count, equality of equal-domain homotopy classes, or a grid-to-analytic chain equivalence.

## Facts & Assumptions

**Given:** The flat grid and actual class, with its usual region degrees and generator ends.

[F1] The full realized-grid grading theorem constructs for every realized domain an equal-domain actual concatenation of empty-state rectangles and signed unit row/column annulus loops. Their actual indices are one and two, respectively, and actual indices add and agree on equal domains. The same theorem gives $\mu=M_O(x)-M_O(y)+2\sum n_O$. ([[thm-realized-grid-whitney-classes-have-the-full-relative-grading-formula]], [[lem-grid-empty-rectangle-and-annulus-classes-have-explicit-indices]])

[F2] For arbitrary smooth Whitney models, ordered roots and compact Stokes identify domain jumps with the signed labelled coordinate boundary paths. The conclusion includes arbitrary signed local multiplicities, and smooth models represent all the continuous classes in [F1]. ([[lem-equal-whitney-domains-have-equal-boundary-windings-and-fredholm-index]])

[F3] Compact Stokes holds for finite smooth surface cells and smooth one-forms, without full Choice. ([[lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]])

## Proof

1.1 Number cells by $(i,j)\in(\mathbb Z/n)^2$, with cell $D_{ij}$ northeast of vertex $(i,j)$. Define the vertex functions $$\Delta D_{ij}=D_{ij}+D_{i-1,j-1}-D_{i-1,j}-D_{i,j-1},\qquad QD_{ij}=\tfrac14(D_{ij}+D_{i-1,j-1}+D_{i-1,j}+D_{i,j-1}).$$ For the actual domain one has $\Delta D=1_x-1_y$. Here is the local boundary verification. By [F2], the jump across each open alpha edge counts its actual labelled boundary path with sign. At an alpha-beta crossing its change from the preceding to the succeeding edge is the endpoint coefficient of that path, namely one at its source state point and minus one at its target state point. The alternating four cell sum displayed above is exactly that change, with the grid orientation in which a rectangle has its source at southwest/northeast. Common state points cancel. Full-circle winding terms are constant on the circle and introduce no change. Equivalently apply [F2]'s ordered-root Stokes calculation on the four edges of a small crossing neighborhood; each labelled path appears with its actual degree, so division by the finite ordered-cover degree gives this same endpoint coefficient. Thus the assertion holds for signed degrees as well as positive ones. Also $QD=\nu(D)$ by definition. [F2, given, construct, algebra]

2.1 The finite pairing $\langle\Delta E,QD\rangle$ is symmetric in $D,E$. To check this without a boundary term, let $S_i,S_j$ be the backward cyclic shifts on cell arrays. Then $\Delta=(1-S_i)(1-S_j)$, $Q=(1+S_i)(1+S_j)/4$, and, for the ordinary finite sum pairing, $S_i^*=S_i^{-1}$ and $S_j^*=S_j^{-1}$. All shifts commute. Hence $$\Delta^*Q=\tfrac14(S_i-S_i^{-1})(S_j-S_j^{-1})$$ is self-adjoint: transposing changes the sign of each of its two factors. This proves the stated symmetry by a finite matrix identity, including cells crossing either chosen seam. No fundamental-square pair-count convention is needed here. [step 1.1, construct, algebra]

3.1 For a domain $D:x\to y$ put $F_{xy}(D)=\langle1_x+1_y,QD\rangle$. If $E:y\to z$, step 1.1 and step 2.1 give $$F_{xz}(D+E)-F_{xy}(D)-F_{yz}(E)=\langle1_z-1_y,QD\rangle+\langle1_x-1_y,QE\rangle=-\langle\Delta E,QD\rangle+\langle\Delta D,QE\rangle=0.$$ It negates under endpoint reversal and domain negation. On an empty-state rectangle, its four changed corner measures are $1/4$ each, and all common state measures vanish, so $F=1$. On a unit row annulus loop, exactly two state points are on its bounding horizontal circles, each of measure $1/2$; all others have measure zero. Thus $F_{xx}=2n_x=2$. A column annulus has the same count on its two bounding vertical circles. For $n=2$ these two circles are still distinct and the same calculation applies. By [F1] concatenate these actual models to match $D$, using signs for negative annuli. Additivity makes $F_{xy}(D)$ equal their actual index sum; equal-domain index comparison in [F1] identifies this sum with $\mu(u)$. This proves the all-realized-class point-measure formula. [F1, step 1.1, step 2.1, construct, algebra]

4.1 Assume now $D\ge0$ and $\mu=1$. If $x=y$, the last formula in [F1] makes its index the even integer $2\sum n_O$, impossible. Otherwise let $r$ be the number of points of $x$ not in $y$. The state-permutation condition gives $r\ge2$: changing exactly one point cannot preserve both its row and column. There are $2r$ changed vertices. At each, $|\Delta D|=1$ by step 1.1. Since its four coefficients are nonnegative integers, their sum is at least one, so its point measure is at least $1/4$. Common vertices have nonnegative measure and occur twice in $n_x+n_y$. Thus step 3.1 gives $1\ge r/2$, forcing $r=2$. Equality forces precisely one adjacent cell coefficient one and the other three zero at every changed vertex, and all four coefficients zero at every common vertex. In particular all changed corners are convex, with no reflex or higher-multiplicity alternative. [F1, step 1.1, step 3.1, construct, algebra]

5.1 Only the two changed rows and two changed columns can support the chain boundary of $D$. On any other horizontal circle its jump is constant between crossings, by step 1.1, since there is no changed endpoint on that circle; at its common state point both adjacent coefficients vanish by step 4.1, so the jump is zero everywhere. The same holds for any other vertical circle. On each changed row, its two changed vertices divide it into two proper cyclic arcs. The jump is constant on each open arc; the one-positive-quadrant pattern at either endpoint says one arc has jump of magnitude one and the other zero. The same conclusion holds on each changed column. Thus the entire boundary consists of four oriented arcs connecting those four vertices, one on each changed circle, each of multiplicity one. They form one four-edge cycle: every vertex has one horizontal and one vertical incident arc and the rows and columns are distinct. Since this is the boundary of the actual torus cell chain, its integrals against the global closed forms $dx,dy$ vanish by [F3]. The two horizontal arcs therefore have opposite signed displacements of the same magnitude, so they select the same proper column interval in opposite directions. The vertical arcs likewise select the same proper row interval. Consequently this cycle is the boundary of the embedded product of those two intervals, a torus rectangle $R$. The positive-quadrant pattern fixes the boundary sign as $+\partial R$, rather than its negative: the latter would have three positive adjacent quadrants after adding a constant, not exactly one. [F2, F3, step 1.1, step 4.1, construct, algebra]

6.1 Now $\partial(D-R)=0$. Across each grid edge its two coefficients agree, so the connected rectangular torus grid makes $D-R$ a constant multiple of the whole torus. At a changed corner the three exterior coefficients of $D$ and of $R$ are all zero; hence that constant is zero and $D=R$. All common state point measures vanish by step 4.1, so no common point lies inside $R$. Its only remaining state points are its two source and two target corners. Finally $\Delta R=1_x-1_y$ fixes which alternating corners are the source; this is exactly the oriented rectangle convention. Marks were never restricted, and their positive degrees remain allowed. This completes only the stated index and positive-domain classification. [step 1.1, step 4.1, step 5.1, algebra] ∎
