---
verification:
  verified: {"model":"gpt-6.1-sol","verdict":"pass","date":"2026-10-03","scope":"Recovered cumulative historical verification: original independent Step5 whole-item claim/body/proof reading for lem-the-standard-flower-is-a-deformation-retract-with-free-meridian-basis, completed Step5 repairs/dispositions, and later exact Step7 local correction reasoning. Later correction evidence is local author repair/self-review, not an independent fresh audit. Every substantive preguard-to-current delta is covered by the recorded repair reason; no new review or historical audit stamp is claimed. Supplier/source coverage is limited to actual recorded passages/interfaces, excluding recursive foundational closure/all bibliography.","delegated_by":"owner via tools/autopilot frontier-38-owner-30 Step5 reader and Step7 repair dispatch","content_sha256":"92d4cb41a3556142cbb8fa6fef3d088fa3928c7d153107843ebd65d034c278d2","evidence":["research/frontier-38-owner-30-reader-15.md","research/frontier-38-owner-30-reader-findings-15.json","research/frontier-38-owner-30-dispatch/reader-reader-15.result.json","research/frontier-38-owner-30-alpha-batch-15-5a-decisions.json","research/frontier-38-owner-30-step5-closure.json","research/frontier-38-owner-30-step7-auditor-baseline.json","research/frontier-38-owner-30-step7-v2/step7-v2-initial-r1-u15.json","research/frontier-38-owner-30-dispatch/alpha-adjudicate-step7-v2-initial-r1-u15.result.json"],"historical_binding":{"preguard_raw_sha256":"138e92560a7718b94c1932d9ef56e7fa672b76c9792c3aa30e928271de5221c6","preguard_content_sha256":"98d7a25b59f6eb749cf7c408f6adc29a5a1e0558e173d6a32c757914d98a405f","captured_carrier":{"path":"research/frontier-38-owner-30-dispatch/alpha-adjudicate-step7-v2-initial-r1-u15.log","line":5939},"postguard_content_sha256":"5eaa3d9f4656745501a3c5bd34a2cc8689eb99b54b101a4f8035a856a1ec7b8c","final_carrier":"git d90f26208:items/lem-the-standard-flower-is-a-deformation-retract-with-free-meridian-basis.md","publication_transformation":"status draft to published; verification excluded; remaining mathematics/source bytes match exact postguard carrier","original_read_completed_at":"2026-10-03T08:39:44.080Z","local_repair_completed_at":"2026-10-03T15:44:02.198Z","local_repair_reason":"The allowed q_i=1/2 gives tether y=1-2x, contradicting the asserted y<=1-4|x| at every small x>0. The separating collar is essential to the polygonal cut construction used for the retraction. Replaced the false estimate with y=1-|x|/|q_i|<=1-|x| for q_i!=0, handled the vertical tether separately, and chose width |x|/2 with 1-sqrt(1-x^2)<|x|/2. Radial evacuation, fixed-shore quotient descent, based tether-tree collapse and the reduced-word covering-tree argument establish all original clauses without AC. This is a local review of the repair, not an independent audit. The Statement is byte-for-byte unchanged.","local_repair_qualification":"Local author repair/self-review; cumulative with original independent full item reading"}}
id: lem-the-standard-flower-is-a-deformation-retract-with-free-meridian-basis
kind: lemma
title: "The standard flower is a deformation retract with free meridian basis"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 1
deps: [lem-finite-polygonal-disk-and-collar-surgery, def-standard-meridians-of-a-punctured-disk, def-retraction-and-deformation-retract, prop-retracts-inject-fundamental-groups, def-wedge-of-pointed-spaces, thm-fundamental-group-of-finite-wedge-of-circles, prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant, thm-induced-fundamental-group-map-functoriality, def-free-group, thm-reduced-words-form-the-free-group, thm-covering-space-lifting-criterion, thm-higher-dimensional-spheres-are-simply-connected, def-homeomorphism-and-open-maps, lem-cw-quotients-and-collapse-of-a-contractible-subcomplex]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 1.6, printed pp. 8-10 (Figure 3; the loops x_1,...,x_n generate pi_1 of the punctured disc)"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Allen Hatcher, Algebraic Topology, section 1.A pp. 83-86 and Example 1B.1 pp. 87-88 (graphs, trees and free bases)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
---

