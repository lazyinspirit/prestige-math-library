---
id: lem-knot-kt41-whitehead-double-values
kind: lemma
title: "The two-twisted positive Whitehead double has tau zero and s two"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-knot-floer-filtration-and-tau
  - lem-tau-is-independent-of-heegaard-grid
  - def-rasmussen-s-invariant
  - def-lee-deformed-khovanov-complex
  - alg-khovanov-chain-complex-from-diagram
  - def-grid-diagram-for-an-oriented-knot
  - alg-grid-knot-floer-complex
  - thm-grid-homology-independent-of-grid-and-equals-knot-floer
  - lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing
  - def-smooth-and-topological-slice-genus
  - lem-smooth-and-topological-slice-genus-minima-exist
  - lem-lee-cobordism-filtration-genus-bound
  - thm-rasmussen-s-bounds-smooth-four-ball-genus
  - def-countable-choice
  - lem-explicit-two-twisted-whitehead-double-has-sixteen-crossing-code
  - lem-positive-whitehead-clasp-band-gives-genus-one-surface
  - lem-lee-filtered-spectral-sequence-and-two-orientation-classes
  - lem-khovanov-cube-differential-squares-to-zero
dependency_level: 11
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "AC_omega is inherited from the invariant and smooth-genus definitions and the finite diagram choices. No full Axiom of Choice is used."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Matthew Hedden and Philip Ording, The Ozsvath-Szabo and Rasmussen concordance invariants are not equal"
      url: "https://arxiv.org/pdf/math/0512348v1"
      locator: "Theorem 1.1 and §§2.1–2.2, printed pp.2–10; the two-twisted positive Whitehead double, Lee filtration and the 25-generator knot Floer computation"
    - title: "Jacob Rasmussen, Khovanov homology and the slice genus"
      url: "https://arxiv.org/pdf/math/0402131v1"
      locator: "§§3–4, printed pp.6–12; the s invariant and the cobordism filtration bound"
    - title: "Jennifer Hom, A survey on Heegaard Floer homology and concordance"
      url: "https://arxiv.org/pdf/1512.00383v3"
      locator: "§§3.1 and 5; tau and the comparison with Rasmussen's invariant"
---

## Statement

Assume the Axiom of Countable Choice. Let $D_+(T_{2,3},2)$ be the positive-clasped Whitehead double of the right-handed trefoil with two full twists in the clasp, using the twist convention of Hedden and Ording. The normalized knot Floer threshold and Rasmussen invariant satisfy
$$\tau(D_+(T_{2,3},2))=0,\qquad s(D_+(T_{2,3},2))=2.$$

## Statement references

[[def-knot-floer-filtration-and-tau|The normalized tau threshold]]

