# Prime nonstandard intersection arcs: the cut/twist and last-saddle proof

New research proof for the original normalizer's missing Lemma 2.27(C) input. Assume **full AC**, retaining the original flyping branch's choice scope. This is new authoring submitted for independent review, not an acceptance receipt and not a recheck of any accepted supplier.

## Statement and conventions

Let L be a nontrivial prime nonsplit link in S³. Let F_+,F_- be essential smooth spanning surfaces with positive- and negative-definite full normal-transfer pairings, respectively. Both may be nonorientable. Put them in transverse position in the exterior E of a sufficiently small boundary tube. For each component of L, use its link parameter s and write the actual boundary curves as degree-one collar graphs θ=f_±(s) on its tube torus.

For a proper arc α of F_+∩F_-, define its endpoint index k(α)∈{-2,0,2} with the sign convention

\[
 s(F_+)-s(F_-)=\sum_{\alpha}k(\alpha).
\tag{1}
\]

Thus, relative to coordinates (s,θ), the endpoint sign is the negative of the ordinary ordered intersection sign of the F_+ and F_- curves. This avoids reversing the slope convention. A “nonstandard” arc in Kindred's terminology has index zero; an index -2 arc is negatively standard, rather than nonstandard.

Then:

1. No intersection arc has index -2.
2. Every index-zero intersection arc separates both surfaces.
3. Every index-zero intersection arc is boundary-parallel in **both** surfaces.

Consequently every proper intersection arc that is not boundary-parallel in both surfaces has index +2. Boundary-parallel here is intrinsic to the whole surface; the clean cut-surface version needed by the normalizer is supplied below by the priority lemma.

The degree-one collar graphs are actual local input, not arbitrary abstract peripheral curves. They are automatic for sufficiently small smooth radial collars of spanning surfaces whose common boundary is L: extend the surfaces to L, choose a normal disk tube there, and use the transverse inward tangent of each surface. Compactness gives a common sufficiently small radius at which each boundary curve is a graph over s. Recutting the collar transports the given proper arcs and preserves their endpoint indices and boundary-parallelism types.

## Consumed Statement interfaces

Only the Statements of the following existing results were consulted; their proofs, hashes, and receipts were not checked:

- `lem-proper-arc-cuts-preserve-definite-normal-pairings`: cut-surface injection, pairing restriction, and exact rank/component formula;
- `lem-corrected-normal-signature-is-independent-of-spanning-surface` and `lem-opposite-definite-spanning-surfaces-have-the-slope-difference-equation`;
- `lem-normal-transfer-nullity-plus-component-count-is-independent-of-spanning-surface`: two nondegenerate full pairings on spans of the same boundary link have the same component count;
- `lem-definite-normal-pairing-forces-nonsplit-boundary`: a connected definite span has nonsplit boundary;
- `thm-opposite-definite-spanning-surfaces-recover-alternating-diagrams-for-nonsplit-links`: in particular opposite-definite spans of a nonsplit link are connected;
- `lem-opposite-definite-normal-pairings-force-common-circles-to-bound-disks`;
- `lem-opposite-definite-surfaces-have-consistent-minimal-boundary-intersections`: in particular each componentwise slope difference is nonnegative;
- `lem-reduced-alternating-diagram-has-finite-diagrammatic-prime-splitting` and `thm-reduced-alternating-diagram-minimizes-crossings`.

An additional already adopted interface is used, without rereading its proof: for a nontrivial nonsplit link every boundary torus of E is incompressible. The original owner identifies its new proof as Step 1 of `../ordinary-upper-interval-separates-lower-disks.md`, separately adopted by root. Nonsplitness also gives irreducibility of E. “Essential” supplies geometric incompressibility and boundary incompressibility of F_±. These ordinary three-dimensional interfaces are not conclusions of the lemma being authored here.

## 1. The actual cut/twist rank contradiction

