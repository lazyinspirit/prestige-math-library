
## Your cluster — `kuratowski`: the four repaired fatal proofs on the planar spine

Page: `plane-graphs-euler-and-the-five-colour-theorem` (A, 40 items).

The independent reader found **four fatal defects** on the Kuratowski–Wagner
spine and rewrote all four. Every one was an **unsupported case reduction** — a
sentence that sounded like a standard argument but was not licensed by anything
cited, and in two cases was outright false. This is the single most load-bearing
chain on the page: `thm-kuratowski-wagner-planarity-characterisation` rests on
all four. The reader's own ledger says that theorem is "clean **once F10–F12 are
supplied**" — so its correctness is exactly the question of whether these repairs
hold.

**F8 — `prop-face-boundaries-in-three-connected-plane-graphs`.** The original
said that among three internally disjoint paths between two off-cycle vertices,
"at most two can meet the cycle", so one avoids it. **That is false** — all three
may meet a cycle, and neither Whitney's theorem nor planarity gives the claim.
The repair uses polygonal Jordan separation to rule out a facial chord by
producing a two-vertex cut, then argues that two components of $G-V(C)$ each with
at least three attachments cannot alternate on the facial cycle, again giving a
two-vertex cut. Check the "cannot alternate" step: it needs the attachments to
actually interleave in the **cyclic order on the facial cycle**, and the
conclusion needs 3-connectivity to be contradicted, not merely 2-connectivity.
Check the reverse direction handles inducedness, both Jordan regions, connected
deletion, and the empty-deletion case as claimed.

**F10 — `lem-kuratowski-minors-are-topological-minors`.** The original claimed a
minimal branch tree has one distinct leaf per incident model edge, so "each
attachment tree has four leaves". **That is false**: several attachment
incidences may meet the same vertex, and attachment vertices may be internal to
the tree. The asserted star/two-degree-three-vertices dichotomy did not follow.
The repair allows coincident incidences; handles $K_{3,3}$ with a centre for at
most three incidences; and for four incidences uses a finite weighted-tree centre
argument giving either a four-arm centre (yielding $TK_5$) or an edge separating
the incidences 2–2, in which case the sides $a,b$ and the other four branch sets
$u_1,\dots,u_4$ display a $K_{3,3}$ **minor** with bipartition
$\{a,u_3,u_4\}$, $\{b,u_1,u_2\}$, converted to a subdivision by the already
proved $K_{3,3}$ case.

Attack this hardest. Verify the claimed $K_{3,3}$ minor really is one: check each
of the nine required adjacencies between the two claimed parts is actually
present given the 2–2 edge separation, that the six branch sets are **disjoint
and connected**, and that the argument does not quietly need the four $u_i$ to be
distinct from $a$ and $b$ in a way the construction cannot guarantee. Check the
weighted-tree centre argument terminates and that "either a four-arm centre or a
2–2 separating edge" is genuinely exhaustive — what if the tree is a single
vertex, or a single edge, or a path?

**F11 — `lem-separation-augmentation-for-kuratowski-free-graphs`.** The original
used a **separation $(V_1,V_2)$ that no cited definition defined** —
`def-vertex-and-edge-connectivity` defines cuts and connectivity, not proper
separations — and restated Menger without its **nonadjacent-terminal** hypothesis,
where the cited theorem did not license the claimed branch-vertex confinement.
The repair defines proper separation, separator and order in the Statement and
**removes** the Menger citation entirely. Check that removing Menger did not
leave a hole: is the order-one rerouting through the cut vertex actually proved,
is $xy\in E(G)$ proved rather than assumed, and is edge-maximality of both
induced sides established for both sides?

**F12 — `lem-edge-maximal-kuratowski-free-is-three-connected`.** The original
asserted an "exceptional" branch-vertex analysis across a 2-separator and claimed
that replacing or adjoining paths produced a forbidden subdivision in a planar
augmentation, with **no cited result giving either the case split or the
augmentation**. The repair drops that analysis: induction plus F11 make both
sides planar, the common separator edge $xy$ is put on a facial cycle in each
drawing, the drawings are glued along $xy$ in opposite half-planes, and a missing
cross-edge is added inside the resulting face, contradicting edge maximality.
Check the gluing: can $xy$ **always** be placed on a facial cycle in each side's
drawing (this needs a justification — an arbitrary planar drawing need not put a
given edge on the outer face), is the glued drawing genuinely plane, and is the
added cross-edge guaranteed to be **missing** from $G$ and to keep the graph
Kuratowski-free? Note the repair is an induction — verify the induction
hypothesis is on a genuinely smaller parameter and that F11 and F12 do not depend
on each other circularly.

Then read `thm-kuratowski-wagner-planarity-characterisation` and confirm the four
repaired lemmas actually compose into it, in both directions.

Read every one of these in full:

- `prop-face-boundaries-in-three-connected-plane-graphs`
- `lem-kuratowski-minors-are-topological-minors`
- `lem-separation-augmentation-for-kuratowski-free-graphs`
- `lem-edge-maximal-kuratowski-free-is-three-connected`
- `thm-kuratowski-wagner-planarity-characterisation`
- `lem-three-connected-kuratowski-free-is-planar`
- `lem-three-connected-graph-has-a-contractible-edge`
- `prop-face-boundaries-in-two-connected-plane-graphs`
- `cor-euler-formula-for-disconnected-plane-graphs`
- `thm-euler-formula-for-connected-plane-graphs`
- `lem-polygonal-ray-general-position`
- `thm-polygonal-jordan-curve`
- `lem-alternating-kempe-paths-cannot-both-occur`
- `thm-five-colour-theorem`