## Statement

For each standard meridian let $t_i$ be its truncated tether from $d$ to
$p_i\in C_i$, namely the restriction of $s_i$ to
$[0,1-\varepsilon_i/|d-q_i|]$. The **standard flower** is the finite graph
$$W=\{d\}\cup\bigcup_{i=1}^n(t_i\cup C_i)\subseteq D^2\setminus Q_n.$$
Then $W$ is a deformation retract of $D^2\setminus Q_n$, fixing $d$;
$\pi_1(W,d)$ is free with basis $[x_1],\dots,[x_n]$; and
$\pi_j(W,d)=0$ for all $j\ge2$. The tethers are edges of a tree, not parts
of embedded circle summands through $d$.

## Facts & Assumptions

**Given:** the disk, punctures, circles and truncated tethers above, as in
[[def-standard-meridians-of-a-punctured-disk]]. Let $B_i$ be the closed disk
bounded by $C_i$, $S=D^2\setminus\bigcup_i\operatorname{int}B_i$, and
$T=\bigcup_i t_i$. The graph $T$ is a finite tree with root $d$.

[F1] Collapsing a CW subcomplex with a contraction fixing its contraction
point is a based homotopy equivalence
([[lem-cw-quotients-and-collapse-of-a-contractible-subcomplex]]).

[F2] The wedge of $n$ circles has fundamental group freely generated by its
circle loops; a based homotopy equivalence induces isomorphisms of homotopy
groups ([[thm-fundamental-group-of-finite-wedge-of-circles]],
[[thm-induced-fundamental-group-map-functoriality]],
[[prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant]],
[[prop-retracts-inject-fundamental-groups]]).

[F3] Reduced words are unique in the free group
([[def-free-group]], [[thm-reduced-words-form-the-free-group]]).

[F4] Maps of simply connected spheres lift to a based covering space;
[[thm-covering-space-lifting-criterion]] applies to the spheres of
[[thm-higher-dimensional-spheres-are-simply-connected]].

[F5] Finite polygonal arcs have disk-and-band neighborhoods; simple polygonal regions are disks, and prescribed PL boundary homeomorphisms extend by finite triangulations
([[lem-finite-polygonal-disk-and-collar-surgery]]). Its constructions use only finite choices and ordered-field coordinates.

## Proof

1.1 *Removing the noncompact puncture neighborhoods.* In $B_i\setminus\{q_i\}$ write $z=q_i+r e^{\mathrm{i}\theta}$, $0<r\le\varepsilon_i$, and send it at time $u$ to $q_i+((1-u)r+u\varepsilon_i)e^{\mathrm{i}\theta}$. Keep the complement of the disk interiors fixed. This formula is continuous on $X=D^2\setminus Q_n$ (no extension to $q_i$ is asserted), fixes $C_i$, and ends in $S$. The finitely many formulas agree on their boundary circles, so they give a strong deformation retraction $X\to S$ fixing the truncated flower $W$. [given, construct]