Write b_±=b_1(F_±). Both surfaces are connected because L is nonsplit and they are opposite definite. For any two spanning surfaces G_+,G_- of the same resolved link J, corrected-signature invariance gives

\[
 \frac{s(G_+)-s(G_-)}2
 =\sigma(G_+)-\sigma(G_-)
 \le b_1(G_+)+b_1(G_-).
\tag{2}
\]

Here the inequality is just the dimension bound for the signatures of their finite symmetric forms. For opposite-definite G_+,G_- it is an equality. In particular

\[
 s(F_+)-s(F_-)=2(b_++b_-).
\tag{3}
\]

### Index -2

Cut F_+ along α, obtaining G_+. Resolve the boundary in the cut rectangle and call its new link J. At an index -2 arc the compatible operation on F_- is to replace its rectangle along α by one rectangle with a **negative half-twist**, obtaining G_-. The two surfaces now span the same J. The local sign is worth specifying: the two old endpoint crossings each contribute -1 to (1); the two compatible new boundary rectangles have no intersections in the resolved patch. Outside the two endpoint neighborhoods the peripheral curves are unchanged. Hence

\[
 s(G_+)-s(G_-)=s(F_+)-s(F_-)+2.
\tag{4}
\]

This is the cut/twist operation in the top row of Kindred's Figure 31, but the calculation uses the two signed endpoints, rather than treating the picture as proof of the sign.

The twist surface G_- is connected and has b_1(G_-)=b_-: it replaces a band by a half-twisted band, without changing the abstract band count, Euler characteristic, or number of components. It is negative definite for the following actual pairing reason. Boundary-connect-sum F_- with an unknotted negative half-twisted Möbius band M. Its core has transfer self-pairing -1; choose M in a disjoint ball so the new cross-pairings with H_1(F_-) vanish. The boundary-sum pairing is therefore B_{F_-}⊕[-1], a negative-definite form. Cut the proper composite arc that follows α and the Möbius co-core. This produces G_-. The accepted cut interface injects its homology and restricts that negative-definite pairing, so G_- is negative definite. The same interface makes G_+ positive definite.

The full pairings of G_+ and G_- are nondegenerate. The accepted nullity-plus-component-count Statement therefore gives c(G_+)=c(G_-)=1 directly. The cut rank formula now gives b_1(G_+)=b_+-1. This uses the full pairing, including all cross-component entries; it is not an inference that arbitrary spanning surfaces of a nonsplit link are connected. Substituting (3) into (4) yields

\[
 s(G_+)-s(G_-)
 =2(b_++b_-)+2
 =2\bigl(b_1(G_+)+b_1(G_-)\bigr)+4,
\]

contradicting (2). Thus index -2 is impossible.

This argument does **not** invoke Kindred's Proposition 6.5 in the -2 case: that proposition is stated for index-zero arcs. Connectedness of the twisted surface, the full normal-nullity/component invariant, and the explicit cut rank are the valid replacements for that source citation.

### Index zero

Suppose k(α)=0 and α is nonseparating in F_-. Cut **both** surfaces along α. At opposite endpoint signs the two untwisted cuts have the same resolved boundary J, and the removed endpoint contributions add to zero. Therefore

\[
 s(G_+)-s(G_-)=s(F_+)-s(F_-).
\tag{5}
\]

The cut interface makes the two new surfaces opposite definite. By the nonseparating assumption G_- is connected and b_1(G_-)=b_--1. The full normal-nullity/component invariant gives c(G_+)=c(G_-)=1, so b_1(G_+)=b_+-1. Equations (3) and (5) now give

\[
 s(G_+)-s(G_-)
 =2\bigl(b_1(G_+)+b_1(G_-)\bigr)+4,
\]

again violating (2). Interchanging which cut is assumed connected gives the same contradiction if α is nonseparating in F_+. Thus every index-zero arc separates both surfaces. A separation-preserving cut leaves b_1 unchanged and increases the component count by one, exactly as in the supplied cut formula.

