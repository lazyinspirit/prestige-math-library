---
id: ex-klein-bottle-polygonal-schema
kind: example
title: "Klein bottle as two crosscaps"
status: published
origin: pipeline
deps: [def-polygonal-schema-and-edge-pairing, lem-polygonal-schema-reduction-moves, def-klein-bottle, ex-projective-plane-polygonal-schema, def-euler-characteristic-of-a-finite-cw-complex, def-r-orientation-of-a-topological-manifold, def-orientation-local-system-and-orientation-cover]
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Gallier and Xu, A Guide to the Classification Theorem for Compact Surfaces"
      url: "https://www.cis.upenn.edu/~jean/surfclassif-root.pdf"
      locator: "Chapter 6 §6.2, printed pp.89–94"
    - title: "Koch, Classification of Surfaces"
      url: "https://pages.uoregon.edu/koch/math431/Surfaces.pdf"
      locator: "§3 Theorem 4, printed pp.5–6"
pipeline_run: frontier-36-complete
verification:
  precheck: pass
  audited: 2026-09-30
---

## Example

The one-polygon word $a\,a\,b\,b$ of
[[def-polygonal-schema-and-edge-pairing]] realizes the Klein bottle $K$ of
[[def-klein-bottle]], equivalently the standard square word
$a\,b\,a^{-1}b$ under the polygonal cut-and-paste of
[[lem-polygonal-schema-reduction-moves]]. It is nonorientable and has $V=1$,
$E=2$, $F=1$, hence $\chi(K)=1-2+1=0$
([[def-euler-characteristic-of-a-finite-cw-complex]]). The two
equal-exponent pairs are the two crosscap blocks, and the one-letter block
$a\,a$ realizes $\mathbb{RP}^2$ by
[[ex-projective-plane-polygonal-schema]]. This finite cut-and-paste
computation uses no choice axiom.

## Facts & Assumptions

**Given:** The square $Q=[0,1]^2$ with corners $v_0=(0,0)$, $v_1=(1,0)$,
$v_2=(1,1)$, $v_3=(0,1)$, the one-polygon schema whose boundary sides read
$a$ (bottom $v_0v_1$), $a$ (right $v_1v_2$), $b$ (top $v_2v_3$), $b$ (left
$v_3v_0$) with equal-exponent pairs glued with matching parameters, and the
quotient $Y$ of $Q$ by these pairings.

[L1] Schema conventions: sides of a schema are paired by specified corner-preserving
homeomorphisms, affine when both sides are straight, the boundary word records for each side whether the boundary
traversal agrees with a reference direction, and renaming letters, cyclically
rotating the word or reversing the polygon orientation give homeomorphic
quotients; the quotient vertices, edges and faces are the corner classes, the
paired side classes and the disk interiors, giving a finite cell structure with
counts $(V,E,F)$; in a one-polygon word a pair with opposite exponents is
orientation compatible while a pair with equal exponents is twisted
([[def-polygonal-schema-and-edge-pairing]]).

[L2] Cut-and-paste moves: cutting a polygon along an embedded polygonal
diagonal whose interior lies in the polygon interior and regluing the two new
boundary sides preserves the quotient homeomorphism type, as does the inverse
gluing of two faces along a paired pair of sides; and the resulting finite
identities move two same-direction occurrences of a letter together as a
crosscap block $bb$, extract an interlaced pair pattern as a commutator handle
block, and replace one handle plus one crosscap by three crosscaps
([[lem-polygonal-schema-reduction-moves]]).

[L3] The Klein bottle $K$ is the quotient of $Q$ by $(x,0)\sim(x,1)$ and
$(0,y)\sim(1,1-y)$, and the one-polygon word of that presentation is
$a\,b\,a^{-1}b$ ([[def-klein-bottle]]).

[L4] The one-polygon word $a\,a$, with its two sides paired in the same
boundary direction, realizes $\mathbb{RP}^2$ and is nonorientable
([[ex-projective-plane-polygonal-schema]]).