1.2 *Cutting the compact holed disk.* Open $S$ along the $t_i$, separating the sectors at $d$. The resulting compact surface $K$ is a disk: thicken the straight tethers into thin rectangular strips from the outer boundary to their respective circular holes; the remaining planar region has a single Jordan polygonal boundary with circular detours. First flatten the outer circle near $d$ while fixing every tether. For small $|x|$ write its top as $y_b(x)=\sqrt{1-x^2}$ and put $w(x)=|x|/2$. At a point of the tether to $q_i\ne0$ one has $x=tq_i$, $y=1-t=1-|x|/|q_i|\le1-|x|$, since $|q_i|<1$; a tether with $q_i=0$ lies on $x=0$. For sufficiently small nonzero $|x|$, $1-y_b(x)<|x|/2$, so $y_b(x)-w(x)>1-|x|$ and the collar $y_b(x)-w(x)<y<y_b(x)+w(x)$ misses every tether. On each vertical fiber map $y_b(x)$ to $y_b(x)+\chi(x)(1-y_b(x))$, fixing its two collar endpoints and interpolating linearly on the two pieces; take $\chi=1$ near zero and $\chi=0$ outside a slightly larger small interval. Since $0\le1-y_b(x)<w(x)$, these fiber maps are increasing. At $x=0$ use the identity; the displacement bound $1-y_b(x)\to0$ proves continuity of both maps and inverses there. The outer boundary becomes flat near $d$ and all tethers stay fixed. Away from that flat segment the outer boundary is at positive distance from the flower, so finitely many ordinary boundary collar charts replace its remaining circular pieces by close polygonal chords, fixing the flower. Next straighten each inner circular boundary portion by an explicit radial collar map: choose a sufficiently fine inscribed polygon with the tether contact as one vertex, let $R(\theta)>0$ be its radial boundary function, and on the outer annular collar interpolate monotonically from radius $R(\theta)$ at the old circle radius to the unchanged outer collar radius. Choose the polygon fine enough that the interpolation stays strictly increasing. On the tether direction $R$ equals the original circle radius, so the tether is fixed. All boundaries are now finite polygons and the tethers remain straight. Open their narrow vertex disks and edge strips using [F5]; the boundary trace is a single simple polygon, and [F5] supplies its disk parametrization by finite diagonal splitting. No general Jordan–Schönflies extension or arbitrary plane-arc theorem is used for this fixed circular/straight geometry. This supplies a disk coordinate compatible with the side collars, so opening the zero-width tethers has the same disk topology. Its boundary is the union of the single outer arc $A$ and its complementary closed arc $P$. The arc $P$ consists, in order, of all the tether shores and all the circles opened at their tether endpoints. For $n\ge1$, $A$ and $P$ meet just at their two endpoints, and all paired shores lie in $P$. The quotient $\kappa:K\to S$ identifies matching tether shores and the sector copies of $d$, and its image of $P$ is precisely $W$. [given, F5, construct]

2.1 *The quotient-compatible retraction.* In the disk coordinate of step 1.2 take $(K,P)$ to $([0,1]^2,[0,1]\times\{0\})$, using the prescribed PL boundary extension of [F5], and returning through the explicit collar coordinates of step 1.2. The homotopy $(x,y)\mapsto(x,(1-u)y)$ strongly retracts the square onto its bottom edge. Transport it to $K$, where it fixes $P$ pointwise. For paired points $z,z'$ one has $\kappa(R_u(z))=\kappa(z)=\kappa(z')=\kappa(R_u(z'))$, since both lie in $P$. Thus $(z,u)\mapsto\kappa(R_u(z))$ descends through $\kappa\times\operatorname{id}_I$. This is a quotient map because $K\times I$ is compact and $S\times I$ is Hausdorff. The descended continuous homotopy strongly retracts $S$ onto $W$. Composing with step 1.1 proves the deformation-retract clause. When $n=0$, take $W=\{d\}$ and use the straight-line contraction of $D^2$ to $d$. [F5, step 1.1, step 1.2, construct]

3.1 *The meridian basis.* Contract the finite tether tree $T$ to $d$ along its edges, fixing $d$. By [F1], the collapse $c:W\to W/T$ is a based homotopy equivalence. The quotient graph $W/T$ is a wedge of the $n$ circles $C_i$, and $c\circ x_i$ traverses its $i$-th circle once positively. Hence [F2] gives a free basis $[x_i]$ of $\pi_1(W,d)$ and an isomorphism to $\pi_1(X,d)$. The flower itself is a lollipop graph, rather than homeomorphic to the wedge. [F1, F2, step 2.1]

4.1 *Higher homotopy.* The universal cover of the wedge graph has vertices the reduced words and an edge from $w$ to $wx_i$ for every $i$. Local stars map homeomorphically to the star of its wedge vertex, so this is a covering; uniqueness of reduced words [F3] implies the cover is a tree. Give each edge length one and contract along the unique geodesic to the root, sending distance $r$ to $(1-u)r$. The locally finite graph metric gives the graph topology, and this contraction is continuous and fixes the root. For $j\ge2$, [F4] lifts any based sphere map to this contractible tree, where it contracts; projecting makes the original map nullhomotopic. Thus the wedge has vanishing higher homotopy, and [F2] with the based equivalence of step 3.1 gives the same for $W$. All coordinate selections and triangulations concern finitely many supplied straight segments and circles; no choice axiom is used. [F2, F3, F4, step 3.1, construct] ∎