## 2. A clean boundary-bigon priority lemma

The following local argument is the essential extra detail behind the final sentence of Kindred's printed proof. Let F,W be essential transverse spanning surfaces in E, with their actual boundary curves degree-one graphs over the **same** link parameter on each torus. Assume their intersections have no circles. If any intersection arc is boundary-parallel in W, then there is an intersection arc β parallel into the boundary in **both cut surfaces** W cut along F and F cut along W. Therefore Procedure 2.24 move (2) is available.

To prove this, take the boundary-parallel disk in W and choose an outermost intersection arc in that disk. It cuts off a disk Q⊂W with boundary β∪η_W, where η_W⊂∂W and int(Q) is disjoint from F. There are no closed intersections by hypothesis. Moreover int(η_W) misses ∂F: any such boundary intersection has its incident intersection-arc germ entering Q, contradicting its clean interior. Hence Q is a genuine boundary-compression disk for F along β, with its other edge on a single boundary torus T.

Boundary incompressibility of F implies that β cuts off a disk P⊂F with other edge η_F⊂∂F on T. Its interior is disjoint from Q because int(Q) misses F. Thus Q∪P, rounded along β, is an embedded disk in E with simple boundary η_W∪η_F on T. Torus incompressibility makes that boundary nullhomotopic on T.

Let I be the proper base interval in the parameter circle covered by η_W. Since ∂F is a degree-one graph, η_F covers either I or its complementary interval. The latter would make the projection of η_W∪η_F have longitudinal degree +1 or -1, contradicting nullhomotopy on T. Thus η_F covers the same interval I. The two boundary graphs have no intersections over int(I), because int(η_W) has none. Consequently int(η_F) misses ∂W as well. Every proper component of int(P)∩W would have endpoints on int(η_F); there are none. A transverse intersection cannot branch from β into P, and circles were excluded. Hence int(P) misses W. The disks P and Q are the required two clean boundary-parallel disks. This proves the priority lemma without an unsupported simultaneous-innermost-disk assertion.

In particular, when moves (1) and (2) are unavailable, **no** intersection arc can be boundary-parallel in W, even intrinsically in the whole W.

## 3. A finite normalizing procedure with the collar graphs retained

Keep F_- fixed. Apply the following hierarchy to F_+:

1. Remove a circle of intersection innermost on F_-. It bounds disks on both surfaces by the supplied opposite-definite circle Statement. The innermost disk on F_- has interior disjoint from F_+; its union with the disk on F_+ is an embedded sphere, which bounds a ball in E. The disk push removes that circle and can remove additional circles, and fixes every proper intersection arc. An interior disk bounded by an intersection circle cannot contain a proper intersection arc with endpoints on ∂F_+.
2. If an arc bounds clean boundary-parallel disks in both cut surfaces, remove it by the small bigon push. Fix all other intersection arcs.
3. Otherwise, if the boundary graphs cobound a torus bigon, push the F_+ boundary graph across it and extend this over its small surface collar. This is the boundary-bigon saddle of Procedure 2.24.

All moves are actual ambient isotopies of F_+ in E with boundary allowed to move on the tube tori; essentiality and definiteness are retained. The graph condition can be kept throughout. For move (3), lift the two angle functions to the same real interval between the two adjacent endpoint parameters and change f_+ there through graphs, crossing f_- only at the cancelling tangency. The torus bigon is precisely an interval with no further intersections in its interior. Move (2) uses the same graph sweep at its boundary, extended over its two clean disks; move (1) fixes the peripheral curves. No non-graph collar is introduced.

The nonnegative integer

\[
 \#\pi_0(F_+\cap F_-)+\#(\partial F_+\cap\partial F_-)
\]

strictly decreases at every move. A saddle either merges two arcs into one or turns a single arc into a circle; the boundary point count drops by two in either case. Hence the procedure terminates after finitely many moves.

