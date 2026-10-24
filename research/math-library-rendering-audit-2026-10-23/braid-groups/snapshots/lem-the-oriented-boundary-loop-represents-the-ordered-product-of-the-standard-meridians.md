---
id: lem-the-oriented-boundary-loop-represents-the-ordered-product-of-the-standard-meridians
kind: lemma
title: "The oriented boundary loop represents the ordered product of the standard meridians"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 2
deps: [def-standard-meridians-of-a-punctured-disk, lem-the-standard-flower-is-a-deformation-retract-with-free-meridian-basis, lem-finite-polygonal-disk-and-collar-surgery, prop-retracts-inject-fundamental-groups, def-based-loops-and-fundamental-group, def-homotopy-relative-and-path-homotopy, thm-fundamental-group-laws]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: completed-cumulative-mathematical-review
    date: 2026-10-03
    scope: "Cumulative verification supported by existing completed mathematical readings. Original complete Step 5a reader evidence research/frontier-38-owner-30-reader-15.md, followed by completed Step 7 repair/adjudication reasoning research/frontier-38-owner-30-step7-v2/step7-v2-initial-r1-u15.json, exact post_sha256 57dbf21f89c78ed9e1ba94a584519b5cdae00501aa22dc88884b44ca9eb5de06 with publication status normalized back to draft. The later reasoning covers the substantive changes; its local repair/self-review qualifications remain applicable. This reconciliation adds no new mathematical review, independent post-repair audit, source reading or judge acceptance."
    delegated_by: "owner via tools/autopilot frontier-38-owner-30 step7-v2-initial-r1-u15 dispatch"
sources:
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 1.6, printed pp. 9-10 (x_1...x_n corresponds to a loop parallel to the boundary)"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Emil Artin, Theory of Braids, Annals of Mathematics 48 (1947), pp. 101-126, printed pp. 113-115 (the ordered product condition)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/artinbraids.pdf"
---

## Statement

With the conventions of [[def-standard-meridians-of-a-punctured-disk]], the
positively oriented boundary loop $\partial$ represents the ordered product
$$[\partial]=[x_1][x_2]\cdots[x_n]$$
in $\pi_1(D^2\setminus Q_n,d)$.

## Facts & Assumptions

**Given:** the boundary loop and standard meridians of
[[def-standard-meridians-of-a-punctured-disk]].

[F1] The standard flower $W$ consists of the truncated tethers $t_i$ and
the circles $C_i$; its tethers form a tree rooted at $d$
([[lem-the-standard-flower-is-a-deformation-retract-with-free-meridian-basis]]).

[F2] Path homotopy gives equality of loop classes and concatenation multiplies
these classes ([[def-based-loops-and-fundamental-group]],
[[def-homotopy-relative-and-path-homotopy]], [[thm-fundamental-group-laws]]).

[F3] Simple polygonal regions are disks; polygonal vertex disks and edge
strips give compatible side coordinates, and prescribed PL boundary
homeomorphisms extend over polygonal disks
([[lem-finite-polygonal-disk-and-collar-surgery]]).

## Proof

1.1 *Constructing the cut disk.* Suppose $n\ge1$ and put $S=D^2\setminus\bigcup_i\operatorname{int}B_i$. We establish the needed cut geometry directly. Near $d$, the top outer boundary is $y_b(x)=\sqrt{1-x^2}$, whereas every nonvertical tether has $y=1-|x|/|q_i|\le1-|x|$. Use the collar between $y_b(x)\pm|x|/2$, which misses the tethers for small nonzero $|x|$ because $1-y_b(x)<|x|/2$. On each vertical fiber send $y_b(x)$ to $y_b(x)+\chi(x)(1-y_b(x))$, where $\chi=1$ near zero and vanishes outside a small interval; fix the collar endpoints and interpolate linearly. The target lies strictly between those endpoints, so each fiber map is increasing. Extend by the identity outside the collar and on $x=0$; the displacement tends to zero there, proving continuity of the map and its inverse, including on the vertical tether if present. This flattens the outer boundary near $d$ and fixes all tethers. Away from this segment the outer boundary has positive distance from them, so finite circle collar charts replace it by polygonal chords. For each inner circle choose a fine inscribed polygon with $p_i$ as a vertex. If $R_i(\theta)$ is its radial boundary function, map radius $\varepsilon_i$ to $R_i(\theta)$ and a slightly larger collar radius to itself by increasing linear interpolation. The collars can be disjoint and miss other tethers; on its own tether direction $R_i=\varepsilon_i$, so that tether stays fixed. Thus all boundaries become polygons while the tethers stay straight. Open each tether using the vertex-sector and edge-strip coordinates of [F3], separating the sectors at $d$. The boundary trace follows the outer boundary once and makes one detour down and back along each slit and around its hole. This is a single simple polygon after the shores have been separated: distinct tethers have disjoint interiors, distinct holes are disjoint and meet only their own tether, and the finitely many sectors at $d$ are distinct. By [F3] its enclosed region is a disk. The side and sector coordinates identify this region with the zero-width cut surface $K$, giving $K$ disk topology. Its boundary splits into the outer arc $A$ and the complementary arc $P$; $P$ contains all tether shores and all opened inner circles. Regluing the paired shores and sector copies of $d$ gives a continuous quotient $\kappa:K\to S$, with $\kappa(P)=W$. [given, F1, F3, construct]

2.1 *The two boundary paths of the cut disk.* Orient $A$ by the positive outer boundary traversal, from its initial sector copy of $d$ to its terminal sector copy. Orient the complementary arc $P$ in the same initial-to-terminal direction, opposite to its direction as a piece of the oriented boundary of $K$. In a convex disk coordinate for $K$, linear interpolation between these paths gives a homotopy relative to their endpoints. Composing with $\kappa$ and the inclusion $S\hookrightarrow X$ gives a based homotopy between $\partial$ and the image of $P$. [F2, F3, step 1.1, construct]

3.1 *Tracing $P$ after regluing.* With this direction, $P$ runs out along the first tether, counterclockwise around its circle, back along its other shore, and repeats for each tether in order. The sign follows from boundary orientation: inner circles of the oriented holed disk are clockwise, whereas $P$ traverses them opposite to that boundary direction. Its order is $1,\dots,n$: from $d=(0,1)$ the positive outer boundary starts toward the left, and the distinct downward tether rays to $q_1<\cdots<q_n$ occur from left to right. After quotienting the paired shores, these successive paths are exactly $t_i c_i t_i^{-1}=x_i$. Hence the image of $P$ is the concatenation $x_1\cdots x_n$, up to harmless parametrization and constant intervals. [given, F1, F2, step 1.1, step 2.1, construct]

4.1 *Conclusion.* The based homotopy of step 2.1 and the traversal of step 3.1 imply the asserted identity by [F2]. For $n=0$ the straight-line homotopy from $\partial(t)$ to $d$ contracts the boundary relative to its basepoint, giving the empty product; for $n=1$ the same cut-disk argument is the positive outer/inner circle homotopy in the annulus. All collar charts, polygonal subdivisions and strips are finite, so no choice principle is used. [F2, step 1.1, step 2.1, step 3.1] ∎