[[def-rasmussen-s-invariant|Rasmussen's s invariant and filtration convention]]

[Hedden and Ording, *The Ozsvath-Szabo and Rasmussen concordance invariants are not equal*, Theorem 1.1 and §§2.1–2.2](https://arxiv.org/pdf/math/0512348v1)

[Rasmussen, *Khovanov homology and the slice genus*, §§3–4](https://arxiv.org/pdf/math/0402131v1)

[Hom, *A survey on Heegaard Floer homology and concordance*, §§3.1 and 5](https://arxiv.org/pdf/1512.00383v3)

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, the specified positive-clasped two-twisted Whitehead double, and the source's twist convention.

[A1] [[def-countable-choice]] is the axiom branch used by the knot invariant, the finite diagrams, and the smooth four-ball genus.

[F1] [[def-knot-floer-filtration-and-tau]] defines tau by the first Alexander filtration level mapping nontrivially to total hat homology.

[F2] [[def-rasmussen-s-invariant]] defines $s$ from the filtration levels of the two Lee homology generators.

[L1] [[thm-grid-homology-independent-of-grid-and-equals-knot-floer]] is the declared grid-to-analytic comparison needed to turn a finite knot Floer calculation into the normalized tau value. Its current Step-1 decision is escalated, and it does not provide the specific 25-generator differential computation.

[L2] [[thm-rasmussen-s-bounds-smooth-four-ball-genus]] states the smooth genus bound used in the source to choose the value $s=2$ from the Khovanov calculation's alternatives, for actual embedded smooth surfaces; this bound does not supply the missing finite Khovanov/Lee computation.

[L3] [[lem-lee-cobordism-filtration-genus-bound]] is the exact Lee-cobordism input required by [L2]; its smooth surface is required to be properly embedded in $S^3\times[0,1]$ with product collars.

[F3] [[lem-explicit-two-twisted-whitehead-double-has-sixteen-crossing-code]] supplies the admitted sixteen-row clockwise outgoing-over-first code for this actual knot, with ten positive and six negative crossings. [[lem-positive-whitehead-clasp-band-gives-genus-one-surface]] supplies its smooth genus-one four-ball spanning surface.

[F4] The finite signed cube and its grading are supplied by [[alg-khovanov-chain-complex-from-diagram]], and [[lem-khovanov-cube-differential-squares-to-zero]] proves its differential squares to zero. The Lee spectral sequence has rational Khovanov homology as its homology page, and for a knot its limiting lines have odd quantum degrees $s-1,s+1$ in cohomological degree zero; see [[lem-lee-filtered-spectral-sequence-and-two-orientation-classes]] and [F2].

## Proof

**Given:** Countable Choice and the knot in the Statement. This proof establishes its $s$ equality; the independent $\tau$ equality remains unresolved below.

1.1 **Actual diagram and smoothing.** Use exactly the sixteen rows in [F3], in their listed order. For a row $(a,b,c,d)$, its first dart is outgoing over, and its third is incoming over. In the source chart these can be northeast and southwest, or southwest and northeast; clockwise rotation in either case makes the A-smoothing $(a,b),(c,d)$ and the B-smoothing $(a,d),(b,c)$. Thus for a bit state $v\in\{0,1\}^{16}$, form an equivalence relation on the edge labels $1,\ldots,32$ by joining these A pairs when $v_r=0$ and B pairs when $v_r=1$. Its classes are precisely the resolution circles, since each edge has its two endpoints joined by the chosen smoothing. Order the classes by their least edge label. This is the actual corrected chart, not a PD-package smoothing convention. [A1, F3, F4, given, construct]

2.1 **Complete finite matrix rule.** Let $k(v)$ be that number of classes. A tensor generator is $(v,L)$, where $L$ is the subset of circles carrying $X$ and the other circles carry $1$. Its degrees are $i=|v|-6$ and $j=|v|-2+k(v)-2|L|$. Order generators first by the binary integer $v$ with crossing $r$ at bit $r-1$, and then by lexicographic order of the increasing tuples listing $L$. For the two values $j=-3,-1$, form the three bases with $|v|=5,6,7$ and $|L|=(|v|-2+k(v)-j)/2$, omitting nonintegral or inadmissible cardinalities. On an edge $v\to v+e_r$, unchanged circle classes keep their labels. If two circles merge, their output is zero for labels $X,X$, is $X$ for exactly one $X$, and is $1$ otherwise. If one circle splits, label $X$ gives $X,X$ and label $1$ gives the sum of $1,X$ and $X,1$. These are all matrix entries; reduce them modulo two, where the integral cube signs become $1$. [F4, step 1.1, construct, algebra]

3.1 **Elimination.** For $j=-3$, the ordered dimensions $(\dim C^{-1,j},\dim C^{0,j},\dim C^{1,j})$ are $(1033,455,102)$ and the two differential ranks over $\mathbb F_2$ are $(362,93)$. For $j=-1$, those dimensions are $(8073,6216,2841)$ and the ranks are $(4018,2198)$. Here is an exact elimination specification, so the ranks do not invoke a floating-point calculation or a polynomial table. Encode column $c$ by the integer $\sum_{r:c_r=1}2^r$, with rows numbered from zero in the basis order of step 2.1. Initially there are no pivots. Process columns in order; while the current integer is nonzero, let $r$ be its highest nonzero bit. If a pivot at $r$ exists, replace the integer by its bitwise exclusive-or with that pivot; otherwise store the integer as the pivot at $r$ and proceed to the next column. Counting stored pivots gives respectively $362,93,4018,2198$. Each replacement is addition of an earlier column and each stored pivot has a new leading row, which proves that this count is the matrix rank. Repeating with the lowest nonzero bit gives the same four ranks. Applying the second matrix to every column of the first also gives zero in both cases. The four complete matrices and the executable enumeration of precisely steps 1.1–3.1 are retained in the calculation record below; the proof uses the finite rule just specified. [F4, step 2.1, construct, algebra]

4.1 An integral matrix has rational rank at least its rank modulo two: any nonsingular minor modulo two has odd integer determinant and is therefore nonzero over $\mathbb Q$. The integral differential squares to zero by [F4], so its two rational ranks sum to at most $\dim C^{0,j}$. In each case of step 3.1 the two ranks modulo two already sum to that dimension. Consequently the rational ranks have the same sum and $Kh^{0,-3}(D;\mathbb Q)=Kh^{0,-1}(D;\mathbb Q)=0$. This argument establishes exactly the rational vanishings needed below; no mod-two Lee deformation is used. [F4, step 3.1, algebra]

5.1 In the finite Lee spectral sequence of [F4], a zero group in a fixed bidegree on the rational Khovanov page remains zero on every later page, since each later group is a subquotient of that group. At a positive crossing the oriented smoothing is A, while at a negative crossing it is B: in the outgoing-over-first chart the incoming ends join to outgoing ends in the A pairs exactly in the positive case. Both knot orientations therefore have their canonical state at $|v|=6$, hence $i=0$. Thus the two limiting knot lines occur in degrees $(0,s-1)$ and $(0,s+1)$. Their quantum degrees are odd, so $s$ is even. By [F3] and the smooth bound [L2], $|s|\le2$. Thus $s\in\{-2,0,2\}$. The possibility $s=-2$ would give a nonzero limiting line in $(0,-3)$, and $s=0$ would give one in $(0,-1)$, both contradicting step 4.1. Therefore $s(D_+(T_{2,3},2))=2$. The genus bound uses the actual embedded Whitehead band, not a numerical assumption from the source. [A1, F2, F3, F4, L2, step 4.1, algebra] ∎

## Remarks

### Unresolved Floer obligation

 The knot Floer equality $\tau=0$ still requires the actual finite filtered Floer complex and its geometric admission. Neither the Khovanov matrices above nor the grid-to-analytic comparison [L1] supplies that computation. Accordingly step 5.1 proves the $s$ equality in the Statement, while its independent $\tau$ equality remains unresolved; this joint carrier does not claim full proof completion.

### Calculation record

The exact finite enumeration is [compute-whitehead-khovanov.py](../research/inverse-problems-knot-theory-all-109-2026-10-19-owner-quantum-original-repairs/whitehead-s-calculation/compute-whitehead-khovanov.py). Its [four complete matrices](../research/inverse-problems-knot-theory-all-109-2026-10-19-owner-quantum-original-repairs/whitehead-s-calculation/exact-four-matrices.json.gz) include every ordered basis and every column as a hexadecimal bit vector. The matrix archive SHA256 is `16cf0cb4f60f3ea992f29cc6519d4e9b0bfe1feccfb6802e4467743e4c2d1331`. These files record the finite calculation; they are not an additional theorem supplier.