At termination there are no circles. If one torus had boundary intersections of both signs, adjacent opposite crossings of the two angle graphs would bound a torus bigon: their real angle difference crosses the same integer once in each direction on the interval between those adjacent points. Thus move (3) would still be available. All remaining endpoints on a torus have the same sign. Their algebraic count is that torus's nonnegative componentwise slope difference, so every remaining endpoint has positive sign. A zero slope difference gives no endpoints. Every remaining arc therefore has index +2.

The terminal pair determines an **actual** alternating diagram, not merely individually isotopic checkerboards. Here is the usual finite cell construction in this special position. First extend both boundary collars through the tube to their common boundary L. Their intersection graph is then L together with the N interior intersection arcs. Collapse each standard intersection arc through its small product crossing chart, retaining the order of the four boundary edges; +2 gives exactly the alternating crossing chart. Glue the complementary surface panels along these charts to obtain a closed embedded connected surface S. If N is the number of arcs, (1) and (3) give N=b_++b_-. The intersection graph L together with N proper chords has Euler characteristic -N; hence inclusion-exclusion gives the displayed sum, and collapsing the N chord edges preserves that Euler characteristic. Its Euler characteristic is

\[
 \chi(S)=\chi(F_+)+\chi(F_-)+N
 =(1-b_+)+(1-b_-)+N=2.
\]

Thus S is a sphere. The boundary edges form the diagram of L on S; its checkerboard surfaces are precisely the terminal pair under the displayed crossing-chart identifications. The diagram is connected, since a disconnected spherical diagram would split L.

This diagram is reduced. At a nugatory crossing, the disk on the projection sphere detecting that crossing, thickened through its crossing chart, gives a boundary-compression disk for the checkerboard carrying the corresponding one-half-twisted band. Choose the checkerboard color for which that nugatory crossing is a loop band in the planar Tait graph (a bridge for the other color is a loop in the dual color). Its co-core arc is essential: deleting that loop band keeps the surface connected and lowers b_1 by one, whereas cutting off a boundary disk would leave b_1 unchanged. This contradicts essentiality of the terminal surfaces, which are isotopic to the initial essential surfaces. Equivalently the nugatory crossing's local band is the removable boundary-compression in that chart; its witnessing disk lies away from the other bands by the defining nugatory-circle disk. Hence no nugatory crossing remains.

The terminal diagram is diagrammatically prime. If it had a two-point decomposing curve with crossings on both sides, use the supplied finite prime-splitting Statement at that split. It gives two connected reduced alternating child diagrams with positive crossing counts and an actual two-point sphere/capping-ball realization. Crossing minimality implies neither child represents the trivial link: a positive crossing count cannot realize crossing number zero. Thus the two-point sphere gives a nontrivial link sum, contrary to primeness of L. This deduction uses the finite splitting and minimal-crossing **Statements**, not the converse direction of the prime-diagram indecomposability theorem.

## 4. The terminal separating-arc property

For either checkerboard W of a diagrammatically prime connected diagram, every proper arc δ⊂W disjoint from the other checkerboard's crossing co-cores, and separating W, is boundary-parallel in W.

Indeed δ lies in one checkerboard region disk. Collapse all its other region disks and bands to the planar Tait graph, retaining a small disk at the vertex v containing δ. The arc δ splits that vertex disk into two sectors. Since δ separates W, splitting v in that way disconnects the ribbon graph into two pieces; the half-twists on the bands do not change this connectivity assertion. The two pieces occupy consecutive sectors at v. A boundary of a thin regular neighborhood of one piece, filling its complementary holes except the one containing the other piece, gives a Jordan separation curve through the two sectors at v. Move that curve across the two small region-boundary collars of δ. It is now a simple curve on the projection sphere transverse to the link diagram exactly at the two endpoints of δ, with the graph pieces on its two sides. This is the explicit two-point diagram curve associated to the separating arc.

