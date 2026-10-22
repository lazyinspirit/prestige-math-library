---
id: lem-diagonal-five-grid-filtered-staircase-reduction
kind: lemma
title: "An explicit diagonal five-grid filtered staircase reduction"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-grid-diagram-for-an-oriented-knot
  - alg-grid-knot-floer-complex
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "All matrices and splittings are finite over F_2; no choice axiom is required."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ozsvath, Stipsicz and Szabo, Grid Homology for Knots and Links"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Sections4.1–4.6 and13.2; grid matrix and grading conventions"
---

## Statement

Take the grid on $\mathbb R^2/(5\mathbb Z)^2$ with marks $O_r=(r+\frac12,r+\frac12)$ and $X_r=((r+2)\bmod5+\frac12,r+\frac12)$ for $0\le r<5$. Let $C$ have the $120$ grid states as its $\mathbb F_2$-basis, Maslov grading $M_{\mathbb O}$ and Alexander filtration $A_G$. Its differential counts empty directed torus rectangles avoiding every $O$ but allowing $X$; equivalently, it is the full filtered minus matrix with all five variables set to zero. Then $C$ is a filtered chain complex and is filtered chain homotopy equivalent, preserving Maslov grading, to $S\otimes V^{\otimes4}$. Here $S$ has basis $a,b,c$ at respective $(M,A)$ values $(0,-1),(1,0),(2,1)$ with $\partial c=b$ and other differential zero, and $V$ has zero differential and basis at $(M,A)=(0,0),(-1,-1)$.

In particular, $H(C)$ has rank $16$. Its homology classes in Maslov degree $-k$, $0\le k\le4$, have multiplicity $\binom4k$ and first appear in Alexander filtration $-1-k$. This is a calculation of the specified grid matrix; no knot type or normalized analytic knot Floer identification is asserted.

## Statement references

[[def-grid-diagram-for-an-oriented-knot]]

[[alg-grid-knot-floer-complex]]

## Facts & Assumptions

**Given:** Exactly the grid, directed-rectangle matrix and gradings in the Statement, over $\mathbb F_2$.

[F1] The grid definition [[def-grid-diagram-for-an-oriented-knot]] specifies southwest/northeast source corners and the pair-count formulas for $M_{\mathbb O},M_{\mathbb X},A_G$.

[F2] The full filtered mode of [[alg-grid-knot-floer-complex]] allows $X$ and weights each $O$ by its own variable; setting every variable to zero retains exactly the $O$-free rectangles.

## Proof

1.1 Index states by $0,\ldots,119$ in lexicographic order of permutations $p=(p_0,\ldots,p_4)$, representing points $(p_r,r)$. For distinct $r,s$, the candidate rectangle starts southwest at $(p_r,r)$ and ends northeast at $(p_s,s)$, using positive cyclic coordinate intervals. Put $\delta(u,v)=(v-u)\bmod5$ and say $z$ is inside that interval if $0<\delta(u,z)<\delta(u,v)$. Keep the candidate precisely when no state point and no $O$ point satisfies both interior tests; its target is obtained by swapping $p_r,p_s$. Add targets by symmetric difference. This enumerates both directed rectangles for each transposition and exactly realizes [F1]–[F2]. The finite matrix given by this recipe has $D^2p=0$ at each of its120 columns; direct multiplication is reproduced by the exact finite certificate below. Each retained term has $M$ decrease one and nonnegative $A$ decrease, checked in the same enumeration from the pair-count formulas. Thus $C$ is a filtered chain complex. [F1, F2, given, construct, algebra]

2.1 An arrow $u\mapsto v+z$ with coefficient one and $A(u)=A(v)$ may be cancelled by replacing each other differential column $D(w)$ by $D(w)+[v]D(w)D(u)$, then deleting rows and columns $u,v$; here $[v]D(w)$ is the coefficient of $v$. To verify the equivalence, first replace the basis vector $v$ by $D(u)=v+z$, then replace each other generator $w$ by $w+[v]D(w)u$. The chain identity $D^2=0$ makes the two-dimensional span of $u,D(u)$ an independent contractible summand. Every change preserves the filtration: all terms of $z$ have level at most $A(v)=A(u)$, and whenever $v$ occurs in $D(w)$ one has $A(w)\ge A(v)$. The changes also preserve Maslov grading. Contract that summand by $D(u)\mapsto u$, which preserves filtration because the two levels agree. Applying the36 pivots in the certificate yields a filtered homotopy equivalent48-generator matrix. The displayed reduced columns and equal-level pivot recurrence permit direct verification of every entry. [step 1.1, given, construct, algebra]

