---
id: lem-boundary-spur-or-at-most-three-shell-from-curvature
kind: lemma
title: "Boundary spur or at most three shell from curvature"
status: draft
origin: pipeline
deps: [lem-sc-toolkit-minimal-diagrams-and-cut-vertex-reduction, lem-c-prime-one-sixth-interior-faces-have-at-least-seven-arcs, lem-euler-curvature-identity-for-an-arc-reduced-disc-diagram]
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Touikan Proposition 3.5.5, complete proof"
      url: "https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-18.html"
---

## Statement

An **$i$-shell** is a face with one exterior arc and a complementary path of exactly $i$ internal arcs. A reduced $C'(1/6)$ diagram other than a point has a boundary spur or an exposed face whose exterior boundary is connected and whose complementary path has at most three internal arcs. A one-face disc is a zero-shell. For a singular diagram one may take an end disc block, and choose the exterior arc so its interior avoids that block's attachment vertex; consequently it is contiguous in the full outer walk. In a nonsingular multi-face disc there are at least two distinct exposed faces with at most three internal arcs.

## Facts & Assumptions

**Given:** A non-point reduced $C'(1/6)$ diagram, arc-reduced except for the retained vertex on a one-face circle. An $i$-shell is a face with one exterior arc and a complementary path of $i$ internal arcs.

[F1] A diagram has a finite tree of disc and bridge blocks; end-block arcs avoiding the attachment transfer to the full walk ([[lem-sc-toolkit-minimal-diagrams-and-cut-vertex-reduction]]).

[F2] Interior faces have at least seven arcs ([[lem-c-prime-one-sixth-interior-faces-have-at-least-seven-arcs]]).

[F3] The total vertex and face curvature is two for any corner-angle assignment ([[lem-euler-curvature-identity-for-an-arc-reduced-disc-diagram]]).

## Proof

1.1 First consider a nonsingular multi-face disc and suppress its degree-two vertices. There is no degree-one interior tip: a face walk around such a tip would traverse its incident edge and immediately its reverse, contradicting cyclic reduction of the relator. Boundary vertices have degree at least two since the disc boundary is a circle. Thus after suppression all degrees are at least three; the all-degree-two circle case would have just one face. Assign $2/d$ to each corner occurrence at an interior vertex of degree $d$, and $1/(d-1)$ at a boundary vertex of degree $d$. Their links are respectively a circle with $d$ corner occurrences and an interval with $d-1$ corner occurrences, so every vertex has curvature zero. Consequently interior angles are at most $2/3$ and boundary angles at most $1/2$. A face visiting the same vertex several times contributes several corners, not one. [given, F3]

2.1 Let $n$ count the corners in the cyclic attaching walk of a face and let $b$ count those occurrences based at boundary vertices. Then $k(f)\le 2-n/3-b/6$. For an interior face, [F2] gives $n\ge7$, including self-adjacent arc occurrences, so its curvature is negative even if it touches the boundary at a vertex. Distinct exterior arcs cannot be consecutive in this cyclic walk: at their common boundary vertex the corner would join the two boundary germs with no intervening internal germ in the interval link, forcing degree two, which was suppressed. Hence if the face has at least two exterior arcs, each has two endpoint corner occurrences separated from the others by an internal arc occurrence. There are at least four such boundary corner occurrences and $n\ge4$, giving $k(f)\le2-4/3-4/6=0$. Their underlying vertices may repeat; only the occurrences must be distinct. No simplicity of a face attaching walk is used. [step 1.1, F2, algebra]

3.1 A shell with $i$ internal arcs has $n=i+1$ and at least two boundary corners, hence $k(f)\le(4-i)/3$. A multi-face disc has no zero-shell, since a face with its entire boundary exterior would be the whole disc. Thus positive-curvature faces are precisely among the shells with $1\le i\le3$, and each contributes at most one. The total is two by [F3]; all other contributions are nonpositive. There must therefore be at least two distinct positive-curvature shells. This also proves existence without specifying an attachment. [step 1.1, step 2.1, F3, algebra]

4.1 For an end multi-face disc block with attachment $v$, apply steps 1.1–3.1 to the block by itself, temporarily suppressing $v$ if it has degree two there. At most one of the distinct shells can have $v$ in the interior of its exterior arc: an interior point of an exterior edge is incident to just one face. Choose another positive shell. If $v$ was not suppressed, it is an arc endpoint and cannot lie internally on a single exterior arc. In either event the chosen shell's exterior arc avoids the attachment internally and transfers by [F1]. This supplies the attachment qualification directly; it does not assume that a shell crossing the attachment is a contiguous global segment. [step 3.1, F1]

5.1 A one-face end block has no internal arcs and its complete boundary is an excursion beginning and ending at the attachment, so it is a zero-shell. If the finite block tree has an end bridge, its terminal endpoint is a spur by [F1]. Otherwise an end block is a disc and step 4.1 or the one-face argument applies. A diagram with no faces is a nontrivial finite tree and has an end bridge. These alternatives cover every non-point diagram. [step 4.1, F1] ∎