Diagrammatic primeness says one side has no crossings. Its Tait-graph piece therefore has no edges. Since the whole Tait graph is connected, that side of the split vertex consists only of the corresponding sector disk and no band. It is exactly a disk in W cobounded by δ and an interval of ∂W. This proves the claim.

Let F_0,...,F_t denote the finite sequence from §3, with F_- fixed. Therefore the terminal configuration satisfies

\[
 \text{Every proper arc in }F_-\setminus F_t
 \text{ that separates }F_-\text{ is boundary-parallel in }F_-.
\tag{6}
\]

This property pulls **backward** across moves (1) and (2). Those moves merely delete their intersection circle or clean boundary-parallel arc, up to an isotopy fixing every other intersection component. A proper arc disjoint from the earlier intersection set is then also disjoint from the later one, after the displayed local identification. Thus property (6) for the later configuration implies it for the earlier configuration. Only this backward implication is needed; no stronger unspecified invariance assertion is used.

## 5. The last boundary-bigon saddle

Assume for contradiction that an original index-zero arc α is not boundary-parallel in both surfaces. If moves (1) and (2) remove it, it was boundary-parallel in both at that moment; pulling back through the preceding surface isotopies shows it was so originally. Otherwise those moves fix its proper isotopy class and index. Since the terminal configuration has only +2 arcs, at least one move (3) must occur. Let F_s→F_{s+1} be the **last** such move. All later moves are (1) and (2); hence property (6) holds for F_{s+1} by its backward propagation.

Just before this move no circles or clean double boundary bigons exist, by the priority rule. Its two torus-bigon endpoints have opposite signs. They cannot belong to the same intersection arc: that case creates a circle on F_- by closing that old arc along the bigon collar. The newly created circle bounds a disk on F_- by the supplied circle Statement, and adjoining the collar back to ∂F_- exhibits the old arc as boundary-parallel in F_-. The priority lemma in §2 would already provide move (2), a contradiction. Thus the two endpoints belong to **distinct** old arcs α_1,α_2, which the saddle merges into one new arc α_3.

The arc incident to the negative endpoint cannot have index +2; index -2 was excluded in §1. Relabel so this is α_1. It has index zero and therefore separates F_- by §1.

Here is the actual local push-off used after the saddle. Take a small rectangular collar of the boundary edge of the torus bigon on F_-. Before the saddle the two old arc ends run transversely from that edge to the two upper sides of the rectangle. After the saddle they are joined by one interior arch, with their remote tails making α_3. A parallel of the first old tail can be continued on the side of that arch toward the now empty boundary interval between the two old endpoints. Extend the parallel along the remainder of α_1, moving its remote endpoint slightly along ∂F_-. This gives a proper arc δ in F_- disjoint from F_{s+1}, properly isotopic to α_1. Its support is the saddle rectangle and a narrow strip along that old tail, so it misses all unchanged intersection arcs. This is the branch push-off in the local two-to-one saddle; it does not require moving α_1 across α_3.

The arc δ separates F_-, because α_1 did. Property (6) for F_{s+1} therefore makes δ boundary-parallel in F_-. Pull back its proper isotopy to conclude that α_1 was boundary-parallel in F_- **before** the saddle. At that earlier configuration there were no circles. The clean-bigon priority lemma supplies move (2), contradicting the fact that move (3) was selected. This contradiction proves §1's remaining assertion: every index-zero arc is boundary-parallel in both surfaces.

## Disposition and integration boundary

This new proof supplies the prime nonstandard-arc input for `../current-original-normalizer-proof.md`. It is independent of the cap ε issue and changes no cap construction. It establishes the cut/twist rank obstruction, the finite procedure, the precise last-saddle argument, and the clean two-cut-surface priority step. It retains full AC, uses accepted inputs only at the stated interfaces, and awaits independent review by the original owner/root. No canonical, map, native-state, or acceptance file has been modified.