[L5] An integral orientation is a continuous generating section of the local
homology system; over a coordinate ball the system is trivialized and a
continuous generator section is locally constant, so a continuous orientation
is unchanged by transport along any loop ([[def-r-orientation-of-a-topological-manifold]],
[[def-orientation-local-system-and-orientation-cover]]).

[L6] The Euler characteristic of a space with finitely many cells is
$\chi(X)=\sum_n(-1)^nc_n(X)$
([[def-euler-characteristic-of-a-finite-cw-complex]]).

## Verification

**Proof technique:** direct.

1.1 Both pairs of the word $a\,a\,b\,b$ carry equal exponents: the bottom side $a$ is glued to the right side $a$ with matching parameters, $(t,0)\sim(1,t)$, and the top side $b$ is glued to the left side $b$ with matching parameters, $(1-t,1)\sim(0,1-t)$. The a-pair identifies the corners $v_0\sim v_1$ and $v_1\sim v_2$, and the b-pair identifies $v_2\sim v_3$ and $v_3\sim v_0$; hence all four corners form one vertex class, so the quotient $Y$ has $V=1$ vertex class, $E=2$ paired side classes and $F=1$ face, and these are the cells of its finite CW structure. [L1]

1.2 Read the word of the Klein-bottle presentation of [L3] cyclically from its middle letter, $b\,a^{-1}\,b\,a$; in the crosscap identity of [L2] with the letter $a$ renamed $b$, the separating arc $X=a^{-1}$ and the complementary arc $Y=a$ give a quotient homeomorphic to that of $b\,b\,Y^{-1}X=b\,b\,a^{-1}a^{-1}$. Cyclically rotating this word and renaming the letter $a^{-1}$ to $a$ turns it into $a\,a\,b\,b$; since the presentation of [L3] realizes the Klein bottle $K$, the quotient $Y$ of the word $a\,a\,b\,b$ is homeomorphic to $K$. [L1, L2, L3]

2.1 Both equal-exponent pairings preserve boundary direction: their formulas in step 1.1 use matching boundary parameters. Choose collars around paired interior points of the $a$-sides, with $t$ increasing along the boundary and $r\geq0$ pointing inward. These coordinates give the same face orientation on the two collars. A chart across the paired edge uses $(t,r)$ on the first collar and $(t,-r)$ on the second, so its generator has opposite signs relative to the face generators on the two sides. The sign is the local-homology sign of a reflection, which reverses the cyclic orientation of the boundary of a small disk, exactly as in the seam calculation for [L4]. A path through the open face joining the collar interiors, closed by one crossing of the seam, therefore transports its generator to its negative. A continuous orientation is unchanged by loop transport [L5], which is impossible for a generator of an infinite cyclic group. Hence $Y\cong K$ is nonorientable. The two equal-exponent pairs are crosscap blocks, and [L4] identifies the single block with $\mathbb{RP}^2$. [L1, L4, L5, step 1.1, step 1.2]

3.1 The cell counts of step 1.1 give $\chi(Y)=V-E+F=1-2+1=0$ by [L6], and this value is that of the Klein bottle by step 1.2. Together with steps 1.2 and 2.1 the word $a\,a\,b\,b$ realizes the Klein bottle, is nonorientable, and has Euler characteristic $0$. Every construction used is a finite explicit pairing, rotation or crosscap move of polygons, so no choice axiom is used. [L1, L6, step 1.1, step 1.2, step 2.1] ∎

## Remarks

The word $a\,a\,b\,b$ is the two-crosscap normal form, the case $h=2$ of the
corresponding block word, and the standard word $a\,b\,a^{-1}b$ of
[[def-klein-bottle]] is recovered from it by the same crosscap identity read
backwards. The argument uses only the finite cut-and-paste moves of
[[lem-polygonal-schema-reduction-moves]] and never the classification theorem
or the Axiom of Choice.
