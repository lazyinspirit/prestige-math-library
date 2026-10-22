---
id: lem-two-twisted-positive-whitehead-trefoil-double-has-s-two
kind: lemma
title: "The two-twisted positive Whitehead trefoil double has Rasmussen invariant two"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - def-rasmussen-s-invariant
  - alg-khovanov-chain-complex-from-diagram
  - lem-explicit-two-twisted-whitehead-double-has-sixteen-crossing-code
  - lem-positive-whitehead-clasp-band-gives-genus-one-surface
  - lem-lee-filtered-spectral-sequence-and-two-orientation-classes
  - lem-khovanov-cube-differential-squares-to-zero
  - thm-rasmussen-s-bounds-smooth-four-ball-genus
dependency_level: 11
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Countable Choice is inherited from the invariant, smooth-genus and admitted-diagram suppliers. The finite state and matrix computations are choice-free."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Matthew Hedden and Philip Ording, The Ozsvath-Szabo and Rasmussen concordance invariants are not equal"
      url: "https://arxiv.org/pdf/math/0512348v1"
      locator: "Theorem 1.1 and Section2.1; the knot convention and reported s value. The exact finite calculation is supplied below."
    - title: "Jacob Rasmussen, Khovanov homology and the slice genus"
      url: "https://arxiv.org/pdf/math/0402131v1"
      locator: "Sections3–4; the Lee filtration and smooth genus bound"
---

## Statement

Assume the Axiom of Countable Choice. Let $D_+(T_{2,3},2)$ be the positive-clasped Whitehead double of the right-handed trefoil in the Hedden–Ording twist convention, with companion-annulus framing two. Equivalently, start with the three-crossing positive trefoil blackboard parallel, add one negative full annulus twist, and attach the positive clasp as in the admitted sixteen-crossing code. Then
$$s(D_+(T_{2,3},2))=2.$$

## Statement references

[[lem-explicit-two-twisted-whitehead-double-has-sixteen-crossing-code|The actual admitted diagram and framing convention]]

