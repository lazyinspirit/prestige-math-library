---
id: lem-boundary-label-of-a-van-kampen-diagram-is-null-in-the-presented-group
kind: lemma
title: "The boundary label of a van Kampen diagram is trivial in the presented group"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-van-kampen-diagram-boundary-label-and-area, def-normal-closure, def-group-presentation, thm-fundamental-group-of-the-circle]
proof_strategy: "direct"
verification:
  precheck: pass
  verified:
    model: Codex
    verdict: pass
    date: 2026-09-10
    scope: "Owner-delegated local proof repair and direct-interface audit: free-edge existence, explicit collapse, arbitrary closed walks, graph base case and monogons checked; precheck and rendercheck passed. Not an independent judge or owner audit."
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "GAP SmallCancellation manual, Chapter 1: Small Cancellation Theory — the classical conditions"
      url: "https://mate.dm.uba.ar/~isadofschi/smallcancellation/chap1_mj.html"
    - title: "Jay Williams, Universal Countable Borel Quasi-Orders"
      url: "https://arxiv.org/pdf/1306.1270"
    - title: "Nicholas Touikan, An Introduction to Combinatorial and Geometric Group Theory, Section 3.5"
      url: "https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-18.html"
    - title: "Nicholas Touikan, Section 3.4, elementary collapses and Lemma 3.4.3"
      url: "https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-17.html"
    - title: "Clara Löh, Geometric Group Theory: An Introduction, Section 7.4.1"
      url: "https://loeh.app.uni-regensburg.de/ggt_book/ggt_book_draft.pdf"
---

## Statement

Let $D$ be a van Kampen diagram over a presentation $\langle X\mid R\rangle$.
Then the boundary label of $D$ represents the identity in the presented group.

## Facts & Assumptions

**Given:** A van Kampen diagram $D$ over $\langle X\mid R\rangle$.

[F1] The presented group is the quotient of the free group on $X$ by the normal closure of $R$ ([[def-group-presentation]], [[def-normal-closure]]).

[L1] A van Kampen diagram is a nonempty finite connected simply connected planar combinatorial $2$-complex. Its face labels are cyclic conjugates of relators or their inverses, and its literal outer boundary walk counts both orientations of every bridge ([[def-van-kampen-diagram-boundary-label-and-area]]).

[F2] A loop going once around the circle is not nullhomotopic: its class corresponds to $1\ne0$ in the integers ([[thm-fundamental-group-of-the-circle]]).

## Proof

**Proof technique:** direct.

1.1 We prove the stronger assertion that every closed edge walk in $D$ has label equal to the identity in the presented group. First suppose there are no faces. This finite connected graph has no cycle, including a loop edge or a two-edge cycle formed by parallel edges. Indeed, given a cycle, map one of its edges once around $\mathbb R/\mathbb Z$, with both endpoints sent to $[0]$, and map every other edge to $[0]$. The edge maps agree at vertices and therefore define a continuous map on the graph. The cycle maps to a once-around circle loop, with constant pauses. A contraction of the cycle in the graph would contract that circle loop, contrary to [F2]. Thus the graph is a tree. [L1, F2, given, construct]

1.2 If a face remains, let $K$ be the union of the closures of all faces. This is a nonempty compact planar set with nonempty interior; its frontier lies in the finite $1$-skeleton. The frontier contains a point in an edge interior. Otherwise the frontier would be a finite set of vertices: deleting those vertices would separate the nonempty interior of $K$ from its nonempty exterior, whereas any two points of the plane minus finitely many points can be joined by a polygonal path with small detours around those points. At an edge-interior frontier point exactly one of the two planar sides is occupied by a face. Thus that edge $e$ occurs exactly once in the attaching boundary of one face $f$ and in no other face boundary. Two occurrences, even from the same face, would occupy both sides and make the point interior to $K$. This proves the required free-edge assertion locally. [L1, given, construct]

2.1 A finite tree with an edge has a leaf: an endpoint of a longest simple path cannot have an additional neighbour off the path, which would extend it, or on the path, which would create a cycle. Each visit to a leaf other than the basepoint of a closed walk immediately returns along the same edge; delete those inverse pairs. If the walk is based at the leaf, its label has the form $awa^{-1}$, where $w$ is the label of a closed walk at the neighbouring vertex; delete internal leaf excursions from that walk first. Induction after deleting the leaf edge makes $w$ trivial and hence also $awa^{-1}$. The remaining one-vertex graph has only the empty edge walk. This proves the assertion in the face-free case. [step 1.1, L1, F1, construct]

2.2 Delete the open face $f$ and the open edge $e$, retaining all other cells, and call the resulting subcomplex $D'$. It is a deformation retract of $D$. To see this without assuming that the whole diagram is a disc, parameterize the characteristic polygon of this one face as the triangle $0\le x\le1$, $0\le y\le\min(x,1-x)$, with the free edge as its base. The homotopy $(x,y)\mapsto(x,(1-t)y+t\min(x,1-x))$ fixes the complementary two sides and moves the triangle onto them at $t=1$. It descends through every identification on the complementary attaching walk because those points stay fixed; the open base has no other attachments by step 1.2. For a monogon, the complementary walk is a single vertex: instead contract its characteristic disc linearly to that boundary vertex. Extend either homotopy by the identity on all other cells. Consequently $D'$ is still finite, connected, planar and simply connected, and has one fewer face. Repeated vertices or edges in the complementary walk cause no difficulty. [L1, step 1.2, construct]

2.3 Orient $e$ from $u$ to $v$, and let $p$ be the complementary attaching walk from $u$ to $v$ around $f$. The closed walk $ep^{-1}$ reads a cyclic conjugate of a specified relator or its inverse. It is therefore trivial in the presented group, so the labels of $e$ and $p$ agree there; their inverse labels agree as well. This uses normal closure, not a supposition that the specified relator set is closed under cyclic conjugation. [L1, F1, step 1.2, algebra]

3.1 In any given closed edge walk, replace each occurrence of $e$ by $p$, and each inverse occurrence by $p^{-1}$. This gives a closed walk in $D'$ with the same group label. Induction on the finite number of faces, using steps 1.1 and 2.1 as the base and step 2.2 for the smaller diagram, makes its label trivial. Thus every closed edge walk in $D$ has trivial label. The finite choices of edges and paths used here require no axiom of choice. [step 1.1, step 2.1, step 2.2, step 2.3, induction]

4.1 The literal outer boundary walk is one such closed walk. Its bridges, repeated vertices, starting point and orientation do not affect the conclusion. Its label is therefore the identity in the presented group, equivalently an element of the normal closure of the relators in the free group. [L1, F1, step 3.1] ∎