3.1 In that reduced matrix every generator satisfies $A=M-1$. For $M=-4,-3,-2,-1,0,1,2$, the chain dimensions are respectively $1,5,11,14,11,5,1$, and the outgoing differential ranks are $0,0,1,4,6,4,1$. The certificate gives independent image columns and expresses every other nonzero column in them. Rank-nullity therefore gives homology multiplicities $1,4,6,4,1,0,0$ at those respective degrees. In each degree choose a basis for boundaries, extend to a basis of cycles, and extend once more to all chains. The differential identifies the last complement with boundaries one degree lower. Since every vector in a fixed Maslov degree has the same Alexander level $M-1$, these changes of basis preserve filtration. Thus the reduced complex splits as its homology generators and two-term pairs. There are $\binom4k$ homology generators at $(M,A)=(-k,-1-k)$ and $\binom4k$ pairs whose source has $(M,A)=(2-k,1-k)$ and target $(1-k,-k)$, for $0\le k\le4$. These are precisely the homology generators and pairs of $S\otimes V^{\otimes4}$; matching bases gives the stated filtered isomorphism after cancellation. The birth levels follow because all homology representatives in a degree have its specified single Alexander level. [step 2.1, given, construct, algebra] ∎

## Finite certificate

All indices below refer to the lexicographic permutation basis, with zero-based indices retained after cancellation. The ordered source/target pivot pairs are:

`[[3,5],[8,14],[9,11],[10,15],[16,17],[18,4],[19,21],[22,23],[27,29],[30,54],[31,55],[32,38],[33,35],[34,58],[36,56],[42,28],[51,53],[57,59],[60,62],[66,52],[72,12],[73,13],[74,80],[76,67],[84,86],[90,91],[92,68],[93,69],[94,118],[95,119],[96,97],[98,20],[100,50],[102,48],[108,109],[114,115]]`

After those cancellations, write $d_i$ for the differential of surviving basis vector $i$. A basis for the image in each source Maslov degree is the following. A list in the right column is the support of $d_i$; addition is symmetric difference.

| Source degree | $i$ | Support of $d_i$ |
|---|---|---|
| -2 | 45 | 1,2,6,24,105 |
| -1 | 39 | 7,26,45,78,81 |
| -1 | 43 | 25,26,45,103 |
| -1 | 47 | 26,99,104,107 |
| -1 | 87 | 7,78,111 |
| 0 | 37 | 39,43,49,75 |
| 0 | 41 | 47,49,75,79,83 |
| 0 | 46 | 43,44,47,106 |
| 0 | 63 | 39,49,75,79,83,87,101,106,117 |
| 0 | 71 | 47,83,101,106,113,117 |
| 0 | 85 | 75,79,87,110 |
| 1 | 40 | 37,41,46,82 |
| 1 | 61 | 37,63,77,85,116 |
| 1 | 65 | 41,63,71,89 |
| 1 | 70 | 46,71,77,112,116 |
| 2 | 64 | 40,61,65,70,88 |

Gaussian elimination of these columns in the displayed order, always choosing the largest remaining row index, gives respective distinct pivot rows $105$; $81,103,107,111$; $75,83,106,117,113,110$; $82,116,89,112$; and $88$. This proves their independence. Every other nonzero reduced column is given by:

$d_{44}=d_{43}$.

$d_{75}=d_{39}+d_{43}$.

$d_{77}=d_{41}+d_{46}$.

$d_{79}=d_{39}+d_{43}$.

$d_{81}=d_{45}$.

$d_{82}=d_{37}+d_{41}+d_{46}$.

$d_{83}=d_{47}$.

$d_{88}=d_{40}+d_{61}+d_{65}+d_{70}$.

$d_{89}=d_{41}+d_{63}+d_{71}$.

$d_{99}=d_{45}$.

$d_{101}=d_{47}$.

$d_{103}=d_{45}$.

$d_{104}=d_{45}$.

$d_{106}=d_{47}$.

$d_{110}=d_{87}$.

$d_{112}=d_{37}+d_{46}+d_{63}+d_{71}+d_{85}$.

$d_{113}=d_{39}+d_{47}+d_{87}$.

$d_{116}=d_{37}+d_{41}+d_{46}+d_{63}+d_{85}$.

$d_{117}=d_{39}+d_{47}+d_{87}$.

Every remaining reduced column is zero. For exact reproduction of the initial matrix, square-zero calculation, grading tests, cancellation recurrence and all supports, the accompanying finite data are [the complete120-state certificate](../research/inverse-problems-knot-theory-all-109-2026-10-19-owner-tau-escalations/diagonal-five-grid-certificate.json) and [the finite enumeration script](../research/inverse-problems-knot-theory-all-109-2026-10-19-owner-tau-escalations/trefoil-grid-exploration.py). The mathematical recipe, pivot sequence and reduced-image certificate above specify the computation without those files.

## Remarks

The staircase $S$ has the reverse-mirror grading convention. Identifying the oriented knot represented by this five-grid, or relating its chosen normalization to an admissible singly pointed analytic complex, remains a separate obligation. This finite calculation supplies neither the generic grid-to-analytic comparison nor a connected-sum or cobordism theorem.