[[def-rasmussen-s-invariant|Rasmussen's filtration convention]]

[Hedden–Ording, Theorem1.1 and Section2.1](https://arxiv.org/pdf/math/0512348v1)

## Facts & Assumptions

**Given:** Countable Choice and the knot and framing convention in the Statement.

[A1] [[def-countable-choice]] is the axiom branch used by the knot invariant, the finite diagrams, and the smooth four-ball genus.

[F1] [[def-rasmussen-s-invariant]] defines $s$ from the filtration levels of the two Lee homology generators.

[F2] [[lem-explicit-two-twisted-whitehead-double-has-sixteen-crossing-code]] supplies the admitted sixteen-row clockwise outgoing-over-first code for this actual knot, with ten positive and six negative crossings. [[lem-positive-whitehead-clasp-band-gives-genus-one-surface]] supplies its smooth genus-one four-ball spanning surface.

[F3] The finite signed cube and its grading are supplied by [[alg-khovanov-chain-complex-from-diagram]], and [[lem-khovanov-cube-differential-squares-to-zero]] proves its differential squares to zero. The Lee spectral sequence has rational Khovanov homology as its homology page, and for a knot its limiting lines have odd quantum degrees $s-1,s+1$ in cohomological degree zero; see [[lem-lee-filtered-spectral-sequence-and-two-orientation-classes]] and [F1].

[F4] [[thm-rasmussen-s-bounds-smooth-four-ball-genus]] proves $|s(K)|\le2g_4^{\mathrm{sm}}(K)$ for actual embedded smooth spanning surfaces.

## Proof

**Given:** The hypotheses of the Statement and the admitted sixteen-row diagram.

1.1 **Actual diagram and smoothing.** Use exactly the sixteen rows in [F2], in their listed order. For a row $(a,b,c,d)$, its first dart is outgoing over, and its third is incoming over. In the source chart these can be northeast and southwest, or southwest and northeast; clockwise rotation in either case makes the A-smoothing $(a,b),(c,d)$ and the B-smoothing $(a,d),(b,c)$. Thus for a bit state $v\in\{0,1\}^{16}$, form an equivalence relation on the edge labels $1,\ldots,32$ by joining these A pairs when $v_r=0$ and B pairs when $v_r=1$. Its classes are precisely the resolution circles, since each edge has its two endpoints joined by the chosen smoothing. Order the classes by their least edge label. This is the actual corrected chart, not a PD-package smoothing convention. [A1, F2, F3, given, construct]

2.1 **Complete finite matrix rule.** Let $k(v)$ be that number of classes. A tensor generator is $(v,L)$, where $L$ is the subset of circles carrying $X$ and the other circles carry $1$. Its degrees are $i=|v|-6$ and $j=|v|-2+k(v)-2|L|$. Order generators first by the binary integer $v$ with crossing $r$ at bit $r-1$, and then by lexicographic order of the increasing tuples listing $L$. For the two values $j=-3,-1$, form the three bases with $|v|=5,6,7$ and $|L|=(|v|-2+k(v)-j)/2$, omitting nonintegral or inadmissible cardinalities. On an edge $v\to v+e_r$, unchanged circle classes keep their labels. If two circles merge, their output is zero for labels $X,X$, is $X$ for exactly one $X$, and is $1$ otherwise. If one circle splits, label $X$ gives $X,X$ and label $1$ gives the sum of $1,X$ and $X,1$. These are all matrix entries; reduce them modulo two, where the integral cube signs become $1$. [F3, step 1.1, construct, algebra]

3.1 **Elimination.** For $j=-3$, the ordered dimensions $(\dim C^{-1,j},\dim C^{0,j},\dim C^{1,j})$ are $(1033,455,102)$ and the two differential ranks over $\mathbb F_2$ are $(362,93)$. For $j=-1$, those dimensions are $(8073,6216,2841)$ and the ranks are $(4018,2198)$. Here is an exact elimination specification, so the ranks do not invoke a floating-point calculation or a polynomial table. Encode column $c$ by the integer $\sum_{r:c_r=1}2^r$, with rows numbered from zero in the basis order of step 2.1. Initially there are no pivots. Process columns in order; while the current integer is nonzero, let $r$ be its highest nonzero bit. If a pivot at $r$ exists, replace the integer by its bitwise exclusive-or with that pivot; otherwise store the integer as the pivot at $r$ and proceed to the next column. Counting stored pivots gives respectively $362,93,4018,2198$. Each replacement is addition of an earlier column and each stored pivot has a new leading row, which proves that this count is the matrix rank. Repeating with the lowest nonzero bit gives the same four ranks. Applying the second matrix to every column of the first also gives zero in both cases. The four complete matrices and the executable enumeration of precisely steps 1.1–3.1 are retained in the calculation record below; the proof uses the finite rule just specified. [F3, step 2.1, construct, algebra]

4.1 An integral matrix has rational rank at least its rank modulo two: any nonsingular minor modulo two has odd integer determinant and is therefore nonzero over $\mathbb Q$. The integral differential squares to zero by [F3], so its two rational ranks sum to at most $\dim C^{0,j}$. In each case of step 3.1 the two ranks modulo two already sum to that dimension. Consequently the rational ranks have the same sum and $Kh^{0,-3}(D;\mathbb Q)=Kh^{0,-1}(D;\mathbb Q)=0$. This argument establishes exactly the rational vanishings needed below; no mod-two Lee deformation is used. [F3, step 3.1, algebra]

5.1 In the finite Lee spectral sequence of [F3], a zero group in a fixed bidegree on the rational Khovanov page remains zero on every later page, since each later group is a subquotient of that group. At a positive crossing the oriented smoothing is A, while at a negative crossing it is B: in the outgoing-over-first chart the incoming ends join to outgoing ends in the A pairs exactly in the positive case. Both knot orientations therefore have their canonical state at $|v|=6$, hence $i=0$. Thus the two limiting knot lines occur in degrees $(0,s-1)$ and $(0,s+1)$. Their quantum degrees are odd, so $s$ is even. By [F2] and the smooth bound [F4], $|s|\le2$. Thus $s\in\{-2,0,2\}$. The possibility $s=-2$ would give a nonzero limiting line in $(0,-3)$, and $s=0$ would give one in $(0,-1)$, both contradicting step 4.1. Therefore $s(D_+(T_{2,3},2))=2$. The genus bound uses the actual embedded Whitehead band, not a numerical assumption from the source. [A1, F1, F2, F3, F4, step 4.1, algebra] ∎

## Remarks

The exact finite enumeration is [compute-whitehead-khovanov.py](../research/inverse-problems-knot-theory-all-109-2026-10-19-owner-quantum-original-repairs/whitehead-s-calculation/compute-whitehead-khovanov.py). Its [four complete matrices](../research/inverse-problems-knot-theory-all-109-2026-10-19-owner-quantum-original-repairs/whitehead-s-calculation/exact-four-matrices.json.gz) include every ordered basis and every column as a hexadecimal bit vector. The matrix archive SHA256 is `16cf0cb4f60f3ea992f29cc6519d4e9b0bfe1feccfb6802e4467743e4c2d1331`. These files record the finite calculation; they are not an additional theorem supplier.
