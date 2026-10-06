---
id: ex-standard-fundamental-domain-tessellation
kind: example
title: "The standard fundamental domain tessellates the upper half-plane"
status: published
origin: pipeline
deps:
  - thm-standard-fundamental-domain-for-the-modular-group
  - lem-modular-quotient-local-charts
  - def-modular-group-action-on-the-upper-half-plane
  - def-orbit-and-stabilizer
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Whole authored item, including statement or definition, every proof or verification step, and used direct supplier interfaces; completed prior Step5 reader/adjudicator evidence reconciled to the current mathematics. Transitive supplier proofs were not audited in full."
    delegated_by: "owner via tools/autopilot (frontier-38-owner-30)"
    evidence:
      - "research/frontier-38-owner-30-reader-21.md"
      - "research/frontier-38-owner-30-alpha-batch-21-5a.md"
      - "research/frontier-38-owner-30-step5-hash-21-post.json"
    reviewed_raw_sha256: "f3ad9f8f0182f53343a84b6c09f7f5705c8d9e9cfe34c5fa167e98270a760b1c"
    content_sha256: "7b71f03652d1f15cb0291f85c93dd6097ad29019777f4d619e3d8ab6239426e0"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Theorem 2.12 and the accompanying figure, printed pp. 32-34."
    - title: "D. Zagier, Elliptic Modular Forms and Their Applications, in The 1-2-3 of Modular Forms (Universitext, Springer, 2008)"
      url: "https://people.mpim-bonn.mpg.de/zagier/files/doi/10.1007/978-3-540-74119-0_1/fulltext.pdf"
      locator: "Proposition 1 and the figure of the standard domain, printed pp. 6-8."
---

## Example

The closed tiles $\gamma\cdot\overline D$, $\gamma\in PSL_2(\mathbb Z)$, have union $\mathfrak H$, pairwise disjoint interiors, and any two distinct tiles have empty intersection or meet in a common edge, a half-edge or a vertex; the full edge identifications are $\tau\sim\tau+1$ on the vertical sides and $\tau\sim-1/\tau$ on the circular arc. The tiling is $PSL_2(\mathbb Z)$-invariant and locally finite.

## Facts & Assumptions

**Given:** $D=\{\tau\in\mathfrak H:|\Re\tau|<1/2,\ |\tau|>1\}$, its closure $\overline D$, and the action of $G=PSL_2(\mathbb Z)$ ([[def-modular-group-action-on-the-upper-half-plane]]).

[F1] Every orbit meets $\overline D$; no two distinct points of $D$ are equivalent; two distinct points $z,z'\in\overline D$ are equivalent if and only if $z'=z\pm1$ with $\Re z=\mp1/2$, or $z'=-1/z$ with $|z|=1$; the points of $\overline D$ with nontrivial stabiliser are only $i,\omega,\omega+1$ ([[thm-standard-fundamental-domain-for-the-modular-group]], [[def-orbit-and-stabilizer]]).

[F2] Each $\tau\in\mathfrak H$ has a neighbourhood meeting only the finitely many stabiliser translates of $\tau$; equivalently the action is properly discontinuous and the quotient map is open ([[lem-modular-quotient-local-charts]]).

## Verification

1.1 Every point of $\mathfrak H$ lies in some tile, because its orbit meets $\overline D$ [F1]; thus $\bigcup_{\gamma}\gamma\overline D=\mathfrak H$. If two tiles have a common interior point, then $\gamma z=\gamma'z'$ with $z,z'\in D$, so $z,z'$ are equivalent points of $D$; by [F1] they are equal and $\gamma^{-1}\gamma'$ stabilises $z\in D$, which by [F1] has trivial stabiliser, so $\gamma=\gamma'$. Hence distinct tiles have disjoint interiors. [F1, given, algebra]

1.2 $T$ identifies the two vertical sides, and $S$ identifies the two halves of the circular side, fixing $i$. To check incidence, translate one of two meeting tiles to $\overline D$. At a boundary point other than $i,\omega,\omega+1$ the stabiliser is trivial; [F1] then forces the other tile to be $T\overline D$, $T^{-1}\overline D$, or $S\overline D$, according to the side containing that point. Direct substitution shows that these share respectively a full vertical side or the full circular side. Any other tile can meet $\overline D$ only at the three exceptional points. Such an intersection has at most one point: each tile is an intersection of three half-planes bounded by vertical lines or circles orthogonal to the real axis, hence is convex along those real-orthogonal circular or vertical geodesics. Indeed, a real Möbius map sending a given geodesic to the imaginary axis carries each bounding half-plane to one whose intersection with that axis is an interval. Two distinct common points would therefore give a common segment, including a nonexceptional point, which is the already listed side case. Thus every nonempty intersection is a side or a vertex, as asserted. [F1, given, algebra]

2.1 The tiles are invariant by construction. For local finiteness let $K\subset\mathfrak H$ be compact and put $a:=\min_K\operatorname{Im}>0$. If $w=\gamma z\in K$ with $z\in\overline D$ and $c\ne0$, then $a\le\operatorname{Im}w\le1/(c^2\operatorname{Im}z)$, so $\operatorname{Im}z\le1/a$. Therefore such a tile meets $K$ through the compact set $L:=\overline D\cap\{\operatorname{Im}z\le1/a\}$; the compact-set finiteness proved in [[lem-modular-quotient-local-charts]], step 1.1, leaves only finitely many $\gamma$ with $\gamma L\cap K\ne\varnothing$. For $c=0$ the maps are translations $T^n$, and the real-part bounds on $K$ and $|\operatorname{Re}z|\le1/2$ leave only finitely many $n$. Thus every compact $K$ meets finitely many tiles; a compact disc neighbourhood at each point proves local finiteness. [F1, F2, step 1.2, given, algebra] ∎
